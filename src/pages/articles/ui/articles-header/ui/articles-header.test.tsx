import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import { articlesStateMock } from 'shared/config/tests/mocks/states';

import ArticlesHeader from './articles-header';

describe('test pages/articles/articles-header', () => {
  it('should be in the document', () => {
    renderWithAll(<ArticlesHeader />, { articles: articlesStateMock });
    expect(screen.getByTestId('articles-header')).toBeInTheDocument();
  });
});
