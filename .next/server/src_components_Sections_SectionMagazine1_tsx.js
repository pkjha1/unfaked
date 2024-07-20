"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_Sections_SectionMagazine1_tsx";
exports.ids = ["src_components_Sections_SectionMagazine1_tsx"];
exports.modules = {

/***/ "./src/components/Card6/Card6.tsx":
/*!****************************************!*\
  !*** ./src/components/Card6/Card6.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PostCardSaveAction_PostCardSaveAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/PostCardSaveAction/PostCardSaveAction */ \"./src/components/PostCardSaveAction/PostCardSaveAction.tsx\");\n/* harmony import */ var _components_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PostCardLikeAndComment/PostCardLikeAndComment */ \"./src/components/PostCardLikeAndComment/PostCardLikeAndComment.tsx\");\n/* harmony import */ var _components_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CategoryBadgeList/CategoryBadgeList */ \"./src/components/CategoryBadgeList/CategoryBadgeList.tsx\");\n/* harmony import */ var _components_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon */ \"./src/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/getPostDataFromPostFragment */ \"./src/utils/getPostDataFromPostFragment.ts\");\n/* harmony import */ var _MyImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MyImage */ \"./src/components/MyImage.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PostCardSaveAction_PostCardSaveAction__WEBPACK_IMPORTED_MODULE_1__, _components_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_2__]);\n([_components_PostCardSaveAction_PostCardSaveAction__WEBPACK_IMPORTED_MODULE_1__, _components_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst Card6 = ({ className = \"h-full\", post })=>{\n    const { title, link, date, categories, excerpt, author, postFormats, featuredImage, ncPostMetaData, commentCount, uri, databaseId } = (0,_utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_6__.getPostDataFromPostFragment)(post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `nc-Card6 group relative flex flex-row border-neutral-200 sm:rounded-3xl sm:border sm:bg-white sm:p-4 dark:border-neutral-700 sm:dark:bg-neutral-900 ${className}`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: uri || \"\",\n                className: \"absolute inset-0 z-0\"\n            }, void 0, false, {\n                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-grow flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 space-y-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                categories: categories?.nodes || []\n                            }, void 0, false, {\n                                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: `block text-sm font-semibold sm:text-base`,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    dangerouslySetInnerHTML: {\n                                        __html: title\n                                    },\n                                    href: uri || \"\",\n                                    className: \"line-clamp-2\",\n                                    title: title || \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-auto flex flex-wrap items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"relative\",\n                                commentCount: commentCount || 0,\n                                linkToPost: uri || \"\",\n                                likeCount: ncPostMetaData?.likesCount || 0,\n                                postDatabseId: databaseId || 0,\n                                viewCount: ncPostMetaData?.viewsCount || 0\n                            }, void 0, false, {\n                                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCardSaveAction_PostCardSaveAction__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"relative\",\n                                readingTime: ncPostMetaData?.readingTime || 1,\n                                postDatabseId: databaseId || 0\n                            }, void 0, false, {\n                                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: uri || \"\",\n                className: `relative z-0 ms-3 block max-h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl sm:ms-5 sm:max-h-full sm:w-40`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyImage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        sizes: \"(max-width: 600px) 180px, 400px\",\n                        className: \"h-full w-full object-cover\",\n                        fill: true,\n                        src: featuredImage?.sourceUrl || \"\",\n                        alt: title || \"Card Image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"absolute bottom-1 start-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            wrapSize: \"h-7 w-7\",\n                            iconSize: \"h-4 w-4\",\n                            postType: postFormats || \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n                lineNumber: 65,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Card6/Card6.tsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card6);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkNi9DYXJkNi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW1GO0FBQ1k7QUFDZjtBQUNTO0FBQzdEO0FBQ3FEO0FBQ2pEO0FBS2hDLE1BQU1PLFFBQXdCLENBQUMsRUFBRUMsWUFBWSxRQUFRLEVBQUVDLElBQUksRUFBRTtJQUM1RCxNQUFNLEVBQ0xDLEtBQUssRUFDTEMsSUFBSSxFQUNKQyxJQUFJLEVBQ0pDLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxNQUFNLEVBQ05DLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxjQUFjLEVBQ2RDLFlBQVksRUFDWkMsR0FBRyxFQUNIQyxVQUFVLEVBQ1YsR0FBR2hCLCtGQUEyQkEsQ0FBQ0k7SUFFaEMscUJBQ0MsOERBQUNhO1FBQ0FkLFdBQVcsQ0FBQyxvSkFBb0osRUFBRUEsVUFBVSxDQUFDOzswQkFFN0ssOERBQUNKLGtEQUFJQTtnQkFBQ21CLE1BQU1ILE9BQU87Z0JBQUlaLFdBQVU7Ozs7OzswQkFDakMsOERBQUNjO2dCQUFJZCxXQUFVOztrQ0FDZCw4REFBQ2M7d0JBQUlkLFdBQVU7OzBDQUNkLDhEQUFDTix1RkFBaUJBO2dDQUFDVyxZQUFZQSxZQUFZVyxTQUFTLEVBQUU7Ozs7OzswQ0FDdEQsOERBQUNDO2dDQUFHakIsV0FBVyxDQUFDLHdDQUF3QyxDQUFDOzBDQUN4RCw0RUFBQ0osa0RBQUlBO29DQUNKc0IseUJBQXlCO3dDQUFFQyxRQUFRakI7b0NBQU07b0NBQ3pDYSxNQUFNSCxPQUFPO29DQUNiWixXQUFVO29DQUNWRSxPQUFPQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLbkIsOERBQUNZO3dCQUFJZCxXQUFVOzswQ0FDZCw4REFBQ1AsaUdBQXNCQTtnQ0FDdEJPLFdBQVU7Z0NBQ1ZXLGNBQWNBLGdCQUFnQjtnQ0FDOUJTLFlBQVlSLE9BQU87Z0NBQ25CUyxXQUFXWCxnQkFBZ0JZLGNBQWM7Z0NBQ3pDQyxlQUFlVixjQUFjO2dDQUM3QlcsV0FBV2QsZ0JBQWdCZSxjQUFjOzs7Ozs7MENBRTFDLDhEQUFDakMseUZBQWtCQTtnQ0FDbEJRLFdBQVU7Z0NBQ1YwQixhQUFhaEIsZ0JBQWdCZ0IsZUFBZTtnQ0FDNUNILGVBQWVWLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLaEMsOERBQUNqQixrREFBSUE7Z0JBQ0ptQixNQUFNSCxPQUFPO2dCQUNiWixXQUFXLENBQUMsNkdBQTZHLENBQUM7O2tDQUUxSCw4REFBQ0YsZ0RBQU9BO3dCQUNQNkIsT0FBTTt3QkFDTjNCLFdBQVU7d0JBQ1Y0QixJQUFJO3dCQUNKQyxLQUFLcEIsZUFBZXFCLGFBQWE7d0JBQ2pDQyxLQUFLN0IsU0FBUzs7Ozs7O2tDQUVmLDhEQUFDOEI7d0JBQUtoQyxXQUFVO2tDQUNmLDRFQUFDTCw2RkFBb0JBOzRCQUNwQnNDLFVBQVM7NEJBQ1RDLFVBQVM7NEJBQ1RDLFVBQVUzQixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vQjtBQUVBLGlFQUFlVCxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmNtYXotZmF1c3QvLi9zcmMvY29tcG9uZW50cy9DYXJkNi9DYXJkNi50c3g/MGI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBvc3RDYXJkTWV0YSBmcm9tICdAL2NvbXBvbmVudHMvUG9zdENhcmRNZXRhL1Bvc3RDYXJkTWV0YSdcbmltcG9ydCBQb3N0Q2FyZFNhdmVBY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL1Bvc3RDYXJkU2F2ZUFjdGlvbi9Qb3N0Q2FyZFNhdmVBY3Rpb24nXG5pbXBvcnQgUG9zdENhcmRMaWtlQW5kQ29tbWVudCBmcm9tICdAL2NvbXBvbmVudHMvUG9zdENhcmRMaWtlQW5kQ29tbWVudC9Qb3N0Q2FyZExpa2VBbmRDb21tZW50J1xuaW1wb3J0IENhdGVnb3J5QmFkZ2VMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9DYXRlZ29yeUJhZGdlTGlzdC9DYXRlZ29yeUJhZGdlTGlzdCdcbmltcG9ydCBQb3N0VHlwZUZlYXR1cmVkSWNvbiBmcm9tICdAL2NvbXBvbmVudHMvUG9zdFR5cGVGZWF0dXJlZEljb24vUG9zdFR5cGVGZWF0dXJlZEljb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQgfSBmcm9tICdAL3V0aWxzL2dldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudCdcbmltcG9ydCBNeUltYWdlIGZyb20gJy4uL015SW1hZ2UnXG5pbXBvcnQgeyBDb21tb25Qb3N0Q2FyZFByb3BzIH0gZnJvbSAnLi4vQ2FyZDIvQ2FyZDInXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZDZQcm9wcyBleHRlbmRzIENvbW1vblBvc3RDYXJkUHJvcHMge31cblxuY29uc3QgQ2FyZDY6IEZDPENhcmQ2UHJvcHM+ID0gKHsgY2xhc3NOYW1lID0gJ2gtZnVsbCcsIHBvc3QgfSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0dGl0bGUsXG5cdFx0bGluayxcblx0XHRkYXRlLFxuXHRcdGNhdGVnb3JpZXMsXG5cdFx0ZXhjZXJwdCxcblx0XHRhdXRob3IsXG5cdFx0cG9zdEZvcm1hdHMsXG5cdFx0ZmVhdHVyZWRJbWFnZSxcblx0XHRuY1Bvc3RNZXRhRGF0YSxcblx0XHRjb21tZW50Q291bnQsXG5cdFx0dXJpLFxuXHRcdGRhdGFiYXNlSWQsXG5cdH0gPSBnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQocG9zdClcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17YG5jLUNhcmQ2IGdyb3VwIHJlbGF0aXZlIGZsZXggZmxleC1yb3cgYm9yZGVyLW5ldXRyYWwtMjAwIHNtOnJvdW5kZWQtM3hsIHNtOmJvcmRlciBzbTpiZy13aGl0ZSBzbTpwLTQgZGFyazpib3JkZXItbmV1dHJhbC03MDAgc206ZGFyazpiZy1uZXV0cmFsLTkwMCAke2NsYXNzTmFtZX1gfVxuXHRcdD5cblx0XHRcdDxMaW5rIGhyZWY9e3VyaSB8fCAnJ30gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTBcIj48L0xpbms+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IGZsZXgtY29sXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNCBzcGFjZS15LTNcIj5cblx0XHRcdFx0XHQ8Q2F0ZWdvcnlCYWRnZUxpc3QgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcz8ubm9kZXMgfHwgW119IC8+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT17YGJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCBzbTp0ZXh0LWJhc2VgfT5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGl0bGUgfX1cblx0XHRcdFx0XHRcdFx0aHJlZj17dXJpIHx8ICcnfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsaW5lLWNsYW1wLTJcIlxuXHRcdFx0XHRcdFx0XHR0aXRsZT17dGl0bGUgfHwgJyd9XG5cdFx0XHRcdFx0XHQ+PC9MaW5rPlxuXHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0ey8qIDxQb3N0Q2FyZE1ldGEgbWV0YT17eyBhdXRob3IsIGRhdGUgfX0gLz4gKi99XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuXHRcdFx0XHRcdDxQb3N0Q2FyZExpa2VBbmRDb21tZW50XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdFx0XHRjb21tZW50Q291bnQ9e2NvbW1lbnRDb3VudCB8fCAwfVxuXHRcdFx0XHRcdFx0bGlua1RvUG9zdD17dXJpIHx8ICcnfVxuXHRcdFx0XHRcdFx0bGlrZUNvdW50PXtuY1Bvc3RNZXRhRGF0YT8ubGlrZXNDb3VudCB8fCAwfVxuXHRcdFx0XHRcdFx0cG9zdERhdGFic2VJZD17ZGF0YWJhc2VJZCB8fCAwfVxuXHRcdFx0XHRcdFx0dmlld0NvdW50PXtuY1Bvc3RNZXRhRGF0YT8udmlld3NDb3VudCB8fCAwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFBvc3RDYXJkU2F2ZUFjdGlvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuXHRcdFx0XHRcdFx0cmVhZGluZ1RpbWU9e25jUG9zdE1ldGFEYXRhPy5yZWFkaW5nVGltZSB8fCAxfVxuXHRcdFx0XHRcdFx0cG9zdERhdGFic2VJZD17ZGF0YWJhc2VJZCB8fCAwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxMaW5rXG5cdFx0XHRcdGhyZWY9e3VyaSB8fCAnJ31cblx0XHRcdFx0Y2xhc3NOYW1lPXtgcmVsYXRpdmUgei0wIG1zLTMgYmxvY2sgbWF4LWgtMjggdy0yNCBmbGV4LXNocmluay0wIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBzbTptcy01IHNtOm1heC1oLWZ1bGwgc206dy00MGB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNeUltYWdlXG5cdFx0XHRcdFx0c2l6ZXM9XCIobWF4LXdpZHRoOiA2MDBweCkgMTgwcHgsIDQwMHB4XCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiXG5cdFx0XHRcdFx0ZmlsbFxuXHRcdFx0XHRcdHNyYz17ZmVhdHVyZWRJbWFnZT8uc291cmNlVXJsIHx8ICcnfVxuXHRcdFx0XHRcdGFsdD17dGl0bGUgfHwgJ0NhcmQgSW1hZ2UnfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMSBzdGFydC0xXCI+XG5cdFx0XHRcdFx0PFBvc3RUeXBlRmVhdHVyZWRJY29uXG5cdFx0XHRcdFx0XHR3cmFwU2l6ZT1cImgtNyB3LTdcIlxuXHRcdFx0XHRcdFx0aWNvblNpemU9XCJoLTQgdy00XCJcblx0XHRcdFx0XHRcdHBvc3RUeXBlPXtwb3N0Rm9ybWF0cyB8fCAnJ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L0xpbms+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDZcbiJdLCJuYW1lcyI6WyJQb3N0Q2FyZFNhdmVBY3Rpb24iLCJQb3N0Q2FyZExpa2VBbmRDb21tZW50IiwiQ2F0ZWdvcnlCYWRnZUxpc3QiLCJQb3N0VHlwZUZlYXR1cmVkSWNvbiIsIkxpbmsiLCJnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQiLCJNeUltYWdlIiwiQ2FyZDYiLCJjbGFzc05hbWUiLCJwb3N0IiwidGl0bGUiLCJsaW5rIiwiZGF0ZSIsImNhdGVnb3JpZXMiLCJleGNlcnB0IiwiYXV0aG9yIiwicG9zdEZvcm1hdHMiLCJmZWF0dXJlZEltYWdlIiwibmNQb3N0TWV0YURhdGEiLCJjb21tZW50Q291bnQiLCJ1cmkiLCJkYXRhYmFzZUlkIiwiZGl2IiwiaHJlZiIsIm5vZGVzIiwiaDIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImxpbmtUb1Bvc3QiLCJsaWtlQ291bnQiLCJsaWtlc0NvdW50IiwicG9zdERhdGFic2VJZCIsInZpZXdDb3VudCIsInZpZXdzQ291bnQiLCJyZWFkaW5nVGltZSIsInNpemVzIiwiZmlsbCIsInNyYyIsInNvdXJjZVVybCIsImFsdCIsInNwYW4iLCJ3cmFwU2l6ZSIsImljb25TaXplIiwicG9zdFR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card6/Card6.tsx\n");

/***/ }),

/***/ "./src/components/Sections/SectionMagazine1.tsx":
/*!******************************************************!*\
  !*** ./src/components/Sections/SectionMagazine1.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card2_Card2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card2/Card2 */ \"./src/components/Card2/Card2.tsx\");\n/* harmony import */ var _components_Card6_Card6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card6/Card6 */ \"./src/components/Card6/Card6.tsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Empty */ \"./src/components/Empty.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Card2_Card2__WEBPACK_IMPORTED_MODULE_1__, _components_Card6_Card6__WEBPACK_IMPORTED_MODULE_2__]);\n([_components_Card2_Card2__WEBPACK_IMPORTED_MODULE_1__, _components_Card6_Card6__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst Components = ({ posts, className = \"\" })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `nc-SectionMagazine1 ${className}`,\n        children: !posts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Sections/SectionMagazine1.tsx\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:gap-7\",\n            children: [\n                posts[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card2_Card2__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    size: \"large\",\n                    post: posts[0]\n                }, void 0, false, {\n                    fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Sections/SectionMagazine1.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 19\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-6 2xl:gap-7\",\n                    children: posts.filter((_, i)=>i < 4 && i > 0).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card6_Card6__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            post: item\n                        }, item.databaseId, false, {\n                            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Sections/SectionMagazine1.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Sections/SectionMagazine1.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 6\n                }, undefined),\n                posts.filter((_, i)=>i >= 4).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card6_Card6__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: item\n                    }, item.databaseId, false, {\n                        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Sections/SectionMagazine1.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 8\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Sections/SectionMagazine1.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shubhamsoni/Downloads/unfaked/src/components/Sections/SectionMagazine1.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9TZWN0aW9uTWFnYXppbmUxLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzJEO0FBQ2Y7QUFDaEI7QUFPNUIsTUFBTUcsYUFBd0MsQ0FBQyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRSxFQUFFO0lBQ3ZFLHFCQUNDLDhEQUFDQztRQUFJRCxXQUFXLENBQUMsb0JBQW9CLEVBQUVBLFVBQVUsQ0FBQztrQkFDaEQsQ0FBQ0QsTUFBTUcsTUFBTSxpQkFDYiw4REFBQ0wsOENBQUtBOzs7O3NDQUVOLDhEQUFDSTtZQUFJRCxXQUFVOztnQkFDYkQsS0FBSyxDQUFDLEVBQUUsa0JBQUksOERBQUNKLCtEQUFLQTtvQkFBQ1EsTUFBSztvQkFBUUMsTUFBTUwsS0FBSyxDQUFDLEVBQUU7Ozs7Ozs4QkFDL0MsOERBQUNFO29CQUFJRCxXQUFVOzhCQUNiRCxNQUNDTSxNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsSUFBSSxLQUFLQSxJQUFJLEdBQzlCQyxHQUFHLENBQUNDLENBQUFBLHFCQUNKLDhEQUFDYiwrREFBS0E7NEJBQXVCUSxNQUFNSzsyQkFBdkJBLEtBQUtDLFVBQVU7Ozs7Ozs7Ozs7Z0JBRzdCWCxNQUNDTSxNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsS0FBSyxHQUN0QkMsR0FBRyxDQUFDQyxDQUFBQSxxQkFDSiw4REFBQ2IsK0RBQUtBO3dCQUF1QlEsTUFBTUs7dUJBQXZCQSxLQUFLQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FBTWxDO0FBRUEsaUVBQWVaLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uY21hei1mYXVzdC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL1NlY3Rpb25NYWdhemluZTEudHN4PzQ3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkMiwgeyBUUG9zdENhcmQgfSBmcm9tICdAL2NvbXBvbmVudHMvQ2FyZDIvQ2FyZDInXG5pbXBvcnQgQ2FyZDYgZnJvbSAnQC9jb21wb25lbnRzL0NhcmQ2L0NhcmQ2J1xuaW1wb3J0IEVtcHR5IGZyb20gJy4uL0VtcHR5J1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb25NYWdhemluZTFQcm9wcyB7XG5cdHBvc3RzOiBUUG9zdENhcmRbXVxuXHRjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuY29uc3QgQ29tcG9uZW50czogRkM8U2VjdGlvbk1hZ2F6aW5lMVByb3BzPiA9ICh7IHBvc3RzLCBjbGFzc05hbWUgPSAnJyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2BuYy1TZWN0aW9uTWFnYXppbmUxICR7Y2xhc3NOYW1lfWB9PlxuXHRcdFx0eyFwb3N0cy5sZW5ndGggPyAoXG5cdFx0XHRcdDxFbXB0eSAvPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC02IGxnOmdyaWQtY29scy0yIDJ4bDpnYXAtN1wiPlxuXHRcdFx0XHRcdHtwb3N0c1swXSAmJiA8Q2FyZDIgc2l6ZT1cImxhcmdlXCIgcG9zdD17cG9zdHNbMF19IC8+fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNiAyeGw6Z2FwLTdcIj5cblx0XHRcdFx0XHRcdHtwb3N0c1xuXHRcdFx0XHRcdFx0XHQuZmlsdGVyKChfLCBpKSA9PiBpIDwgNCAmJiBpID4gMClcblx0XHRcdFx0XHRcdFx0Lm1hcChpdGVtID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZDYga2V5PXtpdGVtLmRhdGFiYXNlSWR9IHBvc3Q9e2l0ZW19IC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtwb3N0c1xuXHRcdFx0XHRcdFx0LmZpbHRlcigoXywgaSkgPT4gaSA+PSA0KVxuXHRcdFx0XHRcdFx0Lm1hcChpdGVtID0+IChcblx0XHRcdFx0XHRcdFx0PENhcmQ2IGtleT17aXRlbS5kYXRhYmFzZUlkfSBwb3N0PXtpdGVtfSAvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRzXG4iXSwibmFtZXMiOlsiQ2FyZDIiLCJDYXJkNiIsIkVtcHR5IiwiQ29tcG9uZW50cyIsInBvc3RzIiwiY2xhc3NOYW1lIiwiZGl2IiwibGVuZ3RoIiwic2l6ZSIsInBvc3QiLCJmaWx0ZXIiLCJfIiwiaSIsIm1hcCIsIml0ZW0iLCJkYXRhYmFzZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sections/SectionMagazine1.tsx\n");

/***/ })

};
;