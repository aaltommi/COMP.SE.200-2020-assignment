/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
*/

import isArrayLikeObject from '../src/isArrayLikeObject.js';
import assert from 'assert';
describe('Test isArrayLikeObject.js', function () {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
    it('Should return true with input [1, 2, 3].', function () {
        assert.equal(isArrayLikeObject([1, 2, 3]), true);
    });

    // Cannot test this as the document is not usable here
    // it('Should return true with input document.body.children.', function () {
    //     assert.equal(isArrayLikeObject(document.body.children), true);
    // });
    it('Should return false with input string abc', function () {
      assert.equal(isArrayLikeObject('abc'), false);
    }); 
    it('Should return false with input function', function () {
      assert.equal(isArrayLikeObject(Function), false);
    }); 
});