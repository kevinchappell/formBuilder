const kcToggle = () => {
  const Toggle = function(element, options) {
    const defaults = {
      theme: 'fresh',
      messages: {
        off: 'Off',
        on: 'On'
      }
    };

    let opts = $.extend(defaults, options);
    let $kcToggle = $('<div class="kc-toggle"/>')
        .insertAfter(element)
        .append(element);

    $kcToggle.toggleClass('on', element.is(':checked'));

    let kctOn = `<div class="kct-on">${opts.messages.on}</div>`;
    let kctOff = `<div class="kct-off">${opts.messages.off}</div>`;
    let kctHandle = '<div class="kct-handle"></div>';
    let kctInner = `<div class="kct-inner">${kctOn}${kctHandle}${kctOff}</div>`;

    $kcToggle.append(kctInner);

    $kcToggle.click(function(evt) {
      element.attr('checked', !element.attr('checked'));
      $kcToggle.toggleClass('on');
    });
  };

  jQuery.fn.kcToggle = function(options) {
    const toggle = this;
    return toggle.each(function(i) {
      let element = $(toggle[i]);
      if (element.data('kcToggle')) {
        return;
      }
      let kcToggle = new Toggle(element, options);
      element.data('kcToggle', kcToggle);
    });
  };
};

module.exports = kcToggle();
