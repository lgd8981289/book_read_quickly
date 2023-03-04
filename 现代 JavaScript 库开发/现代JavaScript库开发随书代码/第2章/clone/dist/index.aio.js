/*!
 * clone 1.0.0
 * Licensed under MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime-corejs2/core-js/array/from')) :
    typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime-corejs2/core-js/array/from'], factory) :
    (factory((global.clone = {}),global._Array$from));
}(this, (function (exports,_Array$from) { 'use strict';

    _Array$from = _Array$from && _Array$from.hasOwnProperty('default') ? _Array$from['default'] : _Array$from;

    function type(data) {
      return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
    }

    _Array$from('abc'); // ['a', 'b', 'c']


    function clone(source) {
      var t = type(source);

      if (t !== "object" && t !== "array") {
        return source;
      }

      var target;

      if (t === "object") {
        target = {};

        for (var i in source) {
          if (source.hasOwnProperty(i)) {
            target[i] = clone(source[i]); // 注意这里
          }
        }
      } else {
        target = [];

        for (var _i = 0; _i < source.length; _i++) {
          target[_i] = clone(source[_i]); // 注意这里
        }
      }

      return target;
    }

    exports.clone = clone;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
