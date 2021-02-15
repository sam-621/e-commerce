import React from 'react';
import '../../styles/molecules/cartCard.css';
import AxiosInstance from '../../utils/Axios';
import { HTTPException } from '../../utils/HttpException';
import RemoveIcon from '../../img/remove.svg';
import Cookie from 'universal-cookie';
import { API_KEY } from '../../config';

const CartCard = ({ img, price, name, _id, setProductsCart }: ICartCard) => {
  const cookie = new Cookie();

  async function removeFromTheCart() {
    const headers = { api_key: API_KEY, authorization: cookie.get('token') };
    try {
      const res = await AxiosInstance.put('/cart/remove', { productID: _id }, { headers });

      setProductsCart(res.data.data.cart);
    } catch (e) {
      const httpException = new HTTPException(e.message);
      const msg: string = httpException.getProductsMessage();
      alert(msg);
    }
  }

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
        <button onClick={removeFromTheCart}>
          <img src={RemoveIcon} alt="Remove icon" width="25px" height="25px" />
        </button>
      </div>
    </article>
  );
};

interface ICartCard {
  _id: string;
  img: string;
  name: string;
  price: number;
  setProductsCart: any;
}

export default CartCard;
