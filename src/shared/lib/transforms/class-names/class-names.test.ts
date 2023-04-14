import { classNames } from './class-names';

describe('test shared/lib/class-names', () => {
  it('simple class name', () => {
    expect(classNames('app')).toBe('app');
  });

  it('one additional param', () => {
    const classes = classNames('app', {
      banana: true,
      cucumber: false,
    });

    expect(classes).toBe('app banana');
  });

  it('three additional params', () => {
    const classes = classNames('app', {
      car: undefined,
      dog: true,
      flower: true,
      sky: null,
    });

    expect(classes).toBe('app dog flower');
  });
});
