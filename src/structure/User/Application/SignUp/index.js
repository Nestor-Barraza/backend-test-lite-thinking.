import User from "../../Domain/index";
import { REGEX_EMAIL, PASSWORD_REGEX, PHONE_REGEX } from "utils/constants";
import { NOT_VALID_EMAIL, INVALID_PASSWORD, INVALID_PHONE } from "utils/errors";

//Controller
module.exports = async (
  { body: { full_name, NIT, role, phone, email, password } },
  res
) => {
  switch (true) {
    case !PASSWORD_REGEX.test(password): {
      console.log(INVALID_PASSWORD);
      return res.status(400).json(INVALID_PASSWORD);
    }

    case !REGEX_EMAIL.test(email): {
      console.log(NOT_VALID_EMAIL);
      return res.status(400).json(NOT_VALID_EMAIL);
    }
    case !PHONE_REGEX.test(phone): {
      console.log(INVALID_PHONE);
      return res.status(400).json(INVALID_PHONE);
    }

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
          const createUser = await newUser.save();
          if (createUser) {
            console.log("Successfully registered user".green);
            res.status(200).json(newUser);
          }
        } catch ({ name, message }) {
          console.log({
            message: message,
            code: name,
          });
          res.json({
            message: message,
            code: name,
          });
        }
      }
      break;
  }
};
