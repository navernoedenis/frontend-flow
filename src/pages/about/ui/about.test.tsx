import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import About from './about';

describe('test pages/about', () => {
  it('should be in the document', () => {
    renderWithAll(<About />);
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});
