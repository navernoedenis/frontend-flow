import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppTypography, Flexbox } from 'shared/ui';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import AutoIcon from 'shared/ui/theme-switcher/ui/assets/auto.svg';
import MoonIcon from 'shared/ui/theme-switcher/ui/assets/moon.svg';
import SunIcon from 'shared/ui/theme-switcher/ui/assets/sun.svg';

import Dropdown from './dropdown';
import DropdownItem from '../dropdown-item/dropdown-item';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => {
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
        <AppTypography tag="span">Default dropdown</AppTypography>
      </button>

      <Dropdown isOpen={isOpen} onClose={handleClose} parentRef={parentRef}>
        <DropdownItem onClick={() => {}} title="option 1" />
        <DropdownItem onClick={() => {}} title="option 2" />
        <DropdownItem onClick={() => {}} title="option 3" />
      </Dropdown>
    </Flexbox>
  );
};

const Checked: ComponentStory<typeof Dropdown> = () => {
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
        <DropdownItem
          isChecked={selected === 'option 1'}
          onClick={() => setSelected('option 1')}
          title="option 1"
        />
        <DropdownItem
          isChecked={selected === 'option 2'}
          onClick={() => setSelected('option 2')}
          title="option 2"
        />
        <DropdownItem
          isChecked={selected === 'option 3'}
          onClick={() => setSelected('option 3')}
          title="option 3"
        />
      </Dropdown>
    </Flexbox>
  );
};
const Icon: ComponentStory<typeof Dropdown> = () => {
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
        <DropdownItem
          icon={<AutoIcon />}
          isChecked={selected === 'auto'}
          onClick={() => setSelected('auto')}
          title="Auto"
        />
        <DropdownItem
          icon={<SunIcon />}
          isChecked={selected === 'light'}
          onClick={() => setSelected('light')}
          title="Light"
        />
        <DropdownItem
          icon={<MoonIcon />}
          isChecked={selected === 'dark'}
          onClick={() => setSelected('dark')}
          title="Dark"
        />
      </Dropdown>
    </Flexbox>
  );
};

export const Light = Template.bind({});
export const LightChecked = Checked.bind({});
export const LightIcon = Icon.bind({});

export const Dark = Template.bind({});
export const DarkChecked = Checked.bind({});
export const DarkIcon = Icon.bind({});
Dark.decorators = [ThemeDecorator('dark')];
DarkChecked.decorators = [ThemeDecorator('dark')];
DarkIcon.decorators = [ThemeDecorator('dark')];
