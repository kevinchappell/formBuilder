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
      clear: 'Clear',
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

      if (ui.item.parent()[0] === d.stage) {
        helpers.doCancel = true;
        processControl(ui.item);
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

    var requiredDisplay = values.required ? 'style="display:inline"' : '';
    liContents += '<span class="required-asterisk" ' + requiredDisplay + '> *</span>';

    if (values.description) {
      var attrs = {
        className: 'tooltip-element',
        tooltip: values.description
      };
      liContents += '<span ' + _utils2.default.attrString(attrs) + '>?</span>';
    }

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
      // field.scrollIntoView();
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
    showData: helpers.showData.bind(helpers),
    save: helpers.save.bind(helpers),
    addField: function addField(field, index) {
      helpers.stopIndex = data.formData.length ? index : undefined;
      prepFieldVars(field);
      document.dispatchEvent(_events2.default.fieldAdded);
    },
    removeField: helpers.removeField.bind(helpers),
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
      get formData() {
        return instance.actions.getData('json');
      },
      promise: new _promise2.default(function (resolve, reject) {
        _mi18n2.default.init(i18nOpts).then(function () {
          elems.each(function (i) {
            var formBuilder = new FormBuilder(opts, elems[i]);
            $(elems[i]).data('formBuilder', formBuilder);
            instance.actions = formBuilder.actions;
          });
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
      this.doCancel = true;
      this.from = ui.item.parent();
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
        this.from.sortable('cancel');
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
      var lastIndex = form.childNodes.length - 1;
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
      if (!_config.config.opts.sortableControls) {
        return false;
      }

      var fieldOrder = {};

      $cbUL.children().each(function (index, element) {
        fieldOrder[index] = $(element).data('type');
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
        if (attrs.id) {
          label = _mi18n2.default.current[attrs.id] || _utils2.default.capitalize(attrs.id);
        } else {
          label = '';
        }
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
    labelContents.push(m('span', ' *', { className: 'required' }));
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
      var list = evt.target.nextSibling.nextSibling;
      evt.target.addEventListener('keydown', keyboardNav);
      list.style.display = 'block';
      list.style.width = list.parentElement.offsetWidth + 'px';
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

  var fieldLabel = utils.makeLabel(data, label, description);

  if (data.required) {
    data.required = null;
    data['aria-required'] = 'true';
  }

  var templates = utils.templates.concat([['autocomplete', function () {
    var autocomplete = utils.autocompleteTemplate(data);
    var template = {
      field: [fieldLabel, autocomplete.field],
      onRender: autocomplete.onRender
    };
    return template;
  }], [_dom.defaultSubtypes.text.concat(['number', 'file', 'date']), function () {
    var template = {
      field: [fieldLabel, m('input', null, data)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIi4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9zcmMvbWkxOG4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9qcy9jb25maWcuanMiLCJzcmMvanMvZGF0YS5qcyIsInNyYy9qcy9kb20uanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL3BvbHlmaWxscy5qcyIsInNyYy9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDM3FCTyxJQUFNLDBDQUFpQjtBQUM1QixtQkFBaUIsT0FEVztBQUV4QixnQkFBYyxDQUNaLGNBRFksRUFFWixRQUZZLEVBR1osVUFIWSxFQUlaLGdCQUpZLEVBS1osTUFMWSxFQU1aLE1BTlksRUFPWixRQVBZLEVBUVosUUFSWSxFQVNaLFdBVFksRUFVWixRQVZZLEVBV1osYUFYWSxFQVlaLFFBWlksRUFhWixNQWJZLEVBY1osVUFkWSxDQUZVO0FBa0J4QixZQUFVLE1BbEJjO0FBbUJ4QjtBQUNBLGlCQUFlLEVBcEJTO0FBcUJ4QixhQUFXLEtBckJhO0FBc0J4QjtBQUNBO0FBQ0EsVUFBUSxLQXhCZ0I7QUF5QnhCLFdBQVMsS0F6QmU7QUEwQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZSxFQXhDUztBQXlDeEIsYUFBVyxFQXpDYTtBQTBDeEIsbUJBQWlCLEtBMUNPO0FBMkN4QixTQUFPO0FBQ0wsT0FBRztBQURFLEdBM0NpQjtBQThDeEIsVUFBUTtBQUNOLFdBQU87QUFBQSxhQUFXLFFBQVEsS0FBUixDQUFjLE9BQWQsQ0FBWDtBQUFBLEtBREQ7QUFFTixhQUFTO0FBQUEsYUFBVyxRQUFRLEdBQVIsQ0FBWSxPQUFaLENBQVg7QUFBQSxLQUZIO0FBR04sYUFBUztBQUFBLGFBQVcsUUFBUSxJQUFSLENBQWEsT0FBYixDQUFYO0FBQUE7QUFISCxHQTlDZ0I7QUFtRHhCLFVBQVE7QUFBQSxXQUFZLElBQVo7QUFBQSxHQW5EZ0I7QUFvRHhCLGNBQVk7QUFBQSxXQUFNLElBQU47QUFBQSxHQXBEWTtBQXFEeEIsb0JBQWtCLEtBckRNO0FBc0R4QixrQkFBZ0I7QUFDZCxZQUFRLElBRE07QUFFZCxZQUFRO0FBQ04sV0FBSyxDQURDO0FBRU4sY0FBUSxNQUZGO0FBR04sYUFBTztBQUhEO0FBRk0sR0F0RFE7QUE4RHhCLFVBQVEsRUE5RGdCO0FBK0R4QixhQUFXLEVBL0RhO0FBZ0V4Qix5QkFBdUIsRUFoRUM7QUFpRXhCLHFCQUFtQixJQWpFSztBQWtFeEIsaUJBQWUsRUFsRVM7QUFtRXhCLGtCQUFnQixFQW5FUTtBQW9FeEIsVUFBUTtBQXBFZ0IsQ0FBdkI7O0FBd0VBLElBQU0sb0NBQWM7QUFDckIsWUFBVSwwREFEVztBQUVyQixTQUFPLENBQ0wsT0FESyxDQUZjO0FBS3JCLGFBQVc7QUFDVCxhQUFTO0FBQ1AsaUJBQVcsY0FESjtBQUVQLHdCQUFrQiwwQkFGWDtBQUdQLDBCQUFvQixzQ0FIYjtBQUlQLG9CQUFjLGNBSlA7QUFLUCxjQUFRLFFBTEQ7QUFNUCxxQkFBZSw0QkFOUjtBQU9QLHFCQUFlLGdCQVBSO0FBUVAsZ0JBQVUsVUFSSDtBQVNQLGtCQUFZLFlBVEw7QUFVUCxpQkFBVyxPQVZKO0FBV1AsdUJBQWlCLDRDQVhWO0FBWVAsYUFBTyxPQVpBO0FBYVAsYUFBTyxPQWJBO0FBY1AsZUFBUyxTQWRGO0FBZVAsWUFBTSxtQkFmQztBQWdCUCxrQkFBWSxPQWhCTDtBQWlCUCx5QkFBbUIsTUFqQlo7QUFrQlAsaUJBQVcsWUFsQko7QUFtQlAsbUJBQWEsV0FuQk47QUFvQlAsd0JBQWtCLGFBcEJYO0FBcUJQLGVBQVMsZ0JBckJGO0FBc0JQLGlCQUFXLFlBdEJKO0FBdUJQLG1CQUFhLGVBdkJOO0FBd0JQLGVBQVMsVUF4QkY7QUF5QlAsbUJBQWEsMEJBekJOO0FBMEJQLHNCQUFnQix1Q0ExQlQ7QUEyQlAsMEJBQW9CLEtBM0JiO0FBNEJQLGlCQUFXLGlCQTVCSjtBQTZCUCx3QkFBa0IsOEJBN0JYO0FBOEJQLDBCQUFvQiw2Q0E5QmI7QUErQlAsa0JBQVksYUEvQkw7QUFnQ1AsbUJBQWEsY0FoQ047QUFpQ1Asa0JBQVksMENBakNMO0FBa0NQLGNBQVEsUUFsQ0Q7QUFtQ1AsWUFBTSxNQW5DQztBQW9DUCxjQUFRLGNBcENEO0FBcUNQLGNBQVEsUUFyQ0Q7QUFzQ1Asa0JBQVksdUJBdENMO0FBdUNQLGFBQU8sT0F2Q0E7QUF3Q1Asa0JBQVksNkJBeENMO0FBeUNQLGlCQUFXLHFEQXpDSjtBQTBDUCxpQkFBVyxXQTFDSjtBQTJDUCxpQkFBVyxZQTNDSjtBQTRDUCx3QkFBa0IsNENBNUNYO0FBNkNQLHFCQUFlLGdCQTdDUjtBQThDUCxZQUFNLE1BOUNDO0FBK0NQLFVBQUksSUEvQ0c7QUFnRFAsdUJBQWlCLDhCQWhEVjtBQWlEUCxjQUFRLFFBakREO0FBa0RQLFdBQUssS0FsREU7QUFtRFAsVUFBSSxJQW5ERztBQW9EUCxjQUFRLFFBcEREO0FBcURQLGVBQVMsU0FyREY7QUFzRFAsZ0JBQVUsVUF0REg7QUF1RFAsOEJBQXdCLE9BdkRqQjtBQXdEUCw4QkFBd0IsT0F4RGpCO0FBeURQLG1CQUFhLHVCQXpETjtBQTBEUCxhQUFPLE9BMURBO0FBMkRQLGlCQUFXLFdBM0RKO0FBNERQLG1CQUFhLGFBNUROO0FBNkRQLDJCQUFxQixPQTdEZDtBQThEUCwyQkFBcUIsT0E5RGQ7QUErRFAsMEJBQW9CLEVBL0RiO0FBZ0VQLDhCQUF3QixFQWhFakI7QUFpRVAsMkJBQXFCLGlCQWpFZDtBQWtFUCxpQ0FBMkIsRUFsRXBCO0FBbUVQLCtCQUF5Qix5QkFuRWxCO0FBb0VQLDhCQUF3QixxQkFwRWpCO0FBcUVQLGVBQVMsU0FyRUY7QUFzRVAsa0JBQVksYUF0RUw7QUF1RVAsYUFBTyxPQXZFQTtBQXdFUCxxQkFBZSxnQkF4RVI7QUF5RVAsb0JBQWMsZUF6RVA7QUEwRVAsY0FBUSxRQTFFRDtBQTJFUCxnQkFBVSxVQTNFSDtBQTRFUCxnQkFBVSxrQkE1RUg7QUE2RVAsYUFBTyxRQTdFQTtBQThFUCxZQUFNLE1BOUVDO0FBK0VQLFlBQU0sTUEvRUM7QUFnRlAscUJBQWUsU0FoRlI7QUFpRlAsY0FBUSxRQWpGRDtBQWtGUCxtQkFBYSxjQWxGTjtBQW1GUCx5QkFBbUIsMkJBbkZaO0FBb0ZQLFlBQU0sTUFwRkM7QUFxRlAsaUJBQVcsYUFyRko7QUFzRlAsaUJBQVcsT0F0Rko7QUF1RlAsZ0JBQVUsU0F2Rkg7QUF3RlAsaUJBQVcsT0F4Rko7QUF5RlAsYUFBTyxPQXpGQTtBQTBGUCxjQUFRO0FBQ04sYUFBSztBQUNILHFCQUFXLFNBRFI7QUFFSCxrQkFBUSxRQUZMO0FBR0gsZ0JBQU0sTUFISDtBQUlILG1CQUFTLFNBSk47QUFLSCxtQkFBUyxTQUxOO0FBTUgsbUJBQVM7QUFOTjtBQURDLE9BMUZEO0FBb0dQLGVBQVMsTUFwR0Y7QUFxR1AsWUFBTSxZQXJHQztBQXNHUCxnQkFBVSxXQXRHSDtBQXVHUCxjQUFRLFFBdkdEO0FBd0dQLGVBQVMsVUF4R0Y7QUF5R1AsYUFBTyxPQXpHQTtBQTBHUCxnQkFBVSxNQTFHSDtBQTJHUCxlQUFTLFdBM0dGO0FBNEdQLFdBQUs7QUE1R0U7QUFEQTtBQUxVLENBQXBCOztBQXVIQSxJQUFNLDBCQUFTLEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTEEsSUFBTSxzQ0FBZSxFQUFyQjs7SUFFTSxJLFdBQUEsSSxHQUNYLGNBQVksTUFBWixFQUFvQjtBQUFBOztBQUNsQixPQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxPQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsT0FBSyxNQUFMLEdBQWMsRUFBZDtBQUNBLGVBQWEsTUFBYixJQUF1QixJQUF2QjtBQUNELEM7O0FBR0ksSUFBTSw0Q0FBa0IsRUFBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxJQUFNLG9DQUFjLEVBQXBCO0FBQ0EsSUFBTSw0Q0FBa0I7QUFDekIsUUFBTSxDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE9BQXJCLEVBQThCLE9BQTlCLEVBQXVDLEtBQXZDLENBRG1CO0FBRXpCLFVBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FGaUI7QUFHekIsVUFBUSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE9BQXJCLENBSGlCO0FBSXpCLGFBQVcsQ0FBQyxHQUFELEVBQU0sU0FBTixFQUFpQixZQUFqQixFQUErQixRQUEvQixFQUF5QyxRQUF6QyxDQUpjO0FBS3pCLFlBQVUsQ0FBQyxVQUFELEVBQWEsT0FBYjtBQUxlLENBQXhCOztBQVNBLElBQU0sd0JBQVEsU0FBUixLQUFRLFVBQVc7QUFDOUIsU0FBTyxRQUFRLFVBQWYsRUFBMkI7QUFDekIsWUFBUSxXQUFSLENBQW9CLFFBQVEsVUFBNUI7QUFDRDtBQUNELFNBQU8sT0FBUDtBQUNELENBTE07O0FBT0EsSUFBTSwwQkFBUyxTQUFULE1BQVMsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUE4QjtBQUFBLE1BQWhCLElBQWdCLHVFQUFULElBQVM7O0FBQ2xELE1BQUksZ0JBQWdCLEVBQXBCO0FBQ0EsTUFBSSxTQUFTLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBYjs7QUFFQSxNQUFJLElBQUosRUFBVTtBQUNSLGFBQVMsT0FBTyxPQUFQLEVBQVQ7QUFDRDs7QUFFRCxPQUFLLElBQUksSUFBSSxNQUFNLE1BQU4sR0FBZSxDQUE1QixFQUErQixLQUFLLENBQXBDLEVBQXVDLEdBQXZDLEVBQTRDO0FBQzFDLFFBQUksTUFBTSxNQUFNLENBQU4sRUFBUyxXQUFULENBQXFCLFdBQXJCLEVBQVY7QUFDQSxRQUFJLElBQUksT0FBSixDQUFZLEtBQUssV0FBTCxFQUFaLE1BQW9DLENBQUMsQ0FBekMsRUFBNEM7QUFDMUMsWUFBTSxDQUFOLEVBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsT0FBTyxDQUFQLENBQXpCO0FBQ0Esb0JBQWMsSUFBZCxDQUFtQixNQUFNLENBQU4sQ0FBbkI7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNLENBQU4sRUFBUyxLQUFULENBQWUsT0FBZixHQUF5QixPQUFPLENBQVAsQ0FBekI7QUFDRDtBQUNGOztBQUVELFNBQU8sYUFBUDtBQUNELENBbkJNOztBQXFCQSxJQUFNLHNDQUFlLENBQ3RCLFFBRHNCLEVBRXRCLGdCQUZzQixFQUd0QixVQUhzQixFQUl0QixhQUpzQixFQUt0QixjQUxzQixDQUFyQjs7QUFRQSxJQUFNLGdEQUFvQixJQUFJLE1BQUosT0FBZSxhQUFhLElBQWIsQ0FBa0IsR0FBbEIsQ0FBZixPQUExQjs7SUFDYyxHLEdBQ25CLGFBQVksTUFBWixFQUFvQjtBQUFBOztBQUNsQixPQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFDQSxPQUFLLGlCQUFMLEdBQXlCLGlCQUF6Qjs7QUFFQSxPQUFLLFFBQUwsR0FBZ0IsZUFBaEI7O0FBRUE7Ozs7O0FBS0EsT0FBSyxLQUFMLEdBQWEsS0FBYjs7QUFFQTs7Ozs7OztBQU9BLE9BQUssTUFBTCxHQUFjLE1BQWQ7O0FBRUEsY0FBWSxNQUFaLElBQXNCLElBQXRCO0FBQ0EsU0FBTyxZQUFZLE1BQVosQ0FBUDtBQUNELEM7O2tCQXpCa0IsRzs7Ozs7Ozs7QUNoRHJCOzs7O0FBSUE7QUFDRSxJQUFNLFNBQVMsRUFBZjs7QUFFQSxPQUFPLE1BQVAsR0FBZ0IsSUFBSSxLQUFKLENBQVUsUUFBVixDQUFoQjtBQUNBLE9BQU8sUUFBUCxHQUFrQixJQUFJLEtBQUosQ0FBVSxVQUFWLENBQWxCO0FBQ0EsT0FBTyxZQUFQLEdBQXNCLElBQUksS0FBSixDQUFVLGNBQVYsQ0FBdEI7QUFDQSxPQUFPLFdBQVAsR0FBcUIsSUFBSSxLQUFKLENBQVUsYUFBVixDQUFyQjtBQUNBLE9BQU8sV0FBUCxHQUFxQixJQUFJLEtBQUosQ0FBVSxhQUFWLENBQXJCO0FBQ0EsT0FBTyxTQUFQLEdBQW1CLElBQUksS0FBSixDQUFVLFdBQVYsQ0FBbkI7QUFDQSxPQUFPLFVBQVAsR0FBb0IsSUFBSSxLQUFKLENBQVUsWUFBVixDQUFwQjtBQUNBLE9BQU8sWUFBUCxHQUFzQixJQUFJLEtBQUosQ0FBVSxjQUFWLENBQXRCO0FBQ0EsT0FBTyxhQUFQLEdBQXVCLElBQUksS0FBSixDQUFVLGVBQVYsQ0FBdkI7O0FBRUY7QUFDQTs7a0JBRWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJmOzs7O0FBQ0E7O0FBS0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLFFBQVEsZ0JBQVIsRUFBMEIsT0FBMUI7QUFQQTs7O0FBU0EsSUFBSSxlQUFlLElBQUksSUFBSixHQUFXLE9BQVgsRUFBbkI7O0FBRUEsSUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFTLElBQVQsRUFBZSxPQUFmLEVBQXdCO0FBQUE7O0FBQzFDLE1BQU0sY0FBYyxJQUFwQjtBQUNBLE1BQU0sT0FBTyxnQkFBTSxPQUFuQjtBQUNBLE1BQU0sU0FBUyxVQUFVLGNBQXpCO0FBQ0EsTUFBTSxPQUFPLGVBQVMsTUFBVCxDQUFiO0FBQ0EsTUFBTSxJQUFJLGtCQUFRLE1BQVIsQ0FBVjtBQUNBLE1BQU0sVUFBVSxzQkFBWSxNQUFaLENBQWhCO0FBQ0EsTUFBTSxJQUFJLGdCQUFNLE1BQWhCOztBQUVBLE1BQU0sZUFBZSxJQUFyQjs7QUFFQSxTQUFPLFFBQVEsY0FBUixDQUF1QixJQUF2QixDQUFQOztBQUVBLE1BQU0sV0FBVyxlQUFPLFFBQVAsR0FBa0IsUUFBUSxlQUFSLENBQXdCLEtBQUssUUFBN0IsQ0FBbkM7QUFDQSxVQUFRLFFBQVIsQ0FBaUIsTUFBakI7O0FBRUEsTUFBSSxTQUFTLEVBQUUsRUFBRSxLQUFKLENBQWI7O0FBRUEsT0FBSyxNQUFMLEdBQWMsUUFBUSxZQUFSLENBQXFCLEtBQUssZUFBMUIsQ0FBZDtBQUNBLE9BQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxPQUFLLE1BQUwsR0FBaUIsS0FBSyxNQUF0Qjs7QUFFQSxNQUFJLGFBQWEsUUFBUSxXQUFSLENBQW9CLEtBQUssTUFBekIsQ0FBakI7O0FBRUEsTUFBSSxLQUFLLGFBQVQsRUFBd0I7QUFDdEI7QUFDQSxpQkFBYSxXQUFXLE1BQVgsQ0FBa0IsVUFBUyxLQUFULEVBQWdCO0FBQzdDLGFBQU8sQ0FBQyxnQkFBTSxPQUFOLENBQWMsTUFBTSxLQUFOLENBQVksSUFBMUIsRUFBZ0MsS0FBSyxhQUFyQyxDQUFSO0FBQ0QsS0FGWSxDQUFiO0FBR0Q7O0FBRUQsTUFBSSxLQUFLLGdCQUFULEVBQTJCO0FBQ3pCLE1BQUUsUUFBRixDQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsY0FBekI7QUFDRDs7QUFFRCxNQUFJLFFBQVEsRUFBRSxFQUFFLFFBQUosQ0FBWjs7QUFFQTtBQUNBLGtCQUFNLE9BQU4sQ0FBYyxVQUFkLEVBQTBCLFVBQUMsQ0FBRCxFQUFPO0FBQUEsd0JBQ1AsV0FBVyxDQUFYLENBRE87QUFBQSxRQUMxQixLQUQwQixpQkFDMUIsS0FEMEI7QUFBQSxRQUNoQixLQURnQjs7QUFFL0IsUUFBSSxPQUFPLE1BQU0sSUFBTixlQUFzQixNQUFNLElBQU4sSUFBYyxNQUFNLElBQTFDLENBQVg7QUFDQSxRQUFJLGtCQUFrQixFQUFFLElBQUYsRUFDcEIsRUFBRSxNQUFGLEVBQVUsTUFBTSxLQUFoQixDQURvQixFQUVwQixFQUFDLFdBQWMsSUFBZCxxQ0FBa0QsQ0FBbkQsRUFGb0IsQ0FBdEI7O0FBS0EsMEJBQVEsTUFBTSxJQUFkLElBQXNCLFdBQVcsQ0FBWCxDQUF0QjtBQUNBLG9CQUFnQixPQUFoQixDQUF3QixJQUF4QixHQUErQixNQUFNLElBQXJDO0FBQ0EsTUFBRSxRQUFGLENBQVcsV0FBWCxDQUF1QixlQUF2QjtBQUNELEdBWEQ7O0FBYUEsTUFBSSxLQUFLLFNBQUwsQ0FBZSxNQUFuQixFQUEyQjtBQUN6QixNQUFFLE9BQUYsRUFBVyxFQUFDLFNBQVMsY0FBVixFQUFYLEVBQXNDLElBQXRDLENBQTJDLE1BQTNDLEVBQW1ELFFBQW5ELENBQTRELEtBQTVEO0FBQ0EsU0FBSyxTQUFMLENBQWUsT0FBZixDQUF1QixVQUFDLEdBQUQsRUFBTSxDQUFOLEVBQVk7QUFDakMsVUFBSSxJQUFKLEdBQVcsSUFBSSxJQUFKLElBQVksUUFBUSxhQUFSLENBQXNCLElBQUksS0FBMUIsQ0FBdkI7QUFDQSxVQUFJLFdBQVcsRUFBRSxJQUFGLEVBQVEsSUFBSSxLQUFaLEVBQW1CO0FBQ2hDLG9EQUEwQyxDQURWO0FBRWhDLGNBQU0sSUFBSTtBQUZzQixPQUFuQixDQUFmO0FBSUEsUUFBRSxRQUFGLEVBQVksUUFBWixDQUFxQixLQUFyQjtBQUNELEtBUEQ7QUFRRDs7QUFFRDtBQUNBLFNBQU8sUUFBUCxDQUFnQjtBQUNkLFlBQVEsTUFETTtBQUVkLGFBQVMsR0FGSztBQUdkLFlBQVEsR0FITTtBQUlkLGdCQUFZLG9CQUFDLEdBQUQsRUFBTSxFQUFOO0FBQUEsYUFBYSxRQUFRLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsR0FBakMsRUFBc0MsRUFBdEMsQ0FBYjtBQUFBLEtBSkU7QUFLZCxXQUFPLGVBQUMsR0FBRCxFQUFNLEVBQU47QUFBQSxhQUFhLFFBQVEsV0FBUixDQUFvQixJQUFwQixDQUF5QixPQUF6QixFQUFrQyxHQUFsQyxFQUF1QyxFQUF2QyxDQUFiO0FBQUEsS0FMTztBQU1kLFVBQU0sY0FBQyxHQUFELEVBQU0sRUFBTjtBQUFBLGFBQWEsUUFBUSxVQUFSLENBQW1CLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLEdBQWpDLEVBQXNDLEVBQXRDLENBQWI7QUFBQSxLQU5RO0FBT2QsWUFBUSxtREFQTTtBQVFkLGlCQUFhO0FBUkMsR0FBaEI7O0FBV0E7QUFDQSxRQUFNLFFBQU4sQ0FBZTtBQUNiLFlBQVEsT0FESztBQUViLGFBQVMsR0FGSTtBQUdiLGlCQUFhLE1BSEE7QUFJYixZQUFRLGVBSks7QUFLYixZQUFRLE1BTEs7QUFNYixZQUFRLEtBTks7QUFPYixpQkFBYSxvQkFQQTtBQVFiLFdBQU8sZUFBQyxHQUFELEVBQU0sRUFBTjtBQUFBLGFBQWEsUUFBUSxXQUFSLENBQW9CLElBQXBCLENBQXlCLE9BQXpCLEVBQWtDLEdBQWxDLEVBQXVDLEVBQXZDLENBQWI7QUFBQSxLQVJNO0FBU2IsVUFBTSxjQUFDLEdBQUQsRUFBTSxFQUFOO0FBQUEsYUFBYSxRQUFRLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsR0FBakMsRUFBc0MsRUFBdEMsQ0FBYjtBQUFBLEtBVE87QUFVYixZQUFRLEdBVks7QUFXYixnQkFBWSxvQkFBQyxHQUFELEVBQU0sRUFBTjtBQUFBLGFBQWEsUUFBUSxVQUFSLENBQW1CLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLEdBQWpDLEVBQXNDLEVBQXRDLENBQWI7QUFBQSxLQVhDO0FBWWIsY0FBVSxDQVpHO0FBYWIsWUFBUSxnQkFBUyxLQUFULEVBQWdCLEVBQWhCLEVBQW9CO0FBQzFCLFVBQUksUUFBUSxRQUFaLEVBQXNCO0FBQ3BCLGVBQU8sS0FBUDtBQUNEOztBQUVELFVBQUksR0FBRyxJQUFILENBQVEsTUFBUixHQUFpQixDQUFqQixNQUF3QixFQUFFLEtBQTlCLEVBQXFDO0FBQ25DLGdCQUFRLFFBQVIsR0FBbUIsSUFBbkI7QUFDQSx1QkFBZSxHQUFHLElBQWxCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsZ0JBQVEsYUFBUixDQUFzQixLQUF0QjtBQUNBLGdCQUFRLFFBQVIsR0FBbUIsQ0FBQyxLQUFLLGdCQUF6QjtBQUNEO0FBQ0Y7QUF6QlksR0FBZjs7QUE0QkEsTUFBSSxpQkFBaUIsU0FBakIsY0FBaUIsVUFBVztBQUM5QixRQUFJLFFBQVEsQ0FBUixFQUFXLFNBQVgsQ0FBcUIsUUFBckIsQ0FBOEIsbUJBQTlCLENBQUosRUFBd0Q7QUFDdEQsVUFBSSxZQUFZLEVBQWhCO0FBQ0EsVUFBSSxXQUFXLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0I7QUFBQSxlQUNuQyxJQUFJLElBQUosS0FBYSxRQUFRLENBQVIsRUFBVyxJQURXO0FBQUEsT0FBdEIsRUFDaUIsQ0FEakIsQ0FBZjtBQUVBLFVBQUksU0FBUyxVQUFiLEVBQXlCO0FBQ3ZCLFlBQUksU0FBUztBQUNULGdCQUFNLFFBREc7QUFFVCxtQkFBUyxJQUZBO0FBR1QsY0FBSSxTQUFTLElBSEo7QUFJVCxpQkFBTyxTQUFTO0FBSlAsU0FBYjtBQU1FLGtCQUFVLElBQVYsQ0FBZSxNQUFmO0FBQ0g7QUFDRCxnQkFBVSxJQUFWLG1EQUFrQixTQUFTLE1BQTNCO0FBQ0EsZ0JBQVUsT0FBVixDQUFrQixpQkFBUztBQUN6QixzQkFBYyxLQUFkLEVBQXFCLElBQXJCO0FBQ0EsWUFBSSxRQUFRLFNBQVIsSUFBcUIsUUFBUSxTQUFSLEtBQXNCLENBQS9DLEVBQWtEO0FBQ2hELGtCQUFRLFNBQVI7QUFDRDtBQUNGLE9BTEQ7QUFNRCxLQXBCRCxNQW9CTztBQUNMLG9CQUFjLE9BQWQsRUFBdUIsSUFBdkI7QUFDRDtBQUNGLEdBeEJEOztBQTBCQSxJQUFFLFVBQUYsR0FBZSxFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWU7QUFDNUIsUUFBTyxLQUFLLE1BQVosZUFENEI7QUFFNUIsZUFBVywyQkFBMkIsZ0JBQU0sV0FBTjtBQUZWLEdBQWYsQ0FBZjs7QUFLQSxNQUFJLGNBQWMsRUFBRSxFQUFFLFVBQUosQ0FBbEI7O0FBRUEsTUFBSSxTQUFTLEVBQUUsS0FBRixFQUFTLEVBQUUsUUFBWCxFQUFxQjtBQUNoQyxRQUFPLEtBQUssTUFBWixhQURnQztBQUVoQyxlQUFXLGFBQWEsS0FBSyxNQUFMLENBQVk7QUFGSixHQUFyQixDQUFiOztBQUtBLE1BQUksS0FBSyxpQkFBVCxFQUE0QjtBQUMxQixRQUFNLFVBQVUsS0FBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLG1CQUFXO0FBQ2hELFVBQUksUUFBUSxFQUFSLElBQWMsS0FBSyxxQkFBTCxDQUEyQixPQUEzQixDQUFtQyxRQUFRLEVBQTNDLE1BQW1ELENBQUMsQ0FBdEUsRUFBeUU7QUFDdkUsZUFBTyxRQUFRLG9CQUFSLENBQTZCLE9BQTdCLENBQVA7QUFDRDtBQUNGLEtBSmUsQ0FBaEI7QUFLQSxRQUFNLGNBQWMsRUFBRSxXQUFGLEdBQWdCLEVBQUUsS0FBRixFQUFTLE9BQVQsRUFBa0I7QUFDcEQsaUJBQVc7QUFEeUMsS0FBbEIsQ0FBcEM7O0FBSUEsV0FBTyxXQUFQLENBQW1CLFdBQW5CO0FBQ0Q7O0FBRUQsTUFBSSxZQUFZLEVBQUUsS0FBRixFQUFTLENBQUMsRUFBRSxLQUFILEVBQVUsTUFBVixDQUFULEVBQTRCO0FBQzFDLFFBQU8sS0FBSyxNQUFaLGdCQUQwQztBQUUxQyxlQUFXLGdCQUFnQixLQUFLLE1BQUwsQ0FBWTtBQUZHLEdBQTVCLENBQWhCOztBQUtBLGNBQVksTUFBWixDQUFtQixTQUFuQixFQUE4QixNQUE5Qjs7QUFFQSxNQUFJLFFBQVEsSUFBUixLQUFpQixVQUFyQixFQUFpQztBQUMvQixNQUFFLE9BQUYsRUFBVyxNQUFYLENBQWtCLFdBQWxCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsTUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixXQUF2QjtBQUNEOztBQUVELE1BQUksZ0JBQWdCLGdCQUFNLFFBQU4sQ0FBZSxlQUFPO0FBQ3hDLFFBQUksR0FBSixFQUFTO0FBQ1AsVUFBSSxJQUFJLElBQUosS0FBYSxPQUFiLElBQXdCLElBQUksTUFBSixDQUFXLElBQVgsS0FBb0IsV0FBaEQsRUFBNkQ7QUFDM0QsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSSxTQUFTLEVBQUUsSUFBSSxNQUFOLEVBQWMsT0FBZCxDQUFzQixhQUF0QixDQUFiO0FBQ0EsY0FBUSxhQUFSLENBQXNCLE1BQXRCO0FBQ0EsY0FBUSxJQUFSLENBQWEsSUFBYixDQUFrQixPQUFsQjtBQUNEO0FBQ0YsR0FWbUIsQ0FBcEI7O0FBWUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxtQkFBVixFQUErQixzRUFBL0IsRUFBdUcsYUFBdkc7O0FBRUEsSUFBRSxJQUFGLEVBQVEsRUFBRSxRQUFWLEVBQW9CLEtBQXBCLENBQTBCLGVBQU87QUFDL0IsUUFBSSxXQUFXLEVBQUUsSUFBSSxNQUFOLEVBQWMsT0FBZCxDQUFzQixnQkFBdEIsQ0FBZjtBQUNBLFlBQVEsU0FBUixHQUFvQixTQUFwQjtBQUNBLG1CQUFlLFFBQWY7QUFDQSxZQUFRLElBQVIsQ0FBYSxJQUFiLENBQWtCLE9BQWxCO0FBQ0QsR0FMRDs7QUFPQTtBQUNBLE1BQUksb0JBQW9CLFNBQXBCLGlCQUFvQixHQUFNO0FBQzVCLFFBQUksY0FBYyxFQUFsQjtBQUNBLFFBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCO0FBQUEsYUFDdEIsZ0JBQU0sTUFBTixDQUFhLElBQWIsRUFBbUIsS0FBSyxJQUFMLENBQW5CLEVBQStCO0FBQzdCLDRDQUFrQztBQURMLE9BQS9CLENBRHNCO0FBQUEsS0FBdEI7O0FBS0EsUUFBSSxLQUFLLE9BQUwsSUFBZ0IsQ0FBQyxFQUFFLDhCQUFGLEVBQWtDLEVBQUUsS0FBcEMsRUFBMkMsTUFBaEUsRUFBd0U7QUFDdEUsa0JBQVksSUFBWixDQUFpQixJQUFqQjtBQUNBLGFBQU8sT0FBUCxDQUFlLGNBQWMsU0FBZCxDQUFmO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLLE1BQUwsSUFBZSxDQUFDLEVBQUUsOEJBQUYsRUFBa0MsRUFBRSxLQUFwQyxFQUEyQyxNQUEvRCxFQUF1RTtBQUNyRSxrQkFBWSxJQUFaLENBQWlCLElBQWpCO0FBQ0EsYUFBTyxNQUFQLENBQWMsY0FBYyxRQUFkLENBQWQ7QUFDRDs7QUFFRCxZQUFRLFVBQVIsQ0FBbUIsRUFBRSxLQUFyQjtBQUNBLFdBQU8sWUFBWSxJQUFaLENBQWlCO0FBQUEsYUFBUSxTQUFTLElBQWpCO0FBQUEsS0FBakIsQ0FBUDtBQUNELEdBbkJEOztBQXFCQSxNQUFJLGdCQUFnQixTQUFoQixhQUFnQixDQUFTLE1BQVQsRUFBZ0M7QUFBQSxRQUFmLEtBQWUsdUVBQVAsS0FBTzs7QUFDbEQsUUFBSSxRQUFRLEVBQVo7QUFDQSxRQUFJLGtCQUFrQixNQUF0QixFQUE4QjtBQUM1QixVQUFJLFlBQVksc0JBQVEsT0FBTyxDQUFQLEVBQVUsT0FBVixDQUFrQixJQUExQixDQUFoQjtBQUNBLFVBQUksU0FBSixFQUFlO0FBQ2IsZ0JBQVEsVUFBVSxLQUFsQjtBQUNBLGNBQU0sS0FBTixHQUFjLFVBQVUsS0FBeEI7QUFDRCxPQUhELE1BR087QUFBRTtBQUNQLFlBQUksUUFBUSxPQUFPLENBQVAsRUFBVSxVQUF0QjtBQUNBLFlBQUksQ0FBQyxLQUFMLEVBQVk7QUFDVixnQkFBTSxNQUFOLEdBQWUsT0FBTyxRQUFQLEdBQWtCLEdBQWxCLENBQXNCLFVBQUMsS0FBRCxFQUFRLElBQVIsRUFBaUI7QUFDcEQsbUJBQU87QUFDTCxxQkFBTyxFQUFFLElBQUYsRUFBUSxJQUFSLEVBREY7QUFFTCxxQkFBTyxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsT0FBYixDQUZGO0FBR0wsd0JBQVUsUUFBUSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsVUFBYixDQUFSO0FBSEwsYUFBUDtBQUtELFdBTmMsQ0FBZjtBQU9EOztBQUVELGFBQUssSUFBSSxJQUFJLE1BQU0sTUFBTixHQUFlLENBQTVCLEVBQStCLEtBQUssQ0FBcEMsRUFBdUMsR0FBdkMsRUFBNEM7QUFDMUMsZ0JBQU0sTUFBTSxDQUFOLEVBQVMsSUFBZixJQUF1QixNQUFNLENBQU4sRUFBUyxLQUFoQztBQUNEO0FBQ0Y7QUFDRixLQXJCRCxNQXFCTztBQUNMLGNBQVEsc0JBQWMsRUFBZCxFQUFrQixNQUFsQixDQUFSO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLE1BQU0sSUFBWCxFQUFpQjtBQUNmLFlBQU0sSUFBTixHQUFhLGdCQUFNLFFBQU4sQ0FBZSxLQUFmLENBQWI7QUFDRDs7QUFFRCxRQUFJLFNBQVMsZ0JBQU0sT0FBTixDQUFjLE1BQU0sSUFBcEIsRUFDWCxDQUFDLE1BQUQsRUFDQyxRQURELEVBRUMsTUFGRCxFQUdDLE1BSEQsRUFJQyxRQUpELEVBS0MsVUFMRCxFQU1DLGNBTkQsQ0FEVyxDQUFiLEVBT3FCO0FBQ25CLFlBQU0sU0FBTixHQUFrQixNQUFNLFNBQU4sSUFBbUIsY0FBckM7QUFDRCxLQVRELE1BU087QUFDTCxZQUFNLFNBQU4sR0FBa0IsTUFBTSxTQUF4QjtBQUNEOztBQUVELFFBQUksUUFBUSw2QkFBNkIsSUFBN0IsQ0FBa0MsTUFBTSxTQUF4QyxDQUFaO0FBQ0EsUUFBSSxLQUFKLEVBQVc7QUFDVCxZQUFNLEtBQU4sR0FBYyxNQUFNLENBQU4sQ0FBZDtBQUNEOztBQUVELG9CQUFNLFdBQU4sQ0FBa0IsS0FBbEI7O0FBRUEsbUJBQWUsS0FBZixFQUFzQixLQUF0Qjs7QUFFQSxRQUFJLEtBQUosRUFBVztBQUNULGVBQVMsYUFBVCxDQUF1QixpQkFBTyxVQUE5QjtBQUNEOztBQUVELGNBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixPQUEzQjtBQUNELEdBMUREOztBQTREQTtBQUNBLE1BQUksYUFBYSxTQUFiLFVBQWEsQ0FBUyxRQUFULEVBQW1CO0FBQ2xDLGVBQVcsUUFBUSxPQUFSLENBQWdCLFFBQWhCLENBQVg7QUFDQSxRQUFJLFlBQVksU0FBUyxNQUF6QixFQUFpQztBQUMvQixXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBUyxNQUE3QixFQUFxQyxHQUFyQyxFQUEwQztBQUN4QyxzQkFBYyxTQUFTLENBQVQsQ0FBZDtBQUNEO0FBQ0QsZ0JBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixPQUEzQjtBQUNELEtBTEQsTUFLTyxJQUFJLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQUwsQ0FBbUIsTUFBN0MsRUFBcUQ7QUFDMUQ7QUFDQSxXQUFLLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBMkI7QUFBQSxlQUFTLGNBQWMsS0FBZCxDQUFUO0FBQUEsT0FBM0I7QUFDQSxnQkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLE9BQTNCO0FBQ0QsS0FKTSxNQUlBLElBQUksQ0FBQyxLQUFLLE9BQU4sSUFBaUIsQ0FBQyxLQUFLLE1BQTNCLEVBQW1DO0FBQ3hDLGdCQUFVLFNBQVYsQ0FBb0IsR0FBcEIsQ0FBd0IsT0FBeEI7QUFDQSxnQkFBVSxPQUFWLENBQWtCLE9BQWxCLEdBQTRCLEtBQUssVUFBakM7QUFDRDtBQUNELFlBQVEsSUFBUixDQUFhLElBQWIsQ0FBa0IsT0FBbEI7O0FBRUEsUUFBSSxtQkFBSixFQUF5QjtBQUN2QixnQkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLE9BQTNCO0FBQ0Q7QUFDRixHQXBCRDs7QUFzQkE7Ozs7Ozs7QUFPQSxNQUFJLGVBQWUsc0JBQVMsU0FBVCxFQUFvQjtBQUNyQyxRQUFJLGdCQUFnQixDQUNoQixnQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixLQUFLLFNBQXZCLEVBQWtDLEVBQUMsV0FBVyxhQUFaLEVBQWxDLENBRGdCLENBQXBCO0FBR0EsUUFBSSxlQUFlLGlDQUNhLEtBQUssYUFEbEIsY0FBbkI7QUFHQSxRQUFNLGFBQWEsVUFBVSxRQUFWLElBQXVCLFVBQVUsSUFBVixLQUFtQixnQkFBN0Q7QUFDQSxRQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsUUFBUztBQUNsQyxVQUFJLGFBQWE7QUFDYixvQkFEYTtBQUViLGVBQU8sZ0JBQU0sVUFBTixDQUFpQixLQUFqQjtBQUZNLE9BQWpCOztBQUtBLFVBQUksVUFBVSxJQUFWLEtBQW1CLGNBQXZCLEVBQXVDO0FBQ3JDLG1CQUFXLFFBQVgsR0FBc0IsS0FBdEI7QUFDRDs7QUFFRCxhQUFPLFVBQVA7QUFDRCxLQVhEOztBQWFBLFFBQUksQ0FBQyxVQUFVLE1BQVgsSUFBcUIsQ0FBQyxVQUFVLE1BQVYsQ0FBaUIsTUFBM0MsRUFBbUQ7QUFDakQsVUFBSSxrQkFBa0IsZ0JBQU0sT0FBTixDQUFjLFVBQVUsSUFBeEIsRUFBOEIsQ0FBQyxnQkFBRCxFQUFtQixVQUFuQixDQUE5QixJQUFnRSxDQUFDLENBQUQsQ0FBaEUsR0FBc0UsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBNUY7QUFDQSxnQkFBVSxNQUFWLEdBQW1CLGdCQUFnQixHQUFoQixDQUFvQixVQUFTLEtBQVQsRUFBZ0I7QUFDckQsWUFBSSxRQUFXLEtBQUssTUFBaEIsU0FBMEIsS0FBOUI7QUFDQSxlQUFPLG1CQUFtQixLQUFuQixDQUFQO0FBQ0QsT0FIa0IsQ0FBbkI7O0FBS0YsVUFBSSxjQUFjLFVBQVUsTUFBVixDQUFpQixDQUFqQixDQUFsQjtBQUNFLFVBQUksWUFBWSxjQUFaLENBQTJCLFVBQTNCLENBQUosRUFBNEM7QUFDMUMsb0JBQVksUUFBWixHQUF1QixJQUF2QjtBQUNEO0FBQ0YsS0FYRCxNQVdPO0FBQ0w7QUFDQSxnQkFBVSxNQUFWLENBQWlCLE9BQWpCLENBQXlCO0FBQUEsZUFBVSxzQkFBYyxFQUFkLEVBQWtCLEVBQUMsVUFBVSxLQUFYLEVBQWxCLEVBQXFDLE1BQXJDLENBQVY7QUFBQSxPQUF6QjtBQUNEOztBQUVELGlCQUFhLElBQWIsQ0FBa0IscUNBQWxCOztBQUVBLGlCQUFhLElBQWIsQ0FBa0IsK0JBQWxCO0FBQ0Esb0JBQU0sT0FBTixDQUFjLFVBQVUsTUFBeEIsRUFBZ0MsYUFBSztBQUNuQyxtQkFBYSxJQUFiLENBQWtCLG1CQUFtQixVQUFVLElBQTdCLEVBQW1DLFVBQVUsTUFBVixDQUFpQixDQUFqQixDQUFuQyxFQUF3RCxVQUF4RCxDQUFsQjtBQUNELEtBRkQ7QUFHQSxpQkFBYSxJQUFiLENBQWtCLE9BQWxCO0FBQ0EsaUJBQWEsSUFBYixDQUFrQixnQkFBTSxNQUFOLENBQWEsS0FBYixFQUFvQixhQUFwQixFQUFtQyxFQUFDLFdBQVcsZ0JBQVosRUFBbkMsRUFBa0UsU0FBcEY7QUFDQSxpQkFBYSxJQUFiLENBQWtCLFFBQWxCOztBQUVBLFdBQU8sZ0JBQU0sTUFBTixDQUFhLEtBQWIsRUFBb0IsYUFBYSxJQUFiLENBQWtCLEVBQWxCLENBQXBCLEVBQTJDLEVBQUMsV0FBVywwQkFBWixFQUEzQyxFQUFvRixTQUEzRjtBQUNELEdBaEREOztBQWtEQTs7Ozs7QUFLQSxNQUFJLFlBQVksbUJBQVMsTUFBVCxFQUFpQjtBQUMvQixRQUFJLFlBQVksRUFBaEI7QUFDQSxRQUFJLFlBQUo7QUFDQSxRQUFJLGFBQWEsQ0FBQyxnQkFBTSxPQUFOLENBQWMsT0FBTyxJQUFyQixFQUEyQixDQUFDLFFBQUQsRUFBVyxXQUFYLEVBQXdCLE1BQXhCLEVBQWdDLE1BQWhDLENBQXVDLEVBQUUsWUFBekMsQ0FBM0IsQ0FBbEI7QUFDQSxRQUFJLFFBQVEsT0FBTyxJQUFQLEtBQWdCLFNBQWhCLEdBQTRCLE9BQU8sSUFBUCxDQUFZLEtBQVosQ0FBa0IsR0FBbEIsQ0FBNUIsR0FBcUQsRUFBakU7O0FBRUEsY0FBVSxJQUFWLENBQWUsY0FBYyxNQUFkLENBQWY7O0FBRUEsUUFBSSxnQkFBTSxPQUFOLENBQWMsT0FBTyxJQUFyQixFQUEyQixDQUFDLFVBQUQsRUFBYSxnQkFBYixDQUEzQixDQUFKLEVBQWdFO0FBQzlELGdCQUFVLElBQVYsQ0FBZSxjQUFjLFFBQWQsRUFBd0IsTUFBeEIsRUFBZ0MsRUFBQyxPQUFPLEtBQUssTUFBYixFQUFoQyxDQUFmO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJLGdCQUFNLE9BQU4sQ0FBYyxPQUFPLElBQXJCLEVBQTJCLENBQUMsZ0JBQUQsRUFBbUIsYUFBbkIsQ0FBM0IsQ0FBSixFQUFtRTtBQUNqRSxVQUFJLFNBQVM7QUFDWCxlQUFPLEtBQUssTUFERDtBQUVYLGdCQUFRLGdCQUFNLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLE9BQU8sSUFBUCxDQUFZLE9BQVosQ0FBb0IsUUFBcEIsRUFBOEIsRUFBOUIsQ0FBeEI7QUFGRyxPQUFiOztBQUtBLGdCQUFVLElBQVYsQ0FBZSxjQUFjLFFBQWQsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsQ0FBZjtBQUNEOztBQUVELGNBQVUsSUFBVixDQUFlLGNBQWMsT0FBZCxFQUF1QixNQUF2QixDQUFmOztBQUVBLFdBQU8sSUFBUCxHQUFjLE9BQU8sSUFBUCxJQUFlLEdBQTdCO0FBQ0EsV0FBTyxLQUFQLEdBQWUsT0FBTyxLQUFQLElBQWdCLFNBQS9COztBQUVBO0FBQ0EsUUFBSSxDQUFDLGdCQUFNLE9BQU4sQ0FBYyxPQUFPLElBQXJCLEVBQTJCLENBQUMsUUFBRCxFQUFXLFdBQVgsRUFBd0IsUUFBeEIsQ0FBM0IsQ0FBTCxFQUFvRTtBQUNsRSxnQkFBVSxJQUFWLENBQWUsY0FBYyxhQUFkLEVBQTZCLE1BQTdCLENBQWY7QUFDRDs7QUFFRCxRQUFJLFNBQVMsT0FBTyxJQUFoQixDQUFKLEVBQTJCO0FBQ3pCLFVBQUksYUFBYSxTQUFTLE9BQU8sSUFBaEIsQ0FBakI7QUFDQSxnQkFBVSxJQUFWLENBQWUsZ0JBQWdCLFNBQWhCLEVBQTJCLE1BQTNCLEVBQW1DLFVBQW5DLENBQWY7QUFDRDs7QUFHRCxRQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixnQkFBVSxJQUFWLENBQWUsVUFBVSxPQUFPLEtBQWpCLENBQWY7QUFDRDs7QUFFRCxRQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixnQkFBVSxJQUFWLENBQWUsZ0JBQWdCLEtBQWhCLEVBQXVCLE1BQXZCLENBQWY7QUFDQSxnQkFBVSxJQUFWLENBQWUsZ0JBQWdCLEtBQWhCLEVBQXVCLE1BQXZCLENBQWY7QUFDQSxnQkFBVSxJQUFWLENBQWUsZ0JBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLENBQWY7QUFDRDs7QUFFRDtBQUNBLGNBQVUsSUFBVixDQUFlLGNBQWMsYUFBZCxFQUE2QixNQUE3QixDQUFmOztBQUVBO0FBQ0EsUUFBSSxPQUFPLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDOUIsZ0JBQVUsSUFBVixDQUFlLGdCQUFnQixNQUFoQixFQUF3QixNQUF4QixDQUFmO0FBQ0Q7O0FBRUQ7QUFDQSxjQUFVLElBQVYsQ0FBZSxjQUFjLFdBQWQsRUFBMkIsTUFBM0IsQ0FBZjs7QUFFQSxjQUFVLElBQVYsQ0FBZSxjQUFjLE1BQWQsRUFBc0IsTUFBdEIsQ0FBZjs7QUFFQSxRQUFJLFVBQUosRUFBZ0I7QUFDZCxnQkFBVSxJQUFWLENBQWUsY0FBYyxPQUFkLEVBQXVCLE1BQXZCLENBQWY7QUFDRDs7QUFFRCxRQUFJLE9BQU8sSUFBUCxLQUFnQixNQUFwQixFQUE0QjtBQUMxQixVQUFJLFVBQVM7QUFDWCxlQUFPLEtBQUssYUFERDtBQUVYLGdCQUFRLEtBQUs7QUFGRixPQUFiO0FBSUEsZ0JBQVUsSUFBVixDQUFlLGNBQWMsVUFBZCxFQUEwQixNQUExQixFQUFrQyxPQUFsQyxDQUFmO0FBQ0Q7O0FBRUQsUUFBSSxlQUFlLE9BQU8sSUFBUCxLQUFnQixTQUFoQixHQUE0Qix1QkFBNUIsR0FBc0QsRUFBekU7QUFDQSxRQUFJLGlCQUFpQixtQ0FDYSxZQURiLE9BQXJCO0FBR0EsU0FBSyxHQUFMLElBQVksS0FBSyxLQUFqQixFQUF3QjtBQUN0QixVQUFJLEtBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsR0FBMUIsQ0FBSixFQUFvQztBQUNsQyxZQUFJLFVBQVUsZ0JBQU0sT0FBTixDQUFjLEdBQWQsRUFBbUIsS0FBbkIsSUFBNEIsU0FBNUIsR0FBd0MsRUFBdEQ7QUFDQSxZQUFJLGtCQUFnQixLQUFLLE1BQXJCLGVBQXFDLEdBQXpDO0FBQ0EsdUJBQWUsSUFBZixtREFBb0UsR0FBcEUsY0FBZ0YsTUFBaEYsVUFBMkYsT0FBM0YsNENBQXlJLE1BQXpJLFVBQW9KLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBcEo7QUFDRDtBQUNGOztBQUVELG1CQUFlLElBQWYsQ0FBb0IsUUFBcEI7O0FBRUEsUUFBSSxlQUFlLEVBQUMsT0FBTyxLQUFLLEtBQWIsRUFBb0IsUUFBUSxLQUFLLFNBQWpDLEVBQTRDLFNBQVMsZUFBZSxJQUFmLENBQW9CLEVBQXBCLENBQXJELEVBQW5COztBQUVBLGNBQVUsSUFBVixDQUFlLGNBQWMsUUFBZCxFQUF3QixNQUF4QixFQUFnQyxZQUFoQyxDQUFmOztBQUVBLFFBQUksT0FBTyxJQUFQLENBQVksS0FBWixDQUFrQiw4QkFBbEIsQ0FBSixFQUF1RDtBQUNyRCxnQkFBVSxJQUFWLENBQWUsY0FBYyxPQUFkLEVBQXVCLE1BQXZCLEVBQStCLEVBQUMsT0FBTyxLQUFLLFdBQWIsRUFBMEIsUUFBUSxLQUFLLGNBQXZDLEVBQS9CLENBQWY7QUFDRDs7QUFFRCxRQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixnQkFBVSxJQUFWLENBQWUsY0FBYyxVQUFkLEVBQTBCLE1BQTFCLEVBQWtDLEVBQUMsT0FBTyxHQUFSLEVBQWEsUUFBUSxLQUFLLGlCQUExQixFQUFsQyxDQUFmO0FBQ0Q7O0FBRUQsUUFBSSxPQUFPLElBQVAsQ0FBWSxLQUFaLENBQWtCLEVBQUUsaUJBQXBCLENBQUosRUFBNEM7QUFDMUMsZ0JBQVUsSUFBVixDQUFlLGFBQWEsTUFBYixDQUFmO0FBQ0Q7O0FBRUQsUUFBSSxnQkFBTSxPQUFOLENBQWMsT0FBTyxJQUFyQixFQUEyQixDQUFDLE1BQUQsRUFBUyxVQUFULENBQTNCLENBQUosRUFBc0Q7QUFDcEQsZ0JBQVUsSUFBVixDQUFlLGdCQUFnQixXQUFoQixFQUE2QixNQUE3QixDQUFmO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJLEtBQUssYUFBTCxDQUFtQixPQUFPLElBQTFCLENBQUosRUFBcUM7QUFDbkMsZ0JBQVUsSUFBVixDQUFlLHFCQUFxQixLQUFLLGFBQUwsQ0FBbUIsT0FBTyxJQUExQixDQUFyQixFQUFzRCxNQUF0RCxDQUFmO0FBQ0Q7O0FBRUQsV0FBTyxVQUFVLElBQVYsQ0FBZSxFQUFmLENBQVA7QUFDRCxHQWpIRDs7QUFtSEE7Ozs7OztBQU1BLFdBQVMsb0JBQVQsQ0FBOEIsWUFBOUIsRUFBNEMsTUFBNUMsRUFBb0Q7QUFDbEQsUUFBSSxXQUFXLEVBQWY7O0FBRUEsU0FBSyxJQUFJLFNBQVQsSUFBc0IsWUFBdEIsRUFBb0M7QUFDbEMsVUFBSSxhQUFhLGNBQWIsQ0FBNEIsU0FBNUIsQ0FBSixFQUE0QztBQUMxQyxZQUFJLE9BQU8sS0FBSyxTQUFMLENBQVg7QUFDQSxZQUFJLFlBQVksYUFBYSxTQUFiLEVBQXdCLEtBQXhDO0FBQ0EscUJBQWEsU0FBYixFQUF3QixLQUF4QixHQUFnQyxPQUFPLFNBQVAsS0FBcUIsYUFBYSxTQUFiLEVBQXdCLEtBQTdDLElBQXNELEVBQXRGOztBQUVBLFlBQUksYUFBYSxTQUFiLEVBQXdCLEtBQTVCLEVBQW1DO0FBQ2pDLGVBQUssU0FBTCxJQUFrQixhQUFhLFNBQWIsRUFBd0IsS0FBMUM7QUFDRDs7QUFFRCxZQUFJLGFBQWEsU0FBYixFQUF3QixPQUE1QixFQUFxQztBQUNuQyxtQkFBUyxJQUFULENBQWMsZ0JBQWdCLFNBQWhCLEVBQTJCLGFBQWEsU0FBYixDQUEzQixDQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsbUJBQVMsSUFBVCxDQUFjLGVBQWUsU0FBZixFQUEwQixhQUFhLFNBQWIsQ0FBMUIsQ0FBZDtBQUNEOztBQUVELGFBQUssU0FBTCxJQUFrQixJQUFsQjtBQUNBLHFCQUFhLFNBQWIsRUFBd0IsS0FBeEIsR0FBZ0MsU0FBaEM7QUFDRDtBQUNGOztBQUVELFdBQU8sU0FBUyxJQUFULENBQWMsRUFBZCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFdBQVMsY0FBVCxDQUF3QixJQUF4QixFQUE4QixLQUE5QixFQUFxQztBQUNuQyxRQUFJLFlBQVk7QUFDWixVQUFJLE9BQU8sR0FBUCxHQUFhLEtBQUssTUFEVjtBQUVaLGFBQU8sTUFBTSxXQUFOLElBQXFCLE1BQU0sS0FBM0IsSUFBb0MsS0FBSyxXQUFMLEVBRi9CO0FBR1osWUFBTSxJQUhNO0FBSVosWUFBTSxNQUFNLElBQU4sSUFBYyxNQUpSO0FBS1osaUJBQVcsVUFBUSxJQUFSO0FBTEMsS0FBaEI7QUFPQSxRQUFJLHlCQUF1QixVQUFVLEVBQWpDLFVBQXdDLEtBQUssSUFBTCxDQUF4QyxhQUFKOztBQUVBLFFBQUksQ0FBQyxnQkFBTSxPQUFOLENBQWMsVUFBVSxJQUF4QixFQUE4QixDQUFDLFVBQUQsRUFBYSxnQkFBYixFQUErQixhQUEvQixDQUE5QixDQUFMLEVBQW1GO0FBQ2pGLGdCQUFVLFNBQVYsQ0FBb0IsSUFBcEIsQ0FBeUIsY0FBekI7QUFDRDs7QUFFRCxnQkFBWSxzQkFBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCLFNBQXpCLENBQVo7QUFDQSxRQUFJLHdCQUFzQixnQkFBTSxVQUFOLENBQWlCLFNBQWpCLENBQXRCLE1BQUo7QUFDQSxRQUFJLHlDQUF1QyxTQUF2QyxXQUFKO0FBQ0EsdUNBQWlDLElBQWpDLGVBQStDLEtBQS9DLEdBQXVELFNBQXZEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7QUFPQSxXQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0IsT0FBL0IsRUFBd0M7QUFDdEMsUUFBSSxRQUFRLG9CQUFZLFFBQVEsT0FBcEIsRUFBNkIsR0FBN0IsQ0FBaUMsZUFBTztBQUNsRCxVQUFJLFFBQVEsRUFBQyxPQUFPLEdBQVIsRUFBWjtBQUNBLFVBQUksUUFBUSxRQUFRLEtBQXBCLEVBQTJCO0FBQ3pCLGNBQU0sUUFBTixHQUFpQixJQUFqQjtBQUNEO0FBQ0QsMEJBQWtCLGdCQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBbEIsU0FBNkMsUUFBUSxPQUFSLENBQWdCLEdBQWhCLENBQTdDO0FBQ0QsS0FOVyxDQUFaO0FBT0EsUUFBSSxjQUFjO0FBQ2hCLFVBQUksT0FBTyxHQUFQLEdBQWEsS0FBSyxNQUROO0FBRWhCLGFBQU8sUUFBUSxXQUFSLElBQXVCLFFBQVEsS0FBL0IsSUFBd0MsS0FBSyxXQUFMLEVBRi9CO0FBR2hCLFlBQU0sSUFIVTtBQUloQiwwQkFBa0IsSUFBbEI7QUFKZ0IsS0FBbEI7QUFNQSxRQUFJLHlCQUF1QixZQUFZLEVBQW5DLFVBQTBDLEtBQUssSUFBTCxDQUExQyxhQUFKOztBQUVBLHdCQUFZLE9BQVosRUFBcUIsTUFBckIsQ0FBNEIsZ0JBQVE7QUFDbEMsYUFBTyxDQUFDLGdCQUFNLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsT0FBckIsQ0FBcEIsQ0FBUjtBQUNELEtBRkQsRUFFRyxPQUZILENBRVcsVUFBUyxJQUFULEVBQWU7QUFDeEIsa0JBQVksSUFBWixJQUFvQixRQUFRLElBQVIsQ0FBcEI7QUFDRCxLQUpEOztBQU1BLFFBQUksc0JBQW9CLGdCQUFNLFVBQU4sQ0FBaUIsV0FBakIsQ0FBcEIsU0FBcUQsTUFBTSxJQUFOLENBQVcsRUFBWCxDQUFyRCxjQUFKO0FBQ0EsUUFBSSx5Q0FBdUMsTUFBdkMsV0FBSjtBQUNBLHVDQUFpQyxJQUFqQyxlQUErQyxLQUEvQyxHQUF1RCxTQUF2RDtBQUNEOztBQUVELE1BQUksZ0JBQWdCLFNBQWhCLGFBQWdCLENBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUIsTUFBdkIsRUFBK0I7QUFDakQsUUFBSSxLQUFLLGFBQUwsQ0FBbUIsT0FBTyxJQUExQixLQUFtQyxLQUFLLGFBQUwsQ0FBbUIsT0FBTyxJQUExQixFQUFnQyxJQUFoQyxDQUF2QyxFQUE4RTtBQUM1RTtBQUNEOztBQUVELFFBQUksUUFBUSxTQUFSLEtBQVEsQ0FBQyxHQUFELEVBQVM7QUFDbkIsOEJBQXNCLElBQXRCLFNBQThCLEtBQUssTUFBbkMsVUFBOEMsR0FBOUM7QUFDRCxLQUZEO0FBR0EsUUFBSSxVQUFXLE9BQU8sSUFBUCxNQUFpQixTQUFqQixHQUE2QixTQUE3QixHQUF5QyxFQUF4RDtBQUNBLFFBQUksK0NBQTZDLElBQTdDLGdCQUE0RCxJQUE1RCx1QkFBa0YsT0FBbEYsYUFBaUcsSUFBakcsU0FBeUcsS0FBSyxNQUE5RyxTQUFKO0FBQ0EsUUFBSSxPQUFPLEVBQVg7QUFDQSxRQUFJLFFBQVEsQ0FDVixLQURVLENBQVo7O0FBSUEsUUFBSSxPQUFPLEtBQVgsRUFBa0I7QUFDaEIsV0FBSyxPQUFMLENBQWEsTUFBTSxPQUFPLEtBQWIsQ0FBYjtBQUNEOztBQUVELFFBQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLFlBQU0sSUFBTixDQUFXLE1BQU0sT0FBTyxNQUFiLENBQVg7QUFDRDs7QUFFRCxRQUFJLE9BQU8sT0FBWCxFQUFvQjtBQUNsQixZQUFNLElBQU4sQ0FBVyxPQUFPLE9BQWxCO0FBQ0Q7O0FBRUQsVUFBTSxPQUFOLENBQWMsMEJBQWQ7QUFDQSxVQUFNLElBQU4sQ0FBVyxRQUFYOztBQUVBLHVDQUFpQyxJQUFqQyxlQUErQyxLQUFLLE1BQUwsQ0FBWSxLQUFaLEVBQW1CLElBQW5CLENBQXdCLEVBQXhCLENBQS9DO0FBQ0QsR0EvQkQ7O0FBaUNBLE1BQUksWUFBWSxTQUFaLFNBQVksQ0FBUyxLQUFULEVBQWdCO0FBQzVCLFFBQUksU0FBUyxLQUFLLE1BQUwsQ0FBWSxHQUF6QjtBQUNBLFFBQUksYUFBYSxFQUFqQjs7QUFFRixRQUFJLE1BQUosRUFBWTtBQUNWLFVBQUkseUJBQXVCLEtBQUssS0FBNUIsYUFBSjtBQUNBLHVDQUErQixLQUEvQjtBQUNBLG9CQUFjLHNDQUFkOztBQUVBLDBCQUFZLE1BQVosRUFBb0IsT0FBcEIsQ0FBNEIsbUJBQVc7QUFDckMsWUFBSSxZQUFZLENBQUMsUUFBRCxFQUFXLEtBQVgsV0FBeUIsT0FBekIsQ0FBaEI7QUFDQSxZQUFJLFVBQVUsT0FBZCxFQUF1QjtBQUNyQixvQkFBVSxJQUFWLENBQWUsVUFBZjtBQUNEOztBQUVELDBDQUFnQyxPQUFoQywrQkFBaUUsVUFBVSxJQUFWLENBQWUsR0FBZixDQUFqRSxVQUF5RixLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQWdCLE9BQWhCLENBQXpGO0FBQ0QsT0FQRDs7QUFTQSxvQkFBYyxRQUFkOztBQUVBLDJEQUFtRCxVQUFuRCxTQUFpRSxVQUFqRTtBQUNEOztBQUVELFdBQU8sVUFBUDtBQUNELEdBeEJEOztBQTBCQTs7Ozs7O0FBTUEsTUFBSSxrQkFBa0IseUJBQVMsU0FBVCxFQUFvQixNQUFwQixFQUE0QjtBQUNoRCxRQUFJLEtBQUssYUFBTCxDQUFtQixPQUFPLElBQTFCLEtBQW1DLEtBQUssYUFBTCxDQUFtQixPQUFPLElBQTFCLEVBQWdDLFNBQWhDLENBQXZDLEVBQW1GO0FBQ2pGO0FBQ0Q7O0FBRUQsUUFBSSxVQUFVLE9BQU8sU0FBUCxDQUFkO0FBQ0EsUUFBSSxZQUFZLEtBQUssU0FBTCxLQUFtQixTQUFuQztBQUNBLFFBQUksY0FBYyxzQkFBb0IsU0FBcEIsQ0FBbEI7QUFDQSxRQUFJLGNBQWM7QUFDaEIsWUFBTSxRQURVO0FBRWhCLGFBQU8sT0FGUztBQUdoQixZQUFNLFNBSFU7QUFJaEIsV0FBSyxHQUpXO0FBS2hCLG1CQUFhLFdBTEc7QUFNaEIsMEJBQWtCLFNBQWxCLGtCQU5nQjtBQU9oQixVQUFPLFNBQVAsU0FBb0IsS0FBSztBQVBULEtBQWxCO0FBU0EsUUFBSSw4QkFBNEIsZ0JBQU0sVUFBTixDQUFpQixnQkFBTSxPQUFOLENBQWMsV0FBZCxDQUFqQixDQUE1QixNQUFKO0FBQ0EsUUFBSSx5Q0FBdUMsZUFBdkMsV0FBSjs7QUFFQSx1Q0FBaUMsU0FBakMsMkJBQWdFLFlBQVksRUFBNUUsVUFBbUYsU0FBbkYsaUJBQXdHLFNBQXhHO0FBQ0QsR0FyQkQ7O0FBdUJBOzs7Ozs7O0FBT0EsTUFBSSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBUyxTQUFULEVBQW9CLE1BQXBCLEVBQTRCLFVBQTVCLEVBQXdDO0FBQzVELFFBQUksS0FBSyxhQUFMLENBQW1CLE9BQU8sSUFBMUIsS0FBbUMsS0FBSyxhQUFMLENBQW1CLE9BQU8sSUFBMUIsRUFBZ0MsU0FBaEMsQ0FBdkMsRUFBbUY7QUFDakY7QUFDRDtBQUNELFFBQUksZ0JBQWdCLFdBQVcsR0FBWCxDQUFlLFVBQUMsTUFBRCxFQUFTLENBQVQsRUFBZTtBQUNoRCxVQUFJLGNBQWMsc0JBQWM7QUFDOUIsZUFBVSxLQUFLLE1BQWYsU0FBeUIsQ0FESztBQUU5QixlQUFPO0FBRnVCLE9BQWQsRUFHZixNQUhlLENBQWxCO0FBSUEsVUFBSSxPQUFPLEtBQVAsS0FBaUIsT0FBTyxTQUFQLENBQXJCLEVBQXdDO0FBQ3RDLG9CQUFZLFFBQVosR0FBdUIsSUFBdkI7QUFDRDtBQUNELDBCQUFrQixnQkFBTSxVQUFOLENBQWlCLGdCQUFNLE9BQU4sQ0FBYyxXQUFkLENBQWpCLENBQWxCLFNBQWtFLFlBQVksS0FBOUU7QUFDRCxLQVRtQixDQUFwQjtBQVVBLFFBQUksY0FBYztBQUNkLFVBQUksWUFBWSxHQUFaLEdBQWtCLEtBQUssTUFEYjtBQUVkLFlBQU0sU0FGUTtBQUdkLDBCQUFrQixTQUFsQjtBQUhjLEtBQWxCO0FBS0EsUUFBSSx5QkFBdUIsWUFBWSxFQUFuQyxXQUEwQyxLQUFLLFNBQUwsS0FBbUIsZ0JBQU0sVUFBTixDQUFpQixTQUFqQixDQUE3RCxjQUFKO0FBQ0EsUUFBSSxzQkFBb0IsZ0JBQU0sVUFBTixDQUFpQixXQUFqQixDQUFwQixTQUFxRCxjQUFjLElBQWQsQ0FBbUIsRUFBbkIsQ0FBckQsY0FBSjtBQUNBLFFBQUkseUNBQXVDLE1BQXZDLFdBQUo7O0FBRUEsdUNBQWlDLFlBQVksSUFBN0MsZUFBMkQsS0FBM0QsR0FBbUUsU0FBbkU7QUFDRCxHQXhCRDs7QUEwQkE7Ozs7OztBQU1BLE1BQUksZ0JBQWdCLFNBQWhCLGFBQWdCLENBQVMsU0FBVCxFQUFvQixNQUFwQixFQUE0QjtBQUM5QyxRQUFJLEtBQUssYUFBTCxDQUFtQixPQUFPLElBQTFCLEtBQW1DLEtBQUssYUFBTCxDQUFtQixPQUFPLElBQTFCLEVBQWdDLFNBQWhDLENBQXZDLEVBQW1GO0FBQ2pGO0FBQ0Q7O0FBRUQsUUFBSSxvQkFBb0IsQ0FDdEIsTUFEc0IsRUFFdEIsVUFGc0IsRUFHdEIsUUFIc0IsRUFJdEIsY0FKc0IsQ0FBeEI7O0FBT0EsUUFBSSxTQUFTLENBQ1gsUUFEVyxFQUVYLFdBRlcsQ0FBYjs7QUFLQSxRQUFJLFdBQVcsQ0FBQyxXQUFELENBQWY7O0FBRUEsUUFBSSxVQUFVLE9BQU8sU0FBUCxLQUFxQixFQUFuQztBQUNBLFFBQUksWUFBWSxLQUFLLFNBQUwsQ0FBaEI7QUFDQSxRQUFJLGNBQWMsT0FBZCxJQUF5QixnQkFBTSxPQUFOLENBQWMsT0FBTyxJQUFyQixFQUEyQixRQUEzQixDQUE3QixFQUFtRTtBQUNqRSxrQkFBWSxLQUFLLE9BQWpCO0FBQ0Q7O0FBRUQsUUFBSSxTQUFTLE1BQWIsRUFBcUI7QUFDbkIsZUFBUyxPQUFPLE1BQVAsQ0FBYyxTQUFTLE1BQXZCLENBQVQ7QUFDRDs7QUFFRCxRQUFJLGNBQWMsc0JBQW9CLFNBQXBCLEtBQW9DLEVBQXREO0FBQ0EsUUFBSSxpQkFBaUIsRUFBckI7QUFDQSxRQUFJLGFBQWEsRUFBakI7O0FBRUE7QUFDQSxRQUFJLGNBQWMsYUFBZCxJQUErQixDQUFDLGdCQUFNLE9BQU4sQ0FBYyxPQUFPLElBQXJCLEVBQTJCLGlCQUEzQixDQUFwQyxFQUFtRjtBQUNqRixpQkFBVyxJQUFYLENBQWdCLElBQWhCO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJLGNBQWMsTUFBZCxJQUF3QixnQkFBTSxPQUFOLENBQWMsT0FBTyxJQUFyQixFQUEyQixNQUEzQixDQUE1QixFQUFnRTtBQUM5RCxpQkFBVyxJQUFYLENBQWdCLElBQWhCO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLFdBQVcsSUFBWCxDQUFnQjtBQUFBLGFBQVEsU0FBUyxJQUFqQjtBQUFBLEtBQWhCLENBQUwsRUFBNkM7QUFDM0MsVUFBSSxjQUFjO0FBQ2hCLGNBQU0sU0FEVTtBQUVoQixxQkFBYSxXQUZHO0FBR2hCLDRCQUFrQixTQUFsQixrQkFIZ0I7QUFJaEIsWUFBTyxTQUFQLFNBQW9CLEtBQUs7QUFKVCxPQUFsQjtBQU1BLFVBQUksa0NBQWdDLFlBQVksRUFBNUMsVUFBbUQsU0FBbkQsYUFBSjs7QUFFQSxVQUFJLGNBQWMsT0FBbEIsRUFBMkI7QUFDekIsb0RBQTBDLGdCQUFNLFVBQU4sQ0FBaUIsV0FBakIsQ0FBMUMsU0FBMkUsT0FBM0U7QUFDRCxPQUZELE1BRU87QUFDTCxvQkFBWSxLQUFaLEdBQW9CLE9BQXBCO0FBQ0Esb0JBQVksSUFBWixHQUFtQixNQUFuQjtBQUNBLHNDQUE0QixnQkFBTSxVQUFOLENBQWlCLFdBQWpCLENBQTVCO0FBQ0Q7O0FBRUQsVUFBSSx5Q0FBdUMsY0FBdkMsV0FBSjs7QUFFQSxVQUFJLGFBQWEsT0FBakI7QUFDQSxVQUFJLGNBQWMsT0FBbEIsRUFBMkI7QUFDekIscUJBQWEsT0FBTyxPQUFQLElBQWtCLE9BQU8sT0FBUCxLQUFtQixPQUFyQyxJQUFnRCxNQUE3RDtBQUNEOztBQUVELG1EQUEyQyxTQUEzQywrQkFBOEUsVUFBOUUsVUFBNkYsY0FBN0YsU0FBK0csU0FBL0c7QUFDRDs7QUFFRCxXQUFPLGNBQVA7QUFDRCxHQXZFRDs7QUF5RUEsTUFBSSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBUyxNQUFULEVBQWlCO0FBQ25DLFFBQUksWUFBWSxDQUNaLFFBRFksRUFFWixXQUZZLEVBR1osUUFIWSxDQUFoQjtBQUtBLFFBQUksU0FBUyxFQUFiO0FBQ0EsUUFBSSxlQUFlLEVBQW5COztBQUVBLFFBQUksZ0JBQU0sT0FBTixDQUFjLE9BQU8sSUFBckIsRUFBMkIsU0FBM0IsQ0FBSixFQUEyQztBQUN6QyxhQUFPLElBQVAsQ0FBWSxJQUFaO0FBQ0Q7QUFDRCxRQUFJLENBQUMsT0FBTyxJQUFQLENBQVk7QUFBQSxhQUFRLFNBQVMsSUFBakI7QUFBQSxLQUFaLENBQUwsRUFBeUM7QUFDdkMscUJBQWUsY0FBYyxVQUFkLEVBQTBCLE1BQTFCLEVBQWtDLEVBQUMsT0FBTyxLQUFLLFFBQWIsRUFBbEMsQ0FBZjtBQUNEOztBQUVELFdBQU8sWUFBUDtBQUNELEdBakJEOztBQW1CQTtBQUNBLE1BQUksaUJBQWlCLFNBQWpCLGNBQWlCLENBQVMsTUFBVCxFQUErQjtBQUFBLFFBQWQsS0FBYyx1RUFBTixJQUFNOztBQUNsRCxRQUFJLE9BQU8sT0FBTyxJQUFQLElBQWUsTUFBMUI7QUFDQSxRQUFJLFFBQVEsT0FBTyxLQUFQLElBQWdCLEtBQUssSUFBTCxDQUFoQixJQUE4QixLQUFLLEtBQS9DO0FBQ0EsUUFBSSxTQUFTLEVBQUUsR0FBRixFQUFPLEtBQUssTUFBWixFQUFvQjtBQUM3QixVQUFJLFNBQVMsS0FBSyxNQURXO0FBRTdCLGlCQUFXLCtCQUZrQjtBQUc3QixhQUFPLEtBQUs7QUFIaUIsS0FBcEIsQ0FBYjtBQUtBLFFBQUksWUFBWSxFQUFFLEdBQUYsRUFBTyxJQUFQLEVBQWE7QUFDM0IsVUFBSSxLQUFLLE1BQUwsR0FBYyxPQURTO0FBRTNCLGlCQUFXLDZCQUZnQjtBQUczQixhQUFPLEtBQUs7QUFIZSxLQUFiLENBQWhCO0FBS0EsUUFBSSxVQUFVLEVBQUUsR0FBRixFQUFPLElBQVAsRUFBYTtBQUN6QixVQUFJLEtBQUssTUFBTCxHQUFjLE9BRE87QUFFekIsaUJBQVcsMkJBRmM7QUFHekIsYUFBTyxLQUFLO0FBSGEsS0FBYixDQUFkOztBQU1BLFFBQUksYUFBYSxFQUNmLEtBRGUsRUFDUixDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLE1BQXJCLENBRFEsRUFDc0IsRUFBQyxXQUFXLGVBQVosRUFEdEIsRUFFZixTQUZGOztBQUlBO0FBQ0Esa0RBQTRDLGdCQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBNUM7O0FBRUEsUUFBSSxrQkFBa0IsT0FBTyxRQUFQLEdBQWtCLHdCQUFsQixHQUE2QyxFQUFuRTtBQUNBLHVEQUFpRCxlQUFqRDs7QUFFQSxRQUFJLE9BQU8sV0FBWCxFQUF3QjtBQUN0QixVQUFJLFFBQVE7QUFDVixtQkFBVyxpQkFERDtBQUVWLGlCQUFTLE9BQU87QUFGTixPQUFaO0FBSUEsK0JBQXVCLGdCQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBdkI7QUFDRDs7QUFFRCxrQkFBYyxFQUFFLEtBQUYsRUFBUyxFQUFULEVBQWEsRUFBQyxXQUFXLGFBQVosRUFBYixFQUF5QyxTQUF2RDtBQUNBLGdDQUEwQixLQUFLLE1BQS9CO0FBQ0Esa0JBQWMsNkJBQWQ7O0FBRUEsa0JBQWMsVUFBVSxNQUFWLENBQWQ7QUFDQSxrQkFBYyxFQUFFLEdBQUYsRUFBTyxLQUFLLEtBQVosRUFBbUIsRUFBQyxXQUFXLGFBQVosRUFBbkIsRUFBK0MsU0FBN0Q7O0FBRUEsa0JBQWMsUUFBZDtBQUNBLGtCQUFjLFFBQWQ7O0FBRUEsUUFBSSxRQUFRLEVBQUUsSUFBRixFQUFRLFVBQVIsRUFBb0I7QUFDNUIsZUFBUyxPQUFPLG1CQURZO0FBRTVCLGNBQVEsSUFGb0I7QUFHNUIsVUFBSSxLQUFLO0FBSG1CLEtBQXBCLENBQVo7QUFLQSxRQUFJLE1BQU0sRUFBRSxLQUFGLENBQVY7O0FBRUEsUUFBSSxJQUFKLENBQVMsV0FBVCxFQUFzQixFQUFDLE9BQU8sTUFBUixFQUF0Qjs7QUFFQSxRQUFJLE9BQU8sUUFBUSxTQUFmLEtBQTZCLFdBQWpDLEVBQThDO0FBQzVDLFFBQUUsTUFBRixFQUFVLEVBQUUsS0FBWixFQUFtQixFQUFuQixDQUFzQixRQUFRLFNBQTlCLEVBQXlDLE1BQXpDLENBQWdELEdBQWhEO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxNQUFQLENBQWMsR0FBZDtBQUNEOztBQUVELE1BQUUsbUJBQUYsRUFBdUIsR0FBdkIsRUFDQyxRQURELENBQ1UsRUFBQyxRQUFRO0FBQUEsZUFBTSxRQUFRLGFBQVIsQ0FBc0IsR0FBdEIsQ0FBTjtBQUFBLE9BQVQsRUFEVjs7QUFHQSxZQUFRLGFBQVIsQ0FBc0IsR0FBdEI7O0FBRUEsUUFBSSxLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsS0FBNkIsS0FBSyxjQUFMLENBQW9CLElBQXBCLEVBQTBCLEtBQTNELEVBQWtFO0FBQ2hFLFdBQUssY0FBTCxDQUFvQixJQUFwQixFQUEwQixLQUExQixDQUFnQyxLQUFoQztBQUNEOztBQUVELFFBQUksS0FBSyxTQUFMLElBQWtCLEtBQXRCLEVBQTZCO0FBQzNCLGNBQVEsWUFBUjtBQUNBLGNBQVEsVUFBUixDQUFtQixLQUFLLE1BQXhCLEVBQWdDLEtBQWhDO0FBQ0E7QUFDRDs7QUFFRCxTQUFLLE1BQUwsR0FBYyxRQUFRLFdBQVIsQ0FBb0IsS0FBSyxNQUF6QixDQUFkO0FBQ0QsR0E5RUQ7O0FBZ0ZBO0FBQ0EsTUFBSSxxQkFBcUIsU0FBckIsa0JBQXFCLENBQVMsSUFBVCxFQUFlLFVBQWYsRUFBMkIsY0FBM0IsRUFBMkM7QUFDbEUsUUFBSSxrQkFBa0I7QUFDbEIsZ0JBQVcsaUJBQWlCLFVBQWpCLEdBQThCO0FBRHZCLEtBQXRCO0FBR0EsUUFBSSxrQkFBa0IsQ0FDcEIsT0FEb0IsRUFFcEIsT0FGb0IsRUFHcEIsVUFIb0IsQ0FBdEI7QUFLQSxRQUFJLGVBQWUsRUFBbkI7QUFDQSxRQUFJLGlCQUFpQixFQUFDLFVBQVUsS0FBWCxFQUFrQixPQUFPLEVBQXpCLEVBQTZCLE9BQU8sRUFBcEMsRUFBckI7O0FBRUEsaUJBQWEsc0JBQWMsY0FBZCxFQUE4QixVQUE5QixDQUFiOztBQUVBLFNBQUssSUFBSSxJQUFJLGdCQUFnQixNQUFoQixHQUF5QixDQUF0QyxFQUF5QyxLQUFLLENBQTlDLEVBQWlELEdBQWpELEVBQXNEO0FBQ3BELFVBQUksT0FBTyxnQkFBZ0IsQ0FBaEIsQ0FBWDtBQUNBLFVBQUksV0FBVyxjQUFYLENBQTBCLElBQTFCLENBQUosRUFBcUM7QUFDbkMsWUFBSSxRQUFRO0FBQ1YsZ0JBQU0sZ0JBQWdCLElBQWhCLEtBQXlCLE1BRHJCO0FBRVYscUJBQVcsWUFBWSxJQUZiO0FBR1YsaUJBQU8sV0FBVyxJQUFYLENBSEc7QUFJVixnQkFBTSxPQUFPO0FBSkgsU0FBWjs7QUFPQSxjQUFNLFdBQU4sR0FBb0Isc0JBQW9CLElBQXBCLEtBQStCLEVBQW5EOztBQUVBLFlBQUksU0FBUyxVQUFULElBQXVCLFdBQVcsUUFBWCxLQUF3QixJQUFuRCxFQUF5RDtBQUN2RCxnQkFBTSxPQUFOLEdBQWdCLFdBQVcsUUFBM0I7QUFDRDs7QUFFRCxxQkFBYSxJQUFiLENBQWtCLEVBQUUsT0FBRixFQUFXLElBQVgsRUFBaUIsS0FBakIsQ0FBbEI7QUFDRDtBQUNGOztBQUVELFFBQUksY0FBYztBQUNoQixpQkFBVyxZQURLO0FBRWhCLGFBQU8sS0FBSztBQUZJLEtBQWxCO0FBSUEsaUJBQWEsSUFBYixDQUFrQixnQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixLQUFLLE1BQXZCLEVBQStCLFdBQS9CLENBQWxCOztBQUVBLFFBQUksUUFBUSxnQkFBTSxNQUFOLENBQWEsSUFBYixFQUFtQixZQUFuQixDQUFaOztBQUVBLFdBQU8sTUFBTSxTQUFiO0FBQ0QsR0EzQ0Q7O0FBNkNBLE1BQUksWUFBWSxTQUFTLFNBQVQsQ0FBbUIsV0FBbkIsRUFBZ0M7QUFDOUMsUUFBSSxZQUFZLFlBQVksSUFBWixDQUFpQixJQUFqQixDQUFoQjtBQUNBLFFBQUksT0FBTyxZQUFZLElBQVosQ0FBaUIsTUFBakIsQ0FBWDtBQUNBLFFBQUksS0FBSyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQVQ7QUFDQSxRQUFJLFlBQVksT0FBTyxHQUFQLEdBQWEsRUFBN0I7QUFDQSxRQUFJLFNBQVMsWUFBWSxLQUFaLEVBQWI7O0FBRUEsV0FBTyxJQUFQLENBQVksTUFBWixFQUFvQixJQUFwQixDQUF5QixVQUFDLENBQUQsRUFBSSxJQUFKLEVBQWE7QUFDckMsV0FBSyxFQUFMLEdBQVUsS0FBSyxFQUFMLENBQVEsT0FBUixDQUFnQixTQUFoQixFQUEyQixLQUFLLE1BQWhDLENBQVY7QUFDQSxLQUZEOztBQUlBLFdBQU8sSUFBUCxDQUFZLE9BQVosRUFBcUIsSUFBckIsQ0FBMEIsWUFBVztBQUNwQyxXQUFLLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsS0FBSyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLE9BQXpCLENBQWlDLFNBQWpDLEVBQTRDLEtBQUssTUFBakQsQ0FBekI7QUFDQSxLQUZEOztBQUlBLFdBQU8sSUFBUCxDQUFZLFlBQVc7QUFDckIsUUFBRSx1QkFBRixFQUEyQixJQUEzQixDQUFnQyxZQUFXO0FBQ3pDLFlBQUksVUFBVSxLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBZDtBQUNBLGtCQUFVLFFBQVEsU0FBUixDQUFrQixDQUFsQixFQUFzQixRQUFRLFdBQVIsQ0FBb0IsR0FBcEIsSUFBMkIsQ0FBakQsQ0FBVjtBQUNBLGtCQUFVLFVBQVUsR0FBRyxRQUFILEVBQXBCO0FBQ0EsYUFBSyxZQUFMLENBQWtCLE1BQWxCLEVBQTBCLE9BQTFCO0FBQ0QsT0FMRDtBQU1ELEtBUEQ7O0FBU0EsV0FBTyxJQUFQLENBQVksZ0JBQVosRUFBOEIsSUFBOUIsQ0FBbUMsUUFBbkMsRUFBNkMsSUFBN0MsQ0FBa0QsWUFBVztBQUMzRCxVQUFJLEtBQUssWUFBTCxDQUFrQixNQUFsQixNQUE4QixNQUFsQyxFQUEwQztBQUN4QyxZQUFJLFNBQVMsS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQWI7QUFDQSxpQkFBUyxPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsRUFBcUIsT0FBTyxXQUFQLENBQW1CLEdBQW5CLElBQTBCLENBQS9DLENBQVQ7QUFDQSxpQkFBUyxTQUFTLEdBQUcsUUFBSCxFQUFsQjtBQUNBLGFBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixNQUEzQjtBQUNEO0FBQ0YsS0FQRDs7QUFTQSxXQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLEtBQUssTUFBdkI7QUFDQSxXQUFPLElBQVAsQ0FBWSxNQUFaLEVBQW9CLFNBQXBCO0FBQ0EsV0FBTyxRQUFQLENBQWdCLFFBQWhCO0FBQ0EsTUFBRSxtQkFBRixFQUF1QixNQUF2QixFQUErQixRQUEvQjs7QUFFQSxRQUFJLEtBQUssY0FBTCxDQUFvQixJQUFwQixLQUE2QixLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsRUFBMEIsT0FBM0QsRUFBb0U7QUFDbEUsV0FBSyxjQUFMLENBQW9CLElBQXBCLEVBQTBCLE9BQTFCLENBQWtDLE9BQU8sQ0FBUCxDQUFsQztBQUNEOztBQUVELFNBQUssTUFBTCxHQUFjLFFBQVEsV0FBUixDQUFvQixLQUFLLE1BQXpCLENBQWQ7QUFDQSxXQUFPLE1BQVA7QUFDRCxHQTVDRDs7QUE4Q0E7O0FBRUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixTQUE5QixFQUF5QyxVQUFTLENBQVQsRUFBWTtBQUNuRCxRQUFJLFNBQVMsRUFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixtQkFBaEIsQ0FBYjtBQUNBLE1BQUUsY0FBRjtBQUNBLFFBQUksZUFBZSxFQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLHlCQUFoQixFQUEyQyxRQUEzQyxDQUFvRCxJQUFwRCxFQUEwRCxNQUE3RTtBQUNBLFFBQUksZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLFdBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsWUFBWSxLQUFLLGdCQUFuQztBQUNELEtBRkQsTUFFTztBQUNMLFFBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxJQUFmLEVBQXFCLE9BQXJCLENBQTZCLEtBQTdCLEVBQW9DLFlBQVc7QUFDN0MsVUFBRSxJQUFGLEVBQVEsTUFBUjtBQUNBLGdCQUFRLGFBQVIsQ0FBc0IsTUFBdEI7QUFDQSxnQkFBUSxJQUFSLENBQWEsSUFBYixDQUFrQixPQUFsQjtBQUNELE9BSkQ7QUFLRDtBQUNGLEdBYkQ7O0FBZUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLE9BQXhCLEVBQWlDLFVBQVMsQ0FBVCxFQUFZO0FBQzNDLFFBQUksU0FBUyxFQUFFLElBQUYsQ0FBYjtBQUNBLFFBQUksRUFBRSxPQUFGLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEIsVUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFaLE1BQXdCLFVBQTVCLEVBQXdDO0FBQ3RDLGVBQU8sT0FBUCxDQUFlLE9BQWY7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLEtBQVA7QUFDQSxZQUFJLFdBQVcsT0FBTyxHQUFQLEVBQWY7QUFDQSxlQUFPLEdBQVAsQ0FBVyxRQUFYO0FBQ0Q7QUFDRixLQVJELE1BUU87QUFDTCxhQUFPLEtBQVA7QUFDRDtBQUNGLEdBYkQ7O0FBZUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxrQkFBVixFQUE4Qiw0QkFBOUIsRUFBNEQsVUFBUyxDQUFULEVBQVk7QUFDdEUsTUFBRSxlQUFGO0FBQ0EsTUFBRSxjQUFGO0FBQ0EsUUFBSSxFQUFFLE9BQUYsS0FBYyxJQUFsQixFQUF3QjtBQUN0QixVQUFJLFdBQVcsRUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLG1CQUFwQixFQUF5QyxJQUF6QyxDQUE4QyxJQUE5QyxDQUFmO0FBQ0EsY0FBUSxVQUFSLENBQW1CLFFBQW5CO0FBQ0EsUUFBRSxPQUFGLEdBQVksSUFBWjtBQUNELEtBSkQsTUFJTztBQUNMLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxTQUFPLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLGtCQUFwQixFQUF3QyxVQUFDLENBQUQsRUFBTztBQUM3QyxRQUFNLFNBQVMsRUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLGVBQXBCLENBQWY7QUFDQSxRQUFNLFdBQVcsRUFBRSxhQUFGLEVBQWlCLE1BQWpCLENBQWpCO0FBQ0EsYUFBUyxNQUFULENBQWdCLEVBQUUsTUFBRixDQUFTLEtBQVQsS0FBbUIsT0FBbkM7QUFDRCxHQUpEOztBQU1BLFNBQU8sRUFBUCxDQUFVLFFBQVYsRUFBb0IsbURBQXBCLEVBQXlFLGFBQUs7QUFDNUUsUUFBSSxvQkFBSjtBQUNBLFFBQUksRUFBRSxNQUFGLENBQVMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixjQUE1QixDQUFKLEVBQWlEO0FBQy9DO0FBQ0Q7QUFDRCxRQUFJLFFBQVEsZ0JBQU0sT0FBTixDQUFjLEVBQUUsTUFBaEIsRUFBd0IsYUFBeEIsQ0FBWjtBQUNBLFFBQUksZ0JBQU0sT0FBTixDQUFjLE1BQU0sSUFBcEIsRUFBMEIsQ0FBQyxRQUFELEVBQVcsZ0JBQVgsRUFBNkIsYUFBN0IsQ0FBMUIsQ0FBSixFQUE0RTtBQUMxRSxVQUFJLFVBQVUsTUFBTSxzQkFBTixDQUE2QixjQUE3QixDQUFkO0FBQ0EsVUFBSSxNQUFNLElBQU4sS0FBZSxRQUFuQixFQUE2QjtBQUMzQix3QkFBTSxPQUFOLENBQWMsT0FBZCxFQUF1QixhQUFLO0FBQzFCLGNBQUksaUJBQWlCLFFBQVEsQ0FBUixFQUFXLGFBQVgsQ0FBeUIsVUFBekIsQ0FBb0MsQ0FBcEMsQ0FBckI7QUFDQSx5QkFBZSxPQUFmLEdBQXlCLEVBQUUsTUFBRixDQUFTLEtBQVQsS0FBbUIsUUFBUSxDQUFSLEVBQVcsS0FBdkQ7QUFDRCxTQUhEO0FBSUQsT0FMRCxNQUtPO0FBQ0wsc0JBQWMsU0FBUyxpQkFBVCxDQUEyQixFQUFFLE1BQUYsQ0FBUyxJQUFwQyxDQUFkO0FBQ0Esd0JBQU0sT0FBTixDQUFjLFdBQWQsRUFBMkIsYUFBSztBQUM5QixjQUFJLGlCQUFpQixRQUFRLENBQVIsRUFBVyxhQUFYLENBQXlCLFVBQXpCLENBQW9DLENBQXBDLENBQXJCO0FBQ0EseUJBQWUsT0FBZixHQUF5QixZQUFZLENBQVosRUFBZSxPQUF4QztBQUNELFNBSEQ7QUFJRDtBQUNGLEtBZEQsTUFjTztBQUNMLFVBQUksV0FBVyxTQUFTLGNBQVQsQ0FBd0IsV0FBVyxNQUFNLEVBQXpDLENBQWY7QUFDQSxVQUFHLFFBQUgsRUFBYTtBQUNYLGlCQUFTLEtBQVQsR0FBaUIsRUFBRSxNQUFGLENBQVMsS0FBMUI7QUFDRDtBQUNGOztBQUVELFlBQVEsSUFBUixDQUFhLElBQWIsQ0FBa0IsT0FBbEI7QUFDRCxHQTVCRDs7QUE4QkE7QUFDQSxrQkFBTSxpQkFBTixDQUF3QixFQUFFLEtBQTFCLEVBQWlDLGNBQWpDLEVBQWlELGFBQUs7QUFDcEQsUUFBSSxDQUFDLEVBQUUsTUFBRixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsV0FBNUIsQ0FBTCxFQUErQztBQUMvQyxRQUFJLFFBQVEsRUFBRSxNQUFGLENBQVMsS0FBVCxJQUFrQixFQUFFLE1BQUYsQ0FBUyxTQUF2QztBQUNBLFFBQUksUUFBUSxnQkFBTSxPQUFOLENBQWMsRUFBRSxNQUFoQixFQUF3QixhQUF4QixFQUF1QyxhQUF2QyxDQUFxRCxjQUFyRCxDQUFaO0FBQ0EsVUFBTSxTQUFOLEdBQWtCLGdCQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBbEI7QUFDRCxHQUxEOztBQU9BO0FBQ0EsU0FBTyxFQUFQLENBQVUsT0FBVixFQUFtQixhQUFuQixFQUFrQyxVQUFTLENBQVQsRUFBWTtBQUM1QyxNQUFFLEVBQUUsTUFBSixFQUFZLFdBQVosQ0FBd0IsT0FBeEI7QUFDRCxHQUZEOztBQUlBO0FBQ0EsU0FBTyxFQUFQLENBQVUsT0FBVixFQUFtQiwyQkFBbkIsRUFBZ0QsVUFBUyxDQUFULEVBQVk7QUFDMUQsUUFBSSxTQUFTLEVBQUUsRUFBRSxNQUFKLEVBQVksT0FBWixDQUFvQixtQkFBcEIsQ0FBYjtBQUNBLFFBQUksaUJBQWlCLEVBQUUsa0JBQUYsRUFBc0IsTUFBdEIsQ0FBckI7QUFDQSxRQUFJLFFBQVEsRUFBRSxFQUFFLE1BQUosRUFBWSxHQUFaLEVBQVo7QUFDQSxRQUFJLFVBQVUsRUFBZCxFQUFrQjtBQUNoQixVQUFJLENBQUMsZUFBZSxNQUFwQixFQUE0QjtBQUMxQixZQUFJLGlEQUErQyxLQUEvQyxlQUFKO0FBQ0EsVUFBRSxjQUFGLEVBQWtCLE1BQWxCLEVBQTBCLEtBQTFCLENBQWdDLEVBQWhDO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsdUJBQWUsSUFBZixDQUFvQixTQUFwQixFQUErQixLQUEvQixFQUFzQyxHQUF0QyxDQUEwQyxTQUExQyxFQUFxRCxjQUFyRDtBQUNEO0FBQ0YsS0FQRCxNQU9PO0FBQ0wsVUFBSSxlQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLHVCQUFlLEdBQWYsQ0FBbUIsU0FBbkIsRUFBOEIsTUFBOUI7QUFDRDtBQUNGO0FBQ0YsR0FoQkQ7O0FBa0JBOzs7OztBQUtBLFNBQU8sRUFBUCxDQUFVLFFBQVYsRUFBb0IsZUFBcEIsRUFBcUMsYUFBSztBQUN4QyxRQUFJLFVBQVUsRUFBRSxNQUFGLENBQVMsT0FBVCxHQUFtQixVQUFuQixHQUFnQyxPQUE5QztBQUNBLFFBQUksV0FBVyxFQUFFLGtCQUFGLEVBQXNCLEVBQUUsRUFBRSxNQUFKLEVBQVksT0FBWixDQUFvQixnQkFBcEIsQ0FBdEIsQ0FBZjtBQUNBLGFBQVMsSUFBVCxDQUFjO0FBQUEsYUFBSyxTQUFTLENBQVQsRUFBWSxJQUFaLEdBQW1CLE9BQXhCO0FBQUEsS0FBZDtBQUNBLFdBQU8sT0FBUDtBQUNELEdBTEQ7O0FBT0E7QUFDQSxTQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLGdCQUFsQixFQUFvQyxVQUFTLENBQVQsRUFBWTtBQUM5QyxNQUFFLE1BQUYsQ0FBUyxLQUFULEdBQWlCLGdCQUFNLFFBQU4sQ0FBZSxFQUFFLE1BQUYsQ0FBUyxLQUF4QixDQUFqQjtBQUNBLFFBQUksRUFBRSxNQUFGLENBQVMsS0FBVCxLQUFtQixFQUF2QixFQUEyQjtBQUN6QixRQUFFLEVBQUUsTUFBSixFQUNDLFFBREQsQ0FDVSxhQURWLEVBRUMsSUFGRCxDQUVNLGFBRk4sRUFFcUIsS0FBSyxhQUYxQjtBQUdELEtBSkQsTUFJTztBQUNMLFFBQUUsRUFBRSxNQUFKLEVBQVksV0FBWixDQUF3QixhQUF4QjtBQUNEO0FBQ0YsR0FURDs7QUFXQSxTQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLHFCQUFsQixFQUF5QyxhQUFLO0FBQzVDLE1BQUUsTUFBRixDQUFTLEtBQVQsR0FBaUIsZ0JBQU0sV0FBTixDQUFrQixFQUFFLE1BQUYsQ0FBUyxLQUEzQixDQUFqQjtBQUNELEdBRkQ7O0FBSUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixZQUE5QixFQUE0QyxVQUFTLENBQVQsRUFBWTtBQUN0RCxNQUFFLGNBQUY7QUFDQSxRQUFJLGNBQWMsRUFBRSxFQUFFLE1BQUosRUFBWSxNQUFaLEdBQXFCLE1BQXJCLENBQTRCLElBQTVCLENBQWxCO0FBQ0EsUUFBSSxTQUFTLFVBQVUsV0FBVixDQUFiO0FBQ0EsV0FBTyxXQUFQLENBQW1CLFdBQW5CO0FBQ0EsWUFBUSxhQUFSLENBQXNCLE1BQXRCO0FBQ0EsWUFBUSxJQUFSLENBQWEsSUFBYixDQUFrQixPQUFsQjtBQUNELEdBUEQ7O0FBU0E7QUFDQSxTQUFPLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixpQkFBOUIsRUFBaUQsYUFBSztBQUNwRCxNQUFFLGNBQUY7O0FBRUEsUUFBTSxpQkFBaUIsRUFBRSxNQUFGLENBQVMscUJBQVQsRUFBdkI7QUFDQSxRQUFNLFdBQVcsU0FBUyxJQUFULENBQWMscUJBQWQsRUFBakI7QUFDQSxRQUFNLFNBQVM7QUFDWCxhQUFPLGVBQWUsSUFBZixHQUF1QixlQUFlLEtBQWYsR0FBdUIsQ0FEMUM7QUFFWCxhQUFRLGVBQWUsR0FBZixHQUFxQixTQUFTLEdBQS9CLEdBQXNDO0FBRmxDLEtBQWY7O0FBS0EsUUFBSSxXQUFXLEVBQUUsRUFBRSxNQUFKLEVBQVksT0FBWixDQUFvQixtQkFBcEIsRUFBeUMsSUFBekMsQ0FBOEMsSUFBOUMsQ0FBZjtBQUNBLFFBQU0sU0FBUyxFQUFFLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUFGLENBQWY7O0FBRUEsYUFBUyxnQkFBVCxDQUEwQixhQUExQixFQUF5QyxZQUFXO0FBQ2xELGFBQU8sV0FBUCxDQUFtQixVQUFuQjtBQUNELEtBRkQsRUFFRyxLQUZIOztBQUlBO0FBQ0EsUUFBSSxLQUFLLGVBQVQsRUFBMEI7QUFDeEIsVUFBSSxTQUFTLGdCQUFNLE1BQU4sQ0FBYSxJQUFiLEVBQW1CLEtBQUssT0FBeEIsQ0FBYjtBQUNBLFVBQUksY0FBYyxnQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixLQUFLLGtCQUF2QixDQUFsQjtBQUNBLGNBQVEsT0FBUixDQUFnQixDQUFDLE1BQUQsRUFBUyxXQUFULENBQWhCLEVBQXVDO0FBQUEsZUFDckMsUUFBUSxXQUFSLENBQW9CLFFBQXBCLENBRHFDO0FBQUEsT0FBdkMsRUFDaUMsTUFEakM7QUFFQSxhQUFPLFFBQVAsQ0FBZ0IsVUFBaEI7QUFDRCxLQU5ELE1BTU87QUFDTCxjQUFRLFdBQVIsQ0FBb0IsUUFBcEI7QUFDRDtBQUNGLEdBM0JEOztBQTZCQTtBQUNBLFNBQU8sRUFBUCxDQUFVLE9BQVYsRUFBbUIsb0JBQW5CLEVBQXlDLGFBQUs7QUFDNUMsUUFBTSxVQUFVLEVBQUUsRUFBRSxNQUFKLENBQWhCO0FBQ0EsUUFBSSxXQUFXLFFBQVEsR0FBUixFQUFmO0FBQ0EsUUFBSSxZQUFZLFFBQVEsTUFBUixHQUFpQixJQUFqQixDQUFzQixZQUF0QixDQUFoQjtBQUNBLGNBQVUsR0FBVixDQUFjLFFBQWQ7QUFDQSxZQUFRLFFBQVIsQ0FBaUIsTUFBakIsRUFBeUIsV0FBekIsQ0FBcUMsVUFBckM7QUFDQSxZQUFRLFFBQVIsQ0FBaUIsVUFBakI7QUFDQSxZQUFRLGFBQVIsQ0FBc0IsVUFBVSxPQUFWLENBQWtCLGFBQWxCLENBQXRCO0FBQ0EsWUFBUSxJQUFSLENBQWEsSUFBYixDQUFrQixPQUFsQjtBQUNELEdBVEQ7O0FBV0E7QUFDQSxTQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLGVBQW5CLEVBQW9DLGFBQUs7QUFDdkMsTUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLGFBQXBCLEVBQW1DLElBQW5DLENBQXdDLG9CQUF4QyxFQUE4RCxNQUE5RDtBQUNELEdBRkQ7O0FBSUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLGtCQUFuQixFQUF1QyxVQUFTLENBQVQsRUFBWTtBQUNqRCxRQUFJLFFBQVEsRUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLGFBQXBCLEVBQW1DLElBQW5DLENBQXdDLGtCQUF4QyxDQUFaO0FBQ0EsUUFBSSxnQkFBZ0IsRUFBRSxFQUFFLE1BQUosQ0FBcEI7QUFDQSxVQUFNLFdBQU4sQ0FBa0IsR0FBbEIsRUFBdUIsWUFBVztBQUNoQyxVQUFJLENBQUMsY0FBYyxFQUFkLENBQWlCLFVBQWpCLENBQUwsRUFBbUM7QUFDakMsVUFBRSx3QkFBRixFQUE0QixLQUE1QixFQUFtQyxVQUFuQyxDQUE4QyxTQUE5QztBQUNEO0FBQ0YsS0FKRDtBQUtELEdBUkQ7O0FBVUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQW5CLEVBQStCLFVBQVMsQ0FBVCxFQUFZO0FBQ3pDLE1BQUUsY0FBRjtBQUNBLFFBQUksY0FBYyxFQUFFLEVBQUUsTUFBSixFQUFZLE9BQVosQ0FBb0IsZ0JBQXBCLENBQWxCO0FBQ0EsUUFBSSxZQUFZLEVBQUUsbUJBQUYsRUFBdUIsV0FBdkIsQ0FBaEI7QUFDQSxRQUFJLGVBQWUsRUFBRSx3QkFBRixFQUE0QixXQUE1QixDQUFuQjtBQUNBLFFBQUksYUFBYSxLQUFqQjs7QUFFQSxRQUFJLFVBQVUsTUFBZCxFQUFzQjtBQUNwQixtQkFBYSxVQUFVLElBQVYsQ0FBZSxTQUFmLENBQWI7QUFDRCxLQUZELE1BRU87QUFDTCxtQkFBYyxhQUFhLElBQWIsQ0FBa0IsTUFBbEIsTUFBOEIsVUFBNUM7QUFDRDs7QUFFRCxRQUFJLE9BQU8sYUFBYSxJQUFiLENBQWtCLE1BQWxCLENBQVg7O0FBRUEsTUFBRSxtQkFBRixFQUF1QixXQUF2QixFQUFvQyxNQUFwQyxDQUEyQyxtQkFBbUIsSUFBbkIsRUFBeUIsS0FBekIsRUFBZ0MsVUFBaEMsQ0FBM0M7QUFDRCxHQWhCRDs7QUFrQkEsU0FBTyxFQUFQLENBQVUsb0JBQVYsRUFBZ0Msc0JBQWhDLEVBQXdEO0FBQUEsV0FDdEQsRUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLElBQXBCLEVBQTBCLFdBQTFCLENBQXNDLFFBQXRDLENBRHNEO0FBQUEsR0FBeEQ7O0FBR0E7O0FBRUEsU0FBTyxHQUFQLENBQVcsWUFBWCxFQUF5QixNQUFNLE1BQU4sRUFBekI7O0FBRUE7QUFDQSxNQUFJLEtBQUssY0FBTCxDQUFvQixNQUF4QixFQUFnQztBQUM5QixZQUFRLGNBQVIsQ0FBdUIsTUFBdkI7QUFDRDs7QUFFRCxXQUFTLGFBQVQsQ0FBdUIsaUJBQU8sTUFBOUI7O0FBRUE7QUFDQSxjQUFZLE9BQVosR0FBc0I7QUFDcEIsaUJBQWE7QUFBQSxhQUFXLFFBQVEsZUFBUixDQUF3QixFQUFFLEtBQTFCLEVBQWlDLE9BQWpDLENBQVg7QUFBQSxLQURPO0FBRXBCLGNBQVUsUUFBUSxRQUFSLENBQWlCLElBQWpCLENBQXNCLE9BQXRCLENBRlU7QUFHcEIsVUFBTSxRQUFRLElBQVIsQ0FBYSxJQUFiLENBQWtCLE9BQWxCLENBSGM7QUFJcEIsY0FBVSxrQkFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUMxQixjQUFRLFNBQVIsR0FBb0IsS0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixLQUF2QixHQUErQixTQUFuRDtBQUNBLG9CQUFjLEtBQWQ7QUFDQSxlQUFTLGFBQVQsQ0FBdUIsaUJBQU8sVUFBOUI7QUFDRCxLQVJtQjtBQVNwQixpQkFBYSxRQUFRLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBeUIsT0FBekIsQ0FUTztBQVVwQixhQUFTLG1CQUFpQjtBQUFBLFVBQWhCLElBQWdCLHVFQUFULElBQVM7O0FBQ3hCLFVBQU0sUUFBUSxFQUFFLEtBQWhCO0FBQ0EsVUFBTSxJQUFJLE9BQVY7QUFDQSxVQUFNLE9BQU87QUFDWCxZQUFJO0FBQUEsaUJBQU0sRUFBRSxRQUFGLENBQVcsS0FBWCxDQUFOO0FBQUEsU0FETztBQUVYLGFBQUs7QUFBQSxpQkFBTSxFQUFFLE9BQUYsQ0FBVSxLQUFWLENBQU47QUFBQSxTQUZNO0FBR1gsY0FBTTtBQUFBLGlCQUFNLE9BQU8sSUFBUCxDQUFZLFNBQVosQ0FBc0IsRUFBRSxRQUFGLENBQVcsS0FBWCxDQUF0QixFQUF5QyxJQUF6QyxFQUErQyxJQUEvQyxDQUFOO0FBQUE7QUFISyxPQUFiOztBQU1BLGFBQU8sS0FBSyxJQUFMLEdBQVA7QUFDRCxLQXBCbUI7QUFxQnBCLGFBQVMsMkJBQVk7QUFDbkIsY0FBUSxlQUFSLENBQXdCLEVBQUUsS0FBMUIsRUFBaUMsS0FBakM7QUFDQSxpQkFBVyxRQUFYO0FBQ0QsS0F4Qm1CO0FBeUJwQjtBQUFBLDRFQUFTLGlCQUFNLE1BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDRCxnQkFBTSxVQUFOLENBQWlCLElBQWpCLGtCQUE2QixNQUE3QixDQURDOztBQUFBO0FBRVAsa0JBQUUsS0FBRixDQUFRLE9BQVI7QUFDSSwyQkFIRyxHQUdXLElBQUksV0FBSixDQUFnQixZQUFoQixFQUE4QixPQUE5QixDQUhYOztBQUlQLGtCQUFFLE9BQUYsRUFBVyxJQUFYLENBQWdCLGFBQWhCLEVBQStCLFdBQS9COztBQUpPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF6Qm9CLEdBQXRCOztBQWlDQSxTQUFPLFdBQVA7QUFDRCxDQXB0Q0Q7O0FBdXRDQSxDQUFDLFVBQVUsQ0FBVixFQUFjO0FBQ2IsSUFBRSxFQUFGLENBQUssV0FBTCxHQUFtQixVQUFTLE9BQVQsRUFBa0I7QUFDbkMsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNaLGdCQUFVLEVBQVY7QUFDRDtBQUNELFFBQUksUUFBUSxJQUFaOztBQUptQyxvQkFLYixFQUFFLE1BQUYsQ0FBUyxFQUFULDBCQUE2QixPQUE3QixFQUFzQyxJQUF0QyxDQUxhO0FBQUEsUUFLOUIsSUFMOEIsYUFLOUIsSUFMOEI7QUFBQSxRQUtyQixJQUxxQjs7QUFNbkMsbUJBQU8sSUFBUCxHQUFjLElBQWQ7QUFDQSxRQUFJLFdBQVcsRUFBRSxNQUFGLENBQVMsRUFBVCx1QkFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBZjtBQUNBLFFBQUksV0FBVztBQUNiLGVBQVM7QUFDUCxpQkFBUyxJQURGO0FBRVAsaUJBQVMsSUFGRjtBQUdQLGNBQU0sSUFIQztBQUlQLGtCQUFVLElBSkg7QUFLUCxpQkFBUyxJQUxGO0FBTVAsa0JBQVUsSUFOSDtBQU9QLHFCQUFhLElBUE47QUFRUCxxQkFBYTtBQVJOLE9BREk7QUFXYixVQUFJLFFBQUosR0FBZTtBQUNiLGVBQU8sU0FBUyxPQUFULENBQWlCLE9BQWpCLENBQXlCLE1BQXpCLENBQVA7QUFDRCxPQWJZO0FBY2IsZUFBUyxzQkFBWSxVQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBMEI7QUFDN0Msd0JBQU0sSUFBTixDQUFXLFFBQVgsRUFBcUIsSUFBckIsQ0FBMEIsWUFBTTtBQUM5QixnQkFBTSxJQUFOLENBQVcsYUFBSztBQUNkLGdCQUFJLGNBQWMsSUFBSSxXQUFKLENBQWdCLElBQWhCLEVBQXNCLE1BQU0sQ0FBTixDQUF0QixDQUFsQjtBQUNBLGNBQUUsTUFBTSxDQUFOLENBQUYsRUFBWSxJQUFaLENBQWlCLGFBQWpCLEVBQWdDLFdBQWhDO0FBQ0EscUJBQVMsT0FBVCxHQUFtQixZQUFZLE9BQS9CO0FBQ0QsV0FKRDtBQUtBLGlCQUFPLFNBQVMsT0FBaEI7QUFDQSxrQkFBUSxRQUFSO0FBQ0QsU0FSRCxFQVFHLEtBUkgsQ0FRUyxNQVJUO0FBU0QsT0FWUTtBQWRJLEtBQWY7O0FBMkJBLFdBQU8sUUFBUDtBQUNELEdBcENEO0FBcUNELENBdENELEVBc0NJLE1BdENKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdnVDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUZBO0FBSUEsSUFBTSxPQUFPLGVBQU8sSUFBcEI7QUFDQSxJQUFNLElBQUksZ0JBQU0sTUFBaEI7O0FBRUE7Ozs7SUFHcUIsTztBQUNuQjs7OztBQUlBLG1CQUFZLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBSyxJQUFMLEdBQVksbUJBQWEsTUFBYixDQUFaO0FBQ0EsU0FBSyxDQUFMLEdBQVMsaUJBQVksTUFBWixDQUFUO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBTVksSyxFQUFPLEUsRUFBSTtBQUNyQixTQUFHLElBQUgsQ0FBUSxJQUFSLEdBQWUsUUFBZixDQUF3QixRQUF4QjtBQUNBLFdBQUssUUFBTCxHQUFnQixJQUFoQjtBQUNBLFdBQUssSUFBTCxHQUFZLEdBQUcsSUFBSCxDQUFRLE1BQVIsRUFBWjtBQUNEOztBQUVEOzs7Ozs7Ozs7K0JBTVcsSyxFQUFPLEUsRUFBSTtBQUNwQixVQUFJLFFBQVEsSUFBWjtBQUNBLFNBQUcsSUFBSCxDQUFRLFdBQVIsQ0FBb0IsUUFBcEI7QUFDQSxVQUFJLE1BQU0sUUFBVixFQUFvQjtBQUNsQixZQUFJLEdBQUcsTUFBUCxFQUFlO0FBQ2IsWUFBRSxHQUFHLE1BQUwsRUFBYSxRQUFiLENBQXNCLFFBQXRCO0FBQ0Q7QUFDRCxhQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFFBQW5CO0FBQ0Q7QUFDRCxZQUFNLElBQU47QUFDQSxZQUFNLFFBQU4sR0FBaUIsS0FBakI7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsrQkFPVyxLLEVBQU8sRSxFQUFJO0FBQ3BCLFVBQUksUUFBUSxJQUFaO0FBQ0EsVUFBTSxPQUFPLGVBQU8sSUFBcEI7QUFDQSxVQUFNLE9BQU8sTUFBTSxDQUFOLENBQVEsS0FBckI7QUFDQSxVQUFJLFlBQVksS0FBSyxVQUFMLENBQWdCLE1BQWhCLEdBQXlCLENBQXpDO0FBQ0EsVUFBSSxjQUFjLEVBQWxCO0FBQ0EsWUFBTSxTQUFOLEdBQWtCLEdBQUcsV0FBSCxDQUFlLEtBQWYsS0FBeUIsQ0FBM0M7O0FBRUEsVUFBSSxDQUFDLEtBQUssZ0JBQU4sSUFBMEIsR0FBRyxJQUFILENBQVEsTUFBUixHQUFpQixRQUFqQixDQUEwQixjQUExQixDQUE5QixFQUF5RTtBQUN2RSxvQkFBWSxJQUFaLENBQWlCLElBQWpCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLLE9BQVQsRUFBa0I7QUFDaEIsb0JBQVksSUFBWixDQUFpQixNQUFNLFNBQU4sS0FBb0IsQ0FBckM7QUFDRDs7QUFFRCxVQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNmLG9CQUFZLElBQVosQ0FBa0IsTUFBTSxTQUFOLEdBQWtCLENBQW5CLEtBQTBCLFNBQTNDO0FBQ0Q7O0FBRUQsWUFBTSxRQUFOLEdBQWlCLFlBQVksSUFBWixDQUFpQjtBQUFBLGVBQVEsU0FBUyxJQUFqQjtBQUFBLE9BQWpCLENBQWpCO0FBQ0Q7O0FBR0Q7Ozs7Ozs7Ozs2QkFNUyxNLEVBQVE7QUFDZixVQUFJLFFBQVE7QUFDUixjQUFNLE9BQU8sSUFBUCxDQUFZLE1BQVo7QUFERSxPQUFaO0FBR0EsVUFBSSxVQUFVLEVBQUUsY0FBRixFQUFrQixNQUFsQixFQUEwQixHQUExQixFQUFkOztBQUVBLFVBQUksWUFBWSxNQUFNLElBQXRCLEVBQTRCO0FBQzFCLGNBQU0sT0FBTixHQUFnQixPQUFoQjtBQUNEOztBQUVELGFBQU8sS0FBUDtBQUNEOztBQUVEOzs7Ozs7OztvQ0FLZ0IsSyxFQUFPO0FBQ3JCLFVBQUksVUFBVSxFQUFkOztBQUVBLFFBQUUsc0JBQUYsRUFBMEIsS0FBMUIsRUFBaUMsSUFBakMsQ0FBc0MsWUFBVztBQUMvQyxZQUFJLFVBQVUsRUFBRSxJQUFGLENBQWQ7QUFDQSxZQUFNLFdBQVcsRUFBRSxrQkFBRixFQUFzQixPQUF0QixFQUErQixFQUEvQixDQUFrQyxVQUFsQyxDQUFqQjtBQUNBLFlBQUksUUFBUTtBQUNSLGlCQUFPLEVBQUUsZUFBRixFQUFtQixPQUFuQixFQUE0QixHQUE1QixFQURDO0FBRVIsaUJBQU8sRUFBRSxlQUFGLEVBQW1CLE9BQW5CLEVBQTRCLEdBQTVCO0FBRkMsU0FBWjs7QUFLQSxZQUFJLFFBQUosRUFBYztBQUNaLGdCQUFNLFFBQU4sR0FBaUIsUUFBakI7QUFDRDs7QUFFRCxnQkFBUSxJQUFSLENBQWEsS0FBYjtBQUNELE9BYkQ7O0FBZUEsYUFBTyxPQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs0QkFNUSxJLEVBQU07QUFDWixVQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFmO0FBQ0EsVUFBSSxNQUFNLENBQUMsNkJBQUQsQ0FBVjs7QUFFQSxzQkFBTSxPQUFOLENBQWMsUUFBZCxFQUF3QixVQUFTLFVBQVQsRUFBcUIsS0FBckIsRUFBNEI7QUFDbEQsWUFBSSxlQUFlLElBQW5CO0FBQ0EsWUFBTSxxQ0FBTjs7QUFFQTtBQUNBLFlBQUksTUFBTSxJQUFOLENBQVcsS0FBWCxDQUFpQixZQUFqQixDQUFKLEVBQW9DO0FBQ2xDLGNBQUksYUFBYSxNQUFNLE1BQXZCO0FBQ0EsY0FBSSxVQUFVLEVBQWQ7O0FBRUEsZUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFdBQVcsTUFBL0IsRUFBdUMsR0FBdkMsRUFBNEM7QUFDMUMsZ0JBQUksU0FBUyxFQUFFLFFBQUYsRUFBWSxXQUFXLENBQVgsRUFBYyxLQUExQixFQUFpQyxXQUFXLENBQVgsQ0FBakMsRUFBZ0QsU0FBN0Q7QUFDQSxvQkFBUSxJQUFSLENBQWEsYUFBYSxNQUExQjtBQUNEO0FBQ0Qsa0JBQVEsSUFBUixDQUFhLFFBQWI7O0FBRUEseUJBQWUsUUFBUSxJQUFSLENBQWEsRUFBYixDQUFmO0FBQ0EsaUJBQU8sTUFBTSxNQUFiO0FBQ0Q7O0FBRUQsWUFBSSxXQUFXLEVBQUUsT0FBRixFQUFXLFlBQVgsRUFBeUIsS0FBekIsQ0FBZjtBQUNBLFlBQUksSUFBSixDQUFTLFdBQVcsU0FBUyxTQUE3QjtBQUNELE9BckJEOztBQXVCQSxVQUFJLElBQUosQ0FBUyxpQ0FBVDs7QUFFQSxhQUFPLElBQUksSUFBSixDQUFTLEVBQVQsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs2QkFLUyxJLEVBQU07QUFDYixVQUFJLFdBQVcsRUFBZjtBQUNBLFVBQUksSUFBSSxLQUFLLENBQWI7QUFDQSxVQUFJLFFBQVEsSUFBWjs7QUFFQSxVQUFJLEtBQUssVUFBTCxDQUFnQixNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUNoQztBQUNBLHdCQUFNLE9BQU4sQ0FBYyxLQUFLLFVBQW5CO0FBQUEsZ0ZBQStCLGlCQUFlLEtBQWYsRUFBc0IsS0FBdEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QiwwQkFEeUIsR0FDaEIsRUFBRSxLQUFGLENBRGdCOzs7QUFHN0Isd0JBQUksQ0FBRSxPQUFPLFFBQVAsQ0FBZ0IsZ0JBQWhCLENBQU4sRUFBMEM7QUFDcEMsK0JBRG9DLEdBQ3hCLE1BQU0sUUFBTixDQUFlLE1BQWYsQ0FEd0I7QUFFcEMsOEJBRm9DLEdBRXpCLEVBQUUsc0JBQUYsRUFBMEIsS0FBMUIsRUFBaUMsR0FBakMsQ0FBcUM7QUFBQSwrQkFBUSxLQUFLLEtBQWI7QUFBQSx1QkFBckMsRUFBeUQsR0FBekQsRUFGeUI7OztBQUl4Qyw0QkFBTSxXQUFOLENBQWtCLEtBQWxCLEVBQXlCLFNBQXpCOztBQUVBLDBCQUFJLFVBQVUsT0FBZCxFQUF1QjtBQUNyQiw0QkFBSSxVQUFVLE9BQVYsS0FBc0IsT0FBMUIsRUFBbUM7QUFDN0IsNEJBRDZCLEdBQ3JCLFVBQVUsSUFEVzs7QUFFakMsOEJBQUksT0FBTyxTQUFQLENBQWlCLEtBQWpCLENBQXVCLEVBQXZCLENBQUosRUFBZ0M7QUFDMUIsb0NBRDBCLEdBQ2YsT0FBTyxTQUFQLENBQWlCLEtBQWpCLENBQXVCLEVBQXZCLEVBQTJCLFFBRFo7QUFFeEIsZ0NBRndCLEdBRWpCLFNBQVMsV0FBVCxFQUZpQjs7QUFHOUIsc0NBQVUsS0FBVixHQUFrQixPQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLEtBQUssR0FBM0IsQ0FBbEI7QUFDRDtBQUNGLHlCQVBELE1BT08sSUFBRyxVQUFVLE9BQVYsS0FBc0IsU0FBdEIsSUFBbUMsT0FBTyxPQUE3QyxFQUFzRDtBQUN2RCw2QkFEdUQsR0FDL0MsVUFBVSxJQURxQzs7QUFFM0QsOEJBQUksT0FBTyxPQUFQLENBQWUsT0FBZixDQUF1QixHQUF2QixDQUFKLEVBQWdDO0FBQzFCLGtDQUQwQixHQUNqQixPQUFPLE9BQVAsQ0FBZSxPQUFmLENBQXVCLEdBQXZCLENBRGlCOztBQUU5QixzQ0FBVSxLQUFWLEdBQWtCLE9BQU8sVUFBUCxFQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCwwQkFBSSxTQUFTLE1BQWIsRUFBcUI7QUFDbkIsa0NBQVUsSUFBVixHQUFpQixTQUFTLElBQVQsQ0FBYyxHQUFkLENBQWpCO0FBQ0Q7O0FBRUQsZ0NBQVUsU0FBVixHQUFzQixVQUFVLFNBQVYsSUFBdUIsVUFBVSxLQUF2RDs7QUFFSSwyQkE3Qm9DLEdBNkI1Qiw2QkFBNkIsSUFBN0IsQ0FBa0MsVUFBVSxTQUE1QyxDQTdCNEI7O0FBOEJ4QywwQkFBSSxLQUFKLEVBQVc7QUFDVCxrQ0FBVSxLQUFWLEdBQWtCLE1BQU0sQ0FBTixDQUFsQjtBQUNEOztBQUVELGtDQUFZLGdCQUFNLE9BQU4sQ0FBYyxTQUFkLENBQVo7O0FBRUksbUNBcENvQyxHQW9DcEIsVUFBVSxJQUFWLENBQWUsS0FBZixDQUFxQixFQUFFLGlCQUF2QixDQXBDb0I7OztBQXNDeEMsMEJBQUksYUFBSixFQUFtQjtBQUNqQixrQ0FBVSxNQUFWLEdBQW1CLE1BQU0sZUFBTixDQUFzQixNQUF0QixDQUFuQjtBQUNEOztBQUVELCtCQUFTLElBQVQsQ0FBYyxTQUFkO0FBQ0Q7O0FBOUM0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdERDs7QUFFRCxhQUFPLFFBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzRCQU1RLFEsRUFBVTtBQUNoQixVQUFJLE9BQU8sS0FBSyxJQUFoQjtBQUNBLFVBQUksQ0FBQyxRQUFMLEVBQWU7QUFDYixtQkFBVyxlQUFPLElBQVAsQ0FBWSxRQUF2QjtBQUNEOztBQUVELFVBQUksQ0FBQyxRQUFMLEVBQWU7QUFDYixlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFJLFVBQVU7QUFDWixhQUFLO0FBQUEsaUJBQVksZ0JBQU0sUUFBTixDQUFlLFFBQWYsQ0FBWjtBQUFBLFNBRE87QUFFWixjQUFNO0FBQUEsaUJBQVksT0FBTyxJQUFQLENBQVksS0FBWixDQUFrQixRQUFsQixDQUFaO0FBQUE7QUFGTSxPQUFkOztBQUtBLFdBQUssUUFBTCxHQUFnQixRQUFRLGVBQU8sSUFBUCxDQUFZLFFBQXBCLEVBQThCLFFBQTlCLEtBQTJDLEVBQTNEOztBQUVBLGFBQU8sS0FBSyxRQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3lCQUtLLEssRUFBTztBQUNWLFVBQUksUUFBUSxJQUFaO0FBQ0EsVUFBSSxPQUFPLEtBQUssSUFBaEI7QUFDQSxVQUFHLENBQUMsS0FBSixFQUFXO0FBQ1QsZ0JBQVEsS0FBSyxDQUFMLENBQU8sS0FBZjtBQUNEO0FBQ0QsVUFBSSxTQUFTO0FBQ1gsYUFBSyxNQUFNLE9BREE7QUFFWCxjQUFNO0FBQUEsaUJBQ04sT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixNQUFNLFFBQU4sQ0FBZSxLQUFmLENBQXRCLEVBQTZDLElBQTdDLEVBQW1ELElBQW5ELENBRE07QUFBQTtBQUZLLE9BQWI7O0FBTUE7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsT0FBTyxlQUFPLElBQVAsQ0FBWSxRQUFuQixFQUE2QixLQUE3QixDQUFoQjs7QUFFQTtBQUNBLGVBQVMsYUFBVCxDQUF1QixpQkFBTyxTQUE5QjtBQUNBLGFBQU8sS0FBSyxRQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2dDQUtZLEUsRUFBSTtBQUNkLFVBQUksUUFBUSxHQUFHLFdBQUgsQ0FBZSxHQUFmLENBQVo7QUFDQSxVQUFJLGlCQUFpQixTQUFTLEdBQUcsU0FBSCxDQUFhLFFBQVEsQ0FBckIsQ0FBVCxJQUFvQyxDQUF6RDtBQUNBLFVBQUksYUFBYSxHQUFHLFNBQUgsQ0FBYSxDQUFiLEVBQWdCLEtBQWhCLENBQWpCOztBQUVBLGFBQVUsVUFBVixTQUF3QixjQUF4QjtBQUNEOztBQUVEOzs7Ozs7OztnQ0FLWSxLLEVBQU8sUyxFQUFXO0FBQzVCLFVBQUksUUFBUSxNQUFNLGdCQUFOLENBQXVCLGlCQUF2QixDQUFaO0FBQ0EsWUFBTSxPQUFOLENBQWMsZ0JBQVE7QUFDcEIsWUFBSSxjQUFKO0FBQ0EsWUFBSSxPQUFPLGdCQUFNLFNBQU4sQ0FBZ0IsS0FBSyxZQUFMLENBQWtCLE1BQWxCLENBQWhCLENBQVg7QUFDQSxZQUFJLEtBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBSixFQUF3QztBQUN0QyxrQkFBUSxLQUFLLFNBQWI7QUFDRCxTQUZELE1BRU8sSUFBSSxLQUFLLElBQUwsS0FBYyxVQUFsQixFQUE4QjtBQUNuQyxrQkFBUSxLQUFLLE9BQWI7QUFDRCxTQUZNLE1BRUE7QUFDTCxrQkFBUSxLQUFLLEtBQWI7QUFDRDtBQUNELGtCQUFVLElBQVYsSUFBa0IsS0FBbEI7QUFDRCxPQVhEO0FBWUQ7O0FBRUQ7Ozs7Ozs7a0NBSWMsTSxFQUFRO0FBQ3BCLFVBQUksUUFBUSxJQUFaO0FBQ0EsVUFBSSxJQUFJLEtBQUssQ0FBYjtBQUNBLFVBQU0sYUFBYSxPQUFPLElBQVAsQ0FBWSxPQUFaLENBQW5CO0FBQ0EsVUFBSSxRQUFRLE9BQU8sQ0FBUCxDQUFaO0FBQ0EsVUFBSSxXQUFXLE9BQVgsQ0FBbUIsZUFBbkIsTUFBd0MsQ0FBQyxDQUE3QyxFQUFnRDtBQUM5QztBQUNEOztBQUVELFVBQUksWUFBWSxPQUFPLElBQVAsQ0FBWSxNQUFaLENBQWhCO0FBQ0EsVUFBSSxjQUFjLEVBQUUsY0FBRixFQUFrQixLQUFsQixDQUFsQjtBQUNBLFVBQUksY0FBYztBQUNoQixjQUFNO0FBRFUsT0FBbEI7QUFHQSxVQUFJLGdCQUFKOztBQUVBLFlBQU0sV0FBTixDQUFrQixLQUFsQixFQUF5QixXQUF6Qjs7QUFFQSxVQUFJLFFBQVEsRUFBRSxZQUFGLEVBQWdCLEtBQWhCLEVBQXVCLEdBQXZCLEVBQVo7QUFDQSxVQUFJLEtBQUosRUFBVztBQUNULG9CQUFZLEtBQVosR0FBb0IsS0FBcEI7QUFDRDs7QUFFRCxVQUFJLFVBQVUsS0FBVixDQUFnQixFQUFFLGlCQUFsQixDQUFKLEVBQTBDO0FBQ3hDLG9CQUFZLE1BQVosR0FBcUIsRUFBckI7QUFDQSxvQkFBWSxRQUFaLEdBQXVCLEVBQUUsbUJBQUYsRUFBdUIsS0FBdkIsRUFBOEIsRUFBOUIsQ0FBaUMsVUFBakMsQ0FBdkI7O0FBRUEsVUFBRSxzQkFBRixFQUEwQixLQUExQixFQUFpQyxJQUFqQyxDQUFzQyxVQUFTLENBQVQsRUFBWSxPQUFaLEVBQXFCO0FBQ3pELGNBQUksU0FBUyxFQUFiO0FBQ0EsaUJBQU8sUUFBUCxHQUFrQixFQUFFLGtCQUFGLEVBQXNCLE9BQXRCLEVBQStCLEVBQS9CLENBQWtDLFVBQWxDLENBQWxCO0FBQ0EsaUJBQU8sS0FBUCxHQUFlLEVBQUUsZUFBRixFQUFtQixPQUFuQixFQUE0QixHQUE1QixFQUFmO0FBQ0EsaUJBQU8sS0FBUCxHQUFlLEVBQUUsZUFBRixFQUFtQixPQUFuQixFQUE0QixHQUE1QixFQUFmO0FBQ0Esc0JBQVksTUFBWixDQUFtQixJQUFuQixDQUF3QixNQUF4QjtBQUNELFNBTkQ7QUFPRDs7QUFFRCxvQkFBYyxnQkFBTSxPQUFOLENBQWMsV0FBZCxDQUFkOztBQUVBLGtCQUFZLFNBQVosR0FBd0IsTUFBTSxVQUFOLENBQWlCLEtBQWpCLEVBQXdCLFdBQXhCLENBQXhCO0FBQ0EsUUFBRSxnQkFBRixFQUFvQixLQUFwQixFQUEyQixHQUEzQixDQUErQixZQUFZLFNBQTNDOztBQUVBLGFBQU8sSUFBUCxDQUFZLFdBQVosRUFBeUIsV0FBekI7QUFDQSxnQkFBVSxnQkFBTSxXQUFOLENBQWtCLFdBQWxCLEVBQStCLElBQS9CLENBQVY7O0FBRUEsc0JBQU0sWUFBWSxDQUFaLENBQU47QUFDQSxrQkFBWSxDQUFaLEVBQWUsV0FBZixDQUEyQixPQUEzQjtBQUNBLGNBQVEsYUFBUixDQUFzQixpQkFBTyxhQUE3QjtBQUNEOztBQUVEOzs7Ozs7OzsrQkFLVyxLLEVBQU87QUFDaEIsVUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQWE7QUFDeEIsWUFBTSxjQUFjLEtBQUssS0FBTCxDQUFXLHFCQUFYLEVBQXBCO0FBQ0EsWUFBTSxJQUFJLEVBQUUsT0FBRixHQUFZLFlBQVksSUFBeEIsR0FBK0IsRUFBekM7QUFDQSxZQUFNLElBQUksRUFBRSxPQUFGLEdBQVksWUFBWSxHQUF4QixHQUE4QixLQUFLLEVBQUwsQ0FBUSxZQUF0QyxHQUFxRCxFQUEvRDtBQUNBLGFBQUssRUFBTCxDQUFRLEtBQVIsQ0FBYyxTQUFkLGtCQUF1QyxDQUF2QyxZQUErQyxDQUEvQztBQUNELE9BTEQ7O0FBT0EsWUFBTSxnQkFBTixDQUF1QixpQkFBdkIsRUFBMEMsT0FBMUMsQ0FDRSxpQkFBUztBQUNQLFlBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxnQkFBMUI7O0FBRUEsWUFBSSxLQUFKLEVBQVc7QUFDVCxjQUFJLEtBQUssZ0JBQU0sTUFBTixDQUFhLEdBQWIsRUFBa0IsS0FBbEIsRUFBeUIsRUFBQyxXQUFXLFNBQVosRUFBekIsQ0FBVDtBQUNBLGdCQUFNLFdBQU4sQ0FBa0IsRUFBbEI7QUFDQSxnQkFBTSxnQkFBTixDQUF1QixXQUF2QixFQUFvQztBQUFBLG1CQUFLLEtBQUssQ0FBTCxFQUFRLEVBQUMsTUFBRCxFQUFLLFlBQUwsRUFBUixDQUFMO0FBQUEsV0FBcEM7QUFDRDtBQUNGLE9BVEg7QUFVRDs7QUFFRDs7Ozs7Ozs7OytCQU1XLEssRUFBTyxXLEVBQWE7QUFDN0IsVUFBSSxVQUFKO0FBQ0EsVUFBSSxPQUFPLFlBQVksSUFBdkI7QUFDQSxVQUFJLFFBQVEsWUFBWSxLQUF4QjtBQUNBLFVBQUksWUFBWSxNQUFNLGFBQU4sQ0FBb0IsZ0JBQXBCLEVBQXNDLEtBQXREO0FBQ0EsVUFBSSxVQUFVLFVBQVUsS0FBVixDQUFnQixHQUFoQixDQUFkO0FBQ0EsVUFBSSxRQUFRO0FBQ1YsZ0JBQVEsS0FERTtBQUVWLGdCQUFRO0FBRkUsT0FBWjs7QUFLQSxVQUFJLGNBQWMsTUFBTSxJQUFOLENBQWxCOztBQUVBLFVBQUksV0FBSixFQUFpQjtBQUNmLFlBQUksS0FBSixFQUFXO0FBQ1QsZUFBSyxJQUFJLENBQVQsRUFBWSxJQUFJLFFBQVEsTUFBeEIsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDbkMsZ0JBQUksS0FBSyxJQUFJLE1BQUosYUFBc0IsV0FBdEIscUJBQW9ELEdBQXBELENBQVQ7QUFDQSxnQkFBSSxRQUFRLFFBQVEsQ0FBUixFQUFXLEtBQVgsQ0FBaUIsRUFBakIsQ0FBWjtBQUNBLGdCQUFJLEtBQUosRUFBVztBQUNULHNCQUFRLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBQ0Q7QUFDRjtBQUNELGtCQUFRLElBQVIsQ0FBYSxjQUFjLEdBQWQsR0FBb0IsS0FBakM7QUFDRDtBQUNELGdCQUFRLElBQVIsQ0FBYSxXQUFiO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLGFBQU8sZ0JBQU0sTUFBTixDQUFhLE9BQWIsRUFBc0IsSUFBdEIsQ0FBMkIsR0FBM0IsRUFBZ0MsSUFBaEMsRUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7aUNBTWEsTyxFQUFTLE0sRUFBUTtBQUM1QixVQUFJLENBQUMsT0FBTCxFQUFjO0FBQ1osa0JBQVUsU0FBUyxzQkFBVCxDQUFnQyxzQkFBaEMsRUFBd0QsQ0FBeEQsQ0FBVjtBQUNEO0FBQ0QsVUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNYLGlCQUFTLFNBQVMsc0JBQVQsQ0FBZ0MscUJBQWhDLEVBQXVELENBQXZELENBQVQ7QUFDRDtBQUNELGNBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixTQUF6QjtBQUNBLGFBQU8sTUFBUDtBQUNBLGNBQVEsTUFBUjtBQUNBLGVBQVMsYUFBVCxDQUF1QixpQkFBTyxXQUE5QjtBQUNEOztBQUVEOzs7Ozs7OztpQ0FLYSxlLEVBQWlCO0FBQzVCLFVBQUksWUFBWTtBQUNkLGNBQU07QUFDSixpQkFBTyxZQURIO0FBRUosb0JBQVU7QUFGTixTQURRO0FBS2QsZUFBTztBQUNMLGlCQUFPLFdBREY7QUFFTCxvQkFBVTtBQUZMO0FBTE8sT0FBaEI7O0FBV0EsYUFBTyxVQUFVLGVBQVYsSUFBNkIsVUFBVSxlQUFWLENBQTdCLEdBQTBELEVBQWpFO0FBQ0Q7O0FBRUQ7Ozs7Ozs7a0NBSWM7QUFDWixVQUFNLFFBQVEsSUFBZDtBQUNBLFVBQUksVUFBVSxnQkFBTSxNQUFOLENBQWEsS0FBYixFQUFvQixJQUFwQixFQUEwQjtBQUN0QyxtQkFBVztBQUQyQixPQUExQixDQUFkO0FBR0EsZUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixPQUExQjtBQUNBLGNBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixTQUF0Qjs7QUFFQSxjQUFRLE9BQVIsR0FBa0IsWUFBVztBQUMzQixjQUFNLFlBQU4sQ0FBbUIsT0FBbkI7QUFDRCxPQUZEOztBQUlBLGFBQU8sT0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7NEJBU1EsTyxFQUFTLFMsRUFBMkM7QUFBQSxVQUFoQyxNQUFnQyx1RUFBdkIsS0FBdUI7QUFBQSxVQUFoQixTQUFnQix1RUFBSixFQUFJOztBQUMxRCxVQUFNLFFBQVEsSUFBZDtBQUNBLFVBQUksT0FBTyxnQkFBTSxPQUFqQjtBQUNBLFVBQUksVUFBVSxNQUFNLFdBQU4sRUFBZDtBQUNBLFVBQUksTUFBTSxFQUFFLFFBQUYsRUFBWSxLQUFLLEdBQWpCLEVBQXNCO0FBQzlCLG1CQUFXO0FBRG1CLE9BQXRCLENBQVY7QUFHQSxVQUFJLEtBQUssRUFBRSxRQUFGLEVBQVksS0FBSyxFQUFqQixFQUFxQjtBQUM1QixtQkFBVztBQURpQixPQUFyQixDQUFUOztBQUlBLFNBQUcsT0FBSCxHQUFhLFlBQVc7QUFDdEIsY0FBTSxZQUFOLENBQW1CLE9BQW5CO0FBQ0QsT0FGRDs7QUFJQSxVQUFJLE9BQUosR0FBYyxZQUFXO0FBQ3ZCO0FBQ0EsY0FBTSxZQUFOLENBQW1CLE9BQW5CO0FBQ0QsT0FIRDs7QUFLQSxVQUFJLFVBQVUsRUFBRSxLQUFGLEVBQVMsQ0FBQyxFQUFELEVBQUssR0FBTCxDQUFULEVBQW9CLEVBQUMsV0FBVyxhQUFaLEVBQXBCLENBQWQ7O0FBRUEsa0JBQVkseUJBQXlCLFNBQXJDOztBQUVBLFVBQUksWUFBWSxFQUFFLEtBQUYsRUFBUyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQVQsRUFBNkIsRUFBQyxvQkFBRCxFQUE3QixDQUFoQjtBQUNBLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxZQUFNLEtBQUssU0FBUyxlQUFwQjtBQUNBLGlCQUFTO0FBQ1AsaUJBQU8sS0FBSyxHQUFMLENBQVMsR0FBRyxXQUFaLEVBQXlCLE9BQU8sVUFBUCxJQUFxQixDQUE5QyxJQUFtRCxDQURuRDtBQUVQLGlCQUFPLEtBQUssR0FBTCxDQUFTLEdBQUcsWUFBWixFQUEwQixPQUFPLFdBQVAsSUFBc0IsQ0FBaEQsSUFBcUQ7QUFGckQsU0FBVDtBQUlBLGtCQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsR0FBMkIsT0FBM0I7QUFDRCxPQVBELE1BT087QUFDTCxrQkFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFlBQXhCO0FBQ0Q7O0FBRUQsZ0JBQVUsS0FBVixDQUFnQixJQUFoQixHQUF1QixPQUFPLEtBQVAsR0FBZSxJQUF0QztBQUNBLGdCQUFVLEtBQVYsQ0FBZ0IsR0FBaEIsR0FBc0IsT0FBTyxLQUFQLEdBQWUsSUFBckM7O0FBRUEsZUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixTQUExQjs7QUFFQSxVQUFJLEtBQUo7QUFDQSxhQUFPLFNBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7MkJBUU8sTyxFQUF5QztBQUFBLFVBQWhDLE1BQWdDLHVFQUF2QixLQUF1QjtBQUFBLFVBQWhCLFNBQWdCLHVFQUFKLEVBQUk7O0FBQzlDLFVBQU0sUUFBUSxJQUFkO0FBQ0EsVUFBSSxjQUFjLFNBQVMsZUFBVCxDQUF5QixXQUEzQztBQUNBLFVBQUksZUFBZSxTQUFTLGVBQVQsQ0FBeUIsWUFBNUM7QUFDQSxZQUFNLFdBQU47O0FBRUEsa0JBQVkseUJBQXlCLFNBQXJDOztBQUVBLFVBQUksWUFBWSxnQkFBTSxNQUFOLENBQWEsS0FBYixFQUFvQixPQUFwQixFQUE2QixFQUFDLFdBQVcsU0FBWixFQUE3QixDQUFoQjtBQUNBLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxpQkFBUztBQUNQLGlCQUFPLEtBQUssR0FBTCxDQUFTLFdBQVQsRUFBc0IsT0FBTyxVQUFQLElBQXFCLENBQTNDLElBQWdELENBRGhEO0FBRVAsaUJBQU8sS0FBSyxHQUFMLENBQVMsWUFBVCxFQUF1QixPQUFPLFdBQVAsSUFBc0IsQ0FBN0MsSUFBa0Q7QUFGbEQsU0FBVDtBQUlBLGtCQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsR0FBMkIsT0FBM0I7QUFDRCxPQU5ELE1BTU87QUFDTCxrQkFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFlBQXhCO0FBQ0Q7O0FBRUQsZ0JBQVUsS0FBVixDQUFnQixJQUFoQixHQUF1QixPQUFPLEtBQVAsR0FBZSxJQUF0QztBQUNBLGdCQUFVLEtBQVYsQ0FBZ0IsR0FBaEIsR0FBc0IsT0FBTyxLQUFQLEdBQWUsSUFBckM7O0FBRUEsZUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixTQUExQjs7QUFFQSxlQUFTLGFBQVQsQ0FBdUIsaUJBQU8sV0FBOUI7O0FBRUEsVUFBSSxVQUFVLE9BQVYsQ0FBa0IsYUFBbEIsTUFBcUMsQ0FBQyxDQUExQyxFQUE2QztBQUMzQyxpQkFBUyxhQUFULENBQXVCLGlCQUFPLFFBQTlCO0FBQ0Q7O0FBRUQsYUFBTyxTQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7cUNBSWlCLEMsRUFBRztBQUNsQixVQUFJLFFBQVEsSUFBWjtBQUNBLFVBQUksU0FBUyxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksS0FBWixDQUFrQixhQUFsQixFQUFpQyxDQUFqQyxDQUFiO0FBQ0EsVUFBSSxRQUFRLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFaO0FBQ0EsVUFBSSxPQUFPLGdCQUFNLE9BQWpCO0FBQ0EsVUFBSSxTQUFTLEVBQUUsZUFBRixFQUFtQixLQUFuQixDQUFiO0FBQ0EsVUFBSSxpQkFBaUIsRUFBRSxNQUFGLENBQVMscUJBQVQsRUFBckI7QUFDQSxVQUFJLFdBQVcsU0FBUyxJQUFULENBQWMscUJBQWQsRUFBZjtBQUNBLFVBQUksU0FBUztBQUNYLGVBQU8sZUFBZSxJQUFmLEdBQXVCLGVBQWUsS0FBZixHQUF1QixDQUQxQztBQUVYLGVBQVEsZUFBZSxHQUFmLEdBQXFCLFNBQVMsR0FBL0IsR0FBc0M7QUFGbEMsT0FBYjs7QUFLQSxVQUFJLE9BQU8sTUFBWCxFQUFtQjtBQUNqQixjQUFNLE9BQU4sQ0FBYyxLQUFLLGVBQW5CLEVBQW9DLFlBQVc7QUFDN0MsZ0JBQU0sZUFBTixDQUFzQixJQUF0QixDQUEyQixLQUEzQixFQUFrQyxLQUFsQztBQUNBLHlCQUFPLElBQVAsQ0FBWSxNQUFaLENBQW1CLE9BQW5CLENBQTJCLEtBQUssZ0JBQWhDO0FBQ0EseUJBQU8sSUFBUCxDQUFZLFVBQVo7QUFDRCxTQUpELEVBSUcsTUFKSDtBQUtELE9BTkQsTUFNTztBQUNMLGNBQU0sTUFBTixDQUFhLEtBQUssZUFBbEIsRUFBbUMsTUFBbkM7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OztvQ0FLZ0IsSyxFQUF1QjtBQUFBLFVBQWhCLE9BQWdCLHVFQUFOLElBQU07O0FBQ3JDLFVBQUksUUFBUSxJQUFaO0FBQ0EsVUFBSSxPQUFPLGdCQUFNLE9BQWpCO0FBQ0EsVUFBSSxPQUFPLGVBQU8sSUFBbEI7QUFDQSxVQUFJLFNBQVMsTUFBTSxnQkFBTixDQUF1QixlQUF2QixDQUFiO0FBQ0EsVUFBSSxpQkFBaUIsRUFBckI7O0FBRUEsVUFBSSxDQUFDLE9BQU8sTUFBWixFQUFvQjtBQUNsQixlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFJLEtBQUssT0FBVCxFQUFrQjtBQUNoQix1QkFBZSxJQUFmLENBQW9CLElBQXBCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFDZix1QkFBZSxJQUFmLENBQW9CLElBQXBCO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLGVBQWUsSUFBZixDQUFvQjtBQUFBLGVBQVEsU0FBUyxJQUFqQjtBQUFBLE9BQXBCLENBQUwsRUFBaUQ7QUFDL0MsY0FBTSxhQUFOLENBQW9CLFNBQXBCLENBQThCLEdBQTlCLENBQWtDLE9BQWxDO0FBQ0EsY0FBTSxhQUFOLENBQW9CLE9BQXBCLENBQTRCLE9BQTVCLEdBQXNDLEtBQUssVUFBM0M7QUFDRDs7QUFFRCxVQUFJLE9BQUosRUFBYTtBQUNYLGNBQU0sU0FBTixDQUFnQixHQUFoQixDQUFvQixVQUFwQjtBQUNBLFlBQUksY0FBYyxDQUFsQjtBQUNBLGVBQU8sT0FBUCxDQUFlO0FBQUEsaUJBQVMsZUFBZSxNQUFNLFlBQU4sR0FBcUIsQ0FBN0M7QUFBQSxTQUFmO0FBQ0EsZUFBTyxDQUFQLEVBQVUsS0FBVixDQUFnQixTQUFoQixHQUErQixDQUFDLFdBQWhDO0FBQ0EsbUJBQVcsWUFBTTtBQUNmLDBCQUFNLEtBQU4sRUFBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLFVBQTlCO0FBQ0EsZ0JBQU0sSUFBTixDQUFXLEtBQVg7QUFDRCxTQUhELEVBR0csR0FISDtBQUlELE9BVEQsTUFTTztBQUNMLHdCQUFNLEtBQU47QUFDQSxjQUFNLElBQU4sQ0FBVyxLQUFYO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7a0NBS2MsSyxFQUFPO0FBQ25CLFVBQUksQ0FBQyxlQUFPLElBQVAsQ0FBWSxnQkFBakIsRUFBbUM7QUFDakMsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSSxhQUFhLEVBQWpCOztBQUVBLFlBQU0sUUFBTixHQUFpQixJQUFqQixDQUFzQixVQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUI7QUFDN0MsbUJBQVcsS0FBWCxJQUFvQixFQUFFLE9BQUYsRUFBVyxJQUFYLENBQWdCLE1BQWhCLENBQXBCO0FBQ0QsT0FGRDs7QUFJQSxVQUFJLE9BQU8sY0FBWCxFQUEyQjtBQUN6QixlQUFPLGNBQVAsQ0FBc0IsT0FBdEIsQ0FBOEIsWUFBOUIsRUFBNEMsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixVQUF0QixDQUE1QztBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OztnQ0FNWSxVLEVBQVk7QUFDdEIsVUFBTSxPQUFPLGVBQU8sSUFBcEI7QUFDQSxVQUFJLGFBQWEsS0FBakI7QUFDQSxVQUFJLGlCQUFpQixFQUFyQjs7QUFFQSxVQUFJLE9BQU8sY0FBWCxFQUEyQjtBQUN6QixZQUFJLEtBQUssZ0JBQVQsRUFBMkI7QUFDekIsdUJBQWEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLENBQThCLFlBQTlCLENBQWI7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxjQUFQLENBQXNCLFVBQXRCLENBQWlDLFlBQWpDO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJLENBQUMsVUFBTCxFQUFpQjtBQUNmLFlBQUksZUFBZSxLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBeUIsV0FBVyxHQUFYLENBQWU7QUFBQSxpQkFDekQsTUFBTSxLQUFOLENBQVksSUFENkM7QUFBQSxTQUFmLENBQXpCLENBQW5CO0FBRUEscUJBQWEsZ0JBQU0sTUFBTixDQUFhLFlBQWIsQ0FBYjtBQUNELE9BSkQsTUFJTztBQUNMLHFCQUFhLE9BQU8sSUFBUCxDQUFZLEtBQVosQ0FBa0IsVUFBbEIsQ0FBYjtBQUNBLHFCQUFhLG9CQUFZLFVBQVosRUFBd0IsR0FBeEIsQ0FBNEIsVUFBUyxDQUFULEVBQVk7QUFDbkQsaUJBQU8sV0FBVyxDQUFYLENBQVA7QUFDRCxTQUZZLENBQWI7QUFHRDs7QUFHRCxpQkFBVyxPQUFYLENBQW1CLFVBQUMsU0FBRCxFQUFlO0FBQ2hDLFlBQUksUUFBUSxXQUFXLE1BQVgsQ0FBa0IsVUFBUyxLQUFULEVBQWdCO0FBQzVDLGlCQUFPLE1BQU0sS0FBTixDQUFZLElBQVosS0FBcUIsU0FBNUI7QUFDRCxTQUZXLEVBRVQsQ0FGUyxDQUFaO0FBR0EsdUJBQWUsSUFBZixDQUFvQixLQUFwQjtBQUNELE9BTEQ7O0FBT0EsYUFBTyxlQUFlLE1BQWYsQ0FBc0IsT0FBdEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7O21DQUllO0FBQ2IsVUFBTSxRQUFRLElBQWQ7QUFDQSxVQUFNLFNBQVMsRUFBRSxjQUFGLEVBQWtCLE1BQU0sQ0FBTixDQUFRLEtBQTFCLENBQWY7QUFDQSxVQUFNLGFBQWEsRUFBRSxjQUFGLEVBQWtCLE1BQU0sQ0FBTixDQUFRLEtBQTFCLENBQW5CO0FBQ0EsVUFBTSxhQUFhLEVBQUUsYUFBRixFQUFpQixNQUFqQixDQUFuQjs7QUFFQSxpQkFBVyxXQUFYLENBQXVCLE1BQXZCO0FBQ0EsYUFBTyxXQUFQLENBQW1CLFNBQW5CO0FBQ0EsUUFBRSxjQUFGLEVBQWtCLE1BQWxCLEVBQTBCLElBQTFCO0FBQ0EsaUJBQVcsSUFBWDtBQUNEOztBQUVEOzs7Ozs7OzsrQkFLVyxPLEVBQXlCO0FBQUEsVUFBaEIsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDbEMsVUFBTSxRQUFRLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsVUFBTSxZQUFZLEVBQUUsY0FBRixFQUFrQixLQUFsQixDQUFsQjtBQUNBLFVBQU0sWUFBWSxFQUFFLGFBQUYsRUFBaUIsS0FBakIsQ0FBbEI7QUFDQSxZQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsU0FBdkI7QUFDQSxnQkFBVSxXQUFWLENBQXNCLE1BQXRCO0FBQ0EsVUFBSSxPQUFKLEVBQWE7QUFDWCxVQUFFLGNBQUYsRUFBa0IsS0FBbEIsRUFBeUIsV0FBekIsQ0FBcUMsR0FBckM7QUFDQSxrQkFBVSxXQUFWLENBQXNCLEdBQXRCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsVUFBRSxjQUFGLEVBQWtCLEtBQWxCLEVBQXlCLE1BQXpCO0FBQ0Esa0JBQVUsTUFBVjtBQUNEO0FBQ0QsV0FBSyxhQUFMLENBQW1CLEVBQUUsS0FBRixDQUFuQjtBQUNEOztBQUVEOzs7Ozs7cUNBR2lCO0FBQ2YsVUFBSSxJQUFJLEtBQUssQ0FBYjtBQUNBLFVBQU0sVUFBVSxFQUFFLEVBQUUsUUFBSixFQUFjLE1BQWQsRUFBaEI7QUFDQSxVQUFNLGFBQWEsRUFBRSxFQUFFLEtBQUosRUFBVyxNQUFYLEVBQW5CO0FBQ0EsVUFBTSxVQUFVLFFBQVEsS0FBUixFQUFoQjtBQUNBLFVBQU0sYUFBYSxFQUFFLFFBQUYsQ0FBVyxxQkFBWCxFQUFuQjs7QUFFQSxRQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFVBQVMsR0FBVCxFQUFjO0FBQzdCLFlBQUksWUFBWSxFQUFFLElBQUksTUFBTixFQUFjLFNBQWQsRUFBaEI7QUFDQSxZQUFNLGlCQUFpQjtBQUNyQixlQUFLLENBRGdCO0FBRXJCLGtCQUFRLE1BRmE7QUFHckIsaUJBQU8sTUFIYztBQUlyQixnQkFBTSxXQUFXO0FBSkksU0FBdkI7O0FBT0EsWUFBSSxTQUFTLHNCQUFjLEVBQWQsRUFBa0IsY0FBbEIsRUFBa0MsZUFBTyxJQUFQLENBQVksY0FBWixDQUEyQixNQUE3RCxDQUFiOztBQUVBLFlBQUksWUFBWSxXQUFXLE1BQVgsR0FBb0IsR0FBcEMsRUFBeUM7QUFDdkMsY0FBTSxRQUFRO0FBQ1osc0JBQVUsT0FERTtBQUVaLG1CQUFPO0FBRkssV0FBZDs7QUFLQSxjQUFNLFVBQVUsc0JBQWMsS0FBZCxFQUFxQixNQUFyQixDQUFoQjs7QUFFQSxjQUFJLFdBQVcsUUFBUSxNQUFSLEVBQWY7QUFDQSxjQUFJLGNBQWMsV0FBVyxNQUFYLEVBQWxCO0FBQ0EsY0FBSSxXQUFXLFNBQVMsR0FBVCxHQUFlLFFBQVEsTUFBUixFQUE5QjtBQUNBLGNBQUksY0FBYyxZQUFZLEdBQVosR0FBa0IsV0FBVyxNQUFYLEVBQXBDOztBQUVBLGNBQUksV0FBVyxXQUFYLElBQTJCLFNBQVMsR0FBVCxLQUFpQixZQUFZLEdBQTVELEVBQWtFO0FBQ2hFLG9CQUFRLEdBQVIsQ0FBWTtBQUNWLHdCQUFVLFVBREE7QUFFVixtQkFBSyxNQUZLO0FBR1Ysc0JBQVEsQ0FIRTtBQUlWLHFCQUFPLENBSkc7QUFLVixvQkFBTTtBQUxJLGFBQVo7QUFPRDs7QUFFRCxjQUFJLFdBQVcsV0FBWCxJQUEyQixhQUFhLFdBQWIsSUFBNEIsU0FBUyxHQUFULEdBQWUsU0FBMUUsRUFBc0Y7QUFDcEYsb0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDRDtBQUNGLFNBMUJELE1BMEJPO0FBQ0wsWUFBRSxRQUFGLENBQVcsYUFBWCxDQUF5QixlQUF6QixDQUF5QyxPQUF6QztBQUNEO0FBQ0YsT0F4Q0Q7QUF5Q0Q7O0FBRUQ7Ozs7Ozs2QkFHUyxDLEVBQUc7QUFDVixVQUFNLE9BQU8sS0FBSyxJQUFsQjtBQUNBLFVBQU0sV0FBVyxnQkFBTSxVQUFOLENBQWlCLEtBQUssUUFBdEIsQ0FBakI7QUFDQSxVQUFNLE9BQU8sRUFBRSxNQUFGLEVBQVUsUUFBVixFQUFvQjtBQUMvQixpQ0FBdUIsZUFBTyxJQUFQLENBQVk7QUFESixPQUFwQixDQUFiOztBQUlBLFdBQUssTUFBTCxDQUFZLEVBQUUsS0FBRixFQUFTLElBQVQsQ0FBWixFQUE0QixJQUE1QixFQUFrQyxhQUFsQztBQUNEOztBQUVEOzs7Ozs7OztnQ0FLWSxPLEVBQVM7QUFDbkIsVUFBSSxlQUFlLEtBQW5CO0FBQ0EsVUFBSSxRQUFRLElBQVo7QUFDQSxVQUFNLE9BQU8sS0FBSyxDQUFMLENBQU8sS0FBcEI7QUFDQSxVQUFNLFNBQVMsS0FBSyxzQkFBTCxDQUE0QixZQUE1QixDQUFmOztBQUVBLFVBQUksQ0FBQyxPQUFPLE1BQVosRUFBb0I7QUFDbEIsZ0JBQVEsSUFBUixDQUFhLHFCQUFiO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLE9BQUwsRUFBYztBQUNaLFlBQUksZUFBZSxHQUFHLEtBQUgsQ0FBUyxJQUFULENBQWMsTUFBZCxFQUFzQixHQUF0QixDQUEwQixVQUFDLEtBQUQsRUFBVztBQUN0RCxpQkFBTyxNQUFNLEVBQWI7QUFDRCxTQUZrQixDQUFuQjtBQUdBLGdCQUFRLElBQVIsQ0FBYSwyRkFBYjtBQUNBLGdCQUFRLElBQVIsQ0FBYSxvQkFBb0IsYUFBYSxJQUFiLENBQWtCLElBQWxCLENBQWpDO0FBQ0Esa0JBQVUsS0FBSyxTQUFMLENBQWUsRUFBekI7QUFDRDs7QUFFRCxVQUFNLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQSxVQUFNLFNBQVMsRUFBRSxLQUFGLENBQWY7QUFDQSxVQUFJLENBQUMsS0FBTCxFQUFZO0FBQ1YsZ0JBQVEsSUFBUixDQUFhLGlCQUFiO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxPQUFQLENBQWUsR0FBZixFQUFvQixZQUFXO0FBQzdCLGVBQU8sV0FBUCxDQUFtQixVQUFuQjtBQUNBLGVBQU8sTUFBUDtBQUNBLHVCQUFlLElBQWY7QUFDQSxjQUFNLElBQU47QUFDQSxZQUFJLENBQUMsS0FBSyxVQUFMLENBQWdCLE1BQXJCLEVBQTZCO0FBQzNCLGNBQUksWUFBWSxLQUFLLGFBQXJCO0FBQ0Esb0JBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3QixPQUF4QjtBQUNBLG9CQUFVLE9BQVYsQ0FBa0IsT0FBbEIsR0FBNEIsZ0JBQU0sT0FBTixDQUFjLFVBQTFDO0FBQ0Q7QUFDRixPQVZEOztBQVlBLGVBQVMsYUFBVCxDQUF1QixpQkFBTyxZQUE5QjtBQUNBLGFBQU8sWUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozt5Q0FLcUIsVSxFQUFZO0FBQUEsVUFDMUIsS0FEMEIsR0FDQyxVQURELENBQzFCLEtBRDBCO0FBQUEsVUFDbkIsTUFEbUIsR0FDQyxVQURELENBQ25CLE1BRG1CO0FBQUEsVUFDUixLQURRLDBDQUNDLFVBREQ7O0FBRS9CLFVBQUksT0FBTyxLQUFLLElBQWhCO0FBQ0EsVUFBSSxDQUFDLEtBQUwsRUFBWTtBQUNWLFlBQUksTUFBTSxFQUFWLEVBQWM7QUFDWixrQkFBUSxnQkFBTSxPQUFOLENBQWMsTUFBTSxFQUFwQixLQUEyQixnQkFBTSxVQUFOLENBQWlCLE1BQU0sRUFBdkIsQ0FBbkM7QUFDRCxTQUZELE1BRU87QUFDTCxrQkFBUSxFQUFSO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTCxnQkFBUSxnQkFBTSxPQUFOLENBQWMsS0FBZCxLQUF3QixFQUFoQztBQUNEOztBQUVELFVBQUksQ0FBQyxNQUFNLEVBQVgsRUFBZTtBQUNiLGNBQU0sRUFBTixHQUFjLEtBQUssTUFBbkIsZ0JBQW9DLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLElBQXpCLENBQXBDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBTSxFQUFOLEdBQWMsS0FBSyxNQUFuQixTQUE2QixNQUFNLEVBQW5DO0FBQ0Q7O0FBRUQsVUFBTSxTQUFTLEVBQUUsUUFBRixFQUFZLEtBQVosRUFBbUIsS0FBbkIsQ0FBZjs7QUFFQSxVQUFJLE1BQUosRUFBWTtBQUFBLG1DQUNELEtBREM7QUFFUixjQUFJLE9BQU8sY0FBUCxDQUFzQixLQUF0QixDQUFKLEVBQWtDO0FBQ2hDLG1CQUFPLGdCQUFQLENBQXdCLEtBQXhCLEVBQStCO0FBQUEscUJBQU8sT0FBTyxLQUFQLEVBQWMsR0FBZCxDQUFQO0FBQUEsYUFBL0I7QUFDRDtBQUpPOztBQUNWLGFBQUssSUFBSSxLQUFULElBQWtCLE1BQWxCLEVBQTBCO0FBQUEsZ0JBQWpCLEtBQWlCO0FBSXpCO0FBQ0Y7O0FBRUQsYUFBTyxNQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O29DQUtnQixXLEVBQWE7QUFDM0IsVUFBSSxXQUFXLEVBQWY7QUFDQSxVQUFNLGdCQUFnQixTQUFoQixhQUFnQixVQUFXO0FBQzdCLGVBQU87QUFDTCxpQkFBTyxnQkFBTSxHQUFOLENBQVUsT0FBVixDQURGO0FBRUwsaUJBQU87QUFGRixTQUFQO0FBSUQsT0FMSDs7QUFPRSxxQkFBTyxRQUFQLEdBQWtCLGdCQUFNLEtBQU4sdUJBQTZCLFdBQTdCLENBQWxCOztBQUVBLFdBQUssSUFBSSxPQUFULElBQW9CLGVBQU8sUUFBM0IsRUFBcUM7QUFDbkMsWUFBSSxlQUFPLFFBQVAsQ0FBZ0IsY0FBaEIsQ0FBK0IsT0FBL0IsQ0FBSixFQUE2QztBQUMzQyxtQkFBUyxPQUFULElBQW9CLGVBQU8sUUFBUCxDQUFnQixPQUFoQixFQUF5QixHQUF6QixDQUE2QixhQUE3QixDQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxRQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7NkJBSVMsTSxFQUFRO0FBQ2YsVUFBSSxJQUFJLEtBQUssQ0FBYjtBQUNBLFVBQUksT0FBTyxLQUFLLElBQWhCO0FBQ0EsUUFBRSxLQUFGLEdBQVUsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUFjO0FBQ3BCLFlBQUksS0FBSyxNQURXO0FBRXBCLG1CQUFXO0FBRlMsT0FBZCxDQUFWOztBQUtBO0FBQ0EsUUFBRSxRQUFGLEdBQWEsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUFjO0FBQ3pCLFlBQU8sS0FBSyxNQUFaLGlCQUR5QjtBQUV6QixtQkFBVztBQUZjLE9BQWQsQ0FBYjtBQUlEOztBQUVEOzs7Ozs7OzttQ0FLZSxPLEVBQVM7QUFDdEIsVUFBTSxRQUFRLElBQWQ7QUFEc0IsNEJBRWtCLE9BRmxCLENBRWpCLE1BRmlCO0FBQUEsVUFFakIsTUFGaUIsbUNBRVIsRUFGUTtBQUFBLFVBRUosU0FGSSxHQUVrQixPQUZsQixDQUVKLFNBRkk7QUFBQSxVQUVVLElBRlYsMENBRWtCLE9BRmxCOztBQUd0QixVQUFJLGdCQUFnQixDQUFDO0FBQ25CLFlBQUksT0FEZTtBQUVuQixtQkFBVywwQkFGUTtBQUduQixnQkFBUTtBQUNOLGlCQUFPLE1BQU0sZ0JBQU4sQ0FBdUIsSUFBdkIsQ0FBNEIsS0FBNUI7QUFERDtBQUhXLE9BQUQsRUFNakI7QUFDRCxlQUFPLFVBRE47QUFFRCxZQUFJLE1BRkg7QUFHRCxtQkFBVyxpQkFIVjtBQUlELGdCQUFRO0FBQ04saUJBQU8sTUFBTSxRQUFOLENBQWUsSUFBZixDQUFvQixLQUFwQjtBQUREO0FBSlAsT0FOaUIsRUFhakI7QUFDRCxZQUFJLE1BREg7QUFFRCxjQUFNLFFBRkw7QUFHRCxtQkFBVywrQkFIVjtBQUlELGdCQUFRO0FBQ04saUJBQU87QUFBQSxtQkFBTyxlQUFPLElBQVAsQ0FBWSxNQUFaLENBQW1CLEdBQW5CLEVBQXdCLE1BQU0sSUFBTixDQUFXLFFBQW5DLENBQVA7QUFBQTtBQUREO0FBSlAsT0FiaUIsQ0FBcEI7O0FBc0JBLFVBQUksZ0JBQWdCLENBQ2xCO0FBQ0UsZUFBTyxnQkFBTSxHQUFOLENBQVUsY0FBVixDQURUO0FBRUUsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGVCxPQURrQixFQU1mO0FBQ0QsZUFBTyxnQkFBTSxHQUFOLENBQVUsUUFBVixDQUROO0FBRUQsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGTixPQU5lLEVBV2Y7QUFDRCxlQUFPLGdCQUFNLEdBQU4sQ0FBVSxlQUFWLENBRE47QUFFRCxlQUFPO0FBQ0wsZ0JBQU07QUFERDtBQUZOLE9BWGUsRUFnQmY7QUFDRCxlQUFPLGdCQUFNLEdBQU4sQ0FBVSxXQUFWLENBRE47QUFFRCxlQUFPO0FBQ0wsZ0JBQU07QUFERDtBQUZOLE9BaEJlLEVBcUJmO0FBQ0QsZUFBTyxnQkFBTSxHQUFOLENBQVUsWUFBVixDQUROO0FBRUQsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGTixPQXJCZSxFQTBCZjtBQUNELGVBQU8sZ0JBQU0sR0FBTixDQUFVLFFBQVYsQ0FETjtBQUVELGVBQU87QUFDTCxnQkFBTTtBQUREO0FBRk4sT0ExQmUsRUErQmY7QUFDRCxlQUFPLGdCQUFNLEdBQU4sQ0FBVSxRQUFWLENBRE47QUFFRCxlQUFPO0FBQ0wsZ0JBQU07QUFERDtBQUZOLE9BL0JlLEVBb0NmO0FBQ0QsZUFBTyxnQkFBTSxHQUFOLENBQVUsUUFBVixDQUROO0FBRUQsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGTixPQXBDZSxFQXlDZjtBQUNELGVBQU8sZ0JBQU0sR0FBTixDQUFVLFdBQVYsQ0FETjtBQUVELGVBQU87QUFDTCxnQkFBTTtBQUREO0FBRk4sT0F6Q2UsRUE4Q2Y7QUFDRCxlQUFPLGdCQUFNLEdBQU4sQ0FBVSxZQUFWLENBRE47QUFFRCxlQUFPO0FBQ0wsZ0JBQU07QUFERDtBQUZOLE9BOUNlLEVBbURmO0FBQ0QsZUFBTyxnQkFBTSxHQUFOLENBQVUsUUFBVixDQUROO0FBRUQsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGTixPQW5EZSxFQXdEZjtBQUNELGVBQU8sZ0JBQU0sR0FBTixDQUFVLE1BQVYsQ0FETjtBQUVELGVBQU87QUFDTCxnQkFBTTtBQUREO0FBRk4sT0F4RGUsRUE2RGY7QUFDRCxlQUFPLGdCQUFNLEdBQU4sQ0FBVSxVQUFWLENBRE47QUFFRCxlQUFPO0FBQ0wsZ0JBQU07QUFERDtBQUZOLE9BN0RlLENBQXBCOztBQXFFQSxXQUFLLE1BQUwsR0FBYyxPQUFPLE1BQVAsQ0FBYyxhQUFkLENBQWQ7QUFDQSxxQkFBTyxJQUFQLEdBQWMsc0JBQWMsRUFBZCxFQUFrQixFQUFDLDRCQUFELEVBQWdCLG9CQUFoQixFQUEyQixjQUEzQixFQUFsQixFQUFzRCxJQUF0RCxDQUFkO0FBQ0Esc0JBQU0sU0FBTixHQUFrQixvQkFBWSxlQUFPLElBQVAsQ0FBWSxTQUF4QixFQUFtQyxHQUFuQyxDQUF1QyxlQUFPO0FBQzlELGVBQU8sQ0FBQyxHQUFELEVBQU0sZUFBTyxJQUFQLENBQVksU0FBWixDQUFzQixHQUF0QixDQUFOLENBQVA7QUFDRCxPQUZpQixDQUFsQjs7QUFJQSxhQUFPLGVBQU8sSUFBZDtBQUNEOztBQUdEOzs7Ozs7QUFHRjs7O2tCQTdoQ3FCLE87Ozs7Ozs7Ozs7Ozs7OztBQ2RyQjs7OztBQUlBLFNBQVMsU0FBVCxHQUFxQjtBQUNuQjtBQUNBLE1BQUksRUFBRSxZQUFZLFFBQVEsU0FBdEIsQ0FBSixFQUFzQztBQUNwQyxZQUFRLFNBQVIsQ0FBa0IsTUFBbEIsR0FBMkIsWUFBVztBQUNwQyxVQUFJLEtBQUssVUFBVCxFQUFxQjtBQUNuQixhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsSUFBNUI7QUFDRDtBQUNGLEtBSkQ7QUFLRDs7QUFFRDtBQUNBLE1BQUksT0FBTyxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDO0FBQy9CLEtBQUMsWUFBVztBQUNWLGFBQU8sS0FBUCxHQUFlLFVBQVMsR0FBVCxFQUFjO0FBQzNCLFlBQUksUUFBUSxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsQ0FBWjtBQUNBLGNBQU0sU0FBTixDQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixJQUEzQjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BSkQ7QUFLRCxLQU5EO0FBT0Q7O0FBRUQ7QUFDQSxNQUFJLDJCQUF3QixVQUE1QixFQUF3QztBQUN0QyxXQUFPLE1BQVAsR0FBZ0IsVUFBUyxNQUFULEVBQWlCO0FBQy9COztBQUNBLFVBQUksVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGNBQU0sSUFBSSxTQUFKLENBQWMsNENBQWQsQ0FBTjtBQUNEOztBQUVELGVBQVMsT0FBTyxNQUFQLENBQVQ7QUFDQSxXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLFVBQVUsTUFBdEMsRUFBOEMsT0FBOUMsRUFBdUQ7QUFDckQsWUFBSSxTQUFTLFVBQVUsS0FBVixDQUFiO0FBQ0EsWUFBSSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsZUFBSyxJQUFJLEdBQVQsSUFBZ0IsTUFBaEIsRUFBd0I7QUFDdEIsZ0JBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLE1BQXJDLEVBQTZDLEdBQTdDLENBQUosRUFBdUQ7QUFDckQscUJBQU8sR0FBUCxJQUFjLE9BQU8sR0FBUCxDQUFkO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRCxhQUFPLE1BQVA7QUFDRCxLQWxCRDtBQW1CRDs7QUFHRDtBQUNBLE1BQUksQ0FBQyxNQUFNLFNBQU4sQ0FBZ0IsT0FBckIsRUFBOEI7QUFDNUIsVUFBTSxTQUFOLENBQWdCLE9BQWhCLEdBQTBCLFVBQVMsUUFBVCxFQUFtQjtBQUMzQyxVQUFJLFVBQUo7QUFBQSxVQUFPLFVBQVA7QUFDQSxVQUFJLFFBQVEsSUFBWixFQUFrQjtBQUNoQixjQUFNLElBQUksU0FBSixDQUFjLDZCQUFkLENBQU47QUFDRDtBQUNELFVBQUksSUFBSSxPQUFPLElBQVAsQ0FBUjtBQUNBLFVBQUksTUFBTSxFQUFFLE1BQUYsS0FBYSxDQUF2QjtBQUNBLFVBQUksT0FBTyxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDLGNBQU0sSUFBSSxTQUFKLENBQWMsV0FBVyxvQkFBekIsQ0FBTjtBQUNEO0FBQ0QsVUFBSSxVQUFVLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsWUFBSSxVQUFVLENBQVYsQ0FBSjtBQUNEO0FBQ0QsVUFBSSxDQUFKO0FBQ0EsYUFBTyxJQUFJLEdBQVgsRUFBZ0I7QUFDZCxZQUFJLGVBQUo7QUFDQSxZQUFJLEtBQUssQ0FBVCxFQUFZO0FBQ1YsbUJBQVMsRUFBRSxDQUFGLENBQVQ7QUFDQSxtQkFBUyxJQUFULENBQWMsQ0FBZCxFQUFpQixNQUFqQixFQUF5QixDQUF6QixFQUE0QixDQUE1QjtBQUNEO0FBQ0Q7QUFDRDtBQUNGLEtBdEJEO0FBdUJEO0FBQ0Y7O2tCQUVjLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RWY7O0FBQ0E7Ozs7QUFFQTs7Ozs7QUFLQTtBQUNFLElBQU0sUUFBUSxFQUFkO0FBQ0EsT0FBTyxRQUFQLEdBQWtCO0FBQ2hCLE1BQUksRUFEWTtBQUVoQixPQUFLO0FBRlcsQ0FBbEI7QUFJQSxPQUFPLFNBQVAsR0FBbUI7QUFDakIsU0FBTyxFQURVO0FBRWpCLFdBQVM7QUFGUSxDQUFuQjs7QUFLQTtBQUNBLE1BQU0sT0FBTixHQUFnQixVQUFTLE1BQVQsRUFBaUIsUUFBakIsRUFBMkI7QUFDekMsU0FBTyxTQUFTLE9BQVQsQ0FBaUIsTUFBakIsTUFBNkIsQ0FBQyxDQUFyQztBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0EsTUFBTSxPQUFOLEdBQWdCLFVBQVMsS0FBVCxFQUFnQjtBQUM5QixNQUFJLFlBQVksQ0FDZCxJQURjLEVBRWQsU0FGYyxFQUdkLEVBSGMsRUFJZCxLQUpjLEVBS2QsT0FMYyxDQUFoQjtBQU9BLE9BQUssSUFBSSxJQUFULElBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLFFBQUksTUFBTSxPQUFOLENBQWMsTUFBTSxJQUFOLENBQWQsRUFBMkIsU0FBM0IsQ0FBSixFQUEyQztBQUN6QyxhQUFPLE1BQU0sSUFBTixDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUksTUFBTSxPQUFOLENBQWMsTUFBTSxJQUFOLENBQWQsQ0FBSixFQUFnQztBQUNyQyxVQUFJLENBQUMsTUFBTSxJQUFOLEVBQVksTUFBakIsRUFBeUI7QUFDdkIsZUFBTyxNQUFNLElBQU4sQ0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDQW5CRDs7QUFxQkE7Ozs7O0FBS0EsTUFBTSxTQUFOLEdBQWtCLFVBQVMsSUFBVCxFQUFlO0FBQy9CLE1BQUksVUFBVSxDQUNaLFFBRFksRUFFWixhQUZZLEVBR1osT0FIWSxFQUlaLE9BSlk7QUFLWjtBQUNBLFdBTlksQ0FBZDtBQVFBLFNBQU8sQ0FBQyxNQUFNLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLE9BQXBCLENBQVI7QUFDRCxDQVZEOztBQVlBOzs7Ozs7QUFNQSxNQUFNLFVBQU4sR0FBbUIsVUFBUyxLQUFULEVBQWdCO0FBQ2pDLE1BQUksYUFBYSxFQUFqQjs7QUFFQSxPQUFLLElBQUksSUFBVCxJQUFpQixLQUFqQixFQUF3QjtBQUN0QixRQUFJLE1BQU0sY0FBTixDQUFxQixJQUFyQixLQUE4QixNQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBbEMsRUFBeUQ7QUFDdkQsYUFBTyxNQUFNLFFBQU4sQ0FBZSxJQUFmLEVBQXFCLE1BQU0sSUFBTixDQUFyQixDQUFQO0FBQ0EsaUJBQVcsSUFBWCxDQUFnQixLQUFLLElBQUwsR0FBWSxLQUFLLEtBQWpDO0FBQ0Q7QUFDRjtBQUNELFNBQU8sV0FBVyxJQUFYLENBQWdCLEdBQWhCLENBQVA7QUFDRCxDQVZEOztBQVlBOzs7Ozs7QUFNQSxNQUFNLFFBQU4sR0FBaUIsVUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQjtBQUNyQyxTQUFPLE1BQU0sWUFBTixDQUFtQixJQUFuQixDQUFQO0FBQ0EsTUFBSSxrQkFBSjs7QUFFQSxNQUFJLEtBQUosRUFBVztBQUNULFFBQUksTUFBTSxPQUFOLENBQWMsS0FBZCxDQUFKLEVBQTBCO0FBQ3hCLGtCQUFZLE1BQU0sVUFBTixDQUFpQixNQUFNLElBQU4sQ0FBVyxHQUFYLENBQWpCLENBQVo7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLE9BQU8sS0FBUCxLQUFrQixTQUF0QixFQUFpQztBQUMvQixnQkFBUSxNQUFNLFFBQU4sRUFBUjtBQUNEO0FBQ0Qsa0JBQVksTUFBTSxVQUFOLENBQWlCLE1BQU0sT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsSUFBeEIsRUFBakIsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsVUFBUSxlQUFhLFNBQWIsU0FBNEIsRUFBcEM7QUFDQSxTQUFPO0FBQ0wsY0FESztBQUVMO0FBRkssR0FBUDtBQUlELENBcEJEOztBQXNCQSxNQUFNLFlBQU4sR0FBcUIsVUFBUyxJQUFULEVBQWU7QUFDbEMsTUFBSSxXQUFXO0FBQ2IsZUFBVztBQURFLEdBQWY7O0FBSUEsU0FBTyxTQUFTLElBQVQsS0FBa0IsTUFBTSxVQUFOLENBQWlCLElBQWpCLENBQXpCO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7O0FBTUEsTUFBTSxVQUFOLEdBQW1CLFVBQUMsR0FBRCxFQUFTO0FBQzFCLFFBQU0sSUFBSSxPQUFKLENBQVksYUFBWixFQUEyQixFQUEzQixDQUFOO0FBQ0EsUUFBTSxJQUFJLE9BQUosQ0FBWSxVQUFaLEVBQXdCLFVBQVMsRUFBVCxFQUFhO0FBQ3pDLFdBQU8sTUFBTSxHQUFHLFdBQUgsRUFBYjtBQUNELEdBRkssQ0FBTjs7QUFJQSxTQUFPLElBQUksT0FBSixDQUFZLEtBQVosRUFBbUIsR0FBbkIsRUFBd0IsT0FBeEIsQ0FBZ0MsTUFBaEMsRUFBd0MsRUFBeEMsQ0FBUDtBQUNELENBUEQ7O0FBU0E7Ozs7O0FBS0EsTUFBTSxTQUFOLEdBQWtCO0FBQUEsU0FBTyxJQUFJLE9BQUosQ0FBWSxXQUFaLEVBQXlCLFVBQUMsQ0FBRCxFQUFJLENBQUo7QUFBQSxXQUNoRCxFQUFFLFdBQUYsRUFEZ0Q7QUFBQSxHQUF6QixDQUFQO0FBQUEsQ0FBbEI7O0FBR0E7Ozs7O0FBS0EsTUFBTSxXQUFOLEdBQW9CLG1CQUFXO0FBQzdCLE1BQUksY0FBYyxPQUFkLHVEQUFjLE9BQWQsQ0FBSjtBQUNBLE1BQUksbUJBQW1CLElBQW5CLElBQTJCLG1CQUFtQixXQUFsRCxFQUErRDtBQUM3RCxXQUFPLE1BQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxNQUFNLE9BQU4sQ0FBYyxPQUFkLENBQUosRUFBNEI7QUFDakMsV0FBTyxPQUFQO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FURDs7QUFXQTs7Ozs7O0FBTUEsTUFBTSxVQUFOLEdBQW1CLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsTUFBSSxNQUFKLEVBQVk7QUFBQSwrQkFDRCxLQURDO0FBRVIsVUFBSSxPQUFPLGNBQVAsQ0FBc0IsS0FBdEIsQ0FBSixFQUFrQztBQUNoQyxnQkFBUSxnQkFBUixDQUF5QixLQUF6QixFQUFnQztBQUFBLGlCQUFPLE9BQU8sS0FBUCxFQUFjLEdBQWQsQ0FBUDtBQUFBLFNBQWhDO0FBQ0Q7QUFKTzs7QUFDVixTQUFLLElBQUksS0FBVCxJQUFrQixNQUFsQixFQUEwQjtBQUFBLFlBQWpCLEtBQWlCO0FBSXpCO0FBQ0Y7QUFDRixDQVJEOztBQVVGOzs7OztBQUtFLE1BQU0sUUFBTixHQUFpQixVQUFTLEtBQVQsRUFBZ0I7QUFDL0IsTUFBSSxRQUFRLElBQUksSUFBSixHQUFXLE9BQVgsRUFBWjtBQUNBLE1BQUksU0FBUyxNQUFNLElBQU4sSUFBYyxNQUFNLFVBQU4sQ0FBaUIsTUFBTSxLQUF2QixDQUEzQjtBQUNBLFNBQU8sU0FBUyxHQUFULEdBQWUsS0FBdEI7QUFDRCxDQUpEOztBQU1BOzs7Ozs7OztBQVFBLE1BQU0sTUFBTixHQUFlLFVBQVMsR0FBVCxFQUE2QztBQUFBLE1BQS9CLE9BQStCLHVFQUFyQixFQUFxQjtBQUFBLE1BQWpCLFVBQWlCLHVFQUFKLEVBQUk7O0FBQzFELE1BQUksY0FBYyxNQUFNLFdBQU4sQ0FBa0IsT0FBbEIsQ0FBbEI7QUFEMEQsTUFFckQsTUFGcUQsR0FFakMsVUFGaUMsQ0FFckQsTUFGcUQ7QUFBQSxNQUUxQyxLQUYwQywwQ0FFakMsVUFGaUM7O0FBRzFELE1BQU0sUUFBUSxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDs7QUFFQSxNQUFNLGdCQUFnQjtBQUNwQixZQUFRLGdCQUFDLE9BQUQsRUFBYTtBQUNuQixZQUFNLFNBQU4sSUFBbUIsT0FBbkI7QUFDRCxLQUhtQjtBQUlwQixZQUFRLGdCQUFDLE1BQUQsRUFBWTtBQUFBLFVBQ2IsR0FEYSxHQUNZLE1BRFosQ0FDYixHQURhO0FBQUEsVUFDUixPQURRLEdBQ1ksTUFEWixDQUNSLE9BRFE7QUFBQSxVQUNJLElBREosMENBQ1ksTUFEWjs7QUFFbEIsYUFBTyxNQUFNLFdBQU4sQ0FBa0IsTUFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixPQUFsQixFQUEyQixJQUEzQixDQUFsQixDQUFQO0FBQ0QsS0FQbUI7QUFRcEIsVUFBTSxjQUFDLE9BQUQsRUFBYTtBQUNqQixhQUFPLE1BQU0sV0FBTixDQUFrQixPQUFsQixDQUFQO0FBQ0QsS0FWbUI7QUFXcEIsV0FBTyxlQUFDLE9BQUQsRUFBYTtBQUNsQixXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksUUFBUSxNQUE1QixFQUFvQyxHQUFwQyxFQUF5QztBQUN2QyxzQkFBYyxNQUFNLFdBQU4sQ0FBa0IsUUFBUSxDQUFSLENBQWxCLENBQWQ7QUFDQSxzQkFBYyxXQUFkLEVBQTJCLFFBQVEsQ0FBUixDQUEzQjtBQUNEO0FBQ0YsS0FoQm1CO0FBaUJwQixjQUFVLDRCQUFXO0FBQ25CLGdCQUFVLFNBQVY7QUFDQSxvQkFBYyxNQUFNLFdBQU4sQ0FBa0IsT0FBbEIsQ0FBZDtBQUNBLG9CQUFjLFdBQWQsRUFBMkIsT0FBM0I7QUFDRCxLQXJCbUI7QUFzQnBCLGVBQVcscUJBQU07QUFDZjtBQUNEO0FBeEJtQixHQUF0Qjs7QUEyQkEsT0FBSyxJQUFJLElBQVQsSUFBaUIsS0FBakIsRUFBd0I7QUFDdEIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsSUFBckIsQ0FBSixFQUFnQztBQUM5QixVQUFJLE9BQU8sTUFBTSxZQUFOLENBQW1CLElBQW5CLENBQVg7QUFDQSxZQUFNLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUIsTUFBTSxJQUFOLENBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLE9BQUosRUFBYTtBQUNYLGtCQUFjLFdBQWQsRUFBMkIsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0MsT0FBdEM7QUFDRDs7QUFFRCxRQUFNLFVBQU4sQ0FBaUIsS0FBakIsRUFBd0IsTUFBeEI7O0FBRUEsU0FBTyxLQUFQO0FBQ0QsQ0E5Q0Q7QUErQ0EsSUFBTSxJQUFJLE1BQU0sTUFBaEI7O0FBRUE7Ozs7O0FBS0EsTUFBTSxVQUFOLEdBQW1CLFVBQVMsSUFBVCxFQUFlO0FBQ2hDLE1BQUksUUFBUSxLQUFLLFVBQWpCO0FBQ0EsTUFBSSxPQUFPLEVBQVg7QUFDQSxRQUFNLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLGdCQUFRO0FBQzNCLFFBQUksVUFBVSxNQUFNLElBQU4sRUFBWSxLQUExQjtBQUNBLFFBQUksUUFBUSxLQUFSLENBQWMsYUFBZCxDQUFKLEVBQWtDO0FBQ2hDLGdCQUFXLFlBQVksTUFBdkI7QUFDRCxLQUZELE1BRU8sSUFBSSxRQUFRLEtBQVIsQ0FBYyxZQUFkLENBQUosRUFBaUM7QUFDdEMsZ0JBQVUsU0FBVjtBQUNEOztBQUVELFFBQUksT0FBSixFQUFhO0FBQ1gsV0FBSyxNQUFNLElBQU4sRUFBWSxJQUFqQixJQUF5QixPQUF6QjtBQUNEO0FBQ0YsR0FYRDs7QUFhQSxTQUFPLElBQVA7QUFDRCxDQWpCRDs7QUFtQkE7Ozs7O0FBS0EsTUFBTSxZQUFOLEdBQXFCLFVBQVMsS0FBVCxFQUFnQjtBQUNuQyxNQUFNLFVBQVUsTUFBTSxvQkFBTixDQUEyQixRQUEzQixDQUFoQjtBQUNBLE1BQUksYUFBYSxFQUFqQjtBQUNBLE1BQUksT0FBTyxFQUFYOztBQUVBLE1BQUksUUFBUSxNQUFaLEVBQW9CO0FBQ2xCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxRQUFRLE1BQTVCLEVBQW9DLEdBQXBDLEVBQXlDO0FBQ3ZDLG1CQUFhLE1BQU0sVUFBTixDQUFpQixRQUFRLENBQVIsQ0FBakIsQ0FBYjtBQUNBLGlCQUFXLEtBQVgsR0FBbUIsUUFBUSxDQUFSLEVBQVcsV0FBOUI7QUFDQSxXQUFLLElBQUwsQ0FBVSxVQUFWO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQWREOztBQWdCQTs7Ozs7QUFLQSxNQUFNLFFBQU4sR0FBaUIsVUFBUyxTQUFULEVBQW9CO0FBQ25DLE1BQU0sU0FBUyxJQUFJLE9BQU8sU0FBWCxFQUFmO0FBQ0EsTUFBSSxNQUFNLE9BQU8sZUFBUCxDQUF1QixTQUF2QixFQUFrQyxVQUFsQyxDQUFWO0FBQ0EsTUFBSSxXQUFXLEVBQWY7O0FBRUEsTUFBSSxHQUFKLEVBQVM7QUFDUCxRQUFJLFNBQVMsSUFBSSxvQkFBSixDQUF5QixPQUF6QixDQUFiO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE9BQU8sTUFBM0IsRUFBbUMsR0FBbkMsRUFBd0M7QUFDdEMsVUFBSSxZQUFZLE1BQU0sVUFBTixDQUFpQixPQUFPLENBQVAsQ0FBakIsQ0FBaEI7O0FBRUEsVUFBSSxPQUFPLENBQVAsRUFBVSxRQUFWLElBQXNCLE9BQU8sQ0FBUCxFQUFVLFFBQVYsQ0FBbUIsTUFBN0MsRUFBcUQ7QUFDbkQsa0JBQVUsTUFBVixHQUFtQixNQUFNLFlBQU4sQ0FBbUIsT0FBTyxDQUFQLENBQW5CLENBQW5CO0FBQ0Q7O0FBRUQsZUFBUyxJQUFULENBQWMsU0FBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxRQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBOzs7OztBQUtBLE1BQU0sVUFBTixHQUFtQixVQUFTLElBQVQsRUFBZTtBQUNoQyxNQUFJLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBcEI7QUFDQSxnQkFBYyxTQUFkLEdBQTBCLElBQTFCO0FBQ0EsU0FBTyxjQUFjLFdBQXJCO0FBQ0QsQ0FKRDs7QUFNQTs7Ozs7QUFLQSxNQUFNLFVBQU4sR0FBbUIsVUFBUyxJQUFULEVBQWU7QUFDaEMsTUFBSSxnQkFBZ0IsU0FBUyxhQUFULENBQXVCLFVBQXZCLENBQXBCO0FBQ0EsZ0JBQWMsV0FBZCxHQUE0QixJQUE1QjtBQUNBLFNBQU8sY0FBYyxTQUFyQjtBQUNELENBSkQ7O0FBTUE7QUFDQSxNQUFNLFVBQU4sR0FBbUIsVUFBUyxHQUFULEVBQWM7QUFDL0IsTUFBSSxRQUFRO0FBQ1YsU0FBSyxRQURLO0FBRVYsU0FBSyxPQUZLO0FBR1YsU0FBSyxNQUhLO0FBSVYsU0FBSztBQUpLLEdBQVo7O0FBT0EsTUFBTSxhQUFhLFNBQWIsVUFBYTtBQUFBLFdBQU8sTUFBTSxHQUFOLEtBQWMsR0FBckI7QUFBQSxHQUFuQjs7QUFFQSxTQUFRLE9BQU8sR0FBUCxLQUFlLFFBQWhCLEdBQTRCLElBQUksT0FBSixDQUFZLFNBQVosRUFBdUIsVUFBdkIsQ0FBNUIsR0FBaUUsR0FBeEU7QUFDRCxDQVhEOztBQWFBO0FBQ0EsTUFBTSxXQUFOLEdBQW9CLFVBQVMsS0FBVCxFQUFnQjtBQUNsQyxPQUFLLElBQUksSUFBVCxJQUFpQixLQUFqQixFQUF3QjtBQUN0QixRQUFJLE1BQU0sY0FBTixDQUFxQixJQUFyQixDQUFKLEVBQWdDO0FBQzlCLFlBQU0sSUFBTixJQUFjLE1BQU0sVUFBTixDQUFpQixNQUFNLElBQU4sQ0FBakIsQ0FBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FSRDs7QUFVQTtBQUNBLE1BQU0sT0FBTixHQUFnQixVQUFTLEtBQVQsRUFBZ0IsUUFBaEIsRUFBMEIsS0FBMUIsRUFBaUM7QUFDL0MsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQU0sTUFBMUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFDckMsYUFBUyxJQUFULENBQWMsS0FBZCxFQUFxQixDQUFyQixFQUF3QixNQUFNLENBQU4sQ0FBeEIsRUFEcUMsQ0FDRjtBQUNwQztBQUNGLENBSkQ7O0FBTUE7Ozs7O0FBS0EsTUFBTSxNQUFOLEdBQWUsVUFBUyxLQUFULEVBQWdCO0FBQzdCLFNBQU8sTUFBTSxNQUFOLENBQWEsVUFBQyxJQUFELEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBb0I7QUFDdEMsV0FBTyxJQUFJLE9BQUosQ0FBWSxJQUFaLE1BQXNCLEdBQTdCO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FKRDs7QUFNQSxNQUFNLFNBQU4sR0FBa0IsVUFBQyxJQUFELEVBQXdDO0FBQUEsTUFBakMsS0FBaUMsdUVBQXpCLEVBQXlCO0FBQUEsTUFBckIsV0FBcUIsdUVBQVAsRUFBTzs7QUFDeEQsTUFBSSxZQUFZLE1BQU0sVUFBTixDQUFpQixLQUFqQixDQUFoQjtBQUNBLE1BQUksZ0JBQWdCLENBQUMsU0FBRCxDQUFwQjs7QUFFQSxNQUFJLEtBQUssUUFBVCxFQUFtQjtBQUNqQixrQkFBYyxJQUFkLENBQW1CLEVBQUUsTUFBRixFQUFVLElBQVYsRUFBZ0IsRUFBQyxXQUFXLFVBQVosRUFBaEIsQ0FBbkI7QUFDRDs7QUFFRCxNQUFJLEtBQUssSUFBTCxLQUFjLFFBQWxCLEVBQTRCO0FBQzFCLFFBQUksV0FBSixFQUFpQjtBQUNmLG9CQUFjLElBQWQsQ0FBbUIsRUFBRSxNQUFGLEVBQVUsR0FBVixFQUFlO0FBQ2hDLG1CQUFXLGlCQURxQjtBQUVoQyxpQkFBUztBQUZ1QixPQUFmLENBQW5CO0FBSUQ7QUFDRjs7QUFFRCxTQUFPLEVBQUUsT0FBRixFQUFXLGFBQVgsRUFBMEI7QUFDL0IsU0FBSyxLQUFLLEVBRHFCO0FBRS9CLHVCQUFpQixLQUFLLElBQXRCO0FBRitCLEdBQTFCLENBQVA7QUFJRCxDQXJCRDs7QUF1QkEsTUFBTSxXQUFOLEdBQW9CLFVBQUMsU0FBRCxFQUFZLElBQVosRUFBcUI7QUFDdkMsTUFBSSxpQkFBSjtBQUR1QztBQUFBO0FBQUE7O0FBQUE7QUFFdkMsb0RBQXlCLFNBQXpCLDRHQUFvQztBQUFBOztBQUFBOztBQUFBLFVBQTFCLEdBQTBCO0FBQUEsVUFBckIsS0FBcUI7O0FBQ2xDLFVBQUksTUFBTSxPQUFOLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLFlBQUcsTUFBTSxPQUFOLENBQWMsSUFBZCxFQUFvQixHQUFwQixDQUFILEVBQTZCO0FBQzNCLHFCQUFXLEtBQVg7QUFDQTtBQUNEO0FBQ0YsT0FMRCxNQUtPLElBQUksU0FBUyxHQUFiLEVBQWtCO0FBQ3ZCLG1CQUFXLEtBQVg7QUFDQTtBQUNEO0FBQ0Y7QUFac0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjdkMsU0FBTyxRQUFQO0FBQ0QsQ0FmRDs7QUFpQkEsTUFBTSxvQkFBTixHQUE2QixxQkFBYTtBQUFBLE1BQ25DLE1BRG1DLEdBQ1YsU0FEVSxDQUNuQyxNQURtQztBQUFBLE1BQzNCLElBRDJCLEdBQ1YsU0FEVSxDQUMzQixJQUQyQjtBQUFBLE1BQ2xCLElBRGtCLDBDQUNWLFNBRFU7O0FBRXhDLE1BQU0sY0FBYyxTQUFkLFdBQWMsQ0FBQyxDQUFELEVBQU87QUFDekIsUUFBTSxPQUFPLEVBQUUsTUFBRixDQUFTLFdBQVQsQ0FBcUIsV0FBbEM7QUFDQSxRQUFJLGVBQWUsS0FBSyxzQkFBTCxDQUE0QixlQUE1QixFQUE2QyxDQUE3QyxDQUFuQjtBQUNBLFFBQU0saUJBQWlCO0FBQ3JCO0FBQ0EsS0FBQyxFQUFELEVBQUssWUFBTTtBQUNULFVBQUksWUFBSixFQUFrQjtBQUNoQixZQUFJLGFBQWEsZUFBakIsRUFBa0M7QUFDaEMsdUJBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixlQUE5QjtBQUNBLHlCQUFlLGFBQWEsZUFBNUI7QUFDQSx1QkFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLGVBQTNCO0FBQ0Q7QUFDRjtBQUNGLEtBUkQsQ0FGcUI7QUFXckI7QUFDQSxLQUFDLEVBQUQsRUFBSyxZQUFNO0FBQ1QsVUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFlBQUksYUFBYSxXQUFqQixFQUE4QjtBQUM1Qix1QkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLGVBQTlCO0FBQ0EseUJBQWUsYUFBYSxXQUE1QjtBQUNBLHVCQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsZUFBM0I7QUFDRDtBQUNGLE9BTkQsTUFNTztBQUNMLHVCQUFlLEtBQUssVUFBcEI7QUFDQSxxQkFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLGVBQTNCO0FBQ0Q7QUFDRixLQVhELENBWnFCLEVBd0JyQixDQUFDLEVBQUQsRUFBSyxZQUFNO0FBQ1QsVUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFVBQUUsTUFBRixDQUFTLEtBQVQsR0FBaUIsYUFBYSxTQUE5QjtBQUNBLFlBQUksS0FBSyxLQUFMLENBQVcsT0FBWCxLQUF1QixNQUEzQixFQUFtQztBQUNqQyxlQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBSyxLQUFMLENBQVcsT0FBWCxHQUFxQixNQUFyQjtBQUNEO0FBQ0Y7QUFDRixLQVRELENBeEJxQixDQUF2QjtBQW1DQSxRQUFJLGFBQWEsa0JBQVEsY0FBUixDQUFqQjs7QUFFQSxRQUFJLFlBQVksV0FBVyxHQUFYLENBQWUsRUFBRSxPQUFqQixDQUFoQjtBQUNBLFFBQUcsQ0FBQyxTQUFKLEVBQWU7QUFDYixrQkFBWTtBQUFBLGVBQU0sS0FBTjtBQUFBLE9BQVo7QUFDRDs7QUFFRCxXQUFPLFdBQVA7QUFDRCxHQTlDRDtBQStDQSxNQUFNLGFBQWE7QUFDakIsV0FBTyxvQkFBTztBQUNaLFVBQUksT0FBTyxJQUFJLE1BQUosQ0FBVyxXQUFYLENBQXVCLFdBQWxDO0FBQ0EsVUFBSSxNQUFKLENBQVcsZ0JBQVgsQ0FBNEIsU0FBNUIsRUFBdUMsV0FBdkM7QUFDQSxXQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0EsV0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixLQUFLLGFBQUwsQ0FBbUIsV0FBbkIsR0FBaUMsSUFBcEQ7QUFDRCxLQU5nQjtBQU9qQixVQUFNLG1CQUFPO0FBQ1gsVUFBSSxNQUFKLENBQVcsbUJBQVgsQ0FBK0IsU0FBL0IsRUFBMEMsV0FBMUM7QUFDQSxpQkFBVyxZQUFNO0FBQ2YsWUFBSSxNQUFKLENBQVcsV0FBWCxDQUF1QixXQUF2QixDQUFtQyxLQUFuQyxDQUF5QyxPQUF6QyxHQUFtRCxNQUFuRDtBQUNELE9BRkQsRUFFRyxHQUZIO0FBR0QsS0FaZ0I7QUFhakIsV0FBTyxlQUFDLEdBQUQsRUFBUztBQUNkLFVBQU0sT0FBTyxJQUFJLE1BQUosQ0FBVyxXQUFYLENBQXVCLFdBQXBDO0FBQ0EsdUJBQU8sS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUFQLEVBQW9DLElBQUksTUFBSixDQUFXLEtBQS9DO0FBQ0EsVUFBSSxDQUFDLElBQUksTUFBSixDQUFXLEtBQWhCLEVBQXVCO0FBQ3JCLGFBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsTUFBckI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0Q7QUFDRjtBQXJCZ0IsR0FBbkI7QUF1QkEsTUFBSSxZQUFZLHNCQUFjLEVBQWQsRUFBa0IsSUFBbEIsRUFDZDtBQUNFLFFBQU8sS0FBSyxFQUFaLFdBREY7QUFFRSxZQUFRO0FBRlYsR0FEYyxDQUFoQjtBQUtBLE1BQUksY0FBYyxzQkFBYyxFQUFkLEVBQWtCLElBQWxCLEVBQXdCLEVBQUMsTUFBTSxRQUFQLEVBQXhCLENBQWxCO0FBQ0EsU0FBTyxVQUFVLElBQWpCO0FBQ0EsTUFBTSxRQUFRLENBQ1osRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixTQUFqQixDQURZLEVBRVosRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixXQUFqQixDQUZZLENBQWQ7O0FBS0EsTUFBTSxVQUFVLE9BQU8sR0FBUCxDQUFXLHNCQUFjO0FBQ3ZDLFFBQUksUUFBUSxXQUFXLEtBQXZCO0FBQ0EsUUFBSSxTQUFTO0FBQ1gsY0FBUTtBQUNOLGVBQU8sb0JBQU87QUFDWixjQUFNLE9BQU8sSUFBSSxNQUFKLENBQVcsYUFBeEI7QUFDQSxjQUFNLFFBQVEsS0FBSyxlQUFMLENBQXFCLGVBQW5DO0FBQ0EsZ0JBQU0sS0FBTixHQUFjLFdBQVcsS0FBekI7QUFDQSxnQkFBTSxlQUFOLENBQXNCLEtBQXRCLEdBQThCLFdBQVcsS0FBekM7QUFDQSxlQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE1BQXJCO0FBQ0Q7QUFQSyxPQURHO0FBVVgsYUFBTyxXQUFXO0FBVlAsS0FBYjtBQVlBLFdBQU8sRUFBRSxJQUFGLEVBQVEsS0FBUixFQUFlLE1BQWYsQ0FBUDtBQUNELEdBZmUsQ0FBaEI7O0FBaUJBLFFBQU0sSUFBTixDQUFXLEVBQUUsSUFBRixFQUFRLE9BQVIsRUFDVCxFQUFDLElBQU8sS0FBSyxFQUFaLFVBQUQsRUFBd0IsbUJBQWlCLElBQWpCLFVBQXhCLEVBRFMsQ0FBWDs7QUFHQSxNQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsR0FBRCxFQUFTLENBRXpCLENBRkQ7O0FBSUEsU0FBTyxFQUFDLFlBQUQsRUFBUSxrQkFBUixFQUFQO0FBQ0QsQ0E3R0Q7O0FBK0dBOzs7OztBQUtBLE1BQU0sY0FBTixHQUF1QixxQkFBYTtBQUNsQyxNQUFJLFVBQVUsRUFBZDtBQURrQyxNQUU3QixNQUY2QixHQUVnQyxTQUZoQyxDQUU3QixNQUY2QjtBQUFBLE1BRXJCLFdBRnFCLEdBRWdDLFNBRmhDLENBRXJCLFdBRnFCO0FBQUEsTUFFUixJQUZRLEdBRWdDLFNBRmhDLENBRVIsSUFGUTtBQUFBLE1BRUYsTUFGRSxHQUVnQyxTQUZoQyxDQUVGLE1BRkU7QUFBQSxNQUVNLEtBRk4sR0FFZ0MsU0FGaEMsQ0FFTSxLQUZOO0FBQUEsTUFFYSxNQUZiLEdBRWdDLFNBRmhDLENBRWEsTUFGYjtBQUFBLE1BRXdCLElBRnhCLDBDQUVnQyxTQUZoQzs7QUFHbEMsTUFBSSxhQUFhLEtBQUssT0FBTCxDQUFhLFFBQWIsRUFBdUIsRUFBdkIsQ0FBakI7QUFDQSxNQUFJLFdBQVcsU0FBUyxRQUF4Qjs7QUFFQSxNQUFJLE1BQUosRUFBWTtBQUNWLFFBQUksZUFBZSxRQUFuQixFQUE2QjtBQUMzQixjQUFRLElBQVIsQ0FBYSxFQUFFLFFBQUYsRUFBWSxXQUFaLEVBQXlCO0FBQ3BDLGtCQUFVLElBRDBCO0FBRXBDLGtCQUFVO0FBRjBCLE9BQXpCLENBQWI7QUFJRDs7QUFFRCxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksT0FBTyxNQUEzQixFQUFtQyxHQUFuQyxFQUF3QztBQUFBLHNCQUNILE9BQU8sQ0FBUCxDQURHO0FBQUEsc0NBQ2pDLEtBRGlDO0FBQUEsVUFDakMsS0FEaUMsbUNBQ3pCLEVBRHlCO0FBQUEsVUFDbEIsV0FEa0I7OztBQUd0QyxrQkFBWSxFQUFaLEdBQW9CLEtBQUssRUFBekIsU0FBK0IsQ0FBL0I7QUFDQSxVQUFJLENBQUMsWUFBWSxRQUFiLElBQXlCLFdBQTdCLEVBQTBDO0FBQ3hDLGVBQU8sWUFBWSxRQUFuQjtBQUNEOztBQUVELFVBQUksUUFBSixFQUFjO0FBQ1osWUFBSSxJQUFJLEVBQUUsUUFBRixFQUFZLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFaLEVBQTRDLFdBQTVDLENBQVI7QUFDQSxnQkFBUSxJQUFSLENBQWEsQ0FBYjtBQUNELE9BSEQsTUFHTztBQUNMLFlBQUksZUFBZSxVQUFuQjtBQUNBLFlBQUksTUFBSixFQUFZO0FBQ1YsMEJBQWdCLFNBQWhCO0FBQ0Q7QUFDRCxvQkFBWSxJQUFaLEdBQW1CLFVBQW5CO0FBQ0EsWUFBSSxZQUFZLFFBQWhCLEVBQTBCO0FBQ3hCLHNCQUFZLE9BQVosR0FBc0IsU0FBdEI7QUFDQSxpQkFBTyxZQUFZLFFBQW5CO0FBQ0Q7QUFDRCxZQUFJLFFBQVEsRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixzQkFBYyxFQUFkLEVBQWtCLElBQWxCLEVBQXdCLFdBQXhCLENBQWpCLENBQVo7QUFDQSxZQUFJLGFBQWEsRUFBQyxLQUFLLFlBQVksRUFBbEIsRUFBakI7QUFDQSxZQUFJLGVBQWUsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFuQjtBQUNBLFlBQUksTUFBSixFQUFZO0FBQ1YsY0FBSSxXQUFXLEVBQUUsTUFBRixDQUFmO0FBQ0EseUJBQWUsQ0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQixLQUFsQixDQUFmO0FBQ0EscUJBQVcsU0FBWCxHQUF1QixXQUF2QjtBQUNEOztBQUVELFlBQUksYUFBYSxFQUFFLE9BQUYsRUFBVyxZQUFYLEVBQXlCLFVBQXpCLENBQWpCO0FBQ0EsWUFBSSxVQUFVLEVBQUUsS0FBRixFQUFTLFVBQVQsRUFBcUIsRUFBQyxXQUFXLFlBQVosRUFBckIsQ0FBZDtBQUNBLGdCQUFRLElBQVIsQ0FBYSxPQUFiO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJLENBQUMsUUFBRCxJQUFhLEtBQWpCLEVBQXdCO0FBQ3RCLFVBQUksbUJBQW1CO0FBQ3JCLFlBQU8sS0FBSyxFQUFaLFdBRHFCO0FBRXJCLG1CQUFjLEtBQUssU0FBbkIsa0JBRnFCO0FBR3JCLGdCQUFRO0FBQ04saUJBQU87QUFBQSxtQkFBTSxNQUFNLGFBQU4sQ0FBb0IsaUJBQWlCLEVBQXJDLENBQU47QUFBQTtBQUREO0FBSGEsT0FBdkI7QUFPQTtBQUNBLFVBQUksZ0JBQWUsVUFBbkI7QUFDQSxVQUFJLE1BQUosRUFBWTtBQUNWLHlCQUFnQixTQUFoQjtBQUNEOztBQUVELFVBQUksY0FBYyxzQkFBYyxFQUFkLEVBQWtCLElBQWxCLEVBQXdCLGdCQUF4QixDQUFsQjtBQUNBLGtCQUFZLElBQVosR0FBbUIsVUFBbkI7O0FBRUEsVUFBSSxnQkFBZ0I7QUFDbEIsY0FBTSxNQURZO0FBRWxCLGNBQU0sS0FBSyxJQUZPO0FBR2xCLFlBQU8saUJBQWlCLEVBQXhCLFdBSGtCO0FBSWxCLG1CQUFXO0FBSk8sT0FBcEI7QUFNQSxVQUFJLGNBQWMsQ0FDaEIsRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixXQUFqQixDQURnQixFQUVoQixTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FGZ0IsRUFHaEIsRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixhQUFqQixDQUhnQixDQUFsQjtBQUtBLFVBQUksY0FBYSxFQUFFLE9BQUYsRUFBVyxXQUFYLEVBQXdCLEVBQUMsS0FBSyxZQUFZLEVBQWxCLEVBQXhCLENBQWpCO0FBQ0EsVUFBSSxXQUFVLEVBQUUsS0FBRixFQUFTLFdBQVQsRUFBcUIsRUFBQyxXQUFXLGFBQVosRUFBckIsQ0FBZDtBQUNBLGNBQVEsSUFBUixDQUFhLFFBQWI7QUFDRDtBQUNGOztBQUVELE1BQU0sWUFBWSxDQUNoQixDQUFDLFFBQUQsRUFDRTtBQUFBLFdBQU0sRUFBRSxVQUFGLEVBQWMsT0FBZCxFQUF1QixJQUF2QixDQUFOO0FBQUEsR0FERixDQURnQixFQUdoQixDQUFDLENBQUMsZ0JBQUQsRUFBbUIsYUFBbkIsRUFBa0MsVUFBbEMsQ0FBRCxFQUNFO0FBQUEsV0FBTSxFQUFFLEtBQUYsRUFBUyxPQUFULEVBQWtCLEVBQUMsV0FBVyxJQUFaLEVBQWxCLENBQU47QUFBQSxHQURGLENBSGdCLENBQWxCOztBQU9BLFNBQU8sTUFBTSxXQUFOLENBQWtCLFNBQWxCLEVBQTZCLElBQTdCLENBQVA7QUFDRCxDQTVGRDs7QUE4RkEsTUFBTSxZQUFOLEdBQXFCLHFCQUFhO0FBQUEsTUFDM0IsS0FEMkIsR0FDa0MsU0FEbEMsQ0FDM0IsS0FEMkI7QUFBQSxNQUNwQixXQURvQixHQUNrQyxTQURsQyxDQUNwQixXQURvQjtBQUFBLE1BQ1AsT0FETyxHQUNrQyxTQURsQyxDQUNQLE9BRE87QUFBQSxNQUNFLElBREYsR0FDa0MsU0FEbEMsQ0FDRSxJQURGO0FBQUEsTUFDUSxFQURSLEdBQ2tDLFNBRGxDLENBQ1EsRUFEUjtBQUFBLE1BQ1ksU0FEWixHQUNrQyxTQURsQyxDQUNZLFNBRFo7QUFBQSxNQUMwQixJQUQxQiwwQ0FDa0MsU0FEbEM7O0FBRWhDLE1BQUksRUFBSixFQUFRO0FBQ04sUUFBSSxTQUFKLEVBQWU7QUFDYixVQUFJLEtBQUssSUFBVCxFQUFlO0FBQ2IsYUFBSyxJQUFMLEdBQVksS0FBSyxJQUFMLEdBQVksVUFBeEI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLElBQUwsR0FBWSxNQUFNLFFBQU4sQ0FBZSxTQUFmLElBQTRCLFVBQXhDO0FBQ0Q7QUFDRjtBQUNELFNBQUssRUFBTCxHQUFVLEtBQUssSUFBZjtBQUNEO0FBQ0QsTUFBSSxXQUFKLEVBQWlCO0FBQ2YsU0FBSyxLQUFMLEdBQWEsV0FBYjtBQUNEO0FBQ0QsTUFBSSxPQUFKLEVBQWE7QUFDWCxXQUFPLE9BQVA7QUFDRDs7QUFFRCxNQUFJLFFBQVE7QUFDVixXQUFPLEVBQUUsSUFBRixFQUFRLE1BQU0sVUFBTixDQUFpQixLQUFqQixDQUFSLEVBQWlDLElBQWpDLENBREc7QUFFVixjQUFVLE1BQU07QUFGTixHQUFaOztBQUtBLFNBQU87QUFBQSxXQUFNLEtBQU47QUFBQSxHQUFQO0FBQ0QsQ0F6QkQ7O0FBMkJBOzs7Ozs7QUFNQSxNQUFNLFVBQU4sR0FBbUIsVUFBQyxTQUFELEVBQVksSUFBWixFQUFxQjtBQUN0QyxNQUFNLElBQUksTUFBVjtBQUNBLE1BQUksT0FBTyxFQUFYOztBQUVBLE1BQUksQ0FBQyxNQUFNLE9BQU4sQ0FBYyxTQUFkLENBQUwsRUFBK0I7QUFDN0IsZ0JBQVksQ0FBQyxTQUFELENBQVo7QUFDRDs7QUFFRCxNQUFJLENBQUMsTUFBTSxRQUFOLENBQWUsU0FBZixDQUFMLEVBQWdDO0FBQzlCLFdBQU8sRUFBRSxHQUFGLENBQU0sU0FBTixFQUFpQixlQUFPO0FBQzdCLFVBQUksVUFBVTtBQUNaLGtCQUFVLFFBREU7QUFFWixlQUFPLElBRks7QUFHWixhQUFLLENBQUMsUUFBUSxFQUFULElBQWU7QUFIUixPQUFkO0FBS0EsYUFBTyxFQUFFLElBQUYsQ0FBTyxPQUFQLEVBQWdCLElBQWhCLENBQXFCO0FBQUEsZUFBTSxPQUFPLFFBQVAsQ0FBZ0IsRUFBaEIsQ0FBbUIsSUFBbkIsQ0FBd0IsR0FBeEIsQ0FBTjtBQUFBLE9BQXJCLENBQVA7QUFDRCxLQVBNLENBQVA7QUFRRDs7QUFFRCxPQUFLLElBQUwsQ0FBVSxFQUFFLFFBQUYsQ0FBWTtBQUFBLFdBQVksRUFBRyxTQUFTLE9BQVosQ0FBWjtBQUFBLEdBQVosQ0FBVjs7QUFFQSxTQUFPLEVBQUUsSUFBRiwyQ0FBVSxJQUFWLEVBQVA7QUFDRCxDQXRCRDs7QUF3QkE7Ozs7OztBQU1BLE1BQU0sUUFBTixHQUFpQixVQUFDLEdBQUQsRUFBc0I7QUFBQSxNQUFoQixJQUFnQix1RUFBVCxJQUFTOztBQUNyQyxNQUFJLFdBQVcsS0FBZjtBQUNBLE1BQU0sUUFBUSxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBZDtBQUNBLE1BQUksTUFBTSxPQUFOLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLGVBQVcsSUFBSSxLQUFKLENBQVU7QUFBQSxhQUFLLE1BQU0sT0FBTixDQUFjLENBQWQsRUFBaUIsS0FBakIsQ0FBTDtBQUFBLEtBQVYsQ0FBWDtBQUNELEdBRkQsTUFFTztBQUNMLGVBQVcsTUFBTSxPQUFOLENBQWMsR0FBZCxFQUFtQixLQUFuQixDQUFYO0FBQ0Q7QUFDRCxTQUFPLFFBQVA7QUFDRCxDQVREOztBQVdBOzs7Ozs7QUFNQSxNQUFNLFNBQU4sR0FBa0IsVUFBQyxTQUFELEVBQVksSUFBWixFQUFxQjtBQUNyQyxNQUFJLE1BQU0sUUFBTixDQUFlLFNBQWYsRUFBMEIsS0FBMUIsQ0FBSixFQUFzQztBQUNwQztBQUNEO0FBQ0QsTUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLElBQUQsRUFBVTtBQUM1QixRQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxTQUFLLElBQUwsR0FBWSxVQUFaO0FBQ0EsU0FBSyxHQUFMLEdBQVcsWUFBWDtBQUNBLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLElBQTFCO0FBQ0EsV0FBTyxRQUFQLENBQWdCLEdBQWhCLENBQW9CLElBQXBCLENBQXlCLElBQXpCO0FBQ0QsR0FQRDtBQVFBLFlBQVUsT0FBVixDQUFrQjtBQUFBLFdBQU8sWUFBWSxDQUFDLFFBQVEsRUFBVCxJQUFlLEdBQTNCLENBQVA7QUFBQSxHQUFsQjtBQUNELENBYkQ7O0FBZUEsTUFBTSxnQkFBTixHQUF5QixnQkFBUTtBQUFBLG9CQUNGLElBREUsQ0FDMUIsS0FEMEI7QUFBQSxNQUMxQixLQUQwQiwrQkFDbEIsRUFEa0I7QUFBQSxNQUNYLEtBRFcsMENBQ0YsSUFERTs7QUFFL0IsTUFBSSxXQUFXO0FBQ2IsV0FBTyxFQUFFLFVBQUYsRUFBYyxNQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBZCxFQUF1QyxLQUF2QztBQURNLEdBQWY7QUFHQSxNQUFJLFVBQVU7QUFDWixhQUFTO0FBQ1AsVUFBSSxDQUFDLG9DQUFELENBREc7QUFFUCxnQkFBVSx1QkFBTztBQUNmLFlBQUksT0FBTyxPQUFQLENBQWUsT0FBZixDQUF1QixLQUFLLEVBQTVCLENBQUosRUFBcUM7QUFDbkMsaUJBQU8sT0FBUCxDQUFlLE9BQWYsQ0FBdUIsS0FBSyxFQUE1QixFQUFnQyxNQUFoQztBQUNEO0FBQ0QsZUFBTyxPQUFQLENBQWUsSUFBZixDQUFvQjtBQUNsQixrQkFBUSxTQUFTLEtBREM7QUFFbEIsa0JBQVEsR0FGVTtBQUdsQixtQkFBUyxDQUNQLGdFQURPLEVBRVAsNENBRk8sRUFHUCxtREFITyxDQUhTO0FBUWxCLG1CQUFTO0FBUlMsU0FBcEI7QUFVRDtBQWhCTSxLQURHO0FBbUJaLFdBQU87QUFDTCxVQUFJLENBQUMsa0NBQUQsQ0FEQztBQUVMLFdBQUssQ0FBQyx3Q0FBRCxDQUZBO0FBR0wsZ0JBQVUsdUJBQU87QUFDZixZQUFNLFFBQVEsT0FBTyxLQUFQLENBQWEsTUFBYixDQUFvQixPQUFwQixDQUFkO0FBQ0EsZUFBTyxTQUFQLENBQWlCLEtBQWpCLENBQXVCLEtBQUssRUFBNUIsSUFBa0MsRUFBbEM7QUFDQSxZQUFJLFNBQVMsT0FBTyxTQUFQLENBQWlCLEtBQWpCLENBQXVCLEtBQUssRUFBNUIsQ0FBYjtBQUNBLGVBQU8sUUFBUCxHQUFrQixJQUFJLE9BQU8sS0FBWCxDQUFpQixTQUFTLEtBQTFCLEVBQWlDO0FBQ2pELG1CQUFTO0FBQ1AscUJBQVMsQ0FDUCxDQUFDLEVBQUMsVUFBVSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sS0FBUCxDQUFYLEVBQUQsQ0FETyxFQUVQLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsV0FBbkIsQ0FGTyxFQUdQLENBQUMsWUFBRCxDQUhPO0FBREYsV0FEd0M7QUFRakQsdUJBQWEsTUFBTSxXQUFOLElBQXFCLEVBUmU7QUFTakQsaUJBQU87QUFUMEMsU0FBakMsQ0FBbEI7QUFXQSxlQUFPLElBQVAsR0FBYyxJQUFJLEtBQUosRUFBZDtBQUNBLFlBQUksS0FBSixFQUFXO0FBQ1QsaUJBQU8sUUFBUCxDQUFnQixXQUFoQixDQUE0QixPQUFPLElBQVAsQ0FBWSxLQUFaLENBQWtCLE1BQU0sVUFBTixDQUFpQixLQUFqQixDQUFsQixDQUE1QjtBQUNEO0FBQ0QsZUFBTyxRQUFQLENBQWdCLEVBQWhCLENBQW1CLGFBQW5CLEVBQWtDLFVBQVMsS0FBVCxFQUFnQjtBQUNoRCxpQkFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBQVksT0FBWixDQUFvQixLQUFwQixDQUFkO0FBQ0QsU0FGRDtBQUdEO0FBekJJO0FBbkJLLEdBQWQ7O0FBZ0RBLE1BQUksS0FBSyxJQUFMLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsYUFBUyxRQUFULEdBQW9CLFFBQVEsS0FBSyxJQUFiLEVBQW1CLFFBQXZDO0FBQ0Q7QUFDRCxNQUFJLEtBQUssSUFBTCxLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCLGFBQVMsS0FBVCxHQUFpQixFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWUsS0FBZixDQUFqQjtBQUNEOztBQUVELE1BQU0sV0FBVyxTQUFYLFFBQVcsR0FBTTtBQUNyQixRQUFJLFFBQVEsS0FBSyxJQUFiLENBQUosRUFBd0I7QUFDdEIsZUFBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QyxRQUE5Qzs7QUFFQSxVQUFJLFFBQVEsS0FBSyxJQUFiLEVBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sU0FBTixDQUFnQixRQUFRLEtBQUssSUFBYixFQUFtQixHQUFuQztBQUNEO0FBQ0QsVUFBSSxRQUFRLEtBQUssSUFBYixFQUFtQixFQUFuQixJQUF5QixDQUFDLE1BQU0sUUFBTixDQUFlLFFBQVEsS0FBSyxJQUFiLEVBQW1CLEVBQWxDLENBQTlCLEVBQXFFO0FBQ25FLGNBQU0sVUFBTixDQUFpQixRQUFRLEtBQUssSUFBYixFQUFtQixFQUFwQyxFQUF3QyxJQUF4QyxDQUE2QyxTQUFTLFFBQXREO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsaUJBQVMsUUFBVDtBQUNEO0FBQ0Y7QUFDRixHQWJEOztBQWVBLFNBQU8sRUFBQyxPQUFPLFNBQVMsS0FBakIsRUFBd0Isa0JBQXhCLEVBQVA7QUFDRCxDQTVFRDs7QUE4RUEsTUFBTSxTQUFOLEdBQWtCLEVBQWxCOztBQUVBLE1BQU0sV0FBTixHQUFvQixVQUFDLFNBQUQsRUFBa0M7QUFBQSxNQUF0QixTQUFzQix1RUFBVixLQUFVO0FBQUEsTUFFbEQsS0FGa0QsR0FNdkMsU0FOdUMsQ0FFbEQsS0FGa0Q7QUFBQSxNQUdsRCxXQUhrRCxHQU12QyxTQU51QyxDQUdsRCxXQUhrRDtBQUFBLE1BSWxELE9BSmtELEdBTXZDLFNBTnVDLENBSWxELE9BSmtEO0FBQUEsTUFLbEQsYUFMa0QsR0FNdkMsU0FOdUMsQ0FLbEQsYUFMa0Q7QUFBQSxNQU0vQyxJQU4rQywwQ0FNdkMsU0FOdUM7O0FBT3BELE1BQUksaUJBQUo7QUFDQSxNQUFJLGNBQUo7O0FBRUEsTUFBSSxTQUFKLEVBQWU7QUFDYixRQUFJLEtBQUssSUFBVCxFQUFlO0FBQ2IsV0FBSyxJQUFMLEdBQVksS0FBSyxJQUFMLEdBQVksVUFBeEI7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLLElBQUwsR0FBWSxNQUFNLFFBQU4sQ0FBZSxTQUFmLElBQTRCLFVBQXhDO0FBQ0Q7QUFDRjtBQUNELE9BQUssRUFBTCxHQUFVLEtBQUssSUFBZjs7QUFFQSxNQUFJLE9BQUosRUFBYTtBQUNYLFNBQUssSUFBTCxHQUFZLE9BQVo7QUFDRDs7QUFFRCxNQUFJLEtBQUssUUFBTCxJQUFpQixLQUFLLElBQUwsS0FBYyxnQkFBbkMsRUFBcUQ7QUFDbkQsU0FBSyxJQUFMLEdBQVksS0FBSyxJQUFMLEdBQVksSUFBeEI7QUFDRDs7QUFFRCxNQUFJLGFBQWEsTUFBTSxTQUFOLENBQWdCLElBQWhCLEVBQXNCLEtBQXRCLEVBQTZCLFdBQTdCLENBQWpCOztBQUVBLE1BQUksS0FBSyxRQUFULEVBQW1CO0FBQ2pCLFNBQUssUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUssZUFBTCxJQUF3QixNQUF4QjtBQUNEOztBQUdELE1BQUksWUFBWSxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsQ0FDckMsQ0FBQyxjQUFELEVBQ0UsWUFBTTtBQUNKLFFBQUksZUFBZSxNQUFNLG9CQUFOLENBQTJCLElBQTNCLENBQW5CO0FBQ0EsUUFBSSxXQUFXO0FBQ2IsYUFBTyxDQUFDLFVBQUQsRUFBYSxhQUFhLEtBQTFCLENBRE07QUFFYixnQkFBVSxhQUFhO0FBRlYsS0FBZjtBQUlBLFdBQU8sUUFBUDtBQUNELEdBUkgsQ0FEcUMsRUFVckMsQ0FBQyxxQkFBZ0IsSUFBaEIsQ0FBcUIsTUFBckIsQ0FBNEIsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixNQUFuQixDQUE1QixDQUFELEVBQ0UsWUFBTTtBQUNKLFFBQUksV0FBVztBQUNiLGFBQU8sQ0FBQyxVQUFELEVBQWEsRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixJQUFqQixDQUFiO0FBRE0sS0FBZjtBQUdBLFdBQU8sUUFBUDtBQUNELEdBTkgsQ0FWcUMsRUFpQnJDLENBQUMsQ0FBQyxXQUFELEVBQWMsTUFBZCxDQUFxQixxQkFBZ0IsU0FBckMsQ0FBRCxFQUNFLFlBQU07QUFBQSxRQUNDLElBREQsR0FDbUIsSUFEbkIsQ0FDQyxJQUREO0FBQUEsUUFDVSxLQURWLDBDQUNtQixJQURuQjs7QUFFSixRQUFJLFdBQVc7QUFDYixhQUFPLENBQUMsRUFBRSxJQUFGLEVBQVEsTUFBTSxVQUFOLENBQWlCLEtBQWpCLENBQVIsRUFBaUMsS0FBakMsQ0FBRDtBQURNLEtBQWY7QUFHQSxXQUFPLFFBQVA7QUFDRCxHQVBILENBakJxQyxFQXlCckMsQ0FBQyxxQkFBZ0IsTUFBakIsRUFDRSxZQUFNO0FBQ0osUUFBSSxXQUFXO0FBQ2IsYUFBTyxFQUFFLFFBQUYsRUFBWSxLQUFaLEVBQW1CLElBQW5CO0FBRE0sS0FBZjtBQUdBLFdBQU8sUUFBUDtBQUNELEdBTkgsQ0F6QnFDLEVBZ0NyQyxDQUFDLENBQUMsUUFBRCxFQUFXLGdCQUFYLEVBQTZCLGFBQTdCLEVBQTRDLFVBQTVDLENBQUQsRUFDRSxZQUFNO0FBQ0osUUFBSSxRQUFRLE1BQU0sY0FBTixDQUFxQixJQUFyQixDQUFaO0FBQ0EsUUFBSSxXQUFXO0FBQ2IsYUFBTyxDQUFDLFVBQUQsRUFBYSxLQUFiO0FBRE0sS0FBZjtBQUdBLFdBQU8sUUFBUDtBQUNELEdBUEgsQ0FoQ3FDLEVBd0NyQyxDQUFDLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsT0FBeEIsQ0FBRCxFQUNFLFlBQU07QUFDSixRQUFJLFFBQVEsTUFBTSxnQkFBTixDQUF1QixJQUF2QixDQUFaO0FBQ0EsUUFBSSxXQUFXO0FBQ2IsYUFBTyxDQUFDLFVBQUQsRUFBYSxNQUFNLEtBQW5CLENBRE07QUFFYixnQkFBVSxNQUFNO0FBRkgsS0FBZjtBQUlBLFdBQU8sUUFBUDtBQUNELEdBUkgsQ0F4Q3FDLENBQXZCLENBQWhCOztBQW1ERSxhQUFXLE1BQU0sV0FBTixDQUFrQixTQUFsQixFQUE2QixLQUFLLElBQWxDLENBQVg7O0FBRUEsTUFBSSxRQUFKLEVBQWM7QUFDWixlQUFXLFVBQVg7QUFDRCxHQUZELE1BRU87QUFDTCxlQUFXLE1BQU0sWUFBTixDQUFtQixTQUFuQixHQUFYO0FBQ0Q7O0FBRUQsTUFBSSxLQUFLLElBQUwsS0FBYyxRQUFsQixFQUE0QjtBQUMxQixRQUFJLGVBQWUsRUFBbkI7QUFDQSxRQUFJLEtBQUssRUFBVCxFQUFhO0FBQ1gsbUJBQWEsU0FBYixXQUNNLEtBQUssSUFEWCwwQkFDb0MsS0FBSyxFQUR6QztBQUVEO0FBQ0QsWUFBUSxNQUFNLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLFNBQVMsS0FBN0IsRUFBb0MsWUFBcEMsQ0FBUjtBQUNELEdBUEQsTUFPTztBQUNMLFlBQVEsTUFBTSxNQUFOLENBQWEsT0FBYixFQUFzQixJQUF0QixFQUE0QixJQUE1QixDQUFSO0FBQ0Q7O0FBRUQsTUFBSSxTQUFTLFFBQWIsRUFBdUI7QUFDckIsVUFBTSxnQkFBTixDQUF1QixlQUF2QixFQUF3QyxTQUFTLFFBQWpEO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0gsQ0E5R0Q7O0FBZ0hGOzs7OztBQUtBLE1BQU0sYUFBTixHQUFzQixtQkFBVztBQUMvQixNQUFNLGFBQWEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQW5CO0FBQ0EsTUFBTSxrQkFBa0IsU0FBUyxjQUFULENBQTJCLE9BQTNCLFlBQXhCOztBQUVBLE1BQUksV0FBVyxPQUFmLEVBQXdCO0FBQ3RCLG9CQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxjQUFoQztBQUNELEdBRkQsTUFFTztBQUNMLG9CQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxNQUFoQztBQUNEO0FBQ0YsQ0FURDs7QUFXQTs7Ozs7QUFLQSxNQUFNLFVBQU4sR0FBbUIsZUFBTztBQUN4QixTQUFPLElBQUksT0FBSixDQUFZLE9BQVosRUFBcUIsVUFBUyxDQUFULEVBQVk7QUFDcEMsV0FBTyxFQUFFLFdBQUYsRUFBUDtBQUNELEdBRkksQ0FBUDtBQUdELENBSkQ7O0FBT0EsTUFBTSxLQUFOLEdBQWMsVUFBQyxJQUFELEVBQU8sSUFBUCxFQUFnQjtBQUM1QixNQUFJLFlBQVksc0JBQWMsRUFBZCxFQUFrQixJQUFsQixFQUF3QixJQUF4QixDQUFoQjtBQUNBLE9BQUssSUFBSSxJQUFULElBQWlCLElBQWpCLEVBQXVCO0FBQ3JCLFFBQUksVUFBVSxjQUFWLENBQXlCLElBQXpCLENBQUosRUFBb0M7QUFDbEMsVUFBSSxNQUFNLE9BQU4sQ0FBYyxLQUFLLElBQUwsQ0FBZCxDQUFKLEVBQStCO0FBQzdCLGtCQUFVLElBQVYsSUFBa0IsTUFBTSxPQUFOLENBQWMsS0FBSyxJQUFMLENBQWQsSUFBNEIsTUFBTSxNQUFOLENBQWEsS0FBSyxJQUFMLEVBQVcsTUFBWCxDQUFrQixLQUFLLElBQUwsQ0FBbEIsQ0FBYixDQUE1QixHQUEwRSxLQUFLLElBQUwsQ0FBNUY7QUFDRCxPQUZELE1BRU8sSUFBSSxzQkFBTyxLQUFLLElBQUwsQ0FBUCxNQUFzQixRQUExQixFQUFvQztBQUN6QyxrQkFBVSxJQUFWLElBQWtCLE1BQU0sS0FBTixDQUFZLEtBQUssSUFBTCxDQUFaLEVBQXdCLEtBQUssSUFBTCxDQUF4QixDQUFsQjtBQUNELE9BRk0sTUFFQTtBQUNMLGtCQUFVLElBQVYsSUFBa0IsS0FBSyxJQUFMLENBQWxCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBTyxTQUFQO0FBQ0QsQ0FkRDs7QUFnQkEsTUFBTSxpQkFBTixHQUEwQixVQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsRUFBWCxFQUFrQjtBQUMxQyxTQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFBQSxXQUFLLEdBQUcsZ0JBQUgsQ0FBb0IsQ0FBcEIsRUFBdUIsRUFBdkIsRUFBMkIsS0FBM0IsQ0FBTDtBQUFBLEdBQXhCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQSxNQUFNLE9BQU4sR0FBZ0IsVUFBQyxFQUFELEVBQUssR0FBTCxFQUFhO0FBQzNCLE1BQUksWUFBWSxJQUFJLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEVBQWpCLENBQWhCO0FBQ0EsU0FBTyxDQUFDLEtBQUssR0FBRyxhQUFULEtBQTJCLENBQUMsR0FBRyxTQUFILENBQWEsUUFBYixDQUFzQixTQUF0QixDQUFuQztBQUNBLFNBQU8sRUFBUDtBQUNELENBSkQ7O0FBTUEsTUFBTSxJQUFOLEdBQWE7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFiOztBQUVBLE1BQU0sUUFBTixHQUFpQixVQUFDLElBQUQsRUFBeUM7QUFBQSxNQUFsQyxJQUFrQyx1RUFBM0IsR0FBMkI7QUFBQSxNQUF0QixTQUFzQix1RUFBVixLQUFVOztBQUN4RCxNQUFJLGdCQUFKO0FBQ0EsU0FBTyxZQUFrQjtBQUFBLHNDQUFOLElBQU07QUFBTixVQUFNO0FBQUE7O0FBQ3ZCLFFBQUksVUFBVSxJQUFkO0FBQ0EsUUFBSSxRQUFRLFNBQVIsS0FBUSxHQUFXO0FBQ3JCLGdCQUFVLElBQVY7QUFDQSxVQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNkLGFBQUssS0FBTCxDQUFXLE9BQVgsRUFBb0IsSUFBcEI7QUFDRDtBQUNGLEtBTEQ7QUFNQSxRQUFJLFVBQVUsYUFBYSxDQUFDLE9BQTVCO0FBQ0EsaUJBQWEsT0FBYjtBQUNBLGNBQVUsV0FBVyxLQUFYLEVBQWtCLElBQWxCLENBQVY7QUFDQSxRQUFJLE9BQUosRUFBYTtBQUNYLFdBQUssS0FBTCxDQUFXLE9BQVgsRUFBb0IsSUFBcEI7QUFDRDtBQUNGLEdBZEQ7QUFlRCxDQWpCRDs7QUFtQkE7Ozs7O0FBS0EsTUFBTSxXQUFOLEdBQW9CLFlBQU07QUFDeEIsTUFBSSxjQUFjLEVBQWxCO0FBQ0EsR0FBQyxVQUFTLENBQVQsRUFBWTtBQUNYLFFBQUksMlRBQTJULElBQTNULENBQWdVLENBQWhVLEtBQXNVLDBrREFBMGtELElBQTFrRCxDQUEra0QsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBL2tELENBQTFVLEVBQTA2RDtBQUN4NkQsb0JBQWMsWUFBZDtBQUNEO0FBQ0YsR0FKRCxFQUlHLFVBQVUsU0FBVixJQUF1QixVQUFVLE1BQWpDLElBQTJDLE9BQU8sS0FKckQ7QUFLQSxTQUFPLFdBQVA7QUFDRCxDQVJEOztBQVVBOzs7Ozs7QUFNQSxNQUFNLGFBQU4sR0FBc0IsZUFBTztBQUMzQixTQUFPLE1BQU0sVUFBTixDQUFpQixJQUFJLE9BQUosQ0FBWSxhQUFaLEVBQTJCLEVBQTNCLENBQWpCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQSxNQUFNLFFBQU4sR0FBaUIsZUFBTztBQUN0QixTQUFPLElBQUksT0FBSixDQUFZLEtBQVosRUFBbUIsR0FBbkIsRUFBd0IsT0FBeEIsQ0FBZ0Msa0JBQWhDLEVBQW9ELEVBQXBELEVBQXdELFdBQXhELEVBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQSxNQUFNLFdBQU4sR0FBb0IsZUFBTztBQUN6QixTQUFPLElBQUksT0FBSixDQUFZLFNBQVosRUFBdUIsRUFBdkIsQ0FBUDtBQUNELENBRkQ7O2tCQUllLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wcm9taXNlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvcHJvbWlzZVwiKTtcblxudmFyIF9wcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb21pc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IF9wcm9taXNlMi5kZWZhdWx0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3Byb21pc2UyLmRlZmF1bHQucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59OyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPVxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXM7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZSgob3V0ZXJGbiB8fCBHZW5lcmF0b3IpLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID0gR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50YCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC4gU29tZSBtYXkgY29uc2lkZXIgdGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgdG9vXG4gIC8vIGN1dGVzeSwgYnV0IHRoZXkgYXJlIGN1cm11ZGdlb25zLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBBd2FpdEFyZ3VtZW50KGFyZyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gQXdhaXRBcmd1bWVudChhcmcpIHtcbiAgICB0aGlzLmFyZyA9IGFyZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuYXJnKS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcbiIsIi8qKlxuICogTWFpbiBtaTE4biBjbGFzcy5cbiAqL1xuY2xhc3MgSTE4TiB7XG4gIC8qKlxuICAgKiBQcm9jZXNzIG9wdGlvbnMgYW5kIHN0YXJ0IHRoZSBtb2R1bGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICBleHRlbnNpb246ICcubGFuZycsXG4gICAgICAgIC8vIGxvY2FsIG9yIHJlbW90ZSBkaXJlY3RvcnkgY29udGFpbmluZyBsYW5ndWFnZSBmaWxlc1xuICAgICAgICBsb2NhdGlvbjogJ2Fzc2V0cy9sYW5nLycsXG4gICAgICAgIC8vIGxpc3Qgb2YgYXZhaWxhYmxlIGxvY2FsZXMsIGhhbmR5IGZvciBwb3B1bGF0aW5nIHNlbGVjdG9yLlxuICAgICAgICBsYW5nczogW1xuICAgICAgICAgICdlbi1VUydcbiAgICAgICAgXSxcbiAgICAgICAgbG9jYWxlOiAnZW4tVVMnLCAvLyBpbml0IHdpdGggdXNlcidzIHByZWZlcnJlZCBsYW5ndWFnZVxuICAgICAgICBwcmVsb2FkZWQ6IHt9XG4gICAgICB9O1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGxhbmd1YWdlIGFuZCBzZXQgZGVmYXVsdFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgICByZXNvbHZlcyBsYW5ndWFnZVxuICAgICAqL1xuICAgIF90aGlzLmluaXQgPSBvcHRpb25zID0+IHtcbiAgICAgIF90aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIG9wdGlvbnMpO1xuXG4gICAgICBfdGhpcy5sYW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIF90aGlzLmNvbmZpZy5wcmVsb2FkZWQpO1xuICAgICAgX3RoaXMubG9jYWxlID0gX3RoaXMuY29uZmlnLmxvY2FsZSB8fCBfdGhpcy5jb25maWcubGFuZ3NbMF07XG5cbiAgICAgIHJldHVybiBfdGhpcy5zZXRDdXJyZW50KF90aGlzLmxvY2FsZSk7XG4gICAgfTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIGdldCBhIHN0cmluZyBmcm9tIGEgbG9hZGVkIGxhbmd1YWdlIGZpbGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgIC0gdGhlIGtleSBmb3IgdGhlIHN0cmluZyB3ZSBhcmUgdHJ5aW5nIHRvIHJldHJpZXZlXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAtIGNvcnJlY3QgbGFuZ3VhZ2Ugc3RyaW5nXG4gICAqL1xuICBnZXRWYWx1ZShrZXkpIHtcbiAgICByZXR1cm4gKHRoaXMuY3VycmVudCAmJiB0aGlzLmN1cnJlbnRba2V5XSkgfHwga2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIEVzY2FwZSB2YXJpYWJsZSBzeW50YXhcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgZXNjYXBlZCBzdHJcbiAgICovXG4gIG1ha2VTYWZlKHN0cikge1xuICAgIGNvbnN0IG1hcE9iaiA9IHtcbiAgICAgICd7JzogJ1xcXFx7JyxcbiAgICAgICd9JzogJ1xcXFx9JyxcbiAgICAgICd8JzogJ1xcXFx8J1xuICAgIH07XG5cbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFx7fFxcfXxcXHwvZywgbWF0Y2hlZCA9PiBtYXBPYmpbbWF0Y2hlZF0pO1xuXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoc3RyLCAnZycpO1xuICB9XG5cbiAgLyoqXG4gICogVGVtcG9yYXJpbHkgcHV0IGEgc3RyaW5nIGludG8gdGhlIGN1cnJlbnRseSBsb2FkZWQgbGFuZ3VhZ2VcbiAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleVxuICAqIEBwYXJhbSAge1N0cmluZ30gc3RyaW5nXG4gICogQHJldHVybiB7U3RyaW5nfSBzdHJpbmcgaW4gY3VycmVudCBsYW5ndWFnZVxuICAqL1xuICBwdXQoa2V5LCBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50W2tleV0gPSBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYXJndW1lbnRzIGZvciB0aGUgcmVxdWVzdGVkIHN0cmluZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSAgdGhlIGtleSB3ZSB1c2UgdG8gbG9va3VwIG91ciB0cmFuc2xhdGlvblxuICAgKiBAcGFyYW0gIHttdWx0aX0gIGFyZ3MgIHN0cmluZywgbnVtYmVyIG9yIG9iamVjdCBjb250YWluaW5nIG91ciBhcmd1bWVudHNcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIHVwZGF0ZWQgc3RyaW5nIHRyYW5zbGF0aW9uXG4gICAqL1xuICBnZXQoa2V5LCBhcmdzKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSk7XG4gICAgbGV0IHRva2VucyA9IHZhbHVlLm1hdGNoKC9cXHtbXlxcfV0rP1xcfS9nKTtcbiAgICBsZXQgdG9rZW47XG5cbiAgICBpZiAoYXJncyAmJiB0b2tlbnMpIHtcbiAgICAgIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGFyZ3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXS5zdWJzdHJpbmcoMSwgdG9rZW5zW2ldLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShfdGhpcy5tYWtlU2FmZSh0b2tlbnNbaV0pLCBhcmdzW3Rva2VuXSB8fCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFx7W15cXH1dKz9cXH0vZywgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gcmF3IHRleHQgZnJvbSB0aGUgbGFuZ3VhZ2UgZmlsZXMgaW50byBmYW5jeSBKU09OXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcmF3VGV4dFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbnZlcnRlZCBsYW5ndWFnZSBmaWxlXG4gICAqL1xuICBmcm9tRmlsZShyYXdUZXh0KSB7XG4gICAgY29uc3QgbGluZXMgPSByYXdUZXh0LnNwbGl0KCdcXG4nKTtcbiAgICBsZXQgbGFuZyA9IHt9O1xuXG4gICAgZm9yIChsZXQgbWF0Y2hlcywgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgbWF0Y2hlcyA9IGxpbmVzW2ldLm1hdGNoKC9eKC4rPykgKj89ICo/KFteXFxuXSspLyk7XG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICBsZXQgdmFsdWUgPSBtYXRjaGVzWzJdLnJlcGxhY2UoL15cXHMrfFxccyskLywgJycpO1xuICAgICAgICBsYW5nW21hdGNoZXNbMV1dID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhbmc7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGRvdWJsZSBjYXJyaWFnZSByZXR1cm5zXG4gICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICBwcm9jZXNzZWQgbGFuZ3VhZ2VcbiAgICovXG4gIHByb2Nlc3NGaWxlKHJlc3BvbnNlKSB7XG4gICAgbGV0IHJhd1RleHQgPSByZXNwb25zZS5yZXBsYWNlKC9cXG5cXG4vZywgJ1xcbicpO1xuICAgIHJldHVybiB0aGlzLmZyb21GaWxlKHJhd1RleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgYSByZW1vdGVseSBzdG9yZWQgbGFuZ3VhZ2UgZmlsZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGxvY2FsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICByZXNvbHZlcyByZXNwb25zZVxuICAgKi9cbiAgbG9hZExhbmcobG9jYWxlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKF90aGlzLmxhbmdzW2xvY2FsZV0pIHtcbiAgICAgICAgcmVzb2x2ZShfdGhpcy5sYW5nc1tsb2NhbGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgbGV0IGxhbmdGaWxlID0gX3RoaXMuY29uZmlnLmxvY2F0aW9uICsgbG9jYWxlICsgX3RoaXMuY29uZmlnLmV4dGVuc2lvbjtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGxhbmdGaWxlLCB0cnVlKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA8PSAzMDQpIHtcbiAgICAgICAgICAgIGxldCBwcm9jZXNzZWRGaWxlID0gX3RoaXMucHJvY2Vzc0ZpbGUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBfdGhpcy5sYW5nc1tsb2NhbGVdID0gcHJvY2Vzc2VkRmlsZTtcbiAgICAgICAgICAgIHJlc29sdmUocHJvY2Vzc2VkRmlsZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBjdXJyZW50bHkgYXZhaWxhYmxlIGxhbmd1YWdlc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IGFsbCBjb25maWd1cmVkIGxhbmd1YWdlc1xuICAgKi9cbiAgZ2V0IGdldExhbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5sYW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0IHRvIHNldCB0aGUgY3VycmVudCBsYW5ndWFnZSB0byB0aGUgbG9jYWwgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtTdHJpbmd9ICAgbG9jYWxlXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IGxhbmd1YWdlXG4gICAqL1xuICBhc3luYyBzZXRDdXJyZW50KGxvY2FsZSA9ICdlbi1VUycpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRMYW5nKGxvY2FsZSk7XG5cbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmxhbmdzW2xvY2FsZV07XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEkxOE4oKTtcbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wcm9taXNlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvcHJvbWlzZVwiKTtcblxudmFyIF9wcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb21pc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IF9wcm9taXNlMi5kZWZhdWx0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3Byb21pc2UyLmRlZmF1bHQucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBzdGVwKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcChcIm5leHRcIik7XG4gICAgfSk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7IiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07IiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGNyZWF0ZSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBhbkluc3RhbmNlICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBkZWZpbmVkICAgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIGZvck9mICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJylcbiAgLCBzdGVwICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgc2V0U3BlY2llcyAgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgZmFzdEtleSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleVxuICAsIFNJWkUgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmKGVudHJ5KXtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsICdmb3JFYWNoJyk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgZnJvbSAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWV0YSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGRQICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGVhY2ggICAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59OyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59OyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5JylcbiAgLCBnZXRJdGVyRm4gICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPVxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXM7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgIGludm9rZSA9IHByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIiB8fFxuICAgICAgICAgICAgICAobWV0aG9kID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBjb250cm9sUG9zaXRpb246ICdyaWdodCcsXG4gICAgICBjb250cm9sT3JkZXI6IFtcbiAgICAgICAgJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICdoaWRkZW4nLFxuICAgICAgICAncGFyYWdyYXBoJyxcbiAgICAgICAgJ251bWJlcicsXG4gICAgICAgICdyYWRpby1ncm91cCcsXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAndGV4dCcsXG4gICAgICAgICd0ZXh0YXJlYSdcbiAgICAgIF0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgLy8gQXJyYXkgb2YgZmllbGRzIHRvIGRpc2FibGVcbiAgICAgIGRpc2FibGVGaWVsZHM6IFtdLFxuICAgICAgZWRpdE9uQWRkOiBmYWxzZSxcbiAgICAgIC8vIFVuZWRpdGFibGUgZmllbGRzIG9yIG90aGVyIGNvbnRlbnQgeW91IHdvdWxkIGxpa2UgdG8gYXBwZWFyXG4gICAgICAvLyBiZWZvcmUgYW5kIGFmdGVyIHJlZ3VsYXIgZmllbGRzOlxuICAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAgIHByZXBlbmQ6IGZhbHNlLFxuICAgICAgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGZpZWxkcyB2YWx1ZXNcbiAgICAgIC8vIGV4OlxuICAgICAgLy8gZGVmYXVsdEZpZWxkczogW3tcbiAgICAgIC8vICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcbiAgICAgIC8vICAgbmFtZTogJ2ZpcnN0LW5hbWUnLFxuICAgICAgLy8gICByZXF1aXJlZDogJ3RydWUnLFxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ1lvdXIgZmlyc3QgbmFtZScsXG4gICAgICAvLyAgIHR5cGU6ICd0ZXh0J1xuICAgICAgLy8gfSwge1xuICAgICAgLy8gICBsYWJlbDogJ1Bob25lJyxcbiAgICAgIC8vICAgbmFtZTogJ3Bob25lJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdIb3cgY2FuIHdlIHJlYWNoIHlvdT8nLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH1dLFxuICAgICAgZGVmYXVsdEZpZWxkczogW10sXG4gICAgICBpbnB1dFNldHM6IFtdLFxuICAgICAgZmllbGRSZW1vdmVXYXJuOiBmYWxzZSxcbiAgICAgIHJvbGVzOiB7XG4gICAgICAgIDE6ICdBZG1pbmlzdHJhdG9yJ1xuICAgICAgfSxcbiAgICAgIG5vdGlmeToge1xuICAgICAgICBlcnJvcjogbWVzc2FnZSA9PiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpLFxuICAgICAgICBzdWNjZXNzOiBtZXNzYWdlID0+IGNvbnNvbGUubG9nKG1lc3NhZ2UpLFxuICAgICAgICB3YXJuaW5nOiBtZXNzYWdlID0+IGNvbnNvbGUud2FybihtZXNzYWdlKVxuICAgICAgfSxcbiAgICAgIG9uU2F2ZTogZm9ybURhdGEgPT4gbnVsbCxcbiAgICAgIG9uQ2xlYXJBbGw6ICgpID0+IG51bGwsXG4gICAgICBzb3J0YWJsZUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgIHN0aWNreUNvbnRyb2xzOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZpZWxkczogW10sXG4gICAgICB0ZW1wbGF0ZXM6IHt9LFxuICAgICAgZGlzYWJsZWRBY3Rpb25CdXR0b25zOiBbXSxcbiAgICAgIHNob3dBY3Rpb25CdXR0b25zOiB0cnVlLFxuICAgICAgdHlwZVVzZXJBdHRyczoge30sXG4gICAgICB0eXBlVXNlckV2ZW50czoge30sXG4gICAgICBwcmVmaXg6ICdmb3JtLWJ1aWxkZXItJ1xuICAgIH07XG5cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJMThuID0ge1xuICAgICAgbG9jYXRpb246ICdodHRwczovL2tldmluY2hhcHBlbGwuZ2l0aHViLmlvL2Zvcm1CdWlsZGVyL2Fzc2V0cy9sYW5nLycsXG4gICAgICBsYW5nczogW1xuICAgICAgICAnZW4tVVMnXG4gICAgICBdLFxuICAgICAgcHJlbG9hZGVkOiB7XG4gICAgICAgICdlbi1VUyc6IHtcbiAgICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICAgIGFsbEZpZWxkc1JlbW92ZWQ6ICdBbGwgZmllbGRzIHdlcmUgcmVtb3ZlZC4nLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVGaWxlczogJ0FsbG93IHVzZXJzIHRvIHVwbG9hZCBtdWx0aXBsZSBmaWxlcycsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBidXR0b246ICdCdXR0b24nLFxuICAgICAgICAgIGNhbm5vdEJlRW1wdHk6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcbiAgICAgICAgICBjaGVja2JveGVzOiAnQ2hlY2tib3hlcycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXG4gICAgICAgICAgY2xlYXI6ICdDbGVhcicsXG4gICAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxuICAgICAgICAgIGNvcHk6ICdDb3B5IFRvIENsaXBib2FyZCcsXG4gICAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxuICAgICAgICAgIGRhdGVGaWVsZDogJ0RhdGUgRmllbGQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgIGRldk1vZGU6ICdEZXZlbG9wZXIgTW9kZScsXG4gICAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcbiAgICAgICAgICBlZGl0WE1MOiAnRWRpdCBYTUwnLFxuICAgICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxuICAgICAgICAgIGZpZWxkRGVsZXRlV2FybmluZzogZmFsc2UsXG4gICAgICAgICAgZmllbGRWYXJzOiAnRmllbGQgVmFyaWFibGVzJyxcbiAgICAgICAgICBmaWVsZE5vbkVkaXRhYmxlOiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZWRpdGVkLicsXG4gICAgICAgICAgZmllbGRSZW1vdmVXYXJuaW5nOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGZpZWxkPycsXG4gICAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgICBmb3JtVXBkYXRlZDogJ0Zvcm0gVXBkYXRlZCcsXG4gICAgICAgICAgZ2V0U3RhcnRlZDogJ0RyYWcgYSBmaWVsZCBmcm9tIHRoZSByaWdodCB0byB0aGlzIGFyZWEnLFxuICAgICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgICAgaGlkZTogJ0VkaXQnLFxuICAgICAgICAgIGhpZGRlbjogJ0hpZGRlbiBJbnB1dCcsXG4gICAgICAgICAgaW5saW5lOiAnSW5saW5lJyxcbiAgICAgICAgICBpbmxpbmVEZXNjOiAnRGlzcGxheSB7dHlwZX0gaW5saW5lJyxcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICBsYWJlbEVtcHR5OiAnRmllbGQgTGFiZWwgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgICBsaW1pdFJvbGU6ICdMaW1pdCBhY2Nlc3MgdG8gb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyByb2xlczonLFxuICAgICAgICAgIG1hbmRhdG9yeTogJ01hbmRhdG9yeScsXG4gICAgICAgICAgbWF4bGVuZ3RoOiAnTWF4IExlbmd0aCcsXG4gICAgICAgICAgbWluT3B0aW9uTWVzc2FnZTogJ1RoaXMgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mIDIgb3B0aW9ucycsXG4gICAgICAgICAgbXVsdGlwbGVGaWxlczogJ011bHRpcGxlIEZpbGVzJyxcbiAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgbm86ICdObycsXG4gICAgICAgICAgbm9GaWVsZHNUb0NsZWFyOiAnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsXG4gICAgICAgICAgbnVtYmVyOiAnTnVtYmVyJyxcbiAgICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICAgIG9uOiAnT24nLFxuICAgICAgICAgIG9wdGlvbjogJ09wdGlvbicsXG4gICAgICAgICAgb3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgICAgb3B0aW9uVmFsdWVQbGFjZWhvbGRlcjogJ1ZhbHVlJyxcbiAgICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgICAgcGFyYWdyYXBoOiAnUGFyYWdyYXBoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIudmFsdWUnOiAnVmFsdWUnLFxuICAgICAgICAgICdwbGFjZWhvbGRlci5sYWJlbCc6ICdMYWJlbCcsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLnRleHQnOiAnJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIudGV4dGFyZWEnOiAnJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIuZW1haWwnOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIucGxhY2Vob2xkZXInOiAnJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIuY2xhc3NOYW1lJzogJ3NwYWNlIHNlcGFyYXRlZCBjbGFzc2VzJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIucGFzc3dvcmQnOiAnRW50ZXIgeW91ciBwYXNzd29yZCcsXG4gICAgICAgICAgcHJldmlldzogJ1ByZXZpZXcnLFxuICAgICAgICAgIHJhZGlvR3JvdXA6ICdSYWRpbyBHcm91cCcsXG4gICAgICAgICAgcmFkaW86ICdSYWRpbycsXG4gICAgICAgICAgcmVtb3ZlTWVzc2FnZTogJ1JlbW92ZSBFbGVtZW50JyxcbiAgICAgICAgICByZW1vdmVPcHRpb246ICdSZW1vdmUgT3B0aW9uJyxcbiAgICAgICAgICByZW1vdmU6ICcmIzIxNTsnLFxuICAgICAgICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQnLFxuICAgICAgICAgIHJpY2hUZXh0OiAnUmljaCBUZXh0IEVkaXRvcicsXG4gICAgICAgICAgcm9sZXM6ICdBY2Nlc3MnLFxuICAgICAgICAgIHJvd3M6ICdSb3dzJyxcbiAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgc2VsZWN0T3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICAgIHNlbGVjdDogJ1NlbGVjdCcsXG4gICAgICAgICAgc2VsZWN0Q29sb3I6ICdTZWxlY3QgQ29sb3InLFxuICAgICAgICAgIHNlbGVjdGlvbnNNZXNzYWdlOiAnQWxsb3cgTXVsdGlwbGUgU2VsZWN0aW9ucycsXG4gICAgICAgICAgc2l6ZTogJ1NpemUnLFxuICAgICAgICAgICdzaXplLnhzJzogJ0V4dHJhIFNtYWxsJyxcbiAgICAgICAgICAnc2l6ZS5zbSc6ICdTbWFsbCcsXG4gICAgICAgICAgJ3NpemUubSc6ICdEZWZhdWx0JyxcbiAgICAgICAgICAnc2l6ZS5sZyc6ICdMYXJnZScsXG4gICAgICAgICAgc3R5bGU6ICdTdHlsZScsXG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICBidG46IHtcbiAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnRGVmYXVsdCcsXG4gICAgICAgICAgICAgIGRhbmdlcjogJ0RhbmdlcicsXG4gICAgICAgICAgICAgIGluZm86ICdJbmZvJyxcbiAgICAgICAgICAgICAgcHJpbWFyeTogJ1ByaW1hcnknLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAnU3VjY2VzcycsXG4gICAgICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VidHlwZTogJ1R5cGUnLFxuICAgICAgICAgIHRleHQ6ICdUZXh0IEZpZWxkJyxcbiAgICAgICAgICB0ZXh0QXJlYTogJ1RleHQgQXJlYScsXG4gICAgICAgICAgdG9nZ2xlOiAnVG9nZ2xlJyxcbiAgICAgICAgICB3YXJuaW5nOiAnV2FybmluZyEnLFxuICAgICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICAgIHZpZXdKU09OOiAneyAgfScsXG4gICAgICAgICAgdmlld1hNTDogJyZsdDsvJmd0OycsXG4gICAgICAgICAgeWVzOiAnWWVzJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHt9O1xuIiwiZXhwb3J0IGNvbnN0IGluc3RhbmNlRGF0YSA9IHt9O1xuXG5leHBvcnQgY2xhc3MgRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGZvcm1JRCkge1xuICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcbiAgICB0aGlzLmZvcm1JRCA9IGZvcm1JRDtcbiAgICB0aGlzLmxheW91dCA9ICcnO1xuICAgIGluc3RhbmNlRGF0YVtmb3JtSURdID0gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlZmllbGRzID0ge307XG4iLCJcbmV4cG9ydCBjb25zdCBpbnN0YW5jZURvbSA9IHt9O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdWJ0eXBlcyA9IHtcbiAgICAgIHRleHQ6IFsndGV4dCcsICdwYXNzd29yZCcsICdlbWFpbCcsICdjb2xvcicsICd0ZWwnXSxcbiAgICAgIGhlYWRlcjogWydoMScsICdoMicsICdoMyddLFxuICAgICAgYnV0dG9uOiBbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgICAgIHBhcmFncmFwaDogWydwJywgJ2FkZHJlc3MnLCAnYmxvY2txdW90ZScsICdjYW52YXMnLCAnb3V0cHV0J10sXG4gICAgICB0ZXh0YXJlYTogWyd0ZXh0YXJlYScsICdxdWlsbCddXG4gICAgfTtcblxuXG5leHBvcnQgY29uc3QgZW1wdHkgPSBlbGVtZW50ID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSAoZWxlbXMsIHRlcm0sIHNob3cgPSB0cnVlKSA9PiB7XG4gIGxldCBmaWx0ZXJlZEVsZW1zID0gW107XG4gIGxldCB0b2dnbGUgPSBbJ25vbmUnLCAnYmxvY2snXTtcblxuICBpZiAoc2hvdykge1xuICAgIHRvZ2dsZSA9IHRvZ2dsZS5yZXZlcnNlKCk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gZWxlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgdHh0ID0gZWxlbXNbaV0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodHh0LmluZGV4T2YodGVybS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSB0b2dnbGVbMF07XG4gICAgICBmaWx0ZXJlZEVsZW1zLnB1c2goZWxlbXNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gdG9nZ2xlWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1zO1xufTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbkZpZWxkcyA9IFtcbiAgICAgICdzZWxlY3QnLFxuICAgICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICdjaGVja2JveCcsXG4gICAgICAncmFkaW8tZ3JvdXAnLFxuICAgICAgJ2F1dG9jb21wbGV0ZSdcbiAgICBdO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uRmllbGRzUmVnRXggPSBuZXcgUmVnRXhwKGAoJHtvcHRpb25GaWVsZHMuam9pbignfCcpfSlgKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbSB7XG4gIGNvbnN0cnVjdG9yKGZvcm1JRCkge1xuICAgIHRoaXMub3B0aW9uRmllbGRzID0gb3B0aW9uRmllbGRzO1xuICAgIHRoaXMub3B0aW9uRmllbGRzUmVnRXggPSBvcHRpb25GaWVsZHNSZWdFeDtcblxuICAgIHRoaXMuc3VidHlwZXMgPSBkZWZhdWx0U3VidHlwZXM7XG5cbiAgICAvKipcbiAgICAgKiBVdGlsIHRvIHJlbW92ZSBjb250ZW50cyBvZiBET00gT2JqZWN0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XG4gICAgICogQHJldHVybiB7T2JqZWN0fSBlbGVtZW50IHdpdGggaXRzIGNoaWxkcmVuIHJlbW92ZWRcbiAgICAgKi9cbiAgICB0aGlzLmVtcHR5ID0gZW1wdHk7XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIHNob3cgYW4gQXJyYXkgb3IgSFRNTENvbGxlY3Rpb24gb2YgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gICBlbGVtc1xuICAgICAqIEBwYXJhbSAge1N0cmluZ30gIHRlcm0gIG1hdGNoIHRleHRDb250ZW50IHRvIHRoaXMgdGVybVxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IHNob3cgIG9yIGhpZGUgZWxlbWVudHNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICBmaWx0ZXJlZCBlbGVtZW50c1xuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gZmlsdGVyO1xuXG4gICAgaW5zdGFuY2VEb21bZm9ybUlEXSA9IHRoaXM7XG4gICAgcmV0dXJuIGluc3RhbmNlRG9tW2Zvcm1JRF07XG4gIH1cbn1cbiIsIi8qKlxuICogRm9ybSBCdWlsZGVyIGV2ZW50c1xuICogQHJldHVybiB7T2JqZWN0fSB2YXJpb3VzIGV2ZW50cyB0byBiZSB0cmlnZ2VyXG4gKi9cbi8vIGZ1bmN0aW9uIGZiRXZlbnRzKCl7XG4gIGNvbnN0IGV2ZW50cyA9IHt9O1xuXG4gIGV2ZW50cy5sb2FkZWQgPSBuZXcgRXZlbnQoJ2xvYWRlZCcpO1xuICBldmVudHMudmlld0RhdGEgPSBuZXcgRXZlbnQoJ3ZpZXdEYXRhJyk7XG4gIGV2ZW50cy51c2VyRGVjbGluZWQgPSBuZXcgRXZlbnQoJ3VzZXJEZWNsaW5lZCcpO1xuICBldmVudHMubW9kYWxDbG9zZWQgPSBuZXcgRXZlbnQoJ21vZGFsQ2xvc2VkJyk7XG4gIGV2ZW50cy5tb2RhbE9wZW5lZCA9IG5ldyBFdmVudCgnbW9kYWxPcGVuZWQnKTtcbiAgZXZlbnRzLmZvcm1TYXZlZCA9IG5ldyBFdmVudCgnZm9ybVNhdmVkJyk7XG4gIGV2ZW50cy5maWVsZEFkZGVkID0gbmV3IEV2ZW50KCdmaWVsZEFkZGVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbW92ZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVtb3ZlZCcpO1xuICBldmVudHMuZmllbGRSZW5kZXJlZCA9IG5ldyBFdmVudCgnZmllbGRSZW5kZXJlZCcpO1xuXG4vLyAgIHJldHVybiBldmVudHM7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcbiIsImltcG9ydCBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHtcbiAgRGF0YSxcbiAgYXZhaWxhYmxlZmllbGRzIGFzIGFGaWVsZHNcbn0gZnJvbSAnLi9kYXRhJztcbi8vIGltcG9ydCBtaTE4biBmcm9tICdtaTE4bic7XG5pbXBvcnQgbWkxOG4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vRHJhZ2dhYmxlL21JMThOL21pMThuL3NyYy9taTE4bi5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge2RlZmF1bHRPcHRpb25zLCBkZWZhdWx0STE4biwgY29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5cbnJlcXVpcmUoJy4vcG9seWZpbGxzLmpzJykuZGVmYXVsdDtcblxubGV0IGluc3RhbmNlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG5jb25zdCBGb3JtQnVpbGRlciA9IGZ1bmN0aW9uKG9wdHMsIGVsZW1lbnQpIHtcbiAgY29uc3QgZm9ybUJ1aWxkZXIgPSB0aGlzO1xuICBjb25zdCBpMThuID0gbWkxOG4uY3VycmVudDtcbiAgY29uc3QgZm9ybUlEID0gJ2ZybWItJyArIGluc3RhbmNlVGltZSsrO1xuICBjb25zdCBkYXRhID0gbmV3IERhdGEoZm9ybUlEKTtcbiAgY29uc3QgZCA9IG5ldyBEb20oZm9ybUlEKTtcbiAgY29uc3QgaGVscGVycyA9IG5ldyBIZWxwZXJzKGZvcm1JRCk7XG4gIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG5cbiAgY29uc3Qgb3JpZ2luYWxPcHRzID0gb3B0cztcblxuICBvcHRzID0gaGVscGVycy5wcm9jZXNzT3B0aW9ucyhvcHRzKTtcblxuICBjb25zdCBzdWJ0eXBlcyA9IGNvbmZpZy5zdWJ0eXBlcyA9IGhlbHBlcnMucHJvY2Vzc1N1YnR5cGVzKG9wdHMuc3VidHlwZXMpO1xuICBoZWxwZXJzLmVkaXRvclVJKGZvcm1JRCk7XG5cbiAgbGV0ICRzdGFnZSA9ICQoZC5zdGFnZSk7XG5cbiAgZGF0YS5sYXlvdXQgPSBoZWxwZXJzLmVkaXRvckxheW91dChvcHRzLmNvbnRyb2xQb3NpdGlvbik7XG4gIGRhdGEuZm9ybUlEID0gZm9ybUlEO1xuICBkYXRhLmxhc3RJRCA9IGAke2RhdGEuZm9ybUlEfS1mbGQtMWA7XG5cbiAgbGV0IGZybWJGaWVsZHMgPSBoZWxwZXJzLm9yZGVyRmllbGRzKG9wdHMuZmllbGRzKTtcblxuICBpZiAob3B0cy5kaXNhYmxlRmllbGRzKSB7XG4gICAgLy8gcmVtb3ZlIGRpc2FibGVkRmllbGRzXG4gICAgZnJtYkZpZWxkcyA9IGZybWJGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkoZmllbGQuYXR0cnMudHlwZSwgb3B0cy5kaXNhYmxlRmllbGRzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChvcHRzLnNvcnRhYmxlQ29udHJvbHMpIHtcbiAgICBkLmNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZW5hYmxlZCcpO1xuICB9XG5cbiAgbGV0ICRjYlVMID0gJChkLmNvbnRyb2xzKTtcblxuICAvLyBMb29wIHRocm91Z2ggZm1yYkZpZWxkc1xuICB1dGlscy5mb3JFYWNoKGZybWJGaWVsZHMsIChpKSA9PiB7XG4gICAgbGV0IHthdHRycywgLi4uZmllbGR9ID0gZnJtYkZpZWxkc1tpXTtcbiAgICBsZXQgaWNvbiA9IGF0dHJzLmljb24gfHwgYGljb24tJHthdHRycy5uYW1lIHx8IGF0dHJzLnR5cGV9YDtcbiAgICBsZXQgbmV3RmllbGRDb250cm9sID0gbSgnbGknLFxuICAgICAgbSgnc3BhbicsIGZpZWxkLmxhYmVsKSxcbiAgICAgIHtjbGFzc05hbWU6IGAke2ljb259IGlucHV0LWNvbnRyb2wgaW5wdXQtY29udHJvbC0ke2l9YH1cbiAgICApO1xuXG4gICAgYUZpZWxkc1thdHRycy50eXBlXSA9IGZybWJGaWVsZHNbaV07XG4gICAgbmV3RmllbGRDb250cm9sLmRhdGFzZXQudHlwZSA9IGF0dHJzLnR5cGU7XG4gICAgZC5jb250cm9scy5hcHBlbmRDaGlsZChuZXdGaWVsZENvbnRyb2wpO1xuICB9KTtcblxuICBpZiAob3B0cy5pbnB1dFNldHMubGVuZ3RoKSB7XG4gICAgJCgnPGxpLz4nLCB7J2NsYXNzJzogJ2ZiLXNlcGFyYXRvcid9KS5odG1sKCc8aHI+JykuYXBwZW5kVG8oJGNiVUwpO1xuICAgIG9wdHMuaW5wdXRTZXRzLmZvckVhY2goKHNldCwgaSkgPT4ge1xuICAgICAgc2V0Lm5hbWUgPSBzZXQubmFtZSB8fCBoZWxwZXJzLm1ha2VDbGFzc05hbWUoc2V0LmxhYmVsKTtcbiAgICAgIGxldCBpbnB1dFNldCA9IG0oJ2xpJywgc2V0LmxhYmVsLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYGlucHV0LXNldC1jb250cm9sIGlucHV0LXNldC0ke2l9YCxcbiAgICAgICAgdHlwZTogc2V0Lm5hbWVcbiAgICAgIH0pO1xuICAgICAgJChpbnB1dFNldCkuYXBwZW5kVG8oJGNiVUwpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU29ydGFibGUgZmllbGRzXG4gICRzdGFnZS5zb3J0YWJsZSh7XG4gICAgY3Vyc29yOiAnbW92ZScsXG4gICAgb3BhY2l0eTogMC45LFxuICAgIHJldmVydDogMTUwLFxuICAgIGJlZm9yZVN0b3A6IChldnQsIHVpKSA9PiBoZWxwZXJzLmJlZm9yZVN0b3AuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcbiAgICBzdGFydDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RhcnRNb3ZpbmcuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcbiAgICBzdG9wOiAoZXZ0LCB1aSkgPT4gaGVscGVycy5zdG9wTW92aW5nLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgY2FuY2VsOiAnaW5wdXQsIHNlbGVjdCwgLmRpc2FibGVkLWZpZWxkLCAuZm9ybS1ncm91cCwgLmJ0bicsXG4gICAgcGxhY2Vob2xkZXI6ICdmcm1iLXBsYWNlaG9sZGVyJyxcbiAgfSk7XG5cbiAgLy8gQ29udHJvbEJveCB3aXRoIGRpZmZlcmVudCBmaWVsZHNcbiAgJGNiVUwuc29ydGFibGUoe1xuICAgIGhlbHBlcjogJ2Nsb25lJyxcbiAgICBvcGFjaXR5OiAwLjksXG4gICAgY29ubmVjdFdpdGg6ICRzdGFnZSxcbiAgICBjYW5jZWw6ICcuZmItc2VwYXJhdG9yJyxcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBzY3JvbGw6IGZhbHNlLFxuICAgIHBsYWNlaG9sZGVyOiAndWktc3RhdGUtaGlnaGxpZ2h0JyxcbiAgICBzdGFydDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RhcnRNb3ZpbmcuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcbiAgICBzdG9wOiAoZXZ0LCB1aSkgPT4gaGVscGVycy5zdG9wTW92aW5nLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgcmV2ZXJ0OiAxNTAsXG4gICAgYmVmb3JlU3RvcDogKGV2dCwgdWkpID0+IGhlbHBlcnMuYmVmb3JlU3RvcC5jYWxsKGhlbHBlcnMsIGV2dCwgdWkpLFxuICAgIGRpc3RhbmNlOiAzLFxuICAgIHVwZGF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICBpZiAoaGVscGVycy5kb0NhbmNlbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh1aS5pdGVtLnBhcmVudCgpWzBdID09PSBkLnN0YWdlKSB7XG4gICAgICAgIGhlbHBlcnMuZG9DYW5jZWwgPSB0cnVlO1xuICAgICAgICBwcm9jZXNzQ29udHJvbCh1aS5pdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlbHBlcnMuc2V0RmllbGRPcmRlcigkY2JVTCk7XG4gICAgICAgIGhlbHBlcnMuZG9DYW5jZWwgPSAhb3B0cy5zb3J0YWJsZUNvbnRyb2xzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHByb2Nlc3NDb250cm9sID0gY29udHJvbCA9PiB7XG4gICAgaWYgKGNvbnRyb2xbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1zZXQtY29udHJvbCcpKSB7XG4gICAgICBsZXQgaW5wdXRTZXRzID0gW107XG4gICAgICBsZXQgaW5wdXRTZXQgPSBvcHRzLmlucHV0U2V0cy5maWx0ZXIoc2V0ID0+XG4gICAgICAgIHNldC5uYW1lID09PSBjb250cm9sWzBdLnR5cGUpWzBdO1xuICAgICAgaWYgKGlucHV0U2V0LnNob3dIZWFkZXIpIHtcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICAgICAgc3VidHlwZTogJ2gyJyxcbiAgICAgICAgICAgIGlkOiBpbnB1dFNldC5uYW1lLFxuICAgICAgICAgICAgbGFiZWw6IGlucHV0U2V0LmxhYmVsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbnB1dFNldHMucHVzaChoZWFkZXIpO1xuICAgICAgfVxuICAgICAgaW5wdXRTZXRzLnB1c2goLi4uaW5wdXRTZXQuZmllbGRzKTtcbiAgICAgIGlucHV0U2V0cy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCwgdHJ1ZSk7XG4gICAgICAgIGlmIChoZWxwZXJzLnN0b3BJbmRleCB8fCBoZWxwZXJzLnN0b3BJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGhlbHBlcnMuc3RvcEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVwRmllbGRWYXJzKGNvbnRyb2wsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBkLmVkaXRvcldyYXAgPSBtKCdkaXYnLCBudWxsLCB7XG4gICAgaWQ6IGAke2RhdGEuZm9ybUlEfS1mb3JtLXdyYXBgLFxuICAgIGNsYXNzTmFtZTogJ2Zvcm0td3JhcCBmb3JtLWJ1aWxkZXInICsgdXRpbHMubW9iaWxlQ2xhc3MoKVxuICB9KTtcblxuICBsZXQgJGVkaXRvcldyYXAgPSAkKGQuZWRpdG9yV3JhcCk7XG5cbiAgbGV0IGNiV3JhcCA9IG0oJ2RpdicsIGQuY29udHJvbHMsIHtcbiAgICBpZDogYCR7ZGF0YS5mb3JtSUR9LWNiLXdyYXBgLFxuICAgIGNsYXNzTmFtZTogJ2NiLXdyYXAgJyArIGRhdGEubGF5b3V0LmNvbnRyb2xzXG4gIH0pO1xuXG4gIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IG9wdHMuYWN0aW9uQnV0dG9ucy5tYXAoYnRuRGF0YSA9PiB7XG4gICAgICBpZiAoYnRuRGF0YS5pZCAmJiBvcHRzLmRpc2FibGVkQWN0aW9uQnV0dG9ucy5pbmRleE9mKGJ0bkRhdGEuaWQpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gaGVscGVycy5wcm9jZXNzQWN0aW9uQnV0dG9ucyhidG5EYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBmb3JtQWN0aW9ucyA9IGQuZm9ybUFjdGlvbnMgPSBtKCdkaXYnLCBidXR0b25zLCB7XG4gICAgICBjbGFzc05hbWU6ICdmb3JtLWFjdGlvbnMgYnRuLWdyb3VwJ1xuICAgIH0pO1xuXG4gICAgY2JXcmFwLmFwcGVuZENoaWxkKGZvcm1BY3Rpb25zKTtcbiAgfVxuXG4gIGxldCBzdGFnZVdyYXAgPSBtKCdkaXYnLCBbZC5zdGFnZSwgY2JXcmFwXSwge1xuICAgIGlkOiBgJHtkYXRhLmZvcm1JRH0tc3RhZ2Utd3JhcGAsXG4gICAgY2xhc3NOYW1lOiAnc3RhZ2Utd3JhcCAnICsgZGF0YS5sYXlvdXQuc3RhZ2VcbiAgfSk7XG5cbiAgJGVkaXRvcldyYXAuYXBwZW5kKHN0YWdlV3JhcCwgY2JXcmFwKTtcblxuICBpZiAoZWxlbWVudC50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgJChlbGVtZW50KS5hcHBlbmQoJGVkaXRvcldyYXApO1xuICB9IGVsc2Uge1xuICAgICQoZWxlbWVudCkucmVwbGFjZVdpdGgoJGVkaXRvcldyYXApO1xuICB9XG5cbiAgbGV0IHNhdmVBbmRVcGRhdGUgPSB1dGlscy5kZWJvdW5jZShldnQgPT4ge1xuICAgIGlmIChldnQpIHtcbiAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldnQudGFyZ2V0Lm5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGV0ICRmaWVsZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICAgIGhlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xuICAgICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTYXZlIGZpZWxkIG9uIGNoYW5nZVxuICAkc3RhZ2Uub24oJ2NoYW5nZSBibHVyIGtleXVwJywgJy5mb3JtLWVsZW1lbnRzIGlucHV0LCAuZm9ybS1lbGVtZW50cyBzZWxlY3QsIC5mb3JtLWVsZW1lbnRzIHRleHRhcmVhJywgc2F2ZUFuZFVwZGF0ZSk7XG5cbiAgJCgnbGknLCBkLmNvbnRyb2xzKS5jbGljayhldnQgPT4ge1xuICAgIGxldCAkY29udHJvbCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLmlucHV0LWNvbnRyb2wnKTtcbiAgICBoZWxwZXJzLnN0b3BJbmRleCA9IHVuZGVmaW5lZDtcbiAgICBwcm9jZXNzQ29udHJvbCgkY29udHJvbCk7XG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gIH0pO1xuXG4gIC8vIEFkZCBhcHBlbmQgYW5kIHByZXBlbmQgb3B0aW9ucyBpZiBuZWNlc3NhcnlcbiAgbGV0IG5vbkVkaXRhYmxlRmllbGRzID0gKCkgPT4ge1xuICAgIGxldCBjYW5jZWxBcnJheSA9IFtdO1xuICAgIGNvbnN0IGRpc2FibGVkRmllbGQgPSB0eXBlID0+XG4gICAgdXRpbHMubWFya3VwKCdsaScsIG9wdHNbdHlwZV0sIHtcbiAgICAgIGNsYXNzTmFtZTogYGRpc2FibGVkLWZpZWxkIGZvcm0tJHt0eXBlfWBcbiAgICB9KTtcblxuICAgIGlmIChvcHRzLnByZXBlbmQgJiYgISQoJy5kaXNhYmxlZC1maWVsZC5mb3JtLXByZXBlbmQnLCBkLnN0YWdlKS5sZW5ndGgpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAkc3RhZ2UucHJlcGVuZChkaXNhYmxlZEZpZWxkKCdwcmVwZW5kJykpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCAmJiAhJCgnLmRpc2FibGVkLWZpZWxkLmZvcm0tLmFwcGVuZCcsIGQuc3RhZ2UpLmxlbmd0aCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICRzdGFnZS5hcHBlbmQoZGlzYWJsZWRGaWVsZCgnYXBwZW5kJykpO1xuICAgIH1cblxuICAgIGhlbHBlcnMuZGlzYWJsZWRUVChkLnN0YWdlKTtcbiAgICByZXR1cm4gY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xuICB9O1xuXG4gIGxldCBwcmVwRmllbGRWYXJzID0gZnVuY3Rpb24oJGZpZWxkLCBpc05ldyA9IGZhbHNlKSB7XG4gICAgbGV0IGZpZWxkID0ge307XG4gICAgaWYgKCRmaWVsZCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgbGV0IGZpZWxkRGF0YSA9IGFGaWVsZHNbJGZpZWxkWzBdLmRhdGFzZXQudHlwZV07XG4gICAgICBpZiAoZmllbGREYXRhKSB7XG4gICAgICAgIGZpZWxkID0gZmllbGREYXRhLmF0dHJzO1xuICAgICAgICBmaWVsZC5sYWJlbCA9IGZpZWxkRGF0YS5sYWJlbDtcbiAgICAgIH0gZWxzZSB7IC8vIGlzIGRhdGFUeXBlIFhNTFxuICAgICAgICBsZXQgYXR0cnMgPSAkZmllbGRbMF0uYXR0cmlidXRlcztcbiAgICAgICAgaWYgKCFpc05ldykge1xuICAgICAgICAgIGZpZWxkLnZhbHVlcyA9ICRmaWVsZC5jaGlsZHJlbigpLm1hcCgoaW5kZXgsIGVsZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsOiAkKGVsZW0pLnRleHQoKSxcbiAgICAgICAgICAgICAgdmFsdWU6ICQoZWxlbSkuYXR0cigndmFsdWUnKSxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IEJvb2xlYW4oJChlbGVtKS5hdHRyKCdzZWxlY3RlZCcpKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGZpZWxkW2F0dHJzW2ldLm5hbWVdID0gYXR0cnNbaV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQgPSBPYmplY3QuYXNzaWduKHt9LCAkZmllbGQpO1xuICAgIH1cblxuICAgIGlmICghZmllbGQubmFtZSkge1xuICAgICAgZmllbGQubmFtZSA9IHV0aWxzLm5hbWVBdHRyKGZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOZXcgJiYgdXRpbHMuaW5BcnJheShmaWVsZC50eXBlLFxuICAgICAgWyd0ZXh0JyxcbiAgICAgICAnbnVtYmVyJyxcbiAgICAgICAnZmlsZScsXG4gICAgICAgJ2RhdGUnLFxuICAgICAgICdzZWxlY3QnLFxuICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgJ2F1dG9jb21wbGV0ZSddKSkge1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gZmllbGQuY2xhc3NOYW1lIHx8ICdmb3JtLWNvbnRyb2wnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBmaWVsZC5jbGFzc05hbWU7XG4gICAgfVxuXG4gICAgbGV0IG1hdGNoID0gLyg/Ol58XFxzKWJ0bi0oLio/KSg/Olxcc3wkKS9nLmV4ZWMoZmllbGQuY2xhc3NOYW1lKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGZpZWxkLnN0eWxlID0gbWF0Y2hbMV07XG4gICAgfVxuXG4gICAgdXRpbHMuZXNjYXBlQXR0cnMoZmllbGQpO1xuXG4gICAgYXBwZW5kTmV3RmllbGQoZmllbGQsIGlzTmV3KTtcblxuICAgIGlmIChpc05ldykge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMuZmllbGRBZGRlZCk7XG4gICAgfVxuXG4gICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gIH07XG5cbiAgLy8gUGFyc2Ugc2F2ZWQgWE1MIHRlbXBsYXRlIGRhdGFcbiAgbGV0IGxvYWRGaWVsZHMgPSBmdW5jdGlvbihmb3JtRGF0YSkge1xuICAgIGZvcm1EYXRhID0gaGVscGVycy5nZXREYXRhKGZvcm1EYXRhKTtcbiAgICBpZiAoZm9ybURhdGEgJiYgZm9ybURhdGEubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByZXBGaWVsZFZhcnMoZm9ybURhdGFbaV0pO1xuICAgICAgfVxuICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgfSBlbHNlIGlmIChvcHRzLmRlZmF1bHRGaWVsZHMgJiYgb3B0cy5kZWZhdWx0RmllbGRzLmxlbmd0aCkge1xuICAgICAgLy8gTG9hZCBkZWZhdWx0IGZpZWxkcyBpZiBub25lIGFyZSBzZXRcbiAgICAgIG9wdHMuZGVmYXVsdEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHByZXBGaWVsZFZhcnMoZmllbGQpKTtcbiAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgIH0gZWxzZSBpZiAoIW9wdHMucHJlcGVuZCAmJiAhb3B0cy5hcHBlbmQpIHtcbiAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgc3RhZ2VXcmFwLmRhdGFzZXQuY29udGVudCA9IGkxOG4uZ2V0U3RhcnRlZDtcbiAgICB9XG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG5cbiAgICBpZiAobm9uRWRpdGFibGVGaWVsZHMoKSkge1xuICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgZGF0YSBmb3IgZmllbGQgd2l0aCBvcHRpb25zIFtzZWxlY3QsIGNoZWNrYm94LWdyb3VwLCByYWRpby1ncm91cF1cbiAgICpcbiAgICogQHRvZG8gICByZWZhY3RvciB0aGlzIG5hc3R5IH5jcmFwfiBjb2RlLCBpdHMgYWN0dWFsbHkgcGFpbmZ1bCB0byBsb29rIGF0XG4gICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAqIEByZXR1cm4ge1N0cmluZ30gZmllbGQgb3B0aW9ucyBtYXJrdXBcbiAgICovXG4gIGxldCBmaWVsZE9wdGlvbnMgPSBmdW5jdGlvbihmaWVsZERhdGEpIHtcbiAgICBsZXQgb3B0aW9uQWN0aW9ucyA9IFtcbiAgICAgICAgdXRpbHMubWFya3VwKCdhJywgaTE4bi5hZGRPcHRpb24sIHtjbGFzc05hbWU6ICdhZGQgYWRkLW9wdCd9KVxuICAgICAgXTtcbiAgICBsZXQgZmllbGRPcHRpb25zID0gW1xuICAgICAgYDxsYWJlbCBjbGFzcz1cImZhbHNlLWxhYmVsXCI+JHtpMThuLnNlbGVjdE9wdGlvbnN9PC9sYWJlbD5gXG4gICAgXTtcbiAgICBjb25zdCBpc011bHRpcGxlID0gZmllbGREYXRhLm11bHRpcGxlIHx8IChmaWVsZERhdGEudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJyk7XG4gICAgY29uc3Qgb3B0aW9uRGF0YVRlbXBsYXRlID0gbGFiZWwgPT4ge1xuICAgICAgbGV0IG9wdGlvbkRhdGEgPSB7XG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgdmFsdWU6IHV0aWxzLmh5cGhlbkNhc2UobGFiZWwpXG4gICAgICB9O1xuXG4gICAgICBpZiAoZmllbGREYXRhLnR5cGUgIT09ICdhdXRvY29tcGxldGUnKSB7XG4gICAgICAgIG9wdGlvbkRhdGEuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbkRhdGE7XG4gICAgfTtcblxuICAgIGlmICghZmllbGREYXRhLnZhbHVlcyB8fCAhZmllbGREYXRhLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGxldCBkZWZhdWx0T3B0Q291bnQgPSB1dGlscy5pbkFycmF5KGZpZWxkRGF0YS50eXBlLCBbJ2NoZWNrYm94LWdyb3VwJywgJ2NoZWNrYm94J10pID8gWzFdIDogWzEsIDIsIDNdO1xuICAgICAgZmllbGREYXRhLnZhbHVlcyA9IGRlZmF1bHRPcHRDb3VudC5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gYCR7aTE4bi5vcHRpb259ICR7aW5kZXh9YDtcbiAgICAgICAgcmV0dXJuIG9wdGlvbkRhdGFUZW1wbGF0ZShsYWJlbCk7XG4gICAgICB9KTtcblxuICAgIGxldCBmaXJzdE9wdGlvbiA9IGZpZWxkRGF0YS52YWx1ZXNbMF07XG4gICAgICBpZiAoZmlyc3RPcHRpb24uaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgZmlyc3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbnN1cmUgb3B0aW9uIGRhdGEgaXMgaGFzIGFsbCByZXF1aXJlZCBrZXlzXG4gICAgICBmaWVsZERhdGEudmFsdWVzLmZvckVhY2gob3B0aW9uID0+IE9iamVjdC5hc3NpZ24oe30sIHtzZWxlY3RlZDogZmFsc2V9LCBvcHRpb24pKTtcbiAgICB9XG5cbiAgICBmaWVsZE9wdGlvbnMucHVzaCgnPGRpdiBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnMtd3JhcFwiPicpO1xuXG4gICAgZmllbGRPcHRpb25zLnB1c2goJzxvbCBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnNcIj4nKTtcbiAgICB1dGlscy5mb3JFYWNoKGZpZWxkRGF0YS52YWx1ZXMsIGkgPT4ge1xuICAgICAgZmllbGRPcHRpb25zLnB1c2goc2VsZWN0RmllbGRPcHRpb25zKGZpZWxkRGF0YS5uYW1lLCBmaWVsZERhdGEudmFsdWVzW2ldLCBpc011bHRpcGxlKSk7XG4gICAgfSk7XG4gICAgZmllbGRPcHRpb25zLnB1c2goJzwvb2w+Jyk7XG4gICAgZmllbGRPcHRpb25zLnB1c2godXRpbHMubWFya3VwKCdkaXYnLCBvcHRpb25BY3Rpb25zLCB7Y2xhc3NOYW1lOiAnb3B0aW9uLWFjdGlvbnMnfSkub3V0ZXJIVE1MKTtcbiAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICByZXR1cm4gdXRpbHMubWFya3VwKCdkaXYnLCBmaWVsZE9wdGlvbnMuam9pbignJyksIHtjbGFzc05hbWU6ICdmb3JtLWdyb3VwIGZpZWxkLW9wdGlvbnMnfSkub3V0ZXJIVE1MO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZWRpdGFibGUgcHJvcGVydGllcyBmb3IgdGhlIGZpZWxkXG4gICAqIEBwYXJhbSAge29iamVjdH0gdmFsdWVzIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgbWFya3VwIGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICovXG4gIGxldCBhZHZGaWVsZHMgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICBsZXQgYWR2RmllbGRzID0gW107XG4gICAgbGV0IGtleTtcbiAgICBsZXQgdmFsdWVGaWVsZCA9ICF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnZmlsZSddLmNvbmNhdChkLm9wdGlvbkZpZWxkcykpO1xuICAgIGxldCByb2xlcyA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyB2YWx1ZXMucm9sZS5zcGxpdCgnLCcpIDogW107XG5cbiAgICBhZHZGaWVsZHMucHVzaChyZXF1aXJlZEZpZWxkKHZhbHVlcykpO1xuXG4gICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsnY2hlY2tib3gnLCAnY2hlY2tib3gtZ3JvdXAnXSkpIHtcbiAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ3RvZ2dsZScsIHZhbHVlcywge2ZpcnN0OiBpMThuLnRvZ2dsZX0pKTtcbiAgICB9XG5cbiAgICAvLyBJbmxpbmUgb3B0aW9uc1xuICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICBsZXQgbGFiZWxzID0ge1xuICAgICAgICBmaXJzdDogaTE4bi5pbmxpbmUsXG4gICAgICAgIHNlY29uZDogbWkxOG4uZ2V0KCdpbmxpbmVEZXNjJywgdmFsdWVzLnR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpKVxuICAgICAgfTtcblxuICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnaW5saW5lJywgdmFsdWVzLCBsYWJlbHMpKTtcbiAgICB9XG5cbiAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdsYWJlbCcsIHZhbHVlcykpO1xuXG4gICAgdmFsdWVzLnNpemUgPSB2YWx1ZXMuc2l6ZSB8fCAnbSc7XG4gICAgdmFsdWVzLnN0eWxlID0gdmFsdWVzLnN0eWxlIHx8ICdkZWZhdWx0JztcblxuICAgIC8vIEhlbHAgVGV4dCAvIERlc2NyaXB0aW9uIEZpZWxkXG4gICAgaWYgKCF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnYnV0dG9uJ10pKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdkZXNjcmlwdGlvbicsIHZhbHVlcykpO1xuICAgIH1cblxuICAgIGlmIChzdWJ0eXBlc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgIGxldCBvcHRpb25EYXRhID0gc3VidHlwZXNbdmFsdWVzLnR5cGVdO1xuICAgICAgYWR2RmllbGRzLnB1c2goc2VsZWN0QXR0cmlidXRlKCdzdWJ0eXBlJywgdmFsdWVzLCBvcHRpb25EYXRhKSk7XG4gICAgfVxuXG5cbiAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaChidG5TdHlsZXModmFsdWVzLnN0eWxlKSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtaW4nLCB2YWx1ZXMpKTtcbiAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWF4JywgdmFsdWVzKSk7XG4gICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ3N0ZXAnLCB2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICAvLyBQbGFjZWhvbGRlclxuICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdmFsdWVzKSk7XG5cbiAgICAvLyBUZXh0QXJlYSBSb3dzIEF0dHJpYnV0ZVxuICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdyb3dzJywgdmFsdWVzKSk7XG4gICAgfVxuXG4gICAgLy8gQ2xhc3NcbiAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdjbGFzc05hbWUnLCB2YWx1ZXMpKTtcblxuICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZXMpKTtcblxuICAgIGlmICh2YWx1ZUZpZWxkKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlcykpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICBsZXQgbGFiZWxzID0ge1xuICAgICAgICBmaXJzdDogaTE4bi5tdWx0aXBsZUZpbGVzLFxuICAgICAgICBzZWNvbmQ6IGkxOG4uYWxsb3dNdWx0aXBsZUZpbGVzXG4gICAgICB9O1xuICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIGxhYmVscykpO1xuICAgIH1cblxuICAgIGxldCByb2xlc0Rpc3BsYXkgPSB2YWx1ZXMucm9sZSAhPT0gdW5kZWZpbmVkID8gJ3N0eWxlPVwiZGlzcGxheTpibG9ja1wiJyA6ICcnO1xuICAgIGxldCBhdmFpbGFibGVSb2xlcyA9IFtcbiAgICAgIGA8ZGl2IGNsYXNzPVwiYXZhaWxhYmxlLXJvbGVzXCIgJHtyb2xlc0Rpc3BsYXl9PmBcbiAgICBdO1xuICAgIGZvciAoa2V5IGluIG9wdHMucm9sZXMpIHtcbiAgICAgIGlmIChvcHRzLnJvbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSB1dGlscy5pbkFycmF5KGtleSwgcm9sZXMpID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgIGxldCByb2xlSWQgPSBgZmxkLSR7ZGF0YS5sYXN0SUR9LXJvbGVzLSR7a2V5fWA7XG4gICAgICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicm9sZXNbXVwiIHZhbHVlPVwiJHtrZXl9XCIgaWQ9XCIke3JvbGVJZH1cIiAke2NoZWNrZWR9IGNsYXNzPVwicm9sZXMtZmllbGRcIiAvPiA8bGFiZWwgZm9yPVwiJHtyb2xlSWR9XCI+JHtvcHRzLnJvbGVzW2tleV19PC9sYWJlbD48YnIvPmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goJzwvZGl2PicpO1xuXG4gICAgbGV0IGFjY2Vzc0xhYmVscyA9IHtmaXJzdDogaTE4bi5yb2xlcywgc2Vjb25kOiBpMThuLmxpbWl0Um9sZSwgY29udGVudDogYXZhaWxhYmxlUm9sZXMuam9pbignJyl9O1xuXG4gICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnYWNjZXNzJywgdmFsdWVzLCBhY2Nlc3NMYWJlbHMpKTtcblxuICAgIGlmICh2YWx1ZXMudHlwZS5tYXRjaCgvKGNoZWNrYm94LWdyb3VwfHJhZGlvLWdyb3VwKS8pKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdvdGhlcicsIHZhbHVlcywge2ZpcnN0OiBpMThuLmVuYWJsZU90aGVyLCBzZWNvbmQ6IGkxOG4uZW5hYmxlT3RoZXJNc2d9KSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIHtmaXJzdDogJyAnLCBzZWNvbmQ6IGkxOG4uc2VsZWN0aW9uc01lc3NhZ2V9KSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy50eXBlLm1hdGNoKGQub3B0aW9uRmllbGRzUmVnRXgpKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaChmaWVsZE9wdGlvbnModmFsdWVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsndGV4dCcsICd0ZXh0YXJlYSddKSkge1xuICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXhsZW5ndGgnLCB2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgY3VzdG9tIGF0dHJpYnV0ZXMgYXMgZGVmaW5lZCBpbiB0eXBlVXNlckF0dHJzIG9wdGlvblxuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaChwcm9jZXNzVHlwZVVzZXJBdHRycyhvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdLCB2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWR2RmllbGRzLmpvaW4oJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzZXMgdHlwZVVzZXJBdHRyc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHR5cGVVc2VyQXR0ciBvcHRpb25cbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgICAgZmllbGQgYXR0cmlidXRlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICBtYXJrdXAgZm9yIGN1c3RvbSB1c2VyIGF0dHJpYnV0ZXNcbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NUeXBlVXNlckF0dHJzKHR5cGVVc2VyQXR0ciwgdmFsdWVzKSB7XG4gICAgbGV0IGFkdkZpZWxkID0gW107XG5cbiAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gdHlwZVVzZXJBdHRyKSB7XG4gICAgICBpZiAodHlwZVVzZXJBdHRyLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgbGV0IG9yaWcgPSBpMThuW2F0dHJpYnV0ZV07XG4gICAgICAgIGxldCBvcmlnVmFsdWUgPSB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZTtcbiAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSB8fCAnJztcblxuICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWwpIHtcbiAgICAgICAgICBpMThuW2F0dHJpYnV0ZV0gPSB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5sYWJlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5vcHRpb25zKSB7XG4gICAgICAgICAgYWR2RmllbGQucHVzaChzZWxlY3RVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkdkZpZWxkLnB1c2goaW5wdXRVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaTE4blthdHRyaWJ1dGVdID0gb3JpZztcbiAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkdkZpZWxkLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRleHQgaW5wdXQgdmFsdWUgZm9yIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBhbHNvIGtub3duIGFzIHZhbHVlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIGlucHV0IG1hcmt1cFxuICAgKi9cbiAgZnVuY3Rpb24gaW5wdXRVc2VyQXR0cnMobmFtZSwgYXR0cnMpIHtcbiAgICBsZXQgdGV4dEF0dHJzID0ge1xuICAgICAgICBpZDogbmFtZSArICctJyArIGRhdGEubGFzdElELFxuICAgICAgICB0aXRsZTogYXR0cnMuZGVzY3JpcHRpb24gfHwgYXR0cnMubGFiZWwgfHwgbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiBhdHRycy50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgY2xhc3NOYW1lOiBbYGZsZC0ke25hbWV9YF1cbiAgICAgIH07XG4gICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3RleHRBdHRycy5pZH1cIj4ke2kxOG5bbmFtZV19PC9sYWJlbD5gO1xuXG4gICAgaWYgKCF1dGlscy5pbkFycmF5KHRleHRBdHRycy50eXBlLCBbJ2NoZWNrYm94JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICB0ZXh0QXR0cnMuY2xhc3NOYW1lLnB1c2goJ2Zvcm0tY29udHJvbCcpO1xuICAgIH1cblxuICAgIHRleHRBdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB0ZXh0QXR0cnMpO1xuICAgIGxldCB0ZXh0SW5wdXQgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh0ZXh0QXR0cnMpfT5gO1xuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3RleHRJbnB1dH08L2Rpdj5gO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBpbnB1dCBmb3IgbXVsdGlwbGUgY2hvaWNlIHVzZXIgYXR0cmlidXRlc1xuICAgKiBAdG9kbyAgcmVwbGFjZSB3aXRoIHNlbGVjdEF0dHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgc2VsZWN0IG1hcmt1cFxuICAgKi9cbiAgZnVuY3Rpb24gc2VsZWN0VXNlckF0dHJzKG5hbWUsIG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0aXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLm9wdGlvbnMpLm1hcCh2YWwgPT4ge1xuICAgICAgbGV0IGF0dHJzID0ge3ZhbHVlOiB2YWx9O1xuICAgICAgaWYgKHZhbCA9PT0gb3B0aW9ucy52YWx1ZSkge1xuICAgICAgICBhdHRycy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gYDxvcHRpb24gJHt1dGlscy5hdHRyU3RyaW5nKGF0dHJzKX0+JHtvcHRpb25zLm9wdGlvbnNbdmFsXX08L29wdGlvbj5gO1xuICAgIH0pO1xuICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgIGlkOiBuYW1lICsgJy0nICsgZGF0YS5sYXN0SUQsXG4gICAgICB0aXRsZTogb3B0aW9ucy5kZXNjcmlwdGlvbiB8fCBvcHRpb25zLmxhYmVsIHx8IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBjbGFzc05hbWU6IGBmbGQtJHtuYW1lfSBmb3JtLWNvbnRyb2xgXG4gICAgfTtcbiAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtpMThuW25hbWVdfTwvbGFiZWw+YDtcblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihwcm9wID0+IHtcbiAgICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShwcm9wLCBbJ3ZhbHVlJywgJ29wdGlvbnMnLCAnbGFiZWwnXSk7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbihhdHRyKSB7XG4gICAgICBzZWxlY3RBdHRyc1thdHRyXSA9IG9wdGlvbnNbYXR0cl07XG4gICAgfSk7XG5cbiAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtvcHRpcy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICB9XG5cbiAgbGV0IGJvb2xBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZXMsIGxhYmVscykge1xuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGFiZWwgPSAodHh0KSA9PiB7XG4gICAgICByZXR1cm4gYDxsYWJlbCBmb3I9XCIke25hbWV9LSR7ZGF0YS5sYXN0SUR9XCI+JHt0eHR9PC9sYWJlbD5gO1xuICAgIH07XG4gICAgbGV0IGNoZWNrZWQgPSAodmFsdWVzW25hbWVdICE9PSB1bmRlZmluZWQgPyAnY2hlY2tlZCcgOiAnJyk7XG4gICAgbGV0IGlucHV0ID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZsZC0ke25hbWV9XCIgbmFtZT1cIiR7bmFtZX1cIiB2YWx1ZT1cInRydWVcIiAke2NoZWNrZWR9IGlkPVwiJHtuYW1lfS0ke2RhdGEubGFzdElEfVwiLz4gYDtcbiAgICBsZXQgbGVmdCA9IFtdO1xuICAgIGxldCByaWdodCA9IFtcbiAgICAgIGlucHV0XG4gICAgXTtcblxuICAgIGlmIChsYWJlbHMuZmlyc3QpIHtcbiAgICAgIGxlZnQudW5zaGlmdChsYWJlbChsYWJlbHMuZmlyc3QpKTtcbiAgICB9XG5cbiAgICBpZiAobGFiZWxzLnNlY29uZCkge1xuICAgICAgcmlnaHQucHVzaChsYWJlbChsYWJlbHMuc2Vjb25kKSk7XG4gICAgfVxuXG4gICAgaWYgKGxhYmVscy5jb250ZW50KSB7XG4gICAgICByaWdodC5wdXNoKGxhYmVscy5jb250ZW50KTtcbiAgICB9XG5cbiAgICByaWdodC51bnNoaWZ0KCc8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPicpO1xuICAgIHJpZ2h0LnB1c2goJzwvZGl2PicpO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xlZnQuY29uY2F0KHJpZ2h0KS5qb2luKCcnKX08L2Rpdj5gO1xuICB9O1xuXG4gIGxldCBidG5TdHlsZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgbGV0IHN0eWxlcyA9IGkxOG4uc3R5bGVzLmJ0bjtcbiAgICAgIGxldCBzdHlsZUZpZWxkID0gJyc7XG5cbiAgICBpZiAoc3R5bGVzKSB7XG4gICAgICBsZXQgc3R5bGVMYWJlbCA9IGA8bGFiZWw+JHtpMThuLnN0eWxlfTwvbGFiZWw+YDtcbiAgICAgIHN0eWxlRmllbGQgKz0gYDxpbnB1dCB2YWx1ZT1cIiR7c3R5bGV9XCIgbmFtZT1cInN0eWxlXCIgdHlwZT1cImhpZGRlblwiIGNsYXNzPVwiYnRuLXN0eWxlXCI+YDtcbiAgICAgIHN0eWxlRmllbGQgKz0gJzxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj4nO1xuXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBjbGFzc0xpc3QgPSBbJ2J0bi14cycsICdidG4nLCBgYnRuLSR7ZWxlbWVudH1gXTtcbiAgICAgICAgaWYgKHN0eWxlID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgY2xhc3NMaXN0LnB1c2goJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZUZpZWxkICs9IGA8YnV0dG9uIHZhbHVlPVwiJHtlbGVtZW50fVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7Y2xhc3NMaXN0LmpvaW4oJyAnKX1cIj4ke2kxOG4uc3R5bGVzLmJ0bltlbGVtZW50XX08L2J1dHRvbj5gO1xuICAgICAgfSk7XG5cbiAgICAgIHN0eWxlRmllbGQgKz0gJzwvZGl2Pic7XG5cbiAgICAgIHN0eWxlRmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc3R5bGUtd3JhcFwiPiR7c3R5bGVMYWJlbH0gJHtzdHlsZUZpZWxkfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlRmllbGQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIG51bWJlciBhdHRyaWJ1dGUgdG8gYSBmaWVsZC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICogQHJldHVybiB7U3RyaW5nfSBtYXJrdXAgZm9yIG51bWJlciBhdHRyaWJ1dGVcbiAgICovXG4gIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcykge1xuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBhdHRyVmFsID0gdmFsdWVzW2F0dHJpYnV0ZV07XG4gICAgbGV0IGF0dHJMYWJlbCA9IGkxOG5bYXR0cmlidXRlXSB8fCBhdHRyaWJ1dGU7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gaTE4bltgcGxhY2Vob2xkZXIuJHthdHRyaWJ1dGV9YF07XG4gICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICB2YWx1ZTogYXR0clZhbCxcbiAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgIG1pbjogJzAnLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgaWQ6IGAke2F0dHJpYnV0ZX0tJHtkYXRhLmxhc3RJRH1gXG4gICAgfTtcbiAgICBsZXQgbnVtYmVyQXR0cmlidXRlID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodXRpbHMudHJpbU9iaihpbnB1dENvbmZpZykpfT5gO1xuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke251bWJlckF0dHJpYnV0ZX08L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiPjxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gIH07XG5cbiAgLyoqXG4gICAqIHNlbGVjdEF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgIGFrYSBhdHRyc1xuICAgKiBAcGFyYW0gIHtBcnJheX0gb3B0aW9uRGF0YSAgc2VsZWN0IGZpZWxkIG9wdGlvbiBkYXRhXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICBzZWxlY3QgaW5wdXQgbWFrcnVwXG4gICAqL1xuICBsZXQgc2VsZWN0QXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMsIG9wdGlvbkRhdGEpIHtcbiAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdE9wdGlvbnMgPSBvcHRpb25EYXRhLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgbGFiZWw6IGAke2kxOG4ub3B0aW9ufSAke2l9YCxcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0aW9uKTtcbiAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHZhbHVlc1thdHRyaWJ1dGVdKSB7XG4gICAgICAgIG9wdGlvbkF0dHJzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcodXRpbHMudHJpbU9iaihvcHRpb25BdHRycykpfT4ke29wdGlvbkF0dHJzLmxhYmVsfTwvb3B0aW9uPmA7XG4gICAgfSk7XG4gICAgbGV0IHNlbGVjdEF0dHJzID0ge1xuICAgICAgICBpZDogYXR0cmlidXRlICsgJy0nICsgZGF0YS5sYXN0SUQsXG4gICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgXG4gICAgICB9O1xuICAgIGxldCBsYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtzZWxlY3RBdHRycy5pZH1cIj4ke2kxOG5bYXR0cmlidXRlXSB8fCB1dGlscy5jYXBpdGFsaXplKGF0dHJpYnV0ZSl9PC9sYWJlbD5gO1xuICAgIGxldCBzZWxlY3QgPSBgPHNlbGVjdCAke3V0aWxzLmF0dHJTdHJpbmcoc2VsZWN0QXR0cnMpfT4ke3NlbGVjdE9wdGlvbnMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtzZWxlY3R9PC9kaXY+YDtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtzZWxlY3RBdHRycy5uYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBzb21lIHRleHQgaW5wdXRzIGZvciBmaWVsZCBhdHRyaWJ1dGVzLCAqKndpbGwgYmUgcmVwbGFjZWQqKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBsZXQgdGV4dEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlaG9sZGVyRmllbGRzID0gW1xuICAgICAgJ3RleHQnLFxuICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICdzZWxlY3QnLFxuICAgICAgJ2F1dG9jb21wbGV0ZSdcbiAgICBdO1xuXG4gICAgbGV0IG5vTmFtZSA9IFtcbiAgICAgICdoZWFkZXInLFxuICAgICAgJ3BhcmFncmFwaCdcbiAgICBdO1xuXG4gICAgbGV0IHRleHRBcmVhID0gWydwYXJhZ3JhcGgnXTtcblxuICAgIGxldCBhdHRyVmFsID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgbGV0IGF0dHJMYWJlbCA9IGkxOG5bYXR0cmlidXRlXTtcbiAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSkge1xuICAgICAgYXR0ckxhYmVsID0gaTE4bi5jb250ZW50O1xuICAgIH1cblxuICAgIGlmIChzdWJ0eXBlcy5oZWFkZXIpIHtcbiAgICAgIG5vTmFtZSA9IG5vTmFtZS5jb25jYXQoc3VidHlwZXMuaGVhZGVyKTtcbiAgICB9XG5cbiAgICBsZXQgcGxhY2Vob2xkZXIgPSBpMThuW2BwbGFjZWhvbGRlci4ke2F0dHJpYnV0ZX1gXSB8fCAnJztcbiAgICBsZXQgYXR0cmlidXRlZmllbGQgPSAnJztcbiAgICBsZXQgbm9NYWtlQXR0ciA9IFtdO1xuXG4gICAgLy8gRmllbGQgaGFzIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZVxuICAgIGlmIChhdHRyaWJ1dGUgPT09ICdwbGFjZWhvbGRlcicgJiYgIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHBsYWNlaG9sZGVyRmllbGRzKSkge1xuICAgICAgbm9NYWtlQXR0ci5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIC8vIEZpZWxkIGhhcyBuYW1lIGF0dHJpYnV0ZVxuICAgIGlmIChhdHRyaWJ1dGUgPT09ICduYW1lJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBub05hbWUpKSB7XG4gICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFub01ha2VBdHRyLnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2RhdGEubGFzdElEfWBcbiAgICAgIH07XG4gICAgICBsZXQgYXR0cmlidXRlTGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7aW5wdXRDb25maWcuaWR9XCI+JHthdHRyTGFiZWx9PC9sYWJlbD5gO1xuXG4gICAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnKSB7XG4gICAgICAgIGF0dHJpYnV0ZWZpZWxkICs9IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZSAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT4ke2F0dHJWYWx9PC9kaXY+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0Q29uZmlnLnZhbHVlID0gYXR0clZhbDtcbiAgICAgICAgaW5wdXRDb25maWcudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgYXR0cmlidXRlZmllbGQgKz0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHthdHRyaWJ1dGVmaWVsZH08L2Rpdj5gO1xuXG4gICAgICBsZXQgdmlzaWJpbGl0eSA9ICdibG9jayc7XG4gICAgICBpZiAoYXR0cmlidXRlID09PSAndmFsdWUnKSB7XG4gICAgICAgIHZpc2liaWxpdHkgPSB2YWx1ZXMuc3VidHlwZSAmJiB2YWx1ZXMuc3VidHlwZSA9PT0gJ3F1aWxsJyAmJiAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGF0dHJpYnV0ZWZpZWxkID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCIgc3R5bGU9XCJkaXNwbGF5OiAke3Zpc2liaWxpdHl9XCI+JHthdHRyaWJ1dGVMYWJlbH0gJHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cmlidXRlZmllbGQ7XG4gIH07XG5cbiAgbGV0IHJlcXVpcmVkRmllbGQgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICBsZXQgbm9SZXF1aXJlID0gW1xuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdidXR0b24nXG4gICAgICBdO1xuICAgIGxldCBub01ha2UgPSBbXTtcbiAgICBsZXQgcmVxdWlyZUZpZWxkID0gJyc7XG5cbiAgICBpZiAodXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgbm9SZXF1aXJlKSkge1xuICAgICAgbm9NYWtlLnB1c2godHJ1ZSk7XG4gICAgfVxuICAgIGlmICghbm9NYWtlLnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgcmVxdWlyZUZpZWxkID0gYm9vbEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB2YWx1ZXMsIHtmaXJzdDogaTE4bi5yZXF1aXJlZH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXF1aXJlRmllbGQ7XG4gIH07XG5cbiAgLy8gQXBwZW5kIHRoZSBuZXcgZmllbGQgdG8gdGhlIGVkaXRvclxuICBsZXQgYXBwZW5kTmV3RmllbGQgPSBmdW5jdGlvbih2YWx1ZXMsIGlzTmV3ID0gdHJ1ZSkge1xuICAgIGxldCB0eXBlID0gdmFsdWVzLnR5cGUgfHwgJ3RleHQnO1xuICAgIGxldCBsYWJlbCA9IHZhbHVlcy5sYWJlbCB8fCBpMThuW3R5cGVdIHx8IGkxOG4ubGFiZWw7XG4gICAgbGV0IGRlbEJ0biA9IG0oJ2EnLCBpMThuLnJlbW92ZSwge1xuICAgICAgICBpZDogJ2RlbF8nICsgZGF0YS5sYXN0SUQsXG4gICAgICAgIGNsYXNzTmFtZTogJ2RlbC1idXR0b24gYnRuIGRlbGV0ZS1jb25maXJtJyxcbiAgICAgICAgdGl0bGU6IGkxOG4ucmVtb3ZlTWVzc2FnZVxuICAgICAgfSk7XG4gICAgbGV0IHRvZ2dsZUJ0biA9IG0oJ2EnLCBudWxsLCB7XG4gICAgICBpZDogZGF0YS5sYXN0SUQgKyAnLWVkaXQnLFxuICAgICAgY2xhc3NOYW1lOiAndG9nZ2xlLWZvcm0gYnRuIGljb24tcGVuY2lsJyxcbiAgICAgIHRpdGxlOiBpMThuLmhpZGVcbiAgICB9KTtcbiAgICBsZXQgY29weUJ0biA9IG0oJ2EnLCBudWxsLCB7XG4gICAgICBpZDogZGF0YS5sYXN0SUQgKyAnLWNvcHknLFxuICAgICAgY2xhc3NOYW1lOiAnY29weS1idXR0b24gYnRuIGljb24tY29weScsXG4gICAgICB0aXRsZTogaTE4bi5jb3B5QnV0dG9uVG9vbHRpcFxuICAgIH0pO1xuXG4gICAgbGV0IGxpQ29udGVudHMgPSBtKFxuICAgICAgJ2RpdicsIFt0b2dnbGVCdG4sIGNvcHlCdG4sIGRlbEJ0bl0sIHtjbGFzc05hbWU6ICdmaWVsZC1hY3Rpb25zJ31cbiAgICApLm91dGVySFRNTDtcblxuICAgIC8vIEZpZWxkIHByZXZpZXcgTGFiZWxcbiAgICBsaUNvbnRlbnRzICs9IGA8bGFiZWwgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPiR7dXRpbHMucGFyc2VkSHRtbChsYWJlbCl9PC9sYWJlbD5gO1xuXG4gICAgbGV0IHJlcXVpcmVkRGlzcGxheSA9IHZhbHVlcy5yZXF1aXJlZCA/ICdzdHlsZT1cImRpc3BsYXk6aW5saW5lXCInIDogJyc7XG4gICAgbGlDb250ZW50cyArPSBgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiICR7cmVxdWlyZWREaXNwbGF5fT4gKjwvc3Bhbj5gO1xuXG4gICAgaWYgKHZhbHVlcy5kZXNjcmlwdGlvbikge1xuICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICB0b29sdGlwOiB2YWx1ZXMuZGVzY3JpcHRpb25cbiAgICAgIH07XG4gICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4/PC9zcGFuPmA7XG4gICAgfVxuXG4gICAgbGlDb250ZW50cyArPSBtKCdkaXYnLCAnJywge2NsYXNzTmFtZTogJ3ByZXYtaG9sZGVyJ30pLm91dGVySFRNTDtcbiAgICBsaUNvbnRlbnRzICs9IGA8ZGl2IGlkPVwiJHtkYXRhLmxhc3RJRH0taG9sZGVyXCIgY2xhc3M9XCJmcm0taG9sZGVyXCI+YDtcbiAgICBsaUNvbnRlbnRzICs9ICc8ZGl2IGNsYXNzPVwiZm9ybS1lbGVtZW50c1wiPic7XG5cbiAgICBsaUNvbnRlbnRzICs9IGFkdkZpZWxkcyh2YWx1ZXMpO1xuICAgIGxpQ29udGVudHMgKz0gbSgnYScsIGkxOG4uY2xvc2UsIHtjbGFzc05hbWU6ICdjbG9zZS1maWVsZCd9KS5vdXRlckhUTUw7XG5cbiAgICBsaUNvbnRlbnRzICs9ICc8L2Rpdj4nO1xuICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XG5cbiAgICBsZXQgZmllbGQgPSBtKCdsaScsIGxpQ29udGVudHMsIHtcbiAgICAgICAgJ2NsYXNzJzogdHlwZSArICctZmllbGQgZm9ybS1maWVsZCcsXG4gICAgICAgICd0eXBlJzogdHlwZSxcbiAgICAgICAgaWQ6IGRhdGEubGFzdElEXG4gICAgICB9KTtcbiAgICBsZXQgJGxpID0gJChmaWVsZCk7XG5cbiAgICAkbGkuZGF0YSgnZmllbGREYXRhJywge2F0dHJzOiB2YWx1ZXN9KTtcblxuICAgIGlmICh0eXBlb2YgaGVscGVycy5zdG9wSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAkKCc+IGxpJywgZC5zdGFnZSkuZXEoaGVscGVycy5zdG9wSW5kZXgpLmJlZm9yZSgkbGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc3RhZ2UuYXBwZW5kKCRsaSk7XG4gICAgfVxuXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkbGkpXG4gICAgLnNvcnRhYmxlKHt1cGRhdGU6ICgpID0+IGhlbHBlcnMudXBkYXRlUHJldmlldygkbGkpfSk7XG5cbiAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKTtcblxuICAgIGlmIChvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdICYmIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQpIHtcbiAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQoZmllbGQpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmVkaXRPbkFkZCAmJiBpc05ldykge1xuICAgICAgaGVscGVycy5jbG9zZUFsbEVkaXQoKTtcbiAgICAgIGhlbHBlcnMudG9nZ2xlRWRpdChkYXRhLmxhc3RJRCwgZmFsc2UpO1xuICAgICAgLy8gZmllbGQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9XG5cbiAgICBkYXRhLmxhc3RJRCA9IGhlbHBlcnMuaW5jcmVtZW50SWQoZGF0YS5sYXN0SUQpO1xuICB9O1xuXG4gIC8vIFNlbGVjdCBmaWVsZCBodG1sLCBzaW5jZSB0aGVyZSBtYXkgYmUgbXVsdGlwbGVcbiAgbGV0IHNlbGVjdEZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbkRhdGEsIG11bHRpcGxlU2VsZWN0KSB7XG4gICAgbGV0IG9wdGlvbklucHV0VHlwZSA9IHtcbiAgICAgICAgc2VsZWN0ZWQ6IChtdWx0aXBsZVNlbGVjdCA/ICdjaGVja2JveCcgOiAncmFkaW8nKVxuICAgICAgfTtcbiAgICBsZXQgb3B0aW9uRGF0YU9yZGVyID0gW1xuICAgICAgJ3ZhbHVlJyxcbiAgICAgICdsYWJlbCcsXG4gICAgICAnc2VsZWN0ZWQnXG4gICAgXTtcbiAgICBsZXQgb3B0aW9uSW5wdXRzID0gW107XG4gICAgbGV0IG9wdGlvblRlbXBsYXRlID0ge3NlbGVjdGVkOiBmYWxzZSwgbGFiZWw6ICcnLCB2YWx1ZTogJyd9O1xuXG4gICAgb3B0aW9uRGF0YSA9IE9iamVjdC5hc3NpZ24ob3B0aW9uVGVtcGxhdGUsIG9wdGlvbkRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IG9wdGlvbkRhdGFPcmRlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHByb3AgPSBvcHRpb25EYXRhT3JkZXJbaV07XG4gICAgICBpZiAob3B0aW9uRGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgdHlwZTogb3B0aW9uSW5wdXRUeXBlW3Byb3BdIHx8ICd0ZXh0JyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdvcHRpb24tJyArIHByb3AsXG4gICAgICAgICAgdmFsdWU6IG9wdGlvbkRhdGFbcHJvcF0sXG4gICAgICAgICAgbmFtZTogbmFtZSArICctb3B0aW9uJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGF0dHJzLnBsYWNlaG9sZGVyID0gaTE4bltgcGxhY2Vob2xkZXIuJHtwcm9wfWBdIHx8ICcnO1xuXG4gICAgICAgIGlmIChwcm9wID09PSAnc2VsZWN0ZWQnICYmIG9wdGlvbkRhdGEuc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBhdHRycy5jaGVja2VkID0gb3B0aW9uRGF0YS5zZWxlY3RlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbklucHV0cy5wdXNoKG0oJ2lucHV0JywgbnVsbCwgYXR0cnMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlQXR0cnMgPSB7XG4gICAgICBjbGFzc05hbWU6ICdyZW1vdmUgYnRuJyxcbiAgICAgIHRpdGxlOiBpMThuLnJlbW92ZU1lc3NhZ2VcbiAgICB9O1xuICAgIG9wdGlvbklucHV0cy5wdXNoKHV0aWxzLm1hcmt1cCgnYScsIGkxOG4ucmVtb3ZlLCByZW1vdmVBdHRycykpO1xuXG4gICAgbGV0IGZpZWxkID0gdXRpbHMubWFya3VwKCdsaScsIG9wdGlvbklucHV0cyk7XG5cbiAgICByZXR1cm4gZmllbGQub3V0ZXJIVE1MO1xuICB9O1xuXG4gIGxldCBjbG9uZUl0ZW0gPSBmdW5jdGlvbiBjbG9uZUl0ZW0oY3VycmVudEl0ZW0pIHtcbiAgICBsZXQgY3VycmVudElkID0gY3VycmVudEl0ZW0uYXR0cignaWQnKTtcbiAgICBsZXQgdHlwZSA9IGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKTtcbiAgICBsZXQgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBsZXQgY2xvbmVOYW1lID0gdHlwZSArICctJyArIHRzO1xuICAgIGxldCAkY2xvbmUgPSBjdXJyZW50SXRlbS5jbG9uZSgpO1xuXG4gICAgJGNsb25lLmZpbmQoJ1tpZF0nKS5lYWNoKChpLCBlbGVtKSA9PiB7XG4gICAgIGVsZW0uaWQgPSBlbGVtLmlkLnJlcGxhY2UoY3VycmVudElkLCBkYXRhLmxhc3RJRCk7XG4gICAgfSk7XG5cbiAgICAkY2xvbmUuZmluZCgnW2Zvcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZvcicpLnJlcGxhY2UoY3VycmVudElkLCBkYXRhLmxhc3RJRCkpO1xuICAgIH0pO1xuXG4gICAgJGNsb25lLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKCdlOm5vdCguZm9ybS1lbGVtZW50cyknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbmV3TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCAobmV3TmFtZS5sYXN0SW5kZXhPZignLScpICsgMSkpO1xuICAgICAgICBuZXdOYW1lID0gbmV3TmFtZSArIHRzLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgbmV3TmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICRjbG9uZS5maW5kKCcuZm9ybS1lbGVtZW50cycpLmZpbmQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PT0gJ25hbWUnKSB7XG4gICAgICAgIGxldCBuZXdWYWwgPSB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgbmV3VmFsID0gbmV3VmFsLnN1YnN0cmluZygwLCAobmV3VmFsLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgIG5ld1ZhbCA9IG5ld1ZhbCArIHRzLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG5ld1ZhbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkY2xvbmUuYXR0cignaWQnLCBkYXRhLmxhc3RJRCk7XG4gICAgJGNsb25lLmF0dHIoJ25hbWUnLCBjbG9uZU5hbWUpO1xuICAgICRjbG9uZS5hZGRDbGFzcygnY2xvbmVkJyk7XG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkY2xvbmUpLnNvcnRhYmxlKCk7XG5cbiAgICBpZiAob3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXSAmJiBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uY2xvbmUpIHtcbiAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSgkY2xvbmVbMF0pO1xuICAgIH1cblxuICAgIGRhdGEubGFzdElEID0gaGVscGVycy5pbmNyZW1lbnRJZChkYXRhLmxhc3RJRCk7XG4gICAgcmV0dXJuICRjbG9uZTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVUSUxJVElFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gZGVsZXRlIG9wdGlvbnNcbiAgJHN0YWdlLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5yZW1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0ICRmaWVsZCA9ICQodGhpcykucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG9wdGlvbnNDb3VudCA9ICQodGhpcykucGFyZW50cygnLnNvcnRhYmxlLW9wdGlvbnM6ZXEoMCknKS5jaGlsZHJlbignbGknKS5sZW5ndGg7XG4gICAgaWYgKG9wdGlvbnNDb3VudCA8PSAyKSB7XG4gICAgICBvcHRzLm5vdGlmeS5lcnJvcignRXJyb3I6ICcgKyBpMThuLm1pbk9wdGlvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgnbGknKS5zbGlkZVVwKCcyNTAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgaGVscGVycy51cGRhdGVQcmV2aWV3KCRmaWVsZCk7XG4gICAgICAgIGhlbHBlcnMuc2F2ZS5jYWxsKGhlbHBlcnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyB0b3VjaCBmb2N1c1xuICAkc3RhZ2Uub24oJ3RvdWNoc3RhcnQnLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XG4gICAgaWYgKGUuaGFuZGxlZCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKCRpbnB1dC5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgbGV0IGZpZWxkVmFsID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAkaW5wdXQudmFsKGZpZWxkVmFsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gdG9nZ2xlIGZpZWxkc1xuICAkc3RhZ2Uub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnRvZ2dsZS1mb3JtLCAuY2xvc2UtZmllbGQnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGUuaGFuZGxlZCAhPT0gdHJ1ZSkge1xuICAgICAgbGV0IHRhcmdldElEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgaGVscGVycy50b2dnbGVFZGl0KHRhcmdldElEKTtcbiAgICAgIGUuaGFuZGxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gICRzdGFnZS5vbignY2hhbmdlJywgJ1tuYW1lPVwic3VidHlwZVwiXScsIChlKSA9PiB7XG4gICAgY29uc3QgJGZpZWxkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGkuZm9ybS1maWVsZCcpO1xuICAgIGNvbnN0ICR2YWxXcmFwID0gJCgnLnZhbHVlLXdyYXAnLCAkZmllbGQpO1xuICAgICR2YWxXcmFwLnRvZ2dsZShlLnRhcmdldC52YWx1ZSAhPT0gJ3F1aWxsJyk7XG4gIH0pO1xuXG4gICRzdGFnZS5vbignY2hhbmdlJywgJy5wcmV2LWhvbGRlciBpbnB1dCwgLnByZXYtaG9sZGVyIHNlbGVjdCwgdGV4dGFyZWEnLCBlID0+IHtcbiAgICBsZXQgcHJldk9wdGlvbnM7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3RoZXItb3B0aW9uJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGZpZWxkID0gdXRpbHMuY2xvc2VzdChlLnRhcmdldCwgJy5mb3JtLWZpZWxkJyk7XG4gICAgaWYgKHV0aWxzLmluQXJyYXkoZmllbGQudHlwZSwgWydzZWxlY3QnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgIGxldCBvcHRpb25zID0gZmllbGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3B0aW9uLXZhbHVlJyk7XG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgdXRpbHMuZm9yRWFjaChvcHRpb25zLCBpID0+IHtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zW2ldLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5jaGVja2VkID0gZS50YXJnZXQudmFsdWUgPT09IG9wdGlvbnNbaV0udmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShlLnRhcmdldC5uYW1lKTtcbiAgICAgICAgdXRpbHMuZm9yRWFjaChwcmV2T3B0aW9ucywgaSA9PiB7XG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9uc1tpXS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb24uY2hlY2tlZCA9IHByZXZPcHRpb25zW2ldLmNoZWNrZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZmllbGRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsdWUtJyArIGZpZWxkLmlkKTtcbiAgICAgIGlmKGZpZWxkVmFsKSB7XG4gICAgICAgIGZpZWxkVmFsLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gIH0pO1xuXG4gIC8vIHVwZGF0ZSBwcmV2aWV3IHRvIGxhYmVsXG4gIHV0aWxzLmFkZEV2ZW50TGlzdGVuZXJzKGQuc3RhZ2UsICdrZXl1cCBjaGFuZ2UnLCBlID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmxkLWxhYmVsJykpIHJldHVybjtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZSB8fCBlLnRhcmdldC5pbm5lckhUTUw7XG4gICAgbGV0IGxhYmVsID0gdXRpbHMuY2xvc2VzdChlLnRhcmdldCwgJy5mb3JtLWZpZWxkJykucXVlcnlTZWxlY3RvcignLmZpZWxkLWxhYmVsJyk7XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gdXRpbHMucGFyc2VkSHRtbCh2YWx1ZSk7XG4gIH0pO1xuXG4gIC8vIHJlbW92ZSBlcnJvciBzdHlsaW5nIHdoZW4gdXNlcnMgdHJpZXMgdG8gY29ycmVjdCBtaXN0YWtlXG4gICRzdGFnZS5vbigna2V5dXAnLCAnaW5wdXQuZXJyb3InLCBmdW5jdGlvbihlKSB7XG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH0pO1xuXG4gIC8vIHVwZGF0ZSBwcmV2aWV3IGZvciBkZXNjcmlwdGlvblxuICAkc3RhZ2Uub24oJ2tleXVwJywgJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgJGZpZWxkID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKTtcbiAgICBsZXQgY2xvc2VzdFRvb2xUaXAgPSAkKCcudG9vbHRpcC1lbGVtZW50JywgJGZpZWxkKTtcbiAgICBsZXQgdHRWYWwgPSAkKGUudGFyZ2V0KS52YWwoKTtcbiAgICBpZiAodHRWYWwgIT09ICcnKSB7XG4gICAgICBpZiAoIWNsb3Nlc3RUb29sVGlwLmxlbmd0aCkge1xuICAgICAgICBsZXQgdHQgPSBgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWVsZW1lbnRcIiB0b29sdGlwPVwiJHt0dFZhbH1cIj4/PC9zcGFuPmA7XG4gICAgICAgICQoJy5maWVsZC1sYWJlbCcsICRmaWVsZCkuYWZ0ZXIodHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2VzdFRvb2xUaXAuYXR0cigndG9vbHRpcCcsIHR0VmFsKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgY2xvc2VzdFRvb2xUaXAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgbXVsdGlwbGUgc2VsZWN0IG9wdGlvbnNcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlIGNsaWNrIGV2ZW50XG4gICAqIEByZXR1cm4ge1N0cmluZ30gbmV3VHlwZVxuICAgKi9cbiAgJHN0YWdlLm9uKCdjaGFuZ2UnLCAnLmZsZC1tdWx0aXBsZScsIGUgPT4ge1xuICAgIGxldCBuZXdUeXBlID0gZS50YXJnZXQuY2hlY2tlZCA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xuICAgIGxldCAkb3B0aW9ucyA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1lbGVtZW50cycpKTtcbiAgICAkb3B0aW9ucy5lYWNoKGkgPT4gJG9wdGlvbnNbaV0udHlwZSA9IG5ld1R5cGUpO1xuICAgIHJldHVybiBuZXdUeXBlO1xuICB9KTtcblxuICAvLyBmb3JtYXQgbmFtZSBhdHRyaWJ1dGVcbiAgJHN0YWdlLm9uKCdibHVyJywgJ2lucHV0LmZsZC1uYW1lJywgZnVuY3Rpb24oZSkge1xuICAgIGUudGFyZ2V0LnZhbHVlID0gdXRpbHMuc2FmZW5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICQoZS50YXJnZXQpXG4gICAgICAuYWRkQ2xhc3MoJ2ZpZWxkLWVycm9yJylcbiAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIGkxOG4uY2Fubm90QmVFbXB0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdmaWVsZC1lcnJvcicpO1xuICAgIH1cbiAgfSk7XG5cbiAgJHN0YWdlLm9uKCdibHVyJywgJ2lucHV0LmZsZC1tYXhsZW5ndGgnLCBlID0+IHtcbiAgICBlLnRhcmdldC52YWx1ZSA9IHV0aWxzLmZvcmNlTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgfSk7XG5cbiAgLy8gQ29weSBmaWVsZFxuICAkc3RhZ2Uub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmljb24tY29weScsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGN1cnJlbnRJdGVtID0gJChlLnRhcmdldCkucGFyZW50KCkucGFyZW50KCdsaScpO1xuICAgIGxldCAkY2xvbmUgPSBjbG9uZUl0ZW0oY3VycmVudEl0ZW0pO1xuICAgICRjbG9uZS5pbnNlcnRBZnRlcihjdXJyZW50SXRlbSk7XG4gICAgaGVscGVycy51cGRhdGVQcmV2aWV3KCRjbG9uZSk7XG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gIH0pO1xuXG4gIC8vIERlbGV0ZSBmaWVsZFxuICAkc3RhZ2Uub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmRlbGV0ZS1jb25maXJtJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYnV0dG9uUG9zaXRpb24gPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICBwYWdlWDogYnV0dG9uUG9zaXRpb24ubGVmdCArIChidXR0b25Qb3NpdGlvbi53aWR0aCAvIDIpLFxuICAgICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgICAgfTtcblxuICAgIGxldCBkZWxldGVJRCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJykuYXR0cignaWQnKTtcbiAgICBjb25zdCAkZmllbGQgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUlEKSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbENsb3NlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgJGZpZWxkLnJlbW92ZUNsYXNzKCdkZWxldGluZycpO1xuICAgIH0sIGZhbHNlKTtcblxuICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgc3VyZSB0aGV5IHdhbnQgdG8gcmVtb3ZlIHRoZSBmaWVsZFxuICAgIGlmIChvcHRzLmZpZWxkUmVtb3ZlV2Fybikge1xuICAgICAgbGV0IHdhcm5IMyA9IHV0aWxzLm1hcmt1cCgnaDMnLCBpMThuLndhcm5pbmcpO1xuICAgICAgbGV0IHdhcm5NZXNzYWdlID0gdXRpbHMubWFya3VwKCdwJywgaTE4bi5maWVsZFJlbW92ZVdhcm5pbmcpO1xuICAgICAgaGVscGVycy5jb25maXJtKFt3YXJuSDMsIHdhcm5NZXNzYWdlXSwgKCkgPT5cbiAgICAgICAgaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCksIGNvb3Jkcyk7XG4gICAgICAkZmllbGQuYWRkQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlbHBlcnMucmVtb3ZlRmllbGQoZGVsZXRlSUQpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVXBkYXRlIGJ1dHRvbiBzdHlsZSBzZWxlY3Rpb25cbiAgJHN0YWdlLm9uKCdjbGljaycsICcuc3R5bGUtd3JhcCBidXR0b24nLCBlID0+IHtcbiAgICBjb25zdCAkYnV0dG9uID0gJChlLnRhcmdldCk7XG4gICAgbGV0IHN0eWxlVmFsID0gJGJ1dHRvbi52YWwoKTtcbiAgICBsZXQgJGJ0blN0eWxlID0gJGJ1dHRvbi5wYXJlbnQoKS5wcmV2KCcuYnRuLXN0eWxlJyk7XG4gICAgJGJ0blN0eWxlLnZhbChzdHlsZVZhbCk7XG4gICAgJGJ1dHRvbi5zaWJsaW5ncygnLmJ0bicpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICRidXR0b24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgaGVscGVycy51cGRhdGVQcmV2aWV3KCRidG5TdHlsZS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpKTtcbiAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcbiAgfSk7XG5cbiAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJlcXVpcmVkIGFzdGVyaXNrXG4gICRzdGFnZS5vbignY2xpY2snLCAnLmZsZC1yZXF1aXJlZCcsIGUgPT4ge1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykuZmluZCgnLnJlcXVpcmVkLWFzdGVyaXNrJykudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIHRvZ2dsZSByb2xlcyB2aXNpYmlsaXR5XG4gICRzdGFnZS5vbignY2xpY2snLCAnaW5wdXQuZmxkLWFjY2VzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgcm9sZXMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5hdmFpbGFibGUtcm9sZXMnKTtcbiAgICBsZXQgZW5hYmxlUm9sZXNDQiA9ICQoZS50YXJnZXQpO1xuICAgIHJvbGVzLnNsaWRlVG9nZ2xlKDI1MCwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWVuYWJsZVJvbGVzQ0IuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgcm9sZXMpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gYWRkIG5ldyBvcHRpb25zXG4gICRzdGFnZS5vbignY2xpY2snLCAnLmFkZC1vcHQnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCAkb3B0aW9uV3JhcCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5maWVsZC1vcHRpb25zJyk7XG4gICAgbGV0ICRtdWx0aXBsZSA9ICQoJ1tuYW1lPVwibXVsdGlwbGVcIl0nLCAkb3B0aW9uV3JhcCk7XG4gICAgbGV0ICRmaXJzdE9wdGlvbiA9ICQoJy5vcHRpb24tc2VsZWN0ZWQ6ZXEoMCknLCAkb3B0aW9uV3JhcCk7XG4gICAgbGV0IGlzTXVsdGlwbGUgPSBmYWxzZTtcblxuICAgIGlmICgkbXVsdGlwbGUubGVuZ3RoKSB7XG4gICAgICBpc011bHRpcGxlID0gJG11bHRpcGxlLnByb3AoJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNNdWx0aXBsZSA9ICgkZmlyc3RPcHRpb24uYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKTtcbiAgICB9XG5cbiAgICBsZXQgbmFtZSA9ICRmaXJzdE9wdGlvbi5hdHRyKCduYW1lJyk7XG5cbiAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRvcHRpb25XcmFwKS5hcHBlbmQoc2VsZWN0RmllbGRPcHRpb25zKG5hbWUsIGZhbHNlLCBpc011bHRpcGxlKSk7XG4gIH0pO1xuXG4gICRzdGFnZS5vbignbW91c2VvdmVyIG1vdXNlb3V0JywgJy5yZW1vdmUsIC5kZWwtYnV0dG9uJywgZSA9PlxuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJykudG9nZ2xlQ2xhc3MoJ2RlbGV0ZScpKTtcblxuICBsb2FkRmllbGRzKCk7XG5cbiAgJHN0YWdlLmNzcygnbWluLWhlaWdodCcsICRjYlVMLmhlaWdodCgpKTtcblxuICAvLyBJZiBvcHRpb24gc2V0LCBjb250cm9scyB3aWxsIHJlbWFpbiBpbiB2aWV3IGluIGVkaXRvclxuICBpZiAob3B0cy5zdGlja3lDb250cm9scy5lbmFibGUpIHtcbiAgICBoZWxwZXJzLnN0aWNreUNvbnRyb2xzKCRzdGFnZSk7XG4gIH1cblxuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5sb2FkZWQpO1xuXG4gIC8vIE1ha2UgYWN0aW9ucyBhY2Nlc3NpYmxlXG4gIGZvcm1CdWlsZGVyLmFjdGlvbnMgPSB7XG4gICAgY2xlYXJGaWVsZHM6IGFuaW1hdGUgPT4gaGVscGVycy5yZW1vdmVBbGxGaWVsZHMoZC5zdGFnZSwgYW5pbWF0ZSksXG4gICAgc2hvd0RhdGE6IGhlbHBlcnMuc2hvd0RhdGEuYmluZChoZWxwZXJzKSxcbiAgICBzYXZlOiBoZWxwZXJzLnNhdmUuYmluZChoZWxwZXJzKSxcbiAgICBhZGRGaWVsZDogKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgaGVscGVycy5zdG9wSW5kZXggPSBkYXRhLmZvcm1EYXRhLmxlbmd0aCA/IGluZGV4IDogdW5kZWZpbmVkO1xuICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5maWVsZEFkZGVkKTtcbiAgICB9LFxuICAgIHJlbW92ZUZpZWxkOiBoZWxwZXJzLnJlbW92ZUZpZWxkLmJpbmQoaGVscGVycyksXG4gICAgZ2V0RGF0YTogKHR5cGUgPSAnanMnKSA9PiB7XG4gICAgICBjb25zdCBzdGFnZSA9IGQuc3RhZ2U7XG4gICAgICBjb25zdCBoID0gaGVscGVycztcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGpzOiAoKSA9PiBoLnByZXBEYXRhKHN0YWdlKSxcbiAgICAgICAgeG1sOiAoKSA9PiBoLnhtbFNhdmUoc3RhZ2UpLFxuICAgICAgICBqc29uOiAoKSA9PiB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoaC5wcmVwRGF0YShzdGFnZSksIG51bGwsICdcXHQnKVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGRhdGFbdHlwZV0oKTtcbiAgICB9LFxuICAgIHNldERhdGE6IGZvcm1EYXRhID0+IHtcbiAgICAgIGhlbHBlcnMucmVtb3ZlQWxsRmllbGRzKGQuc3RhZ2UsIGZhbHNlKTtcbiAgICAgIGxvYWRGaWVsZHMoZm9ybURhdGEpO1xuICAgIH0sXG4gICAgc2V0TGFuZzogYXN5bmMgbG9jYWxlID0+IHtcbiAgICAgIGF3YWl0IG1pMThuLnNldEN1cnJlbnQuY2FsbChtaTE4biwgbG9jYWxlKTtcbiAgICAgIGQuZW1wdHkoZWxlbWVudCk7XG4gICAgICBsZXQgZm9ybUJ1aWxkZXIgPSBuZXcgRm9ybUJ1aWxkZXIob3JpZ2luYWxPcHRzLCBlbGVtZW50KTtcbiAgICAgICQoZWxlbWVudCkuZGF0YSgnZm9ybUJ1aWxkZXInLCBmb3JtQnVpbGRlcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBmb3JtQnVpbGRlcjtcbn07XG5cblxuKGZ1bmN0aW9uKCAkICkge1xuICAkLmZuLmZvcm1CdWlsZGVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBsZXQgZWxlbXMgPSB0aGlzO1xuICAgIGxldCB7aTE4biwgLi4ub3B0c30gPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIHRydWUpO1xuICAgIGNvbmZpZy5vcHRzID0gb3B0cztcbiAgICBsZXQgaTE4bk9wdHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdEkxOG4sIGkxOG4sIHRydWUpO1xuICAgIGxldCBpbnN0YW5jZSA9IHtcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgZ2V0RGF0YTogbnVsbCxcbiAgICAgICAgc2V0RGF0YTogbnVsbCxcbiAgICAgICAgc2F2ZTogbnVsbCxcbiAgICAgICAgc2hvd0RhdGE6IG51bGwsXG4gICAgICAgIHNldExhbmc6IG51bGwsXG4gICAgICAgIGFkZEZpZWxkOiBudWxsLFxuICAgICAgICByZW1vdmVGaWVsZDogbnVsbCxcbiAgICAgICAgY2xlYXJGaWVsZHM6IG51bGxcbiAgICAgIH0sXG4gICAgICBnZXQgZm9ybURhdGEoKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5hY3Rpb25zLmdldERhdGEoJ2pzb24nKTtcbiAgICAgIH0sXG4gICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbWkxOG4uaW5pdChpMThuT3B0cykudGhlbigoKSA9PiB7XG4gICAgICAgICAgZWxlbXMuZWFjaChpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcihvcHRzLCBlbGVtc1tpXSk7XG4gICAgICAgICAgICAkKGVsZW1zW2ldKS5kYXRhKCdmb3JtQnVpbGRlcicsIGZvcm1CdWlsZGVyKTtcbiAgICAgICAgICAgIGluc3RhbmNlLmFjdGlvbnMgPSBmb3JtQnVpbGRlci5hY3Rpb25zO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRlbGV0ZSBpbnN0YW5jZS5wcm9taXNlO1xuICAgICAgICAgIHJlc29sdmUoaW5zdGFuY2UpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufSkoIGpRdWVyeSApO1xuIiwiaW1wb3J0IHtpbnN0YW5jZURvbSwgZGVmYXVsdFN1YnR5cGVzLCBlbXB0eSwgb3B0aW9uRmllbGRzUmVnRXh9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7aW5zdGFuY2VEYXRhfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG4vLyBpbXBvcnQgbWkxOG4gZnJvbSAnbWkxOG4nO1xuaW1wb3J0IG1pMThuIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0RyYWdnYWJsZS9tSTE4Ti9taTE4bi9zcmMvbWkxOG4uanMnO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcblxuY29uc3Qgb3B0cyA9IGNvbmZpZy5vcHRzO1xuY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcblxuLyoqXG4gKiBVdGlsaXRpZXMgc3BlY2lmaWMgdG8gZm9ybS1idWlsZGVyLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xuICAvKipcbiAgICogU2V0dXAgZGVmYXVsdHMsIGdldCBpbnN0YW5jZSBkYXRhIGFuZCBkb21cbiAgICogQHBhcmFtICB7U3RyaW5nfSBmb3JtSUQgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3RydWN0b3IoZm9ybUlEKSB7XG4gICAgdGhpcy5kYXRhID0gaW5zdGFuY2VEYXRhW2Zvcm1JRF07XG4gICAgdGhpcy5kID0gaW5zdGFuY2VEb21bZm9ybUlEXTtcbiAgICB0aGlzLmRvQ2FuY2VsID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGJlZ2luc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIHN0YXJ0TW92aW5nKGV2ZW50LCB1aSkge1xuICAgIHVpLml0ZW0uc2hvdygpLmFkZENsYXNzKCdtb3ZpbmcnKTtcbiAgICB0aGlzLmRvQ2FuY2VsID0gdHJ1ZTtcbiAgICB0aGlzLmZyb20gPSB1aS5pdGVtLnBhcmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBlbmRzXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKi9cbiAgc3RvcE1vdmluZyhldmVudCwgdWkpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ21vdmluZycpO1xuICAgIGlmIChfdGhpcy5kb0NhbmNlbCkge1xuICAgICAgaWYgKHVpLnNlbmRlcikge1xuICAgICAgICAkKHVpLnNlbmRlcikuc29ydGFibGUoJ2NhbmNlbCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5mcm9tLnNvcnRhYmxlKCdjYW5jZWwnKTtcbiAgICB9XG4gICAgX3RoaXMuc2F2ZSgpO1xuICAgIF90aGlzLmRvQ2FuY2VsID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogalF1ZXJ5IFVJIHNvcnRhYmxlIGJlZm9yZVN0b3AgY2FsbGJhY2sgdXNlZCBmb3IgYm90aCBsaXN0cy5cbiAgICogTG9naWMgZm9yIGNhbmNlbGluZyB0aGUgc29ydCBvciBkcm9wLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGJlZm9yZVN0b3AoZXZlbnQsIHVpKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBvcHRzID0gY29uZmlnLm9wdHM7XG4gICAgY29uc3QgZm9ybSA9IF90aGlzLmQuc3RhZ2U7XG4gICAgbGV0IGxhc3RJbmRleCA9IGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggLSAxO1xuICAgIGxldCBjYW5jZWxBcnJheSA9IFtdO1xuICAgIF90aGlzLnN0b3BJbmRleCA9IHVpLnBsYWNlaG9sZGVyLmluZGV4KCkgLSAxO1xuXG4gICAgaWYgKCFvcHRzLnNvcnRhYmxlQ29udHJvbHMgJiYgdWkuaXRlbS5wYXJlbnQoKS5oYXNDbGFzcygnZnJtYi1jb250cm9sJykpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucHJlcGVuZCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaChfdGhpcy5zdG9wSW5kZXggPT09IDApO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCgoX3RoaXMuc3RvcEluZGV4ICsgMSkgPT09IGxhc3RJbmRleCk7XG4gICAgfVxuXG4gICAgX3RoaXMuZG9DYW5jZWwgPSBjYW5jZWxBcnJheS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBnZXQgZWxlbWVudCB0eXBlIGFuZCBzdWJ0eXBlXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gJGZpZWxkXG4gICAqIEByZXR1cm4ge09iamVjdH0ge3R5cGU6ICdmaWVsZFR5cGUnLCBzdWJ0eXBlOiAnZmllbGRTdWJUeXBlJ31cbiAgICovXG4gIGdldFR5cGVzKCRmaWVsZCkge1xuICAgIGxldCB0eXBlcyA9IHtcbiAgICAgICAgdHlwZTogJGZpZWxkLmF0dHIoJ3R5cGUnKVxuICAgICAgfTtcbiAgICBsZXQgc3VidHlwZSA9ICQoJy5mbGQtc3VidHlwZScsICRmaWVsZCkudmFsKCk7XG5cbiAgICBpZiAoc3VidHlwZSAhPT0gdHlwZXMudHlwZSkge1xuICAgICAgdHlwZXMuc3VidHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvcHRpb24gZGF0YSBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkIGpRdWVyeSBmaWVsZCBvYmplY3RcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBBcnJheSBvZiBvcHRpb24gdmFsdWVzXG4gICAqL1xuICBmaWVsZE9wdGlvbkRhdGEoZmllbGQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICRvcHRpb24pLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgIGxhYmVsOiAkKCcub3B0aW9uLWxhYmVsJywgJG9wdGlvbikudmFsKCksXG4gICAgICAgICAgdmFsdWU6ICQoJy5vcHRpb24tdmFsdWUnLCAkb3B0aW9uKS52YWwoKVxuICAgICAgICB9O1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5wdXNoKGF0dHJzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFhNTCBzYXZlXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybSBzb3J0YWJsZUZpZWxkcyBub2RlXG4gICAqIEByZXR1cm4ge1N0cmluZ30geG1sIGluIHN0cmluZ1xuICAgKi9cbiAgeG1sU2F2ZShmb3JtKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gdGhpcy5wcmVwRGF0YShmb3JtKTtcbiAgICBsZXQgeG1sID0gWyc8Zm9ybS10ZW1wbGF0ZT5cXG5cXHQ8ZmllbGRzPiddO1xuXG4gICAgdXRpbHMuZm9yRWFjaChmb3JtRGF0YSwgZnVuY3Rpb24oZmllbGRJbmRleCwgZmllbGQpIHtcbiAgICAgIGxldCBmaWVsZENvbnRlbnQgPSBudWxsO1xuICAgICAgY29uc3Qgb3B0aW9uRmllbGRzID0gb3B0aW9uRmllbGRzUmVnRXg7XG5cbiAgICAgIC8vIEhhbmRsZSBvcHRpb25zXG4gICAgICBpZiAoZmllbGQudHlwZS5tYXRjaChvcHRpb25GaWVsZHMpKSB7XG4gICAgICAgIGxldCBvcHRpb25EYXRhID0gZmllbGQudmFsdWVzO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBvcHRpb24gPSBtKCdvcHRpb24nLCBvcHRpb25EYXRhW2ldLmxhYmVsLCBvcHRpb25EYXRhW2ldKS5vdXRlckhUTUw7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKCdcXG5cXHRcXHRcXHQnICsgb3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdCcpO1xuXG4gICAgICAgIGZpZWxkQ29udGVudCA9IG9wdGlvbnMuam9pbignJyk7XG4gICAgICAgIGRlbGV0ZSBmaWVsZC52YWx1ZXM7XG4gICAgICB9XG5cbiAgICAgIGxldCB4bWxGaWVsZCA9IG0oJ2ZpZWxkJywgZmllbGRDb250ZW50LCBmaWVsZCk7XG4gICAgICB4bWwucHVzaCgnXFxuXFx0XFx0JyArIHhtbEZpZWxkLm91dGVySFRNTCk7XG4gICAgfSk7XG5cbiAgICB4bWwucHVzaCgnXFxuXFx0PC9maWVsZHM+XFxuPC9mb3JtLXRlbXBsYXRlPicpO1xuXG4gICAgcmV0dXJuIHhtbC5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZm9ybURhdGEgZnJvbSBlZGl0b3IgaW4gSlMgT2JqZWN0IGZvcm1hdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZvcm0gYWthIHN0YWdlLCBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGZvcm1EYXRhXG4gICAqL1xuICBwcmVwRGF0YShmb3JtKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG4gICAgbGV0IGQgPSB0aGlzLmQ7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGlmIChmb3JtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBidWlsZCBkYXRhIG9iamVjdFxuICAgICAgdXRpbHMuZm9yRWFjaChmb3JtLmNoaWxkTm9kZXMsIGFzeW5jIGZ1bmN0aW9uKGluZGV4LCBmaWVsZCkge1xuICAgICAgICBsZXQgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgaWYgKCEoJGZpZWxkLmhhc0NsYXNzKCdkaXNhYmxlZC1maWVsZCcpKSkge1xuICAgICAgICAgIGxldCBmaWVsZERhdGEgPSBfdGhpcy5nZXRUeXBlcygkZmllbGQpO1xuICAgICAgICAgIGxldCByb2xlVmFscyA9ICQoJy5yb2xlcy1maWVsZDpjaGVja2VkJywgZmllbGQpLm1hcChlbGVtID0+IGVsZW0udmFsdWUpLmdldCgpO1xuXG4gICAgICAgICAgX3RoaXMuc2V0QXR0clZhbHMoZmllbGQsIGZpZWxkRGF0YSk7XG5cbiAgICAgICAgICBpZiAoZmllbGREYXRhLnN1YnR5cGUpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZERhdGEuc3VidHlwZSA9PT0gJ3F1aWxsJykge1xuICAgICAgICAgICAgICBsZXQgaWQgPSBgJHtmaWVsZERhdGEubmFtZX0tcHJldmlld2A7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2lkXSkge1xuICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbaWRdLmluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBpbnN0YW5jZS5nZXRDb250ZW50cygpO1xuICAgICAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZSA9IHdpbmRvdy5KU09OLnN0cmluZ2lmeShkYXRhLm9wcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZihmaWVsZERhdGEuc3VidHlwZSA9PT0gJ3RpbnltY2UnICYmIHdpbmRvdy50aW55bWNlKSB7XG4gICAgICAgICAgICAgIGxldCBpZCA9IGAke2ZpZWxkRGF0YS5uYW1lfS1wcmV2aWV3YDtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy50aW55bWNlLmVkaXRvcnNbaWRdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVkaXRvciA9IHdpbmRvdy50aW55bWNlLmVkaXRvcnNbaWRdO1xuICAgICAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZSA9IGVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocm9sZVZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEucm9sZSA9IHJvbGVWYWxzLmpvaW4oJywnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZERhdGEuY2xhc3NOYW1lID0gZmllbGREYXRhLmNsYXNzTmFtZSB8fCBmaWVsZERhdGEuY2xhc3M7XG5cbiAgICAgICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZERhdGEuY2xhc3NOYW1lKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZmllbGREYXRhKTtcblxuICAgICAgICAgIGxldCBtdWx0aXBsZUZpZWxkID0gZmllbGREYXRhLnR5cGUubWF0Y2goZC5vcHRpb25GaWVsZHNSZWdFeCk7XG5cbiAgICAgICAgICBpZiAobXVsdGlwbGVGaWVsZCkge1xuICAgICAgICAgICAgZmllbGREYXRhLnZhbHVlcyA9IF90aGlzLmZpZWxkT3B0aW9uRGF0YSgkZmllbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvcm1EYXRhLnB1c2goZmllbGREYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbmQgc2V0IHRoZSBkYXRhIGZvciBhbiBlZGl0b3IuIE1haW5seVxuICAgKiBhIHdyYXBwZXIgZm9yIGhhbmRsaW5nIGRhdGFUeXBlIG9wdGlvblxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZvcm1EYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gZm9ybURhdGFcbiAgICovXG4gIGdldERhdGEoZm9ybURhdGEpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICBpZiAoIWZvcm1EYXRhKSB7XG4gICAgICBmb3JtRGF0YSA9IGNvbmZpZy5vcHRzLmZvcm1EYXRhO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGF0YSA9IHtcbiAgICAgIHhtbDogZm9ybURhdGEgPT4gdXRpbHMucGFyc2VYTUwoZm9ybURhdGEpLFxuICAgICAganNvbjogZm9ybURhdGEgPT4gd2luZG93LkpTT04ucGFyc2UoZm9ybURhdGEpXG4gICAgfTtcblxuICAgIGRhdGEuZm9ybURhdGEgPSBzZXREYXRhW2NvbmZpZy5vcHRzLmRhdGFUeXBlXShmb3JtRGF0YSkgfHwgW107XG5cbiAgICByZXR1cm4gZGF0YS5mb3JtRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBhbmQgcmV0dXJucyBmb3JtRGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhZ2UgRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7WE1MfEpTT059IGZvcm1EYXRhXG4gICAqL1xuICBzYXZlKHN0YWdlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICBpZighc3RhZ2UpIHtcbiAgICAgIHN0YWdlID0gdGhpcy5kLnN0YWdlO1xuICAgIH1cbiAgICBsZXQgZG9TYXZlID0ge1xuICAgICAgeG1sOiBfdGhpcy54bWxTYXZlLFxuICAgICAganNvbjogKCkgPT5cbiAgICAgIHdpbmRvdy5KU09OLnN0cmluZ2lmeShfdGhpcy5wcmVwRGF0YShzdGFnZSksIG51bGwsICdcXHQnKVxuICAgIH07XG5cbiAgICAvLyBzYXZlIGFjdGlvbiBmb3IgY3VycmVudCBgZGF0YVR5cGVgXG4gICAgZGF0YS5mb3JtRGF0YSA9IGRvU2F2ZVtjb25maWcub3B0cy5kYXRhVHlwZV0oc3RhZ2UpO1xuXG4gICAgLy8gdHJpZ2dlciBmb3JtU2F2ZWQgZXZlbnRcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5mb3JtU2F2ZWQpO1xuICAgIHJldHVybiBkYXRhLmZvcm1EYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIGluY3JlbWVudHMgdGhlIGZpZWxkIGlkcyB3aXRoIHN1cHBvcnQgZm9yIG11bHRpcGxlIGVkaXRvcnNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBpZCBmaWVsZCBJRFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgIGluY3JlbWVudGVkIGZpZWxkIElEXG4gICAqL1xuICBpbmNyZW1lbnRJZChpZCkge1xuICAgIGxldCBzcGxpdCA9IGlkLmxhc3RJbmRleE9mKCctJyk7XG4gICAgbGV0IG5ld0ZpZWxkTnVtYmVyID0gcGFyc2VJbnQoaWQuc3Vic3RyaW5nKHNwbGl0ICsgMSkpICsgMTtcbiAgICBsZXQgYmFzZVN0cmluZyA9IGlkLnN1YnN0cmluZygwLCBzcGxpdCk7XG5cbiAgICByZXR1cm4gYCR7YmFzZVN0cmluZ30tJHtuZXdGaWVsZE51bWJlcn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmFsdWVzIGZvciBmaWVsZCBhdHRyaWJ1dGVzIGluIHRoZSBlZGl0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZERhdGFcbiAgICovXG4gIHNldEF0dHJWYWxzKGZpZWxkLCBmaWVsZERhdGEpIHtcbiAgICBsZXQgYXR0cnMgPSBmaWVsZC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwiZmxkLVwiXScpO1xuICAgIGF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBsZXQgdmFsdWU7XG4gICAgICBsZXQgbmFtZSA9IHV0aWxzLmNhbWVsQ2FzZShhdHRyLmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgIGlmIChhdHRyLmF0dHJpYnV0ZXNbJ2NvbnRlbnRlZGl0YWJsZSddKSB7XG4gICAgICAgIHZhbHVlID0gYXR0ci5pbm5lckhUTUw7XG4gICAgICB9IGVsc2UgaWYgKGF0dHIudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICB2YWx1ZSA9IGF0dHIuY2hlY2tlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgIH1cbiAgICAgIGZpZWxkRGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3QgZmllbGQgYXR0cmlidXRlIHZhbHVlcyBhbmQgY2FsbCBmaWVsZFByZXZpZXcgdG8gZ2VuZXJhdGUgcHJldmlld1xuICAgKiBAcGFyYW0gIHtPYmplY3R9ICRmaWVsZCBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICovXG4gIHVwZGF0ZVByZXZpZXcoJGZpZWxkKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgZCA9IHRoaXMuZDtcbiAgICBjb25zdCBmaWVsZENsYXNzID0gJGZpZWxkLmF0dHIoJ2NsYXNzJyk7XG4gICAgbGV0IGZpZWxkID0gJGZpZWxkWzBdO1xuICAgIGlmIChmaWVsZENsYXNzLmluZGV4T2YoJ2lucHV0LWNvbnRyb2wnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmllbGRUeXBlID0gJGZpZWxkLmF0dHIoJ3R5cGUnKTtcbiAgICBsZXQgJHByZXZIb2xkZXIgPSAkKCcucHJldi1ob2xkZXInLCBmaWVsZCk7XG4gICAgbGV0IHByZXZpZXdEYXRhID0ge1xuICAgICAgdHlwZTogZmllbGRUeXBlXG4gICAgfTtcbiAgICBsZXQgcHJldmlldztcblxuICAgIF90aGlzLnNldEF0dHJWYWxzKGZpZWxkLCBwcmV2aWV3RGF0YSk7XG5cbiAgICBsZXQgc3R5bGUgPSAkKCcuYnRuLXN0eWxlJywgZmllbGQpLnZhbCgpO1xuICAgIGlmIChzdHlsZSkge1xuICAgICAgcHJldmlld0RhdGEuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGRUeXBlLm1hdGNoKGQub3B0aW9uRmllbGRzUmVnRXgpKSB7XG4gICAgICBwcmV2aWV3RGF0YS52YWx1ZXMgPSBbXTtcbiAgICAgIHByZXZpZXdEYXRhLm11bHRpcGxlID0gJCgnW25hbWU9XCJtdWx0aXBsZVwiXScsIGZpZWxkKS5pcygnOmNoZWNrZWQnKTtcblxuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbihpLCAkb3B0aW9uKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB7fTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICRvcHRpb24pLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSAkKCcub3B0aW9uLXZhbHVlJywgJG9wdGlvbikudmFsKCk7XG4gICAgICAgIG9wdGlvbi5sYWJlbCA9ICQoJy5vcHRpb24tbGFiZWwnLCAkb3B0aW9uKS52YWwoKTtcbiAgICAgICAgcHJldmlld0RhdGEudmFsdWVzLnB1c2gob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHByZXZpZXdEYXRhID0gdXRpbHMudHJpbU9iaihwcmV2aWV3RGF0YSk7XG5cbiAgICBwcmV2aWV3RGF0YS5jbGFzc05hbWUgPSBfdGhpcy5jbGFzc05hbWVzKGZpZWxkLCBwcmV2aWV3RGF0YSk7XG4gICAgJCgnLmZsZC1jbGFzc05hbWUnLCBmaWVsZCkudmFsKHByZXZpZXdEYXRhLmNsYXNzTmFtZSk7XG5cbiAgICAkZmllbGQuZGF0YSgnZmllbGREYXRhJywgcHJldmlld0RhdGEpO1xuICAgIHByZXZpZXcgPSB1dGlscy5nZXRUZW1wbGF0ZShwcmV2aWV3RGF0YSwgdHJ1ZSk7XG5cbiAgICBlbXB0eSgkcHJldkhvbGRlclswXSk7XG4gICAgJHByZXZIb2xkZXJbMF0uYXBwZW5kQ2hpbGQocHJldmlldyk7XG4gICAgcHJldmlldy5kaXNwYXRjaEV2ZW50KGV2ZW50cy5maWVsZFJlbmRlcmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGEgY3VzdG9tIHRvb2x0aXAgZm9yIGRpc2FibGVkIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICAgKi9cbiAgZGlzYWJsZWRUVChzdGFnZSkge1xuICAgIGNvbnN0IG1vdmUgPSAoZSwgZWxlbSkgPT4ge1xuICAgICAgY29uc3QgZmllbGRPZmZzZXQgPSBlbGVtLmZpZWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIGZpZWxkT2Zmc2V0LmxlZnQgLSAyMTtcbiAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSBmaWVsZE9mZnNldC50b3AgLSBlbGVtLnR0Lm9mZnNldEhlaWdodCAtIDEyO1xuICAgICAgZWxlbS50dC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gICAgfTtcblxuICAgIHN0YWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaXNhYmxlZC1maWVsZCcpLmZvckVhY2goXG4gICAgICBmaWVsZCA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IG9wdHMubWVzc2FnZXMuZmllbGROb25FZGl0YWJsZTtcblxuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICBsZXQgdHQgPSB1dGlscy5tYXJrdXAoJ3AnLCB0aXRsZSwge2NsYXNzTmFtZTogJ2ZybWItdHQnfSk7XG4gICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodHQpO1xuICAgICAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gbW92ZShlLCB7dHQsIGZpZWxkfSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIGNsYXNzTmFtZXMgZm9yIGZpZWxkXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBwcmV2aWV3RGF0YVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGNsYXNzTmFtZXNcbiAgICovXG4gIGNsYXNzTmFtZXMoZmllbGQsIHByZXZpZXdEYXRhKSB7XG4gICAgbGV0IGk7XG4gICAgbGV0IHR5cGUgPSBwcmV2aWV3RGF0YS50eXBlO1xuICAgIGxldCBzdHlsZSA9IHByZXZpZXdEYXRhLnN0eWxlO1xuICAgIGxldCBjbGFzc05hbWUgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKCcuZmxkLWNsYXNzTmFtZScpLnZhbHVlO1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgbGV0IHR5cGVzID0ge1xuICAgICAgYnV0dG9uOiAnYnRuJyxcbiAgICAgIHN1Ym1pdDogJ2J0bidcbiAgICB9O1xuXG4gICAgbGV0IHByaW1hcnlUeXBlID0gdHlwZXNbdHlwZV07XG5cbiAgICBpZiAocHJpbWFyeVR5cGUpIHtcbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoYCg/Ol58XFxzKSR7cHJpbWFyeVR5cGV9LSguKj8pKD86XFxzfCQpK2AsICdnJyk7XG4gICAgICAgICAgbGV0IG1hdGNoID0gY2xhc3Nlc1tpXS5tYXRjaChyZSk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlICsgJy0nICsgc3R5bGUpO1xuICAgICAgfVxuICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlKTtcbiAgICB9XG5cbiAgICAvLyByZXZlcnNlIHRoZSBhcnJheSB0byBwdXQgY3VzdG9tIGNsYXNzZXMgYXQgZW5kLFxuICAgIC8vIHJlbW92ZSBhbnkgZHVwbGljYXRlcywgY29udmVydCB0byBzdHJpbmcsIHJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgcmV0dXJuIHV0aWxzLnVuaXF1ZShjbGFzc2VzKS5qb2luKCcgJykudHJpbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbmQgb3BlbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvdmVybGF5IEV4aXN0aW5nIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGlhbG9nICBFeGlzdGluZyBkaWFsb2dcbiAgICovXG4gIGNsb3NlQ29uZmlybShvdmVybGF5LCBkaWFsb2cpIHtcbiAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItb3ZlcmxheScpWzBdO1xuICAgIH1cbiAgICBpZiAoIWRpYWxvZykge1xuICAgICAgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1idWlsZGVyLWRpYWxvZycpWzBdO1xuICAgIH1cbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5tb2RhbENsb3NlZCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF5b3V0IGRhdGEgYmFzZWQgb24gY29udHJvbFBvc2l0aW9uIG9wdGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbnRyb2xQb3NpdGlvbiAnbGVmdCcgb3IgJ3JpZ2h0J1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IGxheW91dCBvYmplY3RcbiAgICovXG4gIGVkaXRvckxheW91dChjb250cm9sUG9zaXRpb24pIHtcbiAgICBsZXQgbGF5b3V0TWFwID0ge1xuICAgICAgbGVmdDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtcmlnaHQnLFxuICAgICAgICBjb250cm9sczogJ3B1bGwtbGVmdCdcbiAgICAgIH0sXG4gICAgICByaWdodDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtbGVmdCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1yaWdodCdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGxheW91dE1hcFtjb250cm9sUG9zaXRpb25dID8gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG92ZXJsYXkgdG8gdGhlIHBhZ2UuIFVzZWQgZm9yIG1vZGFscy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gT2JqZWN0XG4gICAqL1xuICBzaG93T3ZlcmxheSgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IG92ZXJsYXkgPSB1dGlscy5tYXJrdXAoJ2RpdicsIG51bGwsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Zvcm0tYnVpbGRlci1vdmVybGF5J1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cbiAgICBvdmVybGF5Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbWVzc2FnZSAgIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7RnVuY30gIHllc0FjdGlvbiBjYWxsYmFjayB0byBmaXJlIGlmIHRoZXkgY29uZmlybVxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgbG9jYXRpb24gdG8gcHV0IHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIEN1c3RvbSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBSZWZlcmVuY2UgdG8gdGhlIG1vZGFsXG4gICAqL1xuICBjb25maXJtKG1lc3NhZ2UsIHllc0FjdGlvbiwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBpMThuID0gbWkxOG4uY3VycmVudDtcbiAgICBsZXQgb3ZlcmxheSA9IF90aGlzLnNob3dPdmVybGF5KCk7XG4gICAgbGV0IHllcyA9IG0oJ2J1dHRvbicsIGkxOG4ueWVzLCB7XG4gICAgICBjbGFzc05hbWU6ICd5ZXMgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSdcbiAgICB9KTtcbiAgICBsZXQgbm8gPSBtKCdidXR0b24nLCBpMThuLm5vLCB7XG4gICAgICBjbGFzc05hbWU6ICdubyBidG4gYnRuLWRhbmdlciBidG4tc20nXG4gICAgfSk7XG5cbiAgICBuby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHllcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB5ZXNBY3Rpb24oKTtcbiAgICAgIF90aGlzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgbGV0IGJ0bldyYXAgPSBtKCdkaXYnLCBbbm8sIHllc10sIHtjbGFzc05hbWU6ICdidXR0b24td3JhcCd9KTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gbSgnZGl2JywgW21lc3NhZ2UsIGJ0bldyYXBdLCB7Y2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvbnN0IGRFID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgY29vcmRzID0ge1xuICAgICAgICBwYWdlWDogTWF0aC5tYXgoZEUuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIC8gMixcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGRFLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIC8gMlxuICAgICAgfTtcbiAgICAgIG1pbmlNb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlNb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XG4gICAgfVxuXG4gICAgbWluaU1vZGFsLnN0eWxlLmxlZnQgPSBjb29yZHMucGFnZVggKyAncHgnO1xuICAgIG1pbmlNb2RhbC5zdHlsZS50b3AgPSBjb29yZHMucGFnZVkgKyAncHgnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtaW5pTW9kYWwpO1xuXG4gICAgeWVzLmZvY3VzKCk7XG4gICAgcmV0dXJuIG1pbmlNb2RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1cCBkaWFsb2cgdGhlIGRvZXMgbm90IHJlcXVpcmUgY29uZmlybWF0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8RE9NfEFycmF5fSAgY29udGVudFxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgZmFsc2UgaWYgbm8gY29vcmRzIGFyZSBwcm92aWRlZC4gV2l0aG91dCBjb29yZGluYXRlc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGNlbnRlciBzY3JlZW4uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGNsYXNzTmFtZSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8gdGhlIGRpYWxvZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgZG9tXG4gICAqL1xuICBkaWFsb2coY29udGVudCwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBfdGhpcy5zaG93T3ZlcmxheSgpO1xuXG4gICAgY2xhc3NOYW1lID0gJ2Zvcm0tYnVpbGRlci1kaWFsb2cgJyArIGNsYXNzTmFtZTtcblxuICAgIGxldCBtaW5pTW9kYWwgPSB1dGlscy5tYXJrdXAoJ2RpdicsIGNvbnRlbnQsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChjbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgLyAyLFxuICAgICAgICBwYWdlWTogTWF0aC5tYXgoY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgLyAyXG4gICAgICB9O1xuICAgICAgbWluaU1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWluaU1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcbiAgICB9XG5cbiAgICBtaW5pTW9kYWwuc3R5bGUubGVmdCA9IGNvb3Jkcy5wYWdlWCArICdweCc7XG4gICAgbWluaU1vZGFsLnN0eWxlLnRvcCA9IGNvb3Jkcy5wYWdlWSArICdweCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1pbmlNb2RhbCk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5tb2RhbE9wZW5lZCk7XG5cbiAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJ2RhdGEtZGlhbG9nJykgIT09IC0xKSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy52aWV3RGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pbmlNb2RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maXJtIGFsbCBmaWVsZHMgd2lsbCBiZSByZW1vdmVkIHRoZW4gcmVtb3ZlIHRoZW1cbiAgICogQHBhcmFtICB7T2JqZWN0fSBlIGNsaWNrIGV2ZW50IG9iamVjdFxuICAgKi9cbiAgY29uZmlybVJlbW92ZUFsbChlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgZm9ybUlEID0gZS50YXJnZXQuaWQubWF0Y2goL2ZybWItXFxkezEzfS8pWzBdO1xuICAgIGxldCBzdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JRCk7XG4gICAgbGV0IGkxOG4gPSBtaTE4bi5jdXJyZW50O1xuICAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgc3RhZ2UpO1xuICAgIGxldCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgIH07XG5cbiAgICBpZiAoZmllbGRzLmxlbmd0aCkge1xuICAgICAgX3RoaXMuY29uZmlybShpMThuLmNsZWFyQWxsTWVzc2FnZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZUFsbEZpZWxkcy5jYWxsKF90aGlzLCBzdGFnZSk7XG4gICAgICAgIGNvbmZpZy5vcHRzLm5vdGlmeS5zdWNjZXNzKGkxOG4uYWxsRmllbGRzUmVtb3ZlZCk7XG4gICAgICAgIGNvbmZpZy5vcHRzLm9uQ2xlYXJBbGwoKTtcbiAgICAgIH0sIGNvb3Jkcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLmRpYWxvZyhpMThuLm5vRmllbGRzVG9DbGVhciwgY29vcmRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgZmllbGRzIGZyb20gdGhlIGZvcm1cbiAgICogQHBhcmFtIHtCb29sZWFufSBhbmltYXRlIHdoZXRoZXIgdG8gYW5pbWF0ZSBvciBub3RcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlbW92ZUFsbEZpZWxkcyhzdGFnZSwgYW5pbWF0ZSA9IHRydWUpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBpMThuID0gbWkxOG4uY3VycmVudDtcbiAgICBsZXQgb3B0cyA9IGNvbmZpZy5vcHRzO1xuICAgIGxldCBmaWVsZHMgPSBzdGFnZS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgbGV0IG1hcmtFbXB0eUFycmF5ID0gW107XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCkge1xuICAgICAgbWFya0VtcHR5QXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIW1hcmtFbXB0eUFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgc3RhZ2UucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgc3RhZ2UucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbnRlbnQgPSBpMThuLmdldFN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgIHN0YWdlLmNsYXNzTGlzdC5hZGQoJ3JlbW92aW5nJyk7XG4gICAgICBsZXQgb3V0ZXJIZWlnaHQgPSAwO1xuICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4gb3V0ZXJIZWlnaHQgKz0gZmllbGQub2Zmc2V0SGVpZ2h0ICsgMyk7XG4gICAgICBmaWVsZHNbMF0uc3R5bGUubWFyZ2luVG9wID0gYCR7LW91dGVySGVpZ2h0fXB4YDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbXB0eShzdGFnZSkuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZpbmcnKTtcbiAgICAgICAgX3RoaXMuc2F2ZShzdGFnZSk7XG4gICAgICB9LCA0MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbXB0eShzdGFnZSk7XG4gICAgICBfdGhpcy5zYXZlKHN0YWdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgdXNlciByZS1vcmRlcnMgdGhlIGVsZW1lbnRzIHRoZWlyIG9yZGVyIHNob3VsZCBiZSBzYXZlZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRjYlVMIG91ciBsaXN0IG9mIGVsZW1lbnRzXG4gICAqL1xuICBzZXRGaWVsZE9yZGVyKCRjYlVMKSB7XG4gICAgaWYgKCFjb25maWcub3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkT3JkZXIgPSB7fTtcblxuICAgICRjYlVMLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgZmllbGRPcmRlcltpbmRleF0gPSAkKGVsZW1lbnQpLmRhdGEoJ3R5cGUnKTtcbiAgICB9KTtcblxuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaWVsZE9yZGVyJywgd2luZG93LkpTT04uc3RyaW5naWZ5KGZpZWxkT3JkZXIpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVvcmRlciB0aGUgY29udHJvbHMgaWYgdGhlIHVzZXIgaGFzIHByZXZpb3VzbHkgb3JkZXJlZCB0aGVtLlxuICAgKlxuICAgKiBAcGFyYW0gIHtBcnJheX0gZnJtYkZpZWxkc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gb3JkZXJlZCBmaWVsZHNcbiAgICovXG4gIG9yZGVyRmllbGRzKGZybWJGaWVsZHMpIHtcbiAgICBjb25zdCBvcHRzID0gY29uZmlnLm9wdHM7XG4gICAgbGV0IGZpZWxkT3JkZXIgPSBmYWxzZTtcbiAgICBsZXQgbmV3T3JkZXJGaWVsZHMgPSBbXTtcblxuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIGlmIChvcHRzLnNvcnRhYmxlQ29udHJvbHMpIHtcbiAgICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnZmllbGRPcmRlcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZmllbGRPcmRlcikge1xuICAgICAgbGV0IGNvbnRyb2xPcmRlciA9IG9wdHMuY29udHJvbE9yZGVyLmNvbmNhdChmcm1iRmllbGRzLm1hcChmaWVsZCA9PlxuICAgICAgICBmaWVsZC5hdHRycy50eXBlKSk7XG4gICAgICBmaWVsZE9yZGVyID0gdXRpbHMudW5pcXVlKGNvbnRyb2xPcmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkT3JkZXIgPSB3aW5kb3cuSlNPTi5wYXJzZShmaWVsZE9yZGVyKTtcbiAgICAgIGZpZWxkT3JkZXIgPSBPYmplY3Qua2V5cyhmaWVsZE9yZGVyKS5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgICByZXR1cm4gZmllbGRPcmRlcltpXTtcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZmllbGRPcmRlci5mb3JFYWNoKChmaWVsZFR5cGUpID0+IHtcbiAgICAgIGxldCBmaWVsZCA9IGZybWJGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBmaWVsZC5hdHRycy50eXBlID09PSBmaWVsZFR5cGU7XG4gICAgICB9KVswXTtcbiAgICAgIG5ld09yZGVyRmllbGRzLnB1c2goZmllbGQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld09yZGVyRmllbGRzLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBmaWVsZHMgYmVpbmcgZWRpdGluZ1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXG4gICAqL1xuICBjbG9zZUFsbEVkaXQoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnN0IGZpZWxkcyA9ICQoJz4gbGkuZWRpdGluZycsIF90aGlzLmQuc3RhZ2UpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAkKCcudG9nZ2xlLWZvcm0nLCBfdGhpcy5kLnN0YWdlKTtcbiAgICBjb25zdCBlZGl0UGFuZWxzID0gJCgnLmZybS1ob2xkZXInLCBmaWVsZHMpO1xuXG4gICAgdG9nZ2xlQnRucy5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgIGZpZWxkcy5yZW1vdmVDbGFzcygnZWRpdGluZycpO1xuICAgICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkcykuc2hvdygpO1xuICAgIGVkaXRQYW5lbHMuaGlkZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGVkaXQgbW9kZSBmb3IgdGhlIGdpdmVuIGZpZWxkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZmllbGRJZFxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBhbmltYXRlXG4gICAqL1xuICB0b2dnbGVFZGl0KGZpZWxkSWQsIGFuaW1hdGUgPSB0cnVlKSB7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElkKTtcbiAgICBjb25zdCB0b2dnbGVCdG4gPSAkKCcudG9nZ2xlLWZvcm0nLCBmaWVsZCk7XG4gICAgY29uc3QgZWRpdFBhbmVsID0gJCgnLmZybS1ob2xkZXInLCBmaWVsZCk7XG4gICAgZmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZycpO1xuICAgIHRvZ2dsZUJ0bi50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZCkuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICAgIGVkaXRQYW5lbC5zbGlkZVRvZ2dsZSgyNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZCkudG9nZ2xlKCk7XG4gICAgICBlZGl0UGFuZWwudG9nZ2xlKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlldygkKGZpZWxkKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIHN0aWNreUNvbnRyb2xzKCkge1xuICAgIGxldCBkID0gdGhpcy5kO1xuICAgIGNvbnN0ICRjYldyYXAgPSAkKGQuY29udHJvbHMpLnBhcmVudCgpO1xuICAgIGNvbnN0ICRzdGFnZVdyYXAgPSAkKGQuc3RhZ2UpLnBhcmVudCgpO1xuICAgIGNvbnN0IGNiV2lkdGggPSAkY2JXcmFwLndpZHRoKCk7XG4gICAgY29uc3QgY2JQb3NpdGlvbiA9IGQuY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQoZXZ0LnRhcmdldCkuc2Nyb2xsVG9wKCk7XG4gICAgICBjb25zdCBvZmZzZXREZWZhdWx0cyA9IHtcbiAgICAgICAgdG9wOiA1LFxuICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgbGVmdDogY2JQb3NpdGlvbi5sZWZ0XG4gICAgICB9O1xuXG4gICAgICBsZXQgb2Zmc2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Zmc2V0RGVmYXVsdHMsIGNvbmZpZy5vcHRzLnN0aWNreUNvbnRyb2xzLm9mZnNldCk7XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPiAkc3RhZ2VXcmFwLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogY2JXaWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNiU3R5bGUgPSBPYmplY3QuYXNzaWduKHN0eWxlLCBvZmZzZXQpO1xuXG4gICAgICAgIGxldCBjYk9mZnNldCA9ICRjYldyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBzdGFnZU9mZnNldCA9ICRzdGFnZVdyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBjYkJvdHRvbSA9IGNiT2Zmc2V0LnRvcCArICRjYldyYXAuaGVpZ2h0KCk7XG4gICAgICAgIGxldCBzdGFnZUJvdHRvbSA9IHN0YWdlT2Zmc2V0LnRvcCArICRzdGFnZVdyYXAuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGNiQm90dG9tID4gc3RhZ2VCb3R0b20gJiYgKGNiT2Zmc2V0LnRvcCAhPT0gc3RhZ2VPZmZzZXQudG9wKSkge1xuICAgICAgICAgICRjYldyYXAuY3NzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNiQm90dG9tIDwgc3RhZ2VCb3R0b20gfHwgKGNiQm90dG9tID09PSBzdGFnZUJvdHRvbSAmJiBjYk9mZnNldC50b3AgPiBzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3MoY2JTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGQuY29udHJvbHMucGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIGRpYWxvZyB3aXRoIHRoZSBmb3JtJ3MgZGF0YVxuICAgKi9cbiAgc2hvd0RhdGEoZSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgY29uc3QgZm9ybURhdGEgPSB1dGlscy5lc2NhcGVIdG1sKGRhdGEuZm9ybURhdGEpO1xuICAgIGNvbnN0IGNvZGUgPSBtKCdjb2RlJywgZm9ybURhdGEsIHtcbiAgICAgIGNsYXNzTmFtZTogYGZvcm1EYXRhLSR7Y29uZmlnLm9wdHMuZGF0YVR5cGV9YFxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2cobSgncHJlJywgY29kZSksIG51bGwsICdkYXRhLWRpYWxvZycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGZpZWxkIGZyb20gdGhlIHN0YWdlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGZpZWxkSUQgSUQgb2YgdGhlIGZpZWxkIHRvIGJlIHJlbW92ZWRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gZmllbGRSZW1vdmVkIHJldHVybnMgdHJ1ZSBpZiBmaWVsZCBpcyByZW1vdmVkXG4gICAqL1xuICByZW1vdmVGaWVsZChmaWVsZElEKSB7XG4gICAgbGV0IGZpZWxkUmVtb3ZlZCA9IGZhbHNlO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZC5zdGFnZTtcbiAgICBjb25zdCBmaWVsZHMgPSBmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tZmllbGQnKTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKCdObyBmaWVsZHMgdG8gcmVtb3ZlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZElEKSB7XG4gICAgICBsZXQgYXZhaWxhYmxlSWRzID0gW10uc2xpY2UuY2FsbChmaWVsZHMpLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmlkO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLndhcm4oJ2ZpZWxkSUQgcmVxdWlyZWQgdG8gcmVtb3ZlIHNwZWNpZmljIGZpZWxkcy4gUmVtb3ZpbmcgbGFzdCBmaWVsZCBzaW5jZSBubyBJRCB3YXMgc3VwcGxpZWQuJyk7XG4gICAgICBjb25zb2xlLndhcm4oJ0F2YWlsYWJsZSBJRHM6ICcgKyBhdmFpbGFibGVJZHMuam9pbignLCAnKSk7XG4gICAgICBmaWVsZElEID0gZm9ybS5sYXN0Q2hpbGQuaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElEKTtcbiAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZpZWxkIG5vdCBmb3VuZCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICRmaWVsZC5zbGlkZVVwKDI1MCwgZnVuY3Rpb24oKSB7XG4gICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICAkZmllbGQucmVtb3ZlKCk7XG4gICAgICBmaWVsZFJlbW92ZWQgPSB0cnVlO1xuICAgICAgX3RoaXMuc2F2ZSgpO1xuICAgICAgaWYgKCFmb3JtLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBzdGFnZVdyYXAgPSBmb3JtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgICBzdGFnZVdyYXAuZGF0YXNldC5jb250ZW50ID0gbWkxOG4uY3VycmVudC5nZXRTdGFydGVkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMuZmllbGRSZW1vdmVkKTtcbiAgICByZXR1cm4gZmllbGRSZW1vdmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCBmb3IgZm9ybSBhY3Rpb24gYnV0dG9uc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGJ1dHRvbkRhdGFcbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gZWxlbWVudCBmb3IgYWN0aW9uIGJ1dHRvblxuICAgKi9cbiAgcHJvY2Vzc0FjdGlvbkJ1dHRvbnMoYnV0dG9uRGF0YSkge1xuICAgIGxldCB7bGFiZWwsIGV2ZW50cywgLi4uYXR0cnN9ID0gYnV0dG9uRGF0YTtcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICBpZiAoYXR0cnMuaWQpIHtcbiAgICAgICAgbGFiZWwgPSBtaTE4bi5jdXJyZW50W2F0dHJzLmlkXSB8fCB1dGlscy5jYXBpdGFsaXplKGF0dHJzLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gJyc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsID0gbWkxOG4uY3VycmVudFtsYWJlbF0gfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCFhdHRycy5pZCkge1xuICAgICAgYXR0cnMuaWQgPSBgJHtkYXRhLmZvcm1JRH0tYWN0aW9uLSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEwMDApfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHJzLmlkID0gYCR7ZGF0YS5mb3JtSUR9LSR7YXR0cnMuaWR9LWFjdGlvbmA7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gbSgnYnV0dG9uJywgbGFiZWwsIGF0dHJzKTtcblxuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldnQgPT4gZXZlbnRzW2V2ZW50XShldnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICAvKipcbiAgICogQ3Jvc3MgbGluayBzdWJ0eXBlcyBhbmQgZGVmaW5lIG1hcmt1cCBjb25maWdcbiAgICogQHBhcmFtICB7QXJyYXl9IHN1YnR5cGVPcHRzXG4gICAqIEByZXR1cm4ge0FycmF5fSBzdWJ0eXBlc1xuICAgKi9cbiAgcHJvY2Vzc1N1YnR5cGVzKHN1YnR5cGVPcHRzKSB7XG4gICAgbGV0IHN1YnR5cGVzID0ge307XG4gICAgY29uc3Qgc3VidHlwZUZvcm1hdCA9IHN1YnR5cGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoc3VidHlwZSksXG4gICAgICAgICAgdmFsdWU6IHN1YnR5cGVcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbmZpZy5zdWJ0eXBlcyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRTdWJ0eXBlcywgc3VidHlwZU9wdHMpO1xuXG4gICAgICBmb3IgKGxldCBzdWJ0eXBlIGluIGNvbmZpZy5zdWJ0eXBlcykge1xuICAgICAgICBpZiAoY29uZmlnLnN1YnR5cGVzLmhhc093blByb3BlcnR5KHN1YnR5cGUpKSB7XG4gICAgICAgICAgc3VidHlwZXNbc3VidHlwZV0gPSBjb25maWcuc3VidHlwZXNbc3VidHlwZV0ubWFwKHN1YnR5cGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdWJ0eXBlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBzdGFnZSBhbmQgY29udHJvbHMgZG9tIGVsZW1lbnRzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZm9ybUlEIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGVkaXRvclVJKGZvcm1JRCkge1xuICAgIGxldCBkID0gdGhpcy5kO1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGQuc3RhZ2UgPSBtKCd1bCcsIG51bGwsIHtcbiAgICAgICAgaWQ6IGRhdGEuZm9ybUlELFxuICAgICAgICBjbGFzc05hbWU6ICdmcm1iJ1xuICAgICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgZHJhZ2dhYmxlIGZpZWxkcyBmb3IgZm9ybUJ1aWxkZXJcbiAgICBkLmNvbnRyb2xzID0gbSgndWwnLCBudWxsLCB7XG4gICAgICBpZDogYCR7ZGF0YS5mb3JtSUR9LWNvbnRyb2wtYm94YCxcbiAgICAgIGNsYXNzTmFtZTogJ2ZybWItY29udHJvbCdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHVzZXIgb3B0aW9ucyBmb3IgYWN0aW9uQnV0dG9uc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBwcm9jZXNzZWRPcHRpb25zXG4gICAqL1xuICBwcm9jZXNzT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGxldCB7ZmllbGRzID0gW10sIHRlbXBsYXRlcywgLi4ub3B0c30gPSBvcHRpb25zO1xuICAgIGxldCBhY3Rpb25CdXR0b25zID0gW3tcbiAgICAgIGlkOiAnY2xlYXInLFxuICAgICAgY2xhc3NOYW1lOiAnY2xlYXItYWxsIGJ0biBidG4tZGFuZ2VyJyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBjbGljazogX3RoaXMuY29uZmlybVJlbW92ZUFsbC5iaW5kKF90aGlzKVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiAndmlld0pTT04nLFxuICAgICAgaWQ6ICdkYXRhJyxcbiAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tZGVmYXVsdCcsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xpY2s6IF90aGlzLnNob3dEYXRhLmJpbmQoX3RoaXMpXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaWQ6ICdzYXZlJyxcbiAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1wcmltYXJ5IHNhdmUtdGVtcGxhdGUnLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsaWNrOiBldnQgPT4gY29uZmlnLm9wdHMub25TYXZlKGV2dCwgX3RoaXMuZGF0YS5mb3JtRGF0YSlcbiAgICAgIH1cbiAgICB9XTtcblxuICAgIGxldCBkZWZhdWx0RmllbGRzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdhdXRvY29tcGxldGUnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnYXV0b2NvbXBsZXRlJ1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2J1dHRvbicpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2NoZWNrYm94R3JvdXAnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2RhdGVGaWVsZCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdmaWxlVXBsb2FkJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2hlYWRlcicpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2hpZGRlbicpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ251bWJlcicpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ3BhcmFncmFwaCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ3JhZGlvR3JvdXAnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ3NlbGVjdCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ3RleHQnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgndGV4dEFyZWEnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAndGV4dGFyZWEnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgb3B0cy5maWVsZHMgPSBmaWVsZHMuY29uY2F0KGRlZmF1bHRGaWVsZHMpO1xuICAgIGNvbmZpZy5vcHRzID0gT2JqZWN0LmFzc2lnbih7fSwge2FjdGlvbkJ1dHRvbnMsIHRlbXBsYXRlcywgZmllbGRzfSwgb3B0cyk7XG4gICAgdXRpbHMudGVtcGxhdGVzID0gT2JqZWN0LmtleXMoY29uZmlnLm9wdHMudGVtcGxhdGVzKS5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiBba2V5LCBjb25maWcub3B0cy50ZW1wbGF0ZXNba2V5XV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29uZmlnLm9wdHM7XG4gIH1cblxuXG4gIC8vIGVuZCBjbGFzc1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBIZWxwZXJzO1xuIiwiLyoqXG4gKiBQb2x5ZmlsbHMgZm9yIG9sZGVyIGJyb3dzZXJzIGFuZCBhZGRlZCBmdW5jdGlvbmFsaXR5XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwb2x5ZmlsbHMoKSB7XG4gIC8vIEVsZW1lbnQucmVtb3ZlKCkgcG9seWZpbGxcbiAgaWYgKCEoJ3JlbW92ZScgaW4gRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRXZlbnQgcG9seWZpbGxcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5FdmVudCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KGV2dCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfVxuXG4gIC8vIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldCA9IE9iamVjdCh0YXJnZXQpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gIH1cblxuXG4gIC8vIFJlZmVyZW5jZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS40LjQuMThcbiAgaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIGxldCBULCBrO1xuICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aGlzIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTtcbiAgICAgIH1cbiAgICAgIGxldCBPID0gT2JqZWN0KHRoaXMpO1xuICAgICAgbGV0IGxlbiA9IE8ubGVuZ3RoID4+PiAwO1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIFQgPSBhcmd1bWVudHNbMV07XG4gICAgICB9XG4gICAgICBrID0gMDtcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGxldCBrVmFsdWU7XG4gICAgICAgIGlmIChrIGluIE8pIHtcbiAgICAgICAgICBrVmFsdWUgPSBPW2tdO1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoVCwga1ZhbHVlLCBrLCBPKTtcbiAgICAgICAgfVxuICAgICAgICBrKys7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwb2x5ZmlsbHMoKTtcbiIsImltcG9ydCB7ZGVmYXVsdFN1YnR5cGVzLCBmaWx0ZXJ9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5cbi8qKlxuICogQ3Jvc3MgZmlsZSB1dGlsaXRpZXMgZm9yIHdvcmtpbmcgd2l0aCBhcnJheXMsXG4gKiBzb3J0aW5nIGFuZCBvdGhlciBmdW4gc3R1ZmZcbiAqIEByZXR1cm4ge09iamVjdH0gdXRpbHNcbiAqL1xuLy8gZnVuY3Rpb24gdXRpbHMoKSB7XG4gIGNvbnN0IHV0aWxzID0ge307XG4gIHdpbmRvdy5mYkxvYWRlZCA9IHtcbiAgICBqczogW10sXG4gICAgY3NzOiBbXVxuICB9O1xuICB3aW5kb3cuZmJFZGl0b3JzID0ge1xuICAgIHF1aWxsOiB7fSxcbiAgICB0aW55bWNlOiB7fVxuICB9O1xuXG4gIC8vIGNsZWFuZXIgc3ludGF4IGZvciB0ZXN0aW5nIGluZGV4T2YgZWxlbWVudFxuICB1dGlscy5pbkFycmF5ID0gZnVuY3Rpb24obmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgT2JqZWN0IHRyaW1tZWQgb2YgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqL1xuICB1dGlscy50cmltT2JqID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgeG1sUmVtb3ZlID0gW1xuICAgICAgbnVsbCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgICcnLFxuICAgICAgZmFsc2UsXG4gICAgICAnZmFsc2UnXG4gICAgXTtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAodXRpbHMuaW5BcnJheShhdHRyc1thdHRyXSwgeG1sUmVtb3ZlKSkge1xuICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXR0cnNbYXR0cl0pKSB7XG4gICAgICAgIGlmICghYXR0cnNbYXR0cl0ubGVuZ3RoKSB7XG4gICAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIGF0dHJpYnV0ZSBpcyBhIHZhbGlkIEhUTUwgYXR0cmlidXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXR0clxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgdXRpbHMudmFsaWRBdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICAgIGxldCBpbnZhbGlkID0gW1xuICAgICAgJ3ZhbHVlcycsXG4gICAgICAnZW5hYmxlT3RoZXInLFxuICAgICAgJ290aGVyJyxcbiAgICAgICdsYWJlbCcsXG4gICAgICAvLyAnc3R5bGUnLFxuICAgICAgJ3N1YnR5cGUnXG4gICAgXTtcbiAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkoYXR0ciwgaW52YWxpZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gYXR0cnMgb2JqZWN0IGludG8gYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBvYmplY3Qgb2YgYXR0cmlidXRlcyBmb3IgbWFya3VwXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHV0aWxzLmF0dHJTdHJpbmcgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCBhdHRyaWJ1dGVzID0gW107XG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikgJiYgdXRpbHMudmFsaWRBdHRyKGF0dHIpKSB7XG4gICAgICAgIGF0dHIgPSB1dGlscy5zYWZlQXR0cihhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyLm5hbWUgKyBhdHRyLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuam9pbignICcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGF0dHJpYnV0ZXMgdG8gbWFya3VwIHNhZmUgc3RyaW5nc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgYXR0cmlidXRlIHZhbHVlXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICB1dGlscy5zYWZlQXR0ciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IHV0aWxzLnNhZmVBdHRyTmFtZShuYW1lKTtcbiAgICBsZXQgdmFsU3RyaW5nO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsU3RyaW5nID0gdXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB2YWxTdHJpbmcgPSB1dGlscy5lc2NhcGVBdHRyKHZhbHVlLnJlcGxhY2UoJywnLCAnICcpLnRyaW0oKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZSA/IGA9XCIke3ZhbFN0cmluZ31cImAgOiAnJztcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlXG4gICAgfTtcbiAgfTtcblxuICB1dGlscy5zYWZlQXR0ck5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbGV0IHNhZmVBdHRyID0ge1xuICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnXG4gICAgfTtcblxuICAgIHJldHVybiBzYWZlQXR0cltuYW1lXSB8fCB1dGlscy5oeXBoZW5DYXNlKG5hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHN0cmluZ3MgaW50byBsb3dlcmNhc2UtaHlwaGVuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIHV0aWxzLmh5cGhlbkNhc2UgPSAoc3RyKSA9PiB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1teXFx3XFxzXFwtXS9naSwgJycpO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKCQxKSB7XG4gICAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvXi0rL2csICcnKTtcbiAgfTtcblxuICAvKipcbiAgICogY29udmVydCBhIGh5cGhlbmF0ZWQgc3RyaW5nIHRvIGNhbWVsQ2FzZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICB1dGlscy5jYW1lbENhc2UgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0oW2Etel0pL2csIChtLCB3KSA9PlxuICAgIHcudG9VcHBlckNhc2UoKSk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBjb250ZW50IHR5cGVcbiAgICogQHBhcmFtICB7Tm9kZSB8IFN0cmluZyB8IEFycmF5IHwgT2JqZWN0fSBjb250ZW50XG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGUgZm9yIG1hcHBpbmdcbiAgICovXG4gIHV0aWxzLmNvbnRlbnRUeXBlID0gY29udGVudCA9PiB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgY29udGVudDtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIE5vZGUgfHwgY29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0eXBlID0gJ25vZGUnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgdHlwZSA9ICdhcnJheSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnRzIHRvIGFuIGVsZW1lbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRzICBvYmplY3QgZnVsbCBvZiBldmVudHMgZWcuIHtjbGljazogZXZ0ID0+IGNhbGxiYWNrfVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgdXRpbHMuYmluZEV2ZW50cyA9IChlbGVtZW50LCBldmVudHMpID0+IHtcbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBmb3IgKGxldCBldmVudCBpbiBldmVudHMpIHtcbiAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgdW5pcXVlIG5hbWUgYXR0cmlidXRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIG5hbWVcbiAqL1xuICB1dGlscy5uYW1lQXR0ciA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgbGV0IGVwb2NoID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgbGV0IHByZWZpeCA9IGZpZWxkLnR5cGUgfHwgdXRpbHMuaHlwaGVuQ2FzZShmaWVsZC5sYWJlbCk7XG4gICAgcmV0dXJuIHByZWZpeCArICctJyArIGVwb2NoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgd3JhcHBlciB3aGVyZSBuZWVkZWRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgdGFnXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheXxPYmplY3R9IGNvbnRlbnQgd2Ugd3JhcCB0aGlzXG4gICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgIGF0dHJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIEVsZW1lbnRcbiAgICovXG4gIHV0aWxzLm1hcmt1cCA9IGZ1bmN0aW9uKHRhZywgY29udGVudCA9ICcnLCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBsZXQgY29udGVudFR5cGUgPSB1dGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICBsZXQge2V2ZW50cywgLi4uYXR0cnN9ID0gYXR0cmlidXRlcztcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGNvbnN0IGFwcGVuZENvbnRlbnQgPSB7XG4gICAgICBzdHJpbmc6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZpZWxkLmlubmVySFRNTCArPSBjb250ZW50O1xuICAgICAgfSxcbiAgICAgIG9iamVjdDogKGNvbmZpZykgPT4ge1xuICAgICAgICBsZXQge3RhZywgY29udGVudCwgLi4uZGF0YX0gPSBjb25maWc7XG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZCh1dGlscy5tYXJrdXAodGFnLCBjb250ZW50LCBkYXRhKSk7XG4gICAgICB9LFxuICAgICAgbm9kZTogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgfSxcbiAgICAgIGFycmF5OiAoY29udGVudCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnRbaV0pO1xuICAgICAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdKGNvbnRlbnRbaV0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb246IGNvbnRlbnQgPT4ge1xuICAgICAgICBjb250ZW50ID0gY29udGVudCgpO1xuICAgICAgICBjb250ZW50VHlwZSA9IHV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnQpO1xuICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50KTtcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQ6ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcih0YWcsIGNvbnRlbnQsIGF0dHJpYnV0ZXMpO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGxldCBuYW1lID0gdXRpbHMuc2FmZUF0dHJOYW1lKGF0dHIpO1xuICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXS5jYWxsKHRoaXMsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHV0aWxzLmJpbmRFdmVudHMoZmllbGQsIGV2ZW50cyk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH07XG4gIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaHRtbCBlbGVtZW50IGF0dHJpYnV0ZXMgdG8ga2V5L3ZhbHVlIG9iamVjdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW0gRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSBleDoge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICB1dGlscy5wYXJzZUF0dHJzID0gZnVuY3Rpb24oZWxlbSkge1xuICAgIGxldCBhdHRycyA9IGVsZW0uYXR0cmlidXRlcztcbiAgICBsZXQgZGF0YSA9IHt9O1xuICAgIHV0aWxzLmZvckVhY2goYXR0cnMsIGF0dHIgPT4ge1xuICAgICAgbGV0IGF0dHJWYWwgPSBhdHRyc1thdHRyXS52YWx1ZTtcbiAgICAgIGlmIChhdHRyVmFsLm1hdGNoKC9mYWxzZXx0cnVlL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCA9PT0gJ3RydWUnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0clZhbC5tYXRjaCgvdW5kZWZpbmVkL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRyVmFsKSB7XG4gICAgICAgIGRhdGFbYXR0cnNbYXR0cl0ubmFtZV0gPSBhdHRyVmFsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgZmllbGQgb3B0aW9ucyB0byBvcHRpb25EYXRhXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgIERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIG9wdGlvbkRhdGEgYXJyYXlcbiAgICovXG4gIHV0aWxzLnBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKTtcbiAgICBsZXQgb3B0aW9uRGF0YSA9IHt9O1xuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvcHRpb25EYXRhID0gdXRpbHMucGFyc2VBdHRycyhvcHRpb25zW2ldKTtcbiAgICAgICAgb3B0aW9uRGF0YS5sYWJlbCA9IG9wdGlvbnNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGRhdGEucHVzaChvcHRpb25EYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2UgWE1MIGZvcm1EYXRhXG4gICAqIEBwYXJhbSAge1N0cmluZ30geG1sU3RyaW5nXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgIGZvcm1EYXRhIGFycmF5XG4gICAqL1xuICB1dGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKTtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcblxuICAgIGlmICh4bWwpIHtcbiAgICAgIGxldCBmaWVsZHMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpZWxkJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gdXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuXG4gICAgICAgIGlmIChmaWVsZHNbaV0uY2hpbGRyZW4gJiYgZmllbGRzW2ldLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSB1dGlscy5wYXJzZU9wdGlvbnMoZmllbGRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1EYXRhLnB1c2goZmllbGREYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGVzY2FwZWQgSFRNTCBpbnRvIHVzYWJsZSBIVE1MXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBlc2NhcGVkIEhUTUxcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIHBhcnNlZCBIVE1MXG4gICAqL1xuICB1dGlscy5wYXJzZWRIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVzY2FwZSBtYXJrdXAgc28gaXQgY2FuIGJlIGRpc3BsYXllZCByYXRoZXIgdGhhbiByZW5kZXJlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgbWFya3VwXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBlc2NhcGVkIGh0bWxcbiAgICovXG4gIHV0aWxzLmVzY2FwZUh0bWwgPSBmdW5jdGlvbihodG1sKSB7XG4gICAgbGV0IGVzY2FwZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQgPSBodG1sO1xuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LmlubmVySFRNTDtcbiAgfTtcblxuICAvLyBFc2NhcGUgYW4gYXR0cmlidXRlXG4gIHV0aWxzLmVzY2FwZUF0dHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgbWF0Y2ggPSB7XG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OydcbiAgICB9O1xuXG4gICAgY29uc3QgcmVwbGFjZVRhZyA9IHRhZyA9PiBtYXRjaFt0YWddIHx8IHRhZztcblxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpID8gc3RyLnJlcGxhY2UoL1tcIiY8Pl0vZywgcmVwbGFjZVRhZykgOiBzdHI7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGF0dHJpYnV0ZXNcbiAgdXRpbHMuZXNjYXBlQXR0cnMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICBhdHRyc1thdHRyXSA9IHV0aWxzLmVzY2FwZUF0dHIoYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvLyBmb3JFYWNoIHRoYXQgY2FuIGJlIHVzZWQgb24gbm9kZUxpc3RcbiAgdXRpbHMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7IC8vIHBhc3NlcyBiYWNrIHN0dWZmIHdlIG5lZWRcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtICB7QXJyYXl9IGFycmF5ICBhcnJheSB3aXRoIHBvc3NpYmxlIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBhcnJheSB3aXRoIG9ubHkgdW5pcXVlIHZhbHVlc1xuICAgKi9cbiAgdXRpbHMudW5pcXVlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChlbGVtLCBwb3MsIGFycikgPT4ge1xuICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGVsZW0pID09PSBwb3M7XG4gICAgfSk7XG4gIH07XG5cbiAgdXRpbHMubWFrZUxhYmVsID0gKGRhdGEsIGxhYmVsID0gJycsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgICBsZXQgbGFiZWxUZXh0ID0gdXRpbHMucGFyc2VkSHRtbChsYWJlbCk7XG4gICAgbGV0IGxhYmVsQ29udGVudHMgPSBbbGFiZWxUZXh0XTtcblxuICAgIGlmIChkYXRhLnJlcXVpcmVkKSB7XG4gICAgICBsYWJlbENvbnRlbnRzLnB1c2gobSgnc3BhbicsICcgKicsIHtjbGFzc05hbWU6ICdyZXF1aXJlZCd9KSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICBsYWJlbENvbnRlbnRzLnB1c2gobSgnc3BhbicsICc/Jywge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3Rvb2x0aXAtZWxlbWVudCcsXG4gICAgICAgICAgdG9vbHRpcDogZGVzY3JpcHRpb25cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtKCdsYWJlbCcsIGxhYmVsQ29udGVudHMsIHtcbiAgICAgIGZvcjogZGF0YS5pZCxcbiAgICAgIGNsYXNzTmFtZTogYGZiLSR7ZGF0YS50eXBlfS1sYWJlbGBcbiAgICB9KTtcbiAgfTtcblxuICB1dGlscy50ZW1wbGF0ZU1hcCA9ICh0ZW1wbGF0ZXMsIHR5cGUpID0+IHtcbiAgICBsZXQgdGVtcGxhdGU7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIHRlbXBsYXRlcykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBpZih1dGlscy5pbkFycmF5KHR5cGUsIGtleSkpIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGtleSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgdXRpbHMuYXV0b2NvbXBsZXRlVGVtcGxhdGUgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7dmFsdWVzLCB0eXBlLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBjb25zdCBrZXlib2FyZE5hdiA9IChlKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gZS50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICBsZXQgYWN0aXZlT3B0aW9uID0gbGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUtb3B0aW9uJylbMF07XG4gICAgICBjb25zdCBrZXlDb2RlTWFwVmFscyA9IFtcbiAgICAgICAgLy8gdXBcbiAgICAgICAgWzM4LCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbi5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gYWN0aXZlT3B0aW9uLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvLyBkb3duXG4gICAgICAgIFs0MCwgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gYWN0aXZlT3B0aW9uLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBsaXN0LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFsxMywgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gYWN0aXZlT3B0aW9uLmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmIChsaXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIF07XG4gICAgICBsZXQga2V5Q29kZU1hcCA9IG5ldyBNYXAoa2V5Q29kZU1hcFZhbHMpO1xuXG4gICAgICBsZXQgZGlyZWN0aW9uID0ga2V5Q29kZU1hcC5nZXQoZS5rZXlDb2RlKTtcbiAgICAgIGlmKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgZGlyZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3Rpb24oKTtcbiAgICB9O1xuICAgIGNvbnN0IGZhdXhFdmVudHMgPSB7XG4gICAgICBmb2N1czogZXZ0ID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICBldnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZE5hdik7XG4gICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGxpc3Quc3R5bGUud2lkdGggPSBsaXN0LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgICAgfSxcbiAgICAgIGJsdXI6IGV2dCA9PiB7XG4gICAgICAgIGV2dC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkTmF2KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfSxcbiAgICAgIGlucHV0OiAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICBmaWx0ZXIobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLCBldnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKCFldnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBmYXV4QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLFxuICAgICAge1xuICAgICAgICBpZDogYCR7ZGF0YS5pZH0taW5wdXRgLFxuICAgICAgICBldmVudHM6IGZhdXhFdmVudHNcbiAgICAgIH0pO1xuICAgIGxldCBoaWRkZW5BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHt0eXBlOiAnaGlkZGVuJ30pO1xuICAgIGRlbGV0ZSBmYXV4QXR0cnMubmFtZTtcbiAgICBjb25zdCBmaWVsZCA9IFtcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgZmF1eEF0dHJzKSxcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgaGlkZGVuQXR0cnMpXG4gICAgXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB2YWx1ZXMubWFwKG9wdGlvbkRhdGEgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gb3B0aW9uRGF0YS5sYWJlbDtcbiAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiBldnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gbGlzdC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBvcHRpb25EYXRhLmxhYmVsO1xuICAgICAgICAgICAgZmllbGQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gb3B0aW9uRGF0YS52YWx1ZTtcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBvcHRpb25EYXRhLnZhbHVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG0oJ2xpJywgbGFiZWwsIGNvbmZpZyk7XG4gICAgfSk7XG5cbiAgICBmaWVsZC5wdXNoKG0oJ3VsJywgb3B0aW9ucyxcbiAgICAgIHtpZDogYCR7ZGF0YS5pZH0tbGlzdGAsIGNsYXNzTmFtZTogYGZiLSR7dHlwZX0tbGlzdGB9KSk7XG5cbiAgICBjb25zdCBvblJlbmRlciA9IChldnQpID0+IHtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge2ZpZWxkLCBvblJlbmRlcn07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIERPTSBlbGVtZW50cyBmb3Igc2VsZWN0LCBjaGVja2JveC1ncm91cCBhbmQgcmFkaW8tZ3JvdXAuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGREYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIERPTSBlbGVtZW50c1xuICAgKi9cbiAgdXRpbHMuc2VsZWN0VGVtcGxhdGUgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCBvcHRpb25zID0gW107XG4gICAgbGV0IHt2YWx1ZXMsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbmxpbmUsIG90aGVyLCB0b2dnbGUsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCBvcHRpb25UeXBlID0gdHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG4gICAgbGV0IGlzU2VsZWN0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBpZiAocGxhY2Vob2xkZXIgJiYgaXNTZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5wdXNoKG0oJ29wdGlvbicsIHBsYWNlaG9sZGVyLCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWQ6IG51bGxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQge2xhYmVsID0gJycsIC4uLm9wdGlvbkF0dHJzfSA9IHZhbHVlc1tpXTtcblxuICAgICAgICBvcHRpb25BdHRycy5pZCA9IGAke2RhdGEuaWR9LSR7aX1gO1xuICAgICAgICBpZiAoIW9wdGlvbkF0dHJzLnNlbGVjdGVkIHx8IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICAgICAgbGV0IG8gPSBtKCdvcHRpb24nLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCksIG9wdGlvbkF0dHJzKTtcbiAgICAgICAgICBvcHRpb25zLnB1c2gobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKG9wdGlvbkF0dHJzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gJ2NoZWNrZWQnO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgaW5wdXQgPSBtKCdpbnB1dCcsIG51bGwsIE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG9wdGlvbkF0dHJzKSk7XG4gICAgICAgICAgbGV0IGxhYmVsQXR0cnMgPSB7Zm9yOiBvcHRpb25BdHRycy5pZH07XG4gICAgICAgICAgbGV0IGxhYmVsQ29udGVudCA9IFtpbnB1dCwgbGFiZWxdO1xuICAgICAgICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgICAgIGxldCBrY1RvZ2dsZSA9IG0oJ3NwYW4nKTtcbiAgICAgICAgICAgIGxhYmVsQ29udGVudCA9IFtpbnB1dCwga2NUb2dnbGUsIGxhYmVsXTtcbiAgICAgICAgICAgIGxhYmVsQXR0cnMuY2xhc3NOYW1lID0gJ2tjLXRvZ2dsZSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIGxhYmVsQ29udGVudCwgbGFiZWxBdHRycyk7XG4gICAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1NlbGVjdCAmJiBvdGhlcikge1xuICAgICAgICBsZXQgb3RoZXJPcHRpb25BdHRycyA9IHtcbiAgICAgICAgICBpZDogYCR7ZGF0YS5pZH0tb3RoZXJgLFxuICAgICAgICAgIGNsYXNzTmFtZTogYCR7ZGF0YS5jbGFzc05hbWV9IG90aGVyLW9wdGlvbmAsXG4gICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBjbGljazogKCkgPT4gdXRpbHMub3RoZXJPcHRpb25DQihvdGhlck9wdGlvbkF0dHJzLmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gbGV0IGxhYmVsID0gbWkxOG4uY3VycmVudC5vdGhlcjtcbiAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICB3cmFwcGVyQ2xhc3MgKz0gJy1pbmxpbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3RoZXJPcHRpb25BdHRycyk7XG4gICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xuXG4gICAgICAgIGxldCBvdGhlclZhbEF0dHJzID0ge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgaWQ6IGAke290aGVyT3B0aW9uQXR0cnMuaWR9LXZhbHVlYCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdvdGhlci12YWwnXG4gICAgICAgIH07XG4gICAgICAgIGxldCBvdGhlcklucHV0cyA9IFtcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG9wdGlvbkF0dHJzKSxcbiAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnT3RoZXInKSxcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG90aGVyVmFsQXR0cnMpXG4gICAgICAgIF07XG4gICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBvdGhlcklucHV0cywge2Zvcjogb3B0aW9uQXR0cnMuaWR9KTtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlcyA9IFtcbiAgICAgIFsnc2VsZWN0JyxcbiAgICAgICAgKCkgPT4gbShvcHRpb25UeXBlLCBvcHRpb25zLCBkYXRhKV0sXG4gICAgICBbWydjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCcsICdjaGVja2JveCddLFxuICAgICAgICAoKSA9PiBtKCdkaXYnLCBvcHRpb25zLCB7Y2xhc3NOYW1lOiB0eXBlfSldXG4gICAgXTtcblxuICAgIHJldHVybiB1dGlscy50ZW1wbGF0ZU1hcCh0ZW1wbGF0ZXMsIHR5cGUpO1xuICB9O1xuXG4gIHV0aWxzLmRlZmF1bHRGaWVsZCA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHtsYWJlbCwgZGVzY3JpcHRpb24sIHN1YnR5cGUsIHR5cGUsIGlkLCBpc1ByZXZpZXcsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGlmIChpZCkge1xuICAgICAgaWYgKGlzUHJldmlldykge1xuICAgICAgICBpZiAoZGF0YS5uYW1lKSB7XG4gICAgICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJy1wcmV2aWV3JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhLm5hbWUgPSB1dGlscy5uYW1lQXR0cihmaWVsZERhdGEpICsgJy1wcmV2aWV3JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGF0YS5pZCA9IGRhdGEubmFtZTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICBkYXRhLnRpdGxlID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICB0eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICBsZXQgZmllbGQgPSB7XG4gICAgICBmaWVsZDogbSh0eXBlLCB1dGlscy5wYXJzZWRIdG1sKGxhYmVsKSwgZGF0YSksXG4gICAgICBvblJlbmRlcjogdXRpbHMubm9vcFxuICAgIH07XG5cbiAgICByZXR1cm4gKCkgPT4gZmllbGQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvYWRzIGFuIGFycmF5IG9mIHNjcmlwdHMgdXNpbmcgalF1ZXJ5J3MgYGdldFNjcmlwdGBcbiAgICogQHBhcmFtICB7QXJyYXl8U3RyaW5nfSAgc2NyaXB0U2NyICAgIHNjcmlwdHNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoICAgb3B0aW9uYWwgdG8gbG9hZCBmb3JtXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgIGEgcHJvbWlzZVxuICAgKi9cbiAgdXRpbHMuZ2V0U2NyaXB0cyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBjb25zdCAkID0galF1ZXJ5O1xuICAgIGxldCBfYXJyID0gW107XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NyaXB0U2NyKSkge1xuICAgICAgc2NyaXB0U2NyID0gW3NjcmlwdFNjcl07XG4gICAgfVxuXG4gICAgaWYgKCF1dGlscy5pc0NhY2hlZChzY3JpcHRTY3IpKSB7XG4gICAgICBfYXJyID0gJC5tYXAoc2NyaXB0U2NyLCBzcmMgPT4ge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkYXRhVHlwZTogJ3NjcmlwdCcsXG4gICAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgICAgdXJsOiAocGF0aCB8fCAnJykgKyBzcmNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICQuYWpheChvcHRpb25zKS5kb25lKCgpID0+IHdpbmRvdy5mYkxvYWRlZC5qcy5wdXNoKHNyYykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2Fyci5wdXNoKCQuRGVmZXJyZWQoIGRlZmVycmVkID0+ICQoIGRlZmVycmVkLnJlc29sdmUgKSkpO1xuXG4gICAgcmV0dXJuICQud2hlbiguLi5fYXJyKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJlbW90ZSByZXNvdXJjZSBpcyBhbHJlYWR5IGxvYWRlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IHNyYyAgdXJsIG9mIHJlbW90ZSBzY3JpcHQgb3IgY3NzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgdHlwZSAgICAgICAnanMnIG9yICdjc3MnXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgaXNDYWNoZWRcbiAgICovXG4gIHV0aWxzLmlzQ2FjaGVkID0gKHNyYywgdHlwZSA9ICdqcycpID0+IHtcbiAgICBsZXQgaXNDYWNoZWQgPSBmYWxzZTtcbiAgICBjb25zdCBjYWNoZSA9IHdpbmRvdy5mYkxvYWRlZFt0eXBlXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgICBpc0NhY2hlZCA9IHNyYy5ldmVyeShzID0+IHV0aWxzLmluQXJyYXkocywgY2FjaGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDYWNoZWQgPSB1dGlscy5pbkFycmF5KHNyYywgY2FjaGUpO1xuICAgIH1cbiAgICByZXR1cm4gaXNDYWNoZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgc3R5bGVzaGVldHMgdG8gdGhlIGhlYWRcbiAgICogQHBhcmFtICB7QXJyYXl9IHNjcmlwdFNjclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGhcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHV0aWxzLmdldFN0eWxlcyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBpZiAodXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyLCAnY3NzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBwZW5kU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgd2luZG93LmZiTG9hZGVkLmNzcy5wdXNoKGhyZWYpO1xuICAgIH07XG4gICAgc2NyaXB0U2NyLmZvckVhY2goc3JjID0+IGFwcGVuZFN0eWxlKChwYXRoIHx8ICcnKSArIHNyYykpO1xuICB9O1xuXG4gIHV0aWxzLmxvbmdUZXh0VGVtcGxhdGUgPSBkYXRhID0+IHtcbiAgICBsZXQge3ZhbHVlID0gJycsIC4uLmF0dHJzfSA9IGRhdGE7XG4gICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgZmllbGQ6IG0oJ3RleHRhcmVhJywgdXRpbHMucGFyc2VkSHRtbCh2YWx1ZSksIGF0dHJzKVxuICAgIH07XG4gICAgbGV0IGVkaXRvcnMgPSB7XG4gICAgICB0aW55bWNlOiB7XG4gICAgICAgIGpzOiBbJy8vY2RuLnRpbnltY2UuY29tLzQvdGlueW1jZS5taW4uanMnXSxcbiAgICAgICAgb25SZW5kZXI6IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy50aW55bWNlLmVkaXRvcnNbZGF0YS5pZF0pIHtcbiAgICAgICAgICAgIHdpbmRvdy50aW55bWNlLmVkaXRvcnNbZGF0YS5pZF0ucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdpbmRvdy50aW55bWNlLmluaXQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0ZW1wbGF0ZS5maWVsZCxcbiAgICAgICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAnYWR2bGlzdCBhdXRvbGluayBsaXN0cyBsaW5rIGltYWdlIGNoYXJtYXAgcHJpbnQgcHJldmlldyBhbmNob3InLFxuICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZSB2aXN1YWxibG9ja3MgY29kZSBmdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgJ2luc2VydGRhdGV0aW1lIG1lZGlhIHRhYmxlIGNvbnRleHRtZW51IHBhc3RlIGNvZGUnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdG9vbGJhcjogJ2luc2VydGZpbGUgdW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8IGxpbmsgaW1hZ2UnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBxdWlsbDoge1xuICAgICAgICBqczogWycvL2Nkbi5xdWlsbGpzLmNvbS8xLjEuMy9xdWlsbC5qcyddLFxuICAgICAgICBjc3M6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuc25vdy5jc3MnXSxcbiAgICAgICAgb25SZW5kZXI6IGV2dCA9PiB7XG4gICAgICAgICAgY29uc3QgRGVsdGEgPSB3aW5kb3cuUXVpbGwuaW1wb3J0KCdkZWx0YScpO1xuICAgICAgICAgIHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbZGF0YS5pZF0gPSB7fTtcbiAgICAgICAgICBsZXQgZWRpdG9yID0gd2luZG93LmZiRWRpdG9ycy5xdWlsbFtkYXRhLmlkXTtcbiAgICAgICAgICBlZGl0b3IuaW5zdGFuY2UgPSBuZXcgd2luZG93LlF1aWxsKHRlbXBsYXRlLmZpZWxkLCB7XG4gICAgICAgICAgICBtb2R1bGVzOiB7XG4gICAgICAgICAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAgICAgICAgICBbeydoZWFkZXInOiBbMSwgMiwgZmFsc2VdfV0sXG4gICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcbiAgICAgICAgICAgICAgICBbJ2NvZGUtYmxvY2snXVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGF0dHJzLnBsYWNlaG9sZGVyIHx8ICcnLFxuICAgICAgICAgICAgdGhlbWU6ICdzbm93J1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGVkaXRvci5kYXRhID0gbmV3IERlbHRhKCk7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBlZGl0b3IuaW5zdGFuY2Uuc2V0Q29udGVudHMod2luZG93LkpTT04ucGFyc2UodXRpbHMucGFyc2VkSHRtbCh2YWx1ZSkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICAgICAgICBlZGl0b3IuZGF0YSA9IGVkaXRvci5kYXRhLmNvbXBvc2UoZGVsdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRlbXBsYXRlLm9uUmVuZGVyID0gZWRpdG9yc1tkYXRhLnR5cGVdLm9uUmVuZGVyO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAncXVpbGwnKSB7XG4gICAgICB0ZW1wbGF0ZS5maWVsZCA9IG0oJ2RpdicsIG51bGwsIGF0dHJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0pIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIG9uUmVuZGVyKTtcblxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcykge1xuICAgICAgICAgIHV0aWxzLmdldFN0eWxlcyhlZGl0b3JzW2RhdGEudHlwZV0uY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmpzICYmICF1dGlscy5pc0NhY2hlZChlZGl0b3JzW2RhdGEudHlwZV0uanMpKSB7XG4gICAgICAgICAgdXRpbHMuZ2V0U2NyaXB0cyhlZGl0b3JzW2RhdGEudHlwZV0uanMpLmRvbmUodGVtcGxhdGUub25SZW5kZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlLm9uUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtmaWVsZDogdGVtcGxhdGUuZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICB1dGlscy50ZW1wbGF0ZXMgPSBbXTtcblxuICB1dGlscy5nZXRUZW1wbGF0ZSA9IChmaWVsZERhdGEsIGlzUHJldmlldyA9IGZhbHNlKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBzdWJ0eXBlLFxuICAgICAgbGFiZWxQb3NpdGlvbixcbiAgICAgIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCB0ZW1wbGF0ZTtcbiAgICBsZXQgZmllbGQ7XG5cbiAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICBpZiAoZGF0YS5uYW1lKSB7XG4gICAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLm5hbWUgPSB1dGlscy5uYW1lQXR0cihmaWVsZERhdGEpICsgJy1wcmV2aWV3JztcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YS5pZCA9IGRhdGEubmFtZTtcblxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICBkYXRhLnR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLm11bHRpcGxlIHx8IGRhdGEudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJykge1xuICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJ1tdJztcbiAgICB9XG5cbiAgICBsZXQgZmllbGRMYWJlbCA9IHV0aWxzLm1ha2VMYWJlbChkYXRhLCBsYWJlbCwgZGVzY3JpcHRpb24pO1xuXG4gICAgaWYgKGRhdGEucmVxdWlyZWQpIHtcbiAgICAgIGRhdGEucmVxdWlyZWQgPSBudWxsO1xuICAgICAgZGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgIH1cblxuXG4gICAgbGV0IHRlbXBsYXRlcyA9IHV0aWxzLnRlbXBsYXRlcy5jb25jYXQoW1xuICAgICAgWydhdXRvY29tcGxldGUnLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGF1dG9jb21wbGV0ZSA9IHV0aWxzLmF1dG9jb21wbGV0ZVRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgYXV0b2NvbXBsZXRlLmZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBhdXRvY29tcGxldGUub25SZW5kZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbZGVmYXVsdFN1YnR5cGVzLnRleHQuY29uY2F0KFsnbnVtYmVyJywgJ2ZpbGUnLCAnZGF0ZSddKSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgbSgnaW5wdXQnLCBudWxsLCBkYXRhKV0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1sncGFyYWdyYXBoJ10uY29uY2F0KGRlZmF1bHRTdWJ0eXBlcy5wYXJhZ3JhcGgpLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHt0eXBlLCAuLi5hdHRyc30gPSBkYXRhO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbbSh0eXBlLCB1dGlscy5wYXJzZWRIdG1sKGxhYmVsKSwgYXR0cnMpXSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbZGVmYXVsdFN1YnR5cGVzLmJ1dHRvbixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBtKCdidXR0b24nLCBsYWJlbCwgZGF0YSksXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1snc2VsZWN0JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJywgJ2NoZWNrYm94J10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSB1dGlscy5zZWxlY3RUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkXVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3RleHRhcmVhJywgJ3RpbnltY2UnLCAncXVpbGwnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IHV0aWxzLmxvbmdUZXh0VGVtcGxhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBmaWVsZC5maWVsZF0sXG4gICAgICAgICAgICBvblJlbmRlcjogZmllbGQub25SZW5kZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV1cbiAgICAgIF0pO1xuXG4gICAgICB0ZW1wbGF0ZSA9IHV0aWxzLnRlbXBsYXRlTWFwKHRlbXBsYXRlcywgZGF0YS50eXBlKTtcblxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBsYXRlID0gdXRpbHMuZGVmYXVsdEZpZWxkKGZpZWxkRGF0YSkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgbGV0IHdyYXBwZXJBdHRycyA9IHt9O1xuICAgICAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgICAgIHdyYXBwZXJBdHRycy5jbGFzc05hbWUgPVxuICAgICAgICAgIGBmYi0ke2RhdGEudHlwZX0gZm9ybS1ncm91cCBmaWVsZC0ke2RhdGEuaWR9YDtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZCA9IHV0aWxzLm1hcmt1cCgnZGl2JywgdGVtcGxhdGUuZmllbGQsIHdyYXBwZXJBdHRycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZCA9IHV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRlbXBsYXRlLm9uUmVuZGVyKSB7XG4gICAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCB0ZW1wbGF0ZS5vblJlbmRlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuLyoqXG4gKiBDYWxsYmFjayBmb3Igb3RoZXIgb3B0aW9uLlxuICogVG9nZ2xlcyB0aGUgaGlkZGVuIHRleHQgYXJlYSBmb3IgXCJvdGhlclwiIG9wdGlvbi5cbiAqIEBwYXJhbSAge1N0cmluZ30gb3RoZXJJZCBpZCBvZiB0aGUgXCJvdGhlclwiIG9wdGlvbiBpbnB1dFxuICovXG51dGlscy5vdGhlck9wdGlvbkNCID0gb3RoZXJJZCA9PiB7XG4gIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdGhlcklkKTtcbiAgY29uc3Qgb3RoZXJJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3RoZXJJZH0tdmFsdWVgKTtcblxuICBpZiAob3RoZXJJbnB1dC5jaGVja2VkKSB7XG4gICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyBhIHN0cmluZ1xuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgdW5jYXBpdGFsaXplZCBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICovXG51dGlscy5jYXBpdGFsaXplID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGJcXHcvZywgZnVuY3Rpb24obSkge1xuICAgICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn07XG5cblxudXRpbHMubWVyZ2UgPSAob2JqMSwgb2JqMikgPT4ge1xuICBsZXQgbWVyZ2VkT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqMSwgb2JqMik7XG4gIGZvciAobGV0IHByb3AgaW4gb2JqMikge1xuICAgIGlmIChtZXJnZWRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iajJbcHJvcF0pKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IEFycmF5LmlzQXJyYXkob2JqMVtwcm9wXSkgPyB1dGlscy51bmlxdWUob2JqMVtwcm9wXS5jb25jYXQob2JqMltwcm9wXSkpIDogb2JqMltwcm9wXTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iajJbcHJvcF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IHV0aWxzLm1lcmdlKG9iajFbcHJvcF0sIG9iajJbcHJvcF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gb2JqMltwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lcmdlZE9iajtcbn07XG5cbnV0aWxzLmFkZEV2ZW50TGlzdGVuZXJzID0gKGVsLCBldnRzLCBmbikgPT4ge1xuICByZXR1cm4gZXZ0cy5zcGxpdCgnICcpLmZvckVhY2goZSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKGUsIGZuLCBmYWxzZSkpO1xufTtcblxuLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IHBhcmVudCBieSBjbGFzc1xuICogQHBhcmFtICB7T2JqZWN0fSBlbCAgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSAge1N0cmluZ30gY2xzIGNsYXNzXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICBET00gRWxlbWVudFxuICovXG51dGlscy5jbG9zZXN0ID0gKGVsLCBjbHMpID0+IHtcbiAgbGV0IGNsYXNzTmFtZSA9IGNscy5yZXBsYWNlKCcuJywgJycpO1xuICB3aGlsZSAoKGVsID0gZWwucGFyZW50RWxlbWVudCkgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKTtcbiAgcmV0dXJuIGVsO1xufTtcblxudXRpbHMubm9vcCA9ICgpID0+IG51bGw7XG5cbnV0aWxzLmRlYm91bmNlID0gKGZ1bmMsIHdhaXQgPSAyNTAsIGltbWVkaWF0ZSA9IGZhbHNlKSA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICBsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBBZGQgYSBtb2JpbGUgY2xhc3NcbiAqIEB0b2RvIGZpbmQgY3NzIG9ubHkgc29sdXRpb25cbiAqIEByZXR1cm4ge1N0cmluZ30gTW9iaWxlIGNsYXNzIGFkZGVkIHRvIGZvcm1CdWlsZGVyXG4gKi9cbnV0aWxzLm1vYmlsZUNsYXNzID0gKCkgPT4ge1xuICBsZXQgbW9iaWxlQ2xhc3MgPSAnJztcbiAgKGZ1bmN0aW9uKGEpIHtcbiAgICBpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpIHtcbiAgICAgIG1vYmlsZUNsYXNzID0gJyBmYi1tb2JpbGUnO1xuICAgIH1cbiAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XG4gIHJldHVybiBtb2JpbGVDbGFzcztcbn07XG5cbi8qKlxuICogQ29udmVydCBjb252ZXJ0cyBtZXNzeSBgY2wjc3NOYW1lc2AgaW50byB2YWxpZCBgY2xhc3MtbmFtZXNgXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ30gaHlwaGVuYXRlZCBzdHJpbmdcbiAqL1xudXRpbHMubWFrZUNsYXNzTmFtZSA9IHN0ciA9PiB7XG4gIHJldHVybiB1dGlscy5oeXBoZW5DYXNlKHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKSk7XG59O1xuXG4vKipcbiAqIE1ha2Ugc3RyaW5ncyBzYWZlIHRvIGJlIHVzZWQgYXMgY2xhc3Nlc1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHN0cmluZyB0byBiZSBjb252ZXJ0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gICAgIGNvbnZlcnRlciBzdHJpbmdcbiAqL1xudXRpbHMuc2FmZW5hbWUgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL1teYS16QS1aMC05XFxfLV0vZywgJycpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKipcbiAqIFN0cmlwcyBub24tbnVtYmVycyBmcm9tIGEgbnVtYmVyIG9ubHkgaW5wdXRcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0ciBzdHJpbmcgd2l0aCBwb3NzaWJsZSBudW1iZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gICAgIHN0cmluZyB3aXRob3V0IG51bWJlcnNcbiAqL1xudXRpbHMuZm9yY2VOdW1iZXIgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiJdfQ==
