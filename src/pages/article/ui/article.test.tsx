import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { renderWithAll } from 'shared/config/tests/rtl';
import { userMock } from 'shared/config/tests/mocks/entities';

import ArticlePage from './article';

describe('test pages/article', () => {
  it('be in the document', async () => {
    await act(() => renderWithAll(<ArticlePage />));
    expect(screen.getByTestId('article-page')).toBeInTheDocument();
  });

  it('if authorized, show add comment', async () => {
    await act(() =>
      renderWithAll(<ArticlePage />, {
        auth: {
          me: userMock,
        },
      }),
    );

    expect(screen.getByTestId('add-comment')).toBeInTheDocument();
  });

  it('if not authorized, hide add comment', async () => {
    await act(() => renderWithAll(<ArticlePage />));
    expect(screen.queryByTestId('add-comment')).not.toBeInTheDocument();
  });
});
