import { useReducer } from 'react';

import { AppButton } from 'shared/components/app-button';
import { LanguageSwitcher } from 'shared/components/language-switcher';
import { ThemeSwitcher } from 'shared/components/theme-switcher';

import { classNames } from 'shared/lib/class-names';
import classes from './sidebar.module.scss';

function Sidebar() {
  const [isOpen, toggleOpen] = useReducer((prev: boolean) => !prev, true);

  const sidebarClasses = classNames(classes.sidebar, {
    [classes.collapsed]: !isOpen,
  });

  return (
    <div className={sidebarClasses} data-testid="sidebar">
      <AppButton onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</AppButton>
      <div className={classes.buttons}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Sidebar;
