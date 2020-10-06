# onAddFieldAfter

Callback that is run after fields are added to the stage. Good as a catch-all action for anything that needs to happen after a field is added to the stage.

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
  onAddFieldAfter: function(fieldId, fieldData) {
    // Your code that handles reacting to the added field
  },
}
$(container).formBuilder(options)
```
