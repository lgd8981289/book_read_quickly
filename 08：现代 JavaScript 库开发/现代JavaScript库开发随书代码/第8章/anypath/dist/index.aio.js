/*!
 * @jslib-book/anypath 1.0.0
 * Licensed under MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.clone = {})));
}(this, (function (exports) { 'use strict';

    function parseKey(key) {
      return key.replace("[]", "");
    } // get(obj, 'a.b.c') => obj.a.b.c


    function getany(obj, key) {
      return key.split(".").reduce(function (prev, subkey) {
        // a.b[].c b是数组
        return prev == null ? prev : prev[parseKey(subkey)];
      }, obj);
    } // set(obj, 'a.b.c', 1) => obj.a.b.c = 1

    function setany(obj, key, val) {
      var keys = key.split(".");
      var root = keys.slice(0, -1).reduce(function (parent, subkey) {
        var realkey = parseKey(subkey); // a.b[].c b是数组
        // eslint-disable-next-line no-param-reassign

        return parent[realkey] = parent[realkey] ? parent[realkey] : subkey.includes("[]") ? [] : {};
      }, obj);
      root[keys[keys.length - 1]] = val;
    }

    exports.getany = getany;
    exports.setany = setany;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
