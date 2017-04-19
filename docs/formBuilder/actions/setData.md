# Actions -> setData
Programmatically set the data for formBuilder.

## Usage
```javascript
var fbEditor = document.getElementById('build-wrap');
var formBuilder = $(fbEditor).formBuilder();
var formData = '[{"type":"text","label":"Full Name","subtype":"text","className":"form-control","name":"text-1476748004559"},{"type":"select","label":"Occupation","className":"form-control","name":"select-1476748006618","values":[{"label":"Street Sweeper","value":"option-1","selected":true},{"label":"Moth Man","value":"option-2"},{"label":"Chemist","value":"option-3"}]},{"type":"textarea","label":"Short Bio","rows":"5","className":"form-control","name":"textarea-1476748007461"}]';

document.getElementById('setData').addEventListener('click', function() {
    formBuilder.actions.setData(formData);
});
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="ozagKr" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
