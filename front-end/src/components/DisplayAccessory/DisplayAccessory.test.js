import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayAccessory from './DisplayAccessory';

describe('<DisplayAccessory />', () => {
  test('it should mount', () => {
    render(<DisplayAccessory />);
    
    const displayAccessory = screen.getByTestId('DisplayAccessory');

    expect(displayAccessory).toBeInTheDocument();
  });
});