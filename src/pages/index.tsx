import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import TopMobileNav from '@Components/containers/Mobile/TopMobileNav';
import ProductsHome from '@Components/templates/ProductsHome';
import ProductServices from '@Services/ProductServices';
import { IAllProducts, IProduct } from '@Types/products';
import BottomMobileNav from '@Components/containers/Mobile/BottomMobileNav';
import { useMedia } from '@Hooks/useMedia';
import { mediaFrom1440 } from '@Helpers/mediaQueries';
import AsideDesktopNav from '@Components/containers/Desktop/AsideDesktopNav';
import DesktopHeader from '@Components/molecules/DesktopHeader';
import AsideDesktopProduct from '@Components/containers/Desktop/AsideDesktopProduct';
import Metatags from '@Components/containers/Metatags';

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
  const products: IAllProducts = (await productServices.getAllProducts())?.data;
  console.log(products);

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
