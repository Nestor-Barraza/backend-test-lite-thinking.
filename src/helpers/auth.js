import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import { JWT_SIGNATURE } from "utils/constants";
import { ACCESS_DENIED, TOKEN_REQUIRED } from "utils/errors";
const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) return res.status(401).send(TOKEN_REQUIRED);
  token = token.replace("Bearer ", "");

  jwt.verify(token, JWT_SIGNATURE, function (err, user) {
    //Show JWT errors
    if (err) {
      const { name, message } = err;
      console.log({
        code: name,
        message,
      });
      return res.status(401).send({
        code: name,
        message,
      });
    }
    // Denied access
    if (user.role !== "admin") return res.status(401).send(ACCESS_DENIED);
    // Allow access
    req.user = { ...user, _id: user._id, role: user.role };
    next();
  });
};

module.exports = helpers;
