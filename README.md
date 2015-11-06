formBuilder v1.4
===========

A jQuery plugin for drag and drop form creation

## Usage
To start building forms with this plugin simply call `formBuilder()` on the textarea you would like to make your editor. FormBuilder takes a number of options and is translatable through these options.


**Example**
```
jQuery(document).ready(function($) {
  'use strict';
  var template = document.getElementById('form-builder');
  $(template).formBuilder();
});
```

## [Demo](http://kevinchappell.github.io/formBuilder/) ##
[![form-builder](https://cloud.githubusercontent.com/assets/1457540/10989863/89d81010-8444-11e5-9717-d2c618439793.gif)](http://kevinchappell.github.io/formBuilder/)

## Coming in 2.0
- Add parser to render non-editable form.
- Add callback for `autocomplete` field.
- HTML5 fields and attributes
- JSON data as default instead of XML
- More examples

## [Changelog](https://github.com/kevinchappell/formBuilder/blob/master/CHANGELOG.md) ##
