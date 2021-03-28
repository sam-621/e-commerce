import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { IProduct } from '../../context/interfaces';
import { get } from '../../utils/petitions';
import { Loader, Products } from '../elements';
import { Nav } from '../elements';

const UserProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await get('/user', { headers: { authorization: new Cookies().get('token') } });
        console.log(res);
        setProducts(res.data.data.productsBought);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Nav isAuth={true} />
      {isLoading ? <Loader /> : <Products products={products} />}
    </>
  );
};

export default UserProducts;
