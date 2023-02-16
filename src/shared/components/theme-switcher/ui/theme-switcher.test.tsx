import { render, screen } from '@testing-library/react';
import ThemeSwitcher from './theme-switcher';

const switcherId = 'theme-switcher';

describe('test ThemeSwitcher', () => {
  it('should be in the document', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByTestId(switcherId)).toBeInTheDocument();
  });
});
