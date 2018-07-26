jQuery(function($) {
  var fields = [
    {
      type: 'autocomplete',
      label: 'Custom Autocomplete',
      required: true,
      values: [
        {label: 'SQL'},
        {label: 'C#'},
        {label: 'JavaScript'},
        {label: 'Java'},
        {label: 'Python'},
        {label: 'C++'},
        {label: 'PHP'},
        {label: 'Swift'},
        {label: 'Ruby'}
      ]
    },
    {
      label: 'Star Rating',
      attrs: {
        type: 'starRating'
      },
      icon: '🌟'
    }
  ];

  var replaceFields = [
    {
      type: 'textarea',
      subtype: 'tinymce',
      label: 'tinyMCE',
      required: true,
    }
  ];

  var actionButtons = [{
    id: 'smile',
    className: 'btn btn-success',
    label: '😁',
    type: 'button',
    events: {
      click: function() {
        alert('😁😁😁 !SMILE! 😁😁😁');
      }
    }
  }];

  var templates = {
    starRating: function(fieldData) {
      return {
        field: '<span id="'+fieldData.name+'">',
        onRender: function() {
          $(document.getElementById(fieldData.name)).rateYo({rating: 3.6});
        }
      };
    }
  };

  var inputSets = [{
        label: 'User Details',
        icon: '👨',
        name: 'user-details', // optional
        showHeader: true, // optional
        fields: [{
          type: 'text',
          label: 'First Name',
          className: 'form-control'
        }, {
          type: 'select',
          label: 'Profession',
          className: 'form-control',
          values: [{
            label: 'Street Sweeper',
            value: 'option-2',
            selected: false
          }, {
            label: 'Brain Surgeon',
            value: 'option-3',
            selected: false
          }]
        }, {
          type: 'textarea',
          label: 'Short Bio:',
          className: 'form-control'
        }]
      }, {
        label: 'User Agreement',
        fields: [{
          type: 'header',
          subtype: 'h3',
          label: 'Terms & Conditions',
          className: 'header'
        }, {
          type: 'paragraph',
          label: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
        }, {
          type: 'paragraph',
          label: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
        }, {
          type: 'checkbox',
          label: 'Do you agree to the terms and conditions?',
        }]
      }];

  var typeUserDisabledAttrs = {
    autocomplete: ['access']
  };

  var typeUserAttrs = {
    text: {
      className: {
        label: 'Class',
        options: {
          'red form-control': 'Red',
          'green form-control': 'Green',
          'blue form-control': 'Blue'
        },
        style: 'border: 1px solid red'
      },
      readonly: {
        label: 'readonly',
        value: false,
      }
    }
  };

  // test disabledAttrs
  var disabledAttrs = ['placeholder'];

  var fbOptions = {
    // dataType: 'xml',
    subtypes: {
      text: ['datetime-local']
    },
    onSave: function(e, formData) {
      $('.render-wrap').formRender({
        formData: formData,
        templates: templates
      });
      window.sessionStorage.setItem('formData', JSON.stringify(formData));
      toggleEdit();
    },
    stickyControls: {
      enable: true
    },
    sortableControls: true,
    fields: fields,
    templates: templates,
    inputSets: inputSets,
    typeUserDisabledAttrs: typeUserDisabledAttrs,
    typeUserAttrs: typeUserAttrs,
    disableInjectedStyle: false,
    actionButtons: actionButtons,
    disableFields: ['autocomplete'],
    replaceFields: replaceFields,
    disabledFieldButtons: {
      text: ['copy']
    },
    i18n: {
      override: {
        'en-US': {
          number: 'Big Numbers'
        }
      }
    }
    // controlPosition: 'left'
    // disabledAttrs
  };
  var formData = window.sessionStorage.getItem('formData');
  var editing = true;

  if (formData) {
    fbOptions.formData = JSON.parse(formData);
  }

  /**
   * Toggles the edit mode for the demo
   * @return {Boolean} editMode
   */
  function toggleEdit() {
    document.body.classList.toggle('form-rendered', editing);
    if (!editing) {
      $('.build-wrap').formBuilder('setData', $('.render-wrap').formRender('userData'))
    } else {
      var formRenderData = $('.build-wrap').formBuilder('getData')
      $('.render-wrap').formRender({
        formData: formRenderData,
        templates: templates
      });
      window.sessionStorage.setItem('formData', JSON.stringify(formRenderData));
    }
    return editing = !editing;
  }

  var setFormData = '[{"type":"text","label":"Full Name","subtype":"text","className":"form-control","name":"text-1476748004559"},{"type":"select","label":"Occupation","className":"form-control","name":"select-1476748006618","values":[{"label":"Street Sweeper","value":"option-1","selected":true},{"label":"Moth Man","value":"option-2"},{"label":"Chemist","value":"option-3"}]},{"type":"textarea","label":"Short Bio","rows":"5","className":"form-control","name":"textarea-1476748007461"}]';
  var formBuilder = $('.build-wrap').formBuilder(fbOptions);
  var fbPromise = formBuilder.promise;

  fbPromise.then(function(fb) {
    var apiBtns = {
      showData: fb.actions.showData,
      clearFields: fb.actions.clearFields,
      getData: function() {
        console.log(fb.actions.getData());
      },
      setData: function() {
        fb.actions.setData(setFormData);
      },
      addField: function() {
        var field = {
            type: 'text',
            class: 'form-control',
            label: 'Text Field added at: ' + new Date().getTime()
          };
        fb.actions.addField(field);
      },
      removeField: function() {
        fb.actions.removeField();
      },
      testSubmit: function() {
        var formData = new FormData(document.forms[0]);
        console.log('Can submit: ', document.forms[0].checkValidity());
        // Display the key/value pairs
        console.log('FormData:', formData);
      },
      resetDemo: function() {
        window.sessionStorage.removeItem('formData');
        location.reload();
      },
      loadUserForm: function() {
        var formRenderOptions = {
          controlConfig: {
            'textarea.tinymce': {
              branding: false,
              encoding: 'xml',
              menubar: 'edit insert format table',
              plugins: 'preview searchreplace autolink link table lists textcolor colorpicker',
              toolbar:
                'formatselect | bold italic forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | preview'
            },
          },
          formData: '[{"type":"autocomplete","label":"Autocomplete","className":"form-control","name":"autocomplete-1526094918549","requireValidOption":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"},{"label":"Option 3","value":"option-3"}],"userData":["option-1"]},{"type":"checkbox-group","label":"Checkbox Group","name":"checkbox-group-1526095813035","other":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}],"userData":["option-1","Bilbo \\"baggins\\""]},{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"color","userData":["#00ff00"]},{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"tel","userData":["123-456-7890"]},{"type":"date","label":"Date Field","className":"form-control","name":"date-1526096579821","userData":["2018-01-01"]},{"type":"number","label":"Number","className":"form-control","name":"number-1526099204594","min":"1","max":"3","step":".2","userData":["1.1"]},{"type":"textarea","label":"Text Area","className":"form-control","name":"textarea-1526099273610","subtype":"textarea","userData":["Tennessee Welcomes You!"]},{"type":"textarea","subtype":"tinymce","label":"TinyMCE","className":"form-control","name":"textarea-1526099273610","userData":["&lt;p&gt;&lt;span style=&quot;color: #339966;&quot;&gt;It&#39;s a great place&lt;/span&gt;&lt;/p&gt;"]}]'
        }
        $('.render-wrap').formRender(formRenderOptions)
      },
      clearUserForm: function() {
        $('.render-wrap').formRender('clear')
      },
      showUserData: function() {
        alert(JSON.stringify($('.render-wrap').formRender('userData')))
      },
      getXML: function() {
        alert(formBuilder.actions.getData('xml'));
      },
      getJSON: function() {
        alert(formBuilder.actions.getData('json', true));
      },
      getJS: function() {
        alert('check console');
        console.log(formBuilder.actions.getData());
      }
    };

    Object.keys(apiBtns).forEach(function(action) {
      document.getElementById(action)
      .addEventListener('click', function(e) {
        apiBtns[action]();
      });
    });

    document.querySelectorAll('.editForm').forEach(element => {
      element.addEventListener('click', toggleEdit);
    });

    document.getElementById('setLanguage')
    .addEventListener('change', function(e) {
      fb.actions.setLang(e.target.value);
    });
  });
});
