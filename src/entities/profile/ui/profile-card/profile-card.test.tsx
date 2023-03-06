import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';

import { profileReducer } from '../../model/slice';
import type { Profile } from '../../model/types';

import ProfileCard from './profile-card';

describe('test entities/profile-card', () => {
  it('should be in the document', () => {
    renderWithAll(<ProfileCard />, {
      lazyReducers: { profile: profileReducer },
      preloadedState: {
        profile: {
          data: {} as Profile,
          error: '',
          isLoading: false,
        },
      },
    });

    expect(screen.queryByTestId('profile-card')).toBeInTheDocument();
  });

  it("shouldn't be in the document", () => {
    renderWithAll(<ProfileCard />);
    expect(screen.queryByTestId('profile-card')).not.toBeInTheDocument();
  });
});
