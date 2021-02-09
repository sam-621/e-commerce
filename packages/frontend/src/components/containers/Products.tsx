import React from 'react';
import '../../styles/containers/products.css';
import useFetchData from '../../hooks/useFetchData';
import Cookie from 'universal-cookie';

import { Product } from '../molecules';
import { Loader } from '../atoms';
import { IFetchedData } from '../../hooks/hooks.interfaces';

const Products = () => {
  const cookie = new Cookie();

  const res = useFetchData(cookie.get('token')) as IFetchedData;

  return (
    <main className="Products">
      {res.loading ? (
        <Loader border="5px" width="30px" height="30px" />
      ) : (
        <>
          {res.data.map((prod: any) => {
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
