import {
  addToCartAction,
  getCartProducts,
  removeFromCart,
} from '../../src/context/cart/actionsCreator';
import { cartReducer } from '../../src/context/cart/reducer';
import { IInitialState } from '../../src/context/interfaces';
import { mockProducts, mockProduct } from './mockData';

describe('Test Cart context', () => {
  const initialLength = mockProducts.length - 1;
  const initialState: IInitialState = { cart: mockProducts };

  test('Add to cart', () => {
    const res = cartReducer(initialState, addToCartAction(mockProduct));

    expect(res.cart[initialLength + 1].frontID).toBe(mockProduct.frontID);
  });

  test('Get cart products', () => {
    const res = cartReducer(initialState, getCartProducts(initialState.cart));

    expect(res.cart.length - 1).toBe(initialLength);
  });

  test('remove cart product', () => {
    const res = cartReducer(initialState, removeFromCart('1'));

    const productDeleted = res.cart.find((prod) => prod._id === '1');

    expect(productDeleted).toBe(undefined);
    expect(res.cart.length - 1).toBe(initialLength - 1);
  });
});
