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
$(template).formBuilder(options);
```

## See it in Action
<p data-height="494" data-theme-id="22927" data-slug-hash="xVrOVr" data-default-tab="result" data-user="kevinchappell" class="codepen">See the Pen <a href="http://codepen.io/kevinchappell/pen/xVrOVr">formBuilder: notify</a> by Kevin Chappell (<a href="http://codepen.io/kevinchappell">@kevinchappell</a>) on <a href="http://codepen.io">CodePen</a>.</p>
