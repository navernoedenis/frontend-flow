import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/store';
import { selectAuthMe } from 'features/auth';

import type { Comment } from 'entities/comment';
import type { User } from 'entities/user';

import { errorMessage } from 'shared/lib/error-message';

interface AddCommentProps {
  articleId: string;
  comment: string;
}

export const addComment = createAsyncThunk<
  Comment,
  AddCommentProps,
  ThunkConfig
>('articles/add-comment', async (props, config) => {
  const { articleId, comment } = props;
  const { extra, rejectWithValue, getState } = config;

  try {
    const me = selectAuthMe(getState()) as User;

    const response = await extra.client.post<Comment>('/comments', {
      articleId,
      text: comment,
      userId: me.id,
    });

    if (!response.data) {
      throw new Error('Comment not found');
    }

    // After POST request must be a pause,
    // because after adding new data to db.json
    // nodemon - starts rebooting the server.
    // Usually it takes 3 seconds.
    // Otherwise server will goes down
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });

    // Would be better to create new comment
    // and get it back, like one request with user relation.
    // Unforunatelly, it's impossible at the current moment.
    // POST method doesn't support '_expand' param.
    // issue: https://github.com/typicode/json-server/issues/1158.
    // That's why we are using the second method here.
    const responseWithAuthor = await extra.client.get<Comment>(
      `/comments/${response.data.id}`,
      {
        params: {
          articleId,
          _expand: 'user',
        },
      },
    );

    return responseWithAuthor.data;
  } catch (error) {
    return rejectWithValue(errorMessage(error));
  }
});
