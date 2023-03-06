import { useReducer } from 'react';
import { classNames } from 'shared/lib/class-names';
import { LanguageSwitcher } from 'shared/components/language-switcher';

import ArrowRight from './assets/arrow-right.svg';
import classes from './sidebar.module.scss';

function Sidebar() {
  const [isOpen, toggleOpen] = useReducer((prev: boolean) => !prev, false);

  const sidebarClasses = classNames(classes.sidebar, {
    [classes.collapsed]: !isOpen,
  });

  return (
    <div className={sidebarClasses} data-testid="sidebar">
      <button
        className={classes.arrow}
        data-testid="arrow-button"
        onClick={toggleOpen}
        style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
      >
        <ArrowRight />
      </button>

      <div className={classes.buttons}>
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Sidebar;
