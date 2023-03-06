import { screen, fireEvent } from '@testing-library/react';
import { renderWithStore } from 'shared/config/tests/wrappers';
import { counterReducer } from '../model/slice';

import Counter from './counter';

describe('test entities/counter', () => {
  it('should be in the document', () => {
    renderWithStore(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  it('should increment value', () => {
    renderWithStore(<Counter />, {
      lazyReducers: { counter: counterReducer },
      preloadedState: { counter: { value: 0 } },
    });

    const title = screen.getByTestId('title');
    const increment = screen.getByTestId('increment');

    fireEvent.click(increment);
    fireEvent.click(increment);

    expect(title.textContent).toContain('2');
  });

  it('should decrement value', () => {
    renderWithStore(<Counter />, {
      lazyReducers: { counter: counterReducer },
      preloadedState: { counter: { value: 13 } },
    });

    const title = screen.getByTestId('title');
    const decrement = screen.getByTestId('decrement');

    fireEvent.click(decrement);
    fireEvent.click(decrement);
    fireEvent.click(decrement);

    expect(title.textContent).toContain('10');
  });
});