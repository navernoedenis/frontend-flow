import { AppSkeleton } from '@/shared/ui/app-skeleton';
import { Flexbox } from '@/shared/ui/flexbox';

function NotificationItemSkeleton() {
  return (
    <Flexbox
      alignItems="start"
      data-testid="notification-item-skeleton"
      direction="column"
      style={{ width: '100%' }}
    >
      <AppSkeleton
        style={{ marginBottom: '5px', height: '24px', width: '40%' }}
      />
      <AppSkeleton style={{ height: '38px' }} />
    </Flexbox>
  );
}

export default NotificationItemSkeleton;
