import React, { useContext } from 'react';
import '../../styles/molecules/product.css';

import AddIcon from '../../img/add.svg';
import { Link } from 'react-router-dom';
import AxiosInstance from '../../utils/Axios';
import { API_KEY } from '../../config';
import Cookie from 'universal-cookie';
import CartContext from '../../context/cart';
import { ICtxReturns } from '../../context/interfaces';

const Product = ({ description, image, price, name, id }: IProductProps) => {
  const { productsCart, setProductsCart } = useContext(CartContext) as ICtxReturns;
  async function addToCart() {
    const cookie = new Cookie();
    const token: string | null = cookie.get('token');
    const headers = { api_key: API_KEY, authorization: token };
    const data: IProductProps = { description, image, price, name };

    try {
      const res = await AxiosInstance.put('/cart/add', data, { headers });

      setProductsCart(res.data.data);
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
  id?: number | any;
}

export default Product;
