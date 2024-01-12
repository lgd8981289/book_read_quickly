/*!
 * clone 1.0.0
 * Licensed under MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Array$from = _interopDefault(require('@babel/runtime-corejs2/core-js/array/from'));

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
