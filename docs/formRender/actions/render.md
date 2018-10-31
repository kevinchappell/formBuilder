# `render` action

Programmtically render or re-render a formRender instance with new data

Arguments
| Arg  | Type | Value(s) | Default |
| ------------- | ------------- |------------- |------------- |
| formData | {Array|String} | `[{}]`, `'<>'`, `'[{}]'` | null |
| options | {Object} | override options for new render | {} |

## Usage
<pre><code class="js">const wrap = $('.render-wrap');
const formRender = wrap.formRender();
// then
wrap.formRender('render', formData);
// or
formRender.actions.render(formData)</code></pre>
