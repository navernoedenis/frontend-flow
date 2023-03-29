import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';

import CounterPage from './counter';

describe('test pages/counter', () => {
  it('should be in the document', () => {
    renderWithAll(<CounterPage />);
    expect(screen.getByTestId('counter-page')).toBeInTheDocument();
  });
});
