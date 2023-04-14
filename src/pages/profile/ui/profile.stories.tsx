import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { AppStatePreloaded } from 'app/providers/store';

import {
  authStateMock,
  profileStateMock,
} from 'shared/config/tests/mocks/states';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';
import ProfilePage from './profile';

const preloadedState: AppStatePreloaded = {
  auth: authStateMock,
  profile: profileStateMock,
  networkStatus: { isOnline: true },
};

export default {
  title: 'pages/Profile',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(preloadedState)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(preloadedState)];
