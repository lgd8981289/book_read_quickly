/*!
 * @jslib-book/type 1.0.2
 * Licensed under MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function type(x) {
  var _x$constructor;

  var t = _typeof(x);

  if (x === null) {
    return 'null';
  }

  if (t !== 'object') {
    return t;
  }

  var toString = Object.prototype.toString;
  var innerType = toString.call(x).slice(8, -1);
  var innerLowType = innerType.toLowerCase(); // 区分 String() 和 new String()

  if (['String', 'Boolean', 'Number'].includes(innerType)) {
    return innerType;
  } // function A() {}; new A


  if (typeof (x === null || x === void 0 ? void 0 : (_x$constructor = x.constructor) === null || _x$constructor === void 0 ? void 0 : _x$constructor.name) === 'string') {
    return x.constructor.name;
  }

  return innerLowType;
}

exports.type = type;
