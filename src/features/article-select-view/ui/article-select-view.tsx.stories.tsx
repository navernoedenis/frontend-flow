import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ArticleSelectView from './article-select-view';

import { ArticleView } from '../model/constants';

const meta: Meta = {
  title: 'features/ArticleSelectView',
  component: ArticleSelectView,
} satisfies Meta<typeof ArticleSelectView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: () => {
    const [view, setView] = useState<ArticleView>(ArticleView.NORMAL);

    return <ArticleSelectView view={view} onSelectView={setView} />;
  },
};
