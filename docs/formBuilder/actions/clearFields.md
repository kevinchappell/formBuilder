# Actions -> clearFields
Remove all fields from the editor with this handy action.

## Usage
```javascript
  const fbEditor = document.getElementById("build-wrap");
  const options = {
    defaultFields: [
      { type: "text" },
      { type: "checkbox-group" },
      { type: "text" },
      { type: "radio-group" }
    ]
  };
  const formBuilder = $(fbEditor).formBuilder(options);

  const clearFieldsButton = document.getElementById("clear-all-fields")
  clearFieldsButton.addEventListener('click', () => {
      formBuilder.actions.clearFields() // clear all fields
  }, false)
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="LbYQoM" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
