import { render, screen } from '@testing-library/react';
import LazyImage from './lazy-image';

describe('test shared/lazy-image', () => {
  it('be in the document', () => {
    render(<LazyImage src="" />);
    expect(screen.getByTestId('lazy-image')).toBeInTheDocument();
  });
});
