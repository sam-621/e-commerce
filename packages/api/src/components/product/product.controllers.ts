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
  const { name, price, description, image } = req.body;

  const product = new Product(name, price, description, image);

  const { data, msg, statusCode } = await product.buyProduct(req.user.id);

  return res.status(statusCode).json({
    data: data,
    message: msg,
  });
};

export { getProductsController, buyProductController };
