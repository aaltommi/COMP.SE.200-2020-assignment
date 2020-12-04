/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */


import isBoolean from '../src/isBoolean.js';
import assert from 'assert';
describe('Test isBoolean.js', function () {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
    it('False is Boolean', function () {
        assert.equal(isBoolean(false), true);
    });
    it('Null is not Boolean', function () {
        assert.equal(isBoolean(null), false);
    });
});