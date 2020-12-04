
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */

import chai from 'chai';
import toString from '../src/toString.js';
describe('Test toString.js', function () {
    it('Should return null as an empty string', function () {
        chai.expect(toString(null)).to.equal('');
    });
    it('Should return same sign of the -0 to a string', function () {
        chai.expect(toString(-0)).to.equal('-0');
    });
    it('Should return array [1,2,3] to a string', function () {
        chai.expect(toString([1, 2, 3])).to.equal('1,2,3');
    });
});