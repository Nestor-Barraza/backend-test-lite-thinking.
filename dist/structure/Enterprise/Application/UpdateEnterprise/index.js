"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _index = _interopRequireDefault(require("../../Domain/index"));
var _errors = require("../../../../utils/errors");
//Update Enterprise
module.exports = async ({
  body: {
    name,
    address,
    phone
  },
  params: {
    id
  },
  user: {
    _id,
    role
  }
}, res) => {
  try {
    //Roles permission
    if (role !== "admin") return res.status(401).send(_errors.ACCESS_DENIED);
    //Validation
    await validateEnterpriseUser(id, _id);
    //Update
    const newEnterprise = await _index.default.findByIdAndUpdate(id, {
      name,
      address,
      phone
    }, {
      new: true
    });
    return res.json(newEnterprise);
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