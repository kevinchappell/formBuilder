# formRender `userData` option

The UserData option aims to enable formRender to both capture the form data before posting to the server and as well as inject the data into the controls. A common use case would be to save the form data to a database and then re-render the form with the filled data.

1. Setup formRender with definition 
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
//Result: "[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"text","userData":[" My Text"]}]"
</code>
</pre>



