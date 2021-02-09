import { useEffect, useState } from 'react';
import { IProducts, IFetchedData } from './hooks.interfaces';
import { HTTPException } from '../utils/HttpException';
import AxiosInstance from '../utils/Axios';

function useFetchData(): IFetchedData {
  const [data, setData] = useState<Array<IProducts>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchData() {
    try {
      setLoading(true);

      const res = await AxiosInstance.get('/products');
      setData(res.data.data);

      setLoading(false);
    } catch (e) {
      const httpException = new HTTPException(e.message);
      const msg = httpException.getProductsMessage();
      alert(msg);

      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
}

export default useFetchData;
