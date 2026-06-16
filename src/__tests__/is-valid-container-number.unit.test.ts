import { describe, it, expect } from 'vitest';

import { isValidContainerNumber } from '../index.js';

describe('isValidContainerNumber', () => {
  it.each(['CSQU3054383', 'TRHU6818210', 'MSKU7572451'])(
    'returns true for valid container number %s',
    (containerNumber) => {
      expect(isValidContainerNumber(containerNumber)).toBe(true);
    },
  );

  it('accepts lowercase input', () => {
    expect(isValidContainerNumber('csqu3054383')).toBe(true);
  });

  it.each([
    ['CSQU3054382', 'wrong check digit'],
    ['TRHU6818219', 'wrong check digit when mod-11 remainder is 10'],
    ['CSQT3054383', 'invalid equipment category letter'],
    ['CSQUT054383', 'wrong length'],
    ['1SQUJ054383', 'invalid owner prefix'],
    ['TSQU054383', 'wrong length'],
  ])('returns false for invalid container number %s (%s)', (containerNumber) => {
    expect(isValidContainerNumber(containerNumber)).toBe(false);
  });
});
