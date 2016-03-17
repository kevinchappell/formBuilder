if (window.location.href.indexOf('kevinchappell.github.io') === -1) {
  ((window.gitter = {}).chat = {}).options = {
    room: 'kevinchappell/formBuilder'
  };

  var getStyles = function() {
    var styles = [];
    var extStyles = [
      '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/monokai-sublime.min.css'
    ];
    for (var i = extStyles.length - 1; i >= 0; i--) {
      var style = document.createElement('link');
      style.appendChild(document.createTextNode(''));
      style.setAttribute('href', extStyles[i]);
      style.setAttribute('rel', 'stylesheet');
      style.setAttribute('type', 'text/css');
      document.head.appendChild(style);
      styles.push(style);
    }
    return styles;
  };

  var getScripts = function() {
    var scripts = [];
    var extScripts = [
      '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/highlight.min.js',
      'https://sidecar.gitter.im/dist/sidecar.v1.js'
    ];
    for (var i = extScripts.length - 1; i >= 0; i--) {
      var script = document.createElement('script');
      script.appendChild(document.createTextNode(''));
      script.setAttribute('src', extScripts[i]);
      script.setAttribute('type', 'text/javascript');
      document.body.appendChild(script);
      scripts.push(script);
    }
    return scripts;
  };

  getStyles();
  getScripts();

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
