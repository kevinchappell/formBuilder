# Contributing

Contributions are always welcome, in this document we'll cover some dependencies and installation process to get your local development rolling.

## Dependencies

To develop for formBuilder you'll need:

- [NodeJS](https://nodejs.org)
- [Git](https://git-scm.com/)
- and a [GitHub account](https://github.com/)

## Installation

Navigate to the directory you'll be working from and run:
```
git clone https://github.com/kevinchappell/formBuilder.git form-builder
cd form-builder
npm install
gulp demo
```

The above code will clone the repo, install the required `node_modules` and run the `gulp demo` task. You should now have a locally running version of the demo page.

## Building

FormBuilder uses a combination of Gulp and Makefile for its build process and release. The Makefile is primarily for module updating and Fontello font management.

