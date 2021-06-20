import { GetStaticProps } from 'next';
import { FC, useEffect } from 'react';
import ProductServices from '../../services/ProductServices';
import { IAllProducts, IProduct } from '../../types/products';
import ProductsCarousel from '../templates/ProductsCarousel';

const ProductsHome: FC<IProductsHomeProps> = ({ guajolotas, drinks, tamales, dat }) => {
  useEffect(() => {
    const fetch = async () => {
      const service = new ProductServices();
      const res = await service.getAllProducts();
      console.log(res);
    };
    fetch();
  });

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
  console.log(products);

  // return {
  //   props: {
  //     guajolotas: products.guajolotas,
  //     drinks: products.bebidas,
  //     tamales: products.tamales,
  //   },
  // };
  return {
    props: {
      dat: products,
    },
  };
};

interface IProductsHomeProps {
  guajolotas?: IProduct[];
  drinks?: IProduct[];
  tamales?: IProduct[];
  dat: any;
}
export default ProductsHome;
