import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/render-with-all';
import { articlesPageStateMock } from '../../../model/mocks';

import ArticlesSelects from './articles-selects';

describe('test pages/articles/articles-selects', () => {
  it('be in the document', () => {
    renderWithAll(<ArticlesSelects />, { articles: articlesPageStateMock });
    expect(screen.getByTestId('articles-selects')).toBeInTheDocument();
  });
});
