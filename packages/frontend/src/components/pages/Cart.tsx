import React from 'react';
import '../../styles/toastify.css';
import { Redirect } from 'react-router-dom';
import Cookie from 'universal-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Nav, CartContent } from '../containers/';
import { useAuth } from '../../hooks';
import { Loader } from '../atoms';

const Cart = () => {
  const cookie = new Cookie();
  const { finished, isAuth, token } = useAuth(cookie.get('token'));

  if (token) {
    cookie.set('token', token);
  }

  if (!finished) {
    return <Loader border="5px" width="30px" height="30px" />;
  }

  return (
    <>
      {isAuth ? (
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
