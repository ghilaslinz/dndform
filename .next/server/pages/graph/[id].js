module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1uZy");


/***/ }),

/***/ "1uZy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/grapgComponent.js




class grapgComponent_GraphComponent extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      children: this.props.data.map((ob, i) => {
        let w = ob.count / 100 * 500;
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              width: "500px"
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: ob.text
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              width: "500px",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "yellow"
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: {
                width: w,
                backgroundColor: "red",
                color: "red"
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: ob.count
            })]
          })]
        }, i);
      })
    });
  }

}

/* harmony default export */ var grapgComponent = (grapgComponent_GraphComponent);
// CONCATENATED MODULE: ./pages/graph/[id].js





function Graph({
  id
}) {
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    fetch(`http://localhost:3000/api/findgraph/${id}`).then(res => res.json()).then(json => setData(json));
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: data && data.map(ob => {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [ob.label, /*#__PURE__*/Object(jsx_runtime_["jsx"])(grapgComponent, {
          id: ob._id,
          data: ob.options
        })]
      });
    })
  });
}

Graph.getInitialProps = async ({
  query
}) => {
  const {
    id
  } = query;
  return {
    id: id
  };
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Graph);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });