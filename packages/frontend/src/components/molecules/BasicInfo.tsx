import React from 'react';
import '../../styles/molecules/basicInfo.css';

import { LogOut } from '../atoms';

const BasicInfo = () => {
  return (
    <section className="BasicInfo">
      <div className="BasicInfo-logOut">
        <LogOut />
      </div>
      <div className="BasicInfo-form"></div>
      <div className="BasicInfo-action"></div>
    </section>
  );
};
export default BasicInfo;
