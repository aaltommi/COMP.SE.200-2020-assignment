/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */

import chai from 'chai';
import isObjectLike from '../src/isObjectLike.js';
describe('Test isObjectLike.js', function () {
    it('{} should be object-like', function () {
        chai.expect(isObjectLike({})).to.equal(true);
    });
    it('[1, 2, 3] should be object-like', function () {
        chai.expect(isObjectLike([1, 2, 3])).to.equal(true);
    });
    it('Function should not be object-like', function () {
        chai.expect(isObjectLike(Function)).to.equal(false);
    });
    it('null should not be object-like', function () {
        chai.expect(isObjectLike(null)).to.equal(false);
    });
});