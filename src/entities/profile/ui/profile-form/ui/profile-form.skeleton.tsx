import { AppSkeleton } from 'shared/ui/app-skeleton';
import { Flexbox } from 'shared/ui/flexbox';

function ProfileSkeleton() {
  return (
    <Flexbox alignItems="start" data-testid="profile-skeleton">
      <AppSkeleton
        style={{
          marginRight: '20px',
          height: '220px',
          width: '220px',
          flexShrink: 0,
        }}
      />

      <Flexbox gap="20" style={{ maxWidth: '864px', width: '100%' }} wrap>
        <AppSkeleton
          style={{ maxWidth: '300px', width: '100%', height: '52px' }}
        />
        <AppSkeleton
          style={{ maxWidth: '300px', width: '100%', height: '52px' }}
        />
        <AppSkeleton
          style={{ maxWidth: '300px', width: '100%', height: '52px' }}
        />
        <AppSkeleton
          style={{ maxWidth: '300px', width: '100%', height: '52px' }}
        />
      </Flexbox>
    </Flexbox>
  );
}

export default ProfileSkeleton;
