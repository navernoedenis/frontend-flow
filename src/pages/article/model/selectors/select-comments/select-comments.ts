import type { AppState } from 'app/providers/store';
import { commentsAdapter } from '../../slice/comments';

export const selectCommentsLoading = (state: AppState) => state.comments?.isLoading ?? false;
export const selectCommentsError = (state: AppState) => state.comments?.error ?? '';

export const selectComments = commentsAdapter.getSelectors<AppState>(
  (state) => state.comments ?? commentsAdapter.getInitialState(),
);
