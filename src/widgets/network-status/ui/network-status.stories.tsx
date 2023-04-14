import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppStatePreloaded } from 'app/providers/store';
import { StoreDecorator } from 'shared/config/storybook/decorators';

import NetworkStatus from './network-status';

export default {
  title: 'widgets/NetworkStatus',
  component: NetworkStatus,
} as ComponentMeta<typeof NetworkStatus>;

const preloadedState: AppStatePreloaded = {
  networkStatus: {
    isOnline: false,
  },
};

const Template: ComponentStory<typeof NetworkStatus> = () => <NetworkStatus />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator(preloadedState)];
