import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import TopMobileNav from '../components/containers/TopMobileNav';
import ProductsHome from '../components/containers/ProductsHome';
import ProductServices from '../services/ProductServices';
import { IAllProducts, IProduct } from '../types/products';
import BottomMobileNav from '../components/containers/BottomMobileNav';
import { useMedia } from '../hooks/useMedia';
import { mediaFrom1440 } from '../helpers/mediaQueries';
import AsideDesktopNav from '../components/containers/AsideDesktopNav';

const Page: FC<IHomeProps> = ({ drinks, guajolotas, tamales }) => {
  const isDesktop = useMedia(mediaFrom1440);
  return (
    <>
      {!isDesktop && <TopMobileNav />}
      <main className="Index">
        {isDesktop && <AsideDesktopNav />}
        <ProductsHome drinks={drinks} guajolotas={guajolotas} tamales={tamales} />
      </main>
      {!isDesktop && <BottomMobileNav />}
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

interface IHomeProps {
  guajolotas?: IProduct[];
  drinks?: IProduct[];
  tamales?: IProduct[];
}

export default Page;
