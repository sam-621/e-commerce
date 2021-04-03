import { IController } from '../interfaces/IController';
import { IAddToCartParams } from './cart.interfaces';
import { Cart } from './cart.services';

const addToCartController: IController = async (req, res) => {
  const dto = req.body;

  const params: IAddToCartParams = { ...dto, buyerID: req.user.id };

  const cart = new Cart();

  const { data, msg, statusCode } = await cart.addToCart(params);

  return res.status(statusCode).json({
    data: data,
    message: msg,
  });
};

const getCartProductsController: IController = async (req, res) => {
  const cart = new Cart();

  const { data, msg, statusCode } = await cart.getCartProducts(req.user.id);

  return res.status(statusCode).json({
    message: msg,
    data,
  });
};

const removeCartProductController: IController = async (req, res) => {
  const cart = new Cart();

  const { data, msg, statusCode } = await cart.removeCartProduct(req.body.productID, req.user.id);

  return res.status(statusCode).json({
    message: msg,
    data,
  });
};

export { addToCartController, getCartProductsController, removeCartProductController };
