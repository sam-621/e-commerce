import React from 'react';
import { Nav, UserForms } from '../containers/';

const User = () => {
  return (
    <>
      <Nav isAuth={true} />
      <UserForms />
    </>
  );
};

export default User;
