module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1WIY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mongoose_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AoEm");
/* harmony import */ var _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WBDA");
/* harmony import */ var _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mongoose_models_graph__WEBPACK_IMPORTED_MODULE_1__);


Object(_mongoose_mongoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();

const handleoldansewers = async (newGraphdata, id) => {
  newGraphdata.forEach(ob => {
    if (typeof ob.value !== "string") {
      ob.value.forEach(key => {
        const findGraph = _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_1___default.a.find({
          formId: id,
          optionId: key
        }).exec((err, result) => {
          if (result !== "undefined") {
            if (result[0] !== "undefined") {
              const answe = _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_1___default.a.findOneAndUpdate({
                _id: result[0]._id
              }, {
                $inc: {
                  count: 1
                }
              }).exec((errrr, anss) => {
                console.log(errrr);
              });
            }
          }
        });
      });
    } else {
      if (ob !== "undefined") {
        const findGrap = _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_1___default.a.find({
          formId: id,
          text: ob.value
        }).exec((err, result) => {
          if (result !== "undefined") {
            if (result[0] !== "undefined") {
              const answer = _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_1___default.a.findOneAndUpdate({
                _id: result[0]._id
              }, {
                $inc: {
                  count: 1
                }
              }).exec((errr, ans) => {
                console.log(errr);
              });
            }
          }
        });
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    method,
    query
  } = req;

  switch (method) {
    case "GET":
      try {
        const findGraph = await _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_1___default.a.findById(query.id);
        res.json(findGraph);
      } catch (error) {
        res.status(400).json({
          error
        });
        res.end();
      }

      break;

    case "POST":
      try {
        const handledAns = await handleoldansewers(req.body, query.id);
        res.json(handledAns);
      } catch (error) {
        console.log(error);
        res.status(400).json({
          sucees: false
        });
      }

      break;

    default:
      break;
  }
});

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1WIY");


/***/ }),

/***/ "AoEm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function dbconnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  connection.isConnected = db.connections[0].readyState;
}

/* harmony default export */ __webpack_exports__["a"] = (dbconnect);

/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "WBDA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = _interopRequireDefault(__webpack_require__("FiKB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const graphSchema = new _mongoose.default.Schema({
  _id: _mongoose.default.Schema.Types.ObjectId,
  formId: String,
  qusetionId: String,
  ques: String,
  optionId: String,
  text: String,
  count: Number
});
module.exports = _mongoose.default.models.graph || _mongoose.default.model("graph", graphSchema);

/***/ })

/******/ });