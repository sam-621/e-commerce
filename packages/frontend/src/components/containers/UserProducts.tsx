import React from 'react';
import { IProduct } from '../../context/interfaces';
import { ListProducts } from '../molecules';

const UserProducts = ({ productsBought, cartProducts }: IUserProductsProps) => {
  return (
    <section>
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
