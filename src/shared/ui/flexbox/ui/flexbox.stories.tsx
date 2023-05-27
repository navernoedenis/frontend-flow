import type { Meta, StoryObj } from '@storybook/react';
import Flebox from './flexbox';

const meta: Meta = {
  title: 'shared/Flebox',
  component: Flebox,
  args: {
    alignItems: 'center',
    noShrink: false,
    tag: 'div',
    wrap: false,
  },
} satisfies Meta<typeof Flebox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: (props) => (
    <Flebox
      style={{ border: '2px dashed #66BB6A', height: '197px' }}
      {...props}
    >
      {Array.from({ length: 4 }, (_, index) => (
        <div style={{ border: '2px dashed #DCE775', padding: '5px' }}>
          {index + 1}
        </div>
      ))}
    </Flebox>
  ),
};
