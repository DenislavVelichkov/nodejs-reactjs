import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttachAccessory from './AttachAccessory';

describe('<AttachAccessory />', () => {
  test('it should mount', () => {
    render(<AttachAccessory />);
    
    const attachAccessory = screen.getByTestId('AttachAccessory');

    expect(attachAccessory).toBeInTheDocument();
  });
});