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
import Metatags from '../components/containers/Metatags';

const Page: FC<IHomeProps> = ({ drinks, guajolotas, tamales }) => {
  const isMobile = useMedia(mediaFrom1440);

  const DesktopPage = () => (
    <>
      <Metatags
        title="Shoppingify | Home"
        description="An E-commerce where you can buy products"
        keywords="Buy Products guappjolotadas"
      />
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
      <Metatags
        title="Shoppingify | Home"
        description="An E-commerce where you can buy products"
        keywords="Buy Products guappjolotadas"
      />
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
      guajolotas: products?.guajolotas || null,
      drinks: products?.bebidas || null,
      tamales: products?.tamales || null,
    },
  };
};

interface IHomeProps {
  guajolotas?: IProduct[];
  drinks?: IProduct[];
  tamales?: IProduct[];
}

export default Page;
