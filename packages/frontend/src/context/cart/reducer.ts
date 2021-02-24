import { IAction, IInitialState, IProduct } from '../interfaces';
import React, { useEffect, useState } from 'react';
import { ADD_TO_CART, GET_CART } from './actions';
import Cookie from 'universal-cookie';
import AxiosInstance from '../../utils/Axios';
import { API_KEY } from '../../config';
const cookie = new Cookie();

const initialState: IInitialState = {
  cart: [],
};

function cartReducer(state: IInitialState = initialState, action: IAction): IInitialState {
  switch (action.type) {
    case ADD_TO_CART:
      return state;

    case GET_CART:
      const token: string | null = cookie.get('token');
      const headers = { api_key: API_KEY, authorization: token };

      if (!token) return state;

      try {
        AxiosInstance.get('/cart/get', { headers }).then((res) => {
          state.cart = res.data.data.cart;
          console.log(state);
          return state;
        });
        // setProductsCart(res.data.data.cart);
        // setFetching(false);
      } catch (e) {
        console.log(e);
        return state;

        // setFetching(false);
      }
    default:
      return state;
  }
}

export { cartReducer, initialState };
