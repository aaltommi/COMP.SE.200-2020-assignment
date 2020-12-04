/**
 * Divide two numbers.
 *
 * @since 4.7.0
 * @category Math
 * @param {number} dividend The first number in a division.
 * @param {number} divisor The second number in a division.
 * @returns {number} Returns the quotient.
 * @example
 *
 * divide(6, 4)
 * // => 1.5
 */
import chai from 'chai'
import divide from '../src/divide.js';
describe('Test divide.js', function () {
    it('Should return 1.5 when dividin 6 with 4', function () {
        var divided = divide(6,4)
        chai.expect(divided).to.equal(1.5);
    });
});