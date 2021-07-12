import { FC } from 'react';
import Link from 'next/link';
import AddToCartButton from '../atoms/Butons/AddToCartButton';
import { IProduct } from '@Types/products';

const Product: FC<IProductProps> = ({ product }) => {
  const { image, name, price, id } = product;

  return (
    <article className="Product">
      <Link href={`/products/${name}-${id}`}>
        <a className="Product-image">
          <img src={image} title={name} alt={name} width={80} height={80} loading={'eager'} />
        </a>
      </Link>
      <div className="Product-info">
        <div className="Product-info-text">
          <h3>{name}</h3>
          <span>${price}</span>
        </div>
        <div className="Product-info-button">
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
};

interface IProductProps {
  product: IProduct;
}

export default Product;
