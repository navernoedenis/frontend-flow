import { screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/config/tests/wrappers';
import AppLink from './app-link';

const linkId = 'app-link';

describe('test AppLink', () => {
  test('should be in the document', () => {
    renderWithRouter(<AppLink to="/">Home</AppLink>);
    expect(screen.getByTestId(linkId)).toBeInTheDocument();
  });

  test('should have aditional classname: turbo ', () => {
    renderWithRouter(
      <AppLink className="turbo" to="/">
        Home
      </AppLink>,
    );
    expect(screen.getByTestId(linkId)).toHaveClass('turbo');
  });

  test('should have classname: inversed ', () => {
    renderWithRouter(
      <AppLink to="/" isInversed>
        Home
      </AppLink>,
    );
    expect(screen.getByTestId(linkId)).toHaveClass('inversed');
  });
});
