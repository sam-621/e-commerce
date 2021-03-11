import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { IProduct } from '../../context/interfaces';
import '../../styles/molecules/basicInfo.css';
import { get } from '../../utils/petitions';

import { LogOut, UserInput, UserSubmit } from '../atoms';

const BasicInfo = () => {
  const cookie = new Cookies();
  const token: string = cookie.get('token');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  async function getUserInfo() {
    const res = await get('/user', { headers: { authorization: token } });
    const info = res.data.data as IUserInfo;
    setUsername(info.username);
    setEmail(info.email);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <section className="BasicInfo">
      <div className="BasicInfo-logOut">
        <LogOut />
      </div>
      <form action="" className="BasicInfo-form">
        <UserInput label="Username" setValue={setUsername} type="text" value={username} />
        <UserInput label="Email" setValue={setEmail} type="text" value={email} />
        <UserSubmit />
      </form>
    </section>
  );
};

export default BasicInfo;

interface IUserInfo {
  cart: IProduct[];
  email: string;
  productsBought: IProduct[];
  username: string;
  _id: string;
}
