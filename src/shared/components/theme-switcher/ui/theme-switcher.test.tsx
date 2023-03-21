import 'shared/config/tests/mocks/match-media';
import { screen } from '@testing-library/react';
import { renderWithI18n } from 'shared/config/tests/wrappers';
import ThemeSwitcher from './theme-switcher';

describe('test shared/theme-menu', () => {
  it('should be in the document', () => {
    renderWithI18n(<ThemeSwitcher />);
    expect(screen.getByTestId('theme-menu')).toBeInTheDocument();
  });
});
