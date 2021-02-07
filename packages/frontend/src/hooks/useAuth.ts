import axios from 'axios';
import { API_KEY, API_URI } from '../config';

export async function useAuth(token: string): Promise<boolean> {
  if (!token) return false;
  const headers = { headers: { api_key: API_KEY, authorization: token } };
  try {
    const res = await axios.get(`${API_URI}/refresh`, headers);

    if (res.status === 401) {
      return false;
    }

    if (res.status === 200) {
      return true;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}
