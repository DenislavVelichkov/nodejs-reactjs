import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectedAttCube from './SelectedAttCube';

describe('<SelectedAttCube />', () => {
  test('it should mount', () => {
    render(<SelectedAttCube />);
    
    const selectedAttCube = screen.getByTestId('SelectedAttCube');

    expect(selectedAttCube).toBeInTheDocument();
  });
});