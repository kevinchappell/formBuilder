'use strict';

var isSite = (window.location.href.indexOf('kevinchappell.github.io') !== -1 || window.location.href.indexOf('formbuilder.online') !== -1);

if (isSite && window.location.protocol !== 'https:') {
  window.location.protocol = 'https:';
}

((window.gitter = {}).chat = {}).options = {
  room: 'kevinchappell/formBuilder'
};
hljs.initHighlightingOnLoad();

var getStyles = function() {
  var styles = [];
  var extStyles = [
    '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/monokai-sublime.min.css',
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
    '//sidecar.gitter.im/dist/sidecar.v1.js'
  ];

  var i = (extScripts.length - 1);

  function readyState() {
    var script = this;
    if (!script.readyState || script.readyState === 'loaded' || script.readyState === 'complete') {
      script.onload = script.onreadystatechange = null;
      i--;
      if (i === -1) {
        // remove script after added
        for (i = scripts.length - 1; i >= 0; i--) {
          scripts[i].remove();
        }
      } else {
        getScript(i);
      }
    }
  }

  function getScript(i) {
    var script = document.createElement('script');
    script.appendChild(document.createTextNode(''));
    script.setAttribute('src', extScripts[i]);
    script.setAttribute('type', 'text/javascript');
    script.async = true;
    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = readyState;
    // siteScript.parentNode.insertBefore(script, siteScript.nextSibling);
    scripts.push(script);
    document.body.appendChild(script);
  }

  if (isSite) {
    getScript(i);
  }

  var vendorScripts = document.getElementById('vendor');
  vendorScripts.parentNode.removeChild(vendorScripts);

};

getStyles();
getScripts();

document.addEventListener('viewData', function() {
  var code = document.querySelector('.data-dialog code');
  window.hljs.highlightBlock(code);
}, false);


if (isSite) {

  // Facepoop
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=940846562669162";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Flattr
  (function(i) {
    var f, s = document.getElementById(i);
    f = document.createElement('iframe');
    f.src = '//button.flattr.com/view/?fid=nw095w&button=compact&url=http%3A%2F%2Fformbuilder.online';
    f.title = 'Flattr';
    f.height = 20;
    f.width = 110;
    f.style.borderWidth = 0;
    s.parentNode.insertBefore(f, s);
    s.parentNode.removeChild(s);
  })('fb92641');

  ! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + '://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, 'script', 'twitter-wjs');


  // Google analytics
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
