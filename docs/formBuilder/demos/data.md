# Getting Data

There are a couple ways to grab the generated data, the most common and easiest is to simply grab the textarea value. Since formBuilder saves it's data as plain XML string, you can read the textarea's value as you would any field value with:
```
var fbTemplate = document.getElementById('fb-template'),
    formData = fbTemplate.value;
```

There is also a jQuery data way to grab the data as demonstrated here:
<p data-height="580" data-theme-id="22927" data-slug-hash="bpRowv" data-default-tab="js,result" data-user="kevinchappell" data-embed-version="2" class="codepen"></p>

## Saving/Load Data
This example demonstrates saving and loading data to/from `window.sessionStorage`.
<p data-height="550" data-theme-id="0" data-slug-hash="Vedrqr" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>

## Where's my HTML
There are some cases where you would want the HTML instead of a rendered form. This can be accomplished by calling formRender and setting the `render` option to false:
<p data-height="300" data-theme-id="22927" data-slug-hash="wWvyaM" data-default-tab="result" data-user="kevinchappell" data-embed-version="2" class="codepen"></p>
