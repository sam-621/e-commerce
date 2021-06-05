import products from '../../db/products';
import { Product } from './product.services';
import { IProduct } from '../../types/products';
import { IController } from '../../types/controllers';

const getProductsController: IController = (_, res) => {
  return res.status(200).json({
    data: products,
    message: 'OK',
  });
};

const buyProductController: IController = async (req, res) => {
  const products: IProduct[] = req.body;

  const { data, message, error } = await Product.buyProduct(req.user.id, products);

  return res.status(error.statusCode || 200).json({
    data: data,
    message: message,
    error: { message: error.message },
  });
};

export { getProductsController, buyProductController };
