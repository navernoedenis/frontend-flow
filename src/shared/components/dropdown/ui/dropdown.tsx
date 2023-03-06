import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Portal } from 'shared/components/portal';
import classes from './dropdown.module.scss';

import { calcCoords } from '../model/utils/calc-cords';
import type { Coords } from '../model/utils/calc-cords';

interface DropdownProps {
  children: ReactNode;
  isOpen: boolean;
  onCloseMenu: VoidFunction;
  parent: HTMLElement | null;
}

const Dropdown = ({ children, isOpen, onCloseMenu, parent }: DropdownProps) => {
  const [coords, setCoords] = useState<Coords>({ top: 0, right: 0 });

  useEffect(() => {
    if (!parent) return;
    const cords = calcCoords(parent);
    cords.top += 4;

    setCoords(cords);
  }, [parent]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', onCloseMenu);
    }
    return () => {
      document.removeEventListener('click', onCloseMenu);
    };
  }, [isOpen, onCloseMenu]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classes.container}
        style={{ top: `${coords.top}px`, right: `${coords.right}px` }}
      >
        {children}
      </div>
    </Portal>
  );
};

export default Dropdown;
