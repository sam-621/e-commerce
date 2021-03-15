import React from 'react';
import { Nav, Products } from '../containers';

const UserProducts = () => {
  return (
    <>
      <Nav isAuth={true} />
      <Products url="/user" />
    </>
  );
};

export default UserProducts;
