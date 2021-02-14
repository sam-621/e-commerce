import React from 'react';
import '../../styles/molecules/productForBuy.css';

import { Nav, PayPal } from '../containers';

const ProductForBuy = ({ description, image, price, title, id }: IProductProps) => {
  return (
    <article className="ProductForBuy">
      <div className="ProductForBuy-img">
        <img src={image} alt={title} />
      </div>
      <div className="ProductForBuy-info">
        <div className="ProductForBuy-info-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="ProductForBuy-info-price">
          <p>$ {price}</p>
        </div>
        <PayPal amount={price} description={description} image={image} name={title} />
      </div>
    </article>
  );
};

interface IProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number | any;
}

export default ProductForBuy;
