import React, { useContext } from 'react';
import '../../styles/containers/cartContent.css';
import { ICtxReturns } from '../../context/interfaces';

import { CartCard } from '../molecules/';
import CartContext from '../../context/cart/cart';
import { Link } from 'react-router-dom';
import { Loader } from '../atoms';

const CartContent = () => {
  const [state] = useContext(CartContext) as any[];

  return (
    <main className="CartContent">
      {/* {fetching ? (
        <Loader border="5px" width="30px" height="30px" />
      ) : ( */}
      <>
        <div className="CartContent-products">
          {state.cart.map((prod: any) => {
            return (
              <CartCard
                key={prod._id}
                img={prod.image}
                name={prod.name}
                price={prod.price}
                _id={prod._id}
                setProductsCart={state.cart}
              />
            );
          })}
        </div>
        <div className="CartContent-actions">
          <Link to="#">Buy all</Link>
        </div>
      </>
      )
    </main>
  );
};

export default CartContent;
