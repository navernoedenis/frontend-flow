import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { FC, MouseEvent } from 'react';

import { classNames } from 'shared/lib/transforms/class-names';
import { Dropdown, DropdownItem } from 'shared/ui/dropdown';
import { useTheme } from 'shared/hooks';

import classes from './theme-switcher.module.scss';

import AutoIcon from './assets/auto.svg';
import MoonIcon from './assets/moon.svg';
import SunIcon from './assets/sun.svg';

interface ThemeMenuProps {
  className?: string;
  isInversed?: boolean;
}

const ThemeSwitcher: FC<ThemeMenuProps> = ({
  className = '',
  isInversed = false,
}) => {
  const { t } = useTranslation('shared.theme-switcher');
  const { theme, setTheme } = useTheme();

  const [isMenuOpened, setMenuOpened] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const buttonClasses = classNames(classes.button, {
    [className]: Boolean(className),
    [classes.inversed]: isInversed,
  });

  const onMenuToggle = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setMenuOpened((prev) => !prev);
  }, []);

  const onMenuClose = useCallback(() => {
    setMenuOpened(false);
  }, []);

  return (
    <>
      <button
        aria-hidden
        className={buttonClasses}
        data-testid="theme-menu"
        onClick={onMenuToggle}
        ref={buttonRef}
      >
        {theme === 'auto' && <AutoIcon />}
        {theme === 'light' && <SunIcon />}
        {theme === 'dark' && <MoonIcon />}
      </button>

      <Dropdown
        className={classes.dropdown}
        isOpen={isMenuOpened}
        onClose={onMenuClose}
        parent={buttonRef.current}
      >
        <DropdownItem
          icon={<AutoIcon />}
          isChecked={theme === 'auto'}
          onClick={() => setTheme('auto')}
          title={t('auto')}
        />
        <DropdownItem
          icon={<SunIcon />}
          isChecked={theme === 'light'}
          onClick={() => setTheme('light')}
          title={t('light')}
        />
        <DropdownItem
          icon={<MoonIcon />}
          isChecked={theme === 'dark'}
          onClick={() => setTheme('dark')}
          title={t('dark')}
        />
      </Dropdown>
    </>
  );
};

export default ThemeSwitcher;
