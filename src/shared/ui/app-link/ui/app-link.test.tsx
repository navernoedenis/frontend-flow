import { screen } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/providers';
import AppLink from './app-link';

describe('test shared/app-link', () => {
  test('be in the document', () => {
    renderWithAll(<AppLink to="/">Home</AppLink>);
    expect(screen.getByTestId('app-link')).toBeInTheDocument();
  });

  test('has classname: turbo ', () => {
    renderWithAll(
      <AppLink className="turbo" to="/">
        Home
      </AppLink>,
    );
    expect(screen.getByTestId('app-link')).toHaveClass('turbo');
  });

  test('has classname: inversed ', () => {
    renderWithAll(
      <AppLink to="/" isInversed>
        Home
      </AppLink>,
    );
    expect(screen.getByTestId('app-link')).toHaveClass('inversed');
  });
});
