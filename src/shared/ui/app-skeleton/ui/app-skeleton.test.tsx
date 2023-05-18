import { render, screen } from '@testing-library/react';
import AppSkeleton from './app-skeleton';

describe('test shared/app-skeleton', () => {
  it('be in the document', () => {
    render(<AppSkeleton />);
    expect(screen.getByTestId('app-skeleton')).toBeInTheDocument();
  });

  it('has classname: awesome', () => {
    render(<AppSkeleton className="awesome" />);
    expect(screen.getByTestId('app-skeleton')).toHaveClass('awesome');
  });

  it('has style: color:red', () => {
    render(<AppSkeleton style={{ color: 'red' }} />);
    expect(screen.getByTestId('app-skeleton')).toHaveStyle({ color: 'red' });
  });
});
