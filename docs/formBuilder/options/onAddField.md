# onAddField

Callback for when fields are added to the stage. Good as a catch-all action for anything that needs to happen before a field is added to the stage. Possible to modify the field's configuration before it's appended by returning a fieldData object eg:

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
  onAddField: function(fieldId) {
    const currentFieldId = fieldId
  },
}
$(container).formBuilder(options)
```
