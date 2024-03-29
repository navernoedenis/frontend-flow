import { AppSkeleton } from '@/shared/ui/app-skeleton';
import { Flexbox } from '@/shared/ui/flexbox';

import classes from './comment-entity.module.scss';

interface CommentSkeletonProps {
  repeat?: number;
}

function CommentSkeleton({ repeat = 1 }: CommentSkeletonProps) {
  return (
    <>
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          className={classes.container}
          data-testid="comment-skeleton"
          key={index}
        >
          <Flexbox>
            <AppSkeleton
              style={{ borderRadius: '50%', height: '40px', width: '40px' }}
            />
            <AppSkeleton
              style={{ marginLeft: '6px', height: '20px', maxWidth: '100px' }}
            />
          </Flexbox>
          <AppSkeleton
            style={{ marginTop: '9px', height: '20px', maxWidth: '540px' }}
          />
        </div>
      ))}
    </>
  );
}

export default CommentSkeleton;
