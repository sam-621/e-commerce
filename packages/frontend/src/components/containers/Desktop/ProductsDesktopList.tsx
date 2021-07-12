import { FC } from 'react';
import { IProduct } from '@Types/products';
import Product from '../../molecules/Product';
import Subtitle from '../../atoms/Subtitle';

const ProductsDesktopList: FC<IProductsDesktopList> = ({ products, text }) => {
  return (
    <section style={{ margin: '20px 0' }} className="ProductsDesktopList">
      <Subtitle text={text} />

      <div className="ProductsDesktopList-products">
        {products?.map((item) => (
          <Product key={item.id} product={item} />
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
