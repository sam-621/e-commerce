import { GetStaticProps } from 'next';
import { FC } from 'react';
import ProductServices from '../../services/ProductServices';
import { IAllProducts, IProduct } from '../../types/products';
import ProductsCarousel from '../templates/ProductsCarousel';

const ProductsHome: FC<IProductsHomeProps> = ({ guajolotas, drinks, tamales }) => {
  return (
    <>
      <ProductsCarousel products={guajolotas} />
      {/* <ProductsCarousel products={drinks} /> */}
      {/* <ProductsCarousel products={tamales} /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const productServices = new ProductServices();
  const products: IAllProducts = await productServices.getAllProducts();

  return {
    props: {
      guajolotas: products.guajolotas,
      drinks: products.bebidas,
      tamales: products.tamales,
    },
  };
};

interface IProductsHomeProps {
  guajolotas: IProduct[];
  drinks: IProduct[];
  tamales: IProduct[];
}
export default ProductsHome;
