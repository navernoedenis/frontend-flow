import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { articlesMock } from '../entities/article';

const handlers = [
  rest.get(`${__HOST__}/articles`, (_req, res, ctx) => res(ctx.status(200), ctx.json(articlesMock))),
];

export const server = setupServer(...handlers);
export { rest };
