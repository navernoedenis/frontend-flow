import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { AppStoreParams } from 'app/providers/store';

import type { Profile } from '../../model/types';
import { profileReducer } from '../../model/slice';

import { Country } from 'shared/constants/country';
import ProfileCard from './profile-card';

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
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = () => <ProfileCard />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(params)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(params)];
