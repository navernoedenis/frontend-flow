import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { AppStatePreloaded } from 'app/providers/store';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import {
  authStateMock,
  profileStateMock,
} from 'shared/config/tests/mocks/states';

import EditProfile from './edit-profile';

const preloadedState: AppStatePreloaded = {
  auth: authStateMock,
  profile: profileStateMock,
};

export default {
  title: 'features/EditProfile',
  component: EditProfile,
  args: {
    showEditableButtons: true,
  },
} as ComponentMeta<typeof EditProfile>;

const Template: ComponentStory<typeof EditProfile> = (props) => (
  <EditProfile {...props} />
);

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(preloadedState)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(preloadedState)];
