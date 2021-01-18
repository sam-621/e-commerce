import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, API_URI } from '../config';
import { IProducts } from './hooks.interfaces';

function useFetchData(token: string): { data: Array<IProducts>; loading: boolean } {
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
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
}

export default useFetchData;
