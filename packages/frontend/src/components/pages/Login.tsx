import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { LoginForm, Nav } from '../containers/';

const Login = () => {
  const cookie = new Cookies();
  return (
    <>
      {cookie.get('token') ? (
        <Redirect to="/home" />
      ) : (
        <>
          <Nav />
          <LoginForm />
        </>
      )}
    </>
  );
};

export default Login;
