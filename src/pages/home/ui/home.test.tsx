import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import Home from './home';

describe('test pages/home', () => {
  it('should be in the document', () => {
    renderWithAll(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
