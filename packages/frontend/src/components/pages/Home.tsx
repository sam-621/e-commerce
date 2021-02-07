import React from 'react';

import { Searcher } from '../molecules';
import { Products, Nav } from '../containers';

const Home = () => {
  return (
    <>
      <Nav />
      <Searcher />
      <Products />
    </>
  );
};

export default Home;
