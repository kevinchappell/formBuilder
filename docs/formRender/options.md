# Options

<pre><code class="js">
var defaults = {
  container: false,
  formData: false,
  dataType: 'json', // 'xml' | 'json'
  label: {
    formRendered: 'Form Rendered',
    noFormData: 'No form data.',
    other: 'Other',
    selectColor: 'Select Color'
  },
  render: true,
  notify: {
    error: function(message) {
      return console.error(message);
    },
    success: function(message) {
      return console.log(message);
    },
    warning: function(message) {
      return console.warn(message);
    }
  }
}
</code></pre>
