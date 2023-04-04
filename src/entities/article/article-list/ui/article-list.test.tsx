import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import ArticleList from './article-list';

describe('test entities/article-list', () => {
  test('should be in the document', () => {
    renderWithAll(<ArticleList articles={[]} />);
    expect(screen.getByTestId('article-list')).toBeInTheDocument();
  });
});
