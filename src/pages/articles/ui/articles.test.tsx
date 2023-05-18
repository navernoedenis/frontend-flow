import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';

import { articlesStateMock } from 'shared/config/tests/mocks/states';
import { intersectionObserver } from 'shared/config/tests/mocks/dom';
import { renderWithAll } from 'shared/config/tests/rtl';

import ArticlesPage from './articles';

describe('test pages/articles', () => {
  beforeEach(() => {
    intersectionObserver();
  });

  it('be in the document', async () => {
    await act(() =>
      renderWithAll(<ArticlesPage />, {
        articles: articlesStateMock,
      }),
    );
    expect(screen.getByTestId('articles-page')).toBeInTheDocument();
  });
});
