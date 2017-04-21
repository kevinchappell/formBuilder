/*
formBuilder - https://formbuilder.online/
Version: 2.1.1
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
      var inputSet = opts.inputSets.find(function (set) {
        return set.name === control[0].getAttribute('type');
      });
      if (inputSet && inputSet.showHeader) {
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
        }).catch(console.error);
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
      _utils2.default.forEach(attrs, function (index) {
        var attr = attrs[index];
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

      var disabledFields = stage.querySelectorAll('.disabled-field');
      _utils2.default.forEach(disabledFields, function (index) {
        var field = disabledFields[index];
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
        _utils2.default.forEach(fields, function (index) {
          var field = fields[index];
          outerHeight += field.offsetHeight + 3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvbWkxOG4vZGlzdC9taTE4bi5taW4uanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3JjXFxqc1xcY29uZmlnLmpzIiwic3JjXFxqc1xcZGF0YS5qcyIsInNyY1xcanNcXGRvbS5qcyIsInNyY1xcanNcXGV2ZW50cy5qcyIsInNyY1xcanNcXGZvcm0tYnVpbGRlci5qcyIsInNyY1xcanNcXGhlbHBlcnMuanMiLCJzcmNcXGpzXFxwb2x5ZmlsbHMuanMiLCJzcmNcXGpzXFx1dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUFBdkIsQ0FBUDtBQUNELENBRkQ7O2tCQUllLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59OyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgY3JlYXRlICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGFuSW5zdGFuY2UgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBzZXRTcGVjaWVzICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBmYXN0S2V5ICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5XG4gICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBmcm9tICAgID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBtZXRhICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBhbkluc3RhbmNlICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZFAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgZWFjaCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgS0VZKTtcbiAgICAgICAgaWYoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKXJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJ3NpemUnIGluIHByb3RvKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59OyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTsiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCIvKiFcbiAqIG1pMThuIC0gaHR0cHM6Ly9naXRodWIuY29tL0RyYWdnYWJsZS9taTE4blxuICogVmVyc2lvbjogMC4zLjNcbiAqIEF1dGhvcjogS2V2aW4gQ2hhcHBlbGwgPGtldmluLmIuY2hhcHBlbGxAZ21haWwuY29tPiAoaHR0cDovL2tldmluLWNoYXBwZWxsLmNvbSlcbiAqL1xubW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sb2FkZWQ9ITAsby5leHBvcnRzfXZhciBlPXt9O3JldHVybiBuLm09dCxuLmM9ZSxuLnA9XCJkaXN0L1wiLG4oMCl9KFtmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e1wiZGVmYXVsdFwiOnR9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWUoNTcpLGk9cihvKSx1PWUoNTMpLGM9cih1KSxmPWUoNTYpLGE9cihmKSxzPWUoNDgpLGw9cihzKSxwPWUoNTQpLGg9cihwKSx2PWUoNTUpLHk9cih2KSxkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpeygwLGhbXCJkZWZhdWx0XCJdKSh0aGlzLHQpO3ZhciBuPXtleHRlbnNpb246XCIubGFuZ1wiLGxvY2F0aW9uOlwiYXNzZXRzL2xhbmcvXCIsbGFuZ3M6W1wiZW4tVVNcIl0sbG9jYWxlOlwiZW4tVVNcIixwcmVsb2FkZWQ6e319LGU9dGhpcztlLmluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY29uZmlnPSgwLGxbXCJkZWZhdWx0XCJdKSh7fSxuLHQpLGUubGFuZ3M9KDAsbFtcImRlZmF1bHRcIl0pKHt9LGUuY29uZmlnLnByZWxvYWRlZCksZS5sb2NhbGU9ZS5jb25maWcubG9jYWxlfHxlLmNvbmZpZy5sYW5nc1swXSxlLnNldEN1cnJlbnQoZS5sb2NhbGUpfX1yZXR1cm4oMCx5W1wiZGVmYXVsdFwiXSkodCxbe2tleTpcImdldFZhbHVlXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY3VycmVudCYmdGhpcy5jdXJyZW50W3RdfHx0fX0se2tleTpcIm1ha2VTYWZlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49e1wie1wiOlwiXFxcXHtcIixcIn1cIjpcIlxcXFx9XCIsXCJ8XCI6XCJcXFxcfFwifTtyZXR1cm4gdD10LnJlcGxhY2UoL1xce3xcXH18XFx8L2csZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19KSxuZXcgUmVnRXhwKHQsXCJnXCIpfX0se2tleTpcInB1dFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuY3VycmVudFt0XT1ufX0se2tleTpcImdldFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9dGhpcyxyPXRoaXMuZ2V0VmFsdWUodCksbz1yLm1hdGNoKC9cXHtbXlxcfV0rP1xcfS9nKSxpPXZvaWQgMDtpZihuJiZvKWlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIG4/XCJ1bmRlZmluZWRcIjooMCxhW1wiZGVmYXVsdFwiXSkobikpKWZvcih2YXIgdT0wO3U8by5sZW5ndGg7dSsrKWk9b1t1XS5zdWJzdHJpbmcoMSxvW3VdLmxlbmd0aC0xKSxyPXIucmVwbGFjZShlLm1ha2VTYWZlKG9bdV0pLG5baV18fFwiXCIpO2Vsc2Ugcj1yLnJlcGxhY2UoL1xce1teXFx9XSs/XFx9L2csbik7cmV0dXJuIHJ9fSx7a2V5OlwiZnJvbUZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIG4sZT10LnNwbGl0KFwiXFxuXCIpLHI9e30sbz0wO288ZS5sZW5ndGg7bysrKWlmKG49ZVtvXS5tYXRjaCgvXiguKz8pICo/PSAqPyhbXlxcbl0rKS8pKXt2YXIgaT1uWzJdLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKTtyW25bMV1dPWl9cmV0dXJuIHJ9fSx7a2V5OlwicHJvY2Vzc0ZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj10LnJlcGxhY2UoL1xcblxcbi9nLFwiXFxuXCIpO3JldHVybiB0aGlzLmZyb21GaWxlKG4pfX0se2tleTpcImxvYWRMYW5nXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49dGhpcztyZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKGZ1bmN0aW9uKGUscil7bi5sYW5nc1t0XT9lKG4ubGFuZ3NbdF0pOiFmdW5jdGlvbigpe3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdCxpPW4uY29uZmlnLmxvY2F0aW9uK3Qrbi5jb25maWcuZXh0ZW5zaW9uO28ub3BlbihcIkdFVFwiLGksITApLG8ub25sb2FkPWZ1bmN0aW9uKCl7aWYodGhpcy5zdGF0dXM8PTMwNCl7dmFyIGk9bi5wcm9jZXNzRmlsZShvLnJlc3BvbnNlVGV4dCk7bi5sYW5nc1t0XT1pLGUoaSl9ZWxzZSByKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5vbmVycm9yPWZ1bmN0aW9uKCl7cih7c3RhdHVzOnRoaXMuc3RhdHVzLHN0YXR1c1RleHQ6by5zdGF0dXNUZXh0fSl9LG8uc2VuZCgpfSgpfSl9fSx7a2V5Olwic2V0Q3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG49KDAsY1tcImRlZmF1bHRcIl0pKGlbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gZSgpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcImVuLVVTXCI7cmV0dXJuIGlbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24obil7Zm9yKDs7KXN3aXRjaChuLnByZXY9bi5uZXh0KXtjYXNlIDA6cmV0dXJuIG4ubmV4dD0yLHRoaXMubG9hZExhbmcodCk7Y2FzZSAyOnJldHVybiB0aGlzLmxvY2FsZT10LHRoaXMuY3VycmVudD10aGlzLmxhbmdzW3RdLG4uYWJydXB0KFwicmV0dXJuXCIsdGhpcy5jdXJyZW50KTtjYXNlIDU6Y2FzZVwiZW5kXCI6cmV0dXJuIG4uc3RvcCgpfX0sZSx0aGlzKX0pKTtyZXR1cm4gdH0oKX0se2tleTpcImdldExhbmdzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29uZmlnLmxhbmdzfX1dKSx0fSgpO25bXCJkZWZhdWx0XCJdPW5ldyBkfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOCkoXCJ3a3NcIiksbz1lKDIxKSxpPWUoMikuU3ltYm9sLHU9XCJmdW5jdGlvblwiPT10eXBlb2YgaSxjPXQuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gclt0XXx8KHJbdF09dSYmaVt0XXx8KHU/aTpvKShcIlN5bWJvbC5cIit0KSl9O2Muc3RvcmU9cn0sZnVuY3Rpb24odCxuKXt2YXIgZT10LmV4cG9ydHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lk1hdGg9PU1hdGg/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLk1hdGg9PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XCJudW1iZXJcIj09dHlwZW9mIF9fZyYmKF9fZz1lKX0sZnVuY3Rpb24odCxuKXt2YXIgZT10LmV4cG9ydHM9e3ZlcnNpb246XCIyLjQuMFwifTtcIm51bWJlclwiPT10eXBlb2YgX19lJiYoX19lPWUpfSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPSFlKDEyKShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNiksbz1lKDM1KSxpPWUoMzApLHU9T2JqZWN0LmRlZmluZVByb3BlcnR5O24uZj1lKDQpP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbih0LG4sZSl7aWYocih0KSxuPWkobiwhMCkscihlKSxvKXRyeXtyZXR1cm4gdSh0LG4sZSl9Y2F0Y2goYyl7fWlmKFwiZ2V0XCJpbiBlfHxcInNldFwiaW4gZSl0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCFcIik7cmV0dXJuXCJ2YWx1ZVwiaW4gZSYmKHRbbl09ZS52YWx1ZSksdH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoIXIodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9Lmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDUpLG89ZSgxOSk7dC5leHBvcnRzPWUoNCk/ZnVuY3Rpb24odCxuLGUpe3JldHVybiByLmYodCxuLG8oMSxlKSl9OmZ1bmN0aW9uKHQsbixlKXtyZXR1cm4gdFtuXT1lLHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgzNiksbz1lKDIzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIobyh0KSl9fSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZS5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMiksbz1lKDMpLGk9ZSgxNiksdT1lKDgpLGM9XCJwcm90b3R5cGVcIixmPWZ1bmN0aW9uKHQsbixlKXt2YXIgYSxzLGwscD10JmYuRixoPXQmZi5HLHY9dCZmLlMseT10JmYuUCxkPXQmZi5CLGc9dCZmLlcsbT1oP286b1tuXXx8KG9bbl09e30pLHc9bVtjXSx4PWg/cjp2P3Jbbl06KHJbbl18fHt9KVtjXTtoJiYoZT1uKTtmb3IoYSBpbiBlKXM9IXAmJngmJnZvaWQgMCE9PXhbYV0scyYmYSBpbiBtfHwobD1zP3hbYV06ZVthXSxtW2FdPWgmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHhbYV0/ZVthXTpkJiZzP2kobCxyKTpnJiZ4W2FdPT1sP2Z1bmN0aW9uKHQpe3ZhciBuPWZ1bmN0aW9uKG4sZSxyKXtpZih0aGlzIGluc3RhbmNlb2YgdCl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IHQ7Y2FzZSAxOnJldHVybiBuZXcgdChuKTtjYXNlIDI6cmV0dXJuIG5ldyB0KG4sZSl9cmV0dXJuIG5ldyB0KG4sZSxyKX1yZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3JldHVybiBuW2NdPXRbY10sbn0obCk6eSYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD9pKEZ1bmN0aW9uLmNhbGwsbCk6bCx5JiYoKG0udmlydHVhbHx8KG0udmlydHVhbD17fSkpW2FdPWwsdCZmLlImJncmJiF3W2FdJiZ1KHcsYSxsKSkpfTtmLkY9MSxmLkc9MixmLlM9NCxmLlA9OCxmLkI9MTYsZi5XPTMyLGYuVT02NCxmLlI9MTI4LHQuZXhwb3J0cz1mfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt0cnl7cmV0dXJuISF0KCl9Y2F0Y2gobil7cmV0dXJuITB9fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/bnVsbCE9PXQ6XCJmdW5jdGlvblwiPT10eXBlb2YgdH19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPXt9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0MCksbz1lKDI1KTt0LmV4cG9ydHM9T2JqZWN0LmtleXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyMik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLHZvaWQgMD09PW4pcmV0dXJuIHQ7c3dpdGNoKGUpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2FsbChuLGUpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQuY2FsbChuLGUscil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24oZSxyLG8pe3JldHVybiB0LmNhbGwobixlLHIsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz0hMH0sZnVuY3Rpb24odCxuKXtuLmY9e30ucHJvcGVydHlJc0VudW1lcmFibGV9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOm59fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSkuZixvPWUoNyksaT1lKDEpKFwidG9TdHJpbmdUYWdcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0JiYhbyh0PWU/dDp0LnByb3RvdHlwZSxpKSYmcih0LGkse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTpufSl9fSxmdW5jdGlvbih0LG4pe3ZhciBlPTAscj1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK2UrcikudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT10KXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIit0KTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKSxvPWUoMikuZG9jdW1lbnQsaT1yKG8pJiZyKG8uY3JlYXRlRWxlbWVudCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpP28uY3JlYXRlRWxlbWVudCh0KTp7fX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPVwiY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mXCIuc3BsaXQoXCIsXCIpfSxmdW5jdGlvbih0LG4pe24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOCkoXCJrZXlzXCIpLG89ZSgyMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1vKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDIpLG89XCJfX2NvcmUtanNfc2hhcmVkX19cIixpPXJbb118fChyW29dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlbdF18fChpW3RdPXt9KX19LGZ1bmN0aW9uKHQsbil7dmFyIGU9TWF0aC5jZWlsLHI9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9yOmUpKHQpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2lmKCFyKHQpKXJldHVybiB0O3ZhciBlLG87aWYobiYmXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnRvU3RyaW5nKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC52YWx1ZU9mKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKCFuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMiksbz1lKDMpLGk9ZSgxNyksdT1lKDMyKSxjPWUoNSkuZjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49by5TeW1ib2x8fChvLlN5bWJvbD1pP3t9OnIuU3ltYm9sfHx7fSk7XCJfXCI9PXQuY2hhckF0KDApfHx0IGluIG58fGMobix0LHt2YWx1ZTp1LmYodCl9KX19LGZ1bmN0aW9uKHQsbixlKXtuLmY9ZSgxKX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTApLG89ZSgxKShcInRvU3RyaW5nVGFnXCIpLGk9XCJBcmd1bWVudHNcIj09cihmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpLHU9ZnVuY3Rpb24odCxuKXt0cnl7cmV0dXJuIHRbbl19Y2F0Y2goZSl7fX07dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuLGUsYztyZXR1cm4gdm9pZCAwPT09dD9cIlVuZGVmaW5lZFwiOm51bGw9PT10P1wiTnVsbFwiOlwic3RyaW5nXCI9PXR5cGVvZihlPXUobj1PYmplY3QodCksbykpP2U6aT9yKG4pOlwiT2JqZWN0XCI9PShjPXIobikpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLmNhbGxlZT9cIkFyZ3VtZW50c1wiOmN9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPWUoMikuZG9jdW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudH0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz0hZSg0KSYmIWUoMTIpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlKDI0KShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCk7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKHQpe3JldHVyblwiU3RyaW5nXCI9PXIodCk/dC5zcGxpdChcIlwiKTpPYmplY3QodCl9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgxNyksbz1lKDExKSxpPWUoNDEpLHU9ZSg4KSxjPWUoNyksZj1lKDE0KSxhPWUoNzIpLHM9ZSgyMCksbD1lKDgyKSxwPWUoMSkoXCJpdGVyYXRvclwiKSxoPSEoW10ua2V5cyYmXCJuZXh0XCJpbltdLmtleXMoKSksdj1cIkBAaXRlcmF0b3JcIix5PVwia2V5c1wiLGQ9XCJ2YWx1ZXNcIixnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxtLHcseCxiKXthKGUsbixtKTt2YXIgXyxPLGosUz1mdW5jdGlvbih0KXtpZighaCYmdCBpbiBrKXJldHVybiBrW3RdO3N3aXRjaCh0KXtjYXNlIHk6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9O2Nhc2UgZDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9fSxFPW4rXCIgSXRlcmF0b3JcIixUPXc9PWQsUD0hMSxrPXQucHJvdG90eXBlLEw9a1twXXx8a1t2XXx8dyYma1t3XSxNPUx8fFModyksRj13P1Q/UyhcImVudHJpZXNcIik6TTp2b2lkIDAsTj1cIkFycmF5XCI9PW4/ay5lbnRyaWVzfHxMOkw7aWYoTiYmKGo9bChOLmNhbGwobmV3IHQpKSxqIT09T2JqZWN0LnByb3RvdHlwZSYmKHMoaixFLCEwKSxyfHxjKGoscCl8fHUoaixwLGcpKSksVCYmTCYmTC5uYW1lIT09ZCYmKFA9ITAsTT1mdW5jdGlvbigpe3JldHVybiBMLmNhbGwodGhpcyl9KSxyJiYhYnx8IWgmJiFQJiZrW3BdfHx1KGsscCxNKSxmW25dPU0sZltFXT1nLHcpaWYoXz17dmFsdWVzOlQ/TTpTKGQpLGtleXM6eD9NOlMoeSksZW50cmllczpGfSxiKWZvcihPIGluIF8pTyBpbiBrfHxpKGssTyxfW09dKTtlbHNlIG8oby5QK28uRiooaHx8UCksbixfKTtyZXR1cm4gX319LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDYpLG89ZSg3OSksaT1lKDI1KSx1PWUoMjcpKFwiSUVfUFJPVE9cIiksYz1mdW5jdGlvbigpe30sZj1cInByb3RvdHlwZVwiLGE9ZnVuY3Rpb24oKXt2YXIgdCxuPWUoMjQpKFwiaWZyYW1lXCIpLHI9aS5sZW5ndGgsbz1cIjxcIix1PVwiPlwiO2ZvcihuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZSgzNCkuYXBwZW5kQ2hpbGQobiksbi5zcmM9XCJqYXZhc2NyaXB0OlwiLHQ9bi5jb250ZW50V2luZG93LmRvY3VtZW50LHQub3BlbigpLHQud3JpdGUobytcInNjcmlwdFwiK3UrXCJkb2N1bWVudC5GPU9iamVjdFwiK28rXCIvc2NyaXB0XCIrdSksdC5jbG9zZSgpLGE9dC5GO3ItLTspZGVsZXRlIGFbZl1baVtyXV07cmV0dXJuIGEoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsbil7dmFyIGU7cmV0dXJuIG51bGwhPT10PyhjW2ZdPXIodCksZT1uZXcgYyxjW2ZdPW51bGwsZVt1XT10KTplPWEoKSx2b2lkIDA9PT1uP2U6byhlLG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNDApLG89ZSgyNSkuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIik7bi5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbih0KXtyZXR1cm4gcih0LG8pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNyksbz1lKDkpLGk9ZSg2NSkoITEpLHU9ZSgyNykoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXt2YXIgZSxjPW8odCksZj0wLGE9W107Zm9yKGUgaW4gYyllIT11JiZyKGMsZSkmJmEucHVzaChlKTtmb3IoO24ubGVuZ3RoPmY7KXIoYyxlPW5bZisrXSkmJih+aShhLGUpfHxhLnB1c2goZSkpO3JldHVybiBhfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDgpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHIsbyxpLHU9ZSgxNiksYz1lKDY4KSxmPWUoMzQpLGE9ZSgyNCkscz1lKDIpLGw9cy5wcm9jZXNzLHA9cy5zZXRJbW1lZGlhdGUsaD1zLmNsZWFySW1tZWRpYXRlLHY9cy5NZXNzYWdlQ2hhbm5lbCx5PTAsZD17fSxnPVwib25yZWFkeXN0YXRlY2hhbmdlXCIsbT1mdW5jdGlvbigpe3ZhciB0PSt0aGlzO2lmKGQuaGFzT3duUHJvcGVydHkodCkpe3ZhciBuPWRbdF07ZGVsZXRlIGRbdF0sbigpfX0sdz1mdW5jdGlvbih0KXttLmNhbGwodC5kYXRhKX07cCYmaHx8KHA9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPVtdLGU9MTthcmd1bWVudHMubGVuZ3RoPmU7KW4ucHVzaChhcmd1bWVudHNbZSsrXSk7cmV0dXJuIGRbKyt5XT1mdW5jdGlvbigpe2MoXCJmdW5jdGlvblwiPT10eXBlb2YgdD90OkZ1bmN0aW9uKHQpLG4pfSxyKHkpLHl9LGg9ZnVuY3Rpb24odCl7ZGVsZXRlIGRbdF19LFwicHJvY2Vzc1wiPT1lKDEwKShsKT9yPWZ1bmN0aW9uKHQpe2wubmV4dFRpY2sodShtLHQsMSkpfTp2PyhvPW5ldyB2LGk9by5wb3J0MixvLnBvcnQxLm9ubWVzc2FnZT13LHI9dShpLnBvc3RNZXNzYWdlLGksMSkpOnMuYWRkRXZlbnRMaXN0ZW5lciYmXCJmdW5jdGlvblwiPT10eXBlb2YgcG9zdE1lc3NhZ2UmJiFzLmltcG9ydFNjcmlwdHM/KHI9ZnVuY3Rpb24odCl7cy5wb3N0TWVzc2FnZSh0K1wiXCIsXCIqXCIpfSxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdywhMSkpOnI9ZyBpbiBhKFwic2NyaXB0XCIpP2Z1bmN0aW9uKHQpe2YuYXBwZW5kQ2hpbGQoYShcInNjcmlwdFwiKSlbZ109ZnVuY3Rpb24oKXtmLnJlbW92ZUNoaWxkKHRoaXMpLG0uY2FsbCh0KX19OmZ1bmN0aW9uKHQpe3NldFRpbWVvdXQodShtLHQsMSksMCl9KSx0LmV4cG9ydHM9e3NldDpwLGNsZWFyOmh9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOSksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKHIodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDIzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChyKHQpKX19LGZ1bmN0aW9uKHQsbil7fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg4NikoITApO2UoMzcpKFN0cmluZyxcIlN0cmluZ1wiLGZ1bmN0aW9uKHQpe3RoaXMuX3Q9U3RyaW5nKHQpLHRoaXMuX2k9MH0sZnVuY3Rpb24oKXt2YXIgdCxuPXRoaXMuX3QsZT10aGlzLl9pO3JldHVybiBlPj1uLmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9Oih0PXIobixlKSx0aGlzLl9pKz10Lmxlbmd0aCx7dmFsdWU6dCxkb25lOiExfSl9KX0sZnVuY3Rpb24odCxuLGUpe2UoODkpO2Zvcih2YXIgcj1lKDIpLG89ZSg4KSxpPWUoMTQpLHU9ZSgxKShcInRvU3RyaW5nVGFnXCIpLGM9W1wiTm9kZUxpc3RcIixcIkRPTVRva2VuTGlzdFwiLFwiTWVkaWFMaXN0XCIsXCJTdHlsZVNoZWV0TGlzdFwiLFwiQ1NTUnVsZUxpc3RcIl0sZj0wO2Y8NTtmKyspe3ZhciBhPWNbZl0scz1yW2FdLGw9cyYmcy5wcm90b3R5cGU7bCYmIWxbdV0mJm8obCx1LGEpLGlbYV09aS5BcnJheX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNTgpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDU5KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg2MCksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNjEpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDYyKSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1uLl9fZXNNb2R1bGU9ITA7dmFyIG89ZSg1MCksaT1yKG8pO25bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBuZXcgaVtcImRlZmF1bHRcIl0oZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKG8sdSl7dHJ5e3ZhciBjPW5bb10odSksZj1jLnZhbHVlfWNhdGNoKGEpe3JldHVybiB2b2lkIGUoYSl9cmV0dXJuIGMuZG9uZT92b2lkIHQoZik6aVtcImRlZmF1bHRcIl0ucmVzb2x2ZShmKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiByKFwibmV4dFwiLHQpfSxmdW5jdGlvbih0KXtyZXR1cm4gcihcInRocm93XCIsdCl9KX1yZXR1cm4gcihcIm5leHRcIil9KX19fSxmdW5jdGlvbih0LG4pe1widXNlIHN0cmljdFwiO24uX19lc01vZHVsZT0hMCxuW1wiZGVmYXVsdFwiXT1mdW5jdGlvbih0LG4pe2lmKCEodCBpbnN0YW5jZW9mIG4pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e1wiZGVmYXVsdFwiOnR9fW4uX19lc01vZHVsZT0hMDt2YXIgbz1lKDQ5KSxpPXIobyk7bltcImRlZmF1bHRcIl09ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7Zm9yKHZhciBlPTA7ZTxuLmxlbmd0aDtlKyspe3ZhciByPW5bZV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLCgwLGlbXCJkZWZhdWx0XCJdKSh0LHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24obixlLHIpe3JldHVybiBlJiZ0KG4ucHJvdG90eXBlLGUpLHImJnQobixyKSxufX0oKX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1uLl9fZXNNb2R1bGU9ITA7dmFyIG89ZSg1MiksaT1yKG8pLHU9ZSg1MSksYz1yKHUpLGY9XCJmdW5jdGlvblwiPT10eXBlb2YgY1tcImRlZmF1bHRcIl0mJlwic3ltYm9sXCI9PXR5cGVvZiBpW1wiZGVmYXVsdFwiXT9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjW1wiZGVmYXVsdFwiXSYmdC5jb25zdHJ1Y3Rvcj09PWNbXCJkZWZhdWx0XCJdP1wic3ltYm9sXCI6dHlwZW9mIHR9O25bXCJkZWZhdWx0XCJdPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNbXCJkZWZhdWx0XCJdJiZcInN5bWJvbFwiPT09ZihpW1wiZGVmYXVsdFwiXSk/ZnVuY3Rpb24odCl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpmKHQpfTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgY1tcImRlZmF1bHRcIl0mJnQuY29uc3RydWN0b3I9PT1jW1wiZGVmYXVsdFwiXT9cInN5bWJvbFwiOlwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Zih0KX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9ZSg5Nyl9LGZ1bmN0aW9uKHQsbixlKXtlKDkwKSx0LmV4cG9ydHM9ZSgzKS5PYmplY3QuYXNzaWdufSxmdW5jdGlvbih0LG4sZSl7ZSg5MSk7dmFyIHI9ZSgzKS5PYmplY3Q7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtyZXR1cm4gci5kZWZpbmVQcm9wZXJ0eSh0LG4sZSl9fSxmdW5jdGlvbih0LG4sZSl7ZSg0NSksZSg0NiksZSg0NyksZSg5MiksdC5leHBvcnRzPWUoMykuUHJvbWlzZX0sZnVuY3Rpb24odCxuLGUpe2UoOTMpLGUoNDUpLGUoOTQpLGUoOTUpLHQuZXhwb3J0cz1lKDMpLlN5bWJvbH0sZnVuY3Rpb24odCxuLGUpe2UoNDYpLGUoNDcpLHQuZXhwb3J0cz1lKDMyKS5mKFwiaXRlcmF0b3JcIil9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUscil7aWYoISh0IGluc3RhbmNlb2Ygbil8fHZvaWQgMCE9PXImJnIgaW4gdCl0aHJvdyBUeXBlRXJyb3IoZStcIjogaW5jb3JyZWN0IGludm9jYXRpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoOSksbz1lKDQzKSxpPWUoODcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24obixlLHUpe3ZhciBjLGY9cihuKSxhPW8oZi5sZW5ndGgpLHM9aSh1LGEpO2lmKHQmJmUhPWUpe2Zvcig7YT5zOylpZihjPWZbcysrXSxjIT1jKXJldHVybiEwfWVsc2UgZm9yKDthPnM7cysrKWlmKCh0fHxzIGluIGYpJiZmW3NdPT09ZSlyZXR1cm4gdHx8c3x8MDtyZXR1cm4hdCYmLTF9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTUpLG89ZSgyNiksaT1lKDE4KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49cih0KSxlPW8uZjtpZihlKWZvcih2YXIgdSxjPWUodCksZj1pLmYsYT0wO2MubGVuZ3RoPmE7KWYuY2FsbCh0LHU9Y1thKytdKSYmbi5wdXNoKHUpO3JldHVybiBufX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTYpLG89ZSg3MSksaT1lKDY5KSx1PWUoNiksYz1lKDQzKSxmPWUoODgpLGE9e30scz17fSxuPXQuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxsLHApe3ZhciBoLHYseSxkLGc9cD9mdW5jdGlvbigpe3JldHVybiB0fTpmKHQpLG09cihlLGwsbj8yOjEpLHc9MDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBnKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBpdGVyYWJsZSFcIik7aWYoaShnKSl7Zm9yKGg9Yyh0Lmxlbmd0aCk7aD53O3crKylpZihkPW4/bSh1KHY9dFt3XSlbMF0sdlsxXSk6bSh0W3ddKSxkPT09YXx8ZD09PXMpcmV0dXJuIGR9ZWxzZSBmb3IoeT1nLmNhbGwodCk7ISh2PXkubmV4dCgpKS5kb25lOylpZihkPW8oeSxtLHYudmFsdWUsbiksZD09PWF8fGQ9PT1zKXJldHVybiBkfTtuLkJSRUFLPWEsbi5SRVRVUk49c30sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3ZhciByPXZvaWQgMD09PWU7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHI/dCgpOnQuY2FsbChlKTtjYXNlIDE6cmV0dXJuIHI/dChuWzBdKTp0LmNhbGwoZSxuWzBdKTtjYXNlIDI6cmV0dXJuIHI/dChuWzBdLG5bMV0pOnQuY2FsbChlLG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiByP3QoblswXSxuWzFdLG5bMl0pOnQuY2FsbChlLG5bMF0sblsxXSxuWzJdKTtjYXNlIDQ6cmV0dXJuIHI/dChuWzBdLG5bMV0sblsyXSxuWzNdKTp0LmNhbGwoZSxuWzBdLG5bMV0sblsyXSxuWzNdKX1yZXR1cm4gdC5hcHBseShlLG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTQpLG89ZSgxKShcIml0ZXJhdG9yXCIpLGk9QXJyYXkucHJvdG90eXBlO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dCYmKHIuQXJyYXk9PT10fHxpW29dPT09dCl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCk7dC5leHBvcnRzPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKHQpe3JldHVyblwiQXJyYXlcIj09cih0KX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDYpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxvKXt0cnl7cmV0dXJuIG8/bihyKGUpWzBdLGVbMV0pOm4oZSl9Y2F0Y2goaSl7dmFyIHU9dFtcInJldHVyblwiXTt0aHJvdyB2b2lkIDAhPT11JiZyKHUuY2FsbCh0KSksaX19fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgzOCksbz1lKDE5KSxpPWUoMjApLHU9e307ZSg4KSh1LGUoMSkoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0LnByb3RvdHlwZT1yKHUse25leHQ6bygxLGUpfSksaSh0LG4rXCIgSXRlcmF0b3JcIil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKShcIml0ZXJhdG9yXCIpLG89ITE7dHJ5e3ZhciBpPVs3XVtyXSgpO2lbXCJyZXR1cm5cIl09ZnVuY3Rpb24oKXtvPSEwfSxBcnJheS5mcm9tKGksZnVuY3Rpb24oKXt0aHJvdyAyfSl9Y2F0Y2godSl7fXQuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2lmKCFuJiYhbylyZXR1cm4hMTt2YXIgZT0hMTt0cnl7dmFyIGk9WzddLHU9aVtyXSgpO3UubmV4dD1mdW5jdGlvbigpe3JldHVybntkb25lOmU9ITB9fSxpW3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHV9LHQoaSl9Y2F0Y2goYyl7fXJldHVybiBlfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57dmFsdWU6bixkb25lOiEhdH19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNSksbz1lKDkpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2Zvcih2YXIgZSxpPW8odCksdT1yKGkpLGM9dS5sZW5ndGgsZj0wO2M+ZjspaWYoaVtlPXVbZisrXV09PT1uKXJldHVybiBlfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjEpKFwibWV0YVwiKSxvPWUoMTMpLGk9ZSg3KSx1PWUoNSkuZixjPTAsZj1PYmplY3QuaXNFeHRlbnNpYmxlfHxmdW5jdGlvbigpe3JldHVybiEwfSxhPSFlKDEyKShmdW5jdGlvbigpe3JldHVybiBmKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpfSkscz1mdW5jdGlvbih0KXt1KHQscix7dmFsdWU6e2k6XCJPXCIrICsrYyx3Ont9fX0pfSxsPWZ1bmN0aW9uKHQsbil7aWYoIW8odCkpcmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDooXCJzdHJpbmdcIj09dHlwZW9mIHQ/XCJTXCI6XCJQXCIpK3Q7aWYoIWkodCxyKSl7aWYoIWYodCkpcmV0dXJuXCJGXCI7aWYoIW4pcmV0dXJuXCJFXCI7cyh0KX1yZXR1cm4gdFtyXS5pfSxwPWZ1bmN0aW9uKHQsbil7aWYoIWkodCxyKSl7aWYoIWYodCkpcmV0dXJuITA7aWYoIW4pcmV0dXJuITE7cyh0KX1yZXR1cm4gdFtyXS53fSxoPWZ1bmN0aW9uKHQpe3JldHVybiBhJiZ2Lk5FRUQmJmYodCkmJiFpKHQscikmJnModCksdH0sdj10LmV4cG9ydHM9e0tFWTpyLE5FRUQ6ITEsZmFzdEtleTpsLGdldFdlYWs6cCxvbkZyZWV6ZTpofX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMiksbz1lKDQyKS5zZXQsaT1yLk11dGF0aW9uT2JzZXJ2ZXJ8fHIuV2ViS2l0TXV0YXRpb25PYnNlcnZlcix1PXIucHJvY2VzcyxjPXIuUHJvbWlzZSxmPVwicHJvY2Vzc1wiPT1lKDEwKSh1KTt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdCxuLGUsYT1mdW5jdGlvbigpe3ZhciByLG87Zm9yKGYmJihyPXUuZG9tYWluKSYmci5leGl0KCk7dDspe289dC5mbix0PXQubmV4dDt0cnl7bygpfWNhdGNoKGkpe3Rocm93IHQ/ZSgpOm49dm9pZCAwLGl9fW49dm9pZCAwLHImJnIuZW50ZXIoKX07aWYoZillPWZ1bmN0aW9uKCl7dS5uZXh0VGljayhhKX07ZWxzZSBpZihpKXt2YXIgcz0hMCxsPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO25ldyBpKGEpLm9ic2VydmUobCx7Y2hhcmFjdGVyRGF0YTohMH0pLGU9ZnVuY3Rpb24oKXtsLmRhdGE9cz0hc319ZWxzZSBpZihjJiZjLnJlc29sdmUpe3ZhciBwPWMucmVzb2x2ZSgpO2U9ZnVuY3Rpb24oKXtwLnRoZW4oYSl9fWVsc2UgZT1mdW5jdGlvbigpe28uY2FsbChyLGEpfTtyZXR1cm4gZnVuY3Rpb24ocil7dmFyIG89e2ZuOnIsbmV4dDp2b2lkIDB9O24mJihuLm5leHQ9byksdHx8KHQ9byxlKCkpLG49b319fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgxNSksbz1lKDI2KSxpPWUoMTgpLHU9ZSg0NCksYz1lKDM2KSxmPU9iamVjdC5hc3NpZ247dC5leHBvcnRzPSFmfHxlKDEyKShmdW5jdGlvbigpe3ZhciB0PXt9LG49e30sZT1TeW1ib2woKSxyPVwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIjtyZXR1cm4gdFtlXT03LHIuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbih0KXtuW3RdPXR9KSw3IT1mKHt9LHQpW2VdfHxPYmplY3Qua2V5cyhmKHt9LG4pKS5qb2luKFwiXCIpIT1yfSk/ZnVuY3Rpb24odCxuKXtmb3IodmFyIGU9dSh0KSxmPWFyZ3VtZW50cy5sZW5ndGgsYT0xLHM9by5mLGw9aS5mO2Y+YTspZm9yKHZhciBwLGg9Yyhhcmd1bWVudHNbYSsrXSksdj1zP3IoaCkuY29uY2F0KHMoaCkpOnIoaCkseT12Lmxlbmd0aCxkPTA7eT5kOylsLmNhbGwoaCxwPXZbZCsrXSkmJihlW3BdPWhbcF0pO3JldHVybiBlfTpmfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1KSxvPWUoNiksaT1lKDE1KTt0LmV4cG9ydHM9ZSg0KT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbih0LG4pe28odCk7Zm9yKHZhciBlLHU9aShuKSxjPXUubGVuZ3RoLGY9MDtjPmY7KXIuZih0LGU9dVtmKytdLG5bZV0pO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTgpLG89ZSgxOSksaT1lKDkpLHU9ZSgzMCksYz1lKDcpLGY9ZSgzNSksYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO24uZj1lKDQpP2E6ZnVuY3Rpb24odCxuKXtpZih0PWkodCksbj11KG4sITApLGYpdHJ5e3JldHVybiBhKHQsbil9Y2F0Y2goZSl7fWlmKGModCxuKSlyZXR1cm4gbyghci5mLmNhbGwodCxuKSx0W25dKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDkpLG89ZSgzOSkuZixpPXt9LnRvU3RyaW5nLHU9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93JiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcz9PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpOltdLGM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBvKHQpfWNhdGNoKG4pe3JldHVybiB1LnNsaWNlKCl9fTt0LmV4cG9ydHMuZj1mdW5jdGlvbih0KXtyZXR1cm4gdSYmXCJbb2JqZWN0IFdpbmRvd11cIj09aS5jYWxsKHQpP2ModCk6byhyKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDcpLG89ZSg0NCksaT1lKDI3KShcIklFX1BST1RPXCIpLHU9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdD1vKHQpLHIodCxpKT90W2ldOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29uc3RydWN0b3ImJnQgaW5zdGFuY2VvZiB0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IucHJvdG90eXBlOnQgaW5zdGFuY2VvZiBPYmplY3Q/dTpudWxsfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoOCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtmb3IodmFyIG8gaW4gbillJiZ0W29dP3Rbb109bltvXTpyKHQsbyxuW29dKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDIpLG89ZSgzKSxpPWUoNSksdT1lKDQpLGM9ZSgxKShcInNwZWNpZXNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIG9bdF0/b1t0XTpyW3RdO3UmJm4mJiFuW2NdJiZpLmYobixjLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9fSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg2KSxvPWUoMjIpLGk9ZSgxKShcInNwZWNpZXNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7dmFyIGUsdT1yKHQpLmNvbnN0cnVjdG9yO3JldHVybiB2b2lkIDA9PT11fHx2b2lkIDA9PShlPXIodSlbaV0pP246byhlKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KSxvPWUoMjMpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24obixlKXt2YXIgaSx1LGM9U3RyaW5nKG8obikpLGY9cihlKSxhPWMubGVuZ3RoO3JldHVybiBmPDB8fGY+PWE/dD9cIlwiOnZvaWQgMDooaT1jLmNoYXJDb2RlQXQoZiksaTw1NTI5Nnx8aT41NjMxOXx8ZisxPT09YXx8KHU9Yy5jaGFyQ29kZUF0KGYrMSkpPDU2MzIwfHx1PjU3MzQzP3Q/Yy5jaGFyQXQoZik6aTp0P2Muc2xpY2UoZixmKzIpOihpLTU1Mjk2PDwxMCkrKHUtNTYzMjApKzY1NTM2KX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOSksbz1NYXRoLm1heCxpPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybiB0PXIodCksdDwwP28odCtuLDApOmkodCxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDMzKSxvPWUoMSkoXCJpdGVyYXRvclwiKSxpPWUoMTQpO3QuZXhwb3J0cz1lKDMpLmdldEl0ZXJhdG9yTWV0aG9kPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMCE9dClyZXR1cm4gdFtvXXx8dFtcIkBAaXRlcmF0b3JcIl18fGlbcih0KV19fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg2Myksbz1lKDc0KSxpPWUoMTQpLHU9ZSg5KTt0LmV4cG9ydHM9ZSgzNykoQXJyYXksXCJBcnJheVwiLGZ1bmN0aW9uKHQsbil7dGhpcy5fdD11KHQpLHRoaXMuX2k9MCx0aGlzLl9rPW59LGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdCxuPXRoaXMuX2ssZT10aGlzLl9pKys7cmV0dXJuIXR8fGU+PXQubGVuZ3RoPyh0aGlzLl90PXZvaWQgMCxvKDEpKTpcImtleXNcIj09bj9vKDAsZSk6XCJ2YWx1ZXNcIj09bj9vKDAsdFtlXSk6bygwLFtlLHRbZV1dKX0sXCJ2YWx1ZXNcIiksaS5Bcmd1bWVudHM9aS5BcnJheSxyKFwia2V5c1wiKSxyKFwidmFsdWVzXCIpLHIoXCJlbnRyaWVzXCIpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMSk7cihyLlMrci5GLFwiT2JqZWN0XCIse2Fzc2lnbjplKDc4KX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMSk7cihyLlMrci5GKiFlKDQpLFwiT2JqZWN0XCIse2RlZmluZVByb3BlcnR5OmUoNSkuZn0pfSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsbyxpLHU9ZSgxNyksYz1lKDIpLGY9ZSgxNiksYT1lKDMzKSxzPWUoMTEpLGw9ZSgxMykscD1lKDIyKSxoPWUoNjQpLHY9ZSg2NykseT1lKDg1KSxkPWUoNDIpLnNldCxnPWUoNzcpKCksbT1cIlByb21pc2VcIix3PWMuVHlwZUVycm9yLHg9Yy5wcm9jZXNzLGI9Y1ttXSx4PWMucHJvY2VzcyxfPVwicHJvY2Vzc1wiPT1hKHgpLE89ZnVuY3Rpb24oKXt9LGo9ISFmdW5jdGlvbigpe3RyeXt2YXIgdD1iLnJlc29sdmUoMSksbj0odC5jb25zdHJ1Y3Rvcj17fSlbZSgxKShcInNwZWNpZXNcIildPWZ1bmN0aW9uKHQpe3QoTyxPKX07cmV0dXJuKF98fFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCkmJnQudGhlbihPKWluc3RhbmNlb2Ygbn1jYXRjaChyKXt9fSgpLFM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD09PW58fHQ9PT1iJiZuPT09aX0sRT1mdW5jdGlvbih0KXt2YXIgbjtyZXR1cm4hKCFsKHQpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZihuPXQudGhlbikpJiZufSxUPWZ1bmN0aW9uKHQpe3JldHVybiBTKGIsdCk/bmV3IFAodCk6bmV3IG8odCl9LFA9bz1mdW5jdGlvbih0KXt2YXIgbixlO3RoaXMucHJvbWlzZT1uZXcgdChmdW5jdGlvbih0LHIpe2lmKHZvaWQgMCE9PW58fHZvaWQgMCE9PWUpdGhyb3cgdyhcIkJhZCBQcm9taXNlIGNvbnN0cnVjdG9yXCIpO249dCxlPXJ9KSx0aGlzLnJlc29sdmU9cChuKSx0aGlzLnJlamVjdD1wKGUpfSxrPWZ1bmN0aW9uKHQpe3RyeXt0KCl9Y2F0Y2gobil7cmV0dXJue2Vycm9yOm59fX0sTD1mdW5jdGlvbih0LG4pe2lmKCF0Ll9uKXt0Ll9uPSEwO3ZhciBlPXQuX2M7ZyhmdW5jdGlvbigpe2Zvcih2YXIgcj10Ll92LG89MT09dC5fcyxpPTAsdT1mdW5jdGlvbihuKXt2YXIgZSxpLHU9bz9uLm9rOm4uZmFpbCxjPW4ucmVzb2x2ZSxmPW4ucmVqZWN0LGE9bi5kb21haW47dHJ5e3U/KG98fCgyPT10Ll9oJiZOKHQpLHQuX2g9MSksdT09PSEwP2U9cjooYSYmYS5lbnRlcigpLGU9dShyKSxhJiZhLmV4aXQoKSksZT09PW4ucHJvbWlzZT9mKHcoXCJQcm9taXNlLWNoYWluIGN5Y2xlXCIpKTooaT1FKGUpKT9pLmNhbGwoZSxjLGYpOmMoZSkpOmYocil9Y2F0Y2gocyl7ZihzKX19O2UubGVuZ3RoPmk7KXUoZVtpKytdKTt0Ll9jPVtdLHQuX249ITEsbiYmIXQuX2gmJk0odCl9KX19LE09ZnVuY3Rpb24odCl7ZC5jYWxsKGMsZnVuY3Rpb24oKXt2YXIgbixlLHIsbz10Ll92O2lmKEYodCkmJihuPWsoZnVuY3Rpb24oKXtfP3guZW1pdChcInVuaGFuZGxlZFJlamVjdGlvblwiLG8sdCk6KGU9Yy5vbnVuaGFuZGxlZHJlamVjdGlvbik/ZSh7cHJvbWlzZTp0LHJlYXNvbjpvfSk6KHI9Yy5jb25zb2xlKSYmci5lcnJvciYmci5lcnJvcihcIlVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvblwiLG8pfSksdC5faD1ffHxGKHQpPzI6MSksdC5fYT12b2lkIDAsbil0aHJvdyBuLmVycm9yfSl9LEY9ZnVuY3Rpb24odCl7aWYoMT09dC5faClyZXR1cm4hMTtmb3IodmFyIG4sZT10Ll9hfHx0Ll9jLHI9MDtlLmxlbmd0aD5yOylpZihuPWVbcisrXSxuLmZhaWx8fCFGKG4ucHJvbWlzZSkpcmV0dXJuITE7cmV0dXJuITB9LE49ZnVuY3Rpb24odCl7ZC5jYWxsKGMsZnVuY3Rpb24oKXt2YXIgbjtfP3guZW1pdChcInJlamVjdGlvbkhhbmRsZWRcIix0KToobj1jLm9ucmVqZWN0aW9uaGFuZGxlZCkmJm4oe3Byb21pc2U6dCxyZWFzb246dC5fdn0pfSl9LEE9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztuLl9kfHwobi5fZD0hMCxuPW4uX3d8fG4sbi5fdj10LG4uX3M9MixuLl9hfHwobi5fYT1uLl9jLnNsaWNlKCkpLEwobiwhMCkpfSxSPWZ1bmN0aW9uKHQpe3ZhciBuLGU9dGhpcztpZighZS5fZCl7ZS5fZD0hMCxlPWUuX3d8fGU7dHJ5e2lmKGU9PT10KXRocm93IHcoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTsobj1FKHQpKT9nKGZ1bmN0aW9uKCl7dmFyIHI9e193OmUsX2Q6ITF9O3RyeXtuLmNhbGwodCxmKFIsciwxKSxmKEEsciwxKSl9Y2F0Y2gobyl7QS5jYWxsKHIsbyl9fSk6KGUuX3Y9dCxlLl9zPTEsTChlLCExKSl9Y2F0Y2gocil7QS5jYWxsKHtfdzplLF9kOiExfSxyKX19fTtqfHwoYj1mdW5jdGlvbih0KXtoKHRoaXMsYixtLFwiX2hcIikscCh0KSxyLmNhbGwodGhpcyk7dHJ5e3QoZihSLHRoaXMsMSksZihBLHRoaXMsMSkpfWNhdGNoKG4pe0EuY2FsbCh0aGlzLG4pfX0scj1mdW5jdGlvbih0KXt0aGlzLl9jPVtdLHRoaXMuX2E9dm9pZCAwLHRoaXMuX3M9MCx0aGlzLl9kPSExLHRoaXMuX3Y9dm9pZCAwLHRoaXMuX2g9MCx0aGlzLl9uPSExfSxyLnByb3RvdHlwZT1lKDgzKShiLnByb3RvdHlwZSx7dGhlbjpmdW5jdGlvbih0LG4pe3ZhciBlPVQoeSh0aGlzLGIpKTtyZXR1cm4gZS5vaz1cImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHx0LGUuZmFpbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuLGUuZG9tYWluPV8/eC5kb21haW46dm9pZCAwLHRoaXMuX2MucHVzaChlKSx0aGlzLl9hJiZ0aGlzLl9hLnB1c2goZSksdGhpcy5fcyYmTCh0aGlzLCExKSxlLnByb21pc2V9LFwiY2F0Y2hcIjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKHZvaWQgMCx0KX19KSxQPWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IHI7dGhpcy5wcm9taXNlPXQsdGhpcy5yZXNvbHZlPWYoUix0LDEpLHRoaXMucmVqZWN0PWYoQSx0LDEpfSkscyhzLkcrcy5XK3MuRiohaix7UHJvbWlzZTpifSksZSgyMCkoYixtKSxlKDg0KShtKSxpPWUoMylbbV0scyhzLlMrcy5GKiFqLG0se3JlamVjdDpmdW5jdGlvbih0KXt2YXIgbj1UKHRoaXMpLGU9bi5yZWplY3Q7cmV0dXJuIGUodCksbi5wcm9taXNlfX0pLHMocy5TK3MuRioodXx8IWopLG0se3Jlc29sdmU6ZnVuY3Rpb24odCl7aWYodCBpbnN0YW5jZW9mIGImJlModC5jb25zdHJ1Y3Rvcix0aGlzKSlyZXR1cm4gdDt2YXIgbj1UKHRoaXMpLGU9bi5yZXNvbHZlO3JldHVybiBlKHQpLG4ucHJvbWlzZX19KSxzKHMuUytzLkYqIShqJiZlKDczKShmdW5jdGlvbih0KXtiLmFsbCh0KVtcImNhdGNoXCJdKE8pfSkpLG0se2FsbDpmdW5jdGlvbih0KXt2YXIgbj10aGlzLGU9VChuKSxyPWUucmVzb2x2ZSxvPWUucmVqZWN0LGk9ayhmdW5jdGlvbigpe3ZhciBlPVtdLGk9MCx1PTE7dih0LCExLGZ1bmN0aW9uKHQpe3ZhciBjPWkrKyxmPSExO2UucHVzaCh2b2lkIDApLHUrKyxuLnJlc29sdmUodCkudGhlbihmdW5jdGlvbih0KXtmfHwoZj0hMCxlW2NdPXQsLS11fHxyKGUpKX0sbyl9KSwtLXV8fHIoZSl9KTtyZXR1cm4gaSYmbyhpLmVycm9yKSxlLnByb21pc2V9LHJhY2U6ZnVuY3Rpb24odCl7dmFyIG49dGhpcyxlPVQobikscj1lLnJlamVjdCxvPWsoZnVuY3Rpb24oKXt2KHQsITEsZnVuY3Rpb24odCl7bi5yZXNvbHZlKHQpLnRoZW4oZS5yZXNvbHZlLHIpfSl9KTtyZXR1cm4gbyYmcihvLmVycm9yKSxlLnByb21pc2V9fSl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDIpLG89ZSg3KSxpPWUoNCksdT1lKDExKSxjPWUoNDEpLGY9ZSg3NikuS0VZLGE9ZSgxMikscz1lKDI4KSxsPWUoMjApLHA9ZSgyMSksaD1lKDEpLHY9ZSgzMikseT1lKDMxKSxkPWUoNzUpLGc9ZSg2NiksbT1lKDcwKSx3PWUoNikseD1lKDkpLGI9ZSgzMCksXz1lKDE5KSxPPWUoMzgpLGo9ZSg4MSksUz1lKDgwKSxFPWUoNSksVD1lKDE1KSxQPVMuZixrPUUuZixMPWouZixNPXIuU3ltYm9sLEY9ci5KU09OLE49RiYmRi5zdHJpbmdpZnksQT1cInByb3RvdHlwZVwiLFI9aChcIl9oaWRkZW5cIiksST1oKFwidG9QcmltaXRpdmVcIiksQz17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxHPXMoXCJzeW1ib2wtcmVnaXN0cnlcIiksVz1zKFwic3ltYm9sc1wiKSxVPXMoXCJvcC1zeW1ib2xzXCIpLEQ9T2JqZWN0W0FdLEs9XCJmdW5jdGlvblwiPT10eXBlb2YgTSxCPXIuUU9iamVjdCxKPSFCfHwhQltBXXx8IUJbQV0uZmluZENoaWxkLFk9aSYmYShmdW5jdGlvbigpe3JldHVybiA3IT1PKGsoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBrKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24odCxuLGUpe3ZhciByPVAoRCxuKTtyJiZkZWxldGUgRFtuXSxrKHQsbixlKSxyJiZ0IT09RCYmayhELG4scil9OmsscT1mdW5jdGlvbih0KXt2YXIgbj1XW3RdPU8oTVtBXSk7cmV0dXJuIG4uX2s9dCxufSx6PUsmJlwic3ltYm9sXCI9PXR5cGVvZiBNLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIE19LEg9ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0PT09RCYmSChVLG4sZSksdyh0KSxuPWIobiwhMCksdyhlKSxvKFcsbik/KGUuZW51bWVyYWJsZT8obyh0LFIpJiZ0W1JdW25dJiYodFtSXVtuXT0hMSksZT1PKGUse2VudW1lcmFibGU6XygwLCExKX0pKToobyh0LFIpfHxrKHQsUixfKDEse30pKSx0W1JdW25dPSEwKSxZKHQsbixlKSk6ayh0LG4sZSl9LFY9ZnVuY3Rpb24odCxuKXt3KHQpO2Zvcih2YXIgZSxyPWcobj14KG4pKSxvPTAsaT1yLmxlbmd0aDtpPm87KUgodCxlPXJbbysrXSxuW2VdKTtyZXR1cm4gdH0sUT1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uP08odCk6VihPKHQpLG4pfSxYPWZ1bmN0aW9uKHQpe3ZhciBuPUMuY2FsbCh0aGlzLHQ9Yih0LCEwKSk7cmV0dXJuISh0aGlzPT09RCYmbyhXLHQpJiYhbyhVLHQpKSYmKCEobnx8IW8odGhpcyx0KXx8IW8oVyx0KXx8byh0aGlzLFIpJiZ0aGlzW1JdW3RdKXx8bil9LCQ9ZnVuY3Rpb24odCxuKXtpZih0PXgodCksbj1iKG4sITApLHQhPT1EfHwhbyhXLG4pfHxvKFUsbikpe3ZhciBlPVAodCxuKTtyZXR1cm4hZXx8IW8oVyxuKXx8byh0LFIpJiZ0W1JdW25dfHwoZS5lbnVtZXJhYmxlPSEwKSxlfX0sWj1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT1MKHgodCkpLHI9W10saT0wO2UubGVuZ3RoPmk7KW8oVyxuPWVbaSsrXSl8fG49PVJ8fG49PWZ8fHIucHVzaChuKTtyZXR1cm4gcn0sdHQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBuLGU9dD09PUQscj1MKGU/VTp4KHQpKSxpPVtdLHU9MDtyLmxlbmd0aD51OykhbyhXLG49clt1KytdKXx8ZSYmIW8oRCxuKXx8aS5wdXNoKFdbbl0pO3JldHVybiBpfTtLfHwoTT1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBNKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciFcIik7dmFyIHQ9cChhcmd1bWVudHMubGVuZ3RoPjA/YXJndW1lbnRzWzBdOnZvaWQgMCksbj1mdW5jdGlvbihlKXt0aGlzPT09RCYmbi5jYWxsKFUsZSksbyh0aGlzLFIpJiZvKHRoaXNbUl0sdCkmJih0aGlzW1JdW3RdPSExKSxZKHRoaXMsdCxfKDEsZSkpfTtyZXR1cm4gaSYmSiYmWShELHQse2NvbmZpZ3VyYWJsZTohMCxzZXQ6bn0pLHEodCl9LGMoTVtBXSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa30pLFMuZj0kLEUuZj1ILGUoMzkpLmY9ai5mPVosZSgxOCkuZj1YLGUoMjYpLmY9dHQsaSYmIWUoMTcpJiZjKEQsXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLFgsITApLHYuZj1mdW5jdGlvbih0KXtyZXR1cm4gcShoKHQpKX0pLHUodS5HK3UuVyt1LkYqIUsse1N5bWJvbDpNfSk7Zm9yKHZhciBudD1cImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzXCIuc3BsaXQoXCIsXCIpLGV0PTA7bnQubGVuZ3RoPmV0OyloKG50W2V0KytdKTtmb3IodmFyIG50PVQoaC5zdG9yZSksZXQ9MDtudC5sZW5ndGg+ZXQ7KXkobnRbZXQrK10pO3UodS5TK3UuRiohSyxcIlN5bWJvbFwiLHtcImZvclwiOmZ1bmN0aW9uKHQpe3JldHVybiBvKEcsdCs9XCJcIik/R1t0XTpHW3RdPU0odCl9LGtleUZvcjpmdW5jdGlvbih0KXtpZih6KHQpKXJldHVybiBkKEcsdCk7dGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgc3ltYm9sIVwiKX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7Sj0hMH0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7Sj0hMX19KSx1KHUuUyt1LkYqIUssXCJPYmplY3RcIix7Y3JlYXRlOlEsZGVmaW5lUHJvcGVydHk6SCxkZWZpbmVQcm9wZXJ0aWVzOlYsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiQsZ2V0T3duUHJvcGVydHlOYW1lczpaLGdldE93blByb3BlcnR5U3ltYm9sczp0dH0pLEYmJnUodS5TK3UuRiooIUt8fGEoZnVuY3Rpb24oKXt2YXIgdD1NKCk7cmV0dXJuXCJbbnVsbF1cIiE9TihbdF0pfHxcInt9XCIhPU4oe2E6dH0pfHxcInt9XCIhPU4oT2JqZWN0KHQpKX0pKSxcIkpTT05cIix7c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe2lmKHZvaWQgMCE9PXQmJiF6KHQpKXtmb3IodmFyIG4sZSxyPVt0XSxvPTE7YXJndW1lbnRzLmxlbmd0aD5vOylyLnB1c2goYXJndW1lbnRzW28rK10pO3JldHVybiBuPXJbMV0sXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKGU9biksIWUmJm0obil8fChuPWZ1bmN0aW9uKHQsbil7aWYoZSYmKG49ZS5jYWxsKHRoaXMsdCxuKSksIXoobikpcmV0dXJuIG59KSxyWzFdPW4sTi5hcHBseShGLHIpfX19KSxNW0FdW0ldfHxlKDgpKE1bQV0sSSxNW0FdLnZhbHVlT2YpLGwoTSxcIlN5bWJvbFwiKSxsKE1hdGgsXCJNYXRoXCIsITApLGwoci5KU09OLFwiSlNPTlwiLCEwKX0sZnVuY3Rpb24odCxuLGUpe2UoMzEpKFwiYXN5bmNJdGVyYXRvclwiKX0sZnVuY3Rpb24odCxuLGUpe2UoMzEpKFwib2JzZXJ2YWJsZVwiKX0sZnVuY3Rpb24odCxuKXtmdW5jdGlvbiBlKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiByKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIG8odCl7aWYocz09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQodCwwKTtpZigocz09PWV8fCFzKSYmc2V0VGltZW91dClyZXR1cm4gcz1zZXRUaW1lb3V0LHNldFRpbWVvdXQodCwwKTt0cnl7cmV0dXJuIHModCwwKX1jYXRjaChuKXt0cnl7cmV0dXJuIHMuY2FsbChudWxsLHQsMCl9Y2F0Y2gobil7cmV0dXJuIHMuY2FsbCh0aGlzLHQsMCl9fX1mdW5jdGlvbiBpKHQpe2lmKGw9PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dCh0KTtpZigobD09PXJ8fCFsKSYmY2xlYXJUaW1lb3V0KXJldHVybiBsPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQodCk7dHJ5e3JldHVybiBsKHQpfWNhdGNoKG4pe3RyeXtyZXR1cm4gbC5jYWxsKG51bGwsdCl9Y2F0Y2gobil7cmV0dXJuIGwuY2FsbCh0aGlzLHQpfX19ZnVuY3Rpb24gdSgpe3kmJmgmJih5PSExLGgubGVuZ3RoP3Y9aC5jb25jYXQodik6ZD0tMSx2Lmxlbmd0aCYmYygpKX1mdW5jdGlvbiBjKCl7aWYoIXkpe3ZhciB0PW8odSk7eT0hMDtmb3IodmFyIG49di5sZW5ndGg7bjspe2ZvcihoPXYsdj1bXTsrK2Q8bjspaCYmaFtkXS5ydW4oKTtkPS0xLG49di5sZW5ndGh9aD1udWxsLHk9ITEsaSh0KX19ZnVuY3Rpb24gZih0LG4pe3RoaXMuZnVuPXQsdGhpcy5hcnJheT1ufWZ1bmN0aW9uIGEoKXt9dmFyIHMsbCxwPXQuZXhwb3J0cz17fTshZnVuY3Rpb24oKXt0cnl7cz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6ZX1jYXRjaCh0KXtzPWV9dHJ5e2w9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpyfWNhdGNoKHQpe2w9cn19KCk7dmFyIGgsdj1bXSx5PSExLGQ9LTE7cC5uZXh0VGljaz1mdW5jdGlvbih0KXt2YXIgbj1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyluW2UtMV09YXJndW1lbnRzW2VdO3YucHVzaChuZXcgZih0LG4pKSwxIT09di5sZW5ndGh8fHl8fG8oYyl9LGYucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LHAudGl0bGU9XCJicm93c2VyXCIscC5icm93c2VyPSEwLHAuZW52PXt9LHAuYXJndj1bXSxwLnZlcnNpb249XCJcIixwLnZlcnNpb25zPXt9LHAub249YSxwLmFkZExpc3RlbmVyPWEscC5vbmNlPWEscC5vZmY9YSxwLnJlbW92ZUxpc3RlbmVyPWEscC5yZW1vdmVBbGxMaXN0ZW5lcnM9YSxwLmVtaXQ9YSxwLmJpbmRpbmc9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHAuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LHAuY2hkaXI9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxwLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbih0LG4sZSl7KGZ1bmN0aW9uKG4pe3ZhciByPVwib2JqZWN0XCI9PXR5cGVvZiBuP246XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGY/c2VsZjp0aGlzLG89ci5yZWdlbmVyYXRvclJ1bnRpbWUmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHIpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIik+PTAsaT1vJiZyLnJlZ2VuZXJhdG9yUnVudGltZTtpZihyLnJlZ2VuZXJhdG9yUnVudGltZT12b2lkIDAsdC5leHBvcnRzPWUoOTgpLG8pci5yZWdlbmVyYXRvclJ1bnRpbWU9aTtlbHNlIHRyeXtkZWxldGUgci5yZWdlbmVyYXRvclJ1bnRpbWV9Y2F0Y2godSl7ci5yZWdlbmVyYXRvclJ1bnRpbWU9dm9pZCAwfX0pLmNhbGwobixmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24odCxuLGUpeyhmdW5jdGlvbihuLGUpeyFmdW5jdGlvbihuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsbixlLHIpe3ZhciBvPU9iamVjdC5jcmVhdGUoKG58fGkpLnByb3RvdHlwZSksdT1uZXcgdihyfHxbXSk7cmV0dXJuIG8uX2ludm9rZT1sKHQsZSx1KSxvfWZ1bmN0aW9uIG8odCxuLGUpe3RyeXtyZXR1cm57dHlwZTpcIm5vcm1hbFwiLGFyZzp0LmNhbGwobixlKX19Y2F0Y2gocil7cmV0dXJue3R5cGU6XCJ0aHJvd1wiLGFyZzpyfX19ZnVuY3Rpb24gaSgpe31mdW5jdGlvbiB1KCl7fWZ1bmN0aW9uIGMoKXt9ZnVuY3Rpb24gZih0KXtbXCJuZXh0XCIsXCJ0aHJvd1wiLFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obil7dFtuXT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faW52b2tlKG4sdCl9fSl9ZnVuY3Rpb24gYSh0KXt0aGlzLmFyZz10fWZ1bmN0aW9uIHModCl7ZnVuY3Rpb24gbihlLHIsaSx1KXt2YXIgYz1vKHRbZV0sdCxyKTtpZihcInRocm93XCIhPT1jLnR5cGUpe3ZhciBmPWMuYXJnLHM9Zi52YWx1ZTtyZXR1cm4gcyBpbnN0YW5jZW9mIGE/UHJvbWlzZS5yZXNvbHZlKHMuYXJnKS50aGVuKGZ1bmN0aW9uKHQpe24oXCJuZXh0XCIsdCxpLHUpfSxmdW5jdGlvbih0KXtuKFwidGhyb3dcIix0LGksdSl9KTpQcm9taXNlLnJlc29sdmUocykudGhlbihmdW5jdGlvbih0KXtmLnZhbHVlPXQsaShmKX0sdSl9dShjLmFyZyl9ZnVuY3Rpb24gcih0LGUpe2Z1bmN0aW9uIHIoKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocixvKXtuKHQsZSxyLG8pfSl9cmV0dXJuIGk9aT9pLnRoZW4ocixyKTpyKCl9XCJvYmplY3RcIj09dHlwZW9mIGUmJmUuZG9tYWluJiYobj1lLmRvbWFpbi5iaW5kKG4pKTt2YXIgaTt0aGlzLl9pbnZva2U9cn1mdW5jdGlvbiBsKHQsbixlKXt2YXIgcj1qO3JldHVybiBmdW5jdGlvbihpLHUpe2lmKHI9PT1FKXRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7aWYocj09PVQpe2lmKFwidGhyb3dcIj09PWkpdGhyb3cgdTtyZXR1cm4gZCgpfWZvcig7Oyl7dmFyIGM9ZS5kZWxlZ2F0ZTtpZihjKXtpZihcInJldHVyblwiPT09aXx8XCJ0aHJvd1wiPT09aSYmYy5pdGVyYXRvcltpXT09PWcpe2UuZGVsZWdhdGU9bnVsbDt2YXIgZj1jLml0ZXJhdG9yW1wicmV0dXJuXCJdO2lmKGYpe3ZhciBhPW8oZixjLml0ZXJhdG9yLHUpO2lmKFwidGhyb3dcIj09PWEudHlwZSl7aT1cInRocm93XCIsdT1hLmFyZztjb250aW51ZX19aWYoXCJyZXR1cm5cIj09PWkpY29udGludWV9dmFyIGE9byhjLml0ZXJhdG9yW2ldLGMuaXRlcmF0b3IsdSk7aWYoXCJ0aHJvd1wiPT09YS50eXBlKXtlLmRlbGVnYXRlPW51bGwsaT1cInRocm93XCIsdT1hLmFyZztjb250aW51ZX1pPVwibmV4dFwiLHU9Zzt2YXIgcz1hLmFyZztpZighcy5kb25lKXJldHVybiByPVMscztlW2MucmVzdWx0TmFtZV09cy52YWx1ZSxlLm5leHQ9Yy5uZXh0TG9jLGUuZGVsZWdhdGU9bnVsbH1pZihcIm5leHRcIj09PWkpZS5zZW50PWUuX3NlbnQ9dTtlbHNlIGlmKFwidGhyb3dcIj09PWkpe2lmKHI9PT1qKXRocm93IHI9VCx1O2UuZGlzcGF0Y2hFeGNlcHRpb24odSkmJihpPVwibmV4dFwiLHU9Zyl9ZWxzZVwicmV0dXJuXCI9PT1pJiZlLmFicnVwdChcInJldHVyblwiLHUpO3I9RTt2YXIgYT1vKHQsbixlKTtpZihcIm5vcm1hbFwiPT09YS50eXBlKXtyPWUuZG9uZT9UOlM7dmFyIHM9e3ZhbHVlOmEuYXJnLGRvbmU6ZS5kb25lfTtpZihhLmFyZyE9PVApcmV0dXJuIHM7ZS5kZWxlZ2F0ZSYmXCJuZXh0XCI9PT1pJiYodT1nKX1lbHNlXCJ0aHJvd1wiPT09YS50eXBlJiYocj1ULGk9XCJ0aHJvd1wiLHU9YS5hcmcpfX19ZnVuY3Rpb24gcCh0KXt2YXIgbj17dHJ5TG9jOnRbMF19OzEgaW4gdCYmKG4uY2F0Y2hMb2M9dFsxXSksMiBpbiB0JiYobi5maW5hbGx5TG9jPXRbMl0sbi5hZnRlckxvYz10WzNdKSx0aGlzLnRyeUVudHJpZXMucHVzaChuKX1mdW5jdGlvbiBoKHQpe3ZhciBuPXQuY29tcGxldGlvbnx8e307bi50eXBlPVwibm9ybWFsXCIsZGVsZXRlIG4uYXJnLHQuY29tcGxldGlvbj1ufWZ1bmN0aW9uIHYodCl7dGhpcy50cnlFbnRyaWVzPVt7dHJ5TG9jOlwicm9vdFwifV0sdC5mb3JFYWNoKHAsdGhpcyksdGhpcy5yZXNldCghMCl9ZnVuY3Rpb24geSh0KXtpZih0KXt2YXIgbj10W3hdO2lmKG4pcmV0dXJuIG4uY2FsbCh0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm5leHQpcmV0dXJuIHQ7aWYoIWlzTmFOKHQubGVuZ3RoKSl7dmFyIGU9LTEscj1mdW5jdGlvbiBvKCl7Zm9yKDsrK2U8dC5sZW5ndGg7KWlmKG0uY2FsbCh0LGUpKXJldHVybiBvLnZhbHVlPXRbZV0sby5kb25lPSExLG87cmV0dXJuIG8udmFsdWU9ZyxvLmRvbmU9ITAsb307cmV0dXJuIHIubmV4dD1yfX1yZXR1cm57bmV4dDpkfX1mdW5jdGlvbiBkKCl7cmV0dXJue3ZhbHVlOmcsZG9uZTohMH19dmFyIGcsbT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHc9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sP1N5bWJvbDp7fSx4PXcuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLGI9dy50b1N0cmluZ1RhZ3x8XCJAQHRvU3RyaW5nVGFnXCIsXz1cIm9iamVjdFwiPT10eXBlb2YgdCxPPW4ucmVnZW5lcmF0b3JSdW50aW1lO2lmKE8pcmV0dXJuIHZvaWQoXyYmKHQuZXhwb3J0cz1PKSk7Tz1uLnJlZ2VuZXJhdG9yUnVudGltZT1fP3QuZXhwb3J0czp7fSxPLndyYXA9cjt2YXIgaj1cInN1c3BlbmRlZFN0YXJ0XCIsUz1cInN1c3BlbmRlZFlpZWxkXCIsRT1cImV4ZWN1dGluZ1wiLFQ9XCJjb21wbGV0ZWRcIixQPXt9LGs9Yy5wcm90b3R5cGU9aS5wcm90b3R5cGU7dS5wcm90b3R5cGU9ay5jb25zdHJ1Y3Rvcj1jLGMuY29uc3RydWN0b3I9dSxjW2JdPXUuZGlzcGxheU5hbWU9XCJHZW5lcmF0b3JGdW5jdGlvblwiLE8uaXNHZW5lcmF0b3JGdW5jdGlvbj1mdW5jdGlvbih0KXt2YXIgbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yO3JldHVybiEhbiYmKG49PT11fHxcIkdlbmVyYXRvckZ1bmN0aW9uXCI9PT0obi5kaXNwbGF5TmFtZXx8bi5uYW1lKSl9LE8ubWFyaz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGMpOih0Ll9fcHJvdG9fXz1jLGIgaW4gdHx8KHRbYl09XCJHZW5lcmF0b3JGdW5jdGlvblwiKSksdC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShrKSx0fSxPLmF3cmFwPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgYSh0KX0sZihzLnByb3RvdHlwZSksTy5hc3luYz1mdW5jdGlvbih0LG4sZSxvKXt2YXIgaT1uZXcgcyhyKHQsbixlLG8pKTtyZXR1cm4gTy5pc0dlbmVyYXRvckZ1bmN0aW9uKG4pP2k6aS5uZXh0KCkudGhlbihmdW5jdGlvbih0KXtyZXR1cm4gdC5kb25lP3QudmFsdWU6aS5uZXh0KCl9KX0sZihrKSxrW3hdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGtbYl09XCJHZW5lcmF0b3JcIixrLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEdlbmVyYXRvcl1cIn0sTy5rZXlzPWZ1bmN0aW9uKHQpe3ZhciBuPVtdO2Zvcih2YXIgZSBpbiB0KW4ucHVzaChlKTtyZXR1cm4gbi5yZXZlcnNlKCksZnVuY3Rpb24gcigpe2Zvcig7bi5sZW5ndGg7KXt2YXIgZT1uLnBvcCgpO2lmKGUgaW4gdClyZXR1cm4gci52YWx1ZT1lLHIuZG9uZT0hMSxyfXJldHVybiByLmRvbmU9ITAsXG5yfX0sTy52YWx1ZXM9eSx2LnByb3RvdHlwZT17Y29uc3RydWN0b3I6dixyZXNldDpmdW5jdGlvbih0KXtpZih0aGlzLnByZXY9MCx0aGlzLm5leHQ9MCx0aGlzLnNlbnQ9dGhpcy5fc2VudD1nLHRoaXMuZG9uZT0hMSx0aGlzLmRlbGVnYXRlPW51bGwsdGhpcy50cnlFbnRyaWVzLmZvckVhY2goaCksIXQpZm9yKHZhciBuIGluIHRoaXMpXCJ0XCI9PT1uLmNoYXJBdCgwKSYmbS5jYWxsKHRoaXMsbikmJiFpc05hTigrbi5zbGljZSgxKSkmJih0aGlzW25dPWcpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5kb25lPSEwO3ZhciB0PXRoaXMudHJ5RW50cmllc1swXSxuPXQuY29tcGxldGlvbjtpZihcInRocm93XCI9PT1uLnR5cGUpdGhyb3cgbi5hcmc7cmV0dXJuIHRoaXMucnZhbH0sZGlzcGF0Y2hFeGNlcHRpb246ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihuLHIpe3JldHVybiBpLnR5cGU9XCJ0aHJvd1wiLGkuYXJnPXQsZS5uZXh0PW4sISFyfWlmKHRoaXMuZG9uZSl0aHJvdyB0O2Zvcih2YXIgZT10aGlzLHI9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO3I+PTA7LS1yKXt2YXIgbz10aGlzLnRyeUVudHJpZXNbcl0saT1vLmNvbXBsZXRpb247aWYoXCJyb290XCI9PT1vLnRyeUxvYylyZXR1cm4gbihcImVuZFwiKTtpZihvLnRyeUxvYzw9dGhpcy5wcmV2KXt2YXIgdT1tLmNhbGwobyxcImNhdGNoTG9jXCIpLGM9bS5jYWxsKG8sXCJmaW5hbGx5TG9jXCIpO2lmKHUmJmMpe2lmKHRoaXMucHJldjxvLmNhdGNoTG9jKXJldHVybiBuKG8uY2F0Y2hMb2MsITApO2lmKHRoaXMucHJldjxvLmZpbmFsbHlMb2MpcmV0dXJuIG4oby5maW5hbGx5TG9jKX1lbHNlIGlmKHUpe2lmKHRoaXMucHJldjxvLmNhdGNoTG9jKXJldHVybiBuKG8uY2F0Y2hMb2MsITApfWVsc2V7aWYoIWMpdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7aWYodGhpcy5wcmV2PG8uZmluYWxseUxvYylyZXR1cm4gbihvLmZpbmFsbHlMb2MpfX19fSxhYnJ1cHQ6ZnVuY3Rpb24odCxuKXtmb3IodmFyIGU9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO2U+PTA7LS1lKXt2YXIgcj10aGlzLnRyeUVudHJpZXNbZV07aWYoci50cnlMb2M8PXRoaXMucHJldiYmbS5jYWxsKHIsXCJmaW5hbGx5TG9jXCIpJiZ0aGlzLnByZXY8ci5maW5hbGx5TG9jKXt2YXIgbz1yO2JyZWFrfX1vJiYoXCJicmVha1wiPT09dHx8XCJjb250aW51ZVwiPT09dCkmJm8udHJ5TG9jPD1uJiZuPD1vLmZpbmFsbHlMb2MmJihvPW51bGwpO3ZhciBpPW8/by5jb21wbGV0aW9uOnt9O3JldHVybiBpLnR5cGU9dCxpLmFyZz1uLG8/dGhpcy5uZXh0PW8uZmluYWxseUxvYzp0aGlzLmNvbXBsZXRlKGkpLFB9LGNvbXBsZXRlOmZ1bmN0aW9uKHQsbil7aWYoXCJ0aHJvd1wiPT09dC50eXBlKXRocm93IHQuYXJnO1wiYnJlYWtcIj09PXQudHlwZXx8XCJjb250aW51ZVwiPT09dC50eXBlP3RoaXMubmV4dD10LmFyZzpcInJldHVyblwiPT09dC50eXBlPyh0aGlzLnJ2YWw9dC5hcmcsdGhpcy5uZXh0PVwiZW5kXCIpOlwibm9ybWFsXCI9PT10LnR5cGUmJm4mJih0aGlzLm5leHQ9bil9LGZpbmlzaDpmdW5jdGlvbih0KXtmb3IodmFyIG49dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO24+PTA7LS1uKXt2YXIgZT10aGlzLnRyeUVudHJpZXNbbl07aWYoZS5maW5hbGx5TG9jPT09dClyZXR1cm4gdGhpcy5jb21wbGV0ZShlLmNvbXBsZXRpb24sZS5hZnRlckxvYyksaChlKSxQfX0sXCJjYXRjaFwiOmZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7bj49MDstLW4pe3ZhciBlPXRoaXMudHJ5RW50cmllc1tuXTtpZihlLnRyeUxvYz09PXQpe3ZhciByPWUuY29tcGxldGlvbjtpZihcInRocm93XCI9PT1yLnR5cGUpe3ZhciBvPXIuYXJnO2goZSl9cmV0dXJuIG99fXRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKX0sZGVsZWdhdGVZaWVsZDpmdW5jdGlvbih0LG4sZSl7cmV0dXJuIHRoaXMuZGVsZWdhdGU9e2l0ZXJhdG9yOnkodCkscmVzdWx0TmFtZTpuLG5leHRMb2M6ZX0sUH19fShcIm9iamVjdFwiPT10eXBlb2Ygbj9uOlwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmP3NlbGY6dGhpcyl9KS5jYWxsKG4sZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSxlKDk2KSl9XSk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8XG4gICAgICAgICAgICAgIChtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgY29udHJvbFBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICBhcHBlbmQ6IGZhbHNlLFxyXG4gICAgICBjb250cm9sT3JkZXI6IFtcclxuICAgICAgICAnYXV0b2NvbXBsZXRlJyxcclxuICAgICAgICAnYnV0dG9uJyxcclxuICAgICAgICAnY2hlY2tib3gnLFxyXG4gICAgICAgICdjaGVja2JveC1ncm91cCcsXHJcbiAgICAgICAgJ2RhdGUnLFxyXG4gICAgICAgICdmaWxlJyxcclxuICAgICAgICAnaGVhZGVyJyxcclxuICAgICAgICAnaGlkZGVuJyxcclxuICAgICAgICAncGFyYWdyYXBoJyxcclxuICAgICAgICAnbnVtYmVyJyxcclxuICAgICAgICAncmFkaW8tZ3JvdXAnLFxyXG4gICAgICAgICdzZWxlY3QnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndGV4dGFyZWEnXHJcbiAgICAgIF0sXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIC8vIEFycmF5IG9mIGZpZWxkcyB0byBkaXNhYmxlXHJcbiAgICAgIGRpc2FibGVGaWVsZHM6IFtdLFxyXG4gICAgICBkaXNhYmxlZEF0dHJzOiBbXSxcclxuICAgICAgZGlzYWJsZWRBY3Rpb25CdXR0b25zOiBbXSxcclxuICAgICAgZWRpdE9uQWRkOiBmYWxzZSxcclxuICAgICAgLy8gVW5lZGl0YWJsZSBmaWVsZHMgb3Igb3RoZXIgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBhcHBlYXJcclxuICAgICAgLy8gYmVmb3JlIGFuZCBhZnRlciByZWd1bGFyIGZpZWxkczpcclxuICAgICAgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGZpZWxkcyB2YWx1ZXNcclxuICAgICAgLy8gZXg6XHJcbiAgICAgIC8vIGRlZmF1bHRGaWVsZHM6IFt7XHJcbiAgICAgIC8vICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcclxuICAgICAgLy8gICBuYW1lOiAnZmlyc3QtbmFtZScsXHJcbiAgICAgIC8vICAgcmVxdWlyZWQ6ICd0cnVlJyxcclxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ1lvdXIgZmlyc3QgbmFtZScsXHJcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXHJcbiAgICAgIC8vIH0sIHtcclxuICAgICAgLy8gICBsYWJlbDogJ1Bob25lJyxcclxuICAgICAgLy8gICBuYW1lOiAncGhvbmUnLFxyXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnSG93IGNhbiB3ZSByZWFjaCB5b3U/JyxcclxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcclxuICAgICAgLy8gfV0sXHJcbiAgICAgIGRlZmF1bHRGaWVsZHM6IFtdLFxyXG4gICAgICBmaWVsZHM6IFtdLFxyXG4gICAgICBmaWVsZFJlbW92ZVdhcm46IGZhbHNlLFxyXG4gICAgICBpbnB1dFNldHM6IFtdLFxyXG4gICAgICByb2xlczoge1xyXG4gICAgICAgIDE6ICdBZG1pbmlzdHJhdG9yJ1xyXG4gICAgICB9LFxyXG4gICAgICBub3RpZnk6IHtcclxuICAgICAgICBlcnJvcjogbWVzc2FnZSA9PiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IG1lc3NhZ2UgPT4gY29uc29sZS5sb2cobWVzc2FnZSksXHJcbiAgICAgICAgd2FybmluZzogbWVzc2FnZSA9PiBjb25zb2xlLndhcm4obWVzc2FnZSlcclxuICAgICAgfSxcclxuICAgICAgb25TYXZlOiAoZXZ0LCBmb3JtRGF0YSkgPT4gbnVsbCxcclxuICAgICAgb25DbGVhckFsbDogKCkgPT4gbnVsbCxcclxuICAgICAgcHJlcGVuZDogZmFsc2UsXHJcbiAgICAgIHNvcnRhYmxlQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICBzdGlja3lDb250cm9sczoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgIHRvcDogNSxcclxuICAgICAgICAgIGJvdHRvbTogJ2F1dG8nLFxyXG4gICAgICAgICAgcmlnaHQ6ICdhdXRvJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGVzOiB7fSxcclxuICAgICAgc2hvd0FjdGlvbkJ1dHRvbnM6IHRydWUsXHJcbiAgICAgIHR5cGVVc2VyRGlzYWJsZWRBdHRyczoge30sXHJcbiAgICAgIHR5cGVVc2VyQXR0cnM6IHt9LFxyXG4gICAgICB0eXBlVXNlckV2ZW50czoge30sXHJcbiAgICAgIHByZWZpeDogJ2Zvcm0tYnVpbGRlci0nXHJcbiAgICB9O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0STE4biA9IHtcclxuICAgICAgbG9jYXRpb246ICdodHRwczovL2Zvcm1idWlsZGVyLm9ubGluZS9hc3NldHMvbGFuZy8nLFxyXG4gICAgICBsYW5nczogW1xyXG4gICAgICAgICdlbi1VUydcclxuICAgICAgXSxcclxuICAgICAgcHJlbG9hZGVkOiB7XHJcbiAgICAgICAgJ2VuLVVTJzoge1xyXG4gICAgICAgICAgYWRkT3B0aW9uOiAnQWRkIE9wdGlvbiArJyxcclxuICAgICAgICAgIGFsbEZpZWxkc1JlbW92ZWQ6ICdBbGwgZmllbGRzIHdlcmUgcmVtb3ZlZC4nLFxyXG4gICAgICAgICAgYWxsb3dNdWx0aXBsZUZpbGVzOiAnQWxsb3cgdXNlcnMgdG8gdXBsb2FkIG11bHRpcGxlIGZpbGVzJyxcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogJ0F1dG9jb21wbGV0ZScsXHJcbiAgICAgICAgICBidXR0b246ICdCdXR0b24nLFxyXG4gICAgICAgICAgY2Fubm90QmVFbXB0eTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5JyxcclxuICAgICAgICAgIGNoZWNrYm94R3JvdXA6ICdDaGVja2JveCBHcm91cCcsXHJcbiAgICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcclxuICAgICAgICAgIGNoZWNrYm94ZXM6ICdDaGVja2JveGVzJyxcclxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NsYXNzJyxcclxuICAgICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXHJcbiAgICAgICAgICBjbGVhcjogJ0NsZWFyJyxcclxuICAgICAgICAgIGNsb3NlOiAnQ2xvc2UnLFxyXG4gICAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxyXG4gICAgICAgICAgY29weTogJ0NvcHkgVG8gQ2xpcGJvYXJkJyxcclxuICAgICAgICAgIGNvcHlCdXR0b246ICcmIzQzOycsXHJcbiAgICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxyXG4gICAgICAgICAgZGF0ZUZpZWxkOiAnRGF0ZSBGaWVsZCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbHAgVGV4dCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgZGV2TW9kZTogJ0RldmVsb3BlciBNb2RlJyxcclxuICAgICAgICAgIGVkaXROYW1lczogJ0VkaXQgTmFtZXMnLFxyXG4gICAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcclxuICAgICAgICAgIGVkaXRYTUw6ICdFZGl0IFhNTCcsXHJcbiAgICAgICAgICBlbmFibGVPdGhlcjogJ0VuYWJsZSAmcXVvdDtPdGhlciZxdW90OycsXHJcbiAgICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxyXG4gICAgICAgICAgZmllbGROb25FZGl0YWJsZTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVkaXRlZC4nLFxyXG4gICAgICAgICAgZmllbGRSZW1vdmVXYXJuaW5nOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGZpZWxkPycsXHJcbiAgICAgICAgICBmaWxlVXBsb2FkOiAnRmlsZSBVcGxvYWQnLFxyXG4gICAgICAgICAgZm9ybVVwZGF0ZWQ6ICdGb3JtIFVwZGF0ZWQnLFxyXG4gICAgICAgICAgZ2V0U3RhcnRlZDogJ0RyYWcgYSBmaWVsZCBmcm9tIHRoZSByaWdodCB0byB0aGlzIGFyZWEnLFxyXG4gICAgICAgICAgaGVhZGVyOiAnSGVhZGVyJyxcclxuICAgICAgICAgIGhpZGU6ICdFZGl0JyxcclxuICAgICAgICAgIGhpZGRlbjogJ0hpZGRlbiBJbnB1dCcsXHJcbiAgICAgICAgICBpbmxpbmU6ICdJbmxpbmUnLFxyXG4gICAgICAgICAgaW5saW5lRGVzYzogJ0Rpc3BsYXkge3R5cGV9IGlubGluZScsXHJcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcclxuICAgICAgICAgIGxhYmVsRW1wdHk6ICdGaWVsZCBMYWJlbCBjYW5ub3QgYmUgZW1wdHknLFxyXG4gICAgICAgICAgbGltaXRSb2xlOiAnTGltaXQgYWNjZXNzIHRvIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgcm9sZXM6JyxcclxuICAgICAgICAgIG1hbmRhdG9yeTogJ01hbmRhdG9yeScsXHJcbiAgICAgICAgICBtYXhsZW5ndGg6ICdNYXggTGVuZ3RoJyxcclxuICAgICAgICAgIG1pbk9wdGlvbk1lc3NhZ2U6ICdUaGlzIGZpZWxkIHJlcXVpcmVzIGEgbWluaW11bSBvZiAyIG9wdGlvbnMnLFxyXG4gICAgICAgICAgbXVsdGlwbGVGaWxlczogJ011bHRpcGxlIEZpbGVzJyxcclxuICAgICAgICAgIG5hbWU6ICdOYW1lJyxcclxuICAgICAgICAgIG5vOiAnTm8nLFxyXG4gICAgICAgICAgbm9GaWVsZHNUb0NsZWFyOiAnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsXHJcbiAgICAgICAgICBudW1iZXI6ICdOdW1iZXInLFxyXG4gICAgICAgICAgb2ZmOiAnT2ZmJyxcclxuICAgICAgICAgIG9uOiAnT24nLFxyXG4gICAgICAgICAgb3B0aW9uOiAnT3B0aW9uJyxcclxuICAgICAgICAgIG9wdGlvbnM6ICdPcHRpb25zJyxcclxuICAgICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxyXG4gICAgICAgICAgb3B0aW9uTGFiZWxQbGFjZWhvbGRlcjogJ0xhYmVsJyxcclxuICAgICAgICAgIG9wdGlvblZhbHVlUGxhY2Vob2xkZXI6ICdWYWx1ZScsXHJcbiAgICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXHJcbiAgICAgICAgICBvdGhlcjogJ090aGVyJyxcclxuICAgICAgICAgIHBhcmFncmFwaDogJ1BhcmFncmFwaCcsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcclxuICAgICAgICAgICdwbGFjZWhvbGRlci52YWx1ZSc6ICdWYWx1ZScsXHJcbiAgICAgICAgICAncGxhY2Vob2xkZXIubGFiZWwnOiAnTGFiZWwnLFxyXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLnRleHQnOiAnJyxcclxuICAgICAgICAgICdwbGFjZWhvbGRlci50ZXh0YXJlYSc6ICcnLFxyXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLmVtYWlsJzogJ0VudGVyIHlvdSBlbWFpbCcsXHJcbiAgICAgICAgICAncGxhY2Vob2xkZXIucGxhY2Vob2xkZXInOiAnJyxcclxuICAgICAgICAgICdwbGFjZWhvbGRlci5jbGFzc05hbWUnOiAnc3BhY2Ugc2VwYXJhdGVkIGNsYXNzZXMnLFxyXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLnBhc3N3b3JkJzogJ0VudGVyIHlvdXIgcGFzc3dvcmQnLFxyXG4gICAgICAgICAgcHJldmlldzogJ1ByZXZpZXcnLFxyXG4gICAgICAgICAgcmFkaW9Hcm91cDogJ1JhZGlvIEdyb3VwJyxcclxuICAgICAgICAgIHJhZGlvOiAnUmFkaW8nLFxyXG4gICAgICAgICAgcmVtb3ZlTWVzc2FnZTogJ1JlbW92ZSBFbGVtZW50JyxcclxuICAgICAgICAgIHJlbW92ZU9wdGlvbjogJ1JlbW92ZSBPcHRpb24nLFxyXG4gICAgICAgICAgcmVtb3ZlOiAnJiMyMTU7JyxcclxuICAgICAgICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQnLFxyXG4gICAgICAgICAgcmljaFRleHQ6ICdSaWNoIFRleHQgRWRpdG9yJyxcclxuICAgICAgICAgIHJvbGVzOiAnQWNjZXNzJyxcclxuICAgICAgICAgIHJvd3M6ICdSb3dzJyxcclxuICAgICAgICAgIHNhdmU6ICdTYXZlJyxcclxuICAgICAgICAgIHNlbGVjdE9wdGlvbnM6ICdPcHRpb25zJyxcclxuICAgICAgICAgIHNlbGVjdDogJ1NlbGVjdCcsXHJcbiAgICAgICAgICBzZWxlY3RDb2xvcjogJ1NlbGVjdCBDb2xvcicsXHJcbiAgICAgICAgICBzZWxlY3Rpb25zTWVzc2FnZTogJ0FsbG93IE11bHRpcGxlIFNlbGVjdGlvbnMnLFxyXG4gICAgICAgICAgc2l6ZTogJ1NpemUnLFxyXG4gICAgICAgICAgJ3NpemUueHMnOiAnRXh0cmEgU21hbGwnLFxyXG4gICAgICAgICAgJ3NpemUuc20nOiAnU21hbGwnLFxyXG4gICAgICAgICAgJ3NpemUubSc6ICdEZWZhdWx0JyxcclxuICAgICAgICAgICdzaXplLmxnJzogJ0xhcmdlJyxcclxuICAgICAgICAgIHN0eWxlOiAnU3R5bGUnLFxyXG4gICAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgIGJ0bjoge1xyXG4gICAgICAgICAgICAgICdkZWZhdWx0JzogJ0RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgIGRhbmdlcjogJ0RhbmdlcicsXHJcbiAgICAgICAgICAgICAgaW5mbzogJ0luZm8nLFxyXG4gICAgICAgICAgICAgIHByaW1hcnk6ICdQcmltYXJ5JyxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiAnU3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgd2FybmluZzogJ1dhcm5pbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWJ0eXBlOiAnVHlwZScsXHJcbiAgICAgICAgICB0ZXh0OiAnVGV4dCBGaWVsZCcsXHJcbiAgICAgICAgICB0ZXh0QXJlYTogJ1RleHQgQXJlYScsXHJcbiAgICAgICAgICB0b2dnbGU6ICdUb2dnbGUnLFxyXG4gICAgICAgICAgd2FybmluZzogJ1dhcm5pbmchJyxcclxuICAgICAgICAgIHZhbHVlOiAnVmFsdWUnLFxyXG4gICAgICAgICAgdmlld0pTT046ICd7ICB9JyxcclxuICAgICAgICAgIHZpZXdYTUw6ICcmbHQ7LyZndDsnLFxyXG4gICAgICAgICAgeWVzOiAnWWVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7fTtcclxuIiwiZXhwb3J0IGNvbnN0IGluc3RhbmNlRGF0YSA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGEge1xyXG4gIGNvbnN0cnVjdG9yKGZvcm1JRCkge1xyXG4gICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgdGhpcy5mb3JtSUQgPSBmb3JtSUQ7XHJcbiAgICB0aGlzLmxheW91dCA9ICcnO1xyXG4gICAgaW5zdGFuY2VEYXRhW2Zvcm1JRF0gPSB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZWZpZWxkcyA9IHt9O1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IGluc3RhbmNlRG9tID0ge307XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3VidHlwZXMgPSB7XHJcbiAgICAgIHRleHQ6IFsndGV4dCcsICdwYXNzd29yZCcsICdlbWFpbCcsICdjb2xvcicsICd0ZWwnXSxcclxuICAgICAgaGVhZGVyOiBbJ2gxJywgJ2gyJywgJ2gzJ10sXHJcbiAgICAgIGJ1dHRvbjogWydidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0J10sXHJcbiAgICAgIHBhcmFncmFwaDogWydwJywgJ2FkZHJlc3MnLCAnYmxvY2txdW90ZScsICdjYW52YXMnLCAnb3V0cHV0J10sXHJcbiAgICAgIHRleHRhcmVhOiBbJ3RleHRhcmVhJywgJ3F1aWxsJ11cclxuICAgIH07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGVtcHR5ID0gZWxlbWVudCA9PiB7XHJcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSAoZWxlbXMsIHRlcm0sIHNob3cgPSB0cnVlKSA9PiB7XHJcbiAgbGV0IGZpbHRlcmVkRWxlbXMgPSBbXTtcclxuICBsZXQgdG9nZ2xlID0gWydub25lJywgJ2Jsb2NrJ107XHJcblxyXG4gIGlmIChzaG93KSB7XHJcbiAgICB0b2dnbGUgPSB0b2dnbGUucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IGVsZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBsZXQgdHh0ID0gZWxlbXNbaV0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmICh0eHQuaW5kZXhPZih0ZXJtLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xyXG4gICAgICBlbGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gdG9nZ2xlWzBdO1xyXG4gICAgICBmaWx0ZXJlZEVsZW1zLnB1c2goZWxlbXNbaV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbXNbaV0uc3R5bGUuZGlzcGxheSA9IHRvZ2dsZVsxXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wdGlvbkZpZWxkcyA9IFtcclxuICAgICAgJ3NlbGVjdCcsXHJcbiAgICAgICdjaGVja2JveC1ncm91cCcsXHJcbiAgICAgICdjaGVja2JveCcsXHJcbiAgICAgICdyYWRpby1ncm91cCcsXHJcbiAgICAgICdhdXRvY29tcGxldGUnXHJcbiAgICBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wdGlvbkZpZWxkc1JlZ0V4ID0gbmV3IFJlZ0V4cChgKCR7b3B0aW9uRmllbGRzLmpvaW4oJ3wnKX0pYCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbSB7XHJcbiAgY29uc3RydWN0b3IoZm9ybUlEKSB7XHJcbiAgICB0aGlzLm9wdGlvbkZpZWxkcyA9IG9wdGlvbkZpZWxkcztcclxuICAgIHRoaXMub3B0aW9uRmllbGRzUmVnRXggPSBvcHRpb25GaWVsZHNSZWdFeDtcclxuXHJcbiAgICB0aGlzLnN1YnR5cGVzID0gZGVmYXVsdFN1YnR5cGVzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXRpbCB0byByZW1vdmUgY29udGVudHMgb2YgRE9NIE9iamVjdFxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGVsZW1lbnQgd2l0aCBpdHMgY2hpbGRyZW4gcmVtb3ZlZFxyXG4gICAgICovXHJcbiAgICB0aGlzLmVtcHR5ID0gZW1wdHk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIG9yIHNob3cgYW4gQXJyYXkgb3IgSFRNTENvbGxlY3Rpb24gb2YgZWxlbWVudHNcclxuICAgICAqIEBwYXJhbSAge0FycmF5fSAgIGVsZW1zXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICB0ZXJtICBtYXRjaCB0ZXh0Q29udGVudCB0byB0aGlzIHRlcm1cclxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IHNob3cgIG9yIGhpZGUgZWxlbWVudHNcclxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIGZpbHRlcmVkIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZmlsdGVyID0gZmlsdGVyO1xyXG5cclxuICAgIGluc3RhbmNlRG9tW2Zvcm1JRF0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlRG9tW2Zvcm1JRF07XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBGb3JtIEJ1aWxkZXIgZXZlbnRzXHJcbiAqIEByZXR1cm4ge09iamVjdH0gdmFyaW91cyBldmVudHMgdG8gYmUgdHJpZ2dlclxyXG4gKi9cclxuLy8gZnVuY3Rpb24gZmJFdmVudHMoKXtcclxuICBjb25zdCBldmVudHMgPSB7fTtcclxuXHJcbiAgZXZlbnRzLmxvYWRlZCA9IG5ldyBFdmVudCgnbG9hZGVkJyk7XHJcbiAgZXZlbnRzLnZpZXdEYXRhID0gbmV3IEV2ZW50KCd2aWV3RGF0YScpO1xyXG4gIGV2ZW50cy51c2VyRGVjbGluZWQgPSBuZXcgRXZlbnQoJ3VzZXJEZWNsaW5lZCcpO1xyXG4gIGV2ZW50cy5tb2RhbENsb3NlZCA9IG5ldyBFdmVudCgnbW9kYWxDbG9zZWQnKTtcclxuICBldmVudHMubW9kYWxPcGVuZWQgPSBuZXcgRXZlbnQoJ21vZGFsT3BlbmVkJyk7XHJcbiAgZXZlbnRzLmZvcm1TYXZlZCA9IG5ldyBFdmVudCgnZm9ybVNhdmVkJyk7XHJcbiAgZXZlbnRzLmZpZWxkQWRkZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkQWRkZWQnKTtcclxuICBldmVudHMuZmllbGRSZW1vdmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbW92ZWQnKTtcclxuICBldmVudHMuZmllbGRSZW5kZXJlZCA9IG5ldyBFdmVudCgnZmllbGRSZW5kZXJlZCcpO1xyXG5cclxuLy8gICByZXR1cm4gZXZlbnRzO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XHJcbiIsImltcG9ydCBEb20gZnJvbSAnLi9kb20nO1xyXG5pbXBvcnQge1xyXG4gIERhdGEsXHJcbiAgYXZhaWxhYmxlZmllbGRzIGFzIGFGaWVsZHNcclxufSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgbWkxOG4gZnJvbSAnbWkxOG4nO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgSGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQge2RlZmF1bHRPcHRpb25zLCBkZWZhdWx0STE4biwgY29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5yZXF1aXJlKCcuL3BvbHlmaWxscy5qcycpLmRlZmF1bHQ7XHJcblxyXG5sZXQgaW5zdGFuY2VUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG5jb25zdCBGb3JtQnVpbGRlciA9IGZ1bmN0aW9uKG9wdHMsIGVsZW1lbnQpIHtcclxuICBjb25zdCBmb3JtQnVpbGRlciA9IHRoaXM7XHJcbiAgY29uc3QgaTE4biA9IG1pMThuLmN1cnJlbnQ7XHJcbiAgY29uc3QgZm9ybUlEID0gJ2ZybWItJyArIGluc3RhbmNlVGltZSsrO1xyXG4gIGNvbnN0IGRhdGEgPSBuZXcgRGF0YShmb3JtSUQpO1xyXG4gIGNvbnN0IGQgPSBuZXcgRG9tKGZvcm1JRCk7XHJcbiAgY29uc3QgaGVscGVycyA9IG5ldyBIZWxwZXJzKGZvcm1JRCk7XHJcbiAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcclxuXHJcbiAgY29uc3Qgb3JpZ2luYWxPcHRzID0gb3B0cztcclxuXHJcbiAgb3B0cyA9IGhlbHBlcnMucHJvY2Vzc09wdGlvbnMob3B0cyk7XHJcblxyXG4gIGNvbnN0IHN1YnR5cGVzID0gY29uZmlnLnN1YnR5cGVzID0gaGVscGVycy5wcm9jZXNzU3VidHlwZXMob3B0cy5zdWJ0eXBlcyk7XHJcbiAgaGVscGVycy5lZGl0b3JVSShmb3JtSUQpO1xyXG5cclxuICBsZXQgJHN0YWdlID0gJChkLnN0YWdlKTtcclxuXHJcbiAgZGF0YS5sYXlvdXQgPSBoZWxwZXJzLmVkaXRvckxheW91dChvcHRzLmNvbnRyb2xQb3NpdGlvbik7XHJcbiAgZGF0YS5mb3JtSUQgPSBmb3JtSUQ7XHJcbiAgZGF0YS5sYXN0SUQgPSBgJHtkYXRhLmZvcm1JRH0tZmxkLTFgO1xyXG5cclxuICBsZXQgZnJtYkZpZWxkcyA9IGhlbHBlcnMub3JkZXJGaWVsZHMob3B0cy5maWVsZHMpO1xyXG5cclxuICBpZiAob3B0cy5kaXNhYmxlRmllbGRzKSB7XHJcbiAgICAvLyByZW1vdmUgZGlzYWJsZWRGaWVsZHNcclxuICAgIGZybWJGaWVsZHMgPSBmcm1iRmllbGRzLmZpbHRlcihmdW5jdGlvbihmaWVsZCkge1xyXG4gICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkoZmllbGQuYXR0cnMudHlwZSwgb3B0cy5kaXNhYmxlRmllbGRzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xyXG4gICAgZC5jb250cm9scy5jbGFzc0xpc3QuYWRkKCdzb3J0LWVuYWJsZWQnKTtcclxuICB9XHJcblxyXG4gIGxldCAkY2JVTCA9ICQoZC5jb250cm9scyk7XHJcblxyXG4gIC8vIExvb3AgdGhyb3VnaCBmbXJiRmllbGRzXHJcbiAgdXRpbHMuZm9yRWFjaChmcm1iRmllbGRzLCAoaSkgPT4ge1xyXG4gICAgbGV0IHthdHRycywgaWNvbiwgLi4uZmllbGR9ID0gZnJtYkZpZWxkc1tpXTtcclxuICAgIGxldCBjb250cm9sTGFiZWwgPSBmaWVsZC5sYWJlbDtcclxuICAgIGxldCBpY29uQ2xhc3NOYW1lID0gIWljb24gPyBgaWNvbi0ke2F0dHJzLm5hbWUgfHwgYXR0cnMudHlwZX1gIDogJyc7XHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICBjb250cm9sTGFiZWwgPSBgPHNwYW4gY2xhc3M9XCJjb250cm9sLWljb25cIj4ke2ljb259PC9zcGFuPiR7ZmllbGQubGFiZWx9YDtcclxuICAgIH1cclxuICAgIGxldCBuZXdGaWVsZENvbnRyb2wgPSBtKCdsaScsXHJcbiAgICAgIG0oJ3NwYW4nLCBjb250cm9sTGFiZWwpLFxyXG4gICAgICB7Y2xhc3NOYW1lOiBgJHtpY29uQ2xhc3NOYW1lfSBpbnB1dC1jb250cm9sIGlucHV0LWNvbnRyb2wtJHtpfWB9XHJcbiAgICApO1xyXG5cclxuICAgIGFGaWVsZHNbYXR0cnMudHlwZV0gPSBmcm1iRmllbGRzW2ldO1xyXG4gICAgbmV3RmllbGRDb250cm9sLmRhdGFzZXQudHlwZSA9IGF0dHJzLnR5cGU7XHJcbiAgICBkLmNvbnRyb2xzLmFwcGVuZENoaWxkKG5ld0ZpZWxkQ29udHJvbCk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChvcHRzLmlucHV0U2V0cy5sZW5ndGgpIHtcclxuICAgICQoJzxsaS8+JywgeydjbGFzcyc6ICdmYi1zZXBhcmF0b3InfSkuaHRtbCgnPGhyPicpLmFwcGVuZFRvKCRjYlVMKTtcclxuICAgIG9wdHMuaW5wdXRTZXRzLmZvckVhY2goKHNldCwgaSkgPT4ge1xyXG4gICAgICBzZXQubmFtZSA9IHNldC5uYW1lIHx8IHV0aWxzLm1ha2VDbGFzc05hbWUoc2V0LmxhYmVsKTtcclxuICAgICAgbGV0IGlucHV0U2V0ID0gbSgnbGknLCBzZXQubGFiZWwsIHtcclxuICAgICAgICBjbGFzc05hbWU6IGBpbnB1dC1zZXQtY29udHJvbCBpbnB1dC1zZXQtJHtpfWAsXHJcbiAgICAgICAgdHlwZTogc2V0Lm5hbWVcclxuICAgICAgfSk7XHJcbiAgICAgICQoaW5wdXRTZXQpLmFwcGVuZFRvKCRjYlVMKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gU29ydGFibGUgZmllbGRzXHJcbiAgJHN0YWdlLnNvcnRhYmxlKHtcclxuICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgb3BhY2l0eTogMC45LFxyXG4gICAgcmV2ZXJ0OiAxNTAsXHJcbiAgICBiZWZvcmVTdG9wOiAoZXZ0LCB1aSkgPT4gaGVscGVycy5iZWZvcmVTdG9wLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXHJcbiAgICBzdGFydDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RhcnRNb3ZpbmcuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcclxuICAgIHN0b3A6IChldnQsIHVpKSA9PiBoZWxwZXJzLnN0b3BNb3ZpbmcuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcclxuICAgIGNhbmNlbDogJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhLCAuZGlzYWJsZWQtZmllbGQsIC5mb3JtLWVsZW1lbnRzLCAuYnRuLCBidXR0b24nLFxyXG4gICAgcGxhY2Vob2xkZXI6ICdmcm1iLXBsYWNlaG9sZGVyJyxcclxuICB9KTtcclxuXHJcbiAgLy8gQ29udHJvbEJveCB3aXRoIGRpZmZlcmVudCBmaWVsZHNcclxuICAkY2JVTC5zb3J0YWJsZSh7XHJcbiAgICBoZWxwZXI6ICdjbG9uZScsXHJcbiAgICBvcGFjaXR5OiAwLjksXHJcbiAgICBjb25uZWN0V2l0aDogJHN0YWdlLFxyXG4gICAgY2FuY2VsOiAnLmZiLXNlcGFyYXRvcicsXHJcbiAgICBjdXJzb3I6ICdtb3ZlJyxcclxuICAgIHNjcm9sbDogZmFsc2UsXHJcbiAgICBwbGFjZWhvbGRlcjogJ3VpLXN0YXRlLWhpZ2hsaWdodCcsXHJcbiAgICBzdGFydDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RhcnRNb3ZpbmcuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcclxuICAgIHN0b3A6IChldnQsIHVpKSA9PiBoZWxwZXJzLnN0b3BNb3ZpbmcuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcclxuICAgIHJldmVydDogMTUwLFxyXG4gICAgYmVmb3JlU3RvcDogKGV2dCwgdWkpID0+IGhlbHBlcnMuYmVmb3JlU3RvcC5jYWxsKGhlbHBlcnMsIGV2dCwgdWkpLFxyXG4gICAgZGlzdGFuY2U6IDMsXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICBpZiAoaGVscGVycy5kb0NhbmNlbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHVpLml0ZW0ucGFyZW50KClbMF0gPT09IGQuc3RhZ2UpIHtcclxuICAgICAgICBoZWxwZXJzLmRvQ2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICBwcm9jZXNzQ29udHJvbCh1aS5pdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoZWxwZXJzLnNldEZpZWxkT3JkZXIoJGNiVUwpO1xyXG4gICAgICAgIGhlbHBlcnMuZG9DYW5jZWwgPSAhb3B0cy5zb3J0YWJsZUNvbnRyb2xzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGxldCBwcm9jZXNzQ29udHJvbCA9IGNvbnRyb2wgPT4ge1xyXG4gICAgaWYgKGNvbnRyb2xbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1zZXQtY29udHJvbCcpKSB7XHJcbiAgICAgIGxldCBpbnB1dFNldHMgPSBbXTtcclxuICAgICAgbGV0IGlucHV0U2V0ID0gb3B0cy5pbnB1dFNldHMuZmluZChzZXQgPT5cclxuICAgICAgICAoc2V0Lm5hbWUgPT09IGNvbnRyb2xbMF0uZ2V0QXR0cmlidXRlKCd0eXBlJykpKTtcclxuICAgICAgaWYgKGlucHV0U2V0ICYmIGlucHV0U2V0LnNob3dIZWFkZXIpIHtcclxuICAgICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICAgdHlwZTogJ2hlYWRlcicsXHJcbiAgICAgICAgICBzdWJ0eXBlOiAnaDInLFxyXG4gICAgICAgICAgaWQ6IGlucHV0U2V0Lm5hbWUsXHJcbiAgICAgICAgICBsYWJlbDogaW5wdXRTZXQubGFiZWxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlucHV0U2V0cy5wdXNoKGhlYWRlcik7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRTZXRzLnB1c2goLi4uaW5wdXRTZXQuZmllbGRzKTtcclxuICAgICAgaW5wdXRTZXRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIHByZXBGaWVsZFZhcnMoZmllbGQsIHRydWUpO1xyXG4gICAgICAgIGlmIChoZWxwZXJzLnN0b3BJbmRleCB8fCBoZWxwZXJzLnN0b3BJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgaGVscGVycy5zdG9wSW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJlcEZpZWxkVmFycyhjb250cm9sLCB0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBkLmVkaXRvcldyYXAgPSBtKCdkaXYnLCBudWxsLCB7XHJcbiAgICBpZDogYCR7ZGF0YS5mb3JtSUR9LWZvcm0td3JhcGAsXHJcbiAgICBjbGFzc05hbWU6ICdmb3JtLXdyYXAgZm9ybS1idWlsZGVyJyArIHV0aWxzLm1vYmlsZUNsYXNzKClcclxuICB9KTtcclxuXHJcbiAgbGV0ICRlZGl0b3JXcmFwID0gJChkLmVkaXRvcldyYXApO1xyXG5cclxuICBsZXQgY2JXcmFwID0gbSgnZGl2JywgZC5jb250cm9scywge1xyXG4gICAgaWQ6IGAke2RhdGEuZm9ybUlEfS1jYi13cmFwYCxcclxuICAgIGNsYXNzTmFtZTogJ2NiLXdyYXAgJyArIGRhdGEubGF5b3V0LmNvbnRyb2xzXHJcbiAgfSk7XHJcblxyXG4gIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XHJcbiAgICBjb25zdCBidXR0b25zID0gb3B0cy5hY3Rpb25CdXR0b25zLm1hcChidG5EYXRhID0+IHtcclxuICAgICAgaWYgKGJ0bkRhdGEuaWQgJiYgb3B0cy5kaXNhYmxlZEFjdGlvbkJ1dHRvbnMuaW5kZXhPZihidG5EYXRhLmlkKSA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gaGVscGVycy5wcm9jZXNzQWN0aW9uQnV0dG9ucyhidG5EYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmb3JtQWN0aW9ucyA9IGQuZm9ybUFjdGlvbnMgPSBtKCdkaXYnLCBidXR0b25zLCB7XHJcbiAgICAgIGNsYXNzTmFtZTogJ2Zvcm0tYWN0aW9ucyBidG4tZ3JvdXAnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjYldyYXAuYXBwZW5kQ2hpbGQoZm9ybUFjdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHN0YWdlV3JhcCA9IG0oJ2RpdicsIFtkLnN0YWdlLCBjYldyYXBdLCB7XHJcbiAgICBpZDogYCR7ZGF0YS5mb3JtSUR9LXN0YWdlLXdyYXBgLFxyXG4gICAgY2xhc3NOYW1lOiAnc3RhZ2Utd3JhcCAnICsgZGF0YS5sYXlvdXQuc3RhZ2VcclxuICB9KTtcclxuXHJcbiAgJGVkaXRvcldyYXAuYXBwZW5kKHN0YWdlV3JhcCwgY2JXcmFwKTtcclxuXHJcbiAgaWYgKGVsZW1lbnQudHlwZSAhPT0gJ3RleHRhcmVhJykge1xyXG4gICAgJChlbGVtZW50KS5hcHBlbmQoJGVkaXRvcldyYXApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKGVsZW1lbnQpLnJlcGxhY2VXaXRoKCRlZGl0b3JXcmFwKTtcclxuICB9XHJcblxyXG4gIGxldCBzYXZlQW5kVXBkYXRlID0gdXRpbHMuZGVib3VuY2UoZXZ0ID0+IHtcclxuICAgIGlmIChldnQpIHtcclxuICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5dXAnICYmIGV2dC50YXJnZXQubmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCAkZmllbGQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XHJcbiAgICAgIGhlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xyXG4gICAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gU2F2ZSBmaWVsZCBvbiBjaGFuZ2VcclxuICAkc3RhZ2Uub24oJ2NoYW5nZSBibHVyIGtleXVwJywgJy5mb3JtLWVsZW1lbnRzIGlucHV0LCAuZm9ybS1lbGVtZW50cyBzZWxlY3QsIC5mb3JtLWVsZW1lbnRzIHRleHRhcmVhJywgc2F2ZUFuZFVwZGF0ZSk7XHJcblxyXG4gICQoJ2xpJywgZC5jb250cm9scykuY2xpY2soZXZ0ID0+IHtcclxuICAgIGxldCAkY29udHJvbCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnbGknKTtcclxuICAgIGhlbHBlcnMuc3RvcEluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgcHJvY2Vzc0NvbnRyb2woJGNvbnRyb2wpO1xyXG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFkZCBhcHBlbmQgYW5kIHByZXBlbmQgb3B0aW9ucyBpZiBuZWNlc3NhcnlcclxuICBsZXQgbm9uRWRpdGFibGVGaWVsZHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsQXJyYXkgPSBbXTtcclxuICAgIGNvbnN0IGRpc2FibGVkRmllbGQgPSB0eXBlID0+XHJcbiAgICB1dGlscy5tYXJrdXAoJ2xpJywgb3B0c1t0eXBlXSwge1xyXG4gICAgICBjbGFzc05hbWU6IGBkaXNhYmxlZC1maWVsZCBmb3JtLSR7dHlwZX1gXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAob3B0cy5wcmVwZW5kICYmICEkKCcuZGlzYWJsZWQtZmllbGQuZm9ybS1wcmVwZW5kJywgZC5zdGFnZSkubGVuZ3RoKSB7XHJcbiAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICRzdGFnZS5wcmVwZW5kKGRpc2FibGVkRmllbGQoJ3ByZXBlbmQnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdHMuYXBwZW5kICYmICEkKCcuZGlzYWJsZWQtZmllbGQuZm9ybS0uYXBwZW5kJywgZC5zdGFnZSkubGVuZ3RoKSB7XHJcbiAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICRzdGFnZS5hcHBlbmQoZGlzYWJsZWRGaWVsZCgnYXBwZW5kJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGhlbHBlcnMuZGlzYWJsZWRUVChkLnN0YWdlKTtcclxuICAgIHJldHVybiBjYW5jZWxBcnJheS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHByZXBGaWVsZFZhcnMgPSBmdW5jdGlvbigkZmllbGQsIGlzTmV3ID0gZmFsc2UpIHtcclxuICAgIGxldCBmaWVsZCA9IHt9O1xyXG4gICAgaWYgKCRmaWVsZCBpbnN0YW5jZW9mIGpRdWVyeSkge1xyXG4gICAgICBsZXQge2F0dHJzLCBsYWJlbH0gPSBhRmllbGRzWyRmaWVsZFswXS5kYXRhc2V0LnR5cGVdO1xyXG4gICAgICBpZiAoYUZpZWxkc1skZmllbGRbMF0uZGF0YXNldC50eXBlXSkge1xyXG4gICAgICAgIGZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMpO1xyXG4gICAgICAgIGZpZWxkLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgIH0gZWxzZSB7IC8vIGlzIGRhdGFUeXBlIFhNTFxyXG4gICAgICAgIGxldCBhdHRycyA9ICRmaWVsZFswXS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGlmICghaXNOZXcpIHtcclxuICAgICAgICAgIGZpZWxkLnZhbHVlcyA9ICRmaWVsZC5jaGlsZHJlbigpLm1hcCgoaW5kZXgsIGVsZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJChlbGVtKS50ZXh0KCksXHJcbiAgICAgICAgICAgICAgdmFsdWU6ICQoZWxlbSkuYXR0cigndmFsdWUnKSxcclxuICAgICAgICAgICAgICBzZWxlY3RlZDogQm9vbGVhbigkKGVsZW0pLmF0dHIoJ3NlbGVjdGVkJykpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgZmllbGRbYXR0cnNbaV0ubmFtZV0gPSBhdHRyc1tpXS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgJGZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZpZWxkLm5hbWUpIHtcclxuICAgICAgZmllbGQubmFtZSA9IHV0aWxzLm5hbWVBdHRyKGZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOZXcgJiYgdXRpbHMuaW5BcnJheShmaWVsZC50eXBlLFxyXG4gICAgICBbJ3RleHQnLFxyXG4gICAgICAgJ251bWJlcicsXHJcbiAgICAgICAnZmlsZScsXHJcbiAgICAgICAnZGF0ZScsXHJcbiAgICAgICAnc2VsZWN0JyxcclxuICAgICAgICd0ZXh0YXJlYScsXHJcbiAgICAgICAnYXV0b2NvbXBsZXRlJ10pKSB7XHJcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzTmFtZSB8fCAnZm9ybS1jb250cm9sJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZC5jbGFzc05hbWUpO1xyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIGZpZWxkLnN0eWxlID0gbWF0Y2hbMV07XHJcbiAgICB9XHJcblxyXG4gICAgdXRpbHMuZXNjYXBlQXR0cnMoZmllbGQpO1xyXG5cclxuICAgIGFwcGVuZE5ld0ZpZWxkKGZpZWxkLCBpc05ldyk7XHJcblxyXG4gICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmZpZWxkQWRkZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xyXG4gIH07XHJcblxyXG4gIC8vIFBhcnNlIHNhdmVkIFhNTCB0ZW1wbGF0ZSBkYXRhXHJcbiAgbGV0IGxvYWRGaWVsZHMgPSBmdW5jdGlvbihmb3JtRGF0YSkge1xyXG4gICAgZm9ybURhdGEgPSBoZWxwZXJzLmdldERhdGEoZm9ybURhdGEpO1xyXG4gICAgaWYgKGZvcm1EYXRhICYmIGZvcm1EYXRhLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZm9ybURhdGFbaV0pO1xyXG4gICAgICAgIHByZXBGaWVsZFZhcnMoZmllbGREYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcclxuICAgIH0gZWxzZSBpZiAob3B0cy5kZWZhdWx0RmllbGRzICYmIG9wdHMuZGVmYXVsdEZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgLy8gTG9hZCBkZWZhdWx0IGZpZWxkcyBpZiBub25lIGFyZSBzZXRcclxuICAgICAgb3B0cy5kZWZhdWx0RmllbGRzLmZvckVhY2goZmllbGQgPT4gcHJlcEZpZWxkVmFycyhmaWVsZCkpO1xyXG4gICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcclxuICAgIH0gZWxzZSBpZiAoIW9wdHMucHJlcGVuZCAmJiAhb3B0cy5hcHBlbmQpIHtcclxuICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XHJcbiAgICAgIHN0YWdlV3JhcC5kYXRhc2V0LmNvbnRlbnQgPSBpMThuLmdldFN0YXJ0ZWQ7XHJcbiAgICB9XHJcbiAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcclxuXHJcbiAgICBpZiAobm9uRWRpdGFibGVGaWVsZHMoKSkge1xyXG4gICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgZGF0YSBmb3IgZmllbGQgd2l0aCBvcHRpb25zIFtzZWxlY3QsIGNoZWNrYm94LWdyb3VwLCByYWRpby1ncm91cF1cclxuICAgKlxyXG4gICAqIEB0b2RvICAgcmVmYWN0b3IgdGhpcyBuYXN0eSB+Y3JhcH4gY29kZSwgaXRzIGFjdHVhbGx5IHBhaW5mdWwgdG8gbG9vayBhdFxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBmaWVsZCBvcHRpb25zIG1hcmt1cFxyXG4gICAqL1xyXG4gIGxldCBmaWVsZE9wdGlvbnMgPSBmdW5jdGlvbihmaWVsZERhdGEpIHtcclxuICAgIGxldCBvcHRpb25BY3Rpb25zID0gW1xyXG4gICAgICAgIHV0aWxzLm1hcmt1cCgnYScsIGkxOG4uYWRkT3B0aW9uLCB7Y2xhc3NOYW1lOiAnYWRkIGFkZC1vcHQnfSlcclxuICAgICAgXTtcclxuICAgIGxldCBmaWVsZE9wdGlvbnMgPSBbXHJcbiAgICAgIGA8bGFiZWwgY2xhc3M9XCJmYWxzZS1sYWJlbFwiPiR7aTE4bi5zZWxlY3RPcHRpb25zfTwvbGFiZWw+YFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGlzTXVsdGlwbGUgPSBmaWVsZERhdGEubXVsdGlwbGUgfHwgKGZpZWxkRGF0YS50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnKTtcclxuICAgIGNvbnN0IG9wdGlvbkRhdGFUZW1wbGF0ZSA9IGxhYmVsID0+IHtcclxuICAgICAgbGV0IG9wdGlvbkRhdGEgPSB7XHJcbiAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgIHZhbHVlOiB1dGlscy5oeXBoZW5DYXNlKGxhYmVsKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKGZpZWxkRGF0YS50eXBlICE9PSAnYXV0b2NvbXBsZXRlJykge1xyXG4gICAgICAgIG9wdGlvbkRhdGEuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG9wdGlvbkRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghZmllbGREYXRhLnZhbHVlcyB8fCAhZmllbGREYXRhLnZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgbGV0IGRlZmF1bHRPcHRDb3VudCA9IHV0aWxzLmluQXJyYXkoZmllbGREYXRhLnR5cGUsIFsnY2hlY2tib3gtZ3JvdXAnLCAnY2hlY2tib3gnXSkgPyBbMV0gOiBbMSwgMiwgM107XHJcbiAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBkZWZhdWx0T3B0Q291bnQubWFwKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGxhYmVsID0gYCR7aTE4bi5vcHRpb259ICR7aW5kZXh9YDtcclxuICAgICAgICByZXR1cm4gb3B0aW9uRGF0YVRlbXBsYXRlKGxhYmVsKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgbGV0IGZpcnN0T3B0aW9uID0gZmllbGREYXRhLnZhbHVlc1swXTtcclxuICAgICAgaWYgKGZpcnN0T3B0aW9uLmhhc093blByb3BlcnR5KCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgZmlyc3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBlbnN1cmUgb3B0aW9uIGRhdGEgaXMgaGFzIGFsbCByZXF1aXJlZCBrZXlzXHJcbiAgICAgIGZpZWxkRGF0YS52YWx1ZXMuZm9yRWFjaChvcHRpb24gPT4gT2JqZWN0LmFzc2lnbih7fSwge3NlbGVjdGVkOiBmYWxzZX0sIG9wdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8ZGl2IGNsYXNzPVwic29ydGFibGUtb3B0aW9ucy13cmFwXCI+Jyk7XHJcblxyXG4gICAgZmllbGRPcHRpb25zLnB1c2goJzxvbCBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnNcIj4nKTtcclxuICAgIHV0aWxzLmZvckVhY2goZmllbGREYXRhLnZhbHVlcywgaSA9PiB7XHJcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKHNlbGVjdEZpZWxkT3B0aW9ucyhmaWVsZERhdGEubmFtZSwgZmllbGREYXRhLnZhbHVlc1tpXSwgaXNNdWx0aXBsZSkpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9vbD4nKTtcclxuICAgIGZpZWxkT3B0aW9ucy5wdXNoKHV0aWxzLm1hcmt1cCgnZGl2Jywgb3B0aW9uQWN0aW9ucywge2NsYXNzTmFtZTogJ29wdGlvbi1hY3Rpb25zJ30pLm91dGVySFRNTCk7XHJcbiAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9kaXY+Jyk7XHJcblxyXG4gICAgcmV0dXJuIHV0aWxzLm1hcmt1cCgnZGl2JywgZmllbGRPcHRpb25zLmpvaW4oJycpLCB7Y2xhc3NOYW1lOiAnZm9ybS1ncm91cCBmaWVsZC1vcHRpb25zJ30pLm91dGVySFRNTDtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWZhdWx0RmllbGRBdHRycyA9IHR5cGUgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdEF0dHJzID0gW1xyXG4gICAgICAncmVxdWlyZWQnLFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgICAnY2xhc3NOYW1lJyxcclxuICAgICAgJ25hbWUnLFxyXG4gICAgICAnYWNjZXNzJyxcclxuICAgICAgJ3ZhbHVlJ1xyXG4gICAgXTtcclxuICAgIGxldCBub1ZhbEZpZWxkcyA9IFsnaGVhZGVyJywgJ3BhcmFncmFwaCcsICdmaWxlJywgJ2F1dG9jb21wbGV0ZSddLmNvbmNhdChkLm9wdGlvbkZpZWxkcyk7XHJcbiAgICBsZXQgdmFsdWVGaWVsZCA9ICF1dGlscy5pbkFycmF5KHR5cGUsIG5vVmFsRmllbGRzKTtcclxuXHJcbiAgICBjb25zdCB0eXBlQXR0cnNNYXAgPSB7XHJcbiAgICAgIGF1dG9jb21wbGV0ZTogZGVmYXVsdEF0dHJzLmNvbmNhdChbXHJcbiAgICAgICAgJ29wdGlvbnMnLFxyXG4gICAgICBdKSxcclxuICAgICAgYnV0dG9uOiBbXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnc3VidHlwZScsXHJcbiAgICAgICAgJ3N0eWxlJyxcclxuICAgICAgICAnY2xhc3NOYW1lJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAnYWNjZXNzJyxcclxuICAgICAgXSxcclxuICAgICAgY2hlY2tib3g6IFtcclxuICAgICAgICAncmVxdWlyZWQnLFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAndG9nZ2xlJyxcclxuICAgICAgICAnaW5saW5lJyxcclxuICAgICAgICAnY2xhc3NOYW1lJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ2FjY2VzcycsXHJcbiAgICAgICAgJ290aGVyJyxcclxuICAgICAgICAnb3B0aW9ucycsXHJcbiAgICAgIF0sXHJcbiAgICAgIHRleHQ6IGRlZmF1bHRBdHRycy5jb25jYXQoW1xyXG4gICAgICAgICdzdWJ0eXBlJyxcclxuICAgICAgICAnbWF4bGVuZ3RoJyxcclxuICAgICAgXSksXHJcbiAgICAgIGRhdGU6IGRlZmF1bHRBdHRycyxcclxuICAgICAgZmlsZTogZGVmYXVsdEF0dHJzLmNvbmNhdChbXHJcbiAgICAgICAgJ211bHRpcGxlJ1xyXG4gICAgICBdKSxcclxuICAgICAgaGVhZGVyOiBbXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnc3VidHlwZScsXHJcbiAgICAgICAgJ2NsYXNzTmFtZScsXHJcbiAgICAgICAgJ2FjY2VzcycsXHJcbiAgICAgIF0sXHJcbiAgICAgIGhpZGRlbjogW1xyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAndmFsdWUnLFxyXG4gICAgICAgICdhY2Nlc3MnLFxyXG4gICAgICBdLFxyXG4gICAgICBwYXJhZ3JhcGg6IFtcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICdzdWJ0eXBlJyxcclxuICAgICAgICAnY2xhc3NOYW1lJyxcclxuICAgICAgICAnYWNjZXNzJyxcclxuICAgICAgXSxcclxuICAgICAgbnVtYmVyOiBkZWZhdWx0QXR0cnMuY29uY2F0KFtcclxuICAgICAgICAnbWluJyxcclxuICAgICAgICAnbWF4JyxcclxuICAgICAgICAnc3RlcCcsXHJcbiAgICAgIF0pLFxyXG4gICAgICBzZWxlY3Q6IGRlZmF1bHRBdHRycy5jb25jYXQoW1xyXG4gICAgICAgICdtdWx0aXBsZScsXHJcbiAgICAgICAgJ29wdGlvbnMnLFxyXG4gICAgICBdKSxcclxuICAgICAgdGV4dGFyZWE6IGRlZmF1bHRBdHRycy5jb25jYXQoW1xyXG4gICAgICAgICdzdWJ0eXBlJyxcclxuICAgICAgICAnbWF4bGVuZ3RoJyxcclxuICAgICAgICAncm93cycsXHJcbiAgICAgIF0pLFxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdHlwZUF0dHJzTWFwWydjaGVja2JveC1ncm91cCddID0gdHlwZUF0dHJzTWFwLmNoZWNrYm94O1xyXG4gICAgdHlwZUF0dHJzTWFwWydyYWRpby1ncm91cCddID0gdHlwZUF0dHJzTWFwLmNoZWNrYm94O1xyXG5cclxuICAgIGxldCB0eXBlQXR0cnMgPSB0eXBlQXR0cnNNYXBbdHlwZV07XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdyYWRpby1ncm91cCcpIHtcclxuICAgICAgdXRpbHMucmVtb3ZlKCd0b2dnbGUnLCB0eXBlQXR0cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHAgVGV4dCAvIERlc2NyaXB0aW9uIEZpZWxkXHJcbiAgICBpZiAodXRpbHMuaW5BcnJheSh0eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnYnV0dG9uJ10pKSB7XHJcbiAgICAgIHV0aWxzLnJlbW92ZSgnZGVzY3JpcHRpb24nLCB0eXBlQXR0cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsdWVGaWVsZCkge1xyXG4gICAgICB1dGlscy5yZW1vdmUoJ3ZhbHVlJywgdHlwZUF0dHJzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHlwZUF0dHJzIHx8IGRlZmF1bHRBdHRycztcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBCdWlsZCB0aGUgZWRpdGFibGUgcHJvcGVydGllcyBmb3IgdGhlIGZpZWxkXHJcbiAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZXMgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGFkdmFuY2VkIGZpZWxkc1xyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgIG1hcmt1cCBmb3IgYWR2YW5jZWQgZmllbGRzXHJcbiAgICovXHJcbiAgbGV0IGFkdkZpZWxkcyA9IHZhbHVlcyA9PiB7XHJcbiAgICBsZXQgYWR2RmllbGRzID0gW107XHJcbiAgICBsZXQgZmllbGRBdHRycyA9IGRlZmF1bHRGaWVsZEF0dHJzKHZhbHVlcy50eXBlKTtcclxuICAgIGNvbnN0IGFkdkZpZWxkTWFwID0ge1xyXG4gICAgICByZXF1aXJlZDogKCkgPT4gcmVxdWlyZWRGaWVsZCh2YWx1ZXMpLFxyXG4gICAgICB0b2dnbGU6ICgpID0+IGJvb2xBdHRyaWJ1dGUoJ3RvZ2dsZScsIHZhbHVlcywge2ZpcnN0OiBpMThuLnRvZ2dsZX0pLFxyXG4gICAgICBpbmxpbmU6ICgpID0+IHtcclxuICAgICAgICBsZXQgbGFiZWxzID0ge1xyXG4gICAgICAgICAgZmlyc3Q6IGkxOG4uaW5saW5lLFxyXG4gICAgICAgICAgc2Vjb25kOiBtaTE4bi5nZXQoJ2lubGluZURlc2MnLCB2YWx1ZXMudHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJykpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJvb2xBdHRyaWJ1dGUoJ2lubGluZScsIHZhbHVlcywgbGFiZWxzKTtcclxuICAgICAgfSxcclxuICAgICAgbGFiZWw6ICgpID0+IHRleHRBdHRyaWJ1dGUoJ2xhYmVsJywgdmFsdWVzKSxcclxuICAgICAgZGVzY3JpcHRpb246ICgpID0+IHRleHRBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJywgdmFsdWVzKSxcclxuICAgICAgc3VidHlwZTogKCkgPT4gc2VsZWN0QXR0cmlidXRlKCdzdWJ0eXBlJywgdmFsdWVzLCBzdWJ0eXBlc1t2YWx1ZXMudHlwZV0pLFxyXG4gICAgICBzdHlsZTogKCkgPT4gYnRuU3R5bGVzKHZhbHVlcy5zdHlsZSksXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAoKSA9PiB0ZXh0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHZhbHVlcyksXHJcbiAgICAgIHJvd3M6ICgpID0+IG51bWJlckF0dHJpYnV0ZSgncm93cycsIHZhbHVlcyksXHJcbiAgICAgIGNsYXNzTmFtZTogKCkgPT4gdGV4dEF0dHJpYnV0ZSgnY2xhc3NOYW1lJywgdmFsdWVzKSxcclxuICAgICAgbmFtZTogKCkgPT4gdGV4dEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlcyksXHJcbiAgICAgIHZhbHVlOiAoKSA9PiB0ZXh0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlcyksXHJcbiAgICAgIG1heGxlbmd0aDogKCkgPT4gbnVtYmVyQXR0cmlidXRlKCdtYXhsZW5ndGgnLCB2YWx1ZXMpLFxyXG4gICAgICBhY2Nlc3M6ICgpID0+IHtcclxuICAgICAgICBsZXQgcm9sZXNEaXNwbGF5ID0gdmFsdWVzLnJvbGUgIT09IHVuZGVmaW5lZCA/ICdzdHlsZT1cImRpc3BsYXk6YmxvY2tcIicgOiAnJztcclxuICAgICAgICBsZXQgYXZhaWxhYmxlUm9sZXMgPSBbXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImF2YWlsYWJsZS1yb2xlc1wiICR7cm9sZXNEaXNwbGF5fT5gXHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGtleSBpbiBvcHRzLnJvbGVzKSB7XHJcbiAgICAgICAgICBpZiAob3B0cy5yb2xlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGVja2VkID0gdXRpbHMuaW5BcnJheShrZXksIHJvbGVzKSA/ICdjaGVja2VkJyA6ICcnO1xyXG4gICAgICAgICAgICBsZXQgcm9sZUlkID0gYGZsZC0ke2RhdGEubGFzdElEfS1yb2xlcy0ke2tleX1gO1xyXG4gICAgICAgICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJvbGVzW11cIiB2YWx1ZT1cIiR7a2V5fVwiIGlkPVwiJHtyb2xlSWR9XCIgJHtjaGVja2VkfSBjbGFzcz1cInJvbGVzLWZpZWxkXCIgLz4gPGxhYmVsIGZvcj1cIiR7cm9sZUlkfVwiPiR7b3B0cy5yb2xlc1trZXldfTwvbGFiZWw+PGJyLz5gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXZhaWxhYmxlUm9sZXMucHVzaCgnPC9kaXY+Jyk7XHJcbiAgICAgICAgbGV0IGFjY2Vzc0xhYmVscyA9IHtmaXJzdDogaTE4bi5yb2xlcywgc2Vjb25kOiBpMThuLmxpbWl0Um9sZSwgY29udGVudDogYXZhaWxhYmxlUm9sZXMuam9pbignJyl9O1xyXG5cclxuICAgICAgICByZXR1cm4gYm9vbEF0dHJpYnV0ZSgnYWNjZXNzJywgdmFsdWVzLCBhY2Nlc3NMYWJlbHMpO1xyXG4gICAgICB9LFxyXG4gICAgICBvdGhlcjogKCkgPT4gYm9vbEF0dHJpYnV0ZSgnb3RoZXInLCB2YWx1ZXMsIHtmaXJzdDogaTE4bi5lbmFibGVPdGhlciwgc2Vjb25kOiBpMThuLmVuYWJsZU90aGVyTXNnfSksXHJcbiAgICAgIG9wdGlvbnM6ICgpID0+IGZpZWxkT3B0aW9ucyh2YWx1ZXMpXHJcbiAgICB9O1xyXG4gICAgbGV0IGtleTtcclxuICAgIGxldCByb2xlcyA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyB2YWx1ZXMucm9sZS5zcGxpdCgnLCcpIDogW107XHJcbiAgICBsZXQgbnVtQXR0cnMgPSBbJ21pbicsICdtYXgnLCAnc3RlcCddO1xyXG5cclxuICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgbnVtQXR0cnMuZm9yRWFjaChudW1BdHRyID0+IHtcclxuICAgICAgICBhZHZGaWVsZE1hcFtudW1BdHRyXSA9ICgpID0+IG51bWJlckF0dHJpYnV0ZShudW1BdHRyLCB2YWx1ZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICBhZHZGaWVsZE1hcFsnbXVsdGlwbGUnXSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbGFiZWxzID0ge1xyXG4gICAgICAgICAgZmlyc3Q6IGkxOG4ubXVsdGlwbGVGaWxlcyxcclxuICAgICAgICAgIHNlY29uZDogaTE4bi5hbGxvd011bHRpcGxlRmlsZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBib29sQXR0cmlidXRlKCdtdWx0aXBsZScsIHZhbHVlcywgbGFiZWxzKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgIGFkdkZpZWxkTWFwWydtdWx0aXBsZSddID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBib29sQXR0cmlidXRlKCdtdWx0aXBsZScsIHZhbHVlcywge2ZpcnN0OiAnICcsIHNlY29uZDogaTE4bi5zZWxlY3Rpb25zTWVzc2FnZX0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKGZpZWxkQXR0cnMpLmZvckVhY2goaW5kZXggPT4ge1xyXG4gICAgICBsZXQgYXR0ciA9IGZpZWxkQXR0cnNbaW5kZXhdO1xyXG4gICAgICBsZXQgdXNlRGVmYXVsdEF0dHIgPSBbdHJ1ZV07XHJcblxyXG4gICAgICBpZiAob3B0cy50eXBlVXNlckRpc2FibGVkQXR0cnNbdmFsdWVzLnR5cGVdKSB7XHJcbiAgICAgICAgbGV0IHR5cGVEaXNhYmxlZEF0dHJzID0gb3B0cy50eXBlVXNlckRpc2FibGVkQXR0cnNbdmFsdWVzLnR5cGVdO1xyXG4gICAgICAgIHVzZURlZmF1bHRBdHRyLnB1c2goIXV0aWxzLmluQXJyYXkoYXR0ciwgdHlwZURpc2FibGVkQXR0cnMpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0pIHtcclxuICAgICAgICBsZXQgdXNlckF0dHJzID0gT2JqZWN0LmtleXMob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSk7XHJcbiAgICAgICAgdXNlRGVmYXVsdEF0dHIucHVzaCghdXRpbHMuaW5BcnJheShhdHRyLCB1c2VyQXR0cnMpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkoYXR0ciwgb3B0cy5kaXNhYmxlZEF0dHJzKSkge1xyXG4gICAgICAgIHVzZURlZmF1bHRBdHRyLnB1c2goZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodXNlRGVmYXVsdEF0dHIuZXZlcnkodXNlID0+IHVzZSA9PT0gdHJ1ZSkpIHtcclxuICAgICAgICBhZHZGaWVsZHMucHVzaChhZHZGaWVsZE1hcFthdHRyXSgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwZW5kIGN1c3RvbSBhdHRyaWJ1dGVzIGFzIGRlZmluZWQgaW4gdHlwZVVzZXJBdHRycyBvcHRpb25cclxuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XHJcbiAgICAgIGFkdkZpZWxkcy5wdXNoKHByb2Nlc3NUeXBlVXNlckF0dHJzKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0sIHZhbHVlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhZHZGaWVsZHMuam9pbignJyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvY2Vzc2VzIHR5cGVVc2VyQXR0cnNcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHR5cGVVc2VyQXR0ciBvcHRpb25cclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlcyAgICAgICBmaWVsZCBhdHRyaWJ1dGVzXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgbWFya3VwIGZvciBjdXN0b20gdXNlciBhdHRyaWJ1dGVzXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc1R5cGVVc2VyQXR0cnModHlwZVVzZXJBdHRyLCB2YWx1ZXMpIHtcclxuICAgIGxldCBhZHZGaWVsZCA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiB0eXBlVXNlckF0dHIpIHtcclxuICAgICAgaWYgKHR5cGVVc2VyQXR0ci5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XHJcbiAgICAgICAgbGV0IG9yaWcgPSBpMThuW2F0dHJpYnV0ZV07XHJcbiAgICAgICAgbGV0IG9yaWdWYWx1ZSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlO1xyXG4gICAgICAgIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgfHwgJyc7XHJcblxyXG4gICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5sYWJlbCkge1xyXG4gICAgICAgICAgaTE4blthdHRyaWJ1dGVdID0gdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ub3B0aW9ucykge1xyXG4gICAgICAgICAgYWR2RmllbGQucHVzaChzZWxlY3RVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhZHZGaWVsZC5wdXNoKGlucHV0VXNlckF0dHJzKGF0dHJpYnV0ZSwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkxOG5bYXR0cmlidXRlXSA9IG9yaWc7XHJcbiAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSBvcmlnVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWR2RmllbGQuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZXh0IGlucHV0IHZhbHVlIGZvciBhdHRyaWJ1dGVcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIGFsc28ga25vd24gYXMgdmFsdWVzXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICBpbnB1dCBtYXJrdXBcclxuICAgKi9cclxuICBmdW5jdGlvbiBpbnB1dFVzZXJBdHRycyhuYW1lLCBhdHRycykge1xyXG4gICAgbGV0IHRleHRBdHRycyA9IHtcclxuICAgICAgICBpZDogbmFtZSArICctJyArIGRhdGEubGFzdElELFxyXG4gICAgICAgIHRpdGxlOiBhdHRycy5kZXNjcmlwdGlvbiB8fCBhdHRycy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICB0eXBlOiBhdHRycy50eXBlIHx8ICd0ZXh0JyxcclxuICAgICAgICBjbGFzc05hbWU6IFtgZmxkLSR7bmFtZX1gXVxyXG4gICAgICB9O1xyXG4gICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3RleHRBdHRycy5pZH1cIj4ke2kxOG5bbmFtZV19PC9sYWJlbD5gO1xyXG5cclxuICAgIGlmICghdXRpbHMuaW5BcnJheSh0ZXh0QXR0cnMudHlwZSwgWydjaGVja2JveCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xyXG4gICAgICB0ZXh0QXR0cnMuY2xhc3NOYW1lLnB1c2goJ2Zvcm0tY29udHJvbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRBdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB0ZXh0QXR0cnMpO1xyXG4gICAgbGV0IHRleHRJbnB1dCA9IGA8aW5wdXQgJHt1dGlscy5hdHRyU3RyaW5nKHRleHRBdHRycyl9PmA7XHJcbiAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHt0ZXh0SW5wdXR9PC9kaXY+YDtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGlucHV0IGZvciBtdWx0aXBsZSBjaG9pY2UgdXNlciBhdHRyaWJ1dGVzXHJcbiAgICogQHRvZG8gIHJlcGxhY2Ugd2l0aCBzZWxlY3RBdHRyXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgIHNlbGVjdCBtYXJrdXBcclxuICAgKi9cclxuICBmdW5jdGlvbiBzZWxlY3RVc2VyQXR0cnMobmFtZSwgb3B0aW9ucykge1xyXG4gICAgbGV0IG9wdGlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5tYXAodmFsID0+IHtcclxuICAgICAgbGV0IGF0dHJzID0ge3ZhbHVlOiB2YWx9O1xyXG4gICAgICBpZiAodmFsID09PSBvcHRpb25zLnZhbHVlKSB7XHJcbiAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4ke29wdGlvbnMub3B0aW9uc1t2YWxdfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuICAgIGxldCBzZWxlY3RBdHRycyA9IHtcclxuICAgICAgaWQ6IG5hbWUgKyAnLScgKyBkYXRhLmxhc3RJRCxcclxuICAgICAgdGl0bGU6IG9wdGlvbnMuZGVzY3JpcHRpb24gfHwgb3B0aW9ucy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIGNsYXNzTmFtZTogYGZsZC0ke25hbWV9IGZvcm0tY29udHJvbGBcclxuICAgIH07XHJcbiAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtpMThuW25hbWVdfTwvbGFiZWw+YDtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5maWx0ZXIocHJvcCA9PiB7XHJcbiAgICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShwcm9wLCBbJ3ZhbHVlJywgJ29wdGlvbnMnLCAnbGFiZWwnXSk7XHJcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uKGF0dHIpIHtcclxuICAgICAgc2VsZWN0QXR0cnNbYXR0cl0gPSBvcHRpb25zW2F0dHJdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7b3B0aXMuam9pbignJyl9PC9zZWxlY3Q+YDtcclxuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XHJcbiAgfVxyXG5cclxuICBsZXQgYm9vbEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlcywgbGFiZWxzKSB7XHJcbiAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW25hbWVdKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbGFiZWwgPSAodHh0KSA9PiB7XHJcbiAgICAgIHJldHVybiBgPGxhYmVsIGZvcj1cIiR7bmFtZX0tJHtkYXRhLmxhc3RJRH1cIj4ke3R4dH08L2xhYmVsPmA7XHJcbiAgICB9O1xyXG4gICAgbGV0IGNoZWNrZWQgPSAodmFsdWVzW25hbWVdID8gJ2NoZWNrZWQnIDogJycpO1xyXG4gICAgbGV0IGlucHV0ID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZsZC0ke25hbWV9XCIgbmFtZT1cIiR7bmFtZX1cIiB2YWx1ZT1cInRydWVcIiAke2NoZWNrZWR9IGlkPVwiJHtuYW1lfS0ke2RhdGEubGFzdElEfVwiLz4gYDtcclxuICAgIGxldCBsZWZ0ID0gW107XHJcbiAgICBsZXQgcmlnaHQgPSBbXHJcbiAgICAgIGlucHV0XHJcbiAgICBdO1xyXG5cclxuICAgIGlmIChsYWJlbHMuZmlyc3QpIHtcclxuICAgICAgbGVmdC51bnNoaWZ0KGxhYmVsKGxhYmVscy5maXJzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsYWJlbHMuc2Vjb25kKSB7XHJcbiAgICAgIHJpZ2h0LnB1c2gobGFiZWwobGFiZWxzLnNlY29uZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsYWJlbHMuY29udGVudCkge1xyXG4gICAgICByaWdodC5wdXNoKGxhYmVscy5jb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByaWdodC51bnNoaWZ0KCc8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPicpO1xyXG4gICAgcmlnaHQucHVzaCgnPC9kaXY+Jyk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xlZnQuY29uY2F0KHJpZ2h0KS5qb2luKCcnKX08L2Rpdj5gO1xyXG4gIH07XHJcblxyXG4gIGxldCBidG5TdHlsZXMgPSBmdW5jdGlvbihzdHlsZSkge1xyXG4gICAgICBsZXQgc3R5bGVzID0gaTE4bi5zdHlsZXMuYnRuO1xyXG4gICAgICBsZXQgc3R5bGVGaWVsZCA9ICcnO1xyXG5cclxuICAgIGlmIChzdHlsZXMpIHtcclxuICAgICAgbGV0IHN0eWxlTGFiZWwgPSBgPGxhYmVsPiR7aTE4bi5zdHlsZX08L2xhYmVsPmA7XHJcbiAgICAgIHN0eWxlRmllbGQgKz0gYDxpbnB1dCB2YWx1ZT1cIiR7c3R5bGV9XCIgbmFtZT1cInN0eWxlXCIgdHlwZT1cImhpZGRlblwiIGNsYXNzPVwiYnRuLXN0eWxlXCI+YDtcclxuICAgICAgc3R5bGVGaWVsZCArPSAnPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPic7XHJcblxyXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgbGV0IGNsYXNzTGlzdCA9IFsnYnRuLXhzJywgJ2J0bicsIGBidG4tJHtlbGVtZW50fWBdO1xyXG4gICAgICAgIGlmIChzdHlsZSA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgY2xhc3NMaXN0LnB1c2goJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHlsZUZpZWxkICs9IGA8YnV0dG9uIHZhbHVlPVwiJHtlbGVtZW50fVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7Y2xhc3NMaXN0LmpvaW4oJyAnKX1cIj4ke2kxOG4uc3R5bGVzLmJ0bltlbGVtZW50XX08L2J1dHRvbj5gO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHN0eWxlRmllbGQgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgICBzdHlsZUZpZWxkID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHN0eWxlLXdyYXBcIj4ke3N0eWxlTGFiZWx9ICR7c3R5bGVGaWVsZH08L2Rpdj5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHlsZUZpZWxkO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIG51bWJlciBhdHRyaWJ1dGUgdG8gYSBmaWVsZC5cclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZVxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBtYXJrdXAgZm9yIG51bWJlciBhdHRyaWJ1dGVcclxuICAgKi9cclxuICBsZXQgbnVtYmVyQXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMpIHtcclxuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXTtcclxuICAgIGxldCBhdHRyTGFiZWwgPSBpMThuW2F0dHJpYnV0ZV0gfHwgYXR0cmlidXRlO1xyXG4gICAgbGV0IHBsYWNlaG9sZGVyID0gaTE4bltgcGxhY2Vob2xkZXIuJHthdHRyaWJ1dGV9YF07XHJcbiAgICBsZXQgaW5wdXRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICB2YWx1ZTogYXR0clZhbCxcclxuICAgICAgbmFtZTogYXR0cmlidXRlLFxyXG4gICAgICBtaW46ICcwJyxcclxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGAsXHJcbiAgICAgIGlkOiBgJHthdHRyaWJ1dGV9LSR7ZGF0YS5sYXN0SUR9YFxyXG4gICAgfTtcclxuICAgIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKGlucHV0Q29uZmlnKSl9PmA7XHJcbiAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtudW1iZXJBdHRyaWJ1dGV9PC9kaXY+YDtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCI+PGxhYmVsIGZvcj1cIiR7aW5wdXRDb25maWcuaWR9XCI+JHthdHRyTGFiZWx9PC9sYWJlbD4gJHtpbnB1dFdyYXB9PC9kaXY+YDtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBzZWxlY3RBdHRyaWJ1dGVcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZSAgYXR0cmlidXRlIG5hbWVcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlcyAgICAgYWthIGF0dHJzXHJcbiAgICogQHBhcmFtICB7QXJyYXl9IG9wdGlvbkRhdGEgIHNlbGVjdCBmaWVsZCBvcHRpb24gZGF0YVxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICBzZWxlY3QgaW5wdXQgbWFrcnVwXHJcbiAgICovXHJcbiAgbGV0IHNlbGVjdEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzLCBvcHRpb25EYXRhKSB7XHJcbiAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHNlbGVjdE9wdGlvbnMgPSBvcHRpb25EYXRhLm1hcCgob3B0aW9uLCBpKSA9PiB7XHJcbiAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIGxhYmVsOiBgJHtpMThuLm9wdGlvbn0gJHtpfWAsXHJcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxyXG4gICAgICB9LCBvcHRpb24pO1xyXG4gICAgICBpZiAob3B0aW9uLnZhbHVlID09PSB2YWx1ZXNbYXR0cmlidXRlXSkge1xyXG4gICAgICAgIG9wdGlvbkF0dHJzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYDxvcHRpb24gJHt1dGlscy5hdHRyU3RyaW5nKHV0aWxzLnRyaW1PYmoob3B0aW9uQXR0cnMpKX0+JHtvcHRpb25BdHRycy5sYWJlbH08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgc2VsZWN0QXR0cnMgPSB7XHJcbiAgICAgICAgaWQ6IGF0dHJpYnV0ZSArICctJyArIGRhdGEubGFzdElELFxyXG4gICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcclxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGBcclxuICAgICAgfTtcclxuICAgIGxldCBsYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtzZWxlY3RBdHRycy5pZH1cIj4ke2kxOG5bYXR0cmlidXRlXSB8fCB1dGlscy5jYXBpdGFsaXplKGF0dHJpYnV0ZSl9PC9sYWJlbD5gO1xyXG4gICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7c2VsZWN0T3B0aW9ucy5qb2luKCcnKX08L3NlbGVjdD5gO1xyXG4gICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7c2VsZWN0fTwvZGl2PmA7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke3NlbGVjdEF0dHJzLm5hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgc29tZSB0ZXh0IGlucHV0cyBmb3IgZmllbGQgYXR0cmlidXRlcywgKip3aWxsIGJlIHJlcGxhY2VkKipcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZVxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAqL1xyXG4gIGxldCB0ZXh0QXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMpIHtcclxuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBsYWNlaG9sZGVyRmllbGRzID0gW1xyXG4gICAgICAndGV4dCcsXHJcbiAgICAgICd0ZXh0YXJlYScsXHJcbiAgICAgICdzZWxlY3QnLFxyXG4gICAgICAnYXV0b2NvbXBsZXRlJ1xyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgbm9OYW1lID0gW1xyXG4gICAgICAnaGVhZGVyJyxcclxuICAgICAgJ3BhcmFncmFwaCdcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHRleHRBcmVhID0gWydwYXJhZ3JhcGgnXTtcclxuXHJcbiAgICBsZXQgYXR0clZhbCA9IHZhbHVlc1thdHRyaWJ1dGVdIHx8ICcnO1xyXG4gICAgbGV0IGF0dHJMYWJlbCA9IGkxOG5bYXR0cmlidXRlXTtcclxuXHJcbiAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnKSB7XHJcbiAgICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCB0ZXh0QXJlYSkpIHtcclxuICAgICAgICBhdHRyTGFiZWwgPSBpMThuLmNvbnRlbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXR0clZhbCA9IHV0aWxzLnBhcnNlZEh0bWwodmFsdWVzW2F0dHJpYnV0ZV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN1YnR5cGVzLmhlYWRlcikge1xyXG4gICAgICBub05hbWUgPSBub05hbWUuY29uY2F0KHN1YnR5cGVzLmhlYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBsYWNlaG9sZGVyID0gaTE4bltgcGxhY2Vob2xkZXIuJHthdHRyaWJ1dGV9YF0gfHwgJyc7XHJcbiAgICBsZXQgYXR0cmlidXRlZmllbGQgPSAnJztcclxuICAgIGxldCBub01ha2VBdHRyID0gW107XHJcblxyXG4gICAgLy8gRmllbGQgaGFzIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZVxyXG4gICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3BsYWNlaG9sZGVyJyAmJiAhdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgcGxhY2Vob2xkZXJGaWVsZHMpKSB7XHJcbiAgICAgIG5vTWFrZUF0dHIucHVzaCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWVsZCBoYXMgbmFtZSBhdHRyaWJ1dGVcclxuICAgIGlmIChhdHRyaWJ1dGUgPT09ICduYW1lJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBub05hbWUpKSB7XHJcbiAgICAgIG5vTWFrZUF0dHIucHVzaCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW5vTWFrZUF0dHIuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XHJcbiAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcclxuICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcclxuICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2RhdGEubGFzdElEfWBcclxuICAgICAgfTtcclxuICAgICAgbGV0IGF0dHJpYnV0ZUxhYmVsID0gYDxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+YDtcclxuXHJcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdsYWJlbCcpIHtcclxuICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPGRpdiBjb250ZW50ZWRpdGFibGUgJHt1dGlscy5hdHRyU3RyaW5nKGlucHV0Q29uZmlnKX0+JHthdHRyVmFsfTwvZGl2PmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXRDb25maWcudmFsdWUgPSBhdHRyVmFsO1xyXG4gICAgICAgIGlucHV0Q29uZmlnLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgYXR0cmlidXRlZmllbGQgKz0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT5gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHthdHRyaWJ1dGVmaWVsZH08L2Rpdj5gO1xyXG5cclxuICAgICAgbGV0IHZpc2liaWxpdHkgPSAnYmxvY2snO1xyXG4gICAgICBpZiAoYXR0cmlidXRlID09PSAndmFsdWUnKSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eSA9IHZhbHVlcy5zdWJ0eXBlICYmIHZhbHVlcy5zdWJ0eXBlID09PSAncXVpbGwnICYmICdub25lJztcclxuICAgICAgfVxyXG5cclxuICAgICAgYXR0cmlidXRlZmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHthdHRyaWJ1dGV9LXdyYXBcIiBzdHlsZT1cImRpc3BsYXk6ICR7dmlzaWJpbGl0eX1cIj4ke2F0dHJpYnV0ZUxhYmVsfSAke2lucHV0V3JhcH08L2Rpdj5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhdHRyaWJ1dGVmaWVsZDtcclxuICB9O1xyXG5cclxuICBsZXQgcmVxdWlyZWRGaWVsZCA9IGZ1bmN0aW9uKHZhbHVlcykge1xyXG4gICAgbGV0IG5vUmVxdWlyZSA9IFtcclxuICAgICAgICAnaGVhZGVyJyxcclxuICAgICAgICAncGFyYWdyYXBoJyxcclxuICAgICAgICAnYnV0dG9uJ1xyXG4gICAgICBdO1xyXG4gICAgbGV0IG5vTWFrZSA9IFtdO1xyXG4gICAgbGV0IHJlcXVpcmVGaWVsZCA9ICcnO1xyXG5cclxuICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBub1JlcXVpcmUpKSB7XHJcbiAgICAgIG5vTWFrZS5wdXNoKHRydWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFub01ha2Uuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XHJcbiAgICAgIHJlcXVpcmVGaWVsZCA9IGJvb2xBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdmFsdWVzLCB7Zmlyc3Q6IGkxOG4ucmVxdWlyZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVxdWlyZUZpZWxkO1xyXG4gIH07XHJcblxyXG4gIC8vIEFwcGVuZCB0aGUgbmV3IGZpZWxkIHRvIHRoZSBlZGl0b3JcclxuICBsZXQgYXBwZW5kTmV3RmllbGQgPSBmdW5jdGlvbih2YWx1ZXMsIGlzTmV3ID0gdHJ1ZSkge1xyXG4gICAgbGV0IHR5cGUgPSB2YWx1ZXMudHlwZSB8fCAndGV4dCc7XHJcbiAgICBsZXQgbGFiZWwgPSB2YWx1ZXMubGFiZWwgfHwgaTE4blt0eXBlXSB8fCBpMThuLmxhYmVsO1xyXG4gICAgbGV0IGRlbEJ0biA9IG0oJ2EnLCBpMThuLnJlbW92ZSwge1xyXG4gICAgICAgIGlkOiAnZGVsXycgKyBkYXRhLmxhc3RJRCxcclxuICAgICAgICBjbGFzc05hbWU6ICdkZWwtYnV0dG9uIGJ0biBkZWxldGUtY29uZmlybScsXHJcbiAgICAgICAgdGl0bGU6IGkxOG4ucmVtb3ZlTWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgIGxldCB0b2dnbGVCdG4gPSBtKCdhJywgbnVsbCwge1xyXG4gICAgICBpZDogZGF0YS5sYXN0SUQgKyAnLWVkaXQnLFxyXG4gICAgICBjbGFzc05hbWU6ICd0b2dnbGUtZm9ybSBidG4gaWNvbi1wZW5jaWwnLFxyXG4gICAgICB0aXRsZTogaTE4bi5oaWRlXHJcbiAgICB9KTtcclxuICAgIGxldCBjb3B5QnRuID0gbSgnYScsIG51bGwsIHtcclxuICAgICAgaWQ6IGRhdGEubGFzdElEICsgJy1jb3B5JyxcclxuICAgICAgY2xhc3NOYW1lOiAnY29weS1idXR0b24gYnRuIGljb24tY29weScsXHJcbiAgICAgIHRpdGxlOiBpMThuLmNvcHlCdXR0b25Ub29sdGlwXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgbGlDb250ZW50cyA9IG0oXHJcbiAgICAgICdkaXYnLCBbdG9nZ2xlQnRuLCBjb3B5QnRuLCBkZWxCdG5dLCB7Y2xhc3NOYW1lOiAnZmllbGQtYWN0aW9ucyd9XHJcbiAgICApLm91dGVySFRNTDtcclxuXHJcbiAgICBsaUNvbnRlbnRzICs9IGA8bGFiZWwgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPiR7dXRpbHMucGFyc2VkSHRtbChsYWJlbCl9PC9sYWJlbD5gO1xyXG4gICAgbGV0IHJlcXVpcmVkRGlzcGxheSA9IHZhbHVlcy5yZXF1aXJlZCA/ICdzdHlsZT1cImRpc3BsYXk6aW5saW5lXCInIDogJyc7XHJcbiAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCIgJHtyZXF1aXJlZERpc3BsYXl9PiAqPC9zcGFuPmA7XHJcblxyXG4gICAgbGV0IGRlc2NBdHRycyA9IHtcclxuICAgICAgY2xhc3NOYW1lOiAndG9vbHRpcC1lbGVtZW50JyxcclxuICAgICAgdG9vbHRpcDogdmFsdWVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICBzdHlsZTogdmFsdWVzLmRlc2NyaXB0aW9uID8gJ2Rpc3BsYXk6aW5saW5lLWJsb2NrJyA6ICdkaXNwbGF5Om5vbmUnXHJcbiAgICB9O1xyXG4gICAgbGlDb250ZW50cyArPSBgPHNwYW4gJHt1dGlscy5hdHRyU3RyaW5nKGRlc2NBdHRycyl9Pj88L3NwYW4+YDtcclxuXHJcbiAgICBsaUNvbnRlbnRzICs9IG0oJ2RpdicsICcnLCB7Y2xhc3NOYW1lOiAncHJldi1ob2xkZXInfSkub3V0ZXJIVE1MO1xyXG4gICAgbGlDb250ZW50cyArPSBgPGRpdiBpZD1cIiR7ZGF0YS5sYXN0SUR9LWhvbGRlclwiIGNsYXNzPVwiZnJtLWhvbGRlclwiPmA7XHJcbiAgICBsaUNvbnRlbnRzICs9ICc8ZGl2IGNsYXNzPVwiZm9ybS1lbGVtZW50c1wiPic7XHJcblxyXG4gICAgbGlDb250ZW50cyArPSBhZHZGaWVsZHModmFsdWVzKTtcclxuICAgIGxpQ29udGVudHMgKz0gbSgnYScsIGkxOG4uY2xvc2UsIHtjbGFzc05hbWU6ICdjbG9zZS1maWVsZCd9KS5vdXRlckhUTUw7XHJcblxyXG4gICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcclxuICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgbGV0IGZpZWxkID0gbSgnbGknLCBsaUNvbnRlbnRzLCB7XHJcbiAgICAgICAgJ2NsYXNzJzogdHlwZSArICctZmllbGQgZm9ybS1maWVsZCcsXHJcbiAgICAgICAgJ3R5cGUnOiB0eXBlLFxyXG4gICAgICAgIGlkOiBkYXRhLmxhc3RJRFxyXG4gICAgICB9KTtcclxuICAgIGxldCAkbGkgPSAkKGZpZWxkKTtcclxuXHJcbiAgICAkbGkuZGF0YSgnZmllbGREYXRhJywge2F0dHJzOiB2YWx1ZXN9KTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGhlbHBlcnMuc3RvcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAkKCc+IGxpJywgZC5zdGFnZSkuZXEoaGVscGVycy5zdG9wSW5kZXgpLmJlZm9yZSgkbGkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJHN0YWdlLmFwcGVuZCgkbGkpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJGxpKVxyXG4gICAgLnNvcnRhYmxlKHt1cGRhdGU6ICgpID0+IGhlbHBlcnMudXBkYXRlUHJldmlldygkbGkpfSk7XHJcblxyXG4gICAgaGVscGVycy51cGRhdGVQcmV2aWV3KCRsaSk7XHJcblxyXG4gICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmFkZCkge1xyXG4gICAgICBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uYWRkKGZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0cy5lZGl0T25BZGQgJiYgaXNOZXcpIHtcclxuICAgICAgaGVscGVycy5jbG9zZUFsbEVkaXQoKTtcclxuICAgICAgaGVscGVycy50b2dnbGVFZGl0KGRhdGEubGFzdElELCBmYWxzZSk7XHJcbiAgICAgIC8vIGZpZWxkLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YS5sYXN0SUQgPSBoZWxwZXJzLmluY3JlbWVudElkKGRhdGEubGFzdElEKTtcclxuICB9O1xyXG5cclxuICAvLyBTZWxlY3QgZmllbGQgaHRtbCwgc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlXHJcbiAgbGV0IHNlbGVjdEZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbkRhdGEsIG11bHRpcGxlU2VsZWN0KSB7XHJcbiAgICBsZXQgb3B0aW9uSW5wdXRUeXBlID0ge1xyXG4gICAgICAgIHNlbGVjdGVkOiAobXVsdGlwbGVTZWxlY3QgPyAnY2hlY2tib3gnIDogJ3JhZGlvJylcclxuICAgICAgfTtcclxuICAgIGxldCBvcHRpb25EYXRhT3JkZXIgPSBbXHJcbiAgICAgICd2YWx1ZScsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdzZWxlY3RlZCdcclxuICAgIF07XHJcbiAgICBsZXQgb3B0aW9uSW5wdXRzID0gW107XHJcbiAgICBsZXQgb3B0aW9uVGVtcGxhdGUgPSB7c2VsZWN0ZWQ6IGZhbHNlLCBsYWJlbDogJycsIHZhbHVlOiAnJ307XHJcblxyXG4gICAgb3B0aW9uRGF0YSA9IE9iamVjdC5hc3NpZ24ob3B0aW9uVGVtcGxhdGUsIG9wdGlvbkRhdGEpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBvcHRpb25EYXRhT3JkZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgbGV0IHByb3AgPSBvcHRpb25EYXRhT3JkZXJbaV07XHJcbiAgICAgIGlmIChvcHRpb25EYXRhLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgbGV0IGF0dHJzID0ge1xyXG4gICAgICAgICAgdHlwZTogb3B0aW9uSW5wdXRUeXBlW3Byb3BdIHx8ICd0ZXh0JyxcclxuICAgICAgICAgIGNsYXNzTmFtZTogJ29wdGlvbi0nICsgcHJvcCxcclxuICAgICAgICAgIHZhbHVlOiBvcHRpb25EYXRhW3Byb3BdLFxyXG4gICAgICAgICAgbmFtZTogbmFtZSArICctb3B0aW9uJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGF0dHJzLnBsYWNlaG9sZGVyID0gaTE4bltgcGxhY2Vob2xkZXIuJHtwcm9wfWBdIHx8ICcnO1xyXG5cclxuICAgICAgICBpZiAocHJvcCA9PT0gJ3NlbGVjdGVkJyAmJiBvcHRpb25EYXRhLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBhdHRycy5jaGVja2VkID0gb3B0aW9uRGF0YS5zZWxlY3RlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdGlvbklucHV0cy5wdXNoKG0oJ2lucHV0JywgbnVsbCwgYXR0cnMpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZW1vdmVBdHRycyA9IHtcclxuICAgICAgY2xhc3NOYW1lOiAncmVtb3ZlIGJ0bicsXHJcbiAgICAgIHRpdGxlOiBpMThuLnJlbW92ZU1lc3NhZ2VcclxuICAgIH07XHJcbiAgICBvcHRpb25JbnB1dHMucHVzaCh1dGlscy5tYXJrdXAoJ2EnLCBpMThuLnJlbW92ZSwgcmVtb3ZlQXR0cnMpKTtcclxuXHJcbiAgICBsZXQgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0aW9uSW5wdXRzKTtcclxuXHJcbiAgICByZXR1cm4gZmllbGQub3V0ZXJIVE1MO1xyXG4gIH07XHJcblxyXG4gIGxldCBjbG9uZUl0ZW0gPSBmdW5jdGlvbiBjbG9uZUl0ZW0oY3VycmVudEl0ZW0pIHtcclxuICAgIGxldCBjdXJyZW50SWQgPSBjdXJyZW50SXRlbS5hdHRyKCdpZCcpO1xyXG4gICAgbGV0IHR5cGUgPSBjdXJyZW50SXRlbS5hdHRyKCd0eXBlJyk7XHJcbiAgICBsZXQgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGxldCBjbG9uZU5hbWUgPSB0eXBlICsgJy0nICsgdHM7XHJcbiAgICBsZXQgJGNsb25lID0gY3VycmVudEl0ZW0uY2xvbmUoKTtcclxuXHJcbiAgICAkY2xvbmUuZmluZCgnW2lkXScpLmVhY2goKGksIGVsZW0pID0+IHtcclxuICAgICBlbGVtLmlkID0gZWxlbS5pZC5yZXBsYWNlKGN1cnJlbnRJZCwgZGF0YS5sYXN0SUQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGNsb25lLmZpbmQoJ1tmb3JdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZvcicpLnJlcGxhY2UoY3VycmVudElkLCBkYXRhLmxhc3RJRCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGNsb25lLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJ2U6bm90KC5mb3JtLWVsZW1lbnRzKScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IG5ld05hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCAobmV3TmFtZS5sYXN0SW5kZXhPZignLScpICsgMSkpO1xyXG4gICAgICAgIG5ld05hbWUgPSBuZXdOYW1lICsgdHMudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5ld05hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICRjbG9uZS5maW5kKCcuZm9ybS1lbGVtZW50cycpLmZpbmQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSAnbmFtZScpIHtcclxuICAgICAgICBsZXQgbmV3VmFsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgbmV3VmFsID0gbmV3VmFsLnN1YnN0cmluZygwLCAobmV3VmFsLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XHJcbiAgICAgICAgbmV3VmFsID0gbmV3VmFsICsgdHMudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdWYWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkY2xvbmUuYXR0cignaWQnLCBkYXRhLmxhc3RJRCk7XHJcbiAgICAkY2xvbmUuYXR0cignbmFtZScsIGNsb25lTmFtZSk7XHJcbiAgICAkY2xvbmUuYWRkQ2xhc3MoJ2Nsb25lZCcpO1xyXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkY2xvbmUpLnNvcnRhYmxlKCk7XHJcblxyXG4gICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKSB7XHJcbiAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSgkY2xvbmVbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEubGFzdElEID0gaGVscGVycy5pbmNyZW1lbnRJZChkYXRhLmxhc3RJRCk7XHJcbiAgICByZXR1cm4gJGNsb25lO1xyXG4gIH07XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVRJTElUSUVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgLy8gZGVsZXRlIG9wdGlvbnNcclxuICAkc3RhZ2Uub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCAkZmllbGQgPSAkKHRoaXMpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgb3B0aW9uc0NvdW50ID0gJCh0aGlzKS5wYXJlbnRzKCcuc29ydGFibGUtb3B0aW9uczplcSgwKScpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcclxuICAgIGlmIChvcHRpb25zQ291bnQgPD0gMikge1xyXG4gICAgICBvcHRzLm5vdGlmeS5lcnJvcignRXJyb3I6ICcgKyBpMThuLm1pbk9wdGlvbk1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuc2xpZGVVcCgnMjUwJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGZpZWxkKTtcclxuICAgICAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIHRvdWNoIGZvY3VzXHJcbiAgJHN0YWdlLm9uKCd0b3VjaHN0YXJ0JywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XHJcbiAgICAgIGlmICgkaW5wdXQuYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgbGV0IGZpZWxkVmFsID0gJGlucHV0LnZhbCgpO1xyXG4gICAgICAgICRpbnB1dC52YWwoZmllbGRWYWwpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIHRvZ2dsZSBmaWVsZHNcclxuICAkc3RhZ2Uub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnRvZ2dsZS1mb3JtLCAuY2xvc2UtZmllbGQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGUuaGFuZGxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgdGFyZ2V0SUQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpLmF0dHIoJ2lkJyk7XHJcbiAgICAgIGhlbHBlcnMudG9nZ2xlRWRpdCh0YXJnZXRJRCk7XHJcbiAgICAgIGUuaGFuZGxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICRzdGFnZS5vbignY2hhbmdlJywgJ1tuYW1lPVwic3VidHlwZVwiXScsIChlKSA9PiB7XHJcbiAgICBjb25zdCAkZmllbGQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaS5mb3JtLWZpZWxkJyk7XHJcbiAgICBjb25zdCAkdmFsV3JhcCA9ICQoJy52YWx1ZS13cmFwJywgJGZpZWxkKTtcclxuICAgICR2YWxXcmFwLnRvZ2dsZShlLnRhcmdldC52YWx1ZSAhPT0gJ3F1aWxsJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkc3RhZ2Uub24oJ2NoYW5nZScsICcucHJldi1ob2xkZXIgaW5wdXQsIC5wcmV2LWhvbGRlciBzZWxlY3QsIC5wcmV2LWhvbGRlciB0ZXh0YXJlYScsIGUgPT4ge1xyXG4gICAgbGV0IHByZXZPcHRpb25zO1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3RoZXItb3B0aW9uJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpZWxkID0gdXRpbHMuY2xvc2VzdChlLnRhcmdldCwgJy5mb3JtLWZpZWxkJyk7XHJcbiAgICBpZiAodXRpbHMuaW5BcnJheShmaWVsZC50eXBlLCBbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29wdGlvbi12YWx1ZScpO1xyXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICB1dGlscy5mb3JFYWNoKG9wdGlvbnMsIGkgPT4ge1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9uc1tpXS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5jaGVja2VkID0gZS50YXJnZXQudmFsdWUgPT09IG9wdGlvbnNbaV0udmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJldk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICB1dGlscy5mb3JFYWNoKHByZXZPcHRpb25zLCBpID0+IHtcclxuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnNbaV0ucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb24uY2hlY2tlZCA9IHByZXZPcHRpb25zW2ldLmNoZWNrZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBmaWVsZFZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZS0nICsgZmllbGQuaWQpO1xyXG4gICAgICBpZihmaWVsZFZhbCkge1xyXG4gICAgICAgIGZpZWxkVmFsLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcclxuICB9KTtcclxuXHJcbiAgLy8gdXBkYXRlIHByZXZpZXcgdG8gbGFiZWxcclxuICB1dGlscy5hZGRFdmVudExpc3RlbmVycyhkLnN0YWdlLCAna2V5dXAgY2hhbmdlJywgZSA9PiB7XHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmxkLWxhYmVsJykpIHJldHVybjtcclxuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIHx8IGUudGFyZ2V0LmlubmVySFRNTDtcclxuICAgIGxldCBsYWJlbCA9IHV0aWxzLmNsb3Nlc3QoZS50YXJnZXQsICcuZm9ybS1maWVsZCcpLnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1sYWJlbCcpO1xyXG4gICAgbGFiZWwuaW5uZXJIVE1MID0gdXRpbHMucGFyc2VkSHRtbCh2YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIHJlbW92ZSBlcnJvciBzdHlsaW5nIHdoZW4gdXNlcnMgdHJpZXMgdG8gY29ycmVjdCBtaXN0YWtlXHJcbiAgJHN0YWdlLm9uKCdrZXl1cCcsICdpbnB1dC5lcnJvcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xyXG4gIH0pO1xyXG5cclxuICAvLyB1cGRhdGUgcHJldmlldyBmb3IgZGVzY3JpcHRpb25cclxuICAkc3RhZ2Uub24oJ2tleXVwJywgJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCAkZmllbGQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xyXG4gICAgbGV0IGNsb3Nlc3RUb29sVGlwID0gJCgnLnRvb2x0aXAtZWxlbWVudCcsICRmaWVsZCk7XHJcbiAgICBsZXQgdHRWYWwgPSAkKGUudGFyZ2V0KS52YWwoKTtcclxuICAgIGlmICh0dFZhbCAhPT0gJycpIHtcclxuICAgICAgaWYgKCFjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgdHQgPSBgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWVsZW1lbnRcIiB0b29sdGlwPVwiJHt0dFZhbH1cIj4/PC9zcGFuPmA7XHJcbiAgICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJGZpZWxkKS5hZnRlcih0dCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xvc2VzdFRvb2xUaXAuYXR0cigndG9vbHRpcCcsIHR0VmFsKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcclxuICAgICAgICBjbG9zZXN0VG9vbFRpcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSBtdWx0aXBsZSBzZWxlY3Qgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSAge09iamVjdH0gZSBjbGljayBldmVudFxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gbmV3VHlwZVxyXG4gICAqL1xyXG4gICRzdGFnZS5vbignY2hhbmdlJywgJy5mbGQtbXVsdGlwbGUnLCBlID0+IHtcclxuICAgIGxldCBuZXdUeXBlID0gZS50YXJnZXQuY2hlY2tlZCA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xyXG4gICAgbGV0ICRvcHRpb25zID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWVsZW1lbnRzJykpO1xyXG4gICAgJG9wdGlvbnMuZWFjaChpID0+ICRvcHRpb25zW2ldLnR5cGUgPSBuZXdUeXBlKTtcclxuICAgIHJldHVybiBuZXdUeXBlO1xyXG4gIH0pO1xyXG5cclxuICAvLyBmb3JtYXQgbmFtZSBhdHRyaWJ1dGVcclxuICAkc3RhZ2Uub24oJ2JsdXInLCAnaW5wdXQuZmxkLW5hbWUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnRhcmdldC52YWx1ZSA9IHV0aWxzLnNhZmVuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgJChlLnRhcmdldClcclxuICAgICAgLmFkZENsYXNzKCdmaWVsZC1lcnJvcicpXHJcbiAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIGkxOG4uY2Fubm90QmVFbXB0eSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZmllbGQtZXJyb3InKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJHN0YWdlLm9uKCdibHVyJywgJ2lucHV0LmZsZC1tYXhsZW5ndGgnLCBlID0+IHtcclxuICAgIGUudGFyZ2V0LnZhbHVlID0gdXRpbHMuZm9yY2VOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBDb3B5IGZpZWxkXHJcbiAgJHN0YWdlLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5pY29uLWNvcHknLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY3VycmVudEl0ZW0gPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoJ2xpJyk7XHJcbiAgICBsZXQgJGNsb25lID0gY2xvbmVJdGVtKGN1cnJlbnRJdGVtKTtcclxuICAgICRjbG9uZS5pbnNlcnRBZnRlcihjdXJyZW50SXRlbSk7XHJcbiAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGNsb25lKTtcclxuICAgIGhlbHBlcnMuc2F2ZS5jYWxsKGhlbHBlcnMpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBEZWxldGUgZmllbGRcclxuICAkc3RhZ2Uub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmRlbGV0ZS1jb25maXJtJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uUG9zaXRpb24gPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNvb3JkcyA9IHtcclxuICAgICAgICBwYWdlWDogYnV0dG9uUG9zaXRpb24ubGVmdCArIChidXR0b25Qb3NpdGlvbi53aWR0aCAvIDIpLFxyXG4gICAgICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXHJcbiAgICAgIH07XHJcblxyXG4gICAgbGV0IGRlbGV0ZUlEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xyXG4gICAgY29uc3QgJGZpZWxkID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVJRCkpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsQ2xvc2VkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIHN1cmUgdGhleSB3YW50IHRvIHJlbW92ZSB0aGUgZmllbGRcclxuICAgIGlmIChvcHRzLmZpZWxkUmVtb3ZlV2Fybikge1xyXG4gICAgICBsZXQgd2FybkgzID0gdXRpbHMubWFya3VwKCdoMycsIGkxOG4ud2FybmluZyk7XHJcbiAgICAgIGxldCB3YXJuTWVzc2FnZSA9IHV0aWxzLm1hcmt1cCgncCcsIGkxOG4uZmllbGRSZW1vdmVXYXJuaW5nKTtcclxuICAgICAgaGVscGVycy5jb25maXJtKFt3YXJuSDMsIHdhcm5NZXNzYWdlXSwgKCkgPT5cclxuICAgICAgICBoZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKSwgY29vcmRzKTtcclxuICAgICAgJGZpZWxkLmFkZENsYXNzKCdkZWxldGluZycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFVwZGF0ZSBidXR0b24gc3R5bGUgc2VsZWN0aW9uXHJcbiAgJHN0YWdlLm9uKCdjbGljaycsICcuc3R5bGUtd3JhcCBidXR0b24nLCBlID0+IHtcclxuICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcclxuICAgIGxldCBzdHlsZVZhbCA9ICRidXR0b24udmFsKCk7XHJcbiAgICBsZXQgJGJ0blN0eWxlID0gJGJ1dHRvbi5wYXJlbnQoKS5wcmV2KCcuYnRuLXN0eWxlJyk7XHJcbiAgICAkYnRuU3R5bGUudmFsKHN0eWxlVmFsKTtcclxuICAgICRidXR0b24uc2libGluZ3MoJy5idG4nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICRidXR0b24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGJ0blN0eWxlLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykpO1xyXG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIHRvZ2dsZSByZXF1aXJlZCBhc3Rlcmlza1xyXG4gICRzdGFnZS5vbignY2xpY2snLCAnLmZsZC1yZXF1aXJlZCcsIGUgPT4ge1xyXG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKS5maW5kKCcucmVxdWlyZWQtYXN0ZXJpc2snKS50b2dnbGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJvbGVzIHZpc2liaWxpdHlcclxuICAkc3RhZ2Uub24oJ2NsaWNrJywgJ2lucHV0LmZsZC1hY2Nlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgcm9sZXMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5hdmFpbGFibGUtcm9sZXMnKTtcclxuICAgIGxldCBlbmFibGVSb2xlc0NCID0gJChlLnRhcmdldCk7XHJcbiAgICByb2xlcy5zbGlkZVRvZ2dsZSgyNTAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoIWVuYWJsZVJvbGVzQ0IuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCByb2xlcykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gYWRkIG5ldyBvcHRpb25zXHJcbiAgJHN0YWdlLm9uKCdjbGljaycsICcuYWRkLW9wdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCAkb3B0aW9uV3JhcCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5maWVsZC1vcHRpb25zJyk7XHJcbiAgICBsZXQgJG11bHRpcGxlID0gJCgnW25hbWU9XCJtdWx0aXBsZVwiXScsICRvcHRpb25XcmFwKTtcclxuICAgIGxldCAkZmlyc3RPcHRpb24gPSAkKCcub3B0aW9uLXNlbGVjdGVkOmVxKDApJywgJG9wdGlvbldyYXApO1xyXG4gICAgbGV0IGlzTXVsdGlwbGUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoJG11bHRpcGxlLmxlbmd0aCkge1xyXG4gICAgICBpc011bHRpcGxlID0gJG11bHRpcGxlLnByb3AoJ2NoZWNrZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlzTXVsdGlwbGUgPSAoJGZpcnN0T3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5hbWUgPSAkZmlyc3RPcHRpb24uYXR0cignbmFtZScpO1xyXG5cclxuICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJG9wdGlvbldyYXApLmFwcGVuZChzZWxlY3RGaWVsZE9wdGlvbnMobmFtZSwgZmFsc2UsIGlzTXVsdGlwbGUpKTtcclxuICB9KTtcclxuXHJcbiAgJHN0YWdlLm9uKCdtb3VzZW92ZXIgbW91c2VvdXQnLCAnLnJlbW92ZSwgLmRlbC1idXR0b24nLCBlID0+XHJcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpLnRvZ2dsZUNsYXNzKCdkZWxldGUnKSk7XHJcblxyXG4gIGxvYWRGaWVsZHMoKTtcclxuXHJcbiAgJHN0YWdlLmNzcygnbWluLWhlaWdodCcsICRjYlVMLmhlaWdodCgpKTtcclxuXHJcbiAgLy8gSWYgb3B0aW9uIHNldCwgY29udHJvbHMgd2lsbCByZW1haW4gaW4gdmlldyBpbiBlZGl0b3JcclxuICBpZiAob3B0cy5zdGlja3lDb250cm9scy5lbmFibGUpIHtcclxuICAgIGhlbHBlcnMuc3RpY2t5Q29udHJvbHMoJHN0YWdlKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmxvYWRlZCk7XHJcblxyXG4gIC8vIE1ha2UgYWN0aW9ucyBhY2Nlc3NpYmxlXHJcbiAgZm9ybUJ1aWxkZXIuYWN0aW9ucyA9IHtcclxuICAgIGNsZWFyRmllbGRzOiBhbmltYXRlID0+IGhlbHBlcnMucmVtb3ZlQWxsRmllbGRzKGQuc3RhZ2UsIGFuaW1hdGUpLFxyXG4gICAgc2hvd0RhdGE6IGhlbHBlcnMuc2hvd0RhdGEuYmluZChoZWxwZXJzKSxcclxuICAgIHNhdmU6IGhlbHBlcnMuc2F2ZS5iaW5kKGhlbHBlcnMpLFxyXG4gICAgYWRkRmllbGQ6IChmaWVsZCwgaW5kZXgpID0+IHtcclxuICAgICAgaGVscGVycy5zdG9wSW5kZXggPSBkYXRhLmZvcm1EYXRhLmxlbmd0aCA/IGluZGV4IDogdW5kZWZpbmVkO1xyXG4gICAgICBwcmVwRmllbGRWYXJzKGZpZWxkKTtcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMuZmllbGRBZGRlZCk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRmllbGQ6IGhlbHBlcnMucmVtb3ZlRmllbGQuYmluZChoZWxwZXJzKSxcclxuICAgIGdldERhdGE6ICh0eXBlID0gJ2pzJykgPT4ge1xyXG4gICAgICBjb25zdCBzdGFnZSA9IGQuc3RhZ2U7XHJcbiAgICAgIGNvbnN0IGggPSBoZWxwZXJzO1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGpzOiAoKSA9PiBoLnByZXBEYXRhKHN0YWdlKSxcclxuICAgICAgICB4bWw6ICgpID0+IGgueG1sU2F2ZShzdGFnZSksXHJcbiAgICAgICAganNvbjogKCkgPT4gd2luZG93LkpTT04uc3RyaW5naWZ5KGgucHJlcERhdGEoc3RhZ2UpLCBudWxsLCAnXFx0JylcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhW3R5cGVdKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0RGF0YTogZm9ybURhdGEgPT4ge1xyXG4gICAgICBoZWxwZXJzLnJlbW92ZUFsbEZpZWxkcyhkLnN0YWdlLCBmYWxzZSk7XHJcbiAgICAgIGxvYWRGaWVsZHMoZm9ybURhdGEpO1xyXG4gICAgfSxcclxuICAgIHNldExhbmc6IGFzeW5jIGxvY2FsZSA9PiB7XHJcbiAgICAgIGF3YWl0IG1pMThuLnNldEN1cnJlbnQuY2FsbChtaTE4biwgbG9jYWxlKTtcclxuICAgICAgZC5lbXB0eShlbGVtZW50KTtcclxuICAgICAgbGV0IGZvcm1CdWlsZGVyID0gbmV3IEZvcm1CdWlsZGVyKG9yaWdpbmFsT3B0cywgZWxlbWVudCk7XHJcbiAgICAgICQoZWxlbWVudCkuZGF0YSgnZm9ybUJ1aWxkZXInLCBmb3JtQnVpbGRlcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZvcm1CdWlsZGVyO1xyXG59O1xyXG5cclxuXHJcbihmdW5jdGlvbiggJCApIHtcclxuICAkLmZuLmZvcm1CdWlsZGVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgIH1cclxuICAgIGxldCBlbGVtcyA9IHRoaXM7XHJcbiAgICBsZXQge2kxOG4sIC4uLm9wdHN9ID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zLCB0cnVlKTtcclxuICAgIGNvbmZpZy5vcHRzID0gb3B0cztcclxuICAgIGxldCBpMThuT3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0STE4biwgaTE4biwgdHJ1ZSk7XHJcbiAgICBsZXQgaW5zdGFuY2UgPSB7XHJcbiAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICBnZXREYXRhOiBudWxsLFxyXG4gICAgICAgIHNldERhdGE6IG51bGwsXHJcbiAgICAgICAgc2F2ZTogbnVsbCxcclxuICAgICAgICBzaG93RGF0YTogbnVsbCxcclxuICAgICAgICBzZXRMYW5nOiBudWxsLFxyXG4gICAgICAgIGFkZEZpZWxkOiBudWxsLFxyXG4gICAgICAgIHJlbW92ZUZpZWxkOiBudWxsLFxyXG4gICAgICAgIGNsZWFyRmllbGRzOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldCBmb3JtRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuYWN0aW9ucy5nZXREYXRhKCdqc29uJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIG1pMThuLmluaXQoaTE4bk9wdHMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZWxlbXMuZWFjaChpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1CdWlsZGVyID0gbmV3IEZvcm1CdWlsZGVyKG9wdHMsIGVsZW1zW2ldKTtcclxuICAgICAgICAgICAgJChlbGVtc1tpXSkuZGF0YSgnZm9ybUJ1aWxkZXInLCBmb3JtQnVpbGRlcik7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmFjdGlvbnMgPSBmb3JtQnVpbGRlci5hY3Rpb25zO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkZWxldGUgaW5zdGFuY2UucHJvbWlzZTtcclxuICAgICAgICAgIHJlc29sdmUoaW5zdGFuY2UpO1xyXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgfTtcclxufSkoIGpRdWVyeSApO1xyXG4iLCJpbXBvcnQge2luc3RhbmNlRG9tLCBkZWZhdWx0U3VidHlwZXMsIGVtcHR5LCBvcHRpb25GaWVsZHNSZWdFeH0gZnJvbSAnLi9kb20nO1xyXG5pbXBvcnQge2luc3RhbmNlRGF0YX0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcclxuaW1wb3J0IG1pMThuIGZyb20gJ21pMThuJztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmNvbnN0IG9wdHMgPSBjb25maWcub3B0cztcclxuY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXRpZXMgc3BlY2lmaWMgdG8gZm9ybS1idWlsZGVyLmpzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcclxuICAvKipcclxuICAgKiBTZXR1cCBkZWZhdWx0cywgZ2V0IGluc3RhbmNlIGRhdGEgYW5kIGRvbVxyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZm9ybUlEIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihmb3JtSUQpIHtcclxuICAgIHRoaXMuZGF0YSA9IGluc3RhbmNlRGF0YVtmb3JtSURdO1xyXG4gICAgdGhpcy5kID0gaW5zdGFuY2VEb21bZm9ybUlEXTtcclxuICAgIHRoaXMuZG9DYW5jZWwgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBiZWdpbnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXHJcbiAgICovXHJcbiAgc3RhcnRNb3ZpbmcoZXZlbnQsIHVpKSB7XHJcbiAgICB1aS5pdGVtLnNob3coKS5hZGRDbGFzcygnbW92aW5nJyk7XHJcbiAgICB0aGlzLmRvQ2FuY2VsID0gdHJ1ZTtcclxuICAgIHRoaXMuZnJvbSA9IHVpLml0ZW0ucGFyZW50KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsYmFjayBmb3Igd2hlbiBhIGRyYWcgZW5kc1xyXG4gICAqXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcclxuICAgKi9cclxuICBzdG9wTW92aW5nKGV2ZW50LCB1aSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ21vdmluZycpO1xyXG4gICAgaWYgKF90aGlzLmRvQ2FuY2VsKSB7XHJcbiAgICAgIGlmICh1aS5zZW5kZXIpIHtcclxuICAgICAgICAkKHVpLnNlbmRlcikuc29ydGFibGUoJ2NhbmNlbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZnJvbS5zb3J0YWJsZSgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgICBfdGhpcy5zYXZlKCk7XHJcbiAgICBfdGhpcy5kb0NhbmNlbCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogalF1ZXJ5IFVJIHNvcnRhYmxlIGJlZm9yZVN0b3AgY2FsbGJhY2sgdXNlZCBmb3IgYm90aCBsaXN0cy5cclxuICAgKiBMb2dpYyBmb3IgY2FuY2VsaW5nIHRoZSBzb3J0IG9yIGRyb3AuXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcclxuICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAqL1xyXG4gIGJlZm9yZVN0b3AoZXZlbnQsIHVpKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc3Qgb3B0cyA9IGNvbmZpZy5vcHRzO1xyXG4gICAgY29uc3QgZm9ybSA9IF90aGlzLmQuc3RhZ2U7XHJcbiAgICBsZXQgbGFzdEluZGV4ID0gZm9ybS5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7XHJcbiAgICBsZXQgY2FuY2VsQXJyYXkgPSBbXTtcclxuICAgIF90aGlzLnN0b3BJbmRleCA9IHVpLnBsYWNlaG9sZGVyLmluZGV4KCkgLSAxO1xyXG5cclxuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzICYmIHVpLml0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoJ2ZybWItY29udHJvbCcpKSB7XHJcbiAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdHMucHJlcGVuZCkge1xyXG4gICAgICBjYW5jZWxBcnJheS5wdXNoKF90aGlzLnN0b3BJbmRleCA9PT0gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XHJcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goKF90aGlzLnN0b3BJbmRleCArIDEpID09PSBsYXN0SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIF90aGlzLmRvQ2FuY2VsID0gY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGVtcHRzIHRvIGdldCBlbGVtZW50IHR5cGUgYW5kIHN1YnR5cGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gJGZpZWxkXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSB7dHlwZTogJ2ZpZWxkVHlwZScsIHN1YnR5cGU6ICdmaWVsZFN1YlR5cGUnfVxyXG4gICAqL1xyXG4gIGdldFR5cGVzKCRmaWVsZCkge1xyXG4gICAgbGV0IHR5cGVzID0ge1xyXG4gICAgICAgIHR5cGU6ICRmaWVsZC5hdHRyKCd0eXBlJylcclxuICAgICAgfTtcclxuICAgIGxldCBzdWJ0eXBlID0gJCgnLmZsZC1zdWJ0eXBlJywgJGZpZWxkKS52YWwoKTtcclxuXHJcbiAgICBpZiAoc3VidHlwZSAhPT0gdHlwZXMudHlwZSkge1xyXG4gICAgICB0eXBlcy5zdWJ0eXBlID0gc3VidHlwZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHlwZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgb3B0aW9uIGRhdGEgZm9yIGEgZmllbGRcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkIGpRdWVyeSBmaWVsZCBvYmplY3RcclxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIEFycmF5IG9mIG9wdGlvbiB2YWx1ZXNcclxuICAgKi9cclxuICBmaWVsZE9wdGlvbkRhdGEoZmllbGQpIHtcclxuICAgIGxldCBvcHRpb25zID0gW107XHJcblxyXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgbGV0ICRvcHRpb24gPSAkKHRoaXMpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCAkb3B0aW9uKS5pcygnOmNoZWNrZWQnKTtcclxuICAgICAgbGV0IGF0dHJzID0ge1xyXG4gICAgICAgICAgbGFiZWw6ICQoJy5vcHRpb24tbGFiZWwnLCAkb3B0aW9uKS52YWwoKSxcclxuICAgICAgICAgIHZhbHVlOiAkKCcub3B0aW9uLXZhbHVlJywgJG9wdGlvbikudmFsKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgb3B0aW9ucy5wdXNoKGF0dHJzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWE1MIHNhdmVcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybSBzb3J0YWJsZUZpZWxkcyBub2RlXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSB4bWwgaW4gc3RyaW5nXHJcbiAgICovXHJcbiAgeG1sU2F2ZShmb3JtKSB7XHJcbiAgICBsZXQgZm9ybURhdGEgPSB0aGlzLnByZXBEYXRhKGZvcm0pO1xyXG4gICAgbGV0IHhtbCA9IFsnPGZvcm0tdGVtcGxhdGU+XFxuXFx0PGZpZWxkcz4nXTtcclxuXHJcbiAgICB1dGlscy5mb3JFYWNoKGZvcm1EYXRhLCBmdW5jdGlvbihmaWVsZEluZGV4LCBmaWVsZCkge1xyXG4gICAgICBsZXQgZmllbGRDb250ZW50ID0gbnVsbDtcclxuICAgICAgY29uc3Qgb3B0aW9uRmllbGRzID0gb3B0aW9uRmllbGRzUmVnRXg7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgb3B0aW9uc1xyXG4gICAgICBpZiAoZmllbGQudHlwZS5tYXRjaChvcHRpb25GaWVsZHMpKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBmaWVsZC52YWx1ZXM7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25EYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgb3B0aW9uID0gbSgnb3B0aW9uJywgb3B0aW9uRGF0YVtpXS5sYWJlbCwgb3B0aW9uRGF0YVtpXSkub3V0ZXJIVE1MO1xyXG4gICAgICAgICAgb3B0aW9ucy5wdXNoKCdcXG5cXHRcXHRcXHQnICsgb3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9ucy5wdXNoKCdcXG5cXHRcXHQnKTtcclxuXHJcbiAgICAgICAgZmllbGRDb250ZW50ID0gb3B0aW9ucy5qb2luKCcnKTtcclxuICAgICAgICBkZWxldGUgZmllbGQudmFsdWVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgeG1sRmllbGQgPSBtKCdmaWVsZCcsIGZpZWxkQ29udGVudCwgZmllbGQpO1xyXG4gICAgICB4bWwucHVzaCgnXFxuXFx0XFx0JyArIHhtbEZpZWxkLm91dGVySFRNTCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB4bWwucHVzaCgnXFxuXFx0PC9maWVsZHM+XFxuPC9mb3JtLXRlbXBsYXRlPicpO1xyXG5cclxuICAgIHJldHVybiB4bWwuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgZm9ybURhdGEgZnJvbSBlZGl0b3IgaW4gSlMgT2JqZWN0IGZvcm1hdFxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybSBha2Egc3RhZ2UsIERPTSBlbGVtZW50XHJcbiAgICogQHJldHVybiB7T2JqZWN0fSBmb3JtRGF0YVxyXG4gICAqL1xyXG4gIHByZXBEYXRhKGZvcm0pIHtcclxuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xyXG4gICAgbGV0IGQgPSB0aGlzLmQ7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGlmIChmb3JtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIC8vIGJ1aWxkIGRhdGEgb2JqZWN0XHJcbiAgICAgIHV0aWxzLmZvckVhY2goZm9ybS5jaGlsZE5vZGVzLCBhc3luYyBmdW5jdGlvbihpbmRleCwgZmllbGQpIHtcclxuICAgICAgICBsZXQgJGZpZWxkID0gJChmaWVsZCk7XHJcblxyXG4gICAgICAgIGlmICghKCRmaWVsZC5oYXNDbGFzcygnZGlzYWJsZWQtZmllbGQnKSkpIHtcclxuICAgICAgICAgIGxldCBmaWVsZERhdGEgPSBfdGhpcy5nZXRUeXBlcygkZmllbGQpO1xyXG4gICAgICAgICAgbGV0IHJvbGVWYWxzID0gJCgnLnJvbGVzLWZpZWxkOmNoZWNrZWQnLCBmaWVsZCkubWFwKGVsZW0gPT4gZWxlbS52YWx1ZSkuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgX3RoaXMuc2V0QXR0clZhbHMoZmllbGQsIGZpZWxkRGF0YSk7XHJcblxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YS5zdWJ0eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZERhdGEuc3VidHlwZSA9PT0gJ3F1aWxsJykge1xyXG4gICAgICAgICAgICAgIGxldCBpZCA9IGAke2ZpZWxkRGF0YS5uYW1lfS1wcmV2aWV3YDtcclxuICAgICAgICAgICAgICBpZiAod2luZG93LmZiRWRpdG9ycy5xdWlsbFtpZF0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbaWRdLmluc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGluc3RhbmNlLmdldENvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBmaWVsZERhdGEudmFsdWUgPSB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoZGF0YS5vcHMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGZpZWxkRGF0YS5zdWJ0eXBlID09PSAndGlueW1jZScgJiYgd2luZG93LnRpbnltY2UpIHtcclxuICAgICAgICAgICAgICBsZXQgaWQgPSBgJHtmaWVsZERhdGEubmFtZX0tcHJldmlld2A7XHJcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy50aW55bWNlLmVkaXRvcnNbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWRpdG9yID0gd2luZG93LnRpbnltY2UuZWRpdG9yc1tpZF07XHJcbiAgICAgICAgICAgICAgICBmaWVsZERhdGEudmFsdWUgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChyb2xlVmFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZmllbGREYXRhLnJvbGUgPSByb2xlVmFscy5qb2luKCcsJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZmllbGREYXRhLmNsYXNzTmFtZSA9IGZpZWxkRGF0YS5jbGFzc05hbWUgfHwgZmllbGREYXRhLmNsYXNzO1xyXG5cclxuICAgICAgICAgIGxldCBtYXRjaCA9IC8oPzpefFxccylidG4tKC4qPykoPzpcXHN8JCkvZy5leGVjKGZpZWxkRGF0YS5jbGFzc05hbWUpO1xyXG4gICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIGZpZWxkRGF0YS5zdHlsZSA9IG1hdGNoWzFdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZmllbGREYXRhKTtcclxuXHJcbiAgICAgICAgICBsZXQgbXVsdGlwbGVGaWVsZCA9IGZpZWxkRGF0YS50eXBlLm1hdGNoKGQub3B0aW9uRmllbGRzUmVnRXgpO1xyXG5cclxuICAgICAgICAgIGlmIChtdWx0aXBsZUZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBfdGhpcy5maWVsZE9wdGlvbkRhdGEoJGZpZWxkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYW5kIHNldCB0aGUgZGF0YSBmb3IgYW4gZWRpdG9yLiBNYWlubHlcclxuICAgKiBhIHdyYXBwZXIgZm9yIGhhbmRsaW5nIGRhdGFUeXBlIG9wdGlvblxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybURhdGFcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGZvcm1EYXRhXHJcbiAgICovXHJcbiAgZ2V0RGF0YShmb3JtRGF0YSkge1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICBpZiAoIWZvcm1EYXRhKSB7XHJcbiAgICAgIGZvcm1EYXRhID0gY29uZmlnLm9wdHMuZm9ybURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFmb3JtRGF0YSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNldERhdGEgPSB7XHJcbiAgICAgIHhtbDogZm9ybURhdGEgPT4gdXRpbHMucGFyc2VYTUwoZm9ybURhdGEpLFxyXG4gICAgICBqc29uOiBmb3JtRGF0YSA9PiB3aW5kb3cuSlNPTi5wYXJzZShmb3JtRGF0YSlcclxuICAgIH07XHJcblxyXG4gICAgZGF0YS5mb3JtRGF0YSA9IHNldERhdGFbY29uZmlnLm9wdHMuZGF0YVR5cGVdKGZvcm1EYXRhKSB8fCBbXTtcclxuXHJcbiAgICByZXR1cm4gZGF0YS5mb3JtRGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhdmVzIGFuZCByZXR1cm5zIGZvcm1EYXRhXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YWdlIERPTSBlbGVtZW50XHJcbiAgICogQHJldHVybiB7WE1MfEpTT059IGZvcm1EYXRhXHJcbiAgICovXHJcbiAgc2F2ZShzdGFnZSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgaWYoIXN0YWdlKSB7XHJcbiAgICAgIHN0YWdlID0gdGhpcy5kLnN0YWdlO1xyXG4gICAgfVxyXG4gICAgbGV0IGRvU2F2ZSA9IHtcclxuICAgICAgeG1sOiAoKSA9PiBfdGhpcy54bWxTYXZlKHN0YWdlKSxcclxuICAgICAganNvbjogKCkgPT5cclxuICAgICAgd2luZG93LkpTT04uc3RyaW5naWZ5KF90aGlzLnByZXBEYXRhKHN0YWdlKSwgbnVsbCwgJ1xcdCcpXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHNhdmUgYWN0aW9uIGZvciBjdXJyZW50IGBkYXRhVHlwZWBcclxuICAgIGRhdGEuZm9ybURhdGEgPSBkb1NhdmVbY29uZmlnLm9wdHMuZGF0YVR5cGVdKHN0YWdlKTtcclxuXHJcbiAgICAvLyB0cmlnZ2VyIGZvcm1TYXZlZCBldmVudFxyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMuZm9ybVNhdmVkKTtcclxuICAgIHJldHVybiBkYXRhLmZvcm1EYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaW5jcmVtZW50cyB0aGUgZmllbGQgaWRzIHdpdGggc3VwcG9ydCBmb3IgbXVsdGlwbGUgZWRpdG9yc1xyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaWQgZmllbGQgSURcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgIGluY3JlbWVudGVkIGZpZWxkIElEXHJcbiAgICovXHJcbiAgaW5jcmVtZW50SWQoaWQpIHtcclxuICAgIGxldCBzcGxpdCA9IGlkLmxhc3RJbmRleE9mKCctJyk7XHJcbiAgICBsZXQgbmV3RmllbGROdW1iZXIgPSBwYXJzZUludChpZC5zdWJzdHJpbmcoc3BsaXQgKyAxKSkgKyAxO1xyXG4gICAgbGV0IGJhc2VTdHJpbmcgPSBpZC5zdWJzdHJpbmcoMCwgc3BsaXQpO1xyXG5cclxuICAgIHJldHVybiBgJHtiYXNlU3RyaW5nfS0ke25ld0ZpZWxkTnVtYmVyfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHZhbHVlcyBmb3IgZmllbGQgYXR0cmlidXRlcyBpbiB0aGUgZWRpdG9yXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkRGF0YVxyXG4gICAqL1xyXG4gIHNldEF0dHJWYWxzKGZpZWxkLCBmaWVsZERhdGEpIHtcclxuICAgIGxldCBhdHRycyA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJmbGQtXCJdJyk7XHJcbiAgICB1dGlscy5mb3JFYWNoKGF0dHJzLCBpbmRleCA9PiB7XHJcbiAgICAgIGxldCBhdHRyID0gYXR0cnNbaW5kZXhdO1xyXG4gICAgICBsZXQgdmFsdWU7XHJcbiAgICAgIGxldCBuYW1lID0gdXRpbHMuY2FtZWxDYXNlKGF0dHIuZ2V0QXR0cmlidXRlKCduYW1lJykpO1xyXG4gICAgICBpZiAoYXR0ci5hdHRyaWJ1dGVzWydjb250ZW50ZWRpdGFibGUnXSkge1xyXG4gICAgICAgIHZhbHVlID0gYXR0ci5pbm5lckhUTUw7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0ci50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgdmFsdWUgPSBhdHRyLmNoZWNrZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsdWUgPSBhdHRyLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZpZWxkRGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb2xsZWN0IGZpZWxkIGF0dHJpYnV0ZSB2YWx1ZXMgYW5kIGNhbGwgZmllbGRQcmV2aWV3IHRvIGdlbmVyYXRlIHByZXZpZXdcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICRmaWVsZCBqUXVlcnkgRE9NIGVsZW1lbnRcclxuICAgKi9cclxuICB1cGRhdGVQcmV2aWV3KCRmaWVsZCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBkID0gdGhpcy5kO1xyXG4gICAgY29uc3QgZmllbGRDbGFzcyA9ICRmaWVsZC5hdHRyKCdjbGFzcycpO1xyXG4gICAgbGV0IGZpZWxkID0gJGZpZWxkWzBdO1xyXG4gICAgaWYgKGZpZWxkQ2xhc3MuaW5kZXhPZignaW5wdXQtY29udHJvbCcpICE9PSAtMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpZWxkVHlwZSA9ICRmaWVsZC5hdHRyKCd0eXBlJyk7XHJcbiAgICBsZXQgJHByZXZIb2xkZXIgPSAkKCcucHJldi1ob2xkZXInLCBmaWVsZCk7XHJcbiAgICBsZXQgcHJldmlld0RhdGEgPSB7XHJcbiAgICAgIHR5cGU6IGZpZWxkVHlwZVxyXG4gICAgfTtcclxuICAgIGxldCBwcmV2aWV3O1xyXG5cclxuICAgIF90aGlzLnNldEF0dHJWYWxzKGZpZWxkLCBwcmV2aWV3RGF0YSk7XHJcblxyXG4gICAgbGV0IHN0eWxlID0gJCgnLmJ0bi1zdHlsZScsIGZpZWxkKS52YWwoKTtcclxuICAgIGlmIChzdHlsZSkge1xyXG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goZC5vcHRpb25GaWVsZHNSZWdFeCkpIHtcclxuICAgICAgcHJldmlld0RhdGEudmFsdWVzID0gW107XHJcbiAgICAgIHByZXZpZXdEYXRhLm11bHRpcGxlID0gJCgnW25hbWU9XCJtdWx0aXBsZVwiXScsIGZpZWxkKS5pcygnOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zIGxpJywgZmllbGQpLmVhY2goZnVuY3Rpb24oaSwgJG9wdGlvbikge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSB7fTtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAkKCcub3B0aW9uLXNlbGVjdGVkJywgJG9wdGlvbikuaXMoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJCgnLm9wdGlvbi12YWx1ZScsICRvcHRpb24pLnZhbCgpO1xyXG4gICAgICAgIG9wdGlvbi5sYWJlbCA9ICQoJy5vcHRpb24tbGFiZWwnLCAkb3B0aW9uKS52YWwoKTtcclxuICAgICAgICBwcmV2aWV3RGF0YS52YWx1ZXMucHVzaChvcHRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aWV3RGF0YSA9IHV0aWxzLnRyaW1PYmoocHJldmlld0RhdGEpO1xyXG5cclxuICAgIHByZXZpZXdEYXRhLmNsYXNzTmFtZSA9IF90aGlzLmNsYXNzTmFtZXMoZmllbGQsIHByZXZpZXdEYXRhKTtcclxuICAgICQoJy5mbGQtY2xhc3NOYW1lJywgZmllbGQpLnZhbChwcmV2aWV3RGF0YS5jbGFzc05hbWUpO1xyXG5cclxuICAgICRmaWVsZC5kYXRhKCdmaWVsZERhdGEnLCBwcmV2aWV3RGF0YSk7XHJcbiAgICBwcmV2aWV3ID0gdXRpbHMuZ2V0VGVtcGxhdGUocHJldmlld0RhdGEsIHRydWUpO1xyXG5cclxuICAgIGVtcHR5KCRwcmV2SG9sZGVyWzBdKTtcclxuICAgICRwcmV2SG9sZGVyWzBdLmFwcGVuZENoaWxkKHByZXZpZXcpO1xyXG4gICAgcHJldmlldy5kaXNwYXRjaEV2ZW50KGV2ZW50cy5maWVsZFJlbmRlcmVkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgYSBjdXN0b20gdG9vbHRpcCBmb3IgZGlzYWJsZWQgZmllbGRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxyXG4gICAqL1xyXG4gIGRpc2FibGVkVFQoc3RhZ2UpIHtcclxuICAgIGNvbnN0IG1vdmUgPSAoZSwgZWxlbSkgPT4ge1xyXG4gICAgICBjb25zdCBmaWVsZE9mZnNldCA9IGVsZW0uZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSBmaWVsZE9mZnNldC5sZWZ0IC0gMjE7XHJcbiAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSBmaWVsZE9mZnNldC50b3AgLSBlbGVtLnR0Lm9mZnNldEhlaWdodCAtIDEyO1xyXG4gICAgICBlbGVtLnR0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlzYWJsZWRGaWVsZHMgPSBzdGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcuZGlzYWJsZWQtZmllbGQnKTtcclxuICAgIHV0aWxzLmZvckVhY2goZGlzYWJsZWRGaWVsZHMsIGluZGV4ID0+IHtcclxuICAgICAgbGV0IGZpZWxkID0gZGlzYWJsZWRGaWVsZHNbaW5kZXhdO1xyXG4gICAgICBsZXQgdGl0bGUgPSBvcHRzLm1lc3NhZ2VzLmZpZWxkTm9uRWRpdGFibGU7XHJcblxyXG4gICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICBsZXQgdHQgPSB1dGlscy5tYXJrdXAoJ3AnLCB0aXRsZSwge2NsYXNzTmFtZTogJ2ZybWItdHQnfSk7XHJcbiAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodHQpO1xyXG4gICAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gbW92ZShlLCB7dHQsIGZpZWxkfSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb2Nlc3MgY2xhc3NOYW1lcyBmb3IgZmllbGRcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBwcmV2aWV3RGF0YVxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gY2xhc3NOYW1lc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZXMoZmllbGQsIHByZXZpZXdEYXRhKSB7XHJcbiAgICBsZXQgY2xhc3NOYW1lID0gZmllbGQucXVlcnlTZWxlY3RvcignLmZsZC1jbGFzc05hbWUnKTtcclxuICAgIGlmICghY2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBpO1xyXG4gICAgbGV0IHR5cGUgPSBwcmV2aWV3RGF0YS50eXBlO1xyXG4gICAgbGV0IHN0eWxlID0gcHJldmlld0RhdGEuc3R5bGU7XHJcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS52YWx1ZS5zcGxpdCgnICcpO1xyXG4gICAgbGV0IHR5cGVzID0ge1xyXG4gICAgICBidXR0b246ICdidG4nLFxyXG4gICAgICBzdWJtaXQ6ICdidG4nXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBwcmltYXJ5VHlwZSA9IHR5cGVzW3R5cGVdO1xyXG5cclxuICAgIGlmIChwcmltYXJ5VHlwZSkge1xyXG4gICAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChgKD86XnxcXHMpJHtwcmltYXJ5VHlwZX0tKC4qPykoPzpcXHN8JCkrYCwgJ2cnKTtcclxuICAgICAgICAgIGxldCBtYXRjaCA9IGNsYXNzZXNbaV0ubWF0Y2gocmUpO1xyXG4gICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzc2VzLnB1c2gocHJpbWFyeVR5cGUgKyAnLScgKyBzdHlsZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXZlcnNlIHRoZSBhcnJheSB0byBwdXQgY3VzdG9tIGNsYXNzZXMgYXQgZW5kLFxyXG4gICAgLy8gcmVtb3ZlIGFueSBkdXBsaWNhdGVzLCBjb252ZXJ0IHRvIHN0cmluZywgcmVtb3ZlIHdoaXRlc3BhY2VcclxuICAgIHJldHVybiB1dGlscy51bmlxdWUoY2xhc3Nlcykuam9pbignICcpLnRyaW0oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyBhbmQgb3BlbiBkaWFsb2dcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3ZlcmxheSBFeGlzdGluZyBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGlhbG9nICBFeGlzdGluZyBkaWFsb2dcclxuICAgKi9cclxuICBjbG9zZUNvbmZpcm0ob3ZlcmxheSwgZGlhbG9nKSB7XHJcbiAgICBpZiAoIW92ZXJsYXkpIHtcclxuICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tYnVpbGRlci1vdmVybGF5JylbMF07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRpYWxvZykge1xyXG4gICAgICBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItZGlhbG9nJylbMF07XHJcbiAgICB9XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIGRpYWxvZy5yZW1vdmUoKTtcclxuICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5tb2RhbENsb3NlZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsYXlvdXQgZGF0YSBiYXNlZCBvbiBjb250cm9sUG9zaXRpb24gb3B0aW9uXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBjb250cm9sUG9zaXRpb24gJ2xlZnQnIG9yICdyaWdodCdcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGxheW91dCBvYmplY3RcclxuICAgKi9cclxuICBlZGl0b3JMYXlvdXQoY29udHJvbFBvc2l0aW9uKSB7XHJcbiAgICBsZXQgbGF5b3V0TWFwID0ge1xyXG4gICAgICBsZWZ0OiB7XHJcbiAgICAgICAgc3RhZ2U6ICdwdWxsLXJpZ2h0JyxcclxuICAgICAgICBjb250cm9sczogJ3B1bGwtbGVmdCdcclxuICAgICAgfSxcclxuICAgICAgcmlnaHQ6IHtcclxuICAgICAgICBzdGFnZTogJ3B1bGwtbGVmdCcsXHJcbiAgICAgICAgY29udHJvbHM6ICdwdWxsLXJpZ2h0J1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBsYXlvdXRNYXBbY29udHJvbFBvc2l0aW9uXSA/IGxheW91dE1hcFtjb250cm9sUG9zaXRpb25dIDogJyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIG92ZXJsYXkgdG8gdGhlIHBhZ2UuIFVzZWQgZm9yIG1vZGFscy5cclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IERPTSBPYmplY3RcclxuICAgKi9cclxuICBzaG93T3ZlcmxheSgpIHtcclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBvdmVybGF5ID0gdXRpbHMubWFya3VwKCdkaXYnLCBudWxsLCB7XHJcbiAgICAgIGNsYXNzTmFtZTogJ2Zvcm0tYnVpbGRlci1vdmVybGF5J1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcblxyXG4gICAgb3ZlcmxheS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIF90aGlzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG92ZXJsYXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDdXN0b20gY29uZmlybWF0aW9uIGRpYWxvZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbWVzc2FnZSAgIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2dcclxuICAgKiBAcGFyYW0gIHtGdW5jfSAgeWVzQWN0aW9uIGNhbGxiYWNrIHRvIGZpcmUgaWYgdGhleSBjb25maXJtXHJcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gY29vcmRzICAgIGxvY2F0aW9uIHRvIHB1dCB0aGUgZGlhbG9nXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIEN1c3RvbSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIFJlZmVyZW5jZSB0byB0aGUgbW9kYWxcclxuICAgKi9cclxuICBjb25maXJtKG1lc3NhZ2UsIHllc0FjdGlvbiwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSB7XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgaTE4biA9IG1pMThuLmN1cnJlbnQ7XHJcbiAgICBsZXQgb3ZlcmxheSA9IF90aGlzLnNob3dPdmVybGF5KCk7XHJcbiAgICBsZXQgeWVzID0gbSgnYnV0dG9uJywgaTE4bi55ZXMsIHtcclxuICAgICAgY2xhc3NOYW1lOiAneWVzIGJ0biBidG4tc3VjY2VzcyBidG4tc20nXHJcbiAgICB9KTtcclxuICAgIGxldCBubyA9IG0oJ2J1dHRvbicsIGkxOG4ubm8sIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbm8gYnRuIGJ0bi1kYW5nZXIgYnRuLXNtJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgbm8ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBfdGhpcy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHllcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHllc0FjdGlvbigpO1xyXG4gICAgICBfdGhpcy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBidG5XcmFwID0gbSgnZGl2JywgW25vLCB5ZXNdLCB7Y2xhc3NOYW1lOiAnYnV0dG9uLXdyYXAnfSk7XHJcblxyXG4gICAgY2xhc3NOYW1lID0gJ2Zvcm0tYnVpbGRlci1kaWFsb2cgJyArIGNsYXNzTmFtZTtcclxuXHJcbiAgICBsZXQgbWluaU1vZGFsID0gbSgnZGl2JywgW21lc3NhZ2UsIGJ0bldyYXBdLCB7Y2xhc3NOYW1lfSk7XHJcbiAgICBpZiAoIWNvb3Jkcykge1xyXG4gICAgICBjb25zdCBkRSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgY29vcmRzID0ge1xyXG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChkRS5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgLyAyLFxyXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChkRS5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcclxuICAgICAgfTtcclxuICAgICAgbWluaU1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1pbmlNb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWluaU1vZGFsLnN0eWxlLmxlZnQgPSBjb29yZHMucGFnZVggKyAncHgnO1xyXG4gICAgbWluaU1vZGFsLnN0eWxlLnRvcCA9IGNvb3Jkcy5wYWdlWSArICdweCc7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtaW5pTW9kYWwpO1xyXG5cclxuICAgIHllcy5mb2N1cygpO1xyXG4gICAgcmV0dXJuIG1pbmlNb2RhbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBvcHVwIGRpYWxvZyB0aGUgZG9lcyBub3QgcmVxdWlyZSBjb25maXJtYXRpb24uXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfERPTXxBcnJheX0gIGNvbnRlbnRcclxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgZmFsc2UgaWYgbm8gY29vcmRzIGFyZSBwcm92aWRlZC4gV2l0aG91dCBjb29yZGluYXRlc1xyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgY2VudGVyIHNjcmVlbi5cclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWUgY2xhc3NuYW1lIHRvIGJlIGFkZGVkIHRvIHRoZSBkaWFsb2dcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgZG9tXHJcbiAgICovXHJcbiAgZGlhbG9nKGNvbnRlbnQsIGNvb3JkcyA9IGZhbHNlLCBjbGFzc05hbWUgPSAnJykge1xyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGNsaWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgbGV0IGNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICBfdGhpcy5zaG93T3ZlcmxheSgpO1xyXG5cclxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XHJcblxyXG4gICAgbGV0IG1pbmlNb2RhbCA9IHV0aWxzLm1hcmt1cCgnZGl2JywgY29udGVudCwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSk7XHJcbiAgICBpZiAoIWNvb3Jkcykge1xyXG4gICAgICBjb29yZHMgPSB7XHJcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXHJcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIC8gMlxyXG4gICAgICB9O1xyXG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWluaU1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBtaW5pTW9kYWwuc3R5bGUubGVmdCA9IGNvb3Jkcy5wYWdlWCArICdweCc7XHJcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1pbmlNb2RhbCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMubW9kYWxPcGVuZWQpO1xyXG5cclxuICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignZGF0YS1kaWFsb2cnKSAhPT0gLTEpIHtcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMudmlld0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtaW5pTW9kYWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25maXJtIGFsbCBmaWVsZHMgd2lsbCBiZSByZW1vdmVkIHRoZW4gcmVtb3ZlIHRoZW1cclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGUgY2xpY2sgZXZlbnQgb2JqZWN0XHJcbiAgICovXHJcbiAgY29uZmlybVJlbW92ZUFsbChlKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGZvcm1JRCA9IGUudGFyZ2V0LmlkLm1hdGNoKC9mcm1iLVxcZHsxM30vKVswXTtcclxuICAgIGxldCBzdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JRCk7XHJcbiAgICBsZXQgaTE4biA9IG1pMThuLmN1cnJlbnQ7XHJcbiAgICBsZXQgZmllbGRzID0gJCgnbGkuZm9ybS1maWVsZCcsIHN0YWdlKTtcclxuICAgIGxldCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBjb29yZHMgPSB7XHJcbiAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXHJcbiAgICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgIF90aGlzLmNvbmZpcm0oaTE4bi5jbGVhckFsbE1lc3NhZ2UsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIF90aGlzLnJlbW92ZUFsbEZpZWxkcy5jYWxsKF90aGlzLCBzdGFnZSk7XHJcbiAgICAgICAgY29uZmlnLm9wdHMubm90aWZ5LnN1Y2Nlc3MoaTE4bi5hbGxGaWVsZHNSZW1vdmVkKTtcclxuICAgICAgICBjb25maWcub3B0cy5vbkNsZWFyQWxsKCk7XHJcbiAgICAgIH0sIGNvb3Jkcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfdGhpcy5kaWFsb2coaTE4bi5ub0ZpZWxkc1RvQ2xlYXIsIGNvb3Jkcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCBmaWVsZHMgZnJvbSB0aGUgZm9ybVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYW5pbWF0ZSB3aGV0aGVyIHRvIGFuaW1hdGUgb3Igbm90XHJcbiAgICogQHJldHVybiB7dm9pZH1cclxuICAgKi9cclxuICByZW1vdmVBbGxGaWVsZHMoc3RhZ2UsIGFuaW1hdGUgPSB0cnVlKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGkxOG4gPSBtaTE4bi5jdXJyZW50O1xyXG4gICAgbGV0IG9wdHMgPSBjb25maWcub3B0cztcclxuICAgIGxldCBmaWVsZHMgPSBzdGFnZS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5mb3JtLWZpZWxkJyk7XHJcbiAgICBsZXQgbWFya0VtcHR5QXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcclxuICAgICAgbWFya0VtcHR5QXJyYXkucHVzaCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0cy5hcHBlbmQpIHtcclxuICAgICAgbWFya0VtcHR5QXJyYXkucHVzaCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW1hcmtFbXB0eUFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xyXG4gICAgICBzdGFnZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XHJcbiAgICAgIHN0YWdlLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb250ZW50ID0gaTE4bi5nZXRTdGFydGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhbmltYXRlKSB7XHJcbiAgICAgIHN0YWdlLmNsYXNzTGlzdC5hZGQoJ3JlbW92aW5nJyk7XHJcbiAgICAgIGxldCBvdXRlckhlaWdodCA9IDA7XHJcbiAgICAgIHV0aWxzLmZvckVhY2goZmllbGRzLCBpbmRleCA9PiB7XHJcbiAgICAgICAgbGV0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcclxuICAgICAgICBvdXRlckhlaWdodCArPSBmaWVsZC5vZmZzZXRIZWlnaHQgKyAzXHJcbiAgICAgIH0pO1xyXG4gICAgICBmaWVsZHNbMF0uc3R5bGUubWFyZ2luVG9wID0gYCR7LW91dGVySGVpZ2h0fXB4YDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZW1wdHkoc3RhZ2UpLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92aW5nJyk7XHJcbiAgICAgICAgX3RoaXMuc2F2ZShzdGFnZSk7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbXB0eShzdGFnZSk7XHJcbiAgICAgIF90aGlzLnNhdmUoc3RhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdXNlciByZS1vcmRlcnMgdGhlIGVsZW1lbnRzIHRoZWlyIG9yZGVyIHNob3VsZCBiZSBzYXZlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkY2JVTCBvdXIgbGlzdCBvZiBlbGVtZW50c1xyXG4gICAqL1xyXG4gIHNldEZpZWxkT3JkZXIoJGNiVUwpIHtcclxuICAgIGlmICghY29uZmlnLm9wdHMuc29ydGFibGVDb250cm9scykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpZWxkT3JkZXIgPSB7fTtcclxuXHJcbiAgICAkY2JVTC5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgZmllbGRPcmRlcltpbmRleF0gPSAkKGVsZW1lbnQpLmRhdGEoJ3R5cGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2ZpZWxkT3JkZXInLCB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoZmllbGRPcmRlcikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVvcmRlciB0aGUgY29udHJvbHMgaWYgdGhlIHVzZXIgaGFzIHByZXZpb3VzbHkgb3JkZXJlZCB0aGVtLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7QXJyYXl9IGZybWJGaWVsZHNcclxuICAgKiBAcmV0dXJuIHtBcnJheX0gb3JkZXJlZCBmaWVsZHNcclxuICAgKi9cclxuICBvcmRlckZpZWxkcyhmcm1iRmllbGRzKSB7XHJcbiAgICBjb25zdCBvcHRzID0gY29uZmlnLm9wdHM7XHJcbiAgICBsZXQgZmllbGRPcmRlciA9IGZhbHNlO1xyXG4gICAgbGV0IG5ld09yZGVyRmllbGRzID0gW107XHJcblxyXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICBpZiAob3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XHJcbiAgICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdmaWVsZE9yZGVyJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpZWxkT3JkZXInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmllbGRPcmRlcikge1xyXG4gICAgICBsZXQgY29udHJvbE9yZGVyID0gb3B0cy5jb250cm9sT3JkZXIuY29uY2F0KGZybWJGaWVsZHMubWFwKGZpZWxkID0+XHJcbiAgICAgICAgZmllbGQuYXR0cnMudHlwZSkpO1xyXG4gICAgICBmaWVsZE9yZGVyID0gdXRpbHMudW5pcXVlKGNvbnRyb2xPcmRlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWVsZE9yZGVyID0gd2luZG93LkpTT04ucGFyc2UoZmllbGRPcmRlcik7XHJcbiAgICAgIGZpZWxkT3JkZXIgPSBPYmplY3Qua2V5cyhmaWVsZE9yZGVyKS5tYXAoZnVuY3Rpb24oaSkge1xyXG4gICAgICAgIHJldHVybiBmaWVsZE9yZGVyW2ldO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmllbGRPcmRlci5mb3JFYWNoKChmaWVsZFR5cGUpID0+IHtcclxuICAgICAgbGV0IGZpZWxkID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQuYXR0cnMudHlwZSA9PT0gZmllbGRUeXBlO1xyXG4gICAgICB9KVswXTtcclxuICAgICAgbmV3T3JkZXJGaWVsZHMucHVzaChmaWVsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3T3JkZXJGaWVsZHMuZmlsdGVyKEJvb2xlYW4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgZmllbGRzIGJlaW5nIGVkaXRpbmdcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXHJcbiAgICovXHJcbiAgY2xvc2VBbGxFZGl0KCkge1xyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc3QgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgX3RoaXMuZC5zdGFnZSk7XHJcbiAgICBjb25zdCB0b2dnbGVCdG5zID0gJCgnLnRvZ2dsZS1mb3JtJywgX3RoaXMuZC5zdGFnZSk7XHJcbiAgICBjb25zdCBlZGl0UGFuZWxzID0gJCgnLmZybS1ob2xkZXInLCBmaWVsZHMpO1xyXG5cclxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgIGZpZWxkcy5yZW1vdmVDbGFzcygnZWRpdGluZycpO1xyXG4gICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGRzKS5zaG93KCk7XHJcbiAgICBlZGl0UGFuZWxzLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgdGhlIGVkaXQgbW9kZSBmb3IgdGhlIGdpdmVuIGZpZWxkXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZElkXHJcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gYW5pbWF0ZVxyXG4gICAqL1xyXG4gIHRvZ2dsZUVkaXQoZmllbGRJZCwgYW5pbWF0ZSA9IHRydWUpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XHJcbiAgICBjb25zdCB0b2dnbGVCdG4gPSAkKCcudG9nZ2xlLWZvcm0nLCBmaWVsZCk7XHJcbiAgICBjb25zdCBlZGl0UGFuZWwgPSAkKCcuZnJtLWhvbGRlcicsIGZpZWxkKTtcclxuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcclxuICAgIHRvZ2dsZUJ0bi50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgaWYgKGFuaW1hdGUpIHtcclxuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnNsaWRlVG9nZ2xlKDI1MCk7XHJcbiAgICAgIGVkaXRQYW5lbC5zbGlkZVRvZ2dsZSgyNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnRvZ2dsZSgpO1xyXG4gICAgICBlZGl0UGFuZWwudG9nZ2xlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXcoJChmaWVsZCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcclxuICAgKi9cclxuICBzdGlja3lDb250cm9scygpIHtcclxuICAgIGxldCBkID0gdGhpcy5kO1xyXG4gICAgY29uc3QgJGNiV3JhcCA9ICQoZC5jb250cm9scykucGFyZW50KCk7XHJcbiAgICBjb25zdCAkc3RhZ2VXcmFwID0gJChkLnN0YWdlKS5wYXJlbnQoKTtcclxuICAgIGNvbnN0IGNiV2lkdGggPSAkY2JXcmFwLndpZHRoKCk7XHJcbiAgICBjb25zdCBjYlBvc2l0aW9uID0gZC5jb250cm9scy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gJChldnQudGFyZ2V0KS5zY3JvbGxUb3AoKTtcclxuICAgICAgY29uc3Qgb2Zmc2V0RGVmYXVsdHMgPSB7XHJcbiAgICAgICAgdG9wOiA1LFxyXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nLFxyXG4gICAgICAgIHJpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgbGVmdDogY2JQb3NpdGlvbi5sZWZ0XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgb2Zmc2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Zmc2V0RGVmYXVsdHMsIGNvbmZpZy5vcHRzLnN0aWNreUNvbnRyb2xzLm9mZnNldCk7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsVG9wID4gJHN0YWdlV3JhcC5vZmZzZXQoKS50b3ApIHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgd2lkdGg6IGNiV2lkdGhcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjYlN0eWxlID0gT2JqZWN0LmFzc2lnbihzdHlsZSwgb2Zmc2V0KTtcclxuXHJcbiAgICAgICAgbGV0IGNiT2Zmc2V0ID0gJGNiV3JhcC5vZmZzZXQoKTtcclxuICAgICAgICBsZXQgc3RhZ2VPZmZzZXQgPSAkc3RhZ2VXcmFwLm9mZnNldCgpO1xyXG4gICAgICAgIGxldCBjYkJvdHRvbSA9IGNiT2Zmc2V0LnRvcCArICRjYldyYXAuaGVpZ2h0KCk7XHJcbiAgICAgICAgbGV0IHN0YWdlQm90dG9tID0gc3RhZ2VPZmZzZXQudG9wICsgJHN0YWdlV3JhcC5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGNiQm90dG9tID4gc3RhZ2VCb3R0b20gJiYgKGNiT2Zmc2V0LnRvcCAhPT0gc3RhZ2VPZmZzZXQudG9wKSkge1xyXG4gICAgICAgICAgJGNiV3JhcC5jc3Moe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAnYXV0bycsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2JCb3R0b20gPCBzdGFnZUJvdHRvbSB8fCAoY2JCb3R0b20gPT09IHN0YWdlQm90dG9tICYmIGNiT2Zmc2V0LnRvcCA+IHNjcm9sbFRvcCkpIHtcclxuICAgICAgICAgICRjYldyYXAuY3NzKGNiU3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkLmNvbnRyb2xzLnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW4gYSBkaWFsb2cgd2l0aCB0aGUgZm9ybSdzIGRhdGFcclxuICAgKi9cclxuICBzaG93RGF0YShlKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSB1dGlscy5lc2NhcGVIdG1sKGRhdGEuZm9ybURhdGEpO1xyXG4gICAgY29uc3QgY29kZSA9IG0oJ2NvZGUnLCBmb3JtRGF0YSwge1xyXG4gICAgICBjbGFzc05hbWU6IGBmb3JtRGF0YS0ke2NvbmZpZy5vcHRzLmRhdGFUeXBlfWBcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nKG0oJ3ByZScsIGNvZGUpLCBudWxsLCAnZGF0YS1kaWFsb2cnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIGZpZWxkIGZyb20gdGhlIHN0YWdlXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgZmllbGRJRCBJRCBvZiB0aGUgZmllbGQgdG8gYmUgcmVtb3ZlZFxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IGZpZWxkUmVtb3ZlZCByZXR1cm5zIHRydWUgaWYgZmllbGQgaXMgcmVtb3ZlZFxyXG4gICAqL1xyXG4gIHJlbW92ZUZpZWxkKGZpZWxkSUQpIHtcclxuICAgIGxldCBmaWVsZFJlbW92ZWQgPSBmYWxzZTtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zdCBmb3JtID0gdGhpcy5kLnN0YWdlO1xyXG4gICAgY29uc3QgZmllbGRzID0gZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWZpZWxkJyk7XHJcblxyXG4gICAgaWYgKCFmaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignTm8gZmllbGRzIHRvIHJlbW92ZScpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFmaWVsZElEKSB7XHJcbiAgICAgIGxldCBhdmFpbGFibGVJZHMgPSBbXS5zbGljZS5jYWxsKGZpZWxkcykubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmaWVsZC5pZDtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUud2FybignZmllbGRJRCByZXF1aXJlZCB0byByZW1vdmUgc3BlY2lmaWMgZmllbGRzLiBSZW1vdmluZyBsYXN0IGZpZWxkIHNpbmNlIG5vIElEIHdhcyBzdXBwbGllZC4nKTtcclxuICAgICAgY29uc29sZS53YXJuKCdBdmFpbGFibGUgSURzOiAnICsgYXZhaWxhYmxlSWRzLmpvaW4oJywgJykpO1xyXG4gICAgICBmaWVsZElEID0gZm9ybS5sYXN0Q2hpbGQuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElEKTtcclxuICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xyXG4gICAgaWYgKCFmaWVsZCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0ZpZWxkIG5vdCBmb3VuZCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJGZpZWxkLnNsaWRlVXAoMjUwLCBmdW5jdGlvbigpIHtcclxuICAgICAgJGZpZWxkLnJlbW92ZUNsYXNzKCdkZWxldGluZycpO1xyXG4gICAgICAkZmllbGQucmVtb3ZlKCk7XHJcbiAgICAgIGZpZWxkUmVtb3ZlZCA9IHRydWU7XHJcbiAgICAgIF90aGlzLnNhdmUoKTtcclxuICAgICAgaWYgKCFmb3JtLmNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IHN0YWdlV3JhcCA9IGZvcm0ucGFyZW50RWxlbWVudDtcclxuICAgICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcclxuICAgICAgICBzdGFnZVdyYXAuZGF0YXNldC5jb250ZW50ID0gbWkxOG4uY3VycmVudC5nZXRTdGFydGVkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5maWVsZFJlbW92ZWQpO1xyXG4gICAgcmV0dXJuIGZpZWxkUmVtb3ZlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIG1hcmt1cCBmb3IgZm9ybSBhY3Rpb24gYnV0dG9uc1xyXG4gICAqIEBwYXJhbSAge09iamVjdH0gYnV0dG9uRGF0YVxyXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIGVsZW1lbnQgZm9yIGFjdGlvbiBidXR0b25cclxuICAgKi9cclxuICBwcm9jZXNzQWN0aW9uQnV0dG9ucyhidXR0b25EYXRhKSB7XHJcbiAgICBsZXQge2xhYmVsLCBldmVudHMsIC4uLmF0dHJzfSA9IGJ1dHRvbkRhdGE7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgIGlmICghbGFiZWwpIHtcclxuICAgICAgaWYgKGF0dHJzLmlkKSB7XHJcbiAgICAgICAgbGFiZWwgPSBtaTE4bi5jdXJyZW50W2F0dHJzLmlkXSB8fCB1dGlscy5jYXBpdGFsaXplKGF0dHJzLmlkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYWJlbCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYWJlbCA9IG1pMThuLmN1cnJlbnRbbGFiZWxdIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYXR0cnMuaWQpIHtcclxuICAgICAgYXR0cnMuaWQgPSBgJHtkYXRhLmZvcm1JRH0tYWN0aW9uLSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEwMDApfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhdHRycy5pZCA9IGAke2RhdGEuZm9ybUlEfS0ke2F0dHJzLmlkfS1hY3Rpb25gO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IG0oJ2J1dHRvbicsIGxhYmVsLCBhdHRycyk7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBmb3IgKGxldCBldmVudCBpbiBldmVudHMpIHtcclxuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xyXG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcm9zcyBsaW5rIHN1YnR5cGVzIGFuZCBkZWZpbmUgbWFya3VwIGNvbmZpZ1xyXG4gICAqIEBwYXJhbSAge0FycmF5fSBzdWJ0eXBlT3B0c1xyXG4gICAqIEByZXR1cm4ge0FycmF5fSBzdWJ0eXBlc1xyXG4gICAqL1xyXG4gIHByb2Nlc3NTdWJ0eXBlcyhzdWJ0eXBlT3B0cykge1xyXG4gICAgbGV0IHN1YnR5cGVzID0ge307XHJcbiAgICBjb25zdCBzdWJ0eXBlRm9ybWF0ID0gc3VidHlwZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoc3VidHlwZSksXHJcbiAgICAgICAgICB2YWx1ZTogc3VidHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25maWcuc3VidHlwZXMgPSB1dGlscy5tZXJnZShkZWZhdWx0U3VidHlwZXMsIHN1YnR5cGVPcHRzKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHN1YnR5cGUgaW4gY29uZmlnLnN1YnR5cGVzKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5zdWJ0eXBlcy5oYXNPd25Qcm9wZXJ0eShzdWJ0eXBlKSkge1xyXG4gICAgICAgICAgc3VidHlwZXNbc3VidHlwZV0gPSBjb25maWcuc3VidHlwZXNbc3VidHlwZV0ubWFwKHN1YnR5cGVGb3JtYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN1YnR5cGVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgc3RhZ2UgYW5kIGNvbnRyb2xzIGRvbSBlbGVtZW50c1xyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZm9ybUlEIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBlZGl0b3JVSShmb3JtSUQpIHtcclxuICAgIGxldCBkID0gdGhpcy5kO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICBkLnN0YWdlID0gbSgndWwnLCBudWxsLCB7XHJcbiAgICAgICAgaWQ6IGRhdGEuZm9ybUlELFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ2ZybWInXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBkcmFnZ2FibGUgZmllbGRzIGZvciBmb3JtQnVpbGRlclxyXG4gICAgZC5jb250cm9scyA9IG0oJ3VsJywgbnVsbCwge1xyXG4gICAgICBpZDogYCR7ZGF0YS5mb3JtSUR9LWNvbnRyb2wtYm94YCxcclxuICAgICAgY2xhc3NOYW1lOiAnZnJtYi1jb250cm9sJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9jZXNzIHVzZXIgb3B0aW9ucyBmb3IgYWN0aW9uQnV0dG9uc1xyXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xyXG4gICAqIEByZXR1cm4ge09iamVjdH0gcHJvY2Vzc2VkT3B0aW9uc1xyXG4gICAqL1xyXG4gIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIGxldCB7ZmllbGRzID0gW10sIHRlbXBsYXRlcywgLi4ub3B0c30gPSBvcHRpb25zO1xyXG4gICAgbGV0IGFjdGlvbkJ1dHRvbnMgPSBbe1xyXG4gICAgICBpZDogJ2NsZWFyJyxcclxuICAgICAgY2xhc3NOYW1lOiAnY2xlYXItYWxsIGJ0biBidG4tZGFuZ2VyJyxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgY2xpY2s6IF90aGlzLmNvbmZpcm1SZW1vdmVBbGwuYmluZChfdGhpcylcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBsYWJlbDogJ3ZpZXdKU09OJyxcclxuICAgICAgaWQ6ICdkYXRhJyxcclxuICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1kZWZhdWx0JyxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgY2xpY2s6IF90aGlzLnNob3dEYXRhLmJpbmQoX3RoaXMpXHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICdzYXZlJyxcclxuICAgICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tcHJpbWFyeSBzYXZlLXRlbXBsYXRlJyxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgY2xpY2s6IGV2dCA9PiB7XHJcbiAgICAgICAgICBfdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgICBjb25maWcub3B0cy5vblNhdmUoZXZ0LCBfdGhpcy5kYXRhLmZvcm1EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1dO1xyXG5cclxuICAgIGxldCBkZWZhdWx0RmllbGRzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnYXV0b2NvbXBsZXRlJyksXHJcbiAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgIHR5cGU6ICdhdXRvY29tcGxldGUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnYnV0dG9uJyksXHJcbiAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2NoZWNrYm94R3JvdXAnKSxcclxuICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94LWdyb3VwJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdkYXRlRmllbGQnKSxcclxuICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgdHlwZTogJ2RhdGUnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2ZpbGVVcGxvYWQnKSxcclxuICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgdHlwZTogJ2ZpbGUnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ2hlYWRlcicpLFxyXG4gICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICB0eXBlOiAnaGVhZGVyJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdoaWRkZW4nKSxcclxuICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnbnVtYmVyJyksXHJcbiAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ3BhcmFncmFwaCcpLFxyXG4gICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdyYWRpb0dyb3VwJyksXHJcbiAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCcsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnc2VsZWN0JyksXHJcbiAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ3RleHQnKSxcclxuICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ3RleHRBcmVhJyksXHJcbiAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgb3B0cy5maWVsZHMgPSBmaWVsZHMuY29uY2F0KGRlZmF1bHRGaWVsZHMpO1xyXG4gICAgY29uZmlnLm9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB7YWN0aW9uQnV0dG9ucywgdGVtcGxhdGVzLCBmaWVsZHN9LCBvcHRzKTtcclxuICAgIGxldCB1c2VyVGVtcGxhdGVzID0gT2JqZWN0LmtleXMoY29uZmlnLm9wdHMudGVtcGxhdGVzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgcmV0dXJuIFtrZXksIGNvbmZpZy5vcHRzLnRlbXBsYXRlc1trZXldXTtcclxuICAgIH0pO1xyXG4gICAgdXRpbHMudGVtcGxhdGVzID0gdXRpbHMudGVtcGxhdGVzLmNvbmNhdCh1c2VyVGVtcGxhdGVzKTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnLm9wdHM7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gZW5kIGNsYXNzXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEhlbHBlcnM7XHJcbiIsIi8qKlxyXG4gKiBQb2x5ZmlsbHMgZm9yIG9sZGVyIGJyb3dzZXJzIGFuZCBhZGRlZCBmdW5jdGlvbmFsaXR5XHJcbiAqIEByZXR1cm4ge3ZvaWR9XHJcbiAqL1xyXG5mdW5jdGlvbiBwb2x5ZmlsbHMoKSB7XHJcbiAgLy8gRWxlbWVudC5yZW1vdmUoKSBwb2x5ZmlsbFxyXG4gIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG4gICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBFdmVudCBwb2x5ZmlsbFxyXG4gIGlmICh0eXBlb2YgRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgd2luZG93LkV2ZW50ID0gZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KGV2dCwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgICB9O1xyXG4gICAgfSkoKTtcclxuICB9XHJcblxyXG4gIC8vIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcclxuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAndXNlIHN0cmljdCc7XHJcbiAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YXJnZXQgPSBPYmplY3QodGFyZ2V0KTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBsZXQgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcclxuICAgICAgICBpZiAoc291cmNlICE9IG51bGwpIHtcclxuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcclxuICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIFJlZmVyZW5jZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS40LjQuMThcclxuICBpZiAoIUFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgIGxldCBULCBrO1xyXG4gICAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGhpcyBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IE8gPSBPYmplY3QodGhpcyk7XHJcbiAgICAgIGxldCBsZW4gPSBPLmxlbmd0aCA+Pj4gMDtcclxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgVCA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgfVxyXG4gICAgICBrID0gMDtcclxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcclxuICAgICAgICBsZXQga1ZhbHVlO1xyXG4gICAgICAgIGlmIChrIGluIE8pIHtcclxuICAgICAgICAgIGtWYWx1ZSA9IE9ba107XHJcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKFQsIGtWYWx1ZSwgaywgTyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGsrKztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb2x5ZmlsbHMoKTtcclxuIiwiaW1wb3J0IHtkZWZhdWx0U3VidHlwZXMsIGZpbHRlcn0gZnJvbSAnLi9kb20nO1xyXG5cclxuLyoqXHJcbiAqIENyb3NzIGZpbGUgdXRpbGl0aWVzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzLFxyXG4gKiBzb3J0aW5nIGFuZCBvdGhlciBmdW4gc3R1ZmZcclxuICogQHJldHVybiB7T2JqZWN0fSB1dGlsc1xyXG4gKi9cclxuLy8gZnVuY3Rpb24gdXRpbHMoKSB7XHJcbiAgY29uc3QgdXRpbHMgPSB7fTtcclxuICB3aW5kb3cuZmJMb2FkZWQgPSB7XHJcbiAgICBqczogW10sXHJcbiAgICBjc3M6IFtdXHJcbiAgfTtcclxuICB3aW5kb3cuZmJFZGl0b3JzID0ge1xyXG4gICAgcXVpbGw6IHt9LFxyXG4gICAgdGlueW1jZToge31cclxuICB9O1xyXG5cclxuICAvLyBjbGVhbmVyIHN5bnRheCBmb3IgdGVzdGluZyBpbmRleE9mIGVsZW1lbnRcclxuICB1dGlscy5pbkFycmF5ID0gZnVuY3Rpb24obmVlZGxlLCBoYXlzdGFjaykge1xyXG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTE7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xyXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMge2F0dHJOYW1lOiBhdHRyVmFsdWV9XHJcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICBPYmplY3QgdHJpbW1lZCBvZiBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcclxuICAgKi9cclxuICB1dGlscy50cmltT2JqID0gZnVuY3Rpb24oYXR0cnMpIHtcclxuICAgIGxldCB4bWxSZW1vdmUgPSBbXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgJycsXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgICAnZmFsc2UnXHJcbiAgICBdO1xyXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xyXG4gICAgICBpZiAodXRpbHMuaW5BcnJheShhdHRyc1thdHRyXSwgeG1sUmVtb3ZlKSkge1xyXG4gICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGF0dHJzW2F0dHJdKSkge1xyXG4gICAgICAgIGlmICghYXR0cnNbYXR0cl0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF0dHJzO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRlc3QgaWYgYXR0cmlidXRlIGlzIGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGVcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIHV0aWxzLnZhbGlkQXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcclxuICAgIGxldCBpbnZhbGlkID0gW1xyXG4gICAgICAndmFsdWVzJyxcclxuICAgICAgJ2VuYWJsZU90aGVyJyxcclxuICAgICAgJ290aGVyJyxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgLy8gJ3N0eWxlJyxcclxuICAgICAgJ3N1YnR5cGUnXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuICF1dGlscy5pbkFycmF5KGF0dHIsIGludmFsaWQpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgYW4gYXR0cnMgb2JqZWN0IGludG8gYSBzdHJpbmdcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgb2JqZWN0IG9mIGF0dHJpYnV0ZXMgZm9yIG1hcmt1cFxyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICB1dGlscy5hdHRyU3RyaW5nID0gZnVuY3Rpb24oYXR0cnMpIHtcclxuICAgIGxldCBhdHRyaWJ1dGVzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xyXG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikgJiYgdXRpbHMudmFsaWRBdHRyKGF0dHIpKSB7XHJcbiAgICAgICAgYXR0ciA9IHV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcclxuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0ci5uYW1lICsgYXR0ci52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhdHRyaWJ1dGVzLmpvaW4oJyAnKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0IGF0dHJpYnV0ZXMgdG8gbWFya3VwIHNhZmUgc3RyaW5nc1xyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIGF0dHJpYnV0ZSB2YWx1ZVxyXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAge2F0dHJOYW1lOiBhdHRyVmFsdWV9XHJcbiAgICovXHJcbiAgdXRpbHMuc2FmZUF0dHIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xyXG4gICAgbmFtZSA9IHV0aWxzLnNhZmVBdHRyTmFtZShuYW1lKTtcclxuICAgIGxldCB2YWxTdHJpbmc7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHZhbFN0cmluZyA9IHV0aWxzLmVzY2FwZUF0dHIodmFsdWUuam9pbignICcpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbFN0cmluZyA9IHV0aWxzLmVzY2FwZUF0dHIodmFsdWUucmVwbGFjZSgnLCcsICcgJykudHJpbSgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlID0gdmFsdWUgPyBgPVwiJHt2YWxTdHJpbmd9XCJgIDogJyc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB2YWx1ZVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB1dGlscy5zYWZlQXR0ck5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICBsZXQgc2FmZUF0dHIgPSB7XHJcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJ1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc2FmZUF0dHJbbmFtZV0gfHwgdXRpbHMuaHlwaGVuQ2FzZShuYW1lKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0IHN0cmluZ3MgaW50byBsb3dlcmNhc2UtaHlwaGVuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cclxuICAgKi9cclxuICB1dGlscy5oeXBoZW5DYXNlID0gKHN0cikgPT4ge1xyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1teXFx3XFxzXFwtXS9naSwgJycpO1xyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHtcclxuICAgICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL14tKy9nLCAnJyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogY29udmVydCBhIGh5cGhlbmF0ZWQgc3RyaW5nIHRvIGNhbWVsQ2FzZVxyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAqL1xyXG4gIHV0aWxzLmNhbWVsQ2FzZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShbYS16XSkvZywgKG0sIHcpID0+XHJcbiAgICB3LnRvVXBwZXJDYXNlKCkpO1xyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgY29udGVudCB0eXBlXHJcbiAgICogQHBhcmFtICB7Tm9kZSB8IFN0cmluZyB8IEFycmF5IHwgT2JqZWN0fSBjb250ZW50XHJcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSBmb3IgbWFwcGluZ1xyXG4gICAqL1xyXG4gIHV0aWxzLmNvbnRlbnRUeXBlID0gY29udGVudCA9PiB7XHJcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBjb250ZW50O1xyXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0eXBlID0gJ25vZGUnO1xyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XHJcbiAgICAgIHR5cGUgPSAnYXJyYXknO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0eXBlO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgZXZlbnRzIHRvIGFuIGVsZW1lbnRcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgRE9NIGVsZW1lbnRcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50cyAgb2JqZWN0IGZ1bGwgb2YgZXZlbnRzIGVnLiB7Y2xpY2s6IGV2dCA9PiBjYWxsYmFja31cclxuICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAqL1xyXG4gIHV0aWxzLmJpbmRFdmVudHMgPSAoZWxlbWVudCwgZXZlbnRzKSA9PiB7XHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xyXG4gICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XHJcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgYSB1bmlxdWUgbmFtZSBhdHRyaWJ1dGVcclxuICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIG5hbWVcclxuICovXHJcbiAgdXRpbHMubmFtZUF0dHIgPSBmdW5jdGlvbihmaWVsZCkge1xyXG4gICAgbGV0IGVwb2NoID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBsZXQgcHJlZml4ID0gZmllbGQudHlwZSB8fCB1dGlscy5oeXBoZW5DYXNlKGZpZWxkLmxhYmVsKTtcclxuICAgIHJldHVybiBwcmVmaXggKyAnLScgKyBlcG9jaDtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgd3JhcHBlciB3aGVyZSBuZWVkZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgIHRhZ1xyXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheXxPYmplY3R9IGNvbnRlbnQgd2Ugd3JhcCB0aGlzXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgYXR0cnNcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IERPTSBFbGVtZW50XHJcbiAgICovXHJcbiAgdXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJpYnV0ZXMgPSB7fSkge1xyXG4gICAgbGV0IGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XHJcbiAgICBsZXQge2V2ZW50cywgLi4uYXR0cnN9ID0gYXR0cmlidXRlcztcclxuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICAgIGNvbnN0IGFwcGVuZENvbnRlbnQgPSB7XHJcbiAgICAgIHN0cmluZzogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICBmaWVsZC5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgICAgfSxcclxuICAgICAgb2JqZWN0OiAoY29uZmlnKSA9PiB7XHJcbiAgICAgICAgbGV0IHt0YWcsIGNvbnRlbnQsIC4uLmRhdGF9ID0gY29uZmlnO1xyXG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZCh1dGlscy5tYXJrdXAodGFnLCBjb250ZW50LCBkYXRhKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG5vZGU6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgICB9LFxyXG4gICAgICBhcnJheTogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudFtpXSk7XHJcbiAgICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uOiBjb250ZW50ID0+IHtcclxuICAgICAgICBjb250ZW50ID0gY29udGVudCgpO1xyXG4gICAgICAgIGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XHJcbiAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHVuZGVmaW5lZDogKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IodGFnLCBjb250ZW50LCBhdHRyaWJ1dGVzKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xyXG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHV0aWxzLnNhZmVBdHRyTmFtZShhdHRyKTtcclxuICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbYXR0cl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0uY2FsbCh0aGlzLCBjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB1dGlscy5iaW5kRXZlbnRzKGZpZWxkLCBldmVudHMpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZDtcclxuICB9O1xyXG4gIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgaHRtbCBlbGVtZW50IGF0dHJpYnV0ZXMgdG8ga2V5L3ZhbHVlIG9iamVjdFxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbSBET00gZWxlbWVudFxyXG4gICAqIEByZXR1cm4ge09iamVjdH0gZXg6IHthdHRyTmFtZTogYXR0clZhbHVlfVxyXG4gICAqL1xyXG4gIHV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XHJcbiAgICBsZXQgYXR0cnMgPSBlbGVtLmF0dHJpYnV0ZXM7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgdXRpbHMuZm9yRWFjaChhdHRycywgYXR0ciA9PiB7XHJcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XHJcbiAgICAgIGlmIChhdHRyVmFsLm1hdGNoKC9mYWxzZXx0cnVlL2cpKSB7XHJcbiAgICAgICAgYXR0clZhbCA9IChhdHRyVmFsID09PSAndHJ1ZScpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xyXG4gICAgICAgIGF0dHJWYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhdHRyVmFsKSB7XHJcbiAgICAgICAgZGF0YVthdHRyc1thdHRyXS5uYW1lXSA9IGF0dHJWYWw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgZmllbGQgb3B0aW9ucyB0byBvcHRpb25EYXRhXHJcbiAgICogQHBhcmFtICB7Tm9kZUxpc3R9IG9wdGlvbnMgIERPTSBlbGVtZW50c1xyXG4gICAqIEByZXR1cm4ge0FycmF5fSBvcHRpb25EYXRhIGFycmF5XHJcbiAgICovXHJcbiAgdXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgbGV0IG9wdGlvbkRhdGEgPSB7fTtcclxuICAgIGxldCBkYXRhID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG9wdGlvbkRhdGEgPSB1dGlscy5wYXJzZUF0dHJzKG9wdGlvbnNbaV0pO1xyXG4gICAgICBvcHRpb25EYXRhLmxhYmVsID0gb3B0aW9uc1tpXS50ZXh0Q29udGVudDtcclxuICAgICAgZGF0YS5wdXNoKG9wdGlvbkRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxyXG4gICAqIEBwYXJhbSAge1N0cmluZ30geG1sU3RyaW5nXHJcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgZm9ybURhdGEgYXJyYXlcclxuICAgKi9cclxuICB1dGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xyXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcclxuICAgIGxldCB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbFN0cmluZywgJ3RleHQveG1sJyk7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcclxuXHJcbiAgICBpZiAoeG1sKSB7XHJcbiAgICAgIGxldCBmaWVsZHMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpZWxkJyk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IHV0aWxzLnBhcnNlQXR0cnMoZmllbGRzW2ldKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gZmllbGRzW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSB1dGlscy5wYXJzZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgZXNjYXBlZCBIVE1MIGludG8gdXNhYmxlIEhUTUxcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgZXNjYXBlZCBIVE1MXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIHBhcnNlZCBIVE1MXHJcbiAgICovXHJcbiAgdXRpbHMucGFyc2VkSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcclxuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGVzY2FwZUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEVzY2FwZSBtYXJrdXAgc28gaXQgY2FuIGJlIGRpc3BsYXllZCByYXRoZXIgdGhhbiByZW5kZXJlZFxyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBtYXJrdXBcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgZXNjYXBlZCBodG1sXHJcbiAgICovXHJcbiAgdXRpbHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcclxuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQgPSBodG1sO1xyXG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gIH07XHJcblxyXG4gIC8vIEVzY2FwZSBhbiBhdHRyaWJ1dGVcclxuICB1dGlscy5lc2NhcGVBdHRyID0gZnVuY3Rpb24oc3RyKSB7XHJcbiAgICBsZXQgbWF0Y2ggPSB7XHJcbiAgICAgICdcIic6ICcmcXVvdDsnLFxyXG4gICAgICAnJic6ICcmYW1wOycsXHJcbiAgICAgICc8JzogJyZsdDsnLFxyXG4gICAgICAnPic6ICcmZ3Q7J1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXBsYWNlVGFnID0gdGFnID0+IG1hdGNoW3RhZ10gfHwgdGFnO1xyXG5cclxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpID8gc3RyLnJlcGxhY2UoL1tcIiY8Pl0vZywgcmVwbGFjZVRhZykgOiBzdHI7XHJcbiAgfTtcclxuXHJcbiAgLy8gRXNjYXBlIGF0dHJpYnV0ZXNcclxuICB1dGlscy5lc2NhcGVBdHRycyA9IGZ1bmN0aW9uKGF0dHJzKSB7XHJcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xyXG4gICAgICAgIGF0dHJzW2F0dHJdID0gdXRpbHMuZXNjYXBlQXR0cihhdHRyc1thdHRyXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXR0cnM7XHJcbiAgfTtcclxuXHJcbiAgLy8gZm9yRWFjaCB0aGF0IGNhbiBiZSB1c2VkIG9uIG5vZGVMaXN0XHJcbiAgdXRpbHMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pOyAvLyBwYXNzZXMgYmFjayBzdHVmZiB3ZSBuZWVkXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheSBvZiBlbGVtZW50c1xyXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJheSAgYXJyYXkgd2l0aCBwb3NzaWJsZSBkdXBsaWNhdGVzXHJcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBhcnJheSB3aXRoIG9ubHkgdW5pcXVlIHZhbHVlc1xyXG4gICAqL1xyXG4gIHV0aWxzLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChlbGVtLCBwb3MsIGFycikgPT4ge1xyXG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWxlbSkgPT09IHBvcztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSB2YWx1ZSBmcm9tIGFuIGFycmF5XHJcbiAgICogQHBhcmFtICB7QXJyYXl9IGFyclxyXG4gICAqIEBwYXJhbSAge1N0cmluZ3xOdW1iZXJ9IHZhbFxyXG4gICAqL1xyXG4gIHV0aWxzLnJlbW92ZSA9ICh2YWwsIGFycikgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gYXJyLmluZGV4T2YodmFsKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIHV0aWxzLm1ha2VMYWJlbCA9IGZpZWxkRGF0YSA9PiB7XHJcbiAgICBsZXQge2xhYmVsID0gJycsIGRlc2NyaXB0aW9uID0gJycsIC4uLmF0dHJzfSA9IGZpZWxkRGF0YTtcclxuICAgIGxldCBsYWJlbFRleHQgPSB1dGlscy5wYXJzZWRIdG1sKGxhYmVsKTtcclxuICAgIGxldCBsYWJlbENvbnRlbnRzID0gW2xhYmVsVGV4dF07XHJcblxyXG4gICAgaWYgKGF0dHJzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJyAqJywge2NsYXNzTmFtZTogJ2ZiLXJlcXVpcmVkJ30pKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXR0cnMudHlwZSAhPT0gJ2hpZGRlbicpIHtcclxuICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnPycsIHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogJ3Rvb2x0aXAtZWxlbWVudCcsXHJcbiAgICAgICAgICB0b29sdGlwOiBkZXNjcmlwdGlvblxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBsYWJlbEF0dHJzID0ge1xyXG4gICAgICBjbGFzc05hbWU6IGBmYi0ke2F0dHJzLnR5cGV9LWxhYmVsYFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoYXR0cnMuaWQpIHtcclxuICAgICAgbGFiZWxBdHRycy5mb3IgPSBhdHRycy5pZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbSgnbGFiZWwnLCBsYWJlbENvbnRlbnRzLCBsYWJlbEF0dHJzKTtcclxuICB9O1xyXG5cclxuICB1dGlscy50ZW1wbGF0ZU1hcCA9IHR5cGUgPT4ge1xyXG4gICAgbGV0IHRlbXBsYXRlO1xyXG4gICAgbGV0IHRlbXBsYXRlcyA9IHV0aWxzLnRlbXBsYXRlcztcclxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiB0ZW1wbGF0ZXMpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xyXG4gICAgICAgIGlmKHV0aWxzLmluQXJyYXkodHlwZSwga2V5KSkge1xyXG4gICAgICAgICAgdGVtcGxhdGUgPSB2YWx1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBrZXkpIHtcclxuICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gIH07XHJcblxyXG4gIHV0aWxzLmF1dG9jb21wbGV0ZVRlbXBsYXRlID0gZmllbGREYXRhID0+IHtcclxuICAgIGxldCB7dmFsdWVzLCB0eXBlLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcclxuICAgIGNvbnN0IGtleWJvYXJkTmF2ID0gKGUpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgICBsZXQgYWN0aXZlT3B0aW9uID0gbGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUtb3B0aW9uJylbMF07XHJcbiAgICAgIGNvbnN0IGtleUNvZGVNYXBWYWxzID0gW1xyXG4gICAgICAgIC8vIHVwXHJcbiAgICAgICAgWzM4LCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24ucHJldmlvdXNTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1vcHRpb24nKTtcclxuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBhY3RpdmVPcHRpb24ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XSxcclxuICAgICAgICAvLyBkb3duXHJcbiAgICAgICAgWzQwLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24ubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbiA9IGFjdGl2ZU9wdGlvbi5uZXh0U2libGluZztcclxuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBsaXN0LmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtb3B0aW9uJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgWzEzLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gYWN0aXZlT3B0aW9uLmlubmVySFRNTDtcclxuICAgICAgICAgICAgaWYgKGxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgICBdO1xyXG4gICAgICBsZXQga2V5Q29kZU1hcCA9IG5ldyBNYXAoa2V5Q29kZU1hcFZhbHMpO1xyXG5cclxuICAgICAgbGV0IGRpcmVjdGlvbiA9IGtleUNvZGVNYXAuZ2V0KGUua2V5Q29kZSk7XHJcbiAgICAgIGlmKCFkaXJlY3Rpb24pIHtcclxuICAgICAgICBkaXJlY3Rpb24gPSAoKSA9PiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRpcmVjdGlvbigpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGZhdXhFdmVudHMgPSB7XHJcbiAgICAgIGZvY3VzOiBldnQgPT4ge1xyXG4gICAgICAgIGxldCBsaXN0ID0gZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZztcclxuICAgICAgICBldnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZE5hdik7XHJcbiAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBsaXN0LnN0eWxlLndpZHRoID0gbGlzdC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgfSxcclxuICAgICAgYmx1cjogZXZ0ID0+IHtcclxuICAgICAgICBldnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZE5hdik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgfSxcclxuICAgICAgaW5wdXQ6IChldnQpID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZztcclxuICAgICAgICBmaWx0ZXIobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLCBldnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBpZiAoIWV2dC50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgZmF1eEF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBgJHtkYXRhLmlkfS1pbnB1dGAsXHJcbiAgICAgICAgZXZlbnRzOiBmYXV4RXZlbnRzXHJcbiAgICAgIH0pO1xyXG4gICAgbGV0IGhpZGRlbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge3R5cGU6ICdoaWRkZW4nfSk7XHJcbiAgICBkZWxldGUgZmF1eEF0dHJzLm5hbWU7XHJcbiAgICBjb25zdCBmaWVsZCA9IFtcclxuICAgICAgbSgnaW5wdXQnLCBudWxsLCBmYXV4QXR0cnMpLFxyXG4gICAgICBtKCdpbnB1dCcsIG51bGwsIGhpZGRlbkF0dHJzKVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gdmFsdWVzLm1hcChvcHRpb25EYXRhID0+IHtcclxuICAgICAgbGV0IGxhYmVsID0gb3B0aW9uRGF0YS5sYWJlbDtcclxuICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgIGNsaWNrOiBldnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGxpc3QucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZztcclxuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBvcHRpb25EYXRhLmxhYmVsO1xyXG4gICAgICAgICAgICBmaWVsZC5wcmV2aW91c1NpYmxpbmcudmFsdWUgPSBvcHRpb25EYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogb3B0aW9uRGF0YS52YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gbSgnbGknLCBsYWJlbCwgY29uZmlnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZpZWxkLnB1c2gobSgndWwnLCBvcHRpb25zLFxyXG4gICAgICB7aWQ6IGAke2RhdGEuaWR9LWxpc3RgLCBjbGFzc05hbWU6IGBmYi0ke3R5cGV9LWxpc3RgfSkpO1xyXG5cclxuICAgIGNvbnN0IG9uUmVuZGVyID0gKGV2dCkgPT4ge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtmaWVsZCwgb25SZW5kZXJ9O1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIERPTSBlbGVtZW50cyBmb3Igc2VsZWN0LCBjaGVja2JveC1ncm91cCBhbmQgcmFkaW8tZ3JvdXAuXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZERhdGFcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICBET00gZWxlbWVudHNcclxuICAgKi9cclxuICB1dGlscy5zZWxlY3RUZW1wbGF0ZSA9IChmaWVsZERhdGEsIGlzUHJldmlldykgPT4ge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcclxuICAgIGxldCB7dmFsdWVzLCB0eXBlLCBpbmxpbmUsIG90aGVyLCB0b2dnbGUsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xyXG4gICAgbGV0IGF0dHJzID0gdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzKGRhdGEsIGlzUHJldmlldyk7XHJcbiAgICBsZXQgb3B0aW9uVHlwZSA9IHR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpO1xyXG4gICAgbGV0IGlzU2VsZWN0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XHJcblxyXG4gICAgaWYgKHZhbHVlcykge1xyXG4gICAgICBpZiAoYXR0cnMucGxhY2Vob2xkZXIgJiYgaXNTZWxlY3QpIHtcclxuICAgICAgICBvcHRpb25zLnB1c2gobSgnb3B0aW9uJywgYXR0cnMucGxhY2Vob2xkZXIsIHtcclxuICAgICAgICAgIGRpc2FibGVkOiBudWxsLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IG51bGxcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHtsYWJlbCA9ICcnLCAuLi5vcHRpb25BdHRyc30gPSB2YWx1ZXNbaV07XHJcblxyXG4gICAgICAgIG9wdGlvbkF0dHJzLmlkID0gYCR7YXR0cnMuaWR9LSR7aX1gO1xyXG4gICAgICAgIGlmICghb3B0aW9uQXR0cnMuc2VsZWN0ZWQgfHwgYXR0cnMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc1NlbGVjdCkge1xyXG4gICAgICAgICAgbGV0IG8gPSBtKCdvcHRpb24nLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCksIG9wdGlvbkF0dHJzKTtcclxuICAgICAgICAgIG9wdGlvbnMucHVzaChvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XHJcbiAgICAgICAgICBpZiAoaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzcyA9IGBmYi0ke29wdGlvblR5cGV9LWlubGluZWA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvcHRpb25BdHRycy50eXBlID0gb3B0aW9uVHlwZTtcclxuICAgICAgICAgIGlmIChvcHRpb25BdHRycy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gJ2NoZWNrZWQnO1xyXG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uQXR0cnMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgaW5wdXQgPSBtKCdpbnB1dCcsIG51bGwsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCBvcHRpb25BdHRycykpO1xyXG4gICAgICAgICAgbGV0IGxhYmVsQXR0cnMgPSB7Zm9yOiBvcHRpb25BdHRycy5pZH07XHJcbiAgICAgICAgICBsZXQgbGFiZWxDb250ZW50ID0gW2lucHV0LCBsYWJlbF07XHJcbiAgICAgICAgICBpZiAodG9nZ2xlKSB7XHJcbiAgICAgICAgICAgIGxldCBrY1RvZ2dsZSA9IG0oJ3NwYW4nKTtcclxuICAgICAgICAgICAgbGFiZWxDb250ZW50ID0gW2lucHV0LCBrY1RvZ2dsZSwgbGFiZWxdO1xyXG4gICAgICAgICAgICBsYWJlbEF0dHJzLmNsYXNzTmFtZSA9ICdrYy10b2dnbGUnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBsYWJlbENvbnRlbnQsIGxhYmVsQXR0cnMpO1xyXG4gICAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcclxuICAgICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNTZWxlY3QgJiYgb3RoZXIpIHtcclxuICAgICAgICBsZXQgb3RoZXJPcHRpb25BdHRycyA9IHtcclxuICAgICAgICAgIGlkOiBgJHthdHRycy5pZH0tb3RoZXJgLFxyXG4gICAgICAgICAgY2xhc3NOYW1lOiBgJHthdHRycy5jbGFzc05hbWV9IG90aGVyLW9wdGlvbmAsXHJcbiAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgY2xpY2s6ICgpID0+IHV0aWxzLm90aGVyT3B0aW9uQ0Iob3RoZXJPcHRpb25BdHRycy5pZClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGxldCBsYWJlbCA9IG1pMThuLmN1cnJlbnQub3RoZXI7XHJcbiAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XHJcbiAgICAgICAgaWYgKGlubGluZSkge1xyXG4gICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG90aGVyT3B0aW9uQXR0cnMpO1xyXG4gICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xyXG5cclxuICAgICAgICBsZXQgb3RoZXJWYWxBdHRycyA9IHtcclxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgIGlkOiBgJHtvdGhlck9wdGlvbkF0dHJzLmlkfS12YWx1ZWAsXHJcbiAgICAgICAgICBjbGFzc05hbWU6ICdvdGhlci12YWwnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgb3RoZXJJbnB1dHMgPSBbXHJcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG9wdGlvbkF0dHJzKSxcclxuICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdPdGhlcicpLFxyXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvdGhlclZhbEF0dHJzKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIG90aGVySW5wdXRzLCB7Zm9yOiBvcHRpb25BdHRycy5pZH0pO1xyXG4gICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XHJcbiAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRlbXBsYXRlO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xyXG4gICAgICB0ZW1wbGF0ZSA9IG0ob3B0aW9uVHlwZSwgb3B0aW9ucywgZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZW1wbGF0ZSA9IG0oJ2RpdicsIG9wdGlvbnMsIHtjbGFzc05hbWU6IHR5cGV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgfTtcclxuXHJcbiAgdXRpbHMuZGVmYXVsdEZpZWxkID0gZmllbGREYXRhID0+IHtcclxuICAgIGxldCB7bGFiZWwsIGRlc2NyaXB0aW9uLCBzdWJ0eXBlLCB0eXBlLCBpZCwgaXNQcmV2aWV3LCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBpZiAoaXNQcmV2aWV3KSB7XHJcbiAgICAgICAgaWYgKGRhdGEubmFtZSkge1xyXG4gICAgICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJy1wcmV2aWV3JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGF0YS5uYW1lID0gdXRpbHMubmFtZUF0dHIoZmllbGREYXRhKSArICctcHJldmlldyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcclxuICAgICAgZGF0YS50aXRsZSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgaWYgKHN1YnR5cGUpIHtcclxuICAgICAgdHlwZSA9IHN1YnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpZWxkID0ge1xyXG4gICAgICBmaWVsZDogbSh0eXBlLCB1dGlscy5wYXJzZWRIdG1sKGxhYmVsKSwgZGF0YSksXHJcbiAgICAgIG9uUmVuZGVyOiB1dGlscy5ub29wXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBmaWVsZDtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyBhbiBhcnJheSBvZiBzY3JpcHRzIHVzaW5nIGpRdWVyeSdzIGBnZXRTY3JpcHRgXHJcbiAgICogQHBhcmFtICB7QXJyYXl8U3RyaW5nfSAgc2NyaXB0U2NyICAgIHNjcmlwdHNcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggICBvcHRpb25hbCB0byBsb2FkIGZvcm1cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICBhIHByb21pc2VcclxuICAgKi9cclxuICB1dGlscy5nZXRTY3JpcHRzID0gKHNjcmlwdFNjciwgcGF0aCkgPT4ge1xyXG4gICAgY29uc3QgJCA9IGpRdWVyeTtcclxuICAgIGxldCBfYXJyID0gW107XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjcmlwdFNjcikpIHtcclxuICAgICAgc2NyaXB0U2NyID0gW3NjcmlwdFNjcl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlscy5pc0NhY2hlZChzY3JpcHRTY3IpKSB7XHJcbiAgICAgIF9hcnIgPSAkLm1hcChzY3JpcHRTY3IsIHNyYyA9PiB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBkYXRhVHlwZTogJ3NjcmlwdCcsXHJcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgIHVybDogKHBhdGggfHwgJycpICsgc3JjXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpLmRvbmUoKCkgPT4gd2luZG93LmZiTG9hZGVkLmpzLnB1c2goc3JjKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9hcnIucHVzaCgkLkRlZmVycmVkKCBkZWZlcnJlZCA9PiAkKCBkZWZlcnJlZC5yZXNvbHZlICkpKTtcclxuXHJcbiAgICByZXR1cm4gJC53aGVuKC4uLl9hcnIpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiByZW1vdGUgcmVzb3VyY2UgaXMgYWxyZWFkeSBsb2FkZWRcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IHNyYyAgdXJsIG9mIHJlbW90ZSBzY3JpcHQgb3IgY3NzXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgICAgICB0eXBlICAgICAgICdqcycgb3IgJ2NzcydcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIGlzQ2FjaGVkXHJcbiAgICovXHJcbiAgdXRpbHMuaXNDYWNoZWQgPSAoc3JjLCB0eXBlID0gJ2pzJykgPT4ge1xyXG4gICAgbGV0IGlzQ2FjaGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBjYWNoZSA9IHdpbmRvdy5mYkxvYWRlZFt0eXBlXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpIHtcclxuICAgICAgaXNDYWNoZWQgPSBzcmMuZXZlcnkocyA9PiB1dGlscy5pbkFycmF5KHMsIGNhY2hlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpc0NhY2hlZCA9IHV0aWxzLmluQXJyYXkoc3JjLCBjYWNoZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNDYWNoZWQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kcyBzdHlsZXNoZWV0cyB0byB0aGUgaGVhZFxyXG4gICAqIEBwYXJhbSAge0FycmF5fSBzY3JpcHRTY3JcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGhcclxuICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAqL1xyXG4gIHV0aWxzLmdldFN0eWxlcyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcclxuICAgIGlmICh1dGlscy5pc0NhY2hlZChzY3JpcHRTY3IsICdjc3MnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcHBlbmRTdHlsZSA9IChocmVmKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgICBsaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICB3aW5kb3cuZmJMb2FkZWQuY3NzLnB1c2goaHJlZik7XHJcbiAgICB9O1xyXG4gICAgc2NyaXB0U2NyLmZvckVhY2goc3JjID0+IGFwcGVuZFN0eWxlKChwYXRoIHx8ICcnKSArIHNyYykpO1xyXG4gIH07XHJcblxyXG4gIHV0aWxzLmxvbmdUZXh0VGVtcGxhdGUgPSBkYXRhID0+IHtcclxuICAgIGxldCB7dmFsdWUgPSAnJywgLi4uYXR0cnN9ID0gZGF0YTtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgZmllbGQ6IG0oJ3RleHRhcmVhJywgdXRpbHMucGFyc2VkSHRtbCh2YWx1ZSksIGF0dHJzKVxyXG4gICAgfTtcclxuICAgIGxldCBlZGl0b3JzID0ge1xyXG4gICAgICB0aW55bWNlOiB7XHJcbiAgICAgICAganM6IFsnLy9jZG4udGlueW1jZS5jb20vNC90aW55bWNlLm1pbi5qcyddLFxyXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy50aW55bWNlLmVkaXRvcnNbZGF0YS5pZF0pIHtcclxuICAgICAgICAgICAgd2luZG93LnRpbnltY2UuZWRpdG9yc1tkYXRhLmlkXS5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdpbmRvdy50aW55bWNlLmluaXQoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRlbXBsYXRlLmZpZWxkLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MCxcclxuICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvcicsXHJcbiAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbicsXHJcbiAgICAgICAgICAgICAgJ2luc2VydGRhdGV0aW1lIG1lZGlhIHRhYmxlIGNvbnRleHRtZW51IHBhc3RlIGNvZGUnXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRvb2xiYXI6ICdpbnNlcnRmaWxlIHVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBxdWlsbDoge1xyXG4gICAgICAgIGpzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLmpzJ10sXHJcbiAgICAgICAgY3NzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLnNub3cuY3NzJ10sXHJcbiAgICAgICAgb25SZW5kZXI6IGV2dCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBEZWx0YSA9IHdpbmRvdy5RdWlsbC5pbXBvcnQoJ2RlbHRhJyk7XHJcbiAgICAgICAgICB3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2RhdGEuaWRdID0ge307XHJcbiAgICAgICAgICBsZXQgZWRpdG9yID0gd2luZG93LmZiRWRpdG9ycy5xdWlsbFtkYXRhLmlkXTtcclxuICAgICAgICAgIGVkaXRvci5pbnN0YW5jZSA9IG5ldyB3aW5kb3cuUXVpbGwodGVtcGxhdGUuZmllbGQsIHtcclxuICAgICAgICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgICAgICAgIFt7J2hlYWRlcic6IFsxLCAyLCBmYWxzZV19XSxcclxuICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXHJcbiAgICAgICAgICAgICAgICBbJ2NvZGUtYmxvY2snXVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGF0dHJzLnBsYWNlaG9sZGVyIHx8ICcnLFxyXG4gICAgICAgICAgICB0aGVtZTogJ3Nub3cnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5kYXRhID0gbmV3IERlbHRhKCk7XHJcbiAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgZWRpdG9yLmluc3RhbmNlLnNldENvbnRlbnRzKHdpbmRvdy5KU09OLnBhcnNlKHV0aWxzLnBhcnNlZEh0bWwodmFsdWUpKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlZGl0b3IuaW5zdGFuY2Uub24oJ3RleHQtY2hhbmdlJywgZnVuY3Rpb24oZGVsdGEpIHtcclxuICAgICAgICAgICAgZWRpdG9yLmRhdGEgPSBlZGl0b3IuZGF0YS5jb21wb3NlKGRlbHRhKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZGF0YS50eXBlICE9PSAndGV4dGFyZWEnKSB7XHJcbiAgICAgIHRlbXBsYXRlLm9uUmVuZGVyID0gZWRpdG9yc1tkYXRhLnR5cGVdLm9uUmVuZGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3F1aWxsJykge1xyXG4gICAgICB0ZW1wbGF0ZS5maWVsZCA9IG0oJ2RpdicsIG51bGwsIGF0dHJzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblJlbmRlciA9ICgpID0+IHtcclxuICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXSkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCBvblJlbmRlcik7XHJcblxyXG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uY3NzKSB7XHJcbiAgICAgICAgICB1dGlscy5nZXRTdHlsZXMoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uanMgJiYgIXV0aWxzLmlzQ2FjaGVkKGVkaXRvcnNbZGF0YS50eXBlXS5qcykpIHtcclxuICAgICAgICAgIHV0aWxzLmdldFNjcmlwdHMoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKS5kb25lKHRlbXBsYXRlLm9uUmVuZGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcGxhdGUub25SZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtmaWVsZDogdGVtcGxhdGUuZmllbGQsIG9uUmVuZGVyfTtcclxuICB9O1xyXG5cclxuICB1dGlscy50ZW1wbGF0ZXMgPSBbXHJcbiAgICBbJ2F1dG9jb21wbGV0ZScsXHJcbiAgICAgIGZpZWxkRGF0YSA9PiB7XHJcbiAgICAgIGxldCBhdHRycyA9IHV0aWxzLnByb2Nlc3NGaWVsZERhdGFBdHRycyhmaWVsZERhdGEpO1xyXG4gICAgICAgIGxldCBmaWVsZExhYmVsID0gdXRpbHMubWFrZUxhYmVsKGZpZWxkRGF0YSk7XHJcbiAgICAgICAgbGV0IGF1dG9jb21wbGV0ZSA9IHV0aWxzLmF1dG9jb21wbGV0ZVRlbXBsYXRlKGF0dHJzKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGF1dG9jb21wbGV0ZS5maWVsZF0sXHJcbiAgICAgICAgICBvblJlbmRlcjogYXV0b2NvbXBsZXRlLm9uUmVuZGVyXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgIH1dLFxyXG4gICAgW2RlZmF1bHRTdWJ0eXBlcy50ZXh0LmNvbmNhdChbJ251bWJlcicsICdmaWxlJywgJ2RhdGUnXSksXHJcbiAgICAgIGZpZWxkRGF0YSA9PiB7XHJcbiAgICAgICAgbGV0IGF0dHJzID0gdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzKGZpZWxkRGF0YSk7XHJcbiAgICAgICAgbGV0IGZpZWxkTGFiZWwgPSB1dGlscy5tYWtlTGFiZWwoZmllbGREYXRhKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIG0oJ2lucHV0JywgbnVsbCwgYXR0cnMpXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgfV0sXHJcbiAgICBbWydwYXJhZ3JhcGgnXS5jb25jYXQoZGVmYXVsdFN1YnR5cGVzLnBhcmFncmFwaCksXHJcbiAgICAgIGZpZWxkRGF0YSA9PiB7XHJcbiAgICAgICAgbGV0IGF0dHJzID0gdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzKGZpZWxkRGF0YSk7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgZmllbGQ6IFttKGZpZWxkRGF0YS50eXBlLCB1dGlscy5wYXJzZWRIdG1sKGZpZWxkRGF0YS5sYWJlbCksIGF0dHJzKV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgIH1dLFxyXG4gICAgW2RlZmF1bHRTdWJ0eXBlcy5idXR0b24sXHJcbiAgICAgIGZpZWxkRGF0YSA9PiB7XHJcbiAgICAgICAgbGV0IGF0dHJzID0gdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzKGZpZWxkRGF0YSk7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgZmllbGQ6IG0oJ2J1dHRvbicsIGZpZWxkRGF0YS5sYWJlbCwgYXR0cnMpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICB9XSxcclxuICAgIFtbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCcsICdjaGVja2JveCddLFxyXG4gICAgICBmaWVsZERhdGEgPT4ge1xyXG4gICAgICAgIGxldCBmaWVsZExhYmVsID0gdXRpbHMubWFrZUxhYmVsKGZpZWxkRGF0YSk7XHJcbiAgICAgICAgbGV0IGZpZWxkID0gdXRpbHMuc2VsZWN0VGVtcGxhdGUoZmllbGREYXRhKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICB9XSxcclxuICAgIFtbJ3RleHRhcmVhJywgJ3RpbnltY2UnLCAncXVpbGwnXSxcclxuICAgICAgZmllbGREYXRhID0+IHtcclxuICAgICAgICBsZXQgYXR0cnMgPSB1dGlscy5wcm9jZXNzRmllbGREYXRhQXR0cnMoZmllbGREYXRhKTtcclxuICAgICAgICBsZXQgZmllbGQgPSB1dGlscy5sb25nVGV4dFRlbXBsYXRlKGF0dHJzKTtcclxuICAgICAgICBsZXQgZmllbGRMYWJlbCA9IHV0aWxzLm1ha2VMYWJlbChmaWVsZERhdGEpO1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGQuZmllbGRdLFxyXG4gICAgICAgICAgb25SZW5kZXI6IGZpZWxkLm9uUmVuZGVyXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgIH1dXHJcbiAgICBdO1xyXG5cclxuICB1dGlscy5wcm9jZXNzRmllbGREYXRhQXR0cnMgPSBmaWVsZERhdGEgPT4ge1xyXG4gICAgbGV0IHtcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBzdWJ0eXBlLFxyXG4gICAgICAuLi5hdHRyc30gPSBmaWVsZERhdGE7XHJcblxyXG4gICAgaWYgKCFhdHRycy5pZCkge1xyXG4gICAgICBhdHRycy5pZCA9IGF0dHJzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN1YnR5cGUpIHtcclxuICAgICAgYXR0cnMudHlwZSA9IHN1YnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF0dHJzLm11bHRpcGxlIHx8IGF0dHJzLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpIHtcclxuICAgICAgYXR0cnMubmFtZSA9IGF0dHJzLm5hbWUgKyAnW10nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhdHRycy5yZXF1aXJlZCkge1xyXG4gICAgICBhdHRycy5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgIGF0dHJzWydhcmlhLXJlcXVpcmVkJ10gPSAndHJ1ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF0dHJzO1xyXG4gIH07XHJcblxyXG4gIHV0aWxzLmdldFRlbXBsYXRlID0gKGZpZWxkRGF0YSwgaXNQcmV2aWV3ID0gZmFsc2UpID0+IHtcclxuICAgIGxldCBmaWVsZDtcclxuICAgIGlmIChpc1ByZXZpZXcpIHtcclxuICAgICAgaWYgKGZpZWxkRGF0YS5uYW1lKSB7XHJcbiAgICAgICAgZmllbGREYXRhLm5hbWUgPSBmaWVsZERhdGEubmFtZSArICctcHJldmlldyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmllbGREYXRhLm5hbWUgPSB1dGlscy5uYW1lQXR0cihmaWVsZERhdGEpICsgJy1wcmV2aWV3JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHRlbXBsYXRlID0gdXRpbHMudGVtcGxhdGVNYXAoZmllbGREYXRhLnR5cGUpO1xyXG5cclxuICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlKGZpZWxkRGF0YSwgaXNQcmV2aWV3KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbXBsYXRlID0gdXRpbHMuZGVmYXVsdEZpZWxkKGZpZWxkRGF0YSwgaXNQcmV2aWV3KSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZERhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcclxuICAgICAgbGV0IHdyYXBwZXJBdHRycyA9IHt9O1xyXG4gICAgICBpZiAoZmllbGREYXRhLm5hbWUpIHtcclxuICAgICAgICB3cmFwcGVyQXR0cnMuY2xhc3NOYW1lID1cclxuICAgICAgICBgZmItJHtmaWVsZERhdGEudHlwZX0gZm9ybS1ncm91cCBmaWVsZC0ke2ZpZWxkRGF0YS5uYW1lfWA7XHJcbiAgICAgIH1cclxuICAgICAgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2RpdicsIHRlbXBsYXRlLmZpZWxkLCB3cmFwcGVyQXR0cnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGF0dHJzID0gdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzKGZpZWxkRGF0YSk7XHJcbiAgICAgIGZpZWxkID0gdXRpbHMubWFya3VwKCdpbnB1dCcsIG51bGwsIGF0dHJzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGVtcGxhdGUub25SZW5kZXIpIHtcclxuICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIHRlbXBsYXRlLm9uUmVuZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsYmFjayBmb3Igb3RoZXIgb3B0aW9uLlxyXG4gKiBUb2dnbGVzIHRoZSBoaWRkZW4gdGV4dCBhcmVhIGZvciBcIm90aGVyXCIgb3B0aW9uLlxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG90aGVySWQgaWQgb2YgdGhlIFwib3RoZXJcIiBvcHRpb24gaW5wdXRcclxuICovXHJcbnV0aWxzLm90aGVyT3B0aW9uQ0IgPSBvdGhlcklkID0+IHtcclxuICBjb25zdCBvdGhlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3RoZXJJZCk7XHJcbiAgY29uc3Qgb3RoZXJJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3RoZXJJZH0tdmFsdWVgKTtcclxuXHJcbiAgaWYgKG90aGVySW5wdXQuY2hlY2tlZCkge1xyXG4gICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICB9IGVsc2Uge1xyXG4gICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhcGl0YWxpemVzIGEgc3RyaW5nXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHVuY2FwaXRhbGl6ZWQgc3RyaW5nXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xyXG4gKi9cclxudXRpbHMuY2FwaXRhbGl6ZSA9IHN0ciA9PiB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGJcXHcvZywgZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxudXRpbHMubWVyZ2UgPSAob2JqMSwgb2JqMikgPT4ge1xyXG4gIGxldCBtZXJnZWRPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmoxLCBvYmoyKTtcclxuICBmb3IgKGxldCBwcm9wIGluIG9iajIpIHtcclxuICAgIGlmIChtZXJnZWRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqMltwcm9wXSkpIHtcclxuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBBcnJheS5pc0FycmF5KG9iajFbcHJvcF0pID8gdXRpbHMudW5pcXVlKG9iajFbcHJvcF0uY29uY2F0KG9iajJbcHJvcF0pKSA6IG9iajJbcHJvcF07XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iajJbcHJvcF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gdXRpbHMubWVyZ2Uob2JqMVtwcm9wXSwgb2JqMltwcm9wXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gb2JqMltwcm9wXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWVyZ2VkT2JqO1xyXG59O1xyXG5cclxudXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMgPSAoZWwsIGV2dHMsIGZuKSA9PiB7XHJcbiAgcmV0dXJuIGV2dHMuc3BsaXQoJyAnKS5mb3JFYWNoKGUgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCBmbiwgZmFsc2UpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaW5kIHRoZSBjbG9zZXN0IHBhcmVudCBieSBjbGFzc1xyXG4gKiBAcGFyYW0gIHtPYmplY3R9IGVsICBET00gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNscyBjbGFzc1xyXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICBET00gRWxlbWVudFxyXG4gKi9cclxudXRpbHMuY2xvc2VzdCA9IChlbCwgY2xzKSA9PiB7XHJcbiAgbGV0IGNsYXNzTmFtZSA9IGNscy5yZXBsYWNlKCcuJywgJycpO1xyXG4gIHdoaWxlICgoZWwgPSBlbC5wYXJlbnRFbGVtZW50KSAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpO1xyXG4gIHJldHVybiBlbDtcclxufTtcclxuXHJcbnV0aWxzLm5vb3AgPSAoKSA9PiBudWxsO1xyXG5cclxudXRpbHMuZGVib3VuY2UgPSAoZnVuYywgd2FpdCA9IDI1MCwgaW1tZWRpYXRlID0gZmFsc2UpID0+IHtcclxuICBsZXQgdGltZW91dDtcclxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgbGV0IGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xyXG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgIGlmIChjYWxsTm93KSB7XHJcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBtb2JpbGUgY2xhc3NcclxuICogQHRvZG8gZmluZCBjc3Mgb25seSBzb2x1dGlvblxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IE1vYmlsZSBjbGFzcyBhZGRlZCB0byBmb3JtQnVpbGRlclxyXG4gKi9cclxudXRpbHMubW9iaWxlQ2xhc3MgPSAoKSA9PiB7XHJcbiAgbGV0IG1vYmlsZUNsYXNzID0gJyc7XHJcbiAgKGZ1bmN0aW9uKGEpIHtcclxuICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkge1xyXG4gICAgICBtb2JpbGVDbGFzcyA9ICcgZmItbW9iaWxlJztcclxuICAgIH1cclxuICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcclxuICByZXR1cm4gbW9iaWxlQ2xhc3M7XHJcbn07XHJcblxyXG4vKipcclxuICogQ29udmVydCBjb252ZXJ0cyBtZXNzeSBgY2wjc3NOYW1lc2AgaW50byB2YWxpZCBgY2xhc3MtbmFtZXNgXHJcbiAqXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gaHlwaGVuYXRlZCBzdHJpbmdcclxuICovXHJcbnV0aWxzLm1ha2VDbGFzc05hbWUgPSBzdHIgPT4ge1xyXG4gIHJldHVybiB1dGlscy5oeXBoZW5DYXNlKHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogTWFrZSBzdHJpbmdzIHNhZmUgdG8gYmUgdXNlZCBhcyBjbGFzc2VzXHJcbiAqXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHN0cmluZyB0byBiZSBjb252ZXJ0ZWRcclxuICogQHJldHVybiB7U3RyaW5nfSAgICAgY29udmVydGVyIHN0cmluZ1xyXG4gKi9cclxudXRpbHMuc2FmZW5hbWUgPSBzdHIgPT4ge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvW15hLXpBLVowLTlcXFtcXF1cXF8tXS9nLCAnJykudG9Mb3dlckNhc2UoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTdHJpcHMgbm9uLW51bWJlcnMgZnJvbSBhIG51bWJlciBvbmx5IGlucHV0XHJcbiAqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyIHN0cmluZyB3aXRoIHBvc3NpYmxlIG51bWJlclxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBzdHJpbmcgd2l0aG91dCBudW1iZXJzXHJcbiAqL1xyXG51dGlscy5mb3JjZU51bWJlciA9IHN0ciA9PiB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XHJcbiJdfQ==
