/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/frontend/index.js":
/*!**********************************!*\
  !*** ./src/js/frontend/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n__webpack_require__(/*! ./pageflash-frontend */ \"./src/js/frontend/pageflash-frontend.js\");\n\n//# sourceURL=././src/js/frontend/index.js");

/***/ }),

/***/ "./src/js/frontend/pageflash-frontend.js":
/*!***********************************************!*\
  !*** ./src/js/frontend/pageflash-frontend.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar quicklink = _interopRequireWildcard(__webpack_require__(/*! quicklink */ \"./node_modules/quicklink/dist/quicklink.mjs\"));\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != typeof e && \"function\" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }\n/* eslint-disable no-console */\n/* eslint-disable no-unused-vars */\n\n/**\r\n * PageFlash settings object.\r\n *\r\n * @typedef {Object} PageFlashSettings\r\n * @property {string}   el        - CSS selector for the DOM element to observe for in-viewport links to prefetch.\r\n * @property {number}   limit     - The total requests that can be prefetched while observing the $el container.\r\n * @property {number}   throttle  - The concurrency limit for simultaneous requests while observing the $el container.\r\n * @property {number}   timeout   - Timeout after which prefetching will occur.\r\n * @property {string}   timeoutFn - Custom timeout function. Must refer to a named global function in JS.\r\n * @property {boolean}  priority  - Attempt higher priority fetch (low or high). Default false.\r\n * @property {string[]} origins   - Allowed origins to prefetch (empty allows all). Defaults to host for the current home URL.\r\n * @property {RegExp[]} ignores   - Regular expression patterns to determine whether a URL is ignored. Runs after origin checks.\r\n */\n\n/**\r\n * Move PageFlash to the global scope.\r\n *\r\n * @type {Object}\r\n * @since PageFlash 1.0.0\r\n */\nwindow.pageflash = quicklink;\nconst settings = window.pageflashSettings || {};\n\n/**\r\n * Initialize PageFlash on page load.\r\n * @since PageFlash 1.0.0\r\n * @listens load\r\n */\nwindow.addEventListener('load', () => {\n  /**\r\n   * Build PageFlash listener options from user settings.\r\n   *\r\n   * @type {Object}\r\n   */\n  const listenerOptions = buildListenerOptions(settings);\n  pageflash.listen(listenerOptions);\n  /**\r\n   * The option to prefetch urls from the options is as of version 1.0.0.\r\n   */\n  prefetchUrls(settings);\n});\n\n/**\r\n * Build PageFlash listener options from user settings.\r\n *\r\n * @param {PageFlashSettings} settings - User settings for PageFlash.\r\n * @return {Object} - PageFlash listener options.\r\n * @since PageFlash 1.0.0\r\n */\nfunction buildListenerOptions(settings) {\n  return {\n    el: validateElement(settings.el),\n    timeout: validateNumber(settings.timeout),\n    limit: validatePositiveNumber(settings.limit),\n    throttle: validatePositiveNumber(settings.throttle),\n    timeoutFn: getFunctionReference(settings.timeoutFn),\n    // onError: getFunctionReference(settings.onError),\n    priority: validateBoolean(settings.priority),\n    origins: validateOrigins(settings.origins),\n    ignores: validateIgnores(settings.ignores)\n  };\n}\n\n/**\r\n * Validate and get an HTML element based on the selector.\r\n *\r\n * @param {string} selector - CSS selector for the HTML element.\r\n * @return {Element|null} - HTML element or null if selector is empty or invalid.\r\n * @since PageFlash 1.0.0\r\n */\nfunction validateElement(selector) {\n  if ('string' === typeof selector && selector.trim() !== '') {\n    return document.querySelector(selector);\n  }\n  return null; // or null, depending on your preference\n}\n\n/**\r\n * Validate and get a number.\r\n *\r\n * @param {number} value - Number to validate.\r\n * @return {number| 2000} - Validated number or 2000 if not a number.\r\n * @since PageFlash 1.0.0\r\n */\nfunction validateNumber(value) {\n  return 'string' === typeof value ? Number(value) : 2000;\n}\n\n/**\r\n * Validate and get a positive number.\r\n *\r\n * @param {number} value - Number to validate.\r\n * @return {number|Infinity} - Validated positive number or Infinity if not a positive number.\r\n * @since PageFlash 1.0.0\r\n */\nfunction validatePositiveNumber(value) {\n  return 'string' === typeof value && Number(value) > 0 ? value : Infinity;\n}\n\n/**\r\n * Validate and get a boolean.\r\n *\r\n * @param {boolean} value - Boolean to validate.\r\n * @return {boolean} - Validated boolean if not a boolean.\r\n * @since PageFlash 1.0.0\r\n */\nfunction validateBoolean(value) {\n  return 'string' === typeof value && value !== '' ? true : false;\n}\n\n/**\r\n * Get a function reference based on the function name.\r\n *\r\n * @param {string} functionName - Name of the function.\r\n * @return {Function | null} - Function reference or null if not a valid function.\r\n * @since PageFlash 1.0.0\r\n */\nfunction getFunctionReference(functionName) {\n  return 'string' === typeof functionName && 'function' === typeof window[functionName] ? function () {\n    return window[functionName].apply(window, arguments);\n  } : null;\n}\n\n/**\r\n * Validate and get an array of origins.\r\n *\r\n * @param {Array} origins - Array of origin strings.\r\n * @return {Array| []} - Validated array of origins or [] if not a valid array.\r\n * @since PageFlash 1.0.0\r\n */\nfunction validateOrigins(origins) {\n  return Array.isArray(origins) && origins.length > 0 ? origins : [];\n}\n\n/**\r\n * Convert an array of ignores to an array of regular expressions.\r\n *\r\n * @param {Array} ignores - Array of ignores.\r\n * @return {Array| []} - Array of regular expressions or [] if not a valid array.\r\n * @since PageFlash 1.0.0\r\n */\nfunction validateIgnores(ignores) {\n  return Array.isArray(ignores) && ignores.length > 0 ? ignores.map(str => new RegExp(str)) : [];\n}\n\n/**\r\n * Prefetch deprecated urls.\r\n *\r\n * @param {PageFlashSettings} settings - User settings for PageFlash.\r\n * @since PageFlash 1.0.0\r\n */\nfunction prefetchUrls(settings) {\n  if (Array.isArray(settings.urls) && settings.urls.length > 0) {\n    pageflash.prefetch(settings.urls);\n  }\n}\n\n//# sourceURL=././src/js/frontend/pageflash-frontend.js");

/***/ }),

/***/ "./node_modules/quicklink/dist/quicklink.mjs":
/*!***************************************************!*\
  !*** ./node_modules/quicklink/dist/quicklink.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listen: () => (/* binding */ u),\n/* harmony export */   prefetch: () => (/* binding */ s),\n/* harmony export */   prerender: () => (/* binding */ f)\n/* harmony export */ });\nfunction e(e){return new Promise(function(n,r,t){(t=new XMLHttpRequest).open(\"GET\",e,t.withCredentials=!0),t.onload=function(){200===t.status?n():r()},t.send()})}var n,r=(n=document.createElement(\"link\")).relList&&n.relList.supports&&n.relList.supports(\"prefetch\")?function(e){return new Promise(function(n,r,t){(t=document.createElement(\"link\")).rel=\"prefetch\",t.href=e,t.onload=n,t.onerror=r,document.head.appendChild(t)})}:e,t=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},o=new Set,i=new Set,c=!1;function a(e){if(e){if(e.saveData)return new Error(\"Save-Data is enabled\");if(/2g/.test(e.effectiveType))return new Error(\"network conditions are poor\")}return!0}function u(e){if(e||(e={}),window.IntersectionObserver){var n=function(e){e=e||1;var n=[],r=0;function t(){r<e&&n.length>0&&(n.shift()(),r++)}return[function(e){n.push(e)>1||t()},function(){r--,t()}]}(e.throttle||1/0),r=n[0],a=n[1],u=e.limit||1/0,l=e.origins||[location.hostname],d=e.ignores||[],h=e.delay||0,p=[],m=e.timeoutFn||t,w=\"function\"==typeof e.hrefFn&&e.hrefFn,g=e.prerender||!1;c=e.prerenderAndPrefetch||!1;var v=new IntersectionObserver(function(n){n.forEach(function(n){if(n.isIntersecting)p.push((n=n.target).href),function(e,n){n?setTimeout(e,n):e()}(function(){-1!==p.indexOf(n.href)&&(v.unobserve(n),(c||g)&&i.size<1?f(w?w(n):n.href).catch(function(n){if(!e.onError)throw n;e.onError(n)}):o.size<u&&!g&&r(function(){s(w?w(n):n.href,e.priority).then(a).catch(function(n){a(),e.onError&&e.onError(n)})}))},h);else{var t=p.indexOf((n=n.target).href);t>-1&&p.splice(t)}})},{threshold:e.threshold||0});return m(function(){(e.el||document).querySelectorAll(\"a\").forEach(function(e){l.length&&!l.includes(e.hostname)||function e(n,r){return Array.isArray(r)?r.some(function(r){return e(n,r)}):(r.test||r).call(r,n.href,n)}(e,d)||v.observe(e)})},{timeout:e.timeout||2e3}),function(){o.clear(),v.disconnect()}}}function s(n,t,u){var s=a(navigator.connection);return s instanceof Error?Promise.reject(new Error(\"Cannot prefetch, \"+s.message)):(i.size>0&&!c&&console.warn(\"[Warning] You are using both prefetching and prerendering on the same document\"),Promise.all([].concat(n).map(function(n){if(!o.has(n))return o.add(n),(t?function(n){return window.fetch?fetch(n,{credentials:\"include\"}):e(n)}:r)(new URL(n,location.href).toString())})))}function f(e,n){var r=a(navigator.connection);if(r instanceof Error)return Promise.reject(new Error(\"Cannot prerender, \"+r.message));if(!HTMLScriptElement.supports(\"speculationrules\"))return s(e),Promise.reject(new Error(\"This browser does not support the speculation rules API. Falling back to prefetch.\"));if(document.querySelector('script[type=\"speculationrules\"]'))return Promise.reject(new Error(\"Speculation Rules is already defined and cannot be altered.\"));for(var t=0,u=[].concat(e);t<u.length;t+=1){var f=u[t];if(window.location.origin!==new URL(f,window.location.href).origin)return Promise.reject(new Error(\"Only same origin URLs are allowed: \"+f));i.add(f)}o.size>0&&!c&&console.warn(\"[Warning] You are using both prefetching and prerendering on the same document\");var l=function(e){var n=document.createElement(\"script\");n.type=\"speculationrules\",n.text='{\"prerender\":[{\"source\": \"list\",\"urls\": [\"'+Array.from(e).join('\",\"')+'\"]}]}';try{document.head.appendChild(n)}catch(e){return e}return!0}(i);return!0===l?Promise.resolve():Promise.reject(l)}\n\n\n//# sourceURL=././node_modules/quicklink/dist/quicklink.mjs");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/frontend/index.js");
/******/ 	
/******/ })()
;