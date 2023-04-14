import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { AppStatePreloaded } from 'app/providers/store';

import { articleMock } from 'shared/config/tests/mocks/entities';
import { articlesStateMock } from 'shared/config/tests/mocks/states';

import ArticlesPage from './articles';

export default {
  title: 'pages/Articles',
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const preloadedState: AppStatePreloaded = {
  articles: {
    ...articlesStateMock,
    ids: [articleMock.id],
    entities: { [articleMock.id]: articleMock },
  },
};

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(preloadedState)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(preloadedState)];
