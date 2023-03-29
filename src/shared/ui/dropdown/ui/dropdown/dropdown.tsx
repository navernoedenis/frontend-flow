import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import type { ReactNode } from 'react';

import { Portal } from 'shared/ui/portal';
import { classNames } from 'shared/lib/class-names';

import { calcCoords } from '../../model/utils/calc-cords';
import type { Coords } from '../../model/utils/calc-cords';

import classes from './dropdown.module.scss';

interface DropdownProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  isOpen: boolean;
  onClose: VoidFunction;
  parent: HTMLElement | null;
}

const Dropdown = ({
  children,
  className = '',
  fullWidth = false,
  isOpen,
  onClose,
  parent,
}: DropdownProps) => {
  const [coords, setCoords] = useState<Coords>({ top: 0, right: 0 });

  useEffect(() => {
    if (parent) {
      setCoords(calcCoords(parent, fullWidth));
    }
  }, [isOpen, parent, fullWidth]);

  useEffect(() => {
    const onResizeListener = throttle(() => {
      if (parent) {
        setCoords(calcCoords(parent, fullWidth));
      }
    }, 100);

    if (isOpen) {
      document.addEventListener('click', onClose);
      window.addEventListener('resize', onResizeListener);
    }
    return () => {
      document.removeEventListener('click', onClose);
      window.removeEventListener('resize', onResizeListener);
    };
  }, [isOpen, onClose, parent, fullWidth]);

  const dropdownClasses = classNames(classes.container, {
    [className]: !!className,
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={dropdownClasses} data-testid="dropdown" style={coords}>
        {children}
      </div>
    </Portal>
  );
};

export default Dropdown;
