/*!
 * @jslib-book/isequal 1.0.0
 * Licensed under MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Object$keys = _interopDefault(require('@babel/runtime-corejs2/core-js/object/keys'));
var type = require('@jslib-book/type');

function equalArray(value, other, enhancer) {
  if (value.length !== other.length) {
    return false;
  }

  for (var i = 0; i < value.length; i++) {
    if (!isEqual(value[i], other[i], enhancer)) {
      return false;
    }
  }

  return true;
}

function equalObject(value, other, enhancer) {
  var vKeys = _Object$keys(value);

  var oKeys = _Object$keys(other);

  if (vKeys.length !== oKeys.length) {
    return false;
  }

  for (var i = 0; i < vKeys.length; i++) {
    var v = value[vKeys[i]];
    var o = other[vKeys[i]];

    if (!isEqual(v, o, enhancer)) {
      return false;
    }
  }

  return true;
}

function isEqual(value, other, enhancer) {
  var next = function next() {
    // 全等
    if (value === other) {
      return true;
    }

    var vType = type.type(value);
    var oType = type.type(other); // 类型不同

    if (vType !== oType) {
      return false;
    }

    if (vType === "array") {
      // 数组判断
      return equalArray(value, other, enhancer);
    }

    if (vType === "object") {
      // 对象判断
      return equalObject(value, other, enhancer);
    }

    return value === other;
  };

  if (type.type(enhancer) === 'function') {
    return enhancer(next)(value, other);
  }

  return next();
}

exports.isEqual = isEqual;
