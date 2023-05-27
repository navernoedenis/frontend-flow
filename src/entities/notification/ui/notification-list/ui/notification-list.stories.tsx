import type { Meta, StoryObj } from '@storybook/react';
import { notificationsMock } from '@/shared/config/jest/mocks/entities';
import { makeGetRequest } from '@/shared/config/storybook/utils';

import NotificationList from './notification-list';

const meta: Meta = {
  title: 'entities/notification/NotificationList',
  component: NotificationList,
  parameters: {
    mockData: [
      makeGetRequest(
        '/notifications?userId=1&_order=desc&_sort=id',
        notificationsMock,
      ),
    ],
  },
  args: {
    userId: '1',
  },
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
