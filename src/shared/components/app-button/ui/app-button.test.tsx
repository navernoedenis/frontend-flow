import { render, screen } from '@testing-library/react';
import AppButton from './app-button';

const buttonId = 'app-button';

describe('test AppButton', () => {
  it('should be in the document', () => {
    render(<AppButton />);
    expect(screen.getByTestId(buttonId)).toBeInTheDocument();
    expect(screen.getByTestId(buttonId)).toHaveClass('medium');
  });

  it('should have classname: large', () => {
    render(<AppButton size="large" />);
    expect(screen.getByTestId(buttonId)).toHaveClass('large');
  });

  it('should have classname: square', () => {
    render(<AppButton isSquare />);
    expect(screen.getByTestId(buttonId)).toHaveClass('square');
  });
});
