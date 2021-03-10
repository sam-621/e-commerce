import { AxiosResponse } from 'axios';
import AxiosInstance from './Axios';

export const get = async (url: string, config?: IConfig): Promise<AxiosResponse> => {
  return await AxiosInstance.get(url, config);
};

interface IConfig {
  headers: {
    authorization: string;
  };
}
