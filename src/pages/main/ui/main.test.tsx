import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import Main from './main';

describe('test pages/main', () => {
  it('should be in the document', () => {
    renderWithAll(<Main />);
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
});
