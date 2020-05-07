# Actions -> addField
Add a field to the stage at a specific index or append it to the list. The `addField` action take 2 arguments, the fieldData in js format and optionally an insertion index.

## Usage
```javascript
  var fbEditor = document.getElementById('build-wrap');
  var formBuilder = $(fbEditor).formBuilder();

  var buttons = document.getElementsByClassName('addFieldBtn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      var field = {
          type: 'text',
          class: 'form-control',
          label: this.dataset.label + ' added at: ' + new Date().getTime()
        };
        var index = this.dataset.index ? Number(this.dataset.index) : undefined;

      formBuilder.actions.addField(field, index);
    };
  }
```
## See it in Action
<p data-height="525" data-theme-id="22927" data-embed-version="2" data-slug-hash="LRAYyj" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
