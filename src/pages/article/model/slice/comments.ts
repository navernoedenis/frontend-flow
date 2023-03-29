import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { Comment } from 'entities/comment';
import type { CommentsState } from '../types';

import { getComments } from '../../api/get-comments/get-comments';

export const initialState: CommentsState = {
  entities: {},
  error: '',
  ids: [],
  isLoading: false,
};

export const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const commentsSlice = createSlice({
  name: 'article-comments',
  initialState: commentsAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: commentsActions } = commentsSlice;
export const { reducer: commentsReducer } = commentsSlice;
