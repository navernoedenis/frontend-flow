import { screen } from '@testing-library/react';
import { profileStateMock } from '@/features/edit-profile';
import { adminUserMock, userMock } from '@/entities/user';
import { renderWithAll } from '@/shared/config/jest/render-with-all';

import EditProfile from './edit-profile';

describe('test features/edit-profile', () => {
  it('be in the document', () => {
    renderWithAll(<EditProfile />, { profile: profileStateMock });
    expect(screen.getByTestId('edit-profile')).toBeInTheDocument();
  });

  it('show skeleton on loading', () => {
    renderWithAll(<EditProfile />, {
      profile: { ...profileStateMock, isLoading: true },
    });
    expect(screen.getByTestId('profile-skeleton')).toBeInTheDocument();
  });

  it('show error message', () => {
    const errorMessage = 'something went wrong...';
    renderWithAll(<EditProfile />, {
      profile: { ...profileStateMock, error: errorMessage },
    });
    const error = screen.getByTestId('edit-profile-error');
    expect(error).toBeInTheDocument();
    expect(error.textContent).toBe(errorMessage);
  });

  it('hide error message', () => {
    renderWithAll(<EditProfile />, { profile: profileStateMock });
    expect(screen.queryByTestId('edit-profile-error')).not.toBeInTheDocument();
  });

  it('show edit buttons if my profile', async () => {
    renderWithAll(<EditProfile />, {
      user: { auth: userMock },
      profile: profileStateMock,
    });
    expect(screen.getByTestId('edit-buttons')).toBeInTheDocument();
  });

  it('hide edit buttons if not my profile', () => {
    renderWithAll(<EditProfile />, {
      user: { auth: adminUserMock },
      profile: profileStateMock,
    });
    expect(screen.queryByTestId('edit-buttons')).not.toBeInTheDocument();
  });
});
