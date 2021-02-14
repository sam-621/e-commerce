import React from 'react';
import '../../styles/molecules/cartCard.css';

import RemoveIcon from '../../img/remove.svg';

const CartCard = ({ img, price, name }: ICartCard) => {
  return (
    <article className="CartCard">
      <div className="CartCard-img">
        <img src={img} alt={name} />
      </div>
      <div className="CartCard-text">
        <h2>{name}</h2>
        <p>$ {price}</p>
      </div>
      <div className="CardCard-remove">
        <button>
          <img src={RemoveIcon} alt="Remove icon" width="25px" height="25px" />
        </button>
      </div>
    </article>
  );
};

interface ICartCard {
  img: string;
  name: string;
  price: number;
}

export default CartCard;
