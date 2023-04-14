import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppStatePreloaded } from 'app/providers/store';
import { articleMock } from 'shared/config/tests/mocks/entities';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import ArticlePage from './article';

export default {
  title: 'pages/Article',
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>;

const preloadedState: AppStatePreloaded = {
  article: { isLoading: false, error: '', data: articleMock },
};

const Template: ComponentStory<typeof ArticlePage> = () => <ArticlePage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(preloadedState)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(preloadedState)];
