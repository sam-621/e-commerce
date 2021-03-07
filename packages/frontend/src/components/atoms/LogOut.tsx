import React from 'react';
import Cookies from 'universal-cookie';

const Logout = () => {
  const cookie = new Cookies();
  function HandleLogOut() {
    cookie.remove('token');
  }
  return (
    <button className="LogOut" onClick={HandleLogOut}>
      LogOut
    </button>
  );
};

export default Logout;
