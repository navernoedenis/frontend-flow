import { screen, fireEvent } from '@testing-library/react';
import { renderWithI18n } from 'shared/config/tests/wrappers';
import Sidebar from './sidebar';

const sidebarId = 'sidebar';
const buttonId = 'app-button';

describe('test sidebar', () => {
  it('should be in the document', () => {
    renderWithI18n(<Sidebar />);
    const sidebar = screen.getByTestId(sidebarId);
    expect(sidebar).toBeInTheDocument();
  });

  it('should be opened', () => {
    renderWithI18n(<Sidebar />);
    const sidebar = screen.getByTestId(sidebarId);
    const button = screen.getByTestId(buttonId);

    fireEvent.click(button);
    expect(sidebar).toHaveClass('collapsed');
  });
});
