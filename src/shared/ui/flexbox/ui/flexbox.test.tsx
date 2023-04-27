import { render, screen } from '@testing-library/react';
import Flexbox from './flexbox';

describe('test shared/flexbox', () => {
  it('should be in the document', () => {
    render(<Flexbox children />);
    expect(screen.getByTestId('flexbox')).toBeInTheDocument();
  });

  it('have className: additional', () => {
    render(<Flexbox className="additional" children />);
    expect(screen.getByTestId('flexbox')).toHaveClass('additional');
  });
});
