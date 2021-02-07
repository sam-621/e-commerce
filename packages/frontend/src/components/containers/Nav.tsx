import React from 'react';
import '../../styles/containers/nav.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import UserIcon from '../../img/usericon.svg';

const Nav = () => {
  const cookie = new Cookies();
  return (
    <nav className="Nav">
      <div className="Nav-home">
        <Link to="/home">Shopy</Link>
      </div>
      <div>
        {cookie.get('token') ? (
          <Link to="/profile" className="NavMobile-userIcon">
            <img src={UserIcon} />
          </Link>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
