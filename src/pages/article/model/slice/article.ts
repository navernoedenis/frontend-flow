import { createSlice } from '@reduxjs/toolkit';
import { getArticle } from '../../api/get-article/get-article';
import type { ArticleState } from '../types';

const initialState: ArticleState = {
  data: null,
  isLoading: false,
  error: '',
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticle.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: articleReducer } = articleSlice;
