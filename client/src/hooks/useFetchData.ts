import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, API_URI } from '../config';

function useFetchData(token: string) {
  const [data, setData] = useState<Array<object>>([]);
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
