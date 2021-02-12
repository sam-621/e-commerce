import React, { useContext } from 'react';
import '../../styles/containers/nav.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import UserIcon from '../../img/usericon.svg';
import CartIcon from '../../img/cart.svg';
import CartContext from '../../context/cart';
import { ICtxReturns } from '../../context/interfaces';

const Nav = () => {
  const { productsCart } = useContext(CartContext) as ICtxReturns;

  const cookie = new Cookies();

  return (
    <nav className="Nav">
      <div className="Nav-home">
        <Link to="/home">Shopy</Link>
      </div>
      <div className="Nav-actions">
        {cookie.get('token') ? (
          <Link to="/cart" className="Nav-actions-cart">
            <img src={CartIcon} />
            <p>{productsCart.length}</p>
          </Link>
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
