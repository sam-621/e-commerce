import { IControllerWithToken } from './product.interfaces';
import { products } from './products';
import { Product } from './product.services';
import { Result, validationResult } from 'express-validator';
import { ErrorHandler } from '../../middleware';

const getProductsController: IControllerWithToken = (req, res, next) => {
  return res.status(200).json({
    data: products,
    message: 'OK',
  });
};

const buyProductController: IControllerWithToken = async (req, res, next) => {
  const errors: Result = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new ErrorHandler(400, 'WRONG DATA SCHEMA', errors.array()));
  }

  const { productName, productPrice, productImage, productDescription } = req.body;

  const product = new Product(productName, productPrice, productDescription, productImage);

  const result = await product.buyProduct(req.user.id);

  if (result.err) {
    return next(new ErrorHandler(result.statusCode, result.msg, result.err));
  }

  return res.status(result.statusCode).json({
    data: result.data,
    message: result.msg,
  });
};

export { getProductsController, buyProductController };
