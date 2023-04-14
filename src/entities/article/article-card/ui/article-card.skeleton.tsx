import { AppSkeleton } from 'shared/ui/app-skeleton';

interface ArticleCardSkeletonProps {
  isCompact?: boolean;
}

function ArticleCardSkeleton({ isCompact = false }: ArticleCardSkeletonProps) {
  if (isCompact) {
    return (
      <div
        style={{
          overflow: 'hidden',
          boxShadow: 'var(--app-shadow)',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '284px',
        }}
      >
        <AppSkeleton
          style={{
            borderRadius: 0,
            flexShrink: '0',
            height: '186px',
            width: '100%',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '12px',
            height: '100%',
            width: '100%',
          }}
        >
          <AppSkeleton style={{ height: '19px' }} />
          <AppSkeleton style={{ height: '57.5px' }} />
          <AppSkeleton style={{ height: '17px' }} />
          <AppSkeleton style={{ height: '17px' }} />
          <AppSkeleton style={{ height: '17px' }} />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        boxShadow: 'var(--app-shadow)',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <AppSkeleton
        style={{
          flexShrink: '0',
          height: '186px',
          width: '244px',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
          height: '100%',
          padding: '16px',
        }}
      >
        <AppSkeleton style={{ height: '19px' }} />
        <AppSkeleton style={{ height: '57.5px' }} />
        <AppSkeleton style={{ height: '17px' }} />
        <AppSkeleton style={{ marginTop: 'auto', height: '17px' }} />
      </div>
    </div>
  );
}

export default ArticleCardSkeleton;