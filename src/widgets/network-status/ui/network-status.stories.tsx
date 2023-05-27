import type { Meta, StoryObj } from '@storybook/react';
import { AppStatePreloaded } from '@/app/providers/store';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

import NetworkStatus from './network-status';

const preloadedState: AppStatePreloaded = {
  networkStatus: {
    isOnline: false,
  },
};

const meta: Meta = {
  title: 'widgets/NetworkStatus',
  decorators: [StoreDecorator(preloadedState)],
  component: NetworkStatus,
} satisfies Meta<typeof NetworkStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
