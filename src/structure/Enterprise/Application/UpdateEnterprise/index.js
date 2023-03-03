import Enterprise from "../../Domain/index";
import { ACCESS_DENIED } from "utils/errors";

//Update Enterprise
module.exports = async (
  { body: { name, address, phone }, params: { id }, user: { _id, role } },
  res
) => {
  try {
    //Roles permission
    if (role !== "admin") return res.status(401).send(ACCESS_DENIED);
    //Validation
    await validateEnterpriseUser(id, _id);
    //Update
    const newEnterprise = await Enterprise.findByIdAndUpdate(
      id,
      {
        name,
        address,
        phone,
      },
      { new: true }
    );
    return res.json(newEnterprise);
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
