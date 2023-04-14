import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import { articleMock } from 'shared/config/tests/mocks/entities';

import ArticlePage from './article';

describe('test pages/article', () => {
  it('should be in the document', () => {
    renderWithAll(<ArticlePage />, {
      article: { isLoading: false, error: '', data: articleMock },
    });

    expect(screen.getByTestId('article-page')).toBeInTheDocument();
  });
});
