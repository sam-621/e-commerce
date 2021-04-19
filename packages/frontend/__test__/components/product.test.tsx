import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from '../../src/components/elements/Product';
import mountComponent from '../utils/mountComponent';
import Cookies from 'universal-cookie';

jest.mock('universal-cookie', () => {
  const mCookie = {
    get: jest.fn(),
  };
  return jest.fn(() => mCookie);
});

describe('<Product />', () => {
  test('Should display add to cart icon', () => {
    const cookies = new Cookies();
    (cookies.get as jest.Mocked<any>).mockReturnValueOnce({
      value: 'token just for test',
    });

    mountComponent(
      <Product
        image="#"
        id="1"
        description="Description"
        price={35}
        name="Product test"
        isUserProducts={false}
      />
    );

    const addToCartButton = screen.getByAltText('add to cart icon').parentElement;

    expect(addToCartButton).toBeInTheDocument();
  });

  test('Should not display add to cart icon', () => {
    const cookies = new Cookies();
    (cookies.get as jest.Mocked<any>).mockReturnValueOnce({
      value: 'token just for test',
    });

    mountComponent(
      <Product
        image="#"
        id="1"
        description="Description"
        price={35}
        name="Product test"
        isUserProducts={true}
      />
    );

    const addToCartButton = screen.queryByAltText('add to cart icon')?.parentElement;

    expect(addToCartButton).toBe(undefined);
  });
});
