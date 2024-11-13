# Custom Options

ControlTypes 'select', 'checkbox-group', 'checkbox', 'radio-group', 'autocomplete' all have the ability to have KeyValue option pairs defined.

Custom controls can add Options using the `type: 'options'` when defining custom attributes.

For example:
```javascript
{
    defaultAttrs: {
      questions: {
        label: 'Questions',
        type: 'options',
        values: [
          {
            "label": "Default Column",
            "value": "col1",
            "selected": false
          }
        ],
        noSelect: true
      }
}
```

The ability to pre-select any option can be enabled/disabled using the `noSelect` option flag.

Multiple Option type attributes can be added to a control.