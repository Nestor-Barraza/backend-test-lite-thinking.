import Product from "../../Domain/index";
import { ACCESS_DENIED } from "utils/errors";
//New product
module.exports = async (
  {
    body: { title, description, price, unitsAvailable, enterpriseNIT },
    user: { role },
  },
  res
) => {
  //Roles permission
  if (role !== "admin") return res.status(401).send(ACCESS_DENIED);

  try {
    const newProduct = await new Product({
      title,
      description,
      price,
      unitsAvailable,
      enterpriseNIT,
    });
    await newProduct.save();
    res.json(newProduct);
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
