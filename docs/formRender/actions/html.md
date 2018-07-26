# `html` action

To grab the rendered form's HTML complete with user entered data

## Usage
<pre><code class="js">const formRenderOptions = {
  formData: '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"text"}]';
}
const formRenderInstance = $('#render-container').formRender(formRenderOptions);
const html = formRenderInstance('html'); // HTML DOM nodes
const htmlString = html.outerHTML;
</code></pre>
