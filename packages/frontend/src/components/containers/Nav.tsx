import React from 'react';
import '../../styles/containers/nav.css';
import { Link } from 'react-router-dom';

import UserIcon from '../../img/usericon.svg';

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav-home">
        <Link to="/home">Shopy</Link>
      </div>
      <div>
        <Link to="/profile" className="NavMobile-userIcon">
          <img src={UserIcon} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
