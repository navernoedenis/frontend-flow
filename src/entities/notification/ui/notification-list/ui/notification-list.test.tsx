import { screen, waitFor } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/render-with-all';
import { makeResponseError } from '@/shared/config/jest/server';

import NotificationList from './notification-list';

describe('test entities/notification-list', () => {
  it('be in the document', () => {
    renderWithAll(<NotificationList userId="1" />);
    expect(screen.getByTestId('notification-list')).toBeInTheDocument();
  });

  it('show skeletons on loading', () => {
    renderWithAll(<NotificationList userId="1" />);
    const skeletons = screen.queryAllByTestId('notification-item-skeleton');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('show notification-items', async () => {
    renderWithAll(<NotificationList userId="1" />);
    await waitFor(() => {
      const notificationItems = screen.queryAllByTestId('notification-item');
      expect(notificationItems.length).toBeGreaterThan(0);
    });
  });

  it('show error', async () => {
    makeResponseError('/notifications');
    renderWithAll(<NotificationList userId="1" />);

    await waitFor(() => {
      expect(screen.getByTestId('notification-list-error')).toBeInTheDocument();
    });
  });
});
