import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ArticleSelectTag from './article-select-tag';

import type { ArticleTag } from '../model/types';

const meta: Meta = {
  title: 'features/ArticleSelectTag',
  component: ArticleSelectTag,
} satisfies Meta<typeof ArticleSelectTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: () => {
    const [tag, onSelectTag] = useState<ArticleTag>('all');

    return <ArticleSelectTag tag={tag} onSelectTag={onSelectTag} />;
  },
};
