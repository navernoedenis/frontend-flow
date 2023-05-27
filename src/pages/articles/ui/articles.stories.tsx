import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

import { AppStatePreloaded } from '@/app/providers/store';
import { articleMock } from '@/shared/config/jest/mocks/entities';
import { articlesStateMock } from '@/shared/config/jest/mocks/states';

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
  render: () => <ArticlesPage />,
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
