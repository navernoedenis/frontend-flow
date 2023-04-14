import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import { articlesStateMock } from 'shared/config/tests/mocks/states';

import ArticlesCards from './articles-cards';

describe('test pages/articles/articles-cards', () => {
  it('should be in the document', () => {
    renderWithAll(<ArticlesCards />, { articles: articlesStateMock });
    expect(screen.getByTestId('article-list')).toBeInTheDocument();
  });
});
