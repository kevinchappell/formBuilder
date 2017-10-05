formBuilder v2.9.8
===========

[![Join the chat at https://gitter.im/kevinchappell/formBuilder](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kevinchappell/formBuilder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A jQuery plugin for drag and drop form creation, formBuilder has many options and is translatable.

**Example**
```
jQuery(function($) {
  var editor = document.getElementById('fb-editor');
  $(editor).formBuilder();
});
```

## [Demo](https://formbuilder.online/)
[![form-builder](https://cloud.githubusercontent.com/assets/1457540/16901016/d415f75c-4c2e-11e6-8687-a84c9822162d.png)](https://formbuilder.online/)

## [Options](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/) 
### General
| Option  | Type | Value(s) | Default |
| ------------- | ------------- |------------- |------------- |
| [actionButtons](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/actionButtons/) | {Array} | `[{...}]` | `[]` |
| [append / prepend](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/appendPrepend/) | {Object, Array, String} | `DOM Object` \| `[]` \| `'<h1></h1>'` | `false` |
| [controlOrder](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/controlOrder/) | {Array} | `['autocomplete', 'button', 'checkbox', ...]` | |
| [controlPosition](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/controlPosition/) | {String} | `'left'` \| `'right'`  | `'right'` |
| [dataType](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/dataType/) | {String} | `json` \| `xml` | `json` |
| [defaultFields](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/defaultFields/) | {Array} | `[{type: 'text', name: 'first-name'}]` | `[]` |
| [disabledAttrs](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/disabledAttrs/) | {Array} | array of attributes to disable for all fields | `[]` |
| [disabledActionButtons](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/disabledActionButtons/) | {Array} | array of form action buttons to disable | `[]` |
| [disableFields](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/disableFields/) | {Array} | array of field types to disable | `['autocomplete', 'hidden', 'number']` |
| [disableInjectedStyle](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/disableInjectedStyle/) | {Bool} | `true` \| `false` | `false` |
| [editOnAdd](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/editOnAdd/) | {Bool} | `true` \| `false` | `false` |
| [fieldRemoveWarn](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/fieldRemoveWarn/) | {Bool} | `true` | `false` |
| [fields](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/fields/) | {Array} | array of additional field definitions | `[]` |
| [formData](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/formData/) | {String} | `xmlData` | `jsonData` |
| [inputSets](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/inputSets/) | {Array} | array of field definitions | `[]` |
| [notify](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/notify/) | {Object} | `{error: message => alert(message)}` | [See config.js#L47](https://github.com/kevinchappell/formBuilder/blob/master/src/js/config.js#L47) |
| [onSave](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/onSave/) | {Function} | `(evt, formData) => {}` | [See config.js#L52](https://github.com/kevinchappell/formBuilder/blob/master/src/js/config.js#L52) |
| [onClearAll](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/onClearAll/) | {Function} | `() => {}` | [See config.js#L53](https://github.com/kevinchappell/formBuilder/blob/master/src/js/config.js#L53) |
| [roles](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/roles/) | {Object} | `{'admin': 'Administrator', 'editor': 'Editor' }` | `{ 1: 'Administrator'}` |
| [showActionButtons](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/showActionButtons/) | {Bool} | `showActionButtons: false` | `true` |
| [sortableControls](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/sortableControls/) | {Bool} | `sortableControls: true` | `false` |
| [stickyControls](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/stickyControls/) | {Object} | `stickyControls: {enable:true, offset: { top: 5, bottom: 'auto', right: 'auto' }}` | `stickyControls: {enable:true}` |
| [templates](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/templates/) | {Object} | Additional field templates | `{}` |
| [typeUserAttrs](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/typeUserAttrs/) | {Object} | typeUserAttrs config | null |
| [typeUserDisabledAttrs](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/typeUserDisabledAttrs/) | {Object} | typeUserDisabledAttrs config | null |
| [typeUserEvents](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/typeUserEvents/) | {Object} | typeUserEvents config | null |

### i18n
| Option  | Type | Value(s) | Default |
| ------------- | ------------- |------------- |------------- |
| [locale](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/i18n/#locale) | {String} | user's locale eg. 'pt-BR' | 'en-US' |
| [location](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/i18n/#location) | {String} | url of language directory | 'https://formbuilder.online/assets/lang/' |
| [extension](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/i18n/#extension) | {String} | '.ext' | '.lang' |
| [preloaded](http://formbuilder.readthedocs.io/en/latest/formBuilder/options/i18n/#preloaded) | {Object} | `{}` | `{'en-US': {...}}` |

## [Angular 2/4 Version](https://github.com/KhaledSMQ/Ng2FormBuilder)

## [Changelog](https://github.com/kevinchappell/formBuilder/blob/master/CHANGELOG.md) ##

## Translators Needed!
As formBuilder usage grows so does it's need to be available in multiple languages. Additions and updates to existing languages are always welcome, see [Contributing Languages](https://github.com/kevinchappell/formBuilder-languages/blob/master/CONTRIBUTING.md) for details.
