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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7+jg");


/***/ }),

/***/ "7+jg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mongoose_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AoEm");
/* harmony import */ var _mongoose_models_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("l73j");
/* harmony import */ var _mongoose_models_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mongoose_models_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WBDA");
/* harmony import */ var _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mongoose_models_graph__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);




Object(_mongoose_mongoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();

const handleGraphdata = (data, formid) => {
  let newgraphans = [];
  const l = data.length;

  for (let i = 0; i < l; i++) {
    const element = data[i];

    if (element.options) {
      const kl = element.options.length;

      for (let k = 0; k < kl; k++) {
        const elementt = element.options[k];
        _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_2___default.a.find({
          formId: formid,
          qusetionId: element.id,
          optionId: elementt.key
        }).exec((err, data) => {
          if (data.length < 1) {
            const newgraf = new _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_2___default.a({
              _id: new mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.Types.ObjectId(),
              formId: formid,
              qusetionId: element.id,
              ques: element.label,
              optionId: elementt.key,
              text: elementt.text,
              count: 0
            });
            newgraf.save().then(data => {
              console.log(data);
            });
          } else {
            if (data[0].text === "Place holder option 1" || data[0].text === "Place holder option 2" || data[0].text === "Place holder option 3" || data[0].text === "Place holder option 4") {
              _mongoose_models_graph__WEBPACK_IMPORTED_MODULE_2___default.a.findOneAndDelete({
                _id: data[0]._id
              });
            }
          }
        });
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    method,
    query
  } = req;

  switch (method) {
    case "GET":
      try {
        await _mongoose_models_form__WEBPACK_IMPORTED_MODULE_1___default.a.findById(query.id).then(data => {
          if (data.tools) {
            res.json([...data.tools]);
          }
        });
      } catch (error) {
        res.status(404).json({
          error
        });
        res.end();
      }

      break;

    case "POST":
      try {
        if (req.body.task_data.length !== 0) {
          _mongoose_models_form__WEBPACK_IMPORTED_MODULE_1___default.a.updateOne({
            _id: query.id
          }, {
            $set: {
              tools: [...req.body.task_data]
            }
          }).exec();
          const handlegraph = await handleGraphdata(req.body.task_data, query.id);

          if (handlegraph) {
            const handledAn = await handleoldansewers(req.body, query.id);
            res.status(200).json(handledAn);
          }
        }
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

/***/ }),

/***/ "l73j":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = _interopRequireDefault(__webpack_require__("FiKB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formSchema = new _mongoose.default.Schema({
  _id: _mongoose.default.Schema.Types.ObjectId,
  tools: []
});
module.exports = _mongoose.default.models.form || _mongoose.default.model("form", formSchema);

/***/ })

/******/ });