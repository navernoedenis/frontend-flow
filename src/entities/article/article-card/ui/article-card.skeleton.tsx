import { AppSkeleton, Flexbox } from 'shared/ui';

interface ArticleCardSkeletonProps {
  isCompact?: boolean;
}

function ArticleCardSkeleton({ isCompact = false }: ArticleCardSkeletonProps) {
  if (isCompact) {
    return (
      <Flexbox
        direction="column"
        style={{
          overflow: 'hidden',
          boxShadow: 'var(--app-shadow)',
          borderRadius: '8px',
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
        <Flexbox
          direction="column"
          gap="12"
          style={{
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
        </Flexbox>
      </Flexbox>
    );
  }

  return (
    <Flexbox
      style={{
        boxShadow: 'var(--app-shadow)',
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
      <Flexbox
        direction="column"
        gap="12"
        style={{
          width: '100%',
          height: '100%',
          padding: '16px',
        }}
      >
        <AppSkeleton style={{ height: '19px' }} />
        <AppSkeleton style={{ height: '57.5px' }} />
        <AppSkeleton style={{ height: '17px' }} />
        <AppSkeleton style={{ marginTop: 'auto', height: '17px' }} />
      </Flexbox>
    </Flexbox>
  );
}

export default ArticleCardSkeleton;
