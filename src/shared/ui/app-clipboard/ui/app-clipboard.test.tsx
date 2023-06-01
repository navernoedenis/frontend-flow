import { screen, fireEvent } from '@testing-library/react';

import { renderWithAll } from '@/shared/config/jest/render-with-all';
import AppClipboard from './app-clipboard';

describe('test shared/app-clipboard', () => {
  it('be in the document', () => {
    renderWithAll(<AppClipboard text="hello world!" />);
    expect(screen.getByTestId('app-clipboard')).toBeInTheDocument();
  });

  it('has classname: tiny', () => {
    renderWithAll(<AppClipboard className="tiny" text="hello world!" />);
    expect(screen.getByTestId('app-clipboard')).toHaveClass('tiny');
  });

  it('copy passed text', async () => {
    Object.assign(window.navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    renderWithAll(<AppClipboard text="hello world!" />);
    const button = screen.getByTestId('app-clipboard-copy');
    fireEvent.click(button);

    expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith(
      'hello world!',
    );
  });
});
