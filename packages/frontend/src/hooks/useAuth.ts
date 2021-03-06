import { useState, useEffect } from 'react';
import { API_KEY } from '../config';
import AxiosInstance from '../utils/Axios';
import { IUseAuth, IUseAuthReturns } from './interfaces';

const useAuth: IUseAuth = (tokenArg) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  if (!tokenArg) {
    return { isAuth, loading, token };
  }

  async function refreshToken(): Promise<void> {
    setLoading(true);
    try {
      const res = await AxiosInstance.get('/refresh', {
        headers: { api_key: API_KEY, authorization: token },
      });

      if (res.status === 200) {
        setIsAuth(true);
        setToken(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    refreshToken();
  }, []);

  return { isAuth, loading, token };
};

export default useAuth;
