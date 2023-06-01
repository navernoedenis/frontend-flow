import { screen } from '@testing-library/react';
import { intersectionObserver } from '@/shared/config/jest/mocks/dom';
import { renderWithAll } from '@/shared/config/jest/render-with-all';
import { articlesPageStateMock } from '../model/mocks';

import ArticlesPage from './articles';

describe('test pages/articles', () => {
  beforeEach(() => {
    intersectionObserver();
  });

  it('be in the document', async () => {
    renderWithAll(<ArticlesPage />, {
      articles: articlesPageStateMock,
    });
    expect(screen.getByTestId('articles-page')).toBeInTheDocument();
  });
});
