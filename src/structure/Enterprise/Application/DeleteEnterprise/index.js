import Enterprise from "../../Domain/index";
import { ACCESS_DENIED } from "utils/errors";

//Delete Enterprise
module.exports = async ({ params: { id }, user: { role } }, res) => {
  //Roles permission
  if (role !== "admin") return res.status(401).send(ACCESS_DENIED);
  try {
    const deleteEnterprise = await Enterprise.findByIdAndDelete(id);
    return res.json(deleteEnterprise);
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
