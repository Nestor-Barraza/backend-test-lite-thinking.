import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../../Domain/index";
import { REGEX_EMAIL, JWT_SIGNATURE } from "utils/constants";

import {
  NOT_MATCH_CREDENTIALS,
  NOT_VALID_EMAIL,
  EMAIL_IS_REQUIRED,
  PASSWORD_IS_REQUIRED,
} from "utils/errors";

module.exports = async ({ body: { email, password } }, res) => {
  //Validations

  if (!REGEX_EMAIL.test(email)) {
    console.log(NOT_VALID_EMAIL);
    res.status(400).json(NOT_VALID_EMAIL);
  }

  try {
    const user = await User.findOne({ email });

    //Match password
    await bcrypt.compareSync(password, user.password);
    //User props
    const { _id, full_name, NIT, role, phone } = user;

    //Access token
    const access_token = jwt.sign(
      { _id, full_name, NIT, role, email, phone },
      JWT_SIGNATURE,
      { expiresIn: "15m" }
    );
    //Refresh token
    const refresh_token = jwt.sign(
      { _id, full_name, NIT, role, email, phone },
      JWT_SIGNATURE,
      { expiresIn: "1d" }
    );

    res.status(200).send({ access_token, refresh_token });
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
};
