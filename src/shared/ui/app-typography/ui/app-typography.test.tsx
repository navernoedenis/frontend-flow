import { render, screen } from '@testing-library/react';
import AppTypography from './app-typography';

describe('test shared/app-typography', () => {
  it('should be in the document', () => {
    render(<AppTypography>Test</AppTypography>);
    expect(screen.getByTestId('app-typography')).toBeInTheDocument();
  });
});
