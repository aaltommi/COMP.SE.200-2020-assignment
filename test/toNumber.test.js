/**
 * Converts `value` to a number.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @see isInteger, toInteger, isNumber
 * @example
 *
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 */
import chai from 'chai';
import toNumber from '../src/toNumber.js';
describe('Test toNumber.js', function () {
    it('Should return number value to a number', function () {
        chai.expect(toNumber(3.2)).to.equal(3.2);
    });
    it('Should return the Number.MIN_VALUE (smallest positive number) to a number', function () {
        chai.expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    });
    it('Should return infinity value as infinity', function () {
        chai.expect(toNumber(Infinity)).to.equal(Infinity);
    });
    it('Should return string to a number', function () {
        chai.expect(toNumber('3.2')).to.equal(3.2);
    });
});