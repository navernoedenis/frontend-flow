import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import LanguageSwitcher from './language-switcher';

describe('test shared/language-switcher', () => {
  it('be in the document', () => {
    renderWithAll(<LanguageSwitcher />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });

  it('has classname: over', () => {
    renderWithAll(<LanguageSwitcher className="over" />);
    expect(screen.getByTestId('language-switcher')).toHaveClass('over');
  });

  it('toggle language', () => {
    renderWithAll(<LanguageSwitcher />);
    const initialLanguage = screen.getByTestId('language-switcher').textContent;
    fireEvent.click(screen.getByTestId('language-switcher'));

    const currentLanguage = screen.getByTestId('language-switcher').textContent;
    expect(initialLanguage).not.toBe(currentLanguage);
  });
});
