module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/nathan-silva/Documentos/Repositorios/Estudo_ReactAPI/weather-location/src/pages/_app.jsx\";\n\n\n\nfunction App() {\n  const {\n    0: location,\n    1: setLocation\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: weather,\n    1: setWeather\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  let getWeather = async (lat, long) => {\n    let res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather\", {\n      params: {\n        lat: lat,\n        lon: long,\n        appid: 'SUA CHAVE DO OPENWEATHERMAR',\n        lang: 'pt',\n        units: 'metric'\n      }\n    });\n    setWeather(res.data);\n    console.log(res.data);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    navigator.geolocation.getCurrentPosition(position => {\n      getWeather(position.coords.latitude, position.coords.longitude);\n      setLocation(true);\n    });\n  }, []);\n\n  if (location == false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: \"Voc\\xEA precisa habilitar a localiza\\xE7\\xE3o no browser o/\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this);\n  } else if (weather == false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: \"Carregando o clima\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: [\"Cliema nas suas coordenadas (\", weather['weather'][0]['description'], \")\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Temperatura atual: \", weather['main']['temp'], \"\\xB0\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Temperatura maxima: \", weather['main']['temp_max'], \"\\xB0\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Temperatura minima: \", weather['main']['temp_min'], \"\\xB0\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Press\\xE3o: \", weather['main']['pressure'], \"\\xB0 hpa\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Umidade: \", weather['main']['humidity'], \"%\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qc3g/NDM0YSJdLCJuYW1lcyI6WyJBcHAiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidXNlU3RhdGUiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImdldFdlYXRoZXIiLCJsYXQiLCJsb25nIiwicmVzIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJsb24iLCJhcHBpZCIsImxhbmciLCJ1bml0cyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsR0FBZTtBQUVYLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLEtBQUQsQ0FBdEM7O0FBRUEsTUFBSUcsVUFBVSxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsSUFBWixLQUFxQjtBQUNsQyxRQUFJQyxHQUFHLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLGdEQUFWLEVBQTREO0FBQ3hFQyxZQUFNLEVBQUU7QUFDSkwsV0FBRyxFQUFFQSxHQUREO0FBRUpNLFdBQUcsRUFBRUwsSUFGRDtBQUdKTSxhQUFLLEVBQUUsNkJBSEg7QUFJSkMsWUFBSSxFQUFFLElBSkY7QUFLSkMsYUFBSyxFQUFFO0FBTEg7QUFEZ0UsS0FBNUQsQ0FBaEI7QUFTQVgsY0FBVSxDQUFDSSxHQUFHLENBQUNRLElBQUwsQ0FBVjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsR0FBRyxDQUFDUSxJQUFoQjtBQUNILEdBWkQ7O0FBY0FHLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxhQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUEwQ0MsUUFBRCxJQUFjO0FBQ25EbEIsZ0JBQVUsQ0FBQ2tCLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsUUFBakIsRUFBMkJGLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkUsU0FBM0MsQ0FBVjtBQUNBekIsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxLQUhEO0FBSUgsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxNQUFJRCxRQUFRLElBQUksS0FBaEIsRUFBdUI7QUFDbkIsd0JBQ0kscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUtILEdBTkQsTUFPSyxJQUFJRyxPQUFPLElBQUksS0FBZixFQUFzQjtBQUN2Qix3QkFDSSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBS0gsR0FOSSxNQU9BO0FBQ0Qsd0JBQ0kscUVBQUMsOENBQUQ7QUFBQSw4QkFDSTtBQUFBLG9EQUFrQ0EsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQixDQUFuQixFQUFzQixhQUF0QixDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUEsZ0NBQ0k7QUFBQSw0Q0FBd0JBLE9BQU8sQ0FBQyxNQUFELENBQVAsQ0FBZ0IsTUFBaEIsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSw2Q0FBeUJBLE9BQU8sQ0FBQyxNQUFELENBQVAsQ0FBZ0IsVUFBaEIsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBQSw2Q0FBeUJBLE9BQU8sQ0FBQyxNQUFELENBQVAsQ0FBZ0IsVUFBaEIsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUk7QUFBQSxxQ0FBY0EsT0FBTyxDQUFDLE1BQUQsQ0FBUCxDQUFnQixVQUFoQixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJO0FBQUEsa0NBQWNBLE9BQU8sQ0FBQyxNQUFELENBQVAsQ0FBZ0IsVUFBaEIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFjSDtBQUVKOztBQUVjSixrRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcblxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBnZXRXZWF0aGVyID0gYXN5bmMgKGxhdCwgbG9uZykgPT4ge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlclwiLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBsYXQ6IGxhdCxcbiAgICAgICAgICAgICAgICBsb246IGxvbmcsXG4gICAgICAgICAgICAgICAgYXBwaWQ6ICdTVUEgQ0hBVkUgRE8gT1BFTldFQVRIRVJNQVInLFxuICAgICAgICAgICAgICAgIGxhbmc6ICdwdCcsXG4gICAgICAgICAgICAgICAgdW5pdHM6ICdtZXRyaWMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRXZWF0aGVyKHJlcy5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgZ2V0V2VhdGhlcihwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgc2V0TG9jYXRpb24odHJ1ZSlcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIGlmIChsb2NhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIFZvY8OqIHByZWNpc2EgaGFiaWxpdGFyIGEgbG9jYWxpemHDp8OjbyBubyBicm93c2VyIG8vXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxuICAgIGVsc2UgaWYgKHdlYXRoZXIgPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICBDYXJyZWdhbmRvIG8gY2xpbWFcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGgzPkNsaWVtYSBuYXMgc3VhcyBjb29yZGVuYWRhcyAoe3dlYXRoZXJbJ3dlYXRoZXInXVswXVsnZGVzY3JpcHRpb24nXX0pPC9oMz5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5UZW1wZXJhdHVyYSBhdHVhbDoge3dlYXRoZXJbJ21haW4nXVsndGVtcCddfcKwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlRlbXBlcmF0dXJhIG1heGltYToge3dlYXRoZXJbJ21haW4nXVsndGVtcF9tYXgnXX3CsDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5UZW1wZXJhdHVyYSBtaW5pbWE6IHt3ZWF0aGVyWydtYWluJ11bJ3RlbXBfbWluJ119wrA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UHJlc3PDo286IHt3ZWF0aGVyWydtYWluJ11bJ3ByZXNzdXJlJ119wrAgaHBhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVtaWRhZGU6IHt3ZWF0aGVyWydtYWluJ11bJ2h1bWlkaXR5J119JTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.jsx\");\n\nvar _jsxFileName = \"/home/nathan-silva/Documentos/Repositorios/Estudo_ReactAPI/weather-location/src/pages/index.jsx\";\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanN4PzBlZDciXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0UscUVBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEFwcCBmcm9tICcuL19hcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPEFwcCAvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });