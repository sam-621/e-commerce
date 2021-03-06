import { useState, useEffect } from 'react';
import { API_KEY } from '../config';
import AxiosInstance from '../utils/Axios';
import { IUseAuth, IUseAuthReturns } from './interfaces';

const useAuth: IUseAuth = (tokenArg) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [token, setToken] = useState<string>(tokenArg);
  const [finished, setFinished] = useState<boolean>(false);

  if (!tokenArg) {
    return { isAuth, finished, token };
  }

  async function refreshToken(): Promise<void> {
    try {
      const res = await AxiosInstance.get('/refresh', {
        headers: { api_key: API_KEY, authorization: token },
      });

      if (res.status === 200) {
        setIsAuth(true);
        setToken(res.data.data);
        setFinished(true);
      }
      setFinished(true);
    } catch (e) {
      console.log(e);
      setFinished(true);
    }
  }

  useEffect(() => {
    console.log('mount in hook');

    refreshToken();

    return () => {
      console.log('??');
    };
  }, []);

  return { isAuth, finished, token };
};

export default useAuth;
