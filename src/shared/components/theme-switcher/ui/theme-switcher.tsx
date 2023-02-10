import { type FC } from 'react';
import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/class-names';

import DarkIcon from '../assets/dark-icon.svg';
import LightIcon from '../assets/light-icon.svg';

import classes from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  const buttonClasses = classNames(classes.button, {
    [className]: Boolean(className),
  });

  return (
    <div className={buttonClasses} onClick={toggleTheme}>
      {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </div>
  );
};

export default ThemeSwitcher;
