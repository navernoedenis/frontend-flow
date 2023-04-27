import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import { profileMock } from 'shared/config/tests/mocks/entities';

import ProfileForm from './profile-form';

describe('test entities/profile', () => {
  it('should be in the document', () => {
    renderWithAll(<ProfileForm profile={profileMock} />);
    expect(screen.getByTestId('profile-entity')).toBeInTheDocument();
  });
});
