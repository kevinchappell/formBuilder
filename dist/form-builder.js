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

      var formBuilder, utils, m, defaults, frmbID, _$$extend, i18n, opts, mi18n, _helpers, subtypes, $sortableFields, lastID, boxID, frmbFields, cbUl, $cbUL, processControl, $formWrap, $stageWrap, cbWrap, buttons, formActions, saveAndUpdate, nonEditableFields, prepFieldVars, loadFields, nameAttr, fieldOptions, advFields, processTypeUserAttrs, inputUserAttrs, selectUserAttrs, boolAttribute, btnStyles, numberAttribute, selectAttribute, textAttribute, requiredField, appendNewField, selectFieldOptions, cloneItem;

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
              // let {i18n, ...opts} = $.extend({}, defaults, options, true);
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
                  type: 'autocomplete',
                  className: 'autocomplete',
                  name: 'autocomplete'
                }
              }, {
                label: i18n['button'],
                attrs: {
                  type: 'button',
                  className: 'button-input',
                  name: 'button'
                }
              }, {
                label: i18n['checkbox'],
                attrs: {
                  type: 'checkbox',
                  className: 'checkbox',
                  name: 'checkbox'
                }
              }, {
                label: i18n['checkboxGroup'],
                attrs: {
                  type: 'checkbox-group',
                  className: 'checkbox-group',
                  name: 'checkbox-group'
                }
              }, {
                label: i18n['dateField'],
                attrs: {
                  type: 'date',
                  className: 'calendar',
                  name: 'date-input'
                }
              }, {
                label: i18n['fileUpload'],
                attrs: {
                  type: 'file',
                  className: 'file-input',
                  name: 'file-input'
                }
              }, {
                label: i18n['header'],
                attrs: {
                  type: 'header',
                  className: 'header'
                }
              }, {
                label: i18n['hidden'],
                attrs: {
                  type: 'hidden',
                  className: 'hidden-input',
                  name: 'hidden-input'
                }
              }, {
                label: i18n['number'],
                attrs: {
                  type: 'number',
                  className: 'number',
                  name: 'number'
                }
              }, {
                label: i18n['paragraph'],
                attrs: {
                  type: 'paragraph',
                  className: 'paragraph'
                }
              }, {
                label: i18n['radioGroup'],
                attrs: {
                  type: 'radio-group',
                  className: 'radio-group',
                  name: 'radio-group'
                }
              }, {
                label: i18n['select'],
                attrs: {
                  type: 'select',
                  className: 'select',
                  name: 'select'
                }
              }, {
                label: i18n['text'],
                attrs: {
                  type: 'text',
                  className: 'text-input',
                  name: 'text-input'
                }
              }, {
                label: i18n['textArea'],
                attrs: {
                  type: 'textarea',
                  className: 'text-area',
                  name: 'textarea'
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
              cbUl = utils.markup('ul', null, { id: boxID, className: 'frmb-control' });

              formBuilder.controls = cbUl;

              if (opts.sortableControls) {
                cbUl.classList.add('sort-enabled');
              }

              $cbUL = $(cbUl);

              // Loop through

              utils.forEach(frmbFields, function (i) {
                var $field = $('<li/>', {
                  'class': 'icon-' + frmbFields[i].attrs.className,
                  'type': frmbFields[i].type,
                  'name': frmbFields[i].className,
                  'label': frmbFields[i].label
                });

                $field.data('newFieldData', frmbFields[i]);

                var typeLabel = utils.markup('span', frmbFields[i].label);
                $field.html(typeLabel).appendTo($cbUL);
              });

              if (opts.inputSets.length) {
                $('<li/>', { 'class': 'fb-separator' }).html('<hr>').appendTo($cbUL);
                opts.inputSets.forEach(function (set) {
                  set.name = set.name || _helpers.makeClassName(set.label);
                  var $set = $('<li/>', { 'class': 'input-set-control', type: set.name });
                  $set.html(set.label).appendTo($cbUL);
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
                    prepFieldVars(header, true);
                  }
                  inputSet.fields.forEach(function (field) {
                    prepFieldVars(field, true);
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

                field.name = isNew ? nameAttr(field) : field.name || nameAttr(field);

                if (isNew && utils.inArray(field.type, ['text', 'number', 'file', 'select', 'textarea', 'autocomplete'])) {
                  field.className = 'form-control'; // backwards compatibility
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

              nameAttr = function nameAttr(field) {
                var epoch = new Date().getTime();
                return field.type + '-' + epoch;
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
                var styles = i18n['styles.btn'];
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

                  if (attribute === 'label' && utils.inArray(values.type, textArea) || attribute === 'value' && values.type === 'textarea') {
                    attributefield += '<textarea ' + utils.attrString(inputConfig) + '>' + attrVal + '</textarea>';
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
                var copyBtn = m('a', i18n.copyButton, {
                  id: lastID + '-copy',
                  className: 'copy-button btn icon-copy',
                  title: i18n.copyButtonTooltip
                });

                var liContents = m('div', [toggleBtn, copyBtn, delBtn], { className: 'field-actions' }).outerHTML;

                // Field preview Label
                liContents += '<label class="field-label">' + label + '</label>';

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

                $clone.find('[id]').each(function () {
                  this.id = this.id.replace(currentId, lastID);
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
                  document.getElementById('value-' + field.id).value = e.target.value;
                }

                _helpers.save();
              });

              // update preview to label
              $sortableFields.on('keyup change', '[name="label"]', function (e) {
                $('.field-label', $(e.target).closest('li')).text($(e.target).val());
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

              $sortableFields.on('change', '.fld-multiple', function (e) {
                var newType = e.target.checked ? 'checkbox' : 'radio';

                $(e.target).parents('.form-elements:eq(0)').find('.sortable-options input.option-selected').each(function () {
                  e.target.type = newType;
                });
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

            case 89:
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

},{"./dom":123,"./events.js":124,"./helpers.js":126,"./kc-toggle.js":127,"./polyfills.js":128,"./utils.js":129,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/asyncToGenerator":10,"babel-runtime/helpers/objectWithoutProperties":11,"babel-runtime/regenerator":15,"mi18n":119}],126:[function(require,module,exports){
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
          var $field;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $field = $(field);


                  if (!$field.hasClass('disabled-field')) {
                    (function () {
                      var fieldData = _helpers.getTypes($field);
                      var roleVals = $('.roles-field:checked', field).map(function () {
                        return this.value;
                      }).get();

                      $('[class*="fld-"]', field).each(function () {
                        var attr = this;
                        var name = utils.camelCase(attr.name);
                        fieldData[name] = attr.type === 'checkbox' ? attr.checked : attr.value;
                      });

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

                      fieldData = utils.trimObj(fieldData);
                      fieldData = utils.escapeAttrs(fieldData);

                      var multipleField = fieldData.type.match(_dom2.default.optionFieldsRegEx);

                      if (multipleField) {
                        fieldData.values = _helpers.fieldOptionData($field);
                      }

                      formData.push(fieldData);
                    })();
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

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} field DOM element
   */
  _helpers.updatePreview = function (field) {
    var fieldClass = field.attr('class');
    if (fieldClass.indexOf('ui-sortable-handle') !== -1) {
      return;
    }

    var fieldType = $(field).attr('type');
    var $prevHolder = $('.prev-holder', field);
    var previewData = {
      type: fieldType
    };
    var preview = void 0;

    $('[class*="fld-"]', field).each(function () {
      var name = utils.camelCase(this.name);
      previewData[name] = this.type === 'checkbox' ? this.checked : this.value;
    });

    var style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
    }

    if (fieldType.match(_dom2.default.optionFieldsRegEx)) {
      previewData.values = [];
      previewData.multiple = $('[name="multiple"]', field).is(':checked');

      $('.sortable-options li', field).each(function () {
        var option = {};
        option.selected = $('.option-selected', this).is(':checked');
        option.value = $('.option-value', this).val();
        option.label = $('.option-label', this).val();
        previewData.values.push(option);
      });
    }

    previewData = utils.trimObj(previewData);

    previewData.className = _helpers.classNames(field, previewData);
    $('.fld-className', field).val(previewData.className);

    field.data('fieldData', previewData);
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
    var className = field[0].querySelector('.fld-className').value;
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

      var offset = opts.stickyControls.offset || offsetDefaults;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL21pMThuL2Rpc3QvbWkxOG4ubWluLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9qcy9kb20uanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2tjLXRvZ2dsZS5qcyIsInNyYy9qcy9wb2x5ZmlsbHMuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUE0RSxLQUFLLElBQUwsQ0FBOUY7QUFDRCxPQUZELE1BRU8sSUFBSSxzQkFBTyxLQUFLLElBQUwsQ0FBUCxNQUFzQixRQUExQixFQUFvQztBQUN6QyxrQkFBVSxJQUFWLElBQWtCLFFBQVEsS0FBUixDQUFjLEtBQUssSUFBTCxDQUFkLEVBQTBCLEtBQUssSUFBTCxDQUExQixDQUFsQjtBQUNELE9BRk0sTUFFQTtBQUNMLGtCQUFVLElBQVYsSUFBa0IsS0FBSyxJQUFMLENBQWxCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBTyxTQUFQO0FBQ0QsQ0FkRDs7QUFnQkE7Ozs7O0FBS0EsUUFBUSxLQUFSLEdBQWdCLG1CQUFXO0FBQ3pCLFNBQU8sUUFBUSxVQUFmLEVBQTJCO0FBQ3pCLFlBQVEsV0FBUixDQUFvQixRQUFRLFVBQTVCO0FBQ0Q7QUFDRCxTQUFPLE9BQVA7QUFDRCxDQUxEOztBQU9BLFFBQVEsSUFBUixHQUFlO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBZjs7QUFHQSxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5czsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07IiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG1ldGEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBlYWNoICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59OyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpOyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIi8qIVxuICogbWkxOG4gLSBodHRwczovL2dpdGh1Yi5jb20vRHJhZ2dhYmxlL21pMThuXG4gKiBWZXJzaW9uOiAwLjMuMlxuICogQXV0aG9yOiBLZXZpbiBDaGFwcGVsbCA8a2V2aW4uYi5jaGFwcGVsbEBnbWFpbC5jb20+IChodHRwOi8va2V2aW4tY2hhcHBlbGwuY29tKVxuICovXG5tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIGU9e307cmV0dXJuIG4ubT10LG4uYz1lLG4ucD1cImRpc3QvXCIsbigwKX0oW2Z1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZSg0NSksdT1yKG8pLGk9ZSgzOSksZj1yKGkpLGM9ZSg0MyksYT1yKGMpLHM9ZSg0NCksbD1yKHMpLHA9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7KDAsYVtcImRlZmF1bHRcIl0pKHRoaXMsdCk7dmFyIG49e2xvY2F0aW9uOlwiYXNzZXRzL2xhbmcvXCIsbGFuZ3M6W1wiZW4tVVNcIixcImVzLUVTXCJdLGxvY2FsZTpcImVuLVVTXCIscHJlbG9hZGVkOnt9fSxlPXRoaXM7ZS5pbml0PWZ1bmN0aW9uKHQpe3JldHVybiBlLmNvbmZpZz0oMCxmW1wiZGVmYXVsdFwiXSkoe30sbix0KSxlLmxhbmdzPSgwLGZbXCJkZWZhdWx0XCJdKSh7fSxlLmNvbmZpZy5wcmVsb2FkZWQpLGUubG9jYWxlPWUuY29uZmlnLmxvY2FsZXx8ZS5jb25maWcubGFuZ3NbMF0sZS5zZXRDdXJyZW50KGUubG9jYWxlKX19cmV0dXJuKDAsbFtcImRlZmF1bHRcIl0pKHQsW3trZXk6XCJnZXRWYWx1ZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmN1cnJlbnQmJnRoaXMuY3VycmVudFt0XXx8dH19LHtrZXk6XCJtYWtlU2FmZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXtcIntcIjpcIlxcXFx7XCIsXCJ9XCI6XCJcXFxcfVwiLFwifFwiOlwiXFxcXHxcIn07cmV0dXJuIHQ9dC5yZXBsYWNlKC9cXHt8XFx9fFxcfC9nLGZ1bmN0aW9uKHQpe3JldHVybiBuW3RdfSksbmV3IFJlZ0V4cCh0LFwiZ1wiKX19LHtrZXk6XCJwdXRcIix2YWx1ZTpmdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmN1cnJlbnRbdF09bn19LHtrZXk6XCJnZXRcIix2YWx1ZTpmdW5jdGlvbih0LG4pe3ZhciBlPXRoaXMscj10aGlzLmdldFZhbHVlKHQpLG89ci5tYXRjaCgvXFx7W15cXH1dKz9cXH0vZyksaT12b2lkIDA7aWYobiYmbylpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBuP1widW5kZWZpbmVkXCI6KDAsdVtcImRlZmF1bHRcIl0pKG4pKSlmb3IodmFyIGY9MDtmPG8ubGVuZ3RoO2YrKylpPW9bZl0uc3Vic3RyaW5nKDEsb1tmXS5sZW5ndGgtMSkscj1yLnJlcGxhY2UoZS5tYWtlU2FmZShvW2ZdKSxuW2ldfHxcIlwiKTtlbHNlIHI9ci5yZXBsYWNlKC9cXHtbXlxcfV0rP1xcfS9nLG4pO3JldHVybiByfX0se2tleTpcImZyb21GaWxlXCIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHZhciBuLGU9dC5zcGxpdChcIlxcblwiKSxyPXt9LG89MDtvPGUubGVuZ3RoO28rKyluPWVbb10ubWF0Y2goL14oLis/KSAqPz0gKj8oW15cXG5dKykvKSxuJiYocltuWzFdXT1uWzJdLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKSk7cmV0dXJuIHJ9fSx7a2V5OlwicHJvY2Vzc0ZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj10aGlzLGU9dC5yZXBsYWNlKC9cXG5cXG4vZyxcIlxcblwiKTtyZXR1cm4gbi5sYW5nc1tuLmxvY2FsZV09bi5mcm9tRmlsZShlKX19LHtrZXk6XCJsb2FkTGFuZ1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyB3aW5kb3cuUHJvbWlzZShmdW5jdGlvbihlLHIpe24ubGFuZ3Nbbi5sb2NhbGVdP2Uobi5sYW5nc1tuLmxvY2FsZV0pOiFmdW5jdGlvbigpe3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdDtvLm9wZW4oXCJHRVRcIixuLmNvbmZpZy5sb2NhdGlvbit0K1wiLmxhbmdcIiwhMCksby5vbmxvYWQ9ZnVuY3Rpb24oKXt0aGlzLnN0YXR1czw9MzA0PyhuLnByb2Nlc3NGaWxlKG8ucmVzcG9uc2VUZXh0KSxlKG8ucmVzcG9uc2UpKTpyKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5vbmVycm9yPWZ1bmN0aW9uKCl7cih7c3RhdHVzOnRoaXMuc3RhdHVzLHN0YXR1c1RleHQ6by5zdGF0dXNUZXh0fSl9LG8uc2VuZCgpfSgpfSl9fSx7a2V5Olwic2V0Q3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiZW4tVVNcIixuPXRoaXMubG9hZExhbmcodCk7cmV0dXJuIHRoaXMubG9jYWxlPXQsdGhpcy5jdXJyZW50PXRoaXMubGFuZ3NbdF0sd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIix0KSxufX0se2tleTpcImdldExhbmdzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29uZmlnLmxhbmdzfX1dKSx0fSgpO25bXCJkZWZhdWx0XCJdPW5ldyBwfSxmdW5jdGlvbih0LG4pe3ZhciBlPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPWUpfSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPSFlKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9Lmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDExKSxvPWUoMzEpLHU9ZSgyNiksaT1PYmplY3QuZGVmaW5lUHJvcGVydHk7bi5mPWUoMik/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLG49dShuLCEwKSxyKGUpLG8pdHJ5e3JldHVybiBpKHQsbixlKX1jYXRjaChmKXt9aWYoXCJnZXRcImluIGV8fFwic2V0XCJpbiBlKXRocm93IFR5cGVFcnJvcihcIkFjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIVwiKTtyZXR1cm5cInZhbHVlXCJpbiBlJiYodFtuXT1lLnZhbHVlKSx0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMzIpLG89ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByKG8odCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCksbz1lKDE1KTt0LmV4cG9ydHM9ZSgyKT9mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHIuZih0LG4sbygxLGUpKX06ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0W25dPWUsdH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI0KShcIndrc1wiKSxvPWUoMTYpLHU9ZSgxKS5TeW1ib2wsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LGY9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1pJiZ1W3RdfHwoaT91Om8pKFwiU3ltYm9sLlwiK3QpKX07Zi5zdG9yZT1yfSxmdW5jdGlvbih0LG4pe3ZhciBlPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuNC4wXCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9ZSl9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hIXQoKX1jYXRjaChuKXtyZXR1cm4hMH19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgzNiksbz1lKDE4KTt0LmV4cG9ydHM9T2JqZWN0LmtleXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKCFyKHQpKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhbiBvYmplY3QhXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1lKDgpLHU9ZSg1MyksaT1lKDYpLGY9XCJwcm90b3R5cGVcIixjPWZ1bmN0aW9uKHQsbixlKXt2YXIgYSxzLGwscD10JmMuRix2PXQmYy5HLHk9dCZjLlMsZD10JmMuUCxoPXQmYy5CLGc9dCZjLlcsYj12P286b1tuXXx8KG9bbl09e30pLG09YltmXSx4PXY/cjp5P3Jbbl06KHJbbl18fHt9KVtmXTt2JiYoZT1uKTtmb3IoYSBpbiBlKXM9IXAmJngmJnZvaWQgMCE9PXhbYV0scyYmYSBpbiBifHwobD1zP3hbYV06ZVthXSxiW2FdPXYmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHhbYV0/ZVthXTpoJiZzP3UobCxyKTpnJiZ4W2FdPT1sP2Z1bmN0aW9uKHQpe3ZhciBuPWZ1bmN0aW9uKG4sZSxyKXtpZih0aGlzIGluc3RhbmNlb2YgdCl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IHQ7Y2FzZSAxOnJldHVybiBuZXcgdChuKTtjYXNlIDI6cmV0dXJuIG5ldyB0KG4sZSl9cmV0dXJuIG5ldyB0KG4sZSxyKX1yZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3JldHVybiBuW2ZdPXRbZl0sbn0obCk6ZCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD91KEZ1bmN0aW9uLmNhbGwsbCk6bCxkJiYoKGIudmlydHVhbHx8KGIudmlydHVhbD17fSkpW2FdPWwsdCZjLlImJm0mJiFtW2FdJiZpKG0sYSxsKSkpfTtjLkY9MSxjLkc9MixjLlM9NCxjLlA9OCxjLkI9MTYsYy5XPTMyLGMuVT02NCxjLlI9MTI4LHQuZXhwb3J0cz1jfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fX0sZnVuY3Rpb24odCxuKXtuLmY9e30ucHJvcGVydHlJc0VudW1lcmFibGV9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOm59fX0sZnVuY3Rpb24odCxuKXt2YXIgZT0wLHI9TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PXQ/XCJcIjp0LFwiKV9cIiwoKytlK3IpLnRvU3RyaW5nKDM2KSl9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih2b2lkIDA9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9XCJjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2ZcIi5zcGxpdChcIixcIil9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPXt9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz0hMH0sZnVuY3Rpb24odCxuKXtuLmY9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc30sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCkuZixvPWUoMyksdT1lKDcpKFwidG9TdHJpbmdUYWdcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0JiYhbyh0PWU/dDp0LnByb3RvdHlwZSx1KSYmcih0LHUse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTpufSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNCkoXCJrZXlzXCIpLG89ZSgxNik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1vKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEpLG89XCJfX2NvcmUtanNfc2hhcmVkX19cIix1PXJbb118fChyW29dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHVbdF18fCh1W3RdPXt9KX19LGZ1bmN0aW9uKHQsbil7dmFyIGU9TWF0aC5jZWlsLHI9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9yOmUpKHQpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2lmKCFyKHQpKXJldHVybiB0O3ZhciBlLG87aWYobiYmXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnRvU3RyaW5nKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC52YWx1ZU9mKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKCFuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1lKDgpLHU9ZSgyMCksaT1lKDI4KSxmPWUoNCkuZjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49by5TeW1ib2x8fChvLlN5bWJvbD11P3t9OnIuU3ltYm9sfHx7fSk7XCJfXCI9PXQuY2hhckF0KDApfHx0IGluIG58fGYobix0LHt2YWx1ZTppLmYodCl9KX19LGZ1bmN0aW9uKHQsbixlKXtuLmY9ZSg3KX0sZnVuY3Rpb24odCxuKXt2YXIgZT17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY2FsbCh0KS5zbGljZSg4LC0xKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKSxvPWUoMSkuZG9jdW1lbnQsdT1yKG8pJiZyKG8uY3JlYXRlRWxlbWVudCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB1P28uY3JlYXRlRWxlbWVudCh0KTp7fX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9IWUoMikmJiFlKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlKDMwKShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOSk7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKHQpe3JldHVyblwiU3RyaW5nXCI9PXIodCk/dC5zcGxpdChcIlwiKTpPYmplY3QodCl9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgyMCksbz1lKDEyKSx1PWUoMzcpLGk9ZSg2KSxmPWUoMyksYz1lKDE5KSxhPWUoNTcpLHM9ZSgyMiksbD1lKDY1KSxwPWUoNykoXCJpdGVyYXRvclwiKSx2PSEoW10ua2V5cyYmXCJuZXh0XCJpbltdLmtleXMoKSkseT1cIkBAaXRlcmF0b3JcIixkPVwia2V5c1wiLGg9XCJ2YWx1ZXNcIixnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxiLG0seCxPKXthKGUsbixiKTt2YXIgdyxTLF8saj1mdW5jdGlvbih0KXtpZighdiYmdCBpbiBNKXJldHVybiBNW3RdO3N3aXRjaCh0KXtjYXNlIGQ6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9O2Nhc2UgaDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9fSxFPW4rXCIgSXRlcmF0b3JcIixQPW09PWgsaz0hMSxNPXQucHJvdG90eXBlLFQ9TVtwXXx8TVt5XXx8bSYmTVttXSxGPVR8fGoobSksQT1tP1A/aihcImVudHJpZXNcIik6Rjp2b2lkIDAsST1cIkFycmF5XCI9PW4/TS5lbnRyaWVzfHxUOlQ7aWYoSSYmKF89bChJLmNhbGwobmV3IHQpKSxfIT09T2JqZWN0LnByb3RvdHlwZSYmKHMoXyxFLCEwKSxyfHxmKF8scCl8fGkoXyxwLGcpKSksUCYmVCYmVC5uYW1lIT09aCYmKGs9ITAsRj1mdW5jdGlvbigpe3JldHVybiBULmNhbGwodGhpcyl9KSxyJiYhT3x8IXYmJiFrJiZNW3BdfHxpKE0scCxGKSxjW25dPUYsY1tFXT1nLG0paWYodz17dmFsdWVzOlA/RjpqKGgpLGtleXM6eD9GOmooZCksZW50cmllczpBfSxPKWZvcihTIGluIHcpUyBpbiBNfHx1KE0sUyx3W1NdKTtlbHNlIG8oby5QK28uRioodnx8ayksbix3KTtyZXR1cm4gd319LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDExKSxvPWUoNjIpLHU9ZSgxOCksaT1lKDIzKShcIklFX1BST1RPXCIpLGY9ZnVuY3Rpb24oKXt9LGM9XCJwcm90b3R5cGVcIixhPWZ1bmN0aW9uKCl7dmFyIHQsbj1lKDMwKShcImlmcmFtZVwiKSxyPXUubGVuZ3RoLG89XCI8XCIsaT1cIj5cIjtmb3Iobi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGUoNTUpLmFwcGVuZENoaWxkKG4pLG4uc3JjPVwiamF2YXNjcmlwdDpcIix0PW4uY29udGVudFdpbmRvdy5kb2N1bWVudCx0Lm9wZW4oKSx0LndyaXRlKG8rXCJzY3JpcHRcIitpK1wiZG9jdW1lbnQuRj1PYmplY3RcIitvK1wiL3NjcmlwdFwiK2kpLHQuY2xvc2UoKSxhPXQuRjtyLS07KWRlbGV0ZSBhW2NdW3Vbcl1dO3JldHVybiBhKCl9O3QuZXhwb3J0cz1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbih0LG4pe3ZhciBlO3JldHVybiBudWxsIT09dD8oZltjXT1yKHQpLGU9bmV3IGYsZltjXT1udWxsLGVbaV09dCk6ZT1hKCksdm9pZCAwPT09bj9lOm8oZSxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDM2KSxvPWUoMTgpLmNvbmNhdChcImxlbmd0aFwiLFwicHJvdG90eXBlXCIpO24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDMpLG89ZSg1KSx1PWUoNTIpKCExKSxpPWUoMjMpKFwiSUVfUFJPVE9cIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7dmFyIGUsZj1vKHQpLGM9MCxhPVtdO2ZvcihlIGluIGYpZSE9aSYmcihmLGUpJiZhLnB1c2goZSk7Zm9yKDtuLmxlbmd0aD5jOylyKGYsZT1uW2MrK10pJiYofnUoYSxlKXx8YS5wdXNoKGUpKTtyZXR1cm4gYX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9ZSg2KX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KHIodCkpfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0NiksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNDcpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ4KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0OSksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5fX2VzTW9kdWxlPSEwLG5bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQsbil7aWYoISh0IGluc3RhbmNlb2YgbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19bi5fX2VzTW9kdWxlPSEwO3ZhciBvPWUoNDApLHU9cihvKTtuW1wiZGVmYXVsdFwiXT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXtmb3IodmFyIGU9MDtlPG4ubGVuZ3RoO2UrKyl7dmFyIHI9bltlXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksKDAsdVtcImRlZmF1bHRcIl0pKHQsci5rZXkscil9fXJldHVybiBmdW5jdGlvbihuLGUscil7cmV0dXJuIGUmJnQobi5wcm90b3R5cGUsZSksciYmdChuLHIpLG59fSgpfSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e1wiZGVmYXVsdFwiOnR9fW4uX19lc01vZHVsZT0hMDt2YXIgbz1lKDQyKSx1PXIobyksaT1lKDQxKSxmPXIoaSksYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmXCJzeW1ib2xcIj09dHlwZW9mIHVbXCJkZWZhdWx0XCJdP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZ0LmNvbnN0cnVjdG9yPT09ZltcImRlZmF1bHRcIl0/XCJzeW1ib2xcIjp0eXBlb2YgdH07bltcImRlZmF1bHRcIl09XCJmdW5jdGlvblwiPT10eXBlb2YgZltcImRlZmF1bHRcIl0mJlwic3ltYm9sXCI9PT1jKHVbXCJkZWZhdWx0XCJdKT9mdW5jdGlvbih0KXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCl9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmdC5jb25zdHJ1Y3Rvcj09PWZbXCJkZWZhdWx0XCJdP1wic3ltYm9sXCI6XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpjKHQpfX0sZnVuY3Rpb24odCxuLGUpe2UoNzApLHQuZXhwb3J0cz1lKDgpLk9iamVjdC5hc3NpZ259LGZ1bmN0aW9uKHQsbixlKXtlKDcxKTt2YXIgcj1lKDgpLk9iamVjdDt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3JldHVybiByLmRlZmluZVByb3BlcnR5KHQsbixlKX19LGZ1bmN0aW9uKHQsbixlKXtlKDc0KSxlKDcyKSxlKDc1KSxlKDc2KSx0LmV4cG9ydHM9ZSg4KS5TeW1ib2x9LGZ1bmN0aW9uKHQsbixlKXtlKDczKSxlKDc3KSx0LmV4cG9ydHM9ZSgyOCkuZihcIml0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSksbz1lKDY4KSx1PWUoNjcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24obixlLGkpe3ZhciBmLGM9cihuKSxhPW8oYy5sZW5ndGgpLHM9dShpLGEpO2lmKHQmJmUhPWUpe2Zvcig7YT5zOylpZihmPWNbcysrXSxmIT1mKXJldHVybiEwfWVsc2UgZm9yKDthPnM7cysrKWlmKCh0fHxzIGluIGMpJiZjW3NdPT09ZSlyZXR1cm4gdHx8c3x8MDtyZXR1cm4hdCYmLTF9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNTApO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7aWYocih0KSx2b2lkIDA9PT1uKXJldHVybiB0O3N3aXRjaChlKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LmNhbGwobixlKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiB0LmNhbGwobixlLHIpfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKGUscixvKXtyZXR1cm4gdC5jYWxsKG4sZSxyLG8pfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShuLGFyZ3VtZW50cyl9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTApLG89ZSgyMSksdT1lKDE0KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49cih0KSxlPW8uZjtpZihlKWZvcih2YXIgaSxmPWUodCksYz11LmYsYT0wO2YubGVuZ3RoPmE7KWMuY2FsbCh0LGk9ZlthKytdKSYmbi5wdXNoKGkpO3JldHVybiBufX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDEpLmRvY3VtZW50JiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnR9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KTt0LmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24odCl7cmV0dXJuXCJBcnJheVwiPT1yKHQpfX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoMzQpLG89ZSgxNSksdT1lKDIyKSxpPXt9O2UoNikoaSxlKDcpKFwiaXRlcmF0b3JcIiksZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7dC5wcm90b3R5cGU9cihpLHtuZXh0Om8oMSxlKX0pLHUodCxuK1wiIEl0ZXJhdG9yXCIpfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57dmFsdWU6bixkb25lOiEhdH19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCksbz1lKDUpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2Zvcih2YXIgZSx1PW8odCksaT1yKHUpLGY9aS5sZW5ndGgsYz0wO2Y+YzspaWYodVtlPWlbYysrXV09PT1uKXJldHVybiBlfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTYpKFwibWV0YVwiKSxvPWUoMTMpLHU9ZSgzKSxpPWUoNCkuZixmPTAsYz1PYmplY3QuaXNFeHRlbnNpYmxlfHxmdW5jdGlvbigpe3JldHVybiEwfSxhPSFlKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIGMoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSl9KSxzPWZ1bmN0aW9uKHQpe2kodCxyLHt2YWx1ZTp7aTpcIk9cIisgKytmLHc6e319fSl9LGw9ZnVuY3Rpb24odCxuKXtpZighbyh0KSlyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OihcInN0cmluZ1wiPT10eXBlb2YgdD9cIlNcIjpcIlBcIikrdDtpZighdSh0LHIpKXtpZighYyh0KSlyZXR1cm5cIkZcIjtpZighbilyZXR1cm5cIkVcIjtzKHQpfXJldHVybiB0W3JdLml9LHA9ZnVuY3Rpb24odCxuKXtpZighdSh0LHIpKXtpZighYyh0KSlyZXR1cm4hMDtpZighbilyZXR1cm4hMTtzKHQpfXJldHVybiB0W3JdLnd9LHY9ZnVuY3Rpb24odCl7cmV0dXJuIGEmJnkuTkVFRCYmYyh0KSYmIXUodCxyKSYmcyh0KSx0fSx5PXQuZXhwb3J0cz17S0VZOnIsTkVFRDohMSxmYXN0S2V5OmwsZ2V0V2VhazpwLG9uRnJlZXplOnZ9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgxMCksbz1lKDIxKSx1PWUoMTQpLGk9ZSgzOCksZj1lKDMyKSxjPU9iamVjdC5hc3NpZ247dC5leHBvcnRzPSFjfHxlKDkpKGZ1bmN0aW9uKCl7dmFyIHQ9e30sbj17fSxlPVN5bWJvbCgpLHI9XCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiO3JldHVybiB0W2VdPTcsci5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe25bdF09dH0pLDchPWMoe30sdClbZV18fE9iamVjdC5rZXlzKGMoe30sbikpLmpvaW4oXCJcIikhPXJ9KT9mdW5jdGlvbih0LG4pe2Zvcih2YXIgZT1pKHQpLGM9YXJndW1lbnRzLmxlbmd0aCxhPTEscz1vLmYsbD11LmY7Yz5hOylmb3IodmFyIHAsdj1mKGFyZ3VtZW50c1thKytdKSx5PXM/cih2KS5jb25jYXQocyh2KSk6cih2KSxkPXkubGVuZ3RoLGg9MDtkPmg7KWwuY2FsbCh2LHA9eVtoKytdKSYmKGVbcF09dltwXSk7cmV0dXJuIGV9OmN9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDQpLG89ZSgxMSksdT1lKDEwKTt0LmV4cG9ydHM9ZSgyKT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbih0LG4pe28odCk7Zm9yKHZhciBlLGk9dShuKSxmPWkubGVuZ3RoLGM9MDtmPmM7KXIuZih0LGU9aVtjKytdLG5bZV0pO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTQpLG89ZSgxNSksdT1lKDUpLGk9ZSgyNiksZj1lKDMpLGM9ZSgzMSksYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO24uZj1lKDIpP2E6ZnVuY3Rpb24odCxuKXtpZih0PXUodCksbj1pKG4sITApLGMpdHJ5e3JldHVybiBhKHQsbil9Y2F0Y2goZSl7fWlmKGYodCxuKSlyZXR1cm4gbyghci5mLmNhbGwodCxuKSx0W25dKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDUpLG89ZSgzNSkuZix1PXt9LnRvU3RyaW5nLGk9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93JiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcz9PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpOltdLGY9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBvKHQpfWNhdGNoKG4pe3JldHVybiBpLnNsaWNlKCl9fTt0LmV4cG9ydHMuZj1mdW5jdGlvbih0KXtyZXR1cm4gaSYmXCJbb2JqZWN0IFdpbmRvd11cIj09dS5jYWxsKHQpP2YodCk6byhyKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDMpLG89ZSgzOCksdT1lKDIzKShcIklFX1BST1RPXCIpLGk9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdD1vKHQpLHIodCx1KT90W3VdOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29uc3RydWN0b3ImJnQgaW5zdGFuY2VvZiB0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IucHJvdG90eXBlOnQgaW5zdGFuY2VvZiBPYmplY3Q/aTpudWxsfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihuLGUpe3ZhciB1LGksZj1TdHJpbmcobyhuKSksYz1yKGUpLGE9Zi5sZW5ndGg7cmV0dXJuIGM8MHx8Yz49YT90P1wiXCI6dm9pZCAwOih1PWYuY2hhckNvZGVBdChjKSx1PDU1Mjk2fHx1PjU2MzE5fHxjKzE9PT1hfHwoaT1mLmNoYXJDb2RlQXQoYysxKSk8NTYzMjB8fGk+NTczNDM/dD9mLmNoYXJBdChjKTp1OnQ/Zi5zbGljZShjLGMrMik6KHUtNTUyOTY8PDEwKSsoaS01NjMyMCkrNjU1MzYpfX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI1KSxvPU1hdGgubWF4LHU9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ9cih0KSx0PDA/byh0K24sMCk6dSh0LG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0PjA/byhyKHQpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg1MSksbz1lKDU4KSx1PWUoMTkpLGk9ZSg1KTt0LmV4cG9ydHM9ZSgzMykoQXJyYXksXCJBcnJheVwiLGZ1bmN0aW9uKHQsbil7dGhpcy5fdD1pKHQpLHRoaXMuX2k9MCx0aGlzLl9rPW59LGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdCxuPXRoaXMuX2ssZT10aGlzLl9pKys7cmV0dXJuIXR8fGU+PXQubGVuZ3RoPyh0aGlzLl90PXZvaWQgMCxvKDEpKTpcImtleXNcIj09bj9vKDAsZSk6XCJ2YWx1ZXNcIj09bj9vKDAsdFtlXSk6bygwLFtlLHRbZV1dKX0sXCJ2YWx1ZXNcIiksdS5Bcmd1bWVudHM9dS5BcnJheSxyKFwia2V5c1wiKSxyKFwidmFsdWVzXCIpLHIoXCJlbnRyaWVzXCIpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMik7cihyLlMrci5GLFwiT2JqZWN0XCIse2Fzc2lnbjplKDYxKX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMik7cihyLlMrci5GKiFlKDIpLFwiT2JqZWN0XCIse2RlZmluZVByb3BlcnR5OmUoNCkuZn0pfSxmdW5jdGlvbih0LG4pe30sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoNjYpKCEwKTtlKDMzKShTdHJpbmcsXCJTdHJpbmdcIixmdW5jdGlvbih0KXt0aGlzLl90PVN0cmluZyh0KSx0aGlzLl9pPTB9LGZ1bmN0aW9uKCl7dmFyIHQsbj10aGlzLl90LGU9dGhpcy5faTtyZXR1cm4gZT49bi5sZW5ndGg/e3ZhbHVlOnZvaWQgMCxkb25lOiEwfToodD1yKG4sZSksdGhpcy5faSs9dC5sZW5ndGgse3ZhbHVlOnQsZG9uZTohMX0pfSl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDEpLG89ZSgzKSx1PWUoMiksaT1lKDEyKSxmPWUoMzcpLGM9ZSg2MCkuS0VZLGE9ZSg5KSxzPWUoMjQpLGw9ZSgyMikscD1lKDE2KSx2PWUoNykseT1lKDI4KSxkPWUoMjcpLGg9ZSg1OSksZz1lKDU0KSxiPWUoNTYpLG09ZSgxMSkseD1lKDUpLE89ZSgyNiksdz1lKDE1KSxTPWUoMzQpLF89ZSg2NCksaj1lKDYzKSxFPWUoNCksUD1lKDEwKSxrPWouZixNPUUuZixUPV8uZixGPXIuU3ltYm9sLEE9ci5KU09OLEk9QSYmQS5zdHJpbmdpZnksTj1cInByb3RvdHlwZVwiLEM9dihcIl9oaWRkZW5cIiksTD12KFwidG9QcmltaXRpdmVcIiksUj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxXPXMoXCJzeW1ib2wtcmVnaXN0cnlcIiksRD1zKFwic3ltYm9sc1wiKSxHPXMoXCJvcC1zeW1ib2xzXCIpLEo9T2JqZWN0W05dLFU9XCJmdW5jdGlvblwiPT10eXBlb2YgRixLPXIuUU9iamVjdCxxPSFLfHwhS1tOXXx8IUtbTl0uZmluZENoaWxkLHo9dSYmYShmdW5jdGlvbigpe3JldHVybiA3IT1TKE0oe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBNKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24odCxuLGUpe3ZhciByPWsoSixuKTtyJiZkZWxldGUgSltuXSxNKHQsbixlKSxyJiZ0IT09SiYmTShKLG4scil9Ok0sQj1mdW5jdGlvbih0KXt2YXIgbj1EW3RdPVMoRltOXSk7cmV0dXJuIG4uX2s9dCxufSxWPVUmJlwic3ltYm9sXCI9PXR5cGVvZiBGLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEZ9LFk9ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0PT09SiYmWShHLG4sZSksbSh0KSxuPU8obiwhMCksbShlKSxvKEQsbik/KGUuZW51bWVyYWJsZT8obyh0LEMpJiZ0W0NdW25dJiYodFtDXVtuXT0hMSksZT1TKGUse2VudW1lcmFibGU6dygwLCExKX0pKToobyh0LEMpfHxNKHQsQyx3KDEse30pKSx0W0NdW25dPSEwKSx6KHQsbixlKSk6TSh0LG4sZSl9LEg9ZnVuY3Rpb24odCxuKXttKHQpO2Zvcih2YXIgZSxyPWcobj14KG4pKSxvPTAsdT1yLmxlbmd0aDt1Pm87KVkodCxlPXJbbysrXSxuW2VdKTtyZXR1cm4gdH0sUT1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uP1ModCk6SChTKHQpLG4pfSxYPWZ1bmN0aW9uKHQpe3ZhciBuPVIuY2FsbCh0aGlzLHQ9Tyh0LCEwKSk7cmV0dXJuISh0aGlzPT09SiYmbyhELHQpJiYhbyhHLHQpKSYmKCEobnx8IW8odGhpcyx0KXx8IW8oRCx0KXx8byh0aGlzLEMpJiZ0aGlzW0NdW3RdKXx8bil9LCQ9ZnVuY3Rpb24odCxuKXtpZih0PXgodCksbj1PKG4sITApLHQhPT1KfHwhbyhELG4pfHxvKEcsbikpe3ZhciBlPWsodCxuKTtyZXR1cm4hZXx8IW8oRCxuKXx8byh0LEMpJiZ0W0NdW25dfHwoZS5lbnVtZXJhYmxlPSEwKSxlfX0sWj1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT1UKHgodCkpLHI9W10sdT0wO2UubGVuZ3RoPnU7KW8oRCxuPWVbdSsrXSl8fG49PUN8fG49PWN8fHIucHVzaChuKTtyZXR1cm4gcn0sdHQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBuLGU9dD09PUoscj1UKGU/Rzp4KHQpKSx1PVtdLGk9MDtyLmxlbmd0aD5pOykhbyhELG49cltpKytdKXx8ZSYmIW8oSixuKXx8dS5wdXNoKERbbl0pO3JldHVybiB1fTtVfHwoRj1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBGKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciFcIik7dmFyIHQ9cChhcmd1bWVudHMubGVuZ3RoPjA/YXJndW1lbnRzWzBdOnZvaWQgMCksbj1mdW5jdGlvbihlKXt0aGlzPT09SiYmbi5jYWxsKEcsZSksbyh0aGlzLEMpJiZvKHRoaXNbQ10sdCkmJih0aGlzW0NdW3RdPSExKSx6KHRoaXMsdCx3KDEsZSkpfTtyZXR1cm4gdSYmcSYmeihKLHQse2NvbmZpZ3VyYWJsZTohMCxzZXQ6bn0pLEIodCl9LGYoRltOXSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa30pLGouZj0kLEUuZj1ZLGUoMzUpLmY9Xy5mPVosZSgxNCkuZj1YLGUoMjEpLmY9dHQsdSYmIWUoMjApJiZmKEosXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLFgsITApLHkuZj1mdW5jdGlvbih0KXtyZXR1cm4gQih2KHQpKX0pLGkoaS5HK2kuVytpLkYqIVUse1N5bWJvbDpGfSk7Zm9yKHZhciBudD1cImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzXCIuc3BsaXQoXCIsXCIpLGV0PTA7bnQubGVuZ3RoPmV0Oyl2KG50W2V0KytdKTtmb3IodmFyIG50PVAodi5zdG9yZSksZXQ9MDtudC5sZW5ndGg+ZXQ7KWQobnRbZXQrK10pO2koaS5TK2kuRiohVSxcIlN5bWJvbFwiLHtcImZvclwiOmZ1bmN0aW9uKHQpe3JldHVybiBvKFcsdCs9XCJcIik/V1t0XTpXW3RdPUYodCl9LGtleUZvcjpmdW5jdGlvbih0KXtpZihWKHQpKXJldHVybiBoKFcsdCk7dGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgc3ltYm9sIVwiKX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7cT0hMH0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7cT0hMX19KSxpKGkuUytpLkYqIVUsXCJPYmplY3RcIix7Y3JlYXRlOlEsZGVmaW5lUHJvcGVydHk6WSxkZWZpbmVQcm9wZXJ0aWVzOkgsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiQsZ2V0T3duUHJvcGVydHlOYW1lczpaLGdldE93blByb3BlcnR5U3ltYm9sczp0dH0pLEEmJmkoaS5TK2kuRiooIVV8fGEoZnVuY3Rpb24oKXt2YXIgdD1GKCk7cmV0dXJuXCJbbnVsbF1cIiE9SShbdF0pfHxcInt9XCIhPUkoe2E6dH0pfHxcInt9XCIhPUkoT2JqZWN0KHQpKX0pKSxcIkpTT05cIix7c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe2lmKHZvaWQgMCE9PXQmJiFWKHQpKXtmb3IodmFyIG4sZSxyPVt0XSxvPTE7YXJndW1lbnRzLmxlbmd0aD5vOylyLnB1c2goYXJndW1lbnRzW28rK10pO3JldHVybiBuPXJbMV0sXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKGU9biksIWUmJmIobil8fChuPWZ1bmN0aW9uKHQsbil7aWYoZSYmKG49ZS5jYWxsKHRoaXMsdCxuKSksIVYobikpcmV0dXJuIG59KSxyWzFdPW4sSS5hcHBseShBLHIpfX19KSxGW05dW0xdfHxlKDYpKEZbTl0sTCxGW05dLnZhbHVlT2YpLGwoRixcIlN5bWJvbFwiKSxsKE1hdGgsXCJNYXRoXCIsITApLGwoci5KU09OLFwiSlNPTlwiLCEwKX0sZnVuY3Rpb24odCxuLGUpe2UoMjcpKFwiYXN5bmNJdGVyYXRvclwiKX0sZnVuY3Rpb24odCxuLGUpe2UoMjcpKFwib2JzZXJ2YWJsZVwiKX0sZnVuY3Rpb24odCxuLGUpe2UoNjkpO2Zvcih2YXIgcj1lKDEpLG89ZSg2KSx1PWUoMTkpLGk9ZSg3KShcInRvU3RyaW5nVGFnXCIpLGY9W1wiTm9kZUxpc3RcIixcIkRPTVRva2VuTGlzdFwiLFwiTWVkaWFMaXN0XCIsXCJTdHlsZVNoZWV0TGlzdFwiLFwiQ1NTUnVsZUxpc3RcIl0sYz0wO2M8NTtjKyspe3ZhciBhPWZbY10scz1yW2FdLGw9cyYmcy5wcm90b3R5cGU7bCYmIWxbaV0mJm8obCxpLGEpLHVbYV09dS5BcnJheX19XSk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8XG4gICAgICAgICAgICAgIChtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG4iLCJjb25zdCBkb20gPSB7fTtcblxuZG9tLm9wdGlvbkZpZWxkcyA9IFtcbidzZWxlY3QnLFxuJ2NoZWNrYm94LWdyb3VwJyxcbidyYWRpby1ncm91cCcsXG4nYXV0b2NvbXBsZXRlJ1xuXTtcbmRvbS5vcHRpb25GaWVsZHNSZWdFeCA9IG5ldyBSZWdFeHAoYCgke2RvbS5vcHRpb25GaWVsZHMuam9pbignfCcpfSlgKTtcblxuLyoqXG4gICAqIFV0aWwgdG8gcmVtb3ZlIGNvbnRlbnRzIG9mIERPTSBPYmplY3RcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBlbGVtZW50IHdpdGggaXRzIGNoaWxkcmVuIHJlbW92ZWRcbiAgICovXG5kb20uZW1wdHkgPSAoZWxlbWVudCkgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBIaWRlIG9yIHNob3cgYW4gQXJyYXkgb3IgSFRNTENvbGxlY3Rpb24gb2YgZWxlbWVudHNcbiAqIEBwYXJhbSAge0FycmF5fSAgIGVsZW1zXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICB0ZXJtICBtYXRjaCB0ZXh0Q29udGVudCB0byB0aGlzIHRlcm1cbiAqIEBwYXJhbSAge0Jvb2xlYW59IHNob3cgIG9yIGhpZGUgZWxlbWVudHNcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIGZpbHRlcmVkIGVsZW1lbnRzXG4gKi9cbmRvbS5maWx0ZXIgPSAoZWxlbXMsIHRlcm0sIHNob3cgPSB0cnVlKSA9PiB7XG4gIGxldCBmaWx0ZXJlZEVsZW1zID0gW107XG4gIGxldCB0b2dnbGUgPSBbJ25vbmUnLCAnYmxvY2snXTtcblxuICBpZiAoc2hvdykge1xuICAgIHRvZ2dsZSA9IHRvZ2dsZS5yZXZlcnNlKCk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gZWxlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgdHh0ID0gZWxlbXNbaV0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodHh0LmluZGV4T2YodGVybS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSB0b2dnbGVbMF07XG4gICAgICBmaWx0ZXJlZEVsZW1zLnB1c2goZWxlbXNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gdG9nZ2xlWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1zO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuIiwiLyoqXG4gKiBGb3JtIEJ1aWxkZXIgZXZlbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHZhcmlvdXMgZXZlbnRzIHRvIGJlIHRyaWdnZXJcbiAqL1xuLy8gZnVuY3Rpb24gZmJFdmVudHMoKXtcbiAgY29uc3QgZXZlbnRzID0ge307XG5cbiAgZXZlbnRzLmxvYWRlZCA9IG5ldyBFdmVudCgnbG9hZGVkJyk7XG4gIGV2ZW50cy52aWV3RGF0YSA9IG5ldyBFdmVudCgndmlld0RhdGEnKTtcbiAgZXZlbnRzLnVzZXJEZWNsaW5lZCA9IG5ldyBFdmVudCgndXNlckRlY2xpbmVkJyk7XG4gIGV2ZW50cy5tb2RhbENsb3NlZCA9IG5ldyBFdmVudCgnbW9kYWxDbG9zZWQnKTtcbiAgZXZlbnRzLm1vZGFsT3BlbmVkID0gbmV3IEV2ZW50KCdtb2RhbE9wZW5lZCcpO1xuICBldmVudHMuZm9ybVNhdmVkID0gbmV3IEV2ZW50KCdmb3JtU2F2ZWQnKTtcbiAgZXZlbnRzLmZpZWxkQWRkZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkQWRkZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVtb3ZlZCA9IG5ldyBFdmVudCgnZmllbGRSZW1vdmVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbmRlcmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbmRlcmVkJyk7XG5cbi8vICAgcmV0dXJuIGV2ZW50cztcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudHM7XG4iLCJpbXBvcnQgZCBmcm9tICcuL2RvbSc7XG5yZXF1aXJlKCcuL2tjLXRvZ2dsZS5qcycpO1xucmVxdWlyZSgnLi9wb2x5ZmlsbHMuanMnKTtcbi8vIGNvbnN0IGV4dGVuZCA9IHJlcXVpcmUoJ2RlZXAtZXh0ZW5kJyk7XG5cbihmdW5jdGlvbigkKSB7XG4gIGNvbnN0IEZvcm1CdWlsZGVyID0gYXN5bmMgZnVuY3Rpb24ob3B0aW9ucywgZWxlbWVudCkge1xuICAgIGNvbnN0IGZvcm1CdWlsZGVyID0gdGhpcztcbiAgICBjb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKTtcbiAgICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuICAgIGZvcm1CdWlsZGVyLmV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzLmpzJyk7XG4gICAgZm9ybUJ1aWxkZXIudXRpbHMgPSB1dGlscztcbiAgICBmb3JtQnVpbGRlci5taTE4biA9IHJlcXVpcmUoJ21pMThuJykuZGVmYXVsdDtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIGNvbnRyb2xQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGNvbnRyb2xPcmRlcjogW1xuICAgICAgICAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2hpZGRlbicsXG4gICAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3RleHRhcmVhJ1xuICAgICAgXSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAvLyBBcnJheSBvZiBmaWVsZHMgdG8gZGlzYWJsZVxuICAgICAgZGlzYWJsZUZpZWxkczogW10sXG4gICAgICBlZGl0T25BZGQ6IGZhbHNlLFxuICAgICAgLy8gVW5lZGl0YWJsZSBmaWVsZHMgb3Igb3RoZXIgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBhcHBlYXJcbiAgICAgIC8vIGJlZm9yZSBhbmQgYWZ0ZXIgcmVndWxhciBmaWVsZHM6XG4gICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgcHJlcGVuZDogZmFsc2UsXG4gICAgICAvLyBhcnJheSBvZiBvYmplY3RzIHdpdGggZmllbGRzIHZhbHVlc1xuICAgICAgLy8gZXg6XG4gICAgICAvLyBkZWZhdWx0RmllbGRzOiBbe1xuICAgICAgLy8gICBsYWJlbDogJ0ZpcnN0IE5hbWUnLFxuICAgICAgLy8gICBuYW1lOiAnZmlyc3QtbmFtZScsXG4gICAgICAvLyAgIHJlcXVpcmVkOiAndHJ1ZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnWW91ciBmaXJzdCBuYW1lJyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9LCB7XG4gICAgICAvLyAgIGxhYmVsOiAnUGhvbmUnLFxuICAgICAgLy8gICBuYW1lOiAncGhvbmUnLFxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ0hvdyBjYW4gd2UgcmVhY2ggeW91PycsXG4gICAgICAvLyAgIHR5cGU6ICd0ZXh0J1xuICAgICAgLy8gfV0sXG4gICAgICBkZWZhdWx0RmllbGRzOiBbXSxcbiAgICAgIGlucHV0U2V0czogW10sXG4gICAgICBmaWVsZFJlbW92ZVdhcm46IGZhbHNlLFxuICAgICAgcm9sZXM6IHtcbiAgICAgICAgMTogJ0FkbWluaXN0cmF0b3InXG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB7XG4gICAgICAgIGVycm9yOiBtZXNzYWdlID0+IGNvbnNvbGUuZXJyb3IobWVzc2FnZSksXG4gICAgICAgIHN1Y2Nlc3M6IG1lc3NhZ2UgPT4gY29uc29sZS5sb2cobWVzc2FnZSksXG4gICAgICAgIHdhcm5pbmc6IG1lc3NhZ2UgPT4gY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gICAgICB9LFxuICAgICAgb25TYXZlOiB1dGlscy5ub29wLFxuICAgICAgb25DbGVhckFsbDogdXRpbHMubm9vcCxcbiAgICAgIGFjdGlvbkJ1dHRvbnM6IFt7XG4gICAgICAgIGlkOiAnY2xlYXInLFxuICAgICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kYW5nZXInLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogZSA9PiBfaGVscGVycy5jb25maXJtUmVtb3ZlQWxsKGUpXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICd2aWV3SlNPTicsXG4gICAgICAgIGlkOiAnZGF0YScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tZGVmYXVsdCcsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiBfaGVscGVycy5zaG93RGF0YSgpXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICdzYXZlJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tcHJpbWFyeSBzYXZlLXRlbXBsYXRlJyxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IG9wdHMub25TYXZlKF9oZWxwZXJzLnNhdmUoKSlcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBzb3J0YWJsZUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgIHN0aWNreUNvbnRyb2xzOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc2FibGVkQWN0aW9uQnV0dG9uczogW10sXG4gICAgICBzaG93QWN0aW9uQnV0dG9uczogdHJ1ZSxcbiAgICAgIHR5cGVVc2VyQXR0cnM6IHt9LFxuICAgICAgdHlwZVVzZXJFdmVudHM6IHt9LFxuICAgICAgcHJlZml4OiAnZm9ybS1idWlsZGVyLSdcbiAgICB9O1xuXG5cbiAgICBkZWZhdWx0cy5pMThuID0ge1xuICAgICAgbGFuZ3M6IFtcbiAgICAgICAgJ2VuLVVTJ1xuICAgICAgXSxcbiAgICAgIHByZWxvYWRlZDoge1xuICAgICAgICAnZW4tVVMnOiB7XG4gICAgICAgICAgYWRkT3B0aW9uOiAnQWRkIE9wdGlvbiArJyxcbiAgICAgICAgICBhbGxGaWVsZHNSZW1vdmVkOiAnQWxsIGZpZWxkcyB3ZXJlIHJlbW92ZWQuJyxcbiAgICAgICAgICBhbGxvd011bHRpcGxlRmlsZXM6ICdBbGxvdyB1c2VycyB0byB1cGxvYWQgbXVsdGlwbGUgZmlsZXMnLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogJ0F1dG9jb21wbGV0ZScsXG4gICAgICAgICAgYnV0dG9uOiAnQnV0dG9uJyxcbiAgICAgICAgICBjYW5ub3RCZUVtcHR5OiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHknLFxuICAgICAgICAgIGNoZWNrYm94R3JvdXA6ICdDaGVja2JveCBHcm91cCcsXG4gICAgICAgICAgY2hlY2tib3g6ICdDaGVja2JveCcsXG4gICAgICAgICAgY2hlY2tib3hlczogJ0NoZWNrYm94ZXMnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NsYXNzJyxcbiAgICAgICAgICBjbGVhckFsbE1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xlYXIgYWxsIGZpZWxkcz8nLFxuICAgICAgICAgIGNsZWFyQWxsOiAnQ2xlYXInLFxuICAgICAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdDb250ZW50JyxcbiAgICAgICAgICBjb3B5OiAnQ29weSBUbyBDbGlwYm9hcmQnLFxuICAgICAgICAgIGNvcHlCdXR0b246ICcmIzQzOycsXG4gICAgICAgICAgY29weUJ1dHRvblRvb2x0aXA6ICdDb3B5JyxcbiAgICAgICAgICBkYXRlRmllbGQ6ICdEYXRlIEZpZWxkJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbHAgVGV4dCcsXG4gICAgICAgICAgZGVzY3JpcHRpb25GaWVsZDogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICBkZXZNb2RlOiAnRGV2ZWxvcGVyIE1vZGUnLFxuICAgICAgICAgIGVkaXROYW1lczogJ0VkaXQgTmFtZXMnLFxuICAgICAgICAgIGVkaXRvclRpdGxlOiAnRm9ybSBFbGVtZW50cycsXG4gICAgICAgICAgZWRpdFhNTDogJ0VkaXQgWE1MJyxcbiAgICAgICAgICBlbmFibGVPdGhlcjogJ0VuYWJsZSAmcXVvdDtPdGhlciZxdW90OycsXG4gICAgICAgICAgZW5hYmxlT3RoZXJNc2c6ICdMZXQgdXNlcnMgdG8gZW50ZXIgYW4gdW5saXN0ZWQgb3B0aW9uJyxcbiAgICAgICAgICBmaWVsZERlbGV0ZVdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgIGZpZWxkVmFyczogJ0ZpZWxkIFZhcmlhYmxlcycsXG4gICAgICAgICAgZmllbGROb25FZGl0YWJsZTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVkaXRlZC4nLFxuICAgICAgICAgIGZpZWxkUmVtb3ZlV2FybmluZzogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBmaWVsZD8nLFxuICAgICAgICAgIGZpbGVVcGxvYWQ6ICdGaWxlIFVwbG9hZCcsXG4gICAgICAgICAgZm9ybVVwZGF0ZWQ6ICdGb3JtIFVwZGF0ZWQnLFxuICAgICAgICAgIGdldFN0YXJ0ZWQ6ICdEcmFnIGEgZmllbGQgZnJvbSB0aGUgcmlnaHQgdG8gdGhpcyBhcmVhJyxcbiAgICAgICAgICBoZWFkZXI6ICdIZWFkZXInLFxuICAgICAgICAgIGhpZGU6ICdFZGl0JyxcbiAgICAgICAgICBoaWRkZW46ICdIaWRkZW4gSW5wdXQnLFxuICAgICAgICAgIGlubGluZTogJ0lubGluZScsXG4gICAgICAgICAgaW5saW5lRGVzYzogJ0Rpc3BsYXkge3R5cGV9IGlubGluZScsXG4gICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgbGFiZWxFbXB0eTogJ0ZpZWxkIExhYmVsIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgbGltaXRSb2xlOiAnTGltaXQgYWNjZXNzIHRvIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgcm9sZXM6JyxcbiAgICAgICAgICBtYW5kYXRvcnk6ICdNYW5kYXRvcnknLFxuICAgICAgICAgIG1heGxlbmd0aDogJ01heCBMZW5ndGgnLFxuICAgICAgICAgIG1pbk9wdGlvbk1lc3NhZ2U6ICdUaGlzIGZpZWxkIHJlcXVpcmVzIGEgbWluaW11bSBvZiAyIG9wdGlvbnMnLFxuICAgICAgICAgIG11bHRpcGxlRmlsZXM6ICdNdWx0aXBsZSBGaWxlcycsXG4gICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgIG5vOiAnTm8nLFxuICAgICAgICAgIG5vRmllbGRzVG9DbGVhcjogJ1RoZXJlIGFyZSBubyBmaWVsZHMgdG8gY2xlYXInLFxuICAgICAgICAgIG51bWJlcjogJ051bWJlcicsXG4gICAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgICBvbjogJ09uJyxcbiAgICAgICAgICBvcHRpb246ICdPcHRpb24nLFxuICAgICAgICAgIG9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgICBvcHRpb25hbDogJ29wdGlvbmFsJyxcbiAgICAgICAgICBvcHRpb25MYWJlbFBsYWNlaG9sZGVyOiAnTGFiZWwnLFxuICAgICAgICAgIG9wdGlvblZhbHVlUGxhY2Vob2xkZXI6ICdWYWx1ZScsXG4gICAgICAgICAgb3B0aW9uRW1wdHk6ICdPcHRpb24gdmFsdWUgcmVxdWlyZWQnLFxuICAgICAgICAgIG90aGVyOiAnT3RoZXInLFxuICAgICAgICAgIHBhcmFncmFwaDogJ1BhcmFncmFwaCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdQbGFjZWhvbGRlcicsXG4gICAgICAgICAgcGxhY2Vob2xkZXJzOiB7XG4gICAgICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICAgICAgICAgIGxhYmVsOiAnTGFiZWwnLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICB0ZXh0YXJlYTogJycsXG4gICAgICAgICAgICBlbWFpbDogJ0VudGVyIHlvdSBlbWFpbCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzcGFjZSBzZXBhcmF0ZWQgY2xhc3NlcycsXG4gICAgICAgICAgICBwYXNzd29yZDogJ0VudGVyIHlvdXIgcGFzc3dvcmQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmV2aWV3OiAnUHJldmlldycsXG4gICAgICAgICAgcmFkaW9Hcm91cDogJ1JhZGlvIEdyb3VwJyxcbiAgICAgICAgICByYWRpbzogJ1JhZGlvJyxcbiAgICAgICAgICByZW1vdmVNZXNzYWdlOiAnUmVtb3ZlIEVsZW1lbnQnLFxuICAgICAgICAgIHJlbW92ZU9wdGlvbjogJ1JlbW92ZSBPcHRpb24nLFxuICAgICAgICAgIHJlbW92ZTogJyYjMjE1OycsXG4gICAgICAgICAgcmVxdWlyZWQ6ICdSZXF1aXJlZCcsXG4gICAgICAgICAgcmljaFRleHQ6ICdSaWNoIFRleHQgRWRpdG9yJyxcbiAgICAgICAgICByb2xlczogJ0FjY2VzcycsXG4gICAgICAgICAgcm93czogJ1Jvd3MnLFxuICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICBzZWxlY3RPcHRpb25zOiAnT3B0aW9ucycsXG4gICAgICAgICAgc2VsZWN0OiAnU2VsZWN0JyxcbiAgICAgICAgICBzZWxlY3RDb2xvcjogJ1NlbGVjdCBDb2xvcicsXG4gICAgICAgICAgc2VsZWN0aW9uc01lc3NhZ2U6ICdBbGxvdyBNdWx0aXBsZSBTZWxlY3Rpb25zJyxcbiAgICAgICAgICBzaXplOiAnU2l6ZScsXG4gICAgICAgICAgJ3NpemUueHMnOiAnRXh0cmEgU21hbGwnLFxuICAgICAgICAgICdzaXplLnNtJzogJ1NtYWxsJyxcbiAgICAgICAgICAnc2l6ZS5tJzogJ0RlZmF1bHQnLFxuICAgICAgICAgICdzaXplLmxnJzogJ0xhcmdlJyxcbiAgICAgICAgICBzdHlsZTogJ1N0eWxlJyxcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIGJ0bjoge1xuICAgICAgICAgICAgICAnZGVmYXVsdCc6ICdEZWZhdWx0JyxcbiAgICAgICAgICAgICAgZGFuZ2VyOiAnRGFuZ2VyJyxcbiAgICAgICAgICAgICAgaW5mbzogJ0luZm8nLFxuICAgICAgICAgICAgICBwcmltYXJ5OiAnUHJpbWFyeScsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgd2FybmluZzogJ1dhcm5pbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWJ0eXBlOiAnVHlwZScsXG4gICAgICAgICAgdGV4dDogJ1RleHQgRmllbGQnLFxuICAgICAgICAgIHRleHRBcmVhOiAnVGV4dCBBcmVhJyxcbiAgICAgICAgICB0b2dnbGU6ICdUb2dnbGUnLFxuICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nIScsXG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgICAgdmlld0pTT046ICd7ICB9JyxcbiAgICAgICAgICB2aWV3WE1MOiAnJmx0Oy8mZ3Q7JyxcbiAgICAgICAgICB5ZXM6ICdZZXMnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGZybWJJRCA9ICdmcm1iLScgKyAkKCd1bFtpZF49ZnJtYi1dJykubGVuZ3RoKys7XG4gICAgZm9ybUJ1aWxkZXIuZm9ybUlEID0gZnJtYklEO1xuICAgIC8vIGxldCB7aTE4biwgLi4ub3B0c30gPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHRydWUpO1xuICAgIGxldCB7aTE4biwgLi4ub3B0c30gPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHRydWUpO1xuXG4gICAgaTE4biA9IGF3YWl0IGZvcm1CdWlsZGVyLm1pMThuLmluaXQoaTE4bik7XG4gICAgY29uc3QgbWkxOG4gPSBmb3JtQnVpbGRlci5taTE4bjtcblxuICAgIGxldCBfaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycy5qcycpKG9wdHMsIGZvcm1CdWlsZGVyKTtcblxuICAgIGNvbnN0IHN1YnR5cGVzID0gX2hlbHBlcnMucHJvY2Vzc1N1YnR5cGVzKG9wdHMuc3VidHlwZXMpO1xuXG4gICAgbGV0ICRzb3J0YWJsZUZpZWxkcyA9ICQoJzx1bC8+JykuYXR0cignaWQnLCBmcm1iSUQpLmFkZENsYXNzKCdmcm1iJyk7XG5cbiAgICBmb3JtQnVpbGRlci5sYXlvdXQgPSBfaGVscGVycy5lZGl0b3JMYXlvdXQob3B0cy5jb250cm9sUG9zaXRpb24pO1xuICAgIGZvcm1CdWlsZGVyLnN0YWdlID0gJHNvcnRhYmxlRmllbGRzWzBdO1xuXG4gICAgbGV0IGxhc3RJRCA9IGZybWJJRCArICctZmxkLTEnO1xuICAgIGxldCBib3hJRCA9IGZybWJJRCArICctY29udHJvbC1ib3gnO1xuXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIGZpZWxkIG9iamVjdHMgdG8gY3ljbGUgdGhyb3VnaFxuICAgIGxldCBmcm1iRmllbGRzID0gW3tcbiAgICAgIGxhYmVsOiBpMThuWydhdXRvY29tcGxldGUnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdhdXRvY29tcGxldGUnLFxuICAgICAgICBjbGFzc05hbWU6ICdhdXRvY29tcGxldGUnLFxuICAgICAgICBuYW1lOiAnYXV0b2NvbXBsZXRlJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydidXR0b24nXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdidXR0b24taW5wdXQnLFxuICAgICAgICBuYW1lOiAnYnV0dG9uJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydjaGVja2JveCddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ2NoZWNrYm94R3JvdXAnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94LWdyb3VwJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydkYXRlRmllbGQnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2FsZW5kYXInLFxuICAgICAgICBuYW1lOiAnZGF0ZS1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsnZmlsZVVwbG9hZCddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICBjbGFzc05hbWU6ICdmaWxlLWlucHV0JyxcbiAgICAgICAgbmFtZTogJ2ZpbGUtaW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ2hlYWRlciddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2hlYWRlcicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2hlYWRlcidcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsnaGlkZGVuJ10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnaGlkZGVuLWlucHV0JyxcbiAgICAgICAgbmFtZTogJ2hpZGRlbi1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsnbnVtYmVyJ10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgbmFtZTogJ251bWJlcidcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsncGFyYWdyYXBoJ10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYWdyYXBoJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydyYWRpb0dyb3VwJ10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICBjbGFzc05hbWU6ICdyYWRpby1ncm91cCcsXG4gICAgICAgIG5hbWU6ICdyYWRpby1ncm91cCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsnc2VsZWN0J10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgbmFtZTogJ3NlbGVjdCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsndGV4dCddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjbGFzc05hbWU6ICd0ZXh0LWlucHV0JyxcbiAgICAgICAgbmFtZTogJ3RleHQtaW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ3RleHRBcmVhJ10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICBjbGFzc05hbWU6ICd0ZXh0LWFyZWEnLFxuICAgICAgICBuYW1lOiAndGV4dGFyZWEnXG4gICAgICB9XG4gICAgfV07XG5cbiAgICBmcm1iRmllbGRzID0gX2hlbHBlcnMub3JkZXJGaWVsZHMoZnJtYkZpZWxkcyk7XG5cbiAgICBpZiAob3B0cy5kaXNhYmxlRmllbGRzKSB7XG4gICAgICAvLyByZW1vdmUgZGlzYWJsZWRGaWVsZHNcbiAgICAgIGZybWJGaWVsZHMgPSBmcm1iRmllbGRzLmZpbHRlcihmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkoZmllbGQuYXR0cnMudHlwZSwgb3B0cy5kaXNhYmxlRmllbGRzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBkcmFnZ2FibGUgZmllbGRzIGZvciBmb3JtQnVpbGRlclxuICAgIGxldCBjYlVsID0gdXRpbHMubWFya3VwKCd1bCcsIG51bGwsIHtpZDogYm94SUQsIGNsYXNzTmFtZTogJ2ZybWItY29udHJvbCd9KTtcbiAgICBmb3JtQnVpbGRlci5jb250cm9scyA9IGNiVWw7XG5cbiAgICBpZiAob3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICBjYlVsLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZW5hYmxlZCcpO1xuICAgIH1cblxuICAgIGxldCAkY2JVTCA9ICQoY2JVbCk7XG5cbiAgICAvLyBMb29wIHRocm91Z2hcbiAgICB1dGlscy5mb3JFYWNoKGZybWJGaWVsZHMsIChpKSA9PiB7XG4gICAgICBsZXQgJGZpZWxkID0gJCgnPGxpLz4nLCB7XG4gICAgICAgICdjbGFzcyc6ICdpY29uLScgKyBmcm1iRmllbGRzW2ldLmF0dHJzLmNsYXNzTmFtZSxcbiAgICAgICAgJ3R5cGUnOiBmcm1iRmllbGRzW2ldLnR5cGUsXG4gICAgICAgICduYW1lJzogZnJtYkZpZWxkc1tpXS5jbGFzc05hbWUsXG4gICAgICAgICdsYWJlbCc6IGZybWJGaWVsZHNbaV0ubGFiZWxcbiAgICAgIH0pO1xuXG4gICAgICAkZmllbGQuZGF0YSgnbmV3RmllbGREYXRhJywgZnJtYkZpZWxkc1tpXSk7XG5cbiAgICAgIGxldCB0eXBlTGFiZWwgPSB1dGlscy5tYXJrdXAoJ3NwYW4nLCBmcm1iRmllbGRzW2ldLmxhYmVsKTtcbiAgICAgICRmaWVsZC5odG1sKHR5cGVMYWJlbCkuYXBwZW5kVG8oJGNiVUwpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9wdHMuaW5wdXRTZXRzLmxlbmd0aCkge1xuICAgICAgJCgnPGxpLz4nLCB7J2NsYXNzJzogJ2ZiLXNlcGFyYXRvcid9KS5odG1sKCc8aHI+JykuYXBwZW5kVG8oJGNiVUwpO1xuICAgICAgb3B0cy5pbnB1dFNldHMuZm9yRWFjaCgoc2V0KSA9PiB7XG4gICAgICAgIHNldC5uYW1lID0gc2V0Lm5hbWUgfHwgX2hlbHBlcnMubWFrZUNsYXNzTmFtZShzZXQubGFiZWwpO1xuICAgICAgICBsZXQgJHNldCA9ICQoJzxsaS8+JywgeydjbGFzcyc6ICdpbnB1dC1zZXQtY29udHJvbCcsIHR5cGU6IHNldC5uYW1lfSk7XG4gICAgICAgICRzZXQuaHRtbChzZXQubGFiZWwpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNvcnRhYmxlIGZpZWxkc1xuICAgICRzb3J0YWJsZUZpZWxkcy5zb3J0YWJsZSh7XG4gICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgIHJldmVydDogMTUwLFxuICAgICAgYmVmb3JlU3RvcDogX2hlbHBlcnMuYmVmb3JlU3RvcCxcbiAgICAgIHN0YXJ0OiBfaGVscGVycy5zdGFydE1vdmluZyxcbiAgICAgIHN0b3A6IF9oZWxwZXJzLnN0b3BNb3ZpbmcsXG4gICAgICBjYW5jZWw6ICdpbnB1dCwgc2VsZWN0LCAuZGlzYWJsZWQtZmllbGQsIC5mb3JtLWdyb3VwLCAuYnRuJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnZnJtYi1wbGFjZWhvbGRlcidcbiAgICB9KTtcblxuICAgIC8vIENvbnRyb2xCb3ggd2l0aCBkaWZmZXJlbnQgZmllbGRzXG4gICAgJGNiVUwuc29ydGFibGUoe1xuICAgICAgaGVscGVyOiAnY2xvbmUnLFxuICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgY29ubmVjdFdpdGg6ICRzb3J0YWJsZUZpZWxkcyxcbiAgICAgIGNhbmNlbDogJy5mYi1zZXBhcmF0b3InLFxuICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgcGxhY2Vob2xkZXI6ICd1aS1zdGF0ZS1oaWdobGlnaHQnLFxuICAgICAgc3RhcnQ6IF9oZWxwZXJzLnN0YXJ0TW92aW5nLFxuICAgICAgc3RvcDogX2hlbHBlcnMuc3RvcE1vdmluZyxcbiAgICAgIHJldmVydDogMTUwLFxuICAgICAgYmVmb3JlU3RvcDogX2hlbHBlcnMuYmVmb3JlU3RvcCxcbiAgICAgIGRpc3RhbmNlOiAzLFxuICAgICAgdXBkYXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgaWYgKF9oZWxwZXJzLmRvQ2FuY2VsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5pdGVtLnBhcmVudCgpWzBdID09PSAkc29ydGFibGVGaWVsZHNbMF0pIHtcbiAgICAgICAgICBwcm9jZXNzQ29udHJvbCh1aS5pdGVtKTtcbiAgICAgICAgICBfaGVscGVycy5kb0NhbmNlbCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2hlbHBlcnMuc2V0RmllbGRPcmRlcigkY2JVTCk7XG4gICAgICAgICAgX2hlbHBlcnMuZG9DYW5jZWwgPSAhb3B0cy5zb3J0YWJsZUNvbnRyb2xzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvY2Vzc0NvbnRyb2wgPSAoY29udHJvbCkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2xbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1zZXQtY29udHJvbCcpKSB7XG4gICAgICAgIGxldCBpbnB1dFNldCA9IG9wdHMuaW5wdXRTZXRzLmZpbHRlcigoc2V0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNldC5uYW1lID09PSBjb250cm9sWzBdLnR5cGU7XG4gICAgICAgIH0pWzBdO1xuICAgICAgICBpZiAoaW5wdXRTZXQuc2hvd0hlYWRlcikge1xuICAgICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnaDInLFxuICAgICAgICAgICAgICBpZDogaW5wdXRTZXQubmFtZSxcbiAgICAgICAgICAgICAgbGFiZWw6IGlucHV0U2V0LmxhYmVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIHByZXBGaWVsZFZhcnMoaGVhZGVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFNldC5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICBwcmVwRmllbGRWYXJzKGZpZWxkLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVwRmllbGRWYXJzKGNvbnRyb2wsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgJGZvcm1XcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctZm9ybS13cmFwJyxcbiAgICAgICdjbGFzcyc6ICdmb3JtLXdyYXAgZm9ybS1idWlsZGVyJyArIF9oZWxwZXJzLm1vYmlsZUNsYXNzKClcbiAgICB9KTtcblxuICAgIGZvcm1CdWlsZGVyLmVkaXRvciA9ICRmb3JtV3JhcFswXTtcblxuICAgIGxldCAkc3RhZ2VXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctc3RhZ2Utd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnc3RhZ2Utd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LnN0YWdlXG4gICAgfSk7XG5cbiAgICBsZXQgY2JXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctY2Itd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnY2Itd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LmNvbnRyb2xzXG4gICAgfSkuYXBwZW5kKCRjYlVMWzBdKTtcblxuICAgIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgICBjb25zdCBidXR0b25zID0gb3B0cy5hY3Rpb25CdXR0b25zLm1hcChfaGVscGVycy5wcm9jZXNzQWN0aW9uQnV0dG9ucyk7XG4gICAgICBjb25zdCBmb3JtQWN0aW9ucyA9IG0oJ2RpdicsIGJ1dHRvbnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZm9ybS1hY3Rpb25zIGJ0bi1ncm91cCdcbiAgICAgIH0pO1xuXG4gICAgICBjYldyYXAuYXBwZW5kKGZvcm1BY3Rpb25zKTtcbiAgICB9XG5cbiAgICAkc3RhZ2VXcmFwLmFwcGVuZCgkc29ydGFibGVGaWVsZHMsIGNiV3JhcCk7XG4gICAgJHN0YWdlV3JhcC5iZWZvcmUoJGZvcm1XcmFwKTtcbiAgICAkZm9ybVdyYXAuYXBwZW5kKCRzdGFnZVdyYXAsIGNiV3JhcCk7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAkKGVsZW1lbnQpLmFwcGVuZCgkZm9ybVdyYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGVsZW1lbnQpLnJlcGxhY2VXaXRoKCRmb3JtV3JhcCk7XG4gICAgfVxuXG4gICAgbGV0IHNhdmVBbmRVcGRhdGUgPSBfaGVscGVycy5kZWJvdW5jZShldnQgPT4ge1xuICAgICAgaWYgKGV2dCkge1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZ0LnRhcmdldC5uYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCAkZmllbGQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG4gICAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGZpZWxkKTtcbiAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSBmaWVsZCBvbiBjaGFuZ2VcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZSBibHVyIGtleXVwJywgJy5mb3JtLWVsZW1lbnRzIGlucHV0LCAuZm9ybS1lbGVtZW50cyBzZWxlY3QsIC5mb3JtLWVsZW1lbnRzIHRleHRhcmVhJywgc2F2ZUFuZFVwZGF0ZSk7XG5cbiAgICAkKCdsaScsICRjYlVMKS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGxldCAkY29udHJvbCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLnVpLXNvcnRhYmxlLWhhbmRsZScpO1xuICAgICAgX2hlbHBlcnMuc3RvcEluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgcHJvY2Vzc0NvbnRyb2woJGNvbnRyb2wpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFwcGVuZCBhbmQgcHJlcGVuZCBvcHRpb25zIGlmIG5lY2Vzc2FyeVxuICAgIGxldCBub25FZGl0YWJsZUZpZWxkcyA9ICgpID0+IHtcbiAgICAgIGxldCBjYW5jZWxBcnJheSA9IFtdO1xuICAgICAgY29uc3QgZGlzYWJsZWRGaWVsZCA9IHR5cGUgPT5cbiAgICAgIHV0aWxzLm1hcmt1cCgnbGknLCBvcHRzW3R5cGVdLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYGRpc2FibGVkLWZpZWxkIGZvcm0tJHt0eXBlfWBcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3B0cy5wcmVwZW5kICYmICEkKCcuZGlzYWJsZWQtZmllbGQuZm9ybS1wcmVwZW5kJywgJHNvcnRhYmxlRmllbGRzKS5sZW5ndGgpIHtcbiAgICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgJHNvcnRhYmxlRmllbGRzLnByZXBlbmQoZGlzYWJsZWRGaWVsZCgncHJlcGVuZCcpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuYXBwZW5kICYmICEkKCcuZGlzYWJsZWQtZmllbGQuZm9ybS0uYXBwZW5kJywgJHNvcnRhYmxlRmllbGRzKS5sZW5ndGgpIHtcbiAgICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgJHNvcnRhYmxlRmllbGRzLmFwcGVuZChkaXNhYmxlZEZpZWxkKCdhcHBlbmQnKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxBcnJheS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH1cblxuICAgICAgX2hlbHBlcnMuZGlzYWJsZWRUVC5pbml0KCk7XG4gICAgfTtcblxuICAgIGxldCBwcmVwRmllbGRWYXJzID0gZnVuY3Rpb24oJGZpZWxkLCBpc05ldyA9IGZhbHNlKSB7XG4gICAgICBsZXQgZmllbGQgPSB7fTtcbiAgICAgIGlmICgkZmllbGQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9ICRmaWVsZC5kYXRhKCduZXdGaWVsZERhdGEnKTtcbiAgICAgICAgaWYgKGZpZWxkRGF0YSkge1xuICAgICAgICAgIGZpZWxkID0gZmllbGREYXRhLmF0dHJzO1xuICAgICAgICAgIGZpZWxkLmxhYmVsID0gZmllbGREYXRhLmxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBhdHRycyA9ICRmaWVsZFswXS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIGlmICghaXNOZXcpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlcyA9ICRmaWVsZC5jaGlsZHJlbigpLm1hcCgoaW5kZXgsIGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJChlbGVtKS50ZXh0KCksXG4gICAgICAgICAgICAgICAgdmFsdWU6ICQoZWxlbSkuYXR0cigndmFsdWUnKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogQm9vbGVhbigkKGVsZW0pLmF0dHIoJ3NlbGVjdGVkJykpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGZpZWxkW2F0dHJzW2ldLm5hbWVdID0gYXR0cnNbaV0udmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZCA9IE9iamVjdC5hc3NpZ24oe30sICRmaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkLm5hbWUgPSBpc05ldyA/IG5hbWVBdHRyKGZpZWxkKSA6ICggZmllbGQubmFtZSB8fCBuYW1lQXR0cihmaWVsZCkgKTtcblxuICAgICAgaWYgKGlzTmV3ICYmIHV0aWxzLmluQXJyYXkoZmllbGQudHlwZSxcbiAgICAgICAgWyd0ZXh0JyxcbiAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAgJ2F1dG9jb21wbGV0ZSddKSkge1xuICAgICAgICBmaWVsZC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJzsgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzIHx8IGZpZWxkLmNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgbGV0IG1hdGNoID0gLyg/Ol58XFxzKWJ0bi0oLio/KSg/Olxcc3wkKS9nLmV4ZWMoZmllbGQuY2xhc3NOYW1lKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBmaWVsZC5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5lc2NhcGVBdHRycyhmaWVsZCk7XG5cbiAgICAgIGFwcGVuZE5ld0ZpZWxkKGZpZWxkLCBpc05ldyk7XG4gICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMuZmllbGRBZGRlZCk7XG4gICAgICB9XG4gICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZSBzYXZlZCBYTUwgdGVtcGxhdGUgZGF0YVxuICAgIGxldCBsb2FkRmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5nZXREYXRhKCk7XG4gICAgICBsZXQgZm9ybURhdGEgPSBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgICAgIGlmIChmb3JtRGF0YSAmJiBmb3JtRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHByZXBGaWVsZFZhcnMoZm9ybURhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgICB9IGVsc2UgaWYgKG9wdHMuZGVmYXVsdEZpZWxkcyAmJiBvcHRzLmRlZmF1bHRGaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIExvYWQgZGVmYXVsdCBmaWVsZHMgaWYgbm9uZSBhcmUgc2V0XG4gICAgICAgIG9wdHMuZGVmYXVsdEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHByZXBGaWVsZFZhcnMoZmllbGQpKTtcbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdHMucHJlcGVuZCAmJiAhb3B0cy5hcHBlbmQpIHtcbiAgICAgICAgJHN0YWdlV3JhcC5hZGRDbGFzcygnZW1wdHknKVxuICAgICAgICAuYXR0cignZGF0YS1jb250ZW50JywgaTE4bi5nZXRTdGFydGVkKTtcbiAgICAgIH1cbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcblxuICAgICAgbm9uRWRpdGFibGVGaWVsZHMoKTtcbiAgICB9O1xuXG4gICAgbGV0IG5hbWVBdHRyID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIGxldCBlcG9jaCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgcmV0dXJuIGZpZWxkLnR5cGUgKyAnLScgKyBlcG9jaDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGRhdGEgZm9yIGZpZWxkIHdpdGggb3B0aW9ucyBbc2VsZWN0LCBjaGVja2JveC1ncm91cCwgcmFkaW8tZ3JvdXBdXG4gICAgICpcbiAgICAgKiBAdG9kbyAgIHJlZmFjdG9yIHRoaXMgbmFzdHkgfmNyYXB+IGNvZGUsIGl0cyBhY3R1YWxseSBwYWluZnVsIHRvIGxvb2sgYXRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gZmllbGQgb3B0aW9ucyBtYXJrdXBcbiAgICAgKi9cbiAgICBsZXQgZmllbGRPcHRpb25zID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICBsZXQgb3B0aW9uQWN0aW9ucyA9IFtcbiAgICAgICAgICB1dGlscy5tYXJrdXAoJ2EnLCBpMThuLmFkZE9wdGlvbiwge2NsYXNzTmFtZTogJ2FkZCBhZGQtb3B0J30pXG4gICAgICAgIF07XG4gICAgICBsZXQgZmllbGRPcHRpb25zID0gW1xuICAgICAgICBgPGxhYmVsIGNsYXNzPVwiZmFsc2UtbGFiZWxcIj4ke2kxOG4uc2VsZWN0T3B0aW9uc308L2xhYmVsPmBcbiAgICAgIF07XG4gICAgICBjb25zdCBpc011bHRpcGxlID0gdmFsdWVzLm11bHRpcGxlIHx8ICh2YWx1ZXMudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJyk7XG5cbiAgICAgIGlmICghdmFsdWVzLnZhbHVlcyB8fCAhdmFsdWVzLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWVzLnZhbHVlcyA9IFsxLCAyLCAzXS5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgbGFiZWwgPSBgJHtpMThuLm9wdGlvbn0gJHtpbmRleH1gO1xuICAgICAgICAgIGxldCBvcHRpb24gPSB7XG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICB2YWx1ZTogdXRpbHMuaHlwaGVuQ2FzZShsYWJlbClcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH0pO1xuICAgICAgICB2YWx1ZXMudmFsdWVzWzBdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVuc3VyZSBvcHRpb24gZGF0YSBpcyBoYXMgYWxsIHJlcXVpcmVkIGtleXNcbiAgICAgICAgdmFsdWVzLnZhbHVlcy5mb3JFYWNoKG9wdGlvbiA9PiBPYmplY3QuYXNzaWduKHt9LCB7c2VsZWN0ZWQ6IGZhbHNlfSwgb3B0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8ZGl2IGNsYXNzPVwic29ydGFibGUtb3B0aW9ucy13cmFwXCI+Jyk7XG5cbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8b2wgY2xhc3M9XCJzb3J0YWJsZS1vcHRpb25zXCI+Jyk7XG4gICAgICB1dGlscy5mb3JFYWNoKHZhbHVlcy52YWx1ZXMsIChpKSA9PiB7XG4gICAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKHNlbGVjdEZpZWxkT3B0aW9ucyh2YWx1ZXMubmFtZSwgdmFsdWVzLnZhbHVlc1tpXSwgaXNNdWx0aXBsZSkpO1xuICAgICAgfSk7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9vbD4nKTtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKHV0aWxzLm1hcmt1cCgnZGl2Jywgb3B0aW9uQWN0aW9ucywge2NsYXNzTmFtZTogJ29wdGlvbi1hY3Rpb25zJ30pLm91dGVySFRNTCk7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICAgIHJldHVybiB1dGlscy5tYXJrdXAoJ2RpdicsIGZpZWxkT3B0aW9ucy5qb2luKCcnKSwge2NsYXNzTmFtZTogJ2Zvcm0tZ3JvdXAgZmllbGQtb3B0aW9ucyd9KS5vdXRlckhUTUw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBlZGl0YWJsZSBwcm9wZXJ0aWVzIGZvciB0aGUgZmllbGRcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHZhbHVlcyBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgYWR2YW5jZWQgZmllbGRzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgbWFya3VwIGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICAgKi9cbiAgICBsZXQgYWR2RmllbGRzID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICBsZXQgYWR2RmllbGRzID0gW107XG4gICAgICBsZXQga2V5O1xuICAgICAgbGV0IHZhbHVlRmllbGQgPSAhdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgWydoZWFkZXInLCAncGFyYWdyYXBoJywgJ2ZpbGUnXS5jb25jYXQoZC5vcHRpb25GaWVsZHMpKTtcbiAgICAgIGxldCByb2xlcyA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyB2YWx1ZXMucm9sZS5zcGxpdCgnLCcpIDogW107XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKHJlcXVpcmVkRmllbGQodmFsdWVzKSk7XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCd0b2dnbGUnLCB2YWx1ZXMsIHtmaXJzdDogaTE4bi50b2dnbGV9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElubGluZSBvcHRpb25zXG4gICAgICBpZiAodXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgWydjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgICBsZXQgbGFiZWxzID0ge1xuICAgICAgICAgIGZpcnN0OiBpMThuLmlubGluZSxcbiAgICAgICAgICBzZWNvbmQ6IG1pMThuLmdldCgnaW5saW5lRGVzYycsIHZhbHVlcy50eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKSlcbiAgICAgICAgfTtcblxuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdpbmxpbmUnLCB2YWx1ZXMsIGxhYmVscykpO1xuICAgICAgfVxuXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdsYWJlbCcsIHZhbHVlcykpO1xuXG4gICAgICB2YWx1ZXMuc2l6ZSA9IHZhbHVlcy5zaXplIHx8ICdtJztcbiAgICAgIHZhbHVlcy5zdHlsZSA9IHZhbHVlcy5zdHlsZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAgIC8vIEhlbHAgVGV4dCAvIERlc2NyaXB0aW9uIEZpZWxkXG4gICAgICBpZiAoIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsnaGVhZGVyJywgJ3BhcmFncmFwaCcsICdidXR0b24nXSkpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnZGVzY3JpcHRpb24nLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnR5cGVzW3ZhbHVlcy50eXBlXSkge1xuICAgICAgICBsZXQgb3B0aW9uRGF0YSA9IHN1YnR5cGVzW3ZhbHVlcy50eXBlXTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goc2VsZWN0QXR0cmlidXRlKCdzdWJ0eXBlJywgdmFsdWVzLCBvcHRpb25EYXRhKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYnRuU3R5bGVzKHZhbHVlcy5zdHlsZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWluJywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWF4JywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnc3RlcCcsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBQbGFjZWhvbGRlclxuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB2YWx1ZXMpKTtcblxuICAgICAgLy8gVGV4dEFyZWEgUm93cyBBdHRyaWJ1dGVcbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ3Jvd3MnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xhc3NcbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2NsYXNzTmFtZScsIHZhbHVlcykpO1xuXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCduYW1lJywgdmFsdWVzKSk7XG5cbiAgICAgIGlmICh2YWx1ZUZpZWxkKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGxldCBsYWJlbHMgPSB7XG4gICAgICAgICAgZmlyc3Q6IGkxOG4ubXVsdGlwbGVGaWxlcyxcbiAgICAgICAgICBzZWNvbmQ6IGkxOG4uYWxsb3dNdWx0aXBsZUZpbGVzXG4gICAgICAgIH07XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCBsYWJlbHMpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJvbGVzRGlzcGxheSA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCInIDogJyc7XG4gICAgICBsZXQgYXZhaWxhYmxlUm9sZXMgPSBbXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYXZhaWxhYmxlLXJvbGVzXCIgJHtyb2xlc0Rpc3BsYXl9PmBcbiAgICAgIF07XG4gICAgICBmb3IgKGtleSBpbiBvcHRzLnJvbGVzKSB7XG4gICAgICAgIGlmIChvcHRzLnJvbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgY2hlY2tlZCA9IHV0aWxzLmluQXJyYXkoa2V5LCByb2xlcykgPyAnY2hlY2tlZCcgOiAnJztcbiAgICAgICAgICBsZXQgcm9sZUlkID0gYGZsZC0ke2xhc3RJRH0tcm9sZXMtJHtrZXl9YDtcbiAgICAgICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJvbGVzW11cIiB2YWx1ZT1cIiR7a2V5fVwiIGlkPVwiJHtyb2xlSWR9XCIgJHtjaGVja2VkfSBjbGFzcz1cInJvbGVzLWZpZWxkXCIgLz4gPGxhYmVsIGZvcj1cIiR7cm9sZUlkfVwiPiR7b3B0cy5yb2xlc1trZXldfTwvbGFiZWw+PGJyLz5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKCc8L2Rpdj4nKTtcblxuICAgICAgbGV0IGFjY2Vzc0xhYmVscyA9IHtmaXJzdDogaTE4bi5yb2xlcywgc2Vjb25kOiBpMThuLmxpbWl0Um9sZSwgY29udGVudDogYXZhaWxhYmxlUm9sZXMuam9pbignJyl9O1xuXG4gICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdhY2Nlc3MnLCB2YWx1ZXMsIGFjY2Vzc0xhYmVscykpO1xuXG4gICAgICBpZiAodmFsdWVzLnR5cGUubWF0Y2goLyhjaGVja2JveC1ncm91cHxyYWRpby1ncm91cCkvKSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdvdGhlcicsIHZhbHVlcywge2ZpcnN0OiBpMThuLmVuYWJsZU90aGVyLCBzZWNvbmQ6IGkxOG4uZW5hYmxlT3RoZXJNc2d9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIHtmaXJzdDogJyAnLCBzZWNvbmQ6IGkxOG4uc2VsZWN0aW9uc01lc3NhZ2V9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZS5tYXRjaChkLm9wdGlvbkZpZWxkc1JlZ0V4KSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChmaWVsZE9wdGlvbnModmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ3RleHQnLCAndGV4dGFyZWEnXSkpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXhsZW5ndGgnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIGN1c3RvbSBhdHRyaWJ1dGVzIGFzIGRlZmluZWQgaW4gdHlwZVVzZXJBdHRycyBvcHRpb25cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHByb2Nlc3NUeXBlVXNlckF0dHJzKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0sIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWR2RmllbGRzLmpvaW4oJycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdHlwZVVzZXJBdHRyc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gdHlwZVVzZXJBdHRyIG9wdGlvblxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICAgIGZpZWxkIGF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICBtYXJrdXAgZm9yIGN1c3RvbSB1c2VyIGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9jZXNzVHlwZVVzZXJBdHRycyh0eXBlVXNlckF0dHIsIHZhbHVlcykge1xuICAgICAgbGV0IGFkdkZpZWxkID0gW107XG5cbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiB0eXBlVXNlckF0dHIpIHtcbiAgICAgICAgaWYgKHR5cGVVc2VyQXR0ci5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgbGV0IG9yaWcgPSBpMThuW2F0dHJpYnV0ZV07XG4gICAgICAgICAgbGV0IG9yaWdWYWx1ZSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlO1xuICAgICAgICAgIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgfHwgJyc7XG5cbiAgICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWwpIHtcbiAgICAgICAgICAgIGkxOG5bYXR0cmlidXRlXSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLmxhYmVsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5vcHRpb25zKSB7XG4gICAgICAgICAgICBhZHZGaWVsZC5wdXNoKHNlbGVjdFVzZXJBdHRycyhhdHRyaWJ1dGUsIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkdkZpZWxkLnB1c2goaW5wdXRVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkxOG5bYXR0cmlidXRlXSA9IG9yaWc7XG4gICAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFkdkZpZWxkLmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRleHQgaW5wdXQgdmFsdWUgZm9yIGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgYWxzbyBrbm93biBhcyB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIGlucHV0IG1hcmt1cFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlucHV0VXNlckF0dHJzKG5hbWUsIGF0dHJzKSB7XG4gICAgICBsZXQgdGV4dEF0dHJzID0ge1xuICAgICAgICAgIGlkOiBuYW1lICsgJy0nICsgbGFzdElELFxuICAgICAgICAgIHRpdGxlOiBhdHRycy5kZXNjcmlwdGlvbiB8fCBhdHRycy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBhdHRycy50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgICBjbGFzc05hbWU6IFtgZmxkLSR7bmFtZX1gXVxuICAgICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3RleHRBdHRycy5pZH1cIj4ke2kxOG5bbmFtZV19PC9sYWJlbD5gO1xuXG4gICAgICBpZiAoIXV0aWxzLmluQXJyYXkodGV4dEF0dHJzLnR5cGUsIFsnY2hlY2tib3gnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgICAgdGV4dEF0dHJzLmNsYXNzTmFtZS5wdXNoKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgIH1cblxuICAgICAgdGV4dEF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHRleHRBdHRycyk7XG4gICAgICBsZXQgdGV4dElucHV0ID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodGV4dEF0dHJzKX0+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3RleHRJbnB1dH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGlucHV0IGZvciBtdWx0aXBsZSBjaG9pY2UgdXNlciBhdHRyaWJ1dGVzXG4gICAgICogQHRvZG8gIHJlcGxhY2Ugd2l0aCBzZWxlY3RBdHRyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgIHNlbGVjdCBtYXJrdXBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZWxlY3RVc2VyQXR0cnMobmFtZSwgb3B0aW9ucykge1xuICAgICAgbGV0IG9wdGlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5tYXAodmFsID0+IHtcbiAgICAgICAgbGV0IGF0dHJzID0ge3ZhbHVlOiB2YWx9O1xuICAgICAgICBpZiAodmFsID09PSBvcHRpb25zLnZhbHVlKSB7XG4gICAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4ke29wdGlvbnMub3B0aW9uc1t2YWxdfTwvb3B0aW9uPmA7XG4gICAgICB9KTtcbiAgICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgICAgaWQ6IG5hbWUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgIHRpdGxlOiBvcHRpb25zLmRlc2NyaXB0aW9uIHx8IG9wdGlvbnMubGFiZWwgfHwgbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHtuYW1lfSBmb3JtLWNvbnRyb2xgXG4gICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7aTE4bltuYW1lXX08L2xhYmVsPmA7XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihwcm9wID0+IHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5pbkFycmF5KHByb3AsIFsndmFsdWUnLCAnb3B0aW9ucycsICdsYWJlbCddKTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBzZWxlY3RBdHRyc1thdHRyXSA9IG9wdGlvbnNbYXR0cl07XG4gICAgICB9KTtcblxuICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7b3B0aXMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgbGV0IGJvb2xBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZXMsIGxhYmVscykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVtuYW1lXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbCA9ICh0eHQpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGFiZWwgZm9yPVwiJHtuYW1lfS0ke2xhc3RJRH1cIj4ke3R4dH08L2xhYmVsPmA7XG4gICAgICB9O1xuICAgICAgbGV0IGNoZWNrZWQgPSAodmFsdWVzW25hbWVdICE9PSB1bmRlZmluZWQgPyAnY2hlY2tlZCcgOiAnJyk7XG4gICAgICBsZXQgaW5wdXQgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZmxkLSR7bmFtZX1cIiBuYW1lPVwiJHtuYW1lfVwiIHZhbHVlPVwidHJ1ZVwiICR7Y2hlY2tlZH0gaWQ9XCIke25hbWV9LSR7bGFzdElEfVwiLz4gYDtcbiAgICAgIGxldCBsZWZ0ID0gW107XG4gICAgICBsZXQgcmlnaHQgPSBbXG4gICAgICAgIGlucHV0XG4gICAgICBdO1xuXG4gICAgICBpZiAobGFiZWxzLmZpcnN0KSB7XG4gICAgICAgIGxlZnQudW5zaGlmdChsYWJlbChsYWJlbHMuZmlyc3QpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhYmVscy5zZWNvbmQpIHtcbiAgICAgICAgcmlnaHQucHVzaChsYWJlbChsYWJlbHMuc2Vjb25kKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYWJlbHMuY29udGVudCkge1xuICAgICAgICByaWdodC5wdXNoKGxhYmVscy5jb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmlnaHQudW5zaGlmdCgnPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4nKTtcbiAgICAgIHJpZ2h0LnB1c2goJzwvZGl2PicpO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGVmdC5jb25jYXQocmlnaHQpLmpvaW4oJycpfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIGxldCBidG5TdHlsZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICBsZXQgc3R5bGVzID0gaTE4blsnc3R5bGVzLmJ0biddO1xuICAgICAgICBsZXQgc3R5bGVGaWVsZCA9ICcnO1xuXG4gICAgICBpZiAoc3R5bGVzKSB7XG4gICAgICAgIGxldCBzdHlsZUxhYmVsID0gYDxsYWJlbD4ke2kxOG4uc3R5bGV9PC9sYWJlbD5gO1xuICAgICAgICBzdHlsZUZpZWxkICs9IGA8aW5wdXQgdmFsdWU9XCIke3N0eWxlfVwiIG5hbWU9XCJzdHlsZVwiIHR5cGU9XCJoaWRkZW5cIiBjbGFzcz1cImJ0bi1zdHlsZVwiPmA7XG4gICAgICAgIHN0eWxlRmllbGQgKz0gJzxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj4nO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBsZXQgY2xhc3NMaXN0ID0gWydidG4teHMnLCAnYnRuJywgYGJ0bi0ke2VsZW1lbnR9YF07XG4gICAgICAgICAgaWYgKHN0eWxlID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QucHVzaCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdHlsZUZpZWxkICs9IGA8YnV0dG9uIHZhbHVlPVwiJHtlbGVtZW50fVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7Y2xhc3NMaXN0LmpvaW4oJyAnKX1cIj4ke2kxOG4uc3R5bGVzLmJ0bltlbGVtZW50XX08L2J1dHRvbj5gO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdHlsZUZpZWxkICs9ICc8L2Rpdj4nO1xuXG4gICAgICAgIHN0eWxlRmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc3R5bGUtd3JhcFwiPiR7c3R5bGVMYWJlbH0gJHtzdHlsZUZpZWxkfTwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZUZpZWxkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBudW1iZXIgYXR0cmlidXRlIHRvIGEgZmllbGQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gbWFya3VwIGZvciBudW1iZXIgYXR0cmlidXRlXG4gICAgICovXG4gICAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgYXR0clZhbCA9IHZhbHVlc1thdHRyaWJ1dGVdO1xuICAgICAgbGV0IGF0dHJMYWJlbCA9IGkxOG5bYXR0cmlidXRlXSB8fCBhdHRyaWJ1dGU7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBpMThuLnBsYWNlaG9sZGVyc1thdHRyaWJ1dGVdO1xuICAgICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgdmFsdWU6IGF0dHJWYWwsXG4gICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgbWluOiAnMCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2xhc3RJRH1gXG4gICAgICB9O1xuICAgICAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGA8aW5wdXQgJHt1dGlscy5hdHRyU3RyaW5nKHV0aWxzLnRyaW1PYmooaW5wdXRDb25maWcpKX0+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke251bWJlckF0dHJpYnV0ZX08L2Rpdj5gO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCI+PGxhYmVsIGZvcj1cIiR7aW5wdXRDb25maWcuaWR9XCI+JHthdHRyTGFiZWx9PC9sYWJlbD4gJHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2VsZWN0QXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGUgIGF0dHJpYnV0ZSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgIGFrYSBhdHRyc1xuICAgICAqIEBwYXJhbSAge0FycmF5fSBvcHRpb25EYXRhICBzZWxlY3QgZmllbGQgb3B0aW9uIGRhdGFcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgc2VsZWN0IGlucHV0IG1ha3J1cFxuICAgICAqL1xuICAgIGxldCBzZWxlY3RBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcywgb3B0aW9uRGF0YSkge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxlY3RPcHRpb25zID0gb3B0aW9uRGF0YS5tYXAoKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBsYWJlbDogYCR7aTE4bi5vcHRpb259ICR7aX1gLFxuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSwgb3B0aW9uKTtcbiAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWVzW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgICBvcHRpb25BdHRycy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8b3B0aW9uICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKG9wdGlvbkF0dHJzKSl9PiR7b3B0aW9uQXR0cnMubGFiZWx9PC9vcHRpb24+YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IHNlbGVjdEF0dHJzID0ge1xuICAgICAgICAgIGlkOiBhdHRyaWJ1dGUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYFxuICAgICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7aTE4blthdHRyaWJ1dGVdIHx8IHV0aWxzLmNhcGl0YWxpemUoYXR0cmlidXRlKX08L2xhYmVsPmA7XG4gICAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtzZWxlY3RPcHRpb25zLmpvaW4oJycpfTwvc2VsZWN0PmA7XG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtzZWxlY3R9PC9kaXY+YDtcblxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke3NlbGVjdEF0dHJzLm5hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHNvbWUgdGV4dCBpbnB1dHMgZm9yIGZpZWxkIGF0dHJpYnV0ZXMsICoqd2lsbCBiZSByZXBsYWNlZCoqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBsZXQgdGV4dEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGxhY2Vob2xkZXJGaWVsZHMgPSBbXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICdhdXRvY29tcGxldGUnXG4gICAgICBdO1xuXG4gICAgICBsZXQgbm9OYW1lID0gW1xuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ3BhcmFncmFwaCdcbiAgICAgIF07XG5cbiAgICAgIGxldCB0ZXh0QXJlYSA9IFsncGFyYWdyYXBoJ107XG5cbiAgICAgIGxldCBhdHRyVmFsID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgICBsZXQgYXR0ckxhYmVsID0gaTE4blthdHRyaWJ1dGVdO1xuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCB0ZXh0QXJlYSkpIHtcbiAgICAgICAgYXR0ckxhYmVsID0gaTE4bi5jb250ZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VidHlwZXMuaGVhZGVyKSB7XG4gICAgICAgIG5vTmFtZSA9IG5vTmFtZS5jb25jYXQoc3VidHlwZXMuaGVhZGVyKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHBsYWNlaG9sZGVycyA9IGkxOG4ucGxhY2Vob2xkZXJzO1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgICBsZXQgYXR0cmlidXRlZmllbGQgPSAnJztcbiAgICAgIGxldCBub01ha2VBdHRyID0gW107XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBwbGFjZWhvbGRlciBhdHRyaWJ1dGVcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdwbGFjZWhvbGRlcicgJiYgIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHBsYWNlaG9sZGVyRmllbGRzKSkge1xuICAgICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBuYW1lIGF0dHJpYnV0ZVxuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ25hbWUnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vTmFtZSkpIHtcbiAgICAgICAgbm9NYWtlQXR0ci5wdXNoKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vTWFrZUF0dHIuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2xhc3RJRH1gXG4gICAgICAgIH07XG4gICAgICAgIGxldCBhdHRyaWJ1dGVMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtpbnB1dENvbmZpZy5pZH1cIj4ke2F0dHJMYWJlbH08L2xhYmVsPmA7XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCB0ZXh0QXJlYSkgfHwgKGF0dHJpYnV0ZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykpIHtcbiAgICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPHRleHRhcmVhICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PiR7YXR0clZhbH08L3RleHRhcmVhPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXRDb25maWcudmFsdWUgPSBhdHRyVmFsO1xuICAgICAgICAgIGlucHV0Q29uZmlnLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgYXR0cmlidXRlZmllbGQgKz0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT5gO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7YXR0cmlidXRlZmllbGR9PC9kaXY+YDtcblxuICAgICAgICBsZXQgdmlzaWJpbGl0eSA9ICdibG9jayc7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICB2aXNpYmlsaXR5ID0gdmFsdWVzLnN1YnR5cGUgJiYgdmFsdWVzLnN1YnR5cGUgPT09ICdxdWlsbCcgJiYgJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0cmlidXRlZmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHthdHRyaWJ1dGV9LXdyYXBcIiBzdHlsZT1cImRpc3BsYXk6ICR7dmlzaWJpbGl0eX1cIj4ke2F0dHJpYnV0ZUxhYmVsfSAke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlZmllbGQ7XG4gICAgfTtcblxuICAgIGxldCByZXF1aXJlZEZpZWxkID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICBsZXQgbm9SZXF1aXJlID0gW1xuICAgICAgICAgICdoZWFkZXInLFxuICAgICAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgICAgICdidXR0b24nXG4gICAgICAgIF07XG4gICAgICBsZXQgbm9NYWtlID0gW107XG4gICAgICBsZXQgcmVxdWlyZUZpZWxkID0gJyc7XG5cbiAgICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBub1JlcXVpcmUpKSB7XG4gICAgICAgIG5vTWFrZS5wdXNoKHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKCFub01ha2Uuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICAgIHJlcXVpcmVGaWVsZCA9IGJvb2xBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdmFsdWVzLCB7Zmlyc3Q6IGkxOG4ucmVxdWlyZWR9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcXVpcmVGaWVsZDtcbiAgICB9O1xuXG4gICAgLy8gQXBwZW5kIHRoZSBuZXcgZmllbGQgdG8gdGhlIGVkaXRvclxuICAgIGxldCBhcHBlbmROZXdGaWVsZCA9IGZ1bmN0aW9uKHZhbHVlcywgaXNOZXcgPSB0cnVlKSB7XG4gICAgICBsZXQgdHlwZSA9IHZhbHVlcy50eXBlIHx8ICd0ZXh0JztcbiAgICAgIGxldCBsYWJlbCA9IHZhbHVlcy5sYWJlbCB8fCBpMThuW3R5cGVdIHx8IGkxOG4ubGFiZWw7XG4gICAgICBsZXQgZGVsQnRuID0gbSgnYScsIGkxOG4ucmVtb3ZlLCB7XG4gICAgICAgICAgaWQ6ICdkZWxfJyArIGxhc3RJRCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdkZWwtYnV0dG9uIGJ0biBkZWxldGUtY29uZmlybScsXG4gICAgICAgICAgdGl0bGU6IGkxOG4ucmVtb3ZlTWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgIGxldCB0b2dnbGVCdG4gPSBtKCdhJywgbnVsbCwge1xuICAgICAgICBpZDogbGFzdElEICsgJy1lZGl0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAndG9nZ2xlLWZvcm0gYnRuIGljb24tcGVuY2lsJyxcbiAgICAgICAgdGl0bGU6IGkxOG4uaGlkZVxuICAgICAgfSk7XG4gICAgICBsZXQgY29weUJ0biA9IG0oJ2EnLCBpMThuLmNvcHlCdXR0b24sIHtcbiAgICAgICAgaWQ6IGxhc3RJRCArICctY29weScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NvcHktYnV0dG9uIGJ0biBpY29uLWNvcHknLFxuICAgICAgICB0aXRsZTogaTE4bi5jb3B5QnV0dG9uVG9vbHRpcFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaUNvbnRlbnRzID0gbShcbiAgICAgICAgJ2RpdicsIFt0b2dnbGVCdG4sIGNvcHlCdG4sIGRlbEJ0bl0sIHtjbGFzc05hbWU6ICdmaWVsZC1hY3Rpb25zJ31cbiAgICAgICkub3V0ZXJIVE1MO1xuXG4gICAgICAvLyBGaWVsZCBwcmV2aWV3IExhYmVsXG4gICAgICBsaUNvbnRlbnRzICs9IGA8bGFiZWwgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPiR7bGFiZWx9PC9sYWJlbD5gO1xuXG4gICAgICBpZiAodmFsdWVzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICAgIHRvb2x0aXA6IHZhbHVlcy5kZXNjcmlwdGlvblxuICAgICAgICB9O1xuICAgICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4/PC9zcGFuPmA7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXF1aXJlZERpc3BsYXkgPSB2YWx1ZXMucmVxdWlyZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmlubGluZVwiJyA6ICcnO1xuICAgICAgbGlDb250ZW50cyArPSBgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiICR7cmVxdWlyZWREaXNwbGF5fT4gKjwvc3Bhbj5gO1xuXG4gICAgICBsaUNvbnRlbnRzICs9IG0oJ2RpdicsICcnLCB7Y2xhc3NOYW1lOiAncHJldi1ob2xkZXInfSkub3V0ZXJIVE1MO1xuICAgICAgbGlDb250ZW50cyArPSBgPGRpdiBpZD1cIiR7bGFzdElEfS1ob2xkZXJcIiBjbGFzcz1cImZybS1ob2xkZXJcIj5gO1xuICAgICAgbGlDb250ZW50cyArPSAnPGRpdiBjbGFzcz1cImZvcm0tZWxlbWVudHNcIj4nO1xuXG4gICAgICBsaUNvbnRlbnRzICs9IGFkdkZpZWxkcyh2YWx1ZXMpO1xuICAgICAgbGlDb250ZW50cyArPSBtKCdhJywgaTE4bi5jbG9zZSwge2NsYXNzTmFtZTogJ2Nsb3NlLWZpZWxkJ30pLm91dGVySFRNTDtcblxuICAgICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcbiAgICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XG5cbiAgICAgIGxldCBmaWVsZCA9IG0oJ2xpJywgbGlDb250ZW50cywge1xuICAgICAgICAgICdjbGFzcyc6IHR5cGUgKyAnLWZpZWxkIGZvcm0tZmllbGQnLFxuICAgICAgICAgICd0eXBlJzogdHlwZSxcbiAgICAgICAgICBpZDogbGFzdElEXG4gICAgICAgIH0pO1xuICAgICAgbGV0ICRsaSA9ICQoZmllbGQpO1xuXG4gICAgICAkbGkuZGF0YSgnZmllbGREYXRhJywge2F0dHJzOiB2YWx1ZXN9KTtcblxuICAgICAgaWYgKHR5cGVvZiBfaGVscGVycy5zdG9wSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoJz4gbGknLCAkc29ydGFibGVGaWVsZHMpLmVxKF9oZWxwZXJzLnN0b3BJbmRleCkuYmVmb3JlKCRsaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc29ydGFibGVGaWVsZHMuYXBwZW5kKCRsaSk7XG4gICAgICB9XG5cbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJGxpKVxuICAgICAgLnNvcnRhYmxlKHt1cGRhdGU6ICgpID0+IF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKX0pO1xuXG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRsaSk7XG5cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdICYmIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQpIHtcbiAgICAgICAgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmFkZChmaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmVkaXRPbkFkZCAmJiBpc05ldykge1xuICAgICAgICBfaGVscGVycy5jbG9zZUFsbEVkaXQoKTtcbiAgICAgICAgX2hlbHBlcnMudG9nZ2xlRWRpdChsYXN0SUQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgbGFzdElEID0gX2hlbHBlcnMuaW5jcmVtZW50SWQobGFzdElEKTtcbiAgICB9O1xuXG4gICAgLy8gU2VsZWN0IGZpZWxkIGh0bWwsIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZVxuICAgIGxldCBzZWxlY3RGaWVsZE9wdGlvbnMgPSBmdW5jdGlvbihuYW1lLCBvcHRpb25EYXRhLCBtdWx0aXBsZVNlbGVjdCkge1xuICAgICAgbGV0IG9wdGlvbklucHV0VHlwZSA9IHtcbiAgICAgICAgICBzZWxlY3RlZDogKG11bHRpcGxlU2VsZWN0ID8gJ2NoZWNrYm94JyA6ICdyYWRpbycpXG4gICAgICAgIH07XG4gICAgICBsZXQgb3B0aW9uRGF0YU9yZGVyID0gW1xuICAgICAgICAndmFsdWUnLFxuICAgICAgICAnbGFiZWwnLFxuICAgICAgICAnc2VsZWN0ZWQnXG4gICAgICBdO1xuICAgICAgbGV0IG9wdGlvbklucHV0cyA9IFtdO1xuICAgICAgbGV0IG9wdGlvblRlbXBsYXRlID0ge3NlbGVjdGVkOiBmYWxzZSwgbGFiZWw6ICcnLCB2YWx1ZTogJyd9O1xuXG4gICAgICBvcHRpb25EYXRhID0gT2JqZWN0LmFzc2lnbihvcHRpb25UZW1wbGF0ZSwgb3B0aW9uRGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSBvcHRpb25EYXRhT3JkZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IHByb3AgPSBvcHRpb25EYXRhT3JkZXJbaV07XG4gICAgICAgIGlmIChvcHRpb25EYXRhLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgICAgdHlwZTogb3B0aW9uSW5wdXRUeXBlW3Byb3BdIHx8ICd0ZXh0JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdvcHRpb24tJyArIHByb3AsXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uRGF0YVtwcm9wXSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUgKyAnLW9wdGlvbidcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGkxOG4ucGxhY2Vob2xkZXJzW3Byb3BdKSB7XG4gICAgICAgICAgICBhdHRycy5wbGFjZWhvbGRlciA9IGkxOG4ucGxhY2Vob2xkZXJzW3Byb3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9wID09PSAnc2VsZWN0ZWQnICYmIG9wdGlvbkRhdGEuc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGF0dHJzLmNoZWNrZWQgPSBvcHRpb25EYXRhLnNlbGVjdGVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9wdGlvbklucHV0cy5wdXNoKHV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBhdHRycykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCByZW1vdmVBdHRycyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAncmVtb3ZlIGJ0bicsXG4gICAgICAgIHRpdGxlOiBpMThuLnJlbW92ZU1lc3NhZ2VcbiAgICAgIH07XG4gICAgICBvcHRpb25JbnB1dHMucHVzaCh1dGlscy5tYXJrdXAoJ2EnLCBpMThuLnJlbW92ZSwgcmVtb3ZlQXR0cnMpKTtcblxuICAgICAgbGV0IGZpZWxkID0gdXRpbHMubWFya3VwKCdsaScsIG9wdGlvbklucHV0cyk7XG5cbiAgICAgIHJldHVybiBmaWVsZC5vdXRlckhUTUw7XG4gICAgfTtcblxuICAgIGxldCBjbG9uZUl0ZW0gPSBmdW5jdGlvbiBjbG9uZUl0ZW0oY3VycmVudEl0ZW0pIHtcbiAgICAgIGxldCBjdXJyZW50SWQgPSBjdXJyZW50SXRlbS5hdHRyKCdpZCcpO1xuICAgICAgbGV0IHR5cGUgPSBjdXJyZW50SXRlbS5hdHRyKCd0eXBlJyk7XG4gICAgICBsZXQgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxldCBjbG9uZU5hbWUgPSB0eXBlICsgJy0nICsgdHM7XG4gICAgICBsZXQgJGNsb25lID0gY3VycmVudEl0ZW0uY2xvbmUoKTtcblxuICAgICAgJGNsb25lLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkLnJlcGxhY2UoY3VycmVudElkLCBsYXN0SUQpO1xuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5maW5kKCdbZm9yXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuZ2V0QXR0cmlidXRlKCdmb3InKS5yZXBsYWNlKGN1cnJlbnRJZCwgbGFzdElEKSk7XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ2U6bm90KC5mb3JtLWVsZW1lbnRzKScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGV0IG5ld05hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCAobmV3TmFtZS5sYXN0SW5kZXhPZignLScpICsgMSkpO1xuICAgICAgICAgIG5ld05hbWUgPSBuZXdOYW1lICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5ld05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAkY2xvbmUuZmluZCgnLmZvcm0tZWxlbWVudHMnKS5maW5kKCc6aW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5zdWJzdHJpbmcoMCwgKG5ld1ZhbC5sYXN0SW5kZXhPZignLScpICsgMSkpO1xuICAgICAgICAgIG5ld1ZhbCA9IG5ld1ZhbCArIHRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5hdHRyKCdpZCcsIGxhc3RJRCk7XG4gICAgICAkY2xvbmUuYXR0cignbmFtZScsIGNsb25lTmFtZSk7XG4gICAgICAkY2xvbmUuYWRkQ2xhc3MoJ2Nsb25lZCcpO1xuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkY2xvbmUpLnNvcnRhYmxlKCk7XG5cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdICYmIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSkge1xuICAgICAgICBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uY2xvbmUoJGNsb25lWzBdKTtcbiAgICAgIH1cblxuICAgICAgbGFzdElEID0gX2hlbHBlcnMuaW5jcmVtZW50SWQobGFzdElEKTtcbiAgICAgIHJldHVybiAkY2xvbmU7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVRJTElUSUVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAgIC8vIGRlbGV0ZSBvcHRpb25zXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5yZW1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgJGZpZWxkID0gJCh0aGlzKS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IG9wdGlvbnNDb3VudCA9ICQodGhpcykucGFyZW50cygnLnNvcnRhYmxlLW9wdGlvbnM6ZXEoMCknKS5jaGlsZHJlbignbGknKS5sZW5ndGg7XG4gICAgICBpZiAob3B0aW9uc0NvdW50IDw9IDIpIHtcbiAgICAgICAgb3B0cy5ub3RpZnkuZXJyb3IoJ0Vycm9yOiAnICsgaTE4bi5taW5PcHRpb25NZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCdsaScpLnNsaWRlVXAoJzI1MCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xuICAgICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0b3VjaCBmb2N1c1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbigndG91Y2hzdGFydCcsICdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgaWYgKGUuaGFuZGxlZCAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoJGlucHV0LmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICRpbnB1dC50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRpbnB1dC5mb2N1cygpO1xuICAgICAgICAgIGxldCBmaWVsZFZhbCA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAkaW5wdXQudmFsKGZpZWxkVmFsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdG9nZ2xlIGZpZWxkc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2sgdG91Y2hzdGFydCcsICcudG9nZ2xlLWZvcm0sIC5jbG9zZS1maWVsZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGxldCB0YXJnZXRJRCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJykuYXR0cignaWQnKTtcbiAgICAgICAgX2hlbHBlcnMudG9nZ2xlRWRpdCh0YXJnZXRJRCk7XG4gICAgICAgIGUuaGFuZGxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZScsICdbbmFtZT1cInN1YnR5cGVcIl0nLCAoZSkgPT4ge1xuICAgICAgY29uc3QgJGZpZWxkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGkuZm9ybS1maWVsZCcpO1xuICAgICAgY29uc3QgJHZhbFdyYXAgPSAkKCcudmFsdWUtd3JhcCcsICRmaWVsZCk7XG4gICAgICAkdmFsV3JhcC50b2dnbGUoZS50YXJnZXQudmFsdWUgIT09ICdxdWlsbCcpO1xuICAgIH0pO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjaGFuZ2UnLCAnLnByZXYtaG9sZGVyIGlucHV0LCAucHJldi1ob2xkZXIgc2VsZWN0JywgZSA9PiB7XG4gICAgICBsZXQgcHJldk9wdGlvbnM7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdGhlci1vcHRpb24nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgZmllbGQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaS5mb3JtLWZpZWxkJylbMF07XG4gICAgICBpZiAodXRpbHMuaW5BcnJheShmaWVsZC50eXBlLCBbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29wdGlvbi12YWx1ZScpO1xuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICB1dGlscy5mb3JFYWNoKG9wdGlvbnMsIGkgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9uc1tpXS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5jaGVja2VkID0gZS50YXJnZXQudmFsdWUgPT09IG9wdGlvbnNbaV0udmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShlLnRhcmdldC5uYW1lKTtcbiAgICAgICAgICB1dGlscy5mb3JFYWNoKHByZXZPcHRpb25zLCBpID0+IHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnNbaV0ucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uY2hlY2tlZCA9IHByZXZPcHRpb25zW2ldLmNoZWNrZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZS0nICsgZmllbGQuaWQpLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBwcmV2aWV3IHRvIGxhYmVsXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdrZXl1cCBjaGFuZ2UnLCAnW25hbWU9XCJsYWJlbFwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICQoJy5maWVsZC1sYWJlbCcsICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJykpLnRleHQoJChlLnRhcmdldCkudmFsKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGVycm9yIHN0eWxpbmcgd2hlbiB1c2VycyB0cmllcyB0byBjb3JyZWN0IG1pc3Rha2VcbiAgICAkc29ydGFibGVGaWVsZHMuZGVsZWdhdGUoJ2lucHV0LmVycm9yJywgJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgcHJldmlldyBmb3IgZGVzY3JpcHRpb25cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2tleXVwJywgJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgICAgbGV0IGNsb3Nlc3RUb29sVGlwID0gJCgnLnRvb2x0aXAtZWxlbWVudCcsICRmaWVsZCk7XG4gICAgICBsZXQgdHRWYWwgPSAkKGUudGFyZ2V0KS52YWwoKTtcbiAgICAgIGlmICh0dFZhbCAhPT0gJycpIHtcbiAgICAgICAgaWYgKCFjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdHQgPSBgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWVsZW1lbnRcIiB0b29sdGlwPVwiJHt0dFZhbH1cIj4/PC9zcGFuPmA7XG4gICAgICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJGZpZWxkKS5hZnRlcih0dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2VzdFRvb2xUaXAuYXR0cigndG9vbHRpcCcsIHR0VmFsKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBjbG9zZXN0VG9vbFRpcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZScsICcuZmxkLW11bHRpcGxlJywgZSA9PiB7XG4gICAgICBsZXQgbmV3VHlwZSA9IGUudGFyZ2V0LmNoZWNrZWQgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcblxuICAgICAgJChlLnRhcmdldClcbiAgICAgIC5wYXJlbnRzKCcuZm9ybS1lbGVtZW50czplcSgwKScpXG4gICAgICAuZmluZCgnLnNvcnRhYmxlLW9wdGlvbnMgaW5wdXQub3B0aW9uLXNlbGVjdGVkJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBlLnRhcmdldC50eXBlID0gbmV3VHlwZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9ybWF0IG5hbWUgYXR0cmlidXRlXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdibHVyJywgJ2lucHV0LmZsZC1uYW1lJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSBfaGVscGVycy5zYWZlbmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICQoZS50YXJnZXQpXG4gICAgICAgIC5hZGRDbGFzcygnZmllbGQtZXJyb3InKVxuICAgICAgICAuYXR0cigncGxhY2Vob2xkZXInLCBpMThuLmNhbm5vdEJlRW1wdHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2ZpZWxkLWVycm9yJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2JsdXInLCAnaW5wdXQuZmxkLW1heGxlbmd0aCcsIGUgPT4ge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSBfaGVscGVycy5mb3JjZU51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IGZpZWxkXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5pY29uLWNvcHknLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgY3VycmVudEl0ZW0gPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoJ2xpJyk7XG4gICAgICBsZXQgJGNsb25lID0gY2xvbmVJdGVtKGN1cnJlbnRJdGVtKTtcbiAgICAgICRjbG9uZS5pbnNlcnRBZnRlcihjdXJyZW50SXRlbSk7XG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRjbG9uZSk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBEZWxldGUgZmllbGRcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmRlbGV0ZS1jb25maXJtJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgICAgfTtcblxuICAgICAgbGV0IGRlbGV0ZUlEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgY29uc3QgJGZpZWxkID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVJRCkpO1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbENsb3NlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICB9LCBmYWxzZSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgc3VyZSB0aGV5IHdhbnQgdG8gcmVtb3ZlIHRoZSBmaWVsZFxuICAgICAgaWYgKG9wdHMuZmllbGRSZW1vdmVXYXJuKSB7XG4gICAgICAgIGxldCB3YXJuSDMgPSB1dGlscy5tYXJrdXAoJ2gzJywgaTE4bi53YXJuaW5nKTtcbiAgICAgICAgbGV0IHdhcm5NZXNzYWdlID0gdXRpbHMubWFya3VwKCdwJywgaTE4bi5maWVsZFJlbW92ZVdhcm5pbmcpO1xuICAgICAgICBfaGVscGVycy5jb25maXJtKFt3YXJuSDMsIHdhcm5NZXNzYWdlXSwgKCkgPT5cbiAgICAgICAgICBfaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCksIGNvb3Jkcyk7XG4gICAgICAgICRmaWVsZC5hZGRDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9oZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBidXR0b24gc3R5bGUgc2VsZWN0aW9uXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuc3R5bGUtd3JhcCBidXR0b24nLCBlID0+IHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcbiAgICAgIGxldCBzdHlsZVZhbCA9ICRidXR0b24udmFsKCk7XG4gICAgICBsZXQgJGJ0blN0eWxlID0gJGJ1dHRvbi5wYXJlbnQoKS5wcmV2KCcuYnRuLXN0eWxlJyk7XG4gICAgICAkYnRuU3R5bGUudmFsKHN0eWxlVmFsKTtcbiAgICAgICRidXR0b24uc2libGluZ3MoJy5idG4nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICRidXR0b24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRidG5TdHlsZS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIHRvZ2dsZSByZXF1aXJlZCBhc3Rlcmlza1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnLmZsZC1yZXF1aXJlZCcsIGUgPT4ge1xuICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKS5maW5kKCcucmVxdWlyZWQtYXN0ZXJpc2snKS50b2dnbGUoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIHRvZ2dsZSByb2xlcyB2aXNpYmlsaXR5XG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICdpbnB1dC5mbGQtYWNjZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHJvbGVzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKS5maW5kKCcuYXZhaWxhYmxlLXJvbGVzJyk7XG4gICAgICBsZXQgZW5hYmxlUm9sZXNDQiA9ICQoZS50YXJnZXQpO1xuICAgICAgcm9sZXMuc2xpZGVUb2dnbGUoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFlbmFibGVSb2xlc0NCLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgcm9sZXMpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byBhZGQgbmV3IG9wdGlvbnNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJy5hZGQtb3B0JywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0ICRvcHRpb25XcmFwID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmZpZWxkLW9wdGlvbnMnKTtcbiAgICAgIGxldCAkbXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgJG9wdGlvbldyYXApO1xuICAgICAgbGV0ICRmaXJzdE9wdGlvbiA9ICQoJy5vcHRpb24tc2VsZWN0ZWQ6ZXEoMCknLCAkb3B0aW9uV3JhcCk7XG4gICAgICBsZXQgaXNNdWx0aXBsZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoJG11bHRpcGxlLmxlbmd0aCkge1xuICAgICAgICBpc011bHRpcGxlID0gJG11bHRpcGxlLnByb3AoJ2NoZWNrZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzTXVsdGlwbGUgPSAoJGZpcnN0T3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBuYW1lID0gJGZpcnN0T3B0aW9uLmF0dHIoJ25hbWUnKTtcblxuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkb3B0aW9uV3JhcCkuYXBwZW5kKHNlbGVjdEZpZWxkT3B0aW9ucyhuYW1lLCBmYWxzZSwgaXNNdWx0aXBsZSkpO1xuICAgIH0pO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdtb3VzZW92ZXIgbW91c2VvdXQnLCAnLnJlbW92ZSwgLmRlbC1idXR0b24nLCBlID0+XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpLnRvZ2dsZUNsYXNzKCdkZWxldGUnKSk7XG5cbiAgICBsb2FkRmllbGRzKCk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMuY3NzKCdtaW4taGVpZ2h0JywgJGNiVUwuaGVpZ2h0KCkpO1xuXG4gICAgLy8gSWYgb3B0aW9uIHNldCwgY29udHJvbHMgd2lsbCByZW1haW4gaW4gdmlldyBpbiBlZGl0b3JcbiAgICBpZiAob3B0cy5zdGlja3lDb250cm9scy5lbmFibGUpIHtcbiAgICAgIF9oZWxwZXJzLnN0aWNreUNvbnRyb2xzKCRzb3J0YWJsZUZpZWxkcyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMubG9hZGVkKTtcblxuICAgIC8vIE1ha2UgYWN0aW9ucyBhY2Nlc3NpYmxlXG4gICAgZm9ybUJ1aWxkZXIuYWN0aW9ucyA9IHtcbiAgICAgIGNsZWFyRmllbGRzOiBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMsXG4gICAgICBzaG93RGF0YTogX2hlbHBlcnMuc2hvd0RhdGEsXG4gICAgICBzYXZlOiBfaGVscGVycy5zYXZlLFxuICAgICAgYWRkRmllbGQ6IChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgX2hlbHBlcnMuc3RvcEluZGV4ID0gZm9ybUJ1aWxkZXIuc3RhZ2UuY2hpbGRyZW4ubGVuZ3RoID8gaW5kZXggOiB1bmRlZmluZWQ7XG4gICAgICAgIHByZXBGaWVsZFZhcnMoZmllbGQpO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZEFkZGVkKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVGaWVsZDogX2hlbHBlcnMucmVtb3ZlRmllbGQsXG4gICAgICBnZXREYXRhOiAodHlwZSA9ICdqcycpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBmb3JtQnVpbGRlci5zdGFnZTtcbiAgICAgICAgY29uc3QgaCA9IF9oZWxwZXJzO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGpzOiAoKSA9PiBoLnByZXBEYXRhKHN0YWdlKSxcbiAgICAgICAgICB4bWw6ICgpID0+IGgueG1sU2F2ZShzdGFnZSksXG4gICAgICAgICAganNvbjogKCkgPT4gd2luZG93LkpTT04uc3RyaW5naWZ5KGgucHJlcERhdGEoc3RhZ2UpLCBudWxsLCAnXFx0JylcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZGF0YVt0eXBlXSgpO1xuICAgICAgfSxcbiAgICAgIHNldERhdGE6IGZvcm1EYXRhID0+IHtcbiAgICAgICAgX2hlbHBlcnMucmVtb3ZlQWxsZmllbGRzKGZhbHNlKTtcbiAgICAgICAgbG9hZEZpZWxkcygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3JtQnVpbGRlci5pMThuID0ge1xuICAgICAgc2V0TGFuZzogYXN5bmMgbG9jYWxlID0+IHtcbiAgICAgICAgbGV0IG5ld0xhbmcgPSBhd2FpdCBmb3JtQnVpbGRlci5taTE4bi5zZXRDdXJyZW50LmNhbGwoZm9ybUJ1aWxkZXIubWkxOG4sIGxvY2FsZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmb3JtQnVpbGRlcjtcbiAgfTtcblxuICAkLmZuLmZvcm1CdWlsZGVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBsZXQgZWxlbXMgPSB0aGlzO1xuICAgIHJldHVybiBlbGVtcy5lYWNoKChpKSA9PiB7XG4gICAgICBsZXQgZm9ybUJ1aWxkZXIgPSBuZXcgRm9ybUJ1aWxkZXIob3B0aW9ucywgZWxlbXNbaV0pO1xuICAgICAgJChlbGVtc1tpXSkuZGF0YSgnZm9ybUJ1aWxkZXInLCBmb3JtQnVpbGRlcik7XG5cbiAgICAgIHJldHVybiBmb3JtQnVpbGRlcjtcbiAgICB9KTtcbiAgfTtcbn0pKGpRdWVyeSk7XG4iLCJpbXBvcnQgZCBmcm9tICcuL2RvbSc7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbnMgc3BlY2lmaWMgdG8gZm9ybUJ1aWxkZXIuXG4gKiBDYWxsZWQgZm9ybSBmb3JtQnVpbGRlclxuICogQHBhcmFtICB7T2JqZWN0fSAgIG9wdHNcbiAqIEBwYXJhbSAge0luc3RhbmNlfSBmb3JtQnVpbGRlclxuICogQHJldHVybiB7T2JqZWN0fSBoZWxwZXIgZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIGhlbHBlcnMob3B0cywgZm9ybUJ1aWxkZXIpIHtcbiAgY29uc3QgbWkxOG4gPSBmb3JtQnVpbGRlci5taTE4bjtcbiAgY29uc3QgaTE4biA9IG1pMThuLmN1cnJlbnQ7XG4gIGNvbnN0IHV0aWxzID0gZm9ybUJ1aWxkZXIudXRpbHM7XG4gIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG5cbiAgbGV0IF9oZWxwZXJzID0ge1xuICAgIGRvQ2FuY2VsOiBmYWxzZVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGNvbnZlcnRzIG1lc3N5IGBjbCNzc05hbWVzYCBpbnRvIHZhbGlkIGBjbGFzcy1uYW1lc2BcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBoeXBoZW5hdGVkIHN0cmluZ1xuICAgKi9cbiAgX2hlbHBlcnMubWFrZUNsYXNzTmFtZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgcmV0dXJuIHV0aWxzLmh5cGhlbkNhc2Uoc3RyKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGEgbW9iaWxlIGNsYXNzXG4gICAqIEB0b2RvIGZpbmQgY3NzIG9ubHkgc29sdXRpb25cbiAgICogQHJldHVybiB7U3RyaW5nfSBNb2JpbGUgY2xhc3MgYWRkZWQgdG8gZm9ybUJ1aWxkZXJcbiAgICovXG4gIF9oZWxwZXJzLm1vYmlsZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG1vYmlsZUNsYXNzID0gJyc7XG4gICAgKGZ1bmN0aW9uKGEpIHtcbiAgICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkge1xuICAgICAgICBtb2JpbGVDbGFzcyA9ICcgZmItbW9iaWxlJztcbiAgICAgIH1cbiAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgICByZXR1cm4gbW9iaWxlQ2xhc3M7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBiZWdpbnNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqL1xuICBfaGVscGVycy5zdGFydE1vdmluZyA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIHVpLml0ZW0uc2hvdygpLmFkZENsYXNzKCdtb3ZpbmcnKTtcbiAgICBfaGVscGVycy5zdGFydEluZGV4ID0gJCgnbGknLCB0aGlzKS5pbmRleCh1aS5pdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGVuZHNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqL1xuICBfaGVscGVycy5zdG9wTW92aW5nID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgdWkuaXRlbS5yZW1vdmVDbGFzcygnbW92aW5nJyk7XG4gICAgaWYgKF9oZWxwZXJzLmRvQ2FuY2VsKSB7XG4gICAgICAkKHVpLnNlbmRlcikuc29ydGFibGUoJ2NhbmNlbCcpO1xuICAgICAgJCh0aGlzKS5zb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgfVxuICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICBfaGVscGVycy5kb0NhbmNlbCA9IGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBqUXVlcnkgVUkgc29ydGFibGUgYmVmb3JlU3RvcCBjYWxsYmFjayB1c2VkIGZvciBib3RoIGxpc3RzLlxuICAgKiBMb2dpYyBmb3IgY2FuY2VsaW5nIHRoZSBzb3J0IG9yIGRyb3AuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgX2hlbHBlcnMuYmVmb3JlU3RvcCA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuICAgIGxldCBsYXN0SW5kZXggPSBmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG4gICAgX2hlbHBlcnMuc3RvcEluZGV4ID0gdWkucGxhY2Vob2xkZXIuaW5kZXgoKSAtIDE7XG5cbiAgICBpZiAoIW9wdHMuc29ydGFibGVDb250cm9scyAmJiB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCdmcm1iLWNvbnRyb2wnKSkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKF9oZWxwZXJzLnN0b3BJbmRleCA9PT0gMCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKChfaGVscGVycy5zdG9wSW5kZXggKyAxKSA9PT0gbGFzdEluZGV4KTtcbiAgICB9XG5cbiAgICBfaGVscGVycy5kb0NhbmNlbCA9IGNhbmNlbEFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKTtcbiAgfTtcblxuICAvKipcbiAgICogTWFrZSBzdHJpbmdzIHNhZmUgdG8gYmUgdXNlZCBhcyBjbGFzc2VzXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHN0cmluZyB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgY29udmVydGVyIHN0cmluZ1xuICAgKi9cbiAgX2hlbHBlcnMuc2FmZW5hbWUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL1teYS16QS1aMC05XFwtXS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RyaXBzIG5vbi1udW1iZXJzIGZyb20gYSBudW1iZXIgb25seSBpbnB1dFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHN0ciBzdHJpbmcgd2l0aCBwb3NzaWJsZSBudW1iZXJcbiAgICogQHJldHVybiB7c3RyaW5nfSAgICAgc3RyaW5nIHdpdGhvdXQgbnVtYmVyc1xuICAgKi9cbiAgX2hlbHBlcnMuZm9yY2VOdW1iZXIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGhpZGUgYW5kIHNob3cgbW91c2UgdHJhY2tpbmcgdG9vbHRpcHMsIG9ubHkgdXNlZCBmb3IgZGlzYWJsZWRcbiAgICogZmllbGRzIGluIHRoZSBlZGl0b3IuXG4gICAqXG4gICAqIEB0b2RvICAgcmVtb3ZlIG9yIHJlZmFjdG9yIHRvIG1ha2UgYmV0dGVyIHVzZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHR0IGpRdWVyeSBvcHRpb24gd2l0aCBuZXh0ZWQgdG9vbHRpcFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgX2hlbHBlcnMuaW5pdFRvb2x0aXAgPSBmdW5jdGlvbih0dCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0dC5maW5kKCcudG9vbHRpcCcpO1xuICAgIHR0Lm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodG9vbHRpcC5vdXRlcldpZHRoKCkgPiAyMDApIHtcbiAgICAgICAgdG9vbHRpcC5hZGRDbGFzcygnbWF4LXdpZHRoJyk7XG4gICAgICB9XG4gICAgICB0b29sdGlwLmNzcygnbGVmdCcsIHR0LndpZHRoKCkgKyAxNCk7XG4gICAgICB0b29sdGlwLnN0b3AodHJ1ZSwgdHJ1ZSkuZmFkZUluKCdmYXN0Jyk7XG4gICAgfSkubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcbiAgICAgIHR0LmZpbmQoJy50b29sdGlwJykuc3RvcCh0cnVlLCB0cnVlKS5mYWRlT3V0KCdmYXN0Jyk7XG4gICAgfSk7XG4gICAgdG9vbHRpcC5oaWRlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIGdldCBlbGVtZW50IHR5cGUgYW5kIHN1YnR5cGVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAkZmllbGRcbiAgICogQHJldHVybiB7T2JqZWN0fSB7dHlwZTogJ2ZpZWxkVHlwZScsIHN1YnR5cGU6ICdmaWVsZFN1YlR5cGUnfVxuICAgKi9cbiAgX2hlbHBlcnMuZ2V0VHlwZXMgPSBmdW5jdGlvbigkZmllbGQpIHtcbiAgICBsZXQgdHlwZXMgPSB7XG4gICAgICAgIHR5cGU6ICRmaWVsZC5hdHRyKCd0eXBlJylcbiAgICAgIH07XG4gICAgbGV0IHN1YnR5cGUgPSAkKCcuZmxkLXN1YnR5cGUnLCAkZmllbGQpLnZhbCgpO1xuXG4gICAgaWYgKHN1YnR5cGUgIT09IHR5cGVzLnR5cGUpIHtcbiAgICAgIHR5cGVzLnN1YnR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfTtcblxuICAvKipcbiAgICogR2V0IG9wdGlvbiBkYXRhIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgalF1ZXJ5IGZpZWxkIG9iamVjdFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIEFycmF5IG9mIG9wdGlvbiB2YWx1ZXNcbiAgICovXG4gIF9oZWxwZXJzLmZpZWxkT3B0aW9uRGF0YSA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcblxuICAgICQoJy5zb3J0YWJsZS1vcHRpb25zIGxpJywgZmllbGQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCAkb3B0aW9uKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICBsYWJlbDogJCgnLm9wdGlvbi1sYWJlbCcsICRvcHRpb24pLnZhbCgpLFxuICAgICAgICAgIHZhbHVlOiAkKCcub3B0aW9uLXZhbHVlJywgJG9wdGlvbikudmFsKClcbiAgICAgICAgfTtcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIGF0dHJzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMucHVzaChhdHRycyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcblxuICAvKipcbiAgICogWE1MIHNhdmVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmb3JtIHNvcnRhYmxlRmllbGRzIG5vZGVcbiAgICogQHJldHVybiB7U3RyaW5nfSB4bWwgaW4gc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy54bWxTYXZlID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIGxldCBmb3JtRGF0YSA9IF9oZWxwZXJzLnByZXBEYXRhKGZvcm0pO1xuICAgIGxldCB4bWwgPSBbJzxmb3JtLXRlbXBsYXRlPlxcblxcdDxmaWVsZHM+J107XG5cbiAgICB1dGlscy5mb3JFYWNoKGZvcm1EYXRhLCBmdW5jdGlvbihmaWVsZEluZGV4LCBmaWVsZCkge1xuICAgICAgbGV0IGZpZWxkQ29udGVudCA9IG51bGw7XG4gICAgICBjb25zdCBvcHRpb25GaWVsZHMgPSAvKHNlbGVjdHxjaGVja2JveC1ncm91cHxyYWRpby1ncm91cHxhdXRvY29tcGxldGUpLztcblxuICAgICAgLy8gSGFuZGxlIG9wdGlvbnNcbiAgICAgIGlmIChmaWVsZC50eXBlLm1hdGNoKG9wdGlvbkZpZWxkcykpIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IG0oJ29wdGlvbicsIG9wdGlvbkRhdGFbaV0ubGFiZWwsIG9wdGlvbkRhdGFbaV0pLm91dGVySFRNTDtcbiAgICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdFxcdCcgKyBvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucHVzaCgnXFxuXFx0XFx0Jyk7XG5cbiAgICAgICAgZmllbGRDb250ZW50ID0gb3B0aW9ucy5qb2luKCcnKTtcbiAgICAgICAgZGVsZXRlIGZpZWxkLnZhbHVlcztcbiAgICAgIH1cblxuICAgICAgbGV0IHhtbEZpZWxkID0gbSgnZmllbGQnLCBmaWVsZENvbnRlbnQsIGZpZWxkKTtcbiAgICAgIHhtbC5wdXNoKCdcXG5cXHRcXHQnICsgeG1sRmllbGQub3V0ZXJIVE1MKTtcbiAgICB9KTtcblxuICAgIHhtbC5wdXNoKCdcXG5cXHQ8L2ZpZWxkcz5cXG48L2Zvcm0tdGVtcGxhdGU+Jyk7XG5cbiAgICByZXR1cm4geG1sLmpvaW4oJycpO1xuICB9O1xuXG4gIF9oZWxwZXJzLnByZXBEYXRhID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xuXG4gICAgaWYgKGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIGJ1aWxkIGRhdGEgb2JqZWN0XG4gICAgICB1dGlscy5mb3JFYWNoKGZvcm0uY2hpbGROb2RlcywgYXN5bmMgZnVuY3Rpb24oaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGxldCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICBpZiAoISgkZmllbGQuaGFzQ2xhc3MoJ2Rpc2FibGVkLWZpZWxkJykpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IF9oZWxwZXJzLmdldFR5cGVzKCRmaWVsZCk7XG4gICAgICAgICAgbGV0IHJvbGVWYWxzID0gJCgnLnJvbGVzLWZpZWxkOmNoZWNrZWQnLCBmaWVsZCkubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0pLmdldCgpO1xuXG4gICAgICAgICAgJCgnW2NsYXNzKj1cImZsZC1cIl0nLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UoYXR0ci5uYW1lKTtcbiAgICAgICAgICAgIGZpZWxkRGF0YVtuYW1lXSA9IGF0dHIudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGF0dHIuY2hlY2tlZCA6IGF0dHIudmFsdWU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoZmllbGREYXRhLnN1YnR5cGUpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZERhdGEuc3VidHlwZSA9PT0gJ3F1aWxsJykge1xuICAgICAgICAgICAgICBsZXQgaWQgPSBgJHtmaWVsZERhdGEubmFtZX0tcHJldmlld2A7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2lkXSkge1xuICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbaWRdLmluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBpbnN0YW5jZS5nZXRDb250ZW50cygpO1xuICAgICAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZSA9IHdpbmRvdy5KU09OLnN0cmluZ2lmeShkYXRhLm9wcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZihmaWVsZERhdGEuc3VidHlwZSA9PT0gJ3RpbnltY2UnICYmIHdpbmRvdy50aW55bWNlKSB7XG4gICAgICAgICAgICAgIGxldCBpZCA9IGAke2ZpZWxkRGF0YS5uYW1lfS1wcmV2aWV3YDtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy50aW55bWNlLmVkaXRvcnNbaWRdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVkaXRvciA9IHdpbmRvdy50aW55bWNlLmVkaXRvcnNbaWRdO1xuICAgICAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZSA9IGVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocm9sZVZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEucm9sZSA9IHJvbGVWYWxzLmpvaW4oJywnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZERhdGEuY2xhc3NOYW1lID0gZmllbGREYXRhLmNsYXNzTmFtZSB8fCBmaWVsZERhdGEuY2xhc3M7XG5cbiAgICAgICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZERhdGEuY2xhc3NOYW1lKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZmllbGREYXRhKTtcbiAgICAgICAgICBmaWVsZERhdGEgPSB1dGlscy5lc2NhcGVBdHRycyhmaWVsZERhdGEpO1xuXG4gICAgICAgICAgbGV0IG11bHRpcGxlRmllbGQgPSBmaWVsZERhdGEudHlwZS5tYXRjaChkLm9wdGlvbkZpZWxkc1JlZ0V4KTtcblxuICAgICAgICAgIGlmIChtdWx0aXBsZUZpZWxkKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gX2hlbHBlcnMuZmllbGRPcHRpb25EYXRhKCRmaWVsZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH07XG5cbiAgX2hlbHBlcnMuanNvblNhdmUgPSBmb3JtID0+XG4gICAgd2luZG93LkpTT04uc3RyaW5naWZ5KF9oZWxwZXJzLnByZXBEYXRhKGZvcm0pLCBudWxsLCAnXFx0Jyk7XG5cbiAgX2hlbHBlcnMuZ2V0RGF0YSA9IGZvcm1EYXRhID0+IHtcbiAgICBsZXQgZGF0YSA9IGZvcm1EYXRhIHx8IG9wdHMuZm9ybURhdGE7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGF0YSA9IHtcbiAgICAgIHhtbDogZm9ybURhdGEgPT4gdXRpbHMucGFyc2VYTUwoZm9ybURhdGEpLFxuICAgICAganNvbjogZm9ybURhdGEgPT4gd2luZG93LkpTT04ucGFyc2UoZm9ybURhdGEpXG4gICAgfTtcblxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gc2V0RGF0YVtvcHRzLmRhdGFUeXBlXShkYXRhKSB8fCBbXTtcblxuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogU2F2ZXMgYW5kIHJldHVybnMgZm9ybURhdGFcbiAgICogQHJldHVybiB7WE1MfEpTT059IGZvcm1EYXRhXG4gICAqL1xuICBfaGVscGVycy5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG5cbiAgICBsZXQgZG9TYXZlID0ge1xuICAgICAgeG1sOiBfaGVscGVycy54bWxTYXZlLFxuICAgICAganNvbjogX2hlbHBlcnMuanNvblNhdmVcbiAgICB9O1xuXG4gICAgLy8gc2F2ZSBhY3Rpb24gZm9yIGN1cnJlbnQgYGRhdGFUeXBlYFxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gZG9TYXZlW29wdHMuZGF0YVR5cGVdKGZvcm0pO1xuXG4gICAgLy8gdHJpZ2dlciBmb3JtU2F2ZWQgZXZlbnRcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5mb3JtU2F2ZWQpO1xuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogaW5jcmVtZW50cyB0aGUgZmllbGQgaWRzIHdpdGggc3VwcG9ydCBmb3IgbXVsdGlwbGUgZWRpdG9yc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGZpZWxkIElEXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgaW5jcmVtZW50ZWQgZmllbGQgSURcbiAgICovXG4gIF9oZWxwZXJzLmluY3JlbWVudElkID0gZnVuY3Rpb24oaWQpIHtcbiAgICBsZXQgc3BsaXQgPSBpZC5sYXN0SW5kZXhPZignLScpO1xuICAgIGxldCBuZXdGaWVsZE51bWJlciA9IHBhcnNlSW50KGlkLnN1YnN0cmluZyhzcGxpdCArIDEpKSArIDE7XG4gICAgbGV0IGJhc2VTdHJpbmcgPSBpZC5zdWJzdHJpbmcoMCwgc3BsaXQpO1xuXG4gICAgcmV0dXJuIGAke2Jhc2VTdHJpbmd9LSR7bmV3RmllbGROdW1iZXJ9YDtcbiAgfTtcblxuICAvKipcbiAgICogQ29sbGVjdCBmaWVsZCBhdHRyaWJ1dGUgdmFsdWVzIGFuZCBjYWxsIGZpZWxkUHJldmlldyB0byBnZW5lcmF0ZSBwcmV2aWV3XG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgRE9NIGVsZW1lbnRcbiAgICovXG4gIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSBmaWVsZC5hdHRyKCdjbGFzcycpO1xuICAgIGlmIChmaWVsZENsYXNzLmluZGV4T2YoJ3VpLXNvcnRhYmxlLWhhbmRsZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaWVsZFR5cGUgPSAkKGZpZWxkKS5hdHRyKCd0eXBlJyk7XG4gICAgbGV0ICRwcmV2SG9sZGVyID0gJCgnLnByZXYtaG9sZGVyJywgZmllbGQpO1xuICAgIGxldCBwcmV2aWV3RGF0YSA9IHtcbiAgICAgIHR5cGU6IGZpZWxkVHlwZVxuICAgIH07XG4gICAgbGV0IHByZXZpZXc7XG5cbiAgICAkKCdbY2xhc3MqPVwiZmxkLVwiXScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UodGhpcy5uYW1lKTtcbiAgICAgIHByZXZpZXdEYXRhW25hbWVdID0gdGhpcy50eXBlID09PSAnY2hlY2tib3gnID8gdGhpcy5jaGVja2VkIDogdGhpcy52YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCBzdHlsZSA9ICQoJy5idG4tc3R5bGUnLCBmaWVsZCkudmFsKCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goZC5vcHRpb25GaWVsZHNSZWdFeCkpIHtcbiAgICAgIHByZXZpZXdEYXRhLnZhbHVlcyA9IFtdO1xuICAgICAgcHJldmlld0RhdGEubXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgZmllbGQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb3B0aW9uID0ge307XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCB0aGlzKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJCgnLm9wdGlvbi12YWx1ZScsIHRoaXMpLnZhbCgpO1xuICAgICAgICBvcHRpb24ubGFiZWwgPSAkKCcub3B0aW9uLWxhYmVsJywgdGhpcykudmFsKCk7XG4gICAgICAgIHByZXZpZXdEYXRhLnZhbHVlcy5wdXNoKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2aWV3RGF0YSA9IHV0aWxzLnRyaW1PYmoocHJldmlld0RhdGEpO1xuXG4gICAgcHJldmlld0RhdGEuY2xhc3NOYW1lID0gX2hlbHBlcnMuY2xhc3NOYW1lcyhmaWVsZCwgcHJldmlld0RhdGEpO1xuICAgICQoJy5mbGQtY2xhc3NOYW1lJywgZmllbGQpLnZhbChwcmV2aWV3RGF0YS5jbGFzc05hbWUpO1xuXG4gICAgZmllbGQuZGF0YSgnZmllbGREYXRhJywgcHJldmlld0RhdGEpO1xuICAgIHByZXZpZXcgPSB1dGlscy5nZXRUZW1wbGF0ZShwcmV2aWV3RGF0YSwgdHJ1ZSk7XG5cbiAgICB1dGlscy5lbXB0eSgkcHJldkhvbGRlclswXSk7XG4gICAgJHByZXZIb2xkZXJbMF0uYXBwZW5kQ2hpbGQocHJldmlldyk7XG4gICAgcHJldmlldy5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZFJlbmRlcmVkKTtcblxuICB9O1xuXG4gIF9oZWxwZXJzLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCA9IDI1MCwgaW1tZWRpYXRlID0gZmFsc2UpIHtcbiAgICBsZXQgdGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGxldCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbGV0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgYSBjdXN0b20gdG9vbHRpcCBmb3IgZGlzYWJsZWQgZmllbGRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkXG4gICAqL1xuICBfaGVscGVycy5kaXNhYmxlZFRUID0ge1xuICAgIG1vdmU6IChlLCBlbGVtKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZE9mZnNldCA9IGVsZW0uZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gZmllbGRPZmZzZXQubGVmdCAtIDIxO1xuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGZpZWxkT2Zmc2V0LnRvcCAtIGVsZW0udHQub2Zmc2V0SGVpZ2h0IC0gMTI7XG4gICAgICBlbGVtLnR0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcbiAgICB9LFxuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgIGZvcm1CdWlsZGVyLnN0YWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaXNhYmxlZC1maWVsZCcpLmZvckVhY2goXG4gICAgICAgIGZpZWxkID0+IHtcbiAgICAgICAgICBsZXQgdGl0bGUgPSBvcHRzLm1lc3NhZ2VzLmZpZWxkTm9uRWRpdGFibGU7XG5cbiAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIGxldCB0dCA9IHV0aWxzLm1hcmt1cCgncCcsIHRpdGxlLCB7Y2xhc3NOYW1lOiAnZnJtYi10dCd9KTtcbiAgICAgICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHR0KTtcbiAgICAgICAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgICAgICAgICAgICBfaGVscGVycy5kaXNhYmxlZFRULm1vdmUoZSwge3R0LCBmaWVsZH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICB9O1xuXG4gIF9oZWxwZXJzLmNsYXNzTmFtZXMgPSBmdW5jdGlvbihmaWVsZCwgcHJldmlld0RhdGEpIHtcbiAgICBsZXQgaTtcbiAgICBsZXQgdHlwZSA9IHByZXZpZXdEYXRhLnR5cGU7XG4gICAgbGV0IHN0eWxlID0gcHJldmlld0RhdGEuc3R5bGU7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGZpZWxkWzBdLnF1ZXJ5U2VsZWN0b3IoJy5mbGQtY2xhc3NOYW1lJykudmFsdWU7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBsZXQgdHlwZXMgPSB7XG4gICAgICBidXR0b246ICdidG4nLFxuICAgICAgc3VibWl0OiAnYnRuJ1xuICAgIH07XG5cbiAgICBsZXQgcHJpbWFyeVR5cGUgPSB0eXBlc1t0eXBlXTtcblxuICAgIGlmIChwcmltYXJ5VHlwZSkge1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChgKD86XnxcXHMpJHtwcmltYXJ5VHlwZX0tKC4qPykoPzpcXHN8JCkrYCwgJ2cnKTtcbiAgICAgICAgICBsZXQgbWF0Y2ggPSBjbGFzc2VzW2ldLm1hdGNoKHJlKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbGFzc2VzLnB1c2gocHJpbWFyeVR5cGUgKyAnLScgKyBzdHlsZSk7XG4gICAgICB9XG4gICAgICBjbGFzc2VzLnB1c2gocHJpbWFyeVR5cGUpO1xuICAgIH1cblxuICAgIC8vIHJldmVyc2UgdGhlIGFycmF5IHRvIHB1dCBjdXN0b20gY2xhc3NlcyBhdCBlbmQsXG4gICAgLy8gcmVtb3ZlIGFueSBkdXBsaWNhdGVzLCBjb252ZXJ0IHRvIHN0cmluZywgcmVtb3ZlIHdoaXRlc3BhY2VcbiAgICByZXR1cm4gdXRpbHMudW5pcXVlKGNsYXNzZXMpLmpvaW4oJyAnKS50cmltKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbmQgb3BlbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvdmVybGF5IEV4aXN0aW5nIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGlhbG9nICBFeGlzdGluZyBkaWFsb2dcbiAgICovXG4gIF9oZWxwZXJzLmNsb3NlQ29uZmlybSA9IGZ1bmN0aW9uKG92ZXJsYXksIGRpYWxvZykge1xuICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tYnVpbGRlci1vdmVybGF5JylbMF07XG4gICAgfVxuICAgIGlmICghZGlhbG9nKSB7XG4gICAgICBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItZGlhbG9nJylbMF07XG4gICAgfVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLm1vZGFsQ2xvc2VkKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF5b3V0IGRhdGEgYmFzZWQgb24gY29udHJvbFBvc2l0aW9uIG9wdGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbnRyb2xQb3NpdGlvbiAnbGVmdCcgb3IgJ3JpZ2h0J1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IGxheW91dCBvYmplY3RcbiAgICovXG4gIF9oZWxwZXJzLmVkaXRvckxheW91dCA9IGZ1bmN0aW9uKGNvbnRyb2xQb3NpdGlvbikge1xuICAgIGxldCBsYXlvdXRNYXAgPSB7XG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1yaWdodCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1sZWZ0J1xuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1sZWZ0JyxcbiAgICAgICAgY29udHJvbHM6ICdwdWxsLXJpZ2h0J1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gPyBsYXlvdXRNYXBbY29udHJvbFBvc2l0aW9uXSA6ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIG92ZXJsYXkgdG8gdGhlIHBhZ2UuIFVzZWQgZm9yIG1vZGFscy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gT2JqZWN0XG4gICAqL1xuICBfaGVscGVycy5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBvdmVybGF5ID0gdXRpbHMubWFya3VwKCdkaXYnLCBudWxsLCB7XG4gICAgICBjbGFzc05hbWU6ICdmb3JtLWJ1aWxkZXItb3ZlcmxheSdcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXG4gICAgb3ZlcmxheS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHJldHVybiBvdmVybGF5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDdXN0b20gY29uZmlybWF0aW9uIGRpYWxvZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBtZXNzYWdlICAgQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gIHtGdW5jfSAgeWVzQWN0aW9uIGNhbGxiYWNrIHRvIGZpcmUgaWYgdGhleSBjb25maXJtXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGNvb3JkcyAgICBsb2NhdGlvbiB0byBwdXQgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWUgQ3VzdG9tIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBkaWFsb2dcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIFJlZmVyZW5jZSB0byB0aGUgbW9kYWxcbiAgICovXG4gIF9oZWxwZXJzLmNvbmZpcm0gPSAobWVzc2FnZSwgeWVzQWN0aW9uLCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpID0+IHtcbiAgICBsZXQgb3ZlcmxheSA9IF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG4gICAgbGV0IHllcyA9IG0oJ2J1dHRvbicsIGkxOG4ueWVzLCB7XG4gICAgICBjbGFzc05hbWU6ICd5ZXMgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSdcbiAgICB9KTtcbiAgICBsZXQgbm8gPSBtKCdidXR0b24nLCBpMThuLm5vLCB7XG4gICAgICBjbGFzc05hbWU6ICdubyBidG4gYnRuLWRhbmdlciBidG4tc20nXG4gICAgfSk7XG5cbiAgICBuby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHllcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB5ZXNBY3Rpb24oKTtcbiAgICAgIF9oZWxwZXJzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgbGV0IGJ0bldyYXAgPSBtKCdkaXYnLCBbbm8sIHllc10sIHtjbGFzc05hbWU6ICdidXR0b24td3JhcCd9KTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gbSgnZGl2JywgW21lc3NhZ2UsIGJ0bldyYXBdLCB7Y2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgLyAyLFxuICAgICAgICBwYWdlWTogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIC8gMlxuICAgICAgfTtcbiAgICAgIG1pbmlNb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlNb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XG4gICAgfVxuXG4gICAgbWluaU1vZGFsLnN0eWxlLmxlZnQgPSBjb29yZHMucGFnZVggKyAncHgnO1xuICAgIG1pbmlNb2RhbC5zdHlsZS50b3AgPSBjb29yZHMucGFnZVkgKyAncHgnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtaW5pTW9kYWwpO1xuXG4gICAgeWVzLmZvY3VzKCk7XG4gICAgcmV0dXJuIG1pbmlNb2RhbDtcbiAgfTtcblxuICAvKipcbiAgICogUG9wdXAgZGlhbG9nIHRoZSBkb2VzIG5vdCByZXF1aXJlIGNvbmZpcm1hdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfERPTXxBcnJheX0gIGNvbnRlbnRcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gY29vcmRzICAgIGZhbHNlIGlmIG5vIGNvb3JkcyBhcmUgcHJvdmlkZWQuIFdpdGhvdXQgY29vcmRpbmF0ZXNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBwb3B1cCB3aWxsIGFwcGVhciBjZW50ZXIgc2NyZWVuLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWUgY2xhc3NuYW1lIHRvIGJlIGFkZGVkIHRvIHRoZSBkaWFsb2dcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIGRvbVxuICAgKi9cbiAgX2hlbHBlcnMuZGlhbG9nID0gZnVuY3Rpb24oY29udGVudCwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSB7XG4gICAgbGV0IGNsaWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGxldCBjbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG5cbiAgICBjbGFzc05hbWUgPSAnZm9ybS1idWlsZGVyLWRpYWxvZyAnICsgY2xhc3NOYW1lO1xuXG4gICAgbGV0IG1pbmlNb2RhbCA9IHV0aWxzLm1hcmt1cCgnZGl2JywgY29udGVudCwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChjbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLm1vZGFsT3BlbmVkKTtcblxuICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignZGF0YS1kaWFsb2cnKSAhPT0gLTEpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLnZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb25maXJtIGFsbCBmaWVsZHMgd2lsbCBiZSByZW1vdmVkIHRoZW4gcmVtb3ZlIHRoZW1cbiAgICogQHBhcmFtICB7T2JqZWN0fSBlIGNsaWNrIGV2ZW50IG9iamVjdFxuICAgKi9cbiAgX2hlbHBlcnMuY29uZmlybVJlbW92ZUFsbCA9IGUgPT4ge1xuICAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgIGxldCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgIH07XG5cbiAgICBpZiAoZmllbGRzLmxlbmd0aCkge1xuICAgICAgX2hlbHBlcnMuY29uZmlybShpMThuLmNsZWFyQWxsTWVzc2FnZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgICBvcHRzLm5vdGlmeS5zdWNjZXNzKGkxOG4uYWxsRmllbGRzUmVtb3ZlZCk7XG4gICAgICAgIG9wdHMub25DbGVhckFsbCgpO1xuICAgICAgfSwgY29vcmRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2hlbHBlcnMuZGlhbG9nKGkxOG4ubm9GaWVsZHNUb0NsZWFyLCBjb29yZHMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgZmllbGRzIGZyb20gdGhlIGZvcm1cbiAgICogQHBhcmFtIHtCb29sZWFufSBhbmltYXRlIHdoZXRoZXIgdG8gYW5pbWF0ZSBvciBub3RcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyA9IGZ1bmN0aW9uKGFuaW1hdGUgPSB0cnVlKSB7XG4gICAgbGV0IGZvcm0gPSBmb3JtQnVpbGRlci5zdGFnZTtcbiAgICBsZXQgZmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgbGV0IG1hcmtFbXB0eUFycmF5ID0gW107XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCkge1xuICAgICAgbWFya0VtcHR5QXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIW1hcmtFbXB0eUFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgZm9ybS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICBmb3JtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb250ZW50ID0gaTE4bi5nZXRTdGFydGVkO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlKSB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3JlbW92aW5nJyk7XG4gICAgICBsZXQgb3V0ZXJIZWlnaHQgPSAwO1xuICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4gb3V0ZXJIZWlnaHQgKz0gZmllbGQub2Zmc2V0SGVpZ2h0ICsgMyk7XG4gICAgICBmaWVsZHNbMF0uc3R5bGUubWFyZ2luVG9wID0gYCR7LW91dGVySGVpZ2h0fXB4YDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkLmVtcHR5KGZvcm0pLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92aW5nJyk7XG4gICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIH0sIDQwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQuZW1wdHkoZm9ybSk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHJlLW9yZGVycyB0aGUgZWxlbWVudHMgdGhlaXIgb3JkZXIgc2hvdWxkIGJlIHNhdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGNiVUwgb3VyIGxpc3Qgb2YgZWxlbWVudHNcbiAgICovXG4gIF9oZWxwZXJzLnNldEZpZWxkT3JkZXIgPSBmdW5jdGlvbigkY2JVTCkge1xuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmaWVsZE9yZGVyID0ge307XG4gICAgJGNiVUwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBmaWVsZE9yZGVyW2luZGV4XSA9ICQoZWxlbWVudCkuZGF0YSgnYXR0cnMnKS50eXBlO1xuICAgIH0pO1xuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaWVsZE9yZGVyJywgd2luZG93LkpTT04uc3RyaW5naWZ5KGZpZWxkT3JkZXIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlb3JkZXIgdGhlIGNvbnRyb2xzIGlmIHRoZSB1c2VyIGhhcyBwcmV2aW91c2x5IG9yZGVyZWQgdGhlbS5cbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGZybWJGaWVsZHNcbiAgICogQHJldHVybiB7QXJyYXl9IG9yZGVyZWQgZmllbGRzXG4gICAqL1xuICBfaGVscGVycy5vcmRlckZpZWxkcyA9IGZ1bmN0aW9uKGZybWJGaWVsZHMpIHtcbiAgICBsZXQgZmllbGRPcmRlciA9IGZhbHNlO1xuICAgIGxldCBuZXdPcmRlckZpZWxkcyA9IFtdO1xuXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgICBmaWVsZE9yZGVyID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZE9yZGVyKSB7XG4gICAgICBsZXQgY29udHJvbE9yZGVyID0gb3B0cy5jb250cm9sT3JkZXIuY29uY2F0KGZybWJGaWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgIGZpZWxkLmF0dHJzLnR5cGUpKTtcbiAgICAgIGZpZWxkT3JkZXIgPSB1dGlscy51bmlxdWUoY29udHJvbE9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5KU09OLnBhcnNlKGZpZWxkT3JkZXIpO1xuICAgICAgZmllbGRPcmRlciA9IE9iamVjdC5rZXlzKGZpZWxkT3JkZXIpLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZE9yZGVyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmaWVsZE9yZGVyLmZvckVhY2goKGZpZWxkVHlwZSkgPT4ge1xuICAgICAgbGV0IGZpZWxkID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmF0dHJzLnR5cGUgPT09IGZpZWxkVHlwZTtcbiAgICAgIH0pWzBdO1xuICAgICAgbmV3T3JkZXJGaWVsZHMucHVzaChmaWVsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3T3JkZXJGaWVsZHMuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZSBmaWVsZHMgYmVpbmcgZWRpdGluZ1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUFsbEVkaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAkKCcudG9nZ2xlLWZvcm0nLCBmb3JtQnVpbGRlci5zdGFnZSk7XG4gICAgY29uc3QgZWRpdFBhbmVscyA9ICQoJy5mcm0taG9sZGVyJywgZmllbGRzKTtcblxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICBmaWVsZHMucmVtb3ZlQ2xhc3MoJ2VkaXRpbmcnKTtcbiAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZHMpLnNob3coKTtcbiAgICBlZGl0UGFuZWxzLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWRpdCBtb2RlIGZvciB0aGUgZ2l2ZW4gZmllbGRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZElkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGFuaW1hdGVcbiAgICovXG4gIF9oZWxwZXJzLnRvZ2dsZUVkaXQgPSBmdW5jdGlvbihmaWVsZElkLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gJCgnLnRvZ2dsZS1mb3JtJywgZmllbGQpO1xuICAgIGNvbnN0IGVkaXRQYW5lbCA9ICQoJy5mcm0taG9sZGVyJywgZmllbGQpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcbiAgICB0b2dnbGVCdG4udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnNsaWRlVG9nZ2xlKDI1MCk7XG4gICAgICBlZGl0UGFuZWwuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnRvZ2dsZSgpO1xuICAgICAgZWRpdFBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIF9oZWxwZXJzLnN0aWNreUNvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0ICRjYldyYXAgPSAkKGZvcm1CdWlsZGVyLmNvbnRyb2xzKS5wYXJlbnQoKTtcbiAgICBjb25zdCAkc3RhZ2VXcmFwID0gJChmb3JtQnVpbGRlci5zdGFnZSkucGFyZW50KCk7XG4gICAgY29uc3QgY2JXaWR0aCA9ICRjYldyYXAud2lkdGgoKTtcbiAgICBjb25zdCBjYlBvc2l0aW9uID0gZm9ybUJ1aWxkZXIuY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQoZXZ0LnRhcmdldCkuc2Nyb2xsVG9wKCk7XG4gICAgICBjb25zdCBvZmZzZXREZWZhdWx0cyA9IHtcbiAgICAgICAgdG9wOiA1LFxuICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgbGVmdDogY2JQb3NpdGlvbi5sZWZ0XG4gICAgICB9O1xuXG4gICAgICBsZXQgb2Zmc2V0ID0gb3B0cy5zdGlja3lDb250cm9scy5vZmZzZXQgfHwgb2Zmc2V0RGVmYXVsdHM7XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPiAkc3RhZ2VXcmFwLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogY2JXaWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNiU3R5bGUgPSBPYmplY3QuYXNzaWduKHN0eWxlLCBvZmZzZXQpO1xuXG4gICAgICAgIGxldCBjYk9mZnNldCA9ICRjYldyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBzdGFnZU9mZnNldCA9ICRzdGFnZVdyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBjYkJvdHRvbSA9IGNiT2Zmc2V0LnRvcCArICRjYldyYXAuaGVpZ2h0KCk7XG4gICAgICAgIGxldCBzdGFnZUJvdHRvbSA9IHN0YWdlT2Zmc2V0LnRvcCArICRzdGFnZVdyYXAuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGNiQm90dG9tID4gc3RhZ2VCb3R0b20gJiYgKGNiT2Zmc2V0LnRvcCAhPT0gc3RhZ2VPZmZzZXQudG9wKSkge1xuICAgICAgICAgICRjYldyYXAuY3NzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNiQm90dG9tIDwgc3RhZ2VCb3R0b20gfHwgKGNiQm90dG9tID09PSBzdGFnZUJvdHRvbSAmJiBjYk9mZnNldC50b3AgPiBzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3MoY2JTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1CdWlsZGVyLmNvbnRyb2xzLnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBPcGVuIGEgZGlhbG9nIHdpdGggdGhlIGZvcm0ncyBkYXRhXG4gICAqL1xuICBfaGVscGVycy5zaG93RGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gdXRpbHMuZXNjYXBlSHRtbChmb3JtQnVpbGRlci5mb3JtRGF0YSk7XG4gICAgY29uc3QgY29kZSA9IG0oJ2NvZGUnLCBkYXRhLCB7Y2xhc3NOYW1lOiBgZm9ybURhdGEtJHtvcHRzLmRhdGFUeXBlfWB9KTtcblxuICAgIF9oZWxwZXJzLmRpYWxvZyhtKCdwcmUnLCBjb2RlKSwgbnVsbCwgJ2RhdGEtZGlhbG9nJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGZpZWxkIGZyb20gdGhlIHN0YWdlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGZpZWxkSUQgSUQgb2YgdGhlIGZpZWxkIHRvIGJlIHJlbW92ZWRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gZmllbGRSZW1vdmVkIHJldHVybnMgdHJ1ZSBpZiBmaWVsZCBpcyByZW1vdmVkXG4gICAqL1xuICBfaGVscGVycy5yZW1vdmVGaWVsZCA9IChmaWVsZElEKSA9PiB7XG4gICAgbGV0IGZpZWxkUmVtb3ZlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuICAgIGNvbnN0IGZpZWxkcyA9IGZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1maWVsZCcpO1xuXG4gICAgaWYgKCFmaWVsZHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ05vIGZpZWxkcyB0byByZW1vdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkSUQpIHtcbiAgICAgIGxldCBhdmFpbGFibGVJZHMgPSBbXS5zbGljZS5jYWxsKGZpZWxkcykubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUud2FybignZmllbGRJRCByZXF1aXJlZCB0byB1c2UgYHJlbW92ZUZpZWxkYCBhY3Rpb24uJyk7XG4gICAgICBjb25zb2xlLndhcm4oJ0F2YWlsYWJsZSBJRHM6ICcgKyBhdmFpbGFibGVJZHMuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElEKTtcbiAgICBjb25zdCAkZmllbGQgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSUQpKTtcbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZpZWxkIG5vdCBmb3VuZCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICRmaWVsZC5zbGlkZVVwKDI1MCwgZnVuY3Rpb24oKSB7XG4gICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICAkZmllbGQucmVtb3ZlKCk7XG4gICAgICBmaWVsZFJlbW92ZWQgPSB0cnVlO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgaWYgKCFmb3JtLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBzdGFnZVdyYXAgPSBmb3JtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHN0YWdlV3JhcC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgICBzdGFnZVdyYXAuZGF0YXNldC5jb250ZW50ID0gb3B0cy5tZXNzYWdlcy5nZXRTdGFydGVkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMuZmllbGRSZW1vdmVkKTtcbiAgICByZXR1cm4gZmllbGRSZW1vdmVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgZm9yIGZvcm0gYWN0aW9uIGJ1dHRvbnNcbiAgICogQHBhcmFtICB7T2JqZWN0fSBidXR0b25EYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIGVsZW1lbnQgZm9yIGFjdGlvbiBidXR0b25cbiAgICovXG4gIF9oZWxwZXJzLnByb2Nlc3NBY3Rpb25CdXR0b25zID0gYnV0dG9uRGF0YSA9PiB7XG4gICAgbGV0IHtsYWJlbCwgZXZlbnRzLCAuLi5hdHRyc30gPSBidXR0b25EYXRhO1xuXG4gICAgaWYgKCFsYWJlbCkge1xuICAgICAgbGFiZWwgPSBhdHRycy5pZCA/IHV0aWxzLmNhcGl0YWxpemUoYXR0cnMuaWQpIDogJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsID0gaTE4bltsYWJlbF0gfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCFhdHRycy5pZCkge1xuICAgICAgYXR0cnMuaWQgPSBgJHtmb3JtQnVpbGRlci5mb3JtSUR9LWFjdGlvbi0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSoxMDAwKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRycy5pZCA9IGAke2Zvcm1CdWlsZGVyLmZvcm1JRH0tJHthdHRycy5pZH0tYWN0aW9uYDtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBtKCdidXR0b24nLCBsYWJlbCwgYXR0cnMpO1xuXG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgZm9yIChsZXQgZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICAvKipcbiAgICogQ3Jvc3MgbGluayBzdWJ0eXBlcyBhbmQgZGVmaW5lIG1hcmt1cCBjb25maWdcbiAgICogQHBhcmFtICB7QXJyYXl9IHN1YnR5cGVPcHRzXG4gICAqIEByZXR1cm4ge0FycmF5fSBzdWJ0eXBlc1xuICAgKi9cbiAgX2hlbHBlcnMucHJvY2Vzc1N1YnR5cGVzID0gc3VidHlwZU9wdHMgPT4ge1xuICAgIGNvbnN0IHN1YnR5cGVGb3JtYXQgPSBzdWJ0eXBlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KHN1YnR5cGUpLFxuICAgICAgICAgIHZhbHVlOiBzdWJ0eXBlXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkZWZhdWx0U3VidHlwZXMgPSB7XG4gICAgICAgIHRleHQ6IFsndGV4dCcsICdwYXNzd29yZCcsICdlbWFpbCcsICdjb2xvcicsICd0ZWwnXSxcbiAgICAgICAgaGVhZGVyOiBbJ2gxJywgJ2gyJywgJ2gzJ10sXG4gICAgICAgIGJ1dHRvbjogWydidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0J10sXG4gICAgICAgIHBhcmFncmFwaDogWydwJywgJ2FkZHJlc3MnLCAnYmxvY2txdW90ZScsICdjYW52YXMnLCAnb3V0cHV0J10sXG4gICAgICAgIHRleHRhcmVhOiBbJ3RleHRhcmVhJywgJ3F1aWxsJ11cbiAgICAgIH07XG5cbiAgICAgIGxldCBzdWJ0eXBlcyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRTdWJ0eXBlcywgc3VidHlwZU9wdHMpO1xuXG4gICAgICBmb3IgKGxldCBzdWJ0eXBlIGluIHN1YnR5cGVzKSB7XG4gICAgICAgIGlmIChzdWJ0eXBlcy5oYXNPd25Qcm9wZXJ0eShzdWJ0eXBlKSkge1xuICAgICAgICAgIHN1YnR5cGVzW3N1YnR5cGVdID0gc3VidHlwZXNbc3VidHlwZV0ubWFwKHN1YnR5cGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdWJ0eXBlcztcbiAgfTtcblxuICByZXR1cm4gX2hlbHBlcnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcbiIsImNvbnN0IGtjVG9nZ2xlID0gKCkgPT4ge1xuICBjb25zdCBUb2dnbGUgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICB0aGVtZTogJ2ZyZXNoJyxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIG9mZjogJ09mZicsXG4gICAgICAgIG9uOiAnT24nXG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBvcHRzID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGxldCAka2NUb2dnbGUgPSAkKCc8ZGl2IGNsYXNzPVwia2MtdG9nZ2xlXCIvPicpXG4gICAgICAgIC5pbnNlcnRBZnRlcihlbGVtZW50KVxuICAgICAgICAuYXBwZW5kKGVsZW1lbnQpO1xuXG4gICAgJGtjVG9nZ2xlLnRvZ2dsZUNsYXNzKCdvbicsIGVsZW1lbnQuaXMoJzpjaGVja2VkJykpO1xuXG4gICAgbGV0IGtjdE9uID0gYDxkaXYgY2xhc3M9XCJrY3Qtb25cIj4ke29wdHMubWVzc2FnZXMub259PC9kaXY+YDtcbiAgICBsZXQga2N0T2ZmID0gYDxkaXYgY2xhc3M9XCJrY3Qtb2ZmXCI+JHtvcHRzLm1lc3NhZ2VzLm9mZn08L2Rpdj5gO1xuICAgIGxldCBrY3RIYW5kbGUgPSAnPGRpdiBjbGFzcz1cImtjdC1oYW5kbGVcIj48L2Rpdj4nO1xuICAgIGxldCBrY3RJbm5lciA9IGA8ZGl2IGNsYXNzPVwia2N0LWlubmVyXCI+JHtrY3RPbn0ke2tjdEhhbmRsZX0ke2tjdE9mZn08L2Rpdj5gO1xuXG4gICAgJGtjVG9nZ2xlLmFwcGVuZChrY3RJbm5lcik7XG5cbiAgICAka2NUb2dnbGUuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBlbGVtZW50LmF0dHIoJ2NoZWNrZWQnLCAhZWxlbWVudC5hdHRyKCdjaGVja2VkJykpO1xuICAgICAgJGtjVG9nZ2xlLnRvZ2dsZUNsYXNzKCdvbicpO1xuICAgIH0pO1xuICB9O1xuXG4gIGpRdWVyeS5mbi5rY1RvZ2dsZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBjb25zdCB0b2dnbGUgPSB0aGlzO1xuICAgIHJldHVybiB0b2dnbGUuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICBsZXQgZWxlbWVudCA9ICQodG9nZ2xlW2ldKTtcbiAgICAgIGlmIChlbGVtZW50LmRhdGEoJ2tjVG9nZ2xlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGtjVG9nZ2xlID0gbmV3IFRvZ2dsZShlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgIGVsZW1lbnQuZGF0YSgna2NUb2dnbGUnLCBrY1RvZ2dsZSk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtjVG9nZ2xlKCk7XG4iLCIvKipcbiAqIFBvbHlmaWxscyBmb3Igb2xkZXIgYnJvd3NlcnMgYW5kIGFkZGVkIGZ1bmN0aW9uYWxpdHlcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHBvbHlmaWxscygpIHtcbiAgLy8gRWxlbWVudC5yZW1vdmUoKSBwb2x5ZmlsbFxuICBpZiAoISgncmVtb3ZlJyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBFdmVudCBwb2x5ZmlsbFxuICBpZiAodHlwZW9mIEV2ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LkV2ZW50ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoZXZ0LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG5cbiAgLy8gT2JqZWN0LmFzc2lnbiBwb2x5ZmlsbFxuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0ID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBsZXQgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbHlmaWxscygpO1xuIiwiaW1wb3J0IGQgZnJvbSAnLi9kb20nO1xuXG4vKipcbiAqIENyb3NzIGZpbGUgdXRpbGl0aWVzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzLFxuICogc29ydGluZyBhbmQgb3RoZXIgZnVuIHN0dWZmXG4gKiBAcmV0dXJuIHtPYmplY3R9IGZiVXRpbHNcbiAqL1xuLy8gZnVuY3Rpb24gdXRpbHMoKSB7XG4gIGNvbnN0IGZiVXRpbHMgPSB7fTtcbiAgd2luZG93LmZiTG9hZGVkID0ge1xuICAgIGpzOiBbXSxcbiAgICBjc3M6IFtdXG4gIH07XG4gIHdpbmRvdy5mYkVkaXRvcnMgPSB7XG4gICAgcXVpbGw6IHt9LFxuICAgIHRpbnltY2U6IHt9XG4gIH07XG5cbiAgLy8gY2xlYW5lciBzeW50YXggZm9yIHRlc3RpbmcgaW5kZXhPZiBlbGVtZW50XG4gIGZiVXRpbHMuaW5BcnJheSA9IGZ1bmN0aW9uKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIE9iamVjdCB0cmltbWVkIG9mIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy50cmltT2JqID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgeG1sUmVtb3ZlID0gW1xuICAgICAgbnVsbCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgICcnLFxuICAgICAgZmFsc2UsXG4gICAgICAnZmFsc2UnXG4gICAgXTtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoZmJVdGlscy5pbkFycmF5KGF0dHJzW2F0dHJdLCB4bWxSZW1vdmUpKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhdHRyc1thdHRyXSkpIHtcbiAgICAgICAgaWYgKCFhdHRyc1thdHRyXS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgYXR0cmlidXRlIGlzIGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmYlV0aWxzLnZhbGlkQXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICBsZXQgaW52YWxpZCA9IFtcbiAgICAgICd2YWx1ZXMnLFxuICAgICAgJ2VuYWJsZU90aGVyJyxcbiAgICAgICdvdGhlcicsXG4gICAgICAnbGFiZWwnLFxuICAgICAgLy8gJ3N0eWxlJyxcbiAgICAgICdzdWJ0eXBlJ1xuICAgIF07XG4gICAgcmV0dXJuICFmYlV0aWxzLmluQXJyYXkoYXR0ciwgaW52YWxpZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gYXR0cnMgb2JqZWN0IGludG8gYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBvYmplY3Qgb2YgYXR0cmlidXRlcyBmb3IgbWFya3VwXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuYXR0clN0cmluZyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSAmJiBmYlV0aWxzLnZhbGlkQXR0cihhdHRyKSkge1xuICAgICAgICBhdHRyID0gZmJVdGlscy5zYWZlQXR0cihhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyLm5hbWUgKyBhdHRyLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuam9pbignICcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGF0dHJpYnV0ZXMgdG8gbWFya3VwIHNhZmUgc3RyaW5nc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgYXR0cmlidXRlIHZhbHVlXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnNhZmVBdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUobmFtZSk7XG4gICAgbGV0IHZhbFN0cmluZztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB2YWxTdHJpbmcgPSBmYlV0aWxzLmVzY2FwZUF0dHIodmFsdWUucmVwbGFjZSgnLCcsICcgJykudHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlID8gYD1cIiR7dmFsU3RyaW5nfVwiYCA6ICcnO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIGZiVXRpbHMuc2FmZUF0dHJOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGxldCBzYWZlQXR0ciA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJ1xuICAgIH07XG5cbiAgICByZXR1cm4gc2FmZUF0dHJbbmFtZV0gfHwgZmJVdGlscy5oeXBoZW5DYXNlKG5hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHN0cmluZ3MgaW50byBsb3dlcmNhc2UtaHlwaGVuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuaHlwaGVuQ2FzZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9eLSsvZywgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0IGEgaHlwaGVuYXRlZCBzdHJpbmcgdG8gY2FtZWxDYXNlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuY2FtZWxDYXNlID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24obSwgdykge1xuICAgICAgcmV0dXJuIHcudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGNvbnRlbnQgdHlwZVxuICAgKiBAcGFyYW0gIHtOb2RlIHwgU3RyaW5nIHwgQXJyYXkgfCBPYmplY3R9IGNvbnRlbnRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSBmb3IgbWFwcGluZ1xuICAgKi9cbiAgZmJVdGlscy5jb250ZW50VHlwZSA9IGNvbnRlbnQgPT4ge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIGNvbnRlbnQ7XG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdHlwZSA9ICdub2RlJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgIHR5cGUgPSAnYXJyYXknO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50cyB0byBhbiBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50cyAgb2JqZWN0IGZ1bGwgb2YgZXZlbnRzIGVnLiB7Y2xpY2s6IGV2dCA9PiBjYWxsYmFja31cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZiVXRpbHMuYmluZEV2ZW50cyA9IChlbGVtZW50LCBldmVudHMpID0+IHtcbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBmb3IgKGxldCBldmVudCBpbiBldmVudHMpIHtcbiAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgd3JhcHBlciB3aGVyZSBuZWVkZWRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgdGFnXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheXxPYmplY3R9IGNvbnRlbnQgd2Ugd3JhcCB0aGlzXG4gICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgIGF0dHJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIEVsZW1lbnRcbiAgICovXG4gIGZiVXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGxldCBjb250ZW50VHlwZSA9IGZiVXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgbGV0IHtldmVudHMsIC4uLmF0dHJzfSA9IGF0dHJpYnV0ZXM7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICBjb25zdCBhcHBlbmRDb250ZW50ID0ge1xuICAgICAgc3RyaW5nOiAoY29udGVudCkgPT4ge1xuICAgICAgICBmaWVsZC5pbm5lckhUTUwgKz0gY29udGVudDtcbiAgICAgIH0sXG4gICAgICBvYmplY3Q6IChjb25maWcpID0+IHtcbiAgICAgICAgbGV0IHt0YWcsIGNvbnRlbnQsIC4uLmRhdGF9ID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoZmJVdGlscy5tYXJrdXAodGFnLCBjb250ZW50LCBkYXRhKSk7XG4gICAgICB9LFxuICAgICAgbm9kZTogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgfSxcbiAgICAgIGFycmF5OiAoY29udGVudCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb250ZW50VHlwZSA9IGZiVXRpbHMuY29udGVudFR5cGUoY29udGVudFtpXSk7XG4gICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbjogY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50KCk7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudCk7XG4gICAgICB9LFxuICAgICAgdW5kZWZpbmVkOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGFnLCBjb250ZW50LCBhdHRyaWJ1dGVzKTtcbiAgICAgIH0sXG4gICAgfTtcblxuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGxldCBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdLmNhbGwodGhpcywgY29udGVudCk7XG4gICAgfVxuXG4gICAgZmJVdGlscy5iaW5kRXZlbnRzKGZpZWxkLCBldmVudHMpO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuICBjb25zdCBtID0gZmJVdGlscy5tYXJrdXA7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaHRtbCBlbGVtZW50IGF0dHJpYnV0ZXMgdG8ga2V5L3ZhbHVlIG9iamVjdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW0gRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSBleDoge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgbGV0IGF0dHJzID0gZWxlbS5hdHRyaWJ1dGVzO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgZmJVdGlscy5mb3JFYWNoKGF0dHJzLCBhdHRyID0+IHtcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XG4gICAgICBpZiAoYXR0clZhbC5tYXRjaCgvZmFsc2V8dHJ1ZS9nKSkge1xuICAgICAgICBhdHRyVmFsID0gKGF0dHJWYWwgPT09ICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xuICAgICAgICBhdHRyVmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0clZhbCkge1xuICAgICAgICBkYXRhW2F0dHJzW2F0dHJdLm5hbWVdID0gYXR0clZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZpZWxkIG9wdGlvbnMgdG8gb3B0aW9uRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkICBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICBvcHRpb25EYXRhIGFycmF5XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKTtcbiAgICBsZXQgb3B0aW9uRGF0YSA9IHt9O1xuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvcHRpb25EYXRhID0gZmJVdGlscy5wYXJzZUF0dHJzKG9wdGlvbnNbaV0pO1xuICAgICAgICBvcHRpb25EYXRhLmxhYmVsID0gb3B0aW9uc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgZGF0YS5wdXNoKG9wdGlvbkRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZSBYTUwgZm9ybURhdGFcbiAgICogQHBhcmFtICB7U3RyaW5nfSB4bWxTdHJpbmdcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgZm9ybURhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VYTUwgPSBmdW5jdGlvbih4bWxTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgIGxldCB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbFN0cmluZywgJ3RleHQveG1sJyk7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG5cbiAgICBpZiAoeG1sKSB7XG4gICAgICBsZXQgZmllbGRzID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWVsZCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IGZiVXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuXG4gICAgICAgIGlmIChmaWVsZHNbaV0uY2hpbGRyZW4gJiYgZmllbGRzW2ldLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBmYlV0aWxzLnBhcnNlT3B0aW9ucyhmaWVsZHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgZXNjYXBlZCBIVE1MIGludG8gdXNhYmxlIEhUTUxcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sIGVzY2FwZWQgSFRNTFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgcGFyc2VkIEhUTUxcbiAgICovXG4gIGZiVXRpbHMucGFyc2VkSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBsZXQgZXNjYXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZXNjYXBlRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFc2NhcGUgbWFya3VwIHNvIGl0IGNhbiBiZSBkaXNwbGF5ZWQgcmF0aGVyIHRoYW4gcmVuZGVyZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sIG1hcmt1cFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgZXNjYXBlZCBodG1sXG4gICAqL1xuICBmYlV0aWxzLmVzY2FwZUh0bWwgPSBmdW5jdGlvbihodG1sKSB7XG4gICAgbGV0IGVzY2FwZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQgPSBodG1sO1xuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LmlubmVySFRNTDtcbiAgfTtcblxuICAvLyBFc2NhcGUgYW4gYXR0cmlidXRlXG4gIGZiVXRpbHMuZXNjYXBlQXR0ciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCBtYXRjaCA9IHtcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7J1xuICAgIH07XG5cbiAgICBjb25zdCByZXBsYWNlVGFnID0gdGFnID0+IG1hdGNoW3RhZ10gfHwgdGFnO1xuXG4gICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykgPyBzdHIucmVwbGFjZSgvW1wiJjw+XS9nLCByZXBsYWNlVGFnKSA6IHN0cjtcbiAgfTtcblxuICAvLyBFc2NhcGUgYXR0cmlidXRlc1xuICBmYlV0aWxzLmVzY2FwZUF0dHJzID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgYXR0cnNbYXR0cl0gPSBmYlV0aWxzLmVzY2FwZUF0dHIoYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvLyBmb3JFYWNoIHRoYXQgY2FuIGJlIHVzZWQgb24gbm9kZUxpc3RcbiAgZmJVdGlscy5mb3JFYWNoID0gZnVuY3Rpb24oYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTsgLy8gcGFzc2VzIGJhY2sgc3R1ZmYgd2UgbmVlZFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheSBvZiBlbGVtZW50c1xuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgIGFycmF5IHdpdGggcG9zc2libGUgZHVwbGljYXRlc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIGFycmF5IHdpdGggb25seSB1bmlxdWUgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigoZWxlbSwgcG9zLCBhcnIpID0+IHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihlbGVtKSA9PT0gcG9zO1xuICAgIH0pO1xuICB9O1xuXG4gIGZiVXRpbHMubWFrZUxhYmVsID0gKGRhdGEsIGxhYmVsID0gJycsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgICBsZXQgbGFiZWxDb250ZW50cyA9IFtkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCldO1xuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkJykpIHtcbiAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJyonLCB7Y2xhc3NOYW1lOiAncmVxdWlyZWQnfSkpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnPycsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICAgIHRvb2x0aXA6IGRlc2NyaXB0aW9uXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbSgnbGFiZWwnLCBsYWJlbENvbnRlbnRzLCB7XG4gICAgICBmb3I6IGRhdGEuaWQsXG4gICAgICBjbGFzc05hbWU6IGBmYi0ke2RhdGEudHlwZX0tbGFiZWxgXG4gICAgfSk7XG4gIH07XG5cbiAgZmJVdGlscy50ZW1wbGF0ZU1hcCA9ICh0ZW1wbGF0ZXMsIHR5cGUsIGZhbGxiYWNrKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCB0ZW1wbGF0ZU1hcCA9IG5ldyBNYXAodGVtcGxhdGVzKTtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgdGVtcGxhdGVNYXApIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgaWYoZmJVdGlscy5pbkFycmF5KHR5cGUsIGtleSkpIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGtleSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICB0ZW1wbGF0ZSA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSgpO1xuICB9O1xuXG4gIGZiVXRpbHMuYXV0b2NvbXBsZXRlVGVtcGxhdGUgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7dmFsdWVzLCB0eXBlLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBjb25zdCBmYXV4RXZlbnRzID0ge1xuICAgICAgaW5wdXQ6IChldnQpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGEuaWR9LWxpc3RgKTtcbiAgICAgICAgZC5maWx0ZXIobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLCBldnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKCFldnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBmYXV4QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLFxuICAgICAge1xuICAgICAgICBpZDogYCR7ZGF0YS5pZH0taW5wdXRgLFxuICAgICAgICBldmVudHM6IGZhdXhFdmVudHNcbiAgICAgIH0pO1xuICAgIGxldCBoaWRkZW5BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHt0eXBlOiAnaGlkZGVuJ30pO1xuICAgIGRlbGV0ZSBmYXV4QXR0cnMubmFtZTtcbiAgICBjb25zdCBmaWVsZCA9IFtcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgZmF1eEF0dHJzKSxcbiAgICAgIG0oJ2lucHV0JywgbnVsbCwgaGlkZGVuQXR0cnMpXG4gICAgXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB2YWx1ZXMubWFwKChvcHRpb25EYXRhLCBpKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSBvcHRpb25EYXRhLmxhYmVsO1xuICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhLmlkfS1saXN0YCk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEuaWQpO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBvcHRpb25EYXRhLnZhbHVlO1xuICAgICAgICAgICAgZmllbGQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gb3B0aW9uRGF0YS5sYWJlbDtcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBvcHRpb25EYXRhLnZhbHVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG0oJ2xpJywgbGFiZWwsIGNvbmZpZyk7XG4gICAgfSk7XG5cbiAgICBmaWVsZC5wdXNoKG0oJ3VsJywgb3B0aW9ucyxcbiAgICAgIHtpZDogYCR7ZGF0YS5pZH0tbGlzdGAsIGNsYXNzTmFtZTogYGZiLSR7dHlwZX0tbGlzdGB9KSk7XG5cbiAgICBjb25zdCBvblJlbmRlciA9IChldnQpID0+IHtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge2ZpZWxkLCBvblJlbmRlcn07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIERPTSBlbGVtZW50cyBmb3Igc2VsZWN0LCBjaGVja2JveC1ncm91cCBhbmQgcmFkaW8tZ3JvdXAuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGREYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIERPTSBlbGVtZW50c1xuICAgKi9cbiAgZmJVdGlscy5zZWxlY3RUZW1wbGF0ZSA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICBsZXQge3ZhbHVlcywgcGxhY2Vob2xkZXIsIHR5cGUsIGlubGluZSwgb3RoZXIsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCBvcHRpb25UeXBlID0gdHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG4gICAgbGV0IGlzU2VsZWN0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBpZiAocGxhY2Vob2xkZXIgJiYgaXNTZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5wdXNoKG0oJ29wdGlvbicsIHBsYWNlaG9sZGVyLCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWQ6IG51bGxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQge2xhYmVsID0gJycsIC4uLm9wdGlvbkF0dHJzfSA9IHZhbHVlc1tpXTtcblxuICAgICAgICBvcHRpb25BdHRycy5pZCA9IGAke2RhdGEuaWR9LSR7aX1gO1xuICAgICAgICBpZiAoIW9wdGlvbkF0dHJzLnNlbGVjdGVkIHx8IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICAgICAgbGV0IG8gPSBtKCdvcHRpb24nLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCksIG9wdGlvbkF0dHJzKTtcbiAgICAgICAgICBvcHRpb25zLnB1c2gobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKG9wdGlvbkF0dHJzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGlucHV0ID0gbSgnaW5wdXQnLCBudWxsLCBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBvcHRpb25BdHRycykpO1xuICAgICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBbaW5wdXQsIGxhYmVsXSwge2Zvcjogb3B0aW9uQXR0cnMuaWR9KTtcbiAgICAgICAgICBsZXQgd3JhcHBlciA9IG0oJ2RpdicsIGlucHV0TGFiZWwsIHtjbGFzc05hbWU6IHdyYXBwZXJDbGFzc30pO1xuICAgICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU2VsZWN0ICYmIG90aGVyKSB7XG4gICAgICAgIGxldCBvdGhlck9wdGlvbkF0dHJzID0ge1xuICAgICAgICAgIGlkOiBgJHtkYXRhLmlkfS1vdGhlcmAsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgJHtkYXRhLmNsYXNzTmFtZX0gb3RoZXItb3B0aW9uYCxcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBmYlV0aWxzLm90aGVyT3B0aW9uQ0Iob3RoZXJPcHRpb25BdHRycy5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGxldCBsYWJlbCA9IG1pMThuLmN1cnJlbnQub3RoZXI7XG4gICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBvcHRpb25UeXBlO1xuICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG90aGVyT3B0aW9uQXR0cnMpO1xuICAgICAgICBvcHRpb25BdHRycy50eXBlID0gb3B0aW9uVHlwZTtcblxuICAgICAgICBsZXQgb3RoZXJWYWxBdHRycyA9IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgIGlkOiBgJHtvdGhlck9wdGlvbkF0dHJzLmlkfS12YWx1ZWAsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnb3RoZXItdmFsJ1xuICAgICAgICB9O1xuICAgICAgICBsZXQgb3RoZXJJbnB1dHMgPSBbXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvcHRpb25BdHRycyksXG4gICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ090aGVyJyksXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvdGhlclZhbEF0dHJzKVxuICAgICAgICBdO1xuICAgICAgICBsZXQgaW5wdXRMYWJlbCA9IG0oJ2xhYmVsJywgb3RoZXJJbnB1dHMsIHtmb3I6IG9wdGlvbkF0dHJzLmlkfSk7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XG4gICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBbXG4gICAgICBbJ3NlbGVjdCcsXG4gICAgICAgICgpID0+IG0ob3B0aW9uVHlwZSwgb3B0aW9ucywgZGF0YSldLFxuICAgICAgW1snY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSxcbiAgICAgICAgKCkgPT4gbSgnZGl2Jywgb3B0aW9ucywge2NsYXNzTmFtZTogdHlwZX0pXVxuICAgIF07XG5cbiAgICByZXR1cm4gZmJVdGlscy50ZW1wbGF0ZU1hcCh0ZW1wbGF0ZXMsIHR5cGUpO1xuICB9O1xuXG4gIGZiVXRpbHMuZGVmYXVsdEZpZWxkID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQge2xhYmVsLCBkZXNjcmlwdGlvbiwgc3VidHlwZSwgdHlwZSwgaWQsIGlzUHJldmlldywgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgaWYgKGlkKSB7XG4gICAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgICB9XG4gICAgICBkYXRhLmlkID0gZGF0YS5uYW1lO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgIGRhdGEudGl0bGUgPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIHR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGxldCBmaWVsZCA9IHtcbiAgICAgIGZpZWxkOiBtKHR5cGUsIGxhYmVsLCBkYXRhKSxcbiAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuICgpID0+IGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhcnJheSBvZiBzY3JpcHRzIHVzaW5nIGpRdWVyeSdzIGBnZXRTY3JpcHRgXG4gICAqIEBwYXJhbSAge0FycmF5fFN0cmluZ30gIHNjcmlwdFNjciAgICBzY3JpcHRzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCAgIG9wdGlvbmFsIHRvIGxvYWQgZm9ybVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICBhIHByb21pc2VcbiAgICovXG4gIGZiVXRpbHMuZ2V0U2NyaXB0cyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBjb25zdCAkID0galF1ZXJ5O1xuICAgIGxldCBfYXJyID0gW107XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NyaXB0U2NyKSkge1xuICAgICAgc2NyaXB0U2NyID0gW3NjcmlwdFNjcl07XG4gICAgfVxuXG4gICAgaWYgKCFmYlV0aWxzLmlzQ2FjaGVkKHNjcmlwdFNjcikpIHtcbiAgICAgIF9hcnIgPSAkLm1hcChzY3JpcHRTY3IsIHNyYyA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIGRhdGFUeXBlOiAnc2NyaXB0JyxcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICB1cmw6IChwYXRoIHx8ICcnKSArIHNyY1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpLmRvbmUoKCkgPT4gd2luZG93LmZiTG9hZGVkLmpzLnB1c2goc3JjKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfYXJyLnB1c2goJC5EZWZlcnJlZCggZGVmZXJyZWQgPT4gJCggZGVmZXJyZWQucmVzb2x2ZSApKSk7XG5cbiAgICByZXR1cm4gJC53aGVuKC4uLl9hcnIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcmVtb3RlIHJlc291cmNlIGlzIGFscmVhZHkgbG9hZGVkXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gc3JjICB1cmwgb2YgcmVtb3RlIHNjcmlwdCBvciBjc3NcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgICAgICB0eXBlICAgICAgICdqcycgb3IgJ2NzcydcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBpc0NhY2hlZFxuICAgKi9cbiAgZmJVdGlscy5pc0NhY2hlZCA9IChzcmMsIHR5cGUgPSAnanMnKSA9PiB7XG4gICAgbGV0IGlzQ2FjaGVkID0gZmFsc2U7XG4gICAgY29uc3QgY2FjaGUgPSB3aW5kb3cuZmJMb2FkZWRbdHlwZV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgICAgaXNDYWNoZWQgPSBzcmMuZXZlcnkocyA9PiBmYlV0aWxzLmluQXJyYXkocywgY2FjaGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDYWNoZWQgPSBmYlV0aWxzLmluQXJyYXkoc3JjLCBjYWNoZSk7XG4gICAgfVxuICAgIHJldHVybiBpc0NhY2hlZDtcbiAgfTtcblxuICAvKipcbiAgICogQXBwZW5kcyBzdHlsZXNoZWV0cyB0byB0aGUgaGVhZFxuICAgKiBAcGFyYW0gIHtBcnJheX0gc2NyaXB0U2NyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmJVdGlscy5nZXRTdHlsZXMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgaWYgKGZiVXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyLCAnY3NzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBwZW5kU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgd2luZG93LmZiTG9hZGVkLmNzcy5wdXNoKGhyZWYpO1xuICAgIH07XG4gICAgc2NyaXB0U2NyLmZvckVhY2goc3JjID0+IGFwcGVuZFN0eWxlKChwYXRoIHx8ICcnKSArIHNyYykpO1xuICB9O1xuXG4gIGZiVXRpbHMubG9uZ1RleHRUZW1wbGF0ZSA9IGRhdGEgPT4ge1xuICAgIGxldCB7dmFsdWUgPSAnJywgLi4uYXR0cnN9ID0gZGF0YTtcbiAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICBmaWVsZDogbSgndGV4dGFyZWEnLCBmYlV0aWxzLnBhcnNlZEh0bWwodmFsdWUpLCBhdHRycylcbiAgICB9O1xuICAgIGxldCBlZGl0b3JzID0ge1xuICAgICAgdGlueW1jZToge1xuICAgICAgICBqczogWycvL2Nkbi50aW55bWNlLmNvbS80L3RpbnltY2UubWluLmpzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdKSB7XG4gICAgICAgICAgICB3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cudGlueW1jZS5pbml0KHtcbiAgICAgICAgICAgIHRhcmdldDogdGVtcGxhdGUuZmllbGQsXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgJ2Fkdmxpc3QgYXV0b2xpbmsgbGlzdHMgbGluayBpbWFnZSBjaGFybWFwIHByaW50IHByZXZpZXcgYW5jaG9yJyxcbiAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICdpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBjb250ZXh0bWVudSBwYXN0ZSBjb2RlJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRvb2xiYXI6ICdpbnNlcnRmaWxlIHVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcXVpbGw6IHtcbiAgICAgICAganM6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuanMnXSxcbiAgICAgICAgY3NzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLnNub3cuY3NzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGNvbnN0IERlbHRhID0gd2luZG93LlF1aWxsLmltcG9ydCgnZGVsdGEnKTtcbiAgICAgICAgICB3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2RhdGEuaWRdID0ge307XG4gICAgICAgICAgbGV0IGVkaXRvciA9IHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbZGF0YS5pZF07XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlID0gbmV3IHdpbmRvdy5RdWlsbCh0ZW1wbGF0ZS5maWVsZCwge1xuICAgICAgICAgICAgbW9kdWxlczoge1xuICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIGZhbHNlXX1dLFxuICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXG4gICAgICAgICAgICAgICAgWydjb2RlLWJsb2NrJ11cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBhdHRycy5wbGFjZWhvbGRlciB8fCAnJyxcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlZGl0b3IuZGF0YSA9IG5ldyBEZWx0YSgpO1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZWRpdG9yLmluc3RhbmNlLnNldENvbnRlbnRzKHdpbmRvdy5KU09OLnBhcnNlKGZiVXRpbHMucGFyc2VkSHRtbCh2YWx1ZSkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICAgICAgICBlZGl0b3IuZGF0YSA9IGVkaXRvci5kYXRhLmNvbXBvc2UoZGVsdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRlbXBsYXRlLm9uUmVuZGVyID0gZWRpdG9yc1tkYXRhLnR5cGVdLm9uUmVuZGVyO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAncXVpbGwnKSB7XG4gICAgICB0ZW1wbGF0ZS5maWVsZCA9IG0oJ2RpdicsIG51bGwsIGF0dHJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0pIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIG9uUmVuZGVyKTtcblxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcykge1xuICAgICAgICAgIGZiVXRpbHMuZ2V0U3R5bGVzKGVkaXRvcnNbZGF0YS50eXBlXS5jc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uanMgJiYgIWZiVXRpbHMuaXNDYWNoZWQoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKSkge1xuICAgICAgICAgIGZiVXRpbHMuZ2V0U2NyaXB0cyhlZGl0b3JzW2RhdGEudHlwZV0uanMpLmRvbmUodGVtcGxhdGUub25SZW5kZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlLm9uUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtmaWVsZDogdGVtcGxhdGUuZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICBmYlV0aWxzLmdldFRlbXBsYXRlID0gKGZpZWxkRGF0YSwgaXNQcmV2aWV3ID0gZmFsc2UpID0+IHtcbiAgICBsZXQge1xuICAgICAgbGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHN1YnR5cGUsXG4gICAgICBsYWJlbFBvc2l0aW9uLFxuICAgICAgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCBmaWVsZDtcblxuICAgIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgfVxuICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XG5cbiAgICBpZiAoc3VidHlwZSkge1xuICAgICAgZGF0YS50eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5tdWx0aXBsZSB8fCBkYXRhLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpIHtcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICdbXSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucmVxdWlyZWQpIHtcbiAgICAgIGRhdGEucmVxdWlyZWQgPSBudWxsO1xuICAgICAgZGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGxldCBmaWVsZExhYmVsID0gZmJVdGlscy5tYWtlTGFiZWwoZGF0YSwgbGFiZWwsIGRlc2NyaXB0aW9uKTtcblxuICAgIGxldCB0ZW1wbGF0ZXMgPSBbXG4gICAgICBbWydhdXRvY29tcGxldGUnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBhdXRvY29tcGxldGUgPSBmYlV0aWxzLmF1dG9jb21wbGV0ZVRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgYXV0b2NvbXBsZXRlLmZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBhdXRvY29tcGxldGUub25SZW5kZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ251bWJlcicsICdmaWxlJywgJ2NvbG9yJywgJ2RhdGUnLCAndGVsJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIG0oJ2lucHV0JywgbnVsbCwgZGF0YSldLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBtKCdidXR0b24nLCBsYWJlbCwgZGF0YSksXG4gICAgICAgICAgICBvblJlbmRlcjogZmJVdGlscy5ub29wXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1snc2VsZWN0JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSBmYlV0aWxzLnNlbGVjdFRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFsnY2hlY2tib3gnLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gW20oJ2lucHV0JywgbnVsbCwgZGF0YSldO1xuICAgICAgICAgIGlmIChsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlSW5wdXQnKSB7XG4gICAgICAgICAgICBmaWVsZC51bnNoaWZ0KGZpZWxkTGFiZWwsICcgJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkLnB1c2goJyAnLCBmaWVsZExhYmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBvblJlbmRlcjogKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZGF0YS50b2dnbGUpIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEuaWQpKS5rY1RvZ2dsZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1sndGV4dGFyZWEnLCAndGlueW1jZScsICdxdWlsbCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gZmJVdGlscy5sb25nVGV4dFRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGQuZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZpZWxkLm9uUmVuZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dXG4gICAgICBdO1xuXG4gICAgICB0ZW1wbGF0ZSA9IGZiVXRpbHMudGVtcGxhdGVNYXAoXG4gICAgICAgIHRlbXBsYXRlcyxcbiAgICAgICAgZGF0YS50eXBlLFxuICAgICAgICBmYlV0aWxzLmRlZmF1bHRGaWVsZChmaWVsZERhdGEpIC8vIGZhbGxiYWNrXG4gICAgICApO1xuXG4gICAgICBpZiAoZGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICBsZXQgd3JhcHBlckF0dHJzID0ge307XG4gICAgICAgIGlmIChkYXRhLmlkKSB7XG4gICAgICAgICAgd3JhcHBlckF0dHJzLmNsYXNzTmFtZSA9XG4gICAgICAgICAgYGZiLSR7ZGF0YS50eXBlfSBmb3JtLWdyb3VwIGZpZWxkLSR7ZGF0YS5pZH1gO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkID0gZmJVdGlscy5tYXJrdXAoJ2RpdicsIHRlbXBsYXRlLmZpZWxkLCB3cmFwcGVyQXR0cnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQgPSBmYlV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIHRlbXBsYXRlLm9uUmVuZGVyKTtcblxuICAgICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igb3RoZXIgb3B0aW9uLlxuICAgKiBUb2dnbGVzIHRoZSBoaWRkZW4gdGV4dCBhcmVhIGZvciBcIm90aGVyXCIgb3B0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG90aGVySWQgaWQgb2YgdGhlIFwib3RoZXJcIiBvcHRpb24gaW5wdXRcbiAgICovXG4gIGZiVXRpbHMub3RoZXJPcHRpb25DQiA9IChvdGhlcklkKSA9PiB7XG4gICAgY29uc3Qgb3RoZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG90aGVySWQpO1xuICAgIGNvbnN0IG90aGVySW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke290aGVySWR9LXZhbHVlYCk7XG5cbiAgICBpZiAob3RoZXJJbnB1dC5jaGVja2VkKSB7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHVuY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgKi9cbiAgZmJVdGlscy5jYXBpdGFsaXplID0gc3RyID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcYlxcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiBtLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgfTtcblxuXG5mYlV0aWxzLm1lcmdlID0gKG9iajEsIG9iajIpID0+IHtcbiAgbGV0IG1lcmdlZE9iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9iajEsIG9iajIpO1xuICBmb3IgKGxldCBwcm9wIGluIG9iajIpIHtcbiAgICBpZiAobWVyZ2VkT2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmoyW3Byb3BdKSkge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBBcnJheS5pc0FycmF5KG9iajFbcHJvcF0pID8gZmJVdGlscy51bmlxdWUob2JqMVtwcm9wXS5jb25jYXQob2JqMltwcm9wXSkpIDogb2JqMltwcm9wXTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iajJbcHJvcF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IGZiVXRpbHMubWVyZ2Uob2JqMVtwcm9wXSwgb2JqMltwcm9wXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBvYmoyW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VkT2JqO1xufTtcblxuLyoqXG4gKiBVdGlsIHRvIHJlbW92ZSBjb250ZW50cyBvZiBET00gT2JqZWN0XG4gKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBlbGVtZW50IHdpdGggaXRzIGNoaWxkcmVuIHJlbW92ZWRcbiAqL1xuZmJVdGlscy5lbXB0eSA9IGVsZW1lbnQgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZmJVdGlscy5ub29wID0gKCkgPT4gbnVsbDtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZiVXRpbHM7XG4iXX0=
