import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

import { AppStatePreloaded } from '@/app/providers/store';
import { articleMock } from '@/entities/article';
import { articlesPageStateMock } from '../model/mocks';

import ArticlesPage from './articles';

const preloadedState: AppStatePreloaded = {
  articles: {
    ...articlesPageStateMock,
    ids: [articleMock.id],
    entities: { [articleMock.id]: articleMock },
  },
};

const meta: Meta = {
  title: 'pages/Articles',
  component: ArticlesPage,
  decorators: [StoreDecorator(preloadedState)],
  render: () => <ArticlesPage />,
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
