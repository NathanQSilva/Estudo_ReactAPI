webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/nathan-silva/Documentos/Repositorios/Estudo_ReactAPI/zabbixapi/src/pages/_app.jsx\";\n\nfunction App() {\n  var URL_TO_FETCH = 'https://zabbix.plss.com.br/api_jsonrpc.php';\n  fetch(URL_TO_FETCH, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/jsonrequest'\n    },\n    body: {\n      \"jsonrpc\": \"2.0\",\n      \"method\": \"user.login\",\n      \"params\": {\n        \"user\": \"nathan.quadros\",\n        \"password\": \"S3c77$1Nfr488\"\n      },\n      \"id\": 1,\n      \"auth\": null\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (result) {\n    console.log(result);\n  }) //.then(function(response) {\n  //    response.text()\n  //    .then(function(result){\n  //        console.log('teste', result);\n  //    })\n  //})\n  [\"catch\"](function (err) {\n    console.error('Failed retriving information', err);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"texto\",\n      children: \" teste \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanN4PzQzNGEiXSwibmFtZXMiOlsiQXBwIiwiVVJMX1RPX0ZFVENIIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLEdBQVQsR0FBZTtBQUVYLE1BQU1DLFlBQVksR0FBRyw0Q0FBckI7QUFDSUMsT0FBSyxDQUFDRCxZQUFELEVBQWU7QUFDaEJFLFVBQU0sRUFBRSxNQURRO0FBRWhCQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0I7QUFEWCxLQUZPO0FBS2hCQyxRQUFJLEVBQUU7QUFDRixpQkFBVyxLQURUO0FBRUYsZ0JBQVUsWUFGUjtBQUdGLGdCQUFVO0FBQ04sZ0JBQVEsZ0JBREY7QUFFTixvQkFBWTtBQUZOLE9BSFI7QUFPRixZQUFNLENBUEo7QUFRRixjQUFRO0FBUk47QUFMVSxHQUFmLENBQUwsQ0FnQkNDLElBaEJELENBZ0JNLFVBQUFDLFFBQVE7QUFBQSxXQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEdBaEJkLEVBaUJDRixJQWpCRCxDQWlCTSxVQUFBRyxNQUFNLEVBQUk7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDSCxHQW5CRCxFQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkEsWUEwQk8sVUFBU0csR0FBVCxFQUFhO0FBQ2hCRixXQUFPLENBQUNHLEtBQVIsQ0FBYyw4QkFBZCxFQUE4Q0QsR0FBOUM7QUFDSCxHQTVCRDtBQStCSixzQkFDSTtBQUFBLDJCQUNJO0FBQUksZUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7S0F2Q1FaLEc7QUF5Q01BLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgY29uc3QgVVJMX1RPX0ZFVENIID0gJ2h0dHBzOi8vemFiYml4LnBsc3MuY29tLmJyL2FwaV9qc29ucnBjLnBocCc7XG4gICAgICAgIGZldGNoKFVSTF9UT19GRVRDSCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29ucmVxdWVzdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgXCJqc29ucnBjXCI6IFwiMi4wXCIsXG4gICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJ1c2VyLmxvZ2luXCIsXG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJcIjogXCJuYXRoYW4ucXVhZHJvc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiUzNjNzckMU5mcjQ4OFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJhdXRoXCI6IG51bGxcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8udGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvLyAgICByZXNwb25zZS50ZXh0KClcbiAgICAgICAgLy8gICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0ZScsIHJlc3VsdCk7XG4gICAgICAgIC8vICAgIH0pXG4gICAgICAgIC8vfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgcmV0cml2aW5nIGluZm9ybWF0aW9uJywgZXJyKTsgXG4gICAgICAgIH0pO1xuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0b1wiID4gdGVzdGUgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ })

})