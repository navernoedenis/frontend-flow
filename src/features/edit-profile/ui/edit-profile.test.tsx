import { screen } from '@testing-library/react';

import { renderWithAll } from 'shared/config/tests/wrappers';
import { profileMock } from 'shared/config/tests/mocks/entities';

import EditProfile from './edit-profile';

describe('test features/edit-profile', () => {
  it('should be in the document', () => {
    renderWithAll(<EditProfile />, {
      profile: { isLoading: false, error: '', data: profileMock },
    });
    expect(screen.getByTestId('edit-profile')).toBeInTheDocument();
  });
});
