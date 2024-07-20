"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_api_src_container_singles_single-2_single-2_tsx";
exports.ids = ["_api_src_container_singles_single-2_single-2_tsx"];
exports.modules = {

/***/ "(api)/./src/container/singles/single-2/single-2.tsx":
/*!*****************************************************!*\
  !*** ./src/container/singles/single-2/single-2.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NcImage/NcImage */ \"(api)/./src/components/NcImage/NcImage.tsx\");\n/* harmony import */ var _utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/getPostDataFromPostFragment */ \"(api)/./src/utils/getPostDataFromPostFragment.ts\");\n/* harmony import */ var _SingleHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleHeader */ \"(api)/./src/container/singles/SingleHeader.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SingleHeader__WEBPACK_IMPORTED_MODULE_4__]);\n_SingleHeader__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst SingleType2 = ({ post })=>{\n    //\n    const { title, content, date, author, databaseId, excerpt, featuredImage, ncPostMetaData } = (0,_utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_3__.getPostDataFromPostFragment)(post || {});\n    //\n    const imgWidth = featuredImage?.mediaDetails?.width || 1000;\n    const imgHeight = featuredImage?.mediaDetails?.height || 750;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `pt-8 lg:pt-16`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"container rounded-xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-screen-md mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SingleHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            post: {\n                                ...post\n                            },\n                            hiddenDesc: true\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/container/singles/single-2/single-2.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        !featuredImage?.sourceUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-5 border-b border-neutral-200 dark:border-neutral-800 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/container/singles/single-2/single-2.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/container/singles/single-2/single-2.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/container/singles/single-2/single-2.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            featuredImage?.sourceUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                alt: title,\n                containerClassName: \"container my-10 sm:my-12\",\n                className: `rounded-xl mx-auto ${imgWidth <= 768 && ncPostMetaData?.showRightSidebar ? \"w-full max-w-screen-md\" : \"\"}`,\n                src: featuredImage?.sourceUrl || \"\",\n                width: imgWidth,\n                height: imgHeight,\n                sizes: \"(max-width: 1024px) 100vw, 1280px\",\n                enableDefaultPlaceholder: true,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/container/singles/single-2/single-2.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/container/singles/single-2/single-2.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleType2);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29udGFpbmVyL3NpbmdsZXMvc2luZ2xlLTIvc2luZ2xlLTIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNpQjtBQUMrQjtBQUN2QztBQUkzQyxNQUFNSSxjQUF5QixDQUFDLEVBQUVDLElBQUksRUFBRTtJQUN0QyxFQUFFO0lBQ0YsTUFBTSxFQUNKQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxhQUFhLEVBQ2JDLGNBQWMsRUFDZixHQUFHWCwrRkFBMkJBLENBQUNHLFFBQVEsQ0FBQztJQUN6QyxFQUFFO0lBRUYsTUFBTVMsV0FBV0YsZUFBZUcsY0FBY0MsU0FBUztJQUN2RCxNQUFNQyxZQUFZTCxlQUFlRyxjQUFjRyxVQUFVO0lBQ3pELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXLENBQUMsYUFBYSxDQUFDOzswQkFFN0IsOERBQUNDO2dCQUFPRCxXQUFVOzBCQUNoQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDakIscURBQVlBOzRCQUFDRSxNQUFNO2dDQUFFLEdBQUdBLElBQUk7NEJBQUM7NEJBQUdpQixVQUFVOzs7Ozs7d0JBQzFDLENBQUNWLGVBQWVXLDJCQUNmLDhEQUFDSjs0QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNcEJSLGVBQWVXLDJCQUNkLDhEQUFDdEIsbUVBQU9BO2dCQUNOdUIsS0FBS2xCO2dCQUNMbUIsb0JBQW1CO2dCQUNuQkwsV0FBVyxDQUFDLG1CQUFtQixFQUM3Qk4sWUFBWSxPQUFPRCxnQkFBZ0JhLG1CQUMvQiwyQkFDQSxHQUNMLENBQUM7Z0JBQ0ZDLEtBQUtmLGVBQWVXLGFBQWE7Z0JBQ2pDUCxPQUFPRjtnQkFDUEksUUFBUUQ7Z0JBQ1JXLE9BQU87Z0JBQ1BDLHdCQUF3QjtnQkFDeEJDLFFBQVE7Ozs7Ozs7Ozs7OztBQUtsQjtBQUVBLGlFQUFlMUIsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25jbWF6LWZhdXN0Ly4vc3JjL2NvbnRhaW5lci9zaW5nbGVzL3NpbmdsZS0yL3NpbmdsZS0yLnRzeD8xYjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5jSW1hZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9OY0ltYWdlL05jSW1hZ2VcIjtcbmltcG9ydCB7IGdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudCB9IGZyb20gXCJAL3V0aWxzL2dldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudFwiO1xuaW1wb3J0IFNpbmdsZUhlYWRlciBmcm9tIFwiLi4vU2luZ2xlSGVhZGVyXCI7XG5pbXBvcnQgeyBTaW5nbGVUeXBlMVByb3BzIH0gZnJvbSBcIi4uL3NpbmdsZS9zaW5nbGVcIjtcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFNpbmdsZVR5cGUxUHJvcHMge31cblxuY29uc3QgU2luZ2xlVHlwZTI6IEZDPFByb3BzPiA9ICh7IHBvc3QgfSkgPT4ge1xuICAvL1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgY29udGVudCxcbiAgICBkYXRlLFxuICAgIGF1dGhvcixcbiAgICBkYXRhYmFzZUlkLFxuICAgIGV4Y2VycHQsXG4gICAgZmVhdHVyZWRJbWFnZSxcbiAgICBuY1Bvc3RNZXRhRGF0YSxcbiAgfSA9IGdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudChwb3N0IHx8IHt9KTtcbiAgLy9cblxuICBjb25zdCBpbWdXaWR0aCA9IGZlYXR1cmVkSW1hZ2U/Lm1lZGlhRGV0YWlscz8ud2lkdGggfHwgMTAwMDtcbiAgY29uc3QgaW1nSGVpZ2h0ID0gZmVhdHVyZWRJbWFnZT8ubWVkaWFEZXRhaWxzPy5oZWlnaHQgfHwgNzUwO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcHQtOCBsZzpwdC0xNmB9PlxuICAgICAgey8qIFNJTkdMRSBIRUFERVIgKi99XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lciByb3VuZGVkLXhsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLW1kIG14LWF1dG9cIj5cbiAgICAgICAgICA8U2luZ2xlSGVhZGVyIHBvc3Q9e3sgLi4ucG9zdCB9fSBoaWRkZW5EZXNjIC8+XG4gICAgICAgICAgeyFmZWF0dXJlZEltYWdlPy5zb3VyY2VVcmwgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01IGJvcmRlci1iIGJvcmRlci1uZXV0cmFsLTIwMCBkYXJrOmJvcmRlci1uZXV0cmFsLTgwMCBcIj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICB7LyogRkVBVFVSRUQgSU1BR0UgKi99XG4gICAgICB7ZmVhdHVyZWRJbWFnZT8uc291cmNlVXJsICYmIChcbiAgICAgICAgPE5jSW1hZ2VcbiAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT1cImNvbnRhaW5lciBteS0xMCBzbTpteS0xMlwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC14bCBteC1hdXRvICR7XG4gICAgICAgICAgICBpbWdXaWR0aCA8PSA3NjggJiYgbmNQb3N0TWV0YURhdGE/LnNob3dSaWdodFNpZGViYXJcbiAgICAgICAgICAgICAgPyBcInctZnVsbCBtYXgtdy1zY3JlZW4tbWRcIlxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBzcmM9e2ZlYXR1cmVkSW1hZ2U/LnNvdXJjZVVybCB8fCBcIlwifVxuICAgICAgICAgIHdpZHRoPXtpbWdXaWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2ltZ0hlaWdodH1cbiAgICAgICAgICBzaXplcz17XCIobWF4LXdpZHRoOiAxMDI0cHgpIDEwMHZ3LCAxMjgwcHhcIn1cbiAgICAgICAgICBlbmFibGVEZWZhdWx0UGxhY2Vob2xkZXJcbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVR5cGUyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmNJbWFnZSIsImdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudCIsIlNpbmdsZUhlYWRlciIsIlNpbmdsZVR5cGUyIiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJhdXRob3IiLCJkYXRhYmFzZUlkIiwiZXhjZXJwdCIsImZlYXR1cmVkSW1hZ2UiLCJuY1Bvc3RNZXRhRGF0YSIsImltZ1dpZHRoIiwibWVkaWFEZXRhaWxzIiwid2lkdGgiLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoaWRkZW5EZXNjIiwic291cmNlVXJsIiwiYWx0IiwiY29udGFpbmVyQ2xhc3NOYW1lIiwic2hvd1JpZ2h0U2lkZWJhciIsInNyYyIsInNpemVzIiwiZW5hYmxlRGVmYXVsdFBsYWNlaG9sZGVyIiwicHJpb3JpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/container/singles/single-2/single-2.tsx\n");

/***/ })

};
;