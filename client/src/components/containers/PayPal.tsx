import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPal = ({ amount }: IPayPalProps) => {
  const clientId =
    process.env.NODE_ENV === 'development' ? process.env.CLIENTID_DEV : process.env.CLIENTID_PROD;

  return (
    <section>
      <h1>Pay with PayPal</h1>
      <PayPalButton
        options={{ clientId: clientId, currency: 'MXN' }}
        amount={amount}
        createOrder={() => console.log('order created')}
        onApprove={() => console.log('Order approved')}
        style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay' }}
      />
    </section>
  );
};

interface IPayPalProps {
  amount: number;
}

export default PayPal;
