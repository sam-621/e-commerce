import React, { useEffect, useReducer } from 'react';
import Cookie from 'universal-cookie';
import { get } from '../../utils/petitions';
import { cartReducer, initialState } from './reducer';
import { getCartProducts } from './actionsCreator';

const CartContext = React.createContext({});

export function CartContextProvider({ children }: any) {
  const cookie = new Cookie();
  const token: string | null = cookie.get('token');
  const headers = { authorization: token };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    if (!token) {
      dispatch(getCartProducts());
      return;
    }

    get('/cart/get', { headers }).then((res) => {
      dispatch(getCartProducts(res.data.data.cart));
    });
  }, []);
  return <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>;
}

export default CartContext;
