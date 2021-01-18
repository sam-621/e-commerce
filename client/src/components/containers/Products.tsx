import React from 'react';

import { Product } from '../molecules';
import { productsData } from '../../products';

const Products = () => {
  return (
    <main>
      {productsData.map((prod) => {
        return (
          <Product
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
