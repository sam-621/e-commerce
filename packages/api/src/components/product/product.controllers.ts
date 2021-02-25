import { IControllerWithToken } from './product.interfaces';
import { products } from './products';
import { Product } from './product.services';
import { IProduct } from '../user/user.interface';

const getProductsController: IControllerWithToken = (req, res, next) => {
  return res.status(200).json({
    data: products,
    message: 'OK',
  });
};

const buyProductController: IControllerWithToken = async (req, res, next) => {
  const products: IProduct[] = req.body;

  const product = new Product();

  const { data, msg, statusCode } = await product.buyProduct(req.user.id, products);

  return res.status(statusCode).json({
    data: data,
    message: msg,
  });
};

export { getProductsController, buyProductController };
