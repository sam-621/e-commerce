import React from 'react';

import { LoginForm, Nav } from '../containers/';

const Login = () => {
  return (
    <>
      <Nav isAuth={false} />
      <LoginForm />
    </>
  );
};

export default Login;
