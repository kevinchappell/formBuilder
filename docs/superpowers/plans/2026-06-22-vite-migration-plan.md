# formBuilder Webpack-to-Vite Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace webpack with Vite for all builds, dev server, control plugins, and tests while preserving existing artifacts and functionality.

**Architecture:** Three focused Vite configs (library, plugins, demo) plus a Vitest config share a common base. The library build emits both minified and unminified UMD/IIFE bundles with the existing jQuery wrapper. The demo config injects the language dropdown and rewrites script paths for dev vs. production.

**Tech Stack:** Vite 8.x, Vitest 4.x, jsdom, @vitest/coverage-v8, vite-plugin-compression2, sass

---

## File Structure

- `vite.config.base.js` — shared Rollup/Vite settings (jQuery external, FB_EN_US define, banner/footer wrapper).
- `vite.config.lib.js` — main `form-builder` / `form-render` library builds (minified + unminified).
- `vite.config.plugins.js` — control plugins scanner/builder.
- `vite.config.demo.js` — demo app build and dev server.
- `vitest.config.js` — test configuration.
- `src/demo/index.html` — updated template with replaceable placeholders.
- `tests/setup-vitest.js` — Vitest setup globals.
- `package.json` — updated scripts and dependencies.
- Removed: `tools/webpack.config.js`, `tools/webpack.plugins.config.js`, `tests/setup-jest.js`.

---

### Task 1: Create shared Vite base config

**Files:**
- Create: `vite.config.base.js`

- [ ] **Step 1: Write the shared base config**

```javascript
import { resolve } from 'path'
import pkg from './package.json'
import langFiles from 'formbuilder-languages'

export const root = resolve(__dirname)

export const camelCase = str => str.replace(/-([a-z])/g, (m, w) => w.toUpperCase())

export const entries = {
  'form-builder': resolve(root, 'src/js/form-builder.js'),
  'form-render': resolve(root, 'src/js/form-render.js'),
}

export function banner(name) {
  const cleanName = name.replace(/^dist\//, '').replace(/\.min$/, '')
  const lines = [
    `jQuery ${camelCase(cleanName)}: ${pkg.homepage}`,
    `Version: ${pkg.version}`,
    `Author: ${pkg.author}`,
  ]
  return lines.join('\n')
}

export function getBaseConfig() {
  return {
    define: {
      FB_EN_US: JSON.stringify(langFiles['en-US']),
    },
    resolve: {
      alias: {
        '@': resolve(root, 'src/js'),
      },
    },
  }
}

export function getLibraryOutput(minify) {
  return {
    dir: resolve(root, 'dist'),
    entryFileNames: `[name]${minify ? '.min' : ''}.js`,
    name: chunk => `jQuery${camelCase(chunk.name.replace(/^dist\//, '').replace(/\.min$/, ''))}`,
    globals: { jquery: 'jQuery' },
    banner: chunk => `(function ($) { "use strict";\n/*\n * ${banner(chunk.name)}\n */`,
    footer: () => '\n})(jQuery);',
  }
}
```

- [ ] **Step 2: Verify the file syntax**

Run: `node --check vite.config.base.js`
Expected: no output (success).

- [ ] **Step 3: Commit**

```bash
git add vite.config.base.js
git commit -m "build: add shared vite base config"
```

---

### Task 2: Create main library Vite config

**Files:**
- Create: `vite.config.lib.js`

- [ ] **Step 1: Write the library config**

```javascript
import { defineConfig } from 'vite'
import { root, entries, getBaseConfig, getLibraryOutput } from './vite.config.base.js'

export default defineConfig(({ mode }) => {
  const minify = mode !== 'unminified'
  return {
    ...getBaseConfig(),
    build: {
      emptyOutDir: false,
      minify,
      lib: {
        entry: entries,
        formats: ['umd'],
      },
      rollupOptions: {
        external: ['jquery'],
        output: getLibraryOutput(minify),
      },
    },
  }
})
```

- [ ] **Step 2: Verify the file syntax**

Run: `node --check vite.config.lib.js`
Expected: no output (success).

- [ ] **Step 3: Commit**

```bash
git add vite.config.lib.js
git commit -m "build: add main library vite config"
```

---

### Task 3: Update demo HTML template

**Files:**
- Modify: `src/demo/index.html`

- [ ] **Step 1: Replace EJS loops and template variables with placeholders**

The language dropdown options will be injected by the demo Vite plugin. Replace lines 27-31:

```html
        <% _.forEach(htmlWebpackPlugin.options.langFiles, function(langFile) { %>
          <option value="<%- langFile.locale %>"><%- langFile.nativeName %></option>
          <% }); %>
```

with:

```html
          <!-- LANG_OPTIONS -->
```

Replace lines 55-59:

```html
  <script src="assets/js/vendor.js"></script>

  <script src="<%= htmlWebpackPlugin.options.formBuilder %>"></script>
  <script src="<%= htmlWebpackPlugin.options.formRender %>"></script>
  <script src="<%= htmlWebpackPlugin.options.demo %>"></script>
```

with:

```html
  <script src="assets/js/vendor.js"></script>

  <script src="FORM_BUILDER_SCRIPT"></script>
  <script src="FORM_RENDER_SCRIPT"></script>
  <script src="DEMO_SCRIPT"></script>
```

- [ ] **Step 2: Commit**

```bash
git add src/demo/index.html
git commit -m "build: update demo html template for vite"
```

---

### Task 4: Create demo Vite config

**Files:**
- Create: `vite.config.demo.js`

- [ ] **Step 1: Write the demo config**

```javascript
import { defineConfig } from 'vite'
import { resolve } from 'path'
import langFiles from 'formbuilder-languages'
import { root, getBaseConfig } from './vite.config.base.js'

const langOptions = Object.entries(langFiles).map(([locale, data]) => ({
  locale,
  nativeName: data.NATIVE_NAME,
}))

const isDev = process.env.NODE_ENV !== 'production'

export default defineConfig({
  ...getBaseConfig(),
  root,
  publicDir: 'demo',
  build: {
    outDir: resolve(root, 'demo'),
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(root, 'src/demo/index.html'),
      output: {
        entryFileNames: 'assets/js/demo.min.js',
      },
    },
  },
  plugins: [
    {
      name: 'demo-html',
      transformIndexHtml(html) {
        const optionsHtml = langOptions
          .map(({ locale, nativeName }) => `          <option value="${locale}">${nativeName}</option>`)
          .join('\n')

        return html
          .replace('<!-- LANG_OPTIONS -->', optionsHtml)
          .replace(
            'FORM_BUILDER_SCRIPT',
            isDev ? '/src/js/form-builder.js' : 'assets/js/form-builder.min.js',
          )
          .replace(
            'FORM_RENDER_SCRIPT',
            isDev ? '/src/js/form-render.js' : 'assets/js/form-render.min.js',
          )
          .replace('DEMO_SCRIPT', isDev ? '/src/demo/js/demo.js' : 'assets/js/demo.min.js')
      },
    },
  ],
})
```

- [ ] **Step 2: Verify the file syntax**

Run: `node --check vite.config.demo.js`
Expected: no output (success).

- [ ] **Step 3: Commit**

```bash
git add vite.config.demo.js
git commit -m "build: add demo vite config"
```

---

### Task 5: Create control plugins Vite config

**Files:**
- Create: `vite.config.plugins.js`

- [ ] **Step 1: Write the plugins config**

```javascript
import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import { root, camelCase, getBaseConfig } from './vite.config.base.js'

const pluginsDir = resolve(root, 'src/js/control_plugins')

function getEntries() {
  const files = fs.readdirSync(pluginsDir).filter(f => f.endsWith('.js'))
  const entries = {}
  for (const file of files) {
    const name = file.replace(/\.js$/, '')
    entries[`dist/control_plugins/${name}`] = resolve(pluginsDir, file)
  }
  return entries
}

export default defineConfig({
  ...getBaseConfig(),
  build: {
    emptyOutDir: false,
    minify: true,
    lib: {
      entry: getEntries(),
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['jquery'],
      output: {
        entryFileNames: '[name].min.js',
        name: chunk => `jQuery${camelCase(chunk.name.replace(/^dist\/control_plugins\//, ''))}`,
        globals: { jquery: 'jQuery' },
        banner: chunk => `(function ($) { "use strict";\n`,
        footer: () => '\n})(jQuery);',
      },
    },
  },
})
```

- [ ] **Step 2: Verify the file syntax**

Run: `node --check vite.config.plugins.js`
Expected: no output (success).

- [ ] **Step 3: Commit**

```bash
git add vite.config.plugins.js
git commit -m "build: add control plugins vite config"
```

---

### Task 6: Create Vitest config and setup file

**Files:**
- Create: `vitest.config.js`
- Create: `tests/setup-vitest.js`

- [ ] **Step 1: Write the Vitest setup file**

```javascript
import $ from 'jquery'
import langFiles from 'formbuilder-languages'

globalThis.$ = $
globalThis.jQuery = $
globalThis.FB_EN_US = langFiles['en-US']
```

- [ ] **Step 2: Write the Vitest config**

```javascript
import { defineConfig } from 'vitest/config'
import { getBaseConfig } from './vite.config.base.js'

export default defineConfig({
  ...getBaseConfig(),
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup-vitest.js'],
    css: false,
    coverage: {
      provider: 'v8',
      directory: '.vitest/coverage',
      exclude: ['tests/', 'src/js/control/index.js'],
    },
  },
})
```

- [ ] **Step 3: Verify file syntax**

Run:
```bash
node --check vitest.config.js
node --check tests/setup-vitest.js
```
Expected: no output for both.

- [ ] **Step 4: Commit**

```bash
git add vitest.config.js tests/setup-vitest.js
git commit -m "test: add vitest config and setup"
```

---

### Task 7: Update package.json scripts and dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Update the scripts section**

Replace the `scripts` object with:

```json
  "scripts": {
    "build:analyze": "vite-bundle-visualizer --config vite.config.lib.js",
    "build:plugins": "vite build --config vite.config.plugins.js",
    "build:vendor": "babel-node tools/build-vendor",
    "build": "vite build --config vite.config.lib.js && vite build --mode unminified --config vite.config.lib.js && npm run compress",
    "build:all": "run-s build:plugins build:vendor build copy",
    "compress": "vite-plugin-compression2 --config vite.config.lib.js",
    "copy": "cp -a dist/* demo/assets/js/ && cp CONTRIBUTING.md docs/contributing.md && cp LICENSE docs/license.md && npm run copy:lang",
    "copy:lang": "babel-node tools/copy-language-files",
    "deploy:all": "run-s deploy:demo deploy:site",
    "deploy:demo": "node tools/deploy-demo.js",
    "deploy:site": "node tools/deploy-site.js",
    "docs:build": "docker build --rm -t fb_docs .",
    "docs:serve": "docker run -v \"$(pwd)/docs/\":/usr/src/app/docs --rm -p 8123:8123 -it fb_docs",
    "docs": "run-s docs:build docs:serve",
    "font": "babel-node tools/icon-font",
    "lint": "eslint ./src || true",
    "lint:fix": "eslint ./src --fix",
    "semantic-release": "semantic-release",
    "start": "run-s build:vendor copy:lang && vite --config vite.config.demo.js",
    "dev": "npm run start",
    "test": "vitest run --coverage",
    "prepare": "[ \"$NODE_ENV\" = production ] && exit 0; husky install",
    "pre-commit": "lint-staged"
  },
```

Note: The `compress` script assumes `vite-plugin-compression2` exposes a CLI or is invoked from a small Node script. If it does not expose a CLI, create a `tools/compress.js` script instead (see Task 8).

- [ ] **Step 2: Update devDependencies**

Remove these packages:

```
@babel/plugin-transform-class-properties
@babel/plugin-transform-destructuring
@babel/plugin-transform-nullish-coalescing-operator
@babel/plugin-transform-object-rest-spread
babel-loader
clean-webpack-plugin
compression-webpack-plugin
css-loader
eslint-webpack-plugin
html-webpack-harddisk-plugin
html-webpack-plugin
jest
jest-environment-jsdom
jest-scss-transform
postcss-loader
sass-loader
style-loader
webpack
webpack-bundle-analyzer
webpack-cli
webpack-dev-server
wrapper-webpack-plugin
```

Add these packages:

```
"@vitest/coverage-v8": "^4.1.9",
"jsdom": "^29.1.1",
"vite": "^8.0.16",
"vite-bundle-visualizer": "^1.2.1",
"vite-plugin-compression2": "^2.5.3",
"vitest": "^4.1.9"
```

Also add `lodash` as a dependency because `src/js/form-builder.js` imports `lodash/throttle` but `lodash` is only a transitive dependency today:

```json
"lodash": "^4.17.21"
```

- [ ] **Step 3: Install dependencies**

Run: `npm install`
Expected: dependencies install without errors.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "build: update package.json for vite migration"
```

---

### Task 8: Create gzip compression helper (if needed)

**Files:**
- Create: `tools/compress.js` (only if `vite-plugin-compression2` does not provide a CLI)

- [ ] **Step 1: Check whether a CLI exists**

Run: `npx vite-plugin-compression2 --help`
If it prints usage, skip this task and update the `compress` script to the correct CLI command.
If it errors, write the helper below.

- [ ] **Step 2: Write the compression helper**

```javascript
import { createReadStream, createWriteStream } from 'fs'
import { readdirSync, statSync } from 'fs'
import { resolve } from 'path'
import { pipeline } from 'stream/promises'
import { createGzip } from 'zlib'

const distDir = resolve(process.cwd(), 'dist')

function gzipFile(file) {
  if (statSync(file).isDirectory()) return
  if (!file.endsWith('.js')) return
  const output = `${file}.gz`
  return pipeline(createReadStream(file), createGzip({ level: 9 }), createWriteStream(output))
}

async function main() {
  const entries = readdirSync(distDir, { withFileTypes: true })
  const files = entries
    .filter(e => e.isFile() && e.name.endsWith('.js'))
    .map(e => resolve(distDir, e.name))
  await Promise.all(files.map(gzipFile))
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
```

Update the `compress` script in `package.json` to:

```json
"compress": "babel-node tools/compress.js"
```

- [ ] **Step 3: Commit**

```bash
git add tools/compress.js package.json
git commit -m "build: add gzip compression helper"
```

---

### Task 9: Remove webpack files and Jest setup

**Files:**
- Delete: `tools/webpack.config.js`
- Delete: `tools/webpack.plugins.config.js`
- Delete: `tests/setup-jest.js`

- [ ] **Step 1: Delete the files**

```bash
rm tools/webpack.config.js tools/webpack.plugins.config.js tests/setup-jest.js
```

- [ ] **Step 2: Commit**

```bash
git add tools/webpack.config.js tools/webpack.plugins.config.js tests/setup-jest.js
git commit -m "build: remove webpack configs and jest setup"
```

---

### Task 10: Build the library and verify artifacts

**Files:**
- (no new files)

- [ ] **Step 1: Run the library build**

```bash
npm run build
```

Expected: `dist/form-builder.min.js`, `dist/form-render.min.js`, `dist/form-builder.js`, `dist/form-render.js`, and `.gz` files are created without errors.

- [ ] **Step 2: Verify the IIFE wrapper and jQuery external**

Run:
```bash
head -n 3 dist/form-builder.min.js
tail -n 3 dist/form-builder.min.js
```

Expected output begins with `(function ($) { "use strict";` and ends with `})(jQuery);`.

- [ ] **Step 3: Verify FB_EN_US is inlined**

Run:
```bash
grep -o 'FB_EN_US' dist/form-builder.min.js | wc -l
```

Expected: `0` (the identifier should have been replaced by the inlined language object).

---

### Task 11: Build control plugins and verify

**Files:**
- (no new files)

- [ ] **Step 1: Run the plugins build**

```bash
npm run build:plugins
```

Expected: `dist/control_plugins/starRating.min.js` and `dist/control_plugins/textarea.trumbowyg.min.js` are created.

- [ ] **Step 2: Verify a plugin output**

Run:
```bash
head -n 2 dist/control_plugins/starRating.min.js
tail -n 2 dist/control_plugins/starRating.min.js
```

Expected: begins with `(function ($) { "use strict";` and ends with `})(jQuery);`.

---

### Task 12: Build the demo and verify

**Files:**
- (no new files)

- [ ] **Step 1: Run the demo build**

```bash
npm run build && npm run copy && npm run build:plugins && npm run build:vendor && npm run copy:lang
vite build --config vite.config.demo.js
```

Expected: `demo/index.html` is updated and `demo/assets/js/demo.min.js` is created.

- [ ] **Step 2: Verify the demo HTML**

Run:
```bash
grep -c '<option value="en-US">' demo/index.html
```

Expected: at least `1`.

Run:
```bash
grep 'FORM_BUILDER_SCRIPT\|FORM_RENDER_SCRIPT\|DEMO_SCRIPT' demo/index.html
```

Expected: no matches (placeholders should have been replaced).

---

### Task 13: Run the test suite with Vitest

**Files:**
- (no new files)

- [ ] **Step 1: Run tests**

```bash
npm test
```

Expected: all existing tests pass.

- [ ] **Step 2: Address any failures**

If tests fail due to global setup, verify `tests/setup-vitest.js` sets `$`, `jQuery`, and `FB_EN_US`.
If tests fail due to SCSS imports, set `css: false` in `vitest.config.js` and add a `__mocks__/styleMock.js` alias.

---

### Task 14: Run the dev server smoke test

**Files:**
- (no new files)

- [ ] **Step 1: Start the dev server briefly**

```bash
timeout 15 npm run dev &
sleep 10
curl -s http://localhost:5173/src/demo/index.html | head -n 20
```

Expected: HTML is served and contains `<option value="en-US">`.

- [ ] **Step 2: Stop the dev server**

Run: `pkill -f "vite"` if still running.

---

### Task 15: Final verification and summary

**Files:**
- (no new files)

- [ ] **Step 1: Run the full build and test sequence**

```bash
npm run build:all
npm test
```

Expected: build completes and tests pass.

- [ ] **Step 2: Compare artifacts**

Run:
```bash
ls -la dist/
ls -la demo/assets/js/
ls -la demo/assets/js/control_plugins/
```

Expected: all artifacts from the Build Artifacts section exist.

- [ ] **Step 3: Commit any remaining changes**

```bash
git add -A
git commit -m "build: complete webpack to vite migration"
```

---

## Spec Coverage Check

| Spec Section | Implementing Task(s) |
|--------------|----------------------|
| Preserve IIFE/UMD jQuery output | Task 1, Task 2, Task 5 |
| Main library build | Task 1, Task 2, Task 10 |
| Demo build & dev server | Task 3, Task 4, Task 12, Task 14 |
| Control plugins build | Task 5, Task 11 |
| Vitest migration | Task 6, Task 13 |
| npm scripts & deps cleanup | Task 7, Task 8, Task 9 |
| Gzip artifacts | Task 7, Task 8, Task 10 |

## Placeholder Scan

- No "TBD", "TODO", "implement later", "fill in details".
- No vague "add error handling" or "write tests for the above".
- All code blocks contain complete, runnable code.
- All file paths are exact.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-06-22-vite-migration-plan.md`. Two execution options:

1. **Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration.
2. **Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints.

Which approach would you like?
