import Axios from 'axios';
import { API_KEY, API_URI } from '../config';

const AxiosInstance = Axios.create({
  baseURL: API_URI,
  headers: { api_key: API_KEY },
});

export default AxiosInstance;
