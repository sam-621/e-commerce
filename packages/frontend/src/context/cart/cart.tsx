import React, { useEffect, useReducer, useState } from 'react';
import { IProduct } from '../interfaces';
import Cookie from 'universal-cookie';
import AxiosInstance from '../../utils/Axios';
import { API_KEY } from '../../config';
import { cartReducer, initialState } from './reducer';

const CartContext = React.createContext({});

export function CartContextProvider({ children }: any) {
  // const [productsCart, setProductsCart] = useState<IProduct[]>([]);
  // const [fetching, setFetching] = useState<boolean>(false);
  // const cookie = new Cookie();

  // async function getCartProducts() {
  //   setFetching(true);
  //   const token: string | null = cookie.get('token');
  //   const headers = { api_key: API_KEY, authorization: token };

  //   if (!token) return;

  //   try {
  //     const res = await AxiosInstance.get('/cart/get', { headers });

  //     setProductsCart(res.data.data.cart);
  //     setFetching(false);
  //   } catch (e) {
  //     setFetching(false);
  //   }
  // }

  // useEffect(() => {
  //   getCartProducts();
  // }, []);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>;
}

export default CartContext;
