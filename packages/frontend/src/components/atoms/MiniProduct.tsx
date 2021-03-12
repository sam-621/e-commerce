import React from 'react';

const MiniProduct = ({ productName, price }: IMiniProductProps) => {
  return (
    <article>
      <h4>{productName}</h4>
      <p>{price}</p>
    </article>
  );
};

export default MiniProduct;

interface IMiniProductProps {
  productName: string;
  price: number;
}
