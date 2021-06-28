import { FC } from 'react';
import { IProduct } from '../../types/products';
import Product from '../molecules/Product';
import Subtitle from '../atoms/Subtitle';

const ProductsDesktopList: FC<IProductsDesktopList> = ({ products, text }) => {
  return (
    <section style={{ margin: '20px 0' }}>
      <Subtitle text={text} />

      {products?.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </section>
  );
};

interface IProductsDesktopList {
  products: IProduct[];
  text: string;
}

export default ProductsDesktopList;
