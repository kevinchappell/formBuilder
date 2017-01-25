'use strict';

(function($) {
  $.fn.neonFormBuilder = function(options) {
    options = options || {};
    return this.each(function() {
      var formBuilder;
      if(options.type == 'vertical') {
        formBuilder = new neon.VerticalFormBuilder(options, this);  
      } else if(options.type == 'horizontal') {
        formBuilder = new neon.HorizontalFormBuilder(options, this);
      }
      $(this).data('formBuilder', formBuilder);
      return formBuilder;
    });
  };
})(jQuery);
