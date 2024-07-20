"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Card12/Card12.tsx":
/*!******************************************!*\
  !*** ./src/components/Card12/Card12.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/NcImage/NcImage */ \"./src/components/NcImage/NcImage.tsx\");\n/* harmony import */ var _components_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon */ \"./src/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/getPostDataFromPostFragment */ \"./src/utils/getPostDataFromPostFragment.ts\");\n\n\n\n\n\nconst Card12 = (param)=>{\n    let { className = \"h-full\", post } = param;\n    const { title, link, date, categories, excerpt, author, postFormats, featuredImage, ncPostMetaData, commentCount, uri, databaseId } = (0,_utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_4__.getPostDataFromPostFragment)(post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nc-Card12 group relative flex flex-col \".concat(className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: uri || \"\",\n                className: \"aspect-h-3 aspect-w-4 relative block h-0 w-full flex-shrink-0 flex-grow overflow-hidden rounded-3xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        containerClassName: \"absolute inset-0\",\n                        src: (featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.sourceUrl) || \"\",\n                        alt: title || \"Card Image\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card12/Card12.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"absolute bottom-2 start-2\",\n                            postType: postFormats || \"\",\n                            wrapSize: \"w-8 h-8\",\n                            iconSize: \"w-4 h-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card12/Card12.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card12/Card12.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card12/Card12.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 flex flex-col pe-10 sm:mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"nc-card-title block font-semibold text-neutral-900 transition-colors sm:text-lg lg:text-2xl dark:text-neutral-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            dangerouslySetInnerHTML: {\n                                __html: title\n                            },\n                            href: uri || \"\",\n                            className: \"line-clamp-2\",\n                            title: title || \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card12/Card12.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card12/Card12.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: excerpt || \"\"\n                        },\n                        className: \"mt-4 hidden text-neutral-500 sm:block dark:text-neutral-400\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card12/Card12.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card12/Card12.tsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card12/Card12.tsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Card12;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card12);\nvar _c;\n$RefreshReg$(_c, \"Card12\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkMTIvQ2FyZDEyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNrRDtBQUV1QztBQUM3RDtBQUVxRDtBQUlqRixNQUFNSSxTQUEwQjtRQUFDLEVBQUVDLFlBQVksUUFBUSxFQUFFQyxJQUFJLEVBQUU7SUFDOUQsTUFBTSxFQUNMQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsSUFBSSxFQUNKQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsTUFBTSxFQUNOQyxXQUFXLEVBQ1hDLGFBQWEsRUFDYkMsY0FBYyxFQUNkQyxZQUFZLEVBQ1pDLEdBQUcsRUFDSEMsVUFBVSxFQUNWLEdBQUdmLCtGQUEyQkEsQ0FBQ0c7SUFFaEMscUJBQ0MsOERBQUNhO1FBQUlkLFdBQVcsMENBQW9ELE9BQVZBOzswQkFDekQsOERBQUNILGtEQUFJQTtnQkFDSmtCLE1BQU1ILE9BQU87Z0JBQ2JaLFdBQVU7O2tDQUVWLDhEQUFDTCxtRUFBT0E7d0JBQ1BxQixvQkFBbUI7d0JBQ25CQyxLQUFLUixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVTLFNBQVMsS0FBSTt3QkFDakNDLEtBQUtqQixTQUFTO3dCQUNka0IsSUFBSTs7Ozs7O2tDQUVMLDhEQUFDQztrQ0FDQSw0RUFBQ3pCLDZGQUFvQkE7NEJBQ3BCSSxXQUFVOzRCQUNWc0IsVUFBVWQsZUFBZTs0QkFDekJlLFVBQVM7NEJBQ1RDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtaLDhEQUFDVjtnQkFBSWQsV0FBVTs7a0NBQ2QsOERBQUN5Qjt3QkFDQXpCLFdBQVk7a0NBRVosNEVBQUNILGtEQUFJQTs0QkFDSjZCLHlCQUF5QjtnQ0FBRUMsUUFBUXpCOzRCQUFNOzRCQUN6Q2EsTUFBTUgsT0FBTzs0QkFDYlosV0FBVTs0QkFDVkUsT0FBT0EsU0FBUzs7Ozs7Ozs7Ozs7a0NBR2xCLDhEQUFDWTt3QkFDQVkseUJBQXlCOzRCQUFFQyxRQUFRckIsV0FBVzt3QkFBRzt3QkFDakROLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0tBekRNRDtBQTJETiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkMTIvQ2FyZDEyLnRzeD8yYjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmNJbWFnZSBmcm9tICdAL2NvbXBvbmVudHMvTmNJbWFnZS9OY0ltYWdlJ1xuaW1wb3J0IFBvc3RDYXJkTWV0YSBmcm9tICdAL2NvbXBvbmVudHMvUG9zdENhcmRNZXRhL1Bvc3RDYXJkTWV0YSdcbmltcG9ydCBQb3N0VHlwZUZlYXR1cmVkSWNvbiBmcm9tICdAL2NvbXBvbmVudHMvUG9zdFR5cGVGZWF0dXJlZEljb24vUG9zdFR5cGVGZWF0dXJlZEljb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDb21tb25Qb3N0Q2FyZFByb3BzIH0gZnJvbSAnLi4vQ2FyZDIvQ2FyZDInXG5pbXBvcnQgeyBnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQgfSBmcm9tICdAL3V0aWxzL2dldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudCdcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkMTJQcm9wcyBleHRlbmRzIENvbW1vblBvc3RDYXJkUHJvcHMge31cblxuY29uc3QgQ2FyZDEyOiBGQzxDYXJkMTJQcm9wcz4gPSAoeyBjbGFzc05hbWUgPSAnaC1mdWxsJywgcG9zdCB9KSA9PiB7XG5cdGNvbnN0IHtcblx0XHR0aXRsZSxcblx0XHRsaW5rLFxuXHRcdGRhdGUsXG5cdFx0Y2F0ZWdvcmllcyxcblx0XHRleGNlcnB0LFxuXHRcdGF1dGhvcixcblx0XHRwb3N0Rm9ybWF0cyxcblx0XHRmZWF0dXJlZEltYWdlLFxuXHRcdG5jUG9zdE1ldGFEYXRhLFxuXHRcdGNvbW1lbnRDb3VudCxcblx0XHR1cmksXG5cdFx0ZGF0YWJhc2VJZCxcblx0fSA9IGdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudChwb3N0KVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2BuYy1DYXJkMTIgZ3JvdXAgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCAke2NsYXNzTmFtZX1gfT5cblx0XHRcdDxMaW5rXG5cdFx0XHRcdGhyZWY9e3VyaSB8fCAnJ31cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYXNwZWN0LWgtMyBhc3BlY3Qtdy00IHJlbGF0aXZlIGJsb2NrIGgtMCB3LWZ1bGwgZmxleC1zaHJpbmstMCBmbGV4LWdyb3cgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsXCJcblx0XHRcdD5cblx0XHRcdFx0PE5jSW1hZ2Vcblx0XHRcdFx0XHRjb250YWluZXJDbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCJcblx0XHRcdFx0XHRzcmM9e2ZlYXR1cmVkSW1hZ2U/LnNvdXJjZVVybCB8fCAnJ31cblx0XHRcdFx0XHRhbHQ9e3RpdGxlIHx8ICdDYXJkIEltYWdlJ31cblx0XHRcdFx0XHRmaWxsXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdDxQb3N0VHlwZUZlYXR1cmVkSWNvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTIgc3RhcnQtMlwiXG5cdFx0XHRcdFx0XHRwb3N0VHlwZT17cG9zdEZvcm1hdHMgfHwgJyd9XG5cdFx0XHRcdFx0XHR3cmFwU2l6ZT1cInctOCBoLThcIlxuXHRcdFx0XHRcdFx0aWNvblNpemU9XCJ3LTQgaC00XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L0xpbms+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4IGZsZXgtY29sIHBlLTEwIHNtOm10LThcIj5cblx0XHRcdFx0PGgyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgbmMtY2FyZC10aXRsZSBibG9jayBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC05MDAgdHJhbnNpdGlvbi1jb2xvcnMgc206dGV4dC1sZyBsZzp0ZXh0LTJ4bCBkYXJrOnRleHQtbmV1dHJhbC0xMDBgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGl0bGUgfX1cblx0XHRcdFx0XHRcdGhyZWY9e3VyaSB8fCAnJ31cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImxpbmUtY2xhbXAtMlwiXG5cdFx0XHRcdFx0XHR0aXRsZT17dGl0bGUgfHwgJyd9XG5cdFx0XHRcdFx0PjwvTGluaz5cblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZXhjZXJwdCB8fCAnJyB9fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm10LTQgaGlkZGVuIHRleHQtbmV1dHJhbC01MDAgc206YmxvY2sgZGFyazp0ZXh0LW5ldXRyYWwtNDAwXCJcblx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHR7LyogPFBvc3RDYXJkTWV0YSBjbGFzc05hbWU9XCJtdC01IHRleHQtc21cIiBtZXRhPXt7IGF1dGhvciwgZGF0ZSB9fSAvPiAqL31cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQxMlxuIl0sIm5hbWVzIjpbIk5jSW1hZ2UiLCJQb3N0VHlwZUZlYXR1cmVkSWNvbiIsIkxpbmsiLCJnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQiLCJDYXJkMTIiLCJjbGFzc05hbWUiLCJwb3N0IiwidGl0bGUiLCJsaW5rIiwiZGF0ZSIsImNhdGVnb3JpZXMiLCJleGNlcnB0IiwiYXV0aG9yIiwicG9zdEZvcm1hdHMiLCJmZWF0dXJlZEltYWdlIiwibmNQb3N0TWV0YURhdGEiLCJjb21tZW50Q291bnQiLCJ1cmkiLCJkYXRhYmFzZUlkIiwiZGl2IiwiaHJlZiIsImNvbnRhaW5lckNsYXNzTmFtZSIsInNyYyIsInNvdXJjZVVybCIsImFsdCIsImZpbGwiLCJzcGFuIiwicG9zdFR5cGUiLCJ3cmFwU2l6ZSIsImljb25TaXplIiwiaDIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card12/Card12.tsx\n"));

/***/ })

});