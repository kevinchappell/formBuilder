# Promise
Use formBuilder the moment the instance is available.

### Async/Await Usage - (requires transpilation)
```javascript
async loadFormBuilder() => {
    var formBuilder = await $(fbEditor).formBuilder().promise;
    console.log(formBuilder.formData);
}
```

### Promise.then() Usage
```javascript
$(fbEditor).formBuilder().promise.then(formBuilder => {
    console.log(formBuilder.formData);
});
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="ybgqLK" data-default-tab="js" data-user="kevinchappell" class="codepen"></p>
