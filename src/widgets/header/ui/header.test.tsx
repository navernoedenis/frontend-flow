import 'shared/config/tests/mocks/match-media';
import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import Header from './header';

describe('test widgets/header', () => {
  it('should be in the document', () => {
    renderWithAll(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
