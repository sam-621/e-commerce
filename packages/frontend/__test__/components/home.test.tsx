import React from 'react';
import { prettyDOM, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../src/components/modules/Home/Home';
import { CartContextProvider } from '../../src/context/cart/cart';
import mountComponent from '../utils/mountComponent';
import { Nav, Products } from '../../src/components/elements';
import { productsData } from '../../src/products';
import useAuth from '../../src/hooks/useAuth';
import axios from 'axios';

// const mockUseAuth = jest.fn(() => {
//   return { isAuth: true, finished: true, token: '' };
// });

jest.mock('../../src/hooks/useAuth.ts', () =>
  jest.fn(() => ({ isAuth: true, finished: true, token: '' }))
);

describe('<Home />', () => {
  test('Should add to card', async () => {
    mountComponent(
      <CartContextProvider>
        <Home />
      </CartContextProvider>
    );

    let img: HTMLElement;
    await waitFor(() => {
      img = screen.getByAltText('Camiseta');
    });

    screen.debug();
  });
});
