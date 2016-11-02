/*
formBuilder - https://formbuilder.online/
Version: 1.24.5
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * mi18n - https://github.com/Draggable/mi18n
 * Version: 0.3.2
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
 */
module.exports=function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="dist/",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(45),u=r(o),i=e(39),f=r(i),c=e(43),a=r(c),s=e(44),l=r(s),p=function(){function t(){(0,a["default"])(this,t);var n={location:"assets/lang/",langs:["en-US","es-ES"],locale:"en-US",preloaded:{}},e=this;e.init=function(t){return e.config=(0,f["default"])({},n,t),e.langs=(0,f["default"])({},e.config.preloaded),e.locale=e.config.locale||e.config.langs[0],e.setCurrent(e.locale)}}return(0,l["default"])(t,[{key:"getValue",value:function(t){return this.current&&this.current[t]||t}},{key:"makeSafe",value:function(t){var n={"{":"\\{","}":"\\}","|":"\\|"};return t=t.replace(/\{|\}|\|/g,function(t){return n[t]}),new RegExp(t,"g")}},{key:"put",value:function(t,n){return this.current[t]=n}},{key:"get",value:function(t,n){var e=this,r=this.getValue(t),o=r.match(/\{[^\}]+?\}/g),i=void 0;if(n&&o)if("object"===("undefined"==typeof n?"undefined":(0,u["default"])(n)))for(var f=0;f<o.length;f++)i=o[f].substring(1,o[f].length-1),r=r.replace(e.makeSafe(o[f]),n[i]||"");else r=r.replace(/\{[^\}]+?\}/g,n);return r}},{key:"fromFile",value:function(t){for(var n,e=t.split("\n"),r={},o=0;o<e.length;o++)n=e[o].match(/^(.+?) *?= *?([^\n]+)/),n&&(r[n[1]]=n[2].replace(/^\s+|\s+$/,""));return r}},{key:"processFile",value:function(t){var n=this,e=t.replace(/\n\n/g,"\n");return n.langs[n.locale]=n.fromFile(e)}},{key:"loadLang",value:function(t){var n=this;return new window.Promise(function(e,r){n.langs[n.locale]?e(n.langs[n.locale]):!function(){var o=new XMLHttpRequest;o.open("GET",n.config.location+t+".lang",!0),o.onload=function(){this.status<=304?(n.processFile(o.responseText),e(o.response)):r({status:this.status,statusText:o.statusText})},o.onerror=function(){r({status:this.status,statusText:o.statusText})},o.send()}()})}},{key:"setCurrent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",n=this.loadLang(t);return this.locale=t,this.current=this.langs[t],window.sessionStorage.setItem("locale",t),n}},{key:"getLangs",get:function(){return this.config.langs}}]),t}();n["default"]=new p},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(11),o=e(31),u=e(26),i=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(32),o=e(17);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(4),o=e(15);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(24)("wks"),o=e(16),u=e(1).Symbol,i="function"==typeof u,f=t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))};f.store=r},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,e){var r=e(36),o=e(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(1),o=e(8),u=e(53),i=e(6),f="prototype",c=function(t,n,e){var a,s,l,p=t&c.F,v=t&c.G,y=t&c.S,d=t&c.P,h=t&c.B,g=t&c.W,b=v?o:o[n]||(o[n]={}),m=b[f],x=v?r:y?r[n]:(r[n]||{})[f];v&&(e=n);for(a in e)s=!p&&x&&void 0!==x[a],s&&a in b||(l=s?x[a]:e[a],b[a]=v&&"function"!=typeof x[a]?e[a]:h&&s?u(l,r):g&&x[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):d&&"function"==typeof l?u(Function.call,l):l,d&&((b.virtual||(b.virtual={}))[a]=l,t&c.R&&m&&!m[a]&&i(m,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(4).f,o=e(3),u=e(7)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,u)&&r(t,u,{configurable:!0,value:n})}},function(t,n,e){var r=e(24)("keys"),o=e(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(13);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(8),u=e(20),i=e(28),f=e(4).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:i.f(t)})}},function(t,n,e){n.f=e(7)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(13),o=e(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,e){t.exports=!e(2)&&!e(9)(function(){return 7!=Object.defineProperty(e(30)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(20),o=e(12),u=e(37),i=e(6),f=e(3),c=e(19),a=e(57),s=e(22),l=e(65),p=e(7)("iterator"),v=!([].keys&&"next"in[].keys()),y="@@iterator",d="keys",h="values",g=function(){return this};t.exports=function(t,n,e,b,m,x,O){a(e,n,b);var w,S,_,j=function(t){if(!v&&t in M)return M[t];switch(t){case d:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},E=n+" Iterator",P=m==h,k=!1,M=t.prototype,T=M[p]||M[y]||m&&M[m],F=T||j(m),A=m?P?j("entries"):F:void 0,I="Array"==n?M.entries||T:T;if(I&&(_=l(I.call(new t)),_!==Object.prototype&&(s(_,E,!0),r||f(_,p)||i(_,p,g))),P&&T&&T.name!==h&&(k=!0,F=function(){return T.call(this)}),r&&!O||!v&&!k&&M[p]||i(M,p,F),c[n]=F,c[E]=g,m)if(w={values:P?F:j(h),keys:x?F:j(d),entries:A},O)for(S in w)S in M||u(M,S,w[S]);else o(o.P+o.F*(v||k),n,w);return w}},function(t,n,e){var r=e(11),o=e(62),u=e(18),i=e(23)("IE_PROTO"),f=function(){},c="prototype",a=function(){var t,n=e(30)("iframe"),r=u.length,o="<",i=">";for(n.style.display="none",e(55).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+i+"document.F=Object"+o+"/script"+i),t.close(),a=t.F;r--;)delete a[c][u[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(f[c]=r(t),e=new f,f[c]=null,e[i]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(36),o=e(18).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(5),u=e(52)(!1),i=e(23)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=i&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~u(a,e)||a.push(e));return a}},function(t,n,e){t.exports=e(6)},function(t,n,e){var r=e(17);t.exports=function(t){return Object(r(t))}},function(t,n,e){t.exports={"default":e(46),__esModule:!0}},function(t,n,e){t.exports={"default":e(47),__esModule:!0}},function(t,n,e){t.exports={"default":e(48),__esModule:!0}},function(t,n,e){t.exports={"default":e(49),__esModule:!0}},function(t,n){"use strict";n.__esModule=!0,n["default"]=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(40),u=r(o);n["default"]=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u["default"])(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(42),u=r(o),i=e(41),f=r(i),c="function"==typeof f["default"]&&"symbol"==typeof u["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};n["default"]="function"==typeof f["default"]&&"symbol"===c(u["default"])?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,n,e){e(70),t.exports=e(8).Object.assign},function(t,n,e){e(71);var r=e(8).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){e(74),e(72),e(75),e(76),t.exports=e(8).Symbol},function(t,n,e){e(73),e(77),t.exports=e(28).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(5),o=e(68),u=e(67);t.exports=function(t){return function(n,e,i){var f,c=r(n),a=o(c.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if(f=c[s++],f!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(50);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(10),o=e(21),u=e(14);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var i,f=e(t),c=u.f,a=0;f.length>a;)c.call(t,i=f[a++])&&n.push(i);return n}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){var r=e(29);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(34),o=e(15),u=e(22),i={};e(6)(i,e(7)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(i,{next:o(1,e)}),u(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(10),o=e(5);t.exports=function(t,n){for(var e,u=o(t),i=r(u),f=i.length,c=0;f>c;)if(u[e=i[c++]]===n)return e}},function(t,n,e){var r=e(16)("meta"),o=e(13),u=e(3),i=e(4).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(9)(function(){return c(Object.preventExtensions({}))}),s=function(t){i(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!u(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},v=function(t){return a&&y.NEED&&c(t)&&!u(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:v}},function(t,n,e){"use strict";var r=e(10),o=e(21),u=e(14),i=e(38),f=e(32),c=Object.assign;t.exports=!c||e(9)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=i(t),c=arguments.length,a=1,s=o.f,l=u.f;c>a;)for(var p,v=f(arguments[a++]),y=s?r(v).concat(s(v)):r(v),d=y.length,h=0;d>h;)l.call(v,p=y[h++])&&(e[p]=v[p]);return e}:c},function(t,n,e){var r=e(4),o=e(11),u=e(10);t.exports=e(2)?Object.defineProperties:function(t,n){o(t);for(var e,i=u(n),f=i.length,c=0;f>c;)r.f(t,e=i[c++],n[e]);return t}},function(t,n,e){var r=e(14),o=e(15),u=e(5),i=e(26),f=e(3),c=e(31),a=Object.getOwnPropertyDescriptor;n.f=e(2)?a:function(t,n){if(t=u(t),n=i(n,!0),c)try{return a(t,n)}catch(e){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5),o=e(35).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(n){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(3),o=e(38),u=e(23)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,n,e){var r=e(25),o=e(17);t.exports=function(t){return function(n,e){var u,i,f=String(o(n)),c=r(e),a=f.length;return c<0||c>=a?t?"":void 0:(u=f.charCodeAt(c),u<55296||u>56319||c+1===a||(i=f.charCodeAt(c+1))<56320||i>57343?t?f.charAt(c):u:t?f.slice(c,c+2):(u-55296<<10)+(i-56320)+65536)}}},function(t,n,e){var r=e(25),o=Math.max,u=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):u(t,n)}},function(t,n,e){var r=e(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";var r=e(51),o=e(58),u=e(19),i=e(5);t.exports=e(33)(Array,"Array",function(t,n){this._t=i(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(12);r(r.S+r.F,"Object",{assign:e(61)})},function(t,n,e){var r=e(12);r(r.S+r.F*!e(2),"Object",{defineProperty:e(4).f})},function(t,n){},function(t,n,e){"use strict";var r=e(66)(!0);e(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(1),o=e(3),u=e(2),i=e(12),f=e(37),c=e(60).KEY,a=e(9),s=e(24),l=e(22),p=e(16),v=e(7),y=e(28),d=e(27),h=e(59),g=e(54),b=e(56),m=e(11),x=e(5),O=e(26),w=e(15),S=e(34),_=e(64),j=e(63),E=e(4),P=e(10),k=j.f,M=E.f,T=_.f,F=r.Symbol,A=r.JSON,I=A&&A.stringify,N="prototype",C=v("_hidden"),L=v("toPrimitive"),R={}.propertyIsEnumerable,W=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),J=Object[N],U="function"==typeof F,K=r.QObject,q=!K||!K[N]||!K[N].findChild,z=u&&a(function(){return 7!=S(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=k(J,n);r&&delete J[n],M(t,n,e),r&&t!==J&&M(J,n,r)}:M,B=function(t){var n=D[t]=S(F[N]);return n._k=t,n},V=U&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,n,e){return t===J&&Y(G,n,e),m(t),n=O(n,!0),m(e),o(D,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=S(e,{enumerable:w(0,!1)})):(o(t,C)||M(t,C,w(1,{})),t[C][n]=!0),z(t,n,e)):M(t,n,e)},H=function(t,n){m(t);for(var e,r=g(n=x(n)),o=0,u=r.length;u>o;)Y(t,e=r[o++],n[e]);return t},Q=function(t,n){return void 0===n?S(t):H(S(t),n)},X=function(t){var n=R.call(this,t=O(t,!0));return!(this===J&&o(D,t)&&!o(G,t))&&(!(n||!o(this,t)||!o(D,t)||o(this,C)&&this[C][t])||n)},$=function(t,n){if(t=x(t),n=O(n,!0),t!==J||!o(D,n)||o(G,n)){var e=k(t,n);return!e||!o(D,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=T(x(t)),r=[],u=0;e.length>u;)o(D,n=e[u++])||n==C||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===J,r=T(e?G:x(t)),u=[],i=0;r.length>i;)!o(D,n=r[i++])||e&&!o(J,n)||u.push(D[n]);return u};U||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(G,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),z(this,t,w(1,e))};return u&&q&&z(J,t,{configurable:!0,set:n}),B(t)},f(F[N],"toString",function(){return this._k}),j.f=$,E.f=Y,e(35).f=_.f=Z,e(14).f=X,e(21).f=tt,u&&!e(20)&&f(J,"propertyIsEnumerable",X,!0),y.f=function(t){return B(v(t))}),i(i.G+i.W+i.F*!U,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)v(nt[et++]);for(var nt=P(v.store),et=0;nt.length>et;)d(nt[et++]);i(i.S+i.F*!U,"Symbol",{"for":function(t){return o(W,t+="")?W[t]:W[t]=F(t)},keyFor:function(t){if(V(t))return h(W,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){q=!0},useSimple:function(){q=!1}}),i(i.S+i.F*!U,"Object",{create:Q,defineProperty:Y,defineProperties:H,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),A&&i(i.S+i.F*(!U||a(function(){var t=F();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!V(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&b(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!V(n))return n}),r[1]=n,I.apply(A,r)}}}),F[N][L]||e(6)(F[N],L,F[N].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(27)("asyncIterator")},function(t,n,e){e(27)("observable")},function(t,n,e){e(69);for(var r=e(1),o=e(6),u=e(19),i=e(7)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[i]&&o(l,i,a),u[a]=u.Array}}]);
},{}],2:[function(require,module,exports){
'use strict';

/**
 * Form Builder events
 * @return {Object} various events to be trigger
 */
// function fbEvents(){
var events = {};

events.loaded = new Event('loaded');
events.viewData = new Event('viewData');
events.userDeclined = new Event('userDeclined');
events.modalClosed = new Event('modalClosed');
events.modalOpened = new Event('modalOpened');
events.formSaved = new Event('formSaved');
events.fieldAdded = new Event('fieldAdded');
events.fieldRemoved = new Event('fieldRemoved');

//   return events;
// }

module.exports = events;

},{}],3:[function(require,module,exports){
'use strict';

require('./kc-toggle.js');
require('./polyfills.js');

(function ($) {
  var FormBuilder = function FormBuilder(options, element) {
    var _this = this;

    var mi18n = require('mi18n');
    var formBuilder = this;

    var defaults = {
      controlPosition: 'right',
      controlOrder: ['autocomplete', 'button', 'checkbox', 'checkbox-group', 'date', 'file', 'header', 'hidden', 'paragraph', 'number', 'radio-group', 'select', 'text', 'textarea'],
      dataType: 'json',
      // Array of fields to disable
      disableFields: [],
      editOnAdd: false,
      // Uneditable fields or other content you would like to appear
      // before and after regular fields:
      append: false,
      prepend: false,
      // array of objects with fields values
      // ex:
      // defaultFields: [{
      //   label: 'First Name',
      //   name: 'first-name',
      //   required: 'true',
      //   description: 'Your first name',
      //   type: 'text'
      // }, {
      //   label: 'Phone',
      //   name: 'phone',
      //   description: 'How can we reach you?',
      //   type: 'text'
      // }],
      defaultFields: [],
      inputSets: [],
      fieldRemoveWarn: false,
      roles: {
        1: 'Administrator'
      },
      messages: {
        addOption: 'Add Option +',
        allFieldsRemoved: 'All fields were removed.',
        allowMultipleFiles: 'Allow users to upload multiple files',
        autocomplete: 'Autocomplete',
        button: 'Button',
        cannotBeEmpty: 'This field cannot be empty',
        checkboxGroup: 'Checkbox Group',
        checkbox: 'Checkbox',
        checkboxes: 'Checkboxes',
        className: 'Class',
        clearAllMessage: 'Are you sure you want to clear all fields?',
        clearAll: 'Clear',
        close: 'Close',
        content: 'Content',
        copy: 'Copy To Clipboard',
        copyButton: '&#43;',
        copyButtonTooltip: 'Copy',
        dateField: 'Date Field',
        description: 'Help Text',
        descriptionField: 'Description',
        devMode: 'Developer Mode',
        editNames: 'Edit Names',
        editorTitle: 'Form Elements',
        editXML: 'Edit XML',
        enableOther: 'Enable &quot;Other&quot;',
        enableOtherMsg: 'Let users to enter an unlisted option',
        fieldDeleteWarning: false,
        fieldVars: 'Field Variables',
        fieldNonEditable: 'This field cannot be edited.',
        fieldRemoveWarning: 'Are you sure you want to remove this field?',
        fileUpload: 'File Upload',
        formUpdated: 'Form Updated',
        getStarted: 'Drag a field from the right to this area',
        header: 'Header',
        hide: 'Edit',
        hidden: 'Hidden Input',
        label: 'Label',
        labelEmpty: 'Field Label cannot be empty',
        limitRole: 'Limit access to one or more of the following roles:',
        mandatory: 'Mandatory',
        maxlength: 'Max Length',
        minOptionMessage: 'This field requires a minimum of 2 options',
        multipleFiles: 'Multiple Files',
        name: 'Name',
        no: 'No',
        noFieldsToClear: 'There are no fields to clear',
        number: 'Number',
        off: 'Off',
        on: 'On',
        option: 'Option',
        optional: 'optional',
        optionLabelPlaceholder: 'Label',
        optionValuePlaceholder: 'Value',
        optionEmpty: 'Option value required',
        other: 'Other',
        paragraph: 'Paragraph',
        placeholder: 'Placeholder',
        placeholders: {
          value: 'Value',
          label: 'Label',
          text: '',
          textarea: '',
          email: 'Enter you email',
          placeholder: '',
          className: 'space separated classes',
          password: 'Enter your password'
        },
        preview: 'Preview',
        radioGroup: 'Radio Group',
        radio: 'Radio',
        removeMessage: 'Remove Element',
        removeOption: 'Remove Option',
        remove: '&#215;',
        required: 'Required',
        richText: 'Rich Text Editor',
        roles: 'Access',
        rows: 'Rows',
        save: 'Save',
        selectOptions: 'Options',
        select: 'Select',
        selectColor: 'Select Color',
        selectionsMessage: 'Allow Multiple Selections',
        size: 'Size',
        sizes: {
          xs: 'Extra Small',
          sm: 'Small',
          m: 'Default',
          lg: 'Large'
        },
        style: 'Style',
        styles: {
          btn: {
            'default': 'Default',
            danger: 'Danger',
            info: 'Info',
            primary: 'Primary',
            success: 'Success',
            warning: 'Warning'
          }
        },
        subtype: 'Type',
        text: 'Text Field',
        textArea: 'Text Area',
        toggle: 'Toggle',
        warning: 'Warning!',
        value: 'Value',
        viewJSON: '{  }',
        viewXML: '&lt;/&gt;',
        yes: 'Yes'
      },
      notify: {
        error: function error(message) {
          return console.error(message);
        },
        success: function success(message) {
          return console.log(message);
        },
        warning: function warning(message) {
          return console.warn(message);
        }
      },
      onSave: function onSave() {
        return null;
      },
      onClearAll: function onClearAll() {
        return null;
      },
      actionButtons: [{
        label: 'Clear',
        className: 'clear-all btn btn-danger',
        events: {
          click: function click(e) {
            var fields = $('li.form-field', formBuilder.stage);
            var buttonPosition = e.target.getBoundingClientRect();
            var bodyRect = document.body.getBoundingClientRect();
            var coords = {
              pageX: buttonPosition.left + buttonPosition.width / 2,
              pageY: buttonPosition.top - bodyRect.top - 12
            };

            if (fields.length) {
              _helpers.confirm(opts.messages.clearAllMessage, function () {
                _helpers.removeAllfields();
                opts.notify.success(opts.messages.allFieldsRemoved);
                _helpers.save();
                opts.onClearAll();
              }, coords);
            } else {
              _helpers.dialog(opts.messages.noFieldsToClear, coords);
            }
          }
        }
      }, {
        label: 'Save',
        type: 'button',
        className: 'btn btn-primary save-template',
        events: {
          click: function click() {
            return opts.onSave(_helpers.save());
          }
        }
      }],
      sortableControls: false,
      stickyControls: false,
      showActionButtons: true,
      typeUserAttrs: {},
      typeUserEvents: {},
      prefix: 'form-builder-'
    };

    var utils = require('./utils.js');

    defaults.messages.subtypes = function () {
      var subtypeDefault = function subtypeDefault(subtype) {
        return {
          label: subtype,
          value: subtype
        };
      };

      return {
        text: ['text', 'password', 'email', 'color', 'tel'].map(subtypeDefault),
        header: ['h1', 'h2', 'h3'].map(subtypeDefault),
        button: ['button', 'submit', 'reset'].map(subtypeDefault),
        paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'].map(subtypeDefault)
      };
    }();

    var opts = Object.assign({}, defaults, options);
    var frmbID = 'frmb-' + $('ul[id^=frmb-]').length++;

    if (options.messages) {
      opts.messages = Object.assign({}, defaults.messages, options.messages);
    }

    formBuilder.formID = frmbID;

    var $sortableFields = $('<ul/>').attr('id', frmbID).addClass('frmb');
    var _helpers = require('./helpers.js')(opts, formBuilder);

    formBuilder.layout = _helpers.editorLayout(opts.controlPosition);
    formBuilder.stage = $sortableFields[0];

    var lastID = frmbID + '-fld-1';
    var boxID = frmbID + '-control-box';

    // create array of field objects to cycle through
    var frmbFields = [{
      label: opts.messages.autocomplete,
      attrs: {
        type: 'autocomplete',
        className: 'autocomplete',
        name: 'autocomplete'
      }
    }, {
      label: opts.messages.button,
      attrs: {
        type: 'button',
        className: 'button-input',
        name: 'button'
      }
    }, {
      label: opts.messages.checkbox,
      attrs: {
        type: 'checkbox',
        className: 'checkbox',
        name: 'checkbox'
      }
    }, {
      label: opts.messages.checkboxGroup,
      attrs: {
        type: 'checkbox-group',
        className: 'checkbox-group',
        name: 'checkbox-group'
      }
    }, {
      label: opts.messages.dateField,
      attrs: {
        type: 'date',
        className: 'calendar',
        name: 'date-input'
      }
    }, {
      label: opts.messages.fileUpload,
      attrs: {
        type: 'file',
        className: 'file-input',
        name: 'file-input'
      }
    }, {
      label: opts.messages.header,
      attrs: {
        type: 'header',
        className: 'header'
      }
    }, {
      label: opts.messages.hidden,
      attrs: {
        type: 'hidden',
        className: 'hidden-input',
        name: 'hidden-input'
      }
    }, {
      label: opts.messages.number,
      attrs: {
        type: 'number',
        className: 'number',
        name: 'number'
      }
    }, {
      label: opts.messages.paragraph,
      attrs: {
        type: 'paragraph',
        className: 'paragraph'
      }
    }, {
      label: opts.messages.radioGroup,
      attrs: {
        type: 'radio-group',
        className: 'radio-group',
        name: 'radio-group'
      }
    }, {
      label: opts.messages.select,
      attrs: {
        type: 'select',
        className: 'select',
        name: 'select'
      }
    }, {
      label: opts.messages.text,
      attrs: {
        type: 'text',
        className: 'text-input',
        name: 'text-input'
      }
    }, {
      label: opts.messages.textArea,
      attrs: {
        type: 'textarea',
        className: 'text-area',
        name: 'textarea'
      }
    }];

    frmbFields = _helpers.orderFields(frmbFields);

    if (opts.disableFields) {
      // remove disabledFields
      frmbFields = frmbFields.filter(function (field) {
        return !utils.inArray(field.attrs.type, opts.disableFields);
      });
    }

    // Create draggable fields for formBuilder
    var cbUl = utils.markup('ul', null, { id: boxID, className: 'frmb-control' });
    formBuilder.controls = cbUl;

    if (opts.sortableControls) {
      cbUl.classList.add('sort-enabled');
    }

    var $cbUL = $(cbUl);

    // Loop through
    utils.forEach(frmbFields, function (i) {
      var $field = $('<li/>', {
        'class': 'icon-' + frmbFields[i].attrs.className,
        'type': frmbFields[i].type,
        'name': frmbFields[i].className,
        'label': frmbFields[i].label
      });

      $field.data('newFieldData', frmbFields[i]);

      var typeLabel = utils.markup('span', frmbFields[i].label);
      $field.html(typeLabel).appendTo($cbUL);
    });

    if (opts.inputSets.length) {
      $('<li/>', { 'class': 'fb-separator' }).html('<hr>').appendTo($cbUL);
      opts.inputSets.forEach(function (set) {
        set.name = set.name || _helpers.makeClassName(set.label);
        var $set = $('<li/>', { 'class': 'input-set-control', type: set.name });
        $set.html(set.label).appendTo($cbUL);
      });
    }

    // Sortable fields
    $sortableFields.sortable({
      cursor: 'move',
      opacity: 0.9,
      revert: 150,
      beforeStop: _helpers.beforeStop,
      start: _helpers.startMoving,
      stop: _helpers.stopMoving,
      cancel: 'input, select, .disabled, .form-group, .btn',
      placeholder: 'frmb-placeholder'
    });

    // ControlBox with different fields
    $cbUL.sortable({
      helper: 'clone',
      opacity: 0.9,
      connectWith: $sortableFields,
      cancel: '.fb-separator',
      cursor: 'move',
      scroll: false,
      placeholder: 'ui-state-highlight',
      start: _helpers.startMoving,
      stop: _helpers.stopMoving,
      revert: 150,
      beforeStop: _helpers.beforeStop,
      distance: 3,
      update: function update(event, ui) {
        if (_helpers.doCancel) {
          return false;
        }
        if (ui.item.parent()[0] === $sortableFields[0]) {
          processControl(ui.item);
          _helpers.doCancel = true;
        } else {
          _helpers.setFieldOrder($cbUL);
          _helpers.doCancel = !opts.sortableControls;
        }
      }
    });

    var processControl = function processControl(control) {
      if (control[0].classList.contains('input-set-control')) {
        var inputSet = opts.inputSets.filter(function (set) {
          return set.name === control[0].type;
        })[0];
        if (inputSet.showHeader) {
          var header = {
            type: 'header',
            subtype: 'h2',
            id: inputSet.name,
            label: inputSet.label
          };
          prepFieldVars(header, true);
        }
        inputSet.fields.forEach(function (field) {
          prepFieldVars(field, true);
        });
      } else {
        prepFieldVars(control, true);
      }
    };

    var $formWrap = $('<div/>', {
      id: frmbID + '-form-wrap',
      'class': 'form-wrap form-builder' + _helpers.mobileClass()
    });

    formBuilder.editor = $formWrap[0];

    var $stageWrap = $('<div/>', {
      id: frmbID + '-stage-wrap',
      'class': 'stage-wrap ' + formBuilder.layout.stage
    });

    var cbWrap = $('<div/>', {
      id: frmbID + '-cb-wrap',
      'class': 'cb-wrap ' + formBuilder.layout.controls
    }).append($cbUL[0]);

    if (opts.showActionButtons) {
      // Build our headers and action links
      var viewDataText = void 0;
      var m = utils.markup;
      if (opts.dataType === 'xml') {
        viewDataText = opts.messages.viewXML;
      } else {
        viewDataText = opts.messages.viewJSON;
      }

      var buttons = opts.actionButtons.map(_helpers.processActionButtons);

      console.log(buttons);

      // const viewData = m('button', viewDataText, {
      //   id: frmbID + '-view-data',
      //   type: 'button',
      //   className: 'view-data btn btn-default'
      // });
      var clearAll = m('button', opts.messages.clearAll, {
        id: frmbID + '-clear-all',
        type: 'button',
        className: 'clear-all btn btn-danger'
      });
      var saveAll = m('button', opts.messages.save, {
        className: 'btn btn-primary ' + opts.prefix + 'save',
        id: frmbID + '-save',
        type: 'button'
      });
      var formActions = m('div', buttons, {
        className: 'form-actions btn-group'
      });

      cbWrap.append(formActions);
    }

    $stageWrap.append($sortableFields, cbWrap);
    $stageWrap.before($formWrap);
    $formWrap.append($stageWrap, cbWrap);

    if (element.type !== 'textarea') {
      $(element).append($formWrap);
    } else {
      $(element).replaceWith($formWrap);
    }

    var saveAndUpdate = _helpers.debounce(function (evt) {
      if (evt) {
        if (evt.type === 'keyup' && evt.target.name === 'className') {
          return false;
        }

        var $field = $(evt.target).closest('.form-field');
        _helpers.updatePreview($field);
        _helpers.save();
      }
    });

    // Save field on change
    $sortableFields.on('change blur keyup', '.form-elements input, .form-elements select, .form-elements textarea', saveAndUpdate);

    $('li', $cbUL).click(function (evt) {
      var $control = $(evt.target).closest('.ui-sortable-handle');
      _helpers.stopIndex = undefined;
      processControl($control);
      _helpers.save();
    });

    // Add append and prepend options if necessary
    var nonEditableFields = function nonEditableFields() {
      var cancelArray = [];

      if (opts.prepend && !$('.disabled.prepend', $sortableFields).length) {
        var prependedField = utils.markup('li', opts.prepend, { className: 'disabled prepend' });
        cancelArray.push(true);
        $sortableFields.prepend(prependedField);
      }

      if (opts.append && !$('.disabled.append', $sortableFields).length) {
        var appendedField = utils.markup('li', opts.append, { className: 'disabled append' });
        cancelArray.push(true);
        $sortableFields.append(appendedField);
      }

      if (cancelArray.some(function (elem) {
        return elem === true;
      })) {
        $stageWrap.removeClass('empty');
      }
    };

    var prepFieldVars = function prepFieldVars($field) {
      var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var field = {};
      if ($field instanceof jQuery) {
        var fieldData = $field.data('newFieldData');
        if (fieldData) {
          field = fieldData.attrs;
          field.label = fieldData.label;
        } else {
          var attrs = $field[0].attributes;
          if (!isNew) {
            field.values = $field.children().map(function (index, elem) {
              return {
                label: $(elem).text(),
                value: $(elem).attr('value'),
                selected: Boolean($(elem).attr('selected'))
              };
            });
          }

          for (var i = attrs.length - 1; i >= 0; i--) {
            field[attrs[i].name] = attrs[i].value;
          }
        }
      } else {
        field = Object.assign({}, $field);
      }

      field.name = isNew ? nameAttr(field) : field.name || nameAttr(field);

      if (isNew && utils.inArray(field.type, ['text', 'number', 'file', 'select', 'textarea'])) {
        field.className = 'form-control'; // backwards compatibility
      } else {
        field.className = field.class || field.className; // backwards compatibility
      }

      var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
      if (match) {
        field.style = match[1];
      }

      utils.escapeAttrs(field);

      appendNewField(field, isNew);
      if (isNew) {
        document.dispatchEvent(formBuilder.events.fieldAdded);
      }
      $stageWrap.removeClass('empty');
    };

    // Parse saved XML template data
    var loadFields = function loadFields() {
      var formData = formBuilder.formData;
      if (formData && formData.length) {
        for (var i = 0; i < formData.length; i++) {
          prepFieldVars(formData[i]);
        }
        $stageWrap.removeClass('empty');
      } else if (opts.defaultFields && opts.defaultFields.length) {
        // Load default fields if none are set
        opts.defaultFields.forEach(function (field) {
          return prepFieldVars(field);
        });
        $stageWrap.removeClass('empty');
      } else if (!opts.prepend && !opts.append) {
        $stageWrap.addClass('empty').attr('data-content', opts.messages.getStarted);
      }
      _helpers.save();

      var $fields = $('li.form-field:not(.disabled)', $sortableFields);

      $fields.each(function (i) {
        return _helpers.updatePreview($($fields[i]));
      });

      nonEditableFields();
    };

    // callback to track disabled tooltips
    $sortableFields.on('mousemove', 'li.disabled', function (e) {
      $('.frmb-tt', _this).css({
        left: e.offsetX - 16,
        top: e.offsetY - 34
      });
    });

    // callback to call disabled tooltips
    $sortableFields.on('mouseenter', 'li.disabled', function (e) {
      return _helpers.disabledTT.add($(_this));
    });

    // callback to call disabled tooltips
    $sortableFields.on('mouseleave', 'li.disabled', function (e) {
      return _helpers.disabledTT.remove($(_this));
    });

    var nameAttr = function nameAttr(field) {
      var epoch = new Date().getTime();
      return field.type + '-' + epoch;
    };

    /**
     * Add data for field with options [select, checkbox-group, radio-group]
     *
     * @todo   refactor this nasty ~crap~ code, its actually painful to look at
     * @param  {Object} values
     * @return {String} field options markup
     */
    var fieldOptions = function fieldOptions(values) {
      var optionActions = [utils.markup('a', opts.messages.addOption, { className: 'add add-opt' })];
      var fieldOptions = ['<label class="false-label">' + opts.messages.selectOptions + '</label>'];
      var isMultiple = values.multiple || values.type === 'checkbox-group';

      if (!values.values || !values.values.length) {
        values.values = [1, 2, 3].map(function (index) {
          var label = opts.messages.option + ' ' + index;
          var option = {
            selected: false,
            label: label,
            value: utils.hyphenCase(label)
          };
          return option;
        });
        values.values[0].selected = true;
      } else {
        // ensure option data is has all required keys
        values.values.forEach(function (option) {
          return Object.assign({}, { selected: false }, option);
        });
      }

      fieldOptions.push('<div class="sortable-options-wrap">');

      fieldOptions.push('<ol class="sortable-options">');
      utils.forEach(values.values, function (i) {
        fieldOptions.push(selectFieldOptions(values.name, values.values[i], isMultiple));
      });
      fieldOptions.push('</ol>');
      fieldOptions.push(utils.markup('div', optionActions, { className: 'option-actions' }).outerHTML);
      fieldOptions.push('</div>');

      return utils.markup('div', fieldOptions.join(''), { className: 'form-group field-options' }).outerHTML;
    };

    /**
     * Build the editable properties for the field
     * @param  {object} values configuration object for advanced fields
     * @return {String}        markup for advanced fields
     */
    var advFields = function advFields(values) {
      var advFields = [];
      var key = void 0;
      var optionFields = ['select', 'checkbox-group', 'radio-group'];
      var isOptionField = function () {
        return optionFields.indexOf(values.type) !== -1;
      }();
      var valueField = !utils.inArray(values.type, ['header', 'paragraph', 'file'].concat(optionFields));
      var roles = values.role !== undefined ? values.role.split(',') : [];

      advFields.push(requiredField(values));

      if (values.type === 'checkbox') {
        advFields.push(boolAttribute('toggle', values, { first: opts.messages.toggle }));
      }

      advFields.push(textAttribute('label', values));

      values.size = values.size || 'm';
      values.style = values.style || 'default';

      // Help Text / Description Field
      if (!utils.inArray(values.type, ['header', 'paragraph', 'button'])) {
        advFields.push(textAttribute('description', values));
      }

      if (opts.messages.subtypes[values.type]) {
        var optionData = opts.messages.subtypes[values.type];
        advFields.push(selectAttribute('subtype', values, optionData));
      }

      if (values.type === 'button') {
        advFields.push(btnStyles(values.style));
      }

      if (values.type === 'number') {
        advFields.push(numberAttribute('min', values));
        advFields.push(numberAttribute('max', values));
        advFields.push(numberAttribute('step', values));
      }

      // Placeholder
      advFields.push(textAttribute('placeholder', values));

      // TextArea Rows Attribute
      if (values.type === 'textarea') {
        advFields.push(numberAttribute('rows', values));
      }

      // Class
      advFields.push(textAttribute('className', values));

      advFields.push(textAttribute('name', values));

      if (valueField) {
        advFields.push(textAttribute('value', values));
      }

      if (values.type === 'file') {
        var labels = {
          first: opts.messages.multipleFiles,
          second: opts.messages.allowMultipleFiles
        };
        advFields.push(boolAttribute('multiple', values, labels));
      }

      var rolesDisplay = values.role !== undefined ? 'style="display:block"' : '';
      var availableRoles = ['<div class="available-roles" ' + rolesDisplay + '>'];
      for (key in opts.roles) {
        if (opts.roles.hasOwnProperty(key)) {
          var checked = utils.inArray(key, roles) ? 'checked' : '';
          var roleId = 'fld-' + lastID + '-roles-' + key;
          availableRoles.push('<input type="checkbox" name="roles[]" value="' + key + '" id="' + roleId + '" ' + checked + ' class="roles-field" /> <label for="' + roleId + '">' + opts.roles[key] + '</label><br/>');
        }
      }

      availableRoles.push('</div>');

      var accessLabels = { first: opts.messages.roles, second: opts.messages.limitRole, content: availableRoles.join('') };

      advFields.push(boolAttribute('access', values, accessLabels));

      if (values.type === 'checkbox-group' || values.type === 'radio-group') {
        advFields.push(boolAttribute('other', values, { first: opts.messages.enableOther, second: opts.messages.enableOtherMsg }));
      }

      if (values.type === 'select') {
        advFields.push(boolAttribute('multiple', values, { first: ' ', second: opts.messages.selectionsMessage }));
      }

      if (isOptionField) {
        advFields.push(fieldOptions(values));
      }

      if (utils.inArray(values.type, ['text', 'textarea'])) {
        advFields.push(numberAttribute('maxlength', values));
      }

      // Append custom attributes as defined in typeUserAttrs option
      if (opts.typeUserAttrs[values.type]) {
        advFields.push(processTypeUserAttrs(opts.typeUserAttrs[values.type], values));
      }

      return advFields.join('');
    };

    /**
     * Processes typeUserAttrs
     * @param  {Object} typeUserAttr option
     * @param  {Object} values       field attributes
     * @return {String}              markup for custom user attributes
     */
    function processTypeUserAttrs(typeUserAttr, values) {
      var advField = [];

      for (var attribute in typeUserAttr) {
        if (typeUserAttr.hasOwnProperty(attribute)) {
          var orig = opts.messages[attribute];
          var origValue = typeUserAttr[attribute].value;
          typeUserAttr[attribute].value = values[attribute] || typeUserAttr[attribute].value || '';

          if (typeUserAttr[attribute].label) {
            opts.messages[attribute] = typeUserAttr[attribute].label;
          }

          if (typeUserAttr[attribute].options) {
            advField.push(selectUserAttrs(attribute, typeUserAttr[attribute]));
          } else {
            advField.push(inputUserAttrs(attribute, typeUserAttr[attribute]));
          }

          opts.messages[attribute] = orig;
          typeUserAttr[attribute].value = origValue;
        }
      }

      return advField.join('');
    }

    /**
     * Text input value for attribute
     * @param  {String} name
     * @param  {Object} attrs also known as values
     * @return {String}       input markup
     */
    function inputUserAttrs(name, attrs) {
      var textAttrs = {
        id: name + '-' + lastID,
        title: attrs.description || attrs.label || name.toUpperCase(),
        name: name,
        type: attrs.type || 'text',
        className: ['fld-' + name]
      };
      var label = '<label for="' + textAttrs.id + '">' + opts.messages[name] + '</label>';

      if (!utils.inArray(textAttrs.type, ['checkbox', 'checkbox-group', 'radio-group'])) {
        textAttrs.className.push('form-control');
      }

      textAttrs = Object.assign({}, attrs, textAttrs);
      var textInput = '<input ' + utils.attrString(textAttrs) + '>';
      var inputWrap = '<div class="input-wrap">' + textInput + '</div>';
      return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
    }

    /**
     * Select input for multiple choice user attributes
     * @todo  replace with selectAttr
     * @param  {String} name
     * @param  {Object} options
     * @return {String}         select markup
     */
    function selectUserAttrs(name, options) {
      var optis = Object.keys(options.options).map(function (val) {
        var attrs = { value: val };
        if (val === options.value) {
          attrs.selected = null;
        }
        return '<option ' + utils.attrString(attrs) + '>' + options.options[val] + '</option>';
      });
      var selectAttrs = {
        id: name + '-' + lastID,
        title: options.description || options.label || name.toUpperCase(),
        name: name,
        className: 'fld-' + name + ' form-control'
      };
      var label = '<label for="' + selectAttrs.id + '">' + opts.messages[name] + '</label>';

      Object.keys(options).filter(function (prop) {
        return !utils.inArray(prop, ['value', 'options', 'label']);
      }).forEach(function (attr) {
        selectAttrs[attr] = options[attr];
      });

      var select = '<select ' + utils.attrString(selectAttrs) + '>' + optis.join('') + '</select>';
      var inputWrap = '<div class="input-wrap">' + select + '</div>';
      return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
    }

    var boolAttribute = function boolAttribute(name, values, labels) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][name]) {
        return;
      }

      var label = function label(txt) {
        return '<label for="' + name + '-' + lastID + '">' + txt + '</label>';
      };
      var checked = values[name] !== undefined ? 'checked' : '';
      var input = '<input type="checkbox" class="fld-' + name + '" name="' + name + '" value="true" ' + checked + ' id="' + name + '-' + lastID + '"/> ';
      var left = [];
      var right = [input];

      if (labels.first) {
        left.unshift(label(labels.first));
      }

      if (labels.second) {
        right.push(label(labels.second));
      }

      if (labels.content) {
        right.push(labels.content);
      }

      right.unshift('<div class="input-wrap">');
      right.push('</div>');

      return '<div class="form-group ' + name + '-wrap">' + left.concat(right).join('') + '</div>';
    };

    var btnStyles = function btnStyles(style) {
      var styles = opts.messages.styles.btn;
      var styleField = '';
      console.log(styles);
      if (styles) {
        var styleLabel = '<label>' + opts.messages.style + '</label>';
        styleField += '<input value="' + style + '" name="style" type="hidden" class="btn-style">';
        styleField += '<div class="btn-group" role="group">';

        Object.keys(styles).forEach(function (element) {
          var classList = ['btn-xs', 'btn', 'btn-' + element];
          if (style === element) {
            classList.push('selected');
          }
          console.log(element);

          styleField += '<button value="' + element + '" type="button" class="' + classList.join(' ') + '">' + opts.messages.styles.btn[element] + '</button>';
        });

        styleField += '</div>';

        styleField = '<div class="form-group style-wrap">' + styleLabel + ' ' + styleField + '</div>';
      }

      return styleField;
    };

    /**
     * Add a number attribute to a field.
     * @param  {String} attribute
     * @param  {Object} values
     * @return {String} markup for number attribute
     */
    var numberAttribute = function numberAttribute(attribute, values) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }

      var attrVal = values[attribute];
      var attrLabel = opts.messages[attribute] || attribute;
      var placeholder = opts.messages.placeholders[attribute];
      var inputConfig = {
        type: 'number',
        value: attrVal,
        name: attribute,
        min: '0',
        placeholder: placeholder,
        className: 'fld-' + attribute + ' form-control',
        id: attribute + '-' + lastID
      };
      var numberAttribute = '<input ' + utils.attrString(utils.trimObj(inputConfig)) + '>';
      var inputWrap = '<div class="input-wrap">' + numberAttribute + '</div>';

      return '<div class="form-group ' + attribute + '-wrap"><label for="' + inputConfig.id + '">' + attrLabel + '</label> ' + inputWrap + '</div>';
    };

    /**
     * selectAttribute
     * @param  {String} attribute  attribute name
     * @param  {Object} values     aka attrs
     * @param  {Array} optionData  select field option data
     * @return {String}            select input makrup
     */
    var selectAttribute = function selectAttribute(attribute, values, optionData) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }
      var selectOptions = optionData.map(function (option, i) {
        var optionAttrs = Object.assign({
          label: opts.messages.option + ' ' + i,
          value: undefined
        }, option);
        if (option.value === values[attribute]) {
          optionAttrs.selected = true;
        }
        return '<option ' + utils.attrString(utils.trimObj(optionAttrs)) + '>' + optionAttrs.label + '</option>';
      });
      var selectAttrs = {
        id: attribute + '-' + lastID,
        name: attribute,
        className: 'fld-' + attribute + ' form-control'
      };
      var label = '<label for="' + selectAttrs.id + '">' + (opts.messages[attribute] || utils.capitalize(attribute)) + '</label>';
      var select = '<select ' + utils.attrString(selectAttrs) + '>' + selectOptions.join('') + '</select>';
      var inputWrap = '<div class="input-wrap">' + select + '</div>';

      return '<div class="form-group ' + selectAttrs.name + '-wrap">' + label + inputWrap + '</div>';
    };

    /**
     * Generate some text inputs for field attributes, **will be replaced**
     * @param  {String} attribute
     * @param  {Object} values
     * @return {String}
     */
    var textAttribute = function textAttribute(attribute, values) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }

      var placeholderFields = ['text', 'textarea', 'select'];

      var noName = ['header'];

      var textArea = ['paragraph'];

      var attrVal = values[attribute] || '';
      var attrLabel = opts.messages[attribute];
      if (attribute === 'label' && utils.inArray(values.type, textArea)) {
        attrLabel = opts.messages.content;
      }

      noName = noName.concat(opts.messages.subtypes.header, textArea);

      var placeholders = opts.messages.placeholders;
      var placeholder = placeholders[attribute] || '';
      var attributefield = '';
      var noMakeAttr = [];

      // Field has placeholder attribute
      if (attribute === 'placeholder' && !utils.inArray(values.type, placeholderFields)) {
        noMakeAttr.push(true);
      }

      // Field has name attribute
      if (attribute === 'name' && utils.inArray(values.type, noName)) {
        noMakeAttr.push(true);
      }

      if (!noMakeAttr.some(function (elem) {
        return elem === true;
      })) {
        var inputConfig = {
          name: attribute,
          placeholder: placeholder,
          className: 'fld-' + attribute + ' form-control',
          id: attribute + '-' + lastID
        };
        var attributeLabel = '<label for="' + inputConfig.id + '">' + attrLabel + '</label>';

        if (attribute === 'label' && utils.inArray(values.type, textArea) || attribute === 'value' && values.type === 'textarea') {
          attributefield += '<textarea ' + utils.attrString(inputConfig) + '>' + attrVal + '</textarea>';
        } else {
          inputConfig.value = attrVal;
          inputConfig.type = 'text';
          attributefield += '<input ' + utils.attrString(inputConfig) + '>';
        }

        var inputWrap = '<div class="input-wrap">' + attributefield + '</div>';

        attributefield = '<div class="form-group ' + attribute + '-wrap">' + attributeLabel + ' ' + inputWrap + '</div>';
      }

      return attributefield;
    };

    var requiredField = function requiredField(values) {
      var noRequire = ['header', 'paragraph', 'button'];
      var noMake = [];
      var requireField = '';

      if (utils.inArray(values.type, noRequire)) {
        noMake.push(true);
      }
      if (!noMake.some(function (elem) {
        return elem === true;
      })) {
        requireField = boolAttribute('required', values, { first: opts.messages.required });
      }

      return requireField;
    };

    // Append the new field to the editor
    var appendNewField = function appendNewField(values) {
      var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var m = utils.markup;
      var type = values.type || 'text';
      var label = values.label || opts.messages[type] || opts.messages.label;
      var delBtn = m('a', opts.messages.remove, {
        id: 'del_' + lastID,
        className: 'del-button btn delete-confirm',
        title: opts.messages.removeMessage
      });
      var toggleBtn = m('a', null, {
        id: lastID + '-edit',
        className: 'toggle-form btn icon-pencil',
        title: opts.messages.hide
      });
      var copyBtn = m('a', opts.messages.copyButton, {
        id: lastID + '-copy',
        className: 'copy-button btn icon-copy',
        title: opts.messages.copyButtonTooltip
      });

      var liContents = m('div', [toggleBtn, copyBtn, delBtn], { className: 'field-actions' }).outerHTML;

      // Field preview Label
      liContents += '<label class="field-label">' + label + '</label>';

      if (values.description) {
        var attrs = {
          className: 'tooltip-element',
          tooltip: values.description
        };
        liContents += '<span ' + utils.attrsString(attrs) + '>?</span>';
      }

      var requiredDisplay = values.required ? 'style="display:inline"' : '';
      liContents += '<span class="required-asterisk" ' + requiredDisplay + '> *</span>';

      liContents += m('div', '', { className: 'prev-holder' }).outerHTML;
      liContents += '<div id="' + lastID + '-holder" class="frm-holder">';
      liContents += '<div class="form-elements">';

      liContents += advFields(values);
      liContents += m('a', opts.messages.close, { className: 'close-field' }).outerHTML;

      liContents += '</div>';
      liContents += '</div>';

      var field = m('li', liContents, {
        'class': type + '-field form-field',
        'type': type,
        id: lastID
      });
      var $li = $(field);

      $li.data('fieldData', { attrs: values });

      if (typeof _helpers.stopIndex !== 'undefined') {
        $('> li', $sortableFields).eq(_helpers.stopIndex).before($li);
      } else {
        $sortableFields.append($li);
      }

      $('.sortable-options', $li).sortable({ update: function update() {
          return _helpers.updatePreview($li);
        } });

      _helpers.updatePreview($li);

      if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
        opts.typeUserEvents[type].onadd(field);
      }

      if (opts.editOnAdd && isNew) {
        _helpers.closeAllEdit();
        _helpers.toggleEdit(lastID, false);
      }

      lastID = _helpers.incrementId(lastID);
    };

    // Select field html, since there may be multiple
    var selectFieldOptions = function selectFieldOptions(name, optionData, multipleSelect) {
      var optionInputType = {
        selected: multipleSelect ? 'checkbox' : 'radio'
      };
      var optionDataOrder = ['value', 'label', 'selected'];
      var optionInputs = [];
      var optionTemplate = { selected: false, label: '', value: '' };

      optionData = Object.assign(optionTemplate, optionData);

      for (var i = optionDataOrder.length - 1; i >= 0; i--) {
        var prop = optionDataOrder[i];
        if (optionData.hasOwnProperty(prop)) {
          var attrs = {
            type: optionInputType[prop] || 'text',
            'class': 'option-' + prop,
            value: optionData[prop],
            name: name + '-option'
          };

          if (opts.messages.placeholders[prop]) {
            attrs.placeholder = opts.messages.placeholders[prop];
          }

          if (prop === 'selected' && optionData.selected === true) {
            attrs.checked = optionData.selected;
          }

          optionInputs.push(utils.markup('input', null, attrs));
        }
      }

      var removeAttrs = {
        className: 'remove btn',
        title: opts.messages.removeMessage
      };
      optionInputs.push(utils.markup('a', opts.messages.remove, removeAttrs));

      var field = utils.markup('li', optionInputs);

      return field.outerHTML;
    };

    var cloneItem = function cloneItem(currentItem) {
      var currentId = currentItem.attr('id');
      var type = currentItem.attr('type');
      var ts = new Date().getTime();
      var cloneName = type + '-' + ts;
      var $clone = currentItem.clone();

      $clone.find('[id]').each(function () {
        this.id = this.id.replace(currentId, lastID);
      });

      $clone.find('[for]').each(function () {
        this.setAttribute('for', this.getAttribute('for').replace(currentId, lastID));
      });

      $clone.each(function () {
        $('e:not(.form-elements)').each(function () {
          var newName = this.getAttribute('name');
          newName = newName.substring(0, newName.lastIndexOf('-') + 1);
          newName = newName + ts.toString();
          this.setAttribute('name', newName);
        });
      });

      $clone.find('.form-elements').find(':input').each(function () {
        if (this.getAttribute('name') === 'name') {
          var newVal = this.getAttribute('value');
          newVal = newVal.substring(0, newVal.lastIndexOf('-') + 1);
          newVal = newVal + ts.toString();
          this.setAttribute('value', newVal);
        }
      });

      $clone.attr('id', lastID);
      $clone.attr('name', cloneName);
      $clone.addClass('cloned');
      $('.sortable-options', $clone).sortable();

      if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
        opts.typeUserEvents[type].onclone($clone[0]);
      }

      lastID = _helpers.incrementId(lastID);
      return $clone;
    };

    // ---------------------- UTILITIES ---------------------- //

    // delete options
    $sortableFields.on('click touchstart', '.remove', function (e) {
      var $field = $(this).parents('.form-field:eq(0)');
      e.preventDefault();
      var optionsCount = $(this).parents('.sortable-options:eq(0)').children('li').length;
      if (optionsCount <= 2) {
        opts.notify.error('Error: ' + opts.messages.minOptionMessage);
      } else {
        $(this).parent('li').slideUp('250', function () {
          $(this).remove();
          _helpers.updatePreview($field);
          _helpers.save();
        });
      }
    });

    // touch focus
    $sortableFields.on('touchstart', 'input', function (e) {
      var $input = $(this);
      if (e.handled !== true) {
        if ($input.attr('type') === 'checkbox') {
          $input.trigger('click');
        } else {
          $input.focus();
          var fieldVal = $input.val();
          $input.val(fieldVal);
        }
      } else {
        return false;
      }
    });

    // toggle fields
    $sortableFields.on('click touchstart', '.toggle-form, .close-field', function (e) {
      e.stopPropagation();
      e.preventDefault();
      if (e.handled !== true) {
        var targetID = $(e.target).parents('.form-field:eq(0)').attr('id');
        _helpers.toggleEdit(targetID);
        e.handled = true;
      } else {
        return false;
      }
    });

    $sortableFields.on('change', '.prev-holder input, .prev-holder select', function (e) {
      if (e.target.classList.contains('other-option')) {
        return;
      }
      var field = $(e.target).closest('li.form-field')[0];
      if (utils.inArray(field.type, ['select', 'checkbox-group', 'radio-group'])) {
        field.querySelector('[class="option-value"][value="' + e.target.value + '"]').parentElement.childNodes[0].checked = true;
      } else {
        document.getElementById('value-' + field.id).value = e.target.value;
      }

      _helpers.save();
    });

    // update preview to label
    $sortableFields.on('keyup change', '[name="label"]', function (e) {
      $('.field-label', $(e.target).closest('li')).text($(e.target).val());
    });

    // remove error styling when users tries to correct mistake
    $sortableFields.delegate('input.error', 'keyup', function (e) {
      $(e.target).removeClass('error');
    });

    // update preview for description
    $sortableFields.on('keyup', 'input[name="description"]', function (e) {
      var $field = $(e.target).parents('.form-field:eq(0)');
      var closestToolTip = $('.tooltip-element', $field);
      var ttVal = $(e.target).val();
      if (ttVal !== '') {
        if (!closestToolTip.length) {
          var tt = '<span class="tooltip-element" tooltip="' + ttVal + '">?</span>';
          $('.field-label', $field).after(tt);
        } else {
          closestToolTip.attr('tooltip', ttVal).css('display', 'inline-block');
        }
      } else {
        if (closestToolTip.length) {
          closestToolTip.css('display', 'none');
        }
      }
    });

    $sortableFields.on('change', '.fld-multiple', function (e) {
      var newType = e.target.checked ? 'checkbox' : 'radio';

      $(e.target).parents('.form-elements:eq(0)').find('.sortable-options input.option-selected').each(function () {
        e.target.type = newType;
      });
    });

    // format name attribute
    $sortableFields.on('blur', 'input.fld-name', function (e) {
      e.target.value = _helpers.safename(e.target.value);
      if (e.target.value === '') {
        $(e.target).addClass('field-error').attr('placeholder', opts.messages.cannotBeEmpty);
      } else {
        $(e.target).removeClass('field-error');
      }
    });

    $sortableFields.on('blur', 'input.fld-maxlength', function (e) {
      e.target.value = _helpers.forceNumber(e.target.value);
    });

    // Copy field
    $sortableFields.on('click touchstart', '.icon-copy', function (e) {
      e.preventDefault();
      var currentItem = $(e.target).parent().parent('li');
      var $clone = cloneItem(currentItem);
      $clone.insertAfter(currentItem);
      _helpers.updatePreview($clone);
      _helpers.save();
    });

    // Delete field
    $sortableFields.on('click touchstart', '.delete-confirm', function (e) {
      e.preventDefault();

      var buttonPosition = e.target.getBoundingClientRect();
      var bodyRect = document.body.getBoundingClientRect();
      var coords = {
        pageX: buttonPosition.left + buttonPosition.width / 2,
        pageY: buttonPosition.top - bodyRect.top - 12
      };

      var deleteID = $(e.target).parents('.form-field:eq(0)').attr('id');
      var $field = $(document.getElementById(deleteID));

      document.addEventListener('modalClosed', function () {
        $field.removeClass('deleting');
      }, false);

      // Check if user is sure they want to remove the field
      if (opts.fieldRemoveWarn) {
        var warnH3 = utils.markup('h3', opts.messages.warning);
        var warnMessage = utils.markup('p', opts.messages.fieldRemoveWarning);
        _helpers.confirm([warnH3, warnMessage], function () {
          return _helpers.removeField(deleteID);
        }, coords);
        $field.addClass('deleting');
      } else {
        _helpers.removeField(deleteID);
      }
    });

    // Update button style selection
    $sortableFields.on('click', '.style-wrap button', function (e) {
      var $button = $(e.target);
      var styleVal = $button.val();
      var $btnStyle = $button.parent().prev('.btn-style');
      $btnStyle.val(styleVal);
      $button.siblings('.btn').removeClass('selected');
      $button.addClass('selected');
      _helpers.updatePreview($btnStyle.closest('.form-field'));
      _helpers.save();
    });

    // Attach a callback to toggle required asterisk
    $sortableFields.on('click', '.fld-required', function (e) {
      $(e.target).closest('.form-field').find('.required-asterisk').toggle();
    });

    // Attach a callback to toggle roles visibility
    $sortableFields.on('click', 'input.fld-access', function (e) {
      var roles = $(e.target).closest('.form-field').find('.available-roles');
      var enableRolesCB = $(e.target);
      roles.slideToggle(250, function () {
        if (!enableRolesCB.is(':checked')) {
          $('input[type="checkbox"]', roles).removeAttr('checked');
        }
      });
    });

    // Attach a callback to add new options
    $sortableFields.on('click', '.add-opt', function (e) {
      e.preventDefault();
      var $optionWrap = $(e.target).closest('.field-options');
      var $multiple = $('[name="multiple"]', $optionWrap);
      var $firstOption = $('.option-selected:eq(0)', $optionWrap);
      var isMultiple = false;

      if ($multiple.length) {
        isMultiple = $multiple.prop('checked');
      } else {
        isMultiple = $firstOption.attr('type') === 'checkbox';
      }

      var name = $firstOption.attr('name');

      $('.sortable-options', $optionWrap).append(selectFieldOptions(name, false, isMultiple));
    });

    $sortableFields.on('mouseover mouseout', '.remove, .del-button', function (e) {
      return $(e.target).closest('.form-field').toggleClass('delete');
    });

    if (opts.showActionButtons) {
      // View XML
      // let xmlButton = $(document.getElementById(frmbID + '-view-data'));
      // xmlButton.click(function(e) {
      //   e.preventDefault();
      //   _helpers.showData();
      // });

      // Clear all fields in form editor
      // let clearButton = document.getElementById(`${frmbID}-clear-all`);
      // clearButton.onclick = () => {
      //   let fields = $('li.form-field', formBuilder.stage);
      //   let buttonPosition = clearButton.getBoundingClientRect();
      //   let bodyRect = document.body.getBoundingClientRect();
      //   let coords = {
      //     pageX: buttonPosition.left + (buttonPosition.width / 2),
      //     pageY: (buttonPosition.top - bodyRect.top) - 12
      //   };

      //   if (fields.length) {
      //     _helpers.confirm(opts.messages.clearAllMessage, function() {
      //       _helpers.removeAllfields();
      //       opts.notify.success(opts.messages.allFieldsRemoved);
      //       _helpers.save();
      //       opts.onClearAll();
      //     }, coords);
      //   } else {
      //     _helpers.dialog('There are no fields to clear', coords);
      //   }
      // };

      // Save Idea Template
      // document.getElementById(`${frmbID}-save`).onclick = () => {
      //   opts.onSave(_helpers.save());
      // };
    }

    _helpers.getData();
    loadFields();

    $sortableFields.css('min-height', $cbUL.height());

    // If option set, controls will remain in view in editor
    if (opts.stickyControls) {
      _helpers.stickyControls($sortableFields);
    }

    document.dispatchEvent(formBuilder.events.loaded);

    // Make actions accessible
    formBuilder.actions = {
      clearFields: _helpers.removeAllfields,
      showData: _helpers.showData,
      save: _helpers.save,
      addField: function addField(field, index) {
        _helpers.stopIndex = formBuilder.stage.children.length ? index : undefined;
        prepFieldVars(field);
        document.dispatchEvent(formBuilder.events.fieldAdded);
      },
      removeField: _helpers.removeField,
      getData: function getData() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'js';

        var stage = formBuilder.stage;
        var h = _helpers;
        var data = {
          js: function js() {
            return h.prepData(stage);
          },
          xml: function xml() {
            return h.xmlSave(stage);
          },
          json: function json() {
            return window.JSON.stringify(h.prepData(stage), null, '\t');
          }
        };

        return data[type]();
      },
      setData: function setData(formData) {
        _helpers.removeAllfields();
        _helpers.getData(formData);
        loadFields();
      }
    };

    return formBuilder;
  };

  $.fn.formBuilder = function (options) {
    if (!options) {
      options = {};
    }
    var elems = this;
    return elems.each(function (i) {
      var formBuilder = new FormBuilder(options, elems[i]);
      $(elems[i]).data('formBuilder', formBuilder);

      return formBuilder;
    });
  };
})(jQuery);

},{"./helpers.js":4,"./kc-toggle.js":5,"./polyfills.js":6,"./utils.js":7,"mi18n":1}],4:[function(require,module,exports){
'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Helper functions specific to formBuilder.
 * Called form formBuilder
 * @param  {Object}   opts
 * @param  {Instance} formBuilder
 * @return {Object} helper functions
 */
function helpers(opts, formBuilder) {
  var _helpers = {
    doCancel: false
  };

  var utils = require('./utils.js');
  formBuilder.events = require('./events.js');

  /**
   * Convert converts messy `cl#ssNames` into valid `class-names`
   *
   * @param  {String} str
   * @return {String} hyphenated string
   */
  _helpers.makeClassName = function (str) {
    str = str.replace(/[^\w\s\-]/gi, '');
    return utils.hyphenCase(str);
  };

  /**
   * Add a mobile class
   * @todo find css only solution
   * @return {String} Mobile class added to formBuilder
   */
  _helpers.mobileClass = function () {
    var mobileClass = '';
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        mobileClass = ' fb-mobile';
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return mobileClass;
  };

  /**
   * Callback for when a drag begins
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  _helpers.startMoving = function (event, ui) {
    ui.item.show().addClass('moving');
    _helpers.startIndex = $('li', this).index(ui.item);
  };

  /**
   * Callback for when a drag ends
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  _helpers.stopMoving = function (event, ui) {
    ui.item.removeClass('moving');
    if (_helpers.doCancel) {
      $(ui.sender).sortable('cancel');
      $(this).sortable('cancel');
    }
    _helpers.save();
    _helpers.doCancel = false;
  };

  /**
   * jQuery UI sortable beforeStop callback used for both lists.
   * Logic for canceling the sort or drop.
   * @param  {Object} event
   * @param  {Object} ui
   * @return {void}
   */
  _helpers.beforeStop = function (event, ui) {
    var form = document.getElementById(formBuilder.formID);
    var lastIndex = form.children.length - 1;
    var cancelArray = [];
    _helpers.stopIndex = ui.placeholder.index() - 1;

    if (!opts.sortableControls && ui.item.parent().hasClass('frmb-control')) {
      cancelArray.push(true);
    }

    if (opts.prepend) {
      cancelArray.push(_helpers.stopIndex === 0);
    }

    if (opts.append) {
      cancelArray.push(_helpers.stopIndex + 1 === lastIndex);
    }

    _helpers.doCancel = cancelArray.some(function (elem) {
      return elem === true;
    });
  };

  /**
   * Make strings safe to be used as classes
   *
   * @param  {String} str string to be converted
   * @return {String}     converter string
   */
  _helpers.safename = function (str) {
    return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
  };

  /**
   * Strips non-numbers from a number only input
   *
   * @param  {string} str string with possible number
   * @return {string}     string without numbers
   */
  _helpers.forceNumber = function (str) {
    return str.replace(/[^0-9]/g, '');
  };

  /**
   * hide and show mouse tracking tooltips, only used for disabled
   * fields in the editor.
   *
   * @todo   remove or refactor to make better use
   * @param  {Object} tt jQuery option with nexted tooltip
   * @return {void}
   */
  _helpers.initTooltip = function (tt) {
    var tooltip = tt.find('.tooltip');
    tt.mouseenter(function () {
      if (tooltip.outerWidth() > 200) {
        tooltip.addClass('max-width');
      }
      tooltip.css('left', tt.width() + 14);
      tooltip.stop(true, true).fadeIn('fast');
    }).mouseleave(function () {
      tt.find('.tooltip').stop(true, true).fadeOut('fast');
    });
    tooltip.hide();
  };

  /**
   * Attempts to get element type and subtype
   *
   * @param  {Object} $field
   * @return {Object} {type: 'fieldType', subtype: 'fieldSubType'}
   */
  _helpers.getTypes = function ($field) {
    var types = {
      type: $field.attr('type')
    };
    var subtype = $('.fld-subtype', $field).val();

    if (subtype !== types.type) {
      types.subtype = subtype;
    }

    return types;
  };

  /**
   * Get option data for a field
   * @param  {Object} field jQuery field object
   * @return {Array}        Array of option values
   */
  _helpers.fieldOptionData = function (field) {
    var options = [];

    $('.sortable-options li', field).each(function () {
      var $option = $(this);
      var selected = $('.option-selected', $option).is(':checked');
      var attrs = {
        label: $('.option-label', $option).val(),
        value: $('.option-value', $option).val()
      };

      if (selected) {
        attrs.selected = selected;
      }

      options.push(attrs);
    });

    return options;
  };

  /**
   * XML save
   *
   * @param  {Object} form sortableFields node
   * @return {String} xml in string
   */
  _helpers.xmlSave = function (form) {
    var m = utils.markup;
    var formData = _helpers.prepData(form);
    var xml = ['<form-template>\n\t<fields>'];

    utils.forEach(formData, function (fieldIndex, field) {
      var fieldContent = null;

      // Handle options
      if (field.type.match(/(select|checkbox-group|radio-group)/)) {
        var optionData = field.values;
        var options = [];

        for (var i = 0; i < optionData.length; i++) {
          var option = m('option', optionData[i].label, optionData[i]).outerHTML;
          options.push('\n\t\t\t' + option);
        }
        options.push('\n\t\t');

        fieldContent = options.join('');
        delete field.values;
      }

      var xmlField = m('field', fieldContent, field);
      xml.push('\n\t\t' + xmlField.outerHTML);
    });

    xml.push('\n\t</fields>\n</form-template>');

    return xml.join('');
  };

  _helpers.prepData = function (form) {
    var formData = [];

    if (form.childNodes.length !== 0) {
      // build data object
      utils.forEach(form.childNodes, function (index, field) {
        var $field = $(field);

        if (!$field.hasClass('disabled')) {
          (function () {
            var fieldData = _helpers.getTypes($field);
            var roleVals = $('.roles-field:checked', field).map(function () {
              return this.value;
            }).get();

            $('[class*="fld-"]', field).each(function () {
              var attr = this;
              var name = utils.camelCase(attr.name);
              fieldData[name] = attr.type === 'checkbox' ? attr.checked : attr.value;
            });

            if (roleVals.length) {
              fieldData.role = roleVals.join(',');
            }

            fieldData.className = fieldData.className || fieldData.class;

            var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className);
            if (match) {
              fieldData.style = match[1];
            }

            fieldData = utils.trimObj(fieldData);
            fieldData = utils.escapeAttrs(fieldData);

            var multipleField = fieldData.type.match(/(select|checkbox-group|radio-group)/);

            if (multipleField) {
              fieldData.values = _helpers.fieldOptionData($field);
            }

            formData.push(fieldData);
          })();
        }
      });
    }

    return formData;
  };

  _helpers.jsonSave = function (form) {
    return window.JSON.stringify(_helpers.prepData(form), null, '\t');
  };

  _helpers.getData = function (formData) {
    var data = formData || opts.formData;

    if (!data) {
      return false;
    }

    var setData = {
      xml: function xml(formData) {
        return utils.parseXML(formData);
      },
      json: function json(formData) {
        return window.JSON.parse(formData);
      }
    };

    formBuilder.formData = setData[opts.dataType](data) || [];

    return formBuilder.formData;
  };

  /**
   * Saves and returns formData
   * @return {XML|JSON} formData
   */
  _helpers.save = function () {
    var form = document.getElementById(formBuilder.formID);

    var doSave = {
      xml: _helpers.xmlSave,
      json: _helpers.jsonSave
    };

    // save action for current `dataType`
    formBuilder.formData = doSave[opts.dataType](form);

    // trigger formSaved event
    document.dispatchEvent(formBuilder.events.formSaved);
    return formBuilder.formData;
  };

  /**
   * increments the field ids with support for multiple editors
   * @param  {String} id field ID
   * @return {String}    incremented field ID
   */
  _helpers.incrementId = function (id) {
    var split = id.lastIndexOf('-');
    var newFieldNumber = parseInt(id.substring(split + 1)) + 1;
    var baseString = id.substring(0, split);

    return baseString + '-' + newFieldNumber;
  };

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} field DOM element
   */
  _helpers.updatePreview = function (field) {
    var fieldClass = field.attr('class');
    if (fieldClass.indexOf('ui-sortable-handle') !== -1) {
      return;
    }

    var fieldType = $(field).attr('type');
    var $prevHolder = $('.prev-holder', field);
    var previewData = {
      type: fieldType
    };
    var preview = void 0;

    $('[class*="fld-"]', field).each(function () {
      var name = utils.camelCase(this.name);
      previewData[name] = this.type === 'checkbox' ? this.checked : this.value;
    });

    var style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
    }

    if (fieldType.match(/(select|checkbox-group|radio-group)/)) {
      previewData.values = [];
      previewData.multiple = $('[name="multiple"]', field).is(':checked');

      $('.sortable-options li', field).each(function () {
        var option = {};
        option.selected = $('.option-selected', this).is(':checked');
        option.value = $('.option-value', this).val();
        option.label = $('.option-label', this).val();
        previewData.values.push(option);
      });
    }

    previewData = utils.trimObj(previewData);

    previewData.className = _helpers.classNames(field, previewData);
    $('.fld-className', field).val(previewData.className);

    field.data('fieldData', previewData);
    preview = utils.fieldRender(previewData, opts, true);

    $prevHolder.html(preview);

    $('input[toggle]', $prevHolder).kcToggle();
  };

  _helpers.debounce = function (func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var timeout = void 0;
    return function () {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  /**
   * Display a custom tooltip for disabled fields.
   *
   * @param  {Object} field
   */
  _helpers.disabledTT = {
    className: 'frmb-tt',
    add: function add(field) {
      var title = opts.messages.fieldNonEditable;

      if (title) {
        var tt = utils.markup('p', title, { className: _helpers.disabledTT.className });
        field.append(tt);
      }
    },
    remove: function remove(field) {
      $('.frmb-tt', field).remove();
    }
  };

  _helpers.classNames = function (field, previewData) {
    var i = void 0;
    var type = previewData.type;
    var style = previewData.style;
    var className = field[0].querySelector('.fld-className').value;
    var classes = className.split(' ');
    var types = {
      button: 'btn',
      submit: 'btn'
    };

    var primaryType = types[type];

    if (primaryType) {
      if (style) {
        for (i = 0; i < classes.length; i++) {
          var re = new RegExp('(?:^|s)' + primaryType + '-(.*?)(?:s|$)+', 'g');
          var match = classes[i].match(re);
          if (match) {
            classes.splice(i, 1);
          }
        }
        classes.push(primaryType + '-' + style);
      }
      classes.push(primaryType);
    }

    // reverse the array to put custom classes at end,
    // remove any duplicates, convert to string, remove whitespace
    return utils.unique(classes).join(' ').trim();
  };

  /**
   * Closes and open dialog
   *
   * @param  {Object} overlay Existing overlay if there is one
   * @param  {Object} dialog  Existing dialog
   */
  _helpers.closeConfirm = function (overlay, dialog) {
    if (!overlay) {
      overlay = document.getElementsByClassName('form-builder-overlay')[0];
    }
    if (!dialog) {
      dialog = document.getElementsByClassName('form-builder-dialog')[0];
    }
    overlay.classList.remove('visible');
    dialog.remove();
    overlay.remove();
    document.dispatchEvent(formBuilder.events.modalClosed);
  };

  /**
   * Returns the layout data based on controlPosition option
   * @param  {String} controlPosition 'left' or 'right'
   * @return {Object} layout object
   */
  _helpers.editorLayout = function (controlPosition) {
    var layoutMap = {
      left: {
        stage: 'pull-right',
        controls: 'pull-left'
      },
      right: {
        stage: 'pull-left',
        controls: 'pull-right'
      }
    };

    return layoutMap[controlPosition] ? layoutMap[controlPosition] : '';
  };

  /**
   * Adds overlay to the page. Used for modals.
   * @return {Object} DOM Object
   */
  _helpers.showOverlay = function () {
    var overlay = utils.markup('div', null, {
      className: 'form-builder-overlay'
    });
    document.body.appendChild(overlay);
    overlay.classList.add('visible');

    overlay.onclick = function () {
      _helpers.closeConfirm(overlay);
    };

    return overlay;
  };

  /**
   * Custom confirmation dialog
   *
   * @param  {Object}  message   Content to be displayed in the dialog
   * @param  {Func}  yesAction callback to fire if they confirm
   * @param  {Boolean} coords    location to put the dialog
   * @param  {String}  className Custom class to be added to the dialog
   * @return {Object}            Reference to the modal
   */
  _helpers.confirm = function (message, yesAction) {
    var coords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var m = utils.markup;
    var overlay = _helpers.showOverlay();
    var yes = m('button', opts.messages.yes, {
      className: 'yes btn btn-success btn-sm'
    });
    var no = m('button', opts.messages.no, {
      className: 'no btn btn-danger btn-sm'
    });

    no.onclick = function () {
      _helpers.closeConfirm(overlay);
    };

    yes.onclick = function () {
      yesAction();
      _helpers.closeConfirm(overlay);
    };

    var btnWrap = m('div', [no, yes], { className: 'button-wrap' });

    className = 'form-builder-dialog ' + className;

    var miniModal = m('div', [message, btnWrap], { className: className });
    if (!coords) {
      coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    yes.focus();
    return miniModal;
  };

  /**
   * Popup dialog the does not require confirmation.
   * @param  {String|DOM|Array}  content
   * @param  {Boolean} coords    false if no coords are provided. Without coordinates
   *                             the popup will appear center screen.
   * @param  {String}  className classname to be added to the dialog
   * @return {Object}            dom
   */
  _helpers.dialog = function (content) {
    var coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _helpers.showOverlay();

    className = 'form-builder-dialog ' + className;

    var miniModal = utils.markup('div', content, { className: className });
    if (!coords) {
      coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    document.dispatchEvent(formBuilder.events.modalOpened);

    if (className.indexOf('data-dialog') !== -1) {
      document.dispatchEvent(formBuilder.events.viewData);
    }

    return miniModal;
  };

  /**
   * Removes all fields from the form
   */
  _helpers.removeAllfields = function () {
    var form = document.getElementById(formBuilder.formID);
    var fields = form.querySelectorAll('li.form-field');
    var $fields = $(fields);
    var markEmptyArray = [];

    if (!fields.length) {
      return false;
    }

    if (opts.prepend) {
      markEmptyArray.push(true);
    }

    if (opts.append) {
      markEmptyArray.push(true);
    }

    if (!markEmptyArray.some(function (elem) {
      return elem === true;
    })) {
      form.parentElement.classList.add('empty');
      form.parentElement.dataset.content = opts.messages.getStarted;
    }

    form.classList.add('removing');

    var outerHeight = 0;
    $fields.each(function (i) {
      outerHeight += $($fields[i]).outerHeight() + 3;
    });

    fields[0].style.marginTop = -outerHeight + 'px';

    setTimeout(function () {
      $fields.remove();
      document.getElementById(formBuilder.formID).classList.remove('removing');
      _helpers.save();
    }, 400);
  };

  /**
   * If user re-orders the elements their order should be saved.
   *
   * @param {Object} $cbUL our list of elements
   */
  _helpers.setFieldOrder = function ($cbUL) {
    if (!opts.sortableControls) {
      return false;
    }
    var fieldOrder = {};
    $cbUL.children().each(function (index, element) {
      fieldOrder[index] = $(element).data('attrs').type;
    });
    if (window.sessionStorage) {
      window.sessionStorage.setItem('fieldOrder', window.JSON.stringify(fieldOrder));
    }
  };

  /**
   * Reorder the controls if the user has previously ordered them.
   *
   * @param  {Array} frmbFields
   * @return {Array} ordered fields
   */
  _helpers.orderFields = function (frmbFields) {
    var fieldOrder = false;
    var newOrderFields = [];

    if (window.sessionStorage) {
      if (opts.sortableControls) {
        fieldOrder = window.sessionStorage.getItem('fieldOrder');
      } else {
        window.sessionStorage.removeItem('fieldOrder');
      }
    }

    if (!fieldOrder) {
      var controlOrder = opts.controlOrder.concat(frmbFields.map(function (field) {
        return field.attrs.type;
      }));
      fieldOrder = utils.unique(controlOrder);
    } else {
      fieldOrder = window.JSON.parse(fieldOrder);
      fieldOrder = Object.keys(fieldOrder).map(function (i) {
        return fieldOrder[i];
      });
    }

    fieldOrder.forEach(function (fieldType) {
      var field = frmbFields.filter(function (field) {
        return field.attrs.type === fieldType;
      })[0];
      newOrderFields.push(field);
    });

    return newOrderFields.filter(Boolean);
  };

  /**
   * Close fields being editing
   * @param  {Object} stage
   */
  _helpers.closeAllEdit = function () {
    var fields = $('> li.editing', formBuilder.stage);
    var toggleBtns = $('.toggle-form', formBuilder.stage);
    var editPanels = $('.frm-holder', fields);

    toggleBtns.removeClass('open');
    fields.removeClass('editing');
    $('.prev-holder', fields).show();
    editPanels.hide();
  };

  /**
   * Toggles the edit mode for the given field
   * @param  {String} fieldId
   * @param  {Boolean} animate
   */
  _helpers.toggleEdit = function (fieldId) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var field = document.getElementById(fieldId);
    var toggleBtn = $('.toggle-form', field);
    var editPanel = $('.frm-holder', field);
    field.classList.toggle('editing');
    toggleBtn.toggleClass('open');
    if (animate) {
      $('.prev-holder', field).slideToggle(250);
      editPanel.slideToggle(250);
    } else {
      $('.prev-holder', field).toggle();
      editPanel.toggle();
    }
  };

  /**
   * Controls follow scroll to the bottom of the editor
   */
  _helpers.stickyControls = function () {
    var $cbWrap = $(formBuilder.controls).parent();
    var $stageWrap = $(formBuilder.stage).parent();
    var cbWidth = $cbWrap.width();
    var cbPosition = formBuilder.controls.getBoundingClientRect();

    $(window).scroll(function (evt) {
      var scrollTop = $(evt.target).scrollTop();

      if (scrollTop > $stageWrap.offset().top) {
        var cbStyle = {
          position: 'fixed',
          width: cbWidth,
          top: '5px',
          bottom: 'auto',
          right: 'auto',
          left: cbPosition.left
        };

        var cbOffset = $cbWrap.offset();
        var stageOffset = $stageWrap.offset();
        var cbBottom = cbOffset.top + $cbWrap.height();
        var stageBottom = stageOffset.top + $stageWrap.height();

        if (cbBottom > stageBottom && cbOffset.top !== stageOffset.top) {
          $cbWrap.css({
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            right: 0,
            left: 'auto'
          });
        }

        if (cbBottom < stageBottom || cbBottom === stageBottom && cbOffset.top > scrollTop) {
          $cbWrap.css(cbStyle);
        }
      } else {
        formBuilder.controls.parentElement.removeAttribute('style');
      }
    });
  };

  /**
   * Open a dialog with the form's data
   */
  _helpers.showData = function () {
    var m = utils.markup;
    var data = utils.escapeHtml(formBuilder.formData);
    var code = m('code', data, { className: 'formData-' + opts.dataType });

    _helpers.dialog(m('pre', code), null, 'data-dialog');
  };

  /**
   * Remove a field from the stage
   * @param  {String}  fieldID ID of the field to be removed
   * @return {Boolean} fieldRemoved returns true if field is removed
   */
  _helpers.removeField = function (fieldID) {
    var fieldRemoved = false;
    var form = document.getElementById(formBuilder.formID);
    var fields = form.getElementsByClassName('form-field');

    if (!fields.length) {
      console.warn('No fields to remove');
      return false;
    }

    if (!fieldID) {
      var availableIds = [].slice.call(fields).map(function (field) {
        return field.id;
      });
      console.warn('fieldID required to use `removeField` action.');
      console.warn('Available IDs: ' + availableIds.join(', '));
    }

    var field = document.getElementById(fieldID);
    var $field = $(document.getElementById(fieldID));
    if (!field) {
      console.warn('Field not found');
      return false;
    }

    $field.slideUp(250, function () {
      $field.removeClass('deleting');
      $field.remove();
      fieldRemoved = true;
      _helpers.save();
      if (!form.childNodes.length) {
        var stageWrap = form.parentElement;
        stageWrap.classList.add('empty');
        stageWrap.dataset.content = opts.messages.getStarted;
      }
    });

    document.dispatchEvent(formBuilder.events.fieldRemoved);
    return fieldRemoved;
  };

  _helpers.processActionButtons = function (buttonData) {
    var m = utils.markup;

    var label = buttonData.label,
        events = buttonData.events,
        attrs = _objectWithoutProperties(buttonData, ['label', 'events']);

    var button = m('button', label, attrs);

    if (events) {
      var _loop = function _loop(event) {
        if (events.hasOwnProperty(event)) {
          button.addEventListener(event, function (evt) {
            return events[event](evt);
          });
        }
      };

      for (var event in events) {
        _loop(event);
      }
    }

    return button;
  };

  return _helpers;
}

module.exports = helpers;

},{"./events.js":2,"./utils.js":7}],5:[function(require,module,exports){
'use strict';

var kcToggle = function kcToggle() {
  var Toggle = function Toggle(element, options) {
    var defaults = {
      theme: 'fresh',
      messages: {
        off: 'Off',
        on: 'On'
      }
    };

    var opts = $.extend(defaults, options);
    var $kcToggle = $('<div class="kc-toggle"/>').insertAfter(element).append(element);

    $kcToggle.toggleClass('on', element.is(':checked'));

    var kctOn = '<div class="kct-on">' + opts.messages.on + '</div>';
    var kctOff = '<div class="kct-off">' + opts.messages.off + '</div>';
    var kctHandle = '<div class="kct-handle"></div>';
    var kctInner = '<div class="kct-inner">' + kctOn + kctHandle + kctOff + '</div>';

    $kcToggle.append(kctInner);

    $kcToggle.click(function (evt) {
      element.attr('checked', !element.attr('checked'));
      $kcToggle.toggleClass('on');
    });
  };

  jQuery.fn.kcToggle = function (options) {
    var toggle = this;
    return toggle.each(function (i) {
      var element = $(toggle[i]);
      if (element.data('kcToggle')) {
        return;
      }
      var kcToggle = new Toggle(element, options);
      element.data('kcToggle', kcToggle);
    });
  };
};

module.exports = kcToggle();

},{}],6:[function(require,module,exports){
'use strict';

/**
 * Polyfills for older browsers and added functionality
 * @return {void}
 */
function polyfills() {
  // Element.remove() polyfill
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  // Event polyfill
  if (typeof Event !== 'function') {
    (function () {
      window.Event = function (evt) {
        var event = document.createEvent('Event');
        event.initEvent(evt, true, true);
        return event;
      };
    })();
  }

  // Object.assign polyfill
  if (typeof Object.assign != 'function') {
    Object.assign = function (target) {
      'use strict';

      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      target = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }
}

module.exports = polyfills();

},{}],7:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} fbUtils
 */
// function utils() {
var fbUtils = {};

// cleaner syntax for testing indexOf element
fbUtils.inArray = function (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
fbUtils.trimObj = function (attrs) {
  var xmlRemove = [null, undefined, '', false, 'false'];
  for (var attr in attrs) {
    if (fbUtils.inArray(attrs[attr], xmlRemove)) {
      delete attrs[attr];
    } else if (Array.isArray(attrs[attr])) {
      if (!attrs[attr].length) {
        delete attrs[attr];
      }
    }
  }

  return attrs;
};

/**
 * Test if attribute is a valid HTML attribute
 * @param  {String} attr
 * @return {Boolean}
 */
fbUtils.validAttr = function (attr) {
  var invalid = ['values', 'enableOther', 'other', 'label',
  // 'style',
  'subtype'];
  return !fbUtils.inArray(attr, invalid);
};

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
fbUtils.attrString = function (attrs) {
  var attributes = [];

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr) && fbUtils.validAttr(attr)) {
      attr = fbUtils.safeAttr(attr, attrs[attr]);
      attributes.push(attr.name + attr.value);
    }
  }
  return attributes.join(' ');
};

/**
 * Convert attributes to markup safe strings
 * @param  {String} name  attribute name
 * @param  {String} value attribute value
 * @return {Object}       {attrName: attrValue}
 */
fbUtils.safeAttr = function (name, value) {
  name = fbUtils.safeAttrName(name);
  var valString = void 0;

  if (value) {
    if (Array.isArray(value)) {
      valString = fbUtils.escapeAttr(value.join(' '));
    } else {
      if (typeof value === 'boolean') {
        value = value.toString();
      }
      valString = fbUtils.escapeAttr(value.replace(',', ' ').trim());
    }
  }

  value = value ? '="' + valString + '"' : '';
  return {
    name: name,
    value: value
  };
};

fbUtils.safeAttrName = function (name) {
  var safeAttr = {
    className: 'class'
  };

  return safeAttr[name] || fbUtils.hyphenCase(name);
};

/**
 * Convert strings into lowercase-hyphen
 *
 * @param  {String} str
 * @return {String}
 */
fbUtils.hyphenCase = function (str) {
  str = str.replace(/[^\w\s\-]/gi, '');
  str = str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });

  return str.replace(/\s/g, '-').replace(/^-+/g, '');
};

/**
 * convert a hyphenated string to camelCase
 * @param  {String} str
 * @return {String}
 */
fbUtils.camelCase = function (str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
};

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {Object}              attrs
 * @return {String}
 */
fbUtils.markup = function (tag) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var contentType = void 0,
      field = document.createElement(tag),
      getContentType = function getContentType(content) {
    return Array.isArray(content) ? 'array' : typeof content === 'undefined' ? 'undefined' : _typeof(content);
  },
      appendContent = {
    string: function string(content) {
      field.innerHTML = content;
    },
    object: function object(content) {
      return field.appendChild(content);
    },
    array: function array(content) {
      for (var i = 0; i < content.length; i++) {
        contentType = getContentType(content[i]);
        appendContent[contentType](content[i]);
      }
    }
  };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var name = fbUtils.safeAttrName(attr);
      field.setAttribute(name, attrs[attr]);
    }
  }

  contentType = getContentType(content);

  if (content) {
    appendContent[contentType].call(this, content);
  }

  return field;
};

/**
 * Convert html element attributes to key/value object
 * @param  {Object} DOM element
 * @return {Object} ex: {attrName: attrValue}
 */
fbUtils.parseAttrs = function (elem) {
  var attrs = elem.attributes;
  var data = {};
  fbUtils.forEach(attrs, function (attr) {
    var attrVal = attrs[attr].value;
    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true';
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined;
    }

    if (attrVal) {
      data[attrs[attr].name] = attrVal;
    }
  });

  return data;
};

/**
 * Convert field options to optionData
 * @param  {Object} DOM element
 * @return {Array}      optionData array
 */
fbUtils.parseOptions = function (field) {
  var options = field.getElementsByTagName('option'),
      optionData = {},
      data = [];

  if (options.length) {
    for (var i = 0; i < options.length; i++) {
      optionData = fbUtils.parseAttrs(options[i]);
      optionData.label = options[i].textContent;
      data.push(optionData);
    }
  }

  return data;
};

/**
 * Parse XML formData
 * @param  {String} xmlString
 * @return {Array}            formData array
 */
fbUtils.parseXML = function (xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml'),
      formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      var fieldData = fbUtils.parseAttrs(fields[i]);

      if (fields[i].children && fields[i].children.length) {
        fieldData.values = fbUtils.parseOptions(fields[i]);
      }

      formData.push(fieldData);
    }
  }

  return formData;
};

/**
 * Escape markup so it can be displayed rather than rendered
 * @param  {String} html markup
 * @return {String}      escaped html
 */
fbUtils.escapeHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

// Escape an attribute
fbUtils.escapeAttr = function (str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  var replaceTag = function replaceTag(tag) {
    return match[tag] || tag;
  };

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str;
};

// Escape attributes
fbUtils.escapeAttrs = function (attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};

// forEach that can be used on nodeList
fbUtils.forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * Remove duplicates from an array of elements
 * @param  {Array} arrArg array with possible duplicates
 * @return {Array}        array with only unique values
 */
fbUtils.unique = function (array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};

/**
 * Generate preview markup
 * @param  {Object}  fieldData
 * @param  {Object}  opts
 * @param  {Boolean} preview
 * @return {String}  preview markup for field
 */
fbUtils.fieldRender = function (fieldData, opts) {
  var preview = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var fieldMarkup = '';
  var fieldLabel = '';
  var optionsMarkup = '';
  var fieldLabelText = fieldData.label || '';
  var fieldDesc = fieldData.description || '';
  var fieldRequired = '';
  var fieldOptions = fieldData.values;

  fieldData.name = preview ? fieldData.name + '-preview' : fieldData.name;
  fieldData.id = fieldData.name;
  if (fieldData.multiple) {
    fieldData.name = fieldData.name + '[]';
  }

  fieldData.type = fieldData.subtype || fieldData.type;

  if (fieldData.required) {
    fieldData.required = null;
    fieldData['aria-required'] = 'true';
    fieldRequired = '<span class="required">*</span>';
  }

  if (fieldData.type !== 'hidden') {
    if (fieldDesc) {
      fieldDesc = '<span class="tooltip-element" tooltip="' + fieldDesc + '">?</span>';
    }
    fieldLabel = '<label for="' + fieldData.id + '" class="fb-' + fieldData.type + '-label">' + fieldLabelText + ' ' + fieldRequired + ' ' + fieldDesc + '</label>';
  }

  var fieldLabelVal = fieldData.label;

  delete fieldData.label;
  delete fieldData.description;

  var fieldDataString = fbUtils.attrString(fieldData);

  switch (fieldData.type) {
    case 'textarea':
    case 'rich-text':
      delete fieldData.type;
      var fieldVal = fieldData.value || '';
      fieldMarkup = fieldLabel + '<textarea ' + fieldDataString + '>' + fieldVal + '</textarea>';
      break;
    case 'select':
      var optionAttrsString = void 0;
      fieldData.type = fieldData.type.replace('-group', '');

      if (fieldOptions) {
        if (fieldData.placeholder) {
          optionsMarkup += '<option disabled selected>' + fieldData.placeholder + '</option>';
        }

        for (var i = 0; i < fieldOptions.length; i++) {
          if (!fieldOptions[i].selected || fieldData.placeholder) {
            delete fieldOptions[i].selected;
          }
          if (!fieldOptions[i].label) {
            fieldOptions[i].label = '';
          }
          optionAttrsString = fbUtils.attrString(fieldOptions[i]);
          optionsMarkup += '<option ' + optionAttrsString + '>' + fieldOptions[i].label + '</option>';
        }
      }

      fieldMarkup = fieldLabel + '<select ' + fieldDataString + '>' + optionsMarkup + '</select>';
      break;
    case 'checkbox-group':
    case 'radio-group':
      var optionAttrs = void 0;
      fieldData.type = fieldData.type.replace('-group', '');

      if (fieldData.type === 'checkbox') {
        fieldData.name = fieldData.name + '[]';
      }

      if (fieldOptions) {
        var _optionAttrsString = void 0;

        for (var _i = 0; _i < fieldOptions.length; _i++) {
          optionAttrs = Object.assign({ value: '', label: '' }, fieldData, fieldOptions[_i]);

          if (optionAttrs.selected) {
            delete optionAttrs.selected;
            optionAttrs.checked = null;
          }

          optionAttrs.id = fieldData.id + '-' + _i;
          _optionAttrsString = fbUtils.attrString(optionAttrs);
          optionsMarkup += '<input ' + _optionAttrsString + ' /> <label for="' + optionAttrs.id + '">' + optionAttrs.label + '</label><br>';
        }

        if (fieldData.other) {
          var otherOptionAttrs = {
            id: fieldData.id + '-' + 'other',
            className: fieldData.className + ' other-option',
            onclick: 'fbUtils.otherOptionCB(\'' + fieldData.id + '-other\')'
          };

          _optionAttrsString = fbUtils.attrString(Object.assign({}, fieldData, otherOptionAttrs));

          optionsMarkup += '<input ' + _optionAttrsString + ' /> <label for="' + otherOptionAttrs.id + '">' + opts.messages.other + '</label> <input type="text" name="' + fieldData.name + '" id="' + otherOptionAttrs.id + '-value" style="display:none;" />';
        }
      }
      fieldMarkup = fieldLabel + '<div class="' + fieldData.type + '-group">' + optionsMarkup + '</div>';
      break;
    case 'text':
    case 'password':
    case 'email':
    case 'number':
    case 'file':
    case 'hidden':
    case 'date':
    case 'tel':
    case 'autocomplete':
      fieldMarkup = fieldLabel + ' <input ' + fieldDataString + '>';
      break;
    case 'color':
      fieldMarkup = fieldLabel + ' <input ' + fieldDataString + '> ' + opts.messages.selectColor;
      break;
    case 'button':
    case 'submit':
      fieldMarkup = '<button ' + fieldDataString + '>' + fieldLabelVal + '</button>';
      break;
    case 'checkbox':
      fieldMarkup = '<input ' + fieldDataString + '> ' + fieldLabel;

      if (fieldData.toggle) {
        setTimeout(function () {
          $(document.getElementById(fieldData.id)).kcToggle();
        }, 100);
      }
      break;
    default:
      fieldMarkup = '<' + fieldData.type + ' ' + fieldDataString + '>' + fieldLabelVal + '</' + fieldData.type + '>';
  }

  if (fieldData.type !== 'hidden') {
    var className = fieldData.id ? 'fb-' + fieldData.type + ' form-group field-' + fieldData.id : '';
    fieldMarkup = fbUtils.markup('div', fieldMarkup, {
      className: className
    });
  } else {
    fieldMarkup = fbUtils.markup('input', null, fieldData);
  }

  return fieldMarkup;
};

/**
 * Callback for other option.
 * Toggles the hidden text area for "other" option.
 * @param  {String} otherId id of the "other" option input
 */
fbUtils.otherOptionCB = function (otherId) {
  var otherInput = document.getElementById(otherId);
  var otherInputValue = document.getElementById(otherId + '-value');

  if (otherInput.checked) {
    otherInput.style.display = 'none';
    otherInputValue.style.display = 'inline-block';
  } else {
    otherInput.style.display = 'inline-block';
    otherInputValue.style.display = 'none';
  }
};

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
fbUtils.capitalize = function (str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};
//   return fbUtils;
// }

module.exports = fbUtils;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbWkxOG4vZGlzdC9taTE4bi5taW4uanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2tjLXRvZ2dsZS5qcyIsInNyYy9qcy9wb2x5ZmlsbHMuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNMQTs7OztBQUlBO0FBQ0UsSUFBTSxTQUFTLEVBQWY7O0FBRUEsT0FBTyxNQUFQLEdBQWdCLElBQUksS0FBSixDQUFVLFFBQVYsQ0FBaEI7QUFDQSxPQUFPLFFBQVAsR0FBa0IsSUFBSSxLQUFKLENBQVUsVUFBVixDQUFsQjtBQUNBLE9BQU8sWUFBUCxHQUFzQixJQUFJLEtBQUosQ0FBVSxjQUFWLENBQXRCO0FBQ0EsT0FBTyxXQUFQLEdBQXFCLElBQUksS0FBSixDQUFVLGFBQVYsQ0FBckI7QUFDQSxPQUFPLFdBQVAsR0FBcUIsSUFBSSxLQUFKLENBQVUsYUFBVixDQUFyQjtBQUNBLE9BQU8sU0FBUCxHQUFtQixJQUFJLEtBQUosQ0FBVSxXQUFWLENBQW5CO0FBQ0EsT0FBTyxVQUFQLEdBQW9CLElBQUksS0FBSixDQUFVLFlBQVYsQ0FBcEI7QUFDQSxPQUFPLFlBQVAsR0FBc0IsSUFBSSxLQUFKLENBQVUsY0FBVixDQUF0Qjs7QUFFRjtBQUNBOztBQUVBLE9BQU8sT0FBUCxHQUFpQixNQUFqQjs7Ozs7QUNuQkEsUUFBUSxnQkFBUjtBQUNBLFFBQVEsZ0JBQVI7O0FBRUEsQ0FBQyxVQUFTLENBQVQsRUFBWTtBQUNYLE1BQU0sY0FBYyxTQUFkLFdBQWMsQ0FBUyxPQUFULEVBQWtCLE9BQWxCLEVBQTJCO0FBQUE7O0FBQzdDLFFBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBZDtBQUNBLFFB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O0FBQ0YsQ0FYRDs7QUFhQTs7Ozs7QUFLQSxRQUFRLFVBQVIsR0FBcUIsVUFBQyxHQUFELEVBQVM7QUFDNUIsU0FBTyxJQUFJLE9BQUosQ0FBWSxPQUFaLEVBQXFCLFVBQVMsQ0FBVCxFQUFZO0FBQ3BDLFdBQU8sRUFBRSxXQUFGLEVBQVA7QUFDRCxHQUZJLENBQVA7QUFHRCxDQUpEO0FBS0Y7QUFDQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gKiBtaTE4biAtIGh0dHBzOi8vZ2l0aHViLmNvbS9EcmFnZ2FibGUvbWkxOG5cbiAqIFZlcnNpb246IDAuMy4yXG4gKiBBdXRob3I6IEtldmluIENoYXBwZWxsIDxrZXZpbi5iLmNoYXBwZWxsQGdtYWlsLmNvbT4gKGh0dHA6Ly9rZXZpbi1jaGFwcGVsbC5jb20pXG4gKi9cbm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgZT17fTtyZXR1cm4gbi5tPXQsbi5jPWUsbi5wPVwiZGlzdC9cIixuKDApfShbZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1lKDQ1KSx1PXIobyksaT1lKDM5KSxmPXIoaSksYz1lKDQzKSxhPXIoYykscz1lKDQ0KSxsPXIocykscD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXsoMCxhW1wiZGVmYXVsdFwiXSkodGhpcyx0KTt2YXIgbj17bG9jYXRpb246XCJhc3NldHMvbGFuZy9cIixsYW5nczpbXCJlbi1VU1wiLFwiZXMtRVNcIl0sbG9jYWxlOlwiZW4tVVNcIixwcmVsb2FkZWQ6e319LGU9dGhpcztlLmluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY29uZmlnPSgwLGZbXCJkZWZhdWx0XCJdKSh7fSxuLHQpLGUubGFuZ3M9KDAsZltcImRlZmF1bHRcIl0pKHt9LGUuY29uZmlnLnByZWxvYWRlZCksZS5sb2NhbGU9ZS5jb25maWcubG9jYWxlfHxlLmNvbmZpZy5sYW5nc1swXSxlLnNldEN1cnJlbnQoZS5sb2NhbGUpfX1yZXR1cm4oMCxsW1wiZGVmYXVsdFwiXSkodCxbe2tleTpcImdldFZhbHVlXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY3VycmVudCYmdGhpcy5jdXJyZW50W3RdfHx0fX0se2tleTpcIm1ha2VTYWZlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49e1wie1wiOlwiXFxcXHtcIixcIn1cIjpcIlxcXFx9XCIsXCJ8XCI6XCJcXFxcfFwifTtyZXR1cm4gdD10LnJlcGxhY2UoL1xce3xcXH18XFx8L2csZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19KSxuZXcgUmVnRXhwKHQsXCJnXCIpfX0se2tleTpcInB1dFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuY3VycmVudFt0XT1ufX0se2tleTpcImdldFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9dGhpcyxyPXRoaXMuZ2V0VmFsdWUodCksbz1yLm1hdGNoKC9cXHtbXlxcfV0rP1xcfS9nKSxpPXZvaWQgMDtpZihuJiZvKWlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIG4/XCJ1bmRlZmluZWRcIjooMCx1W1wiZGVmYXVsdFwiXSkobikpKWZvcih2YXIgZj0wO2Y8by5sZW5ndGg7ZisrKWk9b1tmXS5zdWJzdHJpbmcoMSxvW2ZdLmxlbmd0aC0xKSxyPXIucmVwbGFjZShlLm1ha2VTYWZlKG9bZl0pLG5baV18fFwiXCIpO2Vsc2Ugcj1yLnJlcGxhY2UoL1xce1teXFx9XSs/XFx9L2csbik7cmV0dXJuIHJ9fSx7a2V5OlwiZnJvbUZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIG4sZT10LnNwbGl0KFwiXFxuXCIpLHI9e30sbz0wO288ZS5sZW5ndGg7bysrKW49ZVtvXS5tYXRjaCgvXiguKz8pICo/PSAqPyhbXlxcbl0rKS8pLG4mJihyW25bMV1dPW5bMl0ucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpKTtyZXR1cm4gcn19LHtrZXk6XCJwcm9jZXNzRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsZT10LnJlcGxhY2UoL1xcblxcbi9nLFwiXFxuXCIpO3JldHVybiBuLmxhbmdzW24ubG9jYWxlXT1uLmZyb21GaWxlKGUpfX0se2tleTpcImxvYWRMYW5nXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49dGhpcztyZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKGZ1bmN0aW9uKGUscil7bi5sYW5nc1tuLmxvY2FsZV0/ZShuLmxhbmdzW24ubG9jYWxlXSk6IWZ1bmN0aW9uKCl7dmFyIG89bmV3IFhNTEh0dHBSZXF1ZXN0O28ub3BlbihcIkdFVFwiLG4uY29uZmlnLmxvY2F0aW9uK3QrXCIubGFuZ1wiLCEwKSxvLm9ubG9hZD1mdW5jdGlvbigpe3RoaXMuc3RhdHVzPD0zMDQ/KG4ucHJvY2Vzc0ZpbGUoby5yZXNwb25zZVRleHQpLGUoby5yZXNwb25zZSkpOnIoe3N0YXR1czp0aGlzLnN0YXR1cyxzdGF0dXNUZXh0Om8uc3RhdHVzVGV4dH0pfSxvLm9uZXJyb3I9ZnVuY3Rpb24oKXtyKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5zZW5kKCl9KCl9KX19LHtrZXk6XCJzZXRDdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJlbi1VU1wiLG49dGhpcy5sb2FkTGFuZyh0KTtyZXR1cm4gdGhpcy5sb2NhbGU9dCx0aGlzLmN1cnJlbnQ9dGhpcy5sYW5nc1t0XSx3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLHQpLG59fSx7a2V5OlwiZ2V0TGFuZ3NcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb25maWcubGFuZ3N9fV0pLHR9KCk7bltcImRlZmF1bHRcIl09bmV3IHB9LGZ1bmN0aW9uKHQsbil7dmFyIGU9dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9ZSl9LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9IWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbil7dmFyIGU9e30uaGFzT3duUHJvcGVydHk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTEpLG89ZSgzMSksdT1lKDI2KSxpPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTtuLmY9ZSgyKT9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24odCxuLGUpe2lmKHIodCksbj11KG4sITApLHIoZSksbyl0cnl7cmV0dXJuIGkodCxuLGUpfWNhdGNoKGYpe31pZihcImdldFwiaW4gZXx8XCJzZXRcImluIGUpdGhyb3cgVHlwZUVycm9yKFwiQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhXCIpO3JldHVyblwidmFsdWVcImluIGUmJih0W25dPWUudmFsdWUpLHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgzMiksbz1lKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIobyh0KSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0KSxvPWUoMTUpO3QuZXhwb3J0cz1lKDIpP2Z1bmN0aW9uKHQsbixlKXtyZXR1cm4gci5mKHQsbixvKDEsZSkpfTpmdW5jdGlvbih0LG4sZSl7cmV0dXJuIHRbbl09ZSx0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjQpKFwid2tzXCIpLG89ZSgxNiksdT1lKDEpLlN5bWJvbCxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHUsZj10LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPWkmJnVbdF18fChpP3U6bykoXCJTeW1ib2wuXCIrdCkpfTtmLnN0b3JlPXJ9LGZ1bmN0aW9uKHQsbil7dmFyIGU9dC5leHBvcnRzPXt2ZXJzaW9uOlwiMi40LjBcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1lKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKG4pe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDM2KSxvPWUoMTgpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoIXIodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKSxvPWUoOCksdT1lKDUzKSxpPWUoNiksZj1cInByb3RvdHlwZVwiLGM9ZnVuY3Rpb24odCxuLGUpe3ZhciBhLHMsbCxwPXQmYy5GLHY9dCZjLkcseT10JmMuUyxkPXQmYy5QLGg9dCZjLkIsZz10JmMuVyxiPXY/bzpvW25dfHwob1tuXT17fSksbT1iW2ZdLHg9dj9yOnk/cltuXToocltuXXx8e30pW2ZdO3YmJihlPW4pO2ZvcihhIGluIGUpcz0hcCYmeCYmdm9pZCAwIT09eFthXSxzJiZhIGluIGJ8fChsPXM/eFthXTplW2FdLGJbYV09diYmXCJmdW5jdGlvblwiIT10eXBlb2YgeFthXT9lW2FdOmgmJnM/dShsLHIpOmcmJnhbYV09PWw/ZnVuY3Rpb24odCl7dmFyIG49ZnVuY3Rpb24obixlLHIpe2lmKHRoaXMgaW5zdGFuY2VvZiB0KXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgdDtjYXNlIDE6cmV0dXJuIG5ldyB0KG4pO2Nhc2UgMjpyZXR1cm4gbmV3IHQobixlKX1yZXR1cm4gbmV3IHQobixlLHIpfXJldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cmV0dXJuIG5bZl09dFtmXSxufShsKTpkJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP3UoRnVuY3Rpb24uY2FsbCxsKTpsLGQmJigoYi52aXJ0dWFsfHwoYi52aXJ0dWFsPXt9KSlbYV09bCx0JmMuUiYmbSYmIW1bYV0mJmkobSxhLGwpKSl9O2MuRj0xLGMuRz0yLGMuUz00LGMuUD04LGMuQj0xNixjLlc9MzIsYy5VPTY0LGMuUj0xMjgsdC5leHBvcnRzPWN9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LG4pe24uZj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6bn19fSxmdW5jdGlvbih0LG4pe3ZhciBlPTAscj1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK2UrcikudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrdCk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1cImNvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZlwiLnNwbGl0KFwiLFwiKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9e319LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPSEwfSxmdW5jdGlvbih0LG4pe24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0KS5mLG89ZSgzKSx1PWUoNykoXCJ0b1N0cmluZ1RhZ1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3QmJiFvKHQ9ZT90OnQucHJvdG90eXBlLHUpJiZyKHQsdSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOm59KX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI0KShcImtleXNcIiksbz1lKDE2KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPW8odCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1cIl9fY29yZS1qc19zaGFyZWRfX1wiLHU9cltvXXx8KHJbb109e30pO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdVt0XXx8KHVbdF09e30pfX0sZnVuY3Rpb24odCxuKXt2YXIgZT1NYXRoLmNlaWwscj1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP3I6ZSkodCl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIGUsbztpZihuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnZhbHVlT2YpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoIW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC50b1N0cmluZykmJiFyKG89ZS5jYWxsKHQpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKSxvPWUoOCksdT1lKDIwKSxpPWUoMjgpLGY9ZSg0KS5mO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1vLlN5bWJvbHx8KG8uU3ltYm9sPXU/e306ci5TeW1ib2x8fHt9KTtcIl9cIj09dC5jaGFyQXQoMCl8fHQgaW4gbnx8ZihuLHQse3ZhbHVlOmkuZih0KX0pfX0sZnVuY3Rpb24odCxuLGUpe24uZj1lKDcpfSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZS5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpLG89ZSgxKS5kb2N1bWVudCx1PXIobykmJnIoby5jcmVhdGVFbGVtZW50KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHU/by5jcmVhdGVFbGVtZW50KHQpOnt9fX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz0hZSgyKSYmIWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUoMzApKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09cih0KT90LnNwbGl0KFwiXCIpOk9iamVjdCh0KX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDIwKSxvPWUoMTIpLHU9ZSgzNyksaT1lKDYpLGY9ZSgzKSxjPWUoMTkpLGE9ZSg1Nykscz1lKDIyKSxsPWUoNjUpLHA9ZSg3KShcIml0ZXJhdG9yXCIpLHY9IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSx5PVwiQEBpdGVyYXRvclwiLGQ9XCJrZXlzXCIsaD1cInZhbHVlc1wiLGc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlLGIsbSx4LE8pe2EoZSxuLGIpO3ZhciB3LFMsXyxqPWZ1bmN0aW9uKHQpe2lmKCF2JiZ0IGluIE0pcmV0dXJuIE1bdF07c3dpdGNoKHQpe2Nhc2UgZDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX07Y2FzZSBoOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgZSh0aGlzLHQpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19LEU9bitcIiBJdGVyYXRvclwiLFA9bT09aCxrPSExLE09dC5wcm90b3R5cGUsVD1NW3BdfHxNW3ldfHxtJiZNW21dLEY9VHx8aihtKSxBPW0/UD9qKFwiZW50cmllc1wiKTpGOnZvaWQgMCxJPVwiQXJyYXlcIj09bj9NLmVudHJpZXN8fFQ6VDtpZihJJiYoXz1sKEkuY2FsbChuZXcgdCkpLF8hPT1PYmplY3QucHJvdG90eXBlJiYocyhfLEUsITApLHJ8fGYoXyxwKXx8aShfLHAsZykpKSxQJiZUJiZULm5hbWUhPT1oJiYoaz0hMCxGPWZ1bmN0aW9uKCl7cmV0dXJuIFQuY2FsbCh0aGlzKX0pLHImJiFPfHwhdiYmIWsmJk1bcF18fGkoTSxwLEYpLGNbbl09RixjW0VdPWcsbSlpZih3PXt2YWx1ZXM6UD9GOmooaCksa2V5czp4P0Y6aihkKSxlbnRyaWVzOkF9LE8pZm9yKFMgaW4gdylTIGluIE18fHUoTSxTLHdbU10pO2Vsc2UgbyhvLlArby5GKih2fHxrKSxuLHcpO3JldHVybiB3fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTEpLG89ZSg2MiksdT1lKDE4KSxpPWUoMjMpKFwiSUVfUFJPVE9cIiksZj1mdW5jdGlvbigpe30sYz1cInByb3RvdHlwZVwiLGE9ZnVuY3Rpb24oKXt2YXIgdCxuPWUoMzApKFwiaWZyYW1lXCIpLHI9dS5sZW5ndGgsbz1cIjxcIixpPVwiPlwiO2ZvcihuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZSg1NSkuYXBwZW5kQ2hpbGQobiksbi5zcmM9XCJqYXZhc2NyaXB0OlwiLHQ9bi5jb250ZW50V2luZG93LmRvY3VtZW50LHQub3BlbigpLHQud3JpdGUobytcInNjcmlwdFwiK2krXCJkb2N1bWVudC5GPU9iamVjdFwiK28rXCIvc2NyaXB0XCIraSksdC5jbG9zZSgpLGE9dC5GO3ItLTspZGVsZXRlIGFbY11bdVtyXV07cmV0dXJuIGEoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsbil7dmFyIGU7cmV0dXJuIG51bGwhPT10PyhmW2NdPXIodCksZT1uZXcgZixmW2NdPW51bGwsZVtpXT10KTplPWEoKSx2b2lkIDA9PT1uP2U6byhlLG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMzYpLG89ZSgxOCkuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIik7bi5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbih0KXtyZXR1cm4gcih0LG8pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMyksbz1lKDUpLHU9ZSg1MikoITEpLGk9ZSgyMykoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXt2YXIgZSxmPW8odCksYz0wLGE9W107Zm9yKGUgaW4gZillIT1pJiZyKGYsZSkmJmEucHVzaChlKTtmb3IoO24ubGVuZ3RoPmM7KXIoZixlPW5bYysrXSkmJih+dShhLGUpfHxhLnB1c2goZSkpO3JldHVybiBhfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDYpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Qocih0KSl9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ2KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0NyksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNDgpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ5KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuKXtcInVzZSBzdHJpY3RcIjtuLl9fZXNNb2R1bGU9ITAsbltcImRlZmF1bHRcIl09ZnVuY3Rpb24odCxuKXtpZighKHQgaW5zdGFuY2VvZiBuKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1uLl9fZXNNb2R1bGU9ITA7dmFyIG89ZSg0MCksdT1yKG8pO25bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe2Zvcih2YXIgZT0wO2U8bi5sZW5ndGg7ZSsrKXt2YXIgcj1uW2VdO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSwoMCx1W1wiZGVmYXVsdFwiXSkodCxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKG4sZSxyKXtyZXR1cm4gZSYmdChuLnByb3RvdHlwZSxlKSxyJiZ0KG4sciksbn19KCl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19bi5fX2VzTW9kdWxlPSEwO3ZhciBvPWUoNDIpLHU9cihvKSxpPWUoNDEpLGY9cihpKSxjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZcInN5bWJvbFwiPT10eXBlb2YgdVtcImRlZmF1bHRcIl0/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZltcImRlZmF1bHRcIl0mJnQuY29uc3RydWN0b3I9PT1mW1wiZGVmYXVsdFwiXT9cInN5bWJvbFwiOnR5cGVvZiB0fTtuW1wiZGVmYXVsdFwiXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmXCJzeW1ib2xcIj09PWModVtcImRlZmF1bHRcIl0pP2Z1bmN0aW9uKHQpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Yyh0KX06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZ0LmNvbnN0cnVjdG9yPT09ZltcImRlZmF1bHRcIl0/XCJzeW1ib2xcIjpcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCl9fSxmdW5jdGlvbih0LG4sZSl7ZSg3MCksdC5leHBvcnRzPWUoOCkuT2JqZWN0LmFzc2lnbn0sZnVuY3Rpb24odCxuLGUpe2UoNzEpO3ZhciByPWUoOCkuT2JqZWN0O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHIuZGVmaW5lUHJvcGVydHkodCxuLGUpfX0sZnVuY3Rpb24odCxuLGUpe2UoNzQpLGUoNzIpLGUoNzUpLGUoNzYpLHQuZXhwb3J0cz1lKDgpLlN5bWJvbH0sZnVuY3Rpb24odCxuLGUpe2UoNzMpLGUoNzcpLHQuZXhwb3J0cz1lKDI4KS5mKFwiaXRlcmF0b3JcIil9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1KSxvPWUoNjgpLHU9ZSg2Nyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihuLGUsaSl7dmFyIGYsYz1yKG4pLGE9byhjLmxlbmd0aCkscz11KGksYSk7aWYodCYmZSE9ZSl7Zm9yKDthPnM7KWlmKGY9Y1tzKytdLGYhPWYpcmV0dXJuITB9ZWxzZSBmb3IoO2E+cztzKyspaWYoKHR8fHMgaW4gYykmJmNbc109PT1lKXJldHVybiB0fHxzfHwwO3JldHVybiF0JiYtMX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1MCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLHZvaWQgMD09PW4pcmV0dXJuIHQ7c3dpdGNoKGUpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2FsbChuLGUpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQuY2FsbChuLGUscil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24oZSxyLG8pe3JldHVybiB0LmNhbGwobixlLHIsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCksbz1lKDIxKSx1PWUoMTQpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1yKHQpLGU9by5mO2lmKGUpZm9yKHZhciBpLGY9ZSh0KSxjPXUuZixhPTA7Zi5sZW5ndGg+YTspYy5jYWxsKHQsaT1mW2ErK10pJiZuLnB1c2goaSk7cmV0dXJuIG59fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPWUoMSkuZG9jdW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudH0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjkpO3QuZXhwb3J0cz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbih0KXtyZXR1cm5cIkFycmF5XCI9PXIodCl9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgzNCksbz1lKDE1KSx1PWUoMjIpLGk9e307ZSg2KShpLGUoNykoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0LnByb3RvdHlwZT1yKGkse25leHQ6bygxLGUpfSksdSh0LG4rXCIgSXRlcmF0b3JcIil9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybnt2YWx1ZTpuLGRvbmU6ISF0fX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEwKSxvPWUoNSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7Zm9yKHZhciBlLHU9byh0KSxpPXIodSksZj1pLmxlbmd0aCxjPTA7Zj5jOylpZih1W2U9aVtjKytdXT09PW4pcmV0dXJuIGV9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNikoXCJtZXRhXCIpLG89ZSgxMyksdT1lKDMpLGk9ZSg0KS5mLGY9MCxjPU9iamVjdC5pc0V4dGVuc2libGV8fGZ1bmN0aW9uKCl7cmV0dXJuITB9LGE9IWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gYyhPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKX0pLHM9ZnVuY3Rpb24odCl7aSh0LHIse3ZhbHVlOntpOlwiT1wiKyArK2Ysdzp7fX19KX0sbD1mdW5jdGlvbih0LG4pe2lmKCFvKHQpKXJldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6KFwic3RyaW5nXCI9PXR5cGVvZiB0P1wiU1wiOlwiUFwiKSt0O2lmKCF1KHQscikpe2lmKCFjKHQpKXJldHVyblwiRlwiO2lmKCFuKXJldHVyblwiRVwiO3ModCl9cmV0dXJuIHRbcl0uaX0scD1mdW5jdGlvbih0LG4pe2lmKCF1KHQscikpe2lmKCFjKHQpKXJldHVybiEwO2lmKCFuKXJldHVybiExO3ModCl9cmV0dXJuIHRbcl0ud30sdj1mdW5jdGlvbih0KXtyZXR1cm4gYSYmeS5ORUVEJiZjKHQpJiYhdSh0LHIpJiZzKHQpLHR9LHk9dC5leHBvcnRzPXtLRVk6cixORUVEOiExLGZhc3RLZXk6bCxnZXRXZWFrOnAsb25GcmVlemU6dn19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDEwKSxvPWUoMjEpLHU9ZSgxNCksaT1lKDM4KSxmPWUoMzIpLGM9T2JqZWN0LmFzc2lnbjt0LmV4cG9ydHM9IWN8fGUoOSkoZnVuY3Rpb24oKXt2YXIgdD17fSxuPXt9LGU9U3ltYm9sKCkscj1cImFiY2RlZmdoaWprbG1ub3BxcnN0XCI7cmV0dXJuIHRbZV09NyxyLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24odCl7blt0XT10fSksNyE9Yyh7fSx0KVtlXXx8T2JqZWN0LmtleXMoYyh7fSxuKSkuam9pbihcIlwiKSE9cn0pP2Z1bmN0aW9uKHQsbil7Zm9yKHZhciBlPWkodCksYz1hcmd1bWVudHMubGVuZ3RoLGE9MSxzPW8uZixsPXUuZjtjPmE7KWZvcih2YXIgcCx2PWYoYXJndW1lbnRzW2ErK10pLHk9cz9yKHYpLmNvbmNhdChzKHYpKTpyKHYpLGQ9eS5sZW5ndGgsaD0wO2Q+aDspbC5jYWxsKHYscD15W2grK10pJiYoZVtwXT12W3BdKTtyZXR1cm4gZX06Y30sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCksbz1lKDExKSx1PWUoMTApO3QuZXhwb3J0cz1lKDIpP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKHQsbil7byh0KTtmb3IodmFyIGUsaT11KG4pLGY9aS5sZW5ndGgsYz0wO2Y+Yzspci5mKHQsZT1pW2MrK10sbltlXSk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNCksbz1lKDE1KSx1PWUoNSksaT1lKDI2KSxmPWUoMyksYz1lKDMxKSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7bi5mPWUoMik/YTpmdW5jdGlvbih0LG4pe2lmKHQ9dSh0KSxuPWkobiwhMCksYyl0cnl7cmV0dXJuIGEodCxuKX1jYXRjaChlKXt9aWYoZih0LG4pKXJldHVybiBvKCFyLmYuY2FsbCh0LG4pLHRbbl0pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSksbz1lKDM1KS5mLHU9e30udG9TdHJpbmcsaT1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W10sZj1mdW5jdGlvbih0KXt0cnl7cmV0dXJuIG8odCl9Y2F0Y2gobil7cmV0dXJuIGkuc2xpY2UoKX19O3QuZXhwb3J0cy5mPWZ1bmN0aW9uKHQpe3JldHVybiBpJiZcIltvYmplY3QgV2luZG93XVwiPT11LmNhbGwodCk/Zih0KTpvKHIodCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMyksbz1lKDM4KSx1PWUoMjMpKFwiSUVfUFJPVE9cIiksaT1PYmplY3QucHJvdG90eXBlO3QuZXhwb3J0cz1PYmplY3QuZ2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQpe3JldHVybiB0PW8odCkscih0LHUpP3RbdV06XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb25zdHJ1Y3RvciYmdCBpbnN0YW5jZW9mIHQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU6dCBpbnN0YW5jZW9mIE9iamVjdD9pOm51bGx9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNSksbz1lKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKG4sZSl7dmFyIHUsaSxmPVN0cmluZyhvKG4pKSxjPXIoZSksYT1mLmxlbmd0aDtyZXR1cm4gYzwwfHxjPj1hP3Q/XCJcIjp2b2lkIDA6KHU9Zi5jaGFyQ29kZUF0KGMpLHU8NTUyOTZ8fHU+NTYzMTl8fGMrMT09PWF8fChpPWYuY2hhckNvZGVBdChjKzEpKTw1NjMyMHx8aT41NzM0Mz90P2YuY2hhckF0KGMpOnU6dD9mLnNsaWNlKGMsYysyKToodS01NTI5Njw8MTApKyhpLTU2MzIwKSs2NTUzNil9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89TWF0aC5tYXgsdT1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD1yKHQpLHQ8MD9vKHQrbiwwKTp1KHQsbil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNSksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKHIodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDUxKSxvPWUoNTgpLHU9ZSgxOSksaT1lKDUpO3QuZXhwb3J0cz1lKDMzKShBcnJheSxcIkFycmF5XCIsZnVuY3Rpb24odCxuKXt0aGlzLl90PWkodCksdGhpcy5faT0wLHRoaXMuX2s9bn0sZnVuY3Rpb24oKXt2YXIgdD10aGlzLl90LG49dGhpcy5fayxlPXRoaXMuX2krKztyZXR1cm4hdHx8ZT49dC5sZW5ndGg/KHRoaXMuX3Q9dm9pZCAwLG8oMSkpOlwia2V5c1wiPT1uP28oMCxlKTpcInZhbHVlc1wiPT1uP28oMCx0W2VdKTpvKDAsW2UsdFtlXV0pfSxcInZhbHVlc1wiKSx1LkFyZ3VtZW50cz11LkFycmF5LHIoXCJrZXlzXCIpLHIoXCJ2YWx1ZXNcIikscihcImVudHJpZXNcIil9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEyKTtyKHIuUytyLkYsXCJPYmplY3RcIix7YXNzaWduOmUoNjEpfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEyKTtyKHIuUytyLkYqIWUoMiksXCJPYmplY3RcIix7ZGVmaW5lUHJvcGVydHk6ZSg0KS5mfSl9LGZ1bmN0aW9uKHQsbil7fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg2NikoITApO2UoMzMpKFN0cmluZyxcIlN0cmluZ1wiLGZ1bmN0aW9uKHQpe3RoaXMuX3Q9U3RyaW5nKHQpLHRoaXMuX2k9MH0sZnVuY3Rpb24oKXt2YXIgdCxuPXRoaXMuX3QsZT10aGlzLl9pO3JldHVybiBlPj1uLmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9Oih0PXIobixlKSx0aGlzLl9pKz10Lmxlbmd0aCx7dmFsdWU6dCxkb25lOiExfSl9KX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoMSksbz1lKDMpLHU9ZSgyKSxpPWUoMTIpLGY9ZSgzNyksYz1lKDYwKS5LRVksYT1lKDkpLHM9ZSgyNCksbD1lKDIyKSxwPWUoMTYpLHY9ZSg3KSx5PWUoMjgpLGQ9ZSgyNyksaD1lKDU5KSxnPWUoNTQpLGI9ZSg1NiksbT1lKDExKSx4PWUoNSksTz1lKDI2KSx3PWUoMTUpLFM9ZSgzNCksXz1lKDY0KSxqPWUoNjMpLEU9ZSg0KSxQPWUoMTApLGs9ai5mLE09RS5mLFQ9Xy5mLEY9ci5TeW1ib2wsQT1yLkpTT04sST1BJiZBLnN0cmluZ2lmeSxOPVwicHJvdG90eXBlXCIsQz12KFwiX2hpZGRlblwiKSxMPXYoXCJ0b1ByaW1pdGl2ZVwiKSxSPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFc9cyhcInN5bWJvbC1yZWdpc3RyeVwiKSxEPXMoXCJzeW1ib2xzXCIpLEc9cyhcIm9wLXN5bWJvbHNcIiksSj1PYmplY3RbTl0sVT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBGLEs9ci5RT2JqZWN0LHE9IUt8fCFLW05dfHwhS1tOXS5maW5kQ2hpbGQsej11JiZhKGZ1bmN0aW9uKCl7cmV0dXJuIDchPVMoTSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE0odGhpcyxcImFcIix7dmFsdWU6N30pLmF9fSkpLmF9KT9mdW5jdGlvbih0LG4sZSl7dmFyIHI9ayhKLG4pO3ImJmRlbGV0ZSBKW25dLE0odCxuLGUpLHImJnQhPT1KJiZNKEosbixyKX06TSxCPWZ1bmN0aW9uKHQpe3ZhciBuPURbdF09UyhGW05dKTtyZXR1cm4gbi5faz10LG59LFY9VSYmXCJzeW1ib2xcIj09dHlwZW9mIEYuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgRn0sWT1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHQ9PT1KJiZZKEcsbixlKSxtKHQpLG49TyhuLCEwKSxtKGUpLG8oRCxuKT8oZS5lbnVtZXJhYmxlPyhvKHQsQykmJnRbQ11bbl0mJih0W0NdW25dPSExKSxlPVMoZSx7ZW51bWVyYWJsZTp3KDAsITEpfSkpOihvKHQsQyl8fE0odCxDLHcoMSx7fSkpLHRbQ11bbl09ITApLHoodCxuLGUpKTpNKHQsbixlKX0sSD1mdW5jdGlvbih0LG4pe20odCk7Zm9yKHZhciBlLHI9ZyhuPXgobikpLG89MCx1PXIubGVuZ3RoO3U+bzspWSh0LGU9cltvKytdLG5bZV0pO3JldHVybiB0fSxRPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHZvaWQgMD09PW4/Uyh0KTpIKFModCksbil9LFg9ZnVuY3Rpb24odCl7dmFyIG49Ui5jYWxsKHRoaXMsdD1PKHQsITApKTtyZXR1cm4hKHRoaXM9PT1KJiZvKEQsdCkmJiFvKEcsdCkpJiYoIShufHwhbyh0aGlzLHQpfHwhbyhELHQpfHxvKHRoaXMsQykmJnRoaXNbQ11bdF0pfHxuKX0sJD1mdW5jdGlvbih0LG4pe2lmKHQ9eCh0KSxuPU8obiwhMCksdCE9PUp8fCFvKEQsbil8fG8oRyxuKSl7dmFyIGU9ayh0LG4pO3JldHVybiFlfHwhbyhELG4pfHxvKHQsQykmJnRbQ11bbl18fChlLmVudW1lcmFibGU9ITApLGV9fSxaPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbixlPVQoeCh0KSkscj1bXSx1PTA7ZS5sZW5ndGg+dTspbyhELG49ZVt1KytdKXx8bj09Q3x8bj09Y3x8ci5wdXNoKG4pO3JldHVybiByfSx0dD1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT10PT09SixyPVQoZT9HOngodCkpLHU9W10saT0wO3IubGVuZ3RoPmk7KSFvKEQsbj1yW2krK10pfHxlJiYhbyhKLG4pfHx1LnB1c2goRFtuXSk7cmV0dXJuIHV9O1V8fChGPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIEYpdGhyb3cgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIVwiKTt2YXIgdD1wKGFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwKSxuPWZ1bmN0aW9uKGUpe3RoaXM9PT1KJiZuLmNhbGwoRyxlKSxvKHRoaXMsQykmJm8odGhpc1tDXSx0KSYmKHRoaXNbQ11bdF09ITEpLHoodGhpcyx0LHcoMSxlKSl9O3JldHVybiB1JiZxJiZ6KEosdCx7Y29uZmlndXJhYmxlOiEwLHNldDpufSksQih0KX0sZihGW05dLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rfSksai5mPSQsRS5mPVksZSgzNSkuZj1fLmY9WixlKDE0KS5mPVgsZSgyMSkuZj10dCx1JiYhZSgyMCkmJmYoSixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsWCwhMCkseS5mPWZ1bmN0aW9uKHQpe3JldHVybiBCKHYodCkpfSksaShpLkcraS5XK2kuRiohVSx7U3ltYm9sOkZ9KTtmb3IodmFyIG50PVwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksZXQ9MDtudC5sZW5ndGg+ZXQ7KXYobnRbZXQrK10pO2Zvcih2YXIgbnQ9UCh2LnN0b3JlKSxldD0wO250Lmxlbmd0aD5ldDspZChudFtldCsrXSk7aShpLlMraS5GKiFVLFwiU3ltYm9sXCIse1wiZm9yXCI6ZnVuY3Rpb24odCl7cmV0dXJuIG8oVyx0Kz1cIlwiKT9XW3RdOldbdF09Rih0KX0sa2V5Rm9yOmZ1bmN0aW9uKHQpe2lmKFYodCkpcmV0dXJuIGgoVyx0KTt0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2whXCIpfSx1c2VTZXR0ZXI6ZnVuY3Rpb24oKXtxPSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXtxPSExfX0pLGkoaS5TK2kuRiohVSxcIk9iamVjdFwiLHtjcmVhdGU6USxkZWZpbmVQcm9wZXJ0eTpZLGRlZmluZVByb3BlcnRpZXM6SCxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6JCxnZXRPd25Qcm9wZXJ0eU5hbWVzOlosZ2V0T3duUHJvcGVydHlTeW1ib2xzOnR0fSksQSYmaShpLlMraS5GKighVXx8YShmdW5jdGlvbigpe3ZhciB0PUYoKTtyZXR1cm5cIltudWxsXVwiIT1JKFt0XSl8fFwie31cIiE9SSh7YTp0fSl8fFwie31cIiE9SShPYmplY3QodCkpfSkpLFwiSlNPTlwiLHtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7aWYodm9pZCAwIT09dCYmIVYodCkpe2Zvcih2YXIgbixlLHI9W3RdLG89MTthcmd1bWVudHMubGVuZ3RoPm87KXIucHVzaChhcmd1bWVudHNbbysrXSk7cmV0dXJuIG49clsxXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYoZT1uKSwhZSYmYihuKXx8KG49ZnVuY3Rpb24odCxuKXtpZihlJiYobj1lLmNhbGwodGhpcyx0LG4pKSwhVihuKSlyZXR1cm4gbn0pLHJbMV09bixJLmFwcGx5KEEscil9fX0pLEZbTl1bTF18fGUoNikoRltOXSxMLEZbTl0udmFsdWVPZiksbChGLFwiU3ltYm9sXCIpLGwoTWF0aCxcIk1hdGhcIiwhMCksbChyLkpTT04sXCJKU09OXCIsITApfSxmdW5jdGlvbih0LG4sZSl7ZSgyNykoXCJhc3luY0l0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LG4sZSl7ZSgyNykoXCJvYnNlcnZhYmxlXCIpfSxmdW5jdGlvbih0LG4sZSl7ZSg2OSk7Zm9yKHZhciByPWUoMSksbz1lKDYpLHU9ZSgxOSksaT1lKDcpKFwidG9TdHJpbmdUYWdcIiksZj1bXCJOb2RlTGlzdFwiLFwiRE9NVG9rZW5MaXN0XCIsXCJNZWRpYUxpc3RcIixcIlN0eWxlU2hlZXRMaXN0XCIsXCJDU1NSdWxlTGlzdFwiXSxjPTA7Yzw1O2MrKyl7dmFyIGE9ZltjXSxzPXJbYV0sbD1zJiZzLnByb3RvdHlwZTtsJiYhbFtpXSYmbyhsLGksYSksdVthXT11LkFycmF5fX1dKTsiLCIvKipcbiAqIEZvcm0gQnVpbGRlciBldmVudHNcbiAqIEByZXR1cm4ge09iamVjdH0gdmFyaW91cyBldmVudHMgdG8gYmUgdHJpZ2dlclxuICovXG4vLyBmdW5jdGlvbiBmYkV2ZW50cygpe1xuICBjb25zdCBldmVudHMgPSB7fTtcblxuICBldmVudHMubG9hZGVkID0gbmV3IEV2ZW50KCdsb2FkZWQnKTtcbiAgZXZlbnRzLnZpZXdEYXRhID0gbmV3IEV2ZW50KCd2aWV3RGF0YScpO1xuICBldmVudHMudXNlckRlY2xpbmVkID0gbmV3IEV2ZW50KCd1c2VyRGVjbGluZWQnKTtcbiAgZXZlbnRzLm1vZGFsQ2xvc2VkID0gbmV3IEV2ZW50KCdtb2RhbENsb3NlZCcpO1xuICBldmVudHMubW9kYWxPcGVuZWQgPSBuZXcgRXZlbnQoJ21vZGFsT3BlbmVkJyk7XG4gIGV2ZW50cy5mb3JtU2F2ZWQgPSBuZXcgRXZlbnQoJ2Zvcm1TYXZlZCcpO1xuICBldmVudHMuZmllbGRBZGRlZCA9IG5ldyBFdmVudCgnZmllbGRBZGRlZCcpO1xuICBldmVudHMuZmllbGRSZW1vdmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbW92ZWQnKTtcblxuLy8gICByZXR1cm4gZXZlbnRzO1xuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50cztcbiIsInJlcXVpcmUoJy4va2MtdG9nZ2xlLmpzJyk7XG5yZXF1aXJlKCcuL3BvbHlmaWxscy5qcycpO1xuXG4oZnVuY3Rpb24oJCkge1xuICBjb25zdCBGb3JtQnVpbGRlciA9IGZ1bmN0aW9uKG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBtaTE4biA9IHJlcXVpcmUoJ21pMThuJyk7XG4gICAgY29uc3QgZm9ybUJ1aWxkZXIgPSB0aGlzO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgY29udHJvbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgY29udHJvbE9yZGVyOiBbXG4gICAgICAgICdhdXRvY29tcGxldGUnLFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnaGlkZGVuJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdudW1iZXInLFxuICAgICAgICAncmFkaW8tZ3JvdXAnLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAndGV4dGFyZWEnXG4gICAgICBdLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIC8vIEFycmF5IG9mIGZpZWxkcyB0byBkaXNhYmxlXG4gICAgICBkaXNhYmxlRmllbGRzOiBbXSxcbiAgICAgIGVkaXRPbkFkZDogZmFsc2UsXG4gICAgICAvLyBVbmVkaXRhYmxlIGZpZWxkcyBvciBvdGhlciBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGFwcGVhclxuICAgICAgLy8gYmVmb3JlIGFuZCBhZnRlciByZWd1bGFyIGZpZWxkczpcbiAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICBwcmVwZW5kOiBmYWxzZSxcbiAgICAgIC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCBmaWVsZHMgdmFsdWVzXG4gICAgICAvLyBleDpcbiAgICAgIC8vIGRlZmF1bHRGaWVsZHM6IFt7XG4gICAgICAvLyAgIGxhYmVsOiAnRmlyc3QgTmFtZScsXG4gICAgICAvLyAgIG5hbWU6ICdmaXJzdC1uYW1lJyxcbiAgICAgIC8vICAgcmVxdWlyZWQ6ICd0cnVlJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdZb3VyIGZpcnN0IG5hbWUnLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH0sIHtcbiAgICAgIC8vICAgbGFiZWw6ICdQaG9uZScsXG4gICAgICAvLyAgIG5hbWU6ICdwaG9uZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnSG93IGNhbiB3ZSByZWFjaCB5b3U/JyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9XSxcbiAgICAgIGRlZmF1bHRGaWVsZHM6IFtdLFxuICAgICAgaW5wdXRTZXRzOiBbXSxcbiAgICAgIGZpZWxkUmVtb3ZlV2FybjogZmFsc2UsXG4gICAgICByb2xlczoge1xuICAgICAgICAxOiAnQWRtaW5pc3RyYXRvcidcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICBhbGxGaWVsZHNSZW1vdmVkOiAnQWxsIGZpZWxkcyB3ZXJlIHJlbW92ZWQuJyxcbiAgICAgICAgYWxsb3dNdWx0aXBsZUZpbGVzOiAnQWxsb3cgdXNlcnMgdG8gdXBsb2FkIG11bHRpcGxlIGZpbGVzJyxcbiAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgYnV0dG9uOiAnQnV0dG9uJyxcbiAgICAgICAgY2Fubm90QmVFbXB0eTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgY2hlY2tib3g6ICdDaGVja2JveCcsXG4gICAgICAgIGNoZWNrYm94ZXM6ICdDaGVja2JveGVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICBjbGVhckFsbE1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xlYXIgYWxsIGZpZWxkcz8nLFxuICAgICAgICBjbGVhckFsbDogJ0NsZWFyJyxcbiAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgIGNvbnRlbnQ6ICdDb250ZW50JyxcbiAgICAgICAgY29weTogJ0NvcHkgVG8gQ2xpcGJvYXJkJyxcbiAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgY29weUJ1dHRvblRvb2x0aXA6ICdDb3B5JyxcbiAgICAgICAgZGF0ZUZpZWxkOiAnRGF0ZSBGaWVsZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgZGVzY3JpcHRpb25GaWVsZDogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgZGV2TW9kZTogJ0RldmVsb3BlciBNb2RlJyxcbiAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgIGVkaXRvclRpdGxlOiAnRm9ybSBFbGVtZW50cycsXG4gICAgICAgIGVkaXRYTUw6ICdFZGl0IFhNTCcsXG4gICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgZW5hYmxlT3RoZXJNc2c6ICdMZXQgdXNlcnMgdG8gZW50ZXIgYW4gdW5saXN0ZWQgb3B0aW9uJyxcbiAgICAgICAgZmllbGREZWxldGVXYXJuaW5nOiBmYWxzZSxcbiAgICAgICAgZmllbGRWYXJzOiAnRmllbGQgVmFyaWFibGVzJyxcbiAgICAgICAgZmllbGROb25FZGl0YWJsZTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVkaXRlZC4nLFxuICAgICAgICBmaWVsZFJlbW92ZVdhcm5pbmc6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgZmllbGQ/JyxcbiAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgZm9ybVVwZGF0ZWQ6ICdGb3JtIFVwZGF0ZWQnLFxuICAgICAgICBnZXRTdGFydGVkOiAnRHJhZyBhIGZpZWxkIGZyb20gdGhlIHJpZ2h0IHRvIHRoaXMgYXJlYScsXG4gICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgIGhpZGU6ICdFZGl0JyxcbiAgICAgICAgaGlkZGVuOiAnSGlkZGVuIElucHV0JyxcbiAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgIGxhYmVsRW1wdHk6ICdGaWVsZCBMYWJlbCBjYW5ub3QgYmUgZW1wdHknLFxuICAgICAgICBsaW1pdFJvbGU6ICdMaW1pdCBhY2Nlc3MgdG8gb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyByb2xlczonLFxuICAgICAgICBtYW5kYXRvcnk6ICdNYW5kYXRvcnknLFxuICAgICAgICBtYXhsZW5ndGg6ICdNYXggTGVuZ3RoJyxcbiAgICAgICAgbWluT3B0aW9uTWVzc2FnZTogJ1RoaXMgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mIDIgb3B0aW9ucycsXG4gICAgICAgIG11bHRpcGxlRmlsZXM6ICdNdWx0aXBsZSBGaWxlcycsXG4gICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgbm86ICdObycsXG4gICAgICAgIG5vRmllbGRzVG9DbGVhcjogJ1RoZXJlIGFyZSBubyBmaWVsZHMgdG8gY2xlYXInLFxuICAgICAgICBudW1iZXI6ICdOdW1iZXInLFxuICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICBvbjogJ09uJyxcbiAgICAgICAgb3B0aW9uOiAnT3B0aW9uJyxcbiAgICAgICAgb3B0aW9uYWw6ICdvcHRpb25hbCcsXG4gICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgIG9wdGlvblZhbHVlUGxhY2Vob2xkZXI6ICdWYWx1ZScsXG4gICAgICAgIG9wdGlvbkVtcHR5OiAnT3B0aW9uIHZhbHVlIHJlcXVpcmVkJyxcbiAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgIHBhcmFncmFwaDogJ1BhcmFncmFwaCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnUGxhY2Vob2xkZXInLFxuICAgICAgICBwbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICB0ZXh0YXJlYTogJycsXG4gICAgICAgICAgZW1haWw6ICdFbnRlciB5b3UgZW1haWwnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdzcGFjZSBzZXBhcmF0ZWQgY2xhc3NlcycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICdFbnRlciB5b3VyIHBhc3N3b3JkJ1xuICAgICAgICB9LFxuICAgICAgICBwcmV2aWV3OiAnUHJldmlldycsXG4gICAgICAgIHJhZGlvR3JvdXA6ICdSYWRpbyBHcm91cCcsXG4gICAgICAgIHJhZGlvOiAnUmFkaW8nLFxuICAgICAgICByZW1vdmVNZXNzYWdlOiAnUmVtb3ZlIEVsZW1lbnQnLFxuICAgICAgICByZW1vdmVPcHRpb246ICdSZW1vdmUgT3B0aW9uJyxcbiAgICAgICAgcmVtb3ZlOiAnJiMyMTU7JyxcbiAgICAgICAgcmVxdWlyZWQ6ICdSZXF1aXJlZCcsXG4gICAgICAgIHJpY2hUZXh0OiAnUmljaCBUZXh0IEVkaXRvcicsXG4gICAgICAgIHJvbGVzOiAnQWNjZXNzJyxcbiAgICAgICAgcm93czogJ1Jvd3MnLFxuICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgIHNlbGVjdE9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgc2VsZWN0OiAnU2VsZWN0JyxcbiAgICAgICAgc2VsZWN0Q29sb3I6ICdTZWxlY3QgQ29sb3InLFxuICAgICAgICBzZWxlY3Rpb25zTWVzc2FnZTogJ0FsbG93IE11bHRpcGxlIFNlbGVjdGlvbnMnLFxuICAgICAgICBzaXplOiAnU2l6ZScsXG4gICAgICAgIHNpemVzOiB7XG4gICAgICAgICAgeHM6ICdFeHRyYSBTbWFsbCcsXG4gICAgICAgICAgc206ICdTbWFsbCcsXG4gICAgICAgICAgbTogJ0RlZmF1bHQnLFxuICAgICAgICAgIGxnOiAnTGFyZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiAnU3R5bGUnLFxuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICBidG46IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogJ0RlZmF1bHQnLFxuICAgICAgICAgICAgZGFuZ2VyOiAnRGFuZ2VyJyxcbiAgICAgICAgICAgIGluZm86ICdJbmZvJyxcbiAgICAgICAgICAgIHByaW1hcnk6ICdQcmltYXJ5JyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VidHlwZTogJ1R5cGUnLFxuICAgICAgICB0ZXh0OiAnVGV4dCBGaWVsZCcsXG4gICAgICAgIHRleHRBcmVhOiAnVGV4dCBBcmVhJyxcbiAgICAgICAgdG9nZ2xlOiAnVG9nZ2xlJyxcbiAgICAgICAgd2FybmluZzogJ1dhcm5pbmchJyxcbiAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgIHZpZXdKU09OOiAneyAgfScsXG4gICAgICAgIHZpZXdYTUw6ICcmbHQ7LyZndDsnLFxuICAgICAgICB5ZXM6ICdZZXMnXG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB7XG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm5pbmc6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25TYXZlOiAoKSA9PiBudWxsLFxuICAgICAgb25DbGVhckFsbDogKCkgPT4gbnVsbCxcbiAgICAgIGFjdGlvbkJ1dHRvbnM6IFt7XG4gICAgICAgIGxhYmVsOiAnQ2xlYXInLFxuICAgICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kYW5nZXInLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgICAgICAgICAgbGV0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgICAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIF9oZWxwZXJzLmNvbmZpcm0ob3B0cy5tZXNzYWdlcy5jbGVhckFsbE1lc3NhZ2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgICAgICAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3Mob3B0cy5tZXNzYWdlcy5hbGxGaWVsZHNSZW1vdmVkKTtcbiAgICAgICAgICAgICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICAgICAgICAgICAgb3B0cy5vbkNsZWFyQWxsKCk7XG4gICAgICAgICAgICAgIH0sIGNvb3Jkcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfaGVscGVycy5kaWFsb2cob3B0cy5tZXNzYWdlcy5ub0ZpZWxkc1RvQ2xlYXIsIGNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnU2F2ZScsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdidG4gYnRuLXByaW1hcnkgc2F2ZS10ZW1wbGF0ZScsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiBvcHRzLm9uU2F2ZShfaGVscGVycy5zYXZlKCkpXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgc29ydGFibGVDb250cm9sczogZmFsc2UsXG4gICAgICBzdGlja3lDb250cm9sczogZmFsc2UsXG4gICAgICBzaG93QWN0aW9uQnV0dG9uczogdHJ1ZSxcbiAgICAgIHR5cGVVc2VyQXR0cnM6IHt9LFxuICAgICAgdHlwZVVzZXJFdmVudHM6IHt9LFxuICAgICAgcHJlZml4OiAnZm9ybS1idWlsZGVyLSdcbiAgICB9O1xuXG4gICAgY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG5cbiAgICBkZWZhdWx0cy5tZXNzYWdlcy5zdWJ0eXBlcyA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBzdWJ0eXBlRGVmYXVsdCA9IChzdWJ0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IHN1YnR5cGUsXG4gICAgICAgICAgdmFsdWU6IHN1YnR5cGVcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGV4dDogWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ2NvbG9yJywgJ3RlbCddXG4gICAgICAgICAgLm1hcChzdWJ0eXBlRGVmYXVsdCksXG4gICAgICAgICAgaGVhZGVyOiBbJ2gxJywgJ2gyJywgJ2gzJ11cbiAgICAgICAgICAubWFwKHN1YnR5cGVEZWZhdWx0KSxcbiAgICAgICAgICBidXR0b246IFsnYnV0dG9uJywgJ3N1Ym1pdCcsICdyZXNldCddXG4gICAgICAgICAgLm1hcChzdWJ0eXBlRGVmYXVsdCksXG4gICAgICAgICAgcGFyYWdyYXBoOiBbJ3AnLCAnYWRkcmVzcycsICdibG9ja3F1b3RlJywgJ2NhbnZhcycsICdvdXRwdXQnXVxuICAgICAgICAgIC5tYXAoc3VidHlwZURlZmF1bHQpXG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGxldCBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGxldCBmcm1iSUQgPSAnZnJtYi0nICsgJCgndWxbaWRePWZybWItXScpLmxlbmd0aCsrO1xuXG4gICAgaWYgKG9wdGlvbnMubWVzc2FnZXMpIHtcbiAgICAgIG9wdHMubWVzc2FnZXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5tZXNzYWdlcywgb3B0aW9ucy5tZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgZm9ybUJ1aWxkZXIuZm9ybUlEID0gZnJtYklEO1xuXG4gICAgbGV0ICRzb3J0YWJsZUZpZWxkcyA9ICQoJzx1bC8+JykuYXR0cignaWQnLCBmcm1iSUQpLmFkZENsYXNzKCdmcm1iJyk7XG4gICAgbGV0IF9oZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzLmpzJykob3B0cywgZm9ybUJ1aWxkZXIpO1xuXG4gICAgZm9ybUJ1aWxkZXIubGF5b3V0ID0gX2hlbHBlcnMuZWRpdG9yTGF5b3V0KG9wdHMuY29udHJvbFBvc2l0aW9uKTtcbiAgICBmb3JtQnVpbGRlci5zdGFnZSA9ICRzb3J0YWJsZUZpZWxkc1swXTtcblxuICAgIGxldCBsYXN0SUQgPSBmcm1iSUQgKyAnLWZsZC0xJztcbiAgICBsZXQgYm94SUQgPSBmcm1iSUQgKyAnLWNvbnRyb2wtYm94JztcblxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiBmaWVsZCBvYmplY3RzIHRvIGN5Y2xlIHRocm91Z2hcbiAgICBsZXQgZnJtYkZpZWxkcyA9IFt7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5hdXRvY29tcGxldGUsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgbmFtZTogJ2F1dG9jb21wbGV0ZSdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5idXR0b24sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uLWlucHV0JyxcbiAgICAgICAgbmFtZTogJ2J1dHRvbidcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5jaGVja2JveCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmNoZWNrYm94R3JvdXAsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICBjbGFzc05hbWU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIG5hbWU6ICdjaGVja2JveC1ncm91cCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5kYXRlRmllbGQsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NhbGVuZGFyJyxcbiAgICAgICAgbmFtZTogJ2RhdGUtaW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuZmlsZVVwbG9hZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnZmlsZS1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICdmaWxlLWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmhlYWRlcixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICBjbGFzc05hbWU6ICdoZWFkZXInXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuaGlkZGVuLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2hpZGRlbi1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICdoaWRkZW4taW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMubnVtYmVyLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIG5hbWU6ICdudW1iZXInXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMucGFyYWdyYXBoLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFncmFwaCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5yYWRpb0dyb3VwLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgY2xhc3NOYW1lOiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICBuYW1lOiAncmFkaW8tZ3JvdXAnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuc2VsZWN0LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdCcsXG4gICAgICAgIG5hbWU6ICdzZWxlY3QnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMudGV4dCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAndGV4dC1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICd0ZXh0LWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLnRleHRBcmVhLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3RleHRhcmVhJyxcbiAgICAgICAgY2xhc3NOYW1lOiAndGV4dC1hcmVhJyxcbiAgICAgICAgbmFtZTogJ3RleHRhcmVhJ1xuICAgICAgfVxuICAgIH1dO1xuXG4gICAgZnJtYkZpZWxkcyA9IF9oZWxwZXJzLm9yZGVyRmllbGRzKGZybWJGaWVsZHMpO1xuXG4gICAgaWYgKG9wdHMuZGlzYWJsZUZpZWxkcykge1xuICAgICAgLy8gcmVtb3ZlIGRpc2FibGVkRmllbGRzXG4gICAgICBmcm1iRmllbGRzID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5pbkFycmF5KGZpZWxkLmF0dHJzLnR5cGUsIG9wdHMuZGlzYWJsZUZpZWxkcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZHJhZ2dhYmxlIGZpZWxkcyBmb3IgZm9ybUJ1aWxkZXJcbiAgICBsZXQgY2JVbCA9IHV0aWxzLm1hcmt1cCgndWwnLCBudWxsLCB7aWQ6IGJveElELCBjbGFzc05hbWU6ICdmcm1iLWNvbnRyb2wnfSk7XG4gICAgZm9ybUJ1aWxkZXIuY29udHJvbHMgPSBjYlVsO1xuXG4gICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgY2JVbC5jbGFzc0xpc3QuYWRkKCdzb3J0LWVuYWJsZWQnKTtcbiAgICB9XG5cbiAgICBsZXQgJGNiVUwgPSAkKGNiVWwpO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoXG4gICAgdXRpbHMuZm9yRWFjaChmcm1iRmllbGRzLCAoaSkgPT4ge1xuICAgICAgbGV0ICRmaWVsZCA9ICQoJzxsaS8+Jywge1xuICAgICAgICAnY2xhc3MnOiAnaWNvbi0nICsgZnJtYkZpZWxkc1tpXS5hdHRycy5jbGFzc05hbWUsXG4gICAgICAgICd0eXBlJzogZnJtYkZpZWxkc1tpXS50eXBlLFxuICAgICAgICAnbmFtZSc6IGZybWJGaWVsZHNbaV0uY2xhc3NOYW1lLFxuICAgICAgICAnbGFiZWwnOiBmcm1iRmllbGRzW2ldLmxhYmVsXG4gICAgICB9KTtcblxuICAgICAgJGZpZWxkLmRhdGEoJ25ld0ZpZWxkRGF0YScsIGZybWJGaWVsZHNbaV0pO1xuXG4gICAgICBsZXQgdHlwZUxhYmVsID0gdXRpbHMubWFya3VwKCdzcGFuJywgZnJtYkZpZWxkc1tpXS5sYWJlbCk7XG4gICAgICAkZmllbGQuaHRtbCh0eXBlTGFiZWwpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICB9KTtcblxuICAgIGlmIChvcHRzLmlucHV0U2V0cy5sZW5ndGgpIHtcbiAgICAgICQoJzxsaS8+JywgeydjbGFzcyc6ICdmYi1zZXBhcmF0b3InfSkuaHRtbCgnPGhyPicpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICAgIG9wdHMuaW5wdXRTZXRzLmZvckVhY2goKHNldCkgPT4ge1xuICAgICAgICBzZXQubmFtZSA9IHNldC5uYW1lIHx8IF9oZWxwZXJzLm1ha2VDbGFzc05hbWUoc2V0LmxhYmVsKTtcbiAgICAgICAgbGV0ICRzZXQgPSAkKCc8bGkvPicsIHsnY2xhc3MnOiAnaW5wdXQtc2V0LWNvbnRyb2wnLCB0eXBlOiBzZXQubmFtZX0pO1xuICAgICAgICAkc2V0Lmh0bWwoc2V0LmxhYmVsKS5hcHBlbmRUbygkY2JVTCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0YWJsZSBmaWVsZHNcbiAgICAkc29ydGFibGVGaWVsZHMuc29ydGFibGUoe1xuICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICBvcGFjaXR5OiAwLjksXG4gICAgICByZXZlcnQ6IDE1MCxcbiAgICAgIGJlZm9yZVN0b3A6IF9oZWxwZXJzLmJlZm9yZVN0b3AsXG4gICAgICBzdGFydDogX2hlbHBlcnMuc3RhcnRNb3ZpbmcsXG4gICAgICBzdG9wOiBfaGVscGVycy5zdG9wTW92aW5nLFxuICAgICAgY2FuY2VsOiAnaW5wdXQsIHNlbGVjdCwgLmRpc2FibGVkLCAuZm9ybS1ncm91cCwgLmJ0bicsXG4gICAgICBwbGFjZWhvbGRlcjogJ2ZybWItcGxhY2Vob2xkZXInXG4gICAgfSk7XG5cbiAgICAvLyBDb250cm9sQm94IHdpdGggZGlmZmVyZW50IGZpZWxkc1xuICAgICRjYlVMLnNvcnRhYmxlKHtcbiAgICAgIGhlbHBlcjogJ2Nsb25lJyxcbiAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgIGNvbm5lY3RXaXRoOiAkc29ydGFibGVGaWVsZHMsXG4gICAgICBjYW5jZWw6ICcuZmItc2VwYXJhdG9yJyxcbiAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIHBsYWNlaG9sZGVyOiAndWktc3RhdGUtaGlnaGxpZ2h0JyxcbiAgICAgIHN0YXJ0OiBfaGVscGVycy5zdGFydE1vdmluZyxcbiAgICAgIHN0b3A6IF9oZWxwZXJzLnN0b3BNb3ZpbmcsXG4gICAgICByZXZlcnQ6IDE1MCxcbiAgICAgIGJlZm9yZVN0b3A6IF9oZWxwZXJzLmJlZm9yZVN0b3AsXG4gICAgICBkaXN0YW5jZTogMyxcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgIGlmIChfaGVscGVycy5kb0NhbmNlbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkuaXRlbS5wYXJlbnQoKVswXSA9PT0gJHNvcnRhYmxlRmllbGRzWzBdKSB7XG4gICAgICAgICAgcHJvY2Vzc0NvbnRyb2wodWkuaXRlbSk7XG4gICAgICAgICAgX2hlbHBlcnMuZG9DYW5jZWwgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9oZWxwZXJzLnNldEZpZWxkT3JkZXIoJGNiVUwpO1xuICAgICAgICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gIW9wdHMuc29ydGFibGVDb250cm9scztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHByb2Nlc3NDb250cm9sID0gKGNvbnRyb2wpID0+IHtcbiAgICAgIGlmIChjb250cm9sWzBdLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQtc2V0LWNvbnRyb2wnKSkge1xuICAgICAgICBsZXQgaW5wdXRTZXQgPSBvcHRzLmlucHV0U2V0cy5maWx0ZXIoKHNldCkgPT4ge1xuICAgICAgICAgIHJldHVybiBzZXQubmFtZSA9PT0gY29udHJvbFswXS50eXBlO1xuICAgICAgICB9KVswXTtcbiAgICAgICAgaWYgKGlucHV0U2V0LnNob3dIZWFkZXIpIHtcbiAgICAgICAgICBsZXQgaGVhZGVyID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnaGVhZGVyJyxcbiAgICAgICAgICAgICAgc3VidHlwZTogJ2gyJyxcbiAgICAgICAgICAgICAgaWQ6IGlucHV0U2V0Lm5hbWUsXG4gICAgICAgICAgICAgIGxhYmVsOiBpbnB1dFNldC5sYWJlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICBwcmVwRmllbGRWYXJzKGhlYWRlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRTZXQuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhjb250cm9sLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0ICRmb3JtV3JhcCA9ICQoJzxkaXYvPicsIHtcbiAgICAgIGlkOiBmcm1iSUQgKyAnLWZvcm0td3JhcCcsXG4gICAgICAnY2xhc3MnOiAnZm9ybS13cmFwIGZvcm0tYnVpbGRlcicgKyBfaGVscGVycy5tb2JpbGVDbGFzcygpXG4gICAgfSk7XG5cbiAgICBmb3JtQnVpbGRlci5lZGl0b3IgPSAkZm9ybVdyYXBbMF07XG5cbiAgICBsZXQgJHN0YWdlV3JhcCA9ICQoJzxkaXYvPicsIHtcbiAgICAgIGlkOiBmcm1iSUQgKyAnLXN0YWdlLXdyYXAnLFxuICAgICAgJ2NsYXNzJzogJ3N0YWdlLXdyYXAgJyArIGZvcm1CdWlsZGVyLmxheW91dC5zdGFnZVxuICAgIH0pO1xuXG4gICAgbGV0IGNiV3JhcCA9ICQoJzxkaXYvPicsIHtcbiAgICAgIGlkOiBmcm1iSUQgKyAnLWNiLXdyYXAnLFxuICAgICAgJ2NsYXNzJzogJ2NiLXdyYXAgJyArIGZvcm1CdWlsZGVyLmxheW91dC5jb250cm9sc1xuICAgIH0pLmFwcGVuZCgkY2JVTFswXSk7XG5cbiAgICBpZiAob3B0cy5zaG93QWN0aW9uQnV0dG9ucykge1xuICAgICAgLy8gQnVpbGQgb3VyIGhlYWRlcnMgYW5kIGFjdGlvbiBsaW5rc1xuICAgICAgbGV0IHZpZXdEYXRhVGV4dDtcbiAgICAgIGxldCBtID0gdXRpbHMubWFya3VwO1xuICAgICAgaWYob3B0cy5kYXRhVHlwZSA9PT0gJ3htbCcpIHtcbiAgICAgICAgdmlld0RhdGFUZXh0ID0gb3B0cy5tZXNzYWdlcy52aWV3WE1MO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld0RhdGFUZXh0ID0gb3B0cy5tZXNzYWdlcy52aWV3SlNPTjtcbiAgICAgIH1cblxuICAgICAgbGV0IGJ1dHRvbnMgPSBvcHRzLmFjdGlvbkJ1dHRvbnMubWFwKF9oZWxwZXJzLnByb2Nlc3NBY3Rpb25CdXR0b25zKTtcblxuICAgICAgY29uc29sZS5sb2coYnV0dG9ucyk7XG5cbiAgICAgIC8vIGNvbnN0IHZpZXdEYXRhID0gbSgnYnV0dG9uJywgdmlld0RhdGFUZXh0LCB7XG4gICAgICAvLyAgIGlkOiBmcm1iSUQgKyAnLXZpZXctZGF0YScsXG4gICAgICAvLyAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgLy8gICBjbGFzc05hbWU6ICd2aWV3LWRhdGEgYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgLy8gfSk7XG4gICAgICBjb25zdCBjbGVhckFsbCA9IG0oJ2J1dHRvbicsIG9wdHMubWVzc2FnZXMuY2xlYXJBbGwsIHtcbiAgICAgICAgaWQ6IGZybWJJRCArICctY2xlYXItYWxsJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NsZWFyLWFsbCBidG4gYnRuLWRhbmdlcidcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2F2ZUFsbCA9IG0oJ2J1dHRvbicsIG9wdHMubWVzc2FnZXMuc2F2ZSwge1xuICAgICAgICBjbGFzc05hbWU6IGBidG4gYnRuLXByaW1hcnkgJHtvcHRzLnByZWZpeH1zYXZlYCxcbiAgICAgICAgaWQ6IGZybWJJRCArICctc2F2ZScsXG4gICAgICAgIHR5cGU6ICdidXR0b24nXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGZvcm1BY3Rpb25zID0gbSgnZGl2JywgYnV0dG9ucywge1xuICAgICAgICBjbGFzc05hbWU6ICdmb3JtLWFjdGlvbnMgYnRuLWdyb3VwJ1xuICAgICAgfSk7XG5cbiAgICAgIGNiV3JhcC5hcHBlbmQoZm9ybUFjdGlvbnMpO1xuICAgIH1cblxuICAgICRzdGFnZVdyYXAuYXBwZW5kKCRzb3J0YWJsZUZpZWxkcywgY2JXcmFwKTtcbiAgICAkc3RhZ2VXcmFwLmJlZm9yZSgkZm9ybVdyYXApO1xuICAgICRmb3JtV3JhcC5hcHBlbmQoJHN0YWdlV3JhcCwgY2JXcmFwKTtcblxuICAgIGlmIChlbGVtZW50LnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICQoZWxlbWVudCkuYXBwZW5kKCRmb3JtV3JhcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZWxlbWVudCkucmVwbGFjZVdpdGgoJGZvcm1XcmFwKTtcbiAgICB9XG5cbiAgICBsZXQgc2F2ZUFuZFVwZGF0ZSA9IF9oZWxwZXJzLmRlYm91bmNlKGV2dCA9PiB7XG4gICAgICBpZiAoZXZ0KSB7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldnQudGFyZ2V0Lm5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0ICRmaWVsZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xuICAgICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIGZpZWxkIG9uIGNoYW5nZVxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlIGJsdXIga2V5dXAnLCAnLmZvcm0tZWxlbWVudHMgaW5wdXQsIC5mb3JtLWVsZW1lbnRzIHNlbGVjdCwgLmZvcm0tZWxlbWVudHMgdGV4dGFyZWEnLCBzYXZlQW5kVXBkYXRlKTtcblxuICAgICQoJ2xpJywgJGNiVUwpLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0ICRjb250cm9sID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCcudWktc29ydGFibGUtaGFuZGxlJyk7XG4gICAgICBfaGVscGVycy5zdG9wSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICBwcm9jZXNzQ29udHJvbCgkY29udHJvbCk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYXBwZW5kIGFuZCBwcmVwZW5kIG9wdGlvbnMgaWYgbmVjZXNzYXJ5XG4gICAgbGV0IG5vbkVkaXRhYmxlRmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY2FuY2VsQXJyYXkgPSBbXTtcblxuICAgICAgaWYgKG9wdHMucHJlcGVuZCAmJiAhJCgnLmRpc2FibGVkLnByZXBlbmQnLCAkc29ydGFibGVGaWVsZHMpLmxlbmd0aCkge1xuICAgICAgICBsZXQgcHJlcGVuZGVkRmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0cy5wcmVwZW5kLCB7Y2xhc3NOYW1lOiAnZGlzYWJsZWQgcHJlcGVuZCd9KTtcbiAgICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgJHNvcnRhYmxlRmllbGRzLnByZXBlbmQocHJlcGVuZGVkRmllbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5hcHBlbmQgJiYgISQoJy5kaXNhYmxlZC5hcHBlbmQnLCAkc29ydGFibGVGaWVsZHMpLmxlbmd0aCkge1xuICAgICAgICBsZXQgYXBwZW5kZWRGaWVsZCA9IHV0aWxzLm1hcmt1cCgnbGknLCBvcHRzLmFwcGVuZCwge2NsYXNzTmFtZTogJ2Rpc2FibGVkIGFwcGVuZCd9KTtcbiAgICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgJHNvcnRhYmxlRmllbGRzLmFwcGVuZChhcHBlbmRlZEZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbEFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgcHJlcEZpZWxkVmFycyA9IGZ1bmN0aW9uKCRmaWVsZCwgaXNOZXcgPSBmYWxzZSkge1xuICAgICAgbGV0IGZpZWxkID0ge307XG4gICAgICBpZiAoJGZpZWxkIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAgIGxldCBmaWVsZERhdGEgPSAkZmllbGQuZGF0YSgnbmV3RmllbGREYXRhJyk7XG4gICAgICAgIGlmIChmaWVsZERhdGEpIHtcbiAgICAgICAgICBmaWVsZCA9IGZpZWxkRGF0YS5hdHRycztcbiAgICAgICAgICBmaWVsZC5sYWJlbCA9IGZpZWxkRGF0YS5sYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgYXR0cnMgPSAkZmllbGRbMF0uYXR0cmlidXRlcztcbiAgICAgICAgICBpZiAoIWlzTmV3KSB7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZXMgPSAkZmllbGQuY2hpbGRyZW4oKS5tYXAoKGluZGV4LCBlbGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICQoZWxlbSkudGV4dCgpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAkKGVsZW0pLmF0dHIoJ3ZhbHVlJyksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IEJvb2xlYW4oJChlbGVtKS5hdHRyKCdzZWxlY3RlZCcpKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBmaWVsZFthdHRyc1tpXS5uYW1lXSA9IGF0dHJzW2ldLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQgPSBPYmplY3QuYXNzaWduKHt9LCAkZmllbGQpO1xuICAgICAgfVxuXG4gICAgICBmaWVsZC5uYW1lID0gaXNOZXcgPyBuYW1lQXR0cihmaWVsZCkgOiAoIGZpZWxkLm5hbWUgfHwgbmFtZUF0dHIoZmllbGQpICk7XG5cbiAgICAgIGlmIChpc05ldyAmJiB1dGlscy5pbkFycmF5KGZpZWxkLnR5cGUsIFsndGV4dCcsICdudW1iZXInLCAnZmlsZScsICdzZWxlY3QnLCAndGV4dGFyZWEnXSkpIHtcbiAgICAgICAgZmllbGQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7IC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZC5jbGFzc05hbWUgPSBmaWVsZC5jbGFzcyB8fCBmaWVsZC5jbGFzc05hbWU7IC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICB9XG5cbiAgICAgIGxldCBtYXRjaCA9IC8oPzpefFxccylidG4tKC4qPykoPzpcXHN8JCkvZy5leGVjKGZpZWxkLmNsYXNzTmFtZSk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZmllbGQuc3R5bGUgPSBtYXRjaFsxXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZXNjYXBlQXR0cnMoZmllbGQpO1xuXG4gICAgICBhcHBlbmROZXdGaWVsZChmaWVsZCwgaXNOZXcpO1xuICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkQWRkZWQpO1xuICAgICAgfVxuICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICB9O1xuXG4gICAgLy8gUGFyc2Ugc2F2ZWQgWE1MIHRlbXBsYXRlIGRhdGFcbiAgICBsZXQgbG9hZEZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGZvcm1EYXRhID0gZm9ybUJ1aWxkZXIuZm9ybURhdGE7XG4gICAgICBpZiAoZm9ybURhdGEgJiYgZm9ybURhdGEubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBwcmVwRmllbGRWYXJzKGZvcm1EYXRhW2ldKTtcbiAgICAgICAgfVxuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfSBlbHNlIGlmIChvcHRzLmRlZmF1bHRGaWVsZHMgJiYgb3B0cy5kZWZhdWx0RmllbGRzLmxlbmd0aCkge1xuICAgICAgICAvLyBMb2FkIGRlZmF1bHQgZmllbGRzIGlmIG5vbmUgYXJlIHNldFxuICAgICAgICBvcHRzLmRlZmF1bHRGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBwcmVwRmllbGRWYXJzKGZpZWxkKSk7XG4gICAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgICB9IGVsc2UgaWYgKCFvcHRzLnByZXBlbmQgJiYgIW9wdHMuYXBwZW5kKSB7XG4gICAgICAgICRzdGFnZVdyYXAuYWRkQ2xhc3MoJ2VtcHR5JylcbiAgICAgICAgLmF0dHIoJ2RhdGEtY29udGVudCcsIG9wdHMubWVzc2FnZXMuZ2V0U3RhcnRlZCk7XG4gICAgICB9XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG5cbiAgICAgIGxldCAkZmllbGRzID0gJCgnbGkuZm9ybS1maWVsZDpub3QoLmRpc2FibGVkKScsICRzb3J0YWJsZUZpZWxkcyk7XG5cbiAgICAgICRmaWVsZHMuZWFjaChpID0+IF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJCgkZmllbGRzW2ldKSkpO1xuXG4gICAgICBub25FZGl0YWJsZUZpZWxkcygpO1xuICAgIH07XG5cbiAgICAvLyBjYWxsYmFjayB0byB0cmFjayBkaXNhYmxlZCB0b29sdGlwc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignbW91c2Vtb3ZlJywgJ2xpLmRpc2FibGVkJywgZSA9PiB7XG4gICAgICAkKCcuZnJtYi10dCcsIHRoaXMpLmNzcyh7XG4gICAgICAgIGxlZnQ6IGUub2Zmc2V0WCAtIDE2LFxuICAgICAgICB0b3A6IGUub2Zmc2V0WSAtIDM0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGNhbGxiYWNrIHRvIGNhbGwgZGlzYWJsZWQgdG9vbHRpcHNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlZW50ZXInLCAnbGkuZGlzYWJsZWQnLCBlID0+XG4gICAgICBfaGVscGVycy5kaXNhYmxlZFRULmFkZCgkKHRoaXMpKSk7XG5cbiAgICAvLyBjYWxsYmFjayB0byBjYWxsIGRpc2FibGVkIHRvb2x0aXBzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdtb3VzZWxlYXZlJywgJ2xpLmRpc2FibGVkJywgZSA9PlxuICAgICAgX2hlbHBlcnMuZGlzYWJsZWRUVC5yZW1vdmUoJCh0aGlzKSkpO1xuXG4gICAgbGV0IG5hbWVBdHRyID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIGxldCBlcG9jaCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgcmV0dXJuIGZpZWxkLnR5cGUgKyAnLScgKyBlcG9jaDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGRhdGEgZm9yIGZpZWxkIHdpdGggb3B0aW9ucyBbc2VsZWN0LCBjaGVja2JveC1ncm91cCwgcmFkaW8tZ3JvdXBdXG4gICAgICpcbiAgICAgKiBAdG9kbyAgIHJlZmFjdG9yIHRoaXMgbmFzdHkgfmNyYXB+IGNvZGUsIGl0cyBhY3R1YWxseSBwYWluZnVsIHRvIGxvb2sgYXRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gZmllbGQgb3B0aW9ucyBtYXJrdXBcbiAgICAgKi9cbiAgICBsZXQgZmllbGRPcHRpb25zID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICBsZXQgb3B0aW9uQWN0aW9ucyA9IFtcbiAgICAgICAgICB1dGlscy5tYXJrdXAoJ2EnLCBvcHRzLm1lc3NhZ2VzLmFkZE9wdGlvbiwge2NsYXNzTmFtZTogJ2FkZCBhZGQtb3B0J30pXG4gICAgICAgIF07XG4gICAgICBsZXQgZmllbGRPcHRpb25zID0gW1xuICAgICAgICBgPGxhYmVsIGNsYXNzPVwiZmFsc2UtbGFiZWxcIj4ke29wdHMubWVzc2FnZXMuc2VsZWN0T3B0aW9uc308L2xhYmVsPmBcbiAgICAgIF07XG4gICAgICBjb25zdCBpc011bHRpcGxlID0gdmFsdWVzLm11bHRpcGxlIHx8ICh2YWx1ZXMudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJyk7XG5cbiAgICAgIGlmICghdmFsdWVzLnZhbHVlcyB8fCAhdmFsdWVzLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWVzLnZhbHVlcyA9IFsxLCAyLCAzXS5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgbGFiZWwgPSBgJHtvcHRzLm1lc3NhZ2VzLm9wdGlvbn0gJHtpbmRleH1gO1xuICAgICAgICAgIGxldCBvcHRpb24gPSB7XG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICB2YWx1ZTogdXRpbHMuaHlwaGVuQ2FzZShsYWJlbClcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH0pO1xuICAgICAgICB2YWx1ZXMudmFsdWVzWzBdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVuc3VyZSBvcHRpb24gZGF0YSBpcyBoYXMgYWxsIHJlcXVpcmVkIGtleXNcbiAgICAgICAgdmFsdWVzLnZhbHVlcy5mb3JFYWNoKG9wdGlvbiA9PiBPYmplY3QuYXNzaWduKHt9LCB7c2VsZWN0ZWQ6IGZhbHNlfSwgb3B0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8ZGl2IGNsYXNzPVwic29ydGFibGUtb3B0aW9ucy13cmFwXCI+Jyk7XG5cbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8b2wgY2xhc3M9XCJzb3J0YWJsZS1vcHRpb25zXCI+Jyk7XG4gICAgICB1dGlscy5mb3JFYWNoKHZhbHVlcy52YWx1ZXMsIChpKSA9PiB7XG4gICAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKHNlbGVjdEZpZWxkT3B0aW9ucyh2YWx1ZXMubmFtZSwgdmFsdWVzLnZhbHVlc1tpXSwgaXNNdWx0aXBsZSkpO1xuICAgICAgfSk7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9vbD4nKTtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKHV0aWxzLm1hcmt1cCgnZGl2Jywgb3B0aW9uQWN0aW9ucywge2NsYXNzTmFtZTogJ29wdGlvbi1hY3Rpb25zJ30pLm91dGVySFRNTCk7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICAgIHJldHVybiB1dGlscy5tYXJrdXAoJ2RpdicsIGZpZWxkT3B0aW9ucy5qb2luKCcnKSwge2NsYXNzTmFtZTogJ2Zvcm0tZ3JvdXAgZmllbGQtb3B0aW9ucyd9KS5vdXRlckhUTUw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBlZGl0YWJsZSBwcm9wZXJ0aWVzIGZvciB0aGUgZmllbGRcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHZhbHVlcyBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgYWR2YW5jZWQgZmllbGRzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgbWFya3VwIGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICAgKi9cbiAgICBsZXQgYWR2RmllbGRzID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICBsZXQgYWR2RmllbGRzID0gW107XG4gICAgICBsZXQga2V5O1xuICAgICAgbGV0IG9wdGlvbkZpZWxkcyA9IFtcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgICdyYWRpby1ncm91cCdcbiAgICAgIF07XG4gICAgICBsZXQgaXNPcHRpb25GaWVsZCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChvcHRpb25GaWVsZHMuaW5kZXhPZih2YWx1ZXMudHlwZSkgIT09IC0xKTtcbiAgICAgIH0pKCk7XG4gICAgICBsZXQgdmFsdWVGaWVsZCA9ICF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnZmlsZSddLmNvbmNhdChvcHRpb25GaWVsZHMpKTtcbiAgICAgIGxldCByb2xlcyA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyB2YWx1ZXMucm9sZS5zcGxpdCgnLCcpIDogW107XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKHJlcXVpcmVkRmllbGQodmFsdWVzKSk7XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCd0b2dnbGUnLCB2YWx1ZXMsIHtmaXJzdDogb3B0cy5tZXNzYWdlcy50b2dnbGV9KSk7XG4gICAgICB9XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2xhYmVsJywgdmFsdWVzKSk7XG5cbiAgICAgIHZhbHVlcy5zaXplID0gdmFsdWVzLnNpemUgfHwgJ20nO1xuICAgICAgdmFsdWVzLnN0eWxlID0gdmFsdWVzLnN0eWxlIHx8ICdkZWZhdWx0JztcblxuICAgICAgLy8gSGVscCBUZXh0IC8gRGVzY3JpcHRpb24gRmllbGRcbiAgICAgIGlmICghdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgWydoZWFkZXInLCAncGFyYWdyYXBoJywgJ2J1dHRvbiddKSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdkZXNjcmlwdGlvbicsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5tZXNzYWdlcy5zdWJ0eXBlc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBvcHRzLm1lc3NhZ2VzLnN1YnR5cGVzW3ZhbHVlcy50eXBlXTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goc2VsZWN0QXR0cmlidXRlKCdzdWJ0eXBlJywgdmFsdWVzLCBvcHRpb25EYXRhKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYnRuU3R5bGVzKHZhbHVlcy5zdHlsZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWluJywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWF4JywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnc3RlcCcsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBQbGFjZWhvbGRlclxuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB2YWx1ZXMpKTtcblxuICAgICAgLy8gVGV4dEFyZWEgUm93cyBBdHRyaWJ1dGVcbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ3Jvd3MnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xhc3NcbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2NsYXNzTmFtZScsIHZhbHVlcykpO1xuXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCduYW1lJywgdmFsdWVzKSk7XG5cbiAgICAgIGlmICh2YWx1ZUZpZWxkKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGxldCBsYWJlbHMgPSB7XG4gICAgICAgICAgZmlyc3Q6IG9wdHMubWVzc2FnZXMubXVsdGlwbGVGaWxlcyxcbiAgICAgICAgICBzZWNvbmQ6IG9wdHMubWVzc2FnZXMuYWxsb3dNdWx0aXBsZUZpbGVzXG4gICAgICAgIH07XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCBsYWJlbHMpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJvbGVzRGlzcGxheSA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCInIDogJyc7XG4gICAgICBsZXQgYXZhaWxhYmxlUm9sZXMgPSBbXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYXZhaWxhYmxlLXJvbGVzXCIgJHtyb2xlc0Rpc3BsYXl9PmBcbiAgICAgIF07XG4gICAgICBmb3IgKGtleSBpbiBvcHRzLnJvbGVzKSB7XG4gICAgICAgIGlmIChvcHRzLnJvbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgY2hlY2tlZCA9IHV0aWxzLmluQXJyYXkoa2V5LCByb2xlcykgPyAnY2hlY2tlZCcgOiAnJztcbiAgICAgICAgICBsZXQgcm9sZUlkID0gYGZsZC0ke2xhc3RJRH0tcm9sZXMtJHtrZXl9YDtcbiAgICAgICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJvbGVzW11cIiB2YWx1ZT1cIiR7a2V5fVwiIGlkPVwiJHtyb2xlSWR9XCIgJHtjaGVja2VkfSBjbGFzcz1cInJvbGVzLWZpZWxkXCIgLz4gPGxhYmVsIGZvcj1cIiR7cm9sZUlkfVwiPiR7b3B0cy5yb2xlc1trZXldfTwvbGFiZWw+PGJyLz5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKCc8L2Rpdj4nKTtcblxuICAgICAgbGV0IGFjY2Vzc0xhYmVscyA9IHtmaXJzdDogb3B0cy5tZXNzYWdlcy5yb2xlcywgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLmxpbWl0Um9sZSwgY29udGVudDogYXZhaWxhYmxlUm9sZXMuam9pbignJyl9O1xuXG4gICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdhY2Nlc3MnLCB2YWx1ZXMsIGFjY2Vzc0xhYmVscykpO1xuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcgfHwgdmFsdWVzLnR5cGUgPT09ICdyYWRpby1ncm91cCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnb3RoZXInLCB2YWx1ZXMsIHtmaXJzdDogb3B0cy5tZXNzYWdlcy5lbmFibGVPdGhlciwgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLmVuYWJsZU90aGVyTXNnfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCB7Zmlyc3Q6ICcgJywgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLnNlbGVjdGlvbnNNZXNzYWdlfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNPcHRpb25GaWVsZCkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChmaWVsZE9wdGlvbnModmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ3RleHQnLCAndGV4dGFyZWEnXSkpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXhsZW5ndGgnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIGN1c3RvbSBhdHRyaWJ1dGVzIGFzIGRlZmluZWQgaW4gdHlwZVVzZXJBdHRycyBvcHRpb25cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHByb2Nlc3NUeXBlVXNlckF0dHJzKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0sIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWR2RmllbGRzLmpvaW4oJycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdHlwZVVzZXJBdHRyc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gdHlwZVVzZXJBdHRyIG9wdGlvblxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICAgIGZpZWxkIGF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICBtYXJrdXAgZm9yIGN1c3RvbSB1c2VyIGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9jZXNzVHlwZVVzZXJBdHRycyh0eXBlVXNlckF0dHIsIHZhbHVlcykge1xuICAgICAgbGV0IGFkdkZpZWxkID0gW107XG5cbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiB0eXBlVXNlckF0dHIpIHtcbiAgICAgICAgaWYgKHR5cGVVc2VyQXR0ci5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgbGV0IG9yaWcgPSBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV07XG4gICAgICAgICAgbGV0IG9yaWdWYWx1ZSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlO1xuICAgICAgICAgIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgfHwgJyc7XG5cbiAgICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWwpIHtcbiAgICAgICAgICAgIG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLmxhYmVsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5vcHRpb25zKSB7XG4gICAgICAgICAgICBhZHZGaWVsZC5wdXNoKHNlbGVjdFVzZXJBdHRycyhhdHRyaWJ1dGUsIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkdkZpZWxkLnB1c2goaW5wdXRVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXSA9IG9yaWc7XG4gICAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFkdkZpZWxkLmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRleHQgaW5wdXQgdmFsdWUgZm9yIGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgYWxzbyBrbm93biBhcyB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIGlucHV0IG1hcmt1cFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlucHV0VXNlckF0dHJzKG5hbWUsIGF0dHJzKSB7XG4gICAgICBsZXQgdGV4dEF0dHJzID0ge1xuICAgICAgICAgIGlkOiBuYW1lICsgJy0nICsgbGFzdElELFxuICAgICAgICAgIHRpdGxlOiBhdHRycy5kZXNjcmlwdGlvbiB8fCBhdHRycy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBhdHRycy50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgICBjbGFzc05hbWU6IFtgZmxkLSR7bmFtZX1gXVxuICAgICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3RleHRBdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXNbbmFtZV19PC9sYWJlbD5gO1xuXG4gICAgICBpZiAoIXV0aWxzLmluQXJyYXkodGV4dEF0dHJzLnR5cGUsIFsnY2hlY2tib3gnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgICAgdGV4dEF0dHJzLmNsYXNzTmFtZS5wdXNoKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgIH1cblxuICAgICAgdGV4dEF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHRleHRBdHRycyk7XG4gICAgICBsZXQgdGV4dElucHV0ID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodGV4dEF0dHJzKX0+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3RleHRJbnB1dH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGlucHV0IGZvciBtdWx0aXBsZSBjaG9pY2UgdXNlciBhdHRyaWJ1dGVzXG4gICAgICogQHRvZG8gIHJlcGxhY2Ugd2l0aCBzZWxlY3RBdHRyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgIHNlbGVjdCBtYXJrdXBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZWxlY3RVc2VyQXR0cnMobmFtZSwgb3B0aW9ucykge1xuICAgICAgbGV0IG9wdGlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5tYXAodmFsID0+IHtcbiAgICAgICAgbGV0IGF0dHJzID0ge3ZhbHVlOiB2YWx9O1xuICAgICAgICBpZiAodmFsID09PSBvcHRpb25zLnZhbHVlKSB7XG4gICAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4ke29wdGlvbnMub3B0aW9uc1t2YWxdfTwvb3B0aW9uPmA7XG4gICAgICB9KTtcbiAgICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgICAgaWQ6IG5hbWUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgIHRpdGxlOiBvcHRpb25zLmRlc2NyaXB0aW9uIHx8IG9wdGlvbnMubGFiZWwgfHwgbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHtuYW1lfSBmb3JtLWNvbnRyb2xgXG4gICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7b3B0cy5tZXNzYWdlc1tuYW1lXX08L2xhYmVsPmA7XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihwcm9wID0+IHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5pbkFycmF5KHByb3AsIFsndmFsdWUnLCAnb3B0aW9ucycsICdsYWJlbCddKTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBzZWxlY3RBdHRyc1thdHRyXSA9IG9wdGlvbnNbYXR0cl07XG4gICAgICB9KTtcblxuICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7b3B0aXMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgbGV0IGJvb2xBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZXMsIGxhYmVscykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVtuYW1lXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbCA9ICh0eHQpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGFiZWwgZm9yPVwiJHtuYW1lfS0ke2xhc3RJRH1cIj4ke3R4dH08L2xhYmVsPmA7XG4gICAgICB9O1xuICAgICAgbGV0IGNoZWNrZWQgPSAodmFsdWVzW25hbWVdICE9PSB1bmRlZmluZWQgPyAnY2hlY2tlZCcgOiAnJyk7XG4gICAgICBsZXQgaW5wdXQgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZmxkLSR7bmFtZX1cIiBuYW1lPVwiJHtuYW1lfVwiIHZhbHVlPVwidHJ1ZVwiICR7Y2hlY2tlZH0gaWQ9XCIke25hbWV9LSR7bGFzdElEfVwiLz4gYDtcbiAgICAgIGxldCBsZWZ0ID0gW107XG4gICAgICBsZXQgcmlnaHQgPSBbXG4gICAgICAgIGlucHV0XG4gICAgICBdO1xuXG4gICAgICBpZiAobGFiZWxzLmZpcnN0KSB7XG4gICAgICAgIGxlZnQudW5zaGlmdChsYWJlbChsYWJlbHMuZmlyc3QpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhYmVscy5zZWNvbmQpIHtcbiAgICAgICAgcmlnaHQucHVzaChsYWJlbChsYWJlbHMuc2Vjb25kKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYWJlbHMuY29udGVudCkge1xuICAgICAgICByaWdodC5wdXNoKGxhYmVscy5jb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmlnaHQudW5zaGlmdCgnPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4nKTtcbiAgICAgIHJpZ2h0LnB1c2goJzwvZGl2PicpO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGVmdC5jb25jYXQocmlnaHQpLmpvaW4oJycpfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIGxldCBidG5TdHlsZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICBsZXQgc3R5bGVzID0gb3B0cy5tZXNzYWdlcy5zdHlsZXMuYnRuO1xuICAgICAgICBsZXQgc3R5bGVGaWVsZCA9ICcnO1xuY29uc29sZS5sb2coc3R5bGVzKTtcbiAgICAgIGlmIChzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlTGFiZWwgPSBgPGxhYmVsPiR7b3B0cy5tZXNzYWdlcy5zdHlsZX08L2xhYmVsPmA7XG4gICAgICAgIHN0eWxlRmllbGQgKz0gYDxpbnB1dCB2YWx1ZT1cIiR7c3R5bGV9XCIgbmFtZT1cInN0eWxlXCIgdHlwZT1cImhpZGRlblwiIGNsYXNzPVwiYnRuLXN0eWxlXCI+YDtcbiAgICAgICAgc3R5bGVGaWVsZCArPSAnPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPic7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGxldCBjbGFzc0xpc3QgPSBbJ2J0bi14cycsICdidG4nLCBgYnRuLSR7ZWxlbWVudH1gXTtcbiAgICAgICAgICBpZiAoc3R5bGUgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH1cbmNvbnNvbGUubG9nKGVsZW1lbnQpO1xuXG4gICAgICAgICAgc3R5bGVGaWVsZCArPSBgPGJ1dHRvbiB2YWx1ZT1cIiR7ZWxlbWVudH1cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke2NsYXNzTGlzdC5qb2luKCcgJyl9XCI+JHtvcHRzLm1lc3NhZ2VzLnN0eWxlcy5idG5bZWxlbWVudF19PC9idXR0b24+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3R5bGVGaWVsZCArPSAnPC9kaXY+JztcblxuICAgICAgICBzdHlsZUZpZWxkID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHN0eWxlLXdyYXBcIj4ke3N0eWxlTGFiZWx9ICR7c3R5bGVGaWVsZH08L2Rpdj5gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGVGaWVsZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbnVtYmVyIGF0dHJpYnV0ZSB0byBhIGZpZWxkLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IG1hcmt1cCBmb3IgbnVtYmVyIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXTtcbiAgICAgIGxldCBhdHRyTGFiZWwgPSBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV0gfHwgYXR0cmlidXRlO1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gb3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnNbYXR0cmlidXRlXTtcbiAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIHZhbHVlOiBhdHRyVmFsLFxuICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgIG1pbjogJzAnLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgICAgaWQ6IGAke2F0dHJpYnV0ZX0tJHtsYXN0SUR9YFxuICAgICAgfTtcbiAgICAgIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKGlucHV0Q29uZmlnKSl9PmA7XG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtudW1iZXJBdHRyaWJ1dGV9PC9kaXY+YDtcblxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiPjxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNlbGVjdEF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlICBhdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICBha2EgYXR0cnNcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gb3B0aW9uRGF0YSAgc2VsZWN0IGZpZWxkIG9wdGlvbiBkYXRhXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgIHNlbGVjdCBpbnB1dCBtYWtydXBcbiAgICAgKi9cbiAgICBsZXQgc2VsZWN0QXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMsIG9wdGlvbkRhdGEpIHtcbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IG9wdGlvbkRhdGEubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgbGFiZWw6IGAke29wdHMubWVzc2FnZXMub3B0aW9ufSAke2l9YCxcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0sIG9wdGlvbik7XG4gICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHZhbHVlc1thdHRyaWJ1dGVdKSB7XG4gICAgICAgICAgb3B0aW9uQXR0cnMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcodXRpbHMudHJpbU9iaihvcHRpb25BdHRycykpfT4ke29wdGlvbkF0dHJzLmxhYmVsfTwvb3B0aW9uPmA7XG4gICAgICB9KTtcbiAgICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgICAgICBpZDogYXR0cmlidXRlICsgJy0nICsgbGFzdElELFxuICAgICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGBcbiAgICAgICAgfTtcbiAgICAgIGxldCBsYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtzZWxlY3RBdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXNbYXR0cmlidXRlXSB8fCB1dGlscy5jYXBpdGFsaXplKGF0dHJpYnV0ZSl9PC9sYWJlbD5gO1xuICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7c2VsZWN0T3B0aW9ucy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7c2VsZWN0fTwvZGl2PmA7XG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtzZWxlY3RBdHRycy5uYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBzb21lIHRleHQgaW5wdXRzIGZvciBmaWVsZCBhdHRyaWJ1dGVzLCAqKndpbGwgYmUgcmVwbGFjZWQqKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgbGV0IHRleHRBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHBsYWNlaG9sZGVyRmllbGRzID0gW1xuICAgICAgICAndGV4dCcsXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICdzZWxlY3QnXG4gICAgICBdO1xuXG4gICAgICBsZXQgbm9OYW1lID0gW1xuICAgICAgICAnaGVhZGVyJ1xuICAgICAgXTtcblxuICAgICAgbGV0IHRleHRBcmVhID0gWydwYXJhZ3JhcGgnXTtcblxuICAgICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCAnJztcbiAgICAgIGxldCBhdHRyTGFiZWwgPSBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV07XG4gICAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSkge1xuICAgICAgICBhdHRyTGFiZWwgPSBvcHRzLm1lc3NhZ2VzLmNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIG5vTmFtZSA9IG5vTmFtZS5jb25jYXQob3B0cy5tZXNzYWdlcy5zdWJ0eXBlcy5oZWFkZXIsIHRleHRBcmVhKTtcblxuICAgICAgbGV0IHBsYWNlaG9sZGVycyA9IG9wdHMubWVzc2FnZXMucGxhY2Vob2xkZXJzO1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgICBsZXQgYXR0cmlidXRlZmllbGQgPSAnJztcbiAgICAgIGxldCBub01ha2VBdHRyID0gW107XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBwbGFjZWhvbGRlciBhdHRyaWJ1dGVcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdwbGFjZWhvbGRlcicgJiYgIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHBsYWNlaG9sZGVyRmllbGRzKSkge1xuICAgICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBuYW1lIGF0dHJpYnV0ZVxuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ25hbWUnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vTmFtZSkpIHtcbiAgICAgICAgbm9NYWtlQXR0ci5wdXNoKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vTWFrZUF0dHIuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2xhc3RJRH1gXG4gICAgICAgIH07XG4gICAgICAgIGxldCBhdHRyaWJ1dGVMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtpbnB1dENvbmZpZy5pZH1cIj4ke2F0dHJMYWJlbH08L2xhYmVsPmA7XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCB0ZXh0QXJlYSkgfHwgKGF0dHJpYnV0ZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykpIHtcbiAgICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPHRleHRhcmVhICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PiR7YXR0clZhbH08L3RleHRhcmVhPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXRDb25maWcudmFsdWUgPSBhdHRyVmFsO1xuICAgICAgICAgIGlucHV0Q29uZmlnLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgYXR0cmlidXRlZmllbGQgKz0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT5gO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7YXR0cmlidXRlZmllbGR9PC9kaXY+YDtcblxuICAgICAgICBhdHRyaWJ1dGVmaWVsZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiPiR7YXR0cmlidXRlTGFiZWx9ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVmaWVsZDtcbiAgICB9O1xuXG4gICAgbGV0IHJlcXVpcmVkRmllbGQgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBub1JlcXVpcmUgPSBbXG4gICAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICAgJ2J1dHRvbidcbiAgICAgICAgXTtcbiAgICAgIGxldCBub01ha2UgPSBbXTtcbiAgICAgIGxldCByZXF1aXJlRmllbGQgPSAnJztcblxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vUmVxdWlyZSkpIHtcbiAgICAgICAgbm9NYWtlLnB1c2godHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5vTWFrZS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmVxdWlyZUZpZWxkID0gYm9vbEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB2YWx1ZXMsIHtmaXJzdDogb3B0cy5tZXNzYWdlcy5yZXF1aXJlZH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWlyZUZpZWxkO1xuICAgIH07XG5cbiAgICAvLyBBcHBlbmQgdGhlIG5ldyBmaWVsZCB0byB0aGUgZWRpdG9yXG4gICAgbGV0IGFwcGVuZE5ld0ZpZWxkID0gZnVuY3Rpb24odmFsdWVzLCBpc05ldyA9IHRydWUpIHtcbiAgICAgIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgICBsZXQgdHlwZSA9IHZhbHVlcy50eXBlIHx8ICd0ZXh0JztcbiAgICAgIGxldCBsYWJlbCA9IHZhbHVlcy5sYWJlbCB8fCBvcHRzLm1lc3NhZ2VzW3R5cGVdIHx8IG9wdHMubWVzc2FnZXMubGFiZWw7XG4gICAgICBsZXQgZGVsQnRuID0gbSgnYScsIG9wdHMubWVzc2FnZXMucmVtb3ZlLCB7XG4gICAgICAgICAgaWQ6ICdkZWxfJyArIGxhc3RJRCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdkZWwtYnV0dG9uIGJ0biBkZWxldGUtY29uZmlybScsXG4gICAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMucmVtb3ZlTWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgIGxldCB0b2dnbGVCdG4gPSBtKCdhJywgbnVsbCwge1xuICAgICAgICBpZDogbGFzdElEICsgJy1lZGl0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAndG9nZ2xlLWZvcm0gYnRuIGljb24tcGVuY2lsJyxcbiAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMuaGlkZVxuICAgICAgfSk7XG4gICAgICBsZXQgY29weUJ0biA9IG0oJ2EnLCBvcHRzLm1lc3NhZ2VzLmNvcHlCdXR0b24sIHtcbiAgICAgICAgaWQ6IGxhc3RJRCArICctY29weScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NvcHktYnV0dG9uIGJ0biBpY29uLWNvcHknLFxuICAgICAgICB0aXRsZTogb3B0cy5tZXNzYWdlcy5jb3B5QnV0dG9uVG9vbHRpcFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaUNvbnRlbnRzID0gbShcbiAgICAgICAgJ2RpdicsIFt0b2dnbGVCdG4sIGNvcHlCdG4sIGRlbEJ0bl0sIHtjbGFzc05hbWU6ICdmaWVsZC1hY3Rpb25zJ31cbiAgICAgICkub3V0ZXJIVE1MO1xuXG4gICAgICAvLyBGaWVsZCBwcmV2aWV3IExhYmVsXG4gICAgICBsaUNvbnRlbnRzICs9IGA8bGFiZWwgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPiR7bGFiZWx9PC9sYWJlbD5gO1xuXG4gICAgICBpZiAodmFsdWVzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICAgIHRvb2x0aXA6IHZhbHVlcy5kZXNjcmlwdGlvblxuICAgICAgICB9O1xuICAgICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiAke3V0aWxzLmF0dHJzU3RyaW5nKGF0dHJzKX0+Pzwvc3Bhbj5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVxdWlyZWREaXNwbGF5ID0gdmFsdWVzLnJlcXVpcmVkID8gJ3N0eWxlPVwiZGlzcGxheTppbmxpbmVcIicgOiAnJztcbiAgICAgIGxpQ29udGVudHMgKz0gYDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIiAke3JlcXVpcmVkRGlzcGxheX0+ICo8L3NwYW4+YDtcblxuICAgICAgbGlDb250ZW50cyArPSBtKCdkaXYnLCAnJywge2NsYXNzTmFtZTogJ3ByZXYtaG9sZGVyJ30pLm91dGVySFRNTDtcbiAgICAgIGxpQ29udGVudHMgKz0gYDxkaXYgaWQ9XCIke2xhc3RJRH0taG9sZGVyXCIgY2xhc3M9XCJmcm0taG9sZGVyXCI+YDtcbiAgICAgIGxpQ29udGVudHMgKz0gJzxkaXYgY2xhc3M9XCJmb3JtLWVsZW1lbnRzXCI+JztcblxuICAgICAgbGlDb250ZW50cyArPSBhZHZGaWVsZHModmFsdWVzKTtcbiAgICAgIGxpQ29udGVudHMgKz0gbSgnYScsIG9wdHMubWVzc2FnZXMuY2xvc2UsIHtjbGFzc05hbWU6ICdjbG9zZS1maWVsZCd9KS5vdXRlckhUTUw7XG5cbiAgICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XG4gICAgICBsaUNvbnRlbnRzICs9ICc8L2Rpdj4nO1xuXG4gICAgICBsZXQgZmllbGQgPSBtKCdsaScsIGxpQ29udGVudHMsIHtcbiAgICAgICAgICAnY2xhc3MnOiB0eXBlICsgJy1maWVsZCBmb3JtLWZpZWxkJyxcbiAgICAgICAgICAndHlwZSc6IHR5cGUsXG4gICAgICAgICAgaWQ6IGxhc3RJRFxuICAgICAgICB9KTtcbiAgICAgIGxldCAkbGkgPSAkKGZpZWxkKTtcblxuICAgICAgJGxpLmRhdGEoJ2ZpZWxkRGF0YScsIHthdHRyczogdmFsdWVzfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgX2hlbHBlcnMuc3RvcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAkKCc+IGxpJywgJHNvcnRhYmxlRmllbGRzKS5lcShfaGVscGVycy5zdG9wSW5kZXgpLmJlZm9yZSgkbGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHNvcnRhYmxlRmllbGRzLmFwcGVuZCgkbGkpO1xuICAgICAgfVxuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRsaSlcbiAgICAgIC5zb3J0YWJsZSh7dXBkYXRlOiAoKSA9PiBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRsaSl9KTtcblxuICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkbGkpO1xuXG4gICAgICBpZiAob3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXSAmJiBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uYWRkKSB7XG4gICAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQoZmllbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5lZGl0T25BZGQgJiYgaXNOZXcpIHtcbiAgICAgICAgX2hlbHBlcnMuY2xvc2VBbGxFZGl0KCk7XG4gICAgICAgIF9oZWxwZXJzLnRvZ2dsZUVkaXQobGFzdElELCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGxhc3RJRCA9IF9oZWxwZXJzLmluY3JlbWVudElkKGxhc3RJRCk7XG4gICAgfTtcblxuICAgIC8vIFNlbGVjdCBmaWVsZCBodG1sLCBzaW5jZSB0aGVyZSBtYXkgYmUgbXVsdGlwbGVcbiAgICBsZXQgc2VsZWN0RmllbGRPcHRpb25zID0gZnVuY3Rpb24obmFtZSwgb3B0aW9uRGF0YSwgbXVsdGlwbGVTZWxlY3QpIHtcbiAgICAgIGxldCBvcHRpb25JbnB1dFR5cGUgPSB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IChtdWx0aXBsZVNlbGVjdCA/ICdjaGVja2JveCcgOiAncmFkaW8nKVxuICAgICAgICB9O1xuICAgICAgbGV0IG9wdGlvbkRhdGFPcmRlciA9IFtcbiAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgJ3NlbGVjdGVkJ1xuICAgICAgXTtcbiAgICAgIGxldCBvcHRpb25JbnB1dHMgPSBbXTtcbiAgICAgIGxldCBvcHRpb25UZW1wbGF0ZSA9IHtzZWxlY3RlZDogZmFsc2UsIGxhYmVsOiAnJywgdmFsdWU6ICcnfTtcblxuICAgICAgb3B0aW9uRGF0YSA9IE9iamVjdC5hc3NpZ24ob3B0aW9uVGVtcGxhdGUsIG9wdGlvbkRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBpID0gb3B0aW9uRGF0YU9yZGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBwcm9wID0gb3B0aW9uRGF0YU9yZGVyW2ldO1xuICAgICAgICBpZiAob3B0aW9uRGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICAgIHR5cGU6IG9wdGlvbklucHV0VHlwZVtwcm9wXSB8fCAndGV4dCcsXG4gICAgICAgICAgICAnY2xhc3MnOiAnb3B0aW9uLScgKyBwcm9wLFxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbkRhdGFbcHJvcF0sXG4gICAgICAgICAgICBuYW1lOiBuYW1lICsgJy1vcHRpb24nXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChvcHRzLm1lc3NhZ2VzLnBsYWNlaG9sZGVyc1twcm9wXSkge1xuICAgICAgICAgICAgYXR0cnMucGxhY2Vob2xkZXIgPSBvcHRzLm1lc3NhZ2VzLnBsYWNlaG9sZGVyc1twcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvcCA9PT0gJ3NlbGVjdGVkJyAmJiBvcHRpb25EYXRhLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBhdHRycy5jaGVja2VkID0gb3B0aW9uRGF0YS5zZWxlY3RlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcHRpb25JbnB1dHMucHVzaCh1dGlscy5tYXJrdXAoJ2lucHV0JywgbnVsbCwgYXR0cnMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVtb3ZlQXR0cnMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3JlbW92ZSBidG4nLFxuICAgICAgICB0aXRsZTogb3B0cy5tZXNzYWdlcy5yZW1vdmVNZXNzYWdlXG4gICAgICB9O1xuICAgICAgb3B0aW9uSW5wdXRzLnB1c2godXRpbHMubWFya3VwKCdhJywgb3B0cy5tZXNzYWdlcy5yZW1vdmUsIHJlbW92ZUF0dHJzKSk7XG5cbiAgICAgIGxldCBmaWVsZCA9IHV0aWxzLm1hcmt1cCgnbGknLCBvcHRpb25JbnB1dHMpO1xuXG4gICAgICByZXR1cm4gZmllbGQub3V0ZXJIVE1MO1xuICAgIH07XG5cbiAgICBsZXQgY2xvbmVJdGVtID0gZnVuY3Rpb24gY2xvbmVJdGVtKGN1cnJlbnRJdGVtKSB7XG4gICAgICBsZXQgY3VycmVudElkID0gY3VycmVudEl0ZW0uYXR0cignaWQnKTtcbiAgICAgIGxldCB0eXBlID0gY3VycmVudEl0ZW0uYXR0cigndHlwZScpO1xuICAgICAgbGV0IHRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBsZXQgY2xvbmVOYW1lID0gdHlwZSArICctJyArIHRzO1xuICAgICAgbGV0ICRjbG9uZSA9IGN1cnJlbnRJdGVtLmNsb25lKCk7XG5cbiAgICAgICRjbG9uZS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICB0aGlzLmlkID0gdGhpcy5pZC5yZXBsYWNlKGN1cnJlbnRJZCwgbGFzdElEKTtcbiAgICAgIH0pO1xuXG4gICAgICAkY2xvbmUuZmluZCgnW2Zvcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9yJykucmVwbGFjZShjdXJyZW50SWQsIGxhc3RJRCkpO1xuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdlOm5vdCguZm9ybS1lbGVtZW50cyknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBuZXdOYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgICBuZXdOYW1lID0gbmV3TmFtZS5zdWJzdHJpbmcoMCwgKG5ld05hbWUubGFzdEluZGV4T2YoJy0nKSArIDEpKTtcbiAgICAgICAgICBuZXdOYW1lID0gbmV3TmFtZSArIHRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuZXdOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmZpbmQoJy5mb3JtLWVsZW1lbnRzJykuZmluZCgnOmlucHV0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgPT09ICduYW1lJykge1xuICAgICAgICAgIGxldCBuZXdWYWwgPSB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgICBuZXdWYWwgPSBuZXdWYWwuc3Vic3RyaW5nKDAsIChuZXdWYWwubGFzdEluZGV4T2YoJy0nKSArIDEpKTtcbiAgICAgICAgICBuZXdWYWwgPSBuZXdWYWwgKyB0cy50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG5ld1ZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkY2xvbmUuYXR0cignaWQnLCBsYXN0SUQpO1xuICAgICAgJGNsb25lLmF0dHIoJ25hbWUnLCBjbG9uZU5hbWUpO1xuICAgICAgJGNsb25lLmFkZENsYXNzKCdjbG9uZWQnKTtcbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJGNsb25lKS5zb3J0YWJsZSgpO1xuXG4gICAgICBpZiAob3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXSAmJiBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uY2xvbmUpIHtcbiAgICAgICAgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKCRjbG9uZVswXSk7XG4gICAgICB9XG5cbiAgICAgIGxhc3RJRCA9IF9oZWxwZXJzLmluY3JlbWVudElkKGxhc3RJRCk7XG4gICAgICByZXR1cm4gJGNsb25lO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVUSUxJVElFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgICAvLyBkZWxldGUgb3B0aW9uc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2sgdG91Y2hzdGFydCcsICcucmVtb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRmaWVsZCA9ICQodGhpcykucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBvcHRpb25zQ291bnQgPSAkKHRoaXMpLnBhcmVudHMoJy5zb3J0YWJsZS1vcHRpb25zOmVxKDApJykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xuICAgICAgaWYgKG9wdGlvbnNDb3VudCA8PSAyKSB7XG4gICAgICAgIG9wdHMubm90aWZ5LmVycm9yKCdFcnJvcjogJyArIG9wdHMubWVzc2FnZXMubWluT3B0aW9uTWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGknKS5zbGlkZVVwKCcyNTAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGZpZWxkKTtcbiAgICAgICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdG91Y2ggZm9jdXNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ3RvdWNoc3RhcnQnLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgIGlmIChlLmhhbmRsZWQgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKCRpbnB1dC5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAkaW5wdXQudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICBsZXQgZmllbGRWYWwgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgJGlucHV0LnZhbChmaWVsZFZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRvZ2dsZSBmaWVsZHNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnRvZ2dsZS1mb3JtLCAuY2xvc2UtZmllbGQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGUuaGFuZGxlZCAhPT0gdHJ1ZSkge1xuICAgICAgICBsZXQgdGFyZ2V0SUQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpLmF0dHIoJ2lkJyk7XG4gICAgICAgIF9oZWxwZXJzLnRvZ2dsZUVkaXQodGFyZ2V0SUQpO1xuICAgICAgICBlLmhhbmRsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjaGFuZ2UnLCAnLnByZXYtaG9sZGVyIGlucHV0LCAucHJldi1ob2xkZXIgc2VsZWN0JywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdGhlci1vcHRpb24nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgZmllbGQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaS5mb3JtLWZpZWxkJylbMF07XG4gICAgICBpZiAodXRpbHMuaW5BcnJheShmaWVsZC50eXBlLCBbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgICBmaWVsZC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJvcHRpb24tdmFsdWVcIl1bdmFsdWU9XCInICsgZS50YXJnZXQudmFsdWUgKyAnXCJdJykucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlLScgKyBmaWVsZC5pZCkudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHByZXZpZXcgdG8gbGFiZWxcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2tleXVwIGNoYW5nZScsICdbbmFtZT1cImxhYmVsXCJdJywgZnVuY3Rpb24oZSkge1xuICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKSkudGV4dCgkKGUudGFyZ2V0KS52YWwoKSk7XG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmUgZXJyb3Igc3R5bGluZyB3aGVuIHVzZXJzIHRyaWVzIHRvIGNvcnJlY3QgbWlzdGFrZVxuICAgICRzb3J0YWJsZUZpZWxkcy5kZWxlZ2F0ZSgnaW5wdXQuZXJyb3InLCAna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBwcmV2aWV3IGZvciBkZXNjcmlwdGlvblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbigna2V5dXAnLCAnaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRmaWVsZCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgICBsZXQgY2xvc2VzdFRvb2xUaXAgPSAkKCcudG9vbHRpcC1lbGVtZW50JywgJGZpZWxkKTtcbiAgICAgIGxldCB0dFZhbCA9ICQoZS50YXJnZXQpLnZhbCgpO1xuICAgICAgaWYgKHR0VmFsICE9PSAnJykge1xuICAgICAgICBpZiAoIWNsb3Nlc3RUb29sVGlwLmxlbmd0aCkge1xuICAgICAgICAgIGxldCB0dCA9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke3R0VmFsfVwiPj88L3NwYW4+YDtcbiAgICAgICAgICAkKCcuZmllbGQtbGFiZWwnLCAkZmllbGQpLmFmdGVyKHR0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZXN0VG9vbFRpcC5hdHRyKCd0b29sdGlwJywgdHRWYWwpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNsb3Nlc3RUb29sVGlwLmxlbmd0aCkge1xuICAgICAgICAgIGNsb3Nlc3RUb29sVGlwLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlJywgJy5mbGQtbXVsdGlwbGUnLCBlID0+IHtcbiAgICAgIGxldCBuZXdUeXBlID0gZS50YXJnZXQuY2hlY2tlZCA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xuXG4gICAgICAkKGUudGFyZ2V0KVxuICAgICAgLnBhcmVudHMoJy5mb3JtLWVsZW1lbnRzOmVxKDApJylcbiAgICAgIC5maW5kKCcuc29ydGFibGUtb3B0aW9ucyBpbnB1dC5vcHRpb24tc2VsZWN0ZWQnKVxuICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGUudGFyZ2V0LnR5cGUgPSBuZXdUeXBlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JtYXQgbmFtZSBhdHRyaWJ1dGVcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2JsdXInLCAnaW5wdXQuZmxkLW5hbWUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IF9oZWxwZXJzLnNhZmVuYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgJChlLnRhcmdldClcbiAgICAgICAgLmFkZENsYXNzKCdmaWVsZC1lcnJvcicpXG4gICAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIG9wdHMubWVzc2FnZXMuY2Fubm90QmVFbXB0eSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZmllbGQtZXJyb3InKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignYmx1cicsICdpbnB1dC5mbGQtbWF4bGVuZ3RoJywgZSA9PiB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IF9oZWxwZXJzLmZvcmNlTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIENvcHkgZmllbGRcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmljb24tY29weScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBjdXJyZW50SXRlbSA9ICQoZS50YXJnZXQpLnBhcmVudCgpLnBhcmVudCgnbGknKTtcbiAgICAgIGxldCAkY2xvbmUgPSBjbG9uZUl0ZW0oY3VycmVudEl0ZW0pO1xuICAgICAgJGNsb25lLmluc2VydEFmdGVyKGN1cnJlbnRJdGVtKTtcbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGNsb25lKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIERlbGV0ZSBmaWVsZFxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuZGVsZXRlLWNvbmZpcm0nLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgICAgICB9O1xuXG4gICAgICBsZXQgZGVsZXRlSUQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpLmF0dHIoJ2lkJyk7XG4gICAgICBjb25zdCAkZmllbGQgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUlEKSk7XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsQ2xvc2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBzdXJlIHRoZXkgd2FudCB0byByZW1vdmUgdGhlIGZpZWxkXG4gICAgICBpZiAob3B0cy5maWVsZFJlbW92ZVdhcm4pIHtcbiAgICAgICAgbGV0IHdhcm5IMyA9IHV0aWxzLm1hcmt1cCgnaDMnLCBvcHRzLm1lc3NhZ2VzLndhcm5pbmcpO1xuICAgICAgICBsZXQgd2Fybk1lc3NhZ2UgPSB1dGlscy5tYXJrdXAoJ3AnLCBvcHRzLm1lc3NhZ2VzLmZpZWxkUmVtb3ZlV2FybmluZyk7XG4gICAgICAgIF9oZWxwZXJzLmNvbmZpcm0oW3dhcm5IMywgd2Fybk1lc3NhZ2VdLCAoKSA9PlxuICAgICAgICAgIF9oZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKSwgY29vcmRzKTtcbiAgICAgICAgJGZpZWxkLmFkZENsYXNzKCdkZWxldGluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2hlbHBlcnMucmVtb3ZlRmllbGQoZGVsZXRlSUQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIGJ1dHRvbiBzdHlsZSBzZWxlY3Rpb25cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJy5zdHlsZS13cmFwIGJ1dHRvbicsIGUgPT4ge1xuICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xuICAgICAgbGV0IHN0eWxlVmFsID0gJGJ1dHRvbi52YWwoKTtcbiAgICAgIGxldCAkYnRuU3R5bGUgPSAkYnV0dG9uLnBhcmVudCgpLnByZXYoJy5idG4tc3R5bGUnKTtcbiAgICAgICRidG5TdHlsZS52YWwoc3R5bGVWYWwpO1xuICAgICAgJGJ1dHRvbi5zaWJsaW5ncygnLmJ0bicpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJGJ1dHRvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGJ0blN0eWxlLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJlcXVpcmVkIGFzdGVyaXNrXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuZmxkLXJlcXVpcmVkJywgZSA9PiB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5yZXF1aXJlZC1hc3RlcmlzaycpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJvbGVzIHZpc2liaWxpdHlcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJ2lucHV0LmZsZC1hY2Nlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgcm9sZXMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5hdmFpbGFibGUtcm9sZXMnKTtcbiAgICAgIGxldCBlbmFibGVSb2xlc0NCID0gJChlLnRhcmdldCk7XG4gICAgICByb2xlcy5zbGlkZVRvZ2dsZSgyNTAsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWVuYWJsZVJvbGVzQ0IuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCByb2xlcykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIGFkZCBuZXcgb3B0aW9uc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnLmFkZC1vcHQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgJG9wdGlvbldyYXAgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZmllbGQtb3B0aW9ucycpO1xuICAgICAgbGV0ICRtdWx0aXBsZSA9ICQoJ1tuYW1lPVwibXVsdGlwbGVcIl0nLCAkb3B0aW9uV3JhcCk7XG4gICAgICBsZXQgJGZpcnN0T3B0aW9uID0gJCgnLm9wdGlvbi1zZWxlY3RlZDplcSgwKScsICRvcHRpb25XcmFwKTtcbiAgICAgIGxldCBpc011bHRpcGxlID0gZmFsc2U7XG5cbiAgICAgIGlmICgkbXVsdGlwbGUubGVuZ3RoKSB7XG4gICAgICAgIGlzTXVsdGlwbGUgPSAkbXVsdGlwbGUucHJvcCgnY2hlY2tlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNNdWx0aXBsZSA9ICgkZmlyc3RPcHRpb24uYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5hbWUgPSAkZmlyc3RPcHRpb24uYXR0cignbmFtZScpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRvcHRpb25XcmFwKS5hcHBlbmQoc2VsZWN0RmllbGRPcHRpb25zKG5hbWUsIGZhbHNlLCBpc011bHRpcGxlKSk7XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlb3ZlciBtb3VzZW91dCcsICcucmVtb3ZlLCAuZGVsLWJ1dHRvbicsIGUgPT5cbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykudG9nZ2xlQ2xhc3MoJ2RlbGV0ZScpKTtcblxuICAgIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgICAvLyBWaWV3IFhNTFxuICAgICAgLy8gbGV0IHhtbEJ1dHRvbiA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZnJtYklEICsgJy12aWV3LWRhdGEnKSk7XG4gICAgICAvLyB4bWxCdXR0b24uY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyAgIF9oZWxwZXJzLnNob3dEYXRhKCk7XG4gICAgICAvLyB9KTtcblxuICAgICAgLy8gQ2xlYXIgYWxsIGZpZWxkcyBpbiBmb3JtIGVkaXRvclxuICAgICAgLy8gbGV0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZnJtYklEfS1jbGVhci1hbGxgKTtcbiAgICAgIC8vIGNsZWFyQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAvLyAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgICAgLy8gICBsZXQgYnV0dG9uUG9zaXRpb24gPSBjbGVhckJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIC8vICAgbGV0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIC8vICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgIC8vICAgICBwYWdlWDogYnV0dG9uUG9zaXRpb24ubGVmdCArIChidXR0b25Qb3NpdGlvbi53aWR0aCAvIDIpLFxuICAgICAgLy8gICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXG4gICAgICAvLyAgIH07XG5cbiAgICAgIC8vICAgaWYgKGZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIC8vICAgICBfaGVscGVycy5jb25maXJtKG9wdHMubWVzc2FnZXMuY2xlYXJBbGxNZXNzYWdlLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgLy8gICAgICAgb3B0cy5ub3RpZnkuc3VjY2VzcyhvcHRzLm1lc3NhZ2VzLmFsbEZpZWxkc1JlbW92ZWQpO1xuICAgICAgLy8gICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgLy8gICAgICAgb3B0cy5vbkNsZWFyQWxsKCk7XG4gICAgICAvLyAgICAgfSwgY29vcmRzKTtcbiAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICBfaGVscGVycy5kaWFsb2coJ1RoZXJlIGFyZSBubyBmaWVsZHMgdG8gY2xlYXInLCBjb29yZHMpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9O1xuXG4gICAgICAvLyBTYXZlIElkZWEgVGVtcGxhdGVcbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZybWJJRH0tc2F2ZWApLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAvLyAgIG9wdHMub25TYXZlKF9oZWxwZXJzLnNhdmUoKSk7XG4gICAgICAvLyB9O1xuICAgIH1cblxuICAgIF9oZWxwZXJzLmdldERhdGEoKTtcbiAgICBsb2FkRmllbGRzKCk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMuY3NzKCdtaW4taGVpZ2h0JywgJGNiVUwuaGVpZ2h0KCkpO1xuXG4gICAgLy8gSWYgb3B0aW9uIHNldCwgY29udHJvbHMgd2lsbCByZW1haW4gaW4gdmlldyBpbiBlZGl0b3JcbiAgICBpZiAob3B0cy5zdGlja3lDb250cm9scykge1xuICAgICAgX2hlbHBlcnMuc3RpY2t5Q29udHJvbHMoJHNvcnRhYmxlRmllbGRzKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5sb2FkZWQpO1xuXG4gICAgLy8gTWFrZSBhY3Rpb25zIGFjY2Vzc2libGVcbiAgICBmb3JtQnVpbGRlci5hY3Rpb25zID0ge1xuICAgICAgY2xlYXJGaWVsZHM6IF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyxcbiAgICAgIHNob3dEYXRhOiBfaGVscGVycy5zaG93RGF0YSxcbiAgICAgIHNhdmU6IF9oZWxwZXJzLnNhdmUsXG4gICAgICBhZGRGaWVsZDogKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBfaGVscGVycy5zdG9wSW5kZXggPSBmb3JtQnVpbGRlci5zdGFnZS5jaGlsZHJlbi5sZW5ndGggPyBpbmRleCA6IHVuZGVmaW5lZDtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkQWRkZWQpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUZpZWxkOiBfaGVscGVycy5yZW1vdmVGaWVsZCxcbiAgICAgIGdldERhdGE6ICh0eXBlID0gJ2pzJykgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZSA9IGZvcm1CdWlsZGVyLnN0YWdlO1xuICAgICAgICBjb25zdCBoID0gX2hlbHBlcnM7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAganM6ICgpID0+IGgucHJlcERhdGEoc3RhZ2UpLFxuICAgICAgICAgIHhtbDogKCkgPT4gaC54bWxTYXZlKHN0YWdlKSxcbiAgICAgICAgICBqc29uOiAoKSA9PiB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoaC5wcmVwRGF0YShzdGFnZSksIG51bGwsICdcXHQnKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBkYXRhW3R5cGVdKCk7XG4gICAgICB9LFxuICAgICAgc2V0RGF0YTogZm9ybURhdGEgPT4ge1xuICAgICAgICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMoKTtcbiAgICAgICAgX2hlbHBlcnMuZ2V0RGF0YShmb3JtRGF0YSk7XG4gICAgICAgIGxvYWRGaWVsZHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1CdWlsZGVyO1xuICB9O1xuXG4gICQuZm4uZm9ybUJ1aWxkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGxldCBlbGVtcyA9IHRoaXM7XG4gICAgcmV0dXJuIGVsZW1zLmVhY2goKGkpID0+IHtcbiAgICAgIGxldCBmb3JtQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcihvcHRpb25zLCBlbGVtc1tpXSk7XG4gICAgICAkKGVsZW1zW2ldKS5kYXRhKCdmb3JtQnVpbGRlcicsIGZvcm1CdWlsZGVyKTtcblxuICAgICAgcmV0dXJuIGZvcm1CdWlsZGVyO1xuICAgIH0pO1xuICB9O1xufSkoalF1ZXJ5KTtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyBzcGVjaWZpYyB0byBmb3JtQnVpbGRlci5cbiAqIENhbGxlZCBmb3JtIGZvcm1CdWlsZGVyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgb3B0c1xuICogQHBhcmFtICB7SW5zdGFuY2V9IGZvcm1CdWlsZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IGhlbHBlciBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gaGVscGVycyhvcHRzLCBmb3JtQnVpbGRlcikge1xuICBsZXQgX2hlbHBlcnMgPSB7XG4gICAgZG9DYW5jZWw6IGZhbHNlXG4gIH07XG5cbiAgY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG4gIGZvcm1CdWlsZGVyLmV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzLmpzJyk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgY29udmVydHMgbWVzc3kgYGNsI3NzTmFtZXNgIGludG8gdmFsaWQgYGNsYXNzLW5hbWVzYFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGh5cGhlbmF0ZWQgc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy5tYWtlQ2xhc3NOYW1lID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICByZXR1cm4gdXRpbHMuaHlwaGVuQ2FzZShzdHIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBtb2JpbGUgY2xhc3NcbiAgICogQHRvZG8gZmluZCBjc3Mgb25seSBzb2x1dGlvblxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IE1vYmlsZSBjbGFzcyBhZGRlZCB0byBmb3JtQnVpbGRlclxuICAgKi9cbiAgX2hlbHBlcnMubW9iaWxlQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbW9iaWxlQ2xhc3MgPSAnJztcbiAgICAoZnVuY3Rpb24oYSkge1xuICAgICAgaWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSB7XG4gICAgICAgIG1vYmlsZUNsYXNzID0gJyBmYi1tb2JpbGUnO1xuICAgICAgfVxuICAgIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xuICAgIHJldHVybiBtb2JpbGVDbGFzcztcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGJlZ2luc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIF9oZWxwZXJzLnN0YXJ0TW92aW5nID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgdWkuaXRlbS5zaG93KCkuYWRkQ2xhc3MoJ21vdmluZycpO1xuICAgIF9oZWxwZXJzLnN0YXJ0SW5kZXggPSAkKCdsaScsIHRoaXMpLmluZGV4KHVpLml0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igd2hlbiBhIGRyYWcgZW5kc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIF9oZWxwZXJzLnN0b3BNb3ZpbmcgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICB1aS5pdGVtLnJlbW92ZUNsYXNzKCdtb3ZpbmcnKTtcbiAgICBpZiAoX2hlbHBlcnMuZG9DYW5jZWwpIHtcbiAgICAgICQodWkuc2VuZGVyKS5zb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgICAkKHRoaXMpLnNvcnRhYmxlKCdjYW5jZWwnKTtcbiAgICB9XG4gICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGpRdWVyeSBVSSBzb3J0YWJsZSBiZWZvcmVTdG9wIGNhbGxiYWNrIHVzZWQgZm9yIGJvdGggbGlzdHMuXG4gICAqIExvZ2ljIGZvciBjYW5jZWxpbmcgdGhlIHNvcnQgb3IgZHJvcC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfaGVscGVycy5iZWZvcmVTdG9wID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG4gICAgbGV0IGxhc3RJbmRleCA9IGZvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBsZXQgY2FuY2VsQXJyYXkgPSBbXTtcbiAgICBfaGVscGVycy5zdG9wSW5kZXggPSB1aS5wbGFjZWhvbGRlci5pbmRleCgpIC0gMTtcblxuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzICYmIHVpLml0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoJ2ZybWItY29udHJvbCcpKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goX2hlbHBlcnMuc3RvcEluZGV4ID09PSAwKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5hcHBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goKF9oZWxwZXJzLnN0b3BJbmRleCArIDEpID09PSBsYXN0SW5kZXgpO1xuICAgIH1cblxuICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYWtlIHN0cmluZ3Mgc2FmZSB0byBiZSB1c2VkIGFzIGNsYXNzZXNcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICBjb252ZXJ0ZXIgc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy5zYWZlbmFtZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvW15hLXpBLVowLTlcXC1dL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdHJpcHMgbm9uLW51bWJlcnMgZnJvbSBhIG51bWJlciBvbmx5IGlucHV0XG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3RyIHN0cmluZyB3aXRoIHBvc3NpYmxlIG51bWJlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBzdHJpbmcgd2l0aG91dCBudW1iZXJzXG4gICAqL1xuICBfaGVscGVycy5mb3JjZU51bWJlciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgfTtcblxuICAvKipcbiAgICogaGlkZSBhbmQgc2hvdyBtb3VzZSB0cmFja2luZyB0b29sdGlwcywgb25seSB1c2VkIGZvciBkaXNhYmxlZFxuICAgKiBmaWVsZHMgaW4gdGhlIGVkaXRvci5cbiAgICpcbiAgICogQHRvZG8gICByZW1vdmUgb3IgcmVmYWN0b3IgdG8gbWFrZSBiZXR0ZXIgdXNlXG4gICAqIEBwYXJhbSAge09iamVjdH0gdHQgalF1ZXJ5IG9wdGlvbiB3aXRoIG5leHRlZCB0b29sdGlwXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfaGVscGVycy5pbml0VG9vbHRpcCA9IGZ1bmN0aW9uKHR0KSB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHR0LmZpbmQoJy50b29sdGlwJyk7XG4gICAgdHQubW91c2VlbnRlcihmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0b29sdGlwLm91dGVyV2lkdGgoKSA+IDIwMCkge1xuICAgICAgICB0b29sdGlwLmFkZENsYXNzKCdtYXgtd2lkdGgnKTtcbiAgICAgIH1cbiAgICAgIHRvb2x0aXAuY3NzKCdsZWZ0JywgdHQud2lkdGgoKSArIDE0KTtcbiAgICAgIHRvb2x0aXAuc3RvcCh0cnVlLCB0cnVlKS5mYWRlSW4oJ2Zhc3QnKTtcbiAgICB9KS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xuICAgICAgdHQuZmluZCgnLnRvb2x0aXAnKS5zdG9wKHRydWUsIHRydWUpLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgICB9KTtcbiAgICB0b29sdGlwLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gZ2V0IGVsZW1lbnQgdHlwZSBhbmQgc3VidHlwZVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICRmaWVsZFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IHt0eXBlOiAnZmllbGRUeXBlJywgc3VidHlwZTogJ2ZpZWxkU3ViVHlwZSd9XG4gICAqL1xuICBfaGVscGVycy5nZXRUeXBlcyA9IGZ1bmN0aW9uKCRmaWVsZCkge1xuICAgIGxldCB0eXBlcyA9IHtcbiAgICAgICAgdHlwZTogJGZpZWxkLmF0dHIoJ3R5cGUnKVxuICAgICAgfTtcbiAgICBsZXQgc3VidHlwZSA9ICQoJy5mbGQtc3VidHlwZScsICRmaWVsZCkudmFsKCk7XG5cbiAgICBpZiAoc3VidHlwZSAhPT0gdHlwZXMudHlwZSkge1xuICAgICAgdHlwZXMuc3VidHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgb3B0aW9uIGRhdGEgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZCBqUXVlcnkgZmllbGQgb2JqZWN0XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgQXJyYXkgb2Ygb3B0aW9uIHZhbHVlc1xuICAgKi9cbiAgX2hlbHBlcnMuZmllbGRPcHRpb25EYXRhID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICRvcHRpb24pLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgIGxhYmVsOiAkKCcub3B0aW9uLWxhYmVsJywgJG9wdGlvbikudmFsKCksXG4gICAgICAgICAgdmFsdWU6ICQoJy5vcHRpb24tdmFsdWUnLCAkb3B0aW9uKS52YWwoKVxuICAgICAgICB9O1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5wdXNoKGF0dHJzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBYTUwgc2F2ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZvcm0gc29ydGFibGVGaWVsZHMgbm9kZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHhtbCBpbiBzdHJpbmdcbiAgICovXG4gIF9oZWxwZXJzLnhtbFNhdmUgPSBmdW5jdGlvbihmb3JtKSB7XG4gICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQgZm9ybURhdGEgPSBfaGVscGVycy5wcmVwRGF0YShmb3JtKTtcbiAgICBsZXQgeG1sID0gWyc8Zm9ybS10ZW1wbGF0ZT5cXG5cXHQ8ZmllbGRzPiddO1xuXG4gICAgdXRpbHMuZm9yRWFjaChmb3JtRGF0YSwgZnVuY3Rpb24oZmllbGRJbmRleCwgZmllbGQpIHtcbiAgICAgIGxldCBmaWVsZENvbnRlbnQgPSBudWxsO1xuXG4gICAgICAvLyBIYW5kbGUgb3B0aW9uc1xuICAgICAgaWYgKGZpZWxkLnR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLykpIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IG0oJ29wdGlvbicsIG9wdGlvbkRhdGFbaV0ubGFiZWwsIG9wdGlvbkRhdGFbaV0pLm91dGVySFRNTDtcbiAgICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdFxcdCcgKyBvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucHVzaCgnXFxuXFx0XFx0Jyk7XG5cbiAgICAgICAgZmllbGRDb250ZW50ID0gb3B0aW9ucy5qb2luKCcnKTtcbiAgICAgICAgZGVsZXRlIGZpZWxkLnZhbHVlcztcbiAgICAgIH1cblxuICAgICAgbGV0IHhtbEZpZWxkID0gbSgnZmllbGQnLCBmaWVsZENvbnRlbnQsIGZpZWxkKTtcbiAgICAgIHhtbC5wdXNoKCdcXG5cXHRcXHQnICsgeG1sRmllbGQub3V0ZXJIVE1MKTtcbiAgICB9KTtcblxuICAgIHhtbC5wdXNoKCdcXG5cXHQ8L2ZpZWxkcz5cXG48L2Zvcm0tdGVtcGxhdGU+Jyk7XG5cbiAgICByZXR1cm4geG1sLmpvaW4oJycpO1xuICB9O1xuXG4gIF9oZWxwZXJzLnByZXBEYXRhID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xuXG4gICAgaWYgKGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIGJ1aWxkIGRhdGEgb2JqZWN0XG4gICAgICB1dGlscy5mb3JFYWNoKGZvcm0uY2hpbGROb2RlcywgZnVuY3Rpb24oaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGxldCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICBpZiAoISgkZmllbGQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IF9oZWxwZXJzLmdldFR5cGVzKCRmaWVsZCk7XG4gICAgICAgICAgbGV0IHJvbGVWYWxzID0gJCgnLnJvbGVzLWZpZWxkOmNoZWNrZWQnLCBmaWVsZCkubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0pLmdldCgpO1xuXG4gICAgICAgICAgJCgnW2NsYXNzKj1cImZsZC1cIl0nLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UoYXR0ci5uYW1lKTtcbiAgICAgICAgICAgIGZpZWxkRGF0YVtuYW1lXSA9IGF0dHIudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGF0dHIuY2hlY2tlZCA6IGF0dHIudmFsdWU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAocm9sZVZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEucm9sZSA9IHJvbGVWYWxzLmpvaW4oJywnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZERhdGEuY2xhc3NOYW1lID0gZmllbGREYXRhLmNsYXNzTmFtZSB8fCBmaWVsZERhdGEuY2xhc3M7XG5cbiAgICAgICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZERhdGEuY2xhc3NOYW1lKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZmllbGREYXRhKTtcbiAgICAgICAgICBmaWVsZERhdGEgPSB1dGlscy5lc2NhcGVBdHRycyhmaWVsZERhdGEpO1xuXG4gICAgICAgICAgbGV0IG11bHRpcGxlRmllbGQgPSBmaWVsZERhdGFcbiAgICAgICAgICAudHlwZS5tYXRjaCgvKHNlbGVjdHxjaGVja2JveC1ncm91cHxyYWRpby1ncm91cCkvKTtcblxuICAgICAgICAgIGlmIChtdWx0aXBsZUZpZWxkKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gX2hlbHBlcnMuZmllbGRPcHRpb25EYXRhKCRmaWVsZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH07XG5cbiAgX2hlbHBlcnMuanNvblNhdmUgPSBmb3JtID0+XG4gICAgd2luZG93LkpTT04uc3RyaW5naWZ5KF9oZWxwZXJzLnByZXBEYXRhKGZvcm0pLCBudWxsLCAnXFx0Jyk7XG5cbiAgX2hlbHBlcnMuZ2V0RGF0YSA9IGZvcm1EYXRhID0+IHtcbiAgICBsZXQgZGF0YSA9IGZvcm1EYXRhIHx8IG9wdHMuZm9ybURhdGE7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGF0YSA9IHtcbiAgICAgIHhtbDogZm9ybURhdGEgPT4gdXRpbHMucGFyc2VYTUwoZm9ybURhdGEpLFxuICAgICAganNvbjogZm9ybURhdGEgPT4gd2luZG93LkpTT04ucGFyc2UoZm9ybURhdGEpXG4gICAgfTtcblxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gc2V0RGF0YVtvcHRzLmRhdGFUeXBlXShkYXRhKSB8fCBbXTtcblxuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogU2F2ZXMgYW5kIHJldHVybnMgZm9ybURhdGFcbiAgICogQHJldHVybiB7WE1MfEpTT059IGZvcm1EYXRhXG4gICAqL1xuICBfaGVscGVycy5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG5cbiAgICBsZXQgZG9TYXZlID0ge1xuICAgICAgeG1sOiBfaGVscGVycy54bWxTYXZlLFxuICAgICAganNvbjogX2hlbHBlcnMuanNvblNhdmVcbiAgICB9O1xuXG4gICAgLy8gc2F2ZSBhY3Rpb24gZm9yIGN1cnJlbnQgYGRhdGFUeXBlYFxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gZG9TYXZlW29wdHMuZGF0YVR5cGVdKGZvcm0pO1xuXG4gICAgLy8gdHJpZ2dlciBmb3JtU2F2ZWQgZXZlbnRcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5mb3JtU2F2ZWQpO1xuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogaW5jcmVtZW50cyB0aGUgZmllbGQgaWRzIHdpdGggc3VwcG9ydCBmb3IgbXVsdGlwbGUgZWRpdG9yc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGZpZWxkIElEXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgaW5jcmVtZW50ZWQgZmllbGQgSURcbiAgICovXG4gIF9oZWxwZXJzLmluY3JlbWVudElkID0gZnVuY3Rpb24oaWQpIHtcbiAgICBsZXQgc3BsaXQgPSBpZC5sYXN0SW5kZXhPZignLScpO1xuICAgIGxldCBuZXdGaWVsZE51bWJlciA9IHBhcnNlSW50KGlkLnN1YnN0cmluZyhzcGxpdCArIDEpKSArIDE7XG4gICAgbGV0IGJhc2VTdHJpbmcgPSBpZC5zdWJzdHJpbmcoMCwgc3BsaXQpO1xuXG4gICAgcmV0dXJuIGAke2Jhc2VTdHJpbmd9LSR7bmV3RmllbGROdW1iZXJ9YDtcbiAgfTtcblxuICAvKipcbiAgICogQ29sbGVjdCBmaWVsZCBhdHRyaWJ1dGUgdmFsdWVzIGFuZCBjYWxsIGZpZWxkUHJldmlldyB0byBnZW5lcmF0ZSBwcmV2aWV3XG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgRE9NIGVsZW1lbnRcbiAgICovXG4gIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSBmaWVsZC5hdHRyKCdjbGFzcycpO1xuICAgIGlmIChmaWVsZENsYXNzLmluZGV4T2YoJ3VpLXNvcnRhYmxlLWhhbmRsZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaWVsZFR5cGUgPSAkKGZpZWxkKS5hdHRyKCd0eXBlJyk7XG4gICAgbGV0ICRwcmV2SG9sZGVyID0gJCgnLnByZXYtaG9sZGVyJywgZmllbGQpO1xuICAgIGxldCBwcmV2aWV3RGF0YSA9IHtcbiAgICAgIHR5cGU6IGZpZWxkVHlwZVxuICAgIH07XG4gICAgbGV0IHByZXZpZXc7XG5cbiAgICAkKCdbY2xhc3MqPVwiZmxkLVwiXScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UodGhpcy5uYW1lKTtcbiAgICAgIHByZXZpZXdEYXRhW25hbWVdID0gdGhpcy50eXBlID09PSAnY2hlY2tib3gnID8gdGhpcy5jaGVja2VkIDogdGhpcy52YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCBzdHlsZSA9ICQoJy5idG4tc3R5bGUnLCBmaWVsZCkudmFsKCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLykpIHtcbiAgICAgIHByZXZpZXdEYXRhLnZhbHVlcyA9IFtdO1xuICAgICAgcHJldmlld0RhdGEubXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgZmllbGQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb3B0aW9uID0ge307XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCB0aGlzKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJCgnLm9wdGlvbi12YWx1ZScsIHRoaXMpLnZhbCgpO1xuICAgICAgICBvcHRpb24ubGFiZWwgPSAkKCcub3B0aW9uLWxhYmVsJywgdGhpcykudmFsKCk7XG4gICAgICAgIHByZXZpZXdEYXRhLnZhbHVlcy5wdXNoKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2aWV3RGF0YSA9IHV0aWxzLnRyaW1PYmoocHJldmlld0RhdGEpO1xuXG4gICAgcHJldmlld0RhdGEuY2xhc3NOYW1lID0gX2hlbHBlcnMuY2xhc3NOYW1lcyhmaWVsZCwgcHJldmlld0RhdGEpO1xuICAgICQoJy5mbGQtY2xhc3NOYW1lJywgZmllbGQpLnZhbChwcmV2aWV3RGF0YS5jbGFzc05hbWUpO1xuXG4gICAgZmllbGQuZGF0YSgnZmllbGREYXRhJywgcHJldmlld0RhdGEpO1xuICAgIHByZXZpZXcgPSB1dGlscy5maWVsZFJlbmRlcihwcmV2aWV3RGF0YSwgb3B0cywgdHJ1ZSk7XG5cbiAgICAkcHJldkhvbGRlci5odG1sKHByZXZpZXcpO1xuXG4gICAgJCgnaW5wdXRbdG9nZ2xlXScsICRwcmV2SG9sZGVyKS5rY1RvZ2dsZSgpO1xuICB9O1xuXG4gIF9oZWxwZXJzLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCA9IDI1MCwgaW1tZWRpYXRlID0gZmFsc2UpIHtcbiAgICBsZXQgdGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGxldCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbGV0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgYSBjdXN0b20gdG9vbHRpcCBmb3IgZGlzYWJsZWQgZmllbGRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkXG4gICAqL1xuICBfaGVscGVycy5kaXNhYmxlZFRUID0ge1xuICAgIGNsYXNzTmFtZTogJ2ZybWItdHQnLFxuICAgIGFkZDogZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIGxldCB0aXRsZSA9IG9wdHMubWVzc2FnZXMuZmllbGROb25FZGl0YWJsZTtcblxuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGxldCB0dCA9IHV0aWxzLm1hcmt1cCgncCcsIHRpdGxlLCB7Y2xhc3NOYW1lOiBfaGVscGVycy5kaXNhYmxlZFRULmNsYXNzTmFtZX0pO1xuICAgICAgICBmaWVsZC5hcHBlbmQodHQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgJCgnLmZybWItdHQnLCBmaWVsZCkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9oZWxwZXJzLmNsYXNzTmFtZXMgPSBmdW5jdGlvbihmaWVsZCwgcHJldmlld0RhdGEpIHtcbiAgICBsZXQgaTtcbiAgICBsZXQgdHlwZSA9IHByZXZpZXdEYXRhLnR5cGU7XG4gICAgbGV0IHN0eWxlID0gcHJldmlld0RhdGEuc3R5bGU7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGZpZWxkWzBdLnF1ZXJ5U2VsZWN0b3IoJy5mbGQtY2xhc3NOYW1lJykudmFsdWU7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBsZXQgdHlwZXMgPSB7XG4gICAgICBidXR0b246ICdidG4nLFxuICAgICAgc3VibWl0OiAnYnRuJ1xuICAgIH07XG5cbiAgICBsZXQgcHJpbWFyeVR5cGUgPSB0eXBlc1t0eXBlXTtcblxuICAgIGlmIChwcmltYXJ5VHlwZSkge1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChgKD86XnxcXHMpJHtwcmltYXJ5VHlwZX0tKC4qPykoPzpcXHN8JCkrYCwgJ2cnKTtcbiAgICAgICAgICBsZXQgbWF0Y2ggPSBjbGFzc2VzW2ldLm1hdGNoKHJlKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbGFzc2VzLnB1c2gocHJpbWFyeVR5cGUgKyAnLScgKyBzdHlsZSk7XG4gICAgICB9XG4gICAgICBjbGFzc2VzLnB1c2gocHJpbWFyeVR5cGUpO1xuICAgIH1cblxuICAgIC8vIHJldmVyc2UgdGhlIGFycmF5IHRvIHB1dCBjdXN0b20gY2xhc3NlcyBhdCBlbmQsXG4gICAgLy8gcmVtb3ZlIGFueSBkdXBsaWNhdGVzLCBjb252ZXJ0IHRvIHN0cmluZywgcmVtb3ZlIHdoaXRlc3BhY2VcbiAgICByZXR1cm4gdXRpbHMudW5pcXVlKGNsYXNzZXMpLmpvaW4oJyAnKS50cmltKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbmQgb3BlbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvdmVybGF5IEV4aXN0aW5nIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGlhbG9nICBFeGlzdGluZyBkaWFsb2dcbiAgICovXG4gIF9oZWxwZXJzLmNsb3NlQ29uZmlybSA9IGZ1bmN0aW9uKG92ZXJsYXksIGRpYWxvZykge1xuICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tYnVpbGRlci1vdmVybGF5JylbMF07XG4gICAgfVxuICAgIGlmICghZGlhbG9nKSB7XG4gICAgICBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItZGlhbG9nJylbMF07XG4gICAgfVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLm1vZGFsQ2xvc2VkKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF5b3V0IGRhdGEgYmFzZWQgb24gY29udHJvbFBvc2l0aW9uIG9wdGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbnRyb2xQb3NpdGlvbiAnbGVmdCcgb3IgJ3JpZ2h0J1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IGxheW91dCBvYmplY3RcbiAgICovXG4gIF9oZWxwZXJzLmVkaXRvckxheW91dCA9IGZ1bmN0aW9uKGNvbnRyb2xQb3NpdGlvbikge1xuICAgIGxldCBsYXlvdXRNYXAgPSB7XG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1yaWdodCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1sZWZ0J1xuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1sZWZ0JyxcbiAgICAgICAgY29udHJvbHM6ICdwdWxsLXJpZ2h0J1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gPyBsYXlvdXRNYXBbY29udHJvbFBvc2l0aW9uXSA6ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIG92ZXJsYXkgdG8gdGhlIHBhZ2UuIFVzZWQgZm9yIG1vZGFscy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gT2JqZWN0XG4gICAqL1xuICBfaGVscGVycy5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBvdmVybGF5ID0gdXRpbHMubWFya3VwKCdkaXYnLCBudWxsLCB7XG4gICAgICBjbGFzc05hbWU6ICdmb3JtLWJ1aWxkZXItb3ZlcmxheSdcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXG4gICAgb3ZlcmxheS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHJldHVybiBvdmVybGF5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDdXN0b20gY29uZmlybWF0aW9uIGRpYWxvZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBtZXNzYWdlICAgQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gIHtGdW5jfSAgeWVzQWN0aW9uIGNhbGxiYWNrIHRvIGZpcmUgaWYgdGhleSBjb25maXJtXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGNvb3JkcyAgICBsb2NhdGlvbiB0byBwdXQgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWUgQ3VzdG9tIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBkaWFsb2dcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIFJlZmVyZW5jZSB0byB0aGUgbW9kYWxcbiAgICovXG4gIF9oZWxwZXJzLmNvbmZpcm0gPSAobWVzc2FnZSwgeWVzQWN0aW9uLCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpID0+IHtcbiAgICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuICAgIGxldCBvdmVybGF5ID0gX2hlbHBlcnMuc2hvd092ZXJsYXkoKTtcbiAgICBsZXQgeWVzID0gbSgnYnV0dG9uJywgb3B0cy5tZXNzYWdlcy55ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3llcyBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtJ1xuICAgIH0pO1xuICAgIGxldCBubyA9IG0oJ2J1dHRvbicsIG9wdHMubWVzc2FnZXMubm8sIHtcbiAgICAgIGNsYXNzTmFtZTogJ25vIGJ0biBidG4tZGFuZ2VyIGJ0bi1zbSdcbiAgICB9KTtcblxuICAgIG5vLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIF9oZWxwZXJzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgeWVzLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHllc0FjdGlvbigpO1xuICAgICAgX2hlbHBlcnMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICBsZXQgYnRuV3JhcCA9IG0oJ2RpdicsIFtubywgeWVzXSwge2NsYXNzTmFtZTogJ2J1dHRvbi13cmFwJ30pO1xuXG4gICAgY2xhc3NOYW1lID0gJ2Zvcm0tYnVpbGRlci1kaWFsb2cgJyArIGNsYXNzTmFtZTtcblxuICAgIGxldCBtaW5pTW9kYWwgPSBtKCdkaXYnLCBbbWVzc2FnZSwgYnRuV3JhcF0sIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIC8gMixcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIHllcy5mb2N1cygpO1xuICAgIHJldHVybiBtaW5pTW9kYWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBvcHVwIGRpYWxvZyB0aGUgZG9lcyBub3QgcmVxdWlyZSBjb25maXJtYXRpb24uXG4gICAqIEBwYXJhbSAge1N0cmluZ3xET018QXJyYXl9ICBjb250ZW50XG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGNvb3JkcyAgICBmYWxzZSBpZiBubyBjb29yZHMgYXJlIHByb3ZpZGVkLiBXaXRob3V0IGNvb3JkaW5hdGVzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgY2VudGVyIHNjcmVlbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIGNsYXNzbmFtZSB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBkb21cbiAgICovXG4gIF9oZWxwZXJzLmRpYWxvZyA9IGZ1bmN0aW9uKGNvbnRlbnQsIGNvb3JkcyA9IGZhbHNlLCBjbGFzc05hbWUgPSAnJykge1xuICAgIF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG5cbiAgICBjbGFzc05hbWUgPSAnZm9ybS1idWlsZGVyLWRpYWxvZyAnICsgY2xhc3NOYW1lO1xuXG4gICAgbGV0IG1pbmlNb2RhbCA9IHV0aWxzLm1hcmt1cCgnZGl2JywgY29udGVudCwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgLyAyLFxuICAgICAgICBwYWdlWTogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIC8gMlxuICAgICAgfTtcbiAgICAgIG1pbmlNb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlNb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XG4gICAgfVxuXG4gICAgbWluaU1vZGFsLnN0eWxlLmxlZnQgPSBjb29yZHMucGFnZVggKyAncHgnO1xuICAgIG1pbmlNb2RhbC5zdHlsZS50b3AgPSBjb29yZHMucGFnZVkgKyAncHgnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtaW5pTW9kYWwpO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMubW9kYWxPcGVuZWQpO1xuXG4gICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCdkYXRhLWRpYWxvZycpICE9PSAtMSkge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMudmlld0RhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBtaW5pTW9kYWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGZpZWxkcyBmcm9tIHRoZSBmb3JtXG4gICAqL1xuICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG4gICAgbGV0IGZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnbGkuZm9ybS1maWVsZCcpO1xuICAgIGxldCAkZmllbGRzID0gJChmaWVsZHMpO1xuICAgIGxldCBtYXJrRW1wdHlBcnJheSA9IFtdO1xuXG4gICAgaWYgKCFmaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucHJlcGVuZCkge1xuICAgICAgbWFya0VtcHR5QXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5hcHBlbmQpIHtcbiAgICAgIG1hcmtFbXB0eUFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFtYXJrRW1wdHlBcnJheS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgIGZvcm0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgZm9ybS5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY29udGVudCA9IG9wdHMubWVzc2FnZXMuZ2V0U3RhcnRlZDtcbiAgICB9XG5cbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3JlbW92aW5nJyk7XG5cbiAgICBsZXQgb3V0ZXJIZWlnaHQgPSAwO1xuICAgICRmaWVsZHMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICBvdXRlckhlaWdodCArPSAkKCRmaWVsZHNbaV0pLm91dGVySGVpZ2h0KCkgKyAzO1xuICAgIH0pO1xuXG4gICAgZmllbGRzWzBdLnN0eWxlLm1hcmdpblRvcCA9ICgtb3V0ZXJIZWlnaHQpICsgJ3B4JztcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkZmllbGRzLnJlbW92ZSgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUJ1aWxkZXIuZm9ybUlEKS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmluZycpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0sIDQwMCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIHVzZXIgcmUtb3JkZXJzIHRoZSBlbGVtZW50cyB0aGVpciBvcmRlciBzaG91bGQgYmUgc2F2ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkY2JVTCBvdXIgbGlzdCBvZiBlbGVtZW50c1xuICAgKi9cbiAgX2hlbHBlcnMuc2V0RmllbGRPcmRlciA9IGZ1bmN0aW9uKCRjYlVMKSB7XG4gICAgaWYgKCFvcHRzLnNvcnRhYmxlQ29udHJvbHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGZpZWxkT3JkZXIgPSB7fTtcbiAgICAkY2JVTC5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgIGZpZWxkT3JkZXJbaW5kZXhdID0gJChlbGVtZW50KS5kYXRhKCdhdHRycycpLnR5cGU7XG4gICAgfSk7XG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2ZpZWxkT3JkZXInLCB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoZmllbGRPcmRlcikpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVvcmRlciB0aGUgY29udHJvbHMgaWYgdGhlIHVzZXIgaGFzIHByZXZpb3VzbHkgb3JkZXJlZCB0aGVtLlxuICAgKlxuICAgKiBAcGFyYW0gIHtBcnJheX0gZnJtYkZpZWxkc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gb3JkZXJlZCBmaWVsZHNcbiAgICovXG4gIF9oZWxwZXJzLm9yZGVyRmllbGRzID0gZnVuY3Rpb24oZnJtYkZpZWxkcykge1xuICAgIGxldCBmaWVsZE9yZGVyID0gZmFsc2U7XG4gICAgbGV0IG5ld09yZGVyRmllbGRzID0gW107XG5cbiAgICBpZiAod2luZG93LnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICBpZiAob3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICAgIGZpZWxkT3JkZXIgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZmllbGRPcmRlcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkT3JkZXIpIHtcbiAgICAgIGxldCBjb250cm9sT3JkZXIgPSBvcHRzLmNvbnRyb2xPcmRlci5jb25jYXQoZnJtYkZpZWxkcy5tYXAoZmllbGQgPT5cbiAgICAgICAgZmllbGQuYXR0cnMudHlwZSkpO1xuICAgICAgZmllbGRPcmRlciA9IHV0aWxzLnVuaXF1ZShjb250cm9sT3JkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZE9yZGVyID0gd2luZG93LkpTT04ucGFyc2UoZmllbGRPcmRlcik7XG4gICAgICBmaWVsZE9yZGVyID0gT2JqZWN0LmtleXMoZmllbGRPcmRlcikubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkT3JkZXJbaV07XG4gICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZpZWxkT3JkZXIuZm9yRWFjaCgoZmllbGRUeXBlKSA9PiB7XG4gICAgICBsZXQgZmllbGQgPSBmcm1iRmllbGRzLmZpbHRlcihmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gZmllbGQuYXR0cnMudHlwZSA9PT0gZmllbGRUeXBlO1xuICAgICAgfSlbMF07XG4gICAgICBuZXdPcmRlckZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdPcmRlckZpZWxkcy5maWx0ZXIoQm9vbGVhbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlIGZpZWxkcyBiZWluZyBlZGl0aW5nXG4gICAqIEBwYXJhbSAge09iamVjdH0gc3RhZ2VcbiAgICovXG4gIF9oZWxwZXJzLmNsb3NlQWxsRWRpdCA9ICgpID0+IHtcbiAgICBjb25zdCBmaWVsZHMgPSAkKCc+IGxpLmVkaXRpbmcnLCBmb3JtQnVpbGRlci5zdGFnZSk7XG4gICAgY29uc3QgdG9nZ2xlQnRucyA9ICQoJy50b2dnbGUtZm9ybScsIGZvcm1CdWlsZGVyLnN0YWdlKTtcbiAgICBjb25zdCBlZGl0UGFuZWxzID0gJCgnLmZybS1ob2xkZXInLCBmaWVsZHMpO1xuXG4gICAgdG9nZ2xlQnRucy5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgIGZpZWxkcy5yZW1vdmVDbGFzcygnZWRpdGluZycpO1xuICAgICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkcykuc2hvdygpO1xuICAgIGVkaXRQYW5lbHMuaGlkZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBlZGl0IG1vZGUgZm9yIHRoZSBnaXZlbiBmaWVsZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpZWxkSWRcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gYW5pbWF0ZVxuICAgKi9cbiAgX2hlbHBlcnMudG9nZ2xlRWRpdCA9IGZ1bmN0aW9uKGZpZWxkSWQsIGFuaW1hdGUgPSB0cnVlKSB7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElkKTtcbiAgICBjb25zdCB0b2dnbGVCdG4gPSAkKCcudG9nZ2xlLWZvcm0nLCBmaWVsZCk7XG4gICAgY29uc3QgZWRpdFBhbmVsID0gJCgnLmZybS1ob2xkZXInLCBmaWVsZCk7XG4gICAgZmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZycpO1xuICAgIHRvZ2dsZUJ0bi50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZCkuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICAgIGVkaXRQYW5lbC5zbGlkZVRvZ2dsZSgyNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZCkudG9nZ2xlKCk7XG4gICAgICBlZGl0UGFuZWwudG9nZ2xlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb250cm9scyBmb2xsb3cgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgX2hlbHBlcnMuc3RpY2t5Q29udHJvbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgJGNiV3JhcCA9ICQoZm9ybUJ1aWxkZXIuY29udHJvbHMpLnBhcmVudCgpO1xuICAgIGNvbnN0ICRzdGFnZVdyYXAgPSAkKGZvcm1CdWlsZGVyLnN0YWdlKS5wYXJlbnQoKTtcbiAgICBjb25zdCBjYldpZHRoID0gJGNiV3JhcC53aWR0aCgpO1xuICAgIGNvbnN0IGNiUG9zaXRpb24gPSBmb3JtQnVpbGRlci5jb250cm9scy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBsZXQgc2Nyb2xsVG9wID0gJChldnQudGFyZ2V0KS5zY3JvbGxUb3AoKTtcblxuICAgICAgaWYgKHNjcm9sbFRvcCA+ICRzdGFnZVdyYXAub2Zmc2V0KCkudG9wKSB7XG4gICAgICAgIGxldCBjYlN0eWxlID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiBjYldpZHRoLFxuICAgICAgICAgIHRvcDogJzVweCcsXG4gICAgICAgICAgYm90dG9tOiAnYXV0bycsXG4gICAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICBsZWZ0OiBjYlBvc2l0aW9uLmxlZnRcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY2JPZmZzZXQgPSAkY2JXcmFwLm9mZnNldCgpO1xuICAgICAgICBsZXQgc3RhZ2VPZmZzZXQgPSAkc3RhZ2VXcmFwLm9mZnNldCgpO1xuICAgICAgICBsZXQgY2JCb3R0b20gPSBjYk9mZnNldC50b3AgKyAkY2JXcmFwLmhlaWdodCgpO1xuICAgICAgICBsZXQgc3RhZ2VCb3R0b20gPSBzdGFnZU9mZnNldC50b3AgKyAkc3RhZ2VXcmFwLmhlaWdodCgpO1xuXG4gICAgICAgIGlmIChjYkJvdHRvbSA+IHN0YWdlQm90dG9tICYmIChjYk9mZnNldC50b3AgIT09IHN0YWdlT2Zmc2V0LnRvcCkpIHtcbiAgICAgICAgICAkY2JXcmFwLmNzcyh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBsZWZ0OiAnYXV0bydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYkJvdHRvbSA8IHN0YWdlQm90dG9tIHx8IChjYkJvdHRvbSA9PT0gc3RhZ2VCb3R0b20gJiYgY2JPZmZzZXQudG9wID4gc2Nyb2xsVG9wKSkge1xuICAgICAgICAgICRjYldyYXAuY3NzKGNiU3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtQnVpbGRlci5jb250cm9scy5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogT3BlbiBhIGRpYWxvZyB3aXRoIHRoZSBmb3JtJ3MgZGF0YVxuICAgKi9cbiAgX2hlbHBlcnMuc2hvd0RhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBjb25zdCBkYXRhID0gdXRpbHMuZXNjYXBlSHRtbChmb3JtQnVpbGRlci5mb3JtRGF0YSk7XG4gICAgY29uc3QgY29kZSA9IG0oJ2NvZGUnLCBkYXRhLCB7Y2xhc3NOYW1lOiBgZm9ybURhdGEtJHtvcHRzLmRhdGFUeXBlfWB9KTtcblxuICAgIF9oZWxwZXJzLmRpYWxvZyhtKCdwcmUnLCBjb2RlKSwgbnVsbCwgJ2RhdGEtZGlhbG9nJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGZpZWxkIGZyb20gdGhlIHN0YWdlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGZpZWxkSUQgSUQgb2YgdGhlIGZpZWxkIHRvIGJlIHJlbW92ZWRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gZmllbGRSZW1vdmVkIHJldHVybnMgdHJ1ZSBpZiBmaWVsZCBpcyByZW1vdmVkXG4gICAqL1xuICBfaGVscGVycy5yZW1vdmVGaWVsZCA9IChmaWVsZElEKSA9PiB7XG4gICAgbGV0IGZpZWxkUmVtb3ZlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuICAgIGNvbnN0IGZpZWxkcyA9IGZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1maWVsZCcpO1xuXG4gICAgaWYgKCFmaWVsZHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ05vIGZpZWxkcyB0byByZW1vdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkSUQpIHtcbiAgICAgIGxldCBhdmFpbGFibGVJZHMgPSBbXS5zbGljZS5jYWxsKGZpZWxkcykubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUud2FybignZmllbGRJRCByZXF1aXJlZCB0byB1c2UgYHJlbW92ZUZpZWxkYCBhY3Rpb24uJyk7XG4gICAgICBjb25zb2xlLndhcm4oJ0F2YWlsYWJsZSBJRHM6ICcgKyBhdmFpbGFibGVJZHMuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElEKTtcbiAgICBjb25zdCAkZmllbGQgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSUQpKTtcbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZpZWxkIG5vdCBmb3VuZCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICRmaWVsZC5zbGlkZVVwKDI1MCwgZnVuY3Rpb24oKSB7XG4gICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICAkZmllbGQucmVtb3ZlKCk7XG4gICAgICBmaWVsZFJlbW92ZWQgPSB0cnVlO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgaWYgKCFmb3JtLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBzdGFnZVdyYXAgPSBmb3JtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgICBzdGFnZVdyYXAuZGF0YXNldC5jb250ZW50ID0gb3B0cy5tZXNzYWdlcy5nZXRTdGFydGVkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMuZmllbGRSZW1vdmVkKTtcbiAgICByZXR1cm4gZmllbGRSZW1vdmVkO1xuICB9O1xuXG4gIF9oZWxwZXJzLnByb2Nlc3NBY3Rpb25CdXR0b25zID0gYnV0dG9uRGF0YSA9PiB7XG4gICAgbGV0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgbGV0IHtsYWJlbCwgZXZlbnRzLCAuLi5hdHRyc30gPSBidXR0b25EYXRhO1xuICAgIGNvbnN0IGJ1dHRvbiA9IG0oJ2J1dHRvbicsIGxhYmVsLCBhdHRycyk7XG5cbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBmb3IgKGxldCBldmVudCBpbiBldmVudHMpIHtcbiAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZ0ID0+IGV2ZW50c1tldmVudF0oZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIHJldHVybiBfaGVscGVycztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuIiwiY29uc3Qga2NUb2dnbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFRvZ2dsZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHRoZW1lOiAnZnJlc2gnLFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgb246ICdPbidcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IG9wdHMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgbGV0ICRrY1RvZ2dsZSA9ICQoJzxkaXYgY2xhc3M9XCJrYy10b2dnbGVcIi8+JylcbiAgICAgICAgLmluc2VydEFmdGVyKGVsZW1lbnQpXG4gICAgICAgIC5hcHBlbmQoZWxlbWVudCk7XG5cbiAgICAka2NUb2dnbGUudG9nZ2xlQ2xhc3MoJ29uJywgZWxlbWVudC5pcygnOmNoZWNrZWQnKSk7XG5cbiAgICBsZXQga2N0T24gPSBgPGRpdiBjbGFzcz1cImtjdC1vblwiPiR7b3B0cy5tZXNzYWdlcy5vbn08L2Rpdj5gO1xuICAgIGxldCBrY3RPZmYgPSBgPGRpdiBjbGFzcz1cImtjdC1vZmZcIj4ke29wdHMubWVzc2FnZXMub2ZmfTwvZGl2PmA7XG4gICAgbGV0IGtjdEhhbmRsZSA9ICc8ZGl2IGNsYXNzPVwia2N0LWhhbmRsZVwiPjwvZGl2Pic7XG4gICAgbGV0IGtjdElubmVyID0gYDxkaXYgY2xhc3M9XCJrY3QtaW5uZXJcIj4ke2tjdE9ufSR7a2N0SGFuZGxlfSR7a2N0T2ZmfTwvZGl2PmA7XG5cbiAgICAka2NUb2dnbGUuYXBwZW5kKGtjdElubmVyKTtcblxuICAgICRrY1RvZ2dsZS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGVsZW1lbnQuYXR0cignY2hlY2tlZCcsICFlbGVtZW50LmF0dHIoJ2NoZWNrZWQnKSk7XG4gICAgICAka2NUb2dnbGUudG9nZ2xlQ2xhc3MoJ29uJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgalF1ZXJ5LmZuLmtjVG9nZ2xlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXM7XG4gICAgcmV0dXJuIHRvZ2dsZS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gJCh0b2dnbGVbaV0pO1xuICAgICAgaWYgKGVsZW1lbnQuZGF0YSgna2NUb2dnbGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQga2NUb2dnbGUgPSBuZXcgVG9nZ2xlKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgZWxlbWVudC5kYXRhKCdrY1RvZ2dsZScsIGtjVG9nZ2xlKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2NUb2dnbGUoKTtcbiIsIi8qKlxuICogUG9seWZpbGxzIGZvciBvbGRlciBicm93c2VycyBhbmQgYWRkZWQgZnVuY3Rpb25hbGl0eVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcG9seWZpbGxzKCkge1xuICAvLyBFbGVtZW50LnJlbW92ZSgpIHBvbHlmaWxsXG4gIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIEV2ZW50IHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cuRXZlbnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudChldnQsIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH1cblxuICAvLyBPYmplY3QuYXNzaWduIHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQgPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcG9seWZpbGxzKCk7XG4iLCIvKipcbiAqIENyb3NzIGZpbGUgdXRpbGl0aWVzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzLFxuICogc29ydGluZyBhbmQgb3RoZXIgZnVuIHN0dWZmXG4gKiBAcmV0dXJuIHtPYmplY3R9IGZiVXRpbHNcbiAqL1xuLy8gZnVuY3Rpb24gdXRpbHMoKSB7XG4gIGNvbnN0IGZiVXRpbHMgPSB7fTtcblxuICAvLyBjbGVhbmVyIHN5bnRheCBmb3IgdGVzdGluZyBpbmRleE9mIGVsZW1lbnRcbiAgZmJVdGlscy5pbkFycmF5ID0gZnVuY3Rpb24obmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgT2JqZWN0IHRyaW1tZWQgb2YgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnRyaW1PYmogPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCB4bWxSZW1vdmUgPSBbXG4gICAgICBudWxsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgJycsXG4gICAgICBmYWxzZSxcbiAgICAgICdmYWxzZSdcbiAgICBdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChmYlV0aWxzLmluQXJyYXkoYXR0cnNbYXR0cl0sIHhtbFJlbW92ZSkpIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGF0dHJzW2F0dHJdKSkge1xuICAgICAgICBpZiAoIWF0dHJzW2F0dHJdLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvKipcbiAgICogVGVzdCBpZiBhdHRyaWJ1dGUgaXMgYSB2YWxpZCBIVE1MIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGZiVXRpbHMudmFsaWRBdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICAgIGxldCBpbnZhbGlkID0gW1xuICAgICAgJ3ZhbHVlcycsXG4gICAgICAnZW5hYmxlT3RoZXInLFxuICAgICAgJ290aGVyJyxcbiAgICAgICdsYWJlbCcsXG4gICAgICAvLyAnc3R5bGUnLFxuICAgICAgJ3N1YnR5cGUnXG4gICAgXTtcbiAgICByZXR1cm4gIWZiVXRpbHMuaW5BcnJheShhdHRyLCBpbnZhbGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBhdHRycyBvYmplY3QgaW50byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIG9iamVjdCBvZiBhdHRyaWJ1dGVzIGZvciBtYXJrdXBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5hdHRyU3RyaW5nID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpICYmIGZiVXRpbHMudmFsaWRBdHRyKGF0dHIpKSB7XG4gICAgICAgIGF0dHIgPSBmYlV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIubmFtZSArIGF0dHIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlcy5qb2luKCcgJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXR0cmlidXRlcyB0byBtYXJrdXAgc2FmZSBzdHJpbmdzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMuc2FmZUF0dHIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShuYW1lKTtcbiAgICBsZXQgdmFsU3RyaW5nO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsU3RyaW5nID0gZmJVdGlscy5lc2NhcGVBdHRyKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5yZXBsYWNlKCcsJywgJyAnKS50cmltKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUgPyBgPVwiJHt2YWxTdHJpbmd9XCJgIDogJyc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgZmJVdGlscy5zYWZlQXR0ck5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbGV0IHNhZmVBdHRyID0ge1xuICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnXG4gICAgfTtcblxuICAgIHJldHVybiBzYWZlQXR0cltuYW1lXSB8fCBmYlV0aWxzLmh5cGhlbkNhc2UobmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5ncyBpbnRvIGxvd2VyY2FzZS1oeXBoZW5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5oeXBoZW5DYXNlID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL14tKy9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnZlcnQgYSBoeXBoZW5hdGVkIHN0cmluZyB0byBjYW1lbENhc2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5jYW1lbENhc2UgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbihtLCB3KSB7XG4gICAgICByZXR1cm4gdy50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgd3JhcHBlciB3aGVyZSBuZWVkZWRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgdGFnXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheXxPYmplY3R9IGNvbnRlbnQgd2Ugd3JhcCB0aGlzXG4gICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgIGF0dHJzXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJzID0ge30pIHtcbiAgICBsZXQgY29udGVudFR5cGUsXG4gICAgICBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgIGdldENvbnRlbnRUeXBlID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb250ZW50KSA/ICdhcnJheScgOiB0eXBlb2YgY29udGVudDtcbiAgICAgIH0sXG4gICAgICBhcHBlbmRDb250ZW50ID0ge1xuICAgICAgICBzdHJpbmc6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICBmaWVsZC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9LFxuICAgICAgICBvYmplY3Q6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFycmF5OiBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZW50VHlwZSA9IGdldENvbnRlbnRUeXBlKGNvbnRlbnRbaV0pO1xuICAgICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGxldCBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGVudFR5cGUgPSBnZXRDb250ZW50VHlwZShjb250ZW50KTtcblxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXS5jYWxsKHRoaXMsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSBleDoge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgbGV0IGF0dHJzID0gZWxlbS5hdHRyaWJ1dGVzO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgZmJVdGlscy5mb3JFYWNoKGF0dHJzLCBhdHRyID0+IHtcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XG4gICAgICBpZiAoYXR0clZhbC5tYXRjaCgvZmFsc2V8dHJ1ZS9nKSkge1xuICAgICAgICBhdHRyVmFsID0gKGF0dHJWYWwgPT09ICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xuICAgICAgICBhdHRyVmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0clZhbCkge1xuICAgICAgICBkYXRhW2F0dHJzW2F0dHJdLm5hbWVdID0gYXR0clZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZpZWxkIG9wdGlvbnMgdG8gb3B0aW9uRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgIG9wdGlvbkRhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKSxcbiAgICAgIG9wdGlvbkRhdGEgPSB7fSxcbiAgICAgIGRhdGEgPSBbXTtcblxuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wdGlvbkRhdGEgPSBmYlV0aWxzLnBhcnNlQXR0cnMob3B0aW9uc1tpXSk7XG4gICAgICAgIG9wdGlvbkRhdGEubGFiZWwgPSBvcHRpb25zW2ldLnRleHRDb250ZW50O1xuICAgICAgICBkYXRhLnB1c2gob3B0aW9uRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHhtbFN0cmluZ1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBmb3JtRGF0YSBhcnJheVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKSxcbiAgICAgIGZvcm1EYXRhID0gW107XG5cbiAgICBpZiAoeG1sKSB7XG4gICAgICBsZXQgZmllbGRzID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWVsZCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IGZiVXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuXG4gICAgICAgIGlmIChmaWVsZHNbaV0uY2hpbGRyZW4gJiYgZmllbGRzW2ldLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBmYlV0aWxzLnBhcnNlT3B0aW9ucyhmaWVsZHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogRXNjYXBlIG1hcmt1cCBzbyBpdCBjYW4gYmUgZGlzcGxheWVkIHJhdGhlciB0aGFuIHJlbmRlcmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBtYXJrdXBcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIGVzY2FwZWQgaHRtbFxuICAgKi9cbiAgZmJVdGlscy5lc2NhcGVIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50ID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC5pbm5lckhUTUw7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGFuIGF0dHJpYnV0ZVxuICBmYlV0aWxzLmVzY2FwZUF0dHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgbWF0Y2ggPSB7XG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OydcbiAgICB9O1xuXG4gICAgY29uc3QgcmVwbGFjZVRhZyA9IHRhZyA9PiBtYXRjaFt0YWddIHx8IHRhZztcblxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpID8gc3RyLnJlcGxhY2UoL1tcIiY8Pl0vZywgcmVwbGFjZVRhZykgOiBzdHI7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGF0dHJpYnV0ZXNcbiAgZmJVdGlscy5lc2NhcGVBdHRycyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGF0dHJzW2F0dHJdID0gZmJVdGlscy5lc2NhcGVBdHRyKGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLy8gZm9yRWFjaCB0aGF0IGNhbiBiZSB1c2VkIG9uIG5vZGVMaXN0XG4gIGZiVXRpbHMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7IC8vIHBhc3NlcyBiYWNrIHN0dWZmIHdlIG5lZWRcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtICB7QXJyYXl9IGFyckFyZyBhcnJheSB3aXRoIHBvc3NpYmxlIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBhcnJheSB3aXRoIG9ubHkgdW5pcXVlIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGVsZW0sIHBvcywgYXJyKSA9PiB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWxlbSkgPT09IHBvcztcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgcHJldmlldyBtYXJrdXBcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgZmllbGREYXRhXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG9wdHNcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gcHJldmlld1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICBwcmV2aWV3IG1hcmt1cCBmb3IgZmllbGRcbiAgICovXG4gIGZiVXRpbHMuZmllbGRSZW5kZXIgPSBmdW5jdGlvbihmaWVsZERhdGEsIG9wdHMsIHByZXZpZXcgPSBmYWxzZSkge1xuICAgICAgbGV0IGZpZWxkTWFya3VwID0gJyc7XG4gICAgICBsZXQgZmllbGRMYWJlbCA9ICcnO1xuICAgICAgbGV0IG9wdGlvbnNNYXJrdXAgPSAnJztcbiAgICAgIGxldCBmaWVsZExhYmVsVGV4dCA9IGZpZWxkRGF0YS5sYWJlbCB8fCAnJztcbiAgICAgIGxldCBmaWVsZERlc2MgPSBmaWVsZERhdGEuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICBsZXQgZmllbGRSZXF1aXJlZCA9ICcnO1xuICAgICAgbGV0IGZpZWxkT3B0aW9ucyA9IGZpZWxkRGF0YS52YWx1ZXM7XG5cbiAgICAgIGZpZWxkRGF0YS5uYW1lID0gcHJldmlldyA/IGZpZWxkRGF0YS5uYW1lICsgJy1wcmV2aWV3JyA6IGZpZWxkRGF0YS5uYW1lO1xuICAgICAgZmllbGREYXRhLmlkID0gZmllbGREYXRhLm5hbWU7XG4gICAgICBpZiAoZmllbGREYXRhLm11bHRpcGxlKSB7XG4gICAgICAgIGZpZWxkRGF0YS5uYW1lID0gZmllbGREYXRhLm5hbWUgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBmaWVsZERhdGEudHlwZSA9IGZpZWxkRGF0YS5zdWJ0eXBlIHx8IGZpZWxkRGF0YS50eXBlO1xuXG4gICAgICBpZiAoZmllbGREYXRhLnJlcXVpcmVkKSB7XG4gICAgICAgIGZpZWxkRGF0YS5yZXF1aXJlZCA9IG51bGw7XG4gICAgICAgIGZpZWxkRGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgICAgICBmaWVsZFJlcXVpcmVkID0gJzxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPic7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZERhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKGZpZWxkRGVzYykge1xuICAgICAgICAgIGZpZWxkRGVzYyA9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke2ZpZWxkRGVzY31cIj4/PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtmaWVsZERhdGEuaWR9XCIgY2xhc3M9XCJmYi0ke2ZpZWxkRGF0YS50eXBlfS1sYWJlbFwiPiR7ZmllbGRMYWJlbFRleHR9ICR7ZmllbGRSZXF1aXJlZH0gJHtmaWVsZERlc2N9PC9sYWJlbD5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgZmllbGRMYWJlbFZhbCA9IGZpZWxkRGF0YS5sYWJlbDtcblxuICAgICAgZGVsZXRlIGZpZWxkRGF0YS5sYWJlbDtcbiAgICAgIGRlbGV0ZSBmaWVsZERhdGEuZGVzY3JpcHRpb247XG5cbiAgICAgIGxldCBmaWVsZERhdGFTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcoZmllbGREYXRhKTtcblxuICAgICAgc3dpdGNoIChmaWVsZERhdGEudHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNhc2UgJ3JpY2gtdGV4dCc6XG4gICAgICAgICAgZGVsZXRlIGZpZWxkRGF0YS50eXBlO1xuICAgICAgICAgIGxldCBmaWVsZFZhbCA9IGZpZWxkRGF0YS52YWx1ZSB8fCAnJztcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PHRleHRhcmVhICR7ZmllbGREYXRhU3RyaW5nfT4ke2ZpZWxkVmFsfTwvdGV4dGFyZWE+YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICBsZXQgb3B0aW9uQXR0cnNTdHJpbmc7XG4gICAgICAgICAgZmllbGREYXRhLnR5cGUgPSBmaWVsZERhdGEudHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG5cbiAgICAgICAgICBpZiAoZmllbGRPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+JHtmaWVsZERhdGEucGxhY2Vob2xkZXJ9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKCFmaWVsZE9wdGlvbnNbaV0uc2VsZWN0ZWQgfHwgZmllbGREYXRhLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGZpZWxkT3B0aW9uc1tpXS5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWZpZWxkT3B0aW9uc1tpXS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGZpZWxkT3B0aW9uc1tpXS5sYWJlbCA9ICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9wdGlvbkF0dHJzU3RyaW5nID0gZmJVdGlscy5hdHRyU3RyaW5nKGZpZWxkT3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxvcHRpb24gJHtvcHRpb25BdHRyc1N0cmluZ30+JHtmaWVsZE9wdGlvbnNbaV0ubGFiZWx9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PHNlbGVjdCAke2ZpZWxkRGF0YVN0cmluZ30+JHtvcHRpb25zTWFya3VwfTwvc2VsZWN0PmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94LWdyb3VwJzpcbiAgICAgICAgY2FzZSAncmFkaW8tZ3JvdXAnOlxuICAgICAgICAgIGxldCBvcHRpb25BdHRycztcbiAgICAgICAgICBmaWVsZERhdGEudHlwZSA9IGZpZWxkRGF0YS50eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKTtcblxuICAgICAgICAgIGlmIChmaWVsZERhdGEudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgZmllbGREYXRhLm5hbWUgPSBmaWVsZERhdGEubmFtZSArICdbXSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZpZWxkT3B0aW9ucykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbkF0dHJzU3RyaW5nO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe3ZhbHVlOiAnJywgbGFiZWw6ICcnfSwgZmllbGREYXRhLCBmaWVsZE9wdGlvbnNbaV0pO1xuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25BdHRycy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9wdGlvbkF0dHJzLmlkID0gZmllbGREYXRhLmlkICsgJy0nICsgaTtcbiAgICAgICAgICAgICAgb3B0aW9uQXR0cnNTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcob3B0aW9uQXR0cnMpO1xuICAgICAgICAgICAgICBvcHRpb25zTWFya3VwICs9IGA8aW5wdXQgJHtvcHRpb25BdHRyc1N0cmluZ30gLz4gPGxhYmVsIGZvcj1cIiR7b3B0aW9uQXR0cnMuaWR9XCI+JHtvcHRpb25BdHRycy5sYWJlbH08L2xhYmVsPjxicj5gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLm90aGVyKSB7XG4gICAgICAgICAgICAgIGxldCBvdGhlck9wdGlvbkF0dHJzID0ge1xuICAgICAgICAgICAgICAgIGlkOiBmaWVsZERhdGEuaWQgKyAnLScgKyAnb3RoZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZmllbGREYXRhLmNsYXNzTmFtZSArICcgb3RoZXItb3B0aW9uJyxcbiAgICAgICAgICAgICAgICBvbmNsaWNrOiBgZmJVdGlscy5vdGhlck9wdGlvbkNCKCcke2ZpZWxkRGF0YS5pZH0tb3RoZXInKWBcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBvcHRpb25BdHRyc1N0cmluZyA9IGZiVXRpbHMuYXR0clN0cmluZyhPYmplY3QuYXNzaWduKHt9LCBmaWVsZERhdGEsIG90aGVyT3B0aW9uQXR0cnMpKTtcblxuICAgICAgICAgICAgICBvcHRpb25zTWFya3VwICs9IGA8aW5wdXQgJHtvcHRpb25BdHRyc1N0cmluZ30gLz4gPGxhYmVsIGZvcj1cIiR7b3RoZXJPcHRpb25BdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXMub3RoZXJ9PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIiR7ZmllbGREYXRhLm5hbWV9XCIgaWQ9XCIke290aGVyT3B0aW9uQXR0cnMuaWR9LXZhbHVlXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgLz5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PGRpdiBjbGFzcz1cIiR7ZmllbGREYXRhLnR5cGV9LWdyb3VwXCI+JHtvcHRpb25zTWFya3VwfTwvZGl2PmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICBjYXNlICd0ZWwnOlxuICAgICAgICBjYXNlICdhdXRvY29tcGxldGUnOlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYCR7ZmllbGRMYWJlbH0gPGlucHV0ICR7ZmllbGREYXRhU3RyaW5nfT5gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfSA8aW5wdXQgJHtmaWVsZERhdGFTdHJpbmd9PiAke29wdHMubWVzc2FnZXMuc2VsZWN0Q29sb3J9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgY2FzZSAnc3VibWl0JzpcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGA8YnV0dG9uICR7ZmllbGREYXRhU3RyaW5nfT4ke2ZpZWxkTGFiZWxWYWx9PC9idXR0b24+YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYDxpbnB1dCAke2ZpZWxkRGF0YVN0cmluZ30+ICR7ZmllbGRMYWJlbH1gO1xuXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YS50b2dnbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGREYXRhLmlkKSkua2NUb2dnbGUoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYDwke2ZpZWxkRGF0YS50eXBlfSAke2ZpZWxkRGF0YVN0cmluZ30+JHtmaWVsZExhYmVsVmFsfTwvJHtmaWVsZERhdGEudHlwZX0+YDtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkRGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gZmllbGREYXRhLmlkID8gYGZiLSR7ZmllbGREYXRhLnR5cGV9IGZvcm0tZ3JvdXAgZmllbGQtJHtmaWVsZERhdGEuaWR9YCA6ICcnO1xuICAgICAgICBmaWVsZE1hcmt1cCA9IGZiVXRpbHMubWFya3VwKCdkaXYnLCBmaWVsZE1hcmt1cCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRNYXJrdXAgPSBmYlV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBmaWVsZERhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGRNYXJrdXA7XG4gICAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIG90aGVyIG9wdGlvbi5cbiAgICogVG9nZ2xlcyB0aGUgaGlkZGVuIHRleHQgYXJlYSBmb3IgXCJvdGhlclwiIG9wdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBvdGhlcklkIGlkIG9mIHRoZSBcIm90aGVyXCIgb3B0aW9uIGlucHV0XG4gICAqL1xuICBmYlV0aWxzLm90aGVyT3B0aW9uQ0IgPSAob3RoZXJJZCkgPT4ge1xuICAgIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdGhlcklkKTtcbiAgICBjb25zdCBvdGhlcklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvdGhlcklkfS12YWx1ZWApO1xuXG4gICAgaWYgKG90aGVySW5wdXQuY2hlY2tlZCkge1xuICAgICAgb3RoZXJJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3RoZXJJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHVuY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgKi9cbiAgZmJVdGlscy5jYXBpdGFsaXplID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxiXFx3L2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICB9O1xuLy8gICByZXR1cm4gZmJVdGlscztcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmYlV0aWxzO1xuIl19
