# Contributing

FormBuilder is open source to the core and contributions are always welcome. In this document we'll cover some dependencies and installation process to get your local development environment up and running.

## Dependencies
To develop for formBuilder you'll need:

- [NodeJS](https://nodejs.org)
- [GulpJS](http://gulpjs.com/)
- [Git](https://git-scm.com/)
- and a [GitHub account](https://github.com/)

## Recommended Tooling
While not required, the following tools are recommended to maintain code quality and consistency in style.

- [eslint](http://eslint.org/)
- [SASS-lint](https://www.npmjs.com/package/sass-lint)

## Installation

Navigate to the directory you'll be working from and run:
```bash
$ git clone https://github.com/kevinchappell/formBuilder.git form-builder
$ cd form-builder
$ npm install
$ npm start
```

The above code will clone the repo, install the required `node_modules` and run the default `gulp` task. You should now have a locally running version of the demo page.

## Documentation
For more information on build processes, editing fonts or adding custom fields please see the development section [here](/development/).

## Notes
Windows users, remember to configure your line endings with `core.autocrlf`. More info [here](https://help.github.com/articles/dealing-with-line-endings/#platform-windows)
```bash
$ git config --global core.autocrlf true
# Configure Git on Windows to properly handle line endings
```
