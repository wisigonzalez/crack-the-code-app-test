import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Input } from './Input';

const mockType = 'text';
const mockPlaceholder = 'Username';
const mockChange = jest.fn();
const mockValue = 'username.username';

describe('Input component', () => {
  it('should renders input component with props', () => {
    render(
        <Input 
            type={mockType}
            placeholder={mockPlaceholder}
            handleChange={mockChange}
        />
    );

    const input = screen.getByTestId('input-id');

    expect(input).toHaveAttribute('placeholder', mockPlaceholder);
  });

  it('should updates input value and calls handleChange function', () => {
    render(
        <Input 
            type={mockType}
            placeholder={mockPlaceholder}
            handleChange={mockChange}
        />
    );

    const input = screen.getByTestId('input-id');

    fireEvent.change(input, { target: { value: mockValue } });

    expect(mockChange).toHaveBeenCalledTimes(1);
  });
});
