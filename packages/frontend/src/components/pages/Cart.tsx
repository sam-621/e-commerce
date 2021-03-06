import React from 'react';
import '../../styles/toastify.css';
import { Redirect } from 'react-router-dom';
import Cookie from 'universal-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Nav, CartContent } from '../containers/';

const Cart = () => {
  const cookie = new Cookie();
  return (
    <>
      {cookie.get('token') ? (
        <>
          <Nav isAuth={true} />
          <CartContent />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
          />
        </>
      ) : (
        <Redirect to="login" />
      )}
    </>
  );
};

export default Cart;
