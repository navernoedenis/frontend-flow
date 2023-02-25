import { render, screen } from '@testing-library/react';
import PageLoader from './page-loader';

describe('test shared/page-lsoader', () => {
  test('should be in the document', () => {
    render(<PageLoader />);
    expect(screen.getByTestId('page-loader')).toBeInTheDocument();
  });
});
