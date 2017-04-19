# Actions -> setLang
Change the editor language without reloading.

## Usage
```javascript
  var fb = $(document.getElementById('fb-editor')).formBuilder();

  $('.language-selector li').click(function() {
    var lang = this.id;
    fb.actions.setLang(lang)
  });
```
## See it in Action
<p data-height="580" data-theme-id="22927" data-slug-hash="PNZZmw" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
