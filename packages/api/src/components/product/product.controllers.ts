import { IControllerWithToken } from './product.interfaces';
import { products } from './products';
import { Product } from './product.services';

const getProductsController: IControllerWithToken = (req, res, next) => {
  return res.status(200).json({
    data: products,
    message: 'OK',
  });
};

const buyProductController: IControllerWithToken = async (req, res, next) => {
  const { productName, productPrice, productImage, productDescription } = req.body;

  const product = new Product(productName, productPrice, productDescription, productImage);

  const { data, msg, statusCode } = await product.buyProduct(req.user.id);

  return res.status(statusCode).json({
    data: data,
    message: msg,
  });
};

const addToCartController: IControllerWithToken = async (req, res, next) => {
  const { productName, productPrice, productImage, productDescription } = req.body;

  const product = new Product(productName, productPrice, productDescription, productImage);

  const { data, msg, statusCode } = await product.addToCart(req.user.id);

  return res.status(statusCode).json({
    data: data,
    message: msg,
  });
};

export { getProductsController, buyProductController, addToCartController };
