import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';
import { AppLink } from '@/shared/ui/app-link';

import type { Notification } from '../../../model/types';
import classes from './notification-item.module.scss';

interface NotificationItemProps {
  data: Notification;
}

function NotificationItem({ data }: NotificationItemProps) {
  const content = (
    <Flexbox
      alignItems="start"
      className={classes.container}
      data-testid="notification-item"
      direction="column"
    >
      <AppTypography
        capitalizeFirstLetter
        className={classes.title}
        lineClamp={1}
        size="normal"
        tag="h4"
        weight="heavy"
      >
        {data.title}
      </AppTypography>
      <AppTypography
        capitalizeFirstLetter
        className={classes.description}
        lineClamp={2}
        tag="p"
      >
        {data.description}
      </AppTypography>
    </Flexbox>
  );

  if (data.link) {
    return (
      <AppLink
        className={classes.link}
        data-testid="notification-item-link"
        target="_blank"
        to={data.link}
      >
        {content}
      </AppLink>
    );
  }

  return content;
}

export default NotificationItem;
