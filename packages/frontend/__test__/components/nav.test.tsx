import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../../src/components/elements/Nav';
import { CartContextProvider } from '../../src/context/cart/cart';
import mountComponent from '../utils/mountComponent';

describe('<Nav />', () => {
  test('Should display UserIcon', () => {
    mountComponent(
      <CartContextProvider>
        <Nav isAuth={true} />
      </CartContextProvider>
    );

    const userIcon = screen.getByAltText('User icon');
    const registerOption = screen.queryByText('Register');

    expect(userIcon).toBeInTheDocument();
    expect(registerOption).toBe(null);
  });

  test('Should display Register option', () => {
    mountComponent(
      <CartContextProvider>
        <Nav isAuth={false} />
      </CartContextProvider>
    );

    const userIcon = screen.queryByAltText('User icon');
    const registerOption = screen.queryByText('Register');

    expect(registerOption).toBeInTheDocument();
    expect(userIcon).toBe(null);
  });
});
