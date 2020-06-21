webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/OptiImage/OptiImage.js":
/*!*******************************************!*\
  !*** ./components/OptiImage/OptiImage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/itmc3/Desktop/next_caltech/components/OptiImage/OptiImage.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar OptiImage = function OptiImage(_ref) {\n  var jpeg = _ref.jpeg,\n      webP = _ref.webP,\n      png = _ref.png,\n      classString = _ref.classString,\n      _ref$href = _ref.href,\n      href = _ref$href === void 0 ? false : _ref$href,\n      _ref$link = _ref.link,\n      link = _ref$link === void 0 ? false : _ref$link;\n\n  var imageElement = __jsx(\"picture\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"source\", {\n    srcSet: webP,\n    type: \"image/webp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), jpeg && __jsx(\"source\", {\n    srcSet: jpeg,\n    type: \"image/jpeg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 16\n    }\n  }), png && __jsx(\"source\", {\n    srcSet: png,\n    type: \"image/png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 15\n    }\n  }), __jsx(\"img\", {\n    src: jpeg || png,\n    className: classString,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }));\n\n  var internalLinkImage = __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, imageElement), console.log(\"imageElement:\", imageElement));\n\n  var externalLinkImage = __jsx(\"a\", {\n    href: href,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 29\n    }\n  }, imageElement);\n\n  if (!link && !href) return imageElement;\n  if (link) return internalLinkImage;\n  if (href) return externalLinkImage;\n};\n\n_c = OptiImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OptiImage);\n\nvar _c;\n\n$RefreshReg$(_c, \"OptiImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wdGlJbWFnZS9PcHRpSW1hZ2UuanM/YzBhNyJdLCJuYW1lcyI6WyJPcHRpSW1hZ2UiLCJqcGVnIiwid2ViUCIsInBuZyIsImNsYXNzU3RyaW5nIiwiaHJlZiIsImxpbmsiLCJpbWFnZUVsZW1lbnQiLCJpbnRlcm5hbExpbmtJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJleHRlcm5hbExpbmtJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQU9aO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsTUFKSkMsR0FJSSxRQUpKQSxHQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsdUJBRkpDLElBRUk7QUFBQSxNQUZKQSxJQUVJLDBCQUZHLEtBRUg7QUFBQSx1QkFESkMsSUFDSTtBQUFBLE1BREpBLElBQ0ksMEJBREcsS0FDSDs7QUFDSixNQUFNQyxZQUFZLEdBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFVBQU0sRUFBRUwsSUFBaEI7QUFBc0IsUUFBSSxFQUFDLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHRCxJQUFJLElBQUk7QUFBUSxVQUFNLEVBQUVBLElBQWhCO0FBQXNCLFFBQUksRUFBQyxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlgsRUFHR0UsR0FBRyxJQUFJO0FBQVEsVUFBTSxFQUFFQSxHQUFoQjtBQUFxQixRQUFJLEVBQUMsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhWLEVBSUU7QUFBSyxPQUFHLEVBQUVGLElBQUksSUFBSUUsR0FBbEI7QUFBdUIsYUFBUyxFQUFFQyxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjs7QUFTQSxNQUFNSSxpQkFBaUIsR0FDckIsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUYsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxZQUFKLENBREYsRUFFR0UsT0FBTyxDQUFDQyxHQUFSLGtCQUE2QkgsWUFBN0IsQ0FGSCxDQURGOztBQU9BLE1BQU1JLGlCQUFpQixHQUFHO0FBQUcsUUFBSSxFQUFFTixJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0JFLFlBQWhCLENBQTFCOztBQUVBLE1BQUksQ0FBQ0QsSUFBRCxJQUFTLENBQUNELElBQWQsRUFBb0IsT0FBT0UsWUFBUDtBQUNwQixNQUFJRCxJQUFKLEVBQVUsT0FBT0UsaUJBQVA7QUFDVixNQUFJSCxJQUFKLEVBQVUsT0FBT00saUJBQVA7QUFDWCxDQTdCRDs7S0FBTVgsUztBQStCU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL09wdGlJbWFnZS9PcHRpSW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE9wdGlJbWFnZSA9ICh7XHJcbiAganBlZyxcclxuICB3ZWJQLFxyXG4gIHBuZyxcclxuICBjbGFzc1N0cmluZyxcclxuICBocmVmID0gZmFsc2UsXHJcbiAgbGluayA9IGZhbHNlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VFbGVtZW50ID0gKFxyXG4gICAgPHBpY3R1cmU+XHJcbiAgICAgIDxzb3VyY2Ugc3JjU2V0PXt3ZWJQfSB0eXBlPVwiaW1hZ2Uvd2VicFwiIC8+XHJcbiAgICAgIHtqcGVnICYmIDxzb3VyY2Ugc3JjU2V0PXtqcGVnfSB0eXBlPVwiaW1hZ2UvanBlZ1wiIC8+fVxyXG4gICAgICB7cG5nICYmIDxzb3VyY2Ugc3JjU2V0PXtwbmd9IHR5cGU9XCJpbWFnZS9wbmdcIiAvPn1cclxuICAgICAgPGltZyBzcmM9e2pwZWcgfHwgcG5nfSBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfSAvPlxyXG4gICAgPC9waWN0dXJlPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGludGVybmFsTGlua0ltYWdlID0gKFxyXG4gICAgPExpbmsgaHJlZj17bGlua30+XHJcbiAgICAgIDxhPntpbWFnZUVsZW1lbnR9PC9hPlxyXG4gICAgICB7Y29uc29sZS5sb2coYGltYWdlRWxlbWVudDpgLCBpbWFnZUVsZW1lbnQpfVxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGV4dGVybmFsTGlua0ltYWdlID0gPGEgaHJlZj17aHJlZn0+e2ltYWdlRWxlbWVudH08L2E+O1xyXG5cclxuICBpZiAoIWxpbmsgJiYgIWhyZWYpIHJldHVybiBpbWFnZUVsZW1lbnQ7XHJcbiAgaWYgKGxpbmspIHJldHVybiBpbnRlcm5hbExpbmtJbWFnZTtcclxuICBpZiAoaHJlZikgcmV0dXJuIGV4dGVybmFsTGlua0ltYWdlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aUltYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OptiImage/OptiImage.js\n");

/***/ })

})