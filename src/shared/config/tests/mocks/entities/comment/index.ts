import type { Comment } from 'entities/comment';
import { userMock } from '../user';

export const commentMock: Comment = {
  id: '1',
  text: 'Plainly, the world held wonders of a kind I had never guessed',
  userId: '1',
  user: userMock,
};
