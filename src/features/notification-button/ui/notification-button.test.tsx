import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/providers';

import NotificationButton from './notification-button';

describe('test features/notification-button', () => {
  it('be in the document', () => {
    renderWithAll(<NotificationButton userId="1" />);
    expect(screen.getByTestId('notification-button')).toBeInTheDocument();
  });

  it('dropdown menu opened', async () => {
    renderWithAll(<NotificationButton userId="1" />);
    const button = screen.getByTestId('notification-button');
    fireEvent.click(button);
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });
});
