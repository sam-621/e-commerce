import React from 'react';

import { Header, Loader } from '../atoms';
import { NavMobile, Searcher } from '../molecules';

const Home = () => {
  return (
    <>
      <Header />
      <Searcher />
      <Loader height="20px" width="20px" border="5px" />
      <NavMobile />
    </>
  );
};

export default Home;
