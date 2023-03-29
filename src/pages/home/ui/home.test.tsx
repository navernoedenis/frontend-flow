import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';

import HomePage from './home';

describe('test pages/home', () => {
  it('should be in the document', () => {
    renderWithAll(<HomePage />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
