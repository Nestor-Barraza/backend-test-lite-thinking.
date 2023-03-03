"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _Domain = _interopRequireDefault(require("../../../Enterprise/Domain"));
const {
  isValidObjectId
} = require("mongoose");
const Product = require("../../Domain/index");
const validateProductUser = async (productId, idUserSession) => {
  const product = await Product.findById(productId);
  if (product) {
    const category = await _Domain.default.findById(product.categoryId);
    if (category.userId.equals(idUserSession)) return product;
    return false;
  }
  return null;
};

//Edit product
module.exports = async (req, res) => {
  if (!isValidObjectId(req.params.id)) return res.status(400).send('El id no es valido.');
  const product = await validateProductUser(req.params.id, req.user._id);
  const {
    price,
    address,
    neighborhood,
    stratum,
    parking,
    m2,
    rooms,
    bathRooms
  } = req.body;
  if (product) {
    const newProduct = await Product.findByIdAndUpdate(req.params.id, {
      price,
      address,
      neighborhood,
      stratum,
      parking,
      m2,
      rooms,
      bathRooms
    }, {
      new: true
    });
    return res.json(newProduct);
  }
  if (product === false) return res.status(403).send('No tienes permisos');
  if (product === null) return res.send('No existe ese producto');
};