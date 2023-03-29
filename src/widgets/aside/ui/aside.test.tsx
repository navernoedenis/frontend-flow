import { screen, fireEvent } from '@testing-library/react';
import { renderWithI18n } from 'shared/config/tests/wrappers';
import Aside from './aside';

describe('test widgets/aside', () => {
  it('should be in the document', () => {
    renderWithI18n(<Aside />);
    expect(screen.getByTestId('aside')).toBeInTheDocument();
  });

  it('should be open', () => {
    renderWithI18n(<Aside />);
    const button = screen.getByTestId('arrow-button');

    fireEvent.click(button);
    expect(screen.getByTestId('aside')).not.toHaveClass('collapsed');
  });

  it('should be closed', () => {
    renderWithI18n(<Aside />);
    expect(screen.getByTestId('aside')).toHaveClass('collapsed');
  });
});
