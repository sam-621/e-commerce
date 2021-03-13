import React from 'react';
import '../../styles/molecules/listProducts.css'
import { Link } from 'react-router-dom';

const ListProducts = ({ title, url }: IListProductsProps) => {
  return (
    <div className="ListProducts">
      <div className="ListProducts-title">
        <h3>{title}</h3>
        <Link to={url}>See all -{'>'}</Link>
      </div>
      <div className="ListProducts-products">
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
