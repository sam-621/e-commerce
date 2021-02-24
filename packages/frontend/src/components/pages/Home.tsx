import React, { useContext } from 'react';
import { addToCartAction, getCartProducts } from '../../context/cart/actionsCreator';
import CartContext from '../../context/cart/cart';

// import { Searcher } from '../molecules';
import { Products, Nav } from '../containers';

const Home = () => {
  const [state, dispatch] = useContext(CartContext) as any[];
  dispatch(getCartProducts());

  return (
    <>
      <Nav />
      {/* <Searcher /> */}
      <Products />
    </>
  );
};

export default Home;
