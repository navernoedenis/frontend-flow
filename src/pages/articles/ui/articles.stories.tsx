import type { Meta, StoryObj } from '@storybook/react';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { AppStatePreloaded } from 'app/providers/store';
import { articleMock } from 'shared/config/tests/mocks/entities';
import { articlesStateMock } from 'shared/config/tests/mocks/states';

import ArticlesPage from './articles';

const preloadedState: AppStatePreloaded = {
  articles: {
    ...articlesStateMock,
    ids: [articleMock.id],
    entities: { [articleMock.id]: articleMock },
  },
};

const meta: Meta = {
  title: 'pages/Articles',
  component: ArticlesPage,
  decorators: [StoreDecorator(preloadedState)],
  render: () => (
    <div className="app-page">
      <ArticlesPage />
    </div>
  ),
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
