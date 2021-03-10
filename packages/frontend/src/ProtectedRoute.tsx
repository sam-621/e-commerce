import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router';
import Cookies from 'universal-cookie';
import { useAuth } from './hooks';
import { Loader } from './components/atoms';

const ProtectedRoute = ({
  path,
  Component,
  exact = true,
  redirect = '/login',
}: IProtectedRouteProp) => {
  const cookie = new Cookies();
  const { finished, isAuth, token } = useAuth(cookie.get('token'));

  if (token) cookie.set('token', token);

  function render(): JSX.Element {
    if (!finished) return <Loader />;

    if (isAuth) return <Component />;

    return <Redirect to={redirect} />;
  }

  return (
    <Route exact={exact} path={path}>
      {render()}
    </Route>
  );
};

interface IProtectedRouteProp {
  Component: FunctionComponent;
  path: string;
  exact?: boolean;
  redirect?: string;
}

export default ProtectedRoute;
