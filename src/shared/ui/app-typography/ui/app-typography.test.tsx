import { fireEvent, render, screen } from '@testing-library/react';
import AppTypography from './app-typography';

describe('test shared/app-typography', () => {
  it('be in the document', () => {
    render(<AppTypography children="text" />);
    expect(screen.getByTestId('app-typography')).toBeInTheDocument();
  });

  it('has classname: over-and-over', () => {
    render(<AppTypography className="over-and-over" children="" />);
    expect(screen.getByTestId('app-typography')).toHaveClass('over-and-over');
  });

  it('error property works', () => {
    render(<AppTypography children="text" error />);
    expect(screen.getByTestId('app-typography')).toHaveClass('error');
  });

  it('capitalize property works', () => {
    render(<AppTypography children="text" capitalize />);
    expect(screen.getByTestId('app-typography')).toHaveClass('capitalize');
  });

  it('capitalizeFirstLetter property works', () => {
    render(<AppTypography children="text" capitalizeFirstLetter />);
    expect(screen.getByTestId('app-typography')).toHaveClass(
      'capitalizeFirstLetter',
    );
  });

  it('inversed property works', () => {
    render(<AppTypography children="text" inversed />);
    expect(screen.getByTestId('app-typography')).toHaveClass('inversed');
  });

  it('noshrink property works', () => {
    render(<AppTypography children="text" noShrink />);
    expect(screen.getByTestId('app-typography')).toHaveClass('noShrink');
  });

  it('uppercase property works', () => {
    render(<AppTypography children="text" uppercase />);
    expect(screen.getByTestId('app-typography')).toHaveClass('uppercase');
  });

  it('set size: large', () => {
    render(<AppTypography children="text" size="large" />);
    expect(screen.getByTestId('app-typography')).toHaveClass('size-large');
  });

  it('set tagname: span', () => {
    render(<AppTypography children="text" tag="span" />);
    expect(screen.getByTestId('app-typography').tagName).toBe('SPAN');
  });

  it('set weight: heavy', () => {
    render(<AppTypography children="text" weight="heavy" />);
    expect(screen.getByTestId('app-typography')).toHaveClass('weight-heavy');
  });

  it('callback works', () => {
    const onClick = jest.fn();
    render(<AppTypography children="text" onClick={onClick} />);
    const container = screen.getByTestId('app-typography');
    fireEvent.click(container);
    expect(onClick).toHaveBeenCalled();
  });
});
