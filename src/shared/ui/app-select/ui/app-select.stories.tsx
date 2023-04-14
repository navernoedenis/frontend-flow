import { useState, useMemo } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import AppSelect from './app-select';

export default {
  title: 'shared/AppSelect',
  component: AppSelect,
  args: {
    title: '',
    isDisabled: false,
  },
} as ComponentMeta<typeof AppSelect>;

const Template: ComponentStory<typeof AppSelect> = ({
  onSelect,
  options,
  value: componentValue,
  ...otherProps
}) => {
  const [value, setValue] = useState('item 1');

  return (
    <div style={{ display: 'inline-block' }}>
      <AppSelect
        onSelect={setValue}
        options={[
          { title: 'item 1', value: 'item 1' },
          { title: 'item 2', value: 'item 2' },
          { title: 'item 3', value: 'item 3' },
          { title: 'item 4', value: 'item 4' },
        ]}
        title="Select item"
        value={value}
        {...otherProps}
      />
    </div>
  );
};

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
