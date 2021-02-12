import React from 'react';
import '../../styles/molecules/product.css';

import AddIcon from '../../img/add.svg';
import { Link } from 'react-router-dom';

const Product = ({ description, image, price, name, id }: IProductProps) => {
  function addToCart() {
    console.log(`Product ${id} added to cart`);
  }

  return (
    <article className="Product">
      <Link to={`/home/${id}`} className="Product-image">
        <img src={image} alt={name} />
      </Link>
      <div className="Product-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="Product-options">
        <div className="Product-options-price">
          <p>$ {price}</p>
        </div>
        <div className="Product-options-btn">
          <button onClick={addToCart}>
            <img src={AddIcon} alt="add to cart icon" width="30px" height="30px" />
          </button>
        </div>
      </div>
    </article>
  );
};

interface IProductProps {
  image: string;
  name: string;
  description: string;
  price: number;
  id: number | any;
}

export default Product;
