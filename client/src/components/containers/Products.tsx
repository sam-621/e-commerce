import React from 'react';
import '../../styles/containers/products.css';

import { Product } from '../molecules';
import { productsData } from '../../products';

const Products = () => {
  return (
    <main className="Products">
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
