import React from 'react';
import '../../styles/pages/payment.css';

import { Nav, PayPal } from '../containers';
import { productsData } from '../../products';
import { ProductForBuy } from '../molecules';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const params = useParams<RouterParams>();

  return (
    <>
      <Nav />
      <section className="Payment-info">
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
      </section>
    </>
  );
};

interface RouterParams {
  productID: any;
}

export default Payment;
