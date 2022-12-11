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
exports.id = "pages/users/[id]/newProject";
exports.ids = ["pages/users/[id]/newProject"];
exports.modules = {

/***/ "./components/AddProjectForm.js":
/*!**************************************!*\
  !*** ./components/AddProjectForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AddProjectForm = ({ id  })=>{\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        shotlist: []\n    });\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(id);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isSubmitting) {\n            if (Object.keys(errors).length === 0) {\n                addProject();\n            } else {\n                setIsSubmitting(false);\n            }\n        }\n    }, [\n        errors\n    ]);\n    const addProject = async (req, res)=>{\n        try {\n            const proj = {\n                project: form\n            };\n            const res1 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`http://localhost:3000/api/users/${id}`, {\n                method: \"PUT\",\n                headers: {\n                    Accept: \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(proj)\n            });\n            const data = await res1.json();\n            console.log(data);\n            router.push(`/users/${data.data._id}`);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        let errs = validate();\n        setErrors(errs);\n        setIsSubmitting(true);\n    };\n    const handleChange = (e)=>{\n        setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n        console.log(\"handle change: \", e.target.name, form);\n    };\n    const validate = ()=>{\n        let err = {};\n        if (!form.name) {\n            err.name = \"Project name is required\";\n            console.log(\"no project name\");\n        }\n        return err;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n        textAlign: \"center\",\n        style: {\n            height: \"70vh\"\n        },\n        verticalAlign: \"middle\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {\n            style: {\n                maxWidth: 450\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                size: \"small\",\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {\n                    stacked: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {\n                            fluid: true,\n                            error: errors.name ? {\n                                content: \"Please enter a project name\",\n                                pointing: \"below\"\n                            } : null,\n                            name: \"name\",\n                            icon: \"user\",\n                            iconPosition: \"left\",\n                            placeholder: \"project name\",\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"D:\\\\claqueta-final\\\\components\\\\AddProjectForm.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            color: \"olive\",\n                            fluid: true,\n                            size: \"large\",\n                            type: \"submit\",\n                            children: \"add\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\claqueta-final\\\\components\\\\AddProjectForm.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\claqueta-final\\\\components\\\\AddProjectForm.js\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\claqueta-final\\\\components\\\\AddProjectForm.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\claqueta-final\\\\components\\\\AddProjectForm.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\claqueta-final\\\\components\\\\AddProjectForm.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProjectForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQ1pDLFVBQVVwQjs7Ozs7O3NDQUdaLDhEQUFDN0MscURBQU1BOzRCQUFDa0UsT0FBTTs0QkFBUVAsS0FBSzs0QkFBQ0osTUFBSzs0QkFBUVksTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5FO0FBRUEsaUVBQWUzRCxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhcXVldGEtZmluYWwvLi9jb21wb25lbnRzL0FkZFByb2plY3RGb3JtLmpzP2Q5NDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBHcmlkLCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQWRkUHJvamVjdEZvcm0gPSAoeyBpZCB9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyBuYW1lOiBcIlwiLCBzaG90bGlzdDogW10gfSk7XHJcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzU3VibWl0dGluZykge1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBhZGRQcm9qZWN0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtlcnJvcnNdKTtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcHJvaiA9IHsgcHJvamVjdDogZm9ybSB9O1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvaiksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvdXNlcnMvJHtkYXRhLmRhdGEuX2lkfWApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZXJycyA9IHZhbGlkYXRlKCk7XHJcbiAgICBzZXRFcnJvcnMoZXJycyk7XHJcblxyXG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRGb3JtKHtcclxuICAgICAgLi4uZm9ybSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlOiBcIiwgZS50YXJnZXQubmFtZSwgZm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZXJyID0ge307XHJcbiAgICBpZiAoIWZvcm0ubmFtZSkge1xyXG4gICAgICBlcnIubmFtZSA9IFwiUHJvamVjdCBuYW1lIGlzIHJlcXVpcmVkXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibm8gcHJvamVjdCBuYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnI7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIHRleHRBbGlnbj1cImNlbnRlclwiIHN0eWxlPXt7IGhlaWdodDogXCI3MHZoXCIgfX0gdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fT5cclxuICAgICAgICA8Rm9ybSBzaXplPVwic21hbGxcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxTZWdtZW50IHN0YWNrZWQ+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMubmFtZVxyXG4gICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUGxlYXNlIGVudGVyIGEgcHJvamVjdCBuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludGluZzogXCJiZWxvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcm9qZWN0IG5hbWVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwib2xpdmVcIiBmbHVpZCBzaXplPVwibGFyZ2VcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgYWRkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvamVjdEZvcm07XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJGb3JtIiwiR3JpZCIsIlNlZ21lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwidXNlUm91dGVyIiwiQWRkUHJvamVjdEZvcm0iLCJpZCIsImZvcm0iLCJzZXRGb3JtIiwibmFtZSIsInNob3RsaXN0IiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJhZGRQcm9qZWN0IiwicmVxIiwicmVzIiwicHJvaiIsInByb2plY3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInB1c2giLCJfaWQiLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVycnMiLCJ2YWxpZGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZXJyIiwidGV4dEFsaWduIiwic3R5bGUiLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiQ29sdW1uIiwibWF4V2lkdGgiLCJzaXplIiwib25TdWJtaXQiLCJzdGFja2VkIiwiSW5wdXQiLCJmbHVpZCIsImNvbnRlbnQiLCJwb2ludGluZyIsImljb24iLCJpY29uUG9zaXRpb24iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiY29sb3IiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddProjectForm.js\n");

/***/ }),

/***/ "./pages/users/[id]/newProject.js":
/*!****************************************!*\
  !*** ./pages/users/[id]/newProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AddProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/AddProjectForm */ \"./components/AddProjectForm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst NewProject = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"I'm a little new project stand in\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\newProject.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddProjectForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: id\n                }, void 0, false, {\n                    fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\newProject.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\newProject.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProject);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdL25ld1Byb2plY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0U7QUFDeEI7QUFFeEMsTUFBTUUsYUFBYSxJQUFNO0lBQ3ZCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLEdBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzNCLHFCQUNFO2tCQUNFLDRFQUFDQzs7OEJBQ0MsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNQLGtFQUFjQTtvQkFBQ0ksSUFBSUE7Ozs7Ozs7Ozs7Ozs7QUFJNUI7QUFFQSxpRUFBZUYsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXF1ZXRhLWZpbmFsLy4vcGFnZXMvdXNlcnMvW2lkXS9uZXdQcm9qZWN0LmpzPzg4ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZFByb2plY3RGb3JtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0FkZFByb2plY3RGb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmV3UHJvamVjdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkknbSBhIGxpdHRsZSBuZXcgcHJvamVjdCBzdGFuZCBpbjwvaDE+XHJcbiAgICAgICAgPEFkZFByb2plY3RGb3JtIGlkPXtpZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UHJvamVjdDtcclxuIl0sIm5hbWVzIjpbIkFkZFByb2plY3RGb3JtIiwidXNlUm91dGVyIiwiTmV3UHJvamVjdCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id]/newProject.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id]/newProject.js"));
module.exports = __webpack_exports__;

})();