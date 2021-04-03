import React, { Dispatch, useContext } from 'react';
import '../../styles/elements/nav.css';
import { Link } from 'react-router-dom';

import UserIcon from '../../svg/usericon.svg';
import CartIcon from '../../svg/cart.svg';
import CartContext from '../../context/cart/cart';
import { IAction, IInitialState } from '../../context/interfaces';

const Nav = ({ isAuth }: { isAuth: boolean }) => {
  const [state] = useContext(CartContext) as [IInitialState, Dispatch<IAction>];

  return (
    <nav className="Nav">
      <div className="Nav-home">
        <Link to="/home">Shopy</Link>
      </div>
      <div className="Nav-actions">
        {isAuth ? (
          <>
            <Link to="/cart" className="Nav-actions-cart">
              <img src={CartIcon} />
              <p>{state.cart.length}</p>
            </Link>
            <Link to="/user">
              <img src={UserIcon} alt="User icon" />
            </Link>
          </>
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
