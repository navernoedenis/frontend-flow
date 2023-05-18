import { render, screen } from '@testing-library/react';
import AppLoader from './app-loader';

describe('test shared/app-loader', () => {
  it('be in the document', () => {
    render(<AppLoader />);
    expect(screen.getByTestId('app-loader')).toBeInTheDocument();
  });
});
