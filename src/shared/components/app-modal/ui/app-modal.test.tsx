import { render, screen } from '@testing-library/react';
import AppModal from './app-modal';

describe('test shared/app-modal', () => {
  it('should be in the document', () => {
    render(<AppModal isOpen={true} onClose={() => {}} children="" />);
    expect(screen.queryByTestId('app-modal')).toBeInTheDocument();
  });

  it("shouldn't be in the document", () => {
    render(<AppModal isOpen={false} onClose={() => {}} children="" />);
    expect(screen.queryByTestId('app-modal')).not.toBeInTheDocument();
  });
});
