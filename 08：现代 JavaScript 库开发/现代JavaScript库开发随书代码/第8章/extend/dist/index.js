/*!
 * @jslib-book/extend 1.0.2
 * Licensed under MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var type = require('@jslib-book/type');
var clone = require('@jslib-book/clone');

function hasOwnProp(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function extend(defaultOpt, customOpt) {
  defaultOpt = clone.clone(defaultOpt); // 拷贝一份defaultOpt，隔离数据

  for (var name in customOpt) {
    var src = defaultOpt[name];
    var copy = customOpt[name]; // 非可枚举属性，例如原型链上的属性

    if (!hasOwnProp(customOpt, name)) {
      continue;
    } // 对于对象需要递归处理


    if (copy && type.type(copy) === 'object') {
      // 如果default上不存在值时，会自动创建空对象
      var _clone = src && type.type(src) === 'object' ? src : {}; // 递归合并


      defaultOpt[name] = extend(_clone, copy);
    } else if (typeof copy !== 'undefined') {
      // 非对象且值不为undefined
      defaultOpt[name] = copy;
    }
  }

  return defaultOpt;
}

exports.extend = extend;
