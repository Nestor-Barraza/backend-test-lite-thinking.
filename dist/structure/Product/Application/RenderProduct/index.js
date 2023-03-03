"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _Domain = _interopRequireDefault(require("../../Domain"));
//Get product
module.exports = async (req, res) => {
  try {
    const products = await _Domain.default.find({});
    res.json(products);
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