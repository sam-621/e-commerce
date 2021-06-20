import React, { FC } from 'react';
import TopMobileNav from '../components/containers/TopMobileNav';
import Product from '../components/molecules/Product';
import ProductsHome from '../components/containers/ProductsHome';
import { GetStaticProps } from 'next';
import ProductServices from '../services/ProductServices';
import { IAllProducts, IProduct } from '../types/products';

const Page: FC<IHomeProps> = ({ drinks, guajolotas, tamales }) => {
  return (
    <>
      <TopMobileNav />
      <ProductsHome drinks={drinks} guajolotas={guajolotas} tamales={tamales} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const productServices = new ProductServices();
  const products: IAllProducts = await productServices.getAllProducts();
  console.log(products);

  return {
    props: {
      guajolotas: products.guajolotas,
      drinks: products.bebidas,
      tamales: products.tamales,
    },
  };
};

interface IHomeProps {
  guajolotas?: IProduct[];
  drinks?: IProduct[];
  tamales?: IProduct[];
}

export default Page;
