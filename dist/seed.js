"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var postList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return connection.manager.find(_Post.Post);

          case 2:
            postList = _context.sent;

            if (!(postList.length === 0)) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return connection.manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (item) {
              return new _Post.Post({
                title: "\u7B2C".concat(item, "\u7BC7"),
                content: "\u8FD9\u662F\u6211\u7684\u7B2C".concat(item, "\u7BC7\u6587\u7AE0\u5185\u5BB9")
              });
            }));

          case 6:
            // await connection.manager.save(new Post({ title: `第1篇`, content: `这是我的第1篇文章内容` }))
            console.log('保存成功++++');

          case 7:
            console.log('postList+++', postList);
            connection.close();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log('error+++', error);
});