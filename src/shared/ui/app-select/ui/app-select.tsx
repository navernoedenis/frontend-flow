import { useState, useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';

import { AppTypography } from '@/shared/ui/app-typography';
import { Dropdown, DropdownItem } from '@/shared/ui/dropdown';
import { classNames } from '@/shared/lib/class-names';

import type { AppSelectOption } from '../model/types';
import classes from './app-select.module.scss';

interface AppSelectProps<T extends string> {
  className?: string;
  isDisabled?: boolean;
  onSelect: (value: T) => void;
  options: Array<AppSelectOption<T>>;
  title?: string;
  value: string;
}

const AppSelect = <T extends string>({
  className = '',
  isDisabled = false,
  onSelect,
  options,
  title,
  value,
  ...otherProps
}: AppSelectProps<T>) => {
  const appSelectRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);

  const onOpenMenu = useCallback(
    (event: MouseEvent) => {
      if (isDisabled) return;
      event.stopPropagation();
      setOpen((prev) => !prev);
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

  return (
    <div
      className={selectClasses}
      data-testid="app-select"
      ref={appSelectRef}
      {...otherProps}
    >
      {title && (
        <AppTypography
          capitalizeFirstLetter
          className={classes.title}
          data-testid="app-select-title"
          tag="h6"
          weight="bold"
        >
          {title}
        </AppTypography>
      )}

      <div data-testid="app-select-value-wrapper" onClick={onOpenMenu}>
        <AppTypography
          aria-hidden
          capitalizeFirstLetter
          className={classes.value}
          data-testid="app-select-value"
        >
          {value}
        </AppTypography>
      </div>

      <Dropdown
        fullWidth
        isOpen={isOpen}
        onClose={onCloseMenu}
        parentRef={appSelectRef}
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
