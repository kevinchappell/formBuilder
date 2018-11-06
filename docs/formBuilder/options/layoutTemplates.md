# formBuilder `layoutTemplates` option

The `layoutTemplates` option lets you customise field output without touching the layouts class. For more control see the `layouts` option.

## Customising main layouts

```javascript
layoutTemplates: {
  default: function(field, label, help, data) {
    help = $('<div/>')
      .addClass('helpme')
      .attr('id', 'row-' + data.id)
      .append(help);
    return $('<div/>').append(label, field, help);
  }
}
```

## Customising label & help layouts

```javascript
layoutTemplates: {
  help: function(helpText) {
    return $('<div/>')
      .addClass('help')
      .append(helpText);
  },
  label: function(label, data) {

    // cheeky styling
    return $('<label class="bright" style="margin-top:15px;"/>')
      .attr('for', data.id)
      .append(label);
  }
}
```
