/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! path */ \"path\");\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\nvar Webpack = __webpack_require__(/*! webpack */ \"webpack\");\n// eslint-disable-next-line no-unused-vars\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\nvar DotEnv = __webpack_require__(/*! dotenv-webpack */ \"dotenv-webpack\");\nvar ESLintPlugin = __webpack_require__(/*! eslint-webpack-plugin */ \"eslint-webpack-plugin\");\nmodule.exports = {\n  entry: {\n    server: './app.mjs'\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  mode: 'development',\n  target: 'node',\n  node: {\n    __dirname: false,\n    __filename: false\n  },\n  externals: [nodeExternals()],\n  resolve: {\n    extensions: ['.js', '.mjs'],\n    alias: {\n      '@app': path.resolve(__dirname, 'app/'),\n      '@config': path.resolve(__dirname, 'config/'),\n      '@handlers': path.resolve(__dirname, 'handlers/'),\n      '@public': path.resolve(__dirname, 'public/'),\n      '@routes': path.resolve(__dirname, 'routes/'),\n      '@test': path.resolve(__dirname, 'test/')\n    }\n  },\n  module: {\n    rules: [{\n      test: /\\.(mjs|js)$/,\n      exclude: /node_modules/,\n      use: {\n        loader: 'babel-loader'\n      }\n    }]\n  },\n  plugins: [new Webpack.HotModuleReplacementPlugin(), new DotEnv(), new ESLintPlugin()]\n};\n\n//# sourceURL=webpack://api-sic/./webpack.config.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/helpers/wrapNativeSuper":
/*!*********************************************************!*\
  !*** external "@babel/runtime/helpers/wrapNativeSuper" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("ajv");

/***/ }),

/***/ "ajv-dates":
/*!****************************!*\
  !*** external "ajv-dates" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("ajv-dates");

/***/ }),

/***/ "ajv-errors":
/*!*****************************!*\
  !*** external "ajv-errors" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("ajv-errors");

/***/ }),

/***/ "ajv-formats":
/*!******************************!*\
  !*** external "ajv-formats" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("ajv-formats");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "dotenv-webpack":
/*!*********************************!*\
  !*** external "dotenv-webpack" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv-webpack");

/***/ }),

/***/ "eslint-webpack-plugin":
/*!****************************************!*\
  !*** external "eslint-webpack-plugin" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("eslint-webpack-plugin");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-fileupload");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "js-yaml":
/*!**************************!*\
  !*** external "js-yaml" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-yaml");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mjml":
/*!***********************!*\
  !*** external "mjml" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("mjml");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "moment-timezone":
/*!**********************************!*\
  !*** external "moment-timezone" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment-timezone");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer");

/***/ }),

/***/ "qrcode":
/*!*************************!*\
  !*** external "qrcode" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("qrcode");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ }),

/***/ "speakeasy":
/*!****************************!*\
  !*** external "speakeasy" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("speakeasy");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("swagger-ui-express");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-node-externals");

/***/ }),

/***/ "yamljs":
/*!*************************!*\
  !*** external "yamljs" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("yamljs");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "./app.mjs":
/*!*****************!*\
  !*** ./app.mjs ***!
  \*****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configs_Env_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs/Env.mjs */ \"./configs/Env.mjs\");\n/* harmony import */ var _main_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.mjs */ \"./main.mjs\");\n\n\n\n// eslint-disable-next-line no-new\nnew _main_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack://api-sic/./app.mjs?");

/***/ }),

/***/ "./app/controllers/ApiController.mjs":
/*!*******************************************!*\
  !*** ./app/controllers/ApiController.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-timezone */ \"moment-timezone\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var speakeasy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! speakeasy */ \"speakeasy\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n/* harmony import */ var _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../handlers/NoAuthException.mjs */ \"./handlers/NoAuthException.mjs\");\n/* harmony import */ var _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/Auth.mjs */ \"./app/utils/Auth.mjs\");\n/* harmony import */ var _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../handlers/NotFoundExeption.mjs */ \"./handlers/NotFoundExeption.mjs\");\n/* harmony import */ var _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/mailer.mjs */ \"./app/services/mailer.mjs\");\n/* harmony import */ var _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../handlers/UnprocessableEntityException.mjs */ \"./handlers/UnprocessableEntityException.mjs\");\n/* harmony import */ var _services_getRols_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/getRols.mjs */ \"./app/services/getRols.mjs\");\n/* harmony import */ var _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/MetodoAutenticacionUsuario.mjs */ \"./app/models/MetodoAutenticacionUsuario.mjs\");\n/* harmony import */ var _services_security_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/security.mjs */ \"./app/services/security.mjs\");\n/* harmony import */ var _models_MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../models/MetodoAutenticacion.mjs */ \"./app/models/MetodoAutenticacion.mjs\");\n/* harmony import */ var _handlers_BadRequestException_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../handlers/BadRequestException.mjs */ \"./handlers/BadRequestException.mjs\");\n/* harmony import */ var _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../handlers/Handler.mjs */ \"./handlers/Handler.mjs\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ApiController = /*#__PURE__*/function () {\n  function ApiController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, ApiController);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(ApiController, null, [{\n    key: \"twoFactorList\",\n    value: function () {\n      var _twoFactorList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee(req, res) {\n        var authMethods;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _models_MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_18__[\"default\"].findAll();\n            case 2:\n              authMethods = _context.sent;\n              res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).json(authMethods);\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function twoFactorList(_x, _x2) {\n        return _twoFactorList.apply(this, arguments);\n      }\n      return twoFactorList;\n    }()\n  }, {\n    key: \"confirmUser\",\n    value: function () {\n      var _confirmUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee2(req, res) {\n        var token, _jwt$verify, idUsuario;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              token = req.params.token;\n              if (!token) {\n                _context2.next = 10;\n                break;\n              }\n              _jwt$verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__.verify(token, \"clave_secreta\"), idUsuario = _jwt$verify.idUsuario;\n              if (!idUsuario) {\n                _context2.next = 9;\n                break;\n              }\n              _context2.next = 6;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Usuario.update({\n                is_suspended: false,\n                last_login: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().tz('America/El_Salvador').format(),\n                verified: true\n              }, {\n                where: {\n                  id: idUsuario\n                }\n              });\n            case 6:\n              res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).send({\n                message: 'El usuario ha sido verificado con exito'\n              });\n              _context2.next = 10;\n              break;\n            case 9:\n              throw (0,_handlers_BadRequestException_mjs__WEBPACK_IMPORTED_MODULE_19__[\"default\"])('El id de usuario es requerido');\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      function confirmUser(_x3, _x4) {\n        return _confirmUser.apply(this, arguments);\n      }\n      return confirmUser;\n    }()\n  }, {\n    key: \"login\",\n    value: function () {\n      var _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee3(req, res) {\n        var _req$body, email, password, usuario, validPassword, idUsuario, token, header, body, metodosAutenticacion, primaryMethod, roles, userInfo, response, tokenInfo;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              _req$body = req.body, email = _req$body.email, password = _req$body.password;\n              _context3.next = 3;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Usuario.findOne({\n                where: {\n                  email: email\n                },\n                attributes: ['id', 'email', 'password', 'is_suspended', 'last_login', 'verified', 'two_factor_status', 'nombre'],\n                include: [{\n                  model: _models_MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n                  attributes: ['id', 'nombre', 'icono'],\n                  through: {\n                    attributes: ['is_primary', 'id']\n                  }\n                }]\n              });\n            case 3:\n              usuario = _context3.sent;\n              if (usuario) {\n                _context3.next = 6;\n                break;\n              }\n              throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('Credenciales no validas');\n            case 6:\n              validPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_4__.compareSync(password, usuario.password);\n              if (validPassword) {\n                _context3.next = 9;\n                break;\n              }\n              throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('Credenciales no validas');\n            case 9:\n              if (usuario.verified) {\n                _context3.next = 19;\n                break;\n              }\n              idUsuario = usuario.id;\n              _context3.next = 13;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].createToken({\n                idUsuario: idUsuario\n              }, \"clave_secreta\");\n            case 13:\n              token = _context3.sent;\n              header = [{\n                tagName: 'mj-button',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  'border-radius': '99px'\n                },\n                content: \"Hola \".concat(usuario.email)\n              }];\n              body = [{\n                tagName: 'mj-button',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  href: \"\".concat(\"https://google.com\", \"/verify-mail/\").concat(token)\n                },\n                content: 'VERIFICAR MI CUENTA'\n              }];\n              _context3.next = 18;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"].sendMail({\n                email: usuario.email,\n                header: header,\n                subject: 'Verificacion de correo electronico',\n                message: 'Para verificar tu cuenta debes de hacer click en el siguiente enlace:',\n                body: body\n              });\n            case 18:\n              return _context3.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).json({\n                message: 'Por favor verificar la cuenta por medio del correo que se le ha enviado'\n              }));\n            case 19:\n              if (!usuario.is_suspended) {\n                _context3.next = 21;\n                break;\n              }\n              throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('El usuario se encuentra suspendido');\n            case 21:\n              _context3.next = 23;\n              return usuario.update({\n                last_login: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().tz('America/El_Salvador').format()\n              });\n            case 23:\n              metodosAutenticacion = usuario.MetodoAutenticacions.map(function (row) {\n                return {\n                  nombre: row.nombre,\n                  descripcion: row.descripcion,\n                  icono: row.icono,\n                  id: row.id,\n                  is_primary: row.MetodoAutenticacionUsuario.is_primary,\n                  id_metodo_usuario: row.MetodoAutenticacionUsuario.id\n                };\n              });\n              primaryMethod = metodosAutenticacion.find(function (item) {\n                return item.is_primary;\n              });\n              _context3.next = 27;\n              return _services_getRols_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"].roles(usuario.id);\n            case 27:\n              roles = _context3.sent;\n              userInfo = {\n                id: usuario.id,\n                email: usuario.email,\n                last_login: usuario.last_login,\n                two_factor_status: usuario.two_factor_status,\n                auth_methods: metodosAutenticacion,\n                nombre: usuario.nombre\n              };\n              response = {};\n              tokenInfo = {\n                user: userInfo\n              };\n              if (usuario.two_factor_status) {\n                _context3.next = 36;\n                break;\n              }\n              tokenInfo.roles = roles;\n              _context3.next = 35;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].refresh_token(usuario);\n            case 35:\n              response.refreshToken = _context3.sent;\n            case 36:\n              _context3.next = 38;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].createToken(tokenInfo, usuario.two_factor_status ? \"clave\" : \"clave_secreta\");\n            case 38:\n              response.token = _context3.sent;\n              if (!((primaryMethod === null || primaryMethod === void 0 ? void 0 : primaryMethod.id) === 1 && usuario.two_factor_status)) {\n                _context3.next = 42;\n                break;\n              }\n              _context3.next = 42;\n              return ApiController.sendEmailCode(usuario, primaryMethod.id);\n            case 42:\n              return _context3.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).json(response));\n            case 43:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3);\n      }));\n      function login(_x5, _x6) {\n        return _login.apply(this, arguments);\n      }\n      return login;\n    }()\n  }, {\n    key: \"sendCode\",\n    value: function () {\n      var _sendCode = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee4(req, res) {\n        var email, usuario;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee4$(_context4) {\n          while (1) switch (_context4.prev = _context4.next) {\n            case 0:\n              email = req.usuario.email;\n              _context4.next = 3;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Usuario.findOne({\n                where: {\n                  email: email\n                }\n              });\n            case 3:\n              usuario = _context4.sent;\n              _context4.next = 6;\n              return ApiController.sendEmailCode(usuario, 1);\n            case 6:\n              return _context4.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).json({\n                message: 'Se ha enviado el codigo a su correo electrónico'\n              }));\n            case 7:\n            case \"end\":\n              return _context4.stop();\n          }\n        }, _callee4);\n      }));\n      function sendCode(_x7, _x8) {\n        return _sendCode.apply(this, arguments);\n      }\n      return sendCode;\n    }()\n  }, {\n    key: \"sendEmailCode\",\n    value: function () {\n      var _sendEmailCode = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee5(user, idMethod) {\n        var _yield$MetodoAutentic, secretKey, code, header;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee5$(_context5) {\n          while (1) switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"].findOne({\n                where: {\n                  id_usuario: user.id,\n                  id_metodo: idMethod\n                },\n                attributes: ['secret_key']\n              });\n            case 2:\n              _yield$MetodoAutentic = _context5.sent;\n              secretKey = _yield$MetodoAutentic.secret_key;\n              code = speakeasy__WEBPACK_IMPORTED_MODULE_7__.totp({\n                secret: secretKey,\n                encoding: 'base32',\n                window: Number(process.env.TIME_BASED_TOKEN_2FA),\n                step: 10\n              });\n              header = [{\n                tagName: 'mj-button',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  'border-radius': '99px'\n                },\n                content: 'El codigo de verificacion es:'\n              }];\n              _context5.next = 8;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"].sendMail({\n                email: user.email,\n                header: header,\n                subject: 'Codigo de verificacion de usuario',\n                message: code\n              });\n            case 8:\n            case \"end\":\n              return _context5.stop();\n          }\n        }, _callee5);\n      }));\n      function sendEmailCode(_x9, _x10) {\n        return _sendEmailCode.apply(this, arguments);\n      }\n      return sendEmailCode;\n    }()\n  }, {\n    key: \"logout\",\n    value: function () {\n      var _logout = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee6(req, res) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee6$(_context6) {\n          while (1) switch (_context6.prev = _context6.next) {\n            case 0:\n              _context6.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Usuario.update({\n                token_valid_after: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().tz('America/El_Salvador').format(),\n                two_factor_status: false\n              }, {\n                where: {\n                  id: req.usuario.id\n                }\n              });\n            case 2:\n              return _context6.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).json());\n            case 3:\n            case \"end\":\n              return _context6.stop();\n          }\n        }, _callee6);\n      }));\n      function logout(_x11, _x12) {\n        return _logout.apply(this, arguments);\n      }\n      return logout;\n    }()\n  }, {\n    key: \"twoFactorAuthLoginChoose\",\n    value: function () {\n      var _twoFactorAuthLoginChoose = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee7(req, res, next) {\n        var idMetodo, authorization, token, _jwt$verify2, user, authMethod, newToken, verificationCode, header;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee7$(_context7) {\n          while (1) switch (_context7.prev = _context7.next) {\n            case 0:\n              idMetodo = req.body.id_metodo;\n              authorization = req.headers.authorization;\n              token = authorization && authorization.replace('Bearer ', '');\n              if (token) {\n                _context7.next = 5;\n                break;\n              }\n              throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('No autenticado');\n            case 5:\n              _context7.prev = 5;\n              _jwt$verify2 = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__.verify(token, \"clave\"), user = _jwt$verify2.user;\n              _context7.next = 9;\n              return _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"].findOne({\n                where: {\n                  id_usuario: user.id,\n                  id_metodo: idMetodo,\n                  verified: true\n                }\n              });\n            case 9:\n              authMethod = _context7.sent;\n              if (!(idMetodo === 1)) {\n                _context7.next = 18;\n                break;\n              }\n              newToken = speakeasy__WEBPACK_IMPORTED_MODULE_7__.generateSecret({\n                length: 52\n              }).base32;\n              _context7.next = 14;\n              return authMethod.update({\n                secret_key: newToken\n              });\n            case 14:\n              verificationCode = speakeasy__WEBPACK_IMPORTED_MODULE_7__.totp({\n                secret: newToken,\n                encoding: 'base32',\n                window: Number(process.env.TIME_BASED_TOKEN_2FA),\n                step: 10\n              });\n              header = [{\n                tagName: 'mj-button',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  'border-radius': '99px'\n                },\n                content: 'El codigo de verificacion es:'\n              }];\n              _context7.next = 18;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"].sendMail({\n                email: user.email,\n                header: header,\n                subject: 'Codigo de verificacion de usuario',\n                message: verificationCode\n              });\n            case 18:\n              return _context7.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).send({\n                message: 'Se ha enviado el codigo de verificacion a su correo electronico'\n              }));\n            case 21:\n              _context7.prev = 21;\n              _context7.t0 = _context7[\"catch\"](5);\n              return _context7.abrupt(\"return\", _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_20__[\"default\"].handlerError(_context7.t0, req, res, next));\n            case 24:\n            case \"end\":\n              return _context7.stop();\n          }\n        }, _callee7, null, [[5, 21]]);\n      }));\n      function twoFactorAuthLoginChoose(_x13, _x14, _x15) {\n        return _twoFactorAuthLoginChoose.apply(this, arguments);\n      }\n      return twoFactorAuthLoginChoose;\n    }()\n  }, {\n    key: \"verifyTwoFactorAuthCode\",\n    value: function () {\n      var _verifyTwoFactorAuthCode = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee8(req, res) {\n        var _req$body2, code, idMethod, idUser, user, authMethod, params, isValid, roles, refreshToken, newToken;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee8$(_context8) {\n          while (1) switch (_context8.prev = _context8.next) {\n            case 0:\n              _req$body2 = req.body, code = _req$body2.code, idMethod = _req$body2.id_method;\n              idUser = req.usuario.id;\n              _context8.next = 4;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Usuario.findByPk(idUser);\n            case 4:\n              user = _context8.sent;\n              _context8.next = 7;\n              return _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"].findOne({\n                where: {\n                  id_usuario: user.id,\n                  id_metodo: idMethod\n                }\n              });\n            case 7:\n              authMethod = _context8.sent;\n              if (authMethod) {\n                _context8.next = 10;\n                break;\n              }\n              throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('Metodo de autenticación no configurado');\n            case 10:\n              if (authMethod !== null && authMethod !== void 0 && authMethod.verified) {\n                _context8.next = 12;\n                break;\n              }\n              throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('El metodo de autenticación no ha sido verificado');\n            case 12:\n              params = {\n                code: code,\n                secretKey: authMethod.secret_key\n              };\n              if (authMethod.id_metodo === 1) {\n                params.time = process.env.TIME_BASED_TOKEN_2FA;\n                params.step = 10;\n              }\n              _context8.next = 16;\n              return _services_security_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"].verifyTwoFactorAuthCode(params);\n            case 16:\n              isValid = _context8.sent;\n              if (isValid) {\n                _context8.next = 19;\n                break;\n              }\n              throw new _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"]('El codigo proporcionado no es valido');\n            case 19:\n              _context8.next = 21;\n              return user.update({\n                two_factor_status: true,\n                last_login: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().tz('America/El_Salvador').format(),\n                token_valid_after: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().subtract(5, 's').tz('America/El_Salvador').format()\n              });\n            case 21:\n              _context8.next = 23;\n              return _services_getRols_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"].roles(user.id);\n            case 23:\n              roles = _context8.sent;\n              _context8.next = 26;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].refresh_token(user);\n            case 26:\n              refreshToken = _context8.sent;\n              _context8.next = 29;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].createToken({\n                id: user.id,\n                roles: roles,\n                user: user,\n                email: user.email\n              }, \"clave_secreta\");\n            case 29:\n              newToken = _context8.sent;\n              return _context8.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).send({\n                token: newToken,\n                refreshToken: refreshToken,\n                '2fa': user.two_factor_status\n              }));\n            case 31:\n            case \"end\":\n              return _context8.stop();\n          }\n        }, _callee8);\n      }));\n      function verifyTwoFactorAuthCode(_x16, _x17) {\n        return _verifyTwoFactorAuthCode.apply(this, arguments);\n      }\n      return verifyTwoFactorAuthCode;\n    }()\n  }, {\n    key: \"RefreshToken\",\n    value: function () {\n      var _RefreshToken2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee9(req, res) {\n        var refreshTokenExist, roles, tokenValidTime, nowTime, usuario, userDatatoken, token, newRefreshToken;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee9$(_context9) {\n          while (1) switch (_context9.prev = _context9.next) {\n            case 0:\n              _context9.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.RefreshToken.findOne({\n                where: {\n                  refresh_token: req.body.refresh_token\n                },\n                attributes: ['id', 'valid'],\n                include: [{\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Usuario,\n                  attributes: ['id', 'email', 'last_login']\n                }]\n              });\n            case 2:\n              refreshTokenExist = _context9.sent;\n              if (refreshTokenExist) {\n                _context9.next = 5;\n                break;\n              }\n              throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]();\n            case 5:\n              _context9.next = 7;\n              return _services_getRols_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"].roles(refreshTokenExist.Usuario.id);\n            case 7:\n              roles = _context9.sent;\n              tokenValidTime = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(refreshTokenExist.valid).valueOf();\n              nowTime = moment_timezone__WEBPACK_IMPORTED_MODULE_5__().tz('America/El_Salvador').valueOf();\n              if (!(tokenValidTime < nowTime)) {\n                _context9.next = 12;\n                break;\n              }\n              throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('El refresh token porporcionado no es valido');\n            case 12:\n              usuario = refreshTokenExist.Usuario;\n              userDatatoken = {\n                id: usuario.id,\n                email: usuario.email,\n                last_login: usuario.last_login,\n                two_factor_status: usuario.two_factor_status\n              };\n              _context9.next = 16;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].createToken({\n                roles: roles,\n                user: userDatatoken\n              }, \"clave_secreta\");\n            case 16:\n              token = _context9.sent;\n              _context9.next = 19;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].refresh_token(refreshTokenExist.Usuario);\n            case 19:\n              newRefreshToken = _context9.sent;\n              _context9.next = 22;\n              return refreshTokenExist.update({\n                valid: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().add(\"4\", \"s\").tz('America/El_Salvador').format()\n              });\n            case 22:\n              return _context9.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).json({\n                token: token,\n                refresh_token: newRefreshToken,\n                user: refreshTokenExist.Usuario\n              }));\n            case 23:\n            case \"end\":\n              return _context9.stop();\n          }\n        }, _callee9);\n      }));\n      function RefreshToken(_x18, _x19) {\n        return _RefreshToken2.apply(this, arguments);\n      }\n      return RefreshToken;\n    }()\n  }, {\n    key: \"resetPassword\",\n    value: function () {\n      var _resetPassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee10(req, res) {\n        var usuario, token, uri, header, sections;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee10$(_context10) {\n          while (1) switch (_context10.prev = _context10.next) {\n            case 0:\n              _context10.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Usuario.findOne({\n                where: {\n                  email: req.body.email,\n                  is_suspended: false\n                }\n              });\n            case 2:\n              usuario = _context10.sent;\n              if (usuario) {\n                _context10.next = 5;\n                break;\n              }\n              throw new _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"]('El parametro no es un correo valido');\n            case 5:\n              _context10.next = 7;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].createToken({\n                id: usuario.id,\n                email: usuario.email\n              }, \"clave_secreta\");\n            case 7:\n              token = _context10.sent;\n              _context10.next = 10;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].refresh_token(usuario);\n            case 10:\n              _context10.next = 12;\n              return usuario.update({\n                token_valid_after: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().tz('America/El_Salvador').format()\n              }, {\n                where: {\n                  id: usuario.id\n                }\n              });\n            case 12:\n              uri = \"\".concat(\"https://google.com\", \"/reset-password/\").concat(token);\n              header = [{\n                tagName: 'mj-text',\n                attributes: {\n                  align: 'center',\n                  'font-size': '30px',\n                  'font-weight': 'bold',\n                  color: '#175efb'\n                },\n                content: 'Recuperación de Contraseña'\n              }, {\n                tagName: 'mj-spacer',\n                attributes: {\n                  'css-class': 'primary'\n                }\n              }, {\n                tagName: 'mj-divider',\n                attributes: {\n                  'border-width': '3px',\n                  'border-color': '#175efb'\n                }\n              }, {\n                tagName: 'mj-text',\n                attributes: {\n                  align: 'center',\n                  'font-size': '18px'\n                },\n                children: [{\n                  tagName: 'h3',\n                  content: '¿Una nueva contraseña?',\n                  children: [{\n                    tagName: 'p',\n                    content: 'Haz clic al siguiente boton y crea una nueva.'\n                  }]\n                }]\n              }];\n              sections = [{\n                tagName: 'mj-column',\n                attributes: {},\n                children: [{\n                  tagName: 'mj-button',\n                  attributes: {\n                    href: uri,\n                    width: '80%',\n                    padding: '5px 10px',\n                    'font-size': '20px',\n                    'background-color': '#175efb',\n                    'border-radius': '99px'\n                  },\n                  content: 'Cambiar contraseña'\n                }, {\n                  tagName: 'mj-text',\n                  attributes: {\n                    align: 'justify'\n                  },\n                  children: [{\n                    tagName: 'p',\n                    content: 'Si no solicitaste el cambio de contraseña, ignora este correo. Tu contraseña continuará siendo la misma.'\n                  }]\n                }]\n              }];\n              _context10.next = 17;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"].sendMail({\n                email: usuario.email,\n                header: header,\n                subject: 'Restablecer Contraseña',\n                sections: sections\n              });\n            case 17:\n              if (_context10.sent) {\n                _context10.next = 19;\n                break;\n              }\n              throw new _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"]('Error! Hubo un problema al enviar el correo, intente nuevamente.');\n            case 19:\n              return _context10.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).json({\n                message: 'El correo ha sido enviado'\n              }));\n            case 20:\n            case \"end\":\n              return _context10.stop();\n          }\n        }, _callee10);\n      }));\n      function resetPassword(_x20, _x21) {\n        return _resetPassword.apply(this, arguments);\n      }\n      return resetPassword;\n    }()\n  }, {\n    key: \"changePassword\",\n    value: function () {\n      var _changePassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee11(req, res) {\n        var _req$body3, password, confirmPassword, token, salt, passwordCrypt, _jwt$verify3, id;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee11$(_context11) {\n          while (1) switch (_context11.prev = _context11.next) {\n            case 0:\n              _req$body3 = req.body, password = _req$body3.password, confirmPassword = _req$body3.confirm_password;\n              token = req.headers.authorization.split(' ')[1];\n              salt = bcryptjs__WEBPACK_IMPORTED_MODULE_4__.genSaltSync();\n              if (!(password !== confirmPassword)) {\n                _context11.next = 5;\n                break;\n              }\n              throw new _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"]('Error! Las contraseñas  no coinciden');\n            case 5:\n              passwordCrypt = bcryptjs__WEBPACK_IMPORTED_MODULE_4__.hashSync(password, salt);\n              _jwt$verify3 = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__.verify(token, \"clave_secreta\"), id = _jwt$verify3.id;\n              _context11.next = 9;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Usuario.update({\n                password: passwordCrypt,\n                token_valid_after: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().tz('America/El_Salvador').format()\n              }, {\n                where: {\n                  id: id\n                }\n              });\n            case 9:\n              return _context11.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_OK).json({\n                message: 'contraseña actualizada'\n              }));\n            case 10:\n            case \"end\":\n              return _context11.stop();\n          }\n        }, _callee11);\n      }));\n      function changePassword(_x22, _x23) {\n        return _changePassword.apply(this, arguments);\n      }\n      return changePassword;\n    }()\n  }, {\n    key: \"sendVerificationToken\",\n    value: function () {\n      var _sendVerificationToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee12(req, res) {\n        var email, usuario, idUsuario, token, header, body;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee12$(_context12) {\n          while (1) switch (_context12.prev = _context12.next) {\n            case 0:\n              email = req.body.email;\n              _context12.next = 3;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Usuario.findOne({\n                where: {\n                  email: email\n                }\n              });\n            case 3:\n              usuario = _context12.sent;\n              idUsuario = usuario.id;\n              _context12.next = 7;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].createToken({\n                idUsuario: idUsuario\n              }, \"clave_secreta\");\n            case 7:\n              token = _context12.sent;\n              header = [{\n                tagName: 'mj-button',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  'border-radius': '99px'\n                },\n                content: \"Hola \".concat(usuario.email)\n              }];\n              body = [{\n                tagName: 'mj-button',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  href: \"\".concat(\"https://google.com\", \"/verificar/\").concat(token)\n                },\n                content: 'VERIFICAR MI CUENTA'\n              }];\n              _context12.next = 12;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"].sendMail({\n                email: usuario.email,\n                header: header,\n                subject: 'Verificación de correo electrónico',\n                message: 'Para verificar tu cuenta debes de hacer click en el siguiente enlace:',\n                body: body\n              });\n            case 12:\n              return _context12.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].HTTP_BAD_REQUEST).json({\n                message: 'Se ha reenviado el correo con el token de verificación'\n              }));\n            case 13:\n            case \"end\":\n              return _context12.stop();\n          }\n        }, _callee12);\n      }));\n      function sendVerificationToken(_x24, _x25) {\n        return _sendVerificationToken.apply(this, arguments);\n      }\n      return sendVerificationToken;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/controllers/ApiController.mjs?");

/***/ }),

/***/ "./app/controllers/ClienteController.mjs":
/*!***********************************************!*\
  !*** ./app/controllers/ClienteController.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ClienteController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n\n\n\n\n\nvar ClienteController = /*#__PURE__*/function () {\n  function ClienteController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, ClienteController);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(ClienteController, null, [{\n    key: \"list\",\n    value: function () {\n      var _list = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee(req, res) {\n        var clientes;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Cliente.findAll();\n            case 2:\n              clientes = _context.sent;\n              res.json(clientes);\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function list(_x, _x2) {\n        return _list.apply(this, arguments);\n      }\n      return list;\n    }()\n  }, {\n    key: \"create\",\n    value: function () {\n      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee2(req, res) {\n        var _req$body, nombre, dui, email, cliente;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              _req$body = req.body, nombre = _req$body.nombre, dui = _req$body.dui, email = _req$body.email;\n              _context2.next = 3;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Cliente.create({\n                nombre: nombre,\n                dui: dui,\n                email: email\n              });\n            case 3:\n              cliente = _context2.sent;\n              res.json(cliente);\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      function create(_x3, _x4) {\n        return _create.apply(this, arguments);\n      }\n      return create;\n    }()\n  }, {\n    key: \"show\",\n    value: function () {\n      var _show = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee3(req, res) {\n        var cliente;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Cliente.findByPk(req.params.id);\n            case 2:\n              cliente = _context3.sent;\n              res.json(cliente);\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3);\n      }));\n      function show(_x5, _x6) {\n        return _show.apply(this, arguments);\n      }\n      return show;\n    }()\n  }, {\n    key: \"update\",\n    value: function () {\n      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee4(req, res) {\n        var _req$body2, nombre, dui, email, cliente;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee4$(_context4) {\n          while (1) switch (_context4.prev = _context4.next) {\n            case 0:\n              _req$body2 = req.body, nombre = _req$body2.nombre, dui = _req$body2.dui, email = _req$body2.email;\n              _context4.next = 3;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Cliente.findByPk(req.params.id);\n            case 3:\n              cliente = _context4.sent;\n              cliente.nombre = nombre;\n              cliente.dui = dui;\n              cliente.email = email;\n              _context4.next = 9;\n              return cliente.save();\n            case 9:\n              res.json(cliente);\n            case 10:\n            case \"end\":\n              return _context4.stop();\n          }\n        }, _callee4);\n      }));\n      function update(_x7, _x8) {\n        return _update.apply(this, arguments);\n      }\n      return update;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/controllers/ClienteController.mjs?");

/***/ }),

/***/ "./app/controllers/PerfilController.mjs":
/*!**********************************************!*\
  !*** ./app/controllers/PerfilController.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PerfilController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/VerifyModel.mjs */ \"./app/utils/VerifyModel.mjs\");\n\n\n\n\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n\n\n\n\n\nvar PerfilController = /*#__PURE__*/function () {\n  function PerfilController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__(this, PerfilController);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__(PerfilController, null, [{\n    key: \"index\",\n    value: function () {\n      var _index = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee(req, res) {\n        var _req$query, _req$query$page, page, _req$query$per_page, perPage, _req$query$paginacion, paginacion, nombre, codigo, filtro, options, _yield$Perfil$findAnd, totalRows, perfiles;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$per_page = _req$query.per_page, perPage = _req$query$per_page === void 0 ? 10 : _req$query$per_page, _req$query$paginacion = _req$query.paginacion, paginacion = _req$query$paginacion === void 0 ? 'true' : _req$query$paginacion, nombre = _req$query.nombre, codigo = _req$query.codigo;\n              filtro = {};\n              options = {};\n              if (!(paginacion === 'true')) {\n                _context.next = 11;\n                break;\n              }\n              _context.next = 6;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isValid(perPage, 'cantidad por pagina debe ser de tipo entero');\n            case 6:\n              _context.next = 8;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isValid(page, 'pagina debe ser de tipo entero');\n            case 8:\n              options.offset = perPage * (page - 1);\n              options.limit = Number(perPage);\n              options.distinct = true;\n            case 11:\n              if (nombre) filtro.nombre = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__({}, sequelize__WEBPACK_IMPORTED_MODULE_5__.Op.iLike, \"%\".concat(nombre, \"%\"));\n              if (codigo) filtro.codigo = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__({}, sequelize__WEBPACK_IMPORTED_MODULE_5__.Op.iLike, \"%\".concat(codigo, \"%\"));\n              _context.next = 15;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Perfil.findAndCountAll(_objectSpread({\n                include: [{\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol,\n                  required: true\n                }],\n                where: filtro\n              }, options));\n            case 15:\n              _yield$Perfil$findAnd = _context.sent;\n              totalRows = _yield$Perfil$findAnd.count;\n              perfiles = _yield$Perfil$findAnd.rows;\n              if (paginacion === 'true') {\n                res.set({\n                  total_rows: Number(totalRows),\n                  page: Number(page),\n                  per_page: Number(perPage)\n                });\n              }\n              return _context.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].HTTP_OK).json(perfiles));\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function index(_x, _x2) {\n        return _index.apply(this, arguments);\n      }\n      return index;\n    }()\n  }, {\n    key: \"store\",\n    value: function () {\n      var _store = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee2(req, res) {\n        var _req$body, nombre, codigo, roles, transaction, perfil;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              _req$body = req.body, nombre = _req$body.nombre, codigo = _req$body.codigo, roles = _req$body.roles;\n              _context2.next = 3;\n              return _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].connection().transaction();\n            case 3:\n              transaction = _context2.sent;\n              _context2.prev = 4;\n              _context2.next = 7;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Perfil.create({\n                nombre: nombre,\n                codigo: codigo\n              }, {\n                transaction: transaction\n              });\n            case 7:\n              perfil = _context2.sent;\n              _context2.next = 10;\n              return perfil.setRols(roles, {\n                transaction: transaction\n              });\n            case 10:\n              _context2.next = 12;\n              return transaction.commit();\n            case 12:\n              return _context2.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].HTTP_CREATED).json({\n                id: perfil.id,\n                nombre: nombre,\n                codigo: codigo,\n                roles: roles\n              }));\n            case 15:\n              _context2.prev = 15;\n              _context2.t0 = _context2[\"catch\"](4);\n              _context2.next = 19;\n              return transaction.rollback();\n            case 19:\n              throw _context2.t0;\n            case 20:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2, null, [[4, 15]]);\n      }));\n      function store(_x3, _x4) {\n        return _store.apply(this, arguments);\n      }\n      return store;\n    }()\n  }, {\n    key: \"show\",\n    value: function () {\n      var _show = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee3(req, res) {\n        var id, perfil;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              id = req.params.id;\n              _context3.next = 3;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Perfil, id, 'El perfil no ha sido encontrado', {\n                include: {\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol,\n                  through: {\n                    attributes: []\n                  }\n                }\n              });\n            case 3:\n              perfil = _context3.sent;\n              return _context3.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].HTTP_OK).json(perfil));\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3);\n      }));\n      function show(_x5, _x6) {\n        return _show.apply(this, arguments);\n      }\n      return show;\n    }()\n  }, {\n    key: \"update\",\n    value: function () {\n      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee4(req, res) {\n        var _req$body2, nombre, codigo, roles, id, transaction, perfil;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee4$(_context4) {\n          while (1) switch (_context4.prev = _context4.next) {\n            case 0:\n              _req$body2 = req.body, nombre = _req$body2.nombre, codigo = _req$body2.codigo, roles = _req$body2.roles;\n              id = req.params.id;\n              _context4.next = 4;\n              return _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].connection().transaction();\n            case 4:\n              transaction = _context4.sent;\n              _context4.prev = 5;\n              _context4.next = 8;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Perfil, id, 'Perfil no encontrado');\n            case 8:\n              perfil = _context4.sent;\n              _context4.next = 11;\n              return perfil.update({\n                nombre: nombre,\n                codigo: codigo\n              }, {\n                transaction: transaction\n              });\n            case 11:\n              _context4.next = 13;\n              return perfil.setRols(roles, {\n                transaction: transaction\n              });\n            case 13:\n              _context4.next = 15;\n              return transaction.commit();\n            case 15:\n              return _context4.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].HTTP_OK).json(perfil));\n            case 18:\n              _context4.prev = 18;\n              _context4.t0 = _context4[\"catch\"](5);\n              _context4.next = 22;\n              return transaction.rollback();\n            case 22:\n              throw _context4.t0;\n            case 23:\n            case \"end\":\n              return _context4.stop();\n          }\n        }, _callee4, null, [[5, 18]]);\n      }));\n      function update(_x7, _x8) {\n        return _update.apply(this, arguments);\n      }\n      return update;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/controllers/PerfilController.mjs?");

/***/ }),

/***/ "./app/controllers/RolController.mjs":
/*!*******************************************!*\
  !*** ./app/controllers/RolController.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RolController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n/* harmony import */ var _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/VerifyModel.mjs */ \"./app/utils/VerifyModel.mjs\");\n/* harmony import */ var _models_TipoRol_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/TipoRol.mjs */ \"./app/models/TipoRol.mjs\");\n/* harmony import */ var _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../handlers/UnprocessableEntityException.mjs */ \"./handlers/UnprocessableEntityException.mjs\");\n\n\n\n\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n\n\n\n\n\n\nvar RolController = /*#__PURE__*/function () {\n  function RolController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__(this, RolController);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__(RolController, null, [{\n    key: \"index\",\n    value: function () {\n      var _index = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee(req, res) {\n        var _req$query, _req$query$page, page, _req$query$per_page, perPage, _req$query$paginacion, paginacion, nombre, filtro, options, _yield$Rol$findAndCou, totalRows, roles;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$per_page = _req$query.per_page, perPage = _req$query$per_page === void 0 ? 10 : _req$query$per_page, _req$query$paginacion = _req$query.paginacion, paginacion = _req$query$paginacion === void 0 ? 'true' : _req$query$paginacion, nombre = _req$query.nombre;\n              filtro = {};\n              options = {};\n              if (!(paginacion === 'true')) {\n                _context.next = 11;\n                break;\n              }\n              _context.next = 6;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isValid(perPage, 'cantidad por pagina debe ser de tipo entero');\n            case 6:\n              _context.next = 8;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isValid(page, 'pagina debe ser de tipo entero');\n            case 8:\n              options.offset = perPage * (page - 1);\n              options.limit = Number(perPage);\n              options.distinct = true;\n            case 11:\n              if (nombre) filtro.name = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__({}, sequelize__WEBPACK_IMPORTED_MODULE_5__.Op.iLike, \"%\".concat(nombre, \"%\"));\n              _context.next = 14;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol.findAndCountAll(_objectSpread({\n                include: [{\n                  model: _models_TipoRol_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                }],\n                where: filtro\n              }, options));\n            case 14:\n              _yield$Rol$findAndCou = _context.sent;\n              totalRows = _yield$Rol$findAndCou.count;\n              roles = _yield$Rol$findAndCou.rows;\n              if (paginacion === 'true') {\n                res.set({\n                  total_rows: Number(totalRows),\n                  page: Number(page),\n                  per_page: Number(perPage)\n                });\n              }\n              return _context.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].HTTP_OK).json(roles));\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function index(_x, _x2) {\n        return _index.apply(this, arguments);\n      }\n      return index;\n    }()\n  }, {\n    key: \"store\",\n    value: function () {\n      var _store = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee2(req, res) {\n        var _req$body, name, idTipoRol, existeRol, rol;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              _req$body = req.body, name = _req$body.name, idTipoRol = _req$body.id_tipo_rol;\n              _context2.next = 3;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol.findOne({\n                where: {\n                  name: name.trim().toUpperCase()\n                }\n              });\n            case 3:\n              existeRol = _context2.sent;\n              if (!existeRol) {\n                _context2.next = 6;\n                break;\n              }\n              throw new _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('Role ya existe');\n            case 6:\n              _context2.next = 8;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol.create({\n                name: name.trim().toUpperCase(),\n                id_tipo_rol: idTipoRol\n              });\n            case 8:\n              rol = _context2.sent;\n              return _context2.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].HTTP_CREATED).json(rol));\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      function store(_x3, _x4) {\n        return _store.apply(this, arguments);\n      }\n      return store;\n    }()\n  }, {\n    key: \"show\",\n    value: function () {\n      var _show = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee3(req, res) {\n        var id, rol;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              id = req.params.id;\n              _context3.next = 3;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol, id, 'El rol no ha sido encontrado');\n            case 3:\n              rol = _context3.sent;\n              return _context3.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].HTTP_OK).json(rol));\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3);\n      }));\n      function show(_x5, _x6) {\n        return _show.apply(this, arguments);\n      }\n      return show;\n    }()\n  }, {\n    key: \"update\",\n    value: function () {\n      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee4(req, res) {\n        var _req$body2, name, idTipoRol, id, rol;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee4$(_context4) {\n          while (1) switch (_context4.prev = _context4.next) {\n            case 0:\n              _req$body2 = req.body, name = _req$body2.name, idTipoRol = _req$body2.id_tipo_rol;\n              id = req.params.id;\n              _context4.next = 4;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol, id, 'El rol no ha sido encontrado');\n            case 4:\n              _context4.next = 6;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol.update({\n                name: name,\n                id_tipo_rol: idTipoRol\n              }, {\n                where: {\n                  id: id\n                },\n                returning: ['name', 'id_tipo_rol']\n              });\n            case 6:\n              rol = _context4.sent;\n              return _context4.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].HTTP_OK).json(rol[1]));\n            case 8:\n            case \"end\":\n              return _context4.stop();\n          }\n        }, _callee4);\n      }));\n      function update(_x7, _x8) {\n        return _update.apply(this, arguments);\n      }\n      return update;\n    }()\n  }, {\n    key: \"destroy\",\n    value: function () {\n      var _destroy = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee5(req, res) {\n        var id, rol;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee5$(_context5) {\n          while (1) switch (_context5.prev = _context5.next) {\n            case 0:\n              id = req.params.id;\n              _context5.next = 3;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol, id, 'El rol no ha sido encontrado');\n            case 3:\n              rol = _context5.sent;\n              _context5.next = 6;\n              return rol.destroy();\n            case 6:\n              return _context5.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].HTTP_OK).json({\n                message: 'Rol eliminado'\n              }));\n            case 7:\n            case \"end\":\n              return _context5.stop();\n          }\n        }, _callee5);\n      }));\n      function destroy(_x9, _x10) {\n        return _destroy.apply(this, arguments);\n      }\n      return destroy;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/controllers/RolController.mjs?");

/***/ }),

/***/ "./app/controllers/RutaController.mjs":
/*!********************************************!*\
  !*** ./app/controllers/RutaController.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RutaController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n/* harmony import */ var _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/VerifyModel.mjs */ \"./app/utils/VerifyModel.mjs\");\n/* harmony import */ var _services_getRols_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/getRols.mjs */ \"./app/services/getRols.mjs\");\n\n\n\n\nvar _RutaController;\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _asyncIterator(r) { var n, t, o, e = 2; for (\"undefined\" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = \"@@asyncIterator\", o = \"@@iterator\"; } throw new TypeError(\"Object is not async iterable\"); }\nfunction AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + \" is not an object.\")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, \"return\": function _return(r) { var n = this.s[\"return\"]; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, \"throw\": function _throw(r) { var n = this.s[\"return\"]; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); }\n/* eslint-disable no-plusplus */\n// eslint-disable-next-line no-unused-vars\n\n\n\n\n\n\nvar RutaController = /*#__PURE__*/function () {\n  function RutaController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__(this, RutaController);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__(RutaController, null, [{\n    key: \"index\",\n    value: function () {\n      var _index = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee(req, res) {\n        var _req$query, _req$query$page, page, _req$query$per_page, perPage, _req$query$paginacion, paginacion, nombre, uri, filtro, options, _yield$Ruta$findAndCo, totalRows, rutas;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$per_page = _req$query.per_page, perPage = _req$query$per_page === void 0 ? 10 : _req$query$per_page, _req$query$paginacion = _req$query.paginacion, paginacion = _req$query$paginacion === void 0 ? 'true' : _req$query$paginacion, nombre = _req$query.nombre, uri = _req$query.uri;\n              filtro = {};\n              options = {};\n              if (!(paginacion === 'true')) {\n                _context.next = 11;\n                break;\n              }\n              _context.next = 6;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isValid(perPage, 'cantidad por pagina debe ser de tipo entero');\n            case 6:\n              _context.next = 8;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isValid(page, 'pagina debe ser de tipo entero');\n            case 8:\n              options.offset = perPage * (page - 1);\n              options.limit = Number(perPage);\n              options.distinct = true;\n            case 11:\n              if (nombre) filtro.nombre = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__({}, sequelize__WEBPACK_IMPORTED_MODULE_5__.Op.iLike, \"%\".concat(nombre, \"%\"));\n              if (uri) filtro.uri = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__({}, sequelize__WEBPACK_IMPORTED_MODULE_5__.Op.iLike, \"%\".concat(uri, \"%\"));\n              _context.next = 15;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Ruta.findAndCountAll(_objectSpread({\n                include: [{\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol\n                }],\n                where: filtro\n              }, options));\n            case 15:\n              _yield$Ruta$findAndCo = _context.sent;\n              totalRows = _yield$Ruta$findAndCo.count;\n              rutas = _yield$Ruta$findAndCo.rows;\n              if (paginacion === 'true') {\n                res.set({\n                  total_rows: Number(totalRows),\n                  page: Number(page),\n                  per_page: Number(perPage)\n                });\n              }\n              return _context.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].HTTP_OK).json(rutas));\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function index(_x, _x2) {\n        return _index.apply(this, arguments);\n      }\n      return index;\n    }()\n  }, {\n    key: \"store\",\n    value: function () {\n      var _store = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee2(req, res) {\n        var connection, t, _req$body, nombre, uri, nombreUri, mostrar, icono, orden, admin, publico, idRutaPadre, roles, index, ruta, idRuta, _yield$Ruta$getById, Rols;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              connection = _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].connection();\n              _context2.next = 3;\n              return connection.transaction();\n            case 3:\n              t = _context2.sent;\n              _req$body = req.body, nombre = _req$body.nombre, uri = _req$body.uri, nombreUri = _req$body.nombre_uri, mostrar = _req$body.mostrar, icono = _req$body.icono, orden = _req$body.orden, admin = _req$body.admin, publico = _req$body.publico, idRutaPadre = _req$body.id_ruta_padre, roles = _req$body.roles;\n              _context2.prev = 5;\n              if (!roles) {\n                _context2.next = 14;\n                break;\n              }\n              index = 0;\n            case 8:\n              if (!(index < roles.length)) {\n                _context2.next = 14;\n                break;\n              }\n              _context2.next = 11;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol, roles[index], \"No se encontr\\xF3 el rol con id \".concat(roles[index]));\n            case 11:\n              index++;\n              _context2.next = 8;\n              break;\n            case 14:\n              _context2.next = 16;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Ruta.create({\n                nombre: nombre,\n                uri: uri,\n                nombre_uri: nombreUri,\n                mostrar: mostrar,\n                icono: icono,\n                orden: orden,\n                admin: admin,\n                publico: publico,\n                id_ruta_padre: idRutaPadre\n              }, {\n                transaction: t\n              });\n            case 16:\n              ruta = _context2.sent;\n              _context2.next = 19;\n              return ruta.addRols(roles, {\n                transaction: t\n              });\n            case 19:\n              _context2.next = 21;\n              return t.commit();\n            case 21:\n              idRuta = ruta.id;\n              _context2.next = 24;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Ruta.getById(idRuta, {\n                include: [{\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol\n                }]\n              });\n            case 24:\n              _yield$Ruta$getById = _context2.sent;\n              Rols = _yield$Ruta$getById.Rols;\n              return _context2.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].HTTP_CREATED).json({\n                id: ruta.id,\n                nombre: ruta.nombre,\n                nombre_uri: ruta.nombre_uri,\n                mostrar: ruta.mostrar,\n                icono: ruta.icono,\n                orden: ruta.orden,\n                admin: ruta.admin,\n                publico: ruta.publico,\n                id_ruta_padre: ruta.id_ruta_padre,\n                roles: Rols\n              }));\n            case 29:\n              _context2.prev = 29;\n              _context2.t0 = _context2[\"catch\"](5);\n              _context2.next = 33;\n              return t.rollback();\n            case 33:\n              throw _context2.t0;\n            case 34:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2, null, [[5, 29]]);\n      }));\n      function store(_x3, _x4) {\n        return _store.apply(this, arguments);\n      }\n      return store;\n    }()\n  }, {\n    key: \"show\",\n    value: function () {\n      var _show = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee3(req, res) {\n        var id, ruta;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              id = req.params.id;\n              _context3.next = 3;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Ruta, id, \"No se encontr\\xF3 una ruta con id \".concat(id), {\n                include: {\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol,\n                  attributes: ['id', 'name']\n                }\n              });\n            case 3:\n              ruta = _context3.sent;\n              return _context3.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].HTTP_OK).json(ruta.dataValues));\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3);\n      }));\n      function show(_x5, _x6) {\n        return _show.apply(this, arguments);\n      }\n      return show;\n    }()\n  }, {\n    key: \"update\",\n    value: function () {\n      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee4(req, res) {\n        var _req$body2, nombre, uri, nombreUri, mostrar, icono, orden, admin, publico, idRutaPadre, roles, id, ruta;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee4$(_context4) {\n          while (1) switch (_context4.prev = _context4.next) {\n            case 0:\n              _req$body2 = req.body, nombre = _req$body2.nombre, uri = _req$body2.uri, nombreUri = _req$body2.nombre_uri, mostrar = _req$body2.mostrar, icono = _req$body2.icono, orden = _req$body2.orden, admin = _req$body2.admin, publico = _req$body2.publico, idRutaPadre = _req$body2.id_ruta_padre, roles = _req$body2.roles;\n              id = req.params.id;\n              _context4.next = 4;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Ruta, id, \"No se encontr\\xF3 una ruta con id \".concat(id));\n            case 4:\n              ruta = _context4.sent;\n              _context4.next = 7;\n              return ruta.update({\n                nombre: nombre,\n                uri: uri,\n                nombre_uri: nombreUri,\n                mostrar: mostrar,\n                icono: icono,\n                orden: orden,\n                admin: admin,\n                publico: publico,\n                id_ruta_padre: idRutaPadre\n              });\n            case 7:\n              _context4.next = 9;\n              return ruta.setRols(roles);\n            case 9:\n              return _context4.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].HTTP_OK).json({\n                message: 'Datos actualizados con exito'\n              }));\n            case 10:\n            case \"end\":\n              return _context4.stop();\n          }\n        }, _callee4);\n      }));\n      function update(_x7, _x8) {\n        return _update.apply(this, arguments);\n      }\n      return update;\n    }()\n  }, {\n    key: \"getRutas\",\n    value: function () {\n      var _getRutas = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee5(req, res) {\n        var frontAdmin, rutas;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee5$(_context5) {\n          while (1) switch (_context5.prev = _context5.next) {\n            case 0:\n              frontAdmin = \"http://localhost:8080||http://localhost:8081\".split('||');\n              _context5.next = 3;\n              return _getMenu.call(RutaController, req.usuario.id, frontAdmin.includes(req.headers.origin));\n            case 3:\n              rutas = _context5.sent;\n              return _context5.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].HTTP_OK).json(rutas));\n            case 5:\n            case \"end\":\n              return _context5.stop();\n          }\n        }, _callee5);\n      }));\n      function getRutas(_x9, _x10) {\n        return _getRutas.apply(this, arguments);\n      }\n      return getRutas;\n    }()\n  }]);\n}();\n_RutaController = RutaController;\nfunction _getMenu(_x11, _x12) {\n  return _getMenu3.apply(this, arguments);\n}\nfunction _getMenu3() {\n  _getMenu3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee6(idUser, isAdmin) {\n    var roles, menu, children;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee6$(_context6) {\n      while (1) switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return _services_getRols_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"].roles(idUser, 'id');\n        case 2:\n          roles = _context6.sent;\n          _context6.next = 5;\n          return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Ruta.findAll({\n            attributes: ['id', 'nombre', 'uri', 'nombre_uri', 'icono', 'mostrar', 'orden', 'id_ruta_padre'],\n            include: [{\n              model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol,\n              where: {\n                id: roles\n              },\n              attributes: []\n            }],\n            where: {\n              id_ruta_padre: null,\n              admin: isAdmin\n            },\n            order: ['orden']\n          });\n        case 5:\n          menu = _context6.sent;\n          _context6.next = 8;\n          return _getChildren.call(_RutaController, menu);\n        case 8:\n          children = _context6.sent;\n          return _context6.abrupt(\"return\", children);\n        case 10:\n        case \"end\":\n          return _context6.stop();\n      }\n    }, _callee6);\n  }));\n  return _getMenu3.apply(this, arguments);\n}\nfunction _getChildren(_x13) {\n  return _getChildren3.apply(this, arguments);\n}\nfunction _getChildren3() {\n  _getChildren3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee7(parents) {\n    var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, ruta;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee7$(_context7) {\n      while (1) switch (_context7.prev = _context7.next) {\n        case 0:\n          // eslint-disable-next-line no-restricted-syntax\n          _iteratorAbruptCompletion = false;\n          _didIteratorError = false;\n          _context7.prev = 2;\n          _iterator = _asyncIterator(parents);\n        case 4:\n          _context7.next = 6;\n          return _iterator.next();\n        case 6:\n          if (!(_iteratorAbruptCompletion = !(_step = _context7.sent).done)) {\n            _context7.next = 17;\n            break;\n          }\n          ruta = _step.value;\n          _context7.next = 10;\n          return _getChild.call(_RutaController, ruta.id);\n        case 10:\n          ruta.rutas = _context7.sent;\n          if (!ruta.rutas) {\n            _context7.next = 14;\n            break;\n          }\n          _context7.next = 14;\n          return _getChildren.call(_RutaController, ruta.rutas);\n        case 14:\n          _iteratorAbruptCompletion = false;\n          _context7.next = 4;\n          break;\n        case 17:\n          _context7.next = 23;\n          break;\n        case 19:\n          _context7.prev = 19;\n          _context7.t0 = _context7[\"catch\"](2);\n          _didIteratorError = true;\n          _iteratorError = _context7.t0;\n        case 23:\n          _context7.prev = 23;\n          _context7.prev = 24;\n          if (!(_iteratorAbruptCompletion && _iterator[\"return\"] != null)) {\n            _context7.next = 28;\n            break;\n          }\n          _context7.next = 28;\n          return _iterator[\"return\"]();\n        case 28:\n          _context7.prev = 28;\n          if (!_didIteratorError) {\n            _context7.next = 31;\n            break;\n          }\n          throw _iteratorError;\n        case 31:\n          return _context7.finish(28);\n        case 32:\n          return _context7.finish(23);\n        case 33:\n          return _context7.abrupt(\"return\", parents);\n        case 34:\n        case \"end\":\n          return _context7.stop();\n      }\n    }, _callee7, null, [[2, 19, 23, 33], [24,, 28, 32]]);\n  }));\n  return _getChildren3.apply(this, arguments);\n}\nfunction _getChild(_x14) {\n  return _getChild3.apply(this, arguments);\n}\nfunction _getChild3() {\n  _getChild3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee8(id) {\n    var child;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee8$(_context8) {\n      while (1) switch (_context8.prev = _context8.next) {\n        case 0:\n          _context8.next = 2;\n          return _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Ruta.findAll({\n            include: [{\n              model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Rol,\n              attributes: []\n            }],\n            where: {\n              id_ruta_padre: id\n            },\n            order: ['orden']\n          });\n        case 2:\n          child = _context8.sent;\n          return _context8.abrupt(\"return\", child);\n        case 4:\n        case \"end\":\n          return _context8.stop();\n      }\n    }, _callee8);\n  }));\n  return _getChild3.apply(this, arguments);\n}\n\n\n//# sourceURL=webpack://api-sic/./app/controllers/RutaController.mjs?");

/***/ }),

/***/ "./app/controllers/ServicioController.mjs":
/*!************************************************!*\
  !*** ./app/controllers/ServicioController.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ServicioController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/VerifyModel.mjs */ \"./app/utils/VerifyModel.mjs\");\n\n\n\n\n\n\n\n\nvar ServicioController = /*#__PURE__*/function () {\n  function ServicioController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, ServicioController);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(ServicioController, null, [{\n    key: \"index\",\n    value: function () {\n      var _index = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee(req, res) {\n        var servicios;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Servicio.findAll({\n                include: [{\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.TipoServicio\n                }]\n              });\n            case 2:\n              servicios = _context.sent;\n              return _context.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].HTTP_OK).json(servicios));\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function index(_x, _x2) {\n        return _index.apply(this, arguments);\n      }\n      return index;\n    }()\n  }, {\n    key: \"listTipoServicio\",\n    value: function () {\n      var _listTipoServicio = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee2(req, res) {\n        var tipoServicios;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.TipoServicio.findAll({});\n            case 2:\n              tipoServicios = _context2.sent;\n              return _context2.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].HTTP_OK).json(tipoServicios));\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      function listTipoServicio(_x3, _x4) {\n        return _listTipoServicio.apply(this, arguments);\n      }\n      return listTipoServicio;\n    }()\n  }, {\n    key: \"create\",\n    value: function () {\n      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee3(req, res) {\n        var _req$body, nombre, descripcion, precioBase, costo, idTipoServicio, t, newServicio;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, precioBase = _req$body.precio_base, costo = _req$body.costo, idTipoServicio = _req$body.id_tipo_servicio;\n              _context3.next = 3;\n              return _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection().transaction();\n            case 3:\n              t = _context3.sent;\n              _context3.prev = 4;\n              _context3.next = 7;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.TipoServicio, idTipoServicio, 'Tipo de servicio no encontrado');\n            case 7:\n              _context3.next = 9;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Servicio.create({\n                nombre: nombre,\n                descripcion: descripcion,\n                precio_base: precioBase,\n                costo: costo,\n                id_tipo_servicio: idTipoServicio,\n                fecha: new Date()\n              }, {\n                transaction: t\n              });\n            case 9:\n              newServicio = _context3.sent;\n              _context3.next = 12;\n              return t.commit();\n            case 12:\n              return _context3.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].HTTP_OK).json(newServicio));\n            case 15:\n              _context3.prev = 15;\n              _context3.t0 = _context3[\"catch\"](4);\n              t.rollback();\n              throw _context3.t0;\n            case 19:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3, null, [[4, 15]]);\n      }));\n      function create(_x5, _x6) {\n        return _create.apply(this, arguments);\n      }\n      return create;\n    }()\n  }, {\n    key: \"show\",\n    value: function () {\n      var _show = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee4(req, res) {\n        var servicio;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee4$(_context4) {\n          while (1) switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Servicio.findByPk(req.params.id, {});\n            case 2:\n              servicio = _context4.sent;\n              return _context4.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].HTTP_OK).json(servicio));\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }, _callee4);\n      }));\n      function show(_x7, _x8) {\n        return _show.apply(this, arguments);\n      }\n      return show;\n    }()\n  }, {\n    key: \"update\",\n    value: function () {\n      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee5(req, res) {\n        var _req$body2, nombre, descripcion, precioBase, costo, idTipoServicio, t, newServicio;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee5$(_context5) {\n          while (1) switch (_context5.prev = _context5.next) {\n            case 0:\n              _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, precioBase = _req$body2.precio_base, costo = _req$body2.costo, idTipoServicio = _req$body2.id_tipo_servicio;\n              _context5.next = 3;\n              return _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection().transaction();\n            case 3:\n              t = _context5.sent;\n              _context5.prev = 4;\n              _context5.next = 7;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.TipoServicio, idTipoServicio, 'Tipo de servicio no encontrado');\n            case 7:\n              _context5.next = 9;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Servicio.update({\n                nombre: nombre,\n                descripcion: descripcion,\n                precio_base: precioBase,\n                costo: costo,\n                id_tipo_servicio: idTipoServicio,\n                fecha: new Date()\n              }, {\n                where: {\n                  id: req.params.id\n                },\n                transaction: t\n              });\n            case 9:\n              newServicio = _context5.sent;\n              _context5.next = 12;\n              return t.commit();\n            case 12:\n              return _context5.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].HTTP_OK).json(newServicio));\n            case 15:\n              _context5.prev = 15;\n              _context5.t0 = _context5[\"catch\"](4);\n              t.rollback();\n              throw _context5.t0;\n            case 19:\n            case \"end\":\n              return _context5.stop();\n          }\n        }, _callee5, null, [[4, 15]]);\n      }));\n      function update(_x9, _x10) {\n        return _update.apply(this, arguments);\n      }\n      return update;\n    }()\n  }, {\n    key: \"getById\",\n    value: function () {\n      var _getById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee6(req, res) {\n        var servicio;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee6$(_context6) {\n          while (1) switch (_context6.prev = _context6.next) {\n            case 0:\n              _context6.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Servicio.findByPk(req.params.id, {\n                include: [{\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.TipoServicio\n                }]\n              });\n            case 2:\n              servicio = _context6.sent;\n              return _context6.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].HTTP_OK).json(servicio));\n            case 4:\n            case \"end\":\n              return _context6.stop();\n          }\n        }, _callee6);\n      }));\n      function getById(_x11, _x12) {\n        return _getById.apply(this, arguments);\n      }\n      return getById;\n    }()\n  }, {\n    key: \"destroy\",\n    value: function () {\n      var _destroy = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee7(req, res) {\n        var servicio;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee7$(_context7) {\n          while (1) switch (_context7.prev = _context7.next) {\n            case 0:\n              _context7.next = 2;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Servicio.findByPk(req.params.id);\n            case 2:\n              servicio = _context7.sent;\n              _context7.next = 5;\n              return servicio.destroy();\n            case 5:\n              return _context7.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].HTTP_OK).json(servicio));\n            case 6:\n            case \"end\":\n              return _context7.stop();\n          }\n        }, _callee7);\n      }));\n      function destroy(_x13, _x14) {\n        return _destroy.apply(this, arguments);\n      }\n      return destroy;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/controllers/ServicioController.mjs?");

/***/ }),

/***/ "./app/controllers/TipoRolController.mjs":
/*!***********************************************!*\
  !*** ./app/controllers/TipoRolController.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TipoRolController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n/* harmony import */ var _models_TipoRol_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/TipoRol.mjs */ \"./app/models/TipoRol.mjs\");\n\n\n\n\n\n\nvar TipoRolController = /*#__PURE__*/function () {\n  function TipoRolController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, TipoRolController);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(TipoRolController, null, [{\n    key: \"index\",\n    value: function () {\n      var _index = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee(req, res) {\n        var tipoRoles;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _models_TipoRol_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findAll();\n            case 2:\n              tipoRoles = _context.sent;\n              return _context.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].HTTP_OK).json(tipoRoles));\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function index(_x, _x2) {\n        return _index.apply(this, arguments);\n      }\n      return index;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/controllers/TipoRolController.mjs?");

/***/ }),

/***/ "./app/controllers/UsuarioController.mjs":
/*!***********************************************!*\
  !*** ./app/controllers/UsuarioController.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UsuarioController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment-timezone */ \"moment-timezone\");\n/* harmony import */ var speakeasy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! speakeasy */ \"speakeasy\");\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! qrcode */ \"qrcode\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _handlers_BadRequestException_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../handlers/BadRequestException.mjs */ \"./handlers/BadRequestException.mjs\");\n/* harmony import */ var _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../handlers/NotFoundExeption.mjs */ \"./handlers/NotFoundExeption.mjs\");\n/* harmony import */ var _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../handlers/UnprocessableEntityException.mjs */ \"./handlers/UnprocessableEntityException.mjs\");\n/* harmony import */ var _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/mailer.mjs */ \"./app/services/mailer.mjs\");\n/* harmony import */ var _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/VerifyModel.mjs */ \"./app/utils/VerifyModel.mjs\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../models/MetodoAutenticacionUsuario.mjs */ \"./app/models/MetodoAutenticacionUsuario.mjs\");\n/* harmony import */ var _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/Auth.mjs */ \"./app/utils/Auth.mjs\");\n/* harmony import */ var _services_security_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/security.mjs */ \"./app/services/security.mjs\");\n/* harmony import */ var _models_MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../models/MetodoAutenticacion.mjs */ \"./app/models/MetodoAutenticacion.mjs\");\n/* harmony import */ var _services_getRols_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/getRols.mjs */ \"./app/services/getRols.mjs\");\n/* harmony import */ var _handlers_ForbiddenException_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../handlers/ForbiddenException.mjs */ \"./handlers/ForbiddenException.mjs\");\n\n\n\n\n\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar UsuarioController = /*#__PURE__*/function () {\n  function UsuarioController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__(this, UsuarioController);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__(UsuarioController, null, [{\n    key: \"index\",\n    value: function () {\n      var _index = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee(req, res) {\n        var _req$query, _req$query$page, page, _req$query$per_page, perPage, _req$query$paginacion, paginacion, email, habilitado, filters, options, _yield$Usuario$findAn, usuarios, totalRows;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$per_page = _req$query.per_page, perPage = _req$query$per_page === void 0 ? 10 : _req$query$per_page, _req$query$paginacion = _req$query.paginacion, paginacion = _req$query$paginacion === void 0 ? 'true' : _req$query$paginacion, email = _req$query.email, habilitado = _req$query.habilitado;\n              filters = {};\n              options = {};\n              if (!(paginacion === 'true')) {\n                _context.next = 11;\n                break;\n              }\n              _context.next = 6;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"].isValid(perPage, 'cantidad por pagina debe ser de tipo entero');\n            case 6:\n              _context.next = 8;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"].isValid(page, 'pagina debe ser de tipo entero');\n            case 8:\n              options.offset = perPage * (page - 1);\n              options.limit = Number(perPage);\n              options.distinct = true;\n            case 11:\n              if (email) {\n                filters.email = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__({}, sequelize__WEBPACK_IMPORTED_MODULE_7__.Op.iLike, \"%\".concat(email || '', \"%\"));\n              }\n              if (habilitado) {\n                filters.is_suspended = !(habilitado === 'true');\n              }\n              _context.next = 15;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Usuario.findAndCountAll(_objectSpread(_objectSpread({}, options), {}, {\n                attributes: {\n                  exclude: ['password', 'token_valid_after', 'two_factor_status']\n                },\n                // include: [Rol, Perfil],\n                include: [{\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Rol,\n                  through: {\n                    attributes: []\n                  }\n                }, {\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Perfil,\n                  through: {\n                    attributes: []\n                  }\n                }],\n                order: ['id'],\n                where: filters\n              }));\n            case 15:\n              _yield$Usuario$findAn = _context.sent;\n              usuarios = _yield$Usuario$findAn.rows;\n              totalRows = _yield$Usuario$findAn.count;\n              if (paginacion === 'true') {\n                res.set({\n                  total_rows: Number(totalRows),\n                  page: Number(page),\n                  per_page: Number(perPage)\n                });\n              }\n              return _context.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).json(usuarios));\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function index(_x, _x2) {\n        return _index.apply(this, arguments);\n      }\n      return index;\n    }()\n  }, {\n    key: \"store\",\n    value: function () {\n      var _store = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee3(req, res) {\n        var connection, t, _req$body, perfiles, roles, email, password, isSuspended, salt, passwordCrypt, userRoles, userProfiles, emailExist, index, _index2, usuario, idUsuario, newToken, token, header, body;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              connection = _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].connection();\n              _context3.next = 3;\n              return connection.transaction();\n            case 3:\n              t = _context3.sent;\n              _req$body = req.body, perfiles = _req$body.perfiles, roles = _req$body.roles, email = _req$body.email, password = _req$body.password;\n              isSuspended = process.env.DISABLE_TWO_FACTOR_AUTH === 'false';\n              salt = bcryptjs__WEBPACK_IMPORTED_MODULE_6__.genSaltSync();\n              passwordCrypt = bcryptjs__WEBPACK_IMPORTED_MODULE_6__.hashSync(password, salt);\n              _context3.next = 10;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Usuario.findOne({\n                where: {\n                  email: email\n                }\n              });\n            case 10:\n              emailExist = _context3.sent;\n              if (!emailExist) {\n                _context3.next = 13;\n                break;\n              }\n              throw new _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"]('Correo electronico ya existe');\n            case 13:\n              _context3.prev = 13;\n              if (!perfiles) {\n                _context3.next = 25;\n                break;\n              }\n              index = 0;\n            case 16:\n              if (!(index < perfiles.length)) {\n                _context3.next = 22;\n                break;\n              }\n              _context3.next = 19;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Perfil, perfiles[index], \"No se ha encontrado el perfil con id \".concat(perfiles[index]));\n            case 19:\n              index++;\n              _context3.next = 16;\n              break;\n            case 22:\n              _context3.next = 24;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Perfil.findAll({\n                where: {\n                  id: perfiles\n                }\n              });\n            case 24:\n              userProfiles = _context3.sent;\n            case 25:\n              if (!roles) {\n                _context3.next = 36;\n                break;\n              }\n              _index2 = 0;\n            case 27:\n              if (!(_index2 < roles.length)) {\n                _context3.next = 33;\n                break;\n              }\n              _context3.next = 30;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Rol, roles[_index2], \"No se ha encontrado el rol con id \".concat(roles[_index2]));\n            case 30:\n              _index2++;\n              _context3.next = 27;\n              break;\n            case 33:\n              _context3.next = 35;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Rol.findAll({\n                where: {\n                  id: roles\n                }\n              });\n            case 35:\n              userRoles = _context3.sent;\n            case 36:\n              _context3.next = 38;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Usuario.create({\n                email: email,\n                password: passwordCrypt,\n                is_suspended: isSuspended,\n                two_factor_status: \"false\" === 'true',\n                verified: true\n              }, {\n                transaction: t\n              });\n            case 38:\n              usuario = _context3.sent;\n              _context3.next = 41;\n              return perfiles.forEach( /*#__PURE__*/function () {\n                var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee2(perfil) {\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee2$(_context2) {\n                    while (1) switch (_context2.prev = _context2.next) {\n                      case 0:\n                        _context2.next = 2;\n                        return _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.UsuarioPerfil.create({\n                          id_usuario: usuario.id,\n                          id_perfil: perfil\n                        }, {\n                          transaction: t\n                        });\n                      case 2:\n                      case \"end\":\n                        return _context2.stop();\n                    }\n                  }, _callee2);\n                }));\n                return function (_x5) {\n                  return _ref.apply(this, arguments);\n                };\n              }());\n            case 41:\n              // await usuario.addRols(roles, { transaction: t });\n              idUsuario = usuario.id;\n              _context3.next = 44;\n              return _services_security_mjs__WEBPACK_IMPORTED_MODULE_21__[\"default\"].generateTwoFactorAuthCode(usuario.email);\n            case 44:\n              newToken = _context3.sent;\n              _context3.next = 47;\n              return _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_19__[\"default\"].create({\n                id_usuario: usuario.id,\n                id_metodo: 1,\n                is_primary: true,\n                secret_key: newToken.secret_code,\n                verified: true\n              }, {\n                transaction: t\n              });\n            case 47:\n              _context3.next = 49;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_20__[\"default\"].createToken({\n                idUsuario: idUsuario\n              }, \"clave_secreta\");\n            case 49:\n              token = _context3.sent;\n              header = [{\n                tagName: 'mj-button',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  'border-radius': '99px'\n                },\n                content: \"Hola \".concat(usuario.email)\n              }];\n              body = [{\n                tagName: 'mj-button',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  href: \"\".concat(\"https://google.com\", \"/verificar/\").concat(token)\n                },\n                content: 'VERIFICAR MI CUENTA'\n              }]; // await Mailer.sendMail({\n              //   email: usuario.email,\n              //   header,\n              //   subject: 'Verificacion de correo electronico',\n              //   message: 'Para verificar tu cuenta debes de hacer click en el siguiente enlace:',\n              //   body,\n              // });\n              _context3.next = 54;\n              return t.commit();\n            case 54:\n              return _context3.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_CREATED).json({\n                id: usuario.id,\n                email: usuario.email,\n                perfiles: userProfiles,\n                roles: userRoles\n              }));\n            case 57:\n              _context3.prev = 57;\n              _context3.t0 = _context3[\"catch\"](13);\n              _context3.next = 61;\n              return t.rollback();\n            case 61:\n              throw _context3.t0;\n            case 62:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3, null, [[13, 57]]);\n      }));\n      function store(_x3, _x4) {\n        return _store.apply(this, arguments);\n      }\n      return store;\n    }()\n  }, {\n    key: \"update\",\n    value: function () {\n      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee4(req, res) {\n        var _req$body2, email, _req$body2$roles, roles, _req$body2$perfiles, perfiles, dataToUpdate, usuario;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee4$(_context4) {\n          while (1) switch (_context4.prev = _context4.next) {\n            case 0:\n              _req$body2 = req.body, email = _req$body2.email, _req$body2$roles = _req$body2.roles, roles = _req$body2$roles === void 0 ? [] : _req$body2$roles, _req$body2$perfiles = _req$body2.perfiles, perfiles = _req$body2$perfiles === void 0 ? [] : _req$body2$perfiles;\n              dataToUpdate = {};\n              if (email !== null && email !== '') {\n                dataToUpdate.email = email;\n              }\n              _context4.next = 5;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Usuario, req.params.id, \"No se ha encontrado el usuario con id \".concat(req.params.id));\n            case 5:\n              usuario = _context4.sent;\n              usuario.update(dataToUpdate, {\n                where: {\n                  id: req.params.id\n                },\n                returning: ['id', 'email', 'is_suspended']\n              });\n              _context4.next = 9;\n              return usuario.setRols(roles);\n            case 9:\n              _context4.next = 11;\n              return usuario.setPerfils(perfiles);\n            case 11:\n              return _context4.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).json(usuario));\n            case 12:\n            case \"end\":\n              return _context4.stop();\n          }\n        }, _callee4);\n      }));\n      function update(_x6, _x7) {\n        return _update.apply(this, arguments);\n      }\n      return update;\n    }()\n  }, {\n    key: \"destroy\",\n    value: function () {\n      var _destroy = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee5(req, res) {\n        var id, usuario;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee5$(_context5) {\n          while (1) switch (_context5.prev = _context5.next) {\n            case 0:\n              id = req.params.id;\n              _context5.next = 3;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Usuario, id, \"No se ha encontrado el usuario con id \".concat(id));\n            case 3:\n              usuario = _context5.sent;\n              _context5.next = 6;\n              return usuario.update({\n                is_suspended: !usuario.is_suspended\n              });\n            case 6:\n              return _context5.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).json({\n                message: usuario.is_suspended ? 'Usuario deshabilitado' : 'Usuario habilitado'\n              }));\n            case 7:\n            case \"end\":\n              return _context5.stop();\n          }\n        }, _callee5);\n      }));\n      function destroy(_x8, _x9) {\n        return _destroy.apply(this, arguments);\n      }\n      return destroy;\n    }()\n  }, {\n    key: \"show\",\n    value: function () {\n      var _show = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee6(req, res) {\n        var id, user;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee6$(_context6) {\n          while (1) switch (_context6.prev = _context6.next) {\n            case 0:\n              id = req.params.id;\n              _context6.next = 3;\n              return _utils_VerifyModel_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"].exist(_models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Usuario, id, \"No se ha encontrado el usuario con id \".concat(id), {\n                include: [{\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Perfil,\n                  through: {\n                    attributes: []\n                  }\n                }, {\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Rol,\n                  through: {\n                    attributes: []\n                  }\n                }]\n              });\n            case 3:\n              user = _context6.sent;\n              // const { Perfils: perfiles, Rols: roles, ...usuario } = user.dataValues;\n              res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).json(user);\n            case 5:\n            case \"end\":\n              return _context6.stop();\n          }\n        }, _callee6);\n      }));\n      function show(_x10, _x11) {\n        return _show.apply(this, arguments);\n      }\n      return show;\n    }()\n  }, {\n    key: \"updatePassword\",\n    value: function () {\n      var _updatePassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee7(req, res) {\n        var _req$body3, passwordActual, password, confirmPassword, salt, passwordCrypt, header, refreshToken, roles, token;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee7$(_context7) {\n          while (1) switch (_context7.prev = _context7.next) {\n            case 0:\n              _req$body3 = req.body, passwordActual = _req$body3.password_actual, password = _req$body3.password, confirmPassword = _req$body3.confirm_password;\n              if (bcryptjs__WEBPACK_IMPORTED_MODULE_6__.compareSync(passwordActual, req.usuario.password)) {\n                _context7.next = 3;\n                break;\n              }\n              throw new _handlers_ForbiddenException_mjs__WEBPACK_IMPORTED_MODULE_24__[\"default\"]('La contraseña proporcionada no es correcta');\n            case 3:\n              if (!(passwordActual === password)) {\n                _context7.next = 5;\n                break;\n              }\n              throw new _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"]('La nueva contraseña no puede ser igual que la anterior');\n            case 5:\n              if (!(password !== confirmPassword)) {\n                _context7.next = 7;\n                break;\n              }\n              throw new _handlers_BadRequestException_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"]('Las contraseñas no coinciden');\n            case 7:\n              salt = bcryptjs__WEBPACK_IMPORTED_MODULE_6__.genSaltSync();\n              passwordCrypt = bcryptjs__WEBPACK_IMPORTED_MODULE_6__.hashSync(password, salt);\n              _context7.next = 11;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Usuario.update({\n                password: passwordCrypt,\n                token_valid_after: moment_timezone__WEBPACK_IMPORTED_MODULE_8__().subtract(5, 's').tz('America/El_Salvador').format()\n              }, {\n                where: {\n                  id: req.usuario.id\n                }\n              });\n            case 11:\n              header = [];\n              _context7.next = 14;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"].sendMail({\n                email: req.usuario.email,\n                header: header,\n                subject: 'Cambio de contraseña',\n                message: 'Constraseña modificada'\n              });\n            case 14:\n              _context7.next = 16;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_20__[\"default\"].refresh_token(req.usuario);\n            case 16:\n              refreshToken = _context7.sent;\n              _context7.next = 19;\n              return _services_getRols_mjs__WEBPACK_IMPORTED_MODULE_23__[\"default\"].roles(req.usuario.id);\n            case 19:\n              roles = _context7.sent;\n              _context7.next = 22;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_20__[\"default\"].createToken({\n                roles: roles,\n                user: req.usuario\n              }, \"clave_secreta\");\n            case 22:\n              token = _context7.sent;\n              return _context7.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).json({\n                message: 'Contraseña actualizada con exito',\n                token: token,\n                refreshToken: refreshToken\n              }));\n            case 24:\n            case \"end\":\n              return _context7.stop();\n          }\n        }, _callee7);\n      }));\n      function updatePassword(_x12, _x13) {\n        return _updatePassword.apply(this, arguments);\n      }\n      return updatePassword;\n    }()\n  }, {\n    key: \"updateEmail\",\n    value: function () {\n      var _updateEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee8(req, res) {\n        var _req$body4, email, password, emailExist, message, usuario, refreshToken, roles, token;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee8$(_context8) {\n          while (1) switch (_context8.prev = _context8.next) {\n            case 0:\n              _req$body4 = req.body, email = _req$body4.email, password = _req$body4.password;\n              /** Validacion que el correo ingresado no sea igual al correo actual */\n              if (!(email === req.usuario.email)) {\n                _context8.next = 3;\n                break;\n              }\n              throw new _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"]('El correo no puede ser igual al anterior');\n            case 3:\n              if (bcryptjs__WEBPACK_IMPORTED_MODULE_6__.compareSync(password, req.usuario.password)) {\n                _context8.next = 5;\n                break;\n              }\n              throw new _handlers_BadRequestException_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"]('La contraseña proporcionada no es correcta');\n            case 5:\n              _context8.next = 7;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Usuario.findOne({\n                where: {\n                  email: email\n                }\n              });\n            case 7:\n              emailExist = _context8.sent;\n              if (!emailExist) {\n                _context8.next = 10;\n                break;\n              }\n              throw new _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"]('El correo ya se encuentra en uso');\n            case 10:\n              message = \"\\n      Estimado usuario se le comunica que el correo: \".concat(req.usuario.email, \"\\n        ha sido cambiado satisfactoriamente.\\n        Desde este momento \").concat(email, \"\\n    manejar\\xE1 la cuenta en donde solicito el cambio\");\n              _context8.next = 13;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"].sendMail({\n                email: email,\n                header: [],\n                message: message,\n                subject: 'Cambio de email'\n              });\n            case 13:\n              _context8.next = 15;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_18__.Usuario.findOne({\n                where: {\n                  id: req.usuario.id\n                },\n                attributes: ['id', 'email', 'last_login', 'two_factor_status']\n              });\n            case 15:\n              usuario = _context8.sent;\n              _context8.next = 18;\n              return usuario.update({\n                email: email,\n                token_valid_after: moment_timezone__WEBPACK_IMPORTED_MODULE_8__().tz('America/El_Salvador').format()\n              }, {\n                returning: true\n              });\n            case 18:\n              _context8.next = 20;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_20__[\"default\"].refresh_token(req.usuario);\n            case 20:\n              refreshToken = _context8.sent;\n              _context8.next = 23;\n              return _services_getRols_mjs__WEBPACK_IMPORTED_MODULE_23__[\"default\"].roles(req.usuario.id);\n            case 23:\n              roles = _context8.sent;\n              _context8.next = 26;\n              return _utils_Auth_mjs__WEBPACK_IMPORTED_MODULE_20__[\"default\"].createToken({\n                roles: roles,\n                user: usuario\n              }, \"clave_secreta\");\n            case 26:\n              token = _context8.sent;\n              return _context8.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).json({\n                message: 'Correo electronico actualizado con exito',\n                token: token,\n                refreshToken: refreshToken\n              }));\n            case 28:\n            case \"end\":\n              return _context8.stop();\n          }\n        }, _callee8);\n      }));\n      function updateEmail(_x14, _x15) {\n        return _updateEmail.apply(this, arguments);\n      }\n      return updateEmail;\n    }()\n  }, {\n    key: \"storeMethodUser\",\n    value: function () {\n      var _storeMethodUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee9(req, res) {\n        var idMetodo, token, defaults, _yield$MetodoAutentic, _yield$MetodoAutentic2, authMethod, created, code, header;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee9$(_context9) {\n          while (1) switch (_context9.prev = _context9.next) {\n            case 0:\n              idMetodo = req.body.id_method;\n              _context9.next = 3;\n              return _services_security_mjs__WEBPACK_IMPORTED_MODULE_21__[\"default\"].generateTwoFactorAuthCode(req.usuario.email);\n            case 3:\n              token = _context9.sent;\n              defaults = {\n                is_primary: false,\n                temporal_key: token.secret_code,\n                verified: false\n              };\n              _context9.next = 7;\n              return _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_19__[\"default\"].findOrCreate({\n                where: {\n                  id_usuario: req.usuario.id,\n                  id_metodo: idMetodo\n                },\n                defaults: defaults\n              });\n            case 7:\n              _yield$MetodoAutentic = _context9.sent;\n              _yield$MetodoAutentic2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__(_yield$MetodoAutentic, 2);\n              authMethod = _yield$MetodoAutentic2[0];\n              created = _yield$MetodoAutentic2[1];\n              if (created) {\n                _context9.next = 14;\n                break;\n              }\n              _context9.next = 14;\n              return authMethod.update({\n                temporal_key: token.secret_code\n              });\n            case 14:\n              if (!(Number(idMetodo) === 2)) {\n                _context9.next = 21;\n                break;\n              }\n              _context9.t0 = res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK);\n              _context9.next = 18;\n              return (0,qrcode__WEBPACK_IMPORTED_MODULE_10__.toDataURL)(token.qrCode);\n            case 18:\n              _context9.t1 = _context9.sent;\n              _context9.t2 = {\n                message: 'Favor valide el nuevo metodo de autenticacion, escanee el codigo qr',\n                codigoQr: _context9.t1\n              };\n              return _context9.abrupt(\"return\", _context9.t0.send.call(_context9.t0, _context9.t2));\n            case 21:\n              code = speakeasy__WEBPACK_IMPORTED_MODULE_9__.totp({\n                secret: authMethod.temporal_key,\n                encoding: 'base32',\n                window: Number(process.env.TIME_BASED_TOKEN_2FA),\n                step: 10\n              });\n              header = [{\n                tagName: 'mj-button',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  'border-radius': '99px'\n                },\n                content: 'El codigo de verificacion es:'\n              }];\n              _context9.next = 25;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"].sendMail({\n                email: req.usuario.email,\n                header: header,\n                subject: 'Codigo de verificación de usuario',\n                message: code\n              });\n            case 25:\n              return _context9.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).send({\n                message: 'Favor valide el nuevo metodo de autenticación, revise su correo electrónico'\n              }));\n            case 26:\n            case \"end\":\n              return _context9.stop();\n          }\n        }, _callee9);\n      }));\n      function storeMethodUser(_x16, _x17) {\n        return _storeMethodUser.apply(this, arguments);\n      }\n      return storeMethodUser;\n    }()\n  }, {\n    key: \"authMethodVerification\",\n    value: function () {\n      var _authMethodVerification = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee10(req, res) {\n        var _req$body5, idMetodo, code, methodUser, verifyCodeParams, isValidCode, header;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee10$(_context10) {\n          while (1) switch (_context10.prev = _context10.next) {\n            case 0:\n              _req$body5 = req.body, idMetodo = _req$body5.id_method, code = _req$body5.code;\n              _context10.next = 3;\n              return _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_19__[\"default\"].findOne({\n                where: {\n                  id_usuario: req.usuario.id,\n                  id_metodo: idMetodo\n                }\n              });\n            case 3:\n              methodUser = _context10.sent;\n              if (methodUser) {\n                _context10.next = 6;\n                break;\n              }\n              throw new _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"]('El usuario no tiene este metodo de autenticacion asociado');\n            case 6:\n              verifyCodeParams = {\n                code: code,\n                secretKey: methodUser.temporal_key\n              };\n              if (Number(idMetodo) === 1) verifyCodeParams.time = process.env.TIME_BASED_TOKEN_2FA;\n              _context10.next = 10;\n              return _services_security_mjs__WEBPACK_IMPORTED_MODULE_21__[\"default\"].verifyTwoFactorAuthCode(verifyCodeParams);\n            case 10:\n              isValidCode = _context10.sent;\n              if (isValidCode) {\n                _context10.next = 13;\n                break;\n              }\n              throw new _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"]('El codigo proporcionado no es valido');\n            case 13:\n              _context10.next = 15;\n              return methodUser.update({\n                secret_key: methodUser.temporal_key,\n                verified: true\n              });\n            case 15:\n              header = [{\n                tagName: 'mj-text',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  'border-radius': '99px'\n                },\n                content: 'Se ha cambiado el metodo de autenticación'\n              }];\n              _context10.next = 18;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"].sendMail({\n                email: req.usuario.email,\n                subject: 'Metodo de autenticacion cambiado.',\n                header: header\n              });\n            case 18:\n              return _context10.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).send({\n                message: 'Se ha modificado el metodo de autenticación con exito!'\n              }));\n            case 19:\n            case \"end\":\n              return _context10.stop();\n          }\n        }, _callee10);\n      }));\n      function authMethodVerification(_x18, _x19) {\n        return _authMethodVerification.apply(this, arguments);\n      }\n      return authMethodVerification;\n    }()\n  }, {\n    key: \"updatePrimaryMethod\",\n    value: function () {\n      var _updatePrimaryMethod = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee11(req, res) {\n        var idMethod, idUser, authMethod, header;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee11$(_context11) {\n          while (1) switch (_context11.prev = _context11.next) {\n            case 0:\n              idMethod = req.params.id_method;\n              idUser = req.usuario.id;\n              _context11.next = 4;\n              return _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_19__[\"default\"].findOne({\n                where: {\n                  id_usuario: idUser,\n                  id_metodo: idMethod\n                }\n              });\n            case 4:\n              authMethod = _context11.sent;\n              if (authMethod !== null && authMethod !== void 0 && authMethod.verified) {\n                _context11.next = 7;\n                break;\n              }\n              throw new _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"]('No es posible seleccionar este método de autenticación debido a que no esta verificado');\n            case 7:\n              _context11.next = 9;\n              return _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_19__[\"default\"].update({\n                is_primary: false\n              }, {\n                where: {\n                  id: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__({}, sequelize__WEBPACK_IMPORTED_MODULE_7__.Op.not, authMethod.id),\n                  id_usuario: req.usuario.id\n                }\n              });\n            case 9:\n              _context11.next = 11;\n              return authMethod.update({\n                is_primary: true\n              });\n            case 11:\n              header = [{\n                tagName: 'mj-text',\n                attributes: {\n                  width: '80%',\n                  padding: '5px 10px',\n                  'font-size': '20px',\n                  'background-color': '#175efb',\n                  'border-radius': '99px'\n                },\n                content: 'Se ha cambiado el método de autenticación primario'\n              }];\n              _context11.next = 14;\n              return _services_mailer_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"].sendMail({\n                email: req.usuario.email,\n                subject: 'Alerta de actualización de cuenta.',\n                header: header\n              });\n            case 14:\n              return _context11.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).send({\n                message: 'Solicitud procesada con exito!'\n              }));\n            case 15:\n            case \"end\":\n              return _context11.stop();\n          }\n        }, _callee11);\n      }));\n      function updatePrimaryMethod(_x20, _x21) {\n        return _updatePrimaryMethod.apply(this, arguments);\n      }\n      return updatePrimaryMethod;\n    }()\n  }, {\n    key: \"getMetodosUsuario\",\n    value: function () {\n      var _getMetodosUsuario = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.mark(function _callee12(req, res) {\n        var methods;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__.wrap(function _callee12$(_context12) {\n          while (1) switch (_context12.prev = _context12.next) {\n            case 0:\n              _context12.next = 2;\n              return _models_MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_22__[\"default\"].findAll({\n                include: [{\n                  model: _models_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n                  required: false,\n                  where: {\n                    id_usuario: req.usuario.id\n                  }\n                }]\n              });\n            case 2:\n              methods = _context12.sent;\n              return _context12.abrupt(\"return\", res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].HTTP_OK).json(methods));\n            case 4:\n            case \"end\":\n              return _context12.stop();\n          }\n        }, _callee12);\n      }));\n      function getMetodosUsuario(_x22, _x23) {\n        return _getMetodosUsuario.apply(this, arguments);\n      }\n      return getMetodosUsuario;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/controllers/UsuarioController.mjs?");

/***/ }),

/***/ "./app/middlewares/Auth.mjs":
/*!**********************************!*\
  !*** ./app/middlewares/Auth.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../handlers/NoAuthException.mjs */ \"./handlers/NoAuthException.mjs\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../handlers/Handler.mjs */ \"./handlers/Handler.mjs\");\n\n\n\n\n\n\n\n\n// eslint-disable-next-line consistent-return\nvar Auth = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee(req, res, next) {\n    var authorization, token, _jwt$verify, user, iat, fechaCreacionToken, usuario, fechaValidacionToken;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          authorization = req.headers.authorization;\n          if (authorization) {\n            _context.next = 4;\n            break;\n          }\n          throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        case 4:\n          authorization = authorization.split(' ');\n          if (!(authorization.length < 2)) {\n            _context.next = 7;\n            break;\n          }\n          throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        case 7:\n          token = authorization[1];\n          _jwt$verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.verify(token, \"clave_secreta\"), user = _jwt$verify.user, iat = _jwt$verify.iat;\n          fechaCreacionToken = iat * 1000;\n          _context.next = 12;\n          return _models_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Usuario.findOne({\n            where: {\n              id: user.id,\n              is_suspended: false\n            }\n          });\n        case 12:\n          usuario = _context.sent;\n          if (usuario) {\n            _context.next = 15;\n            break;\n          }\n          throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        case 15:\n          fechaValidacionToken = moment__WEBPACK_IMPORTED_MODULE_3__(usuario.token_valid_after).valueOf();\n          if (!(fechaValidacionToken > fechaCreacionToken)) {\n            _context.next = 18;\n            break;\n          }\n          throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        case 18:\n          req.usuario = usuario;\n          next();\n          _context.next = 25;\n          break;\n        case 22:\n          _context.prev = 22;\n          _context.t0 = _context[\"catch\"](0);\n          _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].handlerError(_context.t0, req, res, next);\n        case 25:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 22]]);\n  }));\n  return function Auth(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);\n\n//# sourceURL=webpack://api-sic/./app/middlewares/Auth.mjs?");

/***/ }),

/***/ "./app/middlewares/Auth2FA.mjs":
/*!*************************************!*\
  !*** ./app/middlewares/Auth2FA.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../handlers/NoAuthException.mjs */ \"./handlers/NoAuthException.mjs\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../handlers/Handler.mjs */ \"./handlers/Handler.mjs\");\n\n\n\n\n\n\n\n\n// eslint-disable-next-line consistent-return\nvar Auth2FA = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee(req, res, next) {\n    var authorization, token, _jwt$verify, user, iat, fechaCreacionToken, usuario, fechaValidacionToken;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          authorization = req.headers.authorization;\n          if (authorization) {\n            _context.next = 4;\n            break;\n          }\n          throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        case 4:\n          token = authorization.replace('Bearer ', '');\n          _jwt$verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.verify(token, \"clave\"), user = _jwt$verify.user, iat = _jwt$verify.iat;\n          fechaCreacionToken = iat * 1000;\n          _context.next = 9;\n          return _models_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Usuario.findOne({\n            where: {\n              id: user.id,\n              is_suspended: false\n            }\n          });\n        case 9:\n          usuario = _context.sent;\n          if (usuario) {\n            _context.next = 12;\n            break;\n          }\n          throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        case 12:\n          fechaValidacionToken = moment__WEBPACK_IMPORTED_MODULE_3__(usuario.token_valid_after).valueOf();\n          if (!(fechaValidacionToken > fechaCreacionToken)) {\n            _context.next = 15;\n            break;\n          }\n          throw new _handlers_NoAuthException_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        case 15:\n          req.usuario = usuario;\n          next();\n          _context.next = 22;\n          break;\n        case 19:\n          _context.prev = 19;\n          _context.t0 = _context[\"catch\"](0);\n          _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].handlerError(_context.t0, req, res, next);\n        case 22:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 19]]);\n  }));\n  return function Auth2FA(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth2FA);\n\n//# sourceURL=webpack://api-sic/./app/middlewares/Auth2FA.mjs?");

/***/ }),

/***/ "./app/middlewares/validate.mjs":
/*!**************************************!*\
  !*** ./app/middlewares/validate.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_ajv_instance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ajv-instance.mjs */ \"./app/utils/ajv-instance.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n/* harmony import */ var _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../handlers/Handler.mjs */ \"./handlers/Handler.mjs\");\n\n\n\nfunction validate(schema) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';\n  var ajvValidate = _utils_ajv_instance_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compile(schema);\n  // eslint-disable-next-line consistent-return\n  return function (req, res, next) {\n    var valid = ajvValidate(req[type]);\n    if (!valid) {\n      var errors = ajvValidate.errors;\n      var aux = {\n        message: 'BAD REQUEST',\n        statusCode: _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].HTTP_BAD_REQUEST,\n        content: errors\n      };\n      _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logError(req, aux);\n      console.log(errors);\n      var resultError = errors.map(function (err) {\n        var respuesta = {};\n        respuesta.message = err.message;\n        return respuesta;\n      });\n      return res.status(_configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].HTTP_BAD_REQUEST).json(resultError);\n    }\n    next();\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://api-sic/./app/middlewares/validate.mjs?");

/***/ }),

/***/ "./app/middlewares/validateRole.mjs":
/*!******************************************!*\
  !*** ./app/middlewares/validateRole.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _services_security_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/security.mjs */ \"./app/services/security.mjs\");\n/* harmony import */ var _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../handlers/Handler.mjs */ \"./handlers/Handler.mjs\");\n/* harmony import */ var _handlers_ForbiddenException_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../handlers/ForbiddenException.mjs */ \"./handlers/ForbiddenException.mjs\");\n\n\n\n\n\nvar validateRole = function validateRole(ROLE) {\n  return /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee(req, res, next) {\n      var valid;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _services_security_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isGranted(req.usuario.id, ROLE);\n          case 2:\n            valid = _context.sent;\n            if (valid) next();else _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].handlerError(new _handlers_ForbiddenException_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"](), req, res, next);\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateRole);\n\n//# sourceURL=webpack://api-sic/./app/middlewares/validateRole.mjs?");

/***/ }),

/***/ "./app/models/Cliente.mjs":
/*!********************************!*\
  !*** ./app/models/Cliente.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _Venta_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Venta.mjs */ \"./app/models/Venta.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n\nvar Cliente = /*#__PURE__*/function (_psql$Model) {\n  function Cliente() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Cliente);\n    return _callSuper(this, Cliente, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(Cliente, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(Cliente, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.hasMany(_Venta_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        foreignKey: 'id_cliente'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nCliente.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  nombre: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(255),\n    allowNull: false\n  },\n  dui: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(10),\n    allowNull: false\n  },\n  email: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(255),\n    allowNull: false\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_cliente'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cliente);\n\n//# sourceURL=webpack://api-sic/./app/models/Cliente.mjs?");

/***/ }),

/***/ "./app/models/DetalleVenta.mjs":
/*!*************************************!*\
  !*** ./app/models/DetalleVenta.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.mjs */ \"./app/models/index.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n\nvar DetalleVenta = /*#__PURE__*/function (_psql$Model) {\n  function DetalleVenta() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, DetalleVenta);\n    return _callSuper(this, DetalleVenta, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(DetalleVenta, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(DetalleVenta, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsTo(_index_mjs__WEBPACK_IMPORTED_MODULE_7__.TipoPago, {\n        foreignKey: 'id_tipo_pago'\n      });\n      this.belongsTo(_index_mjs__WEBPACK_IMPORTED_MODULE_7__.Venta, {\n        foreignKey: 'id_venta'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nDetalleVenta.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  id_tipo_pago: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    allowNull: false\n  },\n  id_venta: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(20),\n    allowNull: false\n  },\n  total: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.DECIMAL,\n    allowNull: false\n  },\n  cantidad_servicios: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    allowNull: false\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_detalle_venta'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetalleVenta);\n\n//# sourceURL=webpack://api-sic/./app/models/DetalleVenta.mjs?");

/***/ }),

/***/ "./app/models/MetodoAutenticacion.mjs":
/*!********************************************!*\
  !*** ./app/models/MetodoAutenticacion.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _Usuario_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Usuario.mjs */ \"./app/models/Usuario.mjs\");\n/* harmony import */ var _MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MetodoAutenticacionUsuario.mjs */ \"./app/models/MetodoAutenticacionUsuario.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n// eslint-disable-next-line import/no-cycle\n\n\nvar MetodoAutenticacion = /*#__PURE__*/function (_psql$Model) {\n  function MetodoAutenticacion() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, MetodoAutenticacion);\n    return _callSuper(this, MetodoAutenticacion, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(MetodoAutenticacion, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(MetodoAutenticacion, [{\n    key: \"toJSON\",\n    value: function toJSON() {\n      var _this$MetodoAutentica, _this$MetodoAutentica2;\n      return {\n        id: this.id,\n        nombre: this.nombre,\n        descripcion: this.descripcion,\n        icono: this.icono,\n        is_primary: ((_this$MetodoAutentica = this.MetodoAutenticacionUsuario) === null || _this$MetodoAutentica === void 0 ? void 0 : _this$MetodoAutentica.is_primary) || false,\n        verified: (_this$MetodoAutentica2 = this.MetodoAutenticacionUsuario) === null || _this$MetodoAutentica2 === void 0 ? void 0 : _this$MetodoAutentica2.verified,\n        configured: !!this.MetodoAutenticacionUsuario\n      };\n    }\n  }], [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsToMany(_Usuario_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        through: _MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        foreignKey: 'id_metodo',\n        otherKey: 'id_usuario'\n      });\n      this.hasOne(_MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        foreignKey: 'id_metodo'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nMetodoAutenticacion.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  nombre: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING\n  },\n  descripcion: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING\n  },\n  icono: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_metodo_autenticacion'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetodoAutenticacion);\n\n//# sourceURL=webpack://api-sic/./app/models/MetodoAutenticacion.mjs?");

/***/ }),

/***/ "./app/models/MetodoAutenticacionUsuario.mjs":
/*!***************************************************!*\
  !*** ./app/models/MetodoAutenticacionUsuario.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar MetodoAutenticacionUsuario = /*#__PURE__*/function (_psql$Model) {\n  function MetodoAutenticacionUsuario() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, MetodoAutenticacionUsuario);\n    return _callSuper(this, MetodoAutenticacionUsuario, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(MetodoAutenticacionUsuario, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(MetodoAutenticacionUsuario);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nMetodoAutenticacionUsuario.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  id_usuario: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER\n  },\n  id_metodo: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER\n  },\n  secret_key: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING\n  },\n  temporal_key: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING\n  },\n  is_primary: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.BOOLEAN\n  },\n  verified: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.BOOLEAN\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_metodo_autenticacion_usuario'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetodoAutenticacionUsuario);\n\n//# sourceURL=webpack://api-sic/./app/models/MetodoAutenticacionUsuario.mjs?");

/***/ }),

/***/ "./app/models/Perfil.mjs":
/*!*******************************!*\
  !*** ./app/models/Perfil.mjs ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _Usuario_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Usuario.mjs */ \"./app/models/Usuario.mjs\");\n/* harmony import */ var _UsuarioPerfil_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UsuarioPerfil.mjs */ \"./app/models/UsuarioPerfil.mjs\");\n/* harmony import */ var _PerfilRol_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PerfilRol.mjs */ \"./app/models/PerfilRol.mjs\");\n/* harmony import */ var _Rol_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Rol.mjs */ \"./app/models/Rol.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n// eslint-disable-next-line import/no-cycle\n\n\n\n// eslint-disable-next-line import/no-cycle\n\nvar Perfil = /*#__PURE__*/function (_psql$Model) {\n  function Perfil() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Perfil);\n    return _callSuper(this, Perfil, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(Perfil, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(Perfil, [{\n    key: \"toJSON\",\n    value: function toJSON() {\n      return {\n        id: this.id,\n        codigo: this.codigo,\n        nombre: this.nombre,\n        roles: this.Rols\n      };\n    }\n  }], [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsToMany(_Usuario_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        through: _UsuarioPerfil_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        foreignKey: 'id_perfil',\n        otherKey: 'id_usuario',\n        as: 'usuarios_perfil'\n      });\n      this.belongsToMany(_Rol_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        through: _PerfilRol_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        foreignKey: 'id_perfil',\n        otherKey: 'id_rol',\n        as: 'roles_perfil'\n      });\n      this.belongsToMany(_Usuario_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        through: _UsuarioPerfil_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        foreignKey: 'id_perfil',\n        otherKey: 'id_usuario'\n      });\n      this.belongsToMany(_Rol_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        through: _PerfilRol_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        foreignKey: 'id_perfil',\n        otherKey: 'id_rol'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nPerfil.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  nombre: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(30),\n    allowNull: false\n  },\n  codigo: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(5)\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_perfil'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Perfil);\n\n//# sourceURL=webpack://api-sic/./app/models/Perfil.mjs?");

/***/ }),

/***/ "./app/models/PerfilRol.mjs":
/*!**********************************!*\
  !*** ./app/models/PerfilRol.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar PerfilRol = /*#__PURE__*/function (_psql$Model) {\n  function PerfilRol() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, PerfilRol);\n    return _callSuper(this, PerfilRol, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(PerfilRol, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(PerfilRol);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nPerfilRol.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  id_perfil: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER\n  },\n  id_rol: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER\n  }\n}, {\n  timestamps: false,\n  updatedAt: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_perfil_rol'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerfilRol);\n\n//# sourceURL=webpack://api-sic/./app/models/PerfilRol.mjs?");

/***/ }),

/***/ "./app/models/RefreshToken.mjs":
/*!*************************************!*\
  !*** ./app/models/RefreshToken.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REFRESH_SCHEMA: () => (/* binding */ REFRESH_SCHEMA),\n/* harmony export */   TABLE_NAME: () => (/* binding */ TABLE_NAME),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _Usuario_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Usuario.mjs */ \"./app/models/Usuario.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n// eslint-disable-next-line import/no-cycle\n\nvar RefreshToken = /*#__PURE__*/function (_psql$Model) {\n  function RefreshToken() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, RefreshToken);\n    return _callSuper(this, RefreshToken, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(RefreshToken, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(RefreshToken, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsTo(_Usuario_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        foreignKey: 'id_usuario',\n        as: 'usuario_refreshtoken'\n      });\n      this.belongsTo(_Usuario_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        foreignKey: 'id_usuario'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nvar REFRESH_SCHEMA = {\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  refresh_token: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING\n  },\n  id_usuario: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    allowNull: false,\n    references: {\n      model: 'mnt_usuario',\n      key: 'id'\n    }\n  },\n  valid: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.DATE\n  }\n};\nvar TABLE_NAME = 'refresh_tokens';\nRefreshToken.init(REFRESH_SCHEMA, {\n  timestamps: false,\n  tableName: TABLE_NAME,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection()\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshToken);\n\n//# sourceURL=webpack://api-sic/./app/models/RefreshToken.mjs?");

/***/ }),

/***/ "./app/models/Rol.mjs":
/*!****************************!*\
  !*** ./app/models/Rol.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _Ruta_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Ruta.mjs */ \"./app/models/Ruta.mjs\");\n/* harmony import */ var _RutaRol_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RutaRol.mjs */ \"./app/models/RutaRol.mjs\");\n/* harmony import */ var _Perfil_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Perfil.mjs */ \"./app/models/Perfil.mjs\");\n/* harmony import */ var _PerfilRol_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PerfilRol.mjs */ \"./app/models/PerfilRol.mjs\");\n/* harmony import */ var _Usuario_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Usuario.mjs */ \"./app/models/Usuario.mjs\");\n/* harmony import */ var _UsuarioRol_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UsuarioRol.mjs */ \"./app/models/UsuarioRol.mjs\");\n/* harmony import */ var _TipoRol_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TipoRol.mjs */ \"./app/models/TipoRol.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n/* eslint-disable import/no-cycle */\n\n\n// eslint-disable-next-line import/no-cycle\n\n\n// eslint-disable-next-line import/no-cycle\n\n\n// eslint-disable-next-line import/no-cycle\n\n\n\nvar Rol = /*#__PURE__*/function (_psql$Model) {\n  function Rol() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Rol);\n    return _callSuper(this, Rol, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(Rol, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(Rol, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsToMany(_Ruta_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        through: _RutaRol_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        foreignKey: 'id_rol',\n        otherKey: 'id_ruta'\n      });\n      this.belongsToMany(_Perfil_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        through: _PerfilRol_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        foreignKey: 'id_rol',\n        otherKey: 'id_perfil'\n      });\n      this.belongsToMany(_Usuario_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        through: _UsuarioRol_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n        foreignKey: 'id_rol',\n        otherKey: 'id_usuario'\n      });\n      this.belongsTo(_TipoRol_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        foreignKey: 'id_tipo_rol'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nRol.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  name: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(255),\n    allowNull: false\n  },\n  id_tipo_rol: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    allowNull: false\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_rol'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rol);\n\n//# sourceURL=webpack://api-sic/./app/models/Rol.mjs?");

/***/ }),

/***/ "./app/models/Ruta.mjs":
/*!*****************************!*\
  !*** ./app/models/Ruta.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _Rol_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Rol.mjs */ \"./app/models/Rol.mjs\");\n/* harmony import */ var _RutaRol_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RutaRol.mjs */ \"./app/models/RutaRol.mjs\");\n\n\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n// eslint-disable-next-line import/no-cycle\n\n\nvar Ruta = /*#__PURE__*/function (_psql$Model) {\n  function Ruta() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, Ruta);\n    return _callSuper(this, Ruta, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__(Ruta, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(Ruta, [{\n    key: \"toJSON\",\n    value: function toJSON() {\n      return {\n        id: this.id,\n        nombre: this.nombre,\n        uri: this.uri,\n        nombre_uri: this.nombre_uri,\n        icono: this.icono,\n        admin: this.admin,\n        mostrar: this.mostrar,\n        orden: this.orden,\n        id_ruta_padre: this.id_ruta_padre,\n        childrens: this.rutas\n      };\n    }\n  }], [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsToMany(_Rol_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        through: _RutaRol_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        foreignKey: 'id_ruta',\n        otherKey: 'id_rol',\n        onDelete: 'CASCADE',\n        hooks: true\n      });\n      this.hasMany(Ruta, {\n        foreignKey: 'id_ruta_padre'\n      });\n      this.hasOne(Ruta, {\n        foreignKey: 'id_ruta_padre'\n      });\n    }\n  }, {\n    key: \"getById\",\n    value: function () {\n      var _getById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__.mark(function _callee(id) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              return _context.abrupt(\"return\", this.findOne({\n                where: {\n                  id: id\n                },\n                attributes: ['id'],\n                include: [{\n                  model: _Rol_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                  attributes: ['id', 'name'],\n                  through: {\n                    attributes: []\n                  }\n                }]\n              }));\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this);\n      }));\n      function getById(_x) {\n        return _getById.apply(this, arguments);\n      }\n      return getById;\n    }()\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_7__.Model);\nRuta.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  nombre: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.STRING(50),\n    allowNull: false\n  },\n  uri: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.TEXT\n  },\n  nombre_uri: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.TEXT\n  },\n  mostrar: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.BOOLEAN,\n    allowNull: false\n  },\n  icono: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.STRING(255)\n  },\n  orden: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.INTEGER\n  },\n  admin: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.BOOLEAN\n  },\n  publico: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.BOOLEAN\n  },\n  id_ruta_padre: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.INTEGER\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].connection(),\n  tableName: 'mnt_ruta'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ruta);\n\n//# sourceURL=webpack://api-sic/./app/models/Ruta.mjs?");

/***/ }),

/***/ "./app/models/RutaRol.mjs":
/*!********************************!*\
  !*** ./app/models/RutaRol.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar RutaRol = /*#__PURE__*/function (_psql$Model) {\n  function RutaRol() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, RutaRol);\n    return _callSuper(this, RutaRol, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(RutaRol, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(RutaRol);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nRutaRol.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  id_ruta: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER\n  },\n  id_rol: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER\n  }\n}, {\n  timestamps: false,\n  updatedAt: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_ruta_rol'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RutaRol);\n\n//# sourceURL=webpack://api-sic/./app/models/RutaRol.mjs?");

/***/ }),

/***/ "./app/models/Servicio.mjs":
/*!*********************************!*\
  !*** ./app/models/Servicio.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _ServicioVenta_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServicioVenta.mjs */ \"./app/models/ServicioVenta.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n\n\nvar Servicio = /*#__PURE__*/function (_psql$Model) {\n  function Servicio() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Servicio);\n    return _callSuper(this, Servicio, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(Servicio, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(Servicio, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsTo(_index_mjs__WEBPACK_IMPORTED_MODULE_7__.TipoServicio, {\n        foreignKey: 'id_tipo_servicio'\n      });\n      this.hasMany(_ServicioVenta_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        foreignKey: 'id_servicio'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nServicio.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  id_tipo_servicio: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    allowNull: false\n  },\n  nombre: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(250),\n    allowNull: false\n  },\n  fecha: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.DATE,\n    allowNull: false\n  },\n  descripcion: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(250),\n    allowNull: false\n  },\n  precio_base: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.DECIMAL,\n    allowNull: false\n  },\n  costo: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.DECIMAL,\n    allowNull: false\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_servicio'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Servicio);\n\n//# sourceURL=webpack://api-sic/./app/models/Servicio.mjs?");

/***/ }),

/***/ "./app/models/ServicioVenta.mjs":
/*!**************************************!*\
  !*** ./app/models/ServicioVenta.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.mjs */ \"./app/models/index.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n\nvar ServicioVenta = /*#__PURE__*/function (_psql$Model) {\n  function ServicioVenta() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, ServicioVenta);\n    return _callSuper(this, ServicioVenta, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(ServicioVenta, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(ServicioVenta, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsTo(_index_mjs__WEBPACK_IMPORTED_MODULE_7__.Venta, {\n        foreignKey: 'id_venta'\n      });\n      this.belongsTo(_index_mjs__WEBPACK_IMPORTED_MODULE_7__.Servicio, {\n        foreignKey: 'id_servicio'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nServicioVenta.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  id_venta: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(20),\n    allowNull: false\n  },\n  id_servicio: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    allowNull: false\n  },\n  fecha_defuncion: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.DATE,\n    allowNull: true\n  },\n  cantidad: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    allowNull: false\n  },\n  subtotal: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.DECIMAL,\n    allowNull: false,\n    defaultValue: 0\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_servicio_venta'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicioVenta);\n\n//# sourceURL=webpack://api-sic/./app/models/ServicioVenta.mjs?");

/***/ }),

/***/ "./app/models/TipoPago.mjs":
/*!*********************************!*\
  !*** ./app/models/TipoPago.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.mjs */ \"./app/models/index.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n\nvar TipoPago = /*#__PURE__*/function (_psql$Model) {\n  function TipoPago() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, TipoPago);\n    return _callSuper(this, TipoPago, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(TipoPago, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(TipoPago, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.hasMany(_index_mjs__WEBPACK_IMPORTED_MODULE_7__.DetalleVenta, {\n        foreignKey: 'id_tipo_pago'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nTipoPago.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  nombre: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(255),\n    allowNull: false\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'ctl_tipo_pago'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TipoPago);\n\n//# sourceURL=webpack://api-sic/./app/models/TipoPago.mjs?");

/***/ }),

/***/ "./app/models/TipoRol.mjs":
/*!********************************!*\
  !*** ./app/models/TipoRol.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _Rol_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Rol.mjs */ \"./app/models/Rol.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n/* eslint-disable import/no-cycle */\n\n\n\nvar TipoRol = /*#__PURE__*/function (_psql$Model) {\n  function TipoRol() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, TipoRol);\n    return _callSuper(this, TipoRol, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(TipoRol, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(TipoRol, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.hasMany(_Rol_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        foreignKey: 'id_tipo_rol'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nTipoRol.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  name: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(255),\n    allowNull: false\n  },\n  prefijo: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(255),\n    allowNull: false\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'ctl_tipo_rol'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TipoRol);\n\n//# sourceURL=webpack://api-sic/./app/models/TipoRol.mjs?");

/***/ }),

/***/ "./app/models/TipoServicio.mjs":
/*!*************************************!*\
  !*** ./app/models/TipoServicio.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _Servicio_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Servicio.mjs */ \"./app/models/Servicio.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n/* eslint-disable import/no-cycle */\n\n\n\nvar TipoServicio = /*#__PURE__*/function (_psql$Model) {\n  function TipoServicio() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, TipoServicio);\n    return _callSuper(this, TipoServicio, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(TipoServicio, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(TipoServicio, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.hasMany(_Servicio_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        foreignKey: 'id_tipo_servicio'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nTipoServicio.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  nombre: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.STRING(255),\n    allowNull: false\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'ctl_tipo_servicio'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TipoServicio);\n\n//# sourceURL=webpack://api-sic/./app/models/TipoServicio.mjs?");

/***/ }),

/***/ "./app/models/Usuario.mjs":
/*!********************************!*\
  !*** ./app/models/Usuario.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UsuarioSchema: () => (/* binding */ UsuarioSchema),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _Rol_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Rol.mjs */ \"./app/models/Rol.mjs\");\n/* harmony import */ var _UsuarioRol_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UsuarioRol.mjs */ \"./app/models/UsuarioRol.mjs\");\n/* harmony import */ var _RefreshToken_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RefreshToken.mjs */ \"./app/models/RefreshToken.mjs\");\n/* harmony import */ var _Perfil_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Perfil.mjs */ \"./app/models/Perfil.mjs\");\n/* harmony import */ var _UsuarioPerfil_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UsuarioPerfil.mjs */ \"./app/models/UsuarioPerfil.mjs\");\n/* harmony import */ var _MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MetodoAutenticacion.mjs */ \"./app/models/MetodoAutenticacion.mjs\");\n/* harmony import */ var _MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MetodoAutenticacionUsuario.mjs */ \"./app/models/MetodoAutenticacionUsuario.mjs\");\n\n\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n// eslint-disable-next-line import/no-cycle\n\n\n// eslint-disable-next-line import/no-cycle\n\n// eslint-disable-next-line import/no-cycle\n\n\n// eslint-disable-next-line import/no-cycle\n\n\nvar UsuarioSchema = {\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  email: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.STRING\n  },\n  password: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.TEXT\n  },\n  last_login: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.STRING\n  },\n  is_suspended: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.BOOLEAN\n  },\n  token_valid_after: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.STRING\n  },\n  two_factor_status: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.BOOLEAN\n  },\n  verified: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.BOOLEAN\n  },\n  nombre: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_7__.Sequelize.STRING\n  }\n};\nvar Usuario = /*#__PURE__*/function (_psql$Model) {\n  function Usuario() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, Usuario);\n    return _callSuper(this, Usuario, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__(Usuario, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(Usuario, [{\n    key: \"toJSON\",\n    value: function toJSON() {\n      return {\n        id: this.id,\n        email: this.email,\n        last_login: this.last_login,\n        is_suspended: this.is_suspended,\n        perfiles: this.Perfils,\n        roles: this.Rols,\n        nombre: this.nombre\n      };\n    }\n  }], [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsToMany(_Rol_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        through: _UsuarioRol_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        foreignKey: 'id_usuario',\n        otherKey: 'id_rol'\n      });\n      this.belongsToMany(_MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        through: _MetodoAutenticacionUsuario_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n        foreignKey: 'id_usuario',\n        otherKey: 'id_metodo'\n      });\n      this.hasMany(_RefreshToken_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        foreignKey: 'id_usuario'\n      });\n      this.belongsToMany(_Perfil_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        through: _UsuarioPerfil_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n        foreignKey: 'id_usuario',\n        otherKey: 'id_perfil'\n      });\n    }\n  }, {\n    key: \"getById\",\n    value: function () {\n      var _getById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__.mark(function _callee(id) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              return _context.abrupt(\"return\", this.findOne({\n                where: {\n                  id: id\n                },\n                attributes: ['id', 'email'],\n                include: [{\n                  model: _Perfil_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n                  attributes: ['id', 'nombre'],\n                  through: {\n                    attributes: []\n                  }\n                }, {\n                  model: _Rol_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                  attributes: ['id', 'name'],\n                  through: {\n                    attributes: []\n                  }\n                }]\n              }));\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this);\n      }));\n      function getById(_x) {\n        return _getById.apply(this, arguments);\n      }\n      return getById;\n    }()\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_7__.Model);\nUsuario.init(UsuarioSchema, {\n  timestamps: true,\n  updatedAt: false,\n  createdAt: 'created_at',\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].connection(),\n  tableName: 'mnt_usuario'\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Usuario);\n\n//# sourceURL=webpack://api-sic/./app/models/Usuario.mjs?");

/***/ }),

/***/ "./app/models/UsuarioPerfil.mjs":
/*!**************************************!*\
  !*** ./app/models/UsuarioPerfil.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar UsuarioPerfil = /*#__PURE__*/function (_psql$Model) {\n  function UsuarioPerfil() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, UsuarioPerfil);\n    return _callSuper(this, UsuarioPerfil, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(UsuarioPerfil, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(UsuarioPerfil);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nUsuarioPerfil.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  id_perfil: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    allowNull: false\n  },\n  id_usuario: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER\n  }\n}, {\n  timestamps: false,\n  updatedAt: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_usuario_perfil'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsuarioPerfil);\n\n//# sourceURL=webpack://api-sic/./app/models/UsuarioPerfil.mjs?");

/***/ }),

/***/ "./app/models/UsuarioRol.mjs":
/*!***********************************!*\
  !*** ./app/models/UsuarioRol.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar UsuarioRol = /*#__PURE__*/function (_psql$Model) {\n  function UsuarioRol() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, UsuarioRol);\n    return _callSuper(this, UsuarioRol, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(UsuarioRol, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(UsuarioRol);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nUsuarioRol.init({\n  id_usuario: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true\n  },\n  id_rol: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    primaryKey: true\n  }\n}, {\n  timestamps: false,\n  updatedAt: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_usuario_rol'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsuarioRol);\n\n//# sourceURL=webpack://api-sic/./app/models/UsuarioRol.mjs?");

/***/ }),

/***/ "./app/models/Venta.mjs":
/*!******************************!*\
  !*** ./app/models/Venta.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nucleo/DB.mjs */ \"./app/nucleo/DB.mjs\");\n/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.mjs */ \"./app/models/index.mjs\");\n/* harmony import */ var _ServicioVenta_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServicioVenta.mjs */ \"./app/models/ServicioVenta.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\n\n\nvar Venta = /*#__PURE__*/function (_psql$Model) {\n  function Venta() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Venta);\n    return _callSuper(this, Venta, arguments);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(Venta, _psql$Model);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(Venta, null, [{\n    key: \"associate\",\n    value: function associate() {\n      this.belongsTo(_index_mjs__WEBPACK_IMPORTED_MODULE_7__.Cliente, {\n        foreignKey: 'id_cliente'\n      });\n      this.hasMany(_ServicioVenta_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        foreignKey: 'id_venta'\n      });\n    }\n  }]);\n}(sequelize__WEBPACK_IMPORTED_MODULE_5__.Model);\nVenta.init({\n  numero_factura: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.UUID,\n    primaryKey: true,\n    defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.UUIDV4\n  },\n  id_cliente: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize.INTEGER,\n    allowNull: false\n  }\n}, {\n  timestamps: false,\n  sequelize: _nucleo_DB_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connection(),\n  tableName: 'mnt_venta'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Venta);\n\n//# sourceURL=webpack://api-sic/./app/models/Venta.mjs?");

/***/ }),

/***/ "./app/models/index.mjs":
/*!******************************!*\
  !*** ./app/models/index.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cliente: () => (/* reexport safe */ _Cliente_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   DetalleVenta: () => (/* reexport safe */ _DetalleVenta_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n/* harmony export */   MetodoAutenticacion: () => (/* reexport safe */ _MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   Perfil: () => (/* reexport safe */ _Perfil_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   PerfilRol: () => (/* reexport safe */ _PerfilRol_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   RefreshToken: () => (/* reexport safe */ _RefreshToken_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Rol: () => (/* reexport safe */ _Rol_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Ruta: () => (/* reexport safe */ _Ruta_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   RutaRol: () => (/* reexport safe */ _RutaRol_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   Servicio: () => (/* reexport safe */ _Servicio_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   ServicioVenta: () => (/* reexport safe */ _ServicioVenta_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"]),\n/* harmony export */   TipoPago: () => (/* reexport safe */ _TipoPago_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"]),\n/* harmony export */   TipoServicio: () => (/* reexport safe */ _TipoServicio_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   Usuario: () => (/* reexport safe */ _Usuario_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   UsuarioPerfil: () => (/* reexport safe */ _UsuarioPerfil_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   UsuarioRol: () => (/* reexport safe */ _UsuarioRol_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   Venta: () => (/* reexport safe */ _Venta_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Usuario_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuario.mjs */ \"./app/models/Usuario.mjs\");\n/* harmony import */ var _RefreshToken_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RefreshToken.mjs */ \"./app/models/RefreshToken.mjs\");\n/* harmony import */ var _Perfil_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Perfil.mjs */ \"./app/models/Perfil.mjs\");\n/* harmony import */ var _PerfilRol_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerfilRol.mjs */ \"./app/models/PerfilRol.mjs\");\n/* harmony import */ var _Rol_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rol.mjs */ \"./app/models/Rol.mjs\");\n/* harmony import */ var _Ruta_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Ruta.mjs */ \"./app/models/Ruta.mjs\");\n/* harmony import */ var _RutaRol_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RutaRol.mjs */ \"./app/models/RutaRol.mjs\");\n/* harmony import */ var _UsuarioPerfil_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UsuarioPerfil.mjs */ \"./app/models/UsuarioPerfil.mjs\");\n/* harmony import */ var _UsuarioRol_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UsuarioRol.mjs */ \"./app/models/UsuarioRol.mjs\");\n/* harmony import */ var _MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MetodoAutenticacion.mjs */ \"./app/models/MetodoAutenticacion.mjs\");\n/* harmony import */ var _Servicio_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Servicio.mjs */ \"./app/models/Servicio.mjs\");\n/* harmony import */ var _DetalleVenta_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DetalleVenta.mjs */ \"./app/models/DetalleVenta.mjs\");\n/* harmony import */ var _TipoServicio_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TipoServicio.mjs */ \"./app/models/TipoServicio.mjs\");\n/* harmony import */ var _Cliente_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Cliente.mjs */ \"./app/models/Cliente.mjs\");\n/* harmony import */ var _Venta_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Venta.mjs */ \"./app/models/Venta.mjs\");\n/* harmony import */ var _TipoPago_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TipoPago.mjs */ \"./app/models/TipoPago.mjs\");\n/* harmony import */ var _ServicioVenta_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ServicioVenta.mjs */ \"./app/models/ServicioVenta.mjs\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_TipoServicio_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].associate();\n_Usuario_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].associate();\n_RefreshToken_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].associate();\n_Perfil_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].associate();\n_Rol_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].associate();\n_Ruta_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].associate();\n_MetodoAutenticacion_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"].associate();\n_Servicio_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"].associate();\n_Venta_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"].associate();\n_Cliente_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"].associate();\n_DetalleVenta_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"].associate();\n_TipoPago_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"].associate();\n_ServicioVenta_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"].associate();\n\n\n//# sourceURL=webpack://api-sic/./app/models/index.mjs?");

/***/ }),

/***/ "./app/nucleo/DB.mjs":
/*!***************************!*\
  !*** ./app/nucleo/DB.mjs ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DB)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _configs_db_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/db.mjs */ \"./configs/db.mjs\");\n\n\n\n\n\n\nvar DB = /*#__PURE__*/function () {\n  function DB() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, DB);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(DB, null, [{\n    key: \"connection\",\n    value: function connection() {\n      var _connection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var predefinida = _configs_db_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"][\"default\"];\n      var config = {};\n      if (_connection) config = _configs_db_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].connections[_connection];else config = _configs_db_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].connections[predefinida];\n      return new sequelize__WEBPACK_IMPORTED_MODULE_4__.Sequelize(config.options.db_name, config.options.db_username, config.options.db_password, {\n        host: config.options.db_host,\n        port: config.options.db_port,\n        dialect: config.motor,\n        logging: \"true\" === 'true'\n      });\n    }\n  }, {\n    key: \"testing\",\n    value: function () {\n      var _testing = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee() {\n        var connection,\n          _args = arguments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              connection = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;\n              _context.prev = 1;\n              _context.next = 4;\n              return this.connection(connection).authenticate();\n            case 4:\n              return _context.abrupt(\"return\", true);\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](1);\n              return _context.abrupt(\"return\", false);\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this, [[1, 7]]);\n      }));\n      function testing() {\n        return _testing.apply(this, arguments);\n      }\n      return testing;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/nucleo/DB.mjs?");

/***/ }),

/***/ "./app/nucleo/mongo/connection.mjs":
/*!*****************************************!*\
  !*** ./app/nucleo/mongo/connection.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ connectionMongoose)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\n\n\n\n\n// const URI_MONGO_DB = 'mongodb+srv://miguel:123@cluster0.gkgbe.mongodb.net/miguel_db';\nvar username = \"admin\";\nvar password = \"admin\";\nvar host = \"0.0.0.0\";\nvar port = \"27019\";\nvar database = \"admin\";\nvar URI_MONGO_DB = \"mongodb://\".concat(username, \":\").concat(password, \"@\").concat(host, \":\").concat(port, \"/\").concat(database);\nvar connectionMongoose = /*#__PURE__*/function () {\n  function connectionMongoose() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, connectionMongoose);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(connectionMongoose, null, [{\n    key: \"connection\",\n    value: function () {\n      var _connection = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              if (!(process.env.ENABLED_BITACORA_MONGODB === 'true')) {\n                _context.next = 9;\n                break;\n              }\n              _context.prev = 1;\n              _context.next = 4;\n              return mongoose__WEBPACK_IMPORTED_MODULE_4__.connect(URI_MONGO_DB, {\n                useNewUrlParser: true,\n                useUnifiedTopology: true\n              });\n            case 4:\n              _context.next = 9;\n              break;\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](1);\n              console.log(_context.t0);\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, null, [[1, 6]]);\n      }));\n      function connection() {\n        return _connection.apply(this, arguments);\n      }\n      return connection;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/nucleo/mongo/connection.mjs?");

/***/ }),

/***/ "./app/nucleo/mongo/error.mjs":
/*!************************************!*\
  !*** ./app/nucleo/mongo/error.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var _connection_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection.mjs */ \"./app/nucleo/mongo/connection.mjs\");\n\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema;\nvar errorSchema = new Schema({\n  id_bitacora: String,\n  codigo: Number,\n  mensaje: String,\n  trace: String,\n  content: Object,\n  fecha_hora_reg: {\n    type: Date,\n    \"default\": Date.now()\n  }\n});\n_connection_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connection();\nvar Error = mongoose__WEBPACK_IMPORTED_MODULE_0__.model('error', errorSchema, 'errors');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);\n\n//# sourceURL=webpack://api-sic/./app/nucleo/mongo/error.mjs?");

/***/ }),

/***/ "./app/schemas/LoginSchema.mjs":
/*!*************************************!*\
  !*** ./app/schemas/LoginSchema.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar loginSchema = {\n  $id: 'http://example.com/schemas/login.json#',\n  type: 'object',\n  properties: {\n    email: {\n      $ref: 'defs.json#/definitions/email',\n      errorMessage: {\n        email: 'El email debe ser de tipo alfanumerico'\n      }\n    },\n    password: {\n      $ref: 'defs.json#/definitions/string'\n    }\n  },\n  required: ['email', 'password'],\n  errorMessage: {\n    required: {\n      email: 'El email es requerido',\n      password: 'La contraseña es requerida'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/LoginSchema.mjs?");

/***/ }),

/***/ "./app/schemas/PerfilCreateSchema.mjs":
/*!********************************************!*\
  !*** ./app/schemas/PerfilCreateSchema.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar perfilCreateSchema = {\n  $id: 'http://example.com/schemas/perfilCreateSchema.json#',\n  type: 'object',\n  properties: {\n    nombre: {\n      $ref: 'defs.json#/definitions/string'\n    },\n    codigo: {\n      $ref: 'defs.json#/definitions/codigo'\n    },\n    roles: {\n      $ref: 'defs.json#/definitions/arrayIntUnico'\n    }\n  },\n  required: ['nombre', 'codigo', 'roles'],\n  errorMessage: {\n    required: {\n      nombre: 'El nombre es requerido',\n      codigo: 'El código es requerido',\n      roles: 'El campo roles es requerido'\n    },\n    properties: {\n      nombre: 'el nombre debe ser de tipo alfanumerico',\n      roles: 'Los roles deber ser un array numerico'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (perfilCreateSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/PerfilCreateSchema.mjs?");

/***/ }),

/***/ "./app/schemas/PerfilUpdateSchema.mjs":
/*!********************************************!*\
  !*** ./app/schemas/PerfilUpdateSchema.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar perfilUpdateSchema = {\n  $id: 'http://example.com/schemas/perfilUpdateSchema.json#',\n  type: 'object',\n  properties: {\n    nombre: {\n      $ref: 'defs.json#/definitions/string'\n    },\n    codigo: {\n      $ref: 'defs.json#/definitions/codigo'\n    }\n  },\n  required: ['nombre', 'codigo'],\n  errorMessage: {\n    required: {\n      nombre: 'El campo nombre es requerido',\n      codigo: 'El campo codigo es requerido'\n    },\n    properties: {\n      nombre: 'el nombre debe ser de tipo alfanumerico'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (perfilUpdateSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/PerfilUpdateSchema.mjs?");

/***/ }),

/***/ "./app/schemas/RecoveryPasswordSchema.mjs":
/*!************************************************!*\
  !*** ./app/schemas/RecoveryPasswordSchema.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar recoveryPasswordSchema = {\n  $id: 'http://example.com/schemas/recoveryPasswordSchema.json#',\n  type: 'object',\n  properties: {\n    password: {\n      $ref: 'defs.json#/definitions/password'\n    },\n    confirm_password: {\n      $ref: 'defs.json#/definitions/password'\n    }\n  },\n  required: ['password', 'confirm_password'],\n  errorMessage: {\n    required: {\n      password: 'El campo password es requerido',\n      confirm_password: 'El campo confirmPassword es requerido'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recoveryPasswordSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/RecoveryPasswordSchema.mjs?");

/***/ }),

/***/ "./app/schemas/RolCreateSchema.mjs":
/*!*****************************************!*\
  !*** ./app/schemas/RolCreateSchema.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar rolCreateSchema = {\n  $id: 'http://example.com/schemas/rolCreateSchema.json#',\n  type: 'object',\n  properties: {\n    id_tipo_rol: {\n      $ref: 'defs.json#/definitions/integer'\n    }\n  },\n  required: ['id_tipo_rol'],\n  errorMessage: {\n    properties: {\n      id_tipo_rol: 'El campo id_tipo_rol debe ser de tipo numérico'\n    }\n  },\n  allOf: [{\n    \"if\": {\n      properties: {\n        id_tipo_rol: {\n          \"const\": 1\n        }\n      }\n    },\n    then: {\n      properties: {\n        name: {\n          type: 'string',\n          pattern: '^(ROLE_)+[A-Z_]*',\n          errorMessage: {\n            type: 'el name debe ser de tipo alfanumerico',\n            pattern: 'el name debe tener el prefijo ROLE_'\n          }\n        }\n      }\n    }\n  }, {\n    \"if\": {\n      properties: {\n        id_tipo_rol: {\n          \"const\": 2\n        }\n      }\n    },\n    then: {\n      properties: {\n        name: {\n          type: 'string',\n          pattern: '^(ROLE_ADMIN_)+[A-Z_]*',\n          errorMessage: {\n            type: 'el name debe ser de tipo alfanumerico',\n            pattern: 'el name debe tener el prefijo ROLE_ADMIN_'\n          }\n        }\n      }\n    }\n  }, {\n    \"if\": {\n      properties: {\n        id_tipo_rol: {\n          \"const\": 3\n        }\n      }\n    },\n    then: {\n      properties: {\n        name: {\n          type: 'string',\n          pattern: '^(ROLE_FRONT_)+[A-Z_]*',\n          errorMessage: {\n            type: 'el name debe ser de tipo alfanumerico',\n            pattern: 'el name debe tener el prefijo ROLE_FRONT_'\n          }\n        }\n      }\n    }\n  }]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rolCreateSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/RolCreateSchema.mjs?");

/***/ }),

/***/ "./app/schemas/RutaCreateSchema.mjs":
/*!******************************************!*\
  !*** ./app/schemas/RutaCreateSchema.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar rutaCreateSchema = {\n  $id: 'http://example.com/schemas/rutaCreate.json#',\n  type: 'object',\n  properties: {\n    nombre: {\n      type: 'string',\n      errorMessage: {\n        type: 'El nombre de la ruta debe ser de tipo alfanumerico'\n      }\n    },\n    uri: {\n      type: 'string',\n      errorMessage: {\n        type: 'La uri de la ruta debe ser de tipo alfanumerico'\n      }\n    },\n    nombre_uri: {\n      type: 'string',\n      errorMessage: {\n        type: 'El nombre de la ruta debe ser de tipo alfanumerico'\n      }\n    },\n    mostrar: {\n      type: 'boolean',\n      errorMessage: {\n        type: 'El parámetro mostrar de la ruta debe ser de tipo booleano'\n      }\n    },\n    icono: {\n      type: 'string',\n      errorMessage: {\n        type: 'El parámetro icono de la ruta debe ser de tipo alfanumerico'\n      }\n    },\n    orden: {\n      type: ['number', 'null'],\n      errorMessage: {\n        type: 'El parámetro orden de la ruta debe ser de tipo numérico'\n      }\n    },\n    publico: {\n      type: 'boolean',\n      errorMessage: {\n        type: 'El parámetro público de la ruta debe ser de tipo booleano'\n      }\n    },\n    id_ruta_padre: {\n      $ref: 'defs.json#/definitions/intOrNull',\n      errorMessage: {\n        type: 'El id de la ruta padre debe ser de tipo numérico'\n      }\n    }\n  },\n  required: ['nombre', 'uri', 'mostrar', 'nombre_uri'],\n  errorMessage: {\n    required: {\n      nombre: 'El campo nombre de la ruta es requerido',\n      mostrar: 'El campo mostrar de la ruta es requerido',\n      uri: 'El campo uri de la ruta es requerido',\n      nombre_uri: 'El campo nombre_uri de la ruta es requerido'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rutaCreateSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/RutaCreateSchema.mjs?");

/***/ }),

/***/ "./app/schemas/TwoFactorAuthSchema.mjs":
/*!*********************************************!*\
  !*** ./app/schemas/TwoFactorAuthSchema.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar twoFactorAuthSchema = {\n  $id: 'http://example.com/schemas/twoFactorAuth.json#',\n  type: 'object',\n  properties: {\n    id_metodo: {\n      type: 'integer',\n      errorMessage: {\n        email: 'El id metodo de autenticación debe ser de tipo entero'\n      }\n    }\n  },\n  required: ['id_metodo'],\n  errorMessage: {\n    required: {\n      id_metodo: 'El metodo de autenticación es requerido'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twoFactorAuthSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/TwoFactorAuthSchema.mjs?");

/***/ }),

/***/ "./app/schemas/UsuarioCreateSchema.mjs":
/*!*********************************************!*\
  !*** ./app/schemas/UsuarioCreateSchema.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar usuarioCreateSchema = {\n  $id: 'http://example.com/schemas/usuarioCreateSchema.json#',\n  type: 'object',\n  properties: {\n    password: {\n      $ref: 'defs.json#/definitions/password'\n    },\n    email: {\n      $ref: 'defs.json#/definitions/email'\n    },\n    perfiles: {\n      $ref: 'defs.json#/definitions/arrayIntUnico'\n    },\n    roles: {\n      $ref: 'defs.json#/definitions/arrayIntUnico'\n    }\n  },\n  anyOf: [{\n    required: ['roles'],\n    errorMessage: {\n      required: 'Debe poseer un rol o un pefil'\n    }\n  }, {\n    required: ['perfiles'],\n    errorMessage: {\n      required: 'Debe poseer un rol o un pefil'\n    }\n  }],\n  required: ['password', 'email'],\n  errorMessage: {\n    required: {\n      password: 'El campo de contraseña del usuario es requerido',\n      email: 'El campo de email del usuario es requerido'\n    },\n    properties: {\n      perfiles: 'El campo perfiles debe de ser un array de valores unicos y tipo numerico',\n      roles: 'El campo roles debe de ser un array de valores unicos y tipo numerico'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usuarioCreateSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/UsuarioCreateSchema.mjs?");

/***/ }),

/***/ "./app/schemas/UsuarioPasswordUpdateSchema.mjs":
/*!*****************************************************!*\
  !*** ./app/schemas/UsuarioPasswordUpdateSchema.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar usuarioPasswordUpdate = {\n  $id: 'http://example.com/schemas/usuarioPasswordUpdate.json#',\n  type: 'object',\n  properties: {\n    password_actual: {\n      $ref: 'defs.json#/definitions/string'\n    },\n    password: {\n      $ref: 'defs.json#/definitions/password'\n    },\n    confirm_password: {\n      $ref: 'defs.json#/definitions/password'\n    }\n  },\n  required: ['password_actual', 'password', 'confirm_password'],\n  errorMessage: {\n    required: {\n      password_actual: 'La contraseña actual es requerida',\n      password: 'Debe proporcionar una nueva contraseña',\n      confirm_password: 'Debe confirmar la contraseña'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usuarioPasswordUpdate);\n\n//# sourceURL=webpack://api-sic/./app/schemas/UsuarioPasswordUpdateSchema.mjs?");

/***/ }),

/***/ "./app/schemas/UsuarioUpdateEmailSchema.mjs":
/*!**************************************************!*\
  !*** ./app/schemas/UsuarioUpdateEmailSchema.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar usuarioUpdateEmailSchema = {\n  $id: 'http://example.com/schemas/usuarioUpdateEmailSchema.json#',\n  type: 'object',\n  properties: {\n    email: {\n      $ref: 'defs.json#/definitions/email'\n    },\n    password: {\n      $ref: 'defs.json#/definitions/string'\n    }\n  },\n  required: ['email', 'password'],\n  errorMessage: {\n    required: {\n      email: 'El campo email de la ruta es requerido',\n      password: 'El campo password de la ruta es requerido'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usuarioUpdateEmailSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/UsuarioUpdateEmailSchema.mjs?");

/***/ }),

/***/ "./app/schemas/UsuarioUpdateSchema.mjs":
/*!*********************************************!*\
  !*** ./app/schemas/UsuarioUpdateSchema.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar usuarioUpdateSchema = {\n  $id: 'http://example.com/schemas/usuarioUpdateSchema.json#',\n  type: 'object',\n  properties: {\n    email: {\n      $ref: 'defs.json#/definitions/email'\n    },\n    perfiles: {\n      $ref: 'defs.json#/definitions/arrayIntUnico'\n    },\n    roles: {\n      $ref: 'defs.json#/definitions/arrayIntUnico'\n    }\n  },\n  anyOf: [{\n    required: ['roles'],\n    errorMessage: {\n      required: 'Debe poseer un rol o un pefil'\n    }\n  }, {\n    required: ['perfiles'],\n    errorMessage: {\n      required: 'Debe poseer un rol o un pefil'\n    }\n  }],\n  required: ['email'],\n  errorMessage: {\n    required: {\n      email: 'El campo de email del usuario es requerido'\n    },\n    properties: {\n      perfiles: 'El campo perfiles debe de ser un array de valores unicos y tipo numerico',\n      roles: 'El campo roles debe de ser un array de valores unicos y tipo numerico'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usuarioUpdateSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/UsuarioUpdateSchema.mjs?");

/***/ }),

/***/ "./app/schemas/definitions.mjs":
/*!*************************************!*\
  !*** ./app/schemas/definitions.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar definitionSchema = {\n  $id: 'http://example.com/schemas/defs.json#',\n  definitions: {\n    integer: {\n      type: 'integer'\n    },\n    intPositivo: {\n      type: 'integer',\n      minimun: 1\n    },\n    intOrNull: {\n      type: ['null', 'integer']\n    },\n    \"double\": {\n      type: 'number'\n    },\n    string: {\n      type: 'string'\n    },\n    stringOrNull: {\n      type: ['null', 'string']\n    },\n    date: {\n      type: 'string',\n      format: 'date',\n      errorMessage: {\n        format: 'El formato de la fecha es YYYY-MM-DD'\n      }\n    },\n    fechaMenorActual: {\n      type: 'string',\n      format: 'date',\n      isAfter: Date.now(),\n      errorMessage: {\n        format: 'El formato de la fecha es YYYY-MM-DD',\n        properties: {\n          isAfter: 'La fecha debe ser mayor a la actual'\n        }\n      }\n    },\n    email: {\n      type: 'string',\n      // eslint-disable-next-line no-useless-escape\n      pattern: \"^([a-zA-Z0-9./^S+$/<*>!#\\$%&'\\+/=?\\^_`{|}~-]+([\\s]{0}))+?@[a-zA-Z]+([.]{1})[a-zA-Z]+[\\s]{0}[.]?[a-zA-Z]{2,}([.]{0})[\\s]{0}$\",\n      errorMessage: {\n        type: 'El correo electronico debe ser alfanumerico ',\n        pattern: 'Tiene que ingresar un correo valido'\n      }\n    },\n    password: {\n      type: 'string',\n      // eslint-disable-next-line no-useless-escape\n      pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&\\-_.:])([A-Za-z\\d$@$!%*?&]|[^ \\d]){8,20}$',\n      errorMessage: {\n        pattern: 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.'\n      }\n    },\n    decimal: {\n      type: 'string',\n      // eslint-disable-next-line no-useless-escape\n      pattern: '^[0-9]+([.][0-9]+)?$',\n      errorMessage: {\n        type: 'Debe ser decimal',\n        pattern: 'EL campo debe ser un entero o decimal.'\n      }\n    },\n    arrayIntUnico: {\n      type: 'array',\n      uniqueItems: true,\n      items: {\n        type: 'integer'\n      },\n      errorMessage: {\n        uniqueItems: 'No puede existir paramatros identicos en el array'\n      }\n    },\n    arrayInt: {\n      type: 'array',\n      minItems: 1,\n      items: {\n        type: 'integer'\n      }\n    },\n    arrayString: {\n      type: 'array',\n      minItems: 1,\n      items: {\n        type: 'string'\n      }\n    },\n    codigo: {\n      type: ['null', 'string'],\n      maxLength: 5,\n      errorMessage: {\n        type: 'El codigo del perfil debe ser de tipo alfanumérico',\n        maxLength: 'El codigo debe ser maximo 5 caracteres'\n      }\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (definitionSchema);\n\n//# sourceURL=webpack://api-sic/./app/schemas/definitions.mjs?");

/***/ }),

/***/ "./app/services/getRols.mjs":
/*!**********************************!*\
  !*** ./app/services/getRols.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getRols)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n\n\n\n\n\n\nvar getRols = /*#__PURE__*/function () {\n  function getRols() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__(this, getRols);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__(getRols, null, [{\n    key: \"roles\",\n    value: function () {\n      var _roles = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee(userId) {\n        var property,\n          user,\n          rolePerfils,\n          rols,\n          _args = arguments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              property = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'name';\n              _context.next = 3;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Usuario.findOne({\n                include: [_models_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Rol, {\n                  model: _models_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Perfil,\n                  include: [_models_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Rol]\n                }],\n                where: {\n                  id: userId\n                }\n              });\n            case 3:\n              user = _context.sent;\n              rolePerfils = user.Perfils.reduce(function (acumulador, value) {\n                return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__(value.Rols);\n              }, []);\n              /**\n               * Set para hacer arreglo unico sin valores repetidos\n               * */\n              rols = new Set(user.Rols.concat(rolePerfils).map(function (row) {\n                return row[property];\n              }));\n              return _context.abrupt(\"return\", _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__(rols));\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function roles(_x) {\n        return _roles.apply(this, arguments);\n      }\n      return roles;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/services/getRols.mjs?");

/***/ }),

/***/ "./app/services/mailer.mjs":
/*!*********************************!*\
  !*** ./app/services/mailer.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mailer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var mjml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mjml */ \"mjml\");\n\n\n\n\n\n\n\nvar transporter = nodemailer__WEBPACK_IMPORTED_MODULE_5__.createTransport({\n  host: process.env.MAIL_HOST,\n  port: process.env.MAIL_PORT,\n  secure: process.env.MAIL_SECURE === 'true',\n  auth: {\n    user: process.env.MAIL_USER,\n    pass: process.env.MAIL_PASS\n  }\n});\nvar Mailer = /*#__PURE__*/function () {\n  function Mailer() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__(this, Mailer);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__(Mailer, null, [{\n    key: \"sendMail\",\n    value: function () {\n      var _sendMail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee(params) {\n        var email, header, subject, message, _params$body, body, _params$sections, sections, _mjml2html, html, mailConfig, send;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              email = params.email, header = params.header, subject = params.subject, message = params.message, _params$body = params.body, body = _params$body === void 0 ? [] : _params$body, _params$sections = params.sections, sections = _params$sections === void 0 ? [] : _params$sections;\n              _mjml2html = mjml__WEBPACK_IMPORTED_MODULE_6__({\n                tagName: 'mjml',\n                attributes: {},\n                children: [{\n                  tagName: 'mj-body',\n                  attributes: {},\n                  children: [{\n                    tagName: 'mj-section',\n                    attributes: {},\n                    children: [{\n                      tagName: 'mj-column',\n                      attributes: {},\n                      children: [{\n                        tagName: 'mj-image',\n                        attributes: {\n                          src: 'https://next.salud.gob.sv/index.php/s/AHEMQ38JR93fnXQ/download',\n                          width: '350px'\n                        }\n                      }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__(header), [{\n                        tagName: 'mj-spacer',\n                        attributes: {\n                          'css-class': 'primary'\n                        }\n                      }, {\n                        tagName: 'mj-divider',\n                        attributes: {\n                          'border-width': '3px',\n                          'border-color': '#175efb'\n                        }\n                      }, {\n                        tagName: 'mj-text',\n                        attributes: {\n                          align: 'center',\n                          'font-weight': 'bold',\n                          'font-size': '12px'\n                        },\n                        content: message\n                      }], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__(body))\n                    }]\n                  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__(sections))\n                }]\n              }), html = _mjml2html.html;\n              _context.next = 4;\n              return transporter.verify();\n            case 4:\n              mailConfig = {\n                from: \"\".concat(\"funeraria\", \" <\").concat(process.env.MAIL_USER, \">\"),\n                to: email,\n                subject: subject,\n                html: html\n              };\n              _context.next = 7;\n              return transporter.sendMail(mailConfig);\n            case 7:\n              send = _context.sent;\n              return _context.abrupt(\"return\", send);\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function sendMail(_x) {\n        return _sendMail.apply(this, arguments);\n      }\n      return sendMail;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/services/mailer.mjs?");

/***/ }),

/***/ "./app/services/security.mjs":
/*!***********************************!*\
  !*** ./app/services/security.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Security)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var speakeasy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! speakeasy */ \"speakeasy\");\n/* harmony import */ var _getRols_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getRols.mjs */ \"./app/services/getRols.mjs\");\n\n\n\n\n\n\nvar Security = /*#__PURE__*/function () {\n  function Security() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, Security);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(Security, null, [{\n    key: \"isGranted\",\n    value: function () {\n      var _isGranted = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee(idUser, role) {\n        var allRols, havePermision;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _getRols_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].roles(idUser);\n            case 2:\n              allRols = _context.sent;\n              _context.next = 5;\n              return allRols.some(function (rol) {\n                return rol === role;\n              });\n            case 5:\n              havePermision = _context.sent;\n              return _context.abrupt(\"return\", havePermision);\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function isGranted(_x, _x2) {\n        return _isGranted.apply(this, arguments);\n      }\n      return isGranted;\n    }()\n  }, {\n    key: \"generateTwoFactorAuthCode\",\n    value: function () {\n      var _generateTwoFactorAuthCode = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee2(email) {\n        var secretKey;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return speakeasy__WEBPACK_IMPORTED_MODULE_4__.generateSecret({\n                name: \"\".concat(\"funeraria\", \" \").concat(email),\n                issuer: \"funeraria\"\n              });\n            case 2:\n              secretKey = _context2.sent;\n              return _context2.abrupt(\"return\", {\n                secret_code: secretKey.base32,\n                qrCode: secretKey.otpauth_url\n              });\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      function generateTwoFactorAuthCode(_x3) {\n        return _generateTwoFactorAuthCode.apply(this, arguments);\n      }\n      return generateTwoFactorAuthCode;\n    }()\n  }, {\n    key: \"verifyTwoFactorAuthCode\",\n    value: function () {\n      var _verifyTwoFactorAuthCode = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee3(params) {\n        var code, secretKey, time, step, toVerify;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              code = params.code, secretKey = params.secretKey, time = params.time, step = params.step;\n              toVerify = {\n                secret: secretKey,\n                encoding: 'base32',\n                token: code\n              };\n              if (time) {\n                toVerify.window = Number(time);\n                toVerify.step = step || 10;\n              }\n              return _context3.abrupt(\"return\", speakeasy__WEBPACK_IMPORTED_MODULE_4__.totp.verify(toVerify));\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3);\n      }));\n      function verifyTwoFactorAuthCode(_x4) {\n        return _verifyTwoFactorAuthCode.apply(this, arguments);\n      }\n      return verifyTwoFactorAuthCode;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/services/security.mjs?");

/***/ }),

/***/ "./app/utils/Auth.mjs":
/*!****************************!*\
  !*** ./app/utils/Auth.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Auth)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment-timezone */ \"moment-timezone\");\n/* harmony import */ var _models_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/index.mjs */ \"./app/models/index.mjs\");\n\n\n\n\n\n\n\n\nvar Auth = /*#__PURE__*/function () {\n  function Auth() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, Auth);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(Auth, null, [{\n    key: \"createToken\",\n    value: function () {\n      var _createToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee(PAYLOAD, secretKey) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n                jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__.sign(PAYLOAD, secretKey, {\n                  expiresIn: \"60m\"\n                }, function (err, token) {\n                  if (err) reject(err);else resolve(token);\n                });\n              }));\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function createToken(_x, _x2) {\n        return _createToken.apply(this, arguments);\n      }\n      return createToken;\n    }()\n  }, {\n    key: \"refresh_token\",\n    value: function () {\n      var _refresh_token = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee2(user) {\n        var REFRESH_TOKEN, result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              REFRESH_TOKEN = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\n              _context2.next = 3;\n              return _models_index_mjs__WEBPACK_IMPORTED_MODULE_7__.RefreshToken.create({\n                refresh_token: REFRESH_TOKEN,\n                id_usuario: user.id,\n                valid: moment_timezone__WEBPACK_IMPORTED_MODULE_6__().add(\"2\", \"h\").tz('America/El_Salvador').format()\n              });\n            case 3:\n              result = _context2.sent;\n              return _context2.abrupt(\"return\", result.refresh_token);\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      function refresh_token(_x3) {\n        return _refresh_token.apply(this, arguments);\n      }\n      return refresh_token;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/utils/Auth.mjs?");

/***/ }),

/***/ "./app/utils/Call.mjs":
/*!****************************!*\
  !*** ./app/utils/Call.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Call = function Call(method) {\n  return function (req, res, next) {\n    return method(req, res)[\"catch\"](function (e) {\n      return next(e);\n    });\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Call);\n\n//# sourceURL=webpack://api-sic/./app/utils/Call.mjs?");

/***/ }),

/***/ "./app/utils/VerifyModel.mjs":
/*!***********************************!*\
  !*** ./app/utils/VerifyModel.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VerifyModel)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../handlers/UnprocessableEntityException.mjs */ \"./handlers/UnprocessableEntityException.mjs\");\n/* harmony import */ var _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../handlers/NotFoundExeption.mjs */ \"./handlers/NotFoundExeption.mjs\");\n/* harmony import */ var _handlers_BadRequestException_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../handlers/BadRequestException.mjs */ \"./handlers/BadRequestException.mjs\");\n\n\n\n\n\n\n\nvar VerifyModel = /*#__PURE__*/function () {\n  function VerifyModel() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, VerifyModel);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(VerifyModel, null, [{\n    key: \"exist\",\n    value: function () {\n      var _exist = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee(model, id) {\n        var msg,\n          options,\n          idValido,\n          resultado,\n          _args = arguments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              msg = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'Recurso no encontrado';\n              options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};\n              idValido = VerifyModel.isValid(id);\n              _context.next = 5;\n              return model.findByPk(idValido, options);\n            case 5:\n              resultado = _context.sent;\n              if (resultado) {\n                _context.next = 8;\n                break;\n              }\n              throw new _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"](msg);\n            case 8:\n              return _context.abrupt(\"return\", resultado);\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function exist(_x, _x2) {\n        return _exist.apply(this, arguments);\n      }\n      return exist;\n    }()\n  }, {\n    key: \"isValid\",\n    value: function isValid(id) {\n      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unprocessable Entity by text';\n      if (!(/^\\d+$/.test(String(id)) && id > 0)) {\n        throw new _handlers_UnprocessableEntityException_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"](message);\n      }\n      return Number.parseInt(id, 10);\n    }\n  }, {\n    key: \"unique\",\n    value: function () {\n      var _unique = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee2(model, arr) {\n        var msg,\n          resultado,\n          _args2 = arguments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              msg = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 'Debe ser un valor unico';\n              _context2.next = 3;\n              return model.findOne({\n                where: arr\n              });\n            case 3:\n              resultado = _context2.sent;\n              if (!resultado) {\n                _context2.next = 6;\n                break;\n              }\n              throw new _handlers_BadRequestException_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"](msg);\n            case 6:\n              return _context2.abrupt(\"return\", resultado);\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      function unique(_x3, _x4) {\n        return _unique.apply(this, arguments);\n      }\n      return unique;\n    }()\n  }, {\n    key: \"existOrCreate\",\n    value: function () {\n      var _existOrCreate = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee3(model, options, data) {\n        var transaction,\n          resultado,\n          _args3 = arguments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              transaction = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : null;\n              _context3.next = 3;\n              return model.findOne(options);\n            case 3:\n              resultado = _context3.sent;\n              if (resultado) {\n                _context3.next = 14;\n                break;\n              }\n              if (!(transaction !== null)) {\n                _context3.next = 11;\n                break;\n              }\n              _context3.next = 8;\n              return model.create(data, transaction);\n            case 8:\n              resultado = _context3.sent;\n              _context3.next = 14;\n              break;\n            case 11:\n              _context3.next = 13;\n              return model.create(data);\n            case 13:\n              resultado = _context3.sent;\n            case 14:\n              return _context3.abrupt(\"return\", resultado);\n            case 15:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3);\n      }));\n      function existOrCreate(_x5, _x6, _x7) {\n        return _existOrCreate.apply(this, arguments);\n      }\n      return existOrCreate;\n    }()\n  }, {\n    key: \"arrayExist\",\n    value: function () {\n      var _arrayExist = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee4(model, arr) {\n        var msg,\n          options,\n          index,\n          _args4 = arguments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee4$(_context4) {\n          while (1) switch (_context4.prev = _context4.next) {\n            case 0:\n              msg = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 'id no existe';\n              options = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : {};\n              index = 0;\n            case 3:\n              if (!(index < arr.length)) {\n                _context4.next = 9;\n                break;\n              }\n              _context4.next = 6;\n              return this.exist(model, arr[index], msg, options);\n            case 6:\n              index += 1;\n              _context4.next = 3;\n              break;\n            case 9:\n            case \"end\":\n              return _context4.stop();\n          }\n        }, _callee4, this);\n      }));\n      function arrayExist(_x8, _x9) {\n        return _arrayExist.apply(this, arguments);\n      }\n      return arrayExist;\n    }()\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./app/utils/VerifyModel.mjs?");

/***/ }),

/***/ "./app/utils/ajv-instance.mjs":
/*!************************************!*\
  !*** ./app/utils/ajv-instance.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ajv */ \"ajv\");\n/* harmony import */ var ajv_formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ajv-formats */ \"ajv-formats\");\n/* harmony import */ var ajv_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ajv-errors */ \"ajv-errors\");\n/* harmony import */ var ajv_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ajv-dates */ \"ajv-dates\");\n/* harmony import */ var _schemas_definitions_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schemas/definitions.mjs */ \"./app/schemas/definitions.mjs\");\n\n\n\n\n\nvar ajv = (0,ajv_dates__WEBPACK_IMPORTED_MODULE_3__.dates)(new ajv__WEBPACK_IMPORTED_MODULE_0__({\n  allErrors: true,\n  $data: true\n}));\najv_formats__WEBPACK_IMPORTED_MODULE_1__(ajv);\najv_errors__WEBPACK_IMPORTED_MODULE_2__(ajv);\najv.addSchema(_schemas_definitions_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajv);\n\n//# sourceURL=webpack://api-sic/./app/utils/ajv-instance.mjs?");

/***/ }),

/***/ "./configs/Env.mjs":
/*!*************************!*\
  !*** ./configs/Env.mjs ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n\n\nvar envFile =  true ? \".env.\".concat(\"development\") : 0;\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config({\n  path: path__WEBPACK_IMPORTED_MODULE_1__.resolve(envFile)\n});\n\n//# sourceURL=webpack://api-sic/./configs/Env.mjs?");

/***/ }),

/***/ "./configs/cors.mjs":
/*!**************************!*\
  !*** ./configs/cors.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar corsConfig = {\n  origin: '*',\n  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',\n  preflightContinue: false,\n  exposedHeaders: ['page', 'per_page', 'total_rows'],\n  optionsSuccessStatus: 204\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (corsConfig);\n\n//# sourceURL=webpack://api-sic/./configs/cors.mjs?");

/***/ }),

/***/ "./configs/db.mjs":
/*!************************!*\
  !*** ./configs/db.mjs ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar config = {\n  connections: {\n    postgres: {\n      motor: \"postgres\" || 0,\n      // mysql, mariadb, sqlite, postgres\n      options: {\n        db_host: \"localhost\" || 0,\n        db_port: \"5432\" || 0,\n        db_name: \"funeraria\" || 0,\n        db_username: \"postgres\" || 0,\n        db_password: \"postgres\" || 0\n      }\n    }\n  },\n  \"default\": 'postgres'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://api-sic/./configs/db.mjs?");

/***/ }),

/***/ "./configs/httpCode.mjs":
/*!******************************!*\
  !*** ./configs/httpCode.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HttpCode)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n\n\n\nvar HttpCode = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(function HttpCode() {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, HttpCode);\n});\n// Success\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(HttpCode, \"HTTP_OK\", 200);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(HttpCode, \"HTTP_CREATED\", 201);\n// CLIENT ERRORS\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(HttpCode, \"HTTP_BAD_REQUEST\", 400);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(HttpCode, \"HTTP_UNAUTHORIZED\", 401);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(HttpCode, \"HTTP_FORBIDDEN\", 403);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(HttpCode, \"HTTP_NOT_FOUND\", 404);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(HttpCode, \"HTTP_UNPROCESSABLE_ENTITY\", 422);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(HttpCode, \"HTTP_NOT_MODIFIED\", 304);\n// SERVER ERRORS\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(HttpCode, \"HTTP_INTERNAL_SERVER_ERROR\", 500);\n\n\n//# sourceURL=webpack://api-sic/./configs/httpCode.mjs?");

/***/ }),

/***/ "./configs/server.mjs":
/*!****************************!*\
  !*** ./configs/server.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var _cors_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cors.mjs */ \"./configs/cors.mjs\");\n\n\n\n\n\n\n\nvar Server = /*#__PURE__*/function () {\n  function Server() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Server);\n    this.app = express__WEBPACK_IMPORTED_MODULE_2__();\n    this.server = (0,http__WEBPACK_IMPORTED_MODULE_3__.createServer)(this.app);\n    this.port = \"8000\" || 0;\n    this.host = \"localhost\" || 0;\n    this.middlewares();\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(Server, [{\n    key: \"middlewares\",\n    value: function middlewares() {\n      this.app.use(express_fileupload__WEBPACK_IMPORTED_MODULE_5__({\n        createParentPath: true\n      }));\n      this.app.use(cors__WEBPACK_IMPORTED_MODULE_4__(_cors_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));\n      this.app.use(express__WEBPACK_IMPORTED_MODULE_2__[\"static\"]('public'));\n      this.app.use(express__WEBPACK_IMPORTED_MODULE_2__.json());\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n      this.server.listen(this.port, this.host, function () {\n        // eslint-disable-next-line no-console\n        console.log(\"http://\".concat(_this.host, \":\").concat(_this.port));\n      });\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Server());\n\n//# sourceURL=webpack://api-sic/./configs/server.mjs?");

/***/ }),

/***/ "./handlers/BadRequestException.mjs":
/*!******************************************!*\
  !*** ./handlers/BadRequestException.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BadRequestException)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseError.mjs */ \"./handlers/BaseError.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar BadRequestException = /*#__PURE__*/function (_BaseError) {\n  function BadRequestException() {\n    var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Valores no válidos';\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, BadRequestException);\n    return _callSuper(this, BadRequestException, ['BAD_REQUEST', _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].HTTP_BAD_REQUEST, description]);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(BadRequestException, _BaseError);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(BadRequestException);\n}(_BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n//# sourceURL=webpack://api-sic/./handlers/BadRequestException.mjs?");

/***/ }),

/***/ "./handlers/BaseError.mjs":
/*!********************************!*\
  !*** ./handlers/BaseError.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseError)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ \"@babel/runtime/helpers/wrapNativeSuper\");\n\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nvar BaseError = /*#__PURE__*/function (_Error) {\n  function BaseError(name, statusCode, description) {\n    var _this;\n    var isOperational = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, BaseError);\n    _this = _callSuper(this, BaseError, [description]);\n    Object.setPrototypeOf(_this, (this instanceof BaseError ? this.constructor : void 0).prototype);\n    _this.name = name;\n    _this.description = description;\n    _this.statusCode = statusCode;\n    _this.isOperational = isOperational;\n    Error.captureStackTrace(_this);\n    return _this;\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(BaseError, _Error);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(BaseError);\n}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__(Error));\n\n\n//# sourceURL=webpack://api-sic/./handlers/BaseError.mjs?");

/***/ }),

/***/ "./handlers/ForbiddenException.mjs":
/*!*****************************************!*\
  !*** ./handlers/ForbiddenException.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ForbiddenException)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseError.mjs */ \"./handlers/BaseError.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar ForbiddenException = /*#__PURE__*/function (_BaseError) {\n  function ForbiddenException() {\n    var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Accion denegada';\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, ForbiddenException);\n    return _callSuper(this, ForbiddenException, ['FORBIDDEN', _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].HTTP_FORBIDDEN, description]);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(ForbiddenException, _BaseError);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(ForbiddenException);\n}(_BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n//# sourceURL=webpack://api-sic/./handlers/ForbiddenException.mjs?");

/***/ }),

/***/ "./handlers/Handler.mjs":
/*!******************************!*\
  !*** ./handlers/Handler.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Handler)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _BaseError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseError.mjs */ \"./handlers/BaseError.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n/* harmony import */ var _app_nucleo_mongo_error_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/nucleo/mongo/error.mjs */ \"./app/nucleo/mongo/error.mjs\");\n\n\n\n\n\nvar Handler = /*#__PURE__*/function () {\n  function Handler() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Handler);\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(Handler, null, [{\n    key: \"logError\",\n    value: function logError(req, err) {\n      if (req.usuario && process.env.ENABLED_BITACORA_MONGODB === 'true') {\n        var _Error = new _app_nucleo_mongo_error_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n          id_bitacora: req.bitacora ? req.bitacora.id : null,\n          codigo: err.statusCode,\n          mensaje: err.message,\n          trace: err.stack,\n          content: err\n        });\n        _Error.save();\n      }\n    }\n  }, {\n    key: \"logErrorMiddleware\",\n    value: function logErrorMiddleware(err, req, res, next) {\n      Handler.logError(req, err);\n      next(err);\n    }\n\n    // eslint-disable-next-line consistent-return,no-unused-vars\n  }, {\n    key: \"handlerError\",\n    value: function handlerError(err, req, res, next) {\n      var debug = \"true\" === 'true';\n      var code = _getErrorCode.call(Handler, err);\n      if (err.statusCode) code = err.statusCode;\n      if (debug) {\n        return res.status(code).json({\n          err: err,\n          stack: err.stack\n        });\n      }\n      return res.status(code).json(_responseContent.call(Handler, err));\n    }\n  }, {\n    key: \"isOPerationalError\",\n    value: function isOPerationalError(error) {\n      if (error instanceof _BaseError_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) return error.isOperational;\n      return false;\n    }\n  }]);\n}();\nfunction _getErrorCode(err) {\n  var CodeErrors = {\n    badRequest: {\n      names: ['SequelizeValidationError', 'JsonSchemaValidation', 'SequelizeUniqueConstraintError'],\n      code: _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HTTP_BAD_REQUEST\n    },\n    unauthorized: {\n      names: ['TokenExpiredError', 'JsonWebTokenError'],\n      code: _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HTTP_UNAUTHORIZED\n    },\n    internal: {\n      names: ['SequelizeForeignKeyConstraintError'],\n      code: _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HTTP_INTERNAL_SERVER_ERROR\n    }\n  };\n\n  // eslint-disable-next-line no-restricted-syntax,guard-for-in\n  for (var type in CodeErrors) {\n    if (CodeErrors[type].names.includes(err.name)) return CodeErrors[type].code;\n  }\n  return _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HTTP_INTERNAL_SERVER_ERROR;\n}\nfunction _responseContent(err) {\n  if (err.statusCode) return {\n    message: err.description\n  };\n  if (err.name && err.name === 'JsonSchemaValidation') {\n    return err.validations.body;\n  }\n  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {\n    return err.errors.map(function (row) {\n      return {\n        field: row.path,\n        message: row.message\n      };\n    });\n  }\n  if (err.name === 'SequelizeForeignKeyConstraintError') {\n    return {\n      message: 'No se puede eliminar uno o más registros debido a que tienen acciones asociadas al sistema'\n    };\n  }\n  if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') {\n    return {\n      message: 'No autenticado'\n    };\n  }\n  return {\n    message: 'Ocurrio un error intentelo mas tarde'\n  };\n}\n\n\n//# sourceURL=webpack://api-sic/./handlers/Handler.mjs?");

/***/ }),

/***/ "./handlers/NoAuthException.mjs":
/*!**************************************!*\
  !*** ./handlers/NoAuthException.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NoAuthException)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseError.mjs */ \"./handlers/BaseError.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar NoAuthException = /*#__PURE__*/function (_BaseError) {\n  function NoAuthException() {\n    var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No autenticado';\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, NoAuthException);\n    return _callSuper(this, NoAuthException, ['UNAUTHORIZED', _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].HTTP_UNAUTHORIZED, description]);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(NoAuthException, _BaseError);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(NoAuthException);\n}(_BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n//# sourceURL=webpack://api-sic/./handlers/NoAuthException.mjs?");

/***/ }),

/***/ "./handlers/NotFoundExeption.mjs":
/*!***************************************!*\
  !*** ./handlers/NotFoundExeption.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotFoundExeption)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseError.mjs */ \"./handlers/BaseError.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar NotFoundExeption = /*#__PURE__*/function (_BaseError) {\n  function NotFoundExeption() {\n    var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Recurso no encontrado';\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, NotFoundExeption);\n    return _callSuper(this, NotFoundExeption, ['NOT_FOUND', _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].HTTP_NOT_FOUND, description]);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(NotFoundExeption, _BaseError);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(NotFoundExeption);\n}(_BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n//# sourceURL=webpack://api-sic/./handlers/NotFoundExeption.mjs?");

/***/ }),

/***/ "./handlers/UnprocessableEntityException.mjs":
/*!***************************************************!*\
  !*** ./handlers/UnprocessableEntityException.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UnprocessableEntityException)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseError.mjs */ \"./handlers/BaseError.mjs\");\n/* harmony import */ var _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configs/httpCode.mjs */ \"./configs/httpCode.mjs\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar UnprocessableEntityException = /*#__PURE__*/function (_BaseError) {\n  function UnprocessableEntityException() {\n    var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unprocessable Entity';\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, UnprocessableEntityException);\n    return _callSuper(this, UnprocessableEntityException, ['UNPROCESSABLE_ENTITY', _configs_httpCode_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].HTTP_UNPROCESSABLE_ENTITY, description]);\n  }\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__(UnprocessableEntityException, _BaseError);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__(UnprocessableEntityException);\n}(_BaseError_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n//# sourceURL=webpack://api-sic/./handlers/UnprocessableEntityException.mjs?");

/***/ }),

/***/ "./main.mjs":
/*!******************!*\
  !*** ./main.mjs ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webpack.config.js */ \"./webpack.config.js\");\n/* harmony import */ var _routes_api_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/api.mjs */ \"./routes/api.mjs\");\n/* harmony import */ var _routes_web_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/web.mjs */ \"./routes/web.mjs\");\n/* harmony import */ var _handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handlers/Handler.mjs */ \"./handlers/Handler.mjs\");\n/* harmony import */ var _configs_server_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./configs/server.mjs */ \"./configs/server.mjs\");\n/* harmony import */ var _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handlers/NotFoundExeption.mjs */ \"./handlers/NotFoundExeption.mjs\");\n/* harmony import */ var _routes_swagger_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/swagger.mjs */ \"./routes/swagger.mjs\");\n\n\n/* eslint-disable global-require */\n\n\n\n// eslint-disable-next-line import/extensions\n\n\n\n\n\n\n\nvar Main = /*#__PURE__*/function () {\n  function Main() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Main);\n    this.server = _configs_server_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\n    this.configuracion();\n    this.server.start();\n    this.routes();\n    this.ExceptionConfig();\n  }\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(Main, [{\n    key: \"routes\",\n    value: function routes() {\n      this.server.app.use('/', _routes_web_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n      this.server.app.use('/api', _routes_api_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      this.server.app.use('/', _routes_swagger_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n      this.server.app.all('*', function () {\n        throw new _handlers_NotFoundExeption_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]();\n      });\n    }\n  }, {\n    key: \"configuracion\",\n    value: function configuracion() {\n      if (true) {\n        // eslint-disable-next-line import/extensions\n        var compiler = webpack__WEBPACK_IMPORTED_MODULE_2__(_webpack_config_js__WEBPACK_IMPORTED_MODULE_5__);\n        this.server.app.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__(compiler));\n        this.server.app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__(compiler));\n      }\n    }\n  }, {\n    key: \"ExceptionConfig\",\n    value: function ExceptionConfig() {\n      this.server.app.use(_handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].logErrorMiddleware);\n      this.server.app.use(_handlers_Handler_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].handlerError);\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://api-sic/./main.mjs?");

/***/ }),

/***/ "./routes/api.mjs":
/*!************************!*\
  !*** ./routes/api.mjs ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/middlewares/validate.mjs */ \"./app/middlewares/validate.mjs\");\n/* harmony import */ var _app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/controllers/ApiController.mjs */ \"./app/controllers/ApiController.mjs\");\n/* harmony import */ var _app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/middlewares/Auth.mjs */ \"./app/middlewares/Auth.mjs\");\n/* harmony import */ var _app_middlewares_Auth2FA_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/middlewares/Auth2FA.mjs */ \"./app/middlewares/Auth2FA.mjs\");\n/* harmony import */ var _app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/utils/Call.mjs */ \"./app/utils/Call.mjs\");\n/* harmony import */ var _api_usuario_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/usuario.mjs */ \"./routes/api/usuario.mjs\");\n/* harmony import */ var _api_rol_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/rol.mjs */ \"./routes/api/rol.mjs\");\n/* harmony import */ var _api_tipoRol_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/tipoRol.mjs */ \"./routes/api/tipoRol.mjs\");\n/* harmony import */ var _api_perfil_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/perfil.mjs */ \"./routes/api/perfil.mjs\");\n/* harmony import */ var _api_ruta_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/ruta.mjs */ \"./routes/api/ruta.mjs\");\n/* harmony import */ var _app_schemas_RecoveryPasswordSchema_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/schemas/RecoveryPasswordSchema.mjs */ \"./app/schemas/RecoveryPasswordSchema.mjs\");\n/* harmony import */ var _app_schemas_LoginSchema_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/schemas/LoginSchema.mjs */ \"./app/schemas/LoginSchema.mjs\");\n/* harmony import */ var _app_schemas_TwoFactorAuthSchema_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/schemas/TwoFactorAuthSchema.mjs */ \"./app/schemas/TwoFactorAuthSchema.mjs\");\n/* harmony import */ var _api_catalogo_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api/catalogo.mjs */ \"./routes/api/catalogo.mjs\");\n/* harmony import */ var _api_servicio_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api/servicio.mjs */ \"./routes/api/servicio.mjs\");\n/* harmony import */ var _api_cliente_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api/cliente.mjs */ \"./routes/api/cliente.mjs\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.post('/v1/login', [(0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_LoginSchema_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login));\nrouter.post('/v1/logout', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logout));\nrouter.get('/v1/2fa', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].twoFactorList));\nrouter.post('/v1/2fa', [(0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_TwoFactorAuthSchema_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].twoFactorAuthLoginChoose));\nrouter.post('/v1/2fa/verify', [_app_middlewares_Auth2FA_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].verifyTwoFactorAuthCode));\nrouter.post('/v1/2fa/code', [_app_middlewares_Auth2FA_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendCode));\nrouter.post('/v1/2fa/verification/token', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendVerificationToken));\nrouter.get('/v1/verification/account/:token', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].confirmUser));\nrouter.post('/v1/refresh', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].RefreshToken));\nrouter.use('/v1/users', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], _api_usuario_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nrouter.use('/v1/perfiles', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], _api_perfil_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\nrouter.use('/v1/roles', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], _api_rol_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nrouter.use('/v1/tipo/roles', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], _api_tipoRol_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nrouter.use('/v1/rutas', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], _api_ruta_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nrouter.put('/v1/password/change', [(0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_RecoveryPasswordSchema_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changePassword));\nrouter.post('/v1/password/reset/', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_ApiController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetPassword));\nrouter.use('/v1/catalogo', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], _api_catalogo_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\nrouter.use('/v1/servicios', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], _api_servicio_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"]);\nrouter.use('/v1/clientes', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]], _api_cliente_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/api.mjs?");

/***/ }),

/***/ "./routes/api/catalogo.mjs":
/*!*********************************!*\
  !*** ./routes/api/catalogo.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _app_controllers_ServicioController_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/controllers/ServicioController.mjs */ \"./app/controllers/ServicioController.mjs\");\n/* harmony import */ var _app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/middlewares/Auth.mjs */ \"./app/middlewares/Auth.mjs\");\n\n\n\n// import Call from '../../app/utils/Call.mjs';\n// import CatalogoController from '../../app/controllers/CatalogoController.mjs';\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/tipo-servicio', [_app_middlewares_Auth_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]], _app_controllers_ServicioController_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listTipoServicio);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/api/catalogo.mjs?");

/***/ }),

/***/ "./routes/api/cliente.mjs":
/*!********************************!*\
  !*** ./routes/api/cliente.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/utils/Call.mjs */ \"./app/utils/Call.mjs\");\n/* harmony import */ var _app_controllers_ClienteController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/controllers/ClienteController.mjs */ \"./app/controllers/ClienteController.mjs\");\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_ClienteController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list));\nrouter.get('/:id', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_ClienteController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show));\nrouter.post('/', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_ClienteController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create));\nrouter.put('/:id', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_ClienteController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/api/cliente.mjs?");

/***/ }),

/***/ "./routes/api/perfil.mjs":
/*!*******************************!*\
  !*** ./routes/api/perfil.mjs ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/middlewares/validate.mjs */ \"./app/middlewares/validate.mjs\");\n/* harmony import */ var _app_controllers_PerfilController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/controllers/PerfilController.mjs */ \"./app/controllers/PerfilController.mjs\");\n/* harmony import */ var _app_schemas_PerfilCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/schemas/PerfilCreateSchema.mjs */ \"./app/schemas/PerfilCreateSchema.mjs\");\n/* harmony import */ var _app_schemas_PerfilUpdateSchema_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/schemas/PerfilUpdateSchema.mjs */ \"./app/schemas/PerfilUpdateSchema.mjs\");\n/* harmony import */ var _app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/utils/Call.mjs */ \"./app/utils/Call.mjs\");\n/* harmony import */ var _app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/middlewares/validateRole.mjs */ \"./app/middlewares/validateRole.mjs\");\n\n\n\n// eslint-disable-next-line import/no-named-as-default\n\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('ROLE_PROFILE_LIST')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_PerfilController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].index));\nrouter.post('/', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('ROLE_PROFILE_CREATE'), (0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_PerfilCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_PerfilController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].store));\nrouter.get('/:id', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('ROLE_PROFILE_LIST')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_PerfilController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show));\nrouter.put('/:id', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('ROLE_PROFILE_UPDATE'), (0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_PerfilUpdateSchema_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_app_controllers_PerfilController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/api/perfil.mjs?");

/***/ }),

/***/ "./routes/api/rol.mjs":
/*!****************************!*\
  !*** ./routes/api/rol.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/middlewares/validate.mjs */ \"./app/middlewares/validate.mjs\");\n/* harmony import */ var _app_controllers_RolController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/controllers/RolController.mjs */ \"./app/controllers/RolController.mjs\");\n/* harmony import */ var _app_schemas_RolCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/schemas/RolCreateSchema.mjs */ \"./app/schemas/RolCreateSchema.mjs\");\n/* harmony import */ var _app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/utils/Call.mjs */ \"./app/utils/Call.mjs\");\n/* harmony import */ var _app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/middlewares/validateRole.mjs */ \"./app/middlewares/validateRole.mjs\");\n\n\n\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('ROLE_ROLE_LIST')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RolController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].index));\nrouter.post('/', [(0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_RolCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), (0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('ROLE_ROLE_CREATE')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RolController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].store));\nrouter.get('/:id', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('ROLE_ROLE_LIST')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RolController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show));\nrouter.put('/:id', [(0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_RolCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), (0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('ROLE_ROLE_UPDATE')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RolController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update));\nrouter[\"delete\"]('/:id', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('ROLE_ROLE_DELETE')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RolController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].destroy));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/api/rol.mjs?");

/***/ }),

/***/ "./routes/api/ruta.mjs":
/*!*****************************!*\
  !*** ./routes/api/ruta.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/middlewares/validate.mjs */ \"./app/middlewares/validate.mjs\");\n/* harmony import */ var _app_controllers_RutaController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/controllers/RutaController.mjs */ \"./app/controllers/RutaController.mjs\");\n/* harmony import */ var _app_schemas_RutaCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/schemas/RutaCreateSchema.mjs */ \"./app/schemas/RutaCreateSchema.mjs\");\n/* harmony import */ var _app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/utils/Call.mjs */ \"./app/utils/Call.mjs\");\n/* harmony import */ var _app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/middlewares/validateRole.mjs */ \"./app/middlewares/validateRole.mjs\");\n\n\n\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('ROLE_PATH_LIST')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RutaController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].index));\nrouter.post('/', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('ROLE_PATH_CREATE'), (0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_RutaCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RutaController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].store));\nrouter.get('/get-rutas', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RutaController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getRutas));\nrouter.get('/:id', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('ROLE_PATH_LIST')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RutaController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show));\nrouter.put('/:id', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('ROLE_PATH_UPDATE'), (0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_RutaCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_RutaController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/api/ruta.mjs?");

/***/ }),

/***/ "./routes/api/servicio.mjs":
/*!*********************************!*\
  !*** ./routes/api/servicio.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/utils/Call.mjs */ \"./app/utils/Call.mjs\");\n/* harmony import */ var _app_controllers_ServicioController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/controllers/ServicioController.mjs */ \"./app/controllers/ServicioController.mjs\");\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_ServicioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].index));\nrouter.post('/', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_ServicioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create));\nrouter.get('/:id', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_ServicioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getById));\nrouter.put('/:id', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_ServicioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update));\nrouter[\"delete\"]('/:id', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_ServicioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].destroy));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/api/servicio.mjs?");

/***/ }),

/***/ "./routes/api/tipoRol.mjs":
/*!********************************!*\
  !*** ./routes/api/tipoRol.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/utils/Call.mjs */ \"./app/utils/Call.mjs\");\n/* harmony import */ var _app_controllers_TipoRolController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/controllers/TipoRolController.mjs */ \"./app/controllers/TipoRolController.mjs\");\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/', [], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_controllers_TipoRolController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].index));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/api/tipoRol.mjs?");

/***/ }),

/***/ "./routes/api/usuario.mjs":
/*!********************************!*\
  !*** ./routes/api/usuario.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/middlewares/validate.mjs */ \"./app/middlewares/validate.mjs\");\n/* harmony import */ var _app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/controllers/UsuarioController.mjs */ \"./app/controllers/UsuarioController.mjs\");\n/* harmony import */ var _app_schemas_UsuarioCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/schemas/UsuarioCreateSchema.mjs */ \"./app/schemas/UsuarioCreateSchema.mjs\");\n/* harmony import */ var _app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/utils/Call.mjs */ \"./app/utils/Call.mjs\");\n/* harmony import */ var _app_schemas_UsuarioPasswordUpdateSchema_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/schemas/UsuarioPasswordUpdateSchema.mjs */ \"./app/schemas/UsuarioPasswordUpdateSchema.mjs\");\n/* harmony import */ var _app_schemas_UsuarioUpdateEmailSchema_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/schemas/UsuarioUpdateEmailSchema.mjs */ \"./app/schemas/UsuarioUpdateEmailSchema.mjs\");\n/* harmony import */ var _app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/middlewares/validateRole.mjs */ \"./app/middlewares/validateRole.mjs\");\n/* harmony import */ var _app_schemas_UsuarioUpdateSchema_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/schemas/UsuarioUpdateSchema.mjs */ \"./app/schemas/UsuarioUpdateSchema.mjs\");\n\n\n\n\n\n\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/2fa/method', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('ROLE_USER_AUTH_METHOD_LIST')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getMetodosUsuario));\nrouter.get('/', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('ROLE_USER_LIST')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].index));\nrouter.post('/', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('ROLE_USER_CREATE'), (0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_UsuarioCreateSchema_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].store));\nrouter.get('/:id', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('ROLE_USER_LIST')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show));\nrouter.put('/:id', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('ROLE_USER_UPDATE'), (0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_UsuarioUpdateSchema_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update));\nrouter[\"delete\"]('/:id', [(0,_app_middlewares_validateRole_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('ROLE_USER_DELETE')], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].destroy));\nrouter.put('/update/password', [(0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_UsuarioPasswordUpdateSchema_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updatePassword));\nrouter.put('/update/email', [(0,_app_middlewares_validate_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_schemas_UsuarioUpdateEmailSchema_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])], (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateEmail));\nrouter.post('/2fa/method', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].storeMethodUser));\nrouter.post('/2fa/method/verify', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].authMethodVerification));\nrouter.put('/2fa/method/:id_method', (0,_app_utils_Call_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_app_controllers_UsuarioController_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updatePrimaryMethod));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/api/usuario.mjs?");

/***/ }),

/***/ "./routes/swagger.mjs":
/*!****************************!*\
  !*** ./routes/swagger.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\");\n/* harmony import */ var yamljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yamljs */ \"yamljs\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-yaml */ \"js-yaml\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fs */ \"fs\");\n/* eslint-disable guard-for-in */\n// Aquí se hace el routing hacia la documentación de la API.\n\n\n\n\n\n\n\n// Creando variable encargada de la direccion del archivo YAML principal\n// eslint-disable-next-line no-underscore-dangle\nvar __dirname = (0,path__WEBPACK_IMPORTED_MODULE_3__.dirname)((0,url__WEBPACK_IMPORTED_MODULE_4__.fileURLToPath)(\"file:///home/willian/Projects/funeraria/api-funeraria/routes/swagger.mjs\"));\n// Se lee el archivo openapi.YAML que se cargará en /api/docs/local (swagger interno)\nvar swaggerDocument = yamljs__WEBPACK_IMPORTED_MODULE_2__.load(path__WEBPACK_IMPORTED_MODULE_3__.join(__dirname, '../app/docs/index.yaml'));\n// Se lee el archivo openapi.YAML que se cargará en /api/docs (swagger publico)\nvar swaggerDocumentPublic = yamljs__WEBPACK_IMPORTED_MODULE_2__.load(path__WEBPACK_IMPORTED_MODULE_3__.join(__dirname, '../app/docs/index.yaml'));\n// Se lee el archivo openapi.YAML para eliminar la propiedad area de los paths.\nvar swaggerDocumentModify = yamljs__WEBPACK_IMPORTED_MODULE_2__.load(path__WEBPACK_IMPORTED_MODULE_3__.join(__dirname, '../app/docs/index.yaml'));\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\n\n// eslint-disable-next-line no-restricted-syntax\nfor (var pat in swaggerDocumentModify.paths) {\n  delete swaggerDocumentModify.paths[pat].area;\n}\nvar swaggerTemporal = js_yaml__WEBPACK_IMPORTED_MODULE_5__.dump(swaggerDocumentModify);\nfs__WEBPACK_IMPORTED_MODULE_6__.writeFileSync(path__WEBPACK_IMPORTED_MODULE_3__.join(__dirname, '../app/docs/test.yaml'), swaggerTemporal, 'utf8');\n\n// cambio del titulo del swagger interno\nswaggerDocument.info.title = 'Documentación de la API de la Plantilla - Development';\n\n// correcion del swagger publico, aqui se eliminan los paths con la propiedad \"area: development\"\n// eslint-disable-next-line no-restricted-syntax\nfor (var _pat in swaggerDocumentPublic.paths) {\n  // comprueba si existe una propiedad \"area: development\"\n  if (swaggerDocumentPublic.paths[_pat].area === 'development') {\n    delete swaggerDocumentPublic.paths[_pat];\n  }\n}\n\n// eslint-disable-next-line no-restricted-syntax\nfor (var _pat2 in swaggerDocument.paths) {\n  // comprueba si existe una propiedad \"area: development\"\n  if (swaggerDocument.paths[_pat2].area === 'api') {\n    delete swaggerDocument.paths[_pat2];\n  }\n}\n// Se establece la ruta hacia el Swagger Interno\nrouter.use('/local', swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__.serveFiles(swaggerDocument), swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__.setup(swaggerDocument));\n// Se establece la ruta hacia el swagger publico\nrouter.use('/docs', swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__.serveFiles(swaggerDocumentPublic), swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__.setup(swaggerDocumentPublic));\n// Ruta del archivo json de la documentacion\nrouter.use('/api/doc.json', function (req, res) {\n  res.header('Content-Type', 'application/json');\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_3__.join(__dirname, '../app/docs/test.json'));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/swagger.mjs?");

/***/ }),

/***/ "./routes/web.mjs":
/*!************************!*\
  !*** ./routes/web.mjs ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/', function (req, res) {\n  res.send('<h1 style=\"color:red\">Welcome</h1>');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://api-sic/./routes/web.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("server." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ff72126f620365b2d367")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"server": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./app.mjs");
/******/ 	
/******/ })()
;