import { render, screen } from '@testing-library/react';
import AppModal from './app-modal';

describe('test shared/app-modal', () => {
  it('be in the document', () => {
    render(<AppModal isOpen={true} onClose={Function} children="" />);
    expect(screen.queryByTestId('app-modal')).toBeInTheDocument();
  });

  it('not be in the document', () => {
    render(<AppModal isOpen={false} onClose={Function} children="" />);
    expect(screen.queryByTestId('app-modal')).not.toBeInTheDocument();
  });
});
