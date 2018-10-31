# onCloseFieldEdit

Callback that executes when a field edit window is closed. provides edit panel DOM node

## Usage

```javascript
var options = {
  onCloseFieldEdit: function(editPanel) {
    alert('a field edit panel was closed')
  },
}
$(container).formBuilder(options)
```
