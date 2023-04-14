import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';

import NetworkStatus from './network-status';

describe('test widgets/network-status', () => {
  it('should be in the document', () => {
    renderWithAll(<NetworkStatus />, { networkStatus: { isOnline: false } });
    expect(screen.queryByTestId('network-status')).toBeInTheDocument();
  });

  it("shouldn't be in the document", () => {
    renderWithAll(<NetworkStatus />, { networkStatus: { isOnline: true } });
    expect(screen.queryByTestId('network-status')).not.toBeInTheDocument();
  });
});
