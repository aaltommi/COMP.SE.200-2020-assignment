
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */


import isArrayLike from '../src/isArrayLike.js';
import assert from 'assert';
describe('Test isArrayLike.js', function () {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
    it('Should return true with input [1, 2, 3]', function () {
        assert.equal(isArrayLike([1, 2, 3]), true);
    });
    // Cannot test this as the document is not usable here
    // it('Should return true with input document.body.children', function () {
    //     assert.equal(isArrayLike(document.body.children), true);
    // });
    it('Should return true with input string abc', function () {
      assert.equal(isArrayLike('abc'), true);
    }); 
    it('Should return false with input Function', function () {
      assert.equal(isArrayLike(Function), false);
    });
});