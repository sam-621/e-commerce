import React from 'react';
import '../../styles/pages/payment.css';

import { Nav, PayPal } from '../containers';
import { productsData } from '../../products';
import { ProductForBuy } from '../molecules';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const params = useParams<RouterParams>();
  const product = [productsData[params.productID - 1]];

  return (
    <>
      <Nav />
      <section className="Payment-info">
        <ProductForBuy products={product} />
      </section>
    </>
  );
};

interface RouterParams {
  productID: any;
}

export default Payment;
