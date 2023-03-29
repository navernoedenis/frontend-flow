import { screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/config/tests/wrappers';
import AppLink from './app-link';

describe('test shared/app-link', () => {
  test('should be in the document', () => {
    renderWithRouter(<AppLink to="/">Home</AppLink>);
    expect(screen.getByTestId('app-link')).toBeInTheDocument();
  });

  test('should have aditional classname: turbo ', () => {
    renderWithRouter(
      <AppLink className="turbo" to="/">
        Home
      </AppLink>,
    );
    expect(screen.getByTestId('app-link')).toHaveClass('turbo');
  });

  test('should have classname: inversed ', () => {
    renderWithRouter(
      <AppLink to="/" isInversed>
        Home
      </AppLink>,
    );
    expect(screen.getByTestId('app-link')).toHaveClass('inversed');
  });
});
