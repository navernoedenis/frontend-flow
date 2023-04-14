import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import Aside from './aside';

describe('test widgets/aside', () => {
  it('should be in the document', () => {
    renderWithAll(<Aside />);
    expect(screen.getByTestId('aside')).toBeInTheDocument();
  });

  it('should be open', () => {
    renderWithAll(<Aside />);
    const button = screen.getByTestId('arrow-button');

    fireEvent.click(button);
    expect(screen.getByTestId('aside')).not.toHaveClass('collapsed');
  });

  it('should be closed', () => {
    renderWithAll(<Aside />);
    expect(screen.getByTestId('aside')).toHaveClass('collapsed');
  });
});
