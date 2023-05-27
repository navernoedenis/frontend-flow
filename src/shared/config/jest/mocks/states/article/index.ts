import type { ArticleState } from '@/pages/article/model/types';
import { articleMock } from '../../entities';

export const articleStateMock: ArticleState = {
  data: articleMock,
  error: '',
  isLoading: false,
};
