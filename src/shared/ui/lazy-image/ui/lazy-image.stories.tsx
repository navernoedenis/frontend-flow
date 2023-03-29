import { useState, useEffect } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import LazyImage from './lazy-image';
import classes from './lazy-image.module.scss';

export default {
  title: 'shared/LazyImage',
  component: LazyImage,
} as ComponentMeta<typeof LazyImage>;

const imageUrl = 'https://startefacts.com/upload//upload/news/211646027831.jpg';

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
