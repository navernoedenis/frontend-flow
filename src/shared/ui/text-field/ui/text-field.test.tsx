import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './text-field';

describe('test shared/text-field', () => {
  it('be in the document', () => {
    render(<TextField />);
    expect(screen.getByTestId('text-field')).toBeInTheDocument();
  });

  it('show title', () => {
    render(<TextField title="Jest!!!" />);
    expect(screen.getByTestId('text-field-title').textContent).toBe('Jest!!!');
  });

  it('change input value', () => {
    render(<TextField />);
    const input = screen.getByTestId('text-field-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'jest' } });
    expect(input.value).toBe('jest');
  });

  it('show error message', () => {
    render(<TextField error="Oops!... " />);
    expect(screen.getByTestId('text-field-error')).toBeInTheDocument();
  });

  it('hide error message', () => {
    render(<TextField />);
    expect(screen.queryByTestId('text-field-error')).not.toBeInTheDocument();
  });
});
