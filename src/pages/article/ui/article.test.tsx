import { screen } from '@testing-library/react';

import { renderWithAll } from '@/shared/config/jest/providers';
import { userMock } from '@/shared/config/jest/mocks/entities';

import ArticlePage from './article';

describe('test pages/article', () => {
  it('be in the document', async () => {
    renderWithAll(<ArticlePage />);
    expect(screen.getByTestId('article-page')).toBeInTheDocument();
  });

  it('if authorized, show add comment', async () => {
    renderWithAll(<ArticlePage />, {
      auth: {
        me: userMock,
      },
    });
    expect(screen.getByTestId('add-comment')).toBeInTheDocument();
  });

  it('if not authorized, hide add comment', async () => {
    renderWithAll(<ArticlePage />);
    expect(screen.queryByTestId('add-comment')).not.toBeInTheDocument();
  });
});
