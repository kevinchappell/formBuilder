# defaultFields
Start a new form with existing fields that are editable by users.

## Usage
```javascript
var options = {
      defaultFields: [{
        className: "form-control",
        label: "First Name",
        placeholder: "Enter your first name",
        name: "first-name",
        required: true,
        type: "text"
      }, {
        className: "form-control",
        label: "Select",
        name: "select-1454862249997",
        type: "select",
        multiple: "true",
        values: [{
          label: 'Custom Option 1',
          value: 'test-value'
        }, {
          label: 'Custom Option 2',
          value: 'test-value-2'
        }]
      }, {
        label: "Radio",
        name: "select-1454862249997",
        type: "radio-group"
      }]
    };
$(container).formBuilder(options);
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="pgxYEW" data-default-tab="js, result" data-user="kevinchappell" class="codepen"></p>
