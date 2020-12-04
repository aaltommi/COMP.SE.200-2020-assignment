/**
 * Converts the first character of `string` to upper case.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
import chai from 'chai';
import upperFirst from '../src/upperFirst.js';
describe('Test upperFirst.js', function () {
    it('Should return Uppercase to the first letter', function () {
        chai.expect(upperFirst('fred')).to.equal('Fred');
    });
    it('Should return same word', function () {
        chai.expect(upperFirst('FRED')).to.equal('FRED');
    });
});
