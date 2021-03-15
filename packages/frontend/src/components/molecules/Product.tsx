import React, { Dispatch, useContext } from 'react';
import '../../styles/molecules/product.css';

import AddIcon from '../../img/add.svg';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../config';
import Cookie from 'universal-cookie';
import CartContext from '../../context/cart/cart';
import { IAction, ICtxReturns, IInitialState, IProduct } from '../../context/interfaces';
import { addToCartAction } from '../../context/cart/actionsCreator';
import { toast } from 'react-toastify';
import { put } from '../../utils/petitions';

const Product = ({ description, image, price, name, id, isGeneric }: IProductProps) => {
  const [state, dispatch] = useContext(CartContext) as [IInitialState, Dispatch<IAction>];
  const cookie = new Cookie();
  const token: string | null = cookie.get('token');

  async function addToCart() {
    const headers = { api_key: API_KEY, authorization: token };
    const data: IProduct = { description, image, price, name, frontID: id };

    try {
      put('/cart/add', data, { headers }).then((res) => {
        const product = { ...res.data.data, frontID: id };
        dispatch(addToCartAction(product));
        toast.success('Added to cart');
      });
    } catch (e) {}
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
          {token && isGeneric ? (
            <button onClick={addToCart}>
              <img src={AddIcon} alt="add to cart icon" width="30px" height="30px" />
            </button>
          ) : null}
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
  id?: number | any;
  isGeneric?: boolean;
}

export default Product;
