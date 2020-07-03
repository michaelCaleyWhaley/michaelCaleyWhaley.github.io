webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OptiImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OptiImage */ \"./components/OptiImage/index.js\");\n/* harmony import */ var _Carousel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.scss */ \"./components/Carousel/Carousel.scss\");\n/* harmony import */ var _Carousel_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Carousel_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/itmc3/Desktop/next_caltech/components/Carousel/Carousel.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar animateCarousel = function animateCarousel(memoSlides, previousIndex) {\n  var index = previousIndex || 1;\n  var slides = memoSlides || [].slice.call(document.getElementsByClassName(\"carousel-slide\")).reverse();\n  var length = slides.length - 1;\n  window.carousel = setTimeout(function () {\n    if (index > length) {\n      index = 0;\n    }\n\n    removeVisibleClass(slides);\n    slides[index].classList.add(\"carousel-slide--visible\");\n    index += 1;\n    animateCarousel(slides, index);\n  }, 5000);\n};\n\nvar removeVisibleClass = function removeVisibleClass(elementList) {\n  for (var i = 0; i < elementList.length; i += 1) {\n    elementList[i].classList.remove(\"carousel-slide--visible\");\n  }\n};\n\nvar Carousel = function Carousel() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    animateCarousel();\n    return function () {\n      clearTimeout(window.carousel);\n    };\n  }, []);\n  return __jsx(\"div\", {\n    className: \"carousel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(_OptiImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    classString: \"carousel-slide carousel-slide-4\",\n    png: \"\".concat(__webpack_require__(/*! ../../public/slideshow4-mobile.png */ \"./public/slideshow4-mobile.png\"), \" 650w, \").concat(__webpack_require__(/*! ../../public/slideshow4.png */ \"./public/slideshow4.png\"), \" 900w\"),\n    webP: __webpack_require__(/*! ../../public/slideshow4.png?webp */ \"./public/slideshow4.png?webp\"),\n    description: \"A bedroom featuring a wall mounted air conditioning unit.\",\n    responsive: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(_OptiImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    classString: \"carousel-slide carousel-slide-3\",\n    png: __webpack_require__(/*! ../../public/slideshow3.png */ \"./public/slideshow3.png\"),\n    webP: __webpack_require__(/*! ../../public/slideshow3.png?webp */ \"./public/slideshow3.png?webp\"),\n    description: \"The Caltech air conditioning van.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }), __jsx(_OptiImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    classString: \"carousel-slide carousel-slide-2\",\n    png: __webpack_require__(/*! ../../public/slideshow2.png */ \"./public/slideshow2.png\"),\n    webP: __webpack_require__(/*! ../../public/slideshow2.png?webp */ \"./public/slideshow2.png?webp\"),\n    description: \"Ceiling cassette air conditioning units installed in 2 offices by Caltech\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }), __jsx(_OptiImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    classString: \"carousel-slide carousel-slide-1 carousel-slide--visible\",\n    png: __webpack_require__(/*! ../../public/slideshow1.png */ \"./public/slideshow1.png\"),\n    webP: __webpack_require__(/*! ../../public/slideshow1.png?webp */ \"./public/slideshow1.png?webp\"),\n    description: \"Caltech can provide air conditioning for any sized room or budget\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Carousel, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Nhcm91c2VsL0Nhcm91c2VsLmpzP2Q3NjMiXSwibmFtZXMiOlsiYW5pbWF0ZUNhcm91c2VsIiwibWVtb1NsaWRlcyIsInByZXZpb3VzSW5kZXgiLCJpbmRleCIsInNsaWRlcyIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJldmVyc2UiLCJsZW5ndGgiLCJ3aW5kb3ciLCJjYXJvdXNlbCIsInNldFRpbWVvdXQiLCJyZW1vdmVWaXNpYmxlQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJlbGVtZW50TGlzdCIsImkiLCJyZW1vdmUiLCJDYXJvdXNlbCIsInVzZUVmZmVjdCIsImNsZWFyVGltZW91dCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsVUFBRCxFQUFhQyxhQUFiLEVBQStCO0FBQ3JELE1BQUlDLEtBQUssR0FBR0QsYUFBYSxJQUFJLENBQTdCO0FBQ0EsTUFBTUUsTUFBTSxHQUNWSCxVQUFVLElBQ1YsR0FBR0ksS0FBSCxDQUFTQyxJQUFULENBQWNDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQWQsRUFBaUVDLE9BQWpFLEVBRkY7QUFHQSxNQUFNQyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQUEvQjtBQUNBQyxRQUFNLENBQUNDLFFBQVAsR0FBa0JDLFVBQVUsQ0FBQyxZQUFNO0FBQ2pDLFFBQUlWLEtBQUssR0FBR08sTUFBWixFQUFvQjtBQUNsQlAsV0FBSyxHQUFHLENBQVI7QUFDRDs7QUFDRFcsc0JBQWtCLENBQUNWLE1BQUQsQ0FBbEI7QUFDQUEsVUFBTSxDQUFDRCxLQUFELENBQU4sQ0FBY1ksU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIseUJBQTVCO0FBQ0FiLFNBQUssSUFBSSxDQUFUO0FBRUFILG1CQUFlLENBQUNJLE1BQUQsRUFBU0QsS0FBVCxDQUFmO0FBQ0QsR0FUMkIsRUFTekIsSUFUeUIsQ0FBNUI7QUFVRCxDQWhCRDs7QUFrQkEsSUFBTVcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDRyxXQUFELEVBQWlCO0FBQzFDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsV0FBVyxDQUFDUCxNQUFoQyxFQUF3Q1EsQ0FBQyxJQUFJLENBQTdDLEVBQWdEO0FBQzlDRCxlQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlSCxTQUFmLENBQXlCSSxNQUF6QixDQUFnQyx5QkFBaEM7QUFDRDtBQUNGLENBSkQ7O0FBTUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RyQixtQkFBZTtBQUNmLFdBQU8sWUFBTTtBQUNYc0Isa0JBQVksQ0FBQ1gsTUFBTSxDQUFDQyxRQUFSLENBQVo7QUFDRCxLQUZEO0FBR0QsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLFNBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUNFLGVBQVcsRUFBQyxpQ0FEZDtBQUVFLE9BQUcsWUFBS1csbUJBQU8sQ0FBQywwRUFBRCxDQUFaLG9CQUE0REEsbUJBQU8sQ0FBQyw0REFBRCxDQUFuRSxVQUZMO0FBR0UsUUFBSSxFQUFFQSxtQkFBTyxDQUFDLHNFQUFELENBSGY7QUFJRSxlQUFXLEVBQUMsMkRBSmQ7QUFLRSxjQUFVLEVBQUUsSUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRSxNQUFDLGtEQUFEO0FBQ0UsZUFBVyxFQUFDLGlDQURkO0FBRUUsT0FBRyxFQUFFQSxtQkFBTyxDQUFDLDREQUFELENBRmQ7QUFHRSxRQUFJLEVBQUVBLG1CQUFPLENBQUMsc0VBQUQsQ0FIZjtBQUlFLGVBQVcsRUFBQyxtQ0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFjRSxNQUFDLGtEQUFEO0FBQ0UsZUFBVyxFQUFDLGlDQURkO0FBRUUsT0FBRyxFQUFFQSxtQkFBTyxDQUFDLDREQUFELENBRmQ7QUFHRSxRQUFJLEVBQUVBLG1CQUFPLENBQUMsc0VBQUQsQ0FIZjtBQUlFLGVBQVcsRUFBQywyRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFvQkUsTUFBQyxrREFBRDtBQUNFLGVBQVcsRUFBQyx5REFEZDtBQUVFLE9BQUcsRUFBRUEsbUJBQU8sQ0FBQyw0REFBRCxDQUZkO0FBR0UsUUFBSSxFQUFFQSxtQkFBTyxDQUFDLHNFQUFELENBSGY7QUFJRSxlQUFXLEVBQUMsbUVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRixDQURGO0FBNkJELENBckNEOztHQUFNSCxROztLQUFBQSxRO0FBdUNTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBPcHRpSW1hZ2UgZnJvbSBcIi4uL09wdGlJbWFnZVwiO1xyXG5pbXBvcnQgXCIuL0Nhcm91c2VsLnNjc3NcIjtcclxuXHJcbmNvbnN0IGFuaW1hdGVDYXJvdXNlbCA9IChtZW1vU2xpZGVzLCBwcmV2aW91c0luZGV4KSA9PiB7XHJcbiAgbGV0IGluZGV4ID0gcHJldmlvdXNJbmRleCB8fCAxO1xyXG4gIGNvbnN0IHNsaWRlcyA9XHJcbiAgICBtZW1vU2xpZGVzIHx8XHJcbiAgICBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1zbGlkZVwiKSkucmV2ZXJzZSgpO1xyXG4gIGNvbnN0IGxlbmd0aCA9IHNsaWRlcy5sZW5ndGggLSAxO1xyXG4gIHdpbmRvdy5jYXJvdXNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID4gbGVuZ3RoKSB7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHJlbW92ZVZpc2libGVDbGFzcyhzbGlkZXMpO1xyXG4gICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtc2xpZGUtLXZpc2libGVcIik7XHJcbiAgICBpbmRleCArPSAxO1xyXG5cclxuICAgIGFuaW1hdGVDYXJvdXNlbChzbGlkZXMsIGluZGV4KTtcclxuICB9LCA1MDAwKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVZpc2libGVDbGFzcyA9IChlbGVtZW50TGlzdCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudExpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGVsZW1lbnRMaXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJvdXNlbC1zbGlkZS0tdmlzaWJsZVwiKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYW5pbWF0ZUNhcm91c2VsKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQod2luZG93LmNhcm91c2VsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICA8T3B0aUltYWdlXHJcbiAgICAgICAgY2xhc3NTdHJpbmc9XCJjYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1zbGlkZS00XCJcclxuICAgICAgICBwbmc9e2Ake3JlcXVpcmUoXCIuLi8uLi9wdWJsaWMvc2xpZGVzaG93NC1tb2JpbGUucG5nXCIpfSA2NTB3LCAke3JlcXVpcmUoXCIuLi8uLi9wdWJsaWMvc2xpZGVzaG93NC5wbmdcIil9IDkwMHdgfVxyXG4gICAgICAgIHdlYlA9e3JlcXVpcmUoXCIuLi8uLi9wdWJsaWMvc2xpZGVzaG93NC5wbmc/d2VicFwiKX1cclxuICAgICAgICBkZXNjcmlwdGlvbj1cIkEgYmVkcm9vbSBmZWF0dXJpbmcgYSB3YWxsIG1vdW50ZWQgYWlyIGNvbmRpdGlvbmluZyB1bml0LlwiXHJcbiAgICAgICAgcmVzcG9uc2l2ZT17dHJ1ZX1cclxuICAgICAgLz5cclxuICAgICAgPE9wdGlJbWFnZVxyXG4gICAgICAgIGNsYXNzU3RyaW5nPVwiY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtc2xpZGUtM1wiXHJcbiAgICAgICAgcG5nPXtyZXF1aXJlKFwiLi4vLi4vcHVibGljL3NsaWRlc2hvdzMucG5nXCIpfVxyXG4gICAgICAgIHdlYlA9e3JlcXVpcmUoXCIuLi8uLi9wdWJsaWMvc2xpZGVzaG93My5wbmc/d2VicFwiKX1cclxuICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBDYWx0ZWNoIGFpciBjb25kaXRpb25pbmcgdmFuLlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxPcHRpSW1hZ2VcclxuICAgICAgICBjbGFzc1N0cmluZz1cImNhcm91c2VsLXNsaWRlIGNhcm91c2VsLXNsaWRlLTJcIlxyXG4gICAgICAgIHBuZz17cmVxdWlyZShcIi4uLy4uL3B1YmxpYy9zbGlkZXNob3cyLnBuZ1wiKX1cclxuICAgICAgICB3ZWJQPXtyZXF1aXJlKFwiLi4vLi4vcHVibGljL3NsaWRlc2hvdzIucG5nP3dlYnBcIil9XHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJDZWlsaW5nIGNhc3NldHRlIGFpciBjb25kaXRpb25pbmcgdW5pdHMgaW5zdGFsbGVkIGluIDIgb2ZmaWNlcyBieSBDYWx0ZWNoXCJcclxuICAgICAgLz5cclxuICAgICAgPE9wdGlJbWFnZVxyXG4gICAgICAgIGNsYXNzU3RyaW5nPVwiY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtc2xpZGUtMSBjYXJvdXNlbC1zbGlkZS0tdmlzaWJsZVwiXHJcbiAgICAgICAgcG5nPXtyZXF1aXJlKFwiLi4vLi4vcHVibGljL3NsaWRlc2hvdzEucG5nXCIpfVxyXG4gICAgICAgIHdlYlA9e3JlcXVpcmUoXCIuLi8uLi9wdWJsaWMvc2xpZGVzaG93MS5wbmc/d2VicFwiKX1cclxuICAgICAgICBkZXNjcmlwdGlvbj1cIkNhbHRlY2ggY2FuIHByb3ZpZGUgYWlyIGNvbmRpdGlvbmluZyBmb3IgYW55IHNpemVkIHJvb20gb3IgYnVkZ2V0XCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})