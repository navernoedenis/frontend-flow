import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppStoreParams } from 'app/providers/store';
import { profileReducer } from 'features/edit-profile';

import { profileMock } from 'shared/config/tests/mocks/entities';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';
import ProfilePage from './profile';

const params: AppStoreParams = {
  preloadedState: {
    profile: { isLoading: false, error: '', data: profileMock },
  },
  lazyReducers: { profile: profileReducer },
};

export default {
  title: 'pages/Profile',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(params)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(params)];
