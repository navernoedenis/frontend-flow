import { AppSkeleton } from 'shared/ui/app-skeleton';
import { Flexbox } from 'shared/ui/flexbox';

interface ArticleCardSkeletonProps {
  isCompact?: boolean;
}

function ArticleCardSkeleton({ isCompact = false }: ArticleCardSkeletonProps) {
  if (isCompact) {
    return (
      <Flexbox
        data-testid="article-card-skeleton"
        direction="column"
        style={{ overflow: 'hidden', width: '284px' }}
      >
        <AppSkeleton
          style={{
            flexShrink: '0',
            height: '186px',
            width: '100%',
          }}
        />
        <Flexbox
          direction="column"
          gap="16"
          style={{
            padding: '12px 0',
            height: '100%',
            width: '100%',
          }}
        >
          <AppSkeleton style={{ height: '19px' }} />
          <AppSkeleton style={{ height: '57.5px' }} />
          <AppSkeleton style={{ height: '17px' }} />
          <AppSkeleton style={{ height: '17px' }} />
        </Flexbox>
      </Flexbox>
    );
  }

  return (
    <Flexbox data-testid="article-card-skeleton" style={{ width: '100%' }}>
      <AppSkeleton
        style={{
          flexShrink: '0',
          height: '186px',
          width: '244px',
        }}
      />
      <Flexbox
        direction="column"
        gap="16"
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
