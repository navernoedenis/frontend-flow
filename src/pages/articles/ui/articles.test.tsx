import { screen } from '@testing-library/react';

import { articlesStateMock } from '@/shared/config/jest/mocks/states';
import { intersectionObserver } from '@/shared/config/jest/mocks/dom';
import { renderWithAll } from '@/shared/config/jest/providers';

import ArticlesPage from './articles';

describe('test pages/articles', () => {
  beforeEach(() => {
    intersectionObserver();
  });

  it('be in the document', async () => {
    renderWithAll(<ArticlesPage />, {
      articles: articlesStateMock,
    });
    expect(screen.getByTestId('articles-page')).toBeInTheDocument();
  });
});
