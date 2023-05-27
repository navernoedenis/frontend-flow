import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/providers';
import ArticleList from './article-list';

import { intersectionObserver } from '@/shared/config/jest/mocks/dom';
import { articleMock } from '@/shared/config/jest/mocks/entities';

const articles = Array.from({ length: 10 }).map((_, index) => ({
  ...articleMock,
  id: `${index}`,
}));

describe('test entities/article-list', () => {
  beforeEach(() => {
    intersectionObserver();
  });

  test('be in the document', () => {
    renderWithAll(<ArticleList articles={articles} isLoading={false} />);
    expect(screen.getByTestId('article-list')).toBeInTheDocument();
  });

  test('be virtualized', () => {
    renderWithAll(<ArticleList articles={articles} isVirtualized />);
    expect(screen.getByTestId('virtualized-article-list')).toBeInTheDocument();
    expect(screen.queryByTestId('article-list')).not.toBeInTheDocument();
  });

  test('show skeleton on loading', () => {
    renderWithAll(<ArticleList articles={articles} isLoading />);
    expect(screen.getByTestId('article-list-skeleton')).toBeInTheDocument();
  });

  test('show virtualized skeleton on loading', () => {
    renderWithAll(<ArticleList articles={articles} isVirtualized isLoading />);
    expect(
      screen.getByTestId('virtualized-article-skeletons'),
    ).toBeInTheDocument();
  });

  test('show no-articles message', () => {
    renderWithAll(<ArticleList articles={[]} />);
    expect(screen.getByTestId('no-articles')).toBeInTheDocument();
  });

  test('trigger is active', () => {
    renderWithAll(<ArticleList articles={articles} isInfiniteScroll />);
    expect(screen.getByTestId('trigger')).toBeInTheDocument();
  });

  test("trigger isn't active", () => {
    renderWithAll(<ArticleList articles={articles} />);
    expect(screen.queryByTestId('trigger')).not.toBeInTheDocument();
  });

  test('not be in the document', () => {
    renderWithAll(<ArticleList articles={[]} isLoading={false} />);
    expect(screen.queryByTestId('article-list')).not.toBeInTheDocument();
  });
});
