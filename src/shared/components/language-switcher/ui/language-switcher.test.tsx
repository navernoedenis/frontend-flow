import { screen, fireEvent } from '@testing-library/react';
import { renderWithI18n } from 'shared/config/tests/wrappers';
import LanguageSwitcher from './language-switcher';

const switcherId = 'language-switcher';

describe('test LanguageSwitcher', () => {
  it('should be in the document', () => {
    renderWithI18n(<LanguageSwitcher />);

    expect(screen.getByTestId(switcherId)).toBeInTheDocument();
  });

  it('should have additional classname', () => {
    renderWithI18n(<LanguageSwitcher className="test-1" />);
    expect(screen.getByTestId(switcherId)).toHaveClass('test-1');
  });

  it('should switch language', () => {
    renderWithI18n(<LanguageSwitcher />);

    const initialLanguage = screen.getByTestId(switcherId).textContent;
    fireEvent.click(screen.getByTestId(switcherId));
    const currentLanguage = screen.getByTestId(switcherId).textContent;

    expect(initialLanguage).not.toBe(currentLanguage);
  });
});
