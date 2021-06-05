import { IController } from '../../types/controllers';
import { IAddToCartParams } from './cart.interfaces';
import { Cart } from './cart.services';

const addToCartController: IController = async (req, res) => {
  const dto = req.body;

  const params: IAddToCartParams = { ...dto, buyerID: req.user.id };

  const cart = new Cart();

  const { data, message, error } = await cart.addToCart(params);

  return res.status(error?.statusCode || 200).json({
    data: data,
    message: message,
    error: { message: error.message },
  });
};

const getCartProductsController: IController = async (req, res) => {
  const cart = new Cart();

  const { data, message, error } = await cart.getCartProducts(req.user.id);

  return res.status(error?.statusCode || 200).json({
    message: message,
    data,
    error: error ? { message: error.message } : null,
  });
};

const removeCartProductController: IController = async (req, res) => {
  const cart = new Cart();

  const { data, message, error } = await cart.removeCartProduct(req.body.productID, req.user.id);

  return res.status(error?.statusCode || 200).json({
    message: message,
    data,
    error: error ? { message: error.message } : null,
  });
};

export { addToCartController, getCartProductsController, removeCartProductController };
