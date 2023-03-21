import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { AppStoreParams } from 'app/providers/store';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { profileMock } from 'shared/config/tests/mocks/entities';
import { profileReducer } from '../model/slice';
import EditProfile from './edit-profile';

const params: AppStoreParams = {
  preloadedState: {
    profile: { isLoading: false, error: '', data: profileMock },
  },
  lazyReducers: { profile: profileReducer },
};

export default {
  title: 'features/EditProfile',
  component: EditProfile,
} as ComponentMeta<typeof EditProfile>;

const Template: ComponentStory<typeof EditProfile> = () => <EditProfile />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(params)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(params)];
