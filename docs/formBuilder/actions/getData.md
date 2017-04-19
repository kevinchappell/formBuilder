# Actions -> getData
Get formBuilder data in json, js, or xml structure. Defaults to js.

## Usage
```javascript
var fbEditor = document.getElementById('build-wrap');
var formBuilder = $(fbEditor).formBuilder();

document.getElementById('getXML').addEventListener('click', function() {
    alert(formBuilder.actions.getData('xml'));
});
document.getElementById('getJSON').addEventListener('click', function() {
    alert(formBuilder.actions.getData('json'));
});
document.getElementById('getJS').addEventListener('click', function() {
    alert('check console');
    console.log(formBuilder.actions.getData());
});
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="zwrddy" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
