import { IControllerWithToken } from './product.interfaces';
import { products } from './products';

const getProductsController: IControllerWithToken = (req, res, next) => {
  return res.status(200).json({
    data: products,
    msg: 'OK',
  });
};

const buyProductController: IControllerWithToken = (req, res, next) => {
  return res.status(200).json({
    data: null,
    msg: 'Product bought',
  });
};

export { getProductsController, buyProductController };
