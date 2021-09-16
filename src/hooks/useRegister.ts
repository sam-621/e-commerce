import { useEffect, useState } from 'react';
import UserService from '@Services/UserServices';
import { IUser } from '@Types/user';
import { useCookieApp } from '@Libs/react-cookie/useCookieApp';

export const useRegister: IUseRegister = (canRun, user, confirmPassword) => {
  const [error, setError] = useState('');
  const [_, setCookie] = useCookieApp('token');

  const registerUser = async () => {
    const { data, errorMessage } = await new UserService().register(user);
    console.log(data, errorMessage);

    if (errorMessage) setError(errorMessage);

    setCookie('token', data);
  };

  useEffect(() => {
    if (!canRun) return;

    if (!user.email) setError(' ');
    registerUser();
  }, [canRun]);

  return [error] as const;
};

interface IUseRegister {
  (canRun: boolean, user: IUser, confirmPassword: string): readonly [string];
}
