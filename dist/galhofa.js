(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["galhofa"] = factory();
	else
		root["Galhofa"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Pagination/index.js":
/*!*********************************!*\
  !*** ./src/Pagination/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/SectionWatcher/AnchorsList/index.js":
/*!*************************************************!*\
  !*** ./src/SectionWatcher/AnchorsList/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const AnchorsList = function() {

}


AnchorsList.prototype.debug = function() {
	console.log(this, 'debugging Anchors')
}

AnchorsList.prototype.create = function(querySelector) {

}




module.exports = AnchorsList


/***/ }),

/***/ "./src/SectionWatcher/core/index.js":
/*!******************************************!*\
  !*** ./src/SectionWatcher/core/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function SectionWatcher ({
	querySelector,
	wait
}) {
	const self = this
	// TODO: force the use of the new keyword
	self.AnchorsList = __webpack_require__(/*! ../AnchorsList */ "./src/SectionWatcher/AnchorsList/index.js")
	self.selector = querySelector
	self.wait = wait

	setTimeout(function() {
		self.queryAllSections(wait)
	}, self.wait)
}

SectionWatcher.prototype.queryAllSections = function(timeToWait) {
	try {
		this.foundSections = [...document.querySelectorAll(`${this.selector}`)]
		console.log('Sections queried after', timeToWait)
	}catch (e) {
		console.error(`Error: You've passed an invalid 'query selector'`)
	}
	return this
}


module.exports = SectionWatcher


/***/ }),

/***/ "./src/SectionWatcher/index.js":
/*!*************************************!*\
  !*** ./src/SectionWatcher/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./core */ "./src/SectionWatcher/core/index.js")


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// onsoleconst _ = require('lodash')

// console.log("Just testing lodash as a perDependency!!!!!", _.join(['Walter',' ', 'White']))


module.exports = {
  // Lab: require(`./Lab`),
	SectionWatcher: __webpack_require__(/*! ./SectionWatcher */ "./src/SectionWatcher/index.js"),
	Pagination: __webpack_require__(/*! ./Pagination */ "./src/Pagination/index.js")
}

// module.exports = {
// 	test: "ae",
// 	test2: "se2"
// }

// module.exports = Test
// console.log(test)
// export default {
// 	...test
// }

// const DrugLord = "Walter White"

// test("Drug Lord test One", () => {
// 	expect(DrugLord).asPureAs('Walter !!hite')
// })

// test("Drug Lord test Two", () => {
// 	expect(DrugLord).asPureAs('Walter White')
// })



/***/ })

/******/ });
});
//# sourceMappingURL=galhofa.js.map