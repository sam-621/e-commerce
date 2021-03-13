import React from 'react';
import '../../styles/containers/userForms.css';

import { BasicInfo } from '../molecules';
import { UserProducts } from '../containers';

const UserForms = () => {
  return (
    <main className="UserForms">
      <BasicInfo />
      <hr />
      <UserProducts />
    </main>
  );
};

export default UserForms;
