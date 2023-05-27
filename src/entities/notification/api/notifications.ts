import { rtk } from '@/shared/api';
import type { Notification } from '../model/types';

interface QueryArguments {
  userId: string;
}

const notificationsApi = rtk.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], QueryArguments>({
      query: ({ userId }) => ({
        url: '/notifications',
        params: {
          userId,
          _order: 'desc',
          _sort: 'id',
        },
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsApi;
