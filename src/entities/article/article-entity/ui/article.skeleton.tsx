import { AppSkeleton } from 'shared/ui/app-skeleton';

function ArticleSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <AppSkeleton style={{ height: '24px', maxWidth: '700px' }} />

      <AppSkeleton style={{ height: '19px', maxWidth: '500px' }} />
      <AppSkeleton style={{ height: '19px', maxWidth: '380px' }} />
      <AppSkeleton style={{ height: '19px', maxWidth: '415px' }} />

      <AppSkeleton style={{ height: '220px' }} />

      <AppSkeleton style={{ height: '40px' }} />
      <AppSkeleton style={{ height: '19px', maxWidth: '600px' }} />
      <AppSkeleton style={{ height: '19px', maxWidth: '800px' }} />

      <AppSkeleton style={{ height: '19px' }} />
      <AppSkeleton style={{ height: '19px', maxWidth: '730px' }} />
    </div>
  );
}

export default ArticleSkeleton;
