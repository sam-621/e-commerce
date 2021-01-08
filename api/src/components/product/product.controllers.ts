import { IControllerGetProducts } from './product.interfaces';
import { products } from './products';

const getProductsController: IControllerGetProducts = (req, res, next) => {
  return res.status(200).json({
    data: products,
    msg: 'OK',
  });
};

export { getProductsController };
