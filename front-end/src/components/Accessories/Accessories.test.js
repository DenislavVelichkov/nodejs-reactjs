import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Accessories from './Accessories';

describe('<Accessories />', () => {
  test('it should mount', () => {
    render(<Accessories />);
    
    const accessories = screen.getByTestId('Accessories');

    expect(accessories).toBeInTheDocument();
  });
});