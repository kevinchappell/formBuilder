# Development

Here we'll cover a few common tasks developers might face when setting up formBuilder. See [Contributing](contributing.md) for the full list of npm scripts, git hooks and commit message conventions.

## Requirements

[Node.js](https://nodejs.org) `^20.19.0` or `>=22.12.0` and npm. The build uses [Vite](https://vite.dev/), tests use [Vitest](https://vitest.dev/) and linting uses [ESLint](https://eslint.org/), all installed as dev dependencies.

## Clone the repo

```bash
$ git clone git@github.com:kevinchappell/formBuilder.git form-builder && cd form-builder
```

## Install Dependencies

```bash
$ npm install
```

## Local development

Once you've cloned the project and installed its dependencies you can get a local version running by running:

```bash
$ npm start
```

This builds `demo/assets/js/vendor.js`, copies the language files to `demo/assets/lang` and starts a Vite dev server with `vite.config.demo.js` that serves the demo page from `src/demo`. Vite prints the local URL in the terminal. The demo loads formBuilder and formRender straight from `src/js`, so changes show up without a rebuild. This demo can be used to test features and bugs.

## Build

```bash
$ npm run build
```

Builds `form-builder` and `form-render` as minified and unminified UMD bundles in `/dist` using `vite.config.lib.js` (shared settings live in `vite.config.base.js`) and gzips them. The SCSS in `src/sass` is compiled by Vite and injected into the JS bundles, so there is no separate CSS file.

```bash
$ npm run build:demo
```

Builds the demo page for production with `vite.config.demo.js`. It writes `demo/index.html` and the demo's own assets (`demo/assets/js/demo.min.js` and its CSS in `demo/assets/css`). The built page loads `vendor.js`, `form-builder.min.js` and `form-render.min.js` from `demo/assets/js`, so run it after `build`, `build:vendor` and `copy`, or just use `build:all`.

```bash
$ npm run build:all
```

Runs `build:plugins`, `build:vendor`, `build`, `copy` and `build:demo` in sequence. On top of `build` this builds the control plugins to `dist/control_plugins` (`npm run build:plugins`), the demo's `vendor.js` (`npm run build:vendor`), copies the build output, language files, `CONTRIBUTING.md` and `LICENSE` into the demo and docs (`npm run copy`) and builds the demo page (`npm run build:demo`). The result in `demo/` is a complete static site.

## Demo deployment

The [Deploy Demo](https://github.com/kevinchappell/formBuilder/blob/master/.github/workflows/deploy.yaml) workflow runs on every push to `master`. It runs `npm run build:all` and publishes the `demo/` directory to the `gh-pages` branch, which GitHub Pages serves at [https://kevinchappell.github.io/formBuilder/](https://kevinchappell.github.io/formBuilder/). `demo/` is ignored by git, so don't commit it.

## Tests and Linting

```bash
$ npm test          # Vitest with coverage
$ npm run lint      # ESLint on src/, reports problems without failing
$ npm run lint:fix  # ESLint on src/ with automatic fixes
```

ESLint is configured in `eslint.config.mjs` and Prettier in `.prettierrc.json`.

## Documentation

These docs are built with [MkDocs](https://www.mkdocs.org/) from the `docs` directory and `mkdocs.yml`. To preview them locally with Docker:

```bash
$ npm run docs
```

This builds a Docker image (`npm run docs:build`) and serves the docs on port 8123 (`npm run docs:serve`).

The website at [formbuilder.online](https://formbuilder.online/), including its documentation, is built with [VitePress](https://vitepress.dev/) from the separate `kevinchappell/formBuilder-site` repository, not from this `docs` directory. Changes to the website docs are made in that repository.

## Languages

At the time of writing this, formBuilder is available in dozens of languages thanks to generous contributors around the world. If you would like to contribute, formBuilder's language repo can be found [here](https://github.com/kevinchappell/formBuilder-languages).

Only the `en-US` strings are bundled with formBuilder. Other languages are loaded at runtime from `i18n.location`, which defaults to the relative path `assets/lang/`, so a `de-DE` locale is fetched from `assets/lang/de-DE.lang` relative to the page. Either copy the `.lang` files from the `formbuilder-languages` npm package to that path on your server or set `i18n.location`, for example to the jsDelivr CDN:

```javascript
$(container).formBuilder({
  i18n: {
    locale: 'de-DE',
    location: 'https://cdn.jsdelivr.net/npm/formbuilder-languages@1.2.2/',
  },
})
```

See the [i18n option](https://formbuilder.online/docs/formBuilder/options/i18n/) for all settings.

## Custom Controls

See the Control and Control Plugin Architecture Documentation to learn about how to create custom controls.

- [Overview](https://formbuilder.online/docs/formBuilder/overview/)
- [Control](https://formbuilder.online/docs/formBuilder/controls/)
- [Control Plugins](https://formbuilder.online/docs/formBuilder/control-plugins/)
