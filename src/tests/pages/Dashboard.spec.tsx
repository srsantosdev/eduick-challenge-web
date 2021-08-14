import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';

import { api } from '../../services/api';
import Dashboard from '../../pages/dashboard';

const apiMock = new AxiosMock(api);

describe('Dashboard page', () => {
  it('should be able to render a dashboard page correctly', async () => {
    apiMock.onGet('/courses').reply(200, [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80',
        title: 'Master English: Improve Your Speaking',
        stars: 5,
        lessons: 10,
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80',
        title: 'Master English: Improve Your Speaking',
        stars: 3,
        lessons: 25,
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80',
        title: 'Master English: Improve Your Speaking',
        stars: 3,
        lessons: 12,
      },
    ]);

    const { getByTestId } = render(<Dashboard />);

    await waitFor(() => getByTestId('dashboard-page'));

    expect(getByTestId('dashboard-page')).toBeInTheDocument();
  });

  it('should be able to render a dashboard with menu opened', async () => {
    apiMock.onGet('/courses').reply(200, [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80',
        title: 'Master English: Improve Your Speaking',
        stars: 5,
        lessons: 10,
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80',
        title: 'Master English: Improve Your Speaking',
        stars: 3,
        lessons: 25,
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80',
        title: 'Master English: Improve Your Speaking',
        stars: 3,
        lessons: 12,
      },
    ]);

    const { getByTestId } = render(<Dashboard />);

    const mobileMenuButton = getByTestId('mobile-menu-button');

    fireEvent.click(mobileMenuButton);

    await waitFor(() => getByTestId('mobile-menu-component'));

    expect(getByTestId('mobile-menu-component')).toBeInTheDocument();
  });
});
