import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/render-with-all';
import { notificationMock } from '../../../model/mocks';

import NotificatitonItem from './notification-item';

describe('test entities/notification-item', () => {
  it('be in the document', () => {
    renderWithAll(<NotificatitonItem data={notificationMock} />);
    expect(screen.getByTestId('notification-item')).toBeInTheDocument();
  });

  it('wrapper in link tag', () => {
    renderWithAll(<NotificatitonItem data={notificationMock} />);
    expect(screen.getByTestId('notification-item-link')).toBeInTheDocument();
  });

  it('not wrapper in link tag', () => {
    const data = { ...notificationMock, link: undefined };
    renderWithAll(<NotificatitonItem data={data} />);
    expect(
      screen.queryByTestId('notification-item-link'),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('notification-item')).toBeInTheDocument();
  });
});
