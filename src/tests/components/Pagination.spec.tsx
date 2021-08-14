import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../../components/Pagination';

describe('Pagination component', () => {
  it('should be able to render a pagination correctly', () => {
    const onChangePage = jest.fn();

    const { getByTestId } = render(
      <Pagination perPage={6} total={24} onChangePage={onChangePage} />,
    );

    const itemPage1 = getByTestId('page-1');

    fireEvent.click(itemPage1);

    expect(getByTestId('pagination')).toBeInTheDocument();
    expect(onChangePage).toHaveBeenCalledWith(1);
  });
});
