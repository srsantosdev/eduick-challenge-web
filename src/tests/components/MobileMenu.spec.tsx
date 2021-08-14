import React from 'react';
import { render } from '@testing-library/react';
import MobileMenu from '../../components/MobileMenu';

describe('MobileMenu component', () => {
  it('should be able to render a mobile menu correctly', () => {
    const { getByText } = render(<MobileMenu isOpen />);

    expect(getByText('Change to teacher mode')).toBeInTheDocument();
  });
});
