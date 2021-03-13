import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/atoms/miniProduct.css'

const MiniProduct = ({ productName, price }: IMiniProductProps) => {
  return (
    <Link to="#" className="MiniProduct">
      <h4>{productName}</h4>
      <p>${price}</p>
    </Link>
  );
};

export default MiniProduct;

interface IMiniProductProps {
  productName: string;
  price: number;
}
