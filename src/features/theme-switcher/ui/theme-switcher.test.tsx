import { fireEvent, screen } from '@testing-library/react';
import { matchMedia } from '@/shared/config/jest/mocks/dom';

import { renderWithAll } from '@/shared/config/jest/render-with-all';
import ThemeSwitcher from './theme-switcher';

matchMedia();

describe('test shared/theme-menu', () => {
  it('be in the document', () => {
    renderWithAll(<ThemeSwitcher />);
    expect(screen.getByTestId('theme-menu')).toBeInTheDocument();
  });

  it('isinversed property works', () => {
    renderWithAll(<ThemeSwitcher isInversed />);
    expect(screen.getByTestId('theme-menu')).toHaveClass('inversed');
  });

  it('show dropdown menu', () => {
    renderWithAll(<ThemeSwitcher />);
    fireEvent.click(screen.getByTestId('theme-menu'));
    expect(screen.queryByTestId('dropdown')).toBeInTheDocument();
  });

  it('hidden dropdown menu', () => {
    renderWithAll(<ThemeSwitcher />);
    expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
  });
});
