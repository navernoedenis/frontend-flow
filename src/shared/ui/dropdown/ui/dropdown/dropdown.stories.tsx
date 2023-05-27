import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';

import AutoIcon from '@/features/theme-switcher/ui/assets/auto.svg';
import MoonIcon from '@/features/theme-switcher/ui/assets/moon.svg';
import SunIcon from '@/features/theme-switcher/ui/assets/sun.svg';

import Dropdown from './dropdown';
import DropdownItem from '../dropdown-item/dropdown-item';

const meta: Meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: () => {
    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState('option 1');
    const parentRef = useRef<HTMLButtonElement | null>(null);

    function handleToggle(event: MouseEvent) {
      event.stopPropagation();
      setOpen((prev) => !prev);
    }

    function handleClose() {
      setOpen(false);
    }

    return (
      <Flexbox justifyContent="center">
        <button onClick={handleToggle} ref={parentRef}>
          <AppTypography tag="span">Checked dropdown</AppTypography>
        </button>

        <Dropdown isOpen={isOpen} onClose={handleClose} parentRef={parentRef}>
          {['option 1', 'option 2', 'option 3'].map((option) => (
            <DropdownItem
              isChecked={selected === option}
              key={option}
              onClick={() => setSelected(option)}
              title={option}
            />
          ))}
        </Dropdown>
      </Flexbox>
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [isOpen, setOpen] = useState(false);
    const parentRef = useRef<HTMLButtonElement | null>(null);

    function handleToggle(event: MouseEvent) {
      event.stopPropagation();
      setOpen((prev) => !prev);
    }

    function handleClose() {
      setOpen(false);
    }

    return (
      <Flexbox justifyContent="center">
        <button onClick={handleToggle} ref={parentRef}>
          <AppTypography tag="span">Checked dropdown</AppTypography>
        </button>

        <Dropdown isOpen={isOpen} onClose={handleClose} parentRef={parentRef}>
          {['option 1', 'option 2', 'option 3'].map((option) => (
            <DropdownItem key={option} onClick={() => {}} title={option} />
          ))}
        </Dropdown>
      </Flexbox>
    );
  },
};

export const Icon: Story = {
  render: () => {
    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState('auto');
    const parentRef = useRef<HTMLButtonElement | null>(null);

    function handleToggle(event: MouseEvent) {
      event.stopPropagation();
      setOpen((prev) => !prev);
    }

    function handleClose() {
      setOpen(false);
    }

    return (
      <Flexbox justifyContent="center">
        <button onClick={handleToggle} ref={parentRef}>
          <AppTypography tag="span">Checked dropdown</AppTypography>
        </button>

        <Dropdown isOpen={isOpen} onClose={handleClose} parentRef={parentRef}>
          {[
            { icon: AutoIcon, title: 'Auto', value: 'auto' },
            { icon: SunIcon, title: 'Light', value: 'light' },
            { icon: MoonIcon, title: 'Dark', value: 'dark' },
          ].map(({ icon: Icon, title, value }) => (
            <DropdownItem
              icon={<Icon />}
              isChecked={selected === value}
              key={title}
              onClick={() => setSelected(value)}
              title={title}
            />
          ))}
        </Dropdown>
      </Flexbox>
    );
  },
};
