import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import Auth from './auth';

describe('test features/auth', () => {
  it('should be in the document', () => {
    renderWithAll(<Auth />);
    expect(screen.getByTestId('auth')).toBeInTheDocument();
  });

  it('error message: exist', () => {
    renderWithAll(<Auth />, { auth: { error: 'Error' } });
    expect(screen.getByTestId('error')).toBeInTheDocument();
  });

  it("error message: doesn't exist", () => {
    renderWithAll(<Auth />);
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
  });

  it('reset button: active', () => {
    renderWithAll(<Auth />);

    const name = screen.getByTestId('name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'test' } });

    expect(screen.getByTestId('reset')).not.toHaveAttribute('disabled', true);
  });

  it('submit button: active', () => {
    renderWithAll(<Auth />);

    const name = screen.getByTestId('name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'name' } });

    const password = screen.getByTestId('password') as HTMLInputElement;
    fireEvent.change(password, { target: { value: 'password' } });

    expect(screen.getByTestId('submit')).not.toHaveAttribute('disabled', true);
  });

  it('reset and submit buttons: disabled', () => {
    renderWithAll(<Auth />);
    expect(screen.getByTestId('reset')).toBeDisabled();
    expect(screen.getByTestId('submit')).toBeDisabled();
  });
});
