import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from '../../components/Checkbox';

describe('Checkbox component', () => {
  it('should be able to render a checkbox correctly', () => {
    const { getByText } = render(<Checkbox text="I'm a teacher" />);

    expect(getByText("I'm a teacher")).toBeInTheDocument();
  });

  it('should be able to render a select checkbod correctly', () => {
    const { getByTestId } = render(<Checkbox text="I'm a teacher" checked />);

    expect(getByTestId('checkbox-checked')).toBeInTheDocument();
  });
});
