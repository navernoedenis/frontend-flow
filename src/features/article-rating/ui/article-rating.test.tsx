import { screen, waitFor } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/providers';
import { makeServerError } from '@/shared/config/jest/server';

import ArticleRating from './article-rating';

describe('test features/article-rating', () => {
  test('be in the document', async () => {
    renderWithAll(<ArticleRating articleId="1" userId="1" />);
    await waitFor(() => {
      expect(screen.getByTestId('rating-card')).toBeInTheDocument();
    });
  });

  test('show skeletons on loading', async () => {
    renderWithAll(<ArticleRating articleId="1" userId="1" />);
    const skeletons = screen.getAllByTestId('rating-card-skeleton');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  test('show nothing if catch error', async () => {
    makeServerError('/articles-rating');
    renderWithAll(<ArticleRating articleId="1" userId="1" />);

    await waitFor(() => {
      expect(screen.queryByTestId('rating-card')).not.toBeInTheDocument();
    });
  });
});
