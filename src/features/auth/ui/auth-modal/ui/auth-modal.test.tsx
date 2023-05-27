import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithAll } from '@/shared/config/jest/providers';

import AuthModal from './auth-modal';

describe('test features/auth-modal', () => {
  it('be in the document', async () => {
    await act(() =>
      renderWithAll(<AuthModal isOpen={true} onClose={Function} />),
    );
    expect(screen.getByTestId('app-modal')).toBeInTheDocument();
  });

  it('not be in the document', async () => {
    await act(async () =>
      renderWithAll(<AuthModal isOpen={false} onClose={Function} />),
    );
    expect(screen.queryByTestId('app-modal')).not.toBeInTheDocument();
  });
});
