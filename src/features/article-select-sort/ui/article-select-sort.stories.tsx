import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ArticleSelectSort from './article-select-sort';

import type { ArticleSortKey, ArticleSortOrder } from '../model/types';

const meta: Meta = {
  title: 'features/ArticleSelectSort',
  component: ArticleSelectSort,
} satisfies Meta<typeof ArticleSelectSort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: () => {
    const [key, setKey] = useState<ArticleSortKey>('created');
    const [order, setOrder] = useState<ArticleSortOrder>('desc');

    return (
      <ArticleSelectSort
        sortKey={key}
        sortOrder={order}
        onSelectKey={setKey}
        onSelectOrder={setOrder}
      />
    );
  },
};
