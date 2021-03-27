import React from 'react';
import { Products } from '../elements';
import { Nav } from '../elements';

const UserProducts = () => {
  return (
    <>
      <Nav isAuth={true} />
      <Products url="/user" />
    </>
  );
};

export default UserProducts;
