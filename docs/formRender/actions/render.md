# `render` action

Programmatically render or re-render a formRender instance with new data

Arguments

| Arg  | Type | Value(s) | Default |
|-------------|-------------|-------------|-------------|
| formData | {Array|String} | `[{}]`, `'<>'`, `'[{}]'` | null |
| options | {Object} | override options for new render | {} |

## Usage
```javascript
const wrap = $('.render-wrap');
const formRender = wrap.formRender();
// then
wrap.formRender('render', formData);
```