import type { AppState } from 'app/providers/store';
import { selectCountertValue } from './select-counter-value';

describe('test entities/counter/select-convalue', () => {
  it('should return: default value', () => {
    const state = {} as AppState;
    expect(selectCountertValue(state)).toBe(0);
  });

  it('should return: 44', () => {
    const state = { counter: { value: 44 } } as AppState;
    expect(selectCountertValue(state)).toBe(44);
  });
});
