# Contributing

formBuilder is open source to the core and contributions are always welcome. In this document we'll cover some dependencies and installation process to get your local development environment up and running.

## Submitting an Issue
Bug reports, feature requests and questions go in [GitHub Issues](https://github.com/kevinchappell/formBuilder/issues). When submitting an Issue, be sure to include details to help others get on the same page as your usage. Details can include the options used in calling formBuilder, environment details such as browser and plugin version and steps to reproduce if you are reporting a bug.

### Maintaining Issues
<img width="298" align="left" src="https://cloud.githubusercontent.com/assets/1457540/26318680/dfcf092a-3f13-11e7-83bf-f9a2dd1fb8f1.png"> Maintainers are encouraged to label issues. Labeling helps triage issues so developers have an idea of priority.
<br clear="left">

## Development
### Dependencies
To develop for formBuilder you'll need:

- [Node.js](https://nodejs.org) `^20.19.0` or `>=22.12.0` (required by [Vite](https://vite.dev/)) and npm

Everything else, including [Vite](https://vite.dev/) for builds, [Vitest](https://vitest.dev/) for tests and [ESLint](https://eslint.org/) for linting, is installed as a dev dependency by `npm install`.

### Recommended Tooling
While not required, the following tools are recommended to maintain code quality and consistency in style.

- [ESLint](https://eslint.org/) with the project's flat config (`eslint.config.mjs`), which extends `eslint:recommended` and `prettier`
- [Prettier](https://prettier.io/) using the settings in `.prettierrc.json`
- [Lefthook](https://github.com/evilmartians/lefthook) to run the git hooks defined in `lefthook.yml` (see [Git hooks](#git-hooks))

## Installation

Navigate to the directory you'll be working from and run:
```bash
$ git clone https://github.com/kevinchappell/formBuilder.git form-builder
$ cd form-builder
$ npm i
$ npm start
```

The above code will clone the repo, install the required `node_modules` and run the default `npm start` script, which starts a Vite dev server for the demo page. You should now have a locally running version of the [demo page](https://kevinchappell.github.io/formBuilder/).

## Getting Started
If you've followed the above steps you're ready to start making changes. All changes to the plugin should be made in the `/src` directory:

- `src/js` - formBuilder and formRender source (`form-builder.js` and `form-render.js` are the entry points) and the control plugins in `src/js/control_plugins`
- `src/sass` - SCSS styles, imported from the JS entry points and compiled by Vite. The compiled CSS is injected into the JS bundle, so there is no separate CSS file in `/dist`
- `src/demo` - the demo page served by `npm start`
- `src/fonts` - the icon font (see [Icon Font](https://formbuilder.online/docs/editing-fonts/))

The build process bundles the contents of `/src` into the files found in `/dist`. Any changes made in `/dist` will be lost once the build process is run.

### npm scripts

| Script | What it does |
| --- | --- |
| `npm start` / `npm run dev` | Builds `demo/assets/js/vendor.js`, copies the language files to `demo/assets/lang` and starts the Vite dev server using `vite.config.demo.js` |
| `npm run build` | Builds the minified and unminified `form-builder` and `form-render` UMD bundles into `/dist` with `vite.config.lib.js`, then gzips them (`tools/compress.js`) |
| `npm run build:plugins` | Builds each control plugin in `src/js/control_plugins` to `dist/control_plugins/*.min.js` (`tools/build-plugins.js`, `vite.config.plugins.js`) |
| `npm run build:vendor` | Concatenates jQuery, jQuery UI Sortable and lodash into `demo/assets/js/vendor.js` (`tools/build-vendor.js`) |
| `npm run build:demo` | Builds the demo page for production with `vite.config.demo.js`, writing `demo/index.html` and the demo assets in `demo/assets` |
| `npm run build:all` | Runs `build:plugins`, `build:vendor`, `build`, `copy` and `build:demo` in sequence. CI runs this before the tests, and the Deploy Demo workflow runs it before publishing `demo/` |
| `npm run copy` | Copies `/dist` into `demo/assets/js`, `CONTRIBUTING.md` to `docs/contributing.md`, `LICENSE` to `docs/license.md` and the language files to `demo/assets/lang` |
| `npm test` | Runs the [Vitest](https://vitest.dev/) suite in `/tests` with coverage (`vitest.config.js`) |
| `npm run lint` | Runs ESLint on `/src`. It reports problems but always exits successfully |
| `npm run lint:fix` | Runs ESLint on `/src` and applies automatic fixes |
| `npm run font` | Edits the icon font, see [Icon Font](https://formbuilder.online/docs/editing-fonts/) |
| `npm run docs` | Builds and serves this documentation with [MkDocs](https://www.mkdocs.org/) in Docker on port 8123 (`docs:build` builds the image, `docs:serve` runs it) |

### Git hooks
Git hooks are defined in `lefthook.yml` and are not installed by `npm install`. To use them, install [Lefthook](https://github.com/evilmartians/lefthook) and run `lefthook install` in the repo. The hooks:

- `pre-commit` checks the branch name matches `^(feat|chore|fix)/[0-9]{1,6}(-[a-z0-9._-]{1,40})?$`, eg. `feat/1234-example` or `chore/123`, and runs [lint-staged](https://github.com/lint-staged/lint-staged), which runs `npm run lint:fix` on staged JS files
- `commit-msg` runs [commitlint](https://commitlint.js.org/) on the commit message

Both hooks are skipped when `CI=true`.

## Commit Messages and Releases
Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/). commitlint is configured in `package.json` with `@commitlint/config-conventional` and these allowed types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test` and `wip`.

Releases are automated with [semantic-release](https://github.com/semantic-release/semantic-release). Every push to `master` builds the plugin and runs semantic-release, which uses the commit messages to pick the next version, updates `CHANGELOG.md`, publishes to npm and tags the release. A `fix` commit makes a patch release and a `feat` commit makes a minor release.

## Documentation
For more information on build processes, editing fonts or adding custom fields please see the development section [here](https://formbuilder.online/docs/development/).

## Notes
Windows users, remember to configure your line endings with `core.autocrlf`. More info [here](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings?platform=windows)
```
$ git config --global core.autocrlf true
```
