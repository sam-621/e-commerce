import React from 'react';
import '../../styles/toastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartContent } from '../containers/';
import { Nav } from '../elements/';

const Cart = () => {
  return (
    <>
      <Nav isAuth={true} />
      <CartContent />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default Cart;
