import Product from "../../Domain/index";
import { ACCESS_DENIED } from "utils/errors";

//Delete product
module.exports = async ({ params: { id }, user: { role } }, res) => {
  //Roles permission
  if (role !== "admin") return res.status(401).send(ACCESS_DENIED);

  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.json(deleteProduct);
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
