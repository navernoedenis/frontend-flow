import { render, screen } from '@testing-library/react';
import AppLoader from './app-loader';

const loaderId = 'app-loader';

describe('test AppLoader', () => {
  it('should be in the document', () => {
    render(<AppLoader />);
    expect(screen.getByTestId(loaderId)).toBeInTheDocument();
  });
});
