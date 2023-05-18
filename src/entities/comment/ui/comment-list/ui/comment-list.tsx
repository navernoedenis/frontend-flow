import { Flexbox } from 'shared/ui/flexbox';
import type { Comment } from '../../../model/types';

import { CommentEntity, CommentSkeleton } from '../../comment-entity';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

function CommentList({
  className = '',
  comments,
  isLoading = false,
}: CommentListProps) {
  if (!isLoading && !comments.length) {
    return null;
  }

  return (
    <Flexbox
      className={className}
      alignItems="start"
      data-testid="comment-list"
      direction="column-reverse"
      gap="16"
    >
      {isLoading ? (
        <>
          <CommentSkeleton />
          <CommentSkeleton />
          <CommentSkeleton />
        </>
      ) : (
        comments.map((comment) => (
          <CommentEntity key={comment.id} comment={comment} />
        ))
      )}
    </Flexbox>
  );
}

export default CommentList;
