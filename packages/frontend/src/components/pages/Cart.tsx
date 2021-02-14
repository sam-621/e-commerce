import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookie from 'universal-cookie';

import { Nav, CartContent } from '../containers/';

const Cart = () => {
  const cookie = new Cookie();
  return (
    <>
      {cookie.get('token') ? (
        <>
          <Nav />
          <CartContent />
        </>
      ) : (
        <Redirect to="login" />
      )}
    </>
  );
};

export default Cart;
