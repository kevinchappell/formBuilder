# Development

Here we'll cover a few common tasks developers might face when setting up formBuilder.

## Clone the repo

```bash
$ git clone git@github.com:kevinchappell/formBuilder.git form-builder && cd form-builder
```

## Install Dependencies

```bash
$ npm install
```

## Local development

Once you've cloned the project and installed it's dependencies you can get a local version running by running:

```bash
$ npm start
```

This will run the default webpack config and open a new browser tab and that serves a demo of the plugin. This demo can be used to test features and bugs.

## Languages

At the time of writing this, formBuilder is available in dozens of languages thanks to generous contributors around the world. If you would like to contribute, formBuilder's language repo can be found [here](https://github.com/kevinchappell/formBuilder-languages). By default formBuilder will load languages from https://formbuilder.online/assets/lang unless the `i18n.location` option is set.

## Custom Controls

See the Control and Control Plugin Architecture Documentation to learn about how to create custom controls.

- [Overview](https://formbuilder.online/docs/formBuilder/overview/)
- [Control](https://formbuilder.online/docs/formBuilder/controls/)
- [Control Plugins](https://formbuilder.online/docs/formBuilder/control-plugins/)
