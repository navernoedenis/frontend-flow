import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppStoreParams } from 'app/providers/store';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { Country } from 'shared/constants/country';
import { profileReducer } from 'entities/profile';
import type { Profile } from 'entities/profile';

import ProfilePage from './profile';

const profile: Profile = {
  age: 62,
  avatar:
    'https://short-biography.com/wp-content/uploads/carl-sagan/Carl-Edward-Sagan.jpg',
  country: Country.USA,
  name: 'Carl Sagan',
  position: 'Scient',
};

const params: AppStoreParams = {
  lazyReducers: { profile: profileReducer },
  preloadedState: { profile: { isLoading: false, error: '', data: profile } },
};

export default {
  title: 'pages/Profile',
  component: ProfilePage,
  parameters: {
    mockData: [
      {
        url: `${__HOST__}/profile`,
        method: 'GET',
        status: 200,
        response: profile,
      },
    ],
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(params)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(params)];
