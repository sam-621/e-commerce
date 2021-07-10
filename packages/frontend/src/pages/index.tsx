import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import TopMobileNav from '../components/containers/TopMobileNav';
import ProductsHome from '../components/templates/ProductsHome';
import ProductServices from '../services/ProductServices';
import { IAllProducts, IProduct } from '../types/products';
import BottomMobileNav from '../components/containers/BottomMobileNav';
import { useMedia } from '../hooks/useMedia';
import { mediaFrom1440 } from '../helpers/mediaQueries';
import AsideDesktopNav from '../components/containers/AsideDesktopNav';
import DesktopHeader from '../components/molecules/DesktopHeader';
import AsideDesktopProduct from '../components/containers/AsideDesktopProduct';

const Page: FC<IHomeProps> = ({ drinks, guajolotas, tamales }) => {
  const isMobile = useMedia(mediaFrom1440);

  const DesktopPage = () => (
    <>
      <main className="Index">
        <AsideDesktopNav />
        <section className="Index-center">
          <DesktopHeader />
          <ProductsHome drinks={drinks} guajolotas={guajolotas} tamales={tamales} />
        </section>
        <AsideDesktopProduct />
      </main>
    </>
  );

  const MobilePage = () => (
    <>
      <TopMobileNav />
      <ProductsHome drinks={drinks} guajolotas={guajolotas} tamales={tamales} />
      <BottomMobileNav />
    </>
  );

  return isMobile ? <MobilePage /> : <DesktopPage />;
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
