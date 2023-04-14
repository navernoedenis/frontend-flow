import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import LanguageSwitcher from './language-switcher';

describe('test shared/language-switcher', () => {
  it('should be in the document', () => {
    renderWithAll(<LanguageSwitcher />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });

  it('add: has additional className', () => {
    renderWithAll(<LanguageSwitcher className="test-1" />);
    expect(screen.getByTestId('language-switcher')).toHaveClass('test-1');
  });

  it('toggle: language', () => {
    renderWithAll(<LanguageSwitcher />);

    const initialLanguage = screen.getByTestId('language-switcher').textContent;
    fireEvent.click(screen.getByTestId('language-switcher'));

    const currentLanguage = screen.getByTestId('language-switcher').textContent;
    expect(initialLanguage).not.toBe(currentLanguage);
  });
});
