/*
formBuilder - https://formbuilder.online/
Version: 2.1.2
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
      helpers.stopIndex = undefined;
      helpers.removeAllFields(d.stage, false);
      loadFields(formData);
      helpers.save.call(helpers);
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
        _utils2.default.forEach(form.childNodes, function (index, field) {
          var $field = $(field);

          if (!$field.hasClass('disabled-field')) {
            var fieldData = _this.getTypes($field);
            var roleVals = $('.roles-field:checked', field).map(function (elem) {
              return elem.value;
            }).get();

            _this.setAttrVals(field, fieldData);

            if (fieldData.subtype) {
              if (fieldData.subtype === 'quill') {
                var id = fieldData.name + '-preview';
                if (window.fbEditors.quill[id]) {
                  var instance = window.fbEditors.quill[id].instance;
                  var data = instance.getContents();
                  fieldData.value = window.JSON.stringify(data.ops);
                }
              } else if (fieldData.subtype === 'tinymce' && window.tinymce) {
                var _id = fieldData.name + '-preview';
                if (window.tinymce.editors[_id]) {
                  var editor = window.tinymce.editors[_id];
                  fieldData.value = editor.getContent();
                }
              }
            }

            if (roleVals.length) {
              fieldData.role = roleVals.join(',');
            }

            fieldData.className = fieldData.className || fieldData.class;

            var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className);
            if (match) {
              fieldData.style = match[1];
            }

            fieldData = _utils2.default.trimObj(fieldData);

            var multipleField = fieldData.type.match(d.optionFieldsRegEx);

            if (multipleField) {
              fieldData.values = _this.fieldOptionData($field);
            }

            formData.push(fieldData);
          }
        });
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
          return outerHeight += fields[index].offsetHeight + 3;
        });
        fields[0].style.marginTop = -outerHeight + 'px';
        setTimeout(function () {
          (0, _dom.empty)(stage).classList.remove('removing');
        }, 400);
      } else {
        (0, _dom.empty)(stage);
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

},{"./config":128,"./data":129,"./dom":130,"./events":131,"./utils":135,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/objectWithoutProperties":14,"mi18n":124}],134:[function(require,module,exports){
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
 * @param  {Object}              attributes
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
 * @param  {String|Number} val
 * @param  {Array} arr
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
 * @param  {Boolean} isPreview
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
    // eslint-disable-next-line
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvbWkxOG4vZGlzdC9taTE4bi5taW4uanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwic3JjL2pzL2NvbmZpZy5qcyIsInNyYy9qcy9kYXRhLmpzIiwic3JjL2pzL2RvbS5qcyIsInNyYy9qcy9ldmVudHMuanMiLCJzcmMvanMvZm9ybS1idWlsZGVyLmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvcG9seWZpbGxzLmpzIiwic3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzcUJPLElBQU0sMENBQWlCO0FBQzVCLG1CQUFpQixPQURXO0FBRXhCLFVBQVEsS0FGZ0I7QUFHeEIsZ0JBQWMsQ0FDWixjQURZLEVBRVosUUFGWSxFQUdaLFVBSFksRUFJWixnQkFKWSxFQUtaLE1BTFksRUFNWixNQU5ZLEVBT1osUUFQWSxFQVFaLFFBUlksRUFTWixXQVRZLEVBVVosUUFWWSxFQVdaLGFBWFksRUFZWixRQVpZLEVBYVosTUFiWSxFQWNaLFVBZFksQ0FIVTtBQW1CeEIsWUFBVSxNQW5CYztBQW9CeEI7QUFDQSxpQkFBZSxFQXJCUztBQXNCeEIsaUJBQWUsRUF0QlM7QUF1QnhCLHlCQUF1QixFQXZCQztBQXdCeEIsYUFBVyxLQXhCYTtBQXlCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZSxFQXpDUztBQTBDeEIsVUFBUSxFQTFDZ0I7QUEyQ3hCLG1CQUFpQixLQTNDTztBQTRDeEIsYUFBVyxFQTVDYTtBQTZDeEIsU0FBTztBQUNMLE9BQUc7QUFERSxHQTdDaUI7QUFnRHhCLFVBQVE7QUFDTixXQUFPO0FBQUEsYUFBVyxRQUFRLEtBQVIsQ0FBYyxPQUFkLENBQVg7QUFBQSxLQUREO0FBRU4sYUFBUztBQUFBLGFBQVcsUUFBUSxHQUFSLENBQVksT0FBWixDQUFYO0FBQUEsS0FGSDtBQUdOLGFBQVM7QUFBQSxhQUFXLFFBQVEsSUFBUixDQUFhLE9BQWIsQ0FBWDtBQUFBO0FBSEgsR0FoRGdCO0FBcUR4QixVQUFRLGdCQUFDLEdBQUQsRUFBTSxRQUFOO0FBQUEsV0FBbUIsSUFBbkI7QUFBQSxHQXJEZ0I7QUFzRHhCLGNBQVk7QUFBQSxXQUFNLElBQU47QUFBQSxHQXREWTtBQXVEeEIsV0FBUyxLQXZEZTtBQXdEeEIsb0JBQWtCLEtBeERNO0FBeUR4QixrQkFBZ0I7QUFDZCxZQUFRLElBRE07QUFFZCxZQUFRO0FBQ04sV0FBSyxDQURDO0FBRU4sY0FBUSxNQUZGO0FBR04sYUFBTztBQUhEO0FBRk0sR0F6RFE7QUFpRXhCLGFBQVcsRUFqRWE7QUFrRXhCLHFCQUFtQixJQWxFSztBQW1FeEIseUJBQXVCLEVBbkVDO0FBb0V4QixpQkFBZSxFQXBFUztBQXFFeEIsa0JBQWdCLEVBckVRO0FBc0V4QixVQUFRO0FBdEVnQixDQUF2Qjs7QUEwRUEsSUFBTSxvQ0FBYztBQUNyQixZQUFVLHlDQURXO0FBRXJCLFNBQU8sQ0FDTCxPQURLLENBRmM7QUFLckIsYUFBVztBQUNULGFBQVM7QUFDUCxpQkFBVyxjQURKO0FBRVAsd0JBQWtCLDBCQUZYO0FBR1AsMEJBQW9CLHNDQUhiO0FBSVAsb0JBQWMsY0FKUDtBQUtQLGNBQVEsUUFMRDtBQU1QLHFCQUFlLDRCQU5SO0FBT1AscUJBQWUsZ0JBUFI7QUFRUCxnQkFBVSxVQVJIO0FBU1Asa0JBQVksWUFUTDtBQVVQLGlCQUFXLE9BVko7QUFXUCx1QkFBaUIsNENBWFY7QUFZUCxhQUFPLE9BWkE7QUFhUCxhQUFPLE9BYkE7QUFjUCxlQUFTLFNBZEY7QUFlUCxZQUFNLG1CQWZDO0FBZ0JQLGtCQUFZLE9BaEJMO0FBaUJQLHlCQUFtQixNQWpCWjtBQWtCUCxpQkFBVyxZQWxCSjtBQW1CUCxtQkFBYSxXQW5CTjtBQW9CUCx3QkFBa0IsYUFwQlg7QUFxQlAsZUFBUyxnQkFyQkY7QUFzQlAsaUJBQVcsWUF0Qko7QUF1QlAsbUJBQWEsZUF2Qk47QUF3QlAsZUFBUyxVQXhCRjtBQXlCUCxtQkFBYSwwQkF6Qk47QUEwQlAsc0JBQWdCLHVDQTFCVDtBQTJCUCx3QkFBa0IsOEJBM0JYO0FBNEJQLDBCQUFvQiw2Q0E1QmI7QUE2QlAsa0JBQVksYUE3Qkw7QUE4QlAsbUJBQWEsY0E5Qk47QUErQlAsa0JBQVksMENBL0JMO0FBZ0NQLGNBQVEsUUFoQ0Q7QUFpQ1AsWUFBTSxNQWpDQztBQWtDUCxjQUFRLGNBbENEO0FBbUNQLGNBQVEsUUFuQ0Q7QUFvQ1Asa0JBQVksdUJBcENMO0FBcUNQLGFBQU8sT0FyQ0E7QUFzQ1Asa0JBQVksNkJBdENMO0FBdUNQLGlCQUFXLHFEQXZDSjtBQXdDUCxpQkFBVyxXQXhDSjtBQXlDUCxpQkFBVyxZQXpDSjtBQTBDUCx3QkFBa0IsNENBMUNYO0FBMkNQLHFCQUFlLGdCQTNDUjtBQTRDUCxZQUFNLE1BNUNDO0FBNkNQLFVBQUksSUE3Q0c7QUE4Q1AsdUJBQWlCLDhCQTlDVjtBQStDUCxjQUFRLFFBL0NEO0FBZ0RQLFdBQUssS0FoREU7QUFpRFAsVUFBSSxJQWpERztBQWtEUCxjQUFRLFFBbEREO0FBbURQLGVBQVMsU0FuREY7QUFvRFAsZ0JBQVUsVUFwREg7QUFxRFAsOEJBQXdCLE9BckRqQjtBQXNEUCw4QkFBd0IsT0F0RGpCO0FBdURQLG1CQUFhLHVCQXZETjtBQXdEUCxhQUFPLE9BeERBO0FBeURQLGlCQUFXLFdBekRKO0FBMERQLG1CQUFhLGFBMUROO0FBMkRQLDJCQUFxQixPQTNEZDtBQTREUCwyQkFBcUIsT0E1RGQ7QUE2RFAsMEJBQW9CLEVBN0RiO0FBOERQLDhCQUF3QixFQTlEakI7QUErRFAsMkJBQXFCLGlCQS9EZDtBQWdFUCxpQ0FBMkIsRUFoRXBCO0FBaUVQLCtCQUF5Qix5QkFqRWxCO0FBa0VQLDhCQUF3QixxQkFsRWpCO0FBbUVQLGVBQVMsU0FuRUY7QUFvRVAsa0JBQVksYUFwRUw7QUFxRVAsYUFBTyxPQXJFQTtBQXNFUCxxQkFBZSxnQkF0RVI7QUF1RVAsb0JBQWMsZUF2RVA7QUF3RVAsY0FBUSxRQXhFRDtBQXlFUCxnQkFBVSxVQXpFSDtBQTBFUCxnQkFBVSxrQkExRUg7QUEyRVAsYUFBTyxRQTNFQTtBQTRFUCxZQUFNLE1BNUVDO0FBNkVQLFlBQU0sTUE3RUM7QUE4RVAscUJBQWUsU0E5RVI7QUErRVAsY0FBUSxRQS9FRDtBQWdGUCxtQkFBYSxjQWhGTjtBQWlGUCx5QkFBbUIsMkJBakZaO0FBa0ZQLFlBQU0sTUFsRkM7QUFtRlAsaUJBQVcsYUFuRko7QUFvRlAsaUJBQVcsT0FwRko7QUFxRlAsZ0JBQVUsU0FyRkg7QUFzRlAsaUJBQVcsT0F0Rko7QUF1RlAsYUFBTyxPQXZGQTtBQXdGUCxjQUFRO0FBQ04sYUFBSztBQUNILHFCQUFXLFNBRFI7QUFFSCxrQkFBUSxRQUZMO0FBR0gsZ0JBQU0sTUFISDtBQUlILG1CQUFTLFNBSk47QUFLSCxtQkFBUyxTQUxOO0FBTUgsbUJBQVM7QUFOTjtBQURDLE9BeEZEO0FBa0dQLGVBQVMsTUFsR0Y7QUFtR1AsWUFBTSxZQW5HQztBQW9HUCxnQkFBVSxXQXBHSDtBQXFHUCxjQUFRLFFBckdEO0FBc0dQLGVBQVMsVUF0R0Y7QUF1R1AsYUFBTyxPQXZHQTtBQXdHUCxnQkFBVSxNQXhHSDtBQXlHUCxlQUFTLFdBekdGO0FBMEdQLFdBQUs7QUExR0U7QUFEQTtBQUxVLENBQXBCOztBQXFIQSxJQUFNLDBCQUFTLEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTEEsSUFBTSxzQ0FBZSxFQUFyQjs7SUFFTSxJLFdBQUEsSSxHQUNYLGNBQVksTUFBWixFQUFvQjtBQUFBOztBQUNsQixPQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxPQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsT0FBSyxNQUFMLEdBQWMsRUFBZDtBQUNBLGVBQWEsTUFBYixJQUF1QixJQUF2QjtBQUNELEM7O0FBR0ksSUFBTSw0Q0FBa0IsRUFBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxJQUFNLG9DQUFjLEVBQXBCO0FBQ0EsSUFBTSw0Q0FBa0I7QUFDekIsUUFBTSxDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE9BQXJCLEVBQThCLE9BQTlCLEVBQXVDLEtBQXZDLENBRG1CO0FBRXpCLFVBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FGaUI7QUFHekIsVUFBUSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE9BQXJCLENBSGlCO0FBSXpCLGFBQVcsQ0FBQyxHQUFELEVBQU0sU0FBTixFQUFpQixZQUFqQixFQUErQixRQUEvQixFQUF5QyxRQUF6QyxDQUpjO0FBS3pCLFlBQVUsQ0FBQyxVQUFELEVBQWEsT0FBYjtBQUxlLENBQXhCOztBQVNBLElBQU0sd0JBQVEsU0FBUixLQUFRLFVBQVc7QUFDOUIsU0FBTyxRQUFRLFVBQWYsRUFBMkI7QUFDekIsWUFBUSxXQUFSLENBQW9CLFFBQVEsVUFBNUI7QUFDRDtBQUNELFNBQU8sT0FBUDtBQUNELENBTE07O0FBT0EsSUFBTSwwQkFBUyxTQUFULE1BQVMsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUE4QjtBQUFBLE1BQWhCLElBQWdCLHVFQUFULElBQVM7O0FBQ2xELE1BQUksZ0JBQWdCLEVBQXBCO0FBQ0EsTUFBSSxTQUFTLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBYjs7QUFFQSxNQUFJLElBQUosRUFBVTtBQUNSLGFBQVMsT0FBTyxPQUFQLEVBQVQ7QUFDRDs7QUFFRCxPQUFLLElBQUksSUFBSSxNQUFNLE1BQU4sR0FBZSxDQUE1QixFQUErQixLQUFLLENBQXBDLEVBQXVDLEdBQXZDLEVBQTRDO0FBQzFDLFFBQUksTUFBTSxNQUFNLENBQU4sRUFBUyxXQUFULENBQXFCLFdBQXJCLEVBQVY7QUFDQSxRQUFJLElBQUksT0FBSixDQUFZLEtBQUssV0FBTCxFQUFaLE1BQW9DLENBQUMsQ0FBekMsRUFBNEM7QUFDMUMsWUFBTSxDQUFOLEVBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsT0FBTyxDQUFQLENBQXpCO0FBQ0Esb0JBQWMsSUFBZCxDQUFtQixNQUFNLENBQU4sQ0FBbkI7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNLENBQU4sRUFBUyxLQUFULENBQWUsT0FBZixHQUF5QixPQUFPLENBQVAsQ0FBekI7QUFDRDtBQUNGOztBQUVELFNBQU8sYUFBUDtBQUNELENBbkJNOztBQXFCQSxJQUFNLHNDQUFlLENBQ3RCLFFBRHNCLEVBRXRCLGdCQUZzQixFQUd0QixVQUhzQixFQUl0QixhQUpzQixFQUt0QixjQUxzQixDQUFyQjs7QUFRQSxJQUFNLGdEQUFvQixJQUFJLE1BQUosT0FBZSxhQUFhLElBQWIsQ0FBa0IsR0FBbEIsQ0FBZixPQUExQjs7SUFDYyxHLEdBQ25CLGFBQVksTUFBWixFQUFvQjtBQUFBOztBQUNsQixPQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFDQSxPQUFLLGlCQUFMLEdBQXlCLGlCQUF6Qjs7QUFFQSxPQUFLLFFBQUwsR0FBZ0IsZUFBaEI7O0FBRUE7Ozs7O0FBS0EsT0FBSyxLQUFMLEdBQWEsS0FBYjs7QUFFQTs7Ozs7OztBQU9BLE9BQUssTUFBTCxHQUFjLE1BQWQ7O0FBRUEsY0FBWSxNQUFaLElBQXNCLElBQXRCO0FBQ0EsU0FBTyxZQUFZLE1BQVosQ0FBUDtBQUNELEM7O2tCQXpCa0IsRzs7Ozs7Ozs7QUNoRHJCOzs7O0FBSUE7QUFDRSxJQUFNLFNBQVMsRUFBZjs7QUFFQSxPQUFPLE1BQVAsR0FBZ0IsSUFBSSxLQUFKLENBQVUsUUFBVixDQUFoQjtBQUNBLE9BQU8sUUFBUCxHQUFrQixJQUFJLEtBQUosQ0FBVSxVQUFWLENBQWxCO0FBQ0EsT0FBTyxZQUFQLEdBQXNCLElBQUksS0FBSixDQUFVLGNBQVYsQ0FBdEI7QUFDQSxPQUFPLFdBQVAsR0FBcUIsSUFBSSxLQUFKLENBQVUsYUFBVixDQUFyQjtBQUNBLE9BQU8sV0FBUCxHQUFxQixJQUFJLEtBQUosQ0FBVSxhQUFWLENBQXJCO0FBQ0EsT0FBTyxTQUFQLEdBQW1CLElBQUksS0FBSixDQUFVLFdBQVYsQ0FBbkI7QUFDQSxPQUFPLFVBQVAsR0FBb0IsSUFBSSxLQUFKLENBQVUsWUFBVixDQUFwQjtBQUNBLE9BQU8sWUFBUCxHQUFzQixJQUFJLEtBQUosQ0FBVSxjQUFWLENBQXRCO0FBQ0EsT0FBTyxhQUFQLEdBQXVCLElBQUksS0FBSixDQUFVLGVBQVYsQ0FBdkI7O0FBRUY7QUFDQTs7a0JBRWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJmOzs7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLFFBQVEsZ0JBQVIsRUFBMEIsT0FBMUI7O0FBRUEsSUFBSSxlQUFlLElBQUksSUFBSixHQUFXLE9BQVgsRUFBbkI7O0FBRUEsSUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFTLElBQVQsRUFBZSxPQUFmLEVBQXdCO0FBQUE7O0FBQzFDLE1BQU0sY0FBYyxJQUFwQjtBQUNBLE1BQU0sT0FBTyxnQkFBTSxPQUFuQjtBQUNBLE1BQU0sU0FBUyxVQUFVLGNBQXpCO0FBQ0EsTUFBTSxPQUFPLGVBQVMsTUFBVCxDQUFiO0FBQ0EsTUFBTSxJQUFJLGtCQUFRLE1BQVIsQ0FBVjtBQUNBLE1BQU0sVUFBVSxzQkFBWSxNQUFaLENBQWhCO0FBQ0EsTUFBTSxJQUFJLGdCQUFNLE1BQWhCOztBQUVBLE1BQU0sZUFBZSxJQUFyQjs7QUFFQSxTQUFPLFFBQVEsY0FBUixDQUF1QixJQUF2QixDQUFQOztBQUVBLE1BQU0sV0FBVyxlQUFPLFFBQVAsR0FBa0IsUUFBUSxlQUFSLENBQXdCLEtBQUssUUFBN0IsQ0FBbkM7QUFDQSxVQUFRLFFBQVIsQ0FBaUIsTUFBakI7O0FBRUEsTUFBSSxTQUFTLEVBQUUsRUFBRSxLQUFKLENBQWI7O0FBRUEsT0FBSyxNQUFMLEdBQWMsUUFBUSxZQUFSLENBQXFCLEtBQUssZUFBMUIsQ0FBZDtBQUNBLE9BQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxPQUFLLE1BQUwsR0FBaUIsS0FBSyxNQUF0Qjs7QUFFQSxNQUFJLGFBQWEsUUFBUSxXQUFSLENBQW9CLEtBQUssTUFBekIsQ0FBakI7O0FBRUEsTUFBSSxLQUFLLGFBQVQsRUFBd0I7QUFDdEI7QUFDQSxpQkFBYSxXQUFXLE1BQVgsQ0FBa0IsVUFBUyxLQUFULEVBQWdCO0FBQzdDLGFBQU8sQ0FBQyxnQkFBTSxPQUFOLENBQWMsTUFBTSxLQUFOLENBQVksSUFBMUIsRUFBZ0MsS0FBSyxhQUFyQyxDQUFSO0FBQ0QsS0FGWSxDQUFiO0FBR0Q7O0FBRUQsTUFBSSxLQUFLLGdCQUFULEVBQTJCO0FBQ3pCLE1BQUUsUUFBRixDQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsY0FBekI7QUFDRDs7QUFFRCxNQUFJLFFBQVEsRUFBRSxFQUFFLFFBQUosQ0FBWjs7QUFFQTtBQUNBLGtCQUFNLE9BQU4sQ0FBYyxVQUFkLEVBQTBCLFVBQUMsQ0FBRCxFQUFPO0FBQUEsd0JBQ0QsV0FBVyxDQUFYLENBREM7QUFBQSxRQUMxQixLQUQwQixpQkFDMUIsS0FEMEI7QUFBQSxRQUNuQixJQURtQixpQkFDbkIsSUFEbUI7QUFBQSxRQUNWLEtBRFU7O0FBRS9CLFFBQUksZUFBZSxNQUFNLEtBQXpCO0FBQ0EsUUFBSSxnQkFBZ0IsQ0FBQyxJQUFELGNBQWdCLE1BQU0sSUFBTixJQUFjLE1BQU0sSUFBcEMsSUFBNkMsRUFBakU7QUFDQSxRQUFJLElBQUosRUFBVTtBQUNSLHFEQUE2QyxJQUE3QyxlQUEyRCxNQUFNLEtBQWpFO0FBQ0Q7QUFDRCxRQUFJLGtCQUFrQixFQUFFLElBQUYsRUFDcEIsRUFBRSxNQUFGLEVBQVUsWUFBVixDQURvQixFQUVwQixFQUFDLFdBQWMsYUFBZCxxQ0FBMkQsQ0FBNUQsRUFGb0IsQ0FBdEI7O0FBS0EsMEJBQVEsTUFBTSxJQUFkLElBQXNCLFdBQVcsQ0FBWCxDQUF0QjtBQUNBLG9CQUFnQixPQUFoQixDQUF3QixJQUF4QixHQUErQixNQUFNLElBQXJDO0FBQ0EsTUFBRSxRQUFGLENBQVcsV0FBWCxDQUF1QixlQUF2QjtBQUNELEdBZkQ7O0FBaUJBLE1BQUksS0FBSyxTQUFMLENBQWUsTUFBbkIsRUFBMkI7QUFDekIsTUFBRSxPQUFGLEVBQVcsRUFBQyxTQUFTLGNBQVYsRUFBWCxFQUFzQyxJQUF0QyxDQUEyQyxNQUEzQyxFQUFtRCxRQUFuRCxDQUE0RCxLQUE1RDtBQUNBLFNBQUssU0FBTCxDQUFlLE9BQWYsQ0FBdUIsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZO0FBQ2pDLFVBQUksSUFBSixHQUFXLElBQUksSUFBSixJQUFZLGdCQUFNLGFBQU4sQ0FBb0IsSUFBSSxLQUF4QixDQUF2QjtBQUNBLFVBQUksV0FBVyxFQUFFLElBQUYsRUFBUSxJQUFJLEtBQVosRUFBbUI7QUFDaEMsb0RBQTBDLENBRFY7QUFFaEMsY0FBTSxJQUFJO0FBRnNCLE9BQW5CLENBQWY7QUFJQSxRQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLEtBQXJCO0FBQ0QsS0FQRDtBQVFEOztBQUVEO0FBQ0EsU0FBTyxRQUFQLENBQWdCO0FBQ2QsWUFBUSxNQURNO0FBRWQsYUFBUyxHQUZLO0FBR2QsWUFBUSxHQUhNO0FBSWQsZ0JBQVksb0JBQUMsR0FBRCxFQUFNLEVBQU47QUFBQSxhQUFhLFFBQVEsVUFBUixDQUFtQixJQUFuQixDQUF3QixPQUF4QixFQUFpQyxHQUFqQyxFQUFzQyxFQUF0QyxDQUFiO0FBQUEsS0FKRTtBQUtkLFdBQU8sZUFBQyxHQUFELEVBQU0sRUFBTjtBQUFBLGFBQWEsUUFBUSxXQUFSLENBQW9CLElBQXBCLENBQXlCLE9BQXpCLEVBQWtDLEdBQWxDLEVBQXVDLEVBQXZDLENBQWI7QUFBQSxLQUxPO0FBTWQsVUFBTSxjQUFDLEdBQUQsRUFBTSxFQUFOO0FBQUEsYUFBYSxRQUFRLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsR0FBakMsRUFBc0MsRUFBdEMsQ0FBYjtBQUFBLEtBTlE7QUFPZCxZQUFRLHdFQVBNO0FBUWQsaUJBQWE7QUFSQyxHQUFoQjs7QUFXQTtBQUNBLFFBQU0sUUFBTixDQUFlO0FBQ2IsWUFBUSxPQURLO0FBRWIsYUFBUyxHQUZJO0FBR2IsaUJBQWEsTUFIQTtBQUliLFlBQVEsZUFKSztBQUtiLFlBQVEsTUFMSztBQU1iLFlBQVEsS0FOSztBQU9iLGlCQUFhLG9CQVBBO0FBUWIsV0FBTyxlQUFDLEdBQUQsRUFBTSxFQUFOO0FBQUEsYUFBYSxRQUFRLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBeUIsT0FBekIsRUFBa0MsR0FBbEMsRUFBdUMsRUFBdkMsQ0FBYjtBQUFBLEtBUk07QUFTYixVQUFNLGNBQUMsR0FBRCxFQUFNLEVBQU47QUFBQSxhQUFhLFFBQVEsVUFBUixDQUFtQixJQUFuQixDQUF3QixPQUF4QixFQUFpQyxHQUFqQyxFQUFzQyxFQUF0QyxDQUFiO0FBQUEsS0FUTztBQVViLFlBQVEsR0FWSztBQVdiLGdCQUFZLG9CQUFDLEdBQUQsRUFBTSxFQUFOO0FBQUEsYUFBYSxRQUFRLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsR0FBakMsRUFBc0MsRUFBdEMsQ0FBYjtBQUFBLEtBWEM7QUFZYixjQUFVLENBWkc7QUFhYixZQUFRLGdCQUFTLEtBQVQsRUFBZ0IsRUFBaEIsRUFBb0I7QUFDMUIsVUFBSSxRQUFRLFFBQVosRUFBc0I7QUFDcEIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSSxHQUFHLElBQUgsQ0FBUSxNQUFSLEdBQWlCLENBQWpCLE1BQXdCLEVBQUUsS0FBOUIsRUFBcUM7QUFDbkMsZ0JBQVEsUUFBUixHQUFtQixJQUFuQjtBQUNBLHVCQUFlLEdBQUcsSUFBbEI7QUFDRCxPQUhELE1BR087QUFDTCxnQkFBUSxhQUFSLENBQXNCLEtBQXRCO0FBQ0EsZ0JBQVEsUUFBUixHQUFtQixDQUFDLEtBQUssZ0JBQXpCO0FBQ0Q7QUFDRjtBQXpCWSxHQUFmOztBQTRCQSxNQUFJLGlCQUFpQixTQUFqQixjQUFpQixVQUFXO0FBQzlCLFFBQUksUUFBUSxDQUFSLEVBQVcsU0FBWCxDQUFxQixRQUFyQixDQUE4QixtQkFBOUIsQ0FBSixFQUF3RDtBQUN0RCxVQUFJLFlBQVksRUFBaEI7QUFDQSxVQUFJLFdBQVcsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQjtBQUFBLGVBQ2hDLElBQUksSUFBSixLQUFhLFFBQVEsQ0FBUixFQUFXLFlBQVgsQ0FBd0IsTUFBeEIsQ0FEbUI7QUFBQSxPQUFwQixDQUFmO0FBRUEsVUFBSSxZQUFZLFNBQVMsVUFBekIsRUFBcUM7QUFDbkMsWUFBSSxTQUFTO0FBQ1gsZ0JBQU0sUUFESztBQUVYLG1CQUFTLElBRkU7QUFHWCxjQUFJLFNBQVMsSUFIRjtBQUlYLGlCQUFPLFNBQVM7QUFKTCxTQUFiO0FBTUEsa0JBQVUsSUFBVixDQUFlLE1BQWY7QUFDRDtBQUNELGdCQUFVLElBQVYsbURBQWtCLFNBQVMsTUFBM0I7QUFDQSxnQkFBVSxPQUFWLENBQWtCLGlCQUFTO0FBQ3pCLHNCQUFjLEtBQWQsRUFBcUIsSUFBckI7QUFDQSxZQUFJLFFBQVEsU0FBUixJQUFxQixRQUFRLFNBQVIsS0FBc0IsQ0FBL0MsRUFBa0Q7QUFDaEQsa0JBQVEsU0FBUjtBQUNEO0FBQ0YsT0FMRDtBQU1ELEtBcEJELE1Bb0JPO0FBQ0wsb0JBQWMsT0FBZCxFQUF1QixJQUF2QjtBQUNEO0FBQ0YsR0F4QkQ7O0FBMEJBLElBQUUsVUFBRixHQUFlLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZTtBQUM1QixRQUFPLEtBQUssTUFBWixlQUQ0QjtBQUU1QixlQUFXLDJCQUEyQixnQkFBTSxXQUFOO0FBRlYsR0FBZixDQUFmOztBQUtBLE1BQUksY0FBYyxFQUFFLEVBQUUsVUFBSixDQUFsQjs7QUFFQSxNQUFJLFNBQVMsRUFBRSxLQUFGLEVBQVMsRUFBRSxRQUFYLEVBQXFCO0FBQ2hDLFFBQU8sS0FBSyxNQUFaLGFBRGdDO0FBRWhDLGVBQVcsYUFBYSxLQUFLLE1BQUwsQ0FBWTtBQUZKLEdBQXJCLENBQWI7O0FBS0EsTUFBSSxLQUFLLGlCQUFULEVBQTRCO0FBQzFCLFFBQU0sVUFBVSxLQUFLLGFBQUwsQ0FBbUIsR0FBbkIsQ0FBdUIsbUJBQVc7QUFDaEQsVUFBSSxRQUFRLEVBQVIsSUFBYyxLQUFLLHFCQUFMLENBQTJCLE9BQTNCLENBQW1DLFFBQVEsRUFBM0MsTUFBbUQsQ0FBQyxDQUF0RSxFQUF5RTtBQUN2RSxlQUFPLFFBQVEsb0JBQVIsQ0FBNkIsT0FBN0IsQ0FBUDtBQUNEO0FBQ0YsS0FKZSxDQUFoQjtBQUtBLFFBQU0sY0FBYyxFQUFFLFdBQUYsR0FBZ0IsRUFBRSxLQUFGLEVBQVMsT0FBVCxFQUFrQjtBQUNwRCxpQkFBVztBQUR5QyxLQUFsQixDQUFwQzs7QUFJQSxXQUFPLFdBQVAsQ0FBbUIsV0FBbkI7QUFDRDs7QUFFRCxNQUFJLFlBQVksRUFBRSxLQUFGLEVBQVMsQ0FBQyxFQUFFLEtBQUgsRUFBVSxNQUFWLENBQVQsRUFBNEI7QUFDMUMsUUFBTyxLQUFLLE1BQVosZ0JBRDBDO0FBRTFDLGVBQVcsZ0JBQWdCLEtBQUssTUFBTCxDQUFZO0FBRkcsR0FBNUIsQ0FBaEI7O0FBS0EsY0FBWSxNQUFaLENBQW1CLFNBQW5CLEVBQThCLE1BQTlCOztBQUVBLE1BQUksUUFBUSxJQUFSLEtBQWlCLFVBQXJCLEVBQWlDO0FBQy9CLE1BQUUsT0FBRixFQUFXLE1BQVgsQ0FBa0IsV0FBbEI7QUFDRCxHQUZELE1BRU87QUFDTCxNQUFFLE9BQUYsRUFBVyxXQUFYLENBQXVCLFdBQXZCO0FBQ0Q7O0FBRUQsTUFBSSxnQkFBZ0IsZ0JBQU0sUUFBTixDQUFlLGVBQU87QUFDeEMsUUFBSSxHQUFKLEVBQVM7QUFDUCxVQUFJLElBQUksSUFBSixLQUFhLE9BQWIsSUFBd0IsSUFBSSxNQUFKLENBQVcsSUFBWCxLQUFvQixXQUFoRCxFQUE2RDtBQUMzRCxlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFJLFNBQVMsRUFBRSxJQUFJLE1BQU4sRUFBYyxPQUFkLENBQXNCLGFBQXRCLENBQWI7QUFDQSxjQUFRLGFBQVIsQ0FBc0IsTUFBdEI7QUFDQSxjQUFRLElBQVIsQ0FBYSxJQUFiLENBQWtCLE9BQWxCO0FBQ0Q7QUFDRixHQVZtQixDQUFwQjs7QUFZQTtBQUNBLFNBQU8sRUFBUCxDQUFVLG1CQUFWLEVBQStCLHNFQUEvQixFQUF1RyxhQUF2Rzs7QUFFQSxJQUFFLElBQUYsRUFBUSxFQUFFLFFBQVYsRUFBb0IsS0FBcEIsQ0FBMEIsZUFBTztBQUMvQixRQUFJLFdBQVcsRUFBRSxJQUFJLE1BQU4sRUFBYyxPQUFkLENBQXNCLElBQXRCLENBQWY7QUFDQSxZQUFRLFNBQVIsR0FBb0IsU0FBcEI7QUFDQSxtQkFBZSxRQUFmO0FBQ0EsWUFBUSxJQUFSLENBQWEsSUFBYixDQUFrQixPQUFsQjtBQUNELEdBTEQ7O0FBT0E7QUFDQSxNQUFJLG9CQUFvQixTQUFwQixpQkFBb0IsR0FBTTtBQUM1QixRQUFJLGNBQWMsRUFBbEI7QUFDQSxRQUFNLGdCQUFnQixTQUFoQixhQUFnQjtBQUFBLGFBQ3RCLGdCQUFNLE1BQU4sQ0FBYSxJQUFiLEVBQW1CLEtBQUssSUFBTCxDQUFuQixFQUErQjtBQUM3Qiw0Q0FBa0M7QUFETCxPQUEvQixDQURzQjtBQUFBLEtBQXRCOztBQUtBLFFBQUksS0FBSyxPQUFMLElBQWdCLENBQUMsRUFBRSw4QkFBRixFQUFrQyxFQUFFLEtBQXBDLEVBQTJDLE1BQWhFLEVBQXdFO0FBQ3RFLGtCQUFZLElBQVosQ0FBaUIsSUFBakI7QUFDQSxhQUFPLE9BQVAsQ0FBZSxjQUFjLFNBQWQsQ0FBZjtBQUNEOztBQUVELFFBQUksS0FBSyxNQUFMLElBQWUsQ0FBQyxFQUFFLDhCQUFGLEVBQWtDLEVBQUUsS0FBcEMsRUFBMkMsTUFBL0QsRUFBdUU7QUFDckUsa0JBQVksSUFBWixDQUFpQixJQUFqQjtBQUNBLGFBQU8sTUFBUCxDQUFjLGNBQWMsUUFBZCxDQUFkO0FBQ0Q7O0FBRUQsWUFBUSxVQUFSLENBQW1CLEVBQUUsS0FBckI7QUFDQSxXQUFPLFlBQVksSUFBWixDQUFpQjtBQUFBLGFBQVEsU0FBUyxJQUFqQjtBQUFBLEtBQWpCLENBQVA7QUFDRCxHQW5CRDs7QUFxQkEsTUFBSSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBUyxNQUFULEVBQWdDO0FBQUEsUUFBZixLQUFlLHVFQUFQLEtBQU87O0FBQ2xELFFBQUksUUFBUSxFQUFaO0FBQ0EsUUFBSSxrQkFBa0IsTUFBdEIsRUFBOEI7QUFBQSxrQ0FDUCxzQkFBUSxPQUFPLENBQVAsRUFBVSxPQUFWLENBQWtCLElBQTFCLENBRE87QUFBQSxVQUN2QixLQUR1Qix5QkFDdkIsS0FEdUI7QUFBQSxVQUNoQixLQURnQix5QkFDaEIsS0FEZ0I7O0FBRTVCLFVBQUksc0JBQVEsT0FBTyxDQUFQLEVBQVUsT0FBVixDQUFrQixJQUExQixDQUFKLEVBQXFDO0FBQ25DLGdCQUFRLHNCQUFjLEVBQWQsRUFBa0IsS0FBbEIsQ0FBUjtBQUNBLGNBQU0sS0FBTixHQUFjLEtBQWQ7QUFDRCxPQUhELE1BR087QUFBRTtBQUNQLFlBQUksU0FBUSxPQUFPLENBQVAsRUFBVSxVQUF0QjtBQUNBLFlBQUksQ0FBQyxLQUFMLEVBQVk7QUFDVixnQkFBTSxNQUFOLEdBQWUsT0FBTyxRQUFQLEdBQWtCLEdBQWxCLENBQXNCLFVBQUMsS0FBRCxFQUFRLElBQVIsRUFBaUI7QUFDcEQsbUJBQU87QUFDTCxxQkFBTyxFQUFFLElBQUYsRUFBUSxJQUFSLEVBREY7QUFFTCxxQkFBTyxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsT0FBYixDQUZGO0FBR0wsd0JBQVUsUUFBUSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsVUFBYixDQUFSO0FBSEwsYUFBUDtBQUtELFdBTmMsQ0FBZjtBQU9EOztBQUVELGFBQUssSUFBSSxJQUFJLE9BQU0sTUFBTixHQUFlLENBQTVCLEVBQStCLEtBQUssQ0FBcEMsRUFBdUMsR0FBdkMsRUFBNEM7QUFDMUMsZ0JBQU0sT0FBTSxDQUFOLEVBQVMsSUFBZixJQUF1QixPQUFNLENBQU4sRUFBUyxLQUFoQztBQUNEO0FBQ0Y7QUFDRixLQXJCRCxNQXFCTztBQUNMLGNBQVEsc0JBQWMsRUFBZCxFQUFrQixNQUFsQixDQUFSO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLE1BQU0sSUFBWCxFQUFpQjtBQUNmLFlBQU0sSUFBTixHQUFhLGdCQUFNLFFBQU4sQ0FBZSxLQUFmLENBQWI7QUFDRDs7QUFFRCxRQUFJLFNBQVMsZ0JBQU0sT0FBTixDQUFjLE1BQU0sSUFBcEIsRUFDWCxDQUFDLE1BQUQsRUFDQyxRQURELEVBRUMsTUFGRCxFQUdDLE1BSEQsRUFJQyxRQUpELEVBS0MsVUFMRCxFQU1DLGNBTkQsQ0FEVyxDQUFiLEVBT3FCO0FBQ25CLFlBQU0sU0FBTixHQUFrQixNQUFNLFNBQU4sSUFBbUIsY0FBckM7QUFDRCxLQVRELE1BU087QUFDTCxZQUFNLFNBQU4sR0FBa0IsTUFBTSxTQUF4QjtBQUNEOztBQUVELFFBQUksUUFBUSw2QkFBNkIsSUFBN0IsQ0FBa0MsTUFBTSxTQUF4QyxDQUFaO0FBQ0EsUUFBSSxLQUFKLEVBQVc7QUFDVCxZQUFNLEtBQU4sR0FBYyxNQUFNLENBQU4sQ0FBZDtBQUNEOztBQUVELG1CQUFlLEtBQWYsRUFBc0IsS0FBdEI7O0FBRUEsUUFBSSxLQUFKLEVBQVc7QUFDVCxlQUFTLGFBQVQsQ0FBdUIsaUJBQU8sVUFBOUI7QUFDRDs7QUFFRCxjQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsT0FBM0I7QUFDRCxHQXhERDs7QUEwREE7QUFDQSxNQUFJLGFBQWEsU0FBYixVQUFhLENBQVMsUUFBVCxFQUFtQjtBQUNsQyxlQUFXLFFBQVEsT0FBUixDQUFnQixRQUFoQixDQUFYO0FBQ0EsUUFBSSxZQUFZLFNBQVMsTUFBekIsRUFBaUM7QUFDL0IsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFNBQVMsTUFBN0IsRUFBcUMsR0FBckMsRUFBMEM7QUFDeEMsWUFBSSxZQUFZLGdCQUFNLE9BQU4sQ0FBYyxTQUFTLENBQVQsQ0FBZCxDQUFoQjtBQUNBLHNCQUFjLFNBQWQ7QUFDRDtBQUNELGdCQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsT0FBM0I7QUFDRCxLQU5ELE1BTU8sSUFBSSxLQUFLLGFBQUwsSUFBc0IsS0FBSyxhQUFMLENBQW1CLE1BQTdDLEVBQXFEO0FBQzFEO0FBQ0EsV0FBSyxhQUFMLENBQW1CLE9BQW5CLENBQTJCO0FBQUEsZUFBUyxjQUFjLEtBQWQsQ0FBVDtBQUFBLE9BQTNCO0FBQ0EsZ0JBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixPQUEzQjtBQUNELEtBSk0sTUFJQSxJQUFJLENBQUMsS0FBSyxPQUFOLElBQWlCLENBQUMsS0FBSyxNQUEzQixFQUFtQztBQUN4QyxnQkFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLE9BQXhCO0FBQ0EsZ0JBQVUsT0FBVixDQUFrQixPQUFsQixHQUE0QixLQUFLLFVBQWpDO0FBQ0Q7O0FBRUQsUUFBSSxtQkFBSixFQUF5QjtBQUN2QixnQkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLE9BQTNCO0FBQ0Q7QUFDRixHQXBCRDs7QUFzQkE7Ozs7Ozs7QUFPQSxNQUFJLGVBQWUsc0JBQVMsU0FBVCxFQUFvQjtBQUNyQyxRQUFJLGdCQUFnQixDQUNoQixnQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixLQUFLLFNBQXZCLEVBQWtDLEVBQUMsV0FBVyxhQUFaLEVBQWxDLENBRGdCLENBQXBCO0FBR0EsUUFBSSxlQUFlLGlDQUNhLEtBQUssYUFEbEIsY0FBbkI7QUFHQSxRQUFNLGFBQWEsVUFBVSxRQUFWLElBQXVCLFVBQVUsSUFBVixLQUFtQixnQkFBN0Q7QUFDQSxRQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsUUFBUztBQUNsQyxVQUFJLGFBQWE7QUFDYixvQkFEYTtBQUViLGVBQU8sZ0JBQU0sVUFBTixDQUFpQixLQUFqQjtBQUZNLE9BQWpCOztBQUtBLFVBQUksVUFBVSxJQUFWLEtBQW1CLGNBQXZCLEVBQXVDO0FBQ3JDLG1CQUFXLFFBQVgsR0FBc0IsS0FBdEI7QUFDRDs7QUFFRCxhQUFPLFVBQVA7QUFDRCxLQVhEOztBQWFBLFFBQUksQ0FBQyxVQUFVLE1BQVgsSUFBcUIsQ0FBQyxVQUFVLE1BQVYsQ0FBaUIsTUFBM0MsRUFBbUQ7QUFDakQsVUFBSSxrQkFBa0IsZ0JBQU0sT0FBTixDQUFjLFVBQVUsSUFBeEIsRUFBOEIsQ0FBQyxnQkFBRCxFQUFtQixVQUFuQixDQUE5QixJQUFnRSxDQUFDLENBQUQsQ0FBaEUsR0FBc0UsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBNUY7QUFDQSxnQkFBVSxNQUFWLEdBQW1CLGdCQUFnQixHQUFoQixDQUFvQixVQUFTLEtBQVQsRUFBZ0I7QUFDckQsWUFBSSxRQUFXLEtBQUssTUFBaEIsU0FBMEIsS0FBOUI7QUFDQSxlQUFPLG1CQUFtQixLQUFuQixDQUFQO0FBQ0QsT0FIa0IsQ0FBbkI7O0FBS0YsVUFBSSxjQUFjLFVBQVUsTUFBVixDQUFpQixDQUFqQixDQUFsQjtBQUNFLFVBQUksWUFBWSxjQUFaLENBQTJCLFVBQTNCLENBQUosRUFBNEM7QUFDMUMsb0JBQVksUUFBWixHQUF1QixJQUF2QjtBQUNEO0FBQ0YsS0FYRCxNQVdPO0FBQ0w7QUFDQSxnQkFBVSxNQUFWLENBQWlCLE9BQWpCLENBQXlCO0FBQUEsZUFBVSxzQkFBYyxFQUFkLEVBQWtCLEVBQUMsVUFBVSxLQUFYLEVBQWxCLEVBQXFDLE1BQXJDLENBQVY7QUFBQSxPQUF6QjtBQUNEOztBQUVELGlCQUFhLElBQWIsQ0FBa0IscUNBQWxCOztBQUVBLGlCQUFhLElBQWIsQ0FBa0IsK0JBQWxCO0FBQ0Esb0JBQU0sT0FBTixDQUFjLFVBQVUsTUFBeEIsRUFBZ0MsYUFBSztBQUNuQyxtQkFBYSxJQUFiLENBQWtCLG1CQUFtQixVQUFVLElBQTdCLEVBQW1DLFVBQVUsTUFBVixDQUFpQixDQUFqQixDQUFuQyxFQUF3RCxVQUF4RCxDQUFsQjtBQUNELEtBRkQ7QUFHQSxpQkFBYSxJQUFiLENBQWtCLE9BQWxCO0FBQ0EsaUJBQWEsSUFBYixDQUFrQixnQkFBTSxNQUFOLENBQWEsS0FBYixFQUFvQixhQUFwQixFQUFtQyxFQUFDLFdBQVcsZ0JBQVosRUFBbkMsRUFBa0UsU0FBcEY7QUFDQSxpQkFBYSxJQUFiLENBQWtCLFFBQWxCOztBQUVBLFdBQU8sZ0JBQU0sTUFBTixDQUFhLEtBQWIsRUFBb0IsYUFBYSxJQUFiLENBQWtCLEVBQWxCLENBQXBCLEVBQTJDLEVBQUMsV0FBVywwQkFBWixFQUEzQyxFQUFvRixTQUEzRjtBQUNELEdBaEREOztBQWtEQSxNQUFNLG9CQUFvQixTQUFwQixpQkFBb0IsT0FBUTtBQUNoQyxRQUFNLGVBQWUsQ0FDbkIsVUFEbUIsRUFFbkIsT0FGbUIsRUFHbkIsYUFIbUIsRUFJbkIsYUFKbUIsRUFLbkIsV0FMbUIsRUFNbkIsTUFObUIsRUFPbkIsUUFQbUIsRUFRbkIsT0FSbUIsQ0FBckI7QUFVQSxRQUFJLGNBQWMsQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixNQUF4QixFQUFnQyxjQUFoQyxFQUFnRCxNQUFoRCxDQUF1RCxFQUFFLFlBQXpELENBQWxCO0FBQ0EsUUFBSSxhQUFhLENBQUMsZ0JBQU0sT0FBTixDQUFjLElBQWQsRUFBb0IsV0FBcEIsQ0FBbEI7O0FBRUEsUUFBTSxlQUFlO0FBQ25CLG9CQUFjLGFBQWEsTUFBYixDQUFvQixDQUNoQyxTQURnQyxDQUFwQixDQURLO0FBSW5CLGNBQVEsQ0FDTixPQURNLEVBRU4sU0FGTSxFQUdOLE9BSE0sRUFJTixXQUpNLEVBS04sTUFMTSxFQU1OLE9BTk0sRUFPTixRQVBNLENBSlc7QUFhbkIsZ0JBQVUsQ0FDUixVQURRLEVBRVIsT0FGUSxFQUdSLGFBSFEsRUFJUixRQUpRLEVBS1IsUUFMUSxFQU1SLFdBTlEsRUFPUixNQVBRLEVBUVIsUUFSUSxFQVNSLE9BVFEsRUFVUixTQVZRLENBYlM7QUF5Qm5CLFlBQU0sYUFBYSxNQUFiLENBQW9CLENBQ3hCLFNBRHdCLEVBRXhCLFdBRndCLENBQXBCLENBekJhO0FBNkJuQixZQUFNLFlBN0JhO0FBOEJuQixZQUFNLGFBQWEsTUFBYixDQUFvQixDQUN4QixVQUR3QixDQUFwQixDQTlCYTtBQWlDbkIsY0FBUSxDQUNOLE9BRE0sRUFFTixTQUZNLEVBR04sV0FITSxFQUlOLFFBSk0sQ0FqQ1c7QUF1Q25CLGNBQVEsQ0FDTixNQURNLEVBRU4sT0FGTSxFQUdOLFFBSE0sQ0F2Q1c7QUE0Q25CLGlCQUFXLENBQ1QsT0FEUyxFQUVULFNBRlMsRUFHVCxXQUhTLEVBSVQsUUFKUyxDQTVDUTtBQWtEbkIsY0FBUSxhQUFhLE1BQWIsQ0FBb0IsQ0FDMUIsS0FEMEIsRUFFMUIsS0FGMEIsRUFHMUIsTUFIMEIsQ0FBcEIsQ0FsRFc7QUF1RG5CLGNBQVEsYUFBYSxNQUFiLENBQW9CLENBQzFCLFVBRDBCLEVBRTFCLFNBRjBCLENBQXBCLENBdkRXO0FBMkRuQixnQkFBVSxhQUFhLE1BQWIsQ0FBb0IsQ0FDNUIsU0FENEIsRUFFNUIsV0FGNEIsRUFHNUIsTUFINEIsQ0FBcEI7O0FBM0RTLEtBQXJCOztBQW1FQSxpQkFBYSxnQkFBYixJQUFpQyxhQUFhLFFBQTlDO0FBQ0EsaUJBQWEsYUFBYixJQUE4QixhQUFhLFFBQTNDOztBQUVBLFFBQUksWUFBWSxhQUFhLElBQWIsQ0FBaEI7O0FBRUEsUUFBSSxTQUFTLGFBQWIsRUFBNEI7QUFDMUIsc0JBQU0sTUFBTixDQUFhLFFBQWIsRUFBdUIsU0FBdkI7QUFDRDs7QUFFRDtBQUNBLFFBQUksZ0JBQU0sT0FBTixDQUFjLElBQWQsRUFBb0IsQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixRQUF4QixDQUFwQixDQUFKLEVBQTREO0FBQzFELHNCQUFNLE1BQU4sQ0FBYSxhQUFiLEVBQTRCLFNBQTVCO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLFVBQUwsRUFBaUI7QUFDZixzQkFBTSxNQUFOLENBQWEsT0FBYixFQUFzQixTQUF0QjtBQUNEOztBQUVELFdBQU8sYUFBYSxZQUFwQjtBQUNELEdBcEdEOztBQXNHQTs7Ozs7QUFLQSxNQUFJLFlBQVksMkJBQVU7QUFDeEIsUUFBSSxZQUFZLEVBQWhCO0FBQ0EsUUFBSSxhQUFhLGtCQUFrQixPQUFPLElBQXpCLENBQWpCO0FBQ0EsUUFBTSxjQUFjO0FBQ2xCLGdCQUFVO0FBQUEsZUFBTSxjQUFjLE1BQWQsQ0FBTjtBQUFBLE9BRFE7QUFFbEIsY0FBUTtBQUFBLGVBQU0sY0FBYyxRQUFkLEVBQXdCLE1BQXhCLEVBQWdDLEVBQUMsT0FBTyxLQUFLLE1BQWIsRUFBaEMsQ0FBTjtBQUFBLE9BRlU7QUFHbEIsY0FBUSxrQkFBTTtBQUNaLFlBQUksU0FBUztBQUNYLGlCQUFPLEtBQUssTUFERDtBQUVYLGtCQUFRLGdCQUFNLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLE9BQU8sSUFBUCxDQUFZLE9BQVosQ0FBb0IsUUFBcEIsRUFBOEIsRUFBOUIsQ0FBeEI7QUFGRyxTQUFiOztBQUtBLGVBQU8sY0FBYyxRQUFkLEVBQXdCLE1BQXhCLEVBQWdDLE1BQWhDLENBQVA7QUFDRCxPQVZpQjtBQVdsQixhQUFPO0FBQUEsZUFBTSxjQUFjLE9BQWQsRUFBdUIsTUFBdkIsQ0FBTjtBQUFBLE9BWFc7QUFZbEIsbUJBQWE7QUFBQSxlQUFNLGNBQWMsYUFBZCxFQUE2QixNQUE3QixDQUFOO0FBQUEsT0FaSztBQWFsQixlQUFTO0FBQUEsZUFBTSxnQkFBZ0IsU0FBaEIsRUFBMkIsTUFBM0IsRUFBbUMsU0FBUyxPQUFPLElBQWhCLENBQW5DLENBQU47QUFBQSxPQWJTO0FBY2xCLGFBQU87QUFBQSxlQUFNLFVBQVUsT0FBTyxLQUFqQixDQUFOO0FBQUEsT0FkVztBQWVsQixtQkFBYTtBQUFBLGVBQU0sY0FBYyxhQUFkLEVBQTZCLE1BQTdCLENBQU47QUFBQSxPQWZLO0FBZ0JsQixZQUFNO0FBQUEsZUFBTSxnQkFBZ0IsTUFBaEIsRUFBd0IsTUFBeEIsQ0FBTjtBQUFBLE9BaEJZO0FBaUJsQixpQkFBVztBQUFBLGVBQU0sY0FBYyxXQUFkLEVBQTJCLE1BQTNCLENBQU47QUFBQSxPQWpCTztBQWtCbEIsWUFBTTtBQUFBLGVBQU0sY0FBYyxNQUFkLEVBQXNCLE1BQXRCLENBQU47QUFBQSxPQWxCWTtBQW1CbEIsYUFBTztBQUFBLGVBQU0sY0FBYyxPQUFkLEVBQXVCLE1BQXZCLENBQU47QUFBQSxPQW5CVztBQW9CbEIsaUJBQVc7QUFBQSxlQUFNLGdCQUFnQixXQUFoQixFQUE2QixNQUE3QixDQUFOO0FBQUEsT0FwQk87QUFxQmxCLGNBQVEsa0JBQU07QUFDWixZQUFJLGVBQWUsT0FBTyxJQUFQLEtBQWdCLFNBQWhCLEdBQTRCLHVCQUE1QixHQUFzRCxFQUF6RTtBQUNBLFlBQUksaUJBQWlCLG1DQUNhLFlBRGIsT0FBckI7QUFHQSxhQUFLLEdBQUwsSUFBWSxLQUFLLEtBQWpCLEVBQXdCO0FBQ3RCLGNBQUksS0FBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixHQUExQixDQUFKLEVBQW9DO0FBQ2xDLGdCQUFJLFVBQVUsZ0JBQU0sT0FBTixDQUFjLEdBQWQsRUFBbUIsS0FBbkIsSUFBNEIsU0FBNUIsR0FBd0MsRUFBdEQ7QUFDQSxnQkFBSSxrQkFBZ0IsS0FBSyxNQUFyQixlQUFxQyxHQUF6QztBQUNBLDJCQUFlLElBQWYsbURBQW9FLEdBQXBFLGNBQWdGLE1BQWhGLFVBQTJGLE9BQTNGLDRDQUF5SSxNQUF6SSxVQUFvSixLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQXBKO0FBQ0Q7QUFDRjtBQUNELHVCQUFlLElBQWYsQ0FBb0IsUUFBcEI7QUFDQSxZQUFJLGVBQWUsRUFBQyxPQUFPLEtBQUssS0FBYixFQUFvQixRQUFRLEtBQUssU0FBakMsRUFBNEMsU0FBUyxlQUFlLElBQWYsQ0FBb0IsRUFBcEIsQ0FBckQsRUFBbkI7O0FBRUEsZUFBTyxjQUFjLFFBQWQsRUFBd0IsTUFBeEIsRUFBZ0MsWUFBaEMsQ0FBUDtBQUNELE9BckNpQjtBQXNDbEIsYUFBTztBQUFBLGVBQU0sY0FBYyxPQUFkLEVBQXVCLE1BQXZCLEVBQStCLEVBQUMsT0FBTyxLQUFLLFdBQWIsRUFBMEIsUUFBUSxLQUFLLGNBQXZDLEVBQS9CLENBQU47QUFBQSxPQXRDVztBQXVDbEIsZUFBUztBQUFBLGVBQU0sYUFBYSxNQUFiLENBQU47QUFBQTtBQXZDUyxLQUFwQjtBQXlDQSxRQUFJLFlBQUo7QUFDQSxRQUFJLFFBQVEsT0FBTyxJQUFQLEtBQWdCLFNBQWhCLEdBQTRCLE9BQU8sSUFBUCxDQUFZLEtBQVosQ0FBa0IsR0FBbEIsQ0FBNUIsR0FBcUQsRUFBakU7QUFDQSxRQUFJLFdBQVcsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLE1BQWYsQ0FBZjs7QUFFQSxRQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixlQUFTLE9BQVQsQ0FBaUIsbUJBQVc7QUFDMUIsb0JBQVksT0FBWixJQUF1QjtBQUFBLGlCQUFNLGdCQUFnQixPQUFoQixFQUF5QixNQUF6QixDQUFOO0FBQUEsU0FBdkI7QUFDRCxPQUZEO0FBR0Q7O0FBRUQsUUFBSSxPQUFPLElBQVAsS0FBZ0IsTUFBcEIsRUFBNEI7QUFDMUIsa0JBQVksVUFBWixJQUEwQixZQUFNO0FBQzlCLFlBQUksU0FBUztBQUNYLGlCQUFPLEtBQUssYUFERDtBQUVYLGtCQUFRLEtBQUs7QUFGRixTQUFiO0FBSUEsZUFBTyxjQUFjLFVBQWQsRUFBMEIsTUFBMUIsRUFBa0MsTUFBbEMsQ0FBUDtBQUNELE9BTkQ7QUFPRDs7QUFFRCxRQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixrQkFBWSxVQUFaLElBQTBCLFlBQU07QUFDOUIsZUFBTyxjQUFjLFVBQWQsRUFBMEIsTUFBMUIsRUFBa0MsRUFBQyxPQUFPLEdBQVIsRUFBYSxRQUFRLEtBQUssaUJBQTFCLEVBQWxDLENBQVA7QUFDRCxPQUZEO0FBR0Q7O0FBRUQsd0JBQVksVUFBWixFQUF3QixPQUF4QixDQUFnQyxpQkFBUztBQUN2QyxVQUFJLE9BQU8sV0FBVyxLQUFYLENBQVg7QUFDQSxVQUFJLGlCQUFpQixDQUFDLElBQUQsQ0FBckI7O0FBRUEsVUFBSSxLQUFLLHFCQUFMLENBQTJCLE9BQU8sSUFBbEMsQ0FBSixFQUE2QztBQUMzQyxZQUFJLG9CQUFvQixLQUFLLHFCQUFMLENBQTJCLE9BQU8sSUFBbEMsQ0FBeEI7QUFDQSx1QkFBZSxJQUFmLENBQW9CLENBQUMsZ0JBQU0sT0FBTixDQUFjLElBQWQsRUFBb0IsaUJBQXBCLENBQXJCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLLGFBQUwsQ0FBbUIsT0FBTyxJQUExQixDQUFKLEVBQXFDO0FBQ25DLFlBQUksWUFBWSxvQkFBWSxLQUFLLGFBQUwsQ0FBbUIsT0FBTyxJQUExQixDQUFaLENBQWhCO0FBQ0EsdUJBQWUsSUFBZixDQUFvQixDQUFDLGdCQUFNLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLFNBQXBCLENBQXJCO0FBQ0Q7O0FBRUQsVUFBSSxnQkFBTSxPQUFOLENBQWMsSUFBZCxFQUFvQixLQUFLLGFBQXpCLENBQUosRUFBNkM7QUFDM0MsdUJBQWUsSUFBZixDQUFvQixLQUFwQjtBQUNEOztBQUVELFVBQUksZUFBZSxLQUFmLENBQXFCO0FBQUEsZUFBTyxRQUFRLElBQWY7QUFBQSxPQUFyQixDQUFKLEVBQStDO0FBQzdDLGtCQUFVLElBQVYsQ0FBZSxZQUFZLElBQVosR0FBZjtBQUNEO0FBQ0YsS0FyQkQ7O0FBdUJBO0FBQ0EsUUFBSSxLQUFLLGFBQUwsQ0FBbUIsT0FBTyxJQUExQixDQUFKLEVBQXFDO0FBQ25DLGdCQUFVLElBQVYsQ0FBZSxxQkFBcUIsS0FBSyxhQUFMLENBQW1CLE9BQU8sSUFBMUIsQ0FBckIsRUFBc0QsTUFBdEQsQ0FBZjtBQUNEOztBQUVELFdBQU8sVUFBVSxJQUFWLENBQWUsRUFBZixDQUFQO0FBQ0QsR0FuR0Q7O0FBcUdBOzs7Ozs7QUFNQSxXQUFTLG9CQUFULENBQThCLFlBQTlCLEVBQTRDLE1BQTVDLEVBQW9EO0FBQ2xELFFBQUksV0FBVyxFQUFmOztBQUVBLFNBQUssSUFBSSxTQUFULElBQXNCLFlBQXRCLEVBQW9DO0FBQ2xDLFVBQUksYUFBYSxjQUFiLENBQTRCLFNBQTVCLENBQUosRUFBNEM7QUFDMUMsWUFBSSxPQUFPLEtBQUssU0FBTCxDQUFYO0FBQ0EsWUFBSSxZQUFZLGFBQWEsU0FBYixFQUF3QixLQUF4QztBQUNBLHFCQUFhLFNBQWIsRUFBd0IsS0FBeEIsR0FBZ0MsT0FBTyxTQUFQLEtBQXFCLGFBQWEsU0FBYixFQUF3QixLQUE3QyxJQUFzRCxFQUF0Rjs7QUFFQSxZQUFJLGFBQWEsU0FBYixFQUF3QixLQUE1QixFQUFtQztBQUNqQyxlQUFLLFNBQUwsSUFBa0IsYUFBYSxTQUFiLEVBQXdCLEtBQTFDO0FBQ0Q7O0FBRUQsWUFBSSxhQUFhLFNBQWIsRUFBd0IsT0FBNUIsRUFBcUM7QUFDbkMsbUJBQVMsSUFBVCxDQUFjLGdCQUFnQixTQUFoQixFQUEyQixhQUFhLFNBQWIsQ0FBM0IsQ0FBZDtBQUNELFNBRkQsTUFFTztBQUNMLG1CQUFTLElBQVQsQ0FBYyxlQUFlLFNBQWYsRUFBMEIsYUFBYSxTQUFiLENBQTFCLENBQWQ7QUFDRDs7QUFFRCxhQUFLLFNBQUwsSUFBa0IsSUFBbEI7QUFDQSxxQkFBYSxTQUFiLEVBQXdCLEtBQXhCLEdBQWdDLFNBQWhDO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLFNBQVMsSUFBVCxDQUFjLEVBQWQsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7QUFNQSxXQUFTLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBOUIsRUFBcUM7QUFDbkMsUUFBSSxZQUFZO0FBQ1osVUFBSSxPQUFPLEdBQVAsR0FBYSxLQUFLLE1BRFY7QUFFWixhQUFPLE1BQU0sV0FBTixJQUFxQixNQUFNLEtBQTNCLElBQW9DLEtBQUssV0FBTCxFQUYvQjtBQUdaLFlBQU0sSUFITTtBQUlaLFlBQU0sTUFBTSxJQUFOLElBQWMsTUFKUjtBQUtaLGlCQUFXLFVBQVEsSUFBUjtBQUxDLEtBQWhCO0FBT0EsUUFBSSx5QkFBdUIsVUFBVSxFQUFqQyxVQUF3QyxLQUFLLElBQUwsQ0FBeEMsYUFBSjs7QUFFQSxRQUFJLENBQUMsZ0JBQU0sT0FBTixDQUFjLFVBQVUsSUFBeEIsRUFBOEIsQ0FBQyxVQUFELEVBQWEsZ0JBQWIsRUFBK0IsYUFBL0IsQ0FBOUIsQ0FBTCxFQUFtRjtBQUNqRixnQkFBVSxTQUFWLENBQW9CLElBQXBCLENBQXlCLGNBQXpCO0FBQ0Q7O0FBRUQsZ0JBQVksc0JBQWMsRUFBZCxFQUFrQixLQUFsQixFQUF5QixTQUF6QixDQUFaO0FBQ0EsUUFBSSx3QkFBc0IsZ0JBQU0sVUFBTixDQUFpQixTQUFqQixDQUF0QixNQUFKO0FBQ0EsUUFBSSx5Q0FBdUMsU0FBdkMsV0FBSjtBQUNBLHVDQUFpQyxJQUFqQyxlQUErQyxLQUEvQyxHQUF1RCxTQUF2RDtBQUNEOztBQUVEOzs7Ozs7O0FBT0EsV0FBUyxlQUFULENBQXlCLElBQXpCLEVBQStCLE9BQS9CLEVBQXdDO0FBQ3RDLFFBQUksUUFBUSxvQkFBWSxRQUFRLE9BQXBCLEVBQTZCLEdBQTdCLENBQWlDLGVBQU87QUFDbEQsVUFBSSxRQUFRLEVBQUMsT0FBTyxHQUFSLEVBQVo7QUFDQSxVQUFJLFFBQVEsUUFBUSxLQUFwQixFQUEyQjtBQUN6QixjQUFNLFFBQU4sR0FBaUIsSUFBakI7QUFDRDtBQUNELDBCQUFrQixnQkFBTSxVQUFOLENBQWlCLEtBQWpCLENBQWxCLFNBQTZDLFFBQVEsT0FBUixDQUFnQixHQUFoQixDQUE3QztBQUNELEtBTlcsQ0FBWjtBQU9BLFFBQUksY0FBYztBQUNoQixVQUFJLE9BQU8sR0FBUCxHQUFhLEtBQUssTUFETjtBQUVoQixhQUFPLFFBQVEsV0FBUixJQUF1QixRQUFRLEtBQS9CLElBQXdDLEtBQUssV0FBTCxFQUYvQjtBQUdoQixZQUFNLElBSFU7QUFJaEIsMEJBQWtCLElBQWxCO0FBSmdCLEtBQWxCO0FBTUEsUUFBSSx5QkFBdUIsWUFBWSxFQUFuQyxVQUEwQyxLQUFLLElBQUwsQ0FBMUMsYUFBSjs7QUFFQSx3QkFBWSxPQUFaLEVBQXFCLE1BQXJCLENBQTRCLGdCQUFRO0FBQ2xDLGFBQU8sQ0FBQyxnQkFBTSxPQUFOLENBQWMsSUFBZCxFQUFvQixDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLE9BQXJCLENBQXBCLENBQVI7QUFDRCxLQUZELEVBRUcsT0FGSCxDQUVXLFVBQVMsSUFBVCxFQUFlO0FBQ3hCLGtCQUFZLElBQVosSUFBb0IsUUFBUSxJQUFSLENBQXBCO0FBQ0QsS0FKRDs7QUFNQSxRQUFJLHNCQUFvQixnQkFBTSxVQUFOLENBQWlCLFdBQWpCLENBQXBCLFNBQXFELE1BQU0sSUFBTixDQUFXLEVBQVgsQ0FBckQsY0FBSjtBQUNBLFFBQUkseUNBQXVDLE1BQXZDLFdBQUo7QUFDQSx1Q0FBaUMsSUFBakMsZUFBK0MsS0FBL0MsR0FBdUQsU0FBdkQ7QUFDRDs7QUFFRCxNQUFJLGdCQUFnQixTQUFoQixhQUFnQixDQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCLE1BQXZCLEVBQStCO0FBQ2pELFFBQUksS0FBSyxhQUFMLENBQW1CLE9BQU8sSUFBMUIsS0FBbUMsS0FBSyxhQUFMLENBQW1CLE9BQU8sSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBdkMsRUFBOEU7QUFDNUU7QUFDRDs7QUFFRCxRQUFJLFFBQVEsU0FBUixLQUFRLENBQUMsR0FBRCxFQUFTO0FBQ25CLDhCQUFzQixJQUF0QixTQUE4QixLQUFLLE1BQW5DLFVBQThDLEdBQTlDO0FBQ0QsS0FGRDtBQUdBLFFBQUksVUFBVyxPQUFPLElBQVAsSUFBZSxTQUFmLEdBQTJCLEVBQTFDO0FBQ0EsUUFBSSwrQ0FBNkMsSUFBN0MsZ0JBQTRELElBQTVELHVCQUFrRixPQUFsRixhQUFpRyxJQUFqRyxTQUF5RyxLQUFLLE1BQTlHLFNBQUo7QUFDQSxRQUFJLE9BQU8sRUFBWDtBQUNBLFFBQUksUUFBUSxDQUNWLEtBRFUsQ0FBWjs7QUFJQSxRQUFJLE9BQU8sS0FBWCxFQUFrQjtBQUNoQixXQUFLLE9BQUwsQ0FBYSxNQUFNLE9BQU8sS0FBYixDQUFiO0FBQ0Q7O0FBRUQsUUFBSSxPQUFPLE1BQVgsRUFBbUI7QUFDakIsWUFBTSxJQUFOLENBQVcsTUFBTSxPQUFPLE1BQWIsQ0FBWDtBQUNEOztBQUVELFFBQUksT0FBTyxPQUFYLEVBQW9CO0FBQ2xCLFlBQU0sSUFBTixDQUFXLE9BQU8sT0FBbEI7QUFDRDs7QUFFRCxVQUFNLE9BQU4sQ0FBYywwQkFBZDtBQUNBLFVBQU0sSUFBTixDQUFXLFFBQVg7O0FBRUEsdUNBQWlDLElBQWpDLGVBQStDLEtBQUssTUFBTCxDQUFZLEtBQVosRUFBbUIsSUFBbkIsQ0FBd0IsRUFBeEIsQ0FBL0M7QUFDRCxHQS9CRDs7QUFpQ0EsTUFBSSxZQUFZLFNBQVosU0FBWSxDQUFTLEtBQVQsRUFBZ0I7QUFDNUIsUUFBSSxTQUFTLEtBQUssTUFBTCxDQUFZLEdBQXpCO0FBQ0EsUUFBSSxhQUFhLEVBQWpCOztBQUVGLFFBQUksTUFBSixFQUFZO0FBQ1YsVUFBSSx5QkFBdUIsS0FBSyxLQUE1QixhQUFKO0FBQ0EsdUNBQStCLEtBQS9CO0FBQ0Esb0JBQWMsc0NBQWQ7O0FBRUEsMEJBQVksTUFBWixFQUFvQixPQUFwQixDQUE0QixtQkFBVztBQUNyQyxZQUFJLFlBQVksQ0FBQyxRQUFELEVBQVcsS0FBWCxXQUF5QixPQUF6QixDQUFoQjtBQUNBLFlBQUksVUFBVSxPQUFkLEVBQXVCO0FBQ3JCLG9CQUFVLElBQVYsQ0FBZSxVQUFmO0FBQ0Q7O0FBRUQsMENBQWdDLE9BQWhDLCtCQUFpRSxVQUFVLElBQVYsQ0FBZSxHQUFmLENBQWpFLFVBQXlGLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBZ0IsT0FBaEIsQ0FBekY7QUFDRCxPQVBEOztBQVNBLG9CQUFjLFFBQWQ7O0FBRUEsMkRBQW1ELFVBQW5ELFNBQWlFLFVBQWpFO0FBQ0Q7O0FBRUQsV0FBTyxVQUFQO0FBQ0QsR0F4QkQ7O0FBMEJBOzs7Ozs7QUFNQSxNQUFJLGtCQUFrQix5QkFBUyxTQUFULEVBQW9CLE1BQXBCLEVBQTRCO0FBQ2hELFFBQUksS0FBSyxhQUFMLENBQW1CLE9BQU8sSUFBMUIsS0FBbUMsS0FBSyxhQUFMLENBQW1CLE9BQU8sSUFBMUIsRUFBZ0MsU0FBaEMsQ0FBdkMsRUFBbUY7QUFDakY7QUFDRDs7QUFFRCxRQUFJLFVBQVUsT0FBTyxTQUFQLENBQWQ7QUFDQSxRQUFJLFlBQVksS0FBSyxTQUFMLEtBQW1CLFNBQW5DO0FBQ0EsUUFBSSxjQUFjLHNCQUFvQixTQUFwQixDQUFsQjtBQUNBLFFBQUksY0FBYztBQUNoQixZQUFNLFFBRFU7QUFFaEIsYUFBTyxPQUZTO0FBR2hCLFlBQU0sU0FIVTtBQUloQixXQUFLLEdBSlc7QUFLaEIsbUJBQWEsV0FMRztBQU1oQiwwQkFBa0IsU0FBbEIsa0JBTmdCO0FBT2hCLFVBQU8sU0FBUCxTQUFvQixLQUFLO0FBUFQsS0FBbEI7QUFTQSxRQUFJLDhCQUE0QixnQkFBTSxVQUFOLENBQWlCLGdCQUFNLE9BQU4sQ0FBYyxXQUFkLENBQWpCLENBQTVCLE1BQUo7QUFDQSxRQUFJLHlDQUF1QyxlQUF2QyxXQUFKOztBQUVBLHVDQUFpQyxTQUFqQywyQkFBZ0UsWUFBWSxFQUE1RSxVQUFtRixTQUFuRixpQkFBd0csU0FBeEc7QUFDRCxHQXJCRDs7QUF1QkE7Ozs7Ozs7QUFPQSxNQUFJLGtCQUFrQixTQUFsQixlQUFrQixDQUFTLFNBQVQsRUFBb0IsTUFBcEIsRUFBNEIsVUFBNUIsRUFBd0M7QUFDNUQsUUFBSSxLQUFLLGFBQUwsQ0FBbUIsT0FBTyxJQUExQixLQUFtQyxLQUFLLGFBQUwsQ0FBbUIsT0FBTyxJQUExQixFQUFnQyxTQUFoQyxDQUF2QyxFQUFtRjtBQUNqRjtBQUNEO0FBQ0QsUUFBSSxnQkFBZ0IsV0FBVyxHQUFYLENBQWUsVUFBQyxNQUFELEVBQVMsQ0FBVCxFQUFlO0FBQ2hELFVBQUksY0FBYyxzQkFBYztBQUM5QixlQUFVLEtBQUssTUFBZixTQUF5QixDQURLO0FBRTlCLGVBQU87QUFGdUIsT0FBZCxFQUdmLE1BSGUsQ0FBbEI7QUFJQSxVQUFJLE9BQU8sS0FBUCxLQUFpQixPQUFPLFNBQVAsQ0FBckIsRUFBd0M7QUFDdEMsb0JBQVksUUFBWixHQUF1QixJQUF2QjtBQUNEO0FBQ0QsMEJBQWtCLGdCQUFNLFVBQU4sQ0FBaUIsZ0JBQU0sT0FBTixDQUFjLFdBQWQsQ0FBakIsQ0FBbEIsU0FBa0UsWUFBWSxLQUE5RTtBQUNELEtBVG1CLENBQXBCO0FBVUEsUUFBSSxjQUFjO0FBQ2QsVUFBSSxZQUFZLEdBQVosR0FBa0IsS0FBSyxNQURiO0FBRWQsWUFBTSxTQUZRO0FBR2QsMEJBQWtCLFNBQWxCO0FBSGMsS0FBbEI7QUFLQSxRQUFJLHlCQUF1QixZQUFZLEVBQW5DLFdBQTBDLEtBQUssU0FBTCxLQUFtQixnQkFBTSxVQUFOLENBQWlCLFNBQWpCLENBQTdELGNBQUo7QUFDQSxRQUFJLHNCQUFvQixnQkFBTSxVQUFOLENBQWlCLFdBQWpCLENBQXBCLFNBQXFELGNBQWMsSUFBZCxDQUFtQixFQUFuQixDQUFyRCxjQUFKO0FBQ0EsUUFBSSx5Q0FBdUMsTUFBdkMsV0FBSjs7QUFFQSx1Q0FBaUMsWUFBWSxJQUE3QyxlQUEyRCxLQUEzRCxHQUFtRSxTQUFuRTtBQUNELEdBeEJEOztBQTBCQTs7Ozs7O0FBTUEsTUFBSSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBUyxTQUFULEVBQW9CLE1BQXBCLEVBQTRCO0FBQzlDLFFBQUksS0FBSyxhQUFMLENBQW1CLE9BQU8sSUFBMUIsS0FBbUMsS0FBSyxhQUFMLENBQW1CLE9BQU8sSUFBMUIsRUFBZ0MsU0FBaEMsQ0FBdkMsRUFBbUY7QUFDakY7QUFDRDs7QUFFRCxRQUFJLG9CQUFvQixDQUN0QixNQURzQixFQUV0QixVQUZzQixFQUd0QixRQUhzQixFQUl0QixjQUpzQixDQUF4Qjs7QUFPQSxRQUFJLFNBQVMsQ0FDWCxRQURXLEVBRVgsV0FGVyxDQUFiOztBQUtBLFFBQUksV0FBVyxDQUFDLFdBQUQsQ0FBZjs7QUFFQSxRQUFJLFVBQVUsT0FBTyxTQUFQLEtBQXFCLEVBQW5DO0FBQ0EsUUFBSSxZQUFZLEtBQUssU0FBTCxDQUFoQjs7QUFFQSxRQUFJLGNBQWMsT0FBbEIsRUFBMkI7QUFDekIsVUFBSSxnQkFBTSxPQUFOLENBQWMsT0FBTyxJQUFyQixFQUEyQixRQUEzQixDQUFKLEVBQTBDO0FBQ3hDLG9CQUFZLEtBQUssT0FBakI7QUFDRCxPQUZELE1BRU87QUFDTCxrQkFBVSxnQkFBTSxVQUFOLENBQWlCLE9BQU8sU0FBUCxDQUFqQixDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJLFNBQVMsTUFBYixFQUFxQjtBQUNuQixlQUFTLE9BQU8sTUFBUCxDQUFjLFNBQVMsTUFBdkIsQ0FBVDtBQUNEOztBQUVELFFBQUksY0FBYyxzQkFBb0IsU0FBcEIsS0FBb0MsRUFBdEQ7QUFDQSxRQUFJLGlCQUFpQixFQUFyQjtBQUNBLFFBQUksYUFBYSxFQUFqQjs7QUFFQTtBQUNBLFFBQUksY0FBYyxhQUFkLElBQStCLENBQUMsZ0JBQU0sT0FBTixDQUFjLE9BQU8sSUFBckIsRUFBMkIsaUJBQTNCLENBQXBDLEVBQW1GO0FBQ2pGLGlCQUFXLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRDs7QUFFRDtBQUNBLFFBQUksY0FBYyxNQUFkLElBQXdCLGdCQUFNLE9BQU4sQ0FBYyxPQUFPLElBQXJCLEVBQTJCLE1BQTNCLENBQTVCLEVBQWdFO0FBQzlELGlCQUFXLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRDs7QUFFRCxRQUFJLENBQUMsV0FBVyxJQUFYLENBQWdCO0FBQUEsYUFBUSxTQUFTLElBQWpCO0FBQUEsS0FBaEIsQ0FBTCxFQUE2QztBQUMzQyxVQUFJLGNBQWM7QUFDaEIsY0FBTSxTQURVO0FBRWhCLHFCQUFhLFdBRkc7QUFHaEIsNEJBQWtCLFNBQWxCLGtCQUhnQjtBQUloQixZQUFPLFNBQVAsU0FBb0IsS0FBSztBQUpULE9BQWxCO0FBTUEsVUFBSSxrQ0FBZ0MsWUFBWSxFQUE1QyxVQUFtRCxTQUFuRCxhQUFKOztBQUVBLFVBQUksY0FBYyxPQUFsQixFQUEyQjtBQUN6QixvREFBMEMsZ0JBQU0sVUFBTixDQUFpQixXQUFqQixDQUExQyxTQUEyRSxPQUEzRTtBQUNELE9BRkQsTUFFTztBQUNMLG9CQUFZLEtBQVosR0FBb0IsT0FBcEI7QUFDQSxvQkFBWSxJQUFaLEdBQW1CLE1BQW5CO0FBQ0Esc0NBQTRCLGdCQUFNLFVBQU4sQ0FBaUIsV0FBakIsQ0FBNUI7QUFDRDs7QUFFRCxVQUFJLHlDQUF1QyxjQUF2QyxXQUFKOztBQUVBLFVBQUksYUFBYSxPQUFqQjtBQUNBLFVBQUksY0FBYyxPQUFsQixFQUEyQjtBQUN6QixxQkFBYSxPQUFPLE9BQVAsSUFBa0IsT0FBTyxPQUFQLEtBQW1CLE9BQXJDLElBQWdELE1BQTdEO0FBQ0Q7O0FBRUQsbURBQTJDLFNBQTNDLCtCQUE4RSxVQUE5RSxVQUE2RixjQUE3RixTQUErRyxTQUEvRztBQUNEOztBQUVELFdBQU8sY0FBUDtBQUNELEdBNUVEOztBQThFQSxNQUFJLGdCQUFnQixTQUFoQixhQUFnQixDQUFTLE1BQVQsRUFBaUI7QUFDbkMsUUFBSSxZQUFZLENBQ1osUUFEWSxFQUVaLFdBRlksRUFHWixRQUhZLENBQWhCO0FBS0EsUUFBSSxTQUFTLEVBQWI7QUFDQSxRQUFJLGVBQWUsRUFBbkI7O0FBRUEsUUFBSSxnQkFBTSxPQUFOLENBQWMsT0FBTyxJQUFyQixFQUEyQixTQUEzQixDQUFKLEVBQTJDO0FBQ3pDLGFBQU8sSUFBUCxDQUFZLElBQVo7QUFDRDtBQUNELFFBQUksQ0FBQyxPQUFPLElBQVAsQ0FBWTtBQUFBLGFBQVEsU0FBUyxJQUFqQjtBQUFBLEtBQVosQ0FBTCxFQUF5QztBQUN2QyxxQkFBZSxjQUFjLFVBQWQsRUFBMEIsTUFBMUIsRUFBa0MsRUFBQyxPQUFPLEtBQUssUUFBYixFQUFsQyxDQUFmO0FBQ0Q7O0FBRUQsV0FBTyxZQUFQO0FBQ0QsR0FqQkQ7O0FBbUJBO0FBQ0EsTUFBSSxpQkFBaUIsU0FBakIsY0FBaUIsQ0FBUyxNQUFULEVBQStCO0FBQUEsUUFBZCxLQUFjLHVFQUFOLElBQU07O0FBQ2xELFFBQUksT0FBTyxPQUFPLElBQVAsSUFBZSxNQUExQjtBQUNBLFFBQUksUUFBUSxPQUFPLEtBQVAsSUFBZ0IsS0FBSyxJQUFMLENBQWhCLElBQThCLEtBQUssS0FBL0M7QUFDQSxRQUFJLFNBQVMsRUFBRSxHQUFGLEVBQU8sS0FBSyxNQUFaLEVBQW9CO0FBQzdCLFVBQUksU0FBUyxLQUFLLE1BRFc7QUFFN0IsaUJBQVcsK0JBRmtCO0FBRzdCLGFBQU8sS0FBSztBQUhpQixLQUFwQixDQUFiO0FBS0EsUUFBSSxZQUFZLEVBQUUsR0FBRixFQUFPLElBQVAsRUFBYTtBQUMzQixVQUFJLEtBQUssTUFBTCxHQUFjLE9BRFM7QUFFM0IsaUJBQVcsNkJBRmdCO0FBRzNCLGFBQU8sS0FBSztBQUhlLEtBQWIsQ0FBaEI7QUFLQSxRQUFJLFVBQVUsRUFBRSxHQUFGLEVBQU8sSUFBUCxFQUFhO0FBQ3pCLFVBQUksS0FBSyxNQUFMLEdBQWMsT0FETztBQUV6QixpQkFBVywyQkFGYztBQUd6QixhQUFPLEtBQUs7QUFIYSxLQUFiLENBQWQ7O0FBTUEsUUFBSSxhQUFhLEVBQ2YsS0FEZSxFQUNSLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsTUFBckIsQ0FEUSxFQUNzQixFQUFDLFdBQVcsZUFBWixFQUR0QixFQUVmLFNBRkY7O0FBSUEsa0RBQTRDLGdCQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBNUM7QUFDQSxRQUFJLGtCQUFrQixPQUFPLFFBQVAsR0FBa0Isd0JBQWxCLEdBQTZDLEVBQW5FO0FBQ0EsdURBQWlELGVBQWpEOztBQUVBLFFBQUksWUFBWTtBQUNkLGlCQUFXLGlCQURHO0FBRWQsZUFBUyxPQUFPLFdBRkY7QUFHZCxhQUFPLE9BQU8sV0FBUCxHQUFxQixzQkFBckIsR0FBOEM7QUFIdkMsS0FBaEI7QUFLQSw2QkFBdUIsZ0JBQU0sVUFBTixDQUFpQixTQUFqQixDQUF2Qjs7QUFFQSxrQkFBYyxFQUFFLEtBQUYsRUFBUyxFQUFULEVBQWEsRUFBQyxXQUFXLGFBQVosRUFBYixFQUF5QyxTQUF2RDtBQUNBLGdDQUEwQixLQUFLLE1BQS9CO0FBQ0Esa0JBQWMsNkJBQWQ7O0FBRUEsa0JBQWMsVUFBVSxNQUFWLENBQWQ7QUFDQSxrQkFBYyxFQUFFLEdBQUYsRUFBTyxLQUFLLEtBQVosRUFBbUIsRUFBQyxXQUFXLGFBQVosRUFBbkIsRUFBK0MsU0FBN0Q7O0FBRUEsa0JBQWMsUUFBZDtBQUNBLGtCQUFjLFFBQWQ7O0FBRUEsUUFBSSxRQUFRLEVBQUUsSUFBRixFQUFRLFVBQVIsRUFBb0I7QUFDNUIsZUFBUyxPQUFPLG1CQURZO0FBRTVCLGNBQVEsSUFGb0I7QUFHNUIsVUFBSSxLQUFLO0FBSG1CLEtBQXBCLENBQVo7QUFLQSxRQUFJLE1BQU0sRUFBRSxLQUFGLENBQVY7O0FBRUEsUUFBSSxJQUFKLENBQVMsV0FBVCxFQUFzQixFQUFDLE9BQU8sTUFBUixFQUF0Qjs7QUFFQSxRQUFJLE9BQU8sUUFBUSxTQUFmLEtBQTZCLFdBQWpDLEVBQThDO0FBQzVDLFFBQUUsTUFBRixFQUFVLEVBQUUsS0FBWixFQUFtQixFQUFuQixDQUFzQixRQUFRLFNBQTlCLEVBQXlDLE1BQXpDLENBQWdELEdBQWhEO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxNQUFQLENBQWMsR0FBZDtBQUNEOztBQUVELE1BQUUsbUJBQUYsRUFBdUIsR0FBdkIsRUFDQyxRQURELENBQ1UsRUFBQyxRQUFRO0FBQUEsZUFBTSxRQUFRLGFBQVIsQ0FBc0IsR0FBdEIsQ0FBTjtBQUFBLE9BQVQsRUFEVjs7QUFHQSxZQUFRLGFBQVIsQ0FBc0IsR0FBdEI7O0FBRUEsUUFBSSxLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsS0FBNkIsS0FBSyxjQUFMLENBQW9CLElBQXBCLEVBQTBCLEtBQTNELEVBQWtFO0FBQ2hFLFdBQUssY0FBTCxDQUFvQixJQUFwQixFQUEwQixLQUExQixDQUFnQyxLQUFoQztBQUNEOztBQUVELFFBQUksS0FBSyxTQUFMLElBQWtCLEtBQXRCLEVBQTZCO0FBQzNCLGNBQVEsWUFBUjtBQUNBLGNBQVEsVUFBUixDQUFtQixLQUFLLE1BQXhCLEVBQWdDLEtBQWhDO0FBQ0E7QUFDRDs7QUFFRCxTQUFLLE1BQUwsR0FBYyxRQUFRLFdBQVIsQ0FBb0IsS0FBSyxNQUF6QixDQUFkO0FBQ0QsR0EzRUQ7O0FBNkVBO0FBQ0EsTUFBSSxxQkFBcUIsU0FBckIsa0JBQXFCLENBQVMsSUFBVCxFQUFlLFVBQWYsRUFBMkIsY0FBM0IsRUFBMkM7QUFDbEUsUUFBSSxrQkFBa0I7QUFDbEIsZ0JBQVcsaUJBQWlCLFVBQWpCLEdBQThCO0FBRHZCLEtBQXRCO0FBR0EsUUFBSSxrQkFBa0IsQ0FDcEIsT0FEb0IsRUFFcEIsT0FGb0IsRUFHcEIsVUFIb0IsQ0FBdEI7QUFLQSxRQUFJLGVBQWUsRUFBbkI7QUFDQSxRQUFJLGlCQUFpQixFQUFDLFVBQVUsS0FBWCxFQUFrQixPQUFPLEVBQXpCLEVBQTZCLE9BQU8sRUFBcEMsRUFBckI7O0FBRUEsaUJBQWEsc0JBQWMsY0FBZCxFQUE4QixVQUE5QixDQUFiOztBQUVBLFNBQUssSUFBSSxJQUFJLGdCQUFnQixNQUFoQixHQUF5QixDQUF0QyxFQUF5QyxLQUFLLENBQTlDLEVBQWlELEdBQWpELEVBQXNEO0FBQ3BELFVBQUksT0FBTyxnQkFBZ0IsQ0FBaEIsQ0FBWDtBQUNBLFVBQUksV0FBVyxjQUFYLENBQTBCLElBQTFCLENBQUosRUFBcUM7QUFDbkMsWUFBSSxRQUFRO0FBQ1YsZ0JBQU0sZ0JBQWdCLElBQWhCLEtBQXlCLE1BRHJCO0FBRVYscUJBQVcsWUFBWSxJQUZiO0FBR1YsaUJBQU8sV0FBVyxJQUFYLENBSEc7QUFJVixnQkFBTSxPQUFPO0FBSkgsU0FBWjs7QUFPQSxjQUFNLFdBQU4sR0FBb0Isc0JBQW9CLElBQXBCLEtBQStCLEVBQW5EOztBQUVBLFlBQUksU0FBUyxVQUFULElBQXVCLFdBQVcsUUFBWCxLQUF3QixJQUFuRCxFQUF5RDtBQUN2RCxnQkFBTSxPQUFOLEdBQWdCLFdBQVcsUUFBM0I7QUFDRDs7QUFFRCxxQkFBYSxJQUFiLENBQWtCLEVBQUUsT0FBRixFQUFXLElBQVgsRUFBaUIsS0FBakIsQ0FBbEI7QUFDRDtBQUNGOztBQUVELFFBQUksY0FBYztBQUNoQixpQkFBVyxZQURLO0FBRWhCLGFBQU8sS0FBSztBQUZJLEtBQWxCO0FBSUEsaUJBQWEsSUFBYixDQUFrQixnQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixLQUFLLE1BQXZCLEVBQStCLFdBQS9CLENBQWxCOztBQUVBLFFBQUksUUFBUSxnQkFBTSxNQUFOLENBQWEsSUFBYixFQUFtQixZQUFuQixDQUFaOztBQUVBLFdBQU8sTUFBTSxTQUFiO0FBQ0QsR0EzQ0Q7O0FBNkNBLE1BQUksWUFBWSxTQUFTLFNBQVQsQ0FBbUIsV0FBbkIsRUFBZ0M7QUFDOUMsUUFBSSxZQUFZLFlBQVksSUFBWixDQUFpQixJQUFqQixDQUFoQjtBQUNBLFFBQUksT0FBTyxZQUFZLElBQVosQ0FBaUIsTUFBakIsQ0FBWDtBQUNBLFFBQUksS0FBSyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQVQ7QUFDQSxRQUFJLFlBQVksT0FBTyxHQUFQLEdBQWEsRUFBN0I7QUFDQSxRQUFJLFNBQVMsWUFBWSxLQUFaLEVBQWI7O0FBRUEsV0FBTyxJQUFQLENBQVksTUFBWixFQUFvQixJQUFwQixDQUF5QixVQUFDLENBQUQsRUFBSSxJQUFKLEVBQWE7QUFDckMsV0FBSyxFQUFMLEdBQVUsS0FBSyxFQUFMLENBQVEsT0FBUixDQUFnQixTQUFoQixFQUEyQixLQUFLLE1BQWhDLENBQVY7QUFDQSxLQUZEOztBQUlBLFdBQU8sSUFBUCxDQUFZLE9BQVosRUFBcUIsSUFBckIsQ0FBMEIsWUFBVztBQUNwQyxXQUFLLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsS0FBSyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLE9BQXpCLENBQWlDLFNBQWpDLEVBQTRDLEtBQUssTUFBakQsQ0FBekI7QUFDQSxLQUZEOztBQUlBLFdBQU8sSUFBUCxDQUFZLFlBQVc7QUFDckIsUUFBRSx1QkFBRixFQUEyQixJQUEzQixDQUFnQyxZQUFXO0FBQ3pDLFlBQUksVUFBVSxLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBZDtBQUNBLGtCQUFVLFFBQVEsU0FBUixDQUFrQixDQUFsQixFQUFzQixRQUFRLFdBQVIsQ0FBb0IsR0FBcEIsSUFBMkIsQ0FBakQsQ0FBVjtBQUNBLGtCQUFVLFVBQVUsR0FBRyxRQUFILEVBQXBCO0FBQ0EsYUFBSyxZQUFMLENBQWtCLE1BQWxCLEVBQTBCLE9BQTFCO0FBQ0QsT0FMRDtBQU1ELEtBUEQ7O0FBU0EsV0FBTyxJQUFQLENBQVksZ0JBQVosRUFBOEIsSUFBOUIsQ0FBbUMsUUFBbkMsRUFBNkMsSUFBN0MsQ0FBa0QsWUFBVztBQUMzRCxVQUFJLEtBQUssWUFBTCxDQUFrQixNQUFsQixNQUE4QixNQUFsQyxFQUEwQztBQUN4QyxZQUFJLFNBQVMsS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQWI7QUFDQSxpQkFBUyxPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsRUFBcUIsT0FBTyxXQUFQLENBQW1CLEdBQW5CLElBQTBCLENBQS9DLENBQVQ7QUFDQSxpQkFBUyxTQUFTLEdBQUcsUUFBSCxFQUFsQjtBQUNBLGFBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixNQUEzQjtBQUNEO0FBQ0YsS0FQRDs7QUFTQSxXQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLEtBQUssTUFBdkI7QUFDQSxXQUFPLElBQVAsQ0FBWSxNQUFaLEVBQW9CLFNBQXBCO0FBQ0EsV0FBTyxRQUFQLENBQWdCLFFBQWhCO0FBQ0EsTUFBRSxtQkFBRixFQUF1QixNQUF2QixFQUErQixRQUEvQjs7QUFFQSxRQUFJLEtBQUssY0FBTCxDQUFvQixJQUFwQixLQUE2QixLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsRUFBMEIsT0FBM0QsRUFBb0U7QUFDbEUsV0FBSyxjQUFMLENBQW9CLElBQXBCLEVBQTBCLE9BQTFCLENBQWtDLE9BQU8sQ0FBUCxDQUFsQztBQUNEOztBQUVELFNBQUssTUFBTCxHQUFjLFFBQVEsV0FBUixDQUFvQixLQUFLLE1BQXpCLENBQWQ7QUFDQSxXQUFPLE1BQVA7QUFDRCxHQTVDRDs7QUE4Q0E7O0FBRUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixTQUE5QixFQUF5QyxVQUFTLENBQVQsRUFBWTtBQUNuRCxRQUFJLFNBQVMsRUFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixtQkFBaEIsQ0FBYjtBQUNBLE1BQUUsY0FBRjtBQUNBLFFBQUksZUFBZSxFQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLHlCQUFoQixFQUEyQyxRQUEzQyxDQUFvRCxJQUFwRCxFQUEwRCxNQUE3RTtBQUNBLFFBQUksZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLFdBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsWUFBWSxLQUFLLGdCQUFuQztBQUNELEtBRkQsTUFFTztBQUNMLFFBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxJQUFmLEVBQXFCLE9BQXJCLENBQTZCLEtBQTdCLEVBQW9DLFlBQVc7QUFDN0MsVUFBRSxJQUFGLEVBQVEsTUFBUjtBQUNBLGdCQUFRLGFBQVIsQ0FBc0IsTUFBdEI7QUFDQSxnQkFBUSxJQUFSLENBQWEsSUFBYixDQUFrQixPQUFsQjtBQUNELE9BSkQ7QUFLRDtBQUNGLEdBYkQ7O0FBZUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLE9BQXhCLEVBQWlDLFVBQVMsQ0FBVCxFQUFZO0FBQzNDLFFBQUksU0FBUyxFQUFFLElBQUYsQ0FBYjtBQUNBLFFBQUksRUFBRSxPQUFGLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEIsVUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFaLE1BQXdCLFVBQTVCLEVBQXdDO0FBQ3RDLGVBQU8sT0FBUCxDQUFlLE9BQWY7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLEtBQVA7QUFDQSxZQUFJLFdBQVcsT0FBTyxHQUFQLEVBQWY7QUFDQSxlQUFPLEdBQVAsQ0FBVyxRQUFYO0FBQ0Q7QUFDRixLQVJELE1BUU87QUFDTCxhQUFPLEtBQVA7QUFDRDtBQUNGLEdBYkQ7O0FBZUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxrQkFBVixFQUE4Qiw0QkFBOUIsRUFBNEQsVUFBUyxDQUFULEVBQVk7QUFDdEUsTUFBRSxlQUFGO0FBQ0EsTUFBRSxjQUFGO0FBQ0EsUUFBSSxFQUFFLE9BQUYsS0FBYyxJQUFsQixFQUF3QjtBQUN0QixVQUFJLFdBQVcsRUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLG1CQUFwQixFQUF5QyxJQUF6QyxDQUE4QyxJQUE5QyxDQUFmO0FBQ0EsY0FBUSxVQUFSLENBQW1CLFFBQW5CO0FBQ0EsUUFBRSxPQUFGLEdBQVksSUFBWjtBQUNELEtBSkQsTUFJTztBQUNMLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxTQUFPLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLGtCQUFwQixFQUF3QyxVQUFDLENBQUQsRUFBTztBQUM3QyxRQUFNLFNBQVMsRUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLGVBQXBCLENBQWY7QUFDQSxRQUFNLFdBQVcsRUFBRSxhQUFGLEVBQWlCLE1BQWpCLENBQWpCO0FBQ0EsYUFBUyxNQUFULENBQWdCLEVBQUUsTUFBRixDQUFTLEtBQVQsS0FBbUIsT0FBbkM7QUFDRCxHQUpEOztBQU9BLFNBQU8sRUFBUCxDQUFVLFFBQVYsRUFBb0IsZ0VBQXBCLEVBQXNGLGFBQUs7QUFDekYsUUFBSSxvQkFBSjtBQUNBLFFBQUksRUFBRSxNQUFGLENBQVMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixjQUE1QixDQUFKLEVBQWlEO0FBQy9DO0FBQ0Q7QUFDRCxRQUFJLFFBQVEsZ0JBQU0sT0FBTixDQUFjLEVBQUUsTUFBaEIsRUFBd0IsYUFBeEIsQ0FBWjtBQUNBLFFBQUksZ0JBQU0sT0FBTixDQUFjLE1BQU0sSUFBcEIsRUFBMEIsQ0FBQyxRQUFELEVBQVcsZ0JBQVgsRUFBNkIsYUFBN0IsQ0FBMUIsQ0FBSixFQUE0RTtBQUMxRSxVQUFJLFVBQVUsTUFBTSxzQkFBTixDQUE2QixjQUE3QixDQUFkO0FBQ0EsVUFBSSxNQUFNLElBQU4sS0FBZSxRQUFuQixFQUE2QjtBQUMzQix3QkFBTSxPQUFOLENBQWMsT0FBZCxFQUF1QixhQUFLO0FBQzFCLGNBQUksaUJBQWlCLFFBQVEsQ0FBUixFQUFXLGFBQVgsQ0FBeUIsVUFBekIsQ0FBb0MsQ0FBcEMsQ0FBckI7QUFDQSx5QkFBZSxPQUFmLEdBQXlCLEVBQUUsTUFBRixDQUFTLEtBQVQsS0FBbUIsUUFBUSxDQUFSLEVBQVcsS0FBdkQ7QUFDRCxTQUhEO0FBSUQsT0FMRCxNQUtPO0FBQ0wsc0JBQWMsU0FBUyxpQkFBVCxDQUEyQixFQUFFLE1BQUYsQ0FBUyxJQUFwQyxDQUFkO0FBQ0Esd0JBQU0sT0FBTixDQUFjLFdBQWQsRUFBMkIsYUFBSztBQUM5QixjQUFJLGlCQUFpQixRQUFRLENBQVIsRUFBVyxhQUFYLENBQXlCLFVBQXpCLENBQW9DLENBQXBDLENBQXJCO0FBQ0EseUJBQWUsT0FBZixHQUF5QixZQUFZLENBQVosRUFBZSxPQUF4QztBQUNELFNBSEQ7QUFJRDtBQUNGLEtBZEQsTUFjTztBQUNMLFVBQUksV0FBVyxTQUFTLGNBQVQsQ0FBd0IsV0FBVyxNQUFNLEVBQXpDLENBQWY7QUFDQSxVQUFHLFFBQUgsRUFBYTtBQUNYLGlCQUFTLEtBQVQsR0FBaUIsRUFBRSxNQUFGLENBQVMsS0FBMUI7QUFDRDtBQUNGOztBQUVELFlBQVEsSUFBUixDQUFhLElBQWIsQ0FBa0IsT0FBbEI7QUFDRCxHQTVCRDs7QUE4QkE7QUFDQSxrQkFBTSxpQkFBTixDQUF3QixFQUFFLEtBQTFCLEVBQWlDLGNBQWpDLEVBQWlELGFBQUs7QUFDcEQsUUFBSSxDQUFDLEVBQUUsTUFBRixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsV0FBNUIsQ0FBTCxFQUErQztBQUMvQyxRQUFJLFFBQVEsRUFBRSxNQUFGLENBQVMsS0FBVCxJQUFrQixFQUFFLE1BQUYsQ0FBUyxTQUF2QztBQUNBLFFBQUksUUFBUSxnQkFBTSxPQUFOLENBQWMsRUFBRSxNQUFoQixFQUF3QixhQUF4QixFQUF1QyxhQUF2QyxDQUFxRCxjQUFyRCxDQUFaO0FBQ0EsVUFBTSxTQUFOLEdBQWtCLGdCQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBbEI7QUFDRCxHQUxEOztBQU9BO0FBQ0EsU0FBTyxFQUFQLENBQVUsT0FBVixFQUFtQixhQUFuQixFQUFrQyxVQUFTLENBQVQsRUFBWTtBQUM1QyxNQUFFLEVBQUUsTUFBSixFQUFZLFdBQVosQ0FBd0IsT0FBeEI7QUFDRCxHQUZEOztBQUlBO0FBQ0EsU0FBTyxFQUFQLENBQVUsT0FBVixFQUFtQiwyQkFBbkIsRUFBZ0QsVUFBUyxDQUFULEVBQVk7QUFDMUQsUUFBSSxTQUFTLEVBQUUsRUFBRSxNQUFKLEVBQVksT0FBWixDQUFvQixtQkFBcEIsQ0FBYjtBQUNBLFFBQUksaUJBQWlCLEVBQUUsa0JBQUYsRUFBc0IsTUFBdEIsQ0FBckI7QUFDQSxRQUFJLFFBQVEsRUFBRSxFQUFFLE1BQUosRUFBWSxHQUFaLEVBQVo7QUFDQSxRQUFJLFVBQVUsRUFBZCxFQUFrQjtBQUNoQixVQUFJLENBQUMsZUFBZSxNQUFwQixFQUE0QjtBQUMxQixZQUFJLGlEQUErQyxLQUEvQyxlQUFKO0FBQ0EsVUFBRSxjQUFGLEVBQWtCLE1BQWxCLEVBQTBCLEtBQTFCLENBQWdDLEVBQWhDO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsdUJBQWUsSUFBZixDQUFvQixTQUFwQixFQUErQixLQUEvQixFQUFzQyxHQUF0QyxDQUEwQyxTQUExQyxFQUFxRCxjQUFyRDtBQUNEO0FBQ0YsS0FQRCxNQU9PO0FBQ0wsVUFBSSxlQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLHVCQUFlLEdBQWYsQ0FBbUIsU0FBbkIsRUFBOEIsTUFBOUI7QUFDRDtBQUNGO0FBQ0YsR0FoQkQ7O0FBa0JBOzs7OztBQUtBLFNBQU8sRUFBUCxDQUFVLFFBQVYsRUFBb0IsZUFBcEIsRUFBcUMsYUFBSztBQUN4QyxRQUFJLFVBQVUsRUFBRSxNQUFGLENBQVMsT0FBVCxHQUFtQixVQUFuQixHQUFnQyxPQUE5QztBQUNBLFFBQUksV0FBVyxFQUFFLGtCQUFGLEVBQXNCLEVBQUUsRUFBRSxNQUFKLEVBQVksT0FBWixDQUFvQixnQkFBcEIsQ0FBdEIsQ0FBZjtBQUNBLGFBQVMsSUFBVCxDQUFjO0FBQUEsYUFBSyxTQUFTLENBQVQsRUFBWSxJQUFaLEdBQW1CLE9BQXhCO0FBQUEsS0FBZDtBQUNBLFdBQU8sT0FBUDtBQUNELEdBTEQ7O0FBT0E7QUFDQSxTQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLGdCQUFsQixFQUFvQyxVQUFTLENBQVQsRUFBWTtBQUM5QyxNQUFFLE1BQUYsQ0FBUyxLQUFULEdBQWlCLGdCQUFNLFFBQU4sQ0FBZSxFQUFFLE1BQUYsQ0FBUyxLQUF4QixDQUFqQjtBQUNBLFFBQUksRUFBRSxNQUFGLENBQVMsS0FBVCxLQUFtQixFQUF2QixFQUEyQjtBQUN6QixRQUFFLEVBQUUsTUFBSixFQUNDLFFBREQsQ0FDVSxhQURWLEVBRUMsSUFGRCxDQUVNLGFBRk4sRUFFcUIsS0FBSyxhQUYxQjtBQUdELEtBSkQsTUFJTztBQUNMLFFBQUUsRUFBRSxNQUFKLEVBQVksV0FBWixDQUF3QixhQUF4QjtBQUNEO0FBQ0YsR0FURDs7QUFXQSxTQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLHFCQUFsQixFQUF5QyxhQUFLO0FBQzVDLE1BQUUsTUFBRixDQUFTLEtBQVQsR0FBaUIsZ0JBQU0sV0FBTixDQUFrQixFQUFFLE1BQUYsQ0FBUyxLQUEzQixDQUFqQjtBQUNELEdBRkQ7O0FBSUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixZQUE5QixFQUE0QyxVQUFTLENBQVQsRUFBWTtBQUN0RCxNQUFFLGNBQUY7QUFDQSxRQUFJLGNBQWMsRUFBRSxFQUFFLE1BQUosRUFBWSxNQUFaLEdBQXFCLE1BQXJCLENBQTRCLElBQTVCLENBQWxCO0FBQ0EsUUFBSSxTQUFTLFVBQVUsV0FBVixDQUFiO0FBQ0EsV0FBTyxXQUFQLENBQW1CLFdBQW5CO0FBQ0EsWUFBUSxhQUFSLENBQXNCLE1BQXRCO0FBQ0EsWUFBUSxJQUFSLENBQWEsSUFBYixDQUFrQixPQUFsQjtBQUNELEdBUEQ7O0FBU0E7QUFDQSxTQUFPLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixpQkFBOUIsRUFBaUQsYUFBSztBQUNwRCxNQUFFLGNBQUY7O0FBRUEsUUFBTSxpQkFBaUIsRUFBRSxNQUFGLENBQVMscUJBQVQsRUFBdkI7QUFDQSxRQUFNLFdBQVcsU0FBUyxJQUFULENBQWMscUJBQWQsRUFBakI7QUFDQSxRQUFNLFNBQVM7QUFDWCxhQUFPLGVBQWUsSUFBZixHQUF1QixlQUFlLEtBQWYsR0FBdUIsQ0FEMUM7QUFFWCxhQUFRLGVBQWUsR0FBZixHQUFxQixTQUFTLEdBQS9CLEdBQXNDO0FBRmxDLEtBQWY7O0FBS0EsUUFBSSxXQUFXLEVBQUUsRUFBRSxNQUFKLEVBQVksT0FBWixDQUFvQixtQkFBcEIsRUFBeUMsSUFBekMsQ0FBOEMsSUFBOUMsQ0FBZjtBQUNBLFFBQU0sU0FBUyxFQUFFLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUFGLENBQWY7O0FBRUEsYUFBUyxnQkFBVCxDQUEwQixhQUExQixFQUF5QyxZQUFXO0FBQ2xELGFBQU8sV0FBUCxDQUFtQixVQUFuQjtBQUNELEtBRkQsRUFFRyxLQUZIOztBQUlBO0FBQ0EsUUFBSSxLQUFLLGVBQVQsRUFBMEI7QUFDeEIsVUFBSSxTQUFTLGdCQUFNLE1BQU4sQ0FBYSxJQUFiLEVBQW1CLEtBQUssT0FBeEIsQ0FBYjtBQUNBLFVBQUksY0FBYyxnQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixLQUFLLGtCQUF2QixDQUFsQjtBQUNBLGNBQVEsT0FBUixDQUFnQixDQUFDLE1BQUQsRUFBUyxXQUFULENBQWhCLEVBQXVDO0FBQUEsZUFDckMsUUFBUSxXQUFSLENBQW9CLFFBQXBCLENBRHFDO0FBQUEsT0FBdkMsRUFDaUMsTUFEakM7QUFFQSxhQUFPLFFBQVAsQ0FBZ0IsVUFBaEI7QUFDRCxLQU5ELE1BTU87QUFDTCxjQUFRLFdBQVIsQ0FBb0IsUUFBcEI7QUFDRDtBQUNGLEdBM0JEOztBQTZCQTtBQUNBLFNBQU8sRUFBUCxDQUFVLE9BQVYsRUFBbUIsb0JBQW5CLEVBQXlDLGFBQUs7QUFDNUMsUUFBTSxVQUFVLEVBQUUsRUFBRSxNQUFKLENBQWhCO0FBQ0EsUUFBSSxXQUFXLFFBQVEsR0FBUixFQUFmO0FBQ0EsUUFBSSxZQUFZLFFBQVEsTUFBUixHQUFpQixJQUFqQixDQUFzQixZQUF0QixDQUFoQjtBQUNBLGNBQVUsR0FBVixDQUFjLFFBQWQ7QUFDQSxZQUFRLFFBQVIsQ0FBaUIsTUFBakIsRUFBeUIsV0FBekIsQ0FBcUMsVUFBckM7QUFDQSxZQUFRLFFBQVIsQ0FBaUIsVUFBakI7QUFDQSxZQUFRLGFBQVIsQ0FBc0IsVUFBVSxPQUFWLENBQWtCLGFBQWxCLENBQXRCO0FBQ0EsWUFBUSxJQUFSLENBQWEsSUFBYixDQUFrQixPQUFsQjtBQUNELEdBVEQ7O0FBV0E7QUFDQSxTQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLGVBQW5CLEVBQW9DLGFBQUs7QUFDdkMsTUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLGFBQXBCLEVBQW1DLElBQW5DLENBQXdDLG9CQUF4QyxFQUE4RCxNQUE5RDtBQUNELEdBRkQ7O0FBSUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLGtCQUFuQixFQUF1QyxVQUFTLENBQVQsRUFBWTtBQUNqRCxRQUFJLFFBQVEsRUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLGFBQXBCLEVBQW1DLElBQW5DLENBQXdDLGtCQUF4QyxDQUFaO0FBQ0EsUUFBSSxnQkFBZ0IsRUFBRSxFQUFFLE1BQUosQ0FBcEI7QUFDQSxVQUFNLFdBQU4sQ0FBa0IsR0FBbEIsRUFBdUIsWUFBVztBQUNoQyxVQUFJLENBQUMsY0FBYyxFQUFkLENBQWlCLFVBQWpCLENBQUwsRUFBbUM7QUFDakMsVUFBRSx3QkFBRixFQUE0QixLQUE1QixFQUFtQyxVQUFuQyxDQUE4QyxTQUE5QztBQUNEO0FBQ0YsS0FKRDtBQUtELEdBUkQ7O0FBVUE7QUFDQSxTQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQW5CLEVBQStCLFVBQVMsQ0FBVCxFQUFZO0FBQ3pDLE1BQUUsY0FBRjtBQUNBLFFBQUksY0FBYyxFQUFFLEVBQUUsTUFBSixFQUFZLE9BQVosQ0FBb0IsZ0JBQXBCLENBQWxCO0FBQ0EsUUFBSSxZQUFZLEVBQUUsbUJBQUYsRUFBdUIsV0FBdkIsQ0FBaEI7QUFDQSxRQUFJLGVBQWUsRUFBRSx3QkFBRixFQUE0QixXQUE1QixDQUFuQjtBQUNBLFFBQUksYUFBYSxLQUFqQjs7QUFFQSxRQUFJLFVBQVUsTUFBZCxFQUFzQjtBQUNwQixtQkFBYSxVQUFVLElBQVYsQ0FBZSxTQUFmLENBQWI7QUFDRCxLQUZELE1BRU87QUFDTCxtQkFBYyxhQUFhLElBQWIsQ0FBa0IsTUFBbEIsTUFBOEIsVUFBNUM7QUFDRDs7QUFFRCxRQUFJLE9BQU8sYUFBYSxJQUFiLENBQWtCLE1BQWxCLENBQVg7O0FBRUEsTUFBRSxtQkFBRixFQUF1QixXQUF2QixFQUFvQyxNQUFwQyxDQUEyQyxtQkFBbUIsSUFBbkIsRUFBeUIsS0FBekIsRUFBZ0MsVUFBaEMsQ0FBM0M7QUFDRCxHQWhCRDs7QUFrQkEsU0FBTyxFQUFQLENBQVUsb0JBQVYsRUFBZ0Msc0JBQWhDLEVBQXdEO0FBQUEsV0FDdEQsRUFBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLElBQXBCLEVBQTBCLFdBQTFCLENBQXNDLFFBQXRDLENBRHNEO0FBQUEsR0FBeEQ7O0FBR0E7O0FBRUEsU0FBTyxHQUFQLENBQVcsWUFBWCxFQUF5QixNQUFNLE1BQU4sRUFBekI7O0FBRUE7QUFDQSxNQUFJLEtBQUssY0FBTCxDQUFvQixNQUF4QixFQUFnQztBQUM5QixZQUFRLGNBQVIsQ0FBdUIsTUFBdkI7QUFDRDs7QUFFRCxXQUFTLGFBQVQsQ0FBdUIsaUJBQU8sTUFBOUI7O0FBRUE7QUFDQSxjQUFZLE9BQVosR0FBc0I7QUFDcEIsaUJBQWE7QUFBQSxhQUFXLFFBQVEsZUFBUixDQUF3QixFQUFFLEtBQTFCLEVBQWlDLE9BQWpDLENBQVg7QUFBQSxLQURPO0FBRXBCLGNBQVUsUUFBUSxRQUFSLENBQWlCLElBQWpCLENBQXNCLE9BQXRCLENBRlU7QUFHcEIsVUFBTSxRQUFRLElBQVIsQ0FBYSxJQUFiLENBQWtCLE9BQWxCLENBSGM7QUFJcEIsY0FBVSxrQkFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUMxQixjQUFRLFNBQVIsR0FBb0IsS0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixLQUF2QixHQUErQixTQUFuRDtBQUNBLG9CQUFjLEtBQWQ7QUFDQSxlQUFTLGFBQVQsQ0FBdUIsaUJBQU8sVUFBOUI7QUFDRCxLQVJtQjtBQVNwQixpQkFBYSxRQUFRLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBeUIsT0FBekIsQ0FUTztBQVVwQixhQUFTLG1CQUFpQjtBQUFBLFVBQWhCLElBQWdCLHVFQUFULElBQVM7O0FBQ3hCLFVBQU0sUUFBUSxFQUFFLEtBQWhCO0FBQ0EsVUFBTSxJQUFJLE9BQVY7QUFDQSxVQUFNLE9BQU87QUFDWCxZQUFJO0FBQUEsaUJBQU0sRUFBRSxRQUFGLENBQVcsS0FBWCxDQUFOO0FBQUEsU0FETztBQUVYLGFBQUs7QUFBQSxpQkFBTSxFQUFFLE9BQUYsQ0FBVSxLQUFWLENBQU47QUFBQSxTQUZNO0FBR1gsY0FBTTtBQUFBLGlCQUFNLE9BQU8sSUFBUCxDQUFZLFNBQVosQ0FBc0IsRUFBRSxRQUFGLENBQVcsS0FBWCxDQUF0QixFQUF5QyxJQUF6QyxFQUErQyxJQUEvQyxDQUFOO0FBQUE7QUFISyxPQUFiOztBQU1BLGFBQU8sS0FBSyxJQUFMLEdBQVA7QUFDRCxLQXBCbUI7QUFxQnBCLGFBQVMsMkJBQVk7QUFDbkIsY0FBUSxTQUFSLEdBQW9CLFNBQXBCO0FBQ0EsY0FBUSxlQUFSLENBQXdCLEVBQUUsS0FBMUIsRUFBaUMsS0FBakM7QUFDQSxpQkFBVyxRQUFYO0FBQ0EsY0FBUSxJQUFSLENBQWEsSUFBYixDQUFrQixPQUFsQjtBQUNELEtBMUJtQjtBQTJCcEI7QUFBQSw0RUFBUyxpQkFBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0QsZ0JBQU0sVUFBTixDQUFpQixJQUFqQixrQkFBNkIsTUFBN0IsQ0FEQzs7QUFBQTtBQUVQLGtCQUFFLEtBQUYsQ0FBUSxPQUFSO0FBQ0ksMkJBSEcsR0FHVyxJQUFJLFdBQUosQ0FBZ0IsWUFBaEIsRUFBOEIsT0FBOUIsQ0FIWDs7QUFJUCxrQkFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixhQUFoQixFQUErQixXQUEvQjs7QUFKTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBM0JvQixHQUF0Qjs7QUFtQ0EsU0FBTyxXQUFQO0FBQ0QsQ0FuekNEOztBQXN6Q0EsQ0FBQyxVQUFVLENBQVYsRUFBYztBQUNiLElBQUUsRUFBRixDQUFLLFdBQUwsR0FBbUIsVUFBUyxPQUFULEVBQWtCO0FBQ25DLFFBQUksQ0FBQyxPQUFMLEVBQWM7QUFDWixnQkFBVSxFQUFWO0FBQ0Q7QUFDRCxRQUFJLFFBQVEsSUFBWjs7QUFKbUMsb0JBS2IsRUFBRSxNQUFGLENBQVMsRUFBVCwwQkFBNkIsT0FBN0IsRUFBc0MsSUFBdEMsQ0FMYTtBQUFBLFFBSzlCLElBTDhCLGFBSzlCLElBTDhCO0FBQUEsUUFLckIsSUFMcUI7O0FBTW5DLG1CQUFPLElBQVAsR0FBYyxJQUFkO0FBQ0EsUUFBSSxXQUFXLEVBQUUsTUFBRixDQUFTLEVBQVQsdUJBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBQWY7QUFDQSxRQUFJLFdBQVc7QUFDYixlQUFTO0FBQ1AsaUJBQVMsSUFERjtBQUVQLGlCQUFTLElBRkY7QUFHUCxjQUFNLElBSEM7QUFJUCxrQkFBVSxJQUpIO0FBS1AsaUJBQVMsSUFMRjtBQU1QLGtCQUFVLElBTkg7QUFPUCxxQkFBYSxJQVBOO0FBUVAscUJBQWE7QUFSTixPQURJO0FBV2IsVUFBSSxRQUFKLEdBQWU7QUFDYixlQUFPLFNBQVMsT0FBVCxDQUFpQixPQUFqQixDQUF5QixNQUF6QixDQUFQO0FBQ0QsT0FiWTtBQWNiLGVBQVMsc0JBQVksVUFBUyxPQUFULEVBQWtCLE1BQWxCLEVBQTBCO0FBQzdDLHdCQUFNLElBQU4sQ0FBVyxRQUFYLEVBQXFCLElBQXJCLENBQTBCLFlBQU07QUFDOUIsZ0JBQU0sSUFBTixDQUFXLGFBQUs7QUFDZCxnQkFBSSxjQUFjLElBQUksV0FBSixDQUFnQixJQUFoQixFQUFzQixNQUFNLENBQU4sQ0FBdEIsQ0FBbEI7QUFDQSxjQUFFLE1BQU0sQ0FBTixDQUFGLEVBQVksSUFBWixDQUFpQixhQUFqQixFQUFnQyxXQUFoQztBQUNBLHFCQUFTLE9BQVQsR0FBbUIsWUFBWSxPQUEvQjtBQUNELFdBSkQ7QUFLQSxpQkFBTyxTQUFTLE9BQWhCO0FBQ0Esa0JBQVEsUUFBUjtBQUNELFNBUkQsRUFRRyxLQVJILENBUVMsUUFBUSxLQVJqQjtBQVNELE9BVlE7QUFkSSxLQUFmOztBQTJCQSxXQUFPLFFBQVA7QUFDRCxHQXBDRDtBQXFDRCxDQXRDRCxFQXNDSSxNQXRDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyMENBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTSxPQUFPLGVBQU8sSUFBcEI7QUFDQSxJQUFNLElBQUksZ0JBQU0sTUFBaEI7O0FBRUE7Ozs7SUFHcUIsTztBQUNuQjs7OztBQUlBLG1CQUFZLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBSyxJQUFMLEdBQVksbUJBQWEsTUFBYixDQUFaO0FBQ0EsU0FBSyxDQUFMLEdBQVMsaUJBQVksTUFBWixDQUFUO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBTVksSyxFQUFPLEUsRUFBSTtBQUNyQixTQUFHLElBQUgsQ0FBUSxJQUFSLEdBQWUsUUFBZixDQUF3QixRQUF4QjtBQUNBLFdBQUssUUFBTCxHQUFnQixJQUFoQjtBQUNBLFdBQUssSUFBTCxHQUFZLEdBQUcsSUFBSCxDQUFRLE1BQVIsRUFBWjtBQUNEOztBQUVEOzs7Ozs7Ozs7K0JBTVcsSyxFQUFPLEUsRUFBSTtBQUNwQixVQUFJLFFBQVEsSUFBWjtBQUNBLFNBQUcsSUFBSCxDQUFRLFdBQVIsQ0FBb0IsUUFBcEI7QUFDQSxVQUFJLE1BQU0sUUFBVixFQUFvQjtBQUNsQixZQUFJLEdBQUcsTUFBUCxFQUFlO0FBQ2IsWUFBRSxHQUFHLE1BQUwsRUFBYSxRQUFiLENBQXNCLFFBQXRCO0FBQ0Q7QUFDRCxhQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFFBQW5CO0FBQ0Q7QUFDRCxZQUFNLElBQU47QUFDQSxZQUFNLFFBQU4sR0FBaUIsS0FBakI7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsrQkFPVyxLLEVBQU8sRSxFQUFJO0FBQ3BCLFVBQUksUUFBUSxJQUFaO0FBQ0EsVUFBTSxPQUFPLGVBQU8sSUFBcEI7QUFDQSxVQUFNLE9BQU8sTUFBTSxDQUFOLENBQVEsS0FBckI7QUFDQSxVQUFJLFlBQVksS0FBSyxVQUFMLENBQWdCLE1BQWhCLEdBQXlCLENBQXpDO0FBQ0EsVUFBSSxjQUFjLEVBQWxCO0FBQ0EsWUFBTSxTQUFOLEdBQWtCLEdBQUcsV0FBSCxDQUFlLEtBQWYsS0FBeUIsQ0FBM0M7O0FBRUEsVUFBSSxDQUFDLEtBQUssZ0JBQU4sSUFBMEIsR0FBRyxJQUFILENBQVEsTUFBUixHQUFpQixRQUFqQixDQUEwQixjQUExQixDQUE5QixFQUF5RTtBQUN2RSxvQkFBWSxJQUFaLENBQWlCLElBQWpCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLLE9BQVQsRUFBa0I7QUFDaEIsb0JBQVksSUFBWixDQUFpQixNQUFNLFNBQU4sS0FBb0IsQ0FBckM7QUFDRDs7QUFFRCxVQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNmLG9CQUFZLElBQVosQ0FBa0IsTUFBTSxTQUFOLEdBQWtCLENBQW5CLEtBQTBCLFNBQTNDO0FBQ0Q7O0FBRUQsWUFBTSxRQUFOLEdBQWlCLFlBQVksSUFBWixDQUFpQjtBQUFBLGVBQVEsU0FBUyxJQUFqQjtBQUFBLE9BQWpCLENBQWpCO0FBQ0Q7O0FBR0Q7Ozs7Ozs7Ozs2QkFNUyxNLEVBQVE7QUFDZixVQUFJLFFBQVE7QUFDUixjQUFNLE9BQU8sSUFBUCxDQUFZLE1BQVo7QUFERSxPQUFaO0FBR0EsVUFBSSxVQUFVLEVBQUUsY0FBRixFQUFrQixNQUFsQixFQUEwQixHQUExQixFQUFkOztBQUVBLFVBQUksWUFBWSxNQUFNLElBQXRCLEVBQTRCO0FBQzFCLGNBQU0sT0FBTixHQUFnQixPQUFoQjtBQUNEOztBQUVELGFBQU8sS0FBUDtBQUNEOztBQUVEOzs7Ozs7OztvQ0FLZ0IsSyxFQUFPO0FBQ3JCLFVBQUksVUFBVSxFQUFkOztBQUVBLFFBQUUsc0JBQUYsRUFBMEIsS0FBMUIsRUFBaUMsSUFBakMsQ0FBc0MsWUFBVztBQUMvQyxZQUFJLFVBQVUsRUFBRSxJQUFGLENBQWQ7QUFDQSxZQUFNLFdBQVcsRUFBRSxrQkFBRixFQUFzQixPQUF0QixFQUErQixFQUEvQixDQUFrQyxVQUFsQyxDQUFqQjtBQUNBLFlBQUksUUFBUTtBQUNSLGlCQUFPLEVBQUUsZUFBRixFQUFtQixPQUFuQixFQUE0QixHQUE1QixFQURDO0FBRVIsaUJBQU8sRUFBRSxlQUFGLEVBQW1CLE9BQW5CLEVBQTRCLEdBQTVCO0FBRkMsU0FBWjs7QUFLQSxZQUFJLFFBQUosRUFBYztBQUNaLGdCQUFNLFFBQU4sR0FBaUIsUUFBakI7QUFDRDs7QUFFRCxnQkFBUSxJQUFSLENBQWEsS0FBYjtBQUNELE9BYkQ7O0FBZUEsYUFBTyxPQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs0QkFNUSxJLEVBQU07QUFDWixVQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFmO0FBQ0EsVUFBSSxNQUFNLENBQUMsNkJBQUQsQ0FBVjs7QUFFQSxzQkFBTSxPQUFOLENBQWMsUUFBZCxFQUF3QixVQUFTLFVBQVQsRUFBcUIsS0FBckIsRUFBNEI7QUFDbEQsWUFBSSxlQUFlLElBQW5CO0FBQ0EsWUFBTSxxQ0FBTjs7QUFFQTtBQUNBLFlBQUksTUFBTSxJQUFOLENBQVcsS0FBWCxDQUFpQixZQUFqQixDQUFKLEVBQW9DO0FBQ2xDLGNBQUksYUFBYSxNQUFNLE1BQXZCO0FBQ0EsY0FBSSxVQUFVLEVBQWQ7O0FBRUEsZUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFdBQVcsTUFBL0IsRUFBdUMsR0FBdkMsRUFBNEM7QUFDMUMsZ0JBQUksU0FBUyxFQUFFLFFBQUYsRUFBWSxXQUFXLENBQVgsRUFBYyxLQUExQixFQUFpQyxXQUFXLENBQVgsQ0FBakMsRUFBZ0QsU0FBN0Q7QUFDQSxvQkFBUSxJQUFSLENBQWEsYUFBYSxNQUExQjtBQUNEO0FBQ0Qsa0JBQVEsSUFBUixDQUFhLFFBQWI7O0FBRUEseUJBQWUsUUFBUSxJQUFSLENBQWEsRUFBYixDQUFmO0FBQ0EsaUJBQU8sTUFBTSxNQUFiO0FBQ0Q7O0FBRUQsWUFBSSxXQUFXLEVBQUUsT0FBRixFQUFXLFlBQVgsRUFBeUIsS0FBekIsQ0FBZjtBQUNBLFlBQUksSUFBSixDQUFTLFdBQVcsU0FBUyxTQUE3QjtBQUNELE9BckJEOztBQXVCQSxVQUFJLElBQUosQ0FBUyxpQ0FBVDs7QUFFQSxhQUFPLElBQUksSUFBSixDQUFTLEVBQVQsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs2QkFLUyxJLEVBQU07QUFDYixVQUFJLFdBQVcsRUFBZjtBQUNBLFVBQUksSUFBSSxLQUFLLENBQWI7QUFDQSxVQUFJLFFBQVEsSUFBWjs7QUFFQSxVQUFJLEtBQUssVUFBTCxDQUFnQixNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUNoQztBQUNBLHdCQUFNLE9BQU4sQ0FBYyxLQUFLLFVBQW5CLEVBQStCLFVBQVMsS0FBVCxFQUFnQixLQUFoQixFQUF1QjtBQUNwRCxjQUFJLFNBQVMsRUFBRSxLQUFGLENBQWI7O0FBRUEsY0FBSSxDQUFFLE9BQU8sUUFBUCxDQUFnQixnQkFBaEIsQ0FBTixFQUEwQztBQUN4QyxnQkFBSSxZQUFZLE1BQU0sUUFBTixDQUFlLE1BQWYsQ0FBaEI7QUFDQSxnQkFBSSxXQUFXLEVBQUUsc0JBQUYsRUFBMEIsS0FBMUIsRUFBaUMsR0FBakMsQ0FBcUM7QUFBQSxxQkFBUSxLQUFLLEtBQWI7QUFBQSxhQUFyQyxFQUF5RCxHQUF6RCxFQUFmOztBQUVBLGtCQUFNLFdBQU4sQ0FBa0IsS0FBbEIsRUFBeUIsU0FBekI7O0FBRUEsZ0JBQUksVUFBVSxPQUFkLEVBQXVCO0FBQ3JCLGtCQUFJLFVBQVUsT0FBVixLQUFzQixPQUExQixFQUFtQztBQUNqQyxvQkFBSSxLQUFRLFVBQVUsSUFBbEIsYUFBSjtBQUNBLG9CQUFJLE9BQU8sU0FBUCxDQUFpQixLQUFqQixDQUF1QixFQUF2QixDQUFKLEVBQWdDO0FBQzlCLHNCQUFJLFdBQVcsT0FBTyxTQUFQLENBQWlCLEtBQWpCLENBQXVCLEVBQXZCLEVBQTJCLFFBQTFDO0FBQ0Esc0JBQU0sT0FBTyxTQUFTLFdBQVQsRUFBYjtBQUNBLDRCQUFVLEtBQVYsR0FBa0IsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixLQUFLLEdBQTNCLENBQWxCO0FBQ0Q7QUFDRixlQVBELE1BT08sSUFBRyxVQUFVLE9BQVYsS0FBc0IsU0FBdEIsSUFBbUMsT0FBTyxPQUE3QyxFQUFzRDtBQUMzRCxvQkFBSSxNQUFRLFVBQVUsSUFBbEIsYUFBSjtBQUNBLG9CQUFJLE9BQU8sT0FBUCxDQUFlLE9BQWYsQ0FBdUIsR0FBdkIsQ0FBSixFQUFnQztBQUM5QixzQkFBSSxTQUFTLE9BQU8sT0FBUCxDQUFlLE9BQWYsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBLDRCQUFVLEtBQVYsR0FBa0IsT0FBTyxVQUFQLEVBQWxCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGdCQUFJLFNBQVMsTUFBYixFQUFxQjtBQUNuQix3QkFBVSxJQUFWLEdBQWlCLFNBQVMsSUFBVCxDQUFjLEdBQWQsQ0FBakI7QUFDRDs7QUFFRCxzQkFBVSxTQUFWLEdBQXNCLFVBQVUsU0FBVixJQUF1QixVQUFVLEtBQXZEOztBQUVBLGdCQUFJLFFBQVEsNkJBQTZCLElBQTdCLENBQWtDLFVBQVUsU0FBNUMsQ0FBWjtBQUNBLGdCQUFJLEtBQUosRUFBVztBQUNULHdCQUFVLEtBQVYsR0FBa0IsTUFBTSxDQUFOLENBQWxCO0FBQ0Q7O0FBRUQsd0JBQVksZ0JBQU0sT0FBTixDQUFjLFNBQWQsQ0FBWjs7QUFFQSxnQkFBSSxnQkFBZ0IsVUFBVSxJQUFWLENBQWUsS0FBZixDQUFxQixFQUFFLGlCQUF2QixDQUFwQjs7QUFFQSxnQkFBSSxhQUFKLEVBQW1CO0FBQ2pCLHdCQUFVLE1BQVYsR0FBbUIsTUFBTSxlQUFOLENBQXNCLE1BQXRCLENBQW5CO0FBQ0Q7O0FBRUQscUJBQVMsSUFBVCxDQUFjLFNBQWQ7QUFDRDtBQUNGLFNBL0NEO0FBZ0REOztBQUVELGFBQU8sUUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7NEJBTVEsUSxFQUFVO0FBQ2hCLFVBQUksT0FBTyxLQUFLLElBQWhCO0FBQ0EsVUFBSSxDQUFDLFFBQUwsRUFBZTtBQUNiLG1CQUFXLGVBQU8sSUFBUCxDQUFZLFFBQXZCO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLFFBQUwsRUFBZTtBQUNiLGVBQU8sS0FBUDtBQUNEOztBQUVELFVBQUksVUFBVTtBQUNaLGFBQUs7QUFBQSxpQkFBWSxnQkFBTSxRQUFOLENBQWUsUUFBZixDQUFaO0FBQUEsU0FETztBQUVaLGNBQU07QUFBQSxpQkFBWSxPQUFPLElBQVAsQ0FBWSxLQUFaLENBQWtCLFFBQWxCLENBQVo7QUFBQTtBQUZNLE9BQWQ7O0FBS0EsV0FBSyxRQUFMLEdBQWdCLFFBQVEsZUFBTyxJQUFQLENBQVksUUFBcEIsRUFBOEIsUUFBOUIsS0FBMkMsRUFBM0Q7O0FBRUEsYUFBTyxLQUFLLFFBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7eUJBS0ssSyxFQUFPO0FBQ1YsVUFBSSxRQUFRLElBQVo7QUFDQSxVQUFJLE9BQU8sS0FBSyxJQUFoQjtBQUNBLFVBQUcsQ0FBQyxLQUFKLEVBQVc7QUFDVCxnQkFBUSxLQUFLLENBQUwsQ0FBTyxLQUFmO0FBQ0Q7QUFDRCxVQUFJLFNBQVM7QUFDWCxhQUFLO0FBQUEsaUJBQU0sTUFBTSxPQUFOLENBQWMsS0FBZCxDQUFOO0FBQUEsU0FETTtBQUVYLGNBQU07QUFBQSxpQkFDTixPQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLE1BQU0sUUFBTixDQUFlLEtBQWYsQ0FBdEIsRUFBNkMsSUFBN0MsRUFBbUQsSUFBbkQsQ0FETTtBQUFBO0FBRkssT0FBYjs7QUFNQTtBQUNBLFdBQUssUUFBTCxHQUFnQixPQUFPLGVBQU8sSUFBUCxDQUFZLFFBQW5CLEVBQTZCLEtBQTdCLENBQWhCOztBQUVBO0FBQ0EsZUFBUyxhQUFULENBQXVCLGlCQUFPLFNBQTlCO0FBQ0EsYUFBTyxLQUFLLFFBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7Z0NBS1ksRSxFQUFJO0FBQ2QsVUFBSSxRQUFRLEdBQUcsV0FBSCxDQUFlLEdBQWYsQ0FBWjtBQUNBLFVBQUksaUJBQWlCLFNBQVMsR0FBRyxTQUFILENBQWEsUUFBUSxDQUFyQixDQUFULElBQW9DLENBQXpEO0FBQ0EsVUFBSSxhQUFhLEdBQUcsU0FBSCxDQUFhLENBQWIsRUFBZ0IsS0FBaEIsQ0FBakI7O0FBRUEsYUFBVSxVQUFWLFNBQXdCLGNBQXhCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2dDQUtZLEssRUFBTyxTLEVBQVc7QUFDNUIsVUFBSSxRQUFRLE1BQU0sZ0JBQU4sQ0FBdUIsaUJBQXZCLENBQVo7QUFDQSxzQkFBTSxPQUFOLENBQWMsS0FBZCxFQUFxQixpQkFBUztBQUM1QixZQUFJLE9BQU8sTUFBTSxLQUFOLENBQVg7QUFDQSxZQUFJLGNBQUo7QUFDQSxZQUFJLE9BQU8sZ0JBQU0sU0FBTixDQUFnQixLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBaEIsQ0FBWDtBQUNBLFlBQUksS0FBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFKLEVBQXdDO0FBQ3RDLGtCQUFRLEtBQUssU0FBYjtBQUNELFNBRkQsTUFFTyxJQUFJLEtBQUssSUFBTCxLQUFjLFVBQWxCLEVBQThCO0FBQ25DLGtCQUFRLEtBQUssT0FBYjtBQUNELFNBRk0sTUFFQTtBQUNMLGtCQUFRLEtBQUssS0FBYjtBQUNEO0FBQ0Qsa0JBQVUsSUFBVixJQUFrQixLQUFsQjtBQUNELE9BWkQ7QUFhRDs7QUFFRDs7Ozs7OztrQ0FJYyxNLEVBQVE7QUFDcEIsVUFBSSxRQUFRLElBQVo7QUFDQSxVQUFJLElBQUksS0FBSyxDQUFiO0FBQ0EsVUFBTSxhQUFhLE9BQU8sSUFBUCxDQUFZLE9BQVosQ0FBbkI7QUFDQSxVQUFJLFFBQVEsT0FBTyxDQUFQLENBQVo7QUFDQSxVQUFJLFdBQVcsT0FBWCxDQUFtQixlQUFuQixNQUF3QyxDQUFDLENBQTdDLEVBQWdEO0FBQzlDO0FBQ0Q7O0FBRUQsVUFBSSxZQUFZLE9BQU8sSUFBUCxDQUFZLE1BQVosQ0FBaEI7QUFDQSxVQUFJLGNBQWMsRUFBRSxjQUFGLEVBQWtCLEtBQWxCLENBQWxCO0FBQ0EsVUFBSSxjQUFjO0FBQ2hCLGNBQU07QUFEVSxPQUFsQjtBQUdBLFVBQUksZ0JBQUo7O0FBRUEsWUFBTSxXQUFOLENBQWtCLEtBQWxCLEVBQXlCLFdBQXpCOztBQUVBLFVBQUksUUFBUSxFQUFFLFlBQUYsRUFBZ0IsS0FBaEIsRUFBdUIsR0FBdkIsRUFBWjtBQUNBLFVBQUksS0FBSixFQUFXO0FBQ1Qsb0JBQVksS0FBWixHQUFvQixLQUFwQjtBQUNEOztBQUVELFVBQUksVUFBVSxLQUFWLENBQWdCLEVBQUUsaUJBQWxCLENBQUosRUFBMEM7QUFDeEMsb0JBQVksTUFBWixHQUFxQixFQUFyQjtBQUNBLG9CQUFZLFFBQVosR0FBdUIsRUFBRSxtQkFBRixFQUF1QixLQUF2QixFQUE4QixFQUE5QixDQUFpQyxVQUFqQyxDQUF2Qjs7QUFFQSxVQUFFLHNCQUFGLEVBQTBCLEtBQTFCLEVBQWlDLElBQWpDLENBQXNDLFVBQVMsQ0FBVCxFQUFZLE9BQVosRUFBcUI7QUFDekQsY0FBSSxTQUFTLEVBQWI7QUFDQSxpQkFBTyxRQUFQLEdBQWtCLEVBQUUsa0JBQUYsRUFBc0IsT0FBdEIsRUFBK0IsRUFBL0IsQ0FBa0MsVUFBbEMsQ0FBbEI7QUFDQSxpQkFBTyxLQUFQLEdBQWUsRUFBRSxlQUFGLEVBQW1CLE9BQW5CLEVBQTRCLEdBQTVCLEVBQWY7QUFDQSxpQkFBTyxLQUFQLEdBQWUsRUFBRSxlQUFGLEVBQW1CLE9BQW5CLEVBQTRCLEdBQTVCLEVBQWY7QUFDQSxzQkFBWSxNQUFaLENBQW1CLElBQW5CLENBQXdCLE1BQXhCO0FBQ0QsU0FORDtBQU9EOztBQUVELG9CQUFjLGdCQUFNLE9BQU4sQ0FBYyxXQUFkLENBQWQ7O0FBRUEsa0JBQVksU0FBWixHQUF3QixNQUFNLFVBQU4sQ0FBaUIsS0FBakIsRUFBd0IsV0FBeEIsQ0FBeEI7QUFDQSxRQUFFLGdCQUFGLEVBQW9CLEtBQXBCLEVBQTJCLEdBQTNCLENBQStCLFlBQVksU0FBM0M7O0FBRUEsYUFBTyxJQUFQLENBQVksV0FBWixFQUF5QixXQUF6QjtBQUNBLGdCQUFVLGdCQUFNLFdBQU4sQ0FBa0IsV0FBbEIsRUFBK0IsSUFBL0IsQ0FBVjs7QUFFQSxzQkFBTSxZQUFZLENBQVosQ0FBTjtBQUNBLGtCQUFZLENBQVosRUFBZSxXQUFmLENBQTJCLE9BQTNCO0FBQ0EsY0FBUSxhQUFSLENBQXNCLGlCQUFPLGFBQTdCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OytCQUtXLEssRUFBTztBQUNoQixVQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBYTtBQUN4QixZQUFNLGNBQWMsS0FBSyxLQUFMLENBQVcscUJBQVgsRUFBcEI7QUFDQSxZQUFNLElBQUksRUFBRSxPQUFGLEdBQVksWUFBWSxJQUF4QixHQUErQixFQUF6QztBQUNBLFlBQU0sSUFBSSxFQUFFLE9BQUYsR0FBWSxZQUFZLEdBQXhCLEdBQThCLEtBQUssRUFBTCxDQUFRLFlBQXRDLEdBQXFELEVBQS9EO0FBQ0EsYUFBSyxFQUFMLENBQVEsS0FBUixDQUFjLFNBQWQsa0JBQXVDLENBQXZDLFlBQStDLENBQS9DO0FBQ0QsT0FMRDs7QUFPQSxVQUFNLGlCQUFpQixNQUFNLGdCQUFOLENBQXVCLGlCQUF2QixDQUF2QjtBQUNBLHNCQUFNLE9BQU4sQ0FBYyxjQUFkLEVBQThCLGlCQUFTO0FBQ3JDLFlBQUksUUFBUSxlQUFlLEtBQWYsQ0FBWjtBQUNBLFlBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxnQkFBMUI7O0FBRUEsWUFBSSxLQUFKLEVBQVc7QUFDVCxjQUFJLEtBQUssZ0JBQU0sTUFBTixDQUFhLEdBQWIsRUFBa0IsS0FBbEIsRUFBeUIsRUFBQyxXQUFXLFNBQVosRUFBekIsQ0FBVDtBQUNBLGdCQUFNLFdBQU4sQ0FBa0IsRUFBbEI7QUFDQSxnQkFBTSxnQkFBTixDQUF1QixXQUF2QixFQUFvQztBQUFBLG1CQUFLLEtBQUssQ0FBTCxFQUFRLEVBQUMsTUFBRCxFQUFLLFlBQUwsRUFBUixDQUFMO0FBQUEsV0FBcEM7QUFDRDtBQUNGLE9BVEQ7QUFVRDs7QUFFRDs7Ozs7Ozs7OytCQU1XLEssRUFBTyxXLEVBQWE7QUFDN0IsVUFBSSxZQUFZLE1BQU0sYUFBTixDQUFvQixnQkFBcEIsQ0FBaEI7QUFDQSxVQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNkO0FBQ0Q7QUFDRCxVQUFJLFVBQUo7QUFDQSxVQUFJLE9BQU8sWUFBWSxJQUF2QjtBQUNBLFVBQUksUUFBUSxZQUFZLEtBQXhCO0FBQ0EsVUFBSSxVQUFVLFVBQVUsS0FBVixDQUFnQixLQUFoQixDQUFzQixHQUF0QixDQUFkO0FBQ0EsVUFBSSxRQUFRO0FBQ1YsZ0JBQVEsS0FERTtBQUVWLGdCQUFRO0FBRkUsT0FBWjs7QUFLQSxVQUFJLGNBQWMsTUFBTSxJQUFOLENBQWxCOztBQUVBLFVBQUksV0FBSixFQUFpQjtBQUNmLFlBQUksS0FBSixFQUFXO0FBQ1QsZUFBSyxJQUFJLENBQVQsRUFBWSxJQUFJLFFBQVEsTUFBeEIsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDbkMsZ0JBQUksS0FBSyxJQUFJLE1BQUosYUFBc0IsV0FBdEIscUJBQW9ELEdBQXBELENBQVQ7QUFDQSxnQkFBSSxRQUFRLFFBQVEsQ0FBUixFQUFXLEtBQVgsQ0FBaUIsRUFBakIsQ0FBWjtBQUNBLGdCQUFJLEtBQUosRUFBVztBQUNULHNCQUFRLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBQ0Q7QUFDRjtBQUNELGtCQUFRLElBQVIsQ0FBYSxjQUFjLEdBQWQsR0FBb0IsS0FBakM7QUFDRDtBQUNELGdCQUFRLElBQVIsQ0FBYSxXQUFiO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLGFBQU8sZ0JBQU0sTUFBTixDQUFhLE9BQWIsRUFBc0IsSUFBdEIsQ0FBMkIsR0FBM0IsRUFBZ0MsSUFBaEMsRUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7aUNBTWEsTyxFQUFTLE0sRUFBUTtBQUM1QixVQUFJLENBQUMsT0FBTCxFQUFjO0FBQ1osa0JBQVUsU0FBUyxzQkFBVCxDQUFnQyxzQkFBaEMsRUFBd0QsQ0FBeEQsQ0FBVjtBQUNEO0FBQ0QsVUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNYLGlCQUFTLFNBQVMsc0JBQVQsQ0FBZ0MscUJBQWhDLEVBQXVELENBQXZELENBQVQ7QUFDRDtBQUNELGNBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixTQUF6QjtBQUNBLGFBQU8sTUFBUDtBQUNBLGNBQVEsTUFBUjtBQUNBLGVBQVMsYUFBVCxDQUF1QixpQkFBTyxXQUE5QjtBQUNEOztBQUVEOzs7Ozs7OztpQ0FLYSxlLEVBQWlCO0FBQzVCLFVBQUksWUFBWTtBQUNkLGNBQU07QUFDSixpQkFBTyxZQURIO0FBRUosb0JBQVU7QUFGTixTQURRO0FBS2QsZUFBTztBQUNMLGlCQUFPLFdBREY7QUFFTCxvQkFBVTtBQUZMO0FBTE8sT0FBaEI7O0FBV0EsYUFBTyxVQUFVLGVBQVYsSUFBNkIsVUFBVSxlQUFWLENBQTdCLEdBQTBELEVBQWpFO0FBQ0Q7O0FBRUQ7Ozs7Ozs7a0NBSWM7QUFDWixVQUFNLFFBQVEsSUFBZDtBQUNBLFVBQUksVUFBVSxnQkFBTSxNQUFOLENBQWEsS0FBYixFQUFvQixJQUFwQixFQUEwQjtBQUN0QyxtQkFBVztBQUQyQixPQUExQixDQUFkO0FBR0EsZUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixPQUExQjtBQUNBLGNBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixTQUF0Qjs7QUFFQSxjQUFRLE9BQVIsR0FBa0IsWUFBVztBQUMzQixjQUFNLFlBQU4sQ0FBbUIsT0FBbkI7QUFDRCxPQUZEOztBQUlBLGFBQU8sT0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7NEJBU1EsTyxFQUFTLFMsRUFBMkM7QUFBQSxVQUFoQyxNQUFnQyx1RUFBdkIsS0FBdUI7QUFBQSxVQUFoQixTQUFnQix1RUFBSixFQUFJOztBQUMxRCxVQUFNLFFBQVEsSUFBZDtBQUNBLFVBQUksT0FBTyxnQkFBTSxPQUFqQjtBQUNBLFVBQUksVUFBVSxNQUFNLFdBQU4sRUFBZDtBQUNBLFVBQUksTUFBTSxFQUFFLFFBQUYsRUFBWSxLQUFLLEdBQWpCLEVBQXNCO0FBQzlCLG1CQUFXO0FBRG1CLE9BQXRCLENBQVY7QUFHQSxVQUFJLEtBQUssRUFBRSxRQUFGLEVBQVksS0FBSyxFQUFqQixFQUFxQjtBQUM1QixtQkFBVztBQURpQixPQUFyQixDQUFUOztBQUlBLFNBQUcsT0FBSCxHQUFhLFlBQVc7QUFDdEIsY0FBTSxZQUFOLENBQW1CLE9BQW5CO0FBQ0QsT0FGRDs7QUFJQSxVQUFJLE9BQUosR0FBYyxZQUFXO0FBQ3ZCO0FBQ0EsY0FBTSxZQUFOLENBQW1CLE9BQW5CO0FBQ0QsT0FIRDs7QUFLQSxVQUFJLFVBQVUsRUFBRSxLQUFGLEVBQVMsQ0FBQyxFQUFELEVBQUssR0FBTCxDQUFULEVBQW9CLEVBQUMsV0FBVyxhQUFaLEVBQXBCLENBQWQ7O0FBRUEsa0JBQVkseUJBQXlCLFNBQXJDOztBQUVBLFVBQUksWUFBWSxFQUFFLEtBQUYsRUFBUyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQVQsRUFBNkIsRUFBQyxvQkFBRCxFQUE3QixDQUFoQjtBQUNBLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxZQUFNLEtBQUssU0FBUyxlQUFwQjtBQUNBLGlCQUFTO0FBQ1AsaUJBQU8sS0FBSyxHQUFMLENBQVMsR0FBRyxXQUFaLEVBQXlCLE9BQU8sVUFBUCxJQUFxQixDQUE5QyxJQUFtRCxDQURuRDtBQUVQLGlCQUFPLEtBQUssR0FBTCxDQUFTLEdBQUcsWUFBWixFQUEwQixPQUFPLFdBQVAsSUFBc0IsQ0FBaEQsSUFBcUQ7QUFGckQsU0FBVDtBQUlBLGtCQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsR0FBMkIsT0FBM0I7QUFDRCxPQVBELE1BT087QUFDTCxrQkFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFlBQXhCO0FBQ0Q7O0FBRUQsZ0JBQVUsS0FBVixDQUFnQixJQUFoQixHQUF1QixPQUFPLEtBQVAsR0FBZSxJQUF0QztBQUNBLGdCQUFVLEtBQVYsQ0FBZ0IsR0FBaEIsR0FBc0IsT0FBTyxLQUFQLEdBQWUsSUFBckM7O0FBRUEsZUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixTQUExQjs7QUFFQSxVQUFJLEtBQUo7QUFDQSxhQUFPLFNBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7MkJBUU8sTyxFQUF5QztBQUFBLFVBQWhDLE1BQWdDLHVFQUF2QixLQUF1QjtBQUFBLFVBQWhCLFNBQWdCLHVFQUFKLEVBQUk7O0FBQzlDLFVBQU0sUUFBUSxJQUFkO0FBQ0EsVUFBSSxjQUFjLFNBQVMsZUFBVCxDQUF5QixXQUEzQztBQUNBLFVBQUksZUFBZSxTQUFTLGVBQVQsQ0FBeUIsWUFBNUM7QUFDQSxZQUFNLFdBQU47O0FBRUEsa0JBQVkseUJBQXlCLFNBQXJDOztBQUVBLFVBQUksWUFBWSxnQkFBTSxNQUFOLENBQWEsS0FBYixFQUFvQixPQUFwQixFQUE2QixFQUFDLFdBQVcsU0FBWixFQUE3QixDQUFoQjtBQUNBLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxpQkFBUztBQUNQLGlCQUFPLEtBQUssR0FBTCxDQUFTLFdBQVQsRUFBc0IsT0FBTyxVQUFQLElBQXFCLENBQTNDLElBQWdELENBRGhEO0FBRVAsaUJBQU8sS0FBSyxHQUFMLENBQVMsWUFBVCxFQUF1QixPQUFPLFdBQVAsSUFBc0IsQ0FBN0MsSUFBa0Q7QUFGbEQsU0FBVDtBQUlBLGtCQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsR0FBMkIsT0FBM0I7QUFDRCxPQU5ELE1BTU87QUFDTCxrQkFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFlBQXhCO0FBQ0Q7O0FBRUQsZ0JBQVUsS0FBVixDQUFnQixJQUFoQixHQUF1QixPQUFPLEtBQVAsR0FBZSxJQUF0QztBQUNBLGdCQUFVLEtBQVYsQ0FBZ0IsR0FBaEIsR0FBc0IsT0FBTyxLQUFQLEdBQWUsSUFBckM7O0FBRUEsZUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixTQUExQjs7QUFFQSxlQUFTLGFBQVQsQ0FBdUIsaUJBQU8sV0FBOUI7O0FBRUEsVUFBSSxVQUFVLE9BQVYsQ0FBa0IsYUFBbEIsTUFBcUMsQ0FBQyxDQUExQyxFQUE2QztBQUMzQyxpQkFBUyxhQUFULENBQXVCLGlCQUFPLFFBQTlCO0FBQ0Q7O0FBRUQsYUFBTyxTQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7cUNBSWlCLEMsRUFBRztBQUNsQixVQUFJLFFBQVEsSUFBWjtBQUNBLFVBQUksU0FBUyxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksS0FBWixDQUFrQixhQUFsQixFQUFpQyxDQUFqQyxDQUFiO0FBQ0EsVUFBSSxRQUFRLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFaO0FBQ0EsVUFBSSxPQUFPLGdCQUFNLE9BQWpCO0FBQ0EsVUFBSSxTQUFTLEVBQUUsZUFBRixFQUFtQixLQUFuQixDQUFiO0FBQ0EsVUFBSSxpQkFBaUIsRUFBRSxNQUFGLENBQVMscUJBQVQsRUFBckI7QUFDQSxVQUFJLFdBQVcsU0FBUyxJQUFULENBQWMscUJBQWQsRUFBZjtBQUNBLFVBQUksU0FBUztBQUNYLGVBQU8sZUFBZSxJQUFmLEdBQXVCLGVBQWUsS0FBZixHQUF1QixDQUQxQztBQUVYLGVBQVEsZUFBZSxHQUFmLEdBQXFCLFNBQVMsR0FBL0IsR0FBc0M7QUFGbEMsT0FBYjs7QUFLQSxVQUFJLE9BQU8sTUFBWCxFQUFtQjtBQUNqQixjQUFNLE9BQU4sQ0FBYyxLQUFLLGVBQW5CLEVBQW9DLFlBQVc7QUFDN0MsZ0JBQU0sZUFBTixDQUFzQixJQUF0QixDQUEyQixLQUEzQixFQUFrQyxLQUFsQztBQUNBLHlCQUFPLElBQVAsQ0FBWSxNQUFaLENBQW1CLE9BQW5CLENBQTJCLEtBQUssZ0JBQWhDO0FBQ0EseUJBQU8sSUFBUCxDQUFZLFVBQVo7QUFDRCxTQUpELEVBSUcsTUFKSDtBQUtELE9BTkQsTUFNTztBQUNMLGNBQU0sTUFBTixDQUFhLEtBQUssZUFBbEIsRUFBbUMsTUFBbkM7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OztvQ0FLZ0IsSyxFQUF1QjtBQUFBLFVBQWhCLE9BQWdCLHVFQUFOLElBQU07O0FBQ3JDLFVBQUksT0FBTyxnQkFBTSxPQUFqQjtBQUNBLFVBQUksT0FBTyxlQUFPLElBQWxCO0FBQ0EsVUFBSSxTQUFTLE1BQU0sZ0JBQU4sQ0FBdUIsZUFBdkIsQ0FBYjtBQUNBLFVBQUksaUJBQWlCLEVBQXJCOztBQUVBLFVBQUksQ0FBQyxPQUFPLE1BQVosRUFBb0I7QUFDbEIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLLE9BQVQsRUFBa0I7QUFDaEIsdUJBQWUsSUFBZixDQUFvQixJQUFwQjtBQUNEOztBQUVELFVBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2YsdUJBQWUsSUFBZixDQUFvQixJQUFwQjtBQUNEOztBQUVELFVBQUksQ0FBQyxlQUFlLElBQWYsQ0FBb0I7QUFBQSxlQUFRLFNBQVMsSUFBakI7QUFBQSxPQUFwQixDQUFMLEVBQWlEO0FBQy9DLGNBQU0sYUFBTixDQUFvQixTQUFwQixDQUE4QixHQUE5QixDQUFrQyxPQUFsQztBQUNBLGNBQU0sYUFBTixDQUFvQixPQUFwQixDQUE0QixPQUE1QixHQUFzQyxLQUFLLFVBQTNDO0FBQ0Q7O0FBRUQsVUFBSSxPQUFKLEVBQWE7QUFDWCxjQUFNLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBb0IsVUFBcEI7QUFDQSxZQUFJLGNBQWMsQ0FBbEI7QUFDQSx3QkFBTSxPQUFOLENBQWMsTUFBZCxFQUFzQjtBQUFBLGlCQUNwQixlQUFlLE9BQU8sS0FBUCxFQUFjLFlBQWQsR0FBNkIsQ0FEeEI7QUFBQSxTQUF0QjtBQUVBLGVBQU8sQ0FBUCxFQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsR0FBK0IsQ0FBQyxXQUFoQztBQUNBLG1CQUFXLFlBQU07QUFDZiwwQkFBTSxLQUFOLEVBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixVQUE5QjtBQUNELFNBRkQsRUFFRyxHQUZIO0FBR0QsT0FURCxNQVNPO0FBQ0wsd0JBQU0sS0FBTjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O2tDQUtjLEssRUFBTztBQUNuQixVQUFJLENBQUMsZUFBTyxJQUFQLENBQVksZ0JBQWpCLEVBQW1DO0FBQ2pDLGVBQU8sS0FBUDtBQUNEOztBQUVELFVBQUksYUFBYSxFQUFqQjs7QUFFQSxZQUFNLFFBQU4sR0FBaUIsSUFBakIsQ0FBc0IsVUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCO0FBQzdDLG1CQUFXLEtBQVgsSUFBb0IsRUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixNQUFoQixDQUFwQjtBQUNELE9BRkQ7O0FBSUEsVUFBSSxPQUFPLGNBQVgsRUFBMkI7QUFDekIsZUFBTyxjQUFQLENBQXNCLE9BQXRCLENBQThCLFlBQTlCLEVBQTRDLE9BQU8sSUFBUCxDQUFZLFNBQVosQ0FBc0IsVUFBdEIsQ0FBNUM7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7Z0NBTVksVSxFQUFZO0FBQ3RCLFVBQU0sT0FBTyxlQUFPLElBQXBCO0FBQ0EsVUFBSSxhQUFhLEtBQWpCO0FBQ0EsVUFBSSxpQkFBaUIsRUFBckI7O0FBRUEsVUFBSSxPQUFPLGNBQVgsRUFBMkI7QUFDekIsWUFBSSxLQUFLLGdCQUFULEVBQTJCO0FBQ3pCLHVCQUFhLE9BQU8sY0FBUCxDQUFzQixPQUF0QixDQUE4QixZQUE5QixDQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sY0FBUCxDQUFzQixVQUF0QixDQUFpQyxZQUFqQztBQUNEO0FBQ0Y7O0FBRUQsVUFBSSxDQUFDLFVBQUwsRUFBaUI7QUFDZixZQUFJLGVBQWUsS0FBSyxZQUFMLENBQWtCLE1BQWxCLENBQXlCLFdBQVcsR0FBWCxDQUFlO0FBQUEsaUJBQ3pELE1BQU0sS0FBTixDQUFZLElBRDZDO0FBQUEsU0FBZixDQUF6QixDQUFuQjtBQUVBLHFCQUFhLGdCQUFNLE1BQU4sQ0FBYSxZQUFiLENBQWI7QUFDRCxPQUpELE1BSU87QUFDTCxxQkFBYSxPQUFPLElBQVAsQ0FBWSxLQUFaLENBQWtCLFVBQWxCLENBQWI7QUFDQSxxQkFBYSxvQkFBWSxVQUFaLEVBQXdCLEdBQXhCLENBQTRCLFVBQVMsQ0FBVCxFQUFZO0FBQ25ELGlCQUFPLFdBQVcsQ0FBWCxDQUFQO0FBQ0QsU0FGWSxDQUFiO0FBR0Q7O0FBR0QsaUJBQVcsT0FBWCxDQUFtQixVQUFDLFNBQUQsRUFBZTtBQUNoQyxZQUFJLFFBQVEsV0FBVyxNQUFYLENBQWtCLFVBQVMsS0FBVCxFQUFnQjtBQUM1QyxpQkFBTyxNQUFNLEtBQU4sQ0FBWSxJQUFaLEtBQXFCLFNBQTVCO0FBQ0QsU0FGVyxFQUVULENBRlMsQ0FBWjtBQUdBLHVCQUFlLElBQWYsQ0FBb0IsS0FBcEI7QUFDRCxPQUxEOztBQU9BLGFBQU8sZUFBZSxNQUFmLENBQXNCLE9BQXRCLENBQVA7QUFDRDs7QUFFRDs7Ozs7OzttQ0FJZTtBQUNiLFVBQU0sUUFBUSxJQUFkO0FBQ0EsVUFBTSxTQUFTLEVBQUUsY0FBRixFQUFrQixNQUFNLENBQU4sQ0FBUSxLQUExQixDQUFmO0FBQ0EsVUFBTSxhQUFhLEVBQUUsY0FBRixFQUFrQixNQUFNLENBQU4sQ0FBUSxLQUExQixDQUFuQjtBQUNBLFVBQU0sYUFBYSxFQUFFLGFBQUYsRUFBaUIsTUFBakIsQ0FBbkI7O0FBRUEsaUJBQVcsV0FBWCxDQUF1QixNQUF2QjtBQUNBLGFBQU8sV0FBUCxDQUFtQixTQUFuQjtBQUNBLFFBQUUsY0FBRixFQUFrQixNQUFsQixFQUEwQixJQUExQjtBQUNBLGlCQUFXLElBQVg7QUFDRDs7QUFFRDs7Ozs7Ozs7K0JBS1csTyxFQUF5QjtBQUFBLFVBQWhCLE9BQWdCLHVFQUFOLElBQU07O0FBQ2xDLFVBQU0sUUFBUSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLFVBQU0sWUFBWSxFQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBbEI7QUFDQSxVQUFNLFlBQVksRUFBRSxhQUFGLEVBQWlCLEtBQWpCLENBQWxCO0FBQ0EsWUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFNBQXZCO0FBQ0EsZ0JBQVUsV0FBVixDQUFzQixNQUF0QjtBQUNBLFVBQUksT0FBSixFQUFhO0FBQ1gsVUFBRSxjQUFGLEVBQWtCLEtBQWxCLEVBQXlCLFdBQXpCLENBQXFDLEdBQXJDO0FBQ0Esa0JBQVUsV0FBVixDQUFzQixHQUF0QjtBQUNELE9BSEQsTUFHTztBQUNMLFVBQUUsY0FBRixFQUFrQixLQUFsQixFQUF5QixNQUF6QjtBQUNBLGtCQUFVLE1BQVY7QUFDRDtBQUNELFdBQUssYUFBTCxDQUFtQixFQUFFLEtBQUYsQ0FBbkI7QUFDRDs7QUFFRDs7Ozs7O3FDQUdpQjtBQUNmLFVBQUksSUFBSSxLQUFLLENBQWI7QUFDQSxVQUFNLFVBQVUsRUFBRSxFQUFFLFFBQUosRUFBYyxNQUFkLEVBQWhCO0FBQ0EsVUFBTSxhQUFhLEVBQUUsRUFBRSxLQUFKLEVBQVcsTUFBWCxFQUFuQjtBQUNBLFVBQU0sVUFBVSxRQUFRLEtBQVIsRUFBaEI7QUFDQSxVQUFNLGFBQWEsRUFBRSxRQUFGLENBQVcscUJBQVgsRUFBbkI7O0FBRUEsUUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixVQUFTLEdBQVQsRUFBYztBQUM3QixZQUFJLFlBQVksRUFBRSxJQUFJLE1BQU4sRUFBYyxTQUFkLEVBQWhCO0FBQ0EsWUFBTSxpQkFBaUI7QUFDckIsZUFBSyxDQURnQjtBQUVyQixrQkFBUSxNQUZhO0FBR3JCLGlCQUFPLE1BSGM7QUFJckIsZ0JBQU0sV0FBVztBQUpJLFNBQXZCOztBQU9BLFlBQUksU0FBUyxzQkFBYyxFQUFkLEVBQWtCLGNBQWxCLEVBQWtDLGVBQU8sSUFBUCxDQUFZLGNBQVosQ0FBMkIsTUFBN0QsQ0FBYjs7QUFFQSxZQUFJLFlBQVksV0FBVyxNQUFYLEdBQW9CLEdBQXBDLEVBQXlDO0FBQ3ZDLGNBQU0sUUFBUTtBQUNaLHNCQUFVLE9BREU7QUFFWixtQkFBTztBQUZLLFdBQWQ7O0FBS0EsY0FBTSxVQUFVLHNCQUFjLEtBQWQsRUFBcUIsTUFBckIsQ0FBaEI7O0FBRUEsY0FBSSxXQUFXLFFBQVEsTUFBUixFQUFmO0FBQ0EsY0FBSSxjQUFjLFdBQVcsTUFBWCxFQUFsQjtBQUNBLGNBQUksV0FBVyxTQUFTLEdBQVQsR0FBZSxRQUFRLE1BQVIsRUFBOUI7QUFDQSxjQUFJLGNBQWMsWUFBWSxHQUFaLEdBQWtCLFdBQVcsTUFBWCxFQUFwQzs7QUFFQSxjQUFJLFdBQVcsV0FBWCxJQUEyQixTQUFTLEdBQVQsS0FBaUIsWUFBWSxHQUE1RCxFQUFrRTtBQUNoRSxvQkFBUSxHQUFSLENBQVk7QUFDVix3QkFBVSxVQURBO0FBRVYsbUJBQUssTUFGSztBQUdWLHNCQUFRLENBSEU7QUFJVixxQkFBTyxDQUpHO0FBS1Ysb0JBQU07QUFMSSxhQUFaO0FBT0Q7O0FBRUQsY0FBSSxXQUFXLFdBQVgsSUFBMkIsYUFBYSxXQUFiLElBQTRCLFNBQVMsR0FBVCxHQUFlLFNBQTFFLEVBQXNGO0FBQ3BGLG9CQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7QUFDRixTQTFCRCxNQTBCTztBQUNMLFlBQUUsUUFBRixDQUFXLGFBQVgsQ0FBeUIsZUFBekIsQ0FBeUMsT0FBekM7QUFDRDtBQUNGLE9BeENEO0FBeUNEOztBQUVEOzs7Ozs7NkJBR1MsQyxFQUFHO0FBQ1YsVUFBTSxPQUFPLEtBQUssSUFBbEI7QUFDQSxVQUFNLFdBQVcsZ0JBQU0sVUFBTixDQUFpQixLQUFLLFFBQXRCLENBQWpCO0FBQ0EsVUFBTSxPQUFPLEVBQUUsTUFBRixFQUFVLFFBQVYsRUFBb0I7QUFDL0IsaUNBQXVCLGVBQU8sSUFBUCxDQUFZO0FBREosT0FBcEIsQ0FBYjs7QUFJQSxXQUFLLE1BQUwsQ0FBWSxFQUFFLEtBQUYsRUFBUyxJQUFULENBQVosRUFBNEIsSUFBNUIsRUFBa0MsYUFBbEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Z0NBS1ksTyxFQUFTO0FBQ25CLFVBQUksZUFBZSxLQUFuQjtBQUNBLFVBQUksUUFBUSxJQUFaO0FBQ0EsVUFBTSxPQUFPLEtBQUssQ0FBTCxDQUFPLEtBQXBCO0FBQ0EsVUFBTSxTQUFTLEtBQUssc0JBQUwsQ0FBNEIsWUFBNUIsQ0FBZjs7QUFFQSxVQUFJLENBQUMsT0FBTyxNQUFaLEVBQW9CO0FBQ2xCLGdCQUFRLElBQVIsQ0FBYSxxQkFBYjtBQUNBLGVBQU8sS0FBUDtBQUNEOztBQUVELFVBQUksQ0FBQyxPQUFMLEVBQWM7QUFDWixZQUFJLGVBQWUsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLE1BQWQsRUFBc0IsR0FBdEIsQ0FBMEIsVUFBQyxLQUFELEVBQVc7QUFDdEQsaUJBQU8sTUFBTSxFQUFiO0FBQ0QsU0FGa0IsQ0FBbkI7QUFHQSxnQkFBUSxJQUFSLENBQWEsMkZBQWI7QUFDQSxnQkFBUSxJQUFSLENBQWEsb0JBQW9CLGFBQWEsSUFBYixDQUFrQixJQUFsQixDQUFqQztBQUNBLGtCQUFVLEtBQUssU0FBTCxDQUFlLEVBQXpCO0FBQ0Q7O0FBRUQsVUFBTSxRQUFRLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsVUFBTSxTQUFTLEVBQUUsS0FBRixDQUFmO0FBQ0EsVUFBSSxDQUFDLEtBQUwsRUFBWTtBQUNWLGdCQUFRLElBQVIsQ0FBYSxpQkFBYjtBQUNBLGVBQU8sS0FBUDtBQUNEOztBQUVELGFBQU8sT0FBUCxDQUFlLEdBQWYsRUFBb0IsWUFBVztBQUM3QixlQUFPLFdBQVAsQ0FBbUIsVUFBbkI7QUFDQSxlQUFPLE1BQVA7QUFDQSx1QkFBZSxJQUFmO0FBQ0EsY0FBTSxJQUFOO0FBQ0EsWUFBSSxDQUFDLEtBQUssVUFBTCxDQUFnQixNQUFyQixFQUE2QjtBQUMzQixjQUFJLFlBQVksS0FBSyxhQUFyQjtBQUNBLG9CQUFVLFNBQVYsQ0FBb0IsR0FBcEIsQ0FBd0IsT0FBeEI7QUFDQSxvQkFBVSxPQUFWLENBQWtCLE9BQWxCLEdBQTRCLGdCQUFNLE9BQU4sQ0FBYyxVQUExQztBQUNEO0FBQ0YsT0FWRDs7QUFZQSxlQUFTLGFBQVQsQ0FBdUIsaUJBQU8sWUFBOUI7QUFDQSxhQUFPLFlBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7eUNBS3FCLFUsRUFBWTtBQUFBLFVBQzFCLEtBRDBCLEdBQ0MsVUFERCxDQUMxQixLQUQwQjtBQUFBLFVBQ25CLE1BRG1CLEdBQ0MsVUFERCxDQUNuQixNQURtQjtBQUFBLFVBQ1IsS0FEUSwwQ0FDQyxVQUREOztBQUUvQixVQUFJLE9BQU8sS0FBSyxJQUFoQjtBQUNBLFVBQUksQ0FBQyxLQUFMLEVBQVk7QUFDVixZQUFJLE1BQU0sRUFBVixFQUFjO0FBQ1osa0JBQVEsZ0JBQU0sT0FBTixDQUFjLE1BQU0sRUFBcEIsS0FBMkIsZ0JBQU0sVUFBTixDQUFpQixNQUFNLEVBQXZCLENBQW5DO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsa0JBQVEsRUFBUjtBQUNEO0FBQ0YsT0FORCxNQU1PO0FBQ0wsZ0JBQVEsZ0JBQU0sT0FBTixDQUFjLEtBQWQsS0FBd0IsRUFBaEM7QUFDRDs7QUFFRCxVQUFJLENBQUMsTUFBTSxFQUFYLEVBQWU7QUFDYixjQUFNLEVBQU4sR0FBYyxLQUFLLE1BQW5CLGdCQUFvQyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxJQUF6QixDQUFwQztBQUNELE9BRkQsTUFFTztBQUNMLGNBQU0sRUFBTixHQUFjLEtBQUssTUFBbkIsU0FBNkIsTUFBTSxFQUFuQztBQUNEOztBQUVELFVBQU0sU0FBUyxFQUFFLFFBQUYsRUFBWSxLQUFaLEVBQW1CLEtBQW5CLENBQWY7O0FBRUEsVUFBSSxNQUFKLEVBQVk7QUFBQSxtQ0FDRCxLQURDO0FBRVIsY0FBSSxPQUFPLGNBQVAsQ0FBc0IsS0FBdEIsQ0FBSixFQUFrQztBQUNoQyxtQkFBTyxnQkFBUCxDQUF3QixLQUF4QixFQUErQjtBQUFBLHFCQUFPLE9BQU8sS0FBUCxFQUFjLEdBQWQsQ0FBUDtBQUFBLGFBQS9CO0FBQ0Q7QUFKTzs7QUFDVixhQUFLLElBQUksS0FBVCxJQUFrQixNQUFsQixFQUEwQjtBQUFBLGdCQUFqQixLQUFpQjtBQUl6QjtBQUNGOztBQUVELGFBQU8sTUFBUDtBQUNEOztBQUVEOzs7Ozs7OztvQ0FLZ0IsVyxFQUFhO0FBQzNCLFVBQUksV0FBVyxFQUFmO0FBQ0EsVUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsVUFBVztBQUM3QixlQUFPO0FBQ0wsaUJBQU8sZ0JBQU0sR0FBTixDQUFVLE9BQVYsQ0FERjtBQUVMLGlCQUFPO0FBRkYsU0FBUDtBQUlELE9BTEg7O0FBT0UscUJBQU8sUUFBUCxHQUFrQixnQkFBTSxLQUFOLHVCQUE2QixXQUE3QixDQUFsQjs7QUFFQSxXQUFLLElBQUksT0FBVCxJQUFvQixlQUFPLFFBQTNCLEVBQXFDO0FBQ25DLFlBQUksZUFBTyxRQUFQLENBQWdCLGNBQWhCLENBQStCLE9BQS9CLENBQUosRUFBNkM7QUFDM0MsbUJBQVMsT0FBVCxJQUFvQixlQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsRUFBeUIsR0FBekIsQ0FBNkIsYUFBN0IsQ0FBcEI7QUFDRDtBQUNGOztBQUVELGFBQU8sUUFBUDtBQUNIOztBQUVEOzs7Ozs7OzZCQUlTLE0sRUFBUTtBQUNmLFVBQUksSUFBSSxLQUFLLENBQWI7QUFDQSxVQUFJLE9BQU8sS0FBSyxJQUFoQjtBQUNBLFFBQUUsS0FBRixHQUFVLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBYztBQUNwQixZQUFJLEtBQUssTUFEVztBQUVwQixtQkFBVztBQUZTLE9BQWQsQ0FBVjs7QUFLQTtBQUNBLFFBQUUsUUFBRixHQUFhLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBYztBQUN6QixZQUFPLEtBQUssTUFBWixpQkFEeUI7QUFFekIsbUJBQVc7QUFGYyxPQUFkLENBQWI7QUFJRDs7QUFFRDs7Ozs7Ozs7bUNBS2UsTyxFQUFTO0FBQ3RCLFVBQU0sUUFBUSxJQUFkO0FBRHNCLDRCQUVrQixPQUZsQixDQUVqQixNQUZpQjtBQUFBLFVBRWpCLE1BRmlCLG1DQUVSLEVBRlE7QUFBQSxVQUVKLFNBRkksR0FFa0IsT0FGbEIsQ0FFSixTQUZJO0FBQUEsVUFFVSxJQUZWLDBDQUVrQixPQUZsQjs7QUFHdEIsVUFBSSxnQkFBZ0IsQ0FBQztBQUNuQixZQUFJLE9BRGU7QUFFbkIsbUJBQVcsMEJBRlE7QUFHbkIsZ0JBQVE7QUFDTixpQkFBTyxNQUFNLGdCQUFOLENBQXVCLElBQXZCLENBQTRCLEtBQTVCO0FBREQ7QUFIVyxPQUFELEVBTWpCO0FBQ0QsZUFBTyxVQUROO0FBRUQsWUFBSSxNQUZIO0FBR0QsbUJBQVcsaUJBSFY7QUFJRCxnQkFBUTtBQUNOLGlCQUFPLE1BQU0sUUFBTixDQUFlLElBQWYsQ0FBb0IsS0FBcEI7QUFERDtBQUpQLE9BTmlCLEVBYWpCO0FBQ0QsWUFBSSxNQURIO0FBRUQsY0FBTSxRQUZMO0FBR0QsbUJBQVcsK0JBSFY7QUFJRCxnQkFBUTtBQUNOLGlCQUFPLG9CQUFPO0FBQ1osa0JBQU0sSUFBTjtBQUNBLDJCQUFPLElBQVAsQ0FBWSxNQUFaLENBQW1CLEdBQW5CLEVBQXdCLE1BQU0sSUFBTixDQUFXLFFBQW5DO0FBQ0Q7QUFKSztBQUpQLE9BYmlCLENBQXBCOztBQXlCQSxVQUFJLGdCQUFnQixDQUNsQjtBQUNFLGVBQU8sZ0JBQU0sR0FBTixDQUFVLGNBQVYsQ0FEVDtBQUVFLGVBQU87QUFDTCxnQkFBTTtBQUREO0FBRlQsT0FEa0IsRUFNZjtBQUNELGVBQU8sZ0JBQU0sR0FBTixDQUFVLFFBQVYsQ0FETjtBQUVELGVBQU87QUFDTCxnQkFBTTtBQUREO0FBRk4sT0FOZSxFQVdmO0FBQ0QsZUFBTyxnQkFBTSxHQUFOLENBQVUsZUFBVixDQUROO0FBRUQsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGTixPQVhlLEVBZ0JmO0FBQ0QsZUFBTyxnQkFBTSxHQUFOLENBQVUsV0FBVixDQUROO0FBRUQsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGTixPQWhCZSxFQXFCZjtBQUNELGVBQU8sZ0JBQU0sR0FBTixDQUFVLFlBQVYsQ0FETjtBQUVELGVBQU87QUFDTCxnQkFBTTtBQUREO0FBRk4sT0FyQmUsRUEwQmY7QUFDRCxlQUFPLGdCQUFNLEdBQU4sQ0FBVSxRQUFWLENBRE47QUFFRCxlQUFPO0FBQ0wsZ0JBQU07QUFERDtBQUZOLE9BMUJlLEVBK0JmO0FBQ0QsZUFBTyxnQkFBTSxHQUFOLENBQVUsUUFBVixDQUROO0FBRUQsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGTixPQS9CZSxFQW9DZjtBQUNELGVBQU8sZ0JBQU0sR0FBTixDQUFVLFFBQVYsQ0FETjtBQUVELGVBQU87QUFDTCxnQkFBTTtBQUREO0FBRk4sT0FwQ2UsRUF5Q2Y7QUFDRCxlQUFPLGdCQUFNLEdBQU4sQ0FBVSxXQUFWLENBRE47QUFFRCxlQUFPO0FBQ0wsZ0JBQU07QUFERDtBQUZOLE9BekNlLEVBOENmO0FBQ0QsZUFBTyxnQkFBTSxHQUFOLENBQVUsWUFBVixDQUROO0FBRUQsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGTixPQTlDZSxFQW1EZjtBQUNELGVBQU8sZ0JBQU0sR0FBTixDQUFVLFFBQVYsQ0FETjtBQUVELGVBQU87QUFDTCxnQkFBTTtBQUREO0FBRk4sT0FuRGUsRUF3RGY7QUFDRCxlQUFPLGdCQUFNLEdBQU4sQ0FBVSxNQUFWLENBRE47QUFFRCxlQUFPO0FBQ0wsZ0JBQU07QUFERDtBQUZOLE9BeERlLEVBNkRmO0FBQ0QsZUFBTyxnQkFBTSxHQUFOLENBQVUsVUFBVixDQUROO0FBRUQsZUFBTztBQUNMLGdCQUFNO0FBREQ7QUFGTixPQTdEZSxDQUFwQjs7QUFxRUEsV0FBSyxNQUFMLEdBQWMsT0FBTyxNQUFQLENBQWMsYUFBZCxDQUFkO0FBQ0EscUJBQU8sSUFBUCxHQUFjLHNCQUFjLEVBQWQsRUFBa0IsRUFBQyw0QkFBRCxFQUFnQixvQkFBaEIsRUFBMkIsY0FBM0IsRUFBbEIsRUFBc0QsSUFBdEQsQ0FBZDtBQUNBLFVBQUksZ0JBQWdCLG9CQUFZLGVBQU8sSUFBUCxDQUFZLFNBQXhCLEVBQW1DLEdBQW5DLENBQXVDLGVBQU87QUFDaEUsZUFBTyxDQUFDLEdBQUQsRUFBTSxlQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLEdBQXRCLENBQU4sQ0FBUDtBQUNELE9BRm1CLENBQXBCO0FBR0Esc0JBQU0sU0FBTixHQUFrQixnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLGFBQXZCLENBQWxCOztBQUVBLGFBQU8sZUFBTyxJQUFkO0FBQ0Q7O0FBR0Q7Ozs7OztBQUdGOzs7a0JBcGlDcUIsTzs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCOzs7O0FBSUEsU0FBUyxTQUFULEdBQXFCO0FBQ25CO0FBQ0EsTUFBSSxFQUFFLFlBQVksUUFBUSxTQUF0QixDQUFKLEVBQXNDO0FBQ3BDLFlBQVEsU0FBUixDQUFrQixNQUFsQixHQUEyQixZQUFXO0FBQ3BDLFVBQUksS0FBSyxVQUFULEVBQXFCO0FBQ25CLGFBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixJQUE1QjtBQUNEO0FBQ0YsS0FKRDtBQUtEOztBQUVEO0FBQ0EsTUFBSSxPQUFPLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDL0IsS0FBQyxZQUFXO0FBQ1YsYUFBTyxLQUFQLEdBQWUsVUFBUyxHQUFULEVBQWM7QUFDM0IsWUFBSSxRQUFRLFNBQVMsV0FBVCxDQUFxQixPQUFyQixDQUFaO0FBQ0EsY0FBTSxTQUFOLENBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0FKRDtBQUtELEtBTkQ7QUFPRDs7QUFFRDtBQUNBLE1BQUksMkJBQXdCLFVBQTVCLEVBQXdDO0FBQ3RDLFdBQU8sTUFBUCxHQUFnQixVQUFTLE1BQVQsRUFBaUI7QUFDL0I7O0FBQ0EsVUFBSSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsY0FBTSxJQUFJLFNBQUosQ0FBYyw0Q0FBZCxDQUFOO0FBQ0Q7O0FBRUQsZUFBUyxPQUFPLE1BQVAsQ0FBVDtBQUNBLFdBQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsVUFBVSxNQUF0QyxFQUE4QyxPQUE5QyxFQUF1RDtBQUNyRCxZQUFJLFNBQVMsVUFBVSxLQUFWLENBQWI7QUFDQSxZQUFJLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixlQUFLLElBQUksR0FBVCxJQUFnQixNQUFoQixFQUF3QjtBQUN0QixnQkFBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsTUFBckMsRUFBNkMsR0FBN0MsQ0FBSixFQUF1RDtBQUNyRCxxQkFBTyxHQUFQLElBQWMsT0FBTyxHQUFQLENBQWQ7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNELGFBQU8sTUFBUDtBQUNELEtBbEJEO0FBbUJEOztBQUdEO0FBQ0EsTUFBSSxDQUFDLE1BQU0sU0FBTixDQUFnQixPQUFyQixFQUE4QjtBQUM1QixVQUFNLFNBQU4sQ0FBZ0IsT0FBaEIsR0FBMEIsVUFBUyxRQUFULEVBQW1CO0FBQzNDLFVBQUksVUFBSjtBQUFBLFVBQU8sVUFBUDtBQUNBLFVBQUksUUFBUSxJQUFaLEVBQWtCO0FBQ2hCLGNBQU0sSUFBSSxTQUFKLENBQWMsNkJBQWQsQ0FBTjtBQUNEO0FBQ0QsVUFBSSxJQUFJLE9BQU8sSUFBUCxDQUFSO0FBQ0EsVUFBSSxNQUFNLEVBQUUsTUFBRixLQUFhLENBQXZCO0FBQ0EsVUFBSSxPQUFPLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDbEMsY0FBTSxJQUFJLFNBQUosQ0FBYyxXQUFXLG9CQUF6QixDQUFOO0FBQ0Q7QUFDRCxVQUFJLFVBQVUsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN4QixZQUFJLFVBQVUsQ0FBVixDQUFKO0FBQ0Q7QUFDRCxVQUFJLENBQUo7QUFDQSxhQUFPLElBQUksR0FBWCxFQUFnQjtBQUNkLFlBQUksZUFBSjtBQUNBLFlBQUksS0FBSyxDQUFULEVBQVk7QUFDVixtQkFBUyxFQUFFLENBQUYsQ0FBVDtBQUNBLG1CQUFTLElBQVQsQ0FBYyxDQUFkLEVBQWlCLE1BQWpCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCO0FBQ0Q7QUFDRDtBQUNEO0FBQ0YsS0F0QkQ7QUF1QkQ7QUFDRjs7a0JBRWMsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFZjs7OztBQUVBOzs7OztBQUtFLElBQU0sUUFBUSxFQUFkO0FBQ0EsT0FBTyxRQUFQLEdBQWtCO0FBQ2hCLE1BQUksRUFEWTtBQUVoQixPQUFLO0FBRlcsQ0FBbEI7QUFJQSxPQUFPLFNBQVAsR0FBbUI7QUFDakIsU0FBTyxFQURVO0FBRWpCLFdBQVM7QUFGUSxDQUFuQjs7QUFLQTtBQUNBLE1BQU0sT0FBTixHQUFnQixVQUFTLE1BQVQsRUFBaUIsUUFBakIsRUFBMkI7QUFDekMsU0FBTyxTQUFTLE9BQVQsQ0FBaUIsTUFBakIsTUFBNkIsQ0FBQyxDQUFyQztBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0EsTUFBTSxPQUFOLEdBQWdCLFVBQVMsS0FBVCxFQUFnQjtBQUM5QixNQUFJLFlBQVksQ0FDZCxJQURjLEVBRWQsU0FGYyxFQUdkLEVBSGMsRUFJZCxLQUpjLEVBS2QsT0FMYyxDQUFoQjtBQU9BLE9BQUssSUFBSSxJQUFULElBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLFFBQUksTUFBTSxPQUFOLENBQWMsTUFBTSxJQUFOLENBQWQsRUFBMkIsU0FBM0IsQ0FBSixFQUEyQztBQUN6QyxhQUFPLE1BQU0sSUFBTixDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUksTUFBTSxPQUFOLENBQWMsTUFBTSxJQUFOLENBQWQsQ0FBSixFQUFnQztBQUNyQyxVQUFJLENBQUMsTUFBTSxJQUFOLEVBQVksTUFBakIsRUFBeUI7QUFDdkIsZUFBTyxNQUFNLElBQU4sQ0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDQW5CRDs7QUFxQkE7Ozs7O0FBS0EsTUFBTSxTQUFOLEdBQWtCLFVBQVMsSUFBVCxFQUFlO0FBQy9CLE1BQUksVUFBVSxDQUNaLFFBRFksRUFFWixhQUZZLEVBR1osT0FIWSxFQUlaLE9BSlk7QUFLWjtBQUNBLFdBTlksQ0FBZDtBQVFBLFNBQU8sQ0FBQyxNQUFNLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLE9BQXBCLENBQVI7QUFDRCxDQVZEOztBQVlBOzs7Ozs7QUFNQSxNQUFNLFVBQU4sR0FBbUIsVUFBUyxLQUFULEVBQWdCO0FBQ2pDLE1BQUksYUFBYSxFQUFqQjs7QUFFQSxPQUFLLElBQUksSUFBVCxJQUFpQixLQUFqQixFQUF3QjtBQUN0QixRQUFJLE1BQU0sY0FBTixDQUFxQixJQUFyQixLQUE4QixNQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBbEMsRUFBeUQ7QUFDdkQsYUFBTyxNQUFNLFFBQU4sQ0FBZSxJQUFmLEVBQXFCLE1BQU0sSUFBTixDQUFyQixDQUFQO0FBQ0EsaUJBQVcsSUFBWCxDQUFnQixLQUFLLElBQUwsR0FBWSxLQUFLLEtBQWpDO0FBQ0Q7QUFDRjtBQUNELFNBQU8sV0FBVyxJQUFYLENBQWdCLEdBQWhCLENBQVA7QUFDRCxDQVZEOztBQVlBOzs7Ozs7QUFNQSxNQUFNLFFBQU4sR0FBaUIsVUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQjtBQUNyQyxTQUFPLE1BQU0sWUFBTixDQUFtQixJQUFuQixDQUFQO0FBQ0EsTUFBSSxrQkFBSjs7QUFFQSxNQUFJLEtBQUosRUFBVztBQUNULFFBQUksTUFBTSxPQUFOLENBQWMsS0FBZCxDQUFKLEVBQTBCO0FBQ3hCLGtCQUFZLE1BQU0sVUFBTixDQUFpQixNQUFNLElBQU4sQ0FBVyxHQUFYLENBQWpCLENBQVo7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLE9BQU8sS0FBUCxLQUFrQixTQUF0QixFQUFpQztBQUMvQixnQkFBUSxNQUFNLFFBQU4sRUFBUjtBQUNEO0FBQ0Qsa0JBQVksTUFBTSxVQUFOLENBQWlCLE1BQU0sT0FBTixDQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsSUFBeEIsRUFBakIsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsVUFBUSxlQUFhLFNBQWIsU0FBNEIsRUFBcEM7QUFDQSxTQUFPO0FBQ0wsY0FESztBQUVMO0FBRkssR0FBUDtBQUlELENBcEJEOztBQXNCQSxNQUFNLFlBQU4sR0FBcUIsVUFBUyxJQUFULEVBQWU7QUFDbEMsTUFBSSxXQUFXO0FBQ2IsZUFBVztBQURFLEdBQWY7O0FBSUEsU0FBTyxTQUFTLElBQVQsS0FBa0IsTUFBTSxVQUFOLENBQWlCLElBQWpCLENBQXpCO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7O0FBTUEsTUFBTSxVQUFOLEdBQW1CLFVBQUMsR0FBRCxFQUFTO0FBQzFCLFFBQU0sSUFBSSxPQUFKLENBQVksYUFBWixFQUEyQixFQUEzQixDQUFOO0FBQ0EsUUFBTSxJQUFJLE9BQUosQ0FBWSxVQUFaLEVBQXdCLFVBQVMsRUFBVCxFQUFhO0FBQ3pDLFdBQU8sTUFBTSxHQUFHLFdBQUgsRUFBYjtBQUNELEdBRkssQ0FBTjs7QUFJQSxTQUFPLElBQUksT0FBSixDQUFZLEtBQVosRUFBbUIsR0FBbkIsRUFBd0IsT0FBeEIsQ0FBZ0MsTUFBaEMsRUFBd0MsRUFBeEMsQ0FBUDtBQUNELENBUEQ7O0FBU0E7Ozs7O0FBS0EsTUFBTSxTQUFOLEdBQWtCO0FBQUEsU0FBTyxJQUFJLE9BQUosQ0FBWSxXQUFaLEVBQXlCLFVBQUMsQ0FBRCxFQUFJLENBQUo7QUFBQSxXQUNoRCxFQUFFLFdBQUYsRUFEZ0Q7QUFBQSxHQUF6QixDQUFQO0FBQUEsQ0FBbEI7O0FBR0E7Ozs7O0FBS0EsTUFBTSxXQUFOLEdBQW9CLG1CQUFXO0FBQzdCLE1BQUksY0FBYyxPQUFkLHVEQUFjLE9BQWQsQ0FBSjtBQUNBLE1BQUksbUJBQW1CLElBQW5CLElBQTJCLG1CQUFtQixXQUFsRCxFQUErRDtBQUM3RCxXQUFPLE1BQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxNQUFNLE9BQU4sQ0FBYyxPQUFkLENBQUosRUFBNEI7QUFDakMsV0FBTyxPQUFQO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FURDs7QUFXQTs7Ozs7O0FBTUEsTUFBTSxVQUFOLEdBQW1CLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsTUFBSSxNQUFKLEVBQVk7QUFBQSwrQkFDRCxLQURDO0FBRVIsVUFBSSxPQUFPLGNBQVAsQ0FBc0IsS0FBdEIsQ0FBSixFQUFrQztBQUNoQyxnQkFBUSxnQkFBUixDQUF5QixLQUF6QixFQUFnQztBQUFBLGlCQUFPLE9BQU8sS0FBUCxFQUFjLEdBQWQsQ0FBUDtBQUFBLFNBQWhDO0FBQ0Q7QUFKTzs7QUFDVixTQUFLLElBQUksS0FBVCxJQUFrQixNQUFsQixFQUEwQjtBQUFBLFlBQWpCLEtBQWlCO0FBSXpCO0FBQ0Y7QUFDRixDQVJEOztBQVVGOzs7OztBQUtFLE1BQU0sUUFBTixHQUFpQixVQUFTLEtBQVQsRUFBZ0I7QUFDL0IsTUFBSSxRQUFRLElBQUksSUFBSixHQUFXLE9BQVgsRUFBWjtBQUNBLE1BQUksU0FBUyxNQUFNLElBQU4sSUFBYyxNQUFNLFVBQU4sQ0FBaUIsTUFBTSxLQUF2QixDQUEzQjtBQUNBLFNBQU8sU0FBUyxHQUFULEdBQWUsS0FBdEI7QUFDRCxDQUpEOztBQU1BOzs7Ozs7OztBQVFBLE1BQU0sTUFBTixHQUFlLFVBQVMsR0FBVCxFQUE2QztBQUFBLE1BQS9CLE9BQStCLHVFQUFyQixFQUFxQjtBQUFBLE1BQWpCLFVBQWlCLHVFQUFKLEVBQUk7O0FBQzFELE1BQUksY0FBYyxNQUFNLFdBQU4sQ0FBa0IsT0FBbEIsQ0FBbEI7QUFEMEQsTUFFckQsTUFGcUQsR0FFakMsVUFGaUMsQ0FFckQsTUFGcUQ7QUFBQSxNQUUxQyxLQUYwQywwQ0FFakMsVUFGaUM7O0FBRzFELE1BQU0sUUFBUSxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDs7QUFFQSxNQUFNLGdCQUFnQjtBQUNwQixZQUFRLHlCQUFXO0FBQ2pCLFlBQU0sU0FBTixJQUFtQixPQUFuQjtBQUNELEtBSG1CO0FBSXBCLFlBQVEsd0JBQVU7QUFBQSxVQUNYLEdBRFcsR0FDYyxNQURkLENBQ1gsR0FEVztBQUFBLFVBQ04sT0FETSxHQUNjLE1BRGQsQ0FDTixPQURNO0FBQUEsVUFDTSxJQUROLDBDQUNjLE1BRGQ7O0FBRWhCLGFBQU8sTUFBTSxXQUFOLENBQWtCLE1BQU0sTUFBTixDQUFhLEdBQWIsRUFBa0IsT0FBbEIsRUFBMkIsSUFBM0IsQ0FBbEIsQ0FBUDtBQUNELEtBUG1CO0FBUXBCLFVBQU0sdUJBQVc7QUFDZixhQUFPLE1BQU0sV0FBTixDQUFrQixPQUFsQixDQUFQO0FBQ0QsS0FWbUI7QUFXcEIsV0FBTyx3QkFBVztBQUNoQixXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksUUFBUSxNQUE1QixFQUFvQyxHQUFwQyxFQUF5QztBQUN2QyxzQkFBYyxNQUFNLFdBQU4sQ0FBa0IsUUFBUSxDQUFSLENBQWxCLENBQWQ7QUFDQSxzQkFBYyxXQUFkLEVBQTJCLFFBQVEsQ0FBUixDQUEzQjtBQUNEO0FBQ0YsS0FoQm1CO0FBaUJwQixjQUFVLDRCQUFXO0FBQ25CLGdCQUFVLFNBQVY7QUFDQSxvQkFBYyxNQUFNLFdBQU4sQ0FBa0IsT0FBbEIsQ0FBZDtBQUNBLG9CQUFjLFdBQWQsRUFBMkIsT0FBM0I7QUFDRCxLQXJCbUI7QUFzQnBCLGVBQVcscUJBQU07QUFDZjtBQUNEO0FBeEJtQixHQUF0Qjs7QUEyQkEsT0FBSyxJQUFJLElBQVQsSUFBaUIsS0FBakIsRUFBd0I7QUFDdEIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsSUFBckIsQ0FBSixFQUFnQztBQUM5QixVQUFJLE9BQU8sTUFBTSxZQUFOLENBQW1CLElBQW5CLENBQVg7QUFDQSxZQUFNLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUIsTUFBTSxJQUFOLENBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLE9BQUosRUFBYTtBQUNYLGtCQUFjLFdBQWQsRUFBMkIsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0MsT0FBdEM7QUFDRDs7QUFFRCxRQUFNLFVBQU4sQ0FBaUIsS0FBakIsRUFBd0IsTUFBeEI7O0FBRUEsU0FBTyxLQUFQO0FBQ0QsQ0E5Q0Q7QUErQ0EsSUFBTSxJQUFJLE1BQU0sTUFBaEI7O0FBRUE7Ozs7O0FBS0EsTUFBTSxVQUFOLEdBQW1CLGdCQUFRO0FBQ3pCLE1BQUksUUFBUSxLQUFLLFVBQWpCO0FBQ0EsTUFBSSxPQUFPLEVBQVg7QUFDQSxRQUFNLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLGdCQUFRO0FBQzNCLFFBQUksVUFBVSxNQUFNLElBQU4sRUFBWSxLQUExQjtBQUNBLFFBQUksUUFBUSxLQUFSLENBQWMsYUFBZCxDQUFKLEVBQWtDO0FBQ2hDLGdCQUFXLFlBQVksTUFBdkI7QUFDRCxLQUZELE1BRU8sSUFBSSxRQUFRLEtBQVIsQ0FBYyxZQUFkLENBQUosRUFBaUM7QUFDdEMsZ0JBQVUsU0FBVjtBQUNEOztBQUVELFFBQUksT0FBSixFQUFhO0FBQ1gsV0FBSyxNQUFNLElBQU4sRUFBWSxJQUFqQixJQUF5QixPQUF6QjtBQUNEO0FBQ0YsR0FYRDs7QUFhQSxTQUFPLElBQVA7QUFDRCxDQWpCRDs7QUFtQkE7Ozs7O0FBS0EsTUFBTSxZQUFOLEdBQXFCLG1CQUFXO0FBQzlCLE1BQUksYUFBYSxFQUFqQjtBQUNBLE1BQUksT0FBTyxFQUFYOztBQUVBLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxRQUFRLE1BQTVCLEVBQW9DLEdBQXBDLEVBQXlDO0FBQ3ZDLGlCQUFhLE1BQU0sVUFBTixDQUFpQixRQUFRLENBQVIsQ0FBakIsQ0FBYjtBQUNBLGVBQVcsS0FBWCxHQUFtQixRQUFRLENBQVIsRUFBVyxXQUE5QjtBQUNBLFNBQUssSUFBTCxDQUFVLFVBQVY7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQVhEOztBQWFBOzs7OztBQUtBLE1BQU0sUUFBTixHQUFpQixxQkFBYTtBQUM1QixNQUFNLFNBQVMsSUFBSSxPQUFPLFNBQVgsRUFBZjtBQUNBLE1BQUksTUFBTSxPQUFPLGVBQVAsQ0FBdUIsU0FBdkIsRUFBa0MsVUFBbEMsQ0FBVjtBQUNBLE1BQUksV0FBVyxFQUFmOztBQUVBLE1BQUksR0FBSixFQUFTO0FBQ1AsUUFBSSxTQUFTLElBQUksb0JBQUosQ0FBeUIsT0FBekIsQ0FBYjtBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXdDO0FBQ3RDLFVBQUksWUFBWSxNQUFNLFVBQU4sQ0FBaUIsT0FBTyxDQUFQLENBQWpCLENBQWhCO0FBQ0EsVUFBTSxVQUFVLE9BQU8sQ0FBUCxFQUFVLG9CQUFWLENBQStCLFFBQS9CLENBQWhCOztBQUVBLFVBQUksV0FBVyxRQUFRLE1BQXZCLEVBQStCO0FBQzdCLGtCQUFVLE1BQVYsR0FBbUIsTUFBTSxZQUFOLENBQW1CLE9BQW5CLENBQW5CO0FBQ0Q7O0FBRUQsZUFBUyxJQUFULENBQWMsU0FBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxRQUFQO0FBQ0QsQ0FwQkQ7O0FBc0JBOzs7OztBQUtBLE1BQU0sVUFBTixHQUFtQixnQkFBUTtBQUN6QixNQUFJLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBcEI7QUFDQSxnQkFBYyxTQUFkLEdBQTBCLElBQTFCO0FBQ0EsU0FBTyxjQUFjLFdBQXJCO0FBQ0QsQ0FKRDs7QUFNQTs7Ozs7QUFLQSxNQUFNLFVBQU4sR0FBbUIsZ0JBQVE7QUFDekIsTUFBSSxnQkFBZ0IsU0FBUyxhQUFULENBQXVCLFVBQXZCLENBQXBCO0FBQ0EsZ0JBQWMsV0FBZCxHQUE0QixJQUE1QjtBQUNBLFNBQU8sY0FBYyxTQUFyQjtBQUNELENBSkQ7O0FBTUE7QUFDQSxNQUFNLFVBQU4sR0FBbUIsZUFBTztBQUN4QixNQUFJLFFBQVE7QUFDVixTQUFLLFFBREs7QUFFVixTQUFLLE9BRks7QUFHVixTQUFLLE1BSEs7QUFJVixTQUFLO0FBSkssR0FBWjs7QUFPQSxNQUFNLGFBQWEsU0FBYixVQUFhO0FBQUEsV0FBTyxNQUFNLEdBQU4sS0FBYyxHQUFyQjtBQUFBLEdBQW5COztBQUVBLFNBQVEsT0FBTyxHQUFQLEtBQWUsUUFBaEIsR0FBNEIsSUFBSSxPQUFKLENBQVksU0FBWixFQUF1QixVQUF2QixDQUE1QixHQUFpRSxHQUF4RTtBQUNELENBWEQ7O0FBYUE7QUFDQSxNQUFNLFdBQU4sR0FBb0IsaUJBQVM7QUFDM0IsT0FBSyxJQUFJLElBQVQsSUFBaUIsS0FBakIsRUFBd0I7QUFDdEIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsSUFBckIsQ0FBSixFQUFnQztBQUM5QixZQUFNLElBQU4sSUFBYyxNQUFNLFVBQU4sQ0FBaUIsTUFBTSxJQUFOLENBQWpCLENBQWQ7QUFDRDtBQUNGOztBQUVELFNBQU8sS0FBUDtBQUNELENBUkQ7O0FBVUE7QUFDQSxNQUFNLE9BQU4sR0FBZ0IsVUFBUyxLQUFULEVBQWdCLFFBQWhCLEVBQTBCLEtBQTFCLEVBQWlDO0FBQy9DLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ3JDLGFBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0IsTUFBTSxDQUFOLENBQXhCLEVBRHFDLENBQ0Y7QUFDcEM7QUFDRixDQUpEOztBQU1BOzs7OztBQUtBLE1BQU0sTUFBTixHQUFlLGlCQUFTO0FBQ3RCLFNBQU8sTUFBTSxNQUFOLENBQWEsVUFBQyxJQUFELEVBQU8sR0FBUCxFQUFZLEdBQVo7QUFBQSxXQUNqQixJQUFJLE9BQUosQ0FBWSxJQUFaLE1BQXNCLEdBREw7QUFBQSxHQUFiLENBQVA7QUFHRCxDQUpEOztBQU1BOzs7OztBQUtBLE1BQU0sTUFBTixHQUFlLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUMzQixNQUFJLFFBQVEsSUFBSSxPQUFKLENBQVksR0FBWixDQUFaOztBQUVBLE1BQUksUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDYixRQUFJLE1BQUosQ0FBVyxLQUFYLEVBQWtCLENBQWxCO0FBQ0Y7QUFDRixDQU5EOztBQVNBLE1BQU0sU0FBTixHQUFrQixxQkFBYTtBQUFBLHlCQUNrQixTQURsQixDQUN4QixLQUR3QjtBQUFBLE1BQ3hCLEtBRHdCLG9DQUNoQixFQURnQjtBQUFBLDhCQUNrQixTQURsQixDQUNaLFdBRFk7QUFBQSxNQUNaLFdBRFkseUNBQ0UsRUFERjtBQUFBLE1BQ1MsS0FEVCwwQ0FDa0IsU0FEbEI7O0FBRTdCLE1BQUksWUFBWSxNQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBaEI7QUFDQSxNQUFJLGdCQUFnQixDQUFDLFNBQUQsQ0FBcEI7O0FBRUEsTUFBSSxNQUFNLFFBQVYsRUFBb0I7QUFDbEIsa0JBQWMsSUFBZCxDQUFtQixFQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWdCLEVBQUMsV0FBVyxhQUFaLEVBQWhCLENBQW5CO0FBQ0Q7O0FBRUQsTUFBSSxNQUFNLElBQU4sS0FBZSxRQUFuQixFQUE2QjtBQUMzQixRQUFJLFdBQUosRUFBaUI7QUFDZixvQkFBYyxJQUFkLENBQW1CLEVBQUUsTUFBRixFQUFVLEdBQVYsRUFBZTtBQUNoQyxtQkFBVyxpQkFEcUI7QUFFaEMsaUJBQVM7QUFGdUIsT0FBZixDQUFuQjtBQUlEO0FBQ0Y7O0FBRUQsTUFBSSxhQUFhO0FBQ2YsdUJBQWlCLE1BQU0sSUFBdkI7QUFEZSxHQUFqQjs7QUFJQSxNQUFJLE1BQU0sRUFBVixFQUFjO0FBQ1osZUFBVyxHQUFYLEdBQWlCLE1BQU0sRUFBdkI7QUFDRDs7QUFFRCxTQUFPLEVBQUUsT0FBRixFQUFXLGFBQVgsRUFBMEIsVUFBMUIsQ0FBUDtBQUNELENBM0JEOztBQTZCQSxNQUFNLFdBQU4sR0FBb0IsZ0JBQVE7QUFDMUIsTUFBSSxpQkFBSjtBQUNBLE1BQUksWUFBWSxNQUFNLFNBQXRCO0FBRjBCO0FBQUE7QUFBQTs7QUFBQTtBQUcxQixvREFBeUIsU0FBekIsNEdBQW9DO0FBQUE7O0FBQUE7O0FBQUEsVUFBMUIsR0FBMEI7QUFBQSxVQUFyQixLQUFxQjs7QUFDbEMsVUFBSSxNQUFNLE9BQU4sQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDdEIsWUFBRyxNQUFNLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEdBQXBCLENBQUgsRUFBNkI7QUFDM0IscUJBQVcsS0FBWDtBQUNBO0FBQ0Q7QUFDRixPQUxELE1BS08sSUFBSSxTQUFTLEdBQWIsRUFBa0I7QUFDdkIsbUJBQVcsS0FBWDtBQUNBO0FBQ0Q7QUFDRjtBQWJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWUxQixTQUFPLFFBQVA7QUFDRCxDQWhCRDs7QUFrQkEsTUFBTSxvQkFBTixHQUE2QixxQkFBYTtBQUFBLE1BQ25DLE1BRG1DLEdBQ1YsU0FEVSxDQUNuQyxNQURtQztBQUFBLE1BQzNCLElBRDJCLEdBQ1YsU0FEVSxDQUMzQixJQUQyQjtBQUFBLE1BQ2xCLElBRGtCLDBDQUNWLFNBRFU7O0FBRXhDLE1BQU0sY0FBYyxTQUFkLFdBQWMsQ0FBQyxDQUFELEVBQU87QUFDekIsUUFBTSxPQUFPLEVBQUUsTUFBRixDQUFTLFdBQVQsQ0FBcUIsV0FBbEM7QUFDQSxRQUFJLGVBQWUsS0FBSyxzQkFBTCxDQUE0QixlQUE1QixFQUE2QyxDQUE3QyxDQUFuQjtBQUNBLFFBQU0saUJBQWlCO0FBQ3JCO0FBQ0EsS0FBQyxFQUFELEVBQUssWUFBTTtBQUNULFVBQUksWUFBSixFQUFrQjtBQUNoQixZQUFJLGFBQWEsZUFBakIsRUFBa0M7QUFDaEMsdUJBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixlQUE5QjtBQUNBLHlCQUFlLGFBQWEsZUFBNUI7QUFDQSx1QkFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLGVBQTNCO0FBQ0Q7QUFDRjtBQUNGLEtBUkQsQ0FGcUI7QUFXckI7QUFDQSxLQUFDLEVBQUQsRUFBSyxZQUFNO0FBQ1QsVUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFlBQUksYUFBYSxXQUFqQixFQUE4QjtBQUM1Qix1QkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLGVBQTlCO0FBQ0EseUJBQWUsYUFBYSxXQUE1QjtBQUNBLHVCQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsZUFBM0I7QUFDRDtBQUNGLE9BTkQsTUFNTztBQUNMLHVCQUFlLEtBQUssVUFBcEI7QUFDQSxxQkFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLGVBQTNCO0FBQ0Q7QUFDRixLQVhELENBWnFCLEVBd0JyQixDQUFDLEVBQUQsRUFBSyxZQUFNO0FBQ1QsVUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFVBQUUsTUFBRixDQUFTLEtBQVQsR0FBaUIsYUFBYSxTQUE5QjtBQUNBLFlBQUksS0FBSyxLQUFMLENBQVcsT0FBWCxLQUF1QixNQUEzQixFQUFtQztBQUNqQyxlQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBSyxLQUFMLENBQVcsT0FBWCxHQUFxQixNQUFyQjtBQUNEO0FBQ0Y7QUFDRixLQVRELENBeEJxQixDQUF2QjtBQW1DQSxRQUFJLGFBQWEsa0JBQVEsY0FBUixDQUFqQjs7QUFFQSxRQUFJLFlBQVksV0FBVyxHQUFYLENBQWUsRUFBRSxPQUFqQixDQUFoQjtBQUNBLFFBQUcsQ0FBQyxTQUFKLEVBQWU7QUFDYixrQkFBWTtBQUFBLGVBQU0sS0FBTjtBQUFBLE9BQVo7QUFDRDs7QUFFRCxXQUFPLFdBQVA7QUFDRCxHQTlDRDtBQStDQSxNQUFNLGFBQWE7QUFDakIsV0FBTyxvQkFBTztBQUNaLFVBQUksT0FBTyxJQUFJLE1BQUosQ0FBVyxXQUFYLENBQXVCLFdBQWxDO0FBQ0EsVUFBSSxNQUFKLENBQVcsZ0JBQVgsQ0FBNEIsU0FBNUIsRUFBdUMsV0FBdkM7QUFDQSxXQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0EsV0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixLQUFLLGFBQUwsQ0FBbUIsV0FBbkIsR0FBaUMsSUFBcEQ7QUFDRCxLQU5nQjtBQU9qQixVQUFNLG1CQUFPO0FBQ1gsVUFBSSxNQUFKLENBQVcsbUJBQVgsQ0FBK0IsU0FBL0IsRUFBMEMsV0FBMUM7QUFDQSxpQkFBVyxZQUFNO0FBQ2YsWUFBSSxNQUFKLENBQVcsV0FBWCxDQUF1QixXQUF2QixDQUFtQyxLQUFuQyxDQUF5QyxPQUF6QyxHQUFtRCxNQUFuRDtBQUNELE9BRkQsRUFFRyxHQUZIO0FBR0QsS0FaZ0I7QUFhakIsV0FBTyxlQUFDLEdBQUQsRUFBUztBQUNkLFVBQU0sT0FBTyxJQUFJLE1BQUosQ0FBVyxXQUFYLENBQXVCLFdBQXBDO0FBQ0EsdUJBQU8sS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUFQLEVBQW9DLElBQUksTUFBSixDQUFXLEtBQS9DO0FBQ0EsVUFBSSxDQUFDLElBQUksTUFBSixDQUFXLEtBQWhCLEVBQXVCO0FBQ3JCLGFBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsTUFBckI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0Q7QUFDRjtBQXJCZ0IsR0FBbkI7QUF1QkEsTUFBSSxZQUFZLHNCQUFjLEVBQWQsRUFBa0IsSUFBbEIsRUFDZDtBQUNFLFFBQU8sS0FBSyxFQUFaLFdBREY7QUFFRSxZQUFRO0FBRlYsR0FEYyxDQUFoQjtBQUtBLE1BQUksY0FBYyxzQkFBYyxFQUFkLEVBQWtCLElBQWxCLEVBQXdCLEVBQUMsTUFBTSxRQUFQLEVBQXhCLENBQWxCO0FBQ0EsU0FBTyxVQUFVLElBQWpCO0FBQ0EsTUFBTSxRQUFRLENBQ1osRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixTQUFqQixDQURZLEVBRVosRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixXQUFqQixDQUZZLENBQWQ7O0FBS0EsTUFBTSxVQUFVLE9BQU8sR0FBUCxDQUFXLHNCQUFjO0FBQ3ZDLFFBQUksUUFBUSxXQUFXLEtBQXZCO0FBQ0EsUUFBSSxTQUFTO0FBQ1gsY0FBUTtBQUNOLGVBQU8sb0JBQU87QUFDWixjQUFNLE9BQU8sSUFBSSxNQUFKLENBQVcsYUFBeEI7QUFDQSxjQUFNLFFBQVEsS0FBSyxlQUFMLENBQXFCLGVBQW5DO0FBQ0EsZ0JBQU0sS0FBTixHQUFjLFdBQVcsS0FBekI7QUFDQSxnQkFBTSxlQUFOLENBQXNCLEtBQXRCLEdBQThCLFdBQVcsS0FBekM7QUFDQSxlQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE1BQXJCO0FBQ0Q7QUFQSyxPQURHO0FBVVgsYUFBTyxXQUFXO0FBVlAsS0FBYjtBQVlBLFdBQU8sRUFBRSxJQUFGLEVBQVEsS0FBUixFQUFlLE1BQWYsQ0FBUDtBQUNELEdBZmUsQ0FBaEI7O0FBaUJBLFFBQU0sSUFBTixDQUFXLEVBQUUsSUFBRixFQUFRLE9BQVIsRUFDVCxFQUFDLElBQU8sS0FBSyxFQUFaLFVBQUQsRUFBd0IsbUJBQWlCLElBQWpCLFVBQXhCLEVBRFMsQ0FBWDs7QUFHQSxNQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsR0FBRCxFQUFTLENBRXpCLENBRkQ7O0FBSUEsU0FBTyxFQUFDLFlBQUQsRUFBUSxrQkFBUixFQUFQO0FBQ0QsQ0E3R0Q7O0FBK0dBOzs7Ozs7QUFNQSxNQUFNLGNBQU4sR0FBdUIsVUFBQyxTQUFELEVBQVksU0FBWixFQUEwQjtBQUMvQyxNQUFJLFVBQVUsRUFBZDtBQUQrQyxNQUUxQyxNQUYwQyxHQUVNLFNBRk4sQ0FFMUMsTUFGMEM7QUFBQSxNQUVsQyxJQUZrQyxHQUVNLFNBRk4sQ0FFbEMsSUFGa0M7QUFBQSxNQUU1QixNQUY0QixHQUVNLFNBRk4sQ0FFNUIsTUFGNEI7QUFBQSxNQUVwQixLQUZvQixHQUVNLFNBRk4sQ0FFcEIsS0FGb0I7QUFBQSxNQUViLE1BRmEsR0FFTSxTQUZOLENBRWIsTUFGYTtBQUFBLE1BRUYsSUFGRSwwQ0FFTSxTQUZOOztBQUcvQyxNQUFJLFFBQVEsTUFBTSxxQkFBTixDQUE0QixJQUE1QixFQUFrQyxTQUFsQyxDQUFaO0FBQ0EsTUFBSSxhQUFhLEtBQUssT0FBTCxDQUFhLFFBQWIsRUFBdUIsRUFBdkIsQ0FBakI7QUFDQSxNQUFJLFdBQVcsU0FBUyxRQUF4Qjs7QUFFQSxNQUFJLE1BQUosRUFBWTtBQUNWLFFBQUksTUFBTSxXQUFOLElBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLGNBQVEsSUFBUixDQUFhLEVBQUUsUUFBRixFQUFZLE1BQU0sV0FBbEIsRUFBK0I7QUFDMUMsa0JBQVUsSUFEZ0M7QUFFMUMsa0JBQVU7QUFGZ0MsT0FBL0IsQ0FBYjtBQUlEOztBQUVELFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXdDO0FBQUEsc0JBQ0gsT0FBTyxDQUFQLENBREc7QUFBQSxzQ0FDakMsS0FEaUM7QUFBQSxVQUNqQyxLQURpQyxtQ0FDekIsRUFEeUI7QUFBQSxVQUNsQixXQURrQjs7O0FBR3RDLGtCQUFZLEVBQVosR0FBb0IsTUFBTSxFQUExQixTQUFnQyxDQUFoQztBQUNBLFVBQUksQ0FBQyxZQUFZLFFBQWIsSUFBeUIsTUFBTSxXQUFuQyxFQUFnRDtBQUM5QyxlQUFPLFlBQVksUUFBbkI7QUFDRDs7QUFFRCxVQUFJLFFBQUosRUFBYztBQUNaLFlBQUksSUFBSSxFQUFFLFFBQUYsRUFBWSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWixFQUE0QyxXQUE1QyxDQUFSO0FBQ0EsZ0JBQVEsSUFBUixDQUFhLENBQWI7QUFDRCxPQUhELE1BR087QUFDTCxZQUFJLGVBQWUsVUFBbkI7QUFDQSxZQUFJLE1BQUosRUFBWTtBQUNWLGlDQUFxQixVQUFyQjtBQUNEO0FBQ0Qsb0JBQVksSUFBWixHQUFtQixVQUFuQjtBQUNBLFlBQUksWUFBWSxRQUFoQixFQUEwQjtBQUN4QixzQkFBWSxPQUFaLEdBQXNCLFNBQXRCO0FBQ0EsaUJBQU8sWUFBWSxRQUFuQjtBQUNEO0FBQ0QsWUFBSSxRQUFRLEVBQUUsT0FBRixFQUFXLElBQVgsRUFBaUIsc0JBQWMsRUFBZCxFQUFrQixLQUFsQixFQUF5QixXQUF6QixDQUFqQixDQUFaO0FBQ0EsWUFBSSxhQUFhLEVBQUMsS0FBSyxZQUFZLEVBQWxCLEVBQWpCO0FBQ0EsWUFBSSxlQUFlLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBbkI7QUFDQSxZQUFJLE1BQUosRUFBWTtBQUNWLGNBQUksV0FBVyxFQUFFLE1BQUYsQ0FBZjtBQUNBLHlCQUFlLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsS0FBbEIsQ0FBZjtBQUNBLHFCQUFXLFNBQVgsR0FBdUIsV0FBdkI7QUFDRDs7QUFFRCxZQUFJLGFBQWEsRUFBRSxPQUFGLEVBQVcsWUFBWCxFQUF5QixVQUF6QixDQUFqQjtBQUNBLFlBQUksVUFBVSxFQUFFLEtBQUYsRUFBUyxVQUFULEVBQXFCLEVBQUMsV0FBVyxZQUFaLEVBQXJCLENBQWQ7QUFDQSxnQkFBUSxJQUFSLENBQWEsT0FBYjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSSxDQUFDLFFBQUQsSUFBYSxLQUFqQixFQUF3QjtBQUN0QixVQUFJLG1CQUFtQjtBQUNyQixZQUFPLE1BQU0sRUFBYixXQURxQjtBQUVyQixtQkFBYyxNQUFNLFNBQXBCLGtCQUZxQjtBQUdyQixnQkFBUTtBQUNOLGlCQUFPO0FBQUEsbUJBQU0sTUFBTSxhQUFOLENBQW9CLGlCQUFpQixFQUFyQyxDQUFOO0FBQUE7QUFERDtBQUhhLE9BQXZCO0FBT0E7QUFDQSxVQUFJLGdCQUFlLFVBQW5CO0FBQ0EsVUFBSSxNQUFKLEVBQVk7QUFDVix5QkFBZ0IsU0FBaEI7QUFDRDs7QUFFRCxVQUFJLGNBQWMsc0JBQWMsRUFBZCxFQUFrQixJQUFsQixFQUF3QixnQkFBeEIsQ0FBbEI7QUFDQSxrQkFBWSxJQUFaLEdBQW1CLFVBQW5COztBQUVBLFVBQUksZ0JBQWdCO0FBQ2xCLGNBQU0sTUFEWTtBQUVsQixjQUFNLEtBQUssSUFGTztBQUdsQixZQUFPLGlCQUFpQixFQUF4QixXQUhrQjtBQUlsQixtQkFBVztBQUpPLE9BQXBCO0FBTUEsVUFBSSxjQUFjLENBQ2hCLEVBQUUsT0FBRixFQUFXLElBQVgsRUFBaUIsV0FBakIsQ0FEZ0IsRUFFaEIsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBRmdCLEVBR2hCLEVBQUUsT0FBRixFQUFXLElBQVgsRUFBaUIsYUFBakIsQ0FIZ0IsQ0FBbEI7QUFLQSxVQUFJLGNBQWEsRUFBRSxPQUFGLEVBQVcsV0FBWCxFQUF3QixFQUFDLEtBQUssWUFBWSxFQUFsQixFQUF4QixDQUFqQjtBQUNBLFVBQUksV0FBVSxFQUFFLEtBQUYsRUFBUyxXQUFULEVBQXFCLEVBQUMsV0FBVyxhQUFaLEVBQXJCLENBQWQ7QUFDQSxjQUFRLElBQVIsQ0FBYSxRQUFiO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLGlCQUFKOztBQUVBLE1BQUksU0FBUyxRQUFiLEVBQXVCO0FBQ3JCLGVBQVcsRUFBRSxVQUFGLEVBQWMsT0FBZCxFQUF1QixJQUF2QixDQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsZUFBVyxFQUFFLEtBQUYsRUFBUyxPQUFULEVBQWtCLEVBQUMsV0FBVyxJQUFaLEVBQWxCLENBQVg7QUFDRDs7QUFFRCxTQUFPLFFBQVA7QUFDRCxDQTlGRDs7QUFnR0EsTUFBTSxZQUFOLEdBQXFCLHFCQUFhO0FBQUEsTUFDM0IsS0FEMkIsR0FDa0MsU0FEbEMsQ0FDM0IsS0FEMkI7QUFBQSxNQUNwQixXQURvQixHQUNrQyxTQURsQyxDQUNwQixXQURvQjtBQUFBLE1BQ1AsT0FETyxHQUNrQyxTQURsQyxDQUNQLE9BRE87QUFBQSxNQUNFLElBREYsR0FDa0MsU0FEbEMsQ0FDRSxJQURGO0FBQUEsTUFDUSxFQURSLEdBQ2tDLFNBRGxDLENBQ1EsRUFEUjtBQUFBLE1BQ1ksU0FEWixHQUNrQyxTQURsQyxDQUNZLFNBRFo7QUFBQSxNQUMwQixJQUQxQiwwQ0FDa0MsU0FEbEM7O0FBRWhDLE1BQUksRUFBSixFQUFRO0FBQ04sUUFBSSxTQUFKLEVBQWU7QUFDYixVQUFJLEtBQUssSUFBVCxFQUFlO0FBQ2IsYUFBSyxJQUFMLEdBQVksS0FBSyxJQUFMLEdBQVksVUFBeEI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLElBQUwsR0FBWSxNQUFNLFFBQU4sQ0FBZSxTQUFmLElBQTRCLFVBQXhDO0FBQ0Q7QUFDRjtBQUNELFNBQUssRUFBTCxHQUFVLEtBQUssSUFBZjtBQUNEO0FBQ0QsTUFBSSxXQUFKLEVBQWlCO0FBQ2YsU0FBSyxLQUFMLEdBQWEsV0FBYjtBQUNEO0FBQ0QsTUFBSSxPQUFKLEVBQWE7QUFDWCxXQUFPLE9BQVA7QUFDRDs7QUFFRCxNQUFJLFFBQVE7QUFDVixXQUFPLEVBQUUsSUFBRixFQUFRLE1BQU0sVUFBTixDQUFpQixLQUFqQixDQUFSLEVBQWlDLElBQWpDLENBREc7QUFFVixjQUFVLE1BQU07QUFGTixHQUFaOztBQUtBLFNBQU87QUFBQSxXQUFNLEtBQU47QUFBQSxHQUFQO0FBQ0QsQ0F6QkQ7O0FBMkJBOzs7Ozs7QUFNQSxNQUFNLFVBQU4sR0FBbUIsVUFBQyxTQUFELEVBQVksSUFBWixFQUFxQjtBQUN0QyxNQUFNLElBQUksTUFBVjtBQUNBLE1BQUksT0FBTyxFQUFYOztBQUVBLE1BQUksQ0FBQyxNQUFNLE9BQU4sQ0FBYyxTQUFkLENBQUwsRUFBK0I7QUFDN0IsZ0JBQVksQ0FBQyxTQUFELENBQVo7QUFDRDs7QUFFRCxNQUFJLENBQUMsTUFBTSxRQUFOLENBQWUsU0FBZixDQUFMLEVBQWdDO0FBQzlCLFdBQU8sRUFBRSxHQUFGLENBQU0sU0FBTixFQUFpQixlQUFPO0FBQzdCLFVBQUksVUFBVTtBQUNaLGtCQUFVLFFBREU7QUFFWixlQUFPLElBRks7QUFHWixhQUFLLENBQUMsUUFBUSxFQUFULElBQWU7QUFIUixPQUFkO0FBS0EsYUFBTyxFQUFFLElBQUYsQ0FBTyxPQUFQLEVBQWdCLElBQWhCLENBQXFCO0FBQUEsZUFBTSxPQUFPLFFBQVAsQ0FBZ0IsRUFBaEIsQ0FBbUIsSUFBbkIsQ0FBd0IsR0FBeEIsQ0FBTjtBQUFBLE9BQXJCLENBQVA7QUFDRCxLQVBNLENBQVA7QUFRRDs7QUFFRCxPQUFLLElBQUwsQ0FBVSxFQUFFLFFBQUYsQ0FBWTtBQUFBLFdBQVksRUFBRyxTQUFTLE9BQVosQ0FBWjtBQUFBLEdBQVosQ0FBVjs7QUFFQSxTQUFPLEVBQUUsSUFBRiwyQ0FBVSxJQUFWLEVBQVA7QUFDRCxDQXRCRDs7QUF3QkE7Ozs7OztBQU1BLE1BQU0sUUFBTixHQUFpQixVQUFDLEdBQUQsRUFBc0I7QUFBQSxNQUFoQixJQUFnQix1RUFBVCxJQUFTOztBQUNyQyxNQUFJLFdBQVcsS0FBZjtBQUNBLE1BQU0sUUFBUSxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBZDtBQUNBLE1BQUksTUFBTSxPQUFOLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLGVBQVcsSUFBSSxLQUFKLENBQVU7QUFBQSxhQUFLLE1BQU0sT0FBTixDQUFjLENBQWQsRUFBaUIsS0FBakIsQ0FBTDtBQUFBLEtBQVYsQ0FBWDtBQUNELEdBRkQsTUFFTztBQUNMLGVBQVcsTUFBTSxPQUFOLENBQWMsR0FBZCxFQUFtQixLQUFuQixDQUFYO0FBQ0Q7QUFDRCxTQUFPLFFBQVA7QUFDRCxDQVREOztBQVdBOzs7Ozs7QUFNQSxNQUFNLFNBQU4sR0FBa0IsVUFBQyxTQUFELEVBQVksSUFBWixFQUFxQjtBQUNyQyxNQUFJLE1BQU0sUUFBTixDQUFlLFNBQWYsRUFBMEIsS0FBMUIsQ0FBSixFQUFzQztBQUNwQztBQUNEO0FBQ0QsTUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLElBQUQsRUFBVTtBQUM1QixRQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxTQUFLLElBQUwsR0FBWSxVQUFaO0FBQ0EsU0FBSyxHQUFMLEdBQVcsWUFBWDtBQUNBLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLElBQTFCO0FBQ0EsV0FBTyxRQUFQLENBQWdCLEdBQWhCLENBQW9CLElBQXBCLENBQXlCLElBQXpCO0FBQ0QsR0FQRDtBQVFBLFlBQVUsT0FBVixDQUFrQjtBQUFBLFdBQU8sWUFBWSxDQUFDLFFBQVEsRUFBVCxJQUFlLEdBQTNCLENBQVA7QUFBQSxHQUFsQjtBQUNELENBYkQ7O0FBZUEsTUFBTSxnQkFBTixHQUF5QixnQkFBUTtBQUFBLG9CQUNGLElBREUsQ0FDMUIsS0FEMEI7QUFBQSxNQUMxQixLQUQwQiwrQkFDbEIsRUFEa0I7QUFBQSxNQUNYLEtBRFcsMENBQ0YsSUFERTs7QUFFL0IsTUFBSSxXQUFXO0FBQ2IsV0FBTyxFQUFFLFVBQUYsRUFBYyxNQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBZCxFQUF1QyxLQUF2QztBQURNLEdBQWY7QUFHQSxNQUFJLFVBQVU7QUFDWixhQUFTO0FBQ1AsVUFBSSxDQUFDLG9DQUFELENBREc7QUFFUCxnQkFBVSx1QkFBTztBQUNmLFlBQUksT0FBTyxPQUFQLENBQWUsT0FBZixDQUF1QixLQUFLLEVBQTVCLENBQUosRUFBcUM7QUFDbkMsaUJBQU8sT0FBUCxDQUFlLE9BQWYsQ0FBdUIsS0FBSyxFQUE1QixFQUFnQyxNQUFoQztBQUNEO0FBQ0QsZUFBTyxPQUFQLENBQWUsSUFBZixDQUFvQjtBQUNsQixrQkFBUSxTQUFTLEtBREM7QUFFbEIsa0JBQVEsR0FGVTtBQUdsQixtQkFBUyxDQUNQLGdFQURPLEVBRVAsNENBRk8sRUFHUCxtREFITyxDQUhTO0FBUWxCLG1CQUFTO0FBUlMsU0FBcEI7QUFVRDtBQWhCTSxLQURHO0FBbUJaLFdBQU87QUFDTCxVQUFJLENBQUMsa0NBQUQsQ0FEQztBQUVMLFdBQUssQ0FBQyx3Q0FBRCxDQUZBO0FBR0wsZ0JBQVUsdUJBQU87QUFDZixZQUFNLFFBQVEsT0FBTyxLQUFQLENBQWEsTUFBYixDQUFvQixPQUFwQixDQUFkO0FBQ0EsZUFBTyxTQUFQLENBQWlCLEtBQWpCLENBQXVCLEtBQUssRUFBNUIsSUFBa0MsRUFBbEM7QUFDQSxZQUFJLFNBQVMsT0FBTyxTQUFQLENBQWlCLEtBQWpCLENBQXVCLEtBQUssRUFBNUIsQ0FBYjtBQUNBLGVBQU8sUUFBUCxHQUFrQixJQUFJLE9BQU8sS0FBWCxDQUFpQixTQUFTLEtBQTFCLEVBQWlDO0FBQ2pELG1CQUFTO0FBQ1AscUJBQVMsQ0FDUCxDQUFDLEVBQUMsVUFBVSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sS0FBUCxDQUFYLEVBQUQsQ0FETyxFQUVQLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsV0FBbkIsQ0FGTyxFQUdQLENBQUMsWUFBRCxDQUhPO0FBREYsV0FEd0M7QUFRakQsdUJBQWEsTUFBTSxXQUFOLElBQXFCLEVBUmU7QUFTakQsaUJBQU87QUFUMEMsU0FBakMsQ0FBbEI7QUFXQSxlQUFPLElBQVAsR0FBYyxJQUFJLEtBQUosRUFBZDtBQUNBLFlBQUksS0FBSixFQUFXO0FBQ1QsaUJBQU8sUUFBUCxDQUNDLFdBREQsQ0FDYSxPQUFPLElBQVAsQ0FBWSxLQUFaLENBQWtCLE1BQU0sVUFBTixDQUFpQixLQUFqQixDQUFsQixDQURiO0FBRUQ7QUFDRCxlQUFPLFFBQVAsQ0FBZ0IsRUFBaEIsQ0FBbUIsYUFBbkIsRUFBa0MsVUFBUyxLQUFULEVBQWdCO0FBQ2hELGlCQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsQ0FBWSxPQUFaLENBQW9CLEtBQXBCLENBQWQ7QUFDRCxTQUZEO0FBR0Q7QUExQkk7QUFuQkssR0FBZDs7QUFpREEsTUFBSSxLQUFLLElBQUwsS0FBYyxVQUFsQixFQUE4QjtBQUM1QixhQUFTLFFBQVQsR0FBb0IsUUFBUSxLQUFLLElBQWIsRUFBbUIsUUFBdkM7QUFDRDtBQUNELE1BQUksS0FBSyxJQUFMLEtBQWMsT0FBbEIsRUFBMkI7QUFDekIsYUFBUyxLQUFULEdBQWlCLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZSxLQUFmLENBQWpCO0FBQ0Q7O0FBRUQsTUFBTSxXQUFXLFNBQVgsUUFBVyxHQUFNO0FBQ3JCLFFBQUksUUFBUSxLQUFLLElBQWIsQ0FBSixFQUF3QjtBQUN0QixlQUFTLG1CQUFULENBQTZCLGVBQTdCLEVBQThDLFFBQTlDOztBQUVBLFVBQUksUUFBUSxLQUFLLElBQWIsRUFBbUIsR0FBdkIsRUFBNEI7QUFDMUIsY0FBTSxTQUFOLENBQWdCLFFBQVEsS0FBSyxJQUFiLEVBQW1CLEdBQW5DO0FBQ0Q7QUFDRCxVQUFJLFFBQVEsS0FBSyxJQUFiLEVBQW1CLEVBQW5CLElBQXlCLENBQUMsTUFBTSxRQUFOLENBQWUsUUFBUSxLQUFLLElBQWIsRUFBbUIsRUFBbEMsQ0FBOUIsRUFBcUU7QUFDbkUsY0FBTSxVQUFOLENBQWlCLFFBQVEsS0FBSyxJQUFiLEVBQW1CLEVBQXBDLEVBQXdDLElBQXhDLENBQTZDLFNBQVMsUUFBdEQ7QUFDRCxPQUZELE1BRU87QUFDTCxpQkFBUyxRQUFUO0FBQ0Q7QUFDRjtBQUNGLEdBYkQ7O0FBZUEsU0FBTyxFQUFDLE9BQU8sU0FBUyxLQUFqQixFQUF3QixrQkFBeEIsRUFBUDtBQUNELENBN0VEOztBQStFQSxNQUFNLFNBQU4sR0FBa0IsQ0FDaEIsQ0FBQyxjQUFELEVBQ0UscUJBQWE7QUFDYixNQUFJLFFBQVEsTUFBTSxxQkFBTixDQUE0QixTQUE1QixDQUFaO0FBQ0UsTUFBSSxhQUFhLE1BQU0sU0FBTixDQUFnQixTQUFoQixDQUFqQjtBQUNBLE1BQUksZUFBZSxNQUFNLG9CQUFOLENBQTJCLEtBQTNCLENBQW5CO0FBQ0EsTUFBSSxXQUFXO0FBQ2IsV0FBTyxDQUFDLFVBQUQsRUFBYSxhQUFhLEtBQTFCLENBRE07QUFFYixjQUFVLGFBQWE7QUFGVixHQUFmO0FBSUEsU0FBTyxRQUFQO0FBQ0QsQ0FWSCxDQURnQixFQVloQixDQUFDLHFCQUFnQixJQUFoQixDQUFxQixNQUFyQixDQUE0QixDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLE1BQW5CLENBQTVCLENBQUQsRUFDRSxxQkFBYTtBQUNYLE1BQUksUUFBUSxNQUFNLHFCQUFOLENBQTRCLFNBQTVCLENBQVo7QUFDQSxNQUFJLGFBQWEsTUFBTSxTQUFOLENBQWdCLFNBQWhCLENBQWpCO0FBQ0EsTUFBSSxXQUFXO0FBQ2IsV0FBTyxDQUFDLFVBQUQsRUFBYSxFQUFFLE9BQUYsRUFBVyxJQUFYLEVBQWlCLEtBQWpCLENBQWI7QUFETSxHQUFmO0FBR0EsU0FBTyxRQUFQO0FBQ0QsQ0FSSCxDQVpnQixFQXFCaEIsQ0FBQyxDQUFDLFdBQUQsRUFBYyxNQUFkLENBQXFCLHFCQUFnQixTQUFyQyxDQUFELEVBQ0UscUJBQWE7QUFDWCxNQUFJLFFBQVEsTUFBTSxxQkFBTixDQUE0QixTQUE1QixDQUFaO0FBQ0EsTUFBSSxXQUFXO0FBQ2IsV0FBTyxDQUFDLEVBQUUsVUFBVSxJQUFaLEVBQWtCLE1BQU0sVUFBTixDQUFpQixVQUFVLEtBQTNCLENBQWxCLEVBQXFELEtBQXJELENBQUQ7QUFETSxHQUFmO0FBR0EsU0FBTyxRQUFQO0FBQ0QsQ0FQSCxDQXJCZ0IsRUE2QmhCLENBQUMscUJBQWdCLE1BQWpCLEVBQ0UscUJBQWE7QUFDWCxNQUFJLFFBQVEsTUFBTSxxQkFBTixDQUE0QixTQUE1QixDQUFaO0FBQ0EsTUFBSSxXQUFXO0FBQ2IsV0FBTyxFQUFFLFFBQUYsRUFBWSxVQUFVLEtBQXRCLEVBQTZCLEtBQTdCO0FBRE0sR0FBZjtBQUdBLFNBQU8sUUFBUDtBQUNELENBUEgsQ0E3QmdCLEVBcUNoQixDQUFDLENBQUMsUUFBRCxFQUFXLGdCQUFYLEVBQTZCLGFBQTdCLEVBQTRDLFVBQTVDLENBQUQsRUFDRSxxQkFBYTtBQUNYLE1BQUksYUFBYSxNQUFNLFNBQU4sQ0FBZ0IsU0FBaEIsQ0FBakI7QUFDQSxNQUFJLFFBQVEsTUFBTSxjQUFOLENBQXFCLFNBQXJCLENBQVo7QUFDQSxNQUFJLFdBQVc7QUFDYixXQUFPLENBQUMsVUFBRCxFQUFhLEtBQWI7QUFETSxHQUFmO0FBR0EsU0FBTyxRQUFQO0FBQ0QsQ0FSSCxDQXJDZ0IsRUE4Q2hCLENBQUMsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixPQUF4QixDQUFELEVBQ0UscUJBQWE7QUFDWCxNQUFJLFFBQVEsTUFBTSxxQkFBTixDQUE0QixTQUE1QixDQUFaO0FBQ0EsTUFBSSxRQUFRLE1BQU0sZ0JBQU4sQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLE1BQUksYUFBYSxNQUFNLFNBQU4sQ0FBZ0IsU0FBaEIsQ0FBakI7QUFDQSxNQUFJLFdBQVc7QUFDYixXQUFPLENBQUMsVUFBRCxFQUFhLE1BQU0sS0FBbkIsQ0FETTtBQUViLGNBQVUsTUFBTTtBQUZILEdBQWY7QUFJQSxTQUFPLFFBQVA7QUFDRCxDQVZILENBOUNnQixDQUFsQjs7QUEyREEsTUFBTSxxQkFBTixHQUE4QixxQkFBYTtBQUFBLE1BRXZDLEtBRnVDLEdBSzNCLFNBTDJCLENBRXZDLEtBRnVDO0FBQUEsTUFHdkMsV0FIdUMsR0FLM0IsU0FMMkIsQ0FHdkMsV0FIdUM7QUFBQSxNQUl2QyxPQUp1QyxHQUszQixTQUwyQixDQUl2QyxPQUp1QztBQUFBLE1BS3BDLEtBTG9DLDBDQUszQixTQUwyQjs7O0FBT3pDLE1BQUksQ0FBQyxNQUFNLEVBQVgsRUFBZTtBQUNiLFVBQU0sRUFBTixHQUFXLE1BQU0sSUFBakI7QUFDRDs7QUFFRCxNQUFJLE9BQUosRUFBYTtBQUNYLFVBQU0sSUFBTixHQUFhLE9BQWI7QUFDRDs7QUFFRCxNQUFJLE1BQU0sUUFBTixJQUFrQixNQUFNLElBQU4sS0FBZSxnQkFBckMsRUFBdUQ7QUFDckQsVUFBTSxJQUFOLEdBQWEsTUFBTSxJQUFOLEdBQWEsSUFBMUI7QUFDRDs7QUFFRCxNQUFJLE1BQU0sUUFBVixFQUFvQjtBQUNsQixVQUFNLFFBQU4sR0FBaUIsSUFBakI7QUFDQSxVQUFNLGVBQU4sSUFBeUIsTUFBekI7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDQXpCRDs7QUEyQkEsTUFBTSxXQUFOLEdBQW9CLFVBQUMsU0FBRCxFQUFrQztBQUFBLE1BQXRCLFNBQXNCLHVFQUFWLEtBQVU7O0FBQ3BELE1BQUksY0FBSjtBQUNBLE1BQUksU0FBSixFQUFlO0FBQ2IsUUFBSSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsZ0JBQVUsSUFBVixHQUFpQixVQUFVLElBQVYsR0FBaUIsVUFBbEM7QUFDRCxLQUZELE1BRU87QUFDTCxnQkFBVSxJQUFWLEdBQWlCLE1BQU0sUUFBTixDQUFlLFNBQWYsSUFBNEIsVUFBN0M7QUFDRDtBQUNGO0FBQ0QsTUFBSSxXQUFXLE1BQU0sV0FBTixDQUFrQixVQUFVLElBQTVCLENBQWY7O0FBRUEsTUFBSSxRQUFKLEVBQWM7QUFDWixlQUFXLFNBQVMsU0FBVCxFQUFvQixTQUFwQixDQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsZUFBVyxNQUFNLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsU0FBOUIsR0FBWDtBQUNEOztBQUVELE1BQUksVUFBVSxJQUFWLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CLFFBQUksZUFBZSxFQUFuQjtBQUNBLFFBQUksVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLG1CQUFhLFNBQWIsV0FDTSxVQUFVLElBRGhCLDBCQUN5QyxVQUFVLElBRG5EO0FBRUQ7QUFDRCxZQUFRLE1BQU0sTUFBTixDQUFhLEtBQWIsRUFBb0IsU0FBUyxLQUE3QixFQUFvQyxZQUFwQyxDQUFSO0FBQ0QsR0FQRCxNQU9PO0FBQ0wsUUFBSSxRQUFRLE1BQU0scUJBQU4sQ0FBNEIsU0FBNUIsQ0FBWjtBQUNBLFlBQVEsTUFBTSxNQUFOLENBQWEsT0FBYixFQUFzQixJQUF0QixFQUE0QixLQUE1QixDQUFSO0FBQ0Q7O0FBRUQsTUFBSSxTQUFTLFFBQWIsRUFBdUI7QUFDckIsVUFBTSxnQkFBTixDQUF1QixlQUF2QixFQUF3QyxTQUFTLFFBQWpEO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FsQ0Q7O0FBb0NGOzs7OztBQUtBLE1BQU0sYUFBTixHQUFzQixtQkFBVztBQUMvQixNQUFNLGFBQWEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQW5CO0FBQ0EsTUFBTSxrQkFBa0IsU0FBUyxjQUFULENBQTJCLE9BQTNCLFlBQXhCOztBQUVBLE1BQUksV0FBVyxPQUFmLEVBQXdCO0FBQ3RCLG9CQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxjQUFoQztBQUNELEdBRkQsTUFFTztBQUNMLG9CQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxNQUFoQztBQUNEO0FBQ0YsQ0FURDs7QUFXQTs7Ozs7QUFLQSxNQUFNLFVBQU4sR0FBbUIsZUFBTztBQUN4QixTQUFPLElBQUksT0FBSixDQUFZLE9BQVosRUFBcUIsVUFBUyxDQUFULEVBQVk7QUFDcEMsV0FBTyxFQUFFLFdBQUYsRUFBUDtBQUNELEdBRkksQ0FBUDtBQUdELENBSkQ7O0FBT0EsTUFBTSxLQUFOLEdBQWMsVUFBQyxJQUFELEVBQU8sSUFBUCxFQUFnQjtBQUM1QixNQUFJLFlBQVksc0JBQWMsRUFBZCxFQUFrQixJQUFsQixFQUF3QixJQUF4QixDQUFoQjtBQUNBLE9BQUssSUFBSSxJQUFULElBQWlCLElBQWpCLEVBQXVCO0FBQ3JCLFFBQUksVUFBVSxjQUFWLENBQXlCLElBQXpCLENBQUosRUFBb0M7QUFDbEMsVUFBSSxNQUFNLE9BQU4sQ0FBYyxLQUFLLElBQUwsQ0FBZCxDQUFKLEVBQStCO0FBQzdCLGtCQUFVLElBQVYsSUFBa0IsTUFBTSxPQUFOLENBQWMsS0FBSyxJQUFMLENBQWQsSUFBNEIsTUFBTSxNQUFOLENBQWEsS0FBSyxJQUFMLEVBQVcsTUFBWCxDQUFrQixLQUFLLElBQUwsQ0FBbEIsQ0FBYixDQUE1QixHQUEwRSxLQUFLLElBQUwsQ0FBNUY7QUFDRCxPQUZELE1BRU8sSUFBSSxzQkFBTyxLQUFLLElBQUwsQ0FBUCxNQUFzQixRQUExQixFQUFvQztBQUN6QyxrQkFBVSxJQUFWLElBQWtCLE1BQU0sS0FBTixDQUFZLEtBQUssSUFBTCxDQUFaLEVBQXdCLEtBQUssSUFBTCxDQUF4QixDQUFsQjtBQUNELE9BRk0sTUFFQTtBQUNMLGtCQUFVLElBQVYsSUFBa0IsS0FBSyxJQUFMLENBQWxCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBTyxTQUFQO0FBQ0QsQ0FkRDs7QUFnQkEsTUFBTSxpQkFBTixHQUEwQixVQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsRUFBWCxFQUFrQjtBQUMxQyxTQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFBQSxXQUFLLEdBQUcsZ0JBQUgsQ0FBb0IsQ0FBcEIsRUFBdUIsRUFBdkIsRUFBMkIsS0FBM0IsQ0FBTDtBQUFBLEdBQXhCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQSxNQUFNLE9BQU4sR0FBZ0IsVUFBQyxFQUFELEVBQUssR0FBTCxFQUFhO0FBQzNCLE1BQUksWUFBWSxJQUFJLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEVBQWpCLENBQWhCO0FBQ0EsU0FBTyxDQUFDLEtBQUssR0FBRyxhQUFULEtBQTJCLENBQUMsR0FBRyxTQUFILENBQWEsUUFBYixDQUFzQixTQUF0QixDQUFuQztBQUNBLFNBQU8sRUFBUDtBQUNELENBSkQ7O0FBTUEsTUFBTSxJQUFOLEdBQWE7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFiOztBQUVBLE1BQU0sUUFBTixHQUFpQixVQUFDLElBQUQsRUFBeUM7QUFBQSxNQUFsQyxJQUFrQyx1RUFBM0IsR0FBMkI7QUFBQSxNQUF0QixTQUFzQix1RUFBVixLQUFVOztBQUN4RCxNQUFJLGdCQUFKO0FBQ0EsU0FBTyxZQUFrQjtBQUFBLHNDQUFOLElBQU07QUFBTixVQUFNO0FBQUE7O0FBQ3ZCLFFBQUksVUFBVSxJQUFkO0FBQ0EsUUFBSSxRQUFRLFNBQVIsS0FBUSxHQUFXO0FBQ3JCLGdCQUFVLElBQVY7QUFDQSxVQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNkLGFBQUssS0FBTCxDQUFXLE9BQVgsRUFBb0IsSUFBcEI7QUFDRDtBQUNGLEtBTEQ7QUFNQSxRQUFJLFVBQVUsYUFBYSxDQUFDLE9BQTVCO0FBQ0EsaUJBQWEsT0FBYjtBQUNBLGNBQVUsV0FBVyxLQUFYLEVBQWtCLElBQWxCLENBQVY7QUFDQSxRQUFJLE9BQUosRUFBYTtBQUNYLFdBQUssS0FBTCxDQUFXLE9BQVgsRUFBb0IsSUFBcEI7QUFDRDtBQUNGLEdBZEQ7QUFlRCxDQWpCRDs7QUFtQkE7Ozs7O0FBS0EsTUFBTSxXQUFOLEdBQW9CLFlBQU07QUFDeEIsTUFBSSxjQUFjLEVBQWxCO0FBQ0EsR0FBQyxhQUFLO0FBQ0o7QUFDQSxRQUFJLDJUQUEyVCxJQUEzVCxDQUFnVSxDQUFoVSxLQUFzVSwwa0RBQTBrRCxJQUExa0QsQ0FBK2tELEVBQUUsTUFBRixDQUFTLENBQVQsRUFBWSxDQUFaLENBQS9rRCxDQUExVSxFQUEwNkQ7QUFDeDZELG9CQUFjLFlBQWQ7QUFDRDtBQUNGLEdBTEQsRUFLRyxVQUFVLFNBQVYsSUFBdUIsVUFBVSxNQUFqQyxJQUEyQyxPQUFPLEtBTHJEO0FBTUEsU0FBTyxXQUFQO0FBQ0QsQ0FURDs7QUFXQTs7Ozs7O0FBTUEsTUFBTSxhQUFOLEdBQXNCLGVBQU87QUFDM0IsU0FBTyxNQUFNLFVBQU4sQ0FBaUIsSUFBSSxPQUFKLENBQVksYUFBWixFQUEyQixFQUEzQixDQUFqQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUEsTUFBTSxRQUFOLEdBQWlCLGVBQU87QUFDdEIsU0FBTyxJQUFJLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEdBQW5CLEVBQ04sT0FETSxDQUNFLHNCQURGLEVBQzBCLEVBRDFCLEVBQzhCLFdBRDlCLEVBQVA7QUFFRCxDQUhEOztBQUtBOzs7Ozs7QUFNQSxNQUFNLFdBQU4sR0FBb0IsZUFBTztBQUN6QixTQUFPLElBQUksT0FBSixDQUFZLFNBQVosRUFBdUIsRUFBdkIsQ0FBUDtBQUNELENBRkQ7O2tCQUllLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59OyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgY3JlYXRlICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGFuSW5zdGFuY2UgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBzZXRTcGVjaWVzICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBmYXN0S2V5ICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5XG4gICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBmcm9tICAgID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBtZXRhICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBhbkluc3RhbmNlICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZFAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgZWFjaCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgS0VZKTtcbiAgICAgICAgaWYoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKXJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJ3NpemUnIGluIHByb3RvKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59OyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTsiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCIvKiFcbiAqIG1pMThuIC0gaHR0cHM6Ly9naXRodWIuY29tL0RyYWdnYWJsZS9taTE4blxuICogVmVyc2lvbjogMC4zLjNcbiAqIEF1dGhvcjogS2V2aW4gQ2hhcHBlbGwgPGtldmluLmIuY2hhcHBlbGxAZ21haWwuY29tPiAoaHR0cDovL2tldmluLWNoYXBwZWxsLmNvbSlcbiAqL1xubW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sb2FkZWQ9ITAsby5leHBvcnRzfXZhciBlPXt9O3JldHVybiBuLm09dCxuLmM9ZSxuLnA9XCJkaXN0L1wiLG4oMCl9KFtmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e1wiZGVmYXVsdFwiOnR9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWUoNTcpLGk9cihvKSx1PWUoNTMpLGM9cih1KSxmPWUoNTYpLGE9cihmKSxzPWUoNDgpLGw9cihzKSxwPWUoNTQpLGg9cihwKSx2PWUoNTUpLHk9cih2KSxkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpeygwLGhbXCJkZWZhdWx0XCJdKSh0aGlzLHQpO3ZhciBuPXtleHRlbnNpb246XCIubGFuZ1wiLGxvY2F0aW9uOlwiYXNzZXRzL2xhbmcvXCIsbGFuZ3M6W1wiZW4tVVNcIl0sbG9jYWxlOlwiZW4tVVNcIixwcmVsb2FkZWQ6e319LGU9dGhpcztlLmluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY29uZmlnPSgwLGxbXCJkZWZhdWx0XCJdKSh7fSxuLHQpLGUubGFuZ3M9KDAsbFtcImRlZmF1bHRcIl0pKHt9LGUuY29uZmlnLnByZWxvYWRlZCksZS5sb2NhbGU9ZS5jb25maWcubG9jYWxlfHxlLmNvbmZpZy5sYW5nc1swXSxlLnNldEN1cnJlbnQoZS5sb2NhbGUpfX1yZXR1cm4oMCx5W1wiZGVmYXVsdFwiXSkodCxbe2tleTpcImdldFZhbHVlXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY3VycmVudCYmdGhpcy5jdXJyZW50W3RdfHx0fX0se2tleTpcIm1ha2VTYWZlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49e1wie1wiOlwiXFxcXHtcIixcIn1cIjpcIlxcXFx9XCIsXCJ8XCI6XCJcXFxcfFwifTtyZXR1cm4gdD10LnJlcGxhY2UoL1xce3xcXH18XFx8L2csZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19KSxuZXcgUmVnRXhwKHQsXCJnXCIpfX0se2tleTpcInB1dFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuY3VycmVudFt0XT1ufX0se2tleTpcImdldFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9dGhpcyxyPXRoaXMuZ2V0VmFsdWUodCksbz1yLm1hdGNoKC9cXHtbXlxcfV0rP1xcfS9nKSxpPXZvaWQgMDtpZihuJiZvKWlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIG4/XCJ1bmRlZmluZWRcIjooMCxhW1wiZGVmYXVsdFwiXSkobikpKWZvcih2YXIgdT0wO3U8by5sZW5ndGg7dSsrKWk9b1t1XS5zdWJzdHJpbmcoMSxvW3VdLmxlbmd0aC0xKSxyPXIucmVwbGFjZShlLm1ha2VTYWZlKG9bdV0pLG5baV18fFwiXCIpO2Vsc2Ugcj1yLnJlcGxhY2UoL1xce1teXFx9XSs/XFx9L2csbik7cmV0dXJuIHJ9fSx7a2V5OlwiZnJvbUZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIG4sZT10LnNwbGl0KFwiXFxuXCIpLHI9e30sbz0wO288ZS5sZW5ndGg7bysrKWlmKG49ZVtvXS5tYXRjaCgvXiguKz8pICo/PSAqPyhbXlxcbl0rKS8pKXt2YXIgaT1uWzJdLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKTtyW25bMV1dPWl9cmV0dXJuIHJ9fSx7a2V5OlwicHJvY2Vzc0ZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj10LnJlcGxhY2UoL1xcblxcbi9nLFwiXFxuXCIpO3JldHVybiB0aGlzLmZyb21GaWxlKG4pfX0se2tleTpcImxvYWRMYW5nXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49dGhpcztyZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKGZ1bmN0aW9uKGUscil7bi5sYW5nc1t0XT9lKG4ubGFuZ3NbdF0pOiFmdW5jdGlvbigpe3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdCxpPW4uY29uZmlnLmxvY2F0aW9uK3Qrbi5jb25maWcuZXh0ZW5zaW9uO28ub3BlbihcIkdFVFwiLGksITApLG8ub25sb2FkPWZ1bmN0aW9uKCl7aWYodGhpcy5zdGF0dXM8PTMwNCl7dmFyIGk9bi5wcm9jZXNzRmlsZShvLnJlc3BvbnNlVGV4dCk7bi5sYW5nc1t0XT1pLGUoaSl9ZWxzZSByKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5vbmVycm9yPWZ1bmN0aW9uKCl7cih7c3RhdHVzOnRoaXMuc3RhdHVzLHN0YXR1c1RleHQ6by5zdGF0dXNUZXh0fSl9LG8uc2VuZCgpfSgpfSl9fSx7a2V5Olwic2V0Q3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG49KDAsY1tcImRlZmF1bHRcIl0pKGlbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gZSgpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcImVuLVVTXCI7cmV0dXJuIGlbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24obil7Zm9yKDs7KXN3aXRjaChuLnByZXY9bi5uZXh0KXtjYXNlIDA6cmV0dXJuIG4ubmV4dD0yLHRoaXMubG9hZExhbmcodCk7Y2FzZSAyOnJldHVybiB0aGlzLmxvY2FsZT10LHRoaXMuY3VycmVudD10aGlzLmxhbmdzW3RdLG4uYWJydXB0KFwicmV0dXJuXCIsdGhpcy5jdXJyZW50KTtjYXNlIDU6Y2FzZVwiZW5kXCI6cmV0dXJuIG4uc3RvcCgpfX0sZSx0aGlzKX0pKTtyZXR1cm4gdH0oKX0se2tleTpcImdldExhbmdzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29uZmlnLmxhbmdzfX1dKSx0fSgpO25bXCJkZWZhdWx0XCJdPW5ldyBkfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOCkoXCJ3a3NcIiksbz1lKDIxKSxpPWUoMikuU3ltYm9sLHU9XCJmdW5jdGlvblwiPT10eXBlb2YgaSxjPXQuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gclt0XXx8KHJbdF09dSYmaVt0XXx8KHU/aTpvKShcIlN5bWJvbC5cIit0KSl9O2Muc3RvcmU9cn0sZnVuY3Rpb24odCxuKXt2YXIgZT10LmV4cG9ydHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lk1hdGg9PU1hdGg/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLk1hdGg9PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XCJudW1iZXJcIj09dHlwZW9mIF9fZyYmKF9fZz1lKX0sZnVuY3Rpb24odCxuKXt2YXIgZT10LmV4cG9ydHM9e3ZlcnNpb246XCIyLjQuMFwifTtcIm51bWJlclwiPT10eXBlb2YgX19lJiYoX19lPWUpfSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPSFlKDEyKShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNiksbz1lKDM1KSxpPWUoMzApLHU9T2JqZWN0LmRlZmluZVByb3BlcnR5O24uZj1lKDQpP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbih0LG4sZSl7aWYocih0KSxuPWkobiwhMCkscihlKSxvKXRyeXtyZXR1cm4gdSh0LG4sZSl9Y2F0Y2goYyl7fWlmKFwiZ2V0XCJpbiBlfHxcInNldFwiaW4gZSl0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCFcIik7cmV0dXJuXCJ2YWx1ZVwiaW4gZSYmKHRbbl09ZS52YWx1ZSksdH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoIXIodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9Lmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDUpLG89ZSgxOSk7dC5leHBvcnRzPWUoNCk/ZnVuY3Rpb24odCxuLGUpe3JldHVybiByLmYodCxuLG8oMSxlKSl9OmZ1bmN0aW9uKHQsbixlKXtyZXR1cm4gdFtuXT1lLHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgzNiksbz1lKDIzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIobyh0KSl9fSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZS5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMiksbz1lKDMpLGk9ZSgxNiksdT1lKDgpLGM9XCJwcm90b3R5cGVcIixmPWZ1bmN0aW9uKHQsbixlKXt2YXIgYSxzLGwscD10JmYuRixoPXQmZi5HLHY9dCZmLlMseT10JmYuUCxkPXQmZi5CLGc9dCZmLlcsbT1oP286b1tuXXx8KG9bbl09e30pLHc9bVtjXSx4PWg/cjp2P3Jbbl06KHJbbl18fHt9KVtjXTtoJiYoZT1uKTtmb3IoYSBpbiBlKXM9IXAmJngmJnZvaWQgMCE9PXhbYV0scyYmYSBpbiBtfHwobD1zP3hbYV06ZVthXSxtW2FdPWgmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHhbYV0/ZVthXTpkJiZzP2kobCxyKTpnJiZ4W2FdPT1sP2Z1bmN0aW9uKHQpe3ZhciBuPWZ1bmN0aW9uKG4sZSxyKXtpZih0aGlzIGluc3RhbmNlb2YgdCl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IHQ7Y2FzZSAxOnJldHVybiBuZXcgdChuKTtjYXNlIDI6cmV0dXJuIG5ldyB0KG4sZSl9cmV0dXJuIG5ldyB0KG4sZSxyKX1yZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3JldHVybiBuW2NdPXRbY10sbn0obCk6eSYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD9pKEZ1bmN0aW9uLmNhbGwsbCk6bCx5JiYoKG0udmlydHVhbHx8KG0udmlydHVhbD17fSkpW2FdPWwsdCZmLlImJncmJiF3W2FdJiZ1KHcsYSxsKSkpfTtmLkY9MSxmLkc9MixmLlM9NCxmLlA9OCxmLkI9MTYsZi5XPTMyLGYuVT02NCxmLlI9MTI4LHQuZXhwb3J0cz1mfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt0cnl7cmV0dXJuISF0KCl9Y2F0Y2gobil7cmV0dXJuITB9fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/bnVsbCE9PXQ6XCJmdW5jdGlvblwiPT10eXBlb2YgdH19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPXt9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0MCksbz1lKDI1KTt0LmV4cG9ydHM9T2JqZWN0LmtleXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyMik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLHZvaWQgMD09PW4pcmV0dXJuIHQ7c3dpdGNoKGUpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2FsbChuLGUpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQuY2FsbChuLGUscil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24oZSxyLG8pe3JldHVybiB0LmNhbGwobixlLHIsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz0hMH0sZnVuY3Rpb24odCxuKXtuLmY9e30ucHJvcGVydHlJc0VudW1lcmFibGV9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOm59fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSkuZixvPWUoNyksaT1lKDEpKFwidG9TdHJpbmdUYWdcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0JiYhbyh0PWU/dDp0LnByb3RvdHlwZSxpKSYmcih0LGkse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTpufSl9fSxmdW5jdGlvbih0LG4pe3ZhciBlPTAscj1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK2UrcikudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT10KXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIit0KTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKSxvPWUoMikuZG9jdW1lbnQsaT1yKG8pJiZyKG8uY3JlYXRlRWxlbWVudCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpP28uY3JlYXRlRWxlbWVudCh0KTp7fX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPVwiY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mXCIuc3BsaXQoXCIsXCIpfSxmdW5jdGlvbih0LG4pe24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOCkoXCJrZXlzXCIpLG89ZSgyMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1vKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDIpLG89XCJfX2NvcmUtanNfc2hhcmVkX19cIixpPXJbb118fChyW29dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlbdF18fChpW3RdPXt9KX19LGZ1bmN0aW9uKHQsbil7dmFyIGU9TWF0aC5jZWlsLHI9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9yOmUpKHQpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2lmKCFyKHQpKXJldHVybiB0O3ZhciBlLG87aWYobiYmXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnRvU3RyaW5nKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC52YWx1ZU9mKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKCFuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMiksbz1lKDMpLGk9ZSgxNyksdT1lKDMyKSxjPWUoNSkuZjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49by5TeW1ib2x8fChvLlN5bWJvbD1pP3t9OnIuU3ltYm9sfHx7fSk7XCJfXCI9PXQuY2hhckF0KDApfHx0IGluIG58fGMobix0LHt2YWx1ZTp1LmYodCl9KX19LGZ1bmN0aW9uKHQsbixlKXtuLmY9ZSgxKX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTApLG89ZSgxKShcInRvU3RyaW5nVGFnXCIpLGk9XCJBcmd1bWVudHNcIj09cihmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpLHU9ZnVuY3Rpb24odCxuKXt0cnl7cmV0dXJuIHRbbl19Y2F0Y2goZSl7fX07dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuLGUsYztyZXR1cm4gdm9pZCAwPT09dD9cIlVuZGVmaW5lZFwiOm51bGw9PT10P1wiTnVsbFwiOlwic3RyaW5nXCI9PXR5cGVvZihlPXUobj1PYmplY3QodCksbykpP2U6aT9yKG4pOlwiT2JqZWN0XCI9PShjPXIobikpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLmNhbGxlZT9cIkFyZ3VtZW50c1wiOmN9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPWUoMikuZG9jdW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudH0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz0hZSg0KSYmIWUoMTIpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlKDI0KShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCk7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKHQpe3JldHVyblwiU3RyaW5nXCI9PXIodCk/dC5zcGxpdChcIlwiKTpPYmplY3QodCl9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgxNyksbz1lKDExKSxpPWUoNDEpLHU9ZSg4KSxjPWUoNyksZj1lKDE0KSxhPWUoNzIpLHM9ZSgyMCksbD1lKDgyKSxwPWUoMSkoXCJpdGVyYXRvclwiKSxoPSEoW10ua2V5cyYmXCJuZXh0XCJpbltdLmtleXMoKSksdj1cIkBAaXRlcmF0b3JcIix5PVwia2V5c1wiLGQ9XCJ2YWx1ZXNcIixnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxtLHcseCxiKXthKGUsbixtKTt2YXIgXyxPLGosUz1mdW5jdGlvbih0KXtpZighaCYmdCBpbiBrKXJldHVybiBrW3RdO3N3aXRjaCh0KXtjYXNlIHk6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9O2Nhc2UgZDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9fSxFPW4rXCIgSXRlcmF0b3JcIixUPXc9PWQsUD0hMSxrPXQucHJvdG90eXBlLEw9a1twXXx8a1t2XXx8dyYma1t3XSxNPUx8fFModyksRj13P1Q/UyhcImVudHJpZXNcIik6TTp2b2lkIDAsTj1cIkFycmF5XCI9PW4/ay5lbnRyaWVzfHxMOkw7aWYoTiYmKGo9bChOLmNhbGwobmV3IHQpKSxqIT09T2JqZWN0LnByb3RvdHlwZSYmKHMoaixFLCEwKSxyfHxjKGoscCl8fHUoaixwLGcpKSksVCYmTCYmTC5uYW1lIT09ZCYmKFA9ITAsTT1mdW5jdGlvbigpe3JldHVybiBMLmNhbGwodGhpcyl9KSxyJiYhYnx8IWgmJiFQJiZrW3BdfHx1KGsscCxNKSxmW25dPU0sZltFXT1nLHcpaWYoXz17dmFsdWVzOlQ/TTpTKGQpLGtleXM6eD9NOlMoeSksZW50cmllczpGfSxiKWZvcihPIGluIF8pTyBpbiBrfHxpKGssTyxfW09dKTtlbHNlIG8oby5QK28uRiooaHx8UCksbixfKTtyZXR1cm4gX319LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDYpLG89ZSg3OSksaT1lKDI1KSx1PWUoMjcpKFwiSUVfUFJPVE9cIiksYz1mdW5jdGlvbigpe30sZj1cInByb3RvdHlwZVwiLGE9ZnVuY3Rpb24oKXt2YXIgdCxuPWUoMjQpKFwiaWZyYW1lXCIpLHI9aS5sZW5ndGgsbz1cIjxcIix1PVwiPlwiO2ZvcihuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZSgzNCkuYXBwZW5kQ2hpbGQobiksbi5zcmM9XCJqYXZhc2NyaXB0OlwiLHQ9bi5jb250ZW50V2luZG93LmRvY3VtZW50LHQub3BlbigpLHQud3JpdGUobytcInNjcmlwdFwiK3UrXCJkb2N1bWVudC5GPU9iamVjdFwiK28rXCIvc2NyaXB0XCIrdSksdC5jbG9zZSgpLGE9dC5GO3ItLTspZGVsZXRlIGFbZl1baVtyXV07cmV0dXJuIGEoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsbil7dmFyIGU7cmV0dXJuIG51bGwhPT10PyhjW2ZdPXIodCksZT1uZXcgYyxjW2ZdPW51bGwsZVt1XT10KTplPWEoKSx2b2lkIDA9PT1uP2U6byhlLG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNDApLG89ZSgyNSkuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIik7bi5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbih0KXtyZXR1cm4gcih0LG8pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNyksbz1lKDkpLGk9ZSg2NSkoITEpLHU9ZSgyNykoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXt2YXIgZSxjPW8odCksZj0wLGE9W107Zm9yKGUgaW4gYyllIT11JiZyKGMsZSkmJmEucHVzaChlKTtmb3IoO24ubGVuZ3RoPmY7KXIoYyxlPW5bZisrXSkmJih+aShhLGUpfHxhLnB1c2goZSkpO3JldHVybiBhfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDgpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHIsbyxpLHU9ZSgxNiksYz1lKDY4KSxmPWUoMzQpLGE9ZSgyNCkscz1lKDIpLGw9cy5wcm9jZXNzLHA9cy5zZXRJbW1lZGlhdGUsaD1zLmNsZWFySW1tZWRpYXRlLHY9cy5NZXNzYWdlQ2hhbm5lbCx5PTAsZD17fSxnPVwib25yZWFkeXN0YXRlY2hhbmdlXCIsbT1mdW5jdGlvbigpe3ZhciB0PSt0aGlzO2lmKGQuaGFzT3duUHJvcGVydHkodCkpe3ZhciBuPWRbdF07ZGVsZXRlIGRbdF0sbigpfX0sdz1mdW5jdGlvbih0KXttLmNhbGwodC5kYXRhKX07cCYmaHx8KHA9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPVtdLGU9MTthcmd1bWVudHMubGVuZ3RoPmU7KW4ucHVzaChhcmd1bWVudHNbZSsrXSk7cmV0dXJuIGRbKyt5XT1mdW5jdGlvbigpe2MoXCJmdW5jdGlvblwiPT10eXBlb2YgdD90OkZ1bmN0aW9uKHQpLG4pfSxyKHkpLHl9LGg9ZnVuY3Rpb24odCl7ZGVsZXRlIGRbdF19LFwicHJvY2Vzc1wiPT1lKDEwKShsKT9yPWZ1bmN0aW9uKHQpe2wubmV4dFRpY2sodShtLHQsMSkpfTp2PyhvPW5ldyB2LGk9by5wb3J0MixvLnBvcnQxLm9ubWVzc2FnZT13LHI9dShpLnBvc3RNZXNzYWdlLGksMSkpOnMuYWRkRXZlbnRMaXN0ZW5lciYmXCJmdW5jdGlvblwiPT10eXBlb2YgcG9zdE1lc3NhZ2UmJiFzLmltcG9ydFNjcmlwdHM/KHI9ZnVuY3Rpb24odCl7cy5wb3N0TWVzc2FnZSh0K1wiXCIsXCIqXCIpfSxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdywhMSkpOnI9ZyBpbiBhKFwic2NyaXB0XCIpP2Z1bmN0aW9uKHQpe2YuYXBwZW5kQ2hpbGQoYShcInNjcmlwdFwiKSlbZ109ZnVuY3Rpb24oKXtmLnJlbW92ZUNoaWxkKHRoaXMpLG0uY2FsbCh0KX19OmZ1bmN0aW9uKHQpe3NldFRpbWVvdXQodShtLHQsMSksMCl9KSx0LmV4cG9ydHM9e3NldDpwLGNsZWFyOmh9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOSksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKHIodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDIzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChyKHQpKX19LGZ1bmN0aW9uKHQsbil7fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg4NikoITApO2UoMzcpKFN0cmluZyxcIlN0cmluZ1wiLGZ1bmN0aW9uKHQpe3RoaXMuX3Q9U3RyaW5nKHQpLHRoaXMuX2k9MH0sZnVuY3Rpb24oKXt2YXIgdCxuPXRoaXMuX3QsZT10aGlzLl9pO3JldHVybiBlPj1uLmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9Oih0PXIobixlKSx0aGlzLl9pKz10Lmxlbmd0aCx7dmFsdWU6dCxkb25lOiExfSl9KX0sZnVuY3Rpb24odCxuLGUpe2UoODkpO2Zvcih2YXIgcj1lKDIpLG89ZSg4KSxpPWUoMTQpLHU9ZSgxKShcInRvU3RyaW5nVGFnXCIpLGM9W1wiTm9kZUxpc3RcIixcIkRPTVRva2VuTGlzdFwiLFwiTWVkaWFMaXN0XCIsXCJTdHlsZVNoZWV0TGlzdFwiLFwiQ1NTUnVsZUxpc3RcIl0sZj0wO2Y8NTtmKyspe3ZhciBhPWNbZl0scz1yW2FdLGw9cyYmcy5wcm90b3R5cGU7bCYmIWxbdV0mJm8obCx1LGEpLGlbYV09aS5BcnJheX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNTgpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDU5KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg2MCksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNjEpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDYyKSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1uLl9fZXNNb2R1bGU9ITA7dmFyIG89ZSg1MCksaT1yKG8pO25bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBuZXcgaVtcImRlZmF1bHRcIl0oZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKG8sdSl7dHJ5e3ZhciBjPW5bb10odSksZj1jLnZhbHVlfWNhdGNoKGEpe3JldHVybiB2b2lkIGUoYSl9cmV0dXJuIGMuZG9uZT92b2lkIHQoZik6aVtcImRlZmF1bHRcIl0ucmVzb2x2ZShmKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiByKFwibmV4dFwiLHQpfSxmdW5jdGlvbih0KXtyZXR1cm4gcihcInRocm93XCIsdCl9KX1yZXR1cm4gcihcIm5leHRcIil9KX19fSxmdW5jdGlvbih0LG4pe1widXNlIHN0cmljdFwiO24uX19lc01vZHVsZT0hMCxuW1wiZGVmYXVsdFwiXT1mdW5jdGlvbih0LG4pe2lmKCEodCBpbnN0YW5jZW9mIG4pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e1wiZGVmYXVsdFwiOnR9fW4uX19lc01vZHVsZT0hMDt2YXIgbz1lKDQ5KSxpPXIobyk7bltcImRlZmF1bHRcIl09ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7Zm9yKHZhciBlPTA7ZTxuLmxlbmd0aDtlKyspe3ZhciByPW5bZV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLCgwLGlbXCJkZWZhdWx0XCJdKSh0LHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24obixlLHIpe3JldHVybiBlJiZ0KG4ucHJvdG90eXBlLGUpLHImJnQobixyKSxufX0oKX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1uLl9fZXNNb2R1bGU9ITA7dmFyIG89ZSg1MiksaT1yKG8pLHU9ZSg1MSksYz1yKHUpLGY9XCJmdW5jdGlvblwiPT10eXBlb2YgY1tcImRlZmF1bHRcIl0mJlwic3ltYm9sXCI9PXR5cGVvZiBpW1wiZGVmYXVsdFwiXT9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjW1wiZGVmYXVsdFwiXSYmdC5jb25zdHJ1Y3Rvcj09PWNbXCJkZWZhdWx0XCJdP1wic3ltYm9sXCI6dHlwZW9mIHR9O25bXCJkZWZhdWx0XCJdPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNbXCJkZWZhdWx0XCJdJiZcInN5bWJvbFwiPT09ZihpW1wiZGVmYXVsdFwiXSk/ZnVuY3Rpb24odCl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpmKHQpfTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgY1tcImRlZmF1bHRcIl0mJnQuY29uc3RydWN0b3I9PT1jW1wiZGVmYXVsdFwiXT9cInN5bWJvbFwiOlwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Zih0KX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9ZSg5Nyl9LGZ1bmN0aW9uKHQsbixlKXtlKDkwKSx0LmV4cG9ydHM9ZSgzKS5PYmplY3QuYXNzaWdufSxmdW5jdGlvbih0LG4sZSl7ZSg5MSk7dmFyIHI9ZSgzKS5PYmplY3Q7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtyZXR1cm4gci5kZWZpbmVQcm9wZXJ0eSh0LG4sZSl9fSxmdW5jdGlvbih0LG4sZSl7ZSg0NSksZSg0NiksZSg0NyksZSg5MiksdC5leHBvcnRzPWUoMykuUHJvbWlzZX0sZnVuY3Rpb24odCxuLGUpe2UoOTMpLGUoNDUpLGUoOTQpLGUoOTUpLHQuZXhwb3J0cz1lKDMpLlN5bWJvbH0sZnVuY3Rpb24odCxuLGUpe2UoNDYpLGUoNDcpLHQuZXhwb3J0cz1lKDMyKS5mKFwiaXRlcmF0b3JcIil9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUscil7aWYoISh0IGluc3RhbmNlb2Ygbil8fHZvaWQgMCE9PXImJnIgaW4gdCl0aHJvdyBUeXBlRXJyb3IoZStcIjogaW5jb3JyZWN0IGludm9jYXRpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoOSksbz1lKDQzKSxpPWUoODcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24obixlLHUpe3ZhciBjLGY9cihuKSxhPW8oZi5sZW5ndGgpLHM9aSh1LGEpO2lmKHQmJmUhPWUpe2Zvcig7YT5zOylpZihjPWZbcysrXSxjIT1jKXJldHVybiEwfWVsc2UgZm9yKDthPnM7cysrKWlmKCh0fHxzIGluIGYpJiZmW3NdPT09ZSlyZXR1cm4gdHx8c3x8MDtyZXR1cm4hdCYmLTF9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTUpLG89ZSgyNiksaT1lKDE4KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49cih0KSxlPW8uZjtpZihlKWZvcih2YXIgdSxjPWUodCksZj1pLmYsYT0wO2MubGVuZ3RoPmE7KWYuY2FsbCh0LHU9Y1thKytdKSYmbi5wdXNoKHUpO3JldHVybiBufX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTYpLG89ZSg3MSksaT1lKDY5KSx1PWUoNiksYz1lKDQzKSxmPWUoODgpLGE9e30scz17fSxuPXQuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxsLHApe3ZhciBoLHYseSxkLGc9cD9mdW5jdGlvbigpe3JldHVybiB0fTpmKHQpLG09cihlLGwsbj8yOjEpLHc9MDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBnKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBpdGVyYWJsZSFcIik7aWYoaShnKSl7Zm9yKGg9Yyh0Lmxlbmd0aCk7aD53O3crKylpZihkPW4/bSh1KHY9dFt3XSlbMF0sdlsxXSk6bSh0W3ddKSxkPT09YXx8ZD09PXMpcmV0dXJuIGR9ZWxzZSBmb3IoeT1nLmNhbGwodCk7ISh2PXkubmV4dCgpKS5kb25lOylpZihkPW8oeSxtLHYudmFsdWUsbiksZD09PWF8fGQ9PT1zKXJldHVybiBkfTtuLkJSRUFLPWEsbi5SRVRVUk49c30sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3ZhciByPXZvaWQgMD09PWU7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHI/dCgpOnQuY2FsbChlKTtjYXNlIDE6cmV0dXJuIHI/dChuWzBdKTp0LmNhbGwoZSxuWzBdKTtjYXNlIDI6cmV0dXJuIHI/dChuWzBdLG5bMV0pOnQuY2FsbChlLG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiByP3QoblswXSxuWzFdLG5bMl0pOnQuY2FsbChlLG5bMF0sblsxXSxuWzJdKTtjYXNlIDQ6cmV0dXJuIHI/dChuWzBdLG5bMV0sblsyXSxuWzNdKTp0LmNhbGwoZSxuWzBdLG5bMV0sblsyXSxuWzNdKX1yZXR1cm4gdC5hcHBseShlLG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTQpLG89ZSgxKShcIml0ZXJhdG9yXCIpLGk9QXJyYXkucHJvdG90eXBlO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dCYmKHIuQXJyYXk9PT10fHxpW29dPT09dCl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCk7dC5leHBvcnRzPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKHQpe3JldHVyblwiQXJyYXlcIj09cih0KX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDYpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxvKXt0cnl7cmV0dXJuIG8/bihyKGUpWzBdLGVbMV0pOm4oZSl9Y2F0Y2goaSl7dmFyIHU9dFtcInJldHVyblwiXTt0aHJvdyB2b2lkIDAhPT11JiZyKHUuY2FsbCh0KSksaX19fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgzOCksbz1lKDE5KSxpPWUoMjApLHU9e307ZSg4KSh1LGUoMSkoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0LnByb3RvdHlwZT1yKHUse25leHQ6bygxLGUpfSksaSh0LG4rXCIgSXRlcmF0b3JcIil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKShcIml0ZXJhdG9yXCIpLG89ITE7dHJ5e3ZhciBpPVs3XVtyXSgpO2lbXCJyZXR1cm5cIl09ZnVuY3Rpb24oKXtvPSEwfSxBcnJheS5mcm9tKGksZnVuY3Rpb24oKXt0aHJvdyAyfSl9Y2F0Y2godSl7fXQuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2lmKCFuJiYhbylyZXR1cm4hMTt2YXIgZT0hMTt0cnl7dmFyIGk9WzddLHU9aVtyXSgpO3UubmV4dD1mdW5jdGlvbigpe3JldHVybntkb25lOmU9ITB9fSxpW3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHV9LHQoaSl9Y2F0Y2goYyl7fXJldHVybiBlfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57dmFsdWU6bixkb25lOiEhdH19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNSksbz1lKDkpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2Zvcih2YXIgZSxpPW8odCksdT1yKGkpLGM9dS5sZW5ndGgsZj0wO2M+ZjspaWYoaVtlPXVbZisrXV09PT1uKXJldHVybiBlfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjEpKFwibWV0YVwiKSxvPWUoMTMpLGk9ZSg3KSx1PWUoNSkuZixjPTAsZj1PYmplY3QuaXNFeHRlbnNpYmxlfHxmdW5jdGlvbigpe3JldHVybiEwfSxhPSFlKDEyKShmdW5jdGlvbigpe3JldHVybiBmKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpfSkscz1mdW5jdGlvbih0KXt1KHQscix7dmFsdWU6e2k6XCJPXCIrICsrYyx3Ont9fX0pfSxsPWZ1bmN0aW9uKHQsbil7aWYoIW8odCkpcmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDooXCJzdHJpbmdcIj09dHlwZW9mIHQ/XCJTXCI6XCJQXCIpK3Q7aWYoIWkodCxyKSl7aWYoIWYodCkpcmV0dXJuXCJGXCI7aWYoIW4pcmV0dXJuXCJFXCI7cyh0KX1yZXR1cm4gdFtyXS5pfSxwPWZ1bmN0aW9uKHQsbil7aWYoIWkodCxyKSl7aWYoIWYodCkpcmV0dXJuITA7aWYoIW4pcmV0dXJuITE7cyh0KX1yZXR1cm4gdFtyXS53fSxoPWZ1bmN0aW9uKHQpe3JldHVybiBhJiZ2Lk5FRUQmJmYodCkmJiFpKHQscikmJnModCksdH0sdj10LmV4cG9ydHM9e0tFWTpyLE5FRUQ6ITEsZmFzdEtleTpsLGdldFdlYWs6cCxvbkZyZWV6ZTpofX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMiksbz1lKDQyKS5zZXQsaT1yLk11dGF0aW9uT2JzZXJ2ZXJ8fHIuV2ViS2l0TXV0YXRpb25PYnNlcnZlcix1PXIucHJvY2VzcyxjPXIuUHJvbWlzZSxmPVwicHJvY2Vzc1wiPT1lKDEwKSh1KTt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdCxuLGUsYT1mdW5jdGlvbigpe3ZhciByLG87Zm9yKGYmJihyPXUuZG9tYWluKSYmci5leGl0KCk7dDspe289dC5mbix0PXQubmV4dDt0cnl7bygpfWNhdGNoKGkpe3Rocm93IHQ/ZSgpOm49dm9pZCAwLGl9fW49dm9pZCAwLHImJnIuZW50ZXIoKX07aWYoZillPWZ1bmN0aW9uKCl7dS5uZXh0VGljayhhKX07ZWxzZSBpZihpKXt2YXIgcz0hMCxsPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO25ldyBpKGEpLm9ic2VydmUobCx7Y2hhcmFjdGVyRGF0YTohMH0pLGU9ZnVuY3Rpb24oKXtsLmRhdGE9cz0hc319ZWxzZSBpZihjJiZjLnJlc29sdmUpe3ZhciBwPWMucmVzb2x2ZSgpO2U9ZnVuY3Rpb24oKXtwLnRoZW4oYSl9fWVsc2UgZT1mdW5jdGlvbigpe28uY2FsbChyLGEpfTtyZXR1cm4gZnVuY3Rpb24ocil7dmFyIG89e2ZuOnIsbmV4dDp2b2lkIDB9O24mJihuLm5leHQ9byksdHx8KHQ9byxlKCkpLG49b319fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgxNSksbz1lKDI2KSxpPWUoMTgpLHU9ZSg0NCksYz1lKDM2KSxmPU9iamVjdC5hc3NpZ247dC5leHBvcnRzPSFmfHxlKDEyKShmdW5jdGlvbigpe3ZhciB0PXt9LG49e30sZT1TeW1ib2woKSxyPVwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIjtyZXR1cm4gdFtlXT03LHIuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbih0KXtuW3RdPXR9KSw3IT1mKHt9LHQpW2VdfHxPYmplY3Qua2V5cyhmKHt9LG4pKS5qb2luKFwiXCIpIT1yfSk/ZnVuY3Rpb24odCxuKXtmb3IodmFyIGU9dSh0KSxmPWFyZ3VtZW50cy5sZW5ndGgsYT0xLHM9by5mLGw9aS5mO2Y+YTspZm9yKHZhciBwLGg9Yyhhcmd1bWVudHNbYSsrXSksdj1zP3IoaCkuY29uY2F0KHMoaCkpOnIoaCkseT12Lmxlbmd0aCxkPTA7eT5kOylsLmNhbGwoaCxwPXZbZCsrXSkmJihlW3BdPWhbcF0pO3JldHVybiBlfTpmfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1KSxvPWUoNiksaT1lKDE1KTt0LmV4cG9ydHM9ZSg0KT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbih0LG4pe28odCk7Zm9yKHZhciBlLHU9aShuKSxjPXUubGVuZ3RoLGY9MDtjPmY7KXIuZih0LGU9dVtmKytdLG5bZV0pO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTgpLG89ZSgxOSksaT1lKDkpLHU9ZSgzMCksYz1lKDcpLGY9ZSgzNSksYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO24uZj1lKDQpP2E6ZnVuY3Rpb24odCxuKXtpZih0PWkodCksbj11KG4sITApLGYpdHJ5e3JldHVybiBhKHQsbil9Y2F0Y2goZSl7fWlmKGModCxuKSlyZXR1cm4gbyghci5mLmNhbGwodCxuKSx0W25dKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDkpLG89ZSgzOSkuZixpPXt9LnRvU3RyaW5nLHU9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93JiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcz9PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpOltdLGM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBvKHQpfWNhdGNoKG4pe3JldHVybiB1LnNsaWNlKCl9fTt0LmV4cG9ydHMuZj1mdW5jdGlvbih0KXtyZXR1cm4gdSYmXCJbb2JqZWN0IFdpbmRvd11cIj09aS5jYWxsKHQpP2ModCk6byhyKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDcpLG89ZSg0NCksaT1lKDI3KShcIklFX1BST1RPXCIpLHU9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdD1vKHQpLHIodCxpKT90W2ldOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29uc3RydWN0b3ImJnQgaW5zdGFuY2VvZiB0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IucHJvdG90eXBlOnQgaW5zdGFuY2VvZiBPYmplY3Q/dTpudWxsfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoOCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtmb3IodmFyIG8gaW4gbillJiZ0W29dP3Rbb109bltvXTpyKHQsbyxuW29dKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDIpLG89ZSgzKSxpPWUoNSksdT1lKDQpLGM9ZSgxKShcInNwZWNpZXNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIG9bdF0/b1t0XTpyW3RdO3UmJm4mJiFuW2NdJiZpLmYobixjLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9fSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg2KSxvPWUoMjIpLGk9ZSgxKShcInNwZWNpZXNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7dmFyIGUsdT1yKHQpLmNvbnN0cnVjdG9yO3JldHVybiB2b2lkIDA9PT11fHx2b2lkIDA9PShlPXIodSlbaV0pP246byhlKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KSxvPWUoMjMpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24obixlKXt2YXIgaSx1LGM9U3RyaW5nKG8obikpLGY9cihlKSxhPWMubGVuZ3RoO3JldHVybiBmPDB8fGY+PWE/dD9cIlwiOnZvaWQgMDooaT1jLmNoYXJDb2RlQXQoZiksaTw1NTI5Nnx8aT41NjMxOXx8ZisxPT09YXx8KHU9Yy5jaGFyQ29kZUF0KGYrMSkpPDU2MzIwfHx1PjU3MzQzP3Q/Yy5jaGFyQXQoZik6aTp0P2Muc2xpY2UoZixmKzIpOihpLTU1Mjk2PDwxMCkrKHUtNTYzMjApKzY1NTM2KX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOSksbz1NYXRoLm1heCxpPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybiB0PXIodCksdDwwP28odCtuLDApOmkodCxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDMzKSxvPWUoMSkoXCJpdGVyYXRvclwiKSxpPWUoMTQpO3QuZXhwb3J0cz1lKDMpLmdldEl0ZXJhdG9yTWV0aG9kPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMCE9dClyZXR1cm4gdFtvXXx8dFtcIkBAaXRlcmF0b3JcIl18fGlbcih0KV19fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg2Myksbz1lKDc0KSxpPWUoMTQpLHU9ZSg5KTt0LmV4cG9ydHM9ZSgzNykoQXJyYXksXCJBcnJheVwiLGZ1bmN0aW9uKHQsbil7dGhpcy5fdD11KHQpLHRoaXMuX2k9MCx0aGlzLl9rPW59LGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdCxuPXRoaXMuX2ssZT10aGlzLl9pKys7cmV0dXJuIXR8fGU+PXQubGVuZ3RoPyh0aGlzLl90PXZvaWQgMCxvKDEpKTpcImtleXNcIj09bj9vKDAsZSk6XCJ2YWx1ZXNcIj09bj9vKDAsdFtlXSk6bygwLFtlLHRbZV1dKX0sXCJ2YWx1ZXNcIiksaS5Bcmd1bWVudHM9aS5BcnJheSxyKFwia2V5c1wiKSxyKFwidmFsdWVzXCIpLHIoXCJlbnRyaWVzXCIpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMSk7cihyLlMrci5GLFwiT2JqZWN0XCIse2Fzc2lnbjplKDc4KX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMSk7cihyLlMrci5GKiFlKDQpLFwiT2JqZWN0XCIse2RlZmluZVByb3BlcnR5OmUoNSkuZn0pfSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsbyxpLHU9ZSgxNyksYz1lKDIpLGY9ZSgxNiksYT1lKDMzKSxzPWUoMTEpLGw9ZSgxMykscD1lKDIyKSxoPWUoNjQpLHY9ZSg2NykseT1lKDg1KSxkPWUoNDIpLnNldCxnPWUoNzcpKCksbT1cIlByb21pc2VcIix3PWMuVHlwZUVycm9yLHg9Yy5wcm9jZXNzLGI9Y1ttXSx4PWMucHJvY2VzcyxfPVwicHJvY2Vzc1wiPT1hKHgpLE89ZnVuY3Rpb24oKXt9LGo9ISFmdW5jdGlvbigpe3RyeXt2YXIgdD1iLnJlc29sdmUoMSksbj0odC5jb25zdHJ1Y3Rvcj17fSlbZSgxKShcInNwZWNpZXNcIildPWZ1bmN0aW9uKHQpe3QoTyxPKX07cmV0dXJuKF98fFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCkmJnQudGhlbihPKWluc3RhbmNlb2Ygbn1jYXRjaChyKXt9fSgpLFM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD09PW58fHQ9PT1iJiZuPT09aX0sRT1mdW5jdGlvbih0KXt2YXIgbjtyZXR1cm4hKCFsKHQpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZihuPXQudGhlbikpJiZufSxUPWZ1bmN0aW9uKHQpe3JldHVybiBTKGIsdCk/bmV3IFAodCk6bmV3IG8odCl9LFA9bz1mdW5jdGlvbih0KXt2YXIgbixlO3RoaXMucHJvbWlzZT1uZXcgdChmdW5jdGlvbih0LHIpe2lmKHZvaWQgMCE9PW58fHZvaWQgMCE9PWUpdGhyb3cgdyhcIkJhZCBQcm9taXNlIGNvbnN0cnVjdG9yXCIpO249dCxlPXJ9KSx0aGlzLnJlc29sdmU9cChuKSx0aGlzLnJlamVjdD1wKGUpfSxrPWZ1bmN0aW9uKHQpe3RyeXt0KCl9Y2F0Y2gobil7cmV0dXJue2Vycm9yOm59fX0sTD1mdW5jdGlvbih0LG4pe2lmKCF0Ll9uKXt0Ll9uPSEwO3ZhciBlPXQuX2M7ZyhmdW5jdGlvbigpe2Zvcih2YXIgcj10Ll92LG89MT09dC5fcyxpPTAsdT1mdW5jdGlvbihuKXt2YXIgZSxpLHU9bz9uLm9rOm4uZmFpbCxjPW4ucmVzb2x2ZSxmPW4ucmVqZWN0LGE9bi5kb21haW47dHJ5e3U/KG98fCgyPT10Ll9oJiZOKHQpLHQuX2g9MSksdT09PSEwP2U9cjooYSYmYS5lbnRlcigpLGU9dShyKSxhJiZhLmV4aXQoKSksZT09PW4ucHJvbWlzZT9mKHcoXCJQcm9taXNlLWNoYWluIGN5Y2xlXCIpKTooaT1FKGUpKT9pLmNhbGwoZSxjLGYpOmMoZSkpOmYocil9Y2F0Y2gocyl7ZihzKX19O2UubGVuZ3RoPmk7KXUoZVtpKytdKTt0Ll9jPVtdLHQuX249ITEsbiYmIXQuX2gmJk0odCl9KX19LE09ZnVuY3Rpb24odCl7ZC5jYWxsKGMsZnVuY3Rpb24oKXt2YXIgbixlLHIsbz10Ll92O2lmKEYodCkmJihuPWsoZnVuY3Rpb24oKXtfP3guZW1pdChcInVuaGFuZGxlZFJlamVjdGlvblwiLG8sdCk6KGU9Yy5vbnVuaGFuZGxlZHJlamVjdGlvbik/ZSh7cHJvbWlzZTp0LHJlYXNvbjpvfSk6KHI9Yy5jb25zb2xlKSYmci5lcnJvciYmci5lcnJvcihcIlVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvblwiLG8pfSksdC5faD1ffHxGKHQpPzI6MSksdC5fYT12b2lkIDAsbil0aHJvdyBuLmVycm9yfSl9LEY9ZnVuY3Rpb24odCl7aWYoMT09dC5faClyZXR1cm4hMTtmb3IodmFyIG4sZT10Ll9hfHx0Ll9jLHI9MDtlLmxlbmd0aD5yOylpZihuPWVbcisrXSxuLmZhaWx8fCFGKG4ucHJvbWlzZSkpcmV0dXJuITE7cmV0dXJuITB9LE49ZnVuY3Rpb24odCl7ZC5jYWxsKGMsZnVuY3Rpb24oKXt2YXIgbjtfP3guZW1pdChcInJlamVjdGlvbkhhbmRsZWRcIix0KToobj1jLm9ucmVqZWN0aW9uaGFuZGxlZCkmJm4oe3Byb21pc2U6dCxyZWFzb246dC5fdn0pfSl9LEE9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztuLl9kfHwobi5fZD0hMCxuPW4uX3d8fG4sbi5fdj10LG4uX3M9MixuLl9hfHwobi5fYT1uLl9jLnNsaWNlKCkpLEwobiwhMCkpfSxSPWZ1bmN0aW9uKHQpe3ZhciBuLGU9dGhpcztpZighZS5fZCl7ZS5fZD0hMCxlPWUuX3d8fGU7dHJ5e2lmKGU9PT10KXRocm93IHcoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTsobj1FKHQpKT9nKGZ1bmN0aW9uKCl7dmFyIHI9e193OmUsX2Q6ITF9O3RyeXtuLmNhbGwodCxmKFIsciwxKSxmKEEsciwxKSl9Y2F0Y2gobyl7QS5jYWxsKHIsbyl9fSk6KGUuX3Y9dCxlLl9zPTEsTChlLCExKSl9Y2F0Y2gocil7QS5jYWxsKHtfdzplLF9kOiExfSxyKX19fTtqfHwoYj1mdW5jdGlvbih0KXtoKHRoaXMsYixtLFwiX2hcIikscCh0KSxyLmNhbGwodGhpcyk7dHJ5e3QoZihSLHRoaXMsMSksZihBLHRoaXMsMSkpfWNhdGNoKG4pe0EuY2FsbCh0aGlzLG4pfX0scj1mdW5jdGlvbih0KXt0aGlzLl9jPVtdLHRoaXMuX2E9dm9pZCAwLHRoaXMuX3M9MCx0aGlzLl9kPSExLHRoaXMuX3Y9dm9pZCAwLHRoaXMuX2g9MCx0aGlzLl9uPSExfSxyLnByb3RvdHlwZT1lKDgzKShiLnByb3RvdHlwZSx7dGhlbjpmdW5jdGlvbih0LG4pe3ZhciBlPVQoeSh0aGlzLGIpKTtyZXR1cm4gZS5vaz1cImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHx0LGUuZmFpbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuLGUuZG9tYWluPV8/eC5kb21haW46dm9pZCAwLHRoaXMuX2MucHVzaChlKSx0aGlzLl9hJiZ0aGlzLl9hLnB1c2goZSksdGhpcy5fcyYmTCh0aGlzLCExKSxlLnByb21pc2V9LFwiY2F0Y2hcIjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKHZvaWQgMCx0KX19KSxQPWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IHI7dGhpcy5wcm9taXNlPXQsdGhpcy5yZXNvbHZlPWYoUix0LDEpLHRoaXMucmVqZWN0PWYoQSx0LDEpfSkscyhzLkcrcy5XK3MuRiohaix7UHJvbWlzZTpifSksZSgyMCkoYixtKSxlKDg0KShtKSxpPWUoMylbbV0scyhzLlMrcy5GKiFqLG0se3JlamVjdDpmdW5jdGlvbih0KXt2YXIgbj1UKHRoaXMpLGU9bi5yZWplY3Q7cmV0dXJuIGUodCksbi5wcm9taXNlfX0pLHMocy5TK3MuRioodXx8IWopLG0se3Jlc29sdmU6ZnVuY3Rpb24odCl7aWYodCBpbnN0YW5jZW9mIGImJlModC5jb25zdHJ1Y3Rvcix0aGlzKSlyZXR1cm4gdDt2YXIgbj1UKHRoaXMpLGU9bi5yZXNvbHZlO3JldHVybiBlKHQpLG4ucHJvbWlzZX19KSxzKHMuUytzLkYqIShqJiZlKDczKShmdW5jdGlvbih0KXtiLmFsbCh0KVtcImNhdGNoXCJdKE8pfSkpLG0se2FsbDpmdW5jdGlvbih0KXt2YXIgbj10aGlzLGU9VChuKSxyPWUucmVzb2x2ZSxvPWUucmVqZWN0LGk9ayhmdW5jdGlvbigpe3ZhciBlPVtdLGk9MCx1PTE7dih0LCExLGZ1bmN0aW9uKHQpe3ZhciBjPWkrKyxmPSExO2UucHVzaCh2b2lkIDApLHUrKyxuLnJlc29sdmUodCkudGhlbihmdW5jdGlvbih0KXtmfHwoZj0hMCxlW2NdPXQsLS11fHxyKGUpKX0sbyl9KSwtLXV8fHIoZSl9KTtyZXR1cm4gaSYmbyhpLmVycm9yKSxlLnByb21pc2V9LHJhY2U6ZnVuY3Rpb24odCl7dmFyIG49dGhpcyxlPVQobikscj1lLnJlamVjdCxvPWsoZnVuY3Rpb24oKXt2KHQsITEsZnVuY3Rpb24odCl7bi5yZXNvbHZlKHQpLnRoZW4oZS5yZXNvbHZlLHIpfSl9KTtyZXR1cm4gbyYmcihvLmVycm9yKSxlLnByb21pc2V9fSl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDIpLG89ZSg3KSxpPWUoNCksdT1lKDExKSxjPWUoNDEpLGY9ZSg3NikuS0VZLGE9ZSgxMikscz1lKDI4KSxsPWUoMjApLHA9ZSgyMSksaD1lKDEpLHY9ZSgzMikseT1lKDMxKSxkPWUoNzUpLGc9ZSg2NiksbT1lKDcwKSx3PWUoNikseD1lKDkpLGI9ZSgzMCksXz1lKDE5KSxPPWUoMzgpLGo9ZSg4MSksUz1lKDgwKSxFPWUoNSksVD1lKDE1KSxQPVMuZixrPUUuZixMPWouZixNPXIuU3ltYm9sLEY9ci5KU09OLE49RiYmRi5zdHJpbmdpZnksQT1cInByb3RvdHlwZVwiLFI9aChcIl9oaWRkZW5cIiksST1oKFwidG9QcmltaXRpdmVcIiksQz17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxHPXMoXCJzeW1ib2wtcmVnaXN0cnlcIiksVz1zKFwic3ltYm9sc1wiKSxVPXMoXCJvcC1zeW1ib2xzXCIpLEQ9T2JqZWN0W0FdLEs9XCJmdW5jdGlvblwiPT10eXBlb2YgTSxCPXIuUU9iamVjdCxKPSFCfHwhQltBXXx8IUJbQV0uZmluZENoaWxkLFk9aSYmYShmdW5jdGlvbigpe3JldHVybiA3IT1PKGsoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBrKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24odCxuLGUpe3ZhciByPVAoRCxuKTtyJiZkZWxldGUgRFtuXSxrKHQsbixlKSxyJiZ0IT09RCYmayhELG4scil9OmsscT1mdW5jdGlvbih0KXt2YXIgbj1XW3RdPU8oTVtBXSk7cmV0dXJuIG4uX2s9dCxufSx6PUsmJlwic3ltYm9sXCI9PXR5cGVvZiBNLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIE19LEg9ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0PT09RCYmSChVLG4sZSksdyh0KSxuPWIobiwhMCksdyhlKSxvKFcsbik/KGUuZW51bWVyYWJsZT8obyh0LFIpJiZ0W1JdW25dJiYodFtSXVtuXT0hMSksZT1PKGUse2VudW1lcmFibGU6XygwLCExKX0pKToobyh0LFIpfHxrKHQsUixfKDEse30pKSx0W1JdW25dPSEwKSxZKHQsbixlKSk6ayh0LG4sZSl9LFY9ZnVuY3Rpb24odCxuKXt3KHQpO2Zvcih2YXIgZSxyPWcobj14KG4pKSxvPTAsaT1yLmxlbmd0aDtpPm87KUgodCxlPXJbbysrXSxuW2VdKTtyZXR1cm4gdH0sUT1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uP08odCk6VihPKHQpLG4pfSxYPWZ1bmN0aW9uKHQpe3ZhciBuPUMuY2FsbCh0aGlzLHQ9Yih0LCEwKSk7cmV0dXJuISh0aGlzPT09RCYmbyhXLHQpJiYhbyhVLHQpKSYmKCEobnx8IW8odGhpcyx0KXx8IW8oVyx0KXx8byh0aGlzLFIpJiZ0aGlzW1JdW3RdKXx8bil9LCQ9ZnVuY3Rpb24odCxuKXtpZih0PXgodCksbj1iKG4sITApLHQhPT1EfHwhbyhXLG4pfHxvKFUsbikpe3ZhciBlPVAodCxuKTtyZXR1cm4hZXx8IW8oVyxuKXx8byh0LFIpJiZ0W1JdW25dfHwoZS5lbnVtZXJhYmxlPSEwKSxlfX0sWj1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT1MKHgodCkpLHI9W10saT0wO2UubGVuZ3RoPmk7KW8oVyxuPWVbaSsrXSl8fG49PVJ8fG49PWZ8fHIucHVzaChuKTtyZXR1cm4gcn0sdHQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBuLGU9dD09PUQscj1MKGU/VTp4KHQpKSxpPVtdLHU9MDtyLmxlbmd0aD51OykhbyhXLG49clt1KytdKXx8ZSYmIW8oRCxuKXx8aS5wdXNoKFdbbl0pO3JldHVybiBpfTtLfHwoTT1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBNKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciFcIik7dmFyIHQ9cChhcmd1bWVudHMubGVuZ3RoPjA/YXJndW1lbnRzWzBdOnZvaWQgMCksbj1mdW5jdGlvbihlKXt0aGlzPT09RCYmbi5jYWxsKFUsZSksbyh0aGlzLFIpJiZvKHRoaXNbUl0sdCkmJih0aGlzW1JdW3RdPSExKSxZKHRoaXMsdCxfKDEsZSkpfTtyZXR1cm4gaSYmSiYmWShELHQse2NvbmZpZ3VyYWJsZTohMCxzZXQ6bn0pLHEodCl9LGMoTVtBXSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa30pLFMuZj0kLEUuZj1ILGUoMzkpLmY9ai5mPVosZSgxOCkuZj1YLGUoMjYpLmY9dHQsaSYmIWUoMTcpJiZjKEQsXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLFgsITApLHYuZj1mdW5jdGlvbih0KXtyZXR1cm4gcShoKHQpKX0pLHUodS5HK3UuVyt1LkYqIUsse1N5bWJvbDpNfSk7Zm9yKHZhciBudD1cImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzXCIuc3BsaXQoXCIsXCIpLGV0PTA7bnQubGVuZ3RoPmV0OyloKG50W2V0KytdKTtmb3IodmFyIG50PVQoaC5zdG9yZSksZXQ9MDtudC5sZW5ndGg+ZXQ7KXkobnRbZXQrK10pO3UodS5TK3UuRiohSyxcIlN5bWJvbFwiLHtcImZvclwiOmZ1bmN0aW9uKHQpe3JldHVybiBvKEcsdCs9XCJcIik/R1t0XTpHW3RdPU0odCl9LGtleUZvcjpmdW5jdGlvbih0KXtpZih6KHQpKXJldHVybiBkKEcsdCk7dGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgc3ltYm9sIVwiKX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7Sj0hMH0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7Sj0hMX19KSx1KHUuUyt1LkYqIUssXCJPYmplY3RcIix7Y3JlYXRlOlEsZGVmaW5lUHJvcGVydHk6SCxkZWZpbmVQcm9wZXJ0aWVzOlYsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiQsZ2V0T3duUHJvcGVydHlOYW1lczpaLGdldE93blByb3BlcnR5U3ltYm9sczp0dH0pLEYmJnUodS5TK3UuRiooIUt8fGEoZnVuY3Rpb24oKXt2YXIgdD1NKCk7cmV0dXJuXCJbbnVsbF1cIiE9TihbdF0pfHxcInt9XCIhPU4oe2E6dH0pfHxcInt9XCIhPU4oT2JqZWN0KHQpKX0pKSxcIkpTT05cIix7c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe2lmKHZvaWQgMCE9PXQmJiF6KHQpKXtmb3IodmFyIG4sZSxyPVt0XSxvPTE7YXJndW1lbnRzLmxlbmd0aD5vOylyLnB1c2goYXJndW1lbnRzW28rK10pO3JldHVybiBuPXJbMV0sXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKGU9biksIWUmJm0obil8fChuPWZ1bmN0aW9uKHQsbil7aWYoZSYmKG49ZS5jYWxsKHRoaXMsdCxuKSksIXoobikpcmV0dXJuIG59KSxyWzFdPW4sTi5hcHBseShGLHIpfX19KSxNW0FdW0ldfHxlKDgpKE1bQV0sSSxNW0FdLnZhbHVlT2YpLGwoTSxcIlN5bWJvbFwiKSxsKE1hdGgsXCJNYXRoXCIsITApLGwoci5KU09OLFwiSlNPTlwiLCEwKX0sZnVuY3Rpb24odCxuLGUpe2UoMzEpKFwiYXN5bmNJdGVyYXRvclwiKX0sZnVuY3Rpb24odCxuLGUpe2UoMzEpKFwib2JzZXJ2YWJsZVwiKX0sZnVuY3Rpb24odCxuKXtmdW5jdGlvbiBlKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiByKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIG8odCl7aWYocz09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQodCwwKTtpZigocz09PWV8fCFzKSYmc2V0VGltZW91dClyZXR1cm4gcz1zZXRUaW1lb3V0LHNldFRpbWVvdXQodCwwKTt0cnl7cmV0dXJuIHModCwwKX1jYXRjaChuKXt0cnl7cmV0dXJuIHMuY2FsbChudWxsLHQsMCl9Y2F0Y2gobil7cmV0dXJuIHMuY2FsbCh0aGlzLHQsMCl9fX1mdW5jdGlvbiBpKHQpe2lmKGw9PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dCh0KTtpZigobD09PXJ8fCFsKSYmY2xlYXJUaW1lb3V0KXJldHVybiBsPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQodCk7dHJ5e3JldHVybiBsKHQpfWNhdGNoKG4pe3RyeXtyZXR1cm4gbC5jYWxsKG51bGwsdCl9Y2F0Y2gobil7cmV0dXJuIGwuY2FsbCh0aGlzLHQpfX19ZnVuY3Rpb24gdSgpe3kmJmgmJih5PSExLGgubGVuZ3RoP3Y9aC5jb25jYXQodik6ZD0tMSx2Lmxlbmd0aCYmYygpKX1mdW5jdGlvbiBjKCl7aWYoIXkpe3ZhciB0PW8odSk7eT0hMDtmb3IodmFyIG49di5sZW5ndGg7bjspe2ZvcihoPXYsdj1bXTsrK2Q8bjspaCYmaFtkXS5ydW4oKTtkPS0xLG49di5sZW5ndGh9aD1udWxsLHk9ITEsaSh0KX19ZnVuY3Rpb24gZih0LG4pe3RoaXMuZnVuPXQsdGhpcy5hcnJheT1ufWZ1bmN0aW9uIGEoKXt9dmFyIHMsbCxwPXQuZXhwb3J0cz17fTshZnVuY3Rpb24oKXt0cnl7cz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6ZX1jYXRjaCh0KXtzPWV9dHJ5e2w9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpyfWNhdGNoKHQpe2w9cn19KCk7dmFyIGgsdj1bXSx5PSExLGQ9LTE7cC5uZXh0VGljaz1mdW5jdGlvbih0KXt2YXIgbj1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyluW2UtMV09YXJndW1lbnRzW2VdO3YucHVzaChuZXcgZih0LG4pKSwxIT09di5sZW5ndGh8fHl8fG8oYyl9LGYucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LHAudGl0bGU9XCJicm93c2VyXCIscC5icm93c2VyPSEwLHAuZW52PXt9LHAuYXJndj1bXSxwLnZlcnNpb249XCJcIixwLnZlcnNpb25zPXt9LHAub249YSxwLmFkZExpc3RlbmVyPWEscC5vbmNlPWEscC5vZmY9YSxwLnJlbW92ZUxpc3RlbmVyPWEscC5yZW1vdmVBbGxMaXN0ZW5lcnM9YSxwLmVtaXQ9YSxwLmJpbmRpbmc9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHAuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LHAuY2hkaXI9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxwLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbih0LG4sZSl7KGZ1bmN0aW9uKG4pe3ZhciByPVwib2JqZWN0XCI9PXR5cGVvZiBuP246XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGY/c2VsZjp0aGlzLG89ci5yZWdlbmVyYXRvclJ1bnRpbWUmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHIpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIik+PTAsaT1vJiZyLnJlZ2VuZXJhdG9yUnVudGltZTtpZihyLnJlZ2VuZXJhdG9yUnVudGltZT12b2lkIDAsdC5leHBvcnRzPWUoOTgpLG8pci5yZWdlbmVyYXRvclJ1bnRpbWU9aTtlbHNlIHRyeXtkZWxldGUgci5yZWdlbmVyYXRvclJ1bnRpbWV9Y2F0Y2godSl7ci5yZWdlbmVyYXRvclJ1bnRpbWU9dm9pZCAwfX0pLmNhbGwobixmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24odCxuLGUpeyhmdW5jdGlvbihuLGUpeyFmdW5jdGlvbihuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsbixlLHIpe3ZhciBvPU9iamVjdC5jcmVhdGUoKG58fGkpLnByb3RvdHlwZSksdT1uZXcgdihyfHxbXSk7cmV0dXJuIG8uX2ludm9rZT1sKHQsZSx1KSxvfWZ1bmN0aW9uIG8odCxuLGUpe3RyeXtyZXR1cm57dHlwZTpcIm5vcm1hbFwiLGFyZzp0LmNhbGwobixlKX19Y2F0Y2gocil7cmV0dXJue3R5cGU6XCJ0aHJvd1wiLGFyZzpyfX19ZnVuY3Rpb24gaSgpe31mdW5jdGlvbiB1KCl7fWZ1bmN0aW9uIGMoKXt9ZnVuY3Rpb24gZih0KXtbXCJuZXh0XCIsXCJ0aHJvd1wiLFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obil7dFtuXT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faW52b2tlKG4sdCl9fSl9ZnVuY3Rpb24gYSh0KXt0aGlzLmFyZz10fWZ1bmN0aW9uIHModCl7ZnVuY3Rpb24gbihlLHIsaSx1KXt2YXIgYz1vKHRbZV0sdCxyKTtpZihcInRocm93XCIhPT1jLnR5cGUpe3ZhciBmPWMuYXJnLHM9Zi52YWx1ZTtyZXR1cm4gcyBpbnN0YW5jZW9mIGE/UHJvbWlzZS5yZXNvbHZlKHMuYXJnKS50aGVuKGZ1bmN0aW9uKHQpe24oXCJuZXh0XCIsdCxpLHUpfSxmdW5jdGlvbih0KXtuKFwidGhyb3dcIix0LGksdSl9KTpQcm9taXNlLnJlc29sdmUocykudGhlbihmdW5jdGlvbih0KXtmLnZhbHVlPXQsaShmKX0sdSl9dShjLmFyZyl9ZnVuY3Rpb24gcih0LGUpe2Z1bmN0aW9uIHIoKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocixvKXtuKHQsZSxyLG8pfSl9cmV0dXJuIGk9aT9pLnRoZW4ocixyKTpyKCl9XCJvYmplY3RcIj09dHlwZW9mIGUmJmUuZG9tYWluJiYobj1lLmRvbWFpbi5iaW5kKG4pKTt2YXIgaTt0aGlzLl9pbnZva2U9cn1mdW5jdGlvbiBsKHQsbixlKXt2YXIgcj1qO3JldHVybiBmdW5jdGlvbihpLHUpe2lmKHI9PT1FKXRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7aWYocj09PVQpe2lmKFwidGhyb3dcIj09PWkpdGhyb3cgdTtyZXR1cm4gZCgpfWZvcig7Oyl7dmFyIGM9ZS5kZWxlZ2F0ZTtpZihjKXtpZihcInJldHVyblwiPT09aXx8XCJ0aHJvd1wiPT09aSYmYy5pdGVyYXRvcltpXT09PWcpe2UuZGVsZWdhdGU9bnVsbDt2YXIgZj1jLml0ZXJhdG9yW1wicmV0dXJuXCJdO2lmKGYpe3ZhciBhPW8oZixjLml0ZXJhdG9yLHUpO2lmKFwidGhyb3dcIj09PWEudHlwZSl7aT1cInRocm93XCIsdT1hLmFyZztjb250aW51ZX19aWYoXCJyZXR1cm5cIj09PWkpY29udGludWV9dmFyIGE9byhjLml0ZXJhdG9yW2ldLGMuaXRlcmF0b3IsdSk7aWYoXCJ0aHJvd1wiPT09YS50eXBlKXtlLmRlbGVnYXRlPW51bGwsaT1cInRocm93XCIsdT1hLmFyZztjb250aW51ZX1pPVwibmV4dFwiLHU9Zzt2YXIgcz1hLmFyZztpZighcy5kb25lKXJldHVybiByPVMscztlW2MucmVzdWx0TmFtZV09cy52YWx1ZSxlLm5leHQ9Yy5uZXh0TG9jLGUuZGVsZWdhdGU9bnVsbH1pZihcIm5leHRcIj09PWkpZS5zZW50PWUuX3NlbnQ9dTtlbHNlIGlmKFwidGhyb3dcIj09PWkpe2lmKHI9PT1qKXRocm93IHI9VCx1O2UuZGlzcGF0Y2hFeGNlcHRpb24odSkmJihpPVwibmV4dFwiLHU9Zyl9ZWxzZVwicmV0dXJuXCI9PT1pJiZlLmFicnVwdChcInJldHVyblwiLHUpO3I9RTt2YXIgYT1vKHQsbixlKTtpZihcIm5vcm1hbFwiPT09YS50eXBlKXtyPWUuZG9uZT9UOlM7dmFyIHM9e3ZhbHVlOmEuYXJnLGRvbmU6ZS5kb25lfTtpZihhLmFyZyE9PVApcmV0dXJuIHM7ZS5kZWxlZ2F0ZSYmXCJuZXh0XCI9PT1pJiYodT1nKX1lbHNlXCJ0aHJvd1wiPT09YS50eXBlJiYocj1ULGk9XCJ0aHJvd1wiLHU9YS5hcmcpfX19ZnVuY3Rpb24gcCh0KXt2YXIgbj17dHJ5TG9jOnRbMF19OzEgaW4gdCYmKG4uY2F0Y2hMb2M9dFsxXSksMiBpbiB0JiYobi5maW5hbGx5TG9jPXRbMl0sbi5hZnRlckxvYz10WzNdKSx0aGlzLnRyeUVudHJpZXMucHVzaChuKX1mdW5jdGlvbiBoKHQpe3ZhciBuPXQuY29tcGxldGlvbnx8e307bi50eXBlPVwibm9ybWFsXCIsZGVsZXRlIG4uYXJnLHQuY29tcGxldGlvbj1ufWZ1bmN0aW9uIHYodCl7dGhpcy50cnlFbnRyaWVzPVt7dHJ5TG9jOlwicm9vdFwifV0sdC5mb3JFYWNoKHAsdGhpcyksdGhpcy5yZXNldCghMCl9ZnVuY3Rpb24geSh0KXtpZih0KXt2YXIgbj10W3hdO2lmKG4pcmV0dXJuIG4uY2FsbCh0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm5leHQpcmV0dXJuIHQ7aWYoIWlzTmFOKHQubGVuZ3RoKSl7dmFyIGU9LTEscj1mdW5jdGlvbiBvKCl7Zm9yKDsrK2U8dC5sZW5ndGg7KWlmKG0uY2FsbCh0LGUpKXJldHVybiBvLnZhbHVlPXRbZV0sby5kb25lPSExLG87cmV0dXJuIG8udmFsdWU9ZyxvLmRvbmU9ITAsb307cmV0dXJuIHIubmV4dD1yfX1yZXR1cm57bmV4dDpkfX1mdW5jdGlvbiBkKCl7cmV0dXJue3ZhbHVlOmcsZG9uZTohMH19dmFyIGcsbT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHc9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sP1N5bWJvbDp7fSx4PXcuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLGI9dy50b1N0cmluZ1RhZ3x8XCJAQHRvU3RyaW5nVGFnXCIsXz1cIm9iamVjdFwiPT10eXBlb2YgdCxPPW4ucmVnZW5lcmF0b3JSdW50aW1lO2lmKE8pcmV0dXJuIHZvaWQoXyYmKHQuZXhwb3J0cz1PKSk7Tz1uLnJlZ2VuZXJhdG9yUnVudGltZT1fP3QuZXhwb3J0czp7fSxPLndyYXA9cjt2YXIgaj1cInN1c3BlbmRlZFN0YXJ0XCIsUz1cInN1c3BlbmRlZFlpZWxkXCIsRT1cImV4ZWN1dGluZ1wiLFQ9XCJjb21wbGV0ZWRcIixQPXt9LGs9Yy5wcm90b3R5cGU9aS5wcm90b3R5cGU7dS5wcm90b3R5cGU9ay5jb25zdHJ1Y3Rvcj1jLGMuY29uc3RydWN0b3I9dSxjW2JdPXUuZGlzcGxheU5hbWU9XCJHZW5lcmF0b3JGdW5jdGlvblwiLE8uaXNHZW5lcmF0b3JGdW5jdGlvbj1mdW5jdGlvbih0KXt2YXIgbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yO3JldHVybiEhbiYmKG49PT11fHxcIkdlbmVyYXRvckZ1bmN0aW9uXCI9PT0obi5kaXNwbGF5TmFtZXx8bi5uYW1lKSl9LE8ubWFyaz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGMpOih0Ll9fcHJvdG9fXz1jLGIgaW4gdHx8KHRbYl09XCJHZW5lcmF0b3JGdW5jdGlvblwiKSksdC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShrKSx0fSxPLmF3cmFwPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgYSh0KX0sZihzLnByb3RvdHlwZSksTy5hc3luYz1mdW5jdGlvbih0LG4sZSxvKXt2YXIgaT1uZXcgcyhyKHQsbixlLG8pKTtyZXR1cm4gTy5pc0dlbmVyYXRvckZ1bmN0aW9uKG4pP2k6aS5uZXh0KCkudGhlbihmdW5jdGlvbih0KXtyZXR1cm4gdC5kb25lP3QudmFsdWU6aS5uZXh0KCl9KX0sZihrKSxrW3hdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGtbYl09XCJHZW5lcmF0b3JcIixrLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEdlbmVyYXRvcl1cIn0sTy5rZXlzPWZ1bmN0aW9uKHQpe3ZhciBuPVtdO2Zvcih2YXIgZSBpbiB0KW4ucHVzaChlKTtyZXR1cm4gbi5yZXZlcnNlKCksZnVuY3Rpb24gcigpe2Zvcig7bi5sZW5ndGg7KXt2YXIgZT1uLnBvcCgpO2lmKGUgaW4gdClyZXR1cm4gci52YWx1ZT1lLHIuZG9uZT0hMSxyfXJldHVybiByLmRvbmU9ITAsXG5yfX0sTy52YWx1ZXM9eSx2LnByb3RvdHlwZT17Y29uc3RydWN0b3I6dixyZXNldDpmdW5jdGlvbih0KXtpZih0aGlzLnByZXY9MCx0aGlzLm5leHQ9MCx0aGlzLnNlbnQ9dGhpcy5fc2VudD1nLHRoaXMuZG9uZT0hMSx0aGlzLmRlbGVnYXRlPW51bGwsdGhpcy50cnlFbnRyaWVzLmZvckVhY2goaCksIXQpZm9yKHZhciBuIGluIHRoaXMpXCJ0XCI9PT1uLmNoYXJBdCgwKSYmbS5jYWxsKHRoaXMsbikmJiFpc05hTigrbi5zbGljZSgxKSkmJih0aGlzW25dPWcpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5kb25lPSEwO3ZhciB0PXRoaXMudHJ5RW50cmllc1swXSxuPXQuY29tcGxldGlvbjtpZihcInRocm93XCI9PT1uLnR5cGUpdGhyb3cgbi5hcmc7cmV0dXJuIHRoaXMucnZhbH0sZGlzcGF0Y2hFeGNlcHRpb246ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihuLHIpe3JldHVybiBpLnR5cGU9XCJ0aHJvd1wiLGkuYXJnPXQsZS5uZXh0PW4sISFyfWlmKHRoaXMuZG9uZSl0aHJvdyB0O2Zvcih2YXIgZT10aGlzLHI9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO3I+PTA7LS1yKXt2YXIgbz10aGlzLnRyeUVudHJpZXNbcl0saT1vLmNvbXBsZXRpb247aWYoXCJyb290XCI9PT1vLnRyeUxvYylyZXR1cm4gbihcImVuZFwiKTtpZihvLnRyeUxvYzw9dGhpcy5wcmV2KXt2YXIgdT1tLmNhbGwobyxcImNhdGNoTG9jXCIpLGM9bS5jYWxsKG8sXCJmaW5hbGx5TG9jXCIpO2lmKHUmJmMpe2lmKHRoaXMucHJldjxvLmNhdGNoTG9jKXJldHVybiBuKG8uY2F0Y2hMb2MsITApO2lmKHRoaXMucHJldjxvLmZpbmFsbHlMb2MpcmV0dXJuIG4oby5maW5hbGx5TG9jKX1lbHNlIGlmKHUpe2lmKHRoaXMucHJldjxvLmNhdGNoTG9jKXJldHVybiBuKG8uY2F0Y2hMb2MsITApfWVsc2V7aWYoIWMpdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7aWYodGhpcy5wcmV2PG8uZmluYWxseUxvYylyZXR1cm4gbihvLmZpbmFsbHlMb2MpfX19fSxhYnJ1cHQ6ZnVuY3Rpb24odCxuKXtmb3IodmFyIGU9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO2U+PTA7LS1lKXt2YXIgcj10aGlzLnRyeUVudHJpZXNbZV07aWYoci50cnlMb2M8PXRoaXMucHJldiYmbS5jYWxsKHIsXCJmaW5hbGx5TG9jXCIpJiZ0aGlzLnByZXY8ci5maW5hbGx5TG9jKXt2YXIgbz1yO2JyZWFrfX1vJiYoXCJicmVha1wiPT09dHx8XCJjb250aW51ZVwiPT09dCkmJm8udHJ5TG9jPD1uJiZuPD1vLmZpbmFsbHlMb2MmJihvPW51bGwpO3ZhciBpPW8/by5jb21wbGV0aW9uOnt9O3JldHVybiBpLnR5cGU9dCxpLmFyZz1uLG8/dGhpcy5uZXh0PW8uZmluYWxseUxvYzp0aGlzLmNvbXBsZXRlKGkpLFB9LGNvbXBsZXRlOmZ1bmN0aW9uKHQsbil7aWYoXCJ0aHJvd1wiPT09dC50eXBlKXRocm93IHQuYXJnO1wiYnJlYWtcIj09PXQudHlwZXx8XCJjb250aW51ZVwiPT09dC50eXBlP3RoaXMubmV4dD10LmFyZzpcInJldHVyblwiPT09dC50eXBlPyh0aGlzLnJ2YWw9dC5hcmcsdGhpcy5uZXh0PVwiZW5kXCIpOlwibm9ybWFsXCI9PT10LnR5cGUmJm4mJih0aGlzLm5leHQ9bil9LGZpbmlzaDpmdW5jdGlvbih0KXtmb3IodmFyIG49dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO24+PTA7LS1uKXt2YXIgZT10aGlzLnRyeUVudHJpZXNbbl07aWYoZS5maW5hbGx5TG9jPT09dClyZXR1cm4gdGhpcy5jb21wbGV0ZShlLmNvbXBsZXRpb24sZS5hZnRlckxvYyksaChlKSxQfX0sXCJjYXRjaFwiOmZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7bj49MDstLW4pe3ZhciBlPXRoaXMudHJ5RW50cmllc1tuXTtpZihlLnRyeUxvYz09PXQpe3ZhciByPWUuY29tcGxldGlvbjtpZihcInRocm93XCI9PT1yLnR5cGUpe3ZhciBvPXIuYXJnO2goZSl9cmV0dXJuIG99fXRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKX0sZGVsZWdhdGVZaWVsZDpmdW5jdGlvbih0LG4sZSl7cmV0dXJuIHRoaXMuZGVsZWdhdGU9e2l0ZXJhdG9yOnkodCkscmVzdWx0TmFtZTpuLG5leHRMb2M6ZX0sUH19fShcIm9iamVjdFwiPT10eXBlb2Ygbj9uOlwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmP3NlbGY6dGhpcyl9KS5jYWxsKG4sZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSxlKDk2KSl9XSk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8XG4gICAgICAgICAgICAgIChtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGNvbnRyb2xQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICBjb250cm9sT3JkZXI6IFtcbiAgICAgICAgJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICdoaWRkZW4nLFxuICAgICAgICAncGFyYWdyYXBoJyxcbiAgICAgICAgJ251bWJlcicsXG4gICAgICAgICdyYWRpby1ncm91cCcsXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAndGV4dCcsXG4gICAgICAgICd0ZXh0YXJlYSdcbiAgICAgIF0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgLy8gQXJyYXkgb2YgZmllbGRzIHRvIGRpc2FibGVcbiAgICAgIGRpc2FibGVGaWVsZHM6IFtdLFxuICAgICAgZGlzYWJsZWRBdHRyczogW10sXG4gICAgICBkaXNhYmxlZEFjdGlvbkJ1dHRvbnM6IFtdLFxuICAgICAgZWRpdE9uQWRkOiBmYWxzZSxcbiAgICAgIC8vIFVuZWRpdGFibGUgZmllbGRzIG9yIG90aGVyIGNvbnRlbnQgeW91IHdvdWxkIGxpa2UgdG8gYXBwZWFyXG4gICAgICAvLyBiZWZvcmUgYW5kIGFmdGVyIHJlZ3VsYXIgZmllbGRzOlxuICAgICAgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGZpZWxkcyB2YWx1ZXNcbiAgICAgIC8vIGV4OlxuICAgICAgLy8gZGVmYXVsdEZpZWxkczogW3tcbiAgICAgIC8vICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcbiAgICAgIC8vICAgbmFtZTogJ2ZpcnN0LW5hbWUnLFxuICAgICAgLy8gICByZXF1aXJlZDogJ3RydWUnLFxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ1lvdXIgZmlyc3QgbmFtZScsXG4gICAgICAvLyAgIHR5cGU6ICd0ZXh0J1xuICAgICAgLy8gfSwge1xuICAgICAgLy8gICBsYWJlbDogJ1Bob25lJyxcbiAgICAgIC8vICAgbmFtZTogJ3Bob25lJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdIb3cgY2FuIHdlIHJlYWNoIHlvdT8nLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH1dLFxuICAgICAgZGVmYXVsdEZpZWxkczogW10sXG4gICAgICBmaWVsZHM6IFtdLFxuICAgICAgZmllbGRSZW1vdmVXYXJuOiBmYWxzZSxcbiAgICAgIGlucHV0U2V0czogW10sXG4gICAgICByb2xlczoge1xuICAgICAgICAxOiAnQWRtaW5pc3RyYXRvcidcbiAgICAgIH0sXG4gICAgICBub3RpZnk6IHtcbiAgICAgICAgZXJyb3I6IG1lc3NhZ2UgPT4gY29uc29sZS5lcnJvcihtZXNzYWdlKSxcbiAgICAgICAgc3VjY2VzczogbWVzc2FnZSA9PiBjb25zb2xlLmxvZyhtZXNzYWdlKSxcbiAgICAgICAgd2FybmluZzogbWVzc2FnZSA9PiBjb25zb2xlLndhcm4obWVzc2FnZSlcbiAgICAgIH0sXG4gICAgICBvblNhdmU6IChldnQsIGZvcm1EYXRhKSA9PiBudWxsLFxuICAgICAgb25DbGVhckFsbDogKCkgPT4gbnVsbCxcbiAgICAgIHByZXBlbmQ6IGZhbHNlLFxuICAgICAgc29ydGFibGVDb250cm9sczogZmFsc2UsXG4gICAgICBzdGlja3lDb250cm9sczoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZXM6IHt9LFxuICAgICAgc2hvd0FjdGlvbkJ1dHRvbnM6IHRydWUsXG4gICAgICB0eXBlVXNlckRpc2FibGVkQXR0cnM6IHt9LFxuICAgICAgdHlwZVVzZXJBdHRyczoge30sXG4gICAgICB0eXBlVXNlckV2ZW50czoge30sXG4gICAgICBwcmVmaXg6ICdmb3JtLWJ1aWxkZXItJ1xuICAgIH07XG5cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJMThuID0ge1xuICAgICAgbG9jYXRpb246ICdodHRwczovL2Zvcm1idWlsZGVyLm9ubGluZS9hc3NldHMvbGFuZy8nLFxuICAgICAgbGFuZ3M6IFtcbiAgICAgICAgJ2VuLVVTJ1xuICAgICAgXSxcbiAgICAgIHByZWxvYWRlZDoge1xuICAgICAgICAnZW4tVVMnOiB7XG4gICAgICAgICAgYWRkT3B0aW9uOiAnQWRkIE9wdGlvbiArJyxcbiAgICAgICAgICBhbGxGaWVsZHNSZW1vdmVkOiAnQWxsIGZpZWxkcyB3ZXJlIHJlbW92ZWQuJyxcbiAgICAgICAgICBhbGxvd011bHRpcGxlRmlsZXM6ICdBbGxvdyB1c2VycyB0byB1cGxvYWQgbXVsdGlwbGUgZmlsZXMnLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogJ0F1dG9jb21wbGV0ZScsXG4gICAgICAgICAgYnV0dG9uOiAnQnV0dG9uJyxcbiAgICAgICAgICBjYW5ub3RCZUVtcHR5OiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHknLFxuICAgICAgICAgIGNoZWNrYm94R3JvdXA6ICdDaGVja2JveCBHcm91cCcsXG4gICAgICAgICAgY2hlY2tib3g6ICdDaGVja2JveCcsXG4gICAgICAgICAgY2hlY2tib3hlczogJ0NoZWNrYm94ZXMnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NsYXNzJyxcbiAgICAgICAgICBjbGVhckFsbE1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xlYXIgYWxsIGZpZWxkcz8nLFxuICAgICAgICAgIGNsZWFyOiAnQ2xlYXInLFxuICAgICAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdDb250ZW50JyxcbiAgICAgICAgICBjb3B5OiAnQ29weSBUbyBDbGlwYm9hcmQnLFxuICAgICAgICAgIGNvcHlCdXR0b246ICcmIzQzOycsXG4gICAgICAgICAgY29weUJ1dHRvblRvb2x0aXA6ICdDb3B5JyxcbiAgICAgICAgICBkYXRlRmllbGQ6ICdEYXRlIEZpZWxkJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbHAgVGV4dCcsXG4gICAgICAgICAgZGVzY3JpcHRpb25GaWVsZDogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICBkZXZNb2RlOiAnRGV2ZWxvcGVyIE1vZGUnLFxuICAgICAgICAgIGVkaXROYW1lczogJ0VkaXQgTmFtZXMnLFxuICAgICAgICAgIGVkaXRvclRpdGxlOiAnRm9ybSBFbGVtZW50cycsXG4gICAgICAgICAgZWRpdFhNTDogJ0VkaXQgWE1MJyxcbiAgICAgICAgICBlbmFibGVPdGhlcjogJ0VuYWJsZSAmcXVvdDtPdGhlciZxdW90OycsXG4gICAgICAgICAgZW5hYmxlT3RoZXJNc2c6ICdMZXQgdXNlcnMgdG8gZW50ZXIgYW4gdW5saXN0ZWQgb3B0aW9uJyxcbiAgICAgICAgICBmaWVsZE5vbkVkaXRhYmxlOiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZWRpdGVkLicsXG4gICAgICAgICAgZmllbGRSZW1vdmVXYXJuaW5nOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGZpZWxkPycsXG4gICAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgICBmb3JtVXBkYXRlZDogJ0Zvcm0gVXBkYXRlZCcsXG4gICAgICAgICAgZ2V0U3RhcnRlZDogJ0RyYWcgYSBmaWVsZCBmcm9tIHRoZSByaWdodCB0byB0aGlzIGFyZWEnLFxuICAgICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgICAgaGlkZTogJ0VkaXQnLFxuICAgICAgICAgIGhpZGRlbjogJ0hpZGRlbiBJbnB1dCcsXG4gICAgICAgICAgaW5saW5lOiAnSW5saW5lJyxcbiAgICAgICAgICBpbmxpbmVEZXNjOiAnRGlzcGxheSB7dHlwZX0gaW5saW5lJyxcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICBsYWJlbEVtcHR5OiAnRmllbGQgTGFiZWwgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgICBsaW1pdFJvbGU6ICdMaW1pdCBhY2Nlc3MgdG8gb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyByb2xlczonLFxuICAgICAgICAgIG1hbmRhdG9yeTogJ01hbmRhdG9yeScsXG4gICAgICAgICAgbWF4bGVuZ3RoOiAnTWF4IExlbmd0aCcsXG4gICAgICAgICAgbWluT3B0aW9uTWVzc2FnZTogJ1RoaXMgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mIDIgb3B0aW9ucycsXG4gICAgICAgICAgbXVsdGlwbGVGaWxlczogJ011bHRpcGxlIEZpbGVzJyxcbiAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgbm86ICdObycsXG4gICAgICAgICAgbm9GaWVsZHNUb0NsZWFyOiAnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsXG4gICAgICAgICAgbnVtYmVyOiAnTnVtYmVyJyxcbiAgICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICAgIG9uOiAnT24nLFxuICAgICAgICAgIG9wdGlvbjogJ09wdGlvbicsXG4gICAgICAgICAgb3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgICAgb3B0aW9uVmFsdWVQbGFjZWhvbGRlcjogJ1ZhbHVlJyxcbiAgICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgICAgcGFyYWdyYXBoOiAnUGFyYWdyYXBoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIudmFsdWUnOiAnVmFsdWUnLFxuICAgICAgICAgICdwbGFjZWhvbGRlci5sYWJlbCc6ICdMYWJlbCcsXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyLnRleHQnOiAnJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIudGV4dGFyZWEnOiAnJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIuZW1haWwnOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIucGxhY2Vob2xkZXInOiAnJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIuY2xhc3NOYW1lJzogJ3NwYWNlIHNlcGFyYXRlZCBjbGFzc2VzJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXIucGFzc3dvcmQnOiAnRW50ZXIgeW91ciBwYXNzd29yZCcsXG4gICAgICAgICAgcHJldmlldzogJ1ByZXZpZXcnLFxuICAgICAgICAgIHJhZGlvR3JvdXA6ICdSYWRpbyBHcm91cCcsXG4gICAgICAgICAgcmFkaW86ICdSYWRpbycsXG4gICAgICAgICAgcmVtb3ZlTWVzc2FnZTogJ1JlbW92ZSBFbGVtZW50JyxcbiAgICAgICAgICByZW1vdmVPcHRpb246ICdSZW1vdmUgT3B0aW9uJyxcbiAgICAgICAgICByZW1vdmU6ICcmIzIxNTsnLFxuICAgICAgICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQnLFxuICAgICAgICAgIHJpY2hUZXh0OiAnUmljaCBUZXh0IEVkaXRvcicsXG4gICAgICAgICAgcm9sZXM6ICdBY2Nlc3MnLFxuICAgICAgICAgIHJvd3M6ICdSb3dzJyxcbiAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgc2VsZWN0T3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICAgIHNlbGVjdDogJ1NlbGVjdCcsXG4gICAgICAgICAgc2VsZWN0Q29sb3I6ICdTZWxlY3QgQ29sb3InLFxuICAgICAgICAgIHNlbGVjdGlvbnNNZXNzYWdlOiAnQWxsb3cgTXVsdGlwbGUgU2VsZWN0aW9ucycsXG4gICAgICAgICAgc2l6ZTogJ1NpemUnLFxuICAgICAgICAgICdzaXplLnhzJzogJ0V4dHJhIFNtYWxsJyxcbiAgICAgICAgICAnc2l6ZS5zbSc6ICdTbWFsbCcsXG4gICAgICAgICAgJ3NpemUubSc6ICdEZWZhdWx0JyxcbiAgICAgICAgICAnc2l6ZS5sZyc6ICdMYXJnZScsXG4gICAgICAgICAgc3R5bGU6ICdTdHlsZScsXG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICBidG46IHtcbiAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnRGVmYXVsdCcsXG4gICAgICAgICAgICAgIGRhbmdlcjogJ0RhbmdlcicsXG4gICAgICAgICAgICAgIGluZm86ICdJbmZvJyxcbiAgICAgICAgICAgICAgcHJpbWFyeTogJ1ByaW1hcnknLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAnU3VjY2VzcycsXG4gICAgICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VidHlwZTogJ1R5cGUnLFxuICAgICAgICAgIHRleHQ6ICdUZXh0IEZpZWxkJyxcbiAgICAgICAgICB0ZXh0QXJlYTogJ1RleHQgQXJlYScsXG4gICAgICAgICAgdG9nZ2xlOiAnVG9nZ2xlJyxcbiAgICAgICAgICB3YXJuaW5nOiAnV2FybmluZyEnLFxuICAgICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICAgIHZpZXdKU09OOiAneyAgfScsXG4gICAgICAgICAgdmlld1hNTDogJyZsdDsvJmd0OycsXG4gICAgICAgICAgeWVzOiAnWWVzJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHt9O1xuIiwiZXhwb3J0IGNvbnN0IGluc3RhbmNlRGF0YSA9IHt9O1xuXG5leHBvcnQgY2xhc3MgRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGZvcm1JRCkge1xuICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcbiAgICB0aGlzLmZvcm1JRCA9IGZvcm1JRDtcbiAgICB0aGlzLmxheW91dCA9ICcnO1xuICAgIGluc3RhbmNlRGF0YVtmb3JtSURdID0gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlZmllbGRzID0ge307XG4iLCJcbmV4cG9ydCBjb25zdCBpbnN0YW5jZURvbSA9IHt9O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdWJ0eXBlcyA9IHtcbiAgICAgIHRleHQ6IFsndGV4dCcsICdwYXNzd29yZCcsICdlbWFpbCcsICdjb2xvcicsICd0ZWwnXSxcbiAgICAgIGhlYWRlcjogWydoMScsICdoMicsICdoMyddLFxuICAgICAgYnV0dG9uOiBbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgICAgIHBhcmFncmFwaDogWydwJywgJ2FkZHJlc3MnLCAnYmxvY2txdW90ZScsICdjYW52YXMnLCAnb3V0cHV0J10sXG4gICAgICB0ZXh0YXJlYTogWyd0ZXh0YXJlYScsICdxdWlsbCddXG4gICAgfTtcblxuXG5leHBvcnQgY29uc3QgZW1wdHkgPSBlbGVtZW50ID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSAoZWxlbXMsIHRlcm0sIHNob3cgPSB0cnVlKSA9PiB7XG4gIGxldCBmaWx0ZXJlZEVsZW1zID0gW107XG4gIGxldCB0b2dnbGUgPSBbJ25vbmUnLCAnYmxvY2snXTtcblxuICBpZiAoc2hvdykge1xuICAgIHRvZ2dsZSA9IHRvZ2dsZS5yZXZlcnNlKCk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gZWxlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgdHh0ID0gZWxlbXNbaV0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodHh0LmluZGV4T2YodGVybS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSB0b2dnbGVbMF07XG4gICAgICBmaWx0ZXJlZEVsZW1zLnB1c2goZWxlbXNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gdG9nZ2xlWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1zO1xufTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbkZpZWxkcyA9IFtcbiAgICAgICdzZWxlY3QnLFxuICAgICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICdjaGVja2JveCcsXG4gICAgICAncmFkaW8tZ3JvdXAnLFxuICAgICAgJ2F1dG9jb21wbGV0ZSdcbiAgICBdO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uRmllbGRzUmVnRXggPSBuZXcgUmVnRXhwKGAoJHtvcHRpb25GaWVsZHMuam9pbignfCcpfSlgKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbSB7XG4gIGNvbnN0cnVjdG9yKGZvcm1JRCkge1xuICAgIHRoaXMub3B0aW9uRmllbGRzID0gb3B0aW9uRmllbGRzO1xuICAgIHRoaXMub3B0aW9uRmllbGRzUmVnRXggPSBvcHRpb25GaWVsZHNSZWdFeDtcblxuICAgIHRoaXMuc3VidHlwZXMgPSBkZWZhdWx0U3VidHlwZXM7XG5cbiAgICAvKipcbiAgICAgKiBVdGlsIHRvIHJlbW92ZSBjb250ZW50cyBvZiBET00gT2JqZWN0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XG4gICAgICogQHJldHVybiB7T2JqZWN0fSBlbGVtZW50IHdpdGggaXRzIGNoaWxkcmVuIHJlbW92ZWRcbiAgICAgKi9cbiAgICB0aGlzLmVtcHR5ID0gZW1wdHk7XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIHNob3cgYW4gQXJyYXkgb3IgSFRNTENvbGxlY3Rpb24gb2YgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gICBlbGVtc1xuICAgICAqIEBwYXJhbSAge1N0cmluZ30gIHRlcm0gIG1hdGNoIHRleHRDb250ZW50IHRvIHRoaXMgdGVybVxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IHNob3cgIG9yIGhpZGUgZWxlbWVudHNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICBmaWx0ZXJlZCBlbGVtZW50c1xuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gZmlsdGVyO1xuXG4gICAgaW5zdGFuY2VEb21bZm9ybUlEXSA9IHRoaXM7XG4gICAgcmV0dXJuIGluc3RhbmNlRG9tW2Zvcm1JRF07XG4gIH1cbn1cbiIsIi8qKlxuICogRm9ybSBCdWlsZGVyIGV2ZW50c1xuICogQHJldHVybiB7T2JqZWN0fSB2YXJpb3VzIGV2ZW50cyB0byBiZSB0cmlnZ2VyXG4gKi9cbi8vIGZ1bmN0aW9uIGZiRXZlbnRzKCl7XG4gIGNvbnN0IGV2ZW50cyA9IHt9O1xuXG4gIGV2ZW50cy5sb2FkZWQgPSBuZXcgRXZlbnQoJ2xvYWRlZCcpO1xuICBldmVudHMudmlld0RhdGEgPSBuZXcgRXZlbnQoJ3ZpZXdEYXRhJyk7XG4gIGV2ZW50cy51c2VyRGVjbGluZWQgPSBuZXcgRXZlbnQoJ3VzZXJEZWNsaW5lZCcpO1xuICBldmVudHMubW9kYWxDbG9zZWQgPSBuZXcgRXZlbnQoJ21vZGFsQ2xvc2VkJyk7XG4gIGV2ZW50cy5tb2RhbE9wZW5lZCA9IG5ldyBFdmVudCgnbW9kYWxPcGVuZWQnKTtcbiAgZXZlbnRzLmZvcm1TYXZlZCA9IG5ldyBFdmVudCgnZm9ybVNhdmVkJyk7XG4gIGV2ZW50cy5maWVsZEFkZGVkID0gbmV3IEV2ZW50KCdmaWVsZEFkZGVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbW92ZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVtb3ZlZCcpO1xuICBldmVudHMuZmllbGRSZW5kZXJlZCA9IG5ldyBFdmVudCgnZmllbGRSZW5kZXJlZCcpO1xuXG4vLyAgIHJldHVybiBldmVudHM7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcbiIsImltcG9ydCBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHtcbiAgRGF0YSxcbiAgYXZhaWxhYmxlZmllbGRzIGFzIGFGaWVsZHNcbn0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCBtaTE4biBmcm9tICdtaTE4bic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge2RlZmF1bHRPcHRpb25zLCBkZWZhdWx0STE4biwgY29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5cbnJlcXVpcmUoJy4vcG9seWZpbGxzLmpzJykuZGVmYXVsdDtcblxubGV0IGluc3RhbmNlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG5jb25zdCBGb3JtQnVpbGRlciA9IGZ1bmN0aW9uKG9wdHMsIGVsZW1lbnQpIHtcbiAgY29uc3QgZm9ybUJ1aWxkZXIgPSB0aGlzO1xuICBjb25zdCBpMThuID0gbWkxOG4uY3VycmVudDtcbiAgY29uc3QgZm9ybUlEID0gJ2ZybWItJyArIGluc3RhbmNlVGltZSsrO1xuICBjb25zdCBkYXRhID0gbmV3IERhdGEoZm9ybUlEKTtcbiAgY29uc3QgZCA9IG5ldyBEb20oZm9ybUlEKTtcbiAgY29uc3QgaGVscGVycyA9IG5ldyBIZWxwZXJzKGZvcm1JRCk7XG4gIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG5cbiAgY29uc3Qgb3JpZ2luYWxPcHRzID0gb3B0cztcblxuICBvcHRzID0gaGVscGVycy5wcm9jZXNzT3B0aW9ucyhvcHRzKTtcblxuICBjb25zdCBzdWJ0eXBlcyA9IGNvbmZpZy5zdWJ0eXBlcyA9IGhlbHBlcnMucHJvY2Vzc1N1YnR5cGVzKG9wdHMuc3VidHlwZXMpO1xuICBoZWxwZXJzLmVkaXRvclVJKGZvcm1JRCk7XG5cbiAgbGV0ICRzdGFnZSA9ICQoZC5zdGFnZSk7XG5cbiAgZGF0YS5sYXlvdXQgPSBoZWxwZXJzLmVkaXRvckxheW91dChvcHRzLmNvbnRyb2xQb3NpdGlvbik7XG4gIGRhdGEuZm9ybUlEID0gZm9ybUlEO1xuICBkYXRhLmxhc3RJRCA9IGAke2RhdGEuZm9ybUlEfS1mbGQtMWA7XG5cbiAgbGV0IGZybWJGaWVsZHMgPSBoZWxwZXJzLm9yZGVyRmllbGRzKG9wdHMuZmllbGRzKTtcblxuICBpZiAob3B0cy5kaXNhYmxlRmllbGRzKSB7XG4gICAgLy8gcmVtb3ZlIGRpc2FibGVkRmllbGRzXG4gICAgZnJtYkZpZWxkcyA9IGZybWJGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkoZmllbGQuYXR0cnMudHlwZSwgb3B0cy5kaXNhYmxlRmllbGRzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChvcHRzLnNvcnRhYmxlQ29udHJvbHMpIHtcbiAgICBkLmNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZW5hYmxlZCcpO1xuICB9XG5cbiAgbGV0ICRjYlVMID0gJChkLmNvbnRyb2xzKTtcblxuICAvLyBMb29wIHRocm91Z2ggZm1yYkZpZWxkc1xuICB1dGlscy5mb3JFYWNoKGZybWJGaWVsZHMsIChpKSA9PiB7XG4gICAgbGV0IHthdHRycywgaWNvbiwgLi4uZmllbGR9ID0gZnJtYkZpZWxkc1tpXTtcbiAgICBsZXQgY29udHJvbExhYmVsID0gZmllbGQubGFiZWw7XG4gICAgbGV0IGljb25DbGFzc05hbWUgPSAhaWNvbiA/IGBpY29uLSR7YXR0cnMubmFtZSB8fCBhdHRycy50eXBlfWAgOiAnJztcbiAgICBpZiAoaWNvbikge1xuICAgICAgY29udHJvbExhYmVsID0gYDxzcGFuIGNsYXNzPVwiY29udHJvbC1pY29uXCI+JHtpY29ufTwvc3Bhbj4ke2ZpZWxkLmxhYmVsfWA7XG4gICAgfVxuICAgIGxldCBuZXdGaWVsZENvbnRyb2wgPSBtKCdsaScsXG4gICAgICBtKCdzcGFuJywgY29udHJvbExhYmVsKSxcbiAgICAgIHtjbGFzc05hbWU6IGAke2ljb25DbGFzc05hbWV9IGlucHV0LWNvbnRyb2wgaW5wdXQtY29udHJvbC0ke2l9YH1cbiAgICApO1xuXG4gICAgYUZpZWxkc1thdHRycy50eXBlXSA9IGZybWJGaWVsZHNbaV07XG4gICAgbmV3RmllbGRDb250cm9sLmRhdGFzZXQudHlwZSA9IGF0dHJzLnR5cGU7XG4gICAgZC5jb250cm9scy5hcHBlbmRDaGlsZChuZXdGaWVsZENvbnRyb2wpO1xuICB9KTtcblxuICBpZiAob3B0cy5pbnB1dFNldHMubGVuZ3RoKSB7XG4gICAgJCgnPGxpLz4nLCB7J2NsYXNzJzogJ2ZiLXNlcGFyYXRvcid9KS5odG1sKCc8aHI+JykuYXBwZW5kVG8oJGNiVUwpO1xuICAgIG9wdHMuaW5wdXRTZXRzLmZvckVhY2goKHNldCwgaSkgPT4ge1xuICAgICAgc2V0Lm5hbWUgPSBzZXQubmFtZSB8fCB1dGlscy5tYWtlQ2xhc3NOYW1lKHNldC5sYWJlbCk7XG4gICAgICBsZXQgaW5wdXRTZXQgPSBtKCdsaScsIHNldC5sYWJlbCwge1xuICAgICAgICBjbGFzc05hbWU6IGBpbnB1dC1zZXQtY29udHJvbCBpbnB1dC1zZXQtJHtpfWAsXG4gICAgICAgIHR5cGU6IHNldC5uYW1lXG4gICAgICB9KTtcbiAgICAgICQoaW5wdXRTZXQpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNvcnRhYmxlIGZpZWxkc1xuICAkc3RhZ2Uuc29ydGFibGUoe1xuICAgIGN1cnNvcjogJ21vdmUnLFxuICAgIG9wYWNpdHk6IDAuOSxcbiAgICByZXZlcnQ6IDE1MCxcbiAgICBiZWZvcmVTdG9wOiAoZXZ0LCB1aSkgPT4gaGVscGVycy5iZWZvcmVTdG9wLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgc3RhcnQ6IChldnQsIHVpKSA9PiBoZWxwZXJzLnN0YXJ0TW92aW5nLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgc3RvcDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RvcE1vdmluZy5jYWxsKGhlbHBlcnMsIGV2dCwgdWkpLFxuICAgIGNhbmNlbDogJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhLCAuZGlzYWJsZWQtZmllbGQsIC5mb3JtLWVsZW1lbnRzLCAuYnRuLCBidXR0b24nLFxuICAgIHBsYWNlaG9sZGVyOiAnZnJtYi1wbGFjZWhvbGRlcicsXG4gIH0pO1xuXG4gIC8vIENvbnRyb2xCb3ggd2l0aCBkaWZmZXJlbnQgZmllbGRzXG4gICRjYlVMLnNvcnRhYmxlKHtcbiAgICBoZWxwZXI6ICdjbG9uZScsXG4gICAgb3BhY2l0eTogMC45LFxuICAgIGNvbm5lY3RXaXRoOiAkc3RhZ2UsXG4gICAgY2FuY2VsOiAnLmZiLXNlcGFyYXRvcicsXG4gICAgY3Vyc29yOiAnbW92ZScsXG4gICAgc2Nyb2xsOiBmYWxzZSxcbiAgICBwbGFjZWhvbGRlcjogJ3VpLXN0YXRlLWhpZ2hsaWdodCcsXG4gICAgc3RhcnQ6IChldnQsIHVpKSA9PiBoZWxwZXJzLnN0YXJ0TW92aW5nLmNhbGwoaGVscGVycywgZXZ0LCB1aSksXG4gICAgc3RvcDogKGV2dCwgdWkpID0+IGhlbHBlcnMuc3RvcE1vdmluZy5jYWxsKGhlbHBlcnMsIGV2dCwgdWkpLFxuICAgIHJldmVydDogMTUwLFxuICAgIGJlZm9yZVN0b3A6IChldnQsIHVpKSA9PiBoZWxwZXJzLmJlZm9yZVN0b3AuY2FsbChoZWxwZXJzLCBldnQsIHVpKSxcbiAgICBkaXN0YW5jZTogMyxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgaWYgKGhlbHBlcnMuZG9DYW5jZWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodWkuaXRlbS5wYXJlbnQoKVswXSA9PT0gZC5zdGFnZSkge1xuICAgICAgICBoZWxwZXJzLmRvQ2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgcHJvY2Vzc0NvbnRyb2wodWkuaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWxwZXJzLnNldEZpZWxkT3JkZXIoJGNiVUwpO1xuICAgICAgICBoZWxwZXJzLmRvQ2FuY2VsID0gIW9wdHMuc29ydGFibGVDb250cm9scztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGxldCBwcm9jZXNzQ29udHJvbCA9IGNvbnRyb2wgPT4ge1xuICAgIGlmIChjb250cm9sWzBdLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQtc2V0LWNvbnRyb2wnKSkge1xuICAgICAgbGV0IGlucHV0U2V0cyA9IFtdO1xuICAgICAgbGV0IGlucHV0U2V0ID0gb3B0cy5pbnB1dFNldHMuZmluZChzZXQgPT5cbiAgICAgICAgKHNldC5uYW1lID09PSBjb250cm9sWzBdLmdldEF0dHJpYnV0ZSgndHlwZScpKSk7XG4gICAgICBpZiAoaW5wdXRTZXQgJiYgaW5wdXRTZXQuc2hvd0hlYWRlcikge1xuICAgICAgICBsZXQgaGVhZGVyID0ge1xuICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICAgIHN1YnR5cGU6ICdoMicsXG4gICAgICAgICAgaWQ6IGlucHV0U2V0Lm5hbWUsXG4gICAgICAgICAgbGFiZWw6IGlucHV0U2V0LmxhYmVsXG4gICAgICAgIH07XG4gICAgICAgIGlucHV0U2V0cy5wdXNoKGhlYWRlcik7XG4gICAgICB9XG4gICAgICBpbnB1dFNldHMucHVzaCguLi5pbnB1dFNldC5maWVsZHMpO1xuICAgICAgaW5wdXRTZXRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBwcmVwRmllbGRWYXJzKGZpZWxkLCB0cnVlKTtcbiAgICAgICAgaWYgKGhlbHBlcnMuc3RvcEluZGV4IHx8IGhlbHBlcnMuc3RvcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgaGVscGVycy5zdG9wSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXBGaWVsZFZhcnMoY29udHJvbCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGQuZWRpdG9yV3JhcCA9IG0oJ2RpdicsIG51bGwsIHtcbiAgICBpZDogYCR7ZGF0YS5mb3JtSUR9LWZvcm0td3JhcGAsXG4gICAgY2xhc3NOYW1lOiAnZm9ybS13cmFwIGZvcm0tYnVpbGRlcicgKyB1dGlscy5tb2JpbGVDbGFzcygpXG4gIH0pO1xuXG4gIGxldCAkZWRpdG9yV3JhcCA9ICQoZC5lZGl0b3JXcmFwKTtcblxuICBsZXQgY2JXcmFwID0gbSgnZGl2JywgZC5jb250cm9scywge1xuICAgIGlkOiBgJHtkYXRhLmZvcm1JRH0tY2Itd3JhcGAsXG4gICAgY2xhc3NOYW1lOiAnY2Itd3JhcCAnICsgZGF0YS5sYXlvdXQuY29udHJvbHNcbiAgfSk7XG5cbiAgaWYgKG9wdHMuc2hvd0FjdGlvbkJ1dHRvbnMpIHtcbiAgICBjb25zdCBidXR0b25zID0gb3B0cy5hY3Rpb25CdXR0b25zLm1hcChidG5EYXRhID0+IHtcbiAgICAgIGlmIChidG5EYXRhLmlkICYmIG9wdHMuZGlzYWJsZWRBY3Rpb25CdXR0b25zLmluZGV4T2YoYnRuRGF0YS5pZCkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBoZWxwZXJzLnByb2Nlc3NBY3Rpb25CdXR0b25zKGJ0bkRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGZvcm1BY3Rpb25zID0gZC5mb3JtQWN0aW9ucyA9IG0oJ2RpdicsIGJ1dHRvbnMsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Zvcm0tYWN0aW9ucyBidG4tZ3JvdXAnXG4gICAgfSk7XG5cbiAgICBjYldyYXAuYXBwZW5kQ2hpbGQoZm9ybUFjdGlvbnMpO1xuICB9XG5cbiAgbGV0IHN0YWdlV3JhcCA9IG0oJ2RpdicsIFtkLnN0YWdlLCBjYldyYXBdLCB7XG4gICAgaWQ6IGAke2RhdGEuZm9ybUlEfS1zdGFnZS13cmFwYCxcbiAgICBjbGFzc05hbWU6ICdzdGFnZS13cmFwICcgKyBkYXRhLmxheW91dC5zdGFnZVxuICB9KTtcblxuICAkZWRpdG9yV3JhcC5hcHBlbmQoc3RhZ2VXcmFwLCBjYldyYXApO1xuXG4gIGlmIChlbGVtZW50LnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAkKGVsZW1lbnQpLmFwcGVuZCgkZWRpdG9yV3JhcCk7XG4gIH0gZWxzZSB7XG4gICAgJChlbGVtZW50KS5yZXBsYWNlV2l0aCgkZWRpdG9yV3JhcCk7XG4gIH1cblxuICBsZXQgc2F2ZUFuZFVwZGF0ZSA9IHV0aWxzLmRlYm91bmNlKGV2dCA9PiB7XG4gICAgaWYgKGV2dCkge1xuICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5dXAnICYmIGV2dC50YXJnZXQubmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsZXQgJGZpZWxkID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpO1xuICAgICAgaGVscGVycy51cGRhdGVQcmV2aWV3KCRmaWVsZCk7XG4gICAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNhdmUgZmllbGQgb24gY2hhbmdlXG4gICRzdGFnZS5vbignY2hhbmdlIGJsdXIga2V5dXAnLCAnLmZvcm0tZWxlbWVudHMgaW5wdXQsIC5mb3JtLWVsZW1lbnRzIHNlbGVjdCwgLmZvcm0tZWxlbWVudHMgdGV4dGFyZWEnLCBzYXZlQW5kVXBkYXRlKTtcblxuICAkKCdsaScsIGQuY29udHJvbHMpLmNsaWNrKGV2dCA9PiB7XG4gICAgbGV0ICRjb250cm9sID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCdsaScpO1xuICAgIGhlbHBlcnMuc3RvcEluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHByb2Nlc3NDb250cm9sKCRjb250cm9sKTtcbiAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcbiAgfSk7XG5cbiAgLy8gQWRkIGFwcGVuZCBhbmQgcHJlcGVuZCBvcHRpb25zIGlmIG5lY2Vzc2FyeVxuICBsZXQgbm9uRWRpdGFibGVGaWVsZHMgPSAoKSA9PiB7XG4gICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG4gICAgY29uc3QgZGlzYWJsZWRGaWVsZCA9IHR5cGUgPT5cbiAgICB1dGlscy5tYXJrdXAoJ2xpJywgb3B0c1t0eXBlXSwge1xuICAgICAgY2xhc3NOYW1lOiBgZGlzYWJsZWQtZmllbGQgZm9ybS0ke3R5cGV9YFxuICAgIH0pO1xuXG4gICAgaWYgKG9wdHMucHJlcGVuZCAmJiAhJCgnLmRpc2FibGVkLWZpZWxkLmZvcm0tcHJlcGVuZCcsIGQuc3RhZ2UpLmxlbmd0aCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICRzdGFnZS5wcmVwZW5kKGRpc2FibGVkRmllbGQoJ3ByZXBlbmQnKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kICYmICEkKCcuZGlzYWJsZWQtZmllbGQuZm9ybS0uYXBwZW5kJywgZC5zdGFnZSkubGVuZ3RoKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgICAgJHN0YWdlLmFwcGVuZChkaXNhYmxlZEZpZWxkKCdhcHBlbmQnKSk7XG4gICAgfVxuXG4gICAgaGVscGVycy5kaXNhYmxlZFRUKGQuc3RhZ2UpO1xuICAgIHJldHVybiBjYW5jZWxBcnJheS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSk7XG4gIH07XG5cbiAgbGV0IHByZXBGaWVsZFZhcnMgPSBmdW5jdGlvbigkZmllbGQsIGlzTmV3ID0gZmFsc2UpIHtcbiAgICBsZXQgZmllbGQgPSB7fTtcbiAgICBpZiAoJGZpZWxkIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICBsZXQge2F0dHJzLCBsYWJlbH0gPSBhRmllbGRzWyRmaWVsZFswXS5kYXRhc2V0LnR5cGVdO1xuICAgICAgaWYgKGFGaWVsZHNbJGZpZWxkWzBdLmRhdGFzZXQudHlwZV0pIHtcbiAgICAgICAgZmllbGQgPSBPYmplY3QuYXNzaWduKHt9LCBhdHRycyk7XG4gICAgICAgIGZpZWxkLmxhYmVsID0gbGFiZWw7XG4gICAgICB9IGVsc2UgeyAvLyBpcyBkYXRhVHlwZSBYTUxcbiAgICAgICAgbGV0IGF0dHJzID0gJGZpZWxkWzBdLmF0dHJpYnV0ZXM7XG4gICAgICAgIGlmICghaXNOZXcpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZXMgPSAkZmllbGQuY2hpbGRyZW4oKS5tYXAoKGluZGV4LCBlbGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBsYWJlbDogJChlbGVtKS50ZXh0KCksXG4gICAgICAgICAgICAgIHZhbHVlOiAkKGVsZW0pLmF0dHIoJ3ZhbHVlJyksXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiBCb29sZWFuKCQoZWxlbSkuYXR0cignc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBmaWVsZFthdHRyc1tpXS5uYW1lXSA9IGF0dHJzW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgJGZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkLm5hbWUpIHtcbiAgICAgIGZpZWxkLm5hbWUgPSB1dGlscy5uYW1lQXR0cihmaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTmV3ICYmIHV0aWxzLmluQXJyYXkoZmllbGQudHlwZSxcbiAgICAgIFsndGV4dCcsXG4gICAgICAgJ251bWJlcicsXG4gICAgICAgJ2ZpbGUnLFxuICAgICAgICdkYXRlJyxcbiAgICAgICAnc2VsZWN0JyxcbiAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICdhdXRvY29tcGxldGUnXSkpIHtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzTmFtZSB8fCAnZm9ybS1jb250cm9sJztcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gZmllbGQuY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIGxldCBtYXRjaCA9IC8oPzpefFxccylidG4tKC4qPykoPzpcXHN8JCkvZy5leGVjKGZpZWxkLmNsYXNzTmFtZSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBmaWVsZC5zdHlsZSA9IG1hdGNoWzFdO1xuICAgIH1cblxuICAgIGFwcGVuZE5ld0ZpZWxkKGZpZWxkLCBpc05ldyk7XG5cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmZpZWxkQWRkZWQpO1xuICAgIH1cblxuICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICB9O1xuXG4gIC8vIFBhcnNlIHNhdmVkIFhNTCB0ZW1wbGF0ZSBkYXRhXG4gIGxldCBsb2FkRmllbGRzID0gZnVuY3Rpb24oZm9ybURhdGEpIHtcbiAgICBmb3JtRGF0YSA9IGhlbHBlcnMuZ2V0RGF0YShmb3JtRGF0YSk7XG4gICAgaWYgKGZvcm1EYXRhICYmIGZvcm1EYXRhLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gdXRpbHMudHJpbU9iaihmb3JtRGF0YVtpXSk7XG4gICAgICAgIHByZXBGaWVsZFZhcnMoZmllbGREYXRhKTtcbiAgICAgIH1cbiAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgIH0gZWxzZSBpZiAob3B0cy5kZWZhdWx0RmllbGRzICYmIG9wdHMuZGVmYXVsdEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIC8vIExvYWQgZGVmYXVsdCBmaWVsZHMgaWYgbm9uZSBhcmUgc2V0XG4gICAgICBvcHRzLmRlZmF1bHRGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBwcmVwRmllbGRWYXJzKGZpZWxkKSk7XG4gICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICB9IGVsc2UgaWYgKCFvcHRzLnByZXBlbmQgJiYgIW9wdHMuYXBwZW5kKSB7XG4gICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgIHN0YWdlV3JhcC5kYXRhc2V0LmNvbnRlbnQgPSBpMThuLmdldFN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgaWYgKG5vbkVkaXRhYmxlRmllbGRzKCkpIHtcbiAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIGRhdGEgZm9yIGZpZWxkIHdpdGggb3B0aW9ucyBbc2VsZWN0LCBjaGVja2JveC1ncm91cCwgcmFkaW8tZ3JvdXBdXG4gICAqXG4gICAqIEB0b2RvICAgcmVmYWN0b3IgdGhpcyBuYXN0eSB+Y3JhcH4gY29kZSwgaXRzIGFjdHVhbGx5IHBhaW5mdWwgdG8gbG9vayBhdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZpZWxkIG9wdGlvbnMgbWFya3VwXG4gICAqL1xuICBsZXQgZmllbGRPcHRpb25zID0gZnVuY3Rpb24oZmllbGREYXRhKSB7XG4gICAgbGV0IG9wdGlvbkFjdGlvbnMgPSBbXG4gICAgICAgIHV0aWxzLm1hcmt1cCgnYScsIGkxOG4uYWRkT3B0aW9uLCB7Y2xhc3NOYW1lOiAnYWRkIGFkZC1vcHQnfSlcbiAgICAgIF07XG4gICAgbGV0IGZpZWxkT3B0aW9ucyA9IFtcbiAgICAgIGA8bGFiZWwgY2xhc3M9XCJmYWxzZS1sYWJlbFwiPiR7aTE4bi5zZWxlY3RPcHRpb25zfTwvbGFiZWw+YFxuICAgIF07XG4gICAgY29uc3QgaXNNdWx0aXBsZSA9IGZpZWxkRGF0YS5tdWx0aXBsZSB8fCAoZmllbGREYXRhLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpO1xuICAgIGNvbnN0IG9wdGlvbkRhdGFUZW1wbGF0ZSA9IGxhYmVsID0+IHtcbiAgICAgIGxldCBvcHRpb25EYXRhID0ge1xuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIHZhbHVlOiB1dGlscy5oeXBoZW5DYXNlKGxhYmVsKVxuICAgICAgfTtcblxuICAgICAgaWYgKGZpZWxkRGF0YS50eXBlICE9PSAnYXV0b2NvbXBsZXRlJykge1xuICAgICAgICBvcHRpb25EYXRhLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcHRpb25EYXRhO1xuICAgIH07XG5cbiAgICBpZiAoIWZpZWxkRGF0YS52YWx1ZXMgfHwgIWZpZWxkRGF0YS52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgZGVmYXVsdE9wdENvdW50ID0gdXRpbHMuaW5BcnJheShmaWVsZERhdGEudHlwZSwgWydjaGVja2JveC1ncm91cCcsICdjaGVja2JveCddKSA/IFsxXSA6IFsxLCAyLCAzXTtcbiAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBkZWZhdWx0T3B0Q291bnQubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGAke2kxOG4ub3B0aW9ufSAke2luZGV4fWA7XG4gICAgICAgIHJldHVybiBvcHRpb25EYXRhVGVtcGxhdGUobGFiZWwpO1xuICAgICAgfSk7XG5cbiAgICBsZXQgZmlyc3RPcHRpb24gPSBmaWVsZERhdGEudmFsdWVzWzBdO1xuICAgICAgaWYgKGZpcnN0T3B0aW9uLmhhc093blByb3BlcnR5KCdzZWxlY3RlZCcpKSB7XG4gICAgICAgIGZpcnN0T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZW5zdXJlIG9wdGlvbiBkYXRhIGlzIGhhcyBhbGwgcmVxdWlyZWQga2V5c1xuICAgICAgZmllbGREYXRhLnZhbHVlcy5mb3JFYWNoKG9wdGlvbiA9PiBPYmplY3QuYXNzaWduKHt9LCB7c2VsZWN0ZWQ6IGZhbHNlfSwgb3B0aW9uKSk7XG4gICAgfVxuXG4gICAgZmllbGRPcHRpb25zLnB1c2goJzxkaXYgY2xhc3M9XCJzb3J0YWJsZS1vcHRpb25zLXdyYXBcIj4nKTtcblxuICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8b2wgY2xhc3M9XCJzb3J0YWJsZS1vcHRpb25zXCI+Jyk7XG4gICAgdXRpbHMuZm9yRWFjaChmaWVsZERhdGEudmFsdWVzLCBpID0+IHtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKHNlbGVjdEZpZWxkT3B0aW9ucyhmaWVsZERhdGEubmFtZSwgZmllbGREYXRhLnZhbHVlc1tpXSwgaXNNdWx0aXBsZSkpO1xuICAgIH0pO1xuICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8L29sPicpO1xuICAgIGZpZWxkT3B0aW9ucy5wdXNoKHV0aWxzLm1hcmt1cCgnZGl2Jywgb3B0aW9uQWN0aW9ucywge2NsYXNzTmFtZTogJ29wdGlvbi1hY3Rpb25zJ30pLm91dGVySFRNTCk7XG4gICAgZmllbGRPcHRpb25zLnB1c2goJzwvZGl2PicpO1xuXG4gICAgcmV0dXJuIHV0aWxzLm1hcmt1cCgnZGl2JywgZmllbGRPcHRpb25zLmpvaW4oJycpLCB7Y2xhc3NOYW1lOiAnZm9ybS1ncm91cCBmaWVsZC1vcHRpb25zJ30pLm91dGVySFRNTDtcbiAgfTtcblxuICBjb25zdCBkZWZhdWx0RmllbGRBdHRycyA9IHR5cGUgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRBdHRycyA9IFtcbiAgICAgICdyZXF1aXJlZCcsXG4gICAgICAnbGFiZWwnLFxuICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICdwbGFjZWhvbGRlcicsXG4gICAgICAnY2xhc3NOYW1lJyxcbiAgICAgICduYW1lJyxcbiAgICAgICdhY2Nlc3MnLFxuICAgICAgJ3ZhbHVlJ1xuICAgIF07XG4gICAgbGV0IG5vVmFsRmllbGRzID0gWydoZWFkZXInLCAncGFyYWdyYXBoJywgJ2ZpbGUnLCAnYXV0b2NvbXBsZXRlJ10uY29uY2F0KGQub3B0aW9uRmllbGRzKTtcbiAgICBsZXQgdmFsdWVGaWVsZCA9ICF1dGlscy5pbkFycmF5KHR5cGUsIG5vVmFsRmllbGRzKTtcblxuICAgIGNvbnN0IHR5cGVBdHRyc01hcCA9IHtcbiAgICAgIGF1dG9jb21wbGV0ZTogZGVmYXVsdEF0dHJzLmNvbmNhdChbXG4gICAgICAgICdvcHRpb25zJyxcbiAgICAgIF0pLFxuICAgICAgYnV0dG9uOiBbXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdzdWJ0eXBlJyxcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgJ2NsYXNzTmFtZScsXG4gICAgICAgICduYW1lJyxcbiAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgJ2FjY2VzcycsXG4gICAgICBdLFxuICAgICAgY2hlY2tib3g6IFtcbiAgICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgJ3RvZ2dsZScsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAnY2xhc3NOYW1lJyxcbiAgICAgICAgJ25hbWUnLFxuICAgICAgICAnYWNjZXNzJyxcbiAgICAgICAgJ290aGVyJyxcbiAgICAgICAgJ29wdGlvbnMnLFxuICAgICAgXSxcbiAgICAgIHRleHQ6IGRlZmF1bHRBdHRycy5jb25jYXQoW1xuICAgICAgICAnc3VidHlwZScsXG4gICAgICAgICdtYXhsZW5ndGgnLFxuICAgICAgXSksXG4gICAgICBkYXRlOiBkZWZhdWx0QXR0cnMsXG4gICAgICBmaWxlOiBkZWZhdWx0QXR0cnMuY29uY2F0KFtcbiAgICAgICAgJ211bHRpcGxlJ1xuICAgICAgXSksXG4gICAgICBoZWFkZXI6IFtcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgJ3N1YnR5cGUnLFxuICAgICAgICAnY2xhc3NOYW1lJyxcbiAgICAgICAgJ2FjY2VzcycsXG4gICAgICBdLFxuICAgICAgaGlkZGVuOiBbXG4gICAgICAgICduYW1lJyxcbiAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgJ2FjY2VzcycsXG4gICAgICBdLFxuICAgICAgcGFyYWdyYXBoOiBbXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdzdWJ0eXBlJyxcbiAgICAgICAgJ2NsYXNzTmFtZScsXG4gICAgICAgICdhY2Nlc3MnLFxuICAgICAgXSxcbiAgICAgIG51bWJlcjogZGVmYXVsdEF0dHJzLmNvbmNhdChbXG4gICAgICAgICdtaW4nLFxuICAgICAgICAnbWF4JyxcbiAgICAgICAgJ3N0ZXAnLFxuICAgICAgXSksXG4gICAgICBzZWxlY3Q6IGRlZmF1bHRBdHRycy5jb25jYXQoW1xuICAgICAgICAnbXVsdGlwbGUnLFxuICAgICAgICAnb3B0aW9ucycsXG4gICAgICBdKSxcbiAgICAgIHRleHRhcmVhOiBkZWZhdWx0QXR0cnMuY29uY2F0KFtcbiAgICAgICAgJ3N1YnR5cGUnLFxuICAgICAgICAnbWF4bGVuZ3RoJyxcbiAgICAgICAgJ3Jvd3MnLFxuICAgICAgXSksXG5cbiAgICB9O1xuXG4gICAgdHlwZUF0dHJzTWFwWydjaGVja2JveC1ncm91cCddID0gdHlwZUF0dHJzTWFwLmNoZWNrYm94O1xuICAgIHR5cGVBdHRyc01hcFsncmFkaW8tZ3JvdXAnXSA9IHR5cGVBdHRyc01hcC5jaGVja2JveDtcblxuICAgIGxldCB0eXBlQXR0cnMgPSB0eXBlQXR0cnNNYXBbdHlwZV07XG5cbiAgICBpZiAodHlwZSA9PT0gJ3JhZGlvLWdyb3VwJykge1xuICAgICAgdXRpbHMucmVtb3ZlKCd0b2dnbGUnLCB0eXBlQXR0cnMpO1xuICAgIH1cblxuICAgIC8vIEhlbHAgVGV4dCAvIERlc2NyaXB0aW9uIEZpZWxkXG4gICAgaWYgKHV0aWxzLmluQXJyYXkodHlwZSwgWydoZWFkZXInLCAncGFyYWdyYXBoJywgJ2J1dHRvbiddKSkge1xuICAgICAgdXRpbHMucmVtb3ZlKCdkZXNjcmlwdGlvbicsIHR5cGVBdHRycyk7XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZUZpZWxkKSB7XG4gICAgICB1dGlscy5yZW1vdmUoJ3ZhbHVlJywgdHlwZUF0dHJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZUF0dHJzIHx8IGRlZmF1bHRBdHRycztcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgdGhlIGVkaXRhYmxlIHByb3BlcnRpZXMgZm9yIHRoZSBmaWVsZFxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHZhbHVlcyBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgYWR2YW5jZWQgZmllbGRzXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgIG1hcmt1cCBmb3IgYWR2YW5jZWQgZmllbGRzXG4gICAqL1xuICBsZXQgYWR2RmllbGRzID0gdmFsdWVzID0+IHtcbiAgICBsZXQgYWR2RmllbGRzID0gW107XG4gICAgbGV0IGZpZWxkQXR0cnMgPSBkZWZhdWx0RmllbGRBdHRycyh2YWx1ZXMudHlwZSk7XG4gICAgY29uc3QgYWR2RmllbGRNYXAgPSB7XG4gICAgICByZXF1aXJlZDogKCkgPT4gcmVxdWlyZWRGaWVsZCh2YWx1ZXMpLFxuICAgICAgdG9nZ2xlOiAoKSA9PiBib29sQXR0cmlidXRlKCd0b2dnbGUnLCB2YWx1ZXMsIHtmaXJzdDogaTE4bi50b2dnbGV9KSxcbiAgICAgIGlubGluZTogKCkgPT4ge1xuICAgICAgICBsZXQgbGFiZWxzID0ge1xuICAgICAgICAgIGZpcnN0OiBpMThuLmlubGluZSxcbiAgICAgICAgICBzZWNvbmQ6IG1pMThuLmdldCgnaW5saW5lRGVzYycsIHZhbHVlcy50eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKSlcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYm9vbEF0dHJpYnV0ZSgnaW5saW5lJywgdmFsdWVzLCBsYWJlbHMpO1xuICAgICAgfSxcbiAgICAgIGxhYmVsOiAoKSA9PiB0ZXh0QXR0cmlidXRlKCdsYWJlbCcsIHZhbHVlcyksXG4gICAgICBkZXNjcmlwdGlvbjogKCkgPT4gdGV4dEF0dHJpYnV0ZSgnZGVzY3JpcHRpb24nLCB2YWx1ZXMpLFxuICAgICAgc3VidHlwZTogKCkgPT4gc2VsZWN0QXR0cmlidXRlKCdzdWJ0eXBlJywgdmFsdWVzLCBzdWJ0eXBlc1t2YWx1ZXMudHlwZV0pLFxuICAgICAgc3R5bGU6ICgpID0+IGJ0blN0eWxlcyh2YWx1ZXMuc3R5bGUpLFxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRleHRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdmFsdWVzKSxcbiAgICAgIHJvd3M6ICgpID0+IG51bWJlckF0dHJpYnV0ZSgncm93cycsIHZhbHVlcyksXG4gICAgICBjbGFzc05hbWU6ICgpID0+IHRleHRBdHRyaWJ1dGUoJ2NsYXNzTmFtZScsIHZhbHVlcyksXG4gICAgICBuYW1lOiAoKSA9PiB0ZXh0QXR0cmlidXRlKCduYW1lJywgdmFsdWVzKSxcbiAgICAgIHZhbHVlOiAoKSA9PiB0ZXh0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlcyksXG4gICAgICBtYXhsZW5ndGg6ICgpID0+IG51bWJlckF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgdmFsdWVzKSxcbiAgICAgIGFjY2VzczogKCkgPT4ge1xuICAgICAgICBsZXQgcm9sZXNEaXNwbGF5ID0gdmFsdWVzLnJvbGUgIT09IHVuZGVmaW5lZCA/ICdzdHlsZT1cImRpc3BsYXk6YmxvY2tcIicgOiAnJztcbiAgICAgICAgbGV0IGF2YWlsYWJsZVJvbGVzID0gW1xuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYXZhaWxhYmxlLXJvbGVzXCIgJHtyb2xlc0Rpc3BsYXl9PmBcbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChrZXkgaW4gb3B0cy5yb2xlcykge1xuICAgICAgICAgIGlmIChvcHRzLnJvbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGxldCBjaGVja2VkID0gdXRpbHMuaW5BcnJheShrZXksIHJvbGVzKSA/ICdjaGVja2VkJyA6ICcnO1xuICAgICAgICAgICAgbGV0IHJvbGVJZCA9IGBmbGQtJHtkYXRhLmxhc3RJRH0tcm9sZXMtJHtrZXl9YDtcbiAgICAgICAgICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicm9sZXNbXVwiIHZhbHVlPVwiJHtrZXl9XCIgaWQ9XCIke3JvbGVJZH1cIiAke2NoZWNrZWR9IGNsYXNzPVwicm9sZXMtZmllbGRcIiAvPiA8bGFiZWwgZm9yPVwiJHtyb2xlSWR9XCI+JHtvcHRzLnJvbGVzW2tleV19PC9sYWJlbD48YnIvPmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKCc8L2Rpdj4nKTtcbiAgICAgICAgbGV0IGFjY2Vzc0xhYmVscyA9IHtmaXJzdDogaTE4bi5yb2xlcywgc2Vjb25kOiBpMThuLmxpbWl0Um9sZSwgY29udGVudDogYXZhaWxhYmxlUm9sZXMuam9pbignJyl9O1xuXG4gICAgICAgIHJldHVybiBib29sQXR0cmlidXRlKCdhY2Nlc3MnLCB2YWx1ZXMsIGFjY2Vzc0xhYmVscyk7XG4gICAgICB9LFxuICAgICAgb3RoZXI6ICgpID0+IGJvb2xBdHRyaWJ1dGUoJ290aGVyJywgdmFsdWVzLCB7Zmlyc3Q6IGkxOG4uZW5hYmxlT3RoZXIsIHNlY29uZDogaTE4bi5lbmFibGVPdGhlck1zZ30pLFxuICAgICAgb3B0aW9uczogKCkgPT4gZmllbGRPcHRpb25zKHZhbHVlcylcbiAgICB9O1xuICAgIGxldCBrZXk7XG4gICAgbGV0IHJvbGVzID0gdmFsdWVzLnJvbGUgIT09IHVuZGVmaW5lZCA/IHZhbHVlcy5yb2xlLnNwbGl0KCcsJykgOiBbXTtcbiAgICBsZXQgbnVtQXR0cnMgPSBbJ21pbicsICdtYXgnLCAnc3RlcCddO1xuXG4gICAgaWYgKHZhbHVlcy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgbnVtQXR0cnMuZm9yRWFjaChudW1BdHRyID0+IHtcbiAgICAgICAgYWR2RmllbGRNYXBbbnVtQXR0cl0gPSAoKSA9PiBudW1iZXJBdHRyaWJ1dGUobnVtQXR0ciwgdmFsdWVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICBhZHZGaWVsZE1hcFsnbXVsdGlwbGUnXSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxhYmVscyA9IHtcbiAgICAgICAgICBmaXJzdDogaTE4bi5tdWx0aXBsZUZpbGVzLFxuICAgICAgICAgIHNlY29uZDogaTE4bi5hbGxvd011bHRpcGxlRmlsZXNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCBsYWJlbHMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICBhZHZGaWVsZE1hcFsnbXVsdGlwbGUnXSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCB7Zmlyc3Q6ICcgJywgc2Vjb25kOiBpMThuLnNlbGVjdGlvbnNNZXNzYWdlfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKGZpZWxkQXR0cnMpLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgbGV0IGF0dHIgPSBmaWVsZEF0dHJzW2luZGV4XTtcbiAgICAgIGxldCB1c2VEZWZhdWx0QXR0ciA9IFt0cnVlXTtcblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJEaXNhYmxlZEF0dHJzW3ZhbHVlcy50eXBlXSkge1xuICAgICAgICBsZXQgdHlwZURpc2FibGVkQXR0cnMgPSBvcHRzLnR5cGVVc2VyRGlzYWJsZWRBdHRyc1t2YWx1ZXMudHlwZV07XG4gICAgICAgIHVzZURlZmF1bHRBdHRyLnB1c2goIXV0aWxzLmluQXJyYXkoYXR0ciwgdHlwZURpc2FibGVkQXR0cnMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgICAgbGV0IHVzZXJBdHRycyA9IE9iamVjdC5rZXlzKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0pO1xuICAgICAgICB1c2VEZWZhdWx0QXR0ci5wdXNoKCF1dGlscy5pbkFycmF5KGF0dHIsIHVzZXJBdHRycykpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaW5BcnJheShhdHRyLCBvcHRzLmRpc2FibGVkQXR0cnMpKSB7XG4gICAgICAgIHVzZURlZmF1bHRBdHRyLnB1c2goZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXNlRGVmYXVsdEF0dHIuZXZlcnkodXNlID0+IHVzZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYWR2RmllbGRNYXBbYXR0cl0oKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgY3VzdG9tIGF0dHJpYnV0ZXMgYXMgZGVmaW5lZCBpbiB0eXBlVXNlckF0dHJzIG9wdGlvblxuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICBhZHZGaWVsZHMucHVzaChwcm9jZXNzVHlwZVVzZXJBdHRycyhvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdLCB2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWR2RmllbGRzLmpvaW4oJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzZXMgdHlwZVVzZXJBdHRyc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHR5cGVVc2VyQXR0ciBvcHRpb25cbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgICAgZmllbGQgYXR0cmlidXRlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICBtYXJrdXAgZm9yIGN1c3RvbSB1c2VyIGF0dHJpYnV0ZXNcbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NUeXBlVXNlckF0dHJzKHR5cGVVc2VyQXR0ciwgdmFsdWVzKSB7XG4gICAgbGV0IGFkdkZpZWxkID0gW107XG5cbiAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gdHlwZVVzZXJBdHRyKSB7XG4gICAgICBpZiAodHlwZVVzZXJBdHRyLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgbGV0IG9yaWcgPSBpMThuW2F0dHJpYnV0ZV07XG4gICAgICAgIGxldCBvcmlnVmFsdWUgPSB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZTtcbiAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSB8fCAnJztcblxuICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWwpIHtcbiAgICAgICAgICBpMThuW2F0dHJpYnV0ZV0gPSB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5sYWJlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5vcHRpb25zKSB7XG4gICAgICAgICAgYWR2RmllbGQucHVzaChzZWxlY3RVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkdkZpZWxkLnB1c2goaW5wdXRVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaTE4blthdHRyaWJ1dGVdID0gb3JpZztcbiAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkdkZpZWxkLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRleHQgaW5wdXQgdmFsdWUgZm9yIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBhbHNvIGtub3duIGFzIHZhbHVlc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIGlucHV0IG1hcmt1cFxuICAgKi9cbiAgZnVuY3Rpb24gaW5wdXRVc2VyQXR0cnMobmFtZSwgYXR0cnMpIHtcbiAgICBsZXQgdGV4dEF0dHJzID0ge1xuICAgICAgICBpZDogbmFtZSArICctJyArIGRhdGEubGFzdElELFxuICAgICAgICB0aXRsZTogYXR0cnMuZGVzY3JpcHRpb24gfHwgYXR0cnMubGFiZWwgfHwgbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiBhdHRycy50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgY2xhc3NOYW1lOiBbYGZsZC0ke25hbWV9YF1cbiAgICAgIH07XG4gICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3RleHRBdHRycy5pZH1cIj4ke2kxOG5bbmFtZV19PC9sYWJlbD5gO1xuXG4gICAgaWYgKCF1dGlscy5pbkFycmF5KHRleHRBdHRycy50eXBlLCBbJ2NoZWNrYm94JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICB0ZXh0QXR0cnMuY2xhc3NOYW1lLnB1c2goJ2Zvcm0tY29udHJvbCcpO1xuICAgIH1cblxuICAgIHRleHRBdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB0ZXh0QXR0cnMpO1xuICAgIGxldCB0ZXh0SW5wdXQgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh0ZXh0QXR0cnMpfT5gO1xuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3RleHRJbnB1dH08L2Rpdj5gO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBpbnB1dCBmb3IgbXVsdGlwbGUgY2hvaWNlIHVzZXIgYXR0cmlidXRlc1xuICAgKiBAdG9kbyAgcmVwbGFjZSB3aXRoIHNlbGVjdEF0dHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgc2VsZWN0IG1hcmt1cFxuICAgKi9cbiAgZnVuY3Rpb24gc2VsZWN0VXNlckF0dHJzKG5hbWUsIG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0aXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLm9wdGlvbnMpLm1hcCh2YWwgPT4ge1xuICAgICAgbGV0IGF0dHJzID0ge3ZhbHVlOiB2YWx9O1xuICAgICAgaWYgKHZhbCA9PT0gb3B0aW9ucy52YWx1ZSkge1xuICAgICAgICBhdHRycy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gYDxvcHRpb24gJHt1dGlscy5hdHRyU3RyaW5nKGF0dHJzKX0+JHtvcHRpb25zLm9wdGlvbnNbdmFsXX08L29wdGlvbj5gO1xuICAgIH0pO1xuICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgIGlkOiBuYW1lICsgJy0nICsgZGF0YS5sYXN0SUQsXG4gICAgICB0aXRsZTogb3B0aW9ucy5kZXNjcmlwdGlvbiB8fCBvcHRpb25zLmxhYmVsIHx8IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBjbGFzc05hbWU6IGBmbGQtJHtuYW1lfSBmb3JtLWNvbnRyb2xgXG4gICAgfTtcbiAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtpMThuW25hbWVdfTwvbGFiZWw+YDtcblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihwcm9wID0+IHtcbiAgICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShwcm9wLCBbJ3ZhbHVlJywgJ29wdGlvbnMnLCAnbGFiZWwnXSk7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbihhdHRyKSB7XG4gICAgICBzZWxlY3RBdHRyc1thdHRyXSA9IG9wdGlvbnNbYXR0cl07XG4gICAgfSk7XG5cbiAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtvcHRpcy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICB9XG5cbiAgbGV0IGJvb2xBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZXMsIGxhYmVscykge1xuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGFiZWwgPSAodHh0KSA9PiB7XG4gICAgICByZXR1cm4gYDxsYWJlbCBmb3I9XCIke25hbWV9LSR7ZGF0YS5sYXN0SUR9XCI+JHt0eHR9PC9sYWJlbD5gO1xuICAgIH07XG4gICAgbGV0IGNoZWNrZWQgPSAodmFsdWVzW25hbWVdID8gJ2NoZWNrZWQnIDogJycpO1xuICAgIGxldCBpbnB1dCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmbGQtJHtuYW1lfVwiIG5hbWU9XCIke25hbWV9XCIgdmFsdWU9XCJ0cnVlXCIgJHtjaGVja2VkfSBpZD1cIiR7bmFtZX0tJHtkYXRhLmxhc3RJRH1cIi8+IGA7XG4gICAgbGV0IGxlZnQgPSBbXTtcbiAgICBsZXQgcmlnaHQgPSBbXG4gICAgICBpbnB1dFxuICAgIF07XG5cbiAgICBpZiAobGFiZWxzLmZpcnN0KSB7XG4gICAgICBsZWZ0LnVuc2hpZnQobGFiZWwobGFiZWxzLmZpcnN0KSk7XG4gICAgfVxuXG4gICAgaWYgKGxhYmVscy5zZWNvbmQpIHtcbiAgICAgIHJpZ2h0LnB1c2gobGFiZWwobGFiZWxzLnNlY29uZCkpO1xuICAgIH1cblxuICAgIGlmIChsYWJlbHMuY29udGVudCkge1xuICAgICAgcmlnaHQucHVzaChsYWJlbHMuY29udGVudCk7XG4gICAgfVxuXG4gICAgcmlnaHQudW5zaGlmdCgnPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4nKTtcbiAgICByaWdodC5wdXNoKCc8L2Rpdj4nKTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsZWZ0LmNvbmNhdChyaWdodCkuam9pbignJyl9PC9kaXY+YDtcbiAgfTtcblxuICBsZXQgYnRuU3R5bGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgIGxldCBzdHlsZXMgPSBpMThuLnN0eWxlcy5idG47XG4gICAgICBsZXQgc3R5bGVGaWVsZCA9ICcnO1xuXG4gICAgaWYgKHN0eWxlcykge1xuICAgICAgbGV0IHN0eWxlTGFiZWwgPSBgPGxhYmVsPiR7aTE4bi5zdHlsZX08L2xhYmVsPmA7XG4gICAgICBzdHlsZUZpZWxkICs9IGA8aW5wdXQgdmFsdWU9XCIke3N0eWxlfVwiIG5hbWU9XCJzdHlsZVwiIHR5cGU9XCJoaWRkZW5cIiBjbGFzcz1cImJ0bi1zdHlsZVwiPmA7XG4gICAgICBzdHlsZUZpZWxkICs9ICc8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCI+JztcblxuICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgY2xhc3NMaXN0ID0gWydidG4teHMnLCAnYnRuJywgYGJ0bi0ke2VsZW1lbnR9YF07XG4gICAgICAgIGlmIChzdHlsZSA9PT0gZWxlbWVudCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3R5bGVGaWVsZCArPSBgPGJ1dHRvbiB2YWx1ZT1cIiR7ZWxlbWVudH1cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke2NsYXNzTGlzdC5qb2luKCcgJyl9XCI+JHtpMThuLnN0eWxlcy5idG5bZWxlbWVudF19PC9idXR0b24+YDtcbiAgICAgIH0pO1xuXG4gICAgICBzdHlsZUZpZWxkICs9ICc8L2Rpdj4nO1xuXG4gICAgICBzdHlsZUZpZWxkID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHN0eWxlLXdyYXBcIj4ke3N0eWxlTGFiZWx9ICR7c3R5bGVGaWVsZH08L2Rpdj5gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZUZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBudW1iZXIgYXR0cmlidXRlIHRvIGEgZmllbGQuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlXG4gICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAqIEByZXR1cm4ge1N0cmluZ30gbWFya3VwIGZvciBudW1iZXIgYXR0cmlidXRlXG4gICAqL1xuICBsZXQgbnVtYmVyQXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMpIHtcbiAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYXR0clZhbCA9IHZhbHVlc1thdHRyaWJ1dGVdO1xuICAgIGxldCBhdHRyTGFiZWwgPSBpMThuW2F0dHJpYnV0ZV0gfHwgYXR0cmlidXRlO1xuICAgIGxldCBwbGFjZWhvbGRlciA9IGkxOG5bYHBsYWNlaG9sZGVyLiR7YXR0cmlidXRlfWBdO1xuICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgdmFsdWU6IGF0dHJWYWwsXG4gICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICBtaW46ICcwJyxcbiAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgIGlkOiBgJHthdHRyaWJ1dGV9LSR7ZGF0YS5sYXN0SUR9YFxuICAgIH07XG4gICAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGA8aW5wdXQgJHt1dGlscy5hdHRyU3RyaW5nKHV0aWxzLnRyaW1PYmooaW5wdXRDb25maWcpKX0+YDtcbiAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtudW1iZXJBdHRyaWJ1dGV9PC9kaXY+YDtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHthdHRyaWJ1dGV9LXdyYXBcIj48bGFiZWwgZm9yPVwiJHtpbnB1dENvbmZpZy5pZH1cIj4ke2F0dHJMYWJlbH08L2xhYmVsPiAke2lucHV0V3JhcH08L2Rpdj5gO1xuICB9O1xuXG4gIC8qKlxuICAgKiBzZWxlY3RBdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGUgIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICBha2EgYXR0cnNcbiAgICogQHBhcmFtICB7QXJyYXl9IG9wdGlvbkRhdGEgIHNlbGVjdCBmaWVsZCBvcHRpb24gZGF0YVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgc2VsZWN0IGlucHV0IG1ha3J1cFxuICAgKi9cbiAgbGV0IHNlbGVjdEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzLCBvcHRpb25EYXRhKSB7XG4gICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RPcHRpb25zID0gb3B0aW9uRGF0YS5tYXAoKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgbGV0IG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGxhYmVsOiBgJHtpMThuLm9wdGlvbn0gJHtpfWAsXG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdGlvbik7XG4gICAgICBpZiAob3B0aW9uLnZhbHVlID09PSB2YWx1ZXNbYXR0cmlidXRlXSkge1xuICAgICAgICBvcHRpb25BdHRycy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYDxvcHRpb24gJHt1dGlscy5hdHRyU3RyaW5nKHV0aWxzLnRyaW1PYmoob3B0aW9uQXR0cnMpKX0+JHtvcHRpb25BdHRycy5sYWJlbH08L29wdGlvbj5gO1xuICAgIH0pO1xuICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgICAgaWQ6IGF0dHJpYnV0ZSArICctJyArIGRhdGEubGFzdElELFxuICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYFxuICAgICAgfTtcbiAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtpMThuW2F0dHJpYnV0ZV0gfHwgdXRpbHMuY2FwaXRhbGl6ZShhdHRyaWJ1dGUpfTwvbGFiZWw+YDtcbiAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtzZWxlY3RPcHRpb25zLmpvaW4oJycpfTwvc2VsZWN0PmA7XG4gICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7c2VsZWN0fTwvZGl2PmA7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7c2VsZWN0QXR0cnMubmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgc29tZSB0ZXh0IGlucHV0cyBmb3IgZmllbGQgYXR0cmlidXRlcywgKip3aWxsIGJlIHJlcGxhY2VkKipcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgbGV0IHRleHRBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcykge1xuICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwbGFjZWhvbGRlckZpZWxkcyA9IFtcbiAgICAgICd0ZXh0JyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdhdXRvY29tcGxldGUnXG4gICAgXTtcblxuICAgIGxldCBub05hbWUgPSBbXG4gICAgICAnaGVhZGVyJyxcbiAgICAgICdwYXJhZ3JhcGgnXG4gICAgXTtcblxuICAgIGxldCB0ZXh0QXJlYSA9IFsncGFyYWdyYXBoJ107XG5cbiAgICBsZXQgYXR0clZhbCA9IHZhbHVlc1thdHRyaWJ1dGVdIHx8ICcnO1xuICAgIGxldCBhdHRyTGFiZWwgPSBpMThuW2F0dHJpYnV0ZV07XG5cbiAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnKSB7XG4gICAgICBpZiAodXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgdGV4dEFyZWEpKSB7XG4gICAgICAgIGF0dHJMYWJlbCA9IGkxOG4uY29udGVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHJWYWwgPSB1dGlscy5wYXJzZWRIdG1sKHZhbHVlc1thdHRyaWJ1dGVdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VidHlwZXMuaGVhZGVyKSB7XG4gICAgICBub05hbWUgPSBub05hbWUuY29uY2F0KHN1YnR5cGVzLmhlYWRlcik7XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlaG9sZGVyID0gaTE4bltgcGxhY2Vob2xkZXIuJHthdHRyaWJ1dGV9YF0gfHwgJyc7XG4gICAgbGV0IGF0dHJpYnV0ZWZpZWxkID0gJyc7XG4gICAgbGV0IG5vTWFrZUF0dHIgPSBbXTtcblxuICAgIC8vIEZpZWxkIGhhcyBwbGFjZWhvbGRlciBhdHRyaWJ1dGVcbiAgICBpZiAoYXR0cmlidXRlID09PSAncGxhY2Vob2xkZXInICYmICF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBwbGFjZWhvbGRlckZpZWxkcykpIHtcbiAgICAgIG5vTWFrZUF0dHIucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBGaWVsZCBoYXMgbmFtZSBhdHRyaWJ1dGVcbiAgICBpZiAoYXR0cmlidXRlID09PSAnbmFtZScgJiYgdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgbm9OYW1lKSkge1xuICAgICAgbm9NYWtlQXR0ci5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmICghbm9NYWtlQXR0ci5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgICAgaWQ6IGAke2F0dHJpYnV0ZX0tJHtkYXRhLmxhc3RJRH1gXG4gICAgICB9O1xuICAgICAgbGV0IGF0dHJpYnV0ZUxhYmVsID0gYDxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+YDtcblxuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJykge1xuICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPGRpdiBjb250ZW50ZWRpdGFibGUgJHt1dGlscy5hdHRyU3RyaW5nKGlucHV0Q29uZmlnKX0+JHthdHRyVmFsfTwvZGl2PmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dENvbmZpZy52YWx1ZSA9IGF0dHJWYWw7XG4gICAgICAgIGlucHV0Q29uZmlnLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGF0dHJpYnV0ZWZpZWxkICs9IGA8aW5wdXQgJHt1dGlscy5hdHRyU3RyaW5nKGlucHV0Q29uZmlnKX0+YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7YXR0cmlidXRlZmllbGR9PC9kaXY+YDtcblxuICAgICAgbGV0IHZpc2liaWxpdHkgPSAnYmxvY2snO1xuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICB2aXNpYmlsaXR5ID0gdmFsdWVzLnN1YnR5cGUgJiYgdmFsdWVzLnN1YnR5cGUgPT09ICdxdWlsbCcgJiYgJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBhdHRyaWJ1dGVmaWVsZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiIHN0eWxlPVwiZGlzcGxheTogJHt2aXNpYmlsaXR5fVwiPiR7YXR0cmlidXRlTGFiZWx9ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZWZpZWxkO1xuICB9O1xuXG4gIGxldCByZXF1aXJlZEZpZWxkID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgbGV0IG5vUmVxdWlyZSA9IFtcbiAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgICAnYnV0dG9uJ1xuICAgICAgXTtcbiAgICBsZXQgbm9NYWtlID0gW107XG4gICAgbGV0IHJlcXVpcmVGaWVsZCA9ICcnO1xuXG4gICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vUmVxdWlyZSkpIHtcbiAgICAgIG5vTWFrZS5wdXNoKHRydWUpO1xuICAgIH1cbiAgICBpZiAoIW5vTWFrZS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJlcXVpcmVGaWVsZCA9IGJvb2xBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdmFsdWVzLCB7Zmlyc3Q6IGkxOG4ucmVxdWlyZWR9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWlyZUZpZWxkO1xuICB9O1xuXG4gIC8vIEFwcGVuZCB0aGUgbmV3IGZpZWxkIHRvIHRoZSBlZGl0b3JcbiAgbGV0IGFwcGVuZE5ld0ZpZWxkID0gZnVuY3Rpb24odmFsdWVzLCBpc05ldyA9IHRydWUpIHtcbiAgICBsZXQgdHlwZSA9IHZhbHVlcy50eXBlIHx8ICd0ZXh0JztcbiAgICBsZXQgbGFiZWwgPSB2YWx1ZXMubGFiZWwgfHwgaTE4blt0eXBlXSB8fCBpMThuLmxhYmVsO1xuICAgIGxldCBkZWxCdG4gPSBtKCdhJywgaTE4bi5yZW1vdmUsIHtcbiAgICAgICAgaWQ6ICdkZWxfJyArIGRhdGEubGFzdElELFxuICAgICAgICBjbGFzc05hbWU6ICdkZWwtYnV0dG9uIGJ0biBkZWxldGUtY29uZmlybScsXG4gICAgICAgIHRpdGxlOiBpMThuLnJlbW92ZU1lc3NhZ2VcbiAgICAgIH0pO1xuICAgIGxldCB0b2dnbGVCdG4gPSBtKCdhJywgbnVsbCwge1xuICAgICAgaWQ6IGRhdGEubGFzdElEICsgJy1lZGl0JyxcbiAgICAgIGNsYXNzTmFtZTogJ3RvZ2dsZS1mb3JtIGJ0biBpY29uLXBlbmNpbCcsXG4gICAgICB0aXRsZTogaTE4bi5oaWRlXG4gICAgfSk7XG4gICAgbGV0IGNvcHlCdG4gPSBtKCdhJywgbnVsbCwge1xuICAgICAgaWQ6IGRhdGEubGFzdElEICsgJy1jb3B5JyxcbiAgICAgIGNsYXNzTmFtZTogJ2NvcHktYnV0dG9uIGJ0biBpY29uLWNvcHknLFxuICAgICAgdGl0bGU6IGkxOG4uY29weUJ1dHRvblRvb2x0aXBcbiAgICB9KTtcblxuICAgIGxldCBsaUNvbnRlbnRzID0gbShcbiAgICAgICdkaXYnLCBbdG9nZ2xlQnRuLCBjb3B5QnRuLCBkZWxCdG5dLCB7Y2xhc3NOYW1lOiAnZmllbGQtYWN0aW9ucyd9XG4gICAgKS5vdXRlckhUTUw7XG5cbiAgICBsaUNvbnRlbnRzICs9IGA8bGFiZWwgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPiR7dXRpbHMucGFyc2VkSHRtbChsYWJlbCl9PC9sYWJlbD5gO1xuICAgIGxldCByZXF1aXJlZERpc3BsYXkgPSB2YWx1ZXMucmVxdWlyZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmlubGluZVwiJyA6ICcnO1xuICAgIGxpQ29udGVudHMgKz0gYDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIiAke3JlcXVpcmVkRGlzcGxheX0+ICo8L3NwYW4+YDtcblxuICAgIGxldCBkZXNjQXR0cnMgPSB7XG4gICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgdG9vbHRpcDogdmFsdWVzLmRlc2NyaXB0aW9uLFxuICAgICAgc3R5bGU6IHZhbHVlcy5kZXNjcmlwdGlvbiA/ICdkaXNwbGF5OmlubGluZS1ibG9jaycgOiAnZGlzcGxheTpub25lJ1xuICAgIH07XG4gICAgbGlDb250ZW50cyArPSBgPHNwYW4gJHt1dGlscy5hdHRyU3RyaW5nKGRlc2NBdHRycyl9Pj88L3NwYW4+YDtcblxuICAgIGxpQ29udGVudHMgKz0gbSgnZGl2JywgJycsIHtjbGFzc05hbWU6ICdwcmV2LWhvbGRlcid9KS5vdXRlckhUTUw7XG4gICAgbGlDb250ZW50cyArPSBgPGRpdiBpZD1cIiR7ZGF0YS5sYXN0SUR9LWhvbGRlclwiIGNsYXNzPVwiZnJtLWhvbGRlclwiPmA7XG4gICAgbGlDb250ZW50cyArPSAnPGRpdiBjbGFzcz1cImZvcm0tZWxlbWVudHNcIj4nO1xuXG4gICAgbGlDb250ZW50cyArPSBhZHZGaWVsZHModmFsdWVzKTtcbiAgICBsaUNvbnRlbnRzICs9IG0oJ2EnLCBpMThuLmNsb3NlLCB7Y2xhc3NOYW1lOiAnY2xvc2UtZmllbGQnfSkub3V0ZXJIVE1MO1xuXG4gICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcbiAgICBsaUNvbnRlbnRzICs9ICc8L2Rpdj4nO1xuXG4gICAgbGV0IGZpZWxkID0gbSgnbGknLCBsaUNvbnRlbnRzLCB7XG4gICAgICAgICdjbGFzcyc6IHR5cGUgKyAnLWZpZWxkIGZvcm0tZmllbGQnLFxuICAgICAgICAndHlwZSc6IHR5cGUsXG4gICAgICAgIGlkOiBkYXRhLmxhc3RJRFxuICAgICAgfSk7XG4gICAgbGV0ICRsaSA9ICQoZmllbGQpO1xuXG4gICAgJGxpLmRhdGEoJ2ZpZWxkRGF0YScsIHthdHRyczogdmFsdWVzfSk7XG5cbiAgICBpZiAodHlwZW9mIGhlbHBlcnMuc3RvcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgJCgnPiBsaScsIGQuc3RhZ2UpLmVxKGhlbHBlcnMuc3RvcEluZGV4KS5iZWZvcmUoJGxpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHN0YWdlLmFwcGVuZCgkbGkpO1xuICAgIH1cblxuICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJGxpKVxuICAgIC5zb3J0YWJsZSh7dXBkYXRlOiAoKSA9PiBoZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKX0pO1xuXG4gICAgaGVscGVycy51cGRhdGVQcmV2aWV3KCRsaSk7XG5cbiAgICBpZiAob3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXSAmJiBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uYWRkKSB7XG4gICAgICBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uYWRkKGZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5lZGl0T25BZGQgJiYgaXNOZXcpIHtcbiAgICAgIGhlbHBlcnMuY2xvc2VBbGxFZGl0KCk7XG4gICAgICBoZWxwZXJzLnRvZ2dsZUVkaXQoZGF0YS5sYXN0SUQsIGZhbHNlKTtcbiAgICAgIC8vIGZpZWxkLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfVxuXG4gICAgZGF0YS5sYXN0SUQgPSBoZWxwZXJzLmluY3JlbWVudElkKGRhdGEubGFzdElEKTtcbiAgfTtcblxuICAvLyBTZWxlY3QgZmllbGQgaHRtbCwgc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlXG4gIGxldCBzZWxlY3RGaWVsZE9wdGlvbnMgPSBmdW5jdGlvbihuYW1lLCBvcHRpb25EYXRhLCBtdWx0aXBsZVNlbGVjdCkge1xuICAgIGxldCBvcHRpb25JbnB1dFR5cGUgPSB7XG4gICAgICAgIHNlbGVjdGVkOiAobXVsdGlwbGVTZWxlY3QgPyAnY2hlY2tib3gnIDogJ3JhZGlvJylcbiAgICAgIH07XG4gICAgbGV0IG9wdGlvbkRhdGFPcmRlciA9IFtcbiAgICAgICd2YWx1ZScsXG4gICAgICAnbGFiZWwnLFxuICAgICAgJ3NlbGVjdGVkJ1xuICAgIF07XG4gICAgbGV0IG9wdGlvbklucHV0cyA9IFtdO1xuICAgIGxldCBvcHRpb25UZW1wbGF0ZSA9IHtzZWxlY3RlZDogZmFsc2UsIGxhYmVsOiAnJywgdmFsdWU6ICcnfTtcblxuICAgIG9wdGlvbkRhdGEgPSBPYmplY3QuYXNzaWduKG9wdGlvblRlbXBsYXRlLCBvcHRpb25EYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSBvcHRpb25EYXRhT3JkZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBwcm9wID0gb3B0aW9uRGF0YU9yZGVyW2ldO1xuICAgICAgaWYgKG9wdGlvbkRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgIHR5cGU6IG9wdGlvbklucHV0VHlwZVtwcm9wXSB8fCAndGV4dCcsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnb3B0aW9uLScgKyBwcm9wLFxuICAgICAgICAgIHZhbHVlOiBvcHRpb25EYXRhW3Byb3BdLFxuICAgICAgICAgIG5hbWU6IG5hbWUgKyAnLW9wdGlvbidcbiAgICAgICAgfTtcblxuICAgICAgICBhdHRycy5wbGFjZWhvbGRlciA9IGkxOG5bYHBsYWNlaG9sZGVyLiR7cHJvcH1gXSB8fCAnJztcblxuICAgICAgICBpZiAocHJvcCA9PT0gJ3NlbGVjdGVkJyAmJiBvcHRpb25EYXRhLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgYXR0cnMuY2hlY2tlZCA9IG9wdGlvbkRhdGEuc2VsZWN0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25JbnB1dHMucHVzaChtKCdpbnB1dCcsIG51bGwsIGF0dHJzKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZUF0dHJzID0ge1xuICAgICAgY2xhc3NOYW1lOiAncmVtb3ZlIGJ0bicsXG4gICAgICB0aXRsZTogaTE4bi5yZW1vdmVNZXNzYWdlXG4gICAgfTtcbiAgICBvcHRpb25JbnB1dHMucHVzaCh1dGlscy5tYXJrdXAoJ2EnLCBpMThuLnJlbW92ZSwgcmVtb3ZlQXR0cnMpKTtcblxuICAgIGxldCBmaWVsZCA9IHV0aWxzLm1hcmt1cCgnbGknLCBvcHRpb25JbnB1dHMpO1xuXG4gICAgcmV0dXJuIGZpZWxkLm91dGVySFRNTDtcbiAgfTtcblxuICBsZXQgY2xvbmVJdGVtID0gZnVuY3Rpb24gY2xvbmVJdGVtKGN1cnJlbnRJdGVtKSB7XG4gICAgbGV0IGN1cnJlbnRJZCA9IGN1cnJlbnRJdGVtLmF0dHIoJ2lkJyk7XG4gICAgbGV0IHR5cGUgPSBjdXJyZW50SXRlbS5hdHRyKCd0eXBlJyk7XG4gICAgbGV0IHRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgbGV0IGNsb25lTmFtZSA9IHR5cGUgKyAnLScgKyB0cztcbiAgICBsZXQgJGNsb25lID0gY3VycmVudEl0ZW0uY2xvbmUoKTtcblxuICAgICRjbG9uZS5maW5kKCdbaWRdJykuZWFjaCgoaSwgZWxlbSkgPT4ge1xuICAgICBlbGVtLmlkID0gZWxlbS5pZC5yZXBsYWNlKGN1cnJlbnRJZCwgZGF0YS5sYXN0SUQpO1xuICAgIH0pO1xuXG4gICAgJGNsb25lLmZpbmQoJ1tmb3JdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuZ2V0QXR0cmlidXRlKCdmb3InKS5yZXBsYWNlKGN1cnJlbnRJZCwgZGF0YS5sYXN0SUQpKTtcbiAgICB9KTtcblxuICAgICRjbG9uZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnZTpub3QoLmZvcm0tZWxlbWVudHMpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG5ld05hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICBuZXdOYW1lID0gbmV3TmFtZS5zdWJzdHJpbmcoMCwgKG5ld05hbWUubGFzdEluZGV4T2YoJy0nKSArIDEpKTtcbiAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUgKyB0cy50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5ld05hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkY2xvbmUuZmluZCgnLmZvcm0tZWxlbWVudHMnKS5maW5kKCc6aW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgPT09ICduYW1lJykge1xuICAgICAgICBsZXQgbmV3VmFsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5zdWJzdHJpbmcoMCwgKG5ld1ZhbC5sYXN0SW5kZXhPZignLScpICsgMSkpO1xuICAgICAgICBuZXdWYWwgPSBuZXdWYWwgKyB0cy50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdWYWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJGNsb25lLmF0dHIoJ2lkJywgZGF0YS5sYXN0SUQpO1xuICAgICRjbG9uZS5hdHRyKCduYW1lJywgY2xvbmVOYW1lKTtcbiAgICAkY2xvbmUuYWRkQ2xhc3MoJ2Nsb25lZCcpO1xuICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJGNsb25lKS5zb3J0YWJsZSgpO1xuXG4gICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKSB7XG4gICAgICBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uY2xvbmUoJGNsb25lWzBdKTtcbiAgICB9XG5cbiAgICBkYXRhLmxhc3RJRCA9IGhlbHBlcnMuaW5jcmVtZW50SWQoZGF0YS5sYXN0SUQpO1xuICAgIHJldHVybiAkY2xvbmU7XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVVElMSVRJRVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIGRlbGV0ZSBvcHRpb25zXG4gICRzdGFnZS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcucmVtb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgIGxldCAkZmllbGQgPSAkKHRoaXMpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBvcHRpb25zQ291bnQgPSAkKHRoaXMpLnBhcmVudHMoJy5zb3J0YWJsZS1vcHRpb25zOmVxKDApJykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xuICAgIGlmIChvcHRpb25zQ291bnQgPD0gMikge1xuICAgICAgb3B0cy5ub3RpZnkuZXJyb3IoJ0Vycm9yOiAnICsgaTE4bi5taW5PcHRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuc2xpZGVVcCgnMjUwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgIGhlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xuICAgICAgICBoZWxwZXJzLnNhdmUuY2FsbChoZWxwZXJzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gdG91Y2ggZm9jdXNcbiAgJHN0YWdlLm9uKCd0b3VjaHN0YXJ0JywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgIGxldCAkaW5wdXQgPSAkKHRoaXMpO1xuICAgIGlmIChlLmhhbmRsZWQgIT09IHRydWUpIHtcbiAgICAgIGlmICgkaW5wdXQuYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICRpbnB1dC50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgIGxldCBmaWVsZFZhbCA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgJGlucHV0LnZhbChmaWVsZFZhbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHRvZ2dsZSBmaWVsZHNcbiAgJHN0YWdlLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy50b2dnbGUtZm9ybSwgLmNsb3NlLWZpZWxkJywgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLmhhbmRsZWQgIT09IHRydWUpIHtcbiAgICAgIGxldCB0YXJnZXRJRCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJykuYXR0cignaWQnKTtcbiAgICAgIGhlbHBlcnMudG9nZ2xlRWRpdCh0YXJnZXRJRCk7XG4gICAgICBlLmhhbmRsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICAkc3RhZ2Uub24oJ2NoYW5nZScsICdbbmFtZT1cInN1YnR5cGVcIl0nLCAoZSkgPT4ge1xuICAgIGNvbnN0ICRmaWVsZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpLmZvcm0tZmllbGQnKTtcbiAgICBjb25zdCAkdmFsV3JhcCA9ICQoJy52YWx1ZS13cmFwJywgJGZpZWxkKTtcbiAgICAkdmFsV3JhcC50b2dnbGUoZS50YXJnZXQudmFsdWUgIT09ICdxdWlsbCcpO1xuICB9KTtcblxuXG4gICRzdGFnZS5vbignY2hhbmdlJywgJy5wcmV2LWhvbGRlciBpbnB1dCwgLnByZXYtaG9sZGVyIHNlbGVjdCwgLnByZXYtaG9sZGVyIHRleHRhcmVhJywgZSA9PiB7XG4gICAgbGV0IHByZXZPcHRpb25zO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ290aGVyLW9wdGlvbicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBmaWVsZCA9IHV0aWxzLmNsb3Nlc3QoZS50YXJnZXQsICcuZm9ybS1maWVsZCcpO1xuICAgIGlmICh1dGlscy5pbkFycmF5KGZpZWxkLnR5cGUsIFsnc2VsZWN0JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29wdGlvbi12YWx1ZScpO1xuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHV0aWxzLmZvckVhY2gob3B0aW9ucywgaSA9PiB7XG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9uc1tpXS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb24uY2hlY2tlZCA9IGUudGFyZ2V0LnZhbHVlID09PSBvcHRpb25zW2ldLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoZS50YXJnZXQubmFtZSk7XG4gICAgICAgIHV0aWxzLmZvckVhY2gocHJldk9wdGlvbnMsIGkgPT4ge1xuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnNbaV0ucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmNoZWNrZWQgPSBwcmV2T3B0aW9uc1tpXS5jaGVja2VkO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpZWxkVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlLScgKyBmaWVsZC5pZCk7XG4gICAgICBpZihmaWVsZFZhbCkge1xuICAgICAgICBmaWVsZFZhbC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhlbHBlcnMuc2F2ZS5jYWxsKGhlbHBlcnMpO1xuICB9KTtcblxuICAvLyB1cGRhdGUgcHJldmlldyB0byBsYWJlbFxuICB1dGlscy5hZGRFdmVudExpc3RlbmVycyhkLnN0YWdlLCAna2V5dXAgY2hhbmdlJywgZSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsZC1sYWJlbCcpKSByZXR1cm47XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWUgfHwgZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgIGxldCBsYWJlbCA9IHV0aWxzLmNsb3Nlc3QoZS50YXJnZXQsICcuZm9ybS1maWVsZCcpLnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1sYWJlbCcpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IHV0aWxzLnBhcnNlZEh0bWwodmFsdWUpO1xuICB9KTtcblxuICAvLyByZW1vdmUgZXJyb3Igc3R5bGluZyB3aGVuIHVzZXJzIHRyaWVzIHRvIGNvcnJlY3QgbWlzdGFrZVxuICAkc3RhZ2Uub24oJ2tleXVwJywgJ2lucHV0LmVycm9yJywgZnVuY3Rpb24oZSkge1xuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9KTtcblxuICAvLyB1cGRhdGUgcHJldmlldyBmb3IgZGVzY3JpcHRpb25cbiAgJHN0YWdlLm9uKCdrZXl1cCcsICdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0ICRmaWVsZCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgbGV0IGNsb3Nlc3RUb29sVGlwID0gJCgnLnRvb2x0aXAtZWxlbWVudCcsICRmaWVsZCk7XG4gICAgbGV0IHR0VmFsID0gJChlLnRhcmdldCkudmFsKCk7XG4gICAgaWYgKHR0VmFsICE9PSAnJykge1xuICAgICAgaWYgKCFjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHR0ID0gYDxzcGFuIGNsYXNzPVwidG9vbHRpcC1lbGVtZW50XCIgdG9vbHRpcD1cIiR7dHRWYWx9XCI+Pzwvc3Bhbj5gO1xuICAgICAgICAkKCcuZmllbGQtbGFiZWwnLCAkZmllbGQpLmFmdGVyKHR0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3Nlc3RUb29sVGlwLmF0dHIoJ3Rvb2x0aXAnLCB0dFZhbCkuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2xvc2VzdFRvb2xUaXAubGVuZ3RoKSB7XG4gICAgICAgIGNsb3Nlc3RUb29sVGlwLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogVG9nZ2xlIG11bHRpcGxlIHNlbGVjdCBvcHRpb25zXG4gICAqIEBwYXJhbSAge09iamVjdH0gZSBjbGljayBldmVudFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IG5ld1R5cGVcbiAgICovXG4gICRzdGFnZS5vbignY2hhbmdlJywgJy5mbGQtbXVsdGlwbGUnLCBlID0+IHtcbiAgICBsZXQgbmV3VHlwZSA9IGUudGFyZ2V0LmNoZWNrZWQgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcbiAgICBsZXQgJG9wdGlvbnMgPSAkKCcub3B0aW9uLXNlbGVjdGVkJywgJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZWxlbWVudHMnKSk7XG4gICAgJG9wdGlvbnMuZWFjaChpID0+ICRvcHRpb25zW2ldLnR5cGUgPSBuZXdUeXBlKTtcbiAgICByZXR1cm4gbmV3VHlwZTtcbiAgfSk7XG5cbiAgLy8gZm9ybWF0IG5hbWUgYXR0cmlidXRlXG4gICRzdGFnZS5vbignYmx1cicsICdpbnB1dC5mbGQtbmFtZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnRhcmdldC52YWx1ZSA9IHV0aWxzLnNhZmVuYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAkKGUudGFyZ2V0KVxuICAgICAgLmFkZENsYXNzKCdmaWVsZC1lcnJvcicpXG4gICAgICAuYXR0cigncGxhY2Vob2xkZXInLCBpMThuLmNhbm5vdEJlRW1wdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZmllbGQtZXJyb3InKTtcbiAgICB9XG4gIH0pO1xuXG4gICRzdGFnZS5vbignYmx1cicsICdpbnB1dC5mbGQtbWF4bGVuZ3RoJywgZSA9PiB7XG4gICAgZS50YXJnZXQudmFsdWUgPSB1dGlscy5mb3JjZU51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gIH0pO1xuXG4gIC8vIENvcHkgZmllbGRcbiAgJHN0YWdlLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5pY29uLWNvcHknLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBjdXJyZW50SXRlbSA9ICQoZS50YXJnZXQpLnBhcmVudCgpLnBhcmVudCgnbGknKTtcbiAgICBsZXQgJGNsb25lID0gY2xvbmVJdGVtKGN1cnJlbnRJdGVtKTtcbiAgICAkY2xvbmUuaW5zZXJ0QWZ0ZXIoY3VycmVudEl0ZW0pO1xuICAgIGhlbHBlcnMudXBkYXRlUHJldmlldygkY2xvbmUpO1xuICAgIGhlbHBlcnMuc2F2ZS5jYWxsKGhlbHBlcnMpO1xuICB9KTtcblxuICAvLyBEZWxldGUgZmllbGRcbiAgJHN0YWdlLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5kZWxldGUtY29uZmlybScsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgIH07XG5cbiAgICBsZXQgZGVsZXRlSUQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpLmF0dHIoJ2lkJyk7XG4gICAgY29uc3QgJGZpZWxkID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVJRCkpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxDbG9zZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIHN1cmUgdGhleSB3YW50IHRvIHJlbW92ZSB0aGUgZmllbGRcbiAgICBpZiAob3B0cy5maWVsZFJlbW92ZVdhcm4pIHtcbiAgICAgIGxldCB3YXJuSDMgPSB1dGlscy5tYXJrdXAoJ2gzJywgaTE4bi53YXJuaW5nKTtcbiAgICAgIGxldCB3YXJuTWVzc2FnZSA9IHV0aWxzLm1hcmt1cCgncCcsIGkxOG4uZmllbGRSZW1vdmVXYXJuaW5nKTtcbiAgICAgIGhlbHBlcnMuY29uZmlybShbd2FybkgzLCB3YXJuTWVzc2FnZV0sICgpID0+XG4gICAgICAgIGhlbHBlcnMucmVtb3ZlRmllbGQoZGVsZXRlSUQpLCBjb29yZHMpO1xuICAgICAgJGZpZWxkLmFkZENsYXNzKCdkZWxldGluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFVwZGF0ZSBidXR0b24gc3R5bGUgc2VsZWN0aW9uXG4gICRzdGFnZS5vbignY2xpY2snLCAnLnN0eWxlLXdyYXAgYnV0dG9uJywgZSA9PiB7XG4gICAgY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xuICAgIGxldCBzdHlsZVZhbCA9ICRidXR0b24udmFsKCk7XG4gICAgbGV0ICRidG5TdHlsZSA9ICRidXR0b24ucGFyZW50KCkucHJldignLmJ0bi1zdHlsZScpO1xuICAgICRidG5TdHlsZS52YWwoc3R5bGVWYWwpO1xuICAgICRidXR0b24uc2libGluZ3MoJy5idG4nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAkYnV0dG9uLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIGhlbHBlcnMudXBkYXRlUHJldmlldygkYnRuU3R5bGUuY2xvc2VzdCgnLmZvcm0tZmllbGQnKSk7XG4gICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gIH0pO1xuXG4gIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIHRvZ2dsZSByZXF1aXJlZCBhc3Rlcmlza1xuICAkc3RhZ2Uub24oJ2NsaWNrJywgJy5mbGQtcmVxdWlyZWQnLCBlID0+IHtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5yZXF1aXJlZC1hc3RlcmlzaycpLnRvZ2dsZSgpO1xuICB9KTtcblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byB0b2dnbGUgcm9sZXMgdmlzaWJpbGl0eVxuICAkc3RhZ2Uub24oJ2NsaWNrJywgJ2lucHV0LmZsZC1hY2Nlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHJvbGVzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKS5maW5kKCcuYXZhaWxhYmxlLXJvbGVzJyk7XG4gICAgbGV0IGVuYWJsZVJvbGVzQ0IgPSAkKGUudGFyZ2V0KTtcbiAgICByb2xlcy5zbGlkZVRvZ2dsZSgyNTAsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFlbmFibGVSb2xlc0NCLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHJvbGVzKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIGFkZCBuZXcgb3B0aW9uc1xuICAkc3RhZ2Uub24oJ2NsaWNrJywgJy5hZGQtb3B0JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgJG9wdGlvbldyYXAgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZmllbGQtb3B0aW9ucycpO1xuICAgIGxldCAkbXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgJG9wdGlvbldyYXApO1xuICAgIGxldCAkZmlyc3RPcHRpb24gPSAkKCcub3B0aW9uLXNlbGVjdGVkOmVxKDApJywgJG9wdGlvbldyYXApO1xuICAgIGxldCBpc011bHRpcGxlID0gZmFsc2U7XG5cbiAgICBpZiAoJG11bHRpcGxlLmxlbmd0aCkge1xuICAgICAgaXNNdWx0aXBsZSA9ICRtdWx0aXBsZS5wcm9wKCdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzTXVsdGlwbGUgPSAoJGZpcnN0T3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jyk7XG4gICAgfVxuXG4gICAgbGV0IG5hbWUgPSAkZmlyc3RPcHRpb24uYXR0cignbmFtZScpO1xuXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkb3B0aW9uV3JhcCkuYXBwZW5kKHNlbGVjdEZpZWxkT3B0aW9ucyhuYW1lLCBmYWxzZSwgaXNNdWx0aXBsZSkpO1xuICB9KTtcblxuICAkc3RhZ2Uub24oJ21vdXNlb3ZlciBtb3VzZW91dCcsICcucmVtb3ZlLCAuZGVsLWJ1dHRvbicsIGUgPT5cbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpLnRvZ2dsZUNsYXNzKCdkZWxldGUnKSk7XG5cbiAgbG9hZEZpZWxkcygpO1xuXG4gICRzdGFnZS5jc3MoJ21pbi1oZWlnaHQnLCAkY2JVTC5oZWlnaHQoKSk7XG5cbiAgLy8gSWYgb3B0aW9uIHNldCwgY29udHJvbHMgd2lsbCByZW1haW4gaW4gdmlldyBpbiBlZGl0b3JcbiAgaWYgKG9wdHMuc3RpY2t5Q29udHJvbHMuZW5hYmxlKSB7XG4gICAgaGVscGVycy5zdGlja3lDb250cm9scygkc3RhZ2UpO1xuICB9XG5cbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMubG9hZGVkKTtcblxuICAvLyBNYWtlIGFjdGlvbnMgYWNjZXNzaWJsZVxuICBmb3JtQnVpbGRlci5hY3Rpb25zID0ge1xuICAgIGNsZWFyRmllbGRzOiBhbmltYXRlID0+IGhlbHBlcnMucmVtb3ZlQWxsRmllbGRzKGQuc3RhZ2UsIGFuaW1hdGUpLFxuICAgIHNob3dEYXRhOiBoZWxwZXJzLnNob3dEYXRhLmJpbmQoaGVscGVycyksXG4gICAgc2F2ZTogaGVscGVycy5zYXZlLmJpbmQoaGVscGVycyksXG4gICAgYWRkRmllbGQ6IChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgIGhlbHBlcnMuc3RvcEluZGV4ID0gZGF0YS5mb3JtRGF0YS5sZW5ndGggPyBpbmRleCA6IHVuZGVmaW5lZDtcbiAgICAgIHByZXBGaWVsZFZhcnMoZmllbGQpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMuZmllbGRBZGRlZCk7XG4gICAgfSxcbiAgICByZW1vdmVGaWVsZDogaGVscGVycy5yZW1vdmVGaWVsZC5iaW5kKGhlbHBlcnMpLFxuICAgIGdldERhdGE6ICh0eXBlID0gJ2pzJykgPT4ge1xuICAgICAgY29uc3Qgc3RhZ2UgPSBkLnN0YWdlO1xuICAgICAgY29uc3QgaCA9IGhlbHBlcnM7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBqczogKCkgPT4gaC5wcmVwRGF0YShzdGFnZSksXG4gICAgICAgIHhtbDogKCkgPT4gaC54bWxTYXZlKHN0YWdlKSxcbiAgICAgICAganNvbjogKCkgPT4gd2luZG93LkpTT04uc3RyaW5naWZ5KGgucHJlcERhdGEoc3RhZ2UpLCBudWxsLCAnXFx0JylcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBkYXRhW3R5cGVdKCk7XG4gICAgfSxcbiAgICBzZXREYXRhOiBmb3JtRGF0YSA9PiB7XG4gICAgICBoZWxwZXJzLnN0b3BJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgIGhlbHBlcnMucmVtb3ZlQWxsRmllbGRzKGQuc3RhZ2UsIGZhbHNlKTtcbiAgICAgIGxvYWRGaWVsZHMoZm9ybURhdGEpO1xuICAgICAgaGVscGVycy5zYXZlLmNhbGwoaGVscGVycyk7XG4gICAgfSxcbiAgICBzZXRMYW5nOiBhc3luYyBsb2NhbGUgPT4ge1xuICAgICAgYXdhaXQgbWkxOG4uc2V0Q3VycmVudC5jYWxsKG1pMThuLCBsb2NhbGUpO1xuICAgICAgZC5lbXB0eShlbGVtZW50KTtcbiAgICAgIGxldCBmb3JtQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcihvcmlnaW5hbE9wdHMsIGVsZW1lbnQpO1xuICAgICAgJChlbGVtZW50KS5kYXRhKCdmb3JtQnVpbGRlcicsIGZvcm1CdWlsZGVyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZvcm1CdWlsZGVyO1xufTtcblxuXG4oZnVuY3Rpb24oICQgKSB7XG4gICQuZm4uZm9ybUJ1aWxkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGxldCBlbGVtcyA9IHRoaXM7XG4gICAgbGV0IHtpMThuLCAuLi5vcHRzfSA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucywgdHJ1ZSk7XG4gICAgY29uZmlnLm9wdHMgPSBvcHRzO1xuICAgIGxldCBpMThuT3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0STE4biwgaTE4biwgdHJ1ZSk7XG4gICAgbGV0IGluc3RhbmNlID0ge1xuICAgICAgYWN0aW9uczoge1xuICAgICAgICBnZXREYXRhOiBudWxsLFxuICAgICAgICBzZXREYXRhOiBudWxsLFxuICAgICAgICBzYXZlOiBudWxsLFxuICAgICAgICBzaG93RGF0YTogbnVsbCxcbiAgICAgICAgc2V0TGFuZzogbnVsbCxcbiAgICAgICAgYWRkRmllbGQ6IG51bGwsXG4gICAgICAgIHJlbW92ZUZpZWxkOiBudWxsLFxuICAgICAgICBjbGVhckZpZWxkczogbnVsbFxuICAgICAgfSxcbiAgICAgIGdldCBmb3JtRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmFjdGlvbnMuZ2V0RGF0YSgnanNvbicpO1xuICAgICAgfSxcbiAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBtaTE4bi5pbml0KGkxOG5PcHRzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBlbGVtcy5lYWNoKGkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1CdWlsZGVyID0gbmV3IEZvcm1CdWlsZGVyKG9wdHMsIGVsZW1zW2ldKTtcbiAgICAgICAgICAgICQoZWxlbXNbaV0pLmRhdGEoJ2Zvcm1CdWlsZGVyJywgZm9ybUJ1aWxkZXIpO1xuICAgICAgICAgICAgaW5zdGFuY2UuYWN0aW9ucyA9IGZvcm1CdWlsZGVyLmFjdGlvbnM7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGVsZXRlIGluc3RhbmNlLnByb21pc2U7XG4gICAgICAgICAgcmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufSkoIGpRdWVyeSApO1xuIiwiaW1wb3J0IHtpbnN0YW5jZURvbSwgZGVmYXVsdFN1YnR5cGVzLCBlbXB0eSwgb3B0aW9uRmllbGRzUmVnRXh9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7aW5zdGFuY2VEYXRhfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgbWkxOG4gZnJvbSAnbWkxOG4nO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcblxuY29uc3Qgb3B0cyA9IGNvbmZpZy5vcHRzO1xuY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcblxuLyoqXG4gKiBVdGlsaXRpZXMgc3BlY2lmaWMgdG8gZm9ybS1idWlsZGVyLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xuICAvKipcbiAgICogU2V0dXAgZGVmYXVsdHMsIGdldCBpbnN0YW5jZSBkYXRhIGFuZCBkb21cbiAgICogQHBhcmFtICB7U3RyaW5nfSBmb3JtSUQgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3RydWN0b3IoZm9ybUlEKSB7XG4gICAgdGhpcy5kYXRhID0gaW5zdGFuY2VEYXRhW2Zvcm1JRF07XG4gICAgdGhpcy5kID0gaW5zdGFuY2VEb21bZm9ybUlEXTtcbiAgICB0aGlzLmRvQ2FuY2VsID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGJlZ2luc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIHN0YXJ0TW92aW5nKGV2ZW50LCB1aSkge1xuICAgIHVpLml0ZW0uc2hvdygpLmFkZENsYXNzKCdtb3ZpbmcnKTtcbiAgICB0aGlzLmRvQ2FuY2VsID0gdHJ1ZTtcbiAgICB0aGlzLmZyb20gPSB1aS5pdGVtLnBhcmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBlbmRzXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKi9cbiAgc3RvcE1vdmluZyhldmVudCwgdWkpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ21vdmluZycpO1xuICAgIGlmIChfdGhpcy5kb0NhbmNlbCkge1xuICAgICAgaWYgKHVpLnNlbmRlcikge1xuICAgICAgICAkKHVpLnNlbmRlcikuc29ydGFibGUoJ2NhbmNlbCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5mcm9tLnNvcnRhYmxlKCdjYW5jZWwnKTtcbiAgICB9XG4gICAgX3RoaXMuc2F2ZSgpO1xuICAgIF90aGlzLmRvQ2FuY2VsID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogalF1ZXJ5IFVJIHNvcnRhYmxlIGJlZm9yZVN0b3AgY2FsbGJhY2sgdXNlZCBmb3IgYm90aCBsaXN0cy5cbiAgICogTG9naWMgZm9yIGNhbmNlbGluZyB0aGUgc29ydCBvciBkcm9wLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGJlZm9yZVN0b3AoZXZlbnQsIHVpKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBvcHRzID0gY29uZmlnLm9wdHM7XG4gICAgY29uc3QgZm9ybSA9IF90aGlzLmQuc3RhZ2U7XG4gICAgbGV0IGxhc3RJbmRleCA9IGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggLSAxO1xuICAgIGxldCBjYW5jZWxBcnJheSA9IFtdO1xuICAgIF90aGlzLnN0b3BJbmRleCA9IHVpLnBsYWNlaG9sZGVyLmluZGV4KCkgLSAxO1xuXG4gICAgaWYgKCFvcHRzLnNvcnRhYmxlQ29udHJvbHMgJiYgdWkuaXRlbS5wYXJlbnQoKS5oYXNDbGFzcygnZnJtYi1jb250cm9sJykpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucHJlcGVuZCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaChfdGhpcy5zdG9wSW5kZXggPT09IDApO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCgoX3RoaXMuc3RvcEluZGV4ICsgMSkgPT09IGxhc3RJbmRleCk7XG4gICAgfVxuXG4gICAgX3RoaXMuZG9DYW5jZWwgPSBjYW5jZWxBcnJheS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBnZXQgZWxlbWVudCB0eXBlIGFuZCBzdWJ0eXBlXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gJGZpZWxkXG4gICAqIEByZXR1cm4ge09iamVjdH0ge3R5cGU6ICdmaWVsZFR5cGUnLCBzdWJ0eXBlOiAnZmllbGRTdWJUeXBlJ31cbiAgICovXG4gIGdldFR5cGVzKCRmaWVsZCkge1xuICAgIGxldCB0eXBlcyA9IHtcbiAgICAgICAgdHlwZTogJGZpZWxkLmF0dHIoJ3R5cGUnKVxuICAgICAgfTtcbiAgICBsZXQgc3VidHlwZSA9ICQoJy5mbGQtc3VidHlwZScsICRmaWVsZCkudmFsKCk7XG5cbiAgICBpZiAoc3VidHlwZSAhPT0gdHlwZXMudHlwZSkge1xuICAgICAgdHlwZXMuc3VidHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvcHRpb24gZGF0YSBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkIGpRdWVyeSBmaWVsZCBvYmplY3RcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBBcnJheSBvZiBvcHRpb24gdmFsdWVzXG4gICAqL1xuICBmaWVsZE9wdGlvbkRhdGEoZmllbGQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICRvcHRpb24pLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgIGxhYmVsOiAkKCcub3B0aW9uLWxhYmVsJywgJG9wdGlvbikudmFsKCksXG4gICAgICAgICAgdmFsdWU6ICQoJy5vcHRpb24tdmFsdWUnLCAkb3B0aW9uKS52YWwoKVxuICAgICAgICB9O1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5wdXNoKGF0dHJzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFhNTCBzYXZlXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybSBzb3J0YWJsZUZpZWxkcyBub2RlXG4gICAqIEByZXR1cm4ge1N0cmluZ30geG1sIGluIHN0cmluZ1xuICAgKi9cbiAgeG1sU2F2ZShmb3JtKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gdGhpcy5wcmVwRGF0YShmb3JtKTtcbiAgICBsZXQgeG1sID0gWyc8Zm9ybS10ZW1wbGF0ZT5cXG5cXHQ8ZmllbGRzPiddO1xuXG4gICAgdXRpbHMuZm9yRWFjaChmb3JtRGF0YSwgZnVuY3Rpb24oZmllbGRJbmRleCwgZmllbGQpIHtcbiAgICAgIGxldCBmaWVsZENvbnRlbnQgPSBudWxsO1xuICAgICAgY29uc3Qgb3B0aW9uRmllbGRzID0gb3B0aW9uRmllbGRzUmVnRXg7XG5cbiAgICAgIC8vIEhhbmRsZSBvcHRpb25zXG4gICAgICBpZiAoZmllbGQudHlwZS5tYXRjaChvcHRpb25GaWVsZHMpKSB7XG4gICAgICAgIGxldCBvcHRpb25EYXRhID0gZmllbGQudmFsdWVzO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBvcHRpb24gPSBtKCdvcHRpb24nLCBvcHRpb25EYXRhW2ldLmxhYmVsLCBvcHRpb25EYXRhW2ldKS5vdXRlckhUTUw7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKCdcXG5cXHRcXHRcXHQnICsgb3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdCcpO1xuXG4gICAgICAgIGZpZWxkQ29udGVudCA9IG9wdGlvbnMuam9pbignJyk7XG4gICAgICAgIGRlbGV0ZSBmaWVsZC52YWx1ZXM7XG4gICAgICB9XG5cbiAgICAgIGxldCB4bWxGaWVsZCA9IG0oJ2ZpZWxkJywgZmllbGRDb250ZW50LCBmaWVsZCk7XG4gICAgICB4bWwucHVzaCgnXFxuXFx0XFx0JyArIHhtbEZpZWxkLm91dGVySFRNTCk7XG4gICAgfSk7XG5cbiAgICB4bWwucHVzaCgnXFxuXFx0PC9maWVsZHM+XFxuPC9mb3JtLXRlbXBsYXRlPicpO1xuXG4gICAgcmV0dXJuIHhtbC5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZm9ybURhdGEgZnJvbSBlZGl0b3IgaW4gSlMgT2JqZWN0IGZvcm1hdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZvcm0gYWthIHN0YWdlLCBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGZvcm1EYXRhXG4gICAqL1xuICBwcmVwRGF0YShmb3JtKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG4gICAgbGV0IGQgPSB0aGlzLmQ7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGlmIChmb3JtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBidWlsZCBkYXRhIG9iamVjdFxuICAgICAgdXRpbHMuZm9yRWFjaChmb3JtLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGluZGV4LCBmaWVsZCkge1xuICAgICAgICBsZXQgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgaWYgKCEoJGZpZWxkLmhhc0NsYXNzKCdkaXNhYmxlZC1maWVsZCcpKSkge1xuICAgICAgICAgIGxldCBmaWVsZERhdGEgPSBfdGhpcy5nZXRUeXBlcygkZmllbGQpO1xuICAgICAgICAgIGxldCByb2xlVmFscyA9ICQoJy5yb2xlcy1maWVsZDpjaGVja2VkJywgZmllbGQpLm1hcChlbGVtID0+IGVsZW0udmFsdWUpLmdldCgpO1xuXG4gICAgICAgICAgX3RoaXMuc2V0QXR0clZhbHMoZmllbGQsIGZpZWxkRGF0YSk7XG5cbiAgICAgICAgICBpZiAoZmllbGREYXRhLnN1YnR5cGUpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZERhdGEuc3VidHlwZSA9PT0gJ3F1aWxsJykge1xuICAgICAgICAgICAgICBsZXQgaWQgPSBgJHtmaWVsZERhdGEubmFtZX0tcHJldmlld2A7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2lkXSkge1xuICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbaWRdLmluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBpbnN0YW5jZS5nZXRDb250ZW50cygpO1xuICAgICAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZSA9IHdpbmRvdy5KU09OLnN0cmluZ2lmeShkYXRhLm9wcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZihmaWVsZERhdGEuc3VidHlwZSA9PT0gJ3RpbnltY2UnICYmIHdpbmRvdy50aW55bWNlKSB7XG4gICAgICAgICAgICAgIGxldCBpZCA9IGAke2ZpZWxkRGF0YS5uYW1lfS1wcmV2aWV3YDtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy50aW55bWNlLmVkaXRvcnNbaWRdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVkaXRvciA9IHdpbmRvdy50aW55bWNlLmVkaXRvcnNbaWRdO1xuICAgICAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZSA9IGVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocm9sZVZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEucm9sZSA9IHJvbGVWYWxzLmpvaW4oJywnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZERhdGEuY2xhc3NOYW1lID0gZmllbGREYXRhLmNsYXNzTmFtZSB8fCBmaWVsZERhdGEuY2xhc3M7XG5cbiAgICAgICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZERhdGEuY2xhc3NOYW1lKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZmllbGREYXRhKTtcblxuICAgICAgICAgIGxldCBtdWx0aXBsZUZpZWxkID0gZmllbGREYXRhLnR5cGUubWF0Y2goZC5vcHRpb25GaWVsZHNSZWdFeCk7XG5cbiAgICAgICAgICBpZiAobXVsdGlwbGVGaWVsZCkge1xuICAgICAgICAgICAgZmllbGREYXRhLnZhbHVlcyA9IF90aGlzLmZpZWxkT3B0aW9uRGF0YSgkZmllbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvcm1EYXRhLnB1c2goZmllbGREYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbmQgc2V0IHRoZSBkYXRhIGZvciBhbiBlZGl0b3IuIE1haW5seVxuICAgKiBhIHdyYXBwZXIgZm9yIGhhbmRsaW5nIGRhdGFUeXBlIG9wdGlvblxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZvcm1EYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gZm9ybURhdGFcbiAgICovXG4gIGdldERhdGEoZm9ybURhdGEpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICBpZiAoIWZvcm1EYXRhKSB7XG4gICAgICBmb3JtRGF0YSA9IGNvbmZpZy5vcHRzLmZvcm1EYXRhO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGF0YSA9IHtcbiAgICAgIHhtbDogZm9ybURhdGEgPT4gdXRpbHMucGFyc2VYTUwoZm9ybURhdGEpLFxuICAgICAganNvbjogZm9ybURhdGEgPT4gd2luZG93LkpTT04ucGFyc2UoZm9ybURhdGEpXG4gICAgfTtcblxuICAgIGRhdGEuZm9ybURhdGEgPSBzZXREYXRhW2NvbmZpZy5vcHRzLmRhdGFUeXBlXShmb3JtRGF0YSkgfHwgW107XG5cbiAgICByZXR1cm4gZGF0YS5mb3JtRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBhbmQgcmV0dXJucyBmb3JtRGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhZ2UgRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7WE1MfEpTT059IGZvcm1EYXRhXG4gICAqL1xuICBzYXZlKHN0YWdlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICBpZighc3RhZ2UpIHtcbiAgICAgIHN0YWdlID0gdGhpcy5kLnN0YWdlO1xuICAgIH1cbiAgICBsZXQgZG9TYXZlID0ge1xuICAgICAgeG1sOiAoKSA9PiBfdGhpcy54bWxTYXZlKHN0YWdlKSxcbiAgICAgIGpzb246ICgpID0+XG4gICAgICB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoX3RoaXMucHJlcERhdGEoc3RhZ2UpLCBudWxsLCAnXFx0JylcbiAgICB9O1xuXG4gICAgLy8gc2F2ZSBhY3Rpb24gZm9yIGN1cnJlbnQgYGRhdGFUeXBlYFxuICAgIGRhdGEuZm9ybURhdGEgPSBkb1NhdmVbY29uZmlnLm9wdHMuZGF0YVR5cGVdKHN0YWdlKTtcblxuICAgIC8vIHRyaWdnZXIgZm9ybVNhdmVkIGV2ZW50XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMuZm9ybVNhdmVkKTtcbiAgICByZXR1cm4gZGF0YS5mb3JtRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbmNyZW1lbnRzIHRoZSBmaWVsZCBpZHMgd2l0aCBzdXBwb3J0IGZvciBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaWQgZmllbGQgSURcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICBpbmNyZW1lbnRlZCBmaWVsZCBJRFxuICAgKi9cbiAgaW5jcmVtZW50SWQoaWQpIHtcbiAgICBsZXQgc3BsaXQgPSBpZC5sYXN0SW5kZXhPZignLScpO1xuICAgIGxldCBuZXdGaWVsZE51bWJlciA9IHBhcnNlSW50KGlkLnN1YnN0cmluZyhzcGxpdCArIDEpKSArIDE7XG4gICAgbGV0IGJhc2VTdHJpbmcgPSBpZC5zdWJzdHJpbmcoMCwgc3BsaXQpO1xuXG4gICAgcmV0dXJuIGAke2Jhc2VTdHJpbmd9LSR7bmV3RmllbGROdW1iZXJ9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZhbHVlcyBmb3IgZmllbGQgYXR0cmlidXRlcyBpbiB0aGUgZWRpdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZFxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGREYXRhXG4gICAqL1xuICBzZXRBdHRyVmFscyhmaWVsZCwgZmllbGREYXRhKSB7XG4gICAgbGV0IGF0dHJzID0gZmllbGQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImZsZC1cIl0nKTtcbiAgICB1dGlscy5mb3JFYWNoKGF0dHJzLCBpbmRleCA9PiB7XG4gICAgICBsZXQgYXR0ciA9IGF0dHJzW2luZGV4XTtcbiAgICAgIGxldCB2YWx1ZTtcbiAgICAgIGxldCBuYW1lID0gdXRpbHMuY2FtZWxDYXNlKGF0dHIuZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgICAgaWYgKGF0dHIuYXR0cmlidXRlc1snY29udGVudGVkaXRhYmxlJ10pIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyLmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSBpZiAoYXR0ci50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHZhbHVlID0gYXR0ci5jaGVja2VkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgfVxuICAgICAgZmllbGREYXRhW25hbWVdID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdCBmaWVsZCBhdHRyaWJ1dGUgdmFsdWVzIGFuZCBjYWxsIGZpZWxkUHJldmlldyB0byBnZW5lcmF0ZSBwcmV2aWV3XG4gICAqIEBwYXJhbSAge09iamVjdH0gJGZpZWxkIGpRdWVyeSBET00gZWxlbWVudFxuICAgKi9cbiAgdXBkYXRlUHJldmlldygkZmllbGQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBkID0gdGhpcy5kO1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSAkZmllbGQuYXR0cignY2xhc3MnKTtcbiAgICBsZXQgZmllbGQgPSAkZmllbGRbMF07XG4gICAgaWYgKGZpZWxkQ2xhc3MuaW5kZXhPZignaW5wdXQtY29udHJvbCcpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaWVsZFR5cGUgPSAkZmllbGQuYXR0cigndHlwZScpO1xuICAgIGxldCAkcHJldkhvbGRlciA9ICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkKTtcbiAgICBsZXQgcHJldmlld0RhdGEgPSB7XG4gICAgICB0eXBlOiBmaWVsZFR5cGVcbiAgICB9O1xuICAgIGxldCBwcmV2aWV3O1xuXG4gICAgX3RoaXMuc2V0QXR0clZhbHMoZmllbGQsIHByZXZpZXdEYXRhKTtcblxuICAgIGxldCBzdHlsZSA9ICQoJy5idG4tc3R5bGUnLCBmaWVsZCkudmFsKCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goZC5vcHRpb25GaWVsZHNSZWdFeCkpIHtcbiAgICAgIHByZXZpZXdEYXRhLnZhbHVlcyA9IFtdO1xuICAgICAgcHJldmlld0RhdGEubXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgZmllbGQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKGksICRvcHRpb24pIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHt9O1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAkKCcub3B0aW9uLXNlbGVjdGVkJywgJG9wdGlvbikuaXMoJzpjaGVja2VkJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9ICQoJy5vcHRpb24tdmFsdWUnLCAkb3B0aW9uKS52YWwoKTtcbiAgICAgICAgb3B0aW9uLmxhYmVsID0gJCgnLm9wdGlvbi1sYWJlbCcsICRvcHRpb24pLnZhbCgpO1xuICAgICAgICBwcmV2aWV3RGF0YS52YWx1ZXMucHVzaChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJldmlld0RhdGEgPSB1dGlscy50cmltT2JqKHByZXZpZXdEYXRhKTtcblxuICAgIHByZXZpZXdEYXRhLmNsYXNzTmFtZSA9IF90aGlzLmNsYXNzTmFtZXMoZmllbGQsIHByZXZpZXdEYXRhKTtcbiAgICAkKCcuZmxkLWNsYXNzTmFtZScsIGZpZWxkKS52YWwocHJldmlld0RhdGEuY2xhc3NOYW1lKTtcblxuICAgICRmaWVsZC5kYXRhKCdmaWVsZERhdGEnLCBwcmV2aWV3RGF0YSk7XG4gICAgcHJldmlldyA9IHV0aWxzLmdldFRlbXBsYXRlKHByZXZpZXdEYXRhLCB0cnVlKTtcblxuICAgIGVtcHR5KCRwcmV2SG9sZGVyWzBdKTtcbiAgICAkcHJldkhvbGRlclswXS5hcHBlbmRDaGlsZChwcmV2aWV3KTtcbiAgICBwcmV2aWV3LmRpc3BhdGNoRXZlbnQoZXZlbnRzLmZpZWxkUmVuZGVyZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgYSBjdXN0b20gdG9vbHRpcCBmb3IgZGlzYWJsZWQgZmllbGRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkXG4gICAqL1xuICBkaXNhYmxlZFRUKHN0YWdlKSB7XG4gICAgY29uc3QgbW92ZSA9IChlLCBlbGVtKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZE9mZnNldCA9IGVsZW0uZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gZmllbGRPZmZzZXQubGVmdCAtIDIxO1xuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGZpZWxkT2Zmc2V0LnRvcCAtIGVsZW0udHQub2Zmc2V0SGVpZ2h0IC0gMTI7XG4gICAgICBlbGVtLnR0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcbiAgICB9O1xuXG4gICAgY29uc3QgZGlzYWJsZWRGaWVsZHMgPSBzdGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcuZGlzYWJsZWQtZmllbGQnKTtcbiAgICB1dGlscy5mb3JFYWNoKGRpc2FibGVkRmllbGRzLCBpbmRleCA9PiB7XG4gICAgICBsZXQgZmllbGQgPSBkaXNhYmxlZEZpZWxkc1tpbmRleF07XG4gICAgICBsZXQgdGl0bGUgPSBvcHRzLm1lc3NhZ2VzLmZpZWxkTm9uRWRpdGFibGU7XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBsZXQgdHQgPSB1dGlscy5tYXJrdXAoJ3AnLCB0aXRsZSwge2NsYXNzTmFtZTogJ2ZybWItdHQnfSk7XG4gICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHR0KTtcbiAgICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiBtb3ZlKGUsIHt0dCwgZmllbGR9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyBjbGFzc05hbWVzIGZvciBmaWVsZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkXG4gICAqIEBwYXJhbSAge09iamVjdH0gcHJldmlld0RhdGFcbiAgICogQHJldHVybiB7U3RyaW5nfSBjbGFzc05hbWVzXG4gICAqL1xuICBjbGFzc05hbWVzKGZpZWxkLCBwcmV2aWV3RGF0YSkge1xuICAgIGxldCBjbGFzc05hbWUgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKCcuZmxkLWNsYXNzTmFtZScpO1xuICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpO1xuICAgIGxldCB0eXBlID0gcHJldmlld0RhdGEudHlwZTtcbiAgICBsZXQgc3R5bGUgPSBwcmV2aWV3RGF0YS5zdHlsZTtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS52YWx1ZS5zcGxpdCgnICcpO1xuICAgIGxldCB0eXBlcyA9IHtcbiAgICAgIGJ1dHRvbjogJ2J0bicsXG4gICAgICBzdWJtaXQ6ICdidG4nXG4gICAgfTtcblxuICAgIGxldCBwcmltYXJ5VHlwZSA9IHR5cGVzW3R5cGVdO1xuXG4gICAgaWYgKHByaW1hcnlUeXBlKSB7XG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKGAoPzpefFxccykke3ByaW1hcnlUeXBlfS0oLio/KSg/Olxcc3wkKStgLCAnZycpO1xuICAgICAgICAgIGxldCBtYXRjaCA9IGNsYXNzZXNbaV0ubWF0Y2gocmUpO1xuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNsYXNzZXMucHVzaChwcmltYXJ5VHlwZSArICctJyArIHN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGNsYXNzZXMucHVzaChwcmltYXJ5VHlwZSk7XG4gICAgfVxuXG4gICAgLy8gcmV2ZXJzZSB0aGUgYXJyYXkgdG8gcHV0IGN1c3RvbSBjbGFzc2VzIGF0IGVuZCxcbiAgICAvLyByZW1vdmUgYW55IGR1cGxpY2F0ZXMsIGNvbnZlcnQgdG8gc3RyaW5nLCByZW1vdmUgd2hpdGVzcGFjZVxuICAgIHJldHVybiB1dGlscy51bmlxdWUoY2xhc3Nlcykuam9pbignICcpLnRyaW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW5kIG9wZW4gZGlhbG9nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3ZlcmxheSBFeGlzdGluZyBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRpYWxvZyAgRXhpc3RpbmcgZGlhbG9nXG4gICAqL1xuICBjbG9zZUNvbmZpcm0ob3ZlcmxheSwgZGlhbG9nKSB7XG4gICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1idWlsZGVyLW92ZXJsYXknKVswXTtcbiAgICB9XG4gICAgaWYgKCFkaWFsb2cpIHtcbiAgICAgIGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tYnVpbGRlci1kaWFsb2cnKVswXTtcbiAgICB9XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMubW9kYWxDbG9zZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxheW91dCBkYXRhIGJhc2VkIG9uIGNvbnRyb2xQb3NpdGlvbiBvcHRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSBjb250cm9sUG9zaXRpb24gJ2xlZnQnIG9yICdyaWdodCdcbiAgICogQHJldHVybiB7T2JqZWN0fSBsYXlvdXQgb2JqZWN0XG4gICAqL1xuICBlZGl0b3JMYXlvdXQoY29udHJvbFBvc2l0aW9uKSB7XG4gICAgbGV0IGxheW91dE1hcCA9IHtcbiAgICAgIGxlZnQ6IHtcbiAgICAgICAgc3RhZ2U6ICdwdWxsLXJpZ2h0JyxcbiAgICAgICAgY29udHJvbHM6ICdwdWxsLWxlZnQnXG4gICAgICB9LFxuICAgICAgcmlnaHQ6IHtcbiAgICAgICAgc3RhZ2U6ICdwdWxsLWxlZnQnLFxuICAgICAgICBjb250cm9sczogJ3B1bGwtcmlnaHQnXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBsYXlvdXRNYXBbY29udHJvbFBvc2l0aW9uXSA/IGxheW91dE1hcFtjb250cm9sUG9zaXRpb25dIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBvdmVybGF5IHRvIHRoZSBwYWdlLiBVc2VkIGZvciBtb2RhbHMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIE9iamVjdFxuICAgKi9cbiAgc2hvd092ZXJsYXkoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBvdmVybGF5ID0gdXRpbHMubWFya3VwKCdkaXYnLCBudWxsLCB7XG4gICAgICBjbGFzc05hbWU6ICdmb3JtLWJ1aWxkZXItb3ZlcmxheSdcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXG4gICAgb3ZlcmxheS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBjb25maXJtYXRpb24gZGlhbG9nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG1lc3NhZ2UgICBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgZGlhbG9nXG4gICAqIEBwYXJhbSAge0Z1bmN9ICB5ZXNBY3Rpb24gY2FsbGJhY2sgdG8gZmlyZSBpZiB0aGV5IGNvbmZpcm1cbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gY29vcmRzICAgIGxvY2F0aW9uIHRvIHB1dCB0aGUgZGlhbG9nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGNsYXNzTmFtZSBDdXN0b20gY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGRpYWxvZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgUmVmZXJlbmNlIHRvIHRoZSBtb2RhbFxuICAgKi9cbiAgY29uZmlybShtZXNzYWdlLCB5ZXNBY3Rpb24sIGNvb3JkcyA9IGZhbHNlLCBjbGFzc05hbWUgPSAnJykge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBsZXQgaTE4biA9IG1pMThuLmN1cnJlbnQ7XG4gICAgbGV0IG92ZXJsYXkgPSBfdGhpcy5zaG93T3ZlcmxheSgpO1xuICAgIGxldCB5ZXMgPSBtKCdidXR0b24nLCBpMThuLnllcywge1xuICAgICAgY2xhc3NOYW1lOiAneWVzIGJ0biBidG4tc3VjY2VzcyBidG4tc20nXG4gICAgfSk7XG4gICAgbGV0IG5vID0gbSgnYnV0dG9uJywgaTE4bi5ubywge1xuICAgICAgY2xhc3NOYW1lOiAnbm8gYnRuIGJ0bi1kYW5nZXIgYnRuLXNtJ1xuICAgIH0pO1xuXG4gICAgbm8ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICB5ZXMub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgeWVzQWN0aW9uKCk7XG4gICAgICBfdGhpcy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIGxldCBidG5XcmFwID0gbSgnZGl2JywgW25vLCB5ZXNdLCB7Y2xhc3NOYW1lOiAnYnV0dG9uLXdyYXAnfSk7XG5cbiAgICBjbGFzc05hbWUgPSAnZm9ybS1idWlsZGVyLWRpYWxvZyAnICsgY2xhc3NOYW1lO1xuXG4gICAgbGV0IG1pbmlNb2RhbCA9IG0oJ2RpdicsIFttZXNzYWdlLCBidG5XcmFwXSwge2NsYXNzTmFtZX0pO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICBjb25zdCBkRSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGRFLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChkRS5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIHllcy5mb2N1cygpO1xuICAgIHJldHVybiBtaW5pTW9kYWw7XG4gIH1cblxuICAvKipcbiAgICogUG9wdXAgZGlhbG9nIHRoZSBkb2VzIG5vdCByZXF1aXJlIGNvbmZpcm1hdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfERPTXxBcnJheX0gIGNvbnRlbnRcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gY29vcmRzICAgIGZhbHNlIGlmIG5vIGNvb3JkcyBhcmUgcHJvdmlkZWQuIFdpdGhvdXQgY29vcmRpbmF0ZXNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBwb3B1cCB3aWxsIGFwcGVhciBjZW50ZXIgc2NyZWVuLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWUgY2xhc3NuYW1lIHRvIGJlIGFkZGVkIHRvIHRoZSBkaWFsb2dcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIGRvbVxuICAgKi9cbiAgZGlhbG9nKGNvbnRlbnQsIGNvb3JkcyA9IGZhbHNlLCBjbGFzc05hbWUgPSAnJykge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBsZXQgY2xpZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgbGV0IGNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgX3RoaXMuc2hvd092ZXJsYXkoKTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gdXRpbHMubWFya3VwKCdkaXYnLCBjb250ZW50LCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KTtcbiAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgY29vcmRzID0ge1xuICAgICAgICBwYWdlWDogTWF0aC5tYXgoY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIC8gMixcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIC8gMlxuICAgICAgfTtcbiAgICAgIG1pbmlNb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlNb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XG4gICAgfVxuXG4gICAgbWluaU1vZGFsLnN0eWxlLmxlZnQgPSBjb29yZHMucGFnZVggKyAncHgnO1xuICAgIG1pbmlNb2RhbC5zdHlsZS50b3AgPSBjb29yZHMucGFnZVkgKyAncHgnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtaW5pTW9kYWwpO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMubW9kYWxPcGVuZWQpO1xuXG4gICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCdkYXRhLWRpYWxvZycpICE9PSAtMSkge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudHMudmlld0RhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBtaW5pTW9kYWw7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlybSBhbGwgZmllbGRzIHdpbGwgYmUgcmVtb3ZlZCB0aGVuIHJlbW92ZSB0aGVtXG4gICAqIEBwYXJhbSAge09iamVjdH0gZSBjbGljayBldmVudCBvYmplY3RcbiAgICovXG4gIGNvbmZpcm1SZW1vdmVBbGwoZSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGZvcm1JRCA9IGUudGFyZ2V0LmlkLm1hdGNoKC9mcm1iLVxcZHsxM30vKVswXTtcbiAgICBsZXQgc3RhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSUQpO1xuICAgIGxldCBpMThuID0gbWkxOG4uY3VycmVudDtcbiAgICBsZXQgZmllbGRzID0gJCgnbGkuZm9ybS1maWVsZCcsIHN0YWdlKTtcbiAgICBsZXQgYnV0dG9uUG9zaXRpb24gPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBjb29yZHMgPSB7XG4gICAgICBwYWdlWDogYnV0dG9uUG9zaXRpb24ubGVmdCArIChidXR0b25Qb3NpdGlvbi53aWR0aCAvIDIpLFxuICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICB9O1xuXG4gICAgaWYgKGZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIF90aGlzLmNvbmZpcm0oaTE4bi5jbGVhckFsbE1lc3NhZ2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5yZW1vdmVBbGxGaWVsZHMuY2FsbChfdGhpcywgc3RhZ2UpO1xuICAgICAgICBjb25maWcub3B0cy5ub3RpZnkuc3VjY2VzcyhpMThuLmFsbEZpZWxkc1JlbW92ZWQpO1xuICAgICAgICBjb25maWcub3B0cy5vbkNsZWFyQWxsKCk7XG4gICAgICB9LCBjb29yZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5kaWFsb2coaTE4bi5ub0ZpZWxkc1RvQ2xlYXIsIGNvb3Jkcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGZpZWxkcyBmcm9tIHRoZSBmb3JtXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYW5pbWF0ZSB3aGV0aGVyIHRvIGFuaW1hdGUgb3Igbm90XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZW1vdmVBbGxGaWVsZHMoc3RhZ2UsIGFuaW1hdGUgPSB0cnVlKSB7XG4gICAgbGV0IGkxOG4gPSBtaTE4bi5jdXJyZW50O1xuICAgIGxldCBvcHRzID0gY29uZmlnLm9wdHM7XG4gICAgbGV0IGZpZWxkcyA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmZvcm0tZmllbGQnKTtcbiAgICBsZXQgbWFya0VtcHR5QXJyYXkgPSBbXTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIG1hcmtFbXB0eUFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmICghbWFya0VtcHR5QXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICBzdGFnZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICBzdGFnZS5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY29udGVudCA9IGkxOG4uZ2V0U3RhcnRlZDtcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgc3RhZ2UuY2xhc3NMaXN0LmFkZCgncmVtb3ZpbmcnKTtcbiAgICAgIGxldCBvdXRlckhlaWdodCA9IDA7XG4gICAgICB1dGlscy5mb3JFYWNoKGZpZWxkcywgaW5kZXggPT5cbiAgICAgICAgb3V0ZXJIZWlnaHQgKz0gZmllbGRzW2luZGV4XS5vZmZzZXRIZWlnaHQgKyAzKTtcbiAgICAgIGZpZWxkc1swXS5zdHlsZS5tYXJnaW5Ub3AgPSBgJHstb3V0ZXJIZWlnaHR9cHhgO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVtcHR5KHN0YWdlKS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmluZycpO1xuICAgICAgfSwgNDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1wdHkoc3RhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHJlLW9yZGVycyB0aGUgZWxlbWVudHMgdGhlaXIgb3JkZXIgc2hvdWxkIGJlIHNhdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGNiVUwgb3VyIGxpc3Qgb2YgZWxlbWVudHNcbiAgICovXG4gIHNldEZpZWxkT3JkZXIoJGNiVUwpIHtcbiAgICBpZiAoIWNvbmZpZy5vcHRzLnNvcnRhYmxlQ29udHJvbHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgZmllbGRPcmRlciA9IHt9O1xuXG4gICAgJGNiVUwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBmaWVsZE9yZGVyW2luZGV4XSA9ICQoZWxlbWVudCkuZGF0YSgndHlwZScpO1xuICAgIH0pO1xuXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2ZpZWxkT3JkZXInLCB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoZmllbGRPcmRlcikpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW9yZGVyIHRoZSBjb250cm9scyBpZiB0aGUgdXNlciBoYXMgcHJldmlvdXNseSBvcmRlcmVkIHRoZW0uXG4gICAqXG4gICAqIEBwYXJhbSAge0FycmF5fSBmcm1iRmllbGRzXG4gICAqIEByZXR1cm4ge0FycmF5fSBvcmRlcmVkIGZpZWxkc1xuICAgKi9cbiAgb3JkZXJGaWVsZHMoZnJtYkZpZWxkcykge1xuICAgIGNvbnN0IG9wdHMgPSBjb25maWcub3B0cztcbiAgICBsZXQgZmllbGRPcmRlciA9IGZhbHNlO1xuICAgIGxldCBuZXdPcmRlckZpZWxkcyA9IFtdO1xuXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgICBmaWVsZE9yZGVyID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZE9yZGVyKSB7XG4gICAgICBsZXQgY29udHJvbE9yZGVyID0gb3B0cy5jb250cm9sT3JkZXIuY29uY2F0KGZybWJGaWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgIGZpZWxkLmF0dHJzLnR5cGUpKTtcbiAgICAgIGZpZWxkT3JkZXIgPSB1dGlscy51bmlxdWUoY29udHJvbE9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5KU09OLnBhcnNlKGZpZWxkT3JkZXIpO1xuICAgICAgZmllbGRPcmRlciA9IE9iamVjdC5rZXlzKGZpZWxkT3JkZXIpLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZE9yZGVyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmaWVsZE9yZGVyLmZvckVhY2goKGZpZWxkVHlwZSkgPT4ge1xuICAgICAgbGV0IGZpZWxkID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmF0dHJzLnR5cGUgPT09IGZpZWxkVHlwZTtcbiAgICAgIH0pWzBdO1xuICAgICAgbmV3T3JkZXJGaWVsZHMucHVzaChmaWVsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3T3JkZXJGaWVsZHMuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIGZpZWxkcyBiZWluZyBlZGl0aW5nXG4gICAqIEBwYXJhbSAge09iamVjdH0gc3RhZ2VcbiAgICovXG4gIGNsb3NlQWxsRWRpdCgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgX3RoaXMuZC5zdGFnZSk7XG4gICAgY29uc3QgdG9nZ2xlQnRucyA9ICQoJy50b2dnbGUtZm9ybScsIF90aGlzLmQuc3RhZ2UpO1xuICAgIGNvbnN0IGVkaXRQYW5lbHMgPSAkKCcuZnJtLWhvbGRlcicsIGZpZWxkcyk7XG5cbiAgICB0b2dnbGVCdG5zLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgZmllbGRzLnJlbW92ZUNsYXNzKCdlZGl0aW5nJyk7XG4gICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGRzKS5zaG93KCk7XG4gICAgZWRpdFBhbmVscy5oaWRlKCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWRpdCBtb2RlIGZvciB0aGUgZ2l2ZW4gZmllbGRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZElkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGFuaW1hdGVcbiAgICovXG4gIHRvZ2dsZUVkaXQoZmllbGRJZCwgYW5pbWF0ZSA9IHRydWUpIHtcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSWQpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0biA9ICQoJy50b2dnbGUtZm9ybScsIGZpZWxkKTtcbiAgICBjb25zdCBlZGl0UGFuZWwgPSAkKCcuZnJtLWhvbGRlcicsIGZpZWxkKTtcbiAgICBmaWVsZC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nJyk7XG4gICAgdG9nZ2xlQnRuLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkKS5zbGlkZVRvZ2dsZSgyNTApO1xuICAgICAgZWRpdFBhbmVsLnNsaWRlVG9nZ2xlKDI1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkKS50b2dnbGUoKTtcbiAgICAgIGVkaXRQYW5lbC50b2dnbGUoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3KCQoZmllbGQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9scyBmb2xsb3cgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgc3RpY2t5Q29udHJvbHMoKSB7XG4gICAgbGV0IGQgPSB0aGlzLmQ7XG4gICAgY29uc3QgJGNiV3JhcCA9ICQoZC5jb250cm9scykucGFyZW50KCk7XG4gICAgY29uc3QgJHN0YWdlV3JhcCA9ICQoZC5zdGFnZSkucGFyZW50KCk7XG4gICAgY29uc3QgY2JXaWR0aCA9ICRjYldyYXAud2lkdGgoKTtcbiAgICBjb25zdCBjYlBvc2l0aW9uID0gZC5jb250cm9scy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBsZXQgc2Nyb2xsVG9wID0gJChldnQudGFyZ2V0KS5zY3JvbGxUb3AoKTtcbiAgICAgIGNvbnN0IG9mZnNldERlZmF1bHRzID0ge1xuICAgICAgICB0b3A6IDUsXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgICBsZWZ0OiBjYlBvc2l0aW9uLmxlZnRcbiAgICAgIH07XG5cbiAgICAgIGxldCBvZmZzZXQgPSBPYmplY3QuYXNzaWduKHt9LCBvZmZzZXREZWZhdWx0cywgY29uZmlnLm9wdHMuc3RpY2t5Q29udHJvbHMub2Zmc2V0KTtcblxuICAgICAgaWYgKHNjcm9sbFRvcCA+ICRzdGFnZVdyYXAub2Zmc2V0KCkudG9wKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiBjYldpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2JTdHlsZSA9IE9iamVjdC5hc3NpZ24oc3R5bGUsIG9mZnNldCk7XG5cbiAgICAgICAgbGV0IGNiT2Zmc2V0ID0gJGNiV3JhcC5vZmZzZXQoKTtcbiAgICAgICAgbGV0IHN0YWdlT2Zmc2V0ID0gJHN0YWdlV3JhcC5vZmZzZXQoKTtcbiAgICAgICAgbGV0IGNiQm90dG9tID0gY2JPZmZzZXQudG9wICsgJGNiV3JhcC5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHN0YWdlQm90dG9tID0gc3RhZ2VPZmZzZXQudG9wICsgJHN0YWdlV3JhcC5oZWlnaHQoKTtcblxuICAgICAgICBpZiAoY2JCb3R0b20gPiBzdGFnZUJvdHRvbSAmJiAoY2JPZmZzZXQudG9wICE9PSBzdGFnZU9mZnNldC50b3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3Moe1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgbGVmdDogJ2F1dG8nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2JCb3R0b20gPCBzdGFnZUJvdHRvbSB8fCAoY2JCb3R0b20gPT09IHN0YWdlQm90dG9tICYmIGNiT2Zmc2V0LnRvcCA+IHNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAkY2JXcmFwLmNzcyhjYlN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZC5jb250cm9scy5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgZGlhbG9nIHdpdGggdGhlIGZvcm0ncyBkYXRhXG4gICAqL1xuICBzaG93RGF0YShlKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHV0aWxzLmVzY2FwZUh0bWwoZGF0YS5mb3JtRGF0YSk7XG4gICAgY29uc3QgY29kZSA9IG0oJ2NvZGUnLCBmb3JtRGF0YSwge1xuICAgICAgY2xhc3NOYW1lOiBgZm9ybURhdGEtJHtjb25maWcub3B0cy5kYXRhVHlwZX1gXG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZyhtKCdwcmUnLCBjb2RlKSwgbnVsbCwgJ2RhdGEtZGlhbG9nJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgZmllbGQgZnJvbSB0aGUgc3RhZ2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgZmllbGRJRCBJRCBvZiB0aGUgZmllbGQgdG8gYmUgcmVtb3ZlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBmaWVsZFJlbW92ZWQgcmV0dXJucyB0cnVlIGlmIGZpZWxkIGlzIHJlbW92ZWRcbiAgICovXG4gIHJlbW92ZUZpZWxkKGZpZWxkSUQpIHtcbiAgICBsZXQgZmllbGRSZW1vdmVkID0gZmFsc2U7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBmb3JtID0gdGhpcy5kLnN0YWdlO1xuICAgIGNvbnN0IGZpZWxkcyA9IGZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1maWVsZCcpO1xuXG4gICAgaWYgKCFmaWVsZHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ05vIGZpZWxkcyB0byByZW1vdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkSUQpIHtcbiAgICAgIGxldCBhdmFpbGFibGVJZHMgPSBbXS5zbGljZS5jYWxsKGZpZWxkcykubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUud2FybignZmllbGRJRCByZXF1aXJlZCB0byByZW1vdmUgc3BlY2lmaWMgZmllbGRzLiBSZW1vdmluZyBsYXN0IGZpZWxkIHNpbmNlIG5vIElEIHdhcyBzdXBwbGllZC4nKTtcbiAgICAgIGNvbnNvbGUud2FybignQXZhaWxhYmxlIElEczogJyArIGF2YWlsYWJsZUlkcy5qb2luKCcsICcpKTtcbiAgICAgIGZpZWxkSUQgPSBmb3JtLmxhc3RDaGlsZC5pZDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSUQpO1xuICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuICAgIGlmICghZmllbGQpIHtcbiAgICAgIGNvbnNvbGUud2FybignRmllbGQgbm90IGZvdW5kJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJGZpZWxkLnNsaWRlVXAoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgICRmaWVsZC5yZW1vdmUoKTtcbiAgICAgIGZpZWxkUmVtb3ZlZCA9IHRydWU7XG4gICAgICBfdGhpcy5zYXZlKCk7XG4gICAgICBpZiAoIWZvcm0uY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHN0YWdlV3JhcCA9IGZvcm0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgIHN0YWdlV3JhcC5kYXRhc2V0LmNvbnRlbnQgPSBtaTE4bi5jdXJyZW50LmdldFN0YXJ0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5maWVsZFJlbW92ZWQpO1xuICAgIHJldHVybiBmaWVsZFJlbW92ZWQ7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgbWFya3VwIGZvciBmb3JtIGFjdGlvbiBidXR0b25zXG4gICAqIEBwYXJhbSAge09iamVjdH0gYnV0dG9uRGF0YVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IERPTSBlbGVtZW50IGZvciBhY3Rpb24gYnV0dG9uXG4gICAqL1xuICBwcm9jZXNzQWN0aW9uQnV0dG9ucyhidXR0b25EYXRhKSB7XG4gICAgbGV0IHtsYWJlbCwgZXZlbnRzLCAuLi5hdHRyc30gPSBidXR0b25EYXRhO1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGlmICghbGFiZWwpIHtcbiAgICAgIGlmIChhdHRycy5pZCkge1xuICAgICAgICBsYWJlbCA9IG1pMThuLmN1cnJlbnRbYXR0cnMuaWRdIHx8IHV0aWxzLmNhcGl0YWxpemUoYXR0cnMuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSAnJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWwgPSBtaTE4bi5jdXJyZW50W2xhYmVsXSB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoIWF0dHJzLmlkKSB7XG4gICAgICBhdHRycy5pZCA9IGAke2RhdGEuZm9ybUlEfS1hY3Rpb24tJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMTAwMCl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cnMuaWQgPSBgJHtkYXRhLmZvcm1JRH0tJHthdHRycy5pZH0tYWN0aW9uYDtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBtKCdidXR0b24nLCBsYWJlbCwgYXR0cnMpO1xuXG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgZm9yIChsZXQgZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9zcyBsaW5rIHN1YnR5cGVzIGFuZCBkZWZpbmUgbWFya3VwIGNvbmZpZ1xuICAgKiBAcGFyYW0gIHtBcnJheX0gc3VidHlwZU9wdHNcbiAgICogQHJldHVybiB7QXJyYXl9IHN1YnR5cGVzXG4gICAqL1xuICBwcm9jZXNzU3VidHlwZXMoc3VidHlwZU9wdHMpIHtcbiAgICBsZXQgc3VidHlwZXMgPSB7fTtcbiAgICBjb25zdCBzdWJ0eXBlRm9ybWF0ID0gc3VidHlwZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IG1pMThuLmdldChzdWJ0eXBlKSxcbiAgICAgICAgICB2YWx1ZTogc3VidHlwZVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLnN1YnR5cGVzID0gdXRpbHMubWVyZ2UoZGVmYXVsdFN1YnR5cGVzLCBzdWJ0eXBlT3B0cyk7XG5cbiAgICAgIGZvciAobGV0IHN1YnR5cGUgaW4gY29uZmlnLnN1YnR5cGVzKSB7XG4gICAgICAgIGlmIChjb25maWcuc3VidHlwZXMuaGFzT3duUHJvcGVydHkoc3VidHlwZSkpIHtcbiAgICAgICAgICBzdWJ0eXBlc1tzdWJ0eXBlXSA9IGNvbmZpZy5zdWJ0eXBlc1tzdWJ0eXBlXS5tYXAoc3VidHlwZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YnR5cGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHN0YWdlIGFuZCBjb250cm9scyBkb20gZWxlbWVudHNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmb3JtSUQgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZWRpdG9yVUkoZm9ybUlEKSB7XG4gICAgbGV0IGQgPSB0aGlzLmQ7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgZC5zdGFnZSA9IG0oJ3VsJywgbnVsbCwge1xuICAgICAgICBpZDogZGF0YS5mb3JtSUQsXG4gICAgICAgIGNsYXNzTmFtZTogJ2ZybWInXG4gICAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBkcmFnZ2FibGUgZmllbGRzIGZvciBmb3JtQnVpbGRlclxuICAgIGQuY29udHJvbHMgPSBtKCd1bCcsIG51bGwsIHtcbiAgICAgIGlkOiBgJHtkYXRhLmZvcm1JRH0tY29udHJvbC1ib3hgLFxuICAgICAgY2xhc3NOYW1lOiAnZnJtYi1jb250cm9sJ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgdXNlciBvcHRpb25zIGZvciBhY3Rpb25CdXR0b25zXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IHByb2Nlc3NlZE9wdGlvbnNcbiAgICovXG4gIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHtmaWVsZHMgPSBbXSwgdGVtcGxhdGVzLCAuLi5vcHRzfSA9IG9wdGlvbnM7XG4gICAgbGV0IGFjdGlvbkJ1dHRvbnMgPSBbe1xuICAgICAgaWQ6ICdjbGVhcicsXG4gICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kYW5nZXInLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsaWNrOiBfdGhpcy5jb25maXJtUmVtb3ZlQWxsLmJpbmQoX3RoaXMpXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6ICd2aWV3SlNPTicsXG4gICAgICBpZDogJ2RhdGEnLFxuICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1kZWZhdWx0JyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBjbGljazogX3RoaXMuc2hvd0RhdGEuYmluZChfdGhpcylcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBpZDogJ3NhdmUnLFxuICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICBjbGFzc05hbWU6ICdidG4gYnRuLXByaW1hcnkgc2F2ZS10ZW1wbGF0ZScsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xpY2s6IGV2dCA9PiB7XG4gICAgICAgICAgX3RoaXMuc2F2ZSgpO1xuICAgICAgICAgIGNvbmZpZy5vcHRzLm9uU2F2ZShldnQsIF90aGlzLmRhdGEuZm9ybURhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfV07XG5cbiAgICBsZXQgZGVmYXVsdEZpZWxkcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnYXV0b2NvbXBsZXRlJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2F1dG9jb21wbGV0ZSdcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdidXR0b24nKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdjaGVja2JveEdyb3VwJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdkYXRlRmllbGQnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IG1pMThuLmdldCgnZmlsZVVwbG9hZCcpLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdoZWFkZXInKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnaGVhZGVyJyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdoaWRkZW4nKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdudW1iZXInKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdwYXJhZ3JhcGgnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdyYWRpb0dyb3VwJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCdzZWxlY3QnKSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KCd0ZXh0JyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoJ3RleHRBcmVhJyksXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ3RleHRhcmVhJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIG9wdHMuZmllbGRzID0gZmllbGRzLmNvbmNhdChkZWZhdWx0RmllbGRzKTtcbiAgICBjb25maWcub3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHthY3Rpb25CdXR0b25zLCB0ZW1wbGF0ZXMsIGZpZWxkc30sIG9wdHMpO1xuICAgIGxldCB1c2VyVGVtcGxhdGVzID0gT2JqZWN0LmtleXMoY29uZmlnLm9wdHMudGVtcGxhdGVzKS5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiBba2V5LCBjb25maWcub3B0cy50ZW1wbGF0ZXNba2V5XV07XG4gICAgfSk7XG4gICAgdXRpbHMudGVtcGxhdGVzID0gdXRpbHMudGVtcGxhdGVzLmNvbmNhdCh1c2VyVGVtcGxhdGVzKTtcblxuICAgIHJldHVybiBjb25maWcub3B0cztcbiAgfVxuXG5cbiAgLy8gZW5kIGNsYXNzXG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhlbHBlcnM7XG4iLCIvKipcbiAqIFBvbHlmaWxscyBmb3Igb2xkZXIgYnJvd3NlcnMgYW5kIGFkZGVkIGZ1bmN0aW9uYWxpdHlcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHBvbHlmaWxscygpIHtcbiAgLy8gRWxlbWVudC5yZW1vdmUoKSBwb2x5ZmlsbFxuICBpZiAoISgncmVtb3ZlJyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBFdmVudCBwb2x5ZmlsbFxuICBpZiAodHlwZW9mIEV2ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LkV2ZW50ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoZXZ0LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG5cbiAgLy8gT2JqZWN0LmFzc2lnbiBwb2x5ZmlsbFxuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0ID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBsZXQgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfVxuXG5cbiAgLy8gUmVmZXJlbmNlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjQuNC4xOFxuICBpZiAoIUFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgbGV0IFQsIGs7XG4gICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xuICAgICAgfVxuICAgICAgbGV0IE8gPSBPYmplY3QodGhpcyk7XG4gICAgICBsZXQgbGVuID0gTy5sZW5ndGggPj4+IDA7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgVCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIH1cbiAgICAgIGsgPSAwO1xuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgbGV0IGtWYWx1ZTtcbiAgICAgICAgaWYgKGsgaW4gTykge1xuICAgICAgICAgIGtWYWx1ZSA9IE9ba107XG4gICAgICAgICAgY2FsbGJhY2suY2FsbChULCBrVmFsdWUsIGssIE8pO1xuICAgICAgICB9XG4gICAgICAgIGsrKztcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvbHlmaWxscygpO1xuIiwiaW1wb3J0IHtkZWZhdWx0U3VidHlwZXMsIGZpbHRlcn0gZnJvbSAnLi9kb20nO1xuXG4vKipcbiAqIENyb3NzIGZpbGUgdXRpbGl0aWVzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzLFxuICogc29ydGluZyBhbmQgb3RoZXIgZnVuIHN0dWZmXG4gKiBAcmV0dXJuIHtPYmplY3R9IHV0aWxzXG4gKi9cbiAgY29uc3QgdXRpbHMgPSB7fTtcbiAgd2luZG93LmZiTG9hZGVkID0ge1xuICAgIGpzOiBbXSxcbiAgICBjc3M6IFtdXG4gIH07XG4gIHdpbmRvdy5mYkVkaXRvcnMgPSB7XG4gICAgcXVpbGw6IHt9LFxuICAgIHRpbnltY2U6IHt9XG4gIH07XG5cbiAgLy8gY2xlYW5lciBzeW50YXggZm9yIHRlc3RpbmcgaW5kZXhPZiBlbGVtZW50XG4gIHV0aWxzLmluQXJyYXkgPSBmdW5jdGlvbihuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICBPYmplY3QgdHJpbW1lZCBvZiBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICovXG4gIHV0aWxzLnRyaW1PYmogPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCB4bWxSZW1vdmUgPSBbXG4gICAgICBudWxsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgJycsXG4gICAgICBmYWxzZSxcbiAgICAgICdmYWxzZSdcbiAgICBdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmICh1dGlscy5pbkFycmF5KGF0dHJzW2F0dHJdLCB4bWxSZW1vdmUpKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhdHRyc1thdHRyXSkpIHtcbiAgICAgICAgaWYgKCFhdHRyc1thdHRyXS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgYXR0cmlidXRlIGlzIGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICB1dGlscy52YWxpZEF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XG4gICAgbGV0IGludmFsaWQgPSBbXG4gICAgICAndmFsdWVzJyxcbiAgICAgICdlbmFibGVPdGhlcicsXG4gICAgICAnb3RoZXInLFxuICAgICAgJ2xhYmVsJyxcbiAgICAgIC8vICdzdHlsZScsXG4gICAgICAnc3VidHlwZSdcbiAgICBdO1xuICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShhdHRyLCBpbnZhbGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBhdHRycyBvYmplY3QgaW50byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIG9iamVjdCBvZiBhdHRyaWJ1dGVzIGZvciBtYXJrdXBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdXRpbHMuYXR0clN0cmluZyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSAmJiB1dGlscy52YWxpZEF0dHIoYXR0cikpIHtcbiAgICAgICAgYXR0ciA9IHV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIubmFtZSArIGF0dHIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlcy5qb2luKCcgJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXR0cmlidXRlcyB0byBtYXJrdXAgc2FmZSBzdHJpbmdzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIHV0aWxzLnNhZmVBdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gdXRpbHMuc2FmZUF0dHJOYW1lKG5hbWUpO1xuICAgIGxldCB2YWxTdHJpbmc7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWxTdHJpbmcgPSB1dGlscy5lc2NhcGVBdHRyKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbFN0cmluZyA9IHV0aWxzLmVzY2FwZUF0dHIodmFsdWUucmVwbGFjZSgnLCcsICcgJykudHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlID8gYD1cIiR7dmFsU3RyaW5nfVwiYCA6ICcnO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIHV0aWxzLnNhZmVBdHRyTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBsZXQgc2FmZUF0dHIgPSB7XG4gICAgICBjbGFzc05hbWU6ICdjbGFzcydcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNhZmVBdHRyW25hbWVdIHx8IHV0aWxzLmh5cGhlbkNhc2UobmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5ncyBpbnRvIGxvd2VyY2FzZS1oeXBoZW5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgdXRpbHMuaHlwaGVuQ2FzZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9eLSsvZywgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0IGEgaHlwaGVuYXRlZCBzdHJpbmcgdG8gY2FtZWxDYXNlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIHV0aWxzLmNhbWVsQ2FzZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShbYS16XSkvZywgKG0sIHcpID0+XG4gICAgdy50b1VwcGVyQ2FzZSgpKTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGNvbnRlbnQgdHlwZVxuICAgKiBAcGFyYW0gIHtOb2RlIHwgU3RyaW5nIHwgQXJyYXkgfCBPYmplY3R9IGNvbnRlbnRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSBmb3IgbWFwcGluZ1xuICAgKi9cbiAgdXRpbHMuY29udGVudFR5cGUgPSBjb250ZW50ID0+IHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBjb250ZW50O1xuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgTm9kZSB8fCBjb250ZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHR5cGUgPSAnbm9kZSc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICB0eXBlID0gJ2FycmF5JztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBldmVudHMgdG8gYW4gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudHMgIG9iamVjdCBmdWxsIG9mIGV2ZW50cyBlZy4ge2NsaWNrOiBldnQgPT4gY2FsbGJhY2t9XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1dGlscy5iaW5kRXZlbnRzID0gKGVsZW1lbnQsIGV2ZW50cykgPT4ge1xuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZ0ID0+IGV2ZW50c1tldmVudF0oZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1bmlxdWUgbmFtZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSAge09iamVjdH0gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgbmFtZVxuICovXG4gIHV0aWxzLm5hbWVBdHRyID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgZXBvY2ggPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBsZXQgcHJlZml4ID0gZmllbGQudHlwZSB8fCB1dGlscy5oeXBoZW5DYXNlKGZpZWxkLmxhYmVsKTtcbiAgICByZXR1cm4gcHJlZml4ICsgJy0nICsgZXBvY2g7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCB3cmFwcGVyIHdoZXJlIG5lZWRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICB0YWdcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fE9iamVjdH0gY29udGVudCB3ZSB3cmFwIHRoaXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgYXR0cmlidXRlc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IERPTSBFbGVtZW50XG4gICAqL1xuICB1dGlscy5tYXJrdXAgPSBmdW5jdGlvbih0YWcsIGNvbnRlbnQgPSAnJywgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgbGV0IGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgbGV0IHtldmVudHMsIC4uLmF0dHJzfSA9IGF0dHJpYnV0ZXM7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICBjb25zdCBhcHBlbmRDb250ZW50ID0ge1xuICAgICAgc3RyaW5nOiBjb250ZW50ID0+IHtcbiAgICAgICAgZmllbGQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICB9LFxuICAgICAgb2JqZWN0OiBjb25maWcgPT4ge1xuICAgICAgICBsZXQge3RhZywgY29udGVudCwgLi4uZGF0YX0gPSBjb25maWc7XG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZCh1dGlscy5tYXJrdXAodGFnLCBjb250ZW50LCBkYXRhKSk7XG4gICAgICB9LFxuICAgICAgbm9kZTogY29udGVudCA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIH0sXG4gICAgICBhcnJheTogY29udGVudCA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudFtpXSk7XG4gICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbjogY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50KCk7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gdXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdKGNvbnRlbnQpO1xuICAgICAgfSxcbiAgICAgIHVuZGVmaW5lZDogKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKHRhZywgY29udGVudCwgYXR0cmlidXRlcyk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB1dGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdLmNhbGwodGhpcywgY29udGVudCk7XG4gICAgfVxuXG4gICAgdXRpbHMuYmluZEV2ZW50cyhmaWVsZCwgZXZlbnRzKTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcbiAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGV4OiB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIHV0aWxzLnBhcnNlQXR0cnMgPSBlbGVtID0+IHtcbiAgICBsZXQgYXR0cnMgPSBlbGVtLmF0dHJpYnV0ZXM7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICB1dGlscy5mb3JFYWNoKGF0dHJzLCBhdHRyID0+IHtcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XG4gICAgICBpZiAoYXR0clZhbC5tYXRjaCgvZmFsc2V8dHJ1ZS9nKSkge1xuICAgICAgICBhdHRyVmFsID0gKGF0dHJWYWwgPT09ICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xuICAgICAgICBhdHRyVmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0clZhbCkge1xuICAgICAgICBkYXRhW2F0dHJzW2F0dHJdLm5hbWVdID0gYXR0clZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZpZWxkIG9wdGlvbnMgdG8gb3B0aW9uRGF0YVxuICAgKiBAcGFyYW0gIHtOb2RlTGlzdH0gb3B0aW9ucyAgRE9NIGVsZW1lbnRzXG4gICAqIEByZXR1cm4ge0FycmF5fSBvcHRpb25EYXRhIGFycmF5XG4gICAqL1xuICB1dGlscy5wYXJzZU9wdGlvbnMgPSBvcHRpb25zID0+IHtcbiAgICBsZXQgb3B0aW9uRGF0YSA9IHt9O1xuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9wdGlvbkRhdGEgPSB1dGlscy5wYXJzZUF0dHJzKG9wdGlvbnNbaV0pO1xuICAgICAgb3B0aW9uRGF0YS5sYWJlbCA9IG9wdGlvbnNbaV0udGV4dENvbnRlbnQ7XG4gICAgICBkYXRhLnB1c2gob3B0aW9uRGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHhtbFN0cmluZ1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBmb3JtRGF0YSBhcnJheVxuICAgKi9cbiAgdXRpbHMucGFyc2VYTUwgPSB4bWxTdHJpbmcgPT4ge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKTtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcblxuICAgIGlmICh4bWwpIHtcbiAgICAgIGxldCBmaWVsZHMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpZWxkJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gdXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZmllbGRzW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKTtcblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSB1dGlscy5wYXJzZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBlc2NhcGVkIEhUTUwgaW50byB1c2FibGUgSFRNTFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgZXNjYXBlZCBIVE1MXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBwYXJzZWQgSFRNTFxuICAgKi9cbiAgdXRpbHMucGFyc2VkSHRtbCA9IGh0bWwgPT4ge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVzY2FwZSBtYXJrdXAgc28gaXQgY2FuIGJlIGRpc3BsYXllZCByYXRoZXIgdGhhbiByZW5kZXJlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgbWFya3VwXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBlc2NhcGVkIGh0bWxcbiAgICovXG4gIHV0aWxzLmVzY2FwZUh0bWwgPSBodG1sID0+IHtcbiAgICBsZXQgZXNjYXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZXNjYXBlRWxlbWVudC50ZXh0Q29udGVudCA9IGh0bWw7XG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQuaW5uZXJIVE1MO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhbiBhdHRyaWJ1dGVcbiAgdXRpbHMuZXNjYXBlQXR0ciA9IHN0ciA9PiB7XG4gICAgbGV0IG1hdGNoID0ge1xuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlcGxhY2VUYWcgPSB0YWcgPT4gbWF0Y2hbdGFnXSB8fCB0YWc7XG5cbiAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSA/IHN0ci5yZXBsYWNlKC9bXCImPD5dL2csIHJlcGxhY2VUYWcpIDogc3RyO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhdHRyaWJ1dGVzXG4gIHV0aWxzLmVzY2FwZUF0dHJzID0gYXR0cnMgPT4ge1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICBhdHRyc1thdHRyXSA9IHV0aWxzLmVzY2FwZUF0dHIoYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvLyBmb3JFYWNoIHRoYXQgY2FuIGJlIHVzZWQgb24gbm9kZUxpc3RcbiAgdXRpbHMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7IC8vIHBhc3NlcyBiYWNrIHN0dWZmIHdlIG5lZWRcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtICB7QXJyYXl9IGFycmF5ICBhcnJheSB3aXRoIHBvc3NpYmxlIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBhcnJheSB3aXRoIG9ubHkgdW5pcXVlIHZhbHVlc1xuICAgKi9cbiAgdXRpbHMudW5pcXVlID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGVsZW0sIHBvcywgYXJyKSA9PlxuICAgICAgKGFyci5pbmRleE9mKGVsZW0pID09PSBwb3MpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHZhbHVlIGZyb20gYW4gYXJyYXlcbiAgICogQHBhcmFtICB7U3RyaW5nfE51bWJlcn0gdmFsXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJcbiAgICovXG4gIHV0aWxzLnJlbW92ZSA9ICh2YWwsIGFycikgPT4ge1xuICAgIGxldCBpbmRleCA9IGFyci5pbmRleE9mKHZhbCk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcblxuXG4gIHV0aWxzLm1ha2VMYWJlbCA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHtsYWJlbCA9ICcnLCBkZXNjcmlwdGlvbiA9ICcnLCAuLi5hdHRyc30gPSBmaWVsZERhdGE7XG4gICAgbGV0IGxhYmVsVGV4dCA9IHV0aWxzLnBhcnNlZEh0bWwobGFiZWwpO1xuICAgIGxldCBsYWJlbENvbnRlbnRzID0gW2xhYmVsVGV4dF07XG5cbiAgICBpZiAoYXR0cnMucmVxdWlyZWQpIHtcbiAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJyAqJywge2NsYXNzTmFtZTogJ2ZiLXJlcXVpcmVkJ30pKTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICBsYWJlbENvbnRlbnRzLnB1c2gobSgnc3BhbicsICc/Jywge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3Rvb2x0aXAtZWxlbWVudCcsXG4gICAgICAgICAgdG9vbHRpcDogZGVzY3JpcHRpb25cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBsYWJlbEF0dHJzID0ge1xuICAgICAgY2xhc3NOYW1lOiBgZmItJHthdHRycy50eXBlfS1sYWJlbGBcbiAgICB9O1xuXG4gICAgaWYgKGF0dHJzLmlkKSB7XG4gICAgICBsYWJlbEF0dHJzLmZvciA9IGF0dHJzLmlkO1xuICAgIH1cblxuICAgIHJldHVybiBtKCdsYWJlbCcsIGxhYmVsQ29udGVudHMsIGxhYmVsQXR0cnMpO1xuICB9O1xuXG4gIHV0aWxzLnRlbXBsYXRlTWFwID0gdHlwZSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSB1dGlscy50ZW1wbGF0ZXM7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIHRlbXBsYXRlcykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBpZih1dGlscy5pbkFycmF5KHR5cGUsIGtleSkpIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGtleSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgdXRpbHMuYXV0b2NvbXBsZXRlVGVtcGxhdGUgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7dmFsdWVzLCB0eXBlLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBjb25zdCBrZXlib2FyZE5hdiA9IChlKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gZS50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICBsZXQgYWN0aXZlT3B0aW9uID0gbGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUtb3B0aW9uJylbMF07XG4gICAgICBjb25zdCBrZXlDb2RlTWFwVmFscyA9IFtcbiAgICAgICAgLy8gdXBcbiAgICAgICAgWzM4LCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbi5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gYWN0aXZlT3B0aW9uLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvLyBkb3duXG4gICAgICAgIFs0MCwgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gYWN0aXZlT3B0aW9uLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBsaXN0LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFsxMywgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gYWN0aXZlT3B0aW9uLmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmIChsaXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIF07XG4gICAgICBsZXQga2V5Q29kZU1hcCA9IG5ldyBNYXAoa2V5Q29kZU1hcFZhbHMpO1xuXG4gICAgICBsZXQgZGlyZWN0aW9uID0ga2V5Q29kZU1hcC5nZXQoZS5rZXlDb2RlKTtcbiAgICAgIGlmKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgZGlyZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3Rpb24oKTtcbiAgICB9O1xuICAgIGNvbnN0IGZhdXhFdmVudHMgPSB7XG4gICAgICBmb2N1czogZXZ0ID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICBldnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZE5hdik7XG4gICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGxpc3Quc3R5bGUud2lkdGggPSBsaXN0LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgICAgfSxcbiAgICAgIGJsdXI6IGV2dCA9PiB7XG4gICAgICAgIGV2dC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkTmF2KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfSxcbiAgICAgIGlucHV0OiAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICBmaWx0ZXIobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLCBldnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKCFldnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBmYXV4QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLFxuICAgICAge1xuICAgICAgICBpZDogYCR7ZGF0YS5pZH0taW5wdXRgLFxuICAgICAgICBldmVudHM6IGZhdXhFdmVudHNcbiAgICAgIH0pO1xuICAgIGxldCBoaWRkZW5BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHt0eXBlOiAnaGlkZGVuJ30pO1xuICAgIGRlbGV0ZSBmYXV4QXR0cnMubmFtZTtcbiAgICBjb25zdCBmaWVsZCA9IFtcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgZmF1eEF0dHJzKSxcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgaGlkZGVuQXR0cnMpXG4gICAgXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB2YWx1ZXMubWFwKG9wdGlvbkRhdGEgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gb3B0aW9uRGF0YS5sYWJlbDtcbiAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiBldnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gbGlzdC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBvcHRpb25EYXRhLmxhYmVsO1xuICAgICAgICAgICAgZmllbGQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gb3B0aW9uRGF0YS52YWx1ZTtcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBvcHRpb25EYXRhLnZhbHVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG0oJ2xpJywgbGFiZWwsIGNvbmZpZyk7XG4gICAgfSk7XG5cbiAgICBmaWVsZC5wdXNoKG0oJ3VsJywgb3B0aW9ucyxcbiAgICAgIHtpZDogYCR7ZGF0YS5pZH0tbGlzdGAsIGNsYXNzTmFtZTogYGZiLSR7dHlwZX0tbGlzdGB9KSk7XG5cbiAgICBjb25zdCBvblJlbmRlciA9IChldnQpID0+IHtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge2ZpZWxkLCBvblJlbmRlcn07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIERPTSBlbGVtZW50cyBmb3Igc2VsZWN0LCBjaGVja2JveC1ncm91cCBhbmQgcmFkaW8tZ3JvdXAuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGREYXRhXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGlzUHJldmlld1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICBET00gZWxlbWVudHNcbiAgICovXG4gIHV0aWxzLnNlbGVjdFRlbXBsYXRlID0gKGZpZWxkRGF0YSwgaXNQcmV2aWV3KSA9PiB7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICBsZXQge3ZhbHVlcywgdHlwZSwgaW5saW5lLCBvdGhlciwgdG9nZ2xlLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBsZXQgYXR0cnMgPSB1dGlscy5wcm9jZXNzRmllbGREYXRhQXR0cnMoZGF0YSwgaXNQcmV2aWV3KTtcbiAgICBsZXQgb3B0aW9uVHlwZSA9IHR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpO1xuICAgIGxldCBpc1NlbGVjdCA9IHR5cGUgPT09ICdzZWxlY3QnO1xuXG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgaWYgKGF0dHJzLnBsYWNlaG9sZGVyICYmIGlzU2VsZWN0KSB7XG4gICAgICAgIG9wdGlvbnMucHVzaChtKCdvcHRpb24nLCBhdHRycy5wbGFjZWhvbGRlciwge1xuICAgICAgICAgIGRpc2FibGVkOiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkOiBudWxsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHtsYWJlbCA9ICcnLCAuLi5vcHRpb25BdHRyc30gPSB2YWx1ZXNbaV07XG5cbiAgICAgICAgb3B0aW9uQXR0cnMuaWQgPSBgJHthdHRycy5pZH0tJHtpfWA7XG4gICAgICAgIGlmICghb3B0aW9uQXR0cnMuc2VsZWN0ZWQgfHwgYXR0cnMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICBkZWxldGUgb3B0aW9uQXR0cnMuc2VsZWN0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZWxlY3QpIHtcbiAgICAgICAgICBsZXQgbyA9IG0oJ29wdGlvbicsIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxhYmVsKSwgb3B0aW9uQXR0cnMpO1xuICAgICAgICAgIG9wdGlvbnMucHVzaChvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgd3JhcHBlckNsYXNzID0gb3B0aW9uVHlwZTtcbiAgICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3MgPSBgZmItJHtvcHRpb25UeXBlfS1pbmxpbmVgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25BdHRycy50eXBlID0gb3B0aW9uVHlwZTtcbiAgICAgICAgICBpZiAob3B0aW9uQXR0cnMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbkF0dHJzLmNoZWNrZWQgPSAnY2hlY2tlZCc7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uQXR0cnMuc2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBpbnB1dCA9IG0oJ2lucHV0JywgbnVsbCwgT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIG9wdGlvbkF0dHJzKSk7XG4gICAgICAgICAgbGV0IGxhYmVsQXR0cnMgPSB7Zm9yOiBvcHRpb25BdHRycy5pZH07XG4gICAgICAgICAgbGV0IGxhYmVsQ29udGVudCA9IFtpbnB1dCwgbGFiZWxdO1xuICAgICAgICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgICAgIGxldCBrY1RvZ2dsZSA9IG0oJ3NwYW4nKTtcbiAgICAgICAgICAgIGxhYmVsQ29udGVudCA9IFtpbnB1dCwga2NUb2dnbGUsIGxhYmVsXTtcbiAgICAgICAgICAgIGxhYmVsQXR0cnMuY2xhc3NOYW1lID0gJ2tjLXRvZ2dsZSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIGxhYmVsQ29udGVudCwgbGFiZWxBdHRycyk7XG4gICAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1NlbGVjdCAmJiBvdGhlcikge1xuICAgICAgICBsZXQgb3RoZXJPcHRpb25BdHRycyA9IHtcbiAgICAgICAgICBpZDogYCR7YXR0cnMuaWR9LW90aGVyYCxcbiAgICAgICAgICBjbGFzc05hbWU6IGAke2F0dHJzLmNsYXNzTmFtZX0gb3RoZXItb3B0aW9uYCxcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB1dGlscy5vdGhlck9wdGlvbkNCKG90aGVyT3B0aW9uQXR0cnMuaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBsZXQgbGFiZWwgPSBtaTE4bi5jdXJyZW50Lm90aGVyO1xuICAgICAgICBsZXQgd3JhcHBlckNsYXNzID0gb3B0aW9uVHlwZTtcbiAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgIHdyYXBwZXJDbGFzcyArPSAnLWlubGluZSc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBvdGhlck9wdGlvbkF0dHJzKTtcbiAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG5cbiAgICAgICAgbGV0IG90aGVyVmFsQXR0cnMgPSB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICBpZDogYCR7b3RoZXJPcHRpb25BdHRycy5pZH0tdmFsdWVgLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ290aGVyLXZhbCdcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG90aGVySW5wdXRzID0gW1xuICAgICAgICAgIG0oJ2lucHV0JywgbnVsbCwgb3B0aW9uQXR0cnMpLFxuICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdPdGhlcicpLFxuICAgICAgICAgIG0oJ2lucHV0JywgbnVsbCwgb3RoZXJWYWxBdHRycylcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIG90aGVySW5wdXRzLCB7Zm9yOiBvcHRpb25BdHRycy5pZH0pO1xuICAgICAgICBsZXQgd3JhcHBlciA9IG0oJ2RpdicsIGlucHV0TGFiZWwsIHtjbGFzc05hbWU6IHdyYXBwZXJDbGFzc30pO1xuICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRlbXBsYXRlO1xuXG4gICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICB0ZW1wbGF0ZSA9IG0ob3B0aW9uVHlwZSwgb3B0aW9ucywgZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBsYXRlID0gbSgnZGl2Jywgb3B0aW9ucywge2NsYXNzTmFtZTogdHlwZX0pO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICB1dGlscy5kZWZhdWx0RmllbGQgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7bGFiZWwsIGRlc2NyaXB0aW9uLCBzdWJ0eXBlLCB0eXBlLCBpZCwgaXNQcmV2aWV3LCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgaWYgKGRhdGEubmFtZSkge1xuICAgICAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YS5uYW1lID0gdXRpbHMubmFtZUF0dHIoZmllbGREYXRhKSArICctcHJldmlldyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgZGF0YS50aXRsZSA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAoc3VidHlwZSkge1xuICAgICAgdHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkID0ge1xuICAgICAgZmllbGQ6IG0odHlwZSwgdXRpbHMucGFyc2VkSHRtbChsYWJlbCksIGRhdGEpLFxuICAgICAgb25SZW5kZXI6IHV0aWxzLm5vb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuICgpID0+IGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhcnJheSBvZiBzY3JpcHRzIHVzaW5nIGpRdWVyeSdzIGBnZXRTY3JpcHRgXG4gICAqIEBwYXJhbSAge0FycmF5fFN0cmluZ30gIHNjcmlwdFNjciAgICBzY3JpcHRzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCAgIG9wdGlvbmFsIHRvIGxvYWQgZm9ybVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICBhIHByb21pc2VcbiAgICovXG4gIHV0aWxzLmdldFNjcmlwdHMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgY29uc3QgJCA9IGpRdWVyeTtcbiAgICBsZXQgX2FyciA9IFtdO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjcmlwdFNjcikpIHtcbiAgICAgIHNjcmlwdFNjciA9IFtzY3JpcHRTY3JdO1xuICAgIH1cblxuICAgIGlmICghdXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyKSkge1xuICAgICAgX2FyciA9ICQubWFwKHNjcmlwdFNjciwgc3JjID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGF0YVR5cGU6ICdzY3JpcHQnLFxuICAgICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgICAgIHVybDogKHBhdGggfHwgJycpICsgc3JjXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAkLmFqYXgob3B0aW9ucykuZG9uZSgoKSA9PiB3aW5kb3cuZmJMb2FkZWQuanMucHVzaChzcmMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9hcnIucHVzaCgkLkRlZmVycmVkKCBkZWZlcnJlZCA9PiAkKCBkZWZlcnJlZC5yZXNvbHZlICkpKTtcblxuICAgIHJldHVybiAkLndoZW4oLi4uX2Fycik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByZW1vdGUgcmVzb3VyY2UgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBzcmMgIHVybCBvZiByZW1vdGUgc2NyaXB0IG9yIGNzc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIHR5cGUgICAgICAgJ2pzJyBvciAnY3NzJ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIGlzQ2FjaGVkXG4gICAqL1xuICB1dGlscy5pc0NhY2hlZCA9IChzcmMsIHR5cGUgPSAnanMnKSA9PiB7XG4gICAgbGV0IGlzQ2FjaGVkID0gZmFsc2U7XG4gICAgY29uc3QgY2FjaGUgPSB3aW5kb3cuZmJMb2FkZWRbdHlwZV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgICAgaXNDYWNoZWQgPSBzcmMuZXZlcnkocyA9PiB1dGlscy5pbkFycmF5KHMsIGNhY2hlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQ2FjaGVkID0gdXRpbHMuaW5BcnJheShzcmMsIGNhY2hlKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ2FjaGVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHN0eWxlc2hlZXRzIHRvIHRoZSBoZWFkXG4gICAqIEBwYXJhbSAge0FycmF5fSBzY3JpcHRTY3JcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1dGlscy5nZXRTdHlsZXMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgaWYgKHV0aWxzLmlzQ2FjaGVkKHNjcmlwdFNjciwgJ2NzcycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFwcGVuZFN0eWxlID0gKGhyZWYpID0+IHtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIHdpbmRvdy5mYkxvYWRlZC5jc3MucHVzaChocmVmKTtcbiAgICB9O1xuICAgIHNjcmlwdFNjci5mb3JFYWNoKHNyYyA9PiBhcHBlbmRTdHlsZSgocGF0aCB8fCAnJykgKyBzcmMpKTtcbiAgfTtcblxuICB1dGlscy5sb25nVGV4dFRlbXBsYXRlID0gZGF0YSA9PiB7XG4gICAgbGV0IHt2YWx1ZSA9ICcnLCAuLi5hdHRyc30gPSBkYXRhO1xuICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgIGZpZWxkOiBtKCd0ZXh0YXJlYScsIHV0aWxzLnBhcnNlZEh0bWwodmFsdWUpLCBhdHRycylcbiAgICB9O1xuICAgIGxldCBlZGl0b3JzID0ge1xuICAgICAgdGlueW1jZToge1xuICAgICAgICBqczogWycvL2Nkbi50aW55bWNlLmNvbS80L3RpbnltY2UubWluLmpzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdKSB7XG4gICAgICAgICAgICB3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cudGlueW1jZS5pbml0KHtcbiAgICAgICAgICAgIHRhcmdldDogdGVtcGxhdGUuZmllbGQsXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgJ2Fkdmxpc3QgYXV0b2xpbmsgbGlzdHMgbGluayBpbWFnZSBjaGFybWFwIHByaW50IHByZXZpZXcgYW5jaG9yJyxcbiAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICdpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBjb250ZXh0bWVudSBwYXN0ZSBjb2RlJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRvb2xiYXI6ICdpbnNlcnRmaWxlIHVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcXVpbGw6IHtcbiAgICAgICAganM6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuanMnXSxcbiAgICAgICAgY3NzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLnNub3cuY3NzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGNvbnN0IERlbHRhID0gd2luZG93LlF1aWxsLmltcG9ydCgnZGVsdGEnKTtcbiAgICAgICAgICB3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2RhdGEuaWRdID0ge307XG4gICAgICAgICAgbGV0IGVkaXRvciA9IHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbZGF0YS5pZF07XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlID0gbmV3IHdpbmRvdy5RdWlsbCh0ZW1wbGF0ZS5maWVsZCwge1xuICAgICAgICAgICAgbW9kdWxlczoge1xuICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIGZhbHNlXX1dLFxuICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXG4gICAgICAgICAgICAgICAgWydjb2RlLWJsb2NrJ11cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBhdHRycy5wbGFjZWhvbGRlciB8fCAnJyxcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlZGl0b3IuZGF0YSA9IG5ldyBEZWx0YSgpO1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZWRpdG9yLmluc3RhbmNlXG4gICAgICAgICAgICAuc2V0Q29udGVudHMod2luZG93LkpTT04ucGFyc2UodXRpbHMucGFyc2VkSHRtbCh2YWx1ZSkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICAgICAgICBlZGl0b3IuZGF0YSA9IGVkaXRvci5kYXRhLmNvbXBvc2UoZGVsdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRlbXBsYXRlLm9uUmVuZGVyID0gZWRpdG9yc1tkYXRhLnR5cGVdLm9uUmVuZGVyO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAncXVpbGwnKSB7XG4gICAgICB0ZW1wbGF0ZS5maWVsZCA9IG0oJ2RpdicsIG51bGwsIGF0dHJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0pIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIG9uUmVuZGVyKTtcblxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcykge1xuICAgICAgICAgIHV0aWxzLmdldFN0eWxlcyhlZGl0b3JzW2RhdGEudHlwZV0uY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmpzICYmICF1dGlscy5pc0NhY2hlZChlZGl0b3JzW2RhdGEudHlwZV0uanMpKSB7XG4gICAgICAgICAgdXRpbHMuZ2V0U2NyaXB0cyhlZGl0b3JzW2RhdGEudHlwZV0uanMpLmRvbmUodGVtcGxhdGUub25SZW5kZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlLm9uUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtmaWVsZDogdGVtcGxhdGUuZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICB1dGlscy50ZW1wbGF0ZXMgPSBbXG4gICAgWydhdXRvY29tcGxldGUnLFxuICAgICAgZmllbGREYXRhID0+IHtcbiAgICAgIGxldCBhdHRycyA9IHV0aWxzLnByb2Nlc3NGaWVsZERhdGFBdHRycyhmaWVsZERhdGEpO1xuICAgICAgICBsZXQgZmllbGRMYWJlbCA9IHV0aWxzLm1ha2VMYWJlbChmaWVsZERhdGEpO1xuICAgICAgICBsZXQgYXV0b2NvbXBsZXRlID0gdXRpbHMuYXV0b2NvbXBsZXRlVGVtcGxhdGUoYXR0cnMpO1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBhdXRvY29tcGxldGUuZmllbGRdLFxuICAgICAgICAgIG9uUmVuZGVyOiBhdXRvY29tcGxldGUub25SZW5kZXJcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfV0sXG4gICAgW2RlZmF1bHRTdWJ0eXBlcy50ZXh0LmNvbmNhdChbJ251bWJlcicsICdmaWxlJywgJ2RhdGUnXSksXG4gICAgICBmaWVsZERhdGEgPT4ge1xuICAgICAgICBsZXQgYXR0cnMgPSB1dGlscy5wcm9jZXNzRmllbGREYXRhQXR0cnMoZmllbGREYXRhKTtcbiAgICAgICAgbGV0IGZpZWxkTGFiZWwgPSB1dGlscy5tYWtlTGFiZWwoZmllbGREYXRhKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgbSgnaW5wdXQnLCBudWxsLCBhdHRycyldLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XSxcbiAgICBbWydwYXJhZ3JhcGgnXS5jb25jYXQoZGVmYXVsdFN1YnR5cGVzLnBhcmFncmFwaCksXG4gICAgICBmaWVsZERhdGEgPT4ge1xuICAgICAgICBsZXQgYXR0cnMgPSB1dGlscy5wcm9jZXNzRmllbGREYXRhQXR0cnMoZmllbGREYXRhKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgIGZpZWxkOiBbbShmaWVsZERhdGEudHlwZSwgdXRpbHMucGFyc2VkSHRtbChmaWVsZERhdGEubGFiZWwpLCBhdHRycyldLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XSxcbiAgICBbZGVmYXVsdFN1YnR5cGVzLmJ1dHRvbixcbiAgICAgIGZpZWxkRGF0YSA9PiB7XG4gICAgICAgIGxldCBhdHRycyA9IHV0aWxzLnByb2Nlc3NGaWVsZERhdGFBdHRycyhmaWVsZERhdGEpO1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgZmllbGQ6IG0oJ2J1dHRvbicsIGZpZWxkRGF0YS5sYWJlbCwgYXR0cnMpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XSxcbiAgICBbWydzZWxlY3QnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnLCAnY2hlY2tib3gnXSxcbiAgICAgIGZpZWxkRGF0YSA9PiB7XG4gICAgICAgIGxldCBmaWVsZExhYmVsID0gdXRpbHMubWFrZUxhYmVsKGZpZWxkRGF0YSk7XG4gICAgICAgIGxldCBmaWVsZCA9IHV0aWxzLnNlbGVjdFRlbXBsYXRlKGZpZWxkRGF0YSk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XSxcbiAgICBbWyd0ZXh0YXJlYScsICd0aW55bWNlJywgJ3F1aWxsJ10sXG4gICAgICBmaWVsZERhdGEgPT4ge1xuICAgICAgICBsZXQgYXR0cnMgPSB1dGlscy5wcm9jZXNzRmllbGREYXRhQXR0cnMoZmllbGREYXRhKTtcbiAgICAgICAgbGV0IGZpZWxkID0gdXRpbHMubG9uZ1RleHRUZW1wbGF0ZShhdHRycyk7XG4gICAgICAgIGxldCBmaWVsZExhYmVsID0gdXRpbHMubWFrZUxhYmVsKGZpZWxkRGF0YSk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkLmZpZWxkXSxcbiAgICAgICAgICBvblJlbmRlcjogZmllbGQub25SZW5kZXJcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfV1cbiAgICBdO1xuXG4gIHV0aWxzLnByb2Nlc3NGaWVsZERhdGFBdHRycyA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBzdWJ0eXBlLFxuICAgICAgLi4uYXR0cnN9ID0gZmllbGREYXRhO1xuXG4gICAgaWYgKCFhdHRycy5pZCkge1xuICAgICAgYXR0cnMuaWQgPSBhdHRycy5uYW1lO1xuICAgIH1cblxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICBhdHRycy50eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMubXVsdGlwbGUgfHwgYXR0cnMudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJykge1xuICAgICAgYXR0cnMubmFtZSA9IGF0dHJzLm5hbWUgKyAnW10nO1xuICAgIH1cblxuICAgIGlmIChhdHRycy5yZXF1aXJlZCkge1xuICAgICAgYXR0cnMucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgYXR0cnNbJ2FyaWEtcmVxdWlyZWQnXSA9ICd0cnVlJztcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgdXRpbHMuZ2V0VGVtcGxhdGUgPSAoZmllbGREYXRhLCBpc1ByZXZpZXcgPSBmYWxzZSkgPT4ge1xuICAgIGxldCBmaWVsZDtcbiAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICBpZiAoZmllbGREYXRhLm5hbWUpIHtcbiAgICAgICAgZmllbGREYXRhLm5hbWUgPSBmaWVsZERhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZERhdGEubmFtZSA9IHV0aWxzLm5hbWVBdHRyKGZpZWxkRGF0YSkgKyAnLXByZXZpZXcnO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdGVtcGxhdGUgPSB1dGlscy50ZW1wbGF0ZU1hcChmaWVsZERhdGEudHlwZSk7XG5cbiAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUoZmllbGREYXRhLCBpc1ByZXZpZXcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wbGF0ZSA9IHV0aWxzLmRlZmF1bHRGaWVsZChmaWVsZERhdGEsIGlzUHJldmlldykoKTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGREYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICBsZXQgd3JhcHBlckF0dHJzID0ge307XG4gICAgICBpZiAoZmllbGREYXRhLm5hbWUpIHtcbiAgICAgICAgd3JhcHBlckF0dHJzLmNsYXNzTmFtZSA9XG4gICAgICAgIGBmYi0ke2ZpZWxkRGF0YS50eXBlfSBmb3JtLWdyb3VwIGZpZWxkLSR7ZmllbGREYXRhLm5hbWV9YDtcbiAgICAgIH1cbiAgICAgIGZpZWxkID0gdXRpbHMubWFya3VwKCdkaXYnLCB0ZW1wbGF0ZS5maWVsZCwgd3JhcHBlckF0dHJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGF0dHJzID0gdXRpbHMucHJvY2Vzc0ZpZWxkRGF0YUF0dHJzKGZpZWxkRGF0YSk7XG4gICAgICBmaWVsZCA9IHV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBhdHRycyk7XG4gICAgfVxuXG4gICAgaWYgKHRlbXBsYXRlLm9uUmVuZGVyKSB7XG4gICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmaWVsZFJlbmRlcmVkJywgdGVtcGxhdGUub25SZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuLyoqXG4gKiBDYWxsYmFjayBmb3Igb3RoZXIgb3B0aW9uLlxuICogVG9nZ2xlcyB0aGUgaGlkZGVuIHRleHQgYXJlYSBmb3IgXCJvdGhlclwiIG9wdGlvbi5cbiAqIEBwYXJhbSAge1N0cmluZ30gb3RoZXJJZCBpZCBvZiB0aGUgXCJvdGhlclwiIG9wdGlvbiBpbnB1dFxuICovXG51dGlscy5vdGhlck9wdGlvbkNCID0gb3RoZXJJZCA9PiB7XG4gIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdGhlcklkKTtcbiAgY29uc3Qgb3RoZXJJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3RoZXJJZH0tdmFsdWVgKTtcblxuICBpZiAob3RoZXJJbnB1dC5jaGVja2VkKSB7XG4gICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyBhIHN0cmluZ1xuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgdW5jYXBpdGFsaXplZCBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICovXG51dGlscy5jYXBpdGFsaXplID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGJcXHcvZywgZnVuY3Rpb24obSkge1xuICAgICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn07XG5cblxudXRpbHMubWVyZ2UgPSAob2JqMSwgb2JqMikgPT4ge1xuICBsZXQgbWVyZ2VkT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqMSwgb2JqMik7XG4gIGZvciAobGV0IHByb3AgaW4gb2JqMikge1xuICAgIGlmIChtZXJnZWRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iajJbcHJvcF0pKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IEFycmF5LmlzQXJyYXkob2JqMVtwcm9wXSkgPyB1dGlscy51bmlxdWUob2JqMVtwcm9wXS5jb25jYXQob2JqMltwcm9wXSkpIDogb2JqMltwcm9wXTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iajJbcHJvcF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IHV0aWxzLm1lcmdlKG9iajFbcHJvcF0sIG9iajJbcHJvcF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gb2JqMltwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lcmdlZE9iajtcbn07XG5cbnV0aWxzLmFkZEV2ZW50TGlzdGVuZXJzID0gKGVsLCBldnRzLCBmbikgPT4ge1xuICByZXR1cm4gZXZ0cy5zcGxpdCgnICcpLmZvckVhY2goZSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKGUsIGZuLCBmYWxzZSkpO1xufTtcblxuLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IHBhcmVudCBieSBjbGFzc1xuICogQHBhcmFtICB7T2JqZWN0fSBlbCAgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSAge1N0cmluZ30gY2xzIGNsYXNzXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICBET00gRWxlbWVudFxuICovXG51dGlscy5jbG9zZXN0ID0gKGVsLCBjbHMpID0+IHtcbiAgbGV0IGNsYXNzTmFtZSA9IGNscy5yZXBsYWNlKCcuJywgJycpO1xuICB3aGlsZSAoKGVsID0gZWwucGFyZW50RWxlbWVudCkgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKTtcbiAgcmV0dXJuIGVsO1xufTtcblxudXRpbHMubm9vcCA9ICgpID0+IG51bGw7XG5cbnV0aWxzLmRlYm91bmNlID0gKGZ1bmMsIHdhaXQgPSAyNTAsIGltbWVkaWF0ZSA9IGZhbHNlKSA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICBsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBBZGQgYSBtb2JpbGUgY2xhc3NcbiAqIEB0b2RvIGZpbmQgY3NzIG9ubHkgc29sdXRpb25cbiAqIEByZXR1cm4ge1N0cmluZ30gTW9iaWxlIGNsYXNzIGFkZGVkIHRvIGZvcm1CdWlsZGVyXG4gKi9cbnV0aWxzLm1vYmlsZUNsYXNzID0gKCkgPT4ge1xuICBsZXQgbW9iaWxlQ2xhc3MgPSAnJztcbiAgKGEgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkge1xuICAgICAgbW9iaWxlQ2xhc3MgPSAnIGZiLW1vYmlsZSc7XG4gICAgfVxuICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgcmV0dXJuIG1vYmlsZUNsYXNzO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGNvbnZlcnRzIG1lc3N5IGBjbCNzc05hbWVzYCBpbnRvIHZhbGlkIGBjbGFzcy1uYW1lc2BcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfSBoeXBoZW5hdGVkIHN0cmluZ1xuICovXG51dGlscy5tYWtlQ2xhc3NOYW1lID0gc3RyID0+IHtcbiAgcmV0dXJuIHV0aWxzLmh5cGhlbkNhc2Uoc3RyLnJlcGxhY2UoL1teXFx3XFxzXFwtXS9naSwgJycpKTtcbn07XG5cbi8qKlxuICogTWFrZSBzdHJpbmdzIHNhZmUgdG8gYmUgdXNlZCBhcyBjbGFzc2VzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybiB7U3RyaW5nfSAgICAgY29udmVydGVyIHN0cmluZ1xuICovXG51dGlscy5zYWZlbmFtZSA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJylcbiAgLnJlcGxhY2UoL1teYS16QS1aMC05XFxbXFxdXFxfLV0vZywgJycpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKipcbiAqIFN0cmlwcyBub24tbnVtYmVycyBmcm9tIGEgbnVtYmVyIG9ubHkgaW5wdXRcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0ciBzdHJpbmcgd2l0aCBwb3NzaWJsZSBudW1iZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gICAgIHN0cmluZyB3aXRob3V0IG51bWJlcnNcbiAqL1xudXRpbHMuZm9yY2VOdW1iZXIgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiJdfQ==
