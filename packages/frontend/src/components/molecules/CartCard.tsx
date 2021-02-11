import React from 'react';

const CartCard = ({ description, img, price, title }: ICartCard) => {
  return (
    <article>
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

interface ICartCard {
  img: string;
  title: string;
  description: string;
  price: number;
}

export default CartCard;
