
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */


import isArguments from '../src/isArguments.js';
import assert from 'assert';
describe('Test isArguments.js', function () {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
    it('Should return true', function () {
        assert.equal(isArguments(function() { return arguments }()), true);
    });
    it('Should return false', function () {
        assert.equal(isArguments([1, 2, 3]), false);
    });
});