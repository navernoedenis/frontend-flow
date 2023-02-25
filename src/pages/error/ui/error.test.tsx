import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import Error from './error';

describe('test pages/error', () => {
  it('should be in the document', () => {
    renderWithAll(<Error />);
    expect(screen.getByTestId('error')).toBeInTheDocument();
  });
});
