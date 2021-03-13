import React from 'react';
import '../../styles/molecules/listProducts.css';
import { Link } from 'react-router-dom';
import { MiniProduct } from '../atoms';

const ListProducts = ({ title, url }: IListProductsProps) => {
  return (
    <div className="ListProducts">
      <div className="ListProducts-title">
        <h3>{title}</h3>
        <Link to={url}>See all -{'>'}</Link>
      </div>
      <div className="ListProducts-products">
        <MiniProduct price={1.8} productName="Product " />
        <MiniProduct price={1.8} productName="Product " />
        <MiniProduct price={1.8} productName="Product " />
      </div>
    </div>
  );
};

export default ListProducts;

interface IListProductsProps {
  title: string;
  url: string;
}
