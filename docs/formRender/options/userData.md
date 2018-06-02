# formRender `userData` option

The UserData option aims to enable formRender to both capture the form data before posting to the server and as well as inject the data into the controls. 

1. Setup formRender with base definition 
<pre>
<code>
var setFormData = '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"text"}]';  

var fbOptions.formData = setFormData;
var frInstance = $('#renderMe').formRender(fbOptions);
</code>
</pre>

2. Enter text into the text field and then call userData
<pre>
<code>
console.log(frInstance.userData);
//  "[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"text","userData":[" My Text"]}]"
</code>
</pre>

UserData works for autocomplete, select, checkbox-group, radio-group, text, email, color, tel, number, hidden,date, textarea, textarea-tinymce.

For fields that have an "other" option, a value that is not in the pre-defined values is assumed to be the "other" value.

<pre>
<code>
   var setFormData = '[{"type":"checkbox-group","label":"Checkbox Group","name":"checkbox-group-1526095813035","other":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"2","value":"2"}],"userData":["option-1","Bilbo \\\"baggins\\\""]}]';

    var fbOptions.formData = setFormData;
    var frInstance = $('#renderMe').formRender(fbOptions);
</code>
</pre>

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


