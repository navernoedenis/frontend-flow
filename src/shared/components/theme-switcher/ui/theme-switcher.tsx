import { type FC } from 'react';
import { useTheme } from 'shared/hooks/use-theme';
import { classNames } from 'shared/lib/class-names';

import classes from './theme-switcher.module.scss';

import SunIcon from '../assets/sun-icon.svg';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { toggleTheme } = useTheme();

  const buttonClasses = classNames(classes.button, {
    [className]: Boolean(className),
  });

  return (
    <button
      aria-hidden="true"
      className={buttonClasses}
      data-testid="theme-switcher"
      onClick={toggleTheme}
    >
      <SunIcon />
    </button>
  );
};

export default ThemeSwitcher;
