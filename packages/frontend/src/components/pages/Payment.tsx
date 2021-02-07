import React from 'react';

import { Nav, PayPal } from '../containers';
import { productsData } from '../../products';
import { ProductForBuy } from '../molecules';
import { Redirect, useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Payment = () => {
  const params = useParams<RouterParams>();
  const cookie = new Cookies();

  return (
    <>
      {cookie.get('token') ? (
        <>
          <Nav />
          <ProductForBuy
            description={productsData[params.productID - 1].description}
            id={productsData[params.productID - 1].id}
            image={productsData[params.productID - 1].image}
            price={productsData[params.productID - 1].price}
            title={productsData[params.productID - 1].title}
          />
          <PayPal
            amount={productsData[params.productID - 1].price}
            description={productsData[params.productID - 1].description}
            image={productsData[params.productID - 1].image}
            name={productsData[params.productID - 1].title}
          />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

interface RouterParams {
  productID: any;
}

export default Payment;
