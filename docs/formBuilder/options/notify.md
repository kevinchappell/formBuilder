# notify
`notify` Use your existing notifications.

## Usage
```javascript
var options = {
      notify: {
        error: function(message) {
          return console.error(message);
        },
        success: function(message) {
          return console.log(message);
        },
        warning: function(message) {
          return console.warn(message);
        }
      }
    };
$(container).formBuilder(options);
```

## See it in Action
<p data-height="494" data-theme-id="22927" data-embed-version="2" data-slug-hash="xVrOVr" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
