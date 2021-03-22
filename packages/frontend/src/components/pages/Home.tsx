import React, { useEffect, useState } from 'react';

// import { Searcher } from '../molecules';
import { Products } from '../containers';
import { Nav } from '../elements/';
import { useAuth } from '../../hooks';
import Cookies from 'universal-cookie';
import { Loader } from '../elements';

const Home = () => {
  const cookie = new Cookies();
  const { isAuth, finished, token } = useAuth(cookie.get('token'));

  if (token) {
    cookie.set('token', token);
  }

  if (!finished) {
    return <Loader border="5px" width="30px" height="30px" />;
  }

  return (
    <>
      <Nav isAuth={isAuth} />
      {/* <Searcher /> */}
      <Products />
    </>
  );
};

export default Home;
