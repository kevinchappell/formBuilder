(function($) {
  'use strict';

  var Toggle = function(element, options) {

    var defaults = {
      theme: 'fresh',
      messages: {
        off: 'Off',
        on: 'On'
      }
    };

    var opts = $.extend(defaults, options),
      $kcToggle = $('<div class="kc-toggle"/>').insertAfter(element).append(element);

    $kcToggle.toggleClass('on', element.is(':checked'));

    var kctOn = `<div class="kct-on">${opts.messages.on}</div>`,
        kctOff = `<div class="kct-off">${opts.messages.off}</div>`,
        kctHandle = '<div class="kct-handle"></div>',
        kctInner = `<div class="kct-inner">${kctOn}${kctHandle}${kctOff}</div>`;

    $kcToggle.append(kctInner);

    $kcToggle.click(function() {
      element.attr('checked', !element.attr('checked'));
      $(this).toggleClass('on');
    });

  };

  $.fn.kcToggle = function(options) {
    var toggle = this;
    return toggle.each(function() {
      var element = $(this);
      if (element.data('kcToggle')) {
        return;
      }
      var kcToggle = new Toggle(element, options);
      element.data('kcToggle', kcToggle);
    });
  };

})(jQuery);
