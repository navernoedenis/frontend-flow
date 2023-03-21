import { screen, fireEvent } from '@testing-library/react';
import { renderWithI18n } from 'shared/config/tests/wrappers';
import LanguageSwitcher from './language-switcher';

describe('test shared/language-switcher', () => {
  it('should be in the document', () => {
    renderWithI18n(<LanguageSwitcher />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });

  it('add: additional classname', () => {
    renderWithI18n(<LanguageSwitcher className="test-1" />);
    expect(screen.getByTestId('language-switcher')).toHaveClass('test-1');
  });

  it('toggle: language', () => {
    renderWithI18n(<LanguageSwitcher />);

    const initialLanguage = screen.getByTestId('language-switcher').textContent;
    fireEvent.click(screen.getByTestId('language-switcher'));

    const currentLanguage = screen.getByTestId('language-switcher').textContent;
    expect(initialLanguage).not.toBe(currentLanguage);
  });
});
