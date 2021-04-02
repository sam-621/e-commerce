import {
  addToCartAction,
  getCartProducts,
  removeFromCart,
} from '../../src/context/cart/actionsCreator';
import { cartReducer } from '../../src/context/cart/reducer';
import { mockProducts, mockProduct } from './mockData';

describe('Test Cart context', () => {
  const initialLength = mockProducts.length - 1;

  test('add to cart', () => {
    const res = cartReducer({ cart: mockProducts }, addToCartAction(mockProduct));

    expect(res.cart[initialLength + 1].frontID).toBe(mockProduct.frontID);
  });
});
