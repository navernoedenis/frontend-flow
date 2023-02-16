import { render, screen } from '@testing-library/react';
import PageLoader from './page-loader';

const loaderId = 'page-loader';

describe('test PageLoader', () => {
  test('should be in the document', () => {
    render(<PageLoader />);
    expect(screen.getByTestId(loaderId)).toBeInTheDocument();
  });
});
