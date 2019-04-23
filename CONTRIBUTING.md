# Contributing

formBuilder is open source to the core and contributions are always welcome. In this document we'll cover some dependencies and installation process to get your local development environment up and running.

## Submitting an Issue
When submitting an Issue, be sure to includes details to help others get on the same page as your usage. Details can include the options used in calling formBuilder, environment details such as browser and plugin version and steps to reproduce if you are reporting a bug.

### Maintaining Issues
<img width="298" align="left" src="https://cloud.githubusercontent.com/assets/1457540/26318680/dfcf092a-3f13-11e7-83bf-f9a2dd1fb8f1.png"> Maintainers are encouraged to label issues. Labeling helps triage issues so developers have an idea of priority.
<br clear="left">

## Development
### Dependencies
To develop for formBuilder you'll need:

- [NodeJS](https://nodejs.org)
- [Webpack](https://webpack.github.io/)

### Recommended Tooling
While not required, the following tools are recommended to maintain code quality and consistency in style.

- [ESLint](http://eslint.org/)
- [SASS-lint](https://www.npmjs.com/package/sass-lint)

## Installation

Navigate to the directory you'll be working from and run:
```bash
$ git clone https://github.com/kevinchappell/formBuilder.git form-builder
$ cd form-builder
$ npm i
$ npm start
```

The above code will clone the repo, install the required `node_modules` and run the default `npm start` script. You should now have a locally running version of the [demo page](https://kevinchappell.github.io/formBuilder/).

## Getting Started
If you've followed the above steps you're ready to start making changes. All changes to the plugin should be made in the `/src` directory. The build process will transpile, lint and concatenate the contents of `/src` into the files found in `/dist`. Any changes made in the `/dist` will be lost once the build process is run.

For more information on build processes, editing fonts or adding custom fields please see the documentation [here](https://formbuilder.online/docs/).

## Documentation
For more information on build processes, editing fonts or adding custom fields please see the development section [here](https://formbuilder.online/docs/development/).

## Notes
Windows users, remember to configure your line endings with `core.autocrlf`. More info [here](https://help.github.com/articles/dealing-with-line-endings/#platform-windows)
```
$ git config --global core.autocrlf true
```
