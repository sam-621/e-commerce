import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import { useAuth } from '../hooks';
import { Loader } from './atoms';

const ProtectedRoute = ({ Component }: IProtectedRouteProp) => {
  const cookie = new Cookies();
  const { finished, isAuth, token } = useAuth(cookie.get('token'));

  if (token) cookie.set('token', token);

  if (!finished) return <Loader />;

  return isAuth ? <Component /> : <Redirect to="/login" />;
};

interface IProtectedRouteProp {
  Component: FunctionComponent;
}

export default ProtectedRoute;
