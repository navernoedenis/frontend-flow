import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';

import HomePage from './home';

describe('test pages/home', () => {
  it('be in the document', () => {
    renderWithAll(<HomePage />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
