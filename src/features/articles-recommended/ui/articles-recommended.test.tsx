import { screen, waitFor } from '@testing-library/react';

import { makeResponseError } from '@/shared/config/jest/server';
import { renderWithAll } from '@/shared/config/jest/render-with-all';

import ArticlesRecommended from './articles-recommended';

describe('test features/articles-recommended', () => {
  it('be in the document', async () => {
    renderWithAll(<ArticlesRecommended />);
    await waitFor(() => {
      expect(screen.getByTestId('articles-recommended')).toBeInTheDocument();
    });
  });

  it('show skeletons on loading', async () => {
    renderWithAll(<ArticlesRecommended />);
    const skeletons = screen.queryAllByTestId('article-card-skeleton');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('not be in the document, if catched error', async () => {
    makeResponseError('/articles');
    renderWithAll(<ArticlesRecommended />);

    await waitFor(() => {
      expect(
        screen.queryByTestId('articles-recommended'),
      ).not.toBeInTheDocument();
    });
  });
});
