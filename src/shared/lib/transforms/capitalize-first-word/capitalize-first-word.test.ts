import { capitalizeFirstWord } from './capitalize-first-word';

describe('test shared/lib/transforms/capitalize-first-word', () => {
  it('should return capitalize first word', () => {
    expect(capitalizeFirstWord('hello world!')).toBe('Hello world!');
  });
});
