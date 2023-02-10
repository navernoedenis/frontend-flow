import { classNames } from './';

describe('classNames function', () => {
  it('simple class name', () => {
    const expected = 'app';
    expect(classNames(expected)).toBe(expected);
  });

  it('one additional param', () => {
    const expected = 'app case1';
    expect(classNames('app', { case1: true, case2: false })).toBe(expected);
  });

  it('three additional params', () => {
    const expected = 'app case2 case3';
    expect(
      classNames('app', {
        case1: undefined,
        case2: true,
        case3: true,
        case4: null,
      })
    ).toBe(expected);
  });
});
