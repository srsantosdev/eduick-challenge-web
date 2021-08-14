import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../../components/Modal';

describe('Modal component', () => {
  it('should be able to render a modal correctly', () => {
    const { getByTestId } = render(<Modal isOpen />);

    expect(getByTestId('modal-landing')).toBeInTheDocument();
  });

  it('should be able to call the function to close modal when click the button', () => {
    const setIsOpen = jest.fn();

    const { getByTestId } = render(<Modal isOpen setIsOpen={setIsOpen} />);

    const buttonCloseModal = getByTestId('close-modal');

    fireEvent.click(buttonCloseModal);

    expect(setIsOpen).toHaveBeenCalled();
  });
});
