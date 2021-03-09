import React, { useState } from 'react';
import '../../styles/molecules/basicInfo.css';

import { LogOut, UserInput, UserSubmit } from '../atoms';

const BasicInfo = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  return (
    <section className="BasicInfo">
      <div className="BasicInfo-logOut">
        <LogOut />
      </div>
      <form action="" className="BasicInfo-form">
        <UserInput label="First name" setValue={setFirstName} type="text" value={firstName} />
        <UserInput label="Last name" setValue={setLastName} type="text" value={lastName} />
        <UserInput label="Email" setValue={setEmail} type="text" value={email} />
        <UserSubmit />
      </form>
    </section>
  );
};
export default BasicInfo;
