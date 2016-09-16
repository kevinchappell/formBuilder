# typeUserAttrs
Define custom attributes for field types with this handy option.

## Usage
```javascript
var options = {
  typeUserAttrs: {
    date: {
      min: {
        label: 'Date min.',
        maxlength: '10',
        description: 'Minimum'
      },
      max: {
        label: 'Date max.',
        maxlength: '10',
        onclick: 'alert("wooohoooo")',
        placeholder: 'yeah "sure" whateverman'
      }
    },
    'radio-group': {
      columns: {
        label: 'Column number',
        options: { 1: 'one', 2: 'two', 3: 'three' },
        style: 'border: 1px solid red'
      }
    }
  }
};
$(container).formBuilder(options);
```
<p data-height="525" data-embed-version="2" data-theme-id="22927" data-slug-hash="yaJbZZ" data-default-tab="js,result" data-user="kevinchappell" class="codepen"></p>
