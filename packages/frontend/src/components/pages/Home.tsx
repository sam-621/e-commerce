import React, { useState } from 'react';

import { Searcher } from '../molecules';
import { Products, Nav } from '../containers';
import { useAuth } from '../../hooks/useAuth';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const cookie = new Cookies();
  useAuth(cookie.get('token')).then((result) => setIsAuth(result));
  console.log(isAuth);

  return (
    <>
      {isAuth ? (
        <>
          <Nav />
          <Searcher />
          <Products />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Home;
