import jwt from "jsonwebtoken";
import User from "../../Domain/index";
import { REGEX_EMAIL } from "utils/constants";
import { NOT_VALID_EMAIL, SHORT_PASSWORD } from "utils/errors";

//Controller
module.exports = async (
  { body: { full_name, NIT, role, phone, email, password } },
  res
) => {
  switch (true) {
    case password.length < 4:
      {
        console.log(SHORT_PASSWORD);
        res.status(400).json(SHORT_PASSWORD);
      }

      break;
    case !REGEX_EMAIL.test(email):
      {
        console.log(NOT_VALID_EMAIL);
        res.status(400).json(NOT_VALID_EMAIL);
      }

      break;

    default:
      {
        try {
          const newUser = new User({
            full_name,
            NIT,
            role,
            email,
            phone,
            password,
          });
          await newUser.save();
          console.log("Successfully registered user".green);
          res.status(200).json(newUser);
        } catch ({ name, message }) {
          console.log({
            message: message,
            code: name,
          })
          res.json({
            message: message,
            code: name,
          });
        }
      }
      break;
  }
};
