import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import ArticleCard from './article-card';

import { articleMock } from 'shared/config/tests/mocks/entities';

describe('test entities/article-card', () => {
  test('should be in the document', () => {
    renderWithAll(<ArticleCard article={articleMock} />);
    expect(screen.getByTestId('article-card')).toBeInTheDocument();
  });

  test('should have aditional classname: compact', () => {
    renderWithAll(<ArticleCard article={articleMock} isCompact />);
    expect(screen.getByTestId('article-card')).toHaveClass('compact');
  });
});
