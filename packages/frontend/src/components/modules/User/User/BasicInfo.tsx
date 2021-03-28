import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import '../../../../styles/molecules/basicInfo.css';
import { HTTPException } from '../../../../utils/HttpException';
import { post } from '../../../../utils/petitions';
import UserSubmit from './UserSubmit';
import UserInput from './UserInput';
import LogOut from './LogOut';

const BasicInfo = ({ email, username }: IBasicInfoProps) => {
  const cookie = new Cookies();
  const [localUsername, setLocalUsername] = useState<string>(username);
  const [localEmail, setLocalEmail] = useState<string>(email);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function updateUserInfo(e: any) {
    e.preventDefault();
    setIsLoading(true);
    const data = { email: localEmail, username: localUsername };
    const config = { headers: { authorization: cookie.get('token') } };

    try {
      const res = await post('/user', data, config);
      setIsLoading(false);
      toast.success('Data updated');
    } catch (e) {
      setIsLoading(false);

      const httpException = new HTTPException(e.message);
      const message = httpException.getRegisterMessage();
      toast.error(message);
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
        <UserSubmit isLoading={isLoading} />
      </form>
    </section>
  );
};

export default BasicInfo;

interface IBasicInfoProps {
  username: string;
  email: string;
}
