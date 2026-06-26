(function() {	try {		if (typeof document != "undefined") {			var elementStyle = document.createElement("style");			elementStyle.setAttribute("class", "formBuilder-injected-style");			elementStyle.appendChild(document.createTextNode(".rendered-form * {\n  box-sizing: border-box;\n}\n.rendered-form.formbuilder-embedded-bootstrap button,\n.rendered-form.formbuilder-embedded-bootstrap input,\n.rendered-form.formbuilder-embedded-bootstrap select,\n.rendered-form.formbuilder-embedded-bootstrap textarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.rendered-form.formbuilder-embedded-bootstrap input {\n  line-height: normal;\n}\n.rendered-form.formbuilder-embedded-bootstrap textarea {\n  overflow: auto;\n}\n.rendered-form.formbuilder-embedded-bootstrap button,\n.rendered-form.formbuilder-embedded-bootstrap input,\n.rendered-form.formbuilder-embedded-bootstrap select,\n.rendered-form.formbuilder-embedded-bootstrap textarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn-group > .btn {\n  position: relative;\n  float: left;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .btn + .btn,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .btn + .btn-group,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .btn-group + .btn,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn-group > .btn:last-child:not(:first-child),\n.rendered-form.formbuilder-embedded-bootstrap .btn-group > .dropdown-toggle:not(:first-child),\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .input-group .form-control:last-child,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .input-group-addon:last-child,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .input-group-btn:first-child > .btn-group:not(:first-child) > .btn,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .input-group-btn:first-child > .btn:not(:first-child),\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .input-group-btn:last-child > .btn,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .input-group-btn:last-child > .btn-group > .btn,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group .input-group-btn:last-child > .dropdown-toggle {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn-group > .btn.active,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group > .btn:active,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group > .btn:focus,\n.rendered-form.formbuilder-embedded-bootstrap .btn-group > .btn:hover {\n  z-index: 2;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  background-image: none;\n  border-radius: 4px;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn.btn-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn.btn-xs {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn.active, .rendered-form.formbuilder-embedded-bootstrap .btn.btn-active, .rendered-form.formbuilder-embedded-bootstrap .btn:active {\n  background-image: none;\n}\n.rendered-form.formbuilder-embedded-bootstrap .input-group .form-control:last-child,\n.rendered-form.formbuilder-embedded-bootstrap .input-group-addon:last-child,\n.rendered-form.formbuilder-embedded-bootstrap .input-group-btn:first-child > .btn-group:not(:first-child) > .btn,\n.rendered-form.formbuilder-embedded-bootstrap .input-group-btn:first-child > .btn:not(:first-child),\n.rendered-form.formbuilder-embedded-bootstrap .input-group-btn:last-child > .btn,\n.rendered-form.formbuilder-embedded-bootstrap .input-group-btn:last-child > .btn-group > .btn,\n.rendered-form.formbuilder-embedded-bootstrap .input-group-btn:last-child > .dropdown-toggle {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.rendered-form.formbuilder-embedded-bootstrap .input-group .form-control,\n.rendered-form.formbuilder-embedded-bootstrap .input-group-addon,\n.rendered-form.formbuilder-embedded-bootstrap .input-group-btn {\n  display: table-cell;\n}\n.rendered-form.formbuilder-embedded-bootstrap .input-group-lg > .form-control,\n.rendered-form.formbuilder-embedded-bootstrap .input-group-lg > .input-group-addon,\n.rendered-form.formbuilder-embedded-bootstrap .input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.rendered-form.formbuilder-embedded-bootstrap .input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.rendered-form.formbuilder-embedded-bootstrap .input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.rendered-form.formbuilder-embedded-bootstrap .form-control,\n.rendered-form.formbuilder-embedded-bootstrap output {\n  font-size: 14px;\n  line-height: 1.42857143;\n  display: block;\n}\n.rendered-form.formbuilder-embedded-bootstrap textarea.form-control {\n  height: auto;\n}\n.rendered-form.formbuilder-embedded-bootstrap .form-control {\n  height: 34px;\n  display: block;\n  width: 100%;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n}\n.rendered-form.formbuilder-embedded-bootstrap .form-control:focus {\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.rendered-form.formbuilder-embedded-bootstrap .form-group {\n  margin-left: 0px;\n  margin-bottom: 15px;\n}\n.rendered-form.formbuilder-embedded-bootstrap .btn,\n.rendered-form.formbuilder-embedded-bootstrap .form-control {\n  background-image: none;\n}\n.rendered-form.formbuilder-embedded-bootstrap .pull-right {\n  float: right;\n}\n.rendered-form.formbuilder-embedded-bootstrap .pull-left {\n  float: left;\n}\n.rendered-form .formbuilder-required,\n.rendered-form .required-asterisk {\n  color: #c10000;\n}\n.rendered-form .checkbox-group,\n.rendered-form .radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.rendered-form .checkbox-group.checkbox-group--inline, .rendered-form .checkbox-group.radio-group--inline,\n.rendered-form .radio-group.checkbox-group--inline,\n.rendered-form .radio-group.radio-group--inline {\n  flex-direction: row;\n}\n.rendered-form .formbuilder-checkbox-group input[type=checkbox],\n.rendered-form .formbuilder-checkbox-group input[type=radio],\n.rendered-form .formbuilder-radio-group input[type=checkbox],\n.rendered-form .formbuilder-radio-group input[type=radio] {\n  margin: 0 4px 0 0;\n}\n.rendered-form .formbuilder-autocomplete-list {\n  background-color: #fff;\n  display: none;\n  list-style: none;\n  padding: 0;\n  border: 1px solid #ccc;\n  border-width: 0 1px 1px;\n  position: absolute;\n  z-index: 20;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.rendered-form .formbuilder-autocomplete-list li {\n  display: none;\n  cursor: default;\n  padding: 5px;\n  margin: 0;\n  transition: background-color 200ms ease-in-out;\n}\n.rendered-form .formbuilder-autocomplete-list li:hover, .rendered-form .formbuilder-autocomplete-list li.active-option {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.rendered-form *[tooltip] {\n  position: relative;\n}\n.rendered-form *[tooltip]:hover::after {\n  background: rgba(0, 0, 0, 0.9);\n  border-radius: 5px 5px 5px 0;\n  bottom: 23px;\n  color: #fff;\n  content: attr(tooltip);\n  padding: 10px 5px;\n  position: absolute;\n  z-index: 98;\n  left: 2px;\n  width: 230px;\n  text-shadow: none;\n  font-size: 12px;\n  line-height: 1.5em;\n  cursor: default;\n}\n.rendered-form *[tooltip]:hover::before {\n  border: solid;\n  border-color: #222 transparent;\n  border-width: 6px 6px 0;\n  bottom: 17px;\n  content: \"\";\n  left: 2px;\n  position: absolute;\n  z-index: 99;\n  cursor: default;\n}\n.rendered-form .tooltip-element {\n  visibility: visible;\n  color: #fff;\n  background: #000;\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  display: inline-block;\n  text-align: center;\n  line-height: 16px;\n  margin: 0 5px;\n  font-size: 12px;\n  cursor: default;\n}\n.rendered-form .kc-toggle {\n  display: flex;\n  align-items: center;\n}\n.rendered-form .kc-toggle span {\n  position: relative;\n  width: 48px;\n  height: 24px;\n  background: #e6e6e6;\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid #cccccc;\n  padding: 2px;\n  overflow: hidden;\n  margin-right: 5px;\n  will-change: transform;\n}\n.rendered-form .kc-toggle span::after, .rendered-form .kc-toggle span::before {\n  position: absolute;\n  display: inline-block;\n  top: 0;\n}\n.rendered-form .kc-toggle span::after {\n  position: relative;\n  content: \"\";\n  width: 50%;\n  height: calc(100% - 2px);\n  left: 0;\n  border-radius: 3px;\n  background: linear-gradient(to bottom, white 0%, #ccc 100%);\n  border: 1px solid #999999;\n  transition: transform 100ms;\n  transform: translateX(0);\n}\n.rendered-form .kc-toggle span::before {\n  border-radius: 4px;\n  top: 2px;\n  left: 2px;\n  content: \"\";\n  width: calc(100% - 4px);\n  height: 18px;\n  box-shadow: 0 0 1px 1px #b3b3b3 inset;\n  background-color: transparent;\n}\n.rendered-form .kc-toggle input {\n  height: 0;\n  overflow: hidden;\n  width: 0;\n  opacity: 0;\n  pointer-events: none;\n  margin: 0;\n}\n.rendered-form .kc-toggle input:checked + span::after {\n  transform: translateX(calc(100% - 4px));\n}\n.rendered-form .kc-toggle input:checked + span::before {\n  background-color: #6fc665;\n}\n.rendered-form label {\n  font-weight: normal;\n}\n.rendered-form .form-group .formbuilder-required {\n  color: #c10000;\n}\n.rendered-form .other-option:checked + label input {\n  display: inline-block;\n}\n.rendered-form .other-val {\n  margin-left: 5px;\n  display: none;\n}\n.rendered-form .form-control.number {\n  width: auto;\n}\n.rendered-form .form-control[type=color] {\n  width: 60px;\n  padding: 2px;\n  display: inline-block;\n}\n.rendered-form .form-control[multiple] {\n  height: auto;\n}/*$vite$:1*/"));			document.head.appendChild(elementStyle);		}	} catch (e) {		console.error("vite-plugin-css-injected-by-js", e);	}})();
(function($) {
	"use strict";
	/*!
	* jQuery formRender: https://formbuilder.online/
	Version: 3.23.0
	Author: Kevin Chappell <kevin.b.chappell@gmail.com>
	*/
	(function(factory) {
		typeof define === "function" && define.amd ? define([], factory) : factory();
	})(function() {
		//#region \0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		/*!
		* mi18n - https://github.com/Draggable/mi18n
		* Version: 0.4.7
		* Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
		*/
		/*!
		* Determine if an object is a Buffer
		*
		* @author   Feross Aboukhadijeh <https://feross.org>
		* @license  MIT
		*/
		//#endregion
		//#region src/js/sanitizer.js
		var import_mi18n_min = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
			module.exports = function(e) {
				var t = {};
				function n(r) {
					if (t[r]) return t[r].exports;
					var o = t[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
				}
				return n.m = e, n.c = t, n.d = function(e, t, r) {
					n.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: r
					});
				}, n.r = function(e) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
				}, n.t = function(e, t) {
					if (1 & t && (e = n(e)), 8 & t) return e;
					if (4 & t && "object" == typeof e && e && e.__esModule) return e;
					var r = Object.create(null);
					if (n.r(r), Object.defineProperty(r, "default", {
						enumerable: !0,
						value: e
					}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
						return e[t];
					}.bind(null, o));
					return r;
				}, n.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e.default;
					} : function() {
						return e;
					};
					return n.d(t, "a", t), t;
				}, n.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t);
				}, n.p = "", n(n.s = 7);
			}([
				function(e, t, n) {
					"use strict";
					var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e;
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
					}, o = n(2), i = n(10), s = Object.prototype.toString;
					function a(e) {
						return "[object Array]" === s.call(e);
					}
					function u(e) {
						return null !== e && "object" === (void 0 === e ? "undefined" : r(e));
					}
					function c(e) {
						return "[object Function]" === s.call(e);
					}
					function f(e, t) {
						if (null !== e && void 0 !== e) if ("object" !== (void 0 === e ? "undefined" : r(e)) && (e = [e]), a(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
						else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
					}
					e.exports = {
						isArray: a,
						isArrayBuffer: function(e) {
							return "[object ArrayBuffer]" === s.call(e);
						},
						isBuffer: i,
						isFormData: function(e) {
							return "undefined" != typeof FormData && e instanceof FormData;
						},
						isArrayBufferView: function(e) {
							return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
						},
						isString: function(e) {
							return "string" == typeof e;
						},
						isNumber: function(e) {
							return "number" == typeof e;
						},
						isObject: u,
						isUndefined: function(e) {
							return void 0 === e;
						},
						isDate: function(e) {
							return "[object Date]" === s.call(e);
						},
						isFile: function(e) {
							return "[object File]" === s.call(e);
						},
						isBlob: function(e) {
							return "[object Blob]" === s.call(e);
						},
						isFunction: c,
						isStream: function(e) {
							return u(e) && c(e.pipe);
						},
						isURLSearchParams: function(e) {
							return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
						},
						isStandardBrowserEnv: function() {
							return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
						},
						forEach: f,
						merge: function e() {
							var t = {};
							function n(n, o) {
								"object" === r(t[o]) && "object" === (void 0 === n ? "undefined" : r(n)) ? t[o] = e(t[o], n) : t[o] = n;
							}
							for (var o = 0, i = arguments.length; o < i; o++) f(arguments[o], n);
							return t;
						},
						extend: function(e, t, n) {
							return f(t, function(t, r) {
								e[r] = n && "function" == typeof t ? o(t, n) : t;
							}), e;
						},
						trim: function(e) {
							return e.replace(/^\s*/, "").replace(/\s*$/, "");
						}
					};
				},
				function(e, t, n) {
					"use strict";
					(function(t) {
						var r = n(0), o = n(13), i = { "Content-Type": "application/x-www-form-urlencoded" };
						function s(e, t) {
							!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
						}
						var a = {
							adapter: function() {
								var e;
								return "undefined" != typeof XMLHttpRequest ? e = n(3) : void 0 !== t && (e = n(3)), e;
							}(),
							transformRequest: [function(e, t) {
								return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
							}],
							transformResponse: [function(e) {
								if ("string" == typeof e) try {
									e = JSON.parse(e);
								} catch (e) {}
								return e;
							}],
							timeout: 0,
							xsrfCookieName: "XSRF-TOKEN",
							xsrfHeaderName: "X-XSRF-TOKEN",
							maxContentLength: -1,
							validateStatus: function(e) {
								return e >= 200 && e < 300;
							},
							headers: { common: { Accept: "application/json, text/plain, */*" } }
						};
						r.forEach([
							"delete",
							"get",
							"head"
						], function(e) {
							a.headers[e] = {};
						}), r.forEach([
							"post",
							"put",
							"patch"
						], function(e) {
							a.headers[e] = r.merge(i);
						}), e.exports = a;
					}).call(this, n(12));
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e, t) {
						return function() {
							for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
							return e.apply(t, n);
						};
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0), o = n(14), i = n(16), s = n(17), a = n(18), u = n(4), c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(19);
					e.exports = function(e) {
						return new Promise(function(t, f) {
							var l = e.data, p = e.headers;
							r.isFormData(l) && delete p["Content-Type"];
							var d = new XMLHttpRequest(), h = "onreadystatechange", g = !1;
							if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || a(e.url) || (d = new window.XDomainRequest(), h = "onload", g = !0, d.onprogress = function() {}, d.ontimeout = function() {}), e.auth) {
								var m = e.auth.username || "", y = e.auth.password || "";
								p.Authorization = "Basic " + c(m + ":" + y);
							}
							if (d.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d[h] = function() {
								if (d && (4 === d.readyState || g) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
									var n = "getAllResponseHeaders" in d ? s(d.getAllResponseHeaders()) : null;
									o(t, f, {
										data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
										status: 1223 === d.status ? 204 : d.status,
										statusText: 1223 === d.status ? "No Content" : d.statusText,
										headers: n,
										config: e,
										request: d
									}), d = null;
								}
							}, d.onerror = function() {
								f(u("Network Error", e, null, d)), d = null;
							}, d.ontimeout = function() {
								f(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null;
							}, r.isStandardBrowserEnv()) {
								var v = n(20), w = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
								w && (p[e.xsrfHeaderName] = w);
							}
							if ("setRequestHeader" in d && r.forEach(p, function(e, t) {
								void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e);
							}), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
								d.responseType = e.responseType;
							} catch (t) {
								if ("json" !== e.responseType) throw t;
							}
							"function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
								d && (d.abort(), f(e), d = null);
							}), void 0 === l && (l = null), d.send(l);
						});
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(15);
					e.exports = function(e, t, n, o, i) {
						return r(new Error(e), t, n, o, i);
					};
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e) {
						return !(!e || !e.__CANCEL__);
					};
				},
				function(e, t, n) {
					"use strict";
					function r(e) {
						this.message = e;
					}
					r.prototype.toString = function() {
						return "Cancel" + (this.message ? ": " + this.message : "");
					}, r.prototype.__CANCEL__ = !0, e.exports = r;
				},
				function(e, t, n) {
					"use strict";
					t.__esModule = !0, t.I18N = void 0;
					var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e;
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
					}, o = function() {
						function e(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
							}
						}
						return function(t, n, r) {
							return n && e(t.prototype, n), r && e(t, r), t;
						};
					}(), i = n(8), s = {
						extension: ".lang",
						location: "assets/lang/",
						langs: ["en-US"],
						locale: "en-US",
						override: {}
					};
					t.default = new (t.I18N = (function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
							(function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
							})(this, e), this.langs = Object.create(null), this.loaded = [], this.processConfig(t);
						}
						return e.prototype.processConfig = function(e) {
							var t = this, n = Object.assign({}, s, e), r = n.location, o = function(e, t) {
								var n = {};
								for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
								return n;
							}(n, ["location"]), i = r.replace(/\/?$/, "/");
							this.config = Object.assign({}, { location: i }, o);
							var a = this.config, u = a.override, c = a.preloaded, f = void 0 === c ? {} : c, l = Object.entries(this.langs).concat(Object.entries(u || f));
							this.langs = l.reduce(function(e, n) {
								var r = n[0], o = n[1];
								return e[r] = t.applyLanguage.call(t, r, o), e;
							}, {}), this.locale = this.config.locale || this.config.langs[0];
						}, e.prototype.init = function(e) {
							return this.processConfig.call(this, Object.assign({}, this.config, e)), this.setCurrent(this.locale);
						}, e.prototype.addLanguage = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							t = "string" == typeof t ? this.processFile.call(this, t) : t, this.applyLanguage.call(this, e, t), this.config.langs.push("locale");
						}, e.prototype.getValue = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
							return this.langs[t] && this.langs[t][e] || this.getFallbackValue(e);
						}, e.prototype.getFallbackValue = function(e) {
							var t = Object.values(this.langs).find(function(t) {
								return t[e];
							});
							return t && t[e];
						}, e.prototype.makeSafe = function(e) {
							var t = {
								"{": "\\{",
								"}": "\\}",
								"|": "\\|"
							};
							return e = e.replace(/\{|\}|\|/g, function(e) {
								return t[e];
							}), new RegExp(e, "g");
						}, e.prototype.put = function(e, t) {
							return this.current[e] = t;
						}, e.prototype.get = function(e, t) {
							var n = this.getValue(e);
							if (n) {
								var o = n.match(/\{[^}]+?\}/g), i = void 0;
								if (t && o) if ("object" === (void 0 === t ? "undefined" : r(t))) for (var s = 0; s < o.length; s++) i = o[s].substring(1, o[s].length - 1), n = n.replace(this.makeSafe(o[s]), t[i] || "");
								else n = n.replace(/\{[^}]+?\}/g, t);
								return n;
							}
						}, e.prototype.fromFile = function(e) {
							for (var t, n = e.split("\n"), r = {}, o = 0; o < n.length; o++) (t = n[o].match(/^(.+?) *?= *?([^\n]+)/)) && (r[t[1]] = t[2].replace(/^\s+|\s+$/, ""));
							return r;
						}, e.prototype.processFile = function(e) {
							return this.fromFile(e.replace(/\n\n/g, "\n"));
						}, e.prototype.loadLang = function(e) {
							var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this;
							return new Promise(function(r, o) {
								if (-1 !== n.loaded.indexOf(e) && t) return n.applyLanguage.call(n, n.langs[e]), r(n.langs[e]);
								var s = [
									n.config.location,
									e,
									n.config.extension
								].join("");
								return (0, i.get)(s).then(function(t) {
									var o = t.data, i = n.processFile(o);
									return n.applyLanguage.call(n, e, i), n.loaded.push(e), r(n.langs[e]);
								}).catch(function() {
									r(n.applyLanguage.call(n, e));
								});
							});
						}, e.prototype.applyLanguage = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this.config.override[e] || {}, r = this.langs[e] || {};
							return this.langs[e] = Object.assign({}, r, t, n), this.langs[e];
						}, e.prototype.setCurrent = function() {
							var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
							return this.loadLang(t).then(function() {
								return e.locale = t, e.current = e.langs[t], e.current;
							});
						}, o(e, [{
							key: "getLangs",
							get: function() {
								return this.config.langs;
							}
						}]), e;
					}()))();
				},
				function(e, t, n) {
					"use strict";
					e.exports = n(9);
				},
				function(e, t, n) {
					"use strict";
					var r = n(0), o = n(2), i = n(11), s = n(1);
					function a(e) {
						var t = new i(e), n = o(i.prototype.request, t);
						return r.extend(n, i.prototype, t), r.extend(n, t), n;
					}
					var u = a(s);
					u.Axios = i, u.create = function(e) {
						return a(r.merge(s, e));
					}, u.Cancel = n(6), u.CancelToken = n(26), u.isCancel = n(5), u.all = function(e) {
						return Promise.all(e);
					}, u.spread = n(27), e.exports = u, e.exports.default = u;
				},
				function(e, t, n) {
					"use strict";
					function r(e) {
						return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
					}
					e.exports = function(e) {
						return null != e && (r(e) || function(e) {
							return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0));
						}(e) || !!e._isBuffer);
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(1), o = n(0), i = n(21), s = n(22);
					function a(e) {
						this.defaults = e, this.interceptors = {
							request: new i(),
							response: new i()
						};
					}
					a.prototype.request = function(e) {
						"string" == typeof e && (e = o.merge({ url: arguments[0] }, arguments[1])), (e = o.merge(r, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase();
						var t = [s, void 0], n = Promise.resolve(e);
						for (this.interceptors.request.forEach(function(e) {
							t.unshift(e.fulfilled, e.rejected);
						}), this.interceptors.response.forEach(function(e) {
							t.push(e.fulfilled, e.rejected);
						}); t.length;) n = n.then(t.shift(), t.shift());
						return n;
					}, o.forEach([
						"delete",
						"get",
						"head",
						"options"
					], function(e) {
						a.prototype[e] = function(t, n) {
							return this.request(o.merge(n || {}, {
								method: e,
								url: t
							}));
						};
					}), o.forEach([
						"post",
						"put",
						"patch"
					], function(e) {
						a.prototype[e] = function(t, n, r) {
							return this.request(o.merge(r || {}, {
								method: e,
								url: t,
								data: n
							}));
						};
					}), e.exports = a;
				},
				function(e, t, n) {
					"use strict";
					var r, o, i = e.exports = {};
					function s() {
						throw new Error("setTimeout has not been defined");
					}
					function a() {
						throw new Error("clearTimeout has not been defined");
					}
					function u(e) {
						if (r === setTimeout) return setTimeout(e, 0);
						if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
						try {
							return r(e, 0);
						} catch (t) {
							try {
								return r.call(null, e, 0);
							} catch (t) {
								return r.call(this, e, 0);
							}
						}
					}
					(function() {
						try {
							r = "function" == typeof setTimeout ? setTimeout : s;
						} catch (e) {
							r = s;
						}
						try {
							o = "function" == typeof clearTimeout ? clearTimeout : a;
						} catch (e) {
							o = a;
						}
					})();
					var c, f = [], l = !1, p = -1;
					function d() {
						l && c && (l = !1, c.length ? f = c.concat(f) : p = -1, f.length && h());
					}
					function h() {
						if (!l) {
							var e = u(d);
							l = !0;
							for (var t = f.length; t;) {
								for (c = f, f = []; ++p < t;) c && c[p].run();
								p = -1, t = f.length;
							}
							c = null, l = !1, function(e) {
								if (o === clearTimeout) return clearTimeout(e);
								if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
								try {
									o(e);
								} catch (t) {
									try {
										return o.call(null, e);
									} catch (t) {
										return o.call(this, e);
									}
								}
							}(e);
						}
					}
					function g(e, t) {
						this.fun = e, this.array = t;
					}
					function m() {}
					i.nextTick = function(e) {
						var t = new Array(arguments.length - 1);
						if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						f.push(new g(e, t)), 1 !== f.length || l || u(h);
					}, g.prototype.run = function() {
						this.fun.apply(null, this.array);
					}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
						return [];
					}, i.binding = function(e) {
						throw new Error("process.binding is not supported");
					}, i.cwd = function() {
						return "/";
					}, i.chdir = function(e) {
						throw new Error("process.chdir is not supported");
					}, i.umask = function() {
						return 0;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					e.exports = function(e, t) {
						r.forEach(e, function(n, r) {
							r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
						});
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(4);
					e.exports = function(e, t, n) {
						var o = n.config.validateStatus;
						n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
					};
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e, t, n, r, o) {
						return e.config = t, n && (e.code = n), e.request = r, e.response = o, e;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					function o(e) {
						return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
					}
					e.exports = function(e, t, n) {
						if (!t) return e;
						var i;
						if (n) i = n(t);
						else if (r.isURLSearchParams(t)) i = t.toString();
						else {
							var s = [];
							r.forEach(t, function(e, t) {
								null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
									r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e));
								}));
							}), i = s.join("&");
						}
						return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0), o = [
						"age",
						"authorization",
						"content-length",
						"content-type",
						"etag",
						"expires",
						"from",
						"host",
						"if-modified-since",
						"if-unmodified-since",
						"last-modified",
						"location",
						"max-forwards",
						"proxy-authorization",
						"referer",
						"retry-after",
						"user-agent"
					];
					e.exports = function(e) {
						var t, n, i, s = {};
						return e ? (r.forEach(e.split("\n"), function(e) {
							if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
								if (s[t] && o.indexOf(t) >= 0) return;
								s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n;
							}
						}), s) : s;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					e.exports = r.isStandardBrowserEnv() ? function() {
						var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
						function o(e) {
							var r = e;
							return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
								href: n.href,
								protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
								host: n.host,
								search: n.search ? n.search.replace(/^\?/, "") : "",
								hash: n.hash ? n.hash.replace(/^#/, "") : "",
								hostname: n.hostname,
								port: n.port,
								pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
							};
						}
						return e = o(window.location.href), function(t) {
							var n = r.isString(t) ? o(t) : t;
							return n.protocol === e.protocol && n.host === e.host;
						};
					}() : function() {
						return !0;
					};
				},
				function(e, t, n) {
					"use strict";
					function r() {
						this.message = "String contains an invalid character";
					}
					r.prototype = /* @__PURE__ */ new Error(), r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", e.exports = function(e) {
						for (var t, n, o = String(e), i = "", s = 0, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; o.charAt(0 | s) || (a = "=", s % 1); i += a.charAt(63 & t >> 8 - s % 1 * 8)) {
							if ((n = o.charCodeAt(s += .75)) > 255) throw new r();
							t = t << 8 | n;
						}
						return i;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					e.exports = r.isStandardBrowserEnv() ? {
						write: function(e, t, n, o, i, s) {
							var a = [];
							a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ");
						},
						read: function(e) {
							var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
							return t ? decodeURIComponent(t[3]) : null;
						},
						remove: function(e) {
							this.write(e, "", Date.now() - 864e5);
						}
					} : {
						write: function() {},
						read: function() {
							return null;
						},
						remove: function() {}
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					function o() {
						this.handlers = [];
					}
					o.prototype.use = function(e, t) {
						return this.handlers.push({
							fulfilled: e,
							rejected: t
						}), this.handlers.length - 1;
					}, o.prototype.eject = function(e) {
						this.handlers[e] && (this.handlers[e] = null);
					}, o.prototype.forEach = function(e) {
						r.forEach(this.handlers, function(t) {
							null !== t && e(t);
						});
					}, e.exports = o;
				},
				function(e, t, n) {
					"use strict";
					var r = n(0), o = n(23), i = n(5), s = n(1), a = n(24), u = n(25);
					function c(e) {
						e.cancelToken && e.cancelToken.throwIfRequested();
					}
					e.exports = function(e) {
						return c(e), e.baseURL && !a(e.url) && (e.url = u(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach([
							"delete",
							"get",
							"head",
							"post",
							"put",
							"patch",
							"common"
						], function(t) {
							delete e.headers[t];
						}), (e.adapter || s.adapter)(e).then(function(t) {
							return c(e), t.data = o(t.data, t.headers, e.transformResponse), t;
						}, function(t) {
							return i(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
						});
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					e.exports = function(e, t, n) {
						return r.forEach(n, function(n) {
							e = n(e, t);
						}), e;
					};
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e) {
						return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
					};
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e, t) {
						return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(6);
					function o(e) {
						if ("function" != typeof e) throw new TypeError("executor must be a function.");
						var t;
						this.promise = new Promise(function(e) {
							t = e;
						});
						var n = this;
						e(function(e) {
							n.reason || (n.reason = new r(e), t(n.reason));
						});
					}
					o.prototype.throwIfRequested = function() {
						if (this.reason) throw this.reason;
					}, o.source = function() {
						var e;
						return {
							token: new o(function(t) {
								e = t;
							}),
							cancel: e
						};
					}, e.exports = o;
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e) {
						return function(t) {
							return e.apply(null, t);
						};
					};
				}
			]);
		})))());
		/**
		* Sanitizer utility for handling untrusted HTML
		*/
		var sanitizerConfig = {
			clobberingProtection: {
				document: true,
				form: true,
				namespaceAttributes: false
			},
			backendOrder: [
				"dompurify",
				"sanitizer",
				"fallback"
			],
			backends: {
				sanitizer: (() => {
					if (typeof window["Sanitizer"] !== "function") return false;
					try {
						return new window.Sanitizer({
							elements: [
								"div",
								"p",
								"br",
								"span",
								"strong",
								"em",
								"b",
								"i",
								"u",
								"ul",
								"ol",
								"li",
								"a",
								"img",
								"table",
								"thead",
								"tbody",
								"tr",
								"th",
								"td",
								"form",
								"label",
								"input",
								"select",
								"option",
								"textarea",
								"button",
								"fieldset",
								"legend",
								"h1",
								"h2",
								"h3",
								"h4",
								"h5",
								"h6"
							],
							attributes: [
								"class",
								"id",
								"title",
								"contenteditable",
								"href",
								"target",
								"rel",
								"src",
								"alt",
								"width",
								"height",
								"type",
								"name",
								"value",
								"checked",
								"disabled",
								"placeholder",
								"required",
								"for",
								"selected",
								"rows",
								"cols",
								"multiple",
								"method",
								"action",
								"tabindex",
								"readonly",
								"minlength",
								"maxlength",
								"pattern",
								"autocomplete",
								"autofocus"
							],
							dataAttributes: true
						});
					} catch (e) {
						return false;
					}
				})(),
				dompurify: window.DOMPurify ? ((purify) => {
					purify.setConfig({
						SANITIZE_DOM: false,
						ADD_ATTR: ["contenteditable"]
					});
					return purify;
				})(window.DOMPurify) : false,
				fallback: (content) => content
			}
		};
		var setSanitizerConfig = (config) => {
			if (typeof config !== "object") throw "Invalid value given to setSanitizerConfig, expected config object";
			if (config.hasOwnProperty("clobberingProtection")) [
				"document",
				"form",
				"namespaceAttributes"
			].forEach((type) => {
				if (config.clobberingProtection.hasOwnProperty(type) && typeof config.clobberingProtection[type] === "boolean") sanitizerConfig.clobberingProtection[type] = config.clobberingProtection[type];
			});
			if (config.hasOwnProperty("backends")) if (typeof config.backends === "object") Object.keys(config.backends).forEach((implementation) => sanitizerConfig.backends[implementation] = config.backends[implementation]);
			else throw "backends config expected to be an Object";
			if (config.hasOwnProperty("backendOrder")) {
				sanitizerConfig.backendOrder = [];
				if (Array.isArray(config.backendOrder)) config.backendOrder.forEach((backend) => {
					if (sanitizerConfig.backends.hasOwnProperty(backend)) sanitizerConfig.backendOrder.push(backend);
					else throw "unknown sanitizer backend " + backend;
				});
				else throw "backendOrder config expected to be an Array of backend keys as strings";
			}
		};
		var isPotentiallyDangerousAttribute = (attrName, attrValue) => {
			if (sanitizerConfig.backendOrder.length === 0) return false;
			const attrNameLc = attrName.toLowerCase();
			attrValue = attrValue ? attrValue + "" : "";
			return attrNameLc.startsWith("on") || ["form", "formaction"].includes(attrNameLc) || attrValue.trim().toLowerCase().startsWith("javascript:");
		};
		function fallbackSanitizer(content) {
			const context = document.implementation.createHTMLDocument("");
			const base = context.createElement("base");
			base.href = document.location.href;
			context.head.appendChild(base);
			const exclude_tags = [
				"applet",
				"comment",
				"embed",
				"iframe",
				"link",
				"listing",
				"meta",
				"noscript",
				"object",
				"plaintext",
				"script",
				"style",
				"xmp"
			];
			const output = $.parseHTML(content, context, false);
			$(output).find("*").addBack().each((nindex, node) => {
				if (node.nodeName === "#text") return;
				if (node.tagName && exclude_tags.includes(node.tagName.toLowerCase())) {
					if (node.parentElement) node.parentElement.removeChild(node);
					else if (output.includes(node)) output.splice(output.indexOf(node), 1);
					return;
				}
				if (node.attributes) Array.from(node.attributes).forEach((attribute) => {
					if (isPotentiallyDangerousAttribute(attribute.name, attribute.value)) $(node).removeAttr(attribute.name);
				});
			});
			const tmp = context.createElement("div");
			$(tmp).html(output);
			return tmp.innerHTML;
		}
		sanitizerConfig.backends.fallback = fallbackSanitizer;
		var sanitizeNamedAttribute = (value) => {
			const check_doc = sanitizerConfig.clobberingProtection.document ? document : false;
			const check_form = sanitizerConfig.clobberingProtection.form ? document.createElement("form") : false;
			if (check_doc && value in check_doc || check_form && value in check_form) return sanitizerConfig.clobberingProtection.namespaceAttributes ? "user-content-" + value : void 0;
			return value;
		};
		var sanitizeDomClobbering = (element) => {
			$(element).find("*").each((nindex, node) => {
				const protectedTypes = ["id", "name"];
				if ([
					"embed",
					"form",
					"iframe",
					"image",
					"img",
					"object"
				].includes(node.tagName.toLowerCase())) node.removeAttribute("name");
				protectedTypes.forEach((attrName) => {
					if (node.hasAttribute(attrName)) {
						const value = sanitizeNamedAttribute(node.getAttribute(attrName));
						if (value === void 0) node.removeAttribute(attrName);
						else node.setAttribute(attrName, value);
					}
				});
			});
			return element;
		};
		var sanitizersCallbacks = {
			fallback: (element, content) => {
				const purifier = sanitizerConfig.backends.fallback;
				const supported = typeof purifier === "function";
				if (supported) content = purifier(content);
				element.innerHTML = content;
				return supported;
			},
			dompurify: (element, content) => {
				const purifier = sanitizerConfig.backends.dompurify;
				if (purifier === false || !purifier.isSupported) return false;
				element.innerHTML = purifier.sanitize(content);
				return true;
			},
			sanitizer: (element, content) => {
				const sanitizer = sanitizerConfig.backends.sanitizer;
				if (sanitizer) {
					element.setHTML(content, { sanitizer });
					return true;
				}
				return false;
			}
		};
		var setElementContent = (element, content, asText = false) => {
			if (asText) element.textContent = content;
			else {
				const proxyElem = document.createElement(element.tagName);
				if (sanitizerConfig.backendOrder.find((type) => sanitizersCallbacks[type](proxyElem, content)) !== void 0) {
					sanitizeDomClobbering(proxyElem);
					element.innerHTML = proxyElem.innerHTML;
					return element;
				}
				element.innerHTML = content;
				return element;
			}
		};
		//#endregion
		//#region src/js/utils.js
		/**
		* Cross file utilities for working with arrays,
		* sorting and other fun stuff
		*/
		window.fbLoaded = {
			js: [],
			css: []
		};
		window.fbEditors = {
			quill: {},
			tinymce: {}
		};
		/**
		* Remove null, undefined, empty string or empty array values from an object, original object is not modified
		* @param  {Object} obj {attrName: attrValue}
		* @param {boolean} [removeFalse=false] Remove values === false
		* @return {Object} Object trimmed of null or undefined values
		*/
		var trimObj = function(obj, removeFalse = false) {
			if (null == obj || typeof obj !== "object") return obj;
			const attrs = typeof window.structuredClone === "function" ? window.structuredClone(obj) : Object.assign({}, obj);
			/** @type {(null|undefined|''|false)[]} xmlRemove */
			const xmlRemove = [
				null,
				void 0,
				""
			];
			if (removeFalse) xmlRemove.push(false);
			for (const attr in attrs) if (xmlRemove.includes(attrs[attr])) delete attrs[attr];
			else if (Array.isArray(attrs[attr])) {
				if (!attrs[attr].length) delete attrs[attr];
			}
			return attrs;
		};
		/**
		* Test if attribute is a valid HTML attribute
		* @param  {string} attr
		* @return {boolean}
		*/
		var validAttr = function(attr) {
			return ![
				"values",
				"enableOther",
				"other",
				"label",
				"subtype"
			].includes(attr);
		};
		/**
		* Convert an attrs object into a string
		*
		* @param  {Object} attrs object of attributes for markup
		* @return {string}
		*/
		var attrString = (attrs) => Object.entries(attrs).map(([key, val]) => validAttr(key) && Object.values(safeAttr(key, val)).join("")).filter(Boolean).join(" ");
		/**
		* Convert attributes to markup safe strings
		* @param  {string} name  attribute name
		* @param  {string} value attribute value
		* @return {Object}       {attrName: attrValue}
		*/
		var safeAttr = (name, value) => {
			name = safeAttrName(name);
			let valString;
			if (value) if (Array.isArray(value)) valString = escapeAttr(value.join(" "));
			else {
				if (typeof value === "boolean") value = value.toString();
				valString = escapeAttr(value.trim());
			}
			value = value ? `="${valString}"` : "";
			return {
				name,
				value
			};
		};
		var safeAttrName = (name) => {
			return { className: "class" }[name] || hyphenCase(name);
		};
		/**
		* Converts a className string to a safe CSS class name by replacing bracket notation with hyphens.
		* Transforms square bracket notation (e.g., "class[name]") to hyphen-separated format (e.g., "class-name").
		* 
		* @param {string} className - The className string to be sanitized
		* @returns {string} The sanitized className with brackets replaced by hyphens
		* 
		* @example
		* safeClassName('form[field]') // returns 'form-field'
		* safeClassName('input[name][value]') // returns 'input-name-value'
		*/
		var safeClassName = (className) => className.replace(/\[([^\]]+)\]/g, "-$1");
		/**
		* Convert strings into lowercase-hyphen
		*
		* @param  {string} str
		* @return {string}
		*/
		var hyphenCase = (str) => {
			str = str.replace(/[^\w\s\-\[\]]/gi, "");
			str = safeClassName(str);
			str = str.replace(/([A-Z])/g, function($1) {
				return "-" + $1.toLowerCase();
			});
			return str.replace(/\s/g, "-").replace(/^-+/g, "");
		};
		/**
		* convert a hyphenated string to camelCase
		* @param  {string} str
		* @return {string}
		*/
		var camelCase = (str) => str.replace(/-([a-z])/g, (m, w) => w.toUpperCase());
		/**
		* Bind events to an element
		* @param  {EventTarget} element DOM element
		* @param  {Object} events  object full of events eg. {click: evt => callback}
		* @return {void}
		*/
		var bindEvents = (element, events) => {
			if (events) {
				for (const event in events) if (events.hasOwnProperty(event)) element.addEventListener(event, (evt) => events[event](evt));
			}
		};
		/**
		* Generate a unique name attribute
		* @param  {Object} field
		* @return {string}       name
		*/
		var nameAttr = (function() {
			let lepoch;
			let counter = 0;
			return function(field) {
				const epoch = Date.now();
				if (epoch === lepoch) ++counter;
				else {
					counter = 0;
					lepoch = epoch;
				}
				return (field.type || hyphenCase(field.label)) + "-" + epoch + "-" + counter;
			};
		})();
		/**
		* Determine content type
		* @param  {Node | String | Array | Object} content
		* @return {string}
		*/
		var getContentType = (content) => {
			if (content === void 0) return content;
			return [
				["array", (content) => Array.isArray(content)],
				["node", (content) => content instanceof window.Node || content instanceof window.HTMLElement],
				["component", () => content?.dom],
				[typeof content, () => true]
			].find((typeCondition) => typeCondition[1](content))[0];
		};
		/**
		* Generate markup wrapper where needed
		*
		* @param  {string} tag Tag name
		* @param  {string|Array|object|Node|Function|null} content content to wrap
		* @param  {Object} attributes attributes to assign to element
		* @return {HTMLElement} DOM Element
		*/
		var markup = function(tag, content = "", attributes = {}) {
			let contentType = getContentType(content);
			const { events, ...attrs } = attributes;
			const field = document.createElement(tag);
			const appendContent = {
				string: (content) => {
					setElementContent(field, field.innerHTML + content);
				},
				object: (config) => {
					const { tag, content, ...data } = config;
					return field.appendChild(markup(tag, content, data));
				},
				node: (content) => {
					return field.appendChild(content);
				},
				array: (content) => {
					for (let i = 0; i < content.length; i++) {
						contentType = getContentType(content[i]);
						appendContent[contentType](content[i]);
					}
				},
				function: (content) => {
					content = content();
					contentType = getContentType(content);
					appendContent[contentType](content);
				},
				undefined: () => {}
			};
			for (const attr in attrs) if (attrs.hasOwnProperty(attr)) {
				const name = safeAttrName(attr);
				let attrVal = Array.isArray(attrs[attr]) ? unique(attrs[attr].join(" ").split(" ")).join(" ") : attrs[attr];
				if (isPotentiallyDangerousAttribute(name, attrVal)) continue;
				if (typeof attrVal === "boolean") {
					if (attrVal === true) {
						const val = name === "contenteditable" ? true : name;
						field.setAttribute(name, val);
					}
				} else {
					if (name === "id" || name === "name") attrVal = sanitizeNamedAttribute(attrVal);
					if (attrVal !== void 0) field.setAttribute(name, attrVal);
				}
			}
			if (content) appendContent[contentType](content);
			bindEvents(field, events);
			return field;
		};
		/**
		* Convert html element attributes to key/value object
		* @private
		* @param  {Element} elem DOM element
		* @return {Object} ex: {attrName: attrValue}
		*/
		var xmlParseAttrs = (elem) => {
			const attrs = elem.attributes;
			const data = {};
			forEach(attrs, (attr) => {
				let attrVal = attrs[attr].value || "";
				if (attrVal.match(/false|true/g)) attrVal = attrVal === "true";
				else if (attrVal.match(/undefined/g)) attrVal = void 0;
				if (attrVal) data[camelCase(attrs[attr].name)] = attrVal;
			});
			return data;
		};
		/**
		* Convert field options to optionData
		* @private
		* @param  {NodeList} options  DOM elements
		* @return {Array} optionData array
		*/
		var xmlParseOptions = (options) => {
			const data = [];
			for (let i = 0; i < options.length; i++) {
				const optionData = {
					...xmlParseAttrs(options[i]),
					label: options[i].textContent
				};
				data.push(optionData);
			}
			return data;
		};
		/**
		* Convert field user data to userData
		* @private
		* @param  {NodeList} userData  DOM elements
		* @return {Array} optionData array
		*/
		var xmlParseUserData = (userData) => {
			const data = [];
			if (userData.length) {
				const values = userData[0].getElementsByTagName("value");
				for (let i = 0; i < values.length; i++) data.push(values[i].textContent);
			}
			return data;
		};
		/**
		* Parse XML formData
		* @param  {string} xmlString
		* @return {Array}            formData array
		*/
		var parseXML = (xmlString) => {
			const xml = new window.DOMParser().parseFromString(xmlString, "text/xml");
			const formData = [];
			if (xml) {
				const fields = xml.getElementsByTagName("field");
				for (let i = 0; i < fields.length; i++) {
					const fieldData = xmlParseAttrs(fields[i]);
					const options = fields[i].getElementsByTagName("option");
					const userData = fields[i].getElementsByTagName("userData");
					if (options && options.length) fieldData.values = xmlParseOptions(options);
					if (userData && userData.length) fieldData.userData = xmlParseUserData(userData);
					formData.push(fieldData);
				}
			}
			return formData;
		};
		/**
		* Converts escaped HTML into usable HTML
		* @param  {string} html escaped HTML
		* @return {string}      parsed HTML
		*/
		var parsedHtml = (html) => {
			const escapeElement = document.createElement("textarea");
			escapeElement.innerHTML = html;
			return escapeElement.textContent;
		};
		/**
		* Escape markup so it can be displayed rather than rendered
		* @param  {string} html markup
		* @return {string}      escaped html
		*/
		var escapeHtml = (html) => {
			const escapeElement = document.createElement("textarea");
			escapeElement.textContent = html;
			return escapeElement.innerHTML;
		};
		var escapeAttr = (str) => {
			const match = {
				"\"": "&quot;",
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;"
			};
			const replaceTag = (tag) => match[tag] || tag;
			return typeof str === "string" ? str.replace(/["&<>]/g, replaceTag) : str;
		};
		var escapeAttrs = (attrs) => {
			for (const attr in attrs) if (attrs.hasOwnProperty(attr)) attrs[attr] = escapeAttr(attrs[attr]);
			return attrs;
		};
		var forEach = function(array, callback, scope) {
			for (let i = 0; i < array.length; i++) callback.call(scope, i, array[i]);
		};
		/**
		* Remove duplicates from an array of elements
		* @param  {Array} array  array with possible duplicates
		* @return {Array}        array with only unique values
		*/
		var unique = (array) => {
			return array.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
		};
		/**
		* Removes a value from an array
		* @param  {string|Number} val
		* @param  {Array} arr
		*/
		var removeFromArray = (val, arr) => {
			const index = arr.indexOf(val);
			if (index > -1) arr.splice(index, 1);
		};
		/**
		* Loads an array of scripts using jQuery's `getScript`
		* @param  {string[]|string}  scriptScr    scripts
		* @param  {String} [path='']   optional to load form
		* @return {Promise}       a promise
		*/
		var getScripts = (scriptScr, path = "") => {
			const $ = jQuery;
			let _arr = [];
			if (!Array.isArray(scriptScr)) scriptScr = [scriptScr];
			if (!isCached(scriptScr)) _arr = jQuery.map(scriptScr, (src) => {
				const options = {
					dataType: "script",
					cache: true,
					url: (path || "") + src
				};
				return jQuery.ajax(options).done(() => window.fbLoaded.js.push(src));
			});
			_arr.push(jQuery.Deferred((deferred) => $(deferred.resolve)));
			return jQuery.when(..._arr);
		};
		/**
		* Checks if remote resource is already loaded
		* @param  {string|Array} src  url of remote script or css
		* @param  {'js'|'css'}       [type='js']  type of remote resource
		* @return {boolean}      isCached
		*/
		var isCached = (src, type = "js") => {
			const cache = window.fbLoaded[type];
			return Array.isArray(src) ? src.every((s) => cache.includes(s)) : cache.includes(src);
		};
		/**
		* Appends stylesheets to the head
		* @param  {Array} scriptScr
		* @param  {String} [path='']
		* @return {void}
		*/
		var getStyles = (scriptScr, path = "") => {
			if (!Array.isArray(scriptScr)) scriptScr = [scriptScr];
			scriptScr.forEach((src) => {
				let type = "href";
				let key = src;
				let id = "";
				if (typeof src == "object") {
					type = src.type || (src.style ? "inline" : "href");
					id = src.id;
					key = id || src.href || src.style;
					src = type === "inline" ? src.style : src.href;
				}
				if (isCached(key, "css")) return;
				if (type === "href") {
					const link = document.createElement("link");
					link.type = "text/css";
					link.rel = "stylesheet";
					link.href = (path || "") + src;
					document.head.appendChild(link);
				} else $(`<style type="text/css">${src}</style>`).attr("id", id).appendTo($(document.head));
				window.fbLoaded.css.push(key);
			});
		};
		/**
		* Capitalizes a string
		* @param  {string} str uncapitalized string
		* @return {string} str capitalized string
		*/
		var capitalize = (str) => {
			return str.replace(/\b\w/g, function(m) {
				return m.toUpperCase();
			});
		};
		var merge = (obj1, obj2) => {
			const mergedObj = Object.assign({}, obj1, obj2);
			for (const prop in obj2) if (mergedObj.hasOwnProperty(prop)) if (Array.isArray(obj2[prop])) mergedObj[prop] = Array.isArray(obj1[prop]) ? unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
			else if (typeof obj2[prop] === "object") mergedObj[prop] = merge(obj1[prop], obj2[prop]);
			else mergedObj[prop] = obj2[prop];
			return mergedObj;
		};
		/**
		* Apply the same event listener to multiple events
		* @param {Node} el
		* @param {string} evts events to bind to
		* @param {Function} cb
		* @return {Array} events
		*/
		var addEventListeners = (el, evts, cb) => evts.split(" ").forEach((e) => el.addEventListener(e, cb, false));
		/**
		* Find the closest parent by class
		* @param  {Object} el  DOM element
		* @param  {string} cls class
		* @return {Object}     DOM Element
		*/
		var closest = (el, cls) => {
			const className = cls.replace(".", "");
			while ((el = el.parentElement) && !el.classList.contains(className));
			return el;
		};
		/**
		* Add a mobile class
		* @todo find css only solution
		* @return {string} Mobile class added to formBuilder
		*/
		var mobileClass = () => {
			let mobileClass = "";
			((a) => {
				if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)) mobileClass = "formbuilder-mobile";
			})(navigator.userAgent || navigator.vendor || window.opera);
			return mobileClass;
		};
		/**
		* Make strings safe to be used as classes
		*
		* @param  {string} str string to be converted
		* @return {string}     converted string
		*/
		var safename = (str) => {
			return str.replace(/\s/g, "-").replace(/[^a-zA-Z0-9[\]_-]/g, "");
		};
		/**
		* Strips non-numbers from a number only input
		*
		* @param  {string} str string with possible number
		* @return {string}     string without numbers
		*/
		var forceNumber = (str) => str.replace(/[^0-9]/g, "");
		/**
		* subtract the contents of 1 array from another
		* @param {Array} arr
		* @param {Array} from
		* @returns {Array}
		*/
		var subtract = (arr, from) => {
			return from.filter(function(a) {
				return !~this.indexOf(a);
			}, arr);
		};
		var bootstrapColumnRegex = /^col-(xs|sm|md|lg)-([^\s]+)/;
		/**
		* Returns Array of classNames related to Bootstrap
		* @param {string} className
		* @returns {string[]}
		*/
		var getAllGridRelatedClasses = (className) => {
			return typeof className === "string" ? className.split(" ").filter((x) => bootstrapColumnRegex.test(x) || x.startsWith("row-")) : [];
		};
		/**
		*
		* @param {string} str
		* @return {string} titleized string
		*/
		function titleCase(str) {
			const lowers = [
				"a",
				"an",
				"and",
				"as",
				"at",
				"but",
				"by",
				"for",
				"for",
				"from",
				"in",
				"into",
				"near",
				"nor",
				"of",
				"on",
				"onto",
				"or",
				"the",
				"to",
				"with"
			].map((lower) => `\\s${lower}\\s`);
			const regex = new RegExp(`(?!${lowers.join("|")})\\w\\S*`, "g");
			return `${str}`.replace(regex, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).replace(/[A-Z]/g, (word) => ` ${word}`));
		}
		function firstNumberOrUndefined(...options) {
			return options.find((x) => typeof x === "number");
		}
		var utils = {
			addEventListeners,
			attrString,
			camelCase,
			capitalize,
			closest,
			getContentType,
			escapeAttr,
			escapeAttrs,
			escapeHtml,
			forceNumber,
			forEach,
			getScripts,
			getStyles,
			hyphenCase,
			isCached,
			markup,
			merge,
			mobileClass,
			nameAttr,
			parsedHtml,
			parseXML,
			removeFromArray,
			safeAttr,
			safeAttrName,
			safename,
			subtract,
			trimObj,
			unique,
			validAttr,
			titleCase,
			firstNumberOrUndefined
		};
		/**
		* Splits an object based on array of keys
		*
		* @param {Object} obj Object to be split
		* @param {Array}  keys Array of keys to use when splitting Object
		*
		* @return {Array} returns an array of Objects, the first where the keys matched,
		*                 the second where they did not
		*/
		utils.splitObject = (obj, keys) => {
			const reconstructObj = (initialObj) => (result, key) => {
				result[key] = initialObj[key];
				return result;
			};
			return [Object.keys(obj).filter((key) => keys.includes(key)).reduce(reconstructObj(obj), {}), Object.keys(obj).filter((key) => !keys.includes(key)).reduce(reconstructObj(obj), {})];
		};
		/**
		* jQuery function to Swap two elements positions in the dom
		* @param {Node} that
		* @returns {Node}
		*/
		$.fn.swapWith = function(that) {
			const $this = this;
			const $that = $(that);
			const $temp = $("<div>");
			$this.before($temp);
			$that.before($this);
			$temp.before($that).remove();
			return $this;
		};
		//#endregion
		//#region src/js/dom.js
		/**
		* Removes a dom node
		* @param {Node} element
		*/
		var remove = (element) => {
			if (element.parentNode) element.parentNode.removeChild(element);
		};
		/**
		* Hide or show an Array|HTMLCollection of elements containing a case-insensitive string
		* @param  {HTMLElement[]|HTMLCollection}   elems
		* @param  {string}  term  match textContent to this term
		* @param  {boolean} [show=true] show or hide elements
		* @return {HTMLElement[]}         filtered elements
		*/
		var filter = (elems, term, show = true) => {
			const filteredElems = [];
			let toggle = ["none", "block"];
			if (show) toggle = toggle.reverse();
			for (let i = elems.length - 1; i >= 0; i--) if (elems[i].textContent.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
				elems[i].style.display = toggle[0];
				filteredElems.push(elems[i]);
			} else elems[i].style.display = toggle[1];
			return filteredElems;
		};
		new RegExp(`(${[
			"select",
			"checkbox-group",
			"checkbox",
			"radio-group",
			"autocomplete"
		].join("|")})`);
		//#endregion
		//#region src/js/control.js
		/**
		* Base class for all control classes
		* Defines the structure of a control class and some standard control methods
		*/
		var control = class control {
			/**
			* initialise the control object
			* @param {Object} config each control class receives a control configuration
			* object ({name, label, etc})
			* @param {Boolean} preview isPreview
			*/
			constructor(config, preview) {
				this.rawConfig = jQuery.extend({}, config);
				config = jQuery.extend({}, config);
				this.preview = preview;
				delete config.isPreview;
				if (this.preview) delete config.required;
				for (const prop of [
					"label",
					"description",
					"subtype",
					"required",
					"disabled"
				]) {
					this[prop] = config[prop];
					delete config[prop];
				}
				if (!config.id) if (config.name) config.id = config.name;
				else config.id = "control-" + Math.floor(Math.random() * 1e7 + 1);
				this.id = config.id;
				this.type = config.type;
				if (this.description) config.title = this.description;
				if (!control.controlConfig) control.controlConfig = {};
				const classId = this.subtype ? this.type + "." + this.subtype : this.type;
				this.classConfig = jQuery.extend({}, control.controlConfig[this.type] || {}, control.controlConfig[classId] || {});
				if (this.subtype) config.type = this.subtype;
				if (this.required) {
					config["required"] = "required";
					config["aria-required"] = "true";
				}
				if (this.disabled) config["disabled"] = "disabled";
				this.config = config;
				this.configure();
			}
			/**
			* Getter to retrieve class configuration.
			* Supports properties:
			*  - mi18n - a mi18n lookup, (or object of type: lookup for classes supporting multiple types)
			*  - i18n - for custom / plugin controls, translations for labels can be specified here as an object of locale: label (or an object of type: label for classes supporting multiple types).
			*  - icon - icon, or object of type: icon for defined types
			*  - inactive - array of inactive types that shouldn't appear in formBuilder interface (but still be supported for rendering purposes)
			* @return {Object} configuration
			*/
			static get definition() {
				return {};
			}
			/**
			* Class method to register supported controls and their associated classes
			* @param {Array} types - control type (or array of control types) to register
			* against the specifed class
			* @param {Class} controlClass - class to map against the types
			* @param {String} parentType - optional - if defined, any classes registered
			* will be registered as subtypes of this parent
			*/
			static register(types, controlClass, parentType) {
				const prefix = parentType ? parentType + "." : "";
				if (!control.classRegister) control.classRegister = {};
				if (!Array.isArray(types)) types = [types];
				for (const type of types) {
					if (type.indexOf(".") !== -1) {
						control.error(`Ignoring type ${type}. Cannot use the character '.' in a type name.`);
						continue;
					}
					control.classRegister[prefix + type] = controlClass;
				}
			}
			/**
			* Looks up the classRegister & returns registered types or subtypes
			* @param  {string|false} type optional type of control we want to look up
			* subtypes of. If not specified will return all types
			* @return {Array} registered types (or subtypes)
			*/
			static getRegistered(type = false) {
				const types = Object.keys(control.classRegister);
				if (!types.length) return types;
				return types.filter((key) => {
					if (type) return key.indexOf(type + ".") > -1;
					return key.indexOf(".") === -1;
				});
			}
			/**
			* Retrieves an object of types mapped to an array of subtypes.
			* Only returns types that have subtypes
			* @return {Object} an object containing {type: array of subtypes}.
			*/
			static getRegisteredSubtypes() {
				const types = {};
				for (const key in control.classRegister) if (control.classRegister.hasOwnProperty(key)) {
					const [type, subtype] = key.split(".");
					if (!subtype) continue;
					if (!types[type]) types[type] = [];
					types[type].push(subtype);
				}
				return types;
			}
			/**
			* Retrieve the class for a specified control type
			* @param {String} type type of control we are looking up
			* @param {String} [subtype] if specified we'll try to find
			* a class mapped to this subtype. If none found, fall back to the type.
			* @return {Class} control subclass as defined in the call to register
			*/
			static getClass(type, subtype) {
				const lookup = subtype ? type + "." + subtype : type;
				const controlClass = control.classRegister[lookup] || control.classRegister[type];
				if (!controlClass) return control.error("Invalid control type. (Type: " + type + ", Subtype: " + subtype + "). Please ensure you have registered it, and imported it correctly.");
				return controlClass;
			}
			/**
			* support dynamic loading of custom control classes
			* @param {Array} controls
			*/
			static loadCustom(controls) {
				let controlClasses = [];
				if (controls) controlClasses = controlClasses.concat(controls);
				if (window.fbControls) controlClasses = controlClasses.concat(window.fbControls);
				if (!this.fbControlsLoaded) {
					for (const loadControl of controlClasses) loadControl(control, control.classRegister);
					this.fbControlsLoaded = true;
				}
			}
			/**
			* Retrieve a translated string
			* By default looks for translations defined against the class (for plugin controls)
			* Expects {locale1: {type: label}, locale2: {type: label}}, or {default: label}, or {local1: label, local2: label2}
			* @param {String} lookup string to retrieve the label / translated string for
			* @param {Object|Number|String} [args] - string or key/val pairs for string lookups with variables
			* @return {String} the translated label
			*/
			static mi18n(lookup, args) {
				const def = this.definition;
				let i18n = def.i18n || {};
				const locale = import_mi18n_min.default.locale;
				i18n = i18n[locale] || i18n.default || i18n;
				const lookupCamel = this.camelCase(lookup);
				const value = typeof i18n == "object" ? i18n[lookupCamel] || i18n[lookup] : i18n;
				if (value) return value;
				let mapped = def.mi18n;
				if (typeof mapped === "object") mapped = mapped[lookupCamel] || mapped[lookup];
				if (!mapped) mapped = lookupCamel;
				return import_mi18n_min.default.get(mapped, args);
			}
			/**
			* Should this control type appear in the list of form controls
			* @param {String} type
			* @return {Boolean} isActive
			*/
			static active(type) {
				return !Array.isArray(this.definition.inactive) || this.definition.inactive.indexOf(type) === -1;
			}
			/**
			* Retrieve the translated control label for a control type
			* @param {String} type
			* @return {String} translated control
			*/
			static label(type) {
				return this.mi18n(type);
			}
			/**
			* Retrieve the icon for a control type
			* @param {String} type
			* @return {String} icon
			*/
			static icon(type) {
				const def = this.definition;
				if (def && typeof def.icon === "object") return def.icon[type];
				return def.icon;
			}
			/**
			* this method is called by the constructor and should be overwritten for controls that need to
			* process the configuration arguments prior to rendering
			*/
			configure() {}
			/**
			* this is the core method for all controls to produce the form elements to be injected into the dom
			* the implementation in control.js will return
			* Supported return configuration elements:
			*   - field - the DOM element
			*   - noLabel - this control shouldn't have a label (nor a space for a label)
			*   - hidden - this control shouldn't render anything visible to the page
			* @return {Object} DOM Element to be injected into the form, or an object/hash of configuration as above
			*/
			build() {
				const { label, type, ...data } = this.config;
				return this.markup(type, parsedHtml(label), data);
			}
			/**
			* code to execute for supported events
			* to implement an onRender event in a child class, simply define an onRender method
			* @param {String} eventType - optional type of event to retrieve an event function for. If not specified all events returned
			* @return {Function/Object} - function to execute for specified event, or all events of no eventType is specified
			*/
			on(eventType) {
				const events = {
					/**
					* @param {Node} element
					*/
					prerender: (element) => element,
					/**
					* onRender event to execute code each time an instance of this control is injected into the DOM
					* @param {Node} evt
					*/
					render: (evt) => {
						const onRender = () => {
							if (this.onRender) this.onRender(evt);
						};
						if (this.css) getStyles(this.css);
						if (this.js && !isCached(this.js)) getScripts(this.js).done(onRender);
						else onRender(evt);
					}
				};
				return eventType ? events[eventType] : events;
			}
			/**
			* centralised error handling
			* @param {String} message message to output to the console
			*/
			static error(message) {
				throw new Error(message);
			}
			/**
			* wrap the utils.markup method
			* ideally this would be inherited from a parent 'dom' type element supporting dom helper type methods
			* @param  {String} tag
			* @param  {Object|String|Array} content
			* @param  {Object} attributes
			* @return {Object} DOM element
			*/
			markup(tag, content = "", attributes = {}) {
				this.element = markup(tag, content, attributes);
				return this.element;
			}
			/**
			* Converts escaped HTML into usable HTML
			* @param  {String} html escaped HTML
			* @return {String}      parsed HTML
			*/
			parsedHtml(html) {
				return parsedHtml(html);
			}
			/**
			* convert a hyphenated string to camelCase
			* @param  {String} str
			* @return {String}
			*/
			static camelCase(str) {
				return camelCase(str);
			}
		};
		control.jsonAttrs = /* @__PURE__ */ new Map();
		control.parseJsonAttrs = (field) => {
			const attrs = control.jsonAttrs.get(field?.type);
			if (attrs) attrs.forEach((attr) => {
				if (typeof field[attr] === "string") try {
					field[attr] = JSON.parse(field[attr]);
				} catch {}
			});
			return field;
		};
		control.stringifyJsonAttrs = (field) => {
			const attrs = control.jsonAttrs.get(field?.type);
			if (attrs) attrs.forEach((attr) => {
				if (field[attr] != null && typeof field[attr] !== "string") field[attr] = JSON.stringify(field[attr]);
			});
			return field;
		};
		//#endregion
		//#region src/js/layout.js
		var processClassName = (data, field) => {
			let className = data.id ? `formbuilder-${data.type} form-group field-${data.id}` : "";
			if (data.className) {
				const classes = getAllGridRelatedClasses(data.className);
				if (classes && classes.length > 0) {
					className += ` ${classes.join(" ")}`;
					if (!Array.isArray(field)) field = [field];
					field.forEach((item) => {
						if (item.classList) item.classList.remove(...classes);
						item.querySelectorAll("[class*=row-],[class*=col-]").forEach((element) => {
							if (element.classList) element.classList.remove(...classes);
						});
					});
				}
			}
			return className;
		};
		/**
		* Base class for controlling the layout of each 'row' on the form
		* Can be extended & customised with the new object being passed to FormRender as the new layout object
		* Controls things like the label, help text, and how they fit together with the control itself
		*/
		var layout = class {
			/**
			* Prepare the templates for layout
			* @param {Object} templates object containing custom or overwrite templates
			* @param {Boolean} [preview=false] - are we rendering a preview for the formBuilder stage
			* @param {Boolean} [disableHTMLLabels=false] - do we render labels as HTML or plain text
			* @param {Array} [controlConfig={}] - ability for controls to have their own configuration / options of the format control identifier (type, or type.subtype): {options}
			*/
			constructor(templates, preview = false, disableHTMLLabels = false, controlConfig = {}) {
				this.preview = preview ?? false;
				this.disableHTMLLabels = disableHTMLLabels ?? false;
				this.controlConfig = controlConfig ?? {};
				this.templates = {
					label: null,
					help: null,
					default: (field, label, help, data) => {
						if (help) label.appendChild(help);
						return this.markup("div", [label, field], { className: processClassName(data, field) });
					},
					noLabel: (field, label, help, data) => {
						return this.markup("div", field, { className: processClassName(data, field) });
					},
					hidden: (field) => {
						return field;
					}
				};
				if (templates) this.templates = jQuery.extend(this.templates, templates);
				this.configure();
			}
			/**
			* this method is called by the constructor and should be overwritten for custom layouts that need to
			* process the configuration arguments prior to rendering
			*/
			configure() {}
			/**
			* Process the configuration from an element from the standard formData array
			* building the control, label and help text, and then putting them all together.
			* Should support the control object returning a DOM element, or an object containing
			* configuration properties:
			*   - field - the DOM element
			*   - noLabel - this control shouldn't have a label (nor a space for a label)
			*   - hidden - this control shouldn't render anything visible to the page
			* @param {Class} renderControl - the relevant control class
			* @param {Object} data - configuration data passed through formData for this control
			* @param {String} forceTemplate - programmatically force the template with which this control to be rendered
			* @return {HTMLElement} element
			*/
			build(renderControl, data, forceTemplate) {
				if (this.preview) if (data.name) data.name = data.name + "-preview";
				else data.name = utils.nameAttr(data) + "-preview";
				data.id = data.name;
				this.data = jQuery.extend({}, data);
				control.controlConfig = this.controlConfig;
				const controlInstance = new renderControl(data, this.preview);
				let field = controlInstance.build();
				if (typeof field !== "object" || !field.field) field = { field };
				if (typeof field.field === "string") {
					const tmpField = this.markup("div", field.field, {});
					if (tmpField.childElementCount === 1) field.field = tmpField.children.item(0);
					else field.field = Array.from(tmpField.children);
				}
				const label = this.label();
				const help = this.help();
				let elementTemplate;
				if (forceTemplate && this.isTemplate(forceTemplate)) elementTemplate = forceTemplate;
				else elementTemplate = this.isTemplate(field.layout) ? field.layout : "default";
				const element = this.processTemplate(elementTemplate, field.field, label, help);
				controlInstance.on("prerender")(element);
				element.addEventListener("fieldRendered", controlInstance.on("render"));
				return element;
			}
			/**
			* Build a label element
			* @return {Object} dom element to render the label
			*/
			label() {
				const label = this.data.label || "";
				const labelContents = [this.disableHTMLLabels ? document.createTextNode(label) : utils.parsedHtml(label)];
				if (this.data.required) labelContents.push(this.markup("span", "*", { className: "formbuilder-required" }));
				if (this.isTemplate("label")) return this.processTemplate("label", labelContents);
				return this.markup("label", labelContents, {
					for: this.data.id,
					className: `formbuilder-${this.data.type}-label`
				});
			}
			/**
			* Build a help element
			* @return {Object} dom element to render the help text
			*/
			help() {
				if (!this.data.description) return null;
				if (this.isTemplate("help")) return this.processTemplate("help", this.data.description);
				return this.markup("span", "?", {
					className: "tooltip-element",
					tooltip: this.data.description
				});
			}
			/**
			* Determines if a template is defined for the specified key
			* @param {String} template string template key to check for
			* @return {Boolean}
			*/
			isTemplate(template) {
				return typeof this.templates[template] === "function";
			}
			/**
			* Process a template & prepare the results
			* @param {String} template - template key to execute
			* @param {Array} args - any number of args that should be passed to the template. this.data is sent as the last parameter to any template.
			* @return {HTMLElement}
			*/
			processTemplate(template, ...args) {
				let processed = this.templates[template](...args, this.data);
				if (processed.jquery) processed = processed[0];
				return processed;
			}
			/**
			* link to the utils.markup method
			* ideally this would be inherited from a parent 'dom' type element supporting dom helper type methods
			* @param {String} tag
			* @param {Object|String|Array} content
			* @param {Object} attributes
			* @return {Object} DOM element
			*/
			markup(tag, content = "", attributes = {}) {
				return utils.markup(tag, content, attributes);
			}
		};
		//#endregion
		//#region src/js/control/autocomplete.js
		/**
		* Autocomplete class
		* Output an autocomplete form element
		* @extends control
		*/
		var controlAutocomplete = class extends control {
			/**
			* definition
			* @return {Object} select control definition
			*/
			static get definition() {
				return { mi18n: { requireValidOption: "requireValidOption" } };
			}
			/**
			* build a text DOM element, supporting other jquery text form-control's
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { values, type, ...data } = this.config;
				const keyboardNav = (e) => {
					const list = e.target.nextSibling.nextSibling;
					const hiddenField = e.target.nextSibling;
					const activeOption = this.getActiveOption(list);
					let direction = (/* @__PURE__ */ new Map([
						[38, () => {
							const previous = this.getPreviousOption(activeOption);
							if (previous) this.selectOption(list, previous);
						}],
						[40, () => {
							const next = this.getNextOption(activeOption);
							if (next) this.selectOption(list, next);
						}],
						[13, () => {
							if (activeOption) {
								e.target.value = activeOption.innerHTML;
								hiddenField.value = activeOption.getAttribute("value");
								if (list.style.display === "none") this.showList(list, activeOption);
								else this.hideList(list);
							} else if (this.config.requireValidOption) {
								if (!this.isOptionValid(list, e.target.value)) {
									e.target.value = "";
									e.target.nextSibling.value = "";
								}
							}
							e.preventDefault();
						}],
						[27, () => {
							this.hideList(list);
						}]
					])).get(e.keyCode);
					if (!direction) direction = () => false;
					return direction();
				};
				const fauxAttrs = Object.assign({}, data, {
					id: `${data.id}-input`,
					autocomplete: "off",
					events: {
						focus: (evt) => {
							const list = evt.target.nextSibling.nextSibling;
							const filteredOptions = filter(list.querySelectorAll("li"), evt.target.value);
							evt.target.addEventListener("keydown", keyboardNav);
							if (evt.target.value.length > 0) {
								const selectedOption = filteredOptions.length > 0 ? filteredOptions[filteredOptions.length - 1] : null;
								this.showList(list, selectedOption);
							}
						},
						blur: (evt) => {
							evt.target.removeEventListener("keydown", keyboardNav);
							const blurTimeout = setTimeout(() => {
								evt.target.nextSibling.nextSibling.style.display = "none";
								clearTimeout(blurTimeout);
							}, 200);
							if (this.config.requireValidOption) {
								const list = evt.target.nextSibling.nextSibling;
								if (!this.isOptionValid(list, evt.target.value)) {
									evt.target.value = "";
									evt.target.nextSibling.value = "";
								}
							}
						},
						input: (evt) => {
							const list = evt.target.nextSibling.nextSibling;
							const hiddenField = evt.target.nextSibling;
							hiddenField.value = evt.target.value;
							const filteredOptions = filter(list.querySelectorAll("li"), evt.target.value);
							if (filteredOptions.length == 0) this.hideList(list);
							else {
								let activeOption = this.getActiveOption(list);
								if (!activeOption) activeOption = filteredOptions[filteredOptions.length - 1];
								this.showList(list, activeOption);
							}
						}
					}
				});
				const hiddenAttrs = Object.assign({}, data, { type: "hidden" });
				delete fauxAttrs.name;
				const field = [this.markup("input", null, fauxAttrs), this.markup("input", null, hiddenAttrs)];
				const options = values.map((optionData) => {
					const label = optionData.label;
					const config = {
						events: { click: (evt) => {
							const list = evt.target.parentElement;
							const field = list.previousSibling.previousSibling;
							field.value = optionData.label;
							field.nextSibling.value = optionData.value;
							this.hideList(list);
						} },
						value: optionData.value
					};
					return this.markup("li", label, config);
				});
				field.push(this.markup("ul", options, {
					id: `${data.id}-list`,
					className: `formbuilder-${type}-list`
				}));
				return field;
			}
			/**
			* Hides autocomplete list and deselects all the options
			* @param {Object} list - list of autocomplete options
			*/
			hideList(list) {
				this.selectOption(list, null);
				list.style.display = "none";
			}
			/**
			* Shows autocomplete list. Automatically selects 'selectedOption'
			* @param {Object} list - list of autocomplete options
			* @param {Object} selectedOption - option to be selected
			*/
			showList(list, selectedOption) {
				this.selectOption(list, selectedOption);
				list.style.display = "block";
				list.style.width = list.parentElement.offsetWidth + "px";
			}
			/**
			* Returns first option from autocomplete list with 'active-option' class
			* @param {Object} list - list of autocomplete options
			* @return {Object} first list option with 'active-option' class
			*/
			getActiveOption(list) {
				const activeOption = list.getElementsByClassName("active-option")[0];
				if (activeOption && activeOption.style.display !== "none") return activeOption;
				return null;
			}
			/**
			* Previous next option to the current option
			* @param {Object} current - currently selected option
			* @return {Object} previous option to the current option or null if previous doesn't exist
			*/
			getPreviousOption(current) {
				let previous = current;
				do
					previous = previous ? previous.previousSibling : null;
				while (previous != null && previous.style.display === "none");
				return previous;
			}
			/**
			* Returns next option to the current option
			* @param {Object} current - currently selected option
			* @return {Object} next option to the current option or null if next doesn't exist
			*/
			getNextOption(current) {
				let next = current;
				do
					next = next ? next.nextSibling : null;
				while (next != null && next.style.display === "none");
				return next;
			}
			/**
			* Selects option in autocomplete list. Removes class 'active-option' from all options
			* and then adds that class to 'selected' option. If 'selected' is null then no option is selected
			* @param {Object} list - list of autocomplete options
			* @param {Object} selectedOption - option - 'li' element - to be selected in autocomplete list
			*/
			selectOption(list, selectedOption) {
				const options = list.querySelectorAll("li");
				for (let i = 0; i < options.length; i++) options[i].classList.remove("active-option");
				if (selectedOption) selectedOption.classList.add("active-option");
			}
			/**
			* Is the value in the autocomplete field in the pre-defined Options list?
			* @param {Object} list - list of autocomplete options
			* @param {Object} value -value trying to be set
			* @return {Object} - is the option in the pre defined list
			*/
			isOptionValid(list, value) {
				const options = list.querySelectorAll("li");
				let validValue = false;
				for (let i = 0; i < options.length; i++) if (options[i].innerHTML === value) {
					validValue = true;
					break;
				}
				return validValue;
			}
			/**
			* onRender callback
			* @param {Object} evt
			*/
			onRender(evt) {
				if (this.config.userData) {
					const $el = $("#" + this.config.name);
					const $options = $el.next();
					const preSelectedOption = this.config.userData[0];
					let selectedOption = null;
					$options.find("li").each(function() {
						if ($(this).attr("value") === preSelectedOption) selectedOption = $(this).get(0);
					});
					if (selectedOption === null) if (this.config.requireValidOption) return;
					else {
						$el.prev().val(this.config.userData[0]);
						return;
					}
					$el.prev().val(selectedOption.innerHTML);
					$el.val(selectedOption.getAttribute("value"));
					const list = $el.next().get(0);
					if (list.style.display === "none") this.showList(list, selectedOption);
					else this.hideList(list);
				}
				return evt;
			}
		};
		control.register("autocomplete", controlAutocomplete);
		//#endregion
		//#region src/js/control/button.js
		/**
		* Button class
		* Output a <button>Label</button> form element
		* @extends control
		*/
		var controlButton = class extends control {
			/**
			* build a text DOM element, supporting other jquery text form-control's
			* @return {{field: HTMLElement, layout: string}} DOM Element to be injected into the form.
			*/
			build() {
				return {
					field: this.markup("button", this.label, this.config),
					layout: "noLabel"
				};
			}
		};
		control.register("button", controlButton);
		control.register([
			"button",
			"submit",
			"reset"
		], controlButton, "button");
		//#endregion
		//#region src/js/control/custom.js
		/**
		* Support for custom controls
		* Implementing support for custom templates being passed as options to formBuilder/Render
		* @extends control
		*/
		var controlCustom = class extends control {
			constructor(config, preview, template) {
				super(config, preview);
				this.template = template;
			}
			/**
			* build a custom control defined in the templates option
			* @return {{field: any, layout: any}} DOM Element to be injected into the form.
			*/
			build() {
				let custom = this.template;
				/* istanbul ignore next */
				if (!custom) return control.error(`Invalid custom control type '${this.type}'. Please ensure you have registered it correctly as a template option.`);
				const fieldData = Object.assign(this.config);
				for (const prop of [
					"label",
					"description",
					"subtype",
					"id",
					"preview",
					"required",
					"title",
					"aria-required",
					"type"
				]) fieldData[prop] = this.config[prop] || this[prop];
				custom = custom.bind(this);
				custom = custom(fieldData);
				if (custom.js) this.js = custom.js;
				if (custom.css) this.css = custom.css;
				this.onRender = custom.onRender;
				return {
					field: custom.field,
					layout: custom.layout
				};
			}
		};
		//#endregion
		//#region src/js/control/hidden.js
		/**
		* Hidden input class
		* Output a <input type="hidden" ... /> form element
		* @extends control
		*/
		var controlHidden = class extends control {
			/**
			* build a hidden input dom element
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				this.field = this.markup("input", null, this.config);
				return {
					field: this.field,
					layout: "hidden"
				};
			}
			/**
			* onRender callback
			*/
			onRender() {
				if (this.config.userData) $(this.field).val(this.config.userData[0]);
			}
		};
		control.register("hidden", controlHidden);
		//#endregion
		//#region src/js/control/paragraph.js
		/**
		* Text input class
		* Output a <input type="text" ... /> form element
		* @extends control
		*/
		var controlParagraph = class extends control {
			/**
			* build a paragraph DOM element
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { type, ...attrs } = this.config;
				let tag = type;
				const typeMap = {
					paragraph: "p",
					header: this.subtype
				};
				if (typeMap[type]) tag = typeMap[type];
				return {
					field: this.markup(tag, utils.parsedHtml(this.label), attrs),
					layout: "noLabel"
				};
			}
		};
		control.register(["paragraph", "header"], controlParagraph);
		control.register([
			"p",
			"address",
			"blockquote",
			"canvas",
			"output"
		], controlParagraph, "paragraph");
		control.register([
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6"
		], controlParagraph, "header");
		//#endregion
		//#region src/js/control/select.js
		/**
		* Text input class
		* Output a <input type="text" ... /> form element
		* @extends control
		*/
		var controlSelect = class extends control {
			/**
			* definition
			* @return {Object} select control definition
			*/
			static get definition() {
				return {
					inactive: ["checkbox"],
					mi18n: { minSelectionRequired: "minSelectionRequired" }
				};
			}
			/**
			* build a select DOM element, supporting other jquery text form-control's
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const options = [];
				const { values, value, placeholder, type, inline, other, toggle, ...data } = this.config;
				const optionType = type.replace("-group", "");
				const isSelect = type === "select";
				if (data.multiple || type === "checkbox-group") data.name = data.name + "[]";
				if ((type === "checkbox-group" || type === "radio-group") && data.required) {
					const self = this;
					const defaultOnRender = this.onRender.bind(this);
					this.onRender = function() {
						defaultOnRender();
						self.groupRequired();
					};
				}
				delete data.title;
				if (values) {
					if (placeholder && isSelect) options.push(this.markup("option", placeholder, {
						disabled: true,
						selected: true,
						value: ""
					}));
					for (let i = 0; i < values.length; i++) {
						let option = values[i];
						if (typeof option === "string") option = {
							label: option,
							value: option
						};
						const { label = "", ...optionAttrs } = option;
						optionAttrs.id = `${data.id}-${i}`;
						if (!optionAttrs.selected || placeholder) delete optionAttrs.selected;
						if (typeof value !== "undefined" && optionAttrs.value === value) optionAttrs.selected = true;
						if (isSelect) {
							const o = this.markup("option", document.createTextNode(label), optionAttrs);
							options.push(o);
						} else {
							const labelContents = [label];
							let wrapperClass = `formbuilder-${optionType}`;
							if (inline) wrapperClass += "-inline";
							optionAttrs.type = optionType;
							if (optionAttrs.selected) {
								optionAttrs.checked = "checked";
								delete optionAttrs.selected;
							}
							const input = this.markup("input", null, Object.assign({}, data, optionAttrs));
							const labelAttrs = { for: optionAttrs.id };
							let output = [input, this.markup("label", labelContents, labelAttrs)];
							if (toggle) {
								delete labelAttrs.for;
								labelAttrs.className = "kc-toggle";
								labelContents.unshift(input, this.markup("span"));
								output = this.markup("label", labelContents, labelAttrs);
							}
							const wrapper = this.markup("div", output, { className: wrapperClass });
							options.push(wrapper);
						}
					}
					if (!isSelect && other) {
						const otherOptionAttrs = {
							id: `${data.id}-other`,
							className: `${data.className ?? ""} other-option`,
							value: ""
						};
						let wrapperClass = `formbuilder-${optionType}`;
						if (inline) wrapperClass += "-inline";
						const optionAttrs = Object.assign({}, data, otherOptionAttrs);
						optionAttrs.type = optionType;
						const otherValAttrs = {
							type: "text",
							events: { input: (evt) => {
								const otherInput = evt.target;
								const other = otherInput.parentElement.previousElementSibling;
								other.value = otherInput.value;
							} },
							id: `${otherOptionAttrs.id}-value`,
							className: "other-val"
						};
						const primaryInput = this.markup("input", null, optionAttrs);
						const otherInputs = [document.createTextNode(control.mi18n("other")), this.markup("input", null, otherValAttrs)];
						const inputLabel = this.markup("label", otherInputs, { for: optionAttrs.id });
						const wrapper = this.markup("div", [primaryInput, inputLabel], { className: wrapperClass });
						options.push(wrapper);
					}
				}
				if (type === "select") this.dom = this.markup(optionType, options, trimObj(data, true));
				else {
					let className = type;
					if (inline) className += ` ${className}--inline`;
					this.dom = this.markup("div", options, { className });
				}
				return this.dom;
			}
			/**
			* setCustomValidity for checkbox-group
			*/
			groupRequired() {
				const allInputs = this.element.getElementsByTagName("input");
				const checkboxes = this.element.querySelectorAll("input:not([type=text])");
				const otherCheckbox = this.element.querySelector(".other-option");
				const otherValue = this.element.querySelector(".other-val");
				const setValidity = (checkbox, isValid) => {
					const minReq = control.mi18n("minSelectionRequired", 1);
					if (isValid) checkbox.setCustomValidity("");
					else checkbox.setCustomValidity(minReq);
				};
				const toggleRequired = (checkboxes, otherCheckbox, otherValue, isValid) => {
					Array.prototype.forEach.call(checkboxes, (cb) => {
						if (isValid) cb.removeAttribute("required");
						else cb.setAttribute("required", "required");
						setValidity(cb, isValid);
					});
					if (otherCheckbox) if (otherCheckbox.checked) otherValue.setAttribute("required", "required");
					else otherValue.removeAttribute("required");
				};
				const toggleValid = () => {
					toggleRequired(checkboxes, otherCheckbox, otherValue, [].some.call(checkboxes, (cb) => cb.checked));
				};
				for (let i = allInputs.length - 1; i >= 0; i--) allInputs[i].addEventListener("change", toggleValid);
				toggleValid();
			}
			/**
			* onRender callback
			*/
			onRender() {
				if (this.config.userData) {
					const selectedOptions = this.config.userData.slice();
					if (this.config.type === "select") $(this.dom).val(selectedOptions).prop("selected", true);
					else if (this.config.type.endsWith("-group")) {
						if (this.config.type === "checkbox-group") this.dom.querySelectorAll("input[type=checkbox]").forEach((input) => {
							input.removeAttribute("checked");
						});
						this.dom.querySelectorAll("input").forEach((input) => {
							if (input.classList.contains("other-val")) return;
							for (let i = 0; i < selectedOptions.length; i++) if (input.value === selectedOptions[i]) {
								input.setAttribute("checked", "checked");
								selectedOptions.splice(i, 1);
								break;
							}
							if (input.id.endsWith("-other") && selectedOptions.length > 0) {
								const otherVal = this.dom.querySelector(`#${input.id}-value`);
								input.setAttribute("checked", "checked");
								otherVal.value = input.value = selectedOptions[0];
								otherVal.style.display = "inline-block";
							}
						});
					}
				}
			}
		};
		control.register([
			"select",
			"checkbox-group",
			"radio-group",
			"checkbox"
		], controlSelect);
		//#endregion
		//#region src/js/control/text.js
		/**
		* Text input class
		* Output a <input type="text" ... /> form element
		* @extends control
		*/
		var controlText = class extends control {
			/**
			* class configuration
			*/
			static get definition() {
				return { mi18n: {
					date: "dateField",
					file: "fileUpload"
				} };
			}
			/**
			* build a text DOM element, supporting other jquery text form-control's
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				let { name } = this.config;
				name = this.config.multiple ? `${name}[]` : name;
				const inputConfig = Object.assign({}, this.config, { name });
				this.dom = this.markup("input", null, inputConfig);
				return this.dom;
			}
			/**
			* onRender callback
			*/
			onRender() {
				if (this.config.userData) $(this.dom).val(this.config.userData[0]);
			}
		};
		control.register([
			"text",
			"file",
			"date",
			"number"
		], controlText);
		control.register([
			"text",
			"password",
			"email",
			"color",
			"tel"
		], controlText, "text");
		control.register([
			"date",
			"time",
			"datetime-local"
		], controlText, "date");
		control.register(["number", "range"], controlText, "number");
		//#endregion
		//#region src/js/control/textarea.js
		/**
		* Text input class
		* Output a <input type="text" ... /> form element
		* @extends control
		*/
		var controlTextarea = class extends control {
			/**
			* class configuration
			*/
			static get definition() {
				return { mi18n: { textarea: "textArea" } };
			}
			/**
			* build a text DOM element, supporting other jquery text form-control's
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { value = "", ...attrs } = this.config;
				delete attrs["type"];
				this.field = this.markup("textarea", this.parsedHtml(value), attrs);
				return this.field;
			}
			/**
			* onRender callback
			*/
			onRender() {
				if (this.config.userData) $(this.field).val(this.config.userData[0]);
			}
			/**
			* extend the default events to add a prerender for textareas
			* @param {string} eventType
			* @return {Function} prerender function
			*/
			on(eventType) {
				if (eventType == "prerender" && this.preview) return (element) => {
					if (this.field) element = this.field;
					$(element).on("mousedown", (e) => {
						e.stopPropagation();
					});
				};
				return super.on(eventType);
			}
		};
		control.register("textarea", controlTextarea);
		control.register("textarea", controlTextarea, "textarea");
		//#endregion
		//#region src/js/control/textarea.tinymce.js
		/**
		* TinyMCE editor element
		* See https://www.tinymce.com/ for more info
		*
		* To customise the options on this editor, simply pass any properties you wish to overwrite in the controlConfig option to formRender
		* e.g. the below example would disable the ability to paste images as a base64 encoded src
		* ```
		* var renderOpts = {
		*    controlConfig: {
		*      'textarea.tinymce': {
		*         paste_data_images: false
		*       }
		*    }
		* };
		* ```
		* @extends controlTextarea
		*/
		var controlTinymce = class extends controlTextarea {
			/**
			* configure the tinymce editor requirements
			*/
			configure() {
				this.js = [];
				if (!window.tinymce) this.js.push("https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.11/tinymce.min.js");
				if (this.classConfig.js) {
					let js = this.classConfig.js;
					if (!Array.isArray(js)) js = new Array(js);
					this.js = this.js.concat(js);
					delete this.classConfig.js;
				}
				if (this.classConfig.css) this.css = this.classConfig.css;
				this.editorOptions = {
					height: 250,
					paste_data_images: true,
					plugins: [
						"advlist",
						"autolink",
						"lists",
						"link",
						"image",
						"charmap",
						"print",
						"preview",
						"anchor",
						"searchreplace",
						"visualblocks",
						"code",
						"fullscreen",
						"insertdatetime",
						"media",
						"table",
						"contextmenu",
						"paste",
						"code"
					],
					toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table"
				};
			}
			/**
			* build a textarea DOM element, to be later replaced by the TinyMCE editor
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { value = "", ...attrs } = this.config;
				delete attrs["type"];
				this.field = this.markup("textarea", this.parsedHtml(value), attrs);
				if (attrs.disabled) this.editorOptions.readonly = true;
				return this.field;
			}
			/**
			* When the element is rendered into the DOM, execute the following code to initialise it
			*/
			onRender() {
				const oldInst = window.tinymce.get(this.id);
				if (oldInst) window.tinymce.remove(oldInst);
				const options = jQuery.extend(this.editorOptions, this.classConfig);
				options.target = this.field;
				const removedPlugins = [];
				if (Number(window.tinymce.majorVersion) >= 5) removedPlugins.push("contextmenu");
				if (Number(window.tinymce.majorVersion) >= 6) removedPlugins.push("paste", "print");
				options.plugins = options.plugins.filter((plugin) => {
					return removedPlugins.indexOf(plugin) === -1;
				});
				const userData = this.config.userData ? this.parsedHtml(this.config.userData[0]) : void 0;
				const copiedData = window.lastFormBuilderCopiedTinyMCE ? this.parsedHtml(window.lastFormBuilderCopiedTinyMCE) : void 0;
				window.lastFormBuilderCopiedTinyMCE = null;
				const afterInit = function(inst) {
					if (copiedData) inst[0].setContent(copiedData);
					else if (userData) inst[0].setContent(userData);
				};
				setTimeout(() => {
					window.tinymce.init(options).then(afterInit);
				}, 0);
			}
		};
		controlTextarea.register("tinymce", controlTinymce, "textarea");
		//#endregion
		//#region src/js/control/textarea.quill.js
		/**
		* Quill rich text editor element
		* See https://quilljs.com/ for more info
		* @extends controlTextarea
		*/
		var controlQuill = class extends controlTextarea {
			/**
			* configure the quill editor requirements
			*/
			configure() {
				const defaultClassConfig = {
					js: "https://cdn.quilljs.com/1.2.4/quill.js",
					css: "https://cdn.quilljs.com/1.2.4/quill.snow.css"
				};
				const defaultEditorConfig = {
					modules: { toolbar: [
						[{ header: [
							1,
							2,
							false
						] }],
						[
							"bold",
							"italic",
							"underline"
						],
						["code-block"]
					] },
					placeholder: this.config.placeholder || "",
					theme: "snow"
				};
				const [customClassConfig, customEditorConfig] = utils.splitObject(this.classConfig, ["css", "js"]);
				Object.assign(this, {
					...defaultClassConfig,
					...customClassConfig
				});
				this.editorConfig = {
					...defaultEditorConfig,
					...customEditorConfig
				};
			}
			/**
			* build a div DOM element to be later replaced with the quill editor
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { value = "", ...attrs } = this.config;
				delete attrs["type"];
				this.field = this.markup("div", null, attrs);
				if (this.field.classList.contains("form-control")) this.field.classList.remove("form-control");
				return this.field;
			}
			/**
			* When the element is rendered into the DOM, execute the following code to initialise it
			* @param {Object} evt - event
			*/
			onRender(evt) {
				const value = this.config.value || "";
				const Delta = window.Quill.import("delta");
				window.fbEditors.quill[this.id] = {};
				const editor = window.fbEditors.quill[this.id];
				editor.instance = new window.Quill(this.field, this.editorConfig);
				editor.data = new Delta();
				if (value) editor.instance.setContents(window.JSON.parse(this.parsedHtml(value)));
				editor.instance.on("text-change", function(delta) {
					editor.data = editor.data.compose(delta);
				});
				return evt;
			}
		};
		controlTextarea.register("quill", controlQuill, "textarea");
		//#endregion
		//#region src/js/config.js
		import_mi18n_min.default.addLanguage("en-US", {
			"NATIVE_NAME": "English (US)",
			"ENGLISH_NAME": "English",
			"addOption": "Add Option +",
			"allFieldsRemoved": "All fields were removed.",
			"allowMultipleFiles": "Allow users to upload multiple files",
			"allowSelect": "Allow selection",
			"autocomplete": "Autocomplete",
			"button": "Button",
			"cannotBeEmpty": "This field cannot be empty",
			"checkboxGroup": "Checkbox Group",
			"checkbox": "Checkbox",
			"checkboxes": "Checkboxes",
			"className": "Class",
			"clearAllMessage": "Are you sure you want to clear all fields?",
			"clear": "Clear",
			"close": "Close",
			"content": "Content",
			"copy": "Copy To Clipboard",
			"copyButton": "&#43;",
			"copyButtonTooltip": "Copy",
			"dateField": "Date Field",
			"description": "Help Text",
			"descriptionField": "Description",
			"devMode": "Developer Mode",
			"editNames": "Edit Names",
			"editorTitle": "Form Elements",
			"editXML": "Edit XML",
			"enableOther": "Enable &quot;Other&quot;",
			"enableOtherMsg": "Let users enter an unlisted option",
			"fieldDeleteWarning": "false",
			"fieldVars": "Field Variables",
			"fieldNonEditable": "This field cannot be edited.",
			"fieldRemoveWarning": "Are you sure you want to remove this field?",
			"fileUpload": "File Upload",
			"formUpdated": "Form Updated",
			"getStarted": "Drag a field from the right to this area",
			"header": "Header",
			"hide": "Edit",
			"hidden": "Hidden Input",
			"inline": "Inline",
			"inlineDesc": "Display {type} inline",
			"label": "Label",
			"labelEmpty": "Field Label cannot be empty",
			"limitRole": "Limit access to one or more of the following roles:",
			"mandatory": "Mandatory",
			"maxlength": "Max Length",
			"minOptionMessage": "This field requires a minimum of 2 options",
			"minSelectionRequired": "Minimum {min} selections required",
			"multipleFiles": "Multiple Files",
			"name": "Name",
			"no": "No",
			"noFieldsToClear": "There are no fields to clear",
			"number": "Number",
			"off": "Off",
			"on": "On",
			"option": "Option",
			"optionCount": "Option {count}",
			"options": "Options",
			"optional": "optional",
			"optionLabelPlaceholder": "Label",
			"optionValuePlaceholder": "Value",
			"optionEmpty": "Option value required",
			"other": "Other",
			"paragraph": "Paragraph",
			"placeholder": "Placeholder",
			"placeholders.value": "Value",
			"placeholders.label": "Label",
			"placeholders.email": "Enter your email",
			"placeholders.className": "space separated classes",
			"placeholders.password": "Enter your password",
			"preview": "Preview",
			"radioGroup": "Radio Group",
			"radio": "Radio",
			"removeMessage": "Remove Element",
			"removeOption": "Remove Option",
			"remove": "&#215;",
			"required": "Required",
			"reset": "Reset",
			"requireValidOption": "Only accept a pre-defined Option",
			"richText": "Rich Text Editor",
			"roles": "Access",
			"rows": "Rows",
			"save": "Save",
			"selectOptions": "Options",
			"select": "Select",
			"selectColor": "Select Color",
			"selectionsMessage": "Allow Multiple Selections",
			"size": "Size",
			"sizes": "Sizes",
			"size.xs": "Extra Small",
			"size.sm": "Small",
			"size.m": "Default",
			"size.lg": "Large",
			"step": "Step",
			"style": "Style",
			"styles": "Styles",
			"styles.btn": "Button Styles",
			"styles.btn.default": "Default",
			"styles.btn.danger": "Danger",
			"styles.btn.info": "Info",
			"styles.btn.primary": "Primary",
			"styles.btn.success": "Success",
			"styles.btn.warning": "Warning",
			"submit": "Submit",
			"subtype": "Type",
			"text": "Text Field",
			"textArea": "Text Area",
			"toggle": "Toggle",
			"warning": "Warning!",
			"value": "Value",
			"viewJSON": "[{&hellip;}]",
			"viewXML": "&lt;/&gt;",
			"yes": "Yes"
		});
		var defaultI18n = { location: "assets/lang/" };
		//#endregion
		//#region src/js/customControls.js
		/**
		* customControls serves as a register for two types of custom fields supported by formBuilder
		*  - Custom controls defined by a template
		*  - Custom control defined by a field definition only
		*
		*  The code takes two paths
		*   - Custom controls with a template will be a proxy function created to generate a controlCustom class
		*   - Fields without templates will map to their defined type/subtype class
		*/
		var customControls = class {
			constructor(templates = {}, fields = []) {
				this.customRegister = {};
				this.templateControlRegister = {};
				this.def = {
					icon: {},
					i18n: {}
				};
				this.register(templates, fields);
			}
			/**
			* Override the register method to allow passing 'templates' configuration data
			* @param {Object} templates an object/hash of template data as defined https://formbuilder.online/docs/formBuilder/options/templates/
			* @param {Array} fields
			*/
			register(templates = {}, fields = []) {
				fields.forEach((field) => {
					if (field.template) {
						const fieldType = field.type || field.attrs?.type;
						templates[fieldType] = field.template;
					}
				});
				const locale = import_mi18n_min.default.locale;
				if (!this.def.i18n[locale]) this.def.i18n[locale] = {};
				const _this = this;
				Object.keys(templates).forEach((templateName) => {
					const templateControl = function(config, preview) {
						this.customControl = new controlCustom(config, preview, templates[templateName]);
						/**
						* build a custom control defined in the templates option
						* @return {{field: any, layout: any}} DOM Element to be injected into the form.
						*/
						this.build = function() {
							return this.customControl.build();
						};
						this.on = function(eventType) {
							return this.customControl.on(eventType);
						};
					};
					templateControl.definition = {};
					templateControl.label = (type) => _this.label(type);
					templateControl.icon = (type) => _this.icon(type);
					this.templateControlRegister[templateName] = templateControl;
				});
				for (const field of fields) {
					let type = field.type;
					field.attrs = field.attrs || {};
					if (!type) {
						if (!field.attrs.type) {
							control.error("Ignoring invalid custom field definition. Please specify a type property.");
							continue;
						}
						type = field.attrs.type;
					}
					let lookup = field.subtype || type;
					if (!templates[type]) try {
						const controlClass = control.getClass(type, field.subtype);
						lookup = field.datatype ? field.datatype : `${type}-${Math.floor(Math.random() * 9e3 + 1e3)}`;
						this.customRegister[lookup] = jQuery.extend(field, {
							type,
							class: controlClass
						});
					} catch (e) {
						control.error("Error while registering custom field: " + type + (field.subtype ? ":" + field.subtype : "") + ". Unable to find any existing defined control or template for rendering.");
					}
					else {
						const controlClass = this.templateControlRegister[type];
						controlClass.definition = field;
						this.customRegister[lookup] = jQuery.extend(field, {
							type,
							class: controlClass
						});
					}
					this.def.i18n[locale][lookup] = Array.isArray(field.label) ? import_mi18n_min.default.get(...field.label) || field.label[0] : field.label;
					this.def.icon[lookup] = field.icon;
				}
			}
			/**
			* Retrieve the translated control label for a control type
			* @param {String} type
			* @return {String} translated control
			*/
			label(type) {
				/**
				* Retrieve a translated string
				* By default looks for translations defined against the class (for plugin controls)
				* Expects {locale1: {type: label}, locale2: {type: label}}, or {default: label}, or {local1: label, local2: label2}
				* @param {String} lookup string to retrieve the label / translated string for
				* @param {Object|Number|String} [args] - string or key/val pairs for string lookups with variables
				* @return {String} the translated label
				*/
				const def = this.def;
				let i18n = def.i18n || {};
				const locale = import_mi18n_min.default.locale;
				i18n = i18n[locale] || i18n.default || i18n;
				const lookupCamel = control.camelCase(type);
				const value = typeof i18n == "object" ? i18n[lookupCamel] || i18n[type] : i18n;
				if (value) return value;
				else {
					let mapped = def.mi18n;
					if (typeof mapped === "object") mapped = mapped[lookupCamel] || mapped[type];
					if (!mapped) mapped = lookupCamel;
					return import_mi18n_min.default.get(mapped);
				}
			}
			get definition() {
				return {};
			}
			/**
			* Retrieve the icon for a control type
			* @param {String} type
			* @return {String} icon
			*/
			icon(type) {
				const def = this.def;
				if (def && typeof def.icon === "object") return def.icon[type];
				return def.icon;
			}
			/**
			* Returns any custom fields that map to an existing type/subtype combination
			* @param  {string|false} type optional type of control we want to look up
			* subtypes of. If not specified will return all types
			* @return {Array|function} registered custom lookup keys
			*/
			getRegistered(type = false) {
				if (type) return this.templateControlRegister[type] ?? void 0;
				return Object.keys(this.customRegister);
			}
			/**
			* Retrieve the class for a specified control type
			* @param {String} type type of control we are looking up
			* a class mapped to this subtype. If none found, fall back to the type.
			* @return {Class} control subclass as defined in the call to register
			*/
			getClass(type) {
				return this.templateControlRegister[type] ?? void 0;
			}
			/**
			* Retrieve the class for a specified control type
			* @param {string} lookup - custom control lookup to check for
			* @return {Class} control subclass as defined in the call to register
			*/
			lookup(lookup) {
				return this.customRegister[lookup];
			}
		};
		//#endregion
		//#region src/js/form-render.js
		/**
		* FormRender Class
		*/
		var FormRender = class {
			/**
			* Create & configure a new FormRender instance
			* @param {Object} options - an object hash of supported options
			*/
			constructor(options = {}) {
				const defaults = {
					layout,
					layoutTemplates: {},
					controls: {},
					controlConfig: {},
					container: false,
					dataType: "json",
					disableHTMLLabels: false,
					formData: [],
					i18n: Object.assign({}, defaultI18n),
					messages: {
						formRendered: "Form Rendered",
						noFormData: "No form data.",
						other: "Other",
						selectColor: "Select Color",
						invalidControl: "Invalid control"
					},
					onRender: () => {},
					render: true,
					sanitizerOptions: {
						clobberingProtection: {
							document: true,
							form: false,
							namespaceAttributes: true
						},
						backendOrder: [
							"dompurify",
							"sanitizer",
							"fallback"
						]
					},
					templates: {},
					notify: {
						error: (error) => {
							console.log(error);
						},
						success: (success) => {
							console.log(success);
						},
						warning: (warning) => {
							console.warn(warning);
						}
					}
				};
				this.options = jQuery.extend(true, defaults, options);
				this.instanceContainers = [];
				setSanitizerConfig(this.options.sanitizerOptions);
				if (!import_mi18n_min.default.current) import_mi18n_min.default.init(this.options.i18n);
				if (this.options.formData) this.options.formData = this.parseFormData(this.options.formData);
				else this.options.formData = [];
				control.controlConfig = options.controlConfig || {};
				control.loadCustom(options.controls);
				this.templatedControls = new customControls(this.options.templates);
				/**
				* Extend Element prototype to allow us to append fields
				*
				* @param {Array} fields array of elements
				*/
				if (typeof Element.prototype.appendFormFields !== "function") Element.prototype.appendFormFields = function(fields) {
					if (!Array.isArray(fields)) fields = [fields];
					const renderedFormWrap = utils.markup("div", null, { className: "rendered-form formbuilder-embedded-bootstrap" });
					this.appendChild(renderedFormWrap);
					fields.forEach((field) => {
						const [rowGroup] = field.className.match(/row-([^\s]+)/) || [];
						if (rowGroup) {
							const rowID = this.id ? `${this.id}-row-${rowGroup}` : `row-${rowGroup}`;
							let rowGroupNode = document.getElementById(rowID);
							if (!rowGroupNode) {
								rowGroupNode = utils.markup("div", null, {
									id: rowID,
									className: "row"
								});
								renderedFormWrap.appendChild(rowGroupNode);
							}
							rowGroupNode.appendChild(field);
						} else renderedFormWrap.appendChild(field);
						field.dispatchEvent(new Event("fieldRendered", {
							bubbles: true,
							cancelable: false
						}));
					});
				};
				/**
				* Extend Element prototype to remove content
				*/
				if (typeof Element.prototype.emptyContainer !== "function") Element.prototype.emptyContainer = function() {
					const element = this;
					while (element.lastChild) element.removeChild(element.lastChild);
				};
			}
			/**
			* Clean up passed object configuration to prepare for use with the markup function
			* @param {Object} field - object of field configuration
			* @param {number} [instanceIndex] - instance index
			* @return {Object} sanitized field object
			*/
			sanitizeField(field, instanceIndex) {
				let sanitizedField = Object.assign({}, field);
				if (instanceIndex) {
					sanitizedField.id = field.id && `${field.id}-${instanceIndex}`;
					sanitizedField.name = field.name && `${field.name}-${instanceIndex}`;
				}
				sanitizedField.className = Array.isArray(field.className) ? utils.unique(field.className.join(" ").split(" ")).join(" ") : field.className || field.class || null;
				delete sanitizedField.class;
				if (field.values) sanitizedField.values = field.values.map((option) => utils.trimObj(option));
				sanitizedField = utils.trimObj(sanitizedField);
				if (Array.isArray(field.userData) && field.userData.length === 0) sanitizedField.userData = [];
				return sanitizedField;
			}
			/**
			* parses `container` option or returns element
			* @param  {Object|string|HTMLElement} element
			* @return {HTMLElement} parsedElement
			*/
			getElement(element) {
				element = this.options.container || element;
				if (element instanceof jQuery) element = element[0];
				else if (typeof element === "string") element = document.querySelector(element);
				return element;
			}
			/**
			* Main render method which produces the form from passed configuration
			* @param {Object} element - an html element to render the form into (optional)
			* @param {number} instanceIndex - instance index
			* @return {Object} rendered form
			*/
			render(element = null, instanceIndex = 0) {
				const formRender = this;
				const opts = this.options;
				element = this.getElement(element);
				const runCallbacks = function() {
					if (opts.onRender) opts.onRender();
				};
				const rendered = [];
				const engine = new opts.layout(opts.layoutTemplates, false, opts.disableHTMLLabels, opts.controlConfig);
				if (opts.formData.length) for (let i = 0; i < opts.formData.length; i++) {
					const fieldData = opts.formData[i];
					const sanitizedField = this.sanitizeField(fieldData, instanceIndex);
					const controlClass = this.templatedControls.getClass(fieldData.type) || control.getClass(fieldData.type, fieldData.subtype);
					const field = engine.build(controlClass, sanitizedField);
					rendered.push(field);
				}
				else opts.notify.warning(opts.messages.noFormData);
				if (element) this.instanceContainers[instanceIndex] = element;
				if (opts.render && element) {
					element.emptyContainer();
					element.appendFormFields(rendered);
					runCallbacks();
					opts.notify.success(opts.messages.formRendered);
				} else {
					/**
					* Retrieve the html markup for a passed array of DomElements
					* @param {Array} fields - array of dom elements
					* @return {string} fields html
					*/
					const exportMarkup = (fields) => fields.map((elem) => elem.innerHTML).join("");
					formRender.markup = exportMarkup(rendered);
				}
				if (opts.disableInjectedStyle === true) {
					const styleTags = document.getElementsByClassName("formBuilder-injected-style");
					forEach(styleTags, (i) => remove(styleTags[i]));
				} else if (opts.disableInjectedStyle === "bootstrap" && opts.render && element) element.getElementsByClassName("formbuilder-embedded-bootstrap").item(0)?.classList.remove("formbuilder-embedded-bootstrap");
				return formRender;
			}
			/**
			* Render a single control / field
			* Expects only a single field configuration to be set in opt.formData
			* @param {Object} element - an optional DOM element to render the field into - if not specified will just return the rendered field - note if you do this you will need to manually call element.dispatchEvent('fieldRendered') on the returned element when it is rendered into the DOM
			* @return {Object} the formRender object
			*/
			renderControl(element = null) {
				const opts = this.options;
				const fieldData = opts.formData;
				if (!fieldData || Array.isArray(fieldData)) throw new Error("To render a single element, please specify a single object of formData for the field in question");
				const sanitizedField = this.sanitizeField(fieldData);
				const engine = new opts.layout();
				const controlClass = this.templatedControls.getClass(fieldData.type) || control.getClass(fieldData.type, fieldData.subtype);
				const forceTemplate = opts.forceTemplate || "hidden";
				const field = engine.build(controlClass, sanitizedField, forceTemplate);
				element.appendFormFields(field);
				opts.notify.success(opts.messages.formRendered);
				return this;
			}
			/**
			* Return user entered data
			* @return {Object[]}
			*/
			get userData() {
				const definedFields = this.options.formData.slice();
				definedFields.filter((fieldData) => fieldData.subtype === "tinymce").forEach((fieldData) => window.tinymce.get(fieldData.name).save());
				this.instanceContainers.forEach((container) => {
					const userDataMap = $("select, input, textarea", container).serializeArray().reduce((acc, { name, value }) => {
						name = name.replace(/\[\w*]/, "");
						acc[name] ??= [];
						acc[name].push(value);
						return acc;
					}, {});
					const definedFieldsLength = definedFields.length;
					for (let i = 0; i < definedFieldsLength; i++) {
						const definedField = definedFields[i];
						if (definedField.name === void 0) continue;
						if (definedField.disabled) continue;
						definedField.userData = userDataMap[definedField.name] ?? [];
					}
				});
				return definedFields;
			}
			/** Clear all rendered fields */
			clear() {
				this.instanceContainers.forEach((container) => {
					this.options.formData.slice().filter((fieldData) => fieldData.subtype === "tinymce").forEach((fieldData) => window.tinymce.get(fieldData.name).setContent(""));
					container.querySelectorAll("input, select, textarea").forEach((input) => {
						if (["checkbox", "radio"].includes(input.type)) input.checked = false;
						else input.value = "";
					});
				});
			}
			/**
			* ensure formData is correct type
			* @param {Object|string} formData
			* @return {Object} formData
			*/
			parseFormData(formData) {
				const setData = {
					xml: (formData) => parseXML(formData),
					json: (formData) => window.JSON.parse(formData)
				};
				if (typeof formData !== "object") formData = setData[this.options.dataType](formData) || false;
				return formData;
			}
		};
		(function($) {
			let formRenderForms;
			const instanceFor = (context) => context && context.data && context.data("formRenderInstance") || methods.instance;
			const methods = {
				init: (forms, options = {}) => {
					formRenderForms = forms;
					const instance = new FormRender(options);
					instance.forms = forms;
					forms.data("formRenderInstance", instance);
					methods.instance = instance;
					forms.each((index) => instance.render(forms[index], index));
					return instance;
				},
				userData: function() {
					const instance = instanceFor(this);
					return instance && instance.userData;
				},
				clear: function() {
					const instance = instanceFor(this);
					return instance && instance.clear();
				},
				setData: function(formData) {
					const instance = instanceFor(this);
					if (instance) instance.options.formData = instance.parseFormData(formData);
				},
				render: function(formData, options = {}) {
					const instance = instanceFor(this);
					if (instance) {
						if (!formData) formData = instance.options.formData;
						instance.options = Object.assign({}, instance.options, options, { formData: instance.parseFormData(formData) });
						const forms = instance.forms || formRenderForms;
						forms.each((index) => instance.render(forms[index], index));
					}
				},
				html: function() {
					const instance = instanceFor(this);
					const forms = instance && instance.forms || formRenderForms;
					return forms.map((index) => forms[index]).html();
				}
			};
			$.fn.formRender = function(methodOrOptions = {}, ...args) {
				if (methods[methodOrOptions]) return methods[methodOrOptions].apply(this, args);
				else {
					const instance = methods.init(this, methodOrOptions);
					Object.assign(methods, instance);
					return instance;
				}
			};
			/**
			* renders an individual field into the current element
			* @param {Object} data - data structure for a single field output from formBuilder
			* @param {Object} options - optional subset of formRender options - doesn't support container or other form rendering based options.
			* @return {DOMElement} the rendered field
			*/
			$.fn.controlRender = function(data, options = {}) {
				options.formData = data;
				options.dataType = typeof data === "string" ? "json" : "xml";
				const formRender = new FormRender(options);
				const $elems = this;
				$elems.each((i) => formRender.renderControl($elems[i]));
				return $elems;
			};
		})(jQuery);
		//#endregion
	});
})(jQuery);
