import { screen } from '@testing-library/react';
import { mockMatchMedia } from 'shared/config/tests/mocks/dom';
import { renderWithAll } from 'shared/config/tests/rtl';

import Header from './header';

mockMatchMedia();

describe('test widgets/header', () => {
  it('should be in the document', () => {
    renderWithAll(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
