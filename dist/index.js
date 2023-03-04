"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defaultTemplate = _interopRequireDefault(require("./utils/defaultTemplate"));
var _server = _interopRequireDefault(require("./server"));
require("colors");
// Get port
const PORT = _server.default.get("port");

//listen server
_server.default.listen(PORT, () => {
  try {
    console.log("Listen on port:".blue, `${PORT}`.rainbow.underline);
    _server.default.use("/", (req, res) => {
      res.send((0, _defaultTemplate.default)(PORT));
    });
  } catch (error) {
    console.log(error);
  }
});