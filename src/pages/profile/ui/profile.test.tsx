import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';

import ProfilePage from './profile';

describe('test pages/profile', () => {
  it('should be in the document', async () => {
    await act(() => renderWithAll(<ProfilePage />));
    expect(screen.getByTestId('profile-page')).toBeInTheDocument();
  });
});
