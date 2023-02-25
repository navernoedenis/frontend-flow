import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './text-field';

describe('test shared/text-field', () => {
  it('should be in the document', () => {
    render(<TextField title="" />);
    expect(screen.getByTestId('text-field')).toBeInTheDocument();
  });

  it('should set title', () => {
    render(<TextField title="Jest!!!" />);
    expect(screen.getByTestId('title').textContent).toBe('Jest!!!');
  });

  it('should change input value', () => {
    render(<TextField title="" />);
    const input = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'jest' } });

    expect(input.value).toBe('jest');
  });

  it('should be error message', () => {
    render(<TextField title="" error="Oops!... " />);
    expect(screen.getByTestId('error')).toBeInTheDocument();
  });

  it("shouldn't be error message", () => {
    render(<TextField title="" />);
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
  });
});
