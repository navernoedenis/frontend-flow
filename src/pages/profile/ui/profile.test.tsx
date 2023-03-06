import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';

import Profile from './profile';

describe('test pages/profile', () => {
  it('should be in the document', async () => {
    await act(() => renderWithAll(<Profile />));
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });
});
