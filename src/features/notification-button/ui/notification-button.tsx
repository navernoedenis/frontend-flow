import { useState, useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';
import { Dropdown } from '@/shared/ui/dropdown';

import { NotificationList } from '@/entities/notification';

import BellIcon from './assets/bell.svg';
import classes from './notification-button.module.scss';

interface NotificationButtonProps {
  userId: string;
}

function NotificationButton({ userId }: NotificationButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [showModal, setModal] = useState(false);

  const onShowModal = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setModal((prev) => !prev);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <>
      <button
        className={classes.button}
        data-testid="notification-button"
        onClick={onShowModal}
        ref={buttonRef}
      >
        <BellIcon className={classes.icon} />
      </button>

      <Dropdown
        isOpen={showModal}
        isSidePadding
        onClose={onCloseModal}
        parentRef={buttonRef}
      >
        <div className={classes.modal}>
          <NotificationList userId={userId} />
        </div>
      </Dropdown>
    </>
  );
}

export default NotificationButton;
