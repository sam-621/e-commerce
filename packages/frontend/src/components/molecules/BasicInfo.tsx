import React, { useState } from 'react';
import '../../styles/molecules/basicInfo.css';

import { LogOut, UserInput, UserSubmit } from '../atoms';

const BasicInfo = ({ email, username }: IBasicInfoProps) => {
  const [localUsername, setLocalUsername] = useState<string>(username);
  const [localEmail, setLocalEmail] = useState<string>(email);

  return (
    <section className="BasicInfo">
      <div className="BasicInfo-logOut">
        <LogOut />
      </div>
      <form action="" className="BasicInfo-form">
        <UserInput label="Username" setValue={setLocalUsername} type="text" value={localUsername} />
        <UserInput label="Email" setValue={setLocalEmail} type="text" value={localEmail} />
        <UserSubmit />
      </form>
    </section>
  );
};

export default BasicInfo;

interface IBasicInfoProps {
  username: string;
  email: string;
}
