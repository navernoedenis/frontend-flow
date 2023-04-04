import { useState, useEffect } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import LazyImage from './lazy-image';
import classes from './lazy-image.module.scss';

export default {
  title: 'shared/LazyImage',
  component: LazyImage,
  args: {
    originalSize: false,
  },
} as ComponentMeta<typeof LazyImage>;

const imageUrl =
  'https://www.davidson.edu/sites/default/files/styles/big_16x9/public/2019-10/Halloween-Video-ScreenGrab.jpg?h=c60cfc44&itok=6-pigwSU';

const Template: ComponentStory<typeof LazyImage> = ({ src, ...otherProps }) => {
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
};

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
