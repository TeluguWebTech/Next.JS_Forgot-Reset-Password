"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reset-password/[token]/page",{

/***/ "(app-pages-browser)/./src/app/reset-password/[token]/page.jsx":
/*!*************************************************!*\
  !*** ./src/app/reset-password/[token]/page.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst NewPassworPage = ()=>{\n    _s();\n    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const resetPasswordHandler = async (e)=>{\n        e.preventDefault();\n        const passwordDetails = {\n            newPassword,\n            confirmPassword\n        };\n        console.log(passwordDetails);\n        if (newPassword !== confirmPassword) {\n            alert(\"confirm password not matched\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"formContainer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"formSection\",\n            onSubmit: resetPasswordHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \" Enter New Password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next-Middleware\\\\auth_credentials\\\\src\\\\app\\\\reset-password\\\\[token]\\\\page.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"newPassword\",\n                    onChange: (e)=>setNewPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next-Middleware\\\\auth_credentials\\\\src\\\\app\\\\reset-password\\\\[token]\\\\page.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \" Confirm Password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next-Middleware\\\\auth_credentials\\\\src\\\\app\\\\reset-password\\\\[token]\\\\page.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"confirmPassword\",\n                    onChange: (e)=>setConfirmPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next-Middleware\\\\auth_credentials\\\\src\\\\app\\\\reset-password\\\\[token]\\\\page.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next-Middleware\\\\auth_credentials\\\\src\\\\app\\\\reset-password\\\\[token]\\\\page.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next-Middleware\\\\auth_credentials\\\\src\\\\app\\\\reset-password\\\\[token]\\\\page.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next-Middleware\\\\auth_credentials\\\\src\\\\app\\\\reset-password\\\\[token]\\\\page.jsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next-Middleware\\\\auth_credentials\\\\src\\\\app\\\\reset-password\\\\[token]\\\\page.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewPassworPage, \"7t7qLBoBHt3jW+hLc45Mtb6UjMA=\");\n_c = NewPassworPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPassworPage);\nvar _c;\n$RefreshReg$(_c, \"NewPassworPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzZXQtcGFzc3dvcmQvW3Rva2VuXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHdUM7QUFFdkMsTUFBTUUsaUJBQWlCOztJQUNyQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDSSxpQkFBaUJDLG1CQUFtQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUV2RCxNQUFNTSx1QkFBdUIsT0FBTUM7UUFDL0JBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsa0JBQWtCO1lBQUNQO1lBQWFFO1FBQWU7UUFDbkRNLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixJQUFHUCxnQkFBZ0JFLGlCQUFnQjtZQUNqQ1EsTUFBTTtRQUNSO0lBQ047SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0M7WUFBS0QsV0FBVTtZQUFjRSxVQUFXVjs7OEJBQ3JDLDhEQUFDVzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQztvQkFBTUMsTUFBSztvQkFBT0MsTUFBSztvQkFBY0MsVUFBVSxDQUFDZCxJQUFJSixlQUFlSSxFQUFFZSxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs4QkFDbEYsOERBQUNOOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDO29CQUFNQyxNQUFLO29CQUFPQyxNQUFLO29CQUFrQkMsVUFBVSxDQUFDZCxJQUFJRixtQkFBbUJFLEVBQUVlLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzhCQUMxRiw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDQztvQkFBT04sTUFBSzs4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7R0ExQk1sQjtLQUFBQTtBQTRCTiwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL1t0b2tlbl0vcGFnZS5qc3g/NzU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTmV3UGFzc3dvclBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29uZmlybVBhc3N3b3JkLCBzZXRDb25maXJtUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgY29uc3QgcmVzZXRQYXNzd29yZEhhbmRsZXIgPSBhc3luYyhlKT0+e1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHBhc3N3b3JkRGV0YWlscyA9IHtuZXdQYXNzd29yZCwgY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkRGV0YWlscylcclxuICAgICAgICBpZihuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKXtcclxuICAgICAgICAgIGFsZXJ0KFwiY29uZmlybSBwYXNzd29yZCBub3QgbWF0Y2hlZFwiKVxyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybUNvbnRhaW5lcic+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtU2VjdGlvbicgb25TdWJtaXQ9IHtyZXNldFBhc3N3b3JkSGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxoMz4gRW50ZXIgTmV3IFBhc3N3b3JkPC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5ld1Bhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKT0+c2V0TmV3UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDxoMz4gQ29uZmlybSBQYXNzd29yZDwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpPT5zZXRDb25maXJtUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UGFzc3dvclBhZ2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOZXdQYXNzd29yUGFnZSIsIm5ld1Bhc3N3b3JkIiwic2V0TmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3N3b3JkRGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImgzIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reset-password/[token]/page.jsx\n"));

/***/ })

});