# Actions -> save
Programmatically save the data for formBuilder.

## Usage
```javascript
jQuery($ => {
  const fbEditor = document.getElementById("build-wrap");
  const formBuilder = $(fbEditor).formBuilder();

  document
    .getElementById("saveData")
    .addEventListener("click", () => formBuilder.actions.save());
});
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="xyOdzp" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
