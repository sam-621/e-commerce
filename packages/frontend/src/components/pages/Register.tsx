import React from 'react';

import { RegisterForm, Nav } from '../containers';

const Register = () => {
  return (
    <>
      <Nav isAuth={false} />
      <RegisterForm />
    </>
  );
};

export default Register;
