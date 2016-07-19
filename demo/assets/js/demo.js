jQuery(document).ready(function($) {
  var template = document.getElementById('fb-template'),
    $buildWrap = $(document.querySelector('.build-wrap')),
    renderWrap = document.querySelector('.render-wrap'),
    editBtn = document.getElementById('edit-form'),
    editing = true;

  var toggleEdit = function() {
    document.body.classList.toggle('editing-form', editing);
    $buildWrap.toggle();
    $(renderWrap).toggle();
    editing = !editing;
  };

  $(template).formBuilder();

  $('.form-builder-save').click(function() {
    toggleEdit();
    $(template).formRender({
      container: renderWrap
    });
  });

  editBtn.onclick = function() {
    toggleEdit();
  };
});
