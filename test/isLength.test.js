/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */

import chai from 'chai';
import isLength from '../src/isLength.js';
describe('Test isLength.js', function () {
    it('3 should be valid length', function () {
        chai.expect(isLength(3)).to.equal(true);
    });
    it('Number.MIN_VALUE should be valid length', function () {
        chai.expect(isLength(Number.MIN_VALUE)).to.equal(false);
    });
    it('Infinity should not be valid length', function () {
        chai.expect(isLength(Infinity)).to.equal(false);
    });
    it('"3" should not be valid length', function () {
        chai.expect(isLength('3')).to.equal(false);
    });
});