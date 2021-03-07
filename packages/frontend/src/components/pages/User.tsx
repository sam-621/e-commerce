import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useAuth } from '../../hooks';
import { Loader } from '../atoms';
import { Nav } from '../containers/';

const User = () => {
  const cookie = new Cookies();
  const { token, isAuth, finished } = useAuth(cookie.get('token'));

  if (token) {
    cookie.set('token', token);
  }

  if (!finished) {
    return <Loader border="5px" width="30px" height="30px" />;
  }

  return (
    <>
      {isAuth ? (
        <>
          <Nav isAuth={isAuth} />
          <h1>User</h1>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default User;
