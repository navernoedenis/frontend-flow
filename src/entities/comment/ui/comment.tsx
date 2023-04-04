import { memo } from 'react';
import { LazyImage } from 'shared/ui/lazy-image';

import { AppLink } from 'shared/ui/app-link';
import { AppTypography } from 'shared/ui/app-typography';
import type { Comment } from '../model/types';

import classes from './comment.module.scss';

interface CommentEntityProps {
  comment: Comment;
}

// User avatar won't be working due to limits of json-server.
// Deep relationships are not support. Only one nested relation.
// WILL WORK: Comment -> User
// WON'T WORK: Comment -> User -> Profile

function CommentEntity({ comment }: CommentEntityProps) {
  return (
    <div className={classes.container} data-testid="comment-entity">
      <header className={classes.header}>
        {comment.user.profile && (
          <LazyImage
            className={classes.avatar}
            src={comment.user.profile.avatar}
          />
        )}
        <AppLink
          className={classes.username}
          to={`/profiles/${comment.user.profileId}`}
        >
          {comment.user.name}
        </AppLink>
      </header>
      <AppTypography className={classes.text}>{comment.text}</AppTypography>
    </div>
  );
}

export default memo(CommentEntity);
