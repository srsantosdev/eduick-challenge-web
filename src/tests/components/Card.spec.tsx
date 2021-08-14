import React from 'react';
import { render } from '@testing-library/react';
import Card, { Course } from '../../components/Card';

describe('Card component', () => {
  it('should be able to render a card correctly', () => {
    const course: Course = {
      id: 1,
      title: 'Test title',
      stars: 3,
      lessons: 10,
      image: 'image.jpg',
    };

    const { getByText } = render(<Card course={course} />);

    expect(getByText('Test title')).toBeInTheDocument();
  });
});
