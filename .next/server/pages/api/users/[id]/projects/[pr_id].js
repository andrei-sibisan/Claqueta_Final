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
exports.id = "pages/api/users/[id]/projects/[pr_id]";
exports.ids = ["pages/api/users/[id]/projects/[pr_id]"];
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

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ShotSchema = new mongoose.Schema({\n    name: String,\n    scene: String,\n    dayNight: String,\n    interiorExterior: String,\n    Characters: String\n});\nconst ProjectSchema = new mongoose.Schema({\n    name: String,\n    shotlist: [\n        ShotSchema\n    ]\n});\nconst UserSchema = new mongoose.Schema({\n    userName: {\n        type: String,\n        required: [\n            true,\n            \"Please add a username\"\n        ],\n        unique: true,\n        trim: true,\n        maxlength: [\n            24,\n            \"Username must have a maximum of 24 characters\"\n        ]\n    },\n    password: {\n        type: String,\n        required: true,\n        minlength: [\n            8,\n            \"Password must have a minimum of 8 characters\"\n        ]\n    },\n    projects: [\n        ProjectSchema\n    ]\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRW5DLE1BQU1DLGFBQWEsSUFBSUYsU0FBU0csTUFBTSxDQUFDO0lBQ3JDQyxNQUFNQztJQUNOQyxPQUFPRDtJQUNQRSxVQUFVRjtJQUNWRyxrQkFBa0JIO0lBQ2xCSSxZQUFZSjtBQUNkO0FBRUEsTUFBTUssZ0JBQWdCLElBQUlWLFNBQVNHLE1BQU0sQ0FBQztJQUN4Q0MsTUFBTUM7SUFFTk0sVUFBVTtRQUFDVDtLQUFXO0FBQ3hCO0FBRUEsTUFBTVUsYUFBYSxJQUFJWixTQUFTRyxNQUFNLENBQUM7SUFDckNVLFVBQVU7UUFDUkMsTUFBTVQ7UUFDTlUsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUF3QjtRQUN6Q0MsUUFBUSxJQUFJO1FBQ1pDLE1BQU0sSUFBSTtRQUNWQyxXQUFXO1lBQUM7WUFBSTtTQUFnRDtJQUNsRTtJQUNBQyxVQUFVO1FBQ1JMLE1BQU1UO1FBQ05VLFVBQVUsSUFBSTtRQUNkSyxXQUFXO1lBQUM7WUFBRztTQUErQztJQUNoRTtJQUNBQyxVQUFVO1FBQUNYO0tBQWM7QUFDM0I7QUFFQVksT0FBT0MsT0FBTyxHQUFHdkIsU0FBU3dCLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJekIsU0FBUzBCLEtBQUssQ0FBQyxRQUFRZCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXF1ZXRhLWZpbmFsLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcbmNvbnN0IFNob3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBuYW1lOiBTdHJpbmcsXHJcbiAgc2NlbmU6IFN0cmluZyxcclxuICBkYXlOaWdodDogU3RyaW5nLFxyXG4gIGludGVyaW9yRXh0ZXJpb3I6IFN0cmluZyxcclxuICBDaGFyYWN0ZXJzOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgUHJvamVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IFN0cmluZyxcclxuXHJcbiAgc2hvdGxpc3Q6IFtTaG90U2NoZW1hXSxcclxufSk7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdXNlck5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgYWRkIGEgdXNlcm5hbWVcIl0sXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gICAgbWF4bGVuZ3RoOiBbMjQsIFwiVXNlcm5hbWUgbXVzdCBoYXZlIGEgbWF4aW11bSBvZiAyNCBjaGFyYWN0ZXJzXCJdLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbWlubGVuZ3RoOiBbOCwgXCJQYXNzd29yZCBtdXN0IGhhdmUgYSBtaW5pbXVtIG9mIDggY2hhcmFjdGVyc1wiXSxcclxuICB9LFxyXG4gIHByb2plY3RzOiBbUHJvamVjdFNjaGVtYV0sXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJTaG90U2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsIlN0cmluZyIsInNjZW5lIiwiZGF5TmlnaHQiLCJpbnRlcmlvckV4dGVyaW9yIiwiQ2hhcmFjdGVycyIsIlByb2plY3RTY2hlbWEiLCJzaG90bGlzdCIsIlVzZXJTY2hlbWEiLCJ1c2VyTmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsInVuaXF1ZSIsInRyaW0iLCJtYXhsZW5ndGgiLCJwYXNzd29yZCIsIm1pbmxlbmd0aCIsInByb2plY3RzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/[id]/projects/[pr_id]/index.js":
/*!********************************************************!*\
  !*** ./pages/api/users/[id]/projects/[pr_id]/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _isAuthenticated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../isAuthenticated */ \"(api)/./isAuthenticated.js\");\n\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nlet auth = false;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method , query: { id , pr_id  }  } = req;\n    auth = (0,_isAuthenticated__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req);\n    if (auth) {\n        switch(method){\n            case \"GET\":\n                try {\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(id);\n                    if (!user) {\n                        return res.status(400).json({\n                            success: false,\n                            message: \"no user\"\n                        });\n                    }\n                    // console.log(user.projects[0]._id.toString());\n                    const currentProject = user.projects.find((proj)=>proj._id.toString() === pr_id);\n                    // console.log(currentProject);\n                    res.status(200).json({\n                        success: true,\n                        data: currentProject.shotlist\n                    });\n                } catch (error) {\n                    res.status(400).json({\n                        success: false,\n                        message: \"in catch\",\n                        error\n                    });\n                }\n                break;\n            case \"POST\":\n                try {\n                    const user1 = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(id);\n                    if (!user1) {\n                        return res.status(400).json({\n                            success: false,\n                            message: \"no projects array\"\n                        });\n                    }\n                    const currentProject1 = user1.projects.find((proj)=>proj._id.toString() === pr_id);\n                    // console.log(currentProject);\n                    // console.log(req.body);\n                    currentProject1.shotlist.push(req.body);\n                    user1.save();\n                    res.status(200).json({\n                        success: true,\n                        message: currentProject1.shotlist\n                    });\n                } catch (error1) {\n                    res.status(400).json({\n                        success: false,\n                        error: error1\n                    });\n                }\n                break;\n            case \"DELETE\":\n                try {\n                    const user2 = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(id);\n                    if (!user2.projects) {\n                        return res.status(400).json({\n                            success: false,\n                            message: \"no projects array\"\n                        });\n                    }\n                    const currentProject2 = user2.projects.find((proj)=>proj._id.toString() === pr_id);\n                    // console.log(currentProject.shotlist);\n                    let currentShot = currentProject2.shotlist.find((shot)=>{\n                        console.log(\"in find shot\");\n                        console.log(\"in find shot\");\n                        return shot._id.toString() === req.body._id;\n                    });\n                    const index = currentProject2.shotlist.indexOf(currentShot);\n                    console.log(\"current shot is: \", currentShot);\n                    console.log(\"current shot index is: \", index);\n                    // console.log(\"request looks like: \", req.body._id);\n                    currentProject2.shotlist.splice(index, 1);\n                    user2.save();\n                    res.status(200).json({\n                        success: true,\n                        data: user2\n                    });\n                } catch (error2) {\n                    res.status(400).json({\n                        success: false\n                    });\n                }\n                break;\n            case \"PUT\":\n                try {\n                    const user3 = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(id);\n                    if (!user3.projects) {\n                        return res.status(400).json({\n                            success: false,\n                            message: \"no projects array\"\n                        });\n                    }\n                } catch (error3) {}\n                break;\n        }\n    } else {\n        res.status(400).json({\n            success: false,\n            message: \"not authenticated\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvW2lkXS9wcm9qZWN0cy9bcHJfaWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBEO0FBQ1Q7QUFFZTtBQUVoRUEsNERBQVNBO0FBRVQsSUFBSUcsT0FBTyxLQUFLO0FBRWhCLGlFQUFlLE9BQU9DLEtBQUtDLE1BQVE7SUFDakMsTUFBTSxFQUNKQyxPQUFNLEVBQ05DLE9BQU8sRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUUsR0FDckIsR0FBR0w7SUFDSkQsT0FBT0QsNERBQWVBLENBQUNFO0lBRXZCLElBQUlELE1BQU07UUFDUixPQUFRRztZQUNOLEtBQUs7Z0JBQ0gsSUFBSTtvQkFDRixNQUFNSSxPQUFPLE1BQU1ULDREQUFhLENBQUNPO29CQUNqQyxJQUFJLENBQUNFLE1BQU07d0JBQ1QsT0FBT0wsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzs0QkFBRUMsU0FBUyxLQUFLOzRCQUFFQyxTQUFTO3dCQUFVO29CQUNuRSxDQUFDO29CQUNELGdEQUFnRDtvQkFDaEQsTUFBTUMsaUJBQWlCTixLQUFLTyxRQUFRLENBQUNDLElBQUksQ0FDdkMsQ0FBQ0MsT0FBU0EsS0FBS0MsR0FBRyxDQUFDQyxRQUFRLE9BQU9aO29CQUVwQywrQkFBK0I7b0JBQy9CSixJQUNHTyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO3dCQUFFQyxTQUFTLElBQUk7d0JBQUVRLE1BQU1OLGVBQWVPLFFBQVE7b0JBQUM7Z0JBQ3pELEVBQUUsT0FBT0MsT0FBTztvQkFDZG5CLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVDLFNBQVMsS0FBSzt3QkFBRUMsU0FBUzt3QkFBWVM7b0JBQU07Z0JBQ3BFO2dCQUNBLEtBQU07WUFFUixLQUFLO2dCQUNILElBQUk7b0JBQ0YsTUFBTWQsUUFBTyxNQUFNVCw0REFBYSxDQUFDTztvQkFDakMsSUFBSSxDQUFDRSxPQUFNO3dCQUNULE9BQU9MLElBQ0pPLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7NEJBQUVDLFNBQVMsS0FBSzs0QkFBRUMsU0FBUzt3QkFBb0I7b0JBQ3pELENBQUM7b0JBRUQsTUFBTUMsa0JBQWlCTixNQUFLTyxRQUFRLENBQUNDLElBQUksQ0FDdkMsQ0FBQ0MsT0FBU0EsS0FBS0MsR0FBRyxDQUFDQyxRQUFRLE9BQU9aO29CQUVwQywrQkFBK0I7b0JBQy9CLHlCQUF5QjtvQkFDekJPLGdCQUFlTyxRQUFRLENBQUNFLElBQUksQ0FBQ3JCLElBQUlzQixJQUFJO29CQUNyQ2hCLE1BQUtpQixJQUFJO29CQUNUdEIsSUFDR08sTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQzt3QkFBRUMsU0FBUyxJQUFJO3dCQUFFQyxTQUFTQyxnQkFBZU8sUUFBUTtvQkFBQztnQkFDNUQsRUFBRSxPQUFPQyxRQUFPO29CQUNkbkIsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzt3QkFBRUMsU0FBUyxLQUFLO3dCQUFFVSxPQUFPQTtvQkFBTTtnQkFDdEQ7Z0JBQ0EsS0FBTTtZQUNSLEtBQUs7Z0JBQ0gsSUFBSTtvQkFDRixNQUFNZCxRQUFPLE1BQU1ULDREQUFhLENBQUNPO29CQUNqQyxJQUFJLENBQUNFLE1BQUtPLFFBQVEsRUFBRTt3QkFDbEIsT0FBT1osSUFDSk8sTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQzs0QkFBRUMsU0FBUyxLQUFLOzRCQUFFQyxTQUFTO3dCQUFvQjtvQkFDekQsQ0FBQztvQkFFRCxNQUFNQyxrQkFBaUJOLE1BQUtPLFFBQVEsQ0FBQ0MsSUFBSSxDQUN2QyxDQUFDQyxPQUFTQSxLQUFLQyxHQUFHLENBQUNDLFFBQVEsT0FBT1o7b0JBRXBDLHdDQUF3QztvQkFDeEMsSUFBSW1CLGNBQWNaLGdCQUFlTyxRQUFRLENBQUNMLElBQUksQ0FBQyxDQUFDVyxPQUFTO3dCQUN2REMsUUFBUUMsR0FBRyxDQUFDO3dCQUNaRCxRQUFRQyxHQUFHLENBQUM7d0JBQ1osT0FBT0YsS0FBS1QsR0FBRyxDQUFDQyxRQUFRLE9BQU9qQixJQUFJc0IsSUFBSSxDQUFDTixHQUFHO29CQUM3QztvQkFDQSxNQUFNWSxRQUFRaEIsZ0JBQWVPLFFBQVEsQ0FBQ1UsT0FBTyxDQUFDTDtvQkFDOUNFLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJIO29CQUNqQ0UsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQkM7b0JBQ3ZDLHFEQUFxRDtvQkFDckRoQixnQkFBZU8sUUFBUSxDQUFDVyxNQUFNLENBQUNGLE9BQU87b0JBQ3RDdEIsTUFBS2lCLElBQUk7b0JBQ1R0QixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxTQUFTLElBQUk7d0JBQUVRLE1BQU1aO29CQUFLO2dCQUNuRCxFQUFFLE9BQU9jLFFBQU87b0JBQ2RuQixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxTQUFTLEtBQUs7b0JBQUM7Z0JBQ3hDO2dCQUNBLEtBQU07WUFDUixLQUFLO2dCQUNILElBQUk7b0JBQ0YsTUFBTUosUUFBTyxNQUFNVCw0REFBYSxDQUFDTztvQkFDakMsSUFBSSxDQUFDRSxNQUFLTyxRQUFRLEVBQUU7d0JBQ2xCLE9BQU9aLElBQ0pPLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7NEJBQUVDLFNBQVMsS0FBSzs0QkFBRUMsU0FBUzt3QkFBb0I7b0JBQ3pELENBQUM7Z0JBQ0gsRUFBRSxPQUFPUyxRQUFPLENBQUM7Z0JBQ2pCLEtBQU07UUFDVjtJQUNGLE9BQU87UUFDTG5CLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1lBQUVDLFNBQVM7UUFBb0I7SUFDdEUsQ0FBQztBQUNILEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFxdWV0YS1maW5hbC8uL3BhZ2VzL2FwaS91c2Vycy9baWRdL3Byb2plY3RzL1twcl9pZF0vaW5kZXguanM/ZThjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL21vZGVscy9Vc2VyXCI7XHJcblxyXG5pbXBvcnQgaXNBdXRoZW50aWNhdGVkIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9pc0F1dGhlbnRpY2F0ZWRcIjtcclxuXHJcbmRiQ29ubmVjdCgpO1xyXG5cclxubGV0IGF1dGggPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG1ldGhvZCxcclxuICAgIHF1ZXJ5OiB7IGlkLCBwcl9pZCB9LFxyXG4gIH0gPSByZXE7XHJcbiAgYXV0aCA9IGlzQXV0aGVudGljYXRlZChyZXEpO1xyXG5cclxuICBpZiAoYXV0aCkge1xyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChpZCk7XHJcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwibm8gdXNlclwiIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codXNlci5wcm9qZWN0c1swXS5faWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHVzZXIucHJvamVjdHMuZmluZChcclxuICAgICAgICAgICAgKHByb2opID0+IHByb2ouX2lkLnRvU3RyaW5nKCkgPT09IHByX2lkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgICAgcmVzXHJcbiAgICAgICAgICAgIC5zdGF0dXMoMjAwKVxyXG4gICAgICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGN1cnJlbnRQcm9qZWN0LnNob3RsaXN0IH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcImluIGNhdGNoXCIsIGVycm9yIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGlkKTtcclxuICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXHJcbiAgICAgICAgICAgICAgLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJubyBwcm9qZWN0cyBhcnJheVwiIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdXNlci5wcm9qZWN0cy5maW5kKFxyXG4gICAgICAgICAgICAocHJvaikgPT4gcHJvai5faWQudG9TdHJpbmcoKSA9PT0gcHJfaWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgICAgICAgICBjdXJyZW50UHJvamVjdC5zaG90bGlzdC5wdXNoKHJlcS5ib2R5KTtcclxuICAgICAgICAgIHVzZXIuc2F2ZSgpO1xyXG4gICAgICAgICAgcmVzXHJcbiAgICAgICAgICAgIC5zdGF0dXMoMjAwKVxyXG4gICAgICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGN1cnJlbnRQcm9qZWN0LnNob3RsaXN0IH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGlkKTtcclxuICAgICAgICAgIGlmICghdXNlci5wcm9qZWN0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXHJcbiAgICAgICAgICAgICAgLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJubyBwcm9qZWN0cyBhcnJheVwiIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdXNlci5wcm9qZWN0cy5maW5kKFxyXG4gICAgICAgICAgICAocHJvaikgPT4gcHJvai5faWQudG9TdHJpbmcoKSA9PT0gcHJfaWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC5zaG90bGlzdCk7XHJcbiAgICAgICAgICBsZXQgY3VycmVudFNob3QgPSBjdXJyZW50UHJvamVjdC5zaG90bGlzdC5maW5kKChzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZmluZCBzaG90XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluIGZpbmQgc2hvdFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3QuX2lkLnRvU3RyaW5nKCkgPT09IHJlcS5ib2R5Ll9pZDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50UHJvamVjdC5zaG90bGlzdC5pbmRleE9mKGN1cnJlbnRTaG90KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBzaG90IGlzOiBcIiwgY3VycmVudFNob3QpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHNob3QgaW5kZXggaXM6IFwiLCBpbmRleCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlcXVlc3QgbG9va3MgbGlrZTogXCIsIHJlcS5ib2R5Ll9pZCk7XHJcbiAgICAgICAgICBjdXJyZW50UHJvamVjdC5zaG90bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgdXNlci5zYXZlKCk7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGlkKTtcclxuICAgICAgICAgIGlmICghdXNlci5wcm9qZWN0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXHJcbiAgICAgICAgICAgICAgLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJubyBwcm9qZWN0cyBhcnJheVwiIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIm5vdCBhdXRoZW50aWNhdGVkXCIgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiVXNlciIsImlzQXV0aGVudGljYXRlZCIsImF1dGgiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImlkIiwicHJfaWQiLCJ1c2VyIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjdXJyZW50UHJvamVjdCIsInByb2plY3RzIiwiZmluZCIsInByb2oiLCJfaWQiLCJ0b1N0cmluZyIsImRhdGEiLCJzaG90bGlzdCIsImVycm9yIiwicHVzaCIsImJvZHkiLCJzYXZlIiwiY3VycmVudFNob3QiLCJzaG90IiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/[id]/projects/[pr_id]/index.js\n");

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
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/[id]/projects/[pr_id]/index.js"));
module.exports = __webpack_exports__;

})();