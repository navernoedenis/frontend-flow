import { AppSkeleton } from 'shared/ui/app-skeleton';

const ProfileSkeleton = () => (
  <div style={{ display: 'flex' }}>
    <AppSkeleton
      style={{
        marginRight: '20px',
        height: '220px',
        width: '220px',
        flexShrink: 0,
      }}
    />

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        width: '100%',
      }}
    >
      <AppSkeleton style={{ maxWidth: '300px', height: '54.5px' }} />
      <AppSkeleton style={{ maxWidth: '300px', height: '54.5px' }} />
      <AppSkeleton style={{ maxWidth: '300px', height: '54.5px' }} />
      <AppSkeleton style={{ maxWidth: '300px', height: '54.5px' }} />
      <AppSkeleton style={{ maxWidth: '300px', height: '54.5px' }} />
    </div>
  </div>
);

export default ProfileSkeleton;
