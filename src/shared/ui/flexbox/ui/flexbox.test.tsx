import { render, screen } from '@testing-library/react';
import Flexbox from './flexbox';

describe('test shared/flexbox', () => {
  it('be in the document', () => {
    render(<Flexbox children />);
    expect(screen.getByTestId('flexbox')).toBeInTheDocument();
  });

  it('has classname: hello', () => {
    render(<Flexbox className="hello" children />);
    expect(screen.getByTestId('flexbox')).toHaveClass('hello');
  });

  it('set align: end', () => {
    render(<Flexbox alignItems="end" children />);
    expect(screen.getByTestId('flexbox')).toHaveClass('align-items-end');
  });

  it('set direction: column-reverse', () => {
    render(<Flexbox direction="column-reverse" children />);
    expect(screen.getByTestId('flexbox')).toHaveClass(
      'direction-column-reverse',
    );
  });

  it('set gap: 30', () => {
    render(<Flexbox gap="30" children />);
    expect(screen.getByTestId('flexbox')).toHaveClass('gap-30');
  });

  it('set justifycontent: between', () => {
    render(<Flexbox justifyContent="between" children />);
    expect(screen.getByTestId('flexbox')).toHaveClass('justify-between');
  });

  it('set tagname: p', () => {
    render(<Flexbox tag="p" children />);
    expect(screen.getByTestId('flexbox').tagName).toBe('P');
  });

  it('noshrink property works', () => {
    render(<Flexbox noShrink children />);
    expect(screen.getByTestId('flexbox')).toHaveClass('noshrink');
  });

  it('wrap property works', () => {
    render(<Flexbox wrap children />);
    expect(screen.getByTestId('flexbox')).toHaveClass('wrap');
  });
});
