import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import MockComponent from './MockComponent';

function mountComponent(component: ReactElement) {
  render(<MockComponent Component={component} />);
}

export default mountComponent;
