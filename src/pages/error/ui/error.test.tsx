import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/render-with-all';

import ErrorPage from './error';

describe('test pages/error', () => {
  it('be in the document', () => {
    renderWithAll(<ErrorPage />);
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
