/*
formBuilder - https://formbuilder.online/
Version: 2.0.0-beta
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":11}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":12}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":13}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":14}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":15}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
},{"../core-js/promise":3}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":2}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":4,"../core-js/symbol/iterator":5}],10:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":96}],11:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":23,"../../modules/es6.object.assign":87}],12:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":23,"../../modules/es6.object.define-property":88}],13:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":23,"../modules/es6.object.to-string":89,"../modules/es6.promise":90,"../modules/es6.string.iterator":91,"../modules/web.dom.iterable":95}],14:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":23,"../../modules/es6.object.to-string":89,"../../modules/es6.symbol":92,"../../modules/es7.symbol.async-iterator":93,"../../modules/es7.symbol.observable":94}],15:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":83,"../../modules/es6.string.iterator":91,"../../modules/web.dom.iterable":95}],16:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],17:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],18:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],19:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":42}],20:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":75,"./_to-iobject":77,"./_to-length":78}],21:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":22,"./_wks":84}],22:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],23:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],24:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":16}],25:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],26:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":31}],27:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":33,"./_is-object":42}],28:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],29:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":60,"./_object-keys":63,"./_object-pie":64}],30:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":23,"./_ctx":24,"./_global":33,"./_hide":35}],31:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],32:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":19,"./_ctx":24,"./_is-array-iter":40,"./_iter-call":43,"./_to-length":78,"./core.get-iterator-method":85}],33:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],34:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],35:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":26,"./_object-dp":55,"./_property-desc":65}],36:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":33}],37:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":26,"./_dom-create":27,"./_fails":31}],38:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],39:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":22}],40:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":48,"./_wks":84}],41:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":22}],42:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],43:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":19}],44:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":35,"./_object-create":54,"./_property-desc":65,"./_set-to-string-tag":69,"./_wks":84}],45:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":30,"./_has":34,"./_hide":35,"./_iter-create":44,"./_iterators":48,"./_library":50,"./_object-gpo":61,"./_redefine":67,"./_set-to-string-tag":69,"./_wks":84}],46:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":84}],47:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],48:[function(require,module,exports){
module.exports = {};
},{}],49:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":63,"./_to-iobject":77}],50:[function(require,module,exports){
module.exports = true;
},{}],51:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":31,"./_has":34,"./_is-object":42,"./_object-dp":55,"./_uid":81}],52:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":22,"./_global":33,"./_task":74}],53:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":31,"./_iobject":39,"./_object-gops":60,"./_object-keys":63,"./_object-pie":64,"./_to-object":79}],54:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":19,"./_dom-create":27,"./_enum-bug-keys":28,"./_html":36,"./_object-dps":56,"./_shared-key":70}],55:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":19,"./_descriptors":26,"./_ie8-dom-define":37,"./_to-primitive":80}],56:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":19,"./_descriptors":26,"./_object-dp":55,"./_object-keys":63}],57:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":26,"./_has":34,"./_ie8-dom-define":37,"./_object-pie":64,"./_property-desc":65,"./_to-iobject":77,"./_to-primitive":80}],58:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":59,"./_to-iobject":77}],59:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":28,"./_object-keys-internal":62}],60:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],61:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":34,"./_shared-key":70,"./_to-object":79}],62:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":20,"./_has":34,"./_shared-key":70,"./_to-iobject":77}],63:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":28,"./_object-keys-internal":62}],64:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],65:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],66:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":35}],67:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":35}],68:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":23,"./_descriptors":26,"./_global":33,"./_object-dp":55,"./_wks":84}],69:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":34,"./_object-dp":55,"./_wks":84}],70:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":71,"./_uid":81}],71:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":33}],72:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":16,"./_an-object":19,"./_wks":84}],73:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":25,"./_to-integer":76}],74:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":22,"./_ctx":24,"./_dom-create":27,"./_global":33,"./_html":36,"./_invoke":38}],75:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":76}],76:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],77:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":25,"./_iobject":39}],78:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":76}],79:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":25}],80:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":42}],81:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],82:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":23,"./_global":33,"./_library":50,"./_object-dp":55,"./_wks-ext":83}],83:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":84}],84:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":33,"./_shared":71,"./_uid":81}],85:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":21,"./_core":23,"./_iterators":48,"./_wks":84}],86:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":17,"./_iter-define":45,"./_iter-step":47,"./_iterators":48,"./_to-iobject":77}],87:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":30,"./_object-assign":53}],88:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":26,"./_export":30,"./_object-dp":55}],89:[function(require,module,exports){

},{}],90:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":16,"./_an-instance":18,"./_classof":21,"./_core":23,"./_ctx":24,"./_export":30,"./_for-of":32,"./_global":33,"./_is-object":42,"./_iter-detect":46,"./_library":50,"./_microtask":52,"./_redefine-all":66,"./_set-species":68,"./_set-to-string-tag":69,"./_species-constructor":72,"./_task":74,"./_wks":84}],91:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":45,"./_string-at":73}],92:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":19,"./_descriptors":26,"./_enum-keys":29,"./_export":30,"./_fails":31,"./_global":33,"./_has":34,"./_hide":35,"./_is-array":41,"./_keyof":49,"./_library":50,"./_meta":51,"./_object-create":54,"./_object-dp":55,"./_object-gopd":57,"./_object-gopn":59,"./_object-gopn-ext":58,"./_object-gops":60,"./_object-keys":63,"./_object-pie":64,"./_property-desc":65,"./_redefine":67,"./_set-to-string-tag":69,"./_shared":71,"./_to-iobject":77,"./_to-primitive":80,"./_uid":81,"./_wks":84,"./_wks-define":82,"./_wks-ext":83}],93:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":82}],94:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":82}],95:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":33,"./_hide":35,"./_iterators":48,"./_wks":84,"./es6.array.iterator":86}],96:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./runtime":97}],97:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return Promise.resolve(value.arg).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":222}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main mi18n class.
 */
var I18N = function () {
  /**
   * Process options and start the module
   * @param {Object} options
   */
  function I18N() {
    (0, _classCallCheck3.default)(this, I18N);

    var defaultConfig = {
      extension: '.lang',
      // local or remote directory containing language files
      location: 'assets/lang/',
      // list of available locales, handy for populating selector.
      langs: ['en-US'],
      locale: 'en-US', // init with user's preferred language
      preloaded: {}
    };
    var _this = this;

    /**
     * Load language and set default
     * @param  {Object} options
     * @return {Promise}        resolves language
     */
    _this.init = function (options) {
      _this.config = (0, _assign2.default)({}, defaultConfig, options);

      _this.langs = (0, _assign2.default)({}, _this.config.preloaded);
      _this.locale = _this.config.locale || _this.config.langs[0];

      return _this.setCurrent(_this.locale);
    };
  }

  /**
   * get a string from a loaded language file
   * @param  {String} key  - the key for the string we are trying to retrieve
   * @return {String}      - correct language string
   */


  (0, _createClass3.default)(I18N, [{
    key: 'getValue',
    value: function getValue(key) {
      return this.current && this.current[key] || key;
    }

    /**
     * Escape variable syntax
     * @param  {String} str
     * @return {String}     escaped str
     */

  }, {
    key: 'makeSafe',
    value: function makeSafe(str) {
      var mapObj = {
        '{': '\\{',
        '}': '\\}',
        '|': '\\|'
      };

      str = str.replace(/\{|\}|\|/g, function (matched) {
        return mapObj[matched];
      });

      return new RegExp(str, 'g');
    }

    /**
    * Temporarily put a string into the currently loaded language
    * @param  {String} key
    * @param  {String} string
    * @return {String} string in current language
    */

  }, {
    key: 'put',
    value: function put(key, string) {
      return this.current[key] = string;
    }

    /**
     * Parse arguments for the requested string
     * @param  {String} key  the key we use to lookup our translation
     * @param  {multi}  args  string, number or object containing our arguments
     * @return {String}      updated string translation
     */

  }, {
    key: 'get',
    value: function get(key, args) {
      var _this = this;
      var value = this.getValue(key);
      var tokens = value.match(/\{[^\}]+?\}/g);
      var token = void 0;

      if (args && tokens) {
        if ('object' === (typeof args === 'undefined' ? 'undefined' : (0, _typeof3.default)(args))) {
          for (var i = 0; i < tokens.length; i++) {
            token = tokens[i].substring(1, tokens[i].length - 1);
            value = value.replace(_this.makeSafe(tokens[i]), args[token] || '');
          }
        } else {
          value = value.replace(/\{[^\}]+?\}/g, args);
        }
      }

      return value;
    }

    /**
     * Turn raw text from the language files into fancy JSON
     * @param  {String} rawText
     * @return {Object} converted language file
     */

  }, {
    key: 'fromFile',
    value: function fromFile(rawText) {
      var lines = rawText.split('\n');
      var lang = {};

      for (var matches, i = 0; i < lines.length; i++) {
        matches = lines[i].match(/^(.+?) *?= *?([^\n]+)/);
        if (matches) {
          var value = matches[2].replace(/^\s+|\s+$/, '');
          lang[matches[1]] = value;
        }
      }

      return lang;
    }

    /**
     * Remove double carriage returns
     * @param  {Object} response
     * @return {Object}          processed language
     */

  }, {
    key: 'processFile',
    value: function processFile(response) {
      var rawText = response.replace(/\n\n/g, '\n');
      return this.fromFile(rawText);
    }

    /**
     * Load a remotely stored language file
     * @param  {String} locale
     * @return {Promise}       resolves response
     */

  }, {
    key: 'loadLang',
    value: function loadLang(locale) {
      var _this = this;
      return new window.Promise(function (resolve, reject) {
        if (_this.langs[locale]) {
          resolve(_this.langs[locale]);
        } else {
          (function () {
            var xhr = new XMLHttpRequest();
            var langFile = _this.config.location + locale + _this.config.extension;
            xhr.open('GET', langFile, true);
            xhr.onload = function () {
              if (this.status <= 304) {
                var processedFile = _this.processFile(xhr.responseText);
                _this.langs[locale] = processedFile;
                resolve(processedFile);
              } else {
                reject({
                  status: this.status,
                  statusText: xhr.statusText
                });
              }
            };
            xhr.onerror = function () {
              reject({
                status: this.status,
                statusText: xhr.statusText
              });
            };
            xhr.send();
          })();
        }
      });
    }

    /**
     * return currently available languages
     * @return {Object} all configured languages
     */

  }, {
    key: 'setCurrent',


    /**
     * Attempt to set the current language to the local provided
     * @param {String}   locale
     * @return {Promise} language
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loadLang(locale);

              case 2:

                this.locale = locale;
                this.current = this.langs[locale];

                return _context.abrupt('return', this.current);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setCurrent(_x) {
        return _ref.apply(this, arguments);
      }

      return setCurrent;
    }()
  }, {
    key: 'getLangs',
    get: function get() {
      return this.config.langs;
    }
  }]);
  return I18N;
}();

exports.default = new I18N();

},{"babel-runtime/core-js/object/assign":1,"babel-runtime/helpers/asyncToGenerator":6,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/typeof":9,"babel-runtime/regenerator":10}],99:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":117}],100:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":118}],101:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":119}],102:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":120}],103:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"core-js/library/fn/object/assign":121,"dup":1}],104:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"core-js/library/fn/object/define-property":122,"dup":2}],105:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":123}],106:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"core-js/library/fn/promise":124,"dup":3}],107:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"core-js/library/fn/symbol":125,"dup":4}],108:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"core-js/library/fn/symbol/iterator":126,"dup":5}],109:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
},{"../core-js/promise":106}],110:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7}],111:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"../core-js/object/define-property":104,"dup":8}],112:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
},{}],113:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":100,"../core-js/is-iterable":101}],114:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":99}],115:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":107,"../core-js/symbol/iterator":108}],116:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"dup":10,"regenerator-runtime":223}],117:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":141,"../../modules/es6.array.from":208,"../../modules/es6.string.iterator":216}],118:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":206,"../modules/es6.string.iterator":216,"../modules/web.dom.iterable":221}],119:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":207,"../modules/es6.string.iterator":216,"../modules/web.dom.iterable":221}],120:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":141,"../modules/es6.map":210,"../modules/es6.object.to-string":214,"../modules/es6.string.iterator":216,"../modules/es7.map.to-json":218,"../modules/web.dom.iterable":221}],121:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"../../modules/_core":141,"../../modules/es6.object.assign":211,"dup":11}],122:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"../../modules/_core":141,"../../modules/es6.object.define-property":212,"dup":12}],123:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":141,"../../modules/es6.object.keys":213}],124:[function(require,module,exports){
arguments[4][13][0].apply(exports,arguments)
},{"../modules/_core":141,"../modules/es6.object.to-string":214,"../modules/es6.promise":215,"../modules/es6.string.iterator":216,"../modules/web.dom.iterable":221,"dup":13}],125:[function(require,module,exports){
arguments[4][14][0].apply(exports,arguments)
},{"../../modules/_core":141,"../../modules/es6.object.to-string":214,"../../modules/es6.symbol":217,"../../modules/es7.symbol.async-iterator":219,"../../modules/es7.symbol.observable":220,"dup":14}],126:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"../../modules/_wks-ext":203,"../../modules/es6.string.iterator":216,"../../modules/web.dom.iterable":221,"dup":15}],127:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],128:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"dup":17}],129:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],130:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./_is-object":161,"dup":19}],131:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":151}],132:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"./_to-index":195,"./_to-iobject":197,"./_to-length":198,"dup":20}],133:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./_ctx')
  , IObject  = require('./_iobject')
  , toObject = require('./_to-object')
  , toLength = require('./_to-length')
  , asc      = require('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":135,"./_ctx":143,"./_iobject":158,"./_to-length":198,"./_to-object":199}],134:[function(require,module,exports){
var isObject = require('./_is-object')
  , isArray  = require('./_is-array')
  , SPECIES  = require('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":160,"./_is-object":161,"./_wks":204}],135:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":134}],136:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./_cof":137,"./_wks":204,"dup":21}],137:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"dup":22}],138:[function(require,module,exports){
'use strict';
var dP          = require('./_object-dp').f
  , create      = require('./_object-create')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":129,"./_ctx":143,"./_defined":144,"./_descriptors":145,"./_for-of":151,"./_iter-define":164,"./_iter-step":166,"./_meta":170,"./_object-create":173,"./_object-dp":174,"./_redefine-all":186,"./_set-species":188}],139:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":131,"./_classof":136}],140:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , $export        = require('./_export')
  , meta           = require('./_meta')
  , fails          = require('./_fails')
  , hide           = require('./_hide')
  , redefineAll    = require('./_redefine-all')
  , forOf          = require('./_for-of')
  , anInstance     = require('./_an-instance')
  , isObject       = require('./_is-object')
  , setToStringTag = require('./_set-to-string-tag')
  , dP             = require('./_object-dp').f
  , each           = require('./_array-methods')(0)
  , DESCRIPTORS    = require('./_descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":129,"./_array-methods":133,"./_descriptors":145,"./_export":149,"./_fails":150,"./_for-of":151,"./_global":152,"./_hide":154,"./_is-object":161,"./_meta":170,"./_object-dp":174,"./_redefine-all":186,"./_set-to-string-tag":189}],141:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23}],142:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":174,"./_property-desc":185}],143:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"./_a-function":127,"dup":24}],144:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],145:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"./_fails":150,"dup":26}],146:[function(require,module,exports){
arguments[4][27][0].apply(exports,arguments)
},{"./_global":152,"./_is-object":161,"dup":27}],147:[function(require,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"dup":28}],148:[function(require,module,exports){
arguments[4][29][0].apply(exports,arguments)
},{"./_object-gops":179,"./_object-keys":182,"./_object-pie":183,"dup":29}],149:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"./_core":141,"./_ctx":143,"./_global":152,"./_hide":154,"dup":30}],150:[function(require,module,exports){
arguments[4][31][0].apply(exports,arguments)
},{"dup":31}],151:[function(require,module,exports){
arguments[4][32][0].apply(exports,arguments)
},{"./_an-object":130,"./_ctx":143,"./_is-array-iter":159,"./_iter-call":162,"./_to-length":198,"./core.get-iterator-method":205,"dup":32}],152:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"dup":33}],153:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"dup":34}],154:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"./_descriptors":145,"./_object-dp":174,"./_property-desc":185,"dup":35}],155:[function(require,module,exports){
arguments[4][36][0].apply(exports,arguments)
},{"./_global":152,"dup":36}],156:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./_descriptors":145,"./_dom-create":146,"./_fails":150,"dup":37}],157:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"dup":38}],158:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"./_cof":137,"dup":39}],159:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"./_iterators":167,"./_wks":204,"dup":40}],160:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"./_cof":137,"dup":41}],161:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],162:[function(require,module,exports){
arguments[4][43][0].apply(exports,arguments)
},{"./_an-object":130,"dup":43}],163:[function(require,module,exports){
arguments[4][44][0].apply(exports,arguments)
},{"./_hide":154,"./_object-create":173,"./_property-desc":185,"./_set-to-string-tag":189,"./_wks":204,"dup":44}],164:[function(require,module,exports){
arguments[4][45][0].apply(exports,arguments)
},{"./_export":149,"./_has":153,"./_hide":154,"./_iter-create":163,"./_iterators":167,"./_library":169,"./_object-gpo":180,"./_redefine":187,"./_set-to-string-tag":189,"./_wks":204,"dup":45}],165:[function(require,module,exports){
arguments[4][46][0].apply(exports,arguments)
},{"./_wks":204,"dup":46}],166:[function(require,module,exports){
arguments[4][47][0].apply(exports,arguments)
},{"dup":47}],167:[function(require,module,exports){
arguments[4][48][0].apply(exports,arguments)
},{"dup":48}],168:[function(require,module,exports){
arguments[4][49][0].apply(exports,arguments)
},{"./_object-keys":182,"./_to-iobject":197,"dup":49}],169:[function(require,module,exports){
arguments[4][50][0].apply(exports,arguments)
},{"dup":50}],170:[function(require,module,exports){
arguments[4][51][0].apply(exports,arguments)
},{"./_fails":150,"./_has":153,"./_is-object":161,"./_object-dp":174,"./_uid":201,"dup":51}],171:[function(require,module,exports){
arguments[4][52][0].apply(exports,arguments)
},{"./_cof":137,"./_global":152,"./_task":194,"dup":52}],172:[function(require,module,exports){
arguments[4][53][0].apply(exports,arguments)
},{"./_fails":150,"./_iobject":158,"./_object-gops":179,"./_object-keys":182,"./_object-pie":183,"./_to-object":199,"dup":53}],173:[function(require,module,exports){
arguments[4][54][0].apply(exports,arguments)
},{"./_an-object":130,"./_dom-create":146,"./_enum-bug-keys":147,"./_html":155,"./_object-dps":175,"./_shared-key":190,"dup":54}],174:[function(require,module,exports){
arguments[4][55][0].apply(exports,arguments)
},{"./_an-object":130,"./_descriptors":145,"./_ie8-dom-define":156,"./_to-primitive":200,"dup":55}],175:[function(require,module,exports){
arguments[4][56][0].apply(exports,arguments)
},{"./_an-object":130,"./_descriptors":145,"./_object-dp":174,"./_object-keys":182,"dup":56}],176:[function(require,module,exports){
arguments[4][57][0].apply(exports,arguments)
},{"./_descriptors":145,"./_has":153,"./_ie8-dom-define":156,"./_object-pie":183,"./_property-desc":185,"./_to-iobject":197,"./_to-primitive":200,"dup":57}],177:[function(require,module,exports){
arguments[4][58][0].apply(exports,arguments)
},{"./_object-gopn":178,"./_to-iobject":197,"dup":58}],178:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"./_enum-bug-keys":147,"./_object-keys-internal":181,"dup":59}],179:[function(require,module,exports){
arguments[4][60][0].apply(exports,arguments)
},{"dup":60}],180:[function(require,module,exports){
arguments[4][61][0].apply(exports,arguments)
},{"./_has":153,"./_shared-key":190,"./_to-object":199,"dup":61}],181:[function(require,module,exports){
arguments[4][62][0].apply(exports,arguments)
},{"./_array-includes":132,"./_has":153,"./_shared-key":190,"./_to-iobject":197,"dup":62}],182:[function(require,module,exports){
arguments[4][63][0].apply(exports,arguments)
},{"./_enum-bug-keys":147,"./_object-keys-internal":181,"dup":63}],183:[function(require,module,exports){
arguments[4][64][0].apply(exports,arguments)
},{"dup":64}],184:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":141,"./_export":149,"./_fails":150}],185:[function(require,module,exports){
arguments[4][65][0].apply(exports,arguments)
},{"dup":65}],186:[function(require,module,exports){
arguments[4][66][0].apply(exports,arguments)
},{"./_hide":154,"dup":66}],187:[function(require,module,exports){
arguments[4][67][0].apply(exports,arguments)
},{"./_hide":154,"dup":67}],188:[function(require,module,exports){
arguments[4][68][0].apply(exports,arguments)
},{"./_core":141,"./_descriptors":145,"./_global":152,"./_object-dp":174,"./_wks":204,"dup":68}],189:[function(require,module,exports){
arguments[4][69][0].apply(exports,arguments)
},{"./_has":153,"./_object-dp":174,"./_wks":204,"dup":69}],190:[function(require,module,exports){
arguments[4][70][0].apply(exports,arguments)
},{"./_shared":191,"./_uid":201,"dup":70}],191:[function(require,module,exports){
arguments[4][71][0].apply(exports,arguments)
},{"./_global":152,"dup":71}],192:[function(require,module,exports){
arguments[4][72][0].apply(exports,arguments)
},{"./_a-function":127,"./_an-object":130,"./_wks":204,"dup":72}],193:[function(require,module,exports){
arguments[4][73][0].apply(exports,arguments)
},{"./_defined":144,"./_to-integer":196,"dup":73}],194:[function(require,module,exports){
arguments[4][74][0].apply(exports,arguments)
},{"./_cof":137,"./_ctx":143,"./_dom-create":146,"./_global":152,"./_html":155,"./_invoke":157,"dup":74}],195:[function(require,module,exports){
arguments[4][75][0].apply(exports,arguments)
},{"./_to-integer":196,"dup":75}],196:[function(require,module,exports){
arguments[4][76][0].apply(exports,arguments)
},{"dup":76}],197:[function(require,module,exports){
arguments[4][77][0].apply(exports,arguments)
},{"./_defined":144,"./_iobject":158,"dup":77}],198:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./_to-integer":196,"dup":78}],199:[function(require,module,exports){
arguments[4][79][0].apply(exports,arguments)
},{"./_defined":144,"dup":79}],200:[function(require,module,exports){
arguments[4][80][0].apply(exports,arguments)
},{"./_is-object":161,"dup":80}],201:[function(require,module,exports){
arguments[4][81][0].apply(exports,arguments)
},{"dup":81}],202:[function(require,module,exports){
arguments[4][82][0].apply(exports,arguments)
},{"./_core":141,"./_global":152,"./_library":169,"./_object-dp":174,"./_wks-ext":203,"dup":82}],203:[function(require,module,exports){
arguments[4][83][0].apply(exports,arguments)
},{"./_wks":204,"dup":83}],204:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"./_global":152,"./_shared":191,"./_uid":201,"dup":84}],205:[function(require,module,exports){
arguments[4][85][0].apply(exports,arguments)
},{"./_classof":136,"./_core":141,"./_iterators":167,"./_wks":204,"dup":85}],206:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":130,"./_core":141,"./core.get-iterator-method":205}],207:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":136,"./_core":141,"./_iterators":167,"./_wks":204}],208:[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":142,"./_ctx":143,"./_export":149,"./_is-array-iter":159,"./_iter-call":162,"./_iter-detect":165,"./_to-length":198,"./_to-object":199,"./core.get-iterator-method":205}],209:[function(require,module,exports){
arguments[4][86][0].apply(exports,arguments)
},{"./_add-to-unscopables":128,"./_iter-define":164,"./_iter-step":166,"./_iterators":167,"./_to-iobject":197,"dup":86}],210:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.1 Map Objects
module.exports = require('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":140,"./_collection-strong":138}],211:[function(require,module,exports){
arguments[4][87][0].apply(exports,arguments)
},{"./_export":149,"./_object-assign":172,"dup":87}],212:[function(require,module,exports){
arguments[4][88][0].apply(exports,arguments)
},{"./_descriptors":145,"./_export":149,"./_object-dp":174,"dup":88}],213:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":182,"./_object-sap":184,"./_to-object":199}],214:[function(require,module,exports){
arguments[4][89][0].apply(exports,arguments)
},{"dup":89}],215:[function(require,module,exports){
arguments[4][90][0].apply(exports,arguments)
},{"./_a-function":127,"./_an-instance":129,"./_classof":136,"./_core":141,"./_ctx":143,"./_export":149,"./_for-of":151,"./_global":152,"./_is-object":161,"./_iter-detect":165,"./_library":169,"./_microtask":171,"./_redefine-all":186,"./_set-species":188,"./_set-to-string-tag":189,"./_species-constructor":192,"./_task":194,"./_wks":204,"dup":90}],216:[function(require,module,exports){
arguments[4][91][0].apply(exports,arguments)
},{"./_iter-define":164,"./_string-at":193,"dup":91}],217:[function(require,module,exports){
arguments[4][92][0].apply(exports,arguments)
},{"./_an-object":130,"./_descriptors":145,"./_enum-keys":148,"./_export":149,"./_fails":150,"./_global":152,"./_has":153,"./_hide":154,"./_is-array":160,"./_keyof":168,"./_library":169,"./_meta":170,"./_object-create":173,"./_object-dp":174,"./_object-gopd":176,"./_object-gopn":178,"./_object-gopn-ext":177,"./_object-gops":179,"./_object-keys":182,"./_object-pie":183,"./_property-desc":185,"./_redefine":187,"./_set-to-string-tag":189,"./_shared":191,"./_to-iobject":197,"./_to-primitive":200,"./_uid":201,"./_wks":204,"./_wks-define":202,"./_wks-ext":203,"dup":92}],218:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":139,"./_export":149}],219:[function(require,module,exports){
arguments[4][93][0].apply(exports,arguments)
},{"./_wks-define":202,"dup":93}],220:[function(require,module,exports){
arguments[4][94][0].apply(exports,arguments)
},{"./_wks-define":202,"dup":94}],221:[function(require,module,exports){
arguments[4][95][0].apply(exports,arguments)
},{"./_global":152,"./_hide":154,"./_iterators":167,"./_wks":204,"./es6.array.iterator":209,"dup":95}],222:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],223:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./runtime":224}],224:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":222}],225:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = exports.defaultOptions = {
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
  onSave: function onSave(formData) {
    return null;
  },
  onClearAll: function onClearAll() {
    return null;
  },
  sortableControls: false,
  stickyControls: {
    enable: true,
    offset: {
      top: 5,
      bottom: 'auto',
      right: 'auto'
    }
  },
  fields: [],
  templates: {},
  disabledActionButtons: [],
  showActionButtons: true,
  typeUserAttrs: {},
  typeUserEvents: {},
  prefix: 'form-builder-'
};

var defaultI18n = exports.defaultI18n = {
  location: 'https://kevinchappell.github.io/formBuilder/assets/lang/',
  langs: ['en-US'],
  preloaded: {
    'en-US': {
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
      inline: 'Inline',
      inlineDesc: 'Display {type} inline',
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
      options: 'Options',
      optional: 'optional',
      optionLabelPlaceholder: 'Label',
      optionValuePlaceholder: 'Value',
      optionEmpty: 'Option value required',
      other: 'Other',
      paragraph: 'Paragraph',
      placeholder: 'Placeholder',
      'placeholder.value': 'Value',
      'placeholder.label': 'Label',
      'placeholder.text': '',
      'placeholder.textarea': '',
      'placeholder.email': 'Enter you email',
      'placeholder.placeholder': '',
      'placeholder.className': 'space separated classes',
      'placeholder.password': 'Enter your password',
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
      'size.xs': 'Extra Small',
      'size.sm': 'Small',
      'size.m': 'Default',
      'size.lg': 'Large',
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
    }
  }
};

var config = exports.config = {};

},{}],226:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.availablefields = exports.Data = exports.instanceData = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instanceData = exports.instanceData = {};

var Data = exports.Data = function Data(formID) {
  (0, _classCallCheck3.default)(this, Data);

  this.formData = {};
  this.formID = formID;
  this.layout = '';
  instanceData[formID] = this;
};

var availablefields = exports.availablefields = {};

},{"babel-runtime/helpers/classCallCheck":110}],227:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionFieldsRegEx = exports.optionFields = exports.filter = exports.empty = exports.defaultSubtypes = exports.instanceDom = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instanceDom = exports.instanceDom = {};
var defaultSubtypes = exports.defaultSubtypes = {
  text: ['text', 'password', 'email', 'color', 'tel'],
  header: ['h1', 'h2', 'h3'],
  button: ['button', 'submit', 'reset'],
  paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'],
  textarea: ['textarea', 'quill']
};

var empty = exports.empty = function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

var filter = exports.filter = function filter(elems, term) {
  var show = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var filteredElems = [];
  var toggle = ['none', 'block'];

  if (show) {
    toggle = toggle.reverse();
  }

  for (var i = elems.length - 1; i >= 0; i--) {
    var txt = elems[i].textContent.toLowerCase();
    if (txt.indexOf(term.toLowerCase()) !== -1) {
      elems[i].style.display = toggle[0];
      filteredElems.push(elems[i]);
    } else {
      elems[i].style.display = toggle[1];
    }
  }

  return filteredElems;
};

var optionFields = exports.optionFields = ['select', 'checkbox-group', 'checkbox', 'radio-group', 'autocomplete'];

var optionFieldsRegEx = exports.optionFieldsRegEx = new RegExp('(' + optionFields.join('|') + ')');

var Dom = function Dom(formID) {
  (0, _classCallCheck3.default)(this, Dom);

  this.optionFields = optionFields;
  this.optionFieldsRegEx = optionFieldsRegEx;

  this.subtypes = defaultSubtypes;

  /**
   * Util to remove contents of DOM Object
   * @param  {Object} element
   * @return {Object} element with its children removed
   */
  this.empty = empty;

  /**
   * Hide or show an Array or HTMLCollection of elements
   * @param  {Array}   elems
   * @param  {String}  term  match textContent to this term
   * @param  {Boolean} show  or hide elements
   * @return {Array}         filtered elements
   */
  this.filter = filter;

  instanceDom[formID] = this;
  return instanceDom[formID];
};

exports.default = Dom;

},{"babel-runtime/helpers/classCallCheck":110}],228:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
events.fieldRendered = new Event('fieldRendered');

//   return events;
// }

exports.default = events;

},{}],229:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _data = require('./data');

var _mi18n = require('../../../../../../Draggable/mI18N/mi18n/src/mi18n.js');

var _mi18n2 = _interopRequireDefault(_mi18n);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./polyfills.js').default;
// import mi18n from 'mi18n';


var instanceTime = new Date().getTime();

var FormBuilder = function FormBuilder(opts, element) {
  var _this = this;

  var formBuilder = this;
  var i18n = _mi18n2.default.current;
  var formID = 'frmb-' + instanceTime++;
  var data = new _data.Data(formID);
  var d = new _dom2.default(formID);
  var helpers = new _helpers2.default(formID);
  var m = _utils2.default.markup;

  var originalOpts = opts;

  opts = helpers.processOptions(opts);

  var subtypes = _config.config.subtypes = helpers.processSubtypes(opts.subtypes);
  helpers.editorUI(formID);

  var $stage = $(d.stage);

  data.layout = helpers.editorLayout(opts.controlPosition);
  data.formID = formID;
  data.lastID = data.formID + '-fld-1';

  var frmbFields = helpers.orderFields(opts.fields);

  if (opts.disableFields) {
    // remove disabledFields
    frmbFields = frmbFields.filter(function (field) {
      return !_utils2.default.inArray(field.attrs.type, opts.disableFields);
    });
  }

  if (opts.sortableControls) {
    d.controls.classList.add('sort-enabled');
  }

  var $cbUL = $(d.controls);

  // Loop through fmrbFields
  _utils2.default.forEach(frmbFields, function (i) {
    var _frmbFields$i = frmbFields[i],
        attrs = _frmbFields$i.attrs,
        field = (0, _objectWithoutProperties3.default)(_frmbFields$i, ['attrs']);

    var icon = attrs.icon || 'icon-' + (attrs.name || attrs.type);
    var newFieldControl = m('li', m('span', field.label), { className: icon + ' input-control input-control-' + i });

    _data.availablefields[attrs.type] = frmbFields[i];
    newFieldControl.dataset.type = attrs.type;
    d.controls.appendChild(newFieldControl);
  });

  if (opts.inputSets.length) {
    $('<li/>', { 'class': 'fb-separator' }).html('<hr>').appendTo($cbUL);
    opts.inputSets.forEach(function (set, i) {
      set.name = set.name || helpers.makeClassName(set.label);
      var inputSet = m('li', set.label, {
        className: 'input-set-control input-set-' + i,
        type: set.name
      });
      $(inputSet).appendTo($cbUL);
    });
  }

  // Sortable fields
  $stage.sortable({
    cursor: 'move',
    opacity: 0.9,
    revert: 150,
    beforeStop: function beforeStop(evt, ui) {
      return helpers.beforeStop.call(helpers, evt, ui);
    },
    start: function start(evt, ui) {
      return helpers.startMoving.call(helpers, evt, ui);
    },
    stop: function stop(evt, ui) {
      return helpers.stopMoving.call(helpers, evt, ui);
    },
    cancel: 'input, select, .disabled-field, .form-group, .btn',
    placeholder: 'frmb-placeholder'
  });

  // ControlBox with different fields
  $cbUL.sortable({
    helper: 'clone',
    opacity: 0.9,
    connectWith: $stage,
    cancel: '.fb-separator',
    cursor: 'move',
    scroll: false,
    placeholder: 'ui-state-highlight',
    start: function start(evt, ui) {
      return helpers.startMoving.call(helpers, evt, ui);
    },
    stop: function stop(evt, ui) {
      return helpers.stopMoving.call(helpers, evt, ui);
    },
    revert: 150,
    beforeStop: function beforeStop(evt, ui) {
      return helpers.beforeStop.call(helpers, evt, ui);
    },
    distance: 3,
    update: function update(event, ui) {
      if (helpers.doCancel) {
        return false;
      }
      if (ui.item.parent()[0] === $stage[0]) {
        processControl(ui.item);
        helpers.doCancel = true;
      } else {
        helpers.setFieldOrder($cbUL);
        helpers.doCancel = !opts.sortableControls;
      }
    }
  });

  var processControl = function processControl(control) {
    if (control[0].classList.contains('input-set-control')) {
      var inputSets = [];
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
        inputSets.push(header);
      }
      inputSets.push.apply(inputSets, (0, _toConsumableArray3.default)(inputSet.fields));
      inputSets.forEach(function (field) {
        prepFieldVars(field, true);
        if (helpers.stopIndex || helpers.stopIndex === 0) {
          helpers.stopIndex++;
        }
      });
    } else {
      prepFieldVars(control, true);
    }
  };

  d.editorWrap = m('div', null, {
    id: data.formID + '-form-wrap',
    className: 'form-wrap form-builder' + _utils2.default.mobileClass()
  });

  var $editorWrap = $(d.editorWrap);

  var cbWrap = m('div', d.controls, {
    id: data.formID + '-cb-wrap',
    className: 'cb-wrap ' + data.layout.controls
  });

  if (opts.showActionButtons) {
    var buttons = opts.actionButtons.map(function (btnData) {
      if (btnData.id && opts.disabledActionButtons.indexOf(btnData.id) === -1) {
        return helpers.processActionButtons(btnData);
      }
    });
    var formActions = d.formActions = m('div', buttons, {
      className: 'form-actions btn-group'
    });

    cbWrap.appendChild(formActions);
  }

  var stageWrap = m('div', [d.stage, cbWrap], {
    id: data.formID + '-stage-wrap',
    className: 'stage-wrap ' + data.layout.stage
  });

  $editorWrap.append(stageWrap, cbWrap);

  if (element.type !== 'textarea') {
    $(element).append($editorWrap);
  } else {
    $(element).replaceWith($editorWrap);
  }

  var saveAndUpdate = _utils2.default.debounce(function (evt) {
    if (evt) {
      if (evt.type === 'keyup' && evt.target.name === 'className') {
        return false;
      }

      var $field = $(evt.target).closest('.form-field');
      helpers.updatePreview($field);
      helpers.save.call(helpers);
    }
  });

  // Save field on change
  $stage.on('change blur keyup', '.form-elements input, .form-elements select, .form-elements textarea', saveAndUpdate);

  $('li', d.controls).click(function (evt) {
    var $control = $(evt.target).closest('.input-control');
    helpers.stopIndex = undefined;
    processControl($control);
    helpers.save.call(helpers);
  });

  // Add append and prepend options if necessary
  var nonEditableFields = function nonEditableFields() {
    var cancelArray = [];
    var disabledField = function disabledField(type) {
      return _utils2.default.markup('li', opts[type], {
        className: 'disabled-field form-' + type
      });
    };

    if (opts.prepend && !$('.disabled-field.form-prepend', d.stage).length) {
      cancelArray.push(true);
      $stage.prepend(disabledField('prepend'));
    }

    if (opts.append && !$('.disabled-field.form-.append', d.stage).length) {
      cancelArray.push(true);
      $stage.append(disabledField('append'));
    }

    helpers.disabledTT(d.stage);
    return cancelArray.some(function (elem) {
      return elem === true;
    });
  };

  var prepFieldVars = function prepFieldVars($field) {
    var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var field = {};
    if ($field instanceof jQuery) {
      var fieldData = _data.availablefields[$field[0].dataset.type];
      if (fieldData) {
        field = fieldData.attrs;
        field.label = fieldData.label;
      } else {
        // is dataType XML
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
      field = (0, _assign2.default)({}, $field);
    }

    if (!field.name) {
      field.name = _utils2.default.nameAttr(field);
    }

    if (isNew && _utils2.default.inArray(field.type, ['text', 'number', 'file', 'date', 'select', 'textarea', 'autocomplete'])) {
      field.className = field.className || 'form-control';
    } else {
      field.className = field.className;
    }

    var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
    if (match) {
      field.style = match[1];
    }

    _utils2.default.escapeAttrs(field);

    appendNewField(field, isNew);

    if (isNew) {
      document.dispatchEvent(_events2.default.fieldAdded);
    }

    stageWrap.classList.remove('empty');
  };

  // Parse saved XML template data
  var loadFields = function loadFields(formData) {
    formData = helpers.getData(formData);
    if (formData && formData.length) {
      for (var i = 0; i < formData.length; i++) {
        prepFieldVars(formData[i]);
      }
      stageWrap.classList.remove('empty');
    } else if (opts.defaultFields && opts.defaultFields.length) {
      // Load default fields if none are set
      opts.defaultFields.forEach(function (field) {
        return prepFieldVars(field);
      });
      stageWrap.classList.remove('empty');
    } else if (!opts.prepend && !opts.append) {
      stageWrap.classList.add('empty');
      stageWrap.dataset.content = i18n.getStarted;
    }
    helpers.save.call(helpers);

    if (nonEditableFields()) {
      stageWrap.classList.remove('empty');
    }
  };

  /**
   * Add data for field with options [select, checkbox-group, radio-group]
   *
   * @todo   refactor this nasty ~crap~ code, its actually painful to look at
   * @param  {Object} values
   * @return {String} field options markup
   */
  var fieldOptions = function fieldOptions(fieldData) {
    var optionActions = [_utils2.default.markup('a', i18n.addOption, { className: 'add add-opt' })];
    var fieldOptions = ['<label class="false-label">' + i18n.selectOptions + '</label>'];
    var isMultiple = fieldData.multiple || fieldData.type === 'checkbox-group';
    var optionDataTemplate = function optionDataTemplate(label) {
      var optionData = {
        label: label,
        value: _utils2.default.hyphenCase(label)
      };

      if (fieldData.type !== 'autocomplete') {
        optionData.selected = false;
      }

      return optionData;
    };

    if (!fieldData.values || !fieldData.values.length) {
      var defaultOptCount = _utils2.default.inArray(fieldData.type, ['checkbox-group', 'checkbox']) ? [1] : [1, 2, 3];
      fieldData.values = defaultOptCount.map(function (index) {
        var label = i18n.option + ' ' + index;
        return optionDataTemplate(label);
      });

      var firstOption = fieldData.values[0];
      if (firstOption.hasOwnProperty('selected')) {
        firstOption.selected = true;
      }
    } else {
      // ensure option data is has all required keys
      fieldData.values.forEach(function (option) {
        return (0, _assign2.default)({}, { selected: false }, option);
      });
    }

    fieldOptions.push('<div class="sortable-options-wrap">');

    fieldOptions.push('<ol class="sortable-options">');
    _utils2.default.forEach(fieldData.values, function (i) {
      fieldOptions.push(selectFieldOptions(fieldData.name, fieldData.values[i], isMultiple));
    });
    fieldOptions.push('</ol>');
    fieldOptions.push(_utils2.default.markup('div', optionActions, { className: 'option-actions' }).outerHTML);
    fieldOptions.push('</div>');

    return _utils2.default.markup('div', fieldOptions.join(''), { className: 'form-group field-options' }).outerHTML;
  };

  /**
   * Build the editable properties for the field
   * @param  {object} values configuration object for advanced fields
   * @return {String}        markup for advanced fields
   */
  var advFields = function advFields(values) {
    var advFields = [];
    var key = void 0;
    var valueField = !_utils2.default.inArray(values.type, ['header', 'paragraph', 'file'].concat(d.optionFields));
    var roles = values.role !== undefined ? values.role.split(',') : [];

    advFields.push(requiredField(values));

    if (_utils2.default.inArray(values.type, ['checkbox', 'checkbox-group'])) {
      advFields.push(boolAttribute('toggle', values, { first: i18n.toggle }));
    }

    // Inline options
    if (_utils2.default.inArray(values.type, ['checkbox-group', 'radio-group'])) {
      var labels = {
        first: i18n.inline,
        second: _mi18n2.default.get('inlineDesc', values.type.replace('-group', ''))
      };

      advFields.push(boolAttribute('inline', values, labels));
    }

    advFields.push(textAttribute('label', values));

    values.size = values.size || 'm';
    values.style = values.style || 'default';

    // Help Text / Description Field
    if (!_utils2.default.inArray(values.type, ['header', 'paragraph', 'button'])) {
      advFields.push(textAttribute('description', values));
    }

    if (subtypes[values.type]) {
      var optionData = subtypes[values.type];
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
      var _labels = {
        first: i18n.multipleFiles,
        second: i18n.allowMultipleFiles
      };
      advFields.push(boolAttribute('multiple', values, _labels));
    }

    var rolesDisplay = values.role !== undefined ? 'style="display:block"' : '';
    var availableRoles = ['<div class="available-roles" ' + rolesDisplay + '>'];
    for (key in opts.roles) {
      if (opts.roles.hasOwnProperty(key)) {
        var checked = _utils2.default.inArray(key, roles) ? 'checked' : '';
        var roleId = 'fld-' + data.lastID + '-roles-' + key;
        availableRoles.push('<input type="checkbox" name="roles[]" value="' + key + '" id="' + roleId + '" ' + checked + ' class="roles-field" /> <label for="' + roleId + '">' + opts.roles[key] + '</label><br/>');
      }
    }

    availableRoles.push('</div>');

    var accessLabels = { first: i18n.roles, second: i18n.limitRole, content: availableRoles.join('') };

    advFields.push(boolAttribute('access', values, accessLabels));

    if (values.type.match(/(checkbox-group|radio-group)/)) {
      advFields.push(boolAttribute('other', values, { first: i18n.enableOther, second: i18n.enableOtherMsg }));
    }

    if (values.type === 'select') {
      advFields.push(boolAttribute('multiple', values, { first: ' ', second: i18n.selectionsMessage }));
    }

    if (values.type.match(d.optionFieldsRegEx)) {
      advFields.push(fieldOptions(values));
    }

    if (_utils2.default.inArray(values.type, ['text', 'textarea'])) {
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
        var orig = i18n[attribute];
        var origValue = typeUserAttr[attribute].value;
        typeUserAttr[attribute].value = values[attribute] || typeUserAttr[attribute].value || '';

        if (typeUserAttr[attribute].label) {
          i18n[attribute] = typeUserAttr[attribute].label;
        }

        if (typeUserAttr[attribute].options) {
          advField.push(selectUserAttrs(attribute, typeUserAttr[attribute]));
        } else {
          advField.push(inputUserAttrs(attribute, typeUserAttr[attribute]));
        }

        i18n[attribute] = orig;
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
      id: name + '-' + data.lastID,
      title: attrs.description || attrs.label || name.toUpperCase(),
      name: name,
      type: attrs.type || 'text',
      className: ['fld-' + name]
    };
    var label = '<label for="' + textAttrs.id + '">' + i18n[name] + '</label>';

    if (!_utils2.default.inArray(textAttrs.type, ['checkbox', 'checkbox-group', 'radio-group'])) {
      textAttrs.className.push('form-control');
    }

    textAttrs = (0, _assign2.default)({}, attrs, textAttrs);
    var textInput = '<input ' + _utils2.default.attrString(textAttrs) + '>';
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
    var optis = (0, _keys2.default)(options.options).map(function (val) {
      var attrs = { value: val };
      if (val === options.value) {
        attrs.selected = null;
      }
      return '<option ' + _utils2.default.attrString(attrs) + '>' + options.options[val] + '</option>';
    });
    var selectAttrs = {
      id: name + '-' + data.lastID,
      title: options.description || options.label || name.toUpperCase(),
      name: name,
      className: 'fld-' + name + ' form-control'
    };
    var label = '<label for="' + selectAttrs.id + '">' + i18n[name] + '</label>';

    (0, _keys2.default)(options).filter(function (prop) {
      return !_utils2.default.inArray(prop, ['value', 'options', 'label']);
    }).forEach(function (attr) {
      selectAttrs[attr] = options[attr];
    });

    var select = '<select ' + _utils2.default.attrString(selectAttrs) + '>' + optis.join('') + '</select>';
    var inputWrap = '<div class="input-wrap">' + select + '</div>';
    return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
  }

  var boolAttribute = function boolAttribute(name, values, labels) {
    if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][name]) {
      return;
    }

    var label = function label(txt) {
      return '<label for="' + name + '-' + data.lastID + '">' + txt + '</label>';
    };
    var checked = values[name] !== undefined ? 'checked' : '';
    var input = '<input type="checkbox" class="fld-' + name + '" name="' + name + '" value="true" ' + checked + ' id="' + name + '-' + data.lastID + '"/> ';
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
    var styles = i18n.styles.btn;
    var styleField = '';

    if (styles) {
      var styleLabel = '<label>' + i18n.style + '</label>';
      styleField += '<input value="' + style + '" name="style" type="hidden" class="btn-style">';
      styleField += '<div class="btn-group" role="group">';

      (0, _keys2.default)(styles).forEach(function (element) {
        var classList = ['btn-xs', 'btn', 'btn-' + element];
        if (style === element) {
          classList.push('selected');
        }

        styleField += '<button value="' + element + '" type="button" class="' + classList.join(' ') + '">' + i18n.styles.btn[element] + '</button>';
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
    var attrLabel = i18n[attribute] || attribute;
    var placeholder = i18n['placeholder.' + attribute];
    var inputConfig = {
      type: 'number',
      value: attrVal,
      name: attribute,
      min: '0',
      placeholder: placeholder,
      className: 'fld-' + attribute + ' form-control',
      id: attribute + '-' + data.lastID
    };
    var numberAttribute = '<input ' + _utils2.default.attrString(_utils2.default.trimObj(inputConfig)) + '>';
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
      var optionAttrs = (0, _assign2.default)({
        label: i18n.option + ' ' + i,
        value: undefined
      }, option);
      if (option.value === values[attribute]) {
        optionAttrs.selected = true;
      }
      return '<option ' + _utils2.default.attrString(_utils2.default.trimObj(optionAttrs)) + '>' + optionAttrs.label + '</option>';
    });
    var selectAttrs = {
      id: attribute + '-' + data.lastID,
      name: attribute,
      className: 'fld-' + attribute + ' form-control'
    };
    var label = '<label for="' + selectAttrs.id + '">' + (i18n[attribute] || _utils2.default.capitalize(attribute)) + '</label>';
    var select = '<select ' + _utils2.default.attrString(selectAttrs) + '>' + selectOptions.join('') + '</select>';
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

    var placeholderFields = ['text', 'textarea', 'select', 'autocomplete'];

    var noName = ['header', 'paragraph'];

    var textArea = ['paragraph'];

    var attrVal = values[attribute] || '';
    var attrLabel = i18n[attribute];
    if (attribute === 'label' && _utils2.default.inArray(values.type, textArea)) {
      attrLabel = i18n.content;
    }

    if (subtypes.header) {
      noName = noName.concat(subtypes.header);
    }

    var placeholder = i18n['placeholder.' + attribute] || '';
    var attributefield = '';
    var noMakeAttr = [];

    // Field has placeholder attribute
    if (attribute === 'placeholder' && !_utils2.default.inArray(values.type, placeholderFields)) {
      noMakeAttr.push(true);
    }

    // Field has name attribute
    if (attribute === 'name' && _utils2.default.inArray(values.type, noName)) {
      noMakeAttr.push(true);
    }

    if (!noMakeAttr.some(function (elem) {
      return elem === true;
    })) {
      var inputConfig = {
        name: attribute,
        placeholder: placeholder,
        className: 'fld-' + attribute + ' form-control',
        id: attribute + '-' + data.lastID
      };
      var attributeLabel = '<label for="' + inputConfig.id + '">' + attrLabel + '</label>';

      if (attribute === 'label') {
        attributefield += '<div contenteditable ' + _utils2.default.attrString(inputConfig) + '>' + attrVal + '</div>';
      } else {
        inputConfig.value = attrVal;
        inputConfig.type = 'text';
        attributefield += '<input ' + _utils2.default.attrString(inputConfig) + '>';
      }

      var inputWrap = '<div class="input-wrap">' + attributefield + '</div>';

      var visibility = 'block';
      if (attribute === 'value') {
        visibility = values.subtype && values.subtype === 'quill' && 'none';
      }

      attributefield = '<div class="form-group ' + attribute + '-wrap" style="display: ' + visibility + '">' + attributeLabel + ' ' + inputWrap + '</div>';
    }

    return attributefield;
  };

  var requiredField = function requiredField(values) {
    var noRequire = ['header', 'paragraph', 'button'];
    var noMake = [];
    var requireField = '';

    if (_utils2.default.inArray(values.type, noRequire)) {
      noMake.push(true);
    }
    if (!noMake.some(function (elem) {
      return elem === true;
    })) {
      requireField = boolAttribute('required', values, { first: i18n.required });
    }

    return requireField;
  };

  // Append the new field to the editor
  var appendNewField = function appendNewField(values) {
    var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var type = values.type || 'text';
    var label = values.label || i18n[type] || i18n.label;
    var delBtn = m('a', i18n.remove, {
      id: 'del_' + data.lastID,
      className: 'del-button btn delete-confirm',
      title: i18n.removeMessage
    });
    var toggleBtn = m('a', null, {
      id: data.lastID + '-edit',
      className: 'toggle-form btn icon-pencil',
      title: i18n.hide
    });
    var copyBtn = m('a', null, {
      id: data.lastID + '-copy',
      className: 'copy-button btn icon-copy',
      title: i18n.copyButtonTooltip
    });

    var liContents = m('div', [toggleBtn, copyBtn, delBtn], { className: 'field-actions' }).outerHTML;

    // Field preview Label
    liContents += '<label class="field-label">' + _utils2.default.parsedHtml(label) + '</label>';

    if (values.description) {
      var attrs = {
        className: 'tooltip-element',
        tooltip: values.description
      };
      liContents += '<span ' + _utils2.default.attrString(attrs) + '>?</span>';
    }

    var requiredDisplay = values.required ? 'style="display:inline"' : '';
    liContents += '<span class="required-asterisk" ' + requiredDisplay + '> *</span>';

    liContents += m('div', '', { className: 'prev-holder' }).outerHTML;
    liContents += '<div id="' + data.lastID + '-holder" class="frm-holder">';
    liContents += '<div class="form-elements">';

    liContents += advFields(values);
    liContents += m('a', i18n.close, { className: 'close-field' }).outerHTML;

    liContents += '</div>';
    liContents += '</div>';

    var field = m('li', liContents, {
      'class': type + '-field form-field',
      'type': type,
      id: data.lastID
    });
    var $li = $(field);

    $li.data('fieldData', { attrs: values });

    if (typeof helpers.stopIndex !== 'undefined') {
      $('> li', d.stage).eq(helpers.stopIndex).before($li);
    } else {
      $stage.append($li);
    }

    $('.sortable-options', $li).sortable({ update: function update() {
        return helpers.updatePreview($li);
      } });

    helpers.updatePreview($li);

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
      opts.typeUserEvents[type].onadd(field);
    }

    if (opts.editOnAdd && isNew) {
      helpers.closeAllEdit();
      helpers.toggleEdit(data.lastID, false);
    }

    data.lastID = helpers.incrementId(data.lastID);
  };

  // Select field html, since there may be multiple
  var selectFieldOptions = function selectFieldOptions(name, optionData, multipleSelect) {
    var optionInputType = {
      selected: multipleSelect ? 'checkbox' : 'radio'
    };
    var optionDataOrder = ['value', 'label', 'selected'];
    var optionInputs = [];
    var optionTemplate = { selected: false, label: '', value: '' };

    optionData = (0, _assign2.default)(optionTemplate, optionData);

    for (var i = optionDataOrder.length - 1; i >= 0; i--) {
      var prop = optionDataOrder[i];
      if (optionData.hasOwnProperty(prop)) {
        var attrs = {
          type: optionInputType[prop] || 'text',
          className: 'option-' + prop,
          value: optionData[prop],
          name: name + '-option'
        };

        attrs.placeholder = i18n['placeholder.' + prop] || '';

        if (prop === 'selected' && optionData.selected === true) {
          attrs.checked = optionData.selected;
        }

        optionInputs.push(m('input', null, attrs));
      }
    }

    var removeAttrs = {
      className: 'remove btn',
      title: i18n.removeMessage
    };
    optionInputs.push(_utils2.default.markup('a', i18n.remove, removeAttrs));

    var field = _utils2.default.markup('li', optionInputs);

    return field.outerHTML;
  };

  var cloneItem = function cloneItem(currentItem) {
    var currentId = currentItem.attr('id');
    var type = currentItem.attr('type');
    var ts = new Date().getTime();
    var cloneName = type + '-' + ts;
    var $clone = currentItem.clone();

    $clone.find('[id]').each(function (i, elem) {
      elem.id = elem.id.replace(currentId, data.lastID);
    });

    $clone.find('[for]').each(function () {
      this.setAttribute('for', this.getAttribute('for').replace(currentId, data.lastID));
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

    $clone.attr('id', data.lastID);
    $clone.attr('name', cloneName);
    $clone.addClass('cloned');
    $('.sortable-options', $clone).sortable();

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
      opts.typeUserEvents[type].onclone($clone[0]);
    }

    data.lastID = helpers.incrementId(data.lastID);
    return $clone;
  };

  // ---------------------- UTILITIES ---------------------- //

  // delete options
  $stage.on('click touchstart', '.remove', function (e) {
    var $field = $(this).parents('.form-field:eq(0)');
    e.preventDefault();
    var optionsCount = $(this).parents('.sortable-options:eq(0)').children('li').length;
    if (optionsCount <= 2) {
      opts.notify.error('Error: ' + i18n.minOptionMessage);
    } else {
      $(this).parent('li').slideUp('250', function () {
        $(this).remove();
        helpers.updatePreview($field);
        helpers.save.call(helpers);
      });
    }
  });

  // touch focus
  $stage.on('touchstart', 'input', function (e) {
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
  $stage.on('click touchstart', '.toggle-form, .close-field', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.handled !== true) {
      var targetID = $(e.target).parents('.form-field:eq(0)').attr('id');
      helpers.toggleEdit(targetID);
      e.handled = true;
    } else {
      return false;
    }
  });

  $stage.on('change', '[name="subtype"]', function (e) {
    var $field = $(e.target).closest('li.form-field');
    var $valWrap = $('.value-wrap', $field);
    $valWrap.toggle(e.target.value !== 'quill');
  });

  $stage.on('change', '.prev-holder input, .prev-holder select, textarea', function (e) {
    var prevOptions = void 0;
    if (e.target.classList.contains('other-option')) {
      return;
    }
    var field = _utils2.default.closest(e.target, '.form-field');
    if (_utils2.default.inArray(field.type, ['select', 'checkbox-group', 'radio-group'])) {
      var options = field.getElementsByClassName('option-value');
      if (field.type === 'select') {
        _utils2.default.forEach(options, function (i) {
          var selectedOption = options[i].parentElement.childNodes[0];
          selectedOption.checked = e.target.value === options[i].value;
        });
      } else {
        prevOptions = document.getElementsByName(e.target.name);
        _utils2.default.forEach(prevOptions, function (i) {
          var selectedOption = options[i].parentElement.childNodes[0];
          selectedOption.checked = prevOptions[i].checked;
        });
      }
    } else {
      var fieldVal = document.getElementById('value-' + field.id);
      if (fieldVal) {
        fieldVal.value = e.target.value;
      }
    }

    helpers.save.call(helpers);
  });

  // update preview to label
  _utils2.default.addEventListeners(d.stage, 'keyup change', function (e) {
    if (!e.target.classList.contains('fld-label')) return;
    var value = e.target.value || e.target.innerHTML;
    var label = _utils2.default.closest(e.target, '.form-field').querySelector('.field-label');
    label.innerHTML = _utils2.default.parsedHtml(value);
  });

  // remove error styling when users tries to correct mistake
  $stage.on('keyup', 'input.error', function (e) {
    $(e.target).removeClass('error');
  });

  // update preview for description
  $stage.on('keyup', 'input[name="description"]', function (e) {
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

  /**
   * Toggle multiple select options
   * @param  {Object} e click event
   * @return {String} newType
   */
  $stage.on('change', '.fld-multiple', function (e) {
    var newType = e.target.checked ? 'checkbox' : 'radio';
    var $options = $('.option-selected', $(e.target).closest('.form-elements'));
    $options.each(function (i) {
      return $options[i].type = newType;
    });
    return newType;
  });

  // format name attribute
  $stage.on('blur', 'input.fld-name', function (e) {
    e.target.value = _utils2.default.safename(e.target.value);
    if (e.target.value === '') {
      $(e.target).addClass('field-error').attr('placeholder', i18n.cannotBeEmpty);
    } else {
      $(e.target).removeClass('field-error');
    }
  });

  $stage.on('blur', 'input.fld-maxlength', function (e) {
    e.target.value = _utils2.default.forceNumber(e.target.value);
  });

  // Copy field
  $stage.on('click touchstart', '.icon-copy', function (e) {
    e.preventDefault();
    var currentItem = $(e.target).parent().parent('li');
    var $clone = cloneItem(currentItem);
    $clone.insertAfter(currentItem);
    helpers.updatePreview($clone);
    helpers.save.call(helpers);
  });

  // Delete field
  $stage.on('click touchstart', '.delete-confirm', function (e) {
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
      var warnH3 = _utils2.default.markup('h3', i18n.warning);
      var warnMessage = _utils2.default.markup('p', i18n.fieldRemoveWarning);
      helpers.confirm([warnH3, warnMessage], function () {
        return helpers.removeField(deleteID);
      }, coords);
      $field.addClass('deleting');
    } else {
      helpers.removeField(deleteID);
    }
  });

  // Update button style selection
  $stage.on('click', '.style-wrap button', function (e) {
    var $button = $(e.target);
    var styleVal = $button.val();
    var $btnStyle = $button.parent().prev('.btn-style');
    $btnStyle.val(styleVal);
    $button.siblings('.btn').removeClass('selected');
    $button.addClass('selected');
    helpers.updatePreview($btnStyle.closest('.form-field'));
    helpers.save.call(helpers);
  });

  // Attach a callback to toggle required asterisk
  $stage.on('click', '.fld-required', function (e) {
    $(e.target).closest('.form-field').find('.required-asterisk').toggle();
  });

  // Attach a callback to toggle roles visibility
  $stage.on('click', 'input.fld-access', function (e) {
    var roles = $(e.target).closest('.form-field').find('.available-roles');
    var enableRolesCB = $(e.target);
    roles.slideToggle(250, function () {
      if (!enableRolesCB.is(':checked')) {
        $('input[type="checkbox"]', roles).removeAttr('checked');
      }
    });
  });

  // Attach a callback to add new options
  $stage.on('click', '.add-opt', function (e) {
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

  $stage.on('mouseover mouseout', '.remove, .del-button', function (e) {
    return $(e.target).closest('li').toggleClass('delete');
  });

  loadFields();

  $stage.css('min-height', $cbUL.height());

  // If option set, controls will remain in view in editor
  if (opts.stickyControls.enable) {
    helpers.stickyControls($stage);
  }

  document.dispatchEvent(_events2.default.loaded);

  // Make actions accessible
  formBuilder.actions = {
    clearFields: function clearFields(animate) {
      return helpers.removeAllFields(d.stage, animate);
    },
    showData: function showData() {
      return helpers.showData.call(helpers);
    },
    save: helpers.save,
    addField: function addField(field, index) {
      helpers.stopIndex = data.formData.length ? index : undefined;
      prepFieldVars(field);
      document.dispatchEvent(_events2.default.fieldAdded);
    },
    removeField: helpers.removeField,
    getData: function getData() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'js';

      var stage = d.stage;
      var h = helpers;
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
      helpers.removeAllFields(d.stage, false);
      loadFields(formData);
    },
    setLang: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(locale) {
        var formBuilder;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _mi18n2.default.setCurrent.call(_mi18n2.default, locale);

              case 2:
                d.empty(element);
                formBuilder = new FormBuilder(originalOpts, element);

                $(element).data('formBuilder', formBuilder);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function setLang(_x4) {
        return _ref.apply(this, arguments);
      };
    }()
  };

  formBuilder.formData = data.formData;

  return formBuilder;
};

(function ($) {
  $.fn.formBuilder = function (options) {
    if (!options) {
      options = {};
    }
    var elems = this;

    var _$$extend = $.extend({}, _config.defaultOptions, options, true),
        i18n = _$$extend.i18n,
        opts = (0, _objectWithoutProperties3.default)(_$$extend, ['i18n']);

    _config.config.opts = opts;
    var i18nOpts = $.extend({}, _config.defaultI18n, i18n, true);
    var instance = {
      actions: {
        getData: null,
        setData: null,
        save: null,
        showData: null,
        setLang: null,
        addField: null,
        removeField: null,
        clearFields: null
      },
      formData: [],
      promise: new _promise2.default(function (resolve, reject) {
        _mi18n2.default.init(i18nOpts).then(function () {
          elems.each(function (i) {
            var formBuilder = new FormBuilder(opts, elems[i]);
            $(elems[i]).data('formBuilder', formBuilder);
          });
          var fbInstance = $(elems[0]).data('formBuilder');
          instance.actions = fbInstance.actions;
          instance.formData = fbInstance.formData;
          delete instance.promise;
          resolve(instance);
        }).catch(reject);
      })
    };

    return instance;
  };
})(jQuery);

},{"../../../../../../Draggable/mI18N/mi18n/src/mi18n.js":98,"./config":225,"./data":226,"./dom":227,"./events":228,"./helpers":230,"./polyfills.js":231,"./utils":232,"babel-runtime/core-js/object/assign":103,"babel-runtime/core-js/object/keys":105,"babel-runtime/core-js/promise":106,"babel-runtime/helpers/asyncToGenerator":109,"babel-runtime/helpers/objectWithoutProperties":112,"babel-runtime/helpers/toConsumableArray":114,"babel-runtime/regenerator":116}],230:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _dom = require('./dom');

var _data = require('./data');

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _mi18n = require('../../../../../../Draggable/mI18N/mi18n/src/mi18n.js');

var _mi18n2 = _interopRequireDefault(_mi18n);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mi18n from 'mi18n';
var opts = _config.config.opts;
var m = _utils2.default.markup;

/**
 * Utilities specific to form-builder.js
 */

var Helpers = function () {
  /**
   * Setup defaults, get instance data and dom
   * @param  {String} formID [description]
   */
  function Helpers(formID) {
    (0, _classCallCheck3.default)(this, Helpers);

    this.data = _data.instanceData[formID];
    this.d = _dom.instanceDom[formID];
    this.doCancel = false;
  }

  /**
   * Callback for when a drag begins
   *
   * @param  {Object} event
   * @param  {Object} ui
   */


  (0, _createClass3.default)(Helpers, [{
    key: 'startMoving',
    value: function startMoving(event, ui) {
      ui.item.show().addClass('moving');
      // this.d.startIndex = $('li', this).index(ui.item);
    }

    /**
     * Callback for when a drag ends
     *
     * @param  {Object} event
     * @param  {Object} ui
     */

  }, {
    key: 'stopMoving',
    value: function stopMoving(event, ui) {
      var _this = this;
      ui.item.removeClass('moving');
      if (_this.doCancel) {
        if (ui.sender) {
          $(ui.sender).sortable('cancel');
        }
        ui.item.parent().sortable('cancel');
      }
      _this.save();
      _this.doCancel = false;
    }

    /**
     * jQuery UI sortable beforeStop callback used for both lists.
     * Logic for canceling the sort or drop.
     * @param  {Object} event
     * @param  {Object} ui
     * @return {void}
     */

  }, {
    key: 'beforeStop',
    value: function beforeStop(event, ui) {
      var _this = this;
      var opts = _config.config.opts;
      var form = _this.d.stage;
      var lastIndex = form.children.length - 1;
      var cancelArray = [];
      _this.stopIndex = ui.placeholder.index() - 1;

      if (!opts.sortableControls && ui.item.parent().hasClass('frmb-control')) {
        cancelArray.push(true);
      }

      if (opts.prepend) {
        cancelArray.push(_this.stopIndex === 0);
      }

      if (opts.append) {
        cancelArray.push(_this.stopIndex + 1 === lastIndex);
      }

      _this.doCancel = cancelArray.some(function (elem) {
        return elem === true;
      });
    }

    /**
     * Attempts to get element type and subtype
     *
     * @param  {Object} $field
     * @return {Object} {type: 'fieldType', subtype: 'fieldSubType'}
     */

  }, {
    key: 'getTypes',
    value: function getTypes($field) {
      var types = {
        type: $field.attr('type')
      };
      var subtype = $('.fld-subtype', $field).val();

      if (subtype !== types.type) {
        types.subtype = subtype;
      }

      return types;
    }

    /**
     * Get option data for a field
     * @param  {Object} field jQuery field object
     * @return {Array}        Array of option values
     */

  }, {
    key: 'fieldOptionData',
    value: function fieldOptionData(field) {
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
    }

    /**
     * XML save
     *
     * @param  {Object} form sortableFields node
     * @return {String} xml in string
     */

  }, {
    key: 'xmlSave',
    value: function xmlSave(form) {
      var formData = this.prepData(form);
      var xml = ['<form-template>\n\t<fields>'];

      _utils2.default.forEach(formData, function (fieldIndex, field) {
        var fieldContent = null;
        var optionFields = _dom.optionFieldsRegEx;

        // Handle options
        if (field.type.match(optionFields)) {
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
    }

    /**
     * Get formData from editor in JS Object format
     * @param  {Object} form aka stage, DOM element
     * @return {Object} formData
     */

  }, {
    key: 'prepData',
    value: function prepData(form) {
      var formData = [];
      var d = this.d;
      var _this = this;

      if (form.childNodes.length !== 0) {
        // build data object
        _utils2.default.forEach(form.childNodes, function () {
          var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(index, field) {
            var $field, fieldData, roleVals, id, instance, data, _id, editor, match, multipleField;

            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    $field = $(field);


                    if (!$field.hasClass('disabled-field')) {
                      fieldData = _this.getTypes($field);
                      roleVals = $('.roles-field:checked', field).map(function (elem) {
                        return elem.value;
                      }).get();


                      _this.setAttrVals(field, fieldData);

                      if (fieldData.subtype) {
                        if (fieldData.subtype === 'quill') {
                          id = fieldData.name + '-preview';

                          if (window.fbEditors.quill[id]) {
                            instance = window.fbEditors.quill[id].instance;
                            data = instance.getContents();

                            fieldData.value = window.JSON.stringify(data.ops);
                          }
                        } else if (fieldData.subtype === 'tinymce' && window.tinymce) {
                          _id = fieldData.name + '-preview';

                          if (window.tinymce.editors[_id]) {
                            editor = window.tinymce.editors[_id];

                            fieldData.value = editor.getContent();
                          }
                        }
                      }

                      if (roleVals.length) {
                        fieldData.role = roleVals.join(',');
                      }

                      fieldData.className = fieldData.className || fieldData.class;

                      match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className);

                      if (match) {
                        fieldData.style = match[1];
                      }

                      fieldData = _utils2.default.trimObj(fieldData);

                      multipleField = fieldData.type.match(d.optionFieldsRegEx);


                      if (multipleField) {
                        fieldData.values = _this.fieldOptionData($field);
                      }

                      formData.push(fieldData);
                    }

                  case 2:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      }

      return formData;
    }

    /**
     * Get and set the data for an editor. Mainly
     * a wrapper for handling dataType option
     * @param  {Object} formData
     * @return {Object} formData
     */

  }, {
    key: 'getData',
    value: function getData(formData) {
      var data = this.data;
      if (!formData) {
        formData = _config.config.opts.formData;
      }

      if (!formData) {
        return false;
      }

      var setData = {
        xml: function xml(formData) {
          return _utils2.default.parseXML(formData);
        },
        json: function json(formData) {
          return window.JSON.parse(formData);
        }
      };

      data.formData = setData[_config.config.opts.dataType](formData) || [];

      return data.formData;
    }

    /**
     * Saves and returns formData
     * @param {Object} stage DOM element
     * @return {XML|JSON} formData
     */

  }, {
    key: 'save',
    value: function save(stage) {
      var _this = this;
      var data = this.data;
      if (!stage) {
        stage = this.d.stage;
      }
      var doSave = {
        xml: _this.xmlSave,
        json: function json() {
          return window.JSON.stringify(_this.prepData(stage), null, '\t');
        }
      };

      // save action for current `dataType`
      data.formData = doSave[_config.config.opts.dataType](stage);

      // trigger formSaved event
      document.dispatchEvent(_events2.default.formSaved);
      return data.formData;
    }

    /**
     * increments the field ids with support for multiple editors
     * @param  {String} id field ID
     * @return {String}    incremented field ID
     */

  }, {
    key: 'incrementId',
    value: function incrementId(id) {
      var split = id.lastIndexOf('-');
      var newFieldNumber = parseInt(id.substring(split + 1)) + 1;
      var baseString = id.substring(0, split);

      return baseString + '-' + newFieldNumber;
    }

    /**
     * Set the values for field attributes in the editor
     * @param {Object} field
     * @param {Object} fieldData
     */

  }, {
    key: 'setAttrVals',
    value: function setAttrVals(field, fieldData) {
      var attrs = field.querySelectorAll('[class*="fld-"]');
      attrs.forEach(function (attr) {
        var value = void 0;
        var name = _utils2.default.camelCase(attr.getAttribute('name'));
        if (attr.attributes['contenteditable']) {
          value = attr.innerHTML;
        } else if (attr.type === 'checkbox') {
          value = attr.checked;
        } else {
          value = attr.value;
        }
        fieldData[name] = value;
      });
    }

    /**
     * Collect field attribute values and call fieldPreview to generate preview
     * @param  {Object} $field jQuery DOM element
     */

  }, {
    key: 'updatePreview',
    value: function updatePreview($field) {
      var _this = this;
      var d = this.d;
      var fieldClass = $field.attr('class');
      var field = $field[0];
      if (fieldClass.indexOf('input-control') !== -1) {
        return;
      }

      var fieldType = $field.attr('type');
      var $prevHolder = $('.prev-holder', field);
      var previewData = {
        type: fieldType
      };
      var preview = void 0;

      _this.setAttrVals(field, previewData);

      var style = $('.btn-style', field).val();
      if (style) {
        previewData.style = style;
      }

      if (fieldType.match(d.optionFieldsRegEx)) {
        previewData.values = [];
        previewData.multiple = $('[name="multiple"]', field).is(':checked');

        $('.sortable-options li', field).each(function (i, $option) {
          var option = {};
          option.selected = $('.option-selected', $option).is(':checked');
          option.value = $('.option-value', $option).val();
          option.label = $('.option-label', $option).val();
          previewData.values.push(option);
        });
      }

      previewData = _utils2.default.trimObj(previewData);

      previewData.className = _this.classNames(field, previewData);
      $('.fld-className', field).val(previewData.className);

      $field.data('fieldData', previewData);
      preview = _utils2.default.getTemplate(previewData, true);

      (0, _dom.empty)($prevHolder[0]);
      $prevHolder[0].appendChild(preview);
      preview.dispatchEvent(_events2.default.fieldRendered);
    }

    /**
     * Display a custom tooltip for disabled fields.
     *
     * @param  {Object} field
     */

  }, {
    key: 'disabledTT',
    value: function disabledTT(stage) {
      var move = function move(e, elem) {
        var fieldOffset = elem.field.getBoundingClientRect();
        var x = e.clientX - fieldOffset.left - 21;
        var y = e.clientY - fieldOffset.top - elem.tt.offsetHeight - 12;
        elem.tt.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
      };

      stage.querySelectorAll('.disabled-field').forEach(function (field) {
        var title = opts.messages.fieldNonEditable;

        if (title) {
          var tt = _utils2.default.markup('p', title, { className: 'frmb-tt' });
          field.appendChild(tt);
          field.addEventListener('mousemove', function (e) {
            return move(e, { tt: tt, field: field });
          });
        }
      });
    }

    /**
     * Process classNames for field
     * @param  {Object} field
     * @param  {Object} previewData
     * @return {String} classNames
     */

  }, {
    key: 'classNames',
    value: function classNames(field, previewData) {
      var i = void 0;
      var type = previewData.type;
      var style = previewData.style;
      var className = field.querySelector('.fld-className').value;
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
      return _utils2.default.unique(classes).join(' ').trim();
    }

    /**
     * Closes and open dialog
     *
     * @param  {Object} overlay Existing overlay if there is one
     * @param  {Object} dialog  Existing dialog
     */

  }, {
    key: 'closeConfirm',
    value: function closeConfirm(overlay, dialog) {
      if (!overlay) {
        overlay = document.getElementsByClassName('form-builder-overlay')[0];
      }
      if (!dialog) {
        dialog = document.getElementsByClassName('form-builder-dialog')[0];
      }
      overlay.classList.remove('visible');
      dialog.remove();
      overlay.remove();
      document.dispatchEvent(_events2.default.modalClosed);
    }

    /**
     * Returns the layout data based on controlPosition option
     * @param  {String} controlPosition 'left' or 'right'
     * @return {Object} layout object
     */

  }, {
    key: 'editorLayout',
    value: function editorLayout(controlPosition) {
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
    }

    /**
     * Adds overlay to the page. Used for modals.
     * @return {Object} DOM Object
     */

  }, {
    key: 'showOverlay',
    value: function showOverlay() {
      var _this = this;
      var overlay = _utils2.default.markup('div', null, {
        className: 'form-builder-overlay'
      });
      document.body.appendChild(overlay);
      overlay.classList.add('visible');

      overlay.onclick = function () {
        _this.closeConfirm(overlay);
      };

      return overlay;
    }

    /**
     * Custom confirmation dialog
     *
     * @param  {Object}  message   Content to be displayed in the dialog
     * @param  {Func}  yesAction callback to fire if they confirm
     * @param  {Boolean} coords    location to put the dialog
     * @param  {String}  className Custom class to be added to the dialog
     * @return {Object}            Reference to the modal
     */

  }, {
    key: 'confirm',
    value: function confirm(message, yesAction) {
      var coords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

      var _this = this;
      var i18n = _mi18n2.default.current;
      var overlay = _this.showOverlay();
      var yes = m('button', i18n.yes, {
        className: 'yes btn btn-success btn-sm'
      });
      var no = m('button', i18n.no, {
        className: 'no btn btn-danger btn-sm'
      });

      no.onclick = function () {
        _this.closeConfirm(overlay);
      };

      yes.onclick = function () {
        yesAction();
        _this.closeConfirm(overlay);
      };

      var btnWrap = m('div', [no, yes], { className: 'button-wrap' });

      className = 'form-builder-dialog ' + className;

      var miniModal = m('div', [message, btnWrap], { className: className });
      if (!coords) {
        var dE = document.documentElement;
        coords = {
          pageX: Math.max(dE.clientWidth, window.innerWidth || 0) / 2,
          pageY: Math.max(dE.clientHeight, window.innerHeight || 0) / 2
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
    }

    /**
     * Popup dialog the does not require confirmation.
     * @param  {String|DOM|Array}  content
     * @param  {Boolean} coords    false if no coords are provided. Without coordinates
     *                             the popup will appear center screen.
     * @param  {String}  className classname to be added to the dialog
     * @return {Object}            dom
     */

  }, {
    key: 'dialog',
    value: function dialog(content) {
      var coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var _this = this;
      var clientWidth = document.documentElement.clientWidth;
      var clientHeight = document.documentElement.clientHeight;
      _this.showOverlay();

      className = 'form-builder-dialog ' + className;

      var miniModal = _utils2.default.markup('div', content, { className: className });
      if (!coords) {
        coords = {
          pageX: Math.max(clientWidth, window.innerWidth || 0) / 2,
          pageY: Math.max(clientHeight, window.innerHeight || 0) / 2
        };
        miniModal.style.position = 'fixed';
      } else {
        miniModal.classList.add('positioned');
      }

      miniModal.style.left = coords.pageX + 'px';
      miniModal.style.top = coords.pageY + 'px';

      document.body.appendChild(miniModal);

      document.dispatchEvent(_events2.default.modalOpened);

      if (className.indexOf('data-dialog') !== -1) {
        document.dispatchEvent(_events2.default.viewData);
      }

      return miniModal;
    }

    /**
     * Confirm all fields will be removed then remove them
     * @param  {Object} e click event object
     */

  }, {
    key: 'confirmRemoveAll',
    value: function confirmRemoveAll(e) {
      var _this = this;
      var formID = e.target.id.match(/frmb-\d{13}/)[0];
      var stage = document.getElementById(formID);
      var i18n = _mi18n2.default.current;
      var fields = $('li.form-field', stage);
      var buttonPosition = e.target.getBoundingClientRect();
      var bodyRect = document.body.getBoundingClientRect();
      var coords = {
        pageX: buttonPosition.left + buttonPosition.width / 2,
        pageY: buttonPosition.top - bodyRect.top - 12
      };

      if (fields.length) {
        _this.confirm(i18n.clearAllMessage, function () {
          _this.removeAllFields.call(_this, stage);
          _config.config.opts.notify.success(i18n.allFieldsRemoved);
          _config.config.opts.onClearAll();
        }, coords);
      } else {
        _this.dialog(i18n.noFieldsToClear, coords);
      }
    }

    /**
     * Removes all fields from the form
     * @param {Boolean} animate whether to animate or not
     * @return {void}
     */

  }, {
    key: 'removeAllFields',
    value: function removeAllFields(stage) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var _this = this;
      var i18n = _mi18n2.default.current;
      var opts = _config.config.opts;
      var fields = stage.querySelectorAll('li.form-field');
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
        stage.parentElement.classList.add('empty');
        stage.parentElement.dataset.content = i18n.getStarted;
      }

      if (animate) {
        stage.classList.add('removing');
        var outerHeight = 0;
        fields.forEach(function (field) {
          return outerHeight += field.offsetHeight + 3;
        });
        fields[0].style.marginTop = -outerHeight + 'px';
        setTimeout(function () {
          (0, _dom.empty)(stage).classList.remove('removing');
          _this.save(stage);
        }, 400);
      } else {
        (0, _dom.empty)(stage);
        _this.save(stage);
      }
    }

    /**
     * If user re-orders the elements their order should be saved.
     *
     * @param {Object} $cbUL our list of elements
     */

  }, {
    key: 'setFieldOrder',
    value: function setFieldOrder($cbUL) {
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
    }

    /**
     * Reorder the controls if the user has previously ordered them.
     *
     * @param  {Array} frmbFields
     * @return {Array} ordered fields
     */

  }, {
    key: 'orderFields',
    value: function orderFields(frmbFields) {
      var opts = _config.config.opts;
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
        fieldOrder = _utils2.default.unique(controlOrder);
      } else {
        fieldOrder = window.JSON.parse(fieldOrder);
        fieldOrder = (0, _keys2.default)(fieldOrder).map(function (i) {
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
    }

    /**
     * Close fields being editing
     * @param  {Object} stage
     */

  }, {
    key: 'closeAllEdit',
    value: function closeAllEdit() {
      var _this = this;
      var fields = $('> li.editing', _this.d.stage);
      var toggleBtns = $('.toggle-form', _this.d.stage);
      var editPanels = $('.frm-holder', fields);

      toggleBtns.removeClass('open');
      fields.removeClass('editing');
      $('.prev-holder', fields).show();
      editPanels.hide();
    }

    /**
     * Toggles the edit mode for the given field
     * @param  {String} fieldId
     * @param  {Boolean} animate
     */

  }, {
    key: 'toggleEdit',
    value: function toggleEdit(fieldId) {
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
      this.updatePreview($(field));
    }

    /**
     * Controls follow scroll to the bottom of the editor
     */

  }, {
    key: 'stickyControls',
    value: function stickyControls() {
      var d = this.d;
      var $cbWrap = $(d.controls).parent();
      var $stageWrap = $(d.stage).parent();
      var cbWidth = $cbWrap.width();
      var cbPosition = d.controls.getBoundingClientRect();

      $(window).scroll(function (evt) {
        var scrollTop = $(evt.target).scrollTop();
        var offsetDefaults = {
          top: 5,
          bottom: 'auto',
          right: 'auto',
          left: cbPosition.left
        };

        var offset = (0, _assign2.default)({}, offsetDefaults, _config.config.opts.stickyControls.offset);

        if (scrollTop > $stageWrap.offset().top) {
          var style = {
            position: 'fixed',
            width: cbWidth
          };

          var cbStyle = (0, _assign2.default)(style, offset);

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
          d.controls.parentElement.removeAttribute('style');
        }
      });
    }

    /**
     * Open a dialog with the form's data
     */

  }, {
    key: 'showData',
    value: function showData(e) {
      var data = this.data;
      var formData = _utils2.default.escapeHtml(data.formData);
      var code = m('code', formData, {
        className: 'formData-' + _config.config.opts.dataType
      });

      this.dialog(m('pre', code), null, 'data-dialog');
    }

    /**
     * Remove a field from the stage
     * @param  {String}  fieldID ID of the field to be removed
     * @return {Boolean} fieldRemoved returns true if field is removed
     */

  }, {
    key: 'removeField',
    value: function removeField(fieldID) {
      var fieldRemoved = false;
      var _this = this;
      var form = this.d.stage;
      var fields = form.getElementsByClassName('form-field');

      if (!fields.length) {
        console.warn('No fields to remove');
        return false;
      }

      if (!fieldID) {
        var availableIds = [].slice.call(fields).map(function (field) {
          return field.id;
        });
        console.warn('fieldID required to remove specific fields. Removing last field since no ID was supplied.');
        console.warn('Available IDs: ' + availableIds.join(', '));
        fieldID = form.lastChild.id;
      }

      var field = document.getElementById(fieldID);
      var $field = $(field);
      if (!field) {
        console.warn('Field not found');
        return false;
      }

      $field.slideUp(250, function () {
        $field.removeClass('deleting');
        $field.remove();
        fieldRemoved = true;
        _this.save();
        if (!form.childNodes.length) {
          var stageWrap = form.parentElement;
          stageWrap.classList.add('empty');
          stageWrap.dataset.content = _mi18n2.default.current.getStarted;
        }
      });

      document.dispatchEvent(_events2.default.fieldRemoved);
      return fieldRemoved;
    }

    /**
     * Generate markup for form action buttons
     * @param  {Object} buttonData
     * @return {Object} DOM element for action button
     */

  }, {
    key: 'processActionButtons',
    value: function processActionButtons(buttonData) {
      var label = buttonData.label,
          events = buttonData.events,
          attrs = (0, _objectWithoutProperties3.default)(buttonData, ['label', 'events']);

      var data = this.data;

      if (!label) {
        label = attrs.id ? _utils2.default.capitalize(attrs.id) : '';
      } else {
        label = _mi18n2.default.current[label] || '';
      }

      if (!attrs.id) {
        attrs.id = data.formID + '-action-' + Math.round(Math.random() * 1000);
      } else {
        attrs.id = data.formID + '-' + attrs.id + '-action';
      }

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
    }

    /**
     * Cross link subtypes and define markup config
     * @param  {Array} subtypeOpts
     * @return {Array} subtypes
     */

  }, {
    key: 'processSubtypes',
    value: function processSubtypes(subtypeOpts) {
      var subtypes = {};
      var subtypeFormat = function subtypeFormat(subtype) {
        return {
          label: _mi18n2.default.get(subtype),
          value: subtype
        };
      };

      _config.config.subtypes = _utils2.default.merge(_dom.defaultSubtypes, subtypeOpts);

      for (var subtype in _config.config.subtypes) {
        if (_config.config.subtypes.hasOwnProperty(subtype)) {
          subtypes[subtype] = _config.config.subtypes[subtype].map(subtypeFormat);
        }
      }

      return subtypes;
    }

    /**
     * Generate stage and controls dom elements
     * @param  {String} formID [description]
     */

  }, {
    key: 'editorUI',
    value: function editorUI(formID) {
      var d = this.d;
      var data = this.data;
      d.stage = m('ul', null, {
        id: data.formID,
        className: 'frmb'
      });

      // Create draggable fields for formBuilder
      d.controls = m('ul', null, {
        id: data.formID + '-control-box',
        className: 'frmb-control'
      });
    }

    /**
     * Process user options for actionButtons
     * @param  {Object} options
     * @return {Object} processedOptions
     */

  }, {
    key: 'processOptions',
    value: function processOptions(options) {
      var _this = this;
      var _options$fields = options.fields,
          fields = _options$fields === undefined ? [] : _options$fields,
          templates = options.templates,
          opts = (0, _objectWithoutProperties3.default)(options, ['fields', 'templates']);

      var actionButtons = [{
        id: 'clear',
        className: 'clear-all btn btn-danger',
        events: {
          click: _this.confirmRemoveAll.bind(_this)
        }
      }, {
        label: 'viewJSON',
        id: 'data',
        className: 'btn btn-default',
        events: {
          click: _this.showData.bind(_this)
        }
      }, {
        id: 'save',
        type: 'button',
        className: 'btn btn-primary save-template',
        events: {
          click: function click(evt) {
            return _config.config.opts.onSave(evt, _this.data.formData);
          }
        }
      }];

      var defaultFields = [{
        label: _mi18n2.default.get('autocomplete'),
        attrs: {
          type: 'autocomplete'
        }
      }, {
        label: _mi18n2.default.get('button'),
        attrs: {
          type: 'button'
        }
      }, {
        label: _mi18n2.default.get('checkboxGroup'),
        attrs: {
          type: 'checkbox-group'
        }
      }, {
        label: _mi18n2.default.get('dateField'),
        attrs: {
          type: 'date'
        }
      }, {
        label: _mi18n2.default.get('fileUpload'),
        attrs: {
          type: 'file'
        }
      }, {
        label: _mi18n2.default.get('header'),
        attrs: {
          type: 'header'
        }
      }, {
        label: _mi18n2.default.get('hidden'),
        attrs: {
          type: 'hidden'
        }
      }, {
        label: _mi18n2.default.get('number'),
        attrs: {
          type: 'number'
        }
      }, {
        label: _mi18n2.default.get('paragraph'),
        attrs: {
          type: 'paragraph'
        }
      }, {
        label: _mi18n2.default.get('radioGroup'),
        attrs: {
          type: 'radio-group'
        }
      }, {
        label: _mi18n2.default.get('select'),
        attrs: {
          type: 'select'
        }
      }, {
        label: _mi18n2.default.get('text'),
        attrs: {
          type: 'text'
        }
      }, {
        label: _mi18n2.default.get('textArea'),
        attrs: {
          type: 'textarea'
        }
      }];

      opts.fields = fields.concat(defaultFields);
      _config.config.opts = (0, _assign2.default)({}, { actionButtons: actionButtons, templates: templates, fields: fields }, opts);
      _utils2.default.templates = (0, _keys2.default)(_config.config.opts.templates).map(function (key) {
        return [key, _config.config.opts.templates[key]];
      });

      return _config.config.opts;
    }

    // end class

  }]);
  return Helpers;
}();

// export default Helpers;


exports.default = Helpers;

},{"../../../../../../Draggable/mI18N/mi18n/src/mi18n.js":98,"./config":225,"./data":226,"./dom":227,"./events":228,"./utils":232,"babel-runtime/core-js/object/assign":103,"babel-runtime/core-js/object/keys":105,"babel-runtime/helpers/asyncToGenerator":109,"babel-runtime/helpers/classCallCheck":110,"babel-runtime/helpers/createClass":111,"babel-runtime/helpers/objectWithoutProperties":112,"babel-runtime/regenerator":116}],231:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  if (typeof _assign2.default != 'function') {
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

  // Reference: http://es5.github.io/#x15.4.4.18
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback) {
      var T = void 0,
          k = void 0;
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }
      var O = Object(this);
      var len = O.length >>> 0;
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
      if (arguments.length > 1) {
        T = arguments[1];
      }
      k = 0;
      while (k < len) {
        var kValue = void 0;
        if (k in O) {
          kValue = O[k];
          callback.call(T, kValue, k, O);
        }
        k++;
      }
    };
  }
}

exports.default = polyfills();

},{"babel-runtime/core-js/object/assign":103}],232:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _dom = require('./dom');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} utils
 */
// function utils() {
var utils = {};
window.fbLoaded = {
  js: [],
  css: []
};
window.fbEditors = {
  quill: {},
  tinymce: {}
};

// cleaner syntax for testing indexOf element
utils.inArray = function (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
utils.trimObj = function (attrs) {
  var xmlRemove = [null, undefined, '', false, 'false'];
  for (var attr in attrs) {
    if (utils.inArray(attrs[attr], xmlRemove)) {
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
utils.validAttr = function (attr) {
  var invalid = ['values', 'enableOther', 'other', 'label',
  // 'style',
  'subtype'];
  return !utils.inArray(attr, invalid);
};

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
utils.attrString = function (attrs) {
  var attributes = [];

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr) && utils.validAttr(attr)) {
      attr = utils.safeAttr(attr, attrs[attr]);
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
utils.safeAttr = function (name, value) {
  name = utils.safeAttrName(name);
  var valString = void 0;

  if (value) {
    if (Array.isArray(value)) {
      valString = utils.escapeAttr(value.join(' '));
    } else {
      if (typeof value === 'boolean') {
        value = value.toString();
      }
      valString = utils.escapeAttr(value.replace(',', ' ').trim());
    }
  }

  value = value ? '="' + valString + '"' : '';
  return {
    name: name,
    value: value
  };
};

utils.safeAttrName = function (name) {
  var safeAttr = {
    className: 'class'
  };

  return safeAttr[name] || utils.hyphenCase(name);
};

/**
 * Convert strings into lowercase-hyphen
 *
 * @param  {String} str
 * @return {String}
 */
utils.hyphenCase = function (str) {
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
utils.camelCase = function (str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
};

/**
 * Determine content type
 * @param  {Node | String | Array | Object} content
 * @return {String}                         contentType for mapping
 */
utils.contentType = function (content) {
  var type = typeof content === 'undefined' ? 'undefined' : (0, _typeof3.default)(content);
  if (content instanceof Node || content instanceof HTMLElement) {
    type = 'node';
  } else if (Array.isArray(content)) {
    type = 'array';
  }

  return type;
};

/**
 * Bind events to an element
 * @param  {Object} element DOM element
 * @param  {Object} events  object full of events eg. {click: evt => callback}
 * @return {void}
 */
utils.bindEvents = function (element, events) {
  if (events) {
    var _loop = function _loop(event) {
      if (events.hasOwnProperty(event)) {
        element.addEventListener(event, function (evt) {
          return events[event](evt);
        });
      }
    };

    for (var event in events) {
      _loop(event);
    }
  }
};

/**
 * Generate a unique name attribute
 * @param  {Object} field
 * @return {String}       name
 */
utils.nameAttr = function (field) {
  var epoch = new Date().getTime();
  var prefix = field.type || utils.hyphenCase(field.label);
  return prefix + '-' + epoch;
};

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {Object}              attrs
 * @return {Object} DOM Element
 */
utils.markup = function (tag) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var contentType = utils.contentType(content);
  var events = attributes.events,
      attrs = (0, _objectWithoutProperties3.default)(attributes, ['events']);

  var field = document.createElement(tag);

  var appendContent = {
    string: function string(content) {
      field.innerHTML += content;
    },
    object: function object(config) {
      var tag = config.tag,
          content = config.content,
          data = (0, _objectWithoutProperties3.default)(config, ['tag', 'content']);

      return field.appendChild(utils.markup(tag, content, data));
    },
    node: function node(content) {
      return field.appendChild(content);
    },
    array: function array(content) {
      for (var i = 0; i < content.length; i++) {
        contentType = utils.contentType(content[i]);
        appendContent[contentType](content[i]);
      }
    },
    function: function _function(content) {
      content = content();
      contentType = utils.contentType(content);
      appendContent[contentType](content);
    },
    undefined: function undefined() {
      // console.error(tag, content, attributes);
    }
  };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var name = utils.safeAttrName(attr);
      field.setAttribute(name, attrs[attr]);
    }
  }

  if (content) {
    appendContent[contentType].call(this, content);
  }

  utils.bindEvents(field, events);

  return field;
};
var m = utils.markup;

/**
 * Convert html element attributes to key/value object
 * @param  {Object} elem DOM element
 * @return {Object} ex: {attrName: attrValue}
 */
utils.parseAttrs = function (elem) {
  var attrs = elem.attributes;
  var data = {};
  utils.forEach(attrs, function (attr) {
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
 * @param  {Object} field  DOM element
 * @return {Array}         optionData array
 */
utils.parseOptions = function (field) {
  var options = field.getElementsByTagName('option');
  var optionData = {};
  var data = [];

  if (options.length) {
    for (var i = 0; i < options.length; i++) {
      optionData = utils.parseAttrs(options[i]);
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
utils.parseXML = function (xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml');
  var formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      var fieldData = utils.parseAttrs(fields[i]);

      if (fields[i].children && fields[i].children.length) {
        fieldData.values = utils.parseOptions(fields[i]);
      }

      formData.push(fieldData);
    }
  }

  return formData;
};

/**
 * Converts escaped HTML into usable HTML
 * @param  {String} html escaped HTML
 * @return {String}      parsed HTML
 */
utils.parsedHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.innerHTML = html;
  return escapeElement.textContent;
};

/**
 * Escape markup so it can be displayed rather than rendered
 * @param  {String} html markup
 * @return {String}      escaped html
 */
utils.escapeHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

// Escape an attribute
utils.escapeAttr = function (str) {
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
utils.escapeAttrs = function (attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = utils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};

// forEach that can be used on nodeList
utils.forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * Remove duplicates from an array of elements
 * @param  {Array} array  array with possible duplicates
 * @return {Array}        array with only unique values
 */
utils.unique = function (array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};

utils.makeLabel = function (data) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var labelText = utils.parsedHtml(label);
  var labelContents = [labelText];

  if (data.required) {
    labelContents.push(m('span', '*', { className: 'required' }));
  }

  if (data.type !== 'hidden') {
    if (description) {
      labelContents.push(m('span', '?', {
        className: 'tooltip-element',
        tooltip: description
      }));
    }
  }

  return m('label', labelContents, {
    for: data.id,
    className: 'fb-' + data.type + '-label'
  });
};

utils.templateMap = function (templates, type) {
  var template = void 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(templates), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref3 = _step.value;

      var _ref2 = (0, _slicedToArray3.default)(_ref3, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      if (Array.isArray(key)) {
        if (utils.inArray(type, key)) {
          template = value;
          break;
        }
      } else if (type === key) {
        template = value;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return template;
};

utils.autocompleteTemplate = function (fieldData) {
  var values = fieldData.values,
      type = fieldData.type,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['values', 'type']);

  var keyboardNav = function keyboardNav(e) {
    var list = e.target.nextSibling.nextSibling;
    var activeOption = list.getElementsByClassName('active-option')[0];
    var keyCodeMapVals = [
    // up
    [38, function () {
      if (activeOption) {
        if (activeOption.previousSibling) {
          activeOption.classList.remove('active-option');
          activeOption = activeOption.previousSibling;
          activeOption.classList.add('active-option');
        }
      }
    }],
    // down
    [40, function () {
      if (activeOption) {
        if (activeOption.nextSibling) {
          activeOption.classList.remove('active-option');
          activeOption = activeOption.nextSibling;
          activeOption.classList.add('active-option');
        }
      } else {
        activeOption = list.firstChild;
        activeOption.classList.add('active-option');
      }
    }], [13, function () {
      if (activeOption) {
        e.target.value = activeOption.innerHTML;
        if (list.style.display === 'none') {
          list.style.display = 'block';
        } else {
          list.style.display = 'none';
        }
      }
    }]];
    var keyCodeMap = new _map2.default(keyCodeMapVals);

    var direction = keyCodeMap.get(e.keyCode);
    if (!direction) {
      direction = function direction() {
        return false;
      };
    }

    return direction();
  };
  var fauxEvents = {
    focus: function focus(evt) {
      evt.target.addEventListener('keydown', keyboardNav);
      evt.target.nextSibling.nextSibling.style.display = 'block';
    },
    blur: function blur(evt) {
      evt.target.removeEventListener('keydown', keyboardNav);
      setTimeout(function () {
        evt.target.nextSibling.nextSibling.style.display = 'none';
      }, 200);
    },
    input: function input(evt) {
      var list = evt.target.nextSibling.nextSibling;
      (0, _dom.filter)(list.querySelectorAll('li'), evt.target.value);
      if (!evt.target.value) {
        list.style.display = 'none';
      } else {
        list.style.display = 'block';
      }
    }
  };
  var fauxAttrs = (0, _assign2.default)({}, data, {
    id: data.id + '-input',
    events: fauxEvents
  });
  var hiddenAttrs = (0, _assign2.default)({}, data, { type: 'hidden' });
  delete fauxAttrs.name;
  var field = [m('input', null, fauxAttrs), m('input', null, hiddenAttrs)];

  var options = values.map(function (optionData) {
    var label = optionData.label;
    var config = {
      events: {
        click: function click(evt) {
          var list = evt.target.parentElement;
          var field = list.previousSibling.previousSibling;
          field.value = optionData.label;
          field.previousSibling.value = optionData.value;
          list.style.display = 'none';
        }
      },
      value: optionData.value
    };
    return m('li', label, config);
  });

  field.push(m('ul', options, { id: data.id + '-list', className: 'fb-' + type + '-list' }));

  var onRender = function onRender(evt) {};

  return { field: field, onRender: onRender };
};

/**
 * Generate DOM elements for select, checkbox-group and radio-group.
 * @param  {Object} fieldData
 * @return {Object}           DOM elements
 */
utils.selectTemplate = function (fieldData) {
  var options = [];
  var values = fieldData.values,
      placeholder = fieldData.placeholder,
      type = fieldData.type,
      inline = fieldData.inline,
      other = fieldData.other,
      toggle = fieldData.toggle,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['values', 'placeholder', 'type', 'inline', 'other', 'toggle']);

  var optionType = type.replace('-group', '');
  var isSelect = type === 'select';

  if (values) {
    if (placeholder && isSelect) {
      options.push(m('option', placeholder, {
        disabled: null,
        selected: null
      }));
    }

    for (var i = 0; i < values.length; i++) {
      var _values$i = values[i],
          _values$i$label = _values$i.label,
          label = _values$i$label === undefined ? '' : _values$i$label,
          optionAttrs = (0, _objectWithoutProperties3.default)(_values$i, ['label']);


      optionAttrs.id = data.id + '-' + i;
      if (!optionAttrs.selected || placeholder) {
        delete optionAttrs.selected;
      }

      if (isSelect) {
        var o = m('option', document.createTextNode(label), optionAttrs);
        options.push(o);
      } else {
        var wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
        }
        optionAttrs.type = optionType;
        if (optionAttrs.selected) {
          optionAttrs.checked = 'checked';
          delete optionAttrs.selected;
        }
        var input = m('input', null, (0, _assign2.default)({}, data, optionAttrs));
        var labelAttrs = { for: optionAttrs.id };
        var labelContent = [input, label];
        if (toggle) {
          var kcToggle = m('span');
          labelContent = [input, kcToggle, label];
          labelAttrs.className = 'kc-toggle';
        }

        var inputLabel = m('label', labelContent, labelAttrs);
        var wrapper = m('div', inputLabel, { className: wrapperClass });
        options.push(wrapper);
      }
    }

    if (!isSelect && other) {
      var otherOptionAttrs = {
        id: data.id + '-other',
        className: data.className + ' other-option',
        events: {
          click: function click() {
            return utils.otherOptionCB(otherOptionAttrs.id);
          }
        }
      };
      // let label = mi18n.current.other;
      var _wrapperClass = optionType;
      if (inline) {
        _wrapperClass += '-inline';
      }

      var optionAttrs = (0, _assign2.default)({}, data, otherOptionAttrs);
      optionAttrs.type = optionType;

      var otherValAttrs = {
        type: 'text',
        name: data.name,
        id: otherOptionAttrs.id + '-value',
        className: 'other-val'
      };
      var otherInputs = [m('input', null, optionAttrs), document.createTextNode('Other'), m('input', null, otherValAttrs)];
      var _inputLabel = m('label', otherInputs, { for: optionAttrs.id });
      var _wrapper = m('div', _inputLabel, { className: _wrapperClass });
      options.push(_wrapper);
    }
  }

  var templates = [['select', function () {
    return m(optionType, options, data);
  }], [['checkbox-group', 'radio-group', 'checkbox'], function () {
    return m('div', options, { className: type });
  }]];

  return utils.templateMap(templates, type);
};

utils.defaultField = function (fieldData) {
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      type = fieldData.type,
      id = fieldData.id,
      isPreview = fieldData.isPreview,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'type', 'id', 'isPreview']);

  if (id) {
    if (isPreview) {
      if (data.name) {
        data.name = data.name + '-preview';
      } else {
        data.name = utils.nameAttr(fieldData) + '-preview';
      }
    }
    data.id = data.name;
  }
  if (description) {
    data.title = description;
  }
  if (subtype) {
    type = subtype;
  }

  var field = {
    field: m(type, utils.parsedHtml(label), data),
    onRender: utils.noop
  };

  return function () {
    return field;
  };
};

/**
 * Loads an array of scripts using jQuery's `getScript`
 * @param  {Array|String}  scriptScr    scripts
 * @param  {String} path   optional to load form
 * @return {Promise}       a promise
 */
utils.getScripts = function (scriptScr, path) {
  var $ = jQuery;
  var _arr = [];

  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr];
  }

  if (!utils.isCached(scriptScr)) {
    _arr = $.map(scriptScr, function (src) {
      var options = {
        dataType: 'script',
        cache: true,
        url: (path || '') + src
      };
      return $.ajax(options).done(function () {
        return window.fbLoaded.js.push(src);
      });
    });
  }

  _arr.push($.Deferred(function (deferred) {
    return $(deferred.resolve);
  }));

  return $.when.apply($, (0, _toConsumableArray3.default)(_arr));
};

/**
 * Checks if remote resource is already loaded
 * @param  {String|Array} src  url of remote script or css
 * @param  {String}       type       'js' or 'css'
 * @return {Boolean}      isCached
 */
utils.isCached = function (src) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js';

  var isCached = false;
  var cache = window.fbLoaded[type];
  if (Array.isArray(src)) {
    isCached = src.every(function (s) {
      return utils.inArray(s, cache);
    });
  } else {
    isCached = utils.inArray(src, cache);
  }
  return isCached;
};

/**
 * Appends stylesheets to the head
 * @param  {Array} scriptScr
 * @param  {String} path
 * @return {void}
 */
utils.getStyles = function (scriptScr, path) {
  if (utils.isCached(scriptScr, 'css')) {
    return;
  }
  var appendStyle = function appendStyle(href) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    window.fbLoaded.css.push(href);
  };
  scriptScr.forEach(function (src) {
    return appendStyle((path || '') + src);
  });
};

utils.longTextTemplate = function (data) {
  var _data$value = data.value,
      value = _data$value === undefined ? '' : _data$value,
      attrs = (0, _objectWithoutProperties3.default)(data, ['value']);

  var template = {
    field: m('textarea', utils.parsedHtml(value), attrs)
  };
  var editors = {
    tinymce: {
      js: ['//cdn.tinymce.com/4/tinymce.min.js'],
      onRender: function onRender(evt) {
        if (window.tinymce.editors[data.id]) {
          window.tinymce.editors[data.id].remove();
        }
        window.tinymce.init({
          target: template.field,
          height: 250,
          plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table contextmenu paste code'],
          toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
        });
      }
    },
    quill: {
      js: ['//cdn.quilljs.com/1.1.3/quill.js'],
      css: ['//cdn.quilljs.com/1.1.3/quill.snow.css'],
      onRender: function onRender(evt) {
        var Delta = window.Quill.import('delta');
        window.fbEditors.quill[data.id] = {};
        var editor = window.fbEditors.quill[data.id];
        editor.instance = new window.Quill(template.field, {
          modules: {
            toolbar: [[{ 'header': [1, 2, false] }], ['bold', 'italic', 'underline'], ['code-block']]
          },
          placeholder: attrs.placeholder || '',
          theme: 'snow'
        });
        editor.data = new Delta();
        if (value) {
          editor.instance.setContents(window.JSON.parse(utils.parsedHtml(value)));
        }
        editor.instance.on('text-change', function (delta) {
          editor.data = editor.data.compose(delta);
        });
      }
    }
  };

  if (data.type !== 'textarea') {
    template.onRender = editors[data.type].onRender;
  }
  if (data.type === 'quill') {
    template.field = m('div', null, attrs);
  }

  var onRender = function onRender() {
    if (editors[data.type]) {
      document.removeEventListener('fieldRendered', onRender);

      if (editors[data.type].css) {
        utils.getStyles(editors[data.type].css);
      }
      if (editors[data.type].js && !utils.isCached(editors[data.type].js)) {
        utils.getScripts(editors[data.type].js).done(template.onRender);
      } else {
        template.onRender();
      }
    }
  };

  return { field: template.field, onRender: onRender };
};

utils.templates = [];

utils.getTemplate = function (fieldData) {
  var isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      labelPosition = fieldData.labelPosition,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'labelPosition']);

  var template = void 0;
  var field = void 0;

  if (isPreview) {
    if (data.name) {
      data.name = data.name + '-preview';
    } else {
      data.name = utils.nameAttr(fieldData) + '-preview';
    }
  }
  data.id = data.name;

  if (subtype) {
    data.type = subtype;
  }

  if (data.multiple || data.type === 'checkbox-group') {
    data.name = data.name + '[]';
  }

  if (data.required) {
    data.required = null;
    data['aria-required'] = 'true';
  }

  var fieldLabel = utils.makeLabel(data, label, description);

  var templates = utils.templates.concat([['autocomplete', function () {
    var autocomplete = utils.autocompleteTemplate(data);
    var template = {
      field: [fieldLabel, autocomplete.field],
      onRender: autocomplete.onRender
    };
    return template;
  }], [_dom.defaultSubtypes.text.concat(['number', 'file', 'date']), function () {
    var template = {
      field: [m(data.type, null, data)]
    };
    return template;
  }], [['paragraph'].concat(_dom.defaultSubtypes.paragraph), function () {
    var type = data.type,
        attrs = (0, _objectWithoutProperties3.default)(data, ['type']);

    var template = {
      field: [m(type, utils.parsedHtml(label), attrs)]
    };
    return template;
  }], [_dom.defaultSubtypes.button, function () {
    var template = {
      field: m('button', label, data)
    };
    return template;
  }], [['select', 'checkbox-group', 'radio-group', 'checkbox'], function () {
    var field = utils.selectTemplate(data);
    var template = {
      field: [fieldLabel, field]
    };
    return template;
  }], [['textarea', 'tinymce', 'quill'], function () {
    var field = utils.longTextTemplate(data);
    var template = {
      field: [fieldLabel, field.field],
      onRender: field.onRender
    };
    return template;
  }]]);

  template = utils.templateMap(templates, data.type);

  if (template) {
    template = template();
  } else {
    template = utils.defaultField(fieldData)();
  }

  if (data.type !== 'hidden') {
    var wrapperAttrs = {};
    if (data.id) {
      wrapperAttrs.className = 'fb-' + data.type + ' form-group field-' + data.id;
    }
    field = utils.markup('div', template.field, wrapperAttrs);
  } else {
    field = utils.markup('input', null, data);
  }

  if (template.onRender) {
    field.addEventListener('fieldRendered', template.onRender);
  }

  return field;
};

/**
 * Callback for other option.
 * Toggles the hidden text area for "other" option.
 * @param  {String} otherId id of the "other" option input
 */
utils.otherOptionCB = function (otherId) {
  var otherInput = document.getElementById(otherId);
  var otherInputValue = document.getElementById(otherId + '-value');

  if (otherInput.checked) {
    otherInputValue.style.display = 'inline-block';
  } else {
    otherInputValue.style.display = 'none';
  }
};

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
utils.capitalize = function (str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};

utils.merge = function (obj1, obj2) {
  var mergedObj = (0, _assign2.default)({}, obj1, obj2);
  for (var prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? utils.unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
      } else if ((0, _typeof3.default)(obj2[prop]) === 'object') {
        mergedObj[prop] = utils.merge(obj1[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }
  }
  return mergedObj;
};

utils.addEventListeners = function (el, evts, fn) {
  return evts.split(' ').forEach(function (e) {
    return el.addEventListener(e, fn, false);
  });
};

/**
 * Find the closest parent by class
 * @param  {Object} el  DOM element
 * @param  {String} cls class
 * @return {Object}     DOM Element
 */
utils.closest = function (el, cls) {
  var className = cls.replace('.', '');
  while ((el = el.parentElement) && !el.classList.contains(className)) {}
  return el;
};

utils.noop = function () {
  return null;
};

utils.debounce = function (func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var timeout = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
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
 * Add a mobile class
 * @todo find css only solution
 * @return {String} Mobile class added to formBuilder
 */
utils.mobileClass = function () {
  var mobileClass = '';
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
      mobileClass = ' fb-mobile';
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return mobileClass;
};

/**
 * Convert converts messy `cl#ssNames` into valid `class-names`
 *
 * @param  {String} str
 * @return {String} hyphenated string
 */
utils.makeClassName = function (str) {
  return utils.hyphenCase(str.replace(/[^\w\s\-]/gi, ''));
};

/**
 * Make strings safe to be used as classes
 *
 * @param  {String} str string to be converted
 * @return {String}     converter string
 */
utils.safename = function (str) {
  return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9\_-]/g, '').toLowerCase();
};

/**
 * Strips non-numbers from a number only input
 *
 * @param  {string} str string with possible number
 * @return {string}     string without numbers
 */
utils.forceNumber = function (str) {
  return str.replace(/[^0-9]/g, '');
};

exports.default = utils;

},{"./config":225,"./dom":227,"babel-runtime/core-js/get-iterator":100,"babel-runtime/core-js/map":102,"babel-runtime/core-js/object/assign":103,"babel-runtime/helpers/objectWithoutProperties":112,"babel-runtime/helpers/slicedToArray":113,"babel-runtime/helpers/toConsumableArray":114,"babel-runtime/helpers/typeof":115}]},{},[229])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9zcmMvbWkxOG4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9qcy9jb25maWcuanMiLCJzcmMvanMvZGF0YS5qcyIsInNyYy9qcy9kb20uanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL3BvbHlmaWxscy5qcyIsInNyYy9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LFVBQU4sQ0FBaUIsSUFBSSxPQUFKLENBQVksYUFBWixFQUEyQixFQUEzQixDQUFqQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUEsTUFBTSxRQUFOLEdBQWlCLGVBQU87QUFDdEIsU0FBTyxJQUFJLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEdBQW5CLEVBQXdCLE9BQXhCLENBQWdDLGtCQUFoQyxFQUFvRCxFQUFwRCxFQUF3RCxXQUF4RCxFQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUEsTUFBTSxXQUFOLEdBQW9CLGVBQU87QUFDekIsU0FBTyxJQUFJLE9BQUosQ0FBWSxTQUFaLEVBQXVCLEVBQXZCLENBQVA7QUFDRCxDQUZEOztrQkFJZSxLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcChcIm5leHRcIik7XG4gICAgfSk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59OyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpOyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7IiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59IiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID1cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUoKG91dGVyRm4gfHwgR2VuZXJhdG9yKS5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9IEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudGAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuIFNvbWUgbWF5IGNvbnNpZGVyIHRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIHRvb1xuICAvLyBjdXRlc3ksIGJ1dCB0aGV5IGFyZSBjdXJtdWRnZW9ucy5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBuZXcgQXdhaXRBcmd1bWVudChhcmcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEF3YWl0QXJndW1lbnQoYXJnKSB7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFyZykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8XG4gICAgICAgICAgICAgIChtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG4iLCIvKipcbiAqIE1haW4gbWkxOG4gY2xhc3MuXG4gKi9cbmNsYXNzIEkxOE4ge1xuICAvKipcbiAgICogUHJvY2VzcyBvcHRpb25zIGFuZCBzdGFydCB0aGUgbW9kdWxlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgZXh0ZW5zaW9uOiAnLmxhbmcnLFxuICAgICAgICAvLyBsb2NhbCBvciByZW1vdGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgbGFuZ3VhZ2UgZmlsZXNcbiAgICAgICAgbG9jYXRpb246ICdhc3NldHMvbGFuZy8nLFxuICAgICAgICAvLyBsaXN0IG9mIGF2YWlsYWJsZSBsb2NhbGVzLCBoYW5keSBmb3IgcG9wdWxhdGluZyBzZWxlY3Rvci5cbiAgICAgICAgbGFuZ3M6IFtcbiAgICAgICAgICAnZW4tVVMnXG4gICAgICAgIF0sXG4gICAgICAgIGxvY2FsZTogJ2VuLVVTJywgLy8gaW5pdCB3aXRoIHVzZXIncyBwcmVmZXJyZWQgbGFuZ3VhZ2VcbiAgICAgICAgcHJlbG9hZGVkOiB7fVxuICAgICAgfTtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogTG9hZCBsYW5ndWFnZSBhbmQgc2V0IGRlZmF1bHRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICAgcmVzb2x2ZXMgbGFuZ3VhZ2VcbiAgICAgKi9cbiAgICBfdGhpcy5pbml0ID0gb3B0aW9ucyA9PiB7XG4gICAgICBfdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBvcHRpb25zKTtcblxuICAgICAgX3RoaXMubGFuZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBfdGhpcy5jb25maWcucHJlbG9hZGVkKTtcbiAgICAgIF90aGlzLmxvY2FsZSA9IF90aGlzLmNvbmZpZy5sb2NhbGUgfHwgX3RoaXMuY29uZmlnLmxhbmdzWzBdO1xuXG4gICAgICByZXR1cm4gX3RoaXMuc2V0Q3VycmVudChfdGhpcy5sb2NhbGUpO1xuICAgIH07XG4gIH1cblxuXG4gIC8qKlxuICAgKiBnZXQgYSBzdHJpbmcgZnJvbSBhIGxvYWRlZCBsYW5ndWFnZSBmaWxlXG4gICAqIEBwYXJhbSAge1N0cmluZ30ga2V5ICAtIHRoZSBrZXkgZm9yIHRoZSBzdHJpbmcgd2UgYXJlIHRyeWluZyB0byByZXRyaWV2ZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgLSBjb3JyZWN0IGxhbmd1YWdlIHN0cmluZ1xuICAgKi9cbiAgZ2V0VmFsdWUoa2V5KSB7XG4gICAgcmV0dXJuICh0aGlzLmN1cnJlbnQgJiYgdGhpcy5jdXJyZW50W2tleV0pIHx8IGtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc2NhcGUgdmFyaWFibGUgc3ludGF4XG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgIGVzY2FwZWQgc3RyXG4gICAqL1xuICBtYWtlU2FmZShzdHIpIHtcbiAgICBjb25zdCBtYXBPYmogPSB7XG4gICAgICAneyc6ICdcXFxceycsXG4gICAgICAnfSc6ICdcXFxcfScsXG4gICAgICAnfCc6ICdcXFxcfCdcbiAgICB9O1xuXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xce3xcXH18XFx8L2csIG1hdGNoZWQgPT4gbWFwT2JqW21hdGNoZWRdKTtcblxuICAgIHJldHVybiBuZXcgUmVnRXhwKHN0ciwgJ2cnKTtcbiAgfVxuXG4gIC8qKlxuICAqIFRlbXBvcmFyaWx5IHB1dCBhIHN0cmluZyBpbnRvIHRoZSBjdXJyZW50bHkgbG9hZGVkIGxhbmd1YWdlXG4gICogQHBhcmFtICB7U3RyaW5nfSBrZXlcbiAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0cmluZ1xuICAqIEByZXR1cm4ge1N0cmluZ30gc3RyaW5nIGluIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgKi9cbiAgcHV0KGtleSwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFtrZXldID0gc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGFyZ3VtZW50cyBmb3IgdGhlIHJlcXVlc3RlZCBzdHJpbmdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgIHRoZSBrZXkgd2UgdXNlIHRvIGxvb2t1cCBvdXIgdHJhbnNsYXRpb25cbiAgICogQHBhcmFtICB7bXVsdGl9ICBhcmdzICBzdHJpbmcsIG51bWJlciBvciBvYmplY3QgY29udGFpbmluZyBvdXIgYXJndW1lbnRzXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICB1cGRhdGVkIHN0cmluZyB0cmFuc2xhdGlvblxuICAgKi9cbiAgZ2V0KGtleSwgYXJncykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIGxldCB0b2tlbnMgPSB2YWx1ZS5tYXRjaCgvXFx7W15cXH1dKz9cXH0vZyk7XG4gICAgbGV0IHRva2VuO1xuXG4gICAgaWYgKGFyZ3MgJiYgdG9rZW5zKSB7XG4gICAgICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBhcmdzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV0uc3Vic3RyaW5nKDEsIHRva2Vuc1tpXS5sZW5ndGggLSAxKTtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoX3RoaXMubWFrZVNhZmUodG9rZW5zW2ldKSwgYXJnc1t0b2tlbl0gfHwgJycpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xce1teXFx9XSs/XFx9L2csIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHJhdyB0ZXh0IGZyb20gdGhlIGxhbmd1YWdlIGZpbGVzIGludG8gZmFuY3kgSlNPTlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHJhd1RleHRcbiAgICogQHJldHVybiB7T2JqZWN0fSBjb252ZXJ0ZWQgbGFuZ3VhZ2UgZmlsZVxuICAgKi9cbiAgZnJvbUZpbGUocmF3VGV4dCkge1xuICAgIGNvbnN0IGxpbmVzID0gcmF3VGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgbGV0IGxhbmcgPSB7fTtcblxuICAgIGZvciAobGV0IG1hdGNoZXMsIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1hdGNoZXMgPSBsaW5lc1tpXS5tYXRjaCgvXiguKz8pICo/PSAqPyhbXlxcbl0rKS8pO1xuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbWF0Y2hlc1syXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC8sICcnKTtcbiAgICAgICAgbGFuZ1ttYXRjaGVzWzFdXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsYW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkb3VibGUgY2FycmlhZ2UgcmV0dXJuc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHJlc3BvbnNlXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgcHJvY2Vzc2VkIGxhbmd1YWdlXG4gICAqL1xuICBwcm9jZXNzRmlsZShyZXNwb25zZSkge1xuICAgIGxldCByYXdUZXh0ID0gcmVzcG9uc2UucmVwbGFjZSgvXFxuXFxuL2csICdcXG4nKTtcbiAgICByZXR1cm4gdGhpcy5mcm9tRmlsZShyYXdUZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGEgcmVtb3RlbHkgc3RvcmVkIGxhbmd1YWdlIGZpbGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBsb2NhbGVcbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgcmVzb2x2ZXMgcmVzcG9uc2VcbiAgICovXG4gIGxvYWRMYW5nKGxvY2FsZSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyB3aW5kb3cuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmIChfdGhpcy5sYW5nc1tsb2NhbGVdKSB7XG4gICAgICAgIHJlc29sdmUoX3RoaXMubGFuZ3NbbG9jYWxlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGxldCBsYW5nRmlsZSA9IF90aGlzLmNvbmZpZy5sb2NhdGlvbiArIGxvY2FsZSArIF90aGlzLmNvbmZpZy5leHRlbnNpb247XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBsYW5nRmlsZSwgdHJ1ZSk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPD0gMzA0KSB7XG4gICAgICAgICAgICBsZXQgcHJvY2Vzc2VkRmlsZSA9IF90aGlzLnByb2Nlc3NGaWxlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgX3RoaXMubGFuZ3NbbG9jYWxlXSA9IHByb2Nlc3NlZEZpbGU7XG4gICAgICAgICAgICByZXNvbHZlKHByb2Nlc3NlZEZpbGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gY3VycmVudGx5IGF2YWlsYWJsZSBsYW5ndWFnZXNcbiAgICogQHJldHVybiB7T2JqZWN0fSBhbGwgY29uZmlndXJlZCBsYW5ndWFnZXNcbiAgICovXG4gIGdldCBnZXRMYW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcubGFuZ3M7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdCB0byBzZXQgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgdG8gdGhlIGxvY2FsIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgIGxvY2FsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBsYW5ndWFnZVxuICAgKi9cbiAgYXN5bmMgc2V0Q3VycmVudChsb2NhbGUgPSAnZW4tVVMnKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkTGFuZyhsb2NhbGUpO1xuXG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5sYW5nc1tsb2NhbGVdO1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJMThOKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzOyIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXIsIElURVJBVE9SKXtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59OyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG1ldGEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBlYWNoICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTsiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyl9KTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID1cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgY29udHJvbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgY29udHJvbE9yZGVyOiBbXG4gICAgICAgICdhdXRvY29tcGxldGUnLFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnaGlkZGVuJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdudW1iZXInLFxuICAgICAgICAncmFkaW8tZ3JvdXAnLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAndGV4dGFyZWEnXG4gICAgICBdLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIC8vIEFycmF5IG9mIGZpZWxkcyB0byBkaXNhYmxlXG4gICAgICBkaXNhYmxlRmllbGRzOiBbXSxcbiAgICAgIGVkaXRPbkFkZDogZmFsc2UsXG4gICAgICAvLyBVbmVkaXRhYmxlIGZpZWxkcyBvciBvdGhlciBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGFwcGVhclxuICAgICAgLy8gYmVmb3JlIGFuZCBhZnRlciByZWd1bGFyIGZpZWxkczpcbiAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICBwcmVwZW5kOiBmYWxzZSxcbiAgICAgIC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCBmaWVsZHMgdmFsdWVzXG4gICAgICAvLyBleDpcbiAgICAgIC8vIGRlZmF1bHRGaWVsZHM6IFt7XG4gICAgICAvLyAgIGxhYmVsOiAnRmlyc3QgTmFtZScsXG4gICAgICAvLyAgIG5hbWU6ICdmaXJzdC1uYW1lJyxcbiAgICAgIC8vICAgcmVxdWlyZWQ6ICd0cnVlJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdZb3VyIGZpcnN0IG5hbWUnLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH0sIHtcbiAgICAgIC8vICAgbGFiZWw6ICdQaG9uZScsXG4gICAgICAvLyAgIG5hbWU6ICdwaG9uZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnSG93IGNhbiB3ZSByZWFjaCB5b3U/JyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9XSxcbiAgICAgIGRlZmF1bHRGaWVsZHM6IFtdLFxuICAgICAgaW5wdXRTZXRzOiBbXSxcbiAgICAgIGZpZWxkUmVtb3ZlV2FybjogZmFsc2UsXG4gICAgICByb2xlczoge1xuICAgICAgICAxOiAnQWRtaW5pc3RyYXRvcidcbiAgICAgIH0sXG4gICAgICBub3RpZnk6IHtcbiAgICAgICAgZXJyb3I6IG1lc3NhZ2UgPT4gY29uc29sZS5lcnJvcihtZXNzYWdlKSxcbiAgICAgICAgc3VjY2VzczogbWVzc2FnZSA9PiBjb25zb2xlLmxvZyhtZXNzYWdlKSxcbiAgICAgICAgd2FybmluZzogbWVzc2FnZSA9PiBjb25zb2xlLndhcm4obWVzc2FnZSlcbiAgICAgIH0sXG4gICAgICBvblNhdmU6IGZvcm1EYXRhID0+IG51bGwsXG4gICAgICBvbkNsZWFyQWxsOiAoKSA9PiBudWxsLFxuICAgICAgc29ydGFibGVDb250cm9sczogZmFsc2UsXG4gICAgICBzdGlja3lDb250cm9sczoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmaWVsZHM6IFtdLFxuICAgICAgdGVtcGxhdGVzOiB7fSxcbiAgICAgIGRpc2FibGVkQWN0aW9uQnV0dG9uczogW10sXG4gICAgICBzaG93QWN0aW9uQnV0dG9uczogdHJ1ZSxcbiAgICAgIHR5cGVVc2VyQXR0cnM6IHt9LFxuICAgICAgdHlwZVVzZXJFdmVudHM6IHt9LFxuICAgICAgcHJlZml4OiAnZm9ybS1idWlsZGVyLSdcbiAgICB9O1xuXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0STE4biA9IHtcbiAgICAgIGxvY2F0aW9uOiAnaHR0cHM6Ly9rZXZpbmNoYXBwZWxsLmdpdGh1Yi5pby9mb3JtQnVpbGRlci9hc3NldHMvbGFuZy8nLFxuICAgICAgbGFuZ3M6IFtcbiAgICAgICAgJ2VuLVVTJ1xuICAgICAgXSxcbiAgICAgIHByZWxvYWRlZDoge1xuICAgICAgICAnZW4tVVMnOiB7XG4gICAgICAgICAgYWRkT3B0aW9uOiAnQWRkIE9wdGlvbiArJyxcbiAgICAgICAgICBhbGxGaWVsZHNSZW1vdmVkOiAnQWxsIGZpZWxkcyB3ZXJlIHJlbW92ZWQuJyxcbiAgICAgICAgICBhbGxvd011bHRpcGxlRmlsZXM6ICdBbGxvdyB1c2VycyB0byB1cGxvYWQgbXVsdGlwbGUgZmlsZXMnLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogJ0F1dG9jb21wbGV0ZScsXG4gICAgICAgICAgYnV0dG9uOiAnQnV0dG9uJyxcbiAgICAgICAgICBjYW5ub3RCZUVtcHR5OiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHknLFxuICAgICAgICAgIGNoZWNrYm94R3JvdXA6ICdDaGVja2JveCBHcm91cCcsXG4gICAgICAgICAgY2hlY2tib3g6ICdDaGVja2JveCcsXG4gICAgICAgICAgY2hlY2tib3hlczogJ0NoZWNrYm94ZXMnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NsYXNzJyxcbiAgICAgICAgICBjbGVhckFsbE1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xlYXIgYWxsIGZpZWxkcz8nLFxuICAgICAgICAgIGNsZWFyQWxsOiAnQ2xlYXInLFxuICAgICAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdDb250ZW50JyxcbiAgICAgICAgICBjb3B5OiAnQ29weSBUbyBDbGlwYm9hcmQnLFxuICAgICAgICAgIGNvcHlCdXR0b246ICcmIzQzOycsXG4gICAgICAgICAgY29weUJ1dHRvblRvb2x0aXA6ICdDb3B5JyxcbiAgICAgICAgICBkYXRlRmllbGQ6ICdEYXRlIEZpZWxkJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbHAgVGV4dCcsXG4gICAgICAgICAgZGVzY3JpcHRpb25GaWVsZDogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICBkZXZNb2RlOiAnRGV2ZWxvcGVyIE1vZGUnLFxuICAgICAgICAgIGVkaXROYW1lczogJ0VkaXQgTmFtZXMnLFxuICAgICAgICAgIGVkaXRvclRpdGxlOiAnRm9ybSBFbGVtZW50cycsXG4gICAgICAgICAgZWRpdFhNTDogJ0VkaXQgWE1MJyxcbiAgICAgICAgICBlbmFibGVPdGhlcjogJ0VuYWJsZSAmcXVvdDtPdGhlciZxdW90OycsXG4gICAgICAgICAgZW5hYmxlT3RoZXJNc2c6ICdMZXQgdXNlcnMgdG8gZW50ZXIgYW4gdW5saXN0ZWQgb3B0aW9uJyxcbiAgICAgICAgICBmaWVsZERlbGV0ZVdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgIGZpZWxkVmFyczogJ0ZpZWxkIFZhcmlhYmxlcycsXG4gICAgICAgICAgZmllbGROb25FZGl0YWJsZTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVkaXRlZC4nLFxuICAgICAgICAgIGZpZWxkUmVtb3ZlV2FybmluZzogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBmaWVsZD8nLFxuICAgICAgICAgIGZpbGVVcGxvYWQ6ICdGaWxlIFVwbG9hZCcsXG4gICAgICAgICAgZm9ybVVwZGF0ZWQ6ICdGb3JtIFVwZGF0ZWQnLFxuICAgICAgICAgIGdldFN0YXJ0ZWQ6ICdEcmFnIGEgZmllbGQgZnJvbSB0aGUgcmlnaHQgdG8gdGhpcyBhcmVhJyxcbiAgICAgICAgICBoZWFkZXI6ICdIZWFkZXInLFxuICAgICAgICAgIGhpZGU6ICdFZGl0JyxcbiAgICAgICAgICBoaWRkZW46ICdIaWRkZW4gSW5wdXQnLFxuICAgICAgICAgIGlubGluZTogJ0lubGluZScsXG4gICAgICAgICAgaW5saW5lRGVzYzogJ0Rpc3BsYXkge3R5cGV9IGlubGluZScsXG4gICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgbGFiZWxFbXB0eTogJ0ZpZWxkIExhYmVsIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgbGltaXRSb2xlOiAnTGltaXQgYWNjZXNzIHRvIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgcm9sZXM6JyxcbiAgICAgICAgICBtYW5kYXRvcnk6ICdNYW5kYXRvcnknLFxuICAgICAgICAgIG1heGxlbmd0aDogJ01heCBMZW5ndGgnLFxuICAgICAgICAgIG1pbk9wdGlvbk1lc3NhZ2U6ICdUaGlzIGZpZWxkIHJlcXVpcmVzIGEgbWluaW11bSBvZiAyIG9wdGlvbnMnLFxuICAgICAgICAgIG11bHRpcGxlRmlsZXM6ICdNdWx0aXBsZSBGaWxlcycsXG4gICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgIG5vOiAnTm8nLFxuICAgICAgICAgIG5vRmllbGRzVG9DbGVhcjogJ1RoZXJlIGFyZSBubyBmaWVsZHMgdG8gY2xlYXInLFxuICAgICAgICAgIG51bWJlcjogJ051bWJlcicsXG4gICAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgICBvbjogJ09uJyxcbiAgICAgICAgICBvcHRpb246ICdPcHRpb24nLFxuICAgICAgICAgIG9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgICBvcHRpb25hbDogJ29wdGlvbmFsJyxcbiAgICAgICAgICBvcHRpb25MYWJlbFBsYWNlaG9sZGVyOiAnTGFiZWwnLFxuICAgICAgICAgIG9wdGlvblZhbHVlUGxhY2Vob2xkZXI6ICdWYWx1ZScsXG4gICAgICAgICAgb3B0aW9uRW1wdHk6ICdPcHRpb24gdmFsdWUgcmVxdWlyZWQnLFxuICAgICAgICAgIG90aGVyOiAnT3RoZXInLFxuICAgICAgICAgIHBhcmFncmFwaDogJ1BhcmFncmFwaCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdQbGFjZWhvbGRlcicsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLnZhbHVlJzogJ1ZhbHVlJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIubGFiZWwnOiAnTGFiZWwnLFxuICAgICAgICAgICdwbGFjZWhvbGRlci50ZXh0JzogJycsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLnRleHRhcmVhJzogJycsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLmVtYWlsJzogJ0VudGVyIHlvdSBlbWFpbCcsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLnBsYWNlaG9sZGVyJzogJycsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLmNsYXNzTmFtZSc6ICdzcGFjZSBzZXBhcmF0ZWQgY2xhc3NlcycsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLnBhc3N3b3JkJzogJ0VudGVyIHlvdXIgcGFzc3dvcmQnLFxuICAgICAgICAgIHByZXZpZXc6ICdQcmV2aWV3JyxcbiAgICAgICAgICByYWRpb0dyb3VwOiAnUmFkaW8gR3JvdXAnLFxuICAgICAgICAgIHJhZGlvOiAnUmFkaW8nLFxuICAgICAgICAgIHJlbW92ZU1lc3NhZ2U6ICdSZW1vdmUgRWxlbWVudCcsXG4gICAgICAgICAgcmVtb3ZlT3B0aW9uOiAnUmVtb3ZlIE9wdGlvbicsXG4gICAgICAgICAgcmVtb3ZlOiAnJiMyMTU7JyxcbiAgICAgICAgICByZXF1aXJlZDogJ1JlcXVpcmVkJyxcbiAgICAgICAgICByaWNoVGV4dDogJ1JpY2ggVGV4dCBFZGl0b3InLFxuICAgICAgICAgIHJvbGVzOiAnQWNjZXNzJyxcbiAgICAgICAgICByb3dzOiAnUm93cycsXG4gICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgIHNlbGVjdE9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgICBzZWxlY3Q6ICdTZWxlY3QnLFxuICAgICAgICAgIHNlbGVjdENvbG9yOiAnU2VsZWN0IENvbG9yJyxcbiAgICAgICAgICBzZWxlY3Rpb25zTWVzc2FnZTogJ0FsbG93IE11bHRpcGxlIFNlbGVjdGlvbnMnLFxuICAgICAgICAgIHNpemU6ICdTaXplJyxcbiAgICAgICAgICAnc2l6ZS54cyc6ICdFeHRyYSBTbWFsbCcsXG4gICAgICAgICAgJ3NpemUuc20nOiAnU21hbGwnLFxuICAgICAgICAgICdzaXplLm0nOiAnRGVmYXVsdCcsXG4gICAgICAgICAgJ3NpemUubGcnOiAnTGFyZ2UnLFxuICAgICAgICAgIHN0eWxlOiAnU3R5bGUnLFxuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgYnRuOiB7XG4gICAgICAgICAgICAgICdkZWZhdWx0JzogJ0RlZmF1bHQnLFxuICAgICAgICAgICAgICBkYW5nZXI6ICdEYW5nZXInLFxuICAgICAgICAgICAgICBpbmZvOiAnSW5mbycsXG4gICAgICAgICAgICAgIHByaW1hcnk6ICdQcmltYXJ5JyxcbiAgICAgICAgICAgICAgc3VjY2VzczogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgICB3YXJuaW5nOiAnV2FybmluZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1YnR5cGU6ICdUeXBlJyxcbiAgICAgICAgICB0ZXh0OiAnVGV4dCBGaWVsZCcsXG4gICAgICAgICAgdGV4dEFyZWE6ICdUZXh0IEFyZWEnLFxuICAgICAgICAgIHRvZ2dsZTogJ1RvZ2dsZScsXG4gICAgICAgICAgd2FybmluZzogJ1dhcm5pbmchJyxcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICAgICAgICB2aWV3SlNPTjogJ3sgIH0nLFxuICAgICAgICAgIHZpZXdYTUw6ICcmbHQ7LyZndDsnLFxuICAgICAgICAgIHllczogJ1llcydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7fTtcbiIsImV4cG9ydCBjb25zdCBpbnN0YW5jZURhdGEgPSB7fTtcblxuZXhwb3J0IGNsYXNzIERhdGEge1xuICBjb25zdHJ1Y3Rvcihmb3JtSUQpIHtcbiAgICB0aGlzLmZvcm1EYXRhID0ge307XG4gICAgdGhpcy5mb3JtSUQgPSBmb3JtSUQ7XG4gICAgdGhpcy5sYXlvdXQgPSAnJztcbiAgICBpbnN0YW5jZURhdGFbZm9ybUlEXSA9IHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZWZpZWxkcyA9IHt9O1xuIiwiXG5leHBvcnQgY29uc3QgaW5zdGFuY2VEb20gPSB7fTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3VidHlwZXMgPSB7XG4gICAgICB0ZXh0OiBbJ3RleHQnLCAncGFzc3dvcmQnLCAnZW1haWwnLCAnY29sb3InLCAndGVsJ10sXG4gICAgICBoZWFkZXI6IFsnaDEnLCAnaDInLCAnaDMnXSxcbiAgICAgIGJ1dHRvbjogWydidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0J10sXG4gICAgICBwYXJhZ3JhcGg6IFsncCcsICdhZGRyZXNzJywgJ2Jsb2NrcXVvdGUnLCAnY2FudmFzJywgJ291dHB1dCddLFxuICAgICAgdGV4dGFyZWE6IFsndGV4dGFyZWEnLCAncXVpbGwnXVxuICAgIH07XG5cblxuZXhwb3J0IGNvbnN0IGVtcHR5ID0gZWxlbWVudCA9PiB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyID0gKGVsZW1zLCB0ZXJtLCBzaG93ID0gdHJ1ZSkgPT4ge1xuICBsZXQgZmlsdGVyZWRFbGVtcyA9IFtdO1xuICBsZXQgdG9nZ2xlID0gWydub25lJywgJ2Jsb2NrJ107XG5cbiAgaWYgKHNob3cpIHtcbiAgICB0b2dnbGUgPSB0b2dnbGUucmV2ZXJzZSgpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IGVsZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IHR4dCA9IGVsZW1zW2ldLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHR4dC5pbmRleE9mKHRlcm0udG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICBlbGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gdG9nZ2xlWzBdO1xuICAgICAgZmlsdGVyZWRFbGVtcy5wdXNoKGVsZW1zW2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbXNbaV0uc3R5bGUuZGlzcGxheSA9IHRvZ2dsZVsxXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRFbGVtcztcbn07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25GaWVsZHMgPSBbXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgICAnY2hlY2tib3gnLFxuICAgICAgJ3JhZGlvLWdyb3VwJyxcbiAgICAgICdhdXRvY29tcGxldGUnXG4gICAgXTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbkZpZWxkc1JlZ0V4ID0gbmV3IFJlZ0V4cChgKCR7b3B0aW9uRmllbGRzLmpvaW4oJ3wnKX0pYCk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb20ge1xuICBjb25zdHJ1Y3Rvcihmb3JtSUQpIHtcbiAgICB0aGlzLm9wdGlvbkZpZWxkcyA9IG9wdGlvbkZpZWxkcztcbiAgICB0aGlzLm9wdGlvbkZpZWxkc1JlZ0V4ID0gb3B0aW9uRmllbGRzUmVnRXg7XG5cbiAgICB0aGlzLnN1YnR5cGVzID0gZGVmYXVsdFN1YnR5cGVzO1xuXG4gICAgLyoqXG4gICAgICogVXRpbCB0byByZW1vdmUgY29udGVudHMgb2YgRE9NIE9iamVjdFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gZWxlbWVudCB3aXRoIGl0cyBjaGlsZHJlbiByZW1vdmVkXG4gICAgICovXG4gICAgdGhpcy5lbXB0eSA9IGVtcHR5O1xuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBzaG93IGFuIEFycmF5IG9yIEhUTUxDb2xsZWN0aW9uIG9mIGVsZW1lbnRzXG4gICAgICogQHBhcmFtICB7QXJyYXl9ICAgZWxlbXNcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICB0ZXJtICBtYXRjaCB0ZXh0Q29udGVudCB0byB0aGlzIHRlcm1cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBzaG93ICBvciBoaWRlIGVsZW1lbnRzXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgZmlsdGVyZWQgZWxlbWVudHNcbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcblxuICAgIGluc3RhbmNlRG9tW2Zvcm1JRF0gPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZURvbVtmb3JtSURdO1xuICB9XG59XG4iLCIvKipcbiAqIEZvcm0gQnVpbGRlciBldmVudHNcbiAqIEByZXR1cm4ge09iamVjdH0gdmFyaW91cyBldmVudHMgdG8gYmUgdHJpZ2dlclxuICovXG4vLyBmdW5jdGlvbiBmYkV2ZW50cygpe1xuICBjb25zdCBldmVudHMgPSB7fTtcblxuICBldmVudHMubG9hZGVkID0gbmV3IEV2ZW50KCdsb2FkZWQnKTtcbiAgZXZlbnRzLnZpZXdEYXRhID0gbmV3IEV2ZW50KCd2aWV3RGF0YScpO1xuICBldmVudHMudXNlckRlY2xpbmVkID0gbmV3IEV2ZW50KCd1c2VyRGVjbGluZWQnKTtcbiAgZXZlbnRzLm1vZGFsQ2xvc2VkID0gbmV3IEV2ZW50KCdtb2RhbENsb3NlZCcpO1xuICBldmVudHMubW9kYWxPcGVuZWQgPSBuZXcgRXZlbnQoJ21vZGFsT3BlbmVkJyk7XG4gIGV2ZW50cy5mb3JtU2F2ZWQgPSBuZXcgRXZlbnQoJ2Zvcm1TYXZlZCcpO1xuICBldmVudHMuZmllbGRBZGRlZCA9IG5ldyBFdmVudCgnZmllbGRBZGRlZCcpO1xuICBldmVudHMuZmllbGRSZW1vdmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbW92ZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVuZGVyZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVuZGVyZWQnKTtcblxuLy8gICByZXR1cm4gZXZlbnRzO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG4iLCJpbXBvcnQgRG9tIGZyb20gJy4vZG9tJztcbmltcG9ydCB7XG4gIERhdGEsXG4gIGF2YWlsYWJsZWZpZWxkcyBhcyBhRmllbGRzXG59IGZyb20gJy4vZGF0YSc7XG4vLyBpbXBvcnQgbWkxOG4gZnJvbSAnbWkxOG4nO1xuaW1wb3J0IG1pMThuIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9zcmMvbWkxOG4uanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgSGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHtkZWZhdWx0T3B0aW9ucywgZGVmYXVsdEkxOG4sIGNvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuXG5yZXF1aXJlKCcuL3BvbHlmaWxscy5qcycpLmRlZmF1bHQ7XG5cbmxldCBpbnN0YW5jZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuY29uc3QgRm9ybUJ1aWxkZXIgPSBmdW5jdGlvbihvcHRzLCBlbGVtZW50KSB7XG4gIGNvbnN0IGZvcm1CdWlsZGVyID0gdGhpcztcbiAgY29uc3QgaTE4biA9IG1pMThuLmN1cnJlbnQ7XG4gIGNvbnN0IGZvcm1JRCA9ICdmcm1iLScgKyBpbnN0YW5jZVRpbWUrKztcbiAgY29uc3QgZGF0YSA9IG5ldyBEYXRhKGZvcm1JRCk7XG4gIGNvbnN0IGQgPSBuZXcgRG9tKGZvcm1JRCk7XG4gIGNvbnN0IGhlbHBlcnMgPSBuZXcgSGVscGVycyhmb3JtSUQpO1xuICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuXG4gIGNvbnN0IG9yaWdpbmFsT3B0cyA9IG9wdHM7XG5cbiAgb3B0cyA9IGhlbHBlcnMucHJvY2Vzc09wdGlvbnMob3B0cyk7XG5cbiAgY29uc3Qgc3VidHlwZXMgPSBjb25maWcuc3VidHlwZXMgPSBoZWxwZXJzLnByb2Nlc3NTdWJ0eXBlcyhvcHRzLnN1YnR5cGVzKTtcbiAgaGVscGVycy5lZGl0b3JVSShmb3JtSUQpO1xuXG4gIGxldCAkc3RhZ2UgPSAkKGQuc3RhZ2UpO1xuXG4gIGRhdGEubGF5b3V0ID0gaGVscGVycy5lZGl0b3JMYXlvdXQob3B0cy5jb250cm9sUG9zaXRpb24pO1xuICBkYXRhLmZvcm1JRCA9IGZvcm1JRDtcbiAgZGF0YS5sYXN0SUQgPSBgJHtkYXRhLmZvcm1JRH0tZmxkLTFgO1xuXG4gIGxldCBmcm1iRmllbGRzID0gaGVscGVycy5vcmRlckZpZWxkcyhvcHRzLmZpZWxkcyk7XG5cbiAgaWYgKG9wdHMuZGlzYWJsZUZpZWxkcykge1xuICAgIC8vIHJlbW92ZSBkaXNhYmxlZEZpZWxkc1xuICAgIGZybWJGaWVsZHMgPSBmcm1iRmllbGRzLmZpbHRlcihmdW5jdGlvbihmaWVsZCkge1xuICAgICAgcmV0dXJuICF1dGlscy5pbkFycmF5KGZpZWxkLmF0dHJzLnR5cGUsIG9wdHMuZGlzYWJsZUZpZWxkcyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAob3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgZC5jb250cm9scy5jbGFzc0xpc3QuYWRkKCdzb3J0LWVuYWJsZWQnKTtcbiAgfVxuXG4gIGxldCAkY2JVTCA9ICQoZC5jb250cm9scyk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIGZtcmJGaWVsZHNcbiAgdXRpbHMuZm9yRWFjaChmcm1iRmllbGRzLCAoaSkgPT4ge1xuICAgIGxldCB7YXR0cnMsIC4uLmZpZWxkfSA9IGZybWJGaWVsZHNbaV07XG4gICAgbGV0IGljb24gPSBhdHRycy5pY29uIHx8IGBpY29uLSR7YXR0cnMubmFtZSB8fCBhdHRycy50eXBlfWA7XG4gICAgbGV0IG5ld0ZpZWxkQ29udHJvbCA9IG0oJ2xpJyxcbiAgICAgIG0oJ3NwYW4nLCBmaWVsZC5sYWJlbCksXG4gICAgICB7Y2xhc3NOYW1lOiBgJHtpY29ufSBpbnB1dC1jb250cm9sIGlucHV0LWNvbnRyb2wtJHtpfWB9XG4gICAgKTtcblxuICAgIGFGaWVsZHNbYXR0cnMudHlwZV0gPSBmcm1iRmllbGRzW2ldO1xuICAgIG5ld0ZpZWxkQ29udHJvbC5kYXRhc2V0LnR5cGUgPSBhdHRycy50eXBlO1xuICAgIGQuY29udHJvbHMuYXBwZW5kQ2hpbGQobmV3RmllbGRDb250cm9sKTtcbiAgfSk7XG5cbiAgaWYgKG9wdHMuaW5wdXRTZXRzLmxlbmd0aCkge1xuICAgICQoJzxsaS8+JywgeydjbGFzcyc6ICdmYi1zZXBhcmF0b3InfSkuaHRtbCgnPGhyPicpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICBvcHRzLmlucHV0U2V0cy5mb3JFYWNoKChzZXQsIGkpID0+IHtcbiAgICAgIHNldC5uYW1lID0gc2V0Lm5hbWUgfHwgaGVscGVycy5tYWtlQ2xhc3NOYW1lKHNldC5sYWJlbCk7XG4gICAgICBsZXQgaW5wdXRTZXQgPSBtKCdsaScsIHNldC5sYWJlbCwge1xuICAgICAgICBjbGFzc05hbWU6IGBpbnB1dC1zZXQtY29udHJvbCBpbnB1dC1zZXQtJHtpfWAsXG4gICAgICAgIHR5cGU6IHNldC5uYW1lXG4gICAgICB9KTtcbiAgICAgICQoaW5wdXRTZXQpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNvcnRhYmxlIGZpZWxkc1xuICAkc3RhZ2Uuc29ydGFibGUoe1xuICAgIGN1cnNvcjogJ21vdmUnLFxuICAgIG9wYWNpdHk6IDAuOSxcbiAgICByZXZlcnQ6IDE1MCxcbiAgICBiZWZvcmVTdG9wOiAoZXZ0LCB1aSkgPT4gaGVscGVycy5iZWZvcmVTdG9wLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgc3RhcnQ6IChldnQsIHVpKSA9PiBoZWxwZXJzLnN0YXJ0TW92aW5nLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgc3RvcDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RvcE1vdmluZy5jYWxsKGhlbHBlcnMsIGV2dCwgdWkpLFxuICAgIGNhbmNlbDogJ2lucHV0LCBzZWxlY3QsIC5kaXNhYmxlZC1maWVsZCwgLmZvcm0tZ3JvdXAsIC5idG4nLFxuICAgIHBsYWNlaG9sZGVyOiAnZnJtYi1wbGFjZWhvbGRlcidcbiAgfSk7XG5cbiAgLy8gQ29udHJvbEJveCB3aXRoIGRpZmZlcmVudCBmaWVsZHNcbiAgJGNiVUwuc29ydGFibGUoe1xuICAgIGhlbHBlcjogJ2Nsb25lJyxcbiAgICBvcGFjaXR5OiAwLjksXG4gICAgY29ubmVjdFdpdGg6ICRzdGFnZSxcbiAgICBjYW5jZWw6ICcuZmItc2VwYXJhdG9yJyxcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBzY3JvbGw6IGZhbHNlLFxuICAgIHBsYWNlaG9sZGVyOiAndWktc3RhdGUtaGlnaGxpZ2h0JyxcbiAgICBzdGFydDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RhcnRNb3ZpbmcuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcbiAgICBzdG9wOiAoZXZ0LCB1aSkgPT4gaGVscGVycy5zdG9wTW92aW5nLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgcmV2ZXJ0OiAxNTAsXG4gICAgYmVmb3JlU3RvcDogKGV2dCwgdWkpID0+IGhlbHBlcnMuYmVmb3JlU3RvcC5jYWxsKGhlbHBlcnMsIGV2dCwgdWkpLFxuICAgIGRpc3RhbmNlOiAzLFxuICAgIHVwZGF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICBpZiAoaGVscGVycy5kb0NhbmNlbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodWkuaXRlbS5wYXJlbnQoKVswXSA9PT0gJHN0YWdlWzBdKSB7XG4gICAgICAgIHByb2Nlc3NDb250cm9sKHVpLml0ZW0pO1xuICAgICAgICBoZWxwZXJzLmRvQ2FuY2VsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlbHBlcnMuc2V0RmllbGRPcmRlcigkY2JVTCk7XG4gICAgICAgIGhlbHBlcnMuZG9DYW5jZWwgPSAhb3B0cy5zb3J0YWJsZUNvbnRyb2xzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHByb2Nlc3NDb250cm9sID0gY29udHJvbCA9PiB7XG4gICAgaWYgKGNvbnRyb2xbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1zZXQtY29udHJvbCcpKSB7XG4gICAgICBsZXQgaW5wdXRTZXRzID0gW107XG4gICAgICBsZXQgaW5wdXRTZXQgPSBvcHRzLmlucHV0U2V0cy5maWx0ZXIoc2V0ID0+XG4gICAgICAgIHNldC5uYW1lID09PSBjb250cm9sWzBdLnR5cGUpWzBdO1xuICAgICAgaWYgKGlucHV0U2V0LnNob3dIZWFkZXIpIHtcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICAgICAgc3VidHlwZTogJ2gyJyxcbiAgICAgICAgICAgIGlkOiBpbnB1dFNldC5uYW1lLFxuICAgICAgICAgICAgbGFiZWw6IGlucHV0U2V0LmxhYmVsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbnB1dFNldHMucHVzaChoZWFkZXIpO1xuICAgICAgfVxuICAgICAgaW5wdXRTZXRzLnB1c2goLi4uaW5wdXRTZXQuZmllbGRzKTtcbiAgICAgIGlucHV0U2V0cy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCwgdHJ1ZSk7XG4gICAgICAgIGlmIChoZWxwZXJzLnN0b3BJbmRleCB8fCBoZWxwZXJzLnN0b3BJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGhlbHBlcnMuc3RvcEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVwRmllbGRWYXJzKGNvbnRyb2wsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBkLmVkaXRvcldyYXAgPSBtKCdkaXYnLCBudWxsLCB7XG4gICAgaWQ6IGAke2RhdGEuZm9ybUlEfS1mb3JtLXdyYXBgLFxuICAgIGNsYXNzTmFtZTogJ2Zvcm0td3JhcCBmb3JtLWJ1aWxkZXInICsgdXRpbHMubW9iaWxlQ2xhc3MoKVxuICB9KTtcblxuICBsZXQgJGVkaXRvcldyYXAgPSAkKGQuZWRpdG9yV3JhcCk7XG5cbiAgbGV0IGNiV3JhcCA9IG0oJ2RpdicsIGQuY29udHJvbHMsIHtcbiAgICBpZDogYCR7ZGF0YS5mb3JtSUR9LWNiLXdyYXBgLFxuICAgIGNsYXNzTmFtZTogJ2NiLXdyYXAgJyArIGRhdGEubGF5b3V0LmNvbnRyb2xzXG4gIH0pO1xuXG4gIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IG9wdHMuYWN0aW9uQnV0dG9ucy5tYXAoYnRuRGF0YSA9PiB7XG4gICAgICBpZiAoYnRuRGF0YS5pZCAmJiBvcHRzLmRpc2FibGVkQWN0aW9uQnV0dG9ucy5pbmRleE9mKGJ0bkRhdGEuaWQpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gaGVscGVycy5wcm9jZXNzQWN0aW9uQnV0dG9ucyhidG5EYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBmb3JtQWN0aW9ucyA9IGQuZm9ybUFjdGlvbnMgPSBtKCdkaXYnLCBidXR0b25zLCB7XG4gICAgICBjbGFzc05hbWU6ICdmb3JtLWFjdGlvbnMgYnRuLWdyb3VwJ1xuICAgIH0pO1xuXG4gICAgY2JXcmFwLmFwcGVuZENoaWxkKGZvcm1BY3Rpb25zKTtcbiAgfVxuXG4gIGxldCBzdGFnZVdyYXAgPSBtKCdkaXYnLCBbZC5zdGFnZSwgY2JXcmFwXSwge1xuICAgIGlkOiBgJHtkYXRhLmZvcm1JRH0tc3RhZ2Utd3JhcGAsXG4gICAgY2xhc3NOYW1lOiAnc3RhZ2Utd3JhcCAnICsgZGF0YS5sYXlvdXQuc3RhZ2VcbiAgfSk7XG5cbiAgJGVkaXRvcldyYXAuYXBwZW5kKHN0YWdlV3JhcCwgY2JXcmFwKTtcblxuICBpZiAoZWxlbWVudC50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgJChlbGVtZW50KS5hcHBlbmQoJGVkaXRvcldyYXApO1xuICB9IGVsc2Uge1xuICAgICQoZWxlbWVudCkucmVwbGFjZVdpdGgoJGVkaXRvcldyYXApO1xuICB9XG5cbiAgbGV0IHNhdmVBbmRVcGRhdGUgPSB1dGlscy5kZWJvdW5jZShldnQgPT4ge1xuICAgIGlmIChldnQpIHtcbiAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldnQudGFyZ2V0Lm5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGV0ICRmaWVsZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICAgIGhlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xuICAgICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTYXZlIGZpZWxkIG9uIGNoYW5nZVxuICAkc3RhZ2Uub24oJ2NoYW5nZSBibHVyIGtleXVwJywgJy5mb3JtLWVsZW1lbnRzIGlucHV0LCAuZm9ybS1lbGVtZW50cyBzZWxlY3QsIC5mb3JtLWVsZW1lbnRzIHRleHRhcmVhJywgc2F2ZUFuZFVwZGF0ZSk7XG5cbiAgJCgnbGknLCBkLmNvbnRyb2xzKS5jbGljayhldnQgPT4ge1xuICAgIGxldCAkY29udHJvbCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLmlucHV0LWNvbnRyb2wnKTtcbiAgICBoZWxwZXJzLnN0b3BJbmRleCA9IHVuZGVmaW5lZDtcbiAgICBwcm9jZXNzQ29udHJvbCgkY29udHJvbCk7XG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gIH0pO1xuXG4gIC8vIEFkZCBhcHBlbmQgYW5kIHByZXBlbmQgb3B0aW9ucyBpZiBuZWNlc3NhcnlcbiAgbGV0IG5vbkVkaXRhYmxlRmllbGRzID0gKCkgPT4ge1xuICAgIGxldCBjYW5jZWxBcnJheSA9IFtdO1xuICAgIGNvbnN0IGRpc2FibGVkRmllbGQgPSB0eXBlID0+XG4gICAgdXRpbHMubWFya3VwKCdsaScsIG9wdHNbdHlwZV0sIHtcbiAgICAgIGNsYXNzTmFtZTogYGRpc2FibGVkLWZpZWxkIGZvcm0tJHt0eXBlfWBcbiAgICB9KTtcblxuICAgIGlmIChvcHRzLnByZXBlbmQgJiYgISQoJy5kaXNhYmxlZC1maWVsZC5mb3JtLXByZXBlbmQnLCBkLnN0YWdlKS5sZW5ndGgpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAkc3RhZ2UucHJlcGVuZChkaXNhYmxlZEZpZWxkKCdwcmVwZW5kJykpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCAmJiAhJCgnLmRpc2FibGVkLWZpZWxkLmZvcm0tLmFwcGVuZCcsIGQuc3RhZ2UpLmxlbmd0aCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICRzdGFnZS5hcHBlbmQoZGlzYWJsZWRGaWVsZCgnYXBwZW5kJykpO1xuICAgIH1cblxuICAgIGhlbHBlcnMuZGlzYWJsZWRUVChkLnN0YWdlKTtcbiAgICByZXR1cm4gY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xuICB9O1xuXG4gIGxldCBwcmVwRmllbGRWYXJzID0gZnVuY3Rpb24oJGZpZWxkLCBpc05ldyA9IGZhbHNlKSB7XG4gICAgbGV0IGZpZWxkID0ge307XG4gICAgaWYgKCRmaWVsZCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgbGV0IGZpZWxkRGF0YSA9IGFGaWVsZHNbJGZpZWxkWzBdLmRhdGFzZXQudHlwZV07XG4gICAgICBpZiAoZmllbGREYXRhKSB7XG4gICAgICAgIGZpZWxkID0gZmllbGREYXRhLmF0dHJzO1xuICAgICAgICBmaWVsZC5sYWJlbCA9IGZpZWxkRGF0YS5sYWJlbDtcbiAgICAgIH0gZWxzZSB7IC8vIGlzIGRhdGFUeXBlIFhNTFxuICAgICAgICBsZXQgYXR0cnMgPSAkZmllbGRbMF0uYXR0cmlidXRlcztcbiAgICAgICAgaWYgKCFpc05ldykge1xuICAgICAgICAgIGZpZWxkLnZhbHVlcyA9ICRmaWVsZC5jaGlsZHJlbigpLm1hcCgoaW5kZXgsIGVsZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsOiAkKGVsZW0pLnRleHQoKSxcbiAgICAgICAgICAgICAgdmFsdWU6ICQoZWxlbSkuYXR0cigndmFsdWUnKSxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IEJvb2xlYW4oJChlbGVtKS5hdHRyKCdzZWxlY3RlZCcpKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGZpZWxkW2F0dHJzW2ldLm5hbWVdID0gYXR0cnNbaV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQgPSBPYmplY3QuYXNzaWduKHt9LCAkZmllbGQpO1xuICAgIH1cblxuICAgIGlmICghZmllbGQubmFtZSkge1xuICAgICAgZmllbGQubmFtZSA9IHV0aWxzLm5hbWVBdHRyKGZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOZXcgJiYgdXRpbHMuaW5BcnJheShmaWVsZC50eXBlLFxuICAgICAgWyd0ZXh0JyxcbiAgICAgICAnbnVtYmVyJyxcbiAgICAgICAnZmlsZScsXG4gICAgICAgJ2RhdGUnLFxuICAgICAgICdzZWxlY3QnLFxuICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgJ2F1dG9jb21wbGV0ZSddKSkge1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gZmllbGQuY2xhc3NOYW1lIHx8ICdmb3JtLWNvbnRyb2wnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBmaWVsZC5jbGFzc05hbWU7XG4gICAgfVxuXG4gICAgbGV0IG1hdGNoID0gLyg/Ol58XFxzKWJ0bi0oLio/KSg/Olxcc3wkKS9nLmV4ZWMoZmllbGQuY2xhc3NOYW1lKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGZpZWxkLnN0eWxlID0gbWF0Y2hbMV07XG4gICAgfVxuXG4gICAgdXRpbHMuZXNjYXBlQXR0cnMoZmllbGQpO1xuXG4gICAgYXBwZW5kTmV3RmllbGQoZmllbGQsIGlzTmV3KTtcblxuICAgIGlmIChpc05ldykge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMuZmllbGRBZGRlZCk7XG4gICAgfVxuXG4gICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gIH07XG5cbiAgLy8gUGFyc2Ugc2F2ZWQgWE1MIHRlbXBsYXRlIGRhdGFcbiAgbGV0IGxvYWRGaWVsZHMgPSBmdW5jdGlvbihmb3JtRGF0YSkge1xuICAgIGZvcm1EYXRhID0gaGVscGVycy5nZXREYXRhKGZvcm1EYXRhKTtcbiAgICBpZiAoZm9ybURhdGEgJiYgZm9ybURhdGEubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByZXBGaWVsZFZhcnMoZm9ybURhdGFbaV0pO1xuICAgICAgfVxuICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgfSBlbHNlIGlmIChvcHRzLmRlZmF1bHRGaWVsZHMgJiYgb3B0cy5kZWZhdWx0RmllbGRzLmxlbmd0aCkge1xuICAgICAgLy8gTG9hZCBkZWZhdWx0IGZpZWxkcyBpZiBub25lIGFyZSBzZXRcbiAgICAgIG9wdHMuZGVmYXVsdEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHByZXBGaWVsZFZhcnMoZmllbGQpKTtcbiAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgIH0gZWxzZSBpZiAoIW9wdHMucHJlcGVuZCAmJiAhb3B0cy5hcHBlbmQpIHtcbiAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgc3RhZ2VXcmFwLmRhdGFzZXQuY29udGVudCA9IGkxOG4uZ2V0U3RhcnRlZDtcbiAgICB9XG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG5cbiAgICBpZiAobm9uRWRpdGFibGVGaWVsZHMoKSkge1xuICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgZGF0YSBmb3IgZmllbGQgd2l0aCBvcHRpb25zIFtzZWxlY3QsIGNoZWNrYm94LWdyb3VwLCByYWRpby1ncm91cF1cbiAgICpcbiAgICogQHRvZG8gICByZWZhY3RvciB0aGlzIG5hc3R5IH5jcmFwfiBjb2RlLCBpdHMgYWN0dWFsbHkgcGFpbmZ1bCB0byBsb29rIGF0XG4gICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAqIEByZXR1cm4ge1N0cmluZ30gZmllbGQgb3B0aW9ucyBtYXJrdXBcbiAgICovXG4gIGxldCBmaWVsZE9wdGlvbnMgPSBmdW5jdGlvbihmaWVsZERhdGEpIHtcbiAgICBsZXQgb3B0aW9uQWN0aW9ucyA9IFtcbiAgICAgICAgdXRpbHMubWFya3VwKCdhJywgaTE4bi5hZGRPcHRpb24sIHtjbGFzc05hbWU6ICdhZGQgYWRkLW9wdCd9KVxuICAgICAgXTtcbiAgICBsZXQgZmllbGRPcHRpb25zID0gW1xuICAgICAgYDxsYWJlbCBjbGFzcz1cImZhbHNlLWxhYmVsXCI+JHtpMThuLnNlbGVjdE9wdGlvbnN9PC9sYWJlbD5gXG4gICAgXTtcbiAgICBjb25zdCBpc011bHRpcGxlID0gZmllbGREYXRhLm11bHRpcGxlIHx8IChmaWVsZERhdGEudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJyk7XG4gICAgY29uc3Qgb3B0aW9uRGF0YVRlbXBsYXRlID0gbGFiZWwgPT4ge1xuICAgICAgbGV0IG9wdGlvbkRhdGEgPSB7XG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgdmFsdWU6IHV0aWxzLmh5cGhlbkNhc2UobGFiZWwpXG4gICAgICB9O1xuXG4gICAgICBpZiAoZmllbGREYXRhLnR5cGUgIT09ICdhdXRvY29tcGxldGUnKSB7XG4gICAgICAgIG9wdGlvbkRhdGEuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbkRhdGE7XG4gICAgfTtcblxuICAgIGlmICghZmllbGREYXRhLnZhbHVlcyB8fCAhZmllbGREYXRhLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGxldCBkZWZhdWx0T3B0Q291bnQgPSB1dGlscy5pbkFycmF5KGZpZWxkRGF0YS50eXBlLCBbJ2NoZWNrYm94LWdyb3VwJywgJ2NoZWNrYm94J10pID8gWzFdIDogWzEsIDIsIDNdO1xuICAgICAgZmllbGREYXRhLnZhbHVlcyA9IGRlZmF1bHRPcHRDb3VudC5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gYCR7aTE4bi5vcHRpb259ICR7aW5kZXh9YDtcbiAgICAgICAgcmV0dXJuIG9wdGlvbkRhdGFUZW1wbGF0ZShsYWJlbCk7XG4gICAgICB9KTtcblxuICAgIGxldCBmaXJzdE9wdGlvbiA9IGZpZWxkRGF0YS52YWx1ZXNbMF07XG4gICAgICBpZiAoZmlyc3RPcHRpb24uaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgZmlyc3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbnN1cmUgb3B0aW9uIGRhdGEgaXMgaGFzIGFsbCByZXF1aXJlZCBrZXlzXG4gICAgICBmaWVsZERhdGEudmFsdWVzLmZvckVhY2gob3B0aW9uID0+IE9iamVjdC5hc3NpZ24oe30sIHtzZWxlY3RlZDogZmFsc2V9LCBvcHRpb24pKTtcbiAgICB9XG5cbiAgICBmaWVsZE9wdGlvbnMucHVzaCgnPGRpdiBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnMtd3JhcFwiPicpO1xuXG4gICAgZmllbGRPcHRpb25zLnB1c2goJzxvbCBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnNcIj4nKTtcbiAgICB1dGlscy5mb3JFYWNoKGZpZWxkRGF0YS52YWx1ZXMsIGkgPT4ge1xuICAgICAgZmllbGRPcHRpb25zLnB1c2goc2VsZWN0RmllbGRPcHRpb25zKGZpZWxkRGF0YS5uYW1lLCBmaWVsZERhdGEudmFsdWVzW2ldLCBpc011bHRpcGxlKSk7XG4gICAgfSk7XG4gICAgZmllbGRPcHRpb25zLnB1c2goJzwvb2w+Jyk7XG4gICAgZmllbGRPcHRpb25zLnB1c2godXRpbHMubWFya3VwKCdkaXYnLCBvcHRpb25BY3Rpb25zLCB7Y2xhc3NOYW1lOiAnb3B0aW9uLWFjdGlvbnMnfSkub3V0ZXJIVE1MKTtcbiAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICByZXR1cm4gdXRpbHMubWFya3VwKCdkaXYnLCBmaWVsZE9wdGlvbnMuam9pbignJyksIHtjbGFzc05hbWU6ICdmb3JtLWdyb3VwIGZpZWxkLW9wdGlvbnMnfSkub3V0ZXJIVE1MO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZWRpdGFibGUgcHJvcGVydGllcyBmb3IgdGhlIGZpZWxkXG4gICAqIEBwYXJhbSAge29iamVjdH0gdmFsdWVzIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgbWFya3VwIGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICovXG4gIGxldCBhZHZGaWVsZHMgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICBsZXQgYWR2RmllbGRzID0gW107XG4gICAgbGV0IGtleTtcbiAgICBsZXQgdmFsdWVGaWVsZCA9ICF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnZmlsZSddLmNvbmNhdChkLm9wdGlvbkZpZWxkcykpO1xuICAgIGxldCByb2xlcyA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyB2YWx1ZXMucm9sZS5zcGxpdCgnLCcpIDogW107XG5cbiAgICBhZHZGaWVsZHMucHVzaChyZXF1aXJlZEZpZWxkKHZhbHVlcykpO1xuXG4gICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsnY2hlY2tib3gnLCAnY2hlY2tib3gtZ3JvdXAnXSkpIHtcbiAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ3RvZ2dsZScsIHZhbHVlcywge2ZpcnN0OiBpMThuLnRvZ2dsZX0pKTtcbiAgICB9XG5cbiAgICAvLyBJbmxpbmUgb3B0aW9uc1xuICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICBsZXQgbGFiZWxzID0ge1xuICAgICAgICBmaXJzdDogaTE4bi5pbmxpbmUsXG4gICAgICAgIHNlY29uZDogbWkxOG4uZ2V0KCdpbmxpbmVEZXNjJywgdmFsdWVzLnR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpKVxuICAgICAgfTtcblxuICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnaW5saW5lJywgdmFsdWVzLCBsYWJlbHMpKTtcbiAgICB9XG5cbiAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdsYWJlbCcsIHZhbHVlcykpO1xuXG4gICAgdmFsdWVzLnNpemUgPSB2YWx1ZXMuc2l6ZSB8fCAnbSc7XG4gICAgdmFsdWVzLnN0eWxlID0gdmFsdWVzLnN0eWxlIHx8ICdkZWZhdWx0JztcblxuICAgIC8vIEhlbHAgVGV4dCAvIERlc2NyaXB0aW9uIEZpZWxkXG4gICAgaWYgKCF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnYnV0dG9uJ10pKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdkZXNjcmlwdGlvbicsIHZhbHVlcykpO1xuICAgIH1cblxuICAgIGlmIChzdWJ0eXBlc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgIGxldCBvcHRpb25EYXRhID0gc3VidHlwZXNbdmFsdWVzLnR5cGVdO1xuICAgICAgYWR2RmllbGRzLnB1c2goc2VsZWN0QXR0cmlidXRlKCdzdWJ0eXBlJywgdmFsdWVzLCBvcHRpb25EYXRhKSk7XG4gICAgfVxuXG5cbiAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaChidG5TdHlsZXModmFsdWVzLnN0eWxlKSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtaW4nLCB2YWx1ZXMpKTtcbiAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWF4JywgdmFsdWVzKSk7XG4gICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ3N0ZXAnLCB2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICAvLyBQbGFjZWhvbGRlclxuICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdmFsdWVzKSk7XG5cbiAgICAvLyBUZXh0QXJlYSBSb3dzIEF0dHJpYnV0ZVxuICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdyb3dzJywgdmFsdWVzKSk7XG4gICAgfVxuXG4gICAgLy8gQ2xhc3NcbiAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdjbGFzc05hbWUnLCB2YWx1ZXMpKTtcblxuICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZXMpKTtcblxuICAgIGlmICh2YWx1ZUZpZWxkKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlcykpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICBsZXQgbGFiZWxzID0ge1xuICAgICAgICBmaXJzdDogaTE4bi5tdWx0aXBsZUZpbGVzLFxuICAgICAgICBzZWNvbmQ6IGkxOG4uYWxsb3dNdWx0aXBsZUZpbGVzXG4gICAgICB9O1xuICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIGxhYmVscykpO1xuICAgIH1cblxuICAgIGxldCByb2xlc0Rpc3BsYXkgPSB2YWx1ZXMucm9sZSAhPT0gdW5kZWZpbmVkID8gJ3N0eWxlPVwiZGlzcGxheTpibG9ja1wiJyA6ICcnO1xuICAgIGxldCBhdmFpbGFibGVSb2xlcyA9IFtcbiAgICAgIGA8ZGl2IGNsYXNzPVwiYXZhaWxhYmxlLXJvbGVzXCIgJHtyb2xlc0Rpc3BsYXl9PmBcbiAgICBdO1xuICAgIGZvciAoa2V5IGluIG9wdHMucm9sZXMpIHtcbiAgICAgIGlmIChvcHRzLnJvbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSB1dGlscy5pbkFycmF5KGtleSwgcm9sZXMpID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgIGxldCByb2xlSWQgPSBgZmxkLSR7ZGF0YS5sYXN0SUR9LXJvbGVzLSR7a2V5fWA7XG4gICAgICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicm9sZXNbXVwiIHZhbHVlPVwiJHtrZXl9XCIgaWQ9XCIke3JvbGVJZH1cIiAke2NoZWNrZWR9IGNsYXNzPVwicm9sZXMtZmllbGRcIiAvPiA8bGFiZWwgZm9yPVwiJHtyb2xlSWR9XCI+JHtvcHRzLnJvbGVzW2tleV19PC9sYWJlbD48YnIvPmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goJzwvZGl2PicpO1xuXG4gICAgbGV0IGFjY2Vzc0xhYmVscyA9IHtmaXJzdDogaTE4bi5yb2xlcywgc2Vjb25kOiBpMThuLmxpbWl0Um9sZSwgY29udGVudDogYXZhaWxhYmxlUm9sZXMuam9pbignJyl9O1xuXG4gICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnYWNjZXNzJywgdmFsdWVzLCBhY2Nlc3NMYWJlbHMpKTtcblxuICAgIGlmICh2YWx1ZXMudHlwZS5tYXRjaCgvKGNoZWNrYm94LWdyb3VwfHJhZGlvLWdyb3VwKS8pKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdvdGhlcicsIHZhbHVlcywge2ZpcnN0OiBpMThuLmVuYWJsZU90aGVyLCBzZWNvbmQ6IGkxOG4uZW5hYmxlT3RoZXJNc2d9KSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIHtmaXJzdDogJyAnLCBzZWNvbmQ6IGkxOG4uc2VsZWN0aW9uc01lc3NhZ2V9KSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy50eXBlLm1hdGNoKGQub3B0aW9uRmllbGRzUmVnRXgpKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaChmaWVsZE9wdGlvbnModmFsdWVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsndGV4dCcsICd0ZXh0YXJlYSddKSkge1xuICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXhsZW5ndGgnLCB2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgY3VzdG9tIGF0dHJpYnV0ZXMgYXMgZGVmaW5lZCBpbiB0eXBlVXNlckF0dHJzIG9wdGlvblxuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaChwcm9jZXNzVHlwZVVzZXJBdHRycyhvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdLCB2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWR2RmllbGRzLmpvaW4oJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzZXMgdHlwZVVzZXJBdHRyc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHR5cGVVc2VyQXR0ciBvcHRpb25cbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgICAgZmllbGQgYXR0cmlidXRlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICBtYXJrdXAgZm9yIGN1c3RvbSB1c2VyIGF0dHJpYnV0ZXNcbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NUeXBlVXNlckF0dHJzKHR5cGVVc2VyQXR0ciwgdmFsdWVzKSB7XG4gICAgbGV0IGFkdkZpZWxkID0gW107XG5cbiAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gdHlwZVVzZXJBdHRyKSB7XG4gICAgICBpZiAodHlwZVVzZXJBdHRyLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgbGV0IG9yaWcgPSBpMThuW2F0dHJpYnV0ZV07XG4gICAgICAgIGxldCBvcmlnVmFsdWUgPSB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZTtcbiAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSB8fCAnJztcblxuICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWwpIHtcbiAgICAgICAgICBpMThuW2F0dHJpYnV0ZV0gPSB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5sYWJlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5vcHRpb25zKSB7XG4gICAgICAgICAgYWR2RmllbGQucHVzaChzZWxlY3RVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkdkZpZWxkLnB1c2goaW5wdXRVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaTE4blthdHRyaWJ1dGVdID0gb3JpZztcbiAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkdkZpZWxkLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRleHQgaW5wdXQgdmFsdWUgZm9yIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBhbHNvIGtub3duIGFzIHZhbHVlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIGlucHV0IG1hcmt1cFxuICAgKi9cbiAgZnVuY3Rpb24gaW5wdXRVc2VyQXR0cnMobmFtZSwgYXR0cnMpIHtcbiAgICBsZXQgdGV4dEF0dHJzID0ge1xuICAgICAgICBpZDogbmFtZSArICctJyArIGRhdGEubGFzdElELFxuICAgICAgICB0aXRsZTogYXR0cnMuZGVzY3JpcHRpb24gfHwgYXR0cnMubGFiZWwgfHwgbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiBhdHRycy50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgY2xhc3NOYW1lOiBbYGZsZC0ke25hbWV9YF1cbiAgICAgIH07XG4gICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3RleHRBdHRycy5pZH1cIj4ke2kxOG5bbmFtZV19PC9sYWJlbD5gO1xuXG4gICAgaWYgKCF1dGlscy5pbkFycmF5KHRleHRBdHRycy50eXBlLCBbJ2NoZWNrYm94JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICB0ZXh0QXR0cnMuY2xhc3NOYW1lLnB1c2goJ2Zvcm0tY29udHJvbCcpO1xuICAgIH1cblxuICAgIHRleHRBdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB0ZXh0QXR0cnMpO1xuICAgIGxldCB0ZXh0SW5wdXQgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh0ZXh0QXR0cnMpfT5gO1xuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3RleHRJbnB1dH08L2Rpdj5gO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBpbnB1dCBmb3IgbXVsdGlwbGUgY2hvaWNlIHVzZXIgYXR0cmlidXRlc1xuICAgKiBAdG9kbyAgcmVwbGFjZSB3aXRoIHNlbGVjdEF0dHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgc2VsZWN0IG1hcmt1cFxuICAgKi9cbiAgZnVuY3Rpb24gc2VsZWN0VXNlckF0dHJzKG5hbWUsIG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0aXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLm9wdGlvbnMpLm1hcCh2YWwgPT4ge1xuICAgICAgbGV0IGF0dHJzID0ge3ZhbHVlOiB2YWx9O1xuICAgICAgaWYgKHZhbCA9PT0gb3B0aW9ucy52YWx1ZSkge1xuICAgICAgICBhdHRycy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gYDxvcHRpb24gJHt1dGlscy5hdHRyU3RyaW5nKGF0dHJzKX0+JHtvcHRpb25zLm9wdGlvbnNbdmFsXX08L29wdGlvbj5gO1xuICAgIH0pO1xuICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgIGlkOiBuYW1lICsgJy0nICsgZGF0YS5sYXN0SUQsXG4gICAgICB0aXRsZTogb3B0aW9ucy5kZXNjcmlwdGlvbiB8fCBvcHRpb25zLmxhYmVsIHx8IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBjbGFzc05hbWU6IGBmbGQtJHtuYW1lfSBmb3JtLWNvbnRyb2xgXG4gICAgfTtcbiAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtpMThuW25hbWVdfTwvbGFiZWw+YDtcblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihwcm9wID0+IHtcbiAgICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShwcm9wLCBbJ3ZhbHVlJywgJ29wdGlvbnMnLCAnbGFiZWwnXSk7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbihhdHRyKSB7XG4gICAgICBzZWxlY3RBdHRyc1thdHRyXSA9IG9wdGlvbnNbYXR0cl07XG4gICAgfSk7XG5cbiAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtvcHRpcy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICB9XG5cbiAgbGV0IGJvb2xBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZXMsIGxhYmVscykge1xuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGFiZWwgPSAodHh0KSA9PiB7XG4gICAgICByZXR1cm4gYDxsYWJlbCBmb3I9XCIke25hbWV9LSR7ZGF0YS5sYXN0SUR9XCI+JHt0eHR9PC9sYWJlbD5gO1xuICAgIH07XG4gICAgbGV0IGNoZWNrZWQgPSAodmFsdWVzW25hbWVdICE9PSB1bmRlZmluZWQgPyAnY2hlY2tlZCcgOiAnJyk7XG4gICAgbGV0IGlucHV0ID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZsZC0ke25hbWV9XCIgbmFtZT1cIiR7bmFtZX1cIiB2YWx1ZT1cInRydWVcIiAke2NoZWNrZWR9IGlkPVwiJHtuYW1lfS0ke2RhdGEubGFzdElEfVwiLz4gYDtcbiAgICBsZXQgbGVmdCA9IFtdO1xuICAgIGxldCByaWdodCA9IFtcbiAgICAgIGlucHV0XG4gICAgXTtcblxuICAgIGlmIChsYWJlbHMuZmlyc3QpIHtcbiAgICAgIGxlZnQudW5zaGlmdChsYWJlbChsYWJlbHMuZmlyc3QpKTtcbiAgICB9XG5cbiAgICBpZiAobGFiZWxzLnNlY29uZCkge1xuICAgICAgcmlnaHQucHVzaChsYWJlbChsYWJlbHMuc2Vjb25kKSk7XG4gICAgfVxuXG4gICAgaWYgKGxhYmVscy5jb250ZW50KSB7XG4gICAgICByaWdodC5wdXNoKGxhYmVscy5jb250ZW50KTtcbiAgICB9XG5cbiAgICByaWdodC51bnNoaWZ0KCc8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPicpO1xuICAgIHJpZ2h0LnB1c2goJzwvZGl2PicpO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xlZnQuY29uY2F0KHJpZ2h0KS5qb2luKCcnKX08L2Rpdj5gO1xuICB9O1xuXG4gIGxldCBidG5TdHlsZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgbGV0IHN0eWxlcyA9IGkxOG4uc3R5bGVzLmJ0bjtcbiAgICAgIGxldCBzdHlsZUZpZWxkID0gJyc7XG5cbiAgICBpZiAoc3R5bGVzKSB7XG4gICAgICBsZXQgc3R5bGVMYWJlbCA9IGA8bGFiZWw+JHtpMThuLnN0eWxlfTwvbGFiZWw+YDtcbiAgICAgIHN0eWxlRmllbGQgKz0gYDxpbnB1dCB2YWx1ZT1cIiR7c3R5bGV9XCIgbmFtZT1cInN0eWxlXCIgdHlwZT1cImhpZGRlblwiIGNsYXNzPVwiYnRuLXN0eWxlXCI+YDtcbiAgICAgIHN0eWxlRmllbGQgKz0gJzxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj4nO1xuXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBjbGFzc0xpc3QgPSBbJ2J0bi14cycsICdidG4nLCBgYnRuLSR7ZWxlbWVudH1gXTtcbiAgICAgICAgaWYgKHN0eWxlID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgY2xhc3NMaXN0LnB1c2goJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZUZpZWxkICs9IGA8YnV0dG9uIHZhbHVlPVwiJHtlbGVtZW50fVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7Y2xhc3NMaXN0LmpvaW4oJyAnKX1cIj4ke2kxOG4uc3R5bGVzLmJ0bltlbGVtZW50XX08L2J1dHRvbj5gO1xuICAgICAgfSk7XG5cbiAgICAgIHN0eWxlRmllbGQgKz0gJzwvZGl2Pic7XG5cbiAgICAgIHN0eWxlRmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc3R5bGUtd3JhcFwiPiR7c3R5bGVMYWJlbH0gJHtzdHlsZUZpZWxkfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlRmllbGQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIG51bWJlciBhdHRyaWJ1dGUgdG8gYSBmaWVsZC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICogQHJldHVybiB7U3RyaW5nfSBtYXJrdXAgZm9yIG51bWJlciBhdHRyaWJ1dGVcbiAgICovXG4gIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcykge1xuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBhdHRyVmFsID0gdmFsdWVzW2F0dHJpYnV0ZV07XG4gICAgbGV0IGF0dHJMYWJlbCA9IGkxOG5bYXR0cmlidXRlXSB8fCBhdHRyaWJ1dGU7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gaTE4bltgcGxhY2Vob2xkZXIuJHthdHRyaWJ1dGV9YF07XG4gICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICB2YWx1ZTogYXR0clZhbCxcbiAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgIG1pbjogJzAnLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgaWQ6IGAke2F0dHJpYnV0ZX0tJHtkYXRhLmxhc3RJRH1gXG4gICAgfTtcbiAgICBsZXQgbnVtYmVyQXR0cmlidXRlID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodXRpbHMudHJpbU9iaihpbnB1dENvbmZpZykpfT5gO1xuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke251bWJlckF0dHJpYnV0ZX08L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiPjxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gIH07XG5cbiAgLyoqXG4gICAqIHNlbGVjdEF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgIGFrYSBhdHRyc1xuICAgKiBAcGFyYW0gIHtBcnJheX0gb3B0aW9uRGF0YSAgc2VsZWN0IGZpZWxkIG9wdGlvbiBkYXRhXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICBzZWxlY3QgaW5wdXQgbWFrcnVwXG4gICAqL1xuICBsZXQgc2VsZWN0QXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMsIG9wdGlvbkRhdGEpIHtcbiAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdE9wdGlvbnMgPSBvcHRpb25EYXRhLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgbGFiZWw6IGAke2kxOG4ub3B0aW9ufSAke2l9YCxcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0aW9uKTtcbiAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHZhbHVlc1thdHRyaWJ1dGVdKSB7XG4gICAgICAgIG9wdGlvbkF0dHJzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcodXRpbHMudHJpbU9iaihvcHRpb25BdHRycykpfT4ke29wdGlvbkF0dHJzLmxhYmVsfTwvb3B0aW9uPmA7XG4gICAgfSk7XG4gICAgbGV0IHNlbGVjdEF0dHJzID0ge1xuICAgICAgICBpZDogYXR0cmlidXRlICsgJy0nICsgZGF0YS5sYXN0SUQsXG4gICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgXG4gICAgICB9O1xuICAgIGxldCBsYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtzZWxlY3RBdHRycy5pZH1cIj4ke2kxOG5bYXR0cmlidXRlXSB8fCB1dGlscy5jYXBpdGFsaXplKGF0dHJpYnV0ZSl9PC9sYWJlbD5gO1xuICAgIGxldCBzZWxlY3QgPSBgPHNlbGVjdCAke3V0aWxzLmF0dHJTdHJpbmcoc2VsZWN0QXR0cnMpfT4ke3NlbGVjdE9wdGlvbnMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtzZWxlY3R9PC9kaXY+YDtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtzZWxlY3RBdHRycy5uYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBzb21lIHRleHQgaW5wdXRzIGZvciBmaWVsZCBhdHRyaWJ1dGVzLCAqKndpbGwgYmUgcmVwbGFjZWQqKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBsZXQgdGV4dEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlaG9sZGVyRmllbGRzID0gW1xuICAgICAgJ3RleHQnLFxuICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICdzZWxlY3QnLFxuICAgICAgJ2F1dG9jb21wbGV0ZSdcbiAgICBdO1xuXG4gICAgbGV0IG5vTmFtZSA9IFtcbiAgICAgICdoZWFkZXInLFxuICAgICAgJ3BhcmFncmFwaCdcbiAgICBdO1xuXG4gICAgbGV0IHRleHRBcmVhID0gWydwYXJhZ3JhcGgnXTtcblxuICAgIGxldCBhdHRyVmFsID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgbGV0IGF0dHJMYWJlbCA9IGkxOG5bYXR0cmlidXRlXTtcbiAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSkge1xuICAgICAgYXR0ckxhYmVsID0gaTE4bi5jb250ZW50O1xuICAgIH1cblxuICAgIGlmIChzdWJ0eXBlcy5oZWFkZXIpIHtcbiAgICAgIG5vTmFtZSA9IG5vTmFtZS5jb25jYXQoc3VidHlwZXMuaGVhZGVyKTtcbiAgICB9XG5cbiAgICBsZXQgcGxhY2Vob2xkZXIgPSBpMThuW2BwbGFjZWhvbGRlci4ke2F0dHJpYnV0ZX1gXSB8fCAnJztcbiAgICBsZXQgYXR0cmlidXRlZmllbGQgPSAnJztcbiAgICBsZXQgbm9NYWtlQXR0ciA9IFtdO1xuXG4gICAgLy8gRmllbGQgaGFzIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZVxuICAgIGlmIChhdHRyaWJ1dGUgPT09ICdwbGFjZWhvbGRlcicgJiYgIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHBsYWNlaG9sZGVyRmllbGRzKSkge1xuICAgICAgbm9NYWtlQXR0ci5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIC8vIEZpZWxkIGhhcyBuYW1lIGF0dHJpYnV0ZVxuICAgIGlmIChhdHRyaWJ1dGUgPT09ICduYW1lJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBub05hbWUpKSB7XG4gICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFub01ha2VBdHRyLnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2RhdGEubGFzdElEfWBcbiAgICAgIH07XG4gICAgICBsZXQgYXR0cmlidXRlTGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7aW5wdXRDb25maWcuaWR9XCI+JHthdHRyTGFiZWx9PC9sYWJlbD5gO1xuXG4gICAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnKSB7XG4gICAgICAgIGF0dHJpYnV0ZWZpZWxkICs9IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZSAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT4ke2F0dHJWYWx9PC9kaXY+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0Q29uZmlnLnZhbHVlID0gYXR0clZhbDtcbiAgICAgICAgaW5wdXRDb25maWcudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgYXR0cmlidXRlZmllbGQgKz0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHthdHRyaWJ1dGVmaWVsZH08L2Rpdj5gO1xuXG4gICAgICBsZXQgdmlzaWJpbGl0eSA9ICdibG9jayc7XG4gICAgICBpZiAoYXR0cmlidXRlID09PSAndmFsdWUnKSB7XG4gICAgICAgIHZpc2liaWxpdHkgPSB2YWx1ZXMuc3VidHlwZSAmJiB2YWx1ZXMuc3VidHlwZSA9PT0gJ3F1aWxsJyAmJiAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGF0dHJpYnV0ZWZpZWxkID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCIgc3R5bGU9XCJkaXNwbGF5OiAke3Zpc2liaWxpdHl9XCI+JHthdHRyaWJ1dGVMYWJlbH0gJHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cmlidXRlZmllbGQ7XG4gIH07XG5cbiAgbGV0IHJlcXVpcmVkRmllbGQgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICBsZXQgbm9SZXF1aXJlID0gW1xuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdidXR0b24nXG4gICAgICBdO1xuICAgIGxldCBub01ha2UgPSBbXTtcbiAgICBsZXQgcmVxdWlyZUZpZWxkID0gJyc7XG5cbiAgICBpZiAodXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgbm9SZXF1aXJlKSkge1xuICAgICAgbm9NYWtlLnB1c2godHJ1ZSk7XG4gICAgfVxuICAgIGlmICghbm9NYWtlLnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgcmVxdWlyZUZpZWxkID0gYm9vbEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB2YWx1ZXMsIHtmaXJzdDogaTE4bi5yZXF1aXJlZH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXF1aXJlRmllbGQ7XG4gIH07XG5cbiAgLy8gQXBwZW5kIHRoZSBuZXcgZmllbGQgdG8gdGhlIGVkaXRvclxuICBsZXQgYXBwZW5kTmV3RmllbGQgPSBmdW5jdGlvbih2YWx1ZXMsIGlzTmV3ID0gdHJ1ZSkge1xuICAgIGxldCB0eXBlID0gdmFsdWVzLnR5cGUgfHwgJ3RleHQnO1xuICAgIGxldCBsYWJlbCA9IHZhbHVlcy5sYWJlbCB8fCBpMThuW3R5cGVdIHx8IGkxOG4ubGFiZWw7XG4gICAgbGV0IGRlbEJ0biA9IG0oJ2EnLCBpMThuLnJlbW92ZSwge1xuICAgICAgICBpZDogJ2RlbF8nICsgZGF0YS5sYXN0SUQsXG4gICAgICAgIGNsYXNzTmFtZTogJ2RlbC1idXR0b24gYnRuIGRlbGV0ZS1jb25maXJtJyxcbiAgICAgICAgdGl0bGU6IGkxOG4ucmVtb3ZlTWVzc2FnZVxuICAgICAgfSk7XG4gICAgbGV0IHRvZ2dsZUJ0biA9IG0oJ2EnLCBudWxsLCB7XG4gICAgICBpZDogZGF0YS5sYXN0SUQgKyAnLWVkaXQnLFxuICAgICAgY2xhc3NOYW1lOiAndG9nZ2xlLWZvcm0gYnRuIGljb24tcGVuY2lsJyxcbiAgICAgIHRpdGxlOiBpMThuLmhpZGVcbiAgICB9KTtcbiAgICBsZXQgY29weUJ0biA9IG0oJ2EnLCBudWxsLCB7XG4gICAgICBpZDogZGF0YS5sYXN0SUQgKyAnLWNvcHknLFxuICAgICAgY2xhc3NOYW1lOiAnY29weS1idXR0b24gYnRuIGljb24tY29weScsXG4gICAgICB0aXRsZTogaTE4bi5jb3B5QnV0dG9uVG9vbHRpcFxuICAgIH0pO1xuXG4gICAgbGV0IGxpQ29udGVudHMgPSBtKFxuICAgICAgJ2RpdicsIFt0b2dnbGVCdG4sIGNvcHlCdG4sIGRlbEJ0bl0sIHtjbGFzc05hbWU6ICdmaWVsZC1hY3Rpb25zJ31cbiAgICApLm91dGVySFRNTDtcblxuICAgIC8vIEZpZWxkIHByZXZpZXcgTGFiZWxcbiAgICBsaUNvbnRlbnRzICs9IGA8bGFiZWwgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPiR7dXRpbHMucGFyc2VkSHRtbChsYWJlbCl9PC9sYWJlbD5gO1xuXG4gICAgaWYgKHZhbHVlcy5kZXNjcmlwdGlvbikge1xuICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICB0b29sdGlwOiB2YWx1ZXMuZGVzY3JpcHRpb25cbiAgICAgIH07XG4gICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4/PC9zcGFuPmA7XG4gICAgfVxuXG4gICAgbGV0IHJlcXVpcmVkRGlzcGxheSA9IHZhbHVlcy5yZXF1aXJlZCA/ICdzdHlsZT1cImRpc3BsYXk6aW5saW5lXCInIDogJyc7XG4gICAgbGlDb250ZW50cyArPSBgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiICR7cmVxdWlyZWREaXNwbGF5fT4gKjwvc3Bhbj5gO1xuXG4gICAgbGlDb250ZW50cyArPSBtKCdkaXYnLCAnJywge2NsYXNzTmFtZTogJ3ByZXYtaG9sZGVyJ30pLm91dGVySFRNTDtcbiAgICBsaUNvbnRlbnRzICs9IGA8ZGl2IGlkPVwiJHtkYXRhLmxhc3RJRH0taG9sZGVyXCIgY2xhc3M9XCJmcm0taG9sZGVyXCI+YDtcbiAgICBsaUNvbnRlbnRzICs9ICc8ZGl2IGNsYXNzPVwiZm9ybS1lbGVtZW50c1wiPic7XG5cbiAgICBsaUNvbnRlbnRzICs9IGFkdkZpZWxkcyh2YWx1ZXMpO1xuICAgIGxpQ29udGVudHMgKz0gbSgnYScsIGkxOG4uY2xvc2UsIHtjbGFzc05hbWU6ICdjbG9zZS1maWVsZCd9KS5vdXRlckhUTUw7XG5cbiAgICBsaUNvbnRlbnRzICs9ICc8L2Rpdj4nO1xuICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XG5cbiAgICBsZXQgZmllbGQgPSBtKCdsaScsIGxpQ29udGVudHMsIHtcbiAgICAgICAgJ2NsYXNzJzogdHlwZSArICctZmllbGQgZm9ybS1maWVsZCcsXG4gICAgICAgICd0eXBlJzogdHlwZSxcbiAgICAgICAgaWQ6IGRhdGEubGFzdElEXG4gICAgICB9KTtcbiAgICBsZXQgJGxpID0gJChmaWVsZCk7XG5cbiAgICAkbGkuZGF0YSgnZmllbGREYXRhJywge2F0dHJzOiB2YWx1ZXN9KTtcblxuICAgIGlmICh0eXBlb2YgaGVscGVycy5zdG9wSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAkKCc+IGxpJywgZC5zdGFnZSkuZXEoaGVscGVycy5zdG9wSW5kZXgpLmJlZm9yZSgkbGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc3RhZ2UuYXBwZW5kKCRsaSk7XG4gICAgfVxuXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkbGkpXG4gICAgLnNvcnRhYmxlKHt1cGRhdGU6ICgpID0+IGhlbHBlcnMudXBkYXRlUHJldmlldygkbGkpfSk7XG5cbiAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKTtcblxuICAgIGlmIChvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdICYmIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQpIHtcbiAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQoZmllbGQpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmVkaXRPbkFkZCAmJiBpc05ldykge1xuICAgICAgaGVscGVycy5jbG9zZUFsbEVkaXQoKTtcbiAgICAgIGhlbHBlcnMudG9nZ2xlRWRpdChkYXRhLmxhc3RJRCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGRhdGEubGFzdElEID0gaGVscGVycy5pbmNyZW1lbnRJZChkYXRhLmxhc3RJRCk7XG4gIH07XG5cbiAgLy8gU2VsZWN0IGZpZWxkIGh0bWwsIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZVxuICBsZXQgc2VsZWN0RmllbGRPcHRpb25zID0gZnVuY3Rpb24obmFtZSwgb3B0aW9uRGF0YSwgbXVsdGlwbGVTZWxlY3QpIHtcbiAgICBsZXQgb3B0aW9uSW5wdXRUeXBlID0ge1xuICAgICAgICBzZWxlY3RlZDogKG11bHRpcGxlU2VsZWN0ID8gJ2NoZWNrYm94JyA6ICdyYWRpbycpXG4gICAgICB9O1xuICAgIGxldCBvcHRpb25EYXRhT3JkZXIgPSBbXG4gICAgICAndmFsdWUnLFxuICAgICAgJ2xhYmVsJyxcbiAgICAgICdzZWxlY3RlZCdcbiAgICBdO1xuICAgIGxldCBvcHRpb25JbnB1dHMgPSBbXTtcbiAgICBsZXQgb3B0aW9uVGVtcGxhdGUgPSB7c2VsZWN0ZWQ6IGZhbHNlLCBsYWJlbDogJycsIHZhbHVlOiAnJ307XG5cbiAgICBvcHRpb25EYXRhID0gT2JqZWN0LmFzc2lnbihvcHRpb25UZW1wbGF0ZSwgb3B0aW9uRGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gb3B0aW9uRGF0YU9yZGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcHJvcCA9IG9wdGlvbkRhdGFPcmRlcltpXTtcbiAgICAgIGlmIChvcHRpb25EYXRhLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICB0eXBlOiBvcHRpb25JbnB1dFR5cGVbcHJvcF0gfHwgJ3RleHQnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ29wdGlvbi0nICsgcHJvcCxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uRGF0YVtwcm9wXSxcbiAgICAgICAgICBuYW1lOiBuYW1lICsgJy1vcHRpb24nXG4gICAgICAgIH07XG5cbiAgICAgICAgYXR0cnMucGxhY2Vob2xkZXIgPSBpMThuW2BwbGFjZWhvbGRlci4ke3Byb3B9YF0gfHwgJyc7XG5cbiAgICAgICAgaWYgKHByb3AgPT09ICdzZWxlY3RlZCcgJiYgb3B0aW9uRGF0YS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGF0dHJzLmNoZWNrZWQgPSBvcHRpb25EYXRhLnNlbGVjdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uSW5wdXRzLnB1c2gobSgnaW5wdXQnLCBudWxsLCBhdHRycykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZW1vdmVBdHRycyA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ3JlbW92ZSBidG4nLFxuICAgICAgdGl0bGU6IGkxOG4ucmVtb3ZlTWVzc2FnZVxuICAgIH07XG4gICAgb3B0aW9uSW5wdXRzLnB1c2godXRpbHMubWFya3VwKCdhJywgaTE4bi5yZW1vdmUsIHJlbW92ZUF0dHJzKSk7XG5cbiAgICBsZXQgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0aW9uSW5wdXRzKTtcblxuICAgIHJldHVybiBmaWVsZC5vdXRlckhUTUw7XG4gIH07XG5cbiAgbGV0IGNsb25lSXRlbSA9IGZ1bmN0aW9uIGNsb25lSXRlbShjdXJyZW50SXRlbSkge1xuICAgIGxldCBjdXJyZW50SWQgPSBjdXJyZW50SXRlbS5hdHRyKCdpZCcpO1xuICAgIGxldCB0eXBlID0gY3VycmVudEl0ZW0uYXR0cigndHlwZScpO1xuICAgIGxldCB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBjbG9uZU5hbWUgPSB0eXBlICsgJy0nICsgdHM7XG4gICAgbGV0ICRjbG9uZSA9IGN1cnJlbnRJdGVtLmNsb25lKCk7XG5cbiAgICAkY2xvbmUuZmluZCgnW2lkXScpLmVhY2goKGksIGVsZW0pID0+IHtcbiAgICAgZWxlbS5pZCA9IGVsZW0uaWQucmVwbGFjZShjdXJyZW50SWQsIGRhdGEubGFzdElEKTtcbiAgICB9KTtcblxuICAgICRjbG9uZS5maW5kKCdbZm9yXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9yJykucmVwbGFjZShjdXJyZW50SWQsIGRhdGEubGFzdElEKSk7XG4gICAgfSk7XG5cbiAgICAkY2xvbmUuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQoJ2U6bm90KC5mb3JtLWVsZW1lbnRzKScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBuZXdOYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIChuZXdOYW1lLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgIG5ld05hbWUgPSBuZXdOYW1lICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuZXdOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJGNsb25lLmZpbmQoJy5mb3JtLWVsZW1lbnRzJykuZmluZCgnOmlucHV0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSAnbmFtZScpIHtcbiAgICAgICAgbGV0IG5ld1ZhbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICBuZXdWYWwgPSBuZXdWYWwuc3Vic3RyaW5nKDAsIChuZXdWYWwubGFzdEluZGV4T2YoJy0nKSArIDEpKTtcbiAgICAgICAgbmV3VmFsID0gbmV3VmFsICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3VmFsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRjbG9uZS5hdHRyKCdpZCcsIGRhdGEubGFzdElEKTtcbiAgICAkY2xvbmUuYXR0cignbmFtZScsIGNsb25lTmFtZSk7XG4gICAgJGNsb25lLmFkZENsYXNzKCdjbG9uZWQnKTtcbiAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRjbG9uZSkuc29ydGFibGUoKTtcblxuICAgIGlmIChvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdICYmIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSkge1xuICAgICAgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKCRjbG9uZVswXSk7XG4gICAgfVxuXG4gICAgZGF0YS5sYXN0SUQgPSBoZWxwZXJzLmluY3JlbWVudElkKGRhdGEubGFzdElEKTtcbiAgICByZXR1cm4gJGNsb25lO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVRJTElUSUVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBkZWxldGUgb3B0aW9uc1xuICAkc3RhZ2Uub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgJGZpZWxkID0gJCh0aGlzKS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgb3B0aW9uc0NvdW50ID0gJCh0aGlzKS5wYXJlbnRzKCcuc29ydGFibGUtb3B0aW9uczplcSgwKScpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcbiAgICBpZiAob3B0aW9uc0NvdW50IDw9IDIpIHtcbiAgICAgIG9wdHMubm90aWZ5LmVycm9yKCdFcnJvcjogJyArIGkxOG4ubWluT3B0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykucGFyZW50KCdsaScpLnNsaWRlVXAoJzI1MCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGZpZWxkKTtcbiAgICAgICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHRvdWNoIGZvY3VzXG4gICRzdGFnZS5vbigndG91Y2hzdGFydCcsICdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgJGlucHV0ID0gJCh0aGlzKTtcbiAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICBpZiAoJGlucHV0LmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAkaW5wdXQudHJpZ2dlcignY2xpY2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRpbnB1dC5mb2N1cygpO1xuICAgICAgICBsZXQgZmllbGRWYWwgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICRpbnB1dC52YWwoZmllbGRWYWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICAvLyB0b2dnbGUgZmllbGRzXG4gICRzdGFnZS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcudG9nZ2xlLWZvcm0sIC5jbG9zZS1maWVsZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICBsZXQgdGFyZ2V0SUQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpLmF0dHIoJ2lkJyk7XG4gICAgICBoZWxwZXJzLnRvZ2dsZUVkaXQodGFyZ2V0SUQpO1xuICAgICAgZS5oYW5kbGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgJHN0YWdlLm9uKCdjaGFuZ2UnLCAnW25hbWU9XCJzdWJ0eXBlXCJdJywgKGUpID0+IHtcbiAgICBjb25zdCAkZmllbGQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgY29uc3QgJHZhbFdyYXAgPSAkKCcudmFsdWUtd3JhcCcsICRmaWVsZCk7XG4gICAgJHZhbFdyYXAudG9nZ2xlKGUudGFyZ2V0LnZhbHVlICE9PSAncXVpbGwnKTtcbiAgfSk7XG5cbiAgJHN0YWdlLm9uKCdjaGFuZ2UnLCAnLnByZXYtaG9sZGVyIGlucHV0LCAucHJldi1ob2xkZXIgc2VsZWN0LCB0ZXh0YXJlYScsIGUgPT4ge1xuICAgIGxldCBwcmV2T3B0aW9ucztcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdGhlci1vcHRpb24nKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZmllbGQgPSB1dGlscy5jbG9zZXN0KGUudGFyZ2V0LCAnLmZvcm0tZmllbGQnKTtcbiAgICBpZiAodXRpbHMuaW5BcnJheShmaWVsZC50eXBlLCBbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgbGV0IG9wdGlvbnMgPSBmaWVsZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb24tdmFsdWUnKTtcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICB1dGlscy5mb3JFYWNoKG9wdGlvbnMsIGkgPT4ge1xuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnNbaV0ucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmNoZWNrZWQgPSBlLnRhcmdldC52YWx1ZSA9PT0gb3B0aW9uc1tpXS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGUudGFyZ2V0Lm5hbWUpO1xuICAgICAgICB1dGlscy5mb3JFYWNoKHByZXZPcHRpb25zLCBpID0+IHtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zW2ldLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5jaGVja2VkID0gcHJldk9wdGlvbnNbaV0uY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaWVsZFZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZS0nICsgZmllbGQuaWQpO1xuICAgICAgaWYoZmllbGRWYWwpIHtcbiAgICAgICAgZmllbGRWYWwudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcbiAgfSk7XG5cbiAgLy8gdXBkYXRlIHByZXZpZXcgdG8gbGFiZWxcbiAgdXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMoZC5zdGFnZSwgJ2tleXVwIGNoYW5nZScsIGUgPT4ge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGQtbGFiZWwnKSkgcmV0dXJuO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIHx8IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICBsZXQgbGFiZWwgPSB1dGlscy5jbG9zZXN0KGUudGFyZ2V0LCAnLmZvcm0tZmllbGQnKS5xdWVyeVNlbGVjdG9yKCcuZmllbGQtbGFiZWwnKTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSB1dGlscy5wYXJzZWRIdG1sKHZhbHVlKTtcbiAgfSk7XG5cbiAgLy8gcmVtb3ZlIGVycm9yIHN0eWxpbmcgd2hlbiB1c2VycyB0cmllcyB0byBjb3JyZWN0IG1pc3Rha2VcbiAgJHN0YWdlLm9uKCdrZXl1cCcsICdpbnB1dC5lcnJvcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSk7XG5cbiAgLy8gdXBkYXRlIHByZXZpZXcgZm9yIGRlc2NyaXB0aW9uXG4gICRzdGFnZS5vbigna2V5dXAnLCAnaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJywgZnVuY3Rpb24oZSkge1xuICAgIGxldCAkZmllbGQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgIGxldCBjbG9zZXN0VG9vbFRpcCA9ICQoJy50b29sdGlwLWVsZW1lbnQnLCAkZmllbGQpO1xuICAgIGxldCB0dFZhbCA9ICQoZS50YXJnZXQpLnZhbCgpO1xuICAgIGlmICh0dFZhbCAhPT0gJycpIHtcbiAgICAgIGlmICghY2xvc2VzdFRvb2xUaXAubGVuZ3RoKSB7XG4gICAgICAgIGxldCB0dCA9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke3R0VmFsfVwiPj88L3NwYW4+YDtcbiAgICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJGZpZWxkKS5hZnRlcih0dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZXN0VG9vbFRpcC5hdHRyKCd0b29sdGlwJywgdHRWYWwpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNsb3Nlc3RUb29sVGlwLmxlbmd0aCkge1xuICAgICAgICBjbG9zZXN0VG9vbFRpcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBtdWx0aXBsZSBzZWxlY3Qgb3B0aW9uc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGUgY2xpY2sgZXZlbnRcbiAgICogQHJldHVybiB7U3RyaW5nfSBuZXdUeXBlXG4gICAqL1xuICAkc3RhZ2Uub24oJ2NoYW5nZScsICcuZmxkLW11bHRpcGxlJywgZSA9PiB7XG4gICAgbGV0IG5ld1R5cGUgPSBlLnRhcmdldC5jaGVja2VkID8gJ2NoZWNrYm94JyA6ICdyYWRpbyc7XG4gICAgbGV0ICRvcHRpb25zID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWVsZW1lbnRzJykpO1xuICAgICRvcHRpb25zLmVhY2goaSA9PiAkb3B0aW9uc1tpXS50eXBlID0gbmV3VHlwZSk7XG4gICAgcmV0dXJuIG5ld1R5cGU7XG4gIH0pO1xuXG4gIC8vIGZvcm1hdCBuYW1lIGF0dHJpYnV0ZVxuICAkc3RhZ2Uub24oJ2JsdXInLCAnaW5wdXQuZmxkLW5hbWUnLCBmdW5jdGlvbihlKSB7XG4gICAgZS50YXJnZXQudmFsdWUgPSB1dGlscy5zYWZlbmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgJChlLnRhcmdldClcbiAgICAgIC5hZGRDbGFzcygnZmllbGQtZXJyb3InKVxuICAgICAgLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi5jYW5ub3RCZUVtcHR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2ZpZWxkLWVycm9yJyk7XG4gICAgfVxuICB9KTtcblxuICAkc3RhZ2Uub24oJ2JsdXInLCAnaW5wdXQuZmxkLW1heGxlbmd0aCcsIGUgPT4ge1xuICAgIGUudGFyZ2V0LnZhbHVlID0gdXRpbHMuZm9yY2VOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICB9KTtcblxuICAvLyBDb3B5IGZpZWxkXG4gICRzdGFnZS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuaWNvbi1jb3B5JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3VycmVudEl0ZW0gPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoJ2xpJyk7XG4gICAgbGV0ICRjbG9uZSA9IGNsb25lSXRlbShjdXJyZW50SXRlbSk7XG4gICAgJGNsb25lLmluc2VydEFmdGVyKGN1cnJlbnRJdGVtKTtcbiAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGNsb25lKTtcbiAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcbiAgfSk7XG5cbiAgLy8gRGVsZXRlIGZpZWxkXG4gICRzdGFnZS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuZGVsZXRlLWNvbmZpcm0nLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXG4gICAgICB9O1xuXG4gICAgbGV0IGRlbGV0ZUlEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgIGNvbnN0ICRmaWVsZCA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlSUQpKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsQ2xvc2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBzdXJlIHRoZXkgd2FudCB0byByZW1vdmUgdGhlIGZpZWxkXG4gICAgaWYgKG9wdHMuZmllbGRSZW1vdmVXYXJuKSB7XG4gICAgICBsZXQgd2FybkgzID0gdXRpbHMubWFya3VwKCdoMycsIGkxOG4ud2FybmluZyk7XG4gICAgICBsZXQgd2Fybk1lc3NhZ2UgPSB1dGlscy5tYXJrdXAoJ3AnLCBpMThuLmZpZWxkUmVtb3ZlV2FybmluZyk7XG4gICAgICBoZWxwZXJzLmNvbmZpcm0oW3dhcm5IMywgd2Fybk1lc3NhZ2VdLCAoKSA9PlxuICAgICAgICBoZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKSwgY29vcmRzKTtcbiAgICAgICRmaWVsZC5hZGRDbGFzcygnZGVsZXRpbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBVcGRhdGUgYnV0dG9uIHN0eWxlIHNlbGVjdGlvblxuICAkc3RhZ2Uub24oJ2NsaWNrJywgJy5zdHlsZS13cmFwIGJ1dHRvbicsIGUgPT4ge1xuICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcbiAgICBsZXQgc3R5bGVWYWwgPSAkYnV0dG9uLnZhbCgpO1xuICAgIGxldCAkYnRuU3R5bGUgPSAkYnV0dG9uLnBhcmVudCgpLnByZXYoJy5idG4tc3R5bGUnKTtcbiAgICAkYnRuU3R5bGUudmFsKHN0eWxlVmFsKTtcbiAgICAkYnV0dG9uLnNpYmxpbmdzKCcuYnRuJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgJGJ1dHRvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGJ0blN0eWxlLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykpO1xuICAgIGhlbHBlcnMuc2F2ZS5jYWxsKGhlbHBlcnMpO1xuICB9KTtcblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byB0b2dnbGUgcmVxdWlyZWQgYXN0ZXJpc2tcbiAgJHN0YWdlLm9uKCdjbGljaycsICcuZmxkLXJlcXVpcmVkJywgZSA9PiB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKS5maW5kKCcucmVxdWlyZWQtYXN0ZXJpc2snKS50b2dnbGUoKTtcbiAgfSk7XG5cbiAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJvbGVzIHZpc2liaWxpdHlcbiAgJHN0YWdlLm9uKCdjbGljaycsICdpbnB1dC5mbGQtYWNjZXNzJywgZnVuY3Rpb24oZSkge1xuICAgIGxldCByb2xlcyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykuZmluZCgnLmF2YWlsYWJsZS1yb2xlcycpO1xuICAgIGxldCBlbmFibGVSb2xlc0NCID0gJChlLnRhcmdldCk7XG4gICAgcm9sZXMuc2xpZGVUb2dnbGUoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghZW5hYmxlUm9sZXNDQi5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCByb2xlcykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byBhZGQgbmV3IG9wdGlvbnNcbiAgJHN0YWdlLm9uKCdjbGljaycsICcuYWRkLW9wdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0ICRvcHRpb25XcmFwID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmZpZWxkLW9wdGlvbnMnKTtcbiAgICBsZXQgJG11bHRpcGxlID0gJCgnW25hbWU9XCJtdWx0aXBsZVwiXScsICRvcHRpb25XcmFwKTtcbiAgICBsZXQgJGZpcnN0T3B0aW9uID0gJCgnLm9wdGlvbi1zZWxlY3RlZDplcSgwKScsICRvcHRpb25XcmFwKTtcbiAgICBsZXQgaXNNdWx0aXBsZSA9IGZhbHNlO1xuXG4gICAgaWYgKCRtdWx0aXBsZS5sZW5ndGgpIHtcbiAgICAgIGlzTXVsdGlwbGUgPSAkbXVsdGlwbGUucHJvcCgnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc011bHRpcGxlID0gKCRmaXJzdE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcpO1xuICAgIH1cblxuICAgIGxldCBuYW1lID0gJGZpcnN0T3B0aW9uLmF0dHIoJ25hbWUnKTtcblxuICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJG9wdGlvbldyYXApLmFwcGVuZChzZWxlY3RGaWVsZE9wdGlvbnMobmFtZSwgZmFsc2UsIGlzTXVsdGlwbGUpKTtcbiAgfSk7XG5cbiAgJHN0YWdlLm9uKCdtb3VzZW92ZXIgbW91c2VvdXQnLCAnLnJlbW92ZSwgLmRlbC1idXR0b24nLCBlID0+XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKS50b2dnbGVDbGFzcygnZGVsZXRlJykpO1xuXG4gIGxvYWRGaWVsZHMoKTtcblxuICAkc3RhZ2UuY3NzKCdtaW4taGVpZ2h0JywgJGNiVUwuaGVpZ2h0KCkpO1xuXG4gIC8vIElmIG9wdGlvbiBzZXQsIGNvbnRyb2xzIHdpbGwgcmVtYWluIGluIHZpZXcgaW4gZWRpdG9yXG4gIGlmIChvcHRzLnN0aWNreUNvbnRyb2xzLmVuYWJsZSkge1xuICAgIGhlbHBlcnMuc3RpY2t5Q29udHJvbHMoJHN0YWdlKTtcbiAgfVxuXG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmxvYWRlZCk7XG5cbiAgLy8gTWFrZSBhY3Rpb25zIGFjY2Vzc2libGVcbiAgZm9ybUJ1aWxkZXIuYWN0aW9ucyA9IHtcbiAgICBjbGVhckZpZWxkczogYW5pbWF0ZSA9PiBoZWxwZXJzLnJlbW92ZUFsbEZpZWxkcyhkLnN0YWdlLCBhbmltYXRlKSxcbiAgICBzaG93RGF0YTogKCkgPT4gaGVscGVycy5zaG93RGF0YS5jYWxsKGhlbHBlcnMpLFxuICAgIHNhdmU6IGhlbHBlcnMuc2F2ZSxcbiAgICBhZGRGaWVsZDogKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgaGVscGVycy5zdG9wSW5kZXggPSBkYXRhLmZvcm1EYXRhLmxlbmd0aCA/IGluZGV4IDogdW5kZWZpbmVkO1xuICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5maWVsZEFkZGVkKTtcbiAgICB9LFxuICAgIHJlbW92ZUZpZWxkOiBoZWxwZXJzLnJlbW92ZUZpZWxkLFxuICAgIGdldERhdGE6ICh0eXBlID0gJ2pzJykgPT4ge1xuICAgICAgY29uc3Qgc3RhZ2UgPSBkLnN0YWdlO1xuICAgICAgY29uc3QgaCA9IGhlbHBlcnM7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBqczogKCkgPT4gaC5wcmVwRGF0YShzdGFnZSksXG4gICAgICAgIHhtbDogKCkgPT4gaC54bWxTYXZlKHN0YWdlKSxcbiAgICAgICAganNvbjogKCkgPT4gd2luZG93LkpTT04uc3RyaW5naWZ5KGgucHJlcERhdGEoc3RhZ2UpLCBudWxsLCAnXFx0JylcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBkYXRhW3R5cGVdKCk7XG4gICAgfSxcbiAgICBzZXREYXRhOiBmb3JtRGF0YSA9PiB7XG4gICAgICBoZWxwZXJzLnJlbW92ZUFsbEZpZWxkcyhkLnN0YWdlLCBmYWxzZSk7XG4gICAgICBsb2FkRmllbGRzKGZvcm1EYXRhKTtcbiAgICB9LFxuICAgIHNldExhbmc6IGFzeW5jIGxvY2FsZSA9PiB7XG4gICAgICBhd2FpdCBtaTE4bi5zZXRDdXJyZW50LmNhbGwobWkxOG4sIGxvY2FsZSk7XG4gICAgICBkLmVtcHR5KGVsZW1lbnQpO1xuICAgICAgbGV0IGZvcm1CdWlsZGVyID0gbmV3IEZvcm1CdWlsZGVyKG9yaWdpbmFsT3B0cywgZWxlbWVudCk7XG4gICAgICAkKGVsZW1lbnQpLmRhdGEoJ2Zvcm1CdWlsZGVyJywgZm9ybUJ1aWxkZXIpO1xuICAgIH1cbiAgfTtcblxuICBmb3JtQnVpbGRlci5mb3JtRGF0YSA9IGRhdGEuZm9ybURhdGE7XG5cbiAgcmV0dXJuIGZvcm1CdWlsZGVyO1xufTtcblxuXG4oZnVuY3Rpb24oICQgKSB7XG4gICQuZm4uZm9ybUJ1aWxkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGxldCBlbGVtcyA9IHRoaXM7XG4gICAgbGV0IHtpMThuLCAuLi5vcHRzfSA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucywgdHJ1ZSk7XG4gICAgY29uZmlnLm9wdHMgPSBvcHRzO1xuICAgIGxldCBpMThuT3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0STE4biwgaTE4biwgdHJ1ZSk7XG4gICAgbGV0IGluc3RhbmNlID0ge1xuICAgICAgYWN0aW9uczoge1xuICAgICAgICBnZXREYXRhOiBudWxsLFxuICAgICAgICBzZXREYXRhOiBudWxsLFxuICAgICAgICBzYXZlOiBudWxsLFxuICAgICAgICBzaG93RGF0YTogbnVsbCxcbiAgICAgICAgc2V0TGFuZzogbnVsbCxcbiAgICAgICAgYWRkRmllbGQ6IG51bGwsXG4gICAgICAgIHJlbW92ZUZpZWxkOiBudWxsLFxuICAgICAgICBjbGVhckZpZWxkczogbnVsbFxuICAgICAgfSxcbiAgICAgIGZvcm1EYXRhOiBbXSxcbiAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBtaTE4bi5pbml0KGkxOG5PcHRzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBlbGVtcy5lYWNoKGkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1CdWlsZGVyID0gbmV3IEZvcm1CdWlsZGVyKG9wdHMsIGVsZW1zW2ldKTtcbiAgICAgICAgICAgICQoZWxlbXNbaV0pLmRhdGEoJ2Zvcm1CdWlsZGVyJywgZm9ybUJ1aWxkZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCBmYkluc3RhbmNlID0gJChlbGVtc1swXSkuZGF0YSgnZm9ybUJ1aWxkZXInKTtcbiAgICAgICAgICBpbnN0YW5jZS5hY3Rpb25zID0gZmJJbnN0YW5jZS5hY3Rpb25zO1xuICAgICAgICAgIGluc3RhbmNlLmZvcm1EYXRhID0gZmJJbnN0YW5jZS5mb3JtRGF0YTtcbiAgICAgICAgICBkZWxldGUgaW5zdGFuY2UucHJvbWlzZTtcbiAgICAgICAgICByZXNvbHZlKGluc3RhbmNlKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn0pKCBqUXVlcnkgKTtcbiIsImltcG9ydCB7aW5zdGFuY2VEb20sIGRlZmF1bHRTdWJ0eXBlcywgZW1wdHksIG9wdGlvbkZpZWxkc1JlZ0V4fSBmcm9tICcuL2RvbSc7XG5pbXBvcnQge2luc3RhbmNlRGF0YX0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuLy8gaW1wb3J0IG1pMThuIGZyb20gJ21pMThuJztcbmltcG9ydCBtaTE4biBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vc3JjL21pMThuLmpzJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IG9wdHMgPSBjb25maWcub3B0cztcbmNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG5cbi8qKlxuICogVXRpbGl0aWVzIHNwZWNpZmljIHRvIGZvcm0tYnVpbGRlci5qc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcbiAgLyoqXG4gICAqIFNldHVwIGRlZmF1bHRzLCBnZXQgaW5zdGFuY2UgZGF0YSBhbmQgZG9tXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZm9ybUlEIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0cnVjdG9yKGZvcm1JRCkge1xuICAgIHRoaXMuZGF0YSA9IGluc3RhbmNlRGF0YVtmb3JtSURdO1xuICAgIHRoaXMuZCA9IGluc3RhbmNlRG9tW2Zvcm1JRF07XG4gICAgdGhpcy5kb0NhbmNlbCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBiZWdpbnNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqL1xuICBzdGFydE1vdmluZyhldmVudCwgdWkpIHtcbiAgICB1aS5pdGVtLnNob3coKS5hZGRDbGFzcygnbW92aW5nJyk7XG4gICAgLy8gdGhpcy5kLnN0YXJ0SW5kZXggPSAkKCdsaScsIHRoaXMpLmluZGV4KHVpLml0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBlbmRzXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKi9cbiAgc3RvcE1vdmluZyhldmVudCwgdWkpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ21vdmluZycpO1xuICAgIGlmIChfdGhpcy5kb0NhbmNlbCkge1xuICAgICAgaWYgKHVpLnNlbmRlcikge1xuICAgICAgICAkKHVpLnNlbmRlcikuc29ydGFibGUoJ2NhbmNlbCcpO1xuICAgICAgfVxuICAgICAgdWkuaXRlbS5wYXJlbnQoKS5zb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgfVxuICAgIF90aGlzLnNhdmUoKTtcbiAgICBfdGhpcy5kb0NhbmNlbCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGpRdWVyeSBVSSBzb3J0YWJsZSBiZWZvcmVTdG9wIGNhbGxiYWNrIHVzZWQgZm9yIGJvdGggbGlzdHMuXG4gICAqIExvZ2ljIGZvciBjYW5jZWxpbmcgdGhlIHNvcnQgb3IgZHJvcC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBiZWZvcmVTdG9wKGV2ZW50LCB1aSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3Qgb3B0cyA9IGNvbmZpZy5vcHRzO1xuICAgIGNvbnN0IGZvcm0gPSBfdGhpcy5kLnN0YWdlO1xuICAgIGxldCBsYXN0SW5kZXggPSBmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG4gICAgX3RoaXMuc3RvcEluZGV4ID0gdWkucGxhY2Vob2xkZXIuaW5kZXgoKSAtIDE7XG5cbiAgICBpZiAoIW9wdHMuc29ydGFibGVDb250cm9scyAmJiB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCdmcm1iLWNvbnRyb2wnKSkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKF90aGlzLnN0b3BJbmRleCA9PT0gMCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKChfdGhpcy5zdG9wSW5kZXggKyAxKSA9PT0gbGFzdEluZGV4KTtcbiAgICB9XG5cbiAgICBfdGhpcy5kb0NhbmNlbCA9IGNhbmNlbEFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIGdldCBlbGVtZW50IHR5cGUgYW5kIHN1YnR5cGVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAkZmllbGRcbiAgICogQHJldHVybiB7T2JqZWN0fSB7dHlwZTogJ2ZpZWxkVHlwZScsIHN1YnR5cGU6ICdmaWVsZFN1YlR5cGUnfVxuICAgKi9cbiAgZ2V0VHlwZXMoJGZpZWxkKSB7XG4gICAgbGV0IHR5cGVzID0ge1xuICAgICAgICB0eXBlOiAkZmllbGQuYXR0cigndHlwZScpXG4gICAgICB9O1xuICAgIGxldCBzdWJ0eXBlID0gJCgnLmZsZC1zdWJ0eXBlJywgJGZpZWxkKS52YWwoKTtcblxuICAgIGlmIChzdWJ0eXBlICE9PSB0eXBlcy50eXBlKSB7XG4gICAgICB0eXBlcy5zdWJ0eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9wdGlvbiBkYXRhIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgalF1ZXJ5IGZpZWxkIG9iamVjdFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIEFycmF5IG9mIG9wdGlvbiB2YWx1ZXNcbiAgICovXG4gIGZpZWxkT3B0aW9uRGF0YShmaWVsZCkge1xuICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0ICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSAkKCcub3B0aW9uLXNlbGVjdGVkJywgJG9wdGlvbikuaXMoJzpjaGVja2VkJyk7XG4gICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgbGFiZWw6ICQoJy5vcHRpb24tbGFiZWwnLCAkb3B0aW9uKS52YWwoKSxcbiAgICAgICAgICB2YWx1ZTogJCgnLm9wdGlvbi12YWx1ZScsICRvcHRpb24pLnZhbCgpXG4gICAgICAgIH07XG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBhdHRycy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnB1c2goYXR0cnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogWE1MIHNhdmVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmb3JtIHNvcnRhYmxlRmllbGRzIG5vZGVcbiAgICogQHJldHVybiB7U3RyaW5nfSB4bWwgaW4gc3RyaW5nXG4gICAqL1xuICB4bWxTYXZlKGZvcm0pIHtcbiAgICBsZXQgZm9ybURhdGEgPSB0aGlzLnByZXBEYXRhKGZvcm0pO1xuICAgIGxldCB4bWwgPSBbJzxmb3JtLXRlbXBsYXRlPlxcblxcdDxmaWVsZHM+J107XG5cbiAgICB1dGlscy5mb3JFYWNoKGZvcm1EYXRhLCBmdW5jdGlvbihmaWVsZEluZGV4LCBmaWVsZCkge1xuICAgICAgbGV0IGZpZWxkQ29udGVudCA9IG51bGw7XG4gICAgICBjb25zdCBvcHRpb25GaWVsZHMgPSBvcHRpb25GaWVsZHNSZWdFeDtcblxuICAgICAgLy8gSGFuZGxlIG9wdGlvbnNcbiAgICAgIGlmIChmaWVsZC50eXBlLm1hdGNoKG9wdGlvbkZpZWxkcykpIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IG0oJ29wdGlvbicsIG9wdGlvbkRhdGFbaV0ubGFiZWwsIG9wdGlvbkRhdGFbaV0pLm91dGVySFRNTDtcbiAgICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdFxcdCcgKyBvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucHVzaCgnXFxuXFx0XFx0Jyk7XG5cbiAgICAgICAgZmllbGRDb250ZW50ID0gb3B0aW9ucy5qb2luKCcnKTtcbiAgICAgICAgZGVsZXRlIGZpZWxkLnZhbHVlcztcbiAgICAgIH1cblxuICAgICAgbGV0IHhtbEZpZWxkID0gbSgnZmllbGQnLCBmaWVsZENvbnRlbnQsIGZpZWxkKTtcbiAgICAgIHhtbC5wdXNoKCdcXG5cXHRcXHQnICsgeG1sRmllbGQub3V0ZXJIVE1MKTtcbiAgICB9KTtcblxuICAgIHhtbC5wdXNoKCdcXG5cXHQ8L2ZpZWxkcz5cXG48L2Zvcm0tdGVtcGxhdGU+Jyk7XG5cbiAgICByZXR1cm4geG1sLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBmb3JtRGF0YSBmcm9tIGVkaXRvciBpbiBKUyBPYmplY3QgZm9ybWF0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybSBha2Egc3RhZ2UsIERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gZm9ybURhdGFcbiAgICovXG4gIHByZXBEYXRhKGZvcm0pIHtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcbiAgICBsZXQgZCA9IHRoaXMuZDtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIGJ1aWxkIGRhdGEgb2JqZWN0XG4gICAgICB1dGlscy5mb3JFYWNoKGZvcm0uY2hpbGROb2RlcywgYXN5bmMgZnVuY3Rpb24oaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGxldCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICBpZiAoISgkZmllbGQuaGFzQ2xhc3MoJ2Rpc2FibGVkLWZpZWxkJykpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IF90aGlzLmdldFR5cGVzKCRmaWVsZCk7XG4gICAgICAgICAgbGV0IHJvbGVWYWxzID0gJCgnLnJvbGVzLWZpZWxkOmNoZWNrZWQnLCBmaWVsZCkubWFwKGVsZW0gPT4gZWxlbS52YWx1ZSkuZ2V0KCk7XG5cbiAgICAgICAgICBfdGhpcy5zZXRBdHRyVmFscyhmaWVsZCwgZmllbGREYXRhKTtcblxuICAgICAgICAgIGlmIChmaWVsZERhdGEuc3VidHlwZSkge1xuICAgICAgICAgICAgaWYgKGZpZWxkRGF0YS5zdWJ0eXBlID09PSAncXVpbGwnKSB7XG4gICAgICAgICAgICAgIGxldCBpZCA9IGAke2ZpZWxkRGF0YS5uYW1lfS1wcmV2aWV3YDtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbaWRdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gd2luZG93LmZiRWRpdG9ycy5xdWlsbFtpZF0uaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGluc3RhbmNlLmdldENvbnRlbnRzKCk7XG4gICAgICAgICAgICAgICAgZmllbGREYXRhLnZhbHVlID0gd2luZG93LkpTT04uc3RyaW5naWZ5KGRhdGEub3BzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKGZpZWxkRGF0YS5zdWJ0eXBlID09PSAndGlueW1jZScgJiYgd2luZG93LnRpbnltY2UpIHtcbiAgICAgICAgICAgICAgbGV0IGlkID0gYCR7ZmllbGREYXRhLm5hbWV9LXByZXZpZXdgO1xuICAgICAgICAgICAgICBpZiAod2luZG93LnRpbnltY2UuZWRpdG9yc1tpZF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgZWRpdG9yID0gd2luZG93LnRpbnltY2UuZWRpdG9yc1tpZF07XG4gICAgICAgICAgICAgICAgZmllbGREYXRhLnZhbHVlID0gZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyb2xlVmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5yb2xlID0gcm9sZVZhbHMuam9pbignLCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YS5jbGFzc05hbWUgPSBmaWVsZERhdGEuY2xhc3NOYW1lIHx8IGZpZWxkRGF0YS5jbGFzcztcblxuICAgICAgICAgIGxldCBtYXRjaCA9IC8oPzpefFxccylidG4tKC4qPykoPzpcXHN8JCkvZy5leGVjKGZpZWxkRGF0YS5jbGFzc05hbWUpO1xuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgZmllbGREYXRhLnN0eWxlID0gbWF0Y2hbMV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGREYXRhID0gdXRpbHMudHJpbU9iaihmaWVsZERhdGEpO1xuXG4gICAgICAgICAgbGV0IG11bHRpcGxlRmllbGQgPSBmaWVsZERhdGEudHlwZS5tYXRjaChkLm9wdGlvbkZpZWxkc1JlZ0V4KTtcblxuICAgICAgICAgIGlmIChtdWx0aXBsZUZpZWxkKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gX3RoaXMuZmllbGRPcHRpb25EYXRhKCRmaWVsZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuZCBzZXQgdGhlIGRhdGEgZm9yIGFuIGVkaXRvci4gTWFpbmx5XG4gICAqIGEgd3JhcHBlciBmb3IgaGFuZGxpbmcgZGF0YVR5cGUgb3B0aW9uXG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybiB7T2JqZWN0fSBmb3JtRGF0YVxuICAgKi9cbiAgZ2V0RGF0YShmb3JtRGF0YSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGlmICghZm9ybURhdGEpIHtcbiAgICAgIGZvcm1EYXRhID0gY29uZmlnLm9wdHMuZm9ybURhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzZXREYXRhID0ge1xuICAgICAgeG1sOiBmb3JtRGF0YSA9PiB1dGlscy5wYXJzZVhNTChmb3JtRGF0YSksXG4gICAgICBqc29uOiBmb3JtRGF0YSA9PiB3aW5kb3cuSlNPTi5wYXJzZShmb3JtRGF0YSlcbiAgICB9O1xuXG4gICAgZGF0YS5mb3JtRGF0YSA9IHNldERhdGFbY29uZmlnLm9wdHMuZGF0YVR5cGVdKGZvcm1EYXRhKSB8fCBbXTtcblxuICAgIHJldHVybiBkYXRhLmZvcm1EYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGFuZCByZXR1cm5zIGZvcm1EYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGFnZSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtYTUx8SlNPTn0gZm9ybURhdGFcbiAgICovXG4gIHNhdmUoc3RhZ2UpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGlmKCFzdGFnZSkge1xuICAgICAgc3RhZ2UgPSB0aGlzLmQuc3RhZ2U7XG4gICAgfVxuICAgIGxldCBkb1NhdmUgPSB7XG4gICAgICB4bWw6IF90aGlzLnhtbFNhdmUsXG4gICAgICBqc29uOiAoKSA9PlxuICAgICAgd2luZG93LkpTT04uc3RyaW5naWZ5KF90aGlzLnByZXBEYXRhKHN0YWdlKSwgbnVsbCwgJ1xcdCcpXG4gICAgfTtcblxuICAgIC8vIHNhdmUgYWN0aW9uIGZvciBjdXJyZW50IGBkYXRhVHlwZWBcbiAgICBkYXRhLmZvcm1EYXRhID0gZG9TYXZlW2NvbmZpZy5vcHRzLmRhdGFUeXBlXShzdGFnZSk7XG5cbiAgICAvLyB0cmlnZ2VyIGZvcm1TYXZlZCBldmVudFxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmZvcm1TYXZlZCk7XG4gICAgcmV0dXJuIGRhdGEuZm9ybURhdGE7XG4gIH1cblxuICAvKipcbiAgICogaW5jcmVtZW50cyB0aGUgZmllbGQgaWRzIHdpdGggc3VwcG9ydCBmb3IgbXVsdGlwbGUgZWRpdG9yc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGZpZWxkIElEXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgaW5jcmVtZW50ZWQgZmllbGQgSURcbiAgICovXG4gIGluY3JlbWVudElkKGlkKSB7XG4gICAgbGV0IHNwbGl0ID0gaWQubGFzdEluZGV4T2YoJy0nKTtcbiAgICBsZXQgbmV3RmllbGROdW1iZXIgPSBwYXJzZUludChpZC5zdWJzdHJpbmcoc3BsaXQgKyAxKSkgKyAxO1xuICAgIGxldCBiYXNlU3RyaW5nID0gaWQuc3Vic3RyaW5nKDAsIHNwbGl0KTtcblxuICAgIHJldHVybiBgJHtiYXNlU3RyaW5nfS0ke25ld0ZpZWxkTnVtYmVyfWA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB2YWx1ZXMgZm9yIGZpZWxkIGF0dHJpYnV0ZXMgaW4gdGhlIGVkaXRvclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGRcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkRGF0YVxuICAgKi9cbiAgc2V0QXR0clZhbHMoZmllbGQsIGZpZWxkRGF0YSkge1xuICAgIGxldCBhdHRycyA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJmbGQtXCJdJyk7XG4gICAgYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIGxldCB2YWx1ZTtcbiAgICAgIGxldCBuYW1lID0gdXRpbHMuY2FtZWxDYXNlKGF0dHIuZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgICAgaWYgKGF0dHIuYXR0cmlidXRlc1snY29udGVudGVkaXRhYmxlJ10pIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyLmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSBpZiAoYXR0ci50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHZhbHVlID0gYXR0ci5jaGVja2VkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgfVxuICAgICAgZmllbGREYXRhW25hbWVdID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdCBmaWVsZCBhdHRyaWJ1dGUgdmFsdWVzIGFuZCBjYWxsIGZpZWxkUHJldmlldyB0byBnZW5lcmF0ZSBwcmV2aWV3XG4gICAqIEBwYXJhbSAge09iamVjdH0gJGZpZWxkIGpRdWVyeSBET00gZWxlbWVudFxuICAgKi9cbiAgdXBkYXRlUHJldmlldygkZmllbGQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBkID0gdGhpcy5kO1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSAkZmllbGQuYXR0cignY2xhc3MnKTtcbiAgICBsZXQgZmllbGQgPSAkZmllbGRbMF07XG4gICAgaWYgKGZpZWxkQ2xhc3MuaW5kZXhPZignaW5wdXQtY29udHJvbCcpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaWVsZFR5cGUgPSAkZmllbGQuYXR0cigndHlwZScpO1xuICAgIGxldCAkcHJldkhvbGRlciA9ICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkKTtcbiAgICBsZXQgcHJldmlld0RhdGEgPSB7XG4gICAgICB0eXBlOiBmaWVsZFR5cGVcbiAgICB9O1xuICAgIGxldCBwcmV2aWV3O1xuXG4gICAgX3RoaXMuc2V0QXR0clZhbHMoZmllbGQsIHByZXZpZXdEYXRhKTtcblxuICAgIGxldCBzdHlsZSA9ICQoJy5idG4tc3R5bGUnLCBmaWVsZCkudmFsKCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goZC5vcHRpb25GaWVsZHNSZWdFeCkpIHtcbiAgICAgIHByZXZpZXdEYXRhLnZhbHVlcyA9IFtdO1xuICAgICAgcHJldmlld0RhdGEubXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgZmllbGQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKGksICRvcHRpb24pIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHt9O1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAkKCcub3B0aW9uLXNlbGVjdGVkJywgJG9wdGlvbikuaXMoJzpjaGVja2VkJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9ICQoJy5vcHRpb24tdmFsdWUnLCAkb3B0aW9uKS52YWwoKTtcbiAgICAgICAgb3B0aW9uLmxhYmVsID0gJCgnLm9wdGlvbi1sYWJlbCcsICRvcHRpb24pLnZhbCgpO1xuICAgICAgICBwcmV2aWV3RGF0YS52YWx1ZXMucHVzaChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJldmlld0RhdGEgPSB1dGlscy50cmltT2JqKHByZXZpZXdEYXRhKTtcblxuICAgIHByZXZpZXdEYXRhLmNsYXNzTmFtZSA9IF90aGlzLmNsYXNzTmFtZXMoZmllbGQsIHByZXZpZXdEYXRhKTtcbiAgICAkKCcuZmxkLWNsYXNzTmFtZScsIGZpZWxkKS52YWwocHJldmlld0RhdGEuY2xhc3NOYW1lKTtcblxuICAgICRmaWVsZC5kYXRhKCdmaWVsZERhdGEnLCBwcmV2aWV3RGF0YSk7XG4gICAgcHJldmlldyA9IHV0aWxzLmdldFRlbXBsYXRlKHByZXZpZXdEYXRhLCB0cnVlKTtcblxuICAgIGVtcHR5KCRwcmV2SG9sZGVyWzBdKTtcbiAgICAkcHJldkhvbGRlclswXS5hcHBlbmRDaGlsZChwcmV2aWV3KTtcbiAgICBwcmV2aWV3LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmZpZWxkUmVuZGVyZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgYSBjdXN0b20gdG9vbHRpcCBmb3IgZGlzYWJsZWQgZmllbGRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkXG4gICAqL1xuICBkaXNhYmxlZFRUKHN0YWdlKSB7XG4gICAgY29uc3QgbW92ZSA9IChlLCBlbGVtKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZE9mZnNldCA9IGVsZW0uZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gZmllbGRPZmZzZXQubGVmdCAtIDIxO1xuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGZpZWxkT2Zmc2V0LnRvcCAtIGVsZW0udHQub2Zmc2V0SGVpZ2h0IC0gMTI7XG4gICAgICBlbGVtLnR0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcbiAgICB9O1xuXG4gICAgc3RhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmRpc2FibGVkLWZpZWxkJykuZm9yRWFjaChcbiAgICAgIGZpZWxkID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gb3B0cy5tZXNzYWdlcy5maWVsZE5vbkVkaXRhYmxlO1xuXG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgIGxldCB0dCA9IHV0aWxzLm1hcmt1cCgncCcsIHRpdGxlLCB7Y2xhc3NOYW1lOiAnZnJtYi10dCd9KTtcbiAgICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZCh0dCk7XG4gICAgICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiBtb3ZlKGUsIHt0dCwgZmllbGR9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgY2xhc3NOYW1lcyBmb3IgZmllbGRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHByZXZpZXdEYXRhXG4gICAqIEByZXR1cm4ge1N0cmluZ30gY2xhc3NOYW1lc1xuICAgKi9cbiAgY2xhc3NOYW1lcyhmaWVsZCwgcHJldmlld0RhdGEpIHtcbiAgICBsZXQgaTtcbiAgICBsZXQgdHlwZSA9IHByZXZpZXdEYXRhLnR5cGU7XG4gICAgbGV0IHN0eWxlID0gcHJldmlld0RhdGEuc3R5bGU7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJy5mbGQtY2xhc3NOYW1lJykudmFsdWU7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBsZXQgdHlwZXMgPSB7XG4gICAgICBidXR0b246ICdidG4nLFxuICAgICAgc3VibWl0OiAnYnRuJ1xuICAgIH07XG5cbiAgICBsZXQgcHJpbWFyeVR5cGUgPSB0eXBlc1t0eXBlXTtcblxuICAgIGlmIChwcmltYXJ5VHlwZSkge1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChgKD86XnxcXHMpJHtwcmltYXJ5VHlwZX0tKC4qPykoPzpcXHN8JCkrYCwgJ2cnKTtcbiAgICAgICAgICBsZXQgbWF0Y2ggPSBjbGFzc2VzW2ldLm1hdGNoKHJlKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbGFzc2VzLnB1c2gocHJpbWFyeVR5cGUgKyAnLScgKyBzdHlsZSk7XG4gICAgICB9XG4gICAgICBjbGFzc2VzLnB1c2gocHJpbWFyeVR5cGUpO1xuICAgIH1cblxuICAgIC8vIHJldmVyc2UgdGhlIGFycmF5IHRvIHB1dCBjdXN0b20gY2xhc3NlcyBhdCBlbmQsXG4gICAgLy8gcmVtb3ZlIGFueSBkdXBsaWNhdGVzLCBjb252ZXJ0IHRvIHN0cmluZywgcmVtb3ZlIHdoaXRlc3BhY2VcbiAgICByZXR1cm4gdXRpbHMudW5pcXVlKGNsYXNzZXMpLmpvaW4oJyAnKS50cmltKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuZCBvcGVuIGRpYWxvZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG92ZXJsYXkgRXhpc3Rpbmcgb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBkaWFsb2cgIEV4aXN0aW5nIGRpYWxvZ1xuICAgKi9cbiAgY2xvc2VDb25maXJtKG92ZXJsYXksIGRpYWxvZykge1xuICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tYnVpbGRlci1vdmVybGF5JylbMF07XG4gICAgfVxuICAgIGlmICghZGlhbG9nKSB7XG4gICAgICBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItZGlhbG9nJylbMF07XG4gICAgfVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLm1vZGFsQ2xvc2VkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXlvdXQgZGF0YSBiYXNlZCBvbiBjb250cm9sUG9zaXRpb24gb3B0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gY29udHJvbFBvc2l0aW9uICdsZWZ0JyBvciAncmlnaHQnXG4gICAqIEByZXR1cm4ge09iamVjdH0gbGF5b3V0IG9iamVjdFxuICAgKi9cbiAgZWRpdG9yTGF5b3V0KGNvbnRyb2xQb3NpdGlvbikge1xuICAgIGxldCBsYXlvdXRNYXAgPSB7XG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1yaWdodCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1sZWZ0J1xuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1sZWZ0JyxcbiAgICAgICAgY29udHJvbHM6ICdwdWxsLXJpZ2h0J1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gPyBsYXlvdXRNYXBbY29udHJvbFBvc2l0aW9uXSA6ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgb3ZlcmxheSB0byB0aGUgcGFnZS4gVXNlZCBmb3IgbW9kYWxzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IERPTSBPYmplY3RcbiAgICovXG4gIHNob3dPdmVybGF5KCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBsZXQgb3ZlcmxheSA9IHV0aWxzLm1hcmt1cCgnZGl2JywgbnVsbCwge1xuICAgICAgY2xhc3NOYW1lOiAnZm9ybS1idWlsZGVyLW92ZXJsYXknXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIG92ZXJsYXkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXN0b20gY29uZmlybWF0aW9uIGRpYWxvZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBtZXNzYWdlICAgQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gIHtGdW5jfSAgeWVzQWN0aW9uIGNhbGxiYWNrIHRvIGZpcmUgaWYgdGhleSBjb25maXJtXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGNvb3JkcyAgICBsb2NhdGlvbiB0byBwdXQgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWUgQ3VzdG9tIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBkaWFsb2dcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIFJlZmVyZW5jZSB0byB0aGUgbW9kYWxcbiAgICovXG4gIGNvbmZpcm0obWVzc2FnZSwgeWVzQWN0aW9uLCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGkxOG4gPSBtaTE4bi5jdXJyZW50O1xuICAgIGxldCBvdmVybGF5ID0gX3RoaXMuc2hvd092ZXJsYXkoKTtcbiAgICBsZXQgeWVzID0gbSgnYnV0dG9uJywgaTE4bi55ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3llcyBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtJ1xuICAgIH0pO1xuICAgIGxldCBubyA9IG0oJ2J1dHRvbicsIGkxOG4ubm8sIHtcbiAgICAgIGNsYXNzTmFtZTogJ25vIGJ0biBidG4tZGFuZ2VyIGJ0bi1zbSdcbiAgICB9KTtcblxuICAgIG5vLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgeWVzLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHllc0FjdGlvbigpO1xuICAgICAgX3RoaXMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICBsZXQgYnRuV3JhcCA9IG0oJ2RpdicsIFtubywgeWVzXSwge2NsYXNzTmFtZTogJ2J1dHRvbi13cmFwJ30pO1xuXG4gICAgY2xhc3NOYW1lID0gJ2Zvcm0tYnVpbGRlci1kaWFsb2cgJyArIGNsYXNzTmFtZTtcblxuICAgIGxldCBtaW5pTW9kYWwgPSBtKCdkaXYnLCBbbWVzc2FnZSwgYnRuV3JhcF0sIHtjbGFzc05hbWV9KTtcbiAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgY29uc3QgZEUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChkRS5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgLyAyLFxuICAgICAgICBwYWdlWTogTWF0aC5tYXgoZEUuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgLyAyXG4gICAgICB9O1xuICAgICAgbWluaU1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWluaU1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcbiAgICB9XG5cbiAgICBtaW5pTW9kYWwuc3R5bGUubGVmdCA9IGNvb3Jkcy5wYWdlWCArICdweCc7XG4gICAgbWluaU1vZGFsLnN0eWxlLnRvcCA9IGNvb3Jkcy5wYWdlWSArICdweCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1pbmlNb2RhbCk7XG5cbiAgICB5ZXMuZm9jdXMoKTtcbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvcHVwIGRpYWxvZyB0aGUgZG9lcyBub3QgcmVxdWlyZSBjb25maXJtYXRpb24uXG4gICAqIEBwYXJhbSAge1N0cmluZ3xET018QXJyYXl9ICBjb250ZW50XG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGNvb3JkcyAgICBmYWxzZSBpZiBubyBjb29yZHMgYXJlIHByb3ZpZGVkLiBXaXRob3V0IGNvb3JkaW5hdGVzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgY2VudGVyIHNjcmVlbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIGNsYXNzbmFtZSB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBkb21cbiAgICovXG4gIGRpYWxvZyhjb250ZW50LCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGNsaWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGxldCBjbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIF90aGlzLnNob3dPdmVybGF5KCk7XG5cbiAgICBjbGFzc05hbWUgPSAnZm9ybS1idWlsZGVyLWRpYWxvZyAnICsgY2xhc3NOYW1lO1xuXG4gICAgbGV0IG1pbmlNb2RhbCA9IHV0aWxzLm1hcmt1cCgnZGl2JywgY29udGVudCwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChjbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLm1vZGFsT3BlbmVkKTtcblxuICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignZGF0YS1kaWFsb2cnKSAhPT0gLTEpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLnZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpcm0gYWxsIGZpZWxkcyB3aWxsIGJlIHJlbW92ZWQgdGhlbiByZW1vdmUgdGhlbVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGUgY2xpY2sgZXZlbnQgb2JqZWN0XG4gICAqL1xuICBjb25maXJtUmVtb3ZlQWxsKGUpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBmb3JtSUQgPSBlLnRhcmdldC5pZC5tYXRjaCgvZnJtYi1cXGR7MTN9LylbMF07XG4gICAgbGV0IHN0YWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlEKTtcbiAgICBsZXQgaTE4biA9IG1pMThuLmN1cnJlbnQ7XG4gICAgbGV0IGZpZWxkcyA9ICQoJ2xpLmZvcm0tZmllbGQnLCBzdGFnZSk7XG4gICAgbGV0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgY29vcmRzID0ge1xuICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXG4gICAgfTtcblxuICAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XG4gICAgICBfdGhpcy5jb25maXJtKGkxOG4uY2xlYXJBbGxNZXNzYWdlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMucmVtb3ZlQWxsRmllbGRzLmNhbGwoX3RoaXMsIHN0YWdlKTtcbiAgICAgICAgY29uZmlnLm9wdHMubm90aWZ5LnN1Y2Nlc3MoaTE4bi5hbGxGaWVsZHNSZW1vdmVkKTtcbiAgICAgICAgY29uZmlnLm9wdHMub25DbGVhckFsbCgpO1xuICAgICAgfSwgY29vcmRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMuZGlhbG9nKGkxOG4ubm9GaWVsZHNUb0NsZWFyLCBjb29yZHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBmaWVsZHMgZnJvbSB0aGUgZm9ybVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGFuaW1hdGUgd2hldGhlciB0byBhbmltYXRlIG9yIG5vdFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVtb3ZlQWxsRmllbGRzKHN0YWdlLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGkxOG4gPSBtaTE4bi5jdXJyZW50O1xuICAgIGxldCBvcHRzID0gY29uZmlnLm9wdHM7XG4gICAgbGV0IGZpZWxkcyA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmZvcm0tZmllbGQnKTtcbiAgICBsZXQgbWFya0VtcHR5QXJyYXkgPSBbXTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIG1hcmtFbXB0eUFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmICghbWFya0VtcHR5QXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICBzdGFnZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICBzdGFnZS5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY29udGVudCA9IGkxOG4uZ2V0U3RhcnRlZDtcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgc3RhZ2UuY2xhc3NMaXN0LmFkZCgncmVtb3ZpbmcnKTtcbiAgICAgIGxldCBvdXRlckhlaWdodCA9IDA7XG4gICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBvdXRlckhlaWdodCArPSBmaWVsZC5vZmZzZXRIZWlnaHQgKyAzKTtcbiAgICAgIGZpZWxkc1swXS5zdHlsZS5tYXJnaW5Ub3AgPSBgJHstb3V0ZXJIZWlnaHR9cHhgO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVtcHR5KHN0YWdlKS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmluZycpO1xuICAgICAgICBfdGhpcy5zYXZlKHN0YWdlKTtcbiAgICAgIH0sIDQwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtcHR5KHN0YWdlKTtcbiAgICAgIF90aGlzLnNhdmUoc3RhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHJlLW9yZGVycyB0aGUgZWxlbWVudHMgdGhlaXIgb3JkZXIgc2hvdWxkIGJlIHNhdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGNiVUwgb3VyIGxpc3Qgb2YgZWxlbWVudHNcbiAgICovXG4gIHNldEZpZWxkT3JkZXIoJGNiVUwpIHtcbiAgICBpZiAoIW9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgZmllbGRPcmRlciA9IHt9O1xuICAgICRjYlVMLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgZmllbGRPcmRlcltpbmRleF0gPSAkKGVsZW1lbnQpLmRhdGEoJ2F0dHJzJykudHlwZTtcbiAgICB9KTtcbiAgICBpZiAod2luZG93LnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZmllbGRPcmRlcicsIHdpbmRvdy5KU09OLnN0cmluZ2lmeShmaWVsZE9yZGVyKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlb3JkZXIgdGhlIGNvbnRyb2xzIGlmIHRoZSB1c2VyIGhhcyBwcmV2aW91c2x5IG9yZGVyZWQgdGhlbS5cbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGZybWJGaWVsZHNcbiAgICogQHJldHVybiB7QXJyYXl9IG9yZGVyZWQgZmllbGRzXG4gICAqL1xuICBvcmRlckZpZWxkcyhmcm1iRmllbGRzKSB7XG4gICAgY29uc3Qgb3B0cyA9IGNvbmZpZy5vcHRzO1xuICAgIGxldCBmaWVsZE9yZGVyID0gZmFsc2U7XG4gICAgbGV0IG5ld09yZGVyRmllbGRzID0gW107XG5cbiAgICBpZiAod2luZG93LnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICBpZiAob3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICAgIGZpZWxkT3JkZXIgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZmllbGRPcmRlcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkT3JkZXIpIHtcbiAgICAgIGxldCBjb250cm9sT3JkZXIgPSBvcHRzLmNvbnRyb2xPcmRlci5jb25jYXQoZnJtYkZpZWxkcy5tYXAoZmllbGQgPT5cbiAgICAgICAgZmllbGQuYXR0cnMudHlwZSkpO1xuICAgICAgZmllbGRPcmRlciA9IHV0aWxzLnVuaXF1ZShjb250cm9sT3JkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZE9yZGVyID0gd2luZG93LkpTT04ucGFyc2UoZmllbGRPcmRlcik7XG4gICAgICBmaWVsZE9yZGVyID0gT2JqZWN0LmtleXMoZmllbGRPcmRlcikubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkT3JkZXJbaV07XG4gICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZpZWxkT3JkZXIuZm9yRWFjaCgoZmllbGRUeXBlKSA9PiB7XG4gICAgICBsZXQgZmllbGQgPSBmcm1iRmllbGRzLmZpbHRlcihmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gZmllbGQuYXR0cnMudHlwZSA9PT0gZmllbGRUeXBlO1xuICAgICAgfSlbMF07XG4gICAgICBuZXdPcmRlckZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdPcmRlckZpZWxkcy5maWx0ZXIoQm9vbGVhbik7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgZmllbGRzIGJlaW5nIGVkaXRpbmdcbiAgICogQHBhcmFtICB7T2JqZWN0fSBzdGFnZVxuICAgKi9cbiAgY2xvc2VBbGxFZGl0KCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBmaWVsZHMgPSAkKCc+IGxpLmVkaXRpbmcnLCBfdGhpcy5kLnN0YWdlKTtcbiAgICBjb25zdCB0b2dnbGVCdG5zID0gJCgnLnRvZ2dsZS1mb3JtJywgX3RoaXMuZC5zdGFnZSk7XG4gICAgY29uc3QgZWRpdFBhbmVscyA9ICQoJy5mcm0taG9sZGVyJywgZmllbGRzKTtcblxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICBmaWVsZHMucmVtb3ZlQ2xhc3MoJ2VkaXRpbmcnKTtcbiAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZHMpLnNob3coKTtcbiAgICBlZGl0UGFuZWxzLmhpZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBlZGl0IG1vZGUgZm9yIHRoZSBnaXZlbiBmaWVsZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpZWxkSWRcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gYW5pbWF0ZVxuICAgKi9cbiAgdG9nZ2xlRWRpdChmaWVsZElkLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gJCgnLnRvZ2dsZS1mb3JtJywgZmllbGQpO1xuICAgIGNvbnN0IGVkaXRQYW5lbCA9ICQoJy5mcm0taG9sZGVyJywgZmllbGQpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcbiAgICB0b2dnbGVCdG4udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnNsaWRlVG9nZ2xlKDI1MCk7XG4gICAgICBlZGl0UGFuZWwuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnRvZ2dsZSgpO1xuICAgICAgZWRpdFBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXcoJChmaWVsZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIGZvbGxvdyBzY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBzdGlja3lDb250cm9scygpIHtcbiAgICBsZXQgZCA9IHRoaXMuZDtcbiAgICBjb25zdCAkY2JXcmFwID0gJChkLmNvbnRyb2xzKS5wYXJlbnQoKTtcbiAgICBjb25zdCAkc3RhZ2VXcmFwID0gJChkLnN0YWdlKS5wYXJlbnQoKTtcbiAgICBjb25zdCBjYldpZHRoID0gJGNiV3JhcC53aWR0aCgpO1xuICAgIGNvbnN0IGNiUG9zaXRpb24gPSBkLmNvbnRyb2xzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihldnQpIHtcbiAgICAgIGxldCBzY3JvbGxUb3AgPSAkKGV2dC50YXJnZXQpLnNjcm9sbFRvcCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0RGVmYXVsdHMgPSB7XG4gICAgICAgIHRvcDogNSxcbiAgICAgICAgYm90dG9tOiAnYXV0bycsXG4gICAgICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgICAgIGxlZnQ6IGNiUG9zaXRpb24ubGVmdFxuICAgICAgfTtcblxuICAgICAgbGV0IG9mZnNldCA9IE9iamVjdC5hc3NpZ24oe30sIG9mZnNldERlZmF1bHRzLCBjb25maWcub3B0cy5zdGlja3lDb250cm9scy5vZmZzZXQpO1xuXG4gICAgICBpZiAoc2Nyb2xsVG9wID4gJHN0YWdlV3JhcC5vZmZzZXQoKS50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgd2lkdGg6IGNiV2lkdGhcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjYlN0eWxlID0gT2JqZWN0LmFzc2lnbihzdHlsZSwgb2Zmc2V0KTtcblxuICAgICAgICBsZXQgY2JPZmZzZXQgPSAkY2JXcmFwLm9mZnNldCgpO1xuICAgICAgICBsZXQgc3RhZ2VPZmZzZXQgPSAkc3RhZ2VXcmFwLm9mZnNldCgpO1xuICAgICAgICBsZXQgY2JCb3R0b20gPSBjYk9mZnNldC50b3AgKyAkY2JXcmFwLmhlaWdodCgpO1xuICAgICAgICBsZXQgc3RhZ2VCb3R0b20gPSBzdGFnZU9mZnNldC50b3AgKyAkc3RhZ2VXcmFwLmhlaWdodCgpO1xuXG4gICAgICAgIGlmIChjYkJvdHRvbSA+IHN0YWdlQm90dG9tICYmIChjYk9mZnNldC50b3AgIT09IHN0YWdlT2Zmc2V0LnRvcCkpIHtcbiAgICAgICAgICAkY2JXcmFwLmNzcyh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBsZWZ0OiAnYXV0bydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYkJvdHRvbSA8IHN0YWdlQm90dG9tIHx8IChjYkJvdHRvbSA9PT0gc3RhZ2VCb3R0b20gJiYgY2JPZmZzZXQudG9wID4gc2Nyb2xsVG9wKSkge1xuICAgICAgICAgICRjYldyYXAuY3NzKGNiU3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkLmNvbnRyb2xzLnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBkaWFsb2cgd2l0aCB0aGUgZm9ybSdzIGRhdGFcbiAgICovXG4gIHNob3dEYXRhKGUpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gdXRpbHMuZXNjYXBlSHRtbChkYXRhLmZvcm1EYXRhKTtcbiAgICBjb25zdCBjb2RlID0gbSgnY29kZScsIGZvcm1EYXRhLCB7XG4gICAgICBjbGFzc05hbWU6IGBmb3JtRGF0YS0ke2NvbmZpZy5vcHRzLmRhdGFUeXBlfWBcbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nKG0oJ3ByZScsIGNvZGUpLCBudWxsLCAnZGF0YS1kaWFsb2cnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBmaWVsZCBmcm9tIHRoZSBzdGFnZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBmaWVsZElEIElEIG9mIHRoZSBmaWVsZCB0byBiZSByZW1vdmVkXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IGZpZWxkUmVtb3ZlZCByZXR1cm5zIHRydWUgaWYgZmllbGQgaXMgcmVtb3ZlZFxuICAgKi9cbiAgcmVtb3ZlRmllbGQoZmllbGRJRCkge1xuICAgIGxldCBmaWVsZFJlbW92ZWQgPSBmYWxzZTtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnN0IGZvcm0gPSB0aGlzLmQuc3RhZ2U7XG4gICAgY29uc3QgZmllbGRzID0gZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWZpZWxkJyk7XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gZmllbGRzIHRvIHJlbW92ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghZmllbGRJRCkge1xuICAgICAgbGV0IGF2YWlsYWJsZUlkcyA9IFtdLnNsaWNlLmNhbGwoZmllbGRzKS5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5pZDtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS53YXJuKCdmaWVsZElEIHJlcXVpcmVkIHRvIHJlbW92ZSBzcGVjaWZpYyBmaWVsZHMuIFJlbW92aW5nIGxhc3QgZmllbGQgc2luY2Ugbm8gSUQgd2FzIHN1cHBsaWVkLicpO1xuICAgICAgY29uc29sZS53YXJuKCdBdmFpbGFibGUgSURzOiAnICsgYXZhaWxhYmxlSWRzLmpvaW4oJywgJykpO1xuICAgICAgZmllbGRJRCA9IGZvcm0ubGFzdENoaWxkLmlkO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJRCk7XG4gICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgY29uc29sZS53YXJuKCdGaWVsZCBub3QgZm91bmQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAkZmllbGQuc2xpZGVVcCgyNTAsIGZ1bmN0aW9uKCkge1xuICAgICAgJGZpZWxkLnJlbW92ZUNsYXNzKCdkZWxldGluZycpO1xuICAgICAgJGZpZWxkLnJlbW92ZSgpO1xuICAgICAgZmllbGRSZW1vdmVkID0gdHJ1ZTtcbiAgICAgIF90aGlzLnNhdmUoKTtcbiAgICAgIGlmICghZm9ybS5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBsZXQgc3RhZ2VXcmFwID0gZm9ybS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgICAgc3RhZ2VXcmFwLmRhdGFzZXQuY29udGVudCA9IG1pMThuLmN1cnJlbnQuZ2V0U3RhcnRlZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmZpZWxkUmVtb3ZlZCk7XG4gICAgcmV0dXJuIGZpZWxkUmVtb3ZlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgZm9yIGZvcm0gYWN0aW9uIGJ1dHRvbnNcbiAgICogQHBhcmFtICB7T2JqZWN0fSBidXR0b25EYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIGVsZW1lbnQgZm9yIGFjdGlvbiBidXR0b25cbiAgICovXG4gIHByb2Nlc3NBY3Rpb25CdXR0b25zKGJ1dHRvbkRhdGEpIHtcbiAgICBsZXQge2xhYmVsLCBldmVudHMsIC4uLmF0dHJzfSA9IGJ1dHRvbkRhdGE7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICBsYWJlbCA9IGF0dHJzLmlkID8gdXRpbHMuY2FwaXRhbGl6ZShhdHRycy5pZCkgOiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWwgPSBtaTE4bi5jdXJyZW50W2xhYmVsXSB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoIWF0dHJzLmlkKSB7XG4gICAgICBhdHRycy5pZCA9IGAke2RhdGEuZm9ybUlEfS1hY3Rpb24tJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMTAwMCl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cnMuaWQgPSBgJHtkYXRhLmZvcm1JRH0tJHthdHRycy5pZH0tYWN0aW9uYDtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBtKCdidXR0b24nLCBsYWJlbCwgYXR0cnMpO1xuXG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgZm9yIChsZXQgZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9zcyBsaW5rIHN1YnR5cGVzIGFuZCBkZWZpbmUgbWFya3VwIGNvbmZpZ1xuICAgKiBAcGFyYW0gIHtBcnJheX0gc3VidHlwZU9wdHNcbiAgICogQHJldHVybiB7QXJyYXl9IHN1YnR5cGVzXG4gICAqL1xuICBwcm9jZXNzU3VidHlwZXMoc3VidHlwZU9wdHMpIHtcbiAgICBsZXQgc3VidHlwZXMgPSB7fTtcbiAgICBjb25zdCBzdWJ0eXBlRm9ybWF0ID0gc3VidHlwZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IG1pMThuLmdldChzdWJ0eXBlKSxcbiAgICAgICAgICB2YWx1ZTogc3VidHlwZVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLnN1YnR5cGVzID0gdXRpbHMubWVyZ2UoZGVmYXVsdFN1YnR5cGVzLCBzdWJ0eXBlT3B0cyk7XG5cbiAgICAgIGZvciAobGV0IHN1YnR5cGUgaW4gY29uZmlnLnN1YnR5cGVzKSB7XG4gICAgICAgIGlmIChjb25maWcuc3VidHlwZXMuaGFzT3duUHJvcGVydHkoc3VidHlwZSkpIHtcbiAgICAgICAgICBzdWJ0eXBlc1tzdWJ0eXBlXSA9IGNvbmZpZy5zdWJ0eXBlc1tzdWJ0eXBlXS5tYXAoc3VidHlwZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YnR5cGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHN0YWdlIGFuZCBjb250cm9scyBkb20gZWxlbWVudHNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmb3JtSUQgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZWRpdG9yVUkoZm9ybUlEKSB7XG4gICAgbGV0IGQgPSB0aGlzLmQ7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgZC5zdGFnZSA9IG0oJ3VsJywgbnVsbCwge1xuICAgICAgICBpZDogZGF0YS5mb3JtSUQsXG4gICAgICAgIGNsYXNzTmFtZTogJ2ZybWInXG4gICAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBkcmFnZ2FibGUgZmllbGRzIGZvciBmb3JtQnVpbGRlclxuICAgIGQuY29udHJvbHMgPSBtKCd1bCcsIG51bGwsIHtcbiAgICAgIGlkOiBgJHtkYXRhLmZvcm1JRH0tY29udHJvbC1ib3hgLFxuICAgICAgY2xhc3NOYW1lOiAnZnJtYi1jb250cm9sJ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgdXNlciBvcHRpb25zIGZvciBhY3Rpb25CdXR0b25zXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IHByb2Nlc3NlZE9wdGlvbnNcbiAgICovXG4gIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHtmaWVsZHMgPSBbXSwgdGVtcGxhdGVzLCAuLi5vcHRzfSA9IG9wdGlvbnM7XG4gICAgbGV0IGFjdGlvbkJ1dHRvbnMgPSBbe1xuICAgICAgaWQ6ICdjbGVhcicsXG4gICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kYW5nZXInLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsaWNrOiBfdGhpcy5jb25maXJtUmVtb3ZlQWxsLmJpbmQoX3RoaXMpXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6ICd2aWV3SlNPTicsXG4gICAgICBpZDogJ2RhdGEnLFxuICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1kZWZhdWx0JyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBjbGljazogX3RoaXMuc2hvd0RhdGEuYmluZChfdGhpcylcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBpZDogJ3NhdmUnLFxuICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICBjbGFzc05hbWU6ICdidG4gYnRuLXByaW1hcnkgc2F2ZS10ZW1wbGF0ZScsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xpY2s6IGV2dCA9PiBjb25maWcub3B0cy5vblNhdmUoZXZ0LCBfdGhpcy5kYXRhLmZvcm1EYXRhKVxuICAgICAgfVxuICAgIH1dO1xuXG4gICAgbGV0IGRlZmF1bHRGaWVsZHMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2F1dG9jb21wbGV0ZScpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdhdXRvY29tcGxldGUnXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnYnV0dG9uJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnY2hlY2tib3hHcm91cCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnZGF0ZUZpZWxkJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2ZpbGVVcGxvYWQnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnaGVhZGVyJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2hlYWRlcicsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnaGlkZGVuJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnbnVtYmVyJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgncGFyYWdyYXBoJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgncmFkaW9Hcm91cCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCcsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnc2VsZWN0JyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgndGV4dCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCd0ZXh0QXJlYScpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBvcHRzLmZpZWxkcyA9IGZpZWxkcy5jb25jYXQoZGVmYXVsdEZpZWxkcyk7XG4gICAgY29uZmlnLm9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB7YWN0aW9uQnV0dG9ucywgdGVtcGxhdGVzLCBmaWVsZHN9LCBvcHRzKTtcbiAgICB1dGlscy50ZW1wbGF0ZXMgPSBPYmplY3Qua2V5cyhjb25maWcub3B0cy50ZW1wbGF0ZXMpLm1hcChrZXkgPT4ge1xuICAgICAgcmV0dXJuIFtrZXksIGNvbmZpZy5vcHRzLnRlbXBsYXRlc1trZXldXTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb25maWcub3B0cztcbiAgfVxuXG5cbiAgLy8gZW5kIGNsYXNzXG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhlbHBlcnM7XG4iLCIvKipcbiAqIFBvbHlmaWxscyBmb3Igb2xkZXIgYnJvd3NlcnMgYW5kIGFkZGVkIGZ1bmN0aW9uYWxpdHlcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHBvbHlmaWxscygpIHtcbiAgLy8gRWxlbWVudC5yZW1vdmUoKSBwb2x5ZmlsbFxuICBpZiAoISgncmVtb3ZlJyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBFdmVudCBwb2x5ZmlsbFxuICBpZiAodHlwZW9mIEV2ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LkV2ZW50ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoZXZ0LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG5cbiAgLy8gT2JqZWN0LmFzc2lnbiBwb2x5ZmlsbFxuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0ID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBsZXQgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfVxuXG5cbiAgLy8gUmVmZXJlbmNlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjQuNC4xOFxuICBpZiAoIUFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgbGV0IFQsIGs7XG4gICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xuICAgICAgfVxuICAgICAgbGV0IE8gPSBPYmplY3QodGhpcyk7XG4gICAgICBsZXQgbGVuID0gTy5sZW5ndGggPj4+IDA7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgVCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIH1cbiAgICAgIGsgPSAwO1xuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgbGV0IGtWYWx1ZTtcbiAgICAgICAgaWYgKGsgaW4gTykge1xuICAgICAgICAgIGtWYWx1ZSA9IE9ba107XG4gICAgICAgICAgY2FsbGJhY2suY2FsbChULCBrVmFsdWUsIGssIE8pO1xuICAgICAgICB9XG4gICAgICAgIGsrKztcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvbHlmaWxscygpO1xuIiwiaW1wb3J0IHtkZWZhdWx0U3VidHlwZXMsIGZpbHRlcn0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcblxuLyoqXG4gKiBDcm9zcyBmaWxlIHV0aWxpdGllcyBmb3Igd29ya2luZyB3aXRoIGFycmF5cyxcbiAqIHNvcnRpbmcgYW5kIG90aGVyIGZ1biBzdHVmZlxuICogQHJldHVybiB7T2JqZWN0fSB1dGlsc1xuICovXG4vLyBmdW5jdGlvbiB1dGlscygpIHtcbiAgY29uc3QgdXRpbHMgPSB7fTtcbiAgd2luZG93LmZiTG9hZGVkID0ge1xuICAgIGpzOiBbXSxcbiAgICBjc3M6IFtdXG4gIH07XG4gIHdpbmRvdy5mYkVkaXRvcnMgPSB7XG4gICAgcXVpbGw6IHt9LFxuICAgIHRpbnltY2U6IHt9XG4gIH07XG5cbiAgLy8gY2xlYW5lciBzeW50YXggZm9yIHRlc3RpbmcgaW5kZXhPZiBlbGVtZW50XG4gIHV0aWxzLmluQXJyYXkgPSBmdW5jdGlvbihuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICBPYmplY3QgdHJpbW1lZCBvZiBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICovXG4gIHV0aWxzLnRyaW1PYmogPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCB4bWxSZW1vdmUgPSBbXG4gICAgICBudWxsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgJycsXG4gICAgICBmYWxzZSxcbiAgICAgICdmYWxzZSdcbiAgICBdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmICh1dGlscy5pbkFycmF5KGF0dHJzW2F0dHJdLCB4bWxSZW1vdmUpKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhdHRyc1thdHRyXSkpIHtcbiAgICAgICAgaWYgKCFhdHRyc1thdHRyXS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgYXR0cmlidXRlIGlzIGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICB1dGlscy52YWxpZEF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XG4gICAgbGV0IGludmFsaWQgPSBbXG4gICAgICAndmFsdWVzJyxcbiAgICAgICdlbmFibGVPdGhlcicsXG4gICAgICAnb3RoZXInLFxuICAgICAgJ2xhYmVsJyxcbiAgICAgIC8vICdzdHlsZScsXG4gICAgICAnc3VidHlwZSdcbiAgICBdO1xuICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShhdHRyLCBpbnZhbGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBhdHRycyBvYmplY3QgaW50byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIG9iamVjdCBvZiBhdHRyaWJ1dGVzIGZvciBtYXJrdXBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdXRpbHMuYXR0clN0cmluZyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSAmJiB1dGlscy52YWxpZEF0dHIoYXR0cikpIHtcbiAgICAgICAgYXR0ciA9IHV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIubmFtZSArIGF0dHIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlcy5qb2luKCcgJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXR0cmlidXRlcyB0byBtYXJrdXAgc2FmZSBzdHJpbmdzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIHV0aWxzLnNhZmVBdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gdXRpbHMuc2FmZUF0dHJOYW1lKG5hbWUpO1xuICAgIGxldCB2YWxTdHJpbmc7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWxTdHJpbmcgPSB1dGlscy5lc2NhcGVBdHRyKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbFN0cmluZyA9IHV0aWxzLmVzY2FwZUF0dHIodmFsdWUucmVwbGFjZSgnLCcsICcgJykudHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlID8gYD1cIiR7dmFsU3RyaW5nfVwiYCA6ICcnO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIHV0aWxzLnNhZmVBdHRyTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBsZXQgc2FmZUF0dHIgPSB7XG4gICAgICBjbGFzc05hbWU6ICdjbGFzcydcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNhZmVBdHRyW25hbWVdIHx8IHV0aWxzLmh5cGhlbkNhc2UobmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5ncyBpbnRvIGxvd2VyY2FzZS1oeXBoZW5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgdXRpbHMuaHlwaGVuQ2FzZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9eLSsvZywgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0IGEgaHlwaGVuYXRlZCBzdHJpbmcgdG8gY2FtZWxDYXNlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIHV0aWxzLmNhbWVsQ2FzZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShbYS16XSkvZywgKG0sIHcpID0+XG4gICAgdy50b1VwcGVyQ2FzZSgpKTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGNvbnRlbnQgdHlwZVxuICAgKiBAcGFyYW0gIHtOb2RlIHwgU3RyaW5nIHwgQXJyYXkgfCBPYmplY3R9IGNvbnRlbnRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSBmb3IgbWFwcGluZ1xuICAgKi9cbiAgdXRpbHMuY29udGVudFR5cGUgPSBjb250ZW50ID0+IHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBjb250ZW50O1xuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgTm9kZSB8fCBjb250ZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHR5cGUgPSAnbm9kZSc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICB0eXBlID0gJ2FycmF5JztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBldmVudHMgdG8gYW4gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudHMgIG9iamVjdCBmdWxsIG9mIGV2ZW50cyBlZy4ge2NsaWNrOiBldnQgPT4gY2FsbGJhY2t9XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1dGlscy5iaW5kRXZlbnRzID0gKGVsZW1lbnQsIGV2ZW50cykgPT4ge1xuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZ0ID0+IGV2ZW50c1tldmVudF0oZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1bmlxdWUgbmFtZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSAge09iamVjdH0gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgbmFtZVxuICovXG4gIHV0aWxzLm5hbWVBdHRyID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgZXBvY2ggPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBsZXQgcHJlZml4ID0gZmllbGQudHlwZSB8fCB1dGlscy5oeXBoZW5DYXNlKGZpZWxkLmxhYmVsKTtcbiAgICByZXR1cm4gcHJlZml4ICsgJy0nICsgZXBvY2g7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCB3cmFwcGVyIHdoZXJlIG5lZWRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICB0YWdcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fE9iamVjdH0gY29udGVudCB3ZSB3cmFwIHRoaXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgYXR0cnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gRWxlbWVudFxuICAgKi9cbiAgdXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGxldCBjb250ZW50VHlwZSA9IHV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnQpO1xuICAgIGxldCB7ZXZlbnRzLCAuLi5hdHRyc30gPSBhdHRyaWJ1dGVzO1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgY29uc3QgYXBwZW5kQ29udGVudCA9IHtcbiAgICAgIHN0cmluZzogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgZmllbGQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICB9LFxuICAgICAgb2JqZWN0OiAoY29uZmlnKSA9PiB7XG4gICAgICAgIGxldCB7dGFnLCBjb250ZW50LCAuLi5kYXRhfSA9IGNvbmZpZztcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKHV0aWxzLm1hcmt1cCh0YWcsIGNvbnRlbnQsIGRhdGEpKTtcbiAgICAgIH0sXG4gICAgICBub2RlOiAoY29udGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICB9LFxuICAgICAgYXJyYXk6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudFtpXSk7XG4gICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbjogY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50KCk7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdKGNvbnRlbnQpO1xuICAgICAgfSxcbiAgICAgIHVuZGVmaW5lZDogKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKHRhZywgY29udGVudCwgYXR0cmlidXRlcyk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB1dGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdLmNhbGwodGhpcywgY29udGVudCk7XG4gICAgfVxuXG4gICAgdXRpbHMuYmluZEV2ZW50cyhmaWVsZCwgZXZlbnRzKTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcbiAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGV4OiB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIHV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgbGV0IGF0dHJzID0gZWxlbS5hdHRyaWJ1dGVzO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgdXRpbHMuZm9yRWFjaChhdHRycywgYXR0ciA9PiB7XG4gICAgICBsZXQgYXR0clZhbCA9IGF0dHJzW2F0dHJdLnZhbHVlO1xuICAgICAgaWYgKGF0dHJWYWwubWF0Y2goL2ZhbHNlfHRydWUvZykpIHtcbiAgICAgICAgYXR0clZhbCA9IChhdHRyVmFsID09PSAndHJ1ZScpO1xuICAgICAgfSBlbHNlIGlmIChhdHRyVmFsLm1hdGNoKC91bmRlZmluZWQvZykpIHtcbiAgICAgICAgYXR0clZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJWYWwpIHtcbiAgICAgICAgZGF0YVthdHRyc1thdHRyXS5uYW1lXSA9IGF0dHJWYWw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBmaWVsZCBvcHRpb25zIHRvIG9wdGlvbkRhdGFcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZCAgRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgb3B0aW9uRGF0YSBhcnJheVxuICAgKi9cbiAgdXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZmllbGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29wdGlvbicpO1xuICAgIGxldCBvcHRpb25EYXRhID0ge307XG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wdGlvbkRhdGEgPSB1dGlscy5wYXJzZUF0dHJzKG9wdGlvbnNbaV0pO1xuICAgICAgICBvcHRpb25EYXRhLmxhYmVsID0gb3B0aW9uc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgZGF0YS5wdXNoKG9wdGlvbkRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZSBYTUwgZm9ybURhdGFcbiAgICogQHBhcmFtICB7U3RyaW5nfSB4bWxTdHJpbmdcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgZm9ybURhdGEgYXJyYXlcbiAgICovXG4gIHV0aWxzLnBhcnNlWE1MID0gZnVuY3Rpb24oeG1sU3RyaW5nKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcbiAgICBsZXQgeG1sID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWxTdHJpbmcsICd0ZXh0L3htbCcpO1xuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xuXG4gICAgaWYgKHhtbCkge1xuICAgICAgbGV0IGZpZWxkcyA9IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmllbGQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmaWVsZERhdGEgPSB1dGlscy5wYXJzZUF0dHJzKGZpZWxkc1tpXSk7XG5cbiAgICAgICAgaWYgKGZpZWxkc1tpXS5jaGlsZHJlbiAmJiBmaWVsZHNbaV0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgZmllbGREYXRhLnZhbHVlcyA9IHV0aWxzLnBhcnNlT3B0aW9ucyhmaWVsZHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgZXNjYXBlZCBIVE1MIGludG8gdXNhYmxlIEhUTUxcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sIGVzY2FwZWQgSFRNTFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgcGFyc2VkIEhUTUxcbiAgICovXG4gIHV0aWxzLnBhcnNlZEh0bWwgPSBmdW5jdGlvbihodG1sKSB7XG4gICAgbGV0IGVzY2FwZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVzY2FwZUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgfTtcblxuICAvKipcbiAgICogRXNjYXBlIG1hcmt1cCBzbyBpdCBjYW4gYmUgZGlzcGxheWVkIHJhdGhlciB0aGFuIHJlbmRlcmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBtYXJrdXBcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIGVzY2FwZWQgaHRtbFxuICAgKi9cbiAgdXRpbHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBsZXQgZXNjYXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZXNjYXBlRWxlbWVudC50ZXh0Q29udGVudCA9IGh0bWw7XG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQuaW5uZXJIVE1MO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhbiBhdHRyaWJ1dGVcbiAgdXRpbHMuZXNjYXBlQXR0ciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCBtYXRjaCA9IHtcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7J1xuICAgIH07XG5cbiAgICBjb25zdCByZXBsYWNlVGFnID0gdGFnID0+IG1hdGNoW3RhZ10gfHwgdGFnO1xuXG4gICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykgPyBzdHIucmVwbGFjZSgvW1wiJjw+XS9nLCByZXBsYWNlVGFnKSA6IHN0cjtcbiAgfTtcblxuICAvLyBFc2NhcGUgYXR0cmlidXRlc1xuICB1dGlscy5lc2NhcGVBdHRycyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGF0dHJzW2F0dHJdID0gdXRpbHMuZXNjYXBlQXR0cihhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xuICB9O1xuXG4gIC8vIGZvckVhY2ggdGhhdCBjYW4gYmUgdXNlZCBvbiBub2RlTGlzdFxuICB1dGlscy5mb3JFYWNoID0gZnVuY3Rpb24oYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTsgLy8gcGFzc2VzIGJhY2sgc3R1ZmYgd2UgbmVlZFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheSBvZiBlbGVtZW50c1xuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgIGFycmF5IHdpdGggcG9zc2libGUgZHVwbGljYXRlc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIGFycmF5IHdpdGggb25seSB1bmlxdWUgdmFsdWVzXG4gICAqL1xuICB1dGlscy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGVsZW0sIHBvcywgYXJyKSA9PiB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWxlbSkgPT09IHBvcztcbiAgICB9KTtcbiAgfTtcblxuICB1dGlscy5tYWtlTGFiZWwgPSAoZGF0YSwgbGFiZWwgPSAnJywgZGVzY3JpcHRpb24gPSAnJykgPT4ge1xuICAgIGxldCBsYWJlbFRleHQgPSB1dGlscy5wYXJzZWRIdG1sKGxhYmVsKTtcbiAgICBsZXQgbGFiZWxDb250ZW50cyA9IFtsYWJlbFRleHRdO1xuXG4gICAgaWYgKGRhdGEucmVxdWlyZWQpIHtcbiAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJyonLCB7Y2xhc3NOYW1lOiAncmVxdWlyZWQnfSkpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnPycsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICAgIHRvb2x0aXA6IGRlc2NyaXB0aW9uXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbSgnbGFiZWwnLCBsYWJlbENvbnRlbnRzLCB7XG4gICAgICBmb3I6IGRhdGEuaWQsXG4gICAgICBjbGFzc05hbWU6IGBmYi0ke2RhdGEudHlwZX0tbGFiZWxgXG4gICAgfSk7XG4gIH07XG5cbiAgdXRpbHMudGVtcGxhdGVNYXAgPSAodGVtcGxhdGVzLCB0eXBlKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgaWYodXRpbHMuaW5BcnJheSh0eXBlLCBrZXkpKSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBrZXkpIHtcbiAgICAgICAgdGVtcGxhdGUgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIHV0aWxzLmF1dG9jb21wbGV0ZVRlbXBsYXRlID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQge3ZhbHVlcywgdHlwZSwgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgY29uc3Qga2V5Ym9hcmROYXYgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgbGV0IGFjdGl2ZU9wdGlvbiA9IGxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlLW9wdGlvbicpWzBdO1xuICAgICAgY29uc3Qga2V5Q29kZU1hcFZhbHMgPSBbXG4gICAgICAgIC8vIHVwXG4gICAgICAgIFszOCwgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24ucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbiA9IGFjdGl2ZU9wdGlvbi5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgLy8gZG93blxuICAgICAgICBbNDAsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbiA9IGFjdGl2ZU9wdGlvbi5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gbGlzdC5maXJzdENoaWxkO1xuICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBbMTMsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGFjdGl2ZU9wdGlvbi5pbm5lckhUTUw7XG4gICAgICAgICAgICBpZiAobGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICBdO1xuICAgICAgbGV0IGtleUNvZGVNYXAgPSBuZXcgTWFwKGtleUNvZGVNYXBWYWxzKTtcblxuICAgICAgbGV0IGRpcmVjdGlvbiA9IGtleUNvZGVNYXAuZ2V0KGUua2V5Q29kZSk7XG4gICAgICBpZighZGlyZWN0aW9uKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICgpID0+IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0aW9uKCk7XG4gICAgfTtcbiAgICBjb25zdCBmYXV4RXZlbnRzID0ge1xuICAgICAgZm9jdXM6IGV2dCA9PiB7XG4gICAgICAgIGV2dC50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkTmF2KTtcbiAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0sXG4gICAgICBibHVyOiBldnQgPT4ge1xuICAgICAgICBldnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZE5hdik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGV2dC50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH0sXG4gICAgICBpbnB1dDogKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZztcbiAgICAgICAgZmlsdGVyKGxpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKSwgZXZ0LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGlmICghZXZ0LnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgZmF1eEF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IGAke2RhdGEuaWR9LWlucHV0YCxcbiAgICAgICAgZXZlbnRzOiBmYXV4RXZlbnRzXG4gICAgICB9KTtcbiAgICBsZXQgaGlkZGVuQXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7dHlwZTogJ2hpZGRlbid9KTtcbiAgICBkZWxldGUgZmF1eEF0dHJzLm5hbWU7XG4gICAgY29uc3QgZmllbGQgPSBbXG4gICAgICBtKCdpbnB1dCcsIG51bGwsIGZhdXhBdHRycyksXG4gICAgICBtKCdpbnB1dCcsIG51bGwsIGhpZGRlbkF0dHJzKVxuICAgIF07XG5cbiAgICBjb25zdCBvcHRpb25zID0gdmFsdWVzLm1hcChvcHRpb25EYXRhID0+IHtcbiAgICAgIGxldCBsYWJlbCA9IG9wdGlvbkRhdGEubGFiZWw7XG4gICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogZXZ0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGxpc3QucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gb3B0aW9uRGF0YS5sYWJlbDtcbiAgICAgICAgICAgIGZpZWxkLnByZXZpb3VzU2libGluZy52YWx1ZSA9IG9wdGlvbkRhdGEudmFsdWU7XG4gICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogb3B0aW9uRGF0YS52YWx1ZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBtKCdsaScsIGxhYmVsLCBjb25maWcpO1xuICAgIH0pO1xuXG4gICAgZmllbGQucHVzaChtKCd1bCcsIG9wdGlvbnMsXG4gICAgICB7aWQ6IGAke2RhdGEuaWR9LWxpc3RgLCBjbGFzc05hbWU6IGBmYi0ke3R5cGV9LWxpc3RgfSkpO1xuXG4gICAgY29uc3Qgb25SZW5kZXIgPSAoZXZ0KSA9PiB7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtmaWVsZCwgb25SZW5kZXJ9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBET00gZWxlbWVudHMgZm9yIHNlbGVjdCwgY2hlY2tib3gtZ3JvdXAgYW5kIHJhZGlvLWdyb3VwLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkRGF0YVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICBET00gZWxlbWVudHNcbiAgICovXG4gIHV0aWxzLnNlbGVjdFRlbXBsYXRlID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuICAgIGxldCB7dmFsdWVzLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5saW5lLCBvdGhlciwgdG9nZ2xlLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBsZXQgb3B0aW9uVHlwZSA9IHR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpO1xuICAgIGxldCBpc1NlbGVjdCA9IHR5cGUgPT09ICdzZWxlY3QnO1xuXG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgaWYgKHBsYWNlaG9sZGVyICYmIGlzU2VsZWN0KSB7XG4gICAgICAgIG9wdGlvbnMucHVzaChtKCdvcHRpb24nLCBwbGFjZWhvbGRlciwge1xuICAgICAgICAgIGRpc2FibGVkOiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkOiBudWxsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHtsYWJlbCA9ICcnLCAuLi5vcHRpb25BdHRyc30gPSB2YWx1ZXNbaV07XG5cbiAgICAgICAgb3B0aW9uQXR0cnMuaWQgPSBgJHtkYXRhLmlkfS0ke2l9YDtcbiAgICAgICAgaWYgKCFvcHRpb25BdHRycy5zZWxlY3RlZCB8fCBwbGFjZWhvbGRlcikge1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NlbGVjdCkge1xuICAgICAgICAgIGxldCBvID0gbSgnb3B0aW9uJywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFiZWwpLCBvcHRpb25BdHRycyk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBvcHRpb25UeXBlO1xuICAgICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzcyArPSAnLWlubGluZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xuICAgICAgICAgIGlmIChvcHRpb25BdHRycy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgb3B0aW9uQXR0cnMuY2hlY2tlZCA9ICdjaGVja2VkJztcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGlucHV0ID0gbSgnaW5wdXQnLCBudWxsLCBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBvcHRpb25BdHRycykpO1xuICAgICAgICAgIGxldCBsYWJlbEF0dHJzID0ge2Zvcjogb3B0aW9uQXR0cnMuaWR9O1xuICAgICAgICAgIGxldCBsYWJlbENvbnRlbnQgPSBbaW5wdXQsIGxhYmVsXTtcbiAgICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICBsZXQga2NUb2dnbGUgPSBtKCdzcGFuJyk7XG4gICAgICAgICAgICBsYWJlbENvbnRlbnQgPSBbaW5wdXQsIGtjVG9nZ2xlLCBsYWJlbF07XG4gICAgICAgICAgICBsYWJlbEF0dHJzLmNsYXNzTmFtZSA9ICdrYy10b2dnbGUnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBsYWJlbENvbnRlbnQsIGxhYmVsQXR0cnMpO1xuICAgICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTZWxlY3QgJiYgb3RoZXIpIHtcbiAgICAgICAgbGV0IG90aGVyT3B0aW9uQXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IGAke2RhdGEuaWR9LW90aGVyYCxcbiAgICAgICAgICBjbGFzc05hbWU6IGAke2RhdGEuY2xhc3NOYW1lfSBvdGhlci1vcHRpb25gLFxuICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgY2xpY2s6ICgpID0+IHV0aWxzLm90aGVyT3B0aW9uQ0Iob3RoZXJPcHRpb25BdHRycy5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGxldCBsYWJlbCA9IG1pMThuLmN1cnJlbnQub3RoZXI7XG4gICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBvcHRpb25UeXBlO1xuICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG90aGVyT3B0aW9uQXR0cnMpO1xuICAgICAgICBvcHRpb25BdHRycy50eXBlID0gb3B0aW9uVHlwZTtcblxuICAgICAgICBsZXQgb3RoZXJWYWxBdHRycyA9IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgIGlkOiBgJHtvdGhlck9wdGlvbkF0dHJzLmlkfS12YWx1ZWAsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnb3RoZXItdmFsJ1xuICAgICAgICB9O1xuICAgICAgICBsZXQgb3RoZXJJbnB1dHMgPSBbXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvcHRpb25BdHRycyksXG4gICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ090aGVyJyksXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvdGhlclZhbEF0dHJzKVxuICAgICAgICBdO1xuICAgICAgICBsZXQgaW5wdXRMYWJlbCA9IG0oJ2xhYmVsJywgb3RoZXJJbnB1dHMsIHtmb3I6IG9wdGlvbkF0dHJzLmlkfSk7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XG4gICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBbXG4gICAgICBbJ3NlbGVjdCcsXG4gICAgICAgICgpID0+IG0ob3B0aW9uVHlwZSwgb3B0aW9ucywgZGF0YSldLFxuICAgICAgW1snY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnLCAnY2hlY2tib3gnXSxcbiAgICAgICAgKCkgPT4gbSgnZGl2Jywgb3B0aW9ucywge2NsYXNzTmFtZTogdHlwZX0pXVxuICAgIF07XG5cbiAgICByZXR1cm4gdXRpbHMudGVtcGxhdGVNYXAodGVtcGxhdGVzLCB0eXBlKTtcbiAgfTtcblxuICB1dGlscy5kZWZhdWx0RmllbGQgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7bGFiZWwsIGRlc2NyaXB0aW9uLCBzdWJ0eXBlLCB0eXBlLCBpZCwgaXNQcmV2aWV3LCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgaWYgKGRhdGEubmFtZSkge1xuICAgICAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YS5uYW1lID0gdXRpbHMubmFtZUF0dHIoZmllbGREYXRhKSArICctcHJldmlldyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgZGF0YS50aXRsZSA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAoc3VidHlwZSkge1xuICAgICAgdHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkID0ge1xuICAgICAgZmllbGQ6IG0odHlwZSwgdXRpbHMucGFyc2VkSHRtbChsYWJlbCksIGRhdGEpLFxuICAgICAgb25SZW5kZXI6IHV0aWxzLm5vb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuICgpID0+IGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhcnJheSBvZiBzY3JpcHRzIHVzaW5nIGpRdWVyeSdzIGBnZXRTY3JpcHRgXG4gICAqIEBwYXJhbSAge0FycmF5fFN0cmluZ30gIHNjcmlwdFNjciAgICBzY3JpcHRzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCAgIG9wdGlvbmFsIHRvIGxvYWQgZm9ybVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICBhIHByb21pc2VcbiAgICovXG4gIHV0aWxzLmdldFNjcmlwdHMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgY29uc3QgJCA9IGpRdWVyeTtcbiAgICBsZXQgX2FyciA9IFtdO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjcmlwdFNjcikpIHtcbiAgICAgIHNjcmlwdFNjciA9IFtzY3JpcHRTY3JdO1xuICAgIH1cblxuICAgIGlmICghdXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyKSkge1xuICAgICAgX2FyciA9ICQubWFwKHNjcmlwdFNjciwgc3JjID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGF0YVR5cGU6ICdzY3JpcHQnLFxuICAgICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgICAgIHVybDogKHBhdGggfHwgJycpICsgc3JjXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAkLmFqYXgob3B0aW9ucykuZG9uZSgoKSA9PiB3aW5kb3cuZmJMb2FkZWQuanMucHVzaChzcmMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9hcnIucHVzaCgkLkRlZmVycmVkKCBkZWZlcnJlZCA9PiAkKCBkZWZlcnJlZC5yZXNvbHZlICkpKTtcblxuICAgIHJldHVybiAkLndoZW4oLi4uX2Fycik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByZW1vdGUgcmVzb3VyY2UgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBzcmMgIHVybCBvZiByZW1vdGUgc2NyaXB0IG9yIGNzc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIHR5cGUgICAgICAgJ2pzJyBvciAnY3NzJ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIGlzQ2FjaGVkXG4gICAqL1xuICB1dGlscy5pc0NhY2hlZCA9IChzcmMsIHR5cGUgPSAnanMnKSA9PiB7XG4gICAgbGV0IGlzQ2FjaGVkID0gZmFsc2U7XG4gICAgY29uc3QgY2FjaGUgPSB3aW5kb3cuZmJMb2FkZWRbdHlwZV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgICAgaXNDYWNoZWQgPSBzcmMuZXZlcnkocyA9PiB1dGlscy5pbkFycmF5KHMsIGNhY2hlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQ2FjaGVkID0gdXRpbHMuaW5BcnJheShzcmMsIGNhY2hlKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ2FjaGVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHN0eWxlc2hlZXRzIHRvIHRoZSBoZWFkXG4gICAqIEBwYXJhbSAge0FycmF5fSBzY3JpcHRTY3JcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1dGlscy5nZXRTdHlsZXMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgaWYgKHV0aWxzLmlzQ2FjaGVkKHNjcmlwdFNjciwgJ2NzcycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFwcGVuZFN0eWxlID0gKGhyZWYpID0+IHtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIHdpbmRvdy5mYkxvYWRlZC5jc3MucHVzaChocmVmKTtcbiAgICB9O1xuICAgIHNjcmlwdFNjci5mb3JFYWNoKHNyYyA9PiBhcHBlbmRTdHlsZSgocGF0aCB8fCAnJykgKyBzcmMpKTtcbiAgfTtcblxuICB1dGlscy5sb25nVGV4dFRlbXBsYXRlID0gZGF0YSA9PiB7XG4gICAgbGV0IHt2YWx1ZSA9ICcnLCAuLi5hdHRyc30gPSBkYXRhO1xuICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgIGZpZWxkOiBtKCd0ZXh0YXJlYScsIHV0aWxzLnBhcnNlZEh0bWwodmFsdWUpLCBhdHRycylcbiAgICB9O1xuICAgIGxldCBlZGl0b3JzID0ge1xuICAgICAgdGlueW1jZToge1xuICAgICAgICBqczogWycvL2Nkbi50aW55bWNlLmNvbS80L3RpbnltY2UubWluLmpzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdKSB7XG4gICAgICAgICAgICB3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cudGlueW1jZS5pbml0KHtcbiAgICAgICAgICAgIHRhcmdldDogdGVtcGxhdGUuZmllbGQsXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgJ2Fkdmxpc3QgYXV0b2xpbmsgbGlzdHMgbGluayBpbWFnZSBjaGFybWFwIHByaW50IHByZXZpZXcgYW5jaG9yJyxcbiAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICdpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBjb250ZXh0bWVudSBwYXN0ZSBjb2RlJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRvb2xiYXI6ICdpbnNlcnRmaWxlIHVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcXVpbGw6IHtcbiAgICAgICAganM6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuanMnXSxcbiAgICAgICAgY3NzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLnNub3cuY3NzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGNvbnN0IERlbHRhID0gd2luZG93LlF1aWxsLmltcG9ydCgnZGVsdGEnKTtcbiAgICAgICAgICB3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2RhdGEuaWRdID0ge307XG4gICAgICAgICAgbGV0IGVkaXRvciA9IHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbZGF0YS5pZF07XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlID0gbmV3IHdpbmRvdy5RdWlsbCh0ZW1wbGF0ZS5maWVsZCwge1xuICAgICAgICAgICAgbW9kdWxlczoge1xuICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIGZhbHNlXX1dLFxuICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXG4gICAgICAgICAgICAgICAgWydjb2RlLWJsb2NrJ11cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBhdHRycy5wbGFjZWhvbGRlciB8fCAnJyxcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlZGl0b3IuZGF0YSA9IG5ldyBEZWx0YSgpO1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZWRpdG9yLmluc3RhbmNlLnNldENvbnRlbnRzKHdpbmRvdy5KU09OLnBhcnNlKHV0aWxzLnBhcnNlZEh0bWwodmFsdWUpKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVkaXRvci5pbnN0YW5jZS5vbigndGV4dC1jaGFuZ2UnLCBmdW5jdGlvbihkZWx0YSkge1xuICAgICAgICAgICAgZWRpdG9yLmRhdGEgPSBlZGl0b3IuZGF0YS5jb21wb3NlKGRlbHRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoZGF0YS50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICB0ZW1wbGF0ZS5vblJlbmRlciA9IGVkaXRvcnNbZGF0YS50eXBlXS5vblJlbmRlcjtcbiAgICB9XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3F1aWxsJykge1xuICAgICAgdGVtcGxhdGUuZmllbGQgPSBtKCdkaXYnLCBudWxsLCBhdHRycyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCBvblJlbmRlcik7XG5cbiAgICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXS5jc3MpIHtcbiAgICAgICAgICB1dGlscy5nZXRTdHlsZXMoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXS5qcyAmJiAhdXRpbHMuaXNDYWNoZWQoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKSkge1xuICAgICAgICAgIHV0aWxzLmdldFNjcmlwdHMoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKS5kb25lKHRlbXBsYXRlLm9uUmVuZGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wbGF0ZS5vblJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7ZmllbGQ6IHRlbXBsYXRlLmZpZWxkLCBvblJlbmRlcn07XG4gIH07XG5cbiAgdXRpbHMudGVtcGxhdGVzID0gW107XG5cbiAgdXRpbHMuZ2V0VGVtcGxhdGUgPSAoZmllbGREYXRhLCBpc1ByZXZpZXcgPSBmYWxzZSkgPT4ge1xuICAgIGxldCB7XG4gICAgICBsYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgc3VidHlwZSxcbiAgICAgIGxhYmVsUG9zaXRpb24sXG4gICAgICAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBsZXQgdGVtcGxhdGU7XG4gICAgbGV0IGZpZWxkO1xuXG4gICAgaWYgKGlzUHJldmlldykge1xuICAgICAgaWYgKGRhdGEubmFtZSkge1xuICAgICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnLXByZXZpZXcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YS5uYW1lID0gdXRpbHMubmFtZUF0dHIoZmllbGREYXRhKSArICctcHJldmlldyc7XG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XG5cbiAgICBpZiAoc3VidHlwZSkge1xuICAgICAgZGF0YS50eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5tdWx0aXBsZSB8fCBkYXRhLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpIHtcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICdbXSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucmVxdWlyZWQpIHtcbiAgICAgIGRhdGEucmVxdWlyZWQgPSBudWxsO1xuICAgICAgZGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGxldCBmaWVsZExhYmVsID0gdXRpbHMubWFrZUxhYmVsKGRhdGEsIGxhYmVsLCBkZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgdGVtcGxhdGVzID0gdXRpbHMudGVtcGxhdGVzLmNvbmNhdChbXG4gICAgICBbJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgYXV0b2NvbXBsZXRlID0gdXRpbHMuYXV0b2NvbXBsZXRlVGVtcGxhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBhdXRvY29tcGxldGUuZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGF1dG9jb21wbGV0ZS5vblJlbmRlclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtkZWZhdWx0U3VidHlwZXMudGV4dC5jb25jYXQoWydudW1iZXInLCAnZmlsZScsICdkYXRlJ10pLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFttKGRhdGEudHlwZSwgbnVsbCwgZGF0YSldLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3BhcmFncmFwaCddLmNvbmNhdChkZWZhdWx0U3VidHlwZXMucGFyYWdyYXBoKSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB7dHlwZSwgLi4uYXR0cnN9ID0gZGF0YTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW20odHlwZSwgdXRpbHMucGFyc2VkSHRtbChsYWJlbCksIGF0dHJzKV0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW2RlZmF1bHRTdWJ0eXBlcy5idXR0b24sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogbSgnYnV0dG9uJywgbGFiZWwsIGRhdGEpLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCcsICdjaGVja2JveCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gdXRpbHMuc2VsZWN0VGVtcGxhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBmaWVsZF1cbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWyd0ZXh0YXJlYScsICd0aW55bWNlJywgJ3F1aWxsJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSB1dGlscy5sb25nVGV4dFRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGQuZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZpZWxkLm9uUmVuZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dXG4gICAgICBdKTtcblxuICAgICAgdGVtcGxhdGUgPSB1dGlscy50ZW1wbGF0ZU1hcCh0ZW1wbGF0ZXMsIGRhdGEudHlwZSk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wbGF0ZSA9IHV0aWxzLmRlZmF1bHRGaWVsZChmaWVsZERhdGEpKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIGxldCB3cmFwcGVyQXR0cnMgPSB7fTtcbiAgICAgICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgICAgICB3cmFwcGVyQXR0cnMuY2xhc3NOYW1lID1cbiAgICAgICAgICBgZmItJHtkYXRhLnR5cGV9IGZvcm0tZ3JvdXAgZmllbGQtJHtkYXRhLmlkfWA7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2RpdicsIHRlbXBsYXRlLmZpZWxkLCB3cmFwcGVyQXR0cnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2lucHV0JywgbnVsbCwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZW1wbGF0ZS5vblJlbmRlcikge1xuICAgICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmaWVsZFJlbmRlcmVkJywgdGVtcGxhdGUub25SZW5kZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGQ7XG4gIH07XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIG90aGVyIG9wdGlvbi5cbiAqIFRvZ2dsZXMgdGhlIGhpZGRlbiB0ZXh0IGFyZWEgZm9yIFwib3RoZXJcIiBvcHRpb24uXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG90aGVySWQgaWQgb2YgdGhlIFwib3RoZXJcIiBvcHRpb24gaW5wdXRcbiAqL1xudXRpbHMub3RoZXJPcHRpb25DQiA9IG90aGVySWQgPT4ge1xuICBjb25zdCBvdGhlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3RoZXJJZCk7XG4gIGNvbnN0IG90aGVySW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke290aGVySWR9LXZhbHVlYCk7XG5cbiAgaWYgKG90aGVySW5wdXQuY2hlY2tlZCkge1xuICAgIG90aGVySW5wdXRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FwaXRhbGl6ZXMgYSBzdHJpbmdcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHVuY2FwaXRhbGl6ZWQgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0ciBjYXBpdGFsaXplZCBzdHJpbmdcbiAqL1xudXRpbHMuY2FwaXRhbGl6ZSA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxiXFx3L2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgIHJldHVybiBtLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59O1xuXG5cbnV0aWxzLm1lcmdlID0gKG9iajEsIG9iajIpID0+IHtcbiAgbGV0IG1lcmdlZE9iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9iajEsIG9iajIpO1xuICBmb3IgKGxldCBwcm9wIGluIG9iajIpIHtcbiAgICBpZiAobWVyZ2VkT2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmoyW3Byb3BdKSkge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBBcnJheS5pc0FycmF5KG9iajFbcHJvcF0pID8gdXRpbHMudW5pcXVlKG9iajFbcHJvcF0uY29uY2F0KG9iajJbcHJvcF0pKSA6IG9iajJbcHJvcF07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmoyW3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSB1dGlscy5tZXJnZShvYmoxW3Byb3BdLCBvYmoyW3Byb3BdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IG9iajJbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtZXJnZWRPYmo7XG59O1xuXG51dGlscy5hZGRFdmVudExpc3RlbmVycyA9IChlbCwgZXZ0cywgZm4pID0+IHtcbiAgcmV0dXJuIGV2dHMuc3BsaXQoJyAnKS5mb3JFYWNoKGUgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCBmbiwgZmFsc2UpKTtcbn07XG5cbi8qKlxuICogRmluZCB0aGUgY2xvc2VzdCBwYXJlbnQgYnkgY2xhc3NcbiAqIEBwYXJhbSAge09iamVjdH0gZWwgIERPTSBlbGVtZW50XG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNscyBjbGFzc1xuICogQHJldHVybiB7T2JqZWN0fSAgICAgRE9NIEVsZW1lbnRcbiAqL1xudXRpbHMuY2xvc2VzdCA9IChlbCwgY2xzKSA9PiB7XG4gIGxldCBjbGFzc05hbWUgPSBjbHMucmVwbGFjZSgnLicsICcnKTtcbiAgd2hpbGUgKChlbCA9IGVsLnBhcmVudEVsZW1lbnQpICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSk7XG4gIHJldHVybiBlbDtcbn07XG5cbnV0aWxzLm5vb3AgPSAoKSA9PiBudWxsO1xuXG51dGlscy5kZWJvdW5jZSA9IChmdW5jLCB3YWl0ID0gMjUwLCBpbW1lZGlhdGUgPSBmYWxzZSkgPT4ge1xuICBsZXQgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgbGV0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogQWRkIGEgbW9iaWxlIGNsYXNzXG4gKiBAdG9kbyBmaW5kIGNzcyBvbmx5IHNvbHV0aW9uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IE1vYmlsZSBjbGFzcyBhZGRlZCB0byBmb3JtQnVpbGRlclxuICovXG51dGlscy5tb2JpbGVDbGFzcyA9ICgpID0+IHtcbiAgbGV0IG1vYmlsZUNsYXNzID0gJyc7XG4gIChmdW5jdGlvbihhKSB7XG4gICAgaWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSB7XG4gICAgICBtb2JpbGVDbGFzcyA9ICcgZmItbW9iaWxlJztcbiAgICB9XG4gIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xuICByZXR1cm4gbW9iaWxlQ2xhc3M7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgY29udmVydHMgbWVzc3kgYGNsI3NzTmFtZXNgIGludG8gdmFsaWQgYGNsYXNzLW5hbWVzYFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGh5cGhlbmF0ZWQgc3RyaW5nXG4gKi9cbnV0aWxzLm1ha2VDbGFzc05hbWUgPSBzdHIgPT4ge1xuICByZXR1cm4gdXRpbHMuaHlwaGVuQ2FzZShzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJykpO1xufTtcblxuLyoqXG4gKiBNYWtlIHN0cmluZ3Mgc2FmZSB0byBiZSB1c2VkIGFzIGNsYXNzZXNcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciBzdHJpbmcgdG8gYmUgY29udmVydGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICBjb252ZXJ0ZXIgc3RyaW5nXG4gKi9cbnV0aWxzLnNhZmVuYW1lID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9bXmEtekEtWjAtOVxcXy1dL2csICcnKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLyoqXG4gKiBTdHJpcHMgbm9uLW51bWJlcnMgZnJvbSBhIG51bWJlciBvbmx5IGlucHV0XG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHIgc3RyaW5nIHdpdGggcG9zc2libGUgbnVtYmVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBzdHJpbmcgd2l0aG91dCBudW1iZXJzXG4gKi9cbnV0aWxzLmZvcmNlTnVtYmVyID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iXX0=
