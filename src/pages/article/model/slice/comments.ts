import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { Comment } from 'entities/comment';
import type { CommentsState } from '../types';

import { addComment } from '../../api/add-comment/add-comment';
import { getComments } from '../../api/get-comments/get-comments';

const initialState: CommentsState = {
  entities: {},
  error: '',
  ids: [],
  isLoading: false,
};

export const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const articleCommentsSlice = createSlice({
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
        commentsAdapter.addMany(state, action.payload);
        state.isLoading = false;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addComment.fulfilled, (state, action) => {
        commentsAdapter.addOne(state, action.payload);
        state.isLoading = false;
        state.error = '';
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: commentsReducer } = articleCommentsSlice;
