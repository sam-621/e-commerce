import React from 'react';
import '../../styles/molecules/basicInfo.css';

import { LogOut } from '../atoms';
import UserInput from './UserInput';

const BasicInfo = () => {
  return (
    <section className="BasicInfo">
      <div className="BasicInfo-logOut">
        <LogOut />
      </div>
      <form action="" className="BasicInfo-form">
        <UserInput label="First name" placeHolder="" setValue="" type="text" value="text"  />
        <UserInput label="First name" placeHolder="" setValue="" type="text" value="text"  />
        <UserInput label="First name" placeHolder="" setValue="" type="text" value="text"  />
      </form>
    </section>
  );
};
export default BasicInfo;
