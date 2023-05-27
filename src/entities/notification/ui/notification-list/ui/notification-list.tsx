import { useTranslation } from 'react-i18next';
import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';

import { useGetNotificationsQuery } from '../../../api/notifications';
import {
  NotificationItem,
  NotificationItemSkeleton,
} from '../../notification-item';

import classes from './notification-list.module.scss';

interface NotificationListProps {
  userId: string;
}

function NotificationList({ userId }: NotificationListProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'entities.notification',
  });

  const {
    data: notifications = [],
    isError,
    isLoading,
  } = useGetNotificationsQuery(
    { userId },
    {
      pollingInterval: 8000,
    },
  );

  return (
    <Flexbox
      className={classes.container}
      data-testid="notification-list"
      direction="column"
      gap="16"
      justifyContent="center"
    >
      {isLoading && (
        <>
          <NotificationItemSkeleton />
          <NotificationItemSkeleton />
          <NotificationItemSkeleton />
        </>
      )}
      {isError && (
        <AppTypography
          align="center"
          capitalizeFirstLetter
          data-testid="notification-list-error"
          error
          size="large"
          weight="heavy"
        >
          {`${t('error_message')}...`}
        </AppTypography>
      )}
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} data={notification} />
      ))}
    </Flexbox>
  );
}

export default NotificationList;
