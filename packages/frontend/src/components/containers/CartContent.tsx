import React, { useContext } from 'react';
import '../../styles/containers/cartContent.css';
import { ICtxReturns } from '../../context/interfaces';

import { CartCard } from '../molecules/';
import CartContext from '../../context/cart';

const CartContent = () => {
  const { productsCart } = useContext(CartContext) as ICtxReturns;

  return (
    <main className="CartContent">
      {productsCart.map((prod) => {
        return (
          <CartCard
            key={prod._id}
            description={prod.description}
            img={prod.image}
            name={prod.name}
            price={prod.price}
          />
        );
      })}
    </main>
  );
};

export default CartContent;
