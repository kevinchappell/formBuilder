# Development

Here we'll cover a few common tasks developers might face when setting up formBuilder.

## Local development
Once you've installed the dependencies in [Contributing](https://github.com/kevinchappell/formBuilder/blob/master/CONTRIBUTING.md) you can get a local version running by running the default gulp task in terminal.
```bash
$ gulp
```
This will run `gulp build watch serve` which as you might guess, builds the js and scss files, watches them for changes, then opens a new browser tab and serves a running version of the plugin demo. We are using BrowserSync to inject style changes and automatically reload for JavaScript changes.

All changes should be made in `src/`, changes made in `dist/` will be overwritten by the build process.
