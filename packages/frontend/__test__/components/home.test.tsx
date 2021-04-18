import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('<Home />', () => {
  test('should render', () => {
    const component = render(<Home p="Test" />);

    const h1Element = screen.getByText('Hola :)');

    screen.debug();

    expect(h1Element).toBeInTheDocument();
  });
});
