var frInstance;
var setFormData ;
var updatedData;

jQuery(function($) {  
  var fbOptions = {
    controlConfig: {
      'textarea.tinymce': {
          //selector: 'textarea', This transforms ALL textareas
          branding: false,
          encoding: "xml",
          menubar: 'edit insert format table',
          plugins: 'preview searchreplace autolink link table lists textcolor colorpicker',
          toolbar: 'formatselect | bold italic forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | preview'
          //readonly: true
         
      }
    },
  }; 

  //fbOptions.formData = setFormData;  
  //frInstance = $('#renderMe').formRender(fbOptions);

  //autocomplete
  document.getElementById('set-autocomplete').addEventListener('click', function() {
    setFormData = '[{"type":"autocomplete","label":"Autocomplete","className":"form-control","name":"autocomplete-1526094918549","requireValidOption":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"},{"label":"Option 3","value":"option-3"}],"userData":["option-1"]}]';  
    resetFR();  
  });

  //hidden
  document.getElementById('set-hidden').addEventListener('click', function() {
    setFormData = '[{"type":"hidden","name":"hidden-1526098170460","userData":["Josh"]}]';  
    resetFR();  
  });

  //select
  document.getElementById('set-select').addEventListener('click', function() {
    setFormData = '[{"type":"select","label":"Select","className":"form-control","name":"select-1526098313742","multiple":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"},{"label":"Option 3","value":"option-3"}],"userData":["option-1","option-3"]}]';  
    resetFR();  
  });

    //checkbox-group
    document.getElementById('set-checkbox-group').addEventListener('click', function() {
      setFormData = '[{"type":"checkbox-group","label":"Checkbox Group","name":"checkbox-group-1526095813035","other":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"2","value":"2"}],"userData":["option-1","Bilbo \\\"baggins\\\""]}]';
      resetFR();  
    });

      //radio-group
  document.getElementById('set-radio-group').addEventListener('click', function() {
    setFormData = '[{"type":"radio-group","label":"Radio Group","name":"radio-group-1526098461173","other":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"},{"label":"Option 3","value":"option-3"}],"userData":["option-3"]}]';  
    resetFR();  
  });

    //text
    document.getElementById('set-text').addEventListener('click', function() {
      setFormData = '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"text","userData":["Text"]}]';  
      resetFR();  
    });

      //password
    document.getElementById('set-password').addEventListener('click', function() {
      setFormData = '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"password","userData":["Text"]}]';  
      resetFR();  
    });
   
    //email
    document.getElementById('set-email').addEventListener('click', function() {
      setFormData = '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"email","userData":["a@a.com"]}]';  
      resetFR();  
    });

    //color
    document.getElementById('set-color').addEventListener('click', function() {
      setFormData = '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"color","userData":["#00ff00"]}]';  
      resetFR();  
    });

    //tel
    document.getElementById('set-tel').addEventListener('click', function() {
      setFormData = '[{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"tel","userData":["123-456-7890"]}]';  
      resetFR();  
    });

      //date
  document.getElementById('set-date').addEventListener('click', function() {
    setFormData = '[{"type":"date","label":"Date Field","className":"form-control","name":"date-1526096579821","userData":["2018-01-01"]}]'; 
    resetFR();  
  });

    //number
    document.getElementById('set-number').addEventListener('click', function() {
      setFormData = '[{"type":"number","label":"Number","className":"form-control","name":"number-1526099204594","min":"1","max":"3","step":".2","userData":["1.1"]}]';  
      resetFR();  
    });

      //textarea
  document.getElementById('set-textarea').addEventListener('click', function() {
    setFormData = '[{"type":"textarea","label":"Text Area","className":"form-control","name":"textarea-1526099273610","subtype":"textarea","userData":["Tennessee Welcomes You!"]}]';
    resetFR();  
  });

    //textarea-tinymce
    document.getElementById('set-textarea-tinymce').addEventListener('click', function() {
      setFormData = '[{"type":"textarea","subtype":"tinymce","label":"Text Area","className":"form-control","name":"textarea-1526099273610","userData":["&lt;p&gt;&lt;span style=&quot;color: #339966;&quot;&gt;It&#39;s a great place&lt;/span&gt;&lt;/p&gt;"]}]';
      resetFR();  
    });   

    document.getElementById('showdata').addEventListener('click', function() {
      $("#showData").html(JSON.stringify(frInstance.userData)); 
    });

  function resetFR(){
    fbOptions.formData = setFormData;  

    //fbOptions.formData = cleanData(fbOptions.formData);
    frInstance = $('#renderMe').formRender(fbOptions);  
    $("#showData").html('');  
  }

   

});
