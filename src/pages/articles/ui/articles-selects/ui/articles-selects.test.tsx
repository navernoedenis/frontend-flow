import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/providers';
import { articlesStateMock } from '@/shared/config/jest/mocks/states';

import ArticlesSelects from './articles-selects';

describe('test pages/articles/articles-selects', () => {
  it('be in the document', () => {
    renderWithAll(<ArticlesSelects />, { articles: articlesStateMock });
    expect(screen.getByTestId('articles-selects')).toBeInTheDocument();
  });
});
