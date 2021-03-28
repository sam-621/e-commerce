import React, { Dispatch, useContext, useEffect, useState } from 'react';
import CartContext from '../../context/cart/cart';
import { IAction, IInitialState } from '../../context/interfaces';
import { Loader, Products } from '../elements';
import { Nav } from '../elements';

const UserCart = () => {
  const [state] = useContext(CartContext) as [IInitialState, Dispatch<IAction>];
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Avoid to pass an empty array
  useEffect(() => {
    if (state.cart.length > 0) {
      setIsLoading(false);
    }
  });

  return (
    <>
      <Nav isAuth={true} />
      {isLoading ? <Loader /> : <Products products={state.cart} />}
    </>
  );
};

export default UserCart;
