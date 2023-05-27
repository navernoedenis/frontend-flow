import type { Meta, StoryObj } from '@storybook/react';
import { notificationsMock } from '@/shared/config/jest/mocks/entities';
import { makeGetRequest } from '@/shared/config/storybook/utils';

import { Flexbox } from '@/shared/ui/flexbox';
import NotificationButton from './notification-button';

const meta: Meta = {
  title: 'features/NotificationButton',
  component: NotificationButton,
  parameters: {
    mockData: [
      makeGetRequest(
        '/notifications?userId=1&_order=desc&_sort=id',
        notificationsMock,
      ),
    ],
  },
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: () => (
    <Flexbox justifyContent="end">
      <NotificationButton userId="1" />
    </Flexbox>
  ),
};
