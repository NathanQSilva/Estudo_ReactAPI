webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_zabbixapi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_zabbixapi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_zabbixapi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_zabbixapi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/nathan-silva/Documentos/Repositorios/Estudo_ReactAPI/zabbixapi/src/pages/_app.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      location = _useState[0],\n      setLocation = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var getWeather = /*#__PURE__*/function () {\n    var _ref = Object(_home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_zabbixapi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_zabbixapi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(lat, _long) {\n      var res;\n      return _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_zabbixapi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(\"https://zabbix.plss.com.br\", {\n                method: method\n              });\n\n            case 2:\n              res = _context.sent;\n              setWeather(res.data);\n              console.log(res.data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getWeather(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      getWeather(position.coords.latitude, position.coords.longitude);\n      setLocation(true);\n    });\n  }, []);\n\n  if (location == false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: \"Voc\\xEA precisa habilitar a localiza\\xE7\\xE3o no browser o/\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this);\n  } else if (weather == false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: \"Carregando o clima\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: [\"Cliema nas suas coordenadas (\", weather['weather'][0]['description'], \")\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Temperatura atual: \", weather['main']['temp'], \"\\xB0\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Temperatura maxima: \", weather['main']['temp_max'], \"\\xB0\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Temperatura minima: \", weather['main']['temp_min'], \"\\xB0\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Press\\xE3o: \", weather['main']['pressure'], \"\\xB0 hpa\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Umidade: \", weather['main']['humidity'], \"%\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_s(App, \"3Yy4Em+h5dvlfVXQVM3wytPcOZ0=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanN4PzQzNGEiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJnZXRXZWF0aGVyIiwibGF0IiwibG9uZyIsImF4aW9zIiwicG9zdCIsIm1ldGhvZCIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUEsa0JBRXFCQyxzREFBUSxDQUFDLEtBQUQsQ0FGN0I7QUFBQSxNQUVKQyxRQUZJO0FBQUEsTUFFTUMsV0FGTjs7QUFBQSxtQkFHbUJGLHNEQUFRLENBQUMsS0FBRCxDQUgzQjtBQUFBLE1BR0pHLE9BSEk7QUFBQSxNQUdLQyxVQUhMOztBQUtYLE1BQUlDLFVBQVU7QUFBQSxrV0FBRyxpQkFBT0MsR0FBUCxFQUFZQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0dDLDRDQUFLLENBQUNDLElBQU4sQ0FBVyw0QkFBWCxFQUF5QztBQUNyREMsc0JBQU0sRUFBTkE7QUFEcUQsZUFBekMsQ0FESDs7QUFBQTtBQUNUQyxpQkFEUztBQUliUCx3QkFBVSxDQUFDTyxHQUFHLENBQUNDLElBQUwsQ0FBVjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0MsSUFBaEI7O0FBTGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVlAsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVFBVSx5REFBUyxDQUFDLFlBQU07QUFDWkMsYUFBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FBeUMsVUFBQ0MsUUFBRCxFQUFjO0FBQ25EZCxnQkFBVSxDQUFDYyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLFFBQWpCLEVBQTJCRixRQUFRLENBQUNDLE1BQVQsQ0FBZ0JFLFNBQTNDLENBQVY7QUFDQXBCLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0gsS0FIRDtBQUlILEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsTUFBSUQsUUFBUSxJQUFJLEtBQWhCLEVBQXVCO0FBQ25CLHdCQUNJLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSCxHQU5ELE1BT0ssSUFBSUUsT0FBTyxJQUFJLEtBQWYsRUFBc0I7QUFDdkIsd0JBQ0kscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUtILEdBTkksTUFPQTtBQUNELHdCQUNJLHFFQUFDLDhDQUFEO0FBQUEsOEJBQ0k7QUFBQSxvREFBa0NBLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUIsQ0FBbkIsRUFBc0IsYUFBdEIsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFBLGdDQUNJO0FBQUEsNENBQXdCQSxPQUFPLENBQUMsTUFBRCxDQUFQLENBQWdCLE1BQWhCLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsNkNBQXlCQSxPQUFPLENBQUMsTUFBRCxDQUFQLENBQWdCLFVBQWhCLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUEsNkNBQXlCQSxPQUFPLENBQUMsTUFBRCxDQUFQLENBQWdCLFVBQWhCLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJO0FBQUEscUNBQWNBLE9BQU8sQ0FBQyxNQUFELENBQVAsQ0FBZ0IsVUFBaEIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSTtBQUFBLGtDQUFjQSxPQUFPLENBQUMsTUFBRCxDQUFQLENBQWdCLFVBQWhCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBY0g7QUFFSjs7R0FuRFFKLEc7O0tBQUFBLEc7QUFxRE1BLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgbGV0IGdldFdlYXRoZXIgPSBhc3luYyAobGF0LCBsb25nKSA9PiB7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cHM6Ly96YWJiaXgucGxzcy5jb20uYnJcIiwge1xuICAgICAgICAgICAgbWV0aG9kXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRXZWF0aGVyKHJlcy5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgZ2V0V2VhdGhlcihwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgc2V0TG9jYXRpb24odHJ1ZSlcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIGlmIChsb2NhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIFZvY8OqIHByZWNpc2EgaGFiaWxpdGFyIGEgbG9jYWxpemHDp8OjbyBubyBicm93c2VyIG8vXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxuICAgIGVsc2UgaWYgKHdlYXRoZXIgPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICBDYXJyZWdhbmRvIG8gY2xpbWFcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGgzPkNsaWVtYSBuYXMgc3VhcyBjb29yZGVuYWRhcyAoe3dlYXRoZXJbJ3dlYXRoZXInXVswXVsnZGVzY3JpcHRpb24nXX0pPC9oMz5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5UZW1wZXJhdHVyYSBhdHVhbDoge3dlYXRoZXJbJ21haW4nXVsndGVtcCddfcKwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlRlbXBlcmF0dXJhIG1heGltYToge3dlYXRoZXJbJ21haW4nXVsndGVtcF9tYXgnXX3CsDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5UZW1wZXJhdHVyYSBtaW5pbWE6IHt3ZWF0aGVyWydtYWluJ11bJ3RlbXBfbWluJ119wrA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UHJlc3PDo286IHt3ZWF0aGVyWydtYWluJ11bJ3ByZXNzdXJlJ119wrAgaHBhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVtaWRhZGU6IHt3ZWF0aGVyWydtYWluJ11bJ2h1bWlkaXR5J119JTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ })

})