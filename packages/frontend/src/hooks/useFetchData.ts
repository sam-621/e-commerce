import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, API_URI } from '../config';
import { IProducts } from './hooks.interfaces';
import { HTTPException } from '../utils/HttpException';

function useFetchData(
  token: string
): { data: Array<IProducts>; loading: boolean; errorMessage: string } {
  const [data, setData] = useState<Array<IProducts>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
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

      setErrorMessage(msg);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, errorMessage };
}

export default useFetchData;
