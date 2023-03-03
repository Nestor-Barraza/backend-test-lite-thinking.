"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _index = _interopRequireDefault(require("../../Domain/index"));
var _errors = require("../../../../utils/errors");
//Delete product
module.exports = async ({
  params: {
    id
  },
  user: {
    role
  }
}, res) => {
  //Roles permission
  if (role !== "admin") return res.status(401).send(_errors.ACCESS_DENIED);
  try {
    const deleteProduct = await _index.default.findByIdAndDelete(id);
    res.json(deleteProduct);
  } catch ({
    name,
    message
  }) {
    console.log({
      message: message,
      code: name
    });
    res.json({
      message: message,
      code: name
    });
  }
};