# Development

Here we'll cover a few common tasks developers might face when setting up formBuilder.

## Local development
Once you've installed the dependencies in [Contributing](http://formbuilder.online/contributing) you can get a local version running by running the default gulp task in terminal.
```bash
$ gulp
```
This will run `gulp build watch serve` which as you might guess, builds the js and scss files, watches them for changes, then opens a new browser tab and serves a running version of the plugin. We are using BrowserSync to inject style changes and automatically reload for JavaScript changes.
