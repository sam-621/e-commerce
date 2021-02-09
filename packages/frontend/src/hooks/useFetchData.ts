import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, API_URI } from '../config';
import { IProducts, IFetchedData } from './hooks.interfaces';
import { HTTPException } from '../utils/HttpException';

function useFetchData(token: string): IFetchedData {
  const [data, setData] = useState<Array<IProducts>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const headers = { headers: { api_key: API_KEY, authorization: token } };

  async function fetchData() {
    try {
      setLoading(true);

      const res = await axios.get(`${API_URI}/products`, headers);
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
