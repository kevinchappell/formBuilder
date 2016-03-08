if (window.location.href.indexOf('localhost') === -1) {
  jQuery.getScript('http://w.sharethis.com/button/buttons.js')
    .done(function(script, textStatus) {
      window.stLight.options({
        publisher: "ee8fc1cb-2a3e-4afc-9a71-a24d14fb9f86",
        doNotHash: false,
        doNotCopy: false,
        hashAddressBar: false
      });
    });

  ((window.gitter = {}).chat = {}).options = {
    room: 'kevinchappell/formBuilder'
  };
  jQuery.getScript('https://sidecar.gitter.im/dist/sidecar.v1.js');

  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-4784386-21', 'auto');
  ga('send', 'pageview');
}
