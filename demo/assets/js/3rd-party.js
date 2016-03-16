if (window.location.href.indexOf('localhost') === -1) {
  jQuery.getScript('http://w.sharethis.com/button/buttons.js')
    .done(function(script, textStatus) {
      window.stLight.options({
        publisher: "ee8fc1cb-2a3e-4afc-9a71-a24d14fb9f86",
        doNotHash: true,
        doNotCopy: true,
        hashAddressBar: false
      });
    });

  ((window.gitter = {}).chat = {}).options = {
    room: 'kevinchappell/formBuilder'
  };

  jQuery.getScript('https://sidecar.gitter.im/dist/sidecar.v1.js');

  var highlightCss = function() {
    var styles = [];
    var hljs = [
      '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/monokai-sublime.min.css'
    ];
    for (var i = hljs.length - 1; i >= 0; i--) {
      var style = document.createElement('link');
      style.appendChild(document.createTextNode(''));
      style.setAttribute('href', hljs[i]);
      style.setAttribute('rel', 'stylesheet');
      style.setAttribute('type', 'text/css');
      document.head.appendChild(style);
      styles.push(style);
    }
    return styles;
  };

  var highlightJS = function() {
    var scripts = [];
    var hljs = [
      '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/highlight.min.js'
    ];
    for (var i = hljs.length - 1; i >= 0; i--) {
      var script = document.createElement('script');
      script.appendChild(document.createTextNode(''));
      script.setAttribute('src', hljs[i]);
      script.setAttribute('type', 'text/javascript');
      document.body.appendChild(script);
      scripts.push(script);
    }
    return scripts;
  };

  highlightCss();
  highlightJS();

  document.addEventListener('viewData', function() {
    var code = document.querySelector('.data-dialog code');
    window.hljs.highlightBlock(code);
  }, false);

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
