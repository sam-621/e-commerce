import React from 'react';
import '../../styles/containers/products.css';
import useFetchData from '../../hooks/useFetchData';
import Cookie from 'universal-cookie';

import { Product } from '../molecules';
import { Loader } from '../atoms';

const Products = () => {
  const cookie = new Cookie();

  const { data, loading } = useFetchData(cookie.get('token'));

  console.log(data);

  return (
    <main className="Products">
      {loading ? (
        <Loader border="5px" width="30px" height="30px" />
      ) : (
        <>
          {data.map((prod: any) => {
            return (
              <Product
                key={prod.id}
                image={prod.image}
                id={prod.id}
                description={prod.description}
                price={prod.price}
                title={prod.title}
              />
            );
          })}
        </>
      )}
    </main>
  );
};

export default Products;
