import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/providers';

import ProfilePage from './profile';

describe('test pages/profile', () => {
  it('be in the document', async () => {
    renderWithAll(<ProfilePage />);
    expect(screen.getByTestId('profile-page')).toBeInTheDocument();
  });
});
