import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LS_USER_KEY } from '@/entities/user';
import { Storage } from '@/shared/services';

export const rtk = createApi({
  reducerPath: 'rtk',
  baseQuery: fetchBaseQuery({
    baseUrl: __HOST__,
    prepareHeaders: (headers) => {
      const isAuthorized = Boolean(Storage.local.get(LS_USER_KEY)) || false;

      if (isAuthorized) {
        headers.set('Authorization', 'true');
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
