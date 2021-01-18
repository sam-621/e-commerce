import React from 'react';

import { Header } from '../atoms';
import { NavMobile, Searcher } from '../molecules';
import { Products } from '../containers';

const Home = () => {
  return (
    <>
      <Header />
      <Searcher />
      <Products />
      <NavMobile />
    </>
  );
};

export default Home;
