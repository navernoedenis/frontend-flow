import { selectCounter } from './select-counter';
import { AppState, AppPartialState } from '../../types';

describe('test counter/select-counter', () => {
  it('should return default value', () => {
    const state: AppPartialState = {
      counter: { value: 7 },
    };

    expect(selectCounter(state as AppState)).toEqual({ value: 7 });
  });
});
