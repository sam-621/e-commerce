import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router';
import Cookies from 'universal-cookie';
import { useAuth } from './hooks';
import { Loader } from './components/atoms';

const ProtectedRoute = ({ Component, exact = true, path }: IProtectedRouteProp) => {
  const cookie = new Cookies();
  const { finished, isAuth, token } = useAuth(cookie.get('token'));

  if (token) cookie.set('token', token);

  function render() {
    if (!finished) return <Loader />;

    if (isAuth) return <Component />;

    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {render()}
    </Route>
  );
};

interface IProtectedRouteProp {
  Component: FunctionComponent;
  exact: boolean;
  path: string;
}

export default ProtectedRoute;
