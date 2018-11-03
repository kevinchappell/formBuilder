# `userData` action

The UserData option aims to enable formRender to both capture the form data before posting to the server and as well as inject the data into the controls.

## Usage
1. Setup formRender with base definition as normal
<pre><code class="js">var formRenderOptions = {
  formData: '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"text"}]';
}
var formRenderInstance = $('#render-container').formRender(formRenderOptions);
</code></pre>

1. After the user has entered data into the rendered form, their data is accessible from `formRenderInstance.userData` or `$('#render-container').formRender('userData')`
<pre><code class="js">console.log(formRenderInstance.userData);
// "[{"type":"text","label":"Full Name","name":"text-1526099104236","subtype":"text","userData":["John Smith"]}]"
</code></pre>

UserData works for autocomplete, select, checkbox-group, radio-group, text, email, color, tel, number, hidden, date, textarea, textarea-tinymce.

For fields that have an "other" option, a value that is not in the pre-defined values is assumed to be the "other" value.

<pre><code class="js">var formData = '[{"type":"checkbox-group","label":"Checkbox Group","name":"checkbox-group-1526095813035","other":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"2","value":"2"}],"userData":["option-1","Bilbo \\\"baggins\\\""]}]';

var formRenderOptions = {formData};
var frInstance = $('#renderMe').formRender(formRenderOptions);</code></pre>

A common use case for userData would be to create a form, save the input data from the form into a database, and then refresh the page with the saved data. Simply stringify userData when posting.

1. Capture form data
<pre>
<code>
    $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(frInstance.userData)
    });
</code>
</pre>

2. Send the saved JSON data back into formRender to display data
<pre>
<code>
  var fbOptions.formData = {SavedJsonFromDatabase};
  var frInstance = $('#renderMe').formRender(fbOptions);
</code>
</pre>

## Demo
<p data-height="300" data-theme-id="22927" data-slug-hash="QGjqbV" data-default-tab="js,result" data-user="kevinchappell" data-pen-title="formRender: userData" class="codepen">See the Pen</p>



