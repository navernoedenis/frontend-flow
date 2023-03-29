import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import { Country } from '../../model/constants';
import SelectCountry from './select-country';

export default {
  title: 'entities/SelectCountry',
  component: SelectCountry,
} as ComponentMeta<typeof SelectCountry>;

const Template: ComponentStory<typeof SelectCountry> = () => {
  const [country, setCountry] = useState(Country.UKRAINE);

  return (
    <div style={{ maxWidth: '240px' }}>
      <SelectCountry currentCountry={country} onSelectCountry={setCountry} />
    </div>
  );
};

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
