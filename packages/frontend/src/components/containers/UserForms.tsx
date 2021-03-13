import React from 'react';
import '../../styles/containers/userForms.css';

import { BasicInfo, ListProducts } from '../molecules';

const UserForms = () => {
  return (
    <main className="UserForms">
      <BasicInfo />
      <hr />
      <ListProducts title="Test title" url="#"  />
    </main>
  );
};

export default UserForms;
