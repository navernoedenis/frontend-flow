import { useReducer } from 'react';
import { classNames } from 'shared/lib/class-names';
import { ThemeSwitcher } from 'shared/components/theme-switcher';
import { LanguageSwitcher } from 'shared/components/language-switcher';

import classes from './sidebar.module.scss';

const Sidebar = () => {
  const [isOpen, toggleOpen] = useReducer((prev: boolean) => !prev, true);

  const sidebarClasses = classNames(classes.sidebar, {
    [classes.collapsed]: !isOpen,
  });

  return (
    <div className={sidebarClasses}>
      <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
      <div className={classes.buttons}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
