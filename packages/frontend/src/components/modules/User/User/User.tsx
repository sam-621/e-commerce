import React from 'react';
import { ToastContainer } from 'react-toastify';
import UserForms from './UserForms';
import { Nav } from '../../../elements';

const User = () => {
  return (
    <>
      <Nav isAuth={true} />
      <UserForms />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
};

export default User;
