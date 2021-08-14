import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from '../../components/InputField';

describe('Input component', () => {
  it('should be able to render a input correctly', () => {
    const { getByText } = render(
      <InputField name="username" label="Username" />,
    );

    expect(getByText('Username')).toBeInTheDocument();
  });

  it('should be able to render a input to insert passwords', () => {
    const { getByText, getByTestId } = render(
      <InputField name="password" label="Password" type="password" />,
    );

    const buttonVisiblePassword = getByTestId('eye-button-password');

    expect(getByText('Password')).toBeInTheDocument();
    expect(buttonVisiblePassword).toBeInTheDocument();
  });

  it('should be able to render a input with visible password', () => {
    const { getByTestId } = render(
      <InputField name="password" label="Password" type="password" />,
    );

    const buttonVisiblePassword = getByTestId('eye-button-password');

    fireEvent.click(buttonVisiblePassword);

    const iconVisiblePassword = getByTestId('password-visible');

    expect(buttonVisiblePassword).toBeInTheDocument();
    expect(iconVisiblePassword).toBeInTheDocument();
  });
});
