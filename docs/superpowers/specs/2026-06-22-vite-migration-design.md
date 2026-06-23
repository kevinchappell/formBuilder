# formBuilder Webpack-to-Vite Migration Design

## Overview

Migrate the formBuilder project from webpack to the latest stable Vite without losing functionality. The project is a jQuery plugin with two main bundles (`form-builder` and `form-render`), a demo application, control plugins, and a Jest-based test suite. The migration must preserve the existing IIFE/UMD output format so current consumers can continue using `<script src="...">` tags without regressions.

## Goals

- Replace webpack with Vite for all builds.
- Preserve the existing public artifacts and file names.
- Keep `jQuery` as an external global wrapped in the existing IIFE shape.
- Migrate the dev server to Vite (serve `demo/index.html`, watch source, no auto-open).
- Migrate control plugin builds to Vite.
- Migrate the test suite from Jest to Vitest.
- Remove webpack-specific dependencies and configuration files.
- Leave non-webpack tooling (`build-vendor.js`, `copy-language-files.js`) unchanged.

## Non-Goals

- No changes to docs content or docs build pipeline (docs are moving to a new repository).
- No refactor of the source code beyond what is required by the build tool change.
- No change to the package public API or consumer-facing plugin interface.

## Build Artifacts & Output Structure

The migration must produce exactly the same public artifacts as the current webpack setup:

- `dist/form-builder.min.js`
- `dist/form-builder.js` (unminified)
- `dist/form-render.min.js`
- `dist/form-render.js` (unminified)
- `dist/form-builder.min.js.gz`
- `dist/form-render.min.js.gz`
- `dist/control_plugins/*.min.js`
- `demo/assets/js/demo.min.js`
- `demo/assets/js/control_plugins/*.min.js`
- `demo/index.html` (processed with the language dropdown)

To match the current minified + unminified + gzip behavior:

1. Run a minified library build to `dist/` and `demo/assets/js/`.
2. Run a second unminified library build to `dist/` (no `.min` suffix).
3. Run gzip compression as a final step.

`package.json` `"main"` will remain `dist/form-builder.min.js`, and the `files` array will remain unchanged.

## Main Library Build Configuration

A single Vite configuration will handle the two main bundles using Vite library mode:

- **Entries**: `src/js/form-builder.js` and `src/js/form-render.js`.
- **Format**: UMD/IIFE with `jQuery` as an external global (`globals: { jquery: 'jQuery' }`).
- **Output filenames**: `[name].min.js` for minified builds, `[name].js` for unminified builds.
- **jQuery wrapper**: The current webpack `WrapperPlugin` wraps the bundle in `(function ($) { ... })(jQuery);`. Vite's UMD output with `jquery` marked external achieves the same consumer behavior (the bundle expects the `jQuery` global). To preserve the exact IIFE shape, a small Rollup plugin will prepend/append the wrapper via `output.banner`/`output.footer`.
- **Babel transforms**: Vite uses esbuild by default. The source is already modern ES2018+, so no Babel preset replacement is needed. If any syntax causes issues, the existing `@babel/preset-env` targets can be mirrored via `build.target`.
- **SCSS**: Imported directly in `form-builder.js` and `form-render.js`. Vite handles SCSS out of the box with the installed `sass` package. The `style-loader` class attribute `'formBuilder-injected-style'` will be preserved by configuring how styles are injected.
- **`FB_EN_US` global**: The webpack `DefinePlugin` injects this. In Vite we use `define: { FB_EN_US: JSON.stringify(langFiles['en-US']) }`.
- **Banner**: A Rollup banner plugin adds the existing header comment (`jQuery formBuilder`, version, author, homepage).

## Demo Build & Dev Server

The demo is treated as a separate Vite app build:

- **Entry**: `src/demo/js/demo.js`.
- **Output**: `demo/assets/js/demo.min.js`.
- **HTML**: `src/demo/index.html` is the source template. The EJS templating (`<% _.forEach(htmlWebpackPlugin.options.langFiles, ...) %>`) will be replaced by a small Vite plugin that injects the language dropdown options at build/dev time. The script `src` attributes in the HTML will point to the built bundle paths, and the plugin will rewrite them for dev if needed.
- **Dev server**: `npm run dev` / `npm start` will:
  1. Run `build:vendor` and `copy:lang` first (existing Node scripts, unchanged).
  2. Start Vite dev server with `root: 'demo'` (or appropriate config) so `demo/index.html` is served.
  3. Source files under `src/` are resolved and served with HMR.
- **Static assets**: `demo/assets/lang/` and `demo/assets/js/vendor.js` are served as static files (Vite's `publicDir` or the existing `demo/` contents).

## Control Plugins Build

Control plugins are standalone runtime-loaded bundles. The current webpack config scans `src/js/control_plugins/*.js` and emits each to both `dist/control_plugins/` and `demo/assets/js/control_plugins/`.

In Vite, a dedicated config (`vite.config.plugins.js`) will:

- Scan `src/js/control_plugins/` at config resolution time.
- Build each file as a separate library entry with UMD/IIFE output and the jQuery external global.
- Output each plugin as `[pluginName].min.js` to both target directories in a single build (or via two output paths).

No source changes to the plugins themselves are needed — they still register via `window.fbControls`.

## Test Migration to Vitest

Replace Jest with Vitest:

- **Config**: `vitest.config.js` extending the main Vite config.
- **Environment**: `jsdom`.
- **Setup file**: Convert `tests/setup-jest.js` to `tests/setup-vitest.js`, setting `globalThis.$`, `globalThis.jQuery`, and `globalThis.FB_EN_US`.
- **CSS/SCSS**: Vitest can either process SCSS with the installed `sass` package or mock styles via `test.css: false` and an alias to the existing `styleMock.js`.
- **Test command**: `vitest run --coverage` (coverage via `@vitest/coverage-v8`).

No test file rewrites are needed unless an import path changes.

## npm Scripts & Dependencies Cleanup

### Scripts to update/keep

- `build` → Vite production build for main bundles + gzip.
- `build:plugins` → Vite build for control plugins.
- `build:vendor`, `copy`, `copy:lang` → keep as-is (no webpack dependency).
- `build:all` → run `build:plugins`, `build:vendor`, `build`, `copy`.
- `build:analyze` → use `vite-bundle-visualizer` or Rollup's analyzer.
- `dev` / `start` → run `build:vendor` + `copy:lang` + `vite`.
- `test` → `vitest run --coverage`.
- Remove webpack-specific scripts.

### Dependencies

- **Add**: `vite`, `vitest`, `@vitest/coverage-v8`, `jsdom`, `vite-plugin-compression2` (or similar). `sass` is already present.
- **Remove**: `webpack`, `webpack-cli`, `webpack-dev-server`, `babel-loader`, `css-loader`, `style-loader`, `sass-loader`, `postcss-loader`, `html-webpack-plugin`, `html-webpack-harddisk-plugin`, `clean-webpack-plugin`, `compression-webpack-plugin`, `wrapper-webpack-plugin`, `eslint-webpack-plugin`, `webpack-bundle-analyzer`, `jest`, `jest-environment-jsdom`, `jest-scss-transform`.
- **Keep Babel packages** only if ESLint still needs `@babel/eslint-parser`; evaluate whether to switch to the native parser after the build works.

### Files to remove

- `tools/webpack.config.js`
- `tools/webpack.plugins.config.js`
- `tests/setup-jest.js` (replaced by `tests/setup-vitest.js`)

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| UMD/IIFE output shape differs from webpack | Use Rollup banner/footer plugin to inject the exact jQuery wrapper; verify output headers. |
| Multiple entries in Vite library mode produce unexpected chunks | Use explicit `rollupOptions.output.entryFileNames` and test both dev and production builds. |
| SCSS injection class attribute lost | Configure Vite CSS injection or keep style imports and verify the generated `<style>` tag class. |
| `FB_EN_US` global undefined at runtime | Use Vite `define` replacement and verify in built bundles. |
| Demo HTML language dropdown missing | Build a small Vite plugin to inject `langFiles` into `demo/index.html`. |
| Vitest cannot resolve jQuery/SCSS imports | Reuse existing module mocks and setup file patterns. |
| `lodash/throttle` is a transitive dependency | Add `lodash` as an explicit dependency or verify Vite resolves it from `node_modules`. |

## Success Criteria

- `npm run build` produces all artifacts listed in the Build Artifacts section.
- `npm run build:plugins` produces all control plugin artifacts.
- `npm run dev` serves the demo and source files without errors.
- `npm test` passes with Vitest.
- The built `dist/form-builder.min.js` can be loaded via `<script>` after jQuery and behaves the same as the webpack build.
- The demo page language dropdown is populated and functional.

## Open Questions

None remaining; all clarifying questions were resolved with the user before this design was written.
