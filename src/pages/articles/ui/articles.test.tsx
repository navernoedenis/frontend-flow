import { screen } from '@testing-library/react';

import { articlesStateMock } from 'shared/config/tests/mocks/states';
import { mockIntersectionObserver } from 'shared/config/tests/mocks/dom';
import { renderWithAll } from 'shared/config/tests/rtl';

import ArticlesPage from './articles';

describe('test pages/articles', () => {
  beforeEach(() => {
    mockIntersectionObserver();
  });

  it('should be in the document', () => {
    renderWithAll(<ArticlesPage />, { articles: articlesStateMock });
    expect(screen.getByTestId('articles-page')).toBeInTheDocument();
  });
});
