# onOpenFieldEdit
Callback that executes when a field edit window is opened. provides edit panel DOM node

## Usage
```javascript
var options = {
      onOpenFieldEdit: function(editPanel) {
          alert('a field edit panel was opened');
        },
    };
$(container).formBuilder(options);
```
