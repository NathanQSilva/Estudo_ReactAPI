webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/nathan-silva/Documentos/Repositorios/Estudo_ReactAPI/weather-location/src/pages/_app.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      location = _useState[0],\n      setLocation = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var getWeather = /*#__PURE__*/function () {\n    var _ref = Object(_home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(lat, _long) {\n      var res;\n      return _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"http://api.openweathermap.org/data/2.5/weather\", {\n                params: {\n                  lat: lat,\n                  lon: _long,\n                  appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,\n                  lang: 'pt',\n                  units: 'metric'\n                }\n              });\n\n            case 2:\n              res = _context.sent;\n              setWeather(res.data);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getWeather(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      getWeather(position.coords.latitude, position);\n      setLocation(true);\n    });\n  }, []);\n\n  if (location == false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: \"Voc\\xEA precisa habilitar a localiza\\xE7\\xE3o no browser o/\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"Cliema nas suas coordenadas (Exemplo)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Temperatura atual: x\\xB0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Temperatura maxima: x\\xB0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Temperatura minima: x\\xB0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Press\\xE3o: x\\xB0 hpa\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Umidade: x%\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_s(App, \"3Yy4Em+h5dvlfVXQVM3wytPcOZ0=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanN4PzQzNGEiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJnZXRXZWF0aGVyIiwibGF0IiwibG9uZyIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwibG9uIiwiYXBwaWQiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5fV0hFQVRIRVJfS0VZIiwibGFuZyIsInVuaXRzIiwicmVzIiwiZGF0YSIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb29yZHMiLCJsYXRpdHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFFb0JDLHNEQUFRLENBQUMsS0FBRCxDQUY1QjtBQUFBLE1BRUxDLFFBRks7QUFBQSxNQUVLQyxXQUZMOztBQUFBLG1CQUdrQkYsc0RBQVEsQ0FBQyxLQUFELENBSDFCO0FBQUEsTUFHTEcsT0FISztBQUFBLE1BR0lDLFVBSEo7O0FBS1osTUFBSUMsVUFBVTtBQUFBLGdYQUFHLGlCQUFPQyxHQUFQLEVBQVlDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLGdEQUFWLEVBQTREO0FBQ3hFQyxzQkFBTSxFQUFFO0FBQ0pKLHFCQUFHLEVBQUVBLEdBREQ7QUFFSksscUJBQUcsRUFBRUosS0FGRDtBQUdKSyx1QkFBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsMkJBSGY7QUFJSkMsc0JBQUksRUFBRSxJQUpGO0FBS0pDLHVCQUFLLEVBQUU7QUFMSDtBQURnRSxlQUE1RCxDQURIOztBQUFBO0FBQ1RDLGlCQURTO0FBVWJkLHdCQUFVLENBQUNjLEdBQUcsQ0FBQ0MsSUFBTCxDQUFWOztBQVZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZkLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFhQWUseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGFBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDLFVBQUNDLFFBQUQsRUFBYztBQUNuRG5CLGdCQUFVLENBQUNtQixRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLFFBQWpCLEVBQTJCRixRQUEzQixDQUFWO0FBQ0F0QixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEtBSEQ7QUFJSCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLE1BQUlELFFBQVEsSUFBSSxLQUFoQixFQUF3QjtBQUNwQix3QkFDSSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBSUUsR0FMTixNQU1LO0FBQ0Qsd0JBQ0kscUVBQUMsOENBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBYUg7QUFFSjs7R0EvQ1FGLEc7O0tBQUFBLEc7QUFpRE1BLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gQXBwICgpIHtcblxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBnZXRXZWF0aGVyID0gYXN5bmMgKGxhdCwgbG9uZykgPT4ge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlclwiLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBsYXQ6IGxhdCxcbiAgICAgICAgICAgICAgICBsb246IGxvbmcsXG4gICAgICAgICAgICAgICAgYXBwaWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9PUEVOX1dIRUFUSEVSX0tFWSxcbiAgICAgICAgICAgICAgICBsYW5nOiAncHQnLFxuICAgICAgICAgICAgICAgIHVuaXRzOiAnbWV0cmljJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0V2VhdGhlcihyZXMuZGF0YSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgZ2V0V2VhdGhlcihwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHNldExvY2F0aW9uKHRydWUpXG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICBpZiAobG9jYXRpb24gPT0gZmFsc2UgKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgVm9jw6ogcHJlY2lzYSBoYWJpbGl0YXIgYSBsb2NhbGl6YcOnw6NvIG5vIGJyb3dzZXIgby9cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGgzPkNsaWVtYSBuYXMgc3VhcyBjb29yZGVuYWRhcyAoRXhlbXBsbyk8L2gzPlxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VGVtcGVyYXR1cmEgYXR1YWw6IHjCsDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5UZW1wZXJhdHVyYSBtYXhpbWE6IHjCsDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5UZW1wZXJhdHVyYSBtaW5pbWE6IHjCsDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5QcmVzc8OjbzogeMKwIGhwYTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5VbWlkYWRlOiB4JTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ })

})