import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';

import NotFoundPage from './not-found';

describe('test pages/not-found', () => {
  it('should be in the document', () => {
    renderWithAll(<NotFoundPage />);
    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
