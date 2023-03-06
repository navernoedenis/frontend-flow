import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';

import Counter from './counter';

describe('test pages/counter', () => {
  it('should be in the document', async () => {
    renderWithAll(<Counter />);
    expect(screen.getByTestId('counter-page')).toBeInTheDocument();
  });
});
