/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */

import chai from 'chai';
import isSymbol from '../src/isSymbol.js';
describe('Test isSymbol.js', function () {
    it('Symbol.iterator should be Symbol primitive data type', function () {
        chai.expect(isSymbol(Symbol.iterator)).to.equal(true);
    });
    it('abc should not be Symbol primitive data type', function () {
        chai.expect(isSymbol('abc')).to.equal(false);
    });
});