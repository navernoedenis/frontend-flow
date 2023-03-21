import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import { profileMock } from 'shared/config/tests/mocks/entities';

import ProfileCard from './profile-card';

describe('test entities/profile-card', () => {
  it('should be in the document', () => {
    renderWithAll(<ProfileCard profile={profileMock} />);
    expect(screen.getByTestId('profile-card')).toBeInTheDocument();
  });
});
