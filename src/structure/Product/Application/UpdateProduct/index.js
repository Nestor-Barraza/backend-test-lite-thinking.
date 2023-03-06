import Product from "../../Domain/index";

//Edit product
module.exports = async (
  { body: { title, description, price, unitsAvailable, id } },
  res
) => {
  if (!title || !description || !price || !unitsAvailable || !id) {
    return res.status(400).json({
      message: "You can not update leaving fields empty",
      code: "EMPTY_FIELDS",
    });
  } else {
    try {
      const newProduct = await Product.findByIdAndUpdate(
        id,
        {
          title,
          description,
          price,
          unitsAvailable,
        },
        { new: true }
      );
      if (newProduct) {
        return res.json({
          message: "Product successfully updated",
          code: "UPDATE_SUCCESSFULL",
        });
      }
    } catch ({ name, message }) {
      console.log({
        message,
        code: name,
      });
      res.json({
        message,
        code: name,
      });
    }
  }
};
