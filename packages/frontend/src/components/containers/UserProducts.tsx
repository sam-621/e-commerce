import React from 'react';
import { IProduct } from '../../context/interfaces';
import { ListProducts } from '../molecules';

const UserProducts = ({ products }: IUserProductsProps) => {
  return (
    <section>
      <ListProducts products={products} title="Products bought" url="products" />
    </section>
  );
};

export default UserProducts;

interface IUserProductsProps {
  products: IProduct[];
}
