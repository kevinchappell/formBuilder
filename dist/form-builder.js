/*
formBuilder - https://formbuilder.online/
Version: 1.24.5
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":16}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":17}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":18}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":19}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":20}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":21}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":22}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":23}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":24}],10:[function(require,module,exports){
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
},{"../core-js/promise":7}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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
},{"../core-js/get-iterator":2,"../core-js/is-iterable":3}],13:[function(require,module,exports){
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
},{"../core-js/array/from":1}],14:[function(require,module,exports){
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
},{"../core-js/symbol":8,"../core-js/symbol/iterator":9}],15:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":121}],16:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":39,"../../modules/es6.array.from":106,"../../modules/es6.string.iterator":113}],17:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":104,"../modules/es6.string.iterator":113,"../modules/web.dom.iterable":118}],18:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":105,"../modules/es6.string.iterator":113,"../modules/web.dom.iterable":118}],19:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":39,"../modules/es6.map":108,"../modules/es6.object.to-string":111,"../modules/es6.string.iterator":113,"../modules/es7.map.to-json":115,"../modules/web.dom.iterable":118}],20:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":39,"../../modules/es6.object.assign":109}],21:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":39,"../../modules/es6.object.keys":110}],22:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":39,"../modules/es6.object.to-string":111,"../modules/es6.promise":112,"../modules/es6.string.iterator":113,"../modules/web.dom.iterable":118}],23:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":39,"../../modules/es6.object.to-string":111,"../../modules/es6.symbol":114,"../../modules/es7.symbol.async-iterator":116,"../../modules/es7.symbol.observable":117}],24:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":101,"../../modules/es6.string.iterator":113,"../../modules/web.dom.iterable":118}],25:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],26:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],27:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],28:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":59}],29:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":49}],30:[function(require,module,exports){
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
},{"./_to-index":93,"./_to-iobject":95,"./_to-length":96}],31:[function(require,module,exports){
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
},{"./_array-species-create":33,"./_ctx":41,"./_iobject":56,"./_to-length":96,"./_to-object":97}],32:[function(require,module,exports){
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
},{"./_is-array":58,"./_is-object":59,"./_wks":102}],33:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":32}],34:[function(require,module,exports){
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
},{"./_cof":35,"./_wks":102}],35:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],36:[function(require,module,exports){
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
},{"./_an-instance":27,"./_ctx":41,"./_defined":42,"./_descriptors":43,"./_for-of":49,"./_iter-define":62,"./_iter-step":64,"./_meta":68,"./_object-create":71,"./_object-dp":72,"./_redefine-all":84,"./_set-species":86}],37:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":29,"./_classof":34}],38:[function(require,module,exports){
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
},{"./_an-instance":27,"./_array-methods":31,"./_descriptors":43,"./_export":47,"./_fails":48,"./_for-of":49,"./_global":50,"./_hide":52,"./_is-object":59,"./_meta":68,"./_object-dp":72,"./_redefine-all":84,"./_set-to-string-tag":87}],39:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],40:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":72,"./_property-desc":83}],41:[function(require,module,exports){
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
},{"./_a-function":25}],42:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],43:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":48}],44:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":50,"./_is-object":59}],45:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],46:[function(require,module,exports){
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
},{"./_object-gops":77,"./_object-keys":80,"./_object-pie":81}],47:[function(require,module,exports){
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
},{"./_core":39,"./_ctx":41,"./_global":50,"./_hide":52}],48:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],49:[function(require,module,exports){
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
},{"./_an-object":28,"./_ctx":41,"./_is-array-iter":57,"./_iter-call":60,"./_to-length":96,"./core.get-iterator-method":103}],50:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],51:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],52:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":43,"./_object-dp":72,"./_property-desc":83}],53:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":50}],54:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":43,"./_dom-create":44,"./_fails":48}],55:[function(require,module,exports){
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
},{}],56:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":35}],57:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":65,"./_wks":102}],58:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":35}],59:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],60:[function(require,module,exports){
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
},{"./_an-object":28}],61:[function(require,module,exports){
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
},{"./_hide":52,"./_object-create":71,"./_property-desc":83,"./_set-to-string-tag":87,"./_wks":102}],62:[function(require,module,exports){
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
},{"./_export":47,"./_has":51,"./_hide":52,"./_iter-create":61,"./_iterators":65,"./_library":67,"./_object-gpo":78,"./_redefine":85,"./_set-to-string-tag":87,"./_wks":102}],63:[function(require,module,exports){
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
},{"./_wks":102}],64:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],65:[function(require,module,exports){
module.exports = {};
},{}],66:[function(require,module,exports){
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
},{"./_object-keys":80,"./_to-iobject":95}],67:[function(require,module,exports){
module.exports = true;
},{}],68:[function(require,module,exports){
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
},{"./_fails":48,"./_has":51,"./_is-object":59,"./_object-dp":72,"./_uid":99}],69:[function(require,module,exports){
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
},{"./_cof":35,"./_global":50,"./_task":92}],70:[function(require,module,exports){
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
},{"./_fails":48,"./_iobject":56,"./_object-gops":77,"./_object-keys":80,"./_object-pie":81,"./_to-object":97}],71:[function(require,module,exports){
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

},{"./_an-object":28,"./_dom-create":44,"./_enum-bug-keys":45,"./_html":53,"./_object-dps":73,"./_shared-key":88}],72:[function(require,module,exports){
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
},{"./_an-object":28,"./_descriptors":43,"./_ie8-dom-define":54,"./_to-primitive":98}],73:[function(require,module,exports){
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
},{"./_an-object":28,"./_descriptors":43,"./_object-dp":72,"./_object-keys":80}],74:[function(require,module,exports){
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
},{"./_descriptors":43,"./_has":51,"./_ie8-dom-define":54,"./_object-pie":81,"./_property-desc":83,"./_to-iobject":95,"./_to-primitive":98}],75:[function(require,module,exports){
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

},{"./_object-gopn":76,"./_to-iobject":95}],76:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":45,"./_object-keys-internal":79}],77:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],78:[function(require,module,exports){
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
},{"./_has":51,"./_shared-key":88,"./_to-object":97}],79:[function(require,module,exports){
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
},{"./_array-includes":30,"./_has":51,"./_shared-key":88,"./_to-iobject":95}],80:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":45,"./_object-keys-internal":79}],81:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],82:[function(require,module,exports){
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
},{"./_core":39,"./_export":47,"./_fails":48}],83:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],84:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":52}],85:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":52}],86:[function(require,module,exports){
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
},{"./_core":39,"./_descriptors":43,"./_global":50,"./_object-dp":72,"./_wks":102}],87:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":51,"./_object-dp":72,"./_wks":102}],88:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":89,"./_uid":99}],89:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":50}],90:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":25,"./_an-object":28,"./_wks":102}],91:[function(require,module,exports){
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
},{"./_defined":42,"./_to-integer":94}],92:[function(require,module,exports){
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
},{"./_cof":35,"./_ctx":41,"./_dom-create":44,"./_global":50,"./_html":53,"./_invoke":55}],93:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":94}],94:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],95:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":42,"./_iobject":56}],96:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":94}],97:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":42}],98:[function(require,module,exports){
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
},{"./_is-object":59}],99:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],100:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":39,"./_global":50,"./_library":67,"./_object-dp":72,"./_wks-ext":101}],101:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":102}],102:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":50,"./_shared":89,"./_uid":99}],103:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":34,"./_core":39,"./_iterators":65,"./_wks":102}],104:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":28,"./_core":39,"./core.get-iterator-method":103}],105:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":34,"./_core":39,"./_iterators":65,"./_wks":102}],106:[function(require,module,exports){
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

},{"./_create-property":40,"./_ctx":41,"./_export":47,"./_is-array-iter":57,"./_iter-call":60,"./_iter-detect":63,"./_to-length":96,"./_to-object":97,"./core.get-iterator-method":103}],107:[function(require,module,exports){
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
},{"./_add-to-unscopables":26,"./_iter-define":62,"./_iter-step":64,"./_iterators":65,"./_to-iobject":95}],108:[function(require,module,exports){
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
},{"./_collection":38,"./_collection-strong":36}],109:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":47,"./_object-assign":70}],110:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":80,"./_object-sap":82,"./_to-object":97}],111:[function(require,module,exports){

},{}],112:[function(require,module,exports){
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
},{"./_a-function":25,"./_an-instance":27,"./_classof":34,"./_core":39,"./_ctx":41,"./_export":47,"./_for-of":49,"./_global":50,"./_is-object":59,"./_iter-detect":63,"./_library":67,"./_microtask":69,"./_redefine-all":84,"./_set-species":86,"./_set-to-string-tag":87,"./_species-constructor":90,"./_task":92,"./_wks":102}],113:[function(require,module,exports){
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
},{"./_iter-define":62,"./_string-at":91}],114:[function(require,module,exports){
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
},{"./_an-object":28,"./_descriptors":43,"./_enum-keys":46,"./_export":47,"./_fails":48,"./_global":50,"./_has":51,"./_hide":52,"./_is-array":58,"./_keyof":66,"./_library":67,"./_meta":68,"./_object-create":71,"./_object-dp":72,"./_object-gopd":74,"./_object-gopn":76,"./_object-gopn-ext":75,"./_object-gops":77,"./_object-keys":80,"./_object-pie":81,"./_property-desc":83,"./_redefine":85,"./_set-to-string-tag":87,"./_shared":89,"./_to-iobject":95,"./_to-primitive":98,"./_uid":99,"./_wks":102,"./_wks-define":100,"./_wks-ext":101}],115:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":37,"./_export":47}],116:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":100}],117:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":100}],118:[function(require,module,exports){
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
},{"./_global":50,"./_hide":52,"./_iterators":65,"./_wks":102,"./es6.array.iterator":107}],119:[function(require,module,exports){
/*!
 * mi18n - https://github.com/Draggable/mi18n
 * Version: 0.3.2
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
 */
module.exports=function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="dist/",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(45),u=r(o),i=e(39),f=r(i),c=e(43),a=r(c),s=e(44),l=r(s),p=function(){function t(){(0,a["default"])(this,t);var n={location:"assets/lang/",langs:["en-US","es-ES"],locale:"en-US",preloaded:{}},e=this;e.init=function(t){return e.config=(0,f["default"])({},n,t),e.langs=(0,f["default"])({},e.config.preloaded),e.locale=e.config.locale||e.config.langs[0],e.setCurrent(e.locale)}}return(0,l["default"])(t,[{key:"getValue",value:function(t){return this.current&&this.current[t]||t}},{key:"makeSafe",value:function(t){var n={"{":"\\{","}":"\\}","|":"\\|"};return t=t.replace(/\{|\}|\|/g,function(t){return n[t]}),new RegExp(t,"g")}},{key:"put",value:function(t,n){return this.current[t]=n}},{key:"get",value:function(t,n){var e=this,r=this.getValue(t),o=r.match(/\{[^\}]+?\}/g),i=void 0;if(n&&o)if("object"===("undefined"==typeof n?"undefined":(0,u["default"])(n)))for(var f=0;f<o.length;f++)i=o[f].substring(1,o[f].length-1),r=r.replace(e.makeSafe(o[f]),n[i]||"");else r=r.replace(/\{[^\}]+?\}/g,n);return r}},{key:"fromFile",value:function(t){for(var n,e=t.split("\n"),r={},o=0;o<e.length;o++)n=e[o].match(/^(.+?) *?= *?([^\n]+)/),n&&(r[n[1]]=n[2].replace(/^\s+|\s+$/,""));return r}},{key:"processFile",value:function(t){var n=this,e=t.replace(/\n\n/g,"\n");return n.langs[n.locale]=n.fromFile(e)}},{key:"loadLang",value:function(t){var n=this;return new window.Promise(function(e,r){n.langs[n.locale]?e(n.langs[n.locale]):!function(){var o=new XMLHttpRequest;o.open("GET",n.config.location+t+".lang",!0),o.onload=function(){this.status<=304?(n.processFile(o.responseText),e(o.response)):r({status:this.status,statusText:o.statusText})},o.onerror=function(){r({status:this.status,statusText:o.statusText})},o.send()}()})}},{key:"setCurrent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",n=this.loadLang(t);return this.locale=t,this.current=this.langs[t],window.sessionStorage.setItem("locale",t),n}},{key:"getLangs",get:function(){return this.config.langs}}]),t}();n["default"]=new p},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(11),o=e(31),u=e(26),i=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(32),o=e(17);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(4),o=e(15);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(24)("wks"),o=e(16),u=e(1).Symbol,i="function"==typeof u,f=t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))};f.store=r},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,e){var r=e(36),o=e(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(1),o=e(8),u=e(53),i=e(6),f="prototype",c=function(t,n,e){var a,s,l,p=t&c.F,v=t&c.G,y=t&c.S,d=t&c.P,h=t&c.B,g=t&c.W,b=v?o:o[n]||(o[n]={}),m=b[f],x=v?r:y?r[n]:(r[n]||{})[f];v&&(e=n);for(a in e)s=!p&&x&&void 0!==x[a],s&&a in b||(l=s?x[a]:e[a],b[a]=v&&"function"!=typeof x[a]?e[a]:h&&s?u(l,r):g&&x[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):d&&"function"==typeof l?u(Function.call,l):l,d&&((b.virtual||(b.virtual={}))[a]=l,t&c.R&&m&&!m[a]&&i(m,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(4).f,o=e(3),u=e(7)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,u)&&r(t,u,{configurable:!0,value:n})}},function(t,n,e){var r=e(24)("keys"),o=e(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(13);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(8),u=e(20),i=e(28),f=e(4).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:i.f(t)})}},function(t,n,e){n.f=e(7)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(13),o=e(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,e){t.exports=!e(2)&&!e(9)(function(){return 7!=Object.defineProperty(e(30)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(20),o=e(12),u=e(37),i=e(6),f=e(3),c=e(19),a=e(57),s=e(22),l=e(65),p=e(7)("iterator"),v=!([].keys&&"next"in[].keys()),y="@@iterator",d="keys",h="values",g=function(){return this};t.exports=function(t,n,e,b,m,x,O){a(e,n,b);var w,S,_,j=function(t){if(!v&&t in M)return M[t];switch(t){case d:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},E=n+" Iterator",P=m==h,k=!1,M=t.prototype,T=M[p]||M[y]||m&&M[m],F=T||j(m),A=m?P?j("entries"):F:void 0,I="Array"==n?M.entries||T:T;if(I&&(_=l(I.call(new t)),_!==Object.prototype&&(s(_,E,!0),r||f(_,p)||i(_,p,g))),P&&T&&T.name!==h&&(k=!0,F=function(){return T.call(this)}),r&&!O||!v&&!k&&M[p]||i(M,p,F),c[n]=F,c[E]=g,m)if(w={values:P?F:j(h),keys:x?F:j(d),entries:A},O)for(S in w)S in M||u(M,S,w[S]);else o(o.P+o.F*(v||k),n,w);return w}},function(t,n,e){var r=e(11),o=e(62),u=e(18),i=e(23)("IE_PROTO"),f=function(){},c="prototype",a=function(){var t,n=e(30)("iframe"),r=u.length,o="<",i=">";for(n.style.display="none",e(55).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+i+"document.F=Object"+o+"/script"+i),t.close(),a=t.F;r--;)delete a[c][u[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(f[c]=r(t),e=new f,f[c]=null,e[i]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(36),o=e(18).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(5),u=e(52)(!1),i=e(23)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=i&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~u(a,e)||a.push(e));return a}},function(t,n,e){t.exports=e(6)},function(t,n,e){var r=e(17);t.exports=function(t){return Object(r(t))}},function(t,n,e){t.exports={"default":e(46),__esModule:!0}},function(t,n,e){t.exports={"default":e(47),__esModule:!0}},function(t,n,e){t.exports={"default":e(48),__esModule:!0}},function(t,n,e){t.exports={"default":e(49),__esModule:!0}},function(t,n){"use strict";n.__esModule=!0,n["default"]=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(40),u=r(o);n["default"]=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u["default"])(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(42),u=r(o),i=e(41),f=r(i),c="function"==typeof f["default"]&&"symbol"==typeof u["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};n["default"]="function"==typeof f["default"]&&"symbol"===c(u["default"])?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,n,e){e(70),t.exports=e(8).Object.assign},function(t,n,e){e(71);var r=e(8).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){e(74),e(72),e(75),e(76),t.exports=e(8).Symbol},function(t,n,e){e(73),e(77),t.exports=e(28).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(5),o=e(68),u=e(67);t.exports=function(t){return function(n,e,i){var f,c=r(n),a=o(c.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if(f=c[s++],f!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(50);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(10),o=e(21),u=e(14);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var i,f=e(t),c=u.f,a=0;f.length>a;)c.call(t,i=f[a++])&&n.push(i);return n}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){var r=e(29);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(34),o=e(15),u=e(22),i={};e(6)(i,e(7)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(i,{next:o(1,e)}),u(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(10),o=e(5);t.exports=function(t,n){for(var e,u=o(t),i=r(u),f=i.length,c=0;f>c;)if(u[e=i[c++]]===n)return e}},function(t,n,e){var r=e(16)("meta"),o=e(13),u=e(3),i=e(4).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(9)(function(){return c(Object.preventExtensions({}))}),s=function(t){i(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!u(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},v=function(t){return a&&y.NEED&&c(t)&&!u(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:v}},function(t,n,e){"use strict";var r=e(10),o=e(21),u=e(14),i=e(38),f=e(32),c=Object.assign;t.exports=!c||e(9)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=i(t),c=arguments.length,a=1,s=o.f,l=u.f;c>a;)for(var p,v=f(arguments[a++]),y=s?r(v).concat(s(v)):r(v),d=y.length,h=0;d>h;)l.call(v,p=y[h++])&&(e[p]=v[p]);return e}:c},function(t,n,e){var r=e(4),o=e(11),u=e(10);t.exports=e(2)?Object.defineProperties:function(t,n){o(t);for(var e,i=u(n),f=i.length,c=0;f>c;)r.f(t,e=i[c++],n[e]);return t}},function(t,n,e){var r=e(14),o=e(15),u=e(5),i=e(26),f=e(3),c=e(31),a=Object.getOwnPropertyDescriptor;n.f=e(2)?a:function(t,n){if(t=u(t),n=i(n,!0),c)try{return a(t,n)}catch(e){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5),o=e(35).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(n){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(3),o=e(38),u=e(23)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,n,e){var r=e(25),o=e(17);t.exports=function(t){return function(n,e){var u,i,f=String(o(n)),c=r(e),a=f.length;return c<0||c>=a?t?"":void 0:(u=f.charCodeAt(c),u<55296||u>56319||c+1===a||(i=f.charCodeAt(c+1))<56320||i>57343?t?f.charAt(c):u:t?f.slice(c,c+2):(u-55296<<10)+(i-56320)+65536)}}},function(t,n,e){var r=e(25),o=Math.max,u=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):u(t,n)}},function(t,n,e){var r=e(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";var r=e(51),o=e(58),u=e(19),i=e(5);t.exports=e(33)(Array,"Array",function(t,n){this._t=i(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(12);r(r.S+r.F,"Object",{assign:e(61)})},function(t,n,e){var r=e(12);r(r.S+r.F*!e(2),"Object",{defineProperty:e(4).f})},function(t,n){},function(t,n,e){"use strict";var r=e(66)(!0);e(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(1),o=e(3),u=e(2),i=e(12),f=e(37),c=e(60).KEY,a=e(9),s=e(24),l=e(22),p=e(16),v=e(7),y=e(28),d=e(27),h=e(59),g=e(54),b=e(56),m=e(11),x=e(5),O=e(26),w=e(15),S=e(34),_=e(64),j=e(63),E=e(4),P=e(10),k=j.f,M=E.f,T=_.f,F=r.Symbol,A=r.JSON,I=A&&A.stringify,N="prototype",C=v("_hidden"),L=v("toPrimitive"),R={}.propertyIsEnumerable,W=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),J=Object[N],U="function"==typeof F,K=r.QObject,q=!K||!K[N]||!K[N].findChild,z=u&&a(function(){return 7!=S(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=k(J,n);r&&delete J[n],M(t,n,e),r&&t!==J&&M(J,n,r)}:M,B=function(t){var n=D[t]=S(F[N]);return n._k=t,n},V=U&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,n,e){return t===J&&Y(G,n,e),m(t),n=O(n,!0),m(e),o(D,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=S(e,{enumerable:w(0,!1)})):(o(t,C)||M(t,C,w(1,{})),t[C][n]=!0),z(t,n,e)):M(t,n,e)},H=function(t,n){m(t);for(var e,r=g(n=x(n)),o=0,u=r.length;u>o;)Y(t,e=r[o++],n[e]);return t},Q=function(t,n){return void 0===n?S(t):H(S(t),n)},X=function(t){var n=R.call(this,t=O(t,!0));return!(this===J&&o(D,t)&&!o(G,t))&&(!(n||!o(this,t)||!o(D,t)||o(this,C)&&this[C][t])||n)},$=function(t,n){if(t=x(t),n=O(n,!0),t!==J||!o(D,n)||o(G,n)){var e=k(t,n);return!e||!o(D,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=T(x(t)),r=[],u=0;e.length>u;)o(D,n=e[u++])||n==C||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===J,r=T(e?G:x(t)),u=[],i=0;r.length>i;)!o(D,n=r[i++])||e&&!o(J,n)||u.push(D[n]);return u};U||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(G,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),z(this,t,w(1,e))};return u&&q&&z(J,t,{configurable:!0,set:n}),B(t)},f(F[N],"toString",function(){return this._k}),j.f=$,E.f=Y,e(35).f=_.f=Z,e(14).f=X,e(21).f=tt,u&&!e(20)&&f(J,"propertyIsEnumerable",X,!0),y.f=function(t){return B(v(t))}),i(i.G+i.W+i.F*!U,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)v(nt[et++]);for(var nt=P(v.store),et=0;nt.length>et;)d(nt[et++]);i(i.S+i.F*!U,"Symbol",{"for":function(t){return o(W,t+="")?W[t]:W[t]=F(t)},keyFor:function(t){if(V(t))return h(W,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){q=!0},useSimple:function(){q=!1}}),i(i.S+i.F*!U,"Object",{create:Q,defineProperty:Y,defineProperties:H,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),A&&i(i.S+i.F*(!U||a(function(){var t=F();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!V(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&b(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!V(n))return n}),r[1]=n,I.apply(A,r)}}}),F[N][L]||e(6)(F[N],L,F[N].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(27)("asyncIterator")},function(t,n,e){e(27)("observable")},function(t,n,e){e(69);for(var r=e(1),o=e(6),u=e(19),i=e(7)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[i]&&o(l,i,a),u[a]=u.Array}}]);
},{}],120:[function(require,module,exports){
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

},{}],121:[function(require,module,exports){
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

},{"./runtime":122}],122:[function(require,module,exports){
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

},{"_process":120}],123:[function(require,module,exports){
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

},{}],124:[function(require,module,exports){
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

},{}],125:[function(require,module,exports){
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./kc-toggle.js');
require('./polyfills.js');
// const extend = require('deep-extend');

(function ($) {
  var FormBuilder = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(options, element) {
      var _this = this;

      var formBuilder, utils, m, defaults, frmbID, _$$extend, i18n, opts, mi18n, _helpers, subtypes, $sortableFields, lastID, boxID, frmbFields, cbUl, $cbUL, processControl, $formWrap, $stageWrap, cbWrap, buttons, formActions, saveAndUpdate, nonEditableFields, prepFieldVars, loadFields, fieldOptions, advFields, processTypeUserAttrs, inputUserAttrs, selectUserAttrs, boolAttribute, btnStyles, numberAttribute, selectAttribute, textAttribute, requiredField, appendNewField, selectFieldOptions, cloneItem;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              selectUserAttrs = function selectUserAttrs(name, options) {
                var optis = (0, _keys2.default)(options.options).map(function (val) {
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
                var label = '<label for="' + selectAttrs.id + '">' + i18n[name] + '</label>';

                (0, _keys2.default)(options).filter(function (prop) {
                  return !utils.inArray(prop, ['value', 'options', 'label']);
                }).forEach(function (attr) {
                  selectAttrs[attr] = options[attr];
                });

                var select = '<select ' + utils.attrString(selectAttrs) + '>' + optis.join('') + '</select>';
                var inputWrap = '<div class="input-wrap">' + select + '</div>';
                return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
              };

              inputUserAttrs = function inputUserAttrs(name, attrs) {
                var textAttrs = {
                  id: name + '-' + lastID,
                  title: attrs.description || attrs.label || name.toUpperCase(),
                  name: name,
                  type: attrs.type || 'text',
                  className: ['fld-' + name]
                };
                var label = '<label for="' + textAttrs.id + '">' + i18n[name] + '</label>';

                if (!utils.inArray(textAttrs.type, ['checkbox', 'checkbox-group', 'radio-group'])) {
                  textAttrs.className.push('form-control');
                }

                textAttrs = (0, _assign2.default)({}, attrs, textAttrs);
                var textInput = '<input ' + utils.attrString(textAttrs) + '>';
                var inputWrap = '<div class="input-wrap">' + textInput + '</div>';
                return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
              };

              processTypeUserAttrs = function processTypeUserAttrs(typeUserAttr, values) {
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
              };

              formBuilder = this;
              utils = require('./utils.js');
              m = utils.markup;

              formBuilder.events = require('./events.js');
              formBuilder.utils = utils;
              formBuilder.mi18n = require('mi18n').default;

              defaults = {
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
                onSave: utils.noop,
                onClearAll: utils.noop,
                actionButtons: [{
                  id: 'clear',
                  className: 'clear-all btn btn-danger',
                  events: {
                    click: function click(e) {
                      return _helpers.confirmRemoveAll(e);
                    }
                  }
                }, {
                  label: 'viewJSON',
                  id: 'data',
                  className: 'btn btn-default',
                  events: {
                    click: function click() {
                      return _helpers.showData();
                    }
                  }
                }, {
                  id: 'save',
                  type: 'button',
                  className: 'btn btn-primary save-template',
                  events: {
                    click: function click() {
                      return opts.onSave(_helpers.save());
                    }
                  }
                }],
                sortableControls: false,
                stickyControls: {
                  enable: true,
                  offset: {
                    top: 5,
                    bottom: 'auto',
                    right: 'auto'
                  }
                },
                disabledActionButtons: [],
                showActionButtons: true,
                typeUserAttrs: {},
                typeUserEvents: {},
                prefix: 'form-builder-'
              };


              defaults.i18n = {
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

              frmbID = 'frmb-' + $('ul[id^=frmb-]').length++;

              formBuilder.formID = frmbID;
              _$$extend = $.extend({}, defaults, options, true), i18n = _$$extend.i18n, opts = (0, _objectWithoutProperties3.default)(_$$extend, ['i18n']);
              _context2.next = 16;
              return formBuilder.mi18n.init(i18n);

            case 16:
              i18n = _context2.sent;
              mi18n = formBuilder.mi18n;
              _helpers = require('./helpers.js')(opts, formBuilder);
              subtypes = _helpers.processSubtypes(opts.subtypes);
              $sortableFields = $('<ul/>').attr('id', frmbID).addClass('frmb');


              formBuilder.layout = _helpers.editorLayout(opts.controlPosition);
              formBuilder.stage = $sortableFields[0];

              lastID = frmbID + '-fld-1';
              boxID = frmbID + '-control-box';

              // create array of field objects to cycle through

              frmbFields = [{
                label: i18n['autocomplete'],
                attrs: {
                  type: 'autocomplete'
                }
              }, {
                label: i18n['button'],
                attrs: {
                  type: 'button'
                }
              }, {
                label: i18n['checkbox'],
                attrs: {
                  type: 'checkbox'
                }
              }, {
                label: i18n['checkboxGroup'],
                attrs: {
                  type: 'checkbox-group'
                }
              }, {
                label: i18n['dateField'],
                attrs: {
                  type: 'date'
                }
              }, {
                label: i18n['fileUpload'],
                attrs: {
                  type: 'file'
                }
              }, {
                label: i18n['header'],
                attrs: {
                  type: 'header'
                }
              }, {
                label: i18n['hidden'],
                attrs: {
                  type: 'hidden'
                }
              }, {
                label: i18n['number'],
                attrs: {
                  type: 'number'
                }
              }, {
                label: i18n['paragraph'],
                attrs: {
                  type: 'paragraph'
                }
              }, {
                label: i18n['radioGroup'],
                attrs: {
                  type: 'radio-group'
                }
              }, {
                label: i18n['select'],
                attrs: {
                  type: 'select'
                }
              }, {
                label: i18n['text'],
                attrs: {
                  type: 'text'
                }
              }, {
                label: i18n['textArea'],
                attrs: {
                  type: 'textarea'
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
              cbUl = m('ul', null, { id: boxID, className: 'frmb-control' });

              formBuilder.controls = cbUl;

              if (opts.sortableControls) {
                cbUl.classList.add('sort-enabled');
              }

              $cbUL = $(cbUl);

              // Loop through fmrbFields

              utils.forEach(frmbFields, function (i) {
                var field = frmbFields[i];
                var attrs = field.attrs;
                var icon = attrs.icon || 'icon-' + (attrs.name || attrs.type);
                attrs.name = attrs.name || utils.nameAttr(field);
                var $field = $(m('li', m('span', field.label), {
                  className: icon + ' input-control input-control-' + i,
                  type: attrs.type,
                  name: attrs.name,
                  label: field.label
                }));

                $field.data('newFieldData', field);

                $field.appendTo($cbUL);
              });

              if (opts.inputSets.length) {
                $('<li/>', { 'class': 'fb-separator' }).html('<hr>').appendTo($cbUL);
                opts.inputSets.forEach(function (set, i) {
                  set.name = set.name || _helpers.makeClassName(set.label);
                  var inputSet = m('li', set.label, {
                    className: 'input-set-control input-set-' + i,
                    type: set.name
                  });
                  $(inputSet).appendTo($cbUL);
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
                cancel: 'input, select, .disabled-field, .form-group, .btn',
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

              processControl = function processControl(control) {
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
                    if (_helpers.stopIndex || _helpers.stopIndex === 0) {
                      _helpers.stopIndex++;
                    }
                  });
                } else {
                  prepFieldVars(control, true);
                }
              };

              $formWrap = $('<div/>', {
                id: frmbID + '-form-wrap',
                'class': 'form-wrap form-builder' + _helpers.mobileClass()
              });


              formBuilder.editor = $formWrap[0];

              $stageWrap = $('<div/>', {
                id: frmbID + '-stage-wrap',
                'class': 'stage-wrap ' + formBuilder.layout.stage
              });
              cbWrap = $('<div/>', {
                id: frmbID + '-cb-wrap',
                'class': 'cb-wrap ' + formBuilder.layout.controls
              }).append($cbUL[0]);


              if (opts.showActionButtons) {
                buttons = opts.actionButtons.map(_helpers.processActionButtons);
                formActions = m('div', buttons, {
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

              saveAndUpdate = _helpers.debounce(function (evt) {
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

              nonEditableFields = function nonEditableFields() {
                var cancelArray = [];
                var disabledField = function disabledField(type) {
                  return utils.markup('li', opts[type], {
                    className: 'disabled-field form-' + type
                  });
                };

                if (opts.prepend && !$('.disabled-field.form-prepend', $sortableFields).length) {
                  cancelArray.push(true);
                  $sortableFields.prepend(disabledField('prepend'));
                }

                if (opts.append && !$('.disabled-field.form-.append', $sortableFields).length) {
                  cancelArray.push(true);
                  $sortableFields.append(disabledField('append'));
                }

                if (cancelArray.some(function (elem) {
                  return elem === true;
                })) {
                  $stageWrap.removeClass('empty');
                }

                _helpers.disabledTT.init();
              };

              prepFieldVars = function prepFieldVars($field) {
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
                  field = (0, _assign2.default)({}, $field);
                }

                if (isNew && utils.inArray(field.type, ['text', 'number', 'file', 'date', 'select', 'textarea', 'autocomplete'])) {
                  field.className = field.class || field.className || 'form-control';
                } else {
                  field.className = field.class || field.className;
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


              loadFields = function loadFields() {
                _helpers.getData();
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
                  $stageWrap.addClass('empty').attr('data-content', i18n.getStarted);
                }
                _helpers.save();

                nonEditableFields();
              };

              /**
               * Add data for field with options [select, checkbox-group, radio-group]
               *
               * @todo   refactor this nasty ~crap~ code, its actually painful to look at
               * @param  {Object} values
               * @return {String} field options markup
               */


              fieldOptions = function fieldOptions(values) {
                var optionActions = [utils.markup('a', i18n.addOption, { className: 'add add-opt' })];
                var fieldOptions = ['<label class="false-label">' + i18n.selectOptions + '</label>'];
                var isMultiple = values.multiple || values.type === 'checkbox-group';

                if (!values.values || !values.values.length) {
                  values.values = [1, 2, 3].map(function (index) {
                    var label = i18n.option + ' ' + index;
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
                    return (0, _assign2.default)({}, { selected: false }, option);
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


              advFields = function advFields(values) {
                var advFields = [];
                var key = void 0;
                var valueField = !utils.inArray(values.type, ['header', 'paragraph', 'file'].concat(_dom2.default.optionFields));
                var roles = values.role !== undefined ? values.role.split(',') : [];

                advFields.push(requiredField(values));

                if (values.type === 'checkbox') {
                  advFields.push(boolAttribute('toggle', values, { first: i18n.toggle }));
                }

                // Inline options
                if (utils.inArray(values.type, ['checkbox-group', 'radio-group'])) {
                  var labels = {
                    first: i18n.inline,
                    second: mi18n.get('inlineDesc', values.type.replace('-group', ''))
                  };

                  advFields.push(boolAttribute('inline', values, labels));
                }

                advFields.push(textAttribute('label', values));

                values.size = values.size || 'm';
                values.style = values.style || 'default';

                // Help Text / Description Field
                if (!utils.inArray(values.type, ['header', 'paragraph', 'button'])) {
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
                    var checked = utils.inArray(key, roles) ? 'checked' : '';
                    var roleId = 'fld-' + lastID + '-roles-' + key;
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

                if (values.type.match(_dom2.default.optionFieldsRegEx)) {
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


              /**
               * Text input value for attribute
               * @param  {String} name
               * @param  {Object} attrs also known as values
               * @return {String}       input markup
               */


              /**
               * Select input for multiple choice user attributes
               * @todo  replace with selectAttr
               * @param  {String} name
               * @param  {Object} options
               * @return {String}         select markup
               */


              boolAttribute = function boolAttribute(name, values, labels) {
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

              btnStyles = function btnStyles(style) {
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


              numberAttribute = function numberAttribute(attribute, values) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
                  return;
                }

                var attrVal = values[attribute];
                var attrLabel = i18n[attribute] || attribute;
                var placeholder = i18n.placeholders[attribute];
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


              selectAttribute = function selectAttribute(attribute, values, optionData) {
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
                  return '<option ' + utils.attrString(utils.trimObj(optionAttrs)) + '>' + optionAttrs.label + '</option>';
                });
                var selectAttrs = {
                  id: attribute + '-' + lastID,
                  name: attribute,
                  className: 'fld-' + attribute + ' form-control'
                };
                var label = '<label for="' + selectAttrs.id + '">' + (i18n[attribute] || utils.capitalize(attribute)) + '</label>';
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


              textAttribute = function textAttribute(attribute, values) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
                  return;
                }

                var placeholderFields = ['text', 'textarea', 'select', 'autocomplete'];

                var noName = ['header', 'paragraph'];

                var textArea = ['paragraph'];

                var attrVal = values[attribute] || '';
                var attrLabel = i18n[attribute];
                if (attribute === 'label' && utils.inArray(values.type, textArea)) {
                  attrLabel = i18n.content;
                }

                if (subtypes.header) {
                  noName = noName.concat(subtypes.header);
                }

                var placeholders = i18n.placeholders;
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

                  if (attribute === 'label') {
                    attributefield += '<div contenteditable ' + utils.attrString(inputConfig) + '>' + attrVal + '</div>';
                  } else {
                    inputConfig.value = attrVal;
                    inputConfig.type = 'text';
                    attributefield += '<input ' + utils.attrString(inputConfig) + '>';
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

              requiredField = function requiredField(values) {
                var noRequire = ['header', 'paragraph', 'button'];
                var noMake = [];
                var requireField = '';

                if (utils.inArray(values.type, noRequire)) {
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


              appendNewField = function appendNewField(values) {
                var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                var type = values.type || 'text';
                var label = values.label || i18n[type] || i18n.label;
                var delBtn = m('a', i18n.remove, {
                  id: 'del_' + lastID,
                  className: 'del-button btn delete-confirm',
                  title: i18n.removeMessage
                });
                var toggleBtn = m('a', null, {
                  id: lastID + '-edit',
                  className: 'toggle-form btn icon-pencil',
                  title: i18n.hide
                });
                var copyBtn = m('a', null, {
                  id: lastID + '-copy',
                  className: 'copy-button btn icon-copy',
                  title: i18n.copyButtonTooltip
                });

                var liContents = m('div', [toggleBtn, copyBtn, delBtn], { className: 'field-actions' }).outerHTML;

                // Field preview Label
                liContents += '<label class="field-label">' + utils.parsedHtml(label) + '</label>';

                if (values.description) {
                  var attrs = {
                    className: 'tooltip-element',
                    tooltip: values.description
                  };
                  liContents += '<span ' + utils.attrString(attrs) + '>?</span>';
                }

                var requiredDisplay = values.required ? 'style="display:inline"' : '';
                liContents += '<span class="required-asterisk" ' + requiredDisplay + '> *</span>';

                liContents += m('div', '', { className: 'prev-holder' }).outerHTML;
                liContents += '<div id="' + lastID + '-holder" class="frm-holder">';
                liContents += '<div class="form-elements">';

                liContents += advFields(values);
                liContents += m('a', i18n.close, { className: 'close-field' }).outerHTML;

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


              selectFieldOptions = function selectFieldOptions(name, optionData, multipleSelect) {
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
                      'class': 'option-' + prop,
                      value: optionData[prop],
                      name: name + '-option'
                    };

                    if (i18n.placeholders[prop]) {
                      attrs.placeholder = i18n.placeholders[prop];
                    }

                    if (prop === 'selected' && optionData.selected === true) {
                      attrs.checked = optionData.selected;
                    }

                    optionInputs.push(utils.markup('input', null, attrs));
                  }
                }

                var removeAttrs = {
                  className: 'remove btn',
                  title: i18n.removeMessage
                };
                optionInputs.push(utils.markup('a', i18n.remove, removeAttrs));

                var field = utils.markup('li', optionInputs);

                return field.outerHTML;
              };

              cloneItem = function cloneItem(currentItem) {
                var currentId = currentItem.attr('id');
                var type = currentItem.attr('type');
                var ts = new Date().getTime();
                var cloneName = type + '-' + ts;
                var $clone = currentItem.clone();

                $clone.find('[id]').each(function (i, elem) {
                  elem.id = elem.id.replace(currentId, lastID);
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
                  opts.notify.error('Error: ' + i18n.minOptionMessage);
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

              $sortableFields.on('change', '[name="subtype"]', function (e) {
                var $field = $(e.target).closest('li.form-field');
                var $valWrap = $('.value-wrap', $field);
                $valWrap.toggle(e.target.value !== 'quill');
              });

              $sortableFields.on('change', '.prev-holder input, .prev-holder select', function (e) {
                var prevOptions = void 0;
                if (e.target.classList.contains('other-option')) {
                  return;
                }
                var field = $(e.target).closest('li.form-field')[0];
                if (utils.inArray(field.type, ['select', 'checkbox-group', 'radio-group'])) {
                  (function () {
                    var options = field.getElementsByClassName('option-value');
                    if (field.type === 'select') {
                      utils.forEach(options, function (i) {
                        var selectedOption = options[i].parentElement.childNodes[0];
                        selectedOption.checked = e.target.value === options[i].value;
                      });
                    } else {
                      prevOptions = document.getElementsByName(e.target.name);
                      utils.forEach(prevOptions, function (i) {
                        var selectedOption = options[i].parentElement.childNodes[0];
                        selectedOption.checked = prevOptions[i].checked;
                      });
                    }
                  })();
                } else {
                  var fieldVal = document.getElementById('value-' + field.id);
                  if (fieldVal) {
                    fieldVal.value = e.target.value;
                  }
                }

                _helpers.save();
              });

              // update preview to label
              $sortableFields.on('keyup change', '[name="label"]', function (e) {
                var value = e.target.value || e.target.innerHTML;
                $('.field-label', $(e.target).closest('li')).html(utils.parsedHtml(value));
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

              /**
               * Toggle multiple select options
               * @param  {Object} e click event
               * @return {String} newType
               */
              $sortableFields.on('change', '.fld-multiple', function (e) {
                var newType = e.target.checked ? 'checkbox' : 'radio';
                var $options = $('.option-selected', $(e.target).closest('.form-elements'));
                $options.each(function (i) {
                  return $options[i].type = newType;
                });
                return newType;
              });

              // format name attribute
              $sortableFields.on('blur', 'input.fld-name', function (e) {
                e.target.value = _helpers.safename(e.target.value);
                if (e.target.value === '') {
                  $(e.target).addClass('field-error').attr('placeholder', i18n.cannotBeEmpty);
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
                  var warnH3 = utils.markup('h3', i18n.warning);
                  var warnMessage = utils.markup('p', i18n.fieldRemoveWarning);
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
                return $(e.target).closest('li').toggleClass('delete');
              });

              loadFields();

              $sortableFields.css('min-height', $cbUL.height());

              // If option set, controls will remain in view in editor
              if (opts.stickyControls.enable) {
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
                  _helpers.removeAllfields(false);
                  loadFields();
                }
              };

              formBuilder.i18n = {
                setLang: function () {
                  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(locale) {
                    var newLang;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return formBuilder.mi18n.setCurrent.call(formBuilder.mi18n, locale);

                          case 2:
                            newLang = _context.sent;

                          case 3:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function setLang(_x6) {
                    return _ref2.apply(this, arguments);
                  };
                }()
              };

              return _context2.abrupt('return', formBuilder);

            case 88:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function FormBuilder(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

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

},{"./dom":123,"./events.js":124,"./helpers.js":126,"./kc-toggle.js":127,"./polyfills.js":128,"./utils.js":129,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/asyncToGenerator":10,"babel-runtime/helpers/objectWithoutProperties":11,"babel-runtime/helpers/toConsumableArray":13,"babel-runtime/regenerator":15,"mi18n":119}],126:[function(require,module,exports){
'use strict';

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

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper functions specific to formBuilder.
 * Called form formBuilder
 * @param  {Object}   opts
 * @param  {Instance} formBuilder
 * @return {Object} helper functions
 */
function helpers(opts, formBuilder) {
  var mi18n = formBuilder.mi18n;
  var i18n = mi18n.current;
  var utils = formBuilder.utils;
  var m = utils.markup;

  var _helpers = {
    doCancel: false
  };

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
    var formData = _helpers.prepData(form);
    var xml = ['<form-template>\n\t<fields>'];

    utils.forEach(formData, function (fieldIndex, field) {
      var fieldContent = null;
      var optionFields = /(select|checkbox-group|radio-group|autocomplete)/;

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
  };

  _helpers.prepData = function (form) {
    var formData = [];

    if (form.childNodes.length !== 0) {
      // build data object
      utils.forEach(form.childNodes, function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(index, field) {
          var $field, fieldData, roleVals, id, instance, data, _id, editor, match, multipleField;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $field = $(field);


                  if (!$field.hasClass('disabled-field')) {
                    fieldData = _helpers.getTypes($field);
                    roleVals = $('.roles-field:checked', field).map(function () {
                      return this.value;
                    }).get();


                    _helpers.setAttrVals(field, fieldData);

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

                    fieldData = utils.trimObj(fieldData);

                    multipleField = fieldData.type.match(_dom2.default.optionFieldsRegEx);


                    if (multipleField) {
                      fieldData.values = _helpers.fieldOptionData($field);
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

  _helpers.setAttrVals = function (field, fieldData) {
    var attrs = field.querySelectorAll('[class*="fld-"]');
    attrs.forEach(function (attr) {
      var value = void 0;
      var name = utils.camelCase(attr.getAttribute('name'));
      if (attr.attributes['contenteditable']) {
        value = attr.innerHTML;
      } else if (attr.type === 'checkbox') {
        value = attr.checked;
      } else {
        value = attr.value;
      }
      fieldData[name] = value;
    });
  };

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} field DOM element
   */
  _helpers.updatePreview = function ($field) {
    var fieldClass = $field.attr('class');
    var field = $field[0];
    if (fieldClass.indexOf('ui-sortable-handle') !== -1) {
      return;
    }

    var fieldType = $field.attr('type');
    var $prevHolder = $('.prev-holder', field);
    var previewData = {
      type: fieldType
    };
    var preview = void 0;

    _helpers.setAttrVals(field, previewData);

    var style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
    }

    if (fieldType.match(_dom2.default.optionFieldsRegEx)) {
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

    previewData = utils.trimObj(previewData);

    previewData.className = _helpers.classNames(field, previewData);
    $('.fld-className', field).val(previewData.className);

    $field.data('fieldData', previewData);
    preview = utils.getTemplate(previewData, true);

    utils.empty($prevHolder[0]);
    $prevHolder[0].appendChild(preview);
    preview.dispatchEvent(formBuilder.events.fieldRendered);
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
    move: function move(e, elem) {
      var fieldOffset = elem.field.getBoundingClientRect();
      var x = e.clientX - fieldOffset.left - 21;
      var y = e.clientY - fieldOffset.top - elem.tt.offsetHeight - 12;
      elem.tt.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    },
    init: function init() {
      formBuilder.stage.querySelectorAll('.disabled-field').forEach(function (field) {
        var title = opts.messages.fieldNonEditable;

        if (title) {
          (function () {
            var tt = utils.markup('p', title, { className: 'frmb-tt' });
            field.appendChild(tt);
            field.addEventListener('mousemove', function (e) {
              _helpers.disabledTT.move(e, { tt: tt, field: field });
            });
          })();
        }
      });
    }
  };

  _helpers.classNames = function (field, previewData) {
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

    var overlay = _helpers.showOverlay();
    var yes = m('button', i18n.yes, {
      className: 'yes btn btn-success btn-sm'
    });
    var no = m('button', i18n.no, {
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

    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    _helpers.showOverlay();

    className = 'form-builder-dialog ' + className;

    var miniModal = utils.markup('div', content, { className: className });
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

    document.dispatchEvent(formBuilder.events.modalOpened);

    if (className.indexOf('data-dialog') !== -1) {
      document.dispatchEvent(formBuilder.events.viewData);
    }

    return miniModal;
  };

  /**
   * Confirm all fields will be removed then remove them
   * @param  {Object} e click event object
   */
  _helpers.confirmRemoveAll = function (e) {
    var fields = $('li.form-field', formBuilder.stage);
    var buttonPosition = e.target.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var coords = {
      pageX: buttonPosition.left + buttonPosition.width / 2,
      pageY: buttonPosition.top - bodyRect.top - 12
    };

    if (fields.length) {
      _helpers.confirm(i18n.clearAllMessage, function () {
        _helpers.removeAllfields();
        opts.notify.success(i18n.allFieldsRemoved);
        opts.onClearAll();
      }, coords);
    } else {
      _helpers.dialog(i18n.noFieldsToClear, coords);
    }
  };

  /**
   * Removes all fields from the form
   * @param {Boolean} animate whether to animate or not
   * @return {void}
   */
  _helpers.removeAllfields = function () {
    var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var form = formBuilder.stage;
    var fields = form.querySelectorAll('li.form-field');
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
      form.parentElement.dataset.content = i18n.getStarted;
    }

    if (animate) {
      form.classList.add('removing');
      var outerHeight = 0;
      fields.forEach(function (field) {
        return outerHeight += field.offsetHeight + 3;
      });
      fields[0].style.marginTop = -outerHeight + 'px';
      setTimeout(function () {
        _dom2.default.empty(form).classList.remove('removing');
        _helpers.save();
      }, 400);
    } else {
      _dom2.default.empty(form);
      _helpers.save();
    }
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
      var offsetDefaults = {
        top: 5,
        bottom: 'auto',
        right: 'auto',
        left: cbPosition.left
      };

      var offset = (0, _assign2.default)({}, offsetDefaults, opts.stickyControls.offset);

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
        formBuilder.controls.parentElement.removeAttribute('style');
      }
    });
  };

  /**
   * Open a dialog with the form's data
   */
  _helpers.showData = function () {
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

  /**
   * Generate markup for form action buttons
   * @param  {Object} buttonData
   * @return {Object} DOM element for action button
   */
  _helpers.processActionButtons = function (buttonData) {
    var label = buttonData.label,
        events = buttonData.events,
        attrs = (0, _objectWithoutProperties3.default)(buttonData, ['label', 'events']);


    if (!label) {
      label = attrs.id ? utils.capitalize(attrs.id) : '';
    } else {
      label = i18n[label] || '';
    }

    if (!attrs.id) {
      attrs.id = formBuilder.formID + '-action-' + Math.round(Math.random() * 1000);
    } else {
      attrs.id = formBuilder.formID + '-' + attrs.id + '-action';
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
  };

  /**
   * Cross link subtypes and define markup config
   * @param  {Array} subtypeOpts
   * @return {Array} subtypes
   */
  _helpers.processSubtypes = function (subtypeOpts) {
    var subtypeFormat = function subtypeFormat(subtype) {
      return {
        label: mi18n.get(subtype),
        value: subtype
      };
    };

    var defaultSubtypes = {
      text: ['text', 'password', 'email', 'color', 'tel'],
      header: ['h1', 'h2', 'h3'],
      button: ['button', 'submit', 'reset'],
      paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'],
      textarea: ['textarea', 'quill']
    };

    var subtypes = utils.merge(defaultSubtypes, subtypeOpts);

    for (var subtype in subtypes) {
      if (subtypes.hasOwnProperty(subtype)) {
        subtypes[subtype] = subtypes[subtype].map(subtypeFormat);
      }
    }

    return subtypes;
  };

  return _helpers;
}

module.exports = helpers;

},{"./dom":123,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/asyncToGenerator":10,"babel-runtime/helpers/objectWithoutProperties":11,"babel-runtime/regenerator":15}],127:[function(require,module,exports){
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

},{}],128:[function(require,module,exports){
'use strict';

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

module.exports = polyfills();

},{"babel-runtime/core-js/object/assign":5}],129:[function(require,module,exports){
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

  var labelText = fbUtils.parsedHtml(label);
  var labelContents = [labelText];

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
    field: m(type, fbUtils.parsedHtml(label), data),
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

},{"./dom":123,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/map":4,"babel-runtime/core-js/object/assign":5,"babel-runtime/helpers/objectWithoutProperties":11,"babel-runtime/helpers/slicedToArray":12,"babel-runtime/helpers/toConsumableArray":13,"babel-runtime/helpers/typeof":14}]},{},[125])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL21pMThuL2Rpc3QvbWkxOG4ubWluLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9qcy9kb20uanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2tjLXRvZ2dsZS5qcyIsInNyYy9qcy9wb2x5ZmlsbHMuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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akIsRUFBdUI7QUFDckIsUUFBSSxVQUFVLGNBQVYsQ0FBeUIsSUFBekIsQ0FBSixFQUFvQztBQUNsQyxVQUFJLE1BQU0sT0FBTixDQUFjLEtBQUssSUFBTCxDQUFkLENBQUosRUFBK0I7QUFDN0Isa0JBQVUsSUFBVixJQUFrQixNQUFNLE9BQU4sQ0FBYyxLQUFLLElBQUwsQ0FBZCxJQUE0QixRQUFRLE1BQVIsQ0FBZSxLQUFLLElBQUwsRUFBVyxNQUFYLENBQWtCLEtBQUssSUFBTCxDQUFsQixDQUFmLENBQTVCLEdBQTRFLEtBQUssSUFBTCxDQUE5RjtBQUNELE9BRkQsTUFFTyxJQUFJLHNCQUFPLEtBQUssSUFBTCxDQUFQLE1BQXNCLFFBQTFCLEVBQW9DO0FBQ3pDLGtCQUFVLElBQVYsSUFBa0IsUUFBUSxLQUFSLENBQWMsS0FBSyxJQUFMLENBQWQsRUFBMEIsS0FBSyxJQUFMLENBQTFCLENBQWxCO0FBQ0QsT0FGTSxNQUVBO0FBQ0wsa0JBQVUsSUFBVixJQUFrQixLQUFLLElBQUwsQ0FBbEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxTQUFPLFNBQVA7QUFDRCxDQWREOztBQWdCQTs7Ozs7QUFLQSxRQUFRLEtBQVIsR0FBZ0IsbUJBQVc7QUFDekIsU0FBTyxRQUFRLFVBQWYsRUFBMkI7QUFDekIsWUFBUSxXQUFSLENBQW9CLFFBQVEsVUFBNUI7QUFDRDtBQUNELFNBQU8sT0FBUDtBQUNELENBTEQ7O0FBT0EsUUFBUSxJQUFSLEdBQWU7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFmOztBQUdBLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXIsIElURVJBVE9SKXtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTsiLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpe1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGNyZWF0ZSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBhbkluc3RhbmNlICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBkZWZpbmVkICAgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIGZvck9mICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJylcbiAgLCBzdGVwICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgc2V0U3BlY2llcyAgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgZmFzdEtleSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleVxuICAsIFNJWkUgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmKGVudHJ5KXtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsICdmb3JFYWNoJyk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgZnJvbSAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWV0YSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGRQICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGVhY2ggICAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTsiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59OyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5JylcbiAgLCBnZXRJdGVyRm4gICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRrZXlzICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7IiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyl9KTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59IiwiLyohXG4gKiBtaTE4biAtIGh0dHBzOi8vZ2l0aHViLmNvbS9EcmFnZ2FibGUvbWkxOG5cbiAqIFZlcnNpb246IDAuMy4yXG4gKiBBdXRob3I6IEtldmluIENoYXBwZWxsIDxrZXZpbi5iLmNoYXBwZWxsQGdtYWlsLmNvbT4gKGh0dHA6Ly9rZXZpbi1jaGFwcGVsbC5jb20pXG4gKi9cbm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgZT17fTtyZXR1cm4gbi5tPXQsbi5jPWUsbi5wPVwiZGlzdC9cIixuKDApfShbZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1lKDQ1KSx1PXIobyksaT1lKDM5KSxmPXIoaSksYz1lKDQzKSxhPXIoYykscz1lKDQ0KSxsPXIocykscD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXsoMCxhW1wiZGVmYXVsdFwiXSkodGhpcyx0KTt2YXIgbj17bG9jYXRpb246XCJhc3NldHMvbGFuZy9cIixsYW5nczpbXCJlbi1VU1wiLFwiZXMtRVNcIl0sbG9jYWxlOlwiZW4tVVNcIixwcmVsb2FkZWQ6e319LGU9dGhpcztlLmluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY29uZmlnPSgwLGZbXCJkZWZhdWx0XCJdKSh7fSxuLHQpLGUubGFuZ3M9KDAsZltcImRlZmF1bHRcIl0pKHt9LGUuY29uZmlnLnByZWxvYWRlZCksZS5sb2NhbGU9ZS5jb25maWcubG9jYWxlfHxlLmNvbmZpZy5sYW5nc1swXSxlLnNldEN1cnJlbnQoZS5sb2NhbGUpfX1yZXR1cm4oMCxsW1wiZGVmYXVsdFwiXSkodCxbe2tleTpcImdldFZhbHVlXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY3VycmVudCYmdGhpcy5jdXJyZW50W3RdfHx0fX0se2tleTpcIm1ha2VTYWZlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49e1wie1wiOlwiXFxcXHtcIixcIn1cIjpcIlxcXFx9XCIsXCJ8XCI6XCJcXFxcfFwifTtyZXR1cm4gdD10LnJlcGxhY2UoL1xce3xcXH18XFx8L2csZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19KSxuZXcgUmVnRXhwKHQsXCJnXCIpfX0se2tleTpcInB1dFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuY3VycmVudFt0XT1ufX0se2tleTpcImdldFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9dGhpcyxyPXRoaXMuZ2V0VmFsdWUodCksbz1yLm1hdGNoKC9cXHtbXlxcfV0rP1xcfS9nKSxpPXZvaWQgMDtpZihuJiZvKWlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIG4/XCJ1bmRlZmluZWRcIjooMCx1W1wiZGVmYXVsdFwiXSkobikpKWZvcih2YXIgZj0wO2Y8by5sZW5ndGg7ZisrKWk9b1tmXS5zdWJzdHJpbmcoMSxvW2ZdLmxlbmd0aC0xKSxyPXIucmVwbGFjZShlLm1ha2VTYWZlKG9bZl0pLG5baV18fFwiXCIpO2Vsc2Ugcj1yLnJlcGxhY2UoL1xce1teXFx9XSs/XFx9L2csbik7cmV0dXJuIHJ9fSx7a2V5OlwiZnJvbUZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIG4sZT10LnNwbGl0KFwiXFxuXCIpLHI9e30sbz0wO288ZS5sZW5ndGg7bysrKW49ZVtvXS5tYXRjaCgvXiguKz8pICo/PSAqPyhbXlxcbl0rKS8pLG4mJihyW25bMV1dPW5bMl0ucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpKTtyZXR1cm4gcn19LHtrZXk6XCJwcm9jZXNzRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsZT10LnJlcGxhY2UoL1xcblxcbi9nLFwiXFxuXCIpO3JldHVybiBuLmxhbmdzW24ubG9jYWxlXT1uLmZyb21GaWxlKGUpfX0se2tleTpcImxvYWRMYW5nXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49dGhpcztyZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKGZ1bmN0aW9uKGUscil7bi5sYW5nc1tuLmxvY2FsZV0/ZShuLmxhbmdzW24ubG9jYWxlXSk6IWZ1bmN0aW9uKCl7dmFyIG89bmV3IFhNTEh0dHBSZXF1ZXN0O28ub3BlbihcIkdFVFwiLG4uY29uZmlnLmxvY2F0aW9uK3QrXCIubGFuZ1wiLCEwKSxvLm9ubG9hZD1mdW5jdGlvbigpe3RoaXMuc3RhdHVzPD0zMDQ/KG4ucHJvY2Vzc0ZpbGUoby5yZXNwb25zZVRleHQpLGUoby5yZXNwb25zZSkpOnIoe3N0YXR1czp0aGlzLnN0YXR1cyxzdGF0dXNUZXh0Om8uc3RhdHVzVGV4dH0pfSxvLm9uZXJyb3I9ZnVuY3Rpb24oKXtyKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5zZW5kKCl9KCl9KX19LHtrZXk6XCJzZXRDdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJlbi1VU1wiLG49dGhpcy5sb2FkTGFuZyh0KTtyZXR1cm4gdGhpcy5sb2NhbGU9dCx0aGlzLmN1cnJlbnQ9dGhpcy5sYW5nc1t0XSx3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLHQpLG59fSx7a2V5OlwiZ2V0TGFuZ3NcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb25maWcubGFuZ3N9fV0pLHR9KCk7bltcImRlZmF1bHRcIl09bmV3IHB9LGZ1bmN0aW9uKHQsbil7dmFyIGU9dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9ZSl9LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9IWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbil7dmFyIGU9e30uaGFzT3duUHJvcGVydHk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTEpLG89ZSgzMSksdT1lKDI2KSxpPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTtuLmY9ZSgyKT9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24odCxuLGUpe2lmKHIodCksbj11KG4sITApLHIoZSksbyl0cnl7cmV0dXJuIGkodCxuLGUpfWNhdGNoKGYpe31pZihcImdldFwiaW4gZXx8XCJzZXRcImluIGUpdGhyb3cgVHlwZUVycm9yKFwiQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhXCIpO3JldHVyblwidmFsdWVcImluIGUmJih0W25dPWUudmFsdWUpLHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgzMiksbz1lKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIobyh0KSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0KSxvPWUoMTUpO3QuZXhwb3J0cz1lKDIpP2Z1bmN0aW9uKHQsbixlKXtyZXR1cm4gci5mKHQsbixvKDEsZSkpfTpmdW5jdGlvbih0LG4sZSl7cmV0dXJuIHRbbl09ZSx0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjQpKFwid2tzXCIpLG89ZSgxNiksdT1lKDEpLlN5bWJvbCxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHUsZj10LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPWkmJnVbdF18fChpP3U6bykoXCJTeW1ib2wuXCIrdCkpfTtmLnN0b3JlPXJ9LGZ1bmN0aW9uKHQsbil7dmFyIGU9dC5leHBvcnRzPXt2ZXJzaW9uOlwiMi40LjBcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1lKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKG4pe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDM2KSxvPWUoMTgpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoIXIodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKSxvPWUoOCksdT1lKDUzKSxpPWUoNiksZj1cInByb3RvdHlwZVwiLGM9ZnVuY3Rpb24odCxuLGUpe3ZhciBhLHMsbCxwPXQmYy5GLHY9dCZjLkcseT10JmMuUyxkPXQmYy5QLGg9dCZjLkIsZz10JmMuVyxiPXY/bzpvW25dfHwob1tuXT17fSksbT1iW2ZdLHg9dj9yOnk/cltuXToocltuXXx8e30pW2ZdO3YmJihlPW4pO2ZvcihhIGluIGUpcz0hcCYmeCYmdm9pZCAwIT09eFthXSxzJiZhIGluIGJ8fChsPXM/eFthXTplW2FdLGJbYV09diYmXCJmdW5jdGlvblwiIT10eXBlb2YgeFthXT9lW2FdOmgmJnM/dShsLHIpOmcmJnhbYV09PWw/ZnVuY3Rpb24odCl7dmFyIG49ZnVuY3Rpb24obixlLHIpe2lmKHRoaXMgaW5zdGFuY2VvZiB0KXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgdDtjYXNlIDE6cmV0dXJuIG5ldyB0KG4pO2Nhc2UgMjpyZXR1cm4gbmV3IHQobixlKX1yZXR1cm4gbmV3IHQobixlLHIpfXJldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cmV0dXJuIG5bZl09dFtmXSxufShsKTpkJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP3UoRnVuY3Rpb24uY2FsbCxsKTpsLGQmJigoYi52aXJ0dWFsfHwoYi52aXJ0dWFsPXt9KSlbYV09bCx0JmMuUiYmbSYmIW1bYV0mJmkobSxhLGwpKSl9O2MuRj0xLGMuRz0yLGMuUz00LGMuUD04LGMuQj0xNixjLlc9MzIsYy5VPTY0LGMuUj0xMjgsdC5leHBvcnRzPWN9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LG4pe24uZj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6bn19fSxmdW5jdGlvbih0LG4pe3ZhciBlPTAscj1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK2UrcikudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrdCk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1cImNvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZlwiLnNwbGl0KFwiLFwiKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9e319LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPSEwfSxmdW5jdGlvbih0LG4pe24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0KS5mLG89ZSgzKSx1PWUoNykoXCJ0b1N0cmluZ1RhZ1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3QmJiFvKHQ9ZT90OnQucHJvdG90eXBlLHUpJiZyKHQsdSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOm59KX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI0KShcImtleXNcIiksbz1lKDE2KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPW8odCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1cIl9fY29yZS1qc19zaGFyZWRfX1wiLHU9cltvXXx8KHJbb109e30pO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdVt0XXx8KHVbdF09e30pfX0sZnVuY3Rpb24odCxuKXt2YXIgZT1NYXRoLmNlaWwscj1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP3I6ZSkodCl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIGUsbztpZihuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnZhbHVlT2YpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoIW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC50b1N0cmluZykmJiFyKG89ZS5jYWxsKHQpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKSxvPWUoOCksdT1lKDIwKSxpPWUoMjgpLGY9ZSg0KS5mO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1vLlN5bWJvbHx8KG8uU3ltYm9sPXU/e306ci5TeW1ib2x8fHt9KTtcIl9cIj09dC5jaGFyQXQoMCl8fHQgaW4gbnx8ZihuLHQse3ZhbHVlOmkuZih0KX0pfX0sZnVuY3Rpb24odCxuLGUpe24uZj1lKDcpfSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZS5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpLG89ZSgxKS5kb2N1bWVudCx1PXIobykmJnIoby5jcmVhdGVFbGVtZW50KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHU/by5jcmVhdGVFbGVtZW50KHQpOnt9fX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz0hZSgyKSYmIWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUoMzApKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09cih0KT90LnNwbGl0KFwiXCIpOk9iamVjdCh0KX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDIwKSxvPWUoMTIpLHU9ZSgzNyksaT1lKDYpLGY9ZSgzKSxjPWUoMTkpLGE9ZSg1Nykscz1lKDIyKSxsPWUoNjUpLHA9ZSg3KShcIml0ZXJhdG9yXCIpLHY9IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSx5PVwiQEBpdGVyYXRvclwiLGQ9XCJrZXlzXCIsaD1cInZhbHVlc1wiLGc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlLGIsbSx4LE8pe2EoZSxuLGIpO3ZhciB3LFMsXyxqPWZ1bmN0aW9uKHQpe2lmKCF2JiZ0IGluIE0pcmV0dXJuIE1bdF07c3dpdGNoKHQpe2Nhc2UgZDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX07Y2FzZSBoOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgZSh0aGlzLHQpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19LEU9bitcIiBJdGVyYXRvclwiLFA9bT09aCxrPSExLE09dC5wcm90b3R5cGUsVD1NW3BdfHxNW3ldfHxtJiZNW21dLEY9VHx8aihtKSxBPW0/UD9qKFwiZW50cmllc1wiKTpGOnZvaWQgMCxJPVwiQXJyYXlcIj09bj9NLmVudHJpZXN8fFQ6VDtpZihJJiYoXz1sKEkuY2FsbChuZXcgdCkpLF8hPT1PYmplY3QucHJvdG90eXBlJiYocyhfLEUsITApLHJ8fGYoXyxwKXx8aShfLHAsZykpKSxQJiZUJiZULm5hbWUhPT1oJiYoaz0hMCxGPWZ1bmN0aW9uKCl7cmV0dXJuIFQuY2FsbCh0aGlzKX0pLHImJiFPfHwhdiYmIWsmJk1bcF18fGkoTSxwLEYpLGNbbl09RixjW0VdPWcsbSlpZih3PXt2YWx1ZXM6UD9GOmooaCksa2V5czp4P0Y6aihkKSxlbnRyaWVzOkF9LE8pZm9yKFMgaW4gdylTIGluIE18fHUoTSxTLHdbU10pO2Vsc2UgbyhvLlArby5GKih2fHxrKSxuLHcpO3JldHVybiB3fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTEpLG89ZSg2MiksdT1lKDE4KSxpPWUoMjMpKFwiSUVfUFJPVE9cIiksZj1mdW5jdGlvbigpe30sYz1cInByb3RvdHlwZVwiLGE9ZnVuY3Rpb24oKXt2YXIgdCxuPWUoMzApKFwiaWZyYW1lXCIpLHI9dS5sZW5ndGgsbz1cIjxcIixpPVwiPlwiO2ZvcihuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZSg1NSkuYXBwZW5kQ2hpbGQobiksbi5zcmM9XCJqYXZhc2NyaXB0OlwiLHQ9bi5jb250ZW50V2luZG93LmRvY3VtZW50LHQub3BlbigpLHQud3JpdGUobytcInNjcmlwdFwiK2krXCJkb2N1bWVudC5GPU9iamVjdFwiK28rXCIvc2NyaXB0XCIraSksdC5jbG9zZSgpLGE9dC5GO3ItLTspZGVsZXRlIGFbY11bdVtyXV07cmV0dXJuIGEoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsbil7dmFyIGU7cmV0dXJuIG51bGwhPT10PyhmW2NdPXIodCksZT1uZXcgZixmW2NdPW51bGwsZVtpXT10KTplPWEoKSx2b2lkIDA9PT1uP2U6byhlLG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMzYpLG89ZSgxOCkuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIik7bi5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbih0KXtyZXR1cm4gcih0LG8pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMyksbz1lKDUpLHU9ZSg1MikoITEpLGk9ZSgyMykoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXt2YXIgZSxmPW8odCksYz0wLGE9W107Zm9yKGUgaW4gZillIT1pJiZyKGYsZSkmJmEucHVzaChlKTtmb3IoO24ubGVuZ3RoPmM7KXIoZixlPW5bYysrXSkmJih+dShhLGUpfHxhLnB1c2goZSkpO3JldHVybiBhfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDYpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Qocih0KSl9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ2KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0NyksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNDgpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ5KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuKXtcInVzZSBzdHJpY3RcIjtuLl9fZXNNb2R1bGU9ITAsbltcImRlZmF1bHRcIl09ZnVuY3Rpb24odCxuKXtpZighKHQgaW5zdGFuY2VvZiBuKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1uLl9fZXNNb2R1bGU9ITA7dmFyIG89ZSg0MCksdT1yKG8pO25bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe2Zvcih2YXIgZT0wO2U8bi5sZW5ndGg7ZSsrKXt2YXIgcj1uW2VdO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSwoMCx1W1wiZGVmYXVsdFwiXSkodCxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKG4sZSxyKXtyZXR1cm4gZSYmdChuLnByb3RvdHlwZSxlKSxyJiZ0KG4sciksbn19KCl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19bi5fX2VzTW9kdWxlPSEwO3ZhciBvPWUoNDIpLHU9cihvKSxpPWUoNDEpLGY9cihpKSxjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZcInN5bWJvbFwiPT10eXBlb2YgdVtcImRlZmF1bHRcIl0/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZltcImRlZmF1bHRcIl0mJnQuY29uc3RydWN0b3I9PT1mW1wiZGVmYXVsdFwiXT9cInN5bWJvbFwiOnR5cGVvZiB0fTtuW1wiZGVmYXVsdFwiXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmXCJzeW1ib2xcIj09PWModVtcImRlZmF1bHRcIl0pP2Z1bmN0aW9uKHQpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Yyh0KX06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZ0LmNvbnN0cnVjdG9yPT09ZltcImRlZmF1bHRcIl0/XCJzeW1ib2xcIjpcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCl9fSxmdW5jdGlvbih0LG4sZSl7ZSg3MCksdC5leHBvcnRzPWUoOCkuT2JqZWN0LmFzc2lnbn0sZnVuY3Rpb24odCxuLGUpe2UoNzEpO3ZhciByPWUoOCkuT2JqZWN0O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHIuZGVmaW5lUHJvcGVydHkodCxuLGUpfX0sZnVuY3Rpb24odCxuLGUpe2UoNzQpLGUoNzIpLGUoNzUpLGUoNzYpLHQuZXhwb3J0cz1lKDgpLlN5bWJvbH0sZnVuY3Rpb24odCxuLGUpe2UoNzMpLGUoNzcpLHQuZXhwb3J0cz1lKDI4KS5mKFwiaXRlcmF0b3JcIil9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1KSxvPWUoNjgpLHU9ZSg2Nyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihuLGUsaSl7dmFyIGYsYz1yKG4pLGE9byhjLmxlbmd0aCkscz11KGksYSk7aWYodCYmZSE9ZSl7Zm9yKDthPnM7KWlmKGY9Y1tzKytdLGYhPWYpcmV0dXJuITB9ZWxzZSBmb3IoO2E+cztzKyspaWYoKHR8fHMgaW4gYykmJmNbc109PT1lKXJldHVybiB0fHxzfHwwO3JldHVybiF0JiYtMX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1MCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLHZvaWQgMD09PW4pcmV0dXJuIHQ7c3dpdGNoKGUpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2FsbChuLGUpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQuY2FsbChuLGUscil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24oZSxyLG8pe3JldHVybiB0LmNhbGwobixlLHIsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCksbz1lKDIxKSx1PWUoMTQpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1yKHQpLGU9by5mO2lmKGUpZm9yKHZhciBpLGY9ZSh0KSxjPXUuZixhPTA7Zi5sZW5ndGg+YTspYy5jYWxsKHQsaT1mW2ErK10pJiZuLnB1c2goaSk7cmV0dXJuIG59fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPWUoMSkuZG9jdW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudH0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjkpO3QuZXhwb3J0cz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbih0KXtyZXR1cm5cIkFycmF5XCI9PXIodCl9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgzNCksbz1lKDE1KSx1PWUoMjIpLGk9e307ZSg2KShpLGUoNykoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0LnByb3RvdHlwZT1yKGkse25leHQ6bygxLGUpfSksdSh0LG4rXCIgSXRlcmF0b3JcIil9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybnt2YWx1ZTpuLGRvbmU6ISF0fX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEwKSxvPWUoNSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7Zm9yKHZhciBlLHU9byh0KSxpPXIodSksZj1pLmxlbmd0aCxjPTA7Zj5jOylpZih1W2U9aVtjKytdXT09PW4pcmV0dXJuIGV9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNikoXCJtZXRhXCIpLG89ZSgxMyksdT1lKDMpLGk9ZSg0KS5mLGY9MCxjPU9iamVjdC5pc0V4dGVuc2libGV8fGZ1bmN0aW9uKCl7cmV0dXJuITB9LGE9IWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gYyhPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKX0pLHM9ZnVuY3Rpb24odCl7aSh0LHIse3ZhbHVlOntpOlwiT1wiKyArK2Ysdzp7fX19KX0sbD1mdW5jdGlvbih0LG4pe2lmKCFvKHQpKXJldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6KFwic3RyaW5nXCI9PXR5cGVvZiB0P1wiU1wiOlwiUFwiKSt0O2lmKCF1KHQscikpe2lmKCFjKHQpKXJldHVyblwiRlwiO2lmKCFuKXJldHVyblwiRVwiO3ModCl9cmV0dXJuIHRbcl0uaX0scD1mdW5jdGlvbih0LG4pe2lmKCF1KHQscikpe2lmKCFjKHQpKXJldHVybiEwO2lmKCFuKXJldHVybiExO3ModCl9cmV0dXJuIHRbcl0ud30sdj1mdW5jdGlvbih0KXtyZXR1cm4gYSYmeS5ORUVEJiZjKHQpJiYhdSh0LHIpJiZzKHQpLHR9LHk9dC5leHBvcnRzPXtLRVk6cixORUVEOiExLGZhc3RLZXk6bCxnZXRXZWFrOnAsb25GcmVlemU6dn19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDEwKSxvPWUoMjEpLHU9ZSgxNCksaT1lKDM4KSxmPWUoMzIpLGM9T2JqZWN0LmFzc2lnbjt0LmV4cG9ydHM9IWN8fGUoOSkoZnVuY3Rpb24oKXt2YXIgdD17fSxuPXt9LGU9U3ltYm9sKCkscj1cImFiY2RlZmdoaWprbG1ub3BxcnN0XCI7cmV0dXJuIHRbZV09NyxyLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24odCl7blt0XT10fSksNyE9Yyh7fSx0KVtlXXx8T2JqZWN0LmtleXMoYyh7fSxuKSkuam9pbihcIlwiKSE9cn0pP2Z1bmN0aW9uKHQsbil7Zm9yKHZhciBlPWkodCksYz1hcmd1bWVudHMubGVuZ3RoLGE9MSxzPW8uZixsPXUuZjtjPmE7KWZvcih2YXIgcCx2PWYoYXJndW1lbnRzW2ErK10pLHk9cz9yKHYpLmNvbmNhdChzKHYpKTpyKHYpLGQ9eS5sZW5ndGgsaD0wO2Q+aDspbC5jYWxsKHYscD15W2grK10pJiYoZVtwXT12W3BdKTtyZXR1cm4gZX06Y30sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCksbz1lKDExKSx1PWUoMTApO3QuZXhwb3J0cz1lKDIpP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKHQsbil7byh0KTtmb3IodmFyIGUsaT11KG4pLGY9aS5sZW5ndGgsYz0wO2Y+Yzspci5mKHQsZT1pW2MrK10sbltlXSk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNCksbz1lKDE1KSx1PWUoNSksaT1lKDI2KSxmPWUoMyksYz1lKDMxKSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7bi5mPWUoMik/YTpmdW5jdGlvbih0LG4pe2lmKHQ9dSh0KSxuPWkobiwhMCksYyl0cnl7cmV0dXJuIGEodCxuKX1jYXRjaChlKXt9aWYoZih0LG4pKXJldHVybiBvKCFyLmYuY2FsbCh0LG4pLHRbbl0pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSksbz1lKDM1KS5mLHU9e30udG9TdHJpbmcsaT1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W10sZj1mdW5jdGlvbih0KXt0cnl7cmV0dXJuIG8odCl9Y2F0Y2gobil7cmV0dXJuIGkuc2xpY2UoKX19O3QuZXhwb3J0cy5mPWZ1bmN0aW9uKHQpe3JldHVybiBpJiZcIltvYmplY3QgV2luZG93XVwiPT11LmNhbGwodCk/Zih0KTpvKHIodCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMyksbz1lKDM4KSx1PWUoMjMpKFwiSUVfUFJPVE9cIiksaT1PYmplY3QucHJvdG90eXBlO3QuZXhwb3J0cz1PYmplY3QuZ2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQpe3JldHVybiB0PW8odCkscih0LHUpP3RbdV06XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb25zdHJ1Y3RvciYmdCBpbnN0YW5jZW9mIHQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU6dCBpbnN0YW5jZW9mIE9iamVjdD9pOm51bGx9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNSksbz1lKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKG4sZSl7dmFyIHUsaSxmPVN0cmluZyhvKG4pKSxjPXIoZSksYT1mLmxlbmd0aDtyZXR1cm4gYzwwfHxjPj1hP3Q/XCJcIjp2b2lkIDA6KHU9Zi5jaGFyQ29kZUF0KGMpLHU8NTUyOTZ8fHU+NTYzMTl8fGMrMT09PWF8fChpPWYuY2hhckNvZGVBdChjKzEpKTw1NjMyMHx8aT41NzM0Mz90P2YuY2hhckF0KGMpOnU6dD9mLnNsaWNlKGMsYysyKToodS01NTI5Njw8MTApKyhpLTU2MzIwKSs2NTUzNil9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89TWF0aC5tYXgsdT1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD1yKHQpLHQ8MD9vKHQrbiwwKTp1KHQsbil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNSksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKHIodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDUxKSxvPWUoNTgpLHU9ZSgxOSksaT1lKDUpO3QuZXhwb3J0cz1lKDMzKShBcnJheSxcIkFycmF5XCIsZnVuY3Rpb24odCxuKXt0aGlzLl90PWkodCksdGhpcy5faT0wLHRoaXMuX2s9bn0sZnVuY3Rpb24oKXt2YXIgdD10aGlzLl90LG49dGhpcy5fayxlPXRoaXMuX2krKztyZXR1cm4hdHx8ZT49dC5sZW5ndGg/KHRoaXMuX3Q9dm9pZCAwLG8oMSkpOlwia2V5c1wiPT1uP28oMCxlKTpcInZhbHVlc1wiPT1uP28oMCx0W2VdKTpvKDAsW2UsdFtlXV0pfSxcInZhbHVlc1wiKSx1LkFyZ3VtZW50cz11LkFycmF5LHIoXCJrZXlzXCIpLHIoXCJ2YWx1ZXNcIikscihcImVudHJpZXNcIil9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEyKTtyKHIuUytyLkYsXCJPYmplY3RcIix7YXNzaWduOmUoNjEpfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEyKTtyKHIuUytyLkYqIWUoMiksXCJPYmplY3RcIix7ZGVmaW5lUHJvcGVydHk6ZSg0KS5mfSl9LGZ1bmN0aW9uKHQsbil7fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg2NikoITApO2UoMzMpKFN0cmluZyxcIlN0cmluZ1wiLGZ1bmN0aW9uKHQpe3RoaXMuX3Q9U3RyaW5nKHQpLHRoaXMuX2k9MH0sZnVuY3Rpb24oKXt2YXIgdCxuPXRoaXMuX3QsZT10aGlzLl9pO3JldHVybiBlPj1uLmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9Oih0PXIobixlKSx0aGlzLl9pKz10Lmxlbmd0aCx7dmFsdWU6dCxkb25lOiExfSl9KX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoMSksbz1lKDMpLHU9ZSgyKSxpPWUoMTIpLGY9ZSgzNyksYz1lKDYwKS5LRVksYT1lKDkpLHM9ZSgyNCksbD1lKDIyKSxwPWUoMTYpLHY9ZSg3KSx5PWUoMjgpLGQ9ZSgyNyksaD1lKDU5KSxnPWUoNTQpLGI9ZSg1NiksbT1lKDExKSx4PWUoNSksTz1lKDI2KSx3PWUoMTUpLFM9ZSgzNCksXz1lKDY0KSxqPWUoNjMpLEU9ZSg0KSxQPWUoMTApLGs9ai5mLE09RS5mLFQ9Xy5mLEY9ci5TeW1ib2wsQT1yLkpTT04sST1BJiZBLnN0cmluZ2lmeSxOPVwicHJvdG90eXBlXCIsQz12KFwiX2hpZGRlblwiKSxMPXYoXCJ0b1ByaW1pdGl2ZVwiKSxSPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFc9cyhcInN5bWJvbC1yZWdpc3RyeVwiKSxEPXMoXCJzeW1ib2xzXCIpLEc9cyhcIm9wLXN5bWJvbHNcIiksSj1PYmplY3RbTl0sVT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBGLEs9ci5RT2JqZWN0LHE9IUt8fCFLW05dfHwhS1tOXS5maW5kQ2hpbGQsej11JiZhKGZ1bmN0aW9uKCl7cmV0dXJuIDchPVMoTSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE0odGhpcyxcImFcIix7dmFsdWU6N30pLmF9fSkpLmF9KT9mdW5jdGlvbih0LG4sZSl7dmFyIHI9ayhKLG4pO3ImJmRlbGV0ZSBKW25dLE0odCxuLGUpLHImJnQhPT1KJiZNKEosbixyKX06TSxCPWZ1bmN0aW9uKHQpe3ZhciBuPURbdF09UyhGW05dKTtyZXR1cm4gbi5faz10LG59LFY9VSYmXCJzeW1ib2xcIj09dHlwZW9mIEYuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgRn0sWT1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHQ9PT1KJiZZKEcsbixlKSxtKHQpLG49TyhuLCEwKSxtKGUpLG8oRCxuKT8oZS5lbnVtZXJhYmxlPyhvKHQsQykmJnRbQ11bbl0mJih0W0NdW25dPSExKSxlPVMoZSx7ZW51bWVyYWJsZTp3KDAsITEpfSkpOihvKHQsQyl8fE0odCxDLHcoMSx7fSkpLHRbQ11bbl09ITApLHoodCxuLGUpKTpNKHQsbixlKX0sSD1mdW5jdGlvbih0LG4pe20odCk7Zm9yKHZhciBlLHI9ZyhuPXgobikpLG89MCx1PXIubGVuZ3RoO3U+bzspWSh0LGU9cltvKytdLG5bZV0pO3JldHVybiB0fSxRPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHZvaWQgMD09PW4/Uyh0KTpIKFModCksbil9LFg9ZnVuY3Rpb24odCl7dmFyIG49Ui5jYWxsKHRoaXMsdD1PKHQsITApKTtyZXR1cm4hKHRoaXM9PT1KJiZvKEQsdCkmJiFvKEcsdCkpJiYoIShufHwhbyh0aGlzLHQpfHwhbyhELHQpfHxvKHRoaXMsQykmJnRoaXNbQ11bdF0pfHxuKX0sJD1mdW5jdGlvbih0LG4pe2lmKHQ9eCh0KSxuPU8obiwhMCksdCE9PUp8fCFvKEQsbil8fG8oRyxuKSl7dmFyIGU9ayh0LG4pO3JldHVybiFlfHwhbyhELG4pfHxvKHQsQykmJnRbQ11bbl18fChlLmVudW1lcmFibGU9ITApLGV9fSxaPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbixlPVQoeCh0KSkscj1bXSx1PTA7ZS5sZW5ndGg+dTspbyhELG49ZVt1KytdKXx8bj09Q3x8bj09Y3x8ci5wdXNoKG4pO3JldHVybiByfSx0dD1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT10PT09SixyPVQoZT9HOngodCkpLHU9W10saT0wO3IubGVuZ3RoPmk7KSFvKEQsbj1yW2krK10pfHxlJiYhbyhKLG4pfHx1LnB1c2goRFtuXSk7cmV0dXJuIHV9O1V8fChGPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIEYpdGhyb3cgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIVwiKTt2YXIgdD1wKGFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwKSxuPWZ1bmN0aW9uKGUpe3RoaXM9PT1KJiZuLmNhbGwoRyxlKSxvKHRoaXMsQykmJm8odGhpc1tDXSx0KSYmKHRoaXNbQ11bdF09ITEpLHoodGhpcyx0LHcoMSxlKSl9O3JldHVybiB1JiZxJiZ6KEosdCx7Y29uZmlndXJhYmxlOiEwLHNldDpufSksQih0KX0sZihGW05dLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rfSksai5mPSQsRS5mPVksZSgzNSkuZj1fLmY9WixlKDE0KS5mPVgsZSgyMSkuZj10dCx1JiYhZSgyMCkmJmYoSixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsWCwhMCkseS5mPWZ1bmN0aW9uKHQpe3JldHVybiBCKHYodCkpfSksaShpLkcraS5XK2kuRiohVSx7U3ltYm9sOkZ9KTtmb3IodmFyIG50PVwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksZXQ9MDtudC5sZW5ndGg+ZXQ7KXYobnRbZXQrK10pO2Zvcih2YXIgbnQ9UCh2LnN0b3JlKSxldD0wO250Lmxlbmd0aD5ldDspZChudFtldCsrXSk7aShpLlMraS5GKiFVLFwiU3ltYm9sXCIse1wiZm9yXCI6ZnVuY3Rpb24odCl7cmV0dXJuIG8oVyx0Kz1cIlwiKT9XW3RdOldbdF09Rih0KX0sa2V5Rm9yOmZ1bmN0aW9uKHQpe2lmKFYodCkpcmV0dXJuIGgoVyx0KTt0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2whXCIpfSx1c2VTZXR0ZXI6ZnVuY3Rpb24oKXtxPSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXtxPSExfX0pLGkoaS5TK2kuRiohVSxcIk9iamVjdFwiLHtjcmVhdGU6USxkZWZpbmVQcm9wZXJ0eTpZLGRlZmluZVByb3BlcnRpZXM6SCxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6JCxnZXRPd25Qcm9wZXJ0eU5hbWVzOlosZ2V0T3duUHJvcGVydHlTeW1ib2xzOnR0fSksQSYmaShpLlMraS5GKighVXx8YShmdW5jdGlvbigpe3ZhciB0PUYoKTtyZXR1cm5cIltudWxsXVwiIT1JKFt0XSl8fFwie31cIiE9SSh7YTp0fSl8fFwie31cIiE9SShPYmplY3QodCkpfSkpLFwiSlNPTlwiLHtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7aWYodm9pZCAwIT09dCYmIVYodCkpe2Zvcih2YXIgbixlLHI9W3RdLG89MTthcmd1bWVudHMubGVuZ3RoPm87KXIucHVzaChhcmd1bWVudHNbbysrXSk7cmV0dXJuIG49clsxXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYoZT1uKSwhZSYmYihuKXx8KG49ZnVuY3Rpb24odCxuKXtpZihlJiYobj1lLmNhbGwodGhpcyx0LG4pKSwhVihuKSlyZXR1cm4gbn0pLHJbMV09bixJLmFwcGx5KEEscil9fX0pLEZbTl1bTF18fGUoNikoRltOXSxMLEZbTl0udmFsdWVPZiksbChGLFwiU3ltYm9sXCIpLGwoTWF0aCxcIk1hdGhcIiwhMCksbChyLkpTT04sXCJKU09OXCIsITApfSxmdW5jdGlvbih0LG4sZSl7ZSgyNykoXCJhc3luY0l0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LG4sZSl7ZSgyNykoXCJvYnNlcnZhYmxlXCIpfSxmdW5jdGlvbih0LG4sZSl7ZSg2OSk7Zm9yKHZhciByPWUoMSksbz1lKDYpLHU9ZSgxOSksaT1lKDcpKFwidG9TdHJpbmdUYWdcIiksZj1bXCJOb2RlTGlzdFwiLFwiRE9NVG9rZW5MaXN0XCIsXCJNZWRpYUxpc3RcIixcIlN0eWxlU2hlZXRMaXN0XCIsXCJDU1NSdWxlTGlzdFwiXSxjPTA7Yzw1O2MrKyl7dmFyIGE9ZltjXSxzPXJbYV0sbD1zJiZzLnByb3RvdHlwZTtsJiYhbFtpXSYmbyhsLGksYSksdVthXT11LkFycmF5fX1dKTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID1cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcbiIsImNvbnN0IGRvbSA9IHt9O1xuXG5kb20ub3B0aW9uRmllbGRzID0gW1xuJ3NlbGVjdCcsXG4nY2hlY2tib3gtZ3JvdXAnLFxuJ3JhZGlvLWdyb3VwJyxcbidhdXRvY29tcGxldGUnXG5dO1xuZG9tLm9wdGlvbkZpZWxkc1JlZ0V4ID0gbmV3IFJlZ0V4cChgKCR7ZG9tLm9wdGlvbkZpZWxkcy5qb2luKCd8Jyl9KWApO1xuXG4vKipcbiAgICogVXRpbCB0byByZW1vdmUgY29udGVudHMgb2YgRE9NIE9iamVjdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIGVsZW1lbnQgd2l0aCBpdHMgY2hpbGRyZW4gcmVtb3ZlZFxuICAgKi9cbmRvbS5lbXB0eSA9IChlbGVtZW50KSA9PiB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIEhpZGUgb3Igc2hvdyBhbiBBcnJheSBvciBIVE1MQ29sbGVjdGlvbiBvZiBlbGVtZW50c1xuICogQHBhcmFtICB7QXJyYXl9ICAgZWxlbXNcbiAqIEBwYXJhbSAge1N0cmluZ30gIHRlcm0gIG1hdGNoIHRleHRDb250ZW50IHRvIHRoaXMgdGVybVxuICogQHBhcmFtICB7Qm9vbGVhbn0gc2hvdyAgb3IgaGlkZSBlbGVtZW50c1xuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgZmlsdGVyZWQgZWxlbWVudHNcbiAqL1xuZG9tLmZpbHRlciA9IChlbGVtcywgdGVybSwgc2hvdyA9IHRydWUpID0+IHtcbiAgbGV0IGZpbHRlcmVkRWxlbXMgPSBbXTtcbiAgbGV0IHRvZ2dsZSA9IFsnbm9uZScsICdibG9jayddO1xuXG4gIGlmIChzaG93KSB7XG4gICAgdG9nZ2xlID0gdG9nZ2xlLnJldmVyc2UoKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBlbGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCB0eHQgPSBlbGVtc1tpXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0eHQuaW5kZXhPZih0ZXJtLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgZWxlbXNbaV0uc3R5bGUuZGlzcGxheSA9IHRvZ2dsZVswXTtcbiAgICAgIGZpbHRlcmVkRWxlbXMucHVzaChlbGVtc1tpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSB0b2dnbGVbMV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkRWxlbXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb207XG4iLCIvKipcbiAqIEZvcm0gQnVpbGRlciBldmVudHNcbiAqIEByZXR1cm4ge09iamVjdH0gdmFyaW91cyBldmVudHMgdG8gYmUgdHJpZ2dlclxuICovXG4vLyBmdW5jdGlvbiBmYkV2ZW50cygpe1xuICBjb25zdCBldmVudHMgPSB7fTtcblxuICBldmVudHMubG9hZGVkID0gbmV3IEV2ZW50KCdsb2FkZWQnKTtcbiAgZXZlbnRzLnZpZXdEYXRhID0gbmV3IEV2ZW50KCd2aWV3RGF0YScpO1xuICBldmVudHMudXNlckRlY2xpbmVkID0gbmV3IEV2ZW50KCd1c2VyRGVjbGluZWQnKTtcbiAgZXZlbnRzLm1vZGFsQ2xvc2VkID0gbmV3IEV2ZW50KCdtb2RhbENsb3NlZCcpO1xuICBldmVudHMubW9kYWxPcGVuZWQgPSBuZXcgRXZlbnQoJ21vZGFsT3BlbmVkJyk7XG4gIGV2ZW50cy5mb3JtU2F2ZWQgPSBuZXcgRXZlbnQoJ2Zvcm1TYXZlZCcpO1xuICBldmVudHMuZmllbGRBZGRlZCA9IG5ldyBFdmVudCgnZmllbGRBZGRlZCcpO1xuICBldmVudHMuZmllbGRSZW1vdmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbW92ZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVuZGVyZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVuZGVyZWQnKTtcblxuLy8gICByZXR1cm4gZXZlbnRzO1xuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50cztcbiIsImltcG9ydCBkIGZyb20gJy4vZG9tJztcbnJlcXVpcmUoJy4va2MtdG9nZ2xlLmpzJyk7XG5yZXF1aXJlKCcuL3BvbHlmaWxscy5qcycpO1xuLy8gY29uc3QgZXh0ZW5kID0gcmVxdWlyZSgnZGVlcC1leHRlbmQnKTtcblxuKGZ1bmN0aW9uKCQpIHtcbiAgY29uc3QgRm9ybUJ1aWxkZXIgPSBhc3luYyBmdW5jdGlvbihvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZm9ybUJ1aWxkZXIgPSB0aGlzO1xuICAgIGNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xuICAgIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgZm9ybUJ1aWxkZXIuZXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMuanMnKTtcbiAgICBmb3JtQnVpbGRlci51dGlscyA9IHV0aWxzO1xuICAgIGZvcm1CdWlsZGVyLm1pMThuID0gcmVxdWlyZSgnbWkxOG4nKS5kZWZhdWx0O1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgY29udHJvbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgY29udHJvbE9yZGVyOiBbXG4gICAgICAgICdhdXRvY29tcGxldGUnLFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnaGlkZGVuJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdudW1iZXInLFxuICAgICAgICAncmFkaW8tZ3JvdXAnLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAndGV4dGFyZWEnXG4gICAgICBdLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIC8vIEFycmF5IG9mIGZpZWxkcyB0byBkaXNhYmxlXG4gICAgICBkaXNhYmxlRmllbGRzOiBbXSxcbiAgICAgIGVkaXRPbkFkZDogZmFsc2UsXG4gICAgICAvLyBVbmVkaXRhYmxlIGZpZWxkcyBvciBvdGhlciBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGFwcGVhclxuICAgICAgLy8gYmVmb3JlIGFuZCBhZnRlciByZWd1bGFyIGZpZWxkczpcbiAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICBwcmVwZW5kOiBmYWxzZSxcbiAgICAgIC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCBmaWVsZHMgdmFsdWVzXG4gICAgICAvLyBleDpcbiAgICAgIC8vIGRlZmF1bHRGaWVsZHM6IFt7XG4gICAgICAvLyAgIGxhYmVsOiAnRmlyc3QgTmFtZScsXG4gICAgICAvLyAgIG5hbWU6ICdmaXJzdC1uYW1lJyxcbiAgICAgIC8vICAgcmVxdWlyZWQ6ICd0cnVlJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdZb3VyIGZpcnN0IG5hbWUnLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH0sIHtcbiAgICAgIC8vICAgbGFiZWw6ICdQaG9uZScsXG4gICAgICAvLyAgIG5hbWU6ICdwaG9uZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnSG93IGNhbiB3ZSByZWFjaCB5b3U/JyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9XSxcbiAgICAgIGRlZmF1bHRGaWVsZHM6IFtdLFxuICAgICAgaW5wdXRTZXRzOiBbXSxcbiAgICAgIGZpZWxkUmVtb3ZlV2FybjogZmFsc2UsXG4gICAgICByb2xlczoge1xuICAgICAgICAxOiAnQWRtaW5pc3RyYXRvcidcbiAgICAgIH0sXG4gICAgICBub3RpZnk6IHtcbiAgICAgICAgZXJyb3I6IG1lc3NhZ2UgPT4gY29uc29sZS5lcnJvcihtZXNzYWdlKSxcbiAgICAgICAgc3VjY2VzczogbWVzc2FnZSA9PiBjb25zb2xlLmxvZyhtZXNzYWdlKSxcbiAgICAgICAgd2FybmluZzogbWVzc2FnZSA9PiBjb25zb2xlLndhcm4obWVzc2FnZSlcbiAgICAgIH0sXG4gICAgICBvblNhdmU6IHV0aWxzLm5vb3AsXG4gICAgICBvbkNsZWFyQWxsOiB1dGlscy5ub29wLFxuICAgICAgYWN0aW9uQnV0dG9uczogW3tcbiAgICAgICAgaWQ6ICdjbGVhcicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NsZWFyLWFsbCBidG4gYnRuLWRhbmdlcicsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiBlID0+IF9oZWxwZXJzLmNvbmZpcm1SZW1vdmVBbGwoZSlcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ3ZpZXdKU09OJyxcbiAgICAgICAgaWQ6ICdkYXRhJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1kZWZhdWx0JyxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IF9oZWxwZXJzLnNob3dEYXRhKClcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBpZDogJ3NhdmUnLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1wcmltYXJ5IHNhdmUtdGVtcGxhdGUnLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKCkgPT4gb3B0cy5vblNhdmUoX2hlbHBlcnMuc2F2ZSgpKVxuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHNvcnRhYmxlQ29udHJvbHM6IGZhbHNlLFxuICAgICAgc3RpY2t5Q29udHJvbHM6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICB0b3A6IDUsXG4gICAgICAgICAgYm90dG9tOiAnYXV0bycsXG4gICAgICAgICAgcmlnaHQ6ICdhdXRvJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzYWJsZWRBY3Rpb25CdXR0b25zOiBbXSxcbiAgICAgIHNob3dBY3Rpb25CdXR0b25zOiB0cnVlLFxuICAgICAgdHlwZVVzZXJBdHRyczoge30sXG4gICAgICB0eXBlVXNlckV2ZW50czoge30sXG4gICAgICBwcmVmaXg6ICdmb3JtLWJ1aWxkZXItJ1xuICAgIH07XG5cblxuICAgIGRlZmF1bHRzLmkxOG4gPSB7XG4gICAgICBsYW5nczogW1xuICAgICAgICAnZW4tVVMnXG4gICAgICBdLFxuICAgICAgcHJlbG9hZGVkOiB7XG4gICAgICAgICdlbi1VUyc6IHtcbiAgICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICAgIGFsbEZpZWxkc1JlbW92ZWQ6ICdBbGwgZmllbGRzIHdlcmUgcmVtb3ZlZC4nLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVGaWxlczogJ0FsbG93IHVzZXJzIHRvIHVwbG9hZCBtdWx0aXBsZSBmaWxlcycsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBidXR0b246ICdCdXR0b24nLFxuICAgICAgICAgIGNhbm5vdEJlRW1wdHk6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcbiAgICAgICAgICBjaGVja2JveGVzOiAnQ2hlY2tib3hlcycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXG4gICAgICAgICAgY2xlYXJBbGw6ICdDbGVhcicsXG4gICAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxuICAgICAgICAgIGNvcHk6ICdDb3B5IFRvIENsaXBib2FyZCcsXG4gICAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxuICAgICAgICAgIGRhdGVGaWVsZDogJ0RhdGUgRmllbGQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgIGRldk1vZGU6ICdEZXZlbG9wZXIgTW9kZScsXG4gICAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcbiAgICAgICAgICBlZGl0WE1MOiAnRWRpdCBYTUwnLFxuICAgICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxuICAgICAgICAgIGZpZWxkRGVsZXRlV2FybmluZzogZmFsc2UsXG4gICAgICAgICAgZmllbGRWYXJzOiAnRmllbGQgVmFyaWFibGVzJyxcbiAgICAgICAgICBmaWVsZE5vbkVkaXRhYmxlOiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZWRpdGVkLicsXG4gICAgICAgICAgZmllbGRSZW1vdmVXYXJuaW5nOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGZpZWxkPycsXG4gICAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgICBmb3JtVXBkYXRlZDogJ0Zvcm0gVXBkYXRlZCcsXG4gICAgICAgICAgZ2V0U3RhcnRlZDogJ0RyYWcgYSBmaWVsZCBmcm9tIHRoZSByaWdodCB0byB0aGlzIGFyZWEnLFxuICAgICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgICAgaGlkZTogJ0VkaXQnLFxuICAgICAgICAgIGhpZGRlbjogJ0hpZGRlbiBJbnB1dCcsXG4gICAgICAgICAgaW5saW5lOiAnSW5saW5lJyxcbiAgICAgICAgICBpbmxpbmVEZXNjOiAnRGlzcGxheSB7dHlwZX0gaW5saW5lJyxcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICBsYWJlbEVtcHR5OiAnRmllbGQgTGFiZWwgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgICBsaW1pdFJvbGU6ICdMaW1pdCBhY2Nlc3MgdG8gb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyByb2xlczonLFxuICAgICAgICAgIG1hbmRhdG9yeTogJ01hbmRhdG9yeScsXG4gICAgICAgICAgbWF4bGVuZ3RoOiAnTWF4IExlbmd0aCcsXG4gICAgICAgICAgbWluT3B0aW9uTWVzc2FnZTogJ1RoaXMgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mIDIgb3B0aW9ucycsXG4gICAgICAgICAgbXVsdGlwbGVGaWxlczogJ011bHRpcGxlIEZpbGVzJyxcbiAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgbm86ICdObycsXG4gICAgICAgICAgbm9GaWVsZHNUb0NsZWFyOiAnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsXG4gICAgICAgICAgbnVtYmVyOiAnTnVtYmVyJyxcbiAgICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICAgIG9uOiAnT24nLFxuICAgICAgICAgIG9wdGlvbjogJ09wdGlvbicsXG4gICAgICAgICAgb3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgICAgb3B0aW9uVmFsdWVQbGFjZWhvbGRlcjogJ1ZhbHVlJyxcbiAgICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgICAgcGFyYWdyYXBoOiAnUGFyYWdyYXBoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIHRleHRhcmVhOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NwYWNlIHNlcGFyYXRlZCBjbGFzc2VzJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnRW50ZXIgeW91ciBwYXNzd29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZXZpZXc6ICdQcmV2aWV3JyxcbiAgICAgICAgICByYWRpb0dyb3VwOiAnUmFkaW8gR3JvdXAnLFxuICAgICAgICAgIHJhZGlvOiAnUmFkaW8nLFxuICAgICAgICAgIHJlbW92ZU1lc3NhZ2U6ICdSZW1vdmUgRWxlbWVudCcsXG4gICAgICAgICAgcmVtb3ZlT3B0aW9uOiAnUmVtb3ZlIE9wdGlvbicsXG4gICAgICAgICAgcmVtb3ZlOiAnJiMyMTU7JyxcbiAgICAgICAgICByZXF1aXJlZDogJ1JlcXVpcmVkJyxcbiAgICAgICAgICByaWNoVGV4dDogJ1JpY2ggVGV4dCBFZGl0b3InLFxuICAgICAgICAgIHJvbGVzOiAnQWNjZXNzJyxcbiAgICAgICAgICByb3dzOiAnUm93cycsXG4gICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgIHNlbGVjdE9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgICBzZWxlY3Q6ICdTZWxlY3QnLFxuICAgICAgICAgIHNlbGVjdENvbG9yOiAnU2VsZWN0IENvbG9yJyxcbiAgICAgICAgICBzZWxlY3Rpb25zTWVzc2FnZTogJ0FsbG93IE11bHRpcGxlIFNlbGVjdGlvbnMnLFxuICAgICAgICAgIHNpemU6ICdTaXplJyxcbiAgICAgICAgICAnc2l6ZS54cyc6ICdFeHRyYSBTbWFsbCcsXG4gICAgICAgICAgJ3NpemUuc20nOiAnU21hbGwnLFxuICAgICAgICAgICdzaXplLm0nOiAnRGVmYXVsdCcsXG4gICAgICAgICAgJ3NpemUubGcnOiAnTGFyZ2UnLFxuICAgICAgICAgIHN0eWxlOiAnU3R5bGUnLFxuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgYnRuOiB7XG4gICAgICAgICAgICAgICdkZWZhdWx0JzogJ0RlZmF1bHQnLFxuICAgICAgICAgICAgICBkYW5nZXI6ICdEYW5nZXInLFxuICAgICAgICAgICAgICBpbmZvOiAnSW5mbycsXG4gICAgICAgICAgICAgIHByaW1hcnk6ICdQcmltYXJ5JyxcbiAgICAgICAgICAgICAgc3VjY2VzczogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgICB3YXJuaW5nOiAnV2FybmluZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1YnR5cGU6ICdUeXBlJyxcbiAgICAgICAgICB0ZXh0OiAnVGV4dCBGaWVsZCcsXG4gICAgICAgICAgdGV4dEFyZWE6ICdUZXh0IEFyZWEnLFxuICAgICAgICAgIHRvZ2dsZTogJ1RvZ2dsZScsXG4gICAgICAgICAgd2FybmluZzogJ1dhcm5pbmchJyxcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICAgICAgICB2aWV3SlNPTjogJ3sgIH0nLFxuICAgICAgICAgIHZpZXdYTUw6ICcmbHQ7LyZndDsnLFxuICAgICAgICAgIHllczogJ1llcydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgZnJtYklEID0gJ2ZybWItJyArICQoJ3VsW2lkXj1mcm1iLV0nKS5sZW5ndGgrKztcbiAgICBmb3JtQnVpbGRlci5mb3JtSUQgPSBmcm1iSUQ7XG4gICAgbGV0IHtpMThuLCAuLi5vcHRzfSA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucywgdHJ1ZSk7XG5cbiAgICBpMThuID0gYXdhaXQgZm9ybUJ1aWxkZXIubWkxOG4uaW5pdChpMThuKTtcbiAgICBjb25zdCBtaTE4biA9IGZvcm1CdWlsZGVyLm1pMThuO1xuXG4gICAgbGV0IF9oZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzLmpzJykob3B0cywgZm9ybUJ1aWxkZXIpO1xuXG4gICAgY29uc3Qgc3VidHlwZXMgPSBfaGVscGVycy5wcm9jZXNzU3VidHlwZXMob3B0cy5zdWJ0eXBlcyk7XG5cbiAgICBsZXQgJHNvcnRhYmxlRmllbGRzID0gJCgnPHVsLz4nKS5hdHRyKCdpZCcsIGZybWJJRCkuYWRkQ2xhc3MoJ2ZybWInKTtcblxuICAgIGZvcm1CdWlsZGVyLmxheW91dCA9IF9oZWxwZXJzLmVkaXRvckxheW91dChvcHRzLmNvbnRyb2xQb3NpdGlvbik7XG4gICAgZm9ybUJ1aWxkZXIuc3RhZ2UgPSAkc29ydGFibGVGaWVsZHNbMF07XG5cbiAgICBsZXQgbGFzdElEID0gZnJtYklEICsgJy1mbGQtMSc7XG4gICAgbGV0IGJveElEID0gZnJtYklEICsgJy1jb250cm9sLWJveCc7XG5cbiAgICAvLyBjcmVhdGUgYXJyYXkgb2YgZmllbGQgb2JqZWN0cyB0byBjeWNsZSB0aHJvdWdoXG4gICAgbGV0IGZybWJGaWVsZHMgPSBbe1xuICAgICAgbGFiZWw6IGkxOG5bJ2F1dG9jb21wbGV0ZSddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2F1dG9jb21wbGV0ZSdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsnYnV0dG9uJ10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsnY2hlY2tib3gnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ2NoZWNrYm94R3JvdXAnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ2RhdGVGaWVsZCddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydmaWxlVXBsb2FkJ10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ2hlYWRlciddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2hlYWRlcicsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ2hpZGRlbiddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ251bWJlciddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ3BhcmFncmFwaCddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ3JhZGlvR3JvdXAnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCcsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ3NlbGVjdCddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ3RleHQnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsndGV4dEFyZWEnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0YXJlYSdcbiAgICAgIH1cbiAgICB9XTtcblxuICAgIGZybWJGaWVsZHMgPSBfaGVscGVycy5vcmRlckZpZWxkcyhmcm1iRmllbGRzKTtcblxuICAgIGlmIChvcHRzLmRpc2FibGVGaWVsZHMpIHtcbiAgICAgIC8vIHJlbW92ZSBkaXNhYmxlZEZpZWxkc1xuICAgICAgZnJtYkZpZWxkcyA9IGZybWJGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShmaWVsZC5hdHRycy50eXBlLCBvcHRzLmRpc2FibGVGaWVsZHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGRyYWdnYWJsZSBmaWVsZHMgZm9yIGZvcm1CdWlsZGVyXG4gICAgbGV0IGNiVWwgPSBtKCd1bCcsIG51bGwsIHtpZDogYm94SUQsIGNsYXNzTmFtZTogJ2ZybWItY29udHJvbCd9KTtcbiAgICBmb3JtQnVpbGRlci5jb250cm9scyA9IGNiVWw7XG5cbiAgICBpZiAob3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICBjYlVsLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZW5hYmxlZCcpO1xuICAgIH1cblxuICAgIGxldCAkY2JVTCA9ICQoY2JVbCk7XG5cbiAgICAvLyBMb29wIHRocm91Z2ggZm1yYkZpZWxkc1xuICAgIHV0aWxzLmZvckVhY2goZnJtYkZpZWxkcywgKGkpID0+IHtcbiAgICAgIGxldCBmaWVsZCA9IGZybWJGaWVsZHNbaV07XG4gICAgICBsZXQgYXR0cnMgPSBmaWVsZC5hdHRycztcbiAgICAgIGxldCBpY29uID0gYXR0cnMuaWNvbiB8fCBgaWNvbi0ke2F0dHJzLm5hbWUgfHwgYXR0cnMudHlwZX1gO1xuICAgICAgYXR0cnMubmFtZSA9IGF0dHJzLm5hbWUgfHwgdXRpbHMubmFtZUF0dHIoZmllbGQpO1xuICAgICAgbGV0ICRmaWVsZCA9ICQobSgnbGknLFxuICAgICAgbSgnc3BhbicsIGZpZWxkLmxhYmVsKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtpY29ufSBpbnB1dC1jb250cm9sIGlucHV0LWNvbnRyb2wtJHtpfWAsXG4gICAgICAgIHR5cGU6IGF0dHJzLnR5cGUsXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXG4gICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbFxuICAgICAgfSkpO1xuXG4gICAgICAkZmllbGQuZGF0YSgnbmV3RmllbGREYXRhJywgZmllbGQpO1xuXG4gICAgICAkZmllbGQuYXBwZW5kVG8oJGNiVUwpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9wdHMuaW5wdXRTZXRzLmxlbmd0aCkge1xuICAgICAgJCgnPGxpLz4nLCB7J2NsYXNzJzogJ2ZiLXNlcGFyYXRvcid9KS5odG1sKCc8aHI+JykuYXBwZW5kVG8oJGNiVUwpO1xuICAgICAgb3B0cy5pbnB1dFNldHMuZm9yRWFjaCgoc2V0LCBpKSA9PiB7XG4gICAgICAgIHNldC5uYW1lID0gc2V0Lm5hbWUgfHwgX2hlbHBlcnMubWFrZUNsYXNzTmFtZShzZXQubGFiZWwpO1xuICAgICAgICBsZXQgaW5wdXRTZXQgPSBtKCdsaScsIHNldC5sYWJlbCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogYGlucHV0LXNldC1jb250cm9sIGlucHV0LXNldC0ke2l9YCxcbiAgICAgICAgICB0eXBlOiBzZXQubmFtZVxuICAgICAgICB9KTtcbiAgICAgICAgJChpbnB1dFNldCkuYXBwZW5kVG8oJGNiVUwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU29ydGFibGUgZmllbGRzXG4gICAgJHNvcnRhYmxlRmllbGRzLnNvcnRhYmxlKHtcbiAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgcmV2ZXJ0OiAxNTAsXG4gICAgICBiZWZvcmVTdG9wOiBfaGVscGVycy5iZWZvcmVTdG9wLFxuICAgICAgc3RhcnQ6IF9oZWxwZXJzLnN0YXJ0TW92aW5nLFxuICAgICAgc3RvcDogX2hlbHBlcnMuc3RvcE1vdmluZyxcbiAgICAgIGNhbmNlbDogJ2lucHV0LCBzZWxlY3QsIC5kaXNhYmxlZC1maWVsZCwgLmZvcm0tZ3JvdXAsIC5idG4nLFxuICAgICAgcGxhY2Vob2xkZXI6ICdmcm1iLXBsYWNlaG9sZGVyJ1xuICAgIH0pO1xuXG4gICAgLy8gQ29udHJvbEJveCB3aXRoIGRpZmZlcmVudCBmaWVsZHNcbiAgICAkY2JVTC5zb3J0YWJsZSh7XG4gICAgICBoZWxwZXI6ICdjbG9uZScsXG4gICAgICBvcGFjaXR5OiAwLjksXG4gICAgICBjb25uZWN0V2l0aDogJHNvcnRhYmxlRmllbGRzLFxuICAgICAgY2FuY2VsOiAnLmZiLXNlcGFyYXRvcicsXG4gICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICBwbGFjZWhvbGRlcjogJ3VpLXN0YXRlLWhpZ2hsaWdodCcsXG4gICAgICBzdGFydDogX2hlbHBlcnMuc3RhcnRNb3ZpbmcsXG4gICAgICBzdG9wOiBfaGVscGVycy5zdG9wTW92aW5nLFxuICAgICAgcmV2ZXJ0OiAxNTAsXG4gICAgICBiZWZvcmVTdG9wOiBfaGVscGVycy5iZWZvcmVTdG9wLFxuICAgICAgZGlzdGFuY2U6IDMsXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICBpZiAoX2hlbHBlcnMuZG9DYW5jZWwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLml0ZW0ucGFyZW50KClbMF0gPT09ICRzb3J0YWJsZUZpZWxkc1swXSkge1xuICAgICAgICAgIHByb2Nlc3NDb250cm9sKHVpLml0ZW0pO1xuICAgICAgICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaGVscGVycy5zZXRGaWVsZE9yZGVyKCRjYlVMKTtcbiAgICAgICAgICBfaGVscGVycy5kb0NhbmNlbCA9ICFvcHRzLnNvcnRhYmxlQ29udHJvbHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBwcm9jZXNzQ29udHJvbCA9IGNvbnRyb2wgPT4ge1xuICAgICAgaWYgKGNvbnRyb2xbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1zZXQtY29udHJvbCcpKSB7XG4gICAgICAgIGxldCBpbnB1dFNldHMgPSBbXTtcbiAgICAgICAgbGV0IGlucHV0U2V0ID0gb3B0cy5pbnB1dFNldHMuZmlsdGVyKHNldCA9PlxuICAgICAgICAgIHNldC5uYW1lID09PSBjb250cm9sWzBdLnR5cGUpWzBdO1xuICAgICAgICBpZiAoaW5wdXRTZXQuc2hvd0hlYWRlcikge1xuICAgICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnaDInLFxuICAgICAgICAgICAgICBpZDogaW5wdXRTZXQubmFtZSxcbiAgICAgICAgICAgICAgbGFiZWw6IGlucHV0U2V0LmxhYmVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW5wdXRTZXRzLnB1c2goaGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFNldHMucHVzaCguLi5pbnB1dFNldC5maWVsZHMpO1xuICAgICAgICBpbnB1dFNldHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKF9oZWxwZXJzLnN0b3BJbmRleCB8fCBfaGVscGVycy5zdG9wSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIF9oZWxwZXJzLnN0b3BJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVwRmllbGRWYXJzKGNvbnRyb2wsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgJGZvcm1XcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctZm9ybS13cmFwJyxcbiAgICAgICdjbGFzcyc6ICdmb3JtLXdyYXAgZm9ybS1idWlsZGVyJyArIF9oZWxwZXJzLm1vYmlsZUNsYXNzKClcbiAgICB9KTtcblxuICAgIGZvcm1CdWlsZGVyLmVkaXRvciA9ICRmb3JtV3JhcFswXTtcblxuICAgIGxldCAkc3RhZ2VXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctc3RhZ2Utd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnc3RhZ2Utd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LnN0YWdlXG4gICAgfSk7XG5cbiAgICBsZXQgY2JXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctY2Itd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnY2Itd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LmNvbnRyb2xzXG4gICAgfSkuYXBwZW5kKCRjYlVMWzBdKTtcblxuICAgIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgICBjb25zdCBidXR0b25zID0gb3B0cy5hY3Rpb25CdXR0b25zLm1hcChfaGVscGVycy5wcm9jZXNzQWN0aW9uQnV0dG9ucyk7XG4gICAgICBjb25zdCBmb3JtQWN0aW9ucyA9IG0oJ2RpdicsIGJ1dHRvbnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZm9ybS1hY3Rpb25zIGJ0bi1ncm91cCdcbiAgICAgIH0pO1xuXG4gICAgICBjYldyYXAuYXBwZW5kKGZvcm1BY3Rpb25zKTtcbiAgICB9XG5cbiAgICAkc3RhZ2VXcmFwLmFwcGVuZCgkc29ydGFibGVGaWVsZHMsIGNiV3JhcCk7XG4gICAgJHN0YWdlV3JhcC5iZWZvcmUoJGZvcm1XcmFwKTtcbiAgICAkZm9ybVdyYXAuYXBwZW5kKCRzdGFnZVdyYXAsIGNiV3JhcCk7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAkKGVsZW1lbnQpLmFwcGVuZCgkZm9ybVdyYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGVsZW1lbnQpLnJlcGxhY2VXaXRoKCRmb3JtV3JhcCk7XG4gICAgfVxuXG4gICAgbGV0IHNhdmVBbmRVcGRhdGUgPSBfaGVscGVycy5kZWJvdW5jZShldnQgPT4ge1xuICAgICAgaWYgKGV2dCkge1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZ0LnRhcmdldC5uYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCAkZmllbGQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG4gICAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGZpZWxkKTtcbiAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSBmaWVsZCBvbiBjaGFuZ2VcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZSBibHVyIGtleXVwJywgJy5mb3JtLWVsZW1lbnRzIGlucHV0LCAuZm9ybS1lbGVtZW50cyBzZWxlY3QsIC5mb3JtLWVsZW1lbnRzIHRleHRhcmVhJywgc2F2ZUFuZFVwZGF0ZSk7XG5cbiAgICAkKCdsaScsICRjYlVMKS5jbGljayhldnQgPT4ge1xuICAgICAgbGV0ICRjb250cm9sID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCcudWktc29ydGFibGUtaGFuZGxlJyk7XG4gICAgICBfaGVscGVycy5zdG9wSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICBwcm9jZXNzQ29udHJvbCgkY29udHJvbCk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYXBwZW5kIGFuZCBwcmVwZW5kIG9wdGlvbnMgaWYgbmVjZXNzYXJ5XG4gICAgbGV0IG5vbkVkaXRhYmxlRmllbGRzID0gKCkgPT4ge1xuICAgICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG4gICAgICBjb25zdCBkaXNhYmxlZEZpZWxkID0gdHlwZSA9PlxuICAgICAgdXRpbHMubWFya3VwKCdsaScsIG9wdHNbdHlwZV0sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgZGlzYWJsZWQtZmllbGQgZm9ybS0ke3R5cGV9YFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvcHRzLnByZXBlbmQgJiYgISQoJy5kaXNhYmxlZC1maWVsZC5mb3JtLXByZXBlbmQnLCAkc29ydGFibGVGaWVsZHMpLmxlbmd0aCkge1xuICAgICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAkc29ydGFibGVGaWVsZHMucHJlcGVuZChkaXNhYmxlZEZpZWxkKCdwcmVwZW5kJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5hcHBlbmQgJiYgISQoJy5kaXNhYmxlZC1maWVsZC5mb3JtLS5hcHBlbmQnLCAkc29ydGFibGVGaWVsZHMpLmxlbmd0aCkge1xuICAgICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAkc29ydGFibGVGaWVsZHMuYXBwZW5kKGRpc2FibGVkRmllbGQoJ2FwcGVuZCcpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbEFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfVxuXG4gICAgICBfaGVscGVycy5kaXNhYmxlZFRULmluaXQoKTtcbiAgICB9O1xuXG4gICAgbGV0IHByZXBGaWVsZFZhcnMgPSBmdW5jdGlvbigkZmllbGQsIGlzTmV3ID0gZmFsc2UpIHtcbiAgICAgIGxldCBmaWVsZCA9IHt9O1xuICAgICAgaWYgKCRmaWVsZCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gJGZpZWxkLmRhdGEoJ25ld0ZpZWxkRGF0YScpO1xuICAgICAgICBpZiAoZmllbGREYXRhKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZERhdGEuYXR0cnM7XG4gICAgICAgICAgZmllbGQubGFiZWwgPSBmaWVsZERhdGEubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGF0dHJzID0gJGZpZWxkWzBdLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgaWYgKCFpc05ldykge1xuICAgICAgICAgICAgZmllbGQudmFsdWVzID0gJGZpZWxkLmNoaWxkcmVuKCkubWFwKChpbmRleCwgZWxlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAkKGVsZW0pLnRleHQoKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJChlbGVtKS5hdHRyKCd2YWx1ZScpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBCb29sZWFuKCQoZWxlbSkuYXR0cignc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAobGV0IGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgZmllbGRbYXR0cnNbaV0ubmFtZV0gPSBhdHRyc1tpXS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgJGZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmV3ICYmIHV0aWxzLmluQXJyYXkoZmllbGQudHlwZSxcbiAgICAgICAgWyd0ZXh0JyxcbiAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAgJ2RhdGUnLFxuICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAgJ2F1dG9jb21wbGV0ZSddKSkge1xuICAgICAgICBmaWVsZC5jbGFzc05hbWUgPSBmaWVsZC5jbGFzcyB8fCBmaWVsZC5jbGFzc05hbWUgfHwgJ2Zvcm0tY29udHJvbCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZC5jbGFzc05hbWUgPSBmaWVsZC5jbGFzcyB8fCBmaWVsZC5jbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBtYXRjaCA9IC8oPzpefFxccylidG4tKC4qPykoPzpcXHN8JCkvZy5leGVjKGZpZWxkLmNsYXNzTmFtZSk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZmllbGQuc3R5bGUgPSBtYXRjaFsxXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZXNjYXBlQXR0cnMoZmllbGQpO1xuXG4gICAgICBhcHBlbmROZXdGaWVsZChmaWVsZCwgaXNOZXcpO1xuICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkQWRkZWQpO1xuICAgICAgfVxuICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICB9O1xuXG4gICAgLy8gUGFyc2Ugc2F2ZWQgWE1MIHRlbXBsYXRlIGRhdGFcbiAgICBsZXQgbG9hZEZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2hlbHBlcnMuZ2V0RGF0YSgpO1xuICAgICAgbGV0IGZvcm1EYXRhID0gZm9ybUJ1aWxkZXIuZm9ybURhdGE7XG4gICAgICBpZiAoZm9ybURhdGEgJiYgZm9ybURhdGEubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBwcmVwRmllbGRWYXJzKGZvcm1EYXRhW2ldKTtcbiAgICAgICAgfVxuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfSBlbHNlIGlmIChvcHRzLmRlZmF1bHRGaWVsZHMgJiYgb3B0cy5kZWZhdWx0RmllbGRzLmxlbmd0aCkge1xuICAgICAgICAvLyBMb2FkIGRlZmF1bHQgZmllbGRzIGlmIG5vbmUgYXJlIHNldFxuICAgICAgICBvcHRzLmRlZmF1bHRGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBwcmVwRmllbGRWYXJzKGZpZWxkKSk7XG4gICAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgICB9IGVsc2UgaWYgKCFvcHRzLnByZXBlbmQgJiYgIW9wdHMuYXBwZW5kKSB7XG4gICAgICAgICRzdGFnZVdyYXAuYWRkQ2xhc3MoJ2VtcHR5JylcbiAgICAgICAgLmF0dHIoJ2RhdGEtY29udGVudCcsIGkxOG4uZ2V0U3RhcnRlZCk7XG4gICAgICB9XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG5cbiAgICAgIG5vbkVkaXRhYmxlRmllbGRzKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBkYXRhIGZvciBmaWVsZCB3aXRoIG9wdGlvbnMgW3NlbGVjdCwgY2hlY2tib3gtZ3JvdXAsIHJhZGlvLWdyb3VwXVxuICAgICAqXG4gICAgICogQHRvZG8gICByZWZhY3RvciB0aGlzIG5hc3R5IH5jcmFwfiBjb2RlLCBpdHMgYWN0dWFsbHkgcGFpbmZ1bCB0byBsb29rIGF0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZpZWxkIG9wdGlvbnMgbWFya3VwXG4gICAgICovXG4gICAgbGV0IGZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgbGV0IG9wdGlvbkFjdGlvbnMgPSBbXG4gICAgICAgICAgdXRpbHMubWFya3VwKCdhJywgaTE4bi5hZGRPcHRpb24sIHtjbGFzc05hbWU6ICdhZGQgYWRkLW9wdCd9KVxuICAgICAgICBdO1xuICAgICAgbGV0IGZpZWxkT3B0aW9ucyA9IFtcbiAgICAgICAgYDxsYWJlbCBjbGFzcz1cImZhbHNlLWxhYmVsXCI+JHtpMThuLnNlbGVjdE9wdGlvbnN9PC9sYWJlbD5gXG4gICAgICBdO1xuICAgICAgY29uc3QgaXNNdWx0aXBsZSA9IHZhbHVlcy5tdWx0aXBsZSB8fCAodmFsdWVzLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpO1xuXG4gICAgICBpZiAoIXZhbHVlcy52YWx1ZXMgfHwgIXZhbHVlcy52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlcy52YWx1ZXMgPSBbMSwgMiwgM10ubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IGxhYmVsID0gYCR7aTE4bi5vcHRpb259ICR7aW5kZXh9YDtcbiAgICAgICAgICBsZXQgb3B0aW9uID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgdmFsdWU6IHV0aWxzLmh5cGhlbkNhc2UobGFiZWwpXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsdWVzLnZhbHVlc1swXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbnN1cmUgb3B0aW9uIGRhdGEgaXMgaGFzIGFsbCByZXF1aXJlZCBrZXlzXG4gICAgICAgIHZhbHVlcy52YWx1ZXMuZm9yRWFjaChvcHRpb24gPT4gT2JqZWN0LmFzc2lnbih7fSwge3NlbGVjdGVkOiBmYWxzZX0sIG9wdGlvbikpO1xuICAgICAgfVxuXG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPGRpdiBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnMtd3JhcFwiPicpO1xuXG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPG9sIGNsYXNzPVwic29ydGFibGUtb3B0aW9uc1wiPicpO1xuICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZXMudmFsdWVzLCAoaSkgPT4ge1xuICAgICAgICBmaWVsZE9wdGlvbnMucHVzaChzZWxlY3RGaWVsZE9wdGlvbnModmFsdWVzLm5hbWUsIHZhbHVlcy52YWx1ZXNbaV0sIGlzTXVsdGlwbGUpKTtcbiAgICAgIH0pO1xuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzwvb2w+Jyk7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCh1dGlscy5tYXJrdXAoJ2RpdicsIG9wdGlvbkFjdGlvbnMsIHtjbGFzc05hbWU6ICdvcHRpb24tYWN0aW9ucyd9KS5vdXRlckhUTUwpO1xuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzwvZGl2PicpO1xuXG4gICAgICByZXR1cm4gdXRpbHMubWFya3VwKCdkaXYnLCBmaWVsZE9wdGlvbnMuam9pbignJyksIHtjbGFzc05hbWU6ICdmb3JtLWdyb3VwIGZpZWxkLW9wdGlvbnMnfSkub3V0ZXJIVE1MO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgZWRpdGFibGUgcHJvcGVydGllcyBmb3IgdGhlIGZpZWxkXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZXMgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGFkdmFuY2VkIGZpZWxkc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgIG1hcmt1cCBmb3IgYWR2YW5jZWQgZmllbGRzXG4gICAgICovXG4gICAgbGV0IGFkdkZpZWxkcyA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgbGV0IGFkdkZpZWxkcyA9IFtdO1xuICAgICAgbGV0IGtleTtcbiAgICAgIGxldCB2YWx1ZUZpZWxkID0gIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsnaGVhZGVyJywgJ3BhcmFncmFwaCcsICdmaWxlJ10uY29uY2F0KGQub3B0aW9uRmllbGRzKSk7XG4gICAgICBsZXQgcm9sZXMgPSB2YWx1ZXMucm9sZSAhPT0gdW5kZWZpbmVkID8gdmFsdWVzLnJvbGUuc3BsaXQoJywnKSA6IFtdO1xuXG4gICAgICBhZHZGaWVsZHMucHVzaChyZXF1aXJlZEZpZWxkKHZhbHVlcykpO1xuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgndG9nZ2xlJywgdmFsdWVzLCB7Zmlyc3Q6IGkxOG4udG9nZ2xlfSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBJbmxpbmUgb3B0aW9uc1xuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgICAgbGV0IGxhYmVscyA9IHtcbiAgICAgICAgICBmaXJzdDogaTE4bi5pbmxpbmUsXG4gICAgICAgICAgc2Vjb25kOiBtaTE4bi5nZXQoJ2lubGluZURlc2MnLCB2YWx1ZXMudHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJykpXG4gICAgICAgIH07XG5cbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnaW5saW5lJywgdmFsdWVzLCBsYWJlbHMpKTtcbiAgICAgIH1cblxuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnbGFiZWwnLCB2YWx1ZXMpKTtcblxuICAgICAgdmFsdWVzLnNpemUgPSB2YWx1ZXMuc2l6ZSB8fCAnbSc7XG4gICAgICB2YWx1ZXMuc3R5bGUgPSB2YWx1ZXMuc3R5bGUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgICAvLyBIZWxwIFRleHQgLyBEZXNjcmlwdGlvbiBGaWVsZFxuICAgICAgaWYgKCF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnYnV0dG9uJ10pKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJ0eXBlc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBzdWJ0eXBlc1t2YWx1ZXMudHlwZV07XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHNlbGVjdEF0dHJpYnV0ZSgnc3VidHlwZScsIHZhbHVlcywgb3B0aW9uRGF0YSkpO1xuICAgICAgfVxuXG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYnRuU3R5bGVzKHZhbHVlcy5zdHlsZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWluJywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWF4JywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnc3RlcCcsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBQbGFjZWhvbGRlclxuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB2YWx1ZXMpKTtcblxuICAgICAgLy8gVGV4dEFyZWEgUm93cyBBdHRyaWJ1dGVcbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ3Jvd3MnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xhc3NcbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2NsYXNzTmFtZScsIHZhbHVlcykpO1xuXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCduYW1lJywgdmFsdWVzKSk7XG5cbiAgICAgIGlmICh2YWx1ZUZpZWxkKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGxldCBsYWJlbHMgPSB7XG4gICAgICAgICAgZmlyc3Q6IGkxOG4ubXVsdGlwbGVGaWxlcyxcbiAgICAgICAgICBzZWNvbmQ6IGkxOG4uYWxsb3dNdWx0aXBsZUZpbGVzXG4gICAgICAgIH07XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCBsYWJlbHMpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJvbGVzRGlzcGxheSA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCInIDogJyc7XG4gICAgICBsZXQgYXZhaWxhYmxlUm9sZXMgPSBbXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYXZhaWxhYmxlLXJvbGVzXCIgJHtyb2xlc0Rpc3BsYXl9PmBcbiAgICAgIF07XG4gICAgICBmb3IgKGtleSBpbiBvcHRzLnJvbGVzKSB7XG4gICAgICAgIGlmIChvcHRzLnJvbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgY2hlY2tlZCA9IHV0aWxzLmluQXJyYXkoa2V5LCByb2xlcykgPyAnY2hlY2tlZCcgOiAnJztcbiAgICAgICAgICBsZXQgcm9sZUlkID0gYGZsZC0ke2xhc3RJRH0tcm9sZXMtJHtrZXl9YDtcbiAgICAgICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJvbGVzW11cIiB2YWx1ZT1cIiR7a2V5fVwiIGlkPVwiJHtyb2xlSWR9XCIgJHtjaGVja2VkfSBjbGFzcz1cInJvbGVzLWZpZWxkXCIgLz4gPGxhYmVsIGZvcj1cIiR7cm9sZUlkfVwiPiR7b3B0cy5yb2xlc1trZXldfTwvbGFiZWw+PGJyLz5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKCc8L2Rpdj4nKTtcblxuICAgICAgbGV0IGFjY2Vzc0xhYmVscyA9IHtmaXJzdDogaTE4bi5yb2xlcywgc2Vjb25kOiBpMThuLmxpbWl0Um9sZSwgY29udGVudDogYXZhaWxhYmxlUm9sZXMuam9pbignJyl9O1xuXG4gICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdhY2Nlc3MnLCB2YWx1ZXMsIGFjY2Vzc0xhYmVscykpO1xuXG4gICAgICBpZiAodmFsdWVzLnR5cGUubWF0Y2goLyhjaGVja2JveC1ncm91cHxyYWRpby1ncm91cCkvKSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdvdGhlcicsIHZhbHVlcywge2ZpcnN0OiBpMThuLmVuYWJsZU90aGVyLCBzZWNvbmQ6IGkxOG4uZW5hYmxlT3RoZXJNc2d9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIHtmaXJzdDogJyAnLCBzZWNvbmQ6IGkxOG4uc2VsZWN0aW9uc01lc3NhZ2V9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZS5tYXRjaChkLm9wdGlvbkZpZWxkc1JlZ0V4KSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChmaWVsZE9wdGlvbnModmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ3RleHQnLCAndGV4dGFyZWEnXSkpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXhsZW5ndGgnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIGN1c3RvbSBhdHRyaWJ1dGVzIGFzIGRlZmluZWQgaW4gdHlwZVVzZXJBdHRycyBvcHRpb25cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHByb2Nlc3NUeXBlVXNlckF0dHJzKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0sIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWR2RmllbGRzLmpvaW4oJycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdHlwZVVzZXJBdHRyc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gdHlwZVVzZXJBdHRyIG9wdGlvblxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICAgIGZpZWxkIGF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICBtYXJrdXAgZm9yIGN1c3RvbSB1c2VyIGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9jZXNzVHlwZVVzZXJBdHRycyh0eXBlVXNlckF0dHIsIHZhbHVlcykge1xuICAgICAgbGV0IGFkdkZpZWxkID0gW107XG5cbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiB0eXBlVXNlckF0dHIpIHtcbiAgICAgICAgaWYgKHR5cGVVc2VyQXR0ci5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgbGV0IG9yaWcgPSBpMThuW2F0dHJpYnV0ZV07XG4gICAgICAgICAgbGV0IG9yaWdWYWx1ZSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlO1xuICAgICAgICAgIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgfHwgJyc7XG5cbiAgICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWwpIHtcbiAgICAgICAgICAgIGkxOG5bYXR0cmlidXRlXSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLmxhYmVsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5vcHRpb25zKSB7XG4gICAgICAgICAgICBhZHZGaWVsZC5wdXNoKHNlbGVjdFVzZXJBdHRycyhhdHRyaWJ1dGUsIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkdkZpZWxkLnB1c2goaW5wdXRVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkxOG5bYXR0cmlidXRlXSA9IG9yaWc7XG4gICAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFkdkZpZWxkLmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRleHQgaW5wdXQgdmFsdWUgZm9yIGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgYWxzbyBrbm93biBhcyB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIGlucHV0IG1hcmt1cFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlucHV0VXNlckF0dHJzKG5hbWUsIGF0dHJzKSB7XG4gICAgICBsZXQgdGV4dEF0dHJzID0ge1xuICAgICAgICAgIGlkOiBuYW1lICsgJy0nICsgbGFzdElELFxuICAgICAgICAgIHRpdGxlOiBhdHRycy5kZXNjcmlwdGlvbiB8fCBhdHRycy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBhdHRycy50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgICBjbGFzc05hbWU6IFtgZmxkLSR7bmFtZX1gXVxuICAgICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3RleHRBdHRycy5pZH1cIj4ke2kxOG5bbmFtZV19PC9sYWJlbD5gO1xuXG4gICAgICBpZiAoIXV0aWxzLmluQXJyYXkodGV4dEF0dHJzLnR5cGUsIFsnY2hlY2tib3gnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgICAgdGV4dEF0dHJzLmNsYXNzTmFtZS5wdXNoKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgIH1cblxuICAgICAgdGV4dEF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHRleHRBdHRycyk7XG4gICAgICBsZXQgdGV4dElucHV0ID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodGV4dEF0dHJzKX0+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3RleHRJbnB1dH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGlucHV0IGZvciBtdWx0aXBsZSBjaG9pY2UgdXNlciBhdHRyaWJ1dGVzXG4gICAgICogQHRvZG8gIHJlcGxhY2Ugd2l0aCBzZWxlY3RBdHRyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgIHNlbGVjdCBtYXJrdXBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZWxlY3RVc2VyQXR0cnMobmFtZSwgb3B0aW9ucykge1xuICAgICAgbGV0IG9wdGlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5tYXAodmFsID0+IHtcbiAgICAgICAgbGV0IGF0dHJzID0ge3ZhbHVlOiB2YWx9O1xuICAgICAgICBpZiAodmFsID09PSBvcHRpb25zLnZhbHVlKSB7XG4gICAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4ke29wdGlvbnMub3B0aW9uc1t2YWxdfTwvb3B0aW9uPmA7XG4gICAgICB9KTtcbiAgICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgICAgaWQ6IG5hbWUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgIHRpdGxlOiBvcHRpb25zLmRlc2NyaXB0aW9uIHx8IG9wdGlvbnMubGFiZWwgfHwgbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHtuYW1lfSBmb3JtLWNvbnRyb2xgXG4gICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7aTE4bltuYW1lXX08L2xhYmVsPmA7XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihwcm9wID0+IHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5pbkFycmF5KHByb3AsIFsndmFsdWUnLCAnb3B0aW9ucycsICdsYWJlbCddKTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBzZWxlY3RBdHRyc1thdHRyXSA9IG9wdGlvbnNbYXR0cl07XG4gICAgICB9KTtcblxuICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7b3B0aXMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgbGV0IGJvb2xBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZXMsIGxhYmVscykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVtuYW1lXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbCA9ICh0eHQpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGFiZWwgZm9yPVwiJHtuYW1lfS0ke2xhc3RJRH1cIj4ke3R4dH08L2xhYmVsPmA7XG4gICAgICB9O1xuICAgICAgbGV0IGNoZWNrZWQgPSAodmFsdWVzW25hbWVdICE9PSB1bmRlZmluZWQgPyAnY2hlY2tlZCcgOiAnJyk7XG4gICAgICBsZXQgaW5wdXQgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZmxkLSR7bmFtZX1cIiBuYW1lPVwiJHtuYW1lfVwiIHZhbHVlPVwidHJ1ZVwiICR7Y2hlY2tlZH0gaWQ9XCIke25hbWV9LSR7bGFzdElEfVwiLz4gYDtcbiAgICAgIGxldCBsZWZ0ID0gW107XG4gICAgICBsZXQgcmlnaHQgPSBbXG4gICAgICAgIGlucHV0XG4gICAgICBdO1xuXG4gICAgICBpZiAobGFiZWxzLmZpcnN0KSB7XG4gICAgICAgIGxlZnQudW5zaGlmdChsYWJlbChsYWJlbHMuZmlyc3QpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhYmVscy5zZWNvbmQpIHtcbiAgICAgICAgcmlnaHQucHVzaChsYWJlbChsYWJlbHMuc2Vjb25kKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYWJlbHMuY29udGVudCkge1xuICAgICAgICByaWdodC5wdXNoKGxhYmVscy5jb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmlnaHQudW5zaGlmdCgnPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4nKTtcbiAgICAgIHJpZ2h0LnB1c2goJzwvZGl2PicpO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGVmdC5jb25jYXQocmlnaHQpLmpvaW4oJycpfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIGxldCBidG5TdHlsZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICBsZXQgc3R5bGVzID0gaTE4bi5zdHlsZXMuYnRuO1xuICAgICAgICBsZXQgc3R5bGVGaWVsZCA9ICcnO1xuXG4gICAgICBpZiAoc3R5bGVzKSB7XG4gICAgICAgIGxldCBzdHlsZUxhYmVsID0gYDxsYWJlbD4ke2kxOG4uc3R5bGV9PC9sYWJlbD5gO1xuICAgICAgICBzdHlsZUZpZWxkICs9IGA8aW5wdXQgdmFsdWU9XCIke3N0eWxlfVwiIG5hbWU9XCJzdHlsZVwiIHR5cGU9XCJoaWRkZW5cIiBjbGFzcz1cImJ0bi1zdHlsZVwiPmA7XG4gICAgICAgIHN0eWxlRmllbGQgKz0gJzxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj4nO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBsZXQgY2xhc3NMaXN0ID0gWydidG4teHMnLCAnYnRuJywgYGJ0bi0ke2VsZW1lbnR9YF07XG4gICAgICAgICAgaWYgKHN0eWxlID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QucHVzaCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdHlsZUZpZWxkICs9IGA8YnV0dG9uIHZhbHVlPVwiJHtlbGVtZW50fVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7Y2xhc3NMaXN0LmpvaW4oJyAnKX1cIj4ke2kxOG4uc3R5bGVzLmJ0bltlbGVtZW50XX08L2J1dHRvbj5gO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdHlsZUZpZWxkICs9ICc8L2Rpdj4nO1xuXG4gICAgICAgIHN0eWxlRmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc3R5bGUtd3JhcFwiPiR7c3R5bGVMYWJlbH0gJHtzdHlsZUZpZWxkfTwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZUZpZWxkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBudW1iZXIgYXR0cmlidXRlIHRvIGEgZmllbGQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gbWFya3VwIGZvciBudW1iZXIgYXR0cmlidXRlXG4gICAgICovXG4gICAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgYXR0clZhbCA9IHZhbHVlc1thdHRyaWJ1dGVdO1xuICAgICAgbGV0IGF0dHJMYWJlbCA9IGkxOG5bYXR0cmlidXRlXSB8fCBhdHRyaWJ1dGU7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBpMThuLnBsYWNlaG9sZGVyc1thdHRyaWJ1dGVdO1xuICAgICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgdmFsdWU6IGF0dHJWYWwsXG4gICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgbWluOiAnMCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2xhc3RJRH1gXG4gICAgICB9O1xuICAgICAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGA8aW5wdXQgJHt1dGlscy5hdHRyU3RyaW5nKHV0aWxzLnRyaW1PYmooaW5wdXRDb25maWcpKX0+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke251bWJlckF0dHJpYnV0ZX08L2Rpdj5gO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCI+PGxhYmVsIGZvcj1cIiR7aW5wdXRDb25maWcuaWR9XCI+JHthdHRyTGFiZWx9PC9sYWJlbD4gJHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2VsZWN0QXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGUgIGF0dHJpYnV0ZSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgIGFrYSBhdHRyc1xuICAgICAqIEBwYXJhbSAge0FycmF5fSBvcHRpb25EYXRhICBzZWxlY3QgZmllbGQgb3B0aW9uIGRhdGFcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgc2VsZWN0IGlucHV0IG1ha3J1cFxuICAgICAqL1xuICAgIGxldCBzZWxlY3RBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcywgb3B0aW9uRGF0YSkge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxlY3RPcHRpb25zID0gb3B0aW9uRGF0YS5tYXAoKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBsYWJlbDogYCR7aTE4bi5vcHRpb259ICR7aX1gLFxuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSwgb3B0aW9uKTtcbiAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWVzW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgICBvcHRpb25BdHRycy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8b3B0aW9uICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKG9wdGlvbkF0dHJzKSl9PiR7b3B0aW9uQXR0cnMubGFiZWx9PC9vcHRpb24+YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IHNlbGVjdEF0dHJzID0ge1xuICAgICAgICAgIGlkOiBhdHRyaWJ1dGUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYFxuICAgICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7aTE4blthdHRyaWJ1dGVdIHx8IHV0aWxzLmNhcGl0YWxpemUoYXR0cmlidXRlKX08L2xhYmVsPmA7XG4gICAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtzZWxlY3RPcHRpb25zLmpvaW4oJycpfTwvc2VsZWN0PmA7XG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtzZWxlY3R9PC9kaXY+YDtcblxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke3NlbGVjdEF0dHJzLm5hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHNvbWUgdGV4dCBpbnB1dHMgZm9yIGZpZWxkIGF0dHJpYnV0ZXMsICoqd2lsbCBiZSByZXBsYWNlZCoqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBsZXQgdGV4dEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGxhY2Vob2xkZXJGaWVsZHMgPSBbXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICdhdXRvY29tcGxldGUnXG4gICAgICBdO1xuXG4gICAgICBsZXQgbm9OYW1lID0gW1xuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ3BhcmFncmFwaCdcbiAgICAgIF07XG5cbiAgICAgIGxldCB0ZXh0QXJlYSA9IFsncGFyYWdyYXBoJ107XG5cbiAgICAgIGxldCBhdHRyVmFsID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgICBsZXQgYXR0ckxhYmVsID0gaTE4blthdHRyaWJ1dGVdO1xuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCB0ZXh0QXJlYSkpIHtcbiAgICAgICAgYXR0ckxhYmVsID0gaTE4bi5jb250ZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VidHlwZXMuaGVhZGVyKSB7XG4gICAgICAgIG5vTmFtZSA9IG5vTmFtZS5jb25jYXQoc3VidHlwZXMuaGVhZGVyKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHBsYWNlaG9sZGVycyA9IGkxOG4ucGxhY2Vob2xkZXJzO1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgICBsZXQgYXR0cmlidXRlZmllbGQgPSAnJztcbiAgICAgIGxldCBub01ha2VBdHRyID0gW107XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBwbGFjZWhvbGRlciBhdHRyaWJ1dGVcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdwbGFjZWhvbGRlcicgJiYgIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHBsYWNlaG9sZGVyRmllbGRzKSkge1xuICAgICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBuYW1lIGF0dHJpYnV0ZVxuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ25hbWUnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vTmFtZSkpIHtcbiAgICAgICAgbm9NYWtlQXR0ci5wdXNoKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vTWFrZUF0dHIuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2xhc3RJRH1gXG4gICAgICAgIH07XG4gICAgICAgIGxldCBhdHRyaWJ1dGVMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtpbnB1dENvbmZpZy5pZH1cIj4ke2F0dHJMYWJlbH08L2xhYmVsPmA7XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJykge1xuICAgICAgICAgIGF0dHJpYnV0ZWZpZWxkICs9IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZSAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT4ke2F0dHJWYWx9PC9kaXY+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dENvbmZpZy52YWx1ZSA9IGF0dHJWYWw7XG4gICAgICAgICAgaW5wdXRDb25maWcudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PmA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHthdHRyaWJ1dGVmaWVsZH08L2Rpdj5gO1xuXG4gICAgICAgIGxldCB2aXNpYmlsaXR5ID0gJ2Jsb2NrJztcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICAgIHZpc2liaWxpdHkgPSB2YWx1ZXMuc3VidHlwZSAmJiB2YWx1ZXMuc3VidHlwZSA9PT0gJ3F1aWxsJyAmJiAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyaWJ1dGVmaWVsZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiIHN0eWxlPVwiZGlzcGxheTogJHt2aXNpYmlsaXR5fVwiPiR7YXR0cmlidXRlTGFiZWx9ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVmaWVsZDtcbiAgICB9O1xuXG4gICAgbGV0IHJlcXVpcmVkRmllbGQgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBub1JlcXVpcmUgPSBbXG4gICAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICAgJ2J1dHRvbidcbiAgICAgICAgXTtcbiAgICAgIGxldCBub01ha2UgPSBbXTtcbiAgICAgIGxldCByZXF1aXJlRmllbGQgPSAnJztcblxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vUmVxdWlyZSkpIHtcbiAgICAgICAgbm9NYWtlLnB1c2godHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5vTWFrZS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmVxdWlyZUZpZWxkID0gYm9vbEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB2YWx1ZXMsIHtmaXJzdDogaTE4bi5yZXF1aXJlZH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWlyZUZpZWxkO1xuICAgIH07XG5cbiAgICAvLyBBcHBlbmQgdGhlIG5ldyBmaWVsZCB0byB0aGUgZWRpdG9yXG4gICAgbGV0IGFwcGVuZE5ld0ZpZWxkID0gZnVuY3Rpb24odmFsdWVzLCBpc05ldyA9IHRydWUpIHtcbiAgICAgIGxldCB0eXBlID0gdmFsdWVzLnR5cGUgfHwgJ3RleHQnO1xuICAgICAgbGV0IGxhYmVsID0gdmFsdWVzLmxhYmVsIHx8IGkxOG5bdHlwZV0gfHwgaTE4bi5sYWJlbDtcbiAgICAgIGxldCBkZWxCdG4gPSBtKCdhJywgaTE4bi5yZW1vdmUsIHtcbiAgICAgICAgICBpZDogJ2RlbF8nICsgbGFzdElELFxuICAgICAgICAgIGNsYXNzTmFtZTogJ2RlbC1idXR0b24gYnRuIGRlbGV0ZS1jb25maXJtJyxcbiAgICAgICAgICB0aXRsZTogaTE4bi5yZW1vdmVNZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgbGV0IHRvZ2dsZUJ0biA9IG0oJ2EnLCBudWxsLCB7XG4gICAgICAgIGlkOiBsYXN0SUQgKyAnLWVkaXQnLFxuICAgICAgICBjbGFzc05hbWU6ICd0b2dnbGUtZm9ybSBidG4gaWNvbi1wZW5jaWwnLFxuICAgICAgICB0aXRsZTogaTE4bi5oaWRlXG4gICAgICB9KTtcbiAgICAgIGxldCBjb3B5QnRuID0gbSgnYScsIG51bGwsIHtcbiAgICAgICAgaWQ6IGxhc3RJRCArICctY29weScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NvcHktYnV0dG9uIGJ0biBpY29uLWNvcHknLFxuICAgICAgICB0aXRsZTogaTE4bi5jb3B5QnV0dG9uVG9vbHRpcFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaUNvbnRlbnRzID0gbShcbiAgICAgICAgJ2RpdicsIFt0b2dnbGVCdG4sIGNvcHlCdG4sIGRlbEJ0bl0sIHtjbGFzc05hbWU6ICdmaWVsZC1hY3Rpb25zJ31cbiAgICAgICkub3V0ZXJIVE1MO1xuXG4gICAgICAvLyBGaWVsZCBwcmV2aWV3IExhYmVsXG4gICAgICBsaUNvbnRlbnRzICs9IGA8bGFiZWwgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPiR7dXRpbHMucGFyc2VkSHRtbChsYWJlbCl9PC9sYWJlbD5gO1xuXG4gICAgICBpZiAodmFsdWVzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICAgIHRvb2x0aXA6IHZhbHVlcy5kZXNjcmlwdGlvblxuICAgICAgICB9O1xuICAgICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4/PC9zcGFuPmA7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXF1aXJlZERpc3BsYXkgPSB2YWx1ZXMucmVxdWlyZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmlubGluZVwiJyA6ICcnO1xuICAgICAgbGlDb250ZW50cyArPSBgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiICR7cmVxdWlyZWREaXNwbGF5fT4gKjwvc3Bhbj5gO1xuXG4gICAgICBsaUNvbnRlbnRzICs9IG0oJ2RpdicsICcnLCB7Y2xhc3NOYW1lOiAncHJldi1ob2xkZXInfSkub3V0ZXJIVE1MO1xuICAgICAgbGlDb250ZW50cyArPSBgPGRpdiBpZD1cIiR7bGFzdElEfS1ob2xkZXJcIiBjbGFzcz1cImZybS1ob2xkZXJcIj5gO1xuICAgICAgbGlDb250ZW50cyArPSAnPGRpdiBjbGFzcz1cImZvcm0tZWxlbWVudHNcIj4nO1xuXG4gICAgICBsaUNvbnRlbnRzICs9IGFkdkZpZWxkcyh2YWx1ZXMpO1xuICAgICAgbGlDb250ZW50cyArPSBtKCdhJywgaTE4bi5jbG9zZSwge2NsYXNzTmFtZTogJ2Nsb3NlLWZpZWxkJ30pLm91dGVySFRNTDtcblxuICAgICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcbiAgICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XG5cbiAgICAgIGxldCBmaWVsZCA9IG0oJ2xpJywgbGlDb250ZW50cywge1xuICAgICAgICAgICdjbGFzcyc6IHR5cGUgKyAnLWZpZWxkIGZvcm0tZmllbGQnLFxuICAgICAgICAgICd0eXBlJzogdHlwZSxcbiAgICAgICAgICBpZDogbGFzdElEXG4gICAgICAgIH0pO1xuICAgICAgbGV0ICRsaSA9ICQoZmllbGQpO1xuXG4gICAgICAkbGkuZGF0YSgnZmllbGREYXRhJywge2F0dHJzOiB2YWx1ZXN9KTtcblxuICAgICAgaWYgKHR5cGVvZiBfaGVscGVycy5zdG9wSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoJz4gbGknLCAkc29ydGFibGVGaWVsZHMpLmVxKF9oZWxwZXJzLnN0b3BJbmRleCkuYmVmb3JlKCRsaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc29ydGFibGVGaWVsZHMuYXBwZW5kKCRsaSk7XG4gICAgICB9XG5cbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJGxpKVxuICAgICAgLnNvcnRhYmxlKHt1cGRhdGU6ICgpID0+IF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKX0pO1xuXG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRsaSk7XG5cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdICYmIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQpIHtcbiAgICAgICAgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmFkZChmaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmVkaXRPbkFkZCAmJiBpc05ldykge1xuICAgICAgICBfaGVscGVycy5jbG9zZUFsbEVkaXQoKTtcbiAgICAgICAgX2hlbHBlcnMudG9nZ2xlRWRpdChsYXN0SUQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgbGFzdElEID0gX2hlbHBlcnMuaW5jcmVtZW50SWQobGFzdElEKTtcbiAgICB9O1xuXG4gICAgLy8gU2VsZWN0IGZpZWxkIGh0bWwsIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZVxuICAgIGxldCBzZWxlY3RGaWVsZE9wdGlvbnMgPSBmdW5jdGlvbihuYW1lLCBvcHRpb25EYXRhLCBtdWx0aXBsZVNlbGVjdCkge1xuICAgICAgbGV0IG9wdGlvbklucHV0VHlwZSA9IHtcbiAgICAgICAgICBzZWxlY3RlZDogKG11bHRpcGxlU2VsZWN0ID8gJ2NoZWNrYm94JyA6ICdyYWRpbycpXG4gICAgICAgIH07XG4gICAgICBsZXQgb3B0aW9uRGF0YU9yZGVyID0gW1xuICAgICAgICAndmFsdWUnLFxuICAgICAgICAnbGFiZWwnLFxuICAgICAgICAnc2VsZWN0ZWQnXG4gICAgICBdO1xuICAgICAgbGV0IG9wdGlvbklucHV0cyA9IFtdO1xuICAgICAgbGV0IG9wdGlvblRlbXBsYXRlID0ge3NlbGVjdGVkOiBmYWxzZSwgbGFiZWw6ICcnLCB2YWx1ZTogJyd9O1xuXG4gICAgICBvcHRpb25EYXRhID0gT2JqZWN0LmFzc2lnbihvcHRpb25UZW1wbGF0ZSwgb3B0aW9uRGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSBvcHRpb25EYXRhT3JkZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IHByb3AgPSBvcHRpb25EYXRhT3JkZXJbaV07XG4gICAgICAgIGlmIChvcHRpb25EYXRhLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgICAgdHlwZTogb3B0aW9uSW5wdXRUeXBlW3Byb3BdIHx8ICd0ZXh0JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdvcHRpb24tJyArIHByb3AsXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uRGF0YVtwcm9wXSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUgKyAnLW9wdGlvbidcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGkxOG4ucGxhY2Vob2xkZXJzW3Byb3BdKSB7XG4gICAgICAgICAgICBhdHRycy5wbGFjZWhvbGRlciA9IGkxOG4ucGxhY2Vob2xkZXJzW3Byb3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9wID09PSAnc2VsZWN0ZWQnICYmIG9wdGlvbkRhdGEuc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGF0dHJzLmNoZWNrZWQgPSBvcHRpb25EYXRhLnNlbGVjdGVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9wdGlvbklucHV0cy5wdXNoKHV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBhdHRycykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCByZW1vdmVBdHRycyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAncmVtb3ZlIGJ0bicsXG4gICAgICAgIHRpdGxlOiBpMThuLnJlbW92ZU1lc3NhZ2VcbiAgICAgIH07XG4gICAgICBvcHRpb25JbnB1dHMucHVzaCh1dGlscy5tYXJrdXAoJ2EnLCBpMThuLnJlbW92ZSwgcmVtb3ZlQXR0cnMpKTtcblxuICAgICAgbGV0IGZpZWxkID0gdXRpbHMubWFya3VwKCdsaScsIG9wdGlvbklucHV0cyk7XG5cbiAgICAgIHJldHVybiBmaWVsZC5vdXRlckhUTUw7XG4gICAgfTtcblxuICAgIGxldCBjbG9uZUl0ZW0gPSBmdW5jdGlvbiBjbG9uZUl0ZW0oY3VycmVudEl0ZW0pIHtcbiAgICAgIGxldCBjdXJyZW50SWQgPSBjdXJyZW50SXRlbS5hdHRyKCdpZCcpO1xuICAgICAgbGV0IHR5cGUgPSBjdXJyZW50SXRlbS5hdHRyKCd0eXBlJyk7XG4gICAgICBsZXQgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxldCBjbG9uZU5hbWUgPSB0eXBlICsgJy0nICsgdHM7XG4gICAgICBsZXQgJGNsb25lID0gY3VycmVudEl0ZW0uY2xvbmUoKTtcblxuICAgICAgJGNsb25lLmZpbmQoJ1tpZF0nKS5lYWNoKChpLCBlbGVtKSA9PiB7XG4gICAgICAgZWxlbS5pZCA9IGVsZW0uaWQucmVwbGFjZShjdXJyZW50SWQsIGxhc3RJRCk7XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmZpbmQoJ1tmb3JdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZvcicpLnJlcGxhY2UoY3VycmVudElkLCBsYXN0SUQpKTtcbiAgICAgIH0pO1xuXG4gICAgICAkY2xvbmUuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnZTpub3QoLmZvcm0tZWxlbWVudHMpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgbmV3TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIChuZXdOYW1lLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUgKyB0cy50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgbmV3TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5maW5kKCcuZm9ybS1lbGVtZW50cycpLmZpbmQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSAnbmFtZScpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsLnN1YnN0cmluZygwLCAobmV3VmFsLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmF0dHIoJ2lkJywgbGFzdElEKTtcbiAgICAgICRjbG9uZS5hdHRyKCduYW1lJywgY2xvbmVOYW1lKTtcbiAgICAgICRjbG9uZS5hZGRDbGFzcygnY2xvbmVkJyk7XG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRjbG9uZSkuc29ydGFibGUoKTtcblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKSB7XG4gICAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSgkY2xvbmVbMF0pO1xuICAgICAgfVxuXG4gICAgICBsYXN0SUQgPSBfaGVscGVycy5pbmNyZW1lbnRJZChsYXN0SUQpO1xuICAgICAgcmV0dXJuICRjbG9uZTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVVElMSVRJRVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gICAgLy8gZGVsZXRlIG9wdGlvbnNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKHRoaXMpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgb3B0aW9uc0NvdW50ID0gJCh0aGlzKS5wYXJlbnRzKCcuc29ydGFibGUtb3B0aW9uczplcSgwKScpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcbiAgICAgIGlmIChvcHRpb25zQ291bnQgPD0gMikge1xuICAgICAgICBvcHRzLm5vdGlmeS5lcnJvcignRXJyb3I6ICcgKyBpMThuLm1pbk9wdGlvbk1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuc2xpZGVVcCgnMjUwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRmaWVsZCk7XG4gICAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRvdWNoIGZvY3VzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCd0b3VjaHN0YXJ0JywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGlmICgkaW5wdXQuYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgbGV0IGZpZWxkVmFsID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICRpbnB1dC52YWwoZmllbGRWYWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGUgZmllbGRzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy50b2dnbGUtZm9ybSwgLmNsb3NlLWZpZWxkJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChlLmhhbmRsZWQgIT09IHRydWUpIHtcbiAgICAgICAgbGV0IHRhcmdldElEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgICBfaGVscGVycy50b2dnbGVFZGl0KHRhcmdldElEKTtcbiAgICAgICAgZS5oYW5kbGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlJywgJ1tuYW1lPVwic3VidHlwZVwiXScsIChlKSA9PiB7XG4gICAgICBjb25zdCAkZmllbGQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgICBjb25zdCAkdmFsV3JhcCA9ICQoJy52YWx1ZS13cmFwJywgJGZpZWxkKTtcbiAgICAgICR2YWxXcmFwLnRvZ2dsZShlLnRhcmdldC52YWx1ZSAhPT0gJ3F1aWxsJyk7XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZScsICcucHJldi1ob2xkZXIgaW5wdXQsIC5wcmV2LWhvbGRlciBzZWxlY3QnLCBlID0+IHtcbiAgICAgIGxldCBwcmV2T3B0aW9ucztcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ290aGVyLW9wdGlvbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBmaWVsZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpLmZvcm0tZmllbGQnKVswXTtcbiAgICAgIGlmICh1dGlscy5pbkFycmF5KGZpZWxkLnR5cGUsIFsnc2VsZWN0JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gZmllbGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3B0aW9uLXZhbHVlJyk7XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgIHV0aWxzLmZvckVhY2gob3B0aW9ucywgaSA9PiB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zW2ldLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmNoZWNrZWQgPSBlLnRhcmdldC52YWx1ZSA9PT0gb3B0aW9uc1tpXS52YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGUudGFyZ2V0Lm5hbWUpO1xuICAgICAgICAgIHV0aWxzLmZvckVhY2gocHJldk9wdGlvbnMsIGkgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9uc1tpXS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5jaGVja2VkID0gcHJldk9wdGlvbnNbaV0uY2hlY2tlZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZpZWxkVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlLScgKyBmaWVsZC5pZCk7XG4gICAgICAgIGlmKGZpZWxkVmFsKSB7XG4gICAgICAgICAgZmllbGRWYWwudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgcHJldmlldyB0byBsYWJlbFxuICAgICRzb3J0YWJsZUZpZWxkcy5vbigna2V5dXAgY2hhbmdlJywgJ1tuYW1lPVwibGFiZWxcIl0nLCBlID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIHx8IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgICQoJy5maWVsZC1sYWJlbCcsICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJykpLmh0bWwodXRpbHMucGFyc2VkSHRtbCh2YWx1ZSkpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGVycm9yIHN0eWxpbmcgd2hlbiB1c2VycyB0cmllcyB0byBjb3JyZWN0IG1pc3Rha2VcbiAgICAkc29ydGFibGVGaWVsZHMuZGVsZWdhdGUoJ2lucHV0LmVycm9yJywgJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgcHJldmlldyBmb3IgZGVzY3JpcHRpb25cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2tleXVwJywgJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgICAgbGV0IGNsb3Nlc3RUb29sVGlwID0gJCgnLnRvb2x0aXAtZWxlbWVudCcsICRmaWVsZCk7XG4gICAgICBsZXQgdHRWYWwgPSAkKGUudGFyZ2V0KS52YWwoKTtcbiAgICAgIGlmICh0dFZhbCAhPT0gJycpIHtcbiAgICAgICAgaWYgKCFjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdHQgPSBgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWVsZW1lbnRcIiB0b29sdGlwPVwiJHt0dFZhbH1cIj4/PC9zcGFuPmA7XG4gICAgICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJGZpZWxkKS5hZnRlcih0dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2VzdFRvb2xUaXAuYXR0cigndG9vbHRpcCcsIHR0VmFsKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBjbG9zZXN0VG9vbFRpcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgbXVsdGlwbGUgc2VsZWN0IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGUgY2xpY2sgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IG5ld1R5cGVcbiAgICAgKi9cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZScsICcuZmxkLW11bHRpcGxlJywgZSA9PiB7XG4gICAgICBsZXQgbmV3VHlwZSA9IGUudGFyZ2V0LmNoZWNrZWQgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcbiAgICAgIGxldCAkb3B0aW9ucyA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1lbGVtZW50cycpKTtcbiAgICAgICRvcHRpb25zLmVhY2goaSA9PiAkb3B0aW9uc1tpXS50eXBlID0gbmV3VHlwZSk7XG4gICAgICByZXR1cm4gbmV3VHlwZTtcbiAgICB9KTtcblxuICAgIC8vIGZvcm1hdCBuYW1lIGF0dHJpYnV0ZVxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignYmx1cicsICdpbnB1dC5mbGQtbmFtZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gX2hlbHBlcnMuc2FmZW5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgICAkKGUudGFyZ2V0KVxuICAgICAgICAuYWRkQ2xhc3MoJ2ZpZWxkLWVycm9yJylcbiAgICAgICAgLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi5jYW5ub3RCZUVtcHR5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdmaWVsZC1lcnJvcicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdibHVyJywgJ2lucHV0LmZsZC1tYXhsZW5ndGgnLCBlID0+IHtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gX2hlbHBlcnMuZm9yY2VOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQ29weSBmaWVsZFxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuaWNvbi1jb3B5JywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGN1cnJlbnRJdGVtID0gJChlLnRhcmdldCkucGFyZW50KCkucGFyZW50KCdsaScpO1xuICAgICAgbGV0ICRjbG9uZSA9IGNsb25lSXRlbShjdXJyZW50SXRlbSk7XG4gICAgICAkY2xvbmUuaW5zZXJ0QWZ0ZXIoY3VycmVudEl0ZW0pO1xuICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkY2xvbmUpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRGVsZXRlIGZpZWxkXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5kZWxldGUtY29uZmlybScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgYnV0dG9uUG9zaXRpb24gPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHtcbiAgICAgICAgICBwYWdlWDogYnV0dG9uUG9zaXRpb24ubGVmdCArIChidXR0b25Qb3NpdGlvbi53aWR0aCAvIDIpLFxuICAgICAgICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXG4gICAgICAgIH07XG5cbiAgICAgIGxldCBkZWxldGVJRCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJykuYXR0cignaWQnKTtcbiAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlSUQpKTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxDbG9zZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJGZpZWxkLnJlbW92ZUNsYXNzKCdkZWxldGluZycpO1xuICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAvLyBDaGVjayBpZiB1c2VyIGlzIHN1cmUgdGhleSB3YW50IHRvIHJlbW92ZSB0aGUgZmllbGRcbiAgICAgIGlmIChvcHRzLmZpZWxkUmVtb3ZlV2Fybikge1xuICAgICAgICBsZXQgd2FybkgzID0gdXRpbHMubWFya3VwKCdoMycsIGkxOG4ud2FybmluZyk7XG4gICAgICAgIGxldCB3YXJuTWVzc2FnZSA9IHV0aWxzLm1hcmt1cCgncCcsIGkxOG4uZmllbGRSZW1vdmVXYXJuaW5nKTtcbiAgICAgICAgX2hlbHBlcnMuY29uZmlybShbd2FybkgzLCB3YXJuTWVzc2FnZV0sICgpID0+XG4gICAgICAgICAgX2hlbHBlcnMucmVtb3ZlRmllbGQoZGVsZXRlSUQpLCBjb29yZHMpO1xuICAgICAgICAkZmllbGQuYWRkQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgYnV0dG9uIHN0eWxlIHNlbGVjdGlvblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnLnN0eWxlLXdyYXAgYnV0dG9uJywgZSA9PiB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gJChlLnRhcmdldCk7XG4gICAgICBsZXQgc3R5bGVWYWwgPSAkYnV0dG9uLnZhbCgpO1xuICAgICAgbGV0ICRidG5TdHlsZSA9ICRidXR0b24ucGFyZW50KCkucHJldignLmJ0bi1zdHlsZScpO1xuICAgICAgJGJ0blN0eWxlLnZhbChzdHlsZVZhbCk7XG4gICAgICAkYnV0dG9uLnNpYmxpbmdzKCcuYnRuJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkYnV0dG9uLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkYnRuU3R5bGUuY2xvc2VzdCgnLmZvcm0tZmllbGQnKSk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byB0b2dnbGUgcmVxdWlyZWQgYXN0ZXJpc2tcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJy5mbGQtcmVxdWlyZWQnLCBlID0+IHtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykuZmluZCgnLnJlcXVpcmVkLWFzdGVyaXNrJykudG9nZ2xlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byB0b2dnbGUgcm9sZXMgdmlzaWJpbGl0eVxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnaW5wdXQuZmxkLWFjY2VzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCByb2xlcyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykuZmluZCgnLmF2YWlsYWJsZS1yb2xlcycpO1xuICAgICAgbGV0IGVuYWJsZVJvbGVzQ0IgPSAkKGUudGFyZ2V0KTtcbiAgICAgIHJvbGVzLnNsaWRlVG9nZ2xlKDI1MCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghZW5hYmxlUm9sZXNDQi5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHJvbGVzKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gYWRkIG5ldyBvcHRpb25zXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuYWRkLW9wdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCAkb3B0aW9uV3JhcCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5maWVsZC1vcHRpb25zJyk7XG4gICAgICBsZXQgJG11bHRpcGxlID0gJCgnW25hbWU9XCJtdWx0aXBsZVwiXScsICRvcHRpb25XcmFwKTtcbiAgICAgIGxldCAkZmlyc3RPcHRpb24gPSAkKCcub3B0aW9uLXNlbGVjdGVkOmVxKDApJywgJG9wdGlvbldyYXApO1xuICAgICAgbGV0IGlzTXVsdGlwbGUgPSBmYWxzZTtcblxuICAgICAgaWYgKCRtdWx0aXBsZS5sZW5ndGgpIHtcbiAgICAgICAgaXNNdWx0aXBsZSA9ICRtdWx0aXBsZS5wcm9wKCdjaGVja2VkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc011bHRpcGxlID0gKCRmaXJzdE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbmFtZSA9ICRmaXJzdE9wdGlvbi5hdHRyKCduYW1lJyk7XG5cbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJG9wdGlvbldyYXApLmFwcGVuZChzZWxlY3RGaWVsZE9wdGlvbnMobmFtZSwgZmFsc2UsIGlzTXVsdGlwbGUpKTtcbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignbW91c2VvdmVyIG1vdXNlb3V0JywgJy5yZW1vdmUsIC5kZWwtYnV0dG9uJywgZSA9PlxuICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKS50b2dnbGVDbGFzcygnZGVsZXRlJykpO1xuXG4gICAgbG9hZEZpZWxkcygpO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLmNzcygnbWluLWhlaWdodCcsICRjYlVMLmhlaWdodCgpKTtcblxuICAgIC8vIElmIG9wdGlvbiBzZXQsIGNvbnRyb2xzIHdpbGwgcmVtYWluIGluIHZpZXcgaW4gZWRpdG9yXG4gICAgaWYgKG9wdHMuc3RpY2t5Q29udHJvbHMuZW5hYmxlKSB7XG4gICAgICBfaGVscGVycy5zdGlja3lDb250cm9scygkc29ydGFibGVGaWVsZHMpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmxvYWRlZCk7XG5cbiAgICAvLyBNYWtlIGFjdGlvbnMgYWNjZXNzaWJsZVxuICAgIGZvcm1CdWlsZGVyLmFjdGlvbnMgPSB7XG4gICAgICBjbGVhckZpZWxkczogX2hlbHBlcnMucmVtb3ZlQWxsZmllbGRzLFxuICAgICAgc2hvd0RhdGE6IF9oZWxwZXJzLnNob3dEYXRhLFxuICAgICAgc2F2ZTogX2hlbHBlcnMuc2F2ZSxcbiAgICAgIGFkZEZpZWxkOiAoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIF9oZWxwZXJzLnN0b3BJbmRleCA9IGZvcm1CdWlsZGVyLnN0YWdlLmNoaWxkcmVuLmxlbmd0aCA/IGluZGV4IDogdW5kZWZpbmVkO1xuICAgICAgICBwcmVwRmllbGRWYXJzKGZpZWxkKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMuZmllbGRBZGRlZCk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlRmllbGQ6IF9oZWxwZXJzLnJlbW92ZUZpZWxkLFxuICAgICAgZ2V0RGF0YTogKHR5cGUgPSAnanMnKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gZm9ybUJ1aWxkZXIuc3RhZ2U7XG4gICAgICAgIGNvbnN0IGggPSBfaGVscGVycztcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBqczogKCkgPT4gaC5wcmVwRGF0YShzdGFnZSksXG4gICAgICAgICAgeG1sOiAoKSA9PiBoLnhtbFNhdmUoc3RhZ2UpLFxuICAgICAgICAgIGpzb246ICgpID0+IHdpbmRvdy5KU09OLnN0cmluZ2lmeShoLnByZXBEYXRhKHN0YWdlKSwgbnVsbCwgJ1xcdCcpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGRhdGFbdHlwZV0oKTtcbiAgICAgIH0sXG4gICAgICBzZXREYXRhOiBmb3JtRGF0YSA9PiB7XG4gICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyhmYWxzZSk7XG4gICAgICAgIGxvYWRGaWVsZHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9ybUJ1aWxkZXIuaTE4biA9IHtcbiAgICAgIHNldExhbmc6IGFzeW5jIGxvY2FsZSA9PiB7XG4gICAgICAgIGxldCBuZXdMYW5nID0gYXdhaXQgZm9ybUJ1aWxkZXIubWkxOG4uc2V0Q3VycmVudC5jYWxsKGZvcm1CdWlsZGVyLm1pMThuLCBsb2NhbGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZm9ybUJ1aWxkZXI7XG4gIH07XG5cbiAgJC5mbi5mb3JtQnVpbGRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgbGV0IGVsZW1zID0gdGhpcztcbiAgICByZXR1cm4gZWxlbXMuZWFjaCgoaSkgPT4ge1xuICAgICAgbGV0IGZvcm1CdWlsZGVyID0gbmV3IEZvcm1CdWlsZGVyKG9wdGlvbnMsIGVsZW1zW2ldKTtcbiAgICAgICQoZWxlbXNbaV0pLmRhdGEoJ2Zvcm1CdWlsZGVyJywgZm9ybUJ1aWxkZXIpO1xuXG4gICAgICByZXR1cm4gZm9ybUJ1aWxkZXI7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuIiwiaW1wb3J0IGQgZnJvbSAnLi9kb20nO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIHNwZWNpZmljIHRvIGZvcm1CdWlsZGVyLlxuICogQ2FsbGVkIGZvcm0gZm9ybUJ1aWxkZXJcbiAqIEBwYXJhbSAge09iamVjdH0gICBvcHRzXG4gKiBAcGFyYW0gIHtJbnN0YW5jZX0gZm9ybUJ1aWxkZXJcbiAqIEByZXR1cm4ge09iamVjdH0gaGVscGVyIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBoZWxwZXJzKG9wdHMsIGZvcm1CdWlsZGVyKSB7XG4gIGNvbnN0IG1pMThuID0gZm9ybUJ1aWxkZXIubWkxOG47XG4gIGNvbnN0IGkxOG4gPSBtaTE4bi5jdXJyZW50O1xuICBjb25zdCB1dGlscyA9IGZvcm1CdWlsZGVyLnV0aWxzO1xuICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuXG4gIGxldCBfaGVscGVycyA9IHtcbiAgICBkb0NhbmNlbDogZmFsc2VcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBjb252ZXJ0cyBtZXNzeSBgY2wjc3NOYW1lc2AgaW50byB2YWxpZCBgY2xhc3MtbmFtZXNgXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gaHlwaGVuYXRlZCBzdHJpbmdcbiAgICovXG4gIF9oZWxwZXJzLm1ha2VDbGFzc05hbWUgPSAoc3RyKSA9PiB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1teXFx3XFxzXFwtXS9naSwgJycpO1xuICAgIHJldHVybiB1dGlscy5oeXBoZW5DYXNlKHN0cik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIG1vYmlsZSBjbGFzc1xuICAgKiBAdG9kbyBmaW5kIGNzcyBvbmx5IHNvbHV0aW9uXG4gICAqIEByZXR1cm4ge1N0cmluZ30gTW9iaWxlIGNsYXNzIGFkZGVkIHRvIGZvcm1CdWlsZGVyXG4gICAqL1xuICBfaGVscGVycy5tb2JpbGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBtb2JpbGVDbGFzcyA9ICcnO1xuICAgIChmdW5jdGlvbihhKSB7XG4gICAgICBpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpIHtcbiAgICAgICAgbW9iaWxlQ2xhc3MgPSAnIGZiLW1vYmlsZSc7XG4gICAgICB9XG4gICAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XG4gICAgcmV0dXJuIG1vYmlsZUNsYXNzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igd2hlbiBhIGRyYWcgYmVnaW5zXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKi9cbiAgX2hlbHBlcnMuc3RhcnRNb3ZpbmcgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICB1aS5pdGVtLnNob3coKS5hZGRDbGFzcygnbW92aW5nJyk7XG4gICAgX2hlbHBlcnMuc3RhcnRJbmRleCA9ICQoJ2xpJywgdGhpcykuaW5kZXgodWkuaXRlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBlbmRzXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKi9cbiAgX2hlbHBlcnMuc3RvcE1vdmluZyA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIHVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ21vdmluZycpO1xuICAgIGlmIChfaGVscGVycy5kb0NhbmNlbCkge1xuICAgICAgJCh1aS5zZW5kZXIpLnNvcnRhYmxlKCdjYW5jZWwnKTtcbiAgICAgICQodGhpcykuc29ydGFibGUoJ2NhbmNlbCcpO1xuICAgIH1cbiAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgX2hlbHBlcnMuZG9DYW5jZWwgPSBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogalF1ZXJ5IFVJIHNvcnRhYmxlIGJlZm9yZVN0b3AgY2FsbGJhY2sgdXNlZCBmb3IgYm90aCBsaXN0cy5cbiAgICogTG9naWMgZm9yIGNhbmNlbGluZyB0aGUgc29ydCBvciBkcm9wLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIF9oZWxwZXJzLmJlZm9yZVN0b3AgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUJ1aWxkZXIuZm9ybUlEKTtcbiAgICBsZXQgbGFzdEluZGV4ID0gZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIGxldCBjYW5jZWxBcnJheSA9IFtdO1xuICAgIF9oZWxwZXJzLnN0b3BJbmRleCA9IHVpLnBsYWNlaG9sZGVyLmluZGV4KCkgLSAxO1xuXG4gICAgaWYgKCFvcHRzLnNvcnRhYmxlQ29udHJvbHMgJiYgdWkuaXRlbS5wYXJlbnQoKS5oYXNDbGFzcygnZnJtYi1jb250cm9sJykpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucHJlcGVuZCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaChfaGVscGVycy5zdG9wSW5kZXggPT09IDApO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCgoX2hlbHBlcnMuc3RvcEluZGV4ICsgMSkgPT09IGxhc3RJbmRleCk7XG4gICAgfVxuXG4gICAgX2hlbHBlcnMuZG9DYW5jZWwgPSBjYW5jZWxBcnJheS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3RyaW5ncyBzYWZlIHRvIGJlIHVzZWQgYXMgY2xhc3Nlc1xuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciBzdHJpbmcgdG8gYmUgY29udmVydGVkXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgIGNvbnZlcnRlciBzdHJpbmdcbiAgICovXG4gIF9oZWxwZXJzLnNhZmVuYW1lID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9bXmEtekEtWjAtOVxcLV0vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0cmlwcyBub24tbnVtYmVycyBmcm9tIGEgbnVtYmVyIG9ubHkgaW5wdXRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBzdHIgc3RyaW5nIHdpdGggcG9zc2libGUgbnVtYmVyXG4gICAqIEByZXR1cm4ge3N0cmluZ30gICAgIHN0cmluZyB3aXRob3V0IG51bWJlcnNcbiAgICovXG4gIF9oZWxwZXJzLmZvcmNlTnVtYmVyID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBoaWRlIGFuZCBzaG93IG1vdXNlIHRyYWNraW5nIHRvb2x0aXBzLCBvbmx5IHVzZWQgZm9yIGRpc2FibGVkXG4gICAqIGZpZWxkcyBpbiB0aGUgZWRpdG9yLlxuICAgKlxuICAgKiBAdG9kbyAgIHJlbW92ZSBvciByZWZhY3RvciB0byBtYWtlIGJldHRlciB1c2VcbiAgICogQHBhcmFtICB7T2JqZWN0fSB0dCBqUXVlcnkgb3B0aW9uIHdpdGggbmV4dGVkIHRvb2x0aXBcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIF9oZWxwZXJzLmluaXRUb29sdGlwID0gZnVuY3Rpb24odHQpIHtcbiAgICBjb25zdCB0b29sdGlwID0gdHQuZmluZCgnLnRvb2x0aXAnKTtcbiAgICB0dC5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRvb2x0aXAub3V0ZXJXaWR0aCgpID4gMjAwKSB7XG4gICAgICAgIHRvb2x0aXAuYWRkQ2xhc3MoJ21heC13aWR0aCcpO1xuICAgICAgfVxuICAgICAgdG9vbHRpcC5jc3MoJ2xlZnQnLCB0dC53aWR0aCgpICsgMTQpO1xuICAgICAgdG9vbHRpcC5zdG9wKHRydWUsIHRydWUpLmZhZGVJbignZmFzdCcpO1xuICAgIH0pLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XG4gICAgICB0dC5maW5kKCcudG9vbHRpcCcpLnN0b3AodHJ1ZSwgdHJ1ZSkuZmFkZU91dCgnZmFzdCcpO1xuICAgIH0pO1xuICAgIHRvb2x0aXAuaGlkZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBnZXQgZWxlbWVudCB0eXBlIGFuZCBzdWJ0eXBlXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gJGZpZWxkXG4gICAqIEByZXR1cm4ge09iamVjdH0ge3R5cGU6ICdmaWVsZFR5cGUnLCBzdWJ0eXBlOiAnZmllbGRTdWJUeXBlJ31cbiAgICovXG4gIF9oZWxwZXJzLmdldFR5cGVzID0gZnVuY3Rpb24oJGZpZWxkKSB7XG4gICAgbGV0IHR5cGVzID0ge1xuICAgICAgICB0eXBlOiAkZmllbGQuYXR0cigndHlwZScpXG4gICAgICB9O1xuICAgIGxldCBzdWJ0eXBlID0gJCgnLmZsZC1zdWJ0eXBlJywgJGZpZWxkKS52YWwoKTtcblxuICAgIGlmIChzdWJ0eXBlICE9PSB0eXBlcy50eXBlKSB7XG4gICAgICB0eXBlcy5zdWJ0eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBvcHRpb24gZGF0YSBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkIGpRdWVyeSBmaWVsZCBvYmplY3RcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBBcnJheSBvZiBvcHRpb24gdmFsdWVzXG4gICAqL1xuICBfaGVscGVycy5maWVsZE9wdGlvbkRhdGEgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0ICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSAkKCcub3B0aW9uLXNlbGVjdGVkJywgJG9wdGlvbikuaXMoJzpjaGVja2VkJyk7XG4gICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgbGFiZWw6ICQoJy5vcHRpb24tbGFiZWwnLCAkb3B0aW9uKS52YWwoKSxcbiAgICAgICAgICB2YWx1ZTogJCgnLm9wdGlvbi12YWx1ZScsICRvcHRpb24pLnZhbCgpXG4gICAgICAgIH07XG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBhdHRycy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnB1c2goYXR0cnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFhNTCBzYXZlXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybSBzb3J0YWJsZUZpZWxkcyBub2RlXG4gICAqIEByZXR1cm4ge1N0cmluZ30geG1sIGluIHN0cmluZ1xuICAgKi9cbiAgX2hlbHBlcnMueG1sU2F2ZSA9IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICBsZXQgZm9ybURhdGEgPSBfaGVscGVycy5wcmVwRGF0YShmb3JtKTtcbiAgICBsZXQgeG1sID0gWyc8Zm9ybS10ZW1wbGF0ZT5cXG5cXHQ8ZmllbGRzPiddO1xuXG4gICAgdXRpbHMuZm9yRWFjaChmb3JtRGF0YSwgZnVuY3Rpb24oZmllbGRJbmRleCwgZmllbGQpIHtcbiAgICAgIGxldCBmaWVsZENvbnRlbnQgPSBudWxsO1xuICAgICAgY29uc3Qgb3B0aW9uRmllbGRzID0gLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXB8YXV0b2NvbXBsZXRlKS87XG5cbiAgICAgIC8vIEhhbmRsZSBvcHRpb25zXG4gICAgICBpZiAoZmllbGQudHlwZS5tYXRjaChvcHRpb25GaWVsZHMpKSB7XG4gICAgICAgIGxldCBvcHRpb25EYXRhID0gZmllbGQudmFsdWVzO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBvcHRpb24gPSBtKCdvcHRpb24nLCBvcHRpb25EYXRhW2ldLmxhYmVsLCBvcHRpb25EYXRhW2ldKS5vdXRlckhUTUw7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKCdcXG5cXHRcXHRcXHQnICsgb3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdCcpO1xuXG4gICAgICAgIGZpZWxkQ29udGVudCA9IG9wdGlvbnMuam9pbignJyk7XG4gICAgICAgIGRlbGV0ZSBmaWVsZC52YWx1ZXM7XG4gICAgICB9XG5cbiAgICAgIGxldCB4bWxGaWVsZCA9IG0oJ2ZpZWxkJywgZmllbGRDb250ZW50LCBmaWVsZCk7XG4gICAgICB4bWwucHVzaCgnXFxuXFx0XFx0JyArIHhtbEZpZWxkLm91dGVySFRNTCk7XG4gICAgfSk7XG5cbiAgICB4bWwucHVzaCgnXFxuXFx0PC9maWVsZHM+XFxuPC9mb3JtLXRlbXBsYXRlPicpO1xuXG4gICAgcmV0dXJuIHhtbC5qb2luKCcnKTtcbiAgfTtcblxuICBfaGVscGVycy5wcmVwRGF0YSA9IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcblxuICAgIGlmIChmb3JtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBidWlsZCBkYXRhIG9iamVjdFxuICAgICAgdXRpbHMuZm9yRWFjaChmb3JtLmNoaWxkTm9kZXMsIGFzeW5jIGZ1bmN0aW9uKGluZGV4LCBmaWVsZCkge1xuICAgICAgICBsZXQgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgaWYgKCEoJGZpZWxkLmhhc0NsYXNzKCdkaXNhYmxlZC1maWVsZCcpKSkge1xuICAgICAgICAgIGxldCBmaWVsZERhdGEgPSBfaGVscGVycy5nZXRUeXBlcygkZmllbGQpO1xuICAgICAgICAgIGxldCByb2xlVmFscyA9ICQoJy5yb2xlcy1maWVsZDpjaGVja2VkJywgZmllbGQpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9KS5nZXQoKTtcblxuICAgICAgICAgIF9oZWxwZXJzLnNldEF0dHJWYWxzKGZpZWxkLCBmaWVsZERhdGEpO1xuXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YS5zdWJ0eXBlKSB7XG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLnN1YnR5cGUgPT09ICdxdWlsbCcpIHtcbiAgICAgICAgICAgICAgbGV0IGlkID0gYCR7ZmllbGREYXRhLm5hbWV9LXByZXZpZXdgO1xuICAgICAgICAgICAgICBpZiAod2luZG93LmZiRWRpdG9ycy5xdWlsbFtpZF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSB3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2lkXS5pbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gaW5zdGFuY2UuZ2V0Q29udGVudHMoKTtcbiAgICAgICAgICAgICAgICBmaWVsZERhdGEudmFsdWUgPSB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoZGF0YS5vcHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYoZmllbGREYXRhLnN1YnR5cGUgPT09ICd0aW55bWNlJyAmJiB3aW5kb3cudGlueW1jZSkge1xuICAgICAgICAgICAgICBsZXQgaWQgPSBgJHtmaWVsZERhdGEubmFtZX0tcHJldmlld2A7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cudGlueW1jZS5lZGl0b3JzW2lkXSkge1xuICAgICAgICAgICAgICAgIGxldCBlZGl0b3IgPSB3aW5kb3cudGlueW1jZS5lZGl0b3JzW2lkXTtcbiAgICAgICAgICAgICAgICBmaWVsZERhdGEudmFsdWUgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJvbGVWYWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgZmllbGREYXRhLnJvbGUgPSByb2xlVmFscy5qb2luKCcsJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGREYXRhLmNsYXNzTmFtZSA9IGZpZWxkRGF0YS5jbGFzc05hbWUgfHwgZmllbGREYXRhLmNsYXNzO1xuXG4gICAgICAgICAgbGV0IG1hdGNoID0gLyg/Ol58XFxzKWJ0bi0oLio/KSg/Olxcc3wkKS9nLmV4ZWMoZmllbGREYXRhLmNsYXNzTmFtZSk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEuc3R5bGUgPSBtYXRjaFsxXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZERhdGEgPSB1dGlscy50cmltT2JqKGZpZWxkRGF0YSk7XG5cbiAgICAgICAgICBsZXQgbXVsdGlwbGVGaWVsZCA9IGZpZWxkRGF0YS50eXBlLm1hdGNoKGQub3B0aW9uRmllbGRzUmVnRXgpO1xuXG4gICAgICAgICAgaWYgKG11bHRpcGxlRmllbGQpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBfaGVscGVycy5maWVsZE9wdGlvbkRhdGEoJGZpZWxkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICBfaGVscGVycy5qc29uU2F2ZSA9IGZvcm0gPT5cbiAgICB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoX2hlbHBlcnMucHJlcERhdGEoZm9ybSksIG51bGwsICdcXHQnKTtcblxuICBfaGVscGVycy5nZXREYXRhID0gZm9ybURhdGEgPT4ge1xuICAgIGxldCBkYXRhID0gZm9ybURhdGEgfHwgb3B0cy5mb3JtRGF0YTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzZXREYXRhID0ge1xuICAgICAgeG1sOiBmb3JtRGF0YSA9PiB1dGlscy5wYXJzZVhNTChmb3JtRGF0YSksXG4gICAgICBqc29uOiBmb3JtRGF0YSA9PiB3aW5kb3cuSlNPTi5wYXJzZShmb3JtRGF0YSlcbiAgICB9O1xuXG4gICAgZm9ybUJ1aWxkZXIuZm9ybURhdGEgPSBzZXREYXRhW29wdHMuZGF0YVR5cGVdKGRhdGEpIHx8IFtdO1xuXG4gICAgcmV0dXJuIGZvcm1CdWlsZGVyLmZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTYXZlcyBhbmQgcmV0dXJucyBmb3JtRGF0YVxuICAgKiBAcmV0dXJuIHtYTUx8SlNPTn0gZm9ybURhdGFcbiAgICovXG4gIF9oZWxwZXJzLnNhdmUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUJ1aWxkZXIuZm9ybUlEKTtcblxuICAgIGxldCBkb1NhdmUgPSB7XG4gICAgICB4bWw6IF9oZWxwZXJzLnhtbFNhdmUsXG4gICAgICBqc29uOiBfaGVscGVycy5qc29uU2F2ZVxuICAgIH07XG5cbiAgICAvLyBzYXZlIGFjdGlvbiBmb3IgY3VycmVudCBgZGF0YVR5cGVgXG4gICAgZm9ybUJ1aWxkZXIuZm9ybURhdGEgPSBkb1NhdmVbb3B0cy5kYXRhVHlwZV0oZm9ybSk7XG5cbiAgICAvLyB0cmlnZ2VyIGZvcm1TYXZlZCBldmVudFxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZvcm1TYXZlZCk7XG4gICAgcmV0dXJuIGZvcm1CdWlsZGVyLmZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBpbmNyZW1lbnRzIHRoZSBmaWVsZCBpZHMgd2l0aCBzdXBwb3J0IGZvciBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaWQgZmllbGQgSURcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICBpbmNyZW1lbnRlZCBmaWVsZCBJRFxuICAgKi9cbiAgX2hlbHBlcnMuaW5jcmVtZW50SWQgPSBmdW5jdGlvbihpZCkge1xuICAgIGxldCBzcGxpdCA9IGlkLmxhc3RJbmRleE9mKCctJyk7XG4gICAgbGV0IG5ld0ZpZWxkTnVtYmVyID0gcGFyc2VJbnQoaWQuc3Vic3RyaW5nKHNwbGl0ICsgMSkpICsgMTtcbiAgICBsZXQgYmFzZVN0cmluZyA9IGlkLnN1YnN0cmluZygwLCBzcGxpdCk7XG5cbiAgICByZXR1cm4gYCR7YmFzZVN0cmluZ30tJHtuZXdGaWVsZE51bWJlcn1gO1xuICB9O1xuXG5cbiAgX2hlbHBlcnMuc2V0QXR0clZhbHMgPSAoZmllbGQsIGZpZWxkRGF0YSkgPT4ge1xuICAgIGxldCBhdHRycyA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJmbGQtXCJdJyk7XG4gICAgYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIGxldCB2YWx1ZTtcbiAgICAgIGxldCBuYW1lID0gdXRpbHMuY2FtZWxDYXNlKGF0dHIuZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgICAgaWYgKGF0dHIuYXR0cmlidXRlc1snY29udGVudGVkaXRhYmxlJ10pIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyLmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSBpZiAoYXR0ci50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHZhbHVlID0gYXR0ci5jaGVja2VkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgfVxuICAgICAgZmllbGREYXRhW25hbWVdID0gdmFsdWU7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbGxlY3QgZmllbGQgYXR0cmlidXRlIHZhbHVlcyBhbmQgY2FsbCBmaWVsZFByZXZpZXcgdG8gZ2VuZXJhdGUgcHJldmlld1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkIERPTSBlbGVtZW50XG4gICAqL1xuICBfaGVscGVycy51cGRhdGVQcmV2aWV3ID0gJGZpZWxkID0+IHtcbiAgICBjb25zdCBmaWVsZENsYXNzID0gJGZpZWxkLmF0dHIoJ2NsYXNzJyk7XG4gICAgbGV0IGZpZWxkID0gJGZpZWxkWzBdO1xuICAgIGlmIChmaWVsZENsYXNzLmluZGV4T2YoJ3VpLXNvcnRhYmxlLWhhbmRsZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaWVsZFR5cGUgPSAkZmllbGQuYXR0cigndHlwZScpO1xuICAgIGxldCAkcHJldkhvbGRlciA9ICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkKTtcbiAgICBsZXQgcHJldmlld0RhdGEgPSB7XG4gICAgICB0eXBlOiBmaWVsZFR5cGVcbiAgICB9O1xuICAgIGxldCBwcmV2aWV3O1xuXG4gICAgX2hlbHBlcnMuc2V0QXR0clZhbHMoZmllbGQsIHByZXZpZXdEYXRhKTtcblxuICAgIGxldCBzdHlsZSA9ICQoJy5idG4tc3R5bGUnLCBmaWVsZCkudmFsKCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goZC5vcHRpb25GaWVsZHNSZWdFeCkpIHtcbiAgICAgIHByZXZpZXdEYXRhLnZhbHVlcyA9IFtdO1xuICAgICAgcHJldmlld0RhdGEubXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgZmllbGQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKGksICRvcHRpb24pIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHt9O1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAkKCcub3B0aW9uLXNlbGVjdGVkJywgJG9wdGlvbikuaXMoJzpjaGVja2VkJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9ICQoJy5vcHRpb24tdmFsdWUnLCAkb3B0aW9uKS52YWwoKTtcbiAgICAgICAgb3B0aW9uLmxhYmVsID0gJCgnLm9wdGlvbi1sYWJlbCcsICRvcHRpb24pLnZhbCgpO1xuICAgICAgICBwcmV2aWV3RGF0YS52YWx1ZXMucHVzaChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJldmlld0RhdGEgPSB1dGlscy50cmltT2JqKHByZXZpZXdEYXRhKTtcblxuICAgIHByZXZpZXdEYXRhLmNsYXNzTmFtZSA9IF9oZWxwZXJzLmNsYXNzTmFtZXMoZmllbGQsIHByZXZpZXdEYXRhKTtcbiAgICAkKCcuZmxkLWNsYXNzTmFtZScsIGZpZWxkKS52YWwocHJldmlld0RhdGEuY2xhc3NOYW1lKTtcblxuICAgICRmaWVsZC5kYXRhKCdmaWVsZERhdGEnLCBwcmV2aWV3RGF0YSk7XG4gICAgcHJldmlldyA9IHV0aWxzLmdldFRlbXBsYXRlKHByZXZpZXdEYXRhLCB0cnVlKTtcblxuICAgIHV0aWxzLmVtcHR5KCRwcmV2SG9sZGVyWzBdKTtcbiAgICAkcHJldkhvbGRlclswXS5hcHBlbmRDaGlsZChwcmV2aWV3KTtcbiAgICBwcmV2aWV3LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkUmVuZGVyZWQpO1xuXG4gIH07XG5cbiAgX2hlbHBlcnMuZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0ID0gMjUwLCBpbW1lZGlhdGUgPSBmYWxzZSkge1xuICAgIGxldCB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgbGV0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBsZXQgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogRGlzcGxheSBhIGN1c3RvbSB0b29sdGlwIGZvciBkaXNhYmxlZCBmaWVsZHMuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGRcbiAgICovXG4gIF9oZWxwZXJzLmRpc2FibGVkVFQgPSB7XG4gICAgbW92ZTogKGUsIGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkT2Zmc2V0ID0gZWxlbS5maWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSBmaWVsZE9mZnNldC5sZWZ0IC0gMjE7XG4gICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gZmllbGRPZmZzZXQudG9wIC0gZWxlbS50dC5vZmZzZXRIZWlnaHQgLSAxMjtcbiAgICAgIGVsZW0udHQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xuICAgIH0sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgZm9ybUJ1aWxkZXIuc3RhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmRpc2FibGVkLWZpZWxkJykuZm9yRWFjaChcbiAgICAgICAgZmllbGQgPT4ge1xuICAgICAgICAgIGxldCB0aXRsZSA9IG9wdHMubWVzc2FnZXMuZmllbGROb25FZGl0YWJsZTtcblxuICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgbGV0IHR0ID0gdXRpbHMubWFya3VwKCdwJywgdGl0bGUsIHtjbGFzc05hbWU6ICdmcm1iLXR0J30pO1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodHQpO1xuICAgICAgICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICAgICAgICAgIF9oZWxwZXJzLmRpc2FibGVkVFQubW92ZShlLCB7dHQsIGZpZWxkfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH07XG5cbiAgX2hlbHBlcnMuY2xhc3NOYW1lcyA9IChmaWVsZCwgcHJldmlld0RhdGEpID0+IHtcbiAgICBsZXQgaTtcbiAgICBsZXQgdHlwZSA9IHByZXZpZXdEYXRhLnR5cGU7XG4gICAgbGV0IHN0eWxlID0gcHJldmlld0RhdGEuc3R5bGU7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJy5mbGQtY2xhc3NOYW1lJykudmFsdWU7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBsZXQgdHlwZXMgPSB7XG4gICAgICBidXR0b246ICdidG4nLFxuICAgICAgc3VibWl0OiAnYnRuJ1xuICAgIH07XG5cbiAgICBsZXQgcHJpbWFyeVR5cGUgPSB0eXBlc1t0eXBlXTtcblxuICAgIGlmIChwcmltYXJ5VHlwZSkge1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChgKD86XnxcXHMpJHtwcmltYXJ5VHlwZX0tKC4qPykoPzpcXHN8JCkrYCwgJ2cnKTtcbiAgICAgICAgICBsZXQgbWF0Y2ggPSBjbGFzc2VzW2ldLm1hdGNoKHJlKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbGFzc2VzLnB1c2gocHJpbWFyeVR5cGUgKyAnLScgKyBzdHlsZSk7XG4gICAgICB9XG4gICAgICBjbGFzc2VzLnB1c2gocHJpbWFyeVR5cGUpO1xuICAgIH1cblxuICAgIC8vIHJldmVyc2UgdGhlIGFycmF5IHRvIHB1dCBjdXN0b20gY2xhc3NlcyBhdCBlbmQsXG4gICAgLy8gcmVtb3ZlIGFueSBkdXBsaWNhdGVzLCBjb252ZXJ0IHRvIHN0cmluZywgcmVtb3ZlIHdoaXRlc3BhY2VcbiAgICByZXR1cm4gdXRpbHMudW5pcXVlKGNsYXNzZXMpLmpvaW4oJyAnKS50cmltKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbmQgb3BlbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvdmVybGF5IEV4aXN0aW5nIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGlhbG9nICBFeGlzdGluZyBkaWFsb2dcbiAgICovXG4gIF9oZWxwZXJzLmNsb3NlQ29uZmlybSA9IGZ1bmN0aW9uKG92ZXJsYXksIGRpYWxvZykge1xuICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tYnVpbGRlci1vdmVybGF5JylbMF07XG4gICAgfVxuICAgIGlmICghZGlhbG9nKSB7XG4gICAgICBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItZGlhbG9nJylbMF07XG4gICAgfVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLm1vZGFsQ2xvc2VkKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF5b3V0IGRhdGEgYmFzZWQgb24gY29udHJvbFBvc2l0aW9uIG9wdGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbnRyb2xQb3NpdGlvbiAnbGVmdCcgb3IgJ3JpZ2h0J1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IGxheW91dCBvYmplY3RcbiAgICovXG4gIF9oZWxwZXJzLmVkaXRvckxheW91dCA9IGZ1bmN0aW9uKGNvbnRyb2xQb3NpdGlvbikge1xuICAgIGxldCBsYXlvdXRNYXAgPSB7XG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1yaWdodCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1sZWZ0J1xuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1sZWZ0JyxcbiAgICAgICAgY29udHJvbHM6ICdwdWxsLXJpZ2h0J1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gPyBsYXlvdXRNYXBbY29udHJvbFBvc2l0aW9uXSA6ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIG92ZXJsYXkgdG8gdGhlIHBhZ2UuIFVzZWQgZm9yIG1vZGFscy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gT2JqZWN0XG4gICAqL1xuICBfaGVscGVycy5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBvdmVybGF5ID0gdXRpbHMubWFya3VwKCdkaXYnLCBudWxsLCB7XG4gICAgICBjbGFzc05hbWU6ICdmb3JtLWJ1aWxkZXItb3ZlcmxheSdcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXG4gICAgb3ZlcmxheS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHJldHVybiBvdmVybGF5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDdXN0b20gY29uZmlybWF0aW9uIGRpYWxvZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBtZXNzYWdlICAgQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gIHtGdW5jfSAgeWVzQWN0aW9uIGNhbGxiYWNrIHRvIGZpcmUgaWYgdGhleSBjb25maXJtXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGNvb3JkcyAgICBsb2NhdGlvbiB0byBwdXQgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWUgQ3VzdG9tIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBkaWFsb2dcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIFJlZmVyZW5jZSB0byB0aGUgbW9kYWxcbiAgICovXG4gIF9oZWxwZXJzLmNvbmZpcm0gPSAobWVzc2FnZSwgeWVzQWN0aW9uLCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpID0+IHtcbiAgICBsZXQgb3ZlcmxheSA9IF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG4gICAgbGV0IHllcyA9IG0oJ2J1dHRvbicsIGkxOG4ueWVzLCB7XG4gICAgICBjbGFzc05hbWU6ICd5ZXMgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSdcbiAgICB9KTtcbiAgICBsZXQgbm8gPSBtKCdidXR0b24nLCBpMThuLm5vLCB7XG4gICAgICBjbGFzc05hbWU6ICdubyBidG4gYnRuLWRhbmdlciBidG4tc20nXG4gICAgfSk7XG5cbiAgICBuby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHllcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB5ZXNBY3Rpb24oKTtcbiAgICAgIF9oZWxwZXJzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgbGV0IGJ0bldyYXAgPSBtKCdkaXYnLCBbbm8sIHllc10sIHtjbGFzc05hbWU6ICdidXR0b24td3JhcCd9KTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gbSgnZGl2JywgW21lc3NhZ2UsIGJ0bldyYXBdLCB7Y2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgLyAyLFxuICAgICAgICBwYWdlWTogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIC8gMlxuICAgICAgfTtcbiAgICAgIG1pbmlNb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlNb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XG4gICAgfVxuXG4gICAgbWluaU1vZGFsLnN0eWxlLmxlZnQgPSBjb29yZHMucGFnZVggKyAncHgnO1xuICAgIG1pbmlNb2RhbC5zdHlsZS50b3AgPSBjb29yZHMucGFnZVkgKyAncHgnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtaW5pTW9kYWwpO1xuXG4gICAgeWVzLmZvY3VzKCk7XG4gICAgcmV0dXJuIG1pbmlNb2RhbDtcbiAgfTtcblxuICAvKipcbiAgICogUG9wdXAgZGlhbG9nIHRoZSBkb2VzIG5vdCByZXF1aXJlIGNvbmZpcm1hdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfERPTXxBcnJheX0gIGNvbnRlbnRcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gY29vcmRzICAgIGZhbHNlIGlmIG5vIGNvb3JkcyBhcmUgcHJvdmlkZWQuIFdpdGhvdXQgY29vcmRpbmF0ZXNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBwb3B1cCB3aWxsIGFwcGVhciBjZW50ZXIgc2NyZWVuLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWUgY2xhc3NuYW1lIHRvIGJlIGFkZGVkIHRvIHRoZSBkaWFsb2dcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIGRvbVxuICAgKi9cbiAgX2hlbHBlcnMuZGlhbG9nID0gZnVuY3Rpb24oY29udGVudCwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSB7XG4gICAgbGV0IGNsaWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGxldCBjbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG5cbiAgICBjbGFzc05hbWUgPSAnZm9ybS1idWlsZGVyLWRpYWxvZyAnICsgY2xhc3NOYW1lO1xuXG4gICAgbGV0IG1pbmlNb2RhbCA9IHV0aWxzLm1hcmt1cCgnZGl2JywgY29udGVudCwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChjbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLm1vZGFsT3BlbmVkKTtcblxuICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignZGF0YS1kaWFsb2cnKSAhPT0gLTEpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLnZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb25maXJtIGFsbCBmaWVsZHMgd2lsbCBiZSByZW1vdmVkIHRoZW4gcmVtb3ZlIHRoZW1cbiAgICogQHBhcmFtICB7T2JqZWN0fSBlIGNsaWNrIGV2ZW50IG9iamVjdFxuICAgKi9cbiAgX2hlbHBlcnMuY29uZmlybVJlbW92ZUFsbCA9IGUgPT4ge1xuICAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgIGxldCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgIH07XG5cbiAgICBpZiAoZmllbGRzLmxlbmd0aCkge1xuICAgICAgX2hlbHBlcnMuY29uZmlybShpMThuLmNsZWFyQWxsTWVzc2FnZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgICBvcHRzLm5vdGlmeS5zdWNjZXNzKGkxOG4uYWxsRmllbGRzUmVtb3ZlZCk7XG4gICAgICAgIG9wdHMub25DbGVhckFsbCgpO1xuICAgICAgfSwgY29vcmRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2hlbHBlcnMuZGlhbG9nKGkxOG4ubm9GaWVsZHNUb0NsZWFyLCBjb29yZHMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgZmllbGRzIGZyb20gdGhlIGZvcm1cbiAgICogQHBhcmFtIHtCb29sZWFufSBhbmltYXRlIHdoZXRoZXIgdG8gYW5pbWF0ZSBvciBub3RcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyA9IGZ1bmN0aW9uKGFuaW1hdGUgPSB0cnVlKSB7XG4gICAgbGV0IGZvcm0gPSBmb3JtQnVpbGRlci5zdGFnZTtcbiAgICBsZXQgZmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgbGV0IG1hcmtFbXB0eUFycmF5ID0gW107XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCkge1xuICAgICAgbWFya0VtcHR5QXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIW1hcmtFbXB0eUFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgZm9ybS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICBmb3JtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb250ZW50ID0gaTE4bi5nZXRTdGFydGVkO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlKSB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3JlbW92aW5nJyk7XG4gICAgICBsZXQgb3V0ZXJIZWlnaHQgPSAwO1xuICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4gb3V0ZXJIZWlnaHQgKz0gZmllbGQub2Zmc2V0SGVpZ2h0ICsgMyk7XG4gICAgICBmaWVsZHNbMF0uc3R5bGUubWFyZ2luVG9wID0gYCR7LW91dGVySGVpZ2h0fXB4YDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkLmVtcHR5KGZvcm0pLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92aW5nJyk7XG4gICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIH0sIDQwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQuZW1wdHkoZm9ybSk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHJlLW9yZGVycyB0aGUgZWxlbWVudHMgdGhlaXIgb3JkZXIgc2hvdWxkIGJlIHNhdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGNiVUwgb3VyIGxpc3Qgb2YgZWxlbWVudHNcbiAgICovXG4gIF9oZWxwZXJzLnNldEZpZWxkT3JkZXIgPSBmdW5jdGlvbigkY2JVTCkge1xuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmaWVsZE9yZGVyID0ge307XG4gICAgJGNiVUwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBmaWVsZE9yZGVyW2luZGV4XSA9ICQoZWxlbWVudCkuZGF0YSgnYXR0cnMnKS50eXBlO1xuICAgIH0pO1xuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaWVsZE9yZGVyJywgd2luZG93LkpTT04uc3RyaW5naWZ5KGZpZWxkT3JkZXIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlb3JkZXIgdGhlIGNvbnRyb2xzIGlmIHRoZSB1c2VyIGhhcyBwcmV2aW91c2x5IG9yZGVyZWQgdGhlbS5cbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGZybWJGaWVsZHNcbiAgICogQHJldHVybiB7QXJyYXl9IG9yZGVyZWQgZmllbGRzXG4gICAqL1xuICBfaGVscGVycy5vcmRlckZpZWxkcyA9IGZ1bmN0aW9uKGZybWJGaWVsZHMpIHtcbiAgICBsZXQgZmllbGRPcmRlciA9IGZhbHNlO1xuICAgIGxldCBuZXdPcmRlckZpZWxkcyA9IFtdO1xuXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgICBmaWVsZE9yZGVyID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZE9yZGVyKSB7XG4gICAgICBsZXQgY29udHJvbE9yZGVyID0gb3B0cy5jb250cm9sT3JkZXIuY29uY2F0KGZybWJGaWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgIGZpZWxkLmF0dHJzLnR5cGUpKTtcbiAgICAgIGZpZWxkT3JkZXIgPSB1dGlscy51bmlxdWUoY29udHJvbE9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5KU09OLnBhcnNlKGZpZWxkT3JkZXIpO1xuICAgICAgZmllbGRPcmRlciA9IE9iamVjdC5rZXlzKGZpZWxkT3JkZXIpLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZE9yZGVyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmaWVsZE9yZGVyLmZvckVhY2goKGZpZWxkVHlwZSkgPT4ge1xuICAgICAgbGV0IGZpZWxkID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmF0dHJzLnR5cGUgPT09IGZpZWxkVHlwZTtcbiAgICAgIH0pWzBdO1xuICAgICAgbmV3T3JkZXJGaWVsZHMucHVzaChmaWVsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3T3JkZXJGaWVsZHMuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZSBmaWVsZHMgYmVpbmcgZWRpdGluZ1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUFsbEVkaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAkKCcudG9nZ2xlLWZvcm0nLCBmb3JtQnVpbGRlci5zdGFnZSk7XG4gICAgY29uc3QgZWRpdFBhbmVscyA9ICQoJy5mcm0taG9sZGVyJywgZmllbGRzKTtcblxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICBmaWVsZHMucmVtb3ZlQ2xhc3MoJ2VkaXRpbmcnKTtcbiAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZHMpLnNob3coKTtcbiAgICBlZGl0UGFuZWxzLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWRpdCBtb2RlIGZvciB0aGUgZ2l2ZW4gZmllbGRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZElkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGFuaW1hdGVcbiAgICovXG4gIF9oZWxwZXJzLnRvZ2dsZUVkaXQgPSBmdW5jdGlvbihmaWVsZElkLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gJCgnLnRvZ2dsZS1mb3JtJywgZmllbGQpO1xuICAgIGNvbnN0IGVkaXRQYW5lbCA9ICQoJy5mcm0taG9sZGVyJywgZmllbGQpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcbiAgICB0b2dnbGVCdG4udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnNsaWRlVG9nZ2xlKDI1MCk7XG4gICAgICBlZGl0UGFuZWwuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnRvZ2dsZSgpO1xuICAgICAgZWRpdFBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIF9oZWxwZXJzLnN0aWNreUNvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0ICRjYldyYXAgPSAkKGZvcm1CdWlsZGVyLmNvbnRyb2xzKS5wYXJlbnQoKTtcbiAgICBjb25zdCAkc3RhZ2VXcmFwID0gJChmb3JtQnVpbGRlci5zdGFnZSkucGFyZW50KCk7XG4gICAgY29uc3QgY2JXaWR0aCA9ICRjYldyYXAud2lkdGgoKTtcbiAgICBjb25zdCBjYlBvc2l0aW9uID0gZm9ybUJ1aWxkZXIuY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQoZXZ0LnRhcmdldCkuc2Nyb2xsVG9wKCk7XG4gICAgICBjb25zdCBvZmZzZXREZWZhdWx0cyA9IHtcbiAgICAgICAgdG9wOiA1LFxuICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgbGVmdDogY2JQb3NpdGlvbi5sZWZ0XG4gICAgICB9O1xuXG4gICAgICBsZXQgb2Zmc2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Zmc2V0RGVmYXVsdHMsIG9wdHMuc3RpY2t5Q29udHJvbHMub2Zmc2V0KTtcblxuICAgICAgaWYgKHNjcm9sbFRvcCA+ICRzdGFnZVdyYXAub2Zmc2V0KCkudG9wKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiBjYldpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2JTdHlsZSA9IE9iamVjdC5hc3NpZ24oc3R5bGUsIG9mZnNldCk7XG5cbiAgICAgICAgbGV0IGNiT2Zmc2V0ID0gJGNiV3JhcC5vZmZzZXQoKTtcbiAgICAgICAgbGV0IHN0YWdlT2Zmc2V0ID0gJHN0YWdlV3JhcC5vZmZzZXQoKTtcbiAgICAgICAgbGV0IGNiQm90dG9tID0gY2JPZmZzZXQudG9wICsgJGNiV3JhcC5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHN0YWdlQm90dG9tID0gc3RhZ2VPZmZzZXQudG9wICsgJHN0YWdlV3JhcC5oZWlnaHQoKTtcblxuICAgICAgICBpZiAoY2JCb3R0b20gPiBzdGFnZUJvdHRvbSAmJiAoY2JPZmZzZXQudG9wICE9PSBzdGFnZU9mZnNldC50b3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3Moe1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgbGVmdDogJ2F1dG8nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2JCb3R0b20gPCBzdGFnZUJvdHRvbSB8fCAoY2JCb3R0b20gPT09IHN0YWdlQm90dG9tICYmIGNiT2Zmc2V0LnRvcCA+IHNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAkY2JXcmFwLmNzcyhjYlN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybUJ1aWxkZXIuY29udHJvbHMucGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBkaWFsb2cgd2l0aCB0aGUgZm9ybSdzIGRhdGFcbiAgICovXG4gIF9oZWxwZXJzLnNob3dEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB1dGlscy5lc2NhcGVIdG1sKGZvcm1CdWlsZGVyLmZvcm1EYXRhKTtcbiAgICBjb25zdCBjb2RlID0gbSgnY29kZScsIGRhdGEsIHtjbGFzc05hbWU6IGBmb3JtRGF0YS0ke29wdHMuZGF0YVR5cGV9YH0pO1xuXG4gICAgX2hlbHBlcnMuZGlhbG9nKG0oJ3ByZScsIGNvZGUpLCBudWxsLCAnZGF0YS1kaWFsb2cnKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGEgZmllbGQgZnJvbSB0aGUgc3RhZ2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgZmllbGRJRCBJRCBvZiB0aGUgZmllbGQgdG8gYmUgcmVtb3ZlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBmaWVsZFJlbW92ZWQgcmV0dXJucyB0cnVlIGlmIGZpZWxkIGlzIHJlbW92ZWRcbiAgICovXG4gIF9oZWxwZXJzLnJlbW92ZUZpZWxkID0gKGZpZWxkSUQpID0+IHtcbiAgICBsZXQgZmllbGRSZW1vdmVkID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG4gICAgY29uc3QgZmllbGRzID0gZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWZpZWxkJyk7XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gZmllbGRzIHRvIHJlbW92ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghZmllbGRJRCkge1xuICAgICAgbGV0IGF2YWlsYWJsZUlkcyA9IFtdLnNsaWNlLmNhbGwoZmllbGRzKS5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5pZDtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS53YXJuKCdmaWVsZElEIHJlcXVpcmVkIHRvIHVzZSBgcmVtb3ZlRmllbGRgIGFjdGlvbi4nKTtcbiAgICAgIGNvbnNvbGUud2FybignQXZhaWxhYmxlIElEczogJyArIGF2YWlsYWJsZUlkcy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSUQpO1xuICAgIGNvbnN0ICRmaWVsZCA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJRCkpO1xuICAgIGlmICghZmllbGQpIHtcbiAgICAgIGNvbnNvbGUud2FybignRmllbGQgbm90IGZvdW5kJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJGZpZWxkLnNsaWRlVXAoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgICRmaWVsZC5yZW1vdmUoKTtcbiAgICAgIGZpZWxkUmVtb3ZlZCA9IHRydWU7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICBpZiAoIWZvcm0uY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHN0YWdlV3JhcCA9IGZvcm0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgIHN0YWdlV3JhcC5kYXRhc2V0LmNvbnRlbnQgPSBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZFJlbW92ZWQpO1xuICAgIHJldHVybiBmaWVsZFJlbW92ZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCBmb3IgZm9ybSBhY3Rpb24gYnV0dG9uc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGJ1dHRvbkRhdGFcbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gZWxlbWVudCBmb3IgYWN0aW9uIGJ1dHRvblxuICAgKi9cbiAgX2hlbHBlcnMucHJvY2Vzc0FjdGlvbkJ1dHRvbnMgPSBidXR0b25EYXRhID0+IHtcbiAgICBsZXQge2xhYmVsLCBldmVudHMsIC4uLmF0dHJzfSA9IGJ1dHRvbkRhdGE7XG5cbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICBsYWJlbCA9IGF0dHJzLmlkID8gdXRpbHMuY2FwaXRhbGl6ZShhdHRycy5pZCkgOiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWwgPSBpMThuW2xhYmVsXSB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoIWF0dHJzLmlkKSB7XG4gICAgICBhdHRycy5pZCA9IGAke2Zvcm1CdWlsZGVyLmZvcm1JRH0tYWN0aW9uLSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEwMDApfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHJzLmlkID0gYCR7Zm9ybUJ1aWxkZXIuZm9ybUlEfS0ke2F0dHJzLmlkfS1hY3Rpb25gO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IG0oJ2J1dHRvbicsIGxhYmVsLCBhdHRycyk7XG5cbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBmb3IgKGxldCBldmVudCBpbiBldmVudHMpIHtcbiAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZ0ID0+IGV2ZW50c1tldmVudF0oZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcm9zcyBsaW5rIHN1YnR5cGVzIGFuZCBkZWZpbmUgbWFya3VwIGNvbmZpZ1xuICAgKiBAcGFyYW0gIHtBcnJheX0gc3VidHlwZU9wdHNcbiAgICogQHJldHVybiB7QXJyYXl9IHN1YnR5cGVzXG4gICAqL1xuICBfaGVscGVycy5wcm9jZXNzU3VidHlwZXMgPSBzdWJ0eXBlT3B0cyA9PiB7XG4gICAgY29uc3Qgc3VidHlwZUZvcm1hdCA9IHN1YnR5cGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoc3VidHlwZSksXG4gICAgICAgICAgdmFsdWU6IHN1YnR5cGVcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRTdWJ0eXBlcyA9IHtcbiAgICAgICAgdGV4dDogWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ2NvbG9yJywgJ3RlbCddLFxuICAgICAgICBoZWFkZXI6IFsnaDEnLCAnaDInLCAnaDMnXSxcbiAgICAgICAgYnV0dG9uOiBbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgICAgICAgcGFyYWdyYXBoOiBbJ3AnLCAnYWRkcmVzcycsICdibG9ja3F1b3RlJywgJ2NhbnZhcycsICdvdXRwdXQnXSxcbiAgICAgICAgdGV4dGFyZWE6IFsndGV4dGFyZWEnLCAncXVpbGwnXVxuICAgICAgfTtcblxuICAgICAgbGV0IHN1YnR5cGVzID0gdXRpbHMubWVyZ2UoZGVmYXVsdFN1YnR5cGVzLCBzdWJ0eXBlT3B0cyk7XG5cbiAgICAgIGZvciAobGV0IHN1YnR5cGUgaW4gc3VidHlwZXMpIHtcbiAgICAgICAgaWYgKHN1YnR5cGVzLmhhc093blByb3BlcnR5KHN1YnR5cGUpKSB7XG4gICAgICAgICAgc3VidHlwZXNbc3VidHlwZV0gPSBzdWJ0eXBlc1tzdWJ0eXBlXS5tYXAoc3VidHlwZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YnR5cGVzO1xuICB9O1xuXG4gIHJldHVybiBfaGVscGVycztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuIiwiY29uc3Qga2NUb2dnbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFRvZ2dsZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHRoZW1lOiAnZnJlc2gnLFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgb246ICdPbidcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IG9wdHMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgbGV0ICRrY1RvZ2dsZSA9ICQoJzxkaXYgY2xhc3M9XCJrYy10b2dnbGVcIi8+JylcbiAgICAgICAgLmluc2VydEFmdGVyKGVsZW1lbnQpXG4gICAgICAgIC5hcHBlbmQoZWxlbWVudCk7XG5cbiAgICAka2NUb2dnbGUudG9nZ2xlQ2xhc3MoJ29uJywgZWxlbWVudC5pcygnOmNoZWNrZWQnKSk7XG5cbiAgICBsZXQga2N0T24gPSBgPGRpdiBjbGFzcz1cImtjdC1vblwiPiR7b3B0cy5tZXNzYWdlcy5vbn08L2Rpdj5gO1xuICAgIGxldCBrY3RPZmYgPSBgPGRpdiBjbGFzcz1cImtjdC1vZmZcIj4ke29wdHMubWVzc2FnZXMub2ZmfTwvZGl2PmA7XG4gICAgbGV0IGtjdEhhbmRsZSA9ICc8ZGl2IGNsYXNzPVwia2N0LWhhbmRsZVwiPjwvZGl2Pic7XG4gICAgbGV0IGtjdElubmVyID0gYDxkaXYgY2xhc3M9XCJrY3QtaW5uZXJcIj4ke2tjdE9ufSR7a2N0SGFuZGxlfSR7a2N0T2ZmfTwvZGl2PmA7XG5cbiAgICAka2NUb2dnbGUuYXBwZW5kKGtjdElubmVyKTtcblxuICAgICRrY1RvZ2dsZS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGVsZW1lbnQuYXR0cignY2hlY2tlZCcsICFlbGVtZW50LmF0dHIoJ2NoZWNrZWQnKSk7XG4gICAgICAka2NUb2dnbGUudG9nZ2xlQ2xhc3MoJ29uJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgalF1ZXJ5LmZuLmtjVG9nZ2xlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXM7XG4gICAgcmV0dXJuIHRvZ2dsZS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gJCh0b2dnbGVbaV0pO1xuICAgICAgaWYgKGVsZW1lbnQuZGF0YSgna2NUb2dnbGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQga2NUb2dnbGUgPSBuZXcgVG9nZ2xlKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgZWxlbWVudC5kYXRhKCdrY1RvZ2dsZScsIGtjVG9nZ2xlKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2NUb2dnbGUoKTtcbiIsIi8qKlxuICogUG9seWZpbGxzIGZvciBvbGRlciBicm93c2VycyBhbmQgYWRkZWQgZnVuY3Rpb25hbGl0eVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcG9seWZpbGxzKCkge1xuICAvLyBFbGVtZW50LnJlbW92ZSgpIHBvbHlmaWxsXG4gIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIEV2ZW50IHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cuRXZlbnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudChldnQsIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH1cblxuICAvLyBPYmplY3QuYXNzaWduIHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQgPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICB9XG5cblxuICAvLyBSZWZlcmVuY2U6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNC40LjE4XG4gIGlmICghQXJyYXkucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgVCwgaztcbiAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGhpcyBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7XG4gICAgICB9XG4gICAgICBsZXQgTyA9IE9iamVjdCh0aGlzKTtcbiAgICAgIGxldCBsZW4gPSBPLmxlbmd0aCA+Pj4gMDtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBUID0gYXJndW1lbnRzWzFdO1xuICAgICAgfVxuICAgICAgayA9IDA7XG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBsZXQga1ZhbHVlO1xuICAgICAgICBpZiAoayBpbiBPKSB7XG4gICAgICAgICAga1ZhbHVlID0gT1trXTtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKFQsIGtWYWx1ZSwgaywgTyk7XG4gICAgICAgIH1cbiAgICAgICAgaysrO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbHMoKTtcbiIsImltcG9ydCBkIGZyb20gJy4vZG9tJztcblxuLyoqXG4gKiBDcm9zcyBmaWxlIHV0aWxpdGllcyBmb3Igd29ya2luZyB3aXRoIGFycmF5cyxcbiAqIHNvcnRpbmcgYW5kIG90aGVyIGZ1biBzdHVmZlxuICogQHJldHVybiB7T2JqZWN0fSBmYlV0aWxzXG4gKi9cbi8vIGZ1bmN0aW9uIHV0aWxzKCkge1xuICBjb25zdCBmYlV0aWxzID0ge307XG4gIHdpbmRvdy5mYkxvYWRlZCA9IHtcbiAgICBqczogW10sXG4gICAgY3NzOiBbXVxuICB9O1xuICB3aW5kb3cuZmJFZGl0b3JzID0ge1xuICAgIHF1aWxsOiB7fSxcbiAgICB0aW55bWNlOiB7fVxuICB9O1xuXG4gIC8vIGNsZWFuZXIgc3ludGF4IGZvciB0ZXN0aW5nIGluZGV4T2YgZWxlbWVudFxuICBmYlV0aWxzLmluQXJyYXkgPSBmdW5jdGlvbihuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICBPYmplY3QgdHJpbW1lZCBvZiBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICovXG4gIGZiVXRpbHMudHJpbU9iaiA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IHhtbFJlbW92ZSA9IFtcbiAgICAgIG51bGwsXG4gICAgICB1bmRlZmluZWQsXG4gICAgICAnJyxcbiAgICAgIGZhbHNlLFxuICAgICAgJ2ZhbHNlJ1xuICAgIF07XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGZiVXRpbHMuaW5BcnJheShhdHRyc1thdHRyXSwgeG1sUmVtb3ZlKSkge1xuICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXR0cnNbYXR0cl0pKSB7XG4gICAgICAgIGlmICghYXR0cnNbYXR0cl0ubGVuZ3RoKSB7XG4gICAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIGF0dHJpYnV0ZSBpcyBhIHZhbGlkIEhUTUwgYXR0cmlidXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXR0clxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZmJVdGlscy52YWxpZEF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XG4gICAgbGV0IGludmFsaWQgPSBbXG4gICAgICAndmFsdWVzJyxcbiAgICAgICdlbmFibGVPdGhlcicsXG4gICAgICAnb3RoZXInLFxuICAgICAgJ2xhYmVsJyxcbiAgICAgIC8vICdzdHlsZScsXG4gICAgICAnc3VidHlwZSdcbiAgICBdO1xuICAgIHJldHVybiAhZmJVdGlscy5pbkFycmF5KGF0dHIsIGludmFsaWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIGF0dHJzIG9iamVjdCBpbnRvIGEgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgb2JqZWN0IG9mIGF0dHJpYnV0ZXMgZm9yIG1hcmt1cFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmYlV0aWxzLmF0dHJTdHJpbmcgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCBhdHRyaWJ1dGVzID0gW107XG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikgJiYgZmJVdGlscy52YWxpZEF0dHIoYXR0cikpIHtcbiAgICAgICAgYXR0ciA9IGZiVXRpbHMuc2FmZUF0dHIoYXR0ciwgYXR0cnNbYXR0cl0pO1xuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0ci5uYW1lICsgYXR0ci52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGVzLmpvaW4oJyAnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhdHRyaWJ1dGVzIHRvIG1hcmt1cCBzYWZlIHN0cmluZ3NcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lICBhdHRyaWJ1dGUgbmFtZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIGF0dHJpYnV0ZSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKi9cbiAgZmJVdGlscy5zYWZlQXR0ciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IGZiVXRpbHMuc2FmZUF0dHJOYW1lKG5hbWUpO1xuICAgIGxldCB2YWxTdHJpbmc7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWxTdHJpbmcgPSBmYlV0aWxzLmVzY2FwZUF0dHIodmFsdWUuam9pbignICcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YodmFsdWUpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsU3RyaW5nID0gZmJVdGlscy5lc2NhcGVBdHRyKHZhbHVlLnJlcGxhY2UoJywnLCAnICcpLnRyaW0oKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZSA/IGA9XCIke3ZhbFN0cmluZ31cImAgOiAnJztcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlXG4gICAgfTtcbiAgfTtcblxuICBmYlV0aWxzLnNhZmVBdHRyTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBsZXQgc2FmZUF0dHIgPSB7XG4gICAgICBjbGFzc05hbWU6ICdjbGFzcydcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNhZmVBdHRyW25hbWVdIHx8IGZiVXRpbHMuaHlwaGVuQ2FzZShuYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBzdHJpbmdzIGludG8gbG93ZXJjYXNlLWh5cGhlblxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBmYlV0aWxzLmh5cGhlbkNhc2UgPSAoc3RyKSA9PiB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1teXFx3XFxzXFwtXS9naSwgJycpO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKCQxKSB7XG4gICAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvXi0rL2csICcnKTtcbiAgfTtcblxuICAvKipcbiAgICogY29udmVydCBhIGh5cGhlbmF0ZWQgc3RyaW5nIHRvIGNhbWVsQ2FzZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBmYlV0aWxzLmNhbWVsQ2FzZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShbYS16XSkvZywgKG0sIHcpID0+XG4gICAgdy50b1VwcGVyQ2FzZSgpKTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGNvbnRlbnQgdHlwZVxuICAgKiBAcGFyYW0gIHtOb2RlIHwgU3RyaW5nIHwgQXJyYXkgfCBPYmplY3R9IGNvbnRlbnRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSBmb3IgbWFwcGluZ1xuICAgKi9cbiAgZmJVdGlscy5jb250ZW50VHlwZSA9IGNvbnRlbnQgPT4ge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIGNvbnRlbnQ7XG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdHlwZSA9ICdub2RlJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgIHR5cGUgPSAnYXJyYXknO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50cyB0byBhbiBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50cyAgb2JqZWN0IGZ1bGwgb2YgZXZlbnRzIGVnLiB7Y2xpY2s6IGV2dCA9PiBjYWxsYmFja31cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZiVXRpbHMuYmluZEV2ZW50cyA9IChlbGVtZW50LCBldmVudHMpID0+IHtcbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBmb3IgKGxldCBldmVudCBpbiBldmVudHMpIHtcbiAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgdW5pcXVlIG5hbWUgYXR0cmlidXRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIG5hbWVcbiAqL1xuICBmYlV0aWxzLm5hbWVBdHRyID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIGxldCBlcG9jaCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgbGV0IHByZWZpeCA9IGZpZWxkLmF0dHJzLnR5cGUgfHwgZmJVdGlscy5oeXBoZW5DYXNlKGZpZWxkLmxhYmVsKTtcbiAgICAgIHJldHVybiBwcmVmaXggKyAnLScgKyBlcG9jaDtcbiAgICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgd3JhcHBlciB3aGVyZSBuZWVkZWRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgdGFnXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheXxPYmplY3R9IGNvbnRlbnQgd2Ugd3JhcCB0aGlzXG4gICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgIGF0dHJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIEVsZW1lbnRcbiAgICovXG4gIGZiVXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGxldCBjb250ZW50VHlwZSA9IGZiVXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgbGV0IHtldmVudHMsIC4uLmF0dHJzfSA9IGF0dHJpYnV0ZXM7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICBjb25zdCBhcHBlbmRDb250ZW50ID0ge1xuICAgICAgc3RyaW5nOiAoY29udGVudCkgPT4ge1xuICAgICAgICBmaWVsZC5pbm5lckhUTUwgKz0gY29udGVudDtcbiAgICAgIH0sXG4gICAgICBvYmplY3Q6IChjb25maWcpID0+IHtcbiAgICAgICAgbGV0IHt0YWcsIGNvbnRlbnQsIC4uLmRhdGF9ID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoZmJVdGlscy5tYXJrdXAodGFnLCBjb250ZW50LCBkYXRhKSk7XG4gICAgICB9LFxuICAgICAgbm9kZTogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgfSxcbiAgICAgIGFycmF5OiAoY29udGVudCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb250ZW50VHlwZSA9IGZiVXRpbHMuY29udGVudFR5cGUoY29udGVudFtpXSk7XG4gICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbjogY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50KCk7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudCk7XG4gICAgICB9LFxuICAgICAgdW5kZWZpbmVkOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGFnLCBjb250ZW50LCBhdHRyaWJ1dGVzKTtcbiAgICAgIH0sXG4gICAgfTtcblxuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGxldCBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdLmNhbGwodGhpcywgY29udGVudCk7XG4gICAgfVxuXG4gICAgZmJVdGlscy5iaW5kRXZlbnRzKGZpZWxkLCBldmVudHMpO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuICBjb25zdCBtID0gZmJVdGlscy5tYXJrdXA7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaHRtbCBlbGVtZW50IGF0dHJpYnV0ZXMgdG8ga2V5L3ZhbHVlIG9iamVjdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW0gRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSBleDoge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgbGV0IGF0dHJzID0gZWxlbS5hdHRyaWJ1dGVzO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgZmJVdGlscy5mb3JFYWNoKGF0dHJzLCBhdHRyID0+IHtcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XG4gICAgICBpZiAoYXR0clZhbC5tYXRjaCgvZmFsc2V8dHJ1ZS9nKSkge1xuICAgICAgICBhdHRyVmFsID0gKGF0dHJWYWwgPT09ICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xuICAgICAgICBhdHRyVmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0clZhbCkge1xuICAgICAgICBkYXRhW2F0dHJzW2F0dHJdLm5hbWVdID0gYXR0clZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZpZWxkIG9wdGlvbnMgdG8gb3B0aW9uRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkICBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICBvcHRpb25EYXRhIGFycmF5XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKTtcbiAgICBsZXQgb3B0aW9uRGF0YSA9IHt9O1xuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvcHRpb25EYXRhID0gZmJVdGlscy5wYXJzZUF0dHJzKG9wdGlvbnNbaV0pO1xuICAgICAgICBvcHRpb25EYXRhLmxhYmVsID0gb3B0aW9uc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgZGF0YS5wdXNoKG9wdGlvbkRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZSBYTUwgZm9ybURhdGFcbiAgICogQHBhcmFtICB7U3RyaW5nfSB4bWxTdHJpbmdcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgZm9ybURhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VYTUwgPSBmdW5jdGlvbih4bWxTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgIGxldCB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbFN0cmluZywgJ3RleHQveG1sJyk7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG5cbiAgICBpZiAoeG1sKSB7XG4gICAgICBsZXQgZmllbGRzID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWVsZCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IGZiVXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuXG4gICAgICAgIGlmIChmaWVsZHNbaV0uY2hpbGRyZW4gJiYgZmllbGRzW2ldLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBmYlV0aWxzLnBhcnNlT3B0aW9ucyhmaWVsZHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgZXNjYXBlZCBIVE1MIGludG8gdXNhYmxlIEhUTUxcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sIGVzY2FwZWQgSFRNTFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgcGFyc2VkIEhUTUxcbiAgICovXG4gIGZiVXRpbHMucGFyc2VkSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBsZXQgZXNjYXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZXNjYXBlRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFc2NhcGUgbWFya3VwIHNvIGl0IGNhbiBiZSBkaXNwbGF5ZWQgcmF0aGVyIHRoYW4gcmVuZGVyZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sIG1hcmt1cFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgZXNjYXBlZCBodG1sXG4gICAqL1xuICBmYlV0aWxzLmVzY2FwZUh0bWwgPSBmdW5jdGlvbihodG1sKSB7XG4gICAgbGV0IGVzY2FwZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQgPSBodG1sO1xuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LmlubmVySFRNTDtcbiAgfTtcblxuICAvLyBFc2NhcGUgYW4gYXR0cmlidXRlXG4gIGZiVXRpbHMuZXNjYXBlQXR0ciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCBtYXRjaCA9IHtcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7J1xuICAgIH07XG5cbiAgICBjb25zdCByZXBsYWNlVGFnID0gdGFnID0+IG1hdGNoW3RhZ10gfHwgdGFnO1xuXG4gICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykgPyBzdHIucmVwbGFjZSgvW1wiJjw+XS9nLCByZXBsYWNlVGFnKSA6IHN0cjtcbiAgfTtcblxuICAvLyBFc2NhcGUgYXR0cmlidXRlc1xuICBmYlV0aWxzLmVzY2FwZUF0dHJzID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgYXR0cnNbYXR0cl0gPSBmYlV0aWxzLmVzY2FwZUF0dHIoYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvLyBmb3JFYWNoIHRoYXQgY2FuIGJlIHVzZWQgb24gbm9kZUxpc3RcbiAgZmJVdGlscy5mb3JFYWNoID0gZnVuY3Rpb24oYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTsgLy8gcGFzc2VzIGJhY2sgc3R1ZmYgd2UgbmVlZFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheSBvZiBlbGVtZW50c1xuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgIGFycmF5IHdpdGggcG9zc2libGUgZHVwbGljYXRlc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIGFycmF5IHdpdGggb25seSB1bmlxdWUgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigoZWxlbSwgcG9zLCBhcnIpID0+IHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihlbGVtKSA9PT0gcG9zO1xuICAgIH0pO1xuICB9O1xuXG4gIGZiVXRpbHMubWFrZUxhYmVsID0gKGRhdGEsIGxhYmVsID0gJycsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgICBsZXQgbGFiZWxUZXh0ID0gZmJVdGlscy5wYXJzZWRIdG1sKGxhYmVsKTtcbiAgICBsZXQgbGFiZWxDb250ZW50cyA9IFtsYWJlbFRleHRdO1xuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkJykpIHtcbiAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJyonLCB7Y2xhc3NOYW1lOiAncmVxdWlyZWQnfSkpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnPycsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICAgIHRvb2x0aXA6IGRlc2NyaXB0aW9uXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbSgnbGFiZWwnLCBsYWJlbENvbnRlbnRzLCB7XG4gICAgICBmb3I6IGRhdGEuaWQsXG4gICAgICBjbGFzc05hbWU6IGBmYi0ke2RhdGEudHlwZX0tbGFiZWxgXG4gICAgfSk7XG4gIH07XG5cbiAgZmJVdGlscy50ZW1wbGF0ZU1hcCA9ICh0ZW1wbGF0ZXMsIHR5cGUsIGZhbGxiYWNrKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCB0ZW1wbGF0ZU1hcCA9IG5ldyBNYXAodGVtcGxhdGVzKTtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgdGVtcGxhdGVNYXApIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgaWYoZmJVdGlscy5pbkFycmF5KHR5cGUsIGtleSkpIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGtleSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICB0ZW1wbGF0ZSA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSgpO1xuICB9O1xuXG4gIGZiVXRpbHMuYXV0b2NvbXBsZXRlVGVtcGxhdGUgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7dmFsdWVzLCB0eXBlLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBjb25zdCBrZXlib2FyZE5hdiA9IChlKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gZS50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICBsZXQgYWN0aXZlT3B0aW9uID0gbGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUtb3B0aW9uJylbMF07XG4gICAgICBjb25zdCBrZXlDb2RlTWFwVmFscyA9IFtcbiAgICAgICAgLy8gdXBcbiAgICAgICAgWzM4LCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbi5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gYWN0aXZlT3B0aW9uLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvLyBkb3duXG4gICAgICAgIFs0MCwgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1vcHRpb24nKTtcbiAgICAgICAgICAgICAgYWN0aXZlT3B0aW9uID0gYWN0aXZlT3B0aW9uLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBsaXN0LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFsxMywgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gYWN0aXZlT3B0aW9uLmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmIChsaXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIF07XG4gICAgICBsZXQga2V5Q29kZU1hcCA9IG5ldyBNYXAoa2V5Q29kZU1hcFZhbHMpO1xuXG4gICAgICBsZXQgZGlyZWN0aW9uID0ga2V5Q29kZU1hcC5nZXQoZS5rZXlDb2RlKTtcbiAgICAgIGlmKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgZGlyZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3Rpb24oKTtcbiAgICB9O1xuICAgIGNvbnN0IGZhdXhFdmVudHMgPSB7XG4gICAgICBmb2N1czogZXZ0ID0+IHtcbiAgICAgICAgZXZ0LnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5Ym9hcmROYXYpO1xuICAgICAgICBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSxcbiAgICAgIGJsdXI6IGV2dCA9PiB7XG4gICAgICAgIGV2dC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkTmF2KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfSxcbiAgICAgIGlucHV0OiAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICBkLmZpbHRlcihsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyksIGV2dC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZiAoIWV2dC50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgbGV0IGZhdXhBdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsXG4gICAgICB7XG4gICAgICAgIGlkOiBgJHtkYXRhLmlkfS1pbnB1dGAsXG4gICAgICAgIGV2ZW50czogZmF1eEV2ZW50c1xuICAgICAgfSk7XG4gICAgbGV0IGhpZGRlbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge3R5cGU6ICdoaWRkZW4nfSk7XG4gICAgZGVsZXRlIGZhdXhBdHRycy5uYW1lO1xuICAgIGNvbnN0IGZpZWxkID0gW1xuICAgICAgbSgnaW5wdXQnLCBudWxsLCBmYXV4QXR0cnMpLFxuICAgICAgbSgnaW5wdXQnLCBudWxsLCBoaWRkZW5BdHRycylcbiAgICBdO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHZhbHVlcy5tYXAob3B0aW9uRGF0YSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSBvcHRpb25EYXRhLmxhYmVsO1xuICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6IGV2dCA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBsaXN0LnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0LCBmaWVsZCk7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IG9wdGlvbkRhdGEubGFiZWw7XG4gICAgICAgICAgICBmaWVsZC5wcmV2aW91c1NpYmxpbmcudmFsdWUgPSBvcHRpb25EYXRhLnZhbHVlO1xuICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IG9wdGlvbkRhdGEudmFsdWVcbiAgICAgIH07XG4gICAgICByZXR1cm4gbSgnbGknLCBsYWJlbCwgY29uZmlnKTtcbiAgICB9KTtcblxuICAgIGZpZWxkLnB1c2gobSgndWwnLCBvcHRpb25zLFxuICAgICAge2lkOiBgJHtkYXRhLmlkfS1saXN0YCwgY2xhc3NOYW1lOiBgZmItJHt0eXBlfS1saXN0YH0pKTtcblxuICAgIGNvbnN0IG9uUmVuZGVyID0gKGV2dCkgPT4ge1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7ZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgRE9NIGVsZW1lbnRzIGZvciBzZWxlY3QsIGNoZWNrYm94LWdyb3VwIGFuZCByYWRpby1ncm91cC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZERhdGFcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgRE9NIGVsZW1lbnRzXG4gICAqL1xuICBmYlV0aWxzLnNlbGVjdFRlbXBsYXRlID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuICAgIGxldCB7dmFsdWVzLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5saW5lLCBvdGhlciwgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgbGV0IG9wdGlvblR5cGUgPSB0eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKTtcbiAgICBsZXQgaXNTZWxlY3QgPSB0eXBlID09PSAnc2VsZWN0JztcblxuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIGlmIChwbGFjZWhvbGRlciAmJiBpc1NlbGVjdCkge1xuICAgICAgICBvcHRpb25zLnB1c2gobSgnb3B0aW9uJywgcGxhY2Vob2xkZXIsIHtcbiAgICAgICAgICBkaXNhYmxlZDogbnVsbCxcbiAgICAgICAgICBzZWxlY3RlZDogbnVsbFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB7bGFiZWwgPSAnJywgLi4ub3B0aW9uQXR0cnN9ID0gdmFsdWVzW2ldO1xuXG4gICAgICAgIG9wdGlvbkF0dHJzLmlkID0gYCR7ZGF0YS5pZH0tJHtpfWA7XG4gICAgICAgIGlmICghb3B0aW9uQXR0cnMuc2VsZWN0ZWQgfHwgcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICBkZWxldGUgb3B0aW9uQXR0cnMuc2VsZWN0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZWxlY3QpIHtcbiAgICAgICAgICBsZXQgbyA9IG0oJ29wdGlvbicsIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxhYmVsKSwgb3B0aW9uQXR0cnMpO1xuICAgICAgICAgIG9wdGlvbnMucHVzaChvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgd3JhcHBlckNsYXNzID0gb3B0aW9uVHlwZTtcbiAgICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3MgKz0gJy1pbmxpbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25BdHRycy50eXBlID0gb3B0aW9uVHlwZTtcbiAgICAgICAgICBpZiAob3B0aW9uQXR0cnMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbkF0dHJzLmNoZWNrZWQgPSBudWxsO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgaW5wdXQgPSBtKCdpbnB1dCcsIG51bGwsIE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG9wdGlvbkF0dHJzKSk7XG4gICAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIFtpbnB1dCwgbGFiZWxdLCB7Zm9yOiBvcHRpb25BdHRycy5pZH0pO1xuICAgICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTZWxlY3QgJiYgb3RoZXIpIHtcbiAgICAgICAgbGV0IG90aGVyT3B0aW9uQXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IGAke2RhdGEuaWR9LW90aGVyYCxcbiAgICAgICAgICBjbGFzc05hbWU6IGAke2RhdGEuY2xhc3NOYW1lfSBvdGhlci1vcHRpb25gLFxuICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgY2xpY2s6ICgpID0+IGZiVXRpbHMub3RoZXJPcHRpb25DQihvdGhlck9wdGlvbkF0dHJzLmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gbGV0IGxhYmVsID0gbWkxOG4uY3VycmVudC5vdGhlcjtcbiAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICB3cmFwcGVyQ2xhc3MgKz0gJy1pbmxpbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3RoZXJPcHRpb25BdHRycyk7XG4gICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xuXG4gICAgICAgIGxldCBvdGhlclZhbEF0dHJzID0ge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgaWQ6IGAke290aGVyT3B0aW9uQXR0cnMuaWR9LXZhbHVlYCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdvdGhlci12YWwnXG4gICAgICAgIH07XG4gICAgICAgIGxldCBvdGhlcklucHV0cyA9IFtcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG9wdGlvbkF0dHJzKSxcbiAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnT3RoZXInKSxcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG90aGVyVmFsQXR0cnMpXG4gICAgICAgIF07XG4gICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBvdGhlcklucHV0cywge2Zvcjogb3B0aW9uQXR0cnMuaWR9KTtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlcyA9IFtcbiAgICAgIFsnc2VsZWN0JyxcbiAgICAgICAgKCkgPT4gbShvcHRpb25UeXBlLCBvcHRpb25zLCBkYXRhKV0sXG4gICAgICBbWydjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddLFxuICAgICAgICAoKSA9PiBtKCdkaXYnLCBvcHRpb25zLCB7Y2xhc3NOYW1lOiB0eXBlfSldXG4gICAgXTtcblxuICAgIHJldHVybiBmYlV0aWxzLnRlbXBsYXRlTWFwKHRlbXBsYXRlcywgdHlwZSk7XG4gIH07XG5cbiAgZmJVdGlscy5kZWZhdWx0RmllbGQgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7bGFiZWwsIGRlc2NyaXB0aW9uLCBzdWJ0eXBlLCB0eXBlLCBpZCwgaXNQcmV2aWV3LCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJy1wcmV2aWV3JztcbiAgICAgIH1cbiAgICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgZGF0YS50aXRsZSA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAoc3VidHlwZSkge1xuICAgICAgdHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkID0ge1xuICAgICAgZmllbGQ6IG0odHlwZSwgZmJVdGlscy5wYXJzZWRIdG1sKGxhYmVsKSwgZGF0YSksXG4gICAgICBvblJlbmRlcjogZmJVdGlscy5ub29wXG4gICAgfTtcblxuICAgIHJldHVybiAoKSA9PiBmaWVsZDtcbiAgfTtcblxuICAvKipcbiAgICogTG9hZHMgYW4gYXJyYXkgb2Ygc2NyaXB0cyB1c2luZyBqUXVlcnkncyBgZ2V0U2NyaXB0YFxuICAgKiBAcGFyYW0gIHtBcnJheXxTdHJpbmd9ICBzY3JpcHRTY3IgICAgc2NyaXB0c1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggICBvcHRpb25hbCB0byBsb2FkIGZvcm1cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgYSBwcm9taXNlXG4gICAqL1xuICBmYlV0aWxzLmdldFNjcmlwdHMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgY29uc3QgJCA9IGpRdWVyeTtcbiAgICBsZXQgX2FyciA9IFtdO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjcmlwdFNjcikpIHtcbiAgICAgIHNjcmlwdFNjciA9IFtzY3JpcHRTY3JdO1xuICAgIH1cblxuICAgIGlmICghZmJVdGlscy5pc0NhY2hlZChzY3JpcHRTY3IpKSB7XG4gICAgICBfYXJyID0gJC5tYXAoc2NyaXB0U2NyLCBzcmMgPT4ge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkYXRhVHlwZTogJ3NjcmlwdCcsXG4gICAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgICAgdXJsOiAocGF0aCB8fCAnJykgKyBzcmNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICQuYWpheChvcHRpb25zKS5kb25lKCgpID0+IHdpbmRvdy5mYkxvYWRlZC5qcy5wdXNoKHNyYykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2Fyci5wdXNoKCQuRGVmZXJyZWQoIGRlZmVycmVkID0+ICQoIGRlZmVycmVkLnJlc29sdmUgKSkpO1xuXG4gICAgcmV0dXJuICQud2hlbiguLi5fYXJyKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJlbW90ZSByZXNvdXJjZSBpcyBhbHJlYWR5IGxvYWRlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IHNyYyAgdXJsIG9mIHJlbW90ZSBzY3JpcHQgb3IgY3NzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgdHlwZSAgICAgICAnanMnIG9yICdjc3MnXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgaXNDYWNoZWRcbiAgICovXG4gIGZiVXRpbHMuaXNDYWNoZWQgPSAoc3JjLCB0eXBlID0gJ2pzJykgPT4ge1xuICAgIGxldCBpc0NhY2hlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGNhY2hlID0gd2luZG93LmZiTG9hZGVkW3R5cGVdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpIHtcbiAgICAgIGlzQ2FjaGVkID0gc3JjLmV2ZXJ5KHMgPT4gZmJVdGlscy5pbkFycmF5KHMsIGNhY2hlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQ2FjaGVkID0gZmJVdGlscy5pbkFycmF5KHNyYywgY2FjaGUpO1xuICAgIH1cbiAgICByZXR1cm4gaXNDYWNoZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgc3R5bGVzaGVldHMgdG8gdGhlIGhlYWRcbiAgICogQHBhcmFtICB7QXJyYXl9IHNjcmlwdFNjclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGhcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZiVXRpbHMuZ2V0U3R5bGVzID0gKHNjcmlwdFNjciwgcGF0aCkgPT4ge1xuICAgIGlmIChmYlV0aWxzLmlzQ2FjaGVkKHNjcmlwdFNjciwgJ2NzcycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFwcGVuZFN0eWxlID0gKGhyZWYpID0+IHtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIHdpbmRvdy5mYkxvYWRlZC5jc3MucHVzaChocmVmKTtcbiAgICB9O1xuICAgIHNjcmlwdFNjci5mb3JFYWNoKHNyYyA9PiBhcHBlbmRTdHlsZSgocGF0aCB8fCAnJykgKyBzcmMpKTtcbiAgfTtcblxuICBmYlV0aWxzLmxvbmdUZXh0VGVtcGxhdGUgPSBkYXRhID0+IHtcbiAgICBsZXQge3ZhbHVlID0gJycsIC4uLmF0dHJzfSA9IGRhdGE7XG4gICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgZmllbGQ6IG0oJ3RleHRhcmVhJywgZmJVdGlscy5wYXJzZWRIdG1sKHZhbHVlKSwgYXR0cnMpXG4gICAgfTtcbiAgICBsZXQgZWRpdG9ycyA9IHtcbiAgICAgIHRpbnltY2U6IHtcbiAgICAgICAganM6IFsnLy9jZG4udGlueW1jZS5jb20vNC90aW55bWNlLm1pbi5qcyddLFxuICAgICAgICBvblJlbmRlcjogZXZ0ID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LnRpbnltY2UuZWRpdG9yc1tkYXRhLmlkXSkge1xuICAgICAgICAgICAgd2luZG93LnRpbnltY2UuZWRpdG9yc1tkYXRhLmlkXS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LnRpbnltY2UuaW5pdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRlbXBsYXRlLmZpZWxkLFxuICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvcicsXG4gICAgICAgICAgICAgICdzZWFyY2hyZXBsYWNlIHZpc3VhbGJsb2NrcyBjb2RlIGZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUgbWVkaWEgdGFibGUgY29udGV4dG1lbnUgcGFzdGUgY29kZSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0b29sYmFyOiAnaW5zZXJ0ZmlsZSB1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgbGluayBpbWFnZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHF1aWxsOiB7XG4gICAgICAgIGpzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLmpzJ10sXG4gICAgICAgIGNzczogWycvL2Nkbi5xdWlsbGpzLmNvbS8xLjEuMy9xdWlsbC5zbm93LmNzcyddLFxuICAgICAgICBvblJlbmRlcjogZXZ0ID0+IHtcbiAgICAgICAgICBjb25zdCBEZWx0YSA9IHdpbmRvdy5RdWlsbC5pbXBvcnQoJ2RlbHRhJyk7XG4gICAgICAgICAgd2luZG93LmZiRWRpdG9ycy5xdWlsbFtkYXRhLmlkXSA9IHt9O1xuICAgICAgICAgIGxldCBlZGl0b3IgPSB3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2RhdGEuaWRdO1xuICAgICAgICAgIGVkaXRvci5pbnN0YW5jZSA9IG5ldyB3aW5kb3cuUXVpbGwodGVtcGxhdGUuZmllbGQsIHtcbiAgICAgICAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgICAgIFt7J2hlYWRlcic6IFsxLCAyLCBmYWxzZV19XSxcbiAgICAgICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddLFxuICAgICAgICAgICAgICAgIFsnY29kZS1ibG9jayddXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogYXR0cnMucGxhY2Vob2xkZXIgfHwgJycsXG4gICAgICAgICAgICB0aGVtZTogJ3Nub3cnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZWRpdG9yLmRhdGEgPSBuZXcgRGVsdGEoKTtcbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGVkaXRvci5pbnN0YW5jZS5zZXRDb250ZW50cyh3aW5kb3cuSlNPTi5wYXJzZShmYlV0aWxzLnBhcnNlZEh0bWwodmFsdWUpKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVkaXRvci5pbnN0YW5jZS5vbigndGV4dC1jaGFuZ2UnLCBmdW5jdGlvbihkZWx0YSkge1xuICAgICAgICAgICAgZWRpdG9yLmRhdGEgPSBlZGl0b3IuZGF0YS5jb21wb3NlKGRlbHRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoZGF0YS50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICB0ZW1wbGF0ZS5vblJlbmRlciA9IGVkaXRvcnNbZGF0YS50eXBlXS5vblJlbmRlcjtcbiAgICB9XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3F1aWxsJykge1xuICAgICAgdGVtcGxhdGUuZmllbGQgPSBtKCdkaXYnLCBudWxsLCBhdHRycyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCBvblJlbmRlcik7XG5cbiAgICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXS5jc3MpIHtcbiAgICAgICAgICBmYlV0aWxzLmdldFN0eWxlcyhlZGl0b3JzW2RhdGEudHlwZV0uY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmpzICYmICFmYlV0aWxzLmlzQ2FjaGVkKGVkaXRvcnNbZGF0YS50eXBlXS5qcykpIHtcbiAgICAgICAgICBmYlV0aWxzLmdldFNjcmlwdHMoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKS5kb25lKHRlbXBsYXRlLm9uUmVuZGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wbGF0ZS5vblJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7ZmllbGQ6IHRlbXBsYXRlLmZpZWxkLCBvblJlbmRlcn07XG4gIH07XG5cbiAgZmJVdGlscy5nZXRUZW1wbGF0ZSA9IChmaWVsZERhdGEsIGlzUHJldmlldyA9IGZhbHNlKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBzdWJ0eXBlLFxuICAgICAgbGFiZWxQb3NpdGlvbixcbiAgICAgIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCB0ZW1wbGF0ZTtcbiAgICBsZXQgZmllbGQ7XG5cbiAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnLXByZXZpZXcnO1xuICAgIH1cbiAgICBkYXRhLmlkID0gZGF0YS5uYW1lO1xuXG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIGRhdGEudHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubXVsdGlwbGUgfHwgZGF0YS50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnKSB7XG4gICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnW10nO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnJlcXVpcmVkKSB7XG4gICAgICBkYXRhLnJlcXVpcmVkID0gbnVsbDtcbiAgICAgIGRhdGFbJ2FyaWEtcmVxdWlyZWQnXSA9ICd0cnVlJztcbiAgICB9XG5cbiAgICBsZXQgZmllbGRMYWJlbCA9IGZiVXRpbHMubWFrZUxhYmVsKGRhdGEsIGxhYmVsLCBkZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgdGVtcGxhdGVzID0gW1xuICAgICAgW1snYXV0b2NvbXBsZXRlJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgYXV0b2NvbXBsZXRlID0gZmJVdGlscy5hdXRvY29tcGxldGVUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGF1dG9jb21wbGV0ZS5maWVsZF0sXG4gICAgICAgICAgICBvblJlbmRlcjogYXV0b2NvbXBsZXRlLm9uUmVuZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1sndGV4dCcsICdwYXNzd29yZCcsICdlbWFpbCcsICdudW1iZXInLCAnZmlsZScsICdjb2xvcicsICdkYXRlJywgJ3RlbCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBtKCdpbnB1dCcsIG51bGwsIGRhdGEpXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWydidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0J10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogbSgnYnV0dG9uJywgbGFiZWwsIGRhdGEpLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gZmJVdGlscy5zZWxlY3RUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbJ2NoZWNrYm94JyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IFttKCdpbnB1dCcsIG51bGwsIGRhdGEpXTtcbiAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZUlucHV0Jykge1xuICAgICAgICAgICAgZmllbGQudW5zaGlmdChmaWVsZExhYmVsLCAnICcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWVsZC5wdXNoKCcgJywgZmllbGRMYWJlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgb25SZW5kZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEudG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLmlkKSkua2NUb2dnbGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3RleHRhcmVhJywgJ3RpbnltY2UnLCAncXVpbGwnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IGZiVXRpbHMubG9uZ1RleHRUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkLmZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmaWVsZC5vblJlbmRlclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XVxuICAgICAgXTtcblxuICAgICAgdGVtcGxhdGUgPSBmYlV0aWxzLnRlbXBsYXRlTWFwKFxuICAgICAgICB0ZW1wbGF0ZXMsXG4gICAgICAgIGRhdGEudHlwZSxcbiAgICAgICAgZmJVdGlscy5kZWZhdWx0RmllbGQoZmllbGREYXRhKSAvLyBmYWxsYmFja1xuICAgICAgKTtcblxuICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgbGV0IHdyYXBwZXJBdHRycyA9IHt9O1xuICAgICAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgICAgIHdyYXBwZXJBdHRycy5jbGFzc05hbWUgPVxuICAgICAgICAgIGBmYi0ke2RhdGEudHlwZX0gZm9ybS1ncm91cCBmaWVsZC0ke2RhdGEuaWR9YDtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZCA9IGZiVXRpbHMubWFya3VwKCdkaXYnLCB0ZW1wbGF0ZS5maWVsZCwgd3JhcHBlckF0dHJzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkID0gZmJVdGlscy5tYXJrdXAoJ2lucHV0JywgbnVsbCwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCB0ZW1wbGF0ZS5vblJlbmRlcik7XG5cbiAgICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIG90aGVyIG9wdGlvbi5cbiAgICogVG9nZ2xlcyB0aGUgaGlkZGVuIHRleHQgYXJlYSBmb3IgXCJvdGhlclwiIG9wdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBvdGhlcklkIGlkIG9mIHRoZSBcIm90aGVyXCIgb3B0aW9uIGlucHV0XG4gICAqL1xuICBmYlV0aWxzLm90aGVyT3B0aW9uQ0IgPSAob3RoZXJJZCkgPT4ge1xuICAgIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdGhlcklkKTtcbiAgICBjb25zdCBvdGhlcklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvdGhlcklkfS12YWx1ZWApO1xuXG4gICAgaWYgKG90aGVySW5wdXQuY2hlY2tlZCkge1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDYXBpdGFsaXplcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciB1bmNhcGl0YWxpemVkIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHN0ciBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICovXG4gIGZiVXRpbHMuY2FwaXRhbGl6ZSA9IHN0ciA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGJcXHcvZywgZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gbS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gIH07XG5cblxuZmJVdGlscy5tZXJnZSA9IChvYmoxLCBvYmoyKSA9PiB7XG4gIGxldCBtZXJnZWRPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmoxLCBvYmoyKTtcbiAgZm9yIChsZXQgcHJvcCBpbiBvYmoyKSB7XG4gICAgaWYgKG1lcmdlZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqMltwcm9wXSkpIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gQXJyYXkuaXNBcnJheShvYmoxW3Byb3BdKSA/IGZiVXRpbHMudW5pcXVlKG9iajFbcHJvcF0uY29uY2F0KG9iajJbcHJvcF0pKSA6IG9iajJbcHJvcF07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmoyW3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBmYlV0aWxzLm1lcmdlKG9iajFbcHJvcF0sIG9iajJbcHJvcF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gb2JqMltwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lcmdlZE9iajtcbn07XG5cbi8qKlxuICogVXRpbCB0byByZW1vdmUgY29udGVudHMgb2YgRE9NIE9iamVjdFxuICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgZWxlbWVudCB3aXRoIGl0cyBjaGlsZHJlbiByZW1vdmVkXG4gKi9cbmZiVXRpbHMuZW1wdHkgPSBlbGVtZW50ID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmZiVXRpbHMubm9vcCA9ICgpID0+IG51bGw7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmYlV0aWxzO1xuIl19
