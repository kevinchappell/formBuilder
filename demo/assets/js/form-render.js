/*
formBuilder - https://formbuilder.online/
Version: 1.24.5
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":12}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":13}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":14}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":15}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":16}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":17}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":18}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{"../core-js/get-iterator":2,"../core-js/is-iterable":3}],10:[function(require,module,exports){
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
},{"../core-js/array/from":1}],11:[function(require,module,exports){
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
},{"../core-js/symbol":6,"../core-js/symbol/iterator":7}],12:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":33,"../../modules/es6.array.from":95,"../../modules/es6.string.iterator":100}],13:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":93,"../modules/es6.string.iterator":100,"../modules/web.dom.iterable":105}],14:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":94,"../modules/es6.string.iterator":100,"../modules/web.dom.iterable":105}],15:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":33,"../modules/es6.map":97,"../modules/es6.object.to-string":99,"../modules/es6.string.iterator":100,"../modules/es7.map.to-json":102,"../modules/web.dom.iterable":105}],16:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":33,"../../modules/es6.object.assign":98}],17:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":33,"../../modules/es6.object.to-string":99,"../../modules/es6.symbol":101,"../../modules/es7.symbol.async-iterator":103,"../../modules/es7.symbol.observable":104}],18:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":90,"../../modules/es6.string.iterator":100,"../../modules/web.dom.iterable":105}],19:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],20:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],21:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],22:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":52}],23:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":43}],24:[function(require,module,exports){
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
},{"./_to-index":82,"./_to-iobject":84,"./_to-length":85}],25:[function(require,module,exports){
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
},{"./_array-species-create":27,"./_ctx":35,"./_iobject":49,"./_to-length":85,"./_to-object":86}],26:[function(require,module,exports){
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
},{"./_is-array":51,"./_is-object":52,"./_wks":91}],27:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":26}],28:[function(require,module,exports){
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
},{"./_cof":29,"./_wks":91}],29:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],30:[function(require,module,exports){
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
},{"./_an-instance":21,"./_ctx":35,"./_defined":36,"./_descriptors":37,"./_for-of":43,"./_iter-define":55,"./_iter-step":57,"./_meta":61,"./_object-create":63,"./_object-dp":64,"./_redefine-all":75,"./_set-species":77}],31:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":23,"./_classof":28}],32:[function(require,module,exports){
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
},{"./_an-instance":21,"./_array-methods":25,"./_descriptors":37,"./_export":41,"./_fails":42,"./_for-of":43,"./_global":44,"./_hide":46,"./_is-object":52,"./_meta":61,"./_object-dp":64,"./_redefine-all":75,"./_set-to-string-tag":78}],33:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],34:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":64,"./_property-desc":74}],35:[function(require,module,exports){
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
},{"./_a-function":19}],36:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],37:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":42}],38:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":44,"./_is-object":52}],39:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],40:[function(require,module,exports){
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
},{"./_object-gops":69,"./_object-keys":72,"./_object-pie":73}],41:[function(require,module,exports){
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
},{"./_core":33,"./_ctx":35,"./_global":44,"./_hide":46}],42:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],43:[function(require,module,exports){
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
},{"./_an-object":22,"./_ctx":35,"./_is-array-iter":50,"./_iter-call":53,"./_to-length":85,"./core.get-iterator-method":92}],44:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],45:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],46:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":37,"./_object-dp":64,"./_property-desc":74}],47:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":44}],48:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":37,"./_dom-create":38,"./_fails":42}],49:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":29}],50:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":58,"./_wks":91}],51:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":29}],52:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],53:[function(require,module,exports){
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
},{"./_an-object":22}],54:[function(require,module,exports){
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
},{"./_hide":46,"./_object-create":63,"./_property-desc":74,"./_set-to-string-tag":78,"./_wks":91}],55:[function(require,module,exports){
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
},{"./_export":41,"./_has":45,"./_hide":46,"./_iter-create":54,"./_iterators":58,"./_library":60,"./_object-gpo":70,"./_redefine":76,"./_set-to-string-tag":78,"./_wks":91}],56:[function(require,module,exports){
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
},{"./_wks":91}],57:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],58:[function(require,module,exports){
module.exports = {};
},{}],59:[function(require,module,exports){
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
},{"./_object-keys":72,"./_to-iobject":84}],60:[function(require,module,exports){
module.exports = true;
},{}],61:[function(require,module,exports){
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
},{"./_fails":42,"./_has":45,"./_is-object":52,"./_object-dp":64,"./_uid":88}],62:[function(require,module,exports){
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
},{"./_fails":42,"./_iobject":49,"./_object-gops":69,"./_object-keys":72,"./_object-pie":73,"./_to-object":86}],63:[function(require,module,exports){
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

},{"./_an-object":22,"./_dom-create":38,"./_enum-bug-keys":39,"./_html":47,"./_object-dps":65,"./_shared-key":79}],64:[function(require,module,exports){
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
},{"./_an-object":22,"./_descriptors":37,"./_ie8-dom-define":48,"./_to-primitive":87}],65:[function(require,module,exports){
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
},{"./_an-object":22,"./_descriptors":37,"./_object-dp":64,"./_object-keys":72}],66:[function(require,module,exports){
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
},{"./_descriptors":37,"./_has":45,"./_ie8-dom-define":48,"./_object-pie":73,"./_property-desc":74,"./_to-iobject":84,"./_to-primitive":87}],67:[function(require,module,exports){
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

},{"./_object-gopn":68,"./_to-iobject":84}],68:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":39,"./_object-keys-internal":71}],69:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],70:[function(require,module,exports){
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
},{"./_has":45,"./_shared-key":79,"./_to-object":86}],71:[function(require,module,exports){
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
},{"./_array-includes":24,"./_has":45,"./_shared-key":79,"./_to-iobject":84}],72:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":39,"./_object-keys-internal":71}],73:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],74:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],75:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":46}],76:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":46}],77:[function(require,module,exports){
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
},{"./_core":33,"./_descriptors":37,"./_global":44,"./_object-dp":64,"./_wks":91}],78:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":45,"./_object-dp":64,"./_wks":91}],79:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":80,"./_uid":88}],80:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":44}],81:[function(require,module,exports){
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
},{"./_defined":36,"./_to-integer":83}],82:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":83}],83:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],84:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":36,"./_iobject":49}],85:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":83}],86:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":36}],87:[function(require,module,exports){
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
},{"./_is-object":52}],88:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],89:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":33,"./_global":44,"./_library":60,"./_object-dp":64,"./_wks-ext":90}],90:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":91}],91:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":44,"./_shared":80,"./_uid":88}],92:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":28,"./_core":33,"./_iterators":58,"./_wks":91}],93:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":22,"./_core":33,"./core.get-iterator-method":92}],94:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":28,"./_core":33,"./_iterators":58,"./_wks":91}],95:[function(require,module,exports){
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

},{"./_create-property":34,"./_ctx":35,"./_export":41,"./_is-array-iter":50,"./_iter-call":53,"./_iter-detect":56,"./_to-length":85,"./_to-object":86,"./core.get-iterator-method":92}],96:[function(require,module,exports){
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
},{"./_add-to-unscopables":20,"./_iter-define":55,"./_iter-step":57,"./_iterators":58,"./_to-iobject":84}],97:[function(require,module,exports){
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
},{"./_collection":32,"./_collection-strong":30}],98:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":41,"./_object-assign":62}],99:[function(require,module,exports){

},{}],100:[function(require,module,exports){
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
},{"./_iter-define":55,"./_string-at":81}],101:[function(require,module,exports){
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
},{"./_an-object":22,"./_descriptors":37,"./_enum-keys":40,"./_export":41,"./_fails":42,"./_global":44,"./_has":45,"./_hide":46,"./_is-array":51,"./_keyof":59,"./_library":60,"./_meta":61,"./_object-create":63,"./_object-dp":64,"./_object-gopd":66,"./_object-gopn":68,"./_object-gopn-ext":67,"./_object-gops":69,"./_object-keys":72,"./_object-pie":73,"./_property-desc":74,"./_redefine":76,"./_set-to-string-tag":78,"./_shared":80,"./_to-iobject":84,"./_to-primitive":87,"./_uid":88,"./_wks":91,"./_wks-define":89,"./_wks-ext":90}],102:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":31,"./_export":41}],103:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":89}],104:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":89}],105:[function(require,module,exports){
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
},{"./_global":44,"./_hide":46,"./_iterators":58,"./_wks":91,"./es6.array.iterator":96}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dom = {};

dom.optionFields = ['select', 'checkbox-group', 'radio-group', 'autocomplete'];
dom.optionFieldsRegEx = new RegExp('(' + dom.optionFields.join('|') + ')');

/**
   * Util to remove contents of DOM Object
   * @param  {Object} element
   * @return {Object}         element with its children removed
   */
dom.empty = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

/**
 * Hide or show an Array or HTMLCollection of elements
 * @param  {Array}   elems
 * @param  {String}  term  match textContent to this term
 * @param  {Boolean} show  or hide elements
 * @return {Array}         filtered elements
 */
dom.filter = function (elems, term) {
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

exports.default = dom;

},{}],107:[function(require,module,exports){
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
events.fieldRendered = new Event('fieldRendered');

//   return events;
// }

module.exports = events;

},{}],108:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * render the formBuilder XML into html
 * @param  {Object} options
 * @param  {Object} element html element where form will be rendered (optional)
 * @return {Object} formRender instance
 */
function FormRender(options, element) {
  var utils = require('./utils.js');
  var events = require('./events.js');

  var formRender = this;
  var defaults = {
    destroyTemplate: true, // @todo
    container: false,
    dataType: 'json',
    formData: false,
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
        return utils.parseXML(formData);
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
      field.dispatchEvent(events.fieldRendered);
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
        return utils.trimObj(option);
      });
    }

    return utils.trimObj(sanitizedField);
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
      rendered.push(utils.getTemplate(sanitizedField));
    }

    if (opts.render) {
      if (opts.container) {
        var renderedFormWrap = utils.markup('div', rendered, {
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
    var noData = utils.markup('div', opts.messages.noFormData, {
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

},{"./events.js":107,"./utils.js":109,"babel-runtime/core-js/object/assign":5}],109:[function(require,module,exports){
'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} fbUtils
 */
// function utils() {
var fbUtils = {};
window.fbLoaded = {
  js: [],
  css: []
};
window.fbEditors = {
  quill: {},
  tinymce: {}
};

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
 * Determine content type
 * @param  {Node | String | Array | Object} content
 * @return {String}                         contentType for mapping
 */
fbUtils.contentType = function (content) {
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
fbUtils.bindEvents = function (element, events) {
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
fbUtils.nameAttr = function (field) {
  var epoch = new Date().getTime();
  var prefix = field.attrs.type || fbUtils.hyphenCase(field.label);
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
fbUtils.markup = function (tag) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var contentType = fbUtils.contentType(content);
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

      return field.appendChild(fbUtils.markup(tag, content, data));
    },
    node: function node(content) {
      return field.appendChild(content);
    },
    array: function array(content) {
      for (var i = 0; i < content.length; i++) {
        contentType = fbUtils.contentType(content[i]);
        appendContent[contentType](content[i]);
      }
    },
    function: function _function(content) {
      content = content();
      contentType = fbUtils.contentType(content);
      appendContent[contentType](content);
    },
    undefined: function undefined() {
      console.error(tag, content, attributes);
    }
  };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var name = fbUtils.safeAttrName(attr);
      field.setAttribute(name, attrs[attr]);
    }
  }

  if (content) {
    appendContent[contentType].call(this, content);
  }

  fbUtils.bindEvents(field, events);

  return field;
};
var m = fbUtils.markup;

/**
 * Convert html element attributes to key/value object
 * @param  {Object} elem DOM element
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
 * @param  {Object} field  DOM element
 * @return {Array}         optionData array
 */
fbUtils.parseOptions = function (field) {
  var options = field.getElementsByTagName('option');
  var optionData = {};
  var data = [];

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
  var xml = parser.parseFromString(xmlString, 'text/xml');
  var formData = [];

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
 * Converts escaped HTML into usable HTML
 * @param  {String} html escaped HTML
 * @return {String}      parsed HTML
 */
fbUtils.parsedHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.innerHTML = html;
  return escapeElement.textContent;
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
 * @param  {Array} array  array with possible duplicates
 * @return {Array}        array with only unique values
 */
fbUtils.unique = function (array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};

fbUtils.makeLabel = function (data) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var labelContents = [document.createTextNode(label)];

  if (data.hasOwnProperty('required')) {
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

fbUtils.templateMap = function (templates, type, fallback) {
  var template = void 0;
  var templateMap = new _map2.default(templates);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(templateMap), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref3 = _step.value;

      var _ref2 = (0, _slicedToArray3.default)(_ref3, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      if (Array.isArray(key)) {
        if (fbUtils.inArray(type, key)) {
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

  if (!template) {
    template = fallback;
  }

  return template();
};

fbUtils.autocompleteTemplate = function (fieldData) {
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
      _dom2.default.filter(list.querySelectorAll('li'), evt.target.value);
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
          console.log(list, field);
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
fbUtils.selectTemplate = function (fieldData) {
  var options = [];
  var values = fieldData.values,
      placeholder = fieldData.placeholder,
      type = fieldData.type,
      inline = fieldData.inline,
      other = fieldData.other,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['values', 'placeholder', 'type', 'inline', 'other']);

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
          optionAttrs.checked = null;
          delete optionAttrs.selected;
        }
        var input = m('input', null, (0, _assign2.default)({}, data, optionAttrs));
        var inputLabel = m('label', [input, label], { for: optionAttrs.id });
        var wrapper = m('div', inputLabel, { className: wrapperClass });
        options.push(wrapper);
      }
    }

    if (!isSelect && other) {
      (function () {
        var otherOptionAttrs = {
          id: data.id + '-other',
          className: data.className + ' other-option',
          events: {
            click: function click() {
              return fbUtils.otherOptionCB(otherOptionAttrs.id);
            }
          }
        };
        // let label = mi18n.current.other;
        var wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
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
        var inputLabel = m('label', otherInputs, { for: optionAttrs.id });
        var wrapper = m('div', inputLabel, { className: wrapperClass });
        options.push(wrapper);
      })();
    }
  }

  var templates = [['select', function () {
    return m(optionType, options, data);
  }], [['checkbox-group', 'radio-group'], function () {
    return m('div', options, { className: type });
  }]];

  return fbUtils.templateMap(templates, type);
};

fbUtils.defaultField = function (fieldData) {
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      type = fieldData.type,
      id = fieldData.id,
      isPreview = fieldData.isPreview,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'type', 'id', 'isPreview']);

  if (id) {
    if (isPreview) {
      data.name = data.name + '-preview';
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
    field: m(type, label, data),
    onRender: fbUtils.noop
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
fbUtils.getScripts = function (scriptScr, path) {
  var $ = jQuery;
  var _arr = [];

  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr];
  }

  if (!fbUtils.isCached(scriptScr)) {
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
fbUtils.isCached = function (src) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js';

  var isCached = false;
  var cache = window.fbLoaded[type];
  if (Array.isArray(src)) {
    isCached = src.every(function (s) {
      return fbUtils.inArray(s, cache);
    });
  } else {
    isCached = fbUtils.inArray(src, cache);
  }
  return isCached;
};

/**
 * Appends stylesheets to the head
 * @param  {Array} scriptScr
 * @param  {String} path
 * @return {void}
 */
fbUtils.getStyles = function (scriptScr, path) {
  if (fbUtils.isCached(scriptScr, 'css')) {
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

fbUtils.longTextTemplate = function (data) {
  var _data$value = data.value,
      value = _data$value === undefined ? '' : _data$value,
      attrs = (0, _objectWithoutProperties3.default)(data, ['value']);

  var template = {
    field: m('textarea', fbUtils.parsedHtml(value), attrs)
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
          editor.instance.setContents(window.JSON.parse(fbUtils.parsedHtml(value)));
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
        fbUtils.getStyles(editors[data.type].css);
      }
      if (editors[data.type].js && !fbUtils.isCached(editors[data.type].js)) {
        fbUtils.getScripts(editors[data.type].js).done(template.onRender);
      } else {
        template.onRender();
      }
    }
  };

  return { field: template.field, onRender: onRender };
};

fbUtils.getTemplate = function (fieldData) {
  var isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      labelPosition = fieldData.labelPosition,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'labelPosition']);

  var template = void 0;
  var field = void 0;

  if (isPreview) {
    data.name = data.name + '-preview';
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

  var fieldLabel = fbUtils.makeLabel(data, label, description);

  var templates = [[['autocomplete'], function () {
    var autocomplete = fbUtils.autocompleteTemplate(data);
    var template = {
      field: [fieldLabel, autocomplete.field],
      onRender: autocomplete.onRender
    };
    return template;
  }], [['text', 'password', 'email', 'number', 'file', 'color', 'date', 'tel'], function () {
    var template = {
      field: [fieldLabel, m('input', null, data)],
      onRender: fbUtils.noop
    };
    return template;
  }], [['button', 'submit', 'reset'], function () {
    var template = {
      field: m('button', label, data),
      onRender: fbUtils.noop
    };
    return template;
  }], [['select', 'checkbox-group', 'radio-group'], function () {
    var field = fbUtils.selectTemplate(data);
    var template = {
      field: [fieldLabel, field],
      onRender: fbUtils.noop
    };
    return template;
  }], ['checkbox', function () {
    var field = [m('input', null, data)];
    if (labelPosition === 'beforeInput') {
      field.unshift(fieldLabel, ' ');
    } else {
      field.push(' ', fieldLabel);
    }
    var template = {
      field: field,
      onRender: function onRender() {
        if (data.toggle) {
          $(document.getElementById(data.id)).kcToggle();
        }
      }
    };
    return template;
  }], [['textarea', 'tinymce', 'quill'], function () {
    var field = fbUtils.longTextTemplate(data);
    var template = {
      field: [fieldLabel, field.field],
      onRender: field.onRender
    };
    return template;
  }]];

  template = fbUtils.templateMap(templates, data.type, fbUtils.defaultField(fieldData) // fallback
  );

  if (data.type !== 'hidden') {
    var wrapperAttrs = {};
    if (data.id) {
      wrapperAttrs.className = 'fb-' + data.type + ' form-group field-' + data.id;
    }
    field = fbUtils.markup('div', template.field, wrapperAttrs);
  } else {
    field = fbUtils.markup('input', null, data);
  }

  field.addEventListener('fieldRendered', template.onRender);

  return field;
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
fbUtils.capitalize = function (str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};

fbUtils.merge = function (obj1, obj2) {
  var mergedObj = (0, _assign2.default)({}, obj1, obj2);
  for (var prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? fbUtils.unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
      } else if ((0, _typeof3.default)(obj2[prop]) === 'object') {
        mergedObj[prop] = fbUtils.merge(obj1[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }
  }
  return mergedObj;
};

/**
 * Util to remove contents of DOM Object
 * @param  {Object} element
 * @return {Object}         element with its children removed
 */
fbUtils.empty = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

fbUtils.noop = function () {
  return null;
};

module.exports = fbUtils;

},{"./dom":106,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/map":4,"babel-runtime/core-js/object/assign":5,"babel-runtime/helpers/objectWithoutProperties":8,"babel-runtime/helpers/slicedToArray":9,"babel-runtime/helpers/toConsumableArray":10,"babel-runtime/helpers/typeof":11}]},{},[108])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwic3JjL2pzL2RvbS5qcyIsInNyYy9qcy9ldmVudHMuanMiLCJzcmMvanMvZm9ybS1yZW5kZXIuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TSxNQUVBO0FBQ0wsa0JBQVUsSUFBVixJQUFrQixLQUFLLElBQUwsQ0FBbEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxTQUFPLFNBQVA7QUFDRCxDQWREOztBQWdCQTs7Ozs7QUFLQSxRQUFRLEtBQVIsR0FBZ0IsbUJBQVc7QUFDekIsU0FBTyxRQUFRLFVBQWYsRUFBMkI7QUFDekIsWUFBUSxXQUFSLENBQW9CLFFBQVEsVUFBNUI7QUFDRDtBQUNELFNBQU8sT0FBUDtBQUNELENBTEQ7O0FBT0EsUUFBUSxJQUFSLEdBQWU7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFmOztBQUdBLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXIsIElURVJBVE9SKXtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTsiLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpe1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGNyZWF0ZSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBhbkluc3RhbmNlICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBkZWZpbmVkICAgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIGZvck9mICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJylcbiAgLCBzdGVwICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgc2V0U3BlY2llcyAgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgZmFzdEtleSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleVxuICAsIFNJWkUgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmKGVudHJ5KXtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsICdmb3JFYWNoJyk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgZnJvbSAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWV0YSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGRQICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGVhY2ggICAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTsiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59OyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5JylcbiAgLCBnZXRJdGVyRm4gICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7IiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyl9KTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59IiwiY29uc3QgZG9tID0ge307XG5cbmRvbS5vcHRpb25GaWVsZHMgPSBbXG4nc2VsZWN0JyxcbidjaGVja2JveC1ncm91cCcsXG4ncmFkaW8tZ3JvdXAnLFxuJ2F1dG9jb21wbGV0ZSdcbl07XG5kb20ub3B0aW9uRmllbGRzUmVnRXggPSBuZXcgUmVnRXhwKGAoJHtkb20ub3B0aW9uRmllbGRzLmpvaW4oJ3wnKX0pYCk7XG5cbi8qKlxuICAgKiBVdGlsIHRvIHJlbW92ZSBjb250ZW50cyBvZiBET00gT2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgZWxlbWVudCB3aXRoIGl0cyBjaGlsZHJlbiByZW1vdmVkXG4gICAqL1xuZG9tLmVtcHR5ID0gKGVsZW1lbnQpID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogSGlkZSBvciBzaG93IGFuIEFycmF5IG9yIEhUTUxDb2xsZWN0aW9uIG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0gIHtBcnJheX0gICBlbGVtc1xuICogQHBhcmFtICB7U3RyaW5nfSAgdGVybSAgbWF0Y2ggdGV4dENvbnRlbnQgdG8gdGhpcyB0ZXJtXG4gKiBAcGFyYW0gIHtCb29sZWFufSBzaG93ICBvciBoaWRlIGVsZW1lbnRzXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICBmaWx0ZXJlZCBlbGVtZW50c1xuICovXG5kb20uZmlsdGVyID0gKGVsZW1zLCB0ZXJtLCBzaG93ID0gdHJ1ZSkgPT4ge1xuICBsZXQgZmlsdGVyZWRFbGVtcyA9IFtdO1xuICBsZXQgdG9nZ2xlID0gWydub25lJywgJ2Jsb2NrJ107XG5cbiAgaWYgKHNob3cpIHtcbiAgICB0b2dnbGUgPSB0b2dnbGUucmV2ZXJzZSgpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IGVsZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IHR4dCA9IGVsZW1zW2ldLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHR4dC5pbmRleE9mKHRlcm0udG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICBlbGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gdG9nZ2xlWzBdO1xuICAgICAgZmlsdGVyZWRFbGVtcy5wdXNoKGVsZW1zW2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbXNbaV0uc3R5bGUuZGlzcGxheSA9IHRvZ2dsZVsxXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRFbGVtcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiIsIi8qKlxuICogRm9ybSBCdWlsZGVyIGV2ZW50c1xuICogQHJldHVybiB7T2JqZWN0fSB2YXJpb3VzIGV2ZW50cyB0byBiZSB0cmlnZ2VyXG4gKi9cbi8vIGZ1bmN0aW9uIGZiRXZlbnRzKCl7XG4gIGNvbnN0IGV2ZW50cyA9IHt9O1xuXG4gIGV2ZW50cy5sb2FkZWQgPSBuZXcgRXZlbnQoJ2xvYWRlZCcpO1xuICBldmVudHMudmlld0RhdGEgPSBuZXcgRXZlbnQoJ3ZpZXdEYXRhJyk7XG4gIGV2ZW50cy51c2VyRGVjbGluZWQgPSBuZXcgRXZlbnQoJ3VzZXJEZWNsaW5lZCcpO1xuICBldmVudHMubW9kYWxDbG9zZWQgPSBuZXcgRXZlbnQoJ21vZGFsQ2xvc2VkJyk7XG4gIGV2ZW50cy5tb2RhbE9wZW5lZCA9IG5ldyBFdmVudCgnbW9kYWxPcGVuZWQnKTtcbiAgZXZlbnRzLmZvcm1TYXZlZCA9IG5ldyBFdmVudCgnZm9ybVNhdmVkJyk7XG4gIGV2ZW50cy5maWVsZEFkZGVkID0gbmV3IEV2ZW50KCdmaWVsZEFkZGVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbW92ZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVtb3ZlZCcpO1xuICBldmVudHMuZmllbGRSZW5kZXJlZCA9IG5ldyBFdmVudCgnZmllbGRSZW5kZXJlZCcpO1xuXG4vLyAgIHJldHVybiBldmVudHM7XG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZXZlbnRzO1xuIiwiLyoqXG4gKiByZW5kZXIgdGhlIGZvcm1CdWlsZGVyIFhNTCBpbnRvIGh0bWxcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IGh0bWwgZWxlbWVudCB3aGVyZSBmb3JtIHdpbGwgYmUgcmVuZGVyZWQgKG9wdGlvbmFsKVxuICogQHJldHVybiB7T2JqZWN0fSBmb3JtUmVuZGVyIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEZvcm1SZW5kZXIob3B0aW9ucywgZWxlbWVudCkge1xuICBjb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKTtcbiAgY29uc3QgZXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMuanMnKTtcblxuICBjb25zdCBmb3JtUmVuZGVyID0gdGhpcztcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBkZXN0cm95VGVtcGxhdGU6IHRydWUsIC8vIEB0b2RvXG4gICAgICBjb250YWluZXI6IGZhbHNlLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGZvcm1EYXRhOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIGZvcm1SZW5kZXJlZDogJ0Zvcm0gUmVuZGVyZWQnLFxuICAgICAgICBub0Zvcm1EYXRhOiAnTm8gZm9ybSBkYXRhLicsXG4gICAgICAgIG90aGVyOiAnT3RoZXInLFxuICAgICAgICBzZWxlY3RDb2xvcjogJ1NlbGVjdCBDb2xvcidcbiAgICAgIH0sXG4gICAgICBvblJlbmRlcjogKCkgPT4ge30sXG4gICAgICByZW5kZXI6IHRydWUsXG4gICAgICBub3RpZnk6IHtcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2FybmluZzogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gIGxldCBvcHRzID0gJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoIW9wdHMuZm9ybURhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGF0YSA9IHtcbiAgICAgIHhtbDogZm9ybURhdGEgPT4gdXRpbHMucGFyc2VYTUwoZm9ybURhdGEpLFxuICAgICAganNvbjogZm9ybURhdGEgPT4gd2luZG93LkpTT04ucGFyc2UoZm9ybURhdGEpXG4gICAgfTtcblxuICAgIG9wdHMuZm9ybURhdGEgPSBzZXREYXRhW29wdHMuZGF0YVR5cGVdKG9wdHMuZm9ybURhdGEpIHx8IGZhbHNlO1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBFeHRlbmQgRWxlbWVudCBwcm90b3R5cGUgdG8gYWxsb3cgdXMgdG8gYXBwZW5kIGZpZWxkc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkcyBOb2RlIGVsZW1lbnRzXG4gICAqL1xuICBFbGVtZW50LnByb3RvdHlwZS5hcHBlbmRGb3JtRmllbGRzID0gZnVuY3Rpb24oZmllbGRzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzO1xuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmllbGQpO1xuICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChldmVudHMuZmllbGRSZW5kZXJlZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV4dGVuZCBFbGVtZW50IHByb3RvdHlwZSB0byByZW1vdmUgY29udGVudFxuICAgKi9cbiAgRWxlbWVudC5wcm90b3R5cGUuZW1wdHlDb250YWluZXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXM7XG4gICAgd2hpbGUgKGVsZW1lbnQubGFzdENoaWxkKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHJ1bkNhbGxiYWNrcyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChvcHRzLm9uUmVuZGVyKSB7XG4gICAgICBvcHRzLm9uUmVuZGVyKCk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBzYW50aXplRmllbGQgPSAoZmllbGQpID0+IHtcbiAgICBsZXQgc2FuaXRpemVkRmllbGQgPSBPYmplY3QuYXNzaWduKHt9LCBmaWVsZCk7XG4gICAgc2FuaXRpemVkRmllbGQuY2xhc3NOYW1lID0gZmllbGQuY2xhc3NOYW1lIHx8IGZpZWxkLmNsYXNzIHx8IG51bGw7XG4gICAgZGVsZXRlIHNhbml0aXplZEZpZWxkLmNsYXNzO1xuXG4gICAgaWYgKGZpZWxkLnZhbHVlcykge1xuICAgICAgZmllbGQudmFsdWVzID0gZmllbGQudmFsdWVzLm1hcChvcHRpb24gPT4gdXRpbHMudHJpbU9iaihvcHRpb24pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXRpbHMudHJpbU9iaihzYW5pdGl6ZWRGaWVsZCk7XG4gIH07XG5cbiAgbGV0IGV4cG9ydE1hcmt1cCA9IGZpZWxkcyA9PiBmaWVsZHMubWFwKGVsZW0gPT4gZWxlbS5pbm5lckhUTUwpLmpvaW4oJycpO1xuXG4gIC8vIEJlZ2luIHRoZSBjb3JlIHBsdWdpblxuICBsZXQgcmVuZGVyZWQgPSBbXTtcblxuICAvLyBnZW5lcmF0ZSBmaWVsZCBtYXJrdXAgaWYgd2UgaGF2ZSBmaWVsZHNcbiAgaWYgKG9wdHMuZm9ybURhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHMuZm9ybURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzYW5pdGl6ZWRGaWVsZCA9IHNhbnRpemVGaWVsZChvcHRzLmZvcm1EYXRhW2ldKTtcbiAgICAgIHJlbmRlcmVkLnB1c2godXRpbHMuZ2V0VGVtcGxhdGUoc2FuaXRpemVkRmllbGQpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5yZW5kZXIpIHtcbiAgICAgIGlmIChvcHRzLmNvbnRhaW5lcikge1xuICAgICAgICBsZXQgcmVuZGVyZWRGb3JtV3JhcCA9IHV0aWxzLm1hcmt1cCgnZGl2JywgcmVuZGVyZWQsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdyZW5kZXJlZC1mb3JtJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdHMuY29udGFpbmVyIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAgICAgb3B0cy5jb250YWluZXIgPSBvcHRzLmNvbnRhaW5lclswXTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmNvbnRhaW5lci5lbXB0eUNvbnRhaW5lcigpO1xuICAgICAgICBvcHRzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlZEZvcm1XcmFwKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmVtcHR5Q29udGFpbmVyKCk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kRm9ybUZpZWxkcyhyZW5kZXJlZCk7XG4gICAgICB9XG5cbiAgICAgIHJ1bkNhbGxiYWNrcygpO1xuICAgICAgb3B0cy5ub3RpZnkuc3VjY2VzcyhvcHRzLm1lc3NhZ2VzLmZvcm1SZW5kZXJlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1SZW5kZXIubWFya3VwID0gZXhwb3J0TWFya3VwKHJlbmRlcmVkKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vRGF0YSA9IHV0aWxzLm1hcmt1cCgnZGl2Jywgb3B0cy5tZXNzYWdlcy5ub0Zvcm1EYXRhLCB7XG4gICAgICBjbGFzc05hbWU6ICduby1mb3JtLWRhdGEnXG4gICAgfSk7XG4gICAgcmVuZGVyZWQucHVzaChub0RhdGEpO1xuICAgIG9wdHMubm90aWZ5LmVycm9yKG9wdHMubWVzc2FnZXMubm9Gb3JtRGF0YSk7XG4gIH1cblxuICByZXR1cm4gZm9ybVJlbmRlcjtcbn1cblxuKGZ1bmN0aW9uKCQpIHtcbiAgJC5mbi5mb3JtUmVuZGVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGxldCBlbGVtcyA9IHRoaXM7XG4gICAgZWxlbXMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICBsZXQgZm9ybVJlbmRlciA9IG5ldyBGb3JtUmVuZGVyKG9wdGlvbnMsIGVsZW1zW2ldKTtcbiAgICAgIGVsZW1zW2ldLmRhdGFzZXQuZm9ybVJlbmRlciA9IGZvcm1SZW5kZXI7XG4gICAgICByZXR1cm4gZm9ybVJlbmRlcjtcbiAgICB9KTtcbiAgfTtcbn0pKGpRdWVyeSk7XG5cbndpbmRvdy5Gb3JtUmVuZGVyID0gRm9ybVJlbmRlcjtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybVJlbmRlcjtcbiIsImltcG9ydCBkIGZyb20gJy4vZG9tJztcblxuLyoqXG4gKiBDcm9zcyBmaWxlIHV0aWxpdGllcyBmb3Igd29ya2luZyB3aXRoIGFycmF5cyxcbiAqIHNvcnRpbmcgYW5kIG90aGVyIGZ1biBzdHVmZlxuICogQHJldHVybiB7T2JqZWN0fSBmYlV0aWxzXG4gKi9cbi8vIGZ1bmN0aW9uIHV0aWxzKCkge1xuICBjb25zdCBmYlV0aWxzID0ge307XG4gIHdpbmRvdy5mYkxvYWRlZCA9IHtcbiAgICBqczogW10sXG4gICAgY3NzOiBbXVxuICB9O1xuICB3aW5kb3cuZmJFZGl0b3JzID0ge1xuICAgIHF1aWxsOiB7fSxcbiAgICB0aW55bWNlOiB7fVxuICB9O1xuXG4gIC8vIGNsZWFuZXIgc3ludGF4IGZvciB0ZXN0aW5nIGluZGV4T2YgZWxlbWVudFxuICBmYlV0aWxzLmluQXJyYXkgPSBmdW5jdGlvbihuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICBPYmplY3QgdHJpbW1lZCBvZiBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICovXG4gIGZiVXRpbHMudHJpbU9iaiA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IHhtbFJlbW92ZSA9IFtcbiAgICAgIG51bGwsXG4gICAgICB1bmRlZmluZWQsXG4gICAgICAnJyxcbiAgICAgIGZhbHNlLFxuICAgICAgJ2ZhbHNlJ1xuICAgIF07XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGZiVXRpbHMuaW5BcnJheShhdHRyc1thdHRyXSwgeG1sUmVtb3ZlKSkge1xuICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXR0cnNbYXR0cl0pKSB7XG4gICAgICAgIGlmICghYXR0cnNbYXR0cl0ubGVuZ3RoKSB7XG4gICAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIGF0dHJpYnV0ZSBpcyBhIHZhbGlkIEhUTUwgYXR0cmlidXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXR0clxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZmJVdGlscy52YWxpZEF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XG4gICAgbGV0IGludmFsaWQgPSBbXG4gICAgICAndmFsdWVzJyxcbiAgICAgICdlbmFibGVPdGhlcicsXG4gICAgICAnb3RoZXInLFxuICAgICAgJ2xhYmVsJyxcbiAgICAgIC8vICdzdHlsZScsXG4gICAgICAnc3VidHlwZSdcbiAgICBdO1xuICAgIHJldHVybiAhZmJVdGlscy5pbkFycmF5KGF0dHIsIGludmFsaWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIGF0dHJzIG9iamVjdCBpbnRvIGEgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgb2JqZWN0IG9mIGF0dHJpYnV0ZXMgZm9yIG1hcmt1cFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmYlV0aWxzLmF0dHJTdHJpbmcgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCBhdHRyaWJ1dGVzID0gW107XG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikgJiYgZmJVdGlscy52YWxpZEF0dHIoYXR0cikpIHtcbiAgICAgICAgYXR0ciA9IGZiVXRpbHMuc2FmZUF0dHIoYXR0ciwgYXR0cnNbYXR0cl0pO1xuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0ci5uYW1lICsgYXR0ci52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGVzLmpvaW4oJyAnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhdHRyaWJ1dGVzIHRvIG1hcmt1cCBzYWZlIHN0cmluZ3NcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lICBhdHRyaWJ1dGUgbmFtZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIGF0dHJpYnV0ZSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKi9cbiAgZmJVdGlscy5zYWZlQXR0ciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IGZiVXRpbHMuc2FmZUF0dHJOYW1lKG5hbWUpO1xuICAgIGxldCB2YWxTdHJpbmc7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWxTdHJpbmcgPSBmYlV0aWxzLmVzY2FwZUF0dHIodmFsdWUuam9pbignICcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YodmFsdWUpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsU3RyaW5nID0gZmJVdGlscy5lc2NhcGVBdHRyKHZhbHVlLnJlcGxhY2UoJywnLCAnICcpLnRyaW0oKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZSA/IGA9XCIke3ZhbFN0cmluZ31cImAgOiAnJztcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlXG4gICAgfTtcbiAgfTtcblxuICBmYlV0aWxzLnNhZmVBdHRyTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBsZXQgc2FmZUF0dHIgPSB7XG4gICAgICBjbGFzc05hbWU6ICdjbGFzcydcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNhZmVBdHRyW25hbWVdIHx8IGZiVXRpbHMuaHlwaGVuQ2FzZShuYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBzdHJpbmdzIGludG8gbG93ZXJjYXNlLWh5cGhlblxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBmYlV0aWxzLmh5cGhlbkNhc2UgPSAoc3RyKSA9PiB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1teXFx3XFxzXFwtXS9naSwgJycpO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKCQxKSB7XG4gICAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvXi0rL2csICcnKTtcbiAgfTtcblxuICAvKipcbiAgICogY29udmVydCBhIGh5cGhlbmF0ZWQgc3RyaW5nIHRvIGNhbWVsQ2FzZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBmYlV0aWxzLmNhbWVsQ2FzZSA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uKG0sIHcpIHtcbiAgICAgIHJldHVybiB3LnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBjb250ZW50IHR5cGVcbiAgICogQHBhcmFtICB7Tm9kZSB8IFN0cmluZyB8IEFycmF5IHwgT2JqZWN0fSBjb250ZW50XG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGUgZm9yIG1hcHBpbmdcbiAgICovXG4gIGZiVXRpbHMuY29udGVudFR5cGUgPSBjb250ZW50ID0+IHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBjb250ZW50O1xuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgTm9kZSB8fCBjb250ZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHR5cGUgPSAnbm9kZSc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICB0eXBlID0gJ2FycmF5JztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBldmVudHMgdG8gYW4gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudHMgIG9iamVjdCBmdWxsIG9mIGV2ZW50cyBlZy4ge2NsaWNrOiBldnQgPT4gY2FsbGJhY2t9XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBmYlV0aWxzLmJpbmRFdmVudHMgPSAoZWxlbWVudCwgZXZlbnRzKSA9PiB7XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgZm9yIChsZXQgZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldnQgPT4gZXZlbnRzW2V2ZW50XShldnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSBuYW1lIGF0dHJpYnV0ZVxuICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfSAgICAgICBuYW1lXG4gKi9cbiAgZmJVdGlscy5uYW1lQXR0ciA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBsZXQgZXBvY2ggPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxldCBwcmVmaXggPSBmaWVsZC5hdHRycy50eXBlIHx8IGZiVXRpbHMuaHlwaGVuQ2FzZShmaWVsZC5sYWJlbCk7XG4gICAgICByZXR1cm4gcHJlZml4ICsgJy0nICsgZXBvY2g7XG4gICAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgbWFya3VwIHdyYXBwZXIgd2hlcmUgbmVlZGVkXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgIHRhZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl8T2JqZWN0fSBjb250ZW50IHdlIHdyYXAgdGhpc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgICAgICBhdHRyc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IERPTSBFbGVtZW50XG4gICAqL1xuICBmYlV0aWxzLm1hcmt1cCA9IGZ1bmN0aW9uKHRhZywgY29udGVudCA9ICcnLCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBsZXQgY29udGVudFR5cGUgPSBmYlV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnQpO1xuICAgIGxldCB7ZXZlbnRzLCAuLi5hdHRyc30gPSBhdHRyaWJ1dGVzO1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgY29uc3QgYXBwZW5kQ29udGVudCA9IHtcbiAgICAgIHN0cmluZzogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgZmllbGQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICB9LFxuICAgICAgb2JqZWN0OiAoY29uZmlnKSA9PiB7XG4gICAgICAgIGxldCB7dGFnLCBjb250ZW50LCAuLi5kYXRhfSA9IGNvbmZpZztcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKGZiVXRpbHMubWFya3VwKHRhZywgY29udGVudCwgZGF0YSkpO1xuICAgICAgfSxcbiAgICAgIG5vZGU6IChjb250ZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIH0sXG4gICAgICBhcnJheTogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29udGVudFR5cGUgPSBmYlV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnRbaV0pO1xuICAgICAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdKGNvbnRlbnRbaV0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb246IGNvbnRlbnQgPT4ge1xuICAgICAgICBjb250ZW50ID0gY29udGVudCgpO1xuICAgICAgICBjb250ZW50VHlwZSA9IGZiVXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdKGNvbnRlbnQpO1xuICAgICAgfSxcbiAgICAgIHVuZGVmaW5lZDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRhZywgY29udGVudCwgYXR0cmlidXRlcyk7XG4gICAgICB9LFxuICAgIH07XG5cblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICBsZXQgbmFtZSA9IGZiVXRpbHMuc2FmZUF0dHJOYW1lKGF0dHIpO1xuICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXS5jYWxsKHRoaXMsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIGZiVXRpbHMuYmluZEV2ZW50cyhmaWVsZCwgZXZlbnRzKTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcbiAgY29uc3QgbSA9IGZiVXRpbHMubWFya3VwO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGh0bWwgZWxlbWVudCBhdHRyaWJ1dGVzIHRvIGtleS92YWx1ZSBvYmplY3RcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtIERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gZXg6IHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZUF0dHJzID0gZnVuY3Rpb24oZWxlbSkge1xuICAgIGxldCBhdHRycyA9IGVsZW0uYXR0cmlidXRlcztcbiAgICBsZXQgZGF0YSA9IHt9O1xuICAgIGZiVXRpbHMuZm9yRWFjaChhdHRycywgYXR0ciA9PiB7XG4gICAgICBsZXQgYXR0clZhbCA9IGF0dHJzW2F0dHJdLnZhbHVlO1xuICAgICAgaWYgKGF0dHJWYWwubWF0Y2goL2ZhbHNlfHRydWUvZykpIHtcbiAgICAgICAgYXR0clZhbCA9IChhdHRyVmFsID09PSAndHJ1ZScpO1xuICAgICAgfSBlbHNlIGlmIChhdHRyVmFsLm1hdGNoKC91bmRlZmluZWQvZykpIHtcbiAgICAgICAgYXR0clZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJWYWwpIHtcbiAgICAgICAgZGF0YVthdHRyc1thdHRyXS5uYW1lXSA9IGF0dHJWYWw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBmaWVsZCBvcHRpb25zIHRvIG9wdGlvbkRhdGFcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZCAgRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgb3B0aW9uRGF0YSBhcnJheVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZU9wdGlvbnMgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBmaWVsZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnb3B0aW9uJyk7XG4gICAgbGV0IG9wdGlvbkRhdGEgPSB7fTtcbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgaWYgKG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3B0aW9uRGF0YSA9IGZiVXRpbHMucGFyc2VBdHRycyhvcHRpb25zW2ldKTtcbiAgICAgICAgb3B0aW9uRGF0YS5sYWJlbCA9IG9wdGlvbnNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGRhdGEucHVzaChvcHRpb25EYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2UgWE1MIGZvcm1EYXRhXG4gICAqIEBwYXJhbSAge1N0cmluZ30geG1sU3RyaW5nXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgIGZvcm1EYXRhIGFycmF5XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlWE1MID0gZnVuY3Rpb24oeG1sU3RyaW5nKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcbiAgICBsZXQgeG1sID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWxTdHJpbmcsICd0ZXh0L3htbCcpO1xuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xuXG4gICAgaWYgKHhtbCkge1xuICAgICAgbGV0IGZpZWxkcyA9IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmllbGQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmaWVsZERhdGEgPSBmYlV0aWxzLnBhcnNlQXR0cnMoZmllbGRzW2ldKTtcblxuICAgICAgICBpZiAoZmllbGRzW2ldLmNoaWxkcmVuICYmIGZpZWxkc1tpXS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gZmJVdGlscy5wYXJzZU9wdGlvbnMoZmllbGRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1EYXRhLnB1c2goZmllbGREYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGVzY2FwZWQgSFRNTCBpbnRvIHVzYWJsZSBIVE1MXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBlc2NhcGVkIEhUTUxcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIHBhcnNlZCBIVE1MXG4gICAqL1xuICBmYlV0aWxzLnBhcnNlZEh0bWwgPSBmdW5jdGlvbihodG1sKSB7XG4gICAgbGV0IGVzY2FwZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVzY2FwZUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgfTtcblxuICAvKipcbiAgICogRXNjYXBlIG1hcmt1cCBzbyBpdCBjYW4gYmUgZGlzcGxheWVkIHJhdGhlciB0aGFuIHJlbmRlcmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBtYXJrdXBcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIGVzY2FwZWQgaHRtbFxuICAgKi9cbiAgZmJVdGlscy5lc2NhcGVIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50ID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC5pbm5lckhUTUw7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGFuIGF0dHJpYnV0ZVxuICBmYlV0aWxzLmVzY2FwZUF0dHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgbWF0Y2ggPSB7XG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OydcbiAgICB9O1xuXG4gICAgY29uc3QgcmVwbGFjZVRhZyA9IHRhZyA9PiBtYXRjaFt0YWddIHx8IHRhZztcblxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpID8gc3RyLnJlcGxhY2UoL1tcIiY8Pl0vZywgcmVwbGFjZVRhZykgOiBzdHI7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGF0dHJpYnV0ZXNcbiAgZmJVdGlscy5lc2NhcGVBdHRycyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGF0dHJzW2F0dHJdID0gZmJVdGlscy5lc2NhcGVBdHRyKGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLy8gZm9yRWFjaCB0aGF0IGNhbiBiZSB1c2VkIG9uIG5vZGVMaXN0XG4gIGZiVXRpbHMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7IC8vIHBhc3NlcyBiYWNrIHN0dWZmIHdlIG5lZWRcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtICB7QXJyYXl9IGFycmF5ICBhcnJheSB3aXRoIHBvc3NpYmxlIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBhcnJheSB3aXRoIG9ubHkgdW5pcXVlIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGVsZW0sIHBvcywgYXJyKSA9PiB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWxlbSkgPT09IHBvcztcbiAgICB9KTtcbiAgfTtcblxuICBmYlV0aWxzLm1ha2VMYWJlbCA9IChkYXRhLCBsYWJlbCA9ICcnLCBkZXNjcmlwdGlvbiA9ICcnKSA9PiB7XG4gICAgbGV0IGxhYmVsQ29udGVudHMgPSBbZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFiZWwpXTtcblxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpKSB7XG4gICAgICBsYWJlbENvbnRlbnRzLnB1c2gobSgnc3BhbicsICcqJywge2NsYXNzTmFtZTogJ3JlcXVpcmVkJ30pKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJz8nLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndG9vbHRpcC1lbGVtZW50JyxcbiAgICAgICAgICB0b29sdGlwOiBkZXNjcmlwdGlvblxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG0oJ2xhYmVsJywgbGFiZWxDb250ZW50cywge1xuICAgICAgZm9yOiBkYXRhLmlkLFxuICAgICAgY2xhc3NOYW1lOiBgZmItJHtkYXRhLnR5cGV9LWxhYmVsYFxuICAgIH0pO1xuICB9O1xuXG4gIGZiVXRpbHMudGVtcGxhdGVNYXAgPSAodGVtcGxhdGVzLCB0eXBlLCBmYWxsYmFjaykgPT4ge1xuICAgIGxldCB0ZW1wbGF0ZTtcbiAgICBsZXQgdGVtcGxhdGVNYXAgPSBuZXcgTWFwKHRlbXBsYXRlcyk7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIHRlbXBsYXRlTWFwKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGlmKGZiVXRpbHMuaW5BcnJheSh0eXBlLCBrZXkpKSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBrZXkpIHtcbiAgICAgICAgdGVtcGxhdGUgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGVtcGxhdGUgPSBmYWxsYmFjaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGUoKTtcbiAgfTtcblxuICBmYlV0aWxzLmF1dG9jb21wbGV0ZVRlbXBsYXRlID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQge3ZhbHVlcywgdHlwZSwgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgY29uc3Qga2V5Ym9hcmROYXYgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgbGV0IGFjdGl2ZU9wdGlvbiA9IGxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlLW9wdGlvbicpWzBdO1xuICAgICAgY29uc3Qga2V5Q29kZU1hcFZhbHMgPSBbXG4gICAgICAgIC8vIHVwXG4gICAgICAgIFszOCwgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24ucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbiA9IGFjdGl2ZU9wdGlvbi5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgLy8gZG93blxuICAgICAgICBbNDAsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbiA9IGFjdGl2ZU9wdGlvbi5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gbGlzdC5maXJzdENoaWxkO1xuICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBbMTMsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGFjdGl2ZU9wdGlvbi5pbm5lckhUTUw7XG4gICAgICAgICAgICBpZiAobGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICBdO1xuICAgICAgbGV0IGtleUNvZGVNYXAgPSBuZXcgTWFwKGtleUNvZGVNYXBWYWxzKTtcblxuICAgICAgbGV0IGRpcmVjdGlvbiA9IGtleUNvZGVNYXAuZ2V0KGUua2V5Q29kZSk7XG4gICAgICBpZighZGlyZWN0aW9uKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICgpID0+IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0aW9uKCk7XG4gICAgfTtcbiAgICBjb25zdCBmYXV4RXZlbnRzID0ge1xuICAgICAgZm9jdXM6IGV2dCA9PiB7XG4gICAgICAgIGV2dC50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkTmF2KTtcbiAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0sXG4gICAgICBibHVyOiBldnQgPT4ge1xuICAgICAgICBldnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZE5hdik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGV2dC50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH0sXG4gICAgICBpbnB1dDogKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZztcbiAgICAgICAgZC5maWx0ZXIobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLCBldnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKCFldnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBmYXV4QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLFxuICAgICAge1xuICAgICAgICBpZDogYCR7ZGF0YS5pZH0taW5wdXRgLFxuICAgICAgICBldmVudHM6IGZhdXhFdmVudHNcbiAgICAgIH0pO1xuICAgIGxldCBoaWRkZW5BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHt0eXBlOiAnaGlkZGVuJ30pO1xuICAgIGRlbGV0ZSBmYXV4QXR0cnMubmFtZTtcbiAgICBjb25zdCBmaWVsZCA9IFtcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgZmF1eEF0dHJzKSxcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgaGlkZGVuQXR0cnMpXG4gICAgXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB2YWx1ZXMubWFwKG9wdGlvbkRhdGEgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gb3B0aW9uRGF0YS5sYWJlbDtcbiAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiBldnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gbGlzdC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdCwgZmllbGQpO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBvcHRpb25EYXRhLmxhYmVsO1xuICAgICAgICAgICAgZmllbGQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gb3B0aW9uRGF0YS52YWx1ZTtcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBvcHRpb25EYXRhLnZhbHVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG0oJ2xpJywgbGFiZWwsIGNvbmZpZyk7XG4gICAgfSk7XG5cbiAgICBmaWVsZC5wdXNoKG0oJ3VsJywgb3B0aW9ucyxcbiAgICAgIHtpZDogYCR7ZGF0YS5pZH0tbGlzdGAsIGNsYXNzTmFtZTogYGZiLSR7dHlwZX0tbGlzdGB9KSk7XG5cbiAgICBjb25zdCBvblJlbmRlciA9IChldnQpID0+IHtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge2ZpZWxkLCBvblJlbmRlcn07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIERPTSBlbGVtZW50cyBmb3Igc2VsZWN0LCBjaGVja2JveC1ncm91cCBhbmQgcmFkaW8tZ3JvdXAuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGREYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIERPTSBlbGVtZW50c1xuICAgKi9cbiAgZmJVdGlscy5zZWxlY3RUZW1wbGF0ZSA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICBsZXQge3ZhbHVlcywgcGxhY2Vob2xkZXIsIHR5cGUsIGlubGluZSwgb3RoZXIsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCBvcHRpb25UeXBlID0gdHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG4gICAgbGV0IGlzU2VsZWN0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBpZiAocGxhY2Vob2xkZXIgJiYgaXNTZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5wdXNoKG0oJ29wdGlvbicsIHBsYWNlaG9sZGVyLCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWQ6IG51bGxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQge2xhYmVsID0gJycsIC4uLm9wdGlvbkF0dHJzfSA9IHZhbHVlc1tpXTtcblxuICAgICAgICBvcHRpb25BdHRycy5pZCA9IGAke2RhdGEuaWR9LSR7aX1gO1xuICAgICAgICBpZiAoIW9wdGlvbkF0dHJzLnNlbGVjdGVkIHx8IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICAgICAgbGV0IG8gPSBtKCdvcHRpb24nLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCksIG9wdGlvbkF0dHJzKTtcbiAgICAgICAgICBvcHRpb25zLnB1c2gobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKG9wdGlvbkF0dHJzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGlucHV0ID0gbSgnaW5wdXQnLCBudWxsLCBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBvcHRpb25BdHRycykpO1xuICAgICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBbaW5wdXQsIGxhYmVsXSwge2Zvcjogb3B0aW9uQXR0cnMuaWR9KTtcbiAgICAgICAgICBsZXQgd3JhcHBlciA9IG0oJ2RpdicsIGlucHV0TGFiZWwsIHtjbGFzc05hbWU6IHdyYXBwZXJDbGFzc30pO1xuICAgICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU2VsZWN0ICYmIG90aGVyKSB7XG4gICAgICAgIGxldCBvdGhlck9wdGlvbkF0dHJzID0ge1xuICAgICAgICAgIGlkOiBgJHtkYXRhLmlkfS1vdGhlcmAsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgJHtkYXRhLmNsYXNzTmFtZX0gb3RoZXItb3B0aW9uYCxcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBmYlV0aWxzLm90aGVyT3B0aW9uQ0Iob3RoZXJPcHRpb25BdHRycy5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGxldCBsYWJlbCA9IG1pMThuLmN1cnJlbnQub3RoZXI7XG4gICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBvcHRpb25UeXBlO1xuICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG90aGVyT3B0aW9uQXR0cnMpO1xuICAgICAgICBvcHRpb25BdHRycy50eXBlID0gb3B0aW9uVHlwZTtcblxuICAgICAgICBsZXQgb3RoZXJWYWxBdHRycyA9IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgIGlkOiBgJHtvdGhlck9wdGlvbkF0dHJzLmlkfS12YWx1ZWAsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnb3RoZXItdmFsJ1xuICAgICAgICB9O1xuICAgICAgICBsZXQgb3RoZXJJbnB1dHMgPSBbXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvcHRpb25BdHRycyksXG4gICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ090aGVyJyksXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvdGhlclZhbEF0dHJzKVxuICAgICAgICBdO1xuICAgICAgICBsZXQgaW5wdXRMYWJlbCA9IG0oJ2xhYmVsJywgb3RoZXJJbnB1dHMsIHtmb3I6IG9wdGlvbkF0dHJzLmlkfSk7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XG4gICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBbXG4gICAgICBbJ3NlbGVjdCcsXG4gICAgICAgICgpID0+IG0ob3B0aW9uVHlwZSwgb3B0aW9ucywgZGF0YSldLFxuICAgICAgW1snY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSxcbiAgICAgICAgKCkgPT4gbSgnZGl2Jywgb3B0aW9ucywge2NsYXNzTmFtZTogdHlwZX0pXVxuICAgIF07XG5cbiAgICByZXR1cm4gZmJVdGlscy50ZW1wbGF0ZU1hcCh0ZW1wbGF0ZXMsIHR5cGUpO1xuICB9O1xuXG4gIGZiVXRpbHMuZGVmYXVsdEZpZWxkID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQge2xhYmVsLCBkZXNjcmlwdGlvbiwgc3VidHlwZSwgdHlwZSwgaWQsIGlzUHJldmlldywgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgaWYgKGlkKSB7XG4gICAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgICB9XG4gICAgICBkYXRhLmlkID0gZGF0YS5uYW1lO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgIGRhdGEudGl0bGUgPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIHR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGxldCBmaWVsZCA9IHtcbiAgICAgIGZpZWxkOiBtKHR5cGUsIGxhYmVsLCBkYXRhKSxcbiAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuICgpID0+IGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhcnJheSBvZiBzY3JpcHRzIHVzaW5nIGpRdWVyeSdzIGBnZXRTY3JpcHRgXG4gICAqIEBwYXJhbSAge0FycmF5fFN0cmluZ30gIHNjcmlwdFNjciAgICBzY3JpcHRzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCAgIG9wdGlvbmFsIHRvIGxvYWQgZm9ybVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICBhIHByb21pc2VcbiAgICovXG4gIGZiVXRpbHMuZ2V0U2NyaXB0cyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBjb25zdCAkID0galF1ZXJ5O1xuICAgIGxldCBfYXJyID0gW107XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NyaXB0U2NyKSkge1xuICAgICAgc2NyaXB0U2NyID0gW3NjcmlwdFNjcl07XG4gICAgfVxuXG4gICAgaWYgKCFmYlV0aWxzLmlzQ2FjaGVkKHNjcmlwdFNjcikpIHtcbiAgICAgIF9hcnIgPSAkLm1hcChzY3JpcHRTY3IsIHNyYyA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIGRhdGFUeXBlOiAnc2NyaXB0JyxcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICB1cmw6IChwYXRoIHx8ICcnKSArIHNyY1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpLmRvbmUoKCkgPT4gd2luZG93LmZiTG9hZGVkLmpzLnB1c2goc3JjKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfYXJyLnB1c2goJC5EZWZlcnJlZCggZGVmZXJyZWQgPT4gJCggZGVmZXJyZWQucmVzb2x2ZSApKSk7XG5cbiAgICByZXR1cm4gJC53aGVuKC4uLl9hcnIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcmVtb3RlIHJlc291cmNlIGlzIGFscmVhZHkgbG9hZGVkXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gc3JjICB1cmwgb2YgcmVtb3RlIHNjcmlwdCBvciBjc3NcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgICAgICB0eXBlICAgICAgICdqcycgb3IgJ2NzcydcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBpc0NhY2hlZFxuICAgKi9cbiAgZmJVdGlscy5pc0NhY2hlZCA9IChzcmMsIHR5cGUgPSAnanMnKSA9PiB7XG4gICAgbGV0IGlzQ2FjaGVkID0gZmFsc2U7XG4gICAgY29uc3QgY2FjaGUgPSB3aW5kb3cuZmJMb2FkZWRbdHlwZV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgICAgaXNDYWNoZWQgPSBzcmMuZXZlcnkocyA9PiBmYlV0aWxzLmluQXJyYXkocywgY2FjaGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDYWNoZWQgPSBmYlV0aWxzLmluQXJyYXkoc3JjLCBjYWNoZSk7XG4gICAgfVxuICAgIHJldHVybiBpc0NhY2hlZDtcbiAgfTtcblxuICAvKipcbiAgICogQXBwZW5kcyBzdHlsZXNoZWV0cyB0byB0aGUgaGVhZFxuICAgKiBAcGFyYW0gIHtBcnJheX0gc2NyaXB0U2NyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmJVdGlscy5nZXRTdHlsZXMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgaWYgKGZiVXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyLCAnY3NzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBwZW5kU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgd2luZG93LmZiTG9hZGVkLmNzcy5wdXNoKGhyZWYpO1xuICAgIH07XG4gICAgc2NyaXB0U2NyLmZvckVhY2goc3JjID0+IGFwcGVuZFN0eWxlKChwYXRoIHx8ICcnKSArIHNyYykpO1xuICB9O1xuXG4gIGZiVXRpbHMubG9uZ1RleHRUZW1wbGF0ZSA9IGRhdGEgPT4ge1xuICAgIGxldCB7dmFsdWUgPSAnJywgLi4uYXR0cnN9ID0gZGF0YTtcbiAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICBmaWVsZDogbSgndGV4dGFyZWEnLCBmYlV0aWxzLnBhcnNlZEh0bWwodmFsdWUpLCBhdHRycylcbiAgICB9O1xuICAgIGxldCBlZGl0b3JzID0ge1xuICAgICAgdGlueW1jZToge1xuICAgICAgICBqczogWycvL2Nkbi50aW55bWNlLmNvbS80L3RpbnltY2UubWluLmpzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdKSB7XG4gICAgICAgICAgICB3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cudGlueW1jZS5pbml0KHtcbiAgICAgICAgICAgIHRhcmdldDogdGVtcGxhdGUuZmllbGQsXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgJ2Fkdmxpc3QgYXV0b2xpbmsgbGlzdHMgbGluayBpbWFnZSBjaGFybWFwIHByaW50IHByZXZpZXcgYW5jaG9yJyxcbiAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICdpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBjb250ZXh0bWVudSBwYXN0ZSBjb2RlJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRvb2xiYXI6ICdpbnNlcnRmaWxlIHVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcXVpbGw6IHtcbiAgICAgICAganM6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuanMnXSxcbiAgICAgICAgY3NzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLnNub3cuY3NzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGNvbnN0IERlbHRhID0gd2luZG93LlF1aWxsLmltcG9ydCgnZGVsdGEnKTtcbiAgICAgICAgICB3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2RhdGEuaWRdID0ge307XG4gICAgICAgICAgbGV0IGVkaXRvciA9IHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbZGF0YS5pZF07XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlID0gbmV3IHdpbmRvdy5RdWlsbCh0ZW1wbGF0ZS5maWVsZCwge1xuICAgICAgICAgICAgbW9kdWxlczoge1xuICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIGZhbHNlXX1dLFxuICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXG4gICAgICAgICAgICAgICAgWydjb2RlLWJsb2NrJ11cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBhdHRycy5wbGFjZWhvbGRlciB8fCAnJyxcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlZGl0b3IuZGF0YSA9IG5ldyBEZWx0YSgpO1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZWRpdG9yLmluc3RhbmNlLnNldENvbnRlbnRzKHdpbmRvdy5KU09OLnBhcnNlKGZiVXRpbHMucGFyc2VkSHRtbCh2YWx1ZSkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICAgICAgICBlZGl0b3IuZGF0YSA9IGVkaXRvci5kYXRhLmNvbXBvc2UoZGVsdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRlbXBsYXRlLm9uUmVuZGVyID0gZWRpdG9yc1tkYXRhLnR5cGVdLm9uUmVuZGVyO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAncXVpbGwnKSB7XG4gICAgICB0ZW1wbGF0ZS5maWVsZCA9IG0oJ2RpdicsIG51bGwsIGF0dHJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0pIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIG9uUmVuZGVyKTtcblxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcykge1xuICAgICAgICAgIGZiVXRpbHMuZ2V0U3R5bGVzKGVkaXRvcnNbZGF0YS50eXBlXS5jc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uanMgJiYgIWZiVXRpbHMuaXNDYWNoZWQoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKSkge1xuICAgICAgICAgIGZiVXRpbHMuZ2V0U2NyaXB0cyhlZGl0b3JzW2RhdGEudHlwZV0uanMpLmRvbmUodGVtcGxhdGUub25SZW5kZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlLm9uUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtmaWVsZDogdGVtcGxhdGUuZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICBmYlV0aWxzLmdldFRlbXBsYXRlID0gKGZpZWxkRGF0YSwgaXNQcmV2aWV3ID0gZmFsc2UpID0+IHtcbiAgICBsZXQge1xuICAgICAgbGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHN1YnR5cGUsXG4gICAgICBsYWJlbFBvc2l0aW9uLFxuICAgICAgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCBmaWVsZDtcblxuICAgIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgfVxuICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XG5cbiAgICBpZiAoc3VidHlwZSkge1xuICAgICAgZGF0YS50eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5tdWx0aXBsZSB8fCBkYXRhLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpIHtcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICdbXSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucmVxdWlyZWQpIHtcbiAgICAgIGRhdGEucmVxdWlyZWQgPSBudWxsO1xuICAgICAgZGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGxldCBmaWVsZExhYmVsID0gZmJVdGlscy5tYWtlTGFiZWwoZGF0YSwgbGFiZWwsIGRlc2NyaXB0aW9uKTtcblxuICAgIGxldCB0ZW1wbGF0ZXMgPSBbXG4gICAgICBbWydhdXRvY29tcGxldGUnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBhdXRvY29tcGxldGUgPSBmYlV0aWxzLmF1dG9jb21wbGV0ZVRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgYXV0b2NvbXBsZXRlLmZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBhdXRvY29tcGxldGUub25SZW5kZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ251bWJlcicsICdmaWxlJywgJ2NvbG9yJywgJ2RhdGUnLCAndGVsJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIG0oJ2lucHV0JywgbnVsbCwgZGF0YSldLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBtKCdidXR0b24nLCBsYWJlbCwgZGF0YSksXG4gICAgICAgICAgICBvblJlbmRlcjogZmJVdGlscy5ub29wXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1snc2VsZWN0JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSBmYlV0aWxzLnNlbGVjdFRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFsnY2hlY2tib3gnLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gW20oJ2lucHV0JywgbnVsbCwgZGF0YSldO1xuICAgICAgICAgIGlmIChsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlSW5wdXQnKSB7XG4gICAgICAgICAgICBmaWVsZC51bnNoaWZ0KGZpZWxkTGFiZWwsICcgJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkLnB1c2goJyAnLCBmaWVsZExhYmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBvblJlbmRlcjogKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZGF0YS50b2dnbGUpIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEuaWQpKS5rY1RvZ2dsZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1sndGV4dGFyZWEnLCAndGlueW1jZScsICdxdWlsbCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gZmJVdGlscy5sb25nVGV4dFRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGQuZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZpZWxkLm9uUmVuZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dXG4gICAgICBdO1xuXG4gICAgICB0ZW1wbGF0ZSA9IGZiVXRpbHMudGVtcGxhdGVNYXAoXG4gICAgICAgIHRlbXBsYXRlcyxcbiAgICAgICAgZGF0YS50eXBlLFxuICAgICAgICBmYlV0aWxzLmRlZmF1bHRGaWVsZChmaWVsZERhdGEpIC8vIGZhbGxiYWNrXG4gICAgICApO1xuXG4gICAgICBpZiAoZGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICBsZXQgd3JhcHBlckF0dHJzID0ge307XG4gICAgICAgIGlmIChkYXRhLmlkKSB7XG4gICAgICAgICAgd3JhcHBlckF0dHJzLmNsYXNzTmFtZSA9XG4gICAgICAgICAgYGZiLSR7ZGF0YS50eXBlfSBmb3JtLWdyb3VwIGZpZWxkLSR7ZGF0YS5pZH1gO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkID0gZmJVdGlscy5tYXJrdXAoJ2RpdicsIHRlbXBsYXRlLmZpZWxkLCB3cmFwcGVyQXR0cnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQgPSBmYlV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIHRlbXBsYXRlLm9uUmVuZGVyKTtcblxuICAgICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igb3RoZXIgb3B0aW9uLlxuICAgKiBUb2dnbGVzIHRoZSBoaWRkZW4gdGV4dCBhcmVhIGZvciBcIm90aGVyXCIgb3B0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG90aGVySWQgaWQgb2YgdGhlIFwib3RoZXJcIiBvcHRpb24gaW5wdXRcbiAgICovXG4gIGZiVXRpbHMub3RoZXJPcHRpb25DQiA9IChvdGhlcklkKSA9PiB7XG4gICAgY29uc3Qgb3RoZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG90aGVySWQpO1xuICAgIGNvbnN0IG90aGVySW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke290aGVySWR9LXZhbHVlYCk7XG5cbiAgICBpZiAob3RoZXJJbnB1dC5jaGVja2VkKSB7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHVuY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgKi9cbiAgZmJVdGlscy5jYXBpdGFsaXplID0gc3RyID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcYlxcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiBtLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgfTtcblxuXG5mYlV0aWxzLm1lcmdlID0gKG9iajEsIG9iajIpID0+IHtcbiAgbGV0IG1lcmdlZE9iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9iajEsIG9iajIpO1xuICBmb3IgKGxldCBwcm9wIGluIG9iajIpIHtcbiAgICBpZiAobWVyZ2VkT2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmoyW3Byb3BdKSkge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBBcnJheS5pc0FycmF5KG9iajFbcHJvcF0pID8gZmJVdGlscy51bmlxdWUob2JqMVtwcm9wXS5jb25jYXQob2JqMltwcm9wXSkpIDogb2JqMltwcm9wXTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iajJbcHJvcF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IGZiVXRpbHMubWVyZ2Uob2JqMVtwcm9wXSwgb2JqMltwcm9wXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBvYmoyW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VkT2JqO1xufTtcblxuLyoqXG4gKiBVdGlsIHRvIHJlbW92ZSBjb250ZW50cyBvZiBET00gT2JqZWN0XG4gKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBlbGVtZW50IHdpdGggaXRzIGNoaWxkcmVuIHJlbW92ZWRcbiAqL1xuZmJVdGlscy5lbXB0eSA9IGVsZW1lbnQgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZmJVdGlscy5ub29wID0gKCkgPT4gbnVsbDtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZiVXRpbHM7XG4iXX0=
