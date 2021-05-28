# persistDefaultFields

When `persistDefaultFields` is enabled, `defaultFields` defined in the formBuilder options will not be removed when clearing all fields.

## Usage

```javascript
var options = {
  defaultFields: [
    {
      className: 'form-control',
      label: 'Default Field',
      placeholder: 'Enter your default field value',
      name: 'default-field-1',
      type: 'text',
    },
  ],
  persistDefaultFields: true,
}
$(container).formBuilder(options)
```

## See it in Action

<p data-height="494" data-theme-id="22927" data-embed-version="2" data-slug-hash="WNpZZVg" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
