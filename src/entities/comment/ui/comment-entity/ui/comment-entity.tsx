import { memo } from 'react';

import { AppLink } from '@/shared/ui/app-link';
import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';
import { LazyImage } from '@/shared/ui/lazy-image';
import { routes } from '@/shared/constants/routes';

import type { Comment } from '../../../model/types';
import classes from './comment-entity.module.scss';

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
      <Flexbox tag="header">
        {comment.user.profile && (
          <LazyImage
            className={classes.avatar}
            src={comment.user.profile.avatar}
          />
        )}
        <AppLink
          className={classes.username}
          data-testid="comment-entity-link"
          to={routes.profile(comment.user.profileId)}
        >
          {comment.user.name}
        </AppLink>
      </Flexbox>
      <AppTypography className={classes.text}>{comment.text}</AppTypography>
    </div>
  );
}

export default memo(CommentEntity);
