import { classNames } from './class-names';

describe('test shared/lib/class-names', () => {
  it('simple class name', () => {
    const expected = 'app';
    expect(classNames(expected)).toBe(expected);
  });

  it('one additional param', () => {
    const expected = 'app banana';
    expect(classNames('app', { banana: true, cucumber: false })).toBe(expected);
  });

  it('three additional params', () => {
    const expected = 'app dog flower';
    expect(
      classNames('app', {
        car: undefined,
        dog: true,
        flower: true,
        sky: null,
      }),
    ).toBe(expected);
  });
});
