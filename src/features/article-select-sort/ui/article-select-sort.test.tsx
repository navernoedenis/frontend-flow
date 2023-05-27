import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/providers';

import type { ArticleSortKey, ArticleSortOrder } from '../model/types';
import ArticleSelectSort from './article-select-sort';

describe('test features/article-select-sort', () => {
  let onSelectKey = jest.fn();
  let onSelectOrder = jest.fn();
  let sortKey: ArticleSortKey = 'created';
  let sortOrder: ArticleSortOrder = 'asc';

  afterEach(() => {
    onSelectKey = jest.fn();
    onSelectOrder = jest.fn();
    sortKey = 'created';
    sortOrder = 'asc';
  });

  test('be in the document', async () => {
    renderWithAll(
      <ArticleSelectSort
        onSelectKey={onSelectKey}
        onSelectOrder={onSelectOrder}
        sortKey={sortKey}
        sortOrder={sortOrder}
      />,
    );
    expect(screen.getByTestId('article-select-sort')).toBeInTheDocument();
  });

  test('must be 2 selects', async () => {
    renderWithAll(
      <ArticleSelectSort
        onSelectKey={onSelectKey}
        onSelectOrder={onSelectOrder}
        sortKey={sortKey}
        sortOrder={sortOrder}
      />,
    );

    const selects = screen.getAllByTestId('app-select');
    expect(selects.length).toBe(2);
  });
});
