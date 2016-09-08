# formData
Initialize formBuilder with existing data using the `formData` option.

## Usage
```javascript
// XML
var options = {
      formData: '<form-template><fields><field type="text" label="Text Input"></field></fields></form-template>'
    };
$(container).formBuilder(options);
```
<p data-height="525" data-theme-id="22927" data-slug-hash="NRWkwK" data-default-tab="js,result" data-user="kevinchappell" data-embed-version="2" class="codepen"></p>

OR

```javascript
// JSON
var options = {
      formData: '[{"type":"text", "label":"Text Input"}]',
      dataType: 'json'
    };
$(container).formBuilder(options);
```
<p data-height="525" data-theme-id="22927" data-slug-hash="vXYqZz" data-default-tab="js,result" data-user="kevinchappell" data-embed-version="2" class="codepen"></p>
