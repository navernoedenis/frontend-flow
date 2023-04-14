import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithAll } from 'shared/config/tests/rtl';

import AuthModal from './auth-modal';

describe('test features/auth-modal', () => {
  it('should be in the document', async () => {
    await act(() =>
      renderWithAll(<AuthModal isOpen={true} onClose={() => {}} />),
    );
    expect(screen.getByTestId('app-modal')).toBeInTheDocument();
  });

  it("shouldn't be should be in the document", async () => {
    await act(async () =>
      renderWithAll(<AuthModal isOpen={false} onClose={() => {}} />),
    );
    expect(screen.queryByTestId('app-modal')).not.toBeInTheDocument();
  });
});
