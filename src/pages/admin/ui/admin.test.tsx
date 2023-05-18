import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';

import AdminPage from './admin';

describe('test pages/admin', () => {
  it('be in the document', () => {
    renderWithAll(<AdminPage />);
    expect(screen.getByTestId('admin-page')).toBeInTheDocument();
  });
});
