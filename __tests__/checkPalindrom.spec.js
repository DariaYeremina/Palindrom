import { checkPalindrom } from '../src/utils/checkPalindrom';
import * as resources from '../src/assets/palindroms.json';

describe('checkPalindrom function', () => {
  test('Check phrases results with function must be as marks in resources', () => {
    resources.data.forEach((el) => {
      const expectedResult = el.marker;
      const result = checkPalindrom(el.text);

      expect(result).toBe(expectedResult);
    });
  });

  test('Returns error when argument is not a string', () => {
    const argument = [];
    const expectedError = "It isn't a string!";
    const result = () => {
      checkPalindrom(argument);
    };

    expect(result).toThrowError(expectedError);
  });

  test('Returns error when argument is an empty string', () => {
    const argument = '';
    const expectedError = "It's an empty string!";
    const result = () => {
      checkPalindrom(argument);
    };

    expect(result).toThrowError(expectedError);
  });

  test('Returns false when string contains only special characters or punctuation marks', () => {
    const result = checkPalindrom('@#$%^&*()');

    expect(result).toBeFalsy();
  });
});
