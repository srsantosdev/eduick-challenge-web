import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxGroup from '../../components/CheckboxGroup';

describe('CheckboxGroup component', () => {
  it('should be able to render a checkbox group correctly', () => {
    const { getByText, getByTestId } = render(<CheckboxGroup />);

    const checkboxTeacherElement = getByTestId('checkbox-teacher');

    fireEvent.click(checkboxTeacherElement);

    expect(getByText('I’m a teacher')).toBeInTheDocument();
    expect(getByText('I’m a student')).toBeInTheDocument();
  });
});
