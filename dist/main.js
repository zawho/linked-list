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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ \"./src/linked-list.js\");\n\n\nconst testList = new _linked_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntestList.append(2);\ntestList.append(3);\ntestList.append(4);\ntestList.append(5);\ntestList.prepend(1);\n// testList.size();\n// testList.first();\n// testList.last();\n// testList.at(1);\n// testList.pop();\n// testList.contains(2);\n// testList.find(2);\n// testList.toString();\n// testList.insertAt('new', 2);\ntestList.removeAt(3);\n\n// console.log(testList);\n\n//# sourceURL=webpack://linked-list/./src/index.js?");

/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-node */ \"./src/list-node.js\");\n\n\n// Linked list class.\nclass LinkedList {\n    constructor() {\n        this.head = null;\n    }\n    \n    append(data) {\n        const newNode = (0,_list_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n        if (this.head === null) {\n            this.head = newNode;\n            return;\n        }\n        for (let i = this.head; i; i = i.next) {\n            if (i.next === null) {\n                i.next = newNode;\n                return;\n            }\n        }\n    }\n\n    prepend(data) {\n        const newNode = (0,_list_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n        newNode.next = this.head;\n        this.head = newNode;\n    }\n\n    size() {\n        let length = 0;\n        for (let i = this.head; i; i = i.next) {\n            length += 1;\n        }\n        if (length === 1) {\n            console.log(`This linked list has ${length} node.`);\n        } else {\n            console.log(`This linked list has ${length} nodes.`);\n        }\n        return length;\n    }\n\n    first() {\n        console.log(this.head);\n        return this.head;\n    }\n\n    last() {\n        let last;\n        for (let i = this.head; i; i = i.next) {\n            if (i.next === null) {\n                last = i;\n            }\n        }\n        console.log(last);\n        return last;\n    }\n\n    at(index) {\n        let current;\n        for (let i = this.head; i; i = i.next) {\n            if (i === this.head) {\n                current = 0;\n            } else {\n                current += 1;\n            }\n            if (current === index) {\n                console.log(i);\n                return i;\n            }\n        }\n        console.log(`There is no node at index ${index}.`);\n        return null;\n    }\n\n    pop() {\n        let current;\n        let nextToLast;\n        for (let i = this.head; i; i = i.next) {\n            if (i === this.head) {\n                current = 0;\n            } else {\n                current += 1;\n            }\n            if (i.next === null && i !== this.head) {\n                nextToLast = current - 1;\n            }\n            if (i === this.head && i.next === null) {\n                this.head = null;\n                nextToLast = 0;\n            }\n        }\n        for (let i = this.head; i; i = i.next) {\n            if (i === this.head) {\n                current = 0;\n            } else {\n                current += 1;\n            }\n            if (nextToLast >= 0 && current === nextToLast) {\n                i.next = null;\n            }\n        }\n        console.log(this);\n    }\n\n    contains(data) {\n        for (let i = this.head; i; i = i.next) {\n            if (i.value === data) {\n                console.log(i);\n                return true;\n            }\n        }\n        console.log(`This list does not contain \"${data}\".`);\n        return false;\n    }\n\n    find(data) {\n        let index;\n        for (let i = this.head; i; i = i.next) {\n            if (i === this.head) {\n                index = 0;\n            } else {\n                index += 1;\n            }\n            if (i.value === data) {\n                console.log(index);\n                return index;\n            }\n        }\n        console.log(`This list does not contain \"${data}\".`);\n        return null;\n    }\n\n    toString() {\n        let string = '';\n        for (let i = this.head; i; i = i.next) {\n            if (i.next !== null) {\n                string += `( ${i.value} ) -> `;\n            } else {\n                string += `( ${i.value} ) -> null`;\n            }\n        }\n        console.log(string);\n    }\n\n    insertAt(data, index) {\n        let current;\n        const newNode = (0,_list_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n        for (let i = this.head; i; i = i.next) {\n            if (i === this.head) {\n                current = 0;\n            } else {\n                current += 1;\n            }\n            if (index < 0) {\n                console.log ('The index cannot be a negative number.');\n                return;\n            }\n            if (index === 0) {\n                newNode.next = this.head;\n                this.head = newNode;\n                console.log(this);\n                return;\n            } \n            if (i.next === null && index >= current) {\n                console.log (`There is no node at index ${index}.`);\n                return;\n            }\n            if (current === index - 1) {\n                newNode.next = i.next;\n                i.next = newNode;\n                console.log(this);\n                return;\n            }\n        }\n    }\n\n    removeAt(index) {\n        let current;\n        let currentNext;\n        for (let i = this.head; i; i = i.next) {\n            if (i === this.head) {\n                current = 0;\n            } else {\n                current += 1;\n            }\n            if (current === index) {\n                currentNext = i.next;\n            }\n        }\n        for (let i = this.head; i; i = i.next) {\n            if (i === this.head) {\n                current = 0;\n            } else {\n                current += 1;\n            }\n            if (i.next === null && index >= current) {\n                console.log (`There is no node at index ${index}.`);\n                return;\n            }\n            if (current === index - 1) {\n               i.next = currentNext;\n               console.log(this);\n               return;\n            }\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);\n\n\n//# sourceURL=webpack://linked-list/./src/linked-list.js?");

/***/ }),

/***/ "./src/list-node.js":
/*!**************************!*\
  !*** ./src/list-node.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Node factory.\nfunction node(value) {\n    const nodeObj = {\n        value,\n        next: null,\n    }\n    return nodeObj;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);\n\n//# sourceURL=webpack://linked-list/./src/list-node.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;