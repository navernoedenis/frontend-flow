import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import AppLink from './app-link';

describe('test shared/app-link', () => {
  test('should be in the document', () => {
    renderWithAll(<AppLink to="/">Home</AppLink>);
    expect(screen.getByTestId('app-link')).toBeInTheDocument();
  });

  test('should have aditional classname: turbo ', () => {
    renderWithAll(
      <AppLink className="turbo" to="/">
        Home
      </AppLink>,
    );
    expect(screen.getByTestId('app-link')).toHaveClass('turbo');
  });

  test('should have classname: inversed ', () => {
    renderWithAll(
      <AppLink to="/" isInversed>
        Home
      </AppLink>,
    );
    expect(screen.getByTestId('app-link')).toHaveClass('inversed');
  });
});
