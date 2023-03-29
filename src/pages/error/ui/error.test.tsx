import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';

import ErrorPage from './error';

describe('test pages/error', () => {
  it('should be in the document', () => {
    renderWithAll(<ErrorPage />);
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
