import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import { profileMock } from 'shared/config/tests/mocks/entities';

import ProfileEntity from './profile';

describe('test entities/profile', () => {
  it('should be in the document', () => {
    renderWithAll(<ProfileEntity profile={profileMock} />);
    expect(screen.getByTestId('profile-entity')).toBeInTheDocument();
  });
});
