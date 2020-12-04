/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @see isInteger, isNumber, toInteger
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
import chai from 'chai';
import toInteger from '../src/toInteger.js';
describe('Test toInteger.js', function () {
    it('Should convert float number as an integer', function () {
        chai.expect(toInteger(3.2)).to.equal(3);
    });
    it('Should convert the Number.MIN_VALUE (smallest positive number) to an integer', function () {
        chai.expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });
    it('Should convert infinity value as an integer', function () {
        chai.expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });
    it('Should convert string to an integer', function () {
        chai.expect(toInteger('3.2')).to.equal(3);
    });
});