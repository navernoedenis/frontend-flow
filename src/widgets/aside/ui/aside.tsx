import { useReducer } from 'react';

import { LanguageSwitcher } from '@/features/language-switcher';
import { classNames } from '@/shared/lib/transforms/class-names';
import { Flexbox } from '@/shared/ui/flexbox';

import ArrowRight from './assets/arrow-right.svg';
import classes from './aside.module.scss';

function Aside() {
  const [isOpen, toggleOpen] = useReducer((prev: boolean) => !prev, false);

  const asideClasses = classNames(classes.aside, {
    [classes.collapsed]: !isOpen,
  });

  return (
    <Flexbox
      alignItems="stretch"
      className={asideClasses}
      data-testid="aside"
      direction="column"
      noShrink
      tag="aside"
    >
      <button
        className={classes.arrow}
        data-testid="arrow-button"
        onClick={toggleOpen}
        style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
      >
        <ArrowRight />
      </button>

      <Flexbox className={classes.buttons} direction="column" gap="8">
        <LanguageSwitcher />
      </Flexbox>
    </Flexbox>
  );
}

export default Aside;
