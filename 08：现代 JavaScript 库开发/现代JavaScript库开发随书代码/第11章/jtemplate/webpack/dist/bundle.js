/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 153:
/***/ ((module) => {

module.exports = 
function render(__data__) {
    var __hasOwnProp__ = ({}).hasOwnProperty;

        var list = __hasOwnProp__.call(__data__, 'list') ? __data__['list']  : undefined;
    
    try {
        var __code__ = '';

        ;__code__ += ("<ul>")
;__code__ += ("  ")
; list.forEach(name => { 
;__code__ += ("")
;__code__ += ("    <li>")
;__code__ += (name)
;__code__ += ("</li>")
;__code__ += ("  ")
; }) 
;__code__ += ("")
;__code__ += ("</ul>")
;__code__ += ("")


        return __code__;
    } catch(e) {
        console.log(e);
        return 'error';
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _demo_tmpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _demo_tmpl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_demo_tmpl__WEBPACK_IMPORTED_MODULE_0__);


const html = _demo_tmpl__WEBPACK_IMPORTED_MODULE_0___default()({ list: ['yan1', 'yan2', 'yan3'] });

document.getElementById('demo1').innerHTML = html;

})();

/******/ })()
;