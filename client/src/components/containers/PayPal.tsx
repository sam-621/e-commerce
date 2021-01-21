import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPal = ({ amount }: IPayPalProps) => {
  return (
    <section>
      <h1>Pay with PayPal</h1>
      <PayPalButton
        amount={amount}
        currency="MXN"
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
