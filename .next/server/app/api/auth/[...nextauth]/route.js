"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cdell%5CDesktop%5CNext_Auth_Credentials%5Cauth_credentials%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdell%5CDesktop%5CNext_Auth_Credentials%5Cauth_credentials&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cdell%5CDesktop%5CNext_Auth_Credentials%5Cauth_credentials%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdell%5CDesktop%5CNext_Auth_Credentials%5Cauth_credentials&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dell_Desktop_Next_Auth_Credentials_auth_credentials_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Auth_Credentials\\\\auth_credentials\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_dell_Desktop_Next_Auth_Credentials_auth_credentials_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkZWxsJTVDRGVza3RvcCU1Q05leHRfQXV0aF9DcmVkZW50aWFscyU1Q2F1dGhfY3JlZGVudGlhbHMlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2RlbGwlNUNEZXNrdG9wJTVDTmV4dF9BdXRoX0NyZWRlbnRpYWxzJTVDYXV0aF9jcmVkZW50aWFscyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0Q7QUFDNUk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoX2NyZWRlbnRpYWxzLz80YjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGRlbGxcXFxcRGVza3RvcFxcXFxOZXh0X0F1dGhfQ3JlZGVudGlhbHNcXFxcYXV0aF9jcmVkZW50aWFsc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZGVsbFxcXFxEZXNrdG9wXFxcXE5leHRfQXV0aF9DcmVkZW50aWFsc1xcXFxhdXRoX2NyZWRlbnRpYWxzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cdell%5CDesktop%5CNext_Auth_Credentials%5Cauth_credentials%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdell%5CDesktop%5CNext_Auth_Credentials%5Cauth_credentials&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* reexport safe */ _app_auth__WEBPACK_IMPORTED_MODULE_0__.GET),\n/* harmony export */   POST: () => (/* reexport safe */ _app_auth__WEBPACK_IMPORTED_MODULE_0__.POST)\n/* harmony export */ });\n/* harmony import */ var _app_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/auth */ \"(rsc)/./src/app/auth.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ29DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aF9jcmVkZW50aWFscy8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz8yMzJkIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQge0dFVCwgUE9TVH0gZnJvbSAnQC9hcHAvYXV0aCciXSwibmFtZXMiOlsiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/auth.js":
/*!*************************!*\
  !*** ./src/app/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _utils_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/models/User */ \"(rsc)/./src/app/utils/models/User.js\");\n/* harmony import */ var _utils_config_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/config/db */ \"(rsc)/./src/app/utils/config/db.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst { auth, signIn, signOut, handlers: { GET, POST } } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            async authorize (credentials) {\n                await (0,_utils_config_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                const user = await _utils_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    email: credentials?.email\n                });\n                if (!user) {\n                    return null;\n                }\n                const isValidPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials?.password, user.password);\n                if (!isValidPassword) {\n                    return null;\n                }\n                return {\n                    name: user.username,\n                    email: user.email\n                };\n            }\n        })\n    ],\n    secret: process.env.SECRET_KEY,\n    pages: {\n        signIn: \"/login\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2F1dGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDZ0M7QUFDZ0M7QUFDckI7QUFDQztBQUNkO0FBR3ZCLE1BQU0sRUFBQ0ssSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBUyxFQUFDQyxHQUFHLEVBQUVDLElBQUksRUFBQyxFQUFDLEdBQUdWLHFEQUFRQSxDQUFDO0lBQ2xFVyxXQUFVO1FBQ05WLDJFQUFrQkEsQ0FBQztZQUNmVyxNQUFLO1lBRUwsTUFBTUMsV0FBVUMsV0FBVztnQkFDeEIsTUFBTVgsNERBQVlBO2dCQUVyQixNQUFNWSxPQUFPLE1BQU1iLDBEQUFTQSxDQUFDYyxPQUFPLENBQUM7b0JBQUNDLE9BQU1ILGFBQWFHO2dCQUFLO2dCQUMxRCxJQUFHLENBQUNGLE1BQUs7b0JBQ0wsT0FBTztnQkFDWDtnQkFDSixNQUFNRyxrQkFBa0JkLHVEQUFjLENBQUNVLGFBQWFNLFVBQVVMLEtBQUtLLFFBQVE7Z0JBRTNFLElBQUcsQ0FBQ0YsaUJBQWdCO29CQUNoQixPQUFPO2dCQUNYO2dCQUVBLE9BQU87b0JBQUNOLE1BQU1HLEtBQUtNLFFBQVE7b0JBQUVKLE9BQU9GLEtBQUtFLEtBQUs7Z0JBQUE7WUFFOUM7UUFDSjtLQUNIO0lBQ0RLLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUM5QkMsT0FBTTtRQUNGcEIsUUFBTztJQUNYO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhfY3JlZGVudGlhbHMvLi9zcmMvYXBwL2F1dGguanM/MTg0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IENyZWRlbnRpYWxQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xyXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4vdXRpbHMvbW9kZWxzL1VzZXInXHJcbmltcG9ydCBEQmNvbm5lY3Rpb24gZnJvbSAnLi91dGlscy9jb25maWcvZGInXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7YXV0aCwgc2lnbkluLCBzaWduT3V0LCBoYW5kbGVyczp7R0VULCBQT1NUfX0gPSBOZXh0QXV0aCh7XHJcbiAgICBwcm92aWRlcnM6W1xyXG4gICAgICAgIENyZWRlbnRpYWxQcm92aWRlcih7XHJcbiAgICAgICAgICAgIG5hbWU6J2NyZWRlbnRpYWxzJyxcclxuXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscyl7XHJcbiAgICAgICAgICAgICAgIGF3YWl0IERCY29ubmVjdGlvbigpXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHtlbWFpbDpjcmVkZW50aWFscz8uZW1haWx9KVxyXG4gICAgICAgICAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRQYXNzd29yZCA9IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzPy5wYXNzd29yZCwgdXNlci5wYXNzd29yZClcclxuXHJcbiAgICAgICAgICAgIGlmKCFpc1ZhbGlkUGFzc3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7bmFtZTogdXNlci51c2VybmFtZSwgZW1haWw6IHVzZXIuZW1haWx9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVF9LRVksXHJcbiAgICBwYWdlczp7XHJcbiAgICAgICAgc2lnbkluOlwiL2xvZ2luXCJcclxuICAgIH1cclxufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsUHJvdmlkZXIiLCJVc2VyTW9kZWwiLCJEQmNvbm5lY3Rpb24iLCJiY3J5cHQiLCJhdXRoIiwic2lnbkluIiwic2lnbk91dCIsImhhbmRsZXJzIiwiR0VUIiwiUE9TVCIsInByb3ZpZGVycyIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsInVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJpc1ZhbGlkUGFzc3dvcmQiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJ1c2VybmFtZSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVRfS0VZIiwicGFnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/auth.js\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/config/db.js":
/*!************************************!*\
  !*** ./src/app/utils/config/db.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst DBconnection = async ()=>{\n    try {\n        await mongoose.connect(process.env.MONGO_URI);\n        console.log(\"DB connected\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBconnection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL2NvbmZpZy9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxTQUFTQyxRQUFRLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsMEJBQVU7QUFHaEQsTUFBTUMsZUFBZTtJQUNqQixJQUFJO1FBQ0EsTUFBTUYsU0FBU0csT0FBTyxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7UUFDNUNDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQixFQUFFLE9BQU9DLE9BQU87UUFDUkYsUUFBUUMsR0FBRyxDQUFDQztJQUNwQjtBQUNKO0FBRUEsaUVBQWVQLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoX2NyZWRlbnRpYWxzLy4vc3JjL2FwcC91dGlscy9jb25maWcvZGIuanM/NGVjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGRlZmF1bHQ6IG1vbmdvb3NlIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIilcclxuXHJcblxyXG5jb25zdCBEQmNvbm5lY3Rpb24gPSBhc3luYygpPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiREIgY29ubmVjdGVkXCIpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgREJjb25uZWN0aW9uXHJcbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiREJjb25uZWN0aW9uIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/config/db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/models/User.js":
/*!**************************************!*\
  !*** ./src/app/utils/models/User.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst userSchema = new mongoose.Schema({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        enum: [\n            \"user\",\n            \"admin\"\n        ],\n        default: \"user\"\n    }\n});\nconst UserModel = mongoose.models.user || mongoose.model(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL21vZGVscy9Vc2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUVBLFNBQVNDLFFBQVEsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUdoRCxNQUFNQyxhQUFhLElBQUlGLFNBQVNHLE1BQU0sQ0FBQztJQUMvQkMsVUFBUztRQUNMQyxNQUFLQztRQUNMQyxVQUFVO0lBQ2Q7SUFDQUMsT0FBTTtRQUNGSCxNQUFLQztRQUNMQyxVQUFVO1FBQ1ZFLFFBQVE7SUFDWjtJQUNBQyxVQUFTO1FBQ0xMLE1BQUtDO1FBQ0xDLFVBQVU7SUFDZDtJQUNBSSxNQUFLO1FBQ0ROLE1BQUtDO1FBQ0xNLE1BQUs7WUFBQztZQUFRO1NBQVE7UUFDdEJiLFNBQVE7SUFDWjtBQUNSO0FBRUEsTUFBTWMsWUFBWWIsU0FBU2MsTUFBTSxDQUFDQyxJQUFJLElBQUlmLFNBQVNnQixLQUFLLENBQUMsUUFBUWQ7QUFFakUsaUVBQWVXLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoX2NyZWRlbnRpYWxzLy4vc3JjL2FwcC91dGlscy9tb2RlbHMvVXNlci5qcz82NjU4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVmYXVsdDogbW9uZ29vc2UgfSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICAgICAgdXNlcm5hbWU6e1xyXG4gICAgICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGU6e1xyXG4gICAgICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICAgICAgZW51bTpbJ3VzZXInLCAnYWRtaW4nXSxcclxuICAgICAgICAgICAgZGVmYXVsdDondXNlcidcclxuICAgICAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWxcclxuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImVudW0iLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth","vendor-chunks/jose","vendor-chunks/oauth4webapi","vendor-chunks/bcryptjs","vendor-chunks/next-auth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cdell%5CDesktop%5CNext_Auth_Credentials%5Cauth_credentials%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdell%5CDesktop%5CNext_Auth_Credentials%5Cauth_credentials&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();