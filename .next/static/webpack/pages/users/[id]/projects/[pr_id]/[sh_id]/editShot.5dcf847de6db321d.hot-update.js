"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]/projects/[pr_id]/[sh_id]/editShot",{

/***/ "./pages/users/[id]/projects/[pr_id]/[sh_id]/editShot.js":
/*!***************************************************************!*\
  !*** ./pages/users/[id]/projects/[pr_id]/[sh_id]/editShot.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EditShotForm = (param)=>{\n    let { shot  } = param;\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        shot: {\n            name: \"\",\n            scene: \"\",\n            dayNight: \"\",\n            interiorExterior: \"\",\n            Characters: \"\"\n        }\n    });\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id , pr_id , sh_id  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isSubmitting) {\n            if (Object.keys(errors).length === 0) {\n                editShot();\n            } else {\n                setIsSubmitting(false);\n            }\n        }\n    }, [\n        errors\n    ]);\n    const editShot = async (req, res)=>{\n        try {\n            const res1 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"http://localhost:3000/api/users/\".concat(id, \"/projects/\").concat(pr_id, \"/\").concat(sh_id), {\n                method: \"PUT\",\n                headers: {\n                    Accept: \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(form)\n            });\n            const data = await res1.json();\n            router.push(\"/users/\".concat(id, \"/projects/\").concat(pr_id));\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        let errs = validate();\n        setErrors(errs);\n        setIsSubmitting(true);\n    };\n    const handleChange = (e)=>{\n        console.log(\"handle change: \", e.target.name);\n        setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    };\n    const validate = ()=>{\n        let err = {};\n        if (!form.name) {\n            err.username = \"name is required\";\n            console.log(\"no name\");\n        }\n        if (!form.scene) {\n            err.password = \"scene is required\";\n            console.log(\"no scene\");\n        }\n        if (!form.dayNight) {\n            err.password = \"day or night is required\";\n            console.log(\"no day or night\");\n        }\n        if (!form.interiorExterior) {\n            err.password = \"int or ext is required\";\n            console.log(\"no int or ext\");\n        }\n        return err;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {\n        size: \"small\",\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {\n            stacked: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {\n                    fluid: true,\n                    onChange: handleChange,\n                    name: \"name\",\n                    value: shot.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\projects\\\\[pr_id]\\\\[sh_id]\\\\editShot.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {\n                    fluid: true,\n                    onChange: handleChange,\n                    name: \"scene\",\n                    value: shot.scene\n                }, void 0, false, {\n                    fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\projects\\\\[pr_id]\\\\[sh_id]\\\\editShot.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {\n                    fluid: true,\n                    onChange: handleChange,\n                    name: \"dayNight\",\n                    value: shot.dayNight\n                }, void 0, false, {\n                    fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\projects\\\\[pr_id]\\\\[sh_id]\\\\editShot.js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {\n                    fluid: true,\n                    onChange: handleChange,\n                    name: \"interiorExterior\",\n                    defaultValue: shot.interiorExterior\n                }, void 0, false, {\n                    fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\projects\\\\[pr_id]\\\\[sh_id]\\\\editShot.js\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {\n                    fluid: true,\n                    onChange: handleChange,\n                    name: \"Characters\",\n                    value: shot.Characters\n                }, void 0, false, {\n                    fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\projects\\\\[pr_id]\\\\[sh_id]\\\\editShot.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"grey\",\n                    fluid: true,\n                    size: \"medium\",\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\projects\\\\[pr_id]\\\\[sh_id]\\\\editShot.js\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\projects\\\\[pr_id]\\\\[sh_id]\\\\editShot.js\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\claqueta-final\\\\pages\\\\users\\\\[id]\\\\projects\\\\[pr_id]\\\\[sh_id]\\\\editShot.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditShotForm, \"B8gnIwPZPKMIcpBLZibaCBGPQF8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = EditShotForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditShotForm);\nEditShotForm.getInitialProps = async (param)=>{\n    let { query: { id , pr_id , sh_id  }  } = param;\n    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"http://localhost:3000/api/users/\".concat(id, \"/projects/\").concat(pr_id, \"/\").concat(sh_id));\n    const { data  } = await res.json();\n    return {\n        shot: data\n    };\n};\nvar _c;\n$RefreshReg$(_c, \"EditShotForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdL3Byb2plY3RzL1twcl9pZF0vW3NoX2lkXS9lZGl0U2hvdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBEO0FBRWQ7QUFDTDtBQUNDO0FBRXhDLE1BQU1PLGVBQWUsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTs7SUFDNUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO1FBQy9CSyxNQUFNO1lBQ0pHLE1BQU07WUFDTkMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLGtCQUFrQjtZQUNsQkMsWUFBWTtRQUNkO0lBQ0Y7SUFDQSxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RELE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHaEIsK0NBQVFBLENBQUMsQ0FBQztJQUN0QyxNQUFNaUIsU0FBU2Qsc0RBQVNBO0lBRXhCLE1BQU0sRUFBRWUsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRSxHQUFHSCxPQUFPSSxLQUFLO0lBRXpDcEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlZLGNBQWM7WUFDaEIsSUFBSVMsT0FBT0MsSUFBSSxDQUFDUixRQUFRUyxNQUFNLEtBQUssR0FBRztnQkFDcENDO1lBQ0YsT0FBTztnQkFDTFgsZ0JBQWdCLEtBQUs7WUFDdkIsQ0FBQztRQUNILENBQUM7SUFDSCxHQUFHO1FBQUNDO0tBQU87SUFFWCxNQUFNVSxXQUFXLE9BQU9DLEtBQUtDLE1BQVE7UUFDbkMsSUFBSTtZQUNGLE1BQU1BLE9BQU0sTUFBTXpCLHlEQUFLQSxDQUNyQixtQ0FBa0RpQixPQUFmRCxJQUFHLGNBQXFCRSxPQUFURCxPQUFNLEtBQVMsT0FBTkMsUUFDM0Q7Z0JBQ0VRLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1BDLFFBQVE7b0JBQ1IsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDM0I7WUFDdkI7WUFFRixN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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdL3Byb2plY3RzL1twcl9pZF0vW3NoX2lkXS9lZGl0U2hvdC5qcz80N2RmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEVkaXRTaG90Rm9ybSA9ICh7IHNob3QgfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgIHNob3Q6IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgc2NlbmU6IFwiXCIsXHJcbiAgICAgIGRheU5pZ2h0OiBcIlwiLFxyXG4gICAgICBpbnRlcmlvckV4dGVyaW9yOiBcIlwiLFxyXG4gICAgICBDaGFyYWN0ZXJzOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgaWQsIHByX2lkLCBzaF9pZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzU3VibWl0dGluZykge1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBlZGl0U2hvdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbZXJyb3JzXSk7XHJcblxyXG4gIGNvbnN0IGVkaXRTaG90ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8ke2lkfS9wcm9qZWN0cy8ke3ByX2lkfS8ke3NoX2lkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByb3V0ZXIucHVzaChgL3VzZXJzLyR7aWR9L3Byb2plY3RzLyR7cHJfaWR9YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlcnJzID0gdmFsaWRhdGUoKTtcclxuICAgIHNldEVycm9ycyhlcnJzKTtcclxuXHJcbiAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZTogXCIsIGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgc2V0Rm9ybSh7XHJcbiAgICAgIC4uLmZvcm0sXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgIGxldCBlcnIgPSB7fTtcclxuICAgIGlmICghZm9ybS5uYW1lKSB7XHJcbiAgICAgIGVyci51c2VybmFtZSA9IFwibmFtZSBpcyByZXF1aXJlZFwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vIG5hbWVcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvcm0uc2NlbmUpIHtcclxuICAgICAgZXJyLnBhc3N3b3JkID0gXCJzY2VuZSBpcyByZXF1aXJlZFwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vIHNjZW5lXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmb3JtLmRheU5pZ2h0KSB7XHJcbiAgICAgIGVyci5wYXNzd29yZCA9IFwiZGF5IG9yIG5pZ2h0IGlzIHJlcXVpcmVkXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibm8gZGF5IG9yIG5pZ2h0XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmb3JtLmludGVyaW9yRXh0ZXJpb3IpIHtcclxuICAgICAgZXJyLnBhc3N3b3JkID0gXCJpbnQgb3IgZXh0IGlzIHJlcXVpcmVkXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibm8gaW50IG9yIGV4dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBzaXplPVwic21hbGxcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPFNlZ21lbnQgc3RhY2tlZD5cclxuICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgZmx1aWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICB2YWx1ZT17c2hvdC5uYW1lfVxyXG4gICAgICAgID48L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgbmFtZT1cInNjZW5lXCJcclxuICAgICAgICAgIHZhbHVlPXtzaG90LnNjZW5lfVxyXG4gICAgICAgID48L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgbmFtZT1cImRheU5pZ2h0XCJcclxuICAgICAgICAgIHZhbHVlPXtzaG90LmRheU5pZ2h0fVxyXG4gICAgICAgID48L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgbmFtZT1cImludGVyaW9yRXh0ZXJpb3JcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG90LmludGVyaW9yRXh0ZXJpb3J9XHJcbiAgICAgICAgPjwvRm9ybS5JbnB1dD5cclxuICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgZmx1aWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPVwiQ2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICB2YWx1ZT17c2hvdC5DaGFyYWN0ZXJzfVxyXG4gICAgICAgID48L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZXlcIiBmbHVpZCBzaXplPVwibWVkaXVtXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFNob3RGb3JtO1xyXG5cclxuRWRpdFNob3RGb3JtLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5OiB7IGlkLCBwcl9pZCwgc2hfaWQgfSB9KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8ke2lkfS9wcm9qZWN0cy8ke3ByX2lkfS8ke3NoX2lkfWBcclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7IHNob3Q6IGRhdGEgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZvcm0iLCJTZWdtZW50IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInVzZVJvdXRlciIsIkVkaXRTaG90Rm9ybSIsInNob3QiLCJmb3JtIiwic2V0Rm9ybSIsIm5hbWUiLCJzY2VuZSIsImRheU5pZ2h0IiwiaW50ZXJpb3JFeHRlcmlvciIsIkNoYXJhY3RlcnMiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJyb3V0ZXIiLCJpZCIsInByX2lkIiwic2hfaWQiLCJxdWVyeSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJlZGl0U2hvdCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVycnMiLCJ2YWxpZGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZXJyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInNpemUiLCJvblN1Ym1pdCIsInN0YWNrZWQiLCJJbnB1dCIsImZsdWlkIiwib25DaGFuZ2UiLCJkZWZhdWx0VmFsdWUiLCJjb2xvciIsInR5cGUiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id]/projects/[pr_id]/[sh_id]/editShot.js\n"));

/***/ })

});