"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _index = _interopRequireDefault(require("../../Domain/index"));
var _errors = require("../../../../utils/errors");
//Delete Enterprise
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
    const deleteEnterprise = await _index.default.findByIdAndDelete(id);
    return res.json(deleteEnterprise);
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