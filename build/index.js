/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    CheckboxControl = _wp$components.CheckboxControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings; // Available alert types for a dropdown setting.

var stickyTypes = [{
  value: 'no-sticky',
  label: __('No Sticky', 'pattonwebz-cta-bar')
}, {
  value: 'stick-to-top',
  label: __('Sticky Top', 'pattonwebz-cta-bar')
}, {
  value: 'stick-to-bottom',
  label: __('Sticky Bottom', 'pattonwebz-cta-bar')
}];
registerBlockType('pattonwebz/cta-bar', {
  title: __('CTA Bar', 'pattonwebz-cta-bar'),
  description: __('CTA Bar', 'pattonwebz-cta-bar'),
  category: 'layout',
  icon: {
    src: 'minus',
    background: '#f26535',
    foreground: '#ffffff'
  },
  attributes: {
    stickyType: {
      type: 'string',
      default: 'no-sticky'
    },
    content: {
      type: 'string',
      default: ''
    },
    dismiss: {
      type: 'Boolean',
      default: true
    },
    bgColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        stickyType = _props$attributes.stickyType,
        content = _props$attributes.content,
        dismiss = _props$attributes.dismiss,
        bgColor = _props$attributes.bgColor,
        textColor = _props$attributes.textColor,
        setAttributes = props.setAttributes;
    var backgroundStyle = {
      backgroundColor: bgColor
    };
    var textStyle = {
      color: textColor
    };
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Please select the type of alert you want to display.', 'pattonwebz-cta-bar'),
      options: stickyTypes,
      value: stickyType,
      onChange: function onChange(stickyType) {
        setAttributes({
          stickyType: stickyType
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
      heading: __('Please select if the notice should be dismissible.', 'pattonwebz-cta-bar'),
      label: __('Dismissible notice?', 'pattonwebz-cta-bar'),
      help: __('Show an "x" and allow users to close this alert.', 'pattonwebz-cta-bar'),
      checked: dismiss,
      onChange: function onChange(dismiss) {
        setAttributes({
          dismiss: dismiss
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: __('Color select', 'pattonwebz-cta-bar'),
      colorSettings: [{
        value: bgColor,
        onChange: function onChange(bgColor) {
          return setAttributes({
            bgColor: bgColor
          });
        },
        label: __('Background Color', 'pattonwebz-cta-bar')
      }, {
        value: textColor,
        onChange: function onChange(textColor) {
          return setAttributes({
            textColor: textColor
          });
        },
        label: __('Text Color', 'pattonwebz-cta-bar')
      }]
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "pwwp--cta-bar pwwp--cta-bar--" + stickyType,
      style: backgroundStyle,
      role: "alert"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "pwwp--cta-bar--inner",
      style: textStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      className: "content",
      value: content,
      onChange: function onChange(content) {
        return setAttributes({
          content: content
        });
      },
      placeholder: "Add text...",
      format: "string"
    }), dismiss === true ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "close",
      "aria-hidden": "true"
    }, "\xD7") : null))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        stickyType = _props$attributes2.stickyType,
        content = _props$attributes2.content,
        dismiss = _props$attributes2.dismiss,
        bgColor = _props$attributes2.bgColor,
        textColor = _props$attributes2.textColor;
    var backgroundStyle = {
      backgroundColor: bgColor
    };
    var textStyle = {
      color: textColor
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "pwwp--cta-bar pwwp--cta-bar--" + stickyType,
      style: backgroundStyle,
      role: "alert"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "pwwp--cta-bar--inner",
      style: textStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagname: "span",
      value: content
    }), dismiss === true ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      type: "button",
      className: "close",
      "data-dismiss": "pwwp-ctabar",
      "aria-label": "Close",
      onClick: "clearBlock(this)"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      "aria-hidden": "true"
    }, "\xD7")) : null));
  },
  supports: {
    align: ['full']
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map