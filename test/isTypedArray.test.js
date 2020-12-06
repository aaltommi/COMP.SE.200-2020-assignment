/**
 * Checks if `value` is classified as a typed array.
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */

import chai from 'chai';
import isTypedArray from '../src/isTypedArray.js';
describe('Test isTypedArray.js', function () {
    it('new Uint8Array is a typed array', function () {
        chai.expect(isTypedArray(new Uint8Array)).to.equal(true);
    });
    it('[] is not a typed array', function () {
        chai.expect(isTypedArray([])).to.equal(false);
    });

});