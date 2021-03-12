import React from 'react';
import '../../styles/containers/userForms.css';

import { BasicInfo, ProductsBought } from '../molecules';

const UserForms = () => {
  return (
    <main className="UserForms">
      <BasicInfo />
      <hr/>
      <ProductsBought />
    </main>
  );
};

export default UserForms;
