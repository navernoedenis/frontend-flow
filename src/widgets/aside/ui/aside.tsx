import { useReducer } from 'react';
import { classNames } from 'shared/lib/class-names';
import { LanguageSwitcher } from 'shared/ui/language-switcher';

import ArrowRight from './assets/arrow-right.svg';
import classes from './aside.module.scss';

function Aside() {
  const [isOpen, toggleOpen] = useReducer((prev: boolean) => !prev, false);

  const asideClasses = classNames(classes.aside, {
    [classes.collapsed]: !isOpen,
  });

  return (
    <aside className={asideClasses} data-testid="aside">
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
    </aside>
  );
}

export default Aside;
