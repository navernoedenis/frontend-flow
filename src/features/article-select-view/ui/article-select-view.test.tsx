import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/render-with-all';

import ArticleSelectView from './article-select-view';
import { ArticleView } from '../model/constants';

describe('test features/article-select-view', () => {
  let onSelectTag = jest.fn();

  afterEach(() => {
    onSelectTag = jest.fn();
  });

  test('be in the document', async () => {
    renderWithAll(
      <ArticleSelectView
        onSelectView={onSelectTag}
        view={ArticleView.NORMAL}
      />,
    );
    expect(screen.getByTestId('article-select-view')).toBeInTheDocument();
  });
});
