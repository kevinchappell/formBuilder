# typeUserAttrs
Define custom attributes for field types with this handy option.

Attribute input types are generated using the `typeof` for the value. Custom attribute definitions function similarly to custom field definitions where `label` and `options` are "special" attributes, all non-"special" attributes such as `required`, `style`, and `multiple` are added to the input being created.

## Example Multiple Select
```javascript
const typeUserAttrs = {
  text: {
    shape: {
      label: 'Class', // i18n support by passing and array eg. ['optionCount', {count: 3}]
      multiple: true, // optional, omitting generates normal <select>
      options: {
        'red form-control': 'Red',
        'green form-control': 'Green',
        'blue form-control': 'Blue'
      },
      style: 'border: 1px solid red'
    }
  }
};
```

## [Example with i18n support](https://codepen.io/kevinchappell/pen/EMqvbG?editors=1010)

## Example Checkbox
```javascript
const typeUserAttrs = {
  text: {
    readonly: {
      label: 'readonly',
      value: false,
      type: 'checkbox',
    }
  }
};
```

## Example Text Input
```javascript
const typeUserAttrs = {
  text: {
    title: {
      label: 'Title',
      value: 'Field Title',
    }
  }
};
```

## Example Number Inputs
```javascript
const typeUserAttrs = {
  text: {
    min: {
      label: 'Min',
      value: 1,
    },
    max: {
      label: 'Max',
      value: 10,
    }
  }
};
```

### Usage
<p data-height="525" data-embed-version="2" data-theme-id="22927" data-slug-hash="yaJbZZ" data-default-tab="js,result" data-user="kevinchappell" class="codepen"></p>
