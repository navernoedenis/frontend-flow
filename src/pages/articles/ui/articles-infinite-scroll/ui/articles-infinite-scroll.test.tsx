import { screen } from '@testing-library/react';

import { articlesStateMock } from 'shared/config/tests/mocks/states';
import { mockIntersectionObserver } from 'shared/config/tests/mocks/dom';
import { renderWithAll } from 'shared/config/tests/rtl';

import ArticlesInfiniteScroll from './articles-infinite-scroll';

describe('test pages/articles/articles-infinite-scroll', () => {
  beforeEach(() => {
    mockIntersectionObserver();
  });

  it('should be in the document', () => {
    renderWithAll(<ArticlesInfiniteScroll />, { articles: articlesStateMock });
    const component = screen.queryByTestId('articles-infinite-scroll');
    expect(component).toBeInTheDocument();
  });

  it("shouldn't be in the document", () => {
    renderWithAll(<ArticlesInfiniteScroll />, {
      articles: { ...articlesStateMock, hasMore: false },
    });
    const component = screen.queryByTestId('articles-infinite-scroll');
    expect(component).not.toBeInTheDocument();
  });
});
