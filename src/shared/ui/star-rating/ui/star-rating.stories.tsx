import type { Meta, StoryObj } from '@storybook/react';
import StarRating from './star-rating';

const meta: Meta = {
  title: 'shared/StarRating',
  component: StarRating,
  args: {
    align: 'start',
    stars: 5,
    rating: 2,
  },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
