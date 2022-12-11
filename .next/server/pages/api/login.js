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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

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

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ShotSchema = new mongoose.Schema({\n    name: String\n});\nconst ProjectSchema = new mongoose.Schema({\n    name: String,\n    shotlist: [\n        ShotSchema\n    ]\n});\nconst UserSchema = new mongoose.Schema({\n    userName: {\n        type: String,\n        required: [\n            true,\n            \"Please add a username\"\n        ],\n        unique: true,\n        trim: true,\n        maxlength: [\n            24,\n            \"Username must have a maximum of 24 characters\"\n        ]\n    },\n    password: {\n        type: String,\n        required: true,\n        minlength: [\n            8,\n            \"Password must have a minimum of 8 characters\"\n        ]\n    },\n    projects: [\n        ProjectSchema\n    ]\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRW5DLE1BQU1DLGFBQWEsSUFBSUYsU0FBU0csTUFBTSxDQUFDO0lBQ3JDQyxNQUFNQztBQUNSO0FBRUEsTUFBTUMsZ0JBQWdCLElBQUlOLFNBQVNHLE1BQU0sQ0FBQztJQUN4Q0MsTUFBTUM7SUFDTkUsVUFBVTtRQUFDTDtLQUFXO0FBQ3hCO0FBRUEsTUFBTU0sYUFBYSxJQUFJUixTQUFTRyxNQUFNLENBQUM7SUFDckNNLFVBQVU7UUFDUkMsTUFBTUw7UUFDTk0sVUFBVTtZQUFDLElBQUk7WUFBRTtTQUF3QjtRQUN6Q0MsUUFBUSxJQUFJO1FBQ1pDLE1BQU0sSUFBSTtRQUNWQyxXQUFXO1lBQUM7WUFBSTtTQUFnRDtJQUNsRTtJQUNBQyxVQUFVO1FBQ1JMLE1BQU1MO1FBQ05NLFVBQVUsSUFBSTtRQUNkSyxXQUFXO1lBQUM7WUFBRztTQUErQztJQUNoRTtJQUNBQyxVQUFVO1FBQUNYO0tBQWM7QUFDM0I7QUFFQVksT0FBT0MsT0FBTyxHQUFHbkIsU0FBU29CLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJckIsU0FBU3NCLEtBQUssQ0FBQyxRQUFRZCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXF1ZXRhLWZpbmFsLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcbmNvbnN0IFNob3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBuYW1lOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgUHJvamVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IFN0cmluZyxcclxuICBzaG90bGlzdDogW1Nob3RTY2hlbWFdLFxyXG59KTtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VyTmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBhZGQgYSB1c2VybmFtZVwiXSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHRyaW06IHRydWUsXHJcbiAgICBtYXhsZW5ndGg6IFsyNCwgXCJVc2VybmFtZSBtdXN0IGhhdmUgYSBtYXhpbXVtIG9mIDI0IGNoYXJhY3RlcnNcIl0sXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBtaW5sZW5ndGg6IFs4LCBcIlBhc3N3b3JkIG11c3QgaGF2ZSBhIG1pbmltdW0gb2YgOCBjaGFyYWN0ZXJzXCJdLFxyXG4gIH0sXHJcbiAgcHJvamVjdHM6IFtQcm9qZWN0U2NoZW1hXSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNob3RTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiUHJvamVjdFNjaGVtYSIsInNob3RsaXN0IiwiVXNlclNjaGVtYSIsInVzZXJOYW1lIiwidHlwZSIsInJlcXVpcmVkIiwidW5pcXVlIiwidHJpbSIsIm1heGxlbmd0aCIsInBhc3N3b3JkIiwibWlubGVuZ3RoIiwicHJvamVjdHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method  } = req;\n    switch(method){\n        case \"POST\":\n            try {\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                    userName: req.body.username\n                });\n                (0,bcrypt__WEBPACK_IMPORTED_MODULE_2__.compare)(req.body.password, user.password, function(err, result) {\n                    if (!err && result) {\n                        const claims = {\n                            sub: user._id\n                        };\n                        const jwt = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__.sign)(claims, \"52d717db-7fbe-4581-85a7-01a4e30686a9\", {\n                            expiresIn: \"1h\"\n                        });\n                        res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_4___default().serialize(\"auth\", jwt, {\n                            httpOnly: true,\n                            secure: \"development\" !== \"development\",\n                            sameSite: \"strict\",\n                            maxAge: 3600,\n                            path: \"/\"\n                        }));\n                        res.status(201).json({\n                            success: true,\n                            data: user,\n                            authToken: jwt\n                        });\n                    } else {\n                        res.status(400).json({\n                            success: false\n                        });\n                        console.log(\"failed in else statement\");\n                    }\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false,\n                    error: error\n                });\n                console.log(\"failed in catch error\");\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNUO0FBQ0o7QUFDRztBQUNSO0FBRTVCQSw0REFBU0E7QUFFVCxpRUFBZSxPQUFPSyxLQUFLQyxNQUFRO0lBQ2pDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBRW5CLE9BQVFFO1FBQ04sS0FBSztZQUNILElBQUk7Z0JBQ0YsTUFBTUMsT0FBTyxNQUFNUCwyREFBWSxDQUFDO29CQUM5QlMsVUFBVUwsSUFBSU0sSUFBSSxDQUFDQyxRQUFRO2dCQUM3QjtnQkFFQVYsK0NBQU9BLENBQUNHLElBQUlNLElBQUksQ0FBQ0UsUUFBUSxFQUFFTCxLQUFLSyxRQUFRLEVBQUUsU0FBVUMsR0FBRyxFQUFFQyxNQUFNLEVBQUU7b0JBQy9ELElBQUksQ0FBQ0QsT0FBT0MsUUFBUTt3QkFDbEIsTUFBTUMsU0FBUzs0QkFBRUMsS0FBS1QsS0FBS1UsR0FBRzt3QkFBQzt3QkFDL0IsTUFBTUMsTUFBTWhCLGtEQUFJQSxDQUFDYSxRQUFRSSxzQ0FBZ0IsRUFBRTs0QkFBRUcsV0FBVzt3QkFBSzt3QkFDN0RqQixJQUFJa0IsU0FBUyxDQUNYLGNBQ0FwQix1REFBZ0IsQ0FBQyxRQUFRZSxLQUFLOzRCQUM1Qk8sVUFBVSxJQUFJOzRCQUNkQyxRQUFRUCxrQkFBeUI7NEJBQ2pDUSxVQUFVOzRCQUNWQyxRQUFROzRCQUNSQyxNQUFNO3dCQUNSO3dCQUVGeEIsSUFBSXlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7NEJBQ25CQyxTQUFTLElBQUk7NEJBQ2JDLE1BQU0xQjs0QkFDTjJCLFdBQVdoQjt3QkFDYjtvQkFDRixPQUFPO3dCQUNMYixJQUFJeUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzs0QkFBRUMsU0FBUyxLQUFLO3dCQUFDO3dCQUN0Q0csUUFBUUMsR0FBRyxDQUFDO29CQUNkLENBQUM7Z0JBQ0g7WUFDRixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RoQyxJQUFJeUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUyxLQUFLO29CQUFFSyxPQUFPQTtnQkFBTTtnQkFDcERGLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1lBQ0EsS0FBTTtRQUNSO1lBQ0UvQixJQUFJeUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUyxLQUFLO1lBQUM7SUFDMUM7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhcXVldGEtZmluYWwvLi9wYWdlcy9hcGkvbG9naW4uanM/YWU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0XCI7XHJcbmltcG9ydCB7IHNpZ24gfSBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xyXG5cclxuZGJDb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG5cclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcclxuICAgICAgICAgIHVzZXJOYW1lOiByZXEuYm9keS51c2VybmFtZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29tcGFyZShyZXEuYm9keS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICBpZiAoIWVyciAmJiByZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xhaW1zID0geyBzdWI6IHVzZXIuX2lkIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGp3dCA9IHNpZ24oY2xhaW1zLCBwcm9jZXNzLmVudi5HVUlELCB7IGV4cGlyZXNJbjogXCIxaFwiIH0pO1xyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiLFxyXG4gICAgICAgICAgICAgIGNvb2tpZS5zZXJpYWxpemUoXCJhdXRoXCIsIGp3dCwge1xyXG4gICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcclxuICAgICAgICAgICAgICAgIG1heEFnZTogMzYwMCxcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgICAgICAgICAgYXV0aFRva2VuOiBqd3QsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgaW4gZWxzZSBzdGF0ZW1lbnRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbGVkIGluIGNhdGNoIGVycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVc2VyIiwiY29tcGFyZSIsInNpZ24iLCJjb29raWUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyIiwiZmluZE9uZSIsInVzZXJOYW1lIiwiYm9keSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlcnIiLCJyZXN1bHQiLCJjbGFpbXMiLCJzdWIiLCJfaWQiLCJqd3QiLCJwcm9jZXNzIiwiZW52IiwiR1VJRCIsImV4cGlyZXNJbiIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsImh0dHBPbmx5Iiwic2VjdXJlIiwic2FtZVNpdGUiLCJtYXhBZ2UiLCJwYXRoIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiYXV0aFRva2VuIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();