import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/render-with-all';

import NotFoundPage from './not-found';

describe('test pages/not-found', () => {
  it('be in the document', () => {
    renderWithAll(<NotFoundPage />);
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
