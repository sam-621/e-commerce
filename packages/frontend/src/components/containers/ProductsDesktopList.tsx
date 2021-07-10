import { FC } from 'react';
import { IProduct } from '../../types/products';
import Product from '../molecules/Product';
import Subtitle from '../atoms/Subtitle';

const ProductsDesktopList: FC<IProductsDesktopList> = ({ products, text }) => {
  return (
    <section style={{ margin: '20px 0' }} className="ProductsDesktopList">
      <Subtitle text={text} />

      <div className="ProductsDesktopList-products">
        {products?.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

interface IProductsDesktopList {
  products: IProduct[];
  text: string;
}

export default ProductsDesktopList;
