import { screen, fireEvent } from '@testing-library/react';
import { renderWithI18n } from 'shared/config/tests/wrappers';
import Sidebar from './sidebar';

describe('test widgets/sidebar', () => {
  it('should be in the document', () => {
    renderWithI18n(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should be opened', () => {
    renderWithI18n(<Sidebar />);
    const button = screen.getByTestId('app-button');

    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
