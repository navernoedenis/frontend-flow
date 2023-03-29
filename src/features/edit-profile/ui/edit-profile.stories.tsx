import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { AppStatePreloaded } from 'app/providers/store';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { profileMock } from 'shared/config/tests/mocks/entities';
import EditProfile from './edit-profile';

const statePreloaded: AppStatePreloaded = {
  profile: { isLoading: false, error: '', data: profileMock },
};

export default {
  title: 'features/EditProfile',
  component: EditProfile,
} as ComponentMeta<typeof EditProfile>;

const Template: ComponentStory<typeof EditProfile> = () => <EditProfile />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(statePreloaded)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(statePreloaded)];
