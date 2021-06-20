import React from 'react';
import TopMobileNav from '../components/containers/TopMobileNav';
import Product from '../components/molecules/Product';

const Page = () => {
  return (
    <>
      <TopMobileNav />
      <Product
        id={1}
        image="https://juan-jose-mayorga-projects.s3.amazonaws.com/react-native/guappjolotas/guajolotas/verdex2.png"
        name="product"
        price={14.52}
      />
    </>
  );
};

export default Page;
