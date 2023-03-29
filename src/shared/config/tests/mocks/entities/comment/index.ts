import type { Comment } from 'entities/comment';
import { userMock } from '../user';

export const commentMock: Comment = {
  id: '1',
  text: 'Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes.',
  user: userMock,
};
