import type { Meta, StoryObj } from '@storybook/react';
import RatingCard from './rating-card';
import RatingCardSkeleton from './rating-card.skeleton';

const meta: Meta = {
  title: 'entities/rating/RatingCard',
  component: RatingCard,
  args: {
    title: 'Rating card title',
    rating: 2,
    stars: 5,
  },
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};

export const Skeleton: Story = {
  render: () => <RatingCardSkeleton stars={5} />,
};
