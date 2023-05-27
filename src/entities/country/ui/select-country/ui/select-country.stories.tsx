import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '../../../model/constants';
import SelectCountry from './select-country';

const meta: Meta = {
  title: 'entities/country/SelectCountry',
  component: SelectCountry,
  args: {
    title: '',
    isDisabled: false,
    currentCountry: Country.UKRAINE,
  },
} satisfies Meta<typeof SelectCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
