import React from 'react';

import { Header } from '../atoms';
import { NavMobile, Searcher } from '../molecules';

const Home = () => {
  return (
    <>
      <Header />
      <Searcher />
      <NavMobile />
    </>
  );
};

export default Home;
