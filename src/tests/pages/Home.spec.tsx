import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home page', () => {
  it('should be able to render a home page correctly', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('home-page')).toBeInTheDocument();
  });

  it('should be able to show sign in modal', () => {
    const { getByTestId } = render(<Home />);

    const buttonOpenModalSignIn = getByTestId('button-open-modal-signin');

    fireEvent.click(buttonOpenModalSignIn);

    expect(getByTestId('modal-signin')).toBeInTheDocument();
  });

  it('should be able to show mobile menu', () => {
    const { getByTestId } = render(<Home />);

    const hamburguerButton = getByTestId('hamburguer-button');

    fireEvent.click(hamburguerButton);

    expect(getByTestId('mobile-menu')).toBeInTheDocument();
  });
});
