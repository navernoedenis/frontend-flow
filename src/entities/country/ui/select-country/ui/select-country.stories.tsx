import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import { Country } from '../../../model/constants';
import SelectCountry from './select-country';

const meta: Meta = {
  title: 'entities/SelectCountry',
  component: SelectCountry,
  args: {
    title: '',
    isDisabled: false,
    currentCountry: Country.UKRAINE,
  },
} satisfies Meta<typeof SelectCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
