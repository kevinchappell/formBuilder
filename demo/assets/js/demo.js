jQuery(document).ready(function($) {
  const fbOptions = {
    subtypes: {
      text: ['datetime']
    },
    onSave: function(formData) {
      toggleEdit();
      $('.render-wrap').formRender({formData});
      window.sessionStorage.setItem('formData', JSON.stringify(formData));
    },
    stickyControls: {
      enable: true
    },
    // editOnAdd: true
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

  const formBuilder = $('.build-wrap')
                      .formBuilder(fbOptions)
                      .data('formBuilder');

  document.getElementById('edit-form').onclick = function() {
    toggleEdit();
  };

  document.getElementById('get-data').onclick = function() {
    console.log(formBuilder.actions.getData());
  };
});
