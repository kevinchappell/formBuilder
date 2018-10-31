# `clear` action

Clears all user data from the form, even tinyMCE.

## Usage
<pre><code class="js">const formRenderOptions = {
  formData: '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"text"}]';
}
const formRenderInstance = $('#render-container').formRender(formRenderOptions);
const html = formRenderInstance('html'); // HTML DOM nodes
const htmlString = html.outerHTML;
</code></pre>
// User enters data
<pre><code class="js">formRenderInstance('clear');</code></pre>
// User entered data is cleared
