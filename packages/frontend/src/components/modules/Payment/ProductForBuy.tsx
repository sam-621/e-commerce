import React from 'react';
import { IProduct } from '../../../context/interfaces';
import '../../styles/molecules/productForBuy.css';

import PayPal from './PayPal';

const ProductForBuy = ({ products }: IProductProps) => {
  return (
    <article className="ProductForBuy">
      <div className="ProductForBuy-img">
        <img src={products[0].image} alt={products[0].name} />
      </div>
      <div className="ProductForBuy-info">
        <div className="ProductForBuy-info-text">
          <h2>{products[0].name}</h2>
          <p>{products[0].description}</p>
        </div>
        <div className="ProductForBuy-info-price">
          <p>$ {products[0].price}</p>
        </div>
        <PayPal products={products} />
      </div>
    </article>
  );
};

interface IProductProps {
  products: IProduct[];
}

export default ProductForBuy;
