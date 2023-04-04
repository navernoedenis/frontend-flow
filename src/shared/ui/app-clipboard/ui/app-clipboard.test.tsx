import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import AppClipboard from './app-clipboard';

describe('test shared/app-clipboard', () => {
  it('should be in the document', () => {
    renderWithAll(<AppClipboard text="hello world!" />);
    expect(screen.getByTestId('app-clipboard')).toBeInTheDocument();
  });
});
