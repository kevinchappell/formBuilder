jQuery(function($) {
  const fbOptions = {
    subtypes: {
      text: ['datetime-local']
    },
    onSave: function(formData) {
      toggleEdit();
      $('.render-wrap').formRender({formData});
      window.sessionStorage.setItem('formData', JSON.stringify(formData));
    },
    stickyControls: {
      enable: true
    },
  };
  let formData = window.sessionStorage.getItem('formData');
  let editing = true;

  if (formData) {
    fbOptions.formData = JSON.parse(formData);
  }

  /**
   * Toggles the edit mode for the demo
   * @return {Boolean} editMode
   */
  function toggleEdit() {
    document.body.classList.toggle('form-rendered', editing);
    return editing = !editing;
  }

  const setFormData = '[{"type":"text","label":"Full Name","subtype":"text","className":"form-control","name":"text-1476748004559"},{"type":"select","label":"Occupation","className":"form-control","name":"select-1476748006618","values":[{"label":"Street Sweeper","value":"option-1","selected":true},{"label":"Moth Man","value":"option-2"},{"label":"Chemist","value":"option-3"}]},{"type":"textarea","label":"Short Bio","rows":"5","className":"form-control","name":"textarea-1476748007461"}]';

  const formBuilder = $('.build-wrap')
                      .formBuilder(fbOptions)
                      .data('formBuilder');

  console.log(formBuilder);

  let apiBtns = {
    clearFields: formBuilder.actions.clearFields,
    getData: () => console.log(formBuilder.actions.getData()),
    setData: () => formBuilder.actions.setData(setFormData),
    addField: () => {
      let field = {
          type: 'text',
          class: 'form-control',
          label: 'Text Field added at: ' + new Date().getTime()
        };
      formBuilder.actions.addField(field);
    },
    removeField: () => formBuilder.actions.removeField(),
    setLanguage: () => {

    }
  };

  Object.keys(apiBtns).forEach(action => {
    document.getElementById(action).onclick = apiBtns[action];
  });

  document.getElementById('edit-form').onclick = function() {
    toggleEdit();
  };
});
