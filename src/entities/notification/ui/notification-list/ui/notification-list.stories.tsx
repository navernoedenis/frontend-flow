import type { Meta, StoryObj } from '@storybook/react';
import { makeGetRequest } from '@/shared/config/storybook/make-request';
import { notificationsMock } from '../../../model/mocks';

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
