import type { Meta, StoryObj } from '@storybook/react';
import { notificationMock } from '@/shared/config/jest/mocks/entities';

import NotificationItem from './notification-item';
import NotificationItemSkeleton from './notification-item.skeleton';

const meta: Meta = {
  title: 'entities/notification/NotificationItem',
  component: NotificationItem,
  args: {
    data: notificationMock,
  },
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};

export const Skeleton: Story = {
  render: () => <NotificationItemSkeleton />,
};
