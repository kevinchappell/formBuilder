# Contributing

formBuilder is open source to the core and contributions are always welcome. In this document we'll cover some dependencies and installation process to get your local development environment up and running.

## Dependencies
To develop for formBuilder you'll need:

- [NodeJS](https://nodejs.org)
- [GulpJS](http://gulpjs.com/)

## Recommended Tooling
While not required, the following tools are recommended to maintain code quality and consistency in style.

- [JSCS](http://jscs.info/)
- [jsHint](http://jshint.com/)
- [SASS-lint](https://www.npmjs.com/package/sass-lint)

## Installation

Navigate to the directory you'll be working from and run:
```
git clone https://github.com/kevinchappell/formBuilder.git form-builder
cd form-builder
npm install
gulp
```

The above code will clone the repo, install the required `node_modules` and run the default `gulp` task. You should now have a locally running version of the formBuilder demo.

## Getting Started
If you've followed the above steps you're ready to start making changes. All changes to the plugin should be made in the `/src` directory. The gulp build process will transpile, lint and concatenate the contents of `/src` into the files found in `/dist`. Any changes made in the `/dist` will be lost once the build process is run.

For more information on build processes, editing fonts or adding custom fields please see the documentation [here](http://formbuilder.readthedocs.org/en/latest/).

## Notes
Windows users, remember to configure your line endings with `core.autocrlf`. More info [here](https://help.github.com/articles/dealing-with-line-endings/#platform-windows)
```
$ git config --global core.autocrlf true
# Configure Git on Windows to properly handle line endings
```
