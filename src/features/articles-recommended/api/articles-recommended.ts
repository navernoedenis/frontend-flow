import type { Article } from '@/entities/article';
import { rtk } from '@/shared/api';

const articlesRecommendedApi = rtk.injectEndpoints({
  endpoints: (build) => ({
    getRecommended: build.query<Article[], number>({
      query: (quantity) => ({
        url: '/articles',
        params: { _limit: quantity },
      }),
    }),
  }),
});

export const { useGetRecommendedQuery } = articlesRecommendedApi;
