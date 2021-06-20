import { FC } from 'react';
import { IProduct } from '../../types/products';
import ProductsCarousel from '../templates/ProductsCarousel';

const ProductsHome: FC<IProductsHomeProps> = ({ guajolotas, drinks, tamales }) => {
  return (
    <section className="ProductsHome">
      <ProductsCarousel products={guajolotas} text="Guajolotas" />
      <ProductsCarousel products={drinks} text="Drinks" />
      <ProductsCarousel products={tamales} text="Tamales" />
    </section>
  );
};

interface IProductsHomeProps {
  guajolotas?: IProduct[];
  drinks?: IProduct[];
  tamales?: IProduct[];
}

export default ProductsHome;
