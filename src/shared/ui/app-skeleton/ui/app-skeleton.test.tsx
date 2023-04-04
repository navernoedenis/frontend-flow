import { render, screen } from '@testing-library/react';
import AppSkeleton from './app-skeleton';

describe('test shared/app-skeleton', () => {
  it('should be in the document', () => {
    render(<AppSkeleton />);
    expect(screen.getByTestId('app-skeleton')).toBeInTheDocument();
  });
});
