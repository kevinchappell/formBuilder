# append, prepend
`append` and `prepend` allows you to define a block of arbitrary html to appear in the editor. This html is not editable and serves to provide a more accurate representation of what their form will look like in relation to items they cannot edit.

## Usage
```javascript
var options = {
      prepend: '<h1>Profile for Miss Marple.</h1>',
      append: '<h2>All information is confidential.</h2>'
    };
$(template).formBuilder(options);
```


## See it in Action
<p data-height="494" data-theme-id="22927" data-slug-hash="XXYdvv" data-default-tab="result" data-user="kevinchappell" class="codepen">See the Pen <a href="http://codepen.io/kevinchappell/pen/XXYdvv">formBuilder: append, prepend</a> by Kevin Chappell (<a href="http://codepen.io/kevinchappell">@kevinchappell</a>) on <a href="http://codepen.io">CodePen</a>.</p>
