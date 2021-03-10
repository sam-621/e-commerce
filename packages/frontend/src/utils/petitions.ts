import AxiosInstance from './Axios';

export const get = async (url: string, config?: IConfig) => {
  return await AxiosInstance.get(url, config);
};

interface IConfig {
  headers: {
    authorization: string;
  };
}
