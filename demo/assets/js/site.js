jQuery(document).ready(function($) {
  'use strict';
  var template = document.getElementById('fb-template'),
    $buildWrap = $(document.querySelector('.build-form')),
    $renderWrap = $(document.querySelector('.render-form')),
    $renderBtn = $(document.getElementById('render-form-button')),
    $newsWrap = $(document.getElementById('news-wrap')),
    formRenderOpts = {
      container: document.getElementById('rendered-form')
    },
    formBuilderOpts = {
      fieldRemoveWarn: true
    };

  $(template).formBuilder(formBuilderOpts);

  var toggleEdit = function() {
    $buildWrap.toggle();
    $renderWrap.toggle();
  };

  $('.form-builder-save').click(function() {
    toggleEdit();
    $(template).formRender(formRenderOpts);
  });

  $renderBtn.click(function() {
    toggleEdit();
  });

  $newsWrap.dialog({
    autoOpen: false,
    width: 800,
    modal: true,
    title: 'News',
    show: {
      effect: 'fade',
      duration: 333
    },
    hide: {
      effect: 'fade',
      duration: 333
    }
  });

  $(document.getElementById('news-open')).click(function() {
    $newsWrap.dialog('open');
  });

});
