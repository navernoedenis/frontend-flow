import { AppSkeleton } from 'shared/ui/app-skeleton';

function ProfileSkeleton() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
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
          maxWidth: '864px',
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          gap: '10px 20px',
        }}
      >
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
      </div>
    </div>
  );
}

export default ProfileSkeleton;
