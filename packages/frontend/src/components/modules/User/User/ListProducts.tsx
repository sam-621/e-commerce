import React from 'react';
import '../../../../styles/molecules/listProducts.css';
import { Link } from 'react-router-dom';
import MiniProduct from './MiniProduct';
import { IProduct } from '../../../../context/interfaces';

const ListProducts = ({ products, title, url }: IListProductsProps) => {
  return (
    <div className="ListProducts">
      <div className="ListProducts-title">
        <h3>{title}</h3>
        <Link to={`/user/${url}`}>See all -{'>'}</Link>
      </div>
      <div className="ListProducts-products">
        {products.map((prod) => {
          return (
            <MiniProduct
              key={prod._id}
              price={prod.price}
              productName={prod.name}
              frontID={prod.frontID.toString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListProducts;

interface IListProductsProps {
  products: IProduct[];
  title: string;
  url: string;
}
