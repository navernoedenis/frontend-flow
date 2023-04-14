import { mockMatchMedia } from 'shared/config/tests/mocks/dom';
import { screen } from '@testing-library/react';

import { renderWithAll } from 'shared/config/tests/rtl';
import ThemeSwitcher from './theme-switcher';

mockMatchMedia();

describe('test shared/theme-menu', () => {
  it('should be in the document', () => {
    renderWithAll(<ThemeSwitcher />);
    expect(screen.getByTestId('theme-menu')).toBeInTheDocument();
  });
});
