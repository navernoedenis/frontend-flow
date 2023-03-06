import { render, screen } from '@testing-library/react';
import ThemeSwitcher from './theme-switcher';

describe('test shared/theme-menu', () => {
  it('should be in the document', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByTestId('theme-menu')).toBeInTheDocument();
  });
});
