import React, { useState } from 'react';
import '../../styles/containers/paypal.css';
import { PayPalButton } from 'react-paypal-button-v2';
import axios from 'axios';
import Cookie from 'universal-cookie';
import { API_KEY, API_URI, MODE } from '../../config';
import { Loader } from '../atoms';

const PayPal = ({ amount, description, image, name }: IPayPalProps) => {
  const cookie = new Cookie();
  const clientId = MODE === 'development' ? process.env.CLIENTID_DEV : process.env.CLIENTID_PROD;
  const [loading, setLoading] = useState(false);

  function createOrder(data: any, actions: any) {
    setLoading(true);
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
    setLoading(false);
    if (details.status === 'COMPLETED' && cookie.get('token')) {
      try {
        const data = {
          productName: name,
          productPrice: amount,
          productImage: image,
          productDescription: description,
        };
        const res = await axios.put(`${API_URI}/products/buy`, data, {
          headers: { api_key: API_KEY, authorization: cookie.get('token') },
        });

        if (res.status === 200) {
          alert('your pay has been completed, you can verify it in your PayPal account');
        }
      } catch (e) {
        alert('something went wrong in the server, but your pay was completed successfully');
      }
    } else if (details.status === 'COMPLETED') {
      alert('your pay has been completed, you can verify it in your PayPal account');
    }
  }

  return (
    <section className="Pay-options">
      <div className="Pay-options-title">
        <h1>Pay with PayPal</h1>
        {loading ? (
          <div className="Loader-container">
            <Loader border="5px" width="20px" height="20px" />
          </div>
        ) : null}
      </div>
      <div className="Pay-options-paypal">
        <PayPalButton
          options={{ clientId: clientId, currency: 'MXN' }}
          amount={amount}
          createOrder={createOrder}
          onSuccess={onSuccess}
          onError={() => console.log('err')}
          style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay' }}
        />
      </div>
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
