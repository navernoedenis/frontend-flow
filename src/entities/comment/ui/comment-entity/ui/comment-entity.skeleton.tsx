import { AppSkeleton } from 'shared/ui/app-skeleton';
import { Flexbox } from 'shared/ui/flexbox';

import classes from './comment-entity.module.scss';

function CommentSkeleton() {
  return (
    <div className={classes.container} data-testid="comment-skeleton">
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
  );
}

export default CommentSkeleton;
