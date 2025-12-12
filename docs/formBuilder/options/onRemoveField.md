# onRemoveField

Callback for when fields are removed from the stage. Good as a catch-all action for anything that needs to happen before a field is removed from the stage. Possible to modify the field's configuration before it's removed by returning a fieldData object eg:

```javascript
	{
		"type": "number",
		"label": "Big Numbers",
		"className": "form-control",
		"name": "number-1532639192296"
  }
```

## Usage

```javascript
const options = {
  onRemoveField: function(fieldId, fieldData, fieldDom) {
    const removedFieldId = fieldId
    const removedFieldData = fieldData
    const removedFieldDom = fieldDom // editor DOM element being removed
  },
}
$(container).formBuilder(options)
```
