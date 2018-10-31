# disabledFieldButtons
Disable the form action buttons typically found in the bottom right of the editor.

## Usage
```javascript
var options = {
  disabledFieldButtons: {
    text: ['remove'], // disables the remove butotn for text fields
    select: ['edit'] // disables the edit button for select fields
  },
};
$(container).formBuilder(options);
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="LeErvm" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
