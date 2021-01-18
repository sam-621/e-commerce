import React from 'react';
import '../../styles/molecules/product.css';

import AddIcon from '../../img/add.svg';

const Product = ({ description, image, price, title }: IProductProps) => {
  return (
    <article className="Product">
      <div className="Product-image">
        <img src={image} alt={title} />
      </div>
      <div className="Product-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="Product-options">
        <div className="Product-options-price">
          <p>{price}</p>
        </div>
        <div className="Product-options-action">
          <button>
            <img src={AddIcon} alt="add to cart icon" />
          </button>
        </div>
      </div>
    </article>
  );
};

interface IProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

export default Product;
