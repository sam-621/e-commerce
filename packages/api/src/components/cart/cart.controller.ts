import { IControllerWithToken } from '../product/product.interfaces';
import { IAddToCartParams } from './cart.interfaces';
import { Cart } from './cart.services';

const addToCartController: IControllerWithToken = async (req, res, next) => {
  const dto = req.body;

  const params: IAddToCartParams = { ...dto, buyerID: req.user.id };

  const product = new Cart();

  const { data, msg, statusCode } = await product.addToCart(params);

  return res.status(statusCode).json({
    data: data,
    message: msg,
  });
};

const getCartProductsController: IControllerWithToken = async (req, res, next) => {
  const cart = new Cart();

  const { data, msg, statusCode } = await cart.getCartProducts(req.user.id);

  return res.status(statusCode).json({
    msg,
    data,
  });
};

export { addToCartController, getCartProductsController };
