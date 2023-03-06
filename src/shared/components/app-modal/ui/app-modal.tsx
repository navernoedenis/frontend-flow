import { useState, useRef, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

import { Portal } from 'shared/components/portal';
import { classNames } from 'shared/lib/class-names';

import CrossIcon from './assets/cross.svg';
import classes from './app-modal.module.scss';

interface AppModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: VoidFunction;
}

const ANIMATION_DURATION = 300;

const AppModal = (props: AppModalProps) => {
  const { children, isOpen, onClose } = props;

  const closingTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const [isClosing, setClosing] = useState(false);

  const handleClosing = useCallback(() => {
    setClosing(true);

    closingTimerRef.current = setTimeout(() => {
      setClosing(false);
      onClose();
    }, ANIMATION_DURATION);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClosing();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      clearTimeout(closingTimerRef.current);
      document.removeEventListener('keydown', handleKeyDown);
      setClosing(false);
    };
  }, [isOpen, handleClosing]);

  const appPortalClasses = classNames(classes.container, {
    [classes.isOpen]: isOpen,
    [classes.isClosing]: isClosing,
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={appPortalClasses} data-testid="app-modal">
        <div
          className={classes.overlay}
          onClick={handleClosing}
          style={{ animationDuration: `${ANIMATION_DURATION}ms` }}
        >
          <div
            className={classes.content}
            onClick={(event) => {
              event.stopPropagation();
            }}
            style={{ animationDuration: `${ANIMATION_DURATION}ms` }}
          >
            {children}

            <button className={classes.button} onClick={handleClosing}>
              <CrossIcon />
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default AppModal;
