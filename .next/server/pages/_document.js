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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/contains/site-settings.ts":
/*!***************************************!*\
  !*** ./src/contains/site-settings.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IS_CHISNGHIAX_DEMO_SITE: () => (/* binding */ IS_CHISNGHIAX_DEMO_SITE),\n/* harmony export */   IS_DEV: () => (/* binding */ IS_DEV),\n/* harmony export */   NC_SITE_SETTINGS: () => (/* binding */ NC_SITE_SETTINGS)\n/* harmony export */ });\n/* harmony import */ var _site_settings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../site-settings.json */ \"./site-settings.json\");\n// import from file json\n\nconst NC_SITE_SETTINGS = _site_settings_json__WEBPACK_IMPORTED_MODULE_0__;\nconst IS_DEV = \"development\" === \"development\";\nconst IS_CHISNGHIAX_DEMO_SITE = process.env.NEXT_PUBLIC_IS_CHISNGHIAX_DEMO_SITE === \"true\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbnMvc2l0ZS1zZXR0aW5ncy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsd0JBQXdCO0FBQytCO0FBUWhELE1BQU1DLG1CQUNaRCxnREFBZ0JBLENBQUE7QUFFVixNQUFNRSxTQUFTQyxrQkFBeUIsY0FBYTtBQUNyRCxNQUFNQywwQkFDWkQsUUFBUUUsR0FBRyxDQUFDQyxtQ0FBbUMsS0FBSyxPQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmNtYXotZmF1c3QvLi9zcmMvY29udGFpbnMvc2l0ZS1zZXR0aW5ncy50cz9kNDA3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBmcm9tIGZpbGUganNvblxuaW1wb3J0IHNpdGVTZXR0aW5nc0pzb24gZnJvbSAnLi4vLi4vc2l0ZS1zZXR0aW5ncy5qc29uJ1xuXG50eXBlIFJlY3Vyc2l2ZVBhcnRpYWw8VD4gPSB7XG5cdFtQIGluIGtleW9mIFRdPzogUmVjdXJzaXZlUGFydGlhbDxUW1BdPlxufVxuXG50eXBlIFBhcnRpYWxFeGNlcHQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gUmVjdXJzaXZlUGFydGlhbDxUPiAmIFBpY2s8VCwgSz5cblxuZXhwb3J0IGNvbnN0IE5DX1NJVEVfU0VUVElOR1M6IFJlY3Vyc2l2ZVBhcnRpYWw8dHlwZW9mIHNpdGVTZXR0aW5nc0pzb24+ID1cblx0c2l0ZVNldHRpbmdzSnNvblxuXG5leHBvcnQgY29uc3QgSVNfREVWID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbmV4cG9ydCBjb25zdCBJU19DSElTTkdISUFYX0RFTU9fU0lURSA9XG5cdHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lTX0NISVNOR0hJQVhfREVNT19TSVRFID09PSAndHJ1ZSdcbiJdLCJuYW1lcyI6WyJzaXRlU2V0dGluZ3NKc29uIiwiTkNfU0lURV9TRVRUSU5HUyIsIklTX0RFViIsInByb2Nlc3MiLCJJU19DSElTTkdISUFYX0RFTU9fU0lURSIsImVudiIsIk5FWFRfUFVCTElDX0lTX0NISVNOR0hJQVhfREVNT19TSVRFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contains/site-settings.ts\n");

/***/ }),

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contains_site_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contains/site-settings */ \"./src/contains/site-settings.ts\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FAVICON_VERSION = 4;\nconst SITE_URL = \"http://localhost:3000\";\nconst SITE_TITLE = _contains_site_settings__WEBPACK_IMPORTED_MODULE_1__.NC_SITE_SETTINGS.site_info?.site_title;\nfunction v(href) {\n    return `${href}?v=${FAVICON_VERSION}`;\n}\nclass Document extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    // @ts-ignore\n    static async getInitialProps(ctx) {\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n        return {\n            ...initialProps\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            className: \"[--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]\",\n            dir: \"ltr\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: `${SITE_URL}/api/feeds/feed.json`,\n                            rel: \"alternate\",\n                            type: \"application/feed+json\",\n                            title: SITE_TITLE + \" JSON Feed\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: `${SITE_URL}/api/feeds/rss.xml`,\n                            rel: \"alternate\",\n                            type: \"application/rss+xml\",\n                            title: SITE_TITLE + \" XML Feed\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: `${SITE_URL}/api/feeds/feed.atom`,\n                            rel: \"alternate\",\n                            type: \"application/atom+xml\",\n                            title: SITE_TITLE + \" Atom Feed\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            sizes: \"180x180\",\n                            href: v(\"/favicons/apple-touch-icon.png\")\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"32x32\",\n                            href: v(\"/favicons/favicon-32x32.png\")\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"16x16\",\n                            href: v(\"/favicons/favicon-16x16.png\")\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: v(\"/favicons/site.webmanifest\")\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"mask-icon\",\n                            href: v(\"/favicons/safari-pinned-tab.svg\"),\n                            color: \"#38bdf8\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"shortcut icon\",\n                            href: v(\"/favicons/favicon.ico\")\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"apple-mobile-web-app-title\",\n                            content: \"Ncmaz Nextjs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"application-name\",\n                            content: \"Ncmaz Nextjs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: \"#172A53\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            dangerouslySetInnerHTML: {\n                                __html: `\n                  try {\n                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n                      document.documentElement.classList.add('dark')\n                    } else {\n                      document.documentElement.classList.remove('dark')\n                    }\n                  } catch (_) {}\n                `\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            dangerouslySetInnerHTML: {\n                                __html: `\n                  try {\n                    if (localStorage.dismiss_top_banner === 'true' ) {\n                      document.documentElement.classList.add('dismiss_top_banner')\n                    } else {\n                      document.documentElement.classList.remove('dismiss_top_banner')\n                    }\n                  } catch (_) {}\n                `\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    className: \"relative bg-white text-base text-neutral-900 dark:bg-neutral-900/95 dark:text-neutral-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/pages/_document.tsx\",\n            lineNumber: 21,\n            columnNumber: 4\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJEO0FBQ2U7QUFFMUUsTUFBTU0sa0JBQWtCO0FBQ3hCLE1BQU1DLFdBQVdDLHVCQUEyQjtBQUM1QyxNQUFNRyxhQUFhWCxxRUFBZ0JBLENBQUNZLFNBQVMsRUFBRUM7QUFFL0MsU0FBU0MsRUFBRUMsSUFBWTtJQUN0QixPQUFPLENBQUMsRUFBRUEsS0FBSyxHQUFHLEVBQUVULGdCQUFnQixDQUFDO0FBQ3RDO0FBRWUsTUFBTVUsaUJBQWlCZixzREFBWUE7SUFDakQsYUFBYTtJQUNiLGFBQWFnQixnQkFBZ0JDLEdBQUcsRUFBRTtRQUNqQyxNQUFNQyxlQUFlLE1BQU1sQixvRUFBNEIsQ0FBQ2lCO1FBQ3hELE9BQU87WUFBRSxHQUFHQyxZQUFZO1FBQUM7SUFDMUI7SUFFQUMsU0FBUztRQUNSLHFCQUNDLDhEQUFDbEIsK0NBQUlBO1lBQ0ptQixNQUFLO1lBQ0xDLFdBQVU7WUFDVkMsS0FBS2YsS0FBc0M7OzhCQUUzQyw4REFBQ0wsK0NBQUlBOztzQ0FDSiw4REFBQ3NCOzRCQUNBVixNQUFNLENBQUMsRUFBRVIsU0FBUyxvQkFBb0IsQ0FBQzs0QkFDdkNtQixLQUFJOzRCQUNKQyxNQUFLOzRCQUNMQyxPQUFPakIsYUFBYTs7Ozs7O3NDQUVyQiw4REFBQ2M7NEJBQ0FWLE1BQU0sQ0FBQyxFQUFFUixTQUFTLGtCQUFrQixDQUFDOzRCQUNyQ21CLEtBQUk7NEJBQ0pDLE1BQUs7NEJBQ0xDLE9BQU9qQixhQUFhOzs7Ozs7c0NBRXJCLDhEQUFDYzs0QkFDQVYsTUFBTSxDQUFDLEVBQUVSLFNBQVMsb0JBQW9CLENBQUM7NEJBQ3ZDbUIsS0FBSTs0QkFDSkMsTUFBSzs0QkFDTEMsT0FBT2pCLGFBQWE7Ozs7OztzQ0FFckIsOERBQUNjOzRCQUNBQyxLQUFJOzRCQUNKRyxPQUFNOzRCQUNOZCxNQUFNRCxFQUFFOzs7Ozs7c0NBRVQsOERBQUNXOzRCQUNBQyxLQUFJOzRCQUNKQyxNQUFLOzRCQUNMRSxPQUFNOzRCQUNOZCxNQUFNRCxFQUFFOzs7Ozs7c0NBRVQsOERBQUNXOzRCQUNBQyxLQUFJOzRCQUNKQyxNQUFLOzRCQUNMRSxPQUFNOzRCQUNOZCxNQUFNRCxFQUFFOzs7Ozs7c0NBRVQsOERBQUNXOzRCQUFLQyxLQUFJOzRCQUFXWCxNQUFNRCxFQUFFOzs7Ozs7c0NBQzdCLDhEQUFDVzs0QkFDQUMsS0FBSTs0QkFDSlgsTUFBTUQsRUFBRTs0QkFDUmdCLE9BQU07Ozs7OztzQ0FFUCw4REFBQ0w7NEJBQUtDLEtBQUk7NEJBQWdCWCxNQUFNRCxFQUFFOzs7Ozs7c0NBQ2xDLDhEQUFDaUI7NEJBQUtDLE1BQUs7NEJBQTZCQyxTQUFROzs7Ozs7c0NBQ2hELDhEQUFDRjs0QkFBS0MsTUFBSzs0QkFBbUJDLFNBQVE7Ozs7OztzQ0FDdEMsOERBQUNGOzRCQUFLQyxNQUFLOzRCQUFjQyxTQUFROzs7Ozs7c0NBQ2pDLDhEQUFDQzs0QkFDQUMseUJBQXlCO2dDQUN4QkMsUUFBUSxDQUFDOzs7Ozs7OztnQkFRQSxDQUFDOzRCQUNYOzs7Ozs7c0NBRUQsOERBQUNGOzRCQUNBQyx5QkFBeUI7Z0NBQ3hCQyxRQUFRLENBQUM7Ozs7Ozs7O2dCQVFBLENBQUM7NEJBQ1g7Ozs7Ozs7Ozs7Ozs4QkFHRiw4REFBQ0M7b0JBQ0FmLFdBQ0M7O3NDQUdELDhEQUFDbEIsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUlmO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uY21hei1mYXVzdC8uL3NyYy9wYWdlcy9fZG9jdW1lbnQudHN4PzE4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkNfU0lURV9TRVRUSU5HUyB9IGZyb20gJ0AvY29udGFpbnMvc2l0ZS1zZXR0aW5ncydcbmltcG9ydCBOZXh0RG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5cbmNvbnN0IEZBVklDT05fVkVSU0lPTiA9IDRcbmNvbnN0IFNJVEVfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMXG5jb25zdCBTSVRFX1RJVExFID0gTkNfU0lURV9TRVRUSU5HUy5zaXRlX2luZm8/LnNpdGVfdGl0bGVcblxuZnVuY3Rpb24gdihocmVmOiBzdHJpbmcpIHtcblx0cmV0dXJuIGAke2hyZWZ9P3Y9JHtGQVZJQ09OX1ZFUlNJT059YFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIE5leHREb2N1bWVudCB7XG5cdC8vIEB0cy1pZ25vcmVcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcblx0XHRjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBOZXh0RG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcblx0XHRyZXR1cm4geyAuLi5pbml0aWFsUHJvcHMgfVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SHRtbFxuXHRcdFx0XHRsYW5nPVwiZW5cIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJbLS1zY3JvbGwtbXQ6OS44NzVyZW1dIGxnOlstLXNjcm9sbC1tdDo2LjMxMjVyZW1dXCJcblx0XHRcdFx0ZGlyPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX0RJUkVDVElPTn1cblx0XHRcdD5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdGhyZWY9e2Ake1NJVEVfVVJMfS9hcGkvZmVlZHMvZmVlZC5qc29uYH1cblx0XHRcdFx0XHRcdHJlbD1cImFsdGVybmF0ZVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiYXBwbGljYXRpb24vZmVlZCtqc29uXCJcblx0XHRcdFx0XHRcdHRpdGxlPXtTSVRFX1RJVExFICsgJyBKU09OIEZlZWQnfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdGhyZWY9e2Ake1NJVEVfVVJMfS9hcGkvZmVlZHMvcnNzLnhtbGB9XG5cdFx0XHRcdFx0XHRyZWw9XCJhbHRlcm5hdGVcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIlxuXHRcdFx0XHRcdFx0dGl0bGU9e1NJVEVfVElUTEUgKyAnIFhNTCBGZWVkJ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRocmVmPXtgJHtTSVRFX1VSTH0vYXBpL2ZlZWRzL2ZlZWQuYXRvbWB9XG5cdFx0XHRcdFx0XHRyZWw9XCJhbHRlcm5hdGVcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImFwcGxpY2F0aW9uL2F0b20reG1sXCJcblx0XHRcdFx0XHRcdHRpdGxlPXtTSVRFX1RJVExFICsgJyBBdG9tIEZlZWQnfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuXHRcdFx0XHRcdFx0c2l6ZXM9XCIxODB4MTgwXCJcblx0XHRcdFx0XHRcdGhyZWY9e3YoJy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZycpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cImljb25cIlxuXHRcdFx0XHRcdFx0dHlwZT1cImltYWdlL3BuZ1wiXG5cdFx0XHRcdFx0XHRzaXplcz1cIjMyeDMyXCJcblx0XHRcdFx0XHRcdGhyZWY9e3YoJy9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZycpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cImljb25cIlxuXHRcdFx0XHRcdFx0dHlwZT1cImltYWdlL3BuZ1wiXG5cdFx0XHRcdFx0XHRzaXplcz1cIjE2eDE2XCJcblx0XHRcdFx0XHRcdGhyZWY9e3YoJy9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZycpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPXt2KCcvZmF2aWNvbnMvc2l0ZS53ZWJtYW5pZmVzdCcpfSAvPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJtYXNrLWljb25cIlxuXHRcdFx0XHRcdFx0aHJlZj17dignL2Zhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2ZycpfVxuXHRcdFx0XHRcdFx0Y29sb3I9XCIjMzhiZGY4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXt2KCcvZmF2aWNvbnMvZmF2aWNvbi5pY28nKX0gLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiTmNtYXogTmV4dGpzXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9XCJOY21heiBOZXh0anNcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMTcyQTUzXCIgLz5cblx0XHRcdFx0XHQ8c2NyaXB0XG5cdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdFx0XHRfX2h0bWw6IGBcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWUgPT09ICdkYXJrJyB8fCAoISgndGhlbWUnIGluIGxvY2FsU3RvcmFnZSkgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICAgICAgICAgICAgYCxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8c2NyaXB0XG5cdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdFx0XHRfX2h0bWw6IGBcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZGlzbWlzc190b3BfYmFubmVyID09PSAndHJ1ZScgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc21pc3NfdG9wX2Jhbm5lcicpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc21pc3NfdG9wX2Jhbm5lcicpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICAgICAgICAgICAgYCxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8Ym9keVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHQncmVsYXRpdmUgYmctd2hpdGUgdGV4dC1iYXNlIHRleHQtbmV1dHJhbC05MDAgZGFyazpiZy1uZXV0cmFsLTkwMC85NSBkYXJrOnRleHQtbmV1dHJhbC0xMDAnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1haW4gLz5cblx0XHRcdFx0XHQ8TmV4dFNjcmlwdCAvPlxuXHRcdFx0XHQ8L2JvZHk+XG5cdFx0XHQ8L0h0bWw+XG5cdFx0KVxuXHR9XG59XG4iXSwibmFtZXMiOlsiTkNfU0lURV9TRVRUSU5HUyIsIk5leHREb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJGQVZJQ09OX1ZFUlNJT04iLCJTSVRFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VUkwiLCJTSVRFX1RJVExFIiwic2l0ZV9pbmZvIiwic2l0ZV90aXRsZSIsInYiLCJocmVmIiwiRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJpbml0aWFsUHJvcHMiLCJyZW5kZXIiLCJsYW5nIiwiY2xhc3NOYW1lIiwiZGlyIiwiTkVYVF9QVUJMSUNfU0lURV9ESVJFQ1RJT04iLCJsaW5rIiwicmVsIiwidHlwZSIsInRpdGxlIiwic2l6ZXMiLCJjb2xvciIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInNjcmlwdCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "./site-settings.json":
/*!****************************!*\
  !*** ./site-settings.json ***!
  \****************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"version":"2.5.0","mailpoet_api_key":"your_mailpoet_api_key","mailpoet_list_id":"3","subcription_widget":{"enable":true,"title":"Stay up to date","description":"Get notified when we publish something new, and unsubscribe at any time.","placeholder":"Enter your email address","success_message":"Thank you for subscribing. You\'re in!","error_message":"Something went wrong. Please try again. If the problem persists, you can contact me."},"newsletter_section":{"enable":true,"title":"Join our newsletter 🎉","description":"Read and share new perspectives on just about any topic. Everyone’s welcome.","right_image":"/images/SVG-subcribe2.png","features_list":["Create a free account.","Write your stories."]},"top_banner":{"enable":true,"description":"Try for free, Pi: AI powering unFAKED","end_link":{"url":"https://app.thepi.app/login","text":"Try now  →","new_tab":true}},"top_category_section":{"enable":true,"title":"Discover top 10 categories","sub_title":"Let\'s explore the most popular categories"},"site_info":{"site_title":"unFAKED","site_description":"Fight fake\'s with unFAKED","site_keywords":"fake news deepfake India","site_author":"Dimechain","site_email":"info@unfaked.in","site_phone":"Your Phone","site_address":"Your Address","site_city":"Your City","site_state":"Your State","site_zip":"Your Zip","site_country":"Your Country","site_url":"https://www.unfaked.in","site_logo":"https://news.unfaked.in/wp-content/uploads/2024/07/unfaked-1.png","site_logo_light":"https://news.unfaked.in/wp-content/uploads/2024/07/white-unfaked.png","site_favicon":"https://news.unfaked.in/wp-content/uploads/2024/07/unfaked-1.png"},"site_socials":[{"name":"facebook","url":"https://www.facebook.com/profile.php?id=61560676800071","icon":"/images/socials/facebook.svg","description":"Follow us on Facebook"},{"name":"twitter","url":"https://x.com/dime_chain","icon":"/images/socials/x-twitter.svg","description":"Follow us on Twitter"},{"name":"Youtube","url":"https://www.youtube.com/@unfaked-daily","icon":"/images/socials/github.svg","description":"Follow us on Github"},{"name":"Instagram","url":"https://www.instagram.com/unfaked.in","icon":"/images/socials/tiktok.svg","description":"Follow us on Tiktok"}],"site_header":{"desktop_header":{"header_style":"style3"}},"site_footer":{"all_rights_reserved_text":"© 2024 unFAKED, by Dimechain Consultancy LLP. All rights reserved."},"single_page":{"show_view_cout":true,"show_comment_count":true},"search_page":{"recommended_searches":{"enable":true,"title":"Trending searches","items":[{"title":"Programming","url":"/search/posts/programming"},{"title":"Design","url":"/search/posts/design"},{"title":"Technology","url":"/search/posts/technology"}]},"show_top_categories":true,"show_newsletter_section":true},"archive_page":{"show_newsletter_section":true,"show_top_categories":true},"author_page":{"show_newsletter_section":true,"show_top_categories":true},"post_card":{"show_view_cout":false,"show_comment_count":true},"submissions-settings":{"enable":true,"max_categories_allowed":3,"max_tags_allowed":5,"allow_upload_media":true,"allow_upload_media_max_size_mb":5,"post_options":[{"name":"Schedule_Publication","label":"Schedule Publication","enable":true},{"name":"Post_Format","label":"Post Format","enable":true,"options":[{"name":"standard","enable":true,"label":"Standard"},{"name":"gallery","enable":true,"label":"Gallery"},{"name":"video","enable":true,"label":"Video"},{"name":"audio","enable":true,"label":"Audio"}]},{"name":"Allow_Comments","label":"Allow Comments","enable":false},{"name":"Post_Style","label":"Post Style","enable":true},{"name":"Show_Right_Sidebar","label":"Show Right Sidebar","enable":true}]},"resetPassword_page":{"title":"Lost your password?","sub_title":"Enter your email below to reset your password.","blockquote":{"text":"Stay vigilant. While numerous platforms claim to detect deepfakes, many fall short on accuracy, rendering their hype meaningless.","author":"unFAKED"}},"signUp_page":{"title":"Create an account","sub_title":"Enter your email below to create your account.","blockquote":{"text":"Stay vigilant. While numerous platforms claim to detect deepfakes, many fall short on accuracy, rendering their hype meaningless.","author":"unFAKED"}},"signIn_page":{"title":"Sign in to your account","sub_title":"Enter your email below to sign in to your account.","blockquote":{"text":"Stay vigilant. While numerous platforms claim to detect deepfakes, many fall short on accuracy, rendering their hype meaningless.","author":"unFAKED"},"lost_password":{"is_use_lostpassword_default_of_wp":false,"message":"Lost password not implemented yet! Please contact admmin for support.","url_lostpassword_default_of_wp":"https://yourwebsite.com/wp-login.php?action=lostpassword"}},"mobile_nav_sidebar":{"description":"Discover the most outstanding articles on all topics of life. Write your stories and share them with the community. "},"help_page":{"uri":"/helps","title":"Helps","sub_title":"Read and share new perspectives on just about any topic. Everyone’s welcome."},"contact_page":{"enable":true,"title":"Get in touch","sub_title":"We’d love to hear from you. Fill out the form below to get in touch with us.","form":{"success_message":"🎉 Thank you for your message. We will get back to you soon.","error_message":"Something went wrong. Please try again. If the problem persists, you can contact me."},"my_contact_info":[{"name":"address","title":"🚀 ADDRESS","desc":"123 Main Street, New York, NY 10001"},{"name":"email","title":"💌 EMAIL","desc":"example@example.com"},{"name":"phone","title":"☎️ PHONE","desc":"+88 123 456 789"},{"name":"working_hours","title":"🕒 WORKING HOURS","desc":"Mon - Fri: 9:00 - 19:00"},{"name":"socials","title":"👋 SOCIALS"}]},"document_page":{"enable":true,"uri":"/documents","title":"Documents","sub_title":"Read and share new perspectives on just about any topic. Everyone’s welcome."},"cookies_policy_page":{"uri":"#"},"privacy_policy_page":{"uri":"/privacy-policy","title":"Privacy Policy"},"empty_state":{"title":"No results found.","description":"We couldn’t find any results. Try for something else."}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();