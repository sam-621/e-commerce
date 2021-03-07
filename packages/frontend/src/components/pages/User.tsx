import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Nav } from '../containers/';

const User = () => {
  const cookie = new Cookies();
  return (
    <>
      {cookie.get('token') ? (
        <>
          <Nav isAuth={false} />
          <h1>User</h1>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default User;
