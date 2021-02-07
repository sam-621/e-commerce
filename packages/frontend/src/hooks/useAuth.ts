import axios from 'axios';
import { useState } from 'react';
import { API_KEY, API_URI } from '../config';

export async function useAuth(token: string): Promise<boolean> {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const headers = { headers: { api_key: API_KEY, authorization: token } };
  try {
    const res = await axios.get(`${API_URI}/refresh`, headers);

    if (res.status === 401) {
      setIsAuth(false);
    }

    if (res.status === 200) {
      setIsAuth(true);
    }
  } catch (e) {
    console.log(e);
    setIsAuth(false);
  }

  return isAuth;
}
