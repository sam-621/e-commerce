import React from 'react';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import { useAuth } from '../../../hooks';
import { Loader } from '../../elements';

import RegisterForm from './RegisterForm';
import { Nav } from '../../elements';

const Register = () => {
  const cookie = new Cookies();
  const { finished, isAuth, token } = useAuth(cookie.get('token'));

  if (token) {
    cookie.set('token', token);
  }

  if (!finished) {
    return <Loader border="5px" width="30px" height="30px" />;
  }

  return (
    <>
      {isAuth ? (
        <Redirect to="/home" />
      ) : (
        <>
          <Nav isAuth={isAuth} />
          <RegisterForm />
        </>
      )}
    </>
  );
};

export default Register;
