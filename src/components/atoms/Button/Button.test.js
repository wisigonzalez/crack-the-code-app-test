import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Button } from './Button';

const mockText = 'Test button';
const mockPress = jest.fn();

describe('Button component', () => {
  it('should renders button component with props', () => {
    render(
      <Button 
        text={mockText}
        handleCick={mockPress}
      />
    );

    const button = screen.getByTestId('button-id');

    expect(button).toHaveTextContent(mockText);
  });

  it('should calls handleCick function', () => {
    render(
      <Button 
        text={mockText}
        handleCick={mockPress}
      />
    );

    const button = screen.getByTestId('button-id');

    fireEvent.click(button);

    expect(mockPress).toBeCalledTimes(1);
  });
});
