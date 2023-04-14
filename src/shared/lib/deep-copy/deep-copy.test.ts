import { deepCopy } from './deep-copy';

describe('test shared/lib/deep-copy', () => {
  it('should make a nested copy', () => {
    const mockObject = {
      name: 'denis',
      job: {
        position: 'developer',
        secret: {
          title: 'WoW!!',
          deep: {
            value: 'Awesome!!!!',
          },
        },
      },
    };

    expect(deepCopy(mockObject)).toEqual({
      name: 'denis',
      job: {
        position: 'developer',
        secret: {
          title: 'WoW!!',
          deep: {
            value: 'Awesome!!!!',
          },
        },
      },
    });
  });
});
