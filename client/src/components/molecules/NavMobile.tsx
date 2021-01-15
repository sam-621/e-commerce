import React from 'react';
import '../../styles/molecules/navMobile.css';

import UserIcon from '../../img/usericon.svg';
import { Link } from 'react-router-dom';

const navMobile = () => {
  return (
    <nav className="NavMobile">
      <Link to="/profile" className="NavMobile-userIcon">
        <img src={UserIcon} />
      </Link>
    </nav>
  );
};

export default navMobile;
