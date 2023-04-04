import { useState, useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';

import { classNames } from 'shared/lib/class-names';
import { AppTypography } from 'shared/ui/app-typography';
import { Dropdown, DropdownItem } from 'shared/ui/dropdown';

import type { AppSelectOption } from '../model/types';
import classes from './app-select.module.scss';

interface AppSelectProps {
  className?: string;
  isDisabled?: boolean;
  onSelect: (value: string) => void;
  options: AppSelectOption[];
  title?: string;
  value: string;
}

const AppSelect = ({
  className = '',
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
    [classes.isDisabled]: isDisabled,
    [classes.isOpen]: isOpen,
    [className]: !!className,
  });

  const valueClasses = classNames(classes.value, {
    'app-transition': true,
  });

  return (
    <div className={selectClasses} ref={parent} data-testid="app-select">
      {title && (
        <AppTypography
          capitalizeFirstLetter
          className={classes.title}
          tag="h6"
          weight="bold"
        >
          {title}
        </AppTypography>
      )}

      <div onClick={onOpenMenu}>
        <AppTypography
          aria-hidden
          capitalizeFirstLetter
          className={valueClasses}
        >
          {value}
        </AppTypography>
      </div>

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
