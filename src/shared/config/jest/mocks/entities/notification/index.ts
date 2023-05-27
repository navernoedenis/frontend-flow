import type { Notification } from '@/entities/notification/model/types';

export const notificationMock: Notification = {
  id: '1',
  userId: '1',
  title: 'Where can I get some?',
  description: 'There are many variations of passages of Lorem Ipsum available',
  link: 'http://google.com',
};

export const notificationsMock: Notification[] = [
  { ...notificationMock, id: '1' },
  { ...notificationMock, id: '2', link: undefined },
  { ...notificationMock, id: '3' },
  { ...notificationMock, id: '4' },
  { ...notificationMock, id: '5', link: undefined },
];
