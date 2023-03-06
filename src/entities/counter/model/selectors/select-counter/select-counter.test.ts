import { selectCounter } from './select-counter';
import { AppState } from 'app/providers/store';

describe('test entities/counter/select-counter', () => {
  it('should return: null', () => {
    const state = {} as AppState;
    expect(selectCounter(state)).toBe(null);
  });

  it('should return: value 8', () => {
    const state = { counter: { value: 8 } } as AppState;
    expect(selectCounter(state)).toEqual({ value: 8 });
  });
});
