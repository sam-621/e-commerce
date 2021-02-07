import React from 'react';

import { Searcher } from '../molecules';
import { Products, Nav } from '../containers';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const cookie = new Cookies();

  return (
    <>
      {cookie.get('token') ? (
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
