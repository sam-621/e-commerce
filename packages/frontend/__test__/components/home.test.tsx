import React from 'react';
import { act, fireEvent, prettyDOM, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../src/components/modules/Home/Home';
import { CartContextProvider } from '../../src/context/cart/cart';
import mountComponent from '../utils/mountComponent';
import { productsData } from '../../src/products';

jest.mock('universal-cookie', () => {
  class Cookie {
    get() {
      return 'token for test';
    }
  }
  return Cookie;
});

jest.mock('../../src/hooks', () => ({
  useAuth: jest.fn(() => ({ isAuth: true, finished: true, token: '' })),
}));

jest.mock('../../src/utils/petitions', () => ({
  get: jest.fn(async () => Promise.resolve({ data: { data: productsData } })),
  put: jest.fn(async () => Promise.resolve({ data: { data: productsData } })),
}));

describe('<Home />', () => {
  test('Should add to card', async () => {
    mountComponent(
      <CartContextProvider>
        <Home />
      </CartContextProvider>
    );

    let AddToCartButtons: HTMLElement[];
    await waitFor(() => {
      AddToCartButtons = screen.getAllByAltText('add to cart icon');
    });

    expect(AddToCartButtons.length).toBe(6);

    const button: HTMLElement = AddToCartButtons[0].parentElement;

    act(() => {
      fireEvent.click(button);
    });

    let cartCounter: HTMLElement;
    await waitFor(() => {
      cartCounter = screen.getByText('1');
    });

    expect(cartCounter.innerHTML).toBe('1');
  });
});
