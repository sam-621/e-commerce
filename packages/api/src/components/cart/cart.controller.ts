import { IControllerWithToken } from '../product/product.interfaces';
import { Product } from '../product/product.services';

const addToCartController: IControllerWithToken = async (req, res, next) => {
  const { productName, productPrice, productImage, productDescription } = req.body;

  const product = new Product(productName, productPrice, productDescription, productImage);

  const { data, msg, statusCode } = await product.addToCart(req.user.id);

  return res.status(statusCode).json({
    data: data,
    message: msg,
  });
};

export { addToCartController };
