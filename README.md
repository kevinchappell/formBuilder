formBuilder v1.24.6
===========

[![Join the chat at https://gitter.im/kevinchappell/formBuilder](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kevinchappell/formBuilder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A jQuery plugin for drag and drop form creation

## Usage
To start building forms with this plugin call `formBuilder()` on the block element you would like to make your editor. FormBuilder takes a number of options and is translatable.

**Example**
```
jQuery(function($) {
  var editor = document.getElementById('fb-editor');
  $(editor).formBuilder();
});
```

## [Demo](https://formbuilder.online/) ##
[![form-builder](https://cloud.githubusercontent.com/assets/1457540/16901016/d415f75c-4c2e-11e6-8687-a84c9822162d.png)](https://formbuilder.online/)

## [Options](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/) ##
| Option  | Type | Value(s) | Default |
| ------------- | ------------- |------------- |------------- |
| [controlOrder](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/controlOrder/) | {Array} | `['autocomplete', 'button', 'checkbox', ...]` | |
| [controlPosition](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/controlPosition/) | {String} | `'left'` \| `'right'`  | `'right'` |
| [dataType](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/dataType/) | {String} | `json` | `xml` |
| [disableFields](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/disableFields/) | {Array} | array of field types to disable | `['autocomplete', 'hidden', 'number']` |
| [editOnAdd](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/editOnAdd/) | {Bool} | `true` \| `false` | `false` |
| [append / prepend](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/appendPrepend/) | {Object, Array, String} | `DOM Object` \| `[]` \| `'<h1></h1>'` | `false` |
| [defaultFields](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/defaultFields/) | {Array} | `[{type: 'text', name: 'first-name'}]` | `[]` |
| [fieldRemoveWarn](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/fieldRemoveWarn/) | {Bool} | `true` | `false` |
| [formData](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/formData/) | {String} | `xmlData` | `jsonData` |
| [roles](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/roles/) | {Object} | `{1: 'Administrator', 2: 'Editor' }` | `{ 1: 'Administrator'}` |
| [messages](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/messages/) | {Object} | `{ addOption: 'Add Option', ... }` | [See form-builder.js#L58](https://github.com/kevinchappell/formBuilder/blob/master/src/js/form-builder.js#L58) |
| [notify](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/notify/) | {Object} | `{error: message => alert(message)}` | [See form-builder.js#L186](https://github.com/kevinchappell/formBuilder/blob/master/src/js/form-builder.js#L186) |
| [sortableControls](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/sortableControls/) | {Bool} | `sortableControls: true` | `false` |
| [stickyControls](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/stickyControls/) | {Bool} | `stickyControls: true` | `false` |
| [showActionButtons](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/showActionButtons/) | {Bool} | `showActionButtons: false` | `true` |
| [typeUserAttrs](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/typeUserAttrs/) | {Object} | typeUserAttrs config | null |
| [typeUserEvents](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/typeUserEvents/) | {Object} | typeUserEvents config | null |
## [Changelog](https://github.com/kevinchappell/formBuilder/blob/master/CHANGELOG.md) ##

## Translators Needed!
As formBuilder usage grows so does it's need to be available in multiple languages. This is currently possible by manually passing translations through the config options object but wouldn't it be great if it worked out of the box? See [Contributing Languages](https://github.com/kevinchappell/formBuilder/blob/languages/CONTRIBUTING.md) for details.
