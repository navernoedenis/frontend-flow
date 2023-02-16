import { screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/config/tests/wrappers';
import Header from './header';

const headerId = 'header';

describe('test header', () => {
  it('should be in the document', () => {
    renderWithRouter(<Header />);
    const header = screen.getByTestId(headerId);
    expect(header).toBeInTheDocument();
  });
});
