import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import '../../styles/molecules/basicInfo.css';
import { post } from '../../utils/petitions';

import { LogOut, UserInput, UserSubmit } from '../atoms';

const BasicInfo = ({ email, username }: IBasicInfoProps) => {
  const cookie = new Cookies();
  const [localUsername, setLocalUsername] = useState<string>(username);
  const [localEmail, setLocalEmail] = useState<string>(email);

  async function updateUserInfo(e: any) {
    try {
      const data = { email: localEmail, username: localUsername };
      const config = { headers: { authorization: cookie.get('token') } };
      const res = await post('/user', data, config);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <section className="BasicInfo">
      <div className="BasicInfo-logOut">
        <LogOut />
      </div>
      <form onSubmit={updateUserInfo} className="BasicInfo-form">
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
