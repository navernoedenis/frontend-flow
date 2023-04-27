import { AppSkeleton, Flexbox } from 'shared/ui';
import classes from './comment.module.scss';

function CommentSkeleton() {
  return (
    <div className={classes.container}>
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
