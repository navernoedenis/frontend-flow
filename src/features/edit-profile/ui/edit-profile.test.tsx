import { screen } from '@testing-library/react';

import { renderWithAll } from 'shared/config/tests/wrappers';
import { profileMock } from 'shared/config/tests/mocks/entities';

import EditProfile from './edit-profile';
import { profileReducer } from '../model/slice';

describe('test features/edit-profile', () => {
  it('should be in the document', () => {
    renderWithAll(<EditProfile />, {
      lazyReducers: { profile: profileReducer },
      preloadedState: {
        profile: { isLoading: false, error: '', data: profileMock },
      },
    });
    expect(screen.getByTestId('edit-profile')).toBeInTheDocument();
  });

  it("shouldn't be in the document", () => {
    renderWithAll(<EditProfile />, {
      lazyReducers: { profile: profileReducer },
      preloadedState: {
        profile: { isLoading: false, error: '', data: null },
      },
    });
    expect(screen.queryByTestId('edit-profile')).not.toBeInTheDocument();
  });
});
