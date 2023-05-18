import { act } from 'react-dom/test-utils';
import { screen, waitFor } from '@testing-library/react';
import { server, rest } from 'shared/config/tests/mocks/server';
import { renderWithAll } from 'shared/config/tests/rtl';

import ArticlesRecommended from './articles-recommended';

describe('test features/articles-recommended', () => {
  it('be in the document', async () => {
    await act(() => renderWithAll(<ArticlesRecommended />));
    await waitFor(() => {
      expect(screen.getByTestId('articles-recommended')).toBeInTheDocument();
    });
  });

  it('show skeletons on loading', async () => {
    await act(() => renderWithAll(<ArticlesRecommended />));
    const skeletons = screen.queryAllByTestId('article-card-skeleton');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('not be in the document, if catched error', async () => {
    server.use(
      rest.get(`${__HOST__}/articles`, (_req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    await act(() => renderWithAll(<ArticlesRecommended />));
    await waitFor(() => {
      expect(
        screen.queryByTestId('articles-recommended'),
      ).not.toBeInTheDocument();
    });
  });
});
