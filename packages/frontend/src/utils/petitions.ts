import { AxiosResponse } from 'axios';
import AxiosInstance from './Axios';

export const get = async (url: string, config?: IConfig): Promise<AxiosResponse> => {
  return await AxiosInstance.get(url, config);
};

export const post = async (url: string, data: any, config?: IConfig): Promise<AxiosResponse> => {
  return await AxiosInstance.post(url, data, config);
};

interface IConfig {
  headers: {
    authorization: string;
  };
}
