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
   * @param  {Array} elems
   * @param  {String} term  match textContent to this term
   * @return {Array}        filtered elements
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
      // rendered.push(utils.fieldRender(sanitizedField, opts));
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

  var fauxEvents = {
    input: function input(evt) {
      var list = document.getElementById(data.id + '-list');
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

  var options = values.map(function (optionData, i) {
    var label = optionData.label;
    var config = {
      events: {
        click: function click() {
          var list = document.getElementById(data.id + '-list');
          var field = document.getElementById(data.id);
          field.value = optionData.value;
          field.previousSibling.value = optionData.label;
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
  var value = data.value,
      attrs = (0, _objectWithoutProperties3.default)(data, ['value']);

  var template = {
    field: m('textarea', value, attrs)
  };
  var editors = {
    tinymce: {
      js: ['//cdn.tinymce.com/4/tinymce.min.js'],
      onRender: function onRender(evt) {
        for (template.field.id in window.tinymce.editors) {
          window.tinymce.editors[template.field.id].remove();
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
        new window.Quill(template.field, {
          modules: {
            toolbar: [[{ 'header': [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']]
          },
          placeholder: attrs.placeholder || '',
          theme: 'snow'
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

  console.log(fieldData);
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
    var field = [m('input', label, data)];
    if (labelPosition === 'beforeInput') {
      field.unshift(fieldLabel, ' ');
    } else {
      field.push(' ', fieldLabel);
    }
    var template = {
      field: field,
      onRender: function onRender() {
        console.log($.kcToggle);
        if (data.toggle) {
          $(field).kcToggle();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwic3JjL2pzL2RvbS5qcyIsInNyYy9qcy9ldmVudHMuanMiLCJzcmMvanMvZm9ybS1yZW5kZXIuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUssSUFBSSxJQUFULElBQWlCLElBQWpCLEVBQXVCO0FBQ3JCLFFBQUksVUFBVSxjQUFWLENBQXlCLElBQXpCLENBQUosRUFBb0M7QUFDbEMsVUFBSSxNQUFNLE9BQU4sQ0FBYyxLQUFLLElBQUwsQ0FBZCxDQUFKLEVBQStCO0FBQzdCLGtCQUFVLElBQVYsSUFBa0IsTUFBTSxPQUFOLENBQWMsS0FBSyxJQUFMLENBQWQsSUFBNEIsUUFBUSxNQUFSLENBQWUsS0FBSyxJQUFMLEVBQVcsTUFBWCxDQUFrQixLQUFLLElBQUwsQ0FBbEIsQ0FBZixDQUE1QixHQUE0RSxLQUFLLElBQUwsQ0FBOUY7QUFDRCxPQUZELE1BRU8sSUFBSSxzQkFBTyxLQUFLLElBQUwsQ0FBUCxNQUFzQixRQUExQixFQUFvQztBQUN6QyxrQkFBVSxJQUFWLElBQWtCLFFBQVEsS0FBUixDQUFjLEtBQUssSUFBTCxDQUFkLEVBQTBCLEtBQUssSUFBTCxDQUExQixDQUFsQjtBQUNELE9BRk0sTUFFQTtBQUNMLGtCQUFVLElBQVYsSUFBa0IsS0FBSyxJQUFMLENBQWxCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBTyxTQUFQO0FBQ0QsQ0FkRDs7QUFnQkE7Ozs7O0FBS0EsUUFBUSxLQUFSLEdBQWdCLG1CQUFXO0FBQ3pCLFNBQU8sUUFBUSxVQUFmLEVBQTJCO0FBQ3pCLFlBQVEsV0FBUixDQUFvQixRQUFRLFVBQTVCO0FBQ0Q7QUFDRCxTQUFPLE9BQVA7QUFDRCxDQUxEOztBQU9BLFFBQVEsSUFBUixHQUFlO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBZjs7QUFHQSxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07IiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG1ldGEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBlYWNoICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59OyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpOyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsImNvbnN0IGRvbSA9IHt9O1xuXG5kb20ub3B0aW9uRmllbGRzID0gW1xuJ3NlbGVjdCcsXG4nY2hlY2tib3gtZ3JvdXAnLFxuJ3JhZGlvLWdyb3VwJyxcbidhdXRvY29tcGxldGUnXG5dO1xuZG9tLm9wdGlvbkZpZWxkc1JlZ0V4ID0gbmV3IFJlZ0V4cChgKCR7ZG9tLm9wdGlvbkZpZWxkcy5qb2luKCd8Jyl9KWApO1xuXG4vKipcbiAgICogVXRpbCB0byByZW1vdmUgY29udGVudHMgb2YgRE9NIE9iamVjdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIGVsZW1lbnQgd2l0aCBpdHMgY2hpbGRyZW4gcmVtb3ZlZFxuICAgKi9cbmRvbS5lbXB0eSA9IChlbGVtZW50KSA9PiB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAgICogSGlkZSBvciBzaG93IGFuIEFycmF5IG9yIEhUTUxDb2xsZWN0aW9uIG9mIGVsZW1lbnRzXG4gICAqIEBwYXJhbSAge0FycmF5fSBlbGVtc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHRlcm0gIG1hdGNoIHRleHRDb250ZW50IHRvIHRoaXMgdGVybVxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIGZpbHRlcmVkIGVsZW1lbnRzXG4gICAqL1xuZG9tLmZpbHRlciA9IChlbGVtcywgdGVybSwgc2hvdyA9IHRydWUpID0+IHtcbiAgbGV0IGZpbHRlcmVkRWxlbXMgPSBbXTtcbiAgbGV0IHRvZ2dsZSA9IFsnbm9uZScsICdibG9jayddO1xuXG4gIGlmIChzaG93KSB7XG4gICAgdG9nZ2xlID0gdG9nZ2xlLnJldmVyc2UoKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBlbGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCB0eHQgPSBlbGVtc1tpXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0eHQuaW5kZXhPZih0ZXJtLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgZWxlbXNbaV0uc3R5bGUuZGlzcGxheSA9IHRvZ2dsZVswXTtcbiAgICAgIGZpbHRlcmVkRWxlbXMucHVzaChlbGVtc1tpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSB0b2dnbGVbMV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkRWxlbXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb207XG4iLCIvKipcbiAqIEZvcm0gQnVpbGRlciBldmVudHNcbiAqIEByZXR1cm4ge09iamVjdH0gdmFyaW91cyBldmVudHMgdG8gYmUgdHJpZ2dlclxuICovXG4vLyBmdW5jdGlvbiBmYkV2ZW50cygpe1xuICBjb25zdCBldmVudHMgPSB7fTtcblxuICBldmVudHMubG9hZGVkID0gbmV3IEV2ZW50KCdsb2FkZWQnKTtcbiAgZXZlbnRzLnZpZXdEYXRhID0gbmV3IEV2ZW50KCd2aWV3RGF0YScpO1xuICBldmVudHMudXNlckRlY2xpbmVkID0gbmV3IEV2ZW50KCd1c2VyRGVjbGluZWQnKTtcbiAgZXZlbnRzLm1vZGFsQ2xvc2VkID0gbmV3IEV2ZW50KCdtb2RhbENsb3NlZCcpO1xuICBldmVudHMubW9kYWxPcGVuZWQgPSBuZXcgRXZlbnQoJ21vZGFsT3BlbmVkJyk7XG4gIGV2ZW50cy5mb3JtU2F2ZWQgPSBuZXcgRXZlbnQoJ2Zvcm1TYXZlZCcpO1xuICBldmVudHMuZmllbGRBZGRlZCA9IG5ldyBFdmVudCgnZmllbGRBZGRlZCcpO1xuICBldmVudHMuZmllbGRSZW1vdmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbW92ZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVuZGVyZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVuZGVyZWQnKTtcblxuLy8gICByZXR1cm4gZXZlbnRzO1xuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50cztcbiIsIi8qKlxuICogcmVuZGVyIHRoZSBmb3JtQnVpbGRlciBYTUwgaW50byBodG1sXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBodG1sIGVsZW1lbnQgd2hlcmUgZm9ybSB3aWxsIGJlIHJlbmRlcmVkIChvcHRpb25hbClcbiAqIEByZXR1cm4ge09iamVjdH0gZm9ybVJlbmRlciBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBGb3JtUmVuZGVyKG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG4gIGNvbnN0IGV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzLmpzJyk7XG5cbiAgY29uc3QgZm9ybVJlbmRlciA9IHRoaXM7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgZGVzdHJveVRlbXBsYXRlOiB0cnVlLCAvLyBAdG9kb1xuICAgICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBmb3JtRGF0YTogZmFsc2UsXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBmb3JtUmVuZGVyZWQ6ICdGb3JtIFJlbmRlcmVkJyxcbiAgICAgICAgbm9Gb3JtRGF0YTogJ05vIGZvcm0gZGF0YS4nLFxuICAgICAgICBvdGhlcjogJ090aGVyJyxcbiAgICAgICAgc2VsZWN0Q29sb3I6ICdTZWxlY3QgQ29sb3InXG4gICAgICB9LFxuICAgICAgb25SZW5kZXI6ICgpID0+IHt9LFxuICAgICAgcmVuZGVyOiB0cnVlLFxuICAgICAgbm90aWZ5OiB7XG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm5pbmc6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICBsZXQgb3B0cyA9ICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFvcHRzLmZvcm1EYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHNldERhdGEgPSB7XG4gICAgICB4bWw6IGZvcm1EYXRhID0+IHV0aWxzLnBhcnNlWE1MKGZvcm1EYXRhKSxcbiAgICAgIGpzb246IGZvcm1EYXRhID0+IHdpbmRvdy5KU09OLnBhcnNlKGZvcm1EYXRhKVxuICAgIH07XG5cbiAgICBvcHRzLmZvcm1EYXRhID0gc2V0RGF0YVtvcHRzLmRhdGFUeXBlXShvcHRzLmZvcm1EYXRhKSB8fCBmYWxzZTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogRXh0ZW5kIEVsZW1lbnQgcHJvdG90eXBlIHRvIGFsbG93IHVzIHRvIGFwcGVuZCBmaWVsZHNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZHMgTm9kZSBlbGVtZW50c1xuICAgKi9cbiAgRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kRm9ybUZpZWxkcyA9IGZ1bmN0aW9uKGZpZWxkcykge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcztcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQoZXZlbnRzLmZpZWxkUmVuZGVyZWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRlbmQgRWxlbWVudCBwcm90b3R5cGUgdG8gcmVtb3ZlIGNvbnRlbnRcbiAgICovXG4gIEVsZW1lbnQucHJvdG90eXBlLmVtcHR5Q29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzO1xuICAgIHdoaWxlIChlbGVtZW50Lmxhc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBydW5DYWxsYmFja3MgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAob3B0cy5vblJlbmRlcikge1xuICAgICAgb3B0cy5vblJlbmRlcigpO1xuICAgIH1cbiAgfTtcblxuICBsZXQgc2FudGl6ZUZpZWxkID0gKGZpZWxkKSA9PiB7XG4gICAgbGV0IHNhbml0aXplZEZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpO1xuICAgIHNhbml0aXplZEZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzTmFtZSB8fCBmaWVsZC5jbGFzcyB8fCBudWxsO1xuICAgIGRlbGV0ZSBzYW5pdGl6ZWRGaWVsZC5jbGFzcztcblxuICAgIGlmIChmaWVsZC52YWx1ZXMpIHtcbiAgICAgIGZpZWxkLnZhbHVlcyA9IGZpZWxkLnZhbHVlcy5tYXAob3B0aW9uID0+IHV0aWxzLnRyaW1PYmoob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLnRyaW1PYmooc2FuaXRpemVkRmllbGQpO1xuICB9O1xuXG4gIGxldCBleHBvcnRNYXJrdXAgPSBmaWVsZHMgPT4gZmllbGRzLm1hcChlbGVtID0+IGVsZW0uaW5uZXJIVE1MKS5qb2luKCcnKTtcblxuICAvLyBCZWdpbiB0aGUgY29yZSBwbHVnaW5cbiAgbGV0IHJlbmRlcmVkID0gW107XG5cbiAgLy8gZ2VuZXJhdGUgZmllbGQgbWFya3VwIGlmIHdlIGhhdmUgZmllbGRzXG4gIGlmIChvcHRzLmZvcm1EYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLmZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2FuaXRpemVkRmllbGQgPSBzYW50aXplRmllbGQob3B0cy5mb3JtRGF0YVtpXSk7XG4gICAgICByZW5kZXJlZC5wdXNoKHV0aWxzLmdldFRlbXBsYXRlKHNhbml0aXplZEZpZWxkKSk7XG4gICAgICAvLyByZW5kZXJlZC5wdXNoKHV0aWxzLmZpZWxkUmVuZGVyKHNhbml0aXplZEZpZWxkLCBvcHRzKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucmVuZGVyKSB7XG4gICAgICBpZiAob3B0cy5jb250YWluZXIpIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkRm9ybVdyYXAgPSB1dGlscy5tYXJrdXAoJ2RpdicsIHJlbmRlcmVkLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncmVuZGVyZWQtZm9ybSdcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRzLmNvbnRhaW5lciBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICAgIG9wdHMuY29udGFpbmVyID0gb3B0cy5jb250YWluZXJbMF07XG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5jb250YWluZXIuZW1wdHlDb250YWluZXIoKTtcbiAgICAgICAgb3B0cy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZWRGb3JtV3JhcCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5lbXB0eUNvbnRhaW5lcigpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZEZvcm1GaWVsZHMocmVuZGVyZWQpO1xuICAgICAgfVxuXG4gICAgICBydW5DYWxsYmFja3MoKTtcbiAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3Mob3B0cy5tZXNzYWdlcy5mb3JtUmVuZGVyZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtUmVuZGVyLm1hcmt1cCA9IGV4cG9ydE1hcmt1cChyZW5kZXJlZCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBub0RhdGEgPSB1dGlscy5tYXJrdXAoJ2RpdicsIG9wdHMubWVzc2FnZXMubm9Gb3JtRGF0YSwge1xuICAgICAgY2xhc3NOYW1lOiAnbm8tZm9ybS1kYXRhJ1xuICAgIH0pO1xuICAgIHJlbmRlcmVkLnB1c2gobm9EYXRhKTtcbiAgICBvcHRzLm5vdGlmeS5lcnJvcihvcHRzLm1lc3NhZ2VzLm5vRm9ybURhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1SZW5kZXI7XG59XG5cbihmdW5jdGlvbigkKSB7XG4gICQuZm4uZm9ybVJlbmRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBsZXQgZWxlbXMgPSB0aGlzO1xuICAgIGVsZW1zLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IGZvcm1SZW5kZXIgPSBuZXcgRm9ybVJlbmRlcihvcHRpb25zLCBlbGVtc1tpXSk7XG4gICAgICBlbGVtc1tpXS5kYXRhc2V0LmZvcm1SZW5kZXIgPSBmb3JtUmVuZGVyO1xuICAgICAgcmV0dXJuIGZvcm1SZW5kZXI7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuXG53aW5kb3cuRm9ybVJlbmRlciA9IEZvcm1SZW5kZXI7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1SZW5kZXI7XG4iLCJpbXBvcnQgZCBmcm9tICcuL2RvbSc7XG5cbi8qKlxuICogQ3Jvc3MgZmlsZSB1dGlsaXRpZXMgZm9yIHdvcmtpbmcgd2l0aCBhcnJheXMsXG4gKiBzb3J0aW5nIGFuZCBvdGhlciBmdW4gc3R1ZmZcbiAqIEByZXR1cm4ge09iamVjdH0gZmJVdGlsc1xuICovXG4vLyBmdW5jdGlvbiB1dGlscygpIHtcbiAgY29uc3QgZmJVdGlscyA9IHt9O1xuICB3aW5kb3cuZmJMb2FkZWQgPSB7XG4gICAganM6IFtdLFxuICAgIGNzczogW11cbiAgfTtcblxuICAvLyBjbGVhbmVyIHN5bnRheCBmb3IgdGVzdGluZyBpbmRleE9mIGVsZW1lbnRcbiAgZmJVdGlscy5pbkFycmF5ID0gZnVuY3Rpb24obmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgT2JqZWN0IHRyaW1tZWQgb2YgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnRyaW1PYmogPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCB4bWxSZW1vdmUgPSBbXG4gICAgICBudWxsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgJycsXG4gICAgICBmYWxzZSxcbiAgICAgICdmYWxzZSdcbiAgICBdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChmYlV0aWxzLmluQXJyYXkoYXR0cnNbYXR0cl0sIHhtbFJlbW92ZSkpIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGF0dHJzW2F0dHJdKSkge1xuICAgICAgICBpZiAoIWF0dHJzW2F0dHJdLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvKipcbiAgICogVGVzdCBpZiBhdHRyaWJ1dGUgaXMgYSB2YWxpZCBIVE1MIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGZiVXRpbHMudmFsaWRBdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICAgIGxldCBpbnZhbGlkID0gW1xuICAgICAgJ3ZhbHVlcycsXG4gICAgICAnZW5hYmxlT3RoZXInLFxuICAgICAgJ290aGVyJyxcbiAgICAgICdsYWJlbCcsXG4gICAgICAvLyAnc3R5bGUnLFxuICAgICAgJ3N1YnR5cGUnXG4gICAgXTtcbiAgICByZXR1cm4gIWZiVXRpbHMuaW5BcnJheShhdHRyLCBpbnZhbGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBhdHRycyBvYmplY3QgaW50byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIG9iamVjdCBvZiBhdHRyaWJ1dGVzIGZvciBtYXJrdXBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5hdHRyU3RyaW5nID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpICYmIGZiVXRpbHMudmFsaWRBdHRyKGF0dHIpKSB7XG4gICAgICAgIGF0dHIgPSBmYlV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIubmFtZSArIGF0dHIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlcy5qb2luKCcgJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXR0cmlidXRlcyB0byBtYXJrdXAgc2FmZSBzdHJpbmdzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMuc2FmZUF0dHIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShuYW1lKTtcbiAgICBsZXQgdmFsU3RyaW5nO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsU3RyaW5nID0gZmJVdGlscy5lc2NhcGVBdHRyKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5yZXBsYWNlKCcsJywgJyAnKS50cmltKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUgPyBgPVwiJHt2YWxTdHJpbmd9XCJgIDogJyc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgZmJVdGlscy5zYWZlQXR0ck5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbGV0IHNhZmVBdHRyID0ge1xuICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnXG4gICAgfTtcblxuICAgIHJldHVybiBzYWZlQXR0cltuYW1lXSB8fCBmYlV0aWxzLmh5cGhlbkNhc2UobmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5ncyBpbnRvIGxvd2VyY2FzZS1oeXBoZW5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5oeXBoZW5DYXNlID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL14tKy9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnZlcnQgYSBoeXBoZW5hdGVkIHN0cmluZyB0byBjYW1lbENhc2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5jYW1lbENhc2UgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbihtLCB3KSB7XG4gICAgICByZXR1cm4gdy50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgY29udGVudCB0eXBlXG4gICAqIEBwYXJhbSAge05vZGUgfCBTdHJpbmcgfCBBcnJheSB8IE9iamVjdH0gY29udGVudFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlIGZvciBtYXBwaW5nXG4gICAqL1xuICBmYlV0aWxzLmNvbnRlbnRUeXBlID0gY29udGVudCA9PiB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgY29udGVudDtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIE5vZGUgfHwgY29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0eXBlID0gJ25vZGUnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgdHlwZSA9ICdhcnJheSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnRzIHRvIGFuIGVsZW1lbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRzICBvYmplY3QgZnVsbCBvZiBldmVudHMgZWcuIHtjbGljazogZXZ0ID0+IGNhbGxiYWNrfVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmJVdGlscy5iaW5kRXZlbnRzID0gKGVsZW1lbnQsIGV2ZW50cykgPT4ge1xuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZ0ID0+IGV2ZW50c1tldmVudF0oZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCB3cmFwcGVyIHdoZXJlIG5lZWRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICB0YWdcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fE9iamVjdH0gY29udGVudCB3ZSB3cmFwIHRoaXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgYXR0cnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gRWxlbWVudFxuICAgKi9cbiAgZmJVdGlscy5tYXJrdXAgPSBmdW5jdGlvbih0YWcsIGNvbnRlbnQgPSAnJywgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgbGV0IGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICBsZXQge2V2ZW50cywgLi4uYXR0cnN9ID0gYXR0cmlidXRlcztcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGNvbnN0IGFwcGVuZENvbnRlbnQgPSB7XG4gICAgICBzdHJpbmc6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZpZWxkLmlubmVySFRNTCArPSBjb250ZW50O1xuICAgICAgfSxcbiAgICAgIG9iamVjdDogKGNvbmZpZykgPT4ge1xuICAgICAgICBsZXQge3RhZywgY29udGVudCwgLi4uZGF0YX0gPSBjb25maWc7XG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZChmYlV0aWxzLm1hcmt1cCh0YWcsIGNvbnRlbnQsIGRhdGEpKTtcbiAgICAgIH0sXG4gICAgICBub2RlOiAoY29udGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICB9LFxuICAgICAgYXJyYXk6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50W2ldKTtcbiAgICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50W2ldKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uOiBjb250ZW50ID0+IHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICAgICAgY29udGVudFR5cGUgPSBmYlV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnQpO1xuICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50KTtcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQ6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0YWcsIGNvbnRlbnQsIGF0dHJpYnV0ZXMpO1xuICAgICAgfSxcbiAgICB9O1xuXG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShhdHRyKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0uY2FsbCh0aGlzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICBmYlV0aWxzLmJpbmRFdmVudHMoZmllbGQsIGV2ZW50cyk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH07XG4gIGNvbnN0IG0gPSBmYlV0aWxzLm1hcmt1cDtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGV4OiB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMucGFyc2VBdHRycyA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICBsZXQgYXR0cnMgPSBlbGVtLmF0dHJpYnV0ZXM7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBmYlV0aWxzLmZvckVhY2goYXR0cnMsIGF0dHIgPT4ge1xuICAgICAgbGV0IGF0dHJWYWwgPSBhdHRyc1thdHRyXS52YWx1ZTtcbiAgICAgIGlmIChhdHRyVmFsLm1hdGNoKC9mYWxzZXx0cnVlL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCA9PT0gJ3RydWUnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0clZhbC5tYXRjaCgvdW5kZWZpbmVkL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRyVmFsKSB7XG4gICAgICAgIGRhdGFbYXR0cnNbYXR0cl0ubmFtZV0gPSBhdHRyVmFsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgZmllbGQgb3B0aW9ucyB0byBvcHRpb25EYXRhXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgIERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIG9wdGlvbkRhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZmllbGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29wdGlvbicpO1xuICAgIGxldCBvcHRpb25EYXRhID0ge307XG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wdGlvbkRhdGEgPSBmYlV0aWxzLnBhcnNlQXR0cnMob3B0aW9uc1tpXSk7XG4gICAgICAgIG9wdGlvbkRhdGEubGFiZWwgPSBvcHRpb25zW2ldLnRleHRDb250ZW50O1xuICAgICAgICBkYXRhLnB1c2gob3B0aW9uRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHhtbFN0cmluZ1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBmb3JtRGF0YSBhcnJheVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKTtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcblxuICAgIGlmICh4bWwpIHtcbiAgICAgIGxldCBmaWVsZHMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpZWxkJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gZmJVdGlscy5wYXJzZUF0dHJzKGZpZWxkc1tpXSk7XG5cbiAgICAgICAgaWYgKGZpZWxkc1tpXS5jaGlsZHJlbiAmJiBmaWVsZHNbaV0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgZmllbGREYXRhLnZhbHVlcyA9IGZiVXRpbHMucGFyc2VPcHRpb25zKGZpZWxkc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFc2NhcGUgbWFya3VwIHNvIGl0IGNhbiBiZSBkaXNwbGF5ZWQgcmF0aGVyIHRoYW4gcmVuZGVyZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sIG1hcmt1cFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgZXNjYXBlZCBodG1sXG4gICAqL1xuICBmYlV0aWxzLmVzY2FwZUh0bWwgPSBmdW5jdGlvbihodG1sKSB7XG4gICAgbGV0IGVzY2FwZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQgPSBodG1sO1xuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LmlubmVySFRNTDtcbiAgfTtcblxuICAvLyBFc2NhcGUgYW4gYXR0cmlidXRlXG4gIGZiVXRpbHMuZXNjYXBlQXR0ciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCBtYXRjaCA9IHtcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7J1xuICAgIH07XG5cbiAgICBjb25zdCByZXBsYWNlVGFnID0gdGFnID0+IG1hdGNoW3RhZ10gfHwgdGFnO1xuXG4gICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykgPyBzdHIucmVwbGFjZSgvW1wiJjw+XS9nLCByZXBsYWNlVGFnKSA6IHN0cjtcbiAgfTtcblxuICAvLyBFc2NhcGUgYXR0cmlidXRlc1xuICBmYlV0aWxzLmVzY2FwZUF0dHJzID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgYXR0cnNbYXR0cl0gPSBmYlV0aWxzLmVzY2FwZUF0dHIoYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvLyBmb3JFYWNoIHRoYXQgY2FuIGJlIHVzZWQgb24gbm9kZUxpc3RcbiAgZmJVdGlscy5mb3JFYWNoID0gZnVuY3Rpb24oYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTsgLy8gcGFzc2VzIGJhY2sgc3R1ZmYgd2UgbmVlZFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheSBvZiBlbGVtZW50c1xuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgIGFycmF5IHdpdGggcG9zc2libGUgZHVwbGljYXRlc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIGFycmF5IHdpdGggb25seSB1bmlxdWUgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigoZWxlbSwgcG9zLCBhcnIpID0+IHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihlbGVtKSA9PT0gcG9zO1xuICAgIH0pO1xuICB9O1xuXG4gIGZiVXRpbHMubWFrZUxhYmVsID0gKGRhdGEsIGxhYmVsID0gJycsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgICBsZXQgbGFiZWxDb250ZW50cyA9IFtkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCldO1xuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkJykpIHtcbiAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJyonLCB7Y2xhc3NOYW1lOiAncmVxdWlyZWQnfSkpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnPycsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICAgIHRvb2x0aXA6IGRlc2NyaXB0aW9uXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbSgnbGFiZWwnLCBsYWJlbENvbnRlbnRzLCB7XG4gICAgICBmb3I6IGRhdGEuaWQsXG4gICAgICBjbGFzc05hbWU6IGBmYi0ke2RhdGEudHlwZX0tbGFiZWxgXG4gICAgfSk7XG4gIH07XG5cbiAgZmJVdGlscy50ZW1wbGF0ZU1hcCA9ICh0ZW1wbGF0ZXMsIHR5cGUsIGZhbGxiYWNrKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCB0ZW1wbGF0ZU1hcCA9IG5ldyBNYXAodGVtcGxhdGVzKTtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgdGVtcGxhdGVNYXApIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgaWYoZmJVdGlscy5pbkFycmF5KHR5cGUsIGtleSkpIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGtleSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICB0ZW1wbGF0ZSA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSgpO1xuICB9O1xuXG4gIGZiVXRpbHMuYXV0b2NvbXBsZXRlVGVtcGxhdGUgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7dmFsdWVzLCB0eXBlLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBjb25zdCBmYXV4RXZlbnRzID0ge1xuICAgICAgaW5wdXQ6IChldnQpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGEuaWR9LWxpc3RgKTtcbiAgICAgICAgZC5maWx0ZXIobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLCBldnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKCFldnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBmYXV4QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLFxuICAgICAge1xuICAgICAgICBpZDogYCR7ZGF0YS5pZH0taW5wdXRgLFxuICAgICAgICBldmVudHM6IGZhdXhFdmVudHNcbiAgICAgIH0pO1xuICAgIGxldCBoaWRkZW5BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHt0eXBlOiAnaGlkZGVuJ30pO1xuICAgIGRlbGV0ZSBmYXV4QXR0cnMubmFtZTtcbiAgICBjb25zdCBmaWVsZCA9IFtcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgZmF1eEF0dHJzKSxcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgaGlkZGVuQXR0cnMpXG4gICAgXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB2YWx1ZXMubWFwKChvcHRpb25EYXRhLCBpKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSBvcHRpb25EYXRhLmxhYmVsO1xuICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhLmlkfS1saXN0YCk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEuaWQpO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBvcHRpb25EYXRhLnZhbHVlO1xuICAgICAgICAgICAgZmllbGQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gb3B0aW9uRGF0YS5sYWJlbDtcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBvcHRpb25EYXRhLnZhbHVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG0oJ2xpJywgbGFiZWwsIGNvbmZpZyk7XG4gICAgfSk7XG5cbiAgICBmaWVsZC5wdXNoKG0oJ3VsJywgb3B0aW9ucyxcbiAgICAgIHtpZDogYCR7ZGF0YS5pZH0tbGlzdGAsIGNsYXNzTmFtZTogYGZiLSR7dHlwZX0tbGlzdGB9KSk7XG5cbiAgICBjb25zdCBvblJlbmRlciA9IChldnQpID0+IHtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge2ZpZWxkLCBvblJlbmRlcn07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIERPTSBlbGVtZW50cyBmb3Igc2VsZWN0LCBjaGVja2JveC1ncm91cCBhbmQgcmFkaW8tZ3JvdXAuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGREYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIERPTSBlbGVtZW50c1xuICAgKi9cbiAgZmJVdGlscy5zZWxlY3RUZW1wbGF0ZSA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICBsZXQge3ZhbHVlcywgcGxhY2Vob2xkZXIsIHR5cGUsIGlubGluZSwgb3RoZXIsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCBvcHRpb25UeXBlID0gdHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG4gICAgbGV0IGlzU2VsZWN0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBpZiAocGxhY2Vob2xkZXIgJiYgaXNTZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5wdXNoKG0oJ29wdGlvbicsIHBsYWNlaG9sZGVyLCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWQ6IG51bGxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQge2xhYmVsID0gJycsIC4uLm9wdGlvbkF0dHJzfSA9IHZhbHVlc1tpXTtcblxuICAgICAgICBvcHRpb25BdHRycy5pZCA9IGAke2RhdGEuaWR9LSR7aX1gO1xuICAgICAgICBpZiAoIW9wdGlvbkF0dHJzLnNlbGVjdGVkIHx8IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICAgICAgbGV0IG8gPSBtKCdvcHRpb24nLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCksIG9wdGlvbkF0dHJzKTtcbiAgICAgICAgICBvcHRpb25zLnB1c2gobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKG9wdGlvbkF0dHJzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGlucHV0ID0gbSgnaW5wdXQnLCBudWxsLCBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBvcHRpb25BdHRycykpO1xuICAgICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBbaW5wdXQsIGxhYmVsXSwge2Zvcjogb3B0aW9uQXR0cnMuaWR9KTtcbiAgICAgICAgICBsZXQgd3JhcHBlciA9IG0oJ2RpdicsIGlucHV0TGFiZWwsIHtjbGFzc05hbWU6IHdyYXBwZXJDbGFzc30pO1xuICAgICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU2VsZWN0ICYmIG90aGVyKSB7XG4gICAgICAgIGxldCBvdGhlck9wdGlvbkF0dHJzID0ge1xuICAgICAgICAgIGlkOiBgJHtkYXRhLmlkfS1vdGhlcmAsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgJHtkYXRhLmNsYXNzTmFtZX0gb3RoZXItb3B0aW9uYCxcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBmYlV0aWxzLm90aGVyT3B0aW9uQ0Iob3RoZXJPcHRpb25BdHRycy5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGxldCBsYWJlbCA9IG1pMThuLmN1cnJlbnQub3RoZXI7XG4gICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBvcHRpb25UeXBlO1xuICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG90aGVyT3B0aW9uQXR0cnMpO1xuICAgICAgICBvcHRpb25BdHRycy50eXBlID0gb3B0aW9uVHlwZTtcblxuICAgICAgICBsZXQgb3RoZXJWYWxBdHRycyA9IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgIGlkOiBgJHtvdGhlck9wdGlvbkF0dHJzLmlkfS12YWx1ZWAsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnb3RoZXItdmFsJ1xuICAgICAgICB9O1xuICAgICAgICBsZXQgb3RoZXJJbnB1dHMgPSBbXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvcHRpb25BdHRycyksXG4gICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ090aGVyJyksXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvdGhlclZhbEF0dHJzKVxuICAgICAgICBdO1xuICAgICAgICBsZXQgaW5wdXRMYWJlbCA9IG0oJ2xhYmVsJywgb3RoZXJJbnB1dHMsIHtmb3I6IG9wdGlvbkF0dHJzLmlkfSk7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XG4gICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBbXG4gICAgICBbJ3NlbGVjdCcsXG4gICAgICAgICgpID0+IG0ob3B0aW9uVHlwZSwgb3B0aW9ucywgZGF0YSldLFxuICAgICAgW1snY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSxcbiAgICAgICAgKCkgPT4gbSgnZGl2Jywgb3B0aW9ucywge2NsYXNzTmFtZTogdHlwZX0pXVxuICAgIF07XG5cbiAgICByZXR1cm4gZmJVdGlscy50ZW1wbGF0ZU1hcCh0ZW1wbGF0ZXMsIHR5cGUpO1xuICB9O1xuXG4gIGZiVXRpbHMuZGVmYXVsdEZpZWxkID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQge2xhYmVsLCBkZXNjcmlwdGlvbiwgc3VidHlwZSwgdHlwZSwgaWQsIGlzUHJldmlldywgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgaWYgKGlkKSB7XG4gICAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgICB9XG4gICAgICBkYXRhLmlkID0gZGF0YS5uYW1lO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgIGRhdGEudGl0bGUgPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIHR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGxldCBmaWVsZCA9IHtcbiAgICAgIGZpZWxkOiBtKHR5cGUsIGxhYmVsLCBkYXRhKSxcbiAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuICgpID0+IGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhcnJheSBvZiBzY3JpcHRzIHVzaW5nIGpRdWVyeSdzIGBnZXRTY3JpcHRgXG4gICAqIEBwYXJhbSAge0FycmF5fFN0cmluZ30gIHNjcmlwdFNjciAgICBzY3JpcHRzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCAgIG9wdGlvbmFsIHRvIGxvYWQgZm9ybVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICBhIHByb21pc2VcbiAgICovXG4gIGZiVXRpbHMuZ2V0U2NyaXB0cyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBjb25zdCAkID0galF1ZXJ5O1xuICAgIGxldCBfYXJyID0gW107XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NyaXB0U2NyKSkge1xuICAgICAgc2NyaXB0U2NyID0gW3NjcmlwdFNjcl07XG4gICAgfVxuXG4gICAgaWYgKCFmYlV0aWxzLmlzQ2FjaGVkKHNjcmlwdFNjcikpIHtcbiAgICAgIF9hcnIgPSAkLm1hcChzY3JpcHRTY3IsIHNyYyA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIGRhdGFUeXBlOiAnc2NyaXB0JyxcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICB1cmw6IChwYXRoIHx8ICcnKSArIHNyY1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpLmRvbmUoKCkgPT4gd2luZG93LmZiTG9hZGVkLmpzLnB1c2goc3JjKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfYXJyLnB1c2goJC5EZWZlcnJlZCggZGVmZXJyZWQgPT4gJCggZGVmZXJyZWQucmVzb2x2ZSApKSk7XG5cbiAgICByZXR1cm4gJC53aGVuKC4uLl9hcnIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcmVtb3RlIHJlc291cmNlIGlzIGFscmVhZHkgbG9hZGVkXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gc3JjICB1cmwgb2YgcmVtb3RlIHNjcmlwdCBvciBjc3NcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgICAgICB0eXBlICAgICAgICdqcycgb3IgJ2NzcydcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBpc0NhY2hlZFxuICAgKi9cbiAgZmJVdGlscy5pc0NhY2hlZCA9IChzcmMsIHR5cGUgPSAnanMnKSA9PiB7XG4gICAgbGV0IGlzQ2FjaGVkID0gZmFsc2U7XG4gICAgY29uc3QgY2FjaGUgPSB3aW5kb3cuZmJMb2FkZWRbdHlwZV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgICAgaXNDYWNoZWQgPSBzcmMuZXZlcnkocyA9PiBmYlV0aWxzLmluQXJyYXkocywgY2FjaGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDYWNoZWQgPSBmYlV0aWxzLmluQXJyYXkoc3JjLCBjYWNoZSk7XG4gICAgfVxuICAgIHJldHVybiBpc0NhY2hlZDtcbiAgfTtcblxuICAvKipcbiAgICogQXBwZW5kcyBzdHlsZXNoZWV0cyB0byB0aGUgaGVhZFxuICAgKiBAcGFyYW0gIHtBcnJheX0gc2NyaXB0U2NyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmJVdGlscy5nZXRTdHlsZXMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgaWYgKGZiVXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyLCAnY3NzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBwZW5kU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgd2luZG93LmZiTG9hZGVkLmNzcy5wdXNoKGhyZWYpO1xuICAgIH07XG4gICAgc2NyaXB0U2NyLmZvckVhY2goc3JjID0+IGFwcGVuZFN0eWxlKChwYXRoIHx8ICcnKSArIHNyYykpO1xuICB9O1xuXG4gIGZiVXRpbHMubG9uZ1RleHRUZW1wbGF0ZSA9IGRhdGEgPT4ge1xuICAgIGxldCB7dmFsdWUsIC4uLmF0dHJzfSA9IGRhdGE7XG4gICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgZmllbGQ6IG0oJ3RleHRhcmVhJywgdmFsdWUsIGF0dHJzKVxuICAgIH07XG4gICAgbGV0IGVkaXRvcnMgPSB7XG4gICAgICB0aW55bWNlOiB7XG4gICAgICAgIGpzOiBbJy8vY2RuLnRpbnltY2UuY29tLzQvdGlueW1jZS5taW4uanMnXSxcbiAgICAgICAgb25SZW5kZXI6IChldnQpID0+IHtcbiAgICAgICAgICBmb3IgKHRlbXBsYXRlLmZpZWxkLmlkIGluIHdpbmRvdy50aW55bWNlLmVkaXRvcnMpIHtcbiAgICAgICAgICAgIHdpbmRvdy50aW55bWNlLmVkaXRvcnNbdGVtcGxhdGUuZmllbGQuaWRdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cudGlueW1jZS5pbml0KHtcbiAgICAgICAgICAgIHRhcmdldDogdGVtcGxhdGUuZmllbGQsXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgJ2Fkdmxpc3QgYXV0b2xpbmsgbGlzdHMgbGluayBpbWFnZSBjaGFybWFwIHByaW50IHByZXZpZXcgYW5jaG9yJyxcbiAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICdpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBjb250ZXh0bWVudSBwYXN0ZSBjb2RlJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRvb2xiYXI6ICdpbnNlcnRmaWxlIHVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcXVpbGw6IHtcbiAgICAgICAganM6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuanMnXSxcbiAgICAgICAgY3NzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLnNub3cuY3NzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIG5ldyB3aW5kb3cuUXVpbGwodGVtcGxhdGUuZmllbGQsIHtcbiAgICAgICAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgICAgIFt7J2hlYWRlcic6IFsxLCAyLCBmYWxzZV19XSxcbiAgICAgICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddLFxuICAgICAgICAgICAgICAgIFsnaW1hZ2UnLCAnY29kZS1ibG9jayddXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogYXR0cnMucGxhY2Vob2xkZXIgfHwgJycsXG4gICAgICAgICAgICB0aGVtZTogJ3Nub3cnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGRhdGEudHlwZSAhPT0gJ3RleHRhcmVhJykge1xuICAgICAgdGVtcGxhdGUub25SZW5kZXIgPSBlZGl0b3JzW2RhdGEudHlwZV0ub25SZW5kZXI7XG4gICAgfVxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdxdWlsbCcpIHtcbiAgICAgIHRlbXBsYXRlLmZpZWxkID0gbSgnZGl2JywgbnVsbCwgYXR0cnMpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmaWVsZFJlbmRlcmVkJywgb25SZW5kZXIpO1xuXG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uY3NzKSB7XG4gICAgICAgICAgZmJVdGlscy5nZXRTdHlsZXMoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXS5qcyAmJiAhZmJVdGlscy5pc0NhY2hlZChlZGl0b3JzW2RhdGEudHlwZV0uanMpKSB7XG4gICAgICAgICAgZmJVdGlscy5nZXRTY3JpcHRzKGVkaXRvcnNbZGF0YS50eXBlXS5qcykuZG9uZSh0ZW1wbGF0ZS5vblJlbmRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGxhdGUub25SZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge2ZpZWxkOiB0ZW1wbGF0ZS5maWVsZCwgb25SZW5kZXJ9O1xuICB9O1xuXG4gIGZiVXRpbHMuZ2V0VGVtcGxhdGUgPSAoZmllbGREYXRhLCBpc1ByZXZpZXcgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZpZWxkRGF0YSk7XG4gICAgbGV0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBzdWJ0eXBlLFxuICAgICAgbGFiZWxQb3NpdGlvbixcbiAgICAgIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCB0ZW1wbGF0ZTtcbiAgICBsZXQgZmllbGQ7XG5cbiAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnLXByZXZpZXcnO1xuICAgIH1cbiAgICBkYXRhLmlkID0gZGF0YS5uYW1lO1xuXG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIGRhdGEudHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubXVsdGlwbGUgfHwgZGF0YS50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnKSB7XG4gICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnW10nO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnJlcXVpcmVkKSB7XG4gICAgICBkYXRhLnJlcXVpcmVkID0gbnVsbDtcbiAgICAgIGRhdGFbJ2FyaWEtcmVxdWlyZWQnXSA9ICd0cnVlJztcbiAgICB9XG5cbiAgICBsZXQgZmllbGRMYWJlbCA9IGZiVXRpbHMubWFrZUxhYmVsKGRhdGEsIGxhYmVsLCBkZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgdGVtcGxhdGVzID0gW1xuICAgICAgW1snYXV0b2NvbXBsZXRlJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgYXV0b2NvbXBsZXRlID0gZmJVdGlscy5hdXRvY29tcGxldGVUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGF1dG9jb21wbGV0ZS5maWVsZF0sXG4gICAgICAgICAgICBvblJlbmRlcjogYXV0b2NvbXBsZXRlLm9uUmVuZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1sndGV4dCcsICdwYXNzd29yZCcsICdlbWFpbCcsICdudW1iZXInLCAnZmlsZScsICdjb2xvcicsICdkYXRlJywgJ3RlbCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBtKCdpbnB1dCcsIG51bGwsIGRhdGEpXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWydidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0J10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogbSgnYnV0dG9uJywgbGFiZWwsIGRhdGEpLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gZmJVdGlscy5zZWxlY3RUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbJ2NoZWNrYm94JyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IFttKCdpbnB1dCcsIGxhYmVsLCBkYXRhKV07XG4gICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmVJbnB1dCcpIHtcbiAgICAgICAgICAgIGZpZWxkLnVuc2hpZnQoZmllbGRMYWJlbCwgJyAnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmllbGQucHVzaCgnICcsIGZpZWxkTGFiZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgIG9uUmVuZGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQua2NUb2dnbGUpO1xuICAgICAgICAgICAgICBpZiAoZGF0YS50b2dnbGUpIHtcbiAgICAgICAgICAgICAgICAkKGZpZWxkKS5rY1RvZ2dsZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1sndGV4dGFyZWEnLCAndGlueW1jZScsICdxdWlsbCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gZmJVdGlscy5sb25nVGV4dFRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGQuZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZpZWxkLm9uUmVuZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dXG4gICAgICBdO1xuXG4gICAgICB0ZW1wbGF0ZSA9IGZiVXRpbHMudGVtcGxhdGVNYXAoXG4gICAgICAgIHRlbXBsYXRlcyxcbiAgICAgICAgZGF0YS50eXBlLFxuICAgICAgICBmYlV0aWxzLmRlZmF1bHRGaWVsZChmaWVsZERhdGEpIC8vIGZhbGxiYWNrXG4gICAgICApO1xuXG4gICAgICBpZiAoZGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICBsZXQgd3JhcHBlckF0dHJzID0ge307XG4gICAgICAgIGlmIChkYXRhLmlkKSB7XG4gICAgICAgICAgd3JhcHBlckF0dHJzLmNsYXNzTmFtZSA9XG4gICAgICAgICAgYGZiLSR7ZGF0YS50eXBlfSBmb3JtLWdyb3VwIGZpZWxkLSR7ZGF0YS5pZH1gO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkID0gZmJVdGlscy5tYXJrdXAoJ2RpdicsIHRlbXBsYXRlLmZpZWxkLCB3cmFwcGVyQXR0cnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQgPSBmYlV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIHRlbXBsYXRlLm9uUmVuZGVyKTtcblxuICAgICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igb3RoZXIgb3B0aW9uLlxuICAgKiBUb2dnbGVzIHRoZSBoaWRkZW4gdGV4dCBhcmVhIGZvciBcIm90aGVyXCIgb3B0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG90aGVySWQgaWQgb2YgdGhlIFwib3RoZXJcIiBvcHRpb24gaW5wdXRcbiAgICovXG4gIGZiVXRpbHMub3RoZXJPcHRpb25DQiA9IChvdGhlcklkKSA9PiB7XG4gICAgY29uc3Qgb3RoZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG90aGVySWQpO1xuICAgIGNvbnN0IG90aGVySW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke290aGVySWR9LXZhbHVlYCk7XG5cbiAgICBpZiAob3RoZXJJbnB1dC5jaGVja2VkKSB7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHVuY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgKi9cbiAgZmJVdGlscy5jYXBpdGFsaXplID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxiXFx3L2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICB9O1xuXG5cbmZiVXRpbHMubWVyZ2UgPSAob2JqMSwgb2JqMikgPT4ge1xuICBsZXQgbWVyZ2VkT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqMSwgb2JqMik7XG4gIGZvciAobGV0IHByb3AgaW4gb2JqMikge1xuICAgIGlmIChtZXJnZWRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iajJbcHJvcF0pKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IEFycmF5LmlzQXJyYXkob2JqMVtwcm9wXSkgPyBmYlV0aWxzLnVuaXF1ZShvYmoxW3Byb3BdLmNvbmNhdChvYmoyW3Byb3BdKSkgOiBvYmoyW3Byb3BdO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqMltwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gZmJVdGlscy5tZXJnZShvYmoxW3Byb3BdLCBvYmoyW3Byb3BdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IG9iajJbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtZXJnZWRPYmo7XG59O1xuXG4vKipcbiAqIFV0aWwgdG8gcmVtb3ZlIGNvbnRlbnRzIG9mIERPTSBPYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIGVsZW1lbnQgd2l0aCBpdHMgY2hpbGRyZW4gcmVtb3ZlZFxuICovXG5mYlV0aWxzLmVtcHR5ID0gZWxlbWVudCA9PiB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5mYlV0aWxzLm5vb3AgPSAoKSA9PiBudWxsO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZmJVdGlscztcbiJdfQ==
