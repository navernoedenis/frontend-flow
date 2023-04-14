import { screen } from '@testing-library/react';
import { articleMock } from 'shared/config/tests/mocks/entities';
import { renderWithAll } from 'shared/config/tests/rtl';

import ArticleEntity from './article';

describe('test entities/article', () => {
  it('should be in the document', () => {
    renderWithAll(<ArticleEntity article={articleMock} />);
    expect(screen.getByTestId('article-entity')).toBeInTheDocument();
  });

  it('has additional className', () => {
    renderWithAll(<ArticleEntity className="turbo888" article={articleMock} />);
    expect(screen.getByTestId('article-entity')).toHaveClass('turbo888');
  });

  it('has article-header, code-block, image-block, text-block', () => {
    renderWithAll(<ArticleEntity article={articleMock} />);
    expect(screen.getByTestId('article-header')).toBeInTheDocument();
    expect(screen.getByTestId('article-code-block')).toBeInTheDocument();
    expect(screen.getByTestId('article-image-block')).toBeInTheDocument();
    expect(screen.getByTestId('article-text-block')).toBeInTheDocument();
  });
});
