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
exports.id = "pages/api/users/[id]";
exports.ids = ["pages/api/users/[id]"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./isAuthenticated.js":
/*!****************************!*\
  !*** ./isAuthenticated.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req)=>{\n    (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.auth, \"52d717db-7fbe-4581-85a7-01a4e30686a9\", function(err, decoded) {\n        if (!err && decoded) {\n            return true;\n        }\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pc0F1dGhlbnRpY2F0ZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLGlFQUFlLE9BQU9DLE1BQVE7SUFDNUJELG9EQUFNQSxDQUFDQyxJQUFJQyxPQUFPLENBQUNDLElBQUksRUFBRUMsc0NBQWdCLEVBQUUsU0FBVUcsR0FBRyxFQUFFQyxPQUFPLEVBQUU7UUFDakUsSUFBSSxDQUFDRCxPQUFPQyxTQUFTO1lBQ25CLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFxdWV0YS1maW5hbC8uL2lzQXV0aGVudGljYXRlZC5qcz80MDAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlcmlmeSB9IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEpID0+IHtcclxuICB2ZXJpZnkocmVxLmNvb2tpZXMuYXV0aCwgcHJvY2Vzcy5lbnYuR1VJRCwgZnVuY3Rpb24gKGVyciwgZGVjb2RlZCkge1xyXG4gICAgaWYgKCFlcnIgJiYgZGVjb2RlZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIl0sIm5hbWVzIjpbInZlcmlmeSIsInJlcSIsImNvb2tpZXMiLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIkdVSUQiLCJlcnIiLCJkZWNvZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./isAuthenticated.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ShotSchema = new mongoose.Schema({\n    name: String\n});\nconst ProjectSchema = new mongoose.Schema({\n    name: String,\n    shotlist: [\n        ShotSchema\n    ]\n});\nconst UserSchema = new mongoose.Schema({\n    userName: {\n        type: String,\n        required: [\n            true,\n            \"Please add a username\"\n        ],\n        unique: true,\n        trim: true,\n        maxlength: [\n            24,\n            \"Username must have a maximum of 24 characters\"\n        ]\n    },\n    password: {\n        type: String,\n        required: true,\n        minlength: [\n            8,\n            \"Password must have a minimum of 8 characters\"\n        ]\n    },\n    projects: [\n        ProjectSchema\n    ]\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRW5DLE1BQU1DLGFBQWEsSUFBSUYsU0FBU0csTUFBTSxDQUFDO0lBQ3JDQyxNQUFNQztBQUNSO0FBRUEsTUFBTUMsZ0JBQWdCLElBQUlOLFNBQVNHLE1BQU0sQ0FBQztJQUN4Q0MsTUFBTUM7SUFDTkUsVUFBVTtRQUFDTDtLQUFXO0FBQ3hCO0FBRUEsTUFBTU0sYUFBYSxJQUFJUixTQUFTRyxNQUFNLENBQUM7SUFDckNNLFVBQVU7UUFDUkMsTUFBTUw7UUFDTk0sVUFBVTtZQUFDLElBQUk7WUFBRTtTQUF3QjtRQUN6Q0MsUUFBUSxJQUFJO1FBQ1pDLE1BQU0sSUFBSTtRQUNWQyxXQUFXO1lBQUM7WUFBSTtTQUFnRDtJQUNsRTtJQUNBQyxVQUFVO1FBQ1JMLE1BQU1MO1FBQ05NLFVBQVUsSUFBSTtRQUNkSyxXQUFXO1lBQUM7WUFBRztTQUErQztJQUNoRTtJQUNBQyxVQUFVO1FBQUNYO0tBQWM7QUFDM0I7QUFFQVksT0FBT0MsT0FBTyxHQUFHbkIsU0FBU29CLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJckIsU0FBU3NCLEtBQUssQ0FBQyxRQUFRZCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXF1ZXRhLWZpbmFsLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcbmNvbnN0IFNob3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBuYW1lOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgUHJvamVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IFN0cmluZyxcclxuICBzaG90bGlzdDogW1Nob3RTY2hlbWFdLFxyXG59KTtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VyTmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBhZGQgYSB1c2VybmFtZVwiXSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHRyaW06IHRydWUsXHJcbiAgICBtYXhsZW5ndGg6IFsyNCwgXCJVc2VybmFtZSBtdXN0IGhhdmUgYSBtYXhpbXVtIG9mIDI0IGNoYXJhY3RlcnNcIl0sXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBtaW5sZW5ndGg6IFs4LCBcIlBhc3N3b3JkIG11c3QgaGF2ZSBhIG1pbmltdW0gb2YgOCBjaGFyYWN0ZXJzXCJdLFxyXG4gIH0sXHJcbiAgcHJvamVjdHM6IFtQcm9qZWN0U2NoZW1hXSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNob3RTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiUHJvamVjdFNjaGVtYSIsInNob3RsaXN0IiwiVXNlclNjaGVtYSIsInVzZXJOYW1lIiwidHlwZSIsInJlcXVpcmVkIiwidW5pcXVlIiwidHJpbSIsIm1heGxlbmd0aCIsInBhc3N3b3JkIiwibWlubGVuZ3RoIiwicHJvamVjdHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/[id]/index.js":
/*!***************************************!*\
  !*** ./pages/api/users/[id]/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _isAuthenticated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../isAuthenticated */ \"(api)/./isAuthenticated.js\");\n\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nlet auth = false;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method , query: { id  }  } = req;\n    auth = (0,_isAuthenticated__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req);\n    if (auth) {\n        switch(method){\n            case \"GET\":\n                try {\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(id);\n                    if (!user) {\n                        return res.status(400).json({\n                            success: false\n                        });\n                    }\n                    console.log(user.projects);\n                    console.log(user.userName);\n                    res.status(200).json({\n                        success: true,\n                        data: user\n                    });\n                } catch (error) {\n                    res.status(400).json({\n                        success: false\n                    });\n                }\n                break;\n            case \"PUT\":\n                try {\n                    const user1 = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(id);\n                    if (!user1.projects) {\n                        return res.status(400).json({\n                            success: false,\n                            message: \"no projects array\"\n                        });\n                    }\n                    user1.projects.push(req.body.project);\n                    user1.save();\n                    res.status(201).json({\n                        success: true,\n                        data: user1\n                    });\n                } catch (error1) {\n                    res.status(400).json({\n                        success: false,\n                        error: error1\n                    });\n                }\n            case \"DELETE\":\n                try {\n                    const user2 = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(id);\n                    const index = user2.projects.map((object)=>object.name).indexOf(\"test\");\n                    console.log(index);\n                    user2.projects.splice(index, 1);\n                    user2.save();\n                    res.status(200).json({\n                        success: true,\n                        data: user2\n                    });\n                } catch (error2) {\n                    res.status(400).json({\n                        success: false\n                    });\n                }\n        }\n    } else {\n        res.status(400).json({\n            success: false,\n            message: \"not authenticated\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvW2lkXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvRDtBQUNUO0FBRWU7QUFFMURBLDREQUFTQTtBQUVULElBQUlHLE9BQU8sS0FBSztBQUVoQixpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2pDLE1BQU0sRUFDSkMsT0FBTSxFQUNOQyxPQUFPLEVBQUVDLEdBQUUsRUFBRSxHQUNkLEdBQUdKO0lBQ0pELE9BQU9ELDREQUFlQSxDQUFDRTtJQUV2QixJQUFJRCxNQUFNO1FBQ1IsT0FBUUc7WUFDTixLQUFLO2dCQUNILElBQUk7b0JBQ0YsTUFBTUcsT0FBTyxNQUFNUiw0REFBYSxDQUFDTztvQkFDakMsSUFBSSxDQUFDQyxNQUFNO3dCQUNULE9BQU9KLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7NEJBQUVDLFNBQVMsS0FBSzt3QkFBQztvQkFDL0MsQ0FBQztvQkFDREMsUUFBUUMsR0FBRyxDQUFDTixLQUFLTyxRQUFRO29CQUN6QkYsUUFBUUMsR0FBRyxDQUFDTixLQUFLUSxRQUFRO29CQUN6QlosSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzt3QkFBRUMsU0FBUyxJQUFJO3dCQUFFSyxNQUFNVDtvQkFBSztnQkFDbkQsRUFBRSxPQUFPVSxPQUFPO29CQUNkZCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxTQUFTLEtBQUs7b0JBQUM7Z0JBQ3hDO2dCQUNBLEtBQU07WUFFUixLQUFLO2dCQUNILElBQUk7b0JBQ0YsTUFBTUosUUFBTyxNQUFNUiw0REFBYSxDQUFDTztvQkFDakMsSUFBSSxDQUFDQyxNQUFLTyxRQUFRLEVBQUU7d0JBQ2xCLE9BQU9YLElBQ0pNLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7NEJBQUVDLFNBQVMsS0FBSzs0QkFBRU8sU0FBUzt3QkFBb0I7b0JBQ3pELENBQUM7b0JBRURYLE1BQUtPLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDakIsSUFBSWtCLElBQUksQ0FBQ0MsT0FBTztvQkFDbkNkLE1BQUtlLElBQUk7b0JBQ1RuQixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxTQUFTLElBQUk7d0JBQUVLLE1BQU1UO29CQUFLO2dCQUNuRCxFQUFFLE9BQU9VLFFBQU87b0JBQ2RkLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVDLFNBQVMsS0FBSzt3QkFBRU0sT0FBT0E7b0JBQU07Z0JBQ3REO1lBRUYsS0FBSztnQkFDSCxJQUFJO29CQUNGLE1BQU1WLFFBQU8sTUFBTVIsNERBQWEsQ0FBQ087b0JBQ2pDLE1BQU1pQixRQUFRaEIsTUFBS08sUUFBUSxDQUN4QlUsR0FBRyxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLElBQUksRUFDM0JDLE9BQU8sQ0FBQztvQkFDWGYsUUFBUUMsR0FBRyxDQUFDVTtvQkFDWmhCLE1BQUtPLFFBQVEsQ0FBQ2MsTUFBTSxDQUFDTCxPQUFPO29CQUM1QmhCLE1BQUtlLElBQUk7b0JBQ1RuQixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxTQUFTLElBQUk7d0JBQUVLLE1BQU1UO29CQUFLO2dCQUNuRCxFQUFFLE9BQU9VLFFBQU87b0JBQ2RkLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVDLFNBQVMsS0FBSztvQkFBQztnQkFDeEM7UUFDSjtJQUNGLE9BQU87UUFDTFIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTLEtBQUs7WUFBRU8sU0FBUztRQUFvQjtJQUN0RSxDQUFDO0FBQ0gsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXF1ZXRhLWZpbmFsLy4vcGFnZXMvYXBpL3VzZXJzL1tpZF0vaW5kZXguanM/MTRiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9Vc2VyXCI7XHJcblxyXG5pbXBvcnQgaXNBdXRoZW50aWNhdGVkIGZyb20gXCIuLi8uLi8uLi8uLi9pc0F1dGhlbnRpY2F0ZWRcIjtcclxuXHJcbmRiQ29ubmVjdCgpO1xyXG5cclxubGV0IGF1dGggPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG1ldGhvZCxcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgfSA9IHJlcTtcclxuICBhdXRoID0gaXNBdXRoZW50aWNhdGVkKHJlcSk7XHJcblxyXG4gIGlmIChhdXRoKSB7XHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGlkKTtcclxuICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIucHJvamVjdHMpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codXNlci51c2VyTmFtZSk7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChpZCk7XHJcbiAgICAgICAgICBpZiAoIXVzZXIucHJvamVjdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAgIC5zdGF0dXMoNDAwKVxyXG4gICAgICAgICAgICAgIC5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwibm8gcHJvamVjdHMgYXJyYXlcIiB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1c2VyLnByb2plY3RzLnB1c2gocmVxLmJvZHkucHJvamVjdCk7XHJcbiAgICAgICAgICB1c2VyLnNhdmUoKTtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlciB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoaWQpO1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSB1c2VyLnByb2plY3RzXHJcbiAgICAgICAgICAgIC5tYXAoKG9iamVjdCkgPT4gb2JqZWN0Lm5hbWUpXHJcbiAgICAgICAgICAgIC5pbmRleE9mKFwidGVzdFwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgIHVzZXIucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIHVzZXIuc2F2ZSgpO1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1c2VyIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJub3QgYXV0aGVudGljYXRlZFwiIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRoIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsInVzZXIiLCJmaW5kQnlJZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInByb2plY3RzIiwidXNlck5hbWUiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwicHVzaCIsImJvZHkiLCJwcm9qZWN0Iiwic2F2ZSIsImluZGV4IiwibWFwIiwib2JqZWN0IiwibmFtZSIsImluZGV4T2YiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/[id]/index.js\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://andreisibisan:92uiwThMWn0edAkC@claquetafinal.y6uleie.mongodb.net/?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n    console.log(connection.isConnected);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsQ0FBQztBQUVwQixlQUFlQyxZQUFZO0lBQ3pCLElBQUlELFdBQVdFLFdBQVcsRUFBRTtRQUMxQjtJQUNGLENBQUM7SUFFRCxNQUFNQyxLQUFLLE1BQU1KLHVEQUFnQixDQUFDTSw2R0FBcUIsRUFBRTtRQUN2REcsaUJBQWlCLElBQUk7UUFDckJDLG9CQUFvQixJQUFJO0lBQzFCO0lBRUFULFdBQVdFLFdBQVcsR0FBR0MsR0FBR08sV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVTtJQUVyREMsUUFBUUMsR0FBRyxDQUFDYixXQUFXRSxXQUFXO0FBQ3BDO0FBRUEsaUVBQWVELFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFxdWV0YS1maW5hbC8uL3V0aWxzL2RiQ29ubmVjdC5qcz9jM2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuXHJcbiAgY29uc29sZS5sb2coY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZGIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/[id]/index.js"));
module.exports = __webpack_exports__;

})();