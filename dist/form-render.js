/*
formBuilder - https://formbuilder.online/
Version: 2.0.0-beta
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":13}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":14}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":15}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":16}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":17}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":18}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":19}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{"../core-js/get-iterator":2,"../core-js/is-iterable":3}],11:[function(require,module,exports){
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
},{"../core-js/array/from":1}],12:[function(require,module,exports){
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
},{"../core-js/symbol":6,"../core-js/symbol/iterator":7}],13:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":34,"../../modules/es6.array.from":96,"../../modules/es6.string.iterator":101}],14:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":94,"../modules/es6.string.iterator":101,"../modules/web.dom.iterable":106}],15:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":95,"../modules/es6.string.iterator":101,"../modules/web.dom.iterable":106}],16:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":34,"../modules/es6.map":98,"../modules/es6.object.to-string":100,"../modules/es6.string.iterator":101,"../modules/es7.map.to-json":103,"../modules/web.dom.iterable":106}],17:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":34,"../../modules/es6.object.assign":99}],18:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":34,"../../modules/es6.object.to-string":100,"../../modules/es6.symbol":102,"../../modules/es7.symbol.async-iterator":104,"../../modules/es7.symbol.observable":105}],19:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":91,"../../modules/es6.string.iterator":101,"../../modules/web.dom.iterable":106}],20:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],21:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],22:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],23:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":53}],24:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":44}],25:[function(require,module,exports){
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
},{"./_to-index":83,"./_to-iobject":85,"./_to-length":86}],26:[function(require,module,exports){
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
},{"./_array-species-create":28,"./_ctx":36,"./_iobject":50,"./_to-length":86,"./_to-object":87}],27:[function(require,module,exports){
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
},{"./_is-array":52,"./_is-object":53,"./_wks":92}],28:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":27}],29:[function(require,module,exports){
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
},{"./_cof":30,"./_wks":92}],30:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],31:[function(require,module,exports){
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
},{"./_an-instance":22,"./_ctx":36,"./_defined":37,"./_descriptors":38,"./_for-of":44,"./_iter-define":56,"./_iter-step":58,"./_meta":62,"./_object-create":64,"./_object-dp":65,"./_redefine-all":76,"./_set-species":78}],32:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":24,"./_classof":29}],33:[function(require,module,exports){
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
},{"./_an-instance":22,"./_array-methods":26,"./_descriptors":38,"./_export":42,"./_fails":43,"./_for-of":44,"./_global":45,"./_hide":47,"./_is-object":53,"./_meta":62,"./_object-dp":65,"./_redefine-all":76,"./_set-to-string-tag":79}],34:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],35:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":65,"./_property-desc":75}],36:[function(require,module,exports){
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
},{"./_a-function":20}],37:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],38:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":43}],39:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":45,"./_is-object":53}],40:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],41:[function(require,module,exports){
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
},{"./_object-gops":70,"./_object-keys":73,"./_object-pie":74}],42:[function(require,module,exports){
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
},{"./_core":34,"./_ctx":36,"./_global":45,"./_hide":47}],43:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],44:[function(require,module,exports){
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
},{"./_an-object":23,"./_ctx":36,"./_is-array-iter":51,"./_iter-call":54,"./_to-length":86,"./core.get-iterator-method":93}],45:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],46:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],47:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":38,"./_object-dp":65,"./_property-desc":75}],48:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":45}],49:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":38,"./_dom-create":39,"./_fails":43}],50:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":30}],51:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":59,"./_wks":92}],52:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":30}],53:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],54:[function(require,module,exports){
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
},{"./_an-object":23}],55:[function(require,module,exports){
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
},{"./_hide":47,"./_object-create":64,"./_property-desc":75,"./_set-to-string-tag":79,"./_wks":92}],56:[function(require,module,exports){
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
},{"./_export":42,"./_has":46,"./_hide":47,"./_iter-create":55,"./_iterators":59,"./_library":61,"./_object-gpo":71,"./_redefine":77,"./_set-to-string-tag":79,"./_wks":92}],57:[function(require,module,exports){
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
},{"./_wks":92}],58:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],59:[function(require,module,exports){
module.exports = {};
},{}],60:[function(require,module,exports){
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
},{"./_object-keys":73,"./_to-iobject":85}],61:[function(require,module,exports){
module.exports = true;
},{}],62:[function(require,module,exports){
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
},{"./_fails":43,"./_has":46,"./_is-object":53,"./_object-dp":65,"./_uid":89}],63:[function(require,module,exports){
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
},{"./_fails":43,"./_iobject":50,"./_object-gops":70,"./_object-keys":73,"./_object-pie":74,"./_to-object":87}],64:[function(require,module,exports){
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

},{"./_an-object":23,"./_dom-create":39,"./_enum-bug-keys":40,"./_html":48,"./_object-dps":66,"./_shared-key":80}],65:[function(require,module,exports){
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
},{"./_an-object":23,"./_descriptors":38,"./_ie8-dom-define":49,"./_to-primitive":88}],66:[function(require,module,exports){
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
},{"./_an-object":23,"./_descriptors":38,"./_object-dp":65,"./_object-keys":73}],67:[function(require,module,exports){
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
},{"./_descriptors":38,"./_has":46,"./_ie8-dom-define":49,"./_object-pie":74,"./_property-desc":75,"./_to-iobject":85,"./_to-primitive":88}],68:[function(require,module,exports){
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

},{"./_object-gopn":69,"./_to-iobject":85}],69:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":40,"./_object-keys-internal":72}],70:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],71:[function(require,module,exports){
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
},{"./_has":46,"./_shared-key":80,"./_to-object":87}],72:[function(require,module,exports){
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
},{"./_array-includes":25,"./_has":46,"./_shared-key":80,"./_to-iobject":85}],73:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":40,"./_object-keys-internal":72}],74:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],75:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],76:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":47}],77:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":47}],78:[function(require,module,exports){
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
},{"./_core":34,"./_descriptors":38,"./_global":45,"./_object-dp":65,"./_wks":92}],79:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":46,"./_object-dp":65,"./_wks":92}],80:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":81,"./_uid":89}],81:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":45}],82:[function(require,module,exports){
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
},{"./_defined":37,"./_to-integer":84}],83:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":84}],84:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],85:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":37,"./_iobject":50}],86:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":84}],87:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":37}],88:[function(require,module,exports){
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
},{"./_is-object":53}],89:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],90:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":34,"./_global":45,"./_library":61,"./_object-dp":65,"./_wks-ext":91}],91:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":92}],92:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":45,"./_shared":81,"./_uid":89}],93:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":29,"./_core":34,"./_iterators":59,"./_wks":92}],94:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":23,"./_core":34,"./core.get-iterator-method":93}],95:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":29,"./_core":34,"./_iterators":59,"./_wks":92}],96:[function(require,module,exports){
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

},{"./_create-property":35,"./_ctx":36,"./_export":42,"./_is-array-iter":51,"./_iter-call":54,"./_iter-detect":57,"./_to-length":86,"./_to-object":87,"./core.get-iterator-method":93}],97:[function(require,module,exports){
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
},{"./_add-to-unscopables":21,"./_iter-define":56,"./_iter-step":58,"./_iterators":59,"./_to-iobject":85}],98:[function(require,module,exports){
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
},{"./_collection":33,"./_collection-strong":31}],99:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":42,"./_object-assign":63}],100:[function(require,module,exports){

},{}],101:[function(require,module,exports){
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
},{"./_iter-define":56,"./_string-at":82}],102:[function(require,module,exports){
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
},{"./_an-object":23,"./_descriptors":38,"./_enum-keys":41,"./_export":42,"./_fails":43,"./_global":45,"./_has":46,"./_hide":47,"./_is-array":52,"./_keyof":60,"./_library":61,"./_meta":62,"./_object-create":64,"./_object-dp":65,"./_object-gopd":67,"./_object-gopn":69,"./_object-gopn-ext":68,"./_object-gops":70,"./_object-keys":73,"./_object-pie":74,"./_property-desc":75,"./_redefine":77,"./_set-to-string-tag":79,"./_shared":81,"./_to-iobject":85,"./_to-primitive":88,"./_uid":89,"./_wks":92,"./_wks-define":90,"./_wks-ext":91}],103:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":32,"./_export":42}],104:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":90}],105:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":90}],106:[function(require,module,exports){
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
},{"./_global":45,"./_hide":47,"./_iterators":59,"./_wks":92,"./es6.array.iterator":97}],107:[function(require,module,exports){
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

},{}],108:[function(require,module,exports){
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

},{"babel-runtime/helpers/classCallCheck":8}],109:[function(require,module,exports){
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

},{}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _config = require('./config');

var _dom = require('./dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * render the formBuilder XML into html
 * @param  {Object} options
 * @param  {Object} element html element where form will be rendered (optional)
 * @return {Object} formRender instance
 */
function FormRender(options, element) {
  var formRender = this;
  var defaults = {
    destroyTemplate: true, // @todo
    container: false,
    dataType: 'json',
    formData: false,
    subtypes: _dom.defaultSubtypes,
    messages: {
      formRendered: 'Form Rendered',
      noFormData: 'No form data.',
      other: 'Other',
      selectColor: 'Select Color'
    },
    onRender: function onRender() {},
    render: true,
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
    }
  };

  var opts = $.extend(true, defaults, options);

  (function () {
    if (!opts.formData) {
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

    opts.formData = setData[opts.dataType](opts.formData) || false;
  })();

  /**
   * Extend Element prototype to allow us to append fields
   *
   * @param  {Object} fields Node elements
   */
  Element.prototype.appendFormFields = function (fields) {
    var element = this;
    fields.forEach(function (field) {
      element.appendChild(field);
      field.dispatchEvent(_events2.default.fieldRendered);
    });
  };

  /**
   * Extend Element prototype to remove content
   */
  Element.prototype.emptyContainer = function () {
    var element = this;
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  };

  var runCallbacks = function runCallbacks() {
    if (opts.onRender) {
      opts.onRender();
    }
  };

  var santizeField = function santizeField(field) {
    var sanitizedField = (0, _assign2.default)({}, field);
    sanitizedField.className = field.className || field.class || null;
    delete sanitizedField.class;

    if (field.values) {
      field.values = field.values.map(function (option) {
        return _utils2.default.trimObj(option);
      });
    }

    return _utils2.default.trimObj(sanitizedField);
  };

  var exportMarkup = function exportMarkup(fields) {
    return fields.map(function (elem) {
      return elem.innerHTML;
    }).join('');
  };

  // Begin the core plugin
  var rendered = [];

  // generate field markup if we have fields
  if (opts.formData) {
    for (var i = 0; i < opts.formData.length; i++) {
      var sanitizedField = santizeField(opts.formData[i]);
      rendered.push(_utils2.default.getTemplate(sanitizedField));
    }

    if (opts.render) {
      if (opts.container) {
        var renderedFormWrap = _utils2.default.markup('div', rendered, {
          className: 'rendered-form'
        });
        if (opts.container instanceof jQuery) {
          opts.container = opts.container[0];
        }
        opts.container.emptyContainer();
        opts.container.appendChild(renderedFormWrap);
      } else if (element) {
        element.emptyContainer();
        element.appendFormFields(rendered);
      }

      runCallbacks();
      opts.notify.success(opts.messages.formRendered);
    } else {
      formRender.markup = exportMarkup(rendered);
    }
  } else {
    var noData = _utils2.default.markup('div', opts.messages.noFormData, {
      className: 'no-form-data'
    });
    rendered.push(noData);
    opts.notify.error(opts.messages.noFormData);
  }

  return formRender;
}

(function ($) {
  $.fn.formRender = function (options) {
    var elems = this;
    elems.each(function (i) {
      var formRender = new FormRender(options, elems[i]);
      elems[i].dataset.formRender = formRender;
      return formRender;
    });
  };
})(jQuery);

window.FormRender = FormRender;

exports.default = FormRender;

},{"./config":107,"./dom":108,"./events":109,"./utils":111,"babel-runtime/core-js/object/assign":5}],111:[function(require,module,exports){
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

},{"./config":107,"./dom":108,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/map":4,"babel-runtime/core-js/object/assign":5,"babel-runtime/helpers/objectWithoutProperties":9,"babel-runtime/helpers/slicedToArray":10,"babel-runtime/helpers/toConsumableArray":11,"babel-runtime/helpers/typeof":12}]},{},[110])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsInNyYy9qcy9jb25maWcuanMiLCJzcmMvanMvZG9tLmpzIiwic3JjL2pzL2V2ZW50cy5qcyIsInNyYy9qcy9mb3JtLXJlbmRlci5qcyIsInNyYy9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RCxDQUZEOztrQkFJZSxLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXIsIElURVJBVE9SKXtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTsiLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpe1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGNyZWF0ZSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBhbkluc3RhbmNlICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBkZWZpbmVkICAgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIGZvck9mICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJylcbiAgLCBzdGVwICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgc2V0U3BlY2llcyAgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgZmFzdEtleSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleVxuICAsIFNJWkUgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmKGVudHJ5KXtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsICdmb3JFYWNoJyk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgZnJvbSAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWV0YSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGRQICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGVhY2ggICAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTsiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59OyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5JylcbiAgLCBnZXRJdGVyRm4gICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7IiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyl9KTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59IiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBjb250cm9sUG9zaXRpb246ICdyaWdodCcsXG4gICAgICBjb250cm9sT3JkZXI6IFtcbiAgICAgICAgJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICdoaWRkZW4nLFxuICAgICAgICAncGFyYWdyYXBoJyxcbiAgICAgICAgJ251bWJlcicsXG4gICAgICAgICdyYWRpby1ncm91cCcsXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAndGV4dCcsXG4gICAgICAgICd0ZXh0YXJlYSdcbiAgICAgIF0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgLy8gQXJyYXkgb2YgZmllbGRzIHRvIGRpc2FibGVcbiAgICAgIGRpc2FibGVGaWVsZHM6IFtdLFxuICAgICAgZWRpdE9uQWRkOiBmYWxzZSxcbiAgICAgIC8vIFVuZWRpdGFibGUgZmllbGRzIG9yIG90aGVyIGNvbnRlbnQgeW91IHdvdWxkIGxpa2UgdG8gYXBwZWFyXG4gICAgICAvLyBiZWZvcmUgYW5kIGFmdGVyIHJlZ3VsYXIgZmllbGRzOlxuICAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAgIHByZXBlbmQ6IGZhbHNlLFxuICAgICAgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGZpZWxkcyB2YWx1ZXNcbiAgICAgIC8vIGV4OlxuICAgICAgLy8gZGVmYXVsdEZpZWxkczogW3tcbiAgICAgIC8vICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcbiAgICAgIC8vICAgbmFtZTogJ2ZpcnN0LW5hbWUnLFxuICAgICAgLy8gICByZXF1aXJlZDogJ3RydWUnLFxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ1lvdXIgZmlyc3QgbmFtZScsXG4gICAgICAvLyAgIHR5cGU6ICd0ZXh0J1xuICAgICAgLy8gfSwge1xuICAgICAgLy8gICBsYWJlbDogJ1Bob25lJyxcbiAgICAgIC8vICAgbmFtZTogJ3Bob25lJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdIb3cgY2FuIHdlIHJlYWNoIHlvdT8nLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH1dLFxuICAgICAgZGVmYXVsdEZpZWxkczogW10sXG4gICAgICBpbnB1dFNldHM6IFtdLFxuICAgICAgZmllbGRSZW1vdmVXYXJuOiBmYWxzZSxcbiAgICAgIHJvbGVzOiB7XG4gICAgICAgIDE6ICdBZG1pbmlzdHJhdG9yJ1xuICAgICAgfSxcbiAgICAgIG5vdGlmeToge1xuICAgICAgICBlcnJvcjogbWVzc2FnZSA9PiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpLFxuICAgICAgICBzdWNjZXNzOiBtZXNzYWdlID0+IGNvbnNvbGUubG9nKG1lc3NhZ2UpLFxuICAgICAgICB3YXJuaW5nOiBtZXNzYWdlID0+IGNvbnNvbGUud2FybihtZXNzYWdlKVxuICAgICAgfSxcbiAgICAgIG9uU2F2ZTogZm9ybURhdGEgPT4gbnVsbCxcbiAgICAgIG9uQ2xlYXJBbGw6ICgpID0+IG51bGwsXG4gICAgICBzb3J0YWJsZUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgIHN0aWNreUNvbnRyb2xzOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZpZWxkczogW10sXG4gICAgICB0ZW1wbGF0ZXM6IHt9LFxuICAgICAgZGlzYWJsZWRBY3Rpb25CdXR0b25zOiBbXSxcbiAgICAgIHNob3dBY3Rpb25CdXR0b25zOiB0cnVlLFxuICAgICAgdHlwZVVzZXJBdHRyczoge30sXG4gICAgICB0eXBlVXNlckV2ZW50czoge30sXG4gICAgICBwcmVmaXg6ICdmb3JtLWJ1aWxkZXItJ1xuICAgIH07XG5cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJMThuID0ge1xuICAgICAgbG9jYXRpb246ICdodHRwczovL2tldmluY2hhcHBlbGwuZ2l0aHViLmlvL2Zvcm1CdWlsZGVyL2Fzc2V0cy9sYW5nLycsXG4gICAgICBsYW5nczogW1xuICAgICAgICAnZW4tVVMnXG4gICAgICBdLFxuICAgICAgcHJlbG9hZGVkOiB7XG4gICAgICAgICdlbi1VUyc6IHtcbiAgICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICAgIGFsbEZpZWxkc1JlbW92ZWQ6ICdBbGwgZmllbGRzIHdlcmUgcmVtb3ZlZC4nLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVGaWxlczogJ0FsbG93IHVzZXJzIHRvIHVwbG9hZCBtdWx0aXBsZSBmaWxlcycsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBidXR0b246ICdCdXR0b24nLFxuICAgICAgICAgIGNhbm5vdEJlRW1wdHk6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcbiAgICAgICAgICBjaGVja2JveGVzOiAnQ2hlY2tib3hlcycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXG4gICAgICAgICAgY2xlYXJBbGw6ICdDbGVhcicsXG4gICAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxuICAgICAgICAgIGNvcHk6ICdDb3B5IFRvIENsaXBib2FyZCcsXG4gICAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxuICAgICAgICAgIGRhdGVGaWVsZDogJ0RhdGUgRmllbGQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgIGRldk1vZGU6ICdEZXZlbG9wZXIgTW9kZScsXG4gICAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcbiAgICAgICAgICBlZGl0WE1MOiAnRWRpdCBYTUwnLFxuICAgICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxuICAgICAgICAgIGZpZWxkRGVsZXRlV2FybmluZzogZmFsc2UsXG4gICAgICAgICAgZmllbGRWYXJzOiAnRmllbGQgVmFyaWFibGVzJyxcbiAgICAgICAgICBmaWVsZE5vbkVkaXRhYmxlOiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZWRpdGVkLicsXG4gICAgICAgICAgZmllbGRSZW1vdmVXYXJuaW5nOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGZpZWxkPycsXG4gICAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgICBmb3JtVXBkYXRlZDogJ0Zvcm0gVXBkYXRlZCcsXG4gICAgICAgICAgZ2V0U3RhcnRlZDogJ0RyYWcgYSBmaWVsZCBmcm9tIHRoZSByaWdodCB0byB0aGlzIGFyZWEnLFxuICAgICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgICAgaGlkZTogJ0VkaXQnLFxuICAgICAgICAgIGhpZGRlbjogJ0hpZGRlbiBJbnB1dCcsXG4gICAgICAgICAgaW5saW5lOiAnSW5saW5lJyxcbiAgICAgICAgICBpbmxpbmVEZXNjOiAnRGlzcGxheSB7dHlwZX0gaW5saW5lJyxcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICBsYWJlbEVtcHR5OiAnRmllbGQgTGFiZWwgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgICBsaW1pdFJvbGU6ICdMaW1pdCBhY2Nlc3MgdG8gb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyByb2xlczonLFxuICAgICAgICAgIG1hbmRhdG9yeTogJ01hbmRhdG9yeScsXG4gICAgICAgICAgbWF4bGVuZ3RoOiAnTWF4IExlbmd0aCcsXG4gICAgICAgICAgbWluT3B0aW9uTWVzc2FnZTogJ1RoaXMgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mIDIgb3B0aW9ucycsXG4gICAgICAgICAgbXVsdGlwbGVGaWxlczogJ011bHRpcGxlIEZpbGVzJyxcbiAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgbm86ICdObycsXG4gICAgICAgICAgbm9GaWVsZHNUb0NsZWFyOiAnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsXG4gICAgICAgICAgbnVtYmVyOiAnTnVtYmVyJyxcbiAgICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICAgIG9uOiAnT24nLFxuICAgICAgICAgIG9wdGlvbjogJ09wdGlvbicsXG4gICAgICAgICAgb3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgICAgb3B0aW9uVmFsdWVQbGFjZWhvbGRlcjogJ1ZhbHVlJyxcbiAgICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgICAgcGFyYWdyYXBoOiAnUGFyYWdyYXBoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIudmFsdWUnOiAnVmFsdWUnLFxuICAgICAgICAgICdwbGFjZWhvbGRlci5sYWJlbCc6ICdMYWJlbCcsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLnRleHQnOiAnJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIudGV4dGFyZWEnOiAnJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIuZW1haWwnOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIucGxhY2Vob2xkZXInOiAnJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIuY2xhc3NOYW1lJzogJ3NwYWNlIHNlcGFyYXRlZCBjbGFzc2VzJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIucGFzc3dvcmQnOiAnRW50ZXIgeW91ciBwYXNzd29yZCcsXG4gICAgICAgICAgcHJldmlldzogJ1ByZXZpZXcnLFxuICAgICAgICAgIHJhZGlvR3JvdXA6ICdSYWRpbyBHcm91cCcsXG4gICAgICAgICAgcmFkaW86ICdSYWRpbycsXG4gICAgICAgICAgcmVtb3ZlTWVzc2FnZTogJ1JlbW92ZSBFbGVtZW50JyxcbiAgICAgICAgICByZW1vdmVPcHRpb246ICdSZW1vdmUgT3B0aW9uJyxcbiAgICAgICAgICByZW1vdmU6ICcmIzIxNTsnLFxuICAgICAgICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQnLFxuICAgICAgICAgIHJpY2hUZXh0OiAnUmljaCBUZXh0IEVkaXRvcicsXG4gICAgICAgICAgcm9sZXM6ICdBY2Nlc3MnLFxuICAgICAgICAgIHJvd3M6ICdSb3dzJyxcbiAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgc2VsZWN0T3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICAgIHNlbGVjdDogJ1NlbGVjdCcsXG4gICAgICAgICAgc2VsZWN0Q29sb3I6ICdTZWxlY3QgQ29sb3InLFxuICAgICAgICAgIHNlbGVjdGlvbnNNZXNzYWdlOiAnQWxsb3cgTXVsdGlwbGUgU2VsZWN0aW9ucycsXG4gICAgICAgICAgc2l6ZTogJ1NpemUnLFxuICAgICAgICAgICdzaXplLnhzJzogJ0V4dHJhIFNtYWxsJyxcbiAgICAgICAgICAnc2l6ZS5zbSc6ICdTbWFsbCcsXG4gICAgICAgICAgJ3NpemUubSc6ICdEZWZhdWx0JyxcbiAgICAgICAgICAnc2l6ZS5sZyc6ICdMYXJnZScsXG4gICAgICAgICAgc3R5bGU6ICdTdHlsZScsXG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICBidG46IHtcbiAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnRGVmYXVsdCcsXG4gICAgICAgICAgICAgIGRhbmdlcjogJ0RhbmdlcicsXG4gICAgICAgICAgICAgIGluZm86ICdJbmZvJyxcbiAgICAgICAgICAgICAgcHJpbWFyeTogJ1ByaW1hcnknLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAnU3VjY2VzcycsXG4gICAgICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VidHlwZTogJ1R5cGUnLFxuICAgICAgICAgIHRleHQ6ICdUZXh0IEZpZWxkJyxcbiAgICAgICAgICB0ZXh0QXJlYTogJ1RleHQgQXJlYScsXG4gICAgICAgICAgdG9nZ2xlOiAnVG9nZ2xlJyxcbiAgICAgICAgICB3YXJuaW5nOiAnV2FybmluZyEnLFxuICAgICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICAgIHZpZXdKU09OOiAneyAgfScsXG4gICAgICAgICAgdmlld1hNTDogJyZsdDsvJmd0OycsXG4gICAgICAgICAgeWVzOiAnWWVzJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHt9O1xuIiwiXG5leHBvcnQgY29uc3QgaW5zdGFuY2VEb20gPSB7fTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3VidHlwZXMgPSB7XG4gICAgICB0ZXh0OiBbJ3RleHQnLCAncGFzc3dvcmQnLCAnZW1haWwnLCAnY29sb3InLCAndGVsJ10sXG4gICAgICBoZWFkZXI6IFsnaDEnLCAnaDInLCAnaDMnXSxcbiAgICAgIGJ1dHRvbjogWydidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0J10sXG4gICAgICBwYXJhZ3JhcGg6IFsncCcsICdhZGRyZXNzJywgJ2Jsb2NrcXVvdGUnLCAnY2FudmFzJywgJ291dHB1dCddLFxuICAgICAgdGV4dGFyZWE6IFsndGV4dGFyZWEnLCAncXVpbGwnXVxuICAgIH07XG5cblxuZXhwb3J0IGNvbnN0IGVtcHR5ID0gZWxlbWVudCA9PiB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyID0gKGVsZW1zLCB0ZXJtLCBzaG93ID0gdHJ1ZSkgPT4ge1xuICBsZXQgZmlsdGVyZWRFbGVtcyA9IFtdO1xuICBsZXQgdG9nZ2xlID0gWydub25lJywgJ2Jsb2NrJ107XG5cbiAgaWYgKHNob3cpIHtcbiAgICB0b2dnbGUgPSB0b2dnbGUucmV2ZXJzZSgpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IGVsZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IHR4dCA9IGVsZW1zW2ldLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHR4dC5pbmRleE9mKHRlcm0udG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICBlbGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gdG9nZ2xlWzBdO1xuICAgICAgZmlsdGVyZWRFbGVtcy5wdXNoKGVsZW1zW2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbXNbaV0uc3R5bGUuZGlzcGxheSA9IHRvZ2dsZVsxXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRFbGVtcztcbn07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25GaWVsZHMgPSBbXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgICAnY2hlY2tib3gnLFxuICAgICAgJ3JhZGlvLWdyb3VwJyxcbiAgICAgICdhdXRvY29tcGxldGUnXG4gICAgXTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbkZpZWxkc1JlZ0V4ID0gbmV3IFJlZ0V4cChgKCR7b3B0aW9uRmllbGRzLmpvaW4oJ3wnKX0pYCk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb20ge1xuICBjb25zdHJ1Y3Rvcihmb3JtSUQpIHtcbiAgICB0aGlzLm9wdGlvbkZpZWxkcyA9IG9wdGlvbkZpZWxkcztcbiAgICB0aGlzLm9wdGlvbkZpZWxkc1JlZ0V4ID0gb3B0aW9uRmllbGRzUmVnRXg7XG5cbiAgICB0aGlzLnN1YnR5cGVzID0gZGVmYXVsdFN1YnR5cGVzO1xuXG4gICAgLyoqXG4gICAgICogVXRpbCB0byByZW1vdmUgY29udGVudHMgb2YgRE9NIE9iamVjdFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gZWxlbWVudCB3aXRoIGl0cyBjaGlsZHJlbiByZW1vdmVkXG4gICAgICovXG4gICAgdGhpcy5lbXB0eSA9IGVtcHR5O1xuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBzaG93IGFuIEFycmF5IG9yIEhUTUxDb2xsZWN0aW9uIG9mIGVsZW1lbnRzXG4gICAgICogQHBhcmFtICB7QXJyYXl9ICAgZWxlbXNcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICB0ZXJtICBtYXRjaCB0ZXh0Q29udGVudCB0byB0aGlzIHRlcm1cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBzaG93ICBvciBoaWRlIGVsZW1lbnRzXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgZmlsdGVyZWQgZWxlbWVudHNcbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcblxuICAgIGluc3RhbmNlRG9tW2Zvcm1JRF0gPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZURvbVtmb3JtSURdO1xuICB9XG59XG4iLCIvKipcbiAqIEZvcm0gQnVpbGRlciBldmVudHNcbiAqIEByZXR1cm4ge09iamVjdH0gdmFyaW91cyBldmVudHMgdG8gYmUgdHJpZ2dlclxuICovXG4vLyBmdW5jdGlvbiBmYkV2ZW50cygpe1xuICBjb25zdCBldmVudHMgPSB7fTtcblxuICBldmVudHMubG9hZGVkID0gbmV3IEV2ZW50KCdsb2FkZWQnKTtcbiAgZXZlbnRzLnZpZXdEYXRhID0gbmV3IEV2ZW50KCd2aWV3RGF0YScpO1xuICBldmVudHMudXNlckRlY2xpbmVkID0gbmV3IEV2ZW50KCd1c2VyRGVjbGluZWQnKTtcbiAgZXZlbnRzLm1vZGFsQ2xvc2VkID0gbmV3IEV2ZW50KCdtb2RhbENsb3NlZCcpO1xuICBldmVudHMubW9kYWxPcGVuZWQgPSBuZXcgRXZlbnQoJ21vZGFsT3BlbmVkJyk7XG4gIGV2ZW50cy5mb3JtU2F2ZWQgPSBuZXcgRXZlbnQoJ2Zvcm1TYXZlZCcpO1xuICBldmVudHMuZmllbGRBZGRlZCA9IG5ldyBFdmVudCgnZmllbGRBZGRlZCcpO1xuICBldmVudHMuZmllbGRSZW1vdmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbW92ZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVuZGVyZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVuZGVyZWQnKTtcblxuLy8gICByZXR1cm4gZXZlbnRzO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge2RlZmF1bHRTdWJ0eXBlc30gZnJvbSAnLi9kb20nO1xuLyoqXG4gKiByZW5kZXIgdGhlIGZvcm1CdWlsZGVyIFhNTCBpbnRvIGh0bWxcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IGh0bWwgZWxlbWVudCB3aGVyZSBmb3JtIHdpbGwgYmUgcmVuZGVyZWQgKG9wdGlvbmFsKVxuICogQHJldHVybiB7T2JqZWN0fSBmb3JtUmVuZGVyIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEZvcm1SZW5kZXIob3B0aW9ucywgZWxlbWVudCkge1xuICBjb25zdCBmb3JtUmVuZGVyID0gdGhpcztcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBkZXN0cm95VGVtcGxhdGU6IHRydWUsIC8vIEB0b2RvXG4gICAgICBjb250YWluZXI6IGZhbHNlLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGZvcm1EYXRhOiBmYWxzZSxcbiAgICAgIHN1YnR5cGVzOiBkZWZhdWx0U3VidHlwZXMsXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBmb3JtUmVuZGVyZWQ6ICdGb3JtIFJlbmRlcmVkJyxcbiAgICAgICAgbm9Gb3JtRGF0YTogJ05vIGZvcm0gZGF0YS4nLFxuICAgICAgICBvdGhlcjogJ090aGVyJyxcbiAgICAgICAgc2VsZWN0Q29sb3I6ICdTZWxlY3QgQ29sb3InXG4gICAgICB9LFxuICAgICAgb25SZW5kZXI6ICgpID0+IHt9LFxuICAgICAgcmVuZGVyOiB0cnVlLFxuICAgICAgbm90aWZ5OiB7XG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm5pbmc6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICBsZXQgb3B0cyA9ICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFvcHRzLmZvcm1EYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHNldERhdGEgPSB7XG4gICAgICB4bWw6IGZvcm1EYXRhID0+IHV0aWxzLnBhcnNlWE1MKGZvcm1EYXRhKSxcbiAgICAgIGpzb246IGZvcm1EYXRhID0+IHdpbmRvdy5KU09OLnBhcnNlKGZvcm1EYXRhKVxuICAgIH07XG5cbiAgICBvcHRzLmZvcm1EYXRhID0gc2V0RGF0YVtvcHRzLmRhdGFUeXBlXShvcHRzLmZvcm1EYXRhKSB8fCBmYWxzZTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogRXh0ZW5kIEVsZW1lbnQgcHJvdG90eXBlIHRvIGFsbG93IHVzIHRvIGFwcGVuZCBmaWVsZHNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZHMgTm9kZSBlbGVtZW50c1xuICAgKi9cbiAgRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kRm9ybUZpZWxkcyA9IGZ1bmN0aW9uKGZpZWxkcykge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcztcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQoZXZlbnRzLmZpZWxkUmVuZGVyZWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRlbmQgRWxlbWVudCBwcm90b3R5cGUgdG8gcmVtb3ZlIGNvbnRlbnRcbiAgICovXG4gIEVsZW1lbnQucHJvdG90eXBlLmVtcHR5Q29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzO1xuICAgIHdoaWxlIChlbGVtZW50Lmxhc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBydW5DYWxsYmFja3MgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAob3B0cy5vblJlbmRlcikge1xuICAgICAgb3B0cy5vblJlbmRlcigpO1xuICAgIH1cbiAgfTtcblxuICBsZXQgc2FudGl6ZUZpZWxkID0gKGZpZWxkKSA9PiB7XG4gICAgbGV0IHNhbml0aXplZEZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpO1xuICAgIHNhbml0aXplZEZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzTmFtZSB8fCBmaWVsZC5jbGFzcyB8fCBudWxsO1xuICAgIGRlbGV0ZSBzYW5pdGl6ZWRGaWVsZC5jbGFzcztcblxuICAgIGlmIChmaWVsZC52YWx1ZXMpIHtcbiAgICAgIGZpZWxkLnZhbHVlcyA9IGZpZWxkLnZhbHVlcy5tYXAob3B0aW9uID0+IHV0aWxzLnRyaW1PYmoob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLnRyaW1PYmooc2FuaXRpemVkRmllbGQpO1xuICB9O1xuXG4gIGxldCBleHBvcnRNYXJrdXAgPSBmaWVsZHMgPT4gZmllbGRzLm1hcChlbGVtID0+IGVsZW0uaW5uZXJIVE1MKS5qb2luKCcnKTtcblxuICAvLyBCZWdpbiB0aGUgY29yZSBwbHVnaW5cbiAgbGV0IHJlbmRlcmVkID0gW107XG5cbiAgLy8gZ2VuZXJhdGUgZmllbGQgbWFya3VwIGlmIHdlIGhhdmUgZmllbGRzXG4gIGlmIChvcHRzLmZvcm1EYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLmZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2FuaXRpemVkRmllbGQgPSBzYW50aXplRmllbGQob3B0cy5mb3JtRGF0YVtpXSk7XG4gICAgICByZW5kZXJlZC5wdXNoKHV0aWxzLmdldFRlbXBsYXRlKHNhbml0aXplZEZpZWxkKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucmVuZGVyKSB7XG4gICAgICBpZiAob3B0cy5jb250YWluZXIpIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkRm9ybVdyYXAgPSB1dGlscy5tYXJrdXAoJ2RpdicsIHJlbmRlcmVkLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncmVuZGVyZWQtZm9ybSdcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRzLmNvbnRhaW5lciBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICAgIG9wdHMuY29udGFpbmVyID0gb3B0cy5jb250YWluZXJbMF07XG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5jb250YWluZXIuZW1wdHlDb250YWluZXIoKTtcbiAgICAgICAgb3B0cy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZWRGb3JtV3JhcCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5lbXB0eUNvbnRhaW5lcigpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZEZvcm1GaWVsZHMocmVuZGVyZWQpO1xuICAgICAgfVxuXG4gICAgICBydW5DYWxsYmFja3MoKTtcbiAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3Mob3B0cy5tZXNzYWdlcy5mb3JtUmVuZGVyZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtUmVuZGVyLm1hcmt1cCA9IGV4cG9ydE1hcmt1cChyZW5kZXJlZCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBub0RhdGEgPSB1dGlscy5tYXJrdXAoJ2RpdicsIG9wdHMubWVzc2FnZXMubm9Gb3JtRGF0YSwge1xuICAgICAgY2xhc3NOYW1lOiAnbm8tZm9ybS1kYXRhJ1xuICAgIH0pO1xuICAgIHJlbmRlcmVkLnB1c2gobm9EYXRhKTtcbiAgICBvcHRzLm5vdGlmeS5lcnJvcihvcHRzLm1lc3NhZ2VzLm5vRm9ybURhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1SZW5kZXI7XG59XG5cbihmdW5jdGlvbigkKSB7XG4gICQuZm4uZm9ybVJlbmRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBsZXQgZWxlbXMgPSB0aGlzO1xuICAgIGVsZW1zLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IGZvcm1SZW5kZXIgPSBuZXcgRm9ybVJlbmRlcihvcHRpb25zLCBlbGVtc1tpXSk7XG4gICAgICBlbGVtc1tpXS5kYXRhc2V0LmZvcm1SZW5kZXIgPSBmb3JtUmVuZGVyO1xuICAgICAgcmV0dXJuIGZvcm1SZW5kZXI7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuXG53aW5kb3cuRm9ybVJlbmRlciA9IEZvcm1SZW5kZXI7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1SZW5kZXI7XG4iLCJpbXBvcnQge2RlZmF1bHRTdWJ0eXBlcywgZmlsdGVyfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuXG4vKipcbiAqIENyb3NzIGZpbGUgdXRpbGl0aWVzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzLFxuICogc29ydGluZyBhbmQgb3RoZXIgZnVuIHN0dWZmXG4gKiBAcmV0dXJuIHtPYmplY3R9IHV0aWxzXG4gKi9cbi8vIGZ1bmN0aW9uIHV0aWxzKCkge1xuICBjb25zdCB1dGlscyA9IHt9O1xuICB3aW5kb3cuZmJMb2FkZWQgPSB7XG4gICAganM6IFtdLFxuICAgIGNzczogW11cbiAgfTtcbiAgd2luZG93LmZiRWRpdG9ycyA9IHtcbiAgICBxdWlsbDoge30sXG4gICAgdGlueW1jZToge31cbiAgfTtcblxuICAvLyBjbGVhbmVyIHN5bnRheCBmb3IgdGVzdGluZyBpbmRleE9mIGVsZW1lbnRcbiAgdXRpbHMuaW5BcnJheSA9IGZ1bmN0aW9uKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIE9iamVjdCB0cmltbWVkIG9mIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKi9cbiAgdXRpbHMudHJpbU9iaiA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IHhtbFJlbW92ZSA9IFtcbiAgICAgIG51bGwsXG4gICAgICB1bmRlZmluZWQsXG4gICAgICAnJyxcbiAgICAgIGZhbHNlLFxuICAgICAgJ2ZhbHNlJ1xuICAgIF07XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKHV0aWxzLmluQXJyYXkoYXR0cnNbYXR0cl0sIHhtbFJlbW92ZSkpIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGF0dHJzW2F0dHJdKSkge1xuICAgICAgICBpZiAoIWF0dHJzW2F0dHJdLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvKipcbiAgICogVGVzdCBpZiBhdHRyaWJ1dGUgaXMgYSB2YWxpZCBIVE1MIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIHV0aWxzLnZhbGlkQXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICBsZXQgaW52YWxpZCA9IFtcbiAgICAgICd2YWx1ZXMnLFxuICAgICAgJ2VuYWJsZU90aGVyJyxcbiAgICAgICdvdGhlcicsXG4gICAgICAnbGFiZWwnLFxuICAgICAgLy8gJ3N0eWxlJyxcbiAgICAgICdzdWJ0eXBlJ1xuICAgIF07XG4gICAgcmV0dXJuICF1dGlscy5pbkFycmF5KGF0dHIsIGludmFsaWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIGF0dHJzIG9iamVjdCBpbnRvIGEgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgb2JqZWN0IG9mIGF0dHJpYnV0ZXMgZm9yIG1hcmt1cFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB1dGlscy5hdHRyU3RyaW5nID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpICYmIHV0aWxzLnZhbGlkQXR0cihhdHRyKSkge1xuICAgICAgICBhdHRyID0gdXRpbHMuc2FmZUF0dHIoYXR0ciwgYXR0cnNbYXR0cl0pO1xuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0ci5uYW1lICsgYXR0ci52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGVzLmpvaW4oJyAnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhdHRyaWJ1dGVzIHRvIG1hcmt1cCBzYWZlIHN0cmluZ3NcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lICBhdHRyaWJ1dGUgbmFtZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIGF0dHJpYnV0ZSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKi9cbiAgdXRpbHMuc2FmZUF0dHIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSB1dGlscy5zYWZlQXR0ck5hbWUobmFtZSk7XG4gICAgbGV0IHZhbFN0cmluZztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbFN0cmluZyA9IHV0aWxzLmVzY2FwZUF0dHIodmFsdWUuam9pbignICcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YodmFsdWUpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsU3RyaW5nID0gdXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5yZXBsYWNlKCcsJywgJyAnKS50cmltKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUgPyBgPVwiJHt2YWxTdHJpbmd9XCJgIDogJyc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgdXRpbHMuc2FmZUF0dHJOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGxldCBzYWZlQXR0ciA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJ1xuICAgIH07XG5cbiAgICByZXR1cm4gc2FmZUF0dHJbbmFtZV0gfHwgdXRpbHMuaHlwaGVuQ2FzZShuYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBzdHJpbmdzIGludG8gbG93ZXJjYXNlLWh5cGhlblxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICB1dGlscy5oeXBoZW5DYXNlID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL14tKy9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnZlcnQgYSBoeXBoZW5hdGVkIHN0cmluZyB0byBjYW1lbENhc2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgdXRpbHMuY2FtZWxDYXNlID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCAobSwgdykgPT5cbiAgICB3LnRvVXBwZXJDYXNlKCkpO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgY29udGVudCB0eXBlXG4gICAqIEBwYXJhbSAge05vZGUgfCBTdHJpbmcgfCBBcnJheSB8IE9iamVjdH0gY29udGVudFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlIGZvciBtYXBwaW5nXG4gICAqL1xuICB1dGlscy5jb250ZW50VHlwZSA9IGNvbnRlbnQgPT4ge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIGNvbnRlbnQ7XG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdHlwZSA9ICdub2RlJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgIHR5cGUgPSAnYXJyYXknO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50cyB0byBhbiBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50cyAgb2JqZWN0IGZ1bGwgb2YgZXZlbnRzIGVnLiB7Y2xpY2s6IGV2dCA9PiBjYWxsYmFja31cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHV0aWxzLmJpbmRFdmVudHMgPSAoZWxlbWVudCwgZXZlbnRzKSA9PiB7XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgZm9yIChsZXQgZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldnQgPT4gZXZlbnRzW2V2ZW50XShldnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSBuYW1lIGF0dHJpYnV0ZVxuICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfSAgICAgICBuYW1lXG4gKi9cbiAgdXRpbHMubmFtZUF0dHIgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGxldCBlcG9jaCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBwcmVmaXggPSBmaWVsZC50eXBlIHx8IHV0aWxzLmh5cGhlbkNhc2UoZmllbGQubGFiZWwpO1xuICAgIHJldHVybiBwcmVmaXggKyAnLScgKyBlcG9jaDtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgbWFya3VwIHdyYXBwZXIgd2hlcmUgbmVlZGVkXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgIHRhZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl8T2JqZWN0fSBjb250ZW50IHdlIHdyYXAgdGhpc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgICAgICBhdHRyc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IERPTSBFbGVtZW50XG4gICAqL1xuICB1dGlscy5tYXJrdXAgPSBmdW5jdGlvbih0YWcsIGNvbnRlbnQgPSAnJywgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgbGV0IGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgbGV0IHtldmVudHMsIC4uLmF0dHJzfSA9IGF0dHJpYnV0ZXM7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICBjb25zdCBhcHBlbmRDb250ZW50ID0ge1xuICAgICAgc3RyaW5nOiAoY29udGVudCkgPT4ge1xuICAgICAgICBmaWVsZC5pbm5lckhUTUwgKz0gY29udGVudDtcbiAgICAgIH0sXG4gICAgICBvYmplY3Q6IChjb25maWcpID0+IHtcbiAgICAgICAgbGV0IHt0YWcsIGNvbnRlbnQsIC4uLmRhdGF9ID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQodXRpbHMubWFya3VwKHRhZywgY29udGVudCwgZGF0YSkpO1xuICAgICAgfSxcbiAgICAgIG5vZGU6IChjb250ZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIH0sXG4gICAgICBhcnJheTogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29udGVudFR5cGUgPSB1dGlscy5jb250ZW50VHlwZShjb250ZW50W2ldKTtcbiAgICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50W2ldKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uOiBjb250ZW50ID0+IHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICAgICAgY29udGVudFR5cGUgPSB1dGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudCk7XG4gICAgICB9LFxuICAgICAgdW5kZWZpbmVkOiAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IodGFnLCBjb250ZW50LCBhdHRyaWJ1dGVzKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICBsZXQgbmFtZSA9IHV0aWxzLnNhZmVBdHRyTmFtZShhdHRyKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0uY2FsbCh0aGlzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICB1dGlscy5iaW5kRXZlbnRzKGZpZWxkLCBldmVudHMpO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGh0bWwgZWxlbWVudCBhdHRyaWJ1dGVzIHRvIGtleS92YWx1ZSBvYmplY3RcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtIERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gZXg6IHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKi9cbiAgdXRpbHMucGFyc2VBdHRycyA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICBsZXQgYXR0cnMgPSBlbGVtLmF0dHJpYnV0ZXM7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICB1dGlscy5mb3JFYWNoKGF0dHJzLCBhdHRyID0+IHtcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XG4gICAgICBpZiAoYXR0clZhbC5tYXRjaCgvZmFsc2V8dHJ1ZS9nKSkge1xuICAgICAgICBhdHRyVmFsID0gKGF0dHJWYWwgPT09ICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xuICAgICAgICBhdHRyVmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0clZhbCkge1xuICAgICAgICBkYXRhW2F0dHJzW2F0dHJdLm5hbWVdID0gYXR0clZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZpZWxkIG9wdGlvbnMgdG8gb3B0aW9uRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkICBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICBvcHRpb25EYXRhIGFycmF5XG4gICAqL1xuICB1dGlscy5wYXJzZU9wdGlvbnMgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBmaWVsZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnb3B0aW9uJyk7XG4gICAgbGV0IG9wdGlvbkRhdGEgPSB7fTtcbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgaWYgKG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3B0aW9uRGF0YSA9IHV0aWxzLnBhcnNlQXR0cnMob3B0aW9uc1tpXSk7XG4gICAgICAgIG9wdGlvbkRhdGEubGFiZWwgPSBvcHRpb25zW2ldLnRleHRDb250ZW50O1xuICAgICAgICBkYXRhLnB1c2gob3B0aW9uRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHhtbFN0cmluZ1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBmb3JtRGF0YSBhcnJheVxuICAgKi9cbiAgdXRpbHMucGFyc2VYTUwgPSBmdW5jdGlvbih4bWxTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgIGxldCB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbFN0cmluZywgJ3RleHQveG1sJyk7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG5cbiAgICBpZiAoeG1sKSB7XG4gICAgICBsZXQgZmllbGRzID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWVsZCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IHV0aWxzLnBhcnNlQXR0cnMoZmllbGRzW2ldKTtcblxuICAgICAgICBpZiAoZmllbGRzW2ldLmNoaWxkcmVuICYmIGZpZWxkc1tpXS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gdXRpbHMucGFyc2VPcHRpb25zKGZpZWxkc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBlc2NhcGVkIEhUTUwgaW50byB1c2FibGUgSFRNTFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgZXNjYXBlZCBIVE1MXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBwYXJzZWQgSFRNTFxuICAgKi9cbiAgdXRpbHMucGFyc2VkSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBsZXQgZXNjYXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZXNjYXBlRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFc2NhcGUgbWFya3VwIHNvIGl0IGNhbiBiZSBkaXNwbGF5ZWQgcmF0aGVyIHRoYW4gcmVuZGVyZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sIG1hcmt1cFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgZXNjYXBlZCBodG1sXG4gICAqL1xuICB1dGlscy5lc2NhcGVIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50ID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC5pbm5lckhUTUw7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGFuIGF0dHJpYnV0ZVxuICB1dGlscy5lc2NhcGVBdHRyID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgbGV0IG1hdGNoID0ge1xuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlcGxhY2VUYWcgPSB0YWcgPT4gbWF0Y2hbdGFnXSB8fCB0YWc7XG5cbiAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSA/IHN0ci5yZXBsYWNlKC9bXCImPD5dL2csIHJlcGxhY2VUYWcpIDogc3RyO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhdHRyaWJ1dGVzXG4gIHV0aWxzLmVzY2FwZUF0dHJzID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgYXR0cnNbYXR0cl0gPSB1dGlscy5lc2NhcGVBdHRyKGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLy8gZm9yRWFjaCB0aGF0IGNhbiBiZSB1c2VkIG9uIG5vZGVMaXN0XG4gIHV0aWxzLmZvckVhY2ggPSBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pOyAvLyBwYXNzZXMgYmFjayBzdHVmZiB3ZSBuZWVkXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5IG9mIGVsZW1lbnRzXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJheSAgYXJyYXkgd2l0aCBwb3NzaWJsZSBkdXBsaWNhdGVzXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgYXJyYXkgd2l0aCBvbmx5IHVuaXF1ZSB2YWx1ZXNcbiAgICovXG4gIHV0aWxzLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigoZWxlbSwgcG9zLCBhcnIpID0+IHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihlbGVtKSA9PT0gcG9zO1xuICAgIH0pO1xuICB9O1xuXG4gIHV0aWxzLm1ha2VMYWJlbCA9IChkYXRhLCBsYWJlbCA9ICcnLCBkZXNjcmlwdGlvbiA9ICcnKSA9PiB7XG4gICAgbGV0IGxhYmVsVGV4dCA9IHV0aWxzLnBhcnNlZEh0bWwobGFiZWwpO1xuICAgIGxldCBsYWJlbENvbnRlbnRzID0gW2xhYmVsVGV4dF07XG5cbiAgICBpZiAoZGF0YS5yZXF1aXJlZCkge1xuICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnKicsIHtjbGFzc05hbWU6ICdyZXF1aXJlZCd9KSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICBsYWJlbENvbnRlbnRzLnB1c2gobSgnc3BhbicsICc/Jywge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3Rvb2x0aXAtZWxlbWVudCcsXG4gICAgICAgICAgdG9vbHRpcDogZGVzY3JpcHRpb25cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtKCdsYWJlbCcsIGxhYmVsQ29udGVudHMsIHtcbiAgICAgIGZvcjogZGF0YS5pZCxcbiAgICAgIGNsYXNzTmFtZTogYGZiLSR7ZGF0YS50eXBlfS1sYWJlbGBcbiAgICB9KTtcbiAgfTtcblxuICB1dGlscy50ZW1wbGF0ZU1hcCA9ICh0ZW1wbGF0ZXMsIHR5cGUpID0+IHtcbiAgICBsZXQgdGVtcGxhdGU7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIHRlbXBsYXRlcykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBpZih1dGlscy5pbkFycmF5KHR5cGUsIGtleSkpIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGtleSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgdXRpbHMuYXV0b2NvbXBsZXRlVGVtcGxhdGUgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7dmFsdWVzLCB0eXBlLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBjb25zdCBrZXlib2FyZE5hdiA9IChlKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gZS50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICBsZXQgYWN0aXZlT3B0aW9uID0gbGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUtb3B0aW9uJylbMF07XG4gICAgICBjb25zdCBrZXlDb2RlTWFwVmFscyA9IFtcbiAgICAgICAgLy8gdXBcbiAgICAgICAgWzM4LCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbi5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gYWN0aXZlT3B0aW9uLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvLyBkb3duXG4gICAgICAgIFs0MCwgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gYWN0aXZlT3B0aW9uLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBsaXN0LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFsxMywgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gYWN0aXZlT3B0aW9uLmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmIChsaXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIF07XG4gICAgICBsZXQga2V5Q29kZU1hcCA9IG5ldyBNYXAoa2V5Q29kZU1hcFZhbHMpO1xuXG4gICAgICBsZXQgZGlyZWN0aW9uID0ga2V5Q29kZU1hcC5nZXQoZS5rZXlDb2RlKTtcbiAgICAgIGlmKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgZGlyZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3Rpb24oKTtcbiAgICB9O1xuICAgIGNvbnN0IGZhdXhFdmVudHMgPSB7XG4gICAgICBmb2N1czogZXZ0ID0+IHtcbiAgICAgICAgZXZ0LnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5Ym9hcmROYXYpO1xuICAgICAgICBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSxcbiAgICAgIGJsdXI6IGV2dCA9PiB7XG4gICAgICAgIGV2dC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkTmF2KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfSxcbiAgICAgIGlucHV0OiAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICBmaWx0ZXIobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLCBldnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKCFldnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBmYXV4QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLFxuICAgICAge1xuICAgICAgICBpZDogYCR7ZGF0YS5pZH0taW5wdXRgLFxuICAgICAgICBldmVudHM6IGZhdXhFdmVudHNcbiAgICAgIH0pO1xuICAgIGxldCBoaWRkZW5BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHt0eXBlOiAnaGlkZGVuJ30pO1xuICAgIGRlbGV0ZSBmYXV4QXR0cnMubmFtZTtcbiAgICBjb25zdCBmaWVsZCA9IFtcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgZmF1eEF0dHJzKSxcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgaGlkZGVuQXR0cnMpXG4gICAgXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB2YWx1ZXMubWFwKG9wdGlvbkRhdGEgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gb3B0aW9uRGF0YS5sYWJlbDtcbiAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiBldnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gbGlzdC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBvcHRpb25EYXRhLmxhYmVsO1xuICAgICAgICAgICAgZmllbGQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gb3B0aW9uRGF0YS52YWx1ZTtcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBvcHRpb25EYXRhLnZhbHVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG0oJ2xpJywgbGFiZWwsIGNvbmZpZyk7XG4gICAgfSk7XG5cbiAgICBmaWVsZC5wdXNoKG0oJ3VsJywgb3B0aW9ucyxcbiAgICAgIHtpZDogYCR7ZGF0YS5pZH0tbGlzdGAsIGNsYXNzTmFtZTogYGZiLSR7dHlwZX0tbGlzdGB9KSk7XG5cbiAgICBjb25zdCBvblJlbmRlciA9IChldnQpID0+IHtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge2ZpZWxkLCBvblJlbmRlcn07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIERPTSBlbGVtZW50cyBmb3Igc2VsZWN0LCBjaGVja2JveC1ncm91cCBhbmQgcmFkaW8tZ3JvdXAuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGREYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIERPTSBlbGVtZW50c1xuICAgKi9cbiAgdXRpbHMuc2VsZWN0VGVtcGxhdGUgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCBvcHRpb25zID0gW107XG4gICAgbGV0IHt2YWx1ZXMsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbmxpbmUsIG90aGVyLCB0b2dnbGUsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCBvcHRpb25UeXBlID0gdHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG4gICAgbGV0IGlzU2VsZWN0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBpZiAocGxhY2Vob2xkZXIgJiYgaXNTZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5wdXNoKG0oJ29wdGlvbicsIHBsYWNlaG9sZGVyLCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWQ6IG51bGxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQge2xhYmVsID0gJycsIC4uLm9wdGlvbkF0dHJzfSA9IHZhbHVlc1tpXTtcblxuICAgICAgICBvcHRpb25BdHRycy5pZCA9IGAke2RhdGEuaWR9LSR7aX1gO1xuICAgICAgICBpZiAoIW9wdGlvbkF0dHJzLnNlbGVjdGVkIHx8IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICAgICAgbGV0IG8gPSBtKCdvcHRpb24nLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCksIG9wdGlvbkF0dHJzKTtcbiAgICAgICAgICBvcHRpb25zLnB1c2gobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKG9wdGlvbkF0dHJzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gJ2NoZWNrZWQnO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgaW5wdXQgPSBtKCdpbnB1dCcsIG51bGwsIE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG9wdGlvbkF0dHJzKSk7XG4gICAgICAgICAgbGV0IGxhYmVsQXR0cnMgPSB7Zm9yOiBvcHRpb25BdHRycy5pZH07XG4gICAgICAgICAgbGV0IGxhYmVsQ29udGVudCA9IFtpbnB1dCwgbGFiZWxdO1xuICAgICAgICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgICAgIGxldCBrY1RvZ2dsZSA9IG0oJ3NwYW4nKTtcbiAgICAgICAgICAgIGxhYmVsQ29udGVudCA9IFtpbnB1dCwga2NUb2dnbGUsIGxhYmVsXTtcbiAgICAgICAgICAgIGxhYmVsQXR0cnMuY2xhc3NOYW1lID0gJ2tjLXRvZ2dsZSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIGxhYmVsQ29udGVudCwgbGFiZWxBdHRycyk7XG4gICAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1NlbGVjdCAmJiBvdGhlcikge1xuICAgICAgICBsZXQgb3RoZXJPcHRpb25BdHRycyA9IHtcbiAgICAgICAgICBpZDogYCR7ZGF0YS5pZH0tb3RoZXJgLFxuICAgICAgICAgIGNsYXNzTmFtZTogYCR7ZGF0YS5jbGFzc05hbWV9IG90aGVyLW9wdGlvbmAsXG4gICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBjbGljazogKCkgPT4gdXRpbHMub3RoZXJPcHRpb25DQihvdGhlck9wdGlvbkF0dHJzLmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gbGV0IGxhYmVsID0gbWkxOG4uY3VycmVudC5vdGhlcjtcbiAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICB3cmFwcGVyQ2xhc3MgKz0gJy1pbmxpbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3RoZXJPcHRpb25BdHRycyk7XG4gICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xuXG4gICAgICAgIGxldCBvdGhlclZhbEF0dHJzID0ge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgaWQ6IGAke290aGVyT3B0aW9uQXR0cnMuaWR9LXZhbHVlYCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdvdGhlci12YWwnXG4gICAgICAgIH07XG4gICAgICAgIGxldCBvdGhlcklucHV0cyA9IFtcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG9wdGlvbkF0dHJzKSxcbiAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnT3RoZXInKSxcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG90aGVyVmFsQXR0cnMpXG4gICAgICAgIF07XG4gICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBvdGhlcklucHV0cywge2Zvcjogb3B0aW9uQXR0cnMuaWR9KTtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlcyA9IFtcbiAgICAgIFsnc2VsZWN0JyxcbiAgICAgICAgKCkgPT4gbShvcHRpb25UeXBlLCBvcHRpb25zLCBkYXRhKV0sXG4gICAgICBbWydjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCcsICdjaGVja2JveCddLFxuICAgICAgICAoKSA9PiBtKCdkaXYnLCBvcHRpb25zLCB7Y2xhc3NOYW1lOiB0eXBlfSldXG4gICAgXTtcblxuICAgIHJldHVybiB1dGlscy50ZW1wbGF0ZU1hcCh0ZW1wbGF0ZXMsIHR5cGUpO1xuICB9O1xuXG4gIHV0aWxzLmRlZmF1bHRGaWVsZCA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHtsYWJlbCwgZGVzY3JpcHRpb24sIHN1YnR5cGUsIHR5cGUsIGlkLCBpc1ByZXZpZXcsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGlmIChpZCkge1xuICAgICAgaWYgKGlzUHJldmlldykge1xuICAgICAgICBpZiAoZGF0YS5uYW1lKSB7XG4gICAgICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJy1wcmV2aWV3JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhLm5hbWUgPSB1dGlscy5uYW1lQXR0cihmaWVsZERhdGEpICsgJy1wcmV2aWV3JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGF0YS5pZCA9IGRhdGEubmFtZTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICBkYXRhLnRpdGxlID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICB0eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICBsZXQgZmllbGQgPSB7XG4gICAgICBmaWVsZDogbSh0eXBlLCB1dGlscy5wYXJzZWRIdG1sKGxhYmVsKSwgZGF0YSksXG4gICAgICBvblJlbmRlcjogdXRpbHMubm9vcFxuICAgIH07XG5cbiAgICByZXR1cm4gKCkgPT4gZmllbGQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvYWRzIGFuIGFycmF5IG9mIHNjcmlwdHMgdXNpbmcgalF1ZXJ5J3MgYGdldFNjcmlwdGBcbiAgICogQHBhcmFtICB7QXJyYXl8U3RyaW5nfSAgc2NyaXB0U2NyICAgIHNjcmlwdHNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoICAgb3B0aW9uYWwgdG8gbG9hZCBmb3JtXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgIGEgcHJvbWlzZVxuICAgKi9cbiAgdXRpbHMuZ2V0U2NyaXB0cyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBjb25zdCAkID0galF1ZXJ5O1xuICAgIGxldCBfYXJyID0gW107XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NyaXB0U2NyKSkge1xuICAgICAgc2NyaXB0U2NyID0gW3NjcmlwdFNjcl07XG4gICAgfVxuXG4gICAgaWYgKCF1dGlscy5pc0NhY2hlZChzY3JpcHRTY3IpKSB7XG4gICAgICBfYXJyID0gJC5tYXAoc2NyaXB0U2NyLCBzcmMgPT4ge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkYXRhVHlwZTogJ3NjcmlwdCcsXG4gICAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgICAgdXJsOiAocGF0aCB8fCAnJykgKyBzcmNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICQuYWpheChvcHRpb25zKS5kb25lKCgpID0+IHdpbmRvdy5mYkxvYWRlZC5qcy5wdXNoKHNyYykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2Fyci5wdXNoKCQuRGVmZXJyZWQoIGRlZmVycmVkID0+ICQoIGRlZmVycmVkLnJlc29sdmUgKSkpO1xuXG4gICAgcmV0dXJuICQud2hlbiguLi5fYXJyKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJlbW90ZSByZXNvdXJjZSBpcyBhbHJlYWR5IGxvYWRlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IHNyYyAgdXJsIG9mIHJlbW90ZSBzY3JpcHQgb3IgY3NzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgdHlwZSAgICAgICAnanMnIG9yICdjc3MnXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgaXNDYWNoZWRcbiAgICovXG4gIHV0aWxzLmlzQ2FjaGVkID0gKHNyYywgdHlwZSA9ICdqcycpID0+IHtcbiAgICBsZXQgaXNDYWNoZWQgPSBmYWxzZTtcbiAgICBjb25zdCBjYWNoZSA9IHdpbmRvdy5mYkxvYWRlZFt0eXBlXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgICBpc0NhY2hlZCA9IHNyYy5ldmVyeShzID0+IHV0aWxzLmluQXJyYXkocywgY2FjaGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDYWNoZWQgPSB1dGlscy5pbkFycmF5KHNyYywgY2FjaGUpO1xuICAgIH1cbiAgICByZXR1cm4gaXNDYWNoZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgc3R5bGVzaGVldHMgdG8gdGhlIGhlYWRcbiAgICogQHBhcmFtICB7QXJyYXl9IHNjcmlwdFNjclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGhcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHV0aWxzLmdldFN0eWxlcyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBpZiAodXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyLCAnY3NzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBwZW5kU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgd2luZG93LmZiTG9hZGVkLmNzcy5wdXNoKGhyZWYpO1xuICAgIH07XG4gICAgc2NyaXB0U2NyLmZvckVhY2goc3JjID0+IGFwcGVuZFN0eWxlKChwYXRoIHx8ICcnKSArIHNyYykpO1xuICB9O1xuXG4gIHV0aWxzLmxvbmdUZXh0VGVtcGxhdGUgPSBkYXRhID0+IHtcbiAgICBsZXQge3ZhbHVlID0gJycsIC4uLmF0dHJzfSA9IGRhdGE7XG4gICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgZmllbGQ6IG0oJ3RleHRhcmVhJywgdXRpbHMucGFyc2VkSHRtbCh2YWx1ZSksIGF0dHJzKVxuICAgIH07XG4gICAgbGV0IGVkaXRvcnMgPSB7XG4gICAgICB0aW55bWNlOiB7XG4gICAgICAgIGpzOiBbJy8vY2RuLnRpbnltY2UuY29tLzQvdGlueW1jZS5taW4uanMnXSxcbiAgICAgICAgb25SZW5kZXI6IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy50aW55bWNlLmVkaXRvcnNbZGF0YS5pZF0pIHtcbiAgICAgICAgICAgIHdpbmRvdy50aW55bWNlLmVkaXRvcnNbZGF0YS5pZF0ucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdpbmRvdy50aW55bWNlLmluaXQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0ZW1wbGF0ZS5maWVsZCxcbiAgICAgICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAnYWR2bGlzdCBhdXRvbGluayBsaXN0cyBsaW5rIGltYWdlIGNoYXJtYXAgcHJpbnQgcHJldmlldyBhbmNob3InLFxuICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZSB2aXN1YWxibG9ja3MgY29kZSBmdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgJ2luc2VydGRhdGV0aW1lIG1lZGlhIHRhYmxlIGNvbnRleHRtZW51IHBhc3RlIGNvZGUnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdG9vbGJhcjogJ2luc2VydGZpbGUgdW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8IGxpbmsgaW1hZ2UnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBxdWlsbDoge1xuICAgICAgICBqczogWycvL2Nkbi5xdWlsbGpzLmNvbS8xLjEuMy9xdWlsbC5qcyddLFxuICAgICAgICBjc3M6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuc25vdy5jc3MnXSxcbiAgICAgICAgb25SZW5kZXI6IGV2dCA9PiB7XG4gICAgICAgICAgY29uc3QgRGVsdGEgPSB3aW5kb3cuUXVpbGwuaW1wb3J0KCdkZWx0YScpO1xuICAgICAgICAgIHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbZGF0YS5pZF0gPSB7fTtcbiAgICAgICAgICBsZXQgZWRpdG9yID0gd2luZG93LmZiRWRpdG9ycy5xdWlsbFtkYXRhLmlkXTtcbiAgICAgICAgICBlZGl0b3IuaW5zdGFuY2UgPSBuZXcgd2luZG93LlF1aWxsKHRlbXBsYXRlLmZpZWxkLCB7XG4gICAgICAgICAgICBtb2R1bGVzOiB7XG4gICAgICAgICAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAgICAgICAgICBbeydoZWFkZXInOiBbMSwgMiwgZmFsc2VdfV0sXG4gICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcbiAgICAgICAgICAgICAgICBbJ2NvZGUtYmxvY2snXVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGF0dHJzLnBsYWNlaG9sZGVyIHx8ICcnLFxuICAgICAgICAgICAgdGhlbWU6ICdzbm93J1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGVkaXRvci5kYXRhID0gbmV3IERlbHRhKCk7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBlZGl0b3IuaW5zdGFuY2Uuc2V0Q29udGVudHMod2luZG93LkpTT04ucGFyc2UodXRpbHMucGFyc2VkSHRtbCh2YWx1ZSkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICAgICAgICBlZGl0b3IuZGF0YSA9IGVkaXRvci5kYXRhLmNvbXBvc2UoZGVsdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRlbXBsYXRlLm9uUmVuZGVyID0gZWRpdG9yc1tkYXRhLnR5cGVdLm9uUmVuZGVyO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAncXVpbGwnKSB7XG4gICAgICB0ZW1wbGF0ZS5maWVsZCA9IG0oJ2RpdicsIG51bGwsIGF0dHJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0pIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIG9uUmVuZGVyKTtcblxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcykge1xuICAgICAgICAgIHV0aWxzLmdldFN0eWxlcyhlZGl0b3JzW2RhdGEudHlwZV0uY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmpzICYmICF1dGlscy5pc0NhY2hlZChlZGl0b3JzW2RhdGEudHlwZV0uanMpKSB7XG4gICAgICAgICAgdXRpbHMuZ2V0U2NyaXB0cyhlZGl0b3JzW2RhdGEudHlwZV0uanMpLmRvbmUodGVtcGxhdGUub25SZW5kZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlLm9uUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtmaWVsZDogdGVtcGxhdGUuZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICB1dGlscy50ZW1wbGF0ZXMgPSBbXTtcblxuICB1dGlscy5nZXRUZW1wbGF0ZSA9IChmaWVsZERhdGEsIGlzUHJldmlldyA9IGZhbHNlKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBzdWJ0eXBlLFxuICAgICAgbGFiZWxQb3NpdGlvbixcbiAgICAgIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCB0ZW1wbGF0ZTtcbiAgICBsZXQgZmllbGQ7XG5cbiAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICBpZiAoZGF0YS5uYW1lKSB7XG4gICAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLm5hbWUgPSB1dGlscy5uYW1lQXR0cihmaWVsZERhdGEpICsgJy1wcmV2aWV3JztcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YS5pZCA9IGRhdGEubmFtZTtcblxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICBkYXRhLnR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLm11bHRpcGxlIHx8IGRhdGEudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJykge1xuICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJ1tdJztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5yZXF1aXJlZCkge1xuICAgICAgZGF0YS5yZXF1aXJlZCA9IG51bGw7XG4gICAgICBkYXRhWydhcmlhLXJlcXVpcmVkJ10gPSAndHJ1ZSc7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkTGFiZWwgPSB1dGlscy5tYWtlTGFiZWwoZGF0YSwgbGFiZWwsIGRlc2NyaXB0aW9uKTtcblxuICAgIGxldCB0ZW1wbGF0ZXMgPSB1dGlscy50ZW1wbGF0ZXMuY29uY2F0KFtcbiAgICAgIFsnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBhdXRvY29tcGxldGUgPSB1dGlscy5hdXRvY29tcGxldGVUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGF1dG9jb21wbGV0ZS5maWVsZF0sXG4gICAgICAgICAgICBvblJlbmRlcjogYXV0b2NvbXBsZXRlLm9uUmVuZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW2RlZmF1bHRTdWJ0eXBlcy50ZXh0LmNvbmNhdChbJ251bWJlcicsICdmaWxlJywgJ2RhdGUnXSksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW20oZGF0YS50eXBlLCBudWxsLCBkYXRhKV0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1sncGFyYWdyYXBoJ10uY29uY2F0KGRlZmF1bHRTdWJ0eXBlcy5wYXJhZ3JhcGgpLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHt0eXBlLCAuLi5hdHRyc30gPSBkYXRhO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbbSh0eXBlLCB1dGlscy5wYXJzZWRIdG1sKGxhYmVsKSwgYXR0cnMpXSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbZGVmYXVsdFN1YnR5cGVzLmJ1dHRvbixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBtKCdidXR0b24nLCBsYWJlbCwgZGF0YSksXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1snc2VsZWN0JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJywgJ2NoZWNrYm94J10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSB1dGlscy5zZWxlY3RUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkXVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3RleHRhcmVhJywgJ3RpbnltY2UnLCAncXVpbGwnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IHV0aWxzLmxvbmdUZXh0VGVtcGxhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBmaWVsZC5maWVsZF0sXG4gICAgICAgICAgICBvblJlbmRlcjogZmllbGQub25SZW5kZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV1cbiAgICAgIF0pO1xuXG4gICAgICB0ZW1wbGF0ZSA9IHV0aWxzLnRlbXBsYXRlTWFwKHRlbXBsYXRlcywgZGF0YS50eXBlKTtcblxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBsYXRlID0gdXRpbHMuZGVmYXVsdEZpZWxkKGZpZWxkRGF0YSkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgbGV0IHdyYXBwZXJBdHRycyA9IHt9O1xuICAgICAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgICAgIHdyYXBwZXJBdHRycy5jbGFzc05hbWUgPVxuICAgICAgICAgIGBmYi0ke2RhdGEudHlwZX0gZm9ybS1ncm91cCBmaWVsZC0ke2RhdGEuaWR9YDtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZCA9IHV0aWxzLm1hcmt1cCgnZGl2JywgdGVtcGxhdGUuZmllbGQsIHdyYXBwZXJBdHRycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZCA9IHV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRlbXBsYXRlLm9uUmVuZGVyKSB7XG4gICAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCB0ZW1wbGF0ZS5vblJlbmRlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuLyoqXG4gKiBDYWxsYmFjayBmb3Igb3RoZXIgb3B0aW9uLlxuICogVG9nZ2xlcyB0aGUgaGlkZGVuIHRleHQgYXJlYSBmb3IgXCJvdGhlclwiIG9wdGlvbi5cbiAqIEBwYXJhbSAge1N0cmluZ30gb3RoZXJJZCBpZCBvZiB0aGUgXCJvdGhlclwiIG9wdGlvbiBpbnB1dFxuICovXG51dGlscy5vdGhlck9wdGlvbkNCID0gb3RoZXJJZCA9PiB7XG4gIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdGhlcklkKTtcbiAgY29uc3Qgb3RoZXJJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3RoZXJJZH0tdmFsdWVgKTtcblxuICBpZiAob3RoZXJJbnB1dC5jaGVja2VkKSB7XG4gICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyBhIHN0cmluZ1xuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgdW5jYXBpdGFsaXplZCBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICovXG51dGlscy5jYXBpdGFsaXplID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGJcXHcvZywgZnVuY3Rpb24obSkge1xuICAgICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn07XG5cblxudXRpbHMubWVyZ2UgPSAob2JqMSwgb2JqMikgPT4ge1xuICBsZXQgbWVyZ2VkT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqMSwgb2JqMik7XG4gIGZvciAobGV0IHByb3AgaW4gb2JqMikge1xuICAgIGlmIChtZXJnZWRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iajJbcHJvcF0pKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IEFycmF5LmlzQXJyYXkob2JqMVtwcm9wXSkgPyB1dGlscy51bmlxdWUob2JqMVtwcm9wXS5jb25jYXQob2JqMltwcm9wXSkpIDogb2JqMltwcm9wXTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iajJbcHJvcF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IHV0aWxzLm1lcmdlKG9iajFbcHJvcF0sIG9iajJbcHJvcF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gb2JqMltwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lcmdlZE9iajtcbn07XG5cbnV0aWxzLmFkZEV2ZW50TGlzdGVuZXJzID0gKGVsLCBldnRzLCBmbikgPT4ge1xuICByZXR1cm4gZXZ0cy5zcGxpdCgnICcpLmZvckVhY2goZSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKGUsIGZuLCBmYWxzZSkpO1xufTtcblxuLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IHBhcmVudCBieSBjbGFzc1xuICogQHBhcmFtICB7T2JqZWN0fSBlbCAgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSAge1N0cmluZ30gY2xzIGNsYXNzXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICBET00gRWxlbWVudFxuICovXG51dGlscy5jbG9zZXN0ID0gKGVsLCBjbHMpID0+IHtcbiAgbGV0IGNsYXNzTmFtZSA9IGNscy5yZXBsYWNlKCcuJywgJycpO1xuICB3aGlsZSAoKGVsID0gZWwucGFyZW50RWxlbWVudCkgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKTtcbiAgcmV0dXJuIGVsO1xufTtcblxudXRpbHMubm9vcCA9ICgpID0+IG51bGw7XG5cbnV0aWxzLmRlYm91bmNlID0gKGZ1bmMsIHdhaXQgPSAyNTAsIGltbWVkaWF0ZSA9IGZhbHNlKSA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICBsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBBZGQgYSBtb2JpbGUgY2xhc3NcbiAqIEB0b2RvIGZpbmQgY3NzIG9ubHkgc29sdXRpb25cbiAqIEByZXR1cm4ge1N0cmluZ30gTW9iaWxlIGNsYXNzIGFkZGVkIHRvIGZvcm1CdWlsZGVyXG4gKi9cbnV0aWxzLm1vYmlsZUNsYXNzID0gKCkgPT4ge1xuICBsZXQgbW9iaWxlQ2xhc3MgPSAnJztcbiAgKGZ1bmN0aW9uKGEpIHtcbiAgICBpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpIHtcbiAgICAgIG1vYmlsZUNsYXNzID0gJyBmYi1tb2JpbGUnO1xuICAgIH1cbiAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XG4gIHJldHVybiBtb2JpbGVDbGFzcztcbn07XG5cbi8qKlxuICogQ29udmVydCBjb252ZXJ0cyBtZXNzeSBgY2wjc3NOYW1lc2AgaW50byB2YWxpZCBgY2xhc3MtbmFtZXNgXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ30gaHlwaGVuYXRlZCBzdHJpbmdcbiAqL1xudXRpbHMubWFrZUNsYXNzTmFtZSA9IHN0ciA9PiB7XG4gIHJldHVybiB1dGlscy5oeXBoZW5DYXNlKHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKSk7XG59O1xuXG4vKipcbiAqIE1ha2Ugc3RyaW5ncyBzYWZlIHRvIGJlIHVzZWQgYXMgY2xhc3Nlc1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHN0cmluZyB0byBiZSBjb252ZXJ0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gICAgIGNvbnZlcnRlciBzdHJpbmdcbiAqL1xudXRpbHMuc2FmZW5hbWUgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL1teYS16QS1aMC05XFxfLV0vZywgJycpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKipcbiAqIFN0cmlwcyBub24tbnVtYmVycyBmcm9tIGEgbnVtYmVyIG9ubHkgaW5wdXRcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0ciBzdHJpbmcgd2l0aCBwb3NzaWJsZSBudW1iZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gICAgIHN0cmluZyB3aXRob3V0IG51bWJlcnNcbiAqL1xudXRpbHMuZm9yY2VOdW1iZXIgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiJdfQ==
