import React from 'react';
import '../../styles/atoms/logOut.css';
import Cookies from 'universal-cookie';

const Logout = () => {
  const cookie = new Cookies();
  function HandleLogOut() {
    cookie.remove('token');
    window.location.href = '/home'
  }
  return (
    <button className="LogOut" onClick={HandleLogOut}>
      Log out
    </button>
  );
};

export default Logout;
