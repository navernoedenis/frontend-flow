import type { AppState } from '@/app/providers/store';
import { selectCommentsLoading, selectCommentsError } from './select-comments';

describe('test pages/article/select-comments', () => {
  it('isLoading: false', () => {
    const state = {} as AppState;
    expect(selectCommentsLoading(state)).toBe(false);
  });

  it('error: empty string', () => {
    const state = {} as AppState;
    expect(selectCommentsError(state)).toBe('');
  });
});
