# disabledAttrs
Disable attributes for all field types.

List of default attributes:
```javascript
const attrs = [
  'access',
  'className',
  'description',
  'inline',
  'label',
  'max',
  'maxlength',
  'min',
  'multiple',
  'name',
  'options',
  'other',
  'placeholder',
  'required',
  'rows',
  'step',
  'style',
  'subtype',
  'toggle',
  'value'
]
```

## Usage
```javascript
var options = {
  disabledAttrs: [
    'name'
  ]
};
$(container).formBuilder(options);
```
<p data-height="525" data-embed-version="2" data-theme-id="22927" data-slug-hash="NjLGyN" data-default-tab="js,result" data-user="kevinchappell" class="codepen"></p>
