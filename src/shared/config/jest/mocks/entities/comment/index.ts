import type { Comment } from '@/entities/comment';
import { userMock } from '../user';

export const commentMock: Comment = {
  id: '1',
  text: 'Plainly, the world held wonders of a kind I had never guessed',
  userId: '1',
  user: userMock,
};

export const commentsMock: Comment[] = Array.from({ length: 3 }).map(
  (_, index) => ({
    ...commentMock,
    id: `${index}`,
  }),
);
