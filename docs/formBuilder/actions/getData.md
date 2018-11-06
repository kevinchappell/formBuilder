# Actions -> getData
Get formBuilder data in json, js, or xml structure. Defaults to js. Like all actions, `getData` is only available after formBuilder has fully initialized.

### Won't Work
```
var formBuilder = $(fbEditor).formBuilder();
console.log(formBuilder.actions.getData());
```
The above pattern should be avoided for 2 reasons:

1. At initialization formBuilder will only have the data you provided it.
2. formBuilder loads asynchronous and `actions` are not immediately available.

If an `action` needs to be called immediately upon initialization it's recommended to use the [`promise`](https://formbuilder.online/docs/formBuilder/promise/) property.

- @param  {String} type
- @param  {Boolean} formatted
- @return {Array|String} formData

## Correct Usage
```javascript
var fbEditor = document.getElementById('build-wrap');
var formBuilder = $(fbEditor).formBuilder();

document.getElementById('getXML').addEventListener('click', function() {
    alert(formBuilder.actions.getData('xml'));
});
document.getElementById('getJSON').addEventListener('click', function() {
    alert(formBuilder.actions.getData('json', true));
});
document.getElementById('getJS').addEventListener('click', function() {
    alert('check console');
    console.log(formBuilder.actions.getData());
});
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="zwrddy" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
