import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import { mockIntersectionObserver } from 'shared/config/tests/mocks/dom';

import ArticlesPage from './articles';

describe('test pages/articles', () => {
  beforeEach(() => {
    mockIntersectionObserver();
  });

  it('should be in the document', () => {
    renderWithAll(<ArticlesPage />, {
      articles: {
        entities: {},
        error: '',
        hasMore: true,
        ids: [],
        isLoading: false,
        limit: 1,
        page: 1,
      },
    });
    expect(screen.getByTestId('articles-page')).toBeInTheDocument();
  });
});
