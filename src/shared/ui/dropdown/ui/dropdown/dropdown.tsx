import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import { Portal } from 'shared/ui/portal';
import { classNames } from 'shared/lib/transforms/class-names';
import { useThrottle } from 'shared/hooks';

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

  const onResizeListener = useThrottle(() => {
    if (parent) {
      setCoords(calcCoords(parent, fullWidth));
    }
  }, 150);

  useEffect(() => {
    if (parent) {
      setCoords(calcCoords(parent, fullWidth));
    }
  }, [isOpen, parent, fullWidth]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('resize', onResizeListener);
      document.addEventListener('click', onClose);
    }
    return () => {
      window.removeEventListener('resize', onResizeListener);
      document.removeEventListener('click', onClose);
    };
  }, [isOpen, onClose, onResizeListener]);

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
