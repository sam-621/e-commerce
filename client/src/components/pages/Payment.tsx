import React from 'react';

import { Nav, PayPal } from '../containers';
import { productsData } from '../../products';
import { ProductForBuy } from '../molecules';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const params = useParams<RouterParams>();

  return (
    <>
      <Nav />
      <ProductForBuy
        description={productsData[params.productID - 1].description}
        id={productsData[params.productID - 1].id}
        image={productsData[params.productID - 1].image}
        price={productsData[params.productID - 1].price}
        title={productsData[params.productID - 1].title}
      />
      <PayPal amount={productsData[params.productID - 1].price} />
    </>
  );
};

interface RouterParams {
  productID: any;
}

export default Payment;
