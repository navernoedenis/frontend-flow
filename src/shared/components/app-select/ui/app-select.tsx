import { useState, useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';

import { classNames } from 'shared/lib/class-names';
import { Dropdown, DropdownItem } from 'shared/components/dropdown';

import type { AppSelectOption } from '../model/types';
import classes from './app-select.module.scss';

interface AppSelectProps {
  isDisabled?: boolean;
  onSelect: (value: string) => void;
  options: AppSelectOption[];
  title?: string;
  value: string;
}

const AppSelect = ({
  isDisabled = false,
  onSelect,
  options,
  title,
  value,
}: AppSelectProps) => {
  const parent = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);

  const onOpenMenu = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (isDisabled) return;
      event.stopPropagation();
      setOpen(true);
    },
    [isDisabled],
  );

  const onCloseMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const selectClasses = classNames(classes.container, {
    [classes.disabled]: isDisabled,
  });

  return (
    <div data-testid="app-select" className={selectClasses} ref={parent}>
      {title && <h6 className={classes.title}>{title}</h6>}
      <p className={classes.value} onClick={onOpenMenu} aria-hidden>
        {value}
      </p>
      <Dropdown
        fullWidth
        isOpen={isOpen}
        onClose={onCloseMenu}
        parent={parent.current}
      >
        {options.map((option) => (
          <DropdownItem
            icon={option.icon}
            isChecked={value === option.value}
            key={`${option.value}`}
            onClick={() => onSelect(option.value)}
            title={option.title}
          />
        ))}
      </Dropdown>
    </div>
  );
};

export default AppSelect;
