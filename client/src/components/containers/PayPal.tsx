import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import axios from 'axios';
import Cookie from 'universal-cookie';

const PayPal = ({ amount, description, image, name }: IPayPalProps) => {
  const cookie = new Cookie();
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

  async function onSuccess(details: any, data: any) {
    console.log(details, data, 'onSuccess');

    if (details.status === 'COMPLETED') {
      const data = {
        productName: name,
        productPrice: amount,
        productImage: image,
        productDescription: description,
      };
      const res = await axios.post(`${process.env.API_URI}/products/buy`, data, {
        headers: { api_key: 'secret', authorization: cookie.get('token') },
      });

      console.log(res);
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
  name: string;
  amount: number;
  description: string;
  image: string;
}

export default PayPal;
