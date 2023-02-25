import { selectCountertValue } from './select-value';
import { AppState, AppPartialState } from '../../types';

describe('test counter/select-value', () => {
  it('should return default value', () => {
    const state: AppPartialState = {
      counter: { value: 22 },
    };

    expect(selectCountertValue(state as AppState)).toBe(22);
  });
});
