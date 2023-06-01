import { capitalizeFirstLetter } from './capitalize-first-letter';

describe('test shared/lib/capitalize-first-letter', () => {
  it('first letter is capitalize', () => {
    expect(capitalizeFirstLetter('hello world!')).toBe('Hello world!');
  });
});
