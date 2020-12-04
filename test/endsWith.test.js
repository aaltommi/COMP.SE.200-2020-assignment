/**
 * Checks if `string` ends with the given target string.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @see includes, startsWith
 * @example
 *
 * endsWith('abc', 'c')
 * // => true
 *
 * endsWith('abc', 'b')
 * // => false
 *
 * endsWith('abc', 'b', 2)
 * // => true
 */

import endsWith from '../src/endsWith.js';
import assert from 'assert';
describe('Test endsWith.js', function () {
    it('Should return true when abc ends with c', function () {
        assert.equal(endsWith('abc', 'c'), true);
    });
    it('Should return false when abc end with b', function () {
        assert.equal(endsWith('abc', 'b'), false);
    });
    it('Should return truen when b is second last of abc', function () {
      assert.equal(endsWith('abc', 'b', 2), true);
  });
});