import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/render-with-all';
import AuthCard from './auth-card';

describe('test features/auth-card', () => {
  it('be in the document', () => {
    renderWithAll(<AuthCard />);
    expect(screen.getByTestId('auth-card')).toBeInTheDocument();
  });

  it('show error message: exist', () => {
    renderWithAll(<AuthCard />, { user: { error: 'Error' } });
    expect(screen.getByTestId('auth-card.error')).toBeInTheDocument();
  });

  it("show error message: doesn't exist", () => {
    renderWithAll(<AuthCard />);
    expect(screen.queryByTestId('auth-card.error')).not.toBeInTheDocument();
  });

  it('reset button is active', () => {
    renderWithAll(<AuthCard />);
    const name = screen.getByTestId('auth-card.name-field') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'test' } });
    expect(screen.getByTestId('auth-card.reset-button')).not.toHaveAttribute(
      'disabled',
      true,
    );
  });

  it('submit button is active', () => {
    renderWithAll(<AuthCard />);
    const name = screen.getByTestId('auth-card.name-field') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'name' } });

    const password = screen.getByTestId('auth-card.password-field') as HTMLInputElement;
    fireEvent.change(password, { target: { value: 'password' } });
    expect(screen.getByTestId('auth-card.submit-button')).not.toHaveAttribute(
      'disabled',
      true,
    );
  });

  it('reset and submit buttons are disabled', () => {
    renderWithAll(<AuthCard />);
    expect(screen.getByTestId('auth-card.reset-button')).toBeDisabled();
    expect(screen.getByTestId('auth-card.submit-button')).toBeDisabled();
  });
});
