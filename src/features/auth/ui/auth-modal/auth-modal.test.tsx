import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import AuthModal from './auth-modal';

describe('test features/auth-modal', () => {
  it('should be in the document', () => {
    renderWithAll(<AuthModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByTestId('app-modal')).toBeInTheDocument();
  });

  it("shouldn't be in the document", () => {
    renderWithAll(<AuthModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByTestId('app-modal')).not.toBeInTheDocument();
  });
});
