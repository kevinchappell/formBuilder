# templates
Often used in conjunction with the `fields` option, `templates` allows you to define a custom output for new or existing fields.

For total control in creating not only custom controls but also custom output see: [Controls](http://formbuilder.readthedocs.io/en/latest/formBuilder/controls/), [Control Plugins](http://formbuilder.readthedocs.io/en/latest/formBuilder/control-plugins/) and [Layout](http://formbuilder.readthedocs.io/en/latest/formBuilder/overview/#layouts)

## Usage
```javascript
let fields = [{
  label: 'Star Rating',
  attrs: {
    type: 'starRating'
  },
  icon: '🌟'
}];
let templates = {
  starRating: function(fieldData) {
    return {
      field: '<span id="'+fieldData.name+'">',
      onRender: function() {
        $(document.getElementById(fieldData.name)).rateYo({rating: 3.6});
      }
    };
  }
};
$(container).formBuilder({templates});
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="PmPByP" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
