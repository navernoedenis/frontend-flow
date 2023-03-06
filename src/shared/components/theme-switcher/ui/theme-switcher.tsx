import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

import { classNames } from 'shared/lib/class-names';
import { Dropdown } from 'shared/components/dropdown';
import { useTheme } from 'shared/hooks';

import classes from './theme-switcher.module.scss';

import AutoIcon from '../assets/auto.svg';
import CheckIcon from '../assets/check.svg';
import MoonIcon from '../assets/moon.svg';
import SunIcon from '../assets/sun.svg';

interface ThemeMenuProps {
  className?: string;
  isInversed?: boolean;
}

const ThemeSwitcher: FC<ThemeMenuProps> = ({
  className = '',
  isInversed = false,
}) => {
  const { theme, setTheme } = useTheme();

  const { t } = useTranslation('theme-switcher');
  const [isMenuOpened, setMenuOpened] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const buttonClasses = classNames(classes.button, {
    [className]: Boolean(className),
    [classes.inversed]: isInversed,
  });

  const onMenuToggle = useCallback(() => {
    setMenuOpened((prev) => !prev);
  }, []);

  const onMenuClose = useCallback(() => {
    setMenuOpened(false);
  }, []);

  return (
    <>
      <button
        aria-hidden="true"
        className={buttonClasses}
        data-testid="theme-menu"
        onClick={(event) => {
          event.stopPropagation();
          onMenuToggle();
        }}
        ref={buttonRef}
      >
        {theme === 'auto' && <AutoIcon />}
        {theme === 'light' && <SunIcon />}
        {theme === 'dark' && <MoonIcon />}
      </button>

      <Dropdown
        isOpen={isMenuOpened}
        onCloseMenu={onMenuClose}
        parent={buttonRef.current}
      >
        <div className={classes.menu}>
          <button
            className={classes.menuButton}
            onClick={() => setTheme('auto')}
          >
            <AutoIcon />
            <span className={classes.menuText}>{t('auto')}</span>
            {theme === 'auto' && <CheckIcon className={classes.menuCheck} />}
          </button>

          <button
            className={classes.menuButton}
            onClick={() => setTheme('light')}
          >
            <SunIcon />
            <span className={classes.menuText}>{t('light')}</span>
            {theme === 'light' && <CheckIcon className={classes.menuCheck} />}
          </button>

          <button
            className={classes.menuButton}
            onClick={() => setTheme('dark')}
          >
            <MoonIcon />
            <span className={classes.menuText}>{t('dark')}</span>
            {theme === 'dark' && <CheckIcon className={classes.menuCheck} />}
          </button>
        </div>
      </Dropdown>
    </>
  );
};

export default ThemeSwitcher;
