import React from 'react';
import '../../styles/containers/products.css';
import useFetchData from '../../hooks/useFetchData';
import Cookie from 'universal-cookie';

import { Product } from '../molecules';

const Products = () => {
  const cookie = new Cookie();

  const { data, loading } = useFetchData(cookie.get('token'));

  console.log(data);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <main className="Products">
      {data.map((prod: any) => {
        return (
          <Product
            key={prod.id}
            image={prod.image}
            description={prod.description}
            price={prod.price}
            title={prod.title}
          />
        );
      })}
    </main>
  );
};

export default Products;
