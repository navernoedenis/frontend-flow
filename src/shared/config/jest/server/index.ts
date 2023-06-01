import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { articleRatingMock } from '@/features/article-rating';

import { articlesMock } from '@/entities/article';
import { notificationsMock } from '@/entities/notification';

const handlers = [
  rest.get(`${__HOST__}/articles`, (_req, res, ctx) => (
    res(ctx.status(200), ctx.json(articlesMock))
  )),
  rest.get(`${__HOST__}/articles-rating`, (_req, res, ctx) => (
    res(ctx.status(200), ctx.json(articleRatingMock))
  )),
  rest.get(`${__HOST__}/notifications`, (_req, res, ctx) => (
    res(ctx.status(200), ctx.json(notificationsMock))
  )),
];

function makeResponseError(path: string) {
  return server.use(
    rest.get(`${__HOST__}${path}`, (_req, res, ctx) => (
      res(ctx.status(500))
    )),
  );
}

export const server = setupServer(...handlers);
export { rest, makeResponseError };
