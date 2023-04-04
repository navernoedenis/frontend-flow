import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { AppStatePreloaded } from 'app/providers/store';
import { articleMock } from 'shared/config/tests/mocks/entities';
import ArticlesPage from './articles';

export default {
  title: 'pages/Articles',
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const preloadedState: AppStatePreloaded = {
  articles: {
    isLoading: false,
    error: '',
    entities: { [articleMock.id]: articleMock },
    ids: [articleMock.id],
    page: 1,
    limit: 1,
    hasMore: false,
  },
};

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(preloadedState)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(preloadedState)];
