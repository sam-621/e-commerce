import React, { Dispatch, useContext, useState } from 'react';
import '../../../styles/molecules/cartCard.css';
import { HTTPException } from '../../../utils/HttpException';
import RemoveIcon from '../../img/remove.svg';
import Cookie from 'universal-cookie';
import { API_KEY } from '../../../config';
import CartContext from '../../../context/cart/cart';
import { removeFromCart } from '../../../context/cart/actionsCreator';
import { IAction, IInitialState } from '../../../context/interfaces';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { put } from '../../../utils/petitions';
import { Loader } from '../../elements';

const CartCard = ({ img, price, name, _id, frontID }: ICartCard) => {
  const [state, dispatch] = useContext(CartContext) as [IInitialState, Dispatch<IAction>];
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const cookie = new Cookie();

  async function removeFromTheCart() {
    setIsLoading(true);
    const headers = { api_key: API_KEY, authorization: cookie.get('token') };
    try {
      const res = await put('/cart/remove', { productID: _id }, { headers });

      if (res.status === 200) {
        setIsLoading(false);
        dispatch(removeFromCart(_id));
        toast.success('Product removed successfully');
      }
    } catch (e) {
      const httpException = new HTTPException(e.message);
      const msg: string = httpException.getProductsMessage();
      setIsLoading(false);
      toast.error(msg);
    }
  }

  return (
    <article className="CartCard">
      <Link to={`/home/${frontID}`} className="CartCard-img">
        <img src={img} alt={name} />
      </Link>
      <div className="CartCard-text">
        <h2>{name}</h2>
        <p>$ {price}</p>
      </div>
      <div className="CardCard-remove">
        {isLoading ? (
          <Loader />
        ) : (
          <button onClick={removeFromTheCart}>
            <img src={RemoveIcon} alt="Remove icon" width="25px" height="25px" />
          </button>
        )}
      </div>
    </article>
  );
};

interface ICartCard {
  frontID: number;
  _id: string;
  img: string;
  name: string;
  price: number;
}

export default CartCard;