import React from 'react';
import '../../styles/molecules/cartCard.css';

const CartCard = ({ description, img, price, name }: ICartCard) => {
  return (
    <article className="CartCard">
      <div className="CartCard-img">
        <img src={img} alt={name} />
      </div>
      <div className="CartCard-text">
        <div className="CartCard-text-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="CartCard-text-price">
          <p>$ {price}</p>
        </div>
      </div>
    </article>
  );
};

interface ICartCard {
  img: string;
  name: string;
  description: string;
  price: number;
}

export default CartCard;
