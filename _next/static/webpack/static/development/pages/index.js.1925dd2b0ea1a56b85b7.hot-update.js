webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/OptiImage/OptiImage.js":
/*!*******************************************!*\
  !*** ./components/OptiImage/OptiImage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/itmc3/Desktop/next_caltech/components/OptiImage/OptiImage.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar OptiImage = function OptiImage(_ref) {\n  var jpeg = _ref.jpeg,\n      webP = _ref.webP,\n      png = _ref.png,\n      classString = _ref.classString,\n      href = _ref.href,\n      link = _ref.link,\n      description = _ref.description,\n      mobile = _ref.mobile;\n\n  var imageElement = __jsx(\"picture\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"source\", {\n    srcSet: webP,\n    media: mobile && \"(min-width: 800px)\",\n    type: \"image/webp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }), mobile && __jsx(\"source\", {\n    srcSet: mobile,\n    media: \"(max-width: 799px)\",\n    type: \"image/webp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"source\", {\n    srcSet: jpeg || png,\n    media: mobile && \"(min-width: 800px)\",\n    type: jpeg ? \"image/jpeg\" : \"image/png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), mobile && __jsx(\"source\", {\n    srcSet: mobile,\n    media: \"(max-width: 799px)\",\n    type: jpeg ? \"image/jpeg\" : \"image/png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: jpeg || png,\n    className: classString,\n    alt: description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }));\n\n  if (href) {\n    return __jsx(\"a\", {\n      href: href,\n      target: \"_blank\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, imageElement);\n  }\n\n  if (link) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }\n    }, imageElement));\n  }\n\n  return imageElement;\n};\n\n_c = OptiImage;\nOptiImage.propTypes = {\n  jpeg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  webP: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  png: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  classString: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  mobile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\nOptiImage.defaultProps = {\n  jpeg: null,\n  webP: null,\n  png: null,\n  classString: null,\n  href: null,\n  link: null,\n  mobile: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (OptiImage);\n\nvar _c;\n\n$RefreshReg$(_c, \"OptiImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wdGlJbWFnZS9PcHRpSW1hZ2UuanM/YzBhNyJdLCJuYW1lcyI6WyJPcHRpSW1hZ2UiLCJqcGVnIiwid2ViUCIsInBuZyIsImNsYXNzU3RyaW5nIiwiaHJlZiIsImxpbmsiLCJkZXNjcmlwdGlvbiIsIm1vYmlsZSIsImltYWdlRWxlbWVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BU1o7QUFBQSxNQVJKQyxJQVFJLFFBUkpBLElBUUk7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxHQU1JLFFBTkpBLEdBTUk7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxJQUdJLFFBSEpBLElBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxNQUNJLFFBREpBLE1BQ0k7O0FBQ0osTUFBTUMsWUFBWSxHQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxVQUFNLEVBQUVQLElBRFY7QUFFRSxTQUFLLEVBQUVNLE1BQU0sSUFBSSxvQkFGbkI7QUFHRSxRQUFJLEVBQUMsWUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNR0EsTUFBTSxJQUNMO0FBQVEsVUFBTSxFQUFFQSxNQUFoQjtBQUF3QixTQUFLLEVBQUMsb0JBQTlCO0FBQW1ELFFBQUksRUFBQyxZQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFTRTtBQUNFLFVBQU0sRUFBRVAsSUFBSSxJQUFJRSxHQURsQjtBQUVFLFNBQUssRUFBRUssTUFBTSxJQUFJLG9CQUZuQjtBQUdFLFFBQUksRUFBRVAsSUFBSSxHQUFHLFlBQUgsR0FBa0IsV0FIOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBY0dPLE1BQU0sSUFDTDtBQUNFLFVBQU0sRUFBRUEsTUFEVjtBQUVFLFNBQUssRUFBQyxvQkFGUjtBQUdFLFFBQUksRUFBRVAsSUFBSSxHQUFHLFlBQUgsR0FBa0IsV0FIOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZKLEVBcUJFO0FBQUssT0FBRyxFQUFFQSxJQUFJLElBQUlFLEdBQWxCO0FBQXVCLGFBQVMsRUFBRUMsV0FBbEM7QUFBK0MsT0FBRyxFQUFFRyxXQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLENBREY7O0FBMEJBLE1BQUlGLElBQUosRUFBVTtBQUNSLFdBQ0U7QUFBRyxVQUFJLEVBQUVBLElBQVQ7QUFBZSxZQUFNLEVBQUMsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSSxZQURILENBREY7QUFLRDs7QUFFRCxNQUFJSCxJQUFKLEVBQVU7QUFDUixXQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUcsWUFBSixDQURGLENBREY7QUFLRDs7QUFFRCxTQUFPQSxZQUFQO0FBQ0QsQ0FyREQ7O0tBQU1ULFM7QUF1RE5BLFNBQVMsQ0FBQ1UsU0FBVixHQUFzQjtBQUNwQlQsTUFBSSxFQUFFVSxpREFBUyxDQUFDQyxNQURJO0FBRXBCVixNQUFJLEVBQUVTLGlEQUFTLENBQUNDLE1BRkk7QUFHcEJULEtBQUcsRUFBRVEsaURBQVMsQ0FBQ0MsTUFISztBQUlwQlIsYUFBVyxFQUFFTyxpREFBUyxDQUFDQyxNQUpIO0FBS3BCUCxNQUFJLEVBQUVNLGlEQUFTLENBQUNDLE1BTEk7QUFNcEJOLE1BQUksRUFBRUssaURBQVMsQ0FBQ0MsTUFOSTtBQU9wQkwsYUFBVyxFQUFFSSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQVBWO0FBUXBCTCxRQUFNLEVBQUVHLGlEQUFTLENBQUNDO0FBUkUsQ0FBdEI7QUFXQVosU0FBUyxDQUFDYyxZQUFWLEdBQXlCO0FBQ3ZCYixNQUFJLEVBQUUsSUFEaUI7QUFFdkJDLE1BQUksRUFBRSxJQUZpQjtBQUd2QkMsS0FBRyxFQUFFLElBSGtCO0FBSXZCQyxhQUFXLEVBQUUsSUFKVTtBQUt2QkMsTUFBSSxFQUFFLElBTGlCO0FBTXZCQyxNQUFJLEVBQUUsSUFOaUI7QUFPdkJFLFFBQU0sRUFBRTtBQVBlLENBQXpCO0FBVWVSLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9PcHRpSW1hZ2UvT3B0aUltYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNvbnN0IE9wdGlJbWFnZSA9ICh7XHJcbiAganBlZyxcclxuICB3ZWJQLFxyXG4gIHBuZyxcclxuICBjbGFzc1N0cmluZyxcclxuICBocmVmLFxyXG4gIGxpbmssXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgbW9iaWxlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VFbGVtZW50ID0gKFxyXG4gICAgPHBpY3R1cmU+XHJcbiAgICAgIDxzb3VyY2VcclxuICAgICAgICBzcmNTZXQ9e3dlYlB9XHJcbiAgICAgICAgbWVkaWE9e21vYmlsZSAmJiBcIihtaW4td2lkdGg6IDgwMHB4KVwifVxyXG4gICAgICAgIHR5cGU9XCJpbWFnZS93ZWJwXCJcclxuICAgICAgLz5cclxuICAgICAge21vYmlsZSAmJiAoXHJcbiAgICAgICAgPHNvdXJjZSBzcmNTZXQ9e21vYmlsZX0gbWVkaWE9XCIobWF4LXdpZHRoOiA3OTlweClcIiB0eXBlPVwiaW1hZ2Uvd2VicFwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxzb3VyY2VcclxuICAgICAgICBzcmNTZXQ9e2pwZWcgfHwgcG5nfVxyXG4gICAgICAgIG1lZGlhPXttb2JpbGUgJiYgXCIobWluLXdpZHRoOiA4MDBweClcIn1cclxuICAgICAgICB0eXBlPXtqcGVnID8gXCJpbWFnZS9qcGVnXCIgOiBcImltYWdlL3BuZ1wifVxyXG4gICAgICAvPlxyXG4gICAgICB7bW9iaWxlICYmIChcclxuICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICBzcmNTZXQ9e21vYmlsZX1cclxuICAgICAgICAgIG1lZGlhPVwiKG1heC13aWR0aDogNzk5cHgpXCJcclxuICAgICAgICAgIHR5cGU9e2pwZWcgPyBcImltYWdlL2pwZWdcIiA6IFwiaW1hZ2UvcG5nXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPGltZyBzcmM9e2pwZWcgfHwgcG5nfSBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfSBhbHQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgPC9waWN0dXJlPlxyXG4gICk7XHJcblxyXG4gIGlmIChocmVmKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YSBocmVmPXtocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICB7aW1hZ2VFbGVtZW50fVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxpbmspIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgIDxhPntpbWFnZUVsZW1lbnR9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGltYWdlRWxlbWVudDtcclxufTtcclxuXHJcbk9wdGlJbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAganBlZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICB3ZWJQOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBuZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGFzc1N0cmluZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBtb2JpbGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5PcHRpSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGpwZWc6IG51bGwsXHJcbiAgd2ViUDogbnVsbCxcclxuICBwbmc6IG51bGwsXHJcbiAgY2xhc3NTdHJpbmc6IG51bGwsXHJcbiAgaHJlZjogbnVsbCxcclxuICBsaW5rOiBudWxsLFxyXG4gIG1vYmlsZTogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlJbWFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OptiImage/OptiImage.js\n");

/***/ })

})