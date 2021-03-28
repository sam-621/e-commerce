import { products } from './products';
import { Product } from './product.services';
import { IProduct } from '../interfaces/IProducts';
import { IController } from '../interfaces/IController';

const getProductsController: IController = (_, res) => {
  return res.status(200).json({
    data: products,
    message: 'OK',
  });
};

const buyProductController: IController = async (req, res) => {
  const products: IProduct[] = req.body;

  const product = new Product();

  const { data, msg, statusCode } = await product.buyProduct(req.user.id, products);

  return res.status(statusCode).json({
    data: data,
    message: msg,
  });
};

export { getProductsController, buyProductController };
