"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const postList = await connection.manager.find(Post)
            // if (postList.length === 0) {
            //     await connection.manager.save([1,2,3,4,5,6,7,8,9,10,11].map(item => {
            //         return new Post({title: `第${item}篇`, content: `这是我的第${item}篇文章内容`})
            //     }))
            //     // await connection.manager.save(new Post({ title: `第1篇`, content: `这是我的第1篇文章内容` }))
            //     console.log('保存成功++++')
            // }
            // console.log('postList+++', postList)
            connection.close();

          case 1:
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