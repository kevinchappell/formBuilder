# onSave
Callbacks to run on editor save.

## Usage
```javascript
var options = {
      onSave: function(evt, formData) {
          toggleEdit();
          $('.render-wrap').formRender({formData});
          window.sessionStorage.setItem('formData', JSON.stringify(formData));
        },
    };
$(container).formBuilder(options);
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="ygwjdP" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
