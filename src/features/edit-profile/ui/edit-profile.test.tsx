import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import { profileStateMock } from 'shared/config/tests/mocks/states';

import EditProfile from './edit-profile';

describe('test features/edit-profile', () => {
  it('should be in the document', () => {
    renderWithAll(<EditProfile />, {
      profile: profileStateMock,
    });
    expect(screen.getByTestId('edit-profile')).toBeInTheDocument();
  });
});
