import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import axios from 'axios';
import Cookie from 'universal-cookie';
import { API_KEY, API_URI, MODE } from '../../config';

const PayPal = ({ amount, description, image, name }: IPayPalProps) => {
  const cookie = new Cookie();
  const clientId = MODE === 'development' ? process.env.CLIENTID_DEV : process.env.CLIENTID_PROD;

  function createOrder(data: any, actions: any) {
    return actions.order.create({
      purchase_units: [
        {
          description: description,
          amount: {
            currency_code: 'MXN',
            value: amount,
          },
        },
      ],
    });
  }

  async function onSuccess(details: any, data: any) {
    if (details.status === 'COMPLETED') {
      const data = {
        productName: name,
        productPrice: amount,
        productImage: image,
        productDescription: description,
      };
      const res = await axios.post(`${API_URI}/products/buy`, data, {
        headers: { api_key: API_KEY, authorization: cookie.get('token') },
      });

      if (res.status === 200) {
        alert('Su pago ha sido completado');
      }
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
