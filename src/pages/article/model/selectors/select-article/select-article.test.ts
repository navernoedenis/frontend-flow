import type { AppState } from 'app/providers/store';
import { articleMock } from 'shared/config/tests/mocks/entities';

import { selectArticle } from './select-article';

describe('test pages/article/select-article', () => {
  it('should return: default value', () => {
    const state = {} as AppState;
    expect(selectArticle(state)).toBe(null);
  });

  it('should return: article data', () => {
    const state = {
      article: { isLoading: false, error: '', data: articleMock },
    } as AppState;

    expect(selectArticle(state)).toEqual({
      isLoading: false,
      error: '',
      data: articleMock,
    });
  });
});
