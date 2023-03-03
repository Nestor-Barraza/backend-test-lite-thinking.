"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv.default.config();

//Constants
module.exports = {
  CLUSTER_URL: process.env.CLUSTER_URL,
  PORT: process.env.PORT,
  //JWT PROPS
  JWT_KEY: process.env.JWT_KEY,
  JWT_SIGNATURE: process.env.JWT_SIGNATURE,
  //Email Validation
  REGEX_EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  //AWS Credentials
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  REGION: process.env.REGION,
  EMAIL_VERIFIED: process.env.EMAIL_VERIFIED,
  PDF_PROPS: {
    fontFamily: "Helvetica-Bold",
    colWidths: [120, 50, 120],
    rowHeight: 30,
    cellPadding: 10,
    tableTop: 200,
    tableLeft: 612 / 2 - 250,
    headerTextColor: "#000",
    evenRowBackgroundColor: "#f8f8f8",
    oddRowBackgroundColor: "#ffffff"
  }
};