import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '../atoms/AddToCartButton';

const Product: FC<IProductProps> = ({ image, name, price, id }) => {
  return (
    <article className="Product">
      <Link href={`/products/${name}-${id}`}>
        <a className="Product-image">
          <Image src={image} title={name} alt={name} width={80} height={80} loading={'eager'} />
        </a>
      </Link>
      <div className="Product-info">
        <div className="Product-info-text">
          <h3>{name}</h3>
          <span>${price}</span>
        </div>
        <div className="Product-info-button">
          <AddToCartButton />
        </div>
      </div>
    </article>
  );
};

interface IProductProps {
  image: string;
  name: string;
  price: number;
  id: number;
}

export default Product;
