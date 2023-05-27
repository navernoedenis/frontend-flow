import { rtk } from '@/shared/api';
import type { ArticleRating } from '../model/types';

type QueryRatingArguments = Pick<ArticleRating, 'articleId' | 'userId'>;
type MutationRatingArguments = Omit<ArticleRating, 'id'>;

const articleRatingApi = rtk.injectEndpoints({
  endpoints: (build) => ({
    getRating: build.query<ArticleRating[], QueryRatingArguments>({
      query: ({ articleId, userId }) => ({
        url: '/articles-rating',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    updateRating: build.mutation<ArticleRating, MutationRatingArguments>({
      query: (args) => ({
        url: '/articles-rating',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const { useGetRatingQuery, useUpdateRatingMutation } = articleRatingApi;
