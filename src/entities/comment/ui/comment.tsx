import { memo } from 'react';
import { LazyImage } from 'shared/ui/lazy-image';

import classes from './comment.module.scss';
import type { Comment } from '../model/types';

interface CommentEntityProps {
  comment: Comment;
}

const CommentEntity = ({ comment }: CommentEntityProps) => (
  <div className={classes.container} data-testid="comment-entity">
    <header className={classes.header}>
      <LazyImage className={classes.avatar} src={comment.user.avatar} />
      <span className={classes.username}>{comment.user.name}</span>
    </header>
    <p className={classes.text}>{comment.text}</p>
  </div>
);

export default memo(CommentEntity);
