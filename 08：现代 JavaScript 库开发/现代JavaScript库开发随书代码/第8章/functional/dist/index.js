/*!
 * @jslib-book/functional 1.0.0
 * Licensed under MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function once(fn) {
  var count = 0;
  return function () {
    if (count === 0) {
      count += 1;
      return fn.apply(void 0, arguments);
    }
  };
}
function curry(func) {
  var len = func.length;

  function partial(func, argsList, argsLen) {
    // 传入参数满足时，返回执行结果
    if (argsList.length >= argsLen) {
      return func.apply(void 0, _toConsumableArray(argsList));
    } // 传入参数不足时，继续返回函数


    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return partial(func, [].concat(_toConsumableArray(argsList), args), argsLen);
    };
  }

  return partial(func, [], len);
}
function pipe() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    // 将前一个函数的输出 prevResult 传递给下一函数的参数，第一个函数的参数是用户传入的参数 args
    return fns.reduce(function (prevResult, fn) {
      return fn.apply(void 0, _toConsumableArray(prevResult));
    }, args);
  };
}
function compose() {
  for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  return function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    // 将前一个函数的输出 prevResult 传递给下一函数的参数，第一个函数的参数是用户传入的参数 args
    return fns.reduceRight(function (prevResult, fn) {
      return fn.apply(void 0, _toConsumableArray(prevResult));
    }, args);
  };
}

exports.once = once;
exports.curry = curry;
exports.pipe = pipe;
exports.compose = compose;
