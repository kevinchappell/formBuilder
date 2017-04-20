/*
formBuilder - https://formbuilder.online/
Version: 2.1.0
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":19}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":20}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":21}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":22}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":23}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":24}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":25}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":26}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":27}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":28}],11:[function(require,module,exports){
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
},{"../core-js/promise":8}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],13:[function(require,module,exports){
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
},{"../core-js/object/define-property":6}],14:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
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
},{"../core-js/get-iterator":2,"../core-js/is-iterable":3}],16:[function(require,module,exports){
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
},{"../core-js/array/from":1}],17:[function(require,module,exports){
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
},{"../core-js/symbol":9,"../core-js/symbol/iterator":10}],18:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":126}],19:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":43,"../../modules/es6.array.from":110,"../../modules/es6.string.iterator":118}],20:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":108,"../modules/es6.string.iterator":118,"../modules/web.dom.iterable":123}],21:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":109,"../modules/es6.string.iterator":118,"../modules/web.dom.iterable":123}],22:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":43,"../modules/es6.map":112,"../modules/es6.object.to-string":116,"../modules/es6.string.iterator":118,"../modules/es7.map.to-json":120,"../modules/web.dom.iterable":123}],23:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":43,"../../modules/es6.object.assign":113}],24:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":43,"../../modules/es6.object.define-property":114}],25:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":43,"../../modules/es6.object.keys":115}],26:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":43,"../modules/es6.object.to-string":116,"../modules/es6.promise":117,"../modules/es6.string.iterator":118,"../modules/web.dom.iterable":123}],27:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":43,"../../modules/es6.object.to-string":116,"../../modules/es6.symbol":119,"../../modules/es7.symbol.async-iterator":121,"../../modules/es7.symbol.observable":122}],28:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":105,"../../modules/es6.string.iterator":118,"../../modules/web.dom.iterable":123}],29:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],30:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],31:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],32:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":63}],33:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":53}],34:[function(require,module,exports){
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
},{"./_to-index":97,"./_to-iobject":99,"./_to-length":100}],35:[function(require,module,exports){
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
},{"./_array-species-create":37,"./_ctx":45,"./_iobject":60,"./_to-length":100,"./_to-object":101}],36:[function(require,module,exports){
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
},{"./_is-array":62,"./_is-object":63,"./_wks":106}],37:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":36}],38:[function(require,module,exports){
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
},{"./_cof":39,"./_wks":106}],39:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],40:[function(require,module,exports){
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
},{"./_an-instance":31,"./_ctx":45,"./_defined":46,"./_descriptors":47,"./_for-of":53,"./_iter-define":66,"./_iter-step":68,"./_meta":72,"./_object-create":75,"./_object-dp":76,"./_redefine-all":88,"./_set-species":90}],41:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":33,"./_classof":38}],42:[function(require,module,exports){
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
},{"./_an-instance":31,"./_array-methods":35,"./_descriptors":47,"./_export":51,"./_fails":52,"./_for-of":53,"./_global":54,"./_hide":56,"./_is-object":63,"./_meta":72,"./_object-dp":76,"./_redefine-all":88,"./_set-to-string-tag":91}],43:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],44:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":76,"./_property-desc":87}],45:[function(require,module,exports){
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
},{"./_a-function":29}],46:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],47:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":52}],48:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":54,"./_is-object":63}],49:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],50:[function(require,module,exports){
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
},{"./_object-gops":81,"./_object-keys":84,"./_object-pie":85}],51:[function(require,module,exports){
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
},{"./_core":43,"./_ctx":45,"./_global":54,"./_hide":56}],52:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],53:[function(require,module,exports){
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
},{"./_an-object":32,"./_ctx":45,"./_is-array-iter":61,"./_iter-call":64,"./_to-length":100,"./core.get-iterator-method":107}],54:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],55:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],56:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":47,"./_object-dp":76,"./_property-desc":87}],57:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":54}],58:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":47,"./_dom-create":48,"./_fails":52}],59:[function(require,module,exports){
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
},{}],60:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":39}],61:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":69,"./_wks":106}],62:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":39}],63:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],64:[function(require,module,exports){
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
},{"./_an-object":32}],65:[function(require,module,exports){
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
},{"./_hide":56,"./_object-create":75,"./_property-desc":87,"./_set-to-string-tag":91,"./_wks":106}],66:[function(require,module,exports){
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
},{"./_export":51,"./_has":55,"./_hide":56,"./_iter-create":65,"./_iterators":69,"./_library":71,"./_object-gpo":82,"./_redefine":89,"./_set-to-string-tag":91,"./_wks":106}],67:[function(require,module,exports){
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
},{"./_wks":106}],68:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],69:[function(require,module,exports){
module.exports = {};
},{}],70:[function(require,module,exports){
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
},{"./_object-keys":84,"./_to-iobject":99}],71:[function(require,module,exports){
module.exports = true;
},{}],72:[function(require,module,exports){
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
},{"./_fails":52,"./_has":55,"./_is-object":63,"./_object-dp":76,"./_uid":103}],73:[function(require,module,exports){
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
},{"./_cof":39,"./_global":54,"./_task":96}],74:[function(require,module,exports){
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
},{"./_fails":52,"./_iobject":60,"./_object-gops":81,"./_object-keys":84,"./_object-pie":85,"./_to-object":101}],75:[function(require,module,exports){
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

},{"./_an-object":32,"./_dom-create":48,"./_enum-bug-keys":49,"./_html":57,"./_object-dps":77,"./_shared-key":92}],76:[function(require,module,exports){
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
},{"./_an-object":32,"./_descriptors":47,"./_ie8-dom-define":58,"./_to-primitive":102}],77:[function(require,module,exports){
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
},{"./_an-object":32,"./_descriptors":47,"./_object-dp":76,"./_object-keys":84}],78:[function(require,module,exports){
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
},{"./_descriptors":47,"./_has":55,"./_ie8-dom-define":58,"./_object-pie":85,"./_property-desc":87,"./_to-iobject":99,"./_to-primitive":102}],79:[function(require,module,exports){
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

},{"./_object-gopn":80,"./_to-iobject":99}],80:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":49,"./_object-keys-internal":83}],81:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],82:[function(require,module,exports){
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
},{"./_has":55,"./_shared-key":92,"./_to-object":101}],83:[function(require,module,exports){
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
},{"./_array-includes":34,"./_has":55,"./_shared-key":92,"./_to-iobject":99}],84:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":49,"./_object-keys-internal":83}],85:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],86:[function(require,module,exports){
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
},{"./_core":43,"./_export":51,"./_fails":52}],87:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],88:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":56}],89:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":56}],90:[function(require,module,exports){
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
},{"./_core":43,"./_descriptors":47,"./_global":54,"./_object-dp":76,"./_wks":106}],91:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":55,"./_object-dp":76,"./_wks":106}],92:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":93,"./_uid":103}],93:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":54}],94:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":29,"./_an-object":32,"./_wks":106}],95:[function(require,module,exports){
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
},{"./_defined":46,"./_to-integer":98}],96:[function(require,module,exports){
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
},{"./_cof":39,"./_ctx":45,"./_dom-create":48,"./_global":54,"./_html":57,"./_invoke":59}],97:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":98}],98:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],99:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":46,"./_iobject":60}],100:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":98}],101:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":46}],102:[function(require,module,exports){
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
},{"./_is-object":63}],103:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],104:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":43,"./_global":54,"./_library":71,"./_object-dp":76,"./_wks-ext":105}],105:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":106}],106:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":54,"./_shared":93,"./_uid":103}],107:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":38,"./_core":43,"./_iterators":69,"./_wks":106}],108:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":32,"./_core":43,"./core.get-iterator-method":107}],109:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":38,"./_core":43,"./_iterators":69,"./_wks":106}],110:[function(require,module,exports){
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

},{"./_create-property":44,"./_ctx":45,"./_export":51,"./_is-array-iter":61,"./_iter-call":64,"./_iter-detect":67,"./_to-length":100,"./_to-object":101,"./core.get-iterator-method":107}],111:[function(require,module,exports){
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
},{"./_add-to-unscopables":30,"./_iter-define":66,"./_iter-step":68,"./_iterators":69,"./_to-iobject":99}],112:[function(require,module,exports){
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
},{"./_collection":42,"./_collection-strong":40}],113:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":51,"./_object-assign":74}],114:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":47,"./_export":51,"./_object-dp":76}],115:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":84,"./_object-sap":86,"./_to-object":101}],116:[function(require,module,exports){

},{}],117:[function(require,module,exports){
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
},{"./_a-function":29,"./_an-instance":31,"./_classof":38,"./_core":43,"./_ctx":45,"./_export":51,"./_for-of":53,"./_global":54,"./_is-object":63,"./_iter-detect":67,"./_library":71,"./_microtask":73,"./_redefine-all":88,"./_set-species":90,"./_set-to-string-tag":91,"./_species-constructor":94,"./_task":96,"./_wks":106}],118:[function(require,module,exports){
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
},{"./_iter-define":66,"./_string-at":95}],119:[function(require,module,exports){
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
},{"./_an-object":32,"./_descriptors":47,"./_enum-keys":50,"./_export":51,"./_fails":52,"./_global":54,"./_has":55,"./_hide":56,"./_is-array":62,"./_keyof":70,"./_library":71,"./_meta":72,"./_object-create":75,"./_object-dp":76,"./_object-gopd":78,"./_object-gopn":80,"./_object-gopn-ext":79,"./_object-gops":81,"./_object-keys":84,"./_object-pie":85,"./_property-desc":87,"./_redefine":89,"./_set-to-string-tag":91,"./_shared":93,"./_to-iobject":99,"./_to-primitive":102,"./_uid":103,"./_wks":106,"./_wks-define":104,"./_wks-ext":105}],120:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":41,"./_export":51}],121:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":104}],122:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":104}],123:[function(require,module,exports){
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
},{"./_global":54,"./_hide":56,"./_iterators":69,"./_wks":106,"./es6.array.iterator":111}],124:[function(require,module,exports){
/*!
 * mi18n - https://github.com/Draggable/mi18n
 * Version: 0.3.3
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
 */
module.exports=function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="dist/",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(57),i=r(o),u=e(53),c=r(u),f=e(56),a=r(f),s=e(48),l=r(s),p=e(54),h=r(p),v=e(55),y=r(v),d=function(){function t(){(0,h["default"])(this,t);var n={extension:".lang",location:"assets/lang/",langs:["en-US"],locale:"en-US",preloaded:{}},e=this;e.init=function(t){return e.config=(0,l["default"])({},n,t),e.langs=(0,l["default"])({},e.config.preloaded),e.locale=e.config.locale||e.config.langs[0],e.setCurrent(e.locale)}}return(0,y["default"])(t,[{key:"getValue",value:function(t){return this.current&&this.current[t]||t}},{key:"makeSafe",value:function(t){var n={"{":"\\{","}":"\\}","|":"\\|"};return t=t.replace(/\{|\}|\|/g,function(t){return n[t]}),new RegExp(t,"g")}},{key:"put",value:function(t,n){return this.current[t]=n}},{key:"get",value:function(t,n){var e=this,r=this.getValue(t),o=r.match(/\{[^\}]+?\}/g),i=void 0;if(n&&o)if("object"===("undefined"==typeof n?"undefined":(0,a["default"])(n)))for(var u=0;u<o.length;u++)i=o[u].substring(1,o[u].length-1),r=r.replace(e.makeSafe(o[u]),n[i]||"");else r=r.replace(/\{[^\}]+?\}/g,n);return r}},{key:"fromFile",value:function(t){for(var n,e=t.split("\n"),r={},o=0;o<e.length;o++)if(n=e[o].match(/^(.+?) *?= *?([^\n]+)/)){var i=n[2].replace(/^\s+|\s+$/,"");r[n[1]]=i}return r}},{key:"processFile",value:function(t){var n=t.replace(/\n\n/g,"\n");return this.fromFile(n)}},{key:"loadLang",value:function(t){var n=this;return new window.Promise(function(e,r){n.langs[t]?e(n.langs[t]):!function(){var o=new XMLHttpRequest,i=n.config.location+t+n.config.extension;o.open("GET",i,!0),o.onload=function(){if(this.status<=304){var i=n.processFile(o.responseText);n.langs[t]=i,e(i)}else r({status:this.status,statusText:o.statusText})},o.onerror=function(){r({status:this.status,statusText:o.statusText})},o.send()}()})}},{key:"setCurrent",value:function(){function t(t){return n.apply(this,arguments)}var n=(0,c["default"])(i["default"].mark(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US";return i["default"].wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadLang(t);case 2:return this.locale=t,this.current=this.langs[t],n.abrupt("return",this.current);case 5:case"end":return n.stop()}},e,this)}));return t}()},{key:"getLangs",get:function(){return this.config.langs}}]),t}();n["default"]=new d},function(t,n,e){var r=e(28)("wks"),o=e(21),i=e(2).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(6),o=e(35),i=e(30),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(c){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(5),o=e(19);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(36),o=e(23);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(2),o=e(3),i=e(16),u=e(8),c="prototype",f=function(t,n,e){var a,s,l,p=t&f.F,h=t&f.G,v=t&f.S,y=t&f.P,d=t&f.B,g=t&f.W,m=h?o:o[n]||(o[n]={}),w=m[c],x=h?r:v?r[n]:(r[n]||{})[c];h&&(e=n);for(a in e)s=!p&&x&&void 0!==x[a],s&&a in m||(l=s?x[a]:e[a],m[a]=h&&"function"!=typeof x[a]?e[a]:d&&s?i(l,r):g&&x[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((m.virtual||(m.virtual={}))[a]=l,t&f.R&&w&&!w[a]&&u(w,a,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n,e){var r=e(40),o=e(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(22);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=!0},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(5).f,o=e(7),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(13),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(28)("keys"),o=e(21);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(2),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(13);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2),o=e(3),i=e(17),u=e(32),c=e(5).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(1)},function(t,n,e){var r=e(10),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){t.exports=e(2).document&&document.documentElement},function(t,n,e){t.exports=!e(4)&&!e(12)(function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(10);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(17),o=e(11),i=e(41),u=e(8),c=e(7),f=e(14),a=e(72),s=e(20),l=e(82),p=e(1)("iterator"),h=!([].keys&&"next"in[].keys()),v="@@iterator",y="keys",d="values",g=function(){return this};t.exports=function(t,n,e,m,w,x,b){a(e,n,m);var _,O,j,S=function(t){if(!h&&t in k)return k[t];switch(t){case y:return function(){return new e(this,t)};case d:return function(){return new e(this,t)}}return function(){return new e(this,t)}},E=n+" Iterator",T=w==d,P=!1,k=t.prototype,L=k[p]||k[v]||w&&k[w],M=L||S(w),F=w?T?S("entries"):M:void 0,N="Array"==n?k.entries||L:L;if(N&&(j=l(N.call(new t)),j!==Object.prototype&&(s(j,E,!0),r||c(j,p)||u(j,p,g))),T&&L&&L.name!==d&&(P=!0,M=function(){return L.call(this)}),r&&!b||!h&&!P&&k[p]||u(k,p,M),f[n]=M,f[E]=g,w)if(_={values:T?M:S(d),keys:x?M:S(y),entries:F},b)for(O in _)O in k||i(k,O,_[O]);else o(o.P+o.F*(h||P),n,_);return _}},function(t,n,e){var r=e(6),o=e(79),i=e(25),u=e(27)("IE_PROTO"),c=function(){},f="prototype",a=function(){var t,n=e(24)("iframe"),r=i.length,o="<",u=">";for(n.style.display="none",e(34).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),a=t.F;r--;)delete a[f][i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c[f]=r(t),e=new c,c[f]=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(40),o=e(25).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(7),o=e(9),i=e(65)(!1),u=e(27)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){t.exports=e(8)},function(t,n,e){var r,o,i,u=e(16),c=e(68),f=e(34),a=e(24),s=e(2),l=s.process,p=s.setImmediate,h=s.clearImmediate,v=s.MessageChannel,y=0,d={},g="onreadystatechange",m=function(){var t=+this;if(d.hasOwnProperty(t)){var n=d[t];delete d[t],n()}},w=function(t){m.call(t.data)};p&&h||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return d[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},h=function(t){delete d[t]},"process"==e(10)(l)?r=function(t){l.nextTick(u(m,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=w,r=u(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",w,!1)):r=g in a("script")?function(t){f.appendChild(a("script"))[g]=function(){f.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:p,clear:h}},function(t,n,e){var r=e(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(23);t.exports=function(t){return Object(r(t))}},function(t,n){},function(t,n,e){"use strict";var r=e(86)(!0);e(37)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){e(89);for(var r=e(2),o=e(8),i=e(14),u=e(1)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;f<5;f++){var a=c[f],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,n,e){t.exports={"default":e(58),__esModule:!0}},function(t,n,e){t.exports={"default":e(59),__esModule:!0}},function(t,n,e){t.exports={"default":e(60),__esModule:!0}},function(t,n,e){t.exports={"default":e(61),__esModule:!0}},function(t,n,e){t.exports={"default":e(62),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(50),i=r(o);n["default"]=function(t){return function(){var n=t.apply(this,arguments);return new i["default"](function(t,e){function r(o,u){try{var c=n[o](u),f=c.value}catch(a){return void e(a)}return c.done?void t(f):i["default"].resolve(f).then(function(t){return r("next",t)},function(t){return r("throw",t)})}return r("next")})}}},function(t,n){"use strict";n.__esModule=!0,n["default"]=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(49),i=r(o);n["default"]=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(52),i=r(o),u=e(51),c=r(u),f="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":typeof t};n["default"]="function"==typeof c["default"]&&"symbol"===f(i["default"])?function(t){return"undefined"==typeof t?"undefined":f(t)}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":"undefined"==typeof t?"undefined":f(t)}},function(t,n,e){t.exports=e(97)},function(t,n,e){e(90),t.exports=e(3).Object.assign},function(t,n,e){e(91);var r=e(3).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){e(45),e(46),e(47),e(92),t.exports=e(3).Promise},function(t,n,e){e(93),e(45),e(94),e(95),t.exports=e(3).Symbol},function(t,n,e){e(46),e(47),t.exports=e(32).f("iterator")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(9),o=e(43),i=e(87);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if(c=f[s++],c!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(15),o=e(26),i=e(18);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),f=i.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},function(t,n,e){var r=e(16),o=e(71),i=e(69),u=e(6),c=e(43),f=e(88),a={},s={},n=t.exports=function(t,n,e,l,p){var h,v,y,d,g=p?function(){return t}:f(t),m=r(e,l,n?2:1),w=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(h=c(t.length);h>w;w++)if(d=n?m(u(v=t[w])[0],v[1]):m(t[w]),d===a||d===s)return d}else for(y=g.call(t);!(v=y.next()).done;)if(d=o(y,m,v.value,n),d===a||d===s)return d};n.BREAK=a,n.RETURN=s},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(14),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(10);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(6);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(i){var u=t["return"];throw void 0!==u&&r(u.call(t)),i}}},function(t,n,e){"use strict";var r=e(38),o=e(19),i=e(20),u={};e(8)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(u){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(c){}return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(15),o=e(9);t.exports=function(t,n){for(var e,i=o(t),u=r(i),c=u.length,f=0;c>f;)if(i[e=u[f++]]===n)return e}},function(t,n,e){var r=e(21)("meta"),o=e(13),i=e(7),u=e(5).f,c=0,f=Object.isExtensible||function(){return!0},a=!e(12)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[r].w},h=function(t){return a&&v.NEED&&f(t)&&!i(t,r)&&s(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,n,e){var r=e(2),o=e(42).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,f="process"==e(10)(u);t.exports=function(){var t,n,e,a=function(){var r,o;for(f&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(i){throw t?e():n=void 0,i}}n=void 0,r&&r.enter()};if(f)e=function(){u.nextTick(a)};else if(i){var s=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),e=function(){l.data=s=!s}}else if(c&&c.resolve){var p=c.resolve();e=function(){p.then(a)}}else e=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){"use strict";var r=e(15),o=e(26),i=e(18),u=e(44),c=e(36),f=Object.assign;t.exports=!f||e(12)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=u(t),f=arguments.length,a=1,s=o.f,l=i.f;f>a;)for(var p,h=c(arguments[a++]),v=s?r(h).concat(s(h)):r(h),y=v.length,d=0;y>d;)l.call(h,p=v[d++])&&(e[p]=h[p]);return e}:f},function(t,n,e){var r=e(5),o=e(6),i=e(15);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(18),o=e(19),i=e(9),u=e(30),c=e(7),f=e(35),a=Object.getOwnPropertyDescriptor;n.f=e(4)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(e){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(9),o=e(39).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(n){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,n,e){var r=e(7),o=e(44),i=e(27)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(8);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(2),o=e(3),i=e(5),u=e(4),c=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(6),o=e(22),i=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r=e(29),o=e(23);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n,e){var r=e(29),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(33),o=e(1)("iterator"),i=e(14);t.exports=e(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){"use strict";var r=e(63),o=e(74),i=e(14),u=e(9);t.exports=e(37)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(11);r(r.S+r.F,"Object",{assign:e(78)})},function(t,n,e){var r=e(11);r(r.S+r.F*!e(4),"Object",{defineProperty:e(5).f})},function(t,n,e){"use strict";var r,o,i,u=e(17),c=e(2),f=e(16),a=e(33),s=e(11),l=e(13),p=e(22),h=e(64),v=e(67),y=e(85),d=e(42).set,g=e(77)(),m="Promise",w=c.TypeError,x=c.process,b=c[m],x=c.process,_="process"==a(x),O=function(){},j=!!function(){try{var t=b.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(O,O)};return(_||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof n}catch(r){}}(),S=function(t,n){return t===n||t===b&&n===i},E=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},T=function(t){return S(b,t)?new P(t):new o(t)},P=o=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw w("Bad Promise constructor");n=t,e=r}),this.resolve=p(n),this.reject=p(e)},k=function(t){try{t()}catch(n){return{error:n}}},L=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0,u=function(n){var e,i,u=o?n.ok:n.fail,c=n.resolve,f=n.reject,a=n.domain;try{u?(o||(2==t._h&&N(t),t._h=1),u===!0?e=r:(a&&a.enter(),e=u(r),a&&a.exit()),e===n.promise?f(w("Promise-chain cycle")):(i=E(e))?i.call(e,c,f):c(e)):f(r)}catch(s){f(s)}};e.length>i;)u(e[i++]);t._c=[],t._n=!1,n&&!t._h&&M(t)})}},M=function(t){d.call(c,function(){var n,e,r,o=t._v;if(F(t)&&(n=k(function(){_?x.emit("unhandledRejection",o,t):(e=c.onunhandledrejection)?e({promise:t,reason:o}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=_||F(t)?2:1),t._a=void 0,n)throw n.error})},F=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!F(n.promise))return!1;return!0},N=function(t){d.call(c,function(){var n;_?x.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})})},A=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),L(n,!0))},R=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw w("Promise can't be resolved itself");(n=E(t))?g(function(){var r={_w:e,_d:!1};try{n.call(t,f(R,r,1),f(A,r,1))}catch(o){A.call(r,o)}}):(e._v=t,e._s=1,L(e,!1))}catch(r){A.call({_w:e,_d:!1},r)}}};j||(b=function(t){h(this,b,m,"_h"),p(t),r.call(this);try{t(f(R,this,1),f(A,this,1))}catch(n){A.call(this,n)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(83)(b.prototype,{then:function(t,n){var e=T(y(this,b));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=_?x.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&L(this,!1),e.promise},"catch":function(t){return this.then(void 0,t)}}),P=function(){var t=new r;this.promise=t,this.resolve=f(R,t,1),this.reject=f(A,t,1)}),s(s.G+s.W+s.F*!j,{Promise:b}),e(20)(b,m),e(84)(m),i=e(3)[m],s(s.S+s.F*!j,m,{reject:function(t){var n=T(this),e=n.reject;return e(t),n.promise}}),s(s.S+s.F*(u||!j),m,{resolve:function(t){if(t instanceof b&&S(t.constructor,this))return t;var n=T(this),e=n.resolve;return e(t),n.promise}}),s(s.S+s.F*!(j&&e(73)(function(t){b.all(t)["catch"](O)})),m,{all:function(t){var n=this,e=T(n),r=e.resolve,o=e.reject,i=k(function(){var e=[],i=0,u=1;v(t,!1,function(t){var c=i++,f=!1;e.push(void 0),u++,n.resolve(t).then(function(t){f||(f=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i&&o(i.error),e.promise},race:function(t){var n=this,e=T(n),r=e.reject,o=k(function(){v(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o&&r(o.error),e.promise}})},function(t,n,e){"use strict";var r=e(2),o=e(7),i=e(4),u=e(11),c=e(41),f=e(76).KEY,a=e(12),s=e(28),l=e(20),p=e(21),h=e(1),v=e(32),y=e(31),d=e(75),g=e(66),m=e(70),w=e(6),x=e(9),b=e(30),_=e(19),O=e(38),j=e(81),S=e(80),E=e(5),T=e(15),P=S.f,k=E.f,L=j.f,M=r.Symbol,F=r.JSON,N=F&&F.stringify,A="prototype",R=h("_hidden"),I=h("toPrimitive"),C={}.propertyIsEnumerable,G=s("symbol-registry"),W=s("symbols"),U=s("op-symbols"),D=Object[A],K="function"==typeof M,B=r.QObject,J=!B||!B[A]||!B[A].findChild,Y=i&&a(function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=P(D,n);r&&delete D[n],k(t,n,e),r&&t!==D&&k(D,n,r)}:k,q=function(t){var n=W[t]=O(M[A]);return n._k=t,n},z=K&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},H=function(t,n,e){return t===D&&H(U,n,e),w(t),n=b(n,!0),w(e),o(W,n)?(e.enumerable?(o(t,R)&&t[R][n]&&(t[R][n]=!1),e=O(e,{enumerable:_(0,!1)})):(o(t,R)||k(t,R,_(1,{})),t[R][n]=!0),Y(t,n,e)):k(t,n,e)},V=function(t,n){w(t);for(var e,r=g(n=x(n)),o=0,i=r.length;i>o;)H(t,e=r[o++],n[e]);return t},Q=function(t,n){return void 0===n?O(t):V(O(t),n)},X=function(t){var n=C.call(this,t=b(t,!0));return!(this===D&&o(W,t)&&!o(U,t))&&(!(n||!o(this,t)||!o(W,t)||o(this,R)&&this[R][t])||n)},$=function(t,n){if(t=x(t),n=b(n,!0),t!==D||!o(W,n)||o(U,n)){var e=P(t,n);return!e||!o(W,n)||o(t,R)&&t[R][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=L(x(t)),r=[],i=0;e.length>i;)o(W,n=e[i++])||n==R||n==f||r.push(n);return r},tt=function(t){for(var n,e=t===D,r=L(e?U:x(t)),i=[],u=0;r.length>u;)!o(W,n=r[u++])||e&&!o(D,n)||i.push(W[n]);return i};K||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===D&&n.call(U,e),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),Y(this,t,_(1,e))};return i&&J&&Y(D,t,{configurable:!0,set:n}),q(t)},c(M[A],"toString",function(){return this._k}),S.f=$,E.f=H,e(39).f=j.f=Z,e(18).f=X,e(26).f=tt,i&&!e(17)&&c(D,"propertyIsEnumerable",X,!0),v.f=function(t){return q(h(t))}),u(u.G+u.W+u.F*!K,{Symbol:M});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)h(nt[et++]);for(var nt=T(h.store),et=0;nt.length>et;)y(nt[et++]);u(u.S+u.F*!K,"Symbol",{"for":function(t){return o(G,t+="")?G[t]:G[t]=M(t)},keyFor:function(t){if(z(t))return d(G,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!K,"Object",{create:Q,defineProperty:H,defineProperties:V,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),F&&u(u.S+u.F*(!K||a(function(){var t=M();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!z(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&m(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!z(n))return n}),r[1]=n,N.apply(F,r)}}}),M[A][I]||e(8)(M[A],I,M[A].valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(31)("asyncIterator")},function(t,n,e){e(31)("observable")},function(t,n){function e(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(s===setTimeout)return setTimeout(t,0);if((s===e||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(n){try{return s.call(null,t,0)}catch(n){return s.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(n){try{return l.call(null,t)}catch(n){return l.call(this,t)}}}function u(){y&&h&&(y=!1,h.length?v=h.concat(v):d=-1,v.length&&c())}function c(){if(!y){var t=o(u);y=!0;for(var n=v.length;n;){for(h=v,v=[];++d<n;)h&&h[d].run();d=-1,n=v.length}h=null,y=!1,i(t)}}function f(t,n){this.fun=t,this.array=n}function a(){}var s,l,p=t.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:e}catch(t){s=e}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var h,v=[],y=!1,d=-1;p.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];v.push(new f(t,n)),1!==v.length||y||o(c)},f.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=a,p.addListener=a,p.once=a,p.off=a,p.removeListener=a,p.removeAllListeners=a,p.emit=a,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,n,e){(function(n){var r="object"==typeof n?n:"object"==typeof window?window:"object"==typeof self?self:this,o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=e(98),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(u){r.regeneratorRuntime=void 0}}).call(n,function(){return this}())},function(t,n,e){(function(n,e){!function(n){"use strict";function r(t,n,e,r){var o=Object.create((n||i).prototype),u=new v(r||[]);return o._invoke=l(t,e,u),o}function o(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}function i(){}function u(){}function c(){}function f(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function a(t){this.arg=t}function s(t){function n(e,r,i,u){var c=o(t[e],t,r);if("throw"!==c.type){var f=c.arg,s=f.value;return s instanceof a?Promise.resolve(s.arg).then(function(t){n("next",t,i,u)},function(t){n("throw",t,i,u)}):Promise.resolve(s).then(function(t){f.value=t,i(f)},u)}u(c.arg)}function r(t,e){function r(){return new Promise(function(r,o){n(t,e,r,o)})}return i=i?i.then(r,r):r()}"object"==typeof e&&e.domain&&(n=e.domain.bind(n));var i;this._invoke=r}function l(t,n,e){var r=j;return function(i,u){if(r===E)throw new Error("Generator is already running");if(r===T){if("throw"===i)throw u;return d()}for(;;){var c=e.delegate;if(c){if("return"===i||"throw"===i&&c.iterator[i]===g){e.delegate=null;var f=c.iterator["return"];if(f){var a=o(f,c.iterator,u);if("throw"===a.type){i="throw",u=a.arg;continue}}if("return"===i)continue}var a=o(c.iterator[i],c.iterator,u);if("throw"===a.type){e.delegate=null,i="throw",u=a.arg;continue}i="next",u=g;var s=a.arg;if(!s.done)return r=S,s;e[c.resultName]=s.value,e.next=c.nextLoc,e.delegate=null}if("next"===i)e.sent=e._sent=u;else if("throw"===i){if(r===j)throw r=T,u;e.dispatchException(u)&&(i="next",u=g)}else"return"===i&&e.abrupt("return",u);r=E;var a=o(t,n,e);if("normal"===a.type){r=e.done?T:S;var s={value:a.arg,done:e.done};if(a.arg!==P)return s;e.delegate&&"next"===i&&(u=g)}else"throw"===a.type&&(r=T,i="throw",u=a.arg)}}}function p(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function h(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function y(t){if(t){var n=t[x];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function o(){for(;++e<t.length;)if(m.call(t,e))return o.value=t[e],o.done=!1,o;return o.value=g,o.done=!0,o};return r.next=r}}return{next:d}}function d(){return{value:g,done:!0}}var g,m=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",b=w.toStringTag||"@@toStringTag",_="object"==typeof t,O=n.regeneratorRuntime;if(O)return void(_&&(t.exports=O));O=n.regeneratorRuntime=_?t.exports:{},O.wrap=r;var j="suspendedStart",S="suspendedYield",E="executing",T="completed",P={},k=c.prototype=i.prototype;u.prototype=k.constructor=c,c.constructor=u,c[b]=u.displayName="GeneratorFunction",O.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===u||"GeneratorFunction"===(n.displayName||n.name))},O.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(k),t},O.awrap=function(t){return new a(t)},f(s.prototype),O.async=function(t,n,e,o){var i=new s(r(t,n,e,o));return O.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},f(k),k[x]=function(){return this},k[b]="Generator",k.toString=function(){return"[object Generator]"},O.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,
r}},O.values=y,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.tryEntries.forEach(h),!t)for(var n in this)"t"===n.charAt(0)&&m.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function n(n,r){return i.type="throw",i.arg=t,e.next=n,!!r}if(this.done)throw t;for(var e=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?this.next=o.finallyLoc:this.complete(i),P},complete:function(t,n){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&n&&(this.next=n)},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),h(e),P}},"catch":function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;h(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:y(t),resultName:n,nextLoc:e},P}}}("object"==typeof n?n:"object"==typeof window?window:"object"==typeof self?self:this)}).call(n,function(){return this}(),e(96))}]);
},{}],125:[function(require,module,exports){
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

},{}],126:[function(require,module,exports){
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

},{"./runtime":127}],127:[function(require,module,exports){
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

},{"_process":125}],128:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = exports.defaultOptions = {
  controlPosition: 'right',
  append: false,
  controlOrder: ['autocomplete', 'button', 'checkbox', 'checkbox-group', 'date', 'file', 'header', 'hidden', 'paragraph', 'number', 'radio-group', 'select', 'text', 'textarea'],
  dataType: 'json',
  // Array of fields to disable
  disableFields: [],
  disabledAttrs: [],
  disabledActionButtons: [],
  editOnAdd: false,
  // Uneditable fields or other content you would like to appear
  // before and after regular fields:
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
  fields: [],
  fieldRemoveWarn: false,
  inputSets: [],
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
  onSave: function onSave(evt, formData) {
    return null;
  },
  onClearAll: function onClearAll() {
    return null;
  },
  prepend: false,
  sortableControls: false,
  stickyControls: {
    enable: true,
    offset: {
      top: 5,
      bottom: 'auto',
      right: 'auto'
    }
  },
  templates: {},
  showActionButtons: true,
  typeUserDisabledAttrs: {},
  typeUserAttrs: {},
  typeUserEvents: {},
  prefix: 'form-builder-'
};

var defaultI18n = exports.defaultI18n = {
  location: 'https://formbuilder.online/assets/lang/',
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

},{}],129:[function(require,module,exports){
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

},{"babel-runtime/helpers/classCallCheck":12}],130:[function(require,module,exports){
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

},{"babel-runtime/helpers/classCallCheck":12}],131:[function(require,module,exports){
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

},{}],132:[function(require,module,exports){
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

var _mi18n = require('mi18n');

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
        icon = _frmbFields$i.icon,
        field = (0, _objectWithoutProperties3.default)(_frmbFields$i, ['attrs', 'icon']);

    var controlLabel = field.label;
    var iconClassName = !icon ? 'icon-' + (attrs.name || attrs.type) : '';
    if (icon) {
      controlLabel = '<span class="control-icon">' + icon + '</span>' + field.label;
    }
    var newFieldControl = m('li', m('span', controlLabel), { className: iconClassName + ' input-control input-control-' + i });

    _data.availablefields[attrs.type] = frmbFields[i];
    newFieldControl.dataset.type = attrs.type;
    d.controls.appendChild(newFieldControl);
  });

  if (opts.inputSets.length) {
    $('<li/>', { 'class': 'fb-separator' }).html('<hr>').appendTo($cbUL);
    opts.inputSets.forEach(function (set, i) {
      set.name = set.name || _utils2.default.makeClassName(set.label);
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
    cancel: 'input, select, textarea, .disabled-field, .form-elements, .btn, button',
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
    var $control = $(evt.target).closest('li');
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
      var _aFields$$field$0$dat = _data.availablefields[$field[0].dataset.type],
          attrs = _aFields$$field$0$dat.attrs,
          label = _aFields$$field$0$dat.label;

      if (_data.availablefields[$field[0].dataset.type]) {
        field = (0, _assign2.default)({}, attrs);
        field.label = label;
      } else {
        // is dataType XML
        var _attrs = $field[0].attributes;
        if (!isNew) {
          field.values = $field.children().map(function (index, elem) {
            return {
              label: $(elem).text(),
              value: $(elem).attr('value'),
              selected: Boolean($(elem).attr('selected'))
            };
          });
        }

        for (var i = _attrs.length - 1; i >= 0; i--) {
          field[_attrs[i].name] = _attrs[i].value;
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
        var fieldData = _utils2.default.trimObj(formData[i]);
        prepFieldVars(fieldData);
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

  var defaultFieldAttrs = function defaultFieldAttrs(type) {
    var defaultAttrs = ['required', 'label', 'description', 'placeholder', 'className', 'name', 'access', 'value'];
    var noValFields = ['header', 'paragraph', 'file', 'autocomplete'].concat(d.optionFields);
    var valueField = !_utils2.default.inArray(type, noValFields);

    var typeAttrsMap = {
      autocomplete: defaultAttrs.concat(['options']),
      button: ['label', 'subtype', 'style', 'className', 'name', 'value', 'access'],
      checkbox: ['required', 'label', 'description', 'toggle', 'inline', 'className', 'name', 'access', 'other', 'options'],
      text: defaultAttrs.concat(['subtype', 'maxlength']),
      date: defaultAttrs,
      file: defaultAttrs.concat(['multiple']),
      header: ['label', 'subtype', 'className', 'access'],
      hidden: ['name', 'value', 'access'],
      paragraph: ['label', 'subtype', 'className', 'access'],
      number: defaultAttrs.concat(['min', 'max', 'step']),
      select: defaultAttrs.concat(['multiple', 'options']),
      textarea: defaultAttrs.concat(['subtype', 'maxlength', 'rows'])

    };

    typeAttrsMap['checkbox-group'] = typeAttrsMap.checkbox;
    typeAttrsMap['radio-group'] = typeAttrsMap.checkbox;

    var typeAttrs = typeAttrsMap[type];

    if (type === 'radio-group') {
      _utils2.default.remove('toggle', typeAttrs);
    }

    // Help Text / Description Field
    if (_utils2.default.inArray(type, ['header', 'paragraph', 'button'])) {
      _utils2.default.remove('description', typeAttrs);
    }

    if (!valueField) {
      _utils2.default.remove('value', typeAttrs);
    }

    return typeAttrs || defaultAttrs;
  };

  /**
   * Build the editable properties for the field
   * @param  {object} values configuration object for advanced fields
   * @return {String}        markup for advanced fields
   */
  var advFields = function advFields(values) {
    var advFields = [];
    var fieldAttrs = defaultFieldAttrs(values.type);
    var advFieldMap = {
      required: function required() {
        return requiredField(values);
      },
      toggle: function toggle() {
        return boolAttribute('toggle', values, { first: i18n.toggle });
      },
      inline: function inline() {
        var labels = {
          first: i18n.inline,
          second: _mi18n2.default.get('inlineDesc', values.type.replace('-group', ''))
        };

        return boolAttribute('inline', values, labels);
      },
      label: function label() {
        return textAttribute('label', values);
      },
      description: function description() {
        return textAttribute('description', values);
      },
      subtype: function subtype() {
        return selectAttribute('subtype', values, subtypes[values.type]);
      },
      style: function style() {
        return btnStyles(values.style);
      },
      placeholder: function placeholder() {
        return textAttribute('placeholder', values);
      },
      rows: function rows() {
        return numberAttribute('rows', values);
      },
      className: function className() {
        return textAttribute('className', values);
      },
      name: function name() {
        return textAttribute('name', values);
      },
      value: function value() {
        return textAttribute('value', values);
      },
      maxlength: function maxlength() {
        return numberAttribute('maxlength', values);
      },
      access: function access() {
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

        return boolAttribute('access', values, accessLabels);
      },
      other: function other() {
        return boolAttribute('other', values, { first: i18n.enableOther, second: i18n.enableOtherMsg });
      },
      options: function options() {
        return fieldOptions(values);
      }
    };
    var key = void 0;
    var roles = values.role !== undefined ? values.role.split(',') : [];
    var numAttrs = ['min', 'max', 'step'];

    if (values.type === 'number') {
      numAttrs.forEach(function (numAttr) {
        advFieldMap[numAttr] = function () {
          return numberAttribute(numAttr, values);
        };
      });
    }

    if (values.type === 'file') {
      advFieldMap['multiple'] = function () {
        var labels = {
          first: i18n.multipleFiles,
          second: i18n.allowMultipleFiles
        };
        return boolAttribute('multiple', values, labels);
      };
    }

    if (values.type === 'select') {
      advFieldMap['multiple'] = function () {
        return boolAttribute('multiple', values, { first: ' ', second: i18n.selectionsMessage });
      };
    }

    (0, _keys2.default)(fieldAttrs).forEach(function (index) {
      var attr = fieldAttrs[index];
      var useDefaultAttr = [true];

      if (opts.typeUserDisabledAttrs[values.type]) {
        var typeDisabledAttrs = opts.typeUserDisabledAttrs[values.type];
        useDefaultAttr.push(!_utils2.default.inArray(attr, typeDisabledAttrs));
      }

      if (opts.typeUserAttrs[values.type]) {
        var userAttrs = (0, _keys2.default)(opts.typeUserAttrs[values.type]);
        useDefaultAttr.push(!_utils2.default.inArray(attr, userAttrs));
      }

      if (_utils2.default.inArray(attr, opts.disabledAttrs)) {
        useDefaultAttr.push(false);
      }

      if (useDefaultAttr.every(function (use) {
        return use === true;
      })) {
        advFields.push(advFieldMap[attr]());
      }
    });

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
    var checked = values[name] ? 'checked' : '';
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

    if (attribute === 'label') {
      if (_utils2.default.inArray(values.type, textArea)) {
        attrLabel = i18n.content;
      } else {
        attrVal = _utils2.default.parsedHtml(values[attribute]);
      }
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

    liContents += '<label class="field-label">' + _utils2.default.parsedHtml(label) + '</label>';
    var requiredDisplay = values.required ? 'style="display:inline"' : '';
    liContents += '<span class="required-asterisk" ' + requiredDisplay + '> *</span>';

    var descAttrs = {
      className: 'tooltip-element',
      tooltip: values.description,
      style: values.description ? 'display:inline-block' : 'display:none'
    };
    liContents += '<span ' + _utils2.default.attrString(descAttrs) + '>?</span>';

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

  $stage.on('change', '.prev-holder input, .prev-holder select, .prev-holder textarea', function (e) {
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

},{"./config":128,"./data":129,"./dom":130,"./events":131,"./helpers":133,"./polyfills.js":134,"./utils":135,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":8,"babel-runtime/helpers/asyncToGenerator":11,"babel-runtime/helpers/objectWithoutProperties":14,"babel-runtime/helpers/toConsumableArray":16,"babel-runtime/regenerator":18,"mi18n":124}],133:[function(require,module,exports){
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

var _mi18n = require('mi18n');

var _mi18n2 = _interopRequireDefault(_mi18n);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        xml: function xml() {
          return _this.xmlSave(stage);
        },
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
      var className = field.querySelector('.fld-className');
      if (!className) {
        return;
      }
      var i = void 0;
      var type = previewData.type;
      var style = previewData.style;
      var classes = className.value.split(' ');
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
            _this.save();
            _config.config.opts.onSave(evt, _this.data.formData);
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
      var userTemplates = (0, _keys2.default)(_config.config.opts.templates).map(function (key) {
        return [key, _config.config.opts.templates[key]];
      });
      _utils2.default.templates = _utils2.default.templates.concat(userTemplates);

      return _config.config.opts;
    }

    // end class

  }]);
  return Helpers;
}();

// export default Helpers;


exports.default = Helpers;

},{"./config":128,"./data":129,"./dom":130,"./events":131,"./utils":135,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/asyncToGenerator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/objectWithoutProperties":14,"babel-runtime/regenerator":18,"mi18n":124}],134:[function(require,module,exports){
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

},{"babel-runtime/core-js/object/assign":5}],135:[function(require,module,exports){
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
 * @param  {NodeList} options  DOM elements
 * @return {Array} optionData array
 */
utils.parseOptions = function (options) {
  var optionData = {};
  var data = [];

  for (var i = 0; i < options.length; i++) {
    optionData = utils.parseAttrs(options[i]);
    optionData.label = options[i].textContent;
    data.push(optionData);
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
      var options = fields[i].getElementsByTagName('option');

      if (options && options.length) {
        fieldData.values = utils.parseOptions(options);
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

/**
 * Removes a value from an array
 * @param  {Array} arr
 * @param  {String|Number} val
 */
utils.remove = function (val, arr) {
  var index = arr.indexOf(val);

  if (index > -1) {
    arr.splice(index, 1);
  }
};

utils.makeLabel = function (fieldData) {
  var _fieldData$label = fieldData.label,
      label = _fieldData$label === undefined ? '' : _fieldData$label,
      _fieldData$descriptio = fieldData.description,
      description = _fieldData$descriptio === undefined ? '' : _fieldData$descriptio,
      attrs = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description']);

  var labelText = utils.parsedHtml(label);
  var labelContents = [labelText];

  if (attrs.required) {
    labelContents.push(m('span', ' *', { className: 'fb-required' }));
  }

  if (attrs.type !== 'hidden') {
    if (description) {
      labelContents.push(m('span', '?', {
        className: 'tooltip-element',
        tooltip: description
      }));
    }
  }

  var labelAttrs = {
    className: 'fb-' + attrs.type + '-label'
  };

  if (attrs.id) {
    labelAttrs.for = attrs.id;
  }

  return m('label', labelContents, labelAttrs);
};

utils.templateMap = function (type) {
  var template = void 0;
  var templates = utils.templates;
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
utils.selectTemplate = function (fieldData, isPreview) {
  var options = [];
  var values = fieldData.values,
      type = fieldData.type,
      inline = fieldData.inline,
      other = fieldData.other,
      toggle = fieldData.toggle,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['values', 'type', 'inline', 'other', 'toggle']);

  var attrs = utils.processFieldDataAttrs(data, isPreview);
  var optionType = type.replace('-group', '');
  var isSelect = type === 'select';

  if (values) {
    if (attrs.placeholder && isSelect) {
      options.push(m('option', attrs.placeholder, {
        disabled: null,
        selected: null
      }));
    }

    for (var i = 0; i < values.length; i++) {
      var _values$i = values[i],
          _values$i$label = _values$i.label,
          label = _values$i$label === undefined ? '' : _values$i$label,
          optionAttrs = (0, _objectWithoutProperties3.default)(_values$i, ['label']);


      optionAttrs.id = attrs.id + '-' + i;
      if (!optionAttrs.selected || attrs.placeholder) {
        delete optionAttrs.selected;
      }

      if (isSelect) {
        var o = m('option', document.createTextNode(label), optionAttrs);
        options.push(o);
      } else {
        var wrapperClass = optionType;
        if (inline) {
          wrapperClass = 'fb-' + optionType + '-inline';
        }
        optionAttrs.type = optionType;
        if (optionAttrs.selected) {
          optionAttrs.checked = 'checked';
          delete optionAttrs.selected;
        }
        var input = m('input', null, (0, _assign2.default)({}, attrs, optionAttrs));
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
        id: attrs.id + '-other',
        className: attrs.className + ' other-option',
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

  var template = void 0;

  if (type === 'select') {
    template = m(optionType, options, data);
  } else {
    template = m('div', options, { className: type });
  }

  return template;
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

utils.templates = [['autocomplete', function (fieldData) {
  var attrs = utils.processFieldDataAttrs(fieldData);
  var fieldLabel = utils.makeLabel(fieldData);
  var autocomplete = utils.autocompleteTemplate(attrs);
  var template = {
    field: [fieldLabel, autocomplete.field],
    onRender: autocomplete.onRender
  };
  return template;
}], [_dom.defaultSubtypes.text.concat(['number', 'file', 'date']), function (fieldData) {
  var attrs = utils.processFieldDataAttrs(fieldData);
  var fieldLabel = utils.makeLabel(fieldData);
  var template = {
    field: [fieldLabel, m('input', null, attrs)]
  };
  return template;
}], [['paragraph'].concat(_dom.defaultSubtypes.paragraph), function (fieldData) {
  var attrs = utils.processFieldDataAttrs(fieldData);
  var template = {
    field: [m(fieldData.type, utils.parsedHtml(fieldData.label), attrs)]
  };
  return template;
}], [_dom.defaultSubtypes.button, function (fieldData) {
  var attrs = utils.processFieldDataAttrs(fieldData);
  var template = {
    field: m('button', fieldData.label, attrs)
  };
  return template;
}], [['select', 'checkbox-group', 'radio-group', 'checkbox'], function (fieldData) {
  var fieldLabel = utils.makeLabel(fieldData);
  var field = utils.selectTemplate(fieldData);
  var template = {
    field: [fieldLabel, field]
  };
  return template;
}], [['textarea', 'tinymce', 'quill'], function (fieldData) {
  var attrs = utils.processFieldDataAttrs(fieldData);
  var field = utils.longTextTemplate(attrs);
  var fieldLabel = utils.makeLabel(fieldData);
  var template = {
    field: [fieldLabel, field.field],
    onRender: field.onRender
  };
  return template;
}]];

utils.processFieldDataAttrs = function (fieldData) {
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      attrs = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype']);


  if (!attrs.id) {
    attrs.id = attrs.name;
  }

  if (subtype) {
    attrs.type = subtype;
  }

  if (attrs.multiple || attrs.type === 'checkbox-group') {
    attrs.name = attrs.name + '[]';
  }

  if (attrs.required) {
    attrs.required = true;
    attrs['aria-required'] = 'true';
  }

  return attrs;
};

utils.getTemplate = function (fieldData) {
  var isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var field = void 0;
  if (isPreview) {
    if (fieldData.name) {
      fieldData.name = fieldData.name + '-preview';
    } else {
      fieldData.name = utils.nameAttr(fieldData) + '-preview';
    }
  }
  var template = utils.templateMap(fieldData.type);

  if (template) {
    template = template(fieldData, isPreview);
  } else {
    template = utils.defaultField(fieldData, isPreview)();
  }

  if (fieldData.type !== 'hidden') {
    var wrapperAttrs = {};
    if (fieldData.name) {
      wrapperAttrs.className = 'fb-' + fieldData.type + ' form-group field-' + fieldData.name;
    }
    field = utils.markup('div', template.field, wrapperAttrs);
  } else {
    var attrs = utils.processFieldDataAttrs(fieldData);
    field = utils.markup('input', null, attrs);
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
  return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9\[\]\_-]/g, '').toLowerCase();
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

},{"./dom":130,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/map":4,"babel-runtime/core-js/object/assign":5,"babel-runtime/helpers/objectWithoutProperties":14,"babel-runtime/helpers/slicedToArray":15,"babel-runtime/helpers/toConsumableArray":16,"babel-runtime/helpers/typeof":17}]},{},[132])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvbWkxOG4vZGlzdC9taTE4bi5taW4uanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3JjL2pzL2NvbmZpZy5qcyIsInNyYy9qcy9kYXRhLmpzIiwic3JjL2pzL2RvbS5qcyIsInNyYy9qcy9ldmVudHMuanMiLCJzcmMvanMvZm9ybS1idWlsZGVyLmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvcG9seWZpbGxzLmpzIiwic3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUksT0FBSixFQUFhO0FBQ1gsV0FBSyxLQUFMLENBQVcsT0FBWCxFQUFvQixJQUFwQjtBQUNEO0FBQ0YsR0FkRDtBQWVELENBakJEOztBQW1CQTs7Ozs7QUFLQSxNQUFNLFdBQU4sR0FBb0IsWUFBTTtBQUN4QixNQUFJLGNBQWMsRUFBbEI7QUFDQSxHQUFDLFVBQVMsQ0FBVCxFQUFZO0FBQ1gsUUFBSSwyVEFBMlQsSUFBM1QsQ0FBZ1UsQ0FBaFUsS0FBc1UsMGtEQUEwa0QsSUFBMWtELENBQStrRCxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUEva0QsQ0FBMVUsRUFBMDZEO0FBQ3g2RCxvQkFBYyxZQUFkO0FBQ0Q7QUFDRixHQUpELEVBSUcsVUFBVSxTQUFWLElBQXVCLFVBQVUsTUFBakMsSUFBMkMsT0FBTyxLQUpyRDtBQUtBLFNBQU8sV0FBUDtBQUNELENBUkQ7O0FBVUE7Ozs7OztBQU1BLE1BQU0sYUFBTixHQUFzQixlQUFPO0FBQzNCLFNBQU8sTUFBTSxVQUFOLENBQWlCLElBQUksT0FBSixDQUFZLGFBQVosRUFBMkIsRUFBM0IsQ0FBakIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BLE1BQU0sUUFBTixHQUFpQixlQUFPO0FBQ3RCLFNBQU8sSUFBSSxPQUFKLENBQVksS0FBWixFQUFtQixHQUFuQixFQUF3QixPQUF4QixDQUFnQyxzQkFBaEMsRUFBd0QsRUFBeEQsRUFBNEQsV0FBNUQsRUFBUDtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BLE1BQU0sV0FBTixHQUFvQixlQUFPO0FBQ3pCLFNBQU8sSUFBSSxPQUFKLENBQVksU0FBWixFQUF1QixFQUF2QixDQUFQO0FBQ0QsQ0FGRDs7a0JBSWUsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wcm9taXNlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvcHJvbWlzZVwiKTtcblxudmFyIF9wcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb21pc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IF9wcm9taXNlMi5kZWZhdWx0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3Byb21pc2UyLmRlZmF1bHQucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBzdGVwKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcChcIm5leHRcIik7XG4gICAgfSk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5czsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07IiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG1ldGEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBlYWNoICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59OyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpOyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIi8qIVxuICogbWkxOG4gLSBodHRwczovL2dpdGh1Yi5jb20vRHJhZ2dhYmxlL21pMThuXG4gKiBWZXJzaW9uOiAwLjMuM1xuICogQXV0aG9yOiBLZXZpbiBDaGFwcGVsbCA8a2V2aW4uYi5jaGFwcGVsbEBnbWFpbC5jb20+IChodHRwOi8va2V2aW4tY2hhcHBlbGwuY29tKVxuICovXG5tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIGU9e307cmV0dXJuIG4ubT10LG4uYz1lLG4ucD1cImRpc3QvXCIsbigwKX0oW2Z1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZSg1NyksaT1yKG8pLHU9ZSg1MyksYz1yKHUpLGY9ZSg1NiksYT1yKGYpLHM9ZSg0OCksbD1yKHMpLHA9ZSg1NCksaD1yKHApLHY9ZSg1NSkseT1yKHYpLGQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7KDAsaFtcImRlZmF1bHRcIl0pKHRoaXMsdCk7dmFyIG49e2V4dGVuc2lvbjpcIi5sYW5nXCIsbG9jYXRpb246XCJhc3NldHMvbGFuZy9cIixsYW5nczpbXCJlbi1VU1wiXSxsb2NhbGU6XCJlbi1VU1wiLHByZWxvYWRlZDp7fX0sZT10aGlzO2UuaW5pdD1mdW5jdGlvbih0KXtyZXR1cm4gZS5jb25maWc9KDAsbFtcImRlZmF1bHRcIl0pKHt9LG4sdCksZS5sYW5ncz0oMCxsW1wiZGVmYXVsdFwiXSkoe30sZS5jb25maWcucHJlbG9hZGVkKSxlLmxvY2FsZT1lLmNvbmZpZy5sb2NhbGV8fGUuY29uZmlnLmxhbmdzWzBdLGUuc2V0Q3VycmVudChlLmxvY2FsZSl9fXJldHVybigwLHlbXCJkZWZhdWx0XCJdKSh0LFt7a2V5OlwiZ2V0VmFsdWVcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jdXJyZW50JiZ0aGlzLmN1cnJlbnRbdF18fHR9fSx7a2V5OlwibWFrZVNhZmVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj17XCJ7XCI6XCJcXFxce1wiLFwifVwiOlwiXFxcXH1cIixcInxcIjpcIlxcXFx8XCJ9O3JldHVybiB0PXQucmVwbGFjZSgvXFx7fFxcfXxcXHwvZyxmdW5jdGlvbih0KXtyZXR1cm4gblt0XX0pLG5ldyBSZWdFeHAodCxcImdcIil9fSx7a2V5OlwicHV0XCIsdmFsdWU6ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5jdXJyZW50W3RdPW59fSx7a2V5OlwiZ2V0XCIsdmFsdWU6ZnVuY3Rpb24odCxuKXt2YXIgZT10aGlzLHI9dGhpcy5nZXRWYWx1ZSh0KSxvPXIubWF0Y2goL1xce1teXFx9XSs/XFx9L2cpLGk9dm9pZCAwO2lmKG4mJm8paWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygbj9cInVuZGVmaW5lZFwiOigwLGFbXCJkZWZhdWx0XCJdKShuKSkpZm9yKHZhciB1PTA7dTxvLmxlbmd0aDt1KyspaT1vW3VdLnN1YnN0cmluZygxLG9bdV0ubGVuZ3RoLTEpLHI9ci5yZXBsYWNlKGUubWFrZVNhZmUob1t1XSksbltpXXx8XCJcIik7ZWxzZSByPXIucmVwbGFjZSgvXFx7W15cXH1dKz9cXH0vZyxuKTtyZXR1cm4gcn19LHtrZXk6XCJmcm9tRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgbixlPXQuc3BsaXQoXCJcXG5cIikscj17fSxvPTA7bzxlLmxlbmd0aDtvKyspaWYobj1lW29dLm1hdGNoKC9eKC4rPykgKj89ICo/KFteXFxuXSspLykpe3ZhciBpPW5bMl0ucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpO3JbblsxXV09aX1yZXR1cm4gcn19LHtrZXk6XCJwcm9jZXNzRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXQucmVwbGFjZSgvXFxuXFxuL2csXCJcXG5cIik7cmV0dXJuIHRoaXMuZnJvbUZpbGUobil9fSx7a2V5OlwibG9hZExhbmdcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj10aGlzO3JldHVybiBuZXcgd2luZG93LlByb21pc2UoZnVuY3Rpb24oZSxyKXtuLmxhbmdzW3RdP2Uobi5sYW5nc1t0XSk6IWZ1bmN0aW9uKCl7dmFyIG89bmV3IFhNTEh0dHBSZXF1ZXN0LGk9bi5jb25maWcubG9jYXRpb24rdCtuLmNvbmZpZy5leHRlbnNpb247by5vcGVuKFwiR0VUXCIsaSwhMCksby5vbmxvYWQ9ZnVuY3Rpb24oKXtpZih0aGlzLnN0YXR1czw9MzA0KXt2YXIgaT1uLnByb2Nlc3NGaWxlKG8ucmVzcG9uc2VUZXh0KTtuLmxhbmdzW3RdPWksZShpKX1lbHNlIHIoe3N0YXR1czp0aGlzLnN0YXR1cyxzdGF0dXNUZXh0Om8uc3RhdHVzVGV4dH0pfSxvLm9uZXJyb3I9ZnVuY3Rpb24oKXtyKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5zZW5kKCl9KCl9KX19LHtrZXk6XCJzZXRDdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgbj0oMCxjW1wiZGVmYXVsdFwiXSkoaVtcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBlKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiZW4tVVNcIjtyZXR1cm4gaVtcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbihuKXtmb3IoOzspc3dpdGNoKG4ucHJldj1uLm5leHQpe2Nhc2UgMDpyZXR1cm4gbi5uZXh0PTIsdGhpcy5sb2FkTGFuZyh0KTtjYXNlIDI6cmV0dXJuIHRoaXMubG9jYWxlPXQsdGhpcy5jdXJyZW50PXRoaXMubGFuZ3NbdF0sbi5hYnJ1cHQoXCJyZXR1cm5cIix0aGlzLmN1cnJlbnQpO2Nhc2UgNTpjYXNlXCJlbmRcIjpyZXR1cm4gbi5zdG9wKCl9fSxlLHRoaXMpfSkpO3JldHVybiB0fSgpfSx7a2V5OlwiZ2V0TGFuZ3NcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb25maWcubGFuZ3N9fV0pLHR9KCk7bltcImRlZmF1bHRcIl09bmV3IGR9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI4KShcIndrc1wiKSxvPWUoMjEpLGk9ZSgyKS5TeW1ib2wsdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpLGM9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT11JiZpW3RdfHwodT9pOm8pKFwiU3ltYm9sLlwiK3QpKX07Yy5zdG9yZT1yfSxmdW5jdGlvbih0LG4pe3ZhciBlPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPWUpfSxmdW5jdGlvbih0LG4pe3ZhciBlPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuNC4wXCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9ZSl9LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9IWUoMTIpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg2KSxvPWUoMzUpLGk9ZSgzMCksdT1PYmplY3QuZGVmaW5lUHJvcGVydHk7bi5mPWUoNCk/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLG49aShuLCEwKSxyKGUpLG8pdHJ5e3JldHVybiB1KHQsbixlKX1jYXRjaChjKXt9aWYoXCJnZXRcImluIGV8fFwic2V0XCJpbiBlKXRocm93IFR5cGVFcnJvcihcIkFjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIVwiKTtyZXR1cm5cInZhbHVlXCJpbiBlJiYodFtuXT1lLnZhbHVlKSx0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZighcih0KSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbil7dmFyIGU9e30uaGFzT3duUHJvcGVydHk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSksbz1lKDE5KTt0LmV4cG9ydHM9ZSg0KT9mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHIuZih0LG4sbygxLGUpKX06ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0W25dPWUsdH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDM2KSxvPWUoMjMpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gcihvKHQpKX19LGZ1bmN0aW9uKHQsbil7dmFyIGU9e30udG9TdHJpbmc7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBlLmNhbGwodCkuc2xpY2UoOCwtMSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyKSxvPWUoMyksaT1lKDE2KSx1PWUoOCksYz1cInByb3RvdHlwZVwiLGY9ZnVuY3Rpb24odCxuLGUpe3ZhciBhLHMsbCxwPXQmZi5GLGg9dCZmLkcsdj10JmYuUyx5PXQmZi5QLGQ9dCZmLkIsZz10JmYuVyxtPWg/bzpvW25dfHwob1tuXT17fSksdz1tW2NdLHg9aD9yOnY/cltuXToocltuXXx8e30pW2NdO2gmJihlPW4pO2ZvcihhIGluIGUpcz0hcCYmeCYmdm9pZCAwIT09eFthXSxzJiZhIGluIG18fChsPXM/eFthXTplW2FdLG1bYV09aCYmXCJmdW5jdGlvblwiIT10eXBlb2YgeFthXT9lW2FdOmQmJnM/aShsLHIpOmcmJnhbYV09PWw/ZnVuY3Rpb24odCl7dmFyIG49ZnVuY3Rpb24obixlLHIpe2lmKHRoaXMgaW5zdGFuY2VvZiB0KXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgdDtjYXNlIDE6cmV0dXJuIG5ldyB0KG4pO2Nhc2UgMjpyZXR1cm4gbmV3IHQobixlKX1yZXR1cm4gbmV3IHQobixlLHIpfXJldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cmV0dXJuIG5bY109dFtjXSxufShsKTp5JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2koRnVuY3Rpb24uY2FsbCxsKTpsLHkmJigobS52aXJ0dWFsfHwobS52aXJ0dWFsPXt9KSlbYV09bCx0JmYuUiYmdyYmIXdbYV0mJnUodyxhLGwpKSl9O2YuRj0xLGYuRz0yLGYuUz00LGYuUD04LGYuQj0xNixmLlc9MzIsZi5VPTY0LGYuUj0xMjgsdC5leHBvcnRzPWZ9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hIXQoKX1jYXRjaChuKXtyZXR1cm4hMH19fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9e319LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDQwKSxvPWUoMjUpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDIyKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe2lmKHIodCksdm9pZCAwPT09bilyZXR1cm4gdDtzd2l0Y2goZSl7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC5jYWxsKG4sZSl9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gdC5jYWxsKG4sZSxyKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihlLHIsbyl7cmV0dXJuIHQuY2FsbChuLGUscixvKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkobixhcmd1bWVudHMpfX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPSEwfSxmdW5jdGlvbih0LG4pe24uZj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6bn19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1KS5mLG89ZSg3KSxpPWUoMSkoXCJ0b1N0cmluZ1RhZ1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3QmJiFvKHQ9ZT90OnQucHJvdG90eXBlLGkpJiZyKHQsaSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOm59KX19LGZ1bmN0aW9uKHQsbil7dmFyIGU9MCxyPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT10P1wiXCI6dCxcIilfXCIsKCsrZStyKS50b1N0cmluZygzNikpfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih2b2lkIDA9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpLG89ZSgyKS5kb2N1bWVudCxpPXIobykmJnIoby5jcmVhdGVFbGVtZW50KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGk/by5jcmVhdGVFbGVtZW50KHQpOnt9fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9XCJjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2ZcIi5zcGxpdChcIixcIil9LGZ1bmN0aW9uKHQsbil7bi5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHN9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI4KShcImtleXNcIiksbz1lKDIxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPW8odCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMiksbz1cIl9fY29yZS1qc19zaGFyZWRfX1wiLGk9cltvXXx8KHJbb109e30pO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaVt0XXx8KGlbdF09e30pfX0sZnVuY3Rpb24odCxuKXt2YXIgZT1NYXRoLmNlaWwscj1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP3I6ZSkodCl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIGUsbztpZihuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnZhbHVlT2YpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoIW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC50b1N0cmluZykmJiFyKG89ZS5jYWxsKHQpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyKSxvPWUoMyksaT1lKDE3KSx1PWUoMzIpLGM9ZSg1KS5mO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1vLlN5bWJvbHx8KG8uU3ltYm9sPWk/e306ci5TeW1ib2x8fHt9KTtcIl9cIj09dC5jaGFyQXQoMCl8fHQgaW4gbnx8YyhuLHQse3ZhbHVlOnUuZih0KX0pfX0sZnVuY3Rpb24odCxuLGUpe24uZj1lKDEpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCksbz1lKDEpKFwidG9TdHJpbmdUYWdcIiksaT1cIkFyZ3VtZW50c1wiPT1yKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSksdT1mdW5jdGlvbih0LG4pe3RyeXtyZXR1cm4gdFtuXX1jYXRjaChlKXt9fTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG4sZSxjO3JldHVybiB2b2lkIDA9PT10P1wiVW5kZWZpbmVkXCI6bnVsbD09PXQ/XCJOdWxsXCI6XCJzdHJpbmdcIj09dHlwZW9mKGU9dShuPU9iamVjdCh0KSxvKSk/ZTppP3Iobik6XCJPYmplY3RcIj09KGM9cihuKSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4uY2FsbGVlP1wiQXJndW1lbnRzXCI6Y319LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9ZSgyKS5kb2N1bWVudCYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPSFlKDQpJiYhZSgxMikoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUoMjQpKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEwKTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09cih0KT90LnNwbGl0KFwiXCIpOk9iamVjdCh0KX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDE3KSxvPWUoMTEpLGk9ZSg0MSksdT1lKDgpLGM9ZSg3KSxmPWUoMTQpLGE9ZSg3Mikscz1lKDIwKSxsPWUoODIpLHA9ZSgxKShcIml0ZXJhdG9yXCIpLGg9IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSx2PVwiQEBpdGVyYXRvclwiLHk9XCJrZXlzXCIsZD1cInZhbHVlc1wiLGc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlLG0sdyx4LGIpe2EoZSxuLG0pO3ZhciBfLE8saixTPWZ1bmN0aW9uKHQpe2lmKCFoJiZ0IGluIGspcmV0dXJuIGtbdF07c3dpdGNoKHQpe2Nhc2UgeTpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX07Y2FzZSBkOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgZSh0aGlzLHQpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19LEU9bitcIiBJdGVyYXRvclwiLFQ9dz09ZCxQPSExLGs9dC5wcm90b3R5cGUsTD1rW3BdfHxrW3ZdfHx3JiZrW3ddLE09THx8Uyh3KSxGPXc/VD9TKFwiZW50cmllc1wiKTpNOnZvaWQgMCxOPVwiQXJyYXlcIj09bj9rLmVudHJpZXN8fEw6TDtpZihOJiYoaj1sKE4uY2FsbChuZXcgdCkpLGohPT1PYmplY3QucHJvdG90eXBlJiYocyhqLEUsITApLHJ8fGMoaixwKXx8dShqLHAsZykpKSxUJiZMJiZMLm5hbWUhPT1kJiYoUD0hMCxNPWZ1bmN0aW9uKCl7cmV0dXJuIEwuY2FsbCh0aGlzKX0pLHImJiFifHwhaCYmIVAmJmtbcF18fHUoayxwLE0pLGZbbl09TSxmW0VdPWcsdylpZihfPXt2YWx1ZXM6VD9NOlMoZCksa2V5czp4P006Uyh5KSxlbnRyaWVzOkZ9LGIpZm9yKE8gaW4gXylPIGluIGt8fGkoayxPLF9bT10pO2Vsc2UgbyhvLlArby5GKihofHxQKSxuLF8pO3JldHVybiBffX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNiksbz1lKDc5KSxpPWUoMjUpLHU9ZSgyNykoXCJJRV9QUk9UT1wiKSxjPWZ1bmN0aW9uKCl7fSxmPVwicHJvdG90eXBlXCIsYT1mdW5jdGlvbigpe3ZhciB0LG49ZSgyNCkoXCJpZnJhbWVcIikscj1pLmxlbmd0aCxvPVwiPFwiLHU9XCI+XCI7Zm9yKG4uc3R5bGUuZGlzcGxheT1cIm5vbmVcIixlKDM0KS5hcHBlbmRDaGlsZChuKSxuLnNyYz1cImphdmFzY3JpcHQ6XCIsdD1uLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQsdC5vcGVuKCksdC53cml0ZShvK1wic2NyaXB0XCIrdStcImRvY3VtZW50LkY9T2JqZWN0XCIrbytcIi9zY3JpcHRcIit1KSx0LmNsb3NlKCksYT10LkY7ci0tOylkZWxldGUgYVtmXVtpW3JdXTtyZXR1cm4gYSgpfTt0LmV4cG9ydHM9T2JqZWN0LmNyZWF0ZXx8ZnVuY3Rpb24odCxuKXt2YXIgZTtyZXR1cm4gbnVsbCE9PXQ/KGNbZl09cih0KSxlPW5ldyBjLGNbZl09bnVsbCxlW3VdPXQpOmU9YSgpLHZvaWQgMD09PW4/ZTpvKGUsbil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0MCksbz1lKDI1KS5jb25jYXQoXCJsZW5ndGhcIixcInByb3RvdHlwZVwiKTtuLmY9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg3KSxvPWUoOSksaT1lKDY1KSghMSksdT1lKDI3KShcIklFX1BST1RPXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3ZhciBlLGM9byh0KSxmPTAsYT1bXTtmb3IoZSBpbiBjKWUhPXUmJnIoYyxlKSYmYS5wdXNoKGUpO2Zvcig7bi5sZW5ndGg+ZjspcihjLGU9bltmKytdKSYmKH5pKGEsZSl8fGEucHVzaChlKSk7cmV0dXJuIGF9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPWUoOCl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcixvLGksdT1lKDE2KSxjPWUoNjgpLGY9ZSgzNCksYT1lKDI0KSxzPWUoMiksbD1zLnByb2Nlc3MscD1zLnNldEltbWVkaWF0ZSxoPXMuY2xlYXJJbW1lZGlhdGUsdj1zLk1lc3NhZ2VDaGFubmVsLHk9MCxkPXt9LGc9XCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixtPWZ1bmN0aW9uKCl7dmFyIHQ9K3RoaXM7aWYoZC5oYXNPd25Qcm9wZXJ0eSh0KSl7dmFyIG49ZFt0XTtkZWxldGUgZFt0XSxuKCl9fSx3PWZ1bmN0aW9uKHQpe20uY2FsbCh0LmRhdGEpfTtwJiZofHwocD1mdW5jdGlvbih0KXtmb3IodmFyIG49W10sZT0xO2FyZ3VtZW50cy5sZW5ndGg+ZTspbi5wdXNoKGFyZ3VtZW50c1tlKytdKTtyZXR1cm4gZFsrK3ldPWZ1bmN0aW9uKCl7YyhcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6RnVuY3Rpb24odCksbil9LHIoeSkseX0saD1mdW5jdGlvbih0KXtkZWxldGUgZFt0XX0sXCJwcm9jZXNzXCI9PWUoMTApKGwpP3I9ZnVuY3Rpb24odCl7bC5uZXh0VGljayh1KG0sdCwxKSl9OnY/KG89bmV3IHYsaT1vLnBvcnQyLG8ucG9ydDEub25tZXNzYWdlPXcscj11KGkucG9zdE1lc3NhZ2UsaSwxKSk6cy5hZGRFdmVudExpc3RlbmVyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwb3N0TWVzc2FnZSYmIXMuaW1wb3J0U2NyaXB0cz8ocj1mdW5jdGlvbih0KXtzLnBvc3RNZXNzYWdlKHQrXCJcIixcIipcIil9LHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix3LCExKSk6cj1nIGluIGEoXCJzY3JpcHRcIik/ZnVuY3Rpb24odCl7Zi5hcHBlbmRDaGlsZChhKFwic2NyaXB0XCIpKVtnXT1mdW5jdGlvbigpe2YucmVtb3ZlQ2hpbGQodGhpcyksbS5jYWxsKHQpfX06ZnVuY3Rpb24odCl7c2V0VGltZW91dCh1KG0sdCwxKSwwKX0pLHQuZXhwb3J0cz17c2V0OnAsY2xlYXI6aH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KSxvPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdD4wP28ocih0KSw5MDA3MTk5MjU0NzQwOTkxKTowfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjMpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KHIodCkpfX0sZnVuY3Rpb24odCxuKXt9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDg2KSghMCk7ZSgzNykoU3RyaW5nLFwiU3RyaW5nXCIsZnVuY3Rpb24odCl7dGhpcy5fdD1TdHJpbmcodCksdGhpcy5faT0wfSxmdW5jdGlvbigpe3ZhciB0LG49dGhpcy5fdCxlPXRoaXMuX2k7cmV0dXJuIGU+PW4ubGVuZ3RoP3t2YWx1ZTp2b2lkIDAsZG9uZTohMH06KHQ9cihuLGUpLHRoaXMuX2krPXQubGVuZ3RoLHt2YWx1ZTp0LGRvbmU6ITF9KX0pfSxmdW5jdGlvbih0LG4sZSl7ZSg4OSk7Zm9yKHZhciByPWUoMiksbz1lKDgpLGk9ZSgxNCksdT1lKDEpKFwidG9TdHJpbmdUYWdcIiksYz1bXCJOb2RlTGlzdFwiLFwiRE9NVG9rZW5MaXN0XCIsXCJNZWRpYUxpc3RcIixcIlN0eWxlU2hlZXRMaXN0XCIsXCJDU1NSdWxlTGlzdFwiXSxmPTA7Zjw1O2YrKyl7dmFyIGE9Y1tmXSxzPXJbYV0sbD1zJiZzLnByb3RvdHlwZTtsJiYhbFt1XSYmbyhsLHUsYSksaVthXT1pLkFycmF5fX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg1OCksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNTkpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDYwKSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg2MSksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNjIpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e1wiZGVmYXVsdFwiOnR9fW4uX19lc01vZHVsZT0hMDt2YXIgbz1lKDUwKSxpPXIobyk7bltcImRlZmF1bHRcIl09ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIG5ldyBpW1wiZGVmYXVsdFwiXShmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIobyx1KXt0cnl7dmFyIGM9bltvXSh1KSxmPWMudmFsdWV9Y2F0Y2goYSl7cmV0dXJuIHZvaWQgZShhKX1yZXR1cm4gYy5kb25lP3ZvaWQgdChmKTppW1wiZGVmYXVsdFwiXS5yZXNvbHZlKGYpLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuIHIoXCJuZXh0XCIsdCl9LGZ1bmN0aW9uKHQpe3JldHVybiByKFwidGhyb3dcIix0KX0pfXJldHVybiByKFwibmV4dFwiKX0pfX19LGZ1bmN0aW9uKHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5fX2VzTW9kdWxlPSEwLG5bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQsbil7aWYoISh0IGluc3RhbmNlb2YgbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19bi5fX2VzTW9kdWxlPSEwO3ZhciBvPWUoNDkpLGk9cihvKTtuW1wiZGVmYXVsdFwiXT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXtmb3IodmFyIGU9MDtlPG4ubGVuZ3RoO2UrKyl7dmFyIHI9bltlXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksKDAsaVtcImRlZmF1bHRcIl0pKHQsci5rZXkscil9fXJldHVybiBmdW5jdGlvbihuLGUscil7cmV0dXJuIGUmJnQobi5wcm90b3R5cGUsZSksciYmdChuLHIpLG59fSgpfSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e1wiZGVmYXVsdFwiOnR9fW4uX19lc01vZHVsZT0hMDt2YXIgbz1lKDUyKSxpPXIobyksdT1lKDUxKSxjPXIodSksZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjW1wiZGVmYXVsdFwiXSYmXCJzeW1ib2xcIj09dHlwZW9mIGlbXCJkZWZhdWx0XCJdP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGNbXCJkZWZhdWx0XCJdJiZ0LmNvbnN0cnVjdG9yPT09Y1tcImRlZmF1bHRcIl0/XCJzeW1ib2xcIjp0eXBlb2YgdH07bltcImRlZmF1bHRcIl09XCJmdW5jdGlvblwiPT10eXBlb2YgY1tcImRlZmF1bHRcIl0mJlwic3ltYm9sXCI9PT1mKGlbXCJkZWZhdWx0XCJdKT9mdW5jdGlvbih0KXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmYodCl9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjW1wiZGVmYXVsdFwiXSYmdC5jb25zdHJ1Y3Rvcj09PWNbXCJkZWZhdWx0XCJdP1wic3ltYm9sXCI6XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpmKHQpfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDk3KX0sZnVuY3Rpb24odCxuLGUpe2UoOTApLHQuZXhwb3J0cz1lKDMpLk9iamVjdC5hc3NpZ259LGZ1bmN0aW9uKHQsbixlKXtlKDkxKTt2YXIgcj1lKDMpLk9iamVjdDt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3JldHVybiByLmRlZmluZVByb3BlcnR5KHQsbixlKX19LGZ1bmN0aW9uKHQsbixlKXtlKDQ1KSxlKDQ2KSxlKDQ3KSxlKDkyKSx0LmV4cG9ydHM9ZSgzKS5Qcm9taXNlfSxmdW5jdGlvbih0LG4sZSl7ZSg5MyksZSg0NSksZSg5NCksZSg5NSksdC5leHBvcnRzPWUoMykuU3ltYm9sfSxmdW5jdGlvbih0LG4sZSl7ZSg0NiksZSg0NyksdC5leHBvcnRzPWUoMzIpLmYoXCJpdGVyYXRvclwiKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxyKXtpZighKHQgaW5zdGFuY2VvZiBuKXx8dm9pZCAwIT09ciYmciBpbiB0KXRocm93IFR5cGVFcnJvcihlK1wiOiBpbmNvcnJlY3QgaW52b2NhdGlvbiFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg5KSxvPWUoNDMpLGk9ZSg4Nyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihuLGUsdSl7dmFyIGMsZj1yKG4pLGE9byhmLmxlbmd0aCkscz1pKHUsYSk7aWYodCYmZSE9ZSl7Zm9yKDthPnM7KWlmKGM9ZltzKytdLGMhPWMpcmV0dXJuITB9ZWxzZSBmb3IoO2E+cztzKyspaWYoKHR8fHMgaW4gZikmJmZbc109PT1lKXJldHVybiB0fHxzfHwwO3JldHVybiF0JiYtMX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNSksbz1lKDI2KSxpPWUoMTgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1yKHQpLGU9by5mO2lmKGUpZm9yKHZhciB1LGM9ZSh0KSxmPWkuZixhPTA7Yy5sZW5ndGg+YTspZi5jYWxsKHQsdT1jW2ErK10pJiZuLnB1c2godSk7cmV0dXJuIG59fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNiksbz1lKDcxKSxpPWUoNjkpLHU9ZSg2KSxjPWUoNDMpLGY9ZSg4OCksYT17fSxzPXt9LG49dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlLGwscCl7dmFyIGgsdix5LGQsZz1wP2Z1bmN0aW9uKCl7cmV0dXJuIHR9OmYodCksbT1yKGUsbCxuPzI6MSksdz0wO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGcpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGl0ZXJhYmxlIVwiKTtpZihpKGcpKXtmb3IoaD1jKHQubGVuZ3RoKTtoPnc7dysrKWlmKGQ9bj9tKHUodj10W3ddKVswXSx2WzFdKTptKHRbd10pLGQ9PT1hfHxkPT09cylyZXR1cm4gZH1lbHNlIGZvcih5PWcuY2FsbCh0KTshKHY9eS5uZXh0KCkpLmRvbmU7KWlmKGQ9byh5LG0sdi52YWx1ZSxuKSxkPT09YXx8ZD09PXMpcmV0dXJuIGR9O24uQlJFQUs9YSxuLlJFVFVSTj1zfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7dmFyIHI9dm9pZCAwPT09ZTtzd2l0Y2gobi5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gcj90KCk6dC5jYWxsKGUpO2Nhc2UgMTpyZXR1cm4gcj90KG5bMF0pOnQuY2FsbChlLG5bMF0pO2Nhc2UgMjpyZXR1cm4gcj90KG5bMF0sblsxXSk6dC5jYWxsKGUsblswXSxuWzFdKTtjYXNlIDM6cmV0dXJuIHI/dChuWzBdLG5bMV0sblsyXSk6dC5jYWxsKGUsblswXSxuWzFdLG5bMl0pO2Nhc2UgNDpyZXR1cm4gcj90KG5bMF0sblsxXSxuWzJdLG5bM10pOnQuY2FsbChlLG5bMF0sblsxXSxuWzJdLG5bM10pfXJldHVybiB0LmFwcGx5KGUsbil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNCksbz1lKDEpKFwiaXRlcmF0b3JcIiksaT1BcnJheS5wcm90b3R5cGU7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10JiYoci5BcnJheT09PXR8fGlbb109PT10KX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEwKTt0LmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24odCl7cmV0dXJuXCJBcnJheVwiPT1yKHQpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlLG8pe3RyeXtyZXR1cm4gbz9uKHIoZSlbMF0sZVsxXSk6bihlKX1jYXRjaChpKXt2YXIgdT10W1wicmV0dXJuXCJdO3Rocm93IHZvaWQgMCE9PXUmJnIodS5jYWxsKHQpKSxpfX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDM4KSxvPWUoMTkpLGk9ZSgyMCksdT17fTtlKDgpKHUsZSgxKShcIml0ZXJhdG9yXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSx0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3QucHJvdG90eXBlPXIodSx7bmV4dDpvKDEsZSl9KSxpKHQsbitcIiBJdGVyYXRvclwiKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEpKFwiaXRlcmF0b3JcIiksbz0hMTt0cnl7dmFyIGk9WzddW3JdKCk7aVtcInJldHVyblwiXT1mdW5jdGlvbigpe289ITB9LEFycmF5LmZyb20oaSxmdW5jdGlvbigpe3Rocm93IDJ9KX1jYXRjaCh1KXt9dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7aWYoIW4mJiFvKXJldHVybiExO3ZhciBlPSExO3RyeXt2YXIgaT1bN10sdT1pW3JdKCk7dS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6ZT0hMH19LGlbcl09ZnVuY3Rpb24oKXtyZXR1cm4gdX0sdChpKX1jYXRjaChjKXt9cmV0dXJuIGV9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybnt2YWx1ZTpuLGRvbmU6ISF0fX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDE1KSxvPWUoOSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7Zm9yKHZhciBlLGk9byh0KSx1PXIoaSksYz11Lmxlbmd0aCxmPTA7Yz5mOylpZihpW2U9dVtmKytdXT09PW4pcmV0dXJuIGV9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyMSkoXCJtZXRhXCIpLG89ZSgxMyksaT1lKDcpLHU9ZSg1KS5mLGM9MCxmPU9iamVjdC5pc0V4dGVuc2libGV8fGZ1bmN0aW9uKCl7cmV0dXJuITB9LGE9IWUoMTIpKGZ1bmN0aW9uKCl7cmV0dXJuIGYoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSl9KSxzPWZ1bmN0aW9uKHQpe3UodCxyLHt2YWx1ZTp7aTpcIk9cIisgKytjLHc6e319fSl9LGw9ZnVuY3Rpb24odCxuKXtpZighbyh0KSlyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OihcInN0cmluZ1wiPT10eXBlb2YgdD9cIlNcIjpcIlBcIikrdDtpZighaSh0LHIpKXtpZighZih0KSlyZXR1cm5cIkZcIjtpZighbilyZXR1cm5cIkVcIjtzKHQpfXJldHVybiB0W3JdLml9LHA9ZnVuY3Rpb24odCxuKXtpZighaSh0LHIpKXtpZighZih0KSlyZXR1cm4hMDtpZighbilyZXR1cm4hMTtzKHQpfXJldHVybiB0W3JdLnd9LGg9ZnVuY3Rpb24odCl7cmV0dXJuIGEmJnYuTkVFRCYmZih0KSYmIWkodCxyKSYmcyh0KSx0fSx2PXQuZXhwb3J0cz17S0VZOnIsTkVFRDohMSxmYXN0S2V5OmwsZ2V0V2VhazpwLG9uRnJlZXplOmh9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyKSxvPWUoNDIpLnNldCxpPXIuTXV0YXRpb25PYnNlcnZlcnx8ci5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLHU9ci5wcm9jZXNzLGM9ci5Qcm9taXNlLGY9XCJwcm9jZXNzXCI9PWUoMTApKHUpO3QuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciB0LG4sZSxhPWZ1bmN0aW9uKCl7dmFyIHIsbztmb3IoZiYmKHI9dS5kb21haW4pJiZyLmV4aXQoKTt0Oyl7bz10LmZuLHQ9dC5uZXh0O3RyeXtvKCl9Y2F0Y2goaSl7dGhyb3cgdD9lKCk6bj12b2lkIDAsaX19bj12b2lkIDAsciYmci5lbnRlcigpfTtpZihmKWU9ZnVuY3Rpb24oKXt1Lm5leHRUaWNrKGEpfTtlbHNlIGlmKGkpe3ZhciBzPSEwLGw9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7bmV3IGkoYSkub2JzZXJ2ZShsLHtjaGFyYWN0ZXJEYXRhOiEwfSksZT1mdW5jdGlvbigpe2wuZGF0YT1zPSFzfX1lbHNlIGlmKGMmJmMucmVzb2x2ZSl7dmFyIHA9Yy5yZXNvbHZlKCk7ZT1mdW5jdGlvbigpe3AudGhlbihhKX19ZWxzZSBlPWZ1bmN0aW9uKCl7by5jYWxsKHIsYSl9O3JldHVybiBmdW5jdGlvbihyKXt2YXIgbz17Zm46cixuZXh0OnZvaWQgMH07biYmKG4ubmV4dD1vKSx0fHwodD1vLGUoKSksbj1vfX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDE1KSxvPWUoMjYpLGk9ZSgxOCksdT1lKDQ0KSxjPWUoMzYpLGY9T2JqZWN0LmFzc2lnbjt0LmV4cG9ydHM9IWZ8fGUoMTIpKGZ1bmN0aW9uKCl7dmFyIHQ9e30sbj17fSxlPVN5bWJvbCgpLHI9XCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiO3JldHVybiB0W2VdPTcsci5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe25bdF09dH0pLDchPWYoe30sdClbZV18fE9iamVjdC5rZXlzKGYoe30sbikpLmpvaW4oXCJcIikhPXJ9KT9mdW5jdGlvbih0LG4pe2Zvcih2YXIgZT11KHQpLGY9YXJndW1lbnRzLmxlbmd0aCxhPTEscz1vLmYsbD1pLmY7Zj5hOylmb3IodmFyIHAsaD1jKGFyZ3VtZW50c1thKytdKSx2PXM/cihoKS5jb25jYXQocyhoKSk6cihoKSx5PXYubGVuZ3RoLGQ9MDt5PmQ7KWwuY2FsbChoLHA9dltkKytdKSYmKGVbcF09aFtwXSk7cmV0dXJuIGV9OmZ9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDUpLG89ZSg2KSxpPWUoMTUpO3QuZXhwb3J0cz1lKDQpP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKHQsbil7byh0KTtmb3IodmFyIGUsdT1pKG4pLGM9dS5sZW5ndGgsZj0wO2M+Zjspci5mKHQsZT11W2YrK10sbltlXSk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxOCksbz1lKDE5KSxpPWUoOSksdT1lKDMwKSxjPWUoNyksZj1lKDM1KSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7bi5mPWUoNCk/YTpmdW5jdGlvbih0LG4pe2lmKHQ9aSh0KSxuPXUobiwhMCksZil0cnl7cmV0dXJuIGEodCxuKX1jYXRjaChlKXt9aWYoYyh0LG4pKXJldHVybiBvKCFyLmYuY2FsbCh0LG4pLHRbbl0pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoOSksbz1lKDM5KS5mLGk9e30udG9TdHJpbmcsdT1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W10sYz1mdW5jdGlvbih0KXt0cnl7cmV0dXJuIG8odCl9Y2F0Y2gobil7cmV0dXJuIHUuc2xpY2UoKX19O3QuZXhwb3J0cy5mPWZ1bmN0aW9uKHQpe3JldHVybiB1JiZcIltvYmplY3QgV2luZG93XVwiPT1pLmNhbGwodCk/Yyh0KTpvKHIodCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNyksbz1lKDQ0KSxpPWUoMjcpKFwiSUVfUFJPVE9cIiksdT1PYmplY3QucHJvdG90eXBlO3QuZXhwb3J0cz1PYmplY3QuZ2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQpe3JldHVybiB0PW8odCkscih0LGkpP3RbaV06XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb25zdHJ1Y3RvciYmdCBpbnN0YW5jZW9mIHQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU6dCBpbnN0YW5jZW9mIE9iamVjdD91Om51bGx9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg4KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe2Zvcih2YXIgbyBpbiBuKWUmJnRbb10/dFtvXT1uW29dOnIodCxvLG5bb10pO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoMiksbz1lKDMpLGk9ZSg1KSx1PWUoNCksYz1lKDEpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2Ygb1t0XT9vW3RdOnJbdF07dSYmbiYmIW5bY10mJmkuZihuLGMse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc319KX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDYpLG89ZSgyMiksaT1lKDEpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXt2YXIgZSx1PXIodCkuY29uc3RydWN0b3I7cmV0dXJuIHZvaWQgMD09PXV8fHZvaWQgMD09KGU9cih1KVtpXSk/bjpvKGUpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjkpLG89ZSgyMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihuLGUpe3ZhciBpLHUsYz1TdHJpbmcobyhuKSksZj1yKGUpLGE9Yy5sZW5ndGg7cmV0dXJuIGY8MHx8Zj49YT90P1wiXCI6dm9pZCAwOihpPWMuY2hhckNvZGVBdChmKSxpPDU1Mjk2fHxpPjU2MzE5fHxmKzE9PT1hfHwodT1jLmNoYXJDb2RlQXQoZisxKSk8NTYzMjB8fHU+NTczNDM/dD9jLmNoYXJBdChmKTppOnQ/Yy5zbGljZShmLGYrMik6KGktNTUyOTY8PDEwKSsodS01NjMyMCkrNjU1MzYpfX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KSxvPU1hdGgubWF4LGk9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ9cih0KSx0PDA/byh0K24sMCk6aSh0LG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMzMpLG89ZSgxKShcIml0ZXJhdG9yXCIpLGk9ZSgxNCk7dC5leHBvcnRzPWUoMykuZ2V0SXRlcmF0b3JNZXRob2Q9ZnVuY3Rpb24odCl7aWYodm9pZCAwIT10KXJldHVybiB0W29dfHx0W1wiQEBpdGVyYXRvclwiXXx8aVtyKHQpXX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDYzKSxvPWUoNzQpLGk9ZSgxNCksdT1lKDkpO3QuZXhwb3J0cz1lKDM3KShBcnJheSxcIkFycmF5XCIsZnVuY3Rpb24odCxuKXt0aGlzLl90PXUodCksdGhpcy5faT0wLHRoaXMuX2s9bn0sZnVuY3Rpb24oKXt2YXIgdD10aGlzLl90LG49dGhpcy5fayxlPXRoaXMuX2krKztyZXR1cm4hdHx8ZT49dC5sZW5ndGg/KHRoaXMuX3Q9dm9pZCAwLG8oMSkpOlwia2V5c1wiPT1uP28oMCxlKTpcInZhbHVlc1wiPT1uP28oMCx0W2VdKTpvKDAsW2UsdFtlXV0pfSxcInZhbHVlc1wiKSxpLkFyZ3VtZW50cz1pLkFycmF5LHIoXCJrZXlzXCIpLHIoXCJ2YWx1ZXNcIikscihcImVudHJpZXNcIil9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDExKTtyKHIuUytyLkYsXCJPYmplY3RcIix7YXNzaWduOmUoNzgpfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDExKTtyKHIuUytyLkYqIWUoNCksXCJPYmplY3RcIix7ZGVmaW5lUHJvcGVydHk6ZSg1KS5mfSl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcixvLGksdT1lKDE3KSxjPWUoMiksZj1lKDE2KSxhPWUoMzMpLHM9ZSgxMSksbD1lKDEzKSxwPWUoMjIpLGg9ZSg2NCksdj1lKDY3KSx5PWUoODUpLGQ9ZSg0Mikuc2V0LGc9ZSg3NykoKSxtPVwiUHJvbWlzZVwiLHc9Yy5UeXBlRXJyb3IseD1jLnByb2Nlc3MsYj1jW21dLHg9Yy5wcm9jZXNzLF89XCJwcm9jZXNzXCI9PWEoeCksTz1mdW5jdGlvbigpe30saj0hIWZ1bmN0aW9uKCl7dHJ5e3ZhciB0PWIucmVzb2x2ZSgxKSxuPSh0LmNvbnN0cnVjdG9yPXt9KVtlKDEpKFwic3BlY2llc1wiKV09ZnVuY3Rpb24odCl7dChPLE8pfTtyZXR1cm4oX3x8XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50KSYmdC50aGVuKE8paW5zdGFuY2VvZiBufWNhdGNoKHIpe319KCksUz1mdW5jdGlvbih0LG4pe3JldHVybiB0PT09bnx8dD09PWImJm49PT1pfSxFPWZ1bmN0aW9uKHQpe3ZhciBuO3JldHVybiEoIWwodCl8fFwiZnVuY3Rpb25cIiE9dHlwZW9mKG49dC50aGVuKSkmJm59LFQ9ZnVuY3Rpb24odCl7cmV0dXJuIFMoYix0KT9uZXcgUCh0KTpuZXcgbyh0KX0sUD1vPWZ1bmN0aW9uKHQpe3ZhciBuLGU7dGhpcy5wcm9taXNlPW5ldyB0KGZ1bmN0aW9uKHQscil7aWYodm9pZCAwIT09bnx8dm9pZCAwIT09ZSl0aHJvdyB3KFwiQmFkIFByb21pc2UgY29uc3RydWN0b3JcIik7bj10LGU9cn0pLHRoaXMucmVzb2x2ZT1wKG4pLHRoaXMucmVqZWN0PXAoZSl9LGs9ZnVuY3Rpb24odCl7dHJ5e3QoKX1jYXRjaChuKXtyZXR1cm57ZXJyb3I6bn19fSxMPWZ1bmN0aW9uKHQsbil7aWYoIXQuX24pe3QuX249ITA7dmFyIGU9dC5fYztnKGZ1bmN0aW9uKCl7Zm9yKHZhciByPXQuX3Ysbz0xPT10Ll9zLGk9MCx1PWZ1bmN0aW9uKG4pe3ZhciBlLGksdT1vP24ub2s6bi5mYWlsLGM9bi5yZXNvbHZlLGY9bi5yZWplY3QsYT1uLmRvbWFpbjt0cnl7dT8ob3x8KDI9PXQuX2gmJk4odCksdC5faD0xKSx1PT09ITA/ZT1yOihhJiZhLmVudGVyKCksZT11KHIpLGEmJmEuZXhpdCgpKSxlPT09bi5wcm9taXNlP2YodyhcIlByb21pc2UtY2hhaW4gY3ljbGVcIikpOihpPUUoZSkpP2kuY2FsbChlLGMsZik6YyhlKSk6ZihyKX1jYXRjaChzKXtmKHMpfX07ZS5sZW5ndGg+aTspdShlW2krK10pO3QuX2M9W10sdC5fbj0hMSxuJiYhdC5faCYmTSh0KX0pfX0sTT1mdW5jdGlvbih0KXtkLmNhbGwoYyxmdW5jdGlvbigpe3ZhciBuLGUscixvPXQuX3Y7aWYoRih0KSYmKG49ayhmdW5jdGlvbigpe18/eC5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsbyx0KTooZT1jLm9udW5oYW5kbGVkcmVqZWN0aW9uKT9lKHtwcm9taXNlOnQscmVhc29uOm99KToocj1jLmNvbnNvbGUpJiZyLmVycm9yJiZyLmVycm9yKFwiVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXCIsbyl9KSx0Ll9oPV98fEYodCk/MjoxKSx0Ll9hPXZvaWQgMCxuKXRocm93IG4uZXJyb3J9KX0sRj1mdW5jdGlvbih0KXtpZigxPT10Ll9oKXJldHVybiExO2Zvcih2YXIgbixlPXQuX2F8fHQuX2Mscj0wO2UubGVuZ3RoPnI7KWlmKG49ZVtyKytdLG4uZmFpbHx8IUYobi5wcm9taXNlKSlyZXR1cm4hMTtyZXR1cm4hMH0sTj1mdW5jdGlvbih0KXtkLmNhbGwoYyxmdW5jdGlvbigpe3ZhciBuO18/eC5lbWl0KFwicmVqZWN0aW9uSGFuZGxlZFwiLHQpOihuPWMub25yZWplY3Rpb25oYW5kbGVkKSYmbih7cHJvbWlzZTp0LHJlYXNvbjp0Ll92fSl9KX0sQT1mdW5jdGlvbih0KXt2YXIgbj10aGlzO24uX2R8fChuLl9kPSEwLG49bi5fd3x8bixuLl92PXQsbi5fcz0yLG4uX2F8fChuLl9hPW4uX2Muc2xpY2UoKSksTChuLCEwKSl9LFI9ZnVuY3Rpb24odCl7dmFyIG4sZT10aGlzO2lmKCFlLl9kKXtlLl9kPSEwLGU9ZS5fd3x8ZTt0cnl7aWYoZT09PXQpdGhyb3cgdyhcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpOyhuPUUodCkpP2coZnVuY3Rpb24oKXt2YXIgcj17X3c6ZSxfZDohMX07dHJ5e24uY2FsbCh0LGYoUixyLDEpLGYoQSxyLDEpKX1jYXRjaChvKXtBLmNhbGwocixvKX19KTooZS5fdj10LGUuX3M9MSxMKGUsITEpKX1jYXRjaChyKXtBLmNhbGwoe193OmUsX2Q6ITF9LHIpfX19O2p8fChiPWZ1bmN0aW9uKHQpe2godGhpcyxiLG0sXCJfaFwiKSxwKHQpLHIuY2FsbCh0aGlzKTt0cnl7dChmKFIsdGhpcywxKSxmKEEsdGhpcywxKSl9Y2F0Y2gobil7QS5jYWxsKHRoaXMsbil9fSxyPWZ1bmN0aW9uKHQpe3RoaXMuX2M9W10sdGhpcy5fYT12b2lkIDAsdGhpcy5fcz0wLHRoaXMuX2Q9ITEsdGhpcy5fdj12b2lkIDAsdGhpcy5faD0wLHRoaXMuX249ITF9LHIucHJvdG90eXBlPWUoODMpKGIucHJvdG90eXBlLHt0aGVuOmZ1bmN0aW9uKHQsbil7dmFyIGU9VCh5KHRoaXMsYikpO3JldHVybiBlLm9rPVwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fHQsZS5mYWlsPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm4sZS5kb21haW49Xz94LmRvbWFpbjp2b2lkIDAsdGhpcy5fYy5wdXNoKGUpLHRoaXMuX2EmJnRoaXMuX2EucHVzaChlKSx0aGlzLl9zJiZMKHRoaXMsITEpLGUucHJvbWlzZX0sXCJjYXRjaFwiOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4odm9pZCAwLHQpfX0pLFA9ZnVuY3Rpb24oKXt2YXIgdD1uZXcgcjt0aGlzLnByb21pc2U9dCx0aGlzLnJlc29sdmU9ZihSLHQsMSksdGhpcy5yZWplY3Q9ZihBLHQsMSl9KSxzKHMuRytzLlcrcy5GKiFqLHtQcm9taXNlOmJ9KSxlKDIwKShiLG0pLGUoODQpKG0pLGk9ZSgzKVttXSxzKHMuUytzLkYqIWosbSx7cmVqZWN0OmZ1bmN0aW9uKHQpe3ZhciBuPVQodGhpcyksZT1uLnJlamVjdDtyZXR1cm4gZSh0KSxuLnByb21pc2V9fSkscyhzLlMrcy5GKih1fHwhaiksbSx7cmVzb2x2ZTpmdW5jdGlvbih0KXtpZih0IGluc3RhbmNlb2YgYiYmUyh0LmNvbnN0cnVjdG9yLHRoaXMpKXJldHVybiB0O3ZhciBuPVQodGhpcyksZT1uLnJlc29sdmU7cmV0dXJuIGUodCksbi5wcm9taXNlfX0pLHMocy5TK3MuRiohKGomJmUoNzMpKGZ1bmN0aW9uKHQpe2IuYWxsKHQpW1wiY2F0Y2hcIl0oTyl9KSksbSx7YWxsOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsZT1UKG4pLHI9ZS5yZXNvbHZlLG89ZS5yZWplY3QsaT1rKGZ1bmN0aW9uKCl7dmFyIGU9W10saT0wLHU9MTt2KHQsITEsZnVuY3Rpb24odCl7dmFyIGM9aSsrLGY9ITE7ZS5wdXNoKHZvaWQgMCksdSsrLG4ucmVzb2x2ZSh0KS50aGVuKGZ1bmN0aW9uKHQpe2Z8fChmPSEwLGVbY109dCwtLXV8fHIoZSkpfSxvKX0pLC0tdXx8cihlKX0pO3JldHVybiBpJiZvKGkuZXJyb3IpLGUucHJvbWlzZX0scmFjZTpmdW5jdGlvbih0KXt2YXIgbj10aGlzLGU9VChuKSxyPWUucmVqZWN0LG89ayhmdW5jdGlvbigpe3YodCwhMSxmdW5jdGlvbih0KXtuLnJlc29sdmUodCkudGhlbihlLnJlc29sdmUscil9KX0pO3JldHVybiBvJiZyKG8uZXJyb3IpLGUucHJvbWlzZX19KX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoMiksbz1lKDcpLGk9ZSg0KSx1PWUoMTEpLGM9ZSg0MSksZj1lKDc2KS5LRVksYT1lKDEyKSxzPWUoMjgpLGw9ZSgyMCkscD1lKDIxKSxoPWUoMSksdj1lKDMyKSx5PWUoMzEpLGQ9ZSg3NSksZz1lKDY2KSxtPWUoNzApLHc9ZSg2KSx4PWUoOSksYj1lKDMwKSxfPWUoMTkpLE89ZSgzOCksaj1lKDgxKSxTPWUoODApLEU9ZSg1KSxUPWUoMTUpLFA9Uy5mLGs9RS5mLEw9ai5mLE09ci5TeW1ib2wsRj1yLkpTT04sTj1GJiZGLnN0cmluZ2lmeSxBPVwicHJvdG90eXBlXCIsUj1oKFwiX2hpZGRlblwiKSxJPWgoXCJ0b1ByaW1pdGl2ZVwiKSxDPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLEc9cyhcInN5bWJvbC1yZWdpc3RyeVwiKSxXPXMoXCJzeW1ib2xzXCIpLFU9cyhcIm9wLXN5bWJvbHNcIiksRD1PYmplY3RbQV0sSz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBNLEI9ci5RT2JqZWN0LEo9IUJ8fCFCW0FdfHwhQltBXS5maW5kQ2hpbGQsWT1pJiZhKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU8oayh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGsodGhpcyxcImFcIix7dmFsdWU6N30pLmF9fSkpLmF9KT9mdW5jdGlvbih0LG4sZSl7dmFyIHI9UChELG4pO3ImJmRlbGV0ZSBEW25dLGsodCxuLGUpLHImJnQhPT1EJiZrKEQsbixyKX06ayxxPWZ1bmN0aW9uKHQpe3ZhciBuPVdbdF09TyhNW0FdKTtyZXR1cm4gbi5faz10LG59LHo9SyYmXCJzeW1ib2xcIj09dHlwZW9mIE0uaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgTX0sSD1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHQ9PT1EJiZIKFUsbixlKSx3KHQpLG49YihuLCEwKSx3KGUpLG8oVyxuKT8oZS5lbnVtZXJhYmxlPyhvKHQsUikmJnRbUl1bbl0mJih0W1JdW25dPSExKSxlPU8oZSx7ZW51bWVyYWJsZTpfKDAsITEpfSkpOihvKHQsUil8fGsodCxSLF8oMSx7fSkpLHRbUl1bbl09ITApLFkodCxuLGUpKTprKHQsbixlKX0sVj1mdW5jdGlvbih0LG4pe3codCk7Zm9yKHZhciBlLHI9ZyhuPXgobikpLG89MCxpPXIubGVuZ3RoO2k+bzspSCh0LGU9cltvKytdLG5bZV0pO3JldHVybiB0fSxRPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHZvaWQgMD09PW4/Tyh0KTpWKE8odCksbil9LFg9ZnVuY3Rpb24odCl7dmFyIG49Qy5jYWxsKHRoaXMsdD1iKHQsITApKTtyZXR1cm4hKHRoaXM9PT1EJiZvKFcsdCkmJiFvKFUsdCkpJiYoIShufHwhbyh0aGlzLHQpfHwhbyhXLHQpfHxvKHRoaXMsUikmJnRoaXNbUl1bdF0pfHxuKX0sJD1mdW5jdGlvbih0LG4pe2lmKHQ9eCh0KSxuPWIobiwhMCksdCE9PUR8fCFvKFcsbil8fG8oVSxuKSl7dmFyIGU9UCh0LG4pO3JldHVybiFlfHwhbyhXLG4pfHxvKHQsUikmJnRbUl1bbl18fChlLmVudW1lcmFibGU9ITApLGV9fSxaPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbixlPUwoeCh0KSkscj1bXSxpPTA7ZS5sZW5ndGg+aTspbyhXLG49ZVtpKytdKXx8bj09Unx8bj09Znx8ci5wdXNoKG4pO3JldHVybiByfSx0dD1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT10PT09RCxyPUwoZT9VOngodCkpLGk9W10sdT0wO3IubGVuZ3RoPnU7KSFvKFcsbj1yW3UrK10pfHxlJiYhbyhELG4pfHxpLnB1c2goV1tuXSk7cmV0dXJuIGl9O0t8fChNPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIE0pdGhyb3cgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIVwiKTt2YXIgdD1wKGFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwKSxuPWZ1bmN0aW9uKGUpe3RoaXM9PT1EJiZuLmNhbGwoVSxlKSxvKHRoaXMsUikmJm8odGhpc1tSXSx0KSYmKHRoaXNbUl1bdF09ITEpLFkodGhpcyx0LF8oMSxlKSl9O3JldHVybiBpJiZKJiZZKEQsdCx7Y29uZmlndXJhYmxlOiEwLHNldDpufSkscSh0KX0sYyhNW0FdLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rfSksUy5mPSQsRS5mPUgsZSgzOSkuZj1qLmY9WixlKDE4KS5mPVgsZSgyNikuZj10dCxpJiYhZSgxNykmJmMoRCxcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsWCwhMCksdi5mPWZ1bmN0aW9uKHQpe3JldHVybiBxKGgodCkpfSksdSh1LkcrdS5XK3UuRiohSyx7U3ltYm9sOk19KTtmb3IodmFyIG50PVwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksZXQ9MDtudC5sZW5ndGg+ZXQ7KWgobnRbZXQrK10pO2Zvcih2YXIgbnQ9VChoLnN0b3JlKSxldD0wO250Lmxlbmd0aD5ldDspeShudFtldCsrXSk7dSh1LlMrdS5GKiFLLFwiU3ltYm9sXCIse1wiZm9yXCI6ZnVuY3Rpb24odCl7cmV0dXJuIG8oRyx0Kz1cIlwiKT9HW3RdOkdbdF09TSh0KX0sa2V5Rm9yOmZ1bmN0aW9uKHQpe2lmKHoodCkpcmV0dXJuIGQoRyx0KTt0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2whXCIpfSx1c2VTZXR0ZXI6ZnVuY3Rpb24oKXtKPSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXtKPSExfX0pLHUodS5TK3UuRiohSyxcIk9iamVjdFwiLHtjcmVhdGU6USxkZWZpbmVQcm9wZXJ0eTpILGRlZmluZVByb3BlcnRpZXM6VixnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6JCxnZXRPd25Qcm9wZXJ0eU5hbWVzOlosZ2V0T3duUHJvcGVydHlTeW1ib2xzOnR0fSksRiYmdSh1LlMrdS5GKighS3x8YShmdW5jdGlvbigpe3ZhciB0PU0oKTtyZXR1cm5cIltudWxsXVwiIT1OKFt0XSl8fFwie31cIiE9Tih7YTp0fSl8fFwie31cIiE9TihPYmplY3QodCkpfSkpLFwiSlNPTlwiLHtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7aWYodm9pZCAwIT09dCYmIXoodCkpe2Zvcih2YXIgbixlLHI9W3RdLG89MTthcmd1bWVudHMubGVuZ3RoPm87KXIucHVzaChhcmd1bWVudHNbbysrXSk7cmV0dXJuIG49clsxXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYoZT1uKSwhZSYmbShuKXx8KG49ZnVuY3Rpb24odCxuKXtpZihlJiYobj1lLmNhbGwodGhpcyx0LG4pKSwheihuKSlyZXR1cm4gbn0pLHJbMV09bixOLmFwcGx5KEYscil9fX0pLE1bQV1bSV18fGUoOCkoTVtBXSxJLE1bQV0udmFsdWVPZiksbChNLFwiU3ltYm9sXCIpLGwoTWF0aCxcIk1hdGhcIiwhMCksbChyLkpTT04sXCJKU09OXCIsITApfSxmdW5jdGlvbih0LG4sZSl7ZSgzMSkoXCJhc3luY0l0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LG4sZSl7ZSgzMSkoXCJvYnNlcnZhYmxlXCIpfSxmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIGUoKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHIoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gbyh0KXtpZihzPT09c2V0VGltZW91dClyZXR1cm4gc2V0VGltZW91dCh0LDApO2lmKChzPT09ZXx8IXMpJiZzZXRUaW1lb3V0KXJldHVybiBzPXNldFRpbWVvdXQsc2V0VGltZW91dCh0LDApO3RyeXtyZXR1cm4gcyh0LDApfWNhdGNoKG4pe3RyeXtyZXR1cm4gcy5jYWxsKG51bGwsdCwwKX1jYXRjaChuKXtyZXR1cm4gcy5jYWxsKHRoaXMsdCwwKX19fWZ1bmN0aW9uIGkodCl7aWYobD09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KHQpO2lmKChsPT09cnx8IWwpJiZjbGVhclRpbWVvdXQpcmV0dXJuIGw9Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dCh0KTt0cnl7cmV0dXJuIGwodCl9Y2F0Y2gobil7dHJ5e3JldHVybiBsLmNhbGwobnVsbCx0KX1jYXRjaChuKXtyZXR1cm4gbC5jYWxsKHRoaXMsdCl9fX1mdW5jdGlvbiB1KCl7eSYmaCYmKHk9ITEsaC5sZW5ndGg/dj1oLmNvbmNhdCh2KTpkPS0xLHYubGVuZ3RoJiZjKCkpfWZ1bmN0aW9uIGMoKXtpZigheSl7dmFyIHQ9byh1KTt5PSEwO2Zvcih2YXIgbj12Lmxlbmd0aDtuOyl7Zm9yKGg9dix2PVtdOysrZDxuOyloJiZoW2RdLnJ1bigpO2Q9LTEsbj12Lmxlbmd0aH1oPW51bGwseT0hMSxpKHQpfX1mdW5jdGlvbiBmKHQsbil7dGhpcy5mdW49dCx0aGlzLmFycmF5PW59ZnVuY3Rpb24gYSgpe312YXIgcyxsLHA9dC5leHBvcnRzPXt9OyFmdW5jdGlvbigpe3RyeXtzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDplfWNhdGNoKHQpe3M9ZX10cnl7bD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnJ9Y2F0Y2godCl7bD1yfX0oKTt2YXIgaCx2PVtdLHk9ITEsZD0tMTtwLm5leHRUaWNrPWZ1bmN0aW9uKHQpe3ZhciBuPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSlmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKW5bZS0xXT1hcmd1bWVudHNbZV07di5wdXNoKG5ldyBmKHQsbikpLDEhPT12Lmxlbmd0aHx8eXx8byhjKX0sZi5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0scC50aXRsZT1cImJyb3dzZXJcIixwLmJyb3dzZXI9ITAscC5lbnY9e30scC5hcmd2PVtdLHAudmVyc2lvbj1cIlwiLHAudmVyc2lvbnM9e30scC5vbj1hLHAuYWRkTGlzdGVuZXI9YSxwLm9uY2U9YSxwLm9mZj1hLHAucmVtb3ZlTGlzdGVuZXI9YSxwLnJlbW92ZUFsbExpc3RlbmVycz1hLHAuZW1pdD1hLHAuYmluZGluZz1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0scC5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0scC5jaGRpcj1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHAudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKHQsbixlKXsoZnVuY3Rpb24obil7dmFyIHI9XCJvYmplY3RcIj09dHlwZW9mIG4/bjpcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsbz1yLnJlZ2VuZXJhdG9yUnVudGltZSYmT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocikuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKT49MCxpPW8mJnIucmVnZW5lcmF0b3JSdW50aW1lO2lmKHIucmVnZW5lcmF0b3JSdW50aW1lPXZvaWQgMCx0LmV4cG9ydHM9ZSg5OCksbylyLnJlZ2VuZXJhdG9yUnVudGltZT1pO2Vsc2UgdHJ5e2RlbGV0ZSByLnJlZ2VuZXJhdG9yUnVudGltZX1jYXRjaCh1KXtyLnJlZ2VuZXJhdG9yUnVudGltZT12b2lkIDB9fSkuY2FsbChuLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbih0LG4sZSl7KGZ1bmN0aW9uKG4sZSl7IWZ1bmN0aW9uKG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxuLGUscil7dmFyIG89T2JqZWN0LmNyZWF0ZSgobnx8aSkucHJvdG90eXBlKSx1PW5ldyB2KHJ8fFtdKTtyZXR1cm4gby5faW52b2tlPWwodCxlLHUpLG99ZnVuY3Rpb24gbyh0LG4sZSl7dHJ5e3JldHVybnt0eXBlOlwibm9ybWFsXCIsYXJnOnQuY2FsbChuLGUpfX1jYXRjaChyKXtyZXR1cm57dHlwZTpcInRocm93XCIsYXJnOnJ9fX1mdW5jdGlvbiBpKCl7fWZ1bmN0aW9uIHUoKXt9ZnVuY3Rpb24gYygpe31mdW5jdGlvbiBmKHQpe1tcIm5leHRcIixcInRocm93XCIsXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihuKXt0W25dPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9pbnZva2Uobix0KX19KX1mdW5jdGlvbiBhKHQpe3RoaXMuYXJnPXR9ZnVuY3Rpb24gcyh0KXtmdW5jdGlvbiBuKGUscixpLHUpe3ZhciBjPW8odFtlXSx0LHIpO2lmKFwidGhyb3dcIiE9PWMudHlwZSl7dmFyIGY9Yy5hcmcscz1mLnZhbHVlO3JldHVybiBzIGluc3RhbmNlb2YgYT9Qcm9taXNlLnJlc29sdmUocy5hcmcpLnRoZW4oZnVuY3Rpb24odCl7bihcIm5leHRcIix0LGksdSl9LGZ1bmN0aW9uKHQpe24oXCJ0aHJvd1wiLHQsaSx1KX0pOlByb21pc2UucmVzb2x2ZShzKS50aGVuKGZ1bmN0aW9uKHQpe2YudmFsdWU9dCxpKGYpfSx1KX11KGMuYXJnKX1mdW5jdGlvbiByKHQsZSl7ZnVuY3Rpb24gcigpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyLG8pe24odCxlLHIsbyl9KX1yZXR1cm4gaT1pP2kudGhlbihyLHIpOnIoKX1cIm9iamVjdFwiPT10eXBlb2YgZSYmZS5kb21haW4mJihuPWUuZG9tYWluLmJpbmQobikpO3ZhciBpO3RoaXMuX2ludm9rZT1yfWZ1bmN0aW9uIGwodCxuLGUpe3ZhciByPWo7cmV0dXJuIGZ1bmN0aW9uKGksdSl7aWYocj09PUUpdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtpZihyPT09VCl7aWYoXCJ0aHJvd1wiPT09aSl0aHJvdyB1O3JldHVybiBkKCl9Zm9yKDs7KXt2YXIgYz1lLmRlbGVnYXRlO2lmKGMpe2lmKFwicmV0dXJuXCI9PT1pfHxcInRocm93XCI9PT1pJiZjLml0ZXJhdG9yW2ldPT09Zyl7ZS5kZWxlZ2F0ZT1udWxsO3ZhciBmPWMuaXRlcmF0b3JbXCJyZXR1cm5cIl07aWYoZil7dmFyIGE9byhmLGMuaXRlcmF0b3IsdSk7aWYoXCJ0aHJvd1wiPT09YS50eXBlKXtpPVwidGhyb3dcIix1PWEuYXJnO2NvbnRpbnVlfX1pZihcInJldHVyblwiPT09aSljb250aW51ZX12YXIgYT1vKGMuaXRlcmF0b3JbaV0sYy5pdGVyYXRvcix1KTtpZihcInRocm93XCI9PT1hLnR5cGUpe2UuZGVsZWdhdGU9bnVsbCxpPVwidGhyb3dcIix1PWEuYXJnO2NvbnRpbnVlfWk9XCJuZXh0XCIsdT1nO3ZhciBzPWEuYXJnO2lmKCFzLmRvbmUpcmV0dXJuIHI9UyxzO2VbYy5yZXN1bHROYW1lXT1zLnZhbHVlLGUubmV4dD1jLm5leHRMb2MsZS5kZWxlZ2F0ZT1udWxsfWlmKFwibmV4dFwiPT09aSllLnNlbnQ9ZS5fc2VudD11O2Vsc2UgaWYoXCJ0aHJvd1wiPT09aSl7aWYocj09PWopdGhyb3cgcj1ULHU7ZS5kaXNwYXRjaEV4Y2VwdGlvbih1KSYmKGk9XCJuZXh0XCIsdT1nKX1lbHNlXCJyZXR1cm5cIj09PWkmJmUuYWJydXB0KFwicmV0dXJuXCIsdSk7cj1FO3ZhciBhPW8odCxuLGUpO2lmKFwibm9ybWFsXCI9PT1hLnR5cGUpe3I9ZS5kb25lP1Q6Uzt2YXIgcz17dmFsdWU6YS5hcmcsZG9uZTplLmRvbmV9O2lmKGEuYXJnIT09UClyZXR1cm4gcztlLmRlbGVnYXRlJiZcIm5leHRcIj09PWkmJih1PWcpfWVsc2VcInRocm93XCI9PT1hLnR5cGUmJihyPVQsaT1cInRocm93XCIsdT1hLmFyZyl9fX1mdW5jdGlvbiBwKHQpe3ZhciBuPXt0cnlMb2M6dFswXX07MSBpbiB0JiYobi5jYXRjaExvYz10WzFdKSwyIGluIHQmJihuLmZpbmFsbHlMb2M9dFsyXSxuLmFmdGVyTG9jPXRbM10pLHRoaXMudHJ5RW50cmllcy5wdXNoKG4pfWZ1bmN0aW9uIGgodCl7dmFyIG49dC5jb21wbGV0aW9ufHx7fTtuLnR5cGU9XCJub3JtYWxcIixkZWxldGUgbi5hcmcsdC5jb21wbGV0aW9uPW59ZnVuY3Rpb24gdih0KXt0aGlzLnRyeUVudHJpZXM9W3t0cnlMb2M6XCJyb290XCJ9XSx0LmZvckVhY2gocCx0aGlzKSx0aGlzLnJlc2V0KCEwKX1mdW5jdGlvbiB5KHQpe2lmKHQpe3ZhciBuPXRbeF07aWYobilyZXR1cm4gbi5jYWxsKHQpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQubmV4dClyZXR1cm4gdDtpZighaXNOYU4odC5sZW5ndGgpKXt2YXIgZT0tMSxyPWZ1bmN0aW9uIG8oKXtmb3IoOysrZTx0Lmxlbmd0aDspaWYobS5jYWxsKHQsZSkpcmV0dXJuIG8udmFsdWU9dFtlXSxvLmRvbmU9ITEsbztyZXR1cm4gby52YWx1ZT1nLG8uZG9uZT0hMCxvfTtyZXR1cm4gci5uZXh0PXJ9fXJldHVybntuZXh0OmR9fWZ1bmN0aW9uIGQoKXtyZXR1cm57dmFsdWU6Zyxkb25lOiEwfX12YXIgZyxtPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksdz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2w/U3ltYm9sOnt9LHg9dy5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsYj13LnRvU3RyaW5nVGFnfHxcIkBAdG9TdHJpbmdUYWdcIixfPVwib2JqZWN0XCI9PXR5cGVvZiB0LE89bi5yZWdlbmVyYXRvclJ1bnRpbWU7aWYoTylyZXR1cm4gdm9pZChfJiYodC5leHBvcnRzPU8pKTtPPW4ucmVnZW5lcmF0b3JSdW50aW1lPV8/dC5leHBvcnRzOnt9LE8ud3JhcD1yO3ZhciBqPVwic3VzcGVuZGVkU3RhcnRcIixTPVwic3VzcGVuZGVkWWllbGRcIixFPVwiZXhlY3V0aW5nXCIsVD1cImNvbXBsZXRlZFwiLFA9e30saz1jLnByb3RvdHlwZT1pLnByb3RvdHlwZTt1LnByb3RvdHlwZT1rLmNvbnN0cnVjdG9yPWMsYy5jb25zdHJ1Y3Rvcj11LGNbYl09dS5kaXNwbGF5TmFtZT1cIkdlbmVyYXRvckZ1bmN0aW9uXCIsTy5pc0dlbmVyYXRvckZ1bmN0aW9uPWZ1bmN0aW9uKHQpe3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnQuY29uc3RydWN0b3I7cmV0dXJuISFuJiYobj09PXV8fFwiR2VuZXJhdG9yRnVuY3Rpb25cIj09PShuLmRpc3BsYXlOYW1lfHxuLm5hbWUpKX0sTy5tYXJrPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsYyk6KHQuX19wcm90b19fPWMsYiBpbiB0fHwodFtiXT1cIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSx0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGspLHR9LE8uYXdyYXA9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBhKHQpfSxmKHMucHJvdG90eXBlKSxPLmFzeW5jPWZ1bmN0aW9uKHQsbixlLG8pe3ZhciBpPW5ldyBzKHIodCxuLGUsbykpO3JldHVybiBPLmlzR2VuZXJhdG9yRnVuY3Rpb24obik/aTppLm5leHQoKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiB0LmRvbmU/dC52YWx1ZTppLm5leHQoKX0pfSxmKGspLGtbeF09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sa1tiXT1cIkdlbmVyYXRvclwiLGsudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgR2VuZXJhdG9yXVwifSxPLmtleXM9ZnVuY3Rpb24odCl7dmFyIG49W107Zm9yKHZhciBlIGluIHQpbi5wdXNoKGUpO3JldHVybiBuLnJldmVyc2UoKSxmdW5jdGlvbiByKCl7Zm9yKDtuLmxlbmd0aDspe3ZhciBlPW4ucG9wKCk7aWYoZSBpbiB0KXJldHVybiByLnZhbHVlPWUsci5kb25lPSExLHJ9cmV0dXJuIHIuZG9uZT0hMCxcbnJ9fSxPLnZhbHVlcz15LHYucHJvdG90eXBlPXtjb25zdHJ1Y3Rvcjp2LHJlc2V0OmZ1bmN0aW9uKHQpe2lmKHRoaXMucHJldj0wLHRoaXMubmV4dD0wLHRoaXMuc2VudD10aGlzLl9zZW50PWcsdGhpcy5kb25lPSExLHRoaXMuZGVsZWdhdGU9bnVsbCx0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChoKSwhdClmb3IodmFyIG4gaW4gdGhpcylcInRcIj09PW4uY2hhckF0KDApJiZtLmNhbGwodGhpcyxuKSYmIWlzTmFOKCtuLnNsaWNlKDEpKSYmKHRoaXNbbl09Zyl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLmRvbmU9ITA7dmFyIHQ9dGhpcy50cnlFbnRyaWVzWzBdLG49dC5jb21wbGV0aW9uO2lmKFwidGhyb3dcIj09PW4udHlwZSl0aHJvdyBuLmFyZztyZXR1cm4gdGhpcy5ydmFsfSxkaXNwYXRjaEV4Y2VwdGlvbjpmdW5jdGlvbih0KXtmdW5jdGlvbiBuKG4scil7cmV0dXJuIGkudHlwZT1cInRocm93XCIsaS5hcmc9dCxlLm5leHQ9biwhIXJ9aWYodGhpcy5kb25lKXRocm93IHQ7Zm9yKHZhciBlPXRoaXMscj10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7cj49MDstLXIpe3ZhciBvPXRoaXMudHJ5RW50cmllc1tyXSxpPW8uY29tcGxldGlvbjtpZihcInJvb3RcIj09PW8udHJ5TG9jKXJldHVybiBuKFwiZW5kXCIpO2lmKG8udHJ5TG9jPD10aGlzLnByZXYpe3ZhciB1PW0uY2FsbChvLFwiY2F0Y2hMb2NcIiksYz1tLmNhbGwobyxcImZpbmFsbHlMb2NcIik7aWYodSYmYyl7aWYodGhpcy5wcmV2PG8uY2F0Y2hMb2MpcmV0dXJuIG4oby5jYXRjaExvYywhMCk7aWYodGhpcy5wcmV2PG8uZmluYWxseUxvYylyZXR1cm4gbihvLmZpbmFsbHlMb2MpfWVsc2UgaWYodSl7aWYodGhpcy5wcmV2PG8uY2F0Y2hMb2MpcmV0dXJuIG4oby5jYXRjaExvYywhMCl9ZWxzZXtpZighYyl0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtpZih0aGlzLnByZXY8by5maW5hbGx5TG9jKXJldHVybiBuKG8uZmluYWxseUxvYyl9fX19LGFicnVwdDpmdW5jdGlvbih0LG4pe2Zvcih2YXIgZT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7ZT49MDstLWUpe3ZhciByPXRoaXMudHJ5RW50cmllc1tlXTtpZihyLnRyeUxvYzw9dGhpcy5wcmV2JiZtLmNhbGwocixcImZpbmFsbHlMb2NcIikmJnRoaXMucHJldjxyLmZpbmFsbHlMb2Mpe3ZhciBvPXI7YnJlYWt9fW8mJihcImJyZWFrXCI9PT10fHxcImNvbnRpbnVlXCI9PT10KSYmby50cnlMb2M8PW4mJm48PW8uZmluYWxseUxvYyYmKG89bnVsbCk7dmFyIGk9bz9vLmNvbXBsZXRpb246e307cmV0dXJuIGkudHlwZT10LGkuYXJnPW4sbz90aGlzLm5leHQ9by5maW5hbGx5TG9jOnRoaXMuY29tcGxldGUoaSksUH0sY29tcGxldGU6ZnVuY3Rpb24odCxuKXtpZihcInRocm93XCI9PT10LnR5cGUpdGhyb3cgdC5hcmc7XCJicmVha1wiPT09dC50eXBlfHxcImNvbnRpbnVlXCI9PT10LnR5cGU/dGhpcy5uZXh0PXQuYXJnOlwicmV0dXJuXCI9PT10LnR5cGU/KHRoaXMucnZhbD10LmFyZyx0aGlzLm5leHQ9XCJlbmRcIik6XCJub3JtYWxcIj09PXQudHlwZSYmbiYmKHRoaXMubmV4dD1uKX0sZmluaXNoOmZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7bj49MDstLW4pe3ZhciBlPXRoaXMudHJ5RW50cmllc1tuXTtpZihlLmZpbmFsbHlMb2M9PT10KXJldHVybiB0aGlzLmNvbXBsZXRlKGUuY29tcGxldGlvbixlLmFmdGVyTG9jKSxoKGUpLFB9fSxcImNhdGNoXCI6ZnVuY3Rpb24odCl7Zm9yKHZhciBuPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTtuPj0wOy0tbil7dmFyIGU9dGhpcy50cnlFbnRyaWVzW25dO2lmKGUudHJ5TG9jPT09dCl7dmFyIHI9ZS5jb21wbGV0aW9uO2lmKFwidGhyb3dcIj09PXIudHlwZSl7dmFyIG89ci5hcmc7aChlKX1yZXR1cm4gb319dGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpfSxkZWxlZ2F0ZVlpZWxkOmZ1bmN0aW9uKHQsbixlKXtyZXR1cm4gdGhpcy5kZWxlZ2F0ZT17aXRlcmF0b3I6eSh0KSxyZXN1bHROYW1lOm4sbmV4dExvYzplfSxQfX19KFwib2JqZWN0XCI9PXR5cGVvZiBuP246XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGY/c2VsZjp0aGlzKX0pLmNhbGwobixmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpLGUoOTYpKX1dKTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID1cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgY29udHJvbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAgIGNvbnRyb2xPcmRlcjogW1xuICAgICAgICAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2hpZGRlbicsXG4gICAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3RleHRhcmVhJ1xuICAgICAgXSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAvLyBBcnJheSBvZiBmaWVsZHMgdG8gZGlzYWJsZVxuICAgICAgZGlzYWJsZUZpZWxkczogW10sXG4gICAgICBkaXNhYmxlZEF0dHJzOiBbXSxcbiAgICAgIGRpc2FibGVkQWN0aW9uQnV0dG9uczogW10sXG4gICAgICBlZGl0T25BZGQ6IGZhbHNlLFxuICAgICAgLy8gVW5lZGl0YWJsZSBmaWVsZHMgb3Igb3RoZXIgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBhcHBlYXJcbiAgICAgIC8vIGJlZm9yZSBhbmQgYWZ0ZXIgcmVndWxhciBmaWVsZHM6XG4gICAgICAvLyBhcnJheSBvZiBvYmplY3RzIHdpdGggZmllbGRzIHZhbHVlc1xuICAgICAgLy8gZXg6XG4gICAgICAvLyBkZWZhdWx0RmllbGRzOiBbe1xuICAgICAgLy8gICBsYWJlbDogJ0ZpcnN0IE5hbWUnLFxuICAgICAgLy8gICBuYW1lOiAnZmlyc3QtbmFtZScsXG4gICAgICAvLyAgIHJlcXVpcmVkOiAndHJ1ZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnWW91ciBmaXJzdCBuYW1lJyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9LCB7XG4gICAgICAvLyAgIGxhYmVsOiAnUGhvbmUnLFxuICAgICAgLy8gICBuYW1lOiAncGhvbmUnLFxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ0hvdyBjYW4gd2UgcmVhY2ggeW91PycsXG4gICAgICAvLyAgIHR5cGU6ICd0ZXh0J1xuICAgICAgLy8gfV0sXG4gICAgICBkZWZhdWx0RmllbGRzOiBbXSxcbiAgICAgIGZpZWxkczogW10sXG4gICAgICBmaWVsZFJlbW92ZVdhcm46IGZhbHNlLFxuICAgICAgaW5wdXRTZXRzOiBbXSxcbiAgICAgIHJvbGVzOiB7XG4gICAgICAgIDE6ICdBZG1pbmlzdHJhdG9yJ1xuICAgICAgfSxcbiAgICAgIG5vdGlmeToge1xuICAgICAgICBlcnJvcjogbWVzc2FnZSA9PiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpLFxuICAgICAgICBzdWNjZXNzOiBtZXNzYWdlID0+IGNvbnNvbGUubG9nKG1lc3NhZ2UpLFxuICAgICAgICB3YXJuaW5nOiBtZXNzYWdlID0+IGNvbnNvbGUud2FybihtZXNzYWdlKVxuICAgICAgfSxcbiAgICAgIG9uU2F2ZTogKGV2dCwgZm9ybURhdGEpID0+IG51bGwsXG4gICAgICBvbkNsZWFyQWxsOiAoKSA9PiBudWxsLFxuICAgICAgcHJlcGVuZDogZmFsc2UsXG4gICAgICBzb3J0YWJsZUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgIHN0aWNreUNvbnRyb2xzOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlczoge30sXG4gICAgICBzaG93QWN0aW9uQnV0dG9uczogdHJ1ZSxcbiAgICAgIHR5cGVVc2VyRGlzYWJsZWRBdHRyczoge30sXG4gICAgICB0eXBlVXNlckF0dHJzOiB7fSxcbiAgICAgIHR5cGVVc2VyRXZlbnRzOiB7fSxcbiAgICAgIHByZWZpeDogJ2Zvcm0tYnVpbGRlci0nXG4gICAgfTtcblxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEkxOG4gPSB7XG4gICAgICBsb2NhdGlvbjogJ2h0dHBzOi8vZm9ybWJ1aWxkZXIub25saW5lL2Fzc2V0cy9sYW5nLycsXG4gICAgICBsYW5nczogW1xuICAgICAgICAnZW4tVVMnXG4gICAgICBdLFxuICAgICAgcHJlbG9hZGVkOiB7XG4gICAgICAgICdlbi1VUyc6IHtcbiAgICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICAgIGFsbEZpZWxkc1JlbW92ZWQ6ICdBbGwgZmllbGRzIHdlcmUgcmVtb3ZlZC4nLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVGaWxlczogJ0FsbG93IHVzZXJzIHRvIHVwbG9hZCBtdWx0aXBsZSBmaWxlcycsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBidXR0b246ICdCdXR0b24nLFxuICAgICAgICAgIGNhbm5vdEJlRW1wdHk6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcbiAgICAgICAgICBjaGVja2JveGVzOiAnQ2hlY2tib3hlcycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXG4gICAgICAgICAgY2xlYXI6ICdDbGVhcicsXG4gICAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxuICAgICAgICAgIGNvcHk6ICdDb3B5IFRvIENsaXBib2FyZCcsXG4gICAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxuICAgICAgICAgIGRhdGVGaWVsZDogJ0RhdGUgRmllbGQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgIGRldk1vZGU6ICdEZXZlbG9wZXIgTW9kZScsXG4gICAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcbiAgICAgICAgICBlZGl0WE1MOiAnRWRpdCBYTUwnLFxuICAgICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxuICAgICAgICAgIGZpZWxkTm9uRWRpdGFibGU6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlZGl0ZWQuJyxcbiAgICAgICAgICBmaWVsZFJlbW92ZVdhcm5pbmc6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgZmllbGQ/JyxcbiAgICAgICAgICBmaWxlVXBsb2FkOiAnRmlsZSBVcGxvYWQnLFxuICAgICAgICAgIGZvcm1VcGRhdGVkOiAnRm9ybSBVcGRhdGVkJyxcbiAgICAgICAgICBnZXRTdGFydGVkOiAnRHJhZyBhIGZpZWxkIGZyb20gdGhlIHJpZ2h0IHRvIHRoaXMgYXJlYScsXG4gICAgICAgICAgaGVhZGVyOiAnSGVhZGVyJyxcbiAgICAgICAgICBoaWRlOiAnRWRpdCcsXG4gICAgICAgICAgaGlkZGVuOiAnSGlkZGVuIElucHV0JyxcbiAgICAgICAgICBpbmxpbmU6ICdJbmxpbmUnLFxuICAgICAgICAgIGlubGluZURlc2M6ICdEaXNwbGF5IHt0eXBlfSBpbmxpbmUnLFxuICAgICAgICAgIGxhYmVsOiAnTGFiZWwnLFxuICAgICAgICAgIGxhYmVsRW1wdHk6ICdGaWVsZCBMYWJlbCBjYW5ub3QgYmUgZW1wdHknLFxuICAgICAgICAgIGxpbWl0Um9sZTogJ0xpbWl0IGFjY2VzcyB0byBvbmUgb3IgbW9yZSBvZiB0aGUgZm9sbG93aW5nIHJvbGVzOicsXG4gICAgICAgICAgbWFuZGF0b3J5OiAnTWFuZGF0b3J5JyxcbiAgICAgICAgICBtYXhsZW5ndGg6ICdNYXggTGVuZ3RoJyxcbiAgICAgICAgICBtaW5PcHRpb25NZXNzYWdlOiAnVGhpcyBmaWVsZCByZXF1aXJlcyBhIG1pbmltdW0gb2YgMiBvcHRpb25zJyxcbiAgICAgICAgICBtdWx0aXBsZUZpbGVzOiAnTXVsdGlwbGUgRmlsZXMnLFxuICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICBubzogJ05vJyxcbiAgICAgICAgICBub0ZpZWxkc1RvQ2xlYXI6ICdUaGVyZSBhcmUgbm8gZmllbGRzIHRvIGNsZWFyJyxcbiAgICAgICAgICBudW1iZXI6ICdOdW1iZXInLFxuICAgICAgICAgIG9mZjogJ09mZicsXG4gICAgICAgICAgb246ICdPbicsXG4gICAgICAgICAgb3B0aW9uOiAnT3B0aW9uJyxcbiAgICAgICAgICBvcHRpb25zOiAnT3B0aW9ucycsXG4gICAgICAgICAgb3B0aW9uYWw6ICdvcHRpb25hbCcsXG4gICAgICAgICAgb3B0aW9uTGFiZWxQbGFjZWhvbGRlcjogJ0xhYmVsJyxcbiAgICAgICAgICBvcHRpb25WYWx1ZVBsYWNlaG9sZGVyOiAnVmFsdWUnLFxuICAgICAgICAgIG9wdGlvbkVtcHR5OiAnT3B0aW9uIHZhbHVlIHJlcXVpcmVkJyxcbiAgICAgICAgICBvdGhlcjogJ090aGVyJyxcbiAgICAgICAgICBwYXJhZ3JhcGg6ICdQYXJhZ3JhcGgnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGxhY2Vob2xkZXInLFxuICAgICAgICAgICdwbGFjZWhvbGRlci52YWx1ZSc6ICdWYWx1ZScsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLmxhYmVsJzogJ0xhYmVsJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIudGV4dCc6ICcnLFxuICAgICAgICAgICdwbGFjZWhvbGRlci50ZXh0YXJlYSc6ICcnLFxuICAgICAgICAgICdwbGFjZWhvbGRlci5lbWFpbCc6ICdFbnRlciB5b3UgZW1haWwnLFxuICAgICAgICAgICdwbGFjZWhvbGRlci5wbGFjZWhvbGRlcic6ICcnLFxuICAgICAgICAgICdwbGFjZWhvbGRlci5jbGFzc05hbWUnOiAnc3BhY2Ugc2VwYXJhdGVkIGNsYXNzZXMnLFxuICAgICAgICAgICdwbGFjZWhvbGRlci5wYXNzd29yZCc6ICdFbnRlciB5b3VyIHBhc3N3b3JkJyxcbiAgICAgICAgICBwcmV2aWV3OiAnUHJldmlldycsXG4gICAgICAgICAgcmFkaW9Hcm91cDogJ1JhZGlvIEdyb3VwJyxcbiAgICAgICAgICByYWRpbzogJ1JhZGlvJyxcbiAgICAgICAgICByZW1vdmVNZXNzYWdlOiAnUmVtb3ZlIEVsZW1lbnQnLFxuICAgICAgICAgIHJlbW92ZU9wdGlvbjogJ1JlbW92ZSBPcHRpb24nLFxuICAgICAgICAgIHJlbW92ZTogJyYjMjE1OycsXG4gICAgICAgICAgcmVxdWlyZWQ6ICdSZXF1aXJlZCcsXG4gICAgICAgICAgcmljaFRleHQ6ICdSaWNoIFRleHQgRWRpdG9yJyxcbiAgICAgICAgICByb2xlczogJ0FjY2VzcycsXG4gICAgICAgICAgcm93czogJ1Jvd3MnLFxuICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICBzZWxlY3RPcHRpb25zOiAnT3B0aW9ucycsXG4gICAgICAgICAgc2VsZWN0OiAnU2VsZWN0JyxcbiAgICAgICAgICBzZWxlY3RDb2xvcjogJ1NlbGVjdCBDb2xvcicsXG4gICAgICAgICAgc2VsZWN0aW9uc01lc3NhZ2U6ICdBbGxvdyBNdWx0aXBsZSBTZWxlY3Rpb25zJyxcbiAgICAgICAgICBzaXplOiAnU2l6ZScsXG4gICAgICAgICAgJ3NpemUueHMnOiAnRXh0cmEgU21hbGwnLFxuICAgICAgICAgICdzaXplLnNtJzogJ1NtYWxsJyxcbiAgICAgICAgICAnc2l6ZS5tJzogJ0RlZmF1bHQnLFxuICAgICAgICAgICdzaXplLmxnJzogJ0xhcmdlJyxcbiAgICAgICAgICBzdHlsZTogJ1N0eWxlJyxcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIGJ0bjoge1xuICAgICAgICAgICAgICAnZGVmYXVsdCc6ICdEZWZhdWx0JyxcbiAgICAgICAgICAgICAgZGFuZ2VyOiAnRGFuZ2VyJyxcbiAgICAgICAgICAgICAgaW5mbzogJ0luZm8nLFxuICAgICAgICAgICAgICBwcmltYXJ5OiAnUHJpbWFyeScsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgd2FybmluZzogJ1dhcm5pbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWJ0eXBlOiAnVHlwZScsXG4gICAgICAgICAgdGV4dDogJ1RleHQgRmllbGQnLFxuICAgICAgICAgIHRleHRBcmVhOiAnVGV4dCBBcmVhJyxcbiAgICAgICAgICB0b2dnbGU6ICdUb2dnbGUnLFxuICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nIScsXG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgICAgdmlld0pTT046ICd7ICB9JyxcbiAgICAgICAgICB2aWV3WE1MOiAnJmx0Oy8mZ3Q7JyxcbiAgICAgICAgICB5ZXM6ICdZZXMnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge307XG4iLCJleHBvcnQgY29uc3QgaW5zdGFuY2VEYXRhID0ge307XG5cbmV4cG9ydCBjbGFzcyBEYXRhIHtcbiAgY29uc3RydWN0b3IoZm9ybUlEKSB7XG4gICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xuICAgIHRoaXMuZm9ybUlEID0gZm9ybUlEO1xuICAgIHRoaXMubGF5b3V0ID0gJyc7XG4gICAgaW5zdGFuY2VEYXRhW2Zvcm1JRF0gPSB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdmFpbGFibGVmaWVsZHMgPSB7fTtcbiIsIlxuZXhwb3J0IGNvbnN0IGluc3RhbmNlRG9tID0ge307XG5leHBvcnQgY29uc3QgZGVmYXVsdFN1YnR5cGVzID0ge1xuICAgICAgdGV4dDogWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ2NvbG9yJywgJ3RlbCddLFxuICAgICAgaGVhZGVyOiBbJ2gxJywgJ2gyJywgJ2gzJ10sXG4gICAgICBidXR0b246IFsnYnV0dG9uJywgJ3N1Ym1pdCcsICdyZXNldCddLFxuICAgICAgcGFyYWdyYXBoOiBbJ3AnLCAnYWRkcmVzcycsICdibG9ja3F1b3RlJywgJ2NhbnZhcycsICdvdXRwdXQnXSxcbiAgICAgIHRleHRhcmVhOiBbJ3RleHRhcmVhJywgJ3F1aWxsJ11cbiAgICB9O1xuXG5cbmV4cG9ydCBjb25zdCBlbXB0eSA9IGVsZW1lbnQgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlciA9IChlbGVtcywgdGVybSwgc2hvdyA9IHRydWUpID0+IHtcbiAgbGV0IGZpbHRlcmVkRWxlbXMgPSBbXTtcbiAgbGV0IHRvZ2dsZSA9IFsnbm9uZScsICdibG9jayddO1xuXG4gIGlmIChzaG93KSB7XG4gICAgdG9nZ2xlID0gdG9nZ2xlLnJldmVyc2UoKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBlbGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCB0eHQgPSBlbGVtc1tpXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0eHQuaW5kZXhPZih0ZXJtLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgZWxlbXNbaV0uc3R5bGUuZGlzcGxheSA9IHRvZ2dsZVswXTtcbiAgICAgIGZpbHRlcmVkRWxlbXMucHVzaChlbGVtc1tpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSB0b2dnbGVbMV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkRWxlbXM7XG59O1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uRmllbGRzID0gW1xuICAgICAgJ3NlbGVjdCcsXG4gICAgICAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICdyYWRpby1ncm91cCcsXG4gICAgICAnYXV0b2NvbXBsZXRlJ1xuICAgIF07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25GaWVsZHNSZWdFeCA9IG5ldyBSZWdFeHAoYCgke29wdGlvbkZpZWxkcy5qb2luKCd8Jyl9KWApO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tIHtcbiAgY29uc3RydWN0b3IoZm9ybUlEKSB7XG4gICAgdGhpcy5vcHRpb25GaWVsZHMgPSBvcHRpb25GaWVsZHM7XG4gICAgdGhpcy5vcHRpb25GaWVsZHNSZWdFeCA9IG9wdGlvbkZpZWxkc1JlZ0V4O1xuXG4gICAgdGhpcy5zdWJ0eXBlcyA9IGRlZmF1bHRTdWJ0eXBlcztcblxuICAgIC8qKlxuICAgICAqIFV0aWwgdG8gcmVtb3ZlIGNvbnRlbnRzIG9mIERPTSBPYmplY3RcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGVsZW1lbnQgd2l0aCBpdHMgY2hpbGRyZW4gcmVtb3ZlZFxuICAgICAqL1xuICAgIHRoaXMuZW1wdHkgPSBlbXB0eTtcblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3Igc2hvdyBhbiBBcnJheSBvciBIVE1MQ29sbGVjdGlvbiBvZiBlbGVtZW50c1xuICAgICAqIEBwYXJhbSAge0FycmF5fSAgIGVsZW1zXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgdGVybSAgbWF0Y2ggdGV4dENvbnRlbnQgdG8gdGhpcyB0ZXJtXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gc2hvdyAgb3IgaGlkZSBlbGVtZW50c1xuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIGZpbHRlcmVkIGVsZW1lbnRzXG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXI7XG5cbiAgICBpbnN0YW5jZURvbVtmb3JtSURdID0gdGhpcztcbiAgICByZXR1cm4gaW5zdGFuY2VEb21bZm9ybUlEXTtcbiAgfVxufVxuIiwiLyoqXG4gKiBGb3JtIEJ1aWxkZXIgZXZlbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHZhcmlvdXMgZXZlbnRzIHRvIGJlIHRyaWdnZXJcbiAqL1xuLy8gZnVuY3Rpb24gZmJFdmVudHMoKXtcbiAgY29uc3QgZXZlbnRzID0ge307XG5cbiAgZXZlbnRzLmxvYWRlZCA9IG5ldyBFdmVudCgnbG9hZGVkJyk7XG4gIGV2ZW50cy52aWV3RGF0YSA9IG5ldyBFdmVudCgndmlld0RhdGEnKTtcbiAgZXZlbnRzLnVzZXJEZWNsaW5lZCA9IG5ldyBFdmVudCgndXNlckRlY2xpbmVkJyk7XG4gIGV2ZW50cy5tb2RhbENsb3NlZCA9IG5ldyBFdmVudCgnbW9kYWxDbG9zZWQnKTtcbiAgZXZlbnRzLm1vZGFsT3BlbmVkID0gbmV3IEV2ZW50KCdtb2RhbE9wZW5lZCcpO1xuICBldmVudHMuZm9ybVNhdmVkID0gbmV3IEV2ZW50KCdmb3JtU2F2ZWQnKTtcbiAgZXZlbnRzLmZpZWxkQWRkZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkQWRkZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVtb3ZlZCA9IG5ldyBFdmVudCgnZmllbGRSZW1vdmVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbmRlcmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbmRlcmVkJyk7XG5cbi8vICAgcmV0dXJuIGV2ZW50cztcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xuIiwiaW1wb3J0IERvbSBmcm9tICcuL2RvbSc7XG5pbXBvcnQge1xuICBEYXRhLFxuICBhdmFpbGFibGVmaWVsZHMgYXMgYUZpZWxkc1xufSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IG1pMThuIGZyb20gJ21pMThuJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7ZGVmYXVsdE9wdGlvbnMsIGRlZmF1bHRJMThuLCBjb25maWd9IGZyb20gJy4vY29uZmlnJztcblxucmVxdWlyZSgnLi9wb2x5ZmlsbHMuanMnKS5kZWZhdWx0O1xuXG5sZXQgaW5zdGFuY2VUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmNvbnN0IEZvcm1CdWlsZGVyID0gZnVuY3Rpb24ob3B0cywgZWxlbWVudCkge1xuICBjb25zdCBmb3JtQnVpbGRlciA9IHRoaXM7XG4gIGNvbnN0IGkxOG4gPSBtaTE4bi5jdXJyZW50O1xuICBjb25zdCBmb3JtSUQgPSAnZnJtYi0nICsgaW5zdGFuY2VUaW1lKys7XG4gIGNvbnN0IGRhdGEgPSBuZXcgRGF0YShmb3JtSUQpO1xuICBjb25zdCBkID0gbmV3IERvbShmb3JtSUQpO1xuICBjb25zdCBoZWxwZXJzID0gbmV3IEhlbHBlcnMoZm9ybUlEKTtcbiAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcblxuICBjb25zdCBvcmlnaW5hbE9wdHMgPSBvcHRzO1xuXG4gIG9wdHMgPSBoZWxwZXJzLnByb2Nlc3NPcHRpb25zKG9wdHMpO1xuXG4gIGNvbnN0IHN1YnR5cGVzID0gY29uZmlnLnN1YnR5cGVzID0gaGVscGVycy5wcm9jZXNzU3VidHlwZXMob3B0cy5zdWJ0eXBlcyk7XG4gIGhlbHBlcnMuZWRpdG9yVUkoZm9ybUlEKTtcblxuICBsZXQgJHN0YWdlID0gJChkLnN0YWdlKTtcblxuICBkYXRhLmxheW91dCA9IGhlbHBlcnMuZWRpdG9yTGF5b3V0KG9wdHMuY29udHJvbFBvc2l0aW9uKTtcbiAgZGF0YS5mb3JtSUQgPSBmb3JtSUQ7XG4gIGRhdGEubGFzdElEID0gYCR7ZGF0YS5mb3JtSUR9LWZsZC0xYDtcblxuICBsZXQgZnJtYkZpZWxkcyA9IGhlbHBlcnMub3JkZXJGaWVsZHMob3B0cy5maWVsZHMpO1xuXG4gIGlmIChvcHRzLmRpc2FibGVGaWVsZHMpIHtcbiAgICAvLyByZW1vdmUgZGlzYWJsZWRGaWVsZHNcbiAgICBmcm1iRmllbGRzID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShmaWVsZC5hdHRycy50eXBlLCBvcHRzLmRpc2FibGVGaWVsZHMpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgIGQuY29udHJvbHMuY2xhc3NMaXN0LmFkZCgnc29ydC1lbmFibGVkJyk7XG4gIH1cblxuICBsZXQgJGNiVUwgPSAkKGQuY29udHJvbHMpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBmbXJiRmllbGRzXG4gIHV0aWxzLmZvckVhY2goZnJtYkZpZWxkcywgKGkpID0+IHtcbiAgICBsZXQge2F0dHJzLCBpY29uLCAuLi5maWVsZH0gPSBmcm1iRmllbGRzW2ldO1xuICAgIGxldCBjb250cm9sTGFiZWwgPSBmaWVsZC5sYWJlbDtcbiAgICBsZXQgaWNvbkNsYXNzTmFtZSA9ICFpY29uID8gYGljb24tJHthdHRycy5uYW1lIHx8IGF0dHJzLnR5cGV9YCA6ICcnO1xuICAgIGlmIChpY29uKSB7XG4gICAgICBjb250cm9sTGFiZWwgPSBgPHNwYW4gY2xhc3M9XCJjb250cm9sLWljb25cIj4ke2ljb259PC9zcGFuPiR7ZmllbGQubGFiZWx9YDtcbiAgICB9XG4gICAgbGV0IG5ld0ZpZWxkQ29udHJvbCA9IG0oJ2xpJyxcbiAgICAgIG0oJ3NwYW4nLCBjb250cm9sTGFiZWwpLFxuICAgICAge2NsYXNzTmFtZTogYCR7aWNvbkNsYXNzTmFtZX0gaW5wdXQtY29udHJvbCBpbnB1dC1jb250cm9sLSR7aX1gfVxuICAgICk7XG5cbiAgICBhRmllbGRzW2F0dHJzLnR5cGVdID0gZnJtYkZpZWxkc1tpXTtcbiAgICBuZXdGaWVsZENvbnRyb2wuZGF0YXNldC50eXBlID0gYXR0cnMudHlwZTtcbiAgICBkLmNvbnRyb2xzLmFwcGVuZENoaWxkKG5ld0ZpZWxkQ29udHJvbCk7XG4gIH0pO1xuXG4gIGlmIChvcHRzLmlucHV0U2V0cy5sZW5ndGgpIHtcbiAgICAkKCc8bGkvPicsIHsnY2xhc3MnOiAnZmItc2VwYXJhdG9yJ30pLmh0bWwoJzxocj4nKS5hcHBlbmRUbygkY2JVTCk7XG4gICAgb3B0cy5pbnB1dFNldHMuZm9yRWFjaCgoc2V0LCBpKSA9PiB7XG4gICAgICBzZXQubmFtZSA9IHNldC5uYW1lIHx8IHV0aWxzLm1ha2VDbGFzc05hbWUoc2V0LmxhYmVsKTtcbiAgICAgIGxldCBpbnB1dFNldCA9IG0oJ2xpJywgc2V0LmxhYmVsLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYGlucHV0LXNldC1jb250cm9sIGlucHV0LXNldC0ke2l9YCxcbiAgICAgICAgdHlwZTogc2V0Lm5hbWVcbiAgICAgIH0pO1xuICAgICAgJChpbnB1dFNldCkuYXBwZW5kVG8oJGNiVUwpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU29ydGFibGUgZmllbGRzXG4gICRzdGFnZS5zb3J0YWJsZSh7XG4gICAgY3Vyc29yOiAnbW92ZScsXG4gICAgb3BhY2l0eTogMC45LFxuICAgIHJldmVydDogMTUwLFxuICAgIGJlZm9yZVN0b3A6IChldnQsIHVpKSA9PiBoZWxwZXJzLmJlZm9yZVN0b3AuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcbiAgICBzdGFydDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RhcnRNb3ZpbmcuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcbiAgICBzdG9wOiAoZXZ0LCB1aSkgPT4gaGVscGVycy5zdG9wTW92aW5nLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgY2FuY2VsOiAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIC5kaXNhYmxlZC1maWVsZCwgLmZvcm0tZWxlbWVudHMsIC5idG4sIGJ1dHRvbicsXG4gICAgcGxhY2Vob2xkZXI6ICdmcm1iLXBsYWNlaG9sZGVyJyxcbiAgfSk7XG5cbiAgLy8gQ29udHJvbEJveCB3aXRoIGRpZmZlcmVudCBmaWVsZHNcbiAgJGNiVUwuc29ydGFibGUoe1xuICAgIGhlbHBlcjogJ2Nsb25lJyxcbiAgICBvcGFjaXR5OiAwLjksXG4gICAgY29ubmVjdFdpdGg6ICRzdGFnZSxcbiAgICBjYW5jZWw6ICcuZmItc2VwYXJhdG9yJyxcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBzY3JvbGw6IGZhbHNlLFxuICAgIHBsYWNlaG9sZGVyOiAndWktc3RhdGUtaGlnaGxpZ2h0JyxcbiAgICBzdGFydDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RhcnRNb3ZpbmcuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcbiAgICBzdG9wOiAoZXZ0LCB1aSkgPT4gaGVscGVycy5zdG9wTW92aW5nLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgcmV2ZXJ0OiAxNTAsXG4gICAgYmVmb3JlU3RvcDogKGV2dCwgdWkpID0+IGhlbHBlcnMuYmVmb3JlU3RvcC5jYWxsKGhlbHBlcnMsIGV2dCwgdWkpLFxuICAgIGRpc3RhbmNlOiAzLFxuICAgIHVwZGF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICBpZiAoaGVscGVycy5kb0NhbmNlbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh1aS5pdGVtLnBhcmVudCgpWzBdID09PSBkLnN0YWdlKSB7XG4gICAgICAgIGhlbHBlcnMuZG9DYW5jZWwgPSB0cnVlO1xuICAgICAgICBwcm9jZXNzQ29udHJvbCh1aS5pdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlbHBlcnMuc2V0RmllbGRPcmRlcigkY2JVTCk7XG4gICAgICAgIGhlbHBlcnMuZG9DYW5jZWwgPSAhb3B0cy5zb3J0YWJsZUNvbnRyb2xzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHByb2Nlc3NDb250cm9sID0gY29udHJvbCA9PiB7XG4gICAgaWYgKGNvbnRyb2xbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1zZXQtY29udHJvbCcpKSB7XG4gICAgICBsZXQgaW5wdXRTZXRzID0gW107XG4gICAgICBsZXQgaW5wdXRTZXQgPSBvcHRzLmlucHV0U2V0cy5maWx0ZXIoc2V0ID0+XG4gICAgICAgIHNldC5uYW1lID09PSBjb250cm9sWzBdLnR5cGUpWzBdO1xuICAgICAgaWYgKGlucHV0U2V0LnNob3dIZWFkZXIpIHtcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICAgICAgc3VidHlwZTogJ2gyJyxcbiAgICAgICAgICAgIGlkOiBpbnB1dFNldC5uYW1lLFxuICAgICAgICAgICAgbGFiZWw6IGlucHV0U2V0LmxhYmVsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbnB1dFNldHMucHVzaChoZWFkZXIpO1xuICAgICAgfVxuICAgICAgaW5wdXRTZXRzLnB1c2goLi4uaW5wdXRTZXQuZmllbGRzKTtcbiAgICAgIGlucHV0U2V0cy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCwgdHJ1ZSk7XG4gICAgICAgIGlmIChoZWxwZXJzLnN0b3BJbmRleCB8fCBoZWxwZXJzLnN0b3BJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGhlbHBlcnMuc3RvcEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVwRmllbGRWYXJzKGNvbnRyb2wsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBkLmVkaXRvcldyYXAgPSBtKCdkaXYnLCBudWxsLCB7XG4gICAgaWQ6IGAke2RhdGEuZm9ybUlEfS1mb3JtLXdyYXBgLFxuICAgIGNsYXNzTmFtZTogJ2Zvcm0td3JhcCBmb3JtLWJ1aWxkZXInICsgdXRpbHMubW9iaWxlQ2xhc3MoKVxuICB9KTtcblxuICBsZXQgJGVkaXRvcldyYXAgPSAkKGQuZWRpdG9yV3JhcCk7XG5cbiAgbGV0IGNiV3JhcCA9IG0oJ2RpdicsIGQuY29udHJvbHMsIHtcbiAgICBpZDogYCR7ZGF0YS5mb3JtSUR9LWNiLXdyYXBgLFxuICAgIGNsYXNzTmFtZTogJ2NiLXdyYXAgJyArIGRhdGEubGF5b3V0LmNvbnRyb2xzXG4gIH0pO1xuXG4gIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IG9wdHMuYWN0aW9uQnV0dG9ucy5tYXAoYnRuRGF0YSA9PiB7XG4gICAgICBpZiAoYnRuRGF0YS5pZCAmJiBvcHRzLmRpc2FibGVkQWN0aW9uQnV0dG9ucy5pbmRleE9mKGJ0bkRhdGEuaWQpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gaGVscGVycy5wcm9jZXNzQWN0aW9uQnV0dG9ucyhidG5EYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBmb3JtQWN0aW9ucyA9IGQuZm9ybUFjdGlvbnMgPSBtKCdkaXYnLCBidXR0b25zLCB7XG4gICAgICBjbGFzc05hbWU6ICdmb3JtLWFjdGlvbnMgYnRuLWdyb3VwJ1xuICAgIH0pO1xuXG4gICAgY2JXcmFwLmFwcGVuZENoaWxkKGZvcm1BY3Rpb25zKTtcbiAgfVxuXG4gIGxldCBzdGFnZVdyYXAgPSBtKCdkaXYnLCBbZC5zdGFnZSwgY2JXcmFwXSwge1xuICAgIGlkOiBgJHtkYXRhLmZvcm1JRH0tc3RhZ2Utd3JhcGAsXG4gICAgY2xhc3NOYW1lOiAnc3RhZ2Utd3JhcCAnICsgZGF0YS5sYXlvdXQuc3RhZ2VcbiAgfSk7XG5cbiAgJGVkaXRvcldyYXAuYXBwZW5kKHN0YWdlV3JhcCwgY2JXcmFwKTtcblxuICBpZiAoZWxlbWVudC50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgJChlbGVtZW50KS5hcHBlbmQoJGVkaXRvcldyYXApO1xuICB9IGVsc2Uge1xuICAgICQoZWxlbWVudCkucmVwbGFjZVdpdGgoJGVkaXRvcldyYXApO1xuICB9XG5cbiAgbGV0IHNhdmVBbmRVcGRhdGUgPSB1dGlscy5kZWJvdW5jZShldnQgPT4ge1xuICAgIGlmIChldnQpIHtcbiAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldnQudGFyZ2V0Lm5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGV0ICRmaWVsZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICAgIGhlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xuICAgICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTYXZlIGZpZWxkIG9uIGNoYW5nZVxuICAkc3RhZ2Uub24oJ2NoYW5nZSBibHVyIGtleXVwJywgJy5mb3JtLWVsZW1lbnRzIGlucHV0LCAuZm9ybS1lbGVtZW50cyBzZWxlY3QsIC5mb3JtLWVsZW1lbnRzIHRleHRhcmVhJywgc2F2ZUFuZFVwZGF0ZSk7XG5cbiAgJCgnbGknLCBkLmNvbnRyb2xzKS5jbGljayhldnQgPT4ge1xuICAgIGxldCAkY29udHJvbCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnbGknKTtcbiAgICBoZWxwZXJzLnN0b3BJbmRleCA9IHVuZGVmaW5lZDtcbiAgICBwcm9jZXNzQ29udHJvbCgkY29udHJvbCk7XG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gIH0pO1xuXG4gIC8vIEFkZCBhcHBlbmQgYW5kIHByZXBlbmQgb3B0aW9ucyBpZiBuZWNlc3NhcnlcbiAgbGV0IG5vbkVkaXRhYmxlRmllbGRzID0gKCkgPT4ge1xuICAgIGxldCBjYW5jZWxBcnJheSA9IFtdO1xuICAgIGNvbnN0IGRpc2FibGVkRmllbGQgPSB0eXBlID0+XG4gICAgdXRpbHMubWFya3VwKCdsaScsIG9wdHNbdHlwZV0sIHtcbiAgICAgIGNsYXNzTmFtZTogYGRpc2FibGVkLWZpZWxkIGZvcm0tJHt0eXBlfWBcbiAgICB9KTtcblxuICAgIGlmIChvcHRzLnByZXBlbmQgJiYgISQoJy5kaXNhYmxlZC1maWVsZC5mb3JtLXByZXBlbmQnLCBkLnN0YWdlKS5sZW5ndGgpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAkc3RhZ2UucHJlcGVuZChkaXNhYmxlZEZpZWxkKCdwcmVwZW5kJykpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCAmJiAhJCgnLmRpc2FibGVkLWZpZWxkLmZvcm0tLmFwcGVuZCcsIGQuc3RhZ2UpLmxlbmd0aCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICRzdGFnZS5hcHBlbmQoZGlzYWJsZWRGaWVsZCgnYXBwZW5kJykpO1xuICAgIH1cblxuICAgIGhlbHBlcnMuZGlzYWJsZWRUVChkLnN0YWdlKTtcbiAgICByZXR1cm4gY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xuICB9O1xuXG4gIGxldCBwcmVwRmllbGRWYXJzID0gZnVuY3Rpb24oJGZpZWxkLCBpc05ldyA9IGZhbHNlKSB7XG4gICAgbGV0IGZpZWxkID0ge307XG4gICAgaWYgKCRmaWVsZCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgbGV0IHthdHRycywgbGFiZWx9ID0gYUZpZWxkc1skZmllbGRbMF0uZGF0YXNldC50eXBlXTtcbiAgICAgIGlmIChhRmllbGRzWyRmaWVsZFswXS5kYXRhc2V0LnR5cGVdKSB7XG4gICAgICAgIGZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMpO1xuICAgICAgICBmaWVsZC5sYWJlbCA9IGxhYmVsO1xuICAgICAgfSBlbHNlIHsgLy8gaXMgZGF0YVR5cGUgWE1MXG4gICAgICAgIGxldCBhdHRycyA9ICRmaWVsZFswXS5hdHRyaWJ1dGVzO1xuICAgICAgICBpZiAoIWlzTmV3KSB7XG4gICAgICAgICAgZmllbGQudmFsdWVzID0gJGZpZWxkLmNoaWxkcmVuKCkubWFwKChpbmRleCwgZWxlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICQoZWxlbSkudGV4dCgpLFxuICAgICAgICAgICAgICB2YWx1ZTogJChlbGVtKS5hdHRyKCd2YWx1ZScpLFxuICAgICAgICAgICAgICBzZWxlY3RlZDogQm9vbGVhbigkKGVsZW0pLmF0dHIoJ3NlbGVjdGVkJykpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgZmllbGRbYXR0cnNbaV0ubmFtZV0gPSBhdHRyc1tpXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZCA9IE9iamVjdC5hc3NpZ24oe30sICRmaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZC5uYW1lKSB7XG4gICAgICBmaWVsZC5uYW1lID0gdXRpbHMubmFtZUF0dHIoZmllbGQpO1xuICAgIH1cblxuICAgIGlmIChpc05ldyAmJiB1dGlscy5pbkFycmF5KGZpZWxkLnR5cGUsXG4gICAgICBbJ3RleHQnLFxuICAgICAgICdudW1iZXInLFxuICAgICAgICdmaWxlJyxcbiAgICAgICAnZGF0ZScsXG4gICAgICAgJ3NlbGVjdCcsXG4gICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICAnYXV0b2NvbXBsZXRlJ10pKSB7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBmaWVsZC5jbGFzc05hbWUgfHwgJ2Zvcm0tY29udHJvbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZC5jbGFzc05hbWUpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgZmllbGQuc3R5bGUgPSBtYXRjaFsxXTtcbiAgICB9XG5cbiAgICB1dGlscy5lc2NhcGVBdHRycyhmaWVsZCk7XG5cbiAgICBhcHBlbmROZXdGaWVsZChmaWVsZCwgaXNOZXcpO1xuXG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5maWVsZEFkZGVkKTtcbiAgICB9XG5cbiAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgfTtcblxuICAvLyBQYXJzZSBzYXZlZCBYTUwgdGVtcGxhdGUgZGF0YVxuICBsZXQgbG9hZEZpZWxkcyA9IGZ1bmN0aW9uKGZvcm1EYXRhKSB7XG4gICAgZm9ybURhdGEgPSBoZWxwZXJzLmdldERhdGEoZm9ybURhdGEpO1xuICAgIGlmIChmb3JtRGF0YSAmJiBmb3JtRGF0YS5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZm9ybURhdGFbaV0pO1xuICAgICAgICBwcmVwRmllbGRWYXJzKGZpZWxkRGF0YSk7XG4gICAgICB9XG4gICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICB9IGVsc2UgaWYgKG9wdHMuZGVmYXVsdEZpZWxkcyAmJiBvcHRzLmRlZmF1bHRGaWVsZHMubGVuZ3RoKSB7XG4gICAgICAvLyBMb2FkIGRlZmF1bHQgZmllbGRzIGlmIG5vbmUgYXJlIHNldFxuICAgICAgb3B0cy5kZWZhdWx0RmllbGRzLmZvckVhY2goZmllbGQgPT4gcHJlcEZpZWxkVmFycyhmaWVsZCkpO1xuICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgfSBlbHNlIGlmICghb3B0cy5wcmVwZW5kICYmICFvcHRzLmFwcGVuZCkge1xuICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICBzdGFnZVdyYXAuZGF0YXNldC5jb250ZW50ID0gaTE4bi5nZXRTdGFydGVkO1xuICAgIH1cbiAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcblxuICAgIGlmIChub25FZGl0YWJsZUZpZWxkcygpKSB7XG4gICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBkYXRhIGZvciBmaWVsZCB3aXRoIG9wdGlvbnMgW3NlbGVjdCwgY2hlY2tib3gtZ3JvdXAsIHJhZGlvLWdyb3VwXVxuICAgKlxuICAgKiBAdG9kbyAgIHJlZmFjdG9yIHRoaXMgbmFzdHkgfmNyYXB+IGNvZGUsIGl0cyBhY3R1YWxseSBwYWluZnVsIHRvIGxvb2sgYXRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICogQHJldHVybiB7U3RyaW5nfSBmaWVsZCBvcHRpb25zIG1hcmt1cFxuICAgKi9cbiAgbGV0IGZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKGZpZWxkRGF0YSkge1xuICAgIGxldCBvcHRpb25BY3Rpb25zID0gW1xuICAgICAgICB1dGlscy5tYXJrdXAoJ2EnLCBpMThuLmFkZE9wdGlvbiwge2NsYXNzTmFtZTogJ2FkZCBhZGQtb3B0J30pXG4gICAgICBdO1xuICAgIGxldCBmaWVsZE9wdGlvbnMgPSBbXG4gICAgICBgPGxhYmVsIGNsYXNzPVwiZmFsc2UtbGFiZWxcIj4ke2kxOG4uc2VsZWN0T3B0aW9uc308L2xhYmVsPmBcbiAgICBdO1xuICAgIGNvbnN0IGlzTXVsdGlwbGUgPSBmaWVsZERhdGEubXVsdGlwbGUgfHwgKGZpZWxkRGF0YS50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnKTtcbiAgICBjb25zdCBvcHRpb25EYXRhVGVtcGxhdGUgPSBsYWJlbCA9PiB7XG4gICAgICBsZXQgb3B0aW9uRGF0YSA9IHtcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICB2YWx1ZTogdXRpbHMuaHlwaGVuQ2FzZShsYWJlbClcbiAgICAgIH07XG5cbiAgICAgIGlmIChmaWVsZERhdGEudHlwZSAhPT0gJ2F1dG9jb21wbGV0ZScpIHtcbiAgICAgICAgb3B0aW9uRGF0YS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9uRGF0YTtcbiAgICB9O1xuXG4gICAgaWYgKCFmaWVsZERhdGEudmFsdWVzIHx8ICFmaWVsZERhdGEudmFsdWVzLmxlbmd0aCkge1xuICAgICAgbGV0IGRlZmF1bHRPcHRDb3VudCA9IHV0aWxzLmluQXJyYXkoZmllbGREYXRhLnR5cGUsIFsnY2hlY2tib3gtZ3JvdXAnLCAnY2hlY2tib3gnXSkgPyBbMV0gOiBbMSwgMiwgM107XG4gICAgICBmaWVsZERhdGEudmFsdWVzID0gZGVmYXVsdE9wdENvdW50Lm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBgJHtpMThuLm9wdGlvbn0gJHtpbmRleH1gO1xuICAgICAgICByZXR1cm4gb3B0aW9uRGF0YVRlbXBsYXRlKGxhYmVsKTtcbiAgICAgIH0pO1xuXG4gICAgbGV0IGZpcnN0T3B0aW9uID0gZmllbGREYXRhLnZhbHVlc1swXTtcbiAgICAgIGlmIChmaXJzdE9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWQnKSkge1xuICAgICAgICBmaXJzdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVuc3VyZSBvcHRpb24gZGF0YSBpcyBoYXMgYWxsIHJlcXVpcmVkIGtleXNcbiAgICAgIGZpZWxkRGF0YS52YWx1ZXMuZm9yRWFjaChvcHRpb24gPT4gT2JqZWN0LmFzc2lnbih7fSwge3NlbGVjdGVkOiBmYWxzZX0sIG9wdGlvbikpO1xuICAgIH1cblxuICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8ZGl2IGNsYXNzPVwic29ydGFibGUtb3B0aW9ucy13cmFwXCI+Jyk7XG5cbiAgICBmaWVsZE9wdGlvbnMucHVzaCgnPG9sIGNsYXNzPVwic29ydGFibGUtb3B0aW9uc1wiPicpO1xuICAgIHV0aWxzLmZvckVhY2goZmllbGREYXRhLnZhbHVlcywgaSA9PiB7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaChzZWxlY3RGaWVsZE9wdGlvbnMoZmllbGREYXRhLm5hbWUsIGZpZWxkRGF0YS52YWx1ZXNbaV0sIGlzTXVsdGlwbGUpKTtcbiAgICB9KTtcbiAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9vbD4nKTtcbiAgICBmaWVsZE9wdGlvbnMucHVzaCh1dGlscy5tYXJrdXAoJ2RpdicsIG9wdGlvbkFjdGlvbnMsIHtjbGFzc05hbWU6ICdvcHRpb24tYWN0aW9ucyd9KS5vdXRlckhUTUwpO1xuICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8L2Rpdj4nKTtcblxuICAgIHJldHVybiB1dGlscy5tYXJrdXAoJ2RpdicsIGZpZWxkT3B0aW9ucy5qb2luKCcnKSwge2NsYXNzTmFtZTogJ2Zvcm0tZ3JvdXAgZmllbGQtb3B0aW9ucyd9KS5vdXRlckhUTUw7XG4gIH07XG5cbiAgY29uc3QgZGVmYXVsdEZpZWxkQXR0cnMgPSB0eXBlID0+IHtcbiAgICBjb25zdCBkZWZhdWx0QXR0cnMgPSBbXG4gICAgICAncmVxdWlyZWQnLFxuICAgICAgJ2xhYmVsJyxcbiAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAncGxhY2Vob2xkZXInLFxuICAgICAgJ2NsYXNzTmFtZScsXG4gICAgICAnbmFtZScsXG4gICAgICAnYWNjZXNzJyxcbiAgICAgICd2YWx1ZSdcbiAgICBdO1xuICAgIGxldCBub1ZhbEZpZWxkcyA9IFsnaGVhZGVyJywgJ3BhcmFncmFwaCcsICdmaWxlJywgJ2F1dG9jb21wbGV0ZSddLmNvbmNhdChkLm9wdGlvbkZpZWxkcyk7XG4gICAgbGV0IHZhbHVlRmllbGQgPSAhdXRpbHMuaW5BcnJheSh0eXBlLCBub1ZhbEZpZWxkcyk7XG5cbiAgICBjb25zdCB0eXBlQXR0cnNNYXAgPSB7XG4gICAgICBhdXRvY29tcGxldGU6IGRlZmF1bHRBdHRycy5jb25jYXQoW1xuICAgICAgICAnb3B0aW9ucycsXG4gICAgICBdKSxcbiAgICAgIGJ1dHRvbjogW1xuICAgICAgICAnbGFiZWwnLFxuICAgICAgICAnc3VidHlwZScsXG4gICAgICAgICdzdHlsZScsXG4gICAgICAgICdjbGFzc05hbWUnLFxuICAgICAgICAnbmFtZScsXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgICdhY2Nlc3MnLFxuICAgICAgXSxcbiAgICAgIGNoZWNrYm94OiBbXG4gICAgICAgICdyZXF1aXJlZCcsXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgICd0b2dnbGUnLFxuICAgICAgICAnaW5saW5lJyxcbiAgICAgICAgJ2NsYXNzTmFtZScsXG4gICAgICAgICduYW1lJyxcbiAgICAgICAgJ2FjY2VzcycsXG4gICAgICAgICdvdGhlcicsXG4gICAgICAgICdvcHRpb25zJyxcbiAgICAgIF0sXG4gICAgICB0ZXh0OiBkZWZhdWx0QXR0cnMuY29uY2F0KFtcbiAgICAgICAgJ3N1YnR5cGUnLFxuICAgICAgICAnbWF4bGVuZ3RoJyxcbiAgICAgIF0pLFxuICAgICAgZGF0ZTogZGVmYXVsdEF0dHJzLFxuICAgICAgZmlsZTogZGVmYXVsdEF0dHJzLmNvbmNhdChbXG4gICAgICAgICdtdWx0aXBsZSdcbiAgICAgIF0pLFxuICAgICAgaGVhZGVyOiBbXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdzdWJ0eXBlJyxcbiAgICAgICAgJ2NsYXNzTmFtZScsXG4gICAgICAgICdhY2Nlc3MnLFxuICAgICAgXSxcbiAgICAgIGhpZGRlbjogW1xuICAgICAgICAnbmFtZScsXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgICdhY2Nlc3MnLFxuICAgICAgXSxcbiAgICAgIHBhcmFncmFwaDogW1xuICAgICAgICAnbGFiZWwnLFxuICAgICAgICAnc3VidHlwZScsXG4gICAgICAgICdjbGFzc05hbWUnLFxuICAgICAgICAnYWNjZXNzJyxcbiAgICAgIF0sXG4gICAgICBudW1iZXI6IGRlZmF1bHRBdHRycy5jb25jYXQoW1xuICAgICAgICAnbWluJyxcbiAgICAgICAgJ21heCcsXG4gICAgICAgICdzdGVwJyxcbiAgICAgIF0pLFxuICAgICAgc2VsZWN0OiBkZWZhdWx0QXR0cnMuY29uY2F0KFtcbiAgICAgICAgJ211bHRpcGxlJyxcbiAgICAgICAgJ29wdGlvbnMnLFxuICAgICAgXSksXG4gICAgICB0ZXh0YXJlYTogZGVmYXVsdEF0dHJzLmNvbmNhdChbXG4gICAgICAgICdzdWJ0eXBlJyxcbiAgICAgICAgJ21heGxlbmd0aCcsXG4gICAgICAgICdyb3dzJyxcbiAgICAgIF0pLFxuXG4gICAgfTtcblxuICAgIHR5cGVBdHRyc01hcFsnY2hlY2tib3gtZ3JvdXAnXSA9IHR5cGVBdHRyc01hcC5jaGVja2JveDtcbiAgICB0eXBlQXR0cnNNYXBbJ3JhZGlvLWdyb3VwJ10gPSB0eXBlQXR0cnNNYXAuY2hlY2tib3g7XG5cbiAgICBsZXQgdHlwZUF0dHJzID0gdHlwZUF0dHJzTWFwW3R5cGVdO1xuXG4gICAgaWYgKHR5cGUgPT09ICdyYWRpby1ncm91cCcpIHtcbiAgICAgIHV0aWxzLnJlbW92ZSgndG9nZ2xlJywgdHlwZUF0dHJzKTtcbiAgICB9XG5cbiAgICAvLyBIZWxwIFRleHQgLyBEZXNjcmlwdGlvbiBGaWVsZFxuICAgIGlmICh1dGlscy5pbkFycmF5KHR5cGUsIFsnaGVhZGVyJywgJ3BhcmFncmFwaCcsICdidXR0b24nXSkpIHtcbiAgICAgIHV0aWxzLnJlbW92ZSgnZGVzY3JpcHRpb24nLCB0eXBlQXR0cnMpO1xuICAgIH1cblxuICAgIGlmICghdmFsdWVGaWVsZCkge1xuICAgICAgdXRpbHMucmVtb3ZlKCd2YWx1ZScsIHR5cGVBdHRycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBdHRycyB8fCBkZWZhdWx0QXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBlZGl0YWJsZSBwcm9wZXJ0aWVzIGZvciB0aGUgZmllbGRcbiAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZXMgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGFkdmFuY2VkIGZpZWxkc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICBtYXJrdXAgZm9yIGFkdmFuY2VkIGZpZWxkc1xuICAgKi9cbiAgbGV0IGFkdkZpZWxkcyA9IHZhbHVlcyA9PiB7XG4gICAgbGV0IGFkdkZpZWxkcyA9IFtdO1xuICAgIGxldCBmaWVsZEF0dHJzID0gZGVmYXVsdEZpZWxkQXR0cnModmFsdWVzLnR5cGUpO1xuICAgIGNvbnN0IGFkdkZpZWxkTWFwID0ge1xuICAgICAgcmVxdWlyZWQ6ICgpID0+IHJlcXVpcmVkRmllbGQodmFsdWVzKSxcbiAgICAgIHRvZ2dsZTogKCkgPT4gYm9vbEF0dHJpYnV0ZSgndG9nZ2xlJywgdmFsdWVzLCB7Zmlyc3Q6IGkxOG4udG9nZ2xlfSksXG4gICAgICBpbmxpbmU6ICgpID0+IHtcbiAgICAgICAgbGV0IGxhYmVscyA9IHtcbiAgICAgICAgICBmaXJzdDogaTE4bi5pbmxpbmUsXG4gICAgICAgICAgc2Vjb25kOiBtaTE4bi5nZXQoJ2lubGluZURlc2MnLCB2YWx1ZXMudHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJykpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJvb2xBdHRyaWJ1dGUoJ2lubGluZScsIHZhbHVlcywgbGFiZWxzKTtcbiAgICAgIH0sXG4gICAgICBsYWJlbDogKCkgPT4gdGV4dEF0dHJpYnV0ZSgnbGFiZWwnLCB2YWx1ZXMpLFxuICAgICAgZGVzY3JpcHRpb246ICgpID0+IHRleHRBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJywgdmFsdWVzKSxcbiAgICAgIHN1YnR5cGU6ICgpID0+IHNlbGVjdEF0dHJpYnV0ZSgnc3VidHlwZScsIHZhbHVlcywgc3VidHlwZXNbdmFsdWVzLnR5cGVdKSxcbiAgICAgIHN0eWxlOiAoKSA9PiBidG5TdHlsZXModmFsdWVzLnN0eWxlKSxcbiAgICAgIHBsYWNlaG9sZGVyOiAoKSA9PiB0ZXh0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHZhbHVlcyksXG4gICAgICByb3dzOiAoKSA9PiBudW1iZXJBdHRyaWJ1dGUoJ3Jvd3MnLCB2YWx1ZXMpLFxuICAgICAgY2xhc3NOYW1lOiAoKSA9PiB0ZXh0QXR0cmlidXRlKCdjbGFzc05hbWUnLCB2YWx1ZXMpLFxuICAgICAgbmFtZTogKCkgPT4gdGV4dEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlcyksXG4gICAgICB2YWx1ZTogKCkgPT4gdGV4dEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZXMpLFxuICAgICAgbWF4bGVuZ3RoOiAoKSA9PiBudW1iZXJBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIHZhbHVlcyksXG4gICAgICBhY2Nlc3M6ICgpID0+IHtcbiAgICAgICAgbGV0IHJvbGVzRGlzcGxheSA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCInIDogJyc7XG4gICAgICAgIGxldCBhdmFpbGFibGVSb2xlcyA9IFtcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImF2YWlsYWJsZS1yb2xlc1wiICR7cm9sZXNEaXNwbGF5fT5gXG4gICAgICAgIF07XG4gICAgICAgIGZvciAoa2V5IGluIG9wdHMucm9sZXMpIHtcbiAgICAgICAgICBpZiAob3B0cy5yb2xlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2tlZCA9IHV0aWxzLmluQXJyYXkoa2V5LCByb2xlcykgPyAnY2hlY2tlZCcgOiAnJztcbiAgICAgICAgICAgIGxldCByb2xlSWQgPSBgZmxkLSR7ZGF0YS5sYXN0SUR9LXJvbGVzLSR7a2V5fWA7XG4gICAgICAgICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJvbGVzW11cIiB2YWx1ZT1cIiR7a2V5fVwiIGlkPVwiJHtyb2xlSWR9XCIgJHtjaGVja2VkfSBjbGFzcz1cInJvbGVzLWZpZWxkXCIgLz4gPGxhYmVsIGZvcj1cIiR7cm9sZUlkfVwiPiR7b3B0cy5yb2xlc1trZXldfTwvbGFiZWw+PGJyLz5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXZhaWxhYmxlUm9sZXMucHVzaCgnPC9kaXY+Jyk7XG4gICAgICAgIGxldCBhY2Nlc3NMYWJlbHMgPSB7Zmlyc3Q6IGkxOG4ucm9sZXMsIHNlY29uZDogaTE4bi5saW1pdFJvbGUsIGNvbnRlbnQ6IGF2YWlsYWJsZVJvbGVzLmpvaW4oJycpfTtcblxuICAgICAgICByZXR1cm4gYm9vbEF0dHJpYnV0ZSgnYWNjZXNzJywgdmFsdWVzLCBhY2Nlc3NMYWJlbHMpO1xuICAgICAgfSxcbiAgICAgIG90aGVyOiAoKSA9PiBib29sQXR0cmlidXRlKCdvdGhlcicsIHZhbHVlcywge2ZpcnN0OiBpMThuLmVuYWJsZU90aGVyLCBzZWNvbmQ6IGkxOG4uZW5hYmxlT3RoZXJNc2d9KSxcbiAgICAgIG9wdGlvbnM6ICgpID0+IGZpZWxkT3B0aW9ucyh2YWx1ZXMpXG4gICAgfTtcbiAgICBsZXQga2V5O1xuICAgIGxldCByb2xlcyA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyB2YWx1ZXMucm9sZS5zcGxpdCgnLCcpIDogW107XG4gICAgbGV0IG51bUF0dHJzID0gWydtaW4nLCAnbWF4JywgJ3N0ZXAnXTtcblxuICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIG51bUF0dHJzLmZvckVhY2gobnVtQXR0ciA9PiB7XG4gICAgICAgIGFkdkZpZWxkTWFwW251bUF0dHJdID0gKCkgPT4gbnVtYmVyQXR0cmlidXRlKG51bUF0dHIsIHZhbHVlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgYWR2RmllbGRNYXBbJ211bHRpcGxlJ10gPSAoKSA9PiB7XG4gICAgICAgIGxldCBsYWJlbHMgPSB7XG4gICAgICAgICAgZmlyc3Q6IGkxOG4ubXVsdGlwbGVGaWxlcyxcbiAgICAgICAgICBzZWNvbmQ6IGkxOG4uYWxsb3dNdWx0aXBsZUZpbGVzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBib29sQXR0cmlidXRlKCdtdWx0aXBsZScsIHZhbHVlcywgbGFiZWxzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgYWR2RmllbGRNYXBbJ211bHRpcGxlJ10gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBib29sQXR0cmlidXRlKCdtdWx0aXBsZScsIHZhbHVlcywge2ZpcnN0OiAnICcsIHNlY29uZDogaTE4bi5zZWxlY3Rpb25zTWVzc2FnZX0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhmaWVsZEF0dHJzKS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIGxldCBhdHRyID0gZmllbGRBdHRyc1tpbmRleF07XG4gICAgICBsZXQgdXNlRGVmYXVsdEF0dHIgPSBbdHJ1ZV07XG5cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyRGlzYWJsZWRBdHRyc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgICAgbGV0IHR5cGVEaXNhYmxlZEF0dHJzID0gb3B0cy50eXBlVXNlckRpc2FibGVkQXR0cnNbdmFsdWVzLnR5cGVdO1xuICAgICAgICB1c2VEZWZhdWx0QXR0ci5wdXNoKCF1dGlscy5pbkFycmF5KGF0dHIsIHR5cGVEaXNhYmxlZEF0dHJzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICAgIGxldCB1c2VyQXR0cnMgPSBPYmplY3Qua2V5cyhvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKTtcbiAgICAgICAgdXNlRGVmYXVsdEF0dHIucHVzaCghdXRpbHMuaW5BcnJheShhdHRyLCB1c2VyQXR0cnMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkoYXR0ciwgb3B0cy5kaXNhYmxlZEF0dHJzKSkge1xuICAgICAgICB1c2VEZWZhdWx0QXR0ci5wdXNoKGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVzZURlZmF1bHRBdHRyLmV2ZXJ5KHVzZSA9PiB1c2UgPT09IHRydWUpKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGFkdkZpZWxkTWFwW2F0dHJdKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQXBwZW5kIGN1c3RvbSBhdHRyaWJ1dGVzIGFzIGRlZmluZWQgaW4gdHlwZVVzZXJBdHRycyBvcHRpb25cbiAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSkge1xuICAgICAgYWR2RmllbGRzLnB1c2gocHJvY2Vzc1R5cGVVc2VyQXR0cnMob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSwgdmFsdWVzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkdkZpZWxkcy5qb2luKCcnKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJvY2Vzc2VzIHR5cGVVc2VyQXR0cnNcbiAgICogQHBhcmFtICB7T2JqZWN0fSB0eXBlVXNlckF0dHIgb3B0aW9uXG4gICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICAgIGZpZWxkIGF0dHJpYnV0ZXNcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgbWFya3VwIGZvciBjdXN0b20gdXNlciBhdHRyaWJ1dGVzXG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzVHlwZVVzZXJBdHRycyh0eXBlVXNlckF0dHIsIHZhbHVlcykge1xuICAgIGxldCBhZHZGaWVsZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgYXR0cmlidXRlIGluIHR5cGVVc2VyQXR0cikge1xuICAgICAgaWYgKHR5cGVVc2VyQXR0ci5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgIGxldCBvcmlnID0gaTE4blthdHRyaWJ1dGVdO1xuICAgICAgICBsZXQgb3JpZ1ZhbHVlID0gdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWU7XG4gICAgICAgIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgfHwgJyc7XG5cbiAgICAgICAgaWYgKHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLmxhYmVsKSB7XG4gICAgICAgICAgaTE4blthdHRyaWJ1dGVdID0gdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ub3B0aW9ucykge1xuICAgICAgICAgIGFkdkZpZWxkLnB1c2goc2VsZWN0VXNlckF0dHJzKGF0dHJpYnV0ZSwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZHZGaWVsZC5wdXNoKGlucHV0VXNlckF0dHJzKGF0dHJpYnV0ZSwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkxOG5bYXR0cmlidXRlXSA9IG9yaWc7XG4gICAgICAgIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlID0gb3JpZ1ZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhZHZGaWVsZC5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXh0IGlucHV0IHZhbHVlIGZvciBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgYWxzbyBrbm93biBhcyB2YWx1ZXNcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICBpbnB1dCBtYXJrdXBcbiAgICovXG4gIGZ1bmN0aW9uIGlucHV0VXNlckF0dHJzKG5hbWUsIGF0dHJzKSB7XG4gICAgbGV0IHRleHRBdHRycyA9IHtcbiAgICAgICAgaWQ6IG5hbWUgKyAnLScgKyBkYXRhLmxhc3RJRCxcbiAgICAgICAgdGl0bGU6IGF0dHJzLmRlc2NyaXB0aW9uIHx8IGF0dHJzLmxhYmVsIHx8IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdHlwZTogYXR0cnMudHlwZSB8fCAndGV4dCcsXG4gICAgICAgIGNsYXNzTmFtZTogW2BmbGQtJHtuYW1lfWBdXG4gICAgICB9O1xuICAgIGxldCBsYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHt0ZXh0QXR0cnMuaWR9XCI+JHtpMThuW25hbWVdfTwvbGFiZWw+YDtcblxuICAgIGlmICghdXRpbHMuaW5BcnJheSh0ZXh0QXR0cnMudHlwZSwgWydjaGVja2JveCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgdGV4dEF0dHJzLmNsYXNzTmFtZS5wdXNoKCdmb3JtLWNvbnRyb2wnKTtcbiAgICB9XG5cbiAgICB0ZXh0QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgdGV4dEF0dHJzKTtcbiAgICBsZXQgdGV4dElucHV0ID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodGV4dEF0dHJzKX0+YDtcbiAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHt0ZXh0SW5wdXR9PC9kaXY+YDtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgaW5wdXQgZm9yIG11bHRpcGxlIGNob2ljZSB1c2VyIGF0dHJpYnV0ZXNcbiAgICogQHRvZG8gIHJlcGxhY2Ugd2l0aCBzZWxlY3RBdHRyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgIHNlbGVjdCBtYXJrdXBcbiAgICovXG4gIGZ1bmN0aW9uIHNlbGVjdFVzZXJBdHRycyhuYW1lLCBvcHRpb25zKSB7XG4gICAgbGV0IG9wdGlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5tYXAodmFsID0+IHtcbiAgICAgIGxldCBhdHRycyA9IHt2YWx1ZTogdmFsfTtcbiAgICAgIGlmICh2YWwgPT09IG9wdGlvbnMudmFsdWUpIHtcbiAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGA8b3B0aW9uICR7dXRpbHMuYXR0clN0cmluZyhhdHRycyl9PiR7b3B0aW9ucy5vcHRpb25zW3ZhbF19PC9vcHRpb24+YDtcbiAgICB9KTtcbiAgICBsZXQgc2VsZWN0QXR0cnMgPSB7XG4gICAgICBpZDogbmFtZSArICctJyArIGRhdGEubGFzdElELFxuICAgICAgdGl0bGU6IG9wdGlvbnMuZGVzY3JpcHRpb24gfHwgb3B0aW9ucy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7bmFtZX0gZm9ybS1jb250cm9sYFxuICAgIH07XG4gICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7aTE4bltuYW1lXX08L2xhYmVsPmA7XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5maWx0ZXIocHJvcCA9PiB7XG4gICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkocHJvcCwgWyd2YWx1ZScsICdvcHRpb25zJywgJ2xhYmVsJ10pO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24oYXR0cikge1xuICAgICAgc2VsZWN0QXR0cnNbYXR0cl0gPSBvcHRpb25zW2F0dHJdO1xuICAgIH0pO1xuXG4gICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7b3B0aXMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtzZWxlY3R9PC9kaXY+YDtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgfVxuXG4gIGxldCBib29sQXR0cmlidXRlID0gZnVuY3Rpb24obmFtZSwgdmFsdWVzLCBsYWJlbHMpIHtcbiAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxhYmVsID0gKHR4dCkgPT4ge1xuICAgICAgcmV0dXJuIGA8bGFiZWwgZm9yPVwiJHtuYW1lfS0ke2RhdGEubGFzdElEfVwiPiR7dHh0fTwvbGFiZWw+YDtcbiAgICB9O1xuICAgIGxldCBjaGVja2VkID0gKHZhbHVlc1tuYW1lXSA/ICdjaGVja2VkJyA6ICcnKTtcbiAgICBsZXQgaW5wdXQgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZmxkLSR7bmFtZX1cIiBuYW1lPVwiJHtuYW1lfVwiIHZhbHVlPVwidHJ1ZVwiICR7Y2hlY2tlZH0gaWQ9XCIke25hbWV9LSR7ZGF0YS5sYXN0SUR9XCIvPiBgO1xuICAgIGxldCBsZWZ0ID0gW107XG4gICAgbGV0IHJpZ2h0ID0gW1xuICAgICAgaW5wdXRcbiAgICBdO1xuXG4gICAgaWYgKGxhYmVscy5maXJzdCkge1xuICAgICAgbGVmdC51bnNoaWZ0KGxhYmVsKGxhYmVscy5maXJzdCkpO1xuICAgIH1cblxuICAgIGlmIChsYWJlbHMuc2Vjb25kKSB7XG4gICAgICByaWdodC5wdXNoKGxhYmVsKGxhYmVscy5zZWNvbmQpKTtcbiAgICB9XG5cbiAgICBpZiAobGFiZWxzLmNvbnRlbnQpIHtcbiAgICAgIHJpZ2h0LnB1c2gobGFiZWxzLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJpZ2h0LnVuc2hpZnQoJzxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+Jyk7XG4gICAgcmlnaHQucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGVmdC5jb25jYXQocmlnaHQpLmpvaW4oJycpfTwvZGl2PmA7XG4gIH07XG5cbiAgbGV0IGJ0blN0eWxlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICBsZXQgc3R5bGVzID0gaTE4bi5zdHlsZXMuYnRuO1xuICAgICAgbGV0IHN0eWxlRmllbGQgPSAnJztcblxuICAgIGlmIChzdHlsZXMpIHtcbiAgICAgIGxldCBzdHlsZUxhYmVsID0gYDxsYWJlbD4ke2kxOG4uc3R5bGV9PC9sYWJlbD5gO1xuICAgICAgc3R5bGVGaWVsZCArPSBgPGlucHV0IHZhbHVlPVwiJHtzdHlsZX1cIiBuYW1lPVwic3R5bGVcIiB0eXBlPVwiaGlkZGVuXCIgY2xhc3M9XCJidG4tc3R5bGVcIj5gO1xuICAgICAgc3R5bGVGaWVsZCArPSAnPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPic7XG5cbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGNsYXNzTGlzdCA9IFsnYnRuLXhzJywgJ2J0bicsIGBidG4tJHtlbGVtZW50fWBdO1xuICAgICAgICBpZiAoc3R5bGUgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QucHVzaCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlRmllbGQgKz0gYDxidXR0b24gdmFsdWU9XCIke2VsZW1lbnR9XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtjbGFzc0xpc3Quam9pbignICcpfVwiPiR7aTE4bi5zdHlsZXMuYnRuW2VsZW1lbnRdfTwvYnV0dG9uPmA7XG4gICAgICB9KTtcblxuICAgICAgc3R5bGVGaWVsZCArPSAnPC9kaXY+JztcblxuICAgICAgc3R5bGVGaWVsZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzdHlsZS13cmFwXCI+JHtzdHlsZUxhYmVsfSAke3N0eWxlRmllbGR9PC9kaXY+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVGaWVsZDtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGEgbnVtYmVyIGF0dHJpYnV0ZSB0byBhIGZpZWxkLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9IG1hcmt1cCBmb3IgbnVtYmVyIGF0dHJpYnV0ZVxuICAgKi9cbiAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXTtcbiAgICBsZXQgYXR0ckxhYmVsID0gaTE4blthdHRyaWJ1dGVdIHx8IGF0dHJpYnV0ZTtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSBpMThuW2BwbGFjZWhvbGRlci4ke2F0dHJpYnV0ZX1gXTtcbiAgICBsZXQgaW5wdXRDb25maWcgPSB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIHZhbHVlOiBhdHRyVmFsLFxuICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgbWluOiAnMCcsXG4gICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGAsXG4gICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2RhdGEubGFzdElEfWBcbiAgICB9O1xuICAgIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKGlucHV0Q29uZmlnKSl9PmA7XG4gICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7bnVtYmVyQXR0cmlidXRlfTwvZGl2PmA7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCI+PGxhYmVsIGZvcj1cIiR7aW5wdXRDb25maWcuaWR9XCI+JHthdHRyTGFiZWx9PC9sYWJlbD4gJHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgfTtcblxuICAvKipcbiAgICogc2VsZWN0QXR0cmlidXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlICBhdHRyaWJ1dGUgbmFtZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlcyAgICAgYWthIGF0dHJzXG4gICAqIEBwYXJhbSAge0FycmF5fSBvcHRpb25EYXRhICBzZWxlY3QgZmllbGQgb3B0aW9uIGRhdGFcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgIHNlbGVjdCBpbnB1dCBtYWtydXBcbiAgICovXG4gIGxldCBzZWxlY3RBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcywgb3B0aW9uRGF0YSkge1xuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IG9wdGlvbkRhdGEubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBsYWJlbDogYCR7aTE4bi5vcHRpb259ICR7aX1gLFxuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRpb24pO1xuICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWVzW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgb3B0aW9uQXR0cnMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGA8b3B0aW9uICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKG9wdGlvbkF0dHJzKSl9PiR7b3B0aW9uQXR0cnMubGFiZWx9PC9vcHRpb24+YDtcbiAgICB9KTtcbiAgICBsZXQgc2VsZWN0QXR0cnMgPSB7XG4gICAgICAgIGlkOiBhdHRyaWJ1dGUgKyAnLScgKyBkYXRhLmxhc3RJRCxcbiAgICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGBcbiAgICAgIH07XG4gICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7aTE4blthdHRyaWJ1dGVdIHx8IHV0aWxzLmNhcGl0YWxpemUoYXR0cmlidXRlKX08L2xhYmVsPmA7XG4gICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7c2VsZWN0T3B0aW9ucy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke3NlbGVjdEF0dHJzLm5hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHNvbWUgdGV4dCBpbnB1dHMgZm9yIGZpZWxkIGF0dHJpYnV0ZXMsICoqd2lsbCBiZSByZXBsYWNlZCoqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlXG4gICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGxldCB0ZXh0QXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMpIHtcbiAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGxhY2Vob2xkZXJGaWVsZHMgPSBbXG4gICAgICAndGV4dCcsXG4gICAgICAndGV4dGFyZWEnLFxuICAgICAgJ3NlbGVjdCcsXG4gICAgICAnYXV0b2NvbXBsZXRlJ1xuICAgIF07XG5cbiAgICBsZXQgbm9OYW1lID0gW1xuICAgICAgJ2hlYWRlcicsXG4gICAgICAncGFyYWdyYXBoJ1xuICAgIF07XG5cbiAgICBsZXQgdGV4dEFyZWEgPSBbJ3BhcmFncmFwaCddO1xuXG4gICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCAnJztcbiAgICBsZXQgYXR0ckxhYmVsID0gaTE4blthdHRyaWJ1dGVdO1xuXG4gICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJykge1xuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSkge1xuICAgICAgICBhdHRyTGFiZWwgPSBpMThuLmNvbnRlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyVmFsID0gdXRpbHMucGFyc2VkSHRtbCh2YWx1ZXNbYXR0cmlidXRlXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnR5cGVzLmhlYWRlcikge1xuICAgICAgbm9OYW1lID0gbm9OYW1lLmNvbmNhdChzdWJ0eXBlcy5oZWFkZXIpO1xuICAgIH1cblxuICAgIGxldCBwbGFjZWhvbGRlciA9IGkxOG5bYHBsYWNlaG9sZGVyLiR7YXR0cmlidXRlfWBdIHx8ICcnO1xuICAgIGxldCBhdHRyaWJ1dGVmaWVsZCA9ICcnO1xuICAgIGxldCBub01ha2VBdHRyID0gW107XG5cbiAgICAvLyBGaWVsZCBoYXMgcGxhY2Vob2xkZXIgYXR0cmlidXRlXG4gICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3BsYWNlaG9sZGVyJyAmJiAhdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgcGxhY2Vob2xkZXJGaWVsZHMpKSB7XG4gICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gRmllbGQgaGFzIG5hbWUgYXR0cmlidXRlXG4gICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ25hbWUnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vTmFtZSkpIHtcbiAgICAgIG5vTWFrZUF0dHIucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vTWFrZUF0dHIuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICBsZXQgaW5wdXRDb25maWcgPSB7XG4gICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGAsXG4gICAgICAgIGlkOiBgJHthdHRyaWJ1dGV9LSR7ZGF0YS5sYXN0SUR9YFxuICAgICAgfTtcbiAgICAgIGxldCBhdHRyaWJ1dGVMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtpbnB1dENvbmZpZy5pZH1cIj4ke2F0dHJMYWJlbH08L2xhYmVsPmA7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdsYWJlbCcpIHtcbiAgICAgICAgYXR0cmlidXRlZmllbGQgKz0gYDxkaXYgY29udGVudGVkaXRhYmxlICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PiR7YXR0clZhbH08L2Rpdj5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRDb25maWcudmFsdWUgPSBhdHRyVmFsO1xuICAgICAgICBpbnB1dENvbmZpZy50eXBlID0gJ3RleHQnO1xuICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PmA7XG4gICAgICB9XG5cbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke2F0dHJpYnV0ZWZpZWxkfTwvZGl2PmA7XG5cbiAgICAgIGxldCB2aXNpYmlsaXR5ID0gJ2Jsb2NrJztcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgdmlzaWJpbGl0eSA9IHZhbHVlcy5zdWJ0eXBlICYmIHZhbHVlcy5zdWJ0eXBlID09PSAncXVpbGwnICYmICdub25lJztcbiAgICAgIH1cblxuICAgICAgYXR0cmlidXRlZmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHthdHRyaWJ1dGV9LXdyYXBcIiBzdHlsZT1cImRpc3BsYXk6ICR7dmlzaWJpbGl0eX1cIj4ke2F0dHJpYnV0ZUxhYmVsfSAke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVmaWVsZDtcbiAgfTtcblxuICBsZXQgcmVxdWlyZWRGaWVsZCA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIGxldCBub1JlcXVpcmUgPSBbXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAncGFyYWdyYXBoJyxcbiAgICAgICAgJ2J1dHRvbidcbiAgICAgIF07XG4gICAgbGV0IG5vTWFrZSA9IFtdO1xuICAgIGxldCByZXF1aXJlRmllbGQgPSAnJztcblxuICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBub1JlcXVpcmUpKSB7XG4gICAgICBub01ha2UucHVzaCh0cnVlKTtcbiAgICB9XG4gICAgaWYgKCFub01ha2Uuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICByZXF1aXJlRmllbGQgPSBib29sQXR0cmlidXRlKCdyZXF1aXJlZCcsIHZhbHVlcywge2ZpcnN0OiBpMThuLnJlcXVpcmVkfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVpcmVGaWVsZDtcbiAgfTtcblxuICAvLyBBcHBlbmQgdGhlIG5ldyBmaWVsZCB0byB0aGUgZWRpdG9yXG4gIGxldCBhcHBlbmROZXdGaWVsZCA9IGZ1bmN0aW9uKHZhbHVlcywgaXNOZXcgPSB0cnVlKSB7XG4gICAgbGV0IHR5cGUgPSB2YWx1ZXMudHlwZSB8fCAndGV4dCc7XG4gICAgbGV0IGxhYmVsID0gdmFsdWVzLmxhYmVsIHx8IGkxOG5bdHlwZV0gfHwgaTE4bi5sYWJlbDtcbiAgICBsZXQgZGVsQnRuID0gbSgnYScsIGkxOG4ucmVtb3ZlLCB7XG4gICAgICAgIGlkOiAnZGVsXycgKyBkYXRhLmxhc3RJRCxcbiAgICAgICAgY2xhc3NOYW1lOiAnZGVsLWJ1dHRvbiBidG4gZGVsZXRlLWNvbmZpcm0nLFxuICAgICAgICB0aXRsZTogaTE4bi5yZW1vdmVNZXNzYWdlXG4gICAgICB9KTtcbiAgICBsZXQgdG9nZ2xlQnRuID0gbSgnYScsIG51bGwsIHtcbiAgICAgIGlkOiBkYXRhLmxhc3RJRCArICctZWRpdCcsXG4gICAgICBjbGFzc05hbWU6ICd0b2dnbGUtZm9ybSBidG4gaWNvbi1wZW5jaWwnLFxuICAgICAgdGl0bGU6IGkxOG4uaGlkZVxuICAgIH0pO1xuICAgIGxldCBjb3B5QnRuID0gbSgnYScsIG51bGwsIHtcbiAgICAgIGlkOiBkYXRhLmxhc3RJRCArICctY29weScsXG4gICAgICBjbGFzc05hbWU6ICdjb3B5LWJ1dHRvbiBidG4gaWNvbi1jb3B5JyxcbiAgICAgIHRpdGxlOiBpMThuLmNvcHlCdXR0b25Ub29sdGlwXG4gICAgfSk7XG5cbiAgICBsZXQgbGlDb250ZW50cyA9IG0oXG4gICAgICAnZGl2JywgW3RvZ2dsZUJ0biwgY29weUJ0biwgZGVsQnRuXSwge2NsYXNzTmFtZTogJ2ZpZWxkLWFjdGlvbnMnfVxuICAgICkub3V0ZXJIVE1MO1xuXG4gICAgbGlDb250ZW50cyArPSBgPGxhYmVsIGNsYXNzPVwiZmllbGQtbGFiZWxcIj4ke3V0aWxzLnBhcnNlZEh0bWwobGFiZWwpfTwvbGFiZWw+YDtcbiAgICBsZXQgcmVxdWlyZWREaXNwbGF5ID0gdmFsdWVzLnJlcXVpcmVkID8gJ3N0eWxlPVwiZGlzcGxheTppbmxpbmVcIicgOiAnJztcbiAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCIgJHtyZXF1aXJlZERpc3BsYXl9PiAqPC9zcGFuPmA7XG5cbiAgICBsZXQgZGVzY0F0dHJzID0ge1xuICAgICAgY2xhc3NOYW1lOiAndG9vbHRpcC1lbGVtZW50JyxcbiAgICAgIHRvb2x0aXA6IHZhbHVlcy5kZXNjcmlwdGlvbixcbiAgICAgIHN0eWxlOiB2YWx1ZXMuZGVzY3JpcHRpb24gPyAnZGlzcGxheTppbmxpbmUtYmxvY2snIDogJ2Rpc3BsYXk6bm9uZSdcbiAgICB9O1xuICAgIGxpQ29udGVudHMgKz0gYDxzcGFuICR7dXRpbHMuYXR0clN0cmluZyhkZXNjQXR0cnMpfT4/PC9zcGFuPmA7XG5cbiAgICBsaUNvbnRlbnRzICs9IG0oJ2RpdicsICcnLCB7Y2xhc3NOYW1lOiAncHJldi1ob2xkZXInfSkub3V0ZXJIVE1MO1xuICAgIGxpQ29udGVudHMgKz0gYDxkaXYgaWQ9XCIke2RhdGEubGFzdElEfS1ob2xkZXJcIiBjbGFzcz1cImZybS1ob2xkZXJcIj5gO1xuICAgIGxpQ29udGVudHMgKz0gJzxkaXYgY2xhc3M9XCJmb3JtLWVsZW1lbnRzXCI+JztcblxuICAgIGxpQ29udGVudHMgKz0gYWR2RmllbGRzKHZhbHVlcyk7XG4gICAgbGlDb250ZW50cyArPSBtKCdhJywgaTE4bi5jbG9zZSwge2NsYXNzTmFtZTogJ2Nsb3NlLWZpZWxkJ30pLm91dGVySFRNTDtcblxuICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XG4gICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcblxuICAgIGxldCBmaWVsZCA9IG0oJ2xpJywgbGlDb250ZW50cywge1xuICAgICAgICAnY2xhc3MnOiB0eXBlICsgJy1maWVsZCBmb3JtLWZpZWxkJyxcbiAgICAgICAgJ3R5cGUnOiB0eXBlLFxuICAgICAgICBpZDogZGF0YS5sYXN0SURcbiAgICAgIH0pO1xuICAgIGxldCAkbGkgPSAkKGZpZWxkKTtcblxuICAgICRsaS5kYXRhKCdmaWVsZERhdGEnLCB7YXR0cnM6IHZhbHVlc30pO1xuXG4gICAgaWYgKHR5cGVvZiBoZWxwZXJzLnN0b3BJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICQoJz4gbGknLCBkLnN0YWdlKS5lcShoZWxwZXJzLnN0b3BJbmRleCkuYmVmb3JlKCRsaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRzdGFnZS5hcHBlbmQoJGxpKTtcbiAgICB9XG5cbiAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRsaSlcbiAgICAuc29ydGFibGUoe3VwZGF0ZTogKCkgPT4gaGVscGVycy51cGRhdGVQcmV2aWV3KCRsaSl9KTtcblxuICAgIGhlbHBlcnMudXBkYXRlUHJldmlldygkbGkpO1xuXG4gICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmFkZCkge1xuICAgICAgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmFkZChmaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZWRpdE9uQWRkICYmIGlzTmV3KSB7XG4gICAgICBoZWxwZXJzLmNsb3NlQWxsRWRpdCgpO1xuICAgICAgaGVscGVycy50b2dnbGVFZGl0KGRhdGEubGFzdElELCBmYWxzZSk7XG4gICAgICAvLyBmaWVsZC5zY3JvbGxJbnRvVmlldygpO1xuICAgIH1cblxuICAgIGRhdGEubGFzdElEID0gaGVscGVycy5pbmNyZW1lbnRJZChkYXRhLmxhc3RJRCk7XG4gIH07XG5cbiAgLy8gU2VsZWN0IGZpZWxkIGh0bWwsIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZVxuICBsZXQgc2VsZWN0RmllbGRPcHRpb25zID0gZnVuY3Rpb24obmFtZSwgb3B0aW9uRGF0YSwgbXVsdGlwbGVTZWxlY3QpIHtcbiAgICBsZXQgb3B0aW9uSW5wdXRUeXBlID0ge1xuICAgICAgICBzZWxlY3RlZDogKG11bHRpcGxlU2VsZWN0ID8gJ2NoZWNrYm94JyA6ICdyYWRpbycpXG4gICAgICB9O1xuICAgIGxldCBvcHRpb25EYXRhT3JkZXIgPSBbXG4gICAgICAndmFsdWUnLFxuICAgICAgJ2xhYmVsJyxcbiAgICAgICdzZWxlY3RlZCdcbiAgICBdO1xuICAgIGxldCBvcHRpb25JbnB1dHMgPSBbXTtcbiAgICBsZXQgb3B0aW9uVGVtcGxhdGUgPSB7c2VsZWN0ZWQ6IGZhbHNlLCBsYWJlbDogJycsIHZhbHVlOiAnJ307XG5cbiAgICBvcHRpb25EYXRhID0gT2JqZWN0LmFzc2lnbihvcHRpb25UZW1wbGF0ZSwgb3B0aW9uRGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gb3B0aW9uRGF0YU9yZGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcHJvcCA9IG9wdGlvbkRhdGFPcmRlcltpXTtcbiAgICAgIGlmIChvcHRpb25EYXRhLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICB0eXBlOiBvcHRpb25JbnB1dFR5cGVbcHJvcF0gfHwgJ3RleHQnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ29wdGlvbi0nICsgcHJvcCxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uRGF0YVtwcm9wXSxcbiAgICAgICAgICBuYW1lOiBuYW1lICsgJy1vcHRpb24nXG4gICAgICAgIH07XG5cbiAgICAgICAgYXR0cnMucGxhY2Vob2xkZXIgPSBpMThuW2BwbGFjZWhvbGRlci4ke3Byb3B9YF0gfHwgJyc7XG5cbiAgICAgICAgaWYgKHByb3AgPT09ICdzZWxlY3RlZCcgJiYgb3B0aW9uRGF0YS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGF0dHJzLmNoZWNrZWQgPSBvcHRpb25EYXRhLnNlbGVjdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uSW5wdXRzLnB1c2gobSgnaW5wdXQnLCBudWxsLCBhdHRycykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZW1vdmVBdHRycyA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ3JlbW92ZSBidG4nLFxuICAgICAgdGl0bGU6IGkxOG4ucmVtb3ZlTWVzc2FnZVxuICAgIH07XG4gICAgb3B0aW9uSW5wdXRzLnB1c2godXRpbHMubWFya3VwKCdhJywgaTE4bi5yZW1vdmUsIHJlbW92ZUF0dHJzKSk7XG5cbiAgICBsZXQgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0aW9uSW5wdXRzKTtcblxuICAgIHJldHVybiBmaWVsZC5vdXRlckhUTUw7XG4gIH07XG5cbiAgbGV0IGNsb25lSXRlbSA9IGZ1bmN0aW9uIGNsb25lSXRlbShjdXJyZW50SXRlbSkge1xuICAgIGxldCBjdXJyZW50SWQgPSBjdXJyZW50SXRlbS5hdHRyKCdpZCcpO1xuICAgIGxldCB0eXBlID0gY3VycmVudEl0ZW0uYXR0cigndHlwZScpO1xuICAgIGxldCB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBjbG9uZU5hbWUgPSB0eXBlICsgJy0nICsgdHM7XG4gICAgbGV0ICRjbG9uZSA9IGN1cnJlbnRJdGVtLmNsb25lKCk7XG5cbiAgICAkY2xvbmUuZmluZCgnW2lkXScpLmVhY2goKGksIGVsZW0pID0+IHtcbiAgICAgZWxlbS5pZCA9IGVsZW0uaWQucmVwbGFjZShjdXJyZW50SWQsIGRhdGEubGFzdElEKTtcbiAgICB9KTtcblxuICAgICRjbG9uZS5maW5kKCdbZm9yXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9yJykucmVwbGFjZShjdXJyZW50SWQsIGRhdGEubGFzdElEKSk7XG4gICAgfSk7XG5cbiAgICAkY2xvbmUuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQoJ2U6bm90KC5mb3JtLWVsZW1lbnRzKScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBuZXdOYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIChuZXdOYW1lLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgIG5ld05hbWUgPSBuZXdOYW1lICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuZXdOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJGNsb25lLmZpbmQoJy5mb3JtLWVsZW1lbnRzJykuZmluZCgnOmlucHV0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSAnbmFtZScpIHtcbiAgICAgICAgbGV0IG5ld1ZhbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICBuZXdWYWwgPSBuZXdWYWwuc3Vic3RyaW5nKDAsIChuZXdWYWwubGFzdEluZGV4T2YoJy0nKSArIDEpKTtcbiAgICAgICAgbmV3VmFsID0gbmV3VmFsICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3VmFsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRjbG9uZS5hdHRyKCdpZCcsIGRhdGEubGFzdElEKTtcbiAgICAkY2xvbmUuYXR0cignbmFtZScsIGNsb25lTmFtZSk7XG4gICAgJGNsb25lLmFkZENsYXNzKCdjbG9uZWQnKTtcbiAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRjbG9uZSkuc29ydGFibGUoKTtcblxuICAgIGlmIChvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdICYmIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSkge1xuICAgICAgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKCRjbG9uZVswXSk7XG4gICAgfVxuXG4gICAgZGF0YS5sYXN0SUQgPSBoZWxwZXJzLmluY3JlbWVudElkKGRhdGEubGFzdElEKTtcbiAgICByZXR1cm4gJGNsb25lO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVRJTElUSUVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBkZWxldGUgb3B0aW9uc1xuICAkc3RhZ2Uub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgJGZpZWxkID0gJCh0aGlzKS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgb3B0aW9uc0NvdW50ID0gJCh0aGlzKS5wYXJlbnRzKCcuc29ydGFibGUtb3B0aW9uczplcSgwKScpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcbiAgICBpZiAob3B0aW9uc0NvdW50IDw9IDIpIHtcbiAgICAgIG9wdHMubm90aWZ5LmVycm9yKCdFcnJvcjogJyArIGkxOG4ubWluT3B0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykucGFyZW50KCdsaScpLnNsaWRlVXAoJzI1MCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGZpZWxkKTtcbiAgICAgICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHRvdWNoIGZvY3VzXG4gICRzdGFnZS5vbigndG91Y2hzdGFydCcsICdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgJGlucHV0ID0gJCh0aGlzKTtcbiAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICBpZiAoJGlucHV0LmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAkaW5wdXQudHJpZ2dlcignY2xpY2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRpbnB1dC5mb2N1cygpO1xuICAgICAgICBsZXQgZmllbGRWYWwgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICRpbnB1dC52YWwoZmllbGRWYWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICAvLyB0b2dnbGUgZmllbGRzXG4gICRzdGFnZS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcudG9nZ2xlLWZvcm0sIC5jbG9zZS1maWVsZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICBsZXQgdGFyZ2V0SUQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpLmF0dHIoJ2lkJyk7XG4gICAgICBoZWxwZXJzLnRvZ2dsZUVkaXQodGFyZ2V0SUQpO1xuICAgICAgZS5oYW5kbGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgJHN0YWdlLm9uKCdjaGFuZ2UnLCAnW25hbWU9XCJzdWJ0eXBlXCJdJywgKGUpID0+IHtcbiAgICBjb25zdCAkZmllbGQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgY29uc3QgJHZhbFdyYXAgPSAkKCcudmFsdWUtd3JhcCcsICRmaWVsZCk7XG4gICAgJHZhbFdyYXAudG9nZ2xlKGUudGFyZ2V0LnZhbHVlICE9PSAncXVpbGwnKTtcbiAgfSk7XG5cblxuICAkc3RhZ2Uub24oJ2NoYW5nZScsICcucHJldi1ob2xkZXIgaW5wdXQsIC5wcmV2LWhvbGRlciBzZWxlY3QsIC5wcmV2LWhvbGRlciB0ZXh0YXJlYScsIGUgPT4ge1xuICAgIGxldCBwcmV2T3B0aW9ucztcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdGhlci1vcHRpb24nKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZmllbGQgPSB1dGlscy5jbG9zZXN0KGUudGFyZ2V0LCAnLmZvcm0tZmllbGQnKTtcbiAgICBpZiAodXRpbHMuaW5BcnJheShmaWVsZC50eXBlLCBbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgbGV0IG9wdGlvbnMgPSBmaWVsZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb24tdmFsdWUnKTtcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICB1dGlscy5mb3JFYWNoKG9wdGlvbnMsIGkgPT4ge1xuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnNbaV0ucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmNoZWNrZWQgPSBlLnRhcmdldC52YWx1ZSA9PT0gb3B0aW9uc1tpXS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGUudGFyZ2V0Lm5hbWUpO1xuICAgICAgICB1dGlscy5mb3JFYWNoKHByZXZPcHRpb25zLCBpID0+IHtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zW2ldLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5jaGVja2VkID0gcHJldk9wdGlvbnNbaV0uY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaWVsZFZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZS0nICsgZmllbGQuaWQpO1xuICAgICAgaWYoZmllbGRWYWwpIHtcbiAgICAgICAgZmllbGRWYWwudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcbiAgfSk7XG5cbiAgLy8gdXBkYXRlIHByZXZpZXcgdG8gbGFiZWxcbiAgdXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMoZC5zdGFnZSwgJ2tleXVwIGNoYW5nZScsIGUgPT4ge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGQtbGFiZWwnKSkgcmV0dXJuO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIHx8IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICBsZXQgbGFiZWwgPSB1dGlscy5jbG9zZXN0KGUudGFyZ2V0LCAnLmZvcm0tZmllbGQnKS5xdWVyeVNlbGVjdG9yKCcuZmllbGQtbGFiZWwnKTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSB1dGlscy5wYXJzZWRIdG1sKHZhbHVlKTtcbiAgfSk7XG5cbiAgLy8gcmVtb3ZlIGVycm9yIHN0eWxpbmcgd2hlbiB1c2VycyB0cmllcyB0byBjb3JyZWN0IG1pc3Rha2VcbiAgJHN0YWdlLm9uKCdrZXl1cCcsICdpbnB1dC5lcnJvcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSk7XG5cbiAgLy8gdXBkYXRlIHByZXZpZXcgZm9yIGRlc2NyaXB0aW9uXG4gICRzdGFnZS5vbigna2V5dXAnLCAnaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJywgZnVuY3Rpb24oZSkge1xuICAgIGxldCAkZmllbGQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgIGxldCBjbG9zZXN0VG9vbFRpcCA9ICQoJy50b29sdGlwLWVsZW1lbnQnLCAkZmllbGQpO1xuICAgIGxldCB0dFZhbCA9ICQoZS50YXJnZXQpLnZhbCgpO1xuICAgIGlmICh0dFZhbCAhPT0gJycpIHtcbiAgICAgIGlmICghY2xvc2VzdFRvb2xUaXAubGVuZ3RoKSB7XG4gICAgICAgIGxldCB0dCA9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke3R0VmFsfVwiPj88L3NwYW4+YDtcbiAgICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJGZpZWxkKS5hZnRlcih0dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZXN0VG9vbFRpcC5hdHRyKCd0b29sdGlwJywgdHRWYWwpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNsb3Nlc3RUb29sVGlwLmxlbmd0aCkge1xuICAgICAgICBjbG9zZXN0VG9vbFRpcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBtdWx0aXBsZSBzZWxlY3Qgb3B0aW9uc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGUgY2xpY2sgZXZlbnRcbiAgICogQHJldHVybiB7U3RyaW5nfSBuZXdUeXBlXG4gICAqL1xuICAkc3RhZ2Uub24oJ2NoYW5nZScsICcuZmxkLW11bHRpcGxlJywgZSA9PiB7XG4gICAgbGV0IG5ld1R5cGUgPSBlLnRhcmdldC5jaGVja2VkID8gJ2NoZWNrYm94JyA6ICdyYWRpbyc7XG4gICAgbGV0ICRvcHRpb25zID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWVsZW1lbnRzJykpO1xuICAgICRvcHRpb25zLmVhY2goaSA9PiAkb3B0aW9uc1tpXS50eXBlID0gbmV3VHlwZSk7XG4gICAgcmV0dXJuIG5ld1R5cGU7XG4gIH0pO1xuXG4gIC8vIGZvcm1hdCBuYW1lIGF0dHJpYnV0ZVxuICAkc3RhZ2Uub24oJ2JsdXInLCAnaW5wdXQuZmxkLW5hbWUnLCBmdW5jdGlvbihlKSB7XG4gICAgZS50YXJnZXQudmFsdWUgPSB1dGlscy5zYWZlbmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgJChlLnRhcmdldClcbiAgICAgIC5hZGRDbGFzcygnZmllbGQtZXJyb3InKVxuICAgICAgLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi5jYW5ub3RCZUVtcHR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2ZpZWxkLWVycm9yJyk7XG4gICAgfVxuICB9KTtcblxuICAkc3RhZ2Uub24oJ2JsdXInLCAnaW5wdXQuZmxkLW1heGxlbmd0aCcsIGUgPT4ge1xuICAgIGUudGFyZ2V0LnZhbHVlID0gdXRpbHMuZm9yY2VOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICB9KTtcblxuICAvLyBDb3B5IGZpZWxkXG4gICRzdGFnZS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuaWNvbi1jb3B5JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3VycmVudEl0ZW0gPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoJ2xpJyk7XG4gICAgbGV0ICRjbG9uZSA9IGNsb25lSXRlbShjdXJyZW50SXRlbSk7XG4gICAgJGNsb25lLmluc2VydEFmdGVyKGN1cnJlbnRJdGVtKTtcbiAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGNsb25lKTtcbiAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcbiAgfSk7XG5cbiAgLy8gRGVsZXRlIGZpZWxkXG4gICRzdGFnZS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuZGVsZXRlLWNvbmZpcm0nLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXG4gICAgICB9O1xuXG4gICAgbGV0IGRlbGV0ZUlEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgIGNvbnN0ICRmaWVsZCA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlSUQpKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsQ2xvc2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBzdXJlIHRoZXkgd2FudCB0byByZW1vdmUgdGhlIGZpZWxkXG4gICAgaWYgKG9wdHMuZmllbGRSZW1vdmVXYXJuKSB7XG4gICAgICBsZXQgd2FybkgzID0gdXRpbHMubWFya3VwKCdoMycsIGkxOG4ud2FybmluZyk7XG4gICAgICBsZXQgd2Fybk1lc3NhZ2UgPSB1dGlscy5tYXJrdXAoJ3AnLCBpMThuLmZpZWxkUmVtb3ZlV2FybmluZyk7XG4gICAgICBoZWxwZXJzLmNvbmZpcm0oW3dhcm5IMywgd2Fybk1lc3NhZ2VdLCAoKSA9PlxuICAgICAgICBoZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKSwgY29vcmRzKTtcbiAgICAgICRmaWVsZC5hZGRDbGFzcygnZGVsZXRpbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBVcGRhdGUgYnV0dG9uIHN0eWxlIHNlbGVjdGlvblxuICAkc3RhZ2Uub24oJ2NsaWNrJywgJy5zdHlsZS13cmFwIGJ1dHRvbicsIGUgPT4ge1xuICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcbiAgICBsZXQgc3R5bGVWYWwgPSAkYnV0dG9uLnZhbCgpO1xuICAgIGxldCAkYnRuU3R5bGUgPSAkYnV0dG9uLnBhcmVudCgpLnByZXYoJy5idG4tc3R5bGUnKTtcbiAgICAkYnRuU3R5bGUudmFsKHN0eWxlVmFsKTtcbiAgICAkYnV0dG9uLnNpYmxpbmdzKCcuYnRuJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgJGJ1dHRvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGJ0blN0eWxlLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykpO1xuICAgIGhlbHBlcnMuc2F2ZS5jYWxsKGhlbHBlcnMpO1xuICB9KTtcblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byB0b2dnbGUgcmVxdWlyZWQgYXN0ZXJpc2tcbiAgJHN0YWdlLm9uKCdjbGljaycsICcuZmxkLXJlcXVpcmVkJywgZSA9PiB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKS5maW5kKCcucmVxdWlyZWQtYXN0ZXJpc2snKS50b2dnbGUoKTtcbiAgfSk7XG5cbiAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJvbGVzIHZpc2liaWxpdHlcbiAgJHN0YWdlLm9uKCdjbGljaycsICdpbnB1dC5mbGQtYWNjZXNzJywgZnVuY3Rpb24oZSkge1xuICAgIGxldCByb2xlcyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykuZmluZCgnLmF2YWlsYWJsZS1yb2xlcycpO1xuICAgIGxldCBlbmFibGVSb2xlc0NCID0gJChlLnRhcmdldCk7XG4gICAgcm9sZXMuc2xpZGVUb2dnbGUoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghZW5hYmxlUm9sZXNDQi5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCByb2xlcykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byBhZGQgbmV3IG9wdGlvbnNcbiAgJHN0YWdlLm9uKCdjbGljaycsICcuYWRkLW9wdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0ICRvcHRpb25XcmFwID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmZpZWxkLW9wdGlvbnMnKTtcbiAgICBsZXQgJG11bHRpcGxlID0gJCgnW25hbWU9XCJtdWx0aXBsZVwiXScsICRvcHRpb25XcmFwKTtcbiAgICBsZXQgJGZpcnN0T3B0aW9uID0gJCgnLm9wdGlvbi1zZWxlY3RlZDplcSgwKScsICRvcHRpb25XcmFwKTtcbiAgICBsZXQgaXNNdWx0aXBsZSA9IGZhbHNlO1xuXG4gICAgaWYgKCRtdWx0aXBsZS5sZW5ndGgpIHtcbiAgICAgIGlzTXVsdGlwbGUgPSAkbXVsdGlwbGUucHJvcCgnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc011bHRpcGxlID0gKCRmaXJzdE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcpO1xuICAgIH1cblxuICAgIGxldCBuYW1lID0gJGZpcnN0T3B0aW9uLmF0dHIoJ25hbWUnKTtcblxuICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJG9wdGlvbldyYXApLmFwcGVuZChzZWxlY3RGaWVsZE9wdGlvbnMobmFtZSwgZmFsc2UsIGlzTXVsdGlwbGUpKTtcbiAgfSk7XG5cbiAgJHN0YWdlLm9uKCdtb3VzZW92ZXIgbW91c2VvdXQnLCAnLnJlbW92ZSwgLmRlbC1idXR0b24nLCBlID0+XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKS50b2dnbGVDbGFzcygnZGVsZXRlJykpO1xuXG4gIGxvYWRGaWVsZHMoKTtcblxuICAkc3RhZ2UuY3NzKCdtaW4taGVpZ2h0JywgJGNiVUwuaGVpZ2h0KCkpO1xuXG4gIC8vIElmIG9wdGlvbiBzZXQsIGNvbnRyb2xzIHdpbGwgcmVtYWluIGluIHZpZXcgaW4gZWRpdG9yXG4gIGlmIChvcHRzLnN0aWNreUNvbnRyb2xzLmVuYWJsZSkge1xuICAgIGhlbHBlcnMuc3RpY2t5Q29udHJvbHMoJHN0YWdlKTtcbiAgfVxuXG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmxvYWRlZCk7XG5cbiAgLy8gTWFrZSBhY3Rpb25zIGFjY2Vzc2libGVcbiAgZm9ybUJ1aWxkZXIuYWN0aW9ucyA9IHtcbiAgICBjbGVhckZpZWxkczogYW5pbWF0ZSA9PiBoZWxwZXJzLnJlbW92ZUFsbEZpZWxkcyhkLnN0YWdlLCBhbmltYXRlKSxcbiAgICBzaG93RGF0YTogaGVscGVycy5zaG93RGF0YS5iaW5kKGhlbHBlcnMpLFxuICAgIHNhdmU6IGhlbHBlcnMuc2F2ZS5iaW5kKGhlbHBlcnMpLFxuICAgIGFkZEZpZWxkOiAoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICBoZWxwZXJzLnN0b3BJbmRleCA9IGRhdGEuZm9ybURhdGEubGVuZ3RoID8gaW5kZXggOiB1bmRlZmluZWQ7XG4gICAgICBwcmVwRmllbGRWYXJzKGZpZWxkKTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmZpZWxkQWRkZWQpO1xuICAgIH0sXG4gICAgcmVtb3ZlRmllbGQ6IGhlbHBlcnMucmVtb3ZlRmllbGQuYmluZChoZWxwZXJzKSxcbiAgICBnZXREYXRhOiAodHlwZSA9ICdqcycpID0+IHtcbiAgICAgIGNvbnN0IHN0YWdlID0gZC5zdGFnZTtcbiAgICAgIGNvbnN0IGggPSBoZWxwZXJzO1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAganM6ICgpID0+IGgucHJlcERhdGEoc3RhZ2UpLFxuICAgICAgICB4bWw6ICgpID0+IGgueG1sU2F2ZShzdGFnZSksXG4gICAgICAgIGpzb246ICgpID0+IHdpbmRvdy5KU09OLnN0cmluZ2lmeShoLnByZXBEYXRhKHN0YWdlKSwgbnVsbCwgJ1xcdCcpXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZGF0YVt0eXBlXSgpO1xuICAgIH0sXG4gICAgc2V0RGF0YTogZm9ybURhdGEgPT4ge1xuICAgICAgaGVscGVycy5yZW1vdmVBbGxGaWVsZHMoZC5zdGFnZSwgZmFsc2UpO1xuICAgICAgbG9hZEZpZWxkcyhmb3JtRGF0YSk7XG4gICAgfSxcbiAgICBzZXRMYW5nOiBhc3luYyBsb2NhbGUgPT4ge1xuICAgICAgYXdhaXQgbWkxOG4uc2V0Q3VycmVudC5jYWxsKG1pMThuLCBsb2NhbGUpO1xuICAgICAgZC5lbXB0eShlbGVtZW50KTtcbiAgICAgIGxldCBmb3JtQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcihvcmlnaW5hbE9wdHMsIGVsZW1lbnQpO1xuICAgICAgJChlbGVtZW50KS5kYXRhKCdmb3JtQnVpbGRlcicsIGZvcm1CdWlsZGVyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZvcm1CdWlsZGVyO1xufTtcblxuXG4oZnVuY3Rpb24oICQgKSB7XG4gICQuZm4uZm9ybUJ1aWxkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGxldCBlbGVtcyA9IHRoaXM7XG4gICAgbGV0IHtpMThuLCAuLi5vcHRzfSA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucywgdHJ1ZSk7XG4gICAgY29uZmlnLm9wdHMgPSBvcHRzO1xuICAgIGxldCBpMThuT3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0STE4biwgaTE4biwgdHJ1ZSk7XG4gICAgbGV0IGluc3RhbmNlID0ge1xuICAgICAgYWN0aW9uczoge1xuICAgICAgICBnZXREYXRhOiBudWxsLFxuICAgICAgICBzZXREYXRhOiBudWxsLFxuICAgICAgICBzYXZlOiBudWxsLFxuICAgICAgICBzaG93RGF0YTogbnVsbCxcbiAgICAgICAgc2V0TGFuZzogbnVsbCxcbiAgICAgICAgYWRkRmllbGQ6IG51bGwsXG4gICAgICAgIHJlbW92ZUZpZWxkOiBudWxsLFxuICAgICAgICBjbGVhckZpZWxkczogbnVsbFxuICAgICAgfSxcbiAgICAgIGdldCBmb3JtRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmFjdGlvbnMuZ2V0RGF0YSgnanNvbicpO1xuICAgICAgfSxcbiAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBtaTE4bi5pbml0KGkxOG5PcHRzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBlbGVtcy5lYWNoKGkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1CdWlsZGVyID0gbmV3IEZvcm1CdWlsZGVyKG9wdHMsIGVsZW1zW2ldKTtcbiAgICAgICAgICAgICQoZWxlbXNbaV0pLmRhdGEoJ2Zvcm1CdWlsZGVyJywgZm9ybUJ1aWxkZXIpO1xuICAgICAgICAgICAgaW5zdGFuY2UuYWN0aW9ucyA9IGZvcm1CdWlsZGVyLmFjdGlvbnM7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGVsZXRlIGluc3RhbmNlLnByb21pc2U7XG4gICAgICAgICAgcmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59KSggalF1ZXJ5ICk7XG4iLCJpbXBvcnQge2luc3RhbmNlRG9tLCBkZWZhdWx0U3VidHlwZXMsIGVtcHR5LCBvcHRpb25GaWVsZHNSZWdFeH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHtpbnN0YW5jZURhdGF9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCBtaTE4biBmcm9tICdtaTE4bic7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuXG5jb25zdCBvcHRzID0gY29uZmlnLm9wdHM7XG5jb25zdCBtID0gdXRpbHMubWFya3VwO1xuXG4vKipcbiAqIFV0aWxpdGllcyBzcGVjaWZpYyB0byBmb3JtLWJ1aWxkZXIuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XG4gIC8qKlxuICAgKiBTZXR1cCBkZWZhdWx0cywgZ2V0IGluc3RhbmNlIGRhdGEgYW5kIGRvbVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZvcm1JRCBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihmb3JtSUQpIHtcbiAgICB0aGlzLmRhdGEgPSBpbnN0YW5jZURhdGFbZm9ybUlEXTtcbiAgICB0aGlzLmQgPSBpbnN0YW5jZURvbVtmb3JtSURdO1xuICAgIHRoaXMuZG9DYW5jZWwgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igd2hlbiBhIGRyYWcgYmVnaW5zXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKi9cbiAgc3RhcnRNb3ZpbmcoZXZlbnQsIHVpKSB7XG4gICAgdWkuaXRlbS5zaG93KCkuYWRkQ2xhc3MoJ21vdmluZycpO1xuICAgIHRoaXMuZG9DYW5jZWwgPSB0cnVlO1xuICAgIHRoaXMuZnJvbSA9IHVpLml0ZW0ucGFyZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGVuZHNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqL1xuICBzdG9wTW92aW5nKGV2ZW50LCB1aSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdWkuaXRlbS5yZW1vdmVDbGFzcygnbW92aW5nJyk7XG4gICAgaWYgKF90aGlzLmRvQ2FuY2VsKSB7XG4gICAgICBpZiAodWkuc2VuZGVyKSB7XG4gICAgICAgICQodWkuc2VuZGVyKS5zb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmZyb20uc29ydGFibGUoJ2NhbmNlbCcpO1xuICAgIH1cbiAgICBfdGhpcy5zYXZlKCk7XG4gICAgX3RoaXMuZG9DYW5jZWwgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgVUkgc29ydGFibGUgYmVmb3JlU3RvcCBjYWxsYmFjayB1c2VkIGZvciBib3RoIGxpc3RzLlxuICAgKiBMb2dpYyBmb3IgY2FuY2VsaW5nIHRoZSBzb3J0IG9yIGRyb3AuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgYmVmb3JlU3RvcChldmVudCwgdWkpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnN0IG9wdHMgPSBjb25maWcub3B0cztcbiAgICBjb25zdCBmb3JtID0gX3RoaXMuZC5zdGFnZTtcbiAgICBsZXQgbGFzdEluZGV4ID0gZm9ybS5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7XG4gICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG4gICAgX3RoaXMuc3RvcEluZGV4ID0gdWkucGxhY2Vob2xkZXIuaW5kZXgoKSAtIDE7XG5cbiAgICBpZiAoIW9wdHMuc29ydGFibGVDb250cm9scyAmJiB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCdmcm1iLWNvbnRyb2wnKSkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKF90aGlzLnN0b3BJbmRleCA9PT0gMCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKChfdGhpcy5zdG9wSW5kZXggKyAxKSA9PT0gbGFzdEluZGV4KTtcbiAgICB9XG5cbiAgICBfdGhpcy5kb0NhbmNlbCA9IGNhbmNlbEFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIGdldCBlbGVtZW50IHR5cGUgYW5kIHN1YnR5cGVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAkZmllbGRcbiAgICogQHJldHVybiB7T2JqZWN0fSB7dHlwZTogJ2ZpZWxkVHlwZScsIHN1YnR5cGU6ICdmaWVsZFN1YlR5cGUnfVxuICAgKi9cbiAgZ2V0VHlwZXMoJGZpZWxkKSB7XG4gICAgbGV0IHR5cGVzID0ge1xuICAgICAgICB0eXBlOiAkZmllbGQuYXR0cigndHlwZScpXG4gICAgICB9O1xuICAgIGxldCBzdWJ0eXBlID0gJCgnLmZsZC1zdWJ0eXBlJywgJGZpZWxkKS52YWwoKTtcblxuICAgIGlmIChzdWJ0eXBlICE9PSB0eXBlcy50eXBlKSB7XG4gICAgICB0eXBlcy5zdWJ0eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9wdGlvbiBkYXRhIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgalF1ZXJ5IGZpZWxkIG9iamVjdFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIEFycmF5IG9mIG9wdGlvbiB2YWx1ZXNcbiAgICovXG4gIGZpZWxkT3B0aW9uRGF0YShmaWVsZCkge1xuICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0ICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSAkKCcub3B0aW9uLXNlbGVjdGVkJywgJG9wdGlvbikuaXMoJzpjaGVja2VkJyk7XG4gICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgbGFiZWw6ICQoJy5vcHRpb24tbGFiZWwnLCAkb3B0aW9uKS52YWwoKSxcbiAgICAgICAgICB2YWx1ZTogJCgnLm9wdGlvbi12YWx1ZScsICRvcHRpb24pLnZhbCgpXG4gICAgICAgIH07XG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBhdHRycy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnB1c2goYXR0cnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogWE1MIHNhdmVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmb3JtIHNvcnRhYmxlRmllbGRzIG5vZGVcbiAgICogQHJldHVybiB7U3RyaW5nfSB4bWwgaW4gc3RyaW5nXG4gICAqL1xuICB4bWxTYXZlKGZvcm0pIHtcbiAgICBsZXQgZm9ybURhdGEgPSB0aGlzLnByZXBEYXRhKGZvcm0pO1xuICAgIGxldCB4bWwgPSBbJzxmb3JtLXRlbXBsYXRlPlxcblxcdDxmaWVsZHM+J107XG5cbiAgICB1dGlscy5mb3JFYWNoKGZvcm1EYXRhLCBmdW5jdGlvbihmaWVsZEluZGV4LCBmaWVsZCkge1xuICAgICAgbGV0IGZpZWxkQ29udGVudCA9IG51bGw7XG4gICAgICBjb25zdCBvcHRpb25GaWVsZHMgPSBvcHRpb25GaWVsZHNSZWdFeDtcblxuICAgICAgLy8gSGFuZGxlIG9wdGlvbnNcbiAgICAgIGlmIChmaWVsZC50eXBlLm1hdGNoKG9wdGlvbkZpZWxkcykpIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IG0oJ29wdGlvbicsIG9wdGlvbkRhdGFbaV0ubGFiZWwsIG9wdGlvbkRhdGFbaV0pLm91dGVySFRNTDtcbiAgICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdFxcdCcgKyBvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucHVzaCgnXFxuXFx0XFx0Jyk7XG5cbiAgICAgICAgZmllbGRDb250ZW50ID0gb3B0aW9ucy5qb2luKCcnKTtcbiAgICAgICAgZGVsZXRlIGZpZWxkLnZhbHVlcztcbiAgICAgIH1cblxuICAgICAgbGV0IHhtbEZpZWxkID0gbSgnZmllbGQnLCBmaWVsZENvbnRlbnQsIGZpZWxkKTtcbiAgICAgIHhtbC5wdXNoKCdcXG5cXHRcXHQnICsgeG1sRmllbGQub3V0ZXJIVE1MKTtcbiAgICB9KTtcblxuICAgIHhtbC5wdXNoKCdcXG5cXHQ8L2ZpZWxkcz5cXG48L2Zvcm0tdGVtcGxhdGU+Jyk7XG5cbiAgICByZXR1cm4geG1sLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBmb3JtRGF0YSBmcm9tIGVkaXRvciBpbiBKUyBPYmplY3QgZm9ybWF0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybSBha2Egc3RhZ2UsIERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gZm9ybURhdGFcbiAgICovXG4gIHByZXBEYXRhKGZvcm0pIHtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcbiAgICBsZXQgZCA9IHRoaXMuZDtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIGJ1aWxkIGRhdGEgb2JqZWN0XG4gICAgICB1dGlscy5mb3JFYWNoKGZvcm0uY2hpbGROb2RlcywgYXN5bmMgZnVuY3Rpb24oaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGxldCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICBpZiAoISgkZmllbGQuaGFzQ2xhc3MoJ2Rpc2FibGVkLWZpZWxkJykpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IF90aGlzLmdldFR5cGVzKCRmaWVsZCk7XG4gICAgICAgICAgbGV0IHJvbGVWYWxzID0gJCgnLnJvbGVzLWZpZWxkOmNoZWNrZWQnLCBmaWVsZCkubWFwKGVsZW0gPT4gZWxlbS52YWx1ZSkuZ2V0KCk7XG5cbiAgICAgICAgICBfdGhpcy5zZXRBdHRyVmFscyhmaWVsZCwgZmllbGREYXRhKTtcblxuICAgICAgICAgIGlmIChmaWVsZERhdGEuc3VidHlwZSkge1xuICAgICAgICAgICAgaWYgKGZpZWxkRGF0YS5zdWJ0eXBlID09PSAncXVpbGwnKSB7XG4gICAgICAgICAgICAgIGxldCBpZCA9IGAke2ZpZWxkRGF0YS5uYW1lfS1wcmV2aWV3YDtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbaWRdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gd2luZG93LmZiRWRpdG9ycy5xdWlsbFtpZF0uaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGluc3RhbmNlLmdldENvbnRlbnRzKCk7XG4gICAgICAgICAgICAgICAgZmllbGREYXRhLnZhbHVlID0gd2luZG93LkpTT04uc3RyaW5naWZ5KGRhdGEub3BzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKGZpZWxkRGF0YS5zdWJ0eXBlID09PSAndGlueW1jZScgJiYgd2luZG93LnRpbnltY2UpIHtcbiAgICAgICAgICAgICAgbGV0IGlkID0gYCR7ZmllbGREYXRhLm5hbWV9LXByZXZpZXdgO1xuICAgICAgICAgICAgICBpZiAod2luZG93LnRpbnltY2UuZWRpdG9yc1tpZF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgZWRpdG9yID0gd2luZG93LnRpbnltY2UuZWRpdG9yc1tpZF07XG4gICAgICAgICAgICAgICAgZmllbGREYXRhLnZhbHVlID0gZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyb2xlVmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5yb2xlID0gcm9sZVZhbHMuam9pbignLCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YS5jbGFzc05hbWUgPSBmaWVsZERhdGEuY2xhc3NOYW1lIHx8IGZpZWxkRGF0YS5jbGFzcztcblxuICAgICAgICAgIGxldCBtYXRjaCA9IC8oPzpefFxccylidG4tKC4qPykoPzpcXHN8JCkvZy5leGVjKGZpZWxkRGF0YS5jbGFzc05hbWUpO1xuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgZmllbGREYXRhLnN0eWxlID0gbWF0Y2hbMV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGREYXRhID0gdXRpbHMudHJpbU9iaihmaWVsZERhdGEpO1xuXG4gICAgICAgICAgbGV0IG11bHRpcGxlRmllbGQgPSBmaWVsZERhdGEudHlwZS5tYXRjaChkLm9wdGlvbkZpZWxkc1JlZ0V4KTtcblxuICAgICAgICAgIGlmIChtdWx0aXBsZUZpZWxkKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gX3RoaXMuZmllbGRPcHRpb25EYXRhKCRmaWVsZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuZCBzZXQgdGhlIGRhdGEgZm9yIGFuIGVkaXRvci4gTWFpbmx5XG4gICAqIGEgd3JhcHBlciBmb3IgaGFuZGxpbmcgZGF0YVR5cGUgb3B0aW9uXG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybiB7T2JqZWN0fSBmb3JtRGF0YVxuICAgKi9cbiAgZ2V0RGF0YShmb3JtRGF0YSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGlmICghZm9ybURhdGEpIHtcbiAgICAgIGZvcm1EYXRhID0gY29uZmlnLm9wdHMuZm9ybURhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzZXREYXRhID0ge1xuICAgICAgeG1sOiBmb3JtRGF0YSA9PiB1dGlscy5wYXJzZVhNTChmb3JtRGF0YSksXG4gICAgICBqc29uOiBmb3JtRGF0YSA9PiB3aW5kb3cuSlNPTi5wYXJzZShmb3JtRGF0YSlcbiAgICB9O1xuXG4gICAgZGF0YS5mb3JtRGF0YSA9IHNldERhdGFbY29uZmlnLm9wdHMuZGF0YVR5cGVdKGZvcm1EYXRhKSB8fCBbXTtcblxuICAgIHJldHVybiBkYXRhLmZvcm1EYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGFuZCByZXR1cm5zIGZvcm1EYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGFnZSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtYTUx8SlNPTn0gZm9ybURhdGFcbiAgICovXG4gIHNhdmUoc3RhZ2UpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGlmKCFzdGFnZSkge1xuICAgICAgc3RhZ2UgPSB0aGlzLmQuc3RhZ2U7XG4gICAgfVxuICAgIGxldCBkb1NhdmUgPSB7XG4gICAgICB4bWw6ICgpID0+IF90aGlzLnhtbFNhdmUoc3RhZ2UpLFxuICAgICAganNvbjogKCkgPT5cbiAgICAgIHdpbmRvdy5KU09OLnN0cmluZ2lmeShfdGhpcy5wcmVwRGF0YShzdGFnZSksIG51bGwsICdcXHQnKVxuICAgIH07XG5cbiAgICAvLyBzYXZlIGFjdGlvbiBmb3IgY3VycmVudCBgZGF0YVR5cGVgXG4gICAgZGF0YS5mb3JtRGF0YSA9IGRvU2F2ZVtjb25maWcub3B0cy5kYXRhVHlwZV0oc3RhZ2UpO1xuXG4gICAgLy8gdHJpZ2dlciBmb3JtU2F2ZWQgZXZlbnRcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5mb3JtU2F2ZWQpO1xuICAgIHJldHVybiBkYXRhLmZvcm1EYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIGluY3JlbWVudHMgdGhlIGZpZWxkIGlkcyB3aXRoIHN1cHBvcnQgZm9yIG11bHRpcGxlIGVkaXRvcnNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBpZCBmaWVsZCBJRFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgIGluY3JlbWVudGVkIGZpZWxkIElEXG4gICAqL1xuICBpbmNyZW1lbnRJZChpZCkge1xuICAgIGxldCBzcGxpdCA9IGlkLmxhc3RJbmRleE9mKCctJyk7XG4gICAgbGV0IG5ld0ZpZWxkTnVtYmVyID0gcGFyc2VJbnQoaWQuc3Vic3RyaW5nKHNwbGl0ICsgMSkpICsgMTtcbiAgICBsZXQgYmFzZVN0cmluZyA9IGlkLnN1YnN0cmluZygwLCBzcGxpdCk7XG5cbiAgICByZXR1cm4gYCR7YmFzZVN0cmluZ30tJHtuZXdGaWVsZE51bWJlcn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmFsdWVzIGZvciBmaWVsZCBhdHRyaWJ1dGVzIGluIHRoZSBlZGl0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZERhdGFcbiAgICovXG4gIHNldEF0dHJWYWxzKGZpZWxkLCBmaWVsZERhdGEpIHtcbiAgICBsZXQgYXR0cnMgPSBmaWVsZC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwiZmxkLVwiXScpO1xuICAgIGF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBsZXQgdmFsdWU7XG4gICAgICBsZXQgbmFtZSA9IHV0aWxzLmNhbWVsQ2FzZShhdHRyLmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgIGlmIChhdHRyLmF0dHJpYnV0ZXNbJ2NvbnRlbnRlZGl0YWJsZSddKSB7XG4gICAgICAgIHZhbHVlID0gYXR0ci5pbm5lckhUTUw7XG4gICAgICB9IGVsc2UgaWYgKGF0dHIudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICB2YWx1ZSA9IGF0dHIuY2hlY2tlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgIH1cbiAgICAgIGZpZWxkRGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3QgZmllbGQgYXR0cmlidXRlIHZhbHVlcyBhbmQgY2FsbCBmaWVsZFByZXZpZXcgdG8gZ2VuZXJhdGUgcHJldmlld1xuICAgKiBAcGFyYW0gIHtPYmplY3R9ICRmaWVsZCBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICovXG4gIHVwZGF0ZVByZXZpZXcoJGZpZWxkKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgZCA9IHRoaXMuZDtcbiAgICBjb25zdCBmaWVsZENsYXNzID0gJGZpZWxkLmF0dHIoJ2NsYXNzJyk7XG4gICAgbGV0IGZpZWxkID0gJGZpZWxkWzBdO1xuICAgIGlmIChmaWVsZENsYXNzLmluZGV4T2YoJ2lucHV0LWNvbnRyb2wnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmllbGRUeXBlID0gJGZpZWxkLmF0dHIoJ3R5cGUnKTtcbiAgICBsZXQgJHByZXZIb2xkZXIgPSAkKCcucHJldi1ob2xkZXInLCBmaWVsZCk7XG4gICAgbGV0IHByZXZpZXdEYXRhID0ge1xuICAgICAgdHlwZTogZmllbGRUeXBlXG4gICAgfTtcbiAgICBsZXQgcHJldmlldztcblxuICAgIF90aGlzLnNldEF0dHJWYWxzKGZpZWxkLCBwcmV2aWV3RGF0YSk7XG5cbiAgICBsZXQgc3R5bGUgPSAkKCcuYnRuLXN0eWxlJywgZmllbGQpLnZhbCgpO1xuICAgIGlmIChzdHlsZSkge1xuICAgICAgcHJldmlld0RhdGEuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGRUeXBlLm1hdGNoKGQub3B0aW9uRmllbGRzUmVnRXgpKSB7XG4gICAgICBwcmV2aWV3RGF0YS52YWx1ZXMgPSBbXTtcbiAgICAgIHByZXZpZXdEYXRhLm11bHRpcGxlID0gJCgnW25hbWU9XCJtdWx0aXBsZVwiXScsIGZpZWxkKS5pcygnOmNoZWNrZWQnKTtcblxuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbihpLCAkb3B0aW9uKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB7fTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICRvcHRpb24pLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSAkKCcub3B0aW9uLXZhbHVlJywgJG9wdGlvbikudmFsKCk7XG4gICAgICAgIG9wdGlvbi5sYWJlbCA9ICQoJy5vcHRpb24tbGFiZWwnLCAkb3B0aW9uKS52YWwoKTtcbiAgICAgICAgcHJldmlld0RhdGEudmFsdWVzLnB1c2gob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHByZXZpZXdEYXRhID0gdXRpbHMudHJpbU9iaihwcmV2aWV3RGF0YSk7XG5cbiAgICBwcmV2aWV3RGF0YS5jbGFzc05hbWUgPSBfdGhpcy5jbGFzc05hbWVzKGZpZWxkLCBwcmV2aWV3RGF0YSk7XG4gICAgJCgnLmZsZC1jbGFzc05hbWUnLCBmaWVsZCkudmFsKHByZXZpZXdEYXRhLmNsYXNzTmFtZSk7XG5cbiAgICAkZmllbGQuZGF0YSgnZmllbGREYXRhJywgcHJldmlld0RhdGEpO1xuICAgIHByZXZpZXcgPSB1dGlscy5nZXRUZW1wbGF0ZShwcmV2aWV3RGF0YSwgdHJ1ZSk7XG5cbiAgICBlbXB0eSgkcHJldkhvbGRlclswXSk7XG4gICAgJHByZXZIb2xkZXJbMF0uYXBwZW5kQ2hpbGQocHJldmlldyk7XG4gICAgcHJldmlldy5kaXNwYXRjaEV2ZW50KGV2ZW50cy5maWVsZFJlbmRlcmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGEgY3VzdG9tIHRvb2x0aXAgZm9yIGRpc2FibGVkIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICAgKi9cbiAgZGlzYWJsZWRUVChzdGFnZSkge1xuICAgIGNvbnN0IG1vdmUgPSAoZSwgZWxlbSkgPT4ge1xuICAgICAgY29uc3QgZmllbGRPZmZzZXQgPSBlbGVtLmZpZWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIGZpZWxkT2Zmc2V0LmxlZnQgLSAyMTtcbiAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSBmaWVsZE9mZnNldC50b3AgLSBlbGVtLnR0Lm9mZnNldEhlaWdodCAtIDEyO1xuICAgICAgZWxlbS50dC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gICAgfTtcblxuICAgIHN0YWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaXNhYmxlZC1maWVsZCcpLmZvckVhY2goXG4gICAgICBmaWVsZCA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IG9wdHMubWVzc2FnZXMuZmllbGROb25FZGl0YWJsZTtcblxuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICBsZXQgdHQgPSB1dGlscy5tYXJrdXAoJ3AnLCB0aXRsZSwge2NsYXNzTmFtZTogJ2ZybWItdHQnfSk7XG4gICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodHQpO1xuICAgICAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gbW92ZShlLCB7dHQsIGZpZWxkfSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIGNsYXNzTmFtZXMgZm9yIGZpZWxkXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBwcmV2aWV3RGF0YVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGNsYXNzTmFtZXNcbiAgICovXG4gIGNsYXNzTmFtZXMoZmllbGQsIHByZXZpZXdEYXRhKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJy5mbGQtY2xhc3NOYW1lJyk7XG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGk7XG4gICAgbGV0IHR5cGUgPSBwcmV2aWV3RGF0YS50eXBlO1xuICAgIGxldCBzdHlsZSA9IHByZXZpZXdEYXRhLnN0eWxlO1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgbGV0IHR5cGVzID0ge1xuICAgICAgYnV0dG9uOiAnYnRuJyxcbiAgICAgIHN1Ym1pdDogJ2J0bidcbiAgICB9O1xuXG4gICAgbGV0IHByaW1hcnlUeXBlID0gdHlwZXNbdHlwZV07XG5cbiAgICBpZiAocHJpbWFyeVR5cGUpIHtcbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoYCg/Ol58XFxzKSR7cHJpbWFyeVR5cGV9LSguKj8pKD86XFxzfCQpK2AsICdnJyk7XG4gICAgICAgICAgbGV0IG1hdGNoID0gY2xhc3Nlc1tpXS5tYXRjaChyZSk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlICsgJy0nICsgc3R5bGUpO1xuICAgICAgfVxuICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlKTtcbiAgICB9XG5cbiAgICAvLyByZXZlcnNlIHRoZSBhcnJheSB0byBwdXQgY3VzdG9tIGNsYXNzZXMgYXQgZW5kLFxuICAgIC8vIHJlbW92ZSBhbnkgZHVwbGljYXRlcywgY29udmVydCB0byBzdHJpbmcsIHJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgcmV0dXJuIHV0aWxzLnVuaXF1ZShjbGFzc2VzKS5qb2luKCcgJykudHJpbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbmQgb3BlbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvdmVybGF5IEV4aXN0aW5nIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGlhbG9nICBFeGlzdGluZyBkaWFsb2dcbiAgICovXG4gIGNsb3NlQ29uZmlybShvdmVybGF5LCBkaWFsb2cpIHtcbiAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItb3ZlcmxheScpWzBdO1xuICAgIH1cbiAgICBpZiAoIWRpYWxvZykge1xuICAgICAgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1idWlsZGVyLWRpYWxvZycpWzBdO1xuICAgIH1cbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5tb2RhbENsb3NlZCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF5b3V0IGRhdGEgYmFzZWQgb24gY29udHJvbFBvc2l0aW9uIG9wdGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbnRyb2xQb3NpdGlvbiAnbGVmdCcgb3IgJ3JpZ2h0J1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IGxheW91dCBvYmplY3RcbiAgICovXG4gIGVkaXRvckxheW91dChjb250cm9sUG9zaXRpb24pIHtcbiAgICBsZXQgbGF5b3V0TWFwID0ge1xuICAgICAgbGVmdDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtcmlnaHQnLFxuICAgICAgICBjb250cm9sczogJ3B1bGwtbGVmdCdcbiAgICAgIH0sXG4gICAgICByaWdodDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtbGVmdCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1yaWdodCdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGxheW91dE1hcFtjb250cm9sUG9zaXRpb25dID8gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG92ZXJsYXkgdG8gdGhlIHBhZ2UuIFVzZWQgZm9yIG1vZGFscy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gT2JqZWN0XG4gICAqL1xuICBzaG93T3ZlcmxheSgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IG92ZXJsYXkgPSB1dGlscy5tYXJrdXAoJ2RpdicsIG51bGwsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Zvcm0tYnVpbGRlci1vdmVybGF5J1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cbiAgICBvdmVybGF5Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbWVzc2FnZSAgIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7RnVuY30gIHllc0FjdGlvbiBjYWxsYmFjayB0byBmaXJlIGlmIHRoZXkgY29uZmlybVxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgbG9jYXRpb24gdG8gcHV0IHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIEN1c3RvbSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBSZWZlcmVuY2UgdG8gdGhlIG1vZGFsXG4gICAqL1xuICBjb25maXJtKG1lc3NhZ2UsIHllc0FjdGlvbiwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBpMThuID0gbWkxOG4uY3VycmVudDtcbiAgICBsZXQgb3ZlcmxheSA9IF90aGlzLnNob3dPdmVybGF5KCk7XG4gICAgbGV0IHllcyA9IG0oJ2J1dHRvbicsIGkxOG4ueWVzLCB7XG4gICAgICBjbGFzc05hbWU6ICd5ZXMgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSdcbiAgICB9KTtcbiAgICBsZXQgbm8gPSBtKCdidXR0b24nLCBpMThuLm5vLCB7XG4gICAgICBjbGFzc05hbWU6ICdubyBidG4gYnRuLWRhbmdlciBidG4tc20nXG4gICAgfSk7XG5cbiAgICBuby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHllcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB5ZXNBY3Rpb24oKTtcbiAgICAgIF90aGlzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgbGV0IGJ0bldyYXAgPSBtKCdkaXYnLCBbbm8sIHllc10sIHtjbGFzc05hbWU6ICdidXR0b24td3JhcCd9KTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gbSgnZGl2JywgW21lc3NhZ2UsIGJ0bldyYXBdLCB7Y2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvbnN0IGRFID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgY29vcmRzID0ge1xuICAgICAgICBwYWdlWDogTWF0aC5tYXgoZEUuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIC8gMixcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGRFLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIC8gMlxuICAgICAgfTtcbiAgICAgIG1pbmlNb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlNb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XG4gICAgfVxuXG4gICAgbWluaU1vZGFsLnN0eWxlLmxlZnQgPSBjb29yZHMucGFnZVggKyAncHgnO1xuICAgIG1pbmlNb2RhbC5zdHlsZS50b3AgPSBjb29yZHMucGFnZVkgKyAncHgnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtaW5pTW9kYWwpO1xuXG4gICAgeWVzLmZvY3VzKCk7XG4gICAgcmV0dXJuIG1pbmlNb2RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1cCBkaWFsb2cgdGhlIGRvZXMgbm90IHJlcXVpcmUgY29uZmlybWF0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8RE9NfEFycmF5fSAgY29udGVudFxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgZmFsc2UgaWYgbm8gY29vcmRzIGFyZSBwcm92aWRlZC4gV2l0aG91dCBjb29yZGluYXRlc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGNlbnRlciBzY3JlZW4uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGNsYXNzTmFtZSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8gdGhlIGRpYWxvZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgZG9tXG4gICAqL1xuICBkaWFsb2coY29udGVudCwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBfdGhpcy5zaG93T3ZlcmxheSgpO1xuXG4gICAgY2xhc3NOYW1lID0gJ2Zvcm0tYnVpbGRlci1kaWFsb2cgJyArIGNsYXNzTmFtZTtcblxuICAgIGxldCBtaW5pTW9kYWwgPSB1dGlscy5tYXJrdXAoJ2RpdicsIGNvbnRlbnQsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChjbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgLyAyLFxuICAgICAgICBwYWdlWTogTWF0aC5tYXgoY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgLyAyXG4gICAgICB9O1xuICAgICAgbWluaU1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWluaU1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcbiAgICB9XG5cbiAgICBtaW5pTW9kYWwuc3R5bGUubGVmdCA9IGNvb3Jkcy5wYWdlWCArICdweCc7XG4gICAgbWluaU1vZGFsLnN0eWxlLnRvcCA9IGNvb3Jkcy5wYWdlWSArICdweCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1pbmlNb2RhbCk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5tb2RhbE9wZW5lZCk7XG5cbiAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJ2RhdGEtZGlhbG9nJykgIT09IC0xKSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy52aWV3RGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pbmlNb2RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maXJtIGFsbCBmaWVsZHMgd2lsbCBiZSByZW1vdmVkIHRoZW4gcmVtb3ZlIHRoZW1cbiAgICogQHBhcmFtICB7T2JqZWN0fSBlIGNsaWNrIGV2ZW50IG9iamVjdFxuICAgKi9cbiAgY29uZmlybVJlbW92ZUFsbChlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgZm9ybUlEID0gZS50YXJnZXQuaWQubWF0Y2goL2ZybWItXFxkezEzfS8pWzBdO1xuICAgIGxldCBzdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JRCk7XG4gICAgbGV0IGkxOG4gPSBtaTE4bi5jdXJyZW50O1xuICAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgc3RhZ2UpO1xuICAgIGxldCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgIH07XG5cbiAgICBpZiAoZmllbGRzLmxlbmd0aCkge1xuICAgICAgX3RoaXMuY29uZmlybShpMThuLmNsZWFyQWxsTWVzc2FnZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZUFsbEZpZWxkcy5jYWxsKF90aGlzLCBzdGFnZSk7XG4gICAgICAgIGNvbmZpZy5vcHRzLm5vdGlmeS5zdWNjZXNzKGkxOG4uYWxsRmllbGRzUmVtb3ZlZCk7XG4gICAgICAgIGNvbmZpZy5vcHRzLm9uQ2xlYXJBbGwoKTtcbiAgICAgIH0sIGNvb3Jkcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLmRpYWxvZyhpMThuLm5vRmllbGRzVG9DbGVhciwgY29vcmRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgZmllbGRzIGZyb20gdGhlIGZvcm1cbiAgICogQHBhcmFtIHtCb29sZWFufSBhbmltYXRlIHdoZXRoZXIgdG8gYW5pbWF0ZSBvciBub3RcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlbW92ZUFsbEZpZWxkcyhzdGFnZSwgYW5pbWF0ZSA9IHRydWUpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBpMThuID0gbWkxOG4uY3VycmVudDtcbiAgICBsZXQgb3B0cyA9IGNvbmZpZy5vcHRzO1xuICAgIGxldCBmaWVsZHMgPSBzdGFnZS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgbGV0IG1hcmtFbXB0eUFycmF5ID0gW107XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCkge1xuICAgICAgbWFya0VtcHR5QXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIW1hcmtFbXB0eUFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgc3RhZ2UucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgc3RhZ2UucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbnRlbnQgPSBpMThuLmdldFN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgIHN0YWdlLmNsYXNzTGlzdC5hZGQoJ3JlbW92aW5nJyk7XG4gICAgICBsZXQgb3V0ZXJIZWlnaHQgPSAwO1xuICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4gb3V0ZXJIZWlnaHQgKz0gZmllbGQub2Zmc2V0SGVpZ2h0ICsgMyk7XG4gICAgICBmaWVsZHNbMF0uc3R5bGUubWFyZ2luVG9wID0gYCR7LW91dGVySGVpZ2h0fXB4YDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbXB0eShzdGFnZSkuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZpbmcnKTtcbiAgICAgICAgX3RoaXMuc2F2ZShzdGFnZSk7XG4gICAgICB9LCA0MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbXB0eShzdGFnZSk7XG4gICAgICBfdGhpcy5zYXZlKHN0YWdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgdXNlciByZS1vcmRlcnMgdGhlIGVsZW1lbnRzIHRoZWlyIG9yZGVyIHNob3VsZCBiZSBzYXZlZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRjYlVMIG91ciBsaXN0IG9mIGVsZW1lbnRzXG4gICAqL1xuICBzZXRGaWVsZE9yZGVyKCRjYlVMKSB7XG4gICAgaWYgKCFjb25maWcub3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkT3JkZXIgPSB7fTtcblxuICAgICRjYlVMLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgZmllbGRPcmRlcltpbmRleF0gPSAkKGVsZW1lbnQpLmRhdGEoJ3R5cGUnKTtcbiAgICB9KTtcblxuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaWVsZE9yZGVyJywgd2luZG93LkpTT04uc3RyaW5naWZ5KGZpZWxkT3JkZXIpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVvcmRlciB0aGUgY29udHJvbHMgaWYgdGhlIHVzZXIgaGFzIHByZXZpb3VzbHkgb3JkZXJlZCB0aGVtLlxuICAgKlxuICAgKiBAcGFyYW0gIHtBcnJheX0gZnJtYkZpZWxkc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gb3JkZXJlZCBmaWVsZHNcbiAgICovXG4gIG9yZGVyRmllbGRzKGZybWJGaWVsZHMpIHtcbiAgICBjb25zdCBvcHRzID0gY29uZmlnLm9wdHM7XG4gICAgbGV0IGZpZWxkT3JkZXIgPSBmYWxzZTtcbiAgICBsZXQgbmV3T3JkZXJGaWVsZHMgPSBbXTtcblxuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIGlmIChvcHRzLnNvcnRhYmxlQ29udHJvbHMpIHtcbiAgICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnZmllbGRPcmRlcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZmllbGRPcmRlcikge1xuICAgICAgbGV0IGNvbnRyb2xPcmRlciA9IG9wdHMuY29udHJvbE9yZGVyLmNvbmNhdChmcm1iRmllbGRzLm1hcChmaWVsZCA9PlxuICAgICAgICBmaWVsZC5hdHRycy50eXBlKSk7XG4gICAgICBmaWVsZE9yZGVyID0gdXRpbHMudW5pcXVlKGNvbnRyb2xPcmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkT3JkZXIgPSB3aW5kb3cuSlNPTi5wYXJzZShmaWVsZE9yZGVyKTtcbiAgICAgIGZpZWxkT3JkZXIgPSBPYmplY3Qua2V5cyhmaWVsZE9yZGVyKS5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgICByZXR1cm4gZmllbGRPcmRlcltpXTtcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZmllbGRPcmRlci5mb3JFYWNoKChmaWVsZFR5cGUpID0+IHtcbiAgICAgIGxldCBmaWVsZCA9IGZybWJGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBmaWVsZC5hdHRycy50eXBlID09PSBmaWVsZFR5cGU7XG4gICAgICB9KVswXTtcbiAgICAgIG5ld09yZGVyRmllbGRzLnB1c2goZmllbGQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld09yZGVyRmllbGRzLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBmaWVsZHMgYmVpbmcgZWRpdGluZ1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXG4gICAqL1xuICBjbG9zZUFsbEVkaXQoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnN0IGZpZWxkcyA9ICQoJz4gbGkuZWRpdGluZycsIF90aGlzLmQuc3RhZ2UpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAkKCcudG9nZ2xlLWZvcm0nLCBfdGhpcy5kLnN0YWdlKTtcbiAgICBjb25zdCBlZGl0UGFuZWxzID0gJCgnLmZybS1ob2xkZXInLCBmaWVsZHMpO1xuXG4gICAgdG9nZ2xlQnRucy5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgIGZpZWxkcy5yZW1vdmVDbGFzcygnZWRpdGluZycpO1xuICAgICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkcykuc2hvdygpO1xuICAgIGVkaXRQYW5lbHMuaGlkZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGVkaXQgbW9kZSBmb3IgdGhlIGdpdmVuIGZpZWxkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZmllbGRJZFxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBhbmltYXRlXG4gICAqL1xuICB0b2dnbGVFZGl0KGZpZWxkSWQsIGFuaW1hdGUgPSB0cnVlKSB7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElkKTtcbiAgICBjb25zdCB0b2dnbGVCdG4gPSAkKCcudG9nZ2xlLWZvcm0nLCBmaWVsZCk7XG4gICAgY29uc3QgZWRpdFBhbmVsID0gJCgnLmZybS1ob2xkZXInLCBmaWVsZCk7XG4gICAgZmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZycpO1xuICAgIHRvZ2dsZUJ0bi50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZCkuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICAgIGVkaXRQYW5lbC5zbGlkZVRvZ2dsZSgyNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZCkudG9nZ2xlKCk7XG4gICAgICBlZGl0UGFuZWwudG9nZ2xlKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlldygkKGZpZWxkKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIHN0aWNreUNvbnRyb2xzKCkge1xuICAgIGxldCBkID0gdGhpcy5kO1xuICAgIGNvbnN0ICRjYldyYXAgPSAkKGQuY29udHJvbHMpLnBhcmVudCgpO1xuICAgIGNvbnN0ICRzdGFnZVdyYXAgPSAkKGQuc3RhZ2UpLnBhcmVudCgpO1xuICAgIGNvbnN0IGNiV2lkdGggPSAkY2JXcmFwLndpZHRoKCk7XG4gICAgY29uc3QgY2JQb3NpdGlvbiA9IGQuY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQoZXZ0LnRhcmdldCkuc2Nyb2xsVG9wKCk7XG4gICAgICBjb25zdCBvZmZzZXREZWZhdWx0cyA9IHtcbiAgICAgICAgdG9wOiA1LFxuICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgbGVmdDogY2JQb3NpdGlvbi5sZWZ0XG4gICAgICB9O1xuXG4gICAgICBsZXQgb2Zmc2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Zmc2V0RGVmYXVsdHMsIGNvbmZpZy5vcHRzLnN0aWNreUNvbnRyb2xzLm9mZnNldCk7XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPiAkc3RhZ2VXcmFwLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogY2JXaWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNiU3R5bGUgPSBPYmplY3QuYXNzaWduKHN0eWxlLCBvZmZzZXQpO1xuXG4gICAgICAgIGxldCBjYk9mZnNldCA9ICRjYldyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBzdGFnZU9mZnNldCA9ICRzdGFnZVdyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBjYkJvdHRvbSA9IGNiT2Zmc2V0LnRvcCArICRjYldyYXAuaGVpZ2h0KCk7XG4gICAgICAgIGxldCBzdGFnZUJvdHRvbSA9IHN0YWdlT2Zmc2V0LnRvcCArICRzdGFnZVdyYXAuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGNiQm90dG9tID4gc3RhZ2VCb3R0b20gJiYgKGNiT2Zmc2V0LnRvcCAhPT0gc3RhZ2VPZmZzZXQudG9wKSkge1xuICAgICAgICAgICRjYldyYXAuY3NzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNiQm90dG9tIDwgc3RhZ2VCb3R0b20gfHwgKGNiQm90dG9tID09PSBzdGFnZUJvdHRvbSAmJiBjYk9mZnNldC50b3AgPiBzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3MoY2JTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGQuY29udHJvbHMucGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIGRpYWxvZyB3aXRoIHRoZSBmb3JtJ3MgZGF0YVxuICAgKi9cbiAgc2hvd0RhdGEoZSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgY29uc3QgZm9ybURhdGEgPSB1dGlscy5lc2NhcGVIdG1sKGRhdGEuZm9ybURhdGEpO1xuICAgIGNvbnN0IGNvZGUgPSBtKCdjb2RlJywgZm9ybURhdGEsIHtcbiAgICAgIGNsYXNzTmFtZTogYGZvcm1EYXRhLSR7Y29uZmlnLm9wdHMuZGF0YVR5cGV9YFxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2cobSgncHJlJywgY29kZSksIG51bGwsICdkYXRhLWRpYWxvZycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGZpZWxkIGZyb20gdGhlIHN0YWdlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGZpZWxkSUQgSUQgb2YgdGhlIGZpZWxkIHRvIGJlIHJlbW92ZWRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gZmllbGRSZW1vdmVkIHJldHVybnMgdHJ1ZSBpZiBmaWVsZCBpcyByZW1vdmVkXG4gICAqL1xuICByZW1vdmVGaWVsZChmaWVsZElEKSB7XG4gICAgbGV0IGZpZWxkUmVtb3ZlZCA9IGZhbHNlO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZC5zdGFnZTtcbiAgICBjb25zdCBmaWVsZHMgPSBmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tZmllbGQnKTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKCdObyBmaWVsZHMgdG8gcmVtb3ZlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZElEKSB7XG4gICAgICBsZXQgYXZhaWxhYmxlSWRzID0gW10uc2xpY2UuY2FsbChmaWVsZHMpLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmlkO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLndhcm4oJ2ZpZWxkSUQgcmVxdWlyZWQgdG8gcmVtb3ZlIHNwZWNpZmljIGZpZWxkcy4gUmVtb3ZpbmcgbGFzdCBmaWVsZCBzaW5jZSBubyBJRCB3YXMgc3VwcGxpZWQuJyk7XG4gICAgICBjb25zb2xlLndhcm4oJ0F2YWlsYWJsZSBJRHM6ICcgKyBhdmFpbGFibGVJZHMuam9pbignLCAnKSk7XG4gICAgICBmaWVsZElEID0gZm9ybS5sYXN0Q2hpbGQuaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElEKTtcbiAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZpZWxkIG5vdCBmb3VuZCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICRmaWVsZC5zbGlkZVVwKDI1MCwgZnVuY3Rpb24oKSB7XG4gICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICAkZmllbGQucmVtb3ZlKCk7XG4gICAgICBmaWVsZFJlbW92ZWQgPSB0cnVlO1xuICAgICAgX3RoaXMuc2F2ZSgpO1xuICAgICAgaWYgKCFmb3JtLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBzdGFnZVdyYXAgPSBmb3JtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgICBzdGFnZVdyYXAuZGF0YXNldC5jb250ZW50ID0gbWkxOG4uY3VycmVudC5nZXRTdGFydGVkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMuZmllbGRSZW1vdmVkKTtcbiAgICByZXR1cm4gZmllbGRSZW1vdmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCBmb3IgZm9ybSBhY3Rpb24gYnV0dG9uc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGJ1dHRvbkRhdGFcbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gZWxlbWVudCBmb3IgYWN0aW9uIGJ1dHRvblxuICAgKi9cbiAgcHJvY2Vzc0FjdGlvbkJ1dHRvbnMoYnV0dG9uRGF0YSkge1xuICAgIGxldCB7bGFiZWwsIGV2ZW50cywgLi4uYXR0cnN9ID0gYnV0dG9uRGF0YTtcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICBpZiAoYXR0cnMuaWQpIHtcbiAgICAgICAgbGFiZWwgPSBtaTE4bi5jdXJyZW50W2F0dHJzLmlkXSB8fCB1dGlscy5jYXBpdGFsaXplKGF0dHJzLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gJyc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsID0gbWkxOG4uY3VycmVudFtsYWJlbF0gfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCFhdHRycy5pZCkge1xuICAgICAgYXR0cnMuaWQgPSBgJHtkYXRhLmZvcm1JRH0tYWN0aW9uLSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEwMDApfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHJzLmlkID0gYCR7ZGF0YS5mb3JtSUR9LSR7YXR0cnMuaWR9LWFjdGlvbmA7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gbSgnYnV0dG9uJywgbGFiZWwsIGF0dHJzKTtcblxuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldnQgPT4gZXZlbnRzW2V2ZW50XShldnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICAvKipcbiAgICogQ3Jvc3MgbGluayBzdWJ0eXBlcyBhbmQgZGVmaW5lIG1hcmt1cCBjb25maWdcbiAgICogQHBhcmFtICB7QXJyYXl9IHN1YnR5cGVPcHRzXG4gICAqIEByZXR1cm4ge0FycmF5fSBzdWJ0eXBlc1xuICAgKi9cbiAgcHJvY2Vzc1N1YnR5cGVzKHN1YnR5cGVPcHRzKSB7XG4gICAgbGV0IHN1YnR5cGVzID0ge307XG4gICAgY29uc3Qgc3VidHlwZUZvcm1hdCA9IHN1YnR5cGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoc3VidHlwZSksXG4gICAgICAgICAgdmFsdWU6IHN1YnR5cGVcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbmZpZy5zdWJ0eXBlcyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRTdWJ0eXBlcywgc3VidHlwZU9wdHMpO1xuXG4gICAgICBmb3IgKGxldCBzdWJ0eXBlIGluIGNvbmZpZy5zdWJ0eXBlcykge1xuICAgICAgICBpZiAoY29uZmlnLnN1YnR5cGVzLmhhc093blByb3BlcnR5KHN1YnR5cGUpKSB7XG4gICAgICAgICAgc3VidHlwZXNbc3VidHlwZV0gPSBjb25maWcuc3VidHlwZXNbc3VidHlwZV0ubWFwKHN1YnR5cGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdWJ0eXBlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBzdGFnZSBhbmQgY29udHJvbHMgZG9tIGVsZW1lbnRzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZm9ybUlEIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGVkaXRvclVJKGZvcm1JRCkge1xuICAgIGxldCBkID0gdGhpcy5kO1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGQuc3RhZ2UgPSBtKCd1bCcsIG51bGwsIHtcbiAgICAgICAgaWQ6IGRhdGEuZm9ybUlELFxuICAgICAgICBjbGFzc05hbWU6ICdmcm1iJ1xuICAgICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgZHJhZ2dhYmxlIGZpZWxkcyBmb3IgZm9ybUJ1aWxkZXJcbiAgICBkLmNvbnRyb2xzID0gbSgndWwnLCBudWxsLCB7XG4gICAgICBpZDogYCR7ZGF0YS5mb3JtSUR9LWNvbnRyb2wtYm94YCxcbiAgICAgIGNsYXNzTmFtZTogJ2ZybWItY29udHJvbCdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHVzZXIgb3B0aW9ucyBmb3IgYWN0aW9uQnV0dG9uc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBwcm9jZXNzZWRPcHRpb25zXG4gICAqL1xuICBwcm9jZXNzT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGxldCB7ZmllbGRzID0gW10sIHRlbXBsYXRlcywgLi4ub3B0c30gPSBvcHRpb25zO1xuICAgIGxldCBhY3Rpb25CdXR0b25zID0gW3tcbiAgICAgIGlkOiAnY2xlYXInLFxuICAgICAgY2xhc3NOYW1lOiAnY2xlYXItYWxsIGJ0biBidG4tZGFuZ2VyJyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBjbGljazogX3RoaXMuY29uZmlybVJlbW92ZUFsbC5iaW5kKF90aGlzKVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiAndmlld0pTT04nLFxuICAgICAgaWQ6ICdkYXRhJyxcbiAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tZGVmYXVsdCcsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xpY2s6IF90aGlzLnNob3dEYXRhLmJpbmQoX3RoaXMpXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaWQ6ICdzYXZlJyxcbiAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1wcmltYXJ5IHNhdmUtdGVtcGxhdGUnLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsaWNrOiBldnQgPT4ge1xuICAgICAgICAgIF90aGlzLnNhdmUoKTtcbiAgICAgICAgICBjb25maWcub3B0cy5vblNhdmUoZXZ0LCBfdGhpcy5kYXRhLmZvcm1EYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dO1xuXG4gICAgbGV0IGRlZmF1bHRGaWVsZHMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2F1dG9jb21wbGV0ZScpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdhdXRvY29tcGxldGUnXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnYnV0dG9uJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnY2hlY2tib3hHcm91cCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnZGF0ZUZpZWxkJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2ZpbGVVcGxvYWQnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnaGVhZGVyJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2hlYWRlcicsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnaGlkZGVuJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnbnVtYmVyJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgncGFyYWdyYXBoJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgncmFkaW9Hcm91cCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCcsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnc2VsZWN0JyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgndGV4dCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCd0ZXh0QXJlYScpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBvcHRzLmZpZWxkcyA9IGZpZWxkcy5jb25jYXQoZGVmYXVsdEZpZWxkcyk7XG4gICAgY29uZmlnLm9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB7YWN0aW9uQnV0dG9ucywgdGVtcGxhdGVzLCBmaWVsZHN9LCBvcHRzKTtcbiAgICBsZXQgdXNlclRlbXBsYXRlcyA9IE9iamVjdC5rZXlzKGNvbmZpZy5vcHRzLnRlbXBsYXRlcykubWFwKGtleSA9PiB7XG4gICAgICByZXR1cm4gW2tleSwgY29uZmlnLm9wdHMudGVtcGxhdGVzW2tleV1dO1xuICAgIH0pO1xuICAgIHV0aWxzLnRlbXBsYXRlcyA9IHV0aWxzLnRlbXBsYXRlcy5jb25jYXQodXNlclRlbXBsYXRlcyk7XG5cbiAgICByZXR1cm4gY29uZmlnLm9wdHM7XG4gIH1cblxuXG4gIC8vIGVuZCBjbGFzc1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBIZWxwZXJzO1xuIiwiLyoqXG4gKiBQb2x5ZmlsbHMgZm9yIG9sZGVyIGJyb3dzZXJzIGFuZCBhZGRlZCBmdW5jdGlvbmFsaXR5XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwb2x5ZmlsbHMoKSB7XG4gIC8vIEVsZW1lbnQucmVtb3ZlKCkgcG9seWZpbGxcbiAgaWYgKCEoJ3JlbW92ZScgaW4gRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRXZlbnQgcG9seWZpbGxcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5FdmVudCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KGV2dCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfVxuXG4gIC8vIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldCA9IE9iamVjdCh0YXJnZXQpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gIH1cblxuXG4gIC8vIFJlZmVyZW5jZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS40LjQuMThcbiAgaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIGxldCBULCBrO1xuICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aGlzIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTtcbiAgICAgIH1cbiAgICAgIGxldCBPID0gT2JqZWN0KHRoaXMpO1xuICAgICAgbGV0IGxlbiA9IE8ubGVuZ3RoID4+PiAwO1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIFQgPSBhcmd1bWVudHNbMV07XG4gICAgICB9XG4gICAgICBrID0gMDtcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGxldCBrVmFsdWU7XG4gICAgICAgIGlmIChrIGluIE8pIHtcbiAgICAgICAgICBrVmFsdWUgPSBPW2tdO1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoVCwga1ZhbHVlLCBrLCBPKTtcbiAgICAgICAgfVxuICAgICAgICBrKys7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwb2x5ZmlsbHMoKTtcbiIsImltcG9ydCB7ZGVmYXVsdFN1YnR5cGVzLCBmaWx0ZXJ9IGZyb20gJy4vZG9tJztcblxuLyoqXG4gKiBDcm9zcyBmaWxlIHV0aWxpdGllcyBmb3Igd29ya2luZyB3aXRoIGFycmF5cyxcbiAqIHNvcnRpbmcgYW5kIG90aGVyIGZ1biBzdHVmZlxuICogQHJldHVybiB7T2JqZWN0fSB1dGlsc1xuICovXG4vLyBmdW5jdGlvbiB1dGlscygpIHtcbiAgY29uc3QgdXRpbHMgPSB7fTtcbiAgd2luZG93LmZiTG9hZGVkID0ge1xuICAgIGpzOiBbXSxcbiAgICBjc3M6IFtdXG4gIH07XG4gIHdpbmRvdy5mYkVkaXRvcnMgPSB7XG4gICAgcXVpbGw6IHt9LFxuICAgIHRpbnltY2U6IHt9XG4gIH07XG5cbiAgLy8gY2xlYW5lciBzeW50YXggZm9yIHRlc3RpbmcgaW5kZXhPZiBlbGVtZW50XG4gIHV0aWxzLmluQXJyYXkgPSBmdW5jdGlvbihuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICBPYmplY3QgdHJpbW1lZCBvZiBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICovXG4gIHV0aWxzLnRyaW1PYmogPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCB4bWxSZW1vdmUgPSBbXG4gICAgICBudWxsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgJycsXG4gICAgICBmYWxzZSxcbiAgICAgICdmYWxzZSdcbiAgICBdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmICh1dGlscy5pbkFycmF5KGF0dHJzW2F0dHJdLCB4bWxSZW1vdmUpKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhdHRyc1thdHRyXSkpIHtcbiAgICAgICAgaWYgKCFhdHRyc1thdHRyXS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgYXR0cmlidXRlIGlzIGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICB1dGlscy52YWxpZEF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XG4gICAgbGV0IGludmFsaWQgPSBbXG4gICAgICAndmFsdWVzJyxcbiAgICAgICdlbmFibGVPdGhlcicsXG4gICAgICAnb3RoZXInLFxuICAgICAgJ2xhYmVsJyxcbiAgICAgIC8vICdzdHlsZScsXG4gICAgICAnc3VidHlwZSdcbiAgICBdO1xuICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShhdHRyLCBpbnZhbGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBhdHRycyBvYmplY3QgaW50byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIG9iamVjdCBvZiBhdHRyaWJ1dGVzIGZvciBtYXJrdXBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdXRpbHMuYXR0clN0cmluZyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSAmJiB1dGlscy52YWxpZEF0dHIoYXR0cikpIHtcbiAgICAgICAgYXR0ciA9IHV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIubmFtZSArIGF0dHIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlcy5qb2luKCcgJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXR0cmlidXRlcyB0byBtYXJrdXAgc2FmZSBzdHJpbmdzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIHV0aWxzLnNhZmVBdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gdXRpbHMuc2FmZUF0dHJOYW1lKG5hbWUpO1xuICAgIGxldCB2YWxTdHJpbmc7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWxTdHJpbmcgPSB1dGlscy5lc2NhcGVBdHRyKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbFN0cmluZyA9IHV0aWxzLmVzY2FwZUF0dHIodmFsdWUucmVwbGFjZSgnLCcsICcgJykudHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlID8gYD1cIiR7dmFsU3RyaW5nfVwiYCA6ICcnO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIHV0aWxzLnNhZmVBdHRyTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBsZXQgc2FmZUF0dHIgPSB7XG4gICAgICBjbGFzc05hbWU6ICdjbGFzcydcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNhZmVBdHRyW25hbWVdIHx8IHV0aWxzLmh5cGhlbkNhc2UobmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5ncyBpbnRvIGxvd2VyY2FzZS1oeXBoZW5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgdXRpbHMuaHlwaGVuQ2FzZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9eLSsvZywgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0IGEgaHlwaGVuYXRlZCBzdHJpbmcgdG8gY2FtZWxDYXNlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIHV0aWxzLmNhbWVsQ2FzZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShbYS16XSkvZywgKG0sIHcpID0+XG4gICAgdy50b1VwcGVyQ2FzZSgpKTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGNvbnRlbnQgdHlwZVxuICAgKiBAcGFyYW0gIHtOb2RlIHwgU3RyaW5nIHwgQXJyYXkgfCBPYmplY3R9IGNvbnRlbnRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSBmb3IgbWFwcGluZ1xuICAgKi9cbiAgdXRpbHMuY29udGVudFR5cGUgPSBjb250ZW50ID0+IHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBjb250ZW50O1xuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgTm9kZSB8fCBjb250ZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHR5cGUgPSAnbm9kZSc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICB0eXBlID0gJ2FycmF5JztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBldmVudHMgdG8gYW4gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudHMgIG9iamVjdCBmdWxsIG9mIGV2ZW50cyBlZy4ge2NsaWNrOiBldnQgPT4gY2FsbGJhY2t9XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1dGlscy5iaW5kRXZlbnRzID0gKGVsZW1lbnQsIGV2ZW50cykgPT4ge1xuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZ0ID0+IGV2ZW50c1tldmVudF0oZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1bmlxdWUgbmFtZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSAge09iamVjdH0gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgbmFtZVxuICovXG4gIHV0aWxzLm5hbWVBdHRyID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgZXBvY2ggPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBsZXQgcHJlZml4ID0gZmllbGQudHlwZSB8fCB1dGlscy5oeXBoZW5DYXNlKGZpZWxkLmxhYmVsKTtcbiAgICByZXR1cm4gcHJlZml4ICsgJy0nICsgZXBvY2g7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCB3cmFwcGVyIHdoZXJlIG5lZWRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICB0YWdcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fE9iamVjdH0gY29udGVudCB3ZSB3cmFwIHRoaXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgYXR0cnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gRWxlbWVudFxuICAgKi9cbiAgdXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGxldCBjb250ZW50VHlwZSA9IHV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnQpO1xuICAgIGxldCB7ZXZlbnRzLCAuLi5hdHRyc30gPSBhdHRyaWJ1dGVzO1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgY29uc3QgYXBwZW5kQ29udGVudCA9IHtcbiAgICAgIHN0cmluZzogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgZmllbGQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICB9LFxuICAgICAgb2JqZWN0OiAoY29uZmlnKSA9PiB7XG4gICAgICAgIGxldCB7dGFnLCBjb250ZW50LCAuLi5kYXRhfSA9IGNvbmZpZztcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKHV0aWxzLm1hcmt1cCh0YWcsIGNvbnRlbnQsIGRhdGEpKTtcbiAgICAgIH0sXG4gICAgICBub2RlOiAoY29udGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICB9LFxuICAgICAgYXJyYXk6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudFtpXSk7XG4gICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbjogY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50KCk7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdKGNvbnRlbnQpO1xuICAgICAgfSxcbiAgICAgIHVuZGVmaW5lZDogKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKHRhZywgY29udGVudCwgYXR0cmlidXRlcyk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB1dGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdLmNhbGwodGhpcywgY29udGVudCk7XG4gICAgfVxuXG4gICAgdXRpbHMuYmluZEV2ZW50cyhmaWVsZCwgZXZlbnRzKTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcbiAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGV4OiB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIHV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgbGV0IGF0dHJzID0gZWxlbS5hdHRyaWJ1dGVzO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgdXRpbHMuZm9yRWFjaChhdHRycywgYXR0ciA9PiB7XG4gICAgICBsZXQgYXR0clZhbCA9IGF0dHJzW2F0dHJdLnZhbHVlO1xuICAgICAgaWYgKGF0dHJWYWwubWF0Y2goL2ZhbHNlfHRydWUvZykpIHtcbiAgICAgICAgYXR0clZhbCA9IChhdHRyVmFsID09PSAndHJ1ZScpO1xuICAgICAgfSBlbHNlIGlmIChhdHRyVmFsLm1hdGNoKC91bmRlZmluZWQvZykpIHtcbiAgICAgICAgYXR0clZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJWYWwpIHtcbiAgICAgICAgZGF0YVthdHRyc1thdHRyXS5uYW1lXSA9IGF0dHJWYWw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBmaWVsZCBvcHRpb25zIHRvIG9wdGlvbkRhdGFcbiAgICogQHBhcmFtICB7Tm9kZUxpc3R9IG9wdGlvbnMgIERPTSBlbGVtZW50c1xuICAgKiBAcmV0dXJuIHtBcnJheX0gb3B0aW9uRGF0YSBhcnJheVxuICAgKi9cbiAgdXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGxldCBvcHRpb25EYXRhID0ge307XG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgb3B0aW9uRGF0YSA9IHV0aWxzLnBhcnNlQXR0cnMob3B0aW9uc1tpXSk7XG4gICAgICBvcHRpb25EYXRhLmxhYmVsID0gb3B0aW9uc1tpXS50ZXh0Q29udGVudDtcbiAgICAgIGRhdGEucHVzaChvcHRpb25EYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2UgWE1MIGZvcm1EYXRhXG4gICAqIEBwYXJhbSAge1N0cmluZ30geG1sU3RyaW5nXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgIGZvcm1EYXRhIGFycmF5XG4gICAqL1xuICB1dGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKTtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcblxuICAgIGlmICh4bWwpIHtcbiAgICAgIGxldCBmaWVsZHMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpZWxkJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gdXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZmllbGRzW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKTtcblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSB1dGlscy5wYXJzZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBlc2NhcGVkIEhUTUwgaW50byB1c2FibGUgSFRNTFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgZXNjYXBlZCBIVE1MXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBwYXJzZWQgSFRNTFxuICAgKi9cbiAgdXRpbHMucGFyc2VkSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBsZXQgZXNjYXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZXNjYXBlRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFc2NhcGUgbWFya3VwIHNvIGl0IGNhbiBiZSBkaXNwbGF5ZWQgcmF0aGVyIHRoYW4gcmVuZGVyZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sIG1hcmt1cFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgZXNjYXBlZCBodG1sXG4gICAqL1xuICB1dGlscy5lc2NhcGVIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50ID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC5pbm5lckhUTUw7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGFuIGF0dHJpYnV0ZVxuICB1dGlscy5lc2NhcGVBdHRyID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgbGV0IG1hdGNoID0ge1xuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlcGxhY2VUYWcgPSB0YWcgPT4gbWF0Y2hbdGFnXSB8fCB0YWc7XG5cbiAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSA/IHN0ci5yZXBsYWNlKC9bXCImPD5dL2csIHJlcGxhY2VUYWcpIDogc3RyO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhdHRyaWJ1dGVzXG4gIHV0aWxzLmVzY2FwZUF0dHJzID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgYXR0cnNbYXR0cl0gPSB1dGlscy5lc2NhcGVBdHRyKGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLy8gZm9yRWFjaCB0aGF0IGNhbiBiZSB1c2VkIG9uIG5vZGVMaXN0XG4gIHV0aWxzLmZvckVhY2ggPSBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pOyAvLyBwYXNzZXMgYmFjayBzdHVmZiB3ZSBuZWVkXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5IG9mIGVsZW1lbnRzXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJheSAgYXJyYXkgd2l0aCBwb3NzaWJsZSBkdXBsaWNhdGVzXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgYXJyYXkgd2l0aCBvbmx5IHVuaXF1ZSB2YWx1ZXNcbiAgICovXG4gIHV0aWxzLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigoZWxlbSwgcG9zLCBhcnIpID0+IHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihlbGVtKSA9PT0gcG9zO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdmFsdWUgZnJvbSBhbiBhcnJheVxuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyXG4gICAqIEBwYXJhbSAge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICAgKi9cbiAgdXRpbHMucmVtb3ZlID0gKHZhbCwgYXJyKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gYXJyLmluZGV4T2YodmFsKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuXG5cbiAgdXRpbHMubWFrZUxhYmVsID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQge2xhYmVsID0gJycsIGRlc2NyaXB0aW9uID0gJycsIC4uLmF0dHJzfSA9IGZpZWxkRGF0YTtcbiAgICBsZXQgbGFiZWxUZXh0ID0gdXRpbHMucGFyc2VkSHRtbChsYWJlbCk7XG4gICAgbGV0IGxhYmVsQ29udGVudHMgPSBbbGFiZWxUZXh0XTtcblxuICAgIGlmIChhdHRycy5yZXF1aXJlZCkge1xuICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnIConLCB7Y2xhc3NOYW1lOiAnZmItcmVxdWlyZWQnfSkpO1xuICAgIH1cblxuICAgIGlmIChhdHRycy50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJz8nLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndG9vbHRpcC1lbGVtZW50JyxcbiAgICAgICAgICB0b29sdGlwOiBkZXNjcmlwdGlvblxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGxhYmVsQXR0cnMgPSB7XG4gICAgICBjbGFzc05hbWU6IGBmYi0ke2F0dHJzLnR5cGV9LWxhYmVsYFxuICAgIH07XG5cbiAgICBpZiAoYXR0cnMuaWQpIHtcbiAgICAgIGxhYmVsQXR0cnMuZm9yID0gYXR0cnMuaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG0oJ2xhYmVsJywgbGFiZWxDb250ZW50cywgbGFiZWxBdHRycyk7XG4gIH07XG5cbiAgdXRpbHMudGVtcGxhdGVNYXAgPSB0eXBlID0+IHtcbiAgICBsZXQgdGVtcGxhdGU7XG4gICAgbGV0IHRlbXBsYXRlcyA9IHV0aWxzLnRlbXBsYXRlcztcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgdGVtcGxhdGVzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGlmKHV0aWxzLmluQXJyYXkodHlwZSwga2V5KSkge1xuICAgICAgICAgIHRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0ga2V5KSB7XG4gICAgICAgIHRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICB1dGlscy5hdXRvY29tcGxldGVUZW1wbGF0ZSA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHt2YWx1ZXMsIHR5cGUsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGNvbnN0IGtleWJvYXJkTmF2ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBlLnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZztcbiAgICAgIGxldCBhY3RpdmVPcHRpb24gPSBsaXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZS1vcHRpb24nKVswXTtcbiAgICAgIGNvbnN0IGtleUNvZGVNYXBWYWxzID0gW1xuICAgICAgICAvLyB1cFxuICAgICAgICBbMzgsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uLnByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBhY3RpdmVPcHRpb24ucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIC8vIGRvd25cbiAgICAgICAgWzQwLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbi5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBhY3RpdmVPcHRpb24ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZU9wdGlvbiA9IGxpc3QuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgWzEzLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBhY3RpdmVPcHRpb24uaW5uZXJIVE1MO1xuICAgICAgICAgICAgaWYgKGxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgXTtcbiAgICAgIGxldCBrZXlDb2RlTWFwID0gbmV3IE1hcChrZXlDb2RlTWFwVmFscyk7XG5cbiAgICAgIGxldCBkaXJlY3Rpb24gPSBrZXlDb2RlTWFwLmdldChlLmtleUNvZGUpO1xuICAgICAgaWYoIWRpcmVjdGlvbikge1xuICAgICAgICBkaXJlY3Rpb24gPSAoKSA9PiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdGlvbigpO1xuICAgIH07XG4gICAgY29uc3QgZmF1eEV2ZW50cyA9IHtcbiAgICAgIGZvY3VzOiBldnQgPT4ge1xuICAgICAgICBsZXQgbGlzdCA9IGV2dC50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICAgIGV2dC50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkTmF2KTtcbiAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbGlzdC5zdHlsZS53aWR0aCA9IGxpc3QucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgICB9LFxuICAgICAgYmx1cjogZXZ0ID0+IHtcbiAgICAgICAgZXZ0LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5Ym9hcmROYXYpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9LFxuICAgICAgaW5wdXQ6IChldnQpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGV2dC50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICAgIGZpbHRlcihsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyksIGV2dC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZiAoIWV2dC50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgbGV0IGZhdXhBdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsXG4gICAgICB7XG4gICAgICAgIGlkOiBgJHtkYXRhLmlkfS1pbnB1dGAsXG4gICAgICAgIGV2ZW50czogZmF1eEV2ZW50c1xuICAgICAgfSk7XG4gICAgbGV0IGhpZGRlbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge3R5cGU6ICdoaWRkZW4nfSk7XG4gICAgZGVsZXRlIGZhdXhBdHRycy5uYW1lO1xuICAgIGNvbnN0IGZpZWxkID0gW1xuICAgICAgbSgnaW5wdXQnLCBudWxsLCBmYXV4QXR0cnMpLFxuICAgICAgbSgnaW5wdXQnLCBudWxsLCBoaWRkZW5BdHRycylcbiAgICBdO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHZhbHVlcy5tYXAob3B0aW9uRGF0YSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSBvcHRpb25EYXRhLmxhYmVsO1xuICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6IGV2dCA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBsaXN0LnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IG9wdGlvbkRhdGEubGFiZWw7XG4gICAgICAgICAgICBmaWVsZC5wcmV2aW91c1NpYmxpbmcudmFsdWUgPSBvcHRpb25EYXRhLnZhbHVlO1xuICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IG9wdGlvbkRhdGEudmFsdWVcbiAgICAgIH07XG4gICAgICByZXR1cm4gbSgnbGknLCBsYWJlbCwgY29uZmlnKTtcbiAgICB9KTtcblxuICAgIGZpZWxkLnB1c2gobSgndWwnLCBvcHRpb25zLFxuICAgICAge2lkOiBgJHtkYXRhLmlkfS1saXN0YCwgY2xhc3NOYW1lOiBgZmItJHt0eXBlfS1saXN0YH0pKTtcblxuICAgIGNvbnN0IG9uUmVuZGVyID0gKGV2dCkgPT4ge1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7ZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgRE9NIGVsZW1lbnRzIGZvciBzZWxlY3QsIGNoZWNrYm94LWdyb3VwIGFuZCByYWRpby1ncm91cC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZERhdGFcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgRE9NIGVsZW1lbnRzXG4gICAqL1xuICB1dGlscy5zZWxlY3RUZW1wbGF0ZSA9IChmaWVsZERhdGEsIGlzUHJldmlldykgPT4ge1xuICAgIGxldCBvcHRpb25zID0gW107XG4gICAgbGV0IHt2YWx1ZXMsIHR5cGUsIGlubGluZSwgb3RoZXIsIHRvZ2dsZSwgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgbGV0IGF0dHJzID0gdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzKGRhdGEsIGlzUHJldmlldyk7XG4gICAgbGV0IG9wdGlvblR5cGUgPSB0eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKTtcbiAgICBsZXQgaXNTZWxlY3QgPSB0eXBlID09PSAnc2VsZWN0JztcblxuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIGlmIChhdHRycy5wbGFjZWhvbGRlciAmJiBpc1NlbGVjdCkge1xuICAgICAgICBvcHRpb25zLnB1c2gobSgnb3B0aW9uJywgYXR0cnMucGxhY2Vob2xkZXIsIHtcbiAgICAgICAgICBkaXNhYmxlZDogbnVsbCxcbiAgICAgICAgICBzZWxlY3RlZDogbnVsbFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB7bGFiZWwgPSAnJywgLi4ub3B0aW9uQXR0cnN9ID0gdmFsdWVzW2ldO1xuXG4gICAgICAgIG9wdGlvbkF0dHJzLmlkID0gYCR7YXR0cnMuaWR9LSR7aX1gO1xuICAgICAgICBpZiAoIW9wdGlvbkF0dHJzLnNlbGVjdGVkIHx8IGF0dHJzLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICAgICAgbGV0IG8gPSBtKCdvcHRpb24nLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCksIG9wdGlvbkF0dHJzKTtcbiAgICAgICAgICBvcHRpb25zLnB1c2gobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgd3JhcHBlckNsYXNzID0gYGZiLSR7b3B0aW9uVHlwZX0taW5saW5lYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKG9wdGlvbkF0dHJzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gJ2NoZWNrZWQnO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgaW5wdXQgPSBtKCdpbnB1dCcsIG51bGwsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCBvcHRpb25BdHRycykpO1xuICAgICAgICAgIGxldCBsYWJlbEF0dHJzID0ge2Zvcjogb3B0aW9uQXR0cnMuaWR9O1xuICAgICAgICAgIGxldCBsYWJlbENvbnRlbnQgPSBbaW5wdXQsIGxhYmVsXTtcbiAgICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICBsZXQga2NUb2dnbGUgPSBtKCdzcGFuJyk7XG4gICAgICAgICAgICBsYWJlbENvbnRlbnQgPSBbaW5wdXQsIGtjVG9nZ2xlLCBsYWJlbF07XG4gICAgICAgICAgICBsYWJlbEF0dHJzLmNsYXNzTmFtZSA9ICdrYy10b2dnbGUnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBsYWJlbENvbnRlbnQsIGxhYmVsQXR0cnMpO1xuICAgICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTZWxlY3QgJiYgb3RoZXIpIHtcbiAgICAgICAgbGV0IG90aGVyT3B0aW9uQXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IGAke2F0dHJzLmlkfS1vdGhlcmAsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgJHthdHRycy5jbGFzc05hbWV9IG90aGVyLW9wdGlvbmAsXG4gICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBjbGljazogKCkgPT4gdXRpbHMub3RoZXJPcHRpb25DQihvdGhlck9wdGlvbkF0dHJzLmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gbGV0IGxhYmVsID0gbWkxOG4uY3VycmVudC5vdGhlcjtcbiAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICB3cmFwcGVyQ2xhc3MgKz0gJy1pbmxpbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3RoZXJPcHRpb25BdHRycyk7XG4gICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xuXG4gICAgICAgIGxldCBvdGhlclZhbEF0dHJzID0ge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgaWQ6IGAke290aGVyT3B0aW9uQXR0cnMuaWR9LXZhbHVlYCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdvdGhlci12YWwnXG4gICAgICAgIH07XG4gICAgICAgIGxldCBvdGhlcklucHV0cyA9IFtcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG9wdGlvbkF0dHJzKSxcbiAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnT3RoZXInKSxcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG90aGVyVmFsQXR0cnMpXG4gICAgICAgIF07XG4gICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBvdGhlcklucHV0cywge2Zvcjogb3B0aW9uQXR0cnMuaWR9KTtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0ZW1wbGF0ZTtcblxuICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgdGVtcGxhdGUgPSBtKG9wdGlvblR5cGUsIG9wdGlvbnMsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wbGF0ZSA9IG0oJ2RpdicsIG9wdGlvbnMsIHtjbGFzc05hbWU6IHR5cGV9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgdXRpbHMuZGVmYXVsdEZpZWxkID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQge2xhYmVsLCBkZXNjcmlwdGlvbiwgc3VidHlwZSwgdHlwZSwgaWQsIGlzUHJldmlldywgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgaWYgKGlkKSB7XG4gICAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgIGlmIChkYXRhLm5hbWUpIHtcbiAgICAgICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnLXByZXZpZXcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEubmFtZSA9IHV0aWxzLm5hbWVBdHRyKGZpZWxkRGF0YSkgKyAnLXByZXZpZXcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkYXRhLmlkID0gZGF0YS5uYW1lO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgIGRhdGEudGl0bGUgPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIHR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGxldCBmaWVsZCA9IHtcbiAgICAgIGZpZWxkOiBtKHR5cGUsIHV0aWxzLnBhcnNlZEh0bWwobGFiZWwpLCBkYXRhKSxcbiAgICAgIG9uUmVuZGVyOiB1dGlscy5ub29wXG4gICAgfTtcblxuICAgIHJldHVybiAoKSA9PiBmaWVsZDtcbiAgfTtcblxuICAvKipcbiAgICogTG9hZHMgYW4gYXJyYXkgb2Ygc2NyaXB0cyB1c2luZyBqUXVlcnkncyBgZ2V0U2NyaXB0YFxuICAgKiBAcGFyYW0gIHtBcnJheXxTdHJpbmd9ICBzY3JpcHRTY3IgICAgc2NyaXB0c1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggICBvcHRpb25hbCB0byBsb2FkIGZvcm1cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgYSBwcm9taXNlXG4gICAqL1xuICB1dGlscy5nZXRTY3JpcHRzID0gKHNjcmlwdFNjciwgcGF0aCkgPT4ge1xuICAgIGNvbnN0ICQgPSBqUXVlcnk7XG4gICAgbGV0IF9hcnIgPSBbXTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShzY3JpcHRTY3IpKSB7XG4gICAgICBzY3JpcHRTY3IgPSBbc2NyaXB0U2NyXTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxzLmlzQ2FjaGVkKHNjcmlwdFNjcikpIHtcbiAgICAgIF9hcnIgPSAkLm1hcChzY3JpcHRTY3IsIHNyYyA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIGRhdGFUeXBlOiAnc2NyaXB0JyxcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICB1cmw6IChwYXRoIHx8ICcnKSArIHNyY1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpLmRvbmUoKCkgPT4gd2luZG93LmZiTG9hZGVkLmpzLnB1c2goc3JjKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfYXJyLnB1c2goJC5EZWZlcnJlZCggZGVmZXJyZWQgPT4gJCggZGVmZXJyZWQucmVzb2x2ZSApKSk7XG5cbiAgICByZXR1cm4gJC53aGVuKC4uLl9hcnIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcmVtb3RlIHJlc291cmNlIGlzIGFscmVhZHkgbG9hZGVkXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gc3JjICB1cmwgb2YgcmVtb3RlIHNjcmlwdCBvciBjc3NcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgICAgICB0eXBlICAgICAgICdqcycgb3IgJ2NzcydcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBpc0NhY2hlZFxuICAgKi9cbiAgdXRpbHMuaXNDYWNoZWQgPSAoc3JjLCB0eXBlID0gJ2pzJykgPT4ge1xuICAgIGxldCBpc0NhY2hlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGNhY2hlID0gd2luZG93LmZiTG9hZGVkW3R5cGVdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpIHtcbiAgICAgIGlzQ2FjaGVkID0gc3JjLmV2ZXJ5KHMgPT4gdXRpbHMuaW5BcnJheShzLCBjYWNoZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0NhY2hlZCA9IHV0aWxzLmluQXJyYXkoc3JjLCBjYWNoZSk7XG4gICAgfVxuICAgIHJldHVybiBpc0NhY2hlZDtcbiAgfTtcblxuICAvKipcbiAgICogQXBwZW5kcyBzdHlsZXNoZWV0cyB0byB0aGUgaGVhZFxuICAgKiBAcGFyYW0gIHtBcnJheX0gc2NyaXB0U2NyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgdXRpbHMuZ2V0U3R5bGVzID0gKHNjcmlwdFNjciwgcGF0aCkgPT4ge1xuICAgIGlmICh1dGlscy5pc0NhY2hlZChzY3JpcHRTY3IsICdjc3MnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhcHBlbmRTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICB3aW5kb3cuZmJMb2FkZWQuY3NzLnB1c2goaHJlZik7XG4gICAgfTtcbiAgICBzY3JpcHRTY3IuZm9yRWFjaChzcmMgPT4gYXBwZW5kU3R5bGUoKHBhdGggfHwgJycpICsgc3JjKSk7XG4gIH07XG5cbiAgdXRpbHMubG9uZ1RleHRUZW1wbGF0ZSA9IGRhdGEgPT4ge1xuICAgIGxldCB7dmFsdWUgPSAnJywgLi4uYXR0cnN9ID0gZGF0YTtcbiAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICBmaWVsZDogbSgndGV4dGFyZWEnLCB1dGlscy5wYXJzZWRIdG1sKHZhbHVlKSwgYXR0cnMpXG4gICAgfTtcbiAgICBsZXQgZWRpdG9ycyA9IHtcbiAgICAgIHRpbnltY2U6IHtcbiAgICAgICAganM6IFsnLy9jZG4udGlueW1jZS5jb20vNC90aW55bWNlLm1pbi5qcyddLFxuICAgICAgICBvblJlbmRlcjogZXZ0ID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LnRpbnltY2UuZWRpdG9yc1tkYXRhLmlkXSkge1xuICAgICAgICAgICAgd2luZG93LnRpbnltY2UuZWRpdG9yc1tkYXRhLmlkXS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LnRpbnltY2UuaW5pdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRlbXBsYXRlLmZpZWxkLFxuICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvcicsXG4gICAgICAgICAgICAgICdzZWFyY2hyZXBsYWNlIHZpc3VhbGJsb2NrcyBjb2RlIGZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUgbWVkaWEgdGFibGUgY29udGV4dG1lbnUgcGFzdGUgY29kZSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0b29sYmFyOiAnaW5zZXJ0ZmlsZSB1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgbGluayBpbWFnZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHF1aWxsOiB7XG4gICAgICAgIGpzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLmpzJ10sXG4gICAgICAgIGNzczogWycvL2Nkbi5xdWlsbGpzLmNvbS8xLjEuMy9xdWlsbC5zbm93LmNzcyddLFxuICAgICAgICBvblJlbmRlcjogZXZ0ID0+IHtcbiAgICAgICAgICBjb25zdCBEZWx0YSA9IHdpbmRvdy5RdWlsbC5pbXBvcnQoJ2RlbHRhJyk7XG4gICAgICAgICAgd2luZG93LmZiRWRpdG9ycy5xdWlsbFtkYXRhLmlkXSA9IHt9O1xuICAgICAgICAgIGxldCBlZGl0b3IgPSB3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2RhdGEuaWRdO1xuICAgICAgICAgIGVkaXRvci5pbnN0YW5jZSA9IG5ldyB3aW5kb3cuUXVpbGwodGVtcGxhdGUuZmllbGQsIHtcbiAgICAgICAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgICAgIFt7J2hlYWRlcic6IFsxLCAyLCBmYWxzZV19XSxcbiAgICAgICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddLFxuICAgICAgICAgICAgICAgIFsnY29kZS1ibG9jayddXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogYXR0cnMucGxhY2Vob2xkZXIgfHwgJycsXG4gICAgICAgICAgICB0aGVtZTogJ3Nub3cnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZWRpdG9yLmRhdGEgPSBuZXcgRGVsdGEoKTtcbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGVkaXRvci5pbnN0YW5jZS5zZXRDb250ZW50cyh3aW5kb3cuSlNPTi5wYXJzZSh1dGlscy5wYXJzZWRIdG1sKHZhbHVlKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlZGl0b3IuaW5zdGFuY2Uub24oJ3RleHQtY2hhbmdlJywgZnVuY3Rpb24oZGVsdGEpIHtcbiAgICAgICAgICAgIGVkaXRvci5kYXRhID0gZWRpdG9yLmRhdGEuY29tcG9zZShkZWx0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGRhdGEudHlwZSAhPT0gJ3RleHRhcmVhJykge1xuICAgICAgdGVtcGxhdGUub25SZW5kZXIgPSBlZGl0b3JzW2RhdGEudHlwZV0ub25SZW5kZXI7XG4gICAgfVxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdxdWlsbCcpIHtcbiAgICAgIHRlbXBsYXRlLmZpZWxkID0gbSgnZGl2JywgbnVsbCwgYXR0cnMpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmaWVsZFJlbmRlcmVkJywgb25SZW5kZXIpO1xuXG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uY3NzKSB7XG4gICAgICAgICAgdXRpbHMuZ2V0U3R5bGVzKGVkaXRvcnNbZGF0YS50eXBlXS5jc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uanMgJiYgIXV0aWxzLmlzQ2FjaGVkKGVkaXRvcnNbZGF0YS50eXBlXS5qcykpIHtcbiAgICAgICAgICB1dGlscy5nZXRTY3JpcHRzKGVkaXRvcnNbZGF0YS50eXBlXS5qcykuZG9uZSh0ZW1wbGF0ZS5vblJlbmRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGxhdGUub25SZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge2ZpZWxkOiB0ZW1wbGF0ZS5maWVsZCwgb25SZW5kZXJ9O1xuICB9O1xuXG4gIHV0aWxzLnRlbXBsYXRlcyA9IFtcbiAgICBbJ2F1dG9jb21wbGV0ZScsXG4gICAgICBmaWVsZERhdGEgPT4ge1xuICAgICAgbGV0IGF0dHJzID0gdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzKGZpZWxkRGF0YSk7XG4gICAgICAgIGxldCBmaWVsZExhYmVsID0gdXRpbHMubWFrZUxhYmVsKGZpZWxkRGF0YSk7XG4gICAgICAgIGxldCBhdXRvY29tcGxldGUgPSB1dGlscy5hdXRvY29tcGxldGVUZW1wbGF0ZShhdHRycyk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGF1dG9jb21wbGV0ZS5maWVsZF0sXG4gICAgICAgICAgb25SZW5kZXI6IGF1dG9jb21wbGV0ZS5vblJlbmRlclxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XSxcbiAgICBbZGVmYXVsdFN1YnR5cGVzLnRleHQuY29uY2F0KFsnbnVtYmVyJywgJ2ZpbGUnLCAnZGF0ZSddKSxcbiAgICAgIGZpZWxkRGF0YSA9PiB7XG4gICAgICAgIGxldCBhdHRycyA9IHV0aWxzLnByb2Nlc3NGaWVsZERhdGFBdHRycyhmaWVsZERhdGEpO1xuICAgICAgICBsZXQgZmllbGRMYWJlbCA9IHV0aWxzLm1ha2VMYWJlbChmaWVsZERhdGEpO1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBtKCdpbnB1dCcsIG51bGwsIGF0dHJzKV0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1dLFxuICAgIFtbJ3BhcmFncmFwaCddLmNvbmNhdChkZWZhdWx0U3VidHlwZXMucGFyYWdyYXBoKSxcbiAgICAgIGZpZWxkRGF0YSA9PiB7XG4gICAgICAgIGxldCBhdHRycyA9IHV0aWxzLnByb2Nlc3NGaWVsZERhdGFBdHRycyhmaWVsZERhdGEpO1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgZmllbGQ6IFttKGZpZWxkRGF0YS50eXBlLCB1dGlscy5wYXJzZWRIdG1sKGZpZWxkRGF0YS5sYWJlbCksIGF0dHJzKV0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1dLFxuICAgIFtkZWZhdWx0U3VidHlwZXMuYnV0dG9uLFxuICAgICAgZmllbGREYXRhID0+IHtcbiAgICAgICAgbGV0IGF0dHJzID0gdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzKGZpZWxkRGF0YSk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICBmaWVsZDogbSgnYnV0dG9uJywgZmllbGREYXRhLmxhYmVsLCBhdHRycyksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1dLFxuICAgIFtbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCcsICdjaGVja2JveCddLFxuICAgICAgZmllbGREYXRhID0+IHtcbiAgICAgICAgbGV0IGZpZWxkTGFiZWwgPSB1dGlscy5tYWtlTGFiZWwoZmllbGREYXRhKTtcbiAgICAgICAgbGV0IGZpZWxkID0gdXRpbHMuc2VsZWN0VGVtcGxhdGUoZmllbGREYXRhKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGRdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1dLFxuICAgIFtbJ3RleHRhcmVhJywgJ3RpbnltY2UnLCAncXVpbGwnXSxcbiAgICAgIGZpZWxkRGF0YSA9PiB7XG4gICAgICAgIGxldCBhdHRycyA9IHV0aWxzLnByb2Nlc3NGaWVsZERhdGFBdHRycyhmaWVsZERhdGEpO1xuICAgICAgICBsZXQgZmllbGQgPSB1dGlscy5sb25nVGV4dFRlbXBsYXRlKGF0dHJzKTtcbiAgICAgICAgbGV0IGZpZWxkTGFiZWwgPSB1dGlscy5tYWtlTGFiZWwoZmllbGREYXRhKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGQuZmllbGRdLFxuICAgICAgICAgIG9uUmVuZGVyOiBmaWVsZC5vblJlbmRlclxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XVxuICAgIF07XG5cbiAgdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQge1xuICAgICAgbGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHN1YnR5cGUsXG4gICAgICAuLi5hdHRyc30gPSBmaWVsZERhdGE7XG5cbiAgICBpZiAoIWF0dHJzLmlkKSB7XG4gICAgICBhdHRycy5pZCA9IGF0dHJzLm5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIGF0dHJzLnR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGlmIChhdHRycy5tdWx0aXBsZSB8fCBhdHRycy50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnKSB7XG4gICAgICBhdHRycy5uYW1lID0gYXR0cnMubmFtZSArICdbXSc7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzLnJlcXVpcmVkKSB7XG4gICAgICBhdHRycy5yZXF1aXJlZCA9IHRydWU7XG4gICAgICBhdHRyc1snYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICB1dGlscy5nZXRUZW1wbGF0ZSA9IChmaWVsZERhdGEsIGlzUHJldmlldyA9IGZhbHNlKSA9PiB7XG4gICAgbGV0IGZpZWxkO1xuICAgIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgIGlmIChmaWVsZERhdGEubmFtZSkge1xuICAgICAgICBmaWVsZERhdGEubmFtZSA9IGZpZWxkRGF0YS5uYW1lICsgJy1wcmV2aWV3JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkRGF0YS5uYW1lID0gdXRpbHMubmFtZUF0dHIoZmllbGREYXRhKSArICctcHJldmlldyc7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IHV0aWxzLnRlbXBsYXRlTWFwKGZpZWxkRGF0YS50eXBlKTtcblxuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZShmaWVsZERhdGEsIGlzUHJldmlldyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBsYXRlID0gdXRpbHMuZGVmYXVsdEZpZWxkKGZpZWxkRGF0YSwgaXNQcmV2aWV3KSgpO1xuICAgIH1cblxuICAgIGlmIChmaWVsZERhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIGxldCB3cmFwcGVyQXR0cnMgPSB7fTtcbiAgICAgIGlmIChmaWVsZERhdGEubmFtZSkge1xuICAgICAgICB3cmFwcGVyQXR0cnMuY2xhc3NOYW1lID1cbiAgICAgICAgYGZiLSR7ZmllbGREYXRhLnR5cGV9IGZvcm0tZ3JvdXAgZmllbGQtJHtmaWVsZERhdGEubmFtZX1gO1xuICAgICAgfVxuICAgICAgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2RpdicsIHRlbXBsYXRlLmZpZWxkLCB3cmFwcGVyQXR0cnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYXR0cnMgPSB1dGlscy5wcm9jZXNzRmllbGREYXRhQXR0cnMoZmllbGREYXRhKTtcbiAgICAgIGZpZWxkID0gdXRpbHMubWFya3VwKCdpbnB1dCcsIG51bGwsIGF0dHJzKTtcbiAgICB9XG5cbiAgICBpZiAodGVtcGxhdGUub25SZW5kZXIpIHtcbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCB0ZW1wbGF0ZS5vblJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuXG4vKipcbiAqIENhbGxiYWNrIGZvciBvdGhlciBvcHRpb24uXG4gKiBUb2dnbGVzIHRoZSBoaWRkZW4gdGV4dCBhcmVhIGZvciBcIm90aGVyXCIgb3B0aW9uLlxuICogQHBhcmFtICB7U3RyaW5nfSBvdGhlcklkIGlkIG9mIHRoZSBcIm90aGVyXCIgb3B0aW9uIGlucHV0XG4gKi9cbnV0aWxzLm90aGVyT3B0aW9uQ0IgPSBvdGhlcklkID0+IHtcbiAgY29uc3Qgb3RoZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG90aGVySWQpO1xuICBjb25zdCBvdGhlcklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvdGhlcklkfS12YWx1ZWApO1xuXG4gIGlmIChvdGhlcklucHV0LmNoZWNrZWQpIHtcbiAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIG90aGVySW5wdXRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemVzIGEgc3RyaW5nXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciB1bmNhcGl0YWxpemVkIHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBzdHIgY2FwaXRhbGl6ZWQgc3RyaW5nXG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcYlxcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICByZXR1cm4gbS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufTtcblxuXG51dGlscy5tZXJnZSA9IChvYmoxLCBvYmoyKSA9PiB7XG4gIGxldCBtZXJnZWRPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmoxLCBvYmoyKTtcbiAgZm9yIChsZXQgcHJvcCBpbiBvYmoyKSB7XG4gICAgaWYgKG1lcmdlZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqMltwcm9wXSkpIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gQXJyYXkuaXNBcnJheShvYmoxW3Byb3BdKSA/IHV0aWxzLnVuaXF1ZShvYmoxW3Byb3BdLmNvbmNhdChvYmoyW3Byb3BdKSkgOiBvYmoyW3Byb3BdO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqMltwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gdXRpbHMubWVyZ2Uob2JqMVtwcm9wXSwgb2JqMltwcm9wXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBvYmoyW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VkT2JqO1xufTtcblxudXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMgPSAoZWwsIGV2dHMsIGZuKSA9PiB7XG4gIHJldHVybiBldnRzLnNwbGl0KCcgJykuZm9yRWFjaChlID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoZSwgZm4sIGZhbHNlKSk7XG59O1xuXG4vKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgcGFyZW50IGJ5IGNsYXNzXG4gKiBAcGFyYW0gIHtPYmplY3R9IGVsICBET00gZWxlbWVudFxuICogQHBhcmFtICB7U3RyaW5nfSBjbHMgY2xhc3NcbiAqIEByZXR1cm4ge09iamVjdH0gICAgIERPTSBFbGVtZW50XG4gKi9cbnV0aWxzLmNsb3Nlc3QgPSAoZWwsIGNscykgPT4ge1xuICBsZXQgY2xhc3NOYW1lID0gY2xzLnJlcGxhY2UoJy4nLCAnJyk7XG4gIHdoaWxlICgoZWwgPSBlbC5wYXJlbnRFbGVtZW50KSAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpO1xuICByZXR1cm4gZWw7XG59O1xuXG51dGlscy5ub29wID0gKCkgPT4gbnVsbDtcblxudXRpbHMuZGVib3VuY2UgPSAoZnVuYywgd2FpdCA9IDI1MCwgaW1tZWRpYXRlID0gZmFsc2UpID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgIGxldCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgbGV0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIEFkZCBhIG1vYmlsZSBjbGFzc1xuICogQHRvZG8gZmluZCBjc3Mgb25seSBzb2x1dGlvblxuICogQHJldHVybiB7U3RyaW5nfSBNb2JpbGUgY2xhc3MgYWRkZWQgdG8gZm9ybUJ1aWxkZXJcbiAqL1xudXRpbHMubW9iaWxlQ2xhc3MgPSAoKSA9PiB7XG4gIGxldCBtb2JpbGVDbGFzcyA9ICcnO1xuICAoZnVuY3Rpb24oYSkge1xuICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkge1xuICAgICAgbW9iaWxlQ2xhc3MgPSAnIGZiLW1vYmlsZSc7XG4gICAgfVxuICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgcmV0dXJuIG1vYmlsZUNsYXNzO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGNvbnZlcnRzIG1lc3N5IGBjbCNzc05hbWVzYCBpbnRvIHZhbGlkIGBjbGFzcy1uYW1lc2BcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfSBoeXBoZW5hdGVkIHN0cmluZ1xuICovXG51dGlscy5tYWtlQ2xhc3NOYW1lID0gc3RyID0+IHtcbiAgcmV0dXJuIHV0aWxzLmh5cGhlbkNhc2Uoc3RyLnJlcGxhY2UoL1teXFx3XFxzXFwtXS9naSwgJycpKTtcbn07XG5cbi8qKlxuICogTWFrZSBzdHJpbmdzIHNhZmUgdG8gYmUgdXNlZCBhcyBjbGFzc2VzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybiB7U3RyaW5nfSAgICAgY29udmVydGVyIHN0cmluZ1xuICovXG51dGlscy5zYWZlbmFtZSA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvW15hLXpBLVowLTlcXFtcXF1cXF8tXS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qKlxuICogU3RyaXBzIG5vbi1udW1iZXJzIGZyb20gYSBudW1iZXIgb25seSBpbnB1dFxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyIHN0cmluZyB3aXRoIHBvc3NpYmxlIG51bWJlclxuICogQHJldHVybiB7c3RyaW5nfSAgICAgc3RyaW5nIHdpdGhvdXQgbnVtYmVyc1xuICovXG51dGlscy5mb3JjZU51bWJlciA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW14wLTldL2csICcnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuIl19
