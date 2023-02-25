import { render, screen } from '@testing-library/react';
import AppButton from './app-button';

describe('test shared/app-button', () => {
  it('should be in the document', () => {
    render(<AppButton />);
    expect(screen.getByTestId('app-button')).toBeInTheDocument();
    expect(screen.getByTestId('app-button')).toHaveClass('medium');
  });

  it('should have classname: large', () => {
    render(<AppButton size="large" />);
    expect(screen.getByTestId('app-button')).toHaveClass('large');
  });

  it('should have classname: square', () => {
    render(<AppButton isSquare />);
    expect(screen.getByTestId('app-button')).toHaveClass('square');
  });
});
