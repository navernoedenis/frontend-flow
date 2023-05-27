import { AppSkeleton } from '@/shared/ui/app-skeleton';
import { Flexbox } from '@/shared/ui/flexbox';

interface RatingCardSkeletonProps {
  stars: number;
}

function RatingCardSkeleton({ stars = 5 }: RatingCardSkeletonProps) {
  return (
    <Flexbox
      data-testid="rating-card-skeleton"
      direction="column"
      style={{
        border: '1px solid var(--accent-color)',
        padding: '20px',
      }}
    >
      <AppSkeleton
        style={{
          marginBottom: '10px',
          borderRadius: '50px',
          maxWidth: '300px',
          height: '32px',
          width: '40%',
        }}
      />
      <Flexbox style={{ gap: '5px' }}>
        {Array.from({ length: stars }).map((_, index) => (
          <AppSkeleton
            key={index}
            style={{
              borderRadius: '50%',
              height: '44px',
              width: '44px',
            }}
          />
        ))}
      </Flexbox>
    </Flexbox>
  );
}

export default RatingCardSkeleton;
