# stickyControls
When the option `stickyControls` is set to enabled:true, the controls will follow the user's scroll to the end of the available space within the editor. Note the updated syntax to handle custom positioning.

## Usage
```javascript
var options = {
      stickyControls: {
        enable: true
      }
    };
$(container).formBuilder(options);
```

## Positioning
By default the controls should stick to the top when scrolling however this can be adjusted with the `stockyControls.offset` option.
```javascript
var options = {
      stickyControls: {
        enable: true,
        offset: {
            top: 20,
            right: 20,
            left: 'auto'
        }
      }
    };
```

## See it in Action
<p data-height="800" data-theme-id="22927" data-slug-hash="LkOrwE" data-default-tab="result" data-user="kevinchappell" data-embed-version="2" class="codepen"></p>
