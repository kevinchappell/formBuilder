formBuilder v1.3.4
===========

A jQuery plugin for drag and drop form creation

## Usage
To start building forms with this plugin simply call `formBuilder()` on the textarea you would like to make your editor. FormBuilder takes a number of options and is translatable through these options.


**Example**
```
jQuery(document).ready(function($) {
  'use strict';
  $('textarea').formBuilder();
});
```

## [Demo](http://kevinchappell.github.io/formBuilder/) ##

## Coming in 2.0
- Add parser to render non-editable form.
- Add callback for `autocomplete` field.
- HTML5 fields and attributes
- JSON data as default instead of XML
- More examples

## Changelog
- v1.3.4 - Bugfix: fix self closing xml for radio-group field
- v1.3.3 - Bugfix: preview not toggling correctly
- v1.3.2 - Bugfix: preview for Multiple fields not updating
- v1.3.1 - Bugfix: multiple value fields not saving XML
- v1.3.0 - Live previews, icon font
- v1.2.0 - Add default fields, and call-to-action text
