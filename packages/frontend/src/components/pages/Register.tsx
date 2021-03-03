import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { RegisterForm, Nav } from '../containers';

const Register = () => {
  const cookie = new Cookies();
  return (
    <>
      {cookie.get('token') ? (
        <Redirect to="/home" />
      ) : (
        <>
          <Nav />
          <RegisterForm />
        </>
      )}
    </>
  );
};

export default Register;
