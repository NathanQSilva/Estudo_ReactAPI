webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/nathan-silva/Documentos/Repositorios/Estudo_ReactAPI/weather-location/src/pages/_app.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      location = _useState[0],\n      setLocation = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var getWeather = /*#__PURE__*/function () {\n    var _ref = Object(_home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(lat, _long) {\n      var res;\n      return _home_nathan_silva_Documentos_Repositorios_Estudo_ReactAPI_weather_location_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"http://api.openweathermap.org/data/2.5/weather\", {\n                params: {\n                  lat: lat,\n                  lon: _long,\n                  appid: '810e062d195188ad39edbeca39a16436',\n                  lang: 'pt',\n                  units: 'metric'\n                }\n              });\n\n            case 2:\n              res = _context.sent;\n              setWeather(res.data);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getWeather(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      getWeather(position.coords.latitude, position.coords.longitude);\n      setLocation(true);\n    });\n  }, []);\n\n  if (location == false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: \"Voc\\xEA precisa habilitar a localiza\\xE7\\xE3o no browser o/\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this);\n  } else if (weather == false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: \"Carregando o clima\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: [\"Cliema nas suas coordenadas (\", weather['weather'][0]['description'], \")\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Temperatura atual: \", weather['main']['temp'], \"\\xB0\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Temperatura maxima: \", weather['main']['temp_max'], \"\\xB0\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Temperatura minima: \", weather['main']['temp_min'], \"\\xB0\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Press\\xE3o: \", weather['main']['pressure'], \"\\xB0 hpa\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Umidade: \", weather['main']['humidity'], \"%\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: weather.main\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_s(App, \"3Yy4Em+h5dvlfVXQVM3wytPcOZ0=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanN4PzQzNGEiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJnZXRXZWF0aGVyIiwibGF0IiwibG9uZyIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwibG9uIiwiYXBwaWQiLCJsYW5nIiwidW5pdHMiLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFFb0JDLHNEQUFRLENBQUMsS0FBRCxDQUY1QjtBQUFBLE1BRUxDLFFBRks7QUFBQSxNQUVLQyxXQUZMOztBQUFBLG1CQUdrQkYsc0RBQVEsQ0FBQyxLQUFELENBSDFCO0FBQUEsTUFHTEcsT0FISztBQUFBLE1BR0lDLFVBSEo7O0FBS1osTUFBSUMsVUFBVTtBQUFBLGdYQUFHLGlCQUFPQyxHQUFQLEVBQVlDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLGdEQUFWLEVBQTREO0FBQ3hFQyxzQkFBTSxFQUFFO0FBQ0pKLHFCQUFHLEVBQUVBLEdBREQ7QUFFSksscUJBQUcsRUFBRUosS0FGRDtBQUdKSyx1QkFBSyxFQUFFLGtDQUhIO0FBSUpDLHNCQUFJLEVBQUUsSUFKRjtBQUtKQyx1QkFBSyxFQUFFO0FBTEg7QUFEZ0UsZUFBNUQsQ0FESDs7QUFBQTtBQUNUQyxpQkFEUztBQVViWCx3QkFBVSxDQUFDVyxHQUFHLENBQUNDLElBQUwsQ0FBVjs7QUFWYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWWCxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBYUFZLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxhQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5QyxVQUFDQyxRQUFELEVBQWM7QUFDbkRoQixnQkFBVSxDQUFDZ0IsUUFBUSxDQUFDQyxNQUFULENBQWdCQyxRQUFqQixFQUEyQkYsUUFBUSxDQUFDQyxNQUFULENBQWdCRSxTQUEzQyxDQUFWO0FBQ0F0QixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEtBSEQ7QUFJSCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLE1BQUlELFFBQVEsSUFBSSxLQUFoQixFQUF3QjtBQUNwQix3QkFDSSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBSUUsR0FMTixNQU1LLElBQUlFLE9BQU8sSUFBSSxLQUFmLEVBQXNCO0FBQ3ZCLHdCQUNJLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSCxHQU5JLE1BT0E7QUFDRCx3QkFDSSxxRUFBQyw4Q0FBRDtBQUFBLDhCQUNJO0FBQUEsb0RBQW1DQSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CLENBQW5CLEVBQXNCLGFBQXRCLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQSxnQ0FDSTtBQUFBLDRDQUF5QkEsT0FBTyxDQUFDLE1BQUQsQ0FBUCxDQUFnQixNQUFoQixDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLDZDQUEwQkEsT0FBTyxDQUFDLE1BQUQsQ0FBUCxDQUFnQixVQUFoQixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBLDZDQUEwQkEsT0FBTyxDQUFDLE1BQUQsQ0FBUCxDQUFnQixVQUFoQixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSTtBQUFBLHFDQUFlQSxPQUFPLENBQUMsTUFBRCxDQUFQLENBQWdCLFVBQWhCLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0k7QUFBQSxrQ0FBZUEsT0FBTyxDQUFDLE1BQUQsQ0FBUCxDQUFnQixVQUFoQixDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSixlQVdJO0FBQUEsa0JBQ01BLE9BQU8sQ0FBQ3NCO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBaUJIO0FBRUo7O0dBMURRMUIsRzs7S0FBQUEsRztBQTRETUEsa0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBBcHAgKCkge1xuXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgbGV0IGdldFdlYXRoZXIgPSBhc3luYyAobGF0LCBsb25nKSA9PiB7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyXCIsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgICAgICAgIGxvbjogbG9uZyxcbiAgICAgICAgICAgICAgICBhcHBpZDogJzgxMGUwNjJkMTk1MTg4YWQzOWVkYmVjYTM5YTE2NDM2JyxcbiAgICAgICAgICAgICAgICBsYW5nOiAncHQnLFxuICAgICAgICAgICAgICAgIHVuaXRzOiAnbWV0cmljJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0V2VhdGhlcihyZXMuZGF0YSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgZ2V0V2VhdGhlcihwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgc2V0TG9jYXRpb24odHJ1ZSlcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIGlmIChsb2NhdGlvbiA9PSBmYWxzZSApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICBWb2PDqiBwcmVjaXNhIGhhYmlsaXRhciBhIGxvY2FsaXphw6fDo28gbm8gYnJvd3NlciBvL1xuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICBlbHNlIGlmICh3ZWF0aGVyID09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgQ2FycmVnYW5kbyBvIGNsaW1hXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxoMz5DbGllbWEgbmFzIHN1YXMgY29vcmRlbmFkYXMgKHsgd2VhdGhlclsnd2VhdGhlciddWzBdWydkZXNjcmlwdGlvbiddIH0pPC9oMz5cbiAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlRlbXBlcmF0dXJhIGF0dWFsOiB7IHdlYXRoZXJbJ21haW4nXVsndGVtcCddIH3CsDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5UZW1wZXJhdHVyYSBtYXhpbWE6IHsgd2VhdGhlclsnbWFpbiddWyd0ZW1wX21heCddIH3CsDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5UZW1wZXJhdHVyYSBtaW5pbWE6IHsgd2VhdGhlclsnbWFpbiddWyd0ZW1wX21pbiddIH3CsDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5QcmVzc8OjbzogeyB3ZWF0aGVyWydtYWluJ11bJ3ByZXNzdXJlJ10gfcKwIGhwYTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5VbWlkYWRlOiB7IHdlYXRoZXJbJ21haW4nXVsnaHVtaWRpdHknXSB9JTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7IHdlYXRoZXIubWFpbiB9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ })

})