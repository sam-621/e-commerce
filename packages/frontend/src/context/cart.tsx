import React, { useEffect, useState } from 'react';
import { IProduct } from './interfaces';
import Cookie from 'universal-cookie';
import AxiosInstance from '../utils/Axios';
import { API_KEY } from '../config';

const CartContext = React.createContext({});

export function CartContextProvider({ children }: any) {
  const [productsCart, setProductsCart] = useState<IProduct[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);
  const cookie = new Cookie();

  async function getCartProducts() {
    setFetching(true);
    const token: string | null = cookie.get('token');
    const headers = { api_key: API_KEY, authorization: token };

    if (!token) return;

    try {
      const res = await AxiosInstance.get('/cart/get', { headers });

      setProductsCart(res.data.data.cart);
      setFetching(false);
    } catch (e) {
      setFetching(false);
    }
  }

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <CartContext.Provider value={{ productsCart, setProductsCart, fetching }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
