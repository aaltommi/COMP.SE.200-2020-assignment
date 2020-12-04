/**
 * Converts `value` to a finite number.
 *
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * toFinite(3.2)
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toFinite(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2')
 * // => 3.2
 */

import chai from 'chai';
import toFinite from '../src/toFinite.js';
describe('Test toFinite.js', function () {
    it('Should convert a number to finite number', function () {
        chai.expect(toFinite(3.2)).to.equal(3.2);
    });
    it('Should convert the Number.MIN_VALUE to a finite number', function () {
        chai.expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324);
    });
    it('Should convert infinity value as a finite number', function () {
        chai.expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308);
    });
    it('Should convert string to a finite number', function () {
        chai.expect(toFinite('3.2')).to.equal(3.2);
    });
});