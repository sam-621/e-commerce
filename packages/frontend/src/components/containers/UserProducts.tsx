import React from 'react';
import '../../styles/containers/userProducts.css';
import { IProduct } from '../../context/interfaces';
import { ListProducts } from '../molecules';

const UserProducts = ({ productsBought, cartProducts }: IUserProductsProps) => {
  return (
    <section className="UserProducts">
      <ListProducts products={productsBought} title="Products bought" url="products" />
      <ListProducts products={cartProducts} title="Cart products" url="cart" />
    </section>
  );
};

export default UserProducts;

interface IUserProductsProps {
  productsBought: IProduct[];
  cartProducts: IProduct[];
}
