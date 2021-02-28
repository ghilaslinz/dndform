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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4OOf");


/***/ }),

/***/ "4OOf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_form_builder2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gZIJ");
/* harmony import */ var react_form_builder2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_form_builder2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_demobar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5/Jy");






function EditForm({
  id
}) {
  const postUrl = `/api/findform/${id}`;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_demobar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      postUrl: postUrl
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_form_builder2__WEBPACK_IMPORTED_MODULE_2___default.a.ReactFormBuilder, {
      url: postUrl,
      saveUrl: postUrl
    })]
  });
}

EditForm.getInitialProps = async ({
  query
}) => {
  const {
    id
  } = query;
  return {
    id: id
  };
};

/* harmony default export */ __webpack_exports__["default"] = (EditForm);

/***/ }),

/***/ "5/Jy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ demobar_Demobar; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-form-builder2"
var external_react_form_builder2_ = __webpack_require__("gZIJ");

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__("W+0S");
var external_isomorphic_fetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_fetch_);

// CONCATENATED MODULE: ./mongoose/requests.js

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  OPTIONS: ""
};
function post(url, data) {
  return external_isomorphic_fetch_default()(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  }).then(response => response);
}
function get(url) {
  return external_isomorphic_fetch_default()(url, {
    method: "GET",
    headers
  }).then(response => {
    const r = response.json();
    return r;
  });
}
// CONCATENATED MODULE: ./components/demobar.js





class demobar_Demobar extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      previewVisible: false,
      shortPreviewVisible: false,
      roPreviewVisible: false
    };
    this.submit = this.onSubmit.bind(this);
    const update = this.onChange.bind(this);
    external_react_form_builder2_["ElementStore"].subscribe(state => update(state.data));
  }

  showPreview() {
    this.setState({
      previewVisible: true
    });
  }

  showShortPreview() {
    this.setState({
      shortPreviewVisible: true
    });
  }

  showRoPreview() {
    this.setState({
      roPreviewVisible: true
    });
  }

  closePreview() {
    this.setState({
      previewVisible: false,
      shortPreviewVisible: false,
      roPreviewVisible: false
    });
  }

  onChange(data) {
    this.setState({
      data
    });
  }

  onSubmit(data) {
    const {
      postUrl
    } = this.props;
    console.log("onSubmit", data); // Place code to post json data to server here

    post(postUrl, data).then(x => {
      window.location.href = "/";
    });
    return false;
  }

  render() {
    let modalClass = "modal";

    if (this.state.previewVisible) {
      modalClass += " show d-block";
    }

    let shortModalClass = "modal short-modal";

    if (this.state.shortPreviewVisible) {
      shortModalClass += " show d-block";
    }

    let roModalClass = "modal ro-modal";

    if (this.state.roPreviewVisible) {
      roModalClass += " show d-block";
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "clearfix",
      style: {
        margin: "10px",
        width: "70%"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: "float-left",
        children: "Preview"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: "btn btn-primary float-right",
        style: {
          marginRight: "10px"
        },
        onClick: this.showPreview.bind(this),
        children: "Preview Form"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: "btn btn-default float-right",
        style: {
          marginRight: "10px"
        },
        onClick: this.showShortPreview.bind(this),
        children: "Alternate/Short Form"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: "btn btn-default float-right",
        style: {
          marginRight: "10px"
        },
        onClick: this.showRoPreview.bind(this),
        children: "Read Only Form"
      }), this.state.previewVisible && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: modalClass,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "modal-dialog modal-lg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "modal-content",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "modal-body",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_form_builder2_["ReactFormGenerator"], {
                download_path: "",
                back_action: "/",
                back_name: "Back",
                answer_data: {},
                action_name: "Save",
                form_action: "/",
                form_method: "POST",
                onSubmit: this.submit,
                variables: this.props.variables,
                data: this.state.data
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "modal-footer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                type: "button",
                className: "btn btn-default",
                "data-dismiss": "modal",
                onClick: this.closePreview.bind(this),
                children: "Close"
              })
            })]
          })
        })
      }), this.state.roPreviewVisible && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: roModalClass,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "modal-dialog modal-lg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "modal-content",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "modal-body",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_form_builder2_["ReactFormGenerator"], {
                download_path: "",
                back_action: "/",
                back_name: "Back",
                answer_data: {},
                action_name: "Save",
                form_action: "/",
                form_method: "POST",
                read_only: true,
                variables: this.props.variables,
                hide_actions: true,
                data: this.state.data
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "modal-footer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                type: "button",
                className: "btn btn-default",
                "data-dismiss": "modal",
                onClick: this.closePreview.bind(this),
                children: "Close"
              })
            })]
          })
        })
      }), this.state.shortPreviewVisible && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: shortModalClass,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "modal-dialog modal-lg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "modal-content",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "modal-body",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_form_builder2_["ReactFormGenerator"], {
                download_path: "",
                back_action: "",
                answer_data: {},
                form_action: "/",
                form_method: "POST",
                data: this.state.data,
                display_short: true,
                variables: this.props.variables,
                hide_actions: false
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "modal-footer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                type: "button",
                className: "btn btn-default",
                "data-dismiss": "modal",
                onClick: this.closePreview.bind(this),
                children: "Close"
              })
            })]
          })
        })
      })]
    });
  }

}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gZIJ":
/***/ (function(module, exports) {

module.exports = require("react-form-builder2");

/***/ })

/******/ });