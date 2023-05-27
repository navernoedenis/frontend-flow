import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import LazyImage from './lazy-image';
import classes from './lazy-image.module.scss';

const meta: Meta = {
  title: 'shared/LazyImage',
  component: LazyImage,
  args: {
    originalSize: false,
  },
} satisfies Meta<typeof LazyImage>;

export default meta;
type Story = StoryObj<typeof meta>;

const imageUrl =
  'https://www.davidson.edu/sites/default/files/styles/big_16x9/public/2019-10/Halloween-Video-ScreenGrab.jpg?h=c60cfc44&itok=6-pigwSU';

export const Component: Story = {
  render: ({ src, ...otherProps }) => {
    const [image, setImage] = useState('');

    useEffect(() => {
      setTimeout(() => setImage(imageUrl), 1500);
    }, []);

    return (
      <LazyImage
        className={classes.storybookContainer}
        src={image}
        {...otherProps}
      />
    );
  },
};
