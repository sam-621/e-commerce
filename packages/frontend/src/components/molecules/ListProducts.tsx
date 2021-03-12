import React from 'react';
import { Link } from 'react-router-dom';

const ListProducts = ({ title, url }: IListProductsProps) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <Link to={url}>See all</Link>
      </div>
      <div>
        <h1>Products</h1>
      </div>
    </div>
  );
};

export default ListProducts;

interface IListProductsProps {
  title: string;
  url: string;
}
