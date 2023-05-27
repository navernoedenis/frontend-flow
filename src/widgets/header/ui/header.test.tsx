import { screen } from '@testing-library/react';
import { matchMedia } from '@/shared/config/jest/mocks/dom';
import { renderWithAll } from '@/shared/config/jest/providers';

import Header from './header';

matchMedia();

describe('test widgets/header', () => {
  it('should be in the document', () => {
    renderWithAll(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
