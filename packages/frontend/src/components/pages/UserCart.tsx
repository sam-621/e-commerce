import React, { Dispatch, useContext } from 'react';
import CartContext from '../../context/cart/cart';
import { IAction, IInitialState } from '../../context/interfaces';
import { Products } from '../containers';
import { Nav } from '../elements';

const UserCart = () => {
  const [state] = useContext(CartContext) as [IInitialState, Dispatch<IAction>];
  return (
    <>
      <Nav isAuth={true} />
      <Products products={state.cart} />
    </>
  );
};

export default UserCart;
