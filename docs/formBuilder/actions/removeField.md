# Actions -> removeField
Remove a specific field by id or leave blank to remove the last field.

## Usage
```javascript
  var fbEditor = document.getElementById('build-wrap');
  var options = {
    formData: JSON.stringify([{
      type: 'text'
    }])
  };
  var formBuilder = $(fbEditor).formBuilder(options);

  document.getElementById('remove-field').addEventListener('click', function() {
    formBuilder.actions.removeField();
  });
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="ozybgr" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
