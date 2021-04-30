"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignIn = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _User = require("src/entity/User");

var _getDatabaseConnection = require("../../lib/getDatabaseConnection");

var _md = _interopRequireDefault(require("md5"));

var SignIn = function SignIn() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, SignIn);
  (0, _defineProperty2["default"])(this, "username", void 0);
  (0, _defineProperty2["default"])(this, "password", void 0);
  (0, _defineProperty2["default"])(this, "user", void 0);
  (0, _defineProperty2["default"])(this, "errors", {
    username: '',
    password: ''
  });
  (0, _defineProperty2["default"])(this, "validate", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var connection, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_this.username.trim() === '') {
              _this.errors.username = '请填写用户名';
            }

            _context.next = 3;
            return (0, _getDatabaseConnection.getDatabaseConnection)();

          case 3:
            connection = _context.sent;
            _context.next = 6;
            return connection.manager.findOne(_User.User, {
              where: {
                username: _this.username
              }
            });

          case 6:
            user = _context.sent;
            _this.user = user;

            if (user) {
              if (user.passwordDigest !== (0, _md["default"])(_this.password)) {
                _this.errors.password = '密码与用户名不匹配';
              }
            } else {
              _this.errors.username = '用户名不存在';
            } // const user = await connection.manager.findOne(User, { where: { username: this.username } });
            // this.user = user;
            // if (user) {
            //   if (user.passwordDigest !== md5(this.password)) {
            //     this.errors.password.push('密码与用户名不匹配');
            //   }
            // } else {
            //   this.errors.username.push('用户名不存在');
            // }


          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  (0, _defineProperty2["default"])(this, "hasErrors", function () {
    return !!Object.values(_this.errors).find(function (item) {
      return item;
    });
  });
};

exports.SignIn = SignIn;