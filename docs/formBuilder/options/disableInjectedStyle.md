# disableInjectedStyle

FormBuilder ships with a minimal Bootstrap 3 set of CSS classes for rendering form controls. You may choose to disable these to ensure they do not clash with a Bootstrap 4 or 5 included stylesheet

## Disable Embedded Bootstrap Classes
```javascript
var options = {
  disableInjectedStyle: "bootstrap"
};
$(container).formBuilder(options);
```

## Disable all embedded styles

You can also completely disable all embedded styles, I'm not sure why anyone would want to do this, but it's been requested a couple of times so here it is... `disableInjectedStyle` enables you to disable the injected style that ships with the plugin.

```javascript
var options = {
  disableInjectedStyle: true
};
$(container).formBuilder(options);
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="aWjQxQ" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
