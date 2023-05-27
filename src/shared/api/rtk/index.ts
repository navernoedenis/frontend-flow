import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Storage } from '@/shared/services';
import { LS_AUTH_KEY } from '@/shared/constants/local-storage';

export const rtk = createApi({
  reducerPath: 'rtk',
  baseQuery: fetchBaseQuery({
    baseUrl: __HOST__,
    prepareHeaders: (headers) => {
      const isAuthorized = Boolean(Storage.local.get(LS_AUTH_KEY)) || false;

      if (isAuthorized) {
        headers.set('Authorization', 'true');
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
