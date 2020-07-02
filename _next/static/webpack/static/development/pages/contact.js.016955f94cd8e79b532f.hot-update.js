webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo/index.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _components_FootSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FootSection */ \"./components/FootSection/index.js\");\n/* harmony import */ var _styles_contact_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/contact.scss */ \"./pages/styles/contact.scss\");\n/* harmony import */ var _styles_contact_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/itmc3/Desktop/next_caltech/pages/contact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar testFetch = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var response, json;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://michaelcaley.caley.vercel.app/api/formSubmit\", {\n              method: \"GET\",\n              mode: \"cors\",\n              cache: \"no-cache\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              referrerPolicy: \"no-referrer\" // body: JSON.stringify(data),\n\n            });\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            json = _context.sent;\n            console.log(\"json: \", json);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function testFetch() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar Contact = function Contact() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      telephone = _useState3[0],\n      setTelephone = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      Inquiry = _useState4[0],\n      setInquiry = _useState4[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Caltech - contact us\",\n    description: \"Caltech air conditioning is a family run air conditioning installation, maintenance and repair company in Hull, East Yorkshire.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    classString: \"contact__layout\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"contact__h1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, \"Contact us\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"Caltech provides air conditioning installation, maintenance and repair services. We are based in Cottingham near Hull but operate all over Yorkshire and the Humber Region.\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"Please get in touch with your inquiry.\"), __jsx(\"div\", {\n    className: \"contact__row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"contact__column contact__column--dark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"Telephone: 0800 211 8434\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \"Email: info@CaltechAirConditioning.co.uk\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Head Office: 53 Burton Road, Cottingham, Hull, HU16 5DZ, East Yorkshire\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"Sub Office: 30 Well House Avenue, Leeds, LS8 4BY, West Yorkshire\")), __jsx(\"div\", {\n    className: \"contact__column contact__column--border\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(\"form\", {\n    action: \"incl/form_submit.php\",\n    method: \"GET\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    className: \"form__input form__input--top\",\n    type: \"text\",\n    name: \"name\",\n    size: \"30\",\n    placeholder: \"Name\",\n    value: name,\n    onChange: function onChange(_ref2) {\n      var value = _ref2.value;\n      setName(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    className: \"form__input\",\n    type: \"email\",\n    name: \"email\",\n    size: \"30\",\n    placeholder: \"Email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    className: \"form__input\",\n    type: \"tel\",\n    name: \"telephone\",\n    size: \"30\",\n    placeholder: \"Telephone\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  }), __jsx(\"textarea\", {\n    className: \"form__input form__text-area\",\n    name: \"query\",\n    placeholder: \"Inquiry\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    className: \"form__input form__submit\",\n    id: \"submit\",\n    type: \"submit\",\n    name: \"send\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 15\n    }\n  }))))), __jsx(_components_FootSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Contact, \"lC5Tb7lotpLeRhAWKkXor386ciE=\");\n\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsidGVzdEZldGNoIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJoZWFkZXJzIiwicmVmZXJyZXJQb2xpY3kiLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiQ29udGFjdCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwidGVsZXBob25lIiwic2V0VGVsZXBob25lIiwiSW5xdWlyeSIsInNldElucXVpcnkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUztBQUFBLDhMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ09DLEtBQUssQ0FDMUIsc0RBRDBCLEVBRTFCO0FBQ0VDLG9CQUFNLEVBQUUsS0FEVjtBQUVFQyxrQkFBSSxFQUFFLE1BRlI7QUFHRUMsbUJBQUssRUFBRSxVQUhUO0FBSUVDLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0I7QUFEVCxlQUpYO0FBT0VDLDRCQUFjLEVBQUUsYUFQbEIsQ0FRRTs7QUFSRixhQUYwQixDQURaOztBQUFBO0FBQ1ZDLG9CQURVO0FBQUE7QUFBQSxtQkFjR0EsUUFBUSxDQUFDQyxJQUFULEVBZEg7O0FBQUE7QUFjVkEsZ0JBZFU7QUFlaEJDLG1CQUFPLENBQUNDLEdBQVIsV0FBc0JGLElBQXRCOztBQWZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUUixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0FBa0JBLElBQU1XLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsRUErQkU7QUFDRSxhQUFTLEVBQUMsMEJBRFo7QUFFRSxNQUFFLEVBQUMsUUFGTDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxTQUFLLEVBQUMsUUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JGLENBREYsQ0FmRixDQVRGLENBTkYsRUF5RUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekVGLENBREY7QUE2RUQsQ0FuRkQ7O0dBQU1WLE87O0tBQUFBLE87QUFxRlNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZW9cIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEZvb3RTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RTZWN0aW9uXCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2NvbnRhY3Quc2Nzc1wiO1xuXG5jb25zdCB0ZXN0RmV0Y2ggPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL21pY2hhZWxjYWxleS5jYWxleS52ZXJjZWwuYXBwL2FwaS9mb3JtU3VibWl0XCIsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICByZWZlcnJlclBvbGljeTogXCJuby1yZWZlcnJlclwiLFxuICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfVxuICApO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhganNvbjogYCwganNvbik7XG59O1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RlbGVwaG9uZSwgc2V0VGVsZXBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbSW5xdWlyeSwgc2V0SW5xdWlyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvXG4gICAgICAgIHRpdGxlPVwiQ2FsdGVjaCAtIGNvbnRhY3QgdXNcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkNhbHRlY2ggYWlyIGNvbmRpdGlvbmluZyBpcyBhIGZhbWlseSBydW4gYWlyIGNvbmRpdGlvbmluZyBpbnN0YWxsYXRpb24sIG1haW50ZW5hbmNlIGFuZCByZXBhaXIgY29tcGFueSBpbiBIdWxsLCBFYXN0IFlvcmtzaGlyZS5cIlxuICAgICAgLz5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxMYXlvdXQgY2xhc3NTdHJpbmc9XCJjb250YWN0X19sYXlvdXRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbnRhY3RfX2gxXCI+Q29udGFjdCB1czwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENhbHRlY2ggcHJvdmlkZXMgYWlyIGNvbmRpdGlvbmluZyBpbnN0YWxsYXRpb24sIG1haW50ZW5hbmNlIGFuZCByZXBhaXJcbiAgICAgICAgICBzZXJ2aWNlcy4gV2UgYXJlIGJhc2VkIGluIENvdHRpbmdoYW0gbmVhciBIdWxsIGJ1dCBvcGVyYXRlIGFsbCBvdmVyXG4gICAgICAgICAgWW9ya3NoaXJlIGFuZCB0aGUgSHVtYmVyIFJlZ2lvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5QbGVhc2UgZ2V0IGluIHRvdWNoIHdpdGggeW91ciBpbnF1aXJ5LjwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX3Jvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fY29sdW1uIGNvbnRhY3RfX2NvbHVtbi0tZGFya1wiPlxuICAgICAgICAgICAgPHA+VGVsZXBob25lOiAwODAwIDIxMSA4NDM0PC9wPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8cD5FbWFpbDogaW5mb0BDYWx0ZWNoQWlyQ29uZGl0aW9uaW5nLmNvLnVrPC9wPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSGVhZCBPZmZpY2U6IDUzIEJ1cnRvbiBSb2FkLCBDb3R0aW5naGFtLCBIdWxsLCBIVTE2IDVEWiwgRWFzdFxuICAgICAgICAgICAgICBZb3Jrc2hpcmVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFN1YiBPZmZpY2U6IDMwIFdlbGwgSG91c2UgQXZlbnVlLCBMZWVkcywgTFM4IDRCWSwgV2VzdCBZb3Jrc2hpcmVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX2NvbHVtbiBjb250YWN0X19jb2x1bW4tLWJvcmRlclwiPlxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaW5jbC9mb3JtX3N1Ym1pdC5waHBcIiBtZXRob2Q9XCJHRVRcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRvcFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBzaXplPVwiMzBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldE5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2lucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjMwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9faW5wdXRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZWxlcGhvbmVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCIzMFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxlcGhvbmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19pbnB1dCBmb3JtX190ZXh0LWFyZWFcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnF1aXJ5XCJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2lucHV0IGZvcm1fX3N1Ym1pdFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZW5kXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICA8Rm9vdFNlY3Rpb24gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})