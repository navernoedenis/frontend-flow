import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import Auth from './auth';

describe('test features/auth', () => {
  it('should be in the document', () => {
    renderWithAll(<Auth />);
    expect(screen.getByTestId('auth')).toBeInTheDocument();
  });
});
