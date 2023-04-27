import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import AppTypography from './app-typography';

const mockText =
  'horror films have existed for more than a century. Early inspirations from before the development of film include folklore, religious beliefs and superstitions of different cultures, and the Gothic and horror literature of authors such as Edgar Allan Poe, Bram Stoker, and Mary Shelley. From origins in silent films and German Expressionism, horror only became a codified genre after the release of Dracula (1931). Many sub-genres emerged in subsequent decades, including body horror, comedy horror, slasher films, supernatural horror and psychological horror. The genre has been produced worldwide, varying in content and style between regions. Horror is particularly prominent in the cinema of Japan, Korea, Italy and Thailand, among other countries.';

export default {
  title: 'shared/AppTypography',
  component: AppTypography,
  args: {
    align: 'start',
    capitalize: false,
    capitalizeFirstLetter: false,
    children: mockText,
    error: false,
    inversed: false,
    lineClamp: 0,
    noShrink: false,
    size: 'medium',
    tag: 'p',
    uppercase: false,
    weight: 'normal',
  },
  argTypes: {
    align: {
      options: ['start', 'center', 'right'],
      control: { type: 'radio' },
    },
    size: {
      options: ['huge', 'large', 'medium', 'small'],
      control: { type: 'radio' },
    },
    tag: {
      options: ['h1', 'h2', 'p', 'span'],
      control: { type: 'radio' },
    },
    weight: {
      options: ['heavy', 'bold', 'normal'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof AppTypography>;

const Template: ComponentStory<typeof AppTypography> = (args) => (
  <AppTypography {...args}>{mockText}</AppTypography>
);

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
