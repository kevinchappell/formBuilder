formBuilder v1.9.32
===========

[![Join the chat at https://gitter.im/kevinchappell/formBuilder](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kevinchappell/formBuilder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A jQuery plugin for drag and drop form creation

## Usage
To start building forms with this plugin call `formBuilder()` on the textarea you would like to make your editor. FormBuilder takes a number of options and is translatable.


**Example**
```
jQuery(document).ready(function($) {
  'use strict';
  var template = document.getElementById('form-builder');
  $(template).formBuilder();
});
```

## [Demo](https://formbuilder.online/) ##
[![form-builder](https://cloud.githubusercontent.com/assets/1457540/13762292/d7fa75ba-ea35-11e5-96d8-14d813885288.gif)](https://formbuilder.online/)

## [Changelog](https://github.com/kevinchappell/formBuilder/blob/master/CHANGELOG.md) ##

## Translators Needed!
As formBuilder usage grows so does it's need to be available in multiple languages. This is currently possible by manually passing translations through the config options object but wouldn't it be great if it worked out of the box? See [Contributing Languages](https://github.com/kevinchappell/formBuilder/blob/languages/CONTRIBUTING.md) for details.
