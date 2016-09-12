jQuery(document).ready(function($) {
  var buildWrap = document.querySelector('.build-wrap'),
    renderWrap = document.querySelector('.render-wrap'),
    editBtn = document.getElementById('edit-form'),
    editing = true;

  var toggleEdit = function() {
    document.body.classList.toggle('form-rendered', editing);
    editing = !editing;
  };

  var formBuilder = $(buildWrap).formBuilder().data('formBuilder');

  console.log(formBuilder);

  $('.form-builder-save').click(function(e) {
    toggleEdit();
    $(renderWrap).formRender({
      formData: $(buildWrap).data('formBuilder').formData
    });
  });

  editBtn.onclick = function() {
    toggleEdit();
  };
});
