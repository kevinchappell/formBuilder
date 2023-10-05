# Options

<pre><code class="js">
var defaults = {
  container: false,
  formData: false,
  dataType: 'json', // 'xml' | 'json'
  disableHTMLLabels: false,
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
  },
  sanitizerOptions: {
    clobberingProtection: {
      document: false,
      form: false,
    },
    backendOrder: ['dompurify','sanitizer','fallback'],
  },
}
</code></pre>
