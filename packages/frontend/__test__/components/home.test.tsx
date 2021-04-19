import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../src/components/modules/Home/Home';
import MockComponent from '../utils/MockComponent';

describe('<Home />', () => {
  test('should render', () => {
    const component = render(<MockComponent Component={<Home />} />);

    const logo = screen.getByText('Shopy');

    screen.debug();

    expect(logo).toBeInTheDocument();
  });
});
