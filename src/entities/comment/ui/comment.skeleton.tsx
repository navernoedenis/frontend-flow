import { AppSkeleton } from 'shared/ui/app-skeleton';
import classes from './comment.module.scss';

function CommentSkeleton() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <AppSkeleton
          style={{ borderRadius: '50%', height: '40px', width: '40px' }}
        />
        <AppSkeleton
          style={{ marginLeft: '6px', height: '20px', maxWidth: '100px' }}
        />
      </div>

      <AppSkeleton
        style={{ marginTop: '9px', height: '20px', maxWidth: '540px' }}
      />
    </div>
  );
}

export default CommentSkeleton;
