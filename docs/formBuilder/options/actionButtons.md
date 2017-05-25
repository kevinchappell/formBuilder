# actionButtons
Add custom action buttons to the editor.

## Usage
```javascript
var options = {
  actionButtons: [{
    id: 'smile',
    className: 'btn btn-success',
    label: '😁',
    type: 'button',
    events: {
    click: function() {
      alert('😁😁😁 !SMILE! 😁😁😁');
    }
  }
  }]
};
$(container).formBuilder(options);
```

## See it in Action
<p data-height="494" data-theme-id="22927" data-embed-version="2" data-slug-hash="aWMjLe" data-default-tab="js, result" data-user="kevinchappell" class="codepen"></p>
