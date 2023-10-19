# `clear` action

Clears all user data from the form, even tinyMCE.

## Usage
```javascript
const formRenderOptions = {
  formData: '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"text"}]';
}
const renderContainer = $('#render-container')
const formRenderInstance = renderContainer.formRender(formRenderOptions);
const html = renderContainer.formRender('html'); // HTML DOM nodes
const htmlString = html.outerHTML;
```
// User enters data

```javascript
$('#render-container').formRender('clear')
```
// User entered data is cleared
