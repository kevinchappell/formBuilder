# Actions -> toggleFieldEdit

Programmatically toggle the edit mode for fields. `toggleFieldEdit accepts the following arguments:

- the internal formBuilder field id, `"frmb-1532640608269-fld-1"`
- the index of the field you would like to toggle, `2`
- and the selector for the field which is handy when you'd like to edit all header fields at once, `".header-field"`

## Usage

```javascript
const fbEditor = document.getElementById('build-wrap')
const formData = JSON.stringify([
  {
    type: 'header',
    subtype: 'h1',
    label: 'Header',
  },
])
const formBuilder = $(fbEditor).formBuilder({formData})

// Can be used 2 different ways
formBuilder.actions.toggleFieldEdit(currentFieldId) // first
$(fbEditor).formBuilder('toggleFieldEdit', currentFieldId) // second
```
