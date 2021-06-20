import { GetStaticProps } from 'next';
import { FC } from 'react';
import ProductServices from '../../services/ProductServices';
import { IProduct } from '../../types/products';
import ProductsCarousel from '../templates/ProductsCarousel';

const ProductsHome: FC<IProductsHomeProps> = ({ products }) => {
  return (
    <>
      <ProductsCarousel products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const productServices = new ProductServices();
  const products: IProduct[] = await productServices.getAllProducts();

  return {
    props: {
      products,
    },
  };
};

interface IProductsHomeProps {
  products: IProduct[];
}
export default ProductsHome;
