import React, { Dispatch, useContext } from 'react';
import '../../styles/containers/nav.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import UserIcon from '../../img/usericon.svg';
import CartIcon from '../../img/cart.svg';
import CartContext from '../../context/cart/cart';
import { IAction, IInitialState } from '../../context/interfaces';

const Nav = ({ isAuth }: { isAuth: boolean }) => {
  const [state] = useContext(CartContext) as [IInitialState, Dispatch<IAction>];

  const cookie = new Cookies();

  return (
    <nav className="Nav">
      <div className="Nav-home">
        <Link to="/home">Shopy</Link>
      </div>
      <div className="Nav-actions">
<<<<<<< HEAD
        {cookie.get('token') ? (
          <>
            <Link to="/user">
              <img src={UserIcon} />
            </Link>
            <Link to="/cart" className="Nav-actions-cart">
              <img src={CartIcon} />
              <p>{state.cart.length}</p>
            </Link>
          </>
=======
        {isAuth ? (
          <Link to="/cart" className="Nav-actions-cart">
            <img src={CartIcon} />
            <p>{state.cart.length}</p>
          </Link>
>>>>>>> c38d002396a779bcc36cf36e296f985cda487f14
        ) : (
          <Link to="/register" className="Nav-registerLink">
            Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
