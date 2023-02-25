import { useState, useRef, useEffect, useCallback } from 'react';
import type { MouseEvent, ReactNode } from 'react';

import { Portal } from 'shared/components/portal';
import { classNames } from 'shared/lib/class-names';

import classes from './app-modal.module.scss';

interface AppModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
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

  const handleKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClosing();
      }
    },
    [handleClosing],
  );

  const stopContentPropagation = (event: MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      clearTimeout(closingTimerRef.current);
      document.removeEventListener('keydown', handleKeyDown);
      setClosing(false);
    };
  }, [handleKeyDown, isOpen]);

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
            onClick={stopContentPropagation}
            style={{ animationDuration: `${ANIMATION_DURATION}ms` }}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default AppModal;
