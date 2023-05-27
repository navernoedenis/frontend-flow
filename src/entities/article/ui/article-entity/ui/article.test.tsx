import { screen } from '@testing-library/react';
import { articleMock } from '@/shared/config/jest/mocks/entities';
import { renderWithAll } from '@/shared/config/jest/providers';

import ArticleEntity from './article';

describe('test entities/article', () => {
  it('be in the document', () => {
    renderWithAll(<ArticleEntity article={articleMock} />);
    expect(screen.getByTestId('article-entity')).toBeInTheDocument();
  });

  it('show skeleton on loading', () => {
    renderWithAll(<ArticleEntity article={null} isLoading />);
    expect(screen.getByTestId('article-skeleton')).toBeInTheDocument();
  });

  it('has classname: extra', () => {
    renderWithAll(<ArticleEntity className="extra" article={articleMock} />);
    expect(screen.getByTestId('article-entity')).toHaveClass('extra');
  });

  it('show 4 blocks - header, code, image, text', () => {
    renderWithAll(<ArticleEntity article={articleMock} />);
    expect(screen.getByTestId('article-header')).toBeInTheDocument();
    expect(screen.getByTestId('article-code-block')).toBeInTheDocument();
    expect(screen.getByTestId('article-image-block')).toBeInTheDocument();
    expect(screen.getByTestId('article-text-block')).toBeInTheDocument();
  });

  it('not be in the document', () => {
    renderWithAll(<ArticleEntity article={null} />);
    expect(screen.queryByTestId('article-entity')).not.toBeInTheDocument();
  });
});
