"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _index = _interopRequireDefault(require("../../Domain/index"));
var _constants = require("../../../../utils/constants");
var _errors = require("../../../../utils/errors");
//Controller
module.exports = async ({
  body: {
    full_name,
    NIT,
    role,
    phone,
    email,
    password
  }
}, res) => {
  switch (true) {
    case password.length < 4:
      {
        console.log(_errors.SHORT_PASSWORD);
        res.status(400).json(_errors.SHORT_PASSWORD);
      }
      break;
    case !_constants.REGEX_EMAIL.test(email):
      {
        console.log(_errors.NOT_VALID_EMAIL);
        res.status(400).json(_errors.NOT_VALID_EMAIL);
      }
      break;
    default:
      {
        try {
          const newUser = new _index.default({
            full_name,
            NIT,
            role,
            email,
            phone,
            password
          });
          await newUser.save();
          console.log("Successfully registered user".green);
          res.status(200).json(newUser);
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
      }
      break;
  }
};