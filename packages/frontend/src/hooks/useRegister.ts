import { useEffect, useState } from 'react';
import UserService from '@Services/UserServices';
import { IUser } from '@Types/user';

export const useRegister: IUseRegister = (canRun, user) => {
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const registerUser = async () => {
    const { data, errorMessage } = await new UserService().register(user);

    if (errorMessage) setError(errorMessage);

    setToken(data);
  };

  useEffect(() => {
    if (!canRun) return;

    registerUser();
  }, [canRun]);

  return [token, error] as const;
};

interface IUseRegister {
  (canRun: boolean, user: IUser): readonly [string, string];
}
