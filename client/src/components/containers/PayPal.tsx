import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPal = ({ amount }: IPayPalProps) => {
  const clientId =
    process.env.NODE_ENV === 'development' ? process.env.CLIENTID_DEV : process.env.CLIENTID_PROD;

  function createOrder(data: any, actions: any) {
    console.log(data, actions, 'create order');
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  }

  function onSuccess(details: any, data: any) {
    console.log(details, data, 'onSuccess');

    if (details.status === 'COMPLETED') {
      alert('success');
    }
  }

  return (
    <section>
      <h1>Pay with PayPal</h1>
      <PayPalButton
        options={{ clientId: clientId, currency: 'MXN' }}
        amount={amount}
        createOrder={createOrder}
        onSuccess={onSuccess}
        style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay' }}
      />
    </section>
  );
};

interface IPayPalProps {
  amount: number;
}

export default PayPal;
